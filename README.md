# ***GameViz***

## BackGround

With the emergence of various gaming platforms and the ease of access to games, the gaming market is evolving at an exponential rate in the current data-driven world. There is therefore a need for an efficient and effective system in terms of speed, authenticity, and user experience to organize and utilize this massive and valuable amount of video game related data to facilitate users to understand of the current video game market. 

 Data visualization is known as a powerful technique for conveying compelling stories of data by transforming abstract data into physical visual elements, which are crucial in interpreting data and aiding decision-making in various fields due to the human tendency to be more visually oriented.

## Projct Usage

The project is aiming to build a user-friendly visualization system called GameViz to help users visualize the large amount of complex video game data for data exploration and analysis, recommend customized video games based on each user state information, while displaying and forecasting the overall trend of the game industry.
![image](https://github.com/JiayuChenEvelyn/VideoGameVisiz/assets/64573006/2316bac3-ebf9-4a7d-a691-28d69ff9bbc7)


And this is the HKU CompSc COMP7705  - Group Project 

(Group Member: Dai Zeyi / Wang Bowei / Chen Jiayu / Feng Zihao )

## Code Repository Into

- Dataset: [https://github.com/JiayuChenEvelyn/VideoGameVisiz/tree/main](https://github.com/JiayuChenEvelyn/VideoGameVisiz/tree/master/Raw%20Data)
- Code: [https://github.com/JiayuChenEvelyn/VideoGameVisiz/tree/master](https://github.com/JiayuChenEvelyn/VideoGameVisiz/tree/master)

The dataset, data pre-processing and analysis is put in the folder called “Dataset”.

The Algorithm Server and Model Building is put in the folder called "Model"

The front-end is put in the folder called “visiz_front” in the folder “Project”. 

The back-end is put in the folder called “Game_visualization” in the folder “Project”.

## Language **Requirements** 

- Platform construction: 

  Front-End: Reat Native Framework

  Back-End: JAVA Web

- ML and algorithm server:

  Machine Learning: Python
  Algorithm Server: Flask Framework

## Configuration

Before running the platform, you will need to configure the dependencies. 

1. Machine Learning  & Algorithm Server Environment:

```javascript
"dependencies": {
   	Numpy version 1.21.6
   	Pandas version 1.3.5
   	Implicit version 0.7.0
   	Scipy version 1.4.1
   	Json version 2.0.9
   	Requests version 2.28.2
   	Beautiful soup version 4.11.2
   	Lxml version 4.9.2
   	Sklearn version 1.0.2
   	Matplotlib version 3.5.3
   	Seaborn version 0.10.0
   	category_encoders version 2.6.0
   	pmdarima version 2.0.3
	xgboost version 1.7.3
   	tensorflow version 2.6.0
  }

"dependencies": {
	flask version 2.2.2
  	flask-cors version 3.0.10
  }
```

2.  Front and Back End Environment:
   

```javascript
"dependencies": {
	flask version 2.2.2
	flask-cors version 3.0.10
 	Operating system: Windows 10
	Java development kit: JDK 8
	Project management tool: Maven 3.6.3
	Project back-end development tool: IntelliJ IDEA 2020.3.2 x64
	Database: MySQL version 5.7-winx64
	Browser: Google Chrome
	Server Architecture: Spring Boot 2.4.7 + MyBatis 2.1.4
	The specific configuration of the SpringBoot in the project can be found in application.properties
	The specific configuration of project maven and dependent packages can be found in pom.xml.
	Project front-end development tool: Visual Studio Code
	React: version ^18.2.0
	axios : version ^1.4.0
	@nivo: version ^0.83.0
	@mui/material": version ^5.13.2

  }
```

## Installation

1. Clone the repository: `git clone https://github.com/JiayuChenEvelyn/VideoGameVisiz/tree/master`
2. Install  dependencies: According the  Configuration
3. Run the project

## Run the Code

• Firstly, import the “multi_platforms_game” dataset into the database using MySQL workbench. For current configuration, the database is set at localhost on Port 3306. 
1. Create User table according to the configuration showed below.  
<img width="480" alt="image" src="https://github.com/JiayuChenEvelyn/VideoGameVisiz/assets/101421504/3eca23df-c1d7-4ae8-96fd-1513a4c6561f">

• Secondly, run the back-end framework
4. Navigate to the file Project/Game_visualization/src/main/java/com/example/game_visualization/GameVisualizationApplication.java
5. Find the entry class of the project (modified with the @SpringBootApplication annotation), and then run the start up class; if the console outputs Spring graphics during the start up process, it means that the start up is successful.
6. To make it easier to query JSON data, hide properties without values, and reduce traffic consumption, the server should not respond to clients with NULL properties. You can add @JsonInclude(value=Include.NON_NULL) before the property or class or add global configuration in the file called application.properties.

• Following on, connect the front-end with the machine model modules.
1. Navigate to the file app.py. Start model server.
2. Change url in the handlePredictSubmit function in the Project/visiz_front/src/scenes/predict.predict.jsx to http://{algorithm_server_ip}:{algorithm_server_port}/predict
3. Change url in the handleRecommendSubmit and handleUserRecommendSubmition function in the Project/visiz_front/src/scenes/recommend/recommend.jsx to http://{algorithm_server_ip}:{algorithm_server_port}/recommend and http://{algorithm_server_ip}:{algorithm_server_port}/recommend_for_user respectively.

• Finally, run the front-end framework
5. Navigate to the folder called "visiz_front" in the folder called "Project".
6. Update all dependencies and packages used in the project using the commend "npm install".
7. Run the front-end code using the commend "npm start".
8. The default port for react app is 3000 so the GameViz application website would run on localhost:3000.

## License

This software is for learning and communication about COMP7705 Group Projecr only.

## Contact Us

If you have any questions or feedback, please send an email to 

daizy109@connect.hku.hk

U3608746@connect.hku.hk

fengzh8@connect.hku.hk

jiaychen@connect.hku.hk
