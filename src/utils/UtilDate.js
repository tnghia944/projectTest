'use strict';
import moment from 'moment';
import _ from 'lodash';
// moment().lang('vi');
//'YYYY-MM-DDTHH:mm:ss' quêt định format chung cho kiểu ngày giờ nha

export default class UtilDate {
  //Server UTC
  //static formatDateTimeServer = 'YYYY-MM-DDTHH:mm:ss'; // HH = 24h
  static formatDateTimeServer = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'; // HH = 24h

  static formatDateServer = 'YYYY-MM-DD';
  static formatTimeServer = 'THH:mm:ss';
  //Local
  static formatDateTimeLocal = 'DD/MM/YYYY HH:mm';
  static formatTimeDateLocal = 'HH:mm DD/MM/YYYY';
  static formatDateLocal = 'DD/MM/YYYY';
  static formatTimeLocal = 'HH:mm';
  static formatDate = 'DD/MM';
  static formatDateDayWeek = 'DD MMM YYYY (dddd)';
  //sameDay: '[Today], h A',
  static formatCalendar = {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: UtilDate.formatDate + ' (dddd)',
    lastDay: UtilDate.formatDate + ' (dddd)',
    lastWeek: UtilDate.formatDate + ' (dddd)',
    sameElse: UtilDate.formatDate + ' (dddd)'
  };

  static isValid(dateTime) {
    try {
      return moment(dateTime).isValid();
    } catch (e) {
      return false;
    }
  }

  static isValidDate(dateTime) {
    return dateTime instanceof Date && !isNaN(dateTime);
  }
  static toDateTimeChart(dateTime, isFormateHour = true) {
    try {
      if (_.isUndefined(dateTime) || _.isNull(dateTime)) {
        return '';
      }
      if (isFormateHour) {
        return moment(dateTime).format(UtilDate.formatTimeLocal);
      } else {
        return moment(dateTime).format(UtilDate.formatDate);
      }
    } catch (e) {
      return null;
    }
  }
  static toDateTimeLocal(dateTime, isUTC = true, undefinedString ) {
    try {
      if (!UtilDate.isValid(dateTime) || _.isUndefined(dateTime) || _.isNull(dateTime)) {
        return undefinedString;
      }
      if (isUTC) {
        /*
                let utcTime = "2017-02-02 08:00:13";
                var local_date= moment.utc(utcTime ).local().format('YYYY-MM-DD HH:mm:ss');
                */
        return moment
          .utc(dateTime)
          .local()
          .format(UtilDate.formatDateTimeLocal);
      } else {
        return moment(dateTime).format(UtilDate.formatDateTimeLocal);
      }
    } catch (e) {
      return undefinedString;
    }
  }

  static toTimeDateLocal(dateTime, isUTC, undefinedString ) {
    try {
      if (!UtilDate.isValid(dateTime) || _.isUndefined(dateTime) || _.isNull(dateTime)) {
        return undefinedString;
      }
      if (isUTC) {
        /*
                let utcTime = "2017-02-02 08:00:13";
                var local_date= moment.utc(utcTime ).local().format('YYYY-MM-DD HH:mm:ss');
                */
        return moment
          .utc(dateTime)
          .local()
          .format(UtilDate.formatTimeDateLocal);
      } else {
        return moment(dateTime).format(UtilDate.formatTimeDateLocal);
      }
    } catch (e) {
      return undefinedString;
    }
  }

  static toDateLocal(dateTime, isUTC = true) {

    console.log(dateTime)
    try {
      if (!UtilDate.isValid(dateTime) || _.isNil(dateTime)) {
        return '';
      }
      if (isUTC) {
        return moment
          .utc(dateTime)
          .local()
          .format(UtilDate.formatDateLocal);
      } else {
        return moment(dateTime).format(UtilDate.formatDateLocal);
      }
    } catch (e) {
      return '';
    }
  }
  static timeStampLastMonth(timestamp) {
    try {
      if (!UtilDate.isValid(timestamp) || _.isNil(timestamp)) {
        return '';
      }
      return moment(timestamp)
        .subtract(1, 'months')
        .valueOf();
    } catch (e) {
      return '';
    }
  }
  static toTimeLocal(dateTime, isUTC = true) {
    try {
      if (!UtilDate.isValid(dateTime)) {
        return '';
      }
      if (isUTC) {
        return moment
          .utc(dateTime)
          .local()
          .format(UtilDate.formatTimeLocal);
      } else {
        return moment(dateTime).format(UtilDate.formatTimeLocal);
      }
    } catch (e) {
      return '';
    }
  }

  static toDateUtc(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal)
        .utc()
        .format(UtilDate.formatDateServer);
    } catch (e) {
      return '';
    }
  }
  static toDateTimeUtc(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal)
        .utc()
        .format(UtilDate.formatDateTimeServer);
    } catch (e) {
      return '';
    }
  }
  static converTimetamps(timetam) {
    try {
      if (!timetam || timetam === '' ) {
        return '';
      }
      return moment.unix(timetam).format(UtilDate.formatDateLocal)
    } catch (e) {
      return '';
    }
  }
  static yesterdayUTC(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal).add(-1, 'days');
    } catch (e) {
      return '';
    }
  }
  static formateToYear(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal).format('YYYY');
    } catch (e) {
      return '';
    }
  }
  static getLastMonth(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal).subtract(1, 'months');
    } catch (e) {
      return '';
    }
  }
  static toTimeUtc(dateTimeLocal) {
    try {
      if (!UtilDate.isValid(dateTimeLocal)) {
        return '';
      }
      return moment(dateTimeLocal)
        .utc()
        .format(UtilDate.formatTimeServer);
    } catch (e) {
      return '';
    }
  }

  static toCalendarLocal(dateTime, isUTC) {
    try {
      if (!UtilDate.isValid(dateTime)) {
        return '';
      }
      if (isUTC) {
        return moment
          .utc(dateTime)
          .local()
          .calendar(null, UtilDate.formatCalendar);
      } else {
        return moment(dateTime).calendar(null, UtilDate.formatCalendar);
      }
    } catch (e) {
      return '';
    }
  }

  static compareDateIsAfter(dateFirst = moment(), dateTwo) {
    try {
      if (!UtilDate.isValid(dateFirst)) {
        return '';
      }
      if (!UtilDate.isValid(dateTwo)) {
        return '';
      }
      return moment(dateTwo).isAfter(dateFirst);
    } catch (e) {
      return false;
    }
  }

  static toDiffMonth(dateTimeOne, dateTimeTwo) {
    try {
      if (!UtilDate.isValid(dateTimeOne)) {
        return '';
      }
      if (!UtilDate.isValid(dateTimeTwo)) {
        return '';
      }
      var m1 = moment(dateTimeOne, UtilDate.formatDateTimeServer);
      var m2 = moment(dateTimeTwo, UtilDate.formatDateTimeServer);
      return moment.preciseDiff(m1, m2, true).days; // '1 month 2 days 3 hours 4 minutes 5 seconds'
    } catch (e) {
      return '';
    }
  }

  static convertUTCStringTimeToDate(stringUTCTime) {
    try {
      return moment.utc(stringUTCTime);
    } catch (e) {}
    return undefined;
  }

  /**
   * Trả về ngày mặc định cho MyDateTimePicker chọn ngày sinh - 16 năm trước so với ngày hiện tại
   */
  static getDefaultDateTimePickerForBirthday() {
    try {
      let today = new Date();
      return today.setFullYear(today.getFullYear() - 16);
    } catch (error) {}
    return undefined;
  }
  static getDayDataHistory(date) {
    switch (date) {
      case '7':
        return moment()
          .utc()
          .subtract({ day: 7 })
          .format();
      case '30':
        return moment()
          .utc()
          .subtract({ day: 30 })
          .format();
      default:
        return null;
    }
  }
 

  static timeConversion(s) {
    let time = s.split(':')
    var hour = time[0]
    let min = time[1]
    if (parseInt(hour) > 12) {
        hour = 12 + parseInt(hour) - 24
        min = min + ' PM'
    } else {
        min = min + ' AM'
    }
    let newTime = hour + ':' + min
    return newTime
}
 static  humanizeTimestamp(timestamp) {
    try {
      const time = moment.utc(timestamp); // parse time as UTC
      const now = moment();
      return moment.min(time, now).from(now);
    }catch(e){
      return '';
    }
}

 
}
