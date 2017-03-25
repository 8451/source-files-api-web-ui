package com.e451.service;

import com.e451.domain.ApiUser;

public interface ApiUserService {
  ApiUser getApiUserByUsername(String username);
  ApiUser getApiUserById(Long id);
  void saveApiUser(ApiUser apiUser);
  void deleteApiUser(ApiUser apiUser);
}
