# Calendagro

Calendagro es una app movil para recabar la información y seguimiento de los productos agricolas vendidos y llevar dicho seguimiento con su propia base de datos.

## Stack

- Expo SDK 55
- React Native 0.83.2
- Node 20 (via nvm)
- NativeWind 4.x + TailwindCSS 3.4.x
- Reanimated 4.x

## ⚠️ Importante

NativeWind 4.x solo es compatible con TailwindCSS 3.x, no usar TailwindCSS 4.x

# Configuración del Entorno

## Requisitos previos

- Node 20
- Android Studio con JDK 21 (jbr).

## configuración JAVA_HOME

```
JAVA_HOME = C:\Program Files\Android\Android Studio\jbr
```

## Configuración gradle global

Crear archivo `C:\Users\<usuario>\.gradle\gradle.properties`:

```
org.gradle.java.home=C:\\Program Files\\Android\\Android Studio\\jbr
```

## instalación

```
bash
npm install
npx expo prebuild --clean
```

## Cambiar version de gradle

En `android/gradle/wrapper/gradle-wrapper.properties` con la siguiente distribucion

```
distributionUrl=https\://services.gradle.org/distributions/gradle-8.13-bin.zip
```

## Ejecutar

```bash
npx expo run:android
```
