package ru.flagman.secretario.model.api.fnsSearch;

import com.fasterxml.jackson.annotation.JsonAlias;

public class FnsSearchArrObj {
    @JsonAlias("ЮЛ")
    private FnsSearchObj ul;
    @JsonAlias("ИП")
    private FnsSearchObj ip;

    public FnsSearchObj getUl() {
        return ul;
    }

    public void setUl(FnsSearchObj ul) {
        this.ul = ul;
    }

    public FnsSearchObj getIp() {
        return ip;
    }

    public void setIp(FnsSearchObj ip) {
        this.ip = ip;
    }
}
