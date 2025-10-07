// discord_common/js/packages/http-utils/HTTPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var13 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var14 = dependencyMap;
        var _closure1_slot0 = var13;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var14;
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
                _closure1_slot14 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function sendRequest(arg1, arg2, arg3, arg4, arg5) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var5 = arg2;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var5;
                var1 = arg3;
                var _closure2_slot2 = var1;
                var1 = arg4;
                var _closure2_slot3 = var1;
                var1 = arg5;
                var _closure2_slot4 = var1;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var4);
                var4 = var7[var3];
                var3 = var5.url;
                var3 = var4.bind(var7)(var3);
                var _closure2_slot5 = var3;
                var7 = var5.onRequestCreated;
                var4 = null;
                if(!(var4 != var7)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var7 = var5.onRequestCreated;
                var7 = var7.bind(var5)(var3);
case 6:
                var7 = var5.query;
                if(!(var4 != var7)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var9 = var5.query;
                var10 = 'object';
                var7 = typeof var9;
                var8 = var9;
                if(!(var10 === var7)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var7 = {};
                var14 = var7;
                var13 = var9;
                var9 = copyDataProperties(var14, var13);
                var _closure2_slot6 = var7;
                var9 = global;
                var10 = var9.Object;
                var9 = var10.keys;
                var11 = var9.bind(var10)(var7);
                var10 = var11.map;
                var9 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure2_slot6;
                        var4 = var3[var2];
                        var3 = null;
                        if(!(var3 == var4)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                        var1 = _closure2_slot6;
                        var1 = delete var1[var2];
case 12:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9 = var10.bind(var11)(var9);
                var8 = var7;
case 10:
                var7 = var3.query;
                var7 = var7.bind(var3)(var8);
case 8:
                var7 = var5.body;
                if(!var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var8 = var3.send;
                var7 = var5.body;
                var7 = var8.bind(var3)(var7);
case 14:
                var7 = var5.headers;
                if(!(var4 != var7)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var8 = var3.set;
                var7 = var5.headers;
                var7 = var8.bind(var3)(var7);
case 16:
                var7 = var5.reason;
                if(!(var4 != var7)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var9 = var3.set;
                var7 = global;
                var8 = var7.encodeURIComponent;
                var7 = var5.reason;
                var8 = var8.bind(var1)(var7);
                var7 = 'X-Audit-Log-Reason';
                var7 = var9.bind(var3)(var7, var8);
case 18:
                var9 = var5.attachments;
                if(!(var4 != var9)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var8 = var9.forEach;
                var7 = function(arg1) {
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
                var7 = var8.bind(var9)(var7);
case 20:
                var9 = var5.fields;
                if(!(var4 != var9)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var8 = var9.forEach;
                var7 = function(arg1) {
                    var1 = arg1;
                    var4 = _closure2_slot5;
                    var3 = var4.field;
                    var2 = var1.name;
                    var1 = var1.value;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
case 22:
                var7 = var5.context;
                if(!(var4 != var7)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var8 = _closure1_slot18;
                var7 = var5.context;
                var9 = var8.bind(var1)(var7);
                if(!(var4 != var9)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
                var8 = var3.set;
                var7 = 'X-Context-Properties';
                var7 = var8.bind(var3)(var7, var9);
case 24:
                var7 = var5.retried;
                var7 = var4 != var7;
                if(!var7) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                var9 = var5.retried;
                var8 = 0;
                var7 = var8 !== var9;
case 27:
                if(!var7) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var9 = var3.set;
                var10 = var5.retried;
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = '';
                var8 = var8.bind(var7)(var10);
                var7 = 'X-Failed-Requests';
                var7 = var9.bind(var3)(var7, var8);
case 29:
                var7 = var5.timeout;
                var7 = var4 != var7;
                if(!var7) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var9 = var5.timeout;
                var8 = 0;
                var7 = var8 !== var9;
case 31:
                if(!var7) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                var8 = var3.timeout;
                var7 = var5.timeout;
                var7 = var8.bind(var3)(var7);
case 33:
                var7 = var5.binary;
                if(!var7) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                var8 = var3.responseType;
                var7 = 'blob';
                var7 = var8.bind(var3)(var7);
case 35:
                var7 = var5.onRequestProgress;
                if(!(var4 != var7)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                var9 = var3.on;
                var8 = 'progress';
                var7 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var3 = var2.onRequestProgress;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var3 = _closure2_slot1;
                        var2 = var3.onRequestProgress;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 39:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = var9.bind(var3)(var8, var7);
case 37:
                var7 = function retry() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = var3.backoff;
                        var4 = null;
                        if(!(var4 == var2)) { _fun0006_ip = 41; continue _fun0006 }
case 40:
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
                        _fun0006_ip = 42; continue _fun0006;
case 41:
                        var5 = _closure2_slot1;
                        var2 = var5.backoff;
case 42:
                        var3['backoff'] = var2;
                        var3 = _closure2_slot1;
                        var2 = var3.retried;
                        var2 = var4 != var2;
                        var4 = 0;
                        if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var2 = _closure2_slot1;
                        var4 = var2.retried;
case 43:
                        var2 = 1;
                        var2 = var4 + var2;
                        var3['retried'] = var2;
                        var1 = _closure2_slot1;
                        var3 = var1.backoff;
                        var2 = var3.fail;
                        var1 = function() {
                            var3 = _closure1_slot13;
                            var1 = _closure2_slot1;
                            var2 = var1.url;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.then;
                            var1 = function() {
                                var7 = _closure1_slot15;
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
                var _closure2_slot7 = var7;
                var7 = _closure1_slot12;
                var6 = var4 == var7;
                if(var6) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var8 = var7.prepareRequest;
                var6 = var4 == var8;
case 45:
                if(var6) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                var6 = var7.prepareRequest;
                var6 = var6.bind(var7)(var3);
case 47:
                var7 = var3.ok;
                var6 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.status;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var6 = var7.bind(var3)(var6);
                var8 = var3.then;
                var7 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var7 = arg1;
                        var2 = _closure2_slot1;
                        var2 = var2.retries;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                        var5 = _closure2_slot1;
                        var2 = var5.retries;
                        var3 = parseFloat(var2);
                        var2 = var3 - 1;
                        var5['retries'] = var2;
                        var2 = 0;
                        if(!(var3 > var2)) { _fun0007_ip = 49; continue _fun0007 }
case 51:
                        var5 = _closure1_slot9;
                        var3 = var5.has;
                        var2 = var7.status;
                        var2 = var3.bind(var5)(var2);
                        if(var2) { _fun0007_ip = 52; continue _fun0007 }
case 49:
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
                        var6 = _closure1_slot17;
                        var8 = _closure2_slot1;
                        var2 = undefined;
                        var6 = var6.bind(var2)(var8, var5);
                        var6 = false;
                        var _closure3_slot0 = var6;
                        var13 = function interceptRetry(arg1, arg2) {
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
                            var7[var2] = var3;
                            var3 = arg2;
                            var2 = 'interceptResponse';
                            var7[var2] = var3;
                            var2 = true;
                            _closure3_slot0 = var2;
                            var6 = _closure1_slot15;
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
                        var12 = function interceptCancel(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var4 = arg1;
                                var1 = _closure3_slot0;
                                if(var1) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                                var2 = _closure2_slot3;
                                var3 = undefined;
                                var2 = var2.bind(var3)(var4);
                                var5 = _closure2_slot4;
                                var2 = null;
                                if(!(var2 != var5)) { _fun0008_ip = 53; continue _fun0008 }
case 39:
                                var2 = _closure2_slot4;
                                var1 = {'ok': false, 'hasErr': true};
                                var1['err'] = var4;
                                var1 = var2.bind(var3)(var1);
case 53:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var9 = var4 == var8;
                        var8 = undefined;
                        if(var9) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var9 = _closure2_slot1;
                        var9 = var9.interceptResponse;
                        var9 = var4 == var9;
                        var8 = undefined;
                        if(var9) { _fun0007_ip = 55; continue _fun0007 }
case 57:
                        var10 = _closure2_slot1;
                        var9 = var10.interceptResponse;
                        var8 = var9.bind(var10)(var7, var13, var12);
case 55:
                        var9 = true;
                        if(!(var9 !== var8)) { _fun0007_ip = 58; continue _fun0007 }
case 14:
                        var11 = _closure1_slot12;
                        var10 = var4 == var11;
                        var8 = undefined;
                        if(var10) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                        var10 = var11.interceptResponse;
                        var10 = var4 == var10;
                        var8 = undefined;
                        if(var10) { _fun0007_ip = 59; continue _fun0007 }
case 61:
                        var10 = var11.interceptResponse;
                        var8 = var10.bind(var11)(var7, var13, var12);
case 59:
                        if(!(var9 !== var8)) { _fun0007_ip = 58; continue _fun0007 }
case 62:
                        var7 = var7.ok;
                        if(var7) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                        var7 = _closure2_slot1;
                        var7 = var7.oldFormErrors;
                        if(!var7) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                        var7 = var4 == var5;
                        var8 = undefined;
                        if(var7) { _fun0007_ip = 67; continue _fun0007 }
case 21:
                        var7 = var5.body;
                        var9 = var4 == var7;
                        var8 = undefined;
                        if(var9) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                        var8 = var7.code;
case 67:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var7 = var9.bind(var2)(var7);
                        var7 = var7.INVALID_FORM_BODY_ERROR_CODE;
                        if(!(var8 === var7)) { _fun0007_ip = 65; continue _fun0007 }
case 25:
                        var7 = var5.body;
                        var9 = var7.errors;
                        if(!(var4 != var9)) { _fun0007_ip = 65; continue _fun0007 }
case 69:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.convertSkemaError;
                        var7 = var7.bind(var8)(var9);
                        var5['body'] = var7;
case 65:
                        var7 = _closure2_slot1;
                        var7 = var7.rejectWithError;
                        if(var7) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                        var7 = _closure2_slot3;
                        var7 = var7.bind(var2)(var5);
                        _fun0007_ip = 72; continue _fun0007;
case 70:
                        var8 = _closure1_slot10;
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
                        var7 = var8.prototype;
                        var7 = Object.create(var7, {constructor: {value: var8}});
                        var17 = var7;
                        var16 = var3;
                        var3 = new var17[var8](var16, var15);
                        var7 = var3 instanceof Object ? var3 : var7;
                        var3 = _closure2_slot3;
                        var3 = var3.bind(var2)(var7);
                        _fun0007_ip = 72; continue _fun0007;
case 63:
                        var3 = _closure2_slot2;
                        var3 = var3.bind(var2)(var5);
case 72:
                        var3 = _closure2_slot4;
                        if(!(var4 != var3)) { _fun0007_ip = 58; continue _fun0007 }
case 73:
                        var4 = _closure2_slot4;
                        var3 = {};
                        var3['hasErr'] = var6;
                        var16 = var3;
                        var15 = var5;
                        var5 = copyDataProperties(var16, var15);
                        var3 = var4.bind(var2)(var3);
case 58:
                        return var2;
case 52:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    }
                };
                var6 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var5 = arg1;
                        var2 = _closure2_slot1;
                        var2 = var2.retries;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                        var6 = _closure2_slot1;
                        var2 = var6.retries;
                        var4 = parseFloat(var2);
                        var2 = var4 - 1;
                        var6['retries'] = var2;
                        var2 = 0;
                        if(!(var4 > var2)) { _fun0009_ip = 74; continue _fun0009 }
case 76:
                        var4 = var5.code;
                        var2 = 'ABORTED';
                        if(!(var2 === var4)) { _fun0009_ip = 77; continue _fun0009 }
case 74:
                        var6 = _closure1_slot17;
                        var2 = _closure2_slot1;
                        var4 = undefined;
                        var2 = var6.bind(var4)(var2);
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var4)(var5);
                        var2 = _closure2_slot4;
                        if(!(var3 != var2)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                        var3 = _closure2_slot4;
                        var2 = {'ok': false, 'hasErr': true};
                        var2['err'] = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun0009_ip = 78; continue _fun0009;
case 77:
                        var2 = _closure2_slot7;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 78:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var8.bind(var3)(var7, var6);
                var6 = var5.signal;
                if(!(var4 != var6)) { _fun0003_ip = 80; continue _fun0003 }
case 81:
                var6 = var6.aborted;
                if(var6) { _fun0003_ip = 82; continue _fun0003 }
case 80:
                var7 = var5.signal;
                if(!(var4 != var7)) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                var6 = var7.addEventListener;
                var5 = {};
                var4 = true;
                var5['once'] = var4;
                var4 = 'abort';
                var2 = function() {
                    var2 = _closure2_slot5;
                    var1 = var2.abort;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = var6.bind(var7)(var4, var2, var5);
                _fun0003_ip = 83; continue _fun0003;
case 82:
                var2 = var3.abort;
                var2 = var2.bind(var3)();
case 83:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var1 = function rateLimitExpirationHandler(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot11;
                var2 = var4.get;
                var4 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 == var4)) { _fun0010_ip = 85; continue _fun0010 }
case 86:
                var8 = _closure1_slot8;
                var7 = var8.verbose;
                var6 = 'rateLimitExpirationHandler: rate limit for';
                var5 = 'expired, but record was already removed';
                var5 = var7.bind(var8)(var6, var3, var5);
                _fun0010_ip = 87; continue _fun0010;
case 85:
                var5 = var4.queue;
                var4 = var5.shift;
                var4 = var4.bind(var5)();
                if(!(var2 != var4)) { _fun0010_ip = 88; continue _fun0010 }
case 89:
                var6 = _closure1_slot8;
                var5 = var6.verbose;
                var2 = 'rateLimitExpirationHandler: moving to next record for ';
                var2 = var5.bind(var6)(var2, var3);
                var2 = undefined;
                var2 = var4.bind(var2)();
                _fun0010_ip = 87; continue _fun0010;
case 88:
                var5 = _closure1_slot8;
                var4 = var5.verbose;
                var2 = 'rateLimitExpirationHandler: removing key for';
                var2 = var4.bind(var5)(var2, var3);
                var2 = _closure1_slot11;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 87:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot16 = var1;
        var1 = function cleanupRequestEntry(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var1;
                var6 = _closure1_slot11;
                var5 = var6.get;
                var4 = var1.url;
                var12 = var5.bind(var6)(var4);
                var6 = null;
                if(!(var6 != var9)) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                var5 = var9.status;
                var4 = 429;
                if(!(var4 !== var5)) { _fun0011_ip = 92; continue _fun0011 }
case 90:
                var4 = var6 != var12;
                if(!var4) { _fun0011_ip = 93; continue _fun0011 }
case 94:
                var7 = var12.retryAfterTimestamp;
                var5 = global;
                var8 = var5.Date;
                var5 = var8.now;
                var5 = var5.bind(var8)();
                var4 = var7 < var5;
case 93:
                if(!var4) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                var10 = _closure1_slot8;
                var8 = var10.verbose;
                var7 = var1.url;
                var5 = 'cleanupRequestEntry: rate limit for ';
                var4 = 'expired';
                var4 = var8.bind(var10)(var5, var7, var4);
                var7 = _closure1_slot16;
                var5 = var1.url;
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                _fun0011_ip = 95; continue _fun0011;
case 92:
                var4 = var9.body;
                var5 = var6 == var4;
                var8 = undefined;
                var11 = undefined;
                if(var5) { _fun0011_ip = 97; continue _fun0011 }
case 98:
                var11 = var4.retry_after;
case 97:
                if(var11) { _fun0011_ip = 99; continue _fun0011 }
case 56:
                var11 = 5;
case 99:
                var7 = global;
                var5 = var7.Date;
                var4 = var5.now;
                var10 = var4.bind(var5)();
                var4 = 1000;
                var5 = var4 * var11;
                var10 = var10 + var5;
                if(!(var6 != var12)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                var5 = var12.retryAfterTimestamp;
                if(!(!(var5 < var10))) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                var15 = _closure1_slot8;
                var14 = var15.verbose;
                var13 = var1.url;
                var5 = 'cleanupRequestEntry: already has rate limit for ';
                var5 = var14.bind(var15)(var5, var13);
                var5 = undefined;
                return var5;
case 102:
                var15 = _closure1_slot8;
                var14 = var15.verbose;
                var13 = var1.url;
                var5 = 'cleanupRequestEntry: extending rate limit for ';
                var5 = var14.bind(var15)(var5, var13);
                var13 = var7.clearTimeout;
                var5 = var12.timeoutId;
                var5 = var13.bind(var8)(var5);
case 100:
                var14 = _closure1_slot8;
                var13 = var14.verbose;
                var22 = var1.url;
                var5 = var7.HermesInternal;
                var17 = var5.concat;
                var23 = 'cleanupRequestEntry: rate limit for ';
                var21 = ' retry after ';
                var19 = ' seconds';
                var20 = var11;
                var5 = var23[var17](var22, var21, var20, var19, var18);
                var5 = var13.bind(var14)(var5);
                var5 = var7.setTimeout;
                var4 = var4 * var11;
                var3 = function() {
                    var3 = _closure1_slot16;
                    var1 = _closure2_slot0;
                    var2 = var1.url;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var5.bind(var8)(var3, var4);
                var4 = _closure1_slot11;
                var3 = var4.set;
                var2 = var1.url;
                var1 = {};
                var13 = var6 == var12;
                var11 = undefined;
                if(var13) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                var11 = var12.queue;
case 104:
                if(!(var6 == var11)) { _fun0011_ip = 30; continue _fun0011 }
case 106:
                var11 = new Array(0);
case 30:
                var1['queue'] = var11;
                var1['retryAfterTimestamp'] = var10;
                var7 = var7.String;
                var9 = var9.body;
                var10 = var6 == var9;
                var6 = undefined;
                if(var10) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                var6 = var9.message;
case 107:
                var6 = var7.bind(var8)(var6);
                var1['latestErrorMessage'] = var6;
                var1['timeoutId'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 95:
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot17 = var1;
        var15 = function makeRequest(arg1, arg2, arg3) {
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var12 = arg1;
                    var7 = arg2;
                    var2 = _closure2_slot1;
                    var3 = 'string';
                    var2 = typeof var2;
                    if(!(var3 === var2)) { _fun0012_ip = 109; continue _fun0012 }
case 50:
                    var2 = {};
                    var3 = _closure2_slot1;
                    var2['url'] = var3;
                    var3 = false;
                    var2['rejectWithError'] = var3;
                    _closure2_slot1 = var2;
case 109:
                    var5 = _closure1_slot11;
                    var4 = var5.get;
                    var2 = _closure2_slot1;
                    var2 = var2.url;
                    var6 = var4.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0012_ip = 93; continue _fun0012 }
case 42:
                    var4 = _closure2_slot1;
                    var4 = var4.failImmediatelyWhenRateLimited;
                    if(var4) { _fun0012_ip = 110; continue _fun0012 }
case 93:
                    if(!(var2 == var6)) { _fun0012_ip = 111; continue _fun0012 }
case 112:
                    var10 = _closure1_slot15;
                    var18 = _closure2_slot0;
                    var17 = _closure2_slot1;
                    var14 = _closure2_slot2;
                    var19 = undefined;
                    var16 = var12;
                    var15 = var7;
                    var4 = var19[var10](var18, var17, var16, var15, var14, var13);
                    _fun0012_ip = 113; continue _fun0012;
case 111:
                    var9 = _closure1_slot8;
                    var8 = var9.verbose;
                    var4 = _closure2_slot1;
                    var5 = var4.url;
                    var4 = 'makeRequest: queueing request for ';
                    var4 = var8.bind(var9)(var4, var5);
                    var5 = var6.queue;
                    var4 = var5.push;
                    var11 = _closure1_slot15;
                    var10 = var11.bind;
                    var17 = _closure2_slot0;
                    var16 = _closure2_slot1;
                    var13 = _closure2_slot2;
                    var19 = var11;
                    var18 = null;
                    var15 = var12;
                    var14 = var7;
                    var3 = var19[var10](var18, var17, var16, var15, var14, var13, var12);
                    var3 = var4.bind(var5)(var3);
case 113:
                    var3 = undefined;
                    return var3;
case 110:
                    var3 = _closure2_slot2;
                    var5 = var6.retryAfterTimestamp;
                    var1 = global;
                    var8 = var1.Date;
                    var4 = var8.now;
                    var4 = var4.bind(var8)();
                    var8 = var5 - var4;
                    var5 = var1.Math;
                    var4 = var5.round;
                    var1 = 1000;
                    var1 = var8 / var1;
                    var5 = var4.bind(var5)(var1);
                    var4 = {};
                    var1 = 429;
                    var4['status'] = var1;
                    var1 = {};
                    var8 = var6.latestErrorMessage;
                    var1['message'] = var8;
                    var1['retry_after'] = var5;
                    var4['body'] = var1;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    if(!(var2 != var3)) { _fun0012_ip = 114; continue _fun0012 }
case 115:
                    var2 = {'ok': true, 'hasErr': false, 'status': 429, 'body': null, 'text': ''};
                    var4 = {};
                    var6 = var6.latestErrorMessage;
                    var4['message'] = var6;
                    var4['retry_after'] = var5;
                    var2['body'] = var4;
                    var4 = {};
                    var2['headers'] = var4;
                    var2 = var3.bind(var1)(var2);
case 114:
                    return var1;
                }
            };
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var2 = function encodeProperties(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
case 116: // try_start_0
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
case 51: // try_end0
                return var1;
case 117: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot18 = var2;
        var5 = global;
        var9 = var5.Object;
        var8 = var9.defineProperty;
        var6 = {};
        var1 = true;
        var6['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var6);
        var1 = 0;
        var6 = var14[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var _closure1_slot3 = var6;
        var6 = 1;
        var6 = var14[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot4 = var6;
        var6 = 2;
        var6 = var14[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot5 = var6;
        var6 = 3;
        var6 = var14[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot6 = var6;
        var6 = 4;
        var6 = var14[var6];
        var6 = var7.bind(var1)(var6);
        var _closure1_slot7 = var6;
        var6 = 5;
        var6 = var14[var6];
        var7 = var7.bind(var1)(var6);
        var6 = 6;
        var6 = var14[var6];
        var6 = var13.bind(var1)(var6);
        var9 = var6.Logger;
        var6 = var9.prototype;
        var8 = Object.create(var6, {constructor: {value: var9}});
        var19 = 'HTTPUtils';
        var20 = var8;
        var6 = new var20[var9](var19, var18);
        var6 = var6 instanceof Object ? var6 : var8;
        var _closure1_slot8 = var6;
        var9 = var5.Set;
        var6 = var9.prototype;
        var8 = Object.create(var6, {constructor: {value: var9}});
        var19 = [502, 504, 507, 598, 599, 522, 523, 524];
        var20 = var8;
        var6 = new var20[var9](var19, var18);
        var6 = var6 instanceof Object ? var6 : var8;
        var _closure1_slot9 = var6;
        var6 = var5.Error;
        var7 = var7.bind(var1)(var6);
        var6 = function(arg1) {
            var3 = function HTTPResponseError(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var11 = this;
                    var8 = var1.method;
                    var7 = var1.url;
                    var6 = var1.ok;
                    var5 = var1.status;
                    var4 = var1.body;
                    var3 = var1.text;
                    var2 = var1.headers;
                    var14 = 1;
                    var27 = var14;
                    var1 = copyRestArgs(var27);
                    var13 = _closure1_slot4;
                    var9 = _closure2_slot0;
                    var10 = undefined;
                    var13 = var13.bind(var10)(var11, var9);
                    var16 = var7.replace;
                    var15 = /\d+/g;
                    var13 = 'xxx';
                    var25 = var16.bind(var7)(var15, var13);
                    var13 = var8.toUpperCase;
                    var27 = var13.bind(var8)();
                    var13 = global;
                    var15 = var13.HermesInternal;
                    var19 = var15.concat;
                    var28 = '';
                    var26 = ' ';
                    var24 = ' [';
                    var22 = ']';
                    var23 = var5;
                    var15 = var28[var19](var27, var26, var25, var24, var23, var22, var21);
                    var16 = new Array(1);
                    var16[0] = var15;
                    var27 = var16;
                    var26 = var1;
                    var25 = var14;
                    var1 = arraySpread(var27, var26, var25);
                    var1 = _closure1_slot6;
                    var15 = var1.bind(var10)(var9);
                    var9 = _closure1_slot5;
                    var1 = _closure1_slot14;
                    var1 = var1.bind(var10)();
                    if(var1) { _fun0014_ip = 101; continue _fun0014 }
case 118:
                    var1 = var15.apply;
                    var1 = var1.bind(var15)(var11, var16);
                    _fun0014_ip = 119; continue _fun0014;
case 101:
                    var14 = var13.Reflect;
                    var13 = var14.construct;
                    var12 = _closure1_slot6;
                    var12 = var12.bind(var10)(var11);
                    var12 = var12.constructor;
                    var1 = var13.bind(var14)(var15, var16, var12);
case 119:
                    var1 = var9.bind(var10)(var11, var1);
                    var9 = 'HTTPResponseError';
                    var1['name'] = var9;
                    var1['method'] = var8;
                    var1['url'] = var7;
                    var1['ok'] = var6;
                    var1['status'] = var5;
                    var1['body'] = var4;
                    var1['text'] = var3;
                    var1['headers'] = var2;
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
        var11 = var6.bind(var1)(var7);
        var _closure1_slot10 = var11;
        var5 = var5.Map;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var20 = var6;
        var5 = new var20[var5](var19);
        var5 = var5 instanceof Object ? var5 : var6;
        var _closure1_slot11 = var5;
        var6 = var15.bind;
        var12 = null;
        var5 = 'get';
        var10 = var6.bind(var15)(var12, var5);
        var6 = var15.bind;
        var5 = 'post';
        var9 = var6.bind(var15)(var12, var5);
        var6 = var15.bind;
        var5 = 'put';
        var8 = var6.bind(var15)(var12, var5);
        var6 = var15.bind;
        var5 = 'patch';
        var7 = var6.bind(var15)(var12, var5);
        var6 = var15.bind;
        var5 = 'del';
        var6 = var6.bind(var15)(var12, var5);
        var5 = {};
        var5['get'] = var10;
        var5['post'] = var9;
        var5['put'] = var8;
        var5['patch'] = var7;
        var5['del'] = var6;
        var15 = global;
        var15 = var15.isServerRendering;
        if(!var15) { _fun0001_ip = 120; continue _fun0001 }
case 29:
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
case 120:
        var _closure1_slot12 = var12;
        var12 = function awaitOnline() {
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.resolve;
            var1 = var1.bind(var2)();
            return var1;
        };
        var _closure1_slot13 = var12;
        var12 = 11;
        var12 = var14[var12];
        var16 = var13.bind(var1)(var12);
        var15 = var16.fileFinishedImporting;
        var12 = '../discord_common/js/packages/http-utils/HTTPUtils.tsx';
        var12 = var15.bind(var16)(var12);
        var12 = 9;
        var15 = var14[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.INVALID_FORM_BODY_ERROR_CODE;
        var3['INVALID_FORM_BODY_ERROR_CODE'] = var15;
        var15 = 10;
        var15 = var14[var15];
        var15 = var13.bind(var1)(var15);
        var15 = var15.convertSkemaError;
        var3['convertSkemaError'] = var15;
        var15 = 12;
        var15 = var14[var15];
        var15 = var13.bind(var1)(var15);
        var15 = var15.stringifyErrors;
        var3['stringifyErrors'] = var15;
        var15 = 13;
        var15 = var14[var15];
        var15 = var13.bind(var1)(var15);
        var15 = var15.APIError;
        var3['V6OrEarlierAPIError'] = var15;
        var12 = var14[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.APIError;
        var3['V8APIError'] = var12;
        var3['HTTPResponseError'] = var11;
        var3['get'] = var10;
        var3['post'] = var9;
        var3['put'] = var8;
        var3['patch'] = var7;
        var3['del'] = var6;
        var3['HTTP'] = var5;
        var5 = function getAPIBaseURL() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var4 = arguments[0];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0015_ip = 121; continue _fun0015 }
case 122:
                var4 = true;
case 121:
                var3 = global;
                var1 = var3.window;
                var1 = var1.GLOBAL_ENV;
                var2 = var1.API_ENDPOINT;
                var1 = 'https:';
                var2 = var1 + var2;
                var1 = '';
                if(!var4) { _fun0015_ip = 123; continue _fun0015 }
case 124:
                var4 = var3.window;
                var4 = var4.GLOBAL_ENV;
                var5 = var4.API_VERSION;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = '/v';
                var1 = var4.bind(var3)(var5);
case 123:
                var1 = var2 + var1;
                return var1;
            }
        };
        var3['getAPIBaseURL'] = var5;
        var5 = function setRequestPatch(arg1) {
            var1 = arg1;
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
        };
        var3['setRequestPatch'] = var5;
        var4 = function setAwaitOnline(arg1) {
            var1 = arg1;
            _closure1_slot13 = var1;
            var1 = undefined;
            return var1;
        };
        var3['setAwaitOnline'] = var4;
        var3['encodeProperties'] = var2;
        return var1;
    }
})();