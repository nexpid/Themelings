// app/modules/device/native/DeviceOrientation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var7 = function handleOrientationChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 3;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot10;
            var5 = var5.bind(var1)(var4);
case 2:
            var5 = _closure1_slot8;
            if(!(var5 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            _closure1_slot8 = var4;
            var5 = _closure1_slot7;
            var4 = var5.getState;
            var4 = var4.bind(var5)();
            var6 = var4.orientationLock;
            var4 = null;
            var4 = var4 != var6;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot6;
            var5 = var7.includes;
            var4 = var5.bind(var7)(var6);
case 6:
            var7 = _closure1_slot8;
            var5 = 'LANDSCAPE';
            if(!(var5 === var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var7 = var8.batchUpdates;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.LANDSCAPE;
                var1['orientation'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            _fun0001_ip = 4; continue _fun0001;
case 8:
            var7 = _closure1_slot8;
            var4 = 'PORTRAIT';
            var4 = var4 === var7;
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isIpadOS;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = _closure1_slot8;
            var8 = 'PORTRAITUPSIDEDOWN';
            var7 = var8 === var9;
case 13:
            var4 = var7;
case 11:
            if(!var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var5 !== var6;
case 15:
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 17:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.PORTRAIT;
                var1['orientation'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var1 = function handleDeviceOrientationChange(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot7;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = var2.orientationLock;
            var2 = _closure1_slot9;
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = 'LANDSCAPE';
            if(!(var2 !== var5)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = 'PORTRAIT';
            if(!(var4 === var5)) { _fun0002_ip = 18; continue _fun0002 }
case 22:
            if(!(var4 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 23:
            var5 = _closure1_slot11;
            var4 = undefined;
            var4 = var5.bind(var4)();
            _fun0002_ip = 18; continue _fun0002;
case 20:
            if(!(var2 === var3)) { _fun0002_ip = 18; continue _fun0002 }
case 24:
            var2 = _closure1_slot11;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function consumeUnlockAfterRotationToLockRequest() {
        var5 = _closure1_slot12;
        var4 = {};
        var2 = false;
        var4['unlockAfterRotatingToPreviousLock'] = var2;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        _closure1_slot9 = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var6 = function unlockOrientation(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.unlockAfterRotatingToPreviousLock;
            var4 = _closure1_slot7;
            var1 = var4.getState;
            var1 = var1.bind(var4)();
            var4 = var1.orientationLock;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 3;
            var5 = var1[var7];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isIOS;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0003_ip = 27; continue _fun0003 }
case 7:
            var5 = global;
            var7 = var5.parseInt;
            var5 = _closure1_slot4;
            var6 = var5.Version;
            var5 = 10;
            var6 = var7.bind(var1)(var6, var5);
            var5 = 16;
            if(!(var6 >= var5)) { _fun0003_ip = 27; continue _fun0003 }
case 25:
            if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = null;
            if(!(var2 == var4)) { _fun0003_ip = 29; continue _fun0003 }
case 27:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var6 = var5[var2];
            var8 = var4.bind(var1)(var6);
            var7 = var8.ignoreAutoRotate;
            var6 = false;
            var6 = var7.bind(var8)(var6);
            var2 = var5[var2];
            var4 = var4.bind(var1)(var2);
            var2 = var4.unlockAllOrientations;
            var2 = var2.bind(var4)();
            var4 = _closure1_slot0;
            var2 = 4;
            var2 = var5[var2];
            var5 = var4.bind(var1)(var2);
            var4 = var5.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = null;
                var1['orientationLock'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            _fun0003_ip = 30; continue _fun0003;
case 29:
            var2 = true;
            _closure1_slot9 = var2;
case 30:
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var5 = function lockOrientation(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg2;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var4 = 6;
            var5 = var1[var4];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.ignoreAutoRotate;
            var5 = null;
            var5 = var5 != var8;
            if(!var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var5 = var8;
case 31:
            var5 = var6.bind(var7)(var5);
            var5 = false;
            _closure1_slot9 = var5;
            var6 = 'LANDSCAPE';
            var5 = arg1;
            if(!(var6 !== var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = var7[var4];
            var6 = var6.bind(var1)(var5);
            var5 = var6.lockToPortrait;
            var5 = var5.bind(var6)();
            var6 = _closure1_slot0;
            var5 = 4;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.batchUpdates;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = 'PORTRAIT';
                var1['orientationLock'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            _fun0004_ip = 35; continue _fun0004;
case 33:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = var5[var4];
            var6 = var6.bind(var1)(var4);
            var4 = var6.lockToLandscapeLeft;
            var4 = var4.bind(var6)();
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = 'LANDSCAPE';
                var1['orientationLock'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function lockOrientationForiOS(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isIpadOS;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0005_ip = 18; continue _fun0005 }
case 38:
            var6 = null;
            var5 = var6 == var3;
case 18:
            var4 = var5;
case 36:
            if(var4) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = _closure1_slot13;
            var2 = var2.bind(var1)(var3);
case 39:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var14 = 0;
    var9 = var12[var14];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot3 = var8;
    var10 = 1;
    var8 = var12[var10];
    var8 = var11.bind(var1)(var8);
    var15 = var8.AppState;
    var8 = var8.Platform;
    var _closure1_slot4 = var8;
    var9 = {};
    var9['PORTRAIT'] = var14;
    var8 = 'PORTRAIT';
    var9[var14] = var8;
    var9['LANDSCAPE'] = var10;
    var8 = 'LANDSCAPE';
    var9[var10] = var8;
    var _closure1_slot5 = var9;
    var8 = ['PORTRAIT', 'PORTRAITUPSIDEDOWN'];
    var _closure1_slot6 = var8;
    var8 = 2;
    var8 = var12[var8];
    var14 = var11.bind(var1)(var8);
    var10 = var14.create;
    var8 = function() {
        var1 = {};
        var2 = _closure1_slot5;
        var2 = var2.PORTRAIT;
        var1['orientation'] = var2;
        var2 = null;
        var1['orientationLock'] = var2;
        return var1;
    };
    var8 = var10.bind(var14)(var8);
    var _closure1_slot7 = var8;
    var10 = null;
    var _closure1_slot8 = var10;
    var10 = false;
    var _closure1_slot9 = var10;
    var10 = 6;
    var14 = var12[var10];
    var17 = var13.bind(var1)(var14);
    var16 = var17.addOrientationDegreesChangeListener;
    var14 = function handleOrientationDegreesChange(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = 0;
            var2 = var6 >= var1;
            if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
            var1 = 5;
            var2 = var6 <= var1;
case 41:
            if(var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var1 = 355;
            var2 = var6 >= var1;
case 43:
            var3 = 'PORTRAIT';
            var4 = true;
            var1 = var3;
            if(!(var2 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 32:
            var2 = 85;
            var2 = var6 >= var2;
            if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = 95;
            var2 = var6 <= var5;
case 46:
            var1 = 'LANDSCAPE-RIGHT';
            if(!(var2 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 48:
            var2 = 175;
            var2 = var6 >= var2;
            if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 36:
            var5 = 185;
            var2 = var6 <= var5;
case 49:
            var1 = 'PORTRAITUPSIDEDOWN';
            if(!(var2 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 50:
            var2 = 265;
            var2 = var6 >= var2;
            if(!var2) { _fun0006_ip = 9; continue _fun0006 }
case 51:
            var5 = 275;
            var2 = var6 <= var5;
case 9:
            var1 = 'LANDSCAPE-LEFT';
            if(!(var2 !== var4)) { _fun0006_ip = 45; continue _fun0006 }
case 52:
            var1 = 'UNKNOWN';
case 45:
            var2 = 'LANDSCAPE-LEFT';
            if(!(var2 !== var1)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var2 = 'LANDSCAPE-RIGHT';
            if(!(var2 !== var1)) { _fun0006_ip = 53; continue _fun0006 }
case 55:
            if(!(var3 === var1)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var2 = _closure1_slot10;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0006_ip = 56; continue _fun0006;
case 53:
            var3 = _closure1_slot10;
            var2 = undefined;
            var1 = 'LANDSCAPE';
            var1 = var3.bind(var2)(var1);
case 56:
            var1 = undefined;
            return var1;
        }
    };
    var14 = var16.bind(var17)(var14);
    var14 = var12[var10];
    var16 = var13.bind(var1)(var14);
    var14 = var16.addOrientationListener;
    var14 = var14.bind(var16)(var7);
    var10 = var12[var10];
    var13 = var13.bind(var1)(var10);
    var10 = var13.getInitialOrientation;
    var10 = var10.bind(var13)();
    var10 = var7.bind(var1)(var10);
    var14 = var15.addEventListener;
    var13 = 'change';
    var10 = function applyLockStateOnAppActive(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot7;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var4 = var2.orientationLock;
            var3 = 'active';
            var2 = arg1;
            var2 = var3 === var2;
            if(!var2) { _fun0007_ip = 3; continue _fun0007 }
case 58:
            var3 = null;
            var2 = var3 != var4;
case 3:
            if(!var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var3 = _closure1_slot13;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var2)(var4, var1);
case 59:
            var1 = undefined;
            return var1;
        }
    };
    var10 = var14.bind(var15)(var13, var10);
    var10 = 7;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/device/native/DeviceOrientation.tsx';
    var10 = var11.bind(var12)(var10);
    var3['OrientationType'] = var9;
    var3['useStore'] = var8;
    var3['handleOrientationChange'] = var7;
    var3['unlockOrientation'] = var6;
    var3['lockOrientation'] = var5;
    var3['lockOrientationForiOS'] = var4;
    var4 = function() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot7;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var5 = var3.orientation;
            var6 = var3.orientationLock;
            var3 = null;
            var4 = var3 != var6;
            if(!var4) { _fun0008_ip = 61; continue _fun0008 }
case 37:
            var7 = _closure1_slot6;
            var3 = var7.includes;
            var4 = var3.bind(var7)(var6);
case 61:
            var3 = _closure1_slot5;
            var3 = var3.LANDSCAPE;
            if(!(var5 === var3)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var3 = 'LANDSCAPE';
            if(!(var3 === var6)) { _fun0008_ip = 64; continue _fun0008 }
case 62:
            var3 = _closure1_slot5;
            var3 = var3.PORTRAIT;
            var3 = var5 !== var3;
            if(var3) { _fun0008_ip = 7; continue _fun0008 }
case 65:
            var3 = var4;
case 7:
            if(var3) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var7 = var6[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var7);
            var7 = var8.lockToLandscapeLeft;
            var7 = var7.bind(var8)();
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.unlockAllOrientations;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot0;
            var3 = 4;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.batchUpdates;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.LANDSCAPE;
                var1['orientation'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _fun0008_ip = 66; continue _fun0008;
case 64:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 6;
            var7 = var5[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var7);
            var7 = var8.lockToPortrait;
            var7 = var7.bind(var8)();
            var3 = var5[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.unlockAllOrientations;
            var3 = var3.bind(var6)();
            var3 = _closure1_slot0;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var4 = _closure1_slot5;
                var4 = var4.PORTRAIT;
                var1['orientation'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 66:
            var1 = undefined;
            return var1;
        }
    };
    var3['toggleOrientation'] = var4;
    var4 = function getOrientation() {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.orientation;
        return var1;
    };
    var3['getOrientation'] = var4;
    var4 = function getOrientationLock() {
        var2 = _closure1_slot7;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.orientationLock;
        return var1;
    };
    var3['getOrientationLock'] = var4;
    var4 = function useOrientation() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.orientation;
        return var1;
    };
    var3['useOrientation'] = var4;
    var4 = function useOrientationListener(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = var3.subscribe;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useOrientationListener'] = var4;
    var2 = function restoreDefaultOrientation() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIpadOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0009_ip = 68; continue _fun0009 }
case 70:
            var4 = _closure1_slot7;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var4 = var3.orientationLock;
            var3 = 'PORTRAIT';
            if(!(var3 === var4)) { _fun0009_ip = 68; continue _fun0009 }
case 50:
            return var1;
case 68:
            var4 = _closure1_slot12;
            var3 = {};
            var5 = false;
            var3['unlockAfterRotatingToPreviousLock'] = var5;
            var3 = var4.bind(var1)(var3);
            var2 = _closure1_slot14;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var3['restoreDefaultOrientation'] = var2;
    return var1;
})();