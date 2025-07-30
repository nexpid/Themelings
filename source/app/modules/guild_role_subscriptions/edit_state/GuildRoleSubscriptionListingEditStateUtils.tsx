// app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var10 = native3;
    var11 = native4;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var11;
    var _closure1_slot3 = var8;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
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
    var _closure1_slot19 = var1;
    var5 = function useListingEditState(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
 0:
                        var5 = arg1;
                        var1 = null;
                        var4 = var1 == var5;
                        var3 = undefined;
                        var2 = undefined;
                        if(var4) { _fun0005_ip = 27; continue _fun0005 }
 16:
                        var4 = _closure2_slot1;
                        var2 = var5[var4];
 27:
                        if(!(var1 == var2)) { _fun0005_ip = 38; continue _fun0005 }
 31:
                        var2 = _closure2_slot2;
 38:
                        var4 = _closure3_slot0;
                        var6 = 'function';
                        var4 = typeof var4;
                        if(!(var6 !== var4)) { _fun0005_ip = 62; continue _fun0005 }
 56:
                        var6 = _closure3_slot0;
                        _fun0005_ip = 71; continue _fun0005;
 62:
                        var1 = _closure3_slot0;
                        var6 = var1.bind(var3)(var2);
 71:
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
 0:
                    var1 = arg1;
                    var3 = var1.listings;
                    var1 = _closure2_slot0;
                    var3 = var3[var1];
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0006_ip = 39; continue _fun0006 }
 31:
                    var2 = _closure2_slot1;
                    var1 = var3[var2];
 39:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var1);
            if(!(var4 !== var1)) { _fun0004_ip = 113; continue _fun0004 }
 110:
            var3 = var1;
 113:
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
 0:
            var4 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var3 = var4.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0007_ip = 87; continue _fun0007 }
 23:
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
 87:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 686; continue _fun0008 }
 15:
                    var11 = var2.guildId;
                    var _closure4_slot0 = var11;
                    var14 = var2.editStateId;
                    var5 = undefined;
                    var _closure4_slot1 = var5;
                    SaveGenerator(address=40);
 38:
                    return var5;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 683; continue _fun0008 }
 49:
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
                    if(!var3) { _fun0008_ip = 216; continue _fun0008 }
 212:
                    var3 = var5 === var17;
 216:
                    if(var3) { _fun0008_ip = 309; continue _fun0008 }
 219:
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
                    if(var18) { _fun0008_ip = 265; continue _fun0008 }
 260:
                    var16 = var17.icon;
 265:
                    var3['icon'] = var16;
                    var18 = var8 == var17;
                    var16 = undefined;
                    if(var18) { _fun0008_ip = 284; continue _fun0008 }
 278:
                    var16 = var17.unicodeEmoji;
 284:
                    var3['unicodeEmoji'] = var16;
                    var3 = var6.bind(var15)(var11, var9, var3);
                    SaveGenerator(address=300);
 298:
                    return var3;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(!var6) { _fun0008_ip = 309; continue _fun0008 }
 306:
                    return var3;
 309:
                    var6 = _closure1_slot8;
                    var3 = var6.getSubscriptionTrial;
                    var6 = var3.bind(var6)(var10);
                    var3 = var8 != var13;
                    if(var3) { _fun0008_ip = 335; continue _fun0008 }
 331:
                    var3 = var8 != var14;
 335:
                    if(var3) { _fun0008_ip = 352; continue _fun0008 }
 338:
                    var6 = var8 != var6;
                    if(!var6) { _fun0008_ip = 349; continue _fun0008 }
 345:
                    var6 = var8 == var14;
 349:
                    var3 = var6;
 352:
                    if(!var3) { _fun0008_ip = 413; continue _fun0008 }
 355:
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
 402:
                    return var3;
 404:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 680; continue _fun0008 }
 413:
                    if(!(var5 !== var12)) { _fun0008_ip = 674; continue _fun0008 }
 420:
                    var8 = _closure1_slot22;
                    var10 = _closure1_slot7;
                    var6 = var10.getGuildEmoji;
                    var6 = var6.bind(var10)(var11);
                    var6 = var8.bind(var5)(var6, var9);
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 23;
                    var8 = var11[var7];
                    var15 = var9.bind(var5)(var8);
                    var14 = var15.difference;
                    var13 = new Array(0);
                    var21 = var13;
                    var20 = var12;
                    var19 = 0;
                    var8 = arraySpread(var21, var20, var19);
                    var8 = new Array(0);
                    var21 = var8;
                    var20 = var6;
                    var16 = arraySpread(var21, var20, var19);
                    var8 = var14.bind(var15)(var13, var8);
                    var7 = var11[var7];
                    var11 = var9.bind(var5)(var7);
                    var9 = var11.difference;
                    var7 = new Array(0);
                    var21 = var7;
                    var20 = var6;
                    var6 = arraySpread(var21, var20, var19);
                    var6 = new Array(0);
                    var21 = var6;
                    var20 = var12;
                    var12 = arraySpread(var21, var20, var19);
                    var9 = var9.bind(var11)(var7, var6);
                    var7 = var8.map;
                    var6 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = var3.getCustomEmojiById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.map;
                    var6 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = arg1;
                            var1 = null;
                            if(!(var1 == var4)) { _fun0009_ip = 13; continue _fun0009 }
 9:
                            var1 = undefined;
                            return var1;
 13:
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
                    var20 = var7.bind(var8)(var6);
                    var7 = var9.map;
                    var6 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = var3.getCustomEmojiById;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.map;
                    var4 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var6 = arg1;
                            var1 = null;
                            if(!(var1 == var6)) { _fun0010_ip = 13; continue _fun0010 }
 9:
                            var1 = undefined;
                            return var1;
 13:
                            var3 = var6.roles;
                            var2 = var3.filter;
                            var1 = function(arg1) {
                                var2 = _closure4_slot1;
                                var1 = arg1;
                                var1 = var1 !== var2;
                                return var1;
                            };
                            var5 = var2.bind(var3)(var1);
                            var2 = var5.length;
                            var1 = 0;
                            if(!(!(var2 > var1))) { _fun0010_ip = 100; continue _fun0010 }
 49:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.deleteEmoji;
                            var2 = _closure4_slot0;
                            var1 = var6.id;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun0010_ip = 164; continue _fun0010;
 100:
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
 164:
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
                    SaveGenerator(address=668);
 666:
                    return var4;
 668:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 677; continue _fun0008 }
 674:
                    return var5;
 677:
                    return var4;
 680:
                    return var3;
 683:
                    return var2;
 686:
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
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 566; continue _fun0011 }
 13:
                    var18 = var2.guildId;
                    var20 = var2.editStateId;
                    var10 = var2.groupListingId;
                    var8 = var2.onBeforeDispatchNewListing;
                    var7 = undefined;
                    SaveGenerator(address=42);
 40:
                    return var7;
 42:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 563; continue _fun0011 }
 51:
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
                    if(!(var19 == var10)) { _fun0011_ip = 322; continue _fun0011 }
 270:
                    var4 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var3 = 22;
                    var3 = var12[var3];
                    var12 = var4.bind(var7)(var3);
                    var4 = var12.createSubscriptionGroupListing;
                    var3 = {};
                    var3 = var4.bind(var12)(var18, var3);
                    SaveGenerator(address=308);
 306:
                    return var3;
 308:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 560; continue _fun0011 }
 317:
                    var10 = var3.id;
 322:
                    var4 = var19 != var6;
                    if(!var4) { _fun0011_ip = 340; continue _fun0011 }
 329:
                    var21 = var6.length;
                    var12 = 0;
                    var4 = var21 > var12;
 340:
                    if(!var4) { _fun0011_ip = 388; continue _fun0011 }
 343:
                    var12 = _closure1_slot0;
                    var21 = _closure1_slot3;
                    var4 = 25;
                    var4 = var21[var4];
                    var12 = var12.bind(var7)(var4);
                    var4 = var12.createChannelsFromTemplateTierBenefits;
                    var4 = var4.bind(var12)(var18, var6);
                    SaveGenerator(address=379);
 377:
                    return var4;
 379:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(var12) { _fun0011_ip = 557; continue _fun0011 }
 388:
                    var21 = var6;
                    if(!(var19 == var21)) { _fun0011_ip = 399; continue _fun0011 }
 395:
                    var21 = new Array(0);
 399:
                    var12 = new Array(0);
                    var23 = 0;
                    var25 = var12;
                    var24 = var21;
                    var6 = arraySpread(var25, var24, var23);
                    if(!(var19 == var9)) { _fun0011_ip = 423; continue _fun0011 }
 419:
                    var9 = new Array(0);
 423:
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
 557:
                    return var4;
 560:
                    return var3;
 563:
                    return var2;
 566:
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
 0:
                var3 = arg1;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 19; continue _fun0012 }
 14:
                var2 = var3.name;
 19:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0012_ip = 33; continue _fun0012 }
 30:
                var1 = var2;
 33:
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
 0:
                var2 = arg1;
                var3 = null;
                var5 = var3 == var2;
                var1 = undefined;
                if(var5) { _fun0013_ip = 41; continue _fun0013 }
 14:
                var5 = var2.subscription_plans;
                var2 = 0;
                var2 = var5[var2];
                var3 = var3 == var2;
                var1 = undefined;
                if(var3) { _fun0013_ip = 41; continue _fun0013 }
 35:
                var1 = var2.price;
 41:
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
 0:
                var3 = arg1;
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0014_ip = 19; continue _fun0014 }
 14:
                var2 = var3.description;
 19:
                var3 = var1 != var2;
                var1 = '';
                if(!var3) { _fun0014_ip = 33; continue _fun0014 }
 30:
                var1 = var2;
 33:
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
 0:
                var1 = arg1;
                var3 = null;
                var5 = var3 == var1;
                var4 = undefined;
                var2 = undefined;
                if(var5) { _fun0015_ip = 22; continue _fun0015 }
 16:
                var2 = var1.image_asset;
 22:
                if(!(var3 == var2)) { _fun0015_ip = 28; continue _fun0015 }
 26:
                return var4;
 28:
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
 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0016_ip = 20; continue _fun0016 }
 14:
                var1 = var2.application_id;
 20:
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
 0:
                var1 = {};
                var2 = _closure2_slot0;
                var4 = null;
                var3 = var4 == var2;
                var6 = undefined;
                if(var3) { _fun0017_ip = 29; continue _fun0017 }
 20:
                var3 = _closure2_slot0;
                var6 = var3.icon;
 29:
                var7 = var4 != var6;
                var3 = undefined;
                if(!var7) { _fun0017_ip = 41; continue _fun0017 }
 38:
                var3 = var6;
 41:
                var1['icon'] = var3;
                var3 = _closure2_slot0;
                var6 = var4 == var3;
                var3 = undefined;
                if(var6) { _fun0017_ip = 68; continue _fun0017 }
 58:
                var5 = _closure2_slot0;
                var3 = var5.unicodeEmoji;
 68:
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0017_ip = 80; continue _fun0017 }
 77:
                var2 = var3;
 80:
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
 0:
                var1 = arg1;
                var2 = var1.listings;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0018_ip = 37; continue _fun0018 }
 31:
                var1 = var2.roleColor;
 37:
                return var1;
            }
        };
        var5 = var4.bind(var6)(var3);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot10;
        var3 = function(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = arg1;
                var2 = var1.listings;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0019_ip = 37; continue _fun0019 }
 31:
                var1 = var2.roleIcon;
 37:
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
 0:
                var1 = {};
                var3 = _closure2_slot1;
                var6 = null;
                if(!(var6 == var3)) { _fun0020_ip = 48; continue _fun0020 }
 15:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.DEFAULT_PREVIEW_ROLE;
                _fun0020_ip = 52; continue _fun0020;
 48:
                var3 = _closure2_slot1;
 52:
                var10 = var1;
                var9 = var3;
                var3 = copyDataProperties(var10, var9);
                var3 = _closure2_slot3;
                var5 = undefined;
                if(!(var5 !== var3)) { _fun0020_ip = 130; continue _fun0020 }
 72:
                var3 = _closure2_slot3;
                var7 = var3.icon;
                var8 = var6 != var7;
                var3 = '';
                var4 = var3;
                if(!var8) { _fun0020_ip = 98; continue _fun0020 }
 95:
                var4 = var7;
 98:
                var1['icon'] = var4;
                var4 = _closure2_slot3;
                var4 = var4.unicodeEmoji;
                var6 = var6 != var4;
                if(!var6) { _fun0020_ip = 124; continue _fun0020 }
 121:
                var3 = var4;
 124:
                var1['unicodeEmoji'] = var3;
 130:
                var3 = _closure2_slot2;
                if(!(var5 !== var3)) { _fun0020_ip = 188; continue _fun0020 }
 138:
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
 188:
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
 0:
                var1 = _closure2_slot0;
                var2 = null;
                var4 = var2 == var1;
                var1 = undefined;
                if(var4) { _fun0021_ip = 27; continue _fun0021 }
 18:
                var3 = _closure2_slot0;
                var1 = var3.color;
 27:
                if(!(var2 == var1)) { _fun0021_ip = 38; continue _fun0021 }
 31:
                var1 = _closure1_slot13;
 38:
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
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0022_ip = 76; continue _fun0022 }
 13:
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
                if(var1) { _fun0022_ip = 68; continue _fun0022 }
 60:
                var1 = var2.SOME_CHANNELS_ACCESS;
                _fun0022_ip = 74; continue _fun0022;
 68:
                var1 = var2.ALL_CHANNELS_ACCESS;
 74:
                _fun0022_ip = 89; continue _fun0022;
 76:
                var2 = _closure1_slot9;
                var1 = var2.SOME_CHANNELS_ACCESS;
 89:
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
 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0023_ip = 64; continue _fun0023 }
 9:
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
                _fun0023_ip = 71; continue _fun0023;
 64:
                var1 = _closure1_slot15;
 71:
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
 0:
                var1 = arg1;
                var2 = null;
                if(!(var2 != var1)) { _fun0024_ip = 64; continue _fun0024 }
 9:
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
                _fun0024_ip = 71; continue _fun0024;
 64:
                var1 = _closure1_slot16;
 71:
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
 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0025_ip = 43; continue _fun0025 }
 13:
                var4 = _closure1_slot22;
                var3 = _closure2_slot2;
                var1 = _closure2_slot1;
                var2 = var1.id;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                _fun0025_ip = 50; continue _fun0025;
 43:
                var1 = _closure1_slot17;
 50:
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
 0:
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
            if(var8) { _fun0026_ip = 74; continue _fun0026 }
 66:
            var7 = var1.active_trial;
 74:
            var8 = var3 != var7;
            var1 = null;
            if(!var8) { _fun0026_ip = 86; continue _fun0026 }
 83:
            var1 = var7;
 86:
            var1 = var6.bind(var4)(var1);
            var1 = var1.selectedOption;
            var2 = _closure1_slot20;
            var6 = var3 != var1;
            var3 = null;
            if(!var6) { _fun0026_ip = 113; continue _fun0026 }
 110:
            var3 = var1;
 113:
            var1 = 'trialInterval';
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
        }
    };
    var3['useTrialInterval'] = var5;
    var5 = function useTrialLimit(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
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
            if(var7) { _fun0027_ip = 60; continue _fun0027 }
 54:
            var1 = var6.max_num_active_trial_users;
 60:
            var6 = var2 != var1;
            var2 = null;
            if(!var6) { _fun0027_ip = 72; continue _fun0027 }
 69:
            var2 = var1;
 72:
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
 0:
                var5 = arg1;
                var2 = _closure1_slot18;
                var1 = _closure2_slot0;
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0028_ip = 76; continue _fun0028 }
 36:
                var6 = var2.value;
                var1 = var5.listings;
                var1 = var1[var6];
                if(!(var4 === var1)) { _fun0028_ip = 72; continue _fun0028 }
 55:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(var1) { _fun0028_ip = 76; continue _fun0028 }
 70:
                _fun0028_ip = 36; continue _fun0028;
 72:
                var1 = true;
                return var1;
 76:
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
 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0029_ip = 26; continue _fun0029 }
 14:
                var3 = var2.subscription_plans;
                var2 = 0;
                var1 = var3[var2];
 26:
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
 0:
                var1 = {};
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 == var3)) { _fun0030_ip = 40; continue _fun0030 }
 15:
                var3 = _closure2_slot0;
                var3 = var2 == var3;
                var5 = undefined;
                if(var3) { _fun0030_ip = 38; continue _fun0030 }
 28:
                var3 = _closure2_slot0;
                var5 = var3.price;
 38:
                _fun0030_ip = 44; continue _fun0030;
 40:
                var5 = _closure2_slot1;
 44:
                var6 = var2 != var5;
                var3 = 0;
                if(!var6) { _fun0030_ip = 56; continue _fun0030 }
 53:
                var3 = var5;
 56:
                var1['price'] = var3;
                var3 = _closure2_slot0;
                var6 = var2 == var3;
                var5 = undefined;
                if(var6) { _fun0030_ip = 84; continue _fun0030 }
 74:
                var6 = _closure2_slot0;
                var5 = var6.currency;
 84:
                if(!(var2 == var5)) { _fun0030_ip = 101; continue _fun0030 }
 88:
                var6 = _closure1_slot12;
                var5 = var6.USD;
 101:
                var1['currency'] = var5;
                var5 = _closure2_slot0;
                var6 = var2 == var5;
                var5 = undefined;
                if(var6) { _fun0030_ip = 129; continue _fun0030 }
 119:
                var6 = _closure2_slot0;
                var5 = var6.interval;
 129:
                if(!(var2 == var5)) { _fun0030_ip = 146; continue _fun0030 }
 133:
                var6 = _closure1_slot14;
                var5 = var6.MONTH;
 146:
                var1['interval'] = var5;
                var5 = _closure2_slot0;
                var5 = var2 == var5;
                var6 = undefined;
                if(var5) { _fun0030_ip = 174; continue _fun0030 }
 164:
                var5 = _closure2_slot0;
                var6 = var5.interval_count;
 174:
                var7 = var2 != var6;
                var5 = 1;
                if(!var7) { _fun0030_ip = 187; continue _fun0030 }
 184:
                var5 = var6;
 187:
                var1['interval_count'] = var5;
                var5 = _closure2_slot0;
                var5 = var2 == var5;
                var3 = undefined;
                if(var5) { _fun0030_ip = 214; continue _fun0030 }
 205:
                var4 = _closure2_slot0;
                var3 = var4.id;
 214:
                var4 = var2 != var3;
                var2 = '';
                if(!var4) { _fun0030_ip = 228; continue _fun0030 }
 225:
                var2 = var3;
 228:
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
 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(var5) { _fun0031_ip = 936; continue _fun0031 }
 15:
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
 54:
                        return var6;
 56:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0031_ip = 933; continue _fun0031 }
 65:
                        var17 = var15;
                        var9 = var17;
                        var8 = _closure1_slot8;
                        var5 = var8.getSubscriptionListing;
                        var16 = var5.bind(var8)(var17);
 89: // try_start_0 // try_start_2
                        var17 = _closure2_slot0;
                        var8 = true;
                        var17 = var17.bind(var6)(var8);
                        var17 = _closure2_slot1;
                        var17 = var17.bind(var6)(var6);
                        var20 = null;
                        if(!(var20 == var16)) { _fun0031_ip = 231; continue _fun0031 }
 118:
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
 162:
                        return var11;
 164:
                        ResumeGenerator(result_out_reg=10, return_bool_out_reg=15);
                        if(var16) { _fun0031_ip = 217; continue _fun0031 }
 170:
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
                        if(!(var20 != var15)) { _fun0031_ip = 781; continue _fun0031 }
 207:
                        var13 = var14.bind(var6)(var13);
                        _fun0031_ip = 781; continue _fun0031;
 217: // try_end0 // try_end2
                        var14 = _closure2_slot0;
                        var13 = false;
                        var13 = var14.bind(var6)(var13);
                        return var11;
 231: // try_start_1 // try_start_3
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
                        if(!(var23 !== var24)) { _fun0031_ip = 455; continue _fun0031 }
 449:
                        var15['name'] = var23;
 455:
                        var23 = var3.description;
                        if(!(var21 !== var23)) { _fun0031_ip = 470; continue _fun0031 }
 464:
                        var15['description'] = var21;
 470:
                        var23 = var3.subscription_plans;
                        var21 = 0;
                        var24 = var23[var21];
                        var25 = var20 == var24;
                        var23 = undefined;
                        if(var25) { _fun0031_ip = 497; continue _fun0031 }
 491:
                        var23 = var24.price;
 497:
                        if(!(var22 !== var23)) { _fun0031_ip = 507; continue _fun0031 }
 501:
                        var15['priceTier'] = var22;
 507:
                        if(!(var20 != var13)) { _fun0031_ip = 517; continue _fun0031 }
 511:
                        var15['image'] = var13;
 517:
                        if(!(var20 != var14)) { _fun0031_ip = 541; continue _fun0031 }
 521:
                        var13 = _closure1_slot9;
                        var13 = var13.ALL_CHANNELS_ACCESS;
                        var13 = var14 === var13;
                        var15['can_access_all_channels'] = var13;
 541:
                        if(!(var20 == var11)) { _fun0031_ip = 552; continue _fun0031 }
 545:
                        if(!(var20 != var19)) { _fun0031_ip = 686; continue _fun0031 }
 552:
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
                        if(!(var20 != var11)) { _fun0031_ip = 644; continue _fun0031 }
 641:
                        var14 = var11;
 644:
                        var11 = new Array(0);
                        var28 = var11;
                        var27 = var14;
                        var26 = 0;
                        var14 = arraySpread(var28, var27, var26);
                        if(!(var20 != var19)) { _fun0031_ip = 667; continue _fun0031 }
 664:
                        var13 = var19;
 667:
                        var28 = var11;
                        var27 = var13;
                        var26 = var14;
                        var13 = arraySpread(var28, var27, var26);
                        var15['benefits'] = var11;
 686:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var11 = 23;
                        var11 = var14[var11];
                        var13 = var13.bind(var6)(var11);
                        var11 = var13.isEmpty;
                        var11 = var11.bind(var13)(var15);
                        if(var11) { _fun0031_ip = 771; continue _fun0031 }
 720:
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
 771:
                        SaveGenerator(address=775);
 773:
                        return var3;
 775:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                        if(var11) { _fun0031_ip = 854; continue _fun0031 }
 781:
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
 809:
                        return var7;
 811:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=10);
                        if(var11) { _fun0031_ip = 840; continue _fun0031 }
 817:
                        var10 = _closure1_slot23;
                        var9 = var10.bind(var6)(var9);
 826: // try_end1 // try_end3
                        var10 = _closure2_slot0;
                        var9 = false;
                        var9 = var10.bind(var6)(var9);
                        return var8;
 840:
                        var9 = _closure2_slot0;
                        var8 = false;
                        var8 = var9.bind(var6)(var8);
                        return var7;
 854:
                        var7 = _closure2_slot0;
                        var5 = false;
                        var5 = var7.bind(var6)(var5);
                        return var3;
 868: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=4);
                        var4 = var5;
                        var3 = 'getAnyErrorMessage';
                        var3 = var3 in var5;
                        if(var3) { _fun0031_ip = 889; continue _fun0031 }
 884:
                        var3 = var4;
                        throw var3;
 889:
                        var5 = _closure2_slot1;
                        var4 = var5.bind(var6)(var4);
 901: // try_end4
                        var4 = _closure2_slot0;
                        var3 = false;
                        var3 = var4.bind(var6)(var3);
                        return var6;
 915: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot0;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
 933:
                        return var2;
 936:
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
 0:
            var7 = arg2;
            var6 = arguments[2];
            var _closure2_slot0 = var7;
            var8 = undefined;
            if(!(var6 === var8)) { _fun0032_ip = 30; continue _fun0032 }
 18:
            var1 = {};
            var3 = false;
            var1['includeSoftDeleted'] = var3;
            var6 = var1;
 30:
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
 0:
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
                    if(!(var2 == var5)) { _fun0033_ip = 55; continue _fun0033 }
 49:
                    var2 = new Array(0);
                    _fun0033_ip = 59; continue _fun0033;
 55:
                    var2 = _closure2_slot2;
 59:
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
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0034_ip = 13; continue _fun0034 }
 9:
                        var3 = new Array(0);
 13:
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
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0035_ip = 13; continue _fun0035 }
 9:
                        var3 = new Array(0);
 13:
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
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0036_ip = 13; continue _fun0036 }
 9:
                        var3 = new Array(0);
 13:
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