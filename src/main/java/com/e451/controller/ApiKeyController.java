package com.e451.controller;

import com.e451.domain.ApiKey;
import com.e451.service.ApiKeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class ApiKeyController {

  private ApiKeyService apiKeyService;

  @Autowired
  public ApiKeyController(ApiKeyService apiKeyService) {
    this.apiKeyService = apiKeyService;
  }

  private String getUsername() {
    return SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
  }

  @RequestMapping(path = "/apiKey", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
  public List<ApiKey> getApiKeysByUsername() {
    String username = getUsername();
    return apiKeyService.getApiKeys(username);
  }

  @RequestMapping(path = "/apiKey", method = RequestMethod.POST)
  public void createApiKey(@RequestBody String name) {

    ApiKey apiKey = new ApiKey(name, UUID.randomUUID().toString(), getUsername());
    apiKeyService.saveApiKey(apiKey);
  }

  @RequestMapping(path = "/apiKey", method = RequestMethod.DELETE)
  public void deleteApiKey(@RequestBody String key) {
    apiKeyService.deleteApiKey(key);
  }
}
