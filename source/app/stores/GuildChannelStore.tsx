// app/stores/GuildChannelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
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
            _closure1_slot38 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
            var9 = _closure1_slot40;
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
            var7 = _closure1_slot40;
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
    var _closure1_slot39 = var1;
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
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var10 = function createGuildChannelList(arg1) {
        var1 = {};
        var2 = arg1;
        var1['id'] = var2;
        var4 = _closure1_slot26;
        var3 = new Array(0);
        var1[var4] = var3;
        var4 = _closure1_slot27;
        var3 = new Array(0);
        var1[var4] = var3;
        var3 = _closure1_slot23;
        var3 = var3.GUILD_CATEGORY;
        var4 = _closure1_slot34;
        var2 = new Array(1);
        var2[0] = var4;
        var1[var3] = var2;
        var3 = 0;
        var2 = 'count';
        var1[var2] = var3;
        return var1;
    };
    var _closure1_slot41 = var10;
    var1 = function comparator(arg1, arg2) {
        var1 = arg1;
        var2 = var1.comparator;
        var1 = arg2;
        var1 = var1.comparator;
        var1 = var2 - var1;
        return var1;
    };
    var _closure1_slot42 = var1;
    var1 = function getChannelsForGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot22;
            if(!(var4 !== var1)) { _fun0005_ip = 13; continue _fun0005 }
case 36:
            var1 = {};
            var3 = _closure1_slot16;
            var2 = var3.getMutableGuildChannelsForGuild;
            var7 = var2.bind(var3)(var4);
            var5 = var7;
            for(var2 in var5)
case 39:
            {
case 40:
                var9 = var2;
                var8 = {};
                var11 = var7[var9];
                var8['channel'] = var11;
                var11 = var7[var9];
                var11 = var11.position;
                var8['comparator'] = var11;
                var1[var9] = var8;
                _fun0005_ip = 39; continue _fun0005;
            }
case 41:
            return var1;
case 13:
            var1 = {};
            var3 = _closure1_slot10;
            var2 = var3.getFavoriteChannels;
            var9 = var2.bind(var3)();
            var7 = var9;
            var3 = undefined;
            var2 = null;
            for(var4 in var7)
case 42:
            {
case 43:
                var12 = var4;
                var13 = _closure1_slot16;
                var11 = var13.getChannel;
                var14 = var11.bind(var13)(var12);
                if(var2 == var14) { _fun0005_ip = 42; continue _fun0005 }
case 44:
                var13 = var9[var12];
                var11 = _closure1_slot11;
                var13 = var11.bind(var3)(var9, var13, var14);
                var11 = {};
                var11['channel'] = var13;
                var13 = var13.position;
                var11['comparator'] = var13;
                var1[var12] = var11;
                _fun0005_ip = 42; continue _fun0005;
            }
case 45:
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function rebuildChannels(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = var1.id;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot43;
        var6 = undefined;
        var5 = var4.bind(var6)(var5);
        var4 = _closure1_slot1;
        var7 = _closure1_slot3;
        var3 = 17;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var5 = var3.channel;
                var4 = _closure2_slot0;
                var6 = var4.count;
                var2 = 1;
                var2 = var6 + var2;
                var4['count'] = var2;
                var7 = _closure1_slot13;
                var6 = var7.has;
                var2 = var5.type;
                var2 = var6.bind(var7)(var2);
                if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var7 = _closure1_slot19;
                var6 = var7.can;
                var2 = _closure1_slot24;
                var2 = var2.VIEW_CHANNEL;
                var2 = var6.bind(var7)(var2, var5);
                if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                var8 = _closure1_slot9;
                var7 = var8.isChannelGated;
                var6 = var5.guild_id;
                var2 = var5.id;
                var2 = var7.bind(var8)(var6, var2);
                if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 42:
                var6 = var5.id;
                var2 = _closure1_slot32;
                if(!(var6 === var2)) { _fun0006_ip = 49; continue _fun0006 }
case 46:
                var2 = var5.type;
                var6 = _closure1_slot12;
                var7 = undefined;
                var6 = var6.bind(var7)(var2);
                if(var6) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var6 = _closure1_slot14;
                var6 = var6.bind(var7)(var2);
                if(!var6) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var2 = _closure1_slot27;
case 52:
                _fun0006_ip = 54; continue _fun0006;
case 50:
                var2 = _closure1_slot26;
case 54:
                var6 = var5.type;
                var5 = _closure1_slot23;
                var5 = var5.GUILD_DIRECTORY;
                if(!(var6 === var5)) { _fun0006_ip = 22; continue _fun0006 }
case 55:
                var6 = _closure1_slot33;
                var5 = _closure2_slot1;
                var6 = var6[var5];
                var5 = null;
                if(!(var5 == var6)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var7 = _closure1_slot33;
                var6 = _closure2_slot1;
                var5 = new Array(0);
                var7[var6] = var5;
case 56:
                var5 = _closure1_slot33;
                var4 = _closure2_slot1;
                var5 = var5[var4];
                var4 = var5.push;
                var4 = var4.bind(var5)(var3);
case 22:
                var4 = _closure2_slot0;
                var5 = var4[var2];
                var4 = null;
                if(!(var4 != var5)) { _fun0006_ip = 49; continue _fun0006 }
case 58:
                var1 = _closure2_slot0;
                var2 = var1[var2];
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var14 = function resetAllGuildChannels() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = {};
            _closure1_slot29 = var2;
            var2 = {};
            _closure1_slot33 = var2;
            var2 = {};
            _closure1_slot30 = var2;
            var2 = {};
            _closure1_slot31 = var2;
            var3 = _closure1_slot28;
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var3 = _closure1_slot45;
            var2 = _closure1_slot28;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 59:
            var1 = undefined;
            return var1;
        }
    };
    var1 = function rebuildGuildChannels(arg1) {
        var4 = arg1;
        var1 = _closure1_slot41;
        var3 = undefined;
        var1 = var1.bind(var3)(var4);
        var6 = _closure1_slot29;
        var6[var4] = var1;
        var7 = _closure1_slot33;
        var6 = new Array(0);
        var7[var4] = var6;
        var6 = _closure1_slot44;
        var6 = var6.bind(var3)(var1);
        var6 = _closure1_slot26;
        var8 = var1[var6];
        var6 = var8.sort;
        var7 = _closure1_slot42;
        var6 = var6.bind(var8)(var7);
        var6 = _closure1_slot27;
        var8 = var1[var6];
        var6 = var8.sort;
        var6 = var6.bind(var8)(var7);
        var5 = _closure1_slot23;
        var5 = var5.GUILD_CATEGORY;
        var6 = var1[var5];
        var5 = var6.sort;
        var5 = var5.bind(var6)(var7);
        var5 = function rebuildDisambiguations(arg1) {
            var3 = arg1;
            var6 = _closure1_slot30;
            var5 = var3.id;
            var4 = {};
            var6[var5] = var4;
            var _closure3_slot0 = var4;
            var4 = {};
            var _closure3_slot1 = var4;
            var2 = _closure1_slot26;
            var3 = var3[var2];
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.channel;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.computeChannelName;
                    var3 = _closure1_slot21;
                    var2 = _closure1_slot20;
                    var3 = var4.bind(var5)(var6, var3, var2);
                    var4 = global;
                    var2 = var4.Object;
                    var2 = var2.prototype;
                    var8 = var2.hasOwnProperty;
                    var7 = var8.call;
                    var5 = _closure3_slot1;
                    var8 = var7.bind(var8)(var5, var3);
                    var5 = null;
                    var7 = null;
                    if(!var8) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var8 = _closure3_slot1;
                    var7 = var8[var3];
case 61:
                    if(!(var5 != var7)) { _fun0008_ip = 63; continue _fun0008 }
case 17:
                    var8 = _closure3_slot1;
                    var5 = 1;
                    var5 = var7 + var5;
                    var8[var3] = var5;
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = '~';
                    var4 = var5.bind(var4)(var7);
                    var5 = var3 + var4;
                    _fun0008_ip = 64; continue _fun0008;
case 63:
                    var7 = _closure3_slot1;
                    var4 = 1;
                    var7[var3] = var4;
                    var5 = var3;
case 64:
                    var4 = _closure3_slot0;
                    var3 = var6.id;
                    var2 = {};
                    var6 = var6.id;
                    var2['id'] = var6;
                    var2['name'] = var5;
                    var4[var3] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var5.bind(var3)(var1);
        var2 = function rebuildGuildElevatedPermissions(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot21;
                var1 = var4.getCurrentUser;
                var10 = var1.bind(var4)();
                var4 = _closure1_slot18;
                var1 = var4.getGuild;
                var6 = var1.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var6)) { _fun0009_ip = 47; continue _fun0009 }
case 65:
                var5 = _closure1_slot46;
                var1 = undefined;
                var5 = var5.bind(var1)(var10, var6);
                var1 = true;
                if(var5) { _fun0009_ip = 66; continue _fun0009 }
case 47:
                var5 = _closure1_slot29;
                var5 = var5[var3];
                if(!(var4 == var5)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                var6 = _closure1_slot45;
                var4 = undefined;
                var5 = var6.bind(var4)(var3);
case 67:
                var4 = _closure1_slot26;
                var6 = var5[var4];
                var4 = _closure1_slot27;
                var5 = var5[var4];
                var4 = _closure1_slot39;
                var9 = undefined;
                var7 = var4.bind(var9)(var6);
                var6 = var7.bind(var9)();
                var4 = var6.done;
                if(var4) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                var11 = _closure1_slot46;
                var4 = var6.value;
                var4 = var4.channel;
                var4 = var11.bind(var9)(var10, var4);
                var1 = true;
                if(var4) { _fun0009_ip = 66; continue _fun0009 }
case 71:
                var11 = var7.bind(var9)();
                var4 = var11.done;
                var6 = var11;
                if(!var4) { _fun0009_ip = 70; continue _fun0009 }
case 69:
                var4 = _closure1_slot39;
                var7 = var4.bind(var9)(var5);
                var5 = var7.bind(var9)();
                var4 = var5.done;
                var1 = false;
                if(var4) { _fun0009_ip = 66; continue _fun0009 }
case 45:
                var11 = _closure1_slot46;
                var4 = var5.value;
                var4 = var4.channel;
                var4 = var11.bind(var9)(var10, var4);
                var1 = true;
                if(var4) { _fun0009_ip = 66; continue _fun0009 }
case 72:
                var11 = var7.bind(var9)();
                var4 = var11.done;
                var5 = var11;
                var1 = false;
                if(!var4) { _fun0009_ip = 45; continue _fun0009 }
case 66:
                var2 = _closure1_slot31;
                if(var1) { _fun0009_ip = 73; continue _fun0009 }
case 74:
                var1 = delete var2[var3];
                _fun0009_ip = 75; continue _fun0009;
case 73:
                var1 = true;
                var2[var3] = var1;
case 75:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var _closure1_slot45 = var1;
    var13 = function handleGuildUpdates(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var3 = var1.id;
            var1 = null;
            if(!(var1 != var3)) { _fun0010_ip = 40; continue _fun0010 }
case 76:
            var4 = _closure1_slot29;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot28;
            if(!(var4 === var3)) { _fun0010_ip = 9; continue _fun0010 }
case 77:
            var2 = _closure1_slot45;
            var2 = var2.bind(var1)(var3);
case 9:
            return var1;
case 40:
            var1 = false;
            return var1;
        }
    };
    var12 = function handleChannelUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.guild_id;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 40; continue _fun0011 }
case 76:
            var4 = _closure1_slot29;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot28;
            if(!(var3 === var4)) { _fun0011_ip = 9; continue _fun0011 }
case 77:
            var2 = _closure1_slot45;
            var2 = var2.bind(var1)(var3);
case 9:
            return var1;
case 40:
            var1 = false;
            return var1;
        }
    };
    var11 = function handleGuildRoleUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = _closure1_slot29;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot28;
            if(!(var3 === var4)) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var2 = _closure1_slot45;
            var2 = var2.bind(var1)(var3);
case 78:
            return var1;
        }
    };
    var1 = function hasElevatedPermissions(arg1, arg2) {
        var6 = _closure1_slot2;
        var7 = _closure1_slot3;
        var2 = 19;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.hasAny;
        var2 = 20;
        var2 = var7[var2];
        var6 = var6.bind(var5)(var2);
        var5 = var6.computePermissions;
        var2 = {};
        var7 = arg1;
        var2['user'] = var7;
        var7 = arg2;
        var2['context'] = var7;
        var7 = false;
        var2['checkElevated'] = var7;
        var2 = var5.bind(var6)(var2);
        var1 = _closure1_slot25;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot46 = var1;
    var1 = function updateSelectedVoiceChannel(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            _closure1_slot32 = var1;
            var4 = null;
            var3 = var4 == var6;
            var1 = undefined;
            var5 = undefined;
            if(var3) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var3 = var6.getGuildId;
            var5 = var3.bind(var6)();
case 80:
            var6 = var4 != var5;
            var3 = null;
            if(!var6) { _fun0013_ip = 82; continue _fun0013 }
case 83:
            var3 = var5;
case 82:
            if(!(var4 != var3)) { _fun0013_ip = 84; continue _fun0013 }
case 59:
            var4 = _closure1_slot29;
            var4[var3] = var1;
            var4 = _closure1_slot28;
            if(!(var3 === var4)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
            var2 = _closure1_slot45;
            var2 = var2.bind(var1)(var3);
case 85:
            return var1;
case 84:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot47 = var1;
    var1 = function handleFavoritesUpdate() {
        var3 = _closure1_slot45;
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot48 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.createFavoritesChannelRecord;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.isGuildSelectableChannelType;
    var _closure1_slot12 = var4;
    var4 = var2.GUILD_NON_CATEGORY_CHANNEL_TYPES;
    var _closure1_slot13 = var4;
    var4 = var2.isGuildVocalChannelType;
    var _closure1_slot14 = var4;
    var17 = var2.createChannelRecord;
    var2 = 9;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 10;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 11;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 12;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 13;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 14;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 15;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 16;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.FAVORITES;
    var _closure1_slot22 = var4;
    var18 = var2.ChannelTypes;
    var _closure1_slot23 = var18;
    var4 = var2.Permissions;
    var _closure1_slot24 = var4;
    var4 = var2.ElevatedPermissions;
    var _closure1_slot25 = var4;
    var5 = var2.NULL_STRING_GUILD_ID;
    var19 = var2.NULL_STRING_CHANNEL_ID;
    var4 = 'SELECTABLE';
    var _closure1_slot26 = var4;
    var2 = 'VOCAL';
    var _closure1_slot27 = var2;
    var15 = null;
    var _closure1_slot28 = var15;
    var16 = {};
    var _closure1_slot29 = var16;
    var16 = {};
    var _closure1_slot30 = var16;
    var16 = {};
    var _closure1_slot31 = var16;
    var _closure1_slot32 = var15;
    var15 = {};
    var _closure1_slot33 = var15;
    var15 = {};
    var16 = -1;
    var15['comparator'] = var16;
    var16 = {};
    var16['id'] = var19;
    var18 = var18.GUILD_CATEGORY;
    var16['type'] = var18;
    var18 = 'Uncategorized';
    var16['name'] = var18;
    var16 = var17.bind(var1)(var16);
    var15['channel'] = var16;
    var _closure1_slot34 = var15;
    var5 = var10.bind(var1)(var5);
    var _closure1_slot35 = var5;
    var5 = new Array(0);
    var _closure1_slot36 = var5;
    var5 = {};
    var _closure1_slot37 = var5;
    var5 = 21;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.Store;
    var5 = function(arg1) {
        var4 = function GuildChannelStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot38;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 87; continue _fun0014 }
case 40:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 88; continue _fun0014;
case 87:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 88:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var10 = var4.waitFor;
            var17 = _closure1_slot18;
            var16 = _closure1_slot17;
            var15 = _closure1_slot16;
            var14 = _closure1_slot19;
            var13 = _closure1_slot15;
            var12 = _closure1_slot9;
            var11 = _closure1_slot10;
            var18 = var4;
            var2 = var18[var10](var17, var16, var15, var14, var13, var12, var11, var10);
            var3 = var4.syncWith;
            var5 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot48;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'getAllGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                if(!(var4 == var5)) { _fun0015_ip = 89; continue _fun0015 }
case 90:
                var1 = _closure1_slot35;
                _fun0015_ip = 91; continue _fun0015;
case 89:
                var2 = _closure1_slot29;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0015_ip = 92; continue _fun0015 }
case 37:
                var4 = _closure1_slot45;
                var3 = undefined;
                var2 = var4.bind(var3)(var5);
case 92:
                var1 = var2;
case 91:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getFirstChannelOfType';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = this;
                var2 = var3.getChannels;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg3;
                var3 = var2[var1];
                var2 = var3.find;
                var1 = arg2;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0016_ip = 59; continue _fun0016 }
case 91:
                var1 = var2.channel;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFirstChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var4 = arguments[2];
                var5 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0017_ip = 33; continue _fun0017 }
case 89:
                var4 = false;
case 33:
                var2 = var5.getFirstChannelOfType;
                var1 = _closure1_slot26;
                var1 = var2.bind(var5)(var7, var6, var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0017_ip = 68; continue _fun0017 }
case 6:
                var2 = null;
                if(!var4) { _fun0017_ip = 86; continue _fun0017 }
case 40:
                var4 = var5.getFirstChannelOfType;
                var3 = _closure1_slot27;
                var2 = var4.bind(var5)(var7, var6, var3);
case 86:
                var1 = var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getDefaultChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arguments[1];
                var2 = arguments[2];
                var4 = this;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0018_ip = 76; continue _fun0018 }
case 93:
                var5 = false;
case 76:
                if(!(var2 === var3)) { _fun0018_ip = 80; continue _fun0018 }
case 35:
                var3 = _closure1_slot24;
                var2 = var3.VIEW_CHANNEL;
case 80:
                var _closure3_slot0 = var2;
                var3 = var4.getFirstChannel;
                var2 = arg1;
                var1 = function(arg1) {
                    var4 = _closure1_slot19;
                    var3 = var4.can;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1.channel;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getSFWDefaultChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = arguments[1];
                var2 = arguments[2];
                var4 = this;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0019_ip = 76; continue _fun0019 }
case 93:
                var5 = false;
case 76:
                if(!(var2 === var3)) { _fun0019_ip = 80; continue _fun0019 }
case 35:
                var3 = _closure1_slot24;
                var2 = var3.VIEW_CHANNEL;
case 80:
                var _closure3_slot0 = var2;
                var3 = var4.getFirstChannel;
                var2 = arg1;
                var1 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var2 = arg1;
                        var5 = _closure1_slot19;
                        var4 = var5.can;
                        var3 = _closure3_slot0;
                        var1 = var2.channel;
                        var1 = var4.bind(var5)(var3, var1);
                        if(!var1) { _fun0020_ip = 40; continue _fun0020 }
case 60:
                        var2 = var2.channel;
                        var2 = var2.nsfw;
                        var1 = !var2;
case 40:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1, var5);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSelectableChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getChannels;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot26;
            var3 = var2[var1];
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getSelectableChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getChannels;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot26;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getVocalChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getChannels;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot27;
            var3 = var2[var1];
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getDirectoryChannelIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = _closure1_slot33;
                var1 = arg1;
                var6 = var3[var1];
                var3 = null;
                var4 = var3 == var6;
                var1 = undefined;
                if(var4) { _fun0021_ip = 39; continue _fun0021 }
case 94:
                var5 = var6.map;
                var4 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.channel;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var5.bind(var6)(var4);
case 39:
                if(!(var3 == var1)) { _fun0021_ip = 95; continue _fun0021 }
case 6:
                var1 = _closure1_slot36;
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'hasSelectableChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.getSelectableChannelIds;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.includes;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasElevatedPermissions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = _closure1_slot31;
                var1 = arg1;
                var1 = var2[var1];
                if(var1) { _fun0022_ip = 76; continue _fun0022 }
case 93:
                var1 = false;
case 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getChannels;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var2 = var1.count;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasCategories';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.getChannels;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot23;
            var1 = var1.GUILD_CATEGORY;
            var1 = var2[var1];
            var2 = var1.length;
            var1 = 1;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getTextChannelNameDisambiguations';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                if(!(var2 != var3)) { _fun0023_ip = 96; continue _fun0023 }
case 90:
                var1 = _closure1_slot30;
                var1 = var1[var3];
                if(!(var2 == var1)) { _fun0023_ip = 97; continue _fun0023 }
case 96:
                var1 = _closure1_slot37;
case 97:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'GuildChannelStore';
    var10['displayName'] = var5;
    var5 = 22;
    var5 = var8[var5];
    var22 = var9.bind(var1)(var5);
    var5 = {};
    var5['BACKGROUND_SYNC'] = var14;
    var15 = function handleChannelSelect(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var4 = null;
            var2 = var4 != var5;
            var1 = null;
            if(!var2) { _fun0024_ip = 98; continue _fun0024 }
case 76:
            var1 = var5;
case 98:
            _closure1_slot28 = var1;
            var1 = var4 != var5;
            if(!var1) { _fun0024_ip = 34; continue _fun0024 }
case 80:
            var2 = _closure1_slot29;
            var2 = var2[var5];
            var2 = var4 == var2;
            if(!var2) { _fun0024_ip = 99; continue _fun0024 }
case 40:
            var4 = _closure1_slot45;
            var3 = undefined;
            var3 = var4.bind(var3)(var5);
            var2 = undefined;
case 99:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var5['CHANNEL_SELECT'] = var15;
    var5['CONNECTION_OPEN'] = var14;
    var5['OVERLAY_INITIALIZE'] = var14;
    var5['CACHE_LOADED_LAZY'] = var14;
    var5['GUILD_CREATE'] = var13;
    var5['GUILD_UPDATE'] = var13;
    var13 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = var1.id;
        var3 = _closure1_slot29;
        var3 = delete var3[var2];
        var3 = _closure1_slot30;
        var3 = delete var3[var2];
        var3 = _closure1_slot31;
        var3 = delete var3[var2];
        var1 = _closure1_slot33;
        var1 = delete var1[var2];
        var1 = true;
        return var1;
    };
    var5['GUILD_DELETE'] = var13;
    var13 = function handleGuildMemberUpdate(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = var1.user;
            var5 = _closure1_slot15;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            var1 = var1.id;
            if(!(var4 === var1)) { _fun0025_ip = 86; continue _fun0025 }
case 65:
            var4 = _closure1_slot29;
            var1 = undefined;
            var4[var3] = var1;
            var4 = _closure1_slot28;
            if(!(var3 === var4)) { _fun0025_ip = 100; continue _fun0025 }
case 101:
            var2 = _closure1_slot45;
            var2 = var2.bind(var1)(var3);
case 100:
            return var1;
case 86:
            var1 = false;
            return var1;
        }
    };
    var5['GUILD_MEMBER_UPDATE'] = var13;
    var5['CHANNEL_CREATE'] = var12;
    var5['CHANNEL_DELETE'] = var12;
    var12 = function handleChannelUpdates(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot39;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var5 = null;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0026_ip = 88; continue _fun0026 }
case 92:
            var2 = var4.value;
            var10 = var2.guild_id;
            if(!(var5 != var10)) { _fun0026_ip = 102; continue _fun0026 }
case 103:
            var2 = _closure1_slot29;
            var2[var10] = var8;
            var2 = _closure1_slot28;
            var3 = true;
            if(!(var2 === var10)) { _fun0026_ip = 102; continue _fun0026 }
case 104:
            var2 = _closure1_slot45;
            var2 = var2.bind(var8)(var10);
            var3 = true;
case 102:
            var11 = var7.bind(var8)();
            var2 = var11.done;
            var4 = var11;
            var1 = var3;
            if(!var2) { _fun0026_ip = 92; continue _fun0026 }
case 88:
            return var1;
        }
    };
    var5['CHANNEL_UPDATES'] = var12;
    var5['GUILD_ROLE_CREATE'] = var11;
    var5['GUILD_ROLE_UPDATE'] = var11;
    var5['GUILD_ROLE_DELETE'] = var11;
    var5['IMPERSONATE_UPDATE'] = var11;
    var5['IMPERSONATE_STOP'] = var11;
    var11 = function handleVoiceChannelSelect(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var5 = null;
            if(!(var5 == var6)) { _fun0027_ip = 94; continue _fun0027 }
case 36:
            var1 = _closure1_slot32;
            if(!(var5 == var1)) { _fun0027_ip = 32; continue _fun0027 }
case 94:
            var4 = _closure1_slot47;
            var3 = _closure1_slot16;
            var1 = var3.getChannel;
            var3 = var1.bind(var3)(var6);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var6);
            _fun0027_ip = 13; continue _fun0027;
case 32:
            var4 = _closure1_slot47;
            var6 = _closure1_slot16;
            var3 = var6.getChannel;
            var2 = _closure1_slot32;
            var3 = var3.bind(var6)(var2);
            var2 = undefined;
            var1 = var4.bind(var2)(var3, var5);
case 13:
            return var1;
        }
    };
    var5['VOICE_CHANNEL_SELECT'] = var11;
    var11 = function handleVoiceChannelStatusUpdate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var4 = _closure1_slot16;
            var3 = var4.getBasicChannel;
            var1 = arg1;
            var1 = var1.id;
            var1 = var3.bind(var4)(var1);
            var5 = null;
            var3 = var5 != var1;
            if(!var3) { _fun0028_ip = 92; continue _fun0028 }
case 105:
            var4 = var1.guild_id;
            var3 = var5 != var4;
case 92:
            if(!var3) { _fun0028_ip = 106; continue _fun0028 }
case 91:
            var3 = _closure1_slot45;
            var2 = var1.guild_id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 106:
            var1 = undefined;
            return var1;
        }
    };
    var5['VOICE_CHANNEL_STATUS_UPDATE'] = var11;
    var6 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                var6 = var1.channelId;
                var5 = var1.sessionId;
                var4 = _closure1_slot15;
                var1 = var4.getSessionId;
                var4 = var1.bind(var4)();
                var1 = var3;
                if(!(var4 === var5)) { _fun0029_ip = 104; continue _fun0029 }
case 107:
                var5 = _closure1_slot47;
                var4 = _closure1_slot16;
                var2 = var4.getChannel;
                var4 = var2.bind(var4)(var6);
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var6);
                if(var2) { _fun0029_ip = 108; continue _fun0029 }
case 3:
                var2 = var3;
case 108:
                var1 = var2;
case 104:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5['VOICE_STATE_UPDATES'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var23 = var6;
    var21 = var5;
    var5 = new var23[var10](var22, var21, var20);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'stores/GuildChannelStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['GUILD_SELECTABLE_CHANNELS_KEY'] = var4;
    var3['GUILD_VOCAL_CHANNELS_KEY'] = var2;
    return var1;
})();