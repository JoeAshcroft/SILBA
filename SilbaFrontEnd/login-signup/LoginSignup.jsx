import { View, Text, Button } from "react-native";
import { NativeBaseProvider, Stack, Input, Icon, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import { useState } from "react";

export const LoginSignup = () => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(false);

  const handleLogin = (formObj) => {
    const { email, password } = formObj
    // userLoginAPiFunc(props)
    // .then((data)=>{
  
    // })
    // .catch((err)=>{
      
    // })
  }
  
  const handleSignup = (formObj) => {
    const { username, email, password } = formObj
    // userSignupAPiFunc(props)
    // .then((data)=>{
  
    // })
    // .catch((err)=>{
      
    // })
  }
  
  const Login = () => {
    return (
      <View style={{ width: "100%" }}>
        <Text>Login</Text>
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
        <Text>Sign-up</Text>
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
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

  return (
    <NativeBaseProvider>
      {login ? <Login /> : <Signup />}
      <Button onPress={() => setLogin(!login)} title="switch" />
    </NativeBaseProvider>
  );
};
