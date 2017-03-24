package com.e451.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class UserRecord {

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private String id;
  private String name;
  private String username;
  private boolean hasAcceptedTerms = false;

  public UserRecord(){}
  public UserRecord(String name, String username, boolean hasAcceptedTerms) {
    this.name = name;
    this.username = username;
    this.hasAcceptedTerms = hasAcceptedTerms;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
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

  public boolean hasAcceptedTerms() {
    return hasAcceptedTerms;
  }

  public void setHasAcceptedTerms(boolean hasAcceptedTermsAndConditions) {
    this.hasAcceptedTerms = hasAcceptedTermsAndConditions;
  }
}
