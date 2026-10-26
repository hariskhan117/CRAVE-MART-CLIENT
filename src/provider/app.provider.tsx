import NetworkBanner from '@/components/network.banner'
import { PropsWithChildren } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from "react-native-safe-area-context"
const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <KeyboardProvider>
                    <NetworkBanner />
                    {children}
                </KeyboardProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default AppProvider