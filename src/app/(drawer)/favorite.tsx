import { Text, View } from 'react-native'

export default function FavoriteScreen() {
    return (
        <View>
            <Text>Favorite</Text>
        </View>
    )
}


// import { isAvailable, prepareBuiltInModel, sendMessage } from 'expo-ai-kit';
// import { useState } from 'react';
// import { Button, ScrollView, Text } from 'react-native';

// export default function App() {
//     const [answer, setAnswer] = useState('Tap Ask to begin.');
//     const [busy, setBusy] = useState(false);

//     async function ask() {
//         setBusy(true);
//         try {
//             if (!(await isAvailable())) {
//                 setAnswer('The built-in text model is unavailable on this device.');
//                 return;
//             }
//             setAnswer('Preparing the model…');
//             await prepareBuiltInModel();
//             setAnswer('Thinking…');
//             const { text } = await sendMessage([
//                 { role: 'user', content: 'Explain gravity in one sentence.' },
//             ]);
//             setAnswer(text);
//         } catch (error) {
//             setAnswer(error instanceof Error ? error.message : String(error));
//         } finally {
//             setBusy(false);
//         }
//     }

//     return (
//         <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 80, gap: 16 }}>
//             <Button title={busy ? 'Working…' : 'Ask'} onPress={ask} disabled={busy} />
//             <Text selectable>{answer}</Text>
//         </ScrollView>
//     );
// }