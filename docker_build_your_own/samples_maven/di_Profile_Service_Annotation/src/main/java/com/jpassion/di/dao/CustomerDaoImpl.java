package com.jpassion.di.dao;

import org.springframework.stereotype.Repository;

// A class that is annotated with "@Repository" is eligible for  
// Spring org.springframework.dao.DataAccessException translation. 
// The annotated class is also clarified as to its role in the 
// overall application architecture for the purpose of tools, 
// aspects, etc. 

// As of Spring 2.5, this annotation also serves as a specialization 
// of @Component, allowing for implementation classes to be autodetected 
// through classpath scanning.
@Repository("customerDao")
public class CustomerDaoImpl implements CustomerDao {
	
	public String getCustomerName() {
		// For the sake of simplicity, return hard-coded customer name
		return "Sang Shin"; 
	}
}
