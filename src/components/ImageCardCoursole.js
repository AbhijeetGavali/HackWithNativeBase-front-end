import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Box, AspectRatio, Image, Center } from "native-base";
import Carousel from "react-native-anchor-carousel";
const { width: windowWidth } = Dimensions.get("window");
import React from "react";

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 210,
  },
  item: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 5,
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
      itemWidth={windowWidth}
      containerWidth={windowWidth}
      separatorWidth={2}
    />
  );
}

// Card versioning  starts from here

const ImageCardFroent1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <View>
            <AspectRatio w="100%" ratio={336 / 192}>
              <Image
                source={{
                  uri: data.fUrl,
                }}
                borderRadius={10}
                alt={"front image of the " + data.name}
              />
            </AspectRatio>
          </View>
        </Box>
      </Box>
    </Box>
  );
};

const ImageCardBack1 = ({ data }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="4"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={336 / 192}>
            <Image
              source={{
                uri: data.bUrl,
              }}
              alt={"back image of the " + data.name}
              borderRadius={10}
            />
          </AspectRatio>
        </Box>
      </Box>
    </Box>
  );
};
