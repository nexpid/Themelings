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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
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
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EventEmitter;
    var2 = function(arg1) {
        var4 = function UploaderBase() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var3);
                _fun0005_ip = 41; continue _fun0005;
case 39:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var3)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 41:
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
case 0:
                        var2 = _closure3_slot0;
                        var3 = arg1;
                        var2['_cancel'] = var3;
                        var2 = var2.alreadyStarted;
                        if(var2) { _fun0006_ip = 40; continue _fun0006 }
case 42:
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var3 = var5._file;
                        var2 = 'start';
                        var2 = var4.bind(var5)(var2, var3);
case 40:
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
case 0:
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
                        if(!(var9 != var10)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                        var10 = _closure3_slot0;
                        var10 = var10._file;
                        var10 = var10.items;
                        if(!(var9 != var10)) { _fun0007_ip = 43; continue _fun0007 }
case 45:
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
case 43:
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
case 0:
                        var1 = arg1;
                        var7 = var1.code;
                        var6 = var1.reason;
                        var5 = var1.body;
                        var2 = _closure3_slot0;
                        var3 = var2.clearProcessingMessageInterval;
                        var3 = var3.bind(var2)();
                        var2 = var2._aborted;
                        if(var2) { _fun0008_ip = 46; continue _fun0008 }
case 47:
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
case 46:
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
                var2 = {'id': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
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
case 0:
                    var1 = arg2;
                    var1 = var1.currentSize;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0009_ip = 31; continue _fun0009 }
case 29:
                    var2 = var1;
case 31:
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
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 48; continue _fun0010 }
case 49:
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
                    if(var17) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var8 = var8.item;
                    var17 = var9 == var8;
                    var3 = undefined;
                    if(var17) { _fun0010_ip = 50; continue _fun0010 }
case 52:
                    var3 = var8.target;
case 50:
                    var7 = var6.bind(var7)(var3);
                    var2 = var7;
                    var3 = var4.files;
                    var6 = var3.length;
                    var3 = var7.getMaxAttachmentsCount;
                    var3 = var3.bind(var7)();
                    if(!(!(var6 > var3))) { _fun0010_ip = 53; continue _fun0010 }
case 54:
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
                    if(var3) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                    var3 = var12;
                    var14 = var3.value;
case 57: // try_start_0
                    var6 = var14;
                    var3 = var6.reactNativeCompressAndExtractData;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=248);
case 58:
                    return var3;
case 59:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                    var17 = var14;
                    var6 = var17.isCancelled;
                    var6 = var6.bind(var17)();
                    if(var6) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                    var6 = var14;
                    var6 = var6.currentSize;
                    var15 = var6;
                    var17 = var9 != var6;
                    var6 = 0;
                    if(!var17) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                    var6 = var15;
case 64:
                    if(!(var10 !== var6)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var6 = var14;
                    var6 = var6.currentSize;
                    var16 = var6;
                    var6 = var9 != var6;
                    var17 = 0;
                    if(!var6) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var17 = var16;
case 68:
                    var19 = var2;
                    var18 = var19.getMaxFileSize;
                    var6 = var14;
                    var6 = var6.channelId;
                    var6 = var18.bind(var19)(var6);
                    if(!(!(var17 > var6))) { _fun0010_ip = 70; continue _fun0010 }
case 71: // try_end0
                    _fun0010_ip = 72; continue _fun0010;
case 70: // try_start_1
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
case 73: // try_end1
                    var6 = false;
                    return var6;
case 66: // try_start_2
                    var17 = var4._handleError;
                    var6 = {};
                    var18 = _closure1_slot9;
                    var18 = var18.ENTITY_EMPTY;
                    var6['code'] = var18;
                    var6 = var17.bind(var4)(var6);
case 74: // try_end2
                    var6 = false;
                    return var6;
case 62: // try_start_3
                    var18 = _closure1_slot11;
                    var17 = var18.log;
                    var6 = var14;
                    var19 = var6.id;
                    var6 = var8.HermesInternal;
                    var6 = var6.concat;
                    var6 = var6.bind(var7)(var19);
                    var6 = var17.bind(var18)(var6);
case 72: // try_end3
                    var6 = var13;
                    var6 = var6.bind(var11)();
                    var12 = var6;
                    var6 = var6.done;
                    if(var6) { _fun0010_ip = 55; continue _fun0010 }
case 75:
                    _fun0010_ip = 56; continue _fun0010;
case 60:
                    return var3;
case 76: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=5);
                    var3 = var4._handleException;
                    var3 = var3.bind(var4)(var6);
                    var3 = false;
                    return var3;
case 55:
                    var3 = var4._fileSize;
                    var3 = var3.bind(var4)();
                    var6 = var2;
                    var2 = var6.getMaxTotalAttachmentSize;
                    var2 = var2.bind(var6)();
                    var2 = var3 > var2;
                    if(!var2) { _fun0010_ip = 77; continue _fun0010 }
case 78:
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
case 77:
                    var2 = !var2;
                    return var2;
case 53:
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
case 48:
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
            var2 = this;
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
            var6 = var1.bind(var2)();
            var7 = _closure1_slot11;
            var3 = var7.log;
            var1 = var2.files;
            var15 = var1.length;
            var13 = var2.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var10 = var1.concat;
            var18 = 'setUploadingTextForUI - total content: ';
            var16 = ' bytes and ';
            var14 = ' attachments for ';
            var17 = var6;
            var1 = var18[var10](var17, var16, var15, var14, var13, var12);
            var1 = var3.bind(var7)(var1);
            var1 = {};
            var16 = var2._file;
            var17 = var1;
            var3 = copyDataProperties(var17, var16);
            var3 = 'totalPostCompressionSize';
            var1[var3] = var6;
            var3 = 'currentSize';
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
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg2;
                    var1 = var1.loaded;
                    var2 = null;
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0011_ip = 31; continue _fun0011 }
case 29:
                    var2 = var1;
case 31:
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = this;
                var3 = var2.processingMessageChangeInterval;
                var1 = null;
                if(!(var1 != var3)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var1 = global;
                var4 = var1.clearInterval;
                var3 = var2.processingMessageChangeInterval;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2['processingMessageChangeInterval'] = var1;
case 79:
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
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
                if(var1) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var1 = true;
                var2['_aborted'] = var1;
                var3 = var2._cancel;
                var1 = null;
                if(!(var1 != var3)) { _fun0013_ip = 83; continue _fun0013 }
case 51:
                var1 = var3.call;
                var1 = var1.bind(var3)(var2);
case 83:
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
case 81:
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 84; continue _fun0014 }
case 85:
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
                    if(!(var3 != var6)) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                    var3 = var6.isCancelled;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0014_ip = 86; continue _fun0014 }
case 88:
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
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var7.bind(var2)(var3);
                    var2 = var3.cancelGetAttachmentFile;
                    var2 = var2.bind(var3)(var6);
                    SaveGenerator(address=282);
case 89:
                    return var2;
case 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                    var3 = var6.cancel;
                    var3 = var3.bind(var6)();
                    var7 = var4.emit;
                    var6 = var4._file;
                    var3 = 'cancel-upload-item';
                    var3 = var7.bind(var4)(var3, var6);
                    var3 = var4.files;
                    var3 = var3.length;
                    if(!(var5 === var3)) { _fun0014_ip = 86; continue _fun0014 }
case 93:
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                    _fun0014_ip = 86; continue _fun0014;
case 91:
                    return var2;
case 86:
                    var2 = undefined;
                    return var2;
case 84:
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
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var3 = var2._cancel;
                var1 = null;
                if(!(var1 == var3)) { _fun0015_ip = 83; continue _fun0015 }
case 80:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['_lastUpdate'] = var1;
                var1 = 0;
                var2['_loaded'] = var1;
                var1 = {'id': null, 'currentSize': 0, 'totalPreCompressionSize': 0, 'compressionProgress': 0, 'progress': 0, 'rate': 0, 'hasImage': false, 'hasVideo': false, 'attachmentsCount': 0};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = arg1;
                var1['items'] = var3;
                var2['_file'] = var1;
                var1 = undefined;
                return var1;
case 83:
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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/uploader/UploaderBase.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();