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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 125; continue _fun0001 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var6 = _closure1_slot6;
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
                        var2 = 3;
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
 111:
                    return var2;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 122; continue _fun0001 }
 119:
                    return var3;
 122:
                    return var2;
 125:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _removeLinkForUserId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 121; continue _fun0002 }
 12:
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.del;
                    var4 = {};
                    var7 = _closure1_slot6;
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
                        var2 = 3;
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
 107:
                    return var2;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 118; continue _fun0002 }
 115:
                    return var3;
 118:
                    return var2;
 121:
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
    var1 = function _getLinkCodeForCurrentUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 102; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var6 = _closure1_slot6;
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
                        var2 = 3;
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
 88:
                    return var2;
 90:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 99; continue _fun0003 }
 96:
                    return var3;
 99:
                    return var2;
 102:
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
    var4 = var6.bind(var1)(var4);
    var4 = var4.FamilyCenterAction;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot5 = var5;
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = {};
    var5 = function initialPageLoad() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 358; continue _fun0004 }
 10:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var9 = 3;
                    var2 = var5[var9];
                    var6 = undefined;
                    var7 = var3.bind(var6)(var2);
                    var3 = var7.dispatch;
                    var2 = {};
                    var8 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var8;
                    var2 = var3.bind(var7)(var2);
                    var3 = _closure1_slot0;
                    var2 = 4;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=114);
 112:
                    return var2;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 355; continue _fun0004 }
 123:
                    var3 = var2.body;
                    var11 = var3.teen_audit_log;
                    var8 = var3.linked_users;
                    var7 = var3.users;
                    var3 = {};
                    var10 = null;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 165; continue _fun0004 }
 159:
                    var5 = var11.teen_user_id;
 165:
                    var3['teenId'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 185; continue _fun0004 }
 179:
                    var5 = var11.range_start_id;
 185:
                    var3['rangeStartId'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 205; continue _fun0004 }
 199:
                    var5 = var11.totals;
 205:
                    if(!(var10 == var5)) { _fun0004_ip = 211; continue _fun0004 }
 209:
                    var5 = {};
 211:
                    var3['totals'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 231; continue _fun0004 }
 225:
                    var5 = var11.actions;
 231:
                    if(!(var10 == var5)) { _fun0004_ip = 239; continue _fun0004 }
 235:
                    var5 = new Array(0);
 239:
                    var3['actions'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 259; continue _fun0004 }
 253:
                    var5 = var11.users;
 259:
                    if(!(var10 == var5)) { _fun0004_ip = 267; continue _fun0004 }
 263:
                    var5 = new Array(0);
 267:
                    var3['users'] = var5;
                    var12 = var10 == var11;
                    var5 = undefined;
                    if(var12) { _fun0004_ip = 287; continue _fun0004 }
 281:
                    var5 = var11.guilds;
 287:
                    if(!(var10 == var5)) { _fun0004_ip = 295; continue _fun0004 }
 291:
                    var5 = new Array(0);
 295:
                    var3['guilds'] = var5;
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
 355:
                    return var2;
 358:
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 167; continue _fun0005 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=76);
 74:
                    return var2;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 164; continue _fun0005 }
 82:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
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
 164:
                    return var2;
 167:
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
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 194; continue _fun0006 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var7 = _closure1_slot6;
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
 101:
                    return var2;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 191; continue _fun0006 }
 109:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 3;
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
 191:
                    return var2;
 194:
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 262; continue _fun0007 }
 10:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 3;
                    var2 = var5[var7];
                    var6 = undefined;
                    var8 = var3.bind(var6)(var2);
                    var3 = var8.dispatch;
                    var2 = {};
                    var9 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var9;
                    var2 = var3.bind(var8)(var2);
                    var8 = _closure1_slot6;
                    var3 = var8.FAMILY_CENTER_TEEN_ACTIVITY;
                    var2 = _closure2_slot0;
                    var8 = var3.bind(var8)(var2);
                    var3 = _closure1_slot0;
                    var2 = 4;
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
 124:
                    return var2;
 126:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 259; continue _fun0007 }
 135:
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
                    var5 = var5.guilds;
                    var3['guilds'] = var5;
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
 259:
                    return var2;
 262:
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 299; continue _fun0008 }
 10:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot6;
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
 100:
                    return var2;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 296; continue _fun0008 }
 111:
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
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var11 = var5.bind(var6)(var4);
                    var10 = var11.track;
                    var4 = _closure1_slot5;
                    var9 = var4.FAMILY_CENTER_ACTION;
                    var4 = {};
                    var13 = _closure1_slot4;
                    var13 = var13.LoadMore;
                    var4['action'] = var13;
                    var13 = _closure2_slot0;
                    var4['selected_teen_id'] = var13;
                    var12 = _closure2_slot1;
                    var4['action_display_type'] = var12;
                    var4 = var10.bind(var11)(var9, var4);
                    var4 = 3;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['familyCenterTeenActivity'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 296:
                    return var2;
 299:
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
        var1 = 3;
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
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var6 = _closure1_slot6;
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
            var1 = 3;
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
        var8 = arg1;
        var _closure2_slot0 = var8;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var6 = 6;
        var2 = var12[var6];
        var10 = undefined;
        var2 = var11.bind(var10)(var2);
        var3 = var2.PreloadedUserSettings;
        var2 = var3.create;
        var9 = var2.bind(var3)();
        var2 = arg2;
        var3 = var9[var2];
        var2 = arg3;
        var2 = var2.bind(var10)(var3);
        var2 = 4;
        var2 = var12[var2];
        var2 = var11.bind(var10)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var7 = _closure1_slot6;
        var5 = var7.FAMILY_CENTER_TEEN_SETTINGS;
        var5 = var5.bind(var7)(var8);
        var2['url'] = var5;
        var5 = {};
        var7 = 7;
        var7 = var12[var7];
        var8 = var11.bind(var10)(var7);
        var7 = var8.protoToB64;
        var6 = var12[var6];
        var6 = var11.bind(var10)(var6);
        var6 = var6.PreloadedUserSettings;
        var6 = var7.bind(var8)(var6, var9);
        var5['settings'] = var6;
        var2['body'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.body;
            var5 = var1.settings;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS';
            var2['type'] = var6;
            var6 = _closure2_slot0;
            var2['userId'] = var6;
            var2['settings'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['updateTeenSettings'] = var5;
    var5 = function updateTeenConsents(arg1, arg2, arg3) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var6 = _closure1_slot6;
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
            var1 = 3;
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
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function updateLinkForUserId() {
        var1 = undefined;
        var4 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeLinkForUserId'] = var4;
    var2 = function getLinkCodeForCurrentUser() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getLinkCodeForCurrentUser'] = var2;
    return var1;
})();