import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addGoalView, setAddGoalView] = useState(false);
  
  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setAddGoalView(false);
  };

  const cancelGoalAdditionHandler = () =>{
    setAddGoalView(false);
  }

  const onDelete = (key) => {
    setCourseGoals((goals)=> goals.filter((val) => val.id !== key))
  }



  return (
    <View style={styles.root}>
      <Button title="Add New Goals" onPress={()=> setAddGoalView(true)}/>
      <GoalInput visibility={addGoalView} addGoalHandler={addGoalHandler} cancel={cancelGoalAdditionHandler}/>
      <FlatList
        keyExtractor={(item, index)=> item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem title={itemData.item.value} onDelete={onDelete.bind(this, itemData.item.id)}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  }
});
