// app/actions/HubActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
                var2 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var5 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var2.body;
                var4 = var1 == var2;
                var5 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var5 = var2.email_domain;
case 2:
                var1 = var1 != var5;
                var4 = false;
                if(!var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var2 = var5.split;
                var1 = '.';
                var5 = var2.bind(var5)(var1);
                var2 = var5.indexOf;
                var1 = 'edu';
                var2 = var2.bind(var5)(var1);
                var1 = -1;
                var4 = var1 !== var2;
case 5:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
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
case 0:
                            var1 = arg1;
                            var2 = null;
                            var5 = var2 == var1;
                            var3 = undefined;
                            var4 = undefined;
                            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                            var1 = var1.body;
                            var2 = var2 == var1;
                            var4 = undefined;
                            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 4:
                            var4 = var1.has_matching_guild;
case 9:
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
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var2.body;
                    return var3;
case 12:
                    return var2;
case 7:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 8:
                    var2 = undefined;
                    var5 = undefined;
                    var3 = _closure2_slot0;
                    var7 = null;
                    if(!(var7 != var3)) { _fun0004_ip = 15; continue _fun0004 }
case 4: // try_start_0
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
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var6 = var3.body;
                    var6 = var6.guild;
                    var5 = var6;
                    var6 = var7 == var6;
                    var7 = undefined;
                    if(var6) { _fun0004_ip = 13; continue _fun0004 }
case 20:
                    var7 = var5.id;
case 13:
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
case 21: // try_end0
                    _fun0004_ip = 15; continue _fun0004;
case 18:
                    return var3;
case 22: // catch_target0
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
case 15:
                    return var2;
case 14:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 8:
                    var5 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var2 = _closure2_slot0;
                    var8 = null;
                    if(!(var8 == var2)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    return var5;
case 24: // try_start_0
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
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = var2;
                    var7 = var2.body;
                    var7 = var7.guild;
                    var6 = var7;
                    var7 = var8 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var8 = var6.id;
case 30:
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
case 32: // try_end0
                    return var3;
case 28:
                    return var2;
case 33: // catch_target0
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
case 23:
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