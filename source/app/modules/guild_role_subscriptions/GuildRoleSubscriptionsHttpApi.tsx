// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _updateGuildRoleSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var10 = var12.bind(var13)(var11, var10);
                    var2['url'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=113);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var3 = var2.body;
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var16 = var3;
                    var15 = var4;
                    var2 = new var16[var2](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = function _createGuildRoleSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 3:
                    var10 = arg1;
                    var9 = arg2;
case 12: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var12 = _closure1_slot3;
                    var11 = var12.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=109);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var3 = var2.body;
case 17: // try_end0
                    return var3;
case 15:
                    return var2;
case 18: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _deleteGuildRoleSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 3:
                    var10 = arg1;
                    var9 = arg2;
case 12: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var12 = _closure1_slot3;
                    var11 = var12.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=106);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 22: // try_end0
                    return var3;
case 16:
                    return var2;
case 23: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
    var1 = function _createGuildRoleSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var13 = arg1;
                    var10 = arg2;
                    var11 = var5.priceTier;
                    var2 = null;
                    var4 = Object.create(var2);
                    var2 = 0;
                    var4['priceTier'] = var2;
                    var18 = {};
                    var17 = var5;
                    var16 = var4;
                    var12 = copyDataProperties(var18, var17, var16);
                    var6 = undefined;
                    SaveGenerator(address=55);
case 26:
                    return var6;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 29: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var3 = var9[var7];
                    var3 = var8.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var15 = _closure1_slot3;
                    var14 = var15.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var10 = var14.bind(var15)(var13, var10);
                    var3['url'] = var10;
                    var10 = {};
                    var17 = var12;
                    var18 = var10;
                    var12 = copyDataProperties(var18, var17);
                    var12 = var11;
                    var11 = 'price_tier';
                    var10[10] = var12;
                    var3['body'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=180);
case 30:
                    return var3;
case 31:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var4 = var3.body;
case 34: // try_end0
                    return var4;
case 32:
                    return var3;
case 35: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var19 = var4;
                    var18 = var5;
                    var3 = new var19[var3](var18, var17);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 28:
                    return var2;
case 24:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _updateGuildRoleSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var5 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 25:
                    var14 = arg1;
                    var13 = arg2;
                    var10 = arg3;
                    var11 = var5.priceTier;
                    var2 = null;
                    var4 = Object.create(var2);
                    var2 = 0;
                    var4['priceTier'] = var2;
                    var19 = {};
                    var18 = var5;
                    var17 = var4;
                    var12 = copyDataProperties(var19, var18, var17);
                    var6 = undefined;
                    SaveGenerator(address=58);
case 37:
                    return var6;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var3 = var9[var7];
                    var3 = var8.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.patch;
                    var3 = {};
                    var16 = _closure1_slot3;
                    var15 = var16.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var10 = var15.bind(var16)(var14, var13, var10);
                    var3['url'] = var10;
                    var10 = {};
                    var18 = var12;
                    var19 = var10;
                    var12 = copyDataProperties(var19, var18);
                    var12 = var11;
                    var11 = 'price_tier';
                    var10[10] = var12;
                    var3['body'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=184);
case 41:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var4 = var3.body;
case 44: // try_end0
                    return var4;
case 42:
                    return var3;
case 45: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var20 = var4;
                    var19 = var5;
                    var3 = new var20[var3](var19, var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 39:
                    return var2;
case 36:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _getGuildRoleSubscriptionGroupListingsForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 25:
                    var11 = arg1;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var5 = {};
                    var7 = false;
                    var5['includeSoftDeleted'] = var7;
                    var2 = var5;
case 47:
                    var4 = var2;
                    var10 = undefined;
                    SaveGenerator(address=43);
case 49:
                    return var6;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var3 = {};
                    var5 = var4.includeSoftDeleted;
                    var3['include_soft_deleted'] = var5;
                    var4 = var4.countryCode;
                    var3['country_code'] = var4;
                    var10 = var3;
case 53: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var3 = var9[var7];
                    var3 = var8.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var11 = var12.bind(var13)(var11);
                    var3['url'] = var11;
                    var3['query'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=172);
case 54:
                    return var3;
case 55:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 33; continue _fun0006 }
case 30:
                    var4 = var3.body;
case 56: // try_end0
                    return var4;
case 33:
                    return var3;
case 57: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var15 = var4;
                    var14 = var5;
                    var3 = new var15[var3](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 51:
                    return var2;
case 46:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _getGuildRoleSubscriptionsSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 58:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot3;
                    var10 = var11.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=98);
case 59:
                    return var2;
case 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 22; continue _fun0007 }
case 20:
                    var3 = var2.body;
                    return var3;
case 22:
                    return var2;
case 16:
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
    var1 = function _updateGuildRoleSubscriptionsSettings() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 11; continue _fun0008 }
case 3:
                    var10 = arg1;
                    var9 = arg2;
case 12: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var12 = _closure1_slot3;
                    var11 = var12.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=109);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 15; continue _fun0008 }
case 16:
                    var3 = var2.body;
case 17: // try_end0
                    return var3;
case 15:
                    return var2;
case 18: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var14 = var3;
                    var13 = var4;
                    var2 = new var14[var2](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
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
    var1 = function _getPriceTiers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 3:
                    var10 = arg1;
case 25: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var9 = var9.PRICE_TIERS;
                    var2['url'] = var9;
                    var9 = {};
                    var11 = _closure1_slot4;
                    var11 = var11.GUILD_ROLE_SUBSCRIPTIONS;
                    var9['price_tier_type'] = var11;
                    var9['guild_id'] = var10;
                    var2['query'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=124);
case 62:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 63; continue _fun0009 }
case 10:
                    var3 = var2.body;
case 64: // try_end0
                    return var3;
case 63:
                    return var2;
case 65: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 61:
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
    var1 = function _getGuildRoleSubscriptionGroupListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 66; continue _fun0010 }
case 25:
                    var12 = arg1;
                    var10 = arg2;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var2 = {};
case 67:
                    var11 = var2;
                    SaveGenerator(address=34);
case 69:
                    return var6;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 70; continue _fun0010 }
case 50: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var3 = var9[var7];
                    var3 = var8.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var14 = _closure1_slot3;
                    var13 = var14.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var10 = var13.bind(var14)(var12, var10);
                    var3['url'] = var10;
                    var10 = {};
                    var12 = var11.includeDraftListings;
                    var10['include_draft_listings'] = var12;
                    var11 = var11.includeArchivedListings;
                    var10['include_archived_listings'] = var11;
                    var3['query'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=165);
case 71:
                    return var3;
case 72:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var4 = var3.body;
case 19: // try_end0
                    return var4;
case 73:
                    return var3;
case 41: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var17 = var4;
                    var16 = var5;
                    var3 = new var17[var3](var16, var15);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 70:
                    return var2;
case 66:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _getGuildRoleSubscriptionGroupForSubscriptionPlan() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 19; continue _fun0011 }
case 3:
                    var9 = arg1;
case 25: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot3;
                    var10 = var11.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=101);
case 75:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 16; continue _fun0011 }
case 13:
                    var3 = var2.body;
case 22: // try_end0
                    return var3;
case 16:
                    return var2;
case 23: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
    var1 = function _deleteGuildRoleSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 31; continue _fun0012 }
case 3:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var9 = var12.bind(var13)(var11, var10, var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=110);
case 77:
                    return var2;
case 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 8; continue _fun0012 }
case 79: // try_end0
                    return var3;
case 8:
                    return var2;
case 62: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var2](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 31:
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
    var1 = function _archiveGuildRoleSubscriptionListing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 80; continue _fun0013 }
case 3:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE;
                    var9 = var12.bind(var13)(var11, var10, var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=110);
case 77:
                    return var2;
case 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 9; continue _fun0013 }
case 79:
                    var3 = var2.body;
case 81: // try_end0
                    return var3;
case 9:
                    return var2;
case 7: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var2](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 80:
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
    var1 = function _getGuildRoleSubscriptionTrials() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 19; continue _fun0014 }
case 3:
                    var9 = arg1;
case 25: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot3;
                    var10 = var11.GUILD_ROLE_SUBSCRIPTION_TRIALS;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=101);
case 75:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 16; continue _fun0014 }
case 13:
                    var3 = var2.body;
case 22: // try_end0
                    return var3;
case 16:
                    return var2;
case 23: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
    var1 = function _updateGuildRoleSubscriptionsTrial() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 2; continue _fun0015 }
case 3:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL;
                    var10 = var12.bind(var13)(var11, var10);
                    var2['url'] = var10;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=113);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 7; continue _fun0015 }
case 8:
                    var3 = var2.body;
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var16 = var3;
                    var15 = var4;
                    var2 = new var16[var2](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot19 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function _getGuildRoleSubscriptionTrialEligibility() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 11; continue _fun0016 }
case 3:
                    var11 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 4: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY;
                    var9 = var12.bind(var13)(var11, var10, var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=109);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0016_ip = 15; continue _fun0016 }
case 16:
                    var3 = var2.body;
case 17: // try_end0
                    return var3;
case 15:
                    return var2;
case 18: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var2](var16, var15);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
                    return var1;
                }
            };
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
    var1 = function _getGuildMonetizationRestrictions() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 82; continue _fun0017 }
case 25:
                    var11 = arg1;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0017_ip = 83; continue _fun0017 }
case 48:
                    var2 = {};
case 83:
                    var10 = var2.signal;
                    SaveGenerator(address=34);
case 69:
                    return var6;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 84; continue _fun0017 }
case 50: // try_start_0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var3 = var9[var7];
                    var3 = var8.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.CREATOR_MONETIZATION_RESTRICTIONS;
                    var11 = var12.bind(var13)(var11);
                    var3['url'] = var11;
                    var3['signal'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=134);
case 85:
                    return var3;
case 86:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                    var4 = var3.body;
case 89: // try_end0
                    return var4;
case 87:
                    return var3;
case 90: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var15 = var4;
                    var14 = var5;
                    var3 = new var15[var3](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 84:
                    return var2;
case 82:
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
    var1 = function _fetchHighlightedCreatorGuildDetails() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 91; continue _fun0018 }
case 3:
                    var11 = arg1;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
case 4: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var8 = 3;
                    var2 = var10[var8];
                    var2 = var9.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.get;
                    var2 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_DISCOVERY_SLUG;
                    var11 = var12.bind(var13)(var11);
                    var2['url'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=105);
case 92:
                    return var2;
case 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 94; continue _fun0018 }
case 5:
                    var3 = var2;
                    var7 = var2.body;
                    var4 = var7;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0018_ip = 95; continue _fun0018 }
case 96:
                    var6 = global;
                    var7 = var6.JSON;
                    var6 = var7.parse;
                    var3 = var3.text;
                    var3 = var6.bind(var7)(var3);
                    _fun0018_ip = 97; continue _fun0018;
case 95:
                    var3 = var4;
case 97: // try_end0
                    return var3;
case 94:
                    return var2;
case 71: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var15 = var3;
                    var14 = var4;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 91:
                    return var1;
                }
            };
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
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PriceTierTypes;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function updateGuildRoleSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateGuildRoleSubscriptionGroupListing'] = var4;
    var4 = function createGuildRoleSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGuildRoleSubscriptionGroupListing'] = var4;
    var4 = function deleteGuildRoleSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteGuildRoleSubscriptionGroupListing'] = var4;
    var4 = function createGuildRoleSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGuildRoleSubscriptionListing'] = var4;
    var4 = function updateGuildRoleSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateGuildRoleSubscriptionListing'] = var4;
    var4 = function getGuildRoleSubscriptionGroupListingsForGuild() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionGroupListingsForGuild'] = var4;
    var4 = function getGuildRoleSubscriptionsSettings() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionsSettings'] = var4;
    var4 = function updateGuildRoleSubscriptionsSettings() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateGuildRoleSubscriptionsSettings'] = var4;
    var4 = function getPriceTiers() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getPriceTiers'] = var4;
    var4 = function getGuildRoleSubscriptionGroupListing() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionGroupListing'] = var4;
    var4 = function getGuildRoleSubscriptionGroupForSubscriptionPlan() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionGroupForSubscriptionPlan'] = var4;
    var4 = function deleteGuildRoleSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteGuildRoleSubscriptionListing'] = var4;
    var4 = function archiveGuildRoleSubscriptionListing() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['archiveGuildRoleSubscriptionListing'] = var4;
    var4 = function getGuildRoleSubscriptionTrials() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionTrials'] = var4;
    var4 = function updateGuildRoleSubscriptionsTrial() {
        var1 = undefined;
        var4 = _closure1_slot19;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateGuildRoleSubscriptionsTrial'] = var4;
    var4 = function getGuildRoleSubscriptionTrialEligibility() {
        var1 = undefined;
        var4 = _closure1_slot20;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildRoleSubscriptionTrialEligibility'] = var4;
    var4 = function getGuildMonetizationRestrictions() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getGuildMonetizationRestrictions'] = var4;
    var2 = function fetchHighlightedCreatorGuildDetails() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchHighlightedCreatorGuildDetails'] = var2;
    return var1;
})();