// app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var11 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var11;
    var _closure1_slot3 = var8;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
case 36:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 36; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var5 = function useListingEditState(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var2 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var9;
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot10;
            var4 = undefined;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.setListing;
                return var1;
            };
            var10 = var7.bind(var4)(var6);
            var _closure2_slot3 = var10;
            var8 = _closure1_slot6;
            var7 = var8.useCallback;
            var6 = new Array(4);
            var6[0] = var10;
            var6[1] = var9;
            var6[2] = var2;
            var6[3] = var3;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = arg1;
                        var1 = null;
                        var4 = var1 == var5;
                        var3 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                        var4 = _closure2_slot1;
                        var2 = var5[var4];
case 37:
                        if(!(var1 == var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                        var2 = _closure2_slot2;
case 39:
                        var4 = _closure3_slot0;
                        var6 = 'function';
                        var4 = typeof var4;
                        if(!(var6 !== var4)) { _fun0005_ip = 41; continue _fun0005 }
case 28:
                        var6 = _closure3_slot0;
                        _fun0005_ip = 42; continue _fun0005;
case 41:
                        var1 = _closure3_slot0;
                        var6 = var1.bind(var3)(var2);
case 42:
                        var1 = global;
                        var4 = var1.Object;
                        var3 = var4.assign;
                        var2 = {};
                        var1 = _closure2_slot1;
                        var2[var1] = var6;
                        var1 = {};
                        var1 = var3.bind(var4)(var1, var5, var2);
                        return var1;
                    }
                };
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var7.bind(var8)(var2, var6);
            var5 = _closure1_slot10;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.listings;
                    var1 = _closure2_slot0;
                    var3 = var3[var1];
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 40:
                    var2 = _closure2_slot1;
                    var1 = var3[var2];
case 43:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var1);
            if(!(var4 !== var1)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var3 = var1;
case 44:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var1 = function useListingValue(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var7 = _closure1_slot3;
        var3 = 9;
        var3 = var7[var3];
        var5 = undefined;
        var8 = var4.bind(var5)(var3);
        var6 = var8.useStateFromStores;
        var3 = _closure1_slot8;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSubscriptionListing;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var8)(var4, var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot1;
        var3 = 10;
        var3 = var7[var3];
        var4 = var4.bind(var5)(var3);
        var3 = function() {
            var1 = _closure2_slot1;
            return var1;
        };
        var5 = var4.bind(var5)(var3);
        var _closure2_slot3 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure2_slot3;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function getRoleEmojis(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0007_ip = 46; continue _fun0007 }
case 31:
            var3 = var4.filter;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.roles;
                var2 = var3.includes;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var2 = global;
            var3 = var2.Set;
            var2 = var4.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
case 46:
            var1 = _closure1_slot17;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var4 = function clearEditState(arg1) {
        var4 = function copyEditState(arg1, arg2) {
            var1 = 'nonexistantEditStateId';
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.setState;
                var1 = function(arg1) {
                    var5 = arg1;
                    var1 = {};
                    var2 = {};
                    var6 = var5.listings;
                    var7 = var2;
                    var3 = copyDataProperties(var7, var6);
                    var4 = _closure3_slot1;
                    var5 = var5.listings;
                    var3 = _closure3_slot0;
                    var3 = var5[var3];
                    var2[var4] = var3;
                    var1['listings'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = undefined;
        var3 = 'nonexistantEditStateId';
        var2 = arg1;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot23 = var4;
    var1 = function _updateListingPeripheralsFromEditState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var11 = var2.guildId;
                    var _closure4_slot0 = var11;
                    var14 = var2.editStateId;
                    var5 = undefined;
                    var _closure4_slot1 = var5;
                    SaveGenerator(address=40);
case 39:
                    return var5;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var6 = _closure1_slot8;
                    var3 = var6.getSubscriptionListing;
                    var3 = var3.bind(var6)(var14);
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot3;
                    var6 = 20;
                    var8 = var13[var6];
                    var15 = var12.bind(var5)(var8);
                    var8 = null;
                    var10 = var8 != var3;
                    var9 = 'listing doesnt exist';
                    var9 = var15.bind(var5)(var10, var9);
                    var9 = var3.role_id;
                    _closure4_slot1 = var9;
                    var10 = var3.id;
                    var15 = _closure1_slot10;
                    var3 = var15.getState;
                    var3 = var3.bind(var15)();
                    var3 = var3.listings;
                    var3 = var3[var14];
                    var6 = var13[var6];
                    var13 = var12.bind(var5)(var6);
                    var12 = var8 != var3;
                    var6 = 'edit state does not exist';
                    var6 = var13.bind(var5)(var12, var6);
                    var16 = var3.roleColor;
                    var17 = var3.roleIcon;
                    var13 = var3.trialLimit;
                    var14 = var3.trialInterval;
                    var12 = var3.tierEmojiIds;
                    var3 = var5 === var16;
                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var3 = var5 === var17;
case 52:
                    if(var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var6 = _closure1_slot1;
                    var15 = _closure1_slot3;
                    var3 = 21;
                    var3 = var15[var3];
                    var15 = var6.bind(var5)(var3);
                    var6 = var15.updateRole;
                    var3 = {};
                    var3['color'] = var16;
                    var18 = var8 == var17;
                    var16 = undefined;
                    if(var18) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var16 = var17.icon;
case 56:
                    var3['icon'] = var16;
                    var18 = var8 == var17;
                    var16 = undefined;
                    if(var18) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var16 = var17.unicodeEmoji;
case 58:
                    var3['unicodeEmoji'] = var16;
                    var3 = var6.bind(var15)(var11, var9, var3);
                    SaveGenerator(address=300);
case 60:
                    return var3;
case 61:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(!var6) { _fun0008_ip = 54; continue _fun0008 }
case 62:
                    return var3;
case 54:
                    var6 = _closure1_slot8;
                    var3 = var6.getSubscriptionTrial;
                    var6 = var3.bind(var6)(var10);
                    var3 = var8 != var13;
                    if(var3) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                    var3 = var8 != var14;
case 63:
                    if(var3) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var6 = var8 != var6;
                    if(!var6) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                    var6 = var8 == var14;
case 67:
                    var3 = var6;
case 65:
                    if(!var3) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                    var6 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 22;
                    var3 = var8[var3];
                    var8 = var6.bind(var5)(var3);
                    var6 = var8.updateSubscriptionTrial;
                    var3 = {};
                    var3['trial'] = var14;
                    var3['max_num_active_trial_users'] = var13;
                    var3 = var6.bind(var8)(var11, var10, var3);
                    SaveGenerator(address=404);
case 71:
                    return var3;
case 72:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 73; continue _fun0008 }
case 69:
                    if(!(var5 !== var12)) { _fun0008_ip = 74; continue _fun0008 }
case 75:
                    var8 = _closure1_slot22;
                    var10 = _closure1_slot7;
                    var6 = var10.getGuildEmoji;
                    var6 = var6.bind(var10)(var11);
                    var6 = var8.bind(var5)(var6, var9);
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 23;
                    var9 = var11[var7];
                    var15 = var8.bind(var5)(var9);
                    var14 = var15.difference;
                    var13 = new Array(0);
                    var21 = var13;
                    var20 = var12;
                    var19 = 0;
                    var9 = arraySpread(var21, var20, var19);
                    var9 = new Array(0);
                    var21 = var9;
                    var20 = var6;
                    var16 = arraySpread(var21, var20, var19);
                    var9 = var14.bind(var15)(var13, var9);
                    var7 = var11[var7];
                    var11 = var8.bind(var5)(var7);
                    var8 = var11.difference;
                    var7 = new Array(0);
                    var21 = var7;
                    var20 = var6;
                    var6 = arraySpread(var21, var20, var19);
                    var6 = new Array(0);
                    var21 = var6;
                    var20 = var12;
                    var12 = arraySpread(var21, var20, var19);
                    var7 = var8.bind(var11)(var7, var6);
                    var8 = var9.map;
                    var6 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getCustomEmojiById;
                            var2 = arg1;
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 == var4)) { _fun0009_ip = 40; continue _fun0009 }
case 37:
                            var2 = undefined;
                            return var2;
case 40:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.updateEmoji;
                            var1 = {};
                            var6 = _closure4_slot0;
                            var1['guildId'] = var6;
                            var6 = var4.id;
                            var1['emojiId'] = var6;
                            var9 = var4.roles;
                            var4 = new Array(1);
                            var8 = 0;
                            var10 = var4;
                            var6 = arraySpread(var10, var9, var8);
                            var5 = _closure4_slot1;
                            var4[var6] = var5;
                            var5 = 1;
                            var5 = var6 + var5;
                            var1['roles'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var20 = var8.bind(var9)(var6);
                    var6 = var7.map;
                    var4 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getCustomEmojiById;
                            var1 = arg1;
                            var6 = var3.bind(var4)(var1);
                            var1 = null;
                            if(!(var1 == var6)) { _fun0010_ip = 40; continue _fun0010 }
case 37:
                            var1 = undefined;
                            return var1;
case 40:
                            var4 = var6.roles;
                            var3 = var4.filter;
                            var1 = function(arg1) {
                                var2 = _closure4_slot1;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var5 = var3.bind(var4)(var1);
                            var3 = var5.length;
                            var1 = 0;
                            if(!(!(var3 > var1))) { _fun0010_ip = 76; continue _fun0010 }
case 30:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 24;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var4 = var7.deleteEmoji;
                            var3 = _closure4_slot0;
                            var1 = var6.id;
                            var1 = var4.bind(var7)(var3, var1);
                            _fun0010_ip = 77; continue _fun0010;
case 76:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 24;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.updateEmoji;
                            var2 = {};
                            var7 = _closure4_slot0;
                            var2['guildId'] = var7;
                            var6 = var6.id;
                            var2['emojiId'] = var6;
                            var2['roles'] = var5;
                            var1 = var3.bind(var4)(var2);
case 77:
                            return var1;
                        }
                    };
                    var9 = var6.bind(var7)(var4);
                    var4 = global;
                    var7 = var4.Promise;
                    var6 = var7.all;
                    var4 = new Array(0);
                    var21 = var4;
                    var19 = arraySpread(var21, var20, var19);
                    var21 = var4;
                    var20 = var9;
                    var8 = arraySpread(var21, var20, var19);
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=634);
case 78:
                    return var4;
case 79:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 80; continue _fun0008 }
case 74:
                    return var5;
case 80:
                    return var4;
case 73:
                    return var3;
case 50:
                    return var2;
case 47:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _createListingFromEditState() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var18 = var2.guildId;
                    var20 = var2.editStateId;
                    var10 = var2.groupListingId;
                    var8 = var2.onBeforeDispatchNewListing;
                    var7 = undefined;
                    SaveGenerator(address=42);
case 49:
                    return var7;
case 83:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 84; continue _fun0011 }
case 85:
                    var4 = _closure1_slot10;
                    var3 = var4.getState;
                    var3 = var3.bind(var4)();
                    var3 = var3.listings;
                    var16 = var3[var20];
                    var4 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var3 = 20;
                    var6 = var12[var3];
                    var11 = var4.bind(var7)(var6);
                    var19 = null;
                    var9 = var19 != var16;
                    var6 = 'edit state does not exist';
                    var6 = var11.bind(var7)(var9, var6);
                    var14 = var16.name;
                    var13 = var16.description;
                    var6 = var16.channelBenefits;
                    var9 = var16.intangibleBenefits;
                    var11 = var16.priceTier;
                    var15 = var16.image;
                    var17 = var16.channelAccessFormat;
                    var16 = var12[var3];
                    var22 = var4.bind(var7)(var16);
                    var21 = var19 != var14;
                    var16 = 'no name provided';
                    var16 = var22.bind(var7)(var21, var16);
                    var16 = var12[var3];
                    var22 = var4.bind(var7)(var16);
                    var21 = var19 != var13;
                    var16 = 'no description provided';
                    var16 = var22.bind(var7)(var21, var16);
                    var16 = var12[var3];
                    var22 = var4.bind(var7)(var16);
                    var21 = var19 != var11;
                    var16 = 'no priceTier provided';
                    var16 = var22.bind(var7)(var21, var16);
                    var3 = var12[var3];
                    var12 = var4.bind(var7)(var3);
                    var4 = var19 != var15;
                    var3 = 'no image provided';
                    var3 = var12.bind(var7)(var4, var3);
                    var3 = _closure1_slot9;
                    var16 = var3.ALL_CHANNELS_ACCESS;
                    if(!(var19 == var10)) { _fun0011_ip = 8; continue _fun0011 }
case 86:
                    var4 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var3 = 22;
                    var3 = var12[var3];
                    var12 = var4.bind(var7)(var3);
                    var4 = var12.createSubscriptionGroupListing;
                    var3 = {};
                    var3 = var4.bind(var12)(var18, var3);
                    SaveGenerator(address=308);
case 62:
                    return var3;
case 87:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                    var10 = var3.id;
case 8:
                    var4 = var19 != var6;
                    if(!var4) { _fun0011_ip = 90; continue _fun0011 }
case 26:
                    var21 = var6.length;
                    var12 = 0;
                    var4 = var21 > var12;
case 90:
                    if(!var4) { _fun0011_ip = 91; continue _fun0011 }
case 92:
                    var12 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var4 = 25;
                    var4 = var21[var4];
                    var12 = var12.bind(var7)(var4);
                    var4 = var12.createChannelsFromTemplateTierBenefits;
                    var4 = var4.bind(var12)(var18, var6);
                    SaveGenerator(address=379);
case 93:
                    return var4;
case 94:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(var12) { _fun0011_ip = 95; continue _fun0011 }
case 91:
                    var21 = var6;
                    if(!(var19 == var21)) { _fun0011_ip = 96; continue _fun0011 }
case 97:
                    var21 = new Array(0);
case 96:
                    var12 = new Array(0);
                    var23 = 0;
                    var25 = var12;
                    var24 = var21;
                    var6 = arraySpread(var25, var24, var23);
                    if(!(var19 == var9)) { _fun0011_ip = 98; continue _fun0011 }
case 99:
                    var9 = new Array(0);
case 98:
                    var25 = var12;
                    var24 = var9;
                    var23 = var6;
                    var6 = arraySpread(var25, var24, var23);
                    var9 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var6 = 25;
                    var6 = var19[var6];
                    var9 = var9.bind(var7)(var6);
                    var6 = var9.getTemplateTierCreationAnalyticsContext;
                    var9 = var6.bind(var9)(var20, var18);
                    var6 = _closure1_slot2;
                    var5 = 22;
                    var5 = var19[var5];
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.createSubscriptionListing;
                    var5 = {};
                    var5['guildId'] = var18;
                    var5['groupListingId'] = var10;
                    var10 = {};
                    var16 = var17 === var16;
                    var10['can_access_all_channels'] = var16;
                    var10['image'] = var15;
                    var10['name'] = var14;
                    var10['description'] = var13;
                    var10['benefits'] = var12;
                    var10['priceTier'] = var11;
                    var5['data'] = var10;
                    var5['analyticsContext'] = var9;
                    var5['onBeforeDispatchNewListing'] = var8;
                    var5 = var6.bind(var7)(var5);
                    return var5;
case 95:
                    return var4;
case 88:
                    return var3;
case 84:
                    return var2;
case 81:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var6 = global;
    var13 = var6.Object;
    var12 = var13.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var8[var9];
    var9 = var11.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 4;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var10 = var9.AllChannelAccessOptions;
    var _closure1_slot9 = var10;
    var9 = var9.useEditStateStore;
    var _closure1_slot10 = var9;
    var9 = 6;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot11 = var9;
    var9 = 7;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var10 = var9.CurrencyCodes;
    var _closure1_slot12 = var10;
    var9 = var9.DEFAULT_ROLE_COLOR;
    var _closure1_slot13 = var9;
    var9 = 8;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.SubscriptionIntervalTypes;
    var _closure1_slot14 = var9;
    var9 = new Array(0);
    var _closure1_slot15 = var9;
    var9 = new Array(0);
    var _closure1_slot16 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var17 = var9;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot17 = var6;
    var6 = 27;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useListingEditState'] = var5;
    var5 = function useClearEditStateOnUnmount(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = function() {
                var3 = _closure1_slot23;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useClearEditStateOnUnmount'] = var5;
    var5 = function useName(arg1) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 100; continue _fun0012 }
case 32:
                var2 = var3.name;
case 100:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0012_ip = 33; continue _fun0012 }
case 3:
                var1 = var2;
case 33:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'name';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['useName'] = var5;
    var5 = function usePriceTier(arg1) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                if(var5) { _fun0013_ip = 101; continue _fun0013 }
case 32:
                var5 = var2.subscription_plans;
                var2 = 0;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0013_ip = 101; continue _fun0013 }
case 102:
                var1 = var2.price;
case 101:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'priceTier';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['usePriceTier'] = var5;
    var5 = function useDescription(arg1) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0014_ip = 100; continue _fun0014 }
case 32:
                var2 = var3.description;
case 100:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0014_ip = 33; continue _fun0014 }
case 3:
                var1 = var2;
case 33:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'description';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['useDescription'] = var5;
    var5 = function useImage(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                var5 = var3 == var1;
                var4 = undefined;
                var2 = undefined;
                if(var5) { _fun0015_ip = 103; continue _fun0015 }
case 38:
                var2 = var1.image_asset;
case 103:
                if(!(var3 == var2)) { _fun0015_ip = 34; continue _fun0015 }
case 104:
                return var4;
case 34:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 11;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.getAssetURL;
                var3 = var1.application_id;
                var2 = var1.image_asset;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'image';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['useImage'] = var5;
    var5 = function useApplicationId(arg1) {
        var4 = _closure1_slot21;
        var3 = undefined;
        var2 = arg1;
        var1 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0016_ip = 29; continue _fun0016 }
case 32:
                var1 = var2.application_id;
case 29:
                return var1;
            }
        };
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useApplicationId'] = var5;
    var5 = function useRoleIcon(arg1, arg2) {
        var5 = arg1;
        var6 = _closure1_slot1;
        var4 = _closure1_slot3;
        var3 = 12;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = arg2;
        var8 = var6.bind(var4)(var3, var5);
        var _closure2_slot0 = var8;
        var3 = _closure1_slot20;
        var7 = _closure1_slot6;
        var6 = var7.useMemo;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = {};
                var2 = _closure2_slot0;
                var4 = null;
                var3 = var4 == var2;
                var6 = undefined;
                if(var3) { _fun0017_ip = 105; continue _fun0017 }
case 29:
                var3 = _closure2_slot0;
                var6 = var3.icon;
case 105:
                var7 = var4 != var6;
                var3 = undefined;
                if(!var7) { _fun0017_ip = 101; continue _fun0017 }
case 39:
                var3 = var6;
case 101:
                var1['icon'] = var3;
                var3 = _closure2_slot0;
                var6 = var4 == var3;
                var3 = undefined;
                if(var6) { _fun0017_ip = 106; continue _fun0017 }
case 107:
                var5 = _closure2_slot0;
                var3 = var5.unicodeEmoji;
case 106:
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0017_ip = 108; continue _fun0017 }
case 109:
                var2 = var3;
case 108:
                var1['unicodeEmoji'] = var2;
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = 'roleIcon';
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var3['useRoleIcon'] = var5;
    var5 = function useRole(arg1, arg2) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var6 = _closure1_slot3;
        var3 = 12;
        var3 = var6[var3];
        var6 = undefined;
        var4 = var4.bind(var6)(var3);
        var3 = arg2;
        var7 = var4.bind(var6)(var3, var5);
        var _closure2_slot1 = var7;
        var4 = _closure1_slot10;
        var3 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var2 = var1.listings;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0018_ip = 110; continue _fun0018 }
case 40:
                var1 = var2.roleColor;
case 110:
                return var1;
            }
        };
        var5 = var4.bind(var6)(var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot10;
        var3 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var2 = var1.listings;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0019_ip = 110; continue _fun0019 }
case 40:
                var1 = var2.roleIcon;
case 110:
                return var1;
            }
        };
        var6 = var4.bind(var6)(var3);
        var _closure2_slot3 = var6;
        var4 = _closure1_slot6;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot1;
                var6 = null;
                if(!(var6 == var3)) { _fun0020_ip = 5; continue _fun0020 }
case 48:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.DEFAULT_PREVIEW_ROLE;
                _fun0020_ip = 111; continue _fun0020;
case 5:
                var3 = _closure2_slot1;
case 111:
                var10 = var1;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = _closure2_slot3;
                var5 = undefined;
                if(!(var5 !== var3)) { _fun0020_ip = 112; continue _fun0020 }
case 113:
                var3 = _closure2_slot3;
                var7 = var3.icon;
                var8 = var6 != var7;
                var3 = '';
                var4 = var3;
                if(!var8) { _fun0020_ip = 114; continue _fun0020 }
case 11:
                var4 = var7;
case 114:
                var1['icon'] = var4;
                var4 = _closure2_slot3;
                var4 = var4.unicodeEmoji;
                var6 = var6 != var4;
                if(!var6) { _fun0020_ip = 115; continue _fun0020 }
case 116:
                var3 = var4;
case 115:
                var1['unicodeEmoji'] = var3;
case 112:
                var3 = _closure2_slot2;
                if(!(var5 !== var3)) { _fun0020_ip = 117; continue _fun0020 }
case 118:
                var4 = _closure2_slot2;
                var1['color'] = var4;
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 14;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.int2hex;
                var2 = var2.bind(var3)(var4);
                var1['colorString'] = var2;
case 117:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useRole'] = var5;
    var5 = function useRoleColor(arg1, arg2) {
        var5 = arg1;
        var6 = _closure1_slot1;
        var4 = _closure1_slot3;
        var3 = 12;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = arg2;
        var8 = var6.bind(var4)(var3, var5);
        var _closure2_slot0 = var8;
        var3 = _closure1_slot20;
        var7 = _closure1_slot6;
        var6 = var7.useMemo;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if(var4) { _fun0021_ip = 37; continue _fun0021 }
case 119:
                var3 = _closure2_slot0;
                var1 = var3.color;
case 37:
                if(!(var2 == var1)) { _fun0021_ip = 39; continue _fun0021 }
case 40:
                var1 = _closure1_slot13;
case 39:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = 'roleColor';
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var3['useRoleColor'] = var5;
    var5 = function useChannelAccessFormat(arg1, arg2) {
        var5 = arg1;
        var6 = _closure1_slot1;
        var4 = _closure1_slot3;
        var3 = 12;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = arg2;
        var8 = var6.bind(var4)(var3, var5);
        var _closure2_slot0 = var8;
        var3 = _closure1_slot20;
        var7 = _closure1_slot6;
        var6 = var7.useMemo;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0022_ip = 120; continue _fun0022 }
case 82:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.hasViewChannelPermission;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var1);
                var2 = _closure1_slot9;
                if(var1) { _fun0022_ip = 106; continue _fun0022 }
case 7:
                var1 = var2.SOME_CHANNELS_ACCESS;
                _fun0022_ip = 121; continue _fun0022;
case 106:
                var1 = var2.ALL_CHANNELS_ACCESS;
case 121:
                _fun0022_ip = 122; continue _fun0022;
case 120:
                var2 = _closure1_slot9;
                var1 = var2.SOME_CHANNELS_ACCESS;
case 122:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = 'channelAccessFormat';
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var3['useChannelAccessFormat'] = var5;
    var5 = function useChannelBenefits(arg1) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0023_ip = 123; continue _fun0023 }
case 124:
                var1 = var1.role_benefits;
                var3 = var1.benefits;
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isChannelBenefit;
                var1 = var2.bind(var3)(var1);
                _fun0023_ip = 42; continue _fun0023;
case 123:
                var1 = _closure1_slot15;
case 42:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'channelBenefits';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['useChannelBenefits'] = var5;
    var5 = function useIntangibleBenefits(arg1) {
        var5 = arg1;
        var4 = _closure1_slot20;
        var2 = _closure1_slot21;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0024_ip = 123; continue _fun0024 }
case 124:
                var1 = var1.role_benefits;
                var3 = var1.benefits;
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 16;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isIntangibleBenefit;
                var1 = var2.bind(var3)(var1);
                _fun0024_ip = 42; continue _fun0024;
case 123:
                var1 = _closure1_slot16;
case 42:
                return var1;
            }
        };
        var2 = var2.bind(var3)(var5, var1);
        var1 = 'intangibleBenefits';
        var1 = var4.bind(var3)(var5, var1, var2);
        return var1;
    };
    var3['useIntangibleBenefits'] = var5;
    var5 = function useTierEmojiIds(arg1, arg2) {
        var5 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var3;
        var7 = _closure1_slot1;
        var9 = _closure1_slot3;
        var4 = 12;
        var6 = var9[var4];
        var4 = undefined;
        var6 = var7.bind(var4)(var6);
        var8 = var6.bind(var4)(var3, var5);
        var _closure2_slot1 = var8;
        var7 = _closure1_slot0;
        var6 = 9;
        var6 = var9[var6];
        var10 = var7.bind(var4)(var6);
        var9 = var10.useStateFromStoresArray;
        var6 = _closure1_slot7;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = var3.getGuildEmoji;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var9.bind(var10)(var7, var3, var6);
        var _closure2_slot2 = var9;
        var3 = _closure1_slot20;
        var7 = _closure1_slot6;
        var6 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0025_ip = 125; continue _fun0025 }
case 82:
                var4 = _closure1_slot22;
                var3 = _closure2_slot2;
                var1 = _closure2_slot1;
                var2 = var1.id;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                _fun0025_ip = 126; continue _fun0025;
case 125:
                var1 = _closure1_slot17;
case 126:
                return var1;
            }
        };
        var2 = var6.bind(var7)(var1, var2);
        var1 = 'tierEmojiIds';
        var1 = var3.bind(var4)(var5, var1, var2);
        return var1;
    };
    var3['useTierEmojiIds'] = var5;
    var5 = function useTrialInterval(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 17;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.useSubscriptionTrial;
            var1 = var1.bind(var3)(var5);
            var6 = _closure1_slot1;
            var3 = 18;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = null;
            var8 = var3 == var1;
            var7 = undefined;
            if(var8) { _fun0026_ip = 121; continue _fun0026 }
case 127:
            var7 = var1.active_trial;
case 121:
            var8 = var3 != var7;
            var1 = null;
            if(!var8) { _fun0026_ip = 128; continue _fun0026 }
case 129:
            var1 = var7;
case 128:
            var1 = var6.bind(var4)(var1);
            var1 = var1.selectedOption;
            var2 = _closure1_slot20;
            var6 = var3 != var1;
            var3 = null;
            if(!var6) { _fun0026_ip = 44; continue _fun0026 }
case 45:
            var3 = var1;
case 44:
            var1 = 'trialInterval';
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
        }
    };
    var3['useTrialInterval'] = var5;
    var5 = function useTrialLimit(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 17;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useSubscriptionTrial;
            var6 = var2.bind(var3)(var5);
            var3 = _closure1_slot20;
            var2 = null;
            var7 = var2 == var6;
            var1 = undefined;
            if(var7) { _fun0027_ip = 7; continue _fun0027 }
case 4:
            var1 = var6.max_num_active_trial_users;
case 7:
            var6 = var2 != var1;
            var2 = null;
            if(!var6) { _fun0027_ip = 113; continue _fun0027 }
case 130:
            var2 = var1;
case 113:
            var1 = 'trialLimit';
            var1 = var3.bind(var4)(var5, var1, var2);
            return var1;
        }
    };
    var3['useTrialLimit'] = var5;
    var5 = function useHasChanges(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.listings;
            var1 = _closure2_slot0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useHasChanges'] = var5;
    var5 = function useHasChangesForEditStateIds(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot18;
                var1 = _closure2_slot0;
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0028_ip = 120; continue _fun0028 }
case 131:
                var6 = var2.value;
                var1 = var5.listings;
                var1 = var1[var6];
                if(!(var4 === var1)) { _fun0028_ip = 113; continue _fun0028 }
case 36:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(var1) { _fun0028_ip = 120; continue _fun0028 }
case 35:
                _fun0028_ip = 131; continue _fun0028;
case 113:
                var1 = true;
                return var1;
case 120:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useHasChangesForEditStateIds'] = var5;
    var5 = function useSubscriptionPlan(arg1) {
        var5 = arg1;
        var4 = _closure1_slot21;
        var7 = undefined;
        var3 = function(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0029_ip = 104; continue _fun0029 }
case 32:
                var3 = var2.subscription_plans;
                var2 = 0;
                var1 = var3[var2];
case 104:
                return var1;
            }
        };
        var6 = var4.bind(var7)(var5, var3);
        var _closure2_slot0 = var6;
        var4 = _closure1_slot20;
        var3 = 'priceTier';
        var5 = var4.bind(var7)(var5, var3, var7);
        var4 = _closure1_slot5;
        var3 = 1;
        var4 = var4.bind(var7)(var5, var3);
        var3 = 0;
        var5 = var4[var3];
        var _closure2_slot1 = var5;
        var4 = _closure1_slot6;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var1 = {};
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 == var3)) { _fun0030_ip = 49; continue _fun0030 }
case 48:
                var3 = _closure2_slot0;
                var3 = var2 == var3;
                var5 = undefined;
                if(var3) { _fun0030_ip = 39; continue _fun0030 }
case 34:
                var3 = _closure2_slot0;
                var5 = var3.price;
case 39:
                _fun0030_ip = 132; continue _fun0030;
case 49:
                var5 = _closure2_slot1;
case 132:
                var6 = var2 != var5;
                var3 = 0;
                if(!var6) { _fun0030_ip = 28; continue _fun0030 }
case 133:
                var3 = var5;
case 28:
                var1['price'] = var3;
                var3 = _closure2_slot0;
                var6 = var2 == var3;
                var5 = undefined;
                if(var6) { _fun0030_ip = 134; continue _fun0030 }
case 121:
                var6 = _closure2_slot0;
                var5 = var6.currency;
case 134:
                if(!(var2 == var5)) { _fun0030_ip = 135; continue _fun0030 }
case 136:
                var6 = _closure1_slot12;
                var5 = var6.USD;
case 135:
                var1['currency'] = var5;
                var5 = _closure2_slot0;
                var6 = var2 == var5;
                var5 = undefined;
                if(var6) { _fun0030_ip = 137; continue _fun0030 }
case 138:
                var6 = _closure2_slot0;
                var5 = var6.interval;
case 137:
                if(!(var2 == var5)) { _fun0030_ip = 139; continue _fun0030 }
case 140:
                var6 = _closure1_slot14;
                var5 = var6.MONTH;
case 139:
                var1['interval'] = var5;
                var5 = _closure2_slot0;
                var5 = var2 == var5;
                var6 = undefined;
                if(var5) { _fun0030_ip = 141; continue _fun0030 }
case 142:
                var5 = _closure2_slot0;
                var6 = var5.interval_count;
case 141:
                var7 = var2 != var6;
                var5 = 1;
                if(!var7) { _fun0030_ip = 143; continue _fun0030 }
case 144:
                var5 = var6;
case 143:
                var1['interval_count'] = var5;
                var5 = _closure2_slot0;
                var5 = var2 == var5;
                var3 = undefined;
                if(var5) { _fun0030_ip = 145; continue _fun0030 }
case 146:
                var4 = _closure2_slot0;
                var3 = var4.id;
case 145:
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0030_ip = 147; continue _fun0030 }
case 148:
                var2 = var3;
case 147:
                var1['id'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var1, var2);
        var1 = new Array(1);
        var1[0] = var2;
        return var1;
    };
    var3['useSubscriptionPlan'] = var5;
    var3['clearEditState'] = var4;
    var4 = function useCreateOrUpdateListingFromEditState() {
        var4 = _closure1_slot6;
        var3 = var4.useState;
        var2 = false;
        var3 = var3.bind(var4)(var2);
        var9 = _closure1_slot5;
        var2 = undefined;
        var8 = 2;
        var6 = var9.bind(var2)(var3, var8);
        var3 = 0;
        var4 = var6[var3];
        var7 = 1;
        var6 = var6[var7];
        var _closure2_slot0 = var6;
        var10 = _closure1_slot6;
        var6 = var10.useState;
        var6 = var6.bind(var10)();
        var6 = var9.bind(var2)(var6, var8);
        var3 = var6[var3];
        var6 = var6[var7];
        var _closure2_slot1 = var6;
        var6 = _closure1_slot6;
        var5 = var6.useCallback;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(var5) { _fun0031_ip = 149; continue _fun0031 }
case 48:
                        var12 = var2.guildId;
                        var15 = var2.editStateId;
                        var3 = var2.groupListingId;
                        var11 = var2.onBeforeDispatchNewListing;
                        var14 = var2.onAfterDispatchNewListing;
                        var6 = undefined;
                        var9 = undefined;
                        var16 = undefined;
                        var13 = undefined;
                        SaveGenerator(address=56);
case 4:
                        return var6;
case 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0031_ip = 150; continue _fun0031 }
case 151:
                        var17 = var15;
                        var9 = var17;
                        var8 = _closure1_slot8;
                        var5 = var8.getSubscriptionListing;
                        var16 = var5.bind(var8)(var17);
case 122: // try_start_0 // try_start_2
                        var17 = _closure2_slot0;
                        var8 = true;
                        var17 = var17.bind(var6)(var8);
                        var17 = _closure2_slot1;
                        var17 = var17.bind(var6)(var6);
                        var20 = null;
                        if(!(var20 == var16)) { _fun0031_ip = 152; continue _fun0031 }
case 153:
                        var16 = {};
                        var17 = var12;
                        var16['guildId'] = var17;
                        var17 = var9;
                        var16['editStateId'] = var17;
                        var17 = var3;
                        var16['groupListingId'] = var17;
                        var16['onBeforeDispatchNewListing'] = var11;
                        var11 = function createListingFromEditState() {
                            var1 = undefined;
                            var4 = _closure1_slot25;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var11 = var11.bind(var6)(var16);
                        SaveGenerator(address=164);
case 14:
                        return var11;
case 142:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=15);
                        if(var16) { _fun0031_ip = 154; continue _fun0031 }
case 155:
                        var13 = var11;
                        var17 = var15;
                        var16 = var11.id;
                        var9 = var16;
                        var15 = function moveEditState(arg1, arg2) {
                            var1 = arg1;
                            var _closure6_slot0 = var1;
                            var1 = arg2;
                            var _closure6_slot1 = var1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 19;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.batchUpdates;
                            var2 = function() {
                                var3 = _closure1_slot10;
                                var2 = var3.setState;
                                var1 = function(arg1) {
                                    var3 = arg1;
                                    var1 = {};
                                    var2 = {};
                                    var6 = var3.listings;
                                    var7 = var2;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure6_slot1;
                                    var3 = var3.listings;
                                    var4 = _closure6_slot0;
                                    var3 = var3[var4];
                                    var2[var5] = var3;
                                    var3 = undefined;
                                    var2[var4] = var3;
                                    var1['listings'] = var2;
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var15 = var15.bind(var6)(var17, var16);
                        var15 = var14;
                        if(!(var20 != var15)) { _fun0031_ip = 156; continue _fun0031 }
case 157:
                        var13 = var14.bind(var6)(var13);
                        _fun0031_ip = 156; continue _fun0031;
case 154: // try_end0 // try_end2
                        var14 = _closure2_slot0;
                        var13 = false;
                        var13 = var14.bind(var6)(var13);
                        return var11;
case 152: // try_start_1 // try_start_3
                        var13 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var11 = 20;
                        var14 = var15[var11];
                        var17 = var13.bind(var6)(var14);
                        var14 = var3;
                        var16 = var20 != var14;
                        var3 = 'groupListingId is null';
                        var3 = var17.bind(var6)(var16, var3);
                        var3 = {};
                        var16 = var12;
                        var3['guildId'] = var16;
                        var16 = var9;
                        var3['editStateId'] = var16;
                        var3['groupListingId'] = var14;
                        var18 = var3.guildId;
                        var16 = var3.editStateId;
                        var17 = var3.groupListingId;
                        var14 = _closure1_slot8;
                        var3 = var14.getSubscriptionListing;
                        var3 = var3.bind(var14)(var16);
                        var14 = var15[var11];
                        var21 = var13.bind(var6)(var14);
                        var19 = var20 != var3;
                        var14 = 'listing doesnt exist';
                        var14 = var21.bind(var6)(var19, var14);
                        var19 = _closure1_slot10;
                        var14 = var19.getState;
                        var14 = var14.bind(var19)();
                        var14 = var14.listings;
                        var14 = var14[var16];
                        var11 = var15[var11];
                        var15 = var13.bind(var6)(var11);
                        var13 = var20 != var14;
                        var11 = 'edit state does not exist';
                        var11 = var15.bind(var6)(var13, var11);
                        var23 = var14.name;
                        var21 = var14.description;
                        var11 = var14.channelBenefits;
                        var19 = var14.intangibleBenefits;
                        var22 = var14.priceTier;
                        var13 = var14.image;
                        var14 = var14.channelAccessFormat;
                        var15 = {};
                        var24 = var3.name;
                        if(!(var23 !== var24)) { _fun0031_ip = 158; continue _fun0031 }
case 159:
                        var15['name'] = var23;
case 158:
                        var23 = var3.description;
                        if(!(var21 !== var23)) { _fun0031_ip = 160; continue _fun0031 }
case 161:
                        var15['description'] = var21;
case 160:
                        var23 = var3.subscription_plans;
                        var21 = 0;
                        var24 = var23[var21];
                        var25 = var20 == var24;
                        var23 = undefined;
                        if(var25) { _fun0031_ip = 162; continue _fun0031 }
case 163:
                        var23 = var24.price;
case 162:
                        if(!(var22 !== var23)) { _fun0031_ip = 164; continue _fun0031 }
case 165:
                        var15['priceTier'] = var22;
case 164:
                        if(!(var20 != var13)) { _fun0031_ip = 166; continue _fun0031 }
case 167:
                        var15['image'] = var13;
case 166:
                        if(!(var20 != var14)) { _fun0031_ip = 168; continue _fun0031 }
case 169:
                        var13 = _closure1_slot9;
                        var13 = var13.ALL_CHANNELS_ACCESS;
                        var13 = var14 === var13;
                        var15['can_access_all_channels'] = var13;
case 168:
                        if(!(var20 == var11)) { _fun0031_ip = 170; continue _fun0031 }
case 171:
                        if(!(var20 != var19)) { _fun0031_ip = 172; continue _fun0031 }
case 170:
                        var13 = var3.role_benefits;
                        var23 = var13.benefits;
                        var22 = var23.filter;
                        var24 = _closure1_slot0;
                        var25 = _closure1_slot3;
                        var13 = 16;
                        var14 = var25[var13];
                        var14 = var24.bind(var6)(var14);
                        var14 = var14.isChannelBenefit;
                        var14 = var22.bind(var23)(var14);
                        var22 = var3.role_benefits;
                        var23 = var22.benefits;
                        var22 = var23.filter;
                        var13 = var25[var13];
                        var13 = var24.bind(var6)(var13);
                        var13 = var13.isIntangibleBenefit;
                        var13 = var22.bind(var23)(var13);
                        if(!(var20 != var11)) { _fun0031_ip = 173; continue _fun0031 }
case 174:
                        var14 = var11;
case 173:
                        var11 = new Array(0);
                        var28 = var11;
                        var27 = var14;
                        var26 = 0;
                        var14 = arraySpread(var28, var27, var26);
                        if(!(var20 != var19)) { _fun0031_ip = 175; continue _fun0031 }
case 176:
                        var13 = var19;
case 175:
                        var28 = var11;
                        var27 = var13;
                        var26 = var14;
                        var13 = arraySpread(var28, var27, var26);
                        var15['benefits'] = var11;
case 172:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var11 = 23;
                        var11 = var14[var11];
                        var13 = var13.bind(var6)(var11);
                        var11 = var13.isEmpty;
                        var11 = var11.bind(var13)(var15);
                        if(var11) { _fun0031_ip = 177; continue _fun0031 }
case 178:
                        var13 = _closure1_slot2;
                        var14 = _closure1_slot3;
                        var11 = 22;
                        var11 = var14[var11];
                        var14 = var13.bind(var6)(var11);
                        var13 = var14.updateSubscriptionListing;
                        var11 = {};
                        var11['guildId'] = var18;
                        var11['groupListingId'] = var17;
                        var11['listingId'] = var16;
                        var11['data'] = var15;
                        var3 = var13.bind(var14)(var11);
case 177:
                        SaveGenerator(address=775);
case 179:
                        return var3;
case 180:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                        if(var11) { _fun0031_ip = 181; continue _fun0031 }
case 156:
                        var11 = {};
                        var11['guildId'] = var12;
                        var12 = var9;
                        var11['editStateId'] = var12;
                        var7 = function updateListingPeripheralsFromEditState() {
                            var1 = undefined;
                            var4 = _closure1_slot24;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var7 = var7.bind(var6)(var11);
                        SaveGenerator(address=811);
case 182:
                        return var7;
case 183:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                        if(var11) { _fun0031_ip = 184; continue _fun0031 }
case 185:
                        var10 = _closure1_slot23;
                        var9 = var10.bind(var6)(var9);
case 186: // try_end1 // try_end3
                        var10 = _closure2_slot0;
                        var9 = false;
                        var9 = var10.bind(var6)(var9);
                        return var8;
case 184:
                        var9 = _closure2_slot0;
                        var8 = false;
                        var8 = var9.bind(var6)(var8);
                        return var7;
case 181:
                        var7 = _closure2_slot0;
                        var5 = false;
                        var5 = var7.bind(var6)(var5);
                        return var3;
case 187: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=4);
                        var4 = var5;
                        var3 = 'getAnyErrorMessage';
                        var3 = var3 in var5;
                        if(var3) { _fun0031_ip = 188; continue _fun0031 }
case 189:
                        var3 = var4;
                        throw var3;
case 188:
                        var5 = _closure2_slot1;
                        var4 = var5.bind(var6)(var4);
case 190: // try_end4
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var6)(var3);
                        return var6;
case 191: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 150:
                        return var2;
case 149:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var2 = var1.bind(var2)();
        var1 = new Array(0);
        var2 = var5.bind(var6)(var2, var1);
        var1 = {};
        var1['loading'] = var4;
        var1['error'] = var3;
        var1['handleCreateOrUpdateFromEditState'] = var2;
        return var1;
    };
    var3['useCreateOrUpdateListingFromEditState'] = var4;
    var2 = function useEditStateIds(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var7 = arg2;
            var6 = arguments[2];
            var _closure2_slot0 = var7;
            var8 = undefined;
            if(!(var6 === var8)) { _fun0032_ip = 3; continue _fun0032 }
case 119:
            var1 = {};
            var3 = false;
            var1['includeSoftDeleted'] = var3;
            var6 = var1;
case 3:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 17;
            var1 = var5[var1];
            var5 = var4.bind(var8)(var1);
            var4 = var5.useSubscriptionListingsForGroup;
            var1 = arg1;
            var5 = var4.bind(var5)(var1, var6);
            _closure2_slot1 = var5;
            var4 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.editStateIdsForGroup;
                var1 = _closure2_slot0;
                var1 = var2[var1];
                return var1;
            };
            var11 = var4.bind(var8)(var1);
            _closure2_slot2 = var11;
            var4 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.setEditStateIdsForGroup;
                return var1;
            };
            var6 = var4.bind(var8)(var1);
            _closure2_slot3 = var6;
            var4 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.setListing;
                return var1;
            };
            var4 = var4.bind(var8)(var1);
            _closure2_slot4 = var4;
            var1 = {};
            var10 = _closure1_slot6;
            var9 = var10.useMemo;
            var8 = new Array(2);
            var8[0] = var11;
            var8[1] = var5;
            var5 = function() {
                _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var7 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var6 = 0;
                    var8 = var1;
                    var3 = arraySpread(var8, var7, var6);
                    var5 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0033_ip = 36; continue _fun0033 }
case 51:
                    var2 = new Array(0);
                    _fun0033_ip = 192; continue _fun0033;
case 36:
                    var2 = _closure2_slot2;
case 192:
                    var8 = var1;
                    var7 = var2;
                    var6 = var3;
                    var2 = arraySpread(var8, var7, var6);
                    return var1;
                }
            };
            var5 = var9.bind(var10)(var5, var8);
            var1['editStateIds'] = var5;
            var10 = _closure1_slot6;
            var9 = var10.useCallback;
            var8 = new Array(2);
            var8[0] = var7;
            var8[1] = var6;
            var5 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 26;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.v4;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var2 = function(arg1) {
                    _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0034_ip = 82; continue _fun0034 }
case 124:
                        var3 = new Array(0);
case 82:
                        var1 = new Array(1);
                        var4 = 0;
                        var6 = var1;
                        var5 = var3;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    }
                };
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var9.bind(var10)(var5, var8);
            var1['addNewEditStateId'] = var5;
            var9 = _closure1_slot6;
            var8 = var9.useCallback;
            var5 = new Array(3);
            var5[0] = var7;
            var5[1] = var6;
            var5[2] = var4;
            var4 = function(arg1) {
                var3 = arg1;
                var _closure3_slot0 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 26;
                var1 = var5[var1];
                var7 = undefined;
                var4 = var4.bind(var7)(var1);
                var1 = var4.v4;
                var1 = var1.bind(var4)();
                var _closure3_slot1 = var1;
                var6 = _closure2_slot3;
                var5 = _closure2_slot0;
                var4 = function(arg1) {
                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0035_ip = 82; continue _fun0035 }
case 124:
                        var3 = new Array(0);
case 82:
                        var1 = new Array(1);
                        var4 = 0;
                        var6 = var1;
                        var5 = var3;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot1;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    }
                };
                var4 = var6.bind(var7)(var5, var4);
                var4 = var3.listings;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var4 = _closure2_slot4;
                    var3 = _closure3_slot1;
                    var1 = undefined;
                    var2 = function() {
                        var1 = {};
                        var2 = _closure4_slot0;
                        var3 = var2.name;
                        var1['name'] = var3;
                        var3 = var2.description;
                        var1['description'] = var3;
                        var3 = var2.price_tier;
                        var1['priceTier'] = var3;
                        var3 = var2.image;
                        var1['image'] = var3;
                        var3 = var2.additional_perks;
                        var1['intangibleBenefits'] = var3;
                        var5 = var2.channels;
                        var4 = var5.map;
                        var3 = function(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.id;
                            var1['ref_id'] = var3;
                            var3 = _closure1_slot11;
                            var3 = var3.CHANNEL;
                            var1['ref_type'] = var3;
                            var3 = var2.description;
                            var1['description'] = var3;
                            var3 = var2.name;
                            var1['name'] = var3;
                            var2 = var2.emoji_name;
                            var1['emoji_name'] = var2;
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        var1['channelBenefits'] = var3;
                        var3 = {};
                        var4 = undefined;
                        var3['unicodeEmoji'] = var4;
                        var4 = var2.image;
                        var3['icon'] = var4;
                        var1['roleIcon'] = var3;
                        var2 = var2.role_color;
                        var1['roleColor'] = var2;
                        var2 = _closure3_slot0;
                        var2 = var2.category;
                        var1['usedTemplate'] = var2;
                        return var1;
                    };
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var8.bind(var9)(var4, var5);
            var1['addNewEditStateFromTemplate'] = var4;
            var5 = _closure1_slot6;
            var4 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0036_ip = 82; continue _fun0036 }
case 124:
                        var3 = new Array(0);
case 82:
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['removeEditStateId'] = var2;
            return var1;
        }
    };
    var3['useEditStateIds'] = var2;
    return var1;
})();