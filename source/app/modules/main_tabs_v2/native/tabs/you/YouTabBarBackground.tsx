// app/modules/main_tabs_v2/native/tabs/you/YouTabBarBackground.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot0 = var8;
    var11 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'relative', 'flex': 1, 'overflow': 'hidden'};
    var4['container'] = var10;
    var10 = {};
    var14 = var11.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var11 = 'borderTopWidth';
    var10[var11] = var12;
    var11 = 4;
    var12 = var6[var11];
    var11 = metroImportDefault;
    var11 = var11.bind(var1)(var12);
    var11 = var11.colors;
    var12 = var11.BORDER_SUBTLE;
    var11 = 'borderColor';
    var10[var11] = var12;
    var4['background'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.theme;
            var9 = var2.backgroundColor;
            var3 = _closure1_slot2;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var4 = null;
            var3 = var4 == var1;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4 == var9;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot1;
            var3 = _closure1_slot0;
            var2 = {};
            var6 = var7.container;
            var2['style'] = var6;
            var6 = {};
            var8 = var7.background;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = {};
            var8['backgroundColor'] = var9;
            var7[1] = var8;
            var6['style'] = var7;
            var6 = var4.bind(var5)(var3, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouTabBarBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();