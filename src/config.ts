import { Utils } from '@hocgin/ui';

export default class Config {
  /**
   * 默认配置
   * @type {{}}
   */
  static defaultConfig = {};

  /**
   * 自定义配置
   * @returns {{}}
   */
  static getCustomConfig() {
    return {};
  }

  /**
   * 当前配置
   * @returns {Config.defaultConfig}
   */
  static getConfigs() {
    return {
      ...Config.defaultConfig,
      ...Config.getCustomConfig(),
    };
  }

  static isDev() {
    return process.env.NODE_ENV === 'development';
  }

  static getSsoServerUrl() {
    // @ts-ignore
    return fullHostname(ssoServerUrl);
  }

  static getBaseUrl() {
    // @ts-ignore
    return fullHostname(baseUrl);
  }
}

let fullHostname = (shouldUrl: string) => {
  if (shouldUrl.startsWith('http')) {
    return shouldUrl;
  }
  return `${Utils?.Dom.getWindow()?.location?.protocol}//${
    Utils?.Dom.getWindow()?.location?.host
  }${shouldUrl}`;
};
