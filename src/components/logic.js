import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import './logic.css'
export default class logic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: "08/22/2020",
    };
  }
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  }
// remove mui input underline from the class MuiInput-underline
  render() {
    return (
      <div className="dc">
        <MuiPickersUtilsProvider utils={DateFnsUtils} className='MuiInput-underline'>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className='MuiInput-underline'
        />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
