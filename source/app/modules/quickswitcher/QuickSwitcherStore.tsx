// app/modules/quickswitcher/QuickSwitcherStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
    var12 = function handleConnectionOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot17;
            var1 = var3.getGuildCount;
            var3 = var1.bind(var3)();
            var1 = 3;
            var1 = var3 >= var1;
            if(var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 20;
            var5 = var3[var4];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.size;
            var7 = _closure1_slot11;
            var3 = var7.getMutablePrivateChannels;
            var3 = var3.bind(var7)();
            var3 = var5.bind(var6)(var3);
            var1 = var3 >= var4;
case 39:
            _closure1_slot29 = var1;
            var1 = new Array(0);
            _closure1_slot34 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2 = function generateResultFromId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = arg1;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var4 = var5 == var2;
            var1 = null;
            if(var4) { _fun0006_ip = 3; continue _fun0006 }
case 41:
            var4 = _closure1_slot30;
            if(!(var5 != var4)) { _fun0006_ip = 34; continue _fun0006 }
case 42:
            var4 = _closure1_slot30;
            var3 = var2.type;
            var1 = null;
            if(!(var4 === var3)) { _fun0006_ip = 3; continue _fun0006 }
case 34:
            var1 = var2;
case 3:
            return var1;
        }
    };
    var _closure1_slot41 = var2;
    var1 = function generateInitialResults() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot21;
            var3 = var4.getGuildId;
            var3 = var3.bind(var4)();
            var13 = null;
            var5 = var13 != var3;
            var4 = undefined;
            var17 = undefined;
            if(!var5) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var17 = var3;
case 43:
            var5 = _closure1_slot20;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            var6 = var13 != var3;
            var5 = undefined;
            if(!var6) { _fun0007_ip = 11; continue _fun0007 }
case 45:
            var5 = var3;
case 11:
            var _closure2_slot0 = var5;
            var6 = _closure1_slot30;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 19;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            if(!(var3 !== var6)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.APPLICATION;
            if(!(var3 !== var6)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GUILD;
            if(!(var3 !== var6)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.TEXT_CHANNEL;
            if(!(var3 !== var6)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.VOICE_CHANNEL;
            if(!(var3 !== var6)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var11 = new Array(0);
            var7 = global;
            var3 = var7.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var24 = var6;
            var3 = new var24[var3](var23);
            var12 = var3 instanceof Object ? var3 : var6;
            var _closure2_slot2 = var12;
            var6 = function getDrafts(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var5 = _closure1_slot12;
                var4 = var5.getRecentlyEditedDrafts;
                var3 = _closure1_slot13;
                var3 = var3.ChannelMessage;
                var4 = var4.bind(var5)(var3);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.channelId;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var5);
                        if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                        var3 = _closure1_slot41;
                        var6 = var3.bind(var1)(var5);
                        var3 = null;
                        if(!(var3 != var6)) { _fun0008_ip = 56; continue _fun0008 }
case 58:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var2 = {};
                        var2['record'] = var6;
                        var2['channelId'] = var5;
                        var2 = var3.bind(var4)(var2);
case 56:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 === var1;
                    if(var1) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                    var5 = _closure1_slot35;
                    var3 = var5.includes;
                    var1 = var3.bind(var5)(var4);
case 59:
                    if(var1) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
case 61:
                    return var1;
                }
            };
            var6 = var6.bind(var4)(var3);
            var3 = var6.length;
            var9 = 0;
            if(!(var3 > var9)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
            var10 = var11.push;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var8];
            var15 = var19.bind(var4)(var3);
            var14 = var15.createHeaderResult;
            var3 = 23;
            var16 = var20[var3];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.4B63jZ;
            var3 = var16.bind(var18)(var3);
            var3 = var14.bind(var15)(var3);
            var3 = var10.bind(var11)(var3);
            var3 = _closure1_slot39;
            var10 = var3.bind(var4)(var6);
            var6 = var10.bind(var4)();
            var3 = var6.done;
            if(var3) { _fun0007_ip = 63; continue _fun0007 }
case 65:
            var3 = var6.value;
            var15 = var12.add;
            var14 = var3.channelId;
            var14 = var15.bind(var12)(var14);
            var14 = var11.push;
            var3 = var3.record;
            var3 = var14.bind(var11)(var3);
            var14 = var10.bind(var4)();
            var3 = var14.done;
            var6 = var14;
            if(!var3) { _fun0007_ip = 65; continue _fun0007 }
case 63:
            var6 = _closure1_slot19;
            var3 = var6.getMentionChannelIds;
            var10 = var3.bind(var6)();
            var6 = var10.filter;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0010_ip = 62; continue _fun0010 }
case 60:
                    var5 = _closure1_slot35;
                    var3 = var5.includes;
                    var3 = var3.bind(var5)(var4);
                    var1 = !var3;
case 62:
                    if(!var1) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
case 66:
                    return var1;
                }
            };
            var10 = var6.bind(var10)(var3);
            var6 = var10.map;
            var3 = function(arg1) {
                var3 = _closure1_slot41;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var10 = var6.bind(var10)(var3);
            var6 = var10.filter;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var3 = 24;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var6 = var6.bind(var10)(var3);
            var3 = var6.reverse;
            var6 = var3.bind(var6)();
            var3 = var6.length;
            if(!(var3 > var9)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var10 = var11.push;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var8];
            var15 = var19.bind(var4)(var3);
            var14 = var15.createHeaderResult;
            var3 = 23;
            var16 = var20[var3];
            var16 = var19.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.61Df13;
            var3 = var16.bind(var18)(var3);
            var3 = var14.bind(var15)(var3);
            var3 = var10.bind(var11)(var3);
            var3 = _closure1_slot39;
            var10 = var3.bind(var4)(var6);
            var6 = var10.bind(var4)();
            var3 = var6.done;
            if(var3) { _fun0007_ip = 68; continue _fun0007 }
case 70:
            var14 = var6.value;
            var15 = var12.add;
            var3 = var14.record;
            var3 = var3.id;
            var3 = var15.bind(var12)(var3);
            var3 = var11.push;
            var3 = var3.bind(var11)(var14);
            var14 = var10.bind(var4)();
            var3 = var14.done;
            var6 = var14;
            if(!var3) { _fun0007_ip = 70; continue _fun0007 }
case 68:
            var3 = var11;
            if(!(var13 != var17)) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var10 = _closure1_slot14;
            var6 = var10.getSelectableChannelIds;
            var14 = var6.bind(var10)(var17);
            var10 = var14.filter;
            var6 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var8 = arg1;
                    var3 = _closure1_slot11;
                    var1 = var3.getChannel;
                    var4 = var1.bind(var3)(var8);
                    var5 = null;
                    var1 = var5 == var4;
                    if(var1) { _fun0011_ip = 67; continue _fun0011 }
case 73:
                    var3 = _closure2_slot0;
                    var1 = var8 === var3;
case 67:
                    if(var1) { _fun0011_ip = 66; continue _fun0011 }
case 58:
                    var6 = _closure1_slot35;
                    var3 = var6.includes;
                    var1 = var3.bind(var6)(var8);
case 66:
                    if(var1) { _fun0011_ip = 39; continue _fun0011 }
case 74:
                    var6 = _closure2_slot2;
                    var3 = var6.has;
                    var1 = var3.bind(var6)(var8);
case 39:
                    if(var1) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                    var7 = _closure1_slot22;
                    var6 = var7.isChannelMuted;
                    var3 = var4.guild_id;
                    var1 = var6.bind(var7)(var3, var8);
case 75:
                    if(var1) { _fun0011_ip = 77; continue _fun0011 }
case 78:
                    var3 = var4.parent_id;
                    var3 = var5 != var3;
                    if(!var3) { _fun0011_ip = 49; continue _fun0011 }
case 79:
                    var8 = _closure1_slot22;
                    var7 = var8.isChannelMuted;
                    var6 = var4.guild_id;
                    var5 = var4.parent_id;
                    var3 = var7.bind(var8)(var6, var5);
case 49:
                    var1 = var3;
case 77:
                    var1 = !var1;
                    if(!var1) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getHasImportantUnread;
                    var1 = var2.bind(var3)(var4);
case 80:
                    return var1;
                }
            };
            var14 = var10.bind(var14)(var6);
            var10 = var14.map;
            var6 = function(arg1) {
                var3 = _closure1_slot41;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var14 = var10.bind(var14)(var6);
            var10 = var14.filter;
            var6 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var10 = var10.bind(var14)(var6);
            var _closure2_slot3 = var10;
            var15 = var7.Object;
            var14 = var15.values;
            var16 = _closure1_slot8;
            var6 = var16.getActiveJoinedUnreadThreadsForGuild;
            var6 = var6.bind(var16)(var17);
            var15 = var14.bind(var15)(var6);
            var14 = var15.forEach;
            var6 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var8 = arg1;
                    var1 = undefined;
                    var2 = null;
                    for(var5 in var8)
case 82:
                    {
case 7:
                        var14 = var5;
                        var10 = _closure1_slot41;
                        var12 = var10.bind(var1)(var14);
                        var10 = var2 == var12;
                        if(var10) { _fun0012_ip = 4; continue _fun0012 }
case 9:
                        var15 = _closure2_slot2;
                        var13 = var15.has;
                        var11 = var12.record;
                        var11 = var11.id;
                        var10 = var13.bind(var15)(var11);
case 4:
                        if(var10) { _fun0012_ip = 83; continue _fun0012 }
case 39:
                        var13 = _closure1_slot35;
                        var11 = var13.includes;
                        var10 = var11.bind(var13)(var14);
case 83:
                        if(var10) { _fun0012_ip = 82; continue _fun0012 }
case 84:
                        var11 = _closure2_slot3;
                        var10 = var11.push;
                        var10 = var10.bind(var11)(var12);
                        _fun0012_ip = 82; continue _fun0012;
                    }
case 17:
                    return var1;
                }
            };
            var6 = var14.bind(var15)(var6);
            var6 = var10.length;
            var3 = var11;
            if(!(var6 > var9)) { _fun0007_ip = 71; continue _fun0007 }
case 85:
            var14 = var11.push;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var6 = var20[var8];
            var16 = var19.bind(var4)(var6);
            var15 = var16.createHeaderResult;
            var6 = 23;
            var17 = var20[var6];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var6 = var20[var6];
            var6 = var19.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ieCAhD;
            var6 = var17.bind(var18)(var6);
            var6 = var15.bind(var16)(var6);
            var6 = var14.bind(var11)(var6);
            var6 = var11.concat;
            var3 = var6.bind(var11)(var10);
case 71:
            var6 = var3.length;
            var10 = var6 > var9;
            var6 = 7;
            if(!var10) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var6 = 3;
case 86:
            var14 = var7.Math;
            var11 = var14.min;
            var7 = _closure1_slot35;
            var10 = var7.length;
            var7 = 1;
            var6 = var6 + var7;
            var11 = var11.bind(var14)(var6, var10);
            var6 = new Array(0);
            var14 = var7 < var11;
            var10 = var7;
            if(!var14) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var15 = _closure1_slot41;
            var14 = _closure1_slot35;
            var14 = var14[var10];
            var14 = var15.bind(var4)(var14);
            if(!(var13 != var14)) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var16 = var14.type;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var8];
            var15 = var17.bind(var4)(var15);
            var15 = var15.AutocompleterResultTypes;
            var15 = var15.TEXT_CHANNEL;
            var15 = var16 !== var15;
            if(!var15) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var17 = var14.type;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var8];
            var16 = var18.bind(var4)(var16);
            var16 = var16.AutocompleterResultTypes;
            var16 = var16.VOICE_CHANNEL;
            var15 = var17 !== var16;
case 92:
            if(var15) { _fun0007_ip = 94; continue _fun0007 }
case 95:
            var19 = _closure1_slot18;
            var18 = var19.can;
            var16 = _closure1_slot24;
            var17 = var16.VIEW_CHANNEL;
            var16 = var14.record;
            var15 = var18.bind(var19)(var17, var16);
case 94:
            if(!var15) { _fun0007_ip = 90; continue _fun0007 }
case 96:
            var15 = var6.push;
            var15 = var15.bind(var6)(var14);
            var15 = var12.add;
            var14 = var14.record;
            var14 = var14.id;
            var14 = var15.bind(var12)(var14);
case 90:
            var10 = var10 + var7;
            if(var10 < var11) { _fun0007_ip = 89; continue _fun0007 }
case 88:
            var10 = var6.length;
            if(!(var10 > var9)) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = var15[var8];
            var11 = var14.bind(var4)(var8);
            var10 = var11.createHeaderResult;
            var8 = 23;
            var12 = var15[var8];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.80lOZ1;
            var8 = var12.bind(var13)(var8);
            var10 = var10.bind(var11)(var8);
            var8 = new Array(1);
            var8[0] = var10;
            var23 = var8;
            var22 = var6;
            var21 = var7;
            var6 = arraySpread(var23, var22, var21);
            var7 = var3.push;
            var6 = new Array(0);
            var23 = var6;
            var22 = var8;
            var21 = 0;
            var8 = arraySpread(var23, var22, var21);
            var23 = var7;
            var22 = var6;
            var21 = var3;
            var6 = apply(var23, var22, var21);
case 97:
            return var3;
case 54:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryChannels;
            var3 = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true, 'filter': null, 'type': null, 'allowEmptyQueries': true};
            var9 = _closure1_slot21;
            var8 = var9.getGuildId;
            var8 = var8.bind(var9)();
            var3['guildId'] = var8;
            var8 = function filter() {
                var1 = true;
                return var1;
            };
            var3['filter'] = var8;
            var8 = _closure1_slot15;
            var3['type'] = var8;
            var3 = var6.bind(var7)(var3);
            return var3;
case 52:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryChannels;
            var3 = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true, 'allowEmptyQueries': true};
            var9 = _closure1_slot21;
            var8 = var9.getGuildId;
            var8 = var8.bind(var9)();
            var3['guildId'] = var8;
            var3 = var6.bind(var7)(var3);
            return var3;
case 50:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryGuilds;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
case 48:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryApplications;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
case 46:
            var6 = _closure1_slot10;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            var _closure2_slot1 = var3;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 22;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getRecentlyTalked;
            var2 = 100;
            var3 = var3.bind(var4)(var5, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.record;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function updateResults(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var7 = _closure1_slot30;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 19;
            var6 = var1[var5];
            var1 = undefined;
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.USER;
            if(!(var6 !== var7)) { _fun0013_ip = 99; continue _fun0013 }
case 100:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var7)) { _fun0013_ip = 101; continue _fun0013 }
case 102:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            if(!(var6 !== var7)) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.APPLICATION;
            if(!(var6 !== var7)) { _fun0013_ip = 107; continue _fun0013 }
case 24:
            _closure1_slot31 = var4;
            _fun0013_ip = 108; continue _fun0013;
case 107:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.VwK1ld;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 108; continue _fun0013;
case 105:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.olADPs;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 108; continue _fun0013;
case 103:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.zUoI5C;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 108; continue _fun0013;
case 101:
            var7 = var4.unshift;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = var13[var5];
            var9 = var12.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.W26k4V;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 108; continue _fun0013;
case 99:
            var8 = _closure1_slot17;
            var7 = var8.getGuild;
            var9 = _closure1_slot21;
            var6 = var9.getGuildId;
            var6 = var6.bind(var9)();
            var14 = var7.bind(var8)(var6);
            var7 = var4.unshift;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var9 = var8.bind(var1)(var6);
            var8 = var9.createHeaderResult;
            var6 = null;
            if(!(var6 == var14)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 23;
            var10 = var13[var6];
            var10 = var12.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var13[var6];
            var6 = var12.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.XFYW1o;
            var6 = var10.bind(var11)(var6);
            _fun0013_ip = 111; continue _fun0013;
case 109:
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 23;
            var12 = var15[var10];
            var12 = var11.bind(var1)(var12);
            var13 = var12.intl;
            var12 = var13.formatToPlainString;
            var10 = var15[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.t;
            var11 = var10.FREzQs;
            var10 = {};
            var14 = var14.name;
            var10['name'] = var14;
            var6 = var12.bind(var13)(var11, var10);
case 111:
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
case 108:
            var4 = _closure1_slot32;
            if(!(var3 === var4)) { _fun0013_ip = 112; continue _fun0013 }
case 113:
            var6 = _closure1_slot31;
            var4 = _closure1_slot27;
            var6 = var6[var4];
            var4 = null;
            var4 = var4 != var6;
            if(!var4) { _fun0013_ip = 114; continue _fun0013 }
case 115:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.HEADER;
            var4 = var7 === var6;
case 114:
            if(!var4) { _fun0013_ip = 116; continue _fun0013 }
case 117:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var7 = var4[var5];
            var9 = var6.bind(var1)(var7);
            var8 = var9.findNextSelectedResult;
            var4 = var4[var5];
            var4 = var6.bind(var1)(var4);
            var4 = var4.FindResultDirections;
            var7 = var4.DOWN;
            var6 = _closure1_slot27;
            var4 = _closure1_slot31;
            var4 = var8.bind(var9)(var7, var6, var4);
            _closure1_slot27 = var4;
            _fun0013_ip = 116; continue _fun0013;
case 112:
            _closure1_slot32 = var3;
            var4 = global;
            var7 = var4.Math;
            var6 = var7.max;
            var4 = var3.length;
            var3 = _closure1_slot33;
            var3 = var6.bind(var7)(var4, var3);
            _closure1_slot33 = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var5];
            var7 = var4.bind(var1)(var6);
            var6 = var7.findNextSelectedResult;
            var3 = var3[var5];
            var3 = var4.bind(var1)(var3);
            var3 = var3.FindResultDirections;
            var5 = var3.DOWN;
            var4 = _closure1_slot31;
            var3 = -1;
            var3 = var6.bind(var7)(var5, var3, var4);
            _closure1_slot27 = var3;
case 116:
            var3 = _closure1_slot37;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var11 = function handleQuickSwitcherShow(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.query;
            var3 = var1.queryMode;
            var1 = var2.trim;
            var4 = var1.bind(var2)();
            var5 = _closure1_slot21;
            var1 = var5.getGuildId;
            var6 = var1.bind(var5)();
            var5 = null;
            var7 = var5 != var6;
            var1 = undefined;
            var11 = undefined;
            if(!var7) { _fun0014_ip = 66; continue _fun0014 }
case 100:
            var11 = var6;
case 66:
            var7 = global;
            var9 = var7.Set;
            var8 = _closure1_slot10;
            var6 = var8.getId;
            var10 = var6.bind(var8)();
            var6 = var7.HermesInternal;
            var8 = var6.concat;
            var6 = 'user:';
            var8 = var8.bind(var6)(var10);
            var6 = new Array(1);
            var6[0] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var18 = var8;
            var17 = var6;
            var6 = new var18[var9](var17, var16);
            var6 = var6 instanceof Object ? var6 : var8;
            if(!(var5 != var11)) { _fun0014_ip = 118; continue _fun0014 }
case 119:
            var9 = var6.add;
            var8 = var7.HermesInternal;
            var10 = var8.concat;
            var8 = 'guild:';
            var8 = var10.bind(var8)(var11);
            var8 = var9.bind(var6)(var8);
case 118:
            var8 = var7.Date;
            var7 = var8.now;
            var7 = var7.bind(var8)();
            _closure1_slot36 = var7;
            var7 = _closure1_slot25;
            if(!(var5 == var7)) { _fun0014_ip = 120; continue _fun0014 }
case 24:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 19;
            var7 = var9[var7];
            var12 = var8.bind(var1)(var7);
            var11 = _closure1_slot44;
            var10 = _closure1_slot26;
            var7 = var5 != var3;
            var9 = 5;
            if(!var7) { _fun0014_ip = 121; continue _fun0014 }
case 122:
            var9 = 100;
case 121:
            var8 = {'frecencyBoosters': true, 'blacklist': null, 'allowSnowflake': true};
            var8['blacklist'] = var6;
            var6 = var12.prototype;
            var7 = Object.create(var6, {constructor: {value: var12}});
            var13 = 100;
            var18 = var7;
            var17 = var11;
            var16 = var10;
            var15 = var9;
            var14 = var8;
            var6 = new var18[var12](var17, var16, var15, var14, var13, var12);
            var6 = var6 instanceof Object ? var6 : var7;
            _fun0014_ip = 123; continue _fun0014;
case 120:
            var6 = _closure1_slot25;
case 123:
            var _closure1_slot25 = var6;
            _closure1_slot32 = var5;
            var5 = var4.length;
            _closure1_slot33 = var5;
            _closure1_slot30 = var3;
            var3 = _closure1_slot25;
            var2 = var3.search;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var1 = function handleUserSearchUpdate(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var1 = var3.trim;
            var2 = var1.bind(var3)();
            var1 = '';
            if(!(var1 === var2)) { _fun0015_ip = 124; continue _fun0015 }
case 59:
            var2 = _closure1_slot42;
            var1 = undefined;
            var4 = var2.bind(var1)();
case 124:
            var9 = _closure1_slot34;
            var6 = var4.length;
            var5 = var9.length;
            var2 = false;
            if(!(var6 === var5)) { _fun0015_ip = 125; continue _fun0015 }
case 3:
            var5 = var4.length;
            var7 = 0;
            var5 = var7 < var5;
            var2 = true;
            if(!var5) { _fun0015_ip = 125; continue _fun0015 }
case 13:
            var10 = var4[var7];
            var5 = var9[var7];
            var10 = var10.record;
            var10 = var10.id;
            var5 = var5.record;
            var5 = var5.id;
            var2 = false;
            if(!(var10 === var5)) { _fun0015_ip = 125; continue _fun0015 }
case 126:
            var7 = var7 + 1;
            var5 = var4.length;
            var5 = var7 < var5;
            var2 = true;
            if(var5) { _fun0015_ip = 13; continue _fun0015 }
case 125:
            if(var2) { _fun0015_ip = 19; continue _fun0015 }
case 127:
            _closure1_slot34 = var4;
            var2 = _closure1_slot43;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var8 = function handleQuickSwitcherHide() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = null;
            _closure1_slot32 = var1;
            var3 = 0;
            _closure1_slot33 = var3;
            var3 = new Array(0);
            _closure1_slot34 = var3;
            var3 = _closure1_slot25;
            if(!(var1 != var3)) { _fun0016_ip = 9; continue _fun0016 }
case 128:
            var4 = _closure1_slot25;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot25 = var1;
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var13 = var1.Object;
    var10 = var13.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var13)(var3, var1, var4);
    var10 = 0;
    var4 = var7[var10];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var13 = var7[var4];
    var13 = var9.bind(var1)(var13);
    var _closure1_slot12 = var13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot13 = var4;
    var4 = 10;
    var13 = var7[var4];
    var13 = var9.bind(var1)(var13);
    var _closure1_slot14 = var13;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 16;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 17;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 18;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var13 = var4.CHANNEL_NOTICE_SHOW_DELAY;
    var _closure1_slot23 = var13;
    var4 = var4.Permissions;
    var _closure1_slot24 = var4;
    var13 = 19;
    var4 = var7[var13];
    var4 = var6.bind(var1)(var4);
    var4 = var4.AutocompleterResultTypes;
    var14 = var4.USER;
    var4 = new Array(7);
    var4[0] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.GROUP_DM;
    var4[1] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.TEXT_CHANNEL;
    var4[2] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.GUILD;
    var4[3] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.APPLICATION;
    var4[4] = var14;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.AutocompleterResultTypes;
    var14 = var14.LINK;
    var4[5] = var14;
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.AutocompleterResultTypes;
    var13 = var13.IN_APP_NAVIGATION;
    var4[6] = var13;
    var _closure1_slot26 = var4;
    var _closure1_slot27 = var10;
    var4 = false;
    var _closure1_slot28 = var4;
    var _closure1_slot29 = var4;
    var4 = null;
    var _closure1_slot30 = var4;
    var13 = new Array(0);
    var _closure1_slot31 = var13;
    var _closure1_slot32 = var4;
    var _closure1_slot33 = var10;
    var10 = new Array(0);
    var _closure1_slot34 = var10;
    var10 = new Array(0);
    var _closure1_slot35 = var10;
    var _closure1_slot36 = var4;
    var4 = 27;
    var4 = var7[var4];
    var4 = var9.bind(var1)(var4);
    var10 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function QuickSwitcherStoreClass() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot38;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 129; continue _fun0017 }
case 61:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0017_ip = 130; continue _fun0017;
case 129:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 130:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var6 = this;
                var17 = var6.waitFor;
                var30 = _closure1_slot8;
                var29 = _closure1_slot10;
                var28 = _closure1_slot11;
                var27 = _closure1_slot12;
                var26 = _closure1_slot14;
                var25 = _closure1_slot16;
                var24 = _closure1_slot17;
                var23 = _closure1_slot18;
                var22 = _closure1_slot19;
                var21 = _closure1_slot20;
                var20 = _closure1_slot21;
                var1 = _closure1_slot9;
                var18 = _closure1_slot22;
                var31 = var6;
                var19 = var1;
                var2 = var31[var17](var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                var4 = var6.syncWith;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = true;
                    return var1;
                };
                var1 = var4.bind(var6)(var2, var1);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = var2.Storage;
                var4 = var6.get;
                var2 = 'seenQSTutorial';
                var2 = var4.bind(var6)(var2);
                if(var2) { _fun0018_ip = 81; continue _fun0018 }
case 131:
                var2 = false;
case 81:
                _closure1_slot28 = var2;
                var4 = null;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0018_ip = 132; continue _fun0018 }
case 118:
                var2 = var5.channelHistory;
case 132:
                if(!(var4 == var2)) { _fun0018_ip = 133; continue _fun0018 }
case 134:
                var2 = new Array(0);
case 133:
                _closure1_slot35 = var2;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot35;
            var1['channelHistory'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isOpen';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot25;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getResultTotals';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var1 = _closure1_slot25;
                var2 = null;
                var7 = var2 == var1;
                var6 = 0;
                var1 = 0;
                if(var7) { _fun0019_ip = 135; continue _fun0019 }
case 73:
                if(!(var2 != var5)) { _fun0019_ip = 136; continue _fun0019 }
case 37:
                var2 = _closure1_slot25;
                var7 = var2.results;
                var5 = var7.reduce;
                var2 = function(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = arg1;
                        var1 = arg2;
                        var4 = var1.type;
                        var2 = _closure3_slot0;
                        var1 = var3;
                        if(!(var4 === var2)) { _fun0020_ip = 44; continue _fun0020 }
case 57:
                        var2 = 1;
                        var1 = var3 + var2;
case 44:
                        return var1;
                    }
                };
                var2 = var5.bind(var7)(var2, var6);
                _fun0019_ip = 137; continue _fun0019;
case 136:
                var4 = _closure1_slot25;
                var5 = var4.results;
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = arg1;
                        var1 = arg2;
                        var4 = var1.type;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var2);
                        var1 = var1.AutocompleterResultTypes;
                        var2 = var1.HEADER;
                        var1 = var3;
                        if(!(var4 !== var2)) { _fun0021_ip = 136; continue _fun0021 }
case 8:
                        var2 = 1;
                        var1 = var3 + var2;
case 136:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var6);
case 137:
                var1 = var2;
case 135:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'channelNoticePredicate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = arg2;
                var3 = var2 - var1;
                var2 = _closure1_slot23;
                var2 = var3 >= var2;
                var1 = _closure1_slot29;
                if(!var1) { _fun0022_ip = 138; continue _fun0022 }
case 139:
                var1 = var2;
case 138:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFrequentGuilds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0023_ip = 140; continue _fun0023 }
case 141:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var1 = var4.bind(var5)(var3, var2);
case 140:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFrequentGuildsLength';
        var5['key'] = var7;
        var7 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0024_ip = 6; continue _fun0024 }
case 142:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var2.length;
case 6:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getChannelHistory';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getLastShowTimestamp';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getProps';
        var5['key'] = var7;
        var6 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var1 = {};
                var3 = _closure1_slot9;
                var3 = var3.theme;
                var1['theme'] = var3;
                var4 = _closure1_slot25;
                var3 = null;
                var4 = var3 != var4;
                var3 = '';
                if(!var4) { _fun0025_ip = 6; continue _fun0025 }
case 62:
                var4 = _closure1_slot25;
                var3 = var4.query;
case 6:
                var1['query'] = var3;
                var3 = _closure1_slot30;
                var1['queryMode'] = var3;
                var3 = _closure1_slot31;
                var1['results'] = var3;
                var3 = _closure1_slot27;
                var1['selectedIndex'] = var3;
                var3 = _closure1_slot28;
                var1['seenTutorial'] = var3;
                var2 = _closure1_slot33;
                var1['maxQueryLength'] = var2;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var10);
    var4 = 'QuickSwitcherStore';
    var10['displayName'] = var4;
    var10['persistKey'] = var4;
    var4 = 28;
    var4 = var7[var4];
    var17 = var9.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var12;
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var12;
    var4['QUICKSWITCHER_SHOW'] = var11;
    var4['SHOW_ACTION_SHEET_QUICK_SWITCHER'] = var11;
    var4['QUICKSWITCHER_HIDE'] = var8;
    var4['OVERLAY_SET_INPUT_LOCKED'] = var8;
    var4['HIDE_ACTION_SHEET_QUICK_SWITCHER'] = var8;
    var8 = function handleQuickSwitcherSearch(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var2 = var1.query;
            var6 = var1.queryMode;
            var1 = var2.trim;
            var5 = var1.bind(var2)();
            var1 = _closure1_slot25;
            var4 = null;
            if(!(var4 != var1)) { _fun0026_ip = 143; continue _fun0026 }
case 67:
            var1 = _closure1_slot30;
            if(!(var1 !== var6)) { _fun0026_ip = 144; continue _fun0026 }
case 61:
            var7 = _closure1_slot25;
            var3 = var7.setResultTypes;
            if(!(var4 == var6)) { _fun0026_ip = 145; continue _fun0026 }
case 146:
            var1 = _closure1_slot26;
            _fun0026_ip = 147; continue _fun0026;
case 145:
            var8 = new Array(1);
            var8[0] = var6;
            var1 = var8;
case 147:
            var1 = var3.bind(var7)(var1);
            var7 = _closure1_slot25;
            var3 = var7.setLimit;
            var8 = var4 != var6;
            var1 = 5;
            if(!var8) { _fun0026_ip = 17; continue _fun0026 }
case 148:
            var1 = 100;
case 17:
            var1 = var3.bind(var7)(var1);
            var3 = _closure1_slot21;
            var1 = var3.getGuildId;
            var7 = var1.bind(var3)();
            var8 = var4 != var7;
            var3 = undefined;
            var1 = undefined;
            if(!var8) { _fun0026_ip = 149; continue _fun0026 }
case 150:
            var1 = var7;
case 149:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 19;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.AutocompleterResultTypes;
            var7 = var7.USER;
            if(!(var6 === var7)) { _fun0026_ip = 151; continue _fun0026 }
case 20:
            if(!(var4 == var1)) { _fun0026_ip = 152; continue _fun0026 }
case 151:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.AutocompleterResultTypes;
            var7 = var7.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0026_ip = 153; continue _fun0026 }
case 53:
            var9 = _closure1_slot25;
            var8 = var9.setOptions;
            var7 = {};
            var7['userFilters'] = var4;
            var7['voiceChannelGuildFilter'] = var3;
            var3 = true;
            var3 = var8.bind(var9)(var7, var3);
            _fun0026_ip = 144; continue _fun0026;
case 153:
            var9 = _closure1_slot25;
            var8 = var9.setOptions;
            var7 = {};
            var7['voiceChannelGuildFilter'] = var4;
            var3 = true;
            var3 = var8.bind(var9)(var7, var3);
            _fun0026_ip = 144; continue _fun0026;
case 152:
            var8 = _closure1_slot25;
            var7 = var8.setOptions;
            var3 = {};
            var9 = {};
            var9['guild'] = var1;
            var1 = true;
            var9['friends'] = var1;
            var3['userFilters'] = var9;
            var1 = var7.bind(var8)(var3, var1);
case 144:
            _closure1_slot30 = var6;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            if(!(var6 !== var3)) { _fun0026_ip = 154; continue _fun0026 }
case 155:
            var6 = _closure1_slot25;
            var3 = var6.search;
            var3 = var3.bind(var6)(var5, var1);
            _fun0026_ip = 156; continue _fun0026;
case 154:
            var6 = _closure1_slot21;
            var3 = var6.getGuildId;
            var3 = var3.bind(var6)();
            var6 = var4 != var3;
            var4 = null;
            if(!var6) { _fun0026_ip = 157; continue _fun0026 }
case 158:
            var4 = var3;
case 157:
            var3 = _closure1_slot25;
            var2 = var3.search;
            var2 = var2.bind(var3)(var5, var4);
case 156:
            return var1;
case 143:
            var1 = false;
            return var1;
        }
    };
    var4['QUICKSWITCHER_SEARCH'] = var8;
    var8 = function handleQuickSwitcherSelect(arg1) {
        var1 = arg1;
        var2 = var1.selectedIndex;
        _closure1_slot27 = var2;
        var1 = undefined;
        return var1;
    };
    var4['QUICKSWITCHER_SELECT'] = var8;
    var8 = function handleQuickSwitcherSwitchTo() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = _closure1_slot28;
            if(var2) { _fun0027_ip = 159; continue _fun0027 }
case 160:
            var5 = true;
            _closure1_slot28 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 26;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'seenQSTutorial';
            var2 = var3.bind(var4)(var2, var5);
            return var1;
case 159:
            var1 = false;
            return var1;
        }
    };
    var4['QUICKSWITCHER_SWITCH_TO'] = var8;
    var8 = function handleChannelSelect(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0028_ip = 161; continue _fun0028 }
case 33:
            var5 = _closure1_slot35;
            var3 = var5.filter;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            _closure1_slot35 = var3;
            var2 = var3.unshift;
            var2 = var2.bind(var3)(var4);
            var2 = _closure1_slot35;
            var3 = var2.length;
            var2 = 8;
            if(!(var3 > var2)) { _fun0028_ip = 162; continue _fun0028 }
case 163:
            var1 = _closure1_slot35;
            var1['length'] = var2;
case 162:
            var1 = undefined;
            return var1;
case 161:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_SELECT'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var18 = var8;
    var16 = var4;
    var4 = new var18[var10](var17, var16, var15);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot37 = var4;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quickswitcher/QuickSwitcherStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['generateResultFromId'] = var2;
    return var1;
})();