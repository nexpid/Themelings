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
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.patch;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var9;
                    var9 = {};
                    var10 = arg1;
                    var9['linked_user_id'] = var10;
                    var10 = arg2;
                    var9['link_status'] = var10;
                    var2['body'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
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
                    SaveGenerator(address=133);
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
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 5:
                    var _closure4_slot0 = var11;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var4 = var9[var7];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.del;
                    var4 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.FAMILY_CENTER_LINKED_USERS;
                    var4['url'] = var10;
                    var10 = {};
                    var10['linked_user_id'] = var11;
                    var4['body'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
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
                    SaveGenerator(address=129);
case 20:
                    return var2;
case 2:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    return var3;
case 21:
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
case 24:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.get;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.FAMILY_CENTER_LINK_CODE;
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
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
                    SaveGenerator(address=107);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    return var3;
case 27:
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
                    if(var2) { _fun0008_ip = 29; continue _fun0008 }
case 24:
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
case 30:
                    return var2;
case 31:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    return var3;
case 32:
                    return var2;
case 29:
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
                    if(var2) { _fun0009_ip = 34; continue _fun0009 }
case 14:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var10 = 5;
                    var2 = var9[var10];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var7 = _closure1_slot0;
                    var5 = 6;
                    var2 = var9[var5];
                    var2 = var7.bind(var8)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot7;
                    var11 = var11.FAMILY_CENTER_TEEN_ACTIVITY_ME;
                    var2['url'] = var11;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.rejectWithMigratedError;
                    var5 = var5.bind(var7)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=131);
case 2:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                    var9 = var2.body;
                    var4 = var9.teen_audit_log;
                    var16 = var9.linked_users;
                    var15 = var9.users;
                    var14 = var9.age_group;
                    var5 = {};
                    var12 = null;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                    var3 = var4.teen_user_id;
case 37:
                    var5['teenId'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var3 = var4.range_start_id;
case 39:
                    var5['rangeStartId'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 41; continue _fun0009 }
case 42:
                    var3 = var4.totals;
case 41:
                    if(!(var12 == var3)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
                    var3 = {};
case 43:
                    var5['totals'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                    var3 = var4.actions;
case 45:
                    if(!(var12 == var3)) { _fun0009_ip = 47; continue _fun0009 }
case 48:
                    var3 = new Array(0);
case 47:
                    var5['actions'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                    var3 = var4.users;
case 49:
                    if(!(var12 == var3)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                    var3 = new Array(0);
case 51:
                    var5['users'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                    var3 = var4.guilds;
case 53:
                    if(!(var12 == var3)) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                    var3 = new Array(0);
case 55:
                    var5['guilds'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                    var3 = var4.top_user_activities;
case 57:
                    if(!(var12 == var3)) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var3 = new Array(0);
case 59:
                    var5['topUserActivities'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = var4.top_guild_activities;
case 61:
                    if(!(var12 == var3)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var3 = new Array(0);
case 63:
                    var5['topGuildActivities'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var3 = var4.total_spend;
                    var11 = var12 == var3;
                    var7 = undefined;
                    if(var11) { _fun0009_ip = 65; continue _fun0009 }
case 67:
                    var7 = var3.amount;
case 65:
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var3 = var7;
case 68:
                    var5['totalSpendAmount'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                    var3 = var4.total_spend;
                    var11 = var12 == var3;
                    var7 = undefined;
                    if(var11) { _fun0009_ip = 70; continue _fun0009 }
case 72:
                    var7 = var3.currency;
case 70:
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                    var3 = var7;
case 73:
                    var5['totalSpendCurrency'] = var3;
                    var7 = var9.spending_limit;
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 75; continue _fun0009 }
case 76:
                    var3 = var7;
case 75:
                    var5['spendingLimit'] = var3;
                    var7 = var9.monthly_purchases;
                    var11 = var12 != var7;
                    var3 = null;
                    if(!var11) { _fun0009_ip = 77; continue _fun0009 }
case 78:
                    var3 = var7;
case 77:
                    var5['monthlyPurchases'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                    var3 = var4.invoices;
case 79:
                    if(!(var12 == var3)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
                    var3 = new Array(0);
case 81:
                    var5['invoices'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0009_ip = 83; continue _fun0009 }
case 84:
                    var3 = var4.gifts;
case 83:
                    if(!(var12 == var3)) { _fun0009_ip = 85; continue _fun0009 }
case 86:
                    var3 = new Array(0);
case 85:
                    var5['gifts'] = var3;
                    var3 = var5.invoices;
                    var3 = var12 != var3;
                    if(!var3) { _fun0009_ip = 87; continue _fun0009 }
case 88:
                    var4 = var5.invoices;
                    var7 = var4.length;
                    var4 = 0;
                    var3 = var7 > var4;
case 87:
                    if(!var3) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                    var4 = _closure1_slot8;
                    var3 = var5.invoices;
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=629);
case 91:
                    return var3;
case 92:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 93; continue _fun0009 }
case 89:
                    var4 = var5.gifts;
                    var4 = var12 != var4;
                    if(!var4) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var7 = var5.gifts;
                    var11 = var7.length;
                    var7 = 0;
                    var4 = var11 > var7;
case 94:
                    if(!var4) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var7 = _closure1_slot10;
                    var4 = var5.gifts;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=690);
case 98:
                    return var4;
case 99:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 100; continue _fun0009 }
case 96:
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
                    if(!var7) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var11 = var5.teenId;
                    var7 = var12 != var11;
case 101:
                    if(!var7) { _fun0009_ip = 103; continue _fun0009 }
case 104:
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
case 103:
                    return var5;
case 100:
                    return var4;
case 93:
                    return var3;
case 35:
                    return var2;
case 34:
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
                    if(var2) { _fun0010_ip = 38; continue _fun0010 }
case 14:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var2 = var9[var7];
                    var6 = undefined;
                    var2 = var8.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=93);
case 105:
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
                    var12 = var4;
                    var11 = var3;
                    var7 = copyDataProperties(var12, var11);
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 107:
                    return var2;
case 38:
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
    var5 = function getConnectionPrerequisites(arg1, arg2) {
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
case 24:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.FAMILY_CENTER_CONNECTION_PREREQUISITES;
                    var2['url'] = var5;
                    var5 = {};
                    var7 = _closure2_slot0;
                    var5['teen_id'] = var7;
                    var6 = _closure2_slot1;
                    var5['link_code'] = var6;
                    var2['query'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=103);
case 110:
                    return var2;
case 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 9; continue _fun0011 }
case 112:
                    var3 = var2.body;
                    return var3;
case 9:
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
    var4['getConnectionPrerequisites'] = var5;
    var5 = function setPendingConnection(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FAMILY_CENTER_PENDING_CONNECTION_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['teenId'] = var5;
        var5 = arg2;
        var2['linkCode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['setPendingConnection'] = var5;
    var5 = function clearPendingConnection() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FAMILY_CENTER_PENDING_CONNECTION_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['clearPendingConnection'] = var5;
    var5 = function requestLink(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 113; continue _fun0012 }
case 14:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var2 = var9[var7];
                    var6 = undefined;
                    var2 = var8.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.FAMILY_CENTER_LINKED_USERS;
                    var2['url'] = var10;
                    var10 = {};
                    var12 = _closure2_slot0;
                    var10['recipient_id'] = var12;
                    var11 = _closure2_slot1;
                    var10['code'] = var11;
                    var2['body'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=120);
case 114:
                    return var2;
case 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 115; continue _fun0012 }
case 10:
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
                    var14 = var4;
                    var13 = var3;
                    var7 = copyDataProperties(var14, var13);
                    var4 = var5.bind(var6)(var4);
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
    var4['requestLink'] = var5;
    var5 = function fetchTeenActivity(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 116; continue _fun0013 }
case 14:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var11 = 5;
                    var2 = var9[var11];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'FAMILY_CENTER_FETCH_START';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot7;
                    var3 = var4.FAMILY_CENTER_TEEN_ACTIVITY;
                    var2 = _closure2_slot0;
                    var12 = var3.bind(var4)(var2);
                    var7 = _closure1_slot0;
                    var5 = 6;
                    var2 = var9[var5];
                    var2 = var7.bind(var8)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var2['url'] = var12;
                    var5 = var9[var5];
                    var7 = var7.bind(var8)(var5);
                    var5 = var7.rejectWithMigratedError;
                    var5 = var5.bind(var7)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=143);
case 19:
                    return var2;
case 117:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 118; continue _fun0013 }
case 119:
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
                    if(!(var12 == var3)) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                    var3 = new Array(0);
case 120:
                    var5['topUserActivities'] = var3;
                    var3 = var4.top_guild_activities;
                    if(!(var12 == var3)) { _fun0013_ip = 122; continue _fun0013 }
case 123:
                    var3 = new Array(0);
case 122:
                    var5['topGuildActivities'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0013_ip = 124; continue _fun0013 }
case 125:
                    var3 = var4.total_spend;
                    var13 = var12 == var3;
                    var7 = undefined;
                    if(var13) { _fun0013_ip = 124; continue _fun0013 }
case 126:
                    var7 = var3.amount;
case 124:
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                    var3 = var7;
case 127:
                    var5['totalSpendAmount'] = var3;
                    var3 = var12 == var4;
                    var7 = undefined;
                    if(var3) { _fun0013_ip = 59; continue _fun0013 }
case 129:
                    var3 = var4.total_spend;
                    var13 = var12 == var3;
                    var7 = undefined;
                    if(var13) { _fun0013_ip = 59; continue _fun0013 }
case 130:
                    var7 = var3.currency;
case 59:
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                    var3 = var7;
case 131:
                    var5['totalSpendCurrency'] = var3;
                    var7 = var9.spending_limit;
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                    var3 = var7;
case 133:
                    var5['spendingLimit'] = var3;
                    var7 = var9.monthly_purchases;
                    var13 = var12 != var7;
                    var3 = null;
                    if(!var13) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                    var3 = var7;
case 135:
                    var5['monthlyPurchases'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0013_ip = 137; continue _fun0013 }
case 69:
                    var3 = var4.invoices;
case 137:
                    if(!(var12 == var3)) { _fun0013_ip = 138; continue _fun0013 }
case 139:
                    var3 = new Array(0);
case 138:
                    var5['invoices'] = var3;
                    var7 = var12 == var4;
                    var3 = undefined;
                    if(var7) { _fun0013_ip = 140; continue _fun0013 }
case 141:
                    var3 = var4.gifts;
case 140:
                    if(!(var12 == var3)) { _fun0013_ip = 142; continue _fun0013 }
case 70:
                    var3 = new Array(0);
case 142:
                    var5['gifts'] = var3;
                    var3 = var5.invoices;
                    if(!var3) { _fun0013_ip = 75; continue _fun0013 }
case 143:
                    var4 = var5.invoices;
                    var7 = var4.length;
                    var4 = 0;
                    var3 = var7 > var4;
case 75:
                    if(!var3) { _fun0013_ip = 144; continue _fun0013 }
case 145:
                    var4 = _closure1_slot8;
                    var3 = var5.invoices;
                    var3 = var4.bind(var8)(var3);
                    SaveGenerator(address=515);
case 78:
                    return var3;
case 146:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 147; continue _fun0013 }
case 144:
                    var4 = var5.gifts;
                    if(!var4) { _fun0013_ip = 148; continue _fun0013 }
case 149:
                    var7 = var5.gifts;
                    var13 = var7.length;
                    var7 = 0;
                    var4 = var13 > var7;
case 148:
                    if(!var4) { _fun0013_ip = 150; continue _fun0013 }
case 151:
                    var7 = _closure1_slot10;
                    var4 = var5.gifts;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=572);
case 152:
                    return var4;
case 85:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0013_ip = 153; continue _fun0013 }
case 150:
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
                    if(!(var12 != var7)) { _fun0013_ip = 98; continue _fun0013 }
case 154:
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
case 98:
                    return var5;
case 153:
                    return var4;
case 147:
                    return var3;
case 118:
                    return var2;
case 116:
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 155; continue _fun0014 }
case 14:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var16 = _closure1_slot7;
                    var15 = var16.FAMILY_CENTER_TEEN_ACTIVITY_MORE;
                    var20 = _closure2_slot0;
                    var19 = _closure2_slot1;
                    var18 = _closure2_slot2;
                    var17 = _closure2_slot3;
                    var21 = var16;
                    var9 = var21[var15](var20, var19, var18, var17, var16);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var7 = var7.bind(var6)(var5);
                    var5 = var7.rejectWithMigratedError;
                    var5 = var5.bind(var7)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=119);
case 9:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 156; continue _fun0014 }
case 157:
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
                    if(!(var5 == var4)) { _fun0014_ip = 158; continue _fun0014 }
case 115:
                    var4 = new Array(0);
case 158:
                    var7['topUserActivities'] = var4;
                    var4 = var3.top_guild_activities;
                    if(!(var5 == var4)) { _fun0014_ip = 159; continue _fun0014 }
case 160:
                    var4 = new Array(0);
case 159:
                    var7['topGuildActivities'] = var4;
                    var4 = var5 == var3;
                    var8 = undefined;
                    if(var4) { _fun0014_ip = 122; continue _fun0014 }
case 161:
                    var4 = var3.total_spend;
                    var9 = var5 == var4;
                    var8 = undefined;
                    if(var9) { _fun0014_ip = 122; continue _fun0014 }
case 48:
                    var8 = var4.amount;
case 122:
                    var9 = var5 != var8;
                    var4 = null;
                    if(!var9) { _fun0014_ip = 50; continue _fun0014 }
case 162:
                    var4 = var8;
case 50:
                    var7['totalSpendAmount'] = var4;
                    var4 = var5 == var3;
                    var8 = undefined;
                    if(var4) { _fun0014_ip = 127; continue _fun0014 }
case 51:
                    var4 = var3.total_spend;
                    var9 = var5 == var4;
                    var8 = undefined;
                    if(var9) { _fun0014_ip = 127; continue _fun0014 }
case 163:
                    var8 = var4.currency;
case 127:
                    var9 = var5 != var8;
                    var4 = null;
                    if(!var9) { _fun0014_ip = 164; continue _fun0014 }
case 165:
                    var4 = var8;
case 164:
                    var7['totalSpendCurrency'] = var4;
                    var8 = var5 == var3;
                    var4 = undefined;
                    if(var8) { _fun0014_ip = 166; continue _fun0014 }
case 167:
                    var4 = var3.invoices;
case 166:
                    if(!(var5 == var4)) { _fun0014_ip = 168; continue _fun0014 }
case 169:
                    var4 = new Array(0);
case 168:
                    var7['invoices'] = var4;
                    var8 = var5 == var3;
                    var4 = undefined;
                    if(var8) { _fun0014_ip = 170; continue _fun0014 }
case 171:
                    var4 = var3.gifts;
case 170:
                    if(!(var5 == var4)) { _fun0014_ip = 172; continue _fun0014 }
case 173:
                    var4 = new Array(0);
case 172:
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
case 156:
                    return var2;
case 155:
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
        var11 = arg1;
        var _closure2_slot0 = var11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 6;
        var2 = var8[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var10 = _closure1_slot7;
        var9 = var10.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS;
        var9 = var9.bind(var10)(var11);
        var2['url'] = var9;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
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
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 174; continue _fun0015 }
case 14:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 8;
                    var6 = var2[var7];
                    var3 = undefined;
                    var9 = var5.bind(var3)(var6);
                    var6 = var9.getProtoFieldClass;
                    var12 = 9;
                    var2 = var2[var12];
                    var2 = var5.bind(var3)(var2);
                    var5 = var2.PreloadedUserSettings;
                    var2 = _closure2_slot1;
                    var13 = var6.bind(var9)(var5, var2);
                    var6 = _closure1_slot4;
                    var5 = var6.getSettings;
                    var2 = _closure2_slot0;
                    var6 = var5.bind(var6)(var2);
                    var2 = null;
                    var5 = var2 == var6;
                    var11 = undefined;
                    if(var5) { _fun0015_ip = 175; continue _fun0015 }
case 176:
                    var5 = _closure2_slot1;
                    var11 = var6[var5];
case 175:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = var5[var7];
                    var10 = var6.bind(var3)(var7);
                    var9 = var10.createModifiedProto;
                    var19 = _closure2_slot2;
                    var5 = var5[var12];
                    var5 = var6.bind(var3)(var5);
                    var17 = var5.PreloadedUserSettings;
                    var16 = _closure2_slot1;
                    var21 = var10;
                    var20 = var11;
                    var18 = var13;
                    var15 = var21[var9](var20, var19, var18, var17, var16, var15);
                    if(!(var2 != var15)) { _fun0015_ip = 177; continue _fun0015 }
case 178:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 6;
                    var2 = var10[var7];
                    var2 = var9.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.patch;
                    var2 = {};
                    var14 = _closure1_slot7;
                    var13 = var14.FAMILY_CENTER_TEEN_SETTINGS;
                    var11 = _closure2_slot0;
                    var11 = var13.bind(var14)(var11);
                    var2['url'] = var11;
                    var11 = {};
                    var13 = 10;
                    var13 = var10[var13];
                    var14 = var9.bind(var3)(var13);
                    var13 = var14.protoToB64;
                    var12 = var10[var12];
                    var12 = var9.bind(var3)(var12);
                    var12 = var12.PreloadedUserSettings;
                    var12 = var13.bind(var14)(var12, var15);
                    var11['settings'] = var12;
                    var2['body'] = var11;
                    var7 = var10[var7];
                    var9 = var9.bind(var3)(var7);
                    var7 = var9.rejectWithMigratedError;
                    var7 = var7.bind(var9)();
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=314);
case 53:
                    return var2;
case 179:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0015_ip = 180; continue _fun0015 }
case 55:
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
case 177:
                    return var3;
case 180:
                    return var2;
case 174:
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
        var11 = arg1;
        var _closure2_slot0 = var11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 6;
        var2 = var8[var5];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var10 = _closure1_slot7;
        var9 = var10.FAMILY_CENTER_TEEN_CONSENTS;
        var9 = var9.bind(var10)(var11);
        var2['url'] = var9;
        var9 = {};
        var10 = arg2;
        var9['grant'] = var10;
        var10 = arg3;
        var9['revoke'] = var10;
        var2['body'] = var9;
        var5 = var8[var5];
        var6 = var7.bind(var6)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
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