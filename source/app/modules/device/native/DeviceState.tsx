// app/modules/device/native/DeviceState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _getDeviceState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 154; continue _fun0001 }
 13:
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0001_ip = 31; continue _fun0001 }
 19:
                    var7 = {};
                    var8 = true;
                    var7['fallback'] = var8;
                    var2 = var7;
 31:
                    var5 = var2.fallback;
                    SaveGenerator(address=41);
 39:
                    return var6;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 151; continue _fun0001 }
 47: // try_start_0
                    var4 = _closure1_slot3;
                    var7 = var4.MediaManager;
                    var4 = var7.getDeviceStateInfo;
                    var4 = var4.bind(var7)();
                    SaveGenerator(address=76);
 74:
                    return var4;
 76:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 85; continue _fun0001 }
 82: // try_end0
                    return var4;
 85:
                    return var4;
 88: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var3 = var10;
                    var9 = _closure1_slot4;
                    var8 = var9.warn;
                    var7 = 'Failed to get device state:';
                    var7 = var8.bind(var9)(var7, var10);
                    if(var5) { _fun0001_ip = 122; continue _fun0001 }
 120:
                    _fun0001_ip = 148; continue _fun0001;
 122:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var3 = var4.DEFAULT_DEVICE_STATE;
 148:
                    return var3;
 151:
                    return var2;
 154:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var8 = var5.bind(var1)(var4);
    var4 = var8.prototype;
    var5 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'native/DeviceState.tsx';
    var13 = var5;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/device/native/DeviceState.tsx';
    var5 = var6.bind(var7)(var5);
    var3['logger'] = var4;
    var2 = function getDeviceState() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDeviceState'] = var2;
    return var1;
})();