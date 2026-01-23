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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
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
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 40; continue _fun0004 }
case 28:
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
case 40:
                    return var2;
case 36:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 37:
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
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 13; continue _fun0005 }
case 44:
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
case 13:
                    return var2;
case 41:
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
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var7 = arg1;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var2 = {};
case 47:
                    var5 = var2.includeSoftDeleted;
                    if(!(var5 === var3)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var5 = true;
case 49:
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
case 51:
                    return var3;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 53; continue _fun0006 }
case 54:
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
case 55: // try_start_0
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
case 56:
                    return var5;
case 57:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0006_ip = 58; continue _fun0006 }
case 59:
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
                    if(var8) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                    var19 = _closure1_slot7;
                    var8 = var14;
                    var8 = var8.value;
                    var8 = var8.subscription_listings;
                    var18 = var8;
                    if(!(var9 == var8)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                    var8 = new Array(0);
                    _fun0006_ip = 64; continue _fun0006;
case 62:
                    var8 = var18;
case 64:
                    var8 = var19.bind(var3)(var8);
                    var17 = var8;
                    var8 = var8.bind(var3)();
                    var16 = var8;
                    var8 = var8.done;
                    if(var8) { _fun0006_ip = 65; continue _fun0006 }
case 66:
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
                    if(!var8) { _fun0006_ip = 66; continue _fun0006 }
case 65:
                    var8 = var15;
                    var8 = var8.bind(var3)();
                    var14 = var8;
                    var8 = var8.done;
                    if(!var8) { _fun0006_ip = 61; continue _fun0006 }
case 60:
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
case 67: // try_end0
                    _fun0006_ip = 68; continue _fun0006;
case 58:
                    return var5;
case 69: // catch_target0
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
case 68:
                    return var3;
case 53:
                    return var2;
case 45:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 41; continue _fun0007 }
case 37:
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
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 13; continue _fun0007 }
case 44:
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
case 13:
                    return var2;
case 41:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 70; continue _fun0008 }
case 37:
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
case 28:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 73:
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
case 72:
                    return var2;
case 70:
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
case 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 74; continue _fun0009 }
case 75:
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
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 76; continue _fun0009 }
case 44:
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
case 76:
                    return var2;
case 74:
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
case 0:
                    StartGenerator();
                    var12 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 77; continue _fun0010 }
case 46:
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
case 78:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 79; continue _fun0010 }
case 80:
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
                    if(!(var6 == var4)) { _fun0010_ip = 17; continue _fun0010 }
case 81:
                    var4 = new Array(0);
case 17:
                    var10 = var5.bind(var3)(var4);
                    var5 = var10.bind(var3)();
                    var4 = var5.done;
                    var9 = 6;
                    var7 = 0;
                    var6 = var5;
                    if(var4) { _fun0010_ip = 25; continue _fun0010 }
case 82:
                    var4 = var6.value;
                    var5 = var4.subscription_plans;
                    var5 = var5[var7];
                    var5 = var5.id;
                    if(!(var5 === var12)) { _fun0010_ip = 83; continue _fun0010 }
case 84:
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
case 85:
                    return var4;
case 86:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 87; continue _fun0010 }
case 83:
                    var13 = var10.bind(var3)();
                    var5 = var13.done;
                    var6 = var13;
                    if(var5) { _fun0010_ip = 25; continue _fun0010 }
case 88:
                    _fun0010_ip = 82; continue _fun0010;
case 87:
                    return var4;
case 25:
                    return var3;
case 79:
                    return var2;
case 77:
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
case 0:
                    StartGenerator();
                    var7 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 70; continue _fun0011 }
case 75:
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
case 28:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 72; continue _fun0011 }
case 73:
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
case 72:
                    return var2;
case 70:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 70; continue _fun0012 }
case 37:
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
case 28:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 72; continue _fun0012 }
case 73:
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
case 72:
                    return var2;
case 70:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 70; continue _fun0013 }
case 37:
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
case 28:
                    return var2;
case 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0013_ip = 72; continue _fun0013 }
case 73:
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
case 72:
                    return var2;
case 70:
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
case 0:
                    StartGenerator();
                    var9 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 89; continue _fun0014 }
case 46:
                    var6 = undefined;
                    if(!(var9 === var6)) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                    var9 = {};
case 90:
                    SaveGenerator(address=25);
case 31:
                    return var6;
case 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 93; continue _fun0014 }
case 94:
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
case 95:
                    return var3;
case 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 97; continue _fun0014 }
case 98:
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
case 97:
                    return var3;
case 93:
                    return var2;
case 89:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 99; continue _fun0015 }
case 46:
                    var10 = var2.guildId;
                    var9 = var2.groupListingId;
                    var8 = var2.data;
                    var13 = var2.analyticsContext;
                    var6 = var2.onBeforeDispatchNewListing;
                    var7 = undefined;
                    SaveGenerator(address=47);
case 100:
                    return var7;
case 101:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 102; continue _fun0015 }
case 28:
                    var4 = _closure1_slot2;
                    var11 = _closure1_slot3;
                    var3 = 3;
                    var3 = var11[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.createGuildRoleSubscriptionListing;
                    var3 = var3.bind(var4)(var10, var9, var8);
                    SaveGenerator(address=96);
case 78:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 103; continue _fun0015 }
case 80:
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
case 104:
                    return var4;
case 105:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0015_ip = 106; continue _fun0015 }
case 107:
                    var8 = null;
                    if(!(var8 != var6)) { _fun0015_ip = 108; continue _fun0015 }
case 109:
                    var6 = var6.bind(var7)(var3);
case 108:
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
case 106:
                    return var4;
case 103:
                    return var3;
case 102:
                    return var2;
case 99:
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 110; continue _fun0016 }
case 46:
                    var8 = var2.guildId;
                    var10 = var2.listingId;
                    var7 = var2.groupListingId;
                    var9 = var2.data;
                    var6 = undefined;
                    SaveGenerator(address=41);
case 111:
                    return var6;
case 112:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 82; continue _fun0016 }
case 39:
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
case 113:
                    return var3;
case 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 115; continue _fun0016 }
case 116:
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
case 117:
                    return var4;
case 16:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                    return var3;
case 118:
                    return var4;
case 115:
                    return var3;
case 82:
                    return var2;
case 110:
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
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 120; continue _fun0017 }
case 46:
                    var8 = arg1;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0017_ip = 47; continue _fun0017 }
case 48:
                    var2 = {};
case 47:
                    var13 = var2.signal;
                    var6 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    SaveGenerator(address=40);
case 121:
                    return var4;
case 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 123; continue _fun0017 }
case 5:
                    var6 = false;
                    var14 = 0;
                    var12 = 3;
                    var11 = 9;
                    var10 = 1;
                    var9 = 10;
case 124: // try_start_0
                    var3 = var13;
                    var19 = null;
                    if(!(var19 != var3)) { _fun0017_ip = 125; continue _fun0017 }
case 96:
                    var3 = var13;
                    var3 = var3.aborted;
                    if(var3) { _fun0017_ip = 126; continue _fun0017 }
case 125:
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
case 127:
                    return var3;
case 128:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 129; continue _fun0017 }
case 130:
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
                    if(!(var19 == var18)) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                    var18 = new Array(0);
                    _fun0017_ip = 23; continue _fun0017;
case 131:
                    var18 = var15;
case 23:
                    var7['restrictions'] = var18;
                    var7 = var16.bind(var17)(var7);
                    var6 = true;
case 133: // try_end0
                    _fun0017_ip = 134; continue _fun0017;
case 129:
                    return var3;
case 126: // try_start_1
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
case 135: // try_end1
                    var3 = undefined;
                    return var3;
case 99: // catch_target0 // catch_target1
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
case 136:
                    return var3;
case 137:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0017_ip = 138; continue _fun0017 }
case 139:
                    var7 = var14;
                    var7 = var7 + 1;
                    var14 = var7;
                    if(var7 < var12) { _fun0017_ip = 124; continue _fun0017 }
case 134:
                    if(var6) { _fun0017_ip = 140; continue _fun0017 }
case 141:
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
case 140:
                    return var4;
case 138:
                    return var3;
case 123:
                    return var2;
case 120:
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