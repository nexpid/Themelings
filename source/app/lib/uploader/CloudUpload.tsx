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
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot9;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot8;
            var1 = _closure1_slot21;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot9;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
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
case 0:
                var4 = arg1;
                var2 = arguments[1];
                var8 = this;
                var7 = undefined;
                if(!(var2 === var7)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = {};
case 11:
                var3 = _closure1_slot6;
                var6 = _closure2_slot0;
                var3 = var3.bind(var7)(var8, var6);
                var10 = var2.cause;
                var11 = var2.response;
                var3 = var6.getErrorKind;
                var9 = null;
                var2 = var10;
                if(!(var9 == var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var12 = global;
                var14 = var12.Error;
                var15 = var9 == var11;
                var13 = undefined;
                if(var15) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var13 = var11.text;
case 15:
                var16 = var9 != var13;
                var15 = 'Unknown error';
                if(!var16) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                var15 = var13;
case 17:
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = '';
                var21 = var13.bind(var12)(var15);
                var13 = var14.prototype;
                var13 = Object.create(var13, {constructor: {value: var14}});
                var22 = var13;
                var12 = new var22[var14](var21, var20);
                var2 = var12 instanceof Object ? var12 : var13;
case 13:
                var3 = var3.bind(var6)(var2, var11);
                var2 = 'server_error';
                if(!(var2 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var2 = global;
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var6 = '';
                var2 = ':';
                var2 = var12.bind(var6)(var4, var2, var3);
                _fun0003_ip = 21; continue _fun0003;
case 19:
                var12 = var9 == var11;
                var6 = undefined;
                if(var12) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var6 = var11.status;
case 22:
                var9 = var9 != var6;
                var13 = 0;
                if(!var9) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var13 = var6;
case 24:
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
case 21:
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
case 0:
                var2 = this;
                var3 = var2.kind;
                var1 = 'server_error';
                var1 = var1 === var3;
                if(var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var3 = var2.kind;
                var2 = 'network_error';
                var1 = var2 === var3;
case 26:
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
case 0:
                var1 = arg1;
                var4 = arg2;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0005_ip = 28; continue _fun0005 }
case 11:
                var3 = var4.status;
case 28:
                var4 = var2 != var3;
                var2 = 0;
                if(!var4) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var2 = var3;
case 29:
                var4 = var1.message;
                var3 = var4.toLowerCase;
                var5 = var3.bind(var4)();
                var4 = var5.includes;
                var3 = 'network';
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var5 = var1.message;
                var4 = var5.toLowerCase;
                var6 = var4.bind(var5)();
                var5 = var6.includes;
                var4 = 'terminated';
                var3 = var5.bind(var6)(var4);
case 31:
                if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var5 = var1.message;
                var4 = var5.toLowerCase;
                var6 = var4.bind(var5)();
                var5 = var6.includes;
                var4 = 'offline';
                var3 = var5.bind(var6)(var4);
case 33:
                if(var3) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var4 = var1.message;
                var1 = var4.toLowerCase;
                var5 = var1.bind(var4)();
                var4 = var5.includes;
                var1 = 'changed';
                var3 = var4.bind(var5)(var1);
case 35:
                var1 = 500;
                if(!(var2 >= var1)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var1 = 600;
                var2 = var2 < var1;
                var1 = 'server_error';
                if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 37:
                var2 = 'unknown';
                if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 23:
                var2 = 'network_error';
case 40:
                var1 = var2;
case 39:
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
case 0:
                    var2 = arg1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.HTTPResponseError;
                    var3 = var2 instanceof var1;
                    if(var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var4 = global;
                    var3 = var4.Error;
                    var8 = var2 instanceof var3;
                    var6 = _closure2_slot0;
                    var5 = _closure3_slot0;
                    var3 = {};
                    if(var8) { _fun0006_ip = 43; continue _fun0006 }
case 44:
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
case 43:
                    var3['cause'] = var2;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var4;
                    var10 = var5;
                    var9 = var3;
                    var3 = new var11[var6](var10, var9, var8);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 41:
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
    var6 = 'REMOVED_FROM_MSG_DRAFT';
    var4['REMOVED_FROM_MSG_DRAFT'] = var6;
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
        var5 = function CloudUpload(arg1, arg2, arg3, arg4, arg5) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = arg1;
                var4 = arg5;
                var9 = this;
                var1 = _closure1_slot6;
                var7 = _closure2_slot11;
                var5 = undefined;
                var1 = var1.bind(var5)(var9, var7);
                var2 = _closure1_slot20;
                var1 = new Array(2);
                var1[0] = var8;
                var10 = arg3;
                var1[1] = var10;
                var1 = var2.bind(var5)(var9, var7, var1);
                var _closure3_slot0 = var1;
                var2 = _closure1_slot18;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
                var7 = 0;
                var1['loaded'] = var7;
                var2 = false;
                var1['reactNativeFilePrepped'] = var2;
                var9 = true;
                var1['allowOptimization'] = var9;
                var9 = _closure1_slot19;
                var10 = var9.prototype;
                var10 = Object.create(var10, {constructor: {value: var9}});
                var15 = var10;
                var9 = new var15[var9](var14);
                var9 = var9 instanceof Object ? var9 : var10;
                var1['uploadAnalytics'] = var9;
                var1['uploadAttempts'] = var7;
                var1['_aborted'] = var2;
                var6 = function(arg1) {
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
                var1['createResumeAwareProgressFn'] = var6;
                var6 = arg2;
                var1['channelId'] = var6;
                var9 = var8.file;
                var6 = null;
                var11 = var6 == var9;
                var10 = undefined;
                if(var11) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var10 = var9.size;
case 45:
                var11 = var6 != var10;
                var9 = 0;
                if(!var11) { _fun0007_ip = 23; continue _fun0007 }
case 47:
                var9 = var10;
case 23:
                var1['preCompressionSize'] = var9;
                var9 = var8.file;
                var10 = var6 == var9;
                var8 = undefined;
                if(var10) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var8 = var9.size;
case 48:
                var9 = var6 != var8;
                var7 = 0;
                if(!var9) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var7 = var8;
case 50:
                var1['currentSize'] = var7;
                var7 = arg4;
                var1['reactNativeFileIndex'] = var7;
                if(!(var6 != var4)) { _fun0007_ip = 52; continue _fun0007 }
case 21:
                var1['allowOptimization'] = var4;
case 52:
                var4 = global;
                var4 = var4.AbortController;
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var15 = var7;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['_abortController'] = var4;
                var4 = var1.origin;
                if(!(var6 != var4)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var6 = var1.uploadAnalytics;
                var4 = var1.origin;
                var7 = 'string';
                var4 = typeof var4;
                if(!(var7 !== var4)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 15;
                var4 = var8[var4];
                var4 = var7.bind(var5)(var4);
                var7 = var4.UploadOrigin;
                var4 = var1.origin;
                var4 = var7[var4];
                _fun0007_ip = 57; continue _fun0007;
case 55:
                var4 = var1.origin;
case 57:
                var6['origin'] = var4;
case 53:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 16;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.DefaultHttpClient;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['_uploadHttpClient'] = var3;
                var1['_libdiscoreEnabled'] = var2;
                var1['_resumptionEnabled'] = var2;
                return var1;
            }
        };
        var _closure2_slot11 = var5;
        var2 = _closure1_slot10;
        var4 = undefined;
        var1 = arg1;
        var1 = var2.bind(var4)(var5, var1);
        var3 = _closure1_slot7;
        var1 = {};
        var2 = 'parseRangeHeader';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var2 = var3.match;
                var1 = /^bytes=(\d+)-(\d+)(?:\\/\d+)?$/;
                var7 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0008_ip = 58; continue _fun0008 }
case 59:
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
case 58:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(28);
        var2[0] = var1;
        var1 = {};
        var8 = 'retryOpts';
        var1['key'] = var8;
        var8 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                if(!(var2 !== var1)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                var1 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var2 = var2.Millis;
                var6 = var2.HOUR;
                var2 = 1;
                var2 = var2 * var6;
                var1['timeout'] = var2;
                var2 = 12;
                var1['retries'] = var2;
                var2 = 18;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var12 = var4;
                var2 = new var12[var2](var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['backoff'] = var2;
                _fun0009_ip = 62; continue _fun0009;
case 60:
                var2 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 17;
                var5 = var8[var3];
                var5 = var4.bind(var7)(var5);
                var5 = var5.Millis;
                var6 = var5.HOUR;
                var5 = 1;
                var5 = var5 * var6;
                var2['timeout'] = var5;
                var5 = 18;
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
case 62:
                return var1;
            }
        };
        var1['value'] = var8;
        var2[1] = var1;
        var1 = {};
        var8 = 'createAttachmentUrlRetryOpts';
        var1['key'] = var8;
        var8 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
                if(!(var4 !== var1)) { _fun0010_ip = 8; continue _fun0010 }
case 61:
                var1 = var2.retryOpts;
                var1 = var1.bind(var2)();
                _fun0010_ip = 63; continue _fun0010;
case 8:
                var2 = {};
                var5 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 17;
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
                var5 = 18;
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
case 63:
                return var1;
            }
        };
        var1['value'] = var8;
        var2[2] = var1;
        var1 = {};
        var8 = 'supportsResume';
        var1['key'] = var8;
        var8 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2._libdiscoreEnabled;
                if(var1) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var3 = var2.item;
                var4 = var3.platform;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 15;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.UploadPlatform;
                var3 = var3.REACT_NATIVE;
                var1 = var4 !== var3;
case 64:
                if(!var1) { _fun0011_ip = 66; continue _fun0011 }
case 6:
                var1 = var2._resumptionEnabled;
case 66:
                return var1;
            }
        };
        var1['value'] = var8;
        var2[3] = var1;
        var1 = {};
        var8 = 'uploadFileToCloud';
        var1['key'] = var8;
        var9 = _closure1_slot4;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                    var2 = var6.responseUrl;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                    var10 = _closure1_slot16;
                    var5 = var10.log;
                    var7 = var6.id;
                    var11 = global;
                    var2 = var11.HermesInternal;
                    var4 = var2.concat;
                    var2 = 'Uploading ';
                    var4 = var4.bind(var2)(var7);
                    var2 = var6.item;
                    var12 = var2.platform;
                    var13 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 15;
                    var2 = var2[var7];
                    var9 = undefined;
                    var2 = var13.bind(var9)(var2);
                    var2 = var2.UploadPlatform;
                    var2 = var2.REACT_NATIVE;
                    if(!(var12 !== var2)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                    var2 = var6.item;
                    var2 = var2.file;
                    var13 = var2.name;
                    var2 = var11.HermesInternal;
                    var12 = var2.concat;
                    var2 = 'filename=';
                    var2 = var12.bind(var2)(var13);
                    _fun0012_ip = 73; continue _fun0012;
case 71:
                    var12 = var6.item;
                    var15 = var12.filename;
                    var12 = var6.item;
                    var14 = var12.uri;
                    var11 = var11.HermesInternal;
                    var13 = var11.concat;
                    var12 = 'filename=';
                    var11 = ', uri=';
                    var2 = var13.bind(var12)(var15, var11, var14);
case 73:
                    var2 = var5.bind(var10)(var4, var2);
                    var2 = var6.item;
                    var4 = var2.platform;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var9)(var2);
                    var2 = var2.UploadPlatform;
                    var2 = var2.REACT_NATIVE;
                    if(!(var4 !== var2)) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                    var2 = var6.item;
                    var5 = var2.file;
                    var4 = 'application/octet-stream';
                    _fun0012_ip = 57; continue _fun0012;
case 74:
                    var7 = {};
                    var2 = var6.item;
                    var2 = var2.mimeType;
                    var7['type'] = var2;
                    var2 = var6.item;
                    var2 = var2.uri;
                    var7['uri'] = var2;
                    var2 = var6.item;
                    var2 = var2.filename;
                    var7['name'] = var2;
                    var2 = var7.type;
                    var8 = var8 != var2;
                    var11 = 'application/octet-stream';
                    var2 = var11;
                    if(!var8) { _fun0012_ip = 55; continue _fun0012 }
case 76:
                    var10 = var7.type;
                    var8 = 'application/json';
                    var2 = var11;
                    if(!(var8 !== var10)) { _fun0012_ip = 55; continue _fun0012 }
case 77:
                    var2 = var7.type;
case 55:
                    var4 = var2;
                    var5 = var7;
case 57:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 19;
                    var2 = var8[var2];
                    var8 = var7.bind(var9)(var2);
                    var7 = var8.getResumableAttachmentUploadsV2Config;
                    var2 = {};
                    var10 = 'CloudUpload';
                    var2['location'] = var10;
                    var2 = var7.bind(var8)(var2);
                    var7 = var2.enableNewRetry;
                    if(var7) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var7 = {};
                    var7['Content-Type'] = var4;
                    var8 = var6.contentHash;
                    if(!(var9 !== var8)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                    var8 = var6.contentHash;
                    var7['Content-MD5'] = var8;
case 80:
                    var10 = {};
                    var8 = var6.responseUrl;
                    var10['url'] = var8;
                    var10['body'] = var5;
                    var10['headers'] = var7;
                    var7 = var6._abortController;
                    var7 = var7.signal;
                    var10['signal'] = var7;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 20;
                    var7 = var11[var7];
                    var13 = var8.bind(var9)(var7);
                    var12 = var13.throttle;
                    var8 = var6.createResumeAwareProgressFn;
                    var7 = 0;
                    var8 = var8.bind(var6)(var7);
                    var7 = 50;
                    var7 = var12.bind(var13)(var8, var7);
                    var10['onRequestProgress'] = var7;
                    var7 = false;
                    var10['rejectWithError'] = var7;
                    var7 = var6.retryOpts;
                    var17 = var7.bind(var6)();
                    var18 = var10;
                    var7 = copyDataProperties(var18, var17);
                    var8 = _closure1_slot0;
                    var7 = 14;
                    var7 = var11[var7];
                    var7 = var8.bind(var9)(var7);
                    var8 = var7.HTTP;
                    var7 = var8.put;
                    var7 = var7.bind(var8)(var10);
                    return var7;
case 78:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 16;
                    var7 = var7[var10];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.canUploadNatively;
                    var7 = var6.item;
                    var7 = var8.bind(var11)(var7);
                    if(!var7) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var9)(var7);
                    var7 = var7.LibdiscoreHttpClient;
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {constructor: {value: var7}});
                    var19 = var8;
                    var7 = new var19[var7](var18);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var6['_uploadHttpClient'] = var7;
                    var7 = true;
                    var6['_libdiscoreEnabled'] = var7;
                    var8 = _closure1_slot16;
                    var7 = var8.log;
                    var3 = 'Using libdiscore client for file upload';
                    var3 = var7.bind(var8)(var3);
case 82:
                    var2 = var2.enableResumption;
                    var6['_resumptionEnabled'] = var2;
                    var3 = var6.uploadFileWithResumption;
                    var2 = var6.responseUrl;
                    var2 = var3.bind(var6)(var2, var5, var4);
                    SaveGenerator(address=760);
case 84:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                    return var2;
case 86:
                    return var2;
case 69:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var18 = '_uploadFileToCloud - responseUrl is not set';
                    var19 = var3;
                    var2 = new var19[var4](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 67:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot10 = var6;
        var6 = function uploadFileToCloud() {
            var1 = undefined;
            var4 = _closure2_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getResumePosition';
        var1['key'] = var6;
        var6 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 88; continue _fun0013 }
case 12:
                    var _closure4_slot0 = var3;
                    var5 = {};
                    var4 = arg1;
                    var5['url'] = var4;
                    var4 = {};
                    var6 = 'bytes */*';
                    var4['Content-Range'] = var6;
                    var5['headers'] = var4;
                    var4 = true;
                    var5['rejectWithError'] = var4;
                    var4 = 0;
                    var5['retries'] = var4;
                    var4 = {};
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 17;
                    var7 = var7[var6];
                    var6 = undefined;
                    var6 = var8.bind(var6)(var7);
                    var6 = var6.Millis;
                    var7 = var6.SECOND;
                    var6 = 30;
                    var6 = var6 * var7;
                    var4['deadline'] = var6;
                    var5['timeout'] = var4;
                    var4 = var3._abortController;
                    var4 = var4.signal;
                    var5['signal'] = var4;
                    var4 = var3._uploadHttpClient;
                    var3 = var4.doUpload;
                    var5 = var3.bind(var4)(var5);
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var3 = arg1;
                            var2 = var3.status;
                            var1 = 200;
                            if(!(var1 !== var2)) { _fun0014_ip = 89; continue _fun0014 }
case 12:
                            var2 = var3.status;
                            var1 = 201;
                            if(!(var1 !== var2)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                            var4 = _closure1_slot17;
                            var2 = var4.rejectionHandler;
                            var1 = 'status_check';
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0014_ip = 66; continue _fun0014;
case 89:
                            var2 = _closure4_slot0;
                            var1 = var2.currentSize;
case 66:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var1 = arg1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.HTTPResponseError;
                            var4 = var1 instanceof var4;
                            if(!var4) { _fun0015_ip = 91; continue _fun0015 }
case 92:
                            var5 = var1.status;
                            var4 = 308;
                            if(!(var4 !== var5)) { _fun0015_ip = 93; continue _fun0015 }
case 91:
                            var5 = _closure1_slot17;
                            var4 = var5.rejectionHandler;
                            var2 = 'status_check';
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var3)(var1);
                            return var2;
case 93:
                            var4 = _closure4_slot0;
                            var3 = var4.parseRangeHeader;
                            var1 = var1.headers;
                            var5 = var1.range;
                            var1 = null;
                            var6 = var1 != var5;
                            var2 = '';
                            if(!var6) { _fun0015_ip = 94; continue _fun0015 }
case 95:
                            var2 = var5;
case 94:
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 != var2;
                            var1 = 0;
                            if(!var3) { _fun0015_ip = 96; continue _fun0015 }
case 97:
                            var3 = 1;
                            var2 = var2[var3];
                            var1 = var2 + var3;
case 96:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=186);
case 98:
                    return var2;
case 99:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 100; continue _fun0013 }
case 37:
                    return var2;
case 100:
                    return var2;
case 88:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot9 = var6;
        var6 = function getResumePosition() {
            var1 = undefined;
            var4 = _closure2_slot9;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'startOrResumeUpload';
        var1['key'] = var6;
        var6 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var9 = arguments[1];
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                    var8 = undefined;
                    if(!(var9 === var8)) { _fun0016_ip = 90; continue _fun0016 }
case 103:
                    var9 = 0;
case 90:
                    SaveGenerator(address=31);
case 104:
                    return var8;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                    var11 = _closure1_slot16;
                    var10 = var11.log;
                    var14 = var3.uploadAttempts;
                    var6 = global;
                    var5 = var6.HermesInternal;
                    var13 = var5.concat;
                    var12 = 'Attempting to upload attachment with resumeFrom: ';
                    var5 = ' and attempts: ';
                    var5 = var13.bind(var12)(var9, var5, var14);
                    var5 = var10.bind(var11)(var5);
                    var5 = 0;
                    if(!(var9 > var5)) { _fun0016_ip = 107; continue _fun0016 }
case 34:
                    var10 = var3.uploadAnalytics;
                    var5 = var10.uploadResumptionCount;
                    var5 = var5 + 1;
                    var10['uploadResumptionCount'] = var5;
                    var5 = {};
                    var10 = var7.headers;
                    var11 = null;
                    if(!(var11 == var10)) { _fun0016_ip = 108; continue _fun0016 }
case 109:
                    var10 = {};
case 108:
                    var19 = var5;
                    var18 = var10;
                    var10 = copyDataProperties(var19, var18);
                    var11 = var3.currentSize;
                    var10 = 1;
                    var17 = var11 - var10;
                    var15 = var3.currentSize;
                    var6 = var6.HermesInternal;
                    var12 = var6.concat;
                    var20 = 'bytes ';
                    var18 = '-';
                    var16 = '/';
                    var19 = var9;
                    var10 = var20[var12](var19, var18, var17, var16, var15, var14);
                    var6 = 'Content-Range';
                    var5[var6] = var10;
                    var7['headers'] = var5;
case 107:
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 20;
                    var5 = var10[var5];
                    var10 = var6.bind(var8)(var5);
                    var8 = var10.throttle;
                    var5 = var3.createResumeAwareProgressFn;
                    var6 = var5.bind(var3)(var9);
                    var5 = 50;
                    var5 = var8.bind(var10)(var6, var5);
                    var7['onRequestProgress'] = var5;
                    var6 = var3._uploadHttpClient;
                    var5 = var6.doUpload;
                    var3 = {};
                    var8 = {};
                    var8['start'] = var9;
                    var3['fileByteRange'] = var8;
                    var6 = var5.bind(var6)(var7, var3);
                    var5 = var6.catch;
                    var8 = _closure1_slot17;
                    var3 = var8.rejectionHandler;
                    var7 = 'upload';
                    var3 = var3.bind(var8)(var7);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=334);
case 110:
                    return var3;
case 111:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 112; continue _fun0016 }
case 113:
                    var6 = var3.status;
                    var5 = 200;
                    if(!(var5 !== var6)) { _fun0016_ip = 114; continue _fun0016 }
case 115:
                    var6 = var3.status;
                    var5 = 201;
                    if(!(var5 === var6)) { _fun0016_ip = 55; continue _fun0016 }
case 114:
                    return var3;
case 55:
                    var6 = _closure1_slot17;
                    var4 = {};
                    var4['response'] = var3;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var20 = var5;
                    var19 = var7;
                    var18 = var4;
                    var4 = new var20[var6](var19, var18, var17);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 112:
                    return var3;
case 105:
                    return var2;
case 101:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot8 = var6;
        var6 = function startOrResumeUpload() {
            var1 = undefined;
            var4 = _closure2_slot8;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'uploadFileWithResumption';
        var1['key'] = var6;
        var6 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0017_ip = 116; continue _fun0017 }
case 117:
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
                    var4 = 20;
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                                if(var4) { _fun0018_ip = 118; continue _fun0018 }
case 65:
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
case 89: // try_start_0
                                var5 = _closure4_slot1;
                                var8 = var5.uploadAttempts;
                                var5 = 1;
                                if(!(var8 > var5)) { _fun0018_ip = 119; continue _fun0018 }
case 120:
                                var10 = _closure4_slot1;
                                var9 = var10.trackTime;
                                var8 = _closure1_slot4;
                                var5 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0019_ip = 42; continue _fun0019 }
case 121:
                                            var4 = _closure4_slot1;
                                            var3 = var4.getResumePosition;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            SaveGenerator(address=35);
case 122:
                                            return var2;
case 123:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            if(var3) { _fun0019_ip = 124; continue _fun0019 }
case 92:
                                            return var2;
case 124:
                                            return var2;
case 42:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var8 = var8.bind(var4)(var5);
                                var5 = 'resumptionCheckTimeMs';
                                var5 = var9.bind(var10)(var5, var8);
                                SaveGenerator(address=120);
case 125:
                                return var5;
case 126:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 127; continue _fun0018 }
case 128:
                                var7 = var5;
                                var9 = _closure4_slot1;
                                var8 = var9.uploadAnalytics;
                                var8['uploadResumptionPosition'] = var5;
                                var8 = var9.supportsResume;
                                var9 = var8.bind(var9)();
                                var8 = 0;
                                if(!var9) { _fun0018_ip = 129; continue _fun0018 }
case 130:
                                var8 = var7;
case 129:
                                _closure4_slot4 = var8;
                                var7 = _closure4_slot1;
                                var7['loaded'] = var8;
case 119:
                                var8 = {};
                                var11 = _closure4_slot1;
                                var10 = var11.startOrResumeUpload;
                                var9 = _closure4_slot3;
                                var7 = _closure4_slot4;
                                var7 = var10.bind(var11)(var9, var7);
                                SaveGenerator(address=211);
case 131:
                                return var7;
case 132:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                                if(var9) { _fun0018_ip = 133; continue _fun0018 }
case 107:
                                var8['v'] = var7;
case 134: // try_end0
                                return var8;
case 133:
                                return var7;
case 127:
                                return var5;
case 135: // catch_target0
                                CatchBlockStart(arg_register=7);
                                var2 = var8;
                                var5 = _closure1_slot17;
                                var5 = var8 instanceof var5;
                                if(!var5) { _fun0018_ip = 63; continue _fun0018 }
case 136:
                                var8 = var2;
                                var5 = var8.canRetry;
                                var5 = var5.bind(var8)();
                                if(var5) { _fun0018_ip = 110; continue _fun0018 }
case 63:
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
case 110:
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
                                var2 = 21;
                                var2 = var9[var2];
                                var8 = var8.bind(var4)(var2);
                                var2 = var8.awaitOnline;
                                var2 = var2.bind(var8)();
                                SaveGenerator(address=447);
case 137:
                                return var2;
case 138:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 139; continue _fun0018 }
case 140:
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
case 141:
                                return var3;
case 142:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0018_ip = 143; continue _fun0018 }
case 144:
                                return var4;
case 143:
                                return var3;
case 139:
                                return var2;
case 118:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var3.uploadAttempts;
                    if(!(var2 <= var11)) { _fun0017_ip = 145; continue _fun0017 }
case 146:
                    var2 = var3._aborted;
                    var9 = global;
                    var8 = 'iterator is not an object';
                    var7 = 'iterator.throw() did not return an object';
                    var6 = 'throw';
                    var5 = 'iterator.next() did not return an object';
                    if(var2) { _fun0017_ip = 145; continue _fun0017 }
case 147:
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
case 148:
                    var4 = var17;
                    var4 = var18.bind(var13)(var4);
                    var21 = var4;
                    var20 = var5;
                    var14 = ensureObject(var21, var20);
                    var2 = var4;
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 149; continue _fun0017 }
case 150: // try_start_0
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 151:
                    return var4;
case 110: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    var21 = var13;
                    var20 = var6;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 152; continue _fun0017 }
case 153:
                    var4 = var4.bind(var13)(var14);
                    var21 = var4;
                    var20 = var7;
                    var14 = ensureObject(var21, var20);
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 80; continue _fun0017 }
case 154:
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 155:
                    return var4;
case 53: // try_start_1
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    var17 = var14;
                    var15 = var16;
                    if(!var15) { _fun0017_ip = 148; continue _fun0017 }
case 156:
                    var17 = var14;
case 157: // try_end1
                    var20 = 'return';
                    var21 = var13;
                    var19 = getMethod(var21, var20);
                    if(!(var19 !== var12)) { _fun0017_ip = 158; continue _fun0017 }
case 105:
                    var15 = var17;
                    var15 = var19.bind(var13)(var15);
                    var20 = 'iterator.return() did not return an object';
                    var21 = var15;
                    var19 = ensureObject(var21, var20);
                    var19 = var15.done;
                    if(var19) { _fun0017_ip = 159; continue _fun0017 }
case 160:
                    var19 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 161:
                    return var15;
case 159:
                    var15 = var15.value;
                    return var15;
case 158:
                    return var14;
case 80:
                    var2 = var4;
                    _fun0017_ip = 149; continue _fun0017;
case 152:
                    var20 = 'return';
                    var21 = var13;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 162; continue _fun0017 }
case 163:
                    var21 = var4.bind(var13)();
                    var20 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var21, var20);
case 162:
                    var21 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var21);
                    throw var12;
case 149:
                    var2 = var2.value;
                    if(var2) { _fun0017_ip = 164; continue _fun0017 }
case 165:
                    var4 = var3.uploadAttempts;
                    if(!(var4 <= var11)) { _fun0017_ip = 145; continue _fun0017 }
case 166:
                    var4 = var3._aborted;
                    if(var4) { _fun0017_ip = 145; continue _fun0017 }
case 167:
                    _fun0017_ip = 147; continue _fun0017;
case 164:
                    var2 = var2.v;
                    return var2;
case 145:
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
case 116:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot7 = var6;
        var6 = function uploadFileWithResumption(arg1, arg2, arg3) {
            var1 = undefined;
            var4 = _closure2_slot7;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getSize';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 125; continue _fun0020 }
case 121:
                    var2 = this;
                    var2 = var2.item;
                    var6 = var2.uri;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 22;
                    var2 = var2[var8];
                    var7 = undefined;
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.getFileSize;
                    var3 = null;
                    var5 = var3 == var2;
                    var2 = undefined;
                    if(var5) { _fun0020_ip = 168; continue _fun0020 }
case 169:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getFileSize;
                    var2 = var4.bind(var5)(var6);
case 168:
                    SaveGenerator(address=94);
case 4:
                    return var2;
case 170:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 171; continue _fun0020 }
case 172:
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0020_ip = 173; continue _fun0020 }
case 174:
                    var3 = var2;
case 173:
                    return var3;
case 171:
                    return var2;
case 125:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot6 = var6;
        var6 = function getSize() {
            var1 = undefined;
            var4 = _closure2_slot6;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getHash';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var5 = arguments[0];
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 175; continue _fun0021 }
case 176:
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0021_ip = 177; continue _fun0021 }
case 28:
                    var5 = false;
case 177:
                    SaveGenerator(address=28);
case 178:
                    return var6;
case 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 146; continue _fun0021 }
case 59:
                    var3 = var4.item;
                    var8 = var3.uri;
                    var3 = var4.getSize;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=61);
case 179:
                    return var3;
case 180:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 181; continue _fun0021 }
case 8:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 23;
                    var7 = var10[var7];
                    var12 = var9.bind(var6)(var7);
                    var11 = var12.getOptimalChunkSize;
                    if(var5) { _fun0021_ip = 174; continue _fun0021 }
case 34:
                    var7 = var11.bind(var12)(var3);
                    _fun0021_ip = 97; continue _fun0021;
case 174:
                    var15 = 8192;
                    var14 = 16777216;
                    var13 = 0.25;
                    var17 = var12;
                    var16 = var3;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
case 97:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 22;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getFileHash;
                    var4 = 'md5';
                    var4 = var5.bind(var6)(var8, var4, var7);
                    SaveGenerator(address=184);
case 46:
                    return var4;
case 98:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 131; continue _fun0021 }
case 19:
                    var5 = null;
                    var6 = var5 != var4;
                    var5 = '';
                    if(!var6) { _fun0021_ip = 182; continue _fun0021 }
case 183:
                    var5 = var4;
case 182:
                    return var5;
case 131:
                    return var4;
case 181:
                    return var3;
case 146:
                    return var2;
case 175:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot5 = var6;
        var6 = function getHash() {
            var1 = undefined;
            var4 = _closure2_slot5;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getEtagFromResponse';
        var1['key'] = var6;
        var6 = function getEtagFromResponse(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var1 = var1.headers;
                var2 = var1.etag;
                var1 = null;
                var3 = var1 != var2;
                var5 = null;
                if(!var3) { _fun0022_ip = 104; continue _fun0022 }
case 178:
                var5 = var2;
case 104:
                var2 = var1 != var5;
                var1 = null;
                if(!var2) { _fun0022_ip = 6; continue _fun0022 }
case 3:
                var4 = var5.replace;
                var3 = /"/g;
                var2 = '';
                var1 = var4.bind(var5)(var3, var2);
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'trackTime';
        var1['key'] = var6;
        var6 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0023_ip = 184; continue _fun0023 }
case 68:
                    var4 = arg1;
                    var2 = arg2;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = global;
                    var9 = var6.performance;
                    var8 = var9.now;
                    var3 = var8.bind(var9)();
case 106: // try_start_0
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=48);
case 185:
                    return var2;
case 186:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0023_ip = 187; continue _fun0023 }
case 188: // try_end0
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
case 187:
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
case 189: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = var5.uploadAnalytics;
                    var5 = var5.timing;
                    var7 = var6.performance;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3 = var6 - var3;
                    var5[var4] = var3;
                    throw var2;
case 184:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot4 = var6;
        var6 = function trackTime(arg1, arg2) {
            var1 = undefined;
            var4 = _closure2_slot4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'upload';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 190; continue _fun0024 }
case 12:
                    var _closure4_slot0 = var6;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var _closure4_slot3 = var3;
                    var21 = undefined;
                    var _closure4_slot4 = var3;
                    var16 = undefined;
                    var12 = undefined;
                    var14 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var22 = undefined;
                    var23 = undefined;
                    var20 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = var6.status;
                    var2 = _closure1_slot18;
                    var2 = var2.COMPLETED;
                    if(!(var4 !== var2)) { _fun0024_ip = 191; continue _fun0024 }
case 192:
                    var4 = var6.setStatus;
                    var2 = _closure1_slot18;
                    var2 = var2.STARTED;
                    var2 = var4.bind(var6)(var2);
                    var8 = global;
                    var4 = var8.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var6['startTime'] = var2;
                    var2 = var6.trackUploadStart;
                    var2 = var2.bind(var6)();
                    var2 = var6.reactNativeFilePrepped;
                    var24 = false;
                    if(!(var24 === var2)) { _fun0024_ip = 38; continue _fun0024 }
case 193:
                    var2 = var6.reactNativeCompressAndExtractData;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=164);
case 130:
                    return var2;
case 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0024_ip = 195; continue _fun0024 }
case 38:
                    var4 = var6.isCancelled;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0024_ip = 196; continue _fun0024 }
case 197:
                    var4 = var6.allowOptimization;
                    if(!var4) { _fun0024_ip = 198; continue _fun0024 }
case 199:
                    var4 = var6.item;
                    var5 = var4.platform;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 15;
                    var4 = var15[var4];
                    var4 = var13.bind(var3)(var4);
                    var4 = var4.UploadPlatform;
                    var4 = var4.WEB;
                    if(!(var5 === var4)) { _fun0024_ip = 198; continue _fun0024 }
case 147:
                    var25 = _closure2_slot11;
                    var15 = var25.tryConvertToWebP;
                    var4 = var6.item;
                    var13 = var4.file;
                    var5 = var6.id;
                    var4 = function() {
                        var1 = _closure4_slot0;
                        var1 = var1._aborted;
                        return var1;
                    };
                    var4 = var15.bind(var25)(var13, var4, var5);
                    SaveGenerator(address=298);
case 200:
                    return var4;
case 201:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0024_ip = 202; continue _fun0024 }
case 203:
                    var13 = null;
                    if(!(var13 != var4)) { _fun0024_ip = 198; continue _fun0024 }
case 204:
                    var5 = var4.convertedFile;
                    if(!(var13 != var5)) { _fun0024_ip = 205; continue _fun0024 }
case 206:
                    var15 = var6.item;
                    var5 = var4.convertedFile;
                    var15['file'] = var5;
                    var5 = var4.convertedFile;
                    var5 = var5.size;
                    var6['currentSize'] = var5;
case 205:
                    var5 = var4.convertedMimeType;
                    if(!(var13 != var5)) { _fun0024_ip = 207; continue _fun0024 }
case 208:
                    var15 = var6.uploadAnalytics;
                    var5 = var4.convertedMimeType;
                    var15['convertedMimeType'] = var5;
case 207:
                    var5 = var4.hashTimeMs;
                    if(!(var13 != var5)) { _fun0024_ip = 209; continue _fun0024 }
case 210:
                    var5 = var6.uploadAnalytics;
                    var15 = var5.timing;
                    var5 = var4.hashTimeMs;
                    var15['hashTimeMs'] = var5;
case 209:
                    var5 = var4.conversionFailureReason;
                    if(!(var13 != var5)) { _fun0024_ip = 211; continue _fun0024 }
case 212:
                    var13 = var6.uploadAnalytics;
                    var5 = var4.conversionFailureReason;
                    var13['conversionFailureReason'] = var5;
case 211:
                    var5 = var6.uploadAnalytics;
                    var13 = var5.timing;
                    var5 = var4.compressTimeMs;
                    var13['compressTimeMs'] = var5;
case 198:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 24;
                    var5 = var15[var5];
                    var5 = var13.bind(var3)(var5);
                    var13 = var5.default;
                    var5 = var13.getUploadPayload;
                    var5 = var5.bind(var13)(var6);
                    SaveGenerator(address=514);
case 213:
                    return var5;
case 214:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(var13) { _fun0024_ip = 215; continue _fun0024 }
case 216:
                    _closure4_slot2 = var5;
                    var15 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var13 = 25;
                    var13 = var25[var13];
                    var27 = var15.bind(var3)(var13);
                    var26 = var27.getUploadTarget;
                    var13 = var6.item;
                    var13 = var13.target;
                    var28 = var26.bind(var27)(var13);
                    _closure4_slot3 = var28;
                    var13 = 26;
                    var13 = var25[var13];
                    var25 = var15.bind(var3)(var13);
                    var15 = var25.getDetectedFileSizeExperimentConfig;
                    var13 = {};
                    var26 = 'CloudUpload.upload';
                    var13['location'] = var26;
                    var13 = var15.bind(var25)(var13);
                    var25 = var5.filename;
                    var15 = null;
                    if(!(var15 != var25)) { _fun0024_ip = 217; continue _fun0024 }
case 218:
                    var26 = var5.filename;
                    var25 = '';
                    if(!(var25 !== var26)) { _fun0024_ip = 217; continue _fun0024 }
case 219:
                    var13 = var13.useDetectedFileSize;
                    if(!var13) { _fun0024_ip = 220; continue _fun0024 }
case 221:
                    var13 = var6.currentSize;
case 220:
                    var13 = var6.currentSize;
                    var27 = 0;
                    if(!(var27 === var13)) { _fun0024_ip = 222; continue _fun0024 }
case 223:
                    var25 = var6.handleError;
                    var13 = _closure1_slot14;
                    var13 = var13.INVALID_FILE_ASSET;
                    var13 = var25.bind(var6)(var13);
                    _fun0024_ip = 191; continue _fun0024;
case 222:
                    var13 = var6.currentSize;
                    var26 = var15 != var13;
                    var25 = 0;
                    if(!var26) { _fun0024_ip = 224; continue _fun0024 }
case 225:
                    var25 = var13;
case 224:
                    var26 = var28.getMaxFileSize;
                    var13 = var6.channelId;
                    var13 = var26.bind(var28)(var13);
                    if(!(!(var25 > var13))) { _fun0024_ip = 226; continue _fun0024 }
case 227:
                    var26 = _closure1_slot11;
                    var25 = var26.get;
                    var13 = 'upload_fail_50';
                    var13 = var25.bind(var26)(var13);
                    if(!var13) { _fun0024_ip = 228; continue _fun0024 }
case 229:
                    var25 = var8.Math;
                    var13 = var25.random;
                    var25 = var13.bind(var25)();
                    var13 = 0.5;
                    if(!(!(var25 < var13))) { _fun0024_ip = 230; continue _fun0024 }
case 228:
                    var25 = _closure1_slot1;
                    var26 = _closure1_slot2;
                    var13 = 28;
                    var13 = var26[var13];
                    var28 = var25.bind(var3)(var13);
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
                    if(!var13) { _fun0024_ip = 231; continue _fun0024 }
case 232:
                    var26 = var6.trackTime;
                    var25 = _closure1_slot4;
                    var13 = function* () {
                        var1 = function* anon_0_() {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0025_ip = 233; continue _fun0025 }
case 121:
                                var4 = _closure4_slot1;
                                var3 = var4.getHash;
                                var2 = _closure4_slot4;
                                var2 = var2.largerChunks;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=41);
case 234:
                                return var2;
case 92:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0025_ip = 235; continue _fun0025 }
case 42:
                                return var2;
case 235:
                                return var2;
case 233:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var3)(var13);
                    var13 = 'hashTimeMs';
                    var16 = var26.bind(var6)(var13, var25);
case 231: // try_start_0
                    var26 = _closure1_slot16;
                    var25 = var26.log;
                    var29 = var6.id;
                    var13 = var8.HermesInternal;
                    var28 = var13.concat;
                    var13 = 'Requesting upload url for ';
                    var13 = var28.bind(var13)(var29);
                    var13 = var25.bind(var26)(var13);
                    var26 = var6.trackTime;
                    var25 = _closure1_slot4;
                    var13 = function* () {
                        var1 = function* anon_0_() {
                            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0026_ip = 236; continue _fun0026 }
case 237:
                                var4 = _closure4_slot3;
                                var3 = var4.getCreateAttachmentURL;
                                var6 = _closure4_slot1;
                                var2 = var6.channelId;
                                var5 = var3.bind(var4)(var2);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 14;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var4 = var2.HTTP;
                                var3 = var4.post;
                                var2 = {};
                                var2['url'] = var5;
                                var5 = {};
                                var8 = _closure4_slot2;
                                var7 = new Array(1);
                                var7[0] = var8;
                                var5['files'] = var7;
                                var2['body'] = var5;
                                var5 = var6.createAttachmentUrlRetryOpts;
                                var9 = var5.bind(var6)();
                                var10 = var2;
                                var5 = copyDataProperties(var10, var9);
                                var6 = false;
                                var5 = 'rejectWithError';
                                var2[var5] = var6;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=143);
case 97:
                                return var2;
case 238:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0026_ip = 96; continue _fun0026 }
case 239:
                                return var2;
case 96:
                                return var2;
case 236:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var3)(var13);
                    var13 = 'getUploadUrlTimeMs';
                    var13 = var26.bind(var6)(var13, var25);
                    SaveGenerator(address=966);
case 240:
                    return var13;
case 241:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 242; continue _fun0024 }
case 243:
                    var26 = var6.setResponseUrl;
                    var25 = var13.body;
                    var25 = var25.attachments;
                    var25 = var25[var27];
                    var25 = var25.upload_url;
                    var25 = var26.bind(var6)(var25);
                    var26 = var6.setUploadedFilename;
                    var25 = var13.body;
                    var25 = var25.attachments;
                    var25 = var25[var27];
                    var25 = var25.upload_filename;
                    var25 = var26.bind(var6)(var25);
case 244: // try_end0
                    var25 = var16;
                    if(!(var15 == var25)) { _fun0024_ip = 245; continue _fun0024 }
case 246:
                    _fun0024_ip = 247; continue _fun0024;
case 245:
                    SaveGenerator(address=1060);
case 248:
                    return var16;
case 249:
                    ResumeGenerator(result_out_reg=15, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 250; continue _fun0024 }
case 251:
                    var18 = var16;
                    if(!(var15 != var16)) { _fun0024_ip = 247; continue _fun0024 }
case 252:
                    var6['contentHash'] = var18;
case 247: // try_start_1
                    var26 = var6.trackTime;
                    var25 = _closure1_slot4;
                    var18 = function* () {
                        var1 = function* anon_0_() {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0027_ip = 253; continue _fun0027 }
case 121:
                                var3 = _closure4_slot1;
                                var2 = var3.uploadFileToCloud;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=30);
case 70:
                                return var2;
case 254:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0027_ip = 234; continue _fun0027 }
case 26:
                                return var2;
case 234:
                                return var2;
case 253:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var25 = var25.bind(var3)(var18);
                    var18 = 'uploadTimeMs';
                    var18 = var26.bind(var6)(var18, var25);
                    SaveGenerator(address=1118);
case 255:
                    return var18;
case 256:
                    ResumeGenerator(result_out_reg=17, return_bool_out_reg=24);
                    if(var25) { _fun0024_ip = 257; continue _fun0024 }
case 258:
                    var19 = var18;
                    var25 = var21;
                    var25 = var25.enabled;
                    if(!var25) { _fun0024_ip = 259; continue _fun0024 }
case 260:
                    var25 = var19;
                    if(!(var15 != var25)) { _fun0024_ip = 259; continue _fun0024 }
case 261:
                    var22 = false;
                    var25 = var6.getEtagFromResponse;
                    var24 = var19;
                    var24 = var25.bind(var6)(var24);
                    var23 = var24;
                    if(!(var15 != var24)) { _fun0024_ip = 262; continue _fun0024 }
case 263:
                    var24 = var23;
                    var6['etag'] = var24;
                    var23 = var6.contentHash;
                    var22 = var24 === var23;
case 262:
                    var23 = var6.uploadAnalytics;
                    var23['validUploadHash'] = var22;
                    if(var22) { _fun0024_ip = 259; continue _fun0024 }
case 264:
                    var21 = var21.enforced;
                    if(!var21) { _fun0024_ip = 259; continue _fun0024 }
case 265:
                    var21 = var6.filename;
                    var20 = var21;
                    if(!(var15 == var21)) { _fun0024_ip = 266; continue _fun0024 }
case 267:
                    var26 = var6.id;
                    _fun0024_ip = 268; continue _fun0024;
case 266:
                    var26 = var20;
case 268:
                    var32 = var6.etag;
                    var30 = var6.contentHash;
                    var20 = var8.HermesInternal;
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
                    var20 = 29;
                    var20 = var23[var20];
                    var21 = var21.bind(var3)(var20);
                    var20 = var21.captureMessage;
                    var20 = var20.bind(var21)(var22);
                    var21 = var6.handleError;
                    var20 = _closure1_slot14;
                    var20 = var20.INVALID_FILE_ASSET;
                    var20 = var21.bind(var6)(var20);
case 269: // try_end1
                    var20 = undefined;
                    return var20;
case 259: // try_start_2
                    var21 = var6.trackUploadFinished;
                    var20 = _closure1_slot18;
                    var20 = var20.COMPLETED;
                    var20 = var21.bind(var6)(var20);
                    var20 = var6.handleComplete;
                    var19 = var20.bind(var6)(var19);
case 270: // try_end2
                    _fun0024_ip = 191; continue _fun0024;
case 257:
                    return var18;
case 271: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=16);
                    var18 = var6.isCancelled;
                    var18 = var18.bind(var6)();
                    if(var18) { _fun0024_ip = 272; continue _fun0024 }
case 273:
                    var21 = _closure1_slot16;
                    var20 = var21.info;
                    var19 = var17;
                    var25 = var19.status;
                    var24 = var6.id;
                    var18 = var8.HermesInternal;
                    var23 = var18.concat;
                    var22 = 'Error: status ';
                    var18 = ' for ';
                    var18 = var23.bind(var22)(var25, var18, var24);
                    var18 = var20.bind(var21)(var18);
                    var18 = var6.handleError;
                    var18 = var18.bind(var6)(var19);
                    _fun0024_ip = 191; continue _fun0024;
case 272:
                    var18 = var6.handleComplete;
                    var17 = var18.bind(var6)(var17);
                    _fun0024_ip = 191; continue _fun0024;
case 250:
                    return var16;
case 242:
                    return var13;
case 274: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var11 = var13;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 275; continue _fun0024 }
case 276:
                    var16 = var11;
                    var16 = var16.body;
                    var14 = var16;
                    var16 = var15 == var16;
                    var13 = undefined;
                    if(var16) { _fun0024_ip = 275; continue _fun0024 }
case 277:
                    var13 = var14.code;
case 275:
                    var12 = var13;
                    if(!(var15 == var13)) { _fun0024_ip = 278; continue _fun0024 }
case 279:
                    var13 = var11;
                    var13 = var13.status;
                    _fun0024_ip = 280; continue _fun0024;
case 278:
                    var13 = var12;
case 280:
                    var10 = var13;
                    var12 = _closure1_slot14;
                    var12 = var12.ENTITY_TOO_LARGE;
                    if(!(var13 !== var12)) { _fun0024_ip = 281; continue _fun0024 }
case 282:
                    var14 = _closure1_slot16;
                    var13 = var14.error;
                    var12 = var10;
                    if(!(var15 == var12)) { _fun0024_ip = 283; continue _fun0024 }
case 284:
                    var16 = var8.JSON;
                    var15 = var16.stringify;
                    var12 = var11;
                    var12 = var12.body;
                    var18 = var15.bind(var16)(var12);
                    _fun0024_ip = 285; continue _fun0024;
case 283:
                    var18 = var10;
case 285:
                    var17 = var6.id;
                    var12 = var8.HermesInternal;
                    var16 = var12.concat;
                    var15 = 'Requesting upload url failed with code ';
                    var12 = ' for ';
                    var12 = var16.bind(var15)(var18, var12, var17);
                    var12 = var13.bind(var14)(var12);
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 29;
                    var12 = var14[var12];
                    var13 = var13.bind(var3)(var12);
                    var12 = var13.captureException;
                    var11 = var12.bind(var13)(var11);
case 281:
                    var11 = var6.handleError;
                    var10 = var11.bind(var6)(var10);
                    var10 = undefined;
                    return var10;
case 230:
                    var11 = var8.setTimeout;
                    var10 = function() {
                        var3 = _closure4_slot0;
                        var2 = var3.handleError;
                        var1 = 500;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var9 = 1000;
                    var9 = var11.bind(var3)(var10, var9);
                    _fun0024_ip = 191; continue _fun0024;
case 226:
                    var10 = var6.handleError;
                    var9 = _closure1_slot14;
                    var9 = var9.ENTITY_TOO_LARGE;
                    var9 = var10.bind(var6)(var9);
                    _fun0024_ip = 191; continue _fun0024;
case 217:
                    var11 = _closure1_slot16;
                    var10 = var11.error;
                    var9 = var8.JSON;
                    var8 = var9.stringify;
                    var9 = var8.bind(var9)(var5);
                    var8 = 'File does not have a filename.';
                    var8 = var10.bind(var11)(var8, var9);
                    var8 = var6.handleError;
                    var7 = _closure1_slot14;
                    var7 = var7.INVALID_FILE_ASSET;
                    var7 = var8.bind(var6)(var7);
                    var7 = undefined;
                    return var7;
case 215:
                    return var5;
case 202:
                    return var4;
case 196:
                    var5 = var6.handleComplete;
                    var4 = var6.id;
                    var4 = var5.bind(var6)(var4);
case 191:
                    return var3;
case 195:
                    return var2;
case 190:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot3 = var6;
        var6 = function upload() {
            var1 = undefined;
            var4 = _closure2_slot3;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'reactNativeCompressAndExtractData';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0028_ip = 286; continue _fun0028 }
case 12:
                    var _closure4_slot0 = var2;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 25;
                    var5 = var7[var5];
                    var13 = undefined;
                    var7 = var6.bind(var13)(var5);
                    var6 = var7.getUploadTarget;
                    var5 = var2.item;
                    var5 = var5.target;
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.shouldReactNativeCompressUploads;
                    if(var5) { _fun0028_ip = 287; continue _fun0028 }
case 120:
                    var6 = var2.uploadAnalytics;
                    var5 = true;
                    var6['compressAndExtractDisabled'] = var5;
                    var7 = _closure1_slot16;
                    var6 = var7.log;
                    var5 = 'reactNativeCompressAndExtractData() disabled by upload target';
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 287:
                    var6 = var2.reactNativeFilePrepped;
                    var5 = true;
                    if(!(var5 !== var6)) { _fun0028_ip = 288; continue _fun0028 }
case 289:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0029_ip = 290; continue _fun0029 }
case 121:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 30;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.getAttachmentFile;
                                var3 = _closure4_slot0;
                                var6 = var3.reactNativeFileIndex;
                                var2 = null;
                                var7 = var2 != var6;
                                var2 = 0;
                                if(!var7) { _fun0029_ip = 291; continue _fun0029 }
case 169:
                                var2 = var6;
case 291:
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=75);
case 66:
                                return var2;
case 44:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0029_ip = 93; continue _fun0029 }
case 292:
                                return var2;
case 93:
                                return var2;
case 290:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var7 = var7.bind(var13)(var4);
                    var4 = 'compressTimeMs';
                    var4 = var8.bind(var2)(var4, var7);
                    SaveGenerator(address=210);
case 39:
                    return var4;
case 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0028_ip = 293; continue _fun0028 }
case 294:
                    var9 = null;
                    if(!(var9 != var4)) { _fun0028_ip = 295; continue _fun0028 }
case 296:
                    var7 = var4.file;
                    if(!(var9 != var7)) { _fun0028_ip = 295; continue _fun0028 }
case 297:
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
                    if(!var8) { _fun0028_ip = 298; continue _fun0028 }
case 299:
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
                    if(!var8) { _fun0028_ip = 300; continue _fun0028 }
case 301:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceWidth;
                    var10['sourceMediaWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceHeight;
                    var10['sourceMediaHeight'] = var8;
case 300:
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    if(!(var13 !== var8)) { _fun0028_ip = 223; continue _fun0028 }
case 302:
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
case 223:
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    if(!(var13 !== var8)) { _fun0028_ip = 303; continue _fun0028 }
case 304:
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
                    if(!var12) { _fun0028_ip = 305; continue _fun0028 }
case 306:
                    var8 = 'hvc1';
case 305:
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
case 303:
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
case 298:
                    var2['filename'] = var11;
                    if(!(var9 != var11)) { _fun0028_ip = 307; continue _fun0028 }
case 308:
                    if(!(var9 != var7)) { _fun0028_ip = 307; continue _fun0028 }
case 309:
                    var8 = var4.file;
                    var8 = var8.type;
                    if(!(var9 != var8)) { _fun0028_ip = 307; continue _fun0028 }
case 310:
                    var10 = var11.split;
                    var8 = '.';
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.pop;
                    var10 = var8.bind(var10)();
                    var8 = var9 == var10;
                    var12 = undefined;
                    if(var8) { _fun0028_ip = 311; continue _fun0028 }
case 312:
                    var8 = var10.toLowerCase;
                    var12 = var8.bind(var10)();
case 311:
                    var14 = 'image/jpeg';
                    var10 = 'jpg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 313; continue _fun0028 }
case 314:
                    var10 = 'jpeg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 313; continue _fun0028 }
case 315:
                    var10 = var4.file;
                    var8 = var10.type;
case 313:
                    var10 = var2.uploadAnalytics;
                    var10['convertedMimeType'] = var8;
                    var19 = var4.fileSize;
                    if(!(var9 == var19)) { _fun0028_ip = 316; continue _fun0028 }
case 317:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 23;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.getFileData;
                    var10 = var10.bind(var12)(var7);
                    SaveGenerator(address=1242);
case 318:
                    return var10;
case 319:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0028_ip = 320; continue _fun0028 }
case 266:
                    var19 = var10.size;
                    _fun0028_ip = 316; continue _fun0028;
case 320:
                    return var10;
case 316:
                    var2['postCompressionSize'] = var19;
                    var2['currentSize'] = var19;
                    if(!(var9 != var19)) { _fun0028_ip = 321; continue _fun0028 }
case 322:
                    var12 = _closure1_slot16;
                    var10 = var12.log;
                    var20 = var2.id;
                    var9 = var6.HermesInternal;
                    var17 = var9.concat;
                    var29 = 'Completed compression and conversion. Output size=';
                    var27 = ' bytes; filename=';
                    var25 = '; uri=';
                    var23 = '; mimeType=';
                    var21 = ' for ';
                    var28 = var19;
                    var26 = var11;
                    var24 = var7;
                    var22 = var8;
                    var9 = var29[var17](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19);
                    var9 = var10.bind(var12)(var9);
                    var9 = {};
                    var9['uri'] = var7;
                    var9['filename'] = var11;
                    var9['mimeType'] = var8;
                    var8 = {};
                    var27 = var2.item;
                    var28 = var8;
                    var10 = copyDataProperties(var28, var27);
                    var28 = var8;
                    var27 = var9;
                    var9 = copyDataProperties(var28, var27);
                    var2['item'] = var8;
                    var2['reactNativeFilePrepped'] = var5;
                    return var2;
case 321:
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
                    var28 = 'Size missing from file data';
                    var29 = var9;
                    var8 = new var29[var10](var28, var27);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
case 307:
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
                    var28 = var7.bind(var10)(var8);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var29 = var8;
                    var7 = new var29[var9](var28, var27);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
case 295:
                    var8 = _closure1_slot16;
                    var7 = var8.error;
                    var10 = var2.id;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'Failed to get compressed file for ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    return var2;
case 293:
                    return var4;
case 288:
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
case 286:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot2 = var6;
        var6 = function reactNativeCompressAndExtractData() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'handleError';
        var1['key'] = var6;
        var6 = function handleError(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
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
case 91: // try_start_0
                var4 = var2.emit;
                var3 = var1;
                var1 = 'error';
                var1 = var4.bind(var2)(var1, var3);
case 44: // try_end0
                _fun0030_ip = 323; continue _fun0030;
case 120: // catch_target0
                CatchBlockStart(arg_register=0);
case 323:
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'handleComplete';
        var1['key'] = var6;
        var6 = function handleComplete(arg1) {
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
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = '_cancel';
        var1['key'] = var6;
        var6 = function _cancel(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var6 = _closure1_slot16;
                var5 = var6.log;
                var4 = arg2;
                var4 = var5.bind(var6)(var4);
                var4 = true;
                var2['_aborted'] = var4;
                var5 = var2._abortController;
                var4 = var5.abort;
                var4 = var4.bind(var5)();
                var4 = var2.trackUploadFinished;
                var4 = var4.bind(var2)(var3);
                var4 = var2.status;
                var1 = _closure1_slot18;
                var1 = var1.COMPLETED;
                if(!(var4 === var1)) { _fun0031_ip = 168; continue _fun0031 }
case 292:
                var1 = var2.delete;
                var1 = var1.bind(var2)();
case 168:
                var1 = var2.setStatus;
                var1 = var1.bind(var2)(var3);
                var3 = var2.emit;
                var1 = 'complete';
                var1 = var3.bind(var2)(var1);
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var6 = function cancel() {
            var4 = this;
            var3 = var4._cancel;
            var1 = _closure1_slot18;
            var2 = var1.CANCELED;
            var6 = var4.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Cancelled called for ';
            var1 = var5.bind(var1)(var6);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'removeFromMsgDraft';
        var1['key'] = var6;
        var6 = function removeFromMsgDraft() {
            var4 = this;
            var3 = var4._cancel;
            var1 = _closure1_slot18;
            var2 = var1.REMOVED_FROM_MSG_DRAFT;
            var6 = var4.id;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Removed from draft for ';
            var1 = var5.bind(var1)(var6);
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'isCancelled';
        var1['key'] = var6;
        var6 = function isCancelled() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = this;
                var4 = var3.status;
                var1 = _closure1_slot18;
                var1 = var1.CANCELED;
                var1 = var4 === var1;
                if(var1) { _fun0032_ip = 42; continue _fun0032 }
case 70:
                var3 = var3.status;
                var2 = _closure1_slot18;
                var2 = var2.REMOVED_FROM_MSG_DRAFT;
                var1 = var3 === var2;
case 42:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'resetState';
        var1['key'] = var6;
        var6 = function resetState() {
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
case 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot5;
                    var4 = _closure1_slot9;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0033_ip = 124; continue _fun0033 }
case 234:
                    var1 = var5.prototype;
case 124:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'resetState';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0033_ip = 187; continue _fun0033 }
case 323:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0033_ip = 187; continue _fun0033 }
case 324:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
case 187:
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
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0034_ip = 239; continue _fun0034 }
case 68:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = var5.uploadedFilename;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0034_ip = 325; continue _fun0034 }
case 104:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 25;
                    var6 = var8[var6];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.getUploadTarget;
                    var6 = var5.item;
                    var6 = var6.target;
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getDeleteUploadURL;
                    var5 = var5.uploadedFilename;
                    var3 = var6.bind(var7)(var5);
case 324: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.HTTP;
                    var4 = var5.del;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=133);
case 33:
                    return var3;
case 326:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0034_ip = 97; continue _fun0034 }
case 108: // try_end0
                    _fun0034_ip = 325; continue _fun0034;
case 97:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=2);
case 325:
                    return var2;
case 239:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot1 = var6;
        var6 = function _delete() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'setResponseUrl';
        var1['key'] = var6;
        var6 = function setResponseUrl(arg1) {
            var2 = arg1;
            var1 = this;
            var1['responseUrl'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'setStatus';
        var1['key'] = var6;
        var6 = function setStatus(arg1) {
            var2 = arg1;
            var1 = this;
            var1['status'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[23] = var1;
        var1 = {};
        var6 = 'setFilename';
        var1['key'] = var6;
        var6 = function setFilename(arg1) {
            var2 = arg1;
            var1 = this;
            var1['filename'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[24] = var1;
        var1 = {};
        var6 = 'setUploadedFilename';
        var1['key'] = var6;
        var6 = function setUploadedFilename(arg1) {
            var2 = arg1;
            var1 = this;
            var1['uploadedFilename'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[25] = var1;
        var1 = {};
        var6 = 'trackUploadStart';
        var1['key'] = var6;
        var6 = function trackUploadStart() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var7 = this;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
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
                if(!var10) { _fun0035_ip = 327; continue _fun0035 }
case 44:
                var8 = var9;
case 327:
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
        var1['value'] = var6;
        var2[26] = var1;
        var1 = {};
        var6 = 'trackUploadFinished';
        var1['key'] = var6;
        var6 = function trackUploadFinished(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var7 = this;
                var1 = var7.startTime;
                var9 = null;
                var1 = var9 != var1;
                var8 = -1;
                if(!var1) { _fun0036_ip = 2; continue _fun0036 }
case 177:
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = var7.startTime;
                var8 = var2 - var1;
case 2:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
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
                var12 = var9 != var11;
                var8 = 'unknown';
                var10 = var8;
                if(!var12) { _fun0036_ip = 236; continue _fun0036 }
case 96:
                var10 = var11;
case 236:
                var2['mime_type'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.numUploadAttempts;
                var12 = var9 != var11;
                var10 = 1;
                if(!var12) { _fun0036_ip = 328; continue _fun0036 }
case 46:
                var10 = var11;
case 328:
                var2['num_upload_attempts'] = var10;
                var10 = var7.error;
                var2['error_code'] = var10;
                var10 = _closure1_slot12;
                var11 = var10.videoUploadQuality;
                var2['video_upload_quality'] = var11;
                var11 = var10.dataSavingMode;
                var2['data_saving_mode'] = var11;
                var10 = var10.dataSavingMode;
                var2['low_quality_image_mode'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.timing;
                var10 = var10.compressTimeMs;
                var2['compress_time_ms'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.timing;
                var10 = var10.getUploadUrlTimeMs;
                var2['get_upload_url_time_ms'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.timing;
                var10 = var10.uploadTimeMs;
                var2['upload_time_ms'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.convertedMimeType;
                var12 = var9 != var11;
                var10 = var8;
                if(!var12) { _fun0036_ip = 329; continue _fun0036 }
case 113:
                var10 = var11;
case 329:
                var2['converted_mime_type'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.imageCompressionQuality;
                var12 = var9 != var11;
                var10 = 0;
                if(!var12) { _fun0036_ip = 330; continue _fun0036 }
case 154:
                var10 = var11;
case 330:
                var2['image_compression_quality'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.videoCompressionQuality;
                var11 = var9 != var10;
                if(!var11) { _fun0036_ip = 331; continue _fun0036 }
case 210:
                var8 = var10;
case 331:
                var2['video_compression_quality'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.convertedMimeType;
                var8 = var9 != var8;
                if(!var8) { _fun0036_ip = 332; continue _fun0036 }
case 333:
                var10 = var7.mimeType;
                var9 = var7.uploadAnalytics;
                var9 = var9.convertedMimeType;
                var8 = var10 !== var9;
case 332:
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
                var8 = var7.uploadAnalytics;
                var8 = var8.conversionFailureReason;
                var2['conversion_failure_reason'] = var8;
                var8 = var7._libdiscoreEnabled;
                var7 = 'httputils';
                if(!var8) { _fun0036_ip = 334; continue _fun0036 }
case 335:
                var7 = 'libdiscore';
case 334:
                var2['upload_http_client'] = var7;
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
        var1['value'] = var6;
        var2[27] = var1;
        var6 = {};
        var1 = 'fromJson';
        var6['key'] = var1;
        var1 = function fromJson(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
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
case 0:
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
                        if(var2) { _fun0038_ip = 336; continue _fun0038 }
case 337:
                        var2 = _closure3_slot0;
                        var2[var4] = var3;
case 336:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var4 = var1.status;
                var3 = _closure1_slot18;
                var3 = var3.COMPLETED;
                if(!(var4 !== var3)) { _fun0037_ip = 338; continue _fun0037 }
case 339:
                var2 = _closure1_slot18;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
case 338:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'tryConvertToWebP';
        var6['key'] = var8;
        var8 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0039_ip = 340; continue _fun0039 }
case 237:
                    var17 = arg1;
                    var15 = arg2;
                    var3 = arg3;
                    var9 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    var6 = undefined;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 32;
                    var2 = var14[var2];
                    var14 = var12.bind(var9)(var2);
                    var12 = var14.getImageAttachmentMezzanineV2Config;
                    var2 = {};
                    var18 = 'CloudUpload.maybeConvertToWebP';
                    var2['location'] = var18;
                    var12 = var12.bind(var14)(var2);
                    var2 = var12.enabled;
                    if(var2) { _fun0039_ip = 13; continue _fun0039 }
case 341:
                    var18 = _closure1_slot16;
                    var14 = var18.warn;
                    var21 = var3;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var20 = var2.concat;
                    var19 = 'webp conversion skipped for ';
                    var2 = ': not enabled';
                    var2 = var20.bind(var19)(var21, var2);
                    var2 = var14.bind(var18)(var2);
                    var2 = null;
                    return var2;
case 13:
                    var14 = var17;
                    var2 = null;
                    if(!(var2 != var14)) { _fun0039_ip = 342; continue _fun0039 }
case 343:
                    var14 = var12.maxFileSizeBytes;
                    if(!(var2 != var14)) { _fun0039_ip = 45; continue _fun0039 }
case 344:
                    var14 = var17;
                    var14 = var14.size;
                    var12 = var12.maxFileSizeBytes;
                    if(!(!(var14 > var12))) { _fun0039_ip = 345; continue _fun0039 }
case 45:
                    var12 = var15;
                    var12 = var12.bind(var9)();
                    if(var12) { _fun0039_ip = 346; continue _fun0039 }
case 347:
                    var14 = global;
                    var18 = var14.performance;
                    var12 = var18.now;
                    var7 = var12.bind(var18)();
                    var12 = {};
                    var18 = 0;
                    var12['compressTimeMs'] = var18;
                    var5 = var12;
case 348: // try_start_0
                    var18 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var19 = 33;
                    var12 = var12[var19];
                    var20 = var18.bind(var9)(var12);
                    var18 = var20.maybeConvertToWebP;
                    var12 = var17;
                    var12 = var18.bind(var20)(var12);
                    SaveGenerator(address=267);
case 349:
                    return var12;
case 63:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=17);
                    if(var18) { _fun0039_ip = 350; continue _fun0039 }
case 351:
                    var11 = var12;
                    var15 = var15.bind(var9)();
                    if(var15) { _fun0039_ip = 352; continue _fun0039 }
case 353:
                    var15 = var11;
                    var15 = var15.success;
                    if(!var15) { _fun0039_ip = 354; continue _fun0039 }
case 355:
                    var15 = var11;
                    var15 = var15.convertedBlob;
                    if(!(var2 == var15)) { _fun0039_ip = 79; continue _fun0039 }
case 354:
                    var15 = var11;
                    var15 = var15.reason;
                    var13 = var15;
                    if(!(var2 == var15)) { _fun0039_ip = 356; continue _fun0039 }
case 151:
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var19];
                    var15 = var18.bind(var9)(var15);
                    var15 = var15.ConversionFailureReason;
                    var15 = var15.UNKNOWN_ERROR;
                    _fun0039_ip = 114; continue _fun0039;
case 356:
                    var15 = var13;
case 114:
                    var19 = _closure1_slot16;
                    var18 = var19.log;
                    var22 = var3;
                    var13 = var14.HermesInternal;
                    var21 = var13.concat;
                    var20 = 'webp conversion skipped for ';
                    var13 = ': ';
                    var13 = var21.bind(var20)(var22, var13, var15);
                    var13 = var18.bind(var19)(var13);
                    var13 = var5;
                    var13['conversionFailureReason'] = var15;
                    _fun0039_ip = 357; continue _fun0039;
case 79:
                    var19 = _closure1_slot16;
                    var18 = var19.log;
                    var28 = var3;
                    var13 = var11;
                    var34 = var13.sizeBefore;
                    var32 = var13.sizeAfter;
                    var21 = var13.compressionRatio;
                    var20 = var21.toFixed;
                    var15 = 2;
                    var30 = var20.bind(var21)(var15);
                    var15 = var14.HermesInternal;
                    var24 = var15.concat;
                    var37 = 'webp conversion worked for ';
                    var35 = ': ';
                    var33 = ' -> ';
                    var31 = ' bytes (';
                    var29 = 'x)';
                    var36 = var28;
                    var15 = var37[var24](var36, var35, var34, var33, var32, var31, var30, var29, var28);
                    var15 = var18.bind(var19)(var15);
                    var15 = var5;
                    var22 = var14.File;
                    var18 = var13.convertedBlob;
                    var21 = new Array(1);
                    var21[0] = var18;
                    var19 = var17;
                    var35 = var19.name;
                    var18 = {};
                    var17 = 'image/webp';
                    var18['type'] = var17;
                    var19 = var19.lastModified;
                    var18['lastModified'] = var19;
                    var19 = var22.prototype;
                    var19 = Object.create(var19, {constructor: {value: var22}});
                    var37 = var19;
                    var36 = var21;
                    var34 = var18;
                    var18 = new var37[var22](var36, var35, var34, var33);
                    var18 = var18 instanceof Object ? var18 : var19;
                    var15['convertedFile'] = var18;
                    var15['convertedMimeType'] = var17;
                    var13 = var13.hashTimeMs;
                    var16 = var13;
                    var17 = var2 != var13;
                    var13 = undefined;
                    if(!var17) { _fun0039_ip = 219; continue _fun0039 }
case 358:
                    var13 = var16;
case 219:
                    var15['hashTimeMs'] = var13;
case 357: // try_end0
                    _fun0039_ip = 359; continue _fun0039;
case 352:
                    return var2;
case 350:
                    return var12;
case 360: // catch_target0
                    CatchBlockStart(arg_register=15);
                    var15 = _closure1_slot16;
                    var13 = var15.warn;
                    var19 = var3;
                    var12 = var14.HermesInternal;
                    var18 = var12.concat;
                    var17 = 'webp conversion failed for ';
                    var12 = ':';
                    var12 = var18.bind(var17)(var19, var12);
                    var12 = var13.bind(var15)(var12, var16);
                    var13 = var5;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 33;
                    var12 = var16[var12];
                    var12 = var15.bind(var9)(var12);
                    var12 = var12.ConversionFailureReason;
                    var12 = var12.UNKNOWN_ERROR;
                    var13['conversionFailureReason'] = var12;
case 359:
                    var13 = var14.Math;
                    var12 = var13.round;
                    var15 = var14.performance;
                    var14 = var15.now;
                    var14 = var14.bind(var15)();
                    var7 = var14 - var7;
                    var6 = var12.bind(var13)(var7);
                    var7 = var5;
                    var10 = var11;
                    var11 = var2 == var11;
                    var9 = undefined;
                    if(var11) { _fun0039_ip = 361; continue _fun0039 }
case 362:
                    var9 = var10.compressTimeMs;
case 361:
                    var8 = var9;
                    if(!(var2 == var9)) { _fun0039_ip = 363; continue _fun0039 }
case 364:
                    _fun0039_ip = 365; continue _fun0039;
case 363:
                    var6 = var8;
case 365:
                    var7['compressTimeMs'] = var6;
                    return var5;
case 346:
                    return var2;
case 345:
                    var7 = _closure1_slot16;
                    var6 = var7.warn;
                    var10 = var3;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var8 = 'webp conversion skipped for ';
                    var5 = ': too big';
                    var5 = var9.bind(var8)(var10, var5);
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 342:
                    var5 = _closure1_slot16;
                    var4 = var5.warn;
                    var8 = var3;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'webp conversion skipped for ';
                    var3 = ': no file';
                    var3 = var7.bind(var6)(var8, var3);
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 340:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot0 = var8;
        var7 = function tryConvertToWebP(arg1, arg2, arg3) {
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
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 34;
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