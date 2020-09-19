import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userData } from '../../actions/actions';
import Container from '../../includes/container';
import './orderListing.scss';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classnames from 'classnames';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import emptyState from '../../assets/images/empty-state.png';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Alert from '../../components/alerts/alerts';
import Divider from '@material-ui/core/Divider';

class orderListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            editOpen: false,
            viewOpen: false,
            selectedOrder: {},
            columns: [
                {
                    name: "id",
                    label: "ID",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "title",
                    label: "Title",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "pages",
                    label: "Pages",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "academic_level",
                    label: "Academic Level",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "action",
                    label: "Action",
                    options: {
                        filter: false,
                        sort: false,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            let id = tableMeta.rowData[0];
                            return (
                                <div className="action-icons">
                                    <VisibilityIcon onClick={() => this.viewOrder(id)} />
                                    <EditIcon />
                                    <DeleteIcon />
                                </div>
                            );
                        }
                    }
                }
            ],
            options: {
                filterType: "dropdown",
                responsive: "scroll",
                selectableRows: false,
                selectableRowsHeader: false
            }
        }
    }
    tabToggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }
    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableHeadCell: {
                root: {
                    '&:last-child': {
                        width: 150
                    }
                }
            }
        }
    })

    modalToggle = (state) => {
        this.setState({ [state]: !this.state[state] });
    }
    viewOrder = (id) => {
        const { data } = this.props;
        if (id) {
            let currentData = data.filter(d => d.id === id);
            this.setState({ selectedOrder: currentData[0] });
            console.log(this.state.selectedOrder, currentData)
            this.modalToggle('viewOpen');
        }
    }

    generateTables = (status) => {
        const { data, dataError } = this.props;
        const { columns, options } = this.state;
        let tableData = [];

        if (data && data.length) {
            tableData = data.filter(d => d.status === status);
        }

        if (dataError) {
            return <Alert type="danger" show={dataError} text={dataError} />;
        } else if (tableData && tableData.length) {
            return (
                <React.Fragment>

                    <MuiThemeProvider theme={this.getMuiTheme()}>
                        <MUIDataTable
                            title={status + " Orders"}
                            data={tableData}
                            columns={columns}
                            options={options}
                        />
                    </MuiThemeProvider>
                </React.Fragment>
            )
        } else {
            return (
                <div className="empty-state">
                    <img className="placeholder-img" src={emptyState} />
                    <p>No orders found yet!</p>
                    <RouterNavLink exact to='/dashboard/create-order' className="btn btn-primary">Order Now</RouterNavLink>
                </div>
            )
        }
    }

    render() {
        const { activeTab, editOpen, viewOpen } = this.state;
        return (
            <Container className="dashboard-wrapper" >
                <h4 className="mb-5">Welcome Ali</h4>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { this.tabToggle('1'); }}
                        >
                            Recent
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { this.tabToggle('2'); }}
                        >
                            Finished
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { this.tabToggle('3'); }}
                        >
                            Canceled
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        {this.generateTables("recent")}
                    </TabPane>
                    <TabPane tabId="2">
                        {this.generateTables("finished")}
                    </TabPane>
                    <TabPane tabId="3">
                        {this.generateTables("canceled")}
                    </TabPane>
                </TabContent>
                <Modal isOpen={viewOpen} toggle={() => this.modalToggle('viewOpen')}>
                    <ModalHeader toggle={() => this.modalToggle('viewOpen')}>Order # {this.state.selectedOrder.id ? this.state.selectedOrder.id : ''}</ModalHeader>
                    <ModalBody>
                        <h5>Title</h5>
                        <p>
                            {this.state.selectedOrder.title ? this.state.selectedOrder.title : ''}
                        </p>
                        <Divider />
                        <h5>Pages</h5>
                        <p>
                            {this.state.selectedOrder.pages ? this.state.selectedOrder.pages : ''}
                        </p>
                        <Divider />
                        <h5>Academic level</h5>
                        <p>
                            {this.state.selectedOrder.academic_level ? this.state.selectedOrder.academic_level : ''}
                        </p>
                        

                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

function mapState(state) {
    const { userDataReducer } = state;
    return { data: userDataReducer.data, dataError: userDataReducer.errorMessage };
}

const actionCreators = {};

export default connect(mapState, actionCreators)(orderListing);