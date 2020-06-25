import React, { Component } from 'react';
import Container from '../../includes/container';
import './createOrder.scss';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class createOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { } = this.state;
        return (
            <Container className="acc-billing-wrapper">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}