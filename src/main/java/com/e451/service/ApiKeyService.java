package com.e451.service;


import com.e451.domain.ApiKey;

import java.util.List;

public interface ApiKeyService {
  List<ApiKey> getApiKeys(String username);
  void saveApiKey(ApiKey apiKey);
  void deleteApiKey(String key);
}
