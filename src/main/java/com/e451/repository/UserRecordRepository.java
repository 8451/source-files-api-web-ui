package com.e451.repository;

import com.e451.model.UserRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRecordRepository extends CrudRepository<UserRecord, String> {
}
