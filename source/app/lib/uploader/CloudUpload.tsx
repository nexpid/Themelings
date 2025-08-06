// app/lib/uploader/CloudUpload.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot9;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot8;
            var1 = _closure1_slot21;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot9;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = global;
    var10 = var4.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var10 = var9.bind(var1)(var5);
    var _closure1_slot7 = var10;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var6 = 9;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 12;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.AbortCodes;
    var _closure1_slot14 = var11;
    var6 = var6.AnalyticEvents;
    var _closure1_slot15 = var6;
    var6 = 13;
    var6 = var8[var6];
    var12 = var9.bind(var1)(var6);
    var6 = var12.prototype;
    var11 = Object.create(var6, {constructor: {value: var12}});
    var15 = 'CloudUpload.tsx';
    var16 = var11;
    var6 = new var16[var12](var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot16 = var6;
    var4 = var4.Error;
    var5 = var5.bind(var1)(var4);
    var4 = function(arg1) {
        var5 = function ResumableUploadError(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var2 = arguments[1];
                var8 = this;
                var7 = undefined;
                if(!(var2 === var7)) { _fun0003_ip = 17; continue _fun0003 }
 15:
                var2 = {};
 17:
                var3 = _closure1_slot6;
                var6 = _closure2_slot0;
                var3 = var3.bind(var7)(var8, var6);
                var10 = var2.cause;
                var11 = var2.response;
                var3 = var6.getErrorKind;
                var9 = null;
                var2 = var10;
                if(!(var9 == var2)) { _fun0003_ip = 144; continue _fun0003 }
 66:
                var12 = global;
                var14 = var12.Error;
                var15 = var9 == var11;
                var13 = undefined;
                if(var15) { _fun0003_ip = 88; continue _fun0003 }
 83:
                var13 = var11.text;
 88:
                var16 = var9 != var13;
                var15 = 'Unknown error';
                if(!var16) { _fun0003_ip = 104; continue _fun0003 }
 101:
                var15 = var13;
 104:
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = '';
                var21 = var13.bind(var12)(var15);
                var13 = var14.prototype;
                var13 = Object.create(var13, {constructor: {value: var14}});
                var22 = var13;
                var12 = new var22[var14](var21, var20);
                var2 = var12 instanceof Object ? var12 : var13;
 144:
                var3 = var3.bind(var6)(var2, var11);
                var2 = 'server_error';
                if(!(var2 !== var3)) { _fun0003_ip = 190; continue _fun0003 }
 160:
                var2 = global;
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var6 = '';
                var2 = ':';
                var2 = var12.bind(var6)(var4, var2, var3);
                _fun0003_ip = 256; continue _fun0003;
 190:
                var12 = var9 == var11;
                var6 = undefined;
                if(var12) { _fun0003_ip = 204; continue _fun0003 }
 199:
                var6 = var11.status;
 204:
                var9 = var9 != var6;
                var13 = 0;
                if(!var9) { _fun0003_ip = 216; continue _fun0003 }
 213:
                var13 = var6;
 216:
                var6 = global;
                var6 = var6.HermesInternal;
                var12 = var6.concat;
                var22 = '';
                var20 = ':';
                var18 = ':status_';
                var21 = var4;
                var19 = var3;
                var17 = var13;
                var2 = var22[var12](var21, var20, var19, var18, var17, var16);
 256:
                var6 = _closure1_slot20;
                var5 = _closure2_slot0;
                var1 = new Array(2);
                var1[0] = var2;
                var9 = {};
                var9['cause'] = var10;
                var1[1] = var9;
                var1 = var6.bind(var7)(var8, var5, var1);
                var5 = 'ResumableUploadError';
                var1['name'] = var5;
                var1['phase'] = var4;
                var1['kind'] = var3;
                var1['messageShort'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot10;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot7;
        var1 = {};
        var2 = 'canRetry';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var3 = var2.kind;
                var1 = 'server_error';
                var1 = var1 === var3;
                if(var1) { _fun0004_ip = 36; continue _fun0004 }
 21:
                var3 = var2.kind;
                var2 = 'network_error';
                var1 = var2 === var3;
 36:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var6 = {};
        var1 = 'getErrorKind';
        var6['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0005_ip = 22; continue _fun0005 }
 17:
                var3 = var4.status;
 22:
                var4 = var2 != var3;
                var2 = 0;
                if(!var4) { _fun0005_ip = 34; continue _fun0005 }
 31:
                var2 = var3;
 34:
                var4 = var1.message;
                var3 = var4.toLowerCase;
                var5 = var3.bind(var4)();
                var4 = var5.includes;
                var3 = 'network';
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0005_ip = 99; continue _fun0005 }
 68:
                var5 = var1.message;
                var4 = var5.toLowerCase;
                var6 = var4.bind(var5)();
                var5 = var6.includes;
                var4 = 'terminated';
                var3 = var5.bind(var6)(var4);
 99:
                if(var3) { _fun0005_ip = 131; continue _fun0005 }
 102:
                var5 = var1.message;
                var4 = var5.toLowerCase;
                var6 = var4.bind(var5)();
                var5 = var6.includes;
                var4 = 'offline';
                var3 = var5.bind(var6)(var4);
 131:
                if(var3) { _fun0005_ip = 163; continue _fun0005 }
 134:
                var4 = var1.message;
                var1 = var4.toLowerCase;
                var5 = var1.bind(var4)();
                var4 = var5.includes;
                var1 = 'changed';
                var3 = var4.bind(var5)(var1);
 163:
                var1 = 500;
                if(!(var2 >= var1)) { _fun0005_ip = 192; continue _fun0005 }
 173:
                var1 = 600;
                var2 = var2 < var1;
                var1 = 'server_error';
                if(var2) { _fun0005_ip = 208; continue _fun0005 }
 192:
                var2 = 'unknown';
                if(!var3) { _fun0005_ip = 205; continue _fun0005 }
 199:
                var2 = 'network_error';
 205:
                var1 = var2;
 208:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'rejectionHandler';
        var6['key'] = var8;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.HTTPResponseError;
                    var3 = var2 instanceof var1;
                    if(var3) { _fun0006_ip = 178; continue _fun0006 }
 47:
                    var4 = global;
                    var3 = var4.Error;
                    var8 = var2 instanceof var3;
                    var6 = _closure2_slot0;
                    var5 = _closure3_slot0;
                    var3 = {};
                    if(var8) { _fun0006_ip = 145; continue _fun0006 }
 75:
                    var8 = var4.Error;
                    var4 = var4.String;
                    var10 = var4.bind(var7)(var2);
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var11 = var7;
                    var4 = new var11[var8](var10, var9);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var3['cause'] = var4;
                    var4 = var6.prototype;
                    var7 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var7;
                    var10 = var5;
                    var9 = var3;
                    var4 = new var11[var6](var10, var9, var8);
                    var4 = var4 instanceof Object ? var4 : var7;
                    throw var4;
 145:
                    var3['cause'] = var2;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var4;
                    var10 = var5;
                    var9 = var3;
                    var3 = new var11[var6](var10, var9, var8);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 178:
                    var4 = _closure2_slot0;
                    var10 = _closure3_slot0;
                    var1 = {};
                    var1['response'] = var2;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var11 = var2;
                    var9 = var1;
                    var1 = new var11[var4](var10, var9, var8);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            return var1;
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var5 = var4.bind(var1)(var5);
    var _closure1_slot17 = var5;
    var4 = {};
    var6 = 'NOT_STARTED';
    var4['NOT_STARTED'] = var6;
    var6 = 'STARTED';
    var4['STARTED'] = var6;
    var6 = 'UPLOADING';
    var4['UPLOADING'] = var6;
    var6 = 'ERROR';
    var4['ERROR'] = var6;
    var6 = 'COMPLETED';
    var4['COMPLETED'] = var6;
    var6 = 'CANCELED';
    var4['CANCELED'] = var6;
    var _closure1_slot18 = var4;
    var6 = function UploadAnalytics() {
        var3 = this;
        var4 = _closure1_slot6;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        var2 = {};
        var3['timing'] = var2;
        var2 = 0;
        var3['uploadResumptionCount'] = var2;
        var3['uploadResumptionPosition'] = var2;
        return var1;
    };
    var _closure1_slot22 = var6;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot19 = var6;
    var6 = 15;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var2 = function(arg1) {
        var5 = function CloudUpload(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arg1;
                var8 = this;
                var1 = _closure1_slot6;
                var7 = _closure2_slot11;
                var5 = undefined;
                var1 = var1.bind(var5)(var8, var7);
                var3 = _closure1_slot20;
                var1 = new Array(2);
                var1[0] = var6;
                var9 = arg3;
                var1[1] = var9;
                var1 = var3.bind(var5)(var8, var7, var1);
                var _closure3_slot0 = var1;
                var3 = _closure1_slot18;
                var3 = var3.NOT_STARTED;
                var1['status'] = var3;
                var3 = 0;
                var1['loaded'] = var3;
                var7 = false;
                var1['reactNativeFilePrepped'] = var7;
                var8 = _closure1_slot19;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var13 = var9;
                var8 = new var13[var8](var12);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['uploadAnalytics'] = var8;
                var1['uploadAttempts'] = var3;
                var1['_aborted'] = var7;
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.loaded;
                        var3 = _closure4_slot0;
                        var2 = var2 + var3;
                        var1 = var1.total;
                        var8 = var1 + var3;
                        var1 = _closure3_slot0;
                        var3 = var1.loaded;
                        var7 = var2 - var3;
                        var4 = var1.emit;
                        var10 = 'progress';
                        var11 = var1;
                        var9 = var2;
                        var3 = var11[var4](var10, var9, var8, var7, var6);
                        var1['loaded'] = var2;
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var1['createResumeAwareProgressFn'] = var4;
                var4 = arg2;
                var1['channelId'] = var4;
                var7 = var6.file;
                var4 = null;
                var9 = var4 == var7;
                var8 = undefined;
                if(var9) { _fun0007_ip = 176; continue _fun0007 }
 171:
                var8 = var7.size;
 176:
                var9 = var4 != var8;
                var7 = 0;
                if(!var9) { _fun0007_ip = 188; continue _fun0007 }
 185:
                var7 = var8;
 188:
                var1['preCompressionSize'] = var7;
                var7 = var6.file;
                var8 = var4 == var7;
                var6 = undefined;
                if(var8) { _fun0007_ip = 214; continue _fun0007 }
 209:
                var6 = var7.size;
 214:
                var7 = var4 != var6;
                var3 = 0;
                if(!var7) { _fun0007_ip = 226; continue _fun0007 }
 223:
                var3 = var6;
 226:
                var1['currentSize'] = var3;
                var3 = arg4;
                var1['reactNativeFileIndex'] = var3;
                var3 = global;
                var3 = var3.AbortController;
                var6 = var3.prototype;
                var6 = Object.create(var6, {constructor: {value: var3}});
                var13 = var6;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var6;
                var1['_abortController'] = var3;
                var3 = var1.origin;
                if(!(var4 != var3)) { _fun0007_ip = 358; continue _fun0007 }
 285:
                var3 = var1.uploadAnalytics;
                var4 = var1.origin;
                var6 = 'string';
                var4 = typeof var4;
                if(!(var6 !== var4)) { _fun0007_ip = 346; continue _fun0007 }
 308:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var4 = var2.UploadOrigin;
                var2 = var1.origin;
                var2 = var4[var2];
                _fun0007_ip = 352; continue _fun0007;
 346:
                var2 = var1.origin;
 352:
                var3['origin'] = var2;
 358:
                return var1;
            }
        };
        var _closure2_slot11 = var5;
        var3 = _closure1_slot10;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot7;
        var6 = {};
        var2 = 'parseRangeHeader';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var2 = var3.match;
                var1 = /^bytes=(\d+)-(\d+)(?:\\/\d+)?$/;
                var7 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0008_ip = 97; continue _fun0008 }
 37:
                var3 = global;
                var4 = var3.parseInt;
                var2 = 1;
                var2 = var7[var2];
                var6 = undefined;
                var5 = 10;
                var4 = var4.bind(var6)(var2, var5);
                var2 = new Array(2);
                var2[0] = var4;
                var4 = var3.parseInt;
                var3 = 2;
                var3 = var7[var3];
                var3 = var4.bind(var6)(var3, var5);
                var2[1] = var3;
                var1 = var2;
 97:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(27);
        var2[0] = var6;
        var6 = {};
        var8 = 'sliceBodyForResume';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = this;
                var2 = var1.item;
                var3 = var2.platform;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.UploadPlatform;
                var2 = var2.WEB;
                if(!(var3 === var2)) { _fun0009_ip = 81; continue _fun0009 }
 55:
                var1 = var1.item;
                var3 = var1.file;
                var1 = global;
                var1 = var1.File;
                var1 = var3 instanceof var1;
                if(var1) { _fun0009_ip = 86; continue _fun0009 }
 81:
                var1 = arg1;
                return var1;
 86:
                var2 = var3.slice;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var6['value'] = var8;
        var2[1] = var6;
        var6 = {};
        var8 = 'retryOpts';
        var6['key'] = var8;
        var8 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = this;
                var1 = var1.item;
                var2 = var1.platform;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var7 = undefined;
                var1 = var4.bind(var7)(var1);
                var1 = var1.UploadPlatform;
                var1 = var1.REACT_NATIVE;
                if(!(var2 !== var1)) { _fun0010_ip = 151; continue _fun0010 }
 55:
                var1 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var2 = var2.Millis;
                var6 = var2.HOUR;
                var2 = 1;
                var2 = var2 * var6;
                var1['timeout'] = var2;
                var2 = 12;
                var1['retries'] = var2;
                var2 = 17;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var12 = var4;
                var2 = new var12[var2](var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['backoff'] = var2;
                _fun0010_ip = 311; continue _fun0010;
 151:
                var2 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 16;
                var5 = var8[var3];
                var5 = var4.bind(var7)(var5);
                var5 = var5.Millis;
                var6 = var5.HOUR;
                var5 = 1;
                var5 = var5 * var6;
                var2['timeout'] = var5;
                var5 = 17;
                var5 = var8[var5];
                var6 = var4.bind(var7)(var5);
                var5 = var8[var3];
                var5 = var4.bind(var7)(var5);
                var5 = var5.Millis;
                var9 = var5.SECOND;
                var5 = 0.5;
                var5 = var5 * var9;
                var3 = var8[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.Millis;
                var4 = var3.MINUTE;
                var3 = 30;
                var10 = var3 * var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var12 = var4;
                var11 = var5;
                var3 = new var12[var6](var11, var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['backoff'] = var3;
                var3 = 12;
                var2['retries'] = var3;
                var1 = var2;
 311:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[2] = var6;
        var6 = {};
        var8 = 'createAttachmentUrlRetryOpts';
        var6['key'] = var8;
        var8 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = this;
                var1 = var2.item;
                var4 = var1.platform;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var7 = undefined;
                var1 = var5.bind(var7)(var1);
                var1 = var1.UploadPlatform;
                var1 = var1.REACT_NATIVE;
                if(!(var4 !== var1)) { _fun0011_ip = 70; continue _fun0011 }
 55:
                var1 = var2.retryOpts;
                var1 = var1.bind(var2)();
                _fun0011_ip = 267; continue _fun0011;
 70:
                var2 = {};
                var5 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 16;
                var6 = var8[var3];
                var6 = var4.bind(var7)(var6);
                var6 = var6.Millis;
                var6 = var6.SECOND;
                var9 = 30;
                var6 = var9 * var6;
                var5['response'] = var6;
                var6 = var8[var3];
                var6 = var4.bind(var7)(var6);
                var6 = var6.Millis;
                var6 = var6.MINUTE;
                var6 = var9 * var6;
                var5['deadline'] = var6;
                var2['timeout'] = var5;
                var5 = 17;
                var5 = var8[var5];
                var6 = var4.bind(var7)(var5);
                var5 = var8[var3];
                var5 = var4.bind(var7)(var5);
                var5 = var5.Millis;
                var9 = var5.SECOND;
                var5 = 0.5;
                var5 = var5 * var9;
                var3 = var8[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.Millis;
                var4 = var3.SECOND;
                var3 = 60;
                var10 = var3 * var4;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var12 = var4;
                var11 = var5;
                var3 = new var12[var6](var11, var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['backoff'] = var3;
                var3 = 8;
                var2['retries'] = var3;
                var1 = var2;
 267:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[3] = var6;
        var6 = {};
        var8 = 'supportsResume';
        var6['key'] = var8;
        var8 = function value() {
            var1 = this;
            var1 = var1.item;
            var2 = var1.platform;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.UploadPlatform;
            var1 = var1.REACT_NATIVE;
            var1 = var2 !== var1;
            return var1;
        };
        var6['value'] = var8;
        var2[4] = var6;
        var6 = {};
        var8 = 'uploadFileToCloud';
        var6['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 545; continue _fun0012 }
 13:
                    var2 = var6.responseUrl;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0012_ip = 509; continue _fun0012 }
 28:
                    var5 = _closure1_slot16;
                    var4 = var5.log;
                    var8 = var6.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Uploading ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var4.bind(var5)(var3);
                    var3 = var6.item;
                    var4 = var3.platform;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 15;
                    var3 = var7[var3];
                    var8 = undefined;
                    var3 = var5.bind(var8)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.REACT_NATIVE;
                    if(!(var4 !== var3)) { _fun0012_ip = 143; continue _fun0012 }
 124:
                    var3 = var6.item;
                    var5 = var3.file;
                    var4 = 'application/octet-stream';
                    _fun0012_ip = 239; continue _fun0012;
 143:
                    var7 = {};
                    var3 = var6.item;
                    var3 = var3.mimeType;
                    var7['type'] = var3;
                    var3 = var6.item;
                    var3 = var3.uri;
                    var7['uri'] = var3;
                    var3 = var6.item;
                    var3 = var3.filename;
                    var7['name'] = var3;
                    var3 = var7.type;
                    var9 = var9 != var3;
                    var11 = 'application/octet-stream';
                    var3 = var11;
                    if(!var9) { _fun0012_ip = 233; continue _fun0012 }
 212:
                    var10 = var7.type;
                    var9 = 'application/json';
                    var3 = var11;
                    if(!(var9 !== var10)) { _fun0012_ip = 233; continue _fun0012 }
 228:
                    var3 = var7.type;
 233:
                    var4 = var3;
                    var5 = var7;
 239:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 18;
                    var3 = var9[var3];
                    var9 = var7.bind(var8)(var3);
                    var7 = var9.getResumableAttachmentUploadsConfig;
                    var3 = {};
                    var10 = 'CloudUpload';
                    var3['location'] = var10;
                    var3 = var7.bind(var9)(var3);
                    var3 = var3.enableResumableUploads;
                    if(var3) { _fun0012_ip = 472; continue _fun0012 }
 292:
                    var3 = {};
                    var3['Content-Type'] = var4;
                    var7 = var6.contentHash;
                    if(!(var8 !== var7)) { _fun0012_ip = 323; continue _fun0012 }
 309:
                    var7 = var6.contentHash;
                    var3['Content-MD5'] = var7;
 323:
                    var7 = {};
                    var9 = var6.responseUrl;
                    var7['url'] = var9;
                    var7['body'] = var5;
                    var7['headers'] = var3;
                    var3 = var6._abortController;
                    var3 = var3.signal;
                    var7['signal'] = var3;
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 19;
                    var3 = var9[var3];
                    var12 = var10.bind(var8)(var3);
                    var11 = var12.throttle;
                    var10 = var6.createResumeAwareProgressFn;
                    var3 = 0;
                    var10 = var10.bind(var6)(var3);
                    var3 = 50;
                    var3 = var11.bind(var12)(var10, var3);
                    var7['onRequestProgress'] = var3;
                    var3 = false;
                    var7['rejectWithError'] = var3;
                    var3 = var6.retryOpts;
                    var14 = var3.bind(var6)();
                    var15 = var7;
                    var3 = copyDataProperties(var15, var14);
                    var3 = _closure1_slot0;
                    var2 = 14;
                    var2 = var9[var2];
                    var2 = var3.bind(var8)(var2);
                    var3 = var2.HTTP;
                    var2 = var3.put;
                    var2 = var2.bind(var3)(var7);
                    return var2;
 472:
                    var3 = var6.uploadFileWithResumption;
                    var2 = var6.responseUrl;
                    var2 = var3.bind(var6)(var2, var5, var4);
                    SaveGenerator(address=497);
 495:
                    return var2;
 497:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 506; continue _fun0012 }
 503:
                    return var2;
 506:
                    return var2;
 509:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var15 = '_uploadFileToCloud - responseUrl is not set';
                    var16 = var3;
                    var2 = new var16[var4](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 545:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot10 = var7;
        var7 = function uploadFileToCloud() {
            var1 = undefined;
            var4 = _closure2_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'getResumePosition';
        var6['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 213; continue _fun0013 }
 15:
                    var _closure4_slot0 = var4;
                    var5 = {};
                    var3 = arg1;
                    var5['url'] = var3;
                    var3 = {};
                    var6 = 'bytes */*';
                    var3['Content-Range'] = var6;
                    var5['headers'] = var3;
                    var3 = true;
                    var5['rejectWithError'] = var3;
                    var3 = 0;
                    var5['retries'] = var3;
                    var8 = {};
                    var10 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 16;
                    var9 = var7[var6];
                    var6 = undefined;
                    var9 = var10.bind(var6)(var9);
                    var9 = var9.Millis;
                    var10 = var9.SECOND;
                    var9 = 30;
                    var9 = var9 * var10;
                    var8['deadline'] = var9;
                    var5['timeout'] = var8;
                    var4 = var4._abortController;
                    var4 = var4.signal;
                    var5['signal'] = var4;
                    var4 = _closure1_slot0;
                    var3 = 14;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.HTTP;
                    var3 = var4.put;
                    var5 = var3.bind(var4)(var5);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.status;
                            var1 = 200;
                            if(!(var1 !== var2)) { _fun0014_ip = 60; continue _fun0014 }
 15:
                            var2 = var3.status;
                            var1 = 201;
                            if(!(var1 !== var2)) { _fun0014_ip = 60; continue _fun0014 }
 27:
                            var4 = _closure1_slot17;
                            var2 = var4.rejectionHandler;
                            var1 = 'status_check';
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0014_ip = 73; continue _fun0014;
 60:
                            var2 = _closure4_slot0;
                            var1 = var2.currentSize;
 73:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var1 = arg1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.HTTPResponseError;
                            var4 = var1 instanceof var4;
                            if(!var4) { _fun0015_ip = 56; continue _fun0015 }
 41:
                            var5 = var1.status;
                            var4 = 308;
                            if(!(var4 !== var5)) { _fun0015_ip = 84; continue _fun0015 }
 56:
                            var5 = _closure1_slot17;
                            var4 = var5.rejectionHandler;
                            var2 = 'status_check';
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var3)(var1);
                            return var2;
 84:
                            var4 = _closure4_slot0;
                            var3 = var4.parseRangeHeader;
                            var1 = var1.headers;
                            var5 = var1.range;
                            var1 = null;
                            var6 = var1 != var5;
                            var2 = '';
                            if(!var6) { _fun0015_ip = 127; continue _fun0015 }
 124:
                            var2 = var5;
 127:
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 != var2;
                            var1 = 0;
                            if(!var3) { _fun0015_ip = 152; continue _fun0015 }
 141:
                            var3 = 1;
                            var2 = var2[var3];
                            var1 = var2 + var3;
 152:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=201);
 199:
                    return var2;
 201:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 210; continue _fun0013 }
 207:
                    return var2;
 210:
                    return var2;
 213:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot9 = var7;
        var7 = function getResumePosition() {
            var1 = undefined;
            var4 = _closure2_slot9;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'startOrResumeUpload';
        var6['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var11 = arguments[1];
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 441; continue _fun0016 }
 19:
                    var7 = undefined;
                    if(!(var11 === var7)) { _fun0016_ip = 27; continue _fun0016 }
 25:
                    var11 = 0;
 27:
                    SaveGenerator(address=31);
 29:
                    return var7;
 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 438; continue _fun0016 }
 40:
                    var10 = _closure1_slot16;
                    var8 = var10.log;
                    var14 = var5.uploadAttempts;
                    var9 = global;
                    var3 = var9.HermesInternal;
                    var13 = var3.concat;
                    var12 = 'Attempting to upload attachment with resumeFrom: ';
                    var3 = ' and attempts: ';
                    var3 = var13.bind(var12)(var11, var3, var14);
                    var3 = var8.bind(var10)(var3);
                    var3 = 0;
                    if(!(var11 > var3)) { _fun0016_ip = 245; continue _fun0016 }
 105:
                    var8 = var5.uploadAnalytics;
                    var3 = var8.uploadResumptionCount;
                    var3 = var3 + 1;
                    var8['uploadResumptionCount'] = var3;
                    var8 = var5.sliceBodyForResume;
                    var3 = var6.body;
                    var3 = var8.bind(var5)(var3, var11);
                    var8 = {};
                    var10 = var6.headers;
                    var12 = null;
                    if(!(var12 == var10)) { _fun0016_ip = 161; continue _fun0016 }
 159:
                    var10 = {};
 161:
                    var20 = var8;
                    var19 = var10;
                    var10 = copyDataProperties(var20, var19);
                    var12 = var5.currentSize;
                    var10 = 1;
                    var18 = var12 - var10;
                    var16 = var5.currentSize;
                    var9 = var9.HermesInternal;
                    var13 = var9.concat;
                    var21 = 'bytes ';
                    var19 = '-';
                    var17 = '/';
                    var20 = var11;
                    var10 = var21[var13](var20, var19, var18, var17, var16, var15);
                    var9 = 'Content-Range';
                    var8[var9] = var10;
                    var6['headers'] = var8;
                    var6['body'] = var3;
 245:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 19;
                    var3 = var8[var3];
                    var10 = var9.bind(var7)(var3);
                    var9 = var10.throttle;
                    var3 = var5.createResumeAwareProgressFn;
                    var5 = var3.bind(var5)(var11);
                    var3 = 50;
                    var3 = var9.bind(var10)(var5, var3);
                    var6['onRequestProgress'] = var3;
                    var5 = _closure1_slot0;
                    var3 = 14;
                    var3 = var8[var3];
                    var3 = var5.bind(var7)(var3);
                    var5 = var3.HTTP;
                    var3 = var5.put;
                    var6 = var3.bind(var5)(var6);
                    var5 = var6.catch;
                    var8 = _closure1_slot17;
                    var3 = var8.rejectionHandler;
                    var7 = 'upload';
                    var3 = var3.bind(var8)(var7);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=363);
 361:
                    return var3;
 363:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 435; continue _fun0016 }
 369:
                    var6 = var3.status;
                    var5 = 200;
                    if(!(var5 !== var6)) { _fun0016_ip = 393; continue _fun0016 }
 381:
                    var6 = var3.status;
                    var5 = 201;
                    if(!(var5 === var6)) { _fun0016_ip = 396; continue _fun0016 }
 393:
                    return var3;
 396:
                    var6 = _closure1_slot17;
                    var4 = {};
                    var4['response'] = var3;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var21 = var5;
                    var20 = var7;
                    var19 = var4;
                    var4 = new var21[var6](var20, var19, var18);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
 435:
                    return var3;
 438:
                    return var2;
 441:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot8 = var7;
        var7 = function startOrResumeUpload() {
            var1 = undefined;
            var4 = _closure2_slot8;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'uploadFileWithResumption';
        var6['key'] = var7;
        var7 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0017_ip = 608; continue _fun0017 }
 18:
                    var _closure4_slot0 = var4;
                    var12 = undefined;
                    var _closure4_slot2 = var12;
                    var _closure4_slot3 = var12;
                    var _closure4_slot4 = var12;
                    var _closure4_slot1 = var3;
                    var5 = var3.retryOpts;
                    var5 = var5.bind(var3)();
                    var6 = var5.timeout;
                    var7 = var5.backoff;
                    _closure4_slot2 = var7;
                    var11 = var5.retries;
                    var5 = {};
                    var5['url'] = var4;
                    var4 = arg2;
                    var5['body'] = var4;
                    var4 = {};
                    var7 = arg3;
                    var4['Content-Type'] = var7;
                    var5['headers'] = var4;
                    var4 = var3._abortController;
                    var4 = var4.signal;
                    var5['signal'] = var4;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 19;
                    var4 = var8[var4];
                    var10 = var7.bind(var12)(var4);
                    var9 = var10.throttle;
                    var7 = var3.createResumeAwareProgressFn;
                    var4 = 0;
                    var8 = var7.bind(var3)(var4);
                    var7 = 50;
                    var7 = var9.bind(var10)(var8, var7);
                    var5['onRequestProgress'] = var7;
                    var5['retries'] = var4;
                    var7 = true;
                    var5['rejectWithError'] = var7;
                    var5['timeout'] = var6;
                    _closure4_slot3 = var5;
                    _closure4_slot4 = var4;
                    var10 = function* _loop() {
                        var1 = function* anon_0__loop() {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                                if(var4) { _fun0018_ip = 586; continue _fun0018 }
 12:
                                var4 = undefined;
                                var7 = undefined;
                                var _closure6_slot0 = var4;
                                var5 = _closure4_slot1;
                                var8 = var5.uploadAttempts;
                                var8 = var8 + 1;
                                var5['uploadAttempts'] = var8;
                                var8 = var5.uploadAnalytics;
                                var5 = var5.uploadAttempts;
                                var8['numUploadAttempts'] = var5;
 60: // try_start_0
                                var5 = _closure4_slot1;
                                var8 = var5.uploadAttempts;
                                var5 = 1;
                                if(!(var8 > var5)) { _fun0018_ip = 179; continue _fun0018 }
 77:
                                var10 = _closure4_slot1;
                                var9 = var10.trackTime;
                                var8 = _closure1_slot4;
                                var5 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0019_ip = 47; continue _fun0019 }
 7:
                                            var4 = _closure4_slot1;
                                            var3 = var4.getResumePosition;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            SaveGenerator(address=35);
 33:
                                            return var2;
 35:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            if(var3) { _fun0019_ip = 44; continue _fun0019 }
 41:
                                            return var2;
 44:
                                            return var2;
 47:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var8 = var8.bind(var4)(var5);
                                var5 = 'resumptionCheckTimeMs';
                                var5 = var9.bind(var10)(var5, var8);
                                SaveGenerator(address=120);
 118:
                                return var5;
 120:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 227; continue _fun0018 }
 126:
                                var7 = var5;
                                var9 = _closure4_slot1;
                                var8 = var9.uploadAnalytics;
                                var8['uploadResumptionPosition'] = var5;
                                var8 = var9.supportsResume;
                                var9 = var8.bind(var9)();
                                var8 = 0;
                                if(!var9) { _fun0018_ip = 165; continue _fun0018 }
 162:
                                var8 = var7;
 165:
                                _closure4_slot4 = var8;
                                var7 = _closure4_slot1;
                                var7['loaded'] = var8;
 179:
                                var8 = {};
                                var11 = _closure4_slot1;
                                var10 = var11.startOrResumeUpload;
                                var9 = _closure4_slot3;
                                var7 = _closure4_slot4;
                                var7 = var10.bind(var11)(var9, var7);
                                SaveGenerator(address=211);
 209:
                                return var7;
 211:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                                if(var9) { _fun0018_ip = 224; continue _fun0018 }
 217:
                                var8['v'] = var7;
 221: // try_end0
                                return var8;
 224:
                                return var7;
 227:
                                return var5;
 230: // catch_target0
                                CatchBlockStart(arg_register=7);
                                var2 = var8;
                                var5 = _closure1_slot17;
                                var5 = var8 instanceof var5;
                                if(!var5) { _fun0018_ip = 267; continue _fun0018 }
 249:
                                var8 = var2;
                                var5 = var8.canRetry;
                                var5 = var5.bind(var8)();
                                if(var5) { _fun0018_ip = 332; continue _fun0018 }
 267:
                                var10 = _closure1_slot16;
                                var9 = var10.warn;
                                var5 = _closure4_slot1;
                                var14 = var5.id;
                                var5 = var2;
                                var13 = var5.message;
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var12 = var8.concat;
                                var11 = 'Unrecoverable error uploading ';
                                var8 = ': ';
                                var8 = var12.bind(var11)(var14, var8, var13);
                                var8 = var9.bind(var10)(var8);
                                throw var5;
 332:
                                var11 = _closure1_slot16;
                                var10 = var11.warn;
                                var8 = _closure4_slot1;
                                var20 = var8.id;
                                var18 = var2.message;
                                var5 = global;
                                var9 = var5.HermesInternal;
                                var14 = var9.concat;
                                var21 = 'Error uploading ';
                                var19 = ': ';
                                var17 = ', attempting resumption';
                                var9 = var21[var14](var20, var19, var18, var17, var16);
                                var9 = var10.bind(var11)(var9);
                                var8 = var8.uploadAnalytics;
                                var2 = var2.messageShort;
                                var8['uploadResumptionReason'] = var2;
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 20;
                                var2 = var9[var2];
                                var8 = var8.bind(var4)(var2);
                                var2 = var8.awaitOnline;
                                var2 = var2.bind(var8)();
                                SaveGenerator(address=447);
 445:
                                return var2;
 447:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 583; continue _fun0018 }
 456:
                                var9 = _closure4_slot2;
                                var8 = var9.fail;
                                var12 = var8.bind(var9)();
                                _closure6_slot0 = var12;
                                var8 = _closure1_slot16;
                                var7 = var8.log;
                                var6 = _closure4_slot1;
                                var9 = var6.uploadAttempts;
                                var6 = 1;
                                var11 = var9 + var6;
                                var6 = var5.HermesInternal;
                                var10 = var6.concat;
                                var9 = 'Waiting ';
                                var6 = 'ms before attachment upload attempt ';
                                var6 = var10.bind(var9)(var12, var6, var11);
                                var6 = var7.bind(var8)(var6);
                                var6 = var5.Promise;
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {constructor: {value: var6}});
                                var20 = function(arg1) {
                                    var1 = global;
                                    var4 = var1.setTimeout;
                                    var3 = _closure6_slot0;
                                    var2 = undefined;
                                    var1 = arg1;
                                    var1 = var4.bind(var2)(var1, var3);
                                    return var1;
                                };
                                var21 = var5;
                                var3 = new var21[var6](var20, var19);
                                var3 = var3 instanceof Object ? var3 : var5;
                                SaveGenerator(address=571);
 569:
                                return var3;
 571:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0018_ip = 580; continue _fun0018 }
 577:
                                return var4;
 580:
                                return var3;
 583:
                                return var2;
 586:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var3.uploadAttempts;
                    if(!(var2 <= var11)) { _fun0017_ip = 543; continue _fun0017 }
 215:
                    var2 = var3._aborted;
                    var9 = global;
                    var8 = 'iterator is not an object';
                    var7 = 'iterator.throw() did not return an object';
                    var6 = 'throw';
                    var5 = 'iterator.next() did not return an object';
                    if(var2) { _fun0017_ip = 543; continue _fun0017 }
 251:
                    var4 = var10.bind(var12)();
                    var2 = var9.Symbol;
                    var2 = var2.iterator;
                    var2 = var4[var2];
                    var13 = var2.bind(var4)();
                    var21 = var13;
                    var20 = var8;
                    var2 = ensureObject(var21, var20);
                    var18 = var13.next;
                    var17 = undefined;
 292:
                    var4 = var17;
                    var4 = var18.bind(var13)(var4);
                    var21 = var4;
                    var20 = var5;
                    var14 = ensureObject(var21, var20);
                    var2 = var4;
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 503; continue _fun0017 }
 324: // try_start_0
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
 330:
                    return var4;
 332: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    var21 = var13;
                    var20 = var6;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 462; continue _fun0017 }
 348:
                    var4 = var4.bind(var13)(var14);
                    var21 = var4;
                    var20 = var7;
                    var14 = ensureObject(var21, var20);
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 457; continue _fun0017 }
 371:
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
 377:
                    return var4;
 379: // try_start_1
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    var17 = var14;
                    var15 = var16;
                    if(!var15) { _fun0017_ip = 292; continue _fun0017 }
 391:
                    var17 = var14;
 394: // try_end1
                    var20 = 'return';
                    var21 = var13;
                    var19 = getMethod(var21, var20);
                    if(!(var19 !== var12)) { _fun0017_ip = 454; continue _fun0017 }
 409:
                    var15 = var17;
                    var15 = var19.bind(var13)(var15);
                    var20 = 'iterator.return() did not return an object';
                    var21 = var15;
                    var19 = ensureObject(var21, var20);
                    var19 = var15.done;
                    if(var19) { _fun0017_ip = 446; continue _fun0017 }
 438:
                    var19 = generatorSetDelegated();
                    SaveGenerator(address=379);
 444:
                    return var15;
 446:
                    var15 = var15.value;
                    return var15;
 454:
                    return var14;
 457:
                    var2 = var4;
                    _fun0017_ip = 503; continue _fun0017;
 462:
                    var20 = 'return';
                    var21 = var13;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 491; continue _fun0017 }
 477:
                    var21 = var4.bind(var13)();
                    var20 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var21, var20);
 491:
                    var21 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var21);
                    throw var12;
 503:
                    var2 = var2.value;
                    if(var2) { _fun0017_ip = 535; continue _fun0017 }
 511:
                    var4 = var3.uploadAttempts;
                    if(!(var4 <= var11)) { _fun0017_ip = 543; continue _fun0017 }
 521:
                    var4 = var3._aborted;
                    if(var4) { _fun0017_ip = 543; continue _fun0017 }
 530:
                    _fun0017_ip = 251; continue _fun0017;
 535:
                    var2 = var2.v;
                    return var2;
 543:
                    var2 = global;
                    var4 = var2.Error;
                    var6 = var3.uploadAttempts;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = 'Upload failed after ';
                    var2 = ' attempts';
                    var21 = var5.bind(var3)(var6, var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var22 = var3;
                    var2 = new var22[var4](var21, var20);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 608:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot7 = var7;
        var7 = function uploadFileWithResumption(arg1, arg2, arg3) {
            var1 = undefined;
            var4 = _closure2_slot7;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[8] = var6;
        var6 = {};
        var7 = 'getSize';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 119; continue _fun0020 }
 7:
                    var2 = this;
                    var2 = var2.item;
                    var6 = var2.uri;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 21;
                    var2 = var2[var8];
                    var7 = undefined;
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.getFileSize;
                    var3 = null;
                    var5 = var3 == var2;
                    var2 = undefined;
                    if(var5) { _fun0020_ip = 91; continue _fun0020 }
 63:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getFileSize;
                    var2 = var4.bind(var5)(var6);
 91:
                    SaveGenerator(address=95);
 93:
                    return var2;
 95:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 116; continue _fun0020 }
 101:
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0020_ip = 113; continue _fun0020 }
 110:
                    var3 = var2;
 113:
                    return var3;
 116:
                    return var2;
 119:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot6 = var7;
        var7 = function getSize() {
            var1 = undefined;
            var4 = _closure2_slot6;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[9] = var6;
        var6 = {};
        var7 = 'getHash';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    StartGenerator();
                    var5 = arguments[0];
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 219; continue _fun0021 }
 16:
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0021_ip = 24; continue _fun0021 }
 22:
                    var5 = false;
 24:
                    SaveGenerator(address=28);
 26:
                    return var6;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 216; continue _fun0021 }
 37:
                    var3 = var4.item;
                    var8 = var3.uri;
                    var3 = var4.getSize;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=62);
 60:
                    return var3;
 62:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 213; continue _fun0021 }
 71:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 22;
                    var7 = var10[var7];
                    var12 = var9.bind(var6)(var7);
                    var11 = var12.getOptimalChunkSize;
                    if(var5) { _fun0021_ip = 110; continue _fun0021 }
 103:
                    var7 = var11.bind(var12)(var3);
                    _fun0021_ip = 142; continue _fun0021;
 110:
                    var15 = 8192;
                    var14 = 16777216;
                    var13 = 0.25;
                    var17 = var12;
                    var16 = var3;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
 142:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 21;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getFileHash;
                    var4 = 'md5';
                    var4 = var5.bind(var6)(var8, var4, var7);
                    SaveGenerator(address=185);
 183:
                    return var4;
 185:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 210; continue _fun0021 }
 191:
                    var5 = null;
                    var6 = var5 != var4;
                    var5 = '';
                    if(!var6) { _fun0021_ip = 207; continue _fun0021 }
 204:
                    var5 = var4;
 207:
                    return var5;
 210:
                    return var4;
 213:
                    return var3;
 216:
                    return var2;
 219:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot5 = var7;
        var7 = function getHash() {
            var1 = undefined;
            var4 = _closure2_slot5;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[10] = var6;
        var6 = {};
        var7 = 'getEtagFromResponse';
        var6['key'] = var7;
        var7 = function getEtagFromResponse(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = arg1;
                var1 = var1.headers;
                var2 = var1.etag;
                var1 = null;
                var3 = var1 != var2;
                var5 = null;
                if(!var3) { _fun0022_ip = 29; continue _fun0022 }
 26:
                var5 = var2;
 29:
                var2 = var1 != var5;
                var1 = null;
                if(!var2) { _fun0022_ip = 67; continue _fun0022 }
 38:
                var4 = var5.replace;
                var3 = /"/g;
                var2 = '';
                var1 = var4.bind(var5)(var3, var2);
 67:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[11] = var6;
        var6 = {};
        var7 = 'trackTime';
        var6['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0023_ip = 181; continue _fun0023 }
 13:
                    var4 = arg1;
                    var2 = arg2;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = global;
                    var9 = var6.performance;
                    var8 = var9.now;
                    var3 = var8.bind(var9)();
 40: // try_start_0
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=48);
 46:
                    return var2;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0023_ip = 98; continue _fun0023 }
 54: // try_end0
                    var7 = var5.uploadAnalytics;
                    var9 = var7.timing;
                    var8 = var4;
                    var10 = var6.performance;
                    var7 = var10.now;
                    var10 = var7.bind(var10)();
                    var7 = var3;
                    var7 = var10 - var7;
                    var9[var8] = var7;
                    return var2;
 98:
                    var7 = var5.uploadAnalytics;
                    var9 = var7.timing;
                    var8 = var4;
                    var10 = var6.performance;
                    var7 = var10.now;
                    var10 = var7.bind(var10)();
                    var7 = var3;
                    var7 = var10 - var7;
                    var9[var8] = var7;
                    return var2;
 142: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = var5.uploadAnalytics;
                    var5 = var5.timing;
                    var7 = var6.performance;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3 = var6 - var3;
                    var5[var4] = var3;
                    throw var2;
 181:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot4 = var7;
        var7 = function trackTime(arg1, arg2) {
            var1 = undefined;
            var4 = _closure2_slot4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[12] = var6;
        var6 = {};
        var7 = 'upload';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    StartGenerator();
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 1598; continue _fun0024 }
 15:
                    var _closure4_slot0 = var7;
                    var8 = undefined;
                    var _closure4_slot2 = var8;
                    var _closure4_slot3 = var8;
                    var21 = undefined;
                    var _closure4_slot4 = var8;
                    var16 = undefined;
                    var12 = undefined;
                    var14 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var22 = undefined;
                    var23 = undefined;
                    var20 = undefined;
                    var _closure4_slot1 = var7;
                    var3 = var7.status;
                    var2 = _closure1_slot18;
                    var2 = var2.COMPLETED;
                    if(!(var3 !== var2)) { _fun0024_ip = 1522; continue _fun0024 }
 82:
                    var3 = var7.setStatus;
                    var2 = _closure1_slot18;
                    var2 = var2.STARTED;
                    var2 = var3.bind(var7)(var2);
                    var6 = global;
                    var3 = var6.performance;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var7['startTime'] = var2;
                    var2 = var7.trackUploadStart;
                    var2 = var2.bind(var7)();
                    var2 = var7.reactNativeFilePrepped;
                    var24 = false;
                    if(!(var24 === var2)) { _fun0024_ip = 173; continue _fun0024 }
 150:
                    var2 = var7.reactNativeCompressAndExtractData;
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=164);
 162:
                    return var2;
 164:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0024_ip = 1595; continue _fun0024 }
 173:
                    var4 = var7.status;
                    var3 = _closure1_slot18;
                    var3 = var3.CANCELED;
                    if(!(var4 === var3)) { _fun0024_ip = 213; continue _fun0024 }
 192:
                    var4 = var7.handleComplete;
                    var3 = var7.id;
                    var3 = var4.bind(var7)(var3);
                    _fun0024_ip = 1522; continue _fun0024;
 213:
                    var3 = var7.item;
                    var4 = var3.platform;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var3 = 15;
                    var3 = var15[var3];
                    var3 = var13.bind(var8)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.WEB;
                    if(!(var4 === var3)) { _fun0024_ip = 285; continue _fun0024 }
 260:
                    var3 = var7.maybeConvertToWebP;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=276);
 274:
                    return var3;
 276:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0024_ip = 1592; continue _fun0024 }
 285:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 23;
                    var4 = var15[var4];
                    var4 = var13.bind(var8)(var4);
                    var13 = var4.default;
                    var4 = var13.getUploadPayload;
                    var4 = var4.bind(var13)(var7);
                    SaveGenerator(address=325);
 323:
                    return var4;
 325:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                    if(var13) { _fun0024_ip = 1589; continue _fun0024 }
 334:
                    _closure4_slot2 = var4;
                    var15 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var13 = 24;
                    var13 = var25[var13];
                    var25 = var15.bind(var8)(var13);
                    var15 = var25.getUploadTarget;
                    var13 = var7.item;
                    var13 = var13.target;
                    var28 = var15.bind(var25)(var13);
                    _closure4_slot3 = var28;
                    var13 = var4.filename;
                    var15 = null;
                    if(!(var15 != var13)) { _fun0024_ip = 1525; continue _fun0024 }
 399:
                    var25 = var4.filename;
                    var13 = '';
                    if(!(var13 !== var25)) { _fun0024_ip = 1525; continue _fun0024 }
 416:
                    var13 = var7.currentSize;
                    var27 = 0;
                    if(!(var27 !== var13)) { _fun0024_ip = 1525; continue _fun0024 }
 431:
                    var13 = var7.currentSize;
                    var26 = var15 != var13;
                    var25 = 0;
                    if(!var26) { _fun0024_ip = 449; continue _fun0024 }
 446:
                    var25 = var13;
 449:
                    var26 = var28.getMaxFileSize;
                    var13 = var7.channelId;
                    var13 = var26.bind(var28)(var13);
                    if(!(!(var25 > var13))) { _fun0024_ip = 1501; continue _fun0024 }
 472:
                    var26 = _closure1_slot11;
                    var25 = var26.get;
                    var13 = 'upload_fail_50';
                    var13 = var25.bind(var26)(var13);
                    if(!var13) { _fun0024_ip = 528; continue _fun0024 }
 495:
                    var25 = var6.Math;
                    var13 = var25.random;
                    var25 = var13.bind(var25)();
                    var13 = 0.5;
                    if(!(!(var25 < var13))) { _fun0024_ip = 1476; continue _fun0024 }
 528:
                    var25 = _closure1_slot1;
                    var26 = _closure1_slot2;
                    var13 = 25;
                    var13 = var26[var13];
                    var28 = var25.bind(var8)(var13);
                    var26 = var28.getCurrentConfig;
                    var25 = {};
                    var13 = 'CloudUpload';
                    var25['location'] = var13;
                    var13 = {};
                    var29 = true;
                    var13['autoTrackExposure'] = var29;
                    var13 = var26.bind(var28)(var25, var13);
                    var21 = var13;
                    _closure4_slot4 = var13;
                    var16 = null;
                    var13 = var13.enabled;
                    if(!var13) { _fun0024_ip = 628; continue _fun0024 }
 596:
                    var26 = var7.trackTime;
                    var25 = _closure1_slot4;
                    var13 = function* () {
                        var1 = function* anon_0_() {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0025_ip = 53; continue _fun0025 }
 7:
                                var4 = _closure4_slot1;
                                var3 = var4.getHash;
                                var2 = _closure4_slot4;
                                var2 = var2.largerChunks;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=41);
 39:
                                return var2;
 41:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0025_ip = 50; continue _fun0025 }
 47:
                                return var2;
 50:
                                return var2;
 53:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var8)(var13);
                    var13 = 'hashTimeMs';
                    var16 = var26.bind(var7)(var13, var25);
 628: // try_start_0
                    var26 = _closure1_slot16;
                    var25 = var26.log;
                    var29 = var7.id;
                    var13 = var6.HermesInternal;
                    var28 = var13.concat;
                    var13 = 'Requesting upload url for ';
                    var13 = var28.bind(var13)(var29);
                    var13 = var25.bind(var26)(var13);
                    var26 = var7.trackTime;
                    var25 = _closure1_slot4;
                    var13 = function* () {
                        var1 = function* anon_0_() {
                            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0026_ip = 155; continue _fun0026 }
 10:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 14;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var4 = var2.HTTP;
                                var3 = var4.post;
                                var2 = {};
                                var9 = _closure4_slot3;
                                var8 = var9.getCreateAttachmentURL;
                                var6 = _closure4_slot1;
                                var5 = var6.channelId;
                                var5 = var8.bind(var9)(var5);
                                var2['url'] = var5;
                                var5 = {};
                                var8 = _closure4_slot2;
                                var7 = new Array(1);
                                var7[0] = var8;
                                var5['files'] = var7;
                                var2['body'] = var5;
                                var5 = var6.createAttachmentUrlRetryOpts;
                                var10 = var5.bind(var6)();
                                var11 = var2;
                                var5 = copyDataProperties(var11, var10);
                                var6 = false;
                                var5 = 'rejectWithError';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=143);
 141:
                                return var2;
 143:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0026_ip = 152; continue _fun0026 }
 149:
                                return var2;
 152:
                                return var2;
 155:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var8)(var13);
                    var13 = 'getUploadUrlTimeMs';
                    var13 = var26.bind(var7)(var13, var25);
                    SaveGenerator(address=706);
 704:
                    return var13;
 706:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 1264; continue _fun0024 }
 715:
                    var26 = var7.setResponseUrl;
                    var25 = var13.body;
                    var25 = var25.attachments;
                    var25 = var25[var27];
                    var25 = var25.upload_url;
                    var25 = var26.bind(var7)(var25);
                    var26 = var7.setUploadedFilename;
                    var25 = var13.body;
                    var25 = var25.attachments;
                    var25 = var25[var27];
                    var25 = var25.upload_filename;
                    var25 = var26.bind(var7)(var25);
 787: // try_end0
                    var25 = var16;
                    if(!(var15 == var25)) { _fun0024_ip = 796; continue _fun0024 }
 794:
                    _fun0024_ip = 822; continue _fun0024;
 796:
                    SaveGenerator(address=800);
 798:
                    return var16;
 800:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 1261; continue _fun0024 }
 809:
                    var18 = var16;
                    if(!(var15 != var16)) { _fun0024_ip = 822; continue _fun0024 }
 816:
                    var7['contentHash'] = var18;
 822: // try_start_1
                    var26 = var7.trackTime;
                    var25 = _closure1_slot4;
                    var18 = function* () {
                        var1 = function* anon_0_() {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0027_ip = 42; continue _fun0027 }
 7:
                                var3 = _closure4_slot1;
                                var2 = var3.uploadFileToCloud;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=30);
 28:
                                return var2;
 30:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0027_ip = 39; continue _fun0027 }
 36:
                                return var2;
 39:
                                return var2;
 42:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var8)(var18);
                    var18 = 'uploadTimeMs';
                    var18 = var26.bind(var7)(var18, var25);
                    SaveGenerator(address=858);
 856:
                    return var18;
 858:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 1147; continue _fun0024 }
 867:
                    var19 = var18;
                    var25 = var21;
                    var25 = var25.enabled;
                    if(!var25) { _fun0024_ip = 1110; continue _fun0024 }
 884:
                    var25 = var19;
                    if(!(var15 != var25)) { _fun0024_ip = 1110; continue _fun0024 }
 894:
                    var22 = false;
                    var25 = var7.getEtagFromResponse;
                    var24 = var19;
                    var24 = var25.bind(var7)(var24);
                    var23 = var24;
                    if(!(var15 != var24)) { _fun0024_ip = 938; continue _fun0024 }
 919:
                    var24 = var23;
                    var7['etag'] = var24;
                    var23 = var7.contentHash;
                    var22 = var24 === var23;
 938:
                    var23 = var7.uploadAnalytics;
                    var23['validUploadHash'] = var22;
                    if(var22) { _fun0024_ip = 1110; continue _fun0024 }
 956:
                    var21 = var21.enforced;
                    if(!var21) { _fun0024_ip = 1110; continue _fun0024 }
 968:
                    var21 = var7.filename;
                    var20 = var21;
                    if(!(var15 == var21)) { _fun0024_ip = 988; continue _fun0024 }
 981:
                    var26 = var7.id;
                    _fun0024_ip = 991; continue _fun0024;
 988:
                    var26 = var20;
 991:
                    var32 = var7.etag;
                    var30 = var7.contentHash;
                    var20 = var6.HermesInternal;
                    var23 = var20.concat;
                    var35 = 'File ';
                    var33 = ' received incorrect checksum after upload: got ';
                    var31 = ', expected ';
                    var34 = var26;
                    var22 = var35[var23](var34, var33, var32, var31, var30, var29);
                    var21 = _closure1_slot16;
                    var20 = var21.error;
                    var20 = var20.bind(var21)(var22);
                    var21 = _closure1_slot1;
                    var23 = _closure1_slot2;
                    var20 = 26;
                    var20 = var23[var20];
                    var21 = var21.bind(var8)(var20);
                    var20 = var21.captureMessage;
                    var20 = var20.bind(var21)(var22);
                    var21 = var7.handleError;
                    var20 = _closure1_slot14;
                    var20 = var20.INVALID_FILE_ASSET;
                    var20 = var21.bind(var7)(var20);
 1105: // try_end1
                    var20 = undefined;
                    return var20;
 1110: // try_start_2
                    var21 = var7.trackUploadFinished;
                    var20 = _closure1_slot18;
                    var20 = var20.COMPLETED;
                    var20 = var21.bind(var7)(var20);
                    var20 = var7.handleComplete;
                    var19 = var20.bind(var7)(var19);
 1142: // try_end2
                    _fun0024_ip = 1522; continue _fun0024;
 1147:
                    return var18;
 1150: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=16);
                    var19 = var7.status;
                    var18 = _closure1_slot18;
                    var18 = var18.CANCELED;
                    if(!(var19 !== var18)) { _fun0024_ip = 1245; continue _fun0024 }
 1171:
                    var21 = _closure1_slot16;
                    var20 = var21.info;
                    var19 = var17;
                    var25 = var19.status;
                    var24 = var7.id;
                    var18 = var6.HermesInternal;
                    var23 = var18.concat;
                    var22 = 'Error: status ';
                    var18 = ' for ';
                    var18 = var23.bind(var22)(var25, var18, var24);
                    var18 = var20.bind(var21)(var18);
                    var18 = var7.handleError;
                    var18 = var18.bind(var7)(var19);
                    _fun0024_ip = 1522; continue _fun0024;
 1245:
                    var18 = var7.handleComplete;
                    var17 = var18.bind(var7)(var17);
                    _fun0024_ip = 1522; continue _fun0024;
 1261:
                    return var16;
 1264:
                    return var13;
 1267: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var11 = var13;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 1306; continue _fun0024 }
 1281:
                    var16 = var11;
                    var16 = var16.body;
                    var14 = var16;
                    var16 = var15 == var16;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 1306; continue _fun0024 }
 1301:
                    var13 = var14.code;
 1306:
                    var12 = var13;
                    if(!(var15 == var13)) { _fun0024_ip = 1323; continue _fun0024 }
 1313:
                    var13 = var11;
                    var13 = var13.status;
                    _fun0024_ip = 1326; continue _fun0024;
 1323:
                    var13 = var12;
 1326:
                    var10 = var13;
                    var12 = _closure1_slot14;
                    var12 = var12.ENTITY_TOO_LARGE;
                    if(!(var13 !== var12)) { _fun0024_ip = 1460; continue _fun0024 }
 1343:
                    var14 = _closure1_slot16;
                    var13 = var14.error;
                    var12 = var10;
                    if(!(var15 == var12)) { _fun0024_ip = 1386; continue _fun0024 }
 1359:
                    var16 = var6.JSON;
                    var15 = var16.stringify;
                    var12 = var11;
                    var12 = var12.body;
                    var18 = var15.bind(var16)(var12);
                    _fun0024_ip = 1389; continue _fun0024;
 1386:
                    var18 = var10;
 1389:
                    var17 = var7.id;
                    var12 = var6.HermesInternal;
                    var16 = var12.concat;
                    var15 = 'Requesting upload url failed with code ';
                    var12 = ' for ';
                    var12 = var16.bind(var15)(var18, var12, var17);
                    var12 = var13.bind(var14)(var12);
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 26;
                    var12 = var14[var12];
                    var13 = var13.bind(var8)(var12);
                    var12 = var13.captureException;
                    var11 = var12.bind(var13)(var11);
 1460:
                    var11 = var7.handleError;
                    var10 = var11.bind(var7)(var10);
                    var10 = undefined;
                    return var10;
 1476:
                    var11 = var6.setTimeout;
                    var10 = function() {
                        var3 = _closure4_slot0;
                        var2 = var3.handleError;
                        var1 = 500;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var9 = 1000;
                    var9 = var11.bind(var8)(var10, var9);
                    _fun0024_ip = 1522; continue _fun0024;
 1501:
                    var10 = var7.handleError;
                    var9 = _closure1_slot14;
                    var9 = var9.ENTITY_TOO_LARGE;
                    var9 = var10.bind(var7)(var9);
 1522:
                    return var8;
 1525:
                    var10 = _closure1_slot16;
                    var9 = var10.error;
                    var8 = var6.JSON;
                    var6 = var8.stringify;
                    var8 = var6.bind(var8)(var4);
                    var6 = 'File does not have a filename or size is 0.';
                    var6 = var9.bind(var10)(var6, var8);
                    var6 = var7.handleError;
                    var5 = _closure1_slot14;
                    var5 = var5.INVALID_FILE_ASSET;
                    var5 = var6.bind(var7)(var5);
                    var5 = undefined;
                    return var5;
 1589:
                    return var4;
 1592:
                    return var3;
 1595:
                    return var2;
 1598:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot3 = var7;
        var7 = function upload() {
            var1 = undefined;
            var4 = _closure2_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[13] = var6;
        var6 = {};
        var7 = 'reactNativeCompressAndExtractData';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0028_ip = 1732; continue _fun0028 }
 15:
                    var _closure4_slot0 = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 24;
                    var5 = var7[var5];
                    var13 = undefined;
                    var7 = var6.bind(var13)(var5);
                    var6 = var7.getUploadTarget;
                    var5 = var2.item;
                    var5 = var5.target;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.shouldReactNativeCompressUploads;
                    if(var5) { _fun0028_ip = 117; continue _fun0028 }
 77:
                    var6 = var2.uploadAnalytics;
                    var5 = true;
                    var6['compressAndExtractDisabled'] = var5;
                    var7 = _closure1_slot16;
                    var6 = var7.log;
                    var5 = 'reactNativeCompressAndExtractData() disabled by upload target';
                    var5 = var6.bind(var7)(var5);
                    return var2;
 117:
                    var6 = var2.reactNativeFilePrepped;
                    var5 = true;
                    if(!(var5 !== var6)) { _fun0028_ip = 1671; continue _fun0028 }
 132:
                    var9 = _closure1_slot16;
                    var8 = var9.log;
                    var11 = var2.id;
                    var6 = global;
                    var7 = var6.HermesInternal;
                    var10 = var7.concat;
                    var7 = 'Starting compression/conversion for ';
                    var7 = var10.bind(var7)(var11);
                    var7 = var8.bind(var9)(var7);
                    var8 = var2.trackTime;
                    var7 = _closure1_slot4;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0029_ip = 87; continue _fun0029 }
 7:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 27;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.getAttachmentFile;
                                var3 = _closure4_slot0;
                                var6 = var3.reactNativeFileIndex;
                                var2 = null;
                                var7 = var2 != var6;
                                var2 = 0;
                                if(!var7) { _fun0029_ip = 65; continue _fun0029 }
 62:
                                var2 = var6;
 65:
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=75);
 73:
                                return var2;
 75:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0029_ip = 84; continue _fun0029 }
 81:
                                return var2;
 84:
                                return var2;
 87:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var7 = var7.bind(var13)(var4);
                    var4 = 'compressTimeMs';
                    var4 = var8.bind(var2)(var4, var7);
                    SaveGenerator(address=210);
 208:
                    return var4;
 210:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0028_ip = 1668; continue _fun0028 }
 219:
                    var9 = null;
                    if(!(var9 != var4)) { _fun0028_ip = 1624; continue _fun0028 }
 228:
                    var7 = var4.file;
                    if(!(var9 != var7)) { _fun0028_ip = 1624; continue _fun0028 }
 241:
                    var7 = var4.uri;
                    var8 = var4.file;
                    var11 = var8.name;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 15;
                    var8 = var12[var8];
                    var12 = var10.bind(var13)(var8);
                    var10 = var12.isResolvedUpload;
                    var8 = var4.file;
                    var8 = var10.bind(var12)(var8);
                    if(!var8) { _fun0028_ip = 1062; continue _fun0028 }
 301:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.imageCompressionQuality;
                    var10['imageCompressionQuality'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoCompressionQuality;
                    var10['videoCompressionQuality'] = var8;
                    var8 = var4.file;
                    var8 = var8.isImage;
                    if(!var8) { _fun0028_ip = 412; continue _fun0028 }
 364:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceWidth;
                    var10['sourceMediaWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceHeight;
                    var10['sourceMediaHeight'] = var8;
 412:
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    if(!(var13 !== var8)) { _fun0028_ip = 668; continue _fun0028 }
 431:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.width;
                    var10['sourceMediaWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.height;
                    var10['sourceMediaHeight'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.format;
                    var10['sourceMediaFormat'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.bitRate;
                    var10['sourceVideoBitrate'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.frameRate;
                    var10['sourceVideoFramerate'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.durationMs;
                    var10['videoDurationMs'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.sourceProfile;
                    var10['sourceVideoProfile'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    var8 = var8.sourceLevel;
                    var10['sourceVideoLevel'] = var8;
 668:
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    if(!(var13 !== var8)) { _fun0028_ip = 942; continue _fun0028 }
 687:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.targetWidth;
                    var10['targetVideoWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.targetHeight;
                    var10['targetVideoHeight'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.targetBitrate;
                    var10['targetVideoBitrate'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var12 = var8.useHEVC;
                    var8 = 'avc1';
                    if(!var12) { _fun0028_ip = 816; continue _fun0028 }
 810:
                    var8 = 'hvc1';
 816:
                    var10['targetVideoCodec'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.frameRate;
                    var10['targetVideoFramerate'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.createHDR;
                    var10['targetVideoIsHdr'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.hevcIsSupported;
                    var10['hevcIsSupported'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    var8 = var8.progressUpdateGranularity;
                    var10['progressUpdateGranularity'] = var8;
 942:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.psnr;
                    var10['psnr'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.ssim;
                    var10['ssim'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.origin;
                    var10['origin'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.psnrMeasurementLatencyMs;
                    var10['psnrMeasurementLatencyMs'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.ssimMeasurementLatencyMs;
                    var10['ssimMeasurementLatencyMs'] = var8;
 1062:
                    var2['filename'] = var11;
                    if(!(var9 != var11)) { _fun0028_ip = 1477; continue _fun0028 }
 1075:
                    if(!(var9 != var7)) { _fun0028_ip = 1477; continue _fun0028 }
 1082:
                    var8 = var4.file;
                    var8 = var8.type;
                    if(!(var9 != var8)) { _fun0028_ip = 1477; continue _fun0028 }
 1100:
                    var10 = var11.split;
                    var8 = '.';
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.pop;
                    var10 = var8.bind(var10)();
                    var8 = var9 == var10;
                    var12 = undefined;
                    if(var8) { _fun0028_ip = 1143; continue _fun0028 }
 1133:
                    var8 = var10.toLowerCase;
                    var12 = var8.bind(var10)();
 1143:
                    var14 = 'image/jpeg';
                    var10 = 'jpg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 1186; continue _fun0028 }
 1162:
                    var10 = 'jpeg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 1186; continue _fun0028 }
 1175:
                    var10 = var4.file;
                    var8 = var10.type;
 1186:
                    var10 = var2.uploadAnalytics;
                    var10['convertedMimeType'] = var8;
                    var18 = var4.fileSize;
                    if(!(var9 == var18)) { _fun0028_ip = 1259; continue _fun0028 }
 1208:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 22;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.getFileData;
                    var10 = var10.bind(var12)(var7);
                    SaveGenerator(address=1243);
 1241:
                    return var10;
 1243:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0028_ip = 1256; continue _fun0028 }
 1249:
                    var18 = var10.size;
                    _fun0028_ip = 1259; continue _fun0028;
 1256:
                    return var10;
 1259:
                    var2['postCompressionSize'] = var18;
                    var2['currentSize'] = var18;
                    if(!(var9 != var18)) { _fun0028_ip = 1402; continue _fun0028 }
 1278:
                    var12 = _closure1_slot16;
                    var10 = var12.log;
                    var19 = var2.id;
                    var9 = var6.HermesInternal;
                    var16 = var9.concat;
                    var26 = 'Completed compression and conversion. Output size=';
                    var24 = ' bytes; filename=';
                    var22 = '; mimeType=';
                    var20 = ' for ';
                    var25 = var18;
                    var23 = var11;
                    var21 = var8;
                    var9 = var26[var16](var25, var24, var23, var22, var21, var20, var19, var18);
                    var9 = var10.bind(var12)(var9);
                    var9 = {};
                    var9['uri'] = var7;
                    var9['filename'] = var11;
                    var9['mimeType'] = var8;
                    var8 = {};
                    var24 = var2.item;
                    var25 = var8;
                    var10 = copyDataProperties(var25, var24);
                    var25 = var8;
                    var24 = var9;
                    var9 = copyDataProperties(var25, var24);
                    var2['item'] = var8;
                    var2['reactNativeFilePrepped'] = var5;
                    return var2;
 1402:
                    var10 = _closure1_slot16;
                    var9 = var10.error;
                    var13 = var2.id;
                    var8 = var6.HermesInternal;
                    var12 = var8.concat;
                    var8 = 'Size missing from file data for ';
                    var8 = var12.bind(var8)(var13);
                    var8 = var9.bind(var10)(var8);
                    var10 = var6.Error;
                    var8 = var10.prototype;
                    var9 = Object.create(var8, {constructor: {value: var10}});
                    var25 = 'Size missing from file data';
                    var26 = var9;
                    var8 = new var26[var10](var25, var24);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
 1477:
                    var12 = _closure1_slot16;
                    var9 = var12.error;
                    var15 = {};
                    var15['filename'] = var11;
                    var15['uri'] = var7;
                    var8 = var4.file;
                    var8 = var8.type;
                    var15['type'] = var8;
                    var14 = var2.id;
                    var8 = var6.HermesInternal;
                    var13 = var8.concat;
                    var10 = 'Insufficient file data: ';
                    var8 = ' for ';
                    var8 = var13.bind(var10)(var15, var8, var14);
                    var8 = var9.bind(var12)(var8);
                    var9 = var6.Error;
                    var8 = {};
                    var8['filename'] = var11;
                    var8['uri'] = var7;
                    var7 = var4.file;
                    var7 = var7.type;
                    var8['type'] = var7;
                    var7 = var6.HermesInternal;
                    var7 = var7.concat;
                    var25 = var7.bind(var10)(var8);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var26 = var8;
                    var7 = new var26[var9](var25, var24);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
 1624:
                    var8 = _closure1_slot16;
                    var7 = var8.error;
                    var10 = var2.id;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'Failed to get compressed file for ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    return var2;
 1668:
                    return var4;
 1671:
                    var4 = var2.uploadAnalytics;
                    var4['fileAlreadyPrepped'] = var5;
                    var5 = _closure1_slot16;
                    var4 = var5.log;
                    var7 = var2.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'reactNativeCompressAndExtractData() file already prepped - ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 1732:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot2 = var7;
        var7 = function reactNativeCompressAndExtractData() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[14] = var6;
        var6 = {};
        var7 = 'maybeConvertToWebP';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0030_ip = 724; continue _fun0030 }
 13:
                    var2 = undefined;
                    var16 = undefined;
                    var3 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 28;
                    var6 = var9[var6];
                    var9 = var7.bind(var2)(var6);
                    var7 = var9.getAttachmentWebPConversionConfig;
                    var6 = {};
                    var11 = 'CloudUpload.maybeConvertToWebP';
                    var6['location'] = var11;
                    var6 = var7.bind(var9)(var6);
                    var16 = var6;
                    var6 = var6.enabled;
                    if(!var6) { _fun0030_ip = 721; continue _fun0030 }
 85:
                    var6 = var4.item;
                    var6 = var6.file;
                    var13 = null;
                    if(!(var13 == var6)) { _fun0030_ip = 157; continue _fun0030 }
 102:
                    var9 = _closure1_slot16;
                    var7 = var9.warn;
                    var15 = var4.id;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var12 = var6.concat;
                    var11 = 'webp conversion skipped for ';
                    var6 = ': no file';
                    var6 = var12.bind(var11)(var15, var6);
                    var6 = var7.bind(var9)(var6);
                    _fun0030_ip = 721; continue _fun0030;
 157:
                    var6 = var4._aborted;
                    if(var6) { _fun0030_ip = 721; continue _fun0030 }
 169:
                    var7 = global;
                    var9 = var7.performance;
                    var6 = var9.now;
                    var3 = var6.bind(var9)();
 186: // try_start_0
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var12 = 29;
                    var6 = var6[var12];
                    var15 = var9.bind(var2)(var6);
                    var11 = var15.convertFilesToWebP;
                    var6 = var4.item;
                    var6 = var6.file;
                    var9 = new Array(1);
                    var9[0] = var6;
                    var6 = {};
                    var17 = var16.minFileSizeBytes;
                    var6['minFileSizeBytes'] = var17;
                    var16 = var16.minSizeReductionPercent;
                    var6['minSizeReductionPercent'] = var16;
                    var6 = var11.bind(var15)(var9, var6);
                    SaveGenerator(address=265);
 263:
                    return var6;
 265:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0030_ip = 598; continue _fun0030 }
 274:
                    var8 = var6;
                    var9 = var4._aborted;
                    if(var9) { _fun0030_ip = 595; continue _fun0030 }
 289:
                    var9 = var8;
                    var11 = var9.length;
                    var9 = 0;
                    if(!(var11 > var9)) { _fun0030_ip = 319; continue _fun0030 }
 303:
                    var11 = var8;
                    var11 = var11[var9];
                    var11 = var11.success;
                    if(var11) { _fun0030_ip = 428; continue _fun0030 }
 319:
                    var11 = var8;
                    var11 = var11[var9];
                    var14 = var11;
                    var15 = var13 == var11;
                    var11 = undefined;
                    if(var15) { _fun0030_ip = 344; continue _fun0030 }
 338:
                    var11 = var14.reason;
 344:
                    var10 = var11;
                    var11 = var13 != var11;
                    var17 = 'unknown';
                    if(!var11) { _fun0030_ip = 361; continue _fun0030 }
 358:
                    var17 = var10;
 361:
                    var10 = var4.uploadAnalytics;
                    var10['conversionFailureReason'] = var17;
                    var13 = _closure1_slot16;
                    var11 = var13.log;
                    var16 = var4.id;
                    var10 = var7.HermesInternal;
                    var15 = var10.concat;
                    var14 = 'webp conversion skipped for ';
                    var10 = ': ';
                    var10 = var15.bind(var14)(var16, var10, var17);
                    var10 = var11.bind(var13)(var10);
                    _fun0030_ip = 593; continue _fun0030;
 428:
                    var8 = var8[var9];
                    var10 = var4.item;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var11 = var11.bind(var2)(var9);
                    var9 = var11.getBestFileForUpload;
                    var9 = var9.bind(var11)(var8);
                    var10['file'] = var9;
                    var9 = var4.item;
                    var9 = var9.file;
                    var9 = var9.size;
                    var4['currentSize'] = var9;
                    var10 = _closure1_slot16;
                    var9 = var10.log;
                    var19 = var4.id;
                    var25 = var8.sizeBefore;
                    var23 = var8.sizeAfter;
                    var12 = var8.compressionRatio;
                    var11 = var12.toFixed;
                    var8 = 2;
                    var21 = var11.bind(var12)(var8);
                    var8 = var7.HermesInternal;
                    var15 = var8.concat;
                    var28 = 'webp conversion worked for ';
                    var26 = ': ';
                    var24 = ' -> ';
                    var22 = ' bytes (';
                    var20 = 'x)';
                    var27 = var19;
                    var8 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20, var19);
                    var8 = var9.bind(var10)(var8);
 593: // try_end0
                    _fun0030_ip = 668; continue _fun0030;
 595:
                    return var2;
 598:
                    return var6;
 601: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = var4.uploadAnalytics;
                    var6 = 'unknown_error';
                    var8['conversionFailureReason'] = var6;
                    var8 = _closure1_slot16;
                    var6 = var8.warn;
                    var12 = var4.id;
                    var5 = var7.HermesInternal;
                    var11 = var5.concat;
                    var10 = 'webp conversion failed for ';
                    var5 = ':';
                    var5 = var11.bind(var10)(var12, var5);
                    var5 = var6.bind(var8)(var5, var9);
 668:
                    var4 = var4.uploadAnalytics;
                    var4 = var4.timing;
                    var6 = var7.Math;
                    var5 = var6.round;
                    var8 = var7.performance;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var3 = var7 - var3;
                    var3 = var5.bind(var6)(var3);
                    var4['compressTimeMs'] = var3;
 721:
                    return var2;
 724:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot1 = var7;
        var7 = function maybeConvertToWebP() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[15] = var6;
        var6 = {};
        var7 = 'handleError';
        var6['key'] = var7;
        var7 = function handleError(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var4 = arg1;
                var2 = this;
                var1 = var4;
                var6 = var2.setStatus;
                var3 = _closure1_slot18;
                var5 = var3.ERROR;
                var5 = var6.bind(var2)(var5);
                var2['error'] = var4;
                var4 = var2.trackUploadFinished;
                var3 = var3.ERROR;
                var3 = var4.bind(var2)(var3);
 56: // try_start_0
                var4 = var2.emit;
                var3 = var1;
                var1 = 'error';
                var1 = var4.bind(var2)(var1, var3);
 75: // try_end0
                _fun0031_ip = 79; continue _fun0031;
 77: // catch_target0
                CatchBlockStart(arg_register=0);
 79:
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[16] = var6;
        var6 = {};
        var7 = 'handleComplete';
        var6['key'] = var7;
        var7 = function handleComplete(arg1) {
            var2 = this;
            var4 = var2.setStatus;
            var3 = _closure1_slot18;
            var3 = var3.COMPLETED;
            var3 = var4.bind(var2)(var3);
            var4 = _closure1_slot16;
            var3 = var4.log;
            var6 = var2.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Upload complete for ';
            var1 = var5.bind(var1)(var6);
            var1 = var3.bind(var4)(var1);
            var4 = var2.emit;
            var3 = 'complete';
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
            var1 = var2.removeAllListeners;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[17] = var6;
        var6 = {};
        var7 = 'cancel';
        var6['key'] = var7;
        var7 = function cancel() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot16;
                var4 = var5.log;
                var7 = var2.id;
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var3 = 'Cancelled called for ';
                var3 = var6.bind(var3)(var7);
                var3 = var4.bind(var5)(var3);
                var3 = true;
                var2['_aborted'] = var3;
                var4 = var2._abortController;
                var3 = var4.abort;
                var3 = var3.bind(var4)();
                var5 = var2.trackUploadFinished;
                var3 = _closure1_slot18;
                var4 = var3.CANCELED;
                var4 = var5.bind(var2)(var4);
                var4 = var2.status;
                var3 = var3.COMPLETED;
                if(!(var4 === var3)) { _fun0032_ip = 119; continue _fun0032 }
 110:
                var3 = var2.delete;
                var3 = var3.bind(var2)();
 119:
                var3 = var2.setStatus;
                var1 = _closure1_slot18;
                var1 = var1.CANCELED;
                var1 = var3.bind(var2)(var1);
                var3 = var2.emit;
                var1 = 'complete';
                var1 = var3.bind(var2)(var1);
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[18] = var6;
        var6 = {};
        var7 = 'resetState';
        var6['key'] = var7;
        var7 = function resetState() {
            var6 = this;
            var2 = _closure1_slot18;
            var2 = var2.NOT_STARTED;
            var6['status'] = var2;
            var3 = undefined;
            var6['uploadedFilename'] = var3;
            var6['responseUrl'] = var3;
            var6['error'] = var3;
            var6['startTime'] = var3;
            var1 = _closure1_slot19;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var11 = var2;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var2;
            var6['uploadAnalytics'] = var1;
            var1 = 0;
            var6['uploadAttempts'] = var1;
            var1 = false;
            var6['_aborted'] = var1;
            var1 = global;
            var1 = var1.AbortController;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var11 = var2;
            var1 = new var11[var1](var10);
            var1 = var1 instanceof Object ? var1 : var2;
            var6['_abortController'] = var1;
            var10 = _closure2_slot11;
            var4 = function _superPropGet(arg1, arg2, arg3, arg4) {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot5;
                    var4 = _closure1_slot9;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0033_ip = 44; continue _fun0033 }
 39:
                    var1 = var5.prototype;
 44:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'resetState';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0033_ip = 98; continue _fun0033 }
 79:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0033_ip = 98; continue _fun0033 }
 93:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
 98:
                    return var1;
                }
            };
            var9 = 'resetState';
            var7 = 3;
            var11 = undefined;
            var8 = var6;
            var2 = var11[var4](var10, var9, var8, var7, var6);
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var7;
        var2[19] = var6;
        var6 = {};
        var7 = 'delete';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0034_ip = 149; continue _fun0034 }
 13:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = var5.uploadedFilename;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0034_ip = 146; continue _fun0034 }
 29:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 24;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.getUploadTarget;
                    var6 = var5.item;
                    var6 = var6.target;
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getDeleteUploadURL;
                    var5 = var5.uploadedFilename;
                    var3 = var6.bind(var7)(var5);
 93: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.HTTP;
                    var4 = var5.del;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=133);
 131:
                    return var3;
 133:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0034_ip = 141; continue _fun0034 }
 139: // try_end0
                    _fun0034_ip = 146; continue _fun0034;
 141:
                    return var3;
 144: // catch_target0
                    CatchBlockStart(arg_register=2);
 146:
                    return var2;
 149:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var _closure2_slot0 = var7;
        var7 = function _delete() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var7;
        var2[20] = var6;
        var6 = {};
        var7 = 'setResponseUrl';
        var6['key'] = var7;
        var7 = function setResponseUrl(arg1) {
            var2 = arg1;
            var1 = this;
            var1['responseUrl'] = var2;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[21] = var6;
        var6 = {};
        var7 = 'setStatus';
        var6['key'] = var7;
        var7 = function setStatus(arg1) {
            var2 = arg1;
            var1 = this;
            var1['status'] = var2;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[22] = var6;
        var6 = {};
        var7 = 'setFilename';
        var6['key'] = var7;
        var7 = function setFilename(arg1) {
            var2 = arg1;
            var1 = this;
            var1['filename'] = var2;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[23] = var6;
        var6 = {};
        var7 = 'setUploadedFilename';
        var6['key'] = var7;
        var7 = function setUploadedFilename(arg1) {
            var2 = arg1;
            var1 = this;
            var1['uploadedFilename'] = var2;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var2[24] = var6;
        var6 = {};
        var7 = 'trackUploadStart';
        var6['key'] = var7;
        var7 = function trackUploadStart() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var7 = this;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot15;
                var3 = var2.ATTACHMENT_UPLOAD_STARTED;
                var2 = {};
                var8 = var7.currentSize;
                var2['file_size'] = var8;
                var9 = var7.mimeType;
                var8 = null;
                var10 = var8 != var9;
                var8 = 'unknown';
                if(!var10) { _fun0035_ip = 78; continue _fun0035 }
 75:
                var8 = var9;
 78:
                var2['mime_type'] = var8;
                var8 = _closure1_slot12;
                var9 = var8.videoUploadQuality;
                var2['video_upload_quality'] = var9;
                var9 = var8.dataSavingMode;
                var2['data_saving_mode'] = var9;
                var8 = var8.dataSavingMode;
                var2['low_quality_image_mode'] = var8;
                var7 = var7.channelId;
                var2['channel_id'] = var7;
                var7 = _closure1_slot13;
                var6 = var7.getType;
                var6 = var6.bind(var7)();
                var2['connection_type'] = var6;
                var6 = var7.getEffectiveConnectionSpeed;
                var6 = var6.bind(var7)();
                var2['effective_connection_speed'] = var6;
                var6 = var7.getServiceProvider;
                var6 = var6.bind(var7)();
                var2['service_provider'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[25] = var6;
        var6 = {};
        var7 = 'trackUploadFinished';
        var6['key'] = var7;
        var7 = function trackUploadFinished(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var7 = this;
                var1 = var7.startTime;
                var10 = null;
                var1 = var10 != var1;
                var8 = -1;
                if(!var1) { _fun0036_ip = 51; continue _fun0036 }
 24:
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = var7.startTime;
                var8 = var2 - var1;
 51:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot15;
                var3 = var2.ATTACHMENT_UPLOAD_FINISHED;
                var2 = {};
                var2['duration_ms'] = var8;
                var8 = var7.currentSize;
                var2['file_size'] = var8;
                var8 = var7.preCompressionSize;
                var2['pre_compression_file_size'] = var8;
                var8 = arg1;
                var2['final_state'] = var8;
                var11 = var7.mimeType;
                var12 = var10 != var11;
                var8 = 'unknown';
                var9 = var8;
                if(!var12) { _fun0036_ip = 155; continue _fun0036 }
 152:
                var9 = var11;
 155:
                var2['mime_type'] = var9;
                var9 = var7.uploadAnalytics;
                var11 = var9.numUploadAttempts;
                var12 = var10 != var11;
                var9 = 1;
                if(!var12) { _fun0036_ip = 185; continue _fun0036 }
 182:
                var9 = var11;
 185:
                var2['num_upload_attempts'] = var9;
                var9 = var7.error;
                var2['error_code'] = var9;
                var9 = _closure1_slot12;
                var11 = var9.videoUploadQuality;
                var2['video_upload_quality'] = var11;
                var11 = var9.dataSavingMode;
                var2['data_saving_mode'] = var11;
                var9 = var9.dataSavingMode;
                var2['low_quality_image_mode'] = var9;
                var9 = var7.uploadAnalytics;
                var9 = var9.timing;
                var9 = var9.compressTimeMs;
                var2['compress_time_ms'] = var9;
                var9 = var7.uploadAnalytics;
                var9 = var9.timing;
                var9 = var9.getUploadUrlTimeMs;
                var2['get_upload_url_time_ms'] = var9;
                var9 = var7.uploadAnalytics;
                var9 = var9.timing;
                var9 = var9.uploadTimeMs;
                var2['upload_time_ms'] = var9;
                var9 = var7.uploadAnalytics;
                var11 = var9.convertedMimeType;
                var12 = var10 != var11;
                var9 = var8;
                if(!var12) { _fun0036_ip = 343; continue _fun0036 }
 340:
                var9 = var11;
 343:
                var2['converted_mime_type'] = var9;
                var9 = var7.uploadAnalytics;
                var11 = var9.imageCompressionQuality;
                var12 = var10 != var11;
                var9 = 0;
                if(!var12) { _fun0036_ip = 374; continue _fun0036 }
 371:
                var9 = var11;
 374:
                var2['image_compression_quality'] = var9;
                var9 = var7.uploadAnalytics;
                var9 = var9.videoCompressionQuality;
                var10 = var10 != var9;
                if(!var10) { _fun0036_ip = 401; continue _fun0036 }
 398:
                var8 = var9;
 401:
                var2['video_compression_quality'] = var8;
                var9 = var7.mimeType;
                var8 = var7.uploadAnalytics;
                var8 = var8.convertedMimeType;
                var8 = var9 !== var8;
                var2['was_converted'] = var8;
                var9 = var7.currentSize;
                var8 = var7.preCompressionSize;
                var8 = var9 < var8;
                var2['was_compressed'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceMediaWidth;
                var2['source_media_width'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceMediaHeight;
                var2['source_media_height'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceMediaFormat;
                var2['source_media_format'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceVideoBitrate;
                var2['source_video_bitrate'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.videoDurationMs;
                var2['video_duration_ms'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceVideoProfile;
                var2['source_video_profile_name'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceVideoLevel;
                var2['source_video_profile_level'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoWidth;
                var2['target_video_width'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoHeight;
                var2['target_video_height'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoBitrate;
                var2['target_video_bitrate'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoCodec;
                var2['target_video_codec'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoFramerate;
                var2['target_video_framerate'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.targetVideoIsHdr;
                var2['target_video_is_hdr'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.hevcIsSupported;
                var2['hevc_is_supported'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.progressUpdateGranularity;
                var2['progress_update_granularity'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.sourceVideoFramerate;
                var2['source_video_framerate'] = var8;
                var8 = var7.channelId;
                var2['channel_id'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.timing;
                var8 = var8.hashTimeMs;
                var2['hash_time_ms'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.validUploadHash;
                var2['valid_upload_hash'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.psnr;
                var2['psnr'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.ssim;
                var2['ssim'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.origin;
                var2['origin'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.psnrMeasurementLatencyMs;
                var2['psnr_measurement_latency_ms'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.ssimMeasurementLatencyMs;
                var2['ssim_measurement_latency_ms'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.uploadResumptionCount;
                var2['upload_resumption_count'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.uploadResumptionReason;
                var2['upload_resumption_reason'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.uploadResumptionPosition;
                var2['upload_resumption_position'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.timing;
                var8 = var8.resumptionCheckTimeMs;
                var2['upload_resumption_check_time_ms'] = var8;
                var7 = var7.uploadAnalytics;
                var7 = var7.conversionFailureReason;
                var2['conversion_failure_reason'] = var7;
                var7 = _closure1_slot13;
                var6 = var7.getType;
                var6 = var6.bind(var7)();
                var2['connection_type'] = var6;
                var6 = var7.getEffectiveConnectionSpeed;
                var6 = var6.bind(var7)();
                var2['effective_connection_speed'] = var6;
                var6 = var7.getServiceProvider;
                var6 = var6.bind(var7)();
                var2['service_provider'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var6['value'] = var7;
        var2[26] = var6;
        var6 = {};
        var7 = 'fromJson';
        var6['key'] = var7;
        var1 = function fromJson(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var5 = arg1;
                var8 = _closure2_slot11;
                var12 = var5.item;
                var11 = var5.channelId;
                var10 = var5.showLargeMessageDialog;
                var9 = var5.reactNativeFileIndex;
                var3 = var8.prototype;
                var3 = Object.create(var3, {constructor: {value: var8}});
                var13 = var3;
                var1 = new var13[var8](var12, var11, var10, var9, var8);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var4 = var3.bind(var4)(var5);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                        var4 = _closure1_slot3;
                        var1 = undefined;
                        var3 = arg1;
                        var2 = 2;
                        var3 = var4.bind(var1)(var3, var2);
                        var2 = 0;
                        var4 = var3[var2];
                        var2 = 1;
                        var3 = var3[var2];
                        var5 = var4.startsWith;
                        var2 = '_';
                        var2 = var5.bind(var4)(var2);
                        if(var2) { _fun0038_ip = 63; continue _fun0038 }
 52:
                        var2 = _closure3_slot0;
                        var2[var4] = var3;
 63:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var4 = var1.status;
                var3 = _closure1_slot18;
                var3 = var3.COMPLETED;
                if(!(var4 !== var3)) { _fun0037_ip = 130; continue _fun0037 }
 114:
                var2 = _closure1_slot18;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
 130:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 31;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/CloudUpload.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ResumableUploadError'] = var5;
    var3['CloudUploadStatus'] = var4;
    var3['CloudUpload'] = var2;
    return var1;
})();