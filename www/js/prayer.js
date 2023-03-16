import adhanModule from './modules/adhanModule.js';
import getGPS from './modules/getGPS.js';

export default async () => {

    if (window.location.pathname === '/prayer.html') {

        let GPS = await getGPS();
        let latitude = GPS.latitude
        let longitude = GPS.longitude
        /*
        ( storage )

        let storage = window.localStorage;
        storage.setItem('Calculation', 'UmmAlQura')
        let value = storage.getItem('Calculation');
        
        */

        let adhan = adhanModule("UmmAlQura", latitude, longitude);
        let data_hijri = document.getElementById('data_hijri');
        let data_Gregorian = document.getElementById('data_Gregorian');
        let datoday = document.getElementById('datoday');
        let country = document.getElementById('country');
        let hour_minutes = document.getElementById('hour_minutes');
        let seconds = document.getElementById('seconds');
        let time_fajr = document.getElementById('time_fajr');
        let time_dhuhr = document.getElementById('time_dhuhr');
        let time_asr = document.getElementById('time_asr');
        let time_maghrib = document.getElementById('time_maghrib');
        let time_isha = document.getElementById('time_isha');
        let fajr_li = document.getElementById('fajr_li');
        let dhuhr_li = document.getElementById('dhuhr_li');
        let asr_li = document.getElementById('asr_li');
        let maghrib_li = document.getElementById('maghrib_li');
        let isha_li = document.getElementById('isha_li');
        let remaining_ = document.getElementById('remaining');
        let remaining_time = document.getElementById('remaining_time');
        let remaining_name = document.getElementById('remaining_name');

        data_hijri.innerText = adhan.data_hijri;
        data_Gregorian.innerText = adhan.data_Gregorian;
        datoday.innerText = adhan.today;
        hour_minutes.innerText = adhan.hour_minutes;
        seconds.innerText = adhan.seconds;
        country.innerHTML = `المنطقة الزمنية: <span id="city">${adhan.timezone}</span>`
        remaining_time.innerText = adhan.remainingNext;
        time_fajr.innerText = adhan.fajr;
        time_dhuhr.innerText = adhan.dhuhr;
        time_asr.innerText = adhan.asr;
        time_maghrib.innerText = adhan.maghrib;
        time_isha.innerText = adhan.isha;


        setInterval(() => {
            let adhan = adhanModule("UmmAlQura", latitude, longitude);
            data_hijri.innerText = adhan.data_hijri;
            data_Gregorian.innerText = adhan.data_Gregorian;
            datoday.innerText = adhan.today;
            hour_minutes.innerText = adhan.hour_minutes;
            seconds.innerText = adhan.seconds;
            country.innerHTML = `المنطقة الزمنية: <span id="city">${adhan.timezone}</span>`

            remaining_time.innerText = adhan.remainingNext;
            time_fajr.innerText = adhan.fajr;
            time_dhuhr.innerText = adhan.dhuhr;
            time_asr.innerText = adhan.asr;
            time_maghrib.innerText = adhan.maghrib;
            time_isha.innerText = adhan.isha;

            switch (adhan.nextPrayer) {
                case "fajr":
                    remaining_name.innerText = "الفجر";
                    remaining_.style.display = 'block'
                    remaining_time.style.display = 'block'
                    fajr_li.style.background = '#6bc077'
                    dhuhr_li.style.background = null
                    asr_li.style.background = null
                    maghrib_li.style.background = null
                    isha_li.style.background = null
                    break;

                case "dhuhr":
                    remaining_name.innerText = "الظهر";
                    remaining_.style.display = 'block'
                    remaining_time.style.display = 'block'
                    fajr_li.style.background = null
                    dhuhr_li.style.background = '#6bc077'
                    asr_li.style.background = null
                    maghrib_li.style.background = null
                    isha_li.style.background = null
                    break;

                case "asr":
                    remaining_name.innerText = "العصر";
                    remaining_.style.display = 'block'
                    remaining_time.style.display = 'block'
                    fajr_li.style.background = null
                    dhuhr_li.style.background = null
                    asr_li.style.background = '#6bc077'
                    maghrib_li.style.background = null
                    isha_li.style.background = null
                    break;

                case "maghrib":
                    remaining_name.innerText = "المغرب";
                    remaining_.style.display = 'block'
                    remaining_time.style.display = 'block'
                    fajr_li.style.background = null
                    dhuhr_li.style.background = null
                    asr_li.style.background = null
                    maghrib_li.style.background = '#6bc077'
                    isha_li.style.background = null
                    break;

                case "isha":
                    remaining_name.innerText = "العشاء";
                    remaining_.style.display = 'block'
                    remaining_time.style.display = 'block'
                    fajr_li.style.background = null
                    dhuhr_li.style.background = null
                    asr_li.style.background = null
                    maghrib_li.style.background = null
                    isha_li.style.background = '#6bc077'
                    break;

                default:
                    remaining_name.innerText = "لايوجد";
                    remaining_.style.display = 'none'
                    remaining_time.style.display = 'none'
                    fajr_li.style.background = null
                    dhuhr_li.style.background = null
                    asr_li.style.background = null
                    maghrib_li.style.background = null
                    isha_li.style.background = null
                    break;
            }


        }, 1000);

    }
}