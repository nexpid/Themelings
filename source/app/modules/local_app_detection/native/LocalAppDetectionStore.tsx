// app/modules/local_app_detection/native/LocalAppDetectionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Consents;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = false;
    var4['detected'] = var8;
    var4['lastScannedAt'] = var1;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = {};
    var4['apps'] = var8;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function LocalAppDetectionStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var10 = new Array(2);
                var10[0] = var1;
                var1 = {};
                var7 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['POST_CONNECTION_OPEN'] = var7;
                var7 = function LOCAL_APP_DETECTION_COMPLETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLocalAppDetectionComplete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['LOCAL_APP_DETECTION_COMPLETE'] = var7;
                var10[1] = var1;
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 124; continue _fun0005 }
 111:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 158; continue _fun0005;
 124:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 158:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = null;
                if(!(var1 == var2)) { _fun0006_ip = 19; continue _fun0006 }
 12:
                var2 = _closure1_slot12;
 19:
                _closure1_slot12 = var2;
                var2 = var3.waitFor;
                var1 = _closure1_slot9;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAppState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.getUserAgnosticState;
                var1 = var1.bind(var2)();
                var2 = var1.apps;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 39; continue _fun0007 }
 32:
                var1 = _closure1_slot11;
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isAppInstalled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = this;
                var3 = _closure1_slot9;
                var2 = var3.hasConsented;
                var1 = _closure1_slot10;
                var1 = var1.PERSONALIZATION;
                var1 = var2.bind(var3)(var1);
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0008_ip = 60; continue _fun0008 }
 40:
                var3 = var4.getAppState;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var1 = var2.detected;
 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handlePostConnectionOpen';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var10 = this;
                var4 = new Array(0);
                var5 = _closure1_slot13;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var3 = var3.ALL_DETECTABLE_APP_NAMES;
                var9 = var5.bind(var1)(var3);
                var5 = var9.bind(var1)();
                var3 = var5.done;
                var8 = global;
                var7 = 86400000;
                var6 = null;
                if(var3) { _fun0009_ip = 155; continue _fun0009 }
 69:
                var11 = var5.value;
                var3 = var10.getAppState;
                var12 = var3.bind(var10)(var11);
                var3 = var12.lastScannedAt;
                var3 = var6 == var3;
                if(var3) { _fun0009_ip = 127; continue _fun0009 }
 98:
                var14 = var8.Date;
                var13 = var14.now;
                var13 = var13.bind(var14)();
                var12 = var12.lastScannedAt;
                var12 = var13 - var12;
                var3 = var12 > var7;
 127:
                if(!var3) { _fun0009_ip = 140; continue _fun0009 }
 130:
                var3 = var4.push;
                var3 = var3.bind(var4)(var11);
 140:
                var11 = var9.bind(var1)();
                var3 = var11.done;
                var5 = var11;
                if(!var3) { _fun0009_ip = 69; continue _fun0009 }
 155:
                var5 = var4.length;
                var3 = 0;
                if(!(var5 > var3)) { _fun0009_ip = 197; continue _fun0009 }
 166:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.detectLocalApps;
                var2 = var2.bind(var3)(var4);
 197:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleLocalAppDetectionComplete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = global;
                var4 = var1.Object;
                var3 = var4.entries;
                var2 = arg1;
                var2 = var2.result;
                var10 = var3.bind(var4)(var2);
                var2 = var10.length;
                var9 = 0;
                if(!(var9 !== var2)) { _fun0010_ip = 154; continue _fun0010 }
 39:
                var2 = var1.Date;
                var1 = var2.now;
                var8 = var1.bind(var2)();
                var3 = {};
                var14 = _closure1_slot12;
                var15 = var3;
                var1 = copyDataProperties(var15, var14);
                var1 = var10.length;
                var4 = var9 < var1;
                var1 = undefined;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if(!var4) { _fun0010_ip = 148; continue _fun0010 }
 92:
                var11 = var10[var5];
                var4 = _closure1_slot3;
                var4 = var4.bind(var1)(var11, var7);
                var12 = var4[var9];
                var13 = var4[var6];
                var11 = var3.apps;
                var4 = {};
                var4['detected'] = var13;
                var4['lastScannedAt'] = var8;
                var11[var12] = var4;
                var5 = var5 + 1;
                var4 = var10.length;
                if(var5 < var4) { _fun0010_ip = 92; continue _fun0010 }
 148:
                _closure1_slot12 = var3;
                return var1;
 154:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'DEV_resetState';
        var5['key'] = var7;
        var6 = function value() {
            var2 = {};
            var1 = {};
            var2['apps'] = var1;
            _closure1_slot12 = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 'AppDetectionStore';
    var2['displayName'] = var4;
    var2['persistKey'] = var4;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/local_app_detection/native/LocalAppDetectionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();