import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { tokens } from "../../theme";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Switch,
  Button,
} from "react-native";
import axios from "axios";
import Topbar from "../global/topbar";
import { Box, useTheme } from "@mui/material";

export default function Predict({ isCollapsed }) {
  const [gameName, setGameName] = useState("");
  const [gameFeatures, setGameFeatures] = useState({});
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [predictedScore, setPredictedScore] = useState("");
  const [userId, setUserId] = useState("");
  const [gameList, setGameList] = useState([]);
  const [playTimeList, setPlayTimeList] = useState([]);
  const [gameScoreList, setGameScoreList] = useState([]);
  const [topK, setTopK] = useState(5);
  const [userRecommendedGames, setUserRecommendedGames] = useState([]);

  const featureLabels = [
    "Action",
    "First-Person",
    "Third Person",
    "Adventure",
    "Strategy",
    "RPG",
    "Simulation",
    "Horror",
    "Survival",
    "Puzzle",
    "Indie",
    "Retro",
    "Pixel Graphics",
    "Rouguelike",
    "2D Platform",
    "3D Platform",
    "Multiplayer",
    "Casual",
    "Visual Novel",
    "Otome",
    "Arcade",
    "Racing",
    "Sports",
    "Mature Content",
    "Atmospheric",
    "Narrative",
    "Sci-Fi & Fantasy",
    "Supernatural",
    "Post-apocalyptic",
    "Humor",
    "Music & Sound",
    "Art & Design",
    "Role-Playing",
    "Management & Building",
    "Stealth & Strategy",
    "Exploration & Adventure",
    "Fantasy & Mythology",
    "Education & Learning",
    "Platformer",
    "Historical",
    "Early Access",
    "VR",
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const handlePredictChange = (text, feature) => {
    setGameFeatures({
      ...gameFeatures,
      [feature]: text,
    });
  };

  const handleSwitchChange = (value, feature) => {
    setGameFeatures({
      ...gameFeatures,
      [feature]: value ? 1 : 0,
    });
  };


  const handlePredictSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/predict", gameFeatures)
      .then((res) => {
        setPredictedScore(res.data.score);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const title_color = StyleSheet.compose(styles.title, {
    color: colors.grey[100],
  });
  const input_color = StyleSheet.compose(styles.input, {
    color: colors.grey[100],
  });

  const renderSwitch = (label) => (
    <View style={styles.switchContainer} key={label}>
      <Text style={{color: colors.grey[100]}}>{label}</Text>
      <Switch
        onValueChange={(value) => handleSwitchChange(value, label)}
        value={!!gameFeatures[label]}
      />
    </View>
  );

  const renderSwitchRow = (labels) => (
    <View style={styles.switchRowContainer} key={labels.join()}>
      {labels.map(renderSwitch)}
    </View>
  );

  return (
    <div
      id="rightContent"
      style={isCollapsed ? { marginLeft: "80px" } : { marginLeft: "250px" }}
    >
      <Topbar
        title="Prediction"
        subtitle="Game predictions"
      />

      <Box
        display="flex"
        flexDirection="row"
        marginLeft="16px"
        justifyContent="space-around"
      >
        <ScrollView style={styles.container}>
          <View style={styles.card}>
            <Text style={title_color}>Predict the Game Score</Text>
            <TextInput
              style={input_color}
              onChangeText={(text) => handlePredictChange(text, "developers")}
              value={gameFeatures["developers"]}
              placeholder="Enter developers"
            />

            <TextInput
              style={input_color}
              onChangeText={(text) => handlePredictChange(text, "publishers")}
              value={gameFeatures["publishers"]}
              placeholder="Enter publishers"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) =>
                handlePredictChange(text, "supported_languages")
              }
              value={gameFeatures["supported_languages"]}
              placeholder="Enter supported languages"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) => handlePredictChange(text, "price")}
              value={gameFeatures["price"]}
              placeholder="Enter price"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) => handlePredictChange(text, "all_reviews")}
              value={gameFeatures["all_reviews"]}
              placeholder="Enter all reviews"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) =>
                handlePredictChange(text, "positice_reviews")
              }
              value={gameFeatures["positice_reviews"]}
              placeholder="Enter positive reviews"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) =>
                handlePredictChange(text, "released_year")
              }
              value={gameFeatures["released_year"]}
              placeholder="Enter released year"
            />
            {chunk(featureLabels, 8).map(renderSwitchRow)}
            <Button title="Predict Score" onPress={handlePredictSubmit} />
            <Text style={{color: colors.greenAccent[400], fontSize: 20, fontWeight: "bold"}}>Predicted Score: {predictedScore}</Text>
          </View>
        </ScrollView>
      </Box>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    // backgroundColor: '#f8f8f8',
    borderRadius: 2,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  switchRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
    margin: 2,
  },
});
