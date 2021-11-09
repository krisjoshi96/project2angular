package com.revature.project2.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.project2.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByEmail(String email);
	

}
