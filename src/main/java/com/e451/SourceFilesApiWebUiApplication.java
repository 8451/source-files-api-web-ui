package com.e451;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;

@SpringBootApplication
public class SourceFilesApiWebUiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SourceFilesApiWebUiApplication.class, args);
	}
}
