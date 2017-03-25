package com.e451.model;

import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table
public class ApiKeyRecord {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  private String key;
  private String name;
  private String username;

  public ApiKeyRecord(){}

  public ApiKeyRecord(Long id, String name, String key, String username) {
    this.id = id;
    this.name = name;
    this.key = key;
    this.username = username;
  }

  public ApiKeyRecord(String name, String key, String username) {
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
