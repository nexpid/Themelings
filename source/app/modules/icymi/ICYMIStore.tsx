// app/modules/icymi/ICYMIStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            _closure1_slot62 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot62 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot64;
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
            var7 = _closure1_slot64;
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
    var _closure1_slot63 = var1;
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
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot64 = var1;
    var1 = function tabHasNewContentOnInitialLoad(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = global;
            var4 = var2.Date;
            var3 = var4.now;
            var7 = var3.bind(var4)();
            var4 = _closure1_slot34;
            var4 = var7 - var4;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var7 = var7[var3];
            var3 = undefined;
            var3 = var8.bind(var3)(var7);
            var3 = var3.Millis;
            var7 = var3.HOUR;
            var3 = 6;
            var3 = var3 * var7;
            if(!(!(var4 > var3))) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = false;
            return var3;
case 40:
            var4 = var2.Set;
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var3.bind(var6)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var11 = var3;
            var2 = new var11[var4](var10, var9);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var2;
            var4 = var5.slice;
            var3 = 0;
            var2 = 20;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = 3;
            var1 = var2 >= var1;
            return var1;
        }
    };
    var _closure1_slot65 = var1;
    var1 = function filterStaffGuild(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot24;
            var3 = var4.filterStaffContent;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 35:
            var3 = true;
            return var3;
case 42:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 23;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.isGuildItem;
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var3 = var2.data;
            var4 = var3.guild_id;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 24;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.GAME_CONTENT_GUILD_ID;
            if(!(var4 !== var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var4 = _closure1_slot18;
            var3 = var4.getGuild;
            var2 = var2.data;
            var2 = var2.guild_id;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var3 = var2.features;
            var2 = var3.has;
            var1 = _closure1_slot27;
            var1 = var1.INTERNAL_EMPLOYEE_ONLY;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0006_ip = 47; continue _fun0006 }
case 43:
            var1 = true;
            return var1;
case 47:
            var1 = false;
            return var1;
case 45:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot66 = var1;
    var1 = function injectItemsIntoList(arg1, arg2, arg3, arg4) {
        var5 = arg1;
        var4 = arg2;
        var1 = arg3;
        var _closure2_slot0 = var1;
        var1 = arg4;
        var _closure2_slot1 = var1;
        var3 = var5.filter;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = _closure2_slot0;
            var1 = var2 !== var1;
            return var1;
        };
        var1 = var3.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var2 = 1;
                var4 = var6 + var2;
                var3 = _closure2_slot1;
                var4 = var4 * var3;
                var3 = _closure2_slot2;
                var3 = var3.length;
                if(!(!(var4 < var3))) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var4 = _closure2_slot2;
                var3 = var4.push;
                var3 = var3.bind(var4)(var5);
                _fun0007_ip = 51; continue _fun0007;
case 49:
                var4 = _closure2_slot2;
                var3 = var4.splice;
                var2 = var6 + var2;
                var1 = _closure2_slot1;
                var2 = var2 * var1;
                var1 = 0;
                var1 = var3.bind(var4)(var2, var1, var5);
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot67 = var1;
    var1 = function injectAdditionalItems() {
        var3 = function injectGuildEvents() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure1_slot18;
                var1 = var4.getGuildIds;
                var6 = var1.bind(var4)();
                var5 = new Array(0);
                var4 = _closure1_slot63;
                var1 = undefined;
                var19 = var4.bind(var1)(var6);
                var6 = var19.bind(var1)();
                var4 = var6.done;
                var18 = 0;
                var17 = 1;
                var9 = 24;
                var16 = 10;
                var15 = null;
                var14 = 22;
                var13 = 2;
                var12 = var6;
                var11 = undefined;
                var10 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                if(var4) { _fun0008_ip = 52; continue _fun0008 }
case 41:
                var24 = var12.value;
                var4 = _closure1_slot41;
                var4 = var4[var24];
                if(!(var15 != var4)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                var4 = _closure1_slot41;
                var4 = var4[var24];
                var21 = var7;
                var20 = var6;
                if(!(!(var4 < var18))) { _fun0008_ip = 55; continue _fun0008 }
case 53:
                var22 = _closure1_slot63;
                var23 = _closure1_slot14;
                var4 = var23.getGuildScheduledEventsForGuild;
                var4 = var4.bind(var23)(var24);
                var25 = var22.bind(var1)(var4);
                var26 = var25.bind(var1)();
                var4 = var26.done;
                var24 = var26;
                var23 = 0;
                var22 = var6;
                var11 = var24;
                var10 = 0;
                var8 = var25;
                var21 = var7;
                var20 = var22;
                if(var4) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var27 = var24.value;
                var4 = _closure1_slot12;
                var4 = var4.bind(var1)(var27);
                var28 = var23;
                var26 = var22;
                if(var4) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var4 = var27.channel_id;
                if(!(var15 != var4)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var30 = _closure1_slot16;
                var29 = var30.getChannel;
                var4 = var27.channel_id;
                var31 = var29.bind(var30)(var4);
                var30 = _closure1_slot20;
                var29 = var30.can;
                var4 = _closure1_slot28;
                var4 = var4.VIEW_CHANNEL;
                var4 = var29.bind(var30)(var4, var31);
                var28 = var23;
                var26 = var22;
                if(!var4) { _fun0008_ip = 57; continue _fun0008 }
case 59:
                var29 = _closure1_slot11;
                var30 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var14];
                var4 = var30.bind(var1)(var4);
                var4 = var4.Seconds;
                var4 = var4.DAY;
                var4 = var13 * var4;
                var4 = var29.bind(var1)(var27, var4);
                if(var4) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var4 = _closure1_slot13;
                var4 = var4.bind(var1)(var27);
                var28 = var23;
                var26 = var22;
                if(!var4) { _fun0008_ip = 57; continue _fun0008 }
case 61:
                var29 = _closure1_slot39;
                var4 = var27.id;
                var4 = var29[var4];
                if(!(var15 == var4)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var30 = _closure1_slot39;
                var29 = var27.id;
                var4 = {};
                var31 = var27.id;
                var4['id'] = var31;
                var32 = _closure1_slot0;
                var31 = _closure1_slot2;
                var31 = var31[var9];
                var31 = var32.bind(var1)(var31);
                var31 = var31.ICYMIItemTypes;
                var31 = var31.GUILD_EVENT;
                var4['type'] = var31;
                var4['score'] = var16;
                var31 = var27.id;
                var4['event_id'] = var31;
                var30[var29] = var4;
case 63:
                var30 = var5.push;
                var4 = {};
                var29 = var27.id;
                var4['id'] = var29;
                var31 = _closure1_slot0;
                var29 = _closure1_slot2;
                var29 = var29[var9];
                var29 = var31.bind(var1)(var29);
                var29 = var29.ICYMIItemTypes;
                var29 = var29.GUILD_EVENT;
                var4['type'] = var29;
                var4['score'] = var16;
                var31 = {};
                var29 = var27.guild_id;
                var31['guild_id'] = var29;
                var29 = var27.id;
                var31['event_id'] = var29;
                var29 = var27.channel_id;
                var33 = var15 != var29;
                var32 = undefined;
                if(!var33) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var32 = var29;
case 65:
                var31['channel_id'] = var32;
                var4['data'] = var31;
                var4 = var30.bind(var5)(var4);
                var28 = var23 + 1;
                var26 = var29;
                var11 = var24;
                var8 = var25;
                var21 = var27;
                var20 = var26;
                var10 = var28;
                if(!(!(var10 >= var17))) { _fun0008_ip = 55; continue _fun0008 }
case 57:
                var29 = var25.bind(var1)();
                var4 = var29.done;
                var23 = var28;
                var22 = var26;
                var24 = var29;
                var11 = var24;
                var10 = var23;
                var8 = var25;
                var21 = var27;
                var20 = var22;
                if(!var4) { _fun0008_ip = 56; continue _fun0008 }
case 55:
                var22 = var19.bind(var1)();
                var4 = var22.done;
                var7 = var21;
                var6 = var20;
                var12 = var22;
                if(!var4) { _fun0008_ip = 41; continue _fun0008 }
case 52:
                var6 = var5.sort;
                var4 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = _closure1_slot17;
                        var3 = var4.getGuildAffinity;
                        var2 = arg1;
                        var2 = var2.data;
                        var2 = var2.guild_id;
                        var3 = var3.bind(var4)(var2);
                        var4 = _closure1_slot17;
                        var2 = var4.getGuildAffinity;
                        var1 = arg2;
                        var1 = var1.data;
                        var1 = var1.guild_id;
                        var5 = var2.bind(var4)(var1);
                        var4 = null;
                        var6 = var4 != var5;
                        var1 = 0;
                        if(!var6) { _fun0009_ip = 4; continue _fun0009 }
case 39:
                        var1 = var5.score;
case 4:
                        var4 = var4 != var3;
                        var2 = 0;
                        if(!var4) { _fun0009_ip = 67; continue _fun0009 }
case 40:
                        var2 = var3.score;
case 67:
                        var1 = var1 - var2;
                        return var1;
                    }
                };
                var4 = var6.bind(var5)(var4);
                var11 = new Array(0);
                var _closure3_slot0 = var11;
                var7 = new Array(0);
                var _closure3_slot1 = var7;
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure1_slot38;
                        var2 = var3.id;
                        var4[var2] = var3;
                        var4 = _closure1_slot25;
                        var2 = var4.getReadTimestamp;
                        var1 = var3.id;
                        var2 = var2.bind(var4)(var1);
                        var1 = null;
                        if(!(var1 == var2)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                        _fun0010_ip = 41; continue _fun0010;
case 68:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var6 = _closure1_slot67;
                var10 = _closure1_slot50;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var9];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ICYMIItemTypes;
                var35 = var4.GUILD_EVENT;
                var5 = 7;
                var38 = undefined;
                var37 = var10;
                var36 = var11;
                var34 = var5;
                var4 = var38[var6](var37, var36, var35, var34, var33);
                _closure1_slot50 = var4;
                var4 = _closure1_slot51;
                var2 = var2[var9];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var35 = var2.GUILD_EVENT;
                var38 = undefined;
                var37 = var4;
                var36 = var7;
                var2 = var38[var6](var37, var36, var35, var34, var33);
                _closure1_slot51 = var2;
                return var1;
            }
        };
        var1 = undefined;
        var3 = var3.bind(var1)();
        var2 = function injectContentInventoryItems() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var16 = var3;
                var1 = new var16[var1](var15);
                var1 = var1 instanceof Object ? var1 : var3;
                var _closure3_slot0 = var1;
                var1 = {};
                var _closure3_slot1 = var1;
                var11 = new Array(0);
                var _closure3_slot2 = var11;
                var7 = new Array(0);
                var _closure3_slot3 = var7;
                var5 = _closure1_slot9;
                var4 = var5.getFeed;
                var1 = _closure1_slot29;
                var1 = var1.GLOBAL_FEED;
                var6 = var4.bind(var5)(var1);
                var4 = null;
                var8 = var4 == var6;
                var1 = undefined;
                var5 = undefined;
                if(var8) { _fun0011_ip = 46; continue _fun0011 }
case 70:
                var5 = var6.entries;
case 46:
                if(!(var4 == var5)) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                var5 = new Array(0);
case 71:
                var6 = var5.sort;
                var4 = function(arg1, arg2) {
                    var1 = arg1;
                    var2 = var1.rank;
                    var1 = arg2;
                    var1 = var1.rank;
                    var1 = var2 - var1;
                    return var1;
                };
                var9 = var6.bind(var5)(var4);
                var8 = var9.slice;
                var4 = 0;
                var6 = 5;
                var4 = var8.bind(var9)(var4, var6);
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var6 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.has;
                        var1 = var6.content;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var1);
                        if(var1) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                        var1 = var6.content;
                        var5 = var1.content_type;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var8 = 25;
                        var4 = var1[var8];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.PLAYED_GAME;
                        if(!(var5 !== var4)) { _fun0012_ip = 20; continue _fun0012 }
case 75:
                        var4 = var6.content;
                        var5 = var4.content_type;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.CUSTOM_STATUS;
                        if(!(var5 !== var4)) { _fun0012_ip = 20; continue _fun0012 }
case 76:
                        var4 = var6.content;
                        var5 = var4.content_type;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.ContentInventoryEntryType;
                        var4 = var4.TOP_GAME;
                        if(!(var5 === var4)) { _fun0012_ip = 73; continue _fun0012 }
case 20:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 26;
                        var4 = var7[var4];
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.isEntryExpired;
                        var4 = var6.content;
                        var4 = var5.bind(var7)(var4);
                        if(var4) { _fun0012_ip = 73; continue _fun0012 }
case 77:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 27;
                        var4 = var7[var4];
                        var7 = var5.bind(var1)(var4);
                        var5 = var7.isGamingLikeEntry;
                        var4 = var6.content;
                        var4 = var5.bind(var7)(var4);
                        if(!var4) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var5 = var5[var4];
                        var4 = null;
                        if(!(var4 == var5)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                        var7 = _closure3_slot1;
                        var4 = var6.content;
                        var5 = var4.author_id;
                        var4 = global;
                        var4 = var4.Set;
                        var8 = var4.prototype;
                        var8 = Object.create(var8, {constructor: {value: var4}});
                        var13 = var8;
                        var4 = new var13[var4](var12);
                        var4 = var4 instanceof Object ? var4 : var8;
                        var7[var5] = var4;
case 80:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var7 = var5[var4];
                        var5 = var7.has;
                        var4 = var6.content;
                        var4 = var4.extra;
                        var4 = var4.application_id;
                        var4 = var5.bind(var7)(var4);
                        if(var4) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                        var5 = _closure3_slot1;
                        var4 = var6.content;
                        var4 = var4.author_id;
                        var7 = var5[var4];
                        var5 = var7.add;
                        var4 = var6.content;
                        var4 = var4.extra;
                        var4 = var4.application_id;
                        var4 = var5.bind(var7)(var4);
case 78:
                        var5 = _closure1_slot39;
                        var4 = var6.content;
                        var4 = var4.id;
                        var4 = var5[var4];
                        var5 = null;
                        if(!(var5 == var4)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                        var8 = _closure1_slot39;
                        var4 = var6.content;
                        var7 = var4.id;
                        var4 = {};
                        var9 = var6.content;
                        var9 = var9.id;
                        var4['id'] = var9;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 24;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.ICYMIItemTypes;
                        var9 = var9.ACTIVITY;
                        var4['type'] = var9;
                        var9 = 15;
                        var4['score'] = var9;
                        var9 = var6.content;
                        var4['activity'] = var9;
                        var8[var7] = var4;
case 84:
                        var4 = {};
                        var7 = var6.content;
                        var7 = var7.id;
                        var4['id'] = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 24;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.ICYMIItemTypes;
                        var7 = var7.ACTIVITY;
                        var4['type'] = var7;
                        var7 = 15;
                        var4['score'] = var7;
                        var7 = {};
                        var8 = var6.content;
                        var8 = var8.author_id;
                        var7['user_id'] = var8;
                        var8 = var6.content;
                        var8 = var8.id;
                        var7['content_id'] = var8;
                        var4['data'] = var7;
                        var8 = _closure3_slot0;
                        var7 = var8.add;
                        var6 = var6.content;
                        var6 = var6.id;
                        var6 = var7.bind(var8)(var6);
                        var7 = _closure1_slot38;
                        var6 = var4.id;
                        var7[var6] = var4;
                        var7 = _closure1_slot25;
                        var6 = var7.getReadTimestamp;
                        var3 = var4.id;
                        var3 = var6.bind(var7)(var3);
                        if(!(var5 == var3)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                        var5 = _closure3_slot2;
                        var3 = var5.push;
                        var3 = var3.bind(var5)(var4);
                        _fun0012_ip = 73; continue _fun0012;
case 86:
                        var3 = _closure3_slot3;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                        _fun0012_ip = 73; continue _fun0012;
case 82:
                        return var1;
case 73:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var5 = _closure1_slot67;
                var10 = _closure1_slot50;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 24;
                var4 = var9[var2];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ICYMIItemTypes;
                var13 = var4.ACTIVITY;
                var16 = undefined;
                var15 = var10;
                var14 = var11;
                var12 = var6;
                var4 = var16[var5](var15, var14, var13, var12, var11);
                _closure1_slot50 = var4;
                var4 = _closure1_slot51;
                var2 = var9[var2];
                var2 = var8.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var13 = var2.ACTIVITY;
                var16 = undefined;
                var15 = var4;
                var14 = var7;
                var2 = var16[var5](var15, var14, var13, var12, var11);
                _closure1_slot51 = var2;
                return var1;
            }
        };
        var2 = var2.bind(var1)();
        var2 = _closure1_slot69;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot68 = var1;
    var1 = function injectRecommendedGuildsRow() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = _closure1_slot50;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot50 = var3;
            var5 = _closure1_slot51;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot51 = var3;
            var3 = _closure1_slot53;
            var3 = var3.length;
            var5 = 0;
            if(!(var5 !== var3)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
            var4 = _closure1_slot18;
            var3 = var4.getGuildsArray;
            var4 = var3.bind(var4)();
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot27;
                var1 = var1.COMMUNITY;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = var1.length;
            var6 = 5;
            var1 = var1 >= var6;
            var7 = _closure1_slot25;
            var4 = var7.getReadTimestamp;
            var3 = 'recommendedGuilds';
            var4 = var4.bind(var7)(var3);
            if(!var1) { _fun0013_ip = 90; continue _fun0013 }
case 91:
            var3 = null;
            if(!(var3 != var4)) { _fun0013_ip = 90; continue _fun0013 }
case 92:
            var3 = global;
            var8 = var3.Date;
            var7 = var8.now;
            var8 = var7.bind(var8)();
            var7 = _closure1_slot54;
            var8 = var8 - var7;
            var7 = _closure1_slot30;
            if(!(var8 > var7)) { _fun0013_ip = 90; continue _fun0013 }
case 20:
            var7 = var3.Date;
            var3 = var7.now;
            var3 = var3.bind(var7)();
            var4 = var3 - var4;
            var3 = _closure1_slot31;
            if(!(!(var4 < var3))) { _fun0013_ip = 88; continue _fun0013 }
case 90:
            var3 = {'id': 'recommendedGuilds', 'type': null, 'score': 50};
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 24;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.RECOMMENDED_GUILDS;
            var3['type'] = var4;
            var7 = _closure1_slot39;
            var4 = var3.id;
            var7[var4] = var3;
            var7 = _closure1_slot38;
            var4 = var3.id;
            var7[var4] = var3;
            var4 = _closure1_slot50;
            var4 = var4.length;
            if(!(var5 !== var4)) { _fun0013_ip = 93; continue _fun0013 }
case 94:
            if(var1) { _fun0013_ip = 95; continue _fun0013 }
case 96:
            var4 = _closure1_slot50;
            var4 = var4.length;
            if(!(!(var4 < var6))) { _fun0013_ip = 97; continue _fun0013 }
case 95:
            if(!var1) { _fun0013_ip = 98; continue _fun0013 }
case 99:
            var4 = _closure1_slot50;
            var7 = var4.length;
            var4 = 10;
            if(!(!(var7 < var4))) { _fun0013_ip = 97; continue _fun0013 }
case 98:
            if(var1) { _fun0013_ip = 100; continue _fun0013 }
case 101:
            var4 = _closure1_slot50;
            var1 = var4.splice;
            var1 = var1.bind(var4)(var6, var5, var3);
            _fun0013_ip = 88; continue _fun0013;
case 100:
            var1 = global;
            var6 = var1.Math;
            var4 = var6.round;
            var7 = var1.Math;
            var1 = var7.random;
            var7 = var1.bind(var7)();
            var1 = 2;
            var1 = var1 * var7;
            var4 = var4.bind(var6)(var1);
            var1 = 3;
            var7 = var4 + var1;
            var6 = _closure1_slot50;
            var4 = var6.splice;
            var1 = 1;
            var1 = var7 - var1;
            var1 = var4.bind(var6)(var1, var5, var3);
            _fun0013_ip = 88; continue _fun0013;
case 97:
            var10 = _closure1_slot50;
            var1 = new Array(1);
            var11 = var1;
            var9 = 0;
            var5 = arraySpread(var11, var10, var9);
            var1[4] = var3;
            var4 = 1;
            var4 = var5 + var4;
            _closure1_slot50 = var1;
            _fun0013_ip = 88; continue _fun0013;
case 93:
            var1 = new Array(1);
            var1[0] = var3;
            var10 = _closure1_slot51;
            var9 = 1;
            var11 = var1;
            var3 = arraySpread(var11, var10, var9);
            _closure1_slot51 = var1;
case 88:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot69 = var1;
    var1 = function finalizeNewDehydratedItemsContent() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var11 = var3;
            var2 = new var11[var2](var10);
            var6 = var2 instanceof Object ? var2 : var3;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot35;
            var4 = var5.forEach;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot48;
            var3 = null;
            if(!(var3 != var4)) { _fun0014_ip = 28; continue _fun0014 }
case 102:
            var4 = var6.has;
            var3 = _closure1_slot48;
            var3 = var3.id;
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot48;
            if(var4) { _fun0014_ip = 103; continue _fun0014 }
case 70:
            var4 = new Array(1);
            var4[0] = var3;
            var9 = _closure1_slot35;
            var8 = 1;
            var10 = var4;
            var5 = arraySpread(var10, var9, var8);
            _closure1_slot35 = var4;
            var5 = var6.add;
            var4 = _closure1_slot48;
            var4 = var4.id;
            var4 = var5.bind(var6)(var4);
            _fun0014_ip = 28; continue _fun0014;
case 103:
            var3 = var3.id;
            var _closure2_slot1 = var3;
            var3 = _closure1_slot48;
            var3 = var3.type;
            var _closure2_slot2 = var3;
            var5 = _closure1_slot35;
            var4 = var5.findIndex;
            var3 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.id;
                    var1 = _closure2_slot1;
                    var1 = var4 === var1;
                    if(!var1) { _fun0015_ip = 104; continue _fun0015 }
case 105:
                    var3 = var3.type;
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
case 104:
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var3);
            var3 = -1;
            if(!(var3 !== var4)) { _fun0014_ip = 28; continue _fun0014 }
case 106:
            var3 = _closure1_slot35;
            var3 = var3[var4];
            _closure1_slot48 = var3;
            var5 = _closure1_slot35;
            var4 = var5.filter;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 !== var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure1_slot35 = var3;
            var4 = _closure1_slot48;
            var3 = new Array(1);
            var3[0] = var4;
            var9 = _closure1_slot35;
            var8 = 1;
            var10 = var3;
            var4 = arraySpread(var10, var9, var8);
            _closure1_slot35 = var3;
case 28:
            var3 = _closure1_slot35;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot38;
                    var1 = var2.id;
                    var4[var1] = var2;
                    var5 = var2.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.ICYMIItemTypes;
                    var4 = var4.CUSTOM_STATUS;
                    if(!(var5 === var4)) { _fun0016_ip = 107; continue _fun0016 }
case 108:
                    var6 = _closure1_slot22;
                    var5 = var6.isBlockedOrIgnored;
                    var4 = var2.data;
                    var4 = var4.user_id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0016_ip = 109; continue _fun0016 }
case 67:
                    var6 = _closure1_slot39;
                    var5 = var2.id;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 23;
                    var4 = var8[var4];
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.customStatusToContentInventoryEntry;
                    var4 = var4.bind(var7)(var2);
                    var6[var5] = var4;
                    _fun0016_ip = 107; continue _fun0016;
case 109:
                    var4 = _closure1_slot40;
                    var3 = var2.id;
                    var2 = true;
                    var4[var3] = var2;
case 107:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot70 = var1;
    var1 = function reload(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var2 = _closure1_slot35;
            var2 = var2.length;
            var7 = 0;
            if(!(var2 > var7)) { _fun0017_ip = 69; continue _fun0017 }
case 110:
            var2 = _closure1_slot35;
            _closure1_slot32 = var2;
            var2 = new Array(0);
            _closure1_slot35 = var2;
            var2 = new Array(0);
            _closure1_slot36 = var2;
case 69:
            var2 = _closure1_slot43;
            var2 = var2 + 1;
            _closure1_slot43 = var2;
            var2 = null;
            if(!(var2 == var1)) { _fun0017_ip = 71; continue _fun0017 }
case 108:
            var5 = _closure1_slot72;
            var4 = _closure1_slot32;
            var8 = undefined;
            var6 = var5.bind(var8)(var4);
            var5 = _closure1_slot8;
            var4 = 2;
            var6 = var5.bind(var8)(var6, var4);
            var5 = var6[var7];
            var4 = 1;
            var4 = var6[var4];
            _closure1_slot50 = var5;
            _closure1_slot51 = var4;
            _fun0017_ip = 111; continue _fun0017;
case 71:
            var4 = var1.newUnread;
            _closure1_slot50 = var4;
            var1 = var1.newRead;
            _closure1_slot51 = var1;
case 111:
            var4 = _closure1_slot68;
            var1 = undefined;
            var4 = var4.bind(var1)();
            var4 = _closure1_slot37;
            var4 = var4.load_id;
            var4 = var2 != var4;
            if(!var4) { _fun0017_ip = 112; continue _fun0017 }
case 19:
            var6 = _closure1_slot33;
            var5 = _closure1_slot37;
            var5 = var5.load_id;
            var4 = var6 !== var5;
case 112:
            if(!var4) { _fun0017_ip = 113; continue _fun0017 }
case 20:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 28;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var6 = var4.ICYMIAnalytics;
            var5 = var6.trackFeedLoaded;
            var4 = {};
            var8 = _closure1_slot37;
            var4['newTrackingProps'] = var8;
            var8 = _closure1_slot45;
            var4['hasNewContent'] = var8;
            var8 = _closure1_slot50;
            var4['unreadFeedItems'] = var8;
            var8 = _closure1_slot51;
            var4['readFeedItems'] = var8;
            var8 = 'gravity';
            var4['homeSessionId'] = var8;
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot37;
            var4 = var4.load_id;
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0017_ip = 114; continue _fun0017 }
case 115:
            var2 = var4;
case 114:
            _closure1_slot33 = var2;
            var2 = {};
            _closure1_slot37 = var2;
case 113:
            _closure1_slot52 = var7;
            var2 = _closure1_slot50;
            var4 = var2.length;
            var2 = _closure1_slot51;
            var2 = var2.length;
            var2 = var4 + var2;
            if(!(var2 === var7)) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var2 = true;
            _closure1_slot59 = var2;
case 116:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 23;
            var2 = var9[var2];
            var6 = var8.bind(var1)(var2);
            var5 = var6.hydrateItems;
            var12 = _closure1_slot50;
            var4 = new Array(0);
            var13 = var4;
            var11 = 0;
            var11 = arraySpread(var13, var12, var11);
            var12 = _closure1_slot51;
            var13 = var4;
            var2 = arraySpread(var13, var12, var11);
            var2 = 24;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.ICYMI_PAGE_SIZE;
            var2 = var5.bind(var6)(var4, var7, var2);
            var2 = false;
            _closure1_slot56 = var2;
            return var1;
        }
    };
    var _closure1_slot71 = var1;
    var1 = function computeDisplayItems(arg1) {
        var7 = arg1;
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var5 = new Array(0);
        var _closure2_slot1 = var5;
        var6 = new Array(0);
        var _closure2_slot2 = var6;
        var3 = var7.forEach;
        var1 = function(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = arg1;
                var5 = _closure1_slot25;
                var3 = var5.getReadTimestamp;
                var1 = var4.id;
                var1 = var3.bind(var5)(var1);
                var9 = null;
                var8 = var9 != var1;
                var7 = var4.type;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 24;
                var3 = var1[var6];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.ICYMIItemTypes;
                var5 = var3.MESSAGE;
                var3 = var8;
                if(!(var7 === var5)) { _fun0018_ip = 20; continue _fun0018 }
case 118:
                var5 = var4.data;
                var5 = var5.message_context;
                var10 = var9 == var5;
                var7 = undefined;
                if(var10) { _fun0018_ip = 119; continue _fun0018 }
case 54:
                var7 = var5.external_content_application_id;
case 119:
                var5 = var8;
                if(!(var9 == var7)) { _fun0018_ip = 112; continue _fun0018 }
case 71:
                var7 = var8;
                if(var8) { _fun0018_ip = 120; continue _fun0018 }
case 121:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 23;
                var8 = var10[var8];
                var11 = var9.bind(var1)(var8);
                var10 = var11.isItemUnreadInChannel;
                var8 = var4.data;
                var9 = var8.channel_id;
                var8 = var4.data;
                var8 = var8.message_id;
                var8 = var10.bind(var11)(var9, var8);
                var7 = !var8;
case 120:
                var5 = var7;
case 112:
                var3 = var5;
case 20:
                if(var3) { _fun0018_ip = 59; continue _fun0018 }
case 122:
                var3 = var4.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ICYMIItemTypes;
                var2 = var2.MESSAGE;
                if(!(var3 === var2)) { _fun0018_ip = 25; continue _fun0018 }
case 123:
                var2 = var4.data;
                var2 = var2.has_mention;
                if(var2) { _fun0018_ip = 124; continue _fun0018 }
case 25:
                var3 = _closure2_slot1;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                _fun0018_ip = 29; continue _fun0018;
case 124:
                var3 = _closure2_slot2;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
                _fun0018_ip = 29; continue _fun0018;
case 59:
                var3 = _closure2_slot0;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
case 29:
                return var1;
            }
        };
        var1 = var3.bind(var7)(var1);
        var3 = new Array(0);
        var8 = 0;
        var10 = var3;
        var9 = var6;
        var8 = arraySpread(var10, var9, var8);
        var10 = var3;
        var9 = var5;
        var1 = arraySpread(var10, var9, var8);
        var1 = new Array(2);
        var1[0] = var3;
        var3 = var4.sort;
        var2 = function(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.compareGravityUnreadIds;
            var1 = arg1;
            var2 = var1.id;
            var1 = arg2;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot72 = var1;
    var1 = function getNewUnreadItems(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var11 = arg2;
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Set;
            var5 = _closure1_slot32;
            var3 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var19 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var20 = var3;
            var2 = new var20[var4](var19, var18);
            var9 = var2 instanceof Object ? var2 : var3;
            var3 = _closure1_slot63;
            var8 = undefined;
            var2 = arg1;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = 23;
            var5 = 24;
            var4 = null;
            if(var2) { _fun0019_ip = 125; continue _fun0019 }
case 54:
            var12 = var3.value;
            var13 = var12.type;
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var14.bind(var8)(var2);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.RECOMMENDED_GUILDS;
            if(!(var13 !== var2)) { _fun0019_ip = 126; continue _fun0019 }
case 103:
            var13 = var9.has;
            var2 = var12.id;
            var2 = var13.bind(var9)(var2);
            if(var2) { _fun0019_ip = 126; continue _fun0019 }
case 127:
            var14 = _closure1_slot25;
            var13 = var14.getReadTimestamp;
            var2 = var12.id;
            var2 = var13.bind(var14)(var2);
            var2 = var4 == var2;
            if(!var2) { _fun0019_ip = 128; continue _fun0019 }
case 129:
            var14 = var12.type;
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var5];
            var13 = var15.bind(var8)(var13);
            var13 = var13.ICYMIItemTypes;
            var13 = var13.MESSAGE;
            var13 = var14 !== var13;
            if(var13) { _fun0019_ip = 130; continue _fun0019 }
case 131:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var6];
            var17 = var15.bind(var8)(var14);
            var16 = var17.isItemUnreadInChannel;
            var14 = var12.data;
            var15 = var14.channel_id;
            var14 = var12.data;
            var14 = var14.message_id;
            var14 = var16.bind(var17)(var15, var14);
            if(!var14) { _fun0019_ip = 132; continue _fun0019 }
case 133:
            var15 = var12.data;
            var15 = var15.channel_id;
            var14 = var15 !== var11;
case 132:
            var13 = var14;
case 130:
            var2 = var13;
case 128:
            if(!var2) { _fun0019_ip = 126; continue _fun0019 }
case 134:
            var2 = var1.push;
            var2 = var2.bind(var1)(var12);
case 126:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var3 = var12;
            if(!var2) { _fun0019_ip = 54; continue _fun0019 }
case 125:
            return var1;
        }
    };
    var _closure1_slot73 = var1;
    var1 = function filterDehydratedItemListByChannel(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isGuildItem;
                var1 = var1.bind(var3)(var2);
                var1 = !var1;
                if(var1) { _fun0020_ip = 135; continue _fun0020 }
case 69:
                var2 = var2.data;
                var3 = var2.channel_id;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 135:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot74 = var1;
    var1 = function maybeFilterChannelItems(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var4 = var7[var2];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var8 = var9.numberToCustomScore;
            var4 = arg2;
            var4 = var8.bind(var9)(var4);
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            if(!(var4 === var2)) { _fun0021_ip = 136; continue _fun0021 }
case 34:
            var4 = _closure1_slot74;
            var2 = _closure1_slot32;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot32 = var2;
            var2 = _closure1_slot50;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot50 = var2;
            var2 = _closure1_slot51;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot51 = var2;
            var2 = _closure1_slot35;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot35 = var2;
            var2 = _closure1_slot36;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot36 = var2;
case 136:
            return var1;
        }
    };
    var _closure1_slot75 = var1;
    var1 = function filterDehydratedItemListByGuild(arg1, arg2) {
        var3 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var2 = var3.filter;
        var1 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.isGuildItem;
                var1 = var1.bind(var3)(var2);
                var1 = !var1;
                if(var1) { _fun0022_ip = 135; continue _fun0022 }
case 69:
                var2 = var2.data;
                var3 = var2.guild_id;
                var2 = _closure2_slot0;
                var1 = var3 !== var2;
case 135:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot76 = var1;
    var1 = function maybeFilterGuildItems(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var4 = var7[var2];
            var1 = undefined;
            var9 = var6.bind(var1)(var4);
            var8 = var9.numberToCustomScore;
            var4 = arg2;
            var4 = var8.bind(var9)(var4);
            var2 = var7[var2];
            var2 = var6.bind(var1)(var2);
            var2 = var2.ICYMICustomScore;
            var2 = var2.MUTED;
            if(!(var4 === var2)) { _fun0023_ip = 136; continue _fun0023 }
case 34:
            var4 = _closure1_slot76;
            var2 = _closure1_slot32;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot32 = var2;
            var2 = _closure1_slot50;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot50 = var2;
            var2 = _closure1_slot51;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot51 = var2;
            var2 = _closure1_slot35;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot35 = var2;
            var2 = _closure1_slot36;
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot36 = var2;
case 136:
            return var1;
        }
    };
    var _closure1_slot77 = var1;
    var10 = function handleReaction(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var4 = arg1;
            var5 = var4.type;
            var3 = var4.messageId;
            var6 = var4.userId;
            var9 = var4.emoji;
            var8 = var4.reactionType;
            var1 = _closure1_slot39;
            var3 = var1[var3];
            var1 = null;
            if(!(var1 != var3)) { _fun0024_ip = 137; continue _fun0024 }
case 138:
            var10 = var3.type;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 24;
            var7 = var7[var1];
            var1 = undefined;
            var7 = var11.bind(var1)(var7);
            var7 = var7.ICYMIItemTypes;
            var7 = var7.MESSAGE;
            if(!(var10 === var7)) { _fun0024_ip = 20; continue _fun0024 }
case 139:
            var7 = _closure1_slot15;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            var7 = var2 === var6;
            var2 = 'MESSAGE_REACTION_ADD';
            if(!(var2 !== var5)) { _fun0024_ip = 140; continue _fun0024 }
case 53:
            var5 = var3.message;
            var2 = var5.removeReaction;
            var2 = var2.bind(var5)(var9, var7, var8);
            _fun0024_ip = 141; continue _fun0024;
case 140:
            var6 = var3.message;
            var5 = var6.addReaction;
            var13 = var4.colors;
            var16 = var6;
            var15 = var9;
            var14 = var7;
            var12 = var8;
            var2 = var16[var5](var15, var14, var13, var12, var11);
case 141:
            var3['message'] = var2;
            return var1;
case 20:
            var1 = false;
            return var1;
case 137:
            var1 = false;
            return var1;
        }
    };
    var9 = function handleAck(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var9 = var2.channelId;
            var _closure2_slot0 = var9;
            var5 = new Array(0);
            var _closure2_slot1 = var5;
            var2 = new Array(0);
            var _closure2_slot2 = var2;
            var6 = _closure1_slot50;
            var4 = var6.forEach;
            var1 = function(arg1, arg2) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot52;
                    var2 = arg2;
                    if(!(!(var2 > var4))) { _fun0026_ip = 142; continue _fun0026 }
case 143:
                    var2 = _closure1_slot46;
                    if(var2) { _fun0026_ip = 75; continue _fun0026 }
case 142:
                    var2 = var3.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.ICYMIItemTypes;
                    var1 = var1.MESSAGE;
                    if(!(var2 === var1)) { _fun0026_ip = 75; continue _fun0026 }
case 34:
                    var1 = var3.data;
                    var4 = var1.channel_id;
                    var2 = _closure2_slot0;
                    if(!(var4 !== var2)) { _fun0026_ip = 72; continue _fun0026 }
case 75:
                    var4 = _closure2_slot2;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                    _fun0026_ip = 144; continue _fun0026;
case 72:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
case 144:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1);
            var7 = _closure1_slot45;
            var6 = _closure1_slot72;
            var4 = _closure1_slot35;
            var1 = undefined;
            var8 = var6.bind(var1)(var4);
            var6 = _closure1_slot8;
            var4 = 2;
            var10 = var6.bind(var1)(var8, var4);
            var6 = 0;
            var8 = var10[var6];
            var4 = 1;
            var4 = var10[var4];
            var4 = _closure1_slot73;
            var4 = var4.bind(var1)(var8, var9);
            _closure1_slot36 = var4;
            var4 = _closure1_slot46;
            if(var4) { _fun0025_ip = 145; continue _fun0025 }
case 146:
            var4 = var7;
            if(!var7) { _fun0025_ip = 91; continue _fun0025 }
case 147:
            var9 = _closure1_slot65;
            var8 = _closure1_slot35;
            var4 = var9.bind(var1)(var2, var8);
case 91:
            _fun0025_ip = 148; continue _fun0025;
case 145:
            var8 = var7;
            if(!var8) { _fun0025_ip = 23; continue _fun0025 }
case 149:
            var9 = _closure1_slot36;
            var10 = var9.length;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 24;
            var9 = var12[var9];
            var9 = var11.bind(var1)(var9);
            var9 = var9.MIN_ITEMS_FOR_NEW_PILL;
            var8 = var10 >= var9;
case 23:
            var4 = var8;
case 148:
            _closure1_slot45 = var4;
            var4 = var5.length;
            if(!(var6 === var4)) { _fun0025_ip = 150; continue _fun0025 }
case 151:
            var4 = _closure1_slot45;
            if(!(var7 !== var4)) { _fun0025_ip = 152; continue _fun0025 }
case 150:
            var4 = var5.length;
            if(!(var6 !== var4)) { _fun0025_ip = 153; continue _fun0025 }
case 123:
            _closure1_slot50 = var2;
            var14 = _closure1_slot51;
            var2 = new Array(0);
            var15 = var2;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var15 = var2;
            var14 = var5;
            var4 = arraySpread(var15, var14, var13);
            _closure1_slot51 = var2;
case 153:
            return var1;
case 152:
            var1 = false;
            return var1;
        }
    };
    var11 = global;
    var13 = var11.Object;
    var8 = var13.defineProperty;
    var2 = {};
    var12 = true;
    var2['value'] = var12;
    var1 = '__esModule';
    var1 = var8.bind(var13)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var15 = 1;
    var8 = var6[var15];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var13 = 3;
    var8 = var6[var13];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var14 = var6[var8];
    var14 = var5.bind(var1)(var14);
    var16 = var14.eventScheduledToStartWithin;
    var _closure1_slot11 = var16;
    var16 = var14.isGuildEventEnded;
    var _closure1_slot12 = var16;
    var14 = var14.isGuildScheduledEventActive;
    var _closure1_slot13 = var14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot23 = var8;
    var8 = 18;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot24 = var8;
    var8 = 19;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot25 = var8;
    var8 = 20;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var14 = var8.ChannelTypes;
    var _closure1_slot26 = var14;
    var14 = var8.GuildFeatures;
    var _closure1_slot27 = var14;
    var8 = var8.Permissions;
    var _closure1_slot28 = var8;
    var8 = 21;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ContentInventoryFeedKey;
    var _closure1_slot29 = var8;
    var8 = 22;
    var14 = var6[var8];
    var14 = var7.bind(var1)(var14);
    var14 = var14.Millis;
    var14 = var14.DAY;
    var14 = var15 * var14;
    var _closure1_slot30 = var14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.DAY;
    var8 = var13 * var8;
    var _closure1_slot31 = var8;
    var8 = new Array(0);
    var _closure1_slot32 = var8;
    var13 = null;
    var _closure1_slot33 = var13;
    var _closure1_slot34 = var2;
    var8 = new Array(0);
    var _closure1_slot35 = var8;
    var8 = new Array(0);
    var _closure1_slot36 = var8;
    var8 = {};
    var _closure1_slot37 = var8;
    var8 = {};
    var _closure1_slot38 = var8;
    var8 = {};
    var _closure1_slot39 = var8;
    var8 = {};
    var _closure1_slot40 = var8;
    var8 = {};
    var _closure1_slot41 = var8;
    var8 = {};
    var _closure1_slot42 = var8;
    var _closure1_slot43 = var2;
    var8 = false;
    var _closure1_slot44 = var8;
    var _closure1_slot45 = var8;
    var _closure1_slot46 = var8;
    var _closure1_slot47 = var13;
    var _closure1_slot48 = var13;
    var _closure1_slot49 = var2;
    var13 = new Array(0);
    var _closure1_slot50 = var13;
    var13 = new Array(0);
    var _closure1_slot51 = var13;
    var _closure1_slot52 = var2;
    var13 = new Array(0);
    var _closure1_slot53 = var13;
    var _closure1_slot54 = var2;
    var _closure1_slot55 = var12;
    var _closure1_slot56 = var8;
    var11 = var11.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {constructor: {value: var11}});
    var20 = var12;
    var11 = new var20[var11](var19);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot57 = var11;
    var _closure1_slot58 = var8;
    var _closure1_slot59 = var8;
    var _closure1_slot60 = var2;
    var _closure1_slot61 = var2;
    var2 = 31;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ICYMIStore() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
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
                var1 = _closure1_slot62;
                var1 = var1.bind(var3)();
                if(var1) { _fun0027_ip = 154; continue _fun0027 }
case 155:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0027_ip = 156; continue _fun0027;
case 154:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 156:
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
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var3 = arg1;
                var18 = this;
                var17 = var18.waitFor;
                var32 = _closure1_slot15;
                var31 = _closure1_slot16;
                var30 = _closure1_slot9;
                var29 = _closure1_slot10;
                var28 = _closure1_slot17;
                var27 = _closure1_slot14;
                var26 = _closure1_slot18;
                var25 = _closure1_slot24;
                var24 = _closure1_slot25;
                var23 = _closure1_slot19;
                var22 = _closure1_slot20;
                var21 = _closure1_slot21;
                var20 = _closure1_slot22;
                var19 = _closure1_slot23;
                var33 = var18;
                var1 = var33[var17](var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
                var4 = null;
                if(!(var4 != var3)) { _fun0028_ip = 157; continue _fun0028 }
case 158:
                var6 = var3.dehydratedItems;
                if(!(var4 == var6)) { _fun0028_ip = 159; continue _fun0028 }
case 70:
                var6 = new Array(0);
case 159:
                _closure1_slot32 = var6;
                var5 = var6.forEach;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = _closure1_slot38;
                    var1 = var3.id;
                    var2[var1] = var3;
                    var1 = undefined;
                    return var1;
                };
                var1 = var5.bind(var6)(var1);
                var1 = var3.customGuildScores;
                if(!(var4 == var1)) { _fun0028_ip = 160; continue _fun0028 }
case 161:
                var1 = {};
case 160:
                _closure1_slot41 = var1;
                var1 = var3.customChannelScoresByGuild;
                if(!(var4 == var1)) { _fun0028_ip = 107; continue _fun0028 }
case 162:
                var1 = {};
case 107:
                _closure1_slot42 = var1;
                var6 = var3.numOpens;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0028_ip = 163; continue _fun0028 }
case 141:
                var5 = var6;
case 163:
                _closure1_slot49 = var5;
                var6 = var3.lastOpened;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0028_ip = 164; continue _fun0028 }
case 165:
                var5 = var6;
case 164:
                _closure1_slot34 = var5;
                var6 = var3.lastJoinedRecommendedGuild;
                var7 = var4 != var6;
                var5 = 0;
                if(!var7) { _fun0028_ip = 166; continue _fun0028 }
case 60:
                var5 = var6;
case 166:
                _closure1_slot54 = var5;
                var3 = var3.lastTakenICYMISurvey;
                var4 = var4 != var3;
                var1 = 0;
                if(!var4) { _fun0028_ip = 167; continue _fun0028 }
case 168:
                var1 = var3;
case 167:
                _closure1_slot61 = var1;
case 157:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(33);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVersion';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot43;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot32;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNewDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot35;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDehydratedItem';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var2 = _closure1_slot38;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0029_ip = 169; continue _fun0029 }
case 35:
                var1 = var2;
case 169:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getHydratedItem';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var2 = _closure1_slot39;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0030_ip = 169; continue _fun0030 }
case 35:
                var1 = var2;
case 169:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var2 = _closure1_slot39;
                var1 = arg1;
                var2 = var2[var1];
                var5 = null;
                var4 = var5 == var2;
                var1 = null;
                if(var4) { _fun0031_ip = 170; continue _fun0031 }
case 171:
                var4 = var2.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 24;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.MESSAGE;
                var1 = null;
                if(!(var4 === var3)) { _fun0031_ip = 170; continue _fun0031 }
case 39:
                var1 = var2.message;
case 170:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getHydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot39;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getUnreadDisplayItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot50;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getNewUnreadDehydratedItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot36;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getReadDisplayItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot51;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getNextIndexToHydrate';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot52;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getMissingItems';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot40;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'customMuted';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var8 = arg1;
                var7 = this;
                var1 = var7.getCustomGuildScore;
                var3 = var1.bind(var7)(var8);
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 23;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.ICYMICustomScore;
                var1 = var1.MUTED;
                var1 = var3 === var1;
                if(var1) { _fun0032_ip = 172; continue _fun0032 }
case 11:
                var4 = var7.getCustomChannelScore;
                var3 = arg2;
                var3 = var4.bind(var7)(var8, var3);
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ICYMICustomScore;
                var2 = var2.MUTED;
                var1 = var3 === var2;
case 172:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCustomChannelScore';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var3 = null;
                if(!(var3 != var1)) { _fun0033_ip = 13; continue _fun0033 }
case 35:
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var1 = var1[var5];
                if(!(var3 != var1)) { _fun0033_ip = 13; continue _fun0033 }
case 173:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.numberToCustomScore;
                var1 = _closure1_slot42;
                var1 = var1[var6];
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                _fun0033_ip = 146; continue _fun0033;
case 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 23;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ICYMICustomScore;
                var1 = var2.UNKNOWN;
case 146:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getCustomGuildScore';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var2 = _closure1_slot41;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0034_ip = 38; continue _fun0034 }
case 171:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getCustomGuildScores';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot41;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'hasNewContent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot45;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getCurrentStatusAttachments';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = _closure1_slot47;
                var2 = null;
                if(!(var2 != var3)) { _fun0035_ip = 174; continue _fun0035 }
case 175:
                var3 = _closure1_slot47;
                var2 = 0;
                var3 = var3[var2];
                var2 = arg1;
                if(!(var3 === var2)) { _fun0035_ip = 174; continue _fun0035 }
case 7:
                var2 = _closure1_slot47;
                var1 = 1;
                var1 = var2[var1];
                _fun0035_ip = 176; continue _fun0035;
case 174:
                var1 = new Array(0);
case 176:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getLoadId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot33;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'hasOpenedEnoughTimes';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot49;
            var1 = 5;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'hasOpened';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot46;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getDiscoverableGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot53;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'videosMuted';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot55;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'isRefreshing';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot56;
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'isHydrating';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot57;
            var2 = var1.size;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'notificationItem';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot48;
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getIsTabFocused';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot58;
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'isFirstPageHydrated';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot59;
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'lastScrollEvent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot60;
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'lastTakenICYMISurvey';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot61;
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'getIndexInHydratedFeed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var1 = 'recommended_guilds';
                if(!(var1 !== var3)) { _fun0036_ip = 70; continue _fun0036 }
case 177:
                var1 = 'recommendedGuilds';
                if(!(var1 !== var3)) { _fun0036_ip = 70; continue _fun0036 }
case 178:
                var8 = _closure1_slot50;
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure1_slot51;
                var9 = var4;
                var1 = arraySpread(var9, var8, var7);
                var3 = var4.filter;
                var1 = function(arg1) {
                    var2 = _closure1_slot39;
                    var1 = arg1;
                    var1 = var1.id;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.findIndex;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _fun0036_ip = 92; continue _fun0036;
case 70:
                var8 = _closure1_slot50;
                var4 = new Array(0);
                var7 = 0;
                var9 = var4;
                var7 = arraySpread(var9, var8, var7);
                var8 = _closure1_slot51;
                var9 = var4;
                var3 = arraySpread(var9, var8, var7);
                var3 = var4.findIndex;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 24;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.ICYMIItemTypes;
                    var1 = var1.RECOMMENDED_GUILDS;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 92:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot32;
            var1['dehydratedItems'] = var3;
            var3 = _closure1_slot49;
            var1['numOpens'] = var3;
            var3 = _closure1_slot41;
            var1['customGuildScores'] = var3;
            var3 = _closure1_slot42;
            var1['customChannelScoresByGuild'] = var3;
            var3 = _closure1_slot34;
            var1['lastOpened'] = var3;
            var3 = _closure1_slot54;
            var1['lastJoinedRecommendedGuild'] = var3;
            var2 = _closure1_slot61;
            var1['lastTakenICYMISurvey'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[32] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ICYMIStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 32;
    var2 = var6[var2];
    var19 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleLogout() {
        var1 = new Array(0);
        _closure1_slot32 = var1;
        var1 = new Array(0);
        _closure1_slot35 = var1;
        var1 = new Array(0);
        _closure1_slot36 = var1;
        var1 = {};
        _closure1_slot38 = var1;
        var1 = {};
        _closure1_slot37 = var1;
        var1 = {};
        _closure1_slot39 = var1;
        var1 = {};
        _closure1_slot40 = var1;
        var3 = null;
        _closure1_slot33 = var3;
        var1 = {};
        _closure1_slot41 = var1;
        var1 = {};
        _closure1_slot42 = var1;
        var1 = 0;
        _closure1_slot43 = var1;
        var4 = false;
        _closure1_slot44 = var4;
        _closure1_slot45 = var4;
        _closure1_slot46 = var4;
        var5 = new Array(0);
        _closure1_slot50 = var5;
        var5 = new Array(0);
        _closure1_slot51 = var5;
        _closure1_slot52 = var1;
        _closure1_slot34 = var1;
        _closure1_slot54 = var1;
        var5 = true;
        _closure1_slot55 = var5;
        _closure1_slot56 = var4;
        var5 = global;
        var5 = var5.Set;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var7 = var6;
        var5 = new var7[var5](var6);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot57 = var5;
        _closure1_slot48 = var3;
        _closure1_slot58 = var4;
        _closure1_slot59 = var4;
        _closure1_slot47 = var3;
        _closure1_slot60 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var11;
    var11 = function handleLoadICYMIFromNotification(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var9 = var1.messageItem;
            var2 = var1.customStatusItem;
            var3 = null;
            if(!(var3 == var2)) { _fun0037_ip = 179; continue _fun0037 }
case 142:
            if(!(var3 == var9)) { _fun0037_ip = 180; continue _fun0037 }
case 38:
            var1 = false;
            return var1;
case 180:
            var6 = {};
            var1 = var9.message;
            var1 = var1.id;
            var6['id'] = var1;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 24;
            var1 = var12[var1];
            var8 = undefined;
            var1 = var11.bind(var8)(var1);
            var1 = var1.ICYMIItemTypes;
            var1 = var1.MESSAGE;
            var6['type'] = var1;
            var1 = 50;
            var6['score'] = var1;
            var1 = {};
            var5 = var9.channel_id;
            var1['channel_id'] = var5;
            var5 = var9.message;
            var5 = var5.id;
            var1['message_id'] = var5;
            var5 = var9.guild_id;
            var1['guild_id'] = var5;
            var5 = _closure1_slot26;
            var5 = var5.GUILD_TEXT;
            var1['channel_type'] = var5;
            var6['data'] = var1;
            var5 = _closure1_slot38;
            var1 = var9.message;
            var1 = var1.id;
            var5[var1] = var6;
            var7 = _closure1_slot39;
            var1 = var9.message;
            var5 = var1.id;
            var1 = {};
            var15 = var1;
            var14 = var6;
            var10 = copyDataProperties(var15, var14);
            var10 = 30;
            var10 = var12[var10];
            var11 = var11.bind(var8)(var10);
            var10 = var11.createMessageRecord;
            var9 = var9.message;
            var10 = var10.bind(var11)(var9);
            var9 = 'message';
            var1[8] = var10;
            var7[var5] = var1;
            var1 = _closure1_slot33;
            if(!(var3 == var1)) { _fun0037_ip = 181; continue _fun0037 }
case 157:
            var1 = _closure1_slot37;
            if(!(var3 != var1)) { _fun0037_ip = 81; continue _fun0037 }
case 181:
            var1 = new Array(1);
            var1[0] = var6;
            var14 = _closure1_slot35;
            var13 = 1;
            var15 = var1;
            var5 = arraySpread(var15, var14, var13);
            _closure1_slot35 = var1;
            var1 = _closure1_slot71;
            var1 = var1.bind(var8)();
            _fun0037_ip = 182; continue _fun0037;
case 81:
            var5 = _closure1_slot72;
            var1 = new Array(1);
            var1[0] = var6;
            var14 = _closure1_slot32;
            var6 = 1;
            var15 = var1;
            var13 = var6;
            var7 = arraySpread(var15, var14, var13);
            _closure1_slot32 = var1;
            var7 = var5.bind(var8)(var1);
            var5 = _closure1_slot8;
            var1 = 2;
            var1 = var5.bind(var8)(var7, var1);
            var5 = 0;
            var5 = var1[var5];
            var1 = var1[var6];
            _closure1_slot50 = var5;
            _closure1_slot51 = var1;
case 182:
            var1 = true;
            return var1;
case 179:
            _closure1_slot48 = var2;
            var2 = _closure1_slot33;
            if(!(var3 != var2)) { _fun0037_ip = 183; continue _fun0037 }
case 184:
            var2 = _closure1_slot35;
            var2 = var2.length;
            var4 = 0;
            if(!(!(var2 > var4))) { _fun0037_ip = 185; continue _fun0037 }
case 186:
            var14 = _closure1_slot32;
            var2 = new Array(0);
            var15 = var2;
            var13 = 0;
            var3 = arraySpread(var15, var14, var13);
            _fun0037_ip = 187; continue _fun0037;
case 185:
            var2 = _closure1_slot35;
case 187:
            _closure1_slot35 = var2;
            var3 = _closure1_slot70;
            var2 = undefined;
            var3 = var3.bind(var2)();
            var1 = _closure1_slot71;
            var1 = var1.bind(var2)();
case 183:
            var1 = true;
            return var1;
        }
    };
    var2['LOAD_ICYMI_FROM_NOTIFICATION'] = var11;
    var11 = function handleLoadDehydrated(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var5 = var1.items;
            var7 = var1.loadId;
            var8 = var1.startTime;
            var3 = var1.isInitialLoad;
            var4 = var1.isReloading;
            var2 = function processRawItems(arg1) {
                var5 = arg1;
                var2 = global;
                var6 = var2.Set;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 24;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var8 = var3.SUPPORTED_ITEM_TYPES;
                var4 = var6.prototype;
                var4 = Object.create(var4, {constructor: {value: var6}});
                var9 = var4;
                var3 = new var9[var6](var8, var7);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var4 = var5.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var1.type;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = _closure1_slot66;
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.type;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 24;
                        var2 = var5[var2];
                        var6 = undefined;
                        var2 = var4.bind(var6)(var2);
                        var2 = var2.ICYMIItemTypes;
                        var2 = var2.MESSAGE;
                        if(!(var3 === var2)) { _fun0039_ip = 188; continue _fun0039 }
case 189:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0039_ip = 188; continue _fun0039 }
case 3:
                        var3 = {};
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.reply_message_id;
                        var2 = var4 != var2;
                        if(!var2) { _fun0039_ip = 161; continue _fun0039 }
case 54:
                        var5 = global;
                        var7 = var5.parseInt;
                        var5 = var1.data;
                        var5 = var5.message_context;
                        var5 = var5.reply_message_id;
                        var7 = var7.bind(var6)(var5);
                        var5 = 0;
                        var2 = var5 !== var7;
case 161:
                        if(!var2) { _fun0039_ip = 190; continue _fun0039 }
case 109:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.reply_message_id;
                        var3['reply_message_id'] = var2;
case 190:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.before_message_id;
                        var2 = var4 != var2;
                        if(!var2) { _fun0039_ip = 123; continue _fun0039 }
case 191:
                        var5 = global;
                        var7 = var5.parseInt;
                        var5 = var1.data;
                        var5 = var5.message_context;
                        var5 = var5.before_message_id;
                        var7 = var7.bind(var6)(var5);
                        var5 = 0;
                        var2 = var5 !== var7;
case 123:
                        if(!var2) { _fun0039_ip = 192; continue _fun0039 }
case 193:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.before_message_id;
                        var3['before_message_id'] = var2;
case 192:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.after_message_id;
                        var2 = var4 != var2;
                        if(!var2) { _fun0039_ip = 128; continue _fun0039 }
case 16:
                        var5 = global;
                        var7 = var5.parseInt;
                        var5 = var1.data;
                        var5 = var5.message_context;
                        var5 = var5.after_message_id;
                        var7 = var7.bind(var6)(var5);
                        var5 = 0;
                        var2 = var5 !== var7;
case 128:
                        if(!var2) { _fun0039_ip = 194; continue _fun0039 }
case 134:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.after_message_id;
                        var3['after_message_id'] = var2;
case 194:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.external_content_application_id;
                        var2 = var4 != var2;
                        if(!var2) { _fun0039_ip = 195; continue _fun0039 }
case 64:
                        var5 = global;
                        var7 = var5.parseInt;
                        var5 = var1.data;
                        var5 = var5.message_context;
                        var5 = var5.external_content_application_id;
                        var7 = var7.bind(var6)(var5);
                        var5 = 0;
                        var2 = var5 !== var7;
case 195:
                        if(!var2) { _fun0039_ip = 196; continue _fun0039 }
case 197:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.external_content_application_id;
                        var3['external_content_application_id'] = var2;
case 196:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.reference_message_id;
                        var2 = var4 != var2;
                        if(!var2) { _fun0039_ip = 198; continue _fun0039 }
case 199:
                        var4 = global;
                        var5 = var4.parseInt;
                        var4 = var1.data;
                        var4 = var4.message_context;
                        var4 = var4.reference_message_id;
                        var5 = var5.bind(var6)(var4);
                        var4 = 0;
                        var2 = var4 !== var5;
case 198:
                        if(!var2) { _fun0039_ip = 200; continue _fun0039 }
case 201:
                        var2 = var1.data;
                        var2 = var2.message_context;
                        var2 = var2.reference_message_id;
                        var3['reference_message_id'] = var2;
case 200:
                        var2 = var1.data;
                        var2['message_context'] = var3;
case 188:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            _closure1_slot35 = var2;
            var2 = _closure1_slot70;
            var2 = var2.bind(var1)();
            var2 = {};
            var2['load_id'] = var7;
            var7 = global;
            var9 = var7.Date;
            var7 = var9.now;
            var7 = var7.bind(var9)();
            var7 = var7 - var8;
            var2['load_time_millis'] = var7;
            var8 = _closure1_slot35;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['feed_item_ids'] = var6;
            _closure1_slot37 = var2;
            var6 = _closure1_slot72;
            var2 = _closure1_slot35;
            var7 = var6.bind(var1)(var2);
            var6 = _closure1_slot8;
            var2 = 2;
            var8 = var6.bind(var1)(var7, var2);
            var2 = 0;
            var7 = var8[var2];
            var6 = 1;
            var6 = var8[var6];
            var8 = _closure1_slot73;
            var8 = var8.bind(var1)(var7);
            _closure1_slot36 = var8;
            var8 = _closure1_slot46;
            if(!var8) { _fun0038_ip = 202; continue _fun0038 }
case 203:
            var8 = _closure1_slot43;
            if(!(var2 !== var8)) { _fun0038_ip = 202; continue _fun0038 }
case 204:
            if(var3) { _fun0038_ip = 202; continue _fun0038 }
case 205:
            var3 = _closure1_slot43;
            if(!(var3 > var2)) { _fun0038_ip = 206; continue _fun0038 }
case 207:
            var3 = null;
            _closure1_slot48 = var3;
case 206:
            var3 = _closure1_slot36;
            var8 = var3.length;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 24;
            var3 = var3[var11];
            var3 = var9.bind(var1)(var3);
            var3 = var3.MIN_ITEMS_FOR_NEW_PILL;
            var3 = var8 > var3;
            if(var4) { _fun0038_ip = 208; continue _fun0038 }
case 209:
            _closure1_slot45 = var3;
case 208:
            if(!var3) { _fun0038_ip = 210; continue _fun0038 }
case 211:
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 23;
            var4 = var3[var4];
            var9 = var10.bind(var1)(var4);
            var8 = var9.hydrateItems;
            var4 = new Array(0);
            var15 = var4;
            var14 = var7;
            var13 = 0;
            var13 = arraySpread(var15, var14, var13);
            var15 = var4;
            var14 = var6;
            var12 = arraySpread(var15, var14, var13);
            var3 = var3[var11];
            var3 = var10.bind(var1)(var3);
            var3 = var3.ICYMI_PAGE_SIZE;
            var3 = var8.bind(var9)(var4, var2, var3);
            var4 = var7.length;
            var3 = var6.length;
            var3 = var4 + var3;
            if(!(var3 === var2)) { _fun0038_ip = 210; continue _fun0038 }
case 212:
            var3 = true;
            _closure1_slot59 = var3;
            _fun0038_ip = 210; continue _fun0038;
case 202:
            _closure1_slot43 = var2;
            var2 = _closure1_slot58;
            if(var2) { _fun0038_ip = 187; continue _fun0038 }
case 213:
            var3 = _closure1_slot65;
            var2 = _closure1_slot35;
            var2 = var3.bind(var1)(var7, var2);
            if(!var2) { _fun0038_ip = 187; continue _fun0038 }
case 214:
            var2 = true;
            _closure1_slot45 = var2;
            _closure1_slot44 = var2;
            _fun0038_ip = 215; continue _fun0038;
case 187:
            var2 = false;
            _closure1_slot45 = var2;
case 215:
            var3 = _closure1_slot71;
            var2 = {};
            var2['newUnread'] = var7;
            var2['newRead'] = var6;
            var2 = var3.bind(var1)(var2);
case 210:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 28;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.ICYMIAnalytics;
            var3 = var4.trackFeedLoaded;
            var2 = {};
            var8 = _closure1_slot37;
            var2['newTrackingProps'] = var8;
            var8 = _closure1_slot45;
            var2['hasNewContent'] = var8;
            var2['unreadFeedItems'] = var7;
            var2['readFeedItems'] = var6;
            var6 = _closure1_slot58;
            var5 = 'background_load';
            if(!var6) { _fun0038_ip = 216; continue _fun0038 }
case 217:
            var5 = 'foreground_load';
case 216:
            var2['homeSessionId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['LOAD_ICYMI_DEHYDRATED'] = var11;
    var11 = function handleLoadHydratedItems(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var11 = var1.messageItems;
            var10 = var1.activityItems;
            var8 = var1.requestMessageItems;
            var4 = var1.requestActivityItems;
            var7 = var1.startingIndex;
            var6 = var1.endingIndex;
            var3 = true;
            _closure1_slot59 = var3;
            var3 = {};
            var12 = _closure1_slot39;
            var13 = var3;
            var5 = copyDataProperties(var13, var12);
            _closure1_slot39 = var3;
            var9 = var11.reduce;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.message;
                var2 = var2.id;
                var1[var2] = var3;
                return var1;
            };
            var3 = {};
            var3 = var9.bind(var11)(var5, var3);
            var _closure2_slot0 = var3;
            var9 = var10.reduce;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.id;
                var1[var2] = var3;
                return var1;
            };
            var3 = {};
            var3 = var9.bind(var10)(var5, var3);
            var _closure2_slot1 = var3;
            var5 = var8.forEach;
            var3 = function(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot0;
                    var1 = var5.message_id;
                    var1 = var2[var1];
                    var3 = null;
                    if(!(var3 == var1)) { _fun0041_ip = 138; continue _fun0041 }
case 169:
                    var6 = _closure1_slot40;
                    var4 = var5.message_id;
                    var2 = true;
                    var6[var4] = var2;
                    _fun0041_ip = 218; continue _fun0041;
case 138:
                    var6 = _closure1_slot38;
                    var4 = var5.message_id;
                    var6 = var6[var4];
                    if(!(var3 == var6)) { _fun0041_ip = 219; continue _fun0041 }
case 5:
                    var4 = {};
                    var5 = var5.message_id;
                    var4['id'] = var5;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 24;
                    var7 = var7[var5];
                    var5 = undefined;
                    var5 = var8.bind(var5)(var7);
                    var5 = var5.ICYMIItemTypes;
                    var5 = var5.MESSAGE;
                    var4['type'] = var5;
                    var5 = -1;
                    var4['score'] = var5;
                    var5 = {};
                    var7 = var1.guild_id;
                    var5['guild_id'] = var7;
                    var7 = var1.channel_id;
                    var5['channel_id'] = var7;
                    var7 = var1.message;
                    var7 = var7.id;
                    var5['message_id'] = var7;
                    var7 = _closure1_slot26;
                    var7 = var7.GUILD_TEXT;
                    var5['channel_type'] = var7;
                    var7 = false;
                    var5['has_mention'] = var7;
                    var4['data'] = var5;
                    var6 = var4;
case 219:
                    var8 = _closure1_slot19;
                    var7 = var8.getMessage;
                    var5 = var1.channel_id;
                    var4 = var1.message;
                    var4 = var4.id;
                    var5 = var7.bind(var8)(var5, var4);
                    if(!(var3 == var5)) { _fun0041_ip = 81; continue _fun0041 }
case 25:
                    var7 = _closure1_slot39;
                    var3 = var1.message;
                    var4 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 23;
                    var8 = var8[var3];
                    var3 = undefined;
                    var8 = var9.bind(var3)(var8);
                    var3 = var8.createGravityMessageFromServer;
                    var3 = var3.bind(var8)(var1, var6);
                    var7[var4] = var3;
                    _fun0041_ip = 218; continue _fun0041;
case 81:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 23;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var3 = var4.createGravityMessageFromServer;
                    var10 = var3.bind(var4)(var1, var6);
                    var3 = _closure1_slot39;
                    var1 = var1.message;
                    var2 = var1.id;
                    var1 = {};
                    var11 = var1;
                    var4 = copyDataProperties(var11, var10);
                    var4 = 'message';
                    var1[3] = var5;
                    var3[var2] = var1;
case 218:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var8)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure2_slot1;
                    var1 = var2.content_id;
                    var5 = var3[var1];
                    var3 = null;
                    if(!(var3 == var5)) { _fun0042_ip = 176; continue _fun0042 }
case 169:
                    var6 = _closure1_slot40;
                    var4 = var2.content_id;
                    var1 = true;
                    var6[var4] = var1;
                    _fun0042_ip = 146; continue _fun0042;
case 176:
                    var6 = _closure1_slot38;
                    var4 = var2.content_id;
                    var4 = var6[var4];
                    if(!(var3 == var4)) { _fun0042_ip = 13; continue _fun0042 }
case 220:
                    var6 = _closure1_slot40;
                    var3 = var2.content_id;
                    var2 = true;
                    var6[var3] = var2;
                    _fun0042_ip = 146; continue _fun0042;
case 13:
                    var3 = _closure1_slot39;
                    var2 = var5.id;
                    var1 = {};
                    var8 = var1;
                    var7 = var4;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 'activity';
                    var1[3] = var5;
                    var3[var2] = var1;
case 146:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot52;
            if(!(var7 === var2)) { _fun0040_ip = 18; continue _fun0040 }
case 221:
            _closure1_slot52 = var6;
case 18:
            var4 = _closure1_slot57;
            var3 = var4.delete;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.generateHydrationId;
            var2 = var2.bind(var5)(var7, var6);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['LOAD_ICYMI_HYDRATED'] = var11;
    var11 = function handleLoadCustomScores(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var4 = var1.scores;
            var2 = _closure1_slot63;
            var1 = undefined;
            var9 = var2.bind(var1)(var4);
            var4 = var9.bind(var1)();
            var2 = var4.done;
            var8 = global;
            var7 = 0;
            var6 = null;
            var5 = var4;
            var4 = undefined;
            if(var2) { _fun0043_ip = 192; continue _fun0043 }
case 9:
            var12 = var5.value;
            var11 = _closure1_slot41;
            var10 = var12.guild_id;
            var2 = var12.guild_score;
            var11[var10] = var2;
            var11 = _closure1_slot77;
            var10 = var12.guild_id;
            var2 = var12.guild_score;
            var2 = var11.bind(var1)(var10, var2);
            var11 = var8.Object;
            var10 = var11.keys;
            var2 = var12.custom_channel_scores;
            var11 = var10.bind(var11)(var2);
            var2 = var11.length;
            var2 = var7 < var2;
            var10 = 0;
            if(!var2) { _fun0043_ip = 222; continue _fun0043 }
case 223:
            var13 = var11[var10];
            var14 = _closure1_slot42;
            var2 = var12.guild_id;
            var2 = var14[var2];
            if(!(var6 == var2)) { _fun0043_ip = 47; continue _fun0043 }
case 224:
            var15 = _closure1_slot42;
            var14 = var12.guild_id;
            var2 = {};
            var15[var14] = var2;
case 47:
            var14 = _closure1_slot42;
            var2 = var12.guild_id;
            var14 = var14[var2];
            var2 = var12.custom_channel_scores;
            var2 = var2[var13];
            var14[var13] = var2;
            var14 = _closure1_slot75;
            var2 = var12.custom_channel_scores;
            var2 = var2[var13];
            var2 = var14.bind(var1)(var13, var2);
            var10 = var10 + 1;
            var2 = var11.length;
            var4 = var13;
            if(var10 < var2) { _fun0043_ip = 223; continue _fun0043 }
case 222:
            var10 = var9.bind(var1)();
            var2 = var10.done;
            var5 = var10;
            if(!var2) { _fun0043_ip = 9; continue _fun0043 }
case 192:
            var2 = {};
            var16 = _closure1_slot41;
            var17 = var2;
            var4 = copyDataProperties(var17, var16);
            _closure1_slot41 = var2;
            var2 = {};
            var16 = _closure1_slot42;
            var17 = var2;
            var4 = copyDataProperties(var17, var16);
            _closure1_slot42 = var2;
            return var1;
        }
    };
    var2['LOAD_ICYMI_CUSTOM_SCORES'] = var11;
    var11 = function loadICYMIRecommendedGuilds(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.map;
        var1 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 29;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.makeDiscoverableGuild;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        _closure1_slot53 = var2;
        var2 = _closure1_slot69;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOAD_ICYMI_RECOMMENDED_GUILDS'] = var11;
    var11 = function handleCustomScoresUpdated(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelScores;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var7 = var2.guildScore;
            var2 = null;
            if(!(var2 != var7)) { _fun0044_ip = 3; continue _fun0044 }
case 180:
            var4 = _closure1_slot41;
            var4[var8] = var7;
            var6 = _closure1_slot77;
            var4 = undefined;
            var4 = var6.bind(var4)(var8, var7);
            var4 = {};
            var9 = _closure1_slot41;
            var10 = var4;
            var6 = copyDataProperties(var10, var9);
            _closure1_slot41 = var4;
case 3:
            if(!(var2 != var3)) { _fun0044_ip = 139; continue _fun0044 }
case 4:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.channelId;
                    var4 = var1.score;
                    var6 = _closure1_slot42;
                    var2 = _closure2_slot0;
                    var6 = var6[var2];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0045_ip = 189; continue _fun0045 }
case 225:
                    var7 = _closure1_slot42;
                    var6 = _closure2_slot0;
                    var2 = {};
                    var7[var6] = var2;
case 189:
                    var2 = _closure1_slot42;
                    var1 = _closure2_slot0;
                    var1 = var2[var1];
                    var1[var5] = var4;
                    var2 = _closure1_slot75;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var5, var4);
                    var2 = {};
                    var8 = _closure1_slot42;
                    var9 = var2;
                    var4 = copyDataProperties(var9, var8);
                    _closure1_slot42 = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 139:
            var1 = undefined;
            return var1;
        }
    };
    var2['ICYMI_CUSTOM_SCORES_UPDATED'] = var11;
    var11 = function handleReloadTab() {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = _closure1_slot35;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0046_ip = 74; continue _fun0046 }
case 226:
            var2 = _closure1_slot71;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = false;
            _closure1_slot45 = var2;
            return var1;
case 74:
            var1 = false;
            return var1;
        }
    };
    var2['RELOAD_ICYMI'] = var11;
    var11 = function handleGravityTabOpened() {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var1 = true;
            _closure1_slot46 = var1;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            _closure1_slot34 = var1;
            var1 = _closure1_slot44;
            if(!var1) { _fun0047_ip = 176; continue _fun0047 }
case 50:
            var1 = false;
            _closure1_slot44 = var1;
            _closure1_slot45 = var1;
case 176:
            var3 = _closure1_slot49;
            var1 = 5;
            if(!(var3 < var1)) { _fun0047_ip = 154; continue _fun0047 }
case 227:
            var1 = _closure1_slot49;
            var1 = var1 + 1;
            _closure1_slot49 = var1;
case 154:
            var1 = undefined;
            return var1;
        }
    };
    var2['ICYMI_TAB_OPENED'] = var11;
    var11 = function handleGravityFeedback() {
        var1 = 6;
        _closure1_slot49 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_FEEDBACK_GIVEN'] = var11;
    var2['MESSAGE_REACTION_ADD'] = var10;
    var11 = function handleReactionBatch(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var1 = arg1;
            var3 = var1.messageId;
            var6 = var1.reactions;
            var1 = _closure1_slot39;
            var3 = var1[var3];
            var1 = null;
            if(!(var1 != var3)) { _fun0048_ip = 121; continue _fun0048 }
case 228:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 24;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var7.bind(var1)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.MESSAGE;
            if(!(var5 === var4)) { _fun0048_ip = 229; continue _fun0048 }
case 5:
            var4 = _closure1_slot15;
            var2 = var4.getId;
            var5 = var2.bind(var4)();
            var4 = var3.message;
            var2 = var4.addReactionBatch;
            var2 = var2.bind(var4)(var6, var5);
            var3['message'] = var2;
            return var1;
case 229:
            var1 = false;
            return var1;
case 121:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var11;
    var2['MESSAGE_REACTION_REMOVE'] = var10;
    var10 = function handleRemoveAllReactions(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var3 = var1.messageId;
            var1 = _closure1_slot39;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0049_ip = 172; continue _fun0049 }
case 38:
            var3 = var4.type;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var6.bind(var2)(var5);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0049_ip = 230; continue _fun0049 }
case 5:
            var7 = var4.message;
            var6 = var7.set;
            var5 = 'reactions';
            var3 = new Array(0);
            var3 = var6.bind(var7)(var5, var3);
            var4['message'] = var3;
            var2 = undefined;
case 230:
            var1 = var2;
case 172:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var10;
    var10 = function handleRemoveEmojiReactions(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var1 = arg1;
            var3 = var1.messageId;
            var6 = var1.emoji;
            var1 = _closure1_slot39;
            var4 = var1[var3];
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0050_ip = 72; continue _fun0050 }
case 231:
            var3 = var4.type;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 24;
            var5 = var5[var2];
            var2 = undefined;
            var2 = var7.bind(var2)(var5);
            var2 = var2.ICYMIItemTypes;
            var2 = var2.MESSAGE;
            var2 = var3 === var2;
            if(!var2) { _fun0050_ip = 119; continue _fun0050 }
case 232:
            var5 = var4.message;
            var3 = var5.removeReactionsForEmoji;
            var3 = var3.bind(var5)(var6);
            var4['message'] = var3;
            var2 = undefined;
case 119:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var10;
    var2['CHANNEL_ACK'] = var9;
    var2['MESSAGE_ACK'] = var9;
    var9 = function handleJoinedRecommendedGuild() {
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        _closure1_slot54 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_JOINED_RECOMMENDED_GUILD'] = var9;
    var9 = function handleSetVideosMuted(arg1) {
        var1 = arg1;
        var2 = var1.muted;
        _closure1_slot55 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_VIDEOS_MUTED'] = var9;
    var9 = function handleSetRefreshing(arg1) {
        var1 = arg1;
        var2 = var1.refreshing;
        _closure1_slot56 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_REFRESHING'] = var9;
    var9 = function handleLoadHydratedAttempt(arg1) {
        var1 = arg1;
        var3 = var1.hydrationId;
        var2 = _closure1_slot57;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_ICYMI_HYDRATED_ATTEMPT'] = var9;
    var9 = function handleLoadHydratedFailed(arg1) {
        var1 = arg1;
        var3 = var1.hydrationId;
        var2 = _closure1_slot57;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['LOAD_ICYMI_HYDRATED_FAILED'] = var9;
    var9 = function handleSetFocusedTab(arg1) {
        var1 = arg1;
        var2 = var1.focused;
        _closure1_slot58 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SET_FOCUSED_TAB'] = var9;
    var9 = function handleLoadCurrentStatusMedia(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var1 = arg1;
            var5 = var1.attachments;
            var3 = var1.createdAtMs;
            var6 = null;
            var1 = var6 != var5;
            var2 = null;
            if(!var1) { _fun0051_ip = 39; continue _fun0051 }
case 169:
            var1 = var5.length;
            var4 = 0;
            var2 = null;
            if(!(var4 !== var1)) { _fun0051_ip = 39; continue _fun0051 }
case 173:
            var1 = new Array(2);
            var1[0] = var3;
            var3 = new Array(0);
            var9 = var3;
            var8 = var5;
            var7 = 0;
            var4 = arraySpread(var9, var8, var7);
            var1[1] = var3;
            var2 = var1;
case 39:
            _closure1_slot47 = var2;
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_ICYMI_CURRENT_STATUS_MEDIA'] = var9;
    var9 = function handleScrollEvent(arg1) {
        var1 = arg1;
        var2 = var1.timestamp;
        _closure1_slot60 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_SCROLL_EVENT'] = var9;
    var4 = function handleTakeSurvey(arg1) {
        var1 = arg1;
        var2 = var1.takenAt;
        _closure1_slot61 = var2;
        var1 = undefined;
        return var1;
    };
    var2['ICYMI_TAKE_SURVEY'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var20 = var4;
    var18 = var2;
    var2 = new var20[var8](var19, var18, var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();