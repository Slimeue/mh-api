import { Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { GlobalColors } from "../constants/colors";
import { Link } from "expo-router";

const ListPage = ({ item, url }: any) => {
  return (
    <View style={styles.container}>
      <Link href={url + item.id} asChild>
        <Pressable>
          <View style={styles.innerContainer}>
            <View style={styles.imageCont}>
              <View style={styles.innerImageCont}>
                <Image style={styles.image} source={{ uri: item.url }} />
              </View>
            </View>
            <View style={styles.textCont}>
              <Text style={styles.text} variant="headlineSmall">
                {item.name}
              </Text>
            </View>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default ListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
  },
  imageCont: {
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 5,
    marginRight: 5,
  },
  innerImageCont: {
    backgroundColor: GlobalColors.black700,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },

  textCont: {
    justifyContent: "center",
  },
  text: {
    color: GlobalColors.white100,
  },
});
