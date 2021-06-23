import React, { useEffect, useState } from 'react'
import { ViewStyle } from 'react-native'

import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface FadeLabelProps<T> {
  children: (item: T) => React.ReactNode
  containerStyle?: ViewStyle
  easing: Animated.EasingFunction
  index: number
  items: T[]
  timingInOut: number[]
}

const Fade = <T extends {}>({
  children,
  containerStyle,
  easing = Easing.bezier(0.25, 0.1, 0.25, 1),
  index,
  items,
  timingInOut = [300, 100],
}: FadeLabelProps<T>) => {
  console.log(`FadeLabel`)

  const fade = useSharedValue(0)
  const [oldValue, setOldValue] = useState(index);

  useEffect(() => {
    // console.log(`Fade effect index ${index}`)
    if (index === oldValue) {
      // console.log(`Fade 1 index ${index}`)
      fade.value = 1
    } else {
      // console.log(`Fade 0 index ${index}`)
      fade.value = 0
    }
  });

  const callbackAnimated = () => {
    'worklet'
    console.log(`worklet fade ${index}`)
    runOnJS(setOldValue)(index)
  }

  // const [in, out] = timingInOut

  const style = useAnimatedStyle(() => {
    // console.log(`useAnimatedStyle in fade ${fade.value}`)
    const timingConfig = {
      duration: (fade.value === 1 ? timingInOut[0] : timingInOut[1]),
      easing,
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

  return (
    <>
      <Animated.View style={[{
        flex: 1,
        // justifyContent: 'space-evenly',
        justifyContent: 'center',
        // paddingTop: '0%',
      },
        containerStyle,
        style
      ]}>
        {
          children(items[oldValue])
        }
      </Animated.View>
    </>
  )
}

export default Fade
