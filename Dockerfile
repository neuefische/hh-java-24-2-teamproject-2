FROM --platform=linux/amd64 openjdk:22
EXPOSE 8080
ADD backend/target/RestaurantApp.jar RestaurantApp.jar
ENTRYPOINT ["java", "-jar", "RestaurantApp.jar"]