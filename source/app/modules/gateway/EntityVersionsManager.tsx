// app/modules/gateway/EntityVersionsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function handleDeletedEntityIds(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot11;
            var5 = var6.getGuild;
            var1 = var4.guild_id;
            var5 = var5.bind(var6)(var1);
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var11 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var11 = var5.name;
case 6:
            var6 = _closure1_slot13;
            var5 = var6.fileOnly;
            var15 = var4.guild_id;
            var4 = global;
            var4 = var4.HermesInternal;
            var9 = var4.concat;
            var16 = 'received deleted guild entities (id: ';
            var14 = ', name: ';
            var12 = ')';
            var13 = var11;
            var4 = var16[var9](var15, var14, var13, var12, var11);
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 14;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.Emitter;
            var3 = var4.batched;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var3 = var3.channels;
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var3 = _closure2_slot0;
                    var7 = var3.guild_id;
                    var5 = global;
                    var6 = var5.Set;
                    var9 = var3.channels;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var10 = var5;
                    var3 = new var10[var6](var9, var8);
                    var6 = var3 instanceof Object ? var3 : var5;
                    var5 = function syncChannels(arg1, arg2) {
                        var9 = arg1;
                        var3 = arg2;
                        var _closure4_slot0 = var9;
                        var _closure4_slot1 = var3;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 17;
                        var4 = var4[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var4);
                        var6 = var7.keys;
                        var8 = _closure1_slot9;
                        var4 = var8.getMutableBasicGuildChannelsForGuild;
                        var4 = var4.bind(var8)(var9);
                        var4 = var6.bind(var7)(var4);
                        var7 = _closure1_slot13;
                        var6 = var7.fileOnly;
                        var5 = {};
                        var5['channelIdsInMemory'] = var4;
                        var5['channelIdsFromServer'] = var3;
                        var3 = 'syncChannels';
                        var3 = var6.bind(var7)(var3, var5);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var6 = arg1;
                                var2 = _closure4_slot1;
                                var1 = var2.has;
                                var1 = var1.bind(var2)(var6);
                                if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 12;
                                var1 = var3[var1];
                                var5 = undefined;
                                var3 = var2.bind(var5)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'CHANNEL_DELETE';
                                var1['type'] = var4;
                                var4 = {};
                                var7 = _closure4_slot0;
                                var4['guild_id'] = var7;
                                var4['id'] = var6;
                                var4['parent_id'] = var5;
                                var1['channel'] = var4;
                                var1 = var2.bind(var3)(var1);
case 10:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = undefined;
                    var3 = var5.bind(var3)(var7, var6);
case 8:
                    var3 = _closure2_slot0;
                    var3 = var3.roles;
                    if(!(var4 != var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot0;
                    var7 = var3.guild_id;
                    var5 = global;
                    var6 = var5.Set;
                    var9 = var3.roles;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var10 = var5;
                    var3 = new var10[var6](var9, var8);
                    var6 = var3 instanceof Object ? var3 : var5;
                    var5 = function syncRoles(arg1, arg2) {
                        var7 = arg1;
                        var _closure4_slot0 = var7;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 17;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.keys;
                        var6 = _closure1_slot10;
                        var3 = var6.getUnsafeMutableRoles;
                        var3 = var3.bind(var6)(var7);
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var4 = arg1;
                                var2 = _closure4_slot1;
                                var1 = var2.has;
                                var1 = var1.bind(var2)(var4);
                                if(var1) { _fun0005_ip = 14; continue _fun0005 }
case 11:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 12;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.dispatch;
                                var1 = {};
                                var6 = 'GUILD_ROLE_DELETE';
                                var1['type'] = var6;
                                var5 = _closure4_slot0;
                                var1['guildId'] = var5;
                                var1['roleId'] = var4;
                                var1 = var2.bind(var3)(var1);
case 14:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3 = undefined;
                    var3 = var5.bind(var3)(var7, var6);
case 12:
                    var3 = _closure2_slot0;
                    var3 = var3.emojis;
                    if(!(var4 != var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot0;
                    var7 = var3.guild_id;
                    var5 = global;
                    var6 = var5.Set;
                    var9 = var3.emojis;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {constructor: {value: var6}});
                    var10 = var5;
                    var3 = new var10[var6](var9, var8);
                    var6 = var3 instanceof Object ? var3 : var5;
                    var5 = function syncEmojis(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var1 = arg2;
                            var _closure4_slot0 = var1;
                            var4 = _closure1_slot7;
                            var2 = var4.getGuildEmoji;
                            var2 = var2.bind(var4)(var5);
                            var4 = var2.filter;
                            var3 = function(arg1) {
                                var3 = _closure4_slot0;
                                var2 = var3.has;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var4 = var4.bind(var2)(var3);
                            var3 = var2.length;
                            var2 = var4.length;
                            if(!(var3 !== var2)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var6 = 'GUILD_EMOJIS_UPDATE';
                            var1['type'] = var6;
                            var1['guildId'] = var5;
                            var1['emojis'] = var4;
                            var1 = var2.bind(var3)(var1);
case 17:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = undefined;
                    var3 = var5.bind(var3)(var7, var6);
case 15:
                    var3 = _closure2_slot0;
                    var3 = var3.stickers;
                    if(!(var4 != var3)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure2_slot0;
                    var4 = var2.guild_id;
                    var3 = global;
                    var5 = var3.Set;
                    var9 = var2.stickers;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var10 = var3;
                    var2 = new var10[var5](var9, var8);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = function syncStickers(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var5 = arg1;
                            var1 = arg2;
                            var _closure4_slot0 = var1;
                            var4 = _closure1_slot8;
                            var2 = var4.getStickersByGuildId;
                            var2 = var2.bind(var4)(var5);
                            var4 = null;
                            if(!(var4 == var2)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                            var2 = new Array(0);
case 21:
                            var4 = var2.filter;
                            var3 = function(arg1) {
                                var3 = _closure4_slot0;
                                var2 = var3.has;
                                var1 = arg1;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var4 = var4.bind(var2)(var3);
                            var3 = var2.length;
                            var2 = var4.length;
                            if(!(var3 !== var2)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {};
                            var6 = 'GUILD_STICKERS_UPDATE';
                            var1['type'] = var6;
                            var1['guildId'] = var5;
                            var1['stickers'] = var4;
                            var1 = var2.bind(var3)(var1);
case 23:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function handleConnectionOpen() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getAll;
        var4 = var2.bind(var3)();
        var3 = var4.then;
        var2 = function(arg1) {
            var3 = arg1;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot18;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function handleGuildCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var2 = var1.unableToSyncDeletes;
            if(!var2) { _fun0008_ip = 22; continue _fun0008 }
case 25:
            var3 = _closure1_slot18;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function scheduleGuild(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var5 = var1.Math;
        var4 = var5.ceil;
        var6 = var1.Math;
        var3 = var6.random;
        var6 = var3.bind(var6)();
        var3 = 2000;
        var3 = var3 * var6;
        var4 = var4.bind(var5)(var3);
        var3 = var1.setTimeout;
        var1 = undefined;
        var2 = function() {
            var3 = _closure2_slot0;
            var2 = function computeHashAndFetchDeletedIds(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var8 = arg1;
                    var3 = _closure1_slot11;
                    var1 = var3.getGuild;
                    var3 = var1.bind(var3)(var8);
                    var9 = null;
                    var4 = var9 == var3;
                    var1 = undefined;
                    var13 = undefined;
                    if(var4) { _fun0009_ip = 21; continue _fun0009 }
case 26:
                    var13 = var3.name;
case 21:
                    var6 = _closure1_slot13;
                    var5 = var6.fileOnly;
                    var3 = global;
                    var4 = var3.HermesInternal;
                    var12 = var4.concat;
                    var19 = 'requesting deleted guild entities (id: ';
                    var17 = ', name: ';
                    var15 = ')';
                    var18 = var8;
                    var16 = var13;
                    var4 = var19[var12](var18, var17, var16, var15, var14);
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot19;
                    var6 = var3.Object;
                    var5 = var6.keys;
                    var7 = _closure1_slot9;
                    var3 = var7.getMutableBasicGuildChannelsForGuild;
                    var3 = var3.bind(var7)(var8);
                    var3 = var5.bind(var6)(var3);
                    var7 = var4.bind(var1)(var3);
                    var5 = _closure1_slot10;
                    var3 = var5.getSortedRoles;
                    var6 = var3.bind(var5)(var8);
                    var5 = var6.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3);
                    var6 = var4.bind(var1)(var3);
                    var5 = _closure1_slot7;
                    var3 = var5.getGuildEmoji;
                    var11 = var3.bind(var5)(var8);
                    var5 = var11.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var5.bind(var11)(var3);
                    var5 = var4.bind(var1)(var3);
                    var11 = _closure1_slot8;
                    var3 = var11.getStickersByGuildId;
                    var12 = var3.bind(var11)(var8);
                    var11 = var9 == var12;
                    var3 = undefined;
                    if(var11) { _fun0009_ip = 27; continue _fun0009 }
case 28:
                    var11 = var12.map;
                    var10 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var3 = var11.bind(var12)(var10);
case 27:
                    if(!(var9 == var3)) { _fun0009_ip = 29; continue _fun0009 }
case 30:
                    var3 = new Array(0);
case 29:
                    var14 = var4.bind(var1)(var3);
                    var3 = _closure1_slot12;
                    var2 = var3.getSocket;
                    var3 = var2.bind(var3)();
                    var2 = var3.getDeletedEntityIdsNotMatchingHash;
                    var19 = var3;
                    var18 = var8;
                    var17 = var7;
                    var16 = var6;
                    var15 = var5;
                    var2 = var19[var2](var18, var17, var16, var15, var14, var13);
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function computeHash(arg1) {
        var4 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 16;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.v3;
        var1 = var4.sort;
        var5 = var1.bind(var4)();
        var4 = var5.join;
        var1 = ',';
        var1 = var4.bind(var5)(var1);
        var2 = var2.bind(var3)(var1);
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var5[var4];
    var8 = var6.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var11 = 'EntityVersionsManager';
    var12 = var7;
    var4 = new var12[var8](var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot13 = var4;
    var4 = 13;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function EntityVersionsManager(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot2;
                var2 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0010_ip = 31; continue _fun0010 }
case 24:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0010_ip = 32; continue _fun0010;
case 31:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 32:
                var1 = var2.bind(var4)(var5, var1);
                var2 = {};
                var4 = _closure1_slot17;
                var2['GUILD_CREATE'] = var4;
                var3 = _closure1_slot15;
                var2['DELETED_ENTITY_IDS'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = _closure1_slot16;
            var2 = 'CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.unsubscribe;
            var3 = _closure1_slot16;
            var2 = 'CONNECTION_OPEN';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/EntityVersionsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();