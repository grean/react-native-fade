import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Picker from '@grean/react-native-carousel-picker'
import Fade from '../src/Fade'

import ScaleText from '@grean/react-native-scale-text'
import { useFonts } from 'expo-font'
import { Easing } from 'react-native-reanimated'

const textShadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: { width: 3, height: 3 },
  textShadowRadius: 10,
}

const carouPicker = {
  borderWidth: 0,
  borderColor: 'rgba(255,255,255,0.8)',
  borderRadius: 50,
  borderBottomWidth: 0,
  borderTopWidth: 0,
}

type TextItem = {
  title: string
  desc: string
}

const App = () => {
  const currentItemIndex = 2
  const [index, setIndex] = useState(currentItemIndex);
  const display = "TOP_BOTTOM"
  const spaceBetween = 1 / 1.4
  const opacityRangeOut = [0, 0.6, 1, 0.6, 0]
  const scaleRangeOut = [0, 0.6, 1, 0.6, 0]

  const profils: TextItem[] = [
    {
      "title": "Retraité sportif sportif",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    },
    {
      "title": "Adolescent",
      "desc": "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor."
    },
    {
      "title": "Salarié debout",
      "desc": "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue."
    },
    {
      "title": "Retraité sportif2",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    },
    {
      "title": "Adolescent2",
      "desc": "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor."
    },
    {
      "title": "Salarié debout2",
      "desc": "Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue."
    }
  ]
  const items = profils.map(item => item.title)
  const marginVerticalPercentage = 0
  // const marginVerticalPercentage = 0.2
  const marginHorizontalPercentage = 0
  // const marginHorizontalPercentage = 0.1
  const fontSize = 200

  const onChanged = (newIndex: number) => {
    console.log(`onChanged newIndex ${newIndex}`)
    setIndex(newIndex)
  }

  let [fontsLoaded] = useFonts({
    'cookie': require('./fonts/Cookie-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={{
      flex: 1
    }}>
      <View style={[styles.picker, {
        // backgroundColor: 'blue',
      }]}>
        <Picker
          {...{
            items,
            index,
            onChanged,
            marginVerticalPercentage,
            marginHorizontalPercentage,
            display,
            opacityRangeOut,
            scaleRangeOut,
            spaceBetween,
            textStyle: {
              fontFamily: 'cookie',
              // padding: 10,
              ...textShadow
            },
            containerStyle: {
              // backgroundColor: 'green',
              ...carouPicker,
              // textShadowColor: 'rgba(0, 0, 0, 0.75)',
              // textShadowOffset: { width: 3, height: 3 },
              // textShadowRadius: 10,
            },
            fontSize,
          }}
        />
      </View>
      <View style={styles.desc}>
        <Fade
          {...{
            index,
            items: profils,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            timingInOut: [300, 100],//[in, out]
            containerStyle: {
              justifyContent: 'center',
              // justifyContent: 'flex-end',
              // backgroundColor: 'blue',
              padding: 20,
            }
          }}
        >
          {(item) =>
            <ScaleText
              {...{
                fontSize: 160,
                padding: '6%',
                textStyle: {
                  color: "white",
                  textAlign: 'center',
                  fontFamily: 'cookie',
                  ...textShadow,
                }
              }}
            >
              {item.desc}
            </ScaleText>
            // <Text
            //   {...{
            //     padding: '6%',
            //     style: {
            //       fontSize: 30,
            //       color: "white",
            //       textAlign: 'center',
            //       fontFamily: 'cookie',
            //       ...textShadow,
            //     }
            //   }}
            // >
            //   {child}
            // </Text>
          }
        </Fade>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  picker: {
    flex: 1.2,
    backgroundColor: 'rgba(100,100,100,0.5)',
    // justifyContent: 'center',
  },
  desc: {
    flex: 1.5,
    backgroundColor: 'pink',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
})

export default App
