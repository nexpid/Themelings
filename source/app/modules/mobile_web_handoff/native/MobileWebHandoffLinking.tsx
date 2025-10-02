// app/modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function createHandoffTokenWithLoadingModal(arg1) {
        var2 = arg1;
        var3 = var2.nonce;
        var _closure2_slot0 = var3;
        var3 = var2.fingerprint;
        var _closure2_slot1 = var3;
        var2 = var2.handoffSource;
        var _closure2_slot2 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.popWithKey;
                var3 = _closure1_slot8;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot4;
                var3 = var4.isAuthenticated;
                var3 = var3.bind(var4)();
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 6;
                var3 = var11[var3];
                var9 = var4.bind(var1)(var3);
                var8 = var9.track;
                var3 = _closure1_slot5;
                var5 = var3.MOBILE_WEB_HANDOFF_FAILURE;
                var4 = {};
                var3 = 'user_not_authenticated_in_app';
                var4['reason'] = var3;
                var10 = _closure1_slot0;
                var3 = 7;
                var3 = var11[var3];
                var12 = var10.bind(var1)(var3);
                var11 = var12.maybeExtractId;
                var10 = _closure2_slot1;
                var11 = var11.bind(var12)(var10);
                var4['fingerprint'] = var11;
                var3 = _closure2_slot2;
                var4['handoff_source'] = var3;
                var3 = {};
                var3['fingerprint'] = var10;
                var3 = var8.bind(var9)(var5, var4, var3);
                var3 = 'null';
                var3 = var7.bind(var1)(var3);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.showSimpleLoadingModal;
                var3 = _closure1_slot8;
                var2 = {};
                var8 = function operation() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.createHandoffToken;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['operation'] = var8;
                var2['onResolved'] = var7;
                var6 = function onRejected() {
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 6;
                    var3 = var8[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot5;
                    var4 = var3.MOBILE_WEB_HANDOFF_FAILURE;
                    var3 = {};
                    var7 = 'handoff_token_fetch_failure';
                    var3['reason'] = var7;
                    var7 = _closure1_slot0;
                    var2 = 7;
                    var2 = var8[var2];
                    var9 = var7.bind(var1)(var2);
                    var8 = var9.maybeExtractId;
                    var7 = _closure2_slot1;
                    var8 = var8.bind(var9)(var7);
                    var3['fingerprint'] = var8;
                    var2 = _closure2_slot2;
                    var3['handoff_source'] = var2;
                    var2 = {};
                    var2['fingerprint'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var3 = _closure3_slot0;
                    var2 = 'null';
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onRejected'] = var6;
                var2 = var4.bind(var5)(var3, var2);
case 4:
                return var1;
            }
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _redirectWithHandoffToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var8 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var4 = undefined;
                    if(!(var8 === var4)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var8 = {};
case 7:
                    var6 = var8.forceExternalBrowser;
                    if(!(var6 === var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = false;
case 9:
                    var3 = null;
                    var7 = Object.create(var3);
                    var2 = 0;
                    var7['forceExternalBrowser'] = var2;
                    var18 = {};
                    var17 = var8;
                    var16 = var7;
                    var9 = copyDataProperties(var18, var17, var16);
                    SaveGenerator(address=64);
case 11:
                    return var4;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var8 = {};
                    var18 = var8;
                    var17 = var9;
                    var5 = copyDataProperties(var18, var17);
                    var5 = var9.nonce;
                    if(!(var3 == var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var7 = var7.bind(var4)(var3);
                    var3 = var7.generateNonce;
                    var5 = var3.bind(var7)();
case 15:
                    var3 = 'nonce';
                    var8[var3] = var5;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 8;
                    var3 = var10[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getLoginHandoffSourceFromRedirectTo;
                    var5 = var3.bind(var5)(var11);
                    var3 = 'handoffSource';
                    var8[var3] = var5;
                    var3 = _closure1_slot9;
                    var3 = var3.bind(var4)(var8);
                    SaveGenerator(address=195);
case 17:
                    return var3;
case 18:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var5 = global;
                    var13 = var5.URL;
                    var12 = var9.skipLoginRedirect;
                    var10 = true;
                    var5 = var11;
                    if(!(var10 !== var12)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var14 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 9;
                    var12 = var15[var12];
                    var15 = var14.bind(var4)(var12);
                    var14 = var15.makeUrl;
                    var12 = _closure1_slot7;
                    var12 = var12.LOGIN_HANDOFF;
                    var5 = var14.bind(var15)(var12);
case 21:
                    var12 = var13.prototype;
                    var12 = Object.create(var12, {constructor: {value: var13}});
                    var19 = var12;
                    var18 = var5;
                    var5 = new var19[var13](var18, var17);
                    var5 = var5 instanceof Object ? var5 : var12;
                    var14 = var5.searchParams;
                    var13 = var14.append;
                    var12 = 'handoff_token';
                    var12 = var13.bind(var14)(var12, var3);
                    var9 = var9.skipLoginRedirect;
                    if(!(var10 !== var9)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var12 = var5.searchParams;
                    var10 = var12.append;
                    var9 = var8.nonce;
                    var8 = 'handoff_key';
                    var8 = var10.bind(var12)(var8, var9);
                    var10 = var5.searchParams;
                    var9 = var10.append;
                    var8 = 'redirect_to';
                    var8 = var9.bind(var10)(var8, var11);
case 23:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 10;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    if(var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var8 = var7.performURLNavigation;
                    var6 = var5.href;
                    var6 = var8.bind(var7)(var6);
                    _fun0002_ip = 27; continue _fun0002;
case 25:
                    var6 = var7.openURLExternally;
                    var5 = var5.href;
                    var5 = var6.bind(var7)(var5);
case 27:
                    return var4;
case 19:
                    return var3;
case 13:
                    return var2;
case 5:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _redirectDeveloperPortalWithHandoffToken() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var3 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var4 = undefined;
                    if(!(var3 === var4)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var3 = {};
case 30:
                    SaveGenerator(address=25);
case 32:
                    return var4;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 34; continue _fun0003 }
case 10:
                    var7 = {};
                    var15 = var7;
                    var14 = var3;
                    var5 = copyDataProperties(var15, var14);
                    var5 = var3.nonce;
                    var3 = null;
                    if(!(var3 == var5)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.generateNonce;
                    var5 = var3.bind(var6)();
case 35:
                    var3 = 'nonce';
                    var7[var3] = var5;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.LoginHandoffSource;
                    var5 = var3.ROLE_SUBSCRIPTION_SETTING;
                    var3 = 'handoffSource';
                    var7[var3] = var5;
                    var3 = _closure1_slot9;
                    var3 = var3.bind(var4)(var7);
                    SaveGenerator(address=159);
case 37:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var5 = global;
                    var8 = var5.URL;
                    var9 = var5.location;
                    var10 = var9.protocol;
                    var12 = _closure1_slot6;
                    var11 = var12.DEVELOPER_PORTAL_LOGIN_HANDOFF;
                    var9 = var7.nonce;
                    var7 = arg1;
                    var9 = var11.bind(var12)(var9, var3, var7);
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var5 = '';
                    var15 = var7.bind(var5)(var10, var9);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var16 = var7;
                    var5 = new var16[var8](var15, var14);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 10;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.performURLNavigation;
                    var5 = var5.href;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 39:
                    return var3;
case 34:
                    return var2;
case 28:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var2.MarketingURLs;
    var _closure1_slot6 = var7;
    var2 = var2.Routes;
    var _closure1_slot7 = var2;
    var2 = 'mweb-handoff';
    var _closure1_slot8 = var2;
    var2 = {};
    var7 = function redirectWithHandoffToken() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['redirectWithHandoffToken'] = var7;
    var4 = function redirectDeveloperPortalWithHandoffToken() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['redirectDeveloperPortalWithHandoffToken'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();