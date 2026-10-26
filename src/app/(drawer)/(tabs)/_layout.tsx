import { BorderRadius, Colors, Spacing } from '@/constant/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs, useNavigation } from 'expo-router';
import { Pressable } from 'react-native';
export default function TabLayout() {
    const navigation = useNavigation()
    return (
        <Tabs screenOptions={{

            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.tabInactive,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: Colors.black,
                paddingHorizontal: Spacing.xl,

            },

        }}>
            <Tabs.Screen name='home' options={{

                title: "Home",
                // headerShown: true,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? 'home' : 'home-outline'}
                        size={26}
                        color={color}
                    />
                )
            }} />
            <Tabs.Screen name='product' options={{
                // title: "Cart",
                tabBarIcon: ({ color, focused }) => (
                    <Pressable
                        onPress={() => router.push("/product")}
                        style={{
                            height: 60,
                            width: 60,
                            marginTop: -40,
                            backgroundColor: Colors.primaryDark,
                            borderRadius: BorderRadius.full,
                            alignItems: "center",
                            justifyContent: 'center',
                            borderWidth: 4,
                            borderColor: Colors.white,

                        }}>

                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={26}
                            color={color}
                        />
                    </Pressable>
                ),
            }} />
            <Tabs.Screen name='setting' options={{
                title: "Setting",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons
                        name={focused ? 'settings' : 'settings-outline'}
                        size={26}
                        color={color}
                    />
                )
            }} />
        </Tabs >
    )
}

