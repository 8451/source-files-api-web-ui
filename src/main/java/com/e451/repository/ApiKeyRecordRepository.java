package com.e451.repository;

import com.e451.model.ApiKeyRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApiKeyRecordRepository extends CrudRepository<ApiKeyRecord, Long> {
  List<ApiKeyRecord> findApiKeysRecordByUsername(String username);
  ApiKeyRecord findApiKeyRecordByKey(String key);
}
