package com.mru.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mru.entity.Watches;
import com.mru.repo.WatchesRepo;

@Service
public class WatchesService {
    
    @Autowired
    private WatchesRepo repo;
    
    public List<Watches> getAllWatches() {  // Fixed method name
        return repo.findAll();
    }
}
