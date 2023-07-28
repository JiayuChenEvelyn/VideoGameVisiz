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

export default function Recommend({ isCollapsed }) {
  const [gameName, setGameName] = useState("");
  const [gameFeatures, setGameFeatures] = useState({});
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [userId, setUserId] = useState("");
  const [gameList, setGameList] = useState([]);
  const [playTimeList, setPlayTimeList] = useState([]);
  const [gameScoreList, setGameScoreList] = useState([]);
  const [topK, setTopK] = useState(5);
  const [userRecommendedGames, setUserRecommendedGames] = useState([]);


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleRecommendChange = (text) => {
    setGameName(text);
  };


  const handleSwitchChange = (value, feature) => {
    setGameFeatures({
      ...gameFeatures,
      [feature]: value ? 1 : 0,
    });
  };
  const handleRecommendSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/recommend", { gameName: gameName })
      .then((res) => {
        setRecommendedGames(res.data.recommended_games);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const handleUserRecommendSubmit = () => {
    axios
      .post("http://127.0.0.1:5000/recommend_for_user", {
        userId,
        gameList,
        playTimeList,
        gameScoreList,
        topK,
      })
      .then((res) => {
        setUserRecommendedGames(res.data.recommended_games);
      })
      .catch((err) => {
        console.error(err);
      });
  };


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
        title="Recommendations"
        subtitle="Game recommendations"
      />

      <Box
        display="flex"
        flexDirection="row"
        marginLeft="16px"
        justifyContent="space-around"
      >
        <ScrollView style={styles.container}>
          <View style={styles.card}>
            <Text style={title_color}>Find Similar Game</Text>
            <TextInput
              style={input_color}
              onChangeText={handleRecommendChange}
              value={gameName}
              placeholder="Enter game name"
            />
            <Button
              title="Get recommendations"
              onPress={handleRecommendSubmit}
            />
            {recommendedGames.map((game, index) => (
              <Text style={{color: colors.grey[100]}} key={index}>{game}</Text>
            ))}
            <br/>
            <Text style={title_color}>Recommend for You</Text>
            <TextInput
              style={input_color}
              onChangeText={setUserId}
              value={userId}
              placeholder="Enter user ID"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) => setGameList(text.split(","))}
              value={gameList.join(",")}
              placeholder="Enter game list"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) =>
                setPlayTimeList(text.split(",").map(Number))
              }
              value={playTimeList.join(",")}
              placeholder="Enter play time list"
            />
            <TextInput
              style={input_color}
              onChangeText={(text) =>
                setGameScoreList(text.split(",").map(Number))
              }
              value={gameScoreList.join(",")}
              placeholder="Enter game score list"
            />
            <Text style={{color: colors.grey[100]}}>Enter top K number: </Text>
            <TextInput
              style={input_color}
              onChangeText={(text) => setTopK(Number(text))}
              placeholder="Enter top K"
              value={String(topK)}
            />
            <Button
              title="Get recommendations for user"
              onPress={handleUserRecommendSubmit}
            />
            {userRecommendedGames.map((game, index) => (
              <Text style={{color: colors.grey[100]}} key={index}>{game}</Text>
            ))}
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
