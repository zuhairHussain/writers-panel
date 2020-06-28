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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Card = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: '25px',
            textAlign: 'left',
            color: '#000',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },

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
            <Container className="order-wrapper">
                <Grid container={true} spacing={3}>
                    <Grid item xs={8}>
                        <Card>
                            <h4 class="mb-1 hed">PLACE AN ORDER</h4>
                            <p class="mb-5 sub-hed">It's fast, secure and confidential</p>

                            <p class="mb-3 sec-label">Paper Details</p>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <h4 class="mb-3 hed mt-3">Academic level</h4>
                            <Grid container={true} spacing={6}>
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


                            <h4 class="mb-3 hed mt-3">Deadline</h4>
                            {this.state.selectedPrice.map((deadline, i) => (
                                <Grid xs={12} sm={6} md={4} key={i}>
                                    <div className={this.state.selectedHours === deadline.hours ? "active selct-card" : "selct-card"}
                                        onClick={() => {
                                            this.setState({
                                                selectedHours: deadline.hours
                                            })
                                        }}>

                                        {deadline.label}

                                    </div>
                                </Grid>
                            ))}
                            <h4 class="mb-3 hed mt-3">Paper format</h4>
                            {this.state.paperFormat.map((format, i) => (
                                <Grid xs={12} sm={6} md={4} key={i}>
                                    <div className={this.state.selectedPaperFormat === format.name ? "active selct-card" : "selct-card"}
                                        onClick={() => {
                                            this.setState({
                                                selectedPaperFormat: format.name
                                            })
                                        }}
                                    >
                                        {format.name}
                                    </div>
                                </Grid>
                            ))}
                            <h4 class="mb-3 hed mt-3">Spacing</h4>
                            {this.state.spacing.map((space, i) => (
                                <Grid xs={12} sm={6} md={4} key={i}>
                                    <Tooltip
                                        id="tooltip-top"
                                        title={space.tooltipText}
                                        placement="top"
                                    >
                                        <div className={this.state.selectedSpace === space.value ? "active selct-card" : "selct-card"}
                                            onClick={() => {
                                                this.setState({
                                                    selectedSpace: space.value
                                                })
                                            }}
                                        >
                                            {space.value}
                                        </div>
                                    </Tooltip>
                                </Grid>
                            ))}

                            <h4 class="mb-3 hed mt-3">Writer category</h4>
                            {this.state.writingCategory.map((category, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <div className={this.state.selectedWritingCategory === category.id ? "active selct-card" : "selct-card"}
                                        onClick={() => {
                                            this.setState({
                                                selectedWritingCategory: category.id
                                            })
                                        }}
                                    >
                                        <div>
                                            <b>{category.label}</b> {category.extra}
                                        </div>
                                        <div>
                                            {category.description}
                                        </div>

                                    </div>
                                </Grid>
                            ))}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">Select paper type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={this.state.selectedPaperType}
                                        onChange={this.handleSelect}
                                        label="Select paper type"
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
                            <p class="mb-3 sec-label">Title</p>
                            <TextField label="Enter the title of your paper" variant="outlined" />
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