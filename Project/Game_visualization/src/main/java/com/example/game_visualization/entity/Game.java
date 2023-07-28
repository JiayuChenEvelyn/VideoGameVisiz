package com.example.game_visualization.entity;

import java.io.Serializable;

public class Game implements Serializable {
    private Integer id;
    private String gameName;
    private String platform;
    private String year;
    private String genre;
    private String publisher;
    private Float naSales;
    private Float euSales;
    private Float jpSales;
    private Float otherSales;
    private Float globalSales;
    private Float rating;
    private Integer rateCount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Float getNaSales() {
        return naSales;
    }

    public void setNaSales(Float naSales) {
        this.naSales = naSales;
    }

    public Float getEuSales() {
        return euSales;
    }

    public void setEuSales(Float euSales) {
        this.euSales = euSales;
    }

    public Float getJpSales() {
        return jpSales;
    }

    public void setJpSales(Float jpSales) {
        this.jpSales = jpSales;
    }

    public Float getOtherSales() {
        return otherSales;
    }

    public void setOtherSales(Float otherSales) {
        this.otherSales = otherSales;
    }

    public Float getGlobalSales() {
        return globalSales;
    }

    public void setGlobalSales(Float globalSales) {
        this.globalSales = globalSales;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public Integer getRateCount() {
        return rateCount;
    }

    public void setRateCount(Integer rateCount) {
        this.rateCount = rateCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Game)) return false;

        Game game = (Game) o;

        if (getId() != null ? !getId().equals(game.getId()) : game.getId() != null) return false;
        if (getGameName() != null ? !getGameName().equals(game.getGameName()) : game.getGameName() != null)
            return false;
        if (getPlatform() != null ? !getPlatform().equals(game.getPlatform()) : game.getPlatform() != null)
            return false;
        if (getYear() != null ? !getYear().equals(game.getYear()) : game.getYear() != null) return false;
        if (getGenre() != null ? !getGenre().equals(game.getGenre()) : game.getGenre() != null) return false;
        if (getPublisher() != null ? !getPublisher().equals(game.getPublisher()) : game.getPublisher() != null)
            return false;
        if (getNaSales() != null ? !getNaSales().equals(game.getNaSales()) : game.getNaSales() != null) return false;
        if (getEuSales() != null ? !getEuSales().equals(game.getEuSales()) : game.getEuSales() != null) return false;
        if (getJpSales() != null ? !getJpSales().equals(game.getJpSales()) : game.getJpSales() != null) return false;
        if (getOtherSales() != null ? !getOtherSales().equals(game.getOtherSales()) : game.getOtherSales() != null)
            return false;
        if (getGlobalSales() != null ? !getGlobalSales().equals(game.getGlobalSales()) : game.getGlobalSales() != null)
            return false;
        if (getRating() != null ? !getRating().equals(game.getRating()) : game.getRating() != null) return false;
        return getRateCount() != null ? getRateCount().equals(game.getRateCount()) : game.getRateCount() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getGameName() != null ? getGameName().hashCode() : 0);
        result = 31 * result + (getPlatform() != null ? getPlatform().hashCode() : 0);
        result = 31 * result + (getYear() != null ? getYear().hashCode() : 0);
        result = 31 * result + (getGenre() != null ? getGenre().hashCode() : 0);
        result = 31 * result + (getPublisher() != null ? getPublisher().hashCode() : 0);
        result = 31 * result + (getNaSales() != null ? getNaSales().hashCode() : 0);
        result = 31 * result + (getEuSales() != null ? getEuSales().hashCode() : 0);
        result = 31 * result + (getJpSales() != null ? getJpSales().hashCode() : 0);
        result = 31 * result + (getOtherSales() != null ? getOtherSales().hashCode() : 0);
        result = 31 * result + (getGlobalSales() != null ? getGlobalSales().hashCode() : 0);
        result = 31 * result + (getRating() != null ? getRating().hashCode() : 0);
        result = 31 * result + (getRateCount() != null ? getRateCount().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", gameName='" + gameName + '\'' +
                ", platform='" + platform + '\'' +
                ", year='" + year + '\'' +
                ", genre='" + genre + '\'' +
                ", publisher='" + publisher + '\'' +
                ", naSales=" + naSales +
                ", euSales=" + euSales +
                ", jpSales=" + jpSales +
                ", otherSales=" + otherSales +
                ", globalSales=" + globalSales +
                ", rating=" + rating +
                ", rateCount=" + rateCount +
                '}';
    }
}