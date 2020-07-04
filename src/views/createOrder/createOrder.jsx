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

const Card = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: '30px',
            textAlign: 'left',
            color: '#000',
        }

    }));
    const classes = useStyles();
    return (
        <Paper {...props} className={classes.paper}>{props.children}</Paper>
    )
};

export default class createOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...data
        }
    }
    handleSelect = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { classes } = this.props;
        return (
            <Container className="order-wrapper" container="order-container">
                <Grid container={true} spacing={3}>
                    <Grid item xs={8}>
                        <Card>
                            <h4 className="mb-1 hed">PLACE AN ORDER</h4>
                            <p className="mb-4 sub-hed">It's fast, secure and confidential</p>

                            <h4 className="mb-3 hed-2 mt-3">Academic level</h4>
                            <Grid container={true} spacing={3}>
                                {this.state.levels.map((level, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i} className={this.state.selectedLevels === level.id ? "active selct-card" : "selct-card"}>

                                        <Card
                                            onClick={() => {
                                                this.setState({
                                                    selectedLevels: level.id,
                                                    selectedPrice: level.prices,
                                                    selectedName: level.level
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
                            <Grid container={true} spacing={3}>
                                {this.state.selectedPrice.map((deadline, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i} className={this.state.selectedHours === deadline.hours ? "active selct-card" : "selct-card"}>
                                        <Card
                                            onClick={() => {
                                                this.setState({
                                                    selectedHours: deadline.hours
                                                });
                                            }}
                                            style={{ height: '100%' }}
                                        >

                                            {deadline.label}

                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <h4 className="mt-5 mb-3 hed-2 mt-3">Paper format</h4>
                            <Grid container={true} spacing={3}>
                                {this.state.paperFormat.map((format, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i} className={this.state.selectedPaperFormat === format.name ? "active selct-card" : "selct-card"}>
                                        <Card
                                            onClick={() => {
                                                this.setState({
                                                    selectedPaperFormat: format.name
                                                });
                                            }}
                                            style={{ height: '100%' }}
                                        >
                                            {format.name}
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                            <h4 className="mt-5 mb-3 hed-2 mt-3">Spacing</h4>
                            <Grid container={true} spacing={3}>
                                {this.state.spacing.map((space, i) => (

                                    <Tooltip
                                        id="tooltip-top"
                                        title={space.tooltipText}
                                        placement="top"
                                        arrow
                                        key={i}
                                    >
                                        <Grid item xs={12} sm={6} md={4} key={i} className={this.state.selectedSpace === space.value ? "active selct-card" : "selct-card"}>
                                            <Card
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
                            <h4 className="mt-5 mb-3 hed-2 mt-3">Writer category</h4>
                            <Grid container={true} spacing={3}>
                                {this.state.writingCategory.map((category, i) => (
                                    <Grid item xs={12} sm={6} md={4} key={i} className={this.state.selectedWritingCategory === category.id ? "active selct-card" : "selct-card"}>
                                        <Card
                                            onClick={() => {
                                                this.setState({
                                                    selectedWritingCategory: category.id
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
                                        <InputLabel id="select-paper-type" className="selectInput">Select paper type</InputLabel>
                                        <Select
                                            labelId="select-paper-type"
                                            value={this.state.selectedPaperType}
                                            onChange={this.handleSelect}
                                            label="Select paper type"
                                            inputProps={{
                                                name: 'selectedPaperType',
                                                id: 'select-paper-type-outlined',
                                            }}
                                        >
                                            {this.state.paperType.map((paper, i) => (
                                                <MenuItem
                                                    key={i}

                                                    value={paper.type}
                                                >
                                                    {paper.type}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <TextField label="Enter the title of your paper" variant="outlined" className="selectInput" />
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={3} className="mt-3">
                                <Grid item md={12}>
                                    <TextField
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
                                        <InputLabel id="select-discipline" className="selectInput" htmlFor="grouped-select">Select Discipline</InputLabel>
                                        <Select
                                            labelId="select-discipline"
                                            value={this.state.selectedSubject}
                                            onChange={this.handleSelect}
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
                                        className="selectInput"
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
                                        className="selectInput"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>
                    <Grid item xs={4}>
                        <Card>test</Card>
                    </Grid>
                </Grid>
            </Container>

        );
    }
}