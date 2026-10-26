import SafeArea from '@/components/safe.area';
import { BorderRadius, Colors, Shadows, Spacing, Typography } from '@/constant/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface InfoRow {
    value: string
    label: string
}
function InfoRow({ value, label }: InfoRow): React.ReactNode {
    return (
        <View style={style.container}>
            <Text style={style.valueTxt}>{value}</Text>
            <Text style={style.labelTxt}>{label}</Text>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        // paddingHorizontal: Spacing.xl,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: Spacing.lg,
    },
    valueTxt: {
        fontSize: Typography.sizes.normal,
        fontWeight: Typography.weights.medium
    },
    labelTxt: {

        fontSize: Typography.sizes.lg,
        fontWeight: Typography.weights.regular
    }
})
interface HeaderProps {
    label: string;
    name?: string;
    onPress: () => void
    size?: number
};

function Header({
    label,
    onPress,
    name = "chevron-back",
    size = 25
}: HeaderProps): React.ReactNode {
    return (
        <View style={stylez.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={name as any} size={size} />
            </TouchableOpacity>
            <View style={stylez.labelTxtBox}>
                <Text style={stylez.labelTxt}>{label}</Text>
            </View>
        </View>
    );
}
const stylez = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: Spacing.lg,
        alignItems: "center",
    },
    labelTxtBox: {
        flex: 1,
        // backgroundColor: "black",
        alignItems: "center"
    },
    labelTxt: {

        fontSize: Typography.sizes['2xl'],
        fontWeight: Typography.weights.regular
    }
})

export default function ProfileScreen() {
    return (
        <SafeArea bgColor={Colors.background}>
            <View style={styles.container}>
                <Header label="Profile" onPress={() => router.back()} />

                <View style={styles.boxContainer}>

                    <View style={styles.iconContainer}>

                        <Ionicons name='person' size={50} color={Colors.success} />
                    </View>
                </View>
                <View style={styles.infoContainer}>

                    <InfoRow value='Name' label='Haris khan' />
                    <InfoRow value='Name' label='Haris khan' />
                    <InfoRow value='Name' label='Haris khan' />
                    <InfoRow value='Name' label='Haris khan' />
                </View>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.loginTxt}>Logout</Text>
                </TouchableOpacity>
            </View>

        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: Spacing.xl,
        // alignItems: "center",
        // justifyContent: 'center'
        // backgroundColor: "black"
    },
    boxContainer: {
        // flex: 1,
        alignItems: "center",
        marginTop: Spacing['3xl'],
        marginBottom: Spacing['3xl']

    },
    iconContainer: {
        // flex: 1,
        backgroundColor: Colors.successLight,
        ...Shadows.xl,
        height: 120,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: BorderRadius.full,
        position: "relative"
    },
    infoContainer: {
        backgroundColor: Colors.card,
        borderRadius: BorderRadius.base,
        padding: Spacing.xl,
        // paddingBottom: 100,
        ...Shadows.xl

    },
    buttonContainer: {
        paddingBottom: Spacing.xl,
        paddingHorizontal: Spacing.xl
    },
    logoutBtn: {
        alignItems: "center",
        paddingVertical: Spacing.lg,
        backgroundColor: Colors.successLight,
        borderRadius: BorderRadius.xl,
        // ...Shadows.xl,
        borderWidth: 1,
        borderColor: Colors.border
    },
    loginTxt: {
        fontSize: Typography.sizes.xl,
        fontWeight: Typography.weights.bold,
        color: Colors.success
    }

})

