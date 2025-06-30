# Step 1: Use Gradle image to build
FROM gradle:8.4-jdk17 AS builder
WORKDIR /app

# Copy the current project files into the container
COPY . .

# Build the Spring Boot JAR
RUN gradle bootJar --no-daemon

# Step 2: Use a slim JDK image for production
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the JAR from the builder image
COPY --from=builder /app/build/libs/*.jar app.jar

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]
