package com.eme.pojo;

import java.io.Serializable;

public class Product implements Serializable {
    private Integer prid;

    private String prtittle;

    private String primg;

    private String prsite;

    private String prtype;

    private String prarea;

    private String prprice;

    private String prmode;

    private String printro;

    private String prfans;

    private String prstatus;

    private static final long serialVersionUID = 1L;

    public Integer getPrid() {
        return prid;
    }

    public void setPrid(Integer prid) {
        this.prid = prid;
    }

    public String getPrtittle() {
        return prtittle;
    }

    public void setPrtittle(String prtittle) {
        this.prtittle = prtittle == null ? null : prtittle.trim();
    }

    public String getPrimg() {
        return primg;
    }

    public void setPrimg(String primg) {
        this.primg = primg == null ? null : primg.trim();
    }

    public String getPrsite() {
        return prsite;
    }

    public void setPrsite(String prsite) {
        this.prsite = prsite == null ? null : prsite.trim();
    }

    public String getPrtype() {
        return prtype;
    }

    public void setPrtype(String prtype) {
        this.prtype = prtype == null ? null : prtype.trim();
    }

    public String getPrarea() {
        return prarea;
    }

    public void setPrarea(String prarea) {
        this.prarea = prarea == null ? null : prarea.trim();
    }

    public String getPrprice() {
        return prprice;
    }

    public void setPrprice(String prprice) {
        this.prprice = prprice == null ? null : prprice.trim();
    }

    public String getPrmode() {
        return prmode;
    }

    public void setPrmode(String prmode) {
        this.prmode = prmode == null ? null : prmode.trim();
    }

    public String getPrintro() {
        return printro;
    }

    public void setPrintro(String printro) {
        this.printro = printro == null ? null : printro.trim();
    }

    public String getPrfans() {
        return prfans;
    }

    public void setPrfans(String prfans) {
        this.prfans = prfans == null ? null : prfans.trim();
    }

    public String getPrstatus() {
        return prstatus;
    }

    public void setPrstatus(String prstatus) {
        this.prstatus = prstatus == null ? null : prstatus.trim();
    }
}