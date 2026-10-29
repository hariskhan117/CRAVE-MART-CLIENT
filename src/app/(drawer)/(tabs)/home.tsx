import SafeArea from '@/components/safe.area';
import { BorderRadius, Colors, Shadows, Spacing, Typography } from '@/constant/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/build/react-navigation';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Carousel } from 'react-native-reanimated-carousel';

const Category_Data = [
    {
        id: 1,
        name: "Fashion",
        image: require('../../../assets/fashion.jpg')
    },
    {
        id: 2,
        name: "Beauty",
        image: require('../../../assets/beauty.jpg')

    },
    {
        id: 3,
        name: "Men's",
        image: require('../../../assets/men.jpg')

    },
    {
        id: 4,
        name: "Women's",
        image: require('../../../assets/women.jpg')

    },
    {
        id: 5,
        name: "Kid's",
        image: require('../../../assets/kids.jpg')

    },
]
const Featured_Data = [
    {
        id: 1,
        name: "Shirts",
        price: 1000,
        image: require('../../../assets/fashion.jpg')
    },
    {
        id: 2,
        name: "Makeup Kit",
        price: 3000,
        image: require('../../../assets/beauty.jpg')

    },
    {
        id: 3,
        name: "Henley",
        price: 2000,
        image: require('../../../assets/men.jpg')

    },
]

const Banner = [
    {
        id: 1,
        image: require('../../../assets/banner1.jpg')
    },
    {
        id: 2,
        image: require('../../../assets/banner2.jpg')
    },
    {
        id: 3,
        image: require('../../../assets/banner3.jpg')
    }
]
const HomeScreen = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const navigation = useNavigation()
    return (
        <SafeArea bgColor={Colors.blueBadgeLight}>

            <View style={styles.container}>

                <View style={styles.header}>
                    <View >
                        <Text style={[styles.viewTxt, { fontSize: Typography.sizes.lg }]}>Hello,</Text>
                        <Text style={styles.welcomeTxt}>Welcome</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Ionicons name='cart-outline' size={24} />
                        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>

                            <Ionicons name='menu' size={24} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.searchBoxContainer}>
                    <View style={styles.searchBox}>
                        <Ionicons name='search' size={24} />
                        <TextInput placeholder='Search'
                            style={styles.inputStyle} placeholderTextColor={Colors.textSecondary}
                        />
                    </View>
                    <View>
                        <Ionicons name='filter-circle' size={45} />
                    </View>
                </View>


                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={styles.header}>
                        <View>

                            <Text style={styles.welcomeTxt}>
                                Category
                            </Text>
                        </View>
                        <View style={[styles.iconContainer, { gap: 3 }]}>

                            <Text style={styles.viewTxt}>
                                View All
                            </Text>
                            <Ionicons name='chevron-forward' size={17} />
                        </View>
                    </View>
                    <View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.categoryContentContainer}
                            style={styles.categoryList}>
                            {Category_Data.map((item, idx) => (
                                <View key={idx} style={styles.categoryItem}>
                                    <Image style={styles.img} source={item.image} />
                                    <Text>
                                        {item.name}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.caroselContainer}>
                        <Carousel
                            data={Banner}
                            autoplay
                            style={{
                                width: '100%',
                                height: 150,
                            }}
                            loop
                            autoplayInterval={3000}
                            renderItem={({ item }) => (

                                <View
                                    style={{
                                        borderRadius: 16,
                                        overflow: 'hidden',
                                        flex: 1
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: "cover"
                                        }}
                                    />
                                </View>
                            )}
                            onProgressChange={(progress) => {
                                setActiveIndex(Math.round(progress) % Banner.length)
                            }}

                        />
                        <View style={styles.dots}>
                            {Banner.map((_, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.dot,
                                        index === activeIndex && styles.activeDot,
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.welcomeTxt}>
                                Featured
                            </Text>
                        </View>
                        <View style={[styles.iconContainer, { gap: 3 }]}>
                            <Text style={styles.viewTxt}>
                                View All
                            </Text>
                            <Ionicons name='chevron-forward' size={17} />
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal
                            style={styles.categoryList}
                            contentContainerStyle={styles.categoryContentContainer}
                            showsHorizontalScrollIndicator={false}>

                            {Featured_Data.map((item, idx) => (
                                <View key={item.id} style={styles.featureProductContainer}>
                                    <Image source={item.image} style={styles.featureImg} />
                                    <View style={styles.favICon}>

                                        <Ionicons name='heart-outline' size={17} color={Colors.success} />
                                    </View>

                                    <View style={styles.featureTxtContainer}>
                                        <Text style={styles.featureTxt}>
                                            {item.name}
                                        </Text>
                                        <Text style={styles.featureTxt}>
                                            {item.price}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </SafeArea >
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blueBadgeLight,
        paddingHorizontal: Spacing.xl,
        paddingBottom: Spacing.xl
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.lg
    },
    welcomeTxt: {
        fontSize: Typography.sizes['2xl'],
        fontWeight: Typography.weights.bold,
        color: Colors.text

    },
    viewTxt: {
        fontSize: Typography.sizes.md,
        fontWeight: Typography.weights.semibold,
        color: Colors.textTertiary
    },
    iconContainer: {
        flexDirection: "row",
        gap: Spacing.md
    },
    searchBoxContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: Spacing.md,
        marginBottom: Spacing.lg,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.card,
        paddingVertical: Spacing.xs,
        paddingHorizontal: Spacing.md,
        borderRadius: BorderRadius.full
    },
    inputStyle: {
        // backgroundColor: "red",
        marginRight: 20,
        marginLeft: 5,
        fontSize: Typography.sizes.normal,
        color: Colors.text,
        fontWeight: Typography.weights.semibold
    },
    categoryList: {
        marginBottom: Spacing.lg
    },
    categoryContentContainer: {
        gap: Spacing.md,
    },
    categoryItem: {
        alignItems: "center",
        gap: Spacing.xs
    },
    img: {
        height: 55,
        width: 52,
        resizeMode: "cover",
        borderRadius: BorderRadius.full,
        borderWidth: 4,
        borderColor: Colors.card
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        marginTop: Spacing.md,
    },

    dot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },

    activeDot: {
        width: 18,
        backgroundColor: Colors.primary,
    },
    caroselContainer: {
        marginBottom: Spacing.lg
    },
    featureProductContainer: {
        position: "relative",
        // alignItems: "flex-start",
        backgroundColor: Colors.card,
        ...Shadows.lg,
        borderRadius: BorderRadius.lg,

    },
    featureImg: {
        width: 110,
        height: 120,
        resizeMode: 'cover',
        borderRadius: BorderRadius.lg
    },
    favICon: {
        position: 'absolute',
        top: 5,
        right: 10,
    },
    featureTxtContainer: {
        marginTop: Spacing.sm,
        marginLeft: Spacing.md,
        gap: Spacing.xs,
        paddingBottom: Spacing.sm,
        // marginHorizontal: Spacing.sm

    },
    featureTxt: {
        fontSize: Typography.sizes.md,
        fontWeight: Typography.weights.medium,
        color: Colors.text
    },
})