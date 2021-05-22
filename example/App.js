"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
// import Picker from '@grean/react-native-carousel-picker'
var react_native_fade_1 = require("@grean/react-native-fade");
var textShadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10
};
var carouPicker = {
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 50,
    borderBottomWidth: 0,
    borderTopWidth: 0
};
var App = function () {
    var currentItemIndex = 1;
    var _a = react_1.useState(currentItemIndex), itemIndex = _a[0], setItemIndex = _a[1];
    var display = "TOP_BOTTOM";
    var spaceBetween = 1 / 3;
    var opacityRangeOut = [0, 0.6, 1, 0.6, 0];
    var scaleRangeOut = [0, 0.6, 1, 0.6, 0];
    var profils = [
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
    ];
    var items = profils.map(function (item) { return item.title; });
    var marginVerticalPercentage = 0;
    // const marginVerticalPercentage = 0.2
    // const marginVerticalPercentage = 0
    // const marginVerticalPercentage = 0.2
    // const marginVerticalPercentage = 0.3
    // const marginHorizontalPercentage = 0
    var marginHorizontalPercentage = 0.1;
    var fontSize = 200;
    var onChanged = function (itemIndex) {
        setItemIndex(itemIndex);
        console.log("onChanged itemIndex " + itemIndex);
    };
    return (<react_native_1.View style={{
            flex: 1
        }}>
      <react_native_1.View style={styles.header}>
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
      </react_native_1.View>
      <react_native_1.View style={[styles.picker, {
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
      </react_native_1.View>
      <react_native_1.View style={styles.desc}>
        <react_native_fade_1["default"] {...{
        index: itemIndex,
        items: profils,
        textStyle: __assign({}, textShadow)
    }}/>
      </react_native_1.View>
      {/* <View style={styles.dots}>
          <Text>lol</Text>
        </View> */}
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    header: {
        flex: 0.8,
        // backgroundColor: 'rgba(100,100,100,0.5)',
        justifyContent: 'center'
    },
    picker: {
        flex: 1.2
    },
    desc: {
        flex: 1.5
    },
    dots: {
        flex: 0.2,
        backgroundColor: 'orange'
    }
});
exports["default"] = App;
