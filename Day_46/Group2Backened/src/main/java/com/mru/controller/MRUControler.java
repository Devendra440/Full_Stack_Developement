package com.mru.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mru.entity.Laptops;
import com.mru.service.MRUService;

@RestController
@CrossOrigin("*")
public class MRUControler {
	
	@Autowired
	private MRUService service;
	
	@GetMapping("/laptops")
	public List<Laptops> allLaptops(){
		return service.getAllLaptops();
	}

}
