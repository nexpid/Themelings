// app/modules/device/DeviceState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 1;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/device/DeviceState.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 2;
    var7 = var6[var4];
    var7 = var5.bind(var1)(var7);
    var7 = var7.DeviceState;
    var3['DeviceState'] = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThermalState;
    var3['ThermalState'] = var4;
    var4 = 0;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getDeviceState;
    var3['getDeviceState'] = var4;
    var2 = function logDeviceState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 === var1)) { _fun0001_ip = 60; continue _fun0001 }
 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.logger;
            var3 = var4.info;
            var2 = 'Device state not available';
            var2 = var3.bind(var4)(var2);
            _fun0001_ip = 278; continue _fun0001;
 60:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 0;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var8 = var6.logger;
            var7 = var8.info;
            var6 = 'Device State Information:';
            var6 = var7.bind(var8)(var6);
            var6 = var5[var2];
            var6 = var4.bind(var3)(var6);
            var9 = var6.logger;
            var8 = var9.info;
            var11 = var1.thermalState;
            var6 = global;
            var7 = var6.HermesInternal;
            var10 = var7.concat;
            var7 = '- Thermal State: ';
            var7 = var10.bind(var7)(var11);
            var7 = var8.bind(var9)(var7);
            var7 = var5[var2];
            var7 = var4.bind(var3)(var7);
            var8 = var7.logger;
            var7 = var8.info;
            var10 = var1.batteryLevel;
            var9 = 100;
            var11 = var9 * var10;
            var6 = var6.HermesInternal;
            var10 = var6.concat;
            var9 = '- Battery Level: ';
            var6 = '%';
            var6 = var10.bind(var9)(var11, var6);
            var6 = var7.bind(var8)(var6);
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var3 = var2.logger;
            var2 = var3.info;
            var1 = var1.isLowPowerMode;
            var4 = 'Disabled';
            if(!var1) { _fun0001_ip = 263; continue _fun0001 }
 259:
            var4 = 'Enabled';
 263:
            var1 = '- Low Power Mode: ';
            var1 = var1 + var4;
            var1 = var2.bind(var3)(var1);
 278:
            var1 = undefined;
            return var1;
        }
    };
    var3['logDeviceState'] = var2;
    return var1;
})();