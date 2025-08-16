// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchSubscriptionsSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 109; continue _fun0004 }
 7:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.getGuildRoleSubscriptionsSettings;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=50);
 48:
                    return var2;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 106; continue _fun0004 }
 56:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                    var4['type'] = var7;
                    var4['settings'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 106:
                    return var2;
 109:
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
    var1 = function _updateSubscriptionsSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 113; continue _fun0005 }
 7:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var2);
                    var6 = var7.updateGuildRoleSubscriptionsSettings;
                    var5 = arg1;
                    var2 = arg2;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 110; continue _fun0005 }
 60:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                    var4['type'] = var7;
                    var4['settings'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 110:
                    return var2;
 113:
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
    var1 = function _fetchAllSubscriptionListingsDataForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 637; continue _fun0006 }
 13:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 24; continue _fun0006 }
 22:
                    var2 = {};
 24:
                    var5 = var2.includeSoftDeleted;
                    if(!(var5 === var3)) { _fun0006_ip = 36; continue _fun0006 }
 34:
                    var5 = true;
 36:
                    var25 = var5;
                    var24 = var2.countryCode;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    SaveGenerator(address=65);
 63:
                    return var3;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 634; continue _fun0006 }
 74:
                    var8 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var6 = 4;
                    var5 = var5[var6];
                    var9 = var8.bind(var3)(var5);
                    var8 = var9.dispatch;
                    var5 = {};
                    var10 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS';
                    var5['type'] = var10;
                    var10 = var7;
                    var5['guildId'] = var10;
                    var5 = var8.bind(var9)(var5);
 126: // try_start_0
                    var5 = global;
                    var10 = var5.Promise;
                    var8 = var10.all;
                    var20 = _closure1_slot2;
                    var21 = _closure1_slot3;
                    var9 = 3;
                    var5 = var21[var9];
                    var23 = var20.bind(var3)(var5);
                    var19 = var23.getGuildRoleSubscriptionGroupListingsForGuild;
                    var22 = var7;
                    var5 = {};
                    var5['includeSoftDeleted'] = var25;
                    var5['countryCode'] = var24;
                    var19 = var19.bind(var23)(var22, var5);
                    var5 = new Array(4);
                    var5[0] = var19;
                    var19 = var21[var9];
                    var23 = var20.bind(var3)(var19);
                    var19 = var23.getGuildRoleSubscriptionsSettings;
                    var19 = var19.bind(var23)(var22);
                    var5[1] = var19;
                    var19 = var21[var9];
                    var20 = var20.bind(var3)(var19);
                    var19 = var20.getGuildRoleSubscriptionTrials;
                    var19 = var19.bind(var20)(var22);
                    var5[2] = var19;
                    var20 = _closure1_slot0;
                    var19 = 5;
                    var19 = var21[var19];
                    var20 = var20.bind(var3)(var19);
                    var19 = var20.fetchSubscriptions;
                    var19 = var19.bind(var20)();
                    var5[3] = var19;
                    var5 = var8.bind(var10)(var5);
                    SaveGenerator(address=282);
 280:
                    return var5;
 282:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 583; continue _fun0006 }
 291:
                    var8 = _closure1_slot4;
                    var10 = var8.bind(var3)(var5, var9);
                    var8 = 0;
                    var9 = var10[var8];
                    var13 = var9;
                    var8 = 1;
                    var12 = var10[var8];
                    var8 = 2;
                    var11 = var10[var8];
                    var8 = _closure1_slot7;
                    var8 = var8.bind(var3)(var9);
                    var15 = var8;
                    var8 = var8.bind(var3)();
                    var14 = var8;
                    var8 = var8.done;
                    var10 = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    var9 = null;
                    if(var8) { _fun0006_ip = 520; continue _fun0006 }
 362:
                    var19 = _closure1_slot7;
                    var8 = var14;
                    var8 = var8.value;
                    var8 = var8.subscription_listings;
                    var18 = var8;
                    if(!(var9 == var8)) { _fun0006_ip = 393; continue _fun0006 }
 387:
                    var8 = new Array(0);
                    _fun0006_ip = 396; continue _fun0006;
 393:
                    var8 = var18;
 396:
                    var8 = var19.bind(var3)(var8);
                    var17 = var8;
                    var8 = var8.bind(var3)();
                    var16 = var8;
                    var8 = var8.done;
                    if(var8) { _fun0006_ip = 499; continue _fun0006 }
 419:
                    var8 = var16;
                    var21 = var8.value;
                    var19 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var6];
                    var20 = var19.bind(var3)(var8);
                    var19 = var20.dispatch;
                    var8 = {};
                    var8['type'] = var10;
                    var22 = var21.id;
                    var8['skuId'] = var22;
                    var21 = var21.subscription_plans;
                    var8['subscriptionPlans'] = var21;
                    var8 = var19.bind(var20)(var8);
                    var8 = var17;
                    var8 = var8.bind(var3)();
                    var16 = var8;
                    var8 = var8.done;
                    if(!var8) { _fun0006_ip = 419; continue _fun0006 }
 499:
                    var8 = var15;
                    var8 = var8.bind(var3)();
                    var14 = var8;
                    var8 = var8.done;
                    if(!var8) { _fun0006_ip = 362; continue _fun0006 }
 520:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var6];
                    var10 = var9.bind(var3)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var14 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                    var8['type'] = var14;
                    var14 = var7;
                    var8['guildId'] = var14;
                    var8['groupListings'] = var13;
                    var8['settings'] = var12;
                    var8['subscriptionTrials'] = var11;
                    var8 = var9.bind(var10)(var8);
 581: // try_end0
                    _fun0006_ip = 631; continue _fun0006;
 583:
                    return var5;
 586: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4 = var5.bind(var6)(var4);
 631:
                    return var3;
 634:
                    return var2;
 637:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _createSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 113; continue _fun0007 }
 7:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.createGuildRoleSubscriptionGroupListing;
                    var4 = arg1;
                    var2 = arg2;
                    var2 = var6.bind(var7)(var4, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 110; continue _fun0007 }
 60:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    var3['type'] = var6;
                    var3['listing'] = var2;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 110:
                    return var2;
 113:
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
    var1 = function _updateSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 117; continue _fun0008 }
 7:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var8 = var4.bind(var5)(var2);
                    var7 = var8.updateGuildRoleSubscriptionGroupListing;
                    var6 = arg1;
                    var4 = arg2;
                    var2 = arg3;
                    var2 = var7.bind(var8)(var6, var4, var2);
                    SaveGenerator(address=58);
 56:
                    return var2;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 114; continue _fun0008 }
 64:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    var3['type'] = var6;
                    var3['listing'] = var2;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 114:
                    return var2;
 117:
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
    var1 = function _deleteSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 115; continue _fun0009 }
 10:
                    var4 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var4 = var7.deleteGuildRoleSubscriptionGroupListing;
                    var2 = arg1;
                    var2 = var4.bind(var7)(var2, var6);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 112; continue _fun0009 }
 60:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 4;
                    var3 = var7[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING';
                    var3['type'] = var7;
                    var3['groupListingId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = true;
                    return var3;
 112:
                    return var2;
 115:
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
    var1 = function _fetchSubscriptionListingForPlan() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    StartGenerator();
                    var12 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 295; continue _fun0010 }
 13:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var6 = 4;
                    var2 = var5[var6];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var4 = var7.dispatch;
                    var2 = {};
                    var8 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                    var2['type'] = var8;
                    var2['planId'] = var12;
                    var2 = var4.bind(var7)(var2);
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.getGuildRoleSubscriptionGroupForSubscriptionPlan;
                    var2 = var2.bind(var4)(var12);
                    SaveGenerator(address=96);
 94:
                    return var2;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 292; continue _fun0010 }
 105:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                    var4['type'] = var7;
                    var4['groupListing'] = var2;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot7;
                    var4 = var2.subscription_listings;
                    var6 = null;
                    if(!(var6 == var4)) { _fun0010_ip = 169; continue _fun0010 }
 165:
                    var4 = new Array(0);
 169:
                    var10 = var5.bind(var3)(var4);
                    var5 = var10.bind(var3)();
                    var4 = var5.done;
                    var9 = 6;
                    var7 = 0;
                    var6 = var5;
                    if(var4) { _fun0010_ip = 289; continue _fun0010 }
 194:
                    var4 = var6.value;
                    var5 = var4.subscription_plans;
                    var5 = var5[var7];
                    var5 = var5.id;
                    if(!(var5 === var12)) { _fun0010_ip = 269; continue _fun0010 }
 218:
                    var13 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var13 = var13.bind(var3)(var5);
                    var5 = var13.fetchSubscriptionPlansForSKU;
                    var17 = var4.id;
                    var18 = var13;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = true;
                    var4 = var18[var5](var17, var16, var15, var14, var13);
                    SaveGenerator(address=263);
 261:
                    return var4;
 263:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 286; continue _fun0010 }
 269:
                    var13 = var10.bind(var3)();
                    var5 = var13.done;
                    var6 = var13;
                    if(var5) { _fun0010_ip = 289; continue _fun0010 }
 284:
                    _fun0010_ip = 194; continue _fun0010;
 286:
                    return var4;
 289:
                    return var3;
 292:
                    return var2;
 295:
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
    var1 = function _deleteSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var7 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 117; continue _fun0011 }
 10:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var6 = var8.deleteGuildRoleSubscriptionListing;
                    var5 = arg1;
                    var2 = arg2;
                    var2 = var6.bind(var8)(var5, var2, var7);
                    SaveGenerator(address=58);
 56:
                    return var2;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 114; continue _fun0011 }
 64:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING';
                    var4['type'] = var8;
                    var4['listingId'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 114:
                    return var2;
 117:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _archiveSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 117; continue _fun0012 }
 7:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.archiveGuildRoleSubscriptionListing;
                    var6 = arg1;
                    var5 = arg2;
                    var2 = arg3;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    SaveGenerator(address=58);
 56:
                    return var2;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 114; continue _fun0012 }
 64:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    var4['type'] = var7;
                    var4['listing'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 114:
                    return var2;
 117:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _updateSubscriptionTrial() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 117; continue _fun0013 }
 7:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var5.bind(var3)(var2);
                    var7 = var8.updateGuildRoleSubscriptionsTrial;
                    var6 = arg1;
                    var5 = arg2;
                    var2 = arg3;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    SaveGenerator(address=58);
 56:
                    return var2;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 114; continue _fun0013 }
 64:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL';
                    var4['type'] = var7;
                    var4['subscriptionTrial'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 114:
                    return var2;
 117:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var4 = function fetchGuildRoleSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = function _fetchGuildRoleSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    var9 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 139; continue _fun0014 }
 13:
                    var6 = undefined;
                    if(!(var9 === var6)) { _fun0014_ip = 21; continue _fun0014 }
 19:
                    var9 = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return var6;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 136; continue _fun0014 }
 31:
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var3 = 3;
                    var3 = var7[var3];
                    var8 = var5.bind(var6)(var3);
                    var7 = var8.getGuildRoleSubscriptionGroupListing;
                    var5 = arg1;
                    var3 = arg2;
                    var3 = var7.bind(var8)(var5, var3, var9);
                    SaveGenerator(address=77);
 75:
                    return var3;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 133; continue _fun0014 }
 83:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var4 = 4;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    var4['type'] = var7;
                    var4['listing'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 133:
                    return var3;
 136:
                    return var2;
 139:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot20 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _createSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 321; continue _fun0015 }
 13:
                    var10 = var2.guildId;
                    var9 = var2.groupListingId;
                    var8 = var2.data;
                    var13 = var2.analyticsContext;
                    var6 = var2.onBeforeDispatchNewListing;
                    var7 = undefined;
                    SaveGenerator(address=47);
 45:
                    return var7;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 318; continue _fun0015 }
 56:
                    var4 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var3 = 3;
                    var3 = var11[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.createGuildRoleSubscriptionListing;
                    var3 = var3.bind(var4)(var10, var9, var8);
                    SaveGenerator(address=96);
 94:
                    return var3;
 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 315; continue _fun0015 }
 105:
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var4 = 7;
                    var4 = var15[var4];
                    var12 = var8.bind(var7)(var4);
                    var11 = var12.track;
                    var4 = _closure1_slot6;
                    var8 = var4.ROLE_SUBSCRIPTION_LISTING_CREATED;
                    var4 = {};
                    var14 = var3.id;
                    var4['role_subscription_listing_id'] = var14;
                    var4['role_subscription_group_listing_id'] = var9;
                    var14 = var13.templateCategory;
                    var4['template_name'] = var14;
                    var13 = var13.hasChangeFromTemplate;
                    var4['has_change_from_template'] = var13;
                    var14 = _closure1_slot0;
                    var13 = 8;
                    var13 = var15[var13];
                    var14 = var14.bind(var7)(var13);
                    var13 = var14.collectGuildAnalyticsMetadata;
                    var17 = var13.bind(var14)(var10);
                    var18 = var4;
                    var13 = copyDataProperties(var18, var17);
                    var4 = var11.bind(var12)(var8, var4);
                    var8 = _closure1_slot19;
                    var4 = {};
                    var11 = true;
                    var4['includeArchivedListings'] = var11;
                    var4 = var8.bind(var7)(var10, var9, var4);
                    SaveGenerator(address=245);
 243:
                    return var4;
 245:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 312; continue _fun0015 }
 251:
                    var8 = null;
                    if(!(var8 != var6)) { _fun0015_ip = 262; continue _fun0015 }
 257:
                    var6 = var6.bind(var7)(var3);
 262:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 4;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    var5['type'] = var8;
                    var5['listing'] = var3;
                    var5 = var6.bind(var7)(var5);
                    return var3;
 312:
                    return var4;
 315:
                    return var3;
 318:
                    return var2;
 321:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _updateSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 197; continue _fun0016 }
 13:
                    var8 = var2.guildId;
                    var10 = var2.listingId;
                    var7 = var2.groupListingId;
                    var9 = var2.data;
                    var6 = undefined;
                    SaveGenerator(address=41);
 39:
                    return var6;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 194; continue _fun0016 }
 50:
                    var5 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var3 = 3;
                    var3 = var11[var3];
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.updateGuildRoleSubscriptionListing;
                    var16 = var5;
                    var15 = var8;
                    var14 = var7;
                    var13 = var10;
                    var12 = var9;
                    var3 = var16[var3](var15, var14, var13, var12, var11);
                    SaveGenerator(address=102);
 100:
                    return var3;
 102:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 191; continue _fun0016 }
 108:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var5 = 4;
                    var5 = var10[var5];
                    var10 = var9.bind(var6)(var5);
                    var9 = var10.dispatch;
                    var5 = {};
                    var11 = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    var5['type'] = var11;
                    var5['listing'] = var3;
                    var5 = var9.bind(var10)(var5);
                    var5 = _closure1_slot19;
                    var4 = {};
                    var9 = true;
                    var4['includeArchivedListings'] = var9;
                    var4 = var5.bind(var6)(var8, var7, var4);
                    SaveGenerator(address=179);
 177:
                    return var4;
 179:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 188; continue _fun0016 }
 185:
                    return var3;
 188:
                    return var4;
 191:
                    return var3;
 194:
                    return var2;
 197:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function _fetchMonetizationRestrictions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 469; continue _fun0017 }
 13:
                    var8 = arg1;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0017_ip = 24; continue _fun0017 }
 22:
                    var2 = {};
 24:
                    var13 = var2.signal;
                    var6 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=40);
 38:
                    return var4;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 466; continue _fun0017 }
 49:
                    var6 = false;
                    var14 = 0;
                    var12 = 3;
                    var11 = 9;
                    var10 = 1;
                    var9 = 10;
 68: // try_start_0
                    var3 = var13;
                    var19 = null;
                    if(!(var19 != var3)) { _fun0017_ip = 92; continue _fun0017 }
 77:
                    var3 = var13;
                    var3 = var3.aborted;
                    if(var3) { _fun0017_ip = 267; continue _fun0017 }
 92:
                    var16 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var17 = 4;
                    var7 = var3[var17];
                    var20 = var16.bind(var4)(var7);
                    var16 = var20.dispatch;
                    var7 = {};
                    var18 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS';
                    var7['type'] = var18;
                    var18 = var8;
                    var7['guildId'] = var18;
                    var7 = var16.bind(var20)(var7);
                    var7 = _closure1_slot2;
                    var3 = var3[var12];
                    var16 = var7.bind(var4)(var3);
                    var7 = var16.getGuildMonetizationRestrictions;
                    var3 = {};
                    var20 = var13;
                    var3['signal'] = var20;
                    var3 = var7.bind(var16)(var18, var3);
                    SaveGenerator(address=180);
 178:
                    return var3;
 180:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 264; continue _fun0017 }
 186:
                    var18 = var3.restrictions;
                    var15 = var18;
                    var16 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var7 = var7[var17];
                    var17 = var16.bind(var4)(var7);
                    var16 = var17.dispatch;
                    var7 = {};
                    var20 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
                    var7['type'] = var20;
                    var20 = var8;
                    var7['guildId'] = var20;
                    if(!(var19 == var18)) { _fun0017_ip = 244; continue _fun0017 }
 238:
                    var18 = new Array(0);
                    _fun0017_ip = 247; continue _fun0017;
 244:
                    var18 = var15;
 247:
                    var7['restrictions'] = var18;
                    var7 = var16.bind(var17)(var7);
                    var6 = true;
 259: // try_end0
                    _fun0017_ip = 413; continue _fun0017;
 264:
                    return var3;
 267: // try_start_1
                    var7 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var3 = 4;
                    var3 = var16[var3];
                    var16 = var7.bind(var4)(var3);
                    var7 = var16.dispatch;
                    var3 = {};
                    var17 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED';
                    var3['type'] = var17;
                    var17 = var8;
                    var3['guildId'] = var17;
                    var3 = var7.bind(var16)(var3);
 316: // try_end1
                    var3 = undefined;
                    return var3;
 321: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    var16 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var7 = var3[var11];
                    var16 = var16.bind(var4)(var7);
                    var7 = var16.sleep;
                    var17 = var14;
                    var17 = var17 + var10;
                    var18 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var18.bind(var4)(var3);
                    var3 = var3.Millis;
                    var3 = var3.SECOND;
                    var3 = var17 * var3;
                    var3 = var7.bind(var16)(var3);
                    SaveGenerator(address=391);
 389:
                    return var3;
 391:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 463; continue _fun0017 }
 397:
                    var7 = var14;
                    var7 = var7 + 1;
                    var14 = var7;
                    if(var7 < var12) { _fun0017_ip = 68; continue _fun0017 }
 413:
                    if(var6) { _fun0017_ip = 460; continue _fun0017 }
 416:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 4;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE';
                    var5['type'] = var9;
                    var5['guildId'] = var8;
                    var5 = var6.bind(var7)(var5);
 460:
                    return var4;
 463:
                    return var3;
 466:
                    return var2;
 469:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot6 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchSubscriptionsSettings() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSubscriptionsSettings'] = var5;
    var5 = function updateSubscriptionsSettings() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateSubscriptionsSettings'] = var5;
    var5 = function fetchAllSubscriptionListingsDataForGuild() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAllSubscriptionListingsDataForGuild'] = var5;
    var5 = function createSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createSubscriptionGroupListing'] = var5;
    var5 = function updateSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateSubscriptionGroupListing'] = var5;
    var5 = function deleteSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteSubscriptionGroupListing'] = var5;
    var5 = function fetchSubscriptionListingForPlan() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSubscriptionListingForPlan'] = var5;
    var5 = function deleteSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteSubscriptionListing'] = var5;
    var5 = function archiveSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['archiveSubscriptionListing'] = var5;
    var5 = function updateSubscriptionTrial() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateSubscriptionTrial'] = var5;
    var3['fetchGuildRoleSubscriptionGroupListing'] = var4;
    var4 = function createSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createSubscriptionListing'] = var4;
    var4 = function updateSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateSubscriptionListing'] = var4;
    var2 = function fetchMonetizationRestrictions() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchMonetizationRestrictions'] = var2;
    return var1;
})();