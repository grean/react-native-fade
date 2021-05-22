import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import Picker from '@grean/react-native-carousel-picker'
import Fade from '@grean/react-native-fade'

// import ScaleText from '@grean/react-native-scale-text'

interface ProfilType {
  title: string
  desc: string
}

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

const App = () => {
  const currentItemIndex = 1
  const [itemIndex, setItemIndex] = useState(currentItemIndex);
  const display = "TOP_BOTTOM"
  const spaceBetween = 1 / 3
  const opacityRangeOut = [0, 0.6, 1, 0.6, 0]
  const scaleRangeOut = [0, 0.6, 1, 0.6, 0]

  const profils = [
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
  // const marginVerticalPercentage = 0
  // const marginVerticalPercentage = 0.2
  // const marginVerticalPercentage = 0.3
  // const marginHorizontalPercentage = 0
  const marginHorizontalPercentage = 0.1
  const fontSize = 200

  const onChanged = (itemIndex: number) => {
    setItemIndex(itemIndex)
    console.log(`onChanged itemIndex ${itemIndex}`)
  }



  return (
    <View style={{
      flex: 1
    }}>
      <View style={styles.header}>
        {/* <ScaleText
          {...{
            // allowFontScaling: true,
            allowFontScaling: false,
            fontSize: 250,
            // onPress: () => (alert('lol')),
            // padding: '2%',
            textStyle: {
              color: "white",
              textAlign: 'center',
              fontFamily: 'cookie',
              padding: 10,
              // backgroundColor: 'blue',
              ...textShadow,
            }
          }}
        >
          {`Votre Profil ?`}
        </ScaleText> */}
        {/* <Label style={{ fontSize: 80, ...textShadow }}>
          Votre Profil ?
        </Label> */}
      </View>
      <View style={[styles.picker, {
        // backgroundColor: 'blue',
      }]}>
        {/* <Picker
          {...{
            items,
            currentItemIndex,
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
        /> */}
      </View>
      <View style={styles.desc}>
        <Fade
          {...{
            index: itemIndex,
            items: profils,
            textStyle: {
              // padding: '5%',
              // backgroundColor: 'green',
              ...textShadow,
            }
          }}
        />
      </View>
      {/* <View style={styles.dots}>
        <Text>lol</Text>
      </View> */}
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    flex: 0.8,
    // backgroundColor: 'rgba(100,100,100,0.5)',
    justifyContent: 'center',
  },
  picker: {
    flex: 1.2,
    // backgroundColor: 'rgba(100,100,100,0.5)',
    // justifyContent: 'center',
  },
  desc: {
    flex: 1.5,
    // backgroundColor: 'rgba(100,100,100,0.5)',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  dots: {
    flex: 0.2,
    backgroundColor: 'orange',
  },
})

export default App
