// app/stores/GuildCategoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
    var _closure1_slot22 = var1;
    var1 = function setIndex(arg1, arg2) {
        var2 = arg2;
        var1 = arg1;
        var1['index'] = var2;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function rebuildGuild(arg1) {
        var3 = arg1;
        var5 = _closure1_slot12;
        var1 = var5.getChannels;
        var5 = var1.bind(var5)(var3);
        var1 = {};
        var6 = new Array(0);
        var1['_categories'] = var6;
        var6 = new Array(0);
        var1['null'] = var6;
        var _closure2_slot0 = var1;
        var6 = function updateChannel(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var4 = var1.channel;
                var5 = _closure2_slot0;
                var3 = var4.parent_id;
                var2 = null;
                var6 = var2 != var3;
                var3 = 'null';
                if(!var6) { _fun0005_ip = 40; continue _fun0005 }
 34:
                var3 = var4.parent_id;
 40:
                var3 = var5[var3];
                if(!(var2 == var3)) { _fun0005_ip = 58; continue _fun0005 }
 48:
                var1 = _closure2_slot0;
                var3 = var1.null;
 58:
                var2 = var3.push;
                var1 = {};
                var1['channel'] = var4;
                var4 = -1;
                var1['index'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var7 = _closure1_slot14;
        var7 = var7.GUILD_CATEGORY;
        var8 = var5[var7];
        var7 = var8.forEach;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.channel;
            var3 = _closure2_slot0;
            var5 = var3._categories;
            var4 = var5.push;
            var2 = {};
            var2['channel'] = var1;
            var6 = -1;
            var2['index'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var1.id;
            var1 = new Array(0);
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var4 = var7.bind(var8)(var4);
        var4 = _closure1_slot10;
        var7 = var5[var4];
        var4 = var7.forEach;
        var4 = var4.bind(var7)(var6);
        var4 = _closure1_slot11;
        var5 = var5[var4];
        var4 = var5.forEach;
        var4 = var4.bind(var5)(var6);
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var4 = 11;
        var4 = var6[var4];
        var6 = undefined;
        var5 = var5.bind(var6)(var4);
        var4 = var1._categories;
        var6 = var5.bind(var6)(var4, var1);
        var5 = var6.forEach;
        var4 = _closure1_slot23;
        var4 = var5.bind(var6)(var4);
        var2 = _closure1_slot17;
        var2[var3] = var1;
        return var1;
    };
    var _closure1_slot24 = var1;
    var12 = function handleConnectionOpen() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = {};
            _closure1_slot17 = var2;
            var3 = _closure1_slot16;
            var2 = null;
            if(!(var2 != var3)) { _fun0006_ip = 34; continue _fun0006 }
 19:
            var3 = _closure1_slot24;
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 34:
            var1 = undefined;
            return var1;
        }
    };
    var11 = function handleGuildUpdates(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var3 = var1.id;
            var4 = _closure1_slot17;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot16;
            if(!(var4 === var3)) { _fun0007_ip = 43; continue _fun0007 }
 34:
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
 43:
            return var1;
        }
    };
    var10 = function handleChannelUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.guild_id;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 51; continue _fun0008 }
 19:
            var4 = _closure1_slot17;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot16;
            if(!(var4 === var3)) { _fun0008_ip = 49; continue _fun0008 }
 40:
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
 49:
            return var1;
 51:
            var1 = false;
            return var1;
        }
    };
    var9 = function handleGuildRoleUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = _closure1_slot17;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot16;
            if(!(var3 === var4)) { _fun0009_ip = 38; continue _fun0009 }
 29:
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
 38:
            return var1;
        }
    };
    var1 = function updateSelectedVoiceChannel(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var4 = arg1;
            var1 = arg2;
            _closure1_slot18 = var1;
            var1 = null;
            if(!(var1 != var4)) { _fun0010_ip = 83; continue _fun0010 }
 19:
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            if(!(var1 != var2)) { _fun0010_ip = 83; continue _fun0010 }
 33:
            var2 = var4.getGuildId;
            var5 = var2.bind(var4)();
            var1 = var1 != var5;
            if(!var1) { _fun0010_ip = 81; continue _fun0010 }
 50:
            var2 = _closure1_slot17;
            var4 = undefined;
            var2[var5] = var4;
            var6 = _closure1_slot16;
            var1 = true;
            if(!(var5 === var6)) { _fun0010_ip = 81; continue _fun0010 }
 70:
            var3 = _closure1_slot24;
            var3 = var3.bind(var4)(var5);
            var1 = true;
 81:
            return var1;
 83:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function handleFavoritesUpdate() {
        var3 = _closure1_slot24;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var13 = var1.Object;
    var8 = var13.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var8 = var6[var2];
    var8 = var5.bind(var1)(var8);
    var13 = var8.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot10 = var13;
    var8 = var8.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot11 = var8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ChannelTypes;
    var _closure1_slot14 = var8;
    var2 = var2.FAVORITES;
    var _closure1_slot15 = var2;
    var2 = null;
    var _closure1_slot16 = var2;
    var8 = {};
    var _closure1_slot17 = var8;
    var _closure1_slot18 = var2;
    var2 = {};
    var8 = new Array(0);
    var2['_categories'] = var8;
    var8 = new Array(0);
    var2['null'] = var8;
    var _closure1_slot19 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildCategoryStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0011_ip = 69; continue _fun0011 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0011_ip = 105; continue _fun0011;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var8 = var4.waitFor;
            var13 = _closure1_slot12;
            var12 = _closure1_slot13;
            var11 = _closure1_slot8;
            var10 = _closure1_slot9;
            var5 = _closure1_slot7;
            var14 = var4;
            var9 = var5;
            var2 = var14[var8](var13, var12, var11, var10, var9, var8);
            var3 = var4.syncWith;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot26;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCategories';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = arg1;
                var4 = null;
                if(!(var4 == var5)) { _fun0012_ip = 18; continue _fun0012 }
 9:
                var1 = _closure1_slot19;
                _fun0012_ip = 47; continue _fun0012;
 18:
                var2 = _closure1_slot17;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0012_ip = 44; continue _fun0012 }
 33:
                var4 = _closure1_slot24;
                var3 = undefined;
                var2 = var4.bind(var3)(var5);
 44:
                var1 = var2;
 47:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildCategoryStore';
    var8['displayName'] = var2;
    var2 = 13;
    var2 = var6[var2];
    var16 = var7.bind(var1)(var2);
    var2 = {};
    var13 = function handleChannelSelect(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = null;
            var2 = var4 != var5;
            var1 = null;
            if(!var2) { _fun0013_ip = 22; continue _fun0013 }
 19:
            var1 = var5;
 22:
            _closure1_slot16 = var1;
            var1 = var4 != var5;
            if(!var1) { _fun0013_ip = 67; continue _fun0013 }
 36:
            var2 = _closure1_slot17;
            var2 = var2[var5];
            var2 = var4 == var2;
            if(!var2) { _fun0013_ip = 64; continue _fun0013 }
 51:
            var4 = _closure1_slot24;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = undefined;
 64:
            var1 = var2;
 67:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var13;
    var2['CONNECTION_OPEN'] = var12;
    var2['OVERLAY_INITIALIZE'] = var12;
    var2['CACHE_LOADED_LAZY'] = var12;
    var2['GUILD_CREATE'] = var11;
    var2['GUILD_UPDATE'] = var11;
    var11 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = var1.id;
        var1 = _closure1_slot17;
        var1 = delete var1[var2];
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var11;
    var2['CHANNEL_CREATE'] = var10;
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleChannelUpdates(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot21;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0014_ip = 105; continue _fun0014 }
 44:
            var2 = var4.value;
            var10 = var2.guild_id;
            if(!(var5 != var10)) { _fun0014_ip = 87; continue _fun0014 }
 58:
            var2 = _closure1_slot17;
            var2[var10] = var8;
            var2 = _closure1_slot16;
            var3 = true;
            if(!(var2 === var10)) { _fun0014_ip = 87; continue _fun0014 }
 76:
            var2 = _closure1_slot24;
            var2 = var2.bind(var8)(var10);
            var3 = true;
 87:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0014_ip = 44; continue _fun0014 }
 105:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var10;
    var10 = function handleGuildMemberUpdate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = var1.user;
            var5 = _closure1_slot8;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            var1 = var1.id;
            if(!(var4 === var1)) { _fun0015_ip = 68; continue _fun0015 }
 39:
            var4 = _closure1_slot17;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot16;
            if(!(var3 === var4)) { _fun0015_ip = 66; continue _fun0015 }
 57:
            var2 = _closure1_slot24;
            var2 = var2.bind(var1)(var3);
 66:
            return var1;
 68:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_MEMBER_UPDATE'] = var10;
    var10 = function handleCurrentUserUpdate() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = _closure1_slot16;
            var2 = null;
            if(!(var2 != var3)) { _fun0016_ip = 30; continue _fun0016 }
 13:
            var3 = _closure1_slot24;
            var2 = _closure1_slot16;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 30:
            var1 = false;
            return var1;
        }
    };
    var2['CURRENT_USER_UPDATE'] = var10;
    var2['GUILD_ROLE_CREATE'] = var9;
    var2['GUILD_ROLE_UPDATE'] = var9;
    var2['GUILD_ROLE_DELETE'] = var9;
    var2['IMPERSONATE_UPDATE'] = var9;
    var2['IMPERSONATE_STOP'] = var9;
    var9 = function handleVoiceChannelSelect(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var6 = var1.channelId;
            var5 = null;
            if(!(var5 == var6)) { _fun0017_ip = 25; continue _fun0017 }
 14:
            var1 = _closure1_slot18;
            if(!(var5 == var1)) { _fun0017_ip = 56; continue _fun0017 }
 25:
            var4 = _closure1_slot25;
            var3 = _closure1_slot9;
            var1 = var3.getChannel;
            var3 = var1.bind(var3)(var6);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var6);
            _fun0017_ip = 86; continue _fun0017;
 56:
            var4 = _closure1_slot25;
            var6 = _closure1_slot9;
            var3 = var6.getChannel;
            var2 = _closure1_slot18;
            var3 = var3.bind(var6)(var2);
            var2 = undefined;
            var1 = var4.bind(var2)(var3, var5);
 86:
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var9;
    var4 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var3 = arg1;
                var1 = arg2;
                var6 = var1.channelId;
                var5 = var1.sessionId;
                var4 = _closure1_slot8;
                var1 = var4.getSessionId;
                var4 = var1.bind(var4)();
                var1 = var3;
                if(!(var4 === var5)) { _fun0018_ip = 76; continue _fun0018 }
 41:
                var5 = _closure1_slot25;
                var4 = _closure1_slot9;
                var2 = var4.getChannel;
                var4 = var2.bind(var4)(var6);
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var6);
                if(var2) { _fun0018_ip = 73; continue _fun0018 }
 70:
                var2 = var3;
 73:
                var1 = var2;
 76:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var17 = var4;
    var15 = var2;
    var2 = new var17[var8](var16, var15, var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildCategoryStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();