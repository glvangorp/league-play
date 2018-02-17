
import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
    

class TableExampleSimple extends React.Component {

   state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ 
                response: res.express 
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

    render (props) {
        
        return ( 
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>5</TableRowColumn>
                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                </TableBody>
            </Table>
        );

}

export default TableExampleSimple;