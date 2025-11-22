// app/actions/BoostingActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _fetchAppliedGuildBoostsForGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot7;
                    var8 = var9.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=92);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = var2.body;
                    var5 = var8.map;
                    var3 = function(arg1) {
                        var3 = _closure1_slot4;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var8)(var3);
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_APPLIED_BOOSTS_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var4['appliedBoosts'] = var3;
                    var4 = var5.bind(var6)(var4);
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
    var1 = function _fetchAppliedGuildBoostsForUser() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var10 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                    var7 = undefined;
                    if(!(var10 === var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var10 = false;
case 9:
                    SaveGenerator(address=25);
case 11:
                    return var7;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var3 = var4.bind(var7)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.get;
                    var3 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.USER_APPLIED_GUILD_BOOSTS;
                    var3['url'] = var8;
                    var8 = true;
                    var3['oldFormErrors'] = var8;
                    var9 = {};
                    var9['paused'] = var10;
                    var3['query'] = var9;
                    var3['rejectWithError'] = var8;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=115);
case 15:
                    return var3;
case 16:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = var3.body;
                    var6 = var8.map;
                    var4 = function(arg1) {
                        var3 = _closure1_slot4;
                        var2 = var3.createFromServer;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var6.bind(var8)(var4);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'USER_APPLIED_BOOSTS_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var5['appliedGuildBoosts'] = var4;
                    var5 = var6.bind(var7)(var5);
                    return var4;
case 17:
                    return var3;
case 13:
                    return var2;
case 8:
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
    var4 = function fetchGuildBoostSlots() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _fetchGuildBoostSlots() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var7 = 6;
                    var2 = var5[var7];
                    var6 = undefined;
                    var8 = var3.bind(var6)(var2);
                    var3 = var8.dispatch;
                    var2 = {};
                    var9 = 'GUILD_BOOST_SLOTS_FETCH';
                    var2['type'] = var9;
                    var2 = var3.bind(var8)(var2);
                    var3 = _closure1_slot0;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot7;
                    var8 = var8.USER_GUILD_BOOST_SLOTS;
                    var2['url'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=122);
case 21:
                    return var2;
case 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var8 = var2.body;
                    var5 = var8.map;
                    var3 = function(arg1) {
                        var4 = arg1;
                        var3 = _closure1_slot5;
                        var2 = var3.createFromServer;
                        var6 = _closure1_slot6;
                        var5 = var6.getSubscriptionById;
                        var1 = var4.subscription_id;
                        var1 = var5.bind(var6)(var1);
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    };
                    var3 = var5.bind(var8)(var3);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_BOOST_SLOTS_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var4['guildBoostSlots'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 23:
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
    var1 = function _fetchAppliedBoostsCooldown() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 25; continue _fun0004 }
case 20: // try_start_0
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var7 = undefined;
                    var3 = var4.bind(var7)(var3);
                    var6 = var3.HTTP;
                    var4 = var6.get;
                    var3 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var8 = _closure1_slot7;
                    var8 = var8.APPLIED_GUILD_BOOST_COOLDOWN;
                    var3['url'] = var8;
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=84);
case 26:
                    return var3;
case 27:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 28; continue _fun0004 }
case 4:
                    var4 = var3.body;
                    var4 = var4.ends_at;
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var5 = var8[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS';
                    var5['type'] = var8;
                    var5['endsAt'] = var4;
                    var5 = var6.bind(var7)(var5);
case 29: // try_end0
                    return var4;
case 28:
                    return var3;
case 30: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var2 = var3;
                    var4 = var3.status;
                    var3 = 404;
                    if(!(var3 !== var4)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var4 = var3.AppliedGuildBoostError;
                    var9 = var2;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var10 = var3;
                    var2 = new var10[var4](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 31:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var2 = null;
                    var3 = {'type': 'APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS', 'endsAt': null};
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 25:
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
    var1 = function _applyToGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 3:
                    var10 = arg1;
                    var12 = arg2;
                    var6 = undefined;
                    if(!(var2 === var6)) { _fun0005_ip = 34; continue _fun0005 }
case 12:
                    var2 = false;
case 34:
                    var11 = var2;
                    var8 = undefined;
                    SaveGenerator(address=36);
case 14:
                    return var6;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 6;
                    var3 = var3[var7];
                    var9 = var4.bind(var6)(var3);
                    var4 = var9.dispatch;
                    var3 = {};
                    var13 = 'GUILD_APPLY_BOOST_START';
                    var3['type'] = var13;
                    var3 = var4.bind(var9)(var3);
case 4: // try_start_0
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var3 = var9[var3];
                    var3 = var4.bind(var6)(var3);
                    var9 = var3.HTTP;
                    var4 = var9.put;
                    var3 = {};
                    var14 = _closure1_slot7;
                    var13 = var14.APPLIED_GUILD_BOOSTS_FOR_GUILD;
                    var10 = var13.bind(var14)(var10);
                    var3['url'] = var10;
                    var10 = {};
                    var10['user_premium_guild_subscription_slot_ids'] = var12;
                    var10['disable_powerup_auto_apply'] = var11;
                    var3['body'] = var10;
                    var10 = true;
                    var3['oldFormErrors'] = var10;
                    var10 = false;
                    var3['rejectWithError'] = var10;
                    var3 = var4.bind(var9)(var3);
                    SaveGenerator(address=184);
case 38:
                    return var3;
case 39:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 17:
                    var8 = var3;
                    var4 = global;
                    var10 = var4.Array;
                    var9 = var10.isArray;
                    var4 = var3.body;
                    var4 = var9.bind(var10)(var4);
                    if(var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var10 = _closure1_slot4;
                    var9 = var10.createFromServer;
                    var4 = var8;
                    var4 = var4.body;
                    var9 = var9.bind(var10)(var4);
                    var4 = new Array(1);
                    var4[0] = var9;
                    _fun0005_ip = 43; continue _fun0005;
case 41:
                    var10 = var8.body;
                    var9 = var10.map;
                    var8 = _closure1_slot4;
                    var8 = var8.createFromServer;
                    var4 = var9.bind(var10)(var8);
case 43:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var7];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'GUILD_APPLY_BOOST_SUCCESS';
                    var8['type'] = var11;
                    var8['appliedGuildBoost'] = var4;
                    var8 = var9.bind(var10)(var8);
                    var8 = _closure1_slot10;
                    var8 = var8.bind(var6)();
case 44: // try_end0
                    return var4;
case 40:
                    return var3;
case 45: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var3 = var4[var3];
                    var3 = var8.bind(var6)(var3);
                    var3 = var3.AppliedGuildBoostError;
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {constructor: {value: var3}});
                    var16 = var8;
                    var15 = var9;
                    var3 = new var16[var3](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var8;
                    var5 = _closure1_slot1;
                    var4 = var4[var7];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_APPLY_BOOST_FAIL';
                    var4['type'] = var7;
                    var4['error'] = var3;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 36:
                    return var2;
case 33:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var1 = function _unapplyFromGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 20:
                    var8 = arg1;
                    var9 = arg2;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 6;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.dispatch;
                    var2 = {};
                    var10 = 'GUILD_UNAPPLY_BOOST_START';
                    var2['type'] = var10;
                    var2 = var3.bind(var7)(var2);
case 47: // try_start_0
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var7 = var2.HTTP;
                    var3 = var7.del;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    var12 = _closure1_slot7;
                    var11 = var12.APPLIED_GUILD_BOOST;
                    var10 = var8;
                    var8 = var9;
                    var8 = var11.bind(var12)(var10, var8);
                    var2['url'] = var8;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=145);
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 50; continue _fun0006 }
case 28:
                    var3 = _closure1_slot10;
                    var3 = var3.bind(var5)();
case 51: // try_end0
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var8 = var7.bind(var5)(var3);
                    var7 = var8.dispatch;
                    var3 = {};
                    var10 = 'GUILD_UNAPPLY_BOOST_SUCCESS';
                    var3['type'] = var10;
                    var3['boostId'] = var9;
                    var3 = var7.bind(var8)(var3);
                    return var5;
case 50:
                    return var2;
case 52: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.AppliedGuildBoostError;
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {constructor: {value: var2}});
                    var15 = var7;
                    var14 = var8;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var7;
                    var4 = _closure1_slot1;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GUILD_UNAPPLY_BOOST_FAIL';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 46:
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
    var1 = function _cancelGuildBoostSlot() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 8; continue _fun0007 }
case 20:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot7;
                    var8 = var9.USER_GUILD_BOOST_SLOT_CANCEL;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=93);
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 13; continue _fun0007 }
case 55:
                    var8 = _closure1_slot5;
                    var7 = var8.createFromServer;
                    var5 = var2.body;
                    var10 = _closure1_slot6;
                    var9 = var10.getSubscriptionById;
                    var3 = var2.body;
                    var3 = var3.subscription_id;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var5, var3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    var4['type'] = var7;
                    var4['guildBoostSlot'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 13:
                    return var2;
case 8:
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
    var1 = function _uncancelGuildBoostSlot() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 8; continue _fun0008 }
case 20:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var9 = _closure1_slot7;
                    var8 = var9.USER_GUILD_BOOST_SLOT_UNCANCEL;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=93);
case 53:
                    return var2;
case 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 13; continue _fun0008 }
case 55:
                    var8 = _closure1_slot5;
                    var7 = var8.createFromServer;
                    var5 = var2.body;
                    var10 = _closure1_slot6;
                    var9 = var10.getSubscriptionById;
                    var3 = var2.body;
                    var3 = var3.subscription_id;
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var5, var3);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GUILD_BOOST_SLOT_UPDATE_SUCCESS';
                    var4['type'] = var7;
                    var4['guildBoostSlot'] = var3;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 13:
                    return var2;
case 8:
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/BoostingActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchAppliedGuildBoostsForGuild() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAppliedGuildBoostsForGuild'] = var5;
    var5 = function fetchAppliedGuildBoostsForUser() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAppliedGuildBoostsForUser'] = var5;
    var3['fetchGuildBoostSlots'] = var4;
    var4 = function fetchAppliedBoostsCooldown() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAppliedBoostsCooldown'] = var4;
    var4 = function applyToGuild() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['applyToGuild'] = var4;
    var4 = function unapplyFromGuild() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['unapplyFromGuild'] = var4;
    var4 = function cancelGuildBoostSlot() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['cancelGuildBoostSlot'] = var4;
    var2 = function uncancelGuildBoostSlot() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uncancelGuildBoostSlot'] = var2;
    return var1;
})();