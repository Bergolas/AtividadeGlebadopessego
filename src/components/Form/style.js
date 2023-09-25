import {StyleSheet } from "react-native";


const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "auto",
        bottom: 0,
        backgroundColor: "#000000",
        alignItems: "center",
        borderTopLeftRadius: 30,    
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        marginTop: 10,
    },

    form:{
        width: "auto",
        height: "auto",
        marginTop: 30,
        padding: 30,
    },

    label:{
        color:"#fff",
        fontSize: 18 ,
        paddingLeft: 20,
    },

    input:{
        width: "auto",
        borderRadius: 20,
        backgroundColor: "#fbfcfa",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#0a0a0a",
        fontWeight: "bold",
    },
    errormessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: "bold",
        paddingLeft: 10,
    }


})

export default styles