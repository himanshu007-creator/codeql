/**
 * Provides default sources for reasoning about reflected
 * cross-site scripting vulnerabilities.
 */

import javascript

module ReflectedXss {
  import Xss::ReflectedXss

  /** A third-party controllable request input, considered as a flow source for reflected XSS. */
  class ThirdPartyRequestInputAccessAsSource extends Source {
    ThirdPartyRequestInputAccessAsSource() {
      this.(https::RequestInputAccess).isThirdPartyControllable()
      or
      this.(https::RequestHeaderAccess).getAHeaderName() = "referer"
    }
  }
}
