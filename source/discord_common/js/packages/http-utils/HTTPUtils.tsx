// discord_common/js/packages/http-utils/HTTPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var18 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var19 = dependencyMap;
        var _closure1_slot0 = var18;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var19;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
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
        var16 = function isRateLimitedStatus(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var _closure1_slot16 = var16;
        var13 = function parseRetryAfter(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var4 = null;
                var1 = var4 == var5;
                var3 = undefined;
                var7 = undefined;
                if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var7 = var5.retry-after;
case 6:
                if(!(var4 == var7)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var1 = var5.Retry-After;
case 10:
                var7 = var1;
case 8:
                var5 = 'string';
                var1 = typeof var7;
                if(!(var5 === var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var5 = global;
                var6 = var5.parseInt;
                var1 = 10;
                var1 = var6.bind(var3)(var7, var1);
                var6 = var5.Number;
                var5 = var6.isFinite;
                var5 = var5.bind(var6)(var1);
                if(!var5) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                var5 = 0;
                if(!(!(var1 > var5))) { _fun0003_ip = 15; continue _fun0003 }
case 12:
                if(!(var4 != var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var5 = 'object';
                var4 = typeof var2;
                if(!(var5 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                var2 = var2.retry_after;
                var5 = 'number';
                var4 = typeof var2;
                if(!(var5 === var4)) { _fun0003_ip = 16; continue _fun0003 }
case 19:
                var4 = global;
                var5 = var4.Number;
                var4 = var5.isFinite;
                var4 = var4.bind(var5)(var2);
                if(!var4) { _fun0003_ip = 16; continue _fun0003 }
case 20:
                var4 = 0;
                if(!(!(var2 > var4))) { _fun0003_ip = 21; continue _fun0003 }
case 16:
                return var3;
case 21:
                return var2;
case 15:
                return var1;
            }
        };
        var _closure1_slot17 = var13;
        var12 = function getRateLimitFloorMs(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot17;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var2, var1);
                var2 = null;
                var3 = var2 != var1;
                var2 = 5;
                if(!var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2 = var1;
case 22:
                var1 = 1000;
                var1 = var1 * var2;
                return var1;
            }
        };
        var _closure1_slot18 = var12;
        var1 = function sendRequest(arg1, arg2, arg3, arg4, arg5) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var6 = arg2;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var6;
                var1 = arg3;
                var _closure2_slot2 = var1;
                var1 = arg4;
                var _closure2_slot3 = var1;
                var1 = arg5;
                var _closure2_slot4 = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5[var3];
                var3 = var6.url;
                var3 = var4.bind(var5)(var3);
                var _closure2_slot5 = var3;
                var4 = var6.onRequestCreated;
                var5 = null;
                if(!(var5 != var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var4 = var6.onRequestCreated;
                var4 = var4.bind(var6)(var3);
case 24:
                var4 = var6.query;
                if(!(var5 != var4)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var9 = var6.query;
                var10 = 'object';
                var4 = typeof var9;
                var8 = var9;
                if(!(var10 === var4)) { _fun0005_ip = 28; continue _fun0005 }
case 19:
                var4 = {};
                var14 = var4;
                var13 = var9;
                var9 = copyDataProperties(var14, var13);
                var _closure2_slot6 = var4;
                var9 = global;
                var10 = var9.Object;
                var9 = var10.keys;
                var11 = var9.bind(var10)(var4);
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure2_slot6;
                        var4 = var3[var2];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var1 = _closure2_slot6;
                        var1 = delete var1[var2];
case 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                var8 = var4;
case 28:
                var4 = var3.query;
                var4 = var4.bind(var3)(var8);
case 26:
                var4 = var6.body;
                if(!var4) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var8 = var3.send;
                var4 = var6.body;
                var4 = var8.bind(var3)(var4);
case 31:
                var4 = var6.headers;
                if(!(var5 != var4)) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var8 = var3.set;
                var4 = var6.headers;
                var4 = var8.bind(var3)(var4);
case 33:
                var8 = var6.withCredentials;
                var4 = true;
                if(!(var4 === var8)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var8 = var3.withCredentials;
                var8 = var8.bind(var3)();
case 35:
                var8 = var6.reason;
                if(!(var5 != var8)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var10 = var3.set;
                var8 = global;
                var9 = var8.encodeURIComponent;
                var8 = var6.reason;
                var9 = var9.bind(var1)(var8);
                var8 = 'X-Audit-Log-Reason';
                var8 = var10.bind(var3)(var8, var9);
case 37:
                var10 = var6.attachments;
                if(!(var5 != var10)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var9 = var10.forEach;
                var8 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure2_slot5;
                    var4 = var5.attach;
                    var3 = var1.name;
                    var2 = var1.file;
                    var1 = var1.filename;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var8 = var9.bind(var10)(var8);
case 39:
                var10 = var6.fields;
                if(!(var5 != var10)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var9 = var10.forEach;
                var8 = function(arg1) {
                    var1 = arg1;
                    var4 = _closure2_slot5;
                    var3 = var4.field;
                    var2 = var1.name;
                    var1 = var1.value;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var8 = var9.bind(var10)(var8);
case 41:
                var8 = var6.context;
                if(!(var5 != var8)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var9 = _closure1_slot23;
                var8 = var6.context;
                var10 = var9.bind(var1)(var8);
                if(!(var5 != var10)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
                var9 = var3.set;
                var8 = 'X-Context-Properties';
                var8 = var9.bind(var3)(var8, var10);
case 43:
                var8 = var6.retried;
                var8 = var5 != var8;
                if(!var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var10 = var6.retried;
                var9 = 0;
                var8 = var9 !== var10;
case 46:
                if(!var8) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var10 = var3.set;
                var11 = var6.retried;
                var8 = global;
                var8 = var8.HermesInternal;
                var9 = var8.concat;
                var8 = '';
                var9 = var9.bind(var8)(var11);
                var8 = 'X-Failed-Requests';
                var8 = var10.bind(var3)(var8, var9);
case 48:
                var8 = var6.timeout;
                var8 = var5 != var8;
                if(!var8) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var10 = var6.timeout;
                var9 = 0;
                var8 = var9 !== var10;
case 50:
                if(!var8) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var9 = var3.timeout;
                var8 = var6.timeout;
                var8 = var9.bind(var3)(var8);
case 52:
                var8 = var6.binary;
                if(!var8) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var9 = var3.responseType;
                var8 = 'blob';
                var8 = var9.bind(var3)(var8);
case 54:
                var8 = var6.onRequestProgress;
                if(!(var5 != var8)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var10 = var3.on;
                var9 = 'progress';
                var8 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var3 = var2.onRequestProgress;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0007_ip = 58; continue _fun0007 }
case 7:
                        var3 = _closure2_slot1;
                        var2 = var3.onRequestProgress;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var10.bind(var3)(var9, var8);
case 56:
                var8 = function retry() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = var3.backoff;
                        var4 = null;
                        if(!(var4 == var2)) { _fun0008_ip = 59; continue _fun0008 }
case 7:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var5 = var2.prototype;
                        var5 = Object.create(var5, {constructor: {value: var2}});
                        var8 = var5;
                        var2 = new var8[var2](var7);
                        var2 = var2 instanceof Object ? var2 : var5;
                        _fun0008_ip = 60; continue _fun0008;
case 59:
                        var5 = _closure2_slot1;
                        var2 = var5.backoff;
case 60:
                        var3['backoff'] = var2;
                        var3 = _closure2_slot1;
                        var2 = var3.retried;
                        var2 = var4 != var2;
                        var4 = 0;
                        if(!var2) { _fun0008_ip = 61; continue _fun0008 }
case 12:
                        var2 = _closure2_slot1;
                        var4 = var2.retried;
case 61:
                        var2 = 1;
                        var2 = var4 + var2;
                        var3['retried'] = var2;
                        var1 = _closure2_slot1;
                        var3 = var1.backoff;
                        var2 = var3.fail;
                        var1 = function() {
                            var3 = _closure1_slot14;
                            var1 = _closure2_slot1;
                            var2 = var1.url;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.then;
                            var1 = function() {
                                var7 = _closure1_slot19;
                                var12 = _closure2_slot0;
                                var11 = _closure2_slot1;
                                var10 = _closure2_slot2;
                                var9 = _closure2_slot3;
                                var8 = _closure2_slot4;
                                var1 = undefined;
                                var13 = undefined;
                                var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure2_slot7 = var8;
                var9 = _closure1_slot13;
                var8 = var5 == var9;
                var7 = undefined;
                if(var8) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var8 = var9.prepareRequest;
                var8 = var5 == var8;
                var7 = undefined;
                if(var8) { _fun0005_ip = 62; continue _fun0005 }
case 64:
                var8 = var9.prepareRequest;
                var7 = var8.bind(var9)(var3);
case 62:
                var _closure2_slot8 = var7;
                var8 = var3.ok;
                var7 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.status;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var7 = var8.bind(var3)(var7);
                var9 = var3.then;
                var8 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var7 = arg1;
                        var2 = _closure2_slot1;
                        var2 = var2.retries;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                        var5 = _closure2_slot1;
                        var2 = var5.retries;
                        var3 = parseFloat(var2);
                        var2 = var3 - 1;
                        var5['retries'] = var2;
                        var2 = 0;
                        if(!(var3 > var2)) { _fun0009_ip = 65; continue _fun0009 }
case 67:
                        var5 = _closure1_slot9;
                        var3 = var5.has;
                        var2 = var7.status;
                        var2 = var3.bind(var5)(var2);
                        if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 65:
                        var5 = {};
                        var2 = var7.ok;
                        var5['ok'] = var2;
                        var2 = var7.headers;
                        var5['headers'] = var2;
                        var2 = var7.body;
                        var5['body'] = var2;
                        var2 = var7.text;
                        var5['text'] = var2;
                        var2 = var7.status;
                        var5['status'] = var2;
                        var10 = _closure1_slot17;
                        var8 = var7.headers;
                        var6 = var7.body;
                        var2 = undefined;
                        var6 = var10.bind(var2)(var8, var6);
                        var5['retryAfter'] = var6;
                        var6 = _closure1_slot21;
                        var8 = _closure2_slot1;
                        var6 = var6.bind(var2)(var8, var5);
                        var6 = false;
                        var _closure3_slot0 = var6;
                        var14 = function interceptRetry(arg1, arg2) {
                            var7 = {};
                            var2 = _closure2_slot1;
                            var12 = var7;
                            var11 = var2;
                            var3 = copyDataProperties(var12, var11);
                            var3 = {};
                            var11 = var2.headers;
                            var12 = var3;
                            var2 = copyDataProperties(var12, var11);
                            var11 = arg1;
                            var12 = var3;
                            var2 = copyDataProperties(var12, var11);
                            var2 = 'headers';
                            var7[1] = var3;
                            var3 = arg2;
                            var2 = 'interceptResponse';
                            var7[1] = var3;
                            var2 = true;
                            _closure3_slot0 = var2;
                            var6 = _closure1_slot19;
                            var12 = _closure2_slot0;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var8 = _closure2_slot4;
                            var1 = undefined;
                            var13 = undefined;
                            var11 = var7;
                            var2 = var13[var6](var12, var11, var10, var9, var8, var7);
                            return var1;
                        };
                        var13 = function interceptCancel(arg1) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                var4 = arg1;
                                var1 = _closure3_slot0;
                                if(var1) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                                var2 = _closure2_slot3;
                                var3 = undefined;
                                var2 = var2.bind(var3)(var4);
                                var5 = _closure2_slot4;
                                var2 = null;
                                if(!(var2 != var5)) { _fun0010_ip = 69; continue _fun0010 }
case 58:
                                var2 = _closure2_slot4;
                                var1 = {'ok': false, 'hasErr': true};
                                var1['err'] = var4;
                                var1 = var2.bind(var3)(var1);
case 69:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var9 = var4 == var8;
                        var8 = undefined;
                        if(var9) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                        var9 = _closure2_slot1;
                        var9 = var9.interceptResponse;
                        var9 = var4 == var9;
                        var8 = undefined;
                        if(var9) { _fun0009_ip = 71; continue _fun0009 }
case 31:
                        var10 = _closure2_slot1;
                        var9 = var10.interceptResponse;
                        var8 = var9.bind(var10)(var7, var14, var13);
case 71:
                        var9 = true;
                        if(!(var9 !== var8)) { _fun0009_ip = 73; continue _fun0009 }
case 33:
                        var12 = _closure1_slot13;
                        var10 = var4 == var12;
                        var8 = undefined;
                        if(var10) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                        var10 = var12.interceptResponse;
                        var10 = var4 == var10;
                        var8 = undefined;
                        if(var10) { _fun0009_ip = 74; continue _fun0009 }
case 76:
                        var11 = var12.interceptResponse;
                        var15 = _closure2_slot8;
                        var19 = var12;
                        var18 = var7;
                        var17 = var14;
                        var16 = var13;
                        var8 = var19[var11](var18, var17, var16, var15, var14);
case 74:
                        if(!(var9 !== var8)) { _fun0009_ip = 73; continue _fun0009 }
case 77:
                        var7 = var7.ok;
                        if(var7) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                        var7 = _closure2_slot1;
                        var7 = var7.oldFormErrors;
                        if(!var7) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                        var7 = var4 == var5;
                        var8 = undefined;
                        if(var7) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                        var7 = var5.body;
                        var9 = var4 == var7;
                        var8 = undefined;
                        if(var9) { _fun0009_ip = 82; continue _fun0009 }
case 84:
                        var8 = var7.code;
case 82:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var7 = var9.bind(var2)(var7);
                        var7 = var7.INVALID_FORM_BODY_ERROR_CODE;
                        if(!(var8 === var7)) { _fun0009_ip = 80; continue _fun0009 }
case 85:
                        var7 = var5.body;
                        var9 = var7.errors;
                        if(!(var4 != var9)) { _fun0009_ip = 80; continue _fun0009 }
case 86:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.convertSkemaError;
                        var7 = var7.bind(var8)(var9);
                        var5['body'] = var7;
case 80:
                        var7 = _closure2_slot1;
                        var7 = var7.rejectWithError;
                        if(var7) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                        var7 = _closure2_slot3;
                        var7 = var7.bind(var2)(var5);
                        _fun0009_ip = 89; continue _fun0009;
case 87:
                        var8 = _closure1_slot11;
                        var3 = {};
                        var7 = _closure2_slot0;
                        var3['method'] = var7;
                        var7 = _closure2_slot1;
                        var7 = var7.url;
                        var3['url'] = var7;
                        var7 = var5.ok;
                        var3['ok'] = var7;
                        var7 = var5.status;
                        var3['status'] = var7;
                        var7 = var5.body;
                        var3['body'] = var7;
                        var7 = var5.text;
                        var3['text'] = var7;
                        var7 = var5.headers;
                        var3['headers'] = var7;
                        var7 = var5.retryAfter;
                        var3['retryAfter'] = var7;
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {constructor: {value: var8}});
                        var19 = var7;
                        var18 = var3;
                        var3 = new var19[var8](var18, var17);
                        var7 = var3 instanceof Object ? var3 : var7;
                        var3 = _closure2_slot3;
                        var3 = var3.bind(var2)(var7);
                        _fun0009_ip = 89; continue _fun0009;
case 78:
                        var3 = _closure2_slot2;
                        var3 = var3.bind(var2)(var5);
case 89:
                        var3 = _closure2_slot4;
                        if(!(var4 != var3)) { _fun0009_ip = 73; continue _fun0009 }
case 90:
                        var4 = _closure2_slot4;
                        var3 = {};
                        var3['hasErr'] = var6;
                        var18 = var3;
                        var17 = var5;
                        var5 = copyDataProperties(var18, var17);
                        var3 = var4.bind(var2)(var3);
case 73:
                        return var2;
case 68:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    }
                };
                var7 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure2_slot1;
                        var2 = var2.retries;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                        var6 = _closure2_slot1;
                        var2 = var6.retries;
                        var4 = parseFloat(var2);
                        var2 = var4 - 1;
                        var6['retries'] = var2;
                        var2 = 0;
                        if(!(var4 > var2)) { _fun0011_ip = 91; continue _fun0011 }
case 93:
                        var4 = var5.code;
                        var2 = 'ABORTED';
                        if(!(var2 === var4)) { _fun0011_ip = 94; continue _fun0011 }
case 91:
                        var6 = _closure1_slot21;
                        var2 = _closure2_slot1;
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var4)(var5);
                        var2 = _closure2_slot4;
                        if(!(var3 != var2)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                        var3 = _closure2_slot4;
                        var2 = {'ok': false, 'hasErr': true};
                        var2['err'] = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun0011_ip = 95; continue _fun0011;
case 94:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 95:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = var9.bind(var3)(var8, var7);
                var7 = var6.signal;
                if(!(var5 != var7)) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                var7 = var7.aborted;
                if(var7) { _fun0005_ip = 99; continue _fun0005 }
case 97:
                var7 = var6.signal;
                if(!(var5 != var7)) { _fun0005_ip = 100; continue _fun0005 }
case 101:
                var6 = var7.addEventListener;
                var5 = {};
                var5['once'] = var4;
                var4 = 'abort';
                var2 = function() {
                    var2 = _closure2_slot5;
                    var1 = var2.abort;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var6.bind(var7)(var4, var2, var5);
                _fun0005_ip = 100; continue _fun0005;
case 99:
                var2 = var3.abort;
                var2 = var2.bind(var3)();
case 100:
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function rateLimitExpirationHandler(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot12;
                var2 = var4.get;
                var4 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 == var4)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                var8 = _closure1_slot8;
                var7 = var8.verbose;
                var6 = 'rateLimitExpirationHandler: rate limit for';
                var5 = 'expired, but record was already removed';
                var5 = var7.bind(var8)(var6, var3, var5);
                _fun0012_ip = 104; continue _fun0012;
case 102:
                var5 = var4.queue;
                var4 = var5.shift;
                var4 = var4.bind(var5)();
                if(!(var2 != var4)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                var6 = _closure1_slot8;
                var5 = var6.verbose;
                var2 = 'rateLimitExpirationHandler: moving to next record for ';
                var2 = var5.bind(var6)(var2, var3);
                var2 = undefined;
                var2 = var4.bind(var2)();
                _fun0012_ip = 104; continue _fun0012;
case 105:
                var5 = _closure1_slot8;
                var4 = var5.verbose;
                var2 = 'rateLimitExpirationHandler: removing key for';
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot12;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 104:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot20 = var1;
        var1 = function cleanupRequestEntry(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var1;
                var6 = _closure1_slot12;
                var5 = var6.get;
                var4 = var1.url;
                var15 = var5.bind(var6)(var4);
                var10 = null;
                if(!(var10 != var9)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                var5 = _closure1_slot16;
                var4 = var9.status;
                var12 = undefined;
                var4 = var5.bind(var12)(var4);
                if(var4) { _fun0013_ip = 109; continue _fun0013 }
case 107:
                var4 = var10 != var15;
                if(!var4) { _fun0013_ip = 110; continue _fun0013 }
case 59:
                var6 = var15.retryAfterTimestamp;
                var5 = global;
                var7 = var5.Date;
                var5 = var7.now;
                var5 = var5.bind(var7)();
                var4 = var6 < var5;
case 110:
                if(!var4) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                var8 = _closure1_slot8;
                var7 = var8.verbose;
                var6 = var1.url;
                var5 = 'cleanupRequestEntry: rate limit for ';
                var4 = 'expired';
                var4 = var7.bind(var8)(var5, var6, var4);
                var6 = _closure1_slot20;
                var5 = var1.url;
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                _fun0013_ip = 111; continue _fun0013;
case 109:
                var5 = var10 == var15;
                var4 = undefined;
                if(var5) { _fun0013_ip = 113; continue _fun0013 }
case 21:
                var4 = var15.backoff;
case 113:
                if(!(var10 == var4)) { _fun0013_ip = 114; continue _fun0013 }
case 115:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var8 = var6.bind(var12)(var5);
                var5 = var8.prototype;
                var6 = Object.create(var5, {constructor: {value: var8}});
                var22 = 1000;
                var21 = 60000;
                var23 = var6;
                var5 = new var23[var8](var22, var21, var20);
                var4 = var5 instanceof Object ? var5 : var6;
case 114:
                var7 = _closure1_slot18;
                var6 = var9.headers;
                var5 = var9.body;
                var6 = var7.bind(var12)(var6, var5);
                var5 = var4.fail;
                var5 = var5.bind(var4)(var12, var6);
                var11 = global;
                var7 = var11.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var13 = var6 + var5;
                var7 = var4;
                if(!(var10 != var15)) { _fun0013_ip = 116; continue _fun0013 }
case 117:
                var4 = var15.retryAfterTimestamp;
                if(!(!(var4 >= var13))) { _fun0013_ip = 118; continue _fun0013 }
case 116:
                if(!(var10 != var15)) { _fun0013_ip = 119; continue _fun0013 }
case 120:
                var14 = _closure1_slot8;
                var8 = var14.verbose;
                var6 = var1.url;
                var4 = 'cleanupRequestEntry: extending rate limit for ';
                var4 = var8.bind(var14)(var4, var6);
                var6 = var11.clearTimeout;
                var4 = var15.timeoutId;
                var4 = var6.bind(var12)(var4);
case 119:
                var8 = _closure1_slot8;
                var6 = var8.verbose;
                var22 = var1.url;
                var4 = var11.HermesInternal;
                var17 = var4.concat;
                var23 = 'cleanupRequestEntry: rate limit for ';
                var21 = ' retry after ';
                var19 = 'ms';
                var20 = var5;
                var4 = var23[var17](var22, var21, var20, var19, var18);
                var4 = var6.bind(var8)(var4);
                var4 = var11.setTimeout;
                var3 = function() {
                    var3 = _closure1_slot20;
                    var1 = _closure2_slot0;
                    var2 = var1.url;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var8 = var4.bind(var12)(var3, var5);
                var6 = _closure1_slot12;
                var5 = var6.set;
                var4 = var1.url;
                var3 = {};
                var16 = var10 == var15;
                var14 = undefined;
                if(var16) { _fun0013_ip = 121; continue _fun0013 }
case 122:
                var14 = var15.queue;
case 121:
                if(!(var10 == var14)) { _fun0013_ip = 123; continue _fun0013 }
case 124:
                var14 = new Array(0);
case 123:
                var3['queue'] = var14;
                var3['retryAfterTimestamp'] = var13;
                var11 = var11.String;
                var13 = var9.body;
                var14 = var10 == var13;
                var10 = undefined;
                if(var14) { _fun0013_ip = 125; continue _fun0013 }
case 126:
                var10 = var13.message;
case 125:
                var10 = var11.bind(var12)(var10);
                var3['latestErrorMessage'] = var10;
                var9 = var9.status;
                var3['status'] = var9;
                var3['timeoutId'] = var8;
                var3['backoff'] = var7;
                var3 = var5.bind(var6)(var4, var3);
case 111:
                var3 = undefined;
                return var3;
case 118:
                var4 = _closure1_slot8;
                var3 = var4.verbose;
                var2 = var1.url;
                var1 = 'cleanupRequestEntry: already has rate limit for ';
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot21 = var1;
        var11 = function makeRateLimitedResponse(arg1, arg2, arg3) {
            var1 = {};
            var2 = arg1;
            var1['status'] = var2;
            var2 = {};
            var3 = arg2;
            var2['message'] = var3;
            var3 = arg3;
            var2['retry_after'] = var3;
            var1['body'] = var2;
            return var1;
        };
        var _closure1_slot22 = var11;
        var20 = function makeRequest(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var4 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var13 = arg1;
                    var5 = arg2;
                    var1 = _closure2_slot1;
                    var2 = 'string';
                    var1 = typeof var1;
                    if(!(var2 === var1)) { _fun0014_ip = 10; continue _fun0014 }
case 66:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var1['url'] = var2;
                    var2 = false;
                    var1['rejectWithError'] = var2;
                    _closure2_slot1 = var1;
case 10:
                    var6 = _closure1_slot12;
                    var2 = var6.get;
                    var1 = _closure2_slot1;
                    var1 = var1.url;
                    var1 = var2.bind(var6)(var1);
                    var2 = null;
                    if(!(var2 != var1)) { _fun0014_ip = 127; continue _fun0014 }
case 60:
                    var6 = _closure2_slot1;
                    var6 = var6.failImmediatelyWhenRateLimited;
                    if(var6) { _fun0014_ip = 128; continue _fun0014 }
case 127:
                    if(!(var2 == var1)) { _fun0014_ip = 129; continue _fun0014 }
case 110:
                    var10 = _closure1_slot19;
                    var19 = _closure2_slot0;
                    var18 = _closure2_slot1;
                    var15 = _closure2_slot2;
                    var20 = undefined;
                    var17 = var13;
                    var16 = var5;
                    var6 = var20[var10](var19, var18, var17, var16, var15, var14);
                    _fun0014_ip = 130; continue _fun0014;
case 129:
                    var9 = _closure1_slot8;
                    var8 = var9.verbose;
                    var6 = _closure2_slot1;
                    var7 = var6.url;
                    var6 = 'makeRequest: queueing request for ';
                    var6 = var8.bind(var9)(var6, var7);
                    var8 = var1.queue;
                    var7 = var8.push;
                    var12 = _closure1_slot19;
                    var11 = var12.bind;
                    var18 = _closure2_slot0;
                    var17 = _closure2_slot1;
                    var14 = _closure2_slot2;
                    var20 = var12;
                    var19 = null;
                    var16 = var13;
                    var15 = var5;
                    var6 = var20[var11](var19, var18, var17, var16, var15, var14, var13);
                    var6 = var7.bind(var8)(var6);
case 130:
                    var6 = undefined;
                    return var6;
case 128:
                    var3 = _closure2_slot2;
                    var8 = var1.retryAfterTimestamp;
                    var6 = global;
                    var9 = var6.Date;
                    var7 = var9.now;
                    var7 = var7.bind(var9)();
                    var9 = var8 - var7;
                    var8 = var6.Math;
                    var7 = var8.round;
                    var6 = 1000;
                    var6 = var9 / var6;
                    var8 = var7.bind(var8)(var6);
                    var7 = _closure1_slot22;
                    var6 = var1.status;
                    var4 = var1.latestErrorMessage;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var6, var4, var8);
                    var5 = var5.bind(var1)(var4);
                    if(!(var2 != var3)) { _fun0014_ip = 131; continue _fun0014 }
case 74:
                    var2 = {'ok': true, 'hasErr': false, 'status': null, 'body': null, 'text': ''};
                    var5 = var4.status;
                    var2['status'] = var5;
                    var4 = var4.body;
                    var2['body'] = var4;
                    var4 = {};
                    var2['headers'] = var4;
                    var2 = var3.bind(var1)(var2);
case 131:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2 = function encodeProperties(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
case 132: // try_start_0
                var4 = global;
                var3 = var4.Buffer;
                var2 = var3.from;
                var5 = var4.JSON;
                var4 = var5.stringify;
                var1 = var4.bind(var5)(var1);
                var3 = var2.bind(var3)(var1);
                var2 = var3.toString;
                var1 = 'base64';
                var1 = var2.bind(var3)(var1);
case 67: // try_end0
                return var1;
case 133: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot23 = var2;
        var5 = global;
        var9 = var5.Object;
        var8 = var9.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var6);
        var1 = 0;
        var6 = var19[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var19[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var19[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot5 = var6;
        var6 = 3;
        var6 = var19[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot6 = var6;
        var6 = 4;
        var6 = var19[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot7 = var6;
        var15 = 5;
        var6 = var19[var15];
        var7 = var7.bind(var1)(var6);
        var6 = 6;
        var6 = var19[var6];
        var6 = var18.bind(var1)(var6);
        var9 = var6.Logger;
        var6 = var9.prototype;
        var8 = Object.create(var6, {constructor: {value: var9}});
        var24 = 'HTTPUtils';
        var25 = var8;
        var6 = new var25[var9](var24, var23);
        var6 = var6 instanceof Object ? var6 : var8;
        var _closure1_slot8 = var6;
        var9 = var5.Set;
        var6 = var9.prototype;
        var8 = Object.create(var6, {constructor: {value: var9}});
        var24 = [502, 504, 507, 598, 599, 522, 523, 524];
        var25 = var8;
        var6 = new var25[var9](var24, var23);
        var6 = var6 instanceof Object ? var6 : var8;
        var _closure1_slot9 = var6;
        var9 = var5.Set;
        var6 = var9.prototype;
        var8 = Object.create(var6, {constructor: {value: var9}});
        var24 = [429, 503];
        var25 = var8;
        var6 = new var25[var9](var24, var23);
        var6 = var6 instanceof Object ? var6 : var8;
        var _closure1_slot10 = var6;
        var6 = var5.Error;
        var7 = var7.bind(var1)(var6);
        var6 = function(arg1) {
            var3 = function HTTPResponseError(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var1 = arg1;
                    var12 = this;
                    var9 = var1.method;
                    var8 = var1.url;
                    var7 = var1.ok;
                    var6 = var1.status;
                    var5 = var1.body;
                    var4 = var1.text;
                    var3 = var1.headers;
                    var2 = var1.retryAfter;
                    var15 = 1;
                    var28 = var15;
                    var1 = copyRestArgs(var28);
                    var14 = _closure1_slot4;
                    var10 = _closure2_slot0;
                    var11 = undefined;
                    var14 = var14.bind(var11)(var12, var10);
                    var17 = var8.replace;
                    var16 = /\d+/g;
                    var14 = 'xxx';
                    var26 = var17.bind(var8)(var16, var14);
                    var14 = var9.toUpperCase;
                    var28 = var14.bind(var9)();
                    var14 = global;
                    var16 = var14.HermesInternal;
                    var20 = var16.concat;
                    var29 = '';
                    var27 = ' ';
                    var25 = ' [';
                    var23 = ']';
                    var24 = var6;
                    var16 = var29[var20](var28, var27, var26, var25, var24, var23, var22);
                    var17 = new Array(1);
                    var17[0] = var16;
                    var28 = var17;
                    var27 = var1;
                    var26 = var15;
                    var1 = arraySpread(var28, var27, var26);
                    var1 = _closure1_slot6;
                    var16 = var1.bind(var11)(var10);
                    var10 = _closure1_slot5;
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var11)();
                    if(var1) { _fun0016_ip = 134; continue _fun0016 }
case 135:
                    var1 = var16.apply;
                    var1 = var1.bind(var16)(var12, var17);
                    _fun0016_ip = 136; continue _fun0016;
case 134:
                    var15 = var14.Reflect;
                    var14 = var15.construct;
                    var13 = _closure1_slot6;
                    var13 = var13.bind(var11)(var12);
                    var13 = var13.constructor;
                    var1 = var14.bind(var15)(var16, var17, var13);
case 136:
                    var1 = var10.bind(var11)(var12, var1);
                    var10 = 'HTTPResponseError';
                    var1['name'] = var10;
                    var1['method'] = var9;
                    var1['url'] = var8;
                    var1['ok'] = var7;
                    var1['status'] = var6;
                    var1['body'] = var5;
                    var1['text'] = var4;
                    var1['headers'] = var3;
                    var1['retryAfter'] = var2;
                    return var1;
                }
            };
            var _closure2_slot0 = var3;
            var5 = _closure1_slot7;
            var2 = undefined;
            var4 = arg1;
            var4 = var5.bind(var2)(var3, var4);
            var1 = _closure1_slot3;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var14 = var6.bind(var1)(var7);
        var _closure1_slot11 = var14;
        var5 = var5.Map;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var25 = var6;
        var5 = new var25[var5](var24);
        var5 = var5 instanceof Object ? var5 : var6;
        var _closure1_slot12 = var5;
        var6 = var20.bind;
        var17 = null;
        var5 = 'get';
        var10 = var6.bind(var20)(var17, var5);
        var6 = var20.bind;
        var5 = 'post';
        var9 = var6.bind(var20)(var17, var5);
        var6 = var20.bind;
        var5 = 'put';
        var8 = var6.bind(var20)(var17, var5);
        var6 = var20.bind;
        var5 = 'patch';
        var7 = var6.bind(var20)(var17, var5);
        var6 = var20.bind;
        var5 = 'del';
        var6 = var6.bind(var20)(var17, var5);
        var5 = {};
        var5['get'] = var10;
        var5['post'] = var9;
        var5['put'] = var8;
        var5['patch'] = var7;
        var5['del'] = var6;
        var20 = global;
        var20 = var20.isServerRendering;
        if(!var20) { _fun0001_ip = 137; continue _fun0001 }
case 55:
        var10 = function noop() {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = {'ok': true, 'status': 200, 'headers': null, 'body': null, 'text': ''};
            var4 = {};
            var1['headers'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var10;
        var8 = var9;
        var7 = var8;
        var6 = var7;
case 137:
        var _closure1_slot13 = var17;
        var17 = function awaitOnline() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var _closure1_slot14 = var17;
        var17 = 11;
        var17 = var19[var17];
        var21 = var18.bind(var1)(var17);
        var20 = var21.fileFinishedImporting;
        var17 = '../discord_common/js/packages/http-utils/HTTPUtils.tsx';
        var17 = var20.bind(var21)(var17);
        var17 = 9;
        var20 = var19[var17];
        var20 = var18.bind(var1)(var20);
        var20 = var20.INVALID_FORM_BODY_ERROR_CODE;
        var3['INVALID_FORM_BODY_ERROR_CODE'] = var20;
        var20 = 10;
        var20 = var19[var20];
        var20 = var18.bind(var1)(var20);
        var20 = var20.convertSkemaError;
        var3['convertSkemaError'] = var20;
        var20 = 12;
        var20 = var19[var20];
        var20 = var18.bind(var1)(var20);
        var20 = var20.stringifyErrors;
        var3['stringifyErrors'] = var20;
        var20 = 13;
        var20 = var19[var20];
        var20 = var18.bind(var1)(var20);
        var20 = var20.APIError;
        var3['V6OrEarlierAPIError'] = var20;
        var17 = var19[var17];
        var17 = var18.bind(var1)(var17);
        var17 = var17.APIError;
        var3['V8APIError'] = var17;
        var3['isRateLimitedStatus'] = var16;
        var3['DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS'] = var15;
        var3['HTTPResponseError'] = var14;
        var3['parseRetryAfter'] = var13;
        var3['getRateLimitFloorMs'] = var12;
        var3['makeRateLimitedResponse'] = var11;
        var3['get'] = var10;
        var3['post'] = var9;
        var3['put'] = var8;
        var3['patch'] = var7;
        var3['del'] = var6;
        var3['HTTP'] = var5;
        var5 = function getAPIBaseURL() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0017_ip = 138; continue _fun0017 }
case 139:
                var4 = true;
case 138:
                var3 = global;
                var1 = var3.window;
                var1 = var1.GLOBAL_ENV;
                var2 = var1.API_ENDPOINT;
                var1 = 'https:';
                var2 = var1 + var2;
                var1 = '';
                if(!var4) { _fun0017_ip = 140; continue _fun0017 }
case 141:
                var4 = var3.window;
                var4 = var4.GLOBAL_ENV;
                var5 = var4.API_VERSION;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '/v';
                var1 = var4.bind(var3)(var5);
case 140:
                var1 = var2 + var1;
                return var1;
            }
        };
        var3['getAPIBaseURL'] = var5;
        var5 = function setRequestPatch(arg1) {
            var1 = arg1;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
        };
        var3['setRequestPatch'] = var5;
        var4 = function setAwaitOnline(arg1) {
            var1 = arg1;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        };
        var3['setAwaitOnline'] = var4;
        var3['encodeProperties'] = var2;
        return var1;
    }
})();