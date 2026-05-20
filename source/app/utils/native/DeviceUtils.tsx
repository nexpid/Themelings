// app/utils/native/DeviceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var8;
        var5 = function getSystemVersion() {
            var1 = _closure1_slot3;
            var1 = var1.systemVersion;
            return var1;
        };
        var _closure1_slot6 = var5;
        var4 = function getDevice() {
            var1 = _closure1_slot3;
            var1 = var1.device;
            return var1;
        };
        var _closure1_slot7 = var4;
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
        var6 = var7.bind(var1)(var6);
        var6 = var6.NativeModules;
        var9 = 1;
        var9 = var8[var9];
        var10 = var7.bind(var1)(var9);
        var9 = var10.isAndroid;
        var9 = var9.bind(var10)();
        if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var6 = var6.DCDDeviceManager;
        _fun0001_ip = 4; continue _fun0001;
case 2:
        var10 = 2;
        var9 = var8[var10];
        var12 = var11.bind(var1)(var9);
        var9 = null;
        var12 = var9 == var12;
        var9 = undefined;
        if(var12) { _fun0001_ip = 5; continue _fun0001 }
case 6:
        var10 = var8[var10];
        var11 = var11.bind(var1)(var10);
        var10 = var11.getConstants;
        var9 = var10.bind(var11)();
case 5:
        var6 = var9;
case 4:
        var _closure1_slot3 = var6;
        var6 = null;
        var _closure1_slot4 = var6;
        var6 = 'mediaPerformanceClass';
        var _closure1_slot5 = var6;
        var6 = 4;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'utils/native/DeviceUtils.tsx';
        var6 = var7.bind(var8)(var6);
        var6 = function isIpadOS() {
            var1 = _closure1_slot3;
            var2 = var1.deviceModel;
            var1 = 'iPad';
            var1 = var1 === var2;
            return var1;
        };
        var3['isIpadOS'] = var6;
        var6 = function isGestureNavigationEnabled() {
            var1 = _closure1_slot3;
            var1 = var1.isGestureNavigationEnabled;
            return var1;
        };
        var3['isGestureNavigationEnabled'] = var6;
        var3['getSystemVersion'] = var5;
        var5 = function getSystemVersionMajor() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = undefined;
                var3 = var2.bind(var1)();
                var2 = var3.match;
                var1 = /\d+/;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var3 = global;
                var6 = var3.Number;
                var5 = var6.parseInt;
                var1 = 0;
                var4 = var2[var1];
                var2 = 10;
                var2 = var5.bind(var6)(var4, var2);
                var4 = var3.Number;
                var3 = var4.isNaN;
                var3 = var3.bind(var4)(var2);
                if(var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = var2;
case 9:
                return var1;
case 7:
                var1 = 0;
                return var1;
            }
        };
        var3['getSystemVersionMajor'] = var5;
        var5 = function getSystemVersionMinor() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = undefined;
                var3 = var2.bind(var1)();
                var2 = var3.match;
                var1 = /\d+/g;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 8:
                var2 = var3.length;
                var1 = 2;
                if(!(!(var2 < var1))) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = global;
                var5 = var1.Number;
                var4 = var5.parseInt;
                var2 = 1;
                var3 = var3[var2];
                var2 = 10;
                var2 = var4.bind(var5)(var3, var2);
                var3 = var1.Number;
                var1 = var3.isNaN;
                var3 = var1.bind(var3)(var2);
                var1 = 0;
                if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = var2;
case 13:
                return var1;
case 11:
                var1 = 0;
                return var1;
            }
        };
        var3['getSystemVersionMinor'] = var5;
        var3['getDevice'] = var4;
        var4 = function getDeviceInfo() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot7;
                var4 = var3.bind(var4)();
                if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var1 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 15:
                var3 = ' (';
                var3 = var4 + var3;
                var2 = _closure1_slot3;
                var2 = var2.deviceModel;
                var3 = var3 + var2;
                var2 = ')';
                var1 = var3 + var2;
case 17:
                return var1;
            }
        };
        var3['getDeviceInfo'] = var4;
        var4 = function getDeviceMediaPerformanceClass() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
                if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var3 = _closure1_slot4;
                var3 = var6 == var3;
                if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 12:
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
case 20:
                if(!var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
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
case 21:
                var1 = _closure1_slot4;
case 18:
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure1_slot3;
                var4 = var1.ramSize;
                var3 = undefined;
                var2 = '';
                var1 = undefined;
                if(!(var2 !== var4)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                var2 = global;
                var2 = var2.parseFloat;
                var1 = var2.bind(var3)(var4);
case 23:
                return var1;
            }
        };
        var3['getRamSize'] = var4;
        var4 = function getMaxCpuFreq() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = _closure1_slot3;
                var4 = var1.maxCpuFreq;
                var3 = undefined;
                var2 = '';
                var1 = undefined;
                if(!(var2 !== var4)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                var2 = global;
                var2 = var2.parseFloat;
                var1 = var2.bind(var3)(var4);
case 23:
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