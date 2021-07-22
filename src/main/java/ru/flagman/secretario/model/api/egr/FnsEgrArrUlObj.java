package ru.flagman.secretario.model.api.egr;

import com.fasterxml.jackson.annotation.JsonAlias;

public class FnsEgrArrUlObj {
     @JsonAlias("ИНН")
     private String inn;
     @JsonAlias("КПП")
     private String kpp;
     @JsonAlias("ОГРН")
     private String ogrn;
     @JsonAlias("НаимСокрЮЛ")
     private String shortName;
     @JsonAlias("НаимПолнЮЛ")
     private String fullName;
     @JsonAlias("НаимСокрЮЛИн")
     private String shortNameLatin;
     @JsonAlias("НаимПолнЮЛИн")
     private String fullNameLatin;
     @JsonAlias("ДатаРег")
     private String dateReg;
     @JsonAlias("ОКОПФ")
     private String okopfName;
     @JsonAlias("КодОКОПФ")
     private String okopfCode;
     @JsonAlias("Статус")
     private String status;
     @JsonAlias("СтатусДата")
     private String statusDate;
     @JsonAlias("СпОбрЮЛ")
     private String typeOfBirth;
     @JsonAlias("ДатаПрекр")
     private String endDate;
     @JsonAlias("НомТел")
     private String telNum;
     @JsonAlias("E-mail")
     private String email;
     @JsonAlias("Адрес")
     private FnsAdress adress;

     public String getInn() {
          return inn;
     }

     public void setInn(String inn) {
          this.inn = inn;
     }

     public String getKpp() {
          return kpp;
     }

     public void setKpp(String kpp) {
          this.kpp = kpp;
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

     public String getShortNameLatin() {
          return shortNameLatin;
     }

     public void setShortNameLatin(String shortNameLatin) {
          this.shortNameLatin = shortNameLatin;
     }

     public String getFullNameLatin() {
          return fullNameLatin;
     }

     public void setFullNameLatin(String fullNameLatin) {
          this.fullNameLatin = fullNameLatin;
     }

     public String getDateReg() {
          return dateReg;
     }

     public void setDateReg(String dateReg) {
          this.dateReg = dateReg;
     }

     public String getOkopfName() {
          return okopfName;
     }

     public void setOkopfName(String okopfName) {
          this.okopfName = okopfName;
     }

     public String getOkopfCode() {
          return okopfCode;
     }

     public void setOkopfCode(String okopfCode) {
          this.okopfCode = okopfCode;
     }

     public String getStatus() {
          return status;
     }

     public void setStatus(String status) {
          this.status = status;
     }

     public String getStatusDate() {
          return statusDate;
     }

     public void setStatusDate(String statusDate) {
          this.statusDate = statusDate;
     }

     public String getTypeOfBirth() {
          return typeOfBirth;
     }

     public void setTypeOfBirth(String typeOfBirth) {
          this.typeOfBirth = typeOfBirth;
     }

     public String getEndDate() {
          return endDate;
     }

     public void setEndDate(String endDate) {
          this.endDate = endDate;
     }

     public String getTelNum() {
          return telNum;
     }

     public void setTelNum(String telNum) {
          this.telNum = telNum;
     }

     public String getEmail() {
          return email;
     }

     public void setEmail(String email) {
          this.email = email;
     }

     public FnsAdress getAdress() {
          return adress;
     }

     public void setAdress(FnsAdress adress) {
          this.adress = adress;
     }
}
