import { useNavigation } from 'expo-router';
import { Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from 'expo-router/build/react-navigation';

export default function DrawerToggle() {
    const navigation = useNavigation();
    const haris = 0

    return (
        <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginRight: 16 }}
        >
            <Ionicons name='menu' size={24} />
        </Pressable>
    );
}