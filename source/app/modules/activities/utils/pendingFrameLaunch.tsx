// app/modules/activities/utils/pendingFrameLaunch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/pendingFrameLaunch.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function stashPendingFrameLaunch(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = arg2;
        var1 = arg1;
        var3[var1] = var2;
        var1 = undefined;
        return var1;
    };
    var3['stashPendingFrameLaunch'] = var4;
    var4 = function consumePendingFrameLaunch(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot0;
            var1 = var1[var3];
            var4 = null;
            if(!(var4 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = undefined;
            return var4;
case 2:
            var2 = _closure1_slot0;
            var2 = delete var2[var3];
            return var1;
        }
    };
    var3['consumePendingFrameLaunch'] = var4;
    var2 = function discardPendingFrameLaunch(arg1) {
        var2 = _closure1_slot0;
        var1 = arg1;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var3['discardPendingFrameLaunch'] = var2;
    return var1;
})();