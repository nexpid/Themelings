// app/modules/activities/native/getDefaultOrientationLockState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var2 = function getDefaultOrientationLockState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 13; continue _fun0001 }
 9:
            var1 = undefined;
            return var1;
 13:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var1 = var2[var1];
            var2 = undefined;
            var5 = var5.bind(var2)(var1);
            var1 = var5.isIpadOS;
            var1 = var1.bind(var5)();
            var3 = var3.embeddedActivityConfig;
            var4 = var4 == var3;
            if(var1) { _fun0001_ip = 74; continue _fun0001 }
 61:
            var1 = undefined;
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var1 = var3.default_orientation_lock_state;
 72:
            _fun0001_ip = 88; continue _fun0001;
 74:
            var2 = undefined;
            if(var4) { _fun0001_ip = 85; continue _fun0001 }
 79:
            var2 = var3.tablet_default_orientation_lock_state;
 85:
            var1 = var2;
 88:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 2;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/native/getDefaultOrientationLockState.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function setOrientationLockState(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 26; continue _fun0002 }
 12:
            var3 = _closure1_slot3;
            var2 = undefined;
            var4 = var3.bind(var2)(var5);
 26:
            if(!(var1 != var4)) { _fun0002_ip = 88; continue _fun0002 }
 30:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE';
            var1['type'] = var6;
            var5 = var5.id;
            var1['applicationId'] = var5;
            var1['lockState'] = var4;
            var1 = var2.bind(var3)(var1);
 88:
            var1 = undefined;
            return var1;
        }
    };
    var3['setOrientationLockState'] = var4;
    var3['getDefaultOrientationLockState'] = var2;
    return var1;
})();