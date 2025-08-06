// app/stores/SelectedChannelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            _closure1_slot34 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot34 = var1;
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
            var9 = _closure1_slot36;
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
            var7 = _closure1_slot36;
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
    var _closure1_slot35 = var1;
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
    var _closure1_slot36 = var1;
    var1 = function stringifyGuildId(arg1) {
        var1 = global;
        var3 = var1.String;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot37 = var1;
    var1 = function saveStorage() {
        var9 = _closure1_slot0;
        var10 = _closure1_slot3;
        var1 = 15;
        var2 = var10[var1];
        var1 = undefined;
        var2 = var9.bind(var1)(var2);
        var5 = var2.Storage;
        var4 = var5.set;
        var3 = _closure1_slot29;
        var2 = {};
        var7 = _closure1_slot24;
        var2['selectedChannelId'] = var7;
        var7 = _closure1_slot26;
        var2['selectedVoiceChannelId'] = var7;
        var7 = _closure1_slot25;
        var2['lastChannelFollowingDestination'] = var7;
        var7 = _closure1_slot27;
        var2['lastConnectedTime'] = var7;
        var7 = _closure1_slot30;
        var2['selectedChannelIds'] = var7;
        var7 = _closure1_slot32;
        var2['mostRecentSelectedTextChannelIds'] = var7;
        var12 = _closure1_slot1;
        var11 = 16;
        var7 = var10[var11];
        var8 = var12.bind(var1)(var7);
        var7 = _closure1_slot30;
        var8 = var8.bind(var1)(var7);
        var7 = var8.values;
        var8 = var7.bind(var8)();
        var7 = var8.concat;
        var11 = var10[var11];
        var12 = var12.bind(var1)(var11);
        var11 = var12.values;
        var6 = _closure1_slot32;
        var6 = var11.bind(var12)(var6);
        var8 = var7.bind(var8)(var6);
        var7 = var8.filter;
        var6 = 17;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.isNotNullish;
        var7 = var7.bind(var8)(var6);
        var6 = var7.uniq;
        var8 = var6.bind(var7)();
        var7 = var8.filter;
        var6 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot12;
                var1 = var2.getBasicChannel;
                var3 = var1.bind(var2)(var5);
                var2 = _closure1_slot33;
                var1 = var2.has;
                var1 = var1.bind(var2)(var5);
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 38:
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0005_ip = 66; continue _fun0005 }
 47:
                var5 = _closure1_slot10;
                var4 = var5.has;
                var3 = var3.type;
                var2 = var4.bind(var5)(var3);
 66:
                var1 = var2;
 69:
                return var1;
            }
        };
        var7 = var7.bind(var8)(var6);
        var6 = var7.value;
        var6 = var6.bind(var7)();
        var2['knownThreadIds'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function findDefaultChannelId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 31; continue _fun0006 }
 9:
            var3 = _closure1_slot13;
            var1 = var3.getDefaultChannel;
            var1 = var1.bind(var3)(var4);
            if(!(var2 == var1)) { _fun0006_ip = 35; continue _fun0006 }
 31:
            var2 = undefined;
            return var2;
 35:
            var1 = var1.id;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = function setMostRecentTextChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 122; continue _fun0007 }
 12:
            if(!(var1 != var3)) { _fun0007_ip = 122; continue _fun0007 }
 16:
            var5 = _closure1_slot32;
            var5 = var5[var4];
            if(!(var5 !== var3)) { _fun0007_ip = 118; continue _fun0007 }
 31:
            var6 = _closure1_slot12;
            var5 = var6.getChannel;
            var7 = var5.bind(var6)(var3);
            var5 = var1 != var7;
            if(!var5) { _fun0007_ip = 68; continue _fun0007 }
 52:
            var9 = _closure1_slot9;
            var8 = var7.type;
            var6 = undefined;
            var5 = var9.bind(var6)(var8);
 68:
            var6 = var1 == var7;
            var1 = undefined;
            if(var6) { _fun0007_ip = 87; continue _fun0007 }
 77:
            var6 = var7.getGuildId;
            var1 = var6.bind(var7)();
 87:
            var5 = !var5;
            if(var5) { _fun0007_ip = 100; continue _fun0007 }
 93:
            var1 = var1 === var4;
            var5 = !var1;
 100:
            var1 = !var5;
            if(var5) { _fun0007_ip = 116; continue _fun0007 }
 106:
            var2 = _closure1_slot32;
            var2[var4] = var3;
            var1 = true;
 116:
            return var1;
 118:
            var1 = false;
            return var1;
 122:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function cleanupPreviouslySelected() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = false;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot14;
            var2 = var4.getGuildsArray;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 16;
            var8 = var7[var2];
            var4 = undefined;
            var11 = var6.bind(var4)(var8);
            var10 = var11.each;
            var9 = _closure1_slot30;
            var8 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var6 = arg1;
                    var2 = arg2;
                    var1 = null;
                    var1 = var1 != var6;
                    if(!var1) { _fun0009_ip = 78; continue _fun0009 }
 15:
                    var5 = _closure1_slot12;
                    var3 = var5.hasChannel;
                    var3 = var3.bind(var5)(var6);
                    if(var3) { _fun0009_ip = 44; continue _fun0009 }
 36:
                    var5 = _closure1_slot24;
                    var3 = var6 === var5;
 44:
                    if(var3) { _fun0009_ip = 61; continue _fun0009 }
 47:
                    var7 = _closure1_slot33;
                    var5 = var7.has;
                    var3 = var5.bind(var7)(var6);
 61:
                    if(var3) { _fun0009_ip = 75; continue _fun0009 }
 64:
                    var5 = _closure1_slot21;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var6);
 75:
                    var1 = var3;
 78:
                    if(var1) { _fun0009_ip = 109; continue _fun0009 }
 81:
                    var3 = _closure1_slot30;
                    var3 = delete var3[var2];
                    var1 = _closure1_slot31;
                    var1 = delete var1[var2];
                    var1 = true;
                    _closure2_slot0 = var1;
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var9, var8);
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.each;
            var4 = _closure1_slot32;
            var2 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = arg1;
                    var1 = null;
                    var1 = var1 != var5;
                    if(!var1) { _fun0010_ip = 50; continue _fun0010 }
 12:
                    var4 = _closure1_slot12;
                    var2 = var4.hasChannel;
                    var2 = var2.bind(var4)(var5);
                    if(var2) { _fun0010_ip = 47; continue _fun0010 }
 33:
                    var4 = _closure1_slot33;
                    var3 = var4.has;
                    var2 = var3.bind(var4)(var5);
 47:
                    var1 = var2;
 50:
                    if(var1) { _fun0010_ip = 76; continue _fun0010 }
 53:
                    var2 = _closure1_slot32;
                    var1 = arg2;
                    var1 = delete var2[var1];
                    var1 = true;
                    _closure2_slot0 = var1;
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var4, var2);
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var4 = _closure1_slot30;
                    var3 = var1.id;
                    var4 = var4[var3];
                    var5 = _closure1_slot32;
                    var3 = var1.id;
                    var5 = var5[var3];
                    var3 = null;
                    if(!(var3 == var5)) { _fun0011_ip = 55; continue _fun0011 }
 38:
                    var3 = _closure1_slot40;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var4 = _closure1_slot27;
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0008_ip = 161; continue _fun0008 }
 126:
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var6 = var5.bind(var6)();
            var5 = _closure1_slot27;
            var6 = var6 - var5;
            var5 = 300000;
            var4 = var6 >= var5;
 161:
            if(!var4) { _fun0008_ip = 174; continue _fun0008 }
 164:
            var _closure1_slot26 = var2;
            var2 = true;
            _closure2_slot0 = var2;
 174:
            var1 = _closure2_slot0;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function navigateAwayFromChannel(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var5 = arg1;
            var7 = arg2;
            var3 = _closure1_slot33;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var5);
            var3 = null;
            var6 = var7;
            if(!(var3 == var6)) { _fun0012_ip = 75; continue _fun0012 }
 32:
            var4 = _closure1_slot17;
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            var8 = _closure1_slot30;
            var9 = _closure1_slot37;
            var4 = undefined;
            var4 = var9.bind(var4)(var2);
            var4 = var8[var4];
            var6 = var7;
            if(!(var4 === var5)) { _fun0012_ip = 75; continue _fun0012 }
 72:
            var6 = var2;
 75:
            var4 = _closure1_slot14;
            var2 = var4.getGuild;
            var2 = var2.bind(var4)(var6);
            var4 = _closure1_slot26;
            var2 = false;
            if(!(var4 === var5)) { _fun0012_ip = 105; continue _fun0012 }
 99:
            _closure1_slot26 = var3;
            var2 = true;
 105:
            if(!var2) { _fun0012_ip = 118; continue _fun0012 }
 108:
            var2 = _closure1_slot38;
            var1 = undefined;
            var1 = var2.bind(var1)();
 118:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var5 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = var1.channel;
        var5 = _closure1_slot42;
        var4 = var1.id;
        var3 = var1.guild_id;
        var2 = var1.parent_id;
        var1 = undefined;
        var2 = var5.bind(var1)(var4, var3, var2);
        return var1;
    };
    var9 = global;
    var11 = var9.Object;
    var10 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.isGuildTextChannelType;
    var _closure1_slot9 = var10;
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.ChannelTypes;
    var _closure1_slot18 = var10;
    var10 = var4.ME;
    var _closure1_slot19 = var10;
    var10 = var4.Permissions;
    var _closure1_slot20 = var10;
    var4 = var4.Routes;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.isGuildHomeChannel;
    var _closure1_slot21 = var4;
    var4 = 'SelectedChannelStore';
    var _closure1_slot29 = var4;
    var10 = {};
    var _closure1_slot30 = var10;
    var10 = {};
    var _closure1_slot31 = var10;
    var10 = {};
    var _closure1_slot32 = var10;
    var9 = var9.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot33 = var9;
    var9 = 19;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var10 = var9.Store;
    var9 = function(arg1) {
        var4 = function SelectedChannelStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot34;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 69; continue _fun0013 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 105; continue _fun0013;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var9 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = _closure1_slot29;
                var3 = var4.bind(var5)(var3);
                var5 = null;
                if(!(var5 == var3)) { _fun0014_ip = 113; continue _fun0014 }
 54:
                var4 = {};
                var6 = _closure1_slot24;
                var4['selectedChannelId'] = var6;
                var6 = _closure1_slot26;
                var4['selectedVoiceChannelId'] = var6;
                var6 = _closure1_slot25;
                var4['lastChannelFollowingDestination'] = var6;
                var6 = _closure1_slot27;
                var4['lastConnectedTime'] = var6;
                var6 = _closure1_slot30;
                var4['selectedChannelIds'] = var6;
                var6 = _closure1_slot32;
                var4['mostRecentSelectedTextChannelIds'] = var6;
                var3 = var4;
 113:
                var4 = var3.knownThreadIds;
                if(!(var5 != var4)) { _fun0014_ip = 161; continue _fun0014 }
 123:
                var4 = global;
                var7 = var4.Set;
                var15 = var3.knownThreadIds;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var16 = var6;
                var4 = new var16[var7](var15, var14);
                var4 = var4 instanceof Object ? var4 : var6;
                _closure1_slot33 = var4;
 161:
                var4 = var3.selectedVoiceChannelId;
                _closure1_slot26 = var4;
                var4 = var3.lastChannelFollowingDestination;
                var _closure1_slot25 = var4;
                var4 = var3.lastConnectedTime;
                var _closure1_slot27 = var4;
                var4 = var3.mostRecentSelectedTextChannelIds;
                if(!(var5 == var4)) { _fun0014_ip = 203; continue _fun0014 }
 201:
                var4 = {};
 203:
                _closure1_slot32 = var4;
                var4 = var3.selectedChannelIds;
                if(!(var5 != var4)) { _fun0014_ip = 227; continue _fun0014 }
 217:
                var3 = var3.selectedChannelIds;
                _closure1_slot30 = var3;
 227:
                var4 = var9.mustEmitChanges;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var2 = arg1;
                        var3 = var2.type;
                        var1 = 'CONNECTION_OPEN';
                        var1 = var1 !== var3;
                        if(!var1) { _fun0015_ip = 32; continue _fun0015 }
 19:
                        var3 = var2.type;
                        var2 = 'VOICE_STATE_UPDATES';
                        var1 = var2 !== var3;
 32:
                        return var1;
                    }
                };
                var3 = var4.bind(var9)(var3);
                var8 = var9.waitFor;
                var15 = _closure1_slot14;
                var14 = _closure1_slot12;
                var13 = _closure1_slot17;
                var12 = _closure1_slot13;
                var11 = _closure1_slot15;
                var10 = _closure1_slot16;
                var16 = var9;
                var2 = var16[var8](var15, var14, var13, var12, var11, var10, var9);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var8 = arg1;
                var1 = arguments[1];
                var5 = undefined;
                if(!(var1 === var5)) { _fun0016_ip = 14; continue _fun0016 }
 12:
                var1 = true;
 14:
                var4 = _closure1_slot37;
                var6 = _closure1_slot19;
                var7 = null;
                var2 = null;
                if(!(var8 !== var6)) { _fun0016_ip = 66; continue _fun0016 }
 33:
                if(!(var7 == var8)) { _fun0016_ip = 51; continue _fun0016 }
 37:
                var9 = _closure1_slot17;
                var6 = var9.getGuildId;
                var8 = var6.bind(var9)();
 51:
                var9 = var7 != var8;
                var6 = null;
                if(!var9) { _fun0016_ip = 63; continue _fun0016 }
 60:
                var6 = var8;
 63:
                var2 = var6;
 66:
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot30;
                var6 = var2[var4];
                if(var1) { _fun0016_ip = 87; continue _fun0016 }
 82:
                var1 = var6;
                _fun0016_ip = 106; continue _fun0016;
 87:
                var2 = var6;
                if(!(var7 == var6)) { _fun0016_ip = 103; continue _fun0016 }
 94:
                var3 = _closure1_slot39;
                var2 = var3.bind(var5)(var4);
 103:
                var1 = var2;
 106:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getVoiceChannelId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var3 = _closure1_slot15;
                var1 = var3.isSupported;
                var3 = var1.bind(var3)();
                var1 = null;
                if(!var3) { _fun0017_ip = 26; continue _fun0017 }
 22:
                var1 = _closure1_slot26;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMostRecentSelectedTextChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 == var4;
                var1 = null;
                if(var3) { _fun0018_ip = 40; continue _fun0018 }
 14:
                var3 = _closure1_slot32;
                var3 = var3[var4];
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0018_ip = 37; continue _fun0018 }
 34:
                var2 = var3;
 37:
                var1 = var2;
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getCurrentlySelectedChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0019_ip = 18; continue _fun0019 }
 9:
                var1 = _closure1_slot24;
                _fun0019_ip = 29; continue _fun0019;
 18:
                var2 = _closure1_slot30;
                var1 = var2[var3];
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastSelectedChannelId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0020_ip = 18; continue _fun0020 }
 9:
                var1 = _closure1_slot23;
                _fun0020_ip = 29; continue _fun0020;
 18:
                var2 = _closure1_slot31;
                var1 = var2[var3];
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLastSelectedChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot31;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getLastChannelFollowingDestination';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot25;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var10);
    var9['displayName'] = var4;
    var4 = 20;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var1 = var1.sessionId;
            var _closure1_slot22 = var1;
            var3 = _closure1_slot26;
            var1 = null;
            if(!(var1 != var3)) { _fun0021_ip = 124; continue _fun0021 }
 26:
            var5 = _closure1_slot12;
            var4 = var5.getChannel;
            var3 = _closure1_slot26;
            var7 = var4.bind(var5)(var3);
            var3 = var1 != var7;
            if(!var3) { _fun0021_ip = 117; continue _fun0021 }
 51:
            var6 = _closure1_slot16;
            var5 = var6.can;
            var9 = _closure1_slot2;
            var8 = _closure1_slot3;
            var4 = 18;
            var8 = var8[var4];
            var4 = undefined;
            var10 = var9.bind(var4)(var8);
            var9 = var10.combine;
            var4 = _closure1_slot20;
            var8 = var4.VIEW_CHANNEL;
            var4 = var4.CONNECT;
            var4 = var9.bind(var10)(var8, var4);
            var3 = var5.bind(var6)(var4, var7);
 117:
            if(var3) { _fun0021_ip = 124; continue _fun0021 }
 120:
            _closure1_slot26 = var1;
 124:
            var3 = _closure1_slot41;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0021_ip = 145; continue _fun0021 }
 137:
            var2 = _closure1_slot38;
            var2 = var2.bind(var1)();
 145:
            return var1;
        }
    };
    var4['CONNECTION_OPEN'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.sessionId;
        _closure1_slot22 = var3;
        var3 = var1.selectedVoiceChannelId;
        _closure1_slot26 = var3;
        var3 = {};
        _closure1_slot30 = var3;
        var3 = {};
        _closure1_slot31 = var3;
        var3 = var1.selectedChannelId;
        var _closure1_slot24 = var3;
        var5 = _closure1_slot30;
        var4 = var1.selectedGuildId;
        var3 = var1.selectedChannelId;
        var5[var4] = var3;
        var5 = _closure1_slot40;
        var4 = var1.selectedGuildId;
        var3 = _closure1_slot24;
        var1 = undefined;
        var3 = var5.bind(var1)(var4, var3);
        var2 = _closure1_slot41;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleConnectionClosed() {
        var1 = null;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_CLOSED'] = var10;
    var10 = function handleChannelSelect(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var5 = var1.channelId;
            var1 = undefined;
            if(!(var1 !== var4)) { _fun0022_ip = 165; continue _fun0022 }
 22:
            var6 = null;
            if(!(var6 == var5)) { _fun0022_ip = 40; continue _fun0022 }
 28:
            var2 = _closure1_slot39;
            var5 = var2.bind(var1)(var4);
 40:
            var3 = _closure1_slot24;
            var3 = var6 != var3;
            if(!var3) { _fun0022_ip = 62; continue _fun0022 }
 54:
            var6 = _closure1_slot24;
            var3 = var5 !== var6;
 62:
            if(!var3) { _fun0022_ip = 73; continue _fun0022 }
 65:
            var3 = _closure1_slot24;
            var _closure1_slot23 = var3;
 73:
            _closure1_slot24 = var5;
            var3 = _closure1_slot40;
            var3 = var3.bind(var1)(var4, var5);
            var6 = _closure1_slot30;
            var3 = _closure1_slot37;
            var3 = var3.bind(var1)(var4);
            var3 = var6[var3];
            if(!(var3 !== var5)) { _fun0022_ip = 155; continue _fun0022 }
 108:
            var7 = _closure1_slot31;
            var3 = _closure1_slot37;
            var6 = var3.bind(var1)(var4);
            var8 = _closure1_slot30;
            var5 = var3.bind(var1)(var4);
            var5 = var8[var5];
            var7[var6] = var5;
            var5 = _closure1_slot30;
            var4 = var3.bind(var1)(var4);
            var3 = _closure1_slot24;
            var5[var4] = var3;
 155:
            var2 = _closure1_slot38;
            var2 = var2.bind(var1)();
            return var1;
 165:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var10;
    var10 = function handleChannelCreate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = var2.type;
            var3 = _closure1_slot18;
            var3 = var3.GUILD_ANNOUNCEMENT;
            if(!(var3 !== var4)) { _fun0023_ip = 44; continue _fun0023 }
 30:
            var3 = _closure1_slot18;
            var3 = var3.GUILD_TEXT;
            if(!(var3 === var4)) { _fun0023_ip = 102; continue _fun0023 }
 44:
            var3 = var2.guild_id;
            var4 = null;
            var5 = var4 != var3;
            if(!var5) { _fun0023_ip = 70; continue _fun0023 }
 58:
            var6 = _closure1_slot32;
            var6 = var6[var3];
            var5 = var4 == var6;
 70:
            if(!var5) { _fun0023_ip = 86; continue _fun0023 }
 73:
            var5 = _closure1_slot32;
            var2 = var2.id;
            var5[var3] = var2;
 86:
            if(!(var4 != var3)) { _fun0023_ip = 102; continue _fun0023 }
 90:
            var2 = _closure1_slot30;
            var2 = var2[var3];
            if(!(var4 != var2)) { _fun0023_ip = 106; continue _fun0023 }
 102:
            var2 = false;
            return var2;
 106:
            var2 = _closure1_slot30;
            var4 = _closure1_slot39;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var2[var3] = var1;
            var1 = true;
            return var1;
        }
    };
    var4['CHANNEL_CREATE'] = var10;
    var4['CHANNEL_DELETE'] = var5;
    var10 = function handleChannelUpdates(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var1 = arg1;
            var3 = var1.channels;
            var2 = _closure1_slot35;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0024_ip = 114; continue _fun0024 }
 35:
            var2 = var3.value;
            var6 = var2.isScheduledForDeletion;
            var6 = var6.bind(var2)();
            if(!var6) { _fun0024_ip = 99; continue _fun0024 }
 53:
            var8 = _closure1_slot10;
            var7 = var8.has;
            var6 = var2.type;
            var6 = var7.bind(var8)(var6);
            var8 = _closure1_slot42;
            var7 = var2.id;
            var6 = var2.guild_id;
            var2 = var2.parent_id;
            var2 = var8.bind(var1)(var7, var6, var2);
 99:
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0024_ip = 35; continue _fun0024 }
 114:
            return var1;
        }
    };
    var4['CHANNEL_UPDATES'] = var10;
    var4['THREAD_DELETE'] = var5;
    var5 = function handleGuildCreate(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var4 = _closure1_slot30;
            var2 = var3.id;
            var4 = var4[var2];
            var2 = null;
            if(!(var2 == var4)) { _fun0025_ip = 82; continue _fun0025 }
 30:
            var5 = _closure1_slot39;
            var4 = var3.id;
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var6 = _closure1_slot30;
            var4 = var3.id;
            var6[var4] = var5;
            var4 = _closure1_slot40;
            var3 = var3.id;
            var3 = var4.bind(var2)(var3, var5);
            var1 = _closure1_slot38;
            var1 = var1.bind(var2)();
 82:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_CREATE'] = var5;
    var5 = function handleGuildDelete(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var3 = var1.id;
            var2 = var1.unavailable;
            var5 = _closure1_slot26;
            var4 = _closure1_slot30;
            var4 = var4[var3];
            if(!(var5 === var4)) { _fun0026_ip = 44; continue _fun0026 }
 38:
            var4 = null;
            _closure1_slot26 = var4;
 44:
            if(var2) { _fun0026_ip = 75; continue _fun0026 }
 47:
            var2 = _closure1_slot32;
            var2 = delete var2[var3];
            var2 = _closure1_slot30;
            var2 = delete var2[var3];
            var2 = _closure1_slot38;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 75:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var5;
    var5 = function handleVoiceChannelSelect(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var3 = null;
            if(!(var3 == var2)) { _fun0027_ip = 115; continue _fun0027 }
 14:
            var6 = _closure1_slot12;
            var5 = var6.getChannel;
            var4 = _closure1_slot26;
            var6 = var5.bind(var6)(var4);
            var7 = var3 == var6;
            var5 = undefined;
            var4 = undefined;
            if(var7) { _fun0027_ip = 51; continue _fun0027 }
 46:
            var4 = var6.guild_id;
 51:
            var3 = var3 != var4;
            if(!var3) { _fun0027_ip = 76; continue _fun0027 }
 58:
            var7 = _closure1_slot17;
            var6 = var7.getGuildId;
            var6 = var6.bind(var7)();
            var3 = var4 !== var6;
 76:
            if(!var3) { _fun0027_ip = 95; continue _fun0027 }
 79:
            var6 = _closure1_slot30;
            var7 = var6[var4];
            var6 = _closure1_slot26;
            var3 = var7 === var6;
 95:
            if(!var3) { _fun0027_ip = 115; continue _fun0027 }
 98:
            var3 = _closure1_slot30;
            var1 = _closure1_slot39;
            var1 = var1.bind(var5)(var4);
            var3[var4] = var1;
 115:
            _closure1_slot26 = var2;
            var2 = _closure1_slot38;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        }
    };
    var4['VOICE_CHANNEL_SELECT'] = var5;
    var5 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var4 = arg2;
                var3 = var4.sessionId;
                var2 = _closure1_slot22;
                if(!(var3 !== var2)) { _fun0028_ip = 207; continue _fun0028 }
 23:
                var3 = var4.userId;
                var5 = _closure1_slot11;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if(!(var3 === var2)) { _fun0028_ip = 202; continue _fun0028 }
 49:
                var2 = global;
                var5 = var2.clearInterval;
                var2 = _closure1_slot28;
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var _closure1_slot28 = var3;
                var2 = 0;
                _closure1_slot27 = var2;
                var6 = _closure1_slot12;
                var5 = var6.getChannel;
                var2 = _closure1_slot26;
                var6 = var5.bind(var6)(var2);
                var2 = null;
                var5 = var2 == var6;
                var7 = undefined;
                if(var5) { _fun0028_ip = 117; continue _fun0028 }
 107:
                var5 = var6.getGuildId;
                var7 = var5.bind(var6)();
 117:
                var8 = _closure1_slot12;
                var6 = var8.getChannel;
                var5 = var4.channelId;
                var8 = var6.bind(var8)(var5);
                var5 = var2 == var8;
                var6 = undefined;
                if(var5) { _fun0028_ip = 155; continue _fun0028 }
 145:
                var5 = var8.getGuildId;
                var6 = var5.bind(var8)();
 155:
                var5 = var2 != var7;
                if(!var5) { _fun0028_ip = 166; continue _fun0028 }
 162:
                var5 = var6 === var7;
 166:
                if(var5) { _fun0028_ip = 182; continue _fun0028 }
 169:
                var7 = _closure1_slot26;
                var6 = var4.channelId;
                var5 = var7 === var6;
 182:
                if(!var5) { _fun0028_ip = 189; continue _fun0028 }
 185:
                _closure1_slot26 = var2;
 189:
                var2 = _closure1_slot38;
                var2 = var2.bind(var3)();
                _fun0028_ip = 362; continue _fun0028;
 202:
                var2 = arg1;
                return var2;
 207:
                var3 = global;
                var6 = var3.clearInterval;
                var5 = _closure1_slot28;
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var7 = _closure1_slot12;
                var6 = var7.getChannel;
                var5 = _closure1_slot26;
                var8 = var6.bind(var7)(var5);
                var5 = null;
                var6 = var5 == var8;
                var7 = undefined;
                if(var6) { _fun0028_ip = 265; continue _fun0028 }
 255:
                var6 = var8.getGuildId;
                var7 = var6.bind(var8)();
 265:
                var6 = var4.guildId;
                var6 = var6 !== var7;
                if(!var6) { _fun0028_ip = 286; continue _fun0028 }
 277:
                var7 = var4.channelId;
                var6 = var5 == var7;
 286:
                if(var6) { _fun0028_ip = 298; continue _fun0028 }
 289:
                var4 = var4.channelId;
                _closure1_slot26 = var4;
 298:
                var6 = var3.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                _closure1_slot27 = var4;
                var4 = _closure1_slot26;
                if(!(var5 != var4)) { _fun0028_ip = 354; continue _fun0028 }
 325:
                var5 = var3.setInterval;
                var4 = function() {
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    _closure1_slot27 = var2;
                    var2 = _closure1_slot38;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = 60000;
                var3 = var5.bind(var2)(var4, var3);
                _closure1_slot28 = var3;
 354:
                var1 = _closure1_slot38;
                var1 = var1.bind(var2)();
 362:
                var1 = true;
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['VOICE_STATE_UPDATES'] = var5;
    var5 = function handleChannelFollowingDestinationUpdate(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.guildId;
            var5 = _closure1_slot25;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0029_ip = 42; continue _fun0029 }
 29:
            var5 = _closure1_slot25;
            var5 = var5.channelId;
            var2 = var4 === var5;
 42:
            if(var2) { _fun0029_ip = 69; continue _fun0029 }
 45:
            var2 = {};
            var2['channelId'] = var4;
            var2['guildId'] = var3;
            _closure1_slot25 = var2;
            var2 = _closure1_slot38;
            var1 = undefined;
            var1 = var2.bind(var1)();
 69:
            var1 = undefined;
            return var1;
        }
    };
    var4['CHANNEL_FOLLOWER_CREATED'] = var5;
    var5 = function handleLogout() {
        var1 = {};
        _closure1_slot30 = var1;
        var3 = null;
        _closure1_slot24 = var3;
        var1 = undefined;
        _closure1_slot23 = var1;
        var4 = {};
        _closure1_slot32 = var4;
        var4 = {};
        _closure1_slot25 = var4;
        _closure1_slot26 = var3;
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var3 = 15;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var4 = var3.Storage;
        var3 = var4.remove;
        var2 = _closure1_slot29;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/SelectedChannelStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function findFirstVoiceChannelId(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var4 = _closure1_slot12;
            var3 = var4.getMutableBasicGuildChannelsForGuild;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot18;
                var1 = var1.GUILD_VOICE;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var4)(var5, var2);
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0030_ip = 76; continue _fun0030 }
 71:
            var1 = var2.id;
 76:
            return var1;
        }
    };
    var3['findFirstVoiceChannelId'] = var2;
    return var1;
})();