import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Provider, observer, inject } from 'mobx-react'

import allStores from './stores'

import translatable from './translatable'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

@inject(stores => ({ ...stores }))
@translatable()
@observer
class App extends Component {

  enSelected = () => {
    this.props.settingsStore.locale = 'en'
  }

  ruSelected = () => {
    this.props.settingsStore.locale = 'ru'
  }

  render() {
    const { t } = this.props
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.enSelected} disabled={this.props.settingsStore.locale === 'en'}>
          <Text>{t('EN')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.ruSelected} disabled={this.props.settingsStore.locale === 'ru'}>
          <Text>{t('RU')}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default () => (
  <Provider {...allStores}>
    <App />
  </Provider>
)
