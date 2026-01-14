// app/modules/frames/native/getDefaultOrientationLockState.tsx
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
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/native/getDefaultOrientationLockState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setOrientationLockState(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var2 = var3.getDefaultOrientationLockState;
            var4 = var2.bind(var3)(var5);
case 2:
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'FRAME_SET_ORIENTATION_LOCK_STATE';
            var1['type'] = var6;
            var5 = var5.id;
            var1['applicationId'] = var5;
            var1['lockState'] = var4;
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['setOrientationLockState'] = var2;
    return var1;
})();