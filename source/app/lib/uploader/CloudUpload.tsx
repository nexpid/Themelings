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
        var5 = function CloudUpload(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var8 = this;
                var1 = _closure1_slot6;
                var6 = _closure2_slot11;
                var5 = undefined;
                var1 = var1.bind(var5)(var8, var6);
                var2 = _closure1_slot20;
                var1 = new Array(2);
                var1[0] = var4;
                var9 = arg3;
                var1[1] = var9;
                var1 = var2.bind(var5)(var8, var6, var1);
                var _closure3_slot0 = var1;
                var2 = _closure1_slot18;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
                var6 = 0;
                var1['loaded'] = var6;
                var2 = false;
                var1['reactNativeFilePrepped'] = var2;
                var8 = _closure1_slot19;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var14 = var9;
                var8 = new var14[var8](var13);
                var8 = var8 instanceof Object ? var8 : var9;
                var1['uploadAnalytics'] = var8;
                var1['uploadAttempts'] = var6;
                var1['_aborted'] = var2;
                var7 = function(arg1) {
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
                var1['createResumeAwareProgressFn'] = var7;
                var7 = arg2;
                var1['channelId'] = var7;
                var7 = var4.file;
                var8 = null;
                var10 = var8 == var7;
                var9 = undefined;
                if(var10) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var9 = var7.size;
case 45:
                var10 = var8 != var9;
                var7 = 0;
                if(!var10) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var7 = var9;
case 47:
                var1['preCompressionSize'] = var7;
                var9 = var4.file;
                var10 = var8 == var9;
                var7 = undefined;
                if(var10) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var7 = var9.size;
case 49:
                var9 = var8 != var7;
                var6 = 0;
                if(!var9) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var6 = var7;
case 51:
                var1['currentSize'] = var6;
                var6 = arg4;
                var1['reactNativeFileIndex'] = var6;
                var6 = global;
                var6 = var6.AbortController;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var14 = var7;
                var6 = new var14[var6](var13);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['_abortController'] = var6;
                var6 = var1.origin;
                if(!(var8 != var6)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                var7 = var1.uploadAnalytics;
                var6 = var1.origin;
                var9 = 'string';
                var6 = typeof var6;
                if(!(var9 !== var6)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var9 = var6.UploadOrigin;
                var6 = var1.origin;
                var6 = var9[var6];
                _fun0007_ip = 57; continue _fun0007;
case 55:
                var6 = var1.origin;
case 57:
                var7['origin'] = var6;
case 53:
                var7 = var4.platform;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var6 = var6.UploadPlatform;
                var6 = var6.WEB;
                var6 = var7 === var6;
                if(!var6) { _fun0007_ip = 58; continue _fun0007 }
case 59:
                var7 = var4.compressionMetadata;
                var6 = var8 != var7;
case 58:
                if(!var6) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var6 = var4.compressionMetadata;
                var6 = var6.preCompressionSize;
                var1['preCompressionSize'] = var6;
                var6 = var1.uploadAnalytics;
                var7 = var6.timing;
                var6 = var4.compressionMetadata;
                var6 = var6.compressTimeMs;
                var7['compressTimeMs'] = var6;
                var7 = var1.uploadAnalytics;
                var6 = var4.compressionMetadata;
                var6 = var6.convertedMimeType;
                var7['convertedMimeType'] = var6;
                var7 = var1.uploadAnalytics;
                var6 = var4.compressionMetadata;
                var6 = var6.conversionFailureReason;
                var7['conversionFailureReason'] = var6;
                var6 = var1.uploadAnalytics;
                var7 = var6.timing;
                var6 = var4.compressionMetadata;
                var6 = var6.hashTimeMs;
                var7['hashTimeMs'] = var6;
                var4 = var4.compressionMetadata;
                var4 = var4.originalContentType;
                var1['mimeType'] = var4;
case 60:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 16;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.DefaultHttpClient;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['_uploadHttpClient'] = var3;
                var1['_libdiscoreEnabled'] = var2;
                var1['_resumptionEnabled'] = var2;
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
case 0:
                var3 = arg1;
                var2 = var3.match;
                var1 = /^bytes=(\d+)-(\d+)(?:\\/\d+)?$/;
                var7 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
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
case 62:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(29);
        var2[0] = var6;
        var6 = {};
        var8 = 'retryOpts';
        var6['key'] = var8;
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
                if(!(var2 !== var1)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
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
                _fun0009_ip = 66; continue _fun0009;
case 64:
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
case 66:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[1] = var6;
        var6 = {};
        var8 = 'createAttachmentUrlRetryOpts';
        var6['key'] = var8;
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
case 65:
                var1 = var2.retryOpts;
                var1 = var1.bind(var2)();
                _fun0010_ip = 67; continue _fun0010;
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
case 67:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[2] = var6;
        var6 = {};
        var8 = 'supportsResume';
        var6['key'] = var8;
        var8 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2._libdiscoreEnabled;
                if(var1) { _fun0011_ip = 68; continue _fun0011 }
case 69:
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
case 68:
                if(!var1) { _fun0011_ip = 70; continue _fun0011 }
case 6:
                var1 = var2._resumptionEnabled;
case 70:
                return var1;
            }
        };
        var6['value'] = var8;
        var2[3] = var6;
        var6 = {};
        var8 = 'uploadFileToCloud';
        var6['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                    var2 = var6.responseUrl;
                    var8 = null;
                    if(!(var8 != var2)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
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
                    if(!(var12 !== var2)) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                    var2 = var6.item;
                    var2 = var2.file;
                    var13 = var2.name;
                    var2 = var11.HermesInternal;
                    var12 = var2.concat;
                    var2 = 'filename=';
                    var2 = var12.bind(var2)(var13);
                    _fun0012_ip = 77; continue _fun0012;
case 75:
                    var12 = var6.item;
                    var15 = var12.filename;
                    var12 = var6.item;
                    var14 = var12.uri;
                    var11 = var11.HermesInternal;
                    var13 = var11.concat;
                    var12 = 'filename=';
                    var11 = ', uri=';
                    var2 = var13.bind(var12)(var15, var11, var14);
case 77:
                    var2 = var5.bind(var10)(var4, var2);
                    var2 = var6.item;
                    var4 = var2.platform;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var9)(var2);
                    var2 = var2.UploadPlatform;
                    var2 = var2.REACT_NATIVE;
                    if(!(var4 !== var2)) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var2 = var6.item;
                    var5 = var2.file;
                    var4 = 'application/octet-stream';
                    _fun0012_ip = 80; continue _fun0012;
case 78:
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
                    if(!var8) { _fun0012_ip = 81; continue _fun0012 }
case 55:
                    var10 = var7.type;
                    var8 = 'application/json';
                    var2 = var11;
                    if(!(var8 !== var10)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                    var2 = var7.type;
case 81:
                    var4 = var2;
                    var5 = var7;
case 80:
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
                    if(var7) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                    var7 = {};
                    var7['Content-Type'] = var4;
                    var8 = var6.contentHash;
                    if(!(var9 !== var8)) { _fun0012_ip = 85; continue _fun0012 }
case 86:
                    var8 = var6.contentHash;
                    var7['Content-MD5'] = var8;
case 85:
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
case 83:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 16;
                    var7 = var7[var10];
                    var11 = var8.bind(var9)(var7);
                    var8 = var11.canUploadNatively;
                    var7 = var6.item;
                    var7 = var8.bind(var11)(var7);
                    if(!var7) { _fun0012_ip = 87; continue _fun0012 }
case 88:
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
case 87:
                    var2 = var2.enableResumption;
                    var6['_resumptionEnabled'] = var2;
                    var3 = var6.uploadFileWithResumption;
                    var2 = var6.responseUrl;
                    var2 = var3.bind(var6)(var2, var5, var4);
                    SaveGenerator(address=760);
case 89:
                    return var2;
case 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 91; continue _fun0012 }
case 92:
                    return var2;
case 91:
                    return var2;
case 73:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var18 = '_uploadFileToCloud - responseUrl is not set';
                    var19 = var3;
                    var2 = new var19[var4](var18, var17);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 71:
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
        var2[4] = var6;
        var6 = {};
        var7 = 'getResumePosition';
        var6['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 93; continue _fun0013 }
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
                            if(!(var1 !== var2)) { _fun0014_ip = 94; continue _fun0014 }
case 12:
                            var2 = var3.status;
                            var1 = 201;
                            if(!(var1 !== var2)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
                            var4 = _closure1_slot17;
                            var2 = var4.rejectionHandler;
                            var1 = 'status_check';
                            var2 = var2.bind(var4)(var1);
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            _fun0014_ip = 70; continue _fun0014;
case 94:
                            var2 = _closure4_slot0;
                            var1 = var2.currentSize;
case 70:
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
                            if(!var4) { _fun0015_ip = 96; continue _fun0015 }
case 97:
                            var5 = var1.status;
                            var4 = 308;
                            if(!(var4 !== var5)) { _fun0015_ip = 98; continue _fun0015 }
case 96:
                            var5 = _closure1_slot17;
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
                    SaveGenerator(address=186);
case 103:
                    return var2;
case 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 105; continue _fun0013 }
case 37:
                    return var2;
case 105:
                    return var2;
case 93:
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
        var2[5] = var6;
        var6 = {};
        var7 = 'startOrResumeUpload';
        var6['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var9 = arguments[1];
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 106; continue _fun0016 }
case 107:
                    var8 = undefined;
                    if(!(var9 === var8)) { _fun0016_ip = 95; continue _fun0016 }
case 108:
                    var9 = 0;
case 95:
                    SaveGenerator(address=31);
case 109:
                    return var8;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 110; continue _fun0016 }
case 111:
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
                    if(!(var9 > var5)) { _fun0016_ip = 112; continue _fun0016 }
case 34:
                    var10 = var3.uploadAnalytics;
                    var5 = var10.uploadResumptionCount;
                    var5 = var5 + 1;
                    var10['uploadResumptionCount'] = var5;
                    var5 = {};
                    var10 = var7.headers;
                    var11 = null;
                    if(!(var11 == var10)) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                    var10 = {};
case 113:
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
                    var8 = _closure1_slot17;
                    var3 = var8.rejectionHandler;
                    var7 = 'upload';
                    var3 = var3.bind(var8)(var7);
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=334);
case 115:
                    return var3;
case 116:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 117; continue _fun0016 }
case 118:
                    var6 = var3.status;
                    var5 = 200;
                    if(!(var5 !== var6)) { _fun0016_ip = 119; continue _fun0016 }
case 57:
                    var6 = var3.status;
                    var5 = 201;
                    if(!(var5 === var6)) { _fun0016_ip = 81; continue _fun0016 }
case 119:
                    return var3;
case 81:
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
case 117:
                    return var3;
case 110:
                    return var2;
case 106:
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
        var2[6] = var6;
        var6 = {};
        var7 = 'uploadFileWithResumption';
        var6['key'] = var7;
        var7 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0017_ip = 120; continue _fun0017 }
case 121:
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
                                if(var4) { _fun0018_ip = 122; continue _fun0018 }
case 69:
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
case 94: // try_start_0
                                var5 = _closure4_slot1;
                                var8 = var5.uploadAttempts;
                                var5 = 1;
                                if(!(var8 > var5)) { _fun0018_ip = 123; continue _fun0018 }
case 124:
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
case 125:
                                            var4 = _closure4_slot1;
                                            var3 = var4.getResumePosition;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            SaveGenerator(address=35);
case 126:
                                            return var2;
case 127:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            if(var3) { _fun0019_ip = 128; continue _fun0019 }
case 97:
                                            return var2;
case 128:
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
case 129:
                                return var5;
case 130:
                                ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 131; continue _fun0018 }
case 132:
                                var7 = var5;
                                var9 = _closure4_slot1;
                                var8 = var9.uploadAnalytics;
                                var8['uploadResumptionPosition'] = var5;
                                var8 = var9.supportsResume;
                                var9 = var8.bind(var9)();
                                var8 = 0;
                                if(!var9) { _fun0018_ip = 133; continue _fun0018 }
case 134:
                                var8 = var7;
case 133:
                                _closure4_slot4 = var8;
                                var7 = _closure4_slot1;
                                var7['loaded'] = var8;
case 123:
                                var8 = {};
                                var11 = _closure4_slot1;
                                var10 = var11.startOrResumeUpload;
                                var9 = _closure4_slot3;
                                var7 = _closure4_slot4;
                                var7 = var10.bind(var11)(var9, var7);
                                SaveGenerator(address=211);
case 50:
                                return var7;
case 135:
                                ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                                if(var9) { _fun0018_ip = 136; continue _fun0018 }
case 112:
                                var8['v'] = var7;
case 137: // try_end0
                                return var8;
case 136:
                                return var7;
case 131:
                                return var5;
case 138: // catch_target0
                                CatchBlockStart(arg_register=7);
                                var2 = var8;
                                var5 = _closure1_slot17;
                                var5 = var8 instanceof var5;
                                if(!var5) { _fun0018_ip = 67; continue _fun0018 }
case 139:
                                var8 = var2;
                                var5 = var8.canRetry;
                                var5 = var5.bind(var8)();
                                if(var5) { _fun0018_ip = 115; continue _fun0018 }
case 67:
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
case 115:
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
case 140:
                                return var2;
case 141:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0018_ip = 142; continue _fun0018 }
case 143:
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
case 144:
                                return var3;
case 145:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                                return var4;
case 146:
                                return var3;
case 142:
                                return var2;
case 122:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var3.uploadAttempts;
                    if(!(var2 <= var11)) { _fun0017_ip = 148; continue _fun0017 }
case 149:
                    var2 = var3._aborted;
                    var9 = global;
                    var8 = 'iterator is not an object';
                    var7 = 'iterator.throw() did not return an object';
                    var6 = 'throw';
                    var5 = 'iterator.next() did not return an object';
                    if(var2) { _fun0017_ip = 148; continue _fun0017 }
case 150:
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
case 151:
                    var4 = var17;
                    var4 = var18.bind(var13)(var4);
                    var21 = var4;
                    var20 = var5;
                    var14 = ensureObject(var21, var20);
                    var2 = var4;
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 152; continue _fun0017 }
case 153: // try_start_0
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 154:
                    return var4;
case 115: // try_end0 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=13);
                    var21 = var13;
                    var20 = var6;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                    var4 = var4.bind(var13)(var14);
                    var21 = var4;
                    var20 = var7;
                    var14 = ensureObject(var21, var20);
                    var14 = var4.done;
                    if(var14) { _fun0017_ip = 85; continue _fun0017 }
case 157:
                    var14 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 158:
                    return var4;
case 159: // try_start_1
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=15);
                    var17 = var14;
                    var15 = var16;
                    if(!var15) { _fun0017_ip = 151; continue _fun0017 }
case 160:
                    var17 = var14;
case 161: // try_end1
                    var20 = 'return';
                    var21 = var13;
                    var19 = getMethod(var21, var20);
                    if(!(var19 !== var12)) { _fun0017_ip = 162; continue _fun0017 }
case 110:
                    var15 = var17;
                    var15 = var19.bind(var13)(var15);
                    var20 = 'iterator.return() did not return an object';
                    var21 = var15;
                    var19 = ensureObject(var21, var20);
                    var19 = var15.done;
                    if(var19) { _fun0017_ip = 163; continue _fun0017 }
case 164:
                    var19 = generatorSetDelegated();
                    SaveGenerator(address=379);
case 165:
                    return var15;
case 163:
                    var15 = var15.value;
                    return var15;
case 162:
                    return var14;
case 85:
                    var2 = var4;
                    _fun0017_ip = 152; continue _fun0017;
case 155:
                    var20 = 'return';
                    var21 = var13;
                    var4 = getMethod(var21, var20);
                    if(!(var4 !== var12)) { _fun0017_ip = 166; continue _fun0017 }
case 167:
                    var21 = var4.bind(var13)();
                    var20 = 'iterator.return() did not return an object';
                    var4 = ensureObject(var21, var20);
case 166:
                    var21 = 'yield* delegate must have a .throw() method';
                    var4 = throwTypeError(var21);
                    throw var12;
case 152:
                    var2 = var2.value;
                    if(var2) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                    var4 = var3.uploadAttempts;
                    if(!(var4 <= var11)) { _fun0017_ip = 148; continue _fun0017 }
case 170:
                    var4 = var3._aborted;
                    if(var4) { _fun0017_ip = 148; continue _fun0017 }
case 171:
                    _fun0017_ip = 150; continue _fun0017;
case 168:
                    var2 = var2.v;
                    return var2;
case 148:
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
case 120:
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
        var2[7] = var6;
        var6 = {};
        var7 = 'getSize';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0020_ip = 129; continue _fun0020 }
case 125:
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
                    if(var5) { _fun0020_ip = 172; continue _fun0020 }
case 173:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getFileSize;
                    var2 = var4.bind(var5)(var6);
case 172:
                    SaveGenerator(address=94);
case 4:
                    return var2;
case 174:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0020_ip = 175; continue _fun0020 }
case 176:
                    var4 = var3 != var2;
                    var3 = 0;
                    if(!var4) { _fun0020_ip = 177; continue _fun0020 }
case 178:
                    var3 = var2;
case 177:
                    return var3;
case 175:
                    return var2;
case 129:
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
        var2[8] = var6;
        var6 = {};
        var7 = 'getHash';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var5 = arguments[0];
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 179; continue _fun0021 }
case 180:
                    var6 = undefined;
                    if(!(var5 === var6)) { _fun0021_ip = 181; continue _fun0021 }
case 28:
                    var5 = false;
case 181:
                    SaveGenerator(address=28);
case 182:
                    return var6;
case 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 149; continue _fun0021 }
case 63:
                    var3 = var4.item;
                    var8 = var3.uri;
                    var3 = var4.getSize;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=61);
case 183:
                    return var3;
case 184:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 185; continue _fun0021 }
case 8:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 23;
                    var7 = var10[var7];
                    var12 = var9.bind(var6)(var7);
                    var11 = var12.getOptimalChunkSize;
                    if(var5) { _fun0021_ip = 178; continue _fun0021 }
case 34:
                    var7 = var11.bind(var12)(var3);
                    _fun0021_ip = 102; continue _fun0021;
case 178:
                    var15 = 8192;
                    var14 = 16777216;
                    var13 = 0.25;
                    var17 = var12;
                    var16 = var3;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
case 102:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 22;
                    var4 = var9[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getFileHash;
                    var4 = 'md5';
                    var4 = var5.bind(var6)(var8, var4, var7);
                    SaveGenerator(address=184);
case 186:
                    return var4;
case 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0021_ip = 50; continue _fun0021 }
case 19:
                    var5 = null;
                    var6 = var5 != var4;
                    var5 = '';
                    if(!var6) { _fun0021_ip = 187; continue _fun0021 }
case 188:
                    var5 = var4;
case 187:
                    return var5;
case 50:
                    return var4;
case 185:
                    return var3;
case 149:
                    return var2;
case 179:
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
        var2[9] = var6;
        var6 = {};
        var7 = 'getEtagFromResponse';
        var6['key'] = var7;
        var7 = function getEtagFromResponse(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var1 = var1.headers;
                var2 = var1.etag;
                var1 = null;
                var3 = var1 != var2;
                var5 = null;
                if(!var3) { _fun0022_ip = 109; continue _fun0022 }
case 182:
                var5 = var2;
case 109:
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
        var6['value'] = var7;
        var2[10] = var6;
        var6 = {};
        var7 = 'trackTime';
        var6['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0023_ip = 189; continue _fun0023 }
case 72:
                    var4 = arg1;
                    var2 = arg2;
                    var7 = undefined;
                    var3 = undefined;
                    var6 = global;
                    var9 = var6.performance;
                    var8 = var9.now;
                    var3 = var8.bind(var9)();
case 111: // try_start_0
                    var2 = var2.bind(var7)();
                    SaveGenerator(address=48);
case 190:
                    return var2;
case 191:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0023_ip = 192; continue _fun0023 }
case 193: // try_end0
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
case 192:
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
case 194: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = var5.uploadAnalytics;
                    var5 = var5.timing;
                    var7 = var6.performance;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var3 = var6 - var3;
                    var5[var4] = var3;
                    throw var2;
case 189:
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
        var2[11] = var6;
        var6 = {};
        var7 = 'upload';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 195; continue _fun0024 }
case 12:
                    var _closure4_slot0 = var6;
                    var3 = undefined;
                    var _closure4_slot2 = var3;
                    var _closure4_slot3 = var3;
                    var20 = undefined;
                    var _closure4_slot4 = var3;
                    var15 = undefined;
                    var11 = undefined;
                    var13 = undefined;
                    var9 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var21 = undefined;
                    var22 = undefined;
                    var19 = undefined;
                    var _closure4_slot1 = var6;
                    var4 = var6.status;
                    var2 = _closure1_slot18;
                    var2 = var2.COMPLETED;
                    if(!(var4 !== var2)) { _fun0024_ip = 196; continue _fun0024 }
case 197:
                    var4 = var6.setStatus;
                    var2 = _closure1_slot18;
                    var2 = var2.STARTED;
                    var2 = var4.bind(var6)(var2);
                    var7 = global;
                    var4 = var7.performance;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var6['startTime'] = var2;
                    var2 = var6.trackUploadStart;
                    var2 = var2.bind(var6)();
                    var2 = var6.reactNativeFilePrepped;
                    var23 = false;
                    if(!(var23 === var2)) { _fun0024_ip = 38; continue _fun0024 }
case 198:
                    var2 = var6.reactNativeCompressAndExtractData;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=164);
case 134:
                    return var2;
case 199:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0024_ip = 200; continue _fun0024 }
case 38:
                    var4 = var6.isCancelled;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0024_ip = 201; continue _fun0024 }
case 202:
                    var4 = var6.item;
                    var12 = var4.platform;
                    var14 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var4 = 15;
                    var4 = var24[var4];
                    var4 = var14.bind(var3)(var4);
                    var4 = var4.UploadPlatform;
                    var4 = var4.WEB;
                    var4 = var12 !== var4;
                    if(var4) { _fun0024_ip = 203; continue _fun0024 }
case 204:
                    var12 = var6.item;
                    var14 = var12.compressionMetadata;
                    var12 = null;
                    var12 = var12 != var14;
                    if(!var12) { _fun0024_ip = 67; continue _fun0024 }
case 205:
                    var12 = var14.earlyClipboardCompressionAttempted;
case 67:
                    var4 = var12;
case 203:
                    if(var4) { _fun0024_ip = 206; continue _fun0024 }
case 207:
                    var4 = var6.maybeConvertToWebP;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=289);
case 208:
                    return var4;
case 209:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(!var12) { _fun0024_ip = 206; continue _fun0024 }
case 210:
                    return var4;
case 206:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 24;
                    var4 = var14[var4];
                    var4 = var12.bind(var3)(var4);
                    var12 = var4.default;
                    var4 = var12.getUploadPayload;
                    var4 = var4.bind(var12)(var6);
                    SaveGenerator(address=338);
case 211:
                    return var4;
case 212:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(var12) { _fun0024_ip = 213; continue _fun0024 }
case 214:
                    _closure4_slot2 = var4;
                    var14 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var12 = 25;
                    var12 = var24[var12];
                    var26 = var14.bind(var3)(var12);
                    var25 = var26.getUploadTarget;
                    var12 = var6.item;
                    var12 = var12.target;
                    var27 = var25.bind(var26)(var12);
                    _closure4_slot3 = var27;
                    var12 = 26;
                    var12 = var24[var12];
                    var24 = var14.bind(var3)(var12);
                    var14 = var24.getDetectedFileSizeExperimentConfig;
                    var12 = {};
                    var25 = 'CloudUpload.upload';
                    var12['location'] = var25;
                    var12 = var14.bind(var24)(var12);
                    var24 = var4.filename;
                    var14 = null;
                    if(!(var14 != var24)) { _fun0024_ip = 215; continue _fun0024 }
case 141:
                    var25 = var4.filename;
                    var24 = '';
                    if(!(var24 !== var25)) { _fun0024_ip = 215; continue _fun0024 }
case 216:
                    var12 = var12.useDetectedFileSize;
                    if(!var12) { _fun0024_ip = 217; continue _fun0024 }
case 218:
                    var12 = var6.currentSize;
case 217:
                    var12 = var6.currentSize;
                    var26 = 0;
                    if(!(var26 === var12)) { _fun0024_ip = 219; continue _fun0024 }
case 166:
                    var24 = var6.handleError;
                    var12 = _closure1_slot14;
                    var12 = var12.INVALID_FILE_ASSET;
                    var12 = var24.bind(var6)(var12);
                    _fun0024_ip = 196; continue _fun0024;
case 219:
                    var12 = var6.currentSize;
                    var25 = var14 != var12;
                    var24 = 0;
                    if(!var25) { _fun0024_ip = 168; continue _fun0024 }
case 220:
                    var24 = var12;
case 168:
                    var25 = var27.getMaxFileSize;
                    var12 = var6.channelId;
                    var12 = var25.bind(var27)(var12);
                    if(!(!(var24 > var12))) { _fun0024_ip = 221; continue _fun0024 }
case 222:
                    var25 = _closure1_slot11;
                    var24 = var25.get;
                    var12 = 'upload_fail_50';
                    var12 = var24.bind(var25)(var12);
                    if(!var12) { _fun0024_ip = 223; continue _fun0024 }
case 224:
                    var24 = var7.Math;
                    var12 = var24.random;
                    var24 = var12.bind(var24)();
                    var12 = 0.5;
                    if(!(!(var24 < var12))) { _fun0024_ip = 225; continue _fun0024 }
case 223:
                    var24 = _closure1_slot1;
                    var25 = _closure1_slot2;
                    var12 = 28;
                    var12 = var25[var12];
                    var27 = var24.bind(var3)(var12);
                    var25 = var27.getCurrentConfig;
                    var24 = {};
                    var12 = 'CloudUpload';
                    var24['location'] = var12;
                    var12 = {};
                    var28 = true;
                    var12['autoTrackExposure'] = var28;
                    var12 = var25.bind(var27)(var24, var12);
                    var20 = var12;
                    _closure4_slot4 = var12;
                    var15 = null;
                    var12 = var12.enabled;
                    if(!var12) { _fun0024_ip = 226; continue _fun0024 }
case 227:
                    var25 = var6.trackTime;
                    var24 = _closure1_slot4;
                    var12 = function* () {
                        var1 = function* anon_0_() {
                            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0025_ip = 228; continue _fun0025 }
case 125:
                                var4 = _closure4_slot1;
                                var3 = var4.getHash;
                                var2 = _closure4_slot4;
                                var2 = var2.largerChunks;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=41);
case 229:
                                return var2;
case 97:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0025_ip = 230; continue _fun0025 }
case 42:
                                return var2;
case 230:
                                return var2;
case 228:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var24 = var24.bind(var3)(var12);
                    var12 = 'hashTimeMs';
                    var15 = var25.bind(var6)(var12, var24);
case 226: // try_start_0
                    var25 = _closure1_slot16;
                    var24 = var25.log;
                    var28 = var6.id;
                    var12 = var7.HermesInternal;
                    var27 = var12.concat;
                    var12 = 'Requesting upload url for ';
                    var12 = var27.bind(var12)(var28);
                    var12 = var24.bind(var25)(var12);
                    var25 = var6.trackTime;
                    var24 = _closure1_slot4;
                    var12 = function* () {
                        var1 = function* anon_0_() {
                            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0026_ip = 231; continue _fun0026 }
case 232:
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
case 102:
                                return var2;
case 233:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0026_ip = 101; continue _fun0026 }
case 234:
                                return var2;
case 101:
                                return var2;
case 231:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var24 = var24.bind(var3)(var12);
                    var12 = 'getUploadUrlTimeMs';
                    var12 = var25.bind(var6)(var12, var24);
                    SaveGenerator(address=790);
case 235:
                    return var12;
case 236:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=23);
                    if(var24) { _fun0024_ip = 237; continue _fun0024 }
case 238:
                    var25 = var6.setResponseUrl;
                    var24 = var12.body;
                    var24 = var24.attachments;
                    var24 = var24[var26];
                    var24 = var24.upload_url;
                    var24 = var25.bind(var6)(var24);
                    var25 = var6.setUploadedFilename;
                    var24 = var12.body;
                    var24 = var24.attachments;
                    var24 = var24[var26];
                    var24 = var24.upload_filename;
                    var24 = var25.bind(var6)(var24);
case 239: // try_end0
                    var24 = var15;
                    if(!(var14 == var24)) { _fun0024_ip = 240; continue _fun0024 }
case 241:
                    _fun0024_ip = 242; continue _fun0024;
case 240:
                    SaveGenerator(address=884);
case 243:
                    return var15;
case 244:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=23);
                    if(var24) { _fun0024_ip = 245; continue _fun0024 }
case 246:
                    var17 = var15;
                    if(!(var14 != var15)) { _fun0024_ip = 242; continue _fun0024 }
case 247:
                    var6['contentHash'] = var17;
case 242: // try_start_1
                    var25 = var6.trackTime;
                    var24 = _closure1_slot4;
                    var17 = function* () {
                        var1 = function* anon_0_() {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0027_ip = 248; continue _fun0027 }
case 125:
                                var3 = _closure4_slot1;
                                var2 = var3.uploadFileToCloud;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=30);
case 74:
                                return var2;
case 249:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0027_ip = 229; continue _fun0027 }
case 26:
                                return var2;
case 229:
                                return var2;
case 248:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var24 = var24.bind(var3)(var17);
                    var17 = 'uploadTimeMs';
                    var17 = var25.bind(var6)(var17, var24);
                    SaveGenerator(address=942);
case 250:
                    return var17;
case 251:
                    ResumeGenerator(result_out_reg=16, return_bool_out_reg=23);
                    if(var24) { _fun0024_ip = 252; continue _fun0024 }
case 253:
                    var18 = var17;
                    var24 = var20;
                    var24 = var24.enabled;
                    if(!var24) { _fun0024_ip = 254; continue _fun0024 }
case 255:
                    var24 = var18;
                    if(!(var14 != var24)) { _fun0024_ip = 254; continue _fun0024 }
case 256:
                    var21 = false;
                    var24 = var6.getEtagFromResponse;
                    var23 = var18;
                    var23 = var24.bind(var6)(var23);
                    var22 = var23;
                    if(!(var14 != var23)) { _fun0024_ip = 257; continue _fun0024 }
case 258:
                    var23 = var22;
                    var6['etag'] = var23;
                    var22 = var6.contentHash;
                    var21 = var23 === var22;
case 257:
                    var22 = var6.uploadAnalytics;
                    var22['validUploadHash'] = var21;
                    if(var21) { _fun0024_ip = 254; continue _fun0024 }
case 259:
                    var20 = var20.enforced;
                    if(!var20) { _fun0024_ip = 254; continue _fun0024 }
case 260:
                    var20 = var6.filename;
                    var19 = var20;
                    if(!(var14 == var20)) { _fun0024_ip = 261; continue _fun0024 }
case 262:
                    var25 = var6.id;
                    _fun0024_ip = 263; continue _fun0024;
case 261:
                    var25 = var19;
case 263:
                    var31 = var6.etag;
                    var29 = var6.contentHash;
                    var19 = var7.HermesInternal;
                    var22 = var19.concat;
                    var34 = 'File ';
                    var32 = ' received incorrect checksum after upload: got ';
                    var30 = ', expected ';
                    var33 = var25;
                    var21 = var34[var22](var33, var32, var31, var30, var29, var28);
                    var20 = _closure1_slot16;
                    var19 = var20.error;
                    var19 = var19.bind(var20)(var21);
                    var20 = _closure1_slot1;
                    var22 = _closure1_slot2;
                    var19 = 29;
                    var19 = var22[var19];
                    var20 = var20.bind(var3)(var19);
                    var19 = var20.captureMessage;
                    var19 = var19.bind(var20)(var21);
                    var20 = var6.handleError;
                    var19 = _closure1_slot14;
                    var19 = var19.INVALID_FILE_ASSET;
                    var19 = var20.bind(var6)(var19);
case 264: // try_end1
                    var19 = undefined;
                    return var19;
case 254: // try_start_2
                    var20 = var6.trackUploadFinished;
                    var19 = _closure1_slot18;
                    var19 = var19.COMPLETED;
                    var19 = var20.bind(var6)(var19);
                    var19 = var6.handleComplete;
                    var18 = var19.bind(var6)(var18);
case 265: // try_end2
                    _fun0024_ip = 196; continue _fun0024;
case 252:
                    return var17;
case 266: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=15);
                    var17 = var6.isCancelled;
                    var17 = var17.bind(var6)();
                    if(var17) { _fun0024_ip = 267; continue _fun0024 }
case 268:
                    var20 = _closure1_slot16;
                    var19 = var20.info;
                    var18 = var16;
                    var24 = var18.status;
                    var23 = var6.id;
                    var17 = var7.HermesInternal;
                    var22 = var17.concat;
                    var21 = 'Error: status ';
                    var17 = ' for ';
                    var17 = var22.bind(var21)(var24, var17, var23);
                    var17 = var19.bind(var20)(var17);
                    var17 = var6.handleError;
                    var17 = var17.bind(var6)(var18);
                    _fun0024_ip = 196; continue _fun0024;
case 267:
                    var17 = var6.handleComplete;
                    var16 = var17.bind(var6)(var16);
                    _fun0024_ip = 196; continue _fun0024;
case 245:
                    return var15;
case 237:
                    return var12;
case 269: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var10 = var12;
                    var15 = var14 == var12;
                    var12 = undefined;
                    if(var15) { _fun0024_ip = 270; continue _fun0024 }
case 271:
                    var15 = var10;
                    var15 = var15.body;
                    var13 = var15;
                    var15 = var14 == var15;
                    var12 = undefined;
                    if(var15) { _fun0024_ip = 270; continue _fun0024 }
case 272:
                    var12 = var13.code;
case 270:
                    var11 = var12;
                    if(!(var14 == var12)) { _fun0024_ip = 273; continue _fun0024 }
case 274:
                    var12 = var10;
                    var12 = var12.status;
                    _fun0024_ip = 275; continue _fun0024;
case 273:
                    var12 = var11;
case 275:
                    var9 = var12;
                    var11 = _closure1_slot14;
                    var11 = var11.ENTITY_TOO_LARGE;
                    if(!(var12 !== var11)) { _fun0024_ip = 276; continue _fun0024 }
case 277:
                    var13 = _closure1_slot16;
                    var12 = var13.error;
                    var11 = var9;
                    if(!(var14 == var11)) { _fun0024_ip = 278; continue _fun0024 }
case 279:
                    var15 = var7.JSON;
                    var14 = var15.stringify;
                    var11 = var10;
                    var11 = var11.body;
                    var17 = var14.bind(var15)(var11);
                    _fun0024_ip = 280; continue _fun0024;
case 278:
                    var17 = var9;
case 280:
                    var16 = var6.id;
                    var11 = var7.HermesInternal;
                    var15 = var11.concat;
                    var14 = 'Requesting upload url failed with code ';
                    var11 = ' for ';
                    var11 = var15.bind(var14)(var17, var11, var16);
                    var11 = var12.bind(var13)(var11);
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 29;
                    var11 = var13[var11];
                    var12 = var12.bind(var3)(var11);
                    var11 = var12.captureException;
                    var10 = var11.bind(var12)(var10);
case 276:
                    var10 = var6.handleError;
                    var9 = var10.bind(var6)(var9);
                    var9 = undefined;
                    return var9;
case 225:
                    var10 = var7.setTimeout;
                    var9 = function() {
                        var3 = _closure4_slot0;
                        var2 = var3.handleError;
                        var1 = 500;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var8 = 1000;
                    var8 = var10.bind(var3)(var9, var8);
                    _fun0024_ip = 196; continue _fun0024;
case 221:
                    var9 = var6.handleError;
                    var8 = _closure1_slot14;
                    var8 = var8.ENTITY_TOO_LARGE;
                    var8 = var9.bind(var6)(var8);
                    _fun0024_ip = 196; continue _fun0024;
case 215:
                    var10 = _closure1_slot16;
                    var9 = var10.error;
                    var8 = var7.JSON;
                    var7 = var8.stringify;
                    var8 = var7.bind(var8)(var4);
                    var7 = 'File does not have a filename.';
                    var7 = var9.bind(var10)(var7, var8);
                    var7 = var6.handleError;
                    var5 = _closure1_slot14;
                    var5 = var5.INVALID_FILE_ASSET;
                    var5 = var7.bind(var6)(var5);
                    var5 = undefined;
                    return var5;
case 213:
                    return var4;
case 201:
                    var5 = var6.handleComplete;
                    var4 = var6.id;
                    var4 = var5.bind(var6)(var4);
case 196:
                    return var3;
case 200:
                    return var2;
case 195:
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
        var2[12] = var6;
        var6 = {};
        var7 = 'reactNativeCompressAndExtractData';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0028_ip = 281; continue _fun0028 }
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
                    if(var5) { _fun0028_ip = 282; continue _fun0028 }
case 124:
                    var6 = var2.uploadAnalytics;
                    var5 = true;
                    var6['compressAndExtractDisabled'] = var5;
                    var7 = _closure1_slot16;
                    var6 = var7.log;
                    var5 = 'reactNativeCompressAndExtractData() disabled by upload target';
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 282:
                    var6 = var2.reactNativeFilePrepped;
                    var5 = true;
                    if(!(var5 !== var6)) { _fun0028_ip = 283; continue _fun0028 }
case 284:
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
                                if(var2) { _fun0029_ip = 285; continue _fun0029 }
case 125:
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
                                if(!var7) { _fun0029_ip = 286; continue _fun0029 }
case 173:
                                var2 = var6;
case 286:
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=75);
case 70:
                                return var2;
case 44:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0029_ip = 98; continue _fun0029 }
case 287:
                                return var2;
case 98:
                                return var2;
case 285:
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
case 77:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0028_ip = 288; continue _fun0028 }
case 289:
                    var9 = null;
                    if(!(var9 != var4)) { _fun0028_ip = 290; continue _fun0028 }
case 291:
                    var7 = var4.file;
                    if(!(var9 != var7)) { _fun0028_ip = 290; continue _fun0028 }
case 292:
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
                    if(!var8) { _fun0028_ip = 293; continue _fun0028 }
case 294:
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
                    if(!var8) { _fun0028_ip = 295; continue _fun0028 }
case 296:
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceWidth;
                    var10['sourceMediaWidth'] = var8;
                    var10 = var2.uploadAnalytics;
                    var8 = var4.file;
                    var8 = var8.sourceHeight;
                    var10['sourceMediaHeight'] = var8;
case 295:
                    var8 = var4.file;
                    var8 = var8.videoMetadata;
                    if(!(var13 !== var8)) { _fun0028_ip = 297; continue _fun0028 }
case 298:
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
case 297:
                    var8 = var4.file;
                    var8 = var8.encodingConfig;
                    if(!(var13 !== var8)) { _fun0028_ip = 299; continue _fun0028 }
case 300:
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
                    if(!var12) { _fun0028_ip = 301; continue _fun0028 }
case 302:
                    var8 = 'hvc1';
case 301:
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
case 299:
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
case 293:
                    var2['filename'] = var11;
                    if(!(var9 != var11)) { _fun0028_ip = 303; continue _fun0028 }
case 304:
                    if(!(var9 != var7)) { _fun0028_ip = 303; continue _fun0028 }
case 305:
                    var8 = var4.file;
                    var8 = var8.type;
                    if(!(var9 != var8)) { _fun0028_ip = 303; continue _fun0028 }
case 306:
                    var10 = var11.split;
                    var8 = '.';
                    var10 = var10.bind(var11)(var8);
                    var8 = var10.pop;
                    var10 = var8.bind(var10)();
                    var8 = var9 == var10;
                    var12 = undefined;
                    if(var8) { _fun0028_ip = 307; continue _fun0028 }
case 308:
                    var8 = var10.toLowerCase;
                    var12 = var8.bind(var10)();
case 307:
                    var14 = 'image/jpeg';
                    var10 = 'jpg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 309; continue _fun0028 }
case 310:
                    var10 = 'jpeg';
                    var8 = var14;
                    if(!(var10 !== var12)) { _fun0028_ip = 309; continue _fun0028 }
case 311:
                    var10 = var4.file;
                    var8 = var10.type;
case 309:
                    var10 = var2.uploadAnalytics;
                    var10['convertedMimeType'] = var8;
                    var19 = var4.fileSize;
                    if(!(var9 == var19)) { _fun0028_ip = 312; continue _fun0028 }
case 313:
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 23;
                    var10 = var14[var10];
                    var12 = var12.bind(var13)(var10);
                    var10 = var12.getFileData;
                    var10 = var10.bind(var12)(var7);
                    SaveGenerator(address=1242);
case 314:
                    return var10;
case 315:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=11);
                    if(var12) { _fun0028_ip = 316; continue _fun0028 }
case 317:
                    var19 = var10.size;
                    _fun0028_ip = 312; continue _fun0028;
case 316:
                    return var10;
case 312:
                    var2['postCompressionSize'] = var19;
                    var2['currentSize'] = var19;
                    if(!(var9 != var19)) { _fun0028_ip = 318; continue _fun0028 }
case 319:
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
case 318:
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
case 303:
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
case 290:
                    var8 = _closure1_slot16;
                    var7 = var8.error;
                    var10 = var2.id;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var6 = 'Failed to get compressed file for ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    return var2;
case 288:
                    return var4;
case 283:
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
case 281:
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
        var2[13] = var6;
        var6 = {};
        var7 = 'maybeConvertToWebP';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    StartGenerator();
                    var3 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0030_ip = 320; continue _fun0030 }
case 72:
                    var2 = undefined;
                    var7 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var12 = undefined;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 31;
                    var6 = var10[var6];
                    var10 = var9.bind(var2)(var6);
                    var9 = var10.getImageAttachmentMezzanineV2Config;
                    var6 = {};
                    var13 = 'CloudUpload.maybeConvertToWebP';
                    var6['location'] = var13;
                    var6 = var9.bind(var10)(var6);
                    var9 = var6.enabled;
                    if(var9) { _fun0030_ip = 36; continue _fun0030 }
case 321:
                    var13 = _closure1_slot16;
                    var10 = var13.warn;
                    var16 = var3.id;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var15 = var9.concat;
                    var14 = 'webp conversion skipped for ';
                    var9 = ': not enabled';
                    var9 = var15.bind(var14)(var16, var9);
                    var9 = var10.bind(var13)(var9);
                    _fun0030_ip = 239; continue _fun0030;
case 36:
                    var9 = var3.item;
                    var10 = var9.file;
                    var9 = null;
                    if(!(var9 == var10)) { _fun0030_ip = 187; continue _fun0030 }
case 64:
                    var14 = _closure1_slot16;
                    var13 = var14.warn;
                    var17 = var3.id;
                    var10 = global;
                    var10 = var10.HermesInternal;
                    var16 = var10.concat;
                    var15 = 'webp conversion skipped for ';
                    var10 = ': no file';
                    var10 = var16.bind(var15)(var17, var10);
                    var10 = var13.bind(var14)(var10);
                    _fun0030_ip = 239; continue _fun0030;
case 187:
                    var10 = var6.maxFileSizeBytes;
                    if(!(var9 != var10)) { _fun0030_ip = 322; continue _fun0030 }
case 24:
                    var10 = var3.preCompressionSize;
                    var6 = var6.maxFileSizeBytes;
                    if(!(!(var10 > var6))) { _fun0030_ip = 323; continue _fun0030 }
case 322:
                    var6 = var3._aborted;
                    if(var6) { _fun0030_ip = 239; continue _fun0030 }
case 324:
                    var10 = global;
                    var13 = var10.performance;
                    var6 = var13.now;
                    var5 = var6.bind(var13)();
case 325: // try_start_0
                    var13 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var15 = 32;
                    var6 = var6[var15];
                    var14 = var13.bind(var2)(var6);
                    var13 = var14.convertToWebP;
                    var6 = var3.item;
                    var6 = var6.file;
                    var6 = var13.bind(var14)(var6);
                    SaveGenerator(address=310);
case 56:
                    return var6;
case 326:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0030_ip = 327; continue _fun0030 }
case 328:
                    var8 = var6;
                    var13 = var3._aborted;
                    if(var13) { _fun0030_ip = 329; continue _fun0030 }
case 116:
                    var13 = var8;
                    var13 = var13.success;
                    if(var13) { _fun0030_ip = 330; continue _fun0030 }
case 55:
                    var13 = var8;
                    var13 = var13.reason;
                    var12 = var13;
                    var13 = var9 != var13;
                    var19 = 'unknown';
                    if(!var13) { _fun0030_ip = 331; continue _fun0030 }
case 332:
                    var19 = var12;
case 331:
                    var12 = var3.uploadAnalytics;
                    var12['conversionFailureReason'] = var19;
                    var14 = _closure1_slot16;
                    var13 = var14.log;
                    var18 = var3.id;
                    var12 = var10.HermesInternal;
                    var17 = var12.concat;
                    var16 = 'webp conversion skipped for ';
                    var12 = ': ';
                    var12 = var17.bind(var16)(var18, var12, var19);
                    var12 = var13.bind(var14)(var12);
                    _fun0030_ip = 333; continue _fun0030;
case 330:
                    var14 = var3.item;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var15];
                    var15 = var13.bind(var2)(var12);
                    var13 = var15.getBestFileForUpload;
                    var12 = var8;
                    var13 = var13.bind(var15)(var12);
                    var14['file'] = var13;
                    var13 = var3.item;
                    var13 = var13.file;
                    var13 = var13.size;
                    var3['currentSize'] = var13;
                    var14 = var3.uploadAnalytics;
                    var13 = 'image/webp';
                    var14['convertedMimeType'] = var13;
                    var12 = var12.hashTimeMs;
                    if(!(var9 != var12)) { _fun0030_ip = 222; continue _fun0030 }
case 334:
                    var12 = var3.uploadAnalytics;
                    var13 = var12.timing;
                    var12 = var8;
                    var12 = var12.hashTimeMs;
                    var13['hashTimeMs'] = var12;
case 222:
                    var14 = _closure1_slot16;
                    var13 = var14.log;
                    var23 = var3.id;
                    var12 = var8;
                    var29 = var12.sizeBefore;
                    var27 = var12.sizeAfter;
                    var16 = var12.compressionRatio;
                    var15 = var16.toFixed;
                    var12 = 2;
                    var25 = var15.bind(var16)(var12);
                    var12 = var10.HermesInternal;
                    var19 = var12.concat;
                    var32 = 'webp conversion worked for ';
                    var30 = ': ';
                    var28 = ' -> ';
                    var26 = ' bytes (';
                    var24 = 'x)';
                    var31 = var23;
                    var12 = var32[var19](var31, var30, var29, var28, var27, var26, var25, var24, var23);
                    var12 = var13.bind(var14)(var12);
case 333: // try_end0
                    _fun0030_ip = 335; continue _fun0030;
case 329:
                    return var2;
case 327:
                    return var6;
case 336: // catch_target0
                    CatchBlockStart(arg_register=13);
                    var12 = var3.uploadAnalytics;
                    var6 = 'unknown_error';
                    var12['conversionFailureReason'] = var6;
                    var13 = _closure1_slot16;
                    var12 = var13.warn;
                    var17 = var3.id;
                    var6 = var10.HermesInternal;
                    var16 = var6.concat;
                    var15 = 'webp conversion failed for ';
                    var6 = ':';
                    var6 = var16.bind(var15)(var17, var6);
                    var6 = var12.bind(var13)(var6, var14);
case 335:
                    var6 = var3.uploadAnalytics;
                    var6 = var6.timing;
                    var11 = var8;
                    var12 = var9 == var8;
                    var8 = undefined;
                    if(var12) { _fun0030_ip = 92; continue _fun0030 }
case 90:
                    var8 = var11.compressTimeMs;
case 92:
                    var7 = var8;
                    if(!(var9 == var8)) { _fun0030_ip = 337; continue _fun0030 }
case 338:
                    var9 = var10.Math;
                    var8 = var9.round;
                    var11 = var10.performance;
                    var10 = var11.now;
                    var10 = var10.bind(var11)();
                    var5 = var10 - var5;
                    var5 = var8.bind(var9)(var5);
                    _fun0030_ip = 339; continue _fun0030;
case 337:
                    var5 = var7;
case 339:
                    var6['compressTimeMs'] = var5;
                    _fun0030_ip = 239; continue _fun0030;
case 323:
                    var5 = _closure1_slot16;
                    var4 = var5.warn;
                    var8 = var3.id;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'webp conversion skipped for ';
                    var3 = ': too big';
                    var3 = var7.bind(var6)(var8, var3);
                    var3 = var4.bind(var5)(var3);
case 239:
                    return var2;
case 320:
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
        var2[14] = var6;
        var6 = {};
        var7 = 'handleError';
        var6['key'] = var7;
        var7 = function handleError(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
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
case 96: // try_start_0
                var4 = var2.emit;
                var3 = var1;
                var1 = 'error';
                var1 = var4.bind(var2)(var1, var3);
case 44: // try_end0
                _fun0031_ip = 321; continue _fun0031;
case 124: // catch_target0
                CatchBlockStart(arg_register=0);
case 321:
                var1 = var2.removeAllListeners;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[15] = var6;
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
        var2[16] = var6;
        var6 = {};
        var7 = '_cancel';
        var6['key'] = var7;
        var7 = function _cancel(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                if(!(var4 === var1)) { _fun0032_ip = 172; continue _fun0032 }
case 287:
                var1 = var2.delete;
                var1 = var1.bind(var2)();
case 172:
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
        var6['value'] = var7;
        var2[17] = var6;
        var6 = {};
        var7 = 'cancel';
        var6['key'] = var7;
        var7 = function cancel() {
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
        var6['value'] = var7;
        var2[18] = var6;
        var6 = {};
        var7 = 'removeFromMsgDraft';
        var6['key'] = var7;
        var7 = function removeFromMsgDraft() {
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
        var6['value'] = var7;
        var2[19] = var6;
        var6 = {};
        var7 = 'isCancelled';
        var6['key'] = var7;
        var7 = function isCancelled() {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = this;
                var4 = var3.status;
                var1 = _closure1_slot18;
                var1 = var1.CANCELED;
                var1 = var4 === var1;
                if(var1) { _fun0033_ip = 42; continue _fun0033 }
case 74:
                var3 = var3.status;
                var2 = _closure1_slot18;
                var2 = var2.REMOVED_FROM_MSG_DRAFT;
                var1 = var3 === var2;
case 42:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[20] = var6;
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
                _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
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
                    if(!var8) { _fun0034_ip = 128; continue _fun0034 }
case 229:
                    var1 = var5.prototype;
case 128:
                    var5 = undefined;
                    var4 = var4.bind(var5)(var1);
                    var1 = 'resetState';
                    var5 = var6.bind(var5)(var4, var1, var7);
                    var _closure4_slot1 = var5;
                    var1 = 2;
                    var3 = var1 & var3;
                    var1 = var5;
                    if(!var3) { _fun0034_ip = 192; continue _fun0034 }
case 321:
                    var4 = 'function';
                    var3 = typeof var5;
                    var1 = var5;
                    if(!(var4 === var3)) { _fun0034_ip = 192; continue _fun0034 }
case 340:
                    var1 = function(arg1) {
                        var4 = _closure4_slot1;
                        var3 = var4.apply;
                        var2 = _closure4_slot0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
case 192:
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
        var2[21] = var6;
        var6 = {};
        var7 = 'delete';
        var6['key'] = var7;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0035_ip = 234; continue _fun0035 }
case 72:
                    var2 = undefined;
                    var3 = undefined;
                    var6 = var5.uploadedFilename;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0035_ip = 341; continue _fun0035 }
case 109:
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
case 340: // try_start_0
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
case 342:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0035_ip = 102; continue _fun0035 }
case 113: // try_end0
                    _fun0035_ip = 341; continue _fun0035;
case 102:
                    return var3;
case 13: // catch_target0
                    CatchBlockStart(arg_register=2);
case 341:
                    return var2;
case 234:
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
        var2[22] = var6;
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
        var2[23] = var6;
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
        var2[24] = var6;
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
        var2[25] = var6;
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
        var2[26] = var6;
        var6 = {};
        var7 = 'trackUploadStart';
        var6['key'] = var7;
        var7 = function trackUploadStart() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var7 = this;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
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
                if(!var10) { _fun0036_ip = 343; continue _fun0036 }
case 44:
                var8 = var9;
case 343:
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
        var2[27] = var6;
        var6 = {};
        var7 = 'trackUploadFinished';
        var6['key'] = var7;
        var7 = function trackUploadFinished(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var7 = this;
                var1 = var7.startTime;
                var9 = null;
                var1 = var9 != var1;
                var8 = -1;
                var3 = var8;
                if(!var1) { _fun0037_ip = 193; continue _fun0037 }
case 95:
                var1 = global;
                var2 = var1.performance;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = var7.startTime;
                var3 = var2 - var1;
case 193:
                var1 = var7.item;
                var5 = var1.platform;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.UploadPlatform;
                var4 = var2.WEB;
                var10 = 0;
                var2 = 0;
                if(!(var5 === var4)) { _fun0037_ip = 344; continue _fun0037 }
case 345:
                var4 = var7.item;
                var5 = var4.compressionMetadata;
                var11 = var9 == var5;
                var4 = undefined;
                if(var11) { _fun0037_ip = 346; continue _fun0037 }
case 347:
                var4 = var5.compressTimeMs;
case 346:
                var5 = var9 != var4;
                var2 = 0;
                if(!var5) { _fun0037_ip = 344; continue _fun0037 }
case 43:
                var2 = var4;
case 344:
                if(!(var3 >= var10)) { _fun0037_ip = 348; continue _fun0037 }
case 101:
                var8 = var3 + var2;
case 348:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 33;
                var2 = var4[var2];
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
                var12 = var7.mimeType;
                var13 = var9 != var12;
                var8 = 'unknown';
                var11 = var8;
                if(!var13) { _fun0037_ip = 349; continue _fun0037 }
case 350:
                var11 = var12;
case 349:
                var2['mime_type'] = var11;
                var11 = var7.uploadAnalytics;
                var12 = var11.numUploadAttempts;
                var13 = var9 != var12;
                var11 = 1;
                if(!var13) { _fun0037_ip = 54; continue _fun0037 }
case 351:
                var11 = var12;
case 54:
                var2['num_upload_attempts'] = var11;
                var11 = var7.error;
                var2['error_code'] = var11;
                var11 = _closure1_slot12;
                var12 = var11.videoUploadQuality;
                var2['video_upload_quality'] = var12;
                var12 = var11.dataSavingMode;
                var2['data_saving_mode'] = var12;
                var11 = var11.dataSavingMode;
                var2['low_quality_image_mode'] = var11;
                var11 = var7.uploadAnalytics;
                var11 = var11.timing;
                var11 = var11.compressTimeMs;
                var2['compress_time_ms'] = var11;
                var11 = var7.uploadAnalytics;
                var11 = var11.timing;
                var11 = var11.getUploadUrlTimeMs;
                var2['get_upload_url_time_ms'] = var11;
                var11 = var7.uploadAnalytics;
                var11 = var11.timing;
                var11 = var11.uploadTimeMs;
                var2['upload_time_ms'] = var11;
                var11 = var7.uploadAnalytics;
                var12 = var11.convertedMimeType;
                var13 = var9 != var12;
                var11 = var8;
                if(!var13) { _fun0037_ip = 86; continue _fun0037 }
case 352:
                var11 = var12;
case 86:
                var2['converted_mime_type'] = var11;
                var11 = var7.uploadAnalytics;
                var11 = var11.imageCompressionQuality;
                var12 = var9 != var11;
                var10 = 0;
                if(!var12) { _fun0037_ip = 353; continue _fun0037 }
case 354:
                var10 = var11;
case 353:
                var2['image_compression_quality'] = var10;
                var10 = var7.uploadAnalytics;
                var10 = var10.videoCompressionQuality;
                var11 = var9 != var10;
                if(!var11) { _fun0037_ip = 355; continue _fun0037 }
case 356:
                var8 = var10;
case 355:
                var2['video_compression_quality'] = var8;
                var8 = var7.uploadAnalytics;
                var8 = var8.convertedMimeType;
                var8 = var9 != var8;
                if(!var8) { _fun0037_ip = 357; continue _fun0037 }
case 358:
                var10 = var7.mimeType;
                var9 = var7.uploadAnalytics;
                var9 = var9.convertedMimeType;
                var8 = var10 !== var9;
case 357:
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
                if(!var8) { _fun0037_ip = 359; continue _fun0037 }
case 360:
                var7 = 'libdiscore';
case 359:
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
        var6['value'] = var7;
        var2[28] = var6;
        var6 = {};
        var7 = 'fromJson';
        var6['key'] = var7;
        var1 = function fromJson(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
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
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
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
                        if(var2) { _fun0039_ip = 361; continue _fun0039 }
case 362:
                        var2 = _closure3_slot0;
                        var2[var4] = var3;
case 361:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var4 = var1.status;
                var3 = _closure1_slot18;
                var3 = var3.COMPLETED;
                if(!(var4 !== var3)) { _fun0038_ip = 347; continue _fun0038 }
case 363:
                var2 = _closure1_slot18;
                var2 = var2.NOT_STARTED;
                var1['status'] = var2;
case 347:
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