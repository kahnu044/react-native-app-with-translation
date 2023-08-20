/**
 * Sample React Native App With Translation
 * https://github.com/kahnu044/react-native-app-with-translation
 *
 * @format
 */
import 'intl';
import 'intl-pluralrules';
import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

import {I18nextProvider} from 'react-i18next';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();

  const changeLanguage = () => {
    const currentLanguage = i18n.language;

    if (currentLanguage === 'en') {
      i18n.changeLanguage('sp');
    } else {
      i18n.changeLanguage('en');
    }
  };

  const langBtnText =
    i18n.language === 'en' ? 'Change To Spanish' : 'Change To English';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.textView}>{t('welcome')}</Text>
        <Button title={langBtnText} onPress={changeLanguage} />
      </View>
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
