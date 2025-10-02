// app/modules/user_settings/native/defs/SelectWebBrowserSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 1;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.RADIO;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.C+DkPj;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.WEB_BROWSER;
    var2['parent'] = var7;
    var7 = function useWebBrowserSettingValue() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.useBrowserManagerSelectedBrowser;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['useValue'] = var7;
    var7 = function onWebBrowserSettingValueChange(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
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
    var2['onValueChange'] = var7;
    var4 = function useWebBrowserSettingOptions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var6 = undefined;
            var2 = var5.bind(var6)(var1);
            var1 = var2.useBrowserManagerIsChromeInstalled;
            var2 = var1.bind(var2)();
            var1 = new Array(0);
            var9 = var1.push;
            var8 = {};
            var12 = 3;
            var7 = var3[var12];
            var7 = var5.bind(var6)(var7);
            var11 = var7.intl;
            var10 = var11.string;
            var7 = var3[var12];
            var7 = var5.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.YayR6O;
            var7 = var10.bind(var11)(var7);
            var8['label'] = var7;
            var7 = 4;
            var10 = var3[var7];
            var10 = var5.bind(var6)(var10);
            var10 = var10.WebBrowserType;
            var10 = var10.IN_APP;
            var8['value'] = var10;
            var8 = var9.bind(var1)(var8);
            var9 = 5;
            var3 = var3[var9];
            var5 = var5.bind(var6)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.push;
            var3 = {};
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var11 = var8[var12];
            var11 = var10.bind(var6)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var8[var12];
            var11 = var10.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.kEfv8/;
            var11 = var13.bind(var14)(var11);
            var3['label'] = var11;
            var8 = var8[var7];
            var8 = var10.bind(var6)(var8);
            var8 = var8.WebBrowserType;
            var8 = var8.SAFARI;
            var3['value'] = var8;
            var3 = var5.bind(var1)(var3);
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var1.push;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var8 = var8.bind(var6)(var5);
            var5 = var8.isAndroid;
            var5 = var5.bind(var8)();
            var11 = _closure1_slot0;
            var8 = _closure1_slot1;
            var9 = var8[var12];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var12];
            var8 = var11.bind(var6)(var8);
            var8 = var8.t;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var8.FfjVVl;
            var5 = var9.bind(var10)(var5);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var8 = var8.kEfv8/;
            var5 = var9.bind(var10)(var8);
case 8:
            var2['label'] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.WebBrowserType;
            var4 = var4.CHROME;
            var2['value'] = var4;
            var2 = var3.bind(var1)(var2);
case 4:
            return var1;
        }
    };
    var2['useOptions'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/SelectWebBrowserSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();