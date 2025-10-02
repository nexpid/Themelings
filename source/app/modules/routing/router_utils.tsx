// app/modules/routing/router_utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function shouldNavigate() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.ComponentDispatch;
        var2 = var3.hasSubscribers;
        var1 = _closure1_slot7;
        var1 = var1.MODAL_CLOSE;
        var1 = var2.bind(var3)(var1);
        var1 = !var1;
        return var1;
    };
    var _closure1_slot11 = var5;
    var1 = function maybeExternallyNavigate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var4;
            var5 = 'string';
            var3 = typeof var4;
            var3 = var5 !== var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot9;
            var5 = var6.some;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.startsWith;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var3 = !var1;
case 2:
            var1 = !var3;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot8;
            var6 = var7.log;
            var3 = global;
            var5 = var3.HermesInternal;
            var9 = var5.concat;
            var8 = '';
            var5 = ' - route to external path ';
            var5 = var9.bind(var8)(var2, var5, var4);
            var5 = var6.bind(var7)(var5);
            var7 = var3.window;
            var6 = var7.dispatchEvent;
            var9 = var3.Event;
            var5 = var9.prototype;
            var8 = Object.create(var5, {constructor: {value: var9}});
            var12 = 'beforeunload';
            var13 = var8;
            var5 = new var13[var9](var12, var11);
            var5 = var5 instanceof Object ? var5 : var8;
            var5 = var6.bind(var7)(var5);
            var3 = var3.window;
            var3 = var3.location;
            var2 = var3[var2];
            var2 = var2.bind(var3)(var4);
            var1 = true;
case 4:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = function transitionTo(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var9 = arg2;
            var4 = _closure1_slot12;
            var1 = undefined;
            var2 = 'assign';
            var2 = var4.bind(var1)(var7, var2);
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot8;
            var4 = var6.log;
            var5 = global;
            var2 = var5.HermesInternal;
            var8 = var2.concat;
            var2 = 'transitionTo - Transitioning to ';
            var2 = var8.bind(var2)(var7);
            var2 = var4.bind(var6)(var2);
            var6 = null;
            var2 = var6 == var9;
            var4 = undefined;
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var9.source;
case 8:
            if(!(var6 != var9)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = delete var9.source;
case 10:
            var8 = var6 == var9;
            var2 = undefined;
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var9.sourceLocationStack;
case 12:
            if(!(var6 != var9)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var8 = delete var9.sourceLocationStack;
case 14:
            if(!(var6 != var9)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = var5.URL;
            var6 = var5.window;
            var6 = var6.GLOBAL_ENV;
            var10 = var6.WEBAPP_ENDPOINT;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = 'https:';
            var12 = var6.bind(var5)(var10);
            var6 = var8.prototype;
            var6 = Object.create(var6, {constructor: {value: var8}});
            var14 = var6;
            var13 = var7;
            var5 = new var14[var8](var13, var12, var11);
            var10 = var5 instanceof Object ? var5 : var6;
            var8 = _closure1_slot2;
            var6 = var8.push;
            var5 = {};
            var11 = var10.pathname;
            var5['pathname'] = var11;
            var11 = var10.search;
            var5['search'] = var11;
            var10 = var10.hash;
            var5['hash'] = var10;
            var13 = var5;
            var12 = var9;
            var9 = copyDataProperties(var13, var12);
            var5 = var6.bind(var8)(var5);
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var6 = _closure1_slot2;
            var5 = var6.push;
            var5 = var5.bind(var6)(var7);
case 18:
            var _closure1_slot3 = var4;
            var _closure1_slot4 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var9 = var6.Routes;
    var _closure1_slot5 = var9;
    var9 = var6.PageAnalyticsLocations;
    var _closure1_slot6 = var9;
    var9 = var6.ComponentActions;
    var _closure1_slot7 = var9;
    var6 = var6.RelativeMarketingURLs;
    var9 = 1;
    var10 = var8[var9];
    var9 = metroImportDefault;
    var11 = var9.bind(var1)(var10);
    var9 = var11.prototype;
    var10 = Object.create(var9, {constructor: {value: var11}});
    var14 = 'Routing/Utils';
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot8 = var9;
    var9 = var6.DEVELOPER_PORTAL;
    var6 = new Array(1);
    var6[0] = var9;
    var _closure1_slot9 = var6;
    var6 = 2;
    var6 = var8[var6];
    var9 = var7.bind(var1)(var6);
    var6 = var9.createMemoryHistory;
    var10 = var6.bind(var9)();
    var _closure1_slot2 = var10;
    var9 = var10.listen;
    var6 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = 'REPLACE';
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0003_ip = 3; continue _fun0003 }
case 19:
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 3:
            var1 = undefined;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/routing/router_utils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['shouldNavigate'] = var5;
    var3['transitionTo'] = var4;
    var4 = function transitionToGuild(arg1, arg2, arg3, arg4) {
        var6 = arg1;
        var5 = arg2;
        var3 = arg3;
        var7 = _closure1_slot8;
        var4 = var7.log;
        var2 = global;
        var10 = var2.JSON;
        var9 = var10.stringify;
        var8 = {};
        var8['guildId'] = var6;
        var8['channelId'] = var5;
        var8['messageId'] = var3;
        var9 = var9.bind(var10)(var8);
        var2 = var2.HermesInternal;
        var8 = var2.concat;
        var2 = 'transitionToGuild - Transitioning to ';
        var2 = var8.bind(var2)(var9);
        var2 = var4.bind(var7)(var2);
        var4 = _closure1_slot13;
        var2 = _closure1_slot5;
        var1 = var2.CHANNEL;
        var3 = var1.bind(var2)(var6, var5, var3);
        var1 = undefined;
        var2 = arg4;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['transitionToGuild'] = var4;
    var4 = function currentRouteHasBackNavigation() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 5; continue _fun0004 }
case 20:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.ChannelBackNavigationSources;
            var3 = var4.has;
            var2 = _closure1_slot3;
            var1 = var3.bind(var4)(var2);
case 5:
            return var1;
        }
    };
    var3['currentRouteHasBackNavigation'] = var4;
    var4 = function replaceWith(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot12;
            var1 = undefined;
            var2 = 'replace';
            var2 = var4.bind(var1)(var6, var2);
            if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var5 = _closure1_slot8;
            var4 = var5.log;
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var2 = 'Replacing route with ';
            var2 = var7.bind(var2)(var6);
            var2 = var4.bind(var5)(var2);
            var4 = 'string';
            var2 = typeof var6;
            if(!(var4 !== var2)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            var4 = _closure1_slot2;
            var2 = var4.replace;
            var2 = var2.bind(var4)(var6);
            _fun0005_ip = 25; continue _fun0005;
case 23:
            var5 = _closure1_slot2;
            var4 = var5.replace;
            var2 = arg2;
            var2 = var4.bind(var5)(var6, var2);
case 25:
            var2 = arg3;
            _closure1_slot3 = var2;
case 21:
            return var1;
        }
    };
    var3['replaceWith'] = var4;
    var4 = function getHistory() {
        var1 = _closure1_slot2;
        return var1;
    };
    var3['getHistory'] = var4;
    var4 = function getLastRouteChangeSource() {
        var1 = _closure1_slot3;
        return var1;
    };
    var3['getLastRouteChangeSource'] = var4;
    var4 = function getLastRouteChangeSourceLocationStack() {
        var1 = _closure1_slot4;
        return var1;
    };
    var3['getLastRouteChangeSourceLocationStack'] = var4;
    var4 = function isValidFingerprintRoute(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = null;
            var1 = arg1;
            if(!(var2 == var1)) { _fun0006_ip = 7; continue _fun0006 }
case 26:
            var1 = _closure1_slot2;
            var1 = var1.location;
            var1 = var1.pathname;
            var1 = var2 != var1;
case 7:
            var1 = true;
            return var1;
        }
    };
    var3['isValidFingerprintRoute'] = var4;
    var4 = function getFingerprintLocation(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0007_ip = 27; continue _fun0007 }
case 26:
            var3 = _closure1_slot2;
            var3 = var3.location;
            var3 = var3.pathname;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0007_ip = 28; continue _fun0007 }
case 29:
            var2 = var3;
case 28:
            var1 = var2;
case 27:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.LOGIN;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REGISTER;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var4 = var1.startsWith;
            var5 = _closure1_slot5;
            var3 = var5.INVITE;
            var6 = '';
            var3 = var3.bind(var5)(var6);
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.VERIFY;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.DISABLE_EMAIL_NOTIFICATIONS;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REJECT_IP;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REJECT_MFA;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.AUTHORIZE_IP;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.AUTHORIZE_PAYMENT;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.RESET;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REPORT;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REPORT_SECOND_LOOK;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var4 = var1.startsWith;
            var5 = _closure1_slot5;
            var3 = var5.ACCOUNT_REVERT;
            var3 = var3.bind(var5)(var6);
            var3 = var4.bind(var1)(var3);
            if(!var3) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var3 = _closure1_slot6;
            var1 = var3.ACCOUNT_REVERT;
case 56:
            _fun0007_ip = 58; continue _fun0007;
case 54:
            var3 = _closure1_slot6;
            var1 = var3.REPORT_SECOND_LOOK;
case 58:
            _fun0007_ip = 59; continue _fun0007;
case 52:
            var3 = _closure1_slot6;
            var1 = var3.REPORT;
case 59:
            _fun0007_ip = 60; continue _fun0007;
case 50:
            var3 = _closure1_slot6;
            var1 = var3.RESET;
case 60:
            _fun0007_ip = 61; continue _fun0007;
case 48:
            var3 = _closure1_slot6;
            var1 = var3.AUTHORIZE_PAYMENT;
case 61:
            _fun0007_ip = 62; continue _fun0007;
case 46:
            var3 = _closure1_slot6;
            var1 = var3.AUTHORIZE_IP;
case 62:
            _fun0007_ip = 63; continue _fun0007;
case 44:
            var3 = _closure1_slot6;
            var1 = var3.REJECT_MFA;
case 63:
            _fun0007_ip = 64; continue _fun0007;
case 42:
            var3 = _closure1_slot6;
            var1 = var3.REJECT_IP;
case 64:
            _fun0007_ip = 65; continue _fun0007;
case 40:
            var3 = _closure1_slot6;
            var1 = var3.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
case 65:
            _fun0007_ip = 66; continue _fun0007;
case 38:
            var3 = _closure1_slot6;
            var1 = var3.DISABLE_EMAIL_NOTIFICATIONS;
case 66:
            _fun0007_ip = 67; continue _fun0007;
case 36:
            var3 = _closure1_slot6;
            var1 = var3.VERIFY;
case 67:
            _fun0007_ip = 68; continue _fun0007;
case 34:
            var3 = _closure1_slot6;
            var1 = var3.INVITE;
case 68:
            _fun0007_ip = 69; continue _fun0007;
case 32:
            var3 = _closure1_slot6;
            var1 = var3.REGISTER;
case 69:
            _fun0007_ip = 70; continue _fun0007;
case 30:
            var2 = _closure1_slot6;
            var1 = var2.LOGIN;
case 70:
            return var1;
        }
    };
    var3['getFingerprintLocation'] = var4;
    var4 = function hasNavigated() {
        var1 = false;
        return var1;
    };
    var3['hasNavigated'] = var4;
    var4 = function back() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0008_ip = 71; continue _fun0008 }
case 20:
            var3 = null;
            _closure1_slot3 = var3;
            var3 = _closure1_slot2;
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
case 71:
            return var1;
        }
    };
    var3['back'] = var4;
    var2 = function forward() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0009_ip = 71; continue _fun0009 }
case 20:
            var3 = null;
            _closure1_slot3 = var3;
            var3 = _closure1_slot2;
            var2 = var3.goForward;
            var2 = var2.bind(var3)();
case 71:
            return var1;
        }
    };
    var3['forward'] = var2;
    return var1;
})();