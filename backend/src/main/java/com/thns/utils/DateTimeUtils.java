package com.thns.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.TimeZone;

public class DateTimeUtils {
    public static String FORMAT_FULL_SSS = "yyyyMMddHHmmssSSS";
    public static Date getNowDate() {
        TimeZone timeZone = TimeZone.getDefault();
        SimpleDateFormat format = new SimpleDateFormat(FORMAT_FULL_SSS);
        format.setTimeZone(timeZone);

        Calendar today = GregorianCalendar.getInstance(timeZone);
        String dateTime = format.format(today.getTime());

        try {
            format.setTimeZone(TimeZone.getDefault());
            Date date = format.parse(dateTime);

            return date;
        }
        catch (Exception ex) {
            return new Date();
        }

    }
}
