// discord_common/js/shared/MFA.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
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
 0:
                    StartGenerator();
                    var6 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 240; continue _fun0001 }
 16:
                    var12 = var6.ticket;
                    var11 = var6.mfaType;
                    var10 = var6.data;
                    var7 = undefined;
                    if(!(var2 === var7)) { _fun0001_ip = 42; continue _fun0001 }
 39:
                    var2 = 2;
 42:
                    var8 = var2;
                    var4 = undefined;
                    SaveGenerator(address=51);
 49:
                    return var7;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 237; continue _fun0001 }
 60: // try_start_0
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
 146:
                    return var5;
 148:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 162; continue _fun0001 }
 154:
                    var6 = var5.body;
 159: // try_end0
                    return var6;
 162:
                    return var5;
 165: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = var5;
                    var6 = var5.body;
                    var4 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0001_ip = 192; continue _fun0001 }
 184:
                    var4 = var4.message;
                    if(var4) { _fun0001_ip = 197; continue _fun0001 }
 192:
                    var4 = var3;
                    throw var4;
 197:
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
 237:
                    return var2;
 240:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 98; continue _fun0002 }
 9:
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    var _closure4_slot1 = var5;
                    var4 = _closure1_slot3;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=41);
 39:
                    return var2;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 95; continue _fun0002 }
 47:
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
 0:
                                var2 = arg1;
                                var1 = var2.body;
                                var3 = null;
                                var6 = var3 == var1;
                                var4 = undefined;
                                var5 = undefined;
                                if(var6) { _fun0003_ip = 26; continue _fun0003 }
 21:
                                var5 = var1.code;
 26:
                                var1 = 60008;
                                if(!(var1 !== var5)) { _fun0003_ip = 80; continue _fun0003 }
 36:
                                var1 = var2.body;
                                var5 = var3 == var1;
                                var3 = undefined;
                                if(var5) { _fun0003_ip = 55; continue _fun0003 }
 50:
                                var3 = var1.code;
 55:
                                var1 = 60003;
                                if(!(var1 !== var3)) { _fun0003_ip = 80; continue _fun0003 }
 65:
                                var1 = _closure5_slot0;
                                var1 = var1.bind(var4)();
                                var1 = false;
                                _fun0003_ip = 132; continue _fun0003;
 80:
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
 132:
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
 95:
                    return var2;
 98:
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
    var5 = native3;
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