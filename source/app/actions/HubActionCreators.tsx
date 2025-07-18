// app/actions/HubActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = {};
    var7 = function signup(arg1, arg2) {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 2;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot4;
        var4 = var4.HUB_WAITLIST_SIGNUP;
        var1['url'] = var4;
        var4 = {};
        var6 = arg1;
        var4['email'] = var6;
        var6 = arg2;
        var4['school'] = var6;
        var1['body'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 3;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.HUB_WAITLIST_SIGNUP;
        var4['event'] = var5;
        var5 = function properties(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var5 = undefined;
                if(var4) { _fun0001_ip = 38; continue _fun0001 }
 16:
                var2 = var2.body;
                var4 = var1 == var2;
                var5 = undefined;
                if(var4) { _fun0001_ip = 38; continue _fun0001 }
 30:
                var5 = var2.email_domain;
 38:
                var1 = var1 != var5;
                var4 = false;
                if(!var1) { _fun0001_ip = 88; continue _fun0001 }
 47:
                var2 = var5.split;
                var1 = '.';
                var5 = var2.bind(var5)(var1);
                var2 = var5.indexOf;
                var1 = 'edu';
                var2 = var2.bind(var5)(var1);
                var1 = -1;
                var4 = var1 !== var2;
 88:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.exact;
                var1 = {};
                var1['is_edu_email'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var4['properties'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['signup'] = var7;
    var7 = function sendVerificationEmail(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 189; continue _fun0002 }
 10:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.HUB_EMAIL_VERIFY_SEND;
                    var2['url'] = var5;
                    var5 = {};
                    var10 = _closure2_slot0;
                    var5['email'] = var10;
                    var10 = _closure2_slot2;
                    var5['guild_id'] = var10;
                    var7 = _closure2_slot1;
                    var5['allow_multiple_guilds'] = var7;
                    var7 = true;
                    var5['use_verification_code'] = var7;
                    var2['body'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.HUB_EMAIL_VERIFY_SEND;
                    var5['event'] = var6;
                    var6 = function properties(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var2 = null;
                            var5 = var2 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if(var5) { _fun0003_ip = 36; continue _fun0003 }
 16:
                            var1 = var1.body;
                            var2 = var2 == var1;
                            var4 = undefined;
                            if(var2) { _fun0003_ip = 36; continue _fun0003 }
 30:
                            var4 = var1.has_matching_guild;
 36:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 4;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var1['has_matching_guild'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var5['properties'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=172);
 170:
                    return var2;
 172:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 186; continue _fun0002 }
 178:
                    var3 = var2.body;
                    return var3;
 186:
                    return var2;
 189:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['sendVerificationEmail'] = var7;
    var7 = function verify(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 289; continue _fun0004 }
 10:
                    var2 = undefined;
                    var5 = undefined;
                    var3 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 286; continue _fun0004 }
 30: // try_start_0
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var3 = 2;
                    var3 = var12[var3];
                    var8 = var6.bind(var2)(var3);
                    var6 = var8.post;
                    var3 = {};
                    var9 = _closure1_slot4;
                    var9 = var9.HUB_EMAIL_VERIFY;
                    var3['url'] = var9;
                    var9 = {};
                    var10 = _closure2_slot0;
                    var9['token'] = var10;
                    var3['body'] = var9;
                    var9 = {};
                    var11 = _closure1_slot0;
                    var10 = 3;
                    var10 = var12[var10];
                    var10 = var11.bind(var2)(var10);
                    var10 = var10.NetworkActionNames;
                    var10 = var10.HUB_EMAIL_VERIFY;
                    var9['event'] = var10;
                    var3['trackedActionData'] = var9;
                    var9 = false;
                    var3['rejectWithError'] = var9;
                    var3 = var6.bind(var8)(var3);
                    SaveGenerator(address=145);
 143:
                    return var3;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 226; continue _fun0004 }
 151:
                    var6 = var3.body;
                    var6 = var6.guild;
                    var5 = var6;
                    var6 = var7 == var6;
                    var7 = undefined;
                    if(var6) { _fun0004_ip = 178; continue _fun0004 }
 173:
                    var7 = var5.id;
 178:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'HUB_VERIFY_EMAIL_SUCCESS';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4 = var5.bind(var6)(var4);
 224: // try_end0
                    _fun0004_ip = 286; continue _fun0004;
 226:
                    return var3;
 229: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'HUB_VERIFY_EMAIL_FAILURE';
                    var3['type'] = var7;
                    var6 = var6.body;
                    var3['errors'] = var6;
                    var3 = var4.bind(var5)(var3);
 286:
                    return var2;
 289:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['verify'] = var7;
    var4 = function verifyCode(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 315; continue _fun0005 }
 10:
                    var5 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var2 = _closure2_slot0;
                    var8 = null;
                    if(!(var8 == var2)) { _fun0005_ip = 32; continue _fun0005 }
 29:
                    return var5;
 32: // try_start_0
                    var7 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var2 = 2;
                    var2 = var13[var2];
                    var9 = var7.bind(var5)(var2);
                    var7 = var9.post;
                    var2 = {};
                    var10 = _closure1_slot4;
                    var10 = var10.HUB_EMAIL_VERIFY_CODE;
                    var2['url'] = var10;
                    var10 = {};
                    var12 = _closure2_slot0;
                    var10['code'] = var12;
                    var12 = _closure2_slot1;
                    var10['guild_id'] = var12;
                    var11 = _closure2_slot2;
                    var10['email'] = var11;
                    var2['body'] = var10;
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = 3;
                    var11 = var13[var11];
                    var11 = var12.bind(var5)(var11);
                    var11 = var11.NetworkActionNames;
                    var11 = var11.HUB_EMAIL_VERIFY;
                    var10['event'] = var11;
                    var2['trackedActionData'] = var10;
                    var10 = false;
                    var2['rejectWithError'] = var10;
                    var2 = var7.bind(var9)(var2);
                    SaveGenerator(address=163);
 161:
                    return var2;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 253; continue _fun0005 }
 169:
                    var3 = var2;
                    var7 = var2.body;
                    var7 = var7.guild;
                    var6 = var7;
                    var7 = var8 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 199; continue _fun0005 }
 194:
                    var8 = var6.id;
 199:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var9 = 'HUB_VERIFY_EMAIL_SUCCESS';
                    var4['type'] = var9;
                    var4['guildId'] = var8;
                    var4 = var6.bind(var7)(var4);
                    var3 = var3.body;
 250: // try_end0
                    return var3;
 253:
                    return var2;
 256: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'HUB_VERIFY_EMAIL_FAILURE';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['errors'] = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
 315:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['verifyCode'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/HubActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();