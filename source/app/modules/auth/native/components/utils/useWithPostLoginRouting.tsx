// app/modules/auth/native/components/utils/useWithPostLoginRouting.tsx
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.LoginStates;
    var _closure1_slot7 = var7;
    var4 = var4.AuthStates;
    var _closure1_slot8 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/useWithPostLoginRouting.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useWithPostLoginRouting(arg1, arg2) {
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot5;
        var1 = var5.useState;
        var7 = var1.bind(var5)();
        var6 = _closure1_slot4;
        var1 = undefined;
        var4 = 2;
        var7 = var6.bind(var1)(var7, var4);
        var4 = 0;
        var6 = var7[var4];
        var _closure2_slot2 = var6;
        var4 = 1;
        var4 = var7[var4];
        var _closure2_slot3 = var4;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 5;
        var4 = var10[var4];
        var10 = var7.bind(var1)(var4);
        var7 = var10.useStateFromStoresObject;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var1 = {};
            var3 = _closure1_slot6;
            var2 = var3.getLoginStatus;
            var2 = var2.bind(var3)();
            var1['loginStatus'] = var2;
            return var1;
        };
        var3 = var7.bind(var10)(var4, var3);
        var7 = var3.loginStatus;
        var _closure2_slot4 = var7;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot2;
                var2 = _closure1_slot7;
                var2 = var2.LOGGING_IN;
                if(!(var3 !== var2)) { _fun0001_ip = 64; continue _fun0001 }
 26:
                var3 = _closure2_slot2;
                var2 = _closure1_slot7;
                var2 = var2.FORGOT_PASSWORD;
                if(!(var3 !== var2)) { _fun0001_ip = 64; continue _fun0001 }
 44:
                var4 = _closure2_slot3;
                var3 = _closure2_slot4;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _fun0001_ip = 708; continue _fun0001;
 64:
                var3 = _closure2_slot4;
                var2 = _closure1_slot7;
                var2 = var2.MFA_STEP;
                if(!(var2 !== var3)) { _fun0001_ip = 198; continue _fun0001 }
 82:
                var2 = _closure1_slot7;
                var2 = var2.ACCOUNT_SCHEDULED_FOR_DELETION;
                if(!(var2 !== var3)) { _fun0001_ip = 160; continue _fun0001 }
 96:
                var2 = _closure1_slot7;
                var2 = var2.ACCOUNT_DISABLED;
                if(!(var2 !== var3)) { _fun0001_ip = 160; continue _fun0001 }
 110:
                var2 = _closure1_slot7;
                var2 = var2.LOGIN_AGE_GATE;
                if(!(var2 === var3)) { _fun0001_ip = 222; continue _fun0001 }
 124:
                var5 = _closure2_slot0;
                var4 = var5.push;
                var2 = _closure1_slot8;
                var3 = var2.AGE_GATE_UNDERAGE;
                var2 = {};
                var7 = true;
                var2['existingUser'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0001_ip = 222; continue _fun0001;
 160:
                var5 = _closure2_slot0;
                var4 = var5.push;
                var2 = _closure1_slot8;
                var3 = var2.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
                var2 = {};
                var7 = _closure2_slot1;
                var2['handleLogin'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0001_ip = 222; continue _fun0001;
 198:
                var4 = _closure2_slot0;
                var3 = var4.push;
                var2 = _closure1_slot8;
                var2 = var2.MFA;
                var2 = var3.bind(var4)(var2);
 222:
                var3 = _closure2_slot4;
                var2 = _closure1_slot7;
                var2 = var2.PASSWORD_RECOVERY_PHONE_VERIFICATION;
                if(!(var2 !== var3)) { _fun0001_ip = 504; continue _fun0001 }
 243:
                var2 = _closure1_slot7;
                var2 = var2.PHONE_IP_AUTHORIZATION;
                if(!(var2 === var3)) { _fun0001_ip = 693; continue _fun0001 }
 260:
                var9 = _closure1_slot6;
                var2 = var9.getCredentials;
                var2 = var2.bind(var9)();
                var3 = var2.login;
                var _closure3_slot0 = var3;
                var2 = var2.password;
                var _closure3_slot1 = var2;
                var5 = _closure2_slot0;
                var4 = var5.push;
                var2 = _closure1_slot8;
                var3 = var2.VERIFY_PHONE;
                var2 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 6;
                var11 = var14[var7];
                var10 = undefined;
                var11 = var13.bind(var10)(var11);
                var15 = var11.intl;
                var12 = var15.string;
                var11 = var14[var7];
                var11 = var13.bind(var10)(var11);
                var11 = var11.t;
                var11 = var11.w55Ocn;
                var11 = var12.bind(var15)(var11);
                var2['title'] = var11;
                var11 = var14[var7];
                var11 = var13.bind(var10)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var7 = var14[var7];
                var7 = var13.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.0/ALaG;
                var7 = var11.bind(var12)(var7);
                var2['description'] = var7;
                var7 = var9.getCredentials;
                var7 = var7.bind(var9)();
                var7 = var7.login;
                var2['phone'] = var7;
                var9 = _closure1_slot3;
                var7 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 145; continue _fun0002 }
 10:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.authorizeIPAddress;
                            var2 = arg1;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=53);
 51:
                            return var2;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 142; continue _fun0002 }
 59:
                            var6 = _closure2_slot0;
                            var5 = var6.getState;
                            var5 = var5.bind(var6)();
                            var7 = var5.routes;
                            var6 = var7.findIndex;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = _closure1_slot8;
                                var1 = var1.LOGIN;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var6 = var6.bind(var7)(var5);
                            var5 = 0;
                            if(!(!(var6 >= var5))) { _fun0002_ip = 124; continue _fun0002 }
 108:
                            var7 = _closure2_slot0;
                            var5 = var7.pop;
                            var5 = var5.bind(var7)();
                            _fun0002_ip = 139; continue _fun0002;
 124:
                            var5 = _closure2_slot0;
                            var4 = var5.pop;
                            var4 = var4.bind(var5)(var6);
 139:
                            return var3;
 142:
                            return var2;
 145:
                            return var1;
                        }
                    };
                    return var1;
                };
                var7 = var9.bind(var10)(var7);
                var _closure3_slot2 = var7;
                var7 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var2['onPhoneTokenReceived'] = var7;
                var7 = function onClose(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        if(var1) { _fun0003_ip = 43; continue _fun0003 }
 6:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.loginReset;
                        var1 = var1.bind(var2)();
                        _fun0003_ip = 97; continue _fun0003;
 43:
                        var3 = _closure3_slot1;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0003_ip = 71; continue _fun0003 }
 59:
                        var4 = _closure3_slot1;
                        var3 = '';
                        var2 = var3 !== var4;
 71:
                        if(!var2) { _fun0003_ip = 97; continue _fun0003 }
 74:
                        var4 = _closure2_slot1;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
 97:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2['onClose'] = var7;
                var2 = var4.bind(var5)(var3, var2);
                _fun0001_ip = 693; continue _fun0001;
 504:
                var3 = _closure1_slot6;
                var2 = var3.getCredentials;
                var2 = var2.bind(var3)();
                var7 = var2.login;
                var5 = _closure2_slot0;
                var4 = var5.replace;
                var2 = _closure1_slot8;
                var3 = var2.VERIFY_PHONE;
                var2 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 6;
                var9 = var13[var8];
                var11 = undefined;
                var9 = var12.bind(var11)(var9);
                var14 = var9.intl;
                var10 = var14.string;
                var9 = var13[var8];
                var9 = var12.bind(var11)(var9);
                var9 = var9.t;
                var9 = var9.+xqy3d;
                var9 = var10.bind(var14)(var9);
                var2['title'] = var9;
                var9 = var13[var8];
                var9 = var12.bind(var11)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var13[var8];
                var8 = var12.bind(var11)(var8);
                var8 = var8.t;
                var8 = var8.myKyqq;
                var8 = var9.bind(var10)(var8);
                var2['description'] = var8;
                var2['phone'] = var7;
                var7 = function onPhoneTokenReceived(arg1) {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = arg1;
                    var6 = var4.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    var4 = var5.replace;
                    var2 = _closure1_slot8;
                    var3 = var2.EXTERNAL_LINK;
                    var2 = {};
                    var2['externalURL'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2['onPhoneTokenReceived'] = var7;
                var6 = function onClose() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.loginReset;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2['onClose'] = var6;
                var2 = var4.bind(var5)(var3, var2);
 693:
                var3 = _closure2_slot3;
                var2 = _closure2_slot4;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 708:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();