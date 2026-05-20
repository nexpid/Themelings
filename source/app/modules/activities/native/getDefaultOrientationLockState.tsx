// app/modules/activities/native/getDefaultOrientationLockState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var8;
    var5 = function getIsTabletActivitySurface() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot3;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var2 = function getDefaultOrientationLockState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = undefined;
            return var1;
case 4:
            var1 = _closure1_slot4;
            var2 = undefined;
            var1 = var1.bind(var2)();
            var3 = var3.embeddedActivityConfig;
            var4 = var4 == var3;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = undefined;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3.default_orientation_lock_state;
case 8:
            _fun0002_ip = 10; continue _fun0002;
case 6:
            var2 = undefined;
            if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var3.tablet_default_orientation_lock_state;
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var6);
    var6 = var9.isIpadOS;
    var6 = var6.bind(var9)();
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var9 = var7.bind(var1)(var6);
    var6 = var9.isMetaQuest;
    var6 = var6.bind(var9)();
    var _closure1_slot3 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/native/getDefaultOrientationLockState.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getIsTabletActivitySurface'] = var5;
    var4 = function setOrientationLockState(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot5;
            var2 = undefined;
            var4 = var3.bind(var2)(var5);
case 13:
            if(!(var1 != var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
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
case 15:
            var1 = undefined;
            return var1;
        }
    };
    var3['setOrientationLockState'] = var4;
    var3['getDefaultOrientationLockState'] = var2;
    return var1;
})();