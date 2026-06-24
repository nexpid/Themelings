// app/modules/home_drawer/native/HomeDrawerShared.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot0 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot1 = var7;
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'gap': 12};
    var4['container'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column', 'justifyContent': 'center', 'gap': 2};
    var4['titleContainer'] = var9;
    var9 = {};
    var10 = 'hidden';
    var9['overflow'] = var10;
    var4['rightContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerShared.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerSharedItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.title;
            var8 = var1.subtitle;
            var10 = var1.right;
            var1 = _closure1_slot3;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var5 = {};
            var6 = var11.titleContainer;
            var5['style'] = var6;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var8;
            var5['children'] = var6;
            var6 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var8 = var6 != var10;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot2;
            var8 = _closure1_slot0;
            var7 = {};
            var11 = var11.rightContainer;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 2:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HomeDrawerSharedItem'] = var2;
    return var1;
})();