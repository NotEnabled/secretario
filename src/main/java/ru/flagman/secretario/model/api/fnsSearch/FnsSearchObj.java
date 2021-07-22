package ru.flagman.secretario.model.api.fnsSearch;

import com.fasterxml.jackson.annotation.JsonAlias;

public class FnsSearchObj {
    @JsonAlias("ИНН")
    private String inn;
    @JsonAlias("ОГРН")
    private String ogrn;
    @JsonAlias("НаимСокрЮЛ")
    private String shortName;
    @JsonAlias("НаимПолнЮЛ")
    private String fullName;
    @JsonAlias("ДатаОГРН")
    private String dateOGRN;
    @JsonAlias("Статус")
    private String status;
    @JsonAlias("АдресПолн")
    private String fullAdress;
    @JsonAlias("ОснВидДеят")
    private String typeActivity;
    @JsonAlias("ГдеНайдено")
    private String findPlace;

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getOgrn() {
        return ogrn;
    }

    public void setOgrn(String ogrn) {
        this.ogrn = ogrn;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDateOGRN() {
        return dateOGRN;
    }

    public void setDateOGRN(String dateOGRN) {
        this.dateOGRN = dateOGRN;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFullAdress() {
        return fullAdress;
    }

    public void setFullAdress(String fullAdress) {
        this.fullAdress = fullAdress;
    }

    public String getTypeActivity() {
        return typeActivity;
    }

    public void setTypeActivity(String typeActivity) {
        this.typeActivity = typeActivity;
    }

    public String getFindPlace() {
        return findPlace;
    }

    public void setFindPlace(String findPlace) {
        this.findPlace = findPlace;
    }
}
