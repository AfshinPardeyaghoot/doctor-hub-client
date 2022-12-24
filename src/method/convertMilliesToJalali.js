import * as shamsi from 'shamsi-date-converter';

const convertMilliesToJalali = (milliSecond) => {
    return (<p>{shamsi.gregorianToJalali(new Date(milliSecond)).join('/')}</p>);
}

export default convertMilliesToJalali;