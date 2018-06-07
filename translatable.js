import React from 'react'
import I18n from 'react-native-i18n'

const en = {
  EN: 'EN',
  RU: 'RU'
}

const ru = {
  EN: 'АНГ',
  RU: 'РУС'
}

I18n.fallbacks = true

I18n.translations = {
  en,
  ru
}

const translatable = Component => {
  return class extends Component {

    t = (key, opts) => {
      const { locale } = this.props.settingsStore
      return I18n.t(key, { locale });
    }

    render() {
      return <Component t={this.t} {...this.props} />
    }
  }
}

export default translatable
