/**
 * Sample React Native App With Translation
 * https://github.com/kahnu044/react-native-app-with-translation
 *
 * @format
 */
import 'intl';
import 'intl-pluralrules';
import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";

const App = () => {
  const {t , i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}></View>
      <Text style={styles.textView}>{t('welcome')}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    fontSize: 24,
    color: '#748ef6',
    fontWeight: 'bold'
  },
});

export default App;
