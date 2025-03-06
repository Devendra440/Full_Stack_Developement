package com.mru.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mru.entity.Mobiles;
import com.mru.service.MobilesService;

@RestController
@CrossOrigin("*")
@RequestMapping("/mobiles")
public class MobilesController {
    
    @Autowired
    private MobilesService service;
    
    @GetMapping
    public List<Mobiles> allMobiles() {
        return service.getAllMobiles();
    }
}
