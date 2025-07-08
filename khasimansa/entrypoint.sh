#!/bin/sh

echo "Waiting for Eureka to be ready..."
until curl -s http://eurekaserver:8761/eureka/apps > /dev/null; do
  sleep 5
done

echo "Eureka is ready. Starting service..."
exec java -jar app.jar
