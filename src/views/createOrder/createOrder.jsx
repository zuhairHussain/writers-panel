import React, { Component } from 'react';
import Container from '../../includes/container';
import './createOrder.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import data from '../../variables/data';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormHelperText from '@material-ui/core/FormHelperText';
import StickySidebar from 'sticky-sidebar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Alert from '../../components/alerts/alerts';

import { connect } from 'react-redux';
import { orderRequest } from '../../actions/actions';

const Card = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: props.padding ? props.padding : '10px',
            textAlign: 'left',
            color: '#000',
            backgroundColor: props.bgColor ? props.bgColor : '#fff'
        }

    }));
    const classes = useStyles();
    return (
        <Paper {...props} className={classes.paper}>{props.children}</Paper>
    )
};

class createOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...data,
            addService1: false,
            addService2: false,
            addService3: false,
            addService4: false,
            selectedPaperType: '',
            grandTotal: 200,
            token: localStorage.getItem("user")
        }
    }
    componentDidMount() {
        new StickySidebar('.sidebar', {
            topSpacing: 87,
            bottomSpacing: 20,
            containerSelector: '.cnt-wrp',
            innerWrapperSelector: '.sidebar__inner'
        });
    }
    handleChange = (prop) => (event) => {
        this.setState({ [prop]: event.target.value }, () => {
            console.log(this.state)
        });
    };

    findElementPos = (obj) => {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop - 45;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

    submit = () => {
        const { paperTitle, selectedPaperType, selectedSubject, selectedLevels, note, grandTotal, selectedHours, selectedPaperFormat,
            selectedSpace, selectedWritingCategory, pageCount, sourceCount, chartCount, slideCount, selectedAdditionalServices, token,
            addService1, addService2, addService3, addService4 } = this.state;
        this.setState({ paperTitleErr: '', selectedPaperTypeErr: '', selectedSubjectErr: '' });

        if (!selectedPaperType) {
            this.setState({ selectedPaperTypeErr: "Paper type is required!" });
        } else if (!paperTitle) {
            this.setState({ paperTitleErr: "Title is required!" });
        } else if (!selectedSubject) {
            this.setState({ selectedSubjectErr: "Discipline is required." });
        } else {
            let additionalServices = [addService1, addService2, addService3, addService4];
            let payload = {
                academic_level: selectedLevels,
                order_title: paperTitle,
                order_note: note,
                order_price: grandTotal,
                order_deadline: selectedHours,
                order_action: 1,
                order_status: 1,
                paper_format: selectedPaperFormat,
                spacing: selectedSpace,
                writer_category: selectedWritingCategory,
                writeup_discipline: 'History',//selectedSubject
                paper_type: selectedPaperType,
                pages_count: pageCount,
                sources_count: sourceCount,
                charts_count: chartCount,
                slides_count: slideCount,
                additional_material: null,
                additional_services: 'Smart paper',
                token: token ? JSON.parse(token).token : ''
            }
            console.log(payload, this.state);
            this.props.orderRequest(payload);
        }

        setTimeout(() => {
            var elmnt = document.getElementsByClassName('Mui-error')[0];
            if (typeof elmnt !== "undefined") {
                window.scroll(0, this.findElementPos(elmnt.parentElement));
            }
        }, 200)
    }

    render() {
        const { addService1, addService2, addService3, addService4, selectedWritingCategoryPercentage, selectedSpace,
            paperTitle, selectedAmount, pageCount, slideCount, chartCount,
            selectedName, selectedPaperTypeErr, paperTitleErr, selectedSubjectErr
        } = this.state;
        let grandTotal, totalPagePrice, totalSlidePrice, totalChartPrice, WriterPreferences;
        let totalCost = selectedAmount;
        if (selectedSpace !== "Double") totalCost = totalCost * 2;

        totalPagePrice = pageCount * totalCost;
        totalSlidePrice = slideCount * selectedAmount / 2;
        totalChartPrice = chartCount * selectedAmount / 2;

        grandTotal = totalPagePrice + totalSlidePrice + totalChartPrice;
        WriterPreferences = selectedWritingCategoryPercentage !== 0 ? selectedWritingCategoryPercentage * grandTotal : 0;
        grandTotal = grandTotal + WriterPreferences;

        /* Additional Services */
        let ser1, ser2, ser3, ser4;
        let onlyPSC = totalPagePrice + totalSlidePrice + totalChartPrice;
        ser1 = addService1 ? 0.20 * onlyPSC : 0;

        ser2 = addService2 ? 5 : 0;

        ser3 = addService3 ? 0.10 * onlyPSC : 0;

        ser4 = addService4 ? 0.10 * onlyPSC : 0;

        grandTotal = grandTotal + ser1 + ser2 + ser3 + ser4;

        return (
            <Container className="order-wrapper" container="order-container">
                <Grid container={true} spacing={3} className="cnt-wrp">
                    <Grid item xs={8}>
                        <Card padding="30px">
                            <h4 className="mb-1 hed">PLACE AN ORDER</h4>
                            <p className="mb-4 sub-hed">It's fast, secure and confidential</p>

                            <h4 className="mb-3 hed-2 mt-3">Academic level</h4>
                            <Grid container={true} spacing={2}>
                                {this.state.levels.map((level, i) => (
                                    <Grid item xs={12} sm={6} md={2} key={i} className={this.state.selectedLevels === level.id ? "active selct-card" : "selct-card"}>

                                        <Card
                                            bgColor="#f4f8f9"
                                            onClick={() => {
                                                this.setState({
                                                    selectedLevels: level.id,
                                                    selectedPrice: level.prices,
                                                    selectedName: level.level,
                                                    selectedHours: level.prices[0].hours,
                                                    selectedAmount: level.prices[0].amount
                                                });
                                            }}
                                            style={{ height: '100%' }}
                                        >
                                            {level.level}
                                        </Card>

                                    </Grid>
                                ))}
                            </Grid>


                            <h4 className="mt-5 mb-3 hed-2 mt-3">Deadline</h4>
                            <Grid container={true} spacing={1}>
                                {this.state.selectedPrice.map((deadline, i) => (
                                    <Grid item xs={12} sm={6} md={1} key={i} className={this.state.selectedHours === deadline.hours ? "active selct-card" : "selct-card"}>
                                        <Card
                                            bgColor="#f4f8f9"
                                            onClick={() => {
                                                this.setState({
                                                    selectedHours: deadline.hours,
                                                    selectedAmount: deadline.amount
                                                });
                                            }}
                                            style={{ height: '100%', textAlign: 'center' }}
                                        >

                                            {deadline.label}

                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <h4 className="mt-5 mb-3 hed-2 mt-3">Paper format</h4>
                            <Grid container={true} spacing={1}>
                                {this.state.paperFormat.map((format, i) => (
                                    <Grid item xs={12} sm={6} md={2} key={i} className={this.state.selectedPaperFormat == format.id ? "active selct-card" : "selct-card"}>
                                        <Card
                                            bgColor="#f4f8f9"
                                            onClick={() => {
                                                this.setState({
                                                    selectedPaperFormat: format.id
                                                });
                                            }}
                                            style={{ height: '100%' }}
                                        >
                                            {format.name}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid container={true}>
                                <Grid container={true} spacing={1} xs={12} md={6}>
                                    <h4 className="mt-5 mb-3 hed-2 mt-3">Spacing</h4>
                                    <Grid container={true} spacing={1}>
                                        {this.state.spacing.map((space, i) => (

                                            <Tooltip
                                                id="tooltip-top"
                                                title={space.tooltipText}
                                                placement="top"
                                                arrow
                                                key={i}
                                            >
                                                <Grid item xs={6} sm={6} md={4} key={i} className={selectedSpace === space.value ? "active selct-card" : "selct-card"}>
                                                    <Card
                                                        bgColor="#f4f8f9"
                                                        onClick={() => {
                                                            this.setState({
                                                                selectedSpace: space.value
                                                            });
                                                        }}
                                                        style={{ height: '100%' }}
                                                    >
                                                        {space.value}
                                                    </Card>
                                                </Grid>
                                            </Tooltip>
                                        ))}
                                    </Grid>
                                </Grid>

                                <Grid container={true} spacing={1} xs={12} md={6}>
                                    <Grid item md={6} sm={12}>
                                        <div>
                                            <h4 className="mt-5 mb-3 hed-2 mt-3">Additional materials</h4>
                                            <input
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span">
                                                    Upload
                                                </Button>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <h4 className="mt-5 mb-3 hed-2 mt-3">Writer category</h4>
                            <Grid container={true} spacing={1}>
                                {this.state.writingCategory.map((category, i) => (
                                    <Grid item xs={12} sm={6} md={3} key={i} className={this.state.selectedWritingCategory === category.id ? "active selct-card" : "selct-card"}>
                                        <Card
                                            bgColor="#f4f8f9"
                                            onClick={() => {
                                                this.setState({
                                                    selectedWritingCategory: category.id,
                                                    selectedWritingCategoryPercentage: category.percentage
                                                });
                                            }}
                                            style={{ height: '100%' }}
                                        >
                                            <div>
                                                <b>{category.label}</b> {category.extra}
                                            </div>
                                            <div>
                                                {category.description}
                                            </div>

                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            <Grid container={true} spacing={3} className="mt-5">
                                <Grid item md={6} sm={12}>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="select-paper-type" className="selectInput" htmlFor="selectedPaperType">Select paper type</InputLabel>
                                        <Select
                                            value={this.state.selectedPaperType}
                                            onChange={this.handleChange('selectedPaperType')}
                                            label="Select paper type"
                                            inputProps={{
                                                name: 'selectedPaperType',
                                                id: 'selectedPaperType'
                                            }}
                                            error={selectedPaperTypeErr ? true : false}
                                            helperText={selectedPaperTypeErr ? selectedPaperTypeErr : ''}
                                        >
                                            {this.state.paperType.map((paper, i) => (
                                                <MenuItem
                                                    key={i}

                                                    value={paper.id}
                                                >
                                                    {paper.type}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                        {selectedPaperTypeErr ? <FormHelperText error>{selectedPaperTypeErr}</FormHelperText> : ''}

                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        onChange={this.handleChange('paperTitle')}
                                        inputProps={{
                                            name: 'paperTitle',
                                        }}
                                        label="Enter the title of your paper"
                                        variant="outlined"
                                        className="selectInput"
                                        error={paperTitleErr ? true : false}
                                        helperText={paperTitleErr ? paperTitleErr : ''}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item md={12}>
                                    <TextField
                                        onChange={this.handleChange('note')}
                                        inputProps={{
                                            name: 'note',
                                        }}
                                        id="outlined-multiline-static"
                                        label="Note"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        className="selectInput"
                                        placeholder=""
                                    />
                                    <FormHelperText>Write anything you feel is important for the writer to consider. An outline, a grading scale, and other documents may be uploaded as additional materials.</FormHelperText>
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item md={12}>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="select-discipline" className="selectInput" htmlFor="select-subject-outlined">Select Discipline</InputLabel>
                                        <Select
                                            error={selectedSubjectErr ? true : false}
                                            labelId="select-discipline"
                                            value={this.state.selectedSubject}
                                            onChange={this.handleChange('selectedSubject')}
                                            label="Select Discipline"
                                            inputProps={{
                                                name: 'selectedSubject',
                                                id: 'select-subject-outlined',
                                            }}
                                        >
                                            {this.state.subjectList.map((subjectCategories, j) => {
                                                return (
                                                    subjectCategories.category_names.map((d, i) => {
                                                        {
                                                            return d.isLabel ? (
                                                                <ListSubheader key={i} style={{ backgroundColor: "#fff" }}>{d.name}</ListSubheader>
                                                            ) : (
                                                                    <MenuItem
                                                                        key={i}
                                                                        value={j + "-" + d.subject_name}
                                                                    >
                                                                        {d.subject_name}
                                                                    </MenuItem>
                                                                )
                                                        }

                                                    })
                                                )
                                            })}

                                        </Select>
                                        {selectedSubjectErr ? <FormHelperText error>{selectedSubjectErr}</FormHelperText> : ''}
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="Pages Count"
                                        type="number"
                                        defaultValue="1"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleChange('pageCount')}
                                        inputProps={{
                                            name: 'pageCount',
                                            min: "0"
                                        }}
                                        className="selectInput"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="Sources Count"
                                        type="number"
                                        defaultValue="0"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleChange('sourceCount')}
                                        inputProps={{
                                            name: 'sourceCount',
                                            min: "0"
                                        }}
                                        className="selectInput"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="Charts Count"
                                        type="number"
                                        defaultValue="0"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleChange('chartCount')}
                                        inputProps={{
                                            name: 'chartCount',
                                            min: "0"
                                        }}
                                        className="chartsInput"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField
                                        label="slides Count"
                                        type="number"
                                        defaultValue="0"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleChange('slideCount')}
                                        inputProps={{
                                            name: 'slideCount',
                                            min: "0"
                                        }}
                                        className="selectInput"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item sm={12}>
                                    <h4 className="mt-5 mb-3 hed-2 mt-3">Additional services</h4>
                                    <List>
                                        {this.state.additionalServices.map((value, i) => {
                                            const labelId = `checkbox-list-label-${value}`;
                                            let isSelected = this.state["addService" + value.id];

                                            return (
                                                <ListItem
                                                    key={i}
                                                    role={undefined}
                                                    dense
                                                    button
                                                    onClick={() => {
                                                        this.setState({ ["addService" + value.id]: !isSelected })
                                                    }}>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                            checked={isSelected}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText id={labelId} primary={value.label + ' ' + value.extra} secondary={value.description} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>
                    <Grid item xs={3} className="sidebar">
                        <Card padding="30px" className="sidebar__inner">
                            {paperTitle && <h5 className="mb-4">{paperTitle}</h5>}
                            {selectedName && <h6>{selectedName}</h6>}
                            <hr />
                            {pageCount > 0 || slideCount > 0 || chartCount > 0 ?
                                (
                                    <React.Fragment>
                                        {pageCount > 0 && <div>{pageCount} page x Rs.{totalCost} <span className="float-right">Rs.{totalPagePrice.toFixed(2)}</span></div>}
                                        {chartCount > 0 && <div>{chartCount} chart x Rs.{selectedAmount / 2} <span className="float-right">Rs.{totalChartPrice.toFixed(2)}</span></div>}
                                        {slideCount > 0 && <div>{slideCount} slide x Rs.{selectedAmount / 2} <span className="float-right">Rs.{totalSlidePrice.toFixed(2)}</span></div>}
                                        {WriterPreferences != 0 && <div>Writer preferences <span className="float-right">Rs.{WriterPreferences.toFixed(2)}</span></div>}
                                        {addService1 && <div>Smart Paper <span className="float-right">Rs.{ser1.toFixed(2)}</span></div>}
                                        {addService2 && <div>Writer Samples <span className="float-right">Rs. {ser2.toFixed(2)}</span></div>}
                                        {addService3 && <div>Copy of Sources <span className="float-right">Rs.{ser3.toFixed(2)}</span></div>}
                                        {addService4 && <div>Progressive Delivery <span className="float-right">Rs.{ser4.toFixed(2)}</span></div>}
                                        <hr />
                                        Total Price {grandTotal ? <span className="float-right">Rs.{grandTotal.toFixed(2)}</span> : 0}
                                    </React.Fragment>
                                )
                                : <Alert type="danger" show={true} text="You need to order at least 1 page or 1 slide or 1 chart" />
                            }
                            <Button
                                className="mt-3"
                                style={{ display: 'block', textAlign: 'center' }}
                                variant="contained"
                                color="primary"
                                component="span"
                                size="large"
                                onClick={() => this.submit()}>
                                Place Order
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        );
    }
}

function mapState(state) {
    const { } = state;
    return {};
}

const actionCreators = {
    orderRequest: orderRequest
};

export default connect(mapState, actionCreators)(createOrder);