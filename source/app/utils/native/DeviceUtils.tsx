// app/utils/native/DeviceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var7;
        var4 = function getDevice() {
            var1 = _closure1_slot3;
            var1 = var1.device;
            return var1;
        };
        var _closure1_slot6 = var4;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.NativeModules;
        var8 = 1;
        var8 = var7[var8];
        var9 = var6.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = var5.DCDDeviceManager;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var9 = 2;
        var8 = var7[var9];
        var11 = var10.bind(var1)(var8);
        var8 = null;
        var11 = var8 == var11;
        var8 = undefined;
        if(var11) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var9 = var7[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getConstants;
        var8 = var9.bind(var10)();
case 5:
        var5 = var8;
case 4:
        var _closure1_slot3 = var5;
        var5 = null;
        var _closure1_slot4 = var5;
        var5 = 'mediaPerformanceClass';
        var _closure1_slot5 = var5;
        var5 = 4;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'utils/native/DeviceUtils.tsx';
        var5 = var6.bind(var7)(var5);
        var5 = function isIpadOS() {
            var1 = _closure1_slot3;
            var2 = var1.deviceModel;
            var1 = 'iPad';
            var1 = var1 === var2;
            return var1;
        };
        var3['isIpadOS'] = var5;
        var5 = function isGestureNavigationEnabled() {
            var1 = _closure1_slot3;
            var1 = var1.isGestureNavigationEnabled;
            return var1;
        };
        var3['isGestureNavigationEnabled'] = var5;
        var5 = function getSystemVersion() {
            var1 = _closure1_slot3;
            var1 = var1.systemVersion;
            return var1;
        };
        var3['getSystemVersion'] = var5;
        var3['getDevice'] = var4;
        var4 = function getDeviceInfo() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot6;
                var4 = var3.bind(var4)();
                if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var1 = var4;
                _fun0002_ip = 9; continue _fun0002;
case 7:
                var3 = ' (';
                var3 = var4 + var3;
                var2 = _closure1_slot3;
                var2 = var2.deviceModel;
                var3 = var3 + var2;
                var2 = ')';
                var1 = var3 + var2;
case 9:
                return var1;
            }
        };
        var3['getDeviceInfo'] = var4;
        var4 = function getDeviceMediaPerformanceClass() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isAndroid;
                var3 = var1.bind(var3)();
                var6 = null;
                var1 = null;
                if(!var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var3 = _closure1_slot4;
                var3 = var6 == var3;
                if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var8 = var4.Storage;
                var7 = var8.get;
                var4 = _closure1_slot5;
                var4 = var7.bind(var8)(var4);
                _closure1_slot4 = var4;
                var3 = var6 == var4;
case 12:
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getMediaPerformanceClass;
                var3 = var3.bind(var4)();
                _closure1_slot4 = var3;
                var4 = _closure1_slot0;
                var3 = 3;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var6 = var3.Storage;
                var5 = var6.set;
                var4 = _closure1_slot5;
                var3 = _closure1_slot4;
                var3 = var5.bind(var6)(var4, var3);
case 14:
                var1 = _closure1_slot4;
case 10:
                return var1;
            }
        };
        var3['getDeviceMediaPerformanceClass'] = var4;
        var4 = function getDeviceModel() {
            var1 = _closure1_slot3;
            var1 = var1.deviceModel;
            return var1;
        };
        var3['getDeviceModel'] = var4;
        var4 = function getDeviceBrand() {
            var1 = _closure1_slot3;
            var1 = var1.deviceBrand;
            return var1;
        };
        var3['getDeviceBrand'] = var4;
        var4 = function getDeviceProduct() {
            var1 = _closure1_slot3;
            var1 = var1.deviceProduct;
            return var1;
        };
        var3['getDeviceProduct'] = var4;
        var4 = function getDeviceManufacturer() {
            var1 = _closure1_slot3;
            var1 = var1.deviceManufacturer;
            return var1;
        };
        var3['getDeviceManufacturer'] = var4;
        var4 = function getSmallestScreenWidth() {
            var1 = _closure1_slot3;
            var1 = var1.smallestScreenWidth;
            return var1;
        };
        var3['getSmallestScreenWidth'] = var4;
        var4 = function getSocName() {
            var1 = _closure1_slot3;
            var1 = var1.socName;
            return var1;
        };
        var3['getSocName'] = var4;
        var4 = function getRamSize() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = _closure1_slot3;
                var4 = var1.ramSize;
                var3 = undefined;
                var2 = '';
                var1 = undefined;
                if(!(var2 !== var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = global;
                var2 = var2.parseFloat;
                var1 = var2.bind(var3)(var4);
case 16:
                return var1;
            }
        };
        var3['getRamSize'] = var4;
        var4 = function getMaxCpuFreq() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure1_slot3;
                var4 = var1.maxCpuFreq;
                var3 = undefined;
                var2 = '';
                var1 = undefined;
                if(!(var2 !== var4)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var2 = global;
                var2 = var2.parseFloat;
                var1 = var2.bind(var3)(var4);
case 16:
                return var1;
            }
        };
        var3['getMaxCpuFreq'] = var4;
        var4 = function getTimeZone() {
            var1 = _closure1_slot3;
            var1 = var1.timeZone;
            return var1;
        };
        var3['getTimeZone'] = var4;
        var2 = function getIsRunningOnSimulator() {
            var1 = _closure1_slot3;
            var1 = var1.isRunningOnSimulator;
            return var1;
        };
        var3['getIsRunningOnSimulator'] = var2;
        return var1;
    }
})();