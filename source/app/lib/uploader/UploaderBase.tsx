// app/lib/uploader/UploaderBase.tsx
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FileUploadErrorTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'UploaderBase.tsx';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EventEmitter;
    var2 = function(arg1) {
        var4 = function UploaderBase() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = this;
                var1 = _closure1_slot4;
                var5 = _closure2_slot2;
                var3 = undefined;
                var1 = var1.bind(var3)(var6, var5);
                var1 = _closure1_slot7;
                var11 = var1.bind(var3)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 64; continue _fun0005 }
 51:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var3);
                _fun0005_ip = 102; continue _fun0005;
 64:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var3)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
 102:
                var1 = var5.bind(var3)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = false;
                var1['_aborted'] = var5;
                var1['_errored'] = var5;
                var6 = new Array(0);
                var1['files'] = var6;
                var6 = 0;
                var1['_lastUpdate'] = var6;
                var1['_loaded'] = var6;
                var1['alreadyStarted'] = var5;
                var5 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = arg1;
                        var2['_cancel'] = var3;
                        var2 = var2.alreadyStarted;
                        if(var2) { _fun0006_ip = 51; continue _fun0006 }
 25:
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var3 = var5._file;
                        var2 = 'start';
                        var2 = var4.bind(var5)(var2, var3);
 51:
                        var2 = _closure3_slot0;
                        var1 = true;
                        var2['alreadyStarted'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleStart'] = var5;
                var5 = function(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var2 = arg1;
                        var7 = arg2;
                        var10 = arg3;
                        var _closure4_slot0 = var10;
                        var5 = global;
                        var3 = var5.Date;
                        var1 = var3.now;
                        var4 = var1.bind(var3)();
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.calculateProgress;
                        var3 = var3.bind(var6)(var2, var7);
                        var11 = var5.Math;
                        var9 = var11.floor;
                        var6 = _closure3_slot0;
                        var12 = var6._loaded;
                        var12 = var2 - var12;
                        var6 = var6._lastUpdate;
                        var13 = var4 - var6;
                        var6 = 1000;
                        var6 = var13 / var6;
                        var6 = var12 / var6;
                        var6 = var9.bind(var11)(var6);
                        var9 = null;
                        if(!(var9 != var10)) { _fun0007_ip = 168; continue _fun0007 }
 133:
                        var10 = _closure3_slot0;
                        var10 = var10._file;
                        var10 = var10.items;
                        if(!(var9 != var10)) { _fun0007_ip = 168; continue _fun0007 }
 153:
                        var9 = var10.forEach;
                        var8 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.item;
                            var3 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var3[var1];
                            var2['progress'] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var8 = var9.bind(var10)(var8);
 168:
                        var5 = _closure3_slot0;
                        var5['_lastUpdate'] = var4;
                        var5['_loaded'] = var2;
                        var2 = {};
                        var14 = var5._file;
                        var15 = var2;
                        var4 = copyDataProperties(var15, var14);
                        var4 = 'currentSize';
                        var2[var4] = var7;
                        var4 = 'progress';
                        var2[var4] = var3;
                        var3 = 'rate';
                        var2[var3] = var6;
                        var5['_file'] = var2;
                        var3 = var5.emit;
                        var2 = var5._file;
                        var2 = var3.bind(var5)(var4, var2);
                        return var1;
                    }
                };
                var1['_handleProgress'] = var5;
                var5 = function(arg1) {
                    var6 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3._handleError;
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot10;
                    var5 = var5.ERROR_SOURCE_UNKNOWN;
                    var4['type'] = var5;
                    var5 = var6.toString;
                    var5 = var5.bind(var6)();
                    var4['msg'] = var5;
                    var1['reason'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['_handleException'] = var5;
                var5 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.clearProcessingMessageInterval;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['_handleAborted'] = var5;
                var5 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var7 = var1.code;
                        var6 = var1.reason;
                        var5 = var1.body;
                        var2 = _closure3_slot0;
                        var3 = var2.clearProcessingMessageInterval;
                        var3 = var3.bind(var2)();
                        var2 = var2._aborted;
                        if(var2) { _fun0008_ip = 180; continue _fun0008 }
 48:
                        var2 = _closure3_slot0;
                        var1 = true;
                        var2['_errored'] = var1;
                        var4 = _closure1_slot11;
                        var3 = var4.log;
                        var1 = global;
                        var9 = var1.JSON;
                        var8 = var9.stringify;
                        var15 = var8.bind(var9)(var6);
                        var13 = var2.id;
                        var1 = var1.HermesInternal;
                        var10 = var1.concat;
                        var18 = '_handleError: ';
                        var16 = ' (';
                        var14 = ') for ';
                        var17 = var7;
                        var1 = var18[var10](var17, var16, var15, var14, var13, var12);
                        var1 = var3.bind(var4)(var1);
                        var4 = var2.emit;
                        var16 = var2._file;
                        var17 = 'error';
                        var18 = var2;
                        var15 = var7;
                        var14 = var5;
                        var13 = var6;
                        var1 = var18[var4](var17, var16, var15, var14, var13, var12);
                        var1 = var2.removeAllListeners;
                        var1 = var1.bind(var2)();
 180:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['_handleError'] = var5;
                var4 = function(arg1) {
                    var2 = _closure3_slot0;
                    var1 = var2.clearProcessingMessageInterval;
                    var1 = var1.bind(var2)();
                    var4 = _closure1_slot11;
                    var3 = var4.log;
                    var6 = var2.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = '_handleComplete for ';
                    var1 = var5.bind(var1)(var6);
                    var1 = var3.bind(var4)(var1);
                    var5 = var2.emit;
                    var4 = var2._file;
                    var3 = 'complete';
                    var1 = arg1;
                    var1 = var5.bind(var2)(var3, var4, var1);
                    var1 = var2.removeAllListeners;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['_handleComplete'] = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.uniqueId;
                var2 = 'Uploader';
                var2 = var4.bind(var5)(var2);
                var1['id'] = var2;
                var2 = {'id': null, 'name': '', 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                var4 = var1.id;
                var2['id'] = var4;
                var2['items'] = var3;
                var1['_file'] = var2;
                return var1;
            }
        };
        var _closure2_slot2 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = '_fileSize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var4 = var1.files;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg2;
                    var1 = var1.currentSize;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0009_ip = 23; continue _fun0009 }
 20:
                    var2 = var1;
 23:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var1 = 0;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var8 = 'compressAndCheckFileSize';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 690; continue _fun0010 }
 13:
                    var11 = undefined;
                    var2 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 11;
                    var3 = var7[var3];
                    var7 = var6.bind(var11)(var3);
                    var6 = var7.getUploadTarget;
                    var3 = var4.files;
                    var10 = 0;
                    var8 = var3[var10];
                    var9 = null;
                    var17 = var9 == var8;
                    var3 = undefined;
                    if(var17) { _fun0010_ip = 99; continue _fun0010 }
 79:
                    var8 = var8.item;
                    var17 = var9 == var8;
                    var3 = undefined;
                    if(var17) { _fun0010_ip = 99; continue _fun0010 }
 93:
                    var3 = var8.target;
 99:
                    var7 = var6.bind(var7)(var3);
                    var2 = var7;
                    var3 = var4.files;
                    var6 = var3.length;
                    var3 = var7.getMaxAttachmentsCount;
                    var3 = var3.bind(var7)();
                    if(!(!(var6 > var3))) { _fun0010_ip = 614; continue _fun0010 }
 137:
                    var7 = _closure1_slot11;
                    var6 = var7.log;
                    var18 = var4.id;
                    var8 = global;
                    var3 = var8.HermesInternal;
                    var17 = var3.concat;
                    var3 = 'compressing files for ';
                    var3 = var17.bind(var3)(var18);
                    var3 = var6.bind(var7)(var3);
                    var6 = _closure1_slot12;
                    var3 = var4.files;
                    var3 = var6.bind(var11)(var3);
                    var13 = var3;
                    var3 = var3.bind(var11)();
                    var12 = var3;
                    var3 = var3.done;
                    var7 = 'compressAndCheckFileSize() file has been cancelled for compression - ';
                    if(var3) { _fun0010_ip = 527; continue _fun0010 }
 223:
                    var3 = var12;
                    var14 = var3.value;
 231: // try_start_0
                    var6 = var14;
                    var3 = var6.reactNativeCompressAndExtractData;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=248);
 246:
                    return var3;
 248:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 506; continue _fun0010 }
 257:
                    var17 = var14;
                    var6 = var17.isCancelled;
                    var6 = var6.bind(var17)();
                    if(var6) { _fun0010_ip = 444; continue _fun0010 }
 276:
                    var6 = var14;
                    var6 = var6.currentSize;
                    var15 = var6;
                    var17 = var9 != var6;
                    var6 = 0;
                    if(!var17) { _fun0010_ip = 300; continue _fun0010 }
 297:
                    var6 = var15;
 300:
                    if(!(var10 !== var6)) { _fun0010_ip = 412; continue _fun0010 }
 304:
                    var6 = var14;
                    var6 = var6.currentSize;
                    var16 = var6;
                    var6 = var9 != var6;
                    var17 = 0;
                    if(!var6) { _fun0010_ip = 328; continue _fun0010 }
 325:
                    var17 = var16;
 328:
                    var19 = var2;
                    var18 = var19.getMaxFileSize;
                    var6 = var14;
                    var6 = var6.channelId;
                    var6 = var18.bind(var19)(var6);
                    if(!(!(var17 > var6))) { _fun0010_ip = 359; continue _fun0010 }
 354: // try_end0
                    _fun0010_ip = 483; continue _fun0010;
 359: // try_start_1
                    var17 = var4._handleError;
                    var6 = {};
                    var18 = _closure1_slot9;
                    var18 = var18.ENTITY_TOO_LARGE;
                    var6['code'] = var18;
                    var18 = {};
                    var19 = _closure1_slot10;
                    var19 = var19.POSTCOMPRESSION_INDIVIDUAL_FILE_TOO_LARGE;
                    var18['type'] = var19;
                    var6['reason'] = var18;
                    var6 = var17.bind(var4)(var6);
 407: // try_end1
                    var6 = false;
                    return var6;
 412: // try_start_2
                    var17 = var4._handleError;
                    var6 = {};
                    var18 = _closure1_slot9;
                    var18 = var18.ENTITY_EMPTY;
                    var6['code'] = var18;
                    var6 = var17.bind(var4)(var6);
 439: // try_end2
                    var6 = false;
                    return var6;
 444: // try_start_3
                    var18 = _closure1_slot11;
                    var17 = var18.log;
                    var6 = var14;
                    var19 = var6.id;
                    var6 = var8.HermesInternal;
                    var6 = var6.concat;
                    var6 = var6.bind(var7)(var19);
                    var6 = var17.bind(var18)(var6);
 483: // try_end3
                    var6 = var13;
                    var6 = var6.bind(var11)();
                    var12 = var6;
                    var6 = var6.done;
                    if(var6) { _fun0010_ip = 527; continue _fun0010 }
 501:
                    _fun0010_ip = 223; continue _fun0010;
 506:
                    return var3;
 509: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=5);
                    var3 = var4._handleException;
                    var3 = var3.bind(var4)(var6);
                    var3 = false;
                    return var3;
 527:
                    var3 = var4._fileSize;
                    var3 = var3.bind(var4)();
                    var6 = var2;
                    var2 = var6.getMaxTotalAttachmentSize;
                    var2 = var2.bind(var6)();
                    var2 = var3 > var2;
                    if(!var2) { _fun0010_ip = 608; continue _fun0010 }
 557:
                    var6 = var4._handleError;
                    var3 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.ENTITY_TOO_LARGE;
                    var3['code'] = var7;
                    var7 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.POSTCOMPRESSION_SUM_TOO_LARGE;
                    var7['type'] = var8;
                    var3['reason'] = var7;
                    var3 = var6.bind(var4)(var3);
                    var2 = 1;
 608:
                    var2 = !var2;
                    return var2;
 614:
                    var6 = _closure1_slot11;
                    var3 = var6.log;
                    var8 = var4.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'Too many attachments for ';
                    var2 = var7.bind(var2)(var8);
                    var2 = var3.bind(var6)(var2);
                    var3 = var4._handleError;
                    var2 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.TOO_MANY_ATTACHMENTS;
                    var2['code'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
 690:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function compressAndCheckFileSize() {
            var1 = undefined;
            var4 = _closure2_slot1;
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
        var7 = 'setUploadingTextForUI';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = this;
                var3 = var2.files;
                var4 = var3.length;
                var3 = 1;
                if(!(var3 === var4)) { _fun0011_ip = 47; continue _fun0011 }
 23:
                var3 = var2.files;
                var4 = 0;
                var3 = var3[var4];
                var5 = var3.filename;
                var3 = null;
                if(!(var3 == var5)) { _fun0011_ip = 128; continue _fun0011 }
 47:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 12;
                var6 = var9[var3];
                var5 = undefined;
                var6 = var8.bind(var5)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var3 = var9[var3];
                var3 = var8.bind(var5)(var3);
                var3 = var3.t;
                var5 = var3.D0noUl;
                var3 = {};
                var8 = var2.files;
                var8 = var8.length;
                var3['count'] = var8;
                var6 = var6.bind(var7)(var5, var3);
                _fun0011_ip = 144; continue _fun0011;
 128:
                var3 = var2.files;
                var3 = var3[var4];
                var6 = var3.filename;
 144:
                var5 = var2.files;
                var4 = var5.some;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isImage;
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var5 = var2.files;
                var3 = var5.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isVideo;
                    return var1;
                };
                var5 = var3.bind(var5)(var1);
                var1 = var2._fileSize;
                var7 = var1.bind(var2)();
                var8 = _closure1_slot11;
                var3 = var8.log;
                var1 = var2.files;
                var16 = var1.length;
                var14 = var2.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var11 = var1.concat;
                var19 = 'setUploadingTextForUI - total content: ';
                var17 = ' bytes and ';
                var15 = ' attachments for ';
                var18 = var7;
                var1 = var19[var11](var18, var17, var16, var15, var14, var13);
                var1 = var3.bind(var8)(var1);
                var1 = {};
                var17 = var2._file;
                var18 = var1;
                var3 = copyDataProperties(var18, var17);
                var3 = 'totalPostCompressionSize';
                var1[var3] = var7;
                var3 = 'currentSize';
                var1[var3] = var7;
                var3 = 'name';
                var1[var3] = var6;
                var3 = 'hasVideo';
                var1[var3] = var5;
                var3 = 'hasImage';
                var1[var3] = var4;
                var3 = var2.files;
                var4 = var3.length;
                var3 = 'attachmentsCount';
                var1[var3] = var4;
                var4 = var2.files;
                var3 = 'items';
                var1[var3] = var4;
                var2['_file'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = '_recomputeProgress';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var1 = var5._recomputeProgressTotal;
            var1 = var1.bind(var5)();
            var4 = var1.loaded;
            var3 = var1.total;
            var1 = var5._recomputeProgressByFile;
            var2 = var1.bind(var5)();
            var1 = var5._handleProgress;
            var1 = var1.bind(var5)(var4, var3, var2);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = '_recomputeProgressTotal';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var1 = var3._fileSize;
            var2 = var1.bind(var3)();
            var1 = {};
            var6 = var3.files;
            var5 = var6.reduce;
            var4 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg2;
                    var1 = var1.loaded;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0012_ip = 23; continue _fun0012 }
 20:
                    var2 = var1;
 23:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var3 = 0;
            var3 = var5.bind(var6)(var4, var3);
            var1['loaded'] = var3;
            var1['total'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = '_recomputeProgressByFile';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var _closure3_slot0 = var1;
            var3 = this;
            var4 = var3.files;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var2 = arg1;
                var4 = _closure3_slot0;
                var3 = var2.id;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.calculateProgress;
                var5 = var2.loaded;
                var2 = var2.currentSize;
                var2 = var6.bind(var7)(var5, var2);
                var4[var3] = var2;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = '_addAttachmentsToPayload';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var5 = arg2;
            var4 = {};
            var11 = arg1;
            var12 = var4;
            var1 = copyDataProperties(var12, var11);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
            var3 = var7[var1];
            var2 = undefined;
            var9 = var6.bind(var2)(var3);
            var8 = var9.get;
            var3 = new Array(0);
            var11 = var8.bind(var9)(var4, var5, var3);
            var3 = new Array(0);
            var10 = 0;
            var12 = var3;
            var10 = arraySpread(var12, var11, var10);
            var11 = arg3;
            var12 = var3;
            var8 = arraySpread(var12, var11, var10);
            var1 = var7[var1];
            var2 = var6.bind(var2)(var1);
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var5, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'clearProcessingMessageInterval';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var3 = var2.processingMessageChangeInterval;
                var1 = null;
                if(!(var1 != var3)) { _fun0013_ip = 42; continue _fun0013 }
 15:
                var1 = global;
                var4 = var1.clearInterval;
                var3 = var2.processingMessageChangeInterval;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2['processingMessageChangeInterval'] = var1;
 42:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'cancel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot11;
                var3 = var4.log;
                var6 = var2.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = 'cancel() for ';
                var1 = var5.bind(var1)(var6);
                var1 = var3.bind(var4)(var1);
                var1 = var2._aborted;
                if(var1) { _fun0014_ip = 122; continue _fun0014 }
 59:
                var1 = true;
                var2['_aborted'] = var1;
                var3 = var2._cancel;
                var1 = null;
                if(!(var1 != var3)) { _fun0014_ip = 89; continue _fun0014 }
 79:
                var1 = var3.call;
                var1 = var1.bind(var3)(var2);
 89:
                var4 = var2.files;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2._handleComplete;
                var1 = var1.bind(var2)();
 122:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'cancelItem';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 356; continue _fun0015 }
 18:
                    var _closure4_slot0 = var11;
                    var7 = _closure1_slot11;
                    var6 = var7.log;
                    var10 = var4.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var8 = 'Cancel called for ';
                    var5 = ' for item ';
                    var5 = var9.bind(var8)(var10, var5, var11);
                    var5 = var6.bind(var7)(var5);
                    var6 = var4.files;
                    var5 = var6.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0015_ip = 351; continue _fun0015 }
 107:
                    var3 = var6.isCancelled;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0015_ip = 351; continue _fun0015 }
 123:
                    var5 = var4.files;
                    var3 = var5.indexOf;
                    var11 = var3.bind(var5)(var6);
                    var7 = var4.files;
                    var3 = var7.slice;
                    var5 = 0;
                    var13 = var3.bind(var7)(var5, var11);
                    var3 = new Array(0);
                    var14 = var3;
                    var12 = 0;
                    var12 = arraySpread(var14, var13, var12);
                    var10 = var4.files;
                    var9 = var10.slice;
                    var7 = 1;
                    var7 = var11 + var7;
                    var13 = var9.bind(var10)(var7);
                    var14 = var3;
                    var7 = arraySpread(var14, var13, var12);
                    var4['files'] = var3;
                    var3 = {};
                    var13 = var4._file;
                    var14 = var3;
                    var7 = copyDataProperties(var14, var13);
                    var8 = var4.files;
                    var7 = 'items';
                    var3[var7] = var8;
                    var4['_file'] = var3;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.cancelGetAttachmentFile;
                    var2 = var2.bind(var3)(var6);
                    SaveGenerator(address=281);
 279:
                    return var2;
 281:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 348; continue _fun0015 }
 287:
                    var3 = var6.cancel;
                    var3 = var3.bind(var6)();
                    var7 = var4.emit;
                    var6 = var4._file;
                    var3 = 'cancel-upload-item';
                    var3 = var7.bind(var4)(var3, var6);
                    var3 = var4.files;
                    var3 = var3.length;
                    if(!(var5 === var3)) { _fun0015_ip = 351; continue _fun0015 }
 336:
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                    _fun0015_ip = 351; continue _fun0015;
 348:
                    return var2;
 351:
                    var2 = undefined;
                    return var2;
 356:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function cancelItem() {
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
        var1[9] = var5;
        var5 = {};
        var7 = 'upload';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var2 = this;
                var3 = var2._cancel;
                var1 = null;
                if(!(var1 == var3)) { _fun0016_ip = 98; continue _fun0016 }
 15:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['_lastUpdate'] = var1;
                var1 = 0;
                var2['_loaded'] = var1;
                var1 = {'id': null, 'name': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = arg1;
                var1['name'] = var3;
                var3 = arg2;
                var1['items'] = var3;
                var2['_file'] = var1;
                var1 = undefined;
                return var1;
 98:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var4 = 'Uploader.upload(...): An upload is already in progress.';
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/UploaderBase.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();