package com.eme.pojo;

import java.io.Serializable;

public class Users implements Serializable {
    private Integer usid;

    private String usname;

    private String uspass;

    private String ustel;

    private String usphoto;

    private Integer uslive;

    private static final long serialVersionUID = 1L;

    public Integer getUsid() {
        return usid;
    }

    public void setUsid(Integer usid) {
        this.usid = usid;
    }

    public String getUsname() {
        return usname;
    }

    public void setUsname(String usname) {
        this.usname = usname == null ? null : usname.trim();
    }

    public String getUspass() {
        return uspass;
    }

    public void setUspass(String uspass) {
        this.uspass = uspass == null ? null : uspass.trim();
    }

    public String getUstel() {
        return ustel;
    }

    public void setUstel(String ustel) {
        this.ustel = ustel == null ? null : ustel.trim();
    }

    public String getUsphoto() {
        return usphoto;
    }

    public void setUsphoto(String usphoto) {
        this.usphoto = usphoto == null ? null : usphoto.trim();
    }

    public Integer getUslive() {
        return uslive;
    }

    public void setUslive(Integer uslive) {
        this.uslive = uslive;
    }

    @Override
    public String toString() {
        return "Users{" +
                "usid=" + usid +
                ", usname='" + usname + '\'' +
                ", uspass='" + uspass + '\'' +
                ", ustel='" + ustel + '\'' +
                ", usphoto='" + usphoto + '\'' +
                ", uslive=" + uslive +
                '}';
    }
}