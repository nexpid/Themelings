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
            var2 = _closure1_slot11;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot10;
            var1 = _closure1_slot24;
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
            var5 = _closure1_slot11;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = ['Content-Range'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var10 = var9.bind(var1)(var5);
    var _closure1_slot9 = var10;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var6 = 12;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot15 = var6;
    var6 = 13;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.AbortCodes;
    var _closure1_slot16 = var11;
    var6 = var6.AnalyticEvents;
    var _closure1_slot17 = var6;
    var6 = 14;
    var6 = var8[var6];
    var12 = var9.bind(var1)(var6);
    var6 = var12.prototype;
    var11 = Object.create(var6, {constructor: {value: var12}});
    var15 = 'CloudUpload.tsx';
    var16 = var11;
    var6 = new var16[var12](var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot18 = var6;
    var12 = var4.Set;
    var6 = var12.prototype;
    var11 = Object.create(var6, {constructor: {value: var12}});
    var15 = [429];
    var16 = var11;
    var6 = new var16[var12](var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot19 = var6;
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
                var3 = _closure1_slot8;
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
                var2 = 'client_error';
                if(!(var2 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                var2 = global;
                var2 = var2.HermesInternal;
                var12 = var2.concat;
                var6 = '';
                var2 = ':';
                var2 = var12.bind(var6)(var4, var2, var3);
                _fun0003_ip = 22; continue _fun0003;
case 19:
                var12 = var9 == var11;
                var6 = undefined;
                if(var12) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                var6 = var11.status;
case 23:
                var9 = var9 != var6;
                var13 = 0;
                if(!var9) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var13 = var6;
case 25:
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
case 22:
                var6 = _closure1_slot23;
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
        var3 = _closure1_slot12;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot9;
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
                if(var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var4 = var2.kind;
                var3 = 'network_error';
                var1 = var3 === var4;
case 27:
                if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var3 = var2.kind;
                var2 = 'client_error';
                var1 = var2 === var3;
case 29:
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
                if(var5) { _fun0005_ip = 31; continue _fun0005 }
case 11:
                var3 = var4.status;
case 31:
                var4 = var2 != var3;
                var2 = 0;
                if(!var4) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var2 = var3;
case 32:
                var4 = _closure1_slot19;
                var3 = var4.has;
                var3 = var3.bind(var4)(var2);
                var5 = var1.message;
                var4 = var5.toLowerCase;
                var6 = var4.bind(var5)();
                var5 = var6.includes;
                var4 = 'network';
                var4 = var5.bind(var6)(var4);
                if(var4) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var6 = var1.message;
                var5 = var6.toLowerCase;
                var7 = var5.bind(var6)();
                var6 = var7.includes;
                var5 = 'terminated';
                var4 = var6.bind(var7)(var5);
case 34:
                if(var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var6 = var1.message;
                var5 = var6.toLowerCase;
                var7 = var5.bind(var6)();
                var6 = var7.includes;
                var5 = 'offline';
                var4 = var6.bind(var7)(var5);
case 36:
                if(var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var5 = var1.message;
                var1 = var5.toLowerCase;
                var6 = var1.bind(var5)();
                var5 = var6.includes;
                var1 = 'changed';
                var4 = var5.bind(var6)(var1);
case 38:
                var1 = 500;
                if(!(var2 >= var1)) { _fun0005_ip = 24; continue _fun0005 }
case 40:
                var1 = 600;
                var2 = var2 < var1;
                var1 = 'server_error';
                if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 24:
                var2 = 'client_error';
                if(var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var3 = 'unknown';
                if(!var4) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var3 = 'network_error';
case 44:
                var2 = var3;
case 42:
                var1 = var2;
case 41:
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
                    var1 = 15;
                    var1 = var4[var1];
                    var7 = undefined;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.HTTPResponseError;
                    var3 = var2 instanceof var1;
                    if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = global;
                    var3 = var4.Error;
                    var8 = var2 instanceof var3;
                    var6 = _closure2_slot0;
                    var5 = _closure3_slot0;
                    var3 = {};
                    if(var8) { _fun0006_ip = 48; continue _fun0006 }
case 49:
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
case 48:
                    var3['cause'] = var2;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var4;
                    var10 = var5;
                    var9 = var3;
                    var3 = new var11[var6](var10, var9, var8);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 46:
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
    var _closure1_slot20 = var5;
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
    var _closure1_slot21 = var4;
    var6 = function UploadAnalytics() {
        var3 = this;
        var4 = _closure1_slot8;
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var4.bind(var1)(var3, var2);
        var2 = {};
        var3['timing'] = var2;
        var2 = 0;
        var3['uploadResumptionCount'] = var2;
        var3['uploadResumptionPosition'] = var2;
        return var1;
    };
    var _closure1_slot25 = var6;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot22 = var6;
    var6 = 16;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var2 = function(arg1) {
        var5 = function CloudUpload(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var7 = arg4;
                var9 = this;
                var1 = _closure1_slot8;
                var8 = _closure2_slot11;
                var5 = undefined;
                var1 = var1.bind(var5)(var9, var8);
                var2 = _closure1_slot23;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var5)(var9, var8, var1);
                var _closure3_slot0 = var1;
                var2 = _closure1_slot21;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
                var8 = 0;
                var1['loaded'] = var8;
                var2 = false;
                var1['reactNativeFilePrepped'] = var2;
                var9 = _closure1_slot22;
                var10 = var9.prototype;
                var10 = Object.create(var10, {constructor: {value: var9}});
                var15 = var10;
                var9 = new var15[var9](var14);
                var9 = var9 instanceof Object ? var9 : var10;
                var1['uploadAnalytics'] = var9;
                var1['uploadAttempts'] = var8;
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
                var9 = var4.file;
                var6 = null;
                var11 = var6 == var9;
                var10 = undefined;
                if(var11) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var10 = var9.size;
case 50:
                var11 = var6 != var10;
                var9 = 0;
                if(!var11) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var9 = var10;
case 52:
                var1['preCompressionSize'] = var9;
                var10 = var4.file;
                var11 = var6 == var10;
                var9 = undefined;
                if(var11) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var9 = var10.size;
case 54:
                var10 = var6 != var9;
                var8 = 0;
                if(!var10) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                var8 = var9;
case 56:
                var1['currentSize'] = var8;
                var8 = arg3;
                var1['reactNativeFileIndex'] = var8;
                if(!(var6 != var7)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var1['allowOptimization'] = var7;
case 58:
                var9 = var4.platform;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 16;
                var7 = var7[var8];
                var7 = var10.bind(var5)(var7);
                var7 = var7.UploadPlatform;
                var7 = var7.WEB;
                var7 = var9 === var7;
                if(!var7) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var9 = var4.compressionMetadata;
                var7 = var6 != var9;
case 60:
                if(!var7) { _fun0007_ip = 62; continue _fun0007 }
case 63:
                var4 = var4.compressionMetadata;
                var4 = var4.originalContentType;
                var1['mimeType'] = var4;
case 62:
                var4 = global;
                var4 = var4.AbortController;
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var15 = var7;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['_abortController'] = var4;
                var4 = var1.origin;
                if(!(var6 != var4)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                var6 = var1.uploadAnalytics;
                var4 = var1.origin;
                var7 = 'string';
                var4 = typeof var4;
                if(!(var7 !== var4)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var7.bind(var5)(var4);
                var7 = var4.UploadOrigin;
                var4 = var1.origin;
                var4 = var7[var4];
                _fun0007_ip = 68; continue _fun0007;
case 66:
                var4 = var1.origin;
case 68:
                var6['origin'] = var4;
case 64:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 17;
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
                return var1;
            }
        };
        var _closure2_slot11 = var5;
        var2 = _closure1_slot12;
        var4 = undefined;
        var1 = arg1;
        var1 = var2.bind(var4)(var5, var1);
        var3 = _closure1_slot9;
        var1 = {};
        var2 = 'parseRangeHeader';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var2 = var3.match;
                var1 = /^bytes=(\d+)-(\d+)(?:\/\d+)?$/;
                var7 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0008_ip = 69; continue _fun0008 }
case 70:
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
case 69:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(27);
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
                var1 = 16;
                var1 = var5[var1];
                var7 = undefined;
                var1 = var4.bind(var7)(var1);
                var1 = var1.UploadPlatform;
                var1 = var1.REACT_NATIVE;
                if(!(var2 !== var1)) { _fun0009_ip = 39; continue _fun0009 }
case 71:
                var1 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 18;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var2 = var2.Millis;
                var6 = var2.HOUR;
                var2 = 1;
                var2 = var2 * var6;
                var1['timeout'] = var2;
                var2 = 12;
                var1['retries'] = var2;
                var2 = 19;
                var2 = var5[var2];
                var2 = var4.bind(var7)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var12 = var4;
                var2 = new var12[var2](var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['backoff'] = var2;
                _fun0009_ip = 72; continue _fun0009;
case 39:
                var2 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 18;
                var5 = var8[var3];
                var5 = var4.bind(var7)(var5);
                var5 = var5.Millis;
                var6 = var5.HOUR;
                var5 = 1;
                var5 = var5 * var6;
                var2['timeout'] = var5;
                var5 = 19;
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
case 72:
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
                var1 = 16;
                var1 = var6[var1];
                var7 = undefined;
                var1 = var5.bind(var7)(var1);
                var1 = var1.UploadPlatform;
                var1 = var1.REACT_NATIVE;
                if(!(var4 !== var1)) { _fun0010_ip = 8; continue _fun0010 }
case 71:
                var1 = var2.retryOpts;
                var1 = var1.bind(var2)();
                _fun0010_ip = 73; continue _fun0010;
case 8:
                var2 = {};
                var5 = {};
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 18;
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
                var5 = 19;
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
case 73:
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
                if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                var2 = var2.item;
                var3 = var2.platform;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.UploadPlatform;
                var2 = var2.REACT_NATIVE;
                var1 = var3 !== var2;
case 74:
                return var1;
            }
        };
        var1['value'] = var8;
        var2[3] = var1;
        var1 = {};
        var8 = 'uploadFileToCloud';
        var1['key'] = var8;
        var9 = _closure1_slot6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                    var2 = var6.responseUrl;
                    var9 = null;
                    if(!(var9 != var2)) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var10 = _closure1_slot18;
                    var5 = var10.log;
                    var7 = var6.id;
                    var11 = global;
                    var3 = var11.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'Uploading ';
                    var4 = var4.bind(var3)(var7);
                    var3 = var6.item;
                    var12 = var3.platform;
                    var13 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 16;
                    var3 = var3[var7];
                    var8 = undefined;
                    var3 = var13.bind(var8)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.REACT_NATIVE;
                    if(!(var12 !== var3)) { _fun0012_ip = 80; continue _fun0012 }
case 37:
                    var3 = var6.item;
                    var3 = var3.file;
                    var13 = var3.name;
                    var3 = var11.HermesInternal;
                    var12 = var3.concat;
                    var3 = 'filename=';
                    var3 = var12.bind(var3)(var13);
                    _fun0012_ip = 54; continue _fun0012;
case 80:
                    var12 = var6.item;
                    var15 = var12.filename;
                    var12 = var6.item;
                    var14 = var12.uri;
                    var11 = var11.HermesInternal;
                    var13 = var11.concat;
                    var12 = 'filename=';
                    var11 = ', uri=';
                    var3 = var13.bind(var12)(var15, var11, var14);
case 54:
                    var3 = var5.bind(var10)(var4, var3);
                    var3 = var6.item;
                    var4 = var3.platform;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var5.bind(var8)(var3);
                    var3 = var3.UploadPlatform;
                    var3 = var3.REACT_NATIVE;
                    if(!(var4 !== var3)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var3 = var6.item;
                    var5 = var3.file;
                    var4 = 'application/octet-stream';
                    _fun0012_ip = 83; continue _fun0012;
case 81:
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
                    if(!var9) { _fun0012_ip = 65; continue _fun0012 }
case 84:
                    var10 = var7.type;
                    var9 = 'application/json';
                    var3 = var11;
                    if(!(var9 !== var10)) { _fun0012_ip = 65; continue _fun0012 }
case 85:
                    var3 = var7.type;
case 65:
                    var4 = var3;
                    var5 = var7;
case 83:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 17;
                    var3 = var3[var9];
                    var10 = var7.bind(var8)(var3);
                    var7 = var10.canUploadNatively;
                    var3 = var6.item;
                    var3 = var7.bind(var10)(var3);
                    if(!var3) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.LibdiscoreHttpClient;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {constructor: {value: var3}});
                    var19 = var7;
                    var3 = new var19[var3](var18);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var6['_uploadHttpClient'] = var3;
                    var3 = true;
                    var6['_libdiscoreEnabled'] = var3;
                    var7 = _closure1_slot18;
                    var3 = var7.log;
                    var2 = 'Using libdiscore client for file upload';
                    var2 = var3.bind(var7)(var2);
case 86:
                    var3 = var6.uploadFileWithResumption;
                    var2 = var6.responseUrl;
                    var2 = var3.bind(var6)(var2, var5, var4);
                    SaveGenerator(address=515);
case 88:
                    return var2;
case 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 90; continue _fun0012 }
case 91:
                    return var2;
case 90:
                    return var2;
case 78:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var18 = '_uploadFileToCloud - responseUrl is not set';
                    var19 = var3;
                    var2 = new var19[var4](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 76:
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
                    if(var4) { _fun0013_ip = 92; continue _fun0013 }
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
                    var6 = 18;
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
                            if(!(var1 !== var2)) { _fun0014_ip = 93; continue _fun0014 }
case 12:
                            var2 = var3.status;
                            var1 = 201;
                            if(!(var1 !== var2)) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                            var4 = _closure1_slot20;
                            var2 = var4.rejectionHandler;
                            var1 = 'status_check';
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0014_ip = 95; continue _fun0014;
case 93:
                            var2 = _closure4_slot0;
                            var1 = var2.currentSize;
case 95:
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
                            var3 = 15;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var4 = var4.HTTPResponseError;
                            var4 = var1 instanceof var4;
                            if(!var4) { _fun0015_ip = 96; continue _fun0015 }
case 97:
                            var5 = var1.status;
                            var4 = 308;
                            if(!(var4 !== var5)) { _fun0015_ip = 98; continue _fun0015 }
case 96:
                            var5 = _closure1_slot20;
                            var4 = var5.rejectionHandler;
                            var2 = 'status_check';
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var3)(var1);
                            return var2;
case 98:
                            var4 = _closure4_slot0;
                            var3 = var4.parseRangeHeader;
                            var1 = var1.headers;
                            var5 = var1.range;
                            var1 = null;
                            var6 = var1 != var5;
                            var2 = '';
                            if(!var6) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                            var2 = var5;
case 99:
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 != var2;
                            var1 = 0;
                            if(!var3) { _fun0015_ip = 101; continue _fun0015 }
case 102:
                            var3 = 1;
                            var2 = var2[var3];
                            var1 = var2 + var3;
case 101:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=184);
case 103:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 104; continue _fun0013 }
case 40:
                    return var2;
case 104:
                    return var2;
case 92:
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
                    if(var2) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                    var8 = undefined;
                    if(!(var9 === var8)) { _fun0016_ip = 94; continue _fun0016 }
case 107:
                    var9 = 0;
case 94:
                    SaveGenerator(address=31);
case 108:
                    return var8;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                    var11 = _closure1_slot18;
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
                    if(!(!(var9 > var5))) { _fun0016_ip = 39; continue _fun0016 }
case 111:
                    var10 = var7.headers;
                    var5 = null;
                    if(!(var5 != var10)) { _fun0016_ip = 112; continue _fun0016 }
case 113:
                    var11 = var7.headers;
                    var5 = var11.Content-Range;
                    var10 = _closure1_slot5;
                    var5 = _closure1_slot3;
                    var5 = var10.bind(var8)(var11, var5);
                    var7['headers'] = var5;
                    _fun0016_ip = 112; continue _fun0016;
case 39:
                    var10 = var3.uploadAnalytics;
                    var5 = var10.uploadResumptionCount;
                    var5 = var5 + 1;
                    var10['uploadResumptionCount'] = var5;
                    var5 = {};
                    var10 = var7.headers;
                    var11 = null;
                    if(!(var11 == var10)) { _fun0016_ip = 114; continue _fun0016 }
case 115:
                    var10 = {};
case 114:
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
                    var5[5] = var10;
                    var7['headers'] = var5;
case 112:
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
                    var8 = _closure1_slot20;
                    var3 = var8.rejectionHandler;
                    var7 = 'upload';
                    var3 = var3.bind(var8)(var7);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=381);
case 116:
                    return var3;
case 117:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                    var6 = var3.status;
                    var5 = 200;
                    if(!(var5 !== var6)) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                    var6 = var3.status;
                    var5 = 201;
                    if(!(var5 === var6)) { _fun0016_ip = 122; continue _fun0016 }
case 120:
                    return var3;
case 122:
                    var6 = _closure1_slot20;
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
case 118:
                    return var3;
case 109:
                    return var2;
case 105:
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
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 123; continue _fun0017 }
case 12:
                    var12 = undefined;
                    var _closure4_slot1 = var12;
                    var _closure4_slot2 = var12;
                    var _closure4_slot3 = var12;
                    var _closure4_slot0 = var3;
                    var4 = var3.retryOpts;
                    var4 = var4.bind(var3)();
                    var6 = var4.timeout;
                    var5 = var4.backoff;
                    _closure4_slot1 = var5;
                    var11 = var4.retries;
                    var5 = {};
                    var4 = arg1;
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
                    _closure4_slot2 = var5;
                    _closure4_slot3 = var4;
                    var10 = function* _loop() {
                        var1 = function* anon_0__loop() {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                                if(var4) { _fun0018_ip = 124; continue _fun0018 }
case 75:
                                var4 = undefined;
                                var9 = undefined;
                                var8 = undefined;
                                var _closure6_slot0 = var4;
                                var5 = _closure4_slot0;
                                var7 = var5.uploadAttempts;
                                var7 = var7 + 1;
                                var5['uploadAttempts'] = var7;
                                var7 = var5.uploadAnalytics;
                                var5 = var5.uploadAttempts;
                                var7['numUploadAttempts'] = var5;
case 125: // try_start_0
                                var7 = _closure4_slot0;
                                var9 = var7.responseUrl;
                                var5 = var7.ensureFreshResponseUrl;
                                var5 = var5.bind(var7)();
                                SaveGenerator(address=88);
case 126:
                                return var5;
case 15:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                                if(var7) { _fun0018_ip = 127; continue _fun0018 }
case 69:
                                var11 = _closure4_slot2;
                                var7 = _closure4_slot0;
                                var10 = var7.responseUrl;
                                var11['url'] = var10;
                                var7 = var7.responseUrl;
                                if(!(var9 === var7)) { _fun0018_ip = 128; continue _fun0018 }
case 129:
                                var7 = _closure4_slot0;
                                var9 = var7.uploadAttempts;
                                var7 = 1;
                                if(!(var9 > var7)) { _fun0018_ip = 130; continue _fun0018 }
case 131:
                                var11 = _closure4_slot0;
                                var10 = var11.trackTime;
                                var9 = _closure1_slot6;
                                var7 = function* () {
                                    var1 = function* anon_0_() {
                                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0019_ip = 132; continue _fun0019 }
case 133:
                                            var4 = _closure4_slot0;
                                            var3 = var4.getResumePosition;
                                            var2 = var4.responseUrl;
                                            var2 = var3.bind(var4)(var2);
                                            SaveGenerator(address=37);
case 134:
                                            return var2;
case 70:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            if(var3) { _fun0019_ip = 135; continue _fun0019 }
case 136:
                                            return var2;
case 135:
                                            return var2;
case 132:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var9 = var9.bind(var4)(var7);
                                var7 = 'resumptionCheckTimeMs';
                                var7 = var10.bind(var11)(var7, var9);
                                SaveGenerator(address=193);
case 137:
                                return var7;
case 104:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                                if(var9) { _fun0018_ip = 138; continue _fun0018 }
case 139:
                                var8 = var7;
                                var10 = _closure4_slot0;
                                var9 = var10.uploadAnalytics;
                                var9['uploadResumptionPosition'] = var7;
                                var9 = var10.supportsResume;
                                var10 = var9.bind(var10)();
                                var9 = 0;
                                if(!var10) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                                var9 = var8;
case 140:
                                _closure4_slot3 = var9;
                                var8 = _closure4_slot0;
                                var8['loaded'] = var9;
                                _fun0018_ip = 130; continue _fun0018;
case 138: // try_end0
                                return var7;
case 128: // try_start_1
                                var8 = 0;
                                _closure4_slot3 = var8;
                                var7 = _closure4_slot0;
                                var7['loaded'] = var8;
case 130:
                                var8 = {};
                                var11 = _closure4_slot0;
                                var10 = var11.startOrResumeUpload;
                                var9 = _closure4_slot2;
                                var7 = _closure4_slot3;
                                var7 = var10.bind(var11)(var9, var7);
                                SaveGenerator(address=305);
case 142:
                                return var7;
case 63:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                                if(var9) { _fun0018_ip = 143; continue _fun0018 }
case 72:
                                var8['v'] = var7;
case 144: // try_end1
                                return var8;
case 143:
                                return var7;
case 127:
                                return var5;
case 145: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register=7);
                                var2 = var8;
                                var5 = _closure1_slot20;
                                var5 = var8 instanceof var5;
                                if(!var5) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                                var8 = var2;
                                var5 = var8.canRetry;
                                var5 = var5.bind(var8)();
                                if(var5) { _fun0018_ip = 148; continue _fun0018 }
case 146:
                                var10 = _closure1_slot18;
                                var9 = var10.warn;
                                var5 = _closure4_slot0;
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
case 148:
                                var11 = _closure1_slot18;
                                var10 = var11.warn;
                                var8 = _closure4_slot0;
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
                                SaveGenerator(address=541);
case 149:
                                return var2;
case 150:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                                var9 = _closure4_slot1;
                                var8 = var9.fail;
                                var12 = var8.bind(var9)();
                                _closure6_slot0 = var12;
                                var8 = _closure1_slot18;
                                var7 = var8.log;
                                var6 = _closure4_slot0;
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
                                SaveGenerator(address=665);
case 153:
                                return var3;
case 154:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0018_ip = 155; continue _fun0018 }
case 156:
                                return var4;
case 155:
                                return var3;
case 151:
                                return var2;
case 124:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var3.uploadAttempts;
                    if(!(var2 <= var11)) { _fun0017_ip = 149; continue _fun0017 }
case 157:
                    var2 = var3._aborted;
                    var9 = global;
                    var8 = 'iterator is not an object';
                    var7 = 'iterator.throw() did not return an object';
                    var6 = 'throw';
                    var5 = 'iterator.next() did not return an object';
                    if(var2) { _fun0017_ip = 149; continue _fun0017 }
case 58:
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
case 158:
                    var4 = var17;
                    var4 = var18.bind(var13)(var4);
                    var21 = var4;
                    var20 = var5;
                    var14 = ensureObject(var21, var20);
                    var2 = var4;
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 159; continue _fun0017 }
case 160: // try_start_0
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=375);
case 161:
                    return var4;
case 162: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    var21 = var13;
                    var20 = var6;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 163; continue _fun0017 }
case 164:
                    var4 = var4.bind(var13)(var14);
                    var21 = var4;
                    var20 = var7;
                    var14 = ensureObject(var21, var20);
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 118; continue _fun0017 }
case 65:
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=375);
case 83:
                    return var4;
case 165: // try_start_1
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    var17 = var14;
                    var15 = var16;
                    if(!var15) { _fun0017_ip = 158; continue _fun0017 }
case 119:
                    var17 = var14;
case 67: // try_end1
                    var20 = 'return';
                    var21 = var13;
                    var19 = getMethod(var21, var20);
                    if(!(var19 !== var12)) { _fun0017_ip = 166; continue _fun0017 }
case 167:
                    var15 = var17;
                    var15 = var19.bind(var13)(var15);
                    var20 = 'iterator.return() did not return an object';
                    var21 = var15;
                    var19 = ensureObject(var21, var20);
                    var19 = var15.done;
                    if(var19) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                    var19 = generatorSetDelegated();
                    SaveGenerator(address=375);
case 170:
                    return var15;
case 168:
                    var15 = var15.value;
                    return var15;
case 166:
                    return var14;
case 118:
                    var2 = var4;
                    _fun0017_ip = 159; continue _fun0017;
case 163:
                    var20 = 'return';
                    var21 = var13;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 171; continue _fun0017 }
case 172:
                    var21 = var4.bind(var13)();
                    var20 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var21, var20);
case 171:
                    var21 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var21);
                    throw var12;
case 159:
                    var2 = var2.value;
                    if(var2) { _fun0017_ip = 173; continue _fun0017 }
case 174:
                    var4 = var3.uploadAttempts;
                    if(!(var4 <= var11)) { _fun0017_ip = 149; continue _fun0017 }
case 175:
                    var4 = var3._aborted;
                    if(var4) { _fun0017_ip = 149; continue _fun0017 }
case 176:
                    _fun0017_ip = 58; continue _fun0017;
case 173:
                    var2 = var2.v;
                    return var2;
case 149:
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
case 123:
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
                    if(var2) { _fun0020_ip = 177; continue _fun0020 }
case 133:
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
                    if(var5) { _fun0020_ip = 178; continue _fun0020 }
case 125:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getFileSize;
                    var2 = var4.bind(var5)(var6);
case 178:
                    SaveGenerator(address=94);
case 4:
                    return var2;
case 179:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 180; continue _fun0020 }
case 181:
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0020_ip = 182; continue _fun0020 }
case 183:
                    var3 = var2;
case 182:
                    return var3;
case 180:
                    return var2;
case 177:
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
        var6 = 'trackTime';
        var1['key'] = var6;
        var6 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0021_ip = 53; continue _fun0021 }
case 77:
                    var4 = arg1;
                    var2 = arg2;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = global;
                    var9 = var6.performance;
                    var8 = var9.now;
                    var3 = var8.bind(var9)();
case 110: // try_start_0
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=48);
case 135:
                    return var2;
case 184:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0021_ip = 185; continue _fun0021 }
case 29: // try_end0
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
case 185:
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
case 186: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = var5.uploadAnalytics;
                    var5 = var5.timing;
                    var7 = var6.performance;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3 = var6 - var3;
                    var5[var4] = var3;
                    throw var2;
case 53:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot5 = var6;
        var6 = function trackTime(arg1, arg2) {
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
        var6 = 'upload';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0022_ip = 187; continue _fun0022 }
case 12:
                    var _closure4_slot0 = var6;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var _closure4_slot3 = var3;
                    var12 = undefined;
                    var14 = undefined;
                    var10 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = var6.status;
                    var2 = _closure1_slot21;
                    var2 = var2.COMPLETED;
                    if(!(var4 !== var2)) { _fun0022_ip = 188; continue _fun0022 }
case 74:
                    var4 = var6.setStatus;
                    var2 = _closure1_slot21;
                    var2 = var2.STARTED;
                    var2 = var4.bind(var6)(var2);
                    var8 = global;
                    var4 = var8.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var6['startTime'] = var2;
                    var2 = var6.trackUploadStart;
                    var2 = var2.bind(var6)();
                    var4 = var6.reactNativeFilePrepped;
                    var2 = false;
                    if(!(var2 === var4)) { _fun0022_ip = 189; continue _fun0022 }
case 190:
                    var2 = var6.reactNativeCompressAndExtractData;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=146);
case 13:
                    return var2;
case 191:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0022_ip = 192; continue _fun0022 }
case 189:
                    var4 = var6.isCancelled;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0022_ip = 193; continue _fun0022 }
case 194:
                    var4 = var6.allowOptimization;
                    if(!var4) { _fun0022_ip = 109; continue _fun0022 }
case 195:
                    var4 = var6.item;
                    var5 = var4.platform;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 16;
                    var4 = var15[var4];
                    var4 = var13.bind(var3)(var4);
                    var4 = var4.UploadPlatform;
                    var4 = var4.WEB;
                    if(!(var5 === var4)) { _fun0022_ip = 109; continue _fun0022 }
case 196:
                    var17 = _closure2_slot11;
                    var15 = var17.tryConvertToWebP;
                    var4 = var6.item;
                    var13 = var4.file;
                    var5 = var6.id;
                    var4 = function() {
                        var1 = _closure4_slot0;
                        var1 = var1._aborted;
                        return var1;
                    };
                    var4 = var15.bind(var17)(var13, var4, var5);
                    SaveGenerator(address=280);
case 197:
                    return var4;
case 198:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0022_ip = 199; continue _fun0022 }
case 200:
                    var13 = null;
                    if(!(var13 != var4)) { _fun0022_ip = 109; continue _fun0022 }
case 201:
                    var5 = var4.convertedFile;
                    if(!(var13 != var5)) { _fun0022_ip = 202; continue _fun0022 }
case 203:
                    var15 = var6.item;
                    var5 = var4.convertedFile;
                    var15['file'] = var5;
                    var5 = var4.convertedFile;
                    var5 = var5.size;
                    var6['currentSize'] = var5;
case 202:
                    var5 = var4.convertedMimeType;
                    if(!(var13 != var5)) { _fun0022_ip = 204; continue _fun0022 }
case 205:
                    var15 = var6.uploadAnalytics;
                    var5 = var4.convertedMimeType;
                    var15['convertedMimeType'] = var5;
case 204:
                    var5 = var4.hashTimeMs;
                    if(!(var13 != var5)) { _fun0022_ip = 206; continue _fun0022 }
case 207:
                    var5 = var6.uploadAnalytics;
                    var15 = var5.timing;
                    var5 = var4.hashTimeMs;
                    var15['hashTimeMs'] = var5;
case 206:
                    var5 = var4.conversionFailureReason;
                    if(!(var13 != var5)) { _fun0022_ip = 208; continue _fun0022 }
case 122:
                    var13 = var6.uploadAnalytics;
                    var5 = var4.conversionFailureReason;
                    var13['conversionFailureReason'] = var5;
case 208:
                    var5 = var6.uploadAnalytics;
                    var13 = var5.timing;
                    var5 = var4.compressTimeMs;
                    var13['compressTimeMs'] = var5;
case 109:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 23;
                    var5 = var15[var5];
                    var5 = var13.bind(var3)(var5);
                    var13 = var5.default;
                    var5 = var13.getUploadPayload;
                    var5 = var5.bind(var13)(var6);
                    SaveGenerator(address=496);
case 209:
                    return var5;
case 210:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(var13) { _fun0022_ip = 211; continue _fun0022 }
case 212:
                    _closure4_slot2 = var5;
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 24;
                    var13 = var17[var13];
                    var17 = var15.bind(var3)(var13);
                    var15 = var17.getUploadTarget;
                    var13 = var6.item;
                    var13 = var13.target;
                    var20 = var15.bind(var17)(var13);
                    _closure4_slot3 = var20;
                    var13 = var5.filename;
                    var15 = null;
                    if(!(var15 != var13)) { _fun0022_ip = 213; continue _fun0022 }
case 214:
                    var17 = var5.filename;
                    var13 = '';
                    if(!(var13 !== var17)) { _fun0022_ip = 213; continue _fun0022 }
case 215:
                    var13 = var6.currentSize;
                    var13 = var6.currentSize;
                    var19 = 0;
                    if(!(var19 === var13)) { _fun0022_ip = 216; continue _fun0022 }
case 217:
                    var17 = var6.handleError;
                    var13 = _closure1_slot16;
                    var13 = var13.ENTITY_EMPTY;
                    var13 = var17.bind(var6)(var13);
                    _fun0022_ip = 188; continue _fun0022;
case 216:
                    var13 = var6.currentSize;
                    var18 = var15 != var13;
                    var17 = 0;
                    if(!var18) { _fun0022_ip = 218; continue _fun0022 }
case 219:
                    var17 = var13;
case 218:
                    var18 = var20.getMaxFileSize;
                    var13 = var6.channelId;
                    var13 = var18.bind(var20)(var13);
                    if(!(!(var17 > var13))) { _fun0022_ip = 220; continue _fun0022 }
case 221:
                    var18 = _closure1_slot13;
                    var17 = var18.get;
                    var13 = 'upload_fail_50';
                    var13 = var17.bind(var18)(var13);
                    if(!var13) { _fun0022_ip = 222; continue _fun0022 }
case 223:
                    var17 = var8.Math;
                    var13 = var17.random;
                    var17 = var13.bind(var17)();
                    var13 = 0.5;
                    if(!(!(var17 < var13))) { _fun0022_ip = 224; continue _fun0022 }
case 222: // try_start_0
                    var18 = _closure1_slot18;
                    var17 = var18.log;
                    var21 = var6.id;
                    var13 = var8.HermesInternal;
                    var20 = var13.concat;
                    var13 = 'Requesting upload url for ';
                    var13 = var20.bind(var13)(var21);
                    var13 = var17.bind(var18)(var13);
                    var18 = var6.trackTime;
                    var17 = _closure1_slot6;
                    var13 = function* () {
                        var1 = function* anon_0_() {
                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0023_ip = 39; continue _fun0023 }
case 225:
                                var4 = _closure4_slot3;
                                var3 = var4.getCreateAttachmentURL;
                                var6 = _closure4_slot1;
                                var2 = var6.channelId;
                                var5 = var3.bind(var4)(var2);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 15;
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
                                var2[4] = var6;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=139);
case 226:
                                return var2;
case 227:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0023_ip = 36; continue _fun0023 }
case 48:
                                return var2;
case 36:
                                return var2;
case 39:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var17 = var17.bind(var3)(var13);
                    var13 = 'getUploadUrlTimeMs';
                    var13 = var18.bind(var6)(var13, var17);
                    SaveGenerator(address=806);
case 228:
                    return var13;
case 229:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=16);
                    if(var17) { _fun0022_ip = 230; continue _fun0022 }
case 231:
                    var18 = var6.setResponseUrl;
                    var17 = var13.body;
                    var17 = var17.attachments;
                    var17 = var17[var19];
                    var17 = var17.upload_url;
                    var17 = var18.bind(var6)(var17);
                    var18 = var6.setUploadedFilename;
                    var17 = var13.body;
                    var17 = var17.attachments;
                    var17 = var17[var19];
                    var17 = var17.upload_filename;
                    var17 = var18.bind(var6)(var17);
case 232: // try_start_1 // try_end0
                    var19 = var6.trackTime;
                    var18 = _closure1_slot6;
                    var17 = function* () {
                        var1 = function* anon_0_() {
                            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0024_ip = 233; continue _fun0024 }
case 133:
                                var3 = _closure4_slot1;
                                var2 = var3.uploadFileToCloud;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=30);
case 79:
                                return var2;
case 234:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0024_ip = 30; continue _fun0024 }
case 27:
                                return var2;
case 30:
                                return var2;
case 233:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var18 = var18.bind(var3)(var17);
                    var17 = 'uploadTimeMs';
                    var17 = var19.bind(var6)(var17, var18);
                    SaveGenerator(address=915);
case 235:
                    return var17;
case 236:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=17);
                    if(var18) { _fun0022_ip = 237; continue _fun0022 }
case 238:
                    var19 = var6.trackUploadFinished;
                    var18 = _closure1_slot21;
                    var18 = var18.COMPLETED;
                    var18 = var19.bind(var6)(var18);
                    var19 = var6.handleComplete;
                    var18 = var6.id;
                    var18 = var19.bind(var6)(var18);
case 239: // try_end1
                    _fun0022_ip = 188; continue _fun0022;
case 237:
                    return var17;
case 240: // catch_target1
                    CatchBlockStart(arg_register=15);
                    var17 = var6.isCancelled;
                    var17 = var17.bind(var6)();
                    if(var17) { _fun0022_ip = 241; continue _fun0022 }
case 242:
                    var20 = _closure1_slot18;
                    var19 = var20.info;
                    var18 = var16;
                    var24 = var18.status;
                    var23 = var6.id;
                    var17 = var8.HermesInternal;
                    var22 = var17.concat;
                    var21 = 'Error: status ';
                    var17 = ' for ';
                    var17 = var22.bind(var21)(var24, var17, var23);
                    var17 = var19.bind(var20)(var17);
                    var17 = var6.handleError;
                    var17 = var17.bind(var6)(var18);
                    _fun0022_ip = 188; continue _fun0022;
case 241:
                    var17 = var6.handleComplete;
                    var16 = var17.bind(var6)(var16);
                    _fun0022_ip = 188; continue _fun0022;
case 230:
                    return var13;
case 243: // catch_target0
                    CatchBlockStart(arg_register=12);
                    var11 = var13;
                    var16 = var15 == var13;
                    var13 = undefined;
                    if(var16) { _fun0022_ip = 244; continue _fun0022 }
case 245:
                    var16 = var11;
                    var16 = var16.body;
                    var14 = var16;
                    var16 = var15 == var16;
                    var13 = undefined;
                    if(var16) { _fun0022_ip = 244; continue _fun0022 }
case 246:
                    var13 = var14.code;
case 244:
                    var12 = var13;
                    if(!(var15 == var13)) { _fun0022_ip = 247; continue _fun0022 }
case 248:
                    var13 = var11;
                    var13 = var13.status;
                    _fun0022_ip = 249; continue _fun0022;
case 247:
                    var13 = var12;
case 249:
                    var10 = var13;
                    var12 = _closure1_slot16;
                    var12 = var12.ENTITY_TOO_LARGE;
                    if(!(var13 !== var12)) { _fun0022_ip = 250; continue _fun0022 }
case 251:
                    var14 = _closure1_slot18;
                    var13 = var14.error;
                    var12 = var10;
                    if(!(var15 == var12)) { _fun0022_ip = 252; continue _fun0022 }
case 253:
                    var16 = var8.JSON;
                    var15 = var16.stringify;
                    var12 = var11;
                    var12 = var12.body;
                    var18 = var15.bind(var16)(var12);
                    _fun0022_ip = 254; continue _fun0022;
case 252:
                    var18 = var10;
case 254:
                    var17 = var6.id;
                    var12 = var8.HermesInternal;
                    var16 = var12.concat;
                    var15 = 'Requesting upload url failed with code ';
                    var12 = ' for ';
                    var12 = var16.bind(var15)(var18, var12, var17);
                    var12 = var13.bind(var14)(var12);
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 26;
                    var12 = var14[var12];
                    var13 = var13.bind(var3)(var12);
                    var12 = var13.captureException;
                    var11 = var12.bind(var13)(var11);
case 250:
                    var11 = var6.handleError;
                    var10 = var11.bind(var6)(var10);
                    var10 = undefined;
                    return var10;
case 224:
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
                    _fun0022_ip = 188; continue _fun0022;
case 220:
                    var10 = var6.handleError;
                    var9 = _closure1_slot16;
                    var9 = var9.ENTITY_TOO_LARGE;
                    var9 = var10.bind(var6)(var9);
                    _fun0022_ip = 188; continue _fun0022;
case 213:
                    var11 = _closure1_slot18;
                    var10 = var11.error;
                    var9 = var8.JSON;
                    var8 = var9.stringify;
                    var9 = var8.bind(var9)(var5);
                    var8 = 'File does not have a filename.';
                    var8 = var10.bind(var11)(var8, var9);
                    var8 = var6.handleError;
                    var7 = _closure1_slot16;
                    var7 = var7.INVALID_FILE_ASSET;
                    var7 = var8.bind(var6)(var7);
                    var7 = undefined;
                    return var7;
case 211:
                    return var5;
case 199:
                    return var4;
case 193:
                    var5 = var6.handleComplete;
                    var4 = var6.id;
                    var4 = var5.bind(var6)(var4);
case 188:
                    return var3;
case 192:
                    return var2;
case 187:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot4 = var6;
        var6 = function upload() {
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
        var2[10] = var1;
        var1 = {};
        var6 = 'reactNativeCompressAndExtractData';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0025_ip = 255; continue _fun0025 }
case 12:
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
                    if(var5) { _fun0025_ip = 113; continue _fun0025 }
case 256:
                    var6 = var2.uploadAnalytics;
                    var5 = true;
                    var6['compressAndExtractDisabled'] = var5;
                    var7 = _closure1_slot18;
                    var6 = var7.log;
                    var5 = 'reactNativeCompressAndExtractData() disabled by upload target';
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 113:
                    var6 = var2.reactNativeFilePrepped;
                    var5 = true;
                    if(!(var5 !== var6)) { _fun0025_ip = 257; continue _fun0025 }
case 190:
                    var9 = _closure1_slot18;
                    var8 = var9.log;
                    var11 = var2.id;
                    var6 = global;
                    var7 = var6.HermesInternal;
                    var10 = var7.concat;
                    var7 = 'Starting compression/conversion for ';
                    var7 = var10.bind(var7)(var11);
                    var7 = var8.bind(var9)(var7);
                    var8 = var2.trackTime;
                    var7 = _closure1_slot6;
                    var4 = function* () {
                        var1 = function* anon_0_() {
                            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0026_ip = 258; continue _fun0026 }
case 133:
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
                                if(!var7) { _fun0026_ip = 259; continue _fun0026 }
case 125:
                                var2 = var6;
case 259:
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=75);
case 95:
                                return var2;
case 49:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0026_ip = 98; continue _fun0026 }
case 260:
                                return var2;
case 98:
                                return var2;
case 258:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var7 = var7.bind(var13)(var4);
                    var4 = 'compressTimeMs';
                    var4 = var8.bind(var2)(var4, var7);
                    SaveGenerator(address=210);
case 261:
                    return var4;
case 54:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0025_ip = 262; continue _fun0025 }
case 57:
                    var9 = null;
                    if(!(var9 != var4)) { _fun0025_ip = 263; continue _fun0025 }
case 264:
                    var7 = var4.file;
                    if(!(var9 != var7)) { _fun0025_ip = 263; continue _fun0025 }
case 59:
                    var7 = var4.uri;
                    var8 = var4.file;
                    var11 = var8.name;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var8 = 16;
                    var8 = var12[var8];
                    var12 = var10.bind(var13)(var8);
                    var10 = var12.isResolvedUpload;
                    var8 = var4.file;
                    var8 = var10.bind(var12)(var8);
                    if(!var8) { _fun0025_ip = 249; continue _fun0025 }
case 265:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.imageCompressionQuality;
                    var10['imageCompressionQuality'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.videoCompressionQuality;
                    var10['videoCompressionQuality'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.imageEncoderType;
                    var10['imageEncoderType'] = var8;
                    var8 = var4.file;
                    var8 = var8.isImage;
                    if(!var8) { _fun0025_ip = 266; continue _fun0025 }
case 119:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceWidth;
                    var10['sourceMediaWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceHeight;
                    var10['sourceMediaHeight'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.uploadedImageWidth;
                    var10['uploadedImageWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.uploadedImageHeight;
                    var10['uploadedImageHeight'] = var8;
case 266:
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    if(!(var13 !== var8)) { _fun0025_ip = 267; continue _fun0025 }
case 268:
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
case 267:
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    if(!(var13 !== var8)) { _fun0025_ip = 269; continue _fun0025 }
case 270:
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
                    if(!var12) { _fun0025_ip = 271; continue _fun0025 }
case 272:
                    var8 = 'hvc1';
case 271:
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
case 269:
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
case 249:
                    var2['filename'] = var11;
                    if(!(var9 != var11)) { _fun0025_ip = 273; continue _fun0025 }
case 274:
                    if(!(var9 != var7)) { _fun0025_ip = 273; continue _fun0025 }
case 275:
                    var8 = var4.file;
                    var8 = var8.type;
                    if(!(var9 != var8)) { _fun0025_ip = 273; continue _fun0025 }
case 276:
                    var10 = var11.split;
                    var8 = '.';
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.pop;
                    var10 = var8.bind(var10)();
                    var8 = var9 == var10;
                    var12 = undefined;
                    if(var8) { _fun0025_ip = 277; continue _fun0025 }
case 278:
                    var8 = var10.toLowerCase;
                    var12 = var8.bind(var10)();
case 277:
                    var14 = 'image/jpeg';
                    var10 = 'jpg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0025_ip = 279; continue _fun0025 }
case 280:
                    var10 = 'jpeg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0025_ip = 279; continue _fun0025 }
case 281:
                    var10 = var4.file;
                    var8 = var10.type;
case 279:
                    var10 = var2.uploadAnalytics;
                    var10['convertedMimeType'] = var8;
                    var21 = var4.fileSize;
                    if(!(var9 == var21)) { _fun0025_ip = 282; continue _fun0025 }
case 283:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 28;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.getFileData;
                    var10 = var10.bind(var12)(var7);
                    SaveGenerator(address=1314);
case 284:
                    return var10;
case 285:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0025_ip = 286; continue _fun0025 }
case 287:
                    var21 = var10.size;
                    _fun0025_ip = 282; continue _fun0025;
case 286:
                    return var10;
case 282:
                    var2['postCompressionSize'] = var21;
                    var2['currentSize'] = var21;
                    if(!(var9 != var21)) { _fun0025_ip = 288; continue _fun0025 }
case 289:
                    var12 = _closure1_slot18;
                    var10 = var12.log;
                    var26 = var2.mimeType;
                    var22 = var2.id;
                    var9 = var6.HermesInternal;
                    var18 = var9.concat;
                    var33 = 'Completed compression and conversion. Output size=';
                    var31 = ' bytes; filename=';
                    var29 = '; uri=';
                    var27 = '; originalMimeType=';
                    var25 = '; mimeType=';
                    var23 = ' for ';
                    var32 = var21;
                    var30 = var11;
                    var28 = var7;
                    var24 = var8;
                    var9 = var33[var18](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21);
                    var9 = var10.bind(var12)(var9);
                    var9 = {};
                    var9['uri'] = var7;
                    var9['filename'] = var11;
                    var9['mimeType'] = var8;
                    var8 = {};
                    var31 = var2.item;
                    var32 = var8;
                    var10 = copyDataProperties(var32, var31);
                    var32 = var8;
                    var31 = var9;
                    var9 = copyDataProperties(var32, var31);
                    var2['item'] = var8;
                    var2['reactNativeFilePrepped'] = var5;
                    return var2;
case 288:
                    var10 = _closure1_slot18;
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
                    var32 = 'Size missing from file data';
                    var33 = var9;
                    var8 = new var33[var10](var32, var31);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
case 273:
                    var12 = _closure1_slot18;
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
                    var32 = var7.bind(var10)(var8);
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var33 = var8;
                    var7 = new var33[var9](var32, var31);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
case 263:
                    var8 = _closure1_slot18;
                    var7 = var8.error;
                    var10 = var2.id;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'Failed to get compressed file for ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    return var2;
case 262:
                    return var4;
case 257:
                    var4 = var2.uploadAnalytics;
                    var4['fileAlreadyPrepped'] = var5;
                    var5 = _closure1_slot18;
                    var4 = var5.log;
                    var7 = var2.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'reactNativeCompressAndExtractData() file already prepped - ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 255:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot3 = var6;
        var6 = function reactNativeCompressAndExtractData() {
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
        var2[11] = var1;
        var1 = {};
        var6 = 'handleError';
        var1['key'] = var6;
        var6 = function handleError(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = var4;
                var6 = var2.setStatus;
                var3 = _closure1_slot21;
                var5 = var3.ERROR;
                var5 = var6.bind(var2)(var5);
                var2['error'] = var4;
                var4 = var2.trackUploadFinished;
                var3 = var3.ERROR;
                var3 = var4.bind(var2)(var3);
case 96: // try_start_0
                var4 = var2.emit;
                var3 = var1;
                var1 = 'error';
                var1 = var4.bind(var2)(var1, var3);
case 49: // try_end0
                _fun0027_ip = 290; continue _fun0027;
case 256: // catch_target0
                CatchBlockStart(arg_register=0);
case 290:
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'handleComplete';
        var1['key'] = var6;
        var6 = function handleComplete(arg1) {
            var2 = this;
            var4 = var2.setStatus;
            var3 = _closure1_slot21;
            var3 = var3.COMPLETED;
            var3 = var4.bind(var2)(var3);
            var4 = _closure1_slot18;
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
        var2[13] = var1;
        var1 = {};
        var6 = '_cancel';
        var1['key'] = var6;
        var6 = function _cancel(arg1, arg2) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var6 = _closure1_slot18;
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
                var1 = _closure1_slot21;
                var1 = var1.COMPLETED;
                if(!(var4 === var1)) { _fun0028_ip = 178; continue _fun0028 }
case 260:
                var1 = var2.delete;
                var1 = var1.bind(var2)();
case 178:
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
        var2[14] = var1;
        var1 = {};
        var6 = 'cancel';
        var1['key'] = var6;
        var6 = function cancel() {
            var4 = this;
            var3 = var4._cancel;
            var1 = _closure1_slot21;
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
        var2[15] = var1;
        var1 = {};
        var6 = 'removeFromMsgDraft';
        var1['key'] = var6;
        var6 = function removeFromMsgDraft() {
            var4 = this;
            var3 = var4._cancel;
            var1 = _closure1_slot21;
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
        var2[16] = var1;
        var1 = {};
        var6 = 'isCancelled';
        var1['key'] = var6;
        var6 = function isCancelled() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = this;
                var4 = var3.status;
                var1 = _closure1_slot21;
                var1 = var1.CANCELED;
                var1 = var4 === var1;
                if(var1) { _fun0029_ip = 47; continue _fun0029 }
case 79:
                var3 = var3.status;
                var2 = _closure1_slot21;
                var2 = var2.REMOVED_FROM_MSG_DRAFT;
                var1 = var3 === var2;
case 47:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'resetState';
        var1['key'] = var6;
        var6 = function resetState() {
            var6 = this;
            var2 = _closure1_slot21;
            var2 = var2.NOT_STARTED;
            var6['status'] = var2;
            var3 = undefined;
            var6['uploadedFilename'] = var3;
            var6['responseUrl'] = var3;
            var6['responseUrlSetAt'] = var3;
            var6['error'] = var3;
            var6['startTime'] = var3;
            var1 = _closure1_slot22;
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
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var5 = arg1;
                    var7 = arg3;
                    var _closure4_slot0 = var7;
                    var6 = _closure1_slot7;
                    var4 = _closure1_slot11;
                    var1 = 1;
                    var3 = 3;
                    var8 = var1 & var3;
                    var1 = var5;
                    if(!var8) { _fun0030_ip = 291; continue _fun0030 }
case 30:
                    var1 = var5.prototype;
case 291:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'resetState';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0030_ip = 185; continue _fun0030 }
case 290:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0030_ip = 185; continue _fun0030 }
case 292:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
case 185:
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
        var2[18] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0031_ip = 293; continue _fun0031 }
case 77:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = var5.uploadedFilename;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0031_ip = 191; continue _fun0031 }
case 108:
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
case 292: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.HTTP;
                    var4 = var5.del;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=133);
case 294:
                    return var3;
case 295:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0031_ip = 102; continue _fun0031 }
case 227: // try_end0
                    _fun0031_ip = 191; continue _fun0031;
case 102:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=2);
case 191:
                    return var2;
case 293:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot2 = var6;
        var6 = function _delete() {
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
        var2[19] = var1;
        var1 = {};
        var6 = 'setResponseUrl';
        var1['key'] = var6;
        var6 = function setResponseUrl(arg1) {
            var2 = this;
            var1 = arg1;
            var2['responseUrl'] = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['responseUrlSetAt'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'ensureFreshResponseUrl';
        var1['key'] = var6;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                    StartGenerator();
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0032_ip = 296; continue _fun0032 }
case 77:
                    var4 = _closure2_slot11;
                    var3 = var4.isResponseUrlStale;
                    var2 = var7.responseUrlSetAt;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0032_ip = 65; continue _fun0032 }
case 297:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 23;
                    var2 = var5[var2];
                    var10 = undefined;
                    var2 = var3.bind(var10)(var2);
                    var3 = var2.default;
                    var2 = var3.getUploadPayload;
                    var2 = var2.bind(var3)(var7);
                    SaveGenerator(address=90);
case 15:
                    return var2;
case 178:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0032_ip = 298; continue _fun0032 }
case 299:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var9 = var5.bind(var10)(var3);
                    var8 = var9.getUploadTarget;
                    var3 = var7.item;
                    var3 = var3.target;
                    var9 = var8.bind(var9)(var3);
                    var8 = var9.getCreateAttachmentURL;
                    var3 = var7.channelId;
                    var8 = var8.bind(var9)(var3);
                    var3 = 15;
                    var3 = var6[var3];
                    var3 = var5.bind(var10)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var3['url'] = var8;
                    var8 = {};
                    var9 = new Array(1);
                    var9[0] = var2;
                    var8['files'] = var9;
                    var3['body'] = var8;
                    var8 = var7.createAttachmentUrlRetryOpts;
                    var12 = var8.bind(var7)();
                    var13 = var3;
                    var8 = copyDataProperties(var13, var12);
                    var9 = false;
                    var8 = 'rejectWithError';
                    var3[7] = var9;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=242);
case 300:
                    return var3;
case 301:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0032_ip = 87; continue _fun0032 }
case 302:
                    var5 = var3.ok;
                    if(!var5) { _fun0032_ip = 303; continue _fun0032 }
case 82:
                    var8 = var3.body;
                    var6 = null;
                    var9 = var6 == var8;
                    var5 = undefined;
                    if(var9) { _fun0032_ip = 304; continue _fun0032 }
case 305:
                    var9 = var8.attachments;
                    var8 = var6 == var9;
                    var5 = undefined;
                    if(var8) { _fun0032_ip = 304; continue _fun0032 }
case 306:
                    var8 = 0;
                    var5 = var9[var8];
case 304:
                    if(!(var6 != var5)) { _fun0032_ip = 303; continue _fun0032 }
case 307:
                    var6 = var7.setResponseUrl;
                    var5 = var3.body;
                    var5 = var5.attachments;
                    var8 = 0;
                    var5 = var5[var8];
                    var5 = var5.upload_url;
                    var5 = var6.bind(var7)(var5);
                    var6 = var7.setUploadedFilename;
                    var5 = var3.body;
                    var5 = var5.attachments;
                    var5 = var5[var8];
                    var5 = var5.upload_filename;
                    var5 = var6.bind(var7)(var5);
case 65:
                    var5 = undefined;
                    return var5;
case 303:
                    var7 = _closure1_slot20;
                    var6 = {};
                    var6['response'] = var3;
                    var4 = var7.prototype;
                    var5 = Object.create(var4, {constructor: {value: var7}});
                    var13 = 'upload';
                    var14 = var5;
                    var12 = var6;
                    var4 = new var14[var7](var13, var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 87:
                    return var3;
case 298:
                    return var2;
case 296:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var9.bind(var4)(var6);
        var _closure2_slot1 = var6;
        var6 = function ensureFreshResponseUrl() {
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
        var2[22] = var1;
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
        var2[23] = var1;
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
        var2[24] = var1;
        var1 = {};
        var6 = 'trackUploadStart';
        var1['key'] = var6;
        var6 = function trackUploadStart() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var7 = this;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot17;
                var3 = var2.ATTACHMENT_UPLOAD_STARTED;
                var2 = {};
                var8 = var7.currentSize;
                var2['file_size'] = var8;
                var9 = var7.mimeType;
                var8 = null;
                var10 = var8 != var9;
                var8 = 'unknown';
                if(!var10) { _fun0033_ip = 308; continue _fun0033 }
case 49:
                var8 = var9;
case 308:
                var2['mime_type'] = var8;
                var8 = _closure1_slot14;
                var9 = var8.videoUploadQuality;
                var2['video_upload_quality'] = var9;
                var9 = var8.dataSavingMode;
                var2['data_saving_mode'] = var9;
                var8 = var8.dataSavingMode;
                var2['low_quality_image_mode'] = var8;
                var7 = var7.channelId;
                var2['channel_id'] = var7;
                var7 = _closure1_slot15;
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
        var2[25] = var1;
        var1 = {};
        var6 = 'trackUploadFinished';
        var1['key'] = var6;
        var6 = function trackUploadFinished(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var7 = this;
                var1 = var7.startTime;
                var9 = null;
                var1 = var9 != var1;
                var8 = -1;
                if(!var1) { _fun0034_ip = 2; continue _fun0034 }
case 309:
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = var7.startTime;
                var8 = var2 - var1;
case 2:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot17;
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
                if(!var12) { _fun0034_ip = 189; continue _fun0034 }
case 101:
                var10 = var11;
case 189:
                var2['mime_type'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.numUploadAttempts;
                var12 = var9 != var11;
                var10 = 1;
                if(!var12) { _fun0034_ip = 310; continue _fun0034 }
case 103:
                var10 = var11;
case 310:
                var2['num_upload_attempts'] = var10;
                var10 = var7.error;
                var2['error_code'] = var10;
                var10 = _closure1_slot14;
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
                if(!var12) { _fun0034_ip = 147; continue _fun0034 }
case 311:
                var10 = var11;
case 147:
                var2['converted_mime_type'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.imageCompressionQuality;
                var12 = var9 != var11;
                var10 = 0;
                if(!var12) { _fun0034_ip = 312; continue _fun0034 }
case 313:
                var10 = var11;
case 312:
                var2['image_compression_quality'] = var10;
                var10 = var7.uploadAnalytics;
                var11 = var10.videoCompressionQuality;
                var12 = var9 != var11;
                var10 = var8;
                if(!var12) { _fun0034_ip = 206; continue _fun0034 }
case 314:
                var10 = var11;
case 206:
                var2['video_compression_quality'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.imageEncoderType;
                var11 = var9 != var10;
                if(!var11) { _fun0034_ip = 315; continue _fun0034 }
case 316:
                var8 = var10;
case 315:
                var2['image_encoder_type'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.convertedMimeType;
                var8 = var9 != var8;
                if(!var8) { _fun0034_ip = 317; continue _fun0034 }
case 105:
                var10 = var7.mimeType;
                var9 = var7.uploadAnalytics;
                var9 = var9.convertedMimeType;
                var8 = var10 !== var9;
case 317:
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
                var8 = var8.uploadedImageWidth;
                var2['uploaded_image_width'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.uploadedImageHeight;
                var2['uploaded_image_height'] = var8;
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
                if(!var8) { _fun0034_ip = 318; continue _fun0034 }
case 319:
                var7 = 'libdiscore';
case 318:
                var2['upload_http_client'] = var7;
                var7 = _closure1_slot15;
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
        var6 = {};
        var1 = 'fromJson';
        var6['key'] = var1;
        var1 = function fromJson(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = arg1;
                var7 = _closure2_slot11;
                var10 = var5.item;
                var9 = var5.channelId;
                var8 = var5.reactNativeFileIndex;
                var3 = var7.prototype;
                var3 = Object.create(var3, {constructor: {value: var7}});
                var11 = var3;
                var1 = new var11[var7](var10, var9, var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var4 = var3.bind(var4)(var5);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        var4 = _closure1_slot4;
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
                        if(var2) { _fun0036_ip = 320; continue _fun0036 }
case 321:
                        var2 = _closure3_slot0;
                        var2[var4] = var3;
case 320:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var4 = var1.status;
                var3 = _closure1_slot21;
                var3 = var3.COMPLETED;
                if(!(var4 !== var3)) { _fun0035_ip = 100; continue _fun0035 }
case 322:
                var2 = _closure1_slot21;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
case 100:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(3);
        var1[0] = var6;
        var6 = {};
        var8 = 'tryConvertToWebP';
        var6['key'] = var8;
        var8 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0037_ip = 323; continue _fun0037 }
case 225:
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
                    var2 = 30;
                    var2 = var14[var2];
                    var14 = var12.bind(var9)(var2);
                    var12 = var14.getImageAttachmentMezzanineV2Config;
                    var2 = {};
                    var18 = 'CloudUpload.maybeConvertToWebP';
                    var2['location'] = var18;
                    var12 = var12.bind(var14)(var2);
                    var2 = var12.enabled;
                    if(var2) { _fun0037_ip = 13; continue _fun0037 }
case 324:
                    var18 = _closure1_slot18;
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
                    if(!(var2 != var14)) { _fun0037_ip = 325; continue _fun0037 }
case 326:
                    var14 = var12.maxFileSizeBytes;
                    if(!(var2 != var14)) { _fun0037_ip = 327; continue _fun0037 }
case 328:
                    var14 = var17;
                    var14 = var14.size;
                    var12 = var12.maxFileSizeBytes;
                    if(!(!(var14 > var12))) { _fun0037_ip = 329; continue _fun0037 }
case 327:
                    var12 = var15;
                    var12 = var12.bind(var9)();
                    if(var12) { _fun0037_ip = 330; continue _fun0037 }
case 19:
                    var14 = global;
                    var18 = var14.performance;
                    var12 = var18.now;
                    var7 = var12.bind(var18)();
                    var12 = {};
                    var18 = 0;
                    var12['compressTimeMs'] = var18;
                    var5 = var12;
case 331: // try_start_0
                    var18 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var19 = 31;
                    var12 = var12[var19];
                    var20 = var18.bind(var9)(var12);
                    var18 = var20.maybeConvertToWebP;
                    var12 = var17;
                    var12 = var18.bind(var20)(var12);
                    SaveGenerator(address=267);
case 332:
                    return var12;
case 73:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=17);
                    if(var18) { _fun0037_ip = 333; continue _fun0037 }
case 305:
                    var11 = var12;
                    var15 = var15.bind(var9)();
                    if(var15) { _fun0037_ip = 334; continue _fun0037 }
case 200:
                    var15 = var11;
                    var15 = var15.success;
                    if(!var15) { _fun0037_ip = 335; continue _fun0037 }
case 307:
                    var15 = var11;
                    var15 = var15.convertedBlob;
                    if(!(var2 == var15)) { _fun0037_ip = 148; continue _fun0037 }
case 335:
                    var15 = var11;
                    var15 = var15.reason;
                    var13 = var15;
                    if(!(var2 == var15)) { _fun0037_ip = 146; continue _fun0037 }
case 336:
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var19];
                    var15 = var18.bind(var9)(var15);
                    var15 = var15.ConversionFailureReason;
                    var15 = var15.UNKNOWN_ERROR;
                    _fun0037_ip = 337; continue _fun0037;
case 146:
                    var15 = var13;
case 337:
                    var19 = _closure1_slot18;
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
                    _fun0037_ip = 219; continue _fun0037;
case 148:
                    var19 = _closure1_slot18;
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
                    if(!var17) { _fun0037_ip = 338; continue _fun0037 }
case 339:
                    var13 = var16;
case 338:
                    var15['hashTimeMs'] = var13;
case 219: // try_end0
                    _fun0037_ip = 340; continue _fun0037;
case 334:
                    return var2;
case 333:
                    return var12;
case 341: // catch_target0
                    CatchBlockStart(arg_register=15);
                    var15 = _closure1_slot18;
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
                    var12 = 31;
                    var12 = var16[var12];
                    var12 = var15.bind(var9)(var12);
                    var12 = var12.ConversionFailureReason;
                    var12 = var12.UNKNOWN_ERROR;
                    var13['conversionFailureReason'] = var12;
case 340:
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
                    if(var11) { _fun0037_ip = 342; continue _fun0037 }
case 343:
                    var9 = var10.compressTimeMs;
case 342:
                    var8 = var9;
                    if(!(var2 == var9)) { _fun0037_ip = 344; continue _fun0037 }
case 345:
                    _fun0037_ip = 346; continue _fun0037;
case 344:
                    var6 = var8;
case 346:
                    var7['compressTimeMs'] = var6;
                    return var5;
case 330:
                    return var2;
case 329:
                    var7 = _closure1_slot18;
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
case 325:
                    var5 = _closure1_slot18;
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
case 323:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var9.bind(var4)(var8);
        var _closure2_slot0 = var8;
        var8 = function tryConvertToWebP(arg1, arg2, arg3) {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'isResponseUrlStale';
        var6['key'] = var8;
        var7 = function isResponseUrlStale(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0038_ip = 347; continue _fun0038 }
case 348:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.Millis;
                var2 = var1.HOUR;
                var1 = 12;
                var2 = var1 * var2;
                var1 = global;
                var4 = var1.Date;
                var1 = var4.now;
                var1 = var1.bind(var4)();
                var1 = var1 - var3;
                var1 = var1 > var2;
                return var1;
case 347:
                var1 = true;
                return var1;
            }
        };
        var6['value'] = var7;
        var1[2] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 32;
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