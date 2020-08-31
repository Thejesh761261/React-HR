import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Filter extends Component {
  render() {
    return (
      <div>
        <span style={{ verticalAlign: "bottom" }}>
          Filter By: &nbsp;&nbsp;&nbsp;{" "}
        </span>

        <TextField
          id="date"
          label="Transaction Date"
          type="date"
          defaultValue="2019-11-29"
          InputLabelProps={{
            shrink: true
          }}
          onChange=""
        />
        <span style={{ verticalAlign: "bottom" }}>
          <Button variant="contained" onClick="">
            Filter
          </Button>
        </span>
      </div>
    );
  }
}
export default Filter;
