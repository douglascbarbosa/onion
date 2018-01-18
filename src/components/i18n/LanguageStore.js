import Reflux from 'reflux'

import LanguageActions from './LanguageActions'

const data = {
  language: {
    key: "br",
    alt: "Brasil",
    title: "Portugês (BR)"
  },
  languages: [],
  phrases: {}
};

export default  class LanguageStore extends Reflux.Store {
  constructor() {
    super();
    this.listenToMany(LanguageActions);
    LanguageActions.init();
  }

  getData = () => {
    return data
  }

  static translate(phrase) {
    return data.phrases[phrase] || phrase
  }

  onInitCompleted(_data) {
    data.languages = _data;
    this.trigger(data)
  }

  onSelectCompleted(_data) {
    console.log(data);
    data.phrases = _data;
    this.trigger(data)
  }

  static setLanguage(_lang) {
    data.language = _lang
  }
}

