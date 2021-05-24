import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

import ScaleText from '@grean/react-native-scale-text'

import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type TextStyleType = {
  fontFamily?: string
  fontSize?: number
  backgroundColor?: string
  color?: string
}

export type TextItem = {
  title?: string
  desc?: string
}

interface FadeLabelProps {
  index: number
  items: TextItem[]
  textStyle?: TextStyleType
}

const Fade = ({ items, textStyle, index }: FadeLabelProps) => {
  console.log(`FadeLabel`)

  const fade = useSharedValue(0)
  const [oldValue, setOldValue] = useState(index);

  useEffect(() => {
    // console.log(`FadeLabel mounted`)
    if (index === oldValue) {
      fade.value = 1
    } else {
      fade.value = 0
    }
  });

  const callbackAnimated = () => {
    'worklet'
    runOnJS(setOldValue)(index)
  }

  const style = useAnimatedStyle(() => {
    // console.log(`useAnimatedStyle in fade ${fade.value}`)
    const timingConfig = {
      duration: (fade.value === 1 ? 300 : 100),
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }
    // const scale = withTiming(fade.value, timingConfig)
    const opacity = withTiming(fade.value, timingConfig, callbackAnimated)
    return {
      opacity,
      // transform: [
      //   {
      //     scale,
      //   },
      // ],
    }
  })

  const lorem = `oeuaouLorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolor totam tempore fuga porro, sint inventore unde laboriosam in voluptas velit maiores reprehenderit eaque rem officiis itaque repudiandae corporis esse?`

  return (
    <>
      <Animated.View style={[{
        flex: 1,
        // justifyContent: 'space-evenly',
        justifyContent: 'center',
        // paddingTop: '0%',
      }, style]}>
        {/* <Text>{lorem}</Text> */}
        <ScaleText
          {...{
            // allowFontScaling: true,
            fontSize: 120,
            // onPress: () => (alert('lol')),
            padding: '6%',
            textStyle: {
              color: "white",
              textAlign: 'center',
              // fontFamily: 'cookie',
              ...textStyle,
            }
          }}
        >
          {items[oldValue].desc}
        </ScaleText>
        {/* <Text
          style={[{
            color: "white",
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'cookie',
          },
            textStyle,
          ]}
        >
          {items[oldValue].desc}
        </Text> */}
        {/* {item.title && <Text
          style={[{
            color: "white",
            fontSize: 50,
            textAlign: 'center',
            fontFamily: 'cookie',
          },
            textStyle,
          ]}
        >
          {item.title}
        </Text>} */}
      </Animated.View>
    </>
  )
}

export default Fade
