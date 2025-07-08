package com.khasimansaapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class KhasimansaApiGateWayApplication {

    public static void main(String[] args) {
        SpringApplication.run(KhasimansaApiGateWayApplication.class, args);
    }

}
