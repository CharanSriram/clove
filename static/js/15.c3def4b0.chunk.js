(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15],{242:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_federated_sign_in",(function(){return r}));var i=a(76),n=a(37),d=a(27),s=a(22),o=a(46),f=new n.a("amplify-federated-sign-in"),r=function(){function t(t){Object(i.g)(this,t),this.authState=d.a.SignIn,this.federated={}}return t.prototype.componentWillLoad=function(){if(!o.a||"function"!==typeof o.a.configure)throw new Error(s.d);var t=o.a.configure({}).oauth,e=void 0===t?{}:t;e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))},t.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i.f)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.f)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.f)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},t}()}}]);
//# sourceMappingURL=15.c3def4b0.chunk.js.map