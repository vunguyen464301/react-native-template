import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {
  Button,
  Text,
  View,
  NativeModules,
  Platform,
  ViewStyle,
  Animated,
  StyleSheet,
  PanResponder,
} from 'react-native';
import s from 'styles';

const {CalendarModule} = NativeModules;

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef<Animated.Value>(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const DragDrop = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const componentView = useRef<View | null>(null);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, ges) => {
        return true;
      },

      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      // onPanResponderMove(e, gestureState) {
      //   return Animated.event([null, {dx: pan.x, dy: pan.y}], {
      //     useNativeDriver: false,
      //   });
      // },
      // onPanResponderMove(e, gestureState) {

      // },
      // onPanResponderMove(e, gestureState) {
      //   console.log(gestureState);
      //   Animated.event([null, {dx: pan.x, dy: pan.y}], {
      //     useNativeDriver: false,
      //   });
      // },

      onPanResponderRelease: (e, ges) => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  console.log(
    componentView.current &&
      componentView.current.measure((fx, fy, width, height, px, py) => {
        console.log('Component width is: ' + width);
        console.log('Component height is: ' + height);
        console.log('X offset to frame: ' + fx);
        console.log('Y offset to frame: ' + fy);
        console.log('X offset to page: ' + px);
        console.log('Y offset to page: ' + py);
      }),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <View
        style={{width: 500, height: 500, backgroundColor: 'red'}}
        ref={view => {
          componentView.current = view;
        }}>
        <Animated.View
          style={{
            transform: [
              {translateX: pan.x},
              {
                translateY:
                  // Number(pan.y) < 100 ? pan.y : new Animated.Value(100),
                  new Animated.Value(350),
              },
            ],
          }}
          {...panResponder.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    </View>
  );
};

const HomeScreen = (): JSX.Element => {
  const onTest = () => {
    CalendarModule.createCalendarEvent('test', '1234324324');
  };

  return (
    <View style={s.fl1}>
      <Text>ok</Text>

      <Button onPress={onTest} title="ok"></Button>

      {/* <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FadeInView
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue',
          }}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Fading in
          </Text>
        </FadeInView>
      </View> */}
      <DragDrop />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default HomeScreen;
