// discord_common/js/packages/http-utils/V8APIError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function convertStringArrayToSkemaErrorItems(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = {};
            var2 = 'UNKNOWN';
            var1['code'] = var2;
            var2 = arg1;
            var1['message'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function convertOldFormError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = arg1;
            var10 = var3.bind(var4)(var2);
            var2 = var10.length;
            var9 = 0;
            var2 = var9 < var2;
            var7 = undefined;
            var6 = 2;
            var5 = 1;
            var4 = '_misc';
            var3 = 0;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var11 = var10[var3];
            var2 = _closure1_slot5;
            var2 = var2.bind(var7)(var11, var6);
            var11 = var2[var9];
            var13 = var2[var5];
            if(!(var4 === var11)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = _closure1_slot7;
            var2 = var2.bind(var7)(var13);
            var1['_errors'] = var2;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var2 = {};
            var12 = _closure1_slot7;
            var12 = var12.bind(var7)(var13);
            var2['_errors'] = var12;
            var1[var11] = var2;
case 10:
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0002_ip = 7; continue _fun0002 }
case 6:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var5 = global;
    var9 = var5.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var8.bind(var1)(var4);
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = 'hcaptcha';
    var4['HCAPTCHA'] = var8;
    var8 = 'recaptcha';
    var4['RECAPTCHA'] = var8;
    var8 = 'recaptcha_enterprise';
    var4['RECAPTCHA_ENTERPRISE'] = var8;
    var5 = var5.Error;
    var5 = var7.bind(var1)(var5);
    var2 = function(arg1) {
        var4 = function APIError(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var1 = arguments[2];
                var11 = this;
                var10 = undefined;
                if(!(var1 === var10)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = 'An unexpected error occurred.';
case 11:
                var3 = _closure1_slot0;
                var8 = _closure2_slot0;
                var3 = var3.bind(var10)(var11, var8);
                var4 = 'string';
                var3 = typeof var2;
                if(!(var4 !== var3)) { _fun0003_ip = 13; continue _fun0003 }
case 7:
                var3 = var2.body;
                var4 = null;
                if(!(var4 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var7 = var2.body;
                var3 = var2.body;
                var3 = var3.message;
                if(!(var4 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var3 = global;
                var9 = var3.Array;
                var6 = var9.isArray;
                var5 = var2.body;
                var5 = var5.message;
                var5 = var6.bind(var9)(var5);
                if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                var5 = var2.body;
                var5 = var5.code;
                if(!(var4 != var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var6 = var3.Array;
                var5 = var6.isArray;
                var3 = var2.body;
                var3 = var3.code;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 19:
                var3 = {};
                var5 = var7.message;
                var3['message'] = var5;
                var5 = var7.code;
                var3['code'] = var5;
                var5 = var7.retry_after;
                var3['retryAfter'] = var5;
                var5 = var7.errors;
                var3['errors'] = var5;
                var5 = var2.status;
                var3['status'] = var5;
                _fun0003_ip = 21; continue _fun0003;
case 16:
                if(!(var4 != var7)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var4 = 'captcha_key';
                var4 = var4 in var7;
                if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 22:
                var4 = {};
                var5 = var2.status;
                var4['status'] = var5;
                var5 = 50035;
                var4['code'] = var5;
                var5 = _closure1_slot8;
                var5 = var5.bind(var10)(var7);
                var4['errors'] = var5;
                _fun0003_ip = 25; continue _fun0003;
case 24:
                var5 = {};
                var6 = -1;
                var5['code'] = var6;
                var5['captchaFields'] = var7;
                var6 = var2.status;
                var5['status'] = var6;
                var6 = var7.captcha_key;
                var6 = var6.length;
                var9 = 0;
                var13 = var6 > var9;
                var6 = undefined;
                if(!var13) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var7 = var7.captcha_key;
                var6 = var7[var9];
case 26:
                var5['message'] = var6;
                var4 = var5;
case 25:
                var3 = var4;
case 21:
                _fun0003_ip = 28; continue _fun0003;
case 14:
                var4 = {};
                var5 = var2.status;
                var4['status'] = var5;
                var3 = var4;
                _fun0003_ip = 28; continue _fun0003;
case 13:
                var4 = {};
                var4['message'] = var2;
                var5 = arg2;
                var4['code'] = var5;
                var3 = var4;
case 28:
                var13 = var3.message;
                var9 = var3.code;
                var7 = var3.retryAfter;
                var6 = var3.errors;
                var5 = var3.status;
                var3 = var3.captchaFields;
                var4 = null;
                if(!(var4 != var13)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                var1 = var13;
case 29:
                var16 = new Array(1);
                var16[0] = var1;
                var1 = _closure1_slot3;
                var15 = var1.bind(var10)(var8);
                var8 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var10)();
                if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                var1 = var15.apply;
                var1 = var1.bind(var15)(var11, var16);
                _fun0003_ip = 33; continue _fun0003;
case 31:
                var13 = global;
                var14 = var13.Reflect;
                var13 = var14.construct;
                var12 = _closure1_slot3;
                var12 = var12.bind(var10)(var11);
                var12 = var12.constructor;
                var1 = var13.bind(var14)(var15, var16, var12);
case 33:
                var1 = var8.bind(var10)(var11, var1);
                var10 = var4 != var9;
                var8 = -1;
                if(!var10) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var8 = var9;
case 34:
                var1['code'] = var8;
                var1['retryAfter'] = var7;
                var1['errors'] = var6;
                var1['status'] = var5;
                if(!(var4 == var3)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                var3 = {};
case 36:
                var1['captchaFields'] = var3;
                var1['cause'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'hasFieldErrors';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = this;
                var3 = var2.errors;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.errors;
                var2 = var3.bind(var4)(var2);
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFieldErrors';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var3 = 'string';
                var1 = typeof var2;
                var6 = var2;
                if(!(var3 === var1)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var1 = new Array(1);
                var1[0] = var2;
                var6 = var1;
case 40:
                var1 = this;
                var7 = var1.errors;
                var1 = var6.length;
                var5 = 0;
                var2 = var7;
                if(!(var1 > var5)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var4 = null;
                var3 = 1;
                var1 = var7;
                var2 = var1;
                if(!(var4 != var2)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
                var7 = var6[var5];
                var7 = var1[var7];
                var8 = var6.splice;
                var8 = var8.bind(var6)(var3);
                var9 = var8.length;
                var2 = var7;
                if(!(var9 > var5)) { _fun0005_ip = 42; continue _fun0005 }
case 45:
                var6 = var8;
                var1 = var7;
                var2 = var1;
                if(var4 != var2) { _fun0005_ip = 44; continue _fun0005 }
case 42:
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var1 = var2._errors;
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getAllFieldErrors';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.getAllFieldErrorsUnder;
            var1 = var3.errors;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getAllFieldErrorsUnder';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = {};
                var _closure3_slot1 = var1;
                var6 = null;
                var7 = var6 == var5;
                var3 = undefined;
                var4 = undefined;
                if(var7) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var4 = var5._errors;
case 48:
                var6 = var6 != var4;
                if(!var6) { _fun0006_ip = 7; continue _fun0006 }
case 50:
                var8 = var4.length;
                var7 = 0;
                var6 = var8 > var7;
case 7:
                if(!var6) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                var1['__root_errors'] = var4;
case 51:
                if(!(var3 !== var5)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var4 = var3.bind(var4)(var5);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var6 = arg1;
                        var3 = var6[Symbol.iterator];
                        var6 = var3().next;
                        var7 = var6().value;
                        var4 = var3;
                        var1 = undefined;
                        var5 = var4 === var1;
                        var4 = undefined;
                        if(var5) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var4 = var7;
case 55:
                        var _closure4_slot0 = var4;
                        var7 = undefined;
                        if(var5) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                        var8 = var6().value;
                        var6 = var3;
                        var6 = var6 === var1;
                        var7 = undefined;
                        var5 = var6;
                        if(var6) { _fun0007_ip = 57; continue _fun0007 }
case 59:
                        var7 = var8;
                        var5 = var6;
case 57:
                        if(var5) { _fun0007_ip = 15; continue _fun0007 }
case 44:
                        var3.return();
case 15:
                        var3 = '_errors';
                        if(!(var3 !== var4)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                        var3 = global;
                        var5 = var3.Object;
                        var4 = var5.entries;
                        var6 = _closure3_slot0;
                        var3 = var6.getAllFieldErrorsUnder;
                        var3 = var3.bind(var6)(var7);
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                var5 = arg1;
                                var2 = var5[Symbol.iterator];
                                var5 = var2().next;
                                var4 = var5().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var8 = undefined;
                                if(var3) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                                var8 = var4;
case 62:
                                var4 = undefined;
                                if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 64:
                                var6 = var5().value;
                                var5 = var2;
                                var5 = var5 === var1;
                                var4 = undefined;
                                var3 = var5;
                                if(var5) { _fun0008_ip = 59; continue _fun0008 }
case 43:
                                var4 = var6;
                                var3 = var5;
case 59:
                                if(var3) { _fun0008_ip = 57; continue _fun0008 }
case 65:
                                var2.return();
case 57:
                                var2 = '__root_errors';
                                if(!(var8 !== var2)) { _fun0008_ip = 10; continue _fun0008 }
case 66:
                                var3 = _closure3_slot1;
                                var7 = _closure4_slot0;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = '.';
                                var2 = var6.bind(var5)(var7, var2, var8);
                                var3[var2] = var4;
                                _fun0008_ip = 67; continue _fun0008;
case 10:
                                var3 = _closure3_slot1;
                                var2 = _closure4_slot0;
                                var3[var2] = var4;
case 67:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
case 60:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFirstFieldErrorMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var2 = var3.getFieldErrors;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var4 = null;
                var2 = var4 == var3;
                var1 = null;
                if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 40:
                var5 = var3.length;
                var2 = 1;
                var2 = var5 < var2;
                var1 = null;
                if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                var2 = 0;
                var2 = var3[var2];
                var1 = var2.message;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAnyErrorMessage';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = var2.getAnyErrorMessageAndField;
                var4 = var1.bind(var2)();
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 55; continue _fun0010 }
case 63:
                var1 = var4.error;
case 55:
                if(!(var3 == var1)) { _fun0010_ip = 58; continue _fun0010 }
case 70:
                var1 = var2.message;
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getAnyErrorMessageAndField';
        var5['key'] = var7;
        var6 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var7 = var1.errors;
                var1 = null;
                var2 = var1 != var7;
                var6 = global;
                var3 = 0;
                var5 = null;
                if(!var2) { _fun0011_ip = 54; continue _fun0011 }
case 63:
                var8 = var7._errors;
                var2 = var7;
                var4 = var5;
                if(!(var1 == var8)) { _fun0011_ip = 3; continue _fun0011 }
case 71:
                var9 = var6.Object;
                var8 = var9.keys;
                var8 = var8.bind(var9)(var2);
                var5 = var8[var3];
                var7 = var2[var5];
                if(var1 != var7) { _fun0011_ip = 63; continue _fun0011 }
case 54:
                return var1;
case 3:
                var1 = {};
                var1['fieldName'] = var4;
                var2 = var2._errors;
                var2 = var2[var3];
                var2 = var2.message;
                var1['error'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/http-utils/V8APIError.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 50035;
    var3['INVALID_FORM_BODY_ERROR_CODE'] = var5;
    var5 = '__root_errors';
    var3['ROOT_FORM_ERRORS_KEY'] = var5;
    var3['CaptchaTypes'] = var4;
    var3['APIError'] = var2;
    return var1;
})();