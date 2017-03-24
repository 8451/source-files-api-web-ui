package com.e451.repository;

import com.e451.model.UserRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiUserRepository extends CrudRepository<UserRecord, Long>{

  UserRecord findUserRecordByUsername(String username);

}
