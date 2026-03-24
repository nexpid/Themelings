// app/modules/links/native/BrowserManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = function removeInAppBrowserCloseSubscription() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot8;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.remove;
            var3 = var3.bind(var4)();
case 2:
            _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var5 = function getBrowserManagerIsChromeInstalled() {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.isChromeInstalled;
        return var1;
    };
    var _closure1_slot10 = var5;
    var4 = function getBrowserManagerSelectedBrowser() {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.selectedBrowser;
        return var1;
    };
    var _closure1_slot11 = var4;
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
    var9 = var6.AppState;
    var _closure1_slot3 = var9;
    var9 = var6.NativeEventEmitter;
    var _closure1_slot4 = var9;
    var6 = var6.NativeModules;
    var _closure1_slot5 = var6;
    var6 = var6.BrowserManager;
    var _closure1_slot6 = var6;
    var6 = 1;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.create;
    var6 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 2;
            var2 = var2[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = _closure1_slot6;
            var2 = var2.isChromeInstalled;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.getConstants;
            var4 = var4.bind(var7)();
            var2 = var4.isChromeInstalled;
case 6:
            var1['isChromeInstalled'] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot6;
            var2 = var2.selectedBrowser;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getConstants;
            var3 = var3.bind(var4)();
            var2 = var3.selectedBrowser;
case 9:
            var1['selectedBrowser'] = var2;
            var2 = false;
            var1['isInAppBrowserOpen'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot7 = var6;
    var6 = null;
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/links/native/BrowserManager.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useBrowserManagerIsChromeInstalled() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isChromeInstalled;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useBrowserManagerIsChromeInstalled'] = var6;
    var3['getBrowserManagerIsChromeInstalled'] = var5;
    var5 = function useBrowserManagerSelectedBrowser() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.selectedBrowser;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useBrowserManagerSelectedBrowser'] = var5;
    var3['getBrowserManagerSelectedBrowser'] = var4;
    var4 = function useIsInAppBrowserOpen() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isInAppBrowserOpen;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useIsInAppBrowserOpen'] = var4;
    var4 = function getIsInAppBrowserOpen() {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.isInAppBrowserOpen;
        return var1;
    };
    var3['getIsInAppBrowserOpen'] = var4;
    var4 = function browserManagerOpenUrl(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var7 = arguments[1];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 2; continue _fun0003 }
case 10:
            var1 = _closure1_slot11;
            var7 = var1.bind(var4)();
case 2:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 4;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.SAFARI;
            if(!(var7 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.CHROME;
            if(!(var7 === var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = _closure1_slot10;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.IN_APP;
            if(!(var7 !== var2)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.CHROME;
            if(!(var7 !== var2)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = global;
            var6 = var2.Error;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var2 = 'Unknown browser type: ';
            var9 = var5.bind(var2)(var7);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var2 = new var10[var6](var9, var8);
            var2 = var2 instanceof Object ? var2 : var5;
            throw var2;
case 17:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var6 = _closure1_slot6;
            var5 = var6.openInChromeURL;
            var2 = true;
            var2 = var5.bind(var6)(var3, var2);
            _fun0003_ip = 21; continue _fun0003;
case 19:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.openInChromeURL;
            var2 = var5.bind(var6)(var3);
case 21:
            return var2;
case 15:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = _closure1_slot6;
            var2 = var5.openInAppURL;
            var6 = var2.bind(var5)(var3);
            _fun0003_ip = 24; continue _fun0003;
case 22:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.openInAppURL;
            var6 = var2.bind(var5)(var3);
case 24:
            var5 = var6.then;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = false;
                    var1 = arg1;
                    if(!(var2 !== var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var3 = _closure1_slot7;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['isInAppBrowserOpen'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = function subscribeToInAppBrowserClose() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var4 = _closure1_slot9;
                            var1 = undefined;
                            var4 = var4.bind(var1)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var6 = 2;
                            var4 = var4[var6];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isIOS;
                            var4 = var4.bind(var5)();
                            if(var4) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isAndroid;
                            var4 = var4.bind(var5)();
                            if(!var4) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                            var7 = _closure1_slot3;
                            var6 = var7.addEventListener;
                            var5 = 'change';
                            var4 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var2 = 'active';
                                    var1 = arg1;
                                    var1 = var2 === var1;
                                    if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                                    var3 = _closure1_slot7;
                                    var2 = var3.getState;
                                    var2 = var2.bind(var3)();
                                    var1 = var2.isInAppBrowserOpen;
case 31:
                                    if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 5:
                                    var4 = _closure1_slot7;
                                    var3 = var4.setState;
                                    var2 = {};
                                    var5 = false;
                                    var2['isInAppBrowserOpen'] = var5;
                                    var2 = var3.bind(var4)(var2);
                                    var2 = _closure1_slot9;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)();
case 33:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var4 = var6.bind(var7)(var5, var4);
                            _closure1_slot8 = var4;
                            _fun0005_ip = 29; continue _fun0005;
case 27:
                            var6 = _closure1_slot4;
                            var9 = _closure1_slot6;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var10 = var5;
                            var4 = new var10[var6](var9, var8);
                            var6 = var4 instanceof Object ? var4 : var5;
                            var5 = var6.addListener;
                            var4 = 'safariViewControllerDidFinish';
                            var2 = function() {
                                var4 = _closure1_slot7;
                                var3 = var4.setState;
                                var2 = {};
                                var5 = false;
                                var2['isInAppBrowserOpen'] = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure1_slot9;
                                var1 = undefined;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var2 = var5.bind(var6)(var4, var2);
                            _closure1_slot8 = var2;
case 29:
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2);
            return var2;
case 11:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.performURLNavigation;
            var1 = var1.bind(var2)(var3);
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['browserManagerOpenUrl'] = var4;
    var4 = function browserManagerSelectBrowser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            var3 = _closure1_slot5;
            var4 = var3.BrowserManager;
            var3 = var4.selectBrowser;
            var3 = var3.bind(var4)(var5);
            _fun0007_ip = 36; continue _fun0007;
case 34:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 4;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.SAFARI;
            if(!(var3 !== var5)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.IN_APP;
            if(!(var3 !== var5)) { _fun0007_ip = 17; continue _fun0007 }
case 39:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.CHROME;
            if(!(var3 === var5)) { _fun0007_ip = 36; continue _fun0007 }
case 40:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = var6.bind(var1)(var4);
            var4 = var6.selectBrowser;
            var7 = _closure1_slot0;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.BrowserType;
            var3 = var3.CHROME;
            var3 = var4.bind(var6)(var3);
            _fun0007_ip = 36; continue _fun0007;
case 17:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = var6.bind(var1)(var4);
            var4 = var6.selectBrowser;
            var7 = _closure1_slot0;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.BrowserType;
            var3 = var3.IN_APP;
            var3 = var4.bind(var6)(var3);
            _fun0007_ip = 36; continue _fun0007;
case 37:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var4 = var8[var3];
            var6 = var6.bind(var1)(var4);
            var4 = var6.selectBrowser;
            var7 = _closure1_slot0;
            var3 = var8[var3];
            var3 = var7.bind(var1)(var3);
            var3 = var3.BrowserType;
            var3 = var3.SAFARI;
            var3 = var4.bind(var6)(var3);
case 36:
            var4 = _closure1_slot7;
            var3 = var4.setState;
            var2 = {};
            var2['selectedBrowser'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['browserManagerSelectBrowser'] = var4;
    var4 = function browserManagerCloseBrowser() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot7;
            var3 = var4.setState;
            var1 = {};
            var5 = false;
            var1['isInAppBrowserOpen'] = var5;
            var1 = var3.bind(var4)(var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var2 = _closure1_slot5;
            var3 = var2.BrowserManager;
            var2 = var3.closeBrowser;
            var2 = var2.bind(var3)();
case 41:
            return var1;
        }
    };
    var3['browserManagerCloseBrowser'] = var4;
    var2 = function openPlayStoreInlineInstall(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var8;
            var4 = global;
            var3 = var4.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var _closure2_slot1 = var1;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var7 = undefined;
            var9 = var9.bind(var7)(var1);
            var1 = var9.isAndroid;
            var1 = var1.bind(var9)();
            if(var1) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var1 = null;
            if(!(var1 != var5)) { _fun0009_ip = 45; continue _fun0009 }
case 46:
            if(!(var1 != var8)) { _fun0009_ip = 38; continue _fun0009 }
case 41:
            var9 = _closure1_slot6;
            var8 = var9.setOpenAppStoreDismissCallback;
            var1 = function() {
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var3 = var1.bind(var2)();
                var2 = _closure2_slot1;
                var3 = var3 - var2;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var8.bind(var9)(var1);
case 38:
            var8 = _closure1_slot6;
            var1 = var8.openAppStoreInline;
            var1 = var1.bind(var8)(var6, var5);
            _fun0009_ip = 47; continue _fun0009;
case 45:
            var9 = var4.Promise;
            var8 = var9.resolve;
            var4 = false;
            var1 = var8.bind(var9)(var4);
case 47:
            _fun0009_ip = 48; continue _fun0009;
case 43:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.openPlayStoreInline;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var3 = var1.bind(var2)();
                    var2 = _closure2_slot1;
                    var3 = var3 - var2;
                    var4 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0010_ip = 25; continue _fun0010 }
case 49:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var6, var5, var2);
case 48:
            return var1;
        }
    };
    var3['openPlayStoreInlineInstall'] = var2;
    return var1;
})();