package com.e451.service;


import com.e451.domain.ApiKey;
import com.e451.model.ApiKeyRecord;
import com.e451.repository.ApiKeyRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApiKeyServiceImpl implements ApiKeyService{

  private ApiKeyRecordRepository apiKeyRecordRepository;

  private Converter<ApiKey, ApiKeyRecord> apiKeyApiKeyRecordConverter = new Converter<ApiKey, ApiKeyRecord>() {
    @Override
    public ApiKeyRecord convert(ApiKey apiKey) {
      return new ApiKeyRecord(apiKey.getName(), apiKey.getKey(), apiKey.getUsername());
    }
  };

  private Converter<ApiKeyRecord, ApiKey> apiKeyRecordApiKeyConverter = new Converter<ApiKeyRecord, ApiKey>() {
    @Override
    public ApiKey convert(ApiKeyRecord apiKeyRecord) {
      return new ApiKey(apiKeyRecord.getName(), apiKeyRecord.getKey(), apiKeyRecord.getUsername());
    }
  };

  @Autowired
  public ApiKeyServiceImpl(ApiKeyRecordRepository apiKeyRecordRepository) {
    this.apiKeyRecordRepository = apiKeyRecordRepository;
  }

  @Override
  public List<ApiKey> getApiKeys(String username) {
    return apiKeyRecordRepository.findApiKeysRecordByUsername(username)
      .stream()
      .map(record -> apiKeyRecordApiKeyConverter.convert(record))
      .collect(Collectors.toList());
  }

  @Override
  public void saveApiKey(ApiKey apiKey) {
    apiKeyRecordRepository.save(apiKeyApiKeyRecordConverter.convert(apiKey));
  }

  @Override
  public void deleteApiKey(String key) {
    ApiKeyRecord apiKeyRecord = apiKeyRecordRepository.findApiKeyRecordByKey(key);
    apiKeyRecordRepository.delete(apiKeyRecord);
  }
}
