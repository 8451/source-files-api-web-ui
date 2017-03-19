package com.e451.domain;

public class ApiUser {
  private String name;
  private String username;

  public ApiUser(){}
  public ApiUser(String name, String username) {
    this.name = name;
    this.username = username;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }
}
