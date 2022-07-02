import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
const { width: windowWidth } = Dimensions.get("window");
import React from "react";

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 150,
  },
});

var versionControle = [
  {
    f: (data) => <PersonalCardFroent1 data={data} />,
    b: (data) => <PersonalCardBack1 data={data} />,
  },
];

export default function PersonalCardCoursole({ data }) {
  const carouselRef = React.useRef(null);
  var renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        {index === 0
          ? versionControle[item.versionNo].f(item)
          : versionControle[item.versionNo].b(item)}
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      data={[data, data]}
      renderItem={renderItem}
      style={styles.carousel}
      itemWidth={windowWidth * 0.9}
      containerWidth={windowWidth}
      separatorWidth={0}
    />
  );
}

// Card versioning  starts from here

const PersonalCardFroent1 = ({ data }) => {
  return (
    <View>
      <Text>card 1 {data._id}</Text>
    </View>
  );
};

const PersonalCardBack1 = ({ data }) => {
  return (
    <View>
      <Text>card 2 {data._id}</Text>
    </View>
  );
};
