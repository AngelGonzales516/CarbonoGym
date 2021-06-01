import React from "react"
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather, Ionicons } from '@expo/vector-icons';
import { Input, Button, Text } from 'react-native-elements'

const { width, height } = Dimensions.get("window");

const FormLogin = () => {

    return (
        <SafeAreaView
            style={Style.formLoginContainer}>
            <ScrollView
                alwaysBounceVertical={true}
                horizontal={false}
                centerContent={true}
                directionalLockEnabled={true}
                alwaysBounceHorizontal={false}
                style={Style.scrollContainer}

            >
                <View style={Style.textContainer}>
                    <Text style={Style.textsStyles}>
                        Bienvenidos
                    </Text>
                    <Text style={Style.textsStyles}>
                        a
                    </Text>
                    <Text style={Style.textsStyles}>
                        Carbono GYM
                    </Text>
                </View>
                <Input
                    placeholder="Correo"
                    inputStyle={Style.InputStyle}
                    inputContainerStyle={Style.inputContainer}
                    containerStyle={Style.containterAllInput}
                    leftIcon={
                        <Feather
                            name="user"
                            color="#606B7A"
                            size={27}
                        />

                    }
                    leftIconContainerStyle={Style.inputLeftIcon}
                    labelStyle={Style.label}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                />

                <Input
                    placeholder="Contraseña"
                    inputStyle={Style.InputStyle}
                    inputContainerStyle={Style.inputContainer}
                    containerStyle={Style.containterAllInput}
                    leftIcon={
                        <Feather
                            name="lock"
                            color="#606B7A"
                            size={27}
                        />

                    }
                    leftIconContainerStyle={Style.inputLeftIcon}
                    labelStyle={Style.label}
                    keyboardType="default"
                    textContentType="password"
                    autoCorrect={false}

                />
                <View style={Style.ButtonsContainer}>
                    <Button
                        title="Ingresar"
                        buttonStyle={Style.loginButtonContainer}
                    />

                    <Button
                        title="Crear cuenta"
                        buttonStyle={Style.loginButtonContainer}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )


}

const Style = StyleSheet.create({
    formLoginContainer: {
        position: "absolute",
        backgroundColor: "#F56700",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0,
        height: height * 0.6,
        width: width,
        zIndex: 10,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 40,
        alignItems: "center",
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        width: width * 0.8,
    },
    label: {
        fontSize: 13,

        color: "#606B7A",
        marginTop: 10
    }
    ,
    textContainer: {
        alignItems: "center",
        marginBottom: 10
    }
    ,
    textsStyles: {
        fontSize: 20,
        fontWeight: "bold"
    }
    ,
    InputStyle: {
        borderColor: "#000000",
        borderRadius: 50,
    },

    inputLeftIcon: {
        marginRight: 5,
    },

    inputContainer: {
        borderBottomWidth: 0,
        backgroundColor: "white",
        justifyContent: "flex-end",
        borderRadius: 50


    },

    containterAllInput: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#adadad",
        marginBottom: 5,
        backgroundColor: "white",
        justifyContent: "flex-end",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 15,
    },
    ButtonsContainer: {
        marginTop: 10,
        alignItems: "center"
    }
    ,

    loginButtonContainer: {
        backgroundColor: "#2f3640",
        borderRadius: 50,
        width: width * 0.4,
        height: 50,
        marginBottom: 20,

    },


})

export default FormLogin;