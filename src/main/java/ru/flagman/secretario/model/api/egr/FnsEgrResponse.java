package ru.flagman.secretario.model.api.egr;

import java.util.List;

public class FnsEgrResponse {
    private List<FnsEgrArrObj> items;

    public List<FnsEgrArrObj> getItems() {
        return items;
    }

    public void setItems(List<FnsEgrArrObj> items) {
        this.items = items;
    }
}
