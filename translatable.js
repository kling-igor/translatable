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

const translatable = (store = 'settingsStore', localeFieldname = 'locale') => Component => {
  return class extends Component {

    constructor(props) {
      super(props)

      if (!props[store]) throw new Error(`store ${store} not passed`)

      if (!props[store][localeFieldname]) throw new Error(`locale filed '${localeFieldname}' not found in passed store '${store}'`)
    }

    t = (key, opts) => {
      const locale = this.props[store][localeFieldname]
      return I18n.t(key, { locale });
    }

    render() {
      return <Component t={this.t} {...this.props} />
    }
  }
}




export default translatable
