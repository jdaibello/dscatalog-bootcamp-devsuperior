import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { text, theme } from "../styles";

import eyesOpened from "../assets/eyes-opened.png";
import eyesClosed from "../assets/eyes-closed.png";
import arrow from "../assets/arrow.png";
import { login } from "../services/auth";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [userFetchData, setUserFetchData] = useState({});
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  async function handleLogin() {
    const data = await login(userInfo);
    setUserFetchData(data);
    navigation.navigate("Dashboard");
  }

  return (
    <View style={theme.container}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        <View style={theme.form}>
          <TextInput
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            style={theme.textInput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <View style={theme.passwordGroup}>
            <TextInput
              placeholder="Senha"
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              secureTextEntry={hidePassword}
              onChangeText={(e) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              style={theme.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image
                source={hidePassword ? eyesOpened : eyesClosed}
                style={theme.eyes}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={theme.primaryButton}
          activeOpacity={0.8}
          onPress={() => handleLogin()}
        >
          <View style={theme.buttonTextContainer}>
            <Text style={text.primaryText}>Fazer Login</Text>
          </View>
          <View style={theme.arrowContainer}>
            <Image source={arrow} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
