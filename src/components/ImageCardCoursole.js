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

export default function ImageCardCoursole({ data }) {
  const carouselRef = React.useRef(null);
  var renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        {index === 0 ? (
          <ImageCardFroent1 data={item} />
        ) : (
          <ImageCardBack1 data={item} />
        )}
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

const ImageCardFroent1 = ({ data }) => {
  return (
    <View>
      <Text>card 1 {data._id}</Text>
    </View>
  );
};

const ImageCardBack1 = ({ data }) => {
  return (
    <View>
      <Text>card 2 {data._id}</Text>
    </View>
  );
};
