import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevices, getCameraDevice } from "react-native-vision-camera";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

function Cameras() {
    const devices = Camera.getAvailableCameraDevices()
    const device = getCameraDevice(devices, 'back')
    const camera = useRef(null)
    const [imageData, setImageData] = useState("")
    const [takePhotoClicked, setTakePhotoClicked] = useState(false)
    const [cameraPermission, setCameraPermission] = useState(null)

    useEffect(() => {
        checkPermission();
    }, []);

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
        }
    }

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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => takePicture()}
                    />
                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {imageData !== '' && <Image source={{ uri: 'file://' + imageData }} style={{ width: "90%", height: 200 }} />}
                    <TouchableOpacity
                        onPress={() => setTakePhotoClicked(true)}
                        style={{ width: '90%', height: 50, alignSelf: "center" }}
                    >
                        <Text>Take Photo</Text>
                    </TouchableOpacity>
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
    }
})

export default Cameras;
