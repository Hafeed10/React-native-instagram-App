import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Home = () => {
    const logos = [
        {
            id: 1,
            name: 'Incerbile',
            image: require('../../../src/asetss/image/azrin.jpeg'),
            desc: '15 new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 2,
            name: 'Hafeex',
            image: require('../../../src/asetss/image/aman.jpeg'),
            desc: '4 new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 3,
            name: '_Ammen',
            image: require('../../../src/asetss/image/azrin.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 4,
            name: 'Luboi',
            image: require('../../../src/asetss/image/devid.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 5,
            name: 'Thasniya',
            image: require('../../../src/asetss/image/finy.jpeg'),
            desc: '3h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 5,
            name: 'Sobira',
            image: require('../../../src/asetss/image/hiba.jpeg'),
            desc: '2 new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 6,
            name: 'Thor_',
            image: require('../../../src/asetss/image/isaq.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 8,
            name: 'Markaz_',
            image: require('../../../src/asetss/image/jerin.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 7,
            name: 'Steype_',
            image: require('../../../src/asetss/image/shiya.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 10,
            name: 'Muhammed_',
            image: require('../../../src/asetss/image/silent.png'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        {
            id: 7,
            name: 'Steype_',
            image: require('../../../src/asetss/image/shiya.jpeg'),
            desc: '1h new messages',
            icon: require('../../../src/asetss/image/camera.png'),
            time: '5m',
            imger: require('../../../src/asetss/image/silent.png'),
        },
        // Add more items as needed
    ];

    // Function to chunk array into smaller arrays
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    
    const rows = chunkArray(logos, 10);

    return (
        <ScrollView horizontal={true} contentContainerStyle={styles.container}>
            {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                    {row.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <Image style={styles.image} source={item.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                            <Image source={item.imger} style={styles.imger} />
                            <Image source={item.icon} style={styles.icon} />
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'black',
        marginTop: 1,
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around', 
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 1,
        margin: 5,
        marginLeft: 15,
    },
    name: {
        fontSize: 16,
        padding: 7,
        width: 80,
        fontWeight: 'bold',
        color: '#fff',
    },
    desc: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
    time: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
    },
    imger: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
});
