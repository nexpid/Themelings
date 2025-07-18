// app/modules/device/ThermalUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var9 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var8 = var2.NativeEventEmitter;
        var2 = var2.NativeModules;
        var _closure1_slot3 = var2;
        var7 = 1;
        var7 = var6[var7];
        var10 = var5.bind(var1)(var7);
        var7 = var10.isAndroid;
        var7 = var7.bind(var10)();
        if(var7) { _fun0001_ip = 119; continue _fun0001 }
 111:
        var2 = var2.DCDDeviceThermalStateManager;
        _fun0001_ip = 131; continue _fun0001;
 119:
        var7 = 2;
        var7 = var6[var7];
        var2 = var9.bind(var1)(var7);
 131:
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var14 = var7;
        var13 = var2;
        var2 = new var14[var8](var13, var12);
        var2 = var2 instanceof Object ? var2 : var7;
        var _closure1_slot4 = var2;
        var2 = 4;
        var2 = var6[var2];
        var8 = var5.bind(var1)(var2);
        var7 = var8.create;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var _closure2_slot0 = var2;
                var6 = function updateThermalState(arg1) {
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var1 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.rawThermalState;
                                var2 = _closure3_slot0;
                                if(!(var4 !== var2)) { _fun0003_ip = 34; continue _fun0003 }
 20:
                                var2 = {};
                                var3 = _closure3_slot0;
                                var2['rawThermalState'] = var3;
                                var1 = var2;
 34:
                                return var1;
                            }
                        };
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var _closure2_slot1 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.isAndroid;
                var4 = var4.bind(var5)();
                if(var4) { _fun0002_ip = 77; continue _fun0002 }
 55:
                var4 = _closure1_slot3;
                var5 = var4.DCDDeviceThermalStateManager;
                var4 = var5.getThermalState;
                var5 = var4.bind(var5)();
                _fun0002_ip = 196; continue _fun0002;
 77:
                var7 = global;
                var8 = var7.parseInt;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 3;
                var4 = var10[var4];
                var9 = var9.bind(var2)(var4);
                var4 = var9.getSystemVersion;
                var4 = var4.bind(var9)();
                var8 = var8.bind(var2)(var4);
                var4 = 29;
                if(!(!(var8 >= var4))) { _fun0002_ip = 146; continue _fun0002 }
 127:
                var8 = var7.Promise;
                var4 = var8.resolve;
                var4 = var4.bind(var8)(var2);
                _fun0002_ip = 193; continue _fun0002;
 146:
                var9 = var7.Promise;
                var8 = var9.resolve;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 2;
                var7 = var11[var7];
                var10 = var10.bind(var2)(var7);
                var7 = var10.getThermalState;
                var7 = var7.bind(var10)();
                var4 = var8.bind(var9)(var7);
 193:
                var5 = var4;
 196:
                var4 = var5.then;
                var4 = var4.bind(var5)(var6);
                var5 = _closure1_slot4;
                var4 = var5.addListener;
                var3 = 'DeviceThermalStateDidChange';
                var1 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.state;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var1);
                var1 = {};
                var1['rawThermalState'] = var2;
                return var1;
            }
        };
        var2 = var7.bind(var8)(var2);
        var _closure1_slot5 = var2;
        var2 = {};
        var7 = function getRawThermalState() {
            var2 = _closure1_slot5;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.rawThermalState;
            return var1;
        };
        var2['getRawThermalState'] = var7;
        var7 = function useRawThermalState() {
            var3 = _closure1_slot5;
            var2 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.rawThermalState;
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var2['useRawThermalState'] = var7;
        var4 = function addListener(arg1) {
            var1 = {};
            var4 = _closure1_slot5;
            var3 = var4.subscribe;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var1['remove'] = var2;
            return var1;
        };
        var2['addListener'] = var4;
        var4 = 6;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/device/ThermalUtils.native.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();