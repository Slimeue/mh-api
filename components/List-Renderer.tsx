import { FlatList } from "react-native";

import ListPage from "./list";

const ListRenderer = ({ item: data, url }: any) => {
  return (
    <FlatList
      initialNumToRender={7}
      data={data}
      renderItem={(item) => <ListPage url={url} item={item.item} />}
    />
  );
};

export default ListRenderer;
