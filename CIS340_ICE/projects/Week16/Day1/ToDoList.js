// Import necessary components from React and React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Main App component
export default function App() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addTask(){
    if(taskInput.trim()){
      // create new array with existing tasks
      const updatedList = [...taskList, taskInput];

      // update the task list state
      setTaskList(updatedList);
      setTaskInput('');
    }
  }
  
  function deleteTask(indexToDelete){
    // create copy of current task list
    const updatedList = [...taskList];

    // Removed the task
    updatedList.splice(indexToDelete, 1);

    // yodate the task list state
    setTaskList(updatedList);
  }

  return(
    <View style={styles.container}>
      {/* Input field for entering a new task */}
      <TextInput
        style={styles.input}
        placeholder='Enter a task'
        value={taskInput}
        onChangeText={setTaskInput}
      />

      {/* Button to add the task to the list */}
      <Button title="Add Task" onPress={addTask}/>

      {/* Display the list  */}
      <FlatList
        data={taskList}
        keyExtractor={( item, index ) => index.toString()}

        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <Button title="Delete" onPress={() => deleteTask(index)}/>
          </View>
        )}
      />
    </View>

  );
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,              // Take up full screen height
    padding: 20,          // Padding inside the screen
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1, // Line under the input
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',         // Arrange text and button side-by-side
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
});
