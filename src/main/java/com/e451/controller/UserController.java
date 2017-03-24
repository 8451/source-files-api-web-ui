package com.e451.controller;

import com.e451.domain.ApiUser;
import com.e451.service.ApiUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@RestController
public class UserController {

  private ApiUserService apiUserService;

  @Autowired
  public UserController(ApiUserService apiUserService) {
    this.apiUserService = apiUserService;
  }

  @RequestMapping(path = "/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
  public ApiUser user(Principal principal) {
    ApiUser apiUser = null;
    if(OAuth2Authentication.class.isAssignableFrom(principal.getClass())) {
      OAuth2Authentication oAuth2Authentication = (OAuth2Authentication)principal;
      Authentication userAuthentication = oAuth2Authentication.getUserAuthentication();
      if(Map.class.isAssignableFrom(userAuthentication.getDetails().getClass())) {
        Map<String, String> details = (Map)userAuthentication.getDetails();
        if(details.containsKey("login")) {
          apiUser = apiUserService.getApiUserByUsername(details.get("login"));
          if(apiUser == null) {
            apiUser = new ApiUser();
            apiUser.setUsername(details.get("login"));
          } else {

          }
        }
        if(details.containsKey("name")
          && (apiUser.getName() == null || !apiUser.getName().equals(details.get("name")))) {
          apiUser.setName(details.get("name"));
        }
      }
    }

    return apiUser;
  }

  @RequestMapping(path = "/user", method = RequestMethod.POST)
  public void saveUser(@RequestBody ApiUser apiUser) {
    apiUserService.saveApiUser(apiUser);
  }

  @RequestMapping(path = "/user", method = RequestMethod.PUT)
  public void updateUser(@RequestBody ApiUser apiUser) {
    apiUserService.saveApiUser(apiUser);
  }

  @RequestMapping(path = "/user", method = RequestMethod.DELETE)
  public void deleteUser(Principal principal) {
    ApiUser apiUser = user(principal);
    apiUserService.deleteApiUser(apiUser);
  }
}
