import { StyleSheet, View } from "react-native";

interface Props<T> {
  data: T[];
  renderItem(item: T): JSX.Element;
  col?: number;
}
const GridView = <T extends any>(props: Props<T>) => {
  const { data, col = 2, renderItem } = props;
  return (
    <View className=' flex flex-row flex-wrap w-full'>
      {data.map((item: any, index: number) => {
        return (
          <View key={index} style={{ width: "50%" }}>
            <View style={{ padding: 5 }}>{renderItem(item)}</View>
          </View>
        );
      })}
    </View>
  );
};

export default GridView;
const styles = StyleSheet.create({
  container: { width: "100%", flexDirection: "row", flexWrap: "wrap" },
});
