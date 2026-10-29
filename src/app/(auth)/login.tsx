import SafeArea from '@/components/safe.area';
import { BorderRadius, Colors, Shadows, Spacing, Typography } from '@/constant/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import Animated, {
    FadeInDown,
    FadeInLeft,
    FadeInRight
} from 'react-native-reanimated';

export default function LoginScreen() {
    return (
        <SafeArea bgColor={Colors.blueBadgeLight}>
            <View style={styles.container} >
                <LinearGradient colors={[Colors.greenBadge, Colors.greenBadgeLight]}
                    start={{ x: 0, y: 1 }}  // Left se
                    end={{ x: 1.2, y: 0 }}
                    style={styles.header}
                >
                    <Animated.Text
                        entering={FadeInDown.duration(1500)}
                        style={styles.welcmTxt}
                    >
                        Hello, Welcome Back
                    </Animated.Text>

                    <Animated.View
                        // entering={FadeInRight.delay(1000).duration(1000)}
                        style={styles.logoContainer}
                    >
                        <Animated.Text entering={FadeInLeft.delay(1000).duration(1000)} style={[styles.welcmTxt, { color: Colors.text }]}>Crave X</Animated.Text>
                        <Animated.View entering={FadeInRight.delay(1000).duration(1000)}>
                            <Ionicons
                                name="logo-buffer"
                                size={35}
                                color={Colors.text}
                            />
                        </Animated.View>
                    </Animated.View>
                </LinearGradient>

                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{
                        paddingHorizontal: Spacing.xl,
                        paddingTop: Spacing['2xl'],
                    }}
                    bottomOffset={50}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={true}
                >

                    <View style={styles.formContainer}>
                        <View style={styles.loginContainer}>

                            <Text style={styles.lgnTxt}>Login</Text>
                        </View>

                        <View style={{ gap: 10 }}>
                            <Text style={styles.fieldTxt}>Email *</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder='Enter Your Email' placeholderTextColor={Colors.black} />
                                <View style={{ paddingLeft: 10 }}>
                                    <Ionicons name='person' size={20} />
                                </View>
                            </View>
                        </View>
                        <View style={{ gap: 10, marginTop: Spacing.xl }}>
                            <Text style={styles.fieldTxt}>Password *</Text>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} placeholder='Enter Your Password' placeholderTextColor={Colors.black} />
                                <View style={{ paddingLeft: 10 }}>
                                    <Ionicons name='eye-off-outline' size={20} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.forgotConatiner}>

                            <TouchableOpacity>

                                <Text style={styles.forgotTxt}>
                                    forgot password
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.forgotTxt}>
                                    Dont't have an account ? <Text style={{ color: Colors.success, }}>
                                        Signup </Text>
                                </Text>

                            </TouchableOpacity>
                        </View>
                        <Pressable onPress={() => router.back()} style={styles.loginButton}>
                            <Text style={styles.lgnbtnTxt}>Login</Text>
                        </Pressable>
                    </View>
                    {/* <View style={{ height: 100 }} /> */}
                </KeyboardAwareScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Text> Secure enterprise access
                    </Text>
                </View>
            </View>
        </SafeArea>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: Spacing.xl,
        flex: 1,
    },
    header: {

        alignItems: "center",
        paddingVertical: Spacing.xl,
        borderBottomLeftRadius: 40,
        borderWidth: 1,
        borderColor: Colors.border,
        borderBottomRightRadius: 40
    },
    welcmTxt: {
        fontSize: Typography.sizes['3xl'],
        fontWeight: Typography.weights.bold,
        color: Colors.white
    },
    logoContainer: {
        marginTop: Spacing.sm,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
        gap: Spacing.md
    },
    formContainer: {
        padding: Spacing.lg,
        backgroundColor: Colors.blueBadgeLight,
        borderRadius: 40,
        paddingTop: Spacing.xl,
        ...Shadows,
        borderWidth: 1,
        borderColor: Colors.border
    },
    loginContainer: {
        marginVertical: Spacing.xl,
        alignItems: 'center'
    },
    lgnTxt: {
        fontSize: Typography.sizes['4xl'],
        fontWeight: Typography.weights.bold
    },
    inputContainer: {
        backgroundColor: Colors.border,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.lg
    },
    input: {
        flex: 1,
        fontSize: Typography.sizes.normal,
        color: Colors.text,
        fontWeight: Typography.weights.semibold
    },
    forgotConatiner: {
        marginTop: Spacing.sm,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    forgotTxt: {
        fontSize: Typography.sizes.sm,
        fontWeight: Typography.weights.semibold,
        color: Colors.text,
        lineHeight: 20,
        textDecorationLine: 'underline',
    },
    loginButton: {
        marginTop: Spacing['5xl'],
        borderRadius: BorderRadius.lg,
        backgroundColor: Colors.featureTagText,
        paddingVertical: Spacing.md,
        alignItems: "center",
    },
    lgnbtnTxt: {
        fontSize: Typography.sizes.xl,
        fontWeight: Typography.weights.bold,
        color: Colors.white
    },
    fieldTxt: {
        fontSize: Typography.sizes.normal,
        fontWeight: Typography.weights.semibold,
        color: Colors.text
    }
})