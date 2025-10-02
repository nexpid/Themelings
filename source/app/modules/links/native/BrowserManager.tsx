// app/modules/links/native/BrowserManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function getBrowserManagerIsChromeInstalled() {
        var2 = _closure1_slot5;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.isChromeInstalled;
        return var1;
    };
    var _closure1_slot6 = var5;
    var4 = function getBrowserManagerSelectedBrowser() {
        var2 = _closure1_slot5;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.selectedBrowser;
        return var1;
    };
    var _closure1_slot7 = var4;
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
    var6 = var6.NativeModules;
    var _closure1_slot3 = var6;
    var6 = var6.BrowserManager;
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.create;
    var6 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot4;
            var2 = var2.isChromeInstalled;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 3;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.getConstants;
            var4 = var4.bind(var7)();
            var2 = var4.isChromeInstalled;
case 4:
            var1['isChromeInstalled'] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = _closure1_slot4;
            var2 = var2.selectedBrowser;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getConstants;
            var3 = var3.bind(var4)();
            var2 = var3.selectedBrowser;
case 7:
            var1['selectedBrowser'] = var2;
            return var1;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/links/native/BrowserManager.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useBrowserManagerIsChromeInstalled() {
        var3 = _closure1_slot5;
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
        var3 = _closure1_slot5;
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
    var4 = function browserManagerOpenUrl(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var7 = arguments[1];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot7;
            var7 = var1.bind(var4)();
case 8:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 4;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.SAFARI;
            if(!(var7 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.CHROME;
            if(!(var7 === var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot6;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.IN_APP;
            if(!(var7 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var5.bind(var4)(var2);
            var2 = var2.WebBrowserType;
            var2 = var2.CHROME;
            if(!(var7 !== var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
case 16:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = _closure1_slot4;
            var5 = var6.openInChromeURL;
            var2 = true;
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.openInChromeURL;
            var2 = var5.bind(var6)(var3);
case 20:
            return var2;
case 14:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.isAndroid;
            var2 = var2.bind(var5)();
            if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var5 = _closure1_slot4;
            var2 = var5.openInAppURL;
            var2 = var2.bind(var5)(var3);
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.openInAppURL;
            var2 = var5.bind(var6)(var3);
case 23:
            return var2;
case 10:
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = _closure1_slot3;
            var4 = var3.BrowserManager;
            var3 = var4.selectBrowser;
            var3 = var3.bind(var4)(var5);
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 4;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.SAFARI;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.IN_APP;
            if(!(var3 !== var5)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var1)(var3);
            var3 = var3.WebBrowserType;
            var3 = var3.CHROME;
            if(!(var3 === var5)) { _fun0003_ip = 26; continue _fun0003 }
case 31:
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
            _fun0003_ip = 26; continue _fun0003;
case 29:
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
            _fun0003_ip = 26; continue _fun0003;
case 27:
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
case 26:
            var4 = _closure1_slot5;
            var3 = var4.setState;
            var2 = {};
            var2['selectedBrowser'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['browserManagerSelectBrowser'] = var4;
    var2 = function browserManagerCloseBrowser() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var2 = _closure1_slot3;
            var3 = var2.BrowserManager;
            var2 = var3.closeBrowser;
            var2 = var2.bind(var3)();
case 32:
            return var1;
        }
    };
    var3['browserManagerCloseBrowser'] = var2;
    return var1;
})();