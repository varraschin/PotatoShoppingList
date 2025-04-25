import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/avatar.png')} 
        style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Nerv Shopping List
        </Text>
        <Text style={styles.text}>
          Monte sua lista de compras e não esqueça mais 
          o que precisa comprar ao sair de casa!!!
        </Text>
        <Link style={StyleSheet.button} href={"/home"}>
        <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>

      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  button: {
    position: 'absolute',
    bottom: '12%',
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '55%',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
