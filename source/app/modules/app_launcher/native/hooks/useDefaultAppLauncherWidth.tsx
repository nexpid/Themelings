// app/modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/hooks/useDefaultAppLauncherWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useDefaultAppLauncherWidth(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var5 = var1.width;
            var3 = _closure1_slot0;
            var1 = 2;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.AppLauncherEntrypoint;
            var4 = var1.TEXT;
            var3 = arg1;
            var1 = var5;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.min;
            var2 = _closure1_slot3;
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var3['useDefaultAppLauncherWidth'] = var2;
    return var1;
})();