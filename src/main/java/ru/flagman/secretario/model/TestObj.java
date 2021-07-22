package ru.flagman.secretario.model;


import com.fasterxml.jackson.annotation.JsonAlias;

public class TestObj {
    @JsonAlias("арг1")
    private String argA;

    private String argB;

    public TestObj(String argA, String argB) {
        this.argA = argA;
        this.argB = argB;
    }

    public TestObj() {
    }

    public String getArgA() {
        return argA;
    }

    public void setArgA(String argA) {
        this.argA = argA;
    }

    public String getArgB() {
        return argB;
    }

    public void setArgB(String argB) {
        this.argB = argB;
    }

    @Override
    public String toString() {
        return "TestObj{" +
                "argA='" + argA + '\'' +
                ", argB='" + argB + '\'' +
                '}';
    }
}
