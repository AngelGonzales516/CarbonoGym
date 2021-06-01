import React from "react"
import { StyleSheet, View, Dimensions, ScrollView } from "react-native"
import { Button, Input, Text } from "react-native-elements"
import { Feather } from "@expo/vector-icons"

const { width, height } = Dimensions.get("window");

const FormSignup = () => {
    return (<View style={Style.formSignupContainer}>
        <ScrollView style={Style.scrollContainer}>
            <View style={Style.textConteiner}>
                <Text style={Style.textStyles}> CREAR CUENTA </Text>
            </View>

            <View style={Style.inputsContainers}>
                <Input
                    placeholder="Nombre Completo"
                    leftIcon={<Feather
                        name="user"
                        color="#606B7A"
                        size={25}

                    />}
                    labelStyle={Style.label}
                    inputContainerStyle={Style.inputContainer}
                />

                <Input
                    placeholder="Correo Electronico"
                    leftIcon={<Feather
                        name="mail"
                        color="#606B7A"
                        size={25}

                    />}
                    labelStyle={Style.label}
                    inputContainerStyle={Style.inputContainer}
                />
                <Input
                    placeholder="Contraseña"
                    leftIcon={<Feather
                        name="eye"
                        color="#606B7A"
                        size={25}

                    />}
                    labelStyle={Style.label}
                    inputContainerStyle={Style.inputContainer}
                />
                <Input
                    placeholder="Confirmar Contraseña"
                    leftIcon={<Feather
                        name="eye"
                        color="#606B7A"
                        size={25}

                    />}
                    labelStyle={Style.label}
                    inputContainerStyle={Style.inputContainer}
                />
            </View>
            <View style={Style.ButtonsContainer}>
                <Button
                title="Crear"
                buttonStyle ={Style.signupButtonContainer}
                />
                <Button
                title="Cancelar"
                buttonStyle={Style.signupButtonContainer}
                />
            </View>
        </ScrollView>
    </View>
    )
}

const Style = StyleSheet.create({
    formSignupContainer: {
        position: "absolute",
        backgroundColor: "#F56700",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0,
        height: height * 0.9,
        width: width,
        zIndex: 10,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        flex: 1,
        width: width * 0.8,
    },
    textConteiner: {
        alignItems: "center"
    },
    textStyles: {
        fontSize: 20,
        fontWeight: "bold"
    }
    ,
    label: {
        fontSize: 13,
        color: "#000000",
        marginTop: 10
    },
    inputsContainers: {
        marginTop: 20
    }
    ,
    inputContainer: {
        borderBottomWidth: 0,
        backgroundColor: "white",
        justifyContent: "flex-end",
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 50
    },

    ButtonsContainer: {
        marginTop: 10,
        alignItems: "center"
    }
    ,
    signupButtonContainer:{
        backgroundColor: "#2f3640",
        borderRadius: 50,
        width: width * 0.5,
        height: 50,
        marginBottom: 20,

    }


})

export default FormSignup;