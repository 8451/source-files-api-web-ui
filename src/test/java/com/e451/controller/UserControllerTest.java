package com.e451.controller;


import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.security.Principal;

import static org.mockito.Mockito.mock;

public class UserControllerTest {

  @Before
  public void setUp(){}

  @After
  public void tearDown(){}

  @Test
  public void testUserControllerUserShouldReturnPassedInPrincipal() {
    Principal principal = mock(Principal.class);
    UserController testUserController = new UserController();

    Principal result = testUserController.user(principal);
    Assert.assertEquals("User did not return the passed in principal", principal, result);
  }
}
