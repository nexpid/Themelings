// app/modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/usePasswordRegistrationStep.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePasswordRegistrationStep() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot6;
            var10 = undefined;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.registrationOptions;
                return var1;
            };
            var3 = var4.bind(var10)(var3);
            var5 = _closure1_slot5;
            var4 = var5.useState;
            var6 = var3.password;
            var3 = null;
            var7 = var3 != var6;
            var3 = '';
            if(!var7) { _fun0001_ip = 54; continue _fun0001 }
 51:
            var3 = var6;
 54:
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot4;
            var3 = 2;
            var4 = var4.bind(var10)(var5, var3);
            var3 = 0;
            var6 = var4[var3];
            var _closure2_slot0 = var6;
            var3 = 1;
            var5 = var4[var3];
            var4 = _closure1_slot6;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var8 = var4.bind(var10)(var3);
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var4 = var4.bind(var10)(var3);
            var3 = 'password';
            var9 = var4.bind(var10)(var3, var8);
            var _closure2_slot1 = var9;
            var4 = _closure1_slot0;
            var3 = 5;
            var3 = var7[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.usePasswordScore;
            var3 = var3.bind(var4)(var6);
            var4 = var3.passwordScore;
            var3 = var3.passwordValid;
            var _closure2_slot2 = var3;
            var8 = _closure1_slot5;
            var11 = var8.useMemo;
            var7 = new Array(3);
            var7[0] = var6;
            var7[1] = var9;
            var7[2] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var5 = null;
                    var1 = var5 == var1;
                    if(var1) { _fun0002_ip = 28; continue _fun0002 }
 16:
                    var4 = _closure2_slot0;
                    var2 = '';
                    var1 = var2 === var4;
 28:
                    if(var1) { _fun0002_ip = 74; continue _fun0002 }
 31:
                    var2 = _closure2_slot0;
                    var4 = var2.length;
                    var2 = 8;
                    var2 = var4 < var2;
                    if(var2) { _fun0002_ip = 58; continue _fun0002 }
 50:
                    var4 = _closure2_slot1;
                    var2 = var5 != var4;
 58:
                    if(var2) { _fun0002_ip = 71; continue _fun0002 }
 61:
                    var4 = _closure2_slot2;
                    var3 = false;
                    var2 = var3 === var4;
 71:
                    var1 = var2;
 74:
                    return var1;
                }
            };
            var3 = var11.bind(var8)(var3, var7);
            var7 = var8.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 336; continue _fun0003 }
 10:
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 271; continue _fun0003 }
 26:
                        var5 = _closure2_slot0;
                        var4 = '';
                        if(!(var4 !== var5)) { _fun0003_ip = 271; continue _fun0003 }
 41:
                        var4 = _closure2_slot0;
                        var5 = var4.length;
                        var4 = 8;
                        if(!(!(var5 < var4))) { _fun0003_ip = 208; continue _fun0003 }
 60:
                        var4 = _closure2_slot1;
                        if(!(var3 == var4)) { _fun0003_ip = 201; continue _fun0003 }
 71: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 7;
                        var4 = var7[var4];
                        var9 = undefined;
                        var7 = var6.bind(var9)(var4);
                        var6 = var7.scorePassword;
                        var4 = _closure2_slot0;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address=115);
 113:
                        return var4;
 115:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 193; continue _fun0003 }
 121:
                        var7 = var4.valid;
                        var6 = false;
                        if(!(var6 !== var7)) { _fun0003_ip = 135; continue _fun0003 }
 133: // try_end0
                        _fun0003_ip = 198; continue _fun0003;
 135: // try_start_1
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 6;
                        var6 = var10[var5];
                        var6 = var8.bind(var9)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.t;
                        var5 = var5.DfaKHh;
                        var5 = var6.bind(var7)(var5);
 190: // try_end1
                        return var5;
 193:
                        return var4;
 196: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=3);
 198:
                        return var3;
 201:
                        var2 = _closure2_slot1;
                        return var2;
 208:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var3 = var7[var2];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var2 = var2.t;
                        var2 = var2.DfaKHh;
                        var2 = var3.bind(var4)(var2);
                        return var2;
 271:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var3 = var7[var2];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var2 = var2.t;
                        var2 = var2.R98xDw;
                        var2 = var3.bind(var4)(var2);
                        return var2;
 336:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var10)(var1);
            var1 = new Array(2);
            var1[0] = var6;
            var1[1] = var9;
            var2 = var7.bind(var8)(var2, var1);
            var1 = {};
            var1['password'] = var6;
            var1['setPassword'] = var5;
            var1['passwordScore'] = var4;
            var1['preventSubmitPassword'] = var3;
            var1['validatePassword'] = var2;
            return var1;
        }
    };
    var3['usePasswordRegistrationStep'] = var2;
    return var1;
})();