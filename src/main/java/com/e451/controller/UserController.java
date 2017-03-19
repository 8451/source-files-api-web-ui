package com.e451.controller;

import com.e451.domain.ApiUser;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class UserController {

  @RequestMapping(path = "/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
  public ApiUser user(Principal principal) {
    ApiUser apiUser = new ApiUser();
    if(OAuth2Authentication.class.isAssignableFrom(principal.getClass())) {
      OAuth2Authentication oAuth2Authentication = (OAuth2Authentication)principal;
      Authentication userAuthentication = oAuth2Authentication.getUserAuthentication();
      if(Map.class.isAssignableFrom(userAuthentication.getDetails().getClass())) {
        Map<String, String> details = (Map)userAuthentication.getDetails();
        if(details.containsKey("name")) {
          apiUser.setName(details.get("name"));
        }
        if(details.containsKey("login")) {
          apiUser.setUsername(details.get("login"));
        }
      }
      // TODO: Get the record from the DB that the user has accepted the terms and conditions
    }

    return apiUser;
  }
}
