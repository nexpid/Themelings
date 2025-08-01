// app/modules/guild_member_verification/MemberVerificationActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function showCoachmark(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot10 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var3 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 491; continue _fun0001 }
 13:
                    var6 = arg1;
                    var2 = undefined;
                    var13 = undefined;
                    var11 = undefined;
                    var5 = undefined;
                    var7 = undefined;
                    var12 = null;
                    if(!(var12 == var3)) { _fun0001_ip = 53; continue _fun0001 }
 32:
                    var9 = _closure1_slot6;
                    var8 = var9.getInviteKeyForGuildId;
                    var4 = var6;
                    var3 = var8.bind(var9)(var4);
 53:
                    var13 = var3;
                    var8 = _closure1_slot7;
                    var4 = var8.getCurrentUser;
                    var14 = var4.bind(var8)();
                    var10 = _closure1_slot5;
                    var9 = var10.isMember;
                    var8 = var6;
                    var15 = var12 == var14;
                    var4 = undefined;
                    if(var15) { _fun0001_ip = 99; continue _fun0001 }
 94:
                    var4 = var14.id;
 99:
                    var4 = var9.bind(var10)(var8, var4);
                    var11 = !var4;
 108: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var8.bind(var2)(var4);
                    var9 = var4.HTTP;
                    var8 = var9.get;
                    var4 = {};
                    var15 = _closure1_slot9;
                    var14 = var15.GUILD_MEMBER_VERIFICATION;
                    var10 = var6;
                    var10 = var14.bind(var15)(var10);
                    var4['url'] = var10;
                    var10 = {};
                    var10['with_guild'] = var11;
                    var11 = var13;
                    var14 = var12 != var11;
                    var11 = undefined;
                    if(!var14) { _fun0001_ip = 212; continue _fun0001 }
 181:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 7;
                    var14 = var16[var14];
                    var15 = var15.bind(var2)(var14);
                    var14 = var15.parseInviteCodeFromInviteKey;
                    var11 = var14.bind(var15)(var13);
 212:
                    var10['invite_code'] = var11;
                    var4['query'] = var10;
                    var10 = true;
                    var4['oldFormErrors'] = var10;
                    var10 = false;
                    var4['rejectWithError'] = var10;
                    var4 = var8.bind(var9)(var4);
                    SaveGenerator(address=243);
 241:
                    return var4;
 243:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 437; continue _fun0001 }
 252:
                    var5 = var4;
                    var8 = var4.body;
                    if(!(var12 != var8)) { _fun0001_ip = 435; continue _fun0001 }
 267:
                    var8 = var5;
                    var13 = var8.body;
                    var7 = var13;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 8;
                    var8 = var10[var8];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    var8['type'] = var11;
                    var11 = var6;
                    var8['guildId'] = var11;
                    var11 = {};
                    var14 = var13.version;
                    var11['version'] = var14;
                    var14 = var13.description;
                    var11['description'] = var14;
                    var14 = var13.form_fields;
                    var11['formFields'] = var14;
                    var14 = var13.guild;
                    var11['guild'] = var14;
                    var13 = var13.profile;
                    var13 = var12 != var13;
                    var12 = null;
                    if(!var13) { _fun0001_ip = 417; continue _fun0001 }
 377:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var13 = 9;
                    var13 = var15[var13];
                    var15 = var14.bind(var2)(var13);
                    var14 = var15.buildGuildProfileFromServer;
                    var13 = var7;
                    var13 = var13.profile;
                    var12 = var14.bind(var15)(var13);
 417:
                    var11['profile'] = var12;
                    var8['form'] = var11;
                    var8 = var9.bind(var10)(var8);
 432: // try_end0
                    return var7;
 435: // try_start_1
                    throw var5;
 437: // try_end1
                    return var4;
 440: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'MEMBER_VERIFICATION_FORM_FETCH_FAIL';
                    var3['type'] = var7;
                    var3['guildId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 491:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var12 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 222; continue _fun0002 }
 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.patch;
                    var2 = {};
                    var9 = _closure1_slot9;
                    var8 = var9.GUILD_MEMBER_VERIFICATION;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = {};
                    var9 = arg2;
                    var8['form_fields'] = var9;
                    var9 = arg3;
                    var8['enabled'] = var9;
                    var9 = arg4;
                    var8['bulk_action'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=123);
 121:
                    return var2;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 219; continue _fun0002 }
 129:
                    var8 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    var4['type'] = var9;
                    var4['guildId'] = var7;
                    var7 = {};
                    var9 = var8.version;
                    var7['version'] = var9;
                    var9 = var8.description;
                    var7['description'] = var9;
                    var8 = var8.form_fields;
                    var7['formFields'] = var8;
                    var4['form'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 219:
                    return var2;
 222:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var11 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 204; continue _fun0003 }
 13:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.patch;
                    var2 = {};
                    var9 = _closure1_slot9;
                    var8 = var9.GUILD_MEMBER_VERIFICATION;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = {};
                    var9 = arg2;
                    var8['description'] = var9;
                    var2['body'] = var8;
                    var8 = true;
                    var2['oldFormErrors'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=105);
 103:
                    return var2;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 201; continue _fun0003 }
 111:
                    var8 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 8;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'MEMBER_VERIFICATION_FORM_UPDATE';
                    var4['type'] = var9;
                    var4['guildId'] = var7;
                    var7 = {};
                    var9 = var8.version;
                    var7['version'] = var9;
                    var9 = var8.description;
                    var7['description'] = var9;
                    var8 = var8.form_fields;
                    var7['formFields'] = var8;
                    var4['form'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 201:
                    return var2;
 204:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var10 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 114; continue _fun0004 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var8 = _closure1_slot9;
                    var7 = var8.GUILD_MEMBER_VERIFICATION;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg2;
                    var6['enabled'] = var7;
                    var2['body'] = var6;
                    var6 = true;
                    var2['oldFormErrors'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=102);
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 111; continue _fun0004 }
 108:
                    return var3;
 111:
                    return var2;
 114:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var9 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 958; continue _fun0005 }
 18:
                    var4 = var3;
                    var _closure4_slot0 = var3;
                    var14 = arg2;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0005_ip = 37; continue _fun0005 }
 34:
                    var2 = 200;
 37:
                    var12 = var2;
                    var7 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=50);
 48:
                    return var3;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 955; continue _fun0005 }
 59:
                    var15 = _closure1_slot4;
                    var13 = var15.isFullServerPreview;
                    var6 = var4;
                    var6 = var13.bind(var15)(var6);
                    if(var6) { _fun0005_ip = 901; continue _fun0005 }
 86: // try_start_0
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 6;
                    var6 = var15[var6];
                    var6 = var13.bind(var3)(var6);
                    var15 = var6.HTTP;
                    var13 = var15.put;
                    var6 = {};
                    var18 = _closure1_slot9;
                    var17 = var18.GUILD_MEMBER_REQUEST_TO_JOIN;
                    var16 = var4;
                    var16 = var17.bind(var18)(var16);
                    var6['url'] = var16;
                    var16 = {};
                    var17 = var14;
                    var18 = var17.version;
                    var16['version'] = var18;
                    var17 = var17.formFields;
                    var16['form_fields'] = var17;
                    var6['body'] = var16;
                    var16 = false;
                    var6['rejectWithError'] = var16;
                    var6 = var13.bind(var15)(var6);
                    SaveGenerator(address=187);
 185:
                    return var6;
 187:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0005_ip = 335; continue _fun0005 }
 196:
                    var18 = var6.body;
                    var9 = var18;
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var13 = 8;
                    var13 = var17[var13];
                    var16 = var15.bind(var3)(var13);
                    var15 = var16.dispatch;
                    var13 = {};
                    var19 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                    var13['type'] = var19;
                    var19 = var4;
                    var13['guildId'] = var19;
                    var13['request'] = var18;
                    var13 = var15.bind(var16)(var13);
                    var16 = _closure1_slot0;
                    var15 = 11;
                    var15 = var17[var15];
                    var16 = var16.bind(var3)(var15);
                    var15 = var16.hasNonTermsFormField;
                    var14 = var14.formFields;
                    var14 = var15.bind(var16)(var14);
                    var13 = var14;
                    if(!var14) { _fun0005_ip = 310; continue _fun0005 }
 297:
                    var15 = var12;
                    var14 = -1;
                    var13 = var14 !== var15;
 310:
                    if(!var13) { _fun0005_ip = 332; continue _fun0005 }
 313:
                    var13 = global;
                    var13 = var13.setTimeout;
                    var10 = function() {
                        var3 = _closure1_slot10;
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var10 = var13.bind(var3)(var10, var12);
 332: // try_end0
                    return var9;
 335:
                    return var6;
 338: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var8 = var6;
                    var9 = var6.status;
                    var6 = 429;
                    if(!(var6 !== var9)) { _fun0005_ip = 623; continue _fun0005 }
 361:
                    var6 = 403;
                    if(!(var6 !== var9)) { _fun0005_ip = 543; continue _fun0005 }
 374:
                    var6 = {};
                    var12 = var8;
                    var21 = var6;
                    var20 = var12;
                    var9 = copyDataProperties(var21, var20);
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 15;
                    var9 = var13[var9];
                    var9 = var10.bind(var3)(var9);
                    var9 = var9.APIError;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var22 = var10;
                    var21 = var12;
                    var9 = new var22[var9](var21, var20);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var11 = var9;
                    var10 = null;
                    var12 = var10 == var9;
                    var9 = undefined;
                    if(var12) { _fun0005_ip = 465; continue _fun0005 }
 452:
                    var12 = var11;
                    var11 = var12.getAnyErrorMessage;
                    var9 = var11.bind(var12)();
 465:
                    var7 = var9;
                    if(!(var10 == var9)) { _fun0005_ip = 529; continue _fun0005 }
 472:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 14;
                    var10 = var13[var9];
                    var10 = var12.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.R0RpRU;
                    var9 = var10.bind(var11)(var9);
                    _fun0005_ip = 532; continue _fun0005;
 529:
                    var9 = var7;
 532:
                    var7 = 'message';
                    var6[var7] = var9;
                    throw var6;
 543:
                    var6 = {};
                    var20 = var8;
                    var21 = var6;
                    var7 = copyDataProperties(var21, var20);
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 14;
                    var9 = var12[var7];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var7 = var12[var7];
                    var7 = var11.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.8T1rxM;
                    var9 = var9.bind(var10)(var7);
                    var7 = 'message';
                    var6[var7] = var9;
                    throw var6;
 623:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 12;
                    var6 = var11[var6];
                    var7 = var10.bind(var3)(var6);
                    var6 = var7.closeContextMenu;
                    var6 = var6.bind(var7)();
                    var7 = _closure1_slot1;
                    var6 = 13;
                    var6 = var11[var6];
                    var12 = var7.bind(var3)(var6);
                    var9 = var12.show;
                    var6 = {};
                    var7 = 14;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.MmIrpa;
                    var13 = var14.bind(var15)(var13);
                    var6['title'] = var13;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.yjpDQ0;
                    var13 = var14.bind(var15)(var13);
                    var6['body'] = var13;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var15 = var13.intl;
                    var14 = var15.string;
                    var13 = var11[var7];
                    var13 = var10.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.XNGT1N;
                    var13 = var14.bind(var15)(var13);
                    var6['confirmText'] = var13;
                    var6 = var9.bind(var12)(var6);
                    var6 = {};
                    var20 = var8;
                    var21 = var6;
                    var8 = copyDataProperties(var21, var20);
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.yjpDQ0;
                    var8 = var8.bind(var9)(var7);
                    var7 = 'message';
                    var6[var7] = var8;
                    throw var6;
 901:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 10;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.updateImpersonatedData;
                    var5 = var4;
                    var4 = {};
                    var8 = {};
                    var9 = false;
                    var8['isPending'] = var9;
                    var4['memberOptions'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    return var3;
 955:
                    return var2;
 958:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var8 = var4.bind(var1)();
    var4 = {};
    var4['fetchVerificationForm'] = var12;
    var4['updateVerificationForm'] = var11;
    var11 = function updateVerificationFormFieldsLocal(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MEMBER_VERIFICATION_FORM_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = {};
        var6 = arg2;
        var5['formFields'] = var6;
        var2['form'] = var5;
        var5 = true;
        var2['isLocalUpdate'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['updateVerificationFormFieldsLocal'] = var11;
    var4['updateVerificationFormDescription'] = var10;
    var10 = function updateVerificationFormDescriptionLocal(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MEMBER_VERIFICATION_FORM_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var5 = {};
        var6 = arg2;
        var5['description'] = var6;
        var2['form'] = var5;
        var5 = true;
        var2['isLocalUpdate'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['updateVerificationFormDescriptionLocal'] = var10;
    var4['enableVerificationForm'] = var9;
    var4['submitVerificationForm'] = var8;
    var8 = function clearCoachmark() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['clearCoachmark'] = var8;
    var5 = function reportApplication(arg1) {
        var1 = arg1;
        var9 = var1.guild;
        var11 = var1.guildJoinRequest;
        var10 = var1.guildJoinRequestUser;
        var8 = var1.reason;
        var7 = var1.reasonOther;
        var6 = var1.responses;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 16;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot8;
        var3 = var2.GUILD_MEMBER_APPLICATION_REPORTED;
        var2 = {};
        var11 = var11.joinRequestId;
        var2['application_id'] = var11;
        var10 = var10.id;
        var2['applicant_id'] = var10;
        var9 = var9.id;
        var2['guild_id'] = var9;
        var2['reason'] = var8;
        var2['reason_other'] = var7;
        var2['responses'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var4['reportApplication'] = var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/MemberVerificationActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = -1;
    var3['DISABLE_JOIN_REQUEST_COACHMARK'] = var4;
    var3['showCoachmark'] = var2;
    return var1;
})();