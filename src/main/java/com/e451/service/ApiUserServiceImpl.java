package com.e451.service;

import com.e451.domain.ApiUser;
import com.e451.model.UserRecord;
import com.e451.repository.ApiUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

@Service
public class ApiUserServiceImpl implements ApiUserService{

  private ApiUserRepository apiUserRepository;

  private Converter<ApiUser, UserRecord> apiUserUserRecordConverter
    = apiUser -> new UserRecord(apiUser.getName(), apiUser.getUsername(), apiUser.getHasAcceptedTermsValue());

  private Converter<UserRecord, ApiUser> userRecordApiUserConverter
    = userRecord -> new ApiUser(userRecord.getName(), userRecord.getUsername(), userRecord.hasAcceptedTerms());

  @Autowired
  public ApiUserServiceImpl(ApiUserRepository apiUserRepository) {
    this.apiUserRepository = apiUserRepository;
  }

  @Override
  public ApiUser getApiUserByUsername(String username) {
    UserRecord userRecord = apiUserRepository.findUserRecordByUsername(username);
    if(userRecord == null) {
      return null;
    }
    return userRecordApiUserConverter.convert(userRecord);
  }

  @Override
  public ApiUser getApiUserById(Long id) {
    UserRecord userRecord = apiUserRepository.findOne(id);
    if(userRecord == null) {
      return null;
    }
    return userRecordApiUserConverter.convert(userRecord);
  }

  @Override
  public void saveApiUser(ApiUser apiUser) {
    UserRecord mayExist = apiUserRepository.findUserRecordByUsername(apiUser.getUsername());
    UserRecord userRecord = null;
    if(mayExist != null)
    {
      userRecord = mayExist;
      userRecord.setHasAcceptedTerms(apiUser.getHasAcceptedTermsValue());
      userRecord.setName(apiUser.getName());
      userRecord.setUsername(apiUser.getUsername());
    }
    else {
      userRecord = apiUserUserRecordConverter.convert(apiUser);
    }
    apiUserRepository.save(userRecord);
  }

  @Override
  public void deleteApiUser(ApiUser apiUser) {
    UserRecord userRecord = apiUserRepository.findUserRecordByUsername(apiUser.getUsername());
    apiUserRepository.delete(userRecord);
  }
}
