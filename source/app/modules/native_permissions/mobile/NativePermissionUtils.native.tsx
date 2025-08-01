// app/modules/native_permissions/mobile/NativePermissionUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var4 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var4;
        var _closure1_slot2 = var6;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 45:
                if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
                var2 = var3.@@iterator;
 54:
                if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
                var7 = var3.constructor;
 162:
                var10 = var9;
                if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
                var7 = var3.constructor;
                var10 = var7.name;
 178:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
                var9 = _closure1_slot14;
                var7 = var9.bind(var8)(var3, var8);
 246:
                _fun0002_ip = 264; continue _fun0002;
 248:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 264:
                var6 = var7;
                _fun0002_ip = 282; continue _fun0002;
 269:
                var7 = _closure1_slot14;
                var6 = var7.bind(var8)(var3, var8);
 282:
                var4 = var6;
                if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
                _closure2_slot0 = var4;
 329:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                        _fun0003_ip = 67; continue _fun0003;
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
 342:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function _isNativeReflectConstruct() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
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
 70: // try_end0
                _fun0005_ip = 74; continue _fun0005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
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
        var1 = function combineStatuses() {
            var1 = undefined;
            var4 = _closure1_slot17;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot16 = var1;
        var1 = function _combineStatuses() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot8;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 108; continue _fun0006 }
 7:
                        var4 = _closure1_slot13;
                        var7 = undefined;
                        var3 = arg1;
                        var6 = var4.bind(var7)(var3);
                        var4 = var6.bind(var7)();
                        var3 = var4.done;
                        var5 = var4;
                        if(var3) { _fun0006_ip = 95; continue _fun0006 }
 39:
                        var3 = var5.value;
                        var3 = var3.bind(var7)();
                        SaveGenerator(address=52);
 50:
                        return var3;
 52:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0006_ip = 92; continue _fun0006 }
 58:
                        var4 = _closure1_slot11;
                        var4 = var4.AUTHORIZED;
                        if(!(var3 === var4)) { _fun0006_ip = 89; continue _fun0006 }
 72:
                        var8 = var6.bind(var7)();
                        var4 = var8.done;
                        var5 = var8;
                        if(var4) { _fun0006_ip = 95; continue _fun0006 }
 87:
                        _fun0006_ip = 39; continue _fun0006;
 89:
                        return var3;
 92:
                        return var3;
 95:
                        var2 = _closure1_slot11;
                        var2 = var2.AUTHORIZED;
                        return var2;
 108:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot17 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot17 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 6;
        var4 = var6[var2];
        var2 = metroImportAll;
        var2 = var2.bind(var1)(var4);
        var _closure1_slot9 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var9 = var2.NativeModules;
        var _closure1_slot10 = var9;
        var2 = var2.Platform;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.NativePermissionTypes;
        var4 = var4.NativePermissionStatus;
        var _closure1_slot11 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot12 = var4;
        var11 = 10;
        var4 = var6[var11];
        var10 = var5.bind(var1)(var4);
        var4 = var10.isAndroid;
        var10 = var4.bind(var10)();
        if(!var10) { _fun0001_ip = 339; continue _fun0001 }
 320:
        var2 = var2.constants;
        var4 = var2.Version;
        var2 = 28;
        var10 = var4 <= var2;
 339:
        var2 = 17;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var4 = var2.NativePermissionBaseUtils;
        var2 = function(arg1) {
            var4 = function NativePermissionIOSUtils() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot6;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0007_ip = 105; continue _fun0007;
 69:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
 105:
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
                }
            };
            var _closure2_slot0 = var4;
            var5 = _closure1_slot7;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot4;
            var5 = {};
            var1 = 'requestPermissionCore';
            var5['key'] = var1;
            var1 = function value(arg1, arg2) {
                var5 = this;
                var4 = var5.performRequest;
                var1 = _closure2_slot0;
                var3 = var1.requestPermissionLookup;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(6);
            var1[0] = var5;
            var5 = {};
            var7 = 'hasPermissionCore';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var5 = this;
                var4 = var5.performRequest;
                var1 = _closure2_slot0;
                var3 = var1.hasPermissionLookup;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'performRequest';
            var5['key'] = var7;
            var7 = function value(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var7 = arg2;
                    var4 = this;
                    var1 = arg1;
                    var3 = var1[var7];
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 39; continue _fun0008 }
 19:
                    var2 = var4.requestAuthorization;
                    var1 = arg3;
                    var1 = var2.bind(var4)(var7, var3, var1);
                    _fun0008_ip = 143; continue _fun0008;
 39:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var10 = 'NativePermissionUtils';
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var4 = var5.error;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Unable to locate permission type ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    var2 = false;
                    var1 = var3.bind(var4)(var2);
 143:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'didHavePermission';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var1 = this;
                var3 = var1.storage;
                var2 = var3.hasPermission;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'openSettings';
            var5['key'] = var7;
            var7 = function value() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'openAlertModal';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var1 = arg1;
                var8 = var1.body;
                var7 = var1.onConfirm;
                var4 = _closure1_slot9;
                var3 = var4.lazy;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 14;
                    var2 = var1[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = 13;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var3.bind(var4)(var1);
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 15;
                var3 = var13[var1];
                var1 = undefined;
                var5 = var12.bind(var1)(var3);
                var4 = var5.openAlert;
                var3 = _closure1_slot12;
                var2 = {};
                var9 = 16;
                var10 = var13[var9];
                var10 = var12.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.sMFVra;
                var9 = var10.bind(var11)(var9);
                var2['title'] = var9;
                var2['body'] = var8;
                var2['onConfirm'] = var7;
                var3 = var3.bind(var1)(var6, var2);
                var2 = 'permission-denied';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5['value'] = var6;
            var1[5] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var2 = var2.bind(var1)(var4);
        var4 = {};
        var13 = var8.CAMERA;
        if(var10) { _fun0001_ip = 392; continue _fun0001 }
 378:
        var12 = var9.NativePermissionManager;
        var12 = var12.requestCameraAuthorization;
        _fun0001_ip = 397; continue _fun0001;
 392:
        var12 = function() {
            var3 = _closure1_slot16;
            var1 = _closure1_slot10;
            var2 = var1.NativePermissionManager;
            var4 = var2.requestExternalStorageAuthorization;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = var1.NativePermissionManager;
            var1 = var1.requestCameraAuthorization;
            var2[1] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
 397:
        var4[var13] = var12;
        var13 = var8.AUDIO;
        var12 = var6[var11];
        var14 = var5.bind(var1)(var12);
        var12 = var14.isAndroid;
        var12 = var12.bind(var14)();
        if(var12) { _fun0001_ip = 443; continue _fun0001 }
 429:
        var12 = var9.NativePermissionManager;
        var12 = var12.requestMicrophoneAuthorization;
        _fun0001_ip = 448; continue _fun0001;
 443:
        var12 = function() {
            var3 = _closure1_slot16;
            var1 = _closure1_slot10;
            var2 = var1.NativePermissionManager;
            var4 = var2.requestMicrophoneAuthorization;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = var1.NativePermissionManager;
            var1 = var1.requestModifyAudioAuthorization;
            var2[1] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
 448:
        var4[var13] = var12;
        var13 = var8.PHOTOS;
        var12 = var9.NativePermissionManager;
        var12 = var12.requestPhotoAuthorization;
        var4[var13] = var12;
        var13 = var8.CONTACTS;
        var12 = var9.NativePermissionManager;
        var12 = var12.requestContactsAuthorization;
        var4[var13] = var12;
        var13 = var8.INPUT_MONITORING;
        var12 = function() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = _closure1_slot11;
            var1 = var1.AUTHORIZED;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4[var13] = var12;
        var2['requestPermissionLookup'] = var4;
        var4 = {};
        var12 = var8.CAMERA;
        if(var10) { _fun0001_ip = 548; continue _fun0001 }
 534:
        var10 = var9.NativePermissionManager;
        var10 = var10.hasCameraAuthorization;
        _fun0001_ip = 553; continue _fun0001;
 548:
        var10 = function() {
            var3 = _closure1_slot16;
            var1 = _closure1_slot10;
            var2 = var1.NativePermissionManager;
            var4 = var2.hasExternalStorageAuthorization;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = var1.NativePermissionManager;
            var1 = var1.hasCameraAuthorization;
            var2[1] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
 553:
        var4[var12] = var10;
        var10 = var8.AUDIO;
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var11 = var11.bind(var12)();
        if(var11) { _fun0001_ip = 599; continue _fun0001 }
 585:
        var9 = var9.NativePermissionManager;
        var9 = var9.hasMicrophoneAuthorization;
        _fun0001_ip = 604; continue _fun0001;
 599:
        var9 = function() {
            var3 = _closure1_slot16;
            var1 = _closure1_slot10;
            var2 = var1.NativePermissionManager;
            var4 = var2.hasMicrophoneAuthorization;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = var1.NativePermissionManager;
            var1 = var1.hasModifyAudioAuthorization;
            var2[1] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
 604:
        var4[var10] = var9;
        var8 = var8.INPUT_MONITORING;
        var7 = function() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = _closure1_slot11;
            var1 = var1.AUTHORIZED;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var4[var8] = var7;
        var2['hasPermissionLookup'] = var4;
        var4 = var2.prototype;
        var4 = Object.create(var4, {constructor: {value: var2}});
        var18 = var4;
        var2 = new var18[var2](var17);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 18;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/native_permissions/mobile/NativePermissionUtils.native.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();