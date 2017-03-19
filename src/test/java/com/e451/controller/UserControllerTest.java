package com.e451.controller;


import com.e451.domain.APIUser;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserControllerTest {

  @Before
  public void setUp(){}

  @After
  public void tearDown(){}

  @Test
  public void testUserControllerUserShouldReturnPassedInPrincipal() {
    UserController testUserController = new UserController();
    OAuth2Authentication mockPrincipal = mock(OAuth2Authentication.class);
    Authentication mockAuthentication = mock(Authentication.class);
    Map<String, String> userDetails = new HashMap<String, String>();

    userDetails.put("name","testname");
    userDetails.put("login","testusername");
    when(mockAuthentication.getDetails()).thenReturn(userDetails);
    when(mockPrincipal.getUserAuthentication()).thenReturn(mockAuthentication);

    APIUser result = testUserController.user(mockPrincipal);
    Assert.assertEquals("User did not have the correct name", "testname", result.getName());
    Assert.assertEquals("User did not have the correct username", "testusername", result.getUsername());
  }
}
