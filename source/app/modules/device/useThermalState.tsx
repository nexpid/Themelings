// app/modules/device/useThermalState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _getThermalState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 0;
            var3 = var3[var6];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot3;
            var3 = var3.UNHANDLED;
            return var3;
case 6:
            var3 = _closure1_slot4;
            var3 = var3.NONE;
            if(!(var3 !== var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot4;
            var3 = var3.LIGHT;
            if(!(var3 !== var1)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot4;
            var3 = var3.MODERATE;
            if(!(var3 !== var1)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var3 = _closure1_slot4;
            var3 = var3.SEVERE;
            if(!(var3 !== var1)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = _closure1_slot4;
            var3 = var3.CRITICAL;
            if(!(var3 !== var1)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = _closure1_slot4;
            var3 = var3.EMERGENCY;
            if(!(var3 !== var1)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var3 = _closure1_slot4;
            var3 = var3.SHUTDOWN;
            if(!(var3 !== var1)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var3 = _closure1_slot3;
            var3 = var3.UNHANDLED;
            return var3;
case 15:
            var3 = _closure1_slot3;
            var3 = var3.CRITICAL;
            return var3;
case 13:
            var3 = _closure1_slot3;
            var3 = var3.SERIOUS;
            return var3;
case 10:
            var3 = _closure1_slot3;
            var3 = var3.FAIR;
            return var3;
case 8:
            var2 = _closure1_slot3;
            var2 = var2.NOMINAL;
            return var2;
case 4:
            return var1;
case 2:
            var1 = _closure1_slot3;
            var1 = var1.UNHANDLED;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = {};
    var4 = -1;
    var5['UNHANDLED'] = var4;
    var1 = 'UNHANDLED';
    var5[var4] = var1;
    var12 = 0;
    var5['NOMINAL'] = var12;
    var1 = 'NOMINAL';
    var5[var12] = var1;
    var11 = 1;
    var5['FAIR'] = var11;
    var1 = 'FAIR';
    var5[var11] = var1;
    var1 = 2;
    var5['SERIOUS'] = var1;
    var4 = 'SERIOUS';
    var5[var1] = var4;
    var10 = 3;
    var5['CRITICAL'] = var10;
    var9 = 'CRITICAL';
    var5[var10] = var9;
    var _closure1_slot3 = var5;
    var4 = {};
    var4['NONE'] = var12;
    var8 = 'NONE';
    var4[var12] = var8;
    var4['LIGHT'] = var11;
    var8 = 'LIGHT';
    var4[var11] = var8;
    var4['MODERATE'] = var1;
    var8 = 'MODERATE';
    var4[var1] = var8;
    var4['SEVERE'] = var10;
    var8 = 'SEVERE';
    var4[var10] = var8;
    var8 = 4;
    var4['CRITICAL'] = var8;
    var4[var8] = var9;
    var9 = 5;
    var4['EMERGENCY'] = var9;
    var8 = 'EMERGENCY';
    var4[var9] = var8;
    var9 = 6;
    var4['SHUTDOWN'] = var9;
    var8 = 'SHUTDOWN';
    var4[var9] = var8;
    var _closure1_slot4 = var4;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/device/useThermalState.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useThermalState() {
        var3 = _closure1_slot5;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = var4.useRawThermalState;
        var1 = var1.bind(var4)();
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['default'] = var6;
    var3['ThermalStates'] = var5;
    var3['AndroidThermalStates'] = var4;
    var2 = function getThermalState() {
        var3 = _closure1_slot5;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var4.bind(var2)(var1);
        var1 = var4.getRawThermalState;
        var1 = var1.bind(var4)();
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['getThermalState'] = var2;
    return var1;
})();