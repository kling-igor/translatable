import { observable, action, computed } from 'mobx'

class SettingsStore {
  @observable locale = 'ru'
}

const settingsStore = new SettingsStore

export default {
  settingsStore
}