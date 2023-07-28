# Project Introduction
> With the emergence of various gaming platforms and the ease of access to games, the gaming market is evolving at an exponential rate in the current data-driven world. There is therefore a need for an efficient and effective system in terms of speed, authenticity, and user experience to organize and utilize this massive and valuable amount of video game related data to facilitate users to understand of the current video game market. 

> Data visualization is known as a powerful technique for conveying compelling stories of data by transforming abstract data into physical visual elements, which are crucial in interpreting data and aiding decision-making in various fields due to the human tendency to be more visually oriented. Therefore, the project is aiming to build a user-friendly visualization system called GameViz to help users visualize the large amount of complex video game data for data exploration and analysis, recommend customized video games based on each user state information, while displaying and forecasting the overall trend of the game industry.


## The related environment, tools and libraries required for our system:
- Operating system: Windows 10
- Java development kit: JDK 8
- Project management tool: Maven 3.6.3
- Project back-end development tool: IntelliJ IDEA 2020.3.2 x64
- Database: MySQL version 5.7-winx64
- Browser: Google Chrome
- Server Architecture: Spring Boot 2.4.7 + MyBatis 2.1.4
- The specific configuration of the SpringBoot in the project can be found in application.properties
The specific configuration of project maven and dependent packages can be found in pom.xml.
- Project front-end development tool: Visual Studio Code
- React: version ^18.2.0
- axios : version ^1.4.0
- @nivo: version ^0.83.0
- @mui/material": version ^5.13.2


## How to Run the Code
- Firstly, run the back-end framework
    1. Navigate to the file Project/Game_visualization/src/main/java/com/example/game_visualization/GameVisualizationApplication.java
    2. Find the entry class of the project (modified with the @SpringBootApplication annotation), and then run the startup class; if the console outputs Spring graphics during the startup process, it means that the startup is successful.
  <img width="280" alt="image" src="https://github.com/JiayuChenEvelyn/VideoGameVisiz/assets/101421504/d0ce7461-5e11-45f5-947c-4cd85b282659">

    3. To make it easier to query JSON data, hide properties without values, and reduce traffic consumption, the server should not respond to clients with NULL properties. You can add @JsonInclude(value=Include.NON_NULL) before the property or class, or add global configuration in the file called application.properties.
- Secondly, run the font-end framwork
    1. Navigate to the folder called "visiz_front" in the folder called "Project".
    2. Install all dependencies and packages used in the project using the commend "npm install".
    3. Run the front-end code using the commend "npm start".
    4. The default port for react app is 3000 so the GameViz application website would run on localhost:3000.
 
