// app/modules/activate_device/useActivateDeviceStepTracking.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activate_device/useActivateDeviceStepTracking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivateDeviceStepTracking(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 2;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var7 = var4.bind(var1)(var6);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var2 = var1.type;
                var1 = 'user-code-input';
                var1 = var1 !== var2;
                if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = 'handoff';
                var1 = var2 !== var3;
case 4:
                var9 = null;
                var5 = null;
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clientIdToActivateDevicePlatform;
                var1 = _closure2_slot0;
                var1 = var1.userCodeData;
                var1 = var1.clientId;
                var5 = var2.bind(var3)(var1);
case 6:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.DEVICE_LINK_STEP;
                var1 = {};
                var8 = _closure2_slot1;
                var8 = var9 == var8;
                if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var8 = _closure2_slot1;
                var7 = var8.type;
case 8:
                var1['previous_step'] = var7;
                var6 = _closure2_slot0;
                var6 = var6.type;
                var1['current_step'] = var6;
                var1['platform_type'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useActivateDeviceStepTracking'] = var2;
    return var1;
})();