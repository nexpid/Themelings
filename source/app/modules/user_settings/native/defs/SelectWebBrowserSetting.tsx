// app/modules/user_settings/native/defs/SelectWebBrowserSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function useWebBrowserSettingOptions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var1 = var7[var3];
            var6 = undefined;
            var2 = var5.bind(var6)(var1);
            var1 = var2.useBrowserManagerIsChromeInstalled;
            var2 = var1.bind(var2)();
            var1 = new Array(0);
            var3 = var7[var3];
            var5 = var5.bind(var6)(var3);
            var3 = var5.useBrowserManagerSupportsInAppBrowser;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.push;
            var3 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var7 = 2;
            var10 = var9[var7];
            var10 = var8.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.YayR6P;
            var7 = var10.bind(var11)(var7);
            var3['label'] = var7;
            var7 = 3;
            var7 = var9[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.WebBrowserType;
            var7 = var7.IN_APP;
            var3['value'] = var7;
            var3 = var5.bind(var1)(var3);
case 2:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 4;
            var3 = var3[var8];
            var5 = var5.bind(var6)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var1.push;
            var3 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 2;
            var11 = var10[var7];
            var11 = var9.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var10[var7];
            var7 = var9.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.kEfv89;
            var7 = var11.bind(var12)(var7);
            var3['label'] = var7;
            var7 = 3;
            var7 = var10[var7];
            var7 = var9.bind(var6)(var7);
            var7 = var7.WebBrowserType;
            var7 = var7.SAFARI;
            var3['value'] = var7;
            var3 = var5.bind(var1)(var3);
case 4:
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.push;
            var2 = {};
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var7 = var7.bind(var6)(var5);
            var5 = var7.isAndroid;
            var5 = var5.bind(var7)();
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var7 = 2;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var6)(var7);
            var7 = var7.t;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var7.FfjVVt;
            var5 = var8.bind(var9)(var5);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = var7.kEfv89;
            var5 = var8.bind(var9)(var7);
case 10:
            var2['label'] = var5;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.WebBrowserType;
            var4 = var4.CHROME;
            var2['value'] = var4;
            var2 = var3.bind(var1)(var2);
case 6:
            return var1;
        }
    };
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var10 = var4.MobileSetting;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createRadio;
    var4 = {};
    var11 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.C+DkPu;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['title'] = var11;
    var10 = var10.WEB_BROWSER;
    var4['parent'] = var10;
    var10 = function useWebBrowserSettingValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useBrowserManagerSelectedBrowser;
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['useValue'] = var10;
    var9 = function onWebBrowserSettingValueChange(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.browserManagerSelectBrowser;
        var2 = global;
        var5 = var2.Number;
        var2 = arg1;
        var2 = var5.bind(var1)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['onValueChange'] = var9;
    var4['useOptions'] = var2;
    var4 = var5.bind(var8)(var4);
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/SelectWebBrowserSetting.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useWebBrowserSettingOptions'] = var2;
    return var1;
})();