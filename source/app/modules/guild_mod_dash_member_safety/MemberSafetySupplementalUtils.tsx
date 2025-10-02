// app/modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function pendingMemberRequestKey(arg1, arg2) {
        var2 = arg1;
        var1 = arg2;
        var1 = var2 + var1;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function createFetchKeys(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.map;
        var1 = function(arg1) {
            var4 = _closure1_slot9;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function getUserIdFromFetchKey(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '-';
        var2 = var2.bind(var3)(var1);
        var1 = 1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function updateFetchRequests(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _transformFetchMemberSupplementalResponse(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.source_invite_code;
        var1['sourceInviteCode'] = var3;
        var3 = var2.join_source_type;
        var1['joinSourceType'] = var3;
        var3 = var2.inviter_id;
        var1['inviterId'] = var3;
        var2 = var2.integration_type;
        var1['integrationType'] = var2;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchMemberSupplemental() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var8 = var10;
                    var5 = undefined;
                    var3 = undefined;
                    var11 = undefined;
                    var6 = undefined;
                    var _closure4_slot0 = var5;
                    var9 = _closure1_slot10;
                    var4 = arg2;
                    var9 = var9.bind(var5)(var10, var4);
                    var3 = var9;
                    var4 = function getFetchchableUsers(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var3 = _closure1_slot5;
                            var2 = arg1;
                            var2 = var3[var2];
                            var1 = _closure1_slot6;
                            var1 = var1.UNFETCHED;
                            var1 = var2 <= var1;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.map;
                        var1 = _closure1_slot11;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var9);
                    var11 = var4;
                    var9 = var4.length;
                    var4 = 0;
                    if(!(var4 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var10 = _closure1_slot12;
                    var9 = var3;
                    var4 = _closure1_slot6;
                    var4 = var4.PENDING;
                    var4 = var10.bind(var5)(var9, var4);
case 6: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 7;
                    var4 = var10[var4];
                    var4 = var9.bind(var5)(var4);
                    var10 = var4.HTTP;
                    var9 = var10.post;
                    var4 = {};
                    var14 = _closure1_slot4;
                    var13 = var14.MEMBER_SAFETY_SUPPLEMENTAL;
                    var12 = var8;
                    var12 = var13.bind(var14)(var12);
                    var4['url'] = var12;
                    var12 = {};
                    var13 = var11;
                    var12['user_ids'] = var13;
                    var4['body'] = var12;
                    var12 = true;
                    var4['rejectWithError'] = var12;
                    var4 = var9.bind(var10)(var4);
                    SaveGenerator(address=183);
case 7:
                    return var4;
case 8:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var4;
                    var9 = global;
                    var12 = var9.Array;
                    var10 = var12.isArray;
                    var9 = var4.body;
                    var9 = var10.bind(var12)(var9);
                    if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var12 = _closure1_slot12;
                    var10 = var3;
                    var9 = _closure1_slot6;
                    var9 = var9.FAILED;
                    var9 = var12.bind(var5)(var10, var9);
case 13: // try_end0
                    var9 = new Array(0);
                    return var9;
case 11: // try_start_1
                    var10 = var6.body;
                    var9 = var10.map;
                    var6 = _closure1_slot13;
                    var6 = var9.bind(var10)(var6);
                    var10 = new Array(0);
                    _closure4_slot0 = var10;
                    var12 = var6.forEach;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.userId;
                        var2 = _closure4_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        return var1;
                    };
                    var9 = var12.bind(var6)(var9);
                    var9 = _closure1_slot10;
                    var10 = var9.bind(var5)(var8, var10);
                    var12 = var11;
                    var11 = var12.filter;
                    var7 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var7 = var11.bind(var12)(var7);
                    var9 = var9.bind(var5)(var8, var7);
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot6;
                    var7 = var7.SUCCEEDED;
                    var7 = var8.bind(var5)(var10, var7);
                    var7 = _closure1_slot6;
                    var7 = var7.FAILED;
                    var7 = var8.bind(var5)(var9, var7);
case 14: // try_end1
                    return var6;
case 9:
                    return var4;
case 15: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot6;
                    var2 = var2.FAILED;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = new Array(0);
                    return var2;
case 4:
                    var2 = new Array(0);
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var12 = 0;
    var4 = var8[var12];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var8[var11];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = {};
    var _closure1_slot5 = var4;
    var4 = {};
    var4['FAILED'] = var12;
    var5 = 'FAILED';
    var4[var12] = var5;
    var4['UNFETCHED'] = var11;
    var5 = 'UNFETCHED';
    var4[var11] = var5;
    var10 = 2;
    var4['PENDING'] = var10;
    var5 = 'PENDING';
    var4[var10] = var5;
    var9 = 3;
    var4['SUCCEEDED'] = var9;
    var5 = 'SUCCEEDED';
    var4[var9] = var5;
    var6 = 4;
    var4['FAILED_NO_RETRY'] = var6;
    var5 = 'FAILED_NO_RETRY';
    var4[var6] = var5;
    var _closure1_slot6 = var4;
    var5 = {};
    var5['UNSPECIFIED'] = var12;
    var4 = 'UNSPECIFIED';
    var5[var12] = var4;
    var5['BOT'] = var11;
    var4 = 'BOT';
    var5[var11] = var4;
    var5['INTEGRATION'] = var10;
    var4 = 'INTEGRATION';
    var5[var10] = var4;
    var5['DISCOVERY'] = var9;
    var4 = 'DISCOVERY';
    var5[var9] = var4;
    var5['HUB'] = var6;
    var4 = 'HUB';
    var5[var6] = var4;
    var6 = 5;
    var5['INVITE'] = var6;
    var4 = 'INVITE';
    var5[var6] = var4;
    var6 = 6;
    var5['VANITY_URL'] = var6;
    var4 = 'VANITY_URL';
    var5[var6] = var4;
    var6 = 7;
    var5['MANUAL_MEMBER_VERIFICATION'] = var6;
    var4 = 'MANUAL_MEMBER_VERIFICATION';
    var5[var6] = var4;
    var6 = 8;
    var5['SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL'] = var6;
    var4 = 'SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL';
    var5[var6] = var4;
    var _closure1_slot7 = var5;
    var4 = {};
    var9 = 'discord';
    var4['DISCORD'] = var9;
    var9 = 'twitch';
    var4['TWITCH'] = var9;
    var9 = 'youtube';
    var4['YOUTUBE'] = var9;
    var9 = 'guild_subscription';
    var4['GUILD_SUBSCRIPTION'] = var9;
    var _closure1_slot8 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function registerFetchedSupplementals(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var6 = _closure2_slot0;
            var2 = _closure1_slot6;
            var4 = var2.SUCCEEDED;
            var3 = _closure1_slot5;
            var5 = _closure1_slot9;
            var1 = undefined;
            var2 = arg1;
            var2 = var5.bind(var1)(var6, var2);
            var3[var2] = var4;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['registerFetchedSupplementals'] = var6;
    var3['JoinSourceType'] = var5;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var7 = arguments[1];
            var2 = arguments[2];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 16; continue _fun0002 }
case 3:
            var7 = null;
case 16:
            if(!(var2 === var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = false;
case 17:
            var3 = _closure1_slot7;
            var3 = var3.BOT;
            if(!(var3 !== var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var3 = _closure1_slot7;
            var3 = var3.INTEGRATION;
            if(!(var3 !== var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot7;
            var3 = var3.DISCOVERY;
            if(!(var3 !== var4)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = _closure1_slot7;
            var3 = var3.HUB;
            if(!(var3 !== var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = _closure1_slot7;
            var3 = var3.INVITE;
            if(!(var3 !== var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = _closure1_slot7;
            var3 = var3.VANITY_URL;
            if(!(var3 !== var4)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = _closure1_slot7;
            var3 = var3.MANUAL_MEMBER_VERIFICATION;
            if(!(var3 !== var4)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = _closure1_slot7;
            var3 = var3.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL;
            if(!(var3 !== var4)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.DvMBkZ;
            var3 = var4.bind(var6)(var3);
            return var3;
case 33:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.9/ZreX;
            var3 = var4.bind(var6)(var3);
            return var3;
case 31:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var4 = var9[var3];
            var4 = var8.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.vdu7oa;
            var3 = var4.bind(var6)(var3);
            return var3;
case 29:
            var3 = null;
            if(!(var3 != var7)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            if(var2) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.EIUjR0;
            var2 = {};
            var2['vanityUrl'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            _fun0002_ip = 38; continue _fun0002;
case 35:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var4 = var8[var3];
            var4 = var7.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.dGiD1N;
            var2 = var4.bind(var6)(var3);
case 38:
            return var2;
case 27:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2./3vIRU;
            var2 = var3.bind(var4)(var2);
            return var2;
case 25:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Op8B3N;
            var2 = var3.bind(var4)(var2);
            return var2;
case 23:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Ql/e9f;
            var2 = var3.bind(var4)(var2);
            return var2;
case 21:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gmCUFx;
            var2 = var3.bind(var4)(var2);
            return var2;
case 19:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.HumZAg;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getJoinSourceTypeLabel'] = var5;
    var3['IntegrationType'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot8;
            var2 = var2.TWITCH;
            if(!(var2 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 17:
            var2 = _closure1_slot8;
            var2 = var2.YOUTUBE;
            if(!(var2 !== var3)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gmCUFx;
            var2 = var3.bind(var4)(var2);
            return var2;
case 40:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.PHSAsr;
            var2 = var3.bind(var4)(var2);
            return var2;
case 39:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.AVGAk5;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getIntegrationLabel'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 3;
            var1 = var5[var1];
            var6 = undefined;
            var7 = var4.bind(var6)(var1);
            var2 = var7.get;
            var8 = _closure1_slot0;
            var1 = 4;
            var1 = var5[var1];
            var8 = var8.bind(var6)(var1);
            var1 = var8.useLegacyPlatformType;
            var1 = var1.bind(var8)(var9);
            var2 = var2.bind(var7)(var1);
            var1 = 5;
            var1 = var5[var1];
            var1 = var4.bind(var6)(var1);
            var5 = var1.bind(var6)();
            var7 = null;
            var4 = var7 != var2;
            var1 = null;
            if(!var4) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var4 = _closure1_slot8;
            var10 = var4.TWITCH;
            var8 = new Array(2);
            var8[0] = var10;
            var4 = var4.YOUTUBE;
            var8[1] = var4;
            var4 = var8.includes;
            var4 = var4.bind(var8)(var9);
            var1 = null;
            if(!var4) { _fun0004_ip = 42; continue _fun0004 }
case 44:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isThemeDark;
            var3 = var3.bind(var4)(var5);
            var2 = var2.icon;
            if(var3) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var5 = var2.lightSVG;
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var5 = var2.darkSVG;
case 47:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = "url('";
            var2 = "')";
            var1 = var4.bind(var3)(var5, var2);
case 42:
            return var1;
        }
    };
    var3['useGetIntegrationIconString'] = var4;
    var2 = function fetchMemberSupplemental() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMemberSupplemental'] = var2;
    return var1;
})();