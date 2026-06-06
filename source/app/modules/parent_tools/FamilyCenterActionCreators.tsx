// app/modules/parent_tools/FamilyCenterActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function maybeFetchCollectiblesForInvoices() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _maybeFetchCollectiblesForInvoices() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = global;
                    var4 = var6.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var10 = var5;
                    var4 = new var10[var4](var9);
                    var8 = var4 instanceof Object ? var4 : var5;
                    _closure4_slot0 = var8;
                    var5 = var7.forEach;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var2 = var1.invoice_items;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var2 = var1.invoice_items;
                            var4 = var2.length;
                            var2 = 0;
                            if(!(var4 > var2)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                            var1 = var1.invoice_items;
                            var1 = var1[var2];
                            var2 = var1.sku_id;
                            if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.sku_id;
                            var1 = var2.bind(var3)(var1);
case 4:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var7)(var4);
                    var5 = var6.Promise;
                    var4 = var5.all;
                    var7 = var6.Array;
                    var6 = var7.from;
                    var7 = var6.bind(var7)(var8);
                    var6 = var7.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.maybeFetchCollectiblesProduct;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=117);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    return var3;
case 10:
                    return var2;
case 2:
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
    var1 = function maybeFetchCollectiblesForGifts() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _maybeFetchCollectiblesForGifts() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = global;
                    var4 = var6.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var10 = var5;
                    var4 = new var10[var4](var9);
                    var8 = var4 instanceof Object ? var4 : var5;
                    _closure4_slot0 = var8;
                    var5 = var7.forEach;
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.sku_id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 5:
                            var3 = _closure4_slot0;
                            var2 = var3.add;
                            var1 = var1.sku_id;
                            var1 = var2.bind(var3)(var1);
case 12:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var7)(var4);
                    var5 = var6.Promise;
                    var4 = var5.all;
                    var7 = var6.Array;
                    var6 = var7.from;
                    var7 = var6.bind(var7)(var8);
                    var6 = var7.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.maybeFetchCollectiblesProduct;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=117);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    return var3;
case 10:
                    return var2;
case 2:
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
    var1 = function _updateLinkForUserId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
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
                        var2 = 5;
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
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    return var3;
case 17:
                    return var2;
case 13:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _removeLinkForUserId() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 3:
                    var _closure4_slot0 = var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
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
                        var2 = 5;
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
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 8:
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
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _getLinkCodeForCurrentUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 23; continue _fun0007 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
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
                        var2 = var1.body;
                        var1 = var2.link_code;
                        var5 = var2.expires_at;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS';
                        var2['type'] = var6;
                        var2['linkCode'] = var1;
                        var2['expiresAt'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=90);
case 24:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    return var3;
case 26:
                    return var2;
case 23:
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
    var1 = function _shareIarWithParents() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 28; continue _fun0008 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
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
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    return var3;
case 31:
                    return var2;
case 28:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
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
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var10 = 5;
                    var2 = var4[var10];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var7 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var7;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot0;
                    var2 = 6;
                    var2 = var4[var2];
                    var2 = var3.bind(var8)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=114);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 37; continue _fun0009 }
case 11:
                    var9 = var2.body;
                    var4 = var9.teen_audit_log;
                    var16 = var9.linked_users;
                    var15 = var9.users;
                    var14 = var9.age_group;
                    var5 = {};
                    var12 = null;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var3 = var4.teen_user_id;
case 38:
                    var5['teenId'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var3 = var4.range_start_id;
case 40:
                    var5['rangeStartId'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var3 = var4.totals;
case 42:
                    if(!(var12 == var3)) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var3 = {};
case 44:
                    var5['totals'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                    var3 = var4.actions;
case 46:
                    if(!(var12 == var3)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                    var3 = new Array(0);
case 48:
                    var5['actions'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                    var3 = var4.users;
case 50:
                    if(!(var12 == var3)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var3 = new Array(0);
case 52:
                    var5['users'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                    var3 = var4.guilds;
case 54:
                    if(!(var12 == var3)) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var3 = new Array(0);
case 56:
                    var5['guilds'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var3 = var4.top_user_activities;
case 58:
                    if(!(var12 == var3)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var3 = new Array(0);
case 60:
                    var5['topUserActivities'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var3 = var4.top_guild_activities;
case 62:
                    if(!(var12 == var3)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                    var3 = new Array(0);
case 64:
                    var5['topGuildActivities'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                    var3 = var4.total_spend;
                    var11 = var12 == var3;
                    var7 = undefined;
                    if(var11) { _fun0009_ip = 66; continue _fun0009 }
case 68:
                    var7 = var3.amount;
case 66:
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                    var3 = var7;
case 69:
                    var5['totalSpendAmount'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0009_ip = 71; continue _fun0009 }
case 72:
                    var3 = var4.total_spend;
                    var11 = var12 == var3;
                    var7 = undefined;
                    if(var11) { _fun0009_ip = 71; continue _fun0009 }
case 73:
                    var7 = var3.currency;
case 71:
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 74; continue _fun0009 }
case 75:
                    var3 = var7;
case 74:
                    var5['totalSpendCurrency'] = var3;
                    var7 = var9.spending_limit;
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 76; continue _fun0009 }
case 77:
                    var3 = var7;
case 76:
                    var5['spendingLimit'] = var3;
                    var7 = var9.monthly_purchases;
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 78; continue _fun0009 }
case 79:
                    var3 = var7;
case 78:
                    var5['monthlyPurchases'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var3 = var4.invoices;
case 80:
                    if(!(var12 == var3)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var3 = new Array(0);
case 82:
                    var5['invoices'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var3 = var4.gifts;
case 84:
                    if(!(var12 == var3)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                    var3 = new Array(0);
case 86:
                    var5['gifts'] = var3;
                    var3 = var5.invoices;
                    var3 = var12 != var3;
                    if(!var3) { _fun0009_ip = 88; continue _fun0009 }
case 89:
                    var4 = var5.invoices;
                    var7 = var4.length;
                    var4 = 0;
                    var3 = var7 > var4;
case 88:
                    if(!var3) { _fun0009_ip = 90; continue _fun0009 }
case 91:
                    var4 = _closure1_slot8;
                    var3 = var5.invoices;
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=612);
case 92:
                    return var3;
case 93:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 94; continue _fun0009 }
case 90:
                    var4 = var5.gifts;
                    var4 = var12 != var4;
                    if(!var4) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                    var7 = var5.gifts;
                    var11 = var7.length;
                    var7 = 0;
                    var4 = var11 > var7;
case 95:
                    if(!var4) { _fun0009_ip = 97; continue _fun0009 }
case 98:
                    var7 = _closure1_slot10;
                    var4 = var5.gifts;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=673);
case 99:
                    return var4;
case 100:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 101; continue _fun0009 }
case 97:
                    var11 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var13 = var11.bind(var8)(var7);
                    var11 = var13.dispatch;
                    var7 = {};
                    var17 = 'FAMILY_CENTER_INITIAL_LOAD';
                    var7['type'] = var17;
                    var7['familyCenterTeenActivity'] = var5;
                    var7['linkedUsers'] = var16;
                    var7['users'] = var15;
                    var7['ageGroup'] = var14;
                    var7 = var11.bind(var13)(var7);
                    var7 = var9.restricted_schedule;
                    var7 = var12 != var7;
                    if(!var7) { _fun0009_ip = 102; continue _fun0009 }
case 103:
                    var11 = var5.teenId;
                    var7 = var12 != var11;
case 102:
                    if(!var7) { _fun0009_ip = 104; continue _fun0009 }
case 105:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var6['type'] = var10;
                    var10 = var5.teenId;
                    var6['userId'] = var10;
                    var9 = var9.restricted_schedule;
                    var6['restrictedSchedule'] = var9;
                    var6 = var7.bind(var8)(var6);
case 104:
                    return var5;
case 101:
                    return var4;
case 94:
                    return var3;
case 37:
                    return var2;
case 33:
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
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 39; continue _fun0010 }
case 34:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
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
case 30:
                    return var2;
case 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
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
case 107:
                    return var2;
case 39:
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
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 109; continue _fun0011 }
case 34:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
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
case 110:
                    return var2;
case 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 112; continue _fun0011 }
case 21:
                    var5 = var2.body;
                    var3 = {};
                    var7 = var5.linked_users;
                    var3['linkedUsers'] = var7;
                    var5 = var5.users;
                    var3['users'] = var5;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
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
case 112:
                    return var2;
case 109:
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
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 113; continue _fun0012 }
case 34:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var11 = 5;
                    var2 = var4[var11];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var3 = var5.dispatch;
                    var2 = {};
                    var7 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var7;
                    var2 = var3.bind(var5)(var2);
                    var5 = _closure1_slot7;
                    var3 = var5.FAMILY_CENTER_TEEN_ACTIVITY;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var5)(var2);
                    var3 = _closure1_slot0;
                    var2 = 6;
                    var2 = var4[var2];
                    var2 = var3.bind(var8)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=126);
case 114:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 115; continue _fun0012 }
case 116:
                    var9 = var2.body;
                    var4 = var9.teen_audit_log;
                    var5 = {};
                    var3 = var4.teen_user_id;
                    var5['teenId'] = var3;
                    var3 = var4.range_start_id;
                    var5['rangeStartId'] = var3;
                    var3 = var4.totals;
                    var5['totals'] = var3;
                    var3 = var4.actions;
                    var5['actions'] = var3;
                    var3 = var4.users;
                    var5['users'] = var3;
                    var3 = var4.guilds;
                    var5['guilds'] = var3;
                    var3 = var4.top_user_activities;
                    var12 = null;
                    if(!(var12 == var3)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                    var3 = new Array(0);
case 117:
                    var5['topUserActivities'] = var3;
                    var3 = var4.top_guild_activities;
                    if(!(var12 == var3)) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                    var3 = new Array(0);
case 119:
                    var5['topGuildActivities'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0012_ip = 121; continue _fun0012 }
case 122:
                    var3 = var4.total_spend;
                    var13 = var12 == var3;
                    var7 = undefined;
                    if(var13) { _fun0012_ip = 121; continue _fun0012 }
case 123:
                    var7 = var3.amount;
case 121:
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                    var3 = var7;
case 124:
                    var5['totalSpendAmount'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0012_ip = 60; continue _fun0012 }
case 126:
                    var3 = var4.total_spend;
                    var13 = var12 == var3;
                    var7 = undefined;
                    if(var13) { _fun0012_ip = 60; continue _fun0012 }
case 127:
                    var7 = var3.currency;
case 60:
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0012_ip = 128; continue _fun0012 }
case 129:
                    var3 = var7;
case 128:
                    var5['totalSpendCurrency'] = var3;
                    var7 = var9.spending_limit;
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0012_ip = 130; continue _fun0012 }
case 131:
                    var3 = var7;
case 130:
                    var5['spendingLimit'] = var3;
                    var7 = var9.monthly_purchases;
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0012_ip = 132; continue _fun0012 }
case 133:
                    var3 = var7;
case 132:
                    var5['monthlyPurchases'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0012_ip = 134; continue _fun0012 }
case 70:
                    var3 = var4.invoices;
case 134:
                    if(!(var12 == var3)) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                    var3 = new Array(0);
case 135:
                    var5['invoices'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0012_ip = 137; continue _fun0012 }
case 138:
                    var3 = var4.gifts;
case 137:
                    if(!(var12 == var3)) { _fun0012_ip = 139; continue _fun0012 }
case 71:
                    var3 = new Array(0);
case 139:
                    var5['gifts'] = var3;
                    var3 = var5.invoices;
                    if(!var3) { _fun0012_ip = 76; continue _fun0012 }
case 140:
                    var4 = var5.invoices;
                    var7 = var4.length;
                    var4 = 0;
                    var3 = var7 > var4;
case 76:
                    if(!var3) { _fun0012_ip = 141; continue _fun0012 }
case 142:
                    var4 = _closure1_slot8;
                    var3 = var5.invoices;
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=498);
case 79:
                    return var3;
case 143:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 144; continue _fun0012 }
case 141:
                    var4 = var5.gifts;
                    if(!var4) { _fun0012_ip = 145; continue _fun0012 }
case 146:
                    var7 = var5.gifts;
                    var13 = var7.length;
                    var7 = 0;
                    var4 = var13 > var7;
case 145:
                    if(!var4) { _fun0012_ip = 147; continue _fun0012 }
case 148:
                    var7 = _closure1_slot10;
                    var4 = var5.gifts;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=555);
case 149:
                    return var4;
case 86:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0012_ip = 150; continue _fun0012 }
case 147:
                    var13 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var14 = var13.bind(var8)(var7);
                    var13 = var14.dispatch;
                    var7 = {};
                    var15 = 'FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS';
                    var7['type'] = var15;
                    var7['familyCenterTeenActivity'] = var5;
                    var7 = var13.bind(var14)(var7);
                    var7 = var9.restricted_schedule;
                    if(!(var12 != var7)) { _fun0012_ip = 99; continue _fun0012 }
case 151:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'USER_RESTRICTED_SCHEDULE_UPDATE';
                    var6['type'] = var11;
                    var10 = _closure2_slot0;
                    var6['userId'] = var10;
                    var9 = var9.restricted_schedule;
                    var6['restrictedSchedule'] = var9;
                    var6 = var7.bind(var8)(var6);
case 99:
                    return var5;
case 150:
                    return var4;
case 144:
                    return var3;
case 115:
                    return var2;
case 113:
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
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 152; continue _fun0013 }
case 34:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
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
case 153:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 154; continue _fun0013 }
case 15:
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
                    if(!(var5 == var4)) { _fun0013_ip = 155; continue _fun0013 }
case 112:
                    var4 = new Array(0);
case 155:
                    var7['topUserActivities'] = var4;
                    var4 = var3.top_guild_activities;
                    if(!(var5 == var4)) { _fun0013_ip = 156; continue _fun0013 }
case 157:
                    var4 = new Array(0);
case 156:
                    var7['topGuildActivities'] = var4;
                    var4 = var5 == var3;
                    var8 = undefined;
                    if(var4) { _fun0013_ip = 119; continue _fun0013 }
case 158:
                    var4 = var3.total_spend;
                    var9 = var5 == var4;
                    var8 = undefined;
                    if(var9) { _fun0013_ip = 119; continue _fun0013 }
case 49:
                    var8 = var4.amount;
case 119:
                    var9 = var5 != var8;
                    var4 = null;
                    if(!var9) { _fun0013_ip = 51; continue _fun0013 }
case 159:
                    var4 = var8;
case 51:
                    var7['totalSpendAmount'] = var4;
                    var4 = var5 == var3;
                    var8 = undefined;
                    if(var4) { _fun0013_ip = 124; continue _fun0013 }
case 52:
                    var4 = var3.total_spend;
                    var9 = var5 == var4;
                    var8 = undefined;
                    if(var9) { _fun0013_ip = 124; continue _fun0013 }
case 160:
                    var8 = var4.currency;
case 124:
                    var9 = var5 != var8;
                    var4 = null;
                    if(!var9) { _fun0013_ip = 161; continue _fun0013 }
case 162:
                    var4 = var8;
case 161:
                    var7['totalSpendCurrency'] = var4;
                    var8 = var5 == var3;
                    var4 = undefined;
                    if(var8) { _fun0013_ip = 163; continue _fun0013 }
case 164:
                    var4 = var3.invoices;
case 163:
                    if(!(var5 == var4)) { _fun0013_ip = 165; continue _fun0013 }
case 166:
                    var4 = new Array(0);
case 165:
                    var7['invoices'] = var4;
                    var8 = var5 == var3;
                    var4 = undefined;
                    if(var8) { _fun0013_ip = 167; continue _fun0013 }
case 168:
                    var4 = var3.gifts;
case 167:
                    if(!(var5 == var4)) { _fun0013_ip = 169; continue _fun0013 }
case 170:
                    var4 = new Array(0);
case 169:
                    var7['gifts'] = var4;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 7;
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
                    var4 = 5;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['familyCenterTeenActivity'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 154:
                    return var2;
case 152:
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
        var1 = 5;
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
        var2 = 6;
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
            var1 = 5;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 171; continue _fun0014 }
case 34:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 8;
                    var6 = var2[var7];
                    var3 = undefined;
                    var9 = var5.bind(var3)(var6);
                    var6 = var9.getProtoFieldClass;
                    var14 = 9;
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
                    if(var5) { _fun0014_ip = 172; continue _fun0014 }
case 23:
                    var5 = _closure2_slot1;
                    var11 = var6[var5];
case 172:
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
                    if(!(var2 != var12)) { _fun0014_ip = 173; continue _fun0014 }
case 174:
                    var13 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 6;
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
                    var10 = 10;
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
case 54:
                    return var2;
case 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 176; continue _fun0014 }
case 56:
                    var5 = var2.body;
                    var7 = var5.settings;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
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
case 173:
                    return var3;
case 176:
                    return var2;
case 171:
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
        var2 = 6;
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
            var5 = var1.body;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
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
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function updateLinkForUserId() {
        var1 = undefined;
        var4 = _closure1_slot12;
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
        var4 = _closure1_slot13;
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
        var4 = _closure1_slot14;
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
        var4 = _closure1_slot15;
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