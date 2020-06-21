(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{234:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_amazon_button",(function(){return g})),n.d(e,"amplify_auth0_button",(function(){return b})),n.d(e,"amplify_facebook_button",(function(){return w})),n.d(e,"amplify_google_button",(function(){return y})),n.d(e,"amplify_oauth_button",(function(){return v}));var i=n(76),o=n(37),a=n(8),r=n(27),u=n(7),c=n(22),s=n(46),h=n(89),f=function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(e){a(e)}}function u(t){try{c(i.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,u)}c((i=i.apply(t,e||[])).next())}))},l=function(t,e){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(u){a=[6,u],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},d=new o.a("amplify-amazon-button"),g=function(){function t(t){var e=this;Object(i.g)(this,t),this.handleAuthStateChange=h.d,this.federatedSignIn=function(t){var n=t.access_token,i=t.expires_in;if(n){if(!s.a||"function"!==typeof s.a.federatedSignIn||"function"!==typeof s.a.currentAuthenticatedUser)throw new Error(c.d);var o=1e3*i+(new Date).getTime();window.amazon.Login.retrieveProfile((function(t){return f(e,void 0,void 0,(function(){var e,i;return l(this,(function(a){switch(a.label){case 0:return t.success?(e={name:t.profile.Name,email:t.profile.PrimaryEmail},[4,s.a.federatedSignIn("amazon",{token:n,expires_at:o},e)]):[2,d.debug("Get user Info failed")];case 1:return a.sent(),[4,s.a.currentAuthenticatedUser()];case 2:return i=a.sent(),this.handleAuthStateChange(r.a.SignedIn,i),[2]}}))}))}))}}}return t.prototype.signInWithAmazon=function(t){var e=this;t.preventDefault(),window.amazon.Login.setClientId(this.clientId),window.amazon.Login.authorize({scope:"profile"},(function(t){if(t.error)return d.debug("Failed to login with amazon: "+t.error);try{window.localStorage.setItem(c.q,JSON.stringify({provider:"amazon"}))}catch(n){d.debug("Failed to cache auth source into localStorage",n)}e.federatedSignIn(t)}))},t.prototype.render=function(){var t=this;return Object(i.f)("amplify-sign-in-button",{onClick:function(e){return t.signInWithAmazon(e)},provider:"amazon"},Object(i.f)("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),a.a.get(u.a.SIGN_IN_WITH_AMAZON))},t}(),p=new o.a("amplify-auth0-button"),b=function(){function t(t){var e=this;Object(i.g)(this,t),this.handleAuthStateChange=h.d,this.handleLoad=function(){var t=s.a.configure({}).oauth,n=void 0===t?{}:t,i=e.config,o=void 0===i?n.auth0:i;o?(p.debug("auth0 configuration",o),e._auth0||(e._auth0=new window.auth0.WebAuth(o)),e._auth0.parseHash((function(t,n){if(t)p.debug("Failed to parse the url for Auth0",t);else if(n){var i={provider:"auth0",opts:{returnTo:o.returnTo,clientID:o.clientID,federated:o.federated}};try{localStorage.setItem(c.q,JSON.stringify(i))}catch(a){p.debug("Failed to cache auth source into localStorage",a)}e._auth0.client.userInfo(n.accessToken,(function(t,i){return f(e,void 0,void 0,(function(){var e,a,u;return l(this,(function(c){switch(c.label){case 0:return e=void 0,a=void 0,t?p.debug("Failed to get the user info",t):(e=i.name,a=i.email),[4,s.a.federatedSignIn(o.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:e,email:a})];case 1:return c.sent(),[4,s.a.currentAuthenticatedUser()];case 2:return u=c.sent(),this.handleAuthStateChange(r.a.SignedIn,u),[2]}}))}))}))}else p.debug("Auth0 found no authResult in hash")}))):p.debug("Auth0 is not configured")}}return t.prototype.signInWithAuth0=function(t){if(t.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},t.prototype.render=function(){var t=this;return Object(i.f)("amplify-sign-in-button",{onClick:function(e){return t.signInWithAuth0(e)},provider:"auth0"},Object(i.f)("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),a.a.get(u.a.SIGN_IN_WITH_AUTH0))},t}(),m=new o.a("amplify-facebook-button"),w=function(){function t(t){var e=this;Object(i.g)(this,t),this.handleAuthStateChange=h.d,this.federatedSignIn=function(t){var n=t.accessToken,i=t.expiresIn;if(n){if(!s.a||"function"!==typeof s.a.federatedSignIn||"function"!==typeof s.a.currentAuthenticatedUser)throw new Error(c.d);var o=1e3*i+(new Date).getTime();window.FB.api("/me",{fields:"name,email"},(function(t){return f(e,void 0,void 0,(function(){var e,i;return l(this,(function(a){switch(a.label){case 0:return e={name:t.name,email:t.email},[4,s.a.federatedSignIn("facebook",{token:n,expires_at:o},e)];case 1:return a.sent(),[4,s.a.currentAuthenticatedUser()];case 2:return i=a.sent(),this.handleAuthStateChange(r.a.SignedIn,i),[2]}}))}))}))}},this.getLoginStatus=function(){window.FB.getLoginStatus((function(t){try{window.localStorage.setItem(c.q,JSON.stringify({provider:"facebook"}))}catch(n){m.debug("Failed to cache auth source into localStorage",n)}if("connected"===t.status)return e.federatedSignIn(t.authResponse);e.login()}))},this.login=function(){window.FB.login((function(t){t&&t.authResponse&&e.federatedSignIn(t.authResponse)}),{scope:"public_profile,email"})}}return t.prototype.signInWithFacebook=function(t){t.preventDefault(),window.FB.init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},t.prototype.render=function(){var t=this;return Object(i.f)("amplify-sign-in-button",{onClick:function(e){return t.signInWithFacebook(e)},provider:"facebook"},Object(i.f)("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),a.a.get(u.a.SIGN_IN_WITH_FACEBOOK))},t}(),I=new o.a("amplify-google-button"),y=function(){function t(t){var e=this;Object(i.g)(this,t),this.handleAuthStateChange=h.d,this.handleError=function(t){console.error(t)},this.handleLoad=function(){window.gapi.load("auth2")},this.handleUser=function(t){return f(e,void 0,void 0,(function(){var e,n,i,o,a;return l(this,(function(u){switch(u.label){case 0:if(!s.a||"function"!==typeof s.a.federatedSignIn||"function"!==typeof s.a.currentAuthenticatedUser)throw new Error(c.d);try{window.localStorage.setItem(c.q,JSON.stringify({provider:"google"}))}catch(h){I.debug("Failed to cache auth source into localStorage",h)}return e=t.getAuthResponse(),n=e.id_token,i=e.expires_at,o=t.getBasicProfile(),[4,s.a.federatedSignIn("google",{token:n,expires_at:i},{email:o.getEmail(),name:o.getName(),picture:o.getImageUrl()})];case 1:return u.sent(),[4,s.a.currentAuthenticatedUser()];case 2:a=u.sent();try{this.handleAuthStateChange(r.a.SignedIn,a)}catch(f){this.handleError(f)}return[2]}}))}))}}return t.prototype.getAuthInstance=function(){return window.gapi&&window.gapi.auth2?window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},t.prototype.signInWithGoogle=function(t){t.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},t.prototype.render=function(){var t=this;return Object(i.f)("amplify-sign-in-button",{onClick:function(e){return t.signInWithGoogle(e)},provider:"google"},Object(i.f)("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),a.a.get(u.a.SIGN_IN_WITH_GOOGLE))},t}(),v=function(){function t(t){Object(i.g)(this,t),this.config={}}return t.prototype.signInWithOAuth=function(t){t.preventDefault(),s.a.federatedSignIn()},t.prototype.render=function(){var t=this;return Object(i.f)("amplify-sign-in-button",{onClick:function(e){return t.signInWithOAuth(e)},provider:"oauth"},this.config.label||a.a.get(u.a.SIGN_IN_WITH_AWS))},t}()}}]);
//# sourceMappingURL=7.270dcbc3.chunk.js.map