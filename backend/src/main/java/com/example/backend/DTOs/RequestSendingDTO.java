package com.example.backend.DTOs;

public class RequestSendingDTO {
    private String userName;
    private String userSecondName;
    private String userSurname;
    private String userPhone;
    private String userCity;
    private String userDepartment;
    private String connectWithUs;
    private String wishes;
    private String imageInfo;
    private String price;
    private String improveImage;
    private String imageURL;

    public void setPrice(String price) {
        this.price = price;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
    public void setUserSecondName(String userSecondName) {
        this.userSecondName = userSecondName;
    }
    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }
    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }
    public void setUserDepartment(String userDepartment) {
        this.userDepartment = userDepartment;
    }
    public void setConnectWithUs(String connectWithUs) {
        this.connectWithUs = connectWithUs;
    }
    public void setWishes(String wishes) {
        this.wishes = wishes;
    }
    public void setImageInfo(String imageInfo) {
        this.imageInfo = imageInfo;
    }
    public void setImproveImage(String improveImage) {
        this.improveImage = improveImage;
    }

    public String getImageURL() {
        return imageURL;
    }

    public String getUserName() {
        return userName;
    }

    public String getConnectWithUs() {
        return connectWithUs;
    }

    public String getImageInfo() {
        return imageInfo;
    }

    public String getImproveImage() {
        return improveImage;
    }

    public String getPrice() {
        return price;
    }

    public String getUserCity() {
        return userCity;
    }

    public String getUserDepartment() {
        return userDepartment;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public String getUserSecondName() {
        return userSecondName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public String getWishes() {
        return wishes;
    }
}
