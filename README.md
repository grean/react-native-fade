# react-native-fade
Fade is a wrapper component that allows you apply a fade[in|out] effect on its render prop child<br/>
It's a full typescript component using reanimated2. You can render any component you want and any items of your choice.<br/>
The work is still in progress but you can use it and improve it if you want! PR are welcome.<br/>
<br/>
<a align="center" href="https://www.npmjs.com/package/@grean/react-native-fade">
  <img src="https://img.shields.io/npm/v/@grean/react-native-fade" />
</a>

## Demo
### Works on both iPhone and Android
![Example in protrait](./assets/demo.gif)

## Installation
Using yarn:

```sh
yarn add @grean/react-native-fade
```

## Usage
Simply wrap a component like RN ```<Text>``` to apply a fade in/out effect when the index prop change.

```tsx
const currentItemIndex = 1
const [itemIndex, setItemIndex] = useState(currentItemIndex);
const items = [itemsOfYourChoice]

//removed code for brevety

<Fade
  {...{
    index: itemIndex,
    items: profils,
  }}
>
  {(item) => //type of item inferred from Fade's items prop
    <Text>
      {item.desc}
    </Text>
  }
</Fade>
```

## Component props
```tsx
interface FadeLabelProps<T> {
  children: (item: T) => React.ReactNode // Render prop. See example above.
  containerStyle?: {
    // * <View> style prop
    // default running values that you can override:
    flex: 1,
    justifyContent: 'center',
  }
  easing: Animated.EasingFunction // Easing.bezier(0.25, 0.1, 0.25, 1)
  index: number
  items: T[] // You ca pass everything you want in an array
  timingInOut: number[], //  [300, 100]
}
```

## Testing
See Expo example app for testing with hot-reload, you can directly modify the code's component and see how it looks immediately.
```sh
git clone https://github.com/grean/react-native-fade.git
cd react-native-fade && yarn
cd example && yarn
yarn ios
```

## About
If you want to eat well and healthy, i recommand you to check out my mobile app [Dietethic.net](https://dietethic.net)<br/>

<a align="center" href="https://github.com/grean?tab=followers">
  <img src="https://img.shields.io/github/followers/grean?label=Follow%20%40grean&style=social" />
</a>
<br />
<a align="center" href="https://twitter.com/reanGuillaume">
  <img src="https://img.shields.io/twitter/follow/reanGuillaume?label=Follow%20%40reanGuillaume&style=social" />
</a>

## License 
MIT
