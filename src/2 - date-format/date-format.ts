import moment from 'moment';

export const customFormat = (date: Date) => {
  return moment(date).format('DD .. MM -- YY');
};
