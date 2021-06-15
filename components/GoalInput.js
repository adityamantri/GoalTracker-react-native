import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (val) => {
    setEnteredGoal(val);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visibility}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actionButtons}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" color="red" onPress={props.cancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
      fontSize: 20,
      fontWeight: "bold",
      borderRadius: 5,
      borderWidth: 1,
      width: "80%",
      padding: 10,
      marginBottom:10
  },
  actionButtons: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default GoalInput;
