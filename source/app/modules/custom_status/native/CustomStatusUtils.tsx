// app/modules/custom_status/native/CustomStatusUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/custom_status/native/CustomStatusUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.location;
            var9 = var1.analyticsLocations;
            var2 = var1.prompt;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 0;
            var4 = var8[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var7 = _closure1_slot0;
            var3 = 2;
            var3 = var8[var3];
            var11 = var7.bind(var1)(var3);
            var3 = 1;
            var4 = var8[var3];
            var3 = var8.paths;
            var4 = var11.bind(var1)(var4, var3);
            var3 = {};
            var3['location'] = var10;
            var3['analyticsLocations'] = var9;
            var3['prompt'] = var2;
            var2 = 3;
            var2 = var8[var2];
            var7 = var7.bind(var1)(var2);
            var2 = var7.isAndroid;
            var7 = var2.bind(var7)();
            var2 = undefined;
            if(!var7) { _fun0001_ip = 140; continue _fun0001 }
 126:
            var7 = {};
            var8 = 'modal';
            var7['presentation'] = var8;
            var2 = var7;
 140:
            var16 = var6;
            var15 = var4;
            var14 = var3;
            var13 = undefined;
            var12 = var2;
            var2 = var16[var5](var15, var14, var13, var12, var11);
            return var1;
        }
    };
    var3['openEditCustomStatusModal'] = var2;
    return var1;
})();