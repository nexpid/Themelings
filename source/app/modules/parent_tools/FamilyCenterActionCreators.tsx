// app/modules/parent_tools/FamilyCenterActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _updateLinkForUserId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['linked_user_id'] = var7;
                    var7 = arg2;
                    var6['link_status'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS';
                        var2['type'] = var5;
                        var2['linkedUsers'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=113);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _removeLinkForUserId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.del;
                    var4 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.FAMILY_CENTER_LINKED_USERS;
                    var4['url'] = var7;
                    var7 = {};
                    var7['linked_user_id'] = var8;
                    var4['body'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS';
                        var2['type'] = var5;
                        var2['linkedUsers'] = var1;
                        var5 = _closure4_slot0;
                        var2['deletedUserId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=109);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    return var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _getLinkCodeForCurrentUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.FAMILY_CENTER_LINK_CODE;
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        var1 = var1.link_code;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS';
                        var2['type'] = var5;
                        var2['linkCode'] = var1;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=90);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    return var3;
case 17:
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _shareIarWithParents() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS;
                    var2['url'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=74);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.FamilyCenterAction;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot6 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = {};
    var5 = function initialPageLoad() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 4;
                    var2 = var5[var9];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var3 = var7.dispatch;
                    var2 = {};
                    var8 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var8;
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure1_slot0;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=114);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = var2.body;
                    var11 = var3.teen_audit_log;
                    var8 = var3.linked_users;
                    var7 = var3.users;
                    var3 = {};
                    var10 = null;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var5 = var11.teen_user_id;
case 30:
                    var3['teenId'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var5 = var11.range_start_id;
case 32:
                    var3['rangeStartId'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var5 = var11.totals;
case 34:
                    if(!(var10 == var5)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var5 = {};
case 36:
                    var3['totals'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var5 = var11.actions;
case 38:
                    if(!(var10 == var5)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var5 = new Array(0);
case 40:
                    var3['actions'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var5 = var11.users;
case 42:
                    if(!(var10 == var5)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                    var5 = new Array(0);
case 44:
                    var3['users'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var5 = var11.guilds;
case 46:
                    if(!(var10 == var5)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var5 = new Array(0);
case 48:
                    var3['guilds'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var5 = var11.top_user_activities;
case 50:
                    if(!(var10 == var5)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var5 = new Array(0);
case 52:
                    var3['topUserActivities'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var5 = var11.top_guild_activities;
case 54:
                    if(!(var10 == var5)) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                    var5 = new Array(0);
case 56:
                    var3['topGuildActivities'] = var5;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'FAMILY_CENTER_INITIAL_LOAD';
                    var4['type'] = var9;
                    var4['familyCenterTeenActivity'] = var3;
                    var4['linkedUsers'] = var8;
                    var4['users'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 28:
                    return var2;
case 24:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['initialPageLoad'] = var5;
    var5 = function fetchLinkedUsers() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 25:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=76);
case 21:
                    return var2;
case 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var9 = var4;
                    var8 = var3;
                    var7 = copyDataProperties(var9, var8);
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 60:
                    return var2;
case 58:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchLinkedUsers'] = var5;
    var5 = function requestLink(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
case 25:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var7 = var7.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var7;
                    var7 = {};
                    var9 = _closure2_slot0;
                    var7['recipient_id'] = var9;
                    var8 = _closure2_slot1;
                    var7['code'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=103);
case 63:
                    return var2;
case 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 65; continue _fun0007 }
case 11:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'FAMILY_CENTER_REQUEST_LINK_SUCCESS';
                    var4['type'] = var7;
                    var11 = var4;
                    var10 = var3;
                    var7 = copyDataProperties(var11, var10);
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 65:
                    return var2;
case 62:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['requestLink'] = var5;
    var5 = function fetchTeenActivity(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 25:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 4;
                    var2 = var5[var7];
                    var6 = undefined;
                    var8 = var3.bind(var6)(var2);
                    var3 = var8.dispatch;
                    var2 = {};
                    var9 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var9;
                    var2 = var3.bind(var8)(var2);
                    var8 = _closure1_slot7;
                    var3 = var8.FAMILY_CENTER_TEEN_ACTIVITY;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var8)(var2);
                    var3 = _closure1_slot0;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=126);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var3 = var2.body;
                    var5 = var3.teen_audit_log;
                    var3 = {};
                    var8 = var5.teen_user_id;
                    var3['teenId'] = var8;
                    var8 = var5.range_start_id;
                    var3['rangeStartId'] = var8;
                    var8 = var5.totals;
                    var3['totals'] = var8;
                    var8 = var5.actions;
                    var3['actions'] = var8;
                    var8 = var5.users;
                    var3['users'] = var8;
                    var8 = var5.guilds;
                    var3['guilds'] = var8;
                    var9 = var5.top_user_activities;
                    var8 = null;
                    if(!(var8 == var9)) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                    var9 = new Array(0);
case 71:
                    var3['topUserActivities'] = var9;
                    var5 = var5.top_guild_activities;
                    if(!(var8 == var5)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                    var5 = new Array(0);
case 73:
                    var3['topGuildActivities'] = var5;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var4['familyCenterTeenActivity'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 69:
                    return var2;
case 66:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchTeenActivity'] = var5;
    var5 = function fetchMoreTeenActivity(arg1, arg2, arg3, arg4) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 75; continue _fun0009 }
case 25:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot7;
                    var10 = var11.FAMILY_CENTER_TEEN_ACTIVITY_MORE;
                    var17 = _closure2_slot0;
                    var16 = _closure2_slot1;
                    var15 = _closure2_slot2;
                    var14 = _closure2_slot3;
                    var18 = var11;
                    var5 = var18[var10](var17, var16, var15, var14, var13);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=102);
case 76:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 77; continue _fun0009 }
case 4:
                    var3 = var2.body;
                    var3 = var3.teen_audit_log;
                    var7 = {};
                    var4 = var3.teen_user_id;
                    var7['teenId'] = var4;
                    var4 = var3.range_start_id;
                    var7['rangeStartId'] = var4;
                    var4 = var3.actions;
                    var7['actions'] = var4;
                    var4 = var3.users;
                    var7['users'] = var4;
                    var4 = var3.guilds;
                    var7['guilds'] = var4;
                    var4 = var3.top_user_activities;
                    var5 = null;
                    if(!(var5 == var4)) { _fun0009_ip = 78; continue _fun0009 }
case 65:
                    var4 = new Array(0);
case 78:
                    var7['topUserActivities'] = var4;
                    var4 = var3.top_guild_activities;
                    if(!(var5 == var4)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                    var4 = new Array(0);
case 79:
                    var7['topGuildActivities'] = var4;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var11 = var5.bind(var6)(var4);
                    var10 = var11.track;
                    var4 = _closure1_slot6;
                    var9 = var4.FAMILY_CENTER_ACTION;
                    var4 = {};
                    var13 = _closure1_slot5;
                    var13 = var13.LoadMore;
                    var4['action'] = var13;
                    var13 = _closure2_slot0;
                    var4['selected_teen_id'] = var13;
                    var12 = _closure2_slot1;
                    var4['action_display_type'] = var12;
                    var4 = var10.bind(var11)(var9, var4);
                    var4 = 4;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['familyCenterTeenActivity'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 77:
                    return var2;
case 75:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['fetchMoreTeenActivity'] = var5;
    var5 = function selectTab(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FAMILY_CENTER_HANDLE_TAB_SELECT';
        var2['type'] = var5;
        var5 = arg1;
        var2['tab'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['selectTab'] = var5;
    var5 = function fetchTeenSettingsAndConsents(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var6 = _closure1_slot7;
        var5 = var6.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var6 = var1.settings;
            var5 = var1.consents;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS';
            var2['type'] = var7;
            var7 = _closure2_slot0;
            var2['userId'] = var7;
            var2['settings'] = var6;
            var2['consents'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['fetchTeenSettingsAndConsents'] = var5;
    var5 = function updateTeenSettings(arg1, arg2, arg3) {
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 81; continue _fun0010 }
case 25:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 7;
                    var6 = var2[var7];
                    var3 = undefined;
                    var9 = var5.bind(var3)(var6);
                    var6 = var9.getProtoFieldClass;
                    var14 = 8;
                    var2 = var2[var14];
                    var2 = var5.bind(var3)(var2);
                    var5 = var2.PreloadedUserSettings;
                    var2 = _closure2_slot1;
                    var12 = var6.bind(var9)(var5, var2);
                    var6 = _closure1_slot4;
                    var5 = var6.getSettings;
                    var2 = _closure2_slot0;
                    var6 = var5.bind(var6)(var2);
                    var2 = null;
                    var5 = var2 == var6;
                    var11 = undefined;
                    if(var5) { _fun0010_ip = 82; continue _fun0010 }
case 14:
                    var5 = _closure2_slot1;
                    var11 = var6[var5];
case 82:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = var5[var7];
                    var10 = var6.bind(var3)(var7);
                    var9 = var10.createModifiedProto;
                    var18 = _closure2_slot2;
                    var5 = var5[var14];
                    var5 = var6.bind(var3)(var5);
                    var16 = var5.PreloadedUserSettings;
                    var15 = _closure2_slot1;
                    var20 = var10;
                    var19 = var11;
                    var17 = var12;
                    var12 = var20[var9](var19, var18, var17, var16, var15, var14);
                    if(!(var2 != var12)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var2 = var9[var2];
                    var2 = var13.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.patch;
                    var2 = {};
                    var11 = _closure1_slot7;
                    var10 = var11.FAMILY_CENTER_TEEN_SETTINGS;
                    var7 = _closure2_slot0;
                    var7 = var10.bind(var11)(var7);
                    var2['url'] = var7;
                    var7 = {};
                    var10 = 9;
                    var10 = var9[var10];
                    var11 = var13.bind(var3)(var10);
                    var10 = var11.protoToB64;
                    var9 = var9[var14];
                    var9 = var13.bind(var3)(var9);
                    var9 = var9.PreloadedUserSettings;
                    var9 = var10.bind(var11)(var9, var12);
                    var7['settings'] = var9;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=297);
case 48:
                    return var2;
case 85:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 86; continue _fun0010 }
case 87:
                    var5 = var2.body;
                    var7 = var5.settings;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var9 = 'FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS';
                    var4['type'] = var9;
                    var8 = _closure2_slot0;
                    var4['userId'] = var8;
                    var4['settings'] = var7;
                    var4 = var5.bind(var6)(var4);
case 83:
                    return var3;
case 86:
                    return var2;
case 81:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['updateTeenSettings'] = var5;
    var5 = function updateTeenConsents(arg1, arg2, arg3) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var6 = _closure1_slot7;
        var5 = var6.FAMILY_CENTER_TEEN_CONSENTS;
        var5 = var5.bind(var6)(var7);
        var2['url'] = var5;
        var5 = {};
        var6 = arg2;
        var5['grant'] = var6;
        var6 = arg3;
        var5['revoke'] = var6;
        var2['body'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var5 = var1.consents;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS';
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var2['userId'] = var6;
            var2['consents'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['updateTeenConsents'] = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function updateLinkForUserId() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateLinkForUserId'] = var4;
    var4 = function removeLinkForUserId() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeLinkForUserId'] = var4;
    var4 = function getLinkCodeForCurrentUser() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getLinkCodeForCurrentUser'] = var4;
    var2 = function shareIarWithParents() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['shareIarWithParents'] = var2;
    return var1;
})();