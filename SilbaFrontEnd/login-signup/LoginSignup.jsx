import { View, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import { useState } from "react";

const formStyles = () => {};

const Login = () => (
  <View>
    <Text>Login</Text>
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            placeholder="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
);

const Signup = () => (
  <View>
    <Text>Sign-up</Text>
    <Formik
      initialValues={{ email: "", password: "", username: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="username"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
          />
          <TextInput
            placeholder="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            placeholder="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  </View>
);

export const LoginSignup = () => {
  const [login, setLogin] = useState(true);

  return (
    <View>
      {login ? <Login /> : <Signup />}
      <Button onPress={() => setLogin(!login)} title="switch" />
    </View>
  );
};
