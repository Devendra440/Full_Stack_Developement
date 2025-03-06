package com.mru.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Watches {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Added for auto-increment
    private int id;

    @Column(name = "pname")
    private String pname;
    
    @Column(name = "pcost")
    private double pcost;
    
    @Column(name = "pimage")
    private String pimage;
    
    @Column(name = "qty")
    private int qty;

    public Watches() {
        super();
    }

    public Watches(int id, String pname, double pcost, String pimage, int qty) {
        super();
        this.id = id;
        this.pname = pname;
        this.pcost = pcost;
        this.pimage = pimage;
        this.qty = qty;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public double getPcost() {
        return pcost;
    }

    public void setPcost(double pcost) {
        this.pcost = pcost;
    }

    public String getPimage() {
        return pimage;
    }

    public void setPimage(String pimage) {
        this.pimage = pimage;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "Watches [id=" + id + ", pname=" + pname + ", pcost=" + pcost + ", pimage=" + pimage + ", qty=" + qty + "]";
    }
}
