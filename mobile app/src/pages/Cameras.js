import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevices, getCameraDevice } from "react-native-vision-camera";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import RNFS from 'react-native-fs';
import axios from 'axios'
import ImageResizer from 'react-native-image-resizer';

import { Base_URL } from "@env"

function Cameras() {
    const devices = Camera.getAvailableCameraDevices()
    const device = getCameraDevice(devices, 'back')
    const camera = useRef(null)
    const [imageData, setImageData] = useState("")
    const [takePhotoClicked, setTakePhotoClicked] = useState(true)
    const [cameraPermission, setCameraPermission] = useState(null)
    const [imageBase64, setImageBase64] = useState("")
    



    useEffect(() => {
        checkPermission();
    }, []);
    console.log(imageData)


    const checkPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        setCameraPermission(newCameraPermission);
    };

    if (cameraPermission === null) return <ActivityIndicator />;

    if (cameraPermission === false) return <Text>Camera permission denied. Please allow camera access.</Text>;

    const takePicture = async () => {
        if (camera.current) {
            const photo = await camera.current.takePhoto();
            setImageData(photo.path);
            setTakePhotoClicked(false);

            const resizedImage = await ImageResizer.createResizedImage(photo.path, 800, 600, 'JPEG', 80);
            const base64 = await RNFS.readFile(resizedImage.uri, 'base64');
            setImageBase64(base64);
        }
    }

    const sendImage = async () => {
        try {
            const response = await axios.post(`${Base_URL}/getimage`, { image_url: 'data:image/jpeg;base64,' + imageBase64 });
            console.log(response.data);
        } catch (error) {
            console.error("Error sending image: ", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {takePhotoClicked ? (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={camera}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={true}
                        photo={true}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={() => takePicture()}
                    >
                        <Image style={styles.imagecamera} source={require("../assests/images/camera.png")} />

                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {imageData !== '' && <Image source={{ uri: 'file://' + imageData }} style={styles.imagehome} />}
                    <View style={styles.rowstyle}>
                        <TouchableOpacity
                            onPress={() => setTakePhotoClicked(true)}
                            style={styles.buttonyeniden}
                        >
                            <Image style={styles.checkimage} source={require("../assests/images/refresh.png")} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={sendImage}>
                            <Image style={styles.checkimage} source={require("../assests/images/check-mark.png")} />
                        </TouchableOpacity>

                    </View>

                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        height: hp(7),
        width: wp(14),
        borderRadius: 9999,
        backgroundColor: "red",
        position: "absolute",
        alignSelf: "center",
        bottom: hp(13),
        justifyContent: "center",
        alignItems: "center"
    },
    imagecamera: {
        height: hp(7),
        width: wp(14),
        position: "absolute"
    },
    imagehome: {
        width: ("90%"),
        height: hp(40),
        marginBottom: hp(15)
    },
    buttonyeniden: {
        justifyContent: "center",
        justifyContent: "center",
        alignItems: "center",


    },
    rowstyle: {
        flexDirection: "row",
        gap: wp(14),
        alignItems: "center",

    },
    checkimage: {
        width: wp(14),
        height: hp(7)
    }
})

export default Cameras;
