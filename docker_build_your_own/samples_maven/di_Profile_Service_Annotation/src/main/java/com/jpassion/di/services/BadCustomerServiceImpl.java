package com.jpassion.di.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.jpassion.di.dao.CustomerDao;

@Service
@Profile("badcustomer")
public class BadCustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerDao customerDao;

	public String getCustomerGreeting() {
		String greeting = customerDao.getCustomerName() + " is a bad customer." ;
		return greeting;
	}

}
