// app/lib/uploader/native/CloudUploader.tsx
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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var9 = var4.NativeEventEmitter;
    var4 = var4.NativeModules;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.AbortCodes;
    var _closure1_slot10 = var10;
    var8 = var8.NOOP;
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
    var _closure1_slot12 = var10;
    var8 = var8.FileUploadErrorTypes;
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var6[var8];
    var11 = var7.bind(var1)(var8);
    var8 = var11.prototype;
    var10 = Object.create(var8, {constructor: {value: var11}});
    var14 = 'CloudUploader(Native).tsx';
    var15 = var10;
    var8 = new var15[var11](var14, var13);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot14 = var8;
    var14 = var4.MediaManager;
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var15 = var8;
    var4 = new var15[var9](var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot15 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function CloudUploader(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot4;
                var2 = _closure2_slot2;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot7;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 41; continue _fun0005;
case 39:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 41:
                var1 = var2.bind(var3)(var4, var1);
                var2 = global;
                var3 = var2.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var13 = var4;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['mediaEventSubscriptions'] = var3;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var13 = var3;
                var2 = new var13[var2](var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['uploadItems'] = var2;
                var2 = new Array(0);
                var1['preCompressionFileSizes'] = var2;
                return var1;
            }
        };
        var _closure2_slot2 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var7 = 'uploadFiles';
        var5['key'] = var7;
        var8 = _closure1_slot3;
        var1 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var _closure4_slot0 = var5;
                    var7 = var3;
                    var _closure4_slot1 = var3;
                    var9 = undefined;
                    var _closure4_slot3 = var9;
                    var _closure4_slot4 = var9;
                    var2 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var _closure4_slot2 = var5;
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 11;
                    var3 = var10[var3];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.backgroundTaskIdentifierInvalid;
                    _closure4_slot3 = var3;
                    var10 = var5.once;
                    var8 = _closure1_slot3;
                    var3 = function* () {
                        var1 = function* anon_0_() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                                var4 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var7 = 11;
                                var2 = var10[var7];
                                var3 = undefined;
                                var8 = var4.bind(var3)(var2);
                                var6 = var8.startBackgroundTask;
                                var2 = {};
                                var9 = _closure1_slot0;
                                var4 = 12;
                                var11 = var10[var4];
                                var11 = var9.bind(var3)(var11);
                                var13 = var11.intl;
                                var12 = var13.string;
                                var11 = var10[var4];
                                var11 = var9.bind(var3)(var11);
                                var11 = var11.t;
                                var11 = var11.B/HSDQ;
                                var11 = var12.bind(var13)(var11);
                                var2['title'] = var11;
                                var11 = var10[var4];
                                var11 = var9.bind(var3)(var11);
                                var12 = var11.intl;
                                var11 = var12.formatToPlainString;
                                var4 = var10[var4];
                                var4 = var9.bind(var3)(var4);
                                var4 = var4.t;
                                var10 = var4.D0noUl;
                                var9 = {};
                                var13 = _closure4_slot1;
                                var13 = var13.length;
                                var9['count'] = var13;
                                var9 = var11.bind(var12)(var10, var9);
                                var2['content'] = var9;
                                var2 = var6.bind(var8)(var2);
                                SaveGenerator(address=177);
case 46:
                                return var2;
case 47:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                                _closure4_slot3 = var2;
                                var6 = _closure4_slot2;
                                var6 = var6._aborted;
                                if(!var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.endBackgroundTask;
                                var4 = _closure4_slot3;
                                var4 = var5.bind(var6)(var4);
case 50:
                                return var3;
case 48:
                                return var2;
case 44:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var8 = var8.bind(var9)(var3);
                    var3 = 'start';
                    var3 = var10.bind(var5)(var3, var8);
                    var10 = function onCompleteTask() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.endBackgroundTask;
                        var3 = _closure4_slot3;
                        var3 = var4.bind(var5)(var3);
                        var5 = _closure4_slot0;
                        var6 = var5.removeListener;
                        var4 = _closure4_slot4;
                        var3 = 'complete';
                        var3 = var6.bind(var5)(var3, var4);
                        var4 = var5.removeListener;
                        var3 = _closure4_slot4;
                        var2 = 'error';
                        var2 = var4.bind(var5)(var2, var3);
                        return var1;
                    };
                    _closure4_slot4 = var10;
                    var8 = var5.once;
                    var3 = 'error';
                    var3 = var8.bind(var5)(var3, var10);
                    var8 = var5.once;
                    var3 = 'complete';
                    var3 = var8.bind(var5)(var3, var10);
                    var3 = global;
                    var11 = var3.Promise;
                    var8 = var11.prototype;
                    var10 = Object.create(var8, {constructor: {value: var11}});
                    var24 = function(arg1, arg2) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = arg2;
                        var _closure5_slot1 = var2;
                        var4 = _closure4_slot0;
                        var5 = var4.once;
                        var3 = 'error';
                        var2 = function(arg1, arg2, arg3, arg4) {
                            var3 = _closure5_slot1;
                            var2 = {};
                            var1 = arg1;
                            var2['file'] = var1;
                            var1 = arg2;
                            var2['code'] = var1;
                            var1 = arg3;
                            var2['responseBody'] = var1;
                            var1 = arg4;
                            var2['reason'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var2 = var5.bind(var4)(var3, var2);
                        var3 = var4.once;
                        var2 = 'complete';
                        var1 = function() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var2 = _closure4_slot0;
                                var2 = var2._errored;
                                if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                                var3 = _closure5_slot0;
                                var1 = _closure4_slot0;
                                var2 = var1.files;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
case 52:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var25 = var10;
                    var8 = new var25[var11](var24, var23);
                    var2 = var8 instanceof Object ? var8 : var10;
case 54: // try_start_0
                    var5['files'] = var7;
                    var24 = _closure2_slot2;
                    var11 = function _superPropGet(arg1, arg2, arg3, arg4) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var5 = arg1;
                            var7 = arg3;
                            var _closure5_slot0 = var7;
                            var6 = _closure1_slot8;
                            var4 = _closure1_slot7;
                            var1 = 1;
                            var3 = 3;
                            var8 = var1 & var3;
                            var1 = var5;
                            if(!var8) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                            var1 = var5.prototype;
case 55:
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = 'upload';
                            var5 = var6.bind(var5)(var4, var1, var7);
                            var _closure5_slot1 = var5;
                            var1 = 2;
                            var3 = var1 & var3;
                            var1 = var5;
                            if(!var3) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                            var4 = 'function';
                            var3 = typeof var5;
                            var1 = var5;
                            if(!(var4 === var3)) { _fun0009_ip = 57; continue _fun0009 }
case 59:
                            var1 = function(arg1) {
                                var4 = _closure5_slot1;
                                var3 = var4.apply;
                                var2 = _closure5_slot0;
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
case 57:
                            return var1;
                        }
                    };
                    var23 = 'upload';
                    var21 = 3;
                    var25 = undefined;
                    var22 = var5;
                    var10 = var25[var11](var24, var23, var22, var21, var20);
                    var8 = new Array(1);
                    var8[0] = var7;
                    var8 = var10.bind(var9)(var8);
                    var8 = var5._file;
                    var7 = var7.length;
                    var8['attachmentsCount'] = var7;
                    var7 = var5._handleStart;
                    var7 = var7.bind(var5)(var9);
                    var13 = 0;
                    var8 = _closure1_slot16;
                    var7 = var5.files;
                    var7 = var8.bind(var9)(var7);
                    var14 = var7;
                    var7 = var7.bind(var9)();
                    var12 = var7;
                    var7 = var7.done;
                    var11 = 14;
                    var10 = 13;
                    if(var7) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var7 = var12;
                    var7 = var7.value;
                    var15 = var7;
                    var17 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var17 = var17.bind(var9)(var8);
                    var8 = var17.getFileSize;
                    var7 = var7.item;
                    var7 = var7.uri;
                    var7 = var8.bind(var17)(var7);
                    SaveGenerator(address=364);
case 62:
                    return var7;
case 63:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var17 = var5.preCompressionFileSizes;
                    var8 = var17.push;
                    var8 = var8.bind(var17)(var7);
                    var8 = var15;
                    var8['preCompressionSize'] = var7;
                    var17 = var13;
                    var18 = var17 + var7;
                    var13 = var18;
                    var17 = var5._file;
                    var17['totalPreCompressionSize'] = var18;
                    var17 = var5._file;
                    var17['currentSize'] = var18;
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var17 = var17[var11];
                    var19 = var18.bind(var9)(var17);
                    var18 = var19.getUploadTarget;
                    var17 = var8.item;
                    var17 = var17.target;
                    var20 = var18.bind(var19)(var17);
                    var16 = var20;
                    var19 = var3.Math;
                    var18 = var19.max;
                    var17 = var20.getMaxFileSize;
                    var8 = var8.channelId;
                    var17 = var17.bind(var20)(var8);
                    var8 = _closure1_slot12;
                    var8 = var18.bind(var19)(var17, var8);
                    if(!(!(var7 > var8))) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var17 = var13;
                    var18 = var16;
                    var8 = var18.getMaxTotalAttachmentSize;
                    var8 = var8.bind(var18)();
                    if(!(!(var17 > var8))) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var8 = var14;
                    var8 = var8.bind(var9)();
                    var12 = var8;
                    var8 = var8.done;
                    if(var8) { _fun0006_ip = 60; continue _fun0006 }
case 70:
                    _fun0006_ip = 61; continue _fun0006;
case 68:
                    var10 = var5._handleError;
                    var8 = {};
                    var11 = _closure1_slot10;
                    var11 = var11.ENTITY_TOO_LARGE;
                    var8['code'] = var11;
                    var11 = {};
                    var12 = _closure1_slot13;
                    var12 = var12.PRECOMPRESSION_SUM_TOO_LARGE;
                    var11['type'] = var12;
                    var8['reason'] = var11;
                    var8 = var10.bind(var5)(var8);
                    var8 = var2;
case 71: // try_end0
                    return var8;
case 66: // try_start_1
                    var10 = var5._handleError;
                    var8 = {};
                    var11 = _closure1_slot10;
                    var11 = var11.ENTITY_TOO_LARGE;
                    var8['code'] = var11;
                    var11 = {};
                    var12 = _closure1_slot13;
                    var12 = var12.PRECOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    var11['type'] = var12;
                    var8['reason'] = var11;
                    var8 = var10.bind(var5)(var8);
                    var8 = var2;
case 72: // try_end1
                    return var8;
case 64:
                    return var7;
case 60: // try_start_2
                    var10 = _closure1_slot14;
                    var8 = var10.log;
                    var13 = var5.id;
                    var7 = var3.HermesInternal;
                    var12 = var7.concat;
                    var11 = '';
                    var7 = ' queued';
                    var7 = var12.bind(var11)(var13, var7);
                    var7 = var8.bind(var10)(var7);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 15;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = var8.enqueue;
                    var4 = function() {
                        var1 = _closure4_slot0;
                        var2 = var1.startUpload;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    var4 = var2;
case 73: // try_end2
                    return var4;
case 74: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=3);
                    var7 = _closure1_slot14;
                    var6 = var7.log;
                    var10 = var5.id;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var8 = '';
                    var3 = ' failed in CloudUploader uploadFiles ';
                    var3 = var9.bind(var8)(var10, var3, var4);
                    var3 = var6.bind(var7)(var3);
                    var3 = var5._handleException;
                    var3 = var3.bind(var5)(var4);
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var1 = function uploadFiles() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'startUpload';
        var5['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                    var2 = undefined;
                    var8 = undefined;
                    var3 = var4._aborted;
                    if(var3) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var5 = var4._handleStart;
                    var3 = _closure1_slot11;
                    var3 = var5.bind(var4)(var3);
case 5: // try_start_0
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 16;
                    var3 = var9[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isAndroid;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                    var5 = var4.observeCompressionProgress;
                    var3 = var4.files;
                    var3 = var5.bind(var4)(var3);
case 79:
                    var3 = var4.compressAndCheckFileSize;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=116);
case 81:
                    return var3;
case 82:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    if(var3) { _fun0010_ip = 85; continue _fun0010 }
case 86: // try_end0
                    return var2;
case 85: // try_start_1
                    var5 = var4.setUploadingTextForUI;
                    var5 = var5.bind(var4)();
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 17;
                    var5 = var10[var5];
                    var11 = var9.bind(var2)(var5);
                    var10 = var4.files;
                    var9 = var4._recomputeProgress;
                    var5 = var9.bind;
                    var9 = var5.bind(var9)(var4);
                    var5 = true;
                    var5 = var11.bind(var2)(var10, var5, var9);
                    SaveGenerator(address=200);
case 87:
                    return var5;
case 51:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                    var9 = var4.files;
                    var10 = var9.length;
                    var9 = 0;
                    if(!(var9 !== var10)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                    var11 = var4.files;
                    var10 = var11.every;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.status;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 18;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.CloudUploadStatus;
                        var1 = var1.COMPLETED;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    if(var9) { _fun0010_ip = 92; continue _fun0010 }
case 93:
                    var9 = global;
                    var11 = var9.Error;
                    var9 = var11.prototype;
                    var10 = Object.create(var9, {constructor: {value: var11}});
                    var14 = 'Not all attachments were uploaded successfully';
                    var15 = var10;
                    var9 = new var15[var11](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    throw var9;
case 92:
                    var9 = var4._file;
                    var10 = var9.items;
                    var8 = var10;
                    var9 = null;
                    if(!(var9 != var10)) { _fun0010_ip = 94; continue _fun0010 }
case 61:
                    var9 = var8;
                    var8 = var9.forEach;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.item;
                        var1 = 100;
                        var2['progress'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
case 94:
                    var7 = {};
                    var13 = var4._file;
                    var14 = var7;
                    var8 = copyDataProperties(var14, var13);
                    var8 = 100;
                    var9 = 'progress';
                    var7[var9] = var8;
                    var4['_file'] = var7;
                    var8 = var4.emit;
                    var7 = var4._file;
                    var7 = var8.bind(var4)(var9, var7);
                    var9 = _closure1_slot14;
                    var8 = var9.log;
                    var11 = var4.id;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var10 = var7.concat;
                    var7 = 'All uploads complete for ';
                    var7 = var10.bind(var7)(var11);
                    var7 = var8.bind(var9)(var7);
                    var7 = var4._handleComplete;
                    var7 = var7.bind(var4)();
case 95: // try_end1
                    _fun0010_ip = 96; continue _fun0010;
case 90: // try_start_2
                    var8 = _closure1_slot14;
                    var7 = var8.log;
                    var10 = var4.id;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'All uploads cancelled for ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    var6 = var4._handleComplete;
                    var6 = var6.bind(var4)();
case 97: // try_end2
                    var6 = undefined;
                    return var6;
case 88:
                    return var5;
case 83:
                    return var3;
case 98: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=4);
                    var3 = var4._handleException;
                    var3 = var3.bind(var4)(var5);
                    _fun0010_ip = 96; continue _fun0010;
case 77:
                    var3 = var4._handleAborted;
                    var3 = var3.bind(var4)();
case 96:
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function startUpload() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'observeCompressionProgress';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var5 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = function cleanUp() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var4 = var2.mediaEventSubscriptions;
                    var3 = var4.get;
                    var2 = var2._file;
                    var2 = var2.id;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 99; continue _fun0011 }
case 52:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
case 99:
                    var1 = _closure3_slot0;
                    var4 = var1.mediaEventSubscriptions;
                    var3 = var4.delete;
                    var2 = var1._file;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var2 = var1.uploadItems;
                    var1 = var2.clear;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot1 = var3;
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var3 = var5.platform;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.UploadPlatform;
                    var2 = var2.REACT_NATIVE;
                    if(!(var3 === var2)) { _fun0012_ip = 100; continue _fun0012 }
case 4:
                    var2 = 0;
                    var5['compressionProgress'] = var2;
                    var2 = _closure3_slot0;
                    var4 = var2.uploadItems;
                    var3 = var4.set;
                    var2 = var5.uri;
                    var2 = var3.bind(var4)(var2, var5);
case 100:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var2.mediaEventSubscriptions;
            var3 = var4.set;
            var2 = var2._file;
            var2 = var2.id;
            var7 = _closure1_slot15;
            var6 = var7.addListener;
            var5 = 'compression-progress';
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.uri;
                    var4 = var1.progress;
                    var2 = _closure3_slot0;
                    var3 = var2.uploadItems;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var6);
                    if(!var2) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                    var2 = _closure3_slot0;
                    var5 = var2.uploadItems;
                    var3 = var5.get;
                    var3 = var3.bind(var5)(var6);
                    var3['compressionProgress'] = var4;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 20;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var4 = var6.meanBy;
                    var5 = var2.uploadItems;
                    var2 = var5.values;
                    var10 = var2.bind(var5)();
                    var2 = new Array(0);
                    var9 = 0;
                    var11 = var2;
                    var5 = arraySpread(var11, var10, var9);
                    var5 = 'compressionProgress';
                    var7 = var4.bind(var6)(var2, var5);
                    var4 = 100;
                    if(!(!(var7 >= var4))) { _fun0013_ip = 47; continue _fun0013 }
case 103:
                    var6 = _closure3_slot0;
                    var2 = {};
                    var10 = var6._file;
                    var11 = var2;
                    var8 = copyDataProperties(var11, var10);
                    var2[var5] = var7;
                    var6['_file'] = var2;
                    _fun0013_ip = 93; continue _fun0013;
case 47:
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var3)();
                    var2 = _closure3_slot0;
                    var2 = var2._file;
                    var6 = var2.items;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0013_ip = 104; continue _fun0013 }
case 105:
                    var3 = var6.forEach;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.item;
                        var1 = 100;
                        var2['compressionProgress'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var6)(var2);
case 104:
                    var3 = _closure3_slot0;
                    var2 = {};
                    var10 = var3._file;
                    var11 = var2;
                    var6 = copyDataProperties(var11, var10);
                    var2[var5] = var4;
                    var3['_file'] = var2;
case 93:
                    var4 = _closure3_slot0;
                    var3 = var4.emit;
                    var2 = var4._file;
                    var1 = 'compression-progress';
                    var1 = var3.bind(var4)(var1, var2);
case 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var5, var1);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/native/CloudUploader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();