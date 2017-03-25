package com.e451.domain;

public class ApiKey {
  private String name;
  private String key;
  private String username;

  public ApiKey(){}

  public ApiKey(String name, String key, String username) {

    this.name = name;
    this.key = key;
    this.username = username;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }
}
