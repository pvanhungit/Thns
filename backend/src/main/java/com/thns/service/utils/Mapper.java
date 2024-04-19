package com.thns.service.utils;

import org.dozer.DozerBeanMapper;
import org.dozer.MappingException;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class Mapper extends DozerBeanMapper {
   
   @SuppressWarnings("unchecked")
   public <T> List<T> mapCollection(Object source, Class<T> destinationClass) throws MappingException {
      List<T> list = new ArrayList<T>();
      if(source instanceof List) {
         List<Object> objects = (List<Object>)source;
         for(Object object : objects) {
            T t = getMappingProcessor().map(object, destinationClass);
            list.add(t);
         }
      }
      return list;
   }
}
