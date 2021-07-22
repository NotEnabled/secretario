package ru.flagman.secretario.model.api.egr;

import com.fasterxml.jackson.annotation.JsonAlias;

public class FnsEgrArrObj {
    @JsonAlias("ЮЛ")
    private FnsEgrArrUlObj ulObj;

    public FnsEgrArrUlObj getUlObj() {
        return ulObj;
    }

    public void setUlObj(FnsEgrArrUlObj ulObj) {
        this.ulObj = ulObj;
    }
}
