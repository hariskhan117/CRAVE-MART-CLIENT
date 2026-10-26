import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


interface Props {
    children: React.ReactNode,
    bgColor?: string,
    edges?: ("top" | "bottom" | "left" | "right")[];
}
const SafeArea = ({ children, bgColor, edges = ["top", "bottom"] }: Props) => {
    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <SafeAreaView style={styles.safeArea} edges={edges}>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default SafeArea

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeArea: {
        flex: 1
    }
})