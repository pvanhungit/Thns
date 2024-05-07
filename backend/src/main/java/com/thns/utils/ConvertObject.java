package com.thns.utils;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.reflect.Method;
import java.util.Date;

public class ConvertObject {
    public static <T> T toInsert(T t) {
        try {
            Class<?> persistentClass = t.getClass();
            Class[] cArg = new Class[1];
            cArg[0] = Date.class;
            Method funcUpdateTime = persistentClass.getMethod("setUpdateTime", cArg);
            Method funcCreateTime = persistentClass.getMethod("setCreateTime", cArg);

            funcCreateTime.invoke(t, DateTimeUtils.getNowDate());
            funcUpdateTime.invoke(t, DateTimeUtils.getNowDate());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return t;
    }

    public static <T> T toUpdate(T t)  {
        try {
            Class<?> persistentClass = t.getClass();
            Class[] cArg = new Class[1];
            cArg[0] = Date.class;
            Method funcSetUpdateTime = persistentClass.getMethod("setUpdateTime",cArg);

            funcSetUpdateTime.invoke(t, DateTimeUtils.getNowDate());
        }
        catch (Exception ex){
            StringWriter sw = new StringWriter();
            ex.printStackTrace(new PrintWriter(sw));
        }
        return t;
    }
}
