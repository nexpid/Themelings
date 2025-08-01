// app/design/components/Navigator/native/NavigatorScreen.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsxs;
    var _closure1_slot2 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.screen;
            var6 = var1.route;
            var8 = var1.navigation;
            var5 = var1.viewStyle;
            var2 = var9.customNavbar;
            var7 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var7 = var3.designConfig;
            var3 = var7.useTrackNavigatorScreenImpression;
            var3 = var3.bind(var7)(var9, var6);
            var7 = null;
            var3 = var7 != var2;
            if(!var3) { _fun0001_ip = 89; continue _fun0001 }
 85:
            var7 = var2.bind(var4)();
 89:
            var3 = _closure1_slot2;
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 3;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PostponeRender;
            var1 = {};
            var10 = var9.postponeRender;
            var1['postpone'] = var10;
            var10 = var9.ignoreKeyboard;
            var1['ignoreKeyboard'] = var10;
            var1['viewStyle'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = var9.render;
            var6 = var6.params;
            var6 = var7.bind(var9)(var6, var8);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/NavigatorScreen.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['NavigatorScreen'] = var2;
    return var1;
})();