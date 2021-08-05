import React from "react";

import {
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import { text, theme } from "../styles";

interface ProductProps {
  id: Number;
  name: string;
  imgUrl: ImageSourcePropType;
  price: string;
  role?: string;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  imgUrl,
  price,
  role,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={theme.productCard}
      onPress={() => navigation.navigate("ProductDetails", { id })}
    >
      <Image source={{ uri: imgUrl }} style={theme.productImg} />
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <TextInputMask
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "",
              suffixUnit: "",
            }}
            value={price}
            editable={false}
            style={text.productPrice}
          />
        </View>

        {role === "admin" && (
          <View style={theme.buttonContainer}>
            <TouchableOpacity style={theme.deleteBtn}>
              <Text style={text.deleteText}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={theme.editBtn}>
              <Text style={text.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
