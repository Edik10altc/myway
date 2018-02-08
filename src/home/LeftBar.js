import 'rc-calendar/assets/index.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
//import 'rc-time-picker/assets/index.css';
//import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import './LeftBar.css';

const format = 'YYYY-MM-DD HH:mm:ss';
//const cn = location.search.indexOf('cn') !== -1;

const now = moment();
const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');



class LeftBar extends Component {
    constructor(props) {
        super(props);
    }

    getFormat(time) {
        return  'YYYY-MM-DD';
    }




  render() {
    return (
      <div className="LeftBar">
          <Calendar
              locale={enUS}
              showDateInput={true}
              formatter={this.getFormat(false)}
              timePicker={null}
              defaultValue={this.props.defaultCalendarValue}
              showDateInput={true}
          />
      </div>
    )}
}

export default LeftBar;
