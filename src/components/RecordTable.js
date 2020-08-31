import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Filter from "./Filter";
class RecordTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFilter: "2019-11-29",
      txns: this.props.txns
    };

    this.filter = this.filter.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.sort = this.sort.bind(this);
  }

  filter() {
    let filtered = this.props.txns.filter(txn=>txn.date===this.state.dateFilter)

    this.setState({txns:filtered});

  }
  handleDateChange = event => {
    this.setState({dateFilter:event})
  };

  sort() {
    let sorted = this.state.txns.sort((a,b)=>{
      if(a.amount<b.amount){
        return -1;
      }
      if(a.amount>b.amount){
        return 1;
      }
      return 0;
    })
    this.setState({txns:sorted})
  }
  render() {
    return (
      <div>
        <Filter handleDateChange={this.handleDateChange} filter={this.filter} />
        <br />
        <br />
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "darkgray" }}>
              <TableCell className="table-header">Date</TableCell>
              <TableCell className="table-header">Description</TableCell>
              <TableCell className="table-header">Type</TableCell>
              <TableCell className="table-header">
                <span id="amount" onClick={this.sort}>
                  Amount ($)
                </span>
              </TableCell>
              <TableCell className="table-header">Available Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {this.state.txns.map(txn=>(
             <TableRow key={txn.id}>
             <TableCell>{txn.date}</TableCell>
             <TableCell>{txn.description}</TableCell>
             <TableCell>{txn.type === 1 ? "Debit" : "Credit"}</TableCell>
             <TableCell>{txn.amount}</TableCell>
             <TableCell>{txn.balance}</TableCell>
           </TableRow>

           ))}
            
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default RecordTable;
