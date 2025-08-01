// app/modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot0 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot1 = var2;
    var2 = 3;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 4;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_MOD_SUBTLE;
    var9['backgroundColor'] = var12;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var2['iconWrapper'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot2 = var2;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AppLauncherOptionIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.wrapperStyle;
            var8 = var1.wrapperSize;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 21:
            var8 = 32;
 24:
            var5 = var1.icon;
            var2 = _closure1_slot2;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var9 = var6.iconWrapper;
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var7;
            var7 = {};
            var7['height'] = var8;
            var7['width'] = var8;
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useAppLauncherOptionIconStyles'] = var2;
    return var1;
})();