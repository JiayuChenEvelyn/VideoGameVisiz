import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Switch, Alert } from 'react-native';
import axios from 'axios';

export default function Recommend() {
  const [gameName, setGameName] = useState('');
  const [gameFeatures, setGameFeatures] = useState({});
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [predictedScore, setPredictedScore] = useState('');

  const handleRecommendChange = (text) => {
    setGameName(text);
  };

  const handlePredictChange = (text, feature) => {
    setGameFeatures({
      ...gameFeatures,
      [feature]: text
    });
  };

  const handleSwitchChange = (value, feature) => {
    setGameFeatures({
      ...gameFeatures,
      [feature]: value ? 1 : 0
    });
  };

  const handleRecommendSubmit = () => {
    axios.post('http://127.0.0.1:5000/recommend', { gameName: gameName })
      .then(res => {
        setRecommendedGames(res.data.recommended_games);
      })
      .catch(err => {
        console.error(err);
        alert("Recommend game not found");
      });
  };

  const handlePredictSubmit = () => {
    axios.post('http://127.0.0.1:5000/predict', gameFeatures)
      .then(res => {
        console.log(res.data.score)
        setPredictedScore(res.data.score);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const renderSwitch = (label) => (
    <View style={styles.switchContainer}>
      <Text>{label}</Text>
      <Switch
        onValueChange={(value) => handleSwitchChange(value, label)}
        value={!!gameFeatures[label]}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>Game name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleRecommendChange}
        value={gameName}
      />
      <Button
        title="Get recommendations"
        onPress={handleRecommendSubmit}
      />
      <ScrollView>
        {recommendedGames.map((game, index) => (
          <Text key={index}>{game}</Text>
        ))}
      </ScrollView>
      <Text>Game Features:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'developers')}
        value={gameFeatures['developers']}
        placeholder="Enter developers"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'publishers')}
        value={gameFeatures['publishers']}
        placeholder="Enter publishers"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'supported_languages')}
        value={gameFeatures['supported_languages']}
        placeholder="Enter supported languages"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'price')}
        value={gameFeatures['price']}
        placeholder="Enter price"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'all_reviews')}
        value={gameFeatures['all_reviews']}
        placeholder="Enter all reviews"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'positice_reviews')}
        value={gameFeatures['positice_reviews']}
        placeholder="Enter positive reviews"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handlePredictChange(text, 'released_year')}
        value={gameFeatures['released_year']}
        placeholder="Enter released year"
      />

      {/* Add Switches for Boolean features */}
      {renderSwitch('Action')}
      {renderSwitch('First-Person')}
      {renderSwitch('Third Person')}
      {renderSwitch('Adventure')}
      {renderSwitch('Strategy')}
      {renderSwitch('RPG')}
      {renderSwitch('Simulation')}
      {renderSwitch('Horror')}
      {renderSwitch('Survival')}
      {renderSwitch('Puzzle')}
      {renderSwitch('Indie')}
      {renderSwitch('Retro')}
      {renderSwitch('Pixel Graphics')}
      {renderSwitch('Rouguelike')}
      {renderSwitch('2D Platform')}
      {renderSwitch('3D Platform')}
      {renderSwitch('Multiplayer')}
      {renderSwitch('Casual')}
      {renderSwitch('Visual Novel')}
      {renderSwitch('Otome')}
      {renderSwitch('Arcade')}
      {renderSwitch('Racing')}
      {renderSwitch('Sports')}
      {renderSwitch('Mature Content')}
      {renderSwitch('Atmospheric')}
      {renderSwitch('Narrative')}
      {renderSwitch('Sci-Fi & Fantasy')}
      {renderSwitch('Supernatural')}
      {renderSwitch('Post-apocalyptic')}
      {renderSwitch('Humor')}
      {renderSwitch('Music & Sound')}
      {renderSwitch('Art & Design')}
      {renderSwitch('Role-Playing')}
      {renderSwitch('Management & Building')}
      {renderSwitch('Stealth & Strategy')}
      {renderSwitch('Exploration & Adventure')}
      {renderSwitch('Fantasy & Mythology')}
      {renderSwitch('Education & Learning')}
      {renderSwitch('Platformer')}
      {renderSwitch('Historical')}
      {renderSwitch('Early Access')}
      {renderSwitch('VR')}

      <Button
        title="Predict Score"
        onPress={handlePredictSubmit}
      />

      <Text>Predicted Score: {predictedScore}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 20,
  },
});
