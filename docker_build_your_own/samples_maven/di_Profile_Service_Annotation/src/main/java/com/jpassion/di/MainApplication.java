package com.jpassion.di;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import com.jpassion.di.services.CustomerService;

@Configuration
@ComponentScan
public class MainApplication {

	@Autowired
	private Environment env;
	
	private static final Logger LOG = LoggerFactory.getLogger(MainApplication.class);

	public static void main(String[] args) {

		ApplicationContext context = SpringApplication.run(MainApplication.class, args);

		// Select CustomeService object, GoodCustomerServiceImpl or BadCustomerServiceImpl
		// object based on a profile
		CustomerService customerService = (CustomerService) context
				.getBean(CustomerService.class);
		System.out.println(customerService.getCustomerGreeting());
	}

	// This is an optional method.  We just want to print out 
	// the active profiles.
	@PostConstruct
	public void initApp() {
		LOG.debug("Looking for Spring profiles...");
		if (env.getActiveProfiles().length == 0) {
			LOG.info("No Spring profile configured, running with default configuration.");
		} else {
			for (String profile : env.getActiveProfiles()) {
				LOG.info("Detected Spring profile: {}", profile);
			}
		}
	}
	
	// <For your own exercise>
	// - Create "averagecustomer" profile with its own implementation class.
	//   Use that profile.

}
