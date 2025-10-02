// discord_common/js/shared/MFA.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function finishMFACheck() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot3 = var4;
    var1 = function _finishMFACheck() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var12 = var6.ticket;
                    var11 = var6.mfaType;
                    var10 = var6.data;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = 2;
case 4:
                    var8 = var2;
                    var4 = undefined;
                    SaveGenerator(address=51);
case 6:
                    return var7;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9: // try_start_0
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 1;
                    var5 = var9[var5];
                    var5 = var6.bind(var7)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.post;
                    var5 = {};
                    var9 = '/mfa/finish';
                    var5['url'] = var9;
                    var9 = {};
                    var9['ticket'] = var12;
                    var9['mfa_type'] = var11;
                    var9['data'] = var10;
                    var5['body'] = var9;
                    var5['retries'] = var8;
                    var8 = false;
                    var5['rejectWithError'] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=148);
case 10:
                    return var5;
case 11:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var6 = var5.body;
case 14: // try_end0
                    return var6;
case 12:
                    return var5;
case 15: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var6 = var5.body;
                    var4 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var4 = var4.message;
                    if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 16:
                    var4 = var3;
                    throw var4;
case 18:
                    var4 = global;
                    var5 = var4.Error;
                    var3 = var3.body;
                    var13 = var3.message;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var14 = var4;
                    var3 = new var14[var5](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _trySubmit() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    var _closure4_slot1 = var5;
                    var4 = _closure1_slot3;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=41);
case 5:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var4 = var2.token;
                    _closure4_slot1 = var4;
                    var4 = global;
                    var5 = var4.Promise;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var6 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot0;
                        var3 = {};
                        var1 = _closure4_slot1;
                        var3['X-Discord-MFA-Authorization'] = var1;
                        var1 = undefined;
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.body;
                                var3 = null;
                                var6 = var3 == var1;
                                var4 = undefined;
                                var5 = undefined;
                                if(var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                                var5 = var1.code;
case 24:
                                var1 = 60008;
                                if(!(var1 !== var5)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                                var1 = var2.body;
                                var5 = var3 == var1;
                                var3 = undefined;
                                if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                                var3 = var1.code;
case 28:
                                var1 = 60003;
                                if(!(var1 !== var3)) { _fun0003_ip = 26; continue _fun0003 }
case 30:
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var4)();
                                var1 = false;
                                _fun0003_ip = 31; continue _fun0003;
case 26:
                                var3 = _closure5_slot1;
                                var5 = global;
                                var6 = var5.Error;
                                var2 = var2.body;
                                var7 = var2.message;
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {constructor: {value: var6}});
                                var8 = var5;
                                var2 = new var8[var6](var7, var6);
                                var2 = var2 instanceof Object ? var2 : var5;
                                var2 = var3.bind(var4)(var2);
                                var1 = true;
case 31:
                                return var1;
                            }
                        };
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var7 = var4;
                    var3 = new var7[var5](var6, var5);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
case 22:
                    return var2;
case 19:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/MFA.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 8;
    var3['BACKUP_CODE_MIN_LENGTH'] = var5;
    var5 = 11;
    var3['BACKUP_CODE_MAX_LENGTH'] = var5;
    var5 = 6;
    var3['TOTP_CODE_LENGTH'] = var5;
    var3['SMS_CODE_LENGTH'] = var5;
    var3['finishMFACheck'] = var4;
    var2 = function trySubmit() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['trySubmit'] = var2;
    return var1;
})();