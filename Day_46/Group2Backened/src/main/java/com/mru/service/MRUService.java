package com.mru.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mru.entity.Laptops;
import com.mru.entity.Watches;
import com.mru.repo.MRURepo;

@Service
public class MRUService {
	
	@Autowired
	private MRURepo repo;
	
	public List<Laptops> getAllLaptops(){
		return repo.findAll();
	}

	public List<Watches> getAllWatches() {
		// TODO Auto-generated method stub
		return null;
		
	}
	
	

}
