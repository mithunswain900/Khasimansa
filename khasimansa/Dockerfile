FROM openjdk:17
WORKDIR /app
COPY build/libs/*.jar app.jar
COPY entrypoint.sh entrypoint.sh
RUN chmod +x entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

