package ru.flagman.secretario.model.api.egr;

import com.fasterxml.jackson.annotation.JsonAlias;

public class FnsAdress {
    @JsonAlias("КодРегион")
    private String subjCodeRF;
    @JsonAlias("Индекс")
    private String postIndex;
    @JsonAlias("АдресПолн")
    private String fullAdress;
    @JsonAlias("Дата")
    private String date;

    public String getSubjCodeRF() {
        return subjCodeRF;
    }

    public void setSubjCodeRF(String subjCodeRF) {
        this.subjCodeRF = subjCodeRF;
    }

    public String getPostIndex() {
        return postIndex;
    }

    public void setPostIndex(String postIndex) {
        this.postIndex = postIndex;
    }

    public String getFullAdress() {
        return fullAdress;
    }

    public void setFullAdress(String fullAdress) {
        this.fullAdress = fullAdress;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
