/* React */
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import './Dashboard.css';

class Dashboard extends React.Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ 
                users: res.users 
            }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/v1/get-users');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }

        return body;
    };

    render() {
        return (
            <div>
                <AppBar title="League Play Dashboard" />
                <div className="users-table">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>First Name</TableHeaderColumn>
                                <TableHeaderColumn>Last Name</TableHeaderColumn>
                                <TableHeaderColumn>Handicap</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            { 
                                this.state.users.map( function(u, i) {
                                    console.log(u);
                                    console.log('renderer');
                                    return (
                                        <TableRow key={i}>
                                            <TableRowColumn>{u.id}</TableRowColumn>
                                            <TableRowColumn>{u.first_name}</TableRowColumn>
                                            <TableRowColumn>{u.last_name}</TableRowColumn>
                                            <TableRowColumn>{u.handicap}</TableRowColumn>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        );
    }

}

export default withRouter(Dashboard);
