package com.example.game_visualization.entity;

import java.io.Serializable;

public class Genre implements Serializable {
    private String id;
    private String label;
    private Integer value;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Genre)) return false;

        Genre genre = (Genre) o;

        if (getId() != null ? !getId().equals(genre.getId()) : genre.getId() != null) return false;
        if (getLabel() != null ? !getLabel().equals(genre.getLabel()) : genre.getLabel() != null) return false;
        return getValue() != null ? getValue().equals(genre.getValue()) : genre.getValue() == null;
    }

    @Override
    public int hashCode() {
        int result = getId() != null ? getId().hashCode() : 0;
        result = 31 * result + (getLabel() != null ? getLabel().hashCode() : 0);
        result = 31 * result + (getValue() != null ? getValue().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Genre{" +
                "id='" + id + '\'' +
                ", label='" + label + '\'' +
                ", value=" + value +
                '}';
    }
}
