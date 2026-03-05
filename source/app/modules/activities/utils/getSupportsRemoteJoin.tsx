// app/modules/activities/utils/getSupportsRemoteJoin.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityFlags;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getSupportsRemoteJoin.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSupportsRemoteJoin(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var2 = _closure1_slot2;
            var2 = var2.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var3['getSupportsRemoteJoin'] = var2;
    return var1;
})();