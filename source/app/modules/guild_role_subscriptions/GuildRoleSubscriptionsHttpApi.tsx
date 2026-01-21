// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var22 = require;
    var3 = exports;
    var23 = dependencyMap;
    var _closure1_slot0 = var22;
    var _closure1_slot1 = var23;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var5 = var23[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var23[var4];
    var4 = var22.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var23[var4];
    var4 = var22.bind(var1)(var4);
    var4 = var4.PriceTierTypes;
    var _closure1_slot4 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=96);
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
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
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
    var20 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
case 12: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot3;
                    var7 = var8.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=92);
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
                    var10 = var3;
                    var9 = var4;
                    var2 = new var10[var2](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
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
    var19 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
case 12: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=89);
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
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
    var18 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var10 = arg1;
                    var7 = arg2;
                    var8 = var5.priceTier;
                    var2 = null;
                    var4 = Object.create(var2);
                    var2 = 0;
                    var4['priceTier'] = var2;
                    var15 = {};
                    var14 = var5;
                    var13 = var4;
                    var9 = copyDataProperties(var15, var14, var13);
                    var6 = undefined;
                    SaveGenerator(address=55);
case 26:
                    return var6;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 28; continue _fun0004 }
case 29: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var12 = _closure1_slot3;
                    var11 = var12.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var7 = var11.bind(var12)(var10, var7);
                    var3['url'] = var7;
                    var7 = {};
                    var14 = var9;
                    var15 = var7;
                    var9 = copyDataProperties(var15, var14);
                    var9 = var8;
                    var8 = 'price_tier';
                    var7[var8] = var9;
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=163);
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
                    var16 = var4;
                    var15 = var5;
                    var3 = new var16[var3](var15, var14);
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
    var17 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var5 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 36; continue _fun0005 }
case 25:
                    var11 = arg1;
                    var10 = arg2;
                    var7 = arg3;
                    var8 = var5.priceTier;
                    var2 = null;
                    var4 = Object.create(var2);
                    var2 = 0;
                    var4['priceTier'] = var2;
                    var16 = {};
                    var15 = var5;
                    var14 = var4;
                    var9 = copyDataProperties(var16, var15, var14);
                    var6 = undefined;
                    SaveGenerator(address=58);
case 37:
                    return var6;
case 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 39; continue _fun0005 }
case 40: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.patch;
                    var3 = {};
                    var13 = _closure1_slot3;
                    var12 = var13.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var7 = var12.bind(var13)(var11, var10, var7);
                    var3['url'] = var7;
                    var7 = {};
                    var15 = var9;
                    var16 = var7;
                    var9 = copyDataProperties(var16, var15);
                    var9 = var8;
                    var8 = 'price_tier';
                    var7[var8] = var9;
                    var3['body'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=167);
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
                    var17 = var4;
                    var16 = var5;
                    var3 = new var17[var3](var16, var15);
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
    var16 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 25:
                    var8 = arg1;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var5 = {};
                    var9 = false;
                    var5['includeSoftDeleted'] = var9;
                    var2 = var5;
case 47:
                    var4 = var2;
                    var7 = undefined;
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
                    var7 = var3;
case 53: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var10 = _closure1_slot3;
                    var9 = var10.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var8 = var9.bind(var10)(var8);
                    var3['url'] = var8;
                    var3['query'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=155);
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
                    var12 = var4;
                    var11 = var5;
                    var3 = new var12[var3](var11, var10);
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
    var15 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 16; continue _fun0007 }
case 58:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot3;
                    var6 = var7.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                    var5 = arg1;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=81);
case 59:
                    return var2;
case 53:
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
    var14 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 11; continue _fun0008 }
case 3:
                    var6 = arg1;
                    var5 = arg2;
case 12: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var8 = _closure1_slot3;
                    var7 = var8.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=92);
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
                    var10 = var3;
                    var9 = var4;
                    var2 = new var10[var2](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
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
    var13 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 60; continue _fun0009 }
case 3:
                    var6 = arg1;
case 25: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot3;
                    var5 = var5.PRICE_TIERS;
                    var2['url'] = var5;
                    var5 = {};
                    var7 = _closure1_slot4;
                    var7 = var7.GUILD_ROLE_SUBSCRIPTIONS;
                    var5['price_tier_type'] = var7;
                    var5['guild_id'] = var6;
                    var2['query'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=107);
case 61:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 62; continue _fun0009 }
case 10:
                    var3 = var2.body;
case 63: // try_end0
                    return var3;
case 62:
                    return var2;
case 64: // catch_target0
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
                    var9 = var3;
                    var8 = var4;
                    var2 = new var9[var2](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 60:
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
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 65; continue _fun0010 }
case 25:
                    var9 = arg1;
                    var7 = arg2;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var2 = {};
case 66:
                    var8 = var2;
                    SaveGenerator(address=34);
case 68:
                    return var6;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0010_ip = 69; continue _fun0010 }
case 50: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var11 = _closure1_slot3;
                    var10 = var11.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS;
                    var7 = var10.bind(var11)(var9, var7);
                    var3['url'] = var7;
                    var7 = {};
                    var9 = var8.includeDraftListings;
                    var7['include_draft_listings'] = var9;
                    var8 = var8.includeArchivedListings;
                    var7['include_archived_listings'] = var8;
                    var3['query'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=148);
case 70:
                    return var3;
case 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 72; continue _fun0010 }
case 73:
                    var4 = var3.body;
case 19: // try_end0
                    return var4;
case 72:
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
                    var14 = var4;
                    var13 = var5;
                    var3 = new var14[var3](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 69:
                    return var2;
case 65:
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
    var11 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 19; continue _fun0011 }
case 3:
                    var5 = arg1;
case 25: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot3;
                    var6 = var7.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=84);
case 74:
                    return var2;
case 75:
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
                    var9 = var3;
                    var8 = var4;
                    var2 = new var9[var2](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 31; continue _fun0012 }
case 3:
                    var8 = arg1;
                    var7 = arg2;
                    var6 = arg3;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var10 = _closure1_slot3;
                    var9 = var10.GUILD_ROLE_SUBSCRIPTION_LISTINGS;
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=93);
case 76:
                    return var2;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 8; continue _fun0012 }
case 78: // try_end0
                    return var3;
case 8:
                    return var2;
case 61: // catch_target0
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
case 31:
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
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 79; continue _fun0013 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE;
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=93);
case 76:
                    return var2;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 9; continue _fun0013 }
case 78:
                    var3 = var2.body;
case 80: // try_end0
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
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 79:
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
    var8 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 19; continue _fun0014 }
case 3:
                    var5 = arg1;
case 25: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var7 = _closure1_slot3;
                    var6 = var7.GUILD_ROLE_SUBSCRIPTION_TRIALS;
                    var5 = var6.bind(var7)(var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=84);
case 74:
                    return var2;
case 75:
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
                    var9 = var3;
                    var8 = var4;
                    var2 = new var9[var2](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 19:
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
    var7 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 2; continue _fun0015 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=96);
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
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 2:
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
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 11; continue _fun0016 }
case 3:
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = var9.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY;
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=92);
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
                    var13 = var3;
                    var12 = var4;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 11:
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
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 81; continue _fun0017 }
case 25:
                    var8 = arg1;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0017_ip = 82; continue _fun0017 }
case 48:
                    var2 = {};
case 82:
                    var7 = var2.signal;
                    SaveGenerator(address=34);
case 68:
                    return var6;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0017_ip = 83; continue _fun0017 }
case 50: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.get;
                    var3 = {};
                    var10 = _closure1_slot3;
                    var9 = var10.CREATOR_MONETIZATION_RESTRICTIONS;
                    var8 = var9.bind(var10)(var8);
                    var3['url'] = var8;
                    var3['signal'] = var7;
                    var7 = false;
                    var3['rejectWithError'] = var7;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=117);
case 84:
                    return var3;
case 85:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0017_ip = 86; continue _fun0017 }
case 87:
                    var4 = var3.body;
case 88: // try_end0
                    return var4;
case 86:
                    return var3;
case 89: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.APIError;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var12 = var4;
                    var11 = var5;
                    var3 = new var12[var3](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 83:
                    return var2;
case 81:
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
    var4 = var4.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 90; continue _fun0018 }
case 3:
                    var8 = arg1;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
case 4: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var6 = var7.get;
                    var2 = {};
                    var10 = _closure1_slot3;
                    var9 = var10.GUILD_DISCOVERY_SLUG;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=88);
case 91:
                    return var2;
case 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0018_ip = 93; continue _fun0018 }
case 5:
                    var3 = var2;
                    var7 = var2.body;
                    var4 = var7;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0018_ip = 94; continue _fun0018 }
case 95:
                    var6 = global;
                    var7 = var6.JSON;
                    var6 = var7.parse;
                    var3 = var3.text;
                    var3 = var6.bind(var7)(var3);
                    _fun0018_ip = 96; continue _fun0018;
case 94:
                    var3 = var4;
case 96: // try_end0
                    return var3;
case 93:
                    return var2;
case 70: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.APIError;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 90:
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
    var2 = var2.bind(var1)();
    var21 = 5;
    var21 = var23[var21];
    var23 = var22.bind(var1)(var21);
    var22 = var23.fileFinishedImporting;
    var21 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx';
    var21 = var22.bind(var23)(var21);
    var3['updateGuildRoleSubscriptionGroupListing'] = var20;
    var3['createGuildRoleSubscriptionGroupListing'] = var19;
    var3['deleteGuildRoleSubscriptionGroupListing'] = var18;
    var3['createGuildRoleSubscriptionListing'] = var17;
    var3['updateGuildRoleSubscriptionListing'] = var16;
    var3['getGuildRoleSubscriptionGroupListingsForGuild'] = var15;
    var3['getGuildRoleSubscriptionsSettings'] = var14;
    var3['updateGuildRoleSubscriptionsSettings'] = var13;
    var3['getPriceTiers'] = var12;
    var3['getGuildRoleSubscriptionGroupListing'] = var11;
    var3['getGuildRoleSubscriptionGroupForSubscriptionPlan'] = var10;
    var3['deleteGuildRoleSubscriptionListing'] = var9;
    var3['archiveGuildRoleSubscriptionListing'] = var8;
    var3['getGuildRoleSubscriptionTrials'] = var7;
    var3['updateGuildRoleSubscriptionsTrial'] = var6;
    var3['getGuildRoleSubscriptionTrialEligibility'] = var5;
    var3['getGuildMonetizationRestrictions'] = var4;
    var3['fetchHighlightedCreatorGuildDetails'] = var2;
    return var1;
})();