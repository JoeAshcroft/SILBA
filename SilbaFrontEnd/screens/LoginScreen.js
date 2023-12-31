import { View, Text, Button } from "react-native";
import {
  NativeBaseProvider,
  Stack,
  Input,
  Icon,
  Pressable,
  VStack,
  Alert,
  Box,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { postLogin, postSignUp } from "../api/api";
import { useAuth } from "../Utils/AuthContext";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";

export default LoginScreen = () => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [signupErr, setSignupErr] = useState(null);
  const { user, setUser } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  const handleLogin = (formObj) => {
    const { email, password } = formObj;
  
    const loginData = {
      email,
      password,
    };
  
    postLogin(loginData)
      .then((data) => {
        if (data.success) {
          setUser(data);
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  const handleSignup = (formObj) => {
    setError(false);
    setSignupErr(null);
    setFormValues(formObj);
  };

  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    if (formValues) {
      const { username, fullName, password, email } = formValues;

      const userData = {
        username,
        fullName,
        password,
        email,
      };

      postSignUp(userData)
        .then((response) => {
          if (response.success) {
            setSignupErr(null);
            navigation.navigate("Login");
          } else {
            setSignupErr("An error occurred during signup.");
          }
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          setSignupErr("An error occurred during signup.");
        });
    }
  }, [formValues]);

  const Login = () => {
    return (
      <View style={{ width: "100%", paddingTop:20 }}>
       
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleLogin(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Stack w="100%" space={4} alignItems="center">
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="email" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </Stack>
          )}
        </Formik>
      </View>
    );
  };

  const Signup = () => {
    return (
      <View style={{ width: "100%" }}>
        <Text style={{fontSize:20, textAlign:'center', padding:20}} >Create an account</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
            fullName: "",
          }}
          onSubmit={(values) => handleSignup(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Stack w="100%" space={4} alignItems="center">
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="email" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Email Address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </Stack>
          )}
        </Formik>
      </View>
    );
  };

  const ErrorSnackbar = () => (
    <Alert w="100%" status="warning">
      <VStack space={1} flexShrink={1} w="100%" alignItems="center">
        <Alert.Icon size="md" />
        <Text
          fontSize="md"
          fontWeight="medium"
          _dark={{
            color: "coolGray.800",
          }}
        >
          {login ? "Incorrect email or password!" : "User already exists!"}
        </Text>
      </VStack>
    </Alert>
  );

  return (
    <NativeBaseProvider>
      {error ? <ErrorSnackbar /> : null}
      {login ? <Login /> : <Signup />}
      {login ? <Button onPress={() => setLogin(!login)} title="Create Account" /> :  <Button onPress={() => setLogin(!login)} title="Back to login" />}
    </NativeBaseProvider>
  );
};
