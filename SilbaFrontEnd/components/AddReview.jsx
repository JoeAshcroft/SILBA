import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

export default AddReview = () => {
    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                placeholder="Leave a review"
                multiline 
                numberOfLines={5} 
                style={styles.textInput}
                underlineColorAndroid="transparent" 
                selectionColor="#000" 
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    textInput: {
        backgroundColor: "#EDEDED", // Grey background
        borderRadius: 100,
        height: 40,
        flex: 1, // Take up available space
        paddingHorizontal: 20, // Horizontal padding
        paddingVertical: 10, // Vertical padding
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10, // Add some spacing between TextInput and Button
    },
    submitButton: {
        
        borderRadius: 100,
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        paddingVertical: 10, // Vertical padding
        width: 60,
        height: 40,
    },
    submitText: {
        fontSize: 12,
    },
});

