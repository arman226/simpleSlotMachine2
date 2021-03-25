import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Button,
  Dimensions,
} from 'react-native';

const numbers = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];
const App = () => {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(1);
  const [n3, setN3] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [fl1, sFL1] = useState(null);
  const [fl2, sFL2] = useState(null);
  const [fl3, sFL3] = useState(null);

  const roll = () => {
    setIsRolling(true);
    setN1(generateNumber);
    setN2(generateNumber);
    setN3(generateNumber);
    setTimeout(() => {
      setIsRolling(false);
    }, 700);

    fl1.scrollToIndex({animated: true, index: n1});
    fl2.scrollToIndex({animated: true, index: n2});
    fl3.scrollToIndex({animated: true, index: n3});
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * numbers.length);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: Dimensions.get('screen').height,
      }}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.slot}>
          <View style={styles.section}>
            <FlatList
              data={numbers}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ref={ref => {
                sFL1(ref);
              }}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: item,
                    width: 80,
                    height: 100,
                  }}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.slot}>
          <View style={styles.section}>
            <FlatList
              data={numbers}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ref={ref => {
                sFL2(ref);
              }}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: item,
                    width: 80,
                    height: 100,
                  }}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.slot}>
          <View style={styles.section}>
            <FlatList
              data={numbers}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ref={ref => {
                sFL3(ref);
              }}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: item,
                    width: 80,
                    height: 100,
                  }}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
      {!isRolling && (
        <Button
          title={isRolling ? 'ROLLING' : 'ROLL'}
          onPress={() => {
            roll();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slot: {
    position: 'relative',
    height: 100,
    width: 80,
  },
  container: {
    position: 'absolute',
    top: 2,
    width: '100%',
    textAlign: 'center',
  },
  section: {
    position: 'absolute',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 70,
    height: 70,
    overflow: 'hidden',
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
