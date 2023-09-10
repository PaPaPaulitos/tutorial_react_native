import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* titulo */}
      <View style={styles.tasksWrapper} ></View>
        <Text style={styles.sectionTitle} >Atividades de hoje</Text>

        <View style={styles.items}>
          {/* Aqui ficarão as tarefas */}
          <Task text={'Levar o cachorro para passear'} />
          <Task text={'Comer bolo'} />
          <Task text={'Dormir'} />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {

  },

});
