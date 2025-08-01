// app/modules/routing/router_utils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function shouldNavigate() {
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
    var _closure1_slot11 = var1;
    var1 = function maybeExternallyNavigate(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var4;
            var5 = 'string';
            var3 = typeof var4;
            var3 = var5 !== var3;
            if(var3) { _fun0001_ip = 52; continue _fun0001 }
 26:
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
 52:
            var1 = !var3;
            if(var3) { _fun0001_ip = 177; continue _fun0001 }
 58:
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
 177:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = function transitionTo(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var4 = _closure1_slot12;
            var1 = undefined;
            var2 = 'assign';
            var2 = var4.bind(var1)(var7, var2);
            if(var2) { _fun0002_ip = 274; continue _fun0002 }
 31:
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
            if(var2) { _fun0002_ip = 86; continue _fun0002 }
 81:
            var4 = var9.source;
 86:
            if(!(var6 != var9)) { _fun0002_ip = 95; continue _fun0002 }
 90:
            var2 = delete var9.source;
 95:
            var8 = var6 == var9;
            var2 = undefined;
            if(var8) { _fun0002_ip = 110; continue _fun0002 }
 104:
            var2 = var9.sourceLocationStack;
 110:
            if(!(var6 != var9)) { _fun0002_ip = 119; continue _fun0002 }
 114:
            var8 = delete var9.sourceLocationStack;
 119:
            if(!(var6 != var9)) { _fun0002_ip = 252; continue _fun0002 }
 126:
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
            _fun0002_ip = 266; continue _fun0002;
 252:
            var6 = _closure1_slot2;
            var5 = var6.push;
            var5 = var5.bind(var6)(var7);
 266:
            var _closure1_slot3 = var4;
            var _closure1_slot4 = var2;
 274:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.Routes;
    var _closure1_slot5 = var8;
    var8 = var5.PageAnalyticsLocations;
    var _closure1_slot6 = var8;
    var8 = var5.ComponentActions;
    var _closure1_slot7 = var8;
    var5 = var5.RelativeMarketingURLs;
    var8 = 1;
    var9 = var7[var8];
    var8 = metroImportDefault;
    var10 = var8.bind(var1)(var9);
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var13 = 'Routing/Utils';
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot8 = var8;
    var8 = var5.DEVELOPER_PORTAL;
    var5 = new Array(1);
    var5[0] = var8;
    var _closure1_slot9 = var5;
    var5 = 2;
    var5 = var7[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.createMemoryHistory;
    var9 = var5.bind(var8)();
    var _closure1_slot2 = var9;
    var8 = var9.listen;
    var5 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = 'REPLACE';
            var1 = arg2;
            if(!(var2 !== var1)) { _fun0003_ip = 26; continue _fun0003 }
 13:
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)();
 26:
            var1 = undefined;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/router_utils.tsx';
    var5 = var6.bind(var7)(var5);
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
 0:
            var3 = _closure1_slot3;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 58; continue _fun0004 }
 16:
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
 58:
            return var1;
        }
    };
    var3['currentRouteHasBackNavigation'] = var4;
    var4 = function replaceWith(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var4 = _closure1_slot12;
            var1 = undefined;
            var2 = 'replace';
            var2 = var4.bind(var1)(var6, var2);
            if(var2) { _fun0005_ip = 116; continue _fun0005 }
 25:
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
            if(!(var4 !== var2)) { _fun0005_ip = 91; continue _fun0005 }
 75:
            var4 = _closure1_slot2;
            var2 = var4.replace;
            var2 = var2.bind(var4)(var6);
            _fun0005_ip = 109; continue _fun0005;
 91:
            var5 = _closure1_slot2;
            var4 = var5.replace;
            var2 = arg2;
            var2 = var4.bind(var5)(var6, var2);
 109:
            var2 = arg3;
            _closure1_slot3 = var2;
 116:
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
 0:
            var2 = null;
            var1 = arg1;
            if(!(var2 == var1)) { _fun0006_ip = 31; continue _fun0006 }
 9:
            var1 = _closure1_slot2;
            var1 = var1.location;
            var1 = var1.pathname;
            var1 = var2 != var1;
 31:
            var1 = true;
            return var1;
        }
    };
    var3['isValidFingerprintRoute'] = var4;
    var4 = function getFingerprintLocation(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0007_ip = 44; continue _fun0007 }
 9:
            var3 = _closure1_slot2;
            var3 = var3.location;
            var3 = var3.pathname;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0007_ip = 41; continue _fun0007 }
 38:
            var2 = var3;
 41:
            var1 = var2;
 44:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.LOGIN;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 583; continue _fun0007 }
 74:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REGISTER;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 571; continue _fun0007 }
 101:
            var4 = var1.startsWith;
            var5 = _closure1_slot5;
            var3 = var5.INVITE;
            var6 = '';
            var3 = var3.bind(var5)(var6);
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 559; continue _fun0007 }
 137:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.VERIFY;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 547; continue _fun0007 }
 164:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.DISABLE_EMAIL_NOTIFICATIONS;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 535; continue _fun0007 }
 191:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 523; continue _fun0007 }
 218:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REJECT_IP;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 511; continue _fun0007 }
 245:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REJECT_MFA;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 499; continue _fun0007 }
 272:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.AUTHORIZE_IP;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 487; continue _fun0007 }
 299:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.AUTHORIZE_PAYMENT;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 475; continue _fun0007 }
 326:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.RESET;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 463; continue _fun0007 }
 350:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REPORT;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 451; continue _fun0007 }
 374:
            var4 = var1.startsWith;
            var3 = _closure1_slot5;
            var3 = var3.REPORT_SECOND_LOOK;
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0007_ip = 439; continue _fun0007 }
 398:
            var4 = var1.startsWith;
            var5 = _closure1_slot5;
            var3 = var5.ACCOUNT_REVERT;
            var3 = var3.bind(var5)(var6);
            var3 = var4.bind(var1)(var3);
            if(!var3) { _fun0007_ip = 437; continue _fun0007 }
 427:
            var3 = _closure1_slot6;
            var1 = var3.ACCOUNT_REVERT;
 437:
            _fun0007_ip = 449; continue _fun0007;
 439:
            var3 = _closure1_slot6;
            var1 = var3.REPORT_SECOND_LOOK;
 449:
            _fun0007_ip = 461; continue _fun0007;
 451:
            var3 = _closure1_slot6;
            var1 = var3.REPORT;
 461:
            _fun0007_ip = 473; continue _fun0007;
 463:
            var3 = _closure1_slot6;
            var1 = var3.RESET;
 473:
            _fun0007_ip = 485; continue _fun0007;
 475:
            var3 = _closure1_slot6;
            var1 = var3.AUTHORIZE_PAYMENT;
 485:
            _fun0007_ip = 497; continue _fun0007;
 487:
            var3 = _closure1_slot6;
            var1 = var3.AUTHORIZE_IP;
 497:
            _fun0007_ip = 509; continue _fun0007;
 499:
            var3 = _closure1_slot6;
            var1 = var3.REJECT_MFA;
 509:
            _fun0007_ip = 521; continue _fun0007;
 511:
            var3 = _closure1_slot6;
            var1 = var3.REJECT_IP;
 521:
            _fun0007_ip = 533; continue _fun0007;
 523:
            var3 = _closure1_slot6;
            var1 = var3.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
 533:
            _fun0007_ip = 545; continue _fun0007;
 535:
            var3 = _closure1_slot6;
            var1 = var3.DISABLE_EMAIL_NOTIFICATIONS;
 545:
            _fun0007_ip = 557; continue _fun0007;
 547:
            var3 = _closure1_slot6;
            var1 = var3.VERIFY;
 557:
            _fun0007_ip = 569; continue _fun0007;
 559:
            var3 = _closure1_slot6;
            var1 = var3.INVITE;
 569:
            _fun0007_ip = 581; continue _fun0007;
 571:
            var3 = _closure1_slot6;
            var1 = var3.REGISTER;
 581:
            _fun0007_ip = 593; continue _fun0007;
 583:
            var2 = _closure1_slot6;
            var1 = var2.LOGIN;
 593:
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
 0:
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0008_ip = 36; continue _fun0008 }
 16:
            var3 = null;
            _closure1_slot3 = var3;
            var3 = _closure1_slot2;
            var2 = var3.goBack;
            var2 = var2.bind(var3)();
 36:
            return var1;
        }
    };
    var3['back'] = var4;
    var2 = function forward() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0009_ip = 36; continue _fun0009 }
 16:
            var3 = null;
            _closure1_slot3 = var3;
            var3 = _closure1_slot2;
            var2 = var3.goForward;
            var2 = var2.bind(var3)();
 36:
            return var1;
        }
    };
    var3['forward'] = var2;
    return var1;
})();