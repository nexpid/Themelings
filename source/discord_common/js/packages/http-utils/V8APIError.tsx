// discord_common/js/packages/http-utils/V8APIError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
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
            if(!var2) { _fun0002_ip = 131; continue _fun0002 }
 55:
            var11 = var10[var3];
            var2 = _closure1_slot5;
            var2 = var2.bind(var7)(var11, var6);
            var11 = var2[var9];
            var13 = var2[var5];
            if(!(var4 === var11)) { _fun0002_ip = 98; continue _fun0002 }
 81:
            var2 = _closure1_slot7;
            var2 = var2.bind(var7)(var13);
            var1['_errors'] = var2;
            _fun0002_ip = 119; continue _fun0002;
 98:
            var2 = {};
            var12 = _closure1_slot7;
            var12 = var12.bind(var7)(var13);
            var2['_errors'] = var12;
            var1[var11] = var2;
 119:
            var3 = var3 + 1;
            var2 = var10.length;
            if(var3 < var2) { _fun0002_ip = 55; continue _fun0002 }
 131:
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
 0:
                var2 = arg1;
                var1 = arguments[2];
                var11 = this;
                var10 = undefined;
                if(!(var1 === var10)) { _fun0003_ip = 21; continue _fun0003 }
 15:
                var1 = 'An unexpected error occurred.';
 21:
                var3 = _closure1_slot0;
                var8 = _closure2_slot0;
                var3 = var3.bind(var10)(var11, var8);
                var4 = 'string';
                var3 = typeof var2;
                if(!(var4 !== var3)) { _fun0003_ip = 356; continue _fun0003 }
 55:
                var3 = var2.body;
                var4 = null;
                if(!(var4 != var3)) { _fun0003_ip = 340; continue _fun0003 }
 69:
                var7 = var2.body;
                var3 = var2.body;
                var3 = var3.message;
                if(!(var4 != var3)) { _fun0003_ip = 218; continue _fun0003 }
 91:
                var3 = global;
                var9 = var3.Array;
                var6 = var9.isArray;
                var5 = var2.body;
                var5 = var5.message;
                var5 = var6.bind(var9)(var5);
                if(var5) { _fun0003_ip = 218; continue _fun0003 }
 122:
                var5 = var2.body;
                var5 = var5.code;
                if(!(var4 != var5)) { _fun0003_ip = 165; continue _fun0003 }
 136:
                var6 = var3.Array;
                var5 = var6.isArray;
                var3 = var2.body;
                var3 = var3.code;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0003_ip = 218; continue _fun0003 }
 165:
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
                _fun0003_ip = 338; continue _fun0003;
 218:
                if(!(var4 != var7)) { _fun0003_ip = 233; continue _fun0003 }
 222:
                var4 = 'captcha_key';
                var4 = var4 in var7;
                if(var4) { _fun0003_ip = 270; continue _fun0003 }
 233:
                var4 = {};
                var5 = var2.status;
                var4['status'] = var5;
                var5 = 50035;
                var4['code'] = var5;
                var5 = _closure1_slot8;
                var5 = var5.bind(var10)(var7);
                var4['errors'] = var5;
                _fun0003_ip = 335; continue _fun0003;
 270:
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
                if(!var13) { _fun0003_ip = 328; continue _fun0003 }
 318:
                var7 = var7.captcha_key;
                var6 = var7[var9];
 328:
                var5['message'] = var6;
                var4 = var5;
 335:
                var3 = var4;
 338:
                _fun0003_ip = 372; continue _fun0003;
 340:
                var4 = {};
                var5 = var2.status;
                var4['status'] = var5;
                var3 = var4;
                _fun0003_ip = 372; continue _fun0003;
 356:
                var4 = {};
                var4['message'] = var2;
                var5 = arg2;
                var4['code'] = var5;
                var3 = var4;
 372:
                var13 = var3.message;
                var9 = var3.code;
                var7 = var3.retryAfter;
                var6 = var3.errors;
                var5 = var3.status;
                var3 = var3.captchaFields;
                var4 = null;
                if(!(var4 != var13)) { _fun0003_ip = 414; continue _fun0003 }
 411:
                var1 = var13;
 414:
                var16 = new Array(1);
                var16[0] = var1;
                var1 = _closure1_slot3;
                var15 = var1.bind(var10)(var8);
                var8 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var10)();
                if(var1) { _fun0003_ip = 459; continue _fun0003 }
 446:
                var1 = var15.apply;
                var1 = var1.bind(var15)(var11, var16);
                _fun0003_ip = 493; continue _fun0003;
 459:
                var13 = global;
                var14 = var13.Reflect;
                var13 = var14.construct;
                var12 = _closure1_slot3;
                var12 = var12.bind(var10)(var11);
                var12 = var12.constructor;
                var1 = var13.bind(var14)(var15, var16, var12);
 493:
                var1 = var8.bind(var10)(var11, var1);
                var10 = var4 != var9;
                var8 = -1;
                if(!var10) { _fun0003_ip = 515; continue _fun0003 }
 512:
                var8 = var9;
 515:
                var1['code'] = var8;
                var1['retryAfter'] = var7;
                var1['errors'] = var6;
                var1['status'] = var5;
                if(!(var4 == var3)) { _fun0003_ip = 545; continue _fun0003 }
 543:
                var3 = {};
 545:
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
 0:
                var2 = this;
                var3 = var2.errors;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0004_ip = 53; continue _fun0004 }
 18:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.errors;
                var2 = var3.bind(var4)(var2);
                var3 = var2.length;
                var2 = 0;
                var1 = var3 > var2;
 53:
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
 0:
                var2 = arg1;
                var3 = 'string';
                var1 = typeof var2;
                var6 = var2;
                if(!(var3 === var1)) { _fun0005_ip = 28; continue _fun0005 }
 17:
                var1 = new Array(1);
                var1[0] = var2;
                var6 = var1;
 28:
                var1 = this;
                var7 = var1.errors;
                var1 = var6.length;
                var5 = 0;
                var2 = var7;
                if(!(var1 > var5)) { _fun0005_ip = 110; continue _fun0005 }
 51:
                var4 = null;
                var3 = 1;
                var1 = var7;
                var2 = var1;
                if(!(var4 != var2)) { _fun0005_ip = 110; continue _fun0005 }
 66:
                var7 = var6[var5];
                var7 = var1[var7];
                var8 = var6.splice;
                var8 = var8.bind(var6)(var3);
                var9 = var8.length;
                var2 = var7;
                if(!(var9 > var5)) { _fun0005_ip = 110; continue _fun0005 }
 97:
                var6 = var8;
                var1 = var7;
                var2 = var1;
                if(var4 != var2) { _fun0005_ip = 66; continue _fun0005 }
 110:
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0005_ip = 127; continue _fun0005 }
 121:
                var1 = var2._errors;
 127:
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
 0:
                var5 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = {};
                var _closure3_slot1 = var1;
                var6 = null;
                var7 = var6 == var5;
                var3 = undefined;
                var4 = undefined;
                if(var7) { _fun0006_ip = 37; continue _fun0006 }
 31:
                var4 = var5._errors;
 37:
                var6 = var6 != var4;
                if(!var6) { _fun0006_ip = 55; continue _fun0006 }
 44:
                var8 = var4.length;
                var7 = 0;
                var6 = var8 > var7;
 55:
                if(!var6) { _fun0006_ip = 64; continue _fun0006 }
 58:
                var1['__root_errors'] = var4;
 64:
                if(!(var3 !== var5)) { _fun0006_ip = 102; continue _fun0006 }
 68:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.entries;
                var4 = var3.bind(var4)(var5);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var6 = arg1;
                        var3 = var6[Symbol.iterator];
                        var6 = var3().next;
                        var7 = var6().value;
                        var4 = var3;
                        var1 = undefined;
                        var5 = var4 === var1;
                        var4 = undefined;
                        if(var5) { _fun0007_ip = 29; continue _fun0007 }
 26:
                        var4 = var7;
 29:
                        var _closure4_slot0 = var4;
                        var7 = undefined;
                        if(var5) { _fun0007_ip = 63; continue _fun0007 }
 38:
                        var8 = var6().value;
                        var6 = var3;
                        var6 = var6 === var1;
                        var7 = undefined;
                        var5 = var6;
                        if(var6) { _fun0007_ip = 63; continue _fun0007 }
 57:
                        var7 = var8;
                        var5 = var6;
 63:
                        if(var5) { _fun0007_ip = 69; continue _fun0007 }
 66:
                        var3.return();
 69:
                        var3 = '_errors';
                        if(!(var3 !== var4)) { _fun0007_ip = 129; continue _fun0007 }
 77:
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
 0:
                                var5 = arg1;
                                var2 = var5[Symbol.iterator];
                                var5 = var2().next;
                                var4 = var5().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var8 = undefined;
                                if(var3) { _fun0008_ip = 27; continue _fun0008 }
 24:
                                var8 = var4;
 27:
                                var4 = undefined;
                                if(var3) { _fun0008_ip = 57; continue _fun0008 }
 32:
                                var6 = var5().value;
                                var5 = var2;
                                var5 = var5 === var1;
                                var4 = undefined;
                                var3 = var5;
                                if(var5) { _fun0008_ip = 57; continue _fun0008 }
 51:
                                var4 = var6;
                                var3 = var5;
 57:
                                if(var3) { _fun0008_ip = 63; continue _fun0008 }
 60:
                                var2.return();
 63:
                                var2 = '__root_errors';
                                if(!(var8 !== var2)) { _fun0008_ip = 119; continue _fun0008 }
 71:
                                var3 = _closure3_slot1;
                                var7 = _closure4_slot0;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = '';
                                var2 = '.';
                                var2 = var6.bind(var5)(var7, var2, var8);
                                var3[var2] = var4;
                                _fun0008_ip = 137; continue _fun0008;
 119:
                                var3 = _closure3_slot1;
                                var2 = _closure4_slot0;
                                var3[var2] = var4;
 137:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
 129:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 102:
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
 0:
                var3 = this;
                var2 = var3.getFieldErrors;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var4 = null;
                var2 = var4 == var3;
                var1 = null;
                if(var2) { _fun0009_ip = 56; continue _fun0009 }
 28:
                var5 = var3.length;
                var2 = 1;
                var2 = var5 < var2;
                var1 = null;
                if(var2) { _fun0009_ip = 56; continue _fun0009 }
 45:
                var2 = 0;
                var2 = var3[var2];
                var1 = var2.message;
 56:
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
 0:
                var2 = this;
                var1 = var2.getAnyErrorMessageAndField;
                var4 = var1.bind(var2)();
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 29; continue _fun0010 }
 24:
                var1 = var4.error;
 29:
                if(!(var3 == var1)) { _fun0010_ip = 38; continue _fun0010 }
 33:
                var1 = var2.message;
 38:
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
 0:
                var1 = this;
                var7 = var1.errors;
                var1 = null;
                var2 = var1 != var7;
                var6 = global;
                var3 = 0;
                var5 = null;
                if(!var2) { _fun0011_ip = 68; continue _fun0011 }
 24:
                var8 = var7._errors;
                var2 = var7;
                var4 = var5;
                if(!(var1 == var8)) { _fun0011_ip = 70; continue _fun0011 }
 40:
                var9 = var6.Object;
                var8 = var9.keys;
                var8 = var8.bind(var9)(var2);
                var5 = var8[var3];
                var7 = var2[var5];
                if(var1 != var7) { _fun0011_ip = 24; continue _fun0011 }
 68:
                return var1;
 70:
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
    var5 = native2;
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