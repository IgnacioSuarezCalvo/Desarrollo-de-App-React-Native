# Curso de Desarrollo de APP
## React Native de Ignacio Suarez Calvo

### *Redes Sociales*

#### Link de mi Linkein: 
<img src="https://www.pinpng.com/pngs/m/53-533768_linkedin-logo-hd-png-download.png" width=20> [Linkedin Ignacio](https://www.linkedin.com/in/ifsuarez/)

### *Descripcion del proyecto*:


Funcionalidades:

* Aplicaciones en uso

  * Expo CLI 
  * Expo Go
  * Visual Studio Code
  * Node js / NPM
  * react-native-uuid 
  * react native vector icons
  * Fonts
  * React Navigation
  * Tabs Navigation
  * Redux Toolkit
  * Yup
  * Expo image picker
  * Firebase


* Aplicaciones y sus usos
  
  * react-native-uuid
    * Instalacion: npm install react-native-uuid
    * Create import: uuid from 'react-native-uuid';
    * Llamado: uuid.v4(),
  
  * react native vector icons
    * Instalacion: npm i react-native-vector-icons
    * Create import: import { AntDesign, Entypo } from '@expo/vector-icons'
    * Llamado: Entypo (sector del icono) name='circle-with-cross (nombre del icono)' 

  * Fonts
    * Instalacion: npx expo install expo-font
    * Se llama en app.js y donde se lo usamos (crear constante como colors.)

  * React Navitagion
    * Instalacion: 
      * npm install @react-navigation/native  
      * / Despues --> npx expo install react-native-screens react-native-safe-area-context 
      * / Despues --> npm install react-native-screens react-native-safe-area-context
      * / Despues --> npm install @react-navigation/native-stack
      * Create import: import { NavigationContainer } from '@react-navigation/native'; import { createNativeStackNavigator } from '@react-navigation/native-stack';
      * Agregar: const Stack = createNativeStackNavigator();
      * Llamados: <!-- <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>  <Stack.Screen name="Details" component={DetailsScreen} / --> 

  * Tabs Navigation
    * Instalacion: npm install @react-navigation/bottom-tabs
    * Create import: import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    * Agregar: const Tab = createBottomTabNavigator();

    * Redux Toolkit
      * npm install @reduxjs/toolkit react-redux

    * Yup
      * npm i yup
      * es para validad los imput del form

    * Expo image picker
      * npx expo install expo-image-picker

**Como levantar el proyecto (terminal de vsc)**
  * npx create-expo-app my-app (para levantar un proyecto en consola)
  * npx expo / npm start (para arrancar a escribir codigo y visualizarlo)