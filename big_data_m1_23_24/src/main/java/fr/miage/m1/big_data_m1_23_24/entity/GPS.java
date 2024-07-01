package fr.miage.m1.big_data_m1_23_24.entity;

import jakarta.persistence.Embeddable;

@Embeddable
public class GPS {
    private double lon;
    private double lat;

    public GPS(double lon, double lat) {
        this.lon = lon;
        this.lat = lat;
    }


    public GPS() {

    }

    public double getLon() {
        return lon;
    }

    public void setLon(double lon) {
        this.lon = lon;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }
}
