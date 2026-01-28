// app/modules/stickers/GuildStickersStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 39:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function parseServerGuildSticker(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.tags;
        var1['tags'] = var3;
        var3 = var2.type;
        var1['type'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.format_type;
        var1['format_type'] = var3;
        var3 = var2.guild_id;
        var1['guild_id'] = var3;
        var3 = var2.available;
        var1['available'] = var3;
        var3 = var2.version;
        var1['version'] = var3;
        var2 = var2.user_id;
        var1['user_id'] = var2;
        var3 = _closure1_slot9;
        var2 = 'GuildSticker';
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function parseServerGuildStickers(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = {};
            var3 = _closure1_slot12;
            var5 = undefined;
            var2 = arg1;
            var4 = var3.bind(var5)(var2);
            var3 = var4.bind(var5)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var8 = var3.value;
            var7 = var8.id;
            var2 = _closure1_slot14;
            var2 = var2.bind(var5)(var8);
            var1[var7] = var2;
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 40:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function deriveStickerMetadata(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg2;
            var1 = new Array(0);
            var _closure2_slot0 = var1;
            var7 = var3.tags;
            var4 = {};
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 9;
            var5 = var5[var9];
            var8 = undefined;
            var5 = var10.bind(var8)(var5);
            var5 = var5.StickerMetadataTypes;
            var5 = var5.STICKER_NAME;
            var4['type'] = var5;
            var5 = var3.name;
            var3 = var5.trim;
            var5 = var3.bind(var5)();
            var3 = var5.toLocaleLowerCase;
            var3 = var3.bind(var5)();
            var4['value'] = var3;
            var3 = var1.push;
            var3 = var3.bind(var1)(var4);
            var3 = null;
            if(!(var3 != var7)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var5 = {};
            var10 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var10.bind(var8)(var4);
            var4 = var4.StickerMetadataTypes;
            var4 = var4.TAG;
            var5['type'] = var4;
            var4 = var7.trim;
            var10 = var4.bind(var7)();
            var4 = var10.toLocaleLowerCase;
            var4 = var4.bind(var10)();
            var5['value'] = var4;
            var4 = var1.push;
            var4 = var4.bind(var1)(var5);
            var10 = _closure1_slot10;
            var5 = var10.getGuild;
            var4 = arg1;
            var4 = var5.bind(var10)(var4);
            if(!(var3 != var4)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var5 = var4.name;
            var4 = var5.trim;
            var5 = var4.bind(var5)();
            var4 = var5.toLocaleLowerCase;
            var10 = var4.bind(var5)();
            var4 = var3 != var10;
            if(!var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var5 = '';
            var4 = var5 !== var10;
case 46:
            if(!var4) { _fun0006_ip = 44; continue _fun0006 }
case 48:
            var5 = var1.push;
            var4 = {};
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var9];
            var11 = var12.bind(var8)(var11);
            var11 = var11.StickerMetadataTypes;
            var11 = var11.GUILD_NAME;
            var4['type'] = var11;
            var4['value'] = var10;
            var4 = var5.bind(var1)(var4);
case 44:
            var5 = _closure1_slot1;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var5 = var5.bind(var8)(var4);
            var4 = var5.getByName;
            var4 = var4.bind(var5)(var7);
            if(!(var3 != var4)) { _fun0006_ip = 42; continue _fun0006 }
case 49:
            var5 = var1.push;
            var3 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var7.bind(var8)(var6);
            var6 = var6.StickerMetadataTypes;
            var6 = var6.CORRELATED_EMOJI;
            var3['type'] = var6;
            var6 = var4.surrogates;
            var3['value'] = var6;
            var3 = var5.bind(var1)(var3);
            var3 = var4.forEachDiversity;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.push;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.StickerMetadataTypes;
                var4 = var4.CORRELATED_EMOJI;
                var1['type'] = var4;
                var4 = arg1;
                var4 = var4.surrogates;
                var1['value'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
case 42:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.TypeTag;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.LibdiscoreStore;
    var2 = 8;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = function(arg1) {
        var4 = function GuildStickersStore(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 52; continue _fun0007;
case 50:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 52:
                var1 = var3.bind(var4)(var5, var1);
                var4 = var1.addKKVDatabase;
                var3 = 'guildStickers';
                var3 = var4.bind(var1)(var3);
                var1['database'] = var3;
                var5 = var1.database;
                var4 = var5.addSecondaryKVIndex;
                var3 = 'id';
                var3 = var4.bind(var5)(var3);
                var1['stickerByIdIndex'] = var3;
                var5 = var1.database;
                var4 = var5.memoized;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var8 = arg1;
                        var7 = global;
                        var1 = var7.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var16 = var2;
                        var1 = new var16[var1](var15);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var5 = var8;
                        for(var2 in var5)
case 53:
                        {
case 54:
                            var11 = var2;
                            var10 = var1.set;
                            var13 = var7.Object;
                            var12 = var13.values;
                            var9 = var8[var11];
                            var9 = var9.root;
                            var9 = var12.bind(var13)(var9);
                            var9 = var10.bind(var1)(var11, var9);
                            _fun0008_ip = 53; continue _fun0008;
                        }
case 55:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1['getAllGuildStickers'] = var3;
                var5 = var1.database;
                var4 = var5.memoized;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var17 = arg1;
                        var16 = global;
                        var1 = var16.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var23 = var2;
                        var1 = new var23[var1](var22);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var14 = var17;
                        var10 = 0;
                        var8 = undefined;
                        var7 = 2;
                        var6 = 1;
                        for(var11 in var14)
case 39:
                        {
case 56:
                            var5 = var11;
                            var4 = var16.Object;
                            var3 = var4.entries;
                            var2 = var17[var5];
                            var2 = var2.root;
                            var4 = var3.bind(var4)(var2);
                            var2 = var4.length;
                            var2 = var10 < var2;
                            var3 = 0;
                            if(!var2) { _fun0009_ip = 39; continue _fun0009 }
case 57:
                            var18 = var4[var3];
                            var2 = _closure1_slot3;
                            var2 = var2.bind(var8)(var18, var7);
                            var19 = var2[var10];
                            var20 = var2[var6];
                            var18 = var1.set;
                            var2 = _closure1_slot16;
                            var2 = var2.bind(var8)(var5, var20);
                            var2 = var18.bind(var1)(var19, var2);
                            var3 = var3 + 1;
                            var2 = var4.length;
                            if(var3 < var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                            _fun0009_ip = 39; continue _fun0009;
                        }
case 59:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var1['getStickerMetadataMap'] = var3;
                var4 = var1.database;
                var3 = var4.memoizedPartition;
                var2 = function(arg1, arg2) {
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['getStickersByGuildId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'getStickerById';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var3 = var1.stickerByIdIndex;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if(!var3) { _fun0010_ip = 60; continue _fun0010 }
case 37:
                var1 = var2;
case 60:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'stateWrapper';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var1 = var1.database;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildStickersStore';
    var7['displayName'] = var2;
    var2 = {};
    var8 = function LOGOUT(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function BACKGROUND_SYNC(arg1, arg2) {
        var2 = arg2;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['BACKGROUND_SYNC'] = var8;
    var8 = function CONNECTION_OPEN(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var1 = global;
            var3 = var1.Set;
            var1 = var5.getPartitionKeys;
            var14 = var1.bind(var5)();
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var15 = var2;
            var1 = new var15[var3](var14, var13);
            var3 = var1 instanceof Object ? var1 : var2;
            var7 = _closure1_slot12;
            var6 = var4.guilds;
            var1 = undefined;
            var9 = var7.bind(var1)(var6);
            var7 = var9.bind(var1)();
            var6 = var7.done;
            var8 = null;
            if(var6) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var6 = var7.value;
            var11 = var3.delete;
            var10 = var6.id;
            var10 = var11.bind(var3)(var10);
            var10 = var6.stickers;
            var10 = var10.items;
            if(!(var8 != var10)) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var11 = var5.setPartition;
            var10 = var6.id;
            var12 = _closure1_slot15;
            var6 = var6.stickers;
            var6 = var6.items;
            var6 = var12.bind(var1)(var6);
            var6 = var11.bind(var5)(var10, var6);
case 63:
            var10 = var9.bind(var1)();
            var6 = var10.done;
            var7 = var10;
            if(!var6) { _fun0011_ip = 62; continue _fun0011 }
case 61:
            var6 = _closure1_slot12;
            var4 = var4.unavailableGuilds;
            var7 = var6.bind(var1)(var4);
            var6 = var7.bind(var1)();
            var4 = var6.done;
            if(var4) { _fun0011_ip = 65; continue _fun0011 }
case 24:
            var8 = var6.value;
            var4 = var3.delete;
            var4 = var4.bind(var3)(var8);
            var8 = var7.bind(var1)();
            var4 = var8.done;
            var6 = var8;
            if(!var4) { _fun0011_ip = 24; continue _fun0011 }
case 65:
            var2 = _closure1_slot12;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
            var6 = var3.value;
            var2 = var5.removePartition;
            var2 = var2.bind(var5)(var6);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0011_ip = 67; continue _fun0011 }
case 66:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var8;
    var8 = function GUILD_CREATE(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var1 = var7.guild;
            var1 = var1.joined_at;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0012_ip = 68; continue _fun0012 }
case 69:
            var2 = var7.guild;
            var2 = var2.stickers;
            var2 = var2.items;
            var2 = var3 != var2;
            if(!var2) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var5 = var6.setPartition;
            var4 = var7.guild;
            var4 = var4.id;
            var8 = _closure1_slot15;
            var7 = var7.guild;
            var7 = var7.stickers;
            var7 = var7.items;
            if(!(var3 == var7)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
            var7 = new Array(0);
case 72:
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var5.bind(var6)(var4, var3);
            var2 = undefined;
case 70:
            var1 = var2;
case 68:
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var8;
    var8 = function GUILD_DELETE(arg1, arg2) {
        var3 = arg2;
        var2 = var3.removePartition;
        var1 = arg1;
        var1 = var1.guild;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var8;
    var8 = function GUILD_STICKERS_CREATE_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var6 = arg2;
        var5 = var6.setRecord;
        var4 = var1.guildId;
        var2 = var1.sticker;
        var3 = var2.id;
        var7 = _closure1_slot14;
        var2 = var1.sticker;
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['GUILD_STICKERS_CREATE_SUCCESS'] = var8;
    var8 = function GUILD_STICKER_FETCH_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var6 = arg2;
        var5 = var6.setRecord;
        var2 = var1.sticker;
        var4 = var2.guild_id;
        var2 = var1.sticker;
        var3 = var2.id;
        var7 = _closure1_slot14;
        var2 = var1.sticker;
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['GUILD_STICKER_FETCH_SUCCESS'] = var8;
    var8 = function GUILD_STICKERS_UPDATE(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = var5.getPartition;
            var1 = var2.guildId;
            var12 = var3.bind(var5)(var1);
            var4 = _closure1_slot15;
            var3 = var2.stickers;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var11 = null;
            if(!(var11 != var12)) { _fun0013_ip = 74; continue _fun0013 }
case 9:
            var9 = var4;
            var3 = 'user_id';
            for(var6 in var9)
case 75:
            {
case 5:
                var14 = var6;
                var16 = var4[var14];
                var15 = var12[var14];
                var13 = var11 != var15;
                if(!var13) { _fun0013_ip = 76; continue _fun0013 }
case 77:
                var17 = var16.user_id;
                var13 = var11 == var17;
case 76:
                if(!var13) { _fun0013_ip = 70; continue _fun0013 }
case 78:
                var17 = var15.user_id;
                var13 = var11 != var17;
case 70:
                if(!var13) { _fun0013_ip = 75; continue _fun0013 }
case 68:
                var13 = {};
                var19 = var13;
                var18 = var16;
                var16 = copyDataProperties(var19, var18);
                var15 = var15.user_id;
                var13[var3] = var15;
                var4[var14] = var13;
                _fun0013_ip = 75; continue _fun0013;
            }
case 74:
            var3 = var5.setPartition;
            var2 = var2.guildId;
            var2 = var3.bind(var5)(var2, var4);
            return var1;
        }
    };
    var2['GUILD_STICKERS_UPDATE'] = var8;
    var8 = function CACHED_STICKERS_LOADED(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var9 = arg2;
            var3 = _closure1_slot12;
            var1 = arg1;
            var2 = var1.stickers;
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var2) { _fun0014_ip = 79; continue _fun0014 }
case 80:
            var10 = var3.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var1)(var10, var6);
            var11 = var2[var5];
            var12 = var2[var4];
            var10 = var9.setPartition;
            var2 = _closure1_slot15;
            var2 = var2.bind(var1)(var12);
            var2 = var10.bind(var9)(var11, var2);
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0014_ip = 80; continue _fun0014 }
case 79:
            return var1;
        }
    };
    var2['CACHED_STICKERS_LOADED'] = var8;
    var4 = function GUILD_STICKERS_FETCH_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var5 = arg2;
        var4 = var5.setPartition;
        var3 = var1.guildId;
        var6 = _closure1_slot15;
        var2 = var1.stickers;
        var1 = undefined;
        var2 = var6.bind(var1)(var2);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['GUILD_STICKERS_FETCH_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var12 = var2;
    var2 = new var13[var7](var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/GuildStickersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();