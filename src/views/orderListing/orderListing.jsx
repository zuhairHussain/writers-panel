import React, { Component } from 'react';
import Container from '../../includes/container';
import './orderListing.scss';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class orderListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }
    toggle = tab => {
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
    render() {
        const { activeTab } = this.state;
        const columns = [
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
                        return (
                            <div className="action-icons">
                                <VisibilityIcon />
                                <EditIcon />
                                <DeleteIcon />
                            </div>
                        );
                    }
                }
            }
        ];
        const options = {
            filterType: "dropdown",
            responsive: "scroll",
            selectableRows: false,
            selectableRowsHeader: false
        };
        const data = [
            { id: 1, title: "Test Corp", pages: 20, academic_level: "Phd" },
            { id: 2, title: "Test Corp", pages: 56, academic_level: "Phd" },
            { id: 3, title: "Test Corp", pages: 69, academic_level: "Phd" },
            { id: 4, title: "Test Corp", pages: 10, academic_level: "Phd" },
        ];

        return (
            <Container className="dashboard-wrapper" >
                <h4 className="mb-5">Welcome Ali</h4>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Recent
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Finished
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Canceled
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <MuiThemeProvider theme={this.getMuiTheme()}>
                            <MUIDataTable
                                title={"Employee List"}
                                data={data}
                                columns={columns}
                                options={options}
                            />
                        </MuiThemeProvider>

                    </TabPane>
                    <TabPane tabId="2">

                    </TabPane>
                    <TabPane tabId="3">

                    </TabPane>
                </TabContent>
            </Container>
        );
    }
}

export default orderListing;