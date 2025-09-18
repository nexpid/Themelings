// app/modules/emojis/RawGuildEmojiStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function fromServer(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var19 = arg1;
            var1 = {};
            var3 = _closure1_slot10;
            var17 = undefined;
            var2 = arg2;
            var16 = var3.bind(var17)(var2);
            var3 = var16.bind(var17)();
            var2 = var3.done;
            var15 = 'RawGuildEmoji';
            var14 = 'guildId';
            var13 = 'id';
            var12 = 'animated';
            var11 = 'name';
            var10 = 'require_colons';
            var9 = 'available';
            var8 = 'roles';
            var7 = 'managed';
            var6 = 'version';
            var5 = 8;
            var4 = 'type';
            if(var2) { _fun0005_ip = 254; continue _fun0005 }
 86:
            var21 = var3.value;
            var20 = var21.id;
            var2 = {};
            var22 = _closure1_slot8;
            var2[var22] = var15;
            var2[var14] = var19;
            var22 = var21.id;
            var2[var13] = var22;
            var22 = var21.animated;
            var2[var12] = var22;
            var22 = var21.name;
            var2[var11] = var22;
            var22 = var21.require_colons;
            var2[var10] = var22;
            var22 = var21.available;
            var2[var9] = var22;
            var22 = var21.roles;
            var2[var8] = var22;
            var22 = var21.managed;
            var2[var7] = var22;
            var21 = var21.version;
            var2[var6] = var21;
            var22 = _closure1_slot0;
            var21 = _closure1_slot1;
            var21 = var21[var5];
            var21 = var22.bind(var17)(var21);
            var21 = var21.EmojiTypes;
            var21 = var21.GUILD;
            var2[var4] = var21;
            var1[var20] = var2;
            var20 = var16.bind(var17)();
            var2 = var20.done;
            var3 = var20;
            if(!var2) { _fun0005_ip = 86; continue _fun0005 }
 254:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TypeTag;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.KkvStore;
    var4 = function(arg1) {
        var4 = function RawGuildEmojiStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 69; continue _fun0006 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 105; continue _fun0006;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'getGuildEmojis';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var3 = this;
            var2 = var3.getNullablePartition;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'RawGuildEmojiStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function LOGOUT(arg1, arg2) {
        var2 = arg2;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['LOGOUT'] = var4;
    var4 = function BACKGROUND_SYNC(arg1, arg2) {
        var2 = arg2;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        return var1;
    };
    var7['BACKGROUND_SYNC'] = var4;
    var4 = function CONNECTION_OPEN(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.reset;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var7 = arg1;
                var3 = _closure1_slot10;
                var1 = _closure2_slot0;
                var2 = var1.guilds;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0007_ip = 116; continue _fun0007 }
 44:
                var2 = var3.value;
                var8 = var2.emojis;
                var8 = var8.items;
                if(!(var4 != var8)) { _fun0007_ip = 101; continue _fun0007 }
 65:
                var8 = var2.id;
                var10 = _closure1_slot12;
                var9 = var2.id;
                var2 = var2.emojis;
                var2 = var2.items;
                var2 = var10.bind(var1)(var9, var2);
                var7[var8] = var2;
 101:
                var8 = var5.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0007_ip = 44; continue _fun0007 }
 116:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['CONNECTION_OPEN'] = var4;
    var4 = function OVERLAY_INITIALIZE(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.reset;
        var1 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure2_slot0;
            var2 = var2.emojis;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var5 = var6().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    var4 = undefined;
                    if(var3) { _fun0008_ip = 27; continue _fun0008 }
 24:
                    var4 = var5;
 27:
                    var5 = undefined;
                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
 32:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var1;
                    var5 = undefined;
                    var3 = var6;
                    if(var6) { _fun0008_ip = 57; continue _fun0008 }
 51:
                    var5 = var7;
                    var3 = var6;
 57:
                    if(var3) { _fun0008_ip = 63; continue _fun0008 }
 60:
                    var2.return();
 63:
                    var3 = _closure3_slot0;
                    var2 = _closure1_slot12;
                    var2 = var2.bind(var1)(var4, var5);
                    var3[var4] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['OVERLAY_INITIALIZE'] = var4;
    var4 = function CACHED_EMOJIS_LOADED(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var9 = arg2;
            var3 = _closure1_slot10;
            var1 = arg1;
            var2 = var1.emojis;
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = 2;
            var5 = 0;
            var4 = 1;
            if(var2) { _fun0009_ip = 106; continue _fun0009 }
 46:
            var10 = var3.value;
            var2 = _closure1_slot2;
            var2 = var2.bind(var1)(var10, var6);
            var11 = var2[var5];
            var12 = var2[var4];
            var10 = var9.setPartition;
            var2 = _closure1_slot12;
            var2 = var2.bind(var1)(var11, var12);
            var2 = var10.bind(var9)(var11, var2);
            var10 = var7.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0009_ip = 46; continue _fun0009 }
 106:
            return var1;
        }
    };
    var7['CACHED_EMOJIS_LOADED'] = var4;
    var4 = function GUILD_CREATE(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var4 = var5.setPartition;
            var2 = var1.guild;
            var3 = var2.id;
            var7 = _closure1_slot12;
            var2 = var1.guild;
            var6 = var2.id;
            var1 = var1.guild;
            var1 = var1.emojis;
            var2 = var1.items;
            var1 = null;
            if(!(var1 == var2)) { _fun0010_ip = 66; continue _fun0010 }
 62:
            var2 = new Array(0);
 66:
            var1 = undefined;
            var2 = var7.bind(var1)(var6, var2);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var7['GUILD_CREATE'] = var4;
    var4 = function GUILD_UPDATE(arg1, arg2) {
        var1 = arg1;
        var5 = arg2;
        var4 = var5.setPartition;
        var2 = var1.guild;
        var3 = var2.id;
        var7 = _closure1_slot12;
        var2 = var1.guild;
        var6 = var2.id;
        var1 = var1.guild;
        var2 = var1.emojis;
        var1 = undefined;
        var2 = var7.bind(var1)(var6, var2);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7['GUILD_UPDATE'] = var4;
    var4 = function GUILD_EMOJIS_UPDATE(arg1, arg2) {
        var1 = arg1;
        var5 = arg2;
        var4 = var5.setPartition;
        var3 = var1.guildId;
        var7 = _closure1_slot12;
        var6 = var1.guildId;
        var2 = var1.emojis;
        var1 = undefined;
        var2 = var7.bind(var1)(var6, var2);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var7['GUILD_EMOJIS_UPDATE'] = var4;
    var2 = function GUILD_DELETE(arg1, arg2) {
        var3 = arg2;
        var2 = var3.removePartition;
        var1 = arg1;
        var1 = var1.guild;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var7['GUILD_DELETE'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.GuildEmojiStoreExperiment;
    var2 = var4.getCachedBridgedStoreMode;
    var11 = var2.bind(var4)();
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var12 = var7;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emojis/RawGuildEmojiStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();