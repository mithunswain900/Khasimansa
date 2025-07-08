package com.khasimansaproduct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class KhasimansaproductApplication {

	public static void main(String[] args) {

		SpringApplication.run(KhasimansaproductApplication.class, args);
	}

}
