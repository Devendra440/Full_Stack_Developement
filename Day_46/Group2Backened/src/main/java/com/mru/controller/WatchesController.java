package com.mru.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mru.entity.Watches;
import com.mru.service.WatchesService;

@RestController
@CrossOrigin("*")
@RequestMapping("/watches")
public class WatchesController {
    
    @Autowired
    private WatchesService service;
    
    @GetMapping
    public List<Watches> allWatches() {  // Fixed method name
        return service.getAllWatches();  // Fixed method call
    }
}
