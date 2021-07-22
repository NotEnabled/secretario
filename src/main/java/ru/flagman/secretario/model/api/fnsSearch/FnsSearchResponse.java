package ru.flagman.secretario.model.api.fnsSearch;

import com.fasterxml.jackson.annotation.JsonAlias;

import java.util.List;

public class FnsSearchResponse {
    private List<FnsSearchArrObj> items;
    @JsonAlias("Count")
    private int count;

    public List<FnsSearchArrObj> getItems() {
        return items;
    }

    public void setItems(List<FnsSearchArrObj> items) {
        this.items = items;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
