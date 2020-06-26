import React, { Component } from 'react';
import Container from '../../includes/container';
import './createOrder.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
    }));
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>{props.children}</Paper>
    )
};

export default class createOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <Container className="order-wrapper">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Card>
                            <h4 class="mb-1 hed">PLACE AN ORDER</h4>
                            <p class="mb-5 sub-hed">It's fast, secure and confidential</p>

                            <p class="mb-3 sec-label">Paper Details</p>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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