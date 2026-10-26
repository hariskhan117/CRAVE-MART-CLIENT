import DrawerToggle from '@/components/drawer.toggle';
import { Colors, Fonts, Typography } from '@/constant/theme';
import { useNavigation } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    const navigation = useNavigation()
    return (
        <Drawer screenOptions={{
            headerShown: false,
            drawerType: 'front',
            drawerStyle: {
                width: '70%', backgroundColor: Colors.black,
            },
            drawerActiveTintColor: Colors.white,
            drawerInactiveTintColor: Colors.white,
            drawerLabelStyle: { fontSize: Typography.sizes.normal, fontWeight: Typography.weights.semibold, fontFamily: Fonts.serif },
            headerLeft: () => null,
            headerRight: () => (
                <DrawerToggle />
            )

        }}>
            <Drawer.Screen name='(tabs)' options={{ drawerLabel: 'Home' }} />
            <Drawer.Screen name='cart' options={{ drawerLabel: 'Cart', headerShown: true }} />
            <Drawer.Screen name='favorite' options={{ drawerLabel: 'Favorite', headerShown: true }} />
            <Drawer.Screen name='profile' />

        </Drawer>
    )
}
