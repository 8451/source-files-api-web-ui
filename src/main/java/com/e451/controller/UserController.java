package com.e451.controller;

import com.e451.domain.ApiKey;
import com.e451.domain.ApiUser;
import com.e451.service.ApiKeyService;
import com.e451.service.ApiUserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

  private ApiUserService apiUserService;
  private ApiKeyService apiKeyService;

  @Autowired
  public UserController(ApiUserService apiUserService, ApiKeyService apiKeyService) {
    this.apiUserService = apiUserService;
    this.apiKeyService = apiKeyService;
  }

  @ApiResponses(value = {
    @ApiResponse(code = 200, message = "Success", response = ApiUser.class)
  })
  @ApiOperation(
    value = "User",
    notes = "Returns the currently logged in user",
    response = ApiUser.class,
    tags = "user"
  )
  @RequestMapping(path = "/user", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
  public ApiUser user(Principal principal) {
    ApiUser apiUser = null;
    if(principal != null) {
      if (OAuth2Authentication.class.isAssignableFrom(principal.getClass())) {
        OAuth2Authentication oAuth2Authentication = (OAuth2Authentication) principal;
        Authentication userAuthentication = oAuth2Authentication.getUserAuthentication();
        if (Map.class.isAssignableFrom(userAuthentication.getDetails().getClass())) {
          Map<String, String> details = (Map) userAuthentication.getDetails();
          if (details.containsKey("login")) {
            apiUser = apiUserService.getApiUserByUsername(details.get("login"));
            if (apiUser == null) {
              apiUser = new ApiUser();
              apiUser.setUsername(details.get("login"));
            } else {

            }
          }
          if (details.containsKey("name")
            && (apiUser.getName() == null || !apiUser.getName().equals(details.get("name")))) {
            apiUser.setName(details.get("name"));
            saveUser(apiUser);
          }
        }
      }
    }

    return apiUser;
  }

  @ApiResponses(value = {
    @ApiResponse(code = 200, message = "Success", response = ApiUser.class)
  })
  @ApiOperation(
    value = "User",
    notes = "Returns the currently logged in user",
    response = ApiUser.class,
    tags = "user"
  )
  @RequestMapping(path = "/userByKey/{key}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
  public ApiUser userByKey(@PathVariable(name="key") String key) {
    ApiUser apiUser = null;
    String usernameByKey = apiKeyService.getUsernameByKey(key);
    if(usernameByKey != null) {
      apiUser = apiUserService.getApiUserByUsername(usernameByKey);
    } else {
      apiUser = new ApiUser("Anonymous","Anonymous", false);
    }
    return apiUser;
  }

  @ApiResponses(value = {
    @ApiResponse(code = 201, message = "Created", response = String.class),
    @ApiResponse(code = 500, message = "An internal service error was thrown")
  })
  @ApiOperation(
    value = "Creates a user record associated with the currently logged in Github account",
    notes = "Creates a user record associated with the currently logged in Github account",
    tags = "user"
  )
  @ResponseStatus(HttpStatus.CREATED)
  @RequestMapping(path = "/user", method = RequestMethod.POST)
  public String saveUser(@RequestBody ApiUser apiUser) {
    apiUserService.saveApiUser(apiUser);
    return Boolean.TRUE.toString();
  }

//  @RequestMapping(path = "/user", method = RequestMethod.PUT)
//  public String updateUser(@RequestBody ApiUser apiUser) {
//    apiUserService.saveApiUser(apiUser);
//    return Boolean.TRUE.toString();
//  }

  @ApiResponses(value = {
    @ApiResponse(code = 204, message = "Deleted"),
    @ApiResponse(code = 500, message = "An internal service error occurred")
  })
  @ApiOperation(
    value = "Deletes the currently logged in user's records from the database",
    notes = "Deletes the currently logged in user's records from the database",
    tags = {"user"}
  )
  @RequestMapping(path = "/user", method = RequestMethod.DELETE)
  public String deleteUser(Principal principal) {
    if(principal != null) {
      ApiUser apiUser = user(principal);
      if(apiUser != null && apiUser.getHasAcceptedTermsValue()) {
        List<ApiKey> apiKeys = apiKeyService.getApiKeys(apiUser.getUsername());
        for (ApiKey apiKey :
          apiKeys) {
          apiKeyService.deleteApiKey(apiKey.getKey());
        }
      }
      apiUserService.deleteApiUser(apiUser);
    }
    return Boolean.TRUE.toString();
  }
}
