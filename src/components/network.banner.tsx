import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function NetworkBanner() {
    const [isConnected, setIsConnected] = useState<boolean | null>(true);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    if (isConnected !== false) return null;

    return (
        <View style={[styles.banner, { paddingTop: insets.top || 10 }]}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#EF4444',
        paddingBottom: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
});