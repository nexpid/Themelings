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
            _closure1_slot38 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
            var9 = _closure1_slot40;
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
            var7 = _closure1_slot40;
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
    var _closure1_slot39 = var1;
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
    var _closure1_slot40 = var1;
    var12 = function handleConnectionOpen() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot17;
            var1 = var3.getGuildCount;
            var3 = var1.bind(var3)();
            var1 = 3;
            var1 = var3 >= var1;
            if(var1) { _fun0005_ip = 77; continue _fun0005 }
 27:
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
 77:
            _closure1_slot29 = var1;
            var1 = new Array(0);
            _closure1_slot34 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2 = function generateResultFromId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
            if(var4) { _fun0006_ip = 70; continue _fun0006 }
 44:
            var4 = _closure1_slot30;
            if(!(var5 != var4)) { _fun0006_ip = 67; continue _fun0006 }
 52:
            var4 = _closure1_slot30;
            var3 = var2.type;
            var1 = null;
            if(!(var4 === var3)) { _fun0006_ip = 70; continue _fun0006 }
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot41 = var2;
    var1 = function generateInitialResults() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = _closure1_slot21;
            var3 = var4.getGuildId;
            var3 = var3.bind(var4)();
            var7 = null;
            var5 = var7 != var3;
            var4 = undefined;
            var14 = undefined;
            if(!var5) { _fun0007_ip = 35; continue _fun0007 }
 32:
            var14 = var3;
 35:
            var5 = _closure1_slot20;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            var6 = var7 != var3;
            var5 = undefined;
            if(!var6) { _fun0007_ip = 61; continue _fun0007 }
 58:
            var5 = var3;
 61:
            var _closure2_slot0 = var5;
            var8 = _closure1_slot30;
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 19;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            if(!(var3 !== var8)) { _fun0007_ip = 1559; continue _fun0007 }
 108:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.APPLICATION;
            if(!(var3 !== var8)) { _fun0007_ip = 1512; continue _fun0007 }
 144:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.GUILD;
            if(!(var3 !== var8)) { _fun0007_ip = 1465; continue _fun0007 }
 180:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.TEXT_CHANNEL;
            if(!(var3 !== var8)) { _fun0007_ip = 1398; continue _fun0007 }
 216:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var9.bind(var4)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.VOICE_CHANNEL;
            if(!(var3 !== var8)) { _fun0007_ip = 1310; continue _fun0007 }
 252:
            var8 = new Array(0);
            var9 = global;
            var3 = var9.Set;
            var10 = var3.prototype;
            var10 = Object.create(var10, {constructor: {value: var3}});
            var25 = var10;
            var3 = new var25[var3](var24);
            var13 = var3 instanceof Object ? var3 : var10;
            var _closure2_slot2 = var13;
            var15 = new Array(0);
            var3 = _closure1_slot35;
            var3 = var3.length;
            var12 = 1;
            var3 = var12 < var3;
            var10 = var12;
            if(!var3) { _fun0007_ip = 509; continue _fun0007 }
 317:
            var11 = _closure1_slot41;
            var3 = _closure1_slot35;
            var3 = var3[var10];
            var3 = var11.bind(var4)(var3);
            if(!(var7 != var3)) { _fun0007_ip = 489; continue _fun0007 }
 341:
            var16 = var3.type;
            var17 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var6];
            var11 = var17.bind(var4)(var11);
            var11 = var11.AutocompleterResultTypes;
            var11 = var11.TEXT_CHANNEL;
            var11 = var16 !== var11;
            if(!var11) { _fun0007_ip = 420; continue _fun0007 }
 382:
            var17 = var3.type;
            var18 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var6];
            var16 = var18.bind(var4)(var16);
            var16 = var16.AutocompleterResultTypes;
            var16 = var16.VOICE_CHANNEL;
            var11 = var17 !== var16;
 420:
            if(var11) { _fun0007_ip = 455; continue _fun0007 }
 423:
            var19 = _closure1_slot18;
            var18 = var19.can;
            var16 = _closure1_slot24;
            var17 = var16.VIEW_CHANNEL;
            var16 = var3.record;
            var11 = var18.bind(var19)(var17, var16);
 455:
            if(!var11) { _fun0007_ip = 489; continue _fun0007 }
 458:
            var11 = var15.push;
            var11 = var11.bind(var15)(var3);
            var11 = var13.add;
            var3 = var3.record;
            var3 = var3.id;
            var3 = var11.bind(var13)(var3);
 489:
            var10 = var10 + var12;
            var3 = _closure1_slot35;
            var3 = var3.length;
            if(var10 < var3) { _fun0007_ip = 317; continue _fun0007 }
 509:
            var3 = var15.length;
            var10 = 0;
            if(!(var3 > var10)) { _fun0007_ip = 634; continue _fun0007 }
 520:
            var11 = var8.push;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = var21[var6];
            var17 = var20.bind(var4)(var3);
            var16 = var17.createHeaderResult;
            var3 = 23;
            var18 = var21[var3];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var3 = var21[var3];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.80lOZ2;
            var3 = var18.bind(var19)(var3);
            var16 = var16.bind(var17)(var3);
            var3 = new Array(1);
            var3[0] = var16;
            var24 = var3;
            var23 = var15;
            var22 = var12;
            var12 = arraySpread(var24, var23, var22);
            var24 = var11;
            var23 = var3;
            var22 = var8;
            var3 = apply(var24, var23, var22);
 634:
            var11 = function getDrafts(arg1) {
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
 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        if(var3) { _fun0008_ip = 57; continue _fun0008 }
 25:
                        var3 = _closure1_slot41;
                        var4 = var3.bind(var1)(var4);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0008_ip = 57; continue _fun0008 }
 43:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
 57:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 === var1;
                    if(var1) { _fun0009_ip = 34; continue _fun0009 }
 17:
                    var5 = _closure1_slot35;
                    var3 = var5.includes;
                    var1 = var3.bind(var5)(var4);
 34:
                    if(var1) { _fun0009_ip = 51; continue _fun0009 }
 37:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var1 = var2.bind(var3)(var4);
 51:
                    return var1;
                }
            };
            var11 = var11.bind(var4)(var3);
            var3 = var11.length;
            if(!(var3 > var10)) { _fun0007_ip = 820; continue _fun0007 }
 661:
            var12 = var8.push;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var6];
            var16 = var19.bind(var4)(var3);
            var15 = var16.createHeaderResult;
            var3 = 23;
            var17 = var20[var3];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.4B63jY;
            var3 = var17.bind(var18)(var3);
            var3 = var15.bind(var16)(var3);
            var3 = var12.bind(var8)(var3);
            var3 = _closure1_slot39;
            var12 = var3.bind(var4)(var11);
            var11 = var12.bind(var4)();
            var3 = var11.done;
            if(var3) { _fun0007_ip = 820; continue _fun0007 }
 769:
            var15 = var11.value;
            var16 = var13.add;
            var3 = var15.record;
            var3 = var3.id;
            var3 = var16.bind(var13)(var3);
            var3 = var8.push;
            var3 = var3.bind(var8)(var15);
            var15 = var12.bind(var4)();
            var3 = var15.done;
            var11 = var15;
            if(!var3) { _fun0007_ip = 769; continue _fun0007 }
 820:
            var11 = _closure1_slot19;
            var3 = var11.getMentionChannelIds;
            var12 = var3.bind(var11)();
            var11 = var12.filter;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0010_ip = 37; continue _fun0010 }
 17:
                    var5 = _closure1_slot35;
                    var3 = var5.includes;
                    var3 = var3.bind(var5)(var4);
                    var1 = !var3;
 37:
                    if(!var1) { _fun0010_ip = 57; continue _fun0010 }
 40:
                    var3 = _closure2_slot2;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
 57:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var3);
            var11 = var12.map;
            var3 = function(arg1) {
                var3 = _closure1_slot41;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var12 = var11.bind(var12)(var3);
            var11 = var12.filter;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 24;
            var3 = var16[var3];
            var3 = var15.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var11 = var11.bind(var12)(var3);
            var3 = var11.reverse;
            var11 = var3.bind(var11)();
            var3 = var11.length;
            if(!(var3 > var10)) { _fun0007_ip = 1081; continue _fun0007 }
 922:
            var12 = var8.push;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var3 = var20[var6];
            var16 = var19.bind(var4)(var3);
            var15 = var16.createHeaderResult;
            var3 = 23;
            var17 = var20[var3];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var3 = var20[var3];
            var3 = var19.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.61Df19;
            var3 = var17.bind(var18)(var3);
            var3 = var15.bind(var16)(var3);
            var3 = var12.bind(var8)(var3);
            var3 = _closure1_slot39;
            var12 = var3.bind(var4)(var11);
            var11 = var12.bind(var4)();
            var3 = var11.done;
            if(var3) { _fun0007_ip = 1081; continue _fun0007 }
 1030:
            var15 = var11.value;
            var16 = var13.add;
            var3 = var15.record;
            var3 = var3.id;
            var3 = var16.bind(var13)(var3);
            var3 = var8.push;
            var3 = var3.bind(var8)(var15);
            var15 = var12.bind(var4)();
            var3 = var15.done;
            var11 = var15;
            if(!var3) { _fun0007_ip = 1030; continue _fun0007 }
 1081:
            var3 = var8;
            if(!(var7 != var14)) { _fun0007_ip = 1308; continue _fun0007 }
 1091:
            var11 = _closure1_slot14;
            var7 = var11.getSelectableChannelIds;
            var12 = var7.bind(var11)(var14);
            var11 = var12.filter;
            var7 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var8 = arg1;
                    var3 = _closure1_slot11;
                    var1 = var3.getChannel;
                    var4 = var1.bind(var3)(var8);
                    var5 = null;
                    var1 = var5 == var4;
                    if(var1) { _fun0011_ip = 40; continue _fun0011 }
 29:
                    var3 = _closure2_slot0;
                    var1 = var8 === var3;
 40:
                    if(var1) { _fun0011_ip = 57; continue _fun0011 }
 43:
                    var6 = _closure1_slot35;
                    var3 = var6.includes;
                    var1 = var3.bind(var6)(var8);
 57:
                    if(var1) { _fun0011_ip = 77; continue _fun0011 }
 60:
                    var6 = _closure2_slot2;
                    var3 = var6.has;
                    var1 = var3.bind(var6)(var8);
 77:
                    if(var1) { _fun0011_ip = 101; continue _fun0011 }
 80:
                    var7 = _closure1_slot22;
                    var6 = var7.isChannelMuted;
                    var3 = var4.guild_id;
                    var1 = var6.bind(var7)(var3, var8);
 101:
                    if(var1) { _fun0011_ip = 147; continue _fun0011 }
 104:
                    var3 = var4.parent_id;
                    var3 = var5 != var3;
                    if(!var3) { _fun0011_ip = 144; continue _fun0011 }
 117:
                    var8 = _closure1_slot22;
                    var7 = var8.isChannelMuted;
                    var6 = var4.guild_id;
                    var5 = var4.parent_id;
                    var3 = var7.bind(var8)(var6, var5);
 144:
                    var1 = var3;
 147:
                    var1 = !var1;
                    if(!var1) { _fun0011_ip = 186; continue _fun0011 }
 153:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getHasImportantUnread;
                    var1 = var2.bind(var3)(var4);
 186:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var7);
            var11 = var12.map;
            var7 = function(arg1) {
                var3 = _closure1_slot41;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var12 = var11.bind(var12)(var7);
            var11 = var12.filter;
            var7 = function(arg1) {
                var1 = arg1;
                return var1;
            };
            var7 = var11.bind(var12)(var7);
            var _closure2_slot3 = var7;
            var12 = var9.Object;
            var11 = var12.values;
            var13 = _closure1_slot8;
            var9 = var13.getActiveJoinedUnreadThreadsForGuild;
            var9 = var9.bind(var13)(var14);
            var12 = var11.bind(var12)(var9);
            var11 = var12.forEach;
            var9 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var8 = arg1;
                    var1 = undefined;
                    var2 = null;
                    for(var5 in var8)
 21:
                    {
 30:
                        var11 = var5;
                        var10 = _closure1_slot41;
                        var12 = var10.bind(var1)(var11);
                        var10 = var2 == var12;
                        if(var10) { _fun0012_ip = 74; continue _fun0012 }
 49:
                        var14 = _closure2_slot2;
                        var13 = var14.has;
                        var11 = var12.record;
                        var11 = var11.id;
                        var10 = var13.bind(var14)(var11);
 74:
                        if(var10) { _fun0012_ip = 21; continue _fun0012 }
 77:
                        var11 = _closure2_slot3;
                        var10 = var11.push;
                        var10 = var10.bind(var11)(var12);
                        _fun0012_ip = 21; continue _fun0012;
                    }
 93:
                    return var1;
                }
            };
            var9 = var11.bind(var12)(var9);
            var9 = var7.length;
            var3 = var8;
            if(!(var9 > var10)) { _fun0007_ip = 1308; continue _fun0007 }
 1213:
            var9 = var8.push;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var6];
            var11 = var14.bind(var4)(var6);
            var10 = var11.createHeaderResult;
            var6 = 23;
            var12 = var15[var6];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var6 = var15[var6];
            var6 = var14.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ieCAhI;
            var6 = var12.bind(var13)(var6);
            var6 = var10.bind(var11)(var6);
            var6 = var9.bind(var8)(var6);
            var6 = var8.concat;
            var3 = var6.bind(var8)(var7);
 1308:
            return var3;
 1310:
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
 1398:
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
 1465:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryGuilds;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
 1512:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 22;
            var3 = var7[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.queryApplications;
            var3 = {'query': '', 'limit': 100, 'fuzzy': true};
            var3 = var6.bind(var7)(var3);
            return var3;
 1559:
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
 0:
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
            if(!(var6 !== var7)) { _fun0013_ip = 592; continue _fun0013 }
 54:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.TEXT_CHANNEL;
            if(!(var6 !== var7)) { _fun0013_ip = 495; continue _fun0013 }
 90:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0013_ip = 398; continue _fun0013 }
 126:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.GUILD;
            if(!(var6 !== var7)) { _fun0013_ip = 301; continue _fun0013 }
 162:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.APPLICATION;
            if(!(var6 !== var7)) { _fun0013_ip = 204; continue _fun0013 }
 195:
            _closure1_slot31 = var4;
            _fun0013_ip = 797; continue _fun0013;
 204:
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
            var6 = var6.VwK1lZ;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 797; continue _fun0013;
 301:
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
            var6 = var6.olADPj;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 797; continue _fun0013;
 398:
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
            var6 = var6.zUoI5O;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 797; continue _fun0013;
 495:
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
            var6 = var6.W26k4e;
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
            _fun0013_ip = 797; continue _fun0013;
 592:
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
            if(!(var6 == var14)) { _fun0013_ip = 714; continue _fun0013 }
 655:
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
            var6 = var6.XFYW1t;
            var6 = var10.bind(var11)(var6);
            _fun0013_ip = 783; continue _fun0013;
 714:
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
            var11 = var10.FREzQk;
            var10 = {};
            var14 = var14.name;
            var10['name'] = var14;
            var6 = var12.bind(var13)(var11, var10);
 783:
            var6 = var8.bind(var9)(var6);
            var6 = var7.bind(var4)(var6);
            _closure1_slot31 = var4;
 797:
            var4 = _closure1_slot32;
            if(!(var3 === var4)) { _fun0013_ip = 938; continue _fun0013 }
 808:
            var6 = _closure1_slot31;
            var4 = _closure1_slot27;
            var6 = var6[var4];
            var4 = null;
            var4 = var4 != var6;
            if(!var4) { _fun0013_ip = 867; continue _fun0013 }
 829:
            var7 = var6.type;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var8.bind(var1)(var6);
            var6 = var6.AutocompleterResultTypes;
            var6 = var6.HEADER;
            var4 = var7 === var6;
 867:
            if(!var4) { _fun0013_ip = 1039; continue _fun0013 }
 873:
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
            _fun0013_ip = 1039; continue _fun0013;
 938:
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
 1039:
            var3 = _closure1_slot37;
            var2 = var3.emitChange;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var11 = function handleQuickSwitcherShow(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.query;
            var3 = var1.queryMode;
            var5 = _closure1_slot21;
            var1 = var5.getGuildId;
            var6 = var1.bind(var5)();
            var5 = null;
            var7 = var5 != var6;
            var1 = undefined;
            var11 = undefined;
            if(!var7) { _fun0014_ip = 48; continue _fun0014 }
 45:
            var11 = var6;
 48:
            var6 = global;
            var9 = var6.Set;
            var8 = _closure1_slot10;
            var7 = var8.getId;
            var10 = var7.bind(var8)();
            var7 = var6.HermesInternal;
            var8 = var7.concat;
            var7 = 'user:';
            var8 = var8.bind(var7)(var10);
            var7 = new Array(1);
            var7[0] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var16 = var8;
            var15 = var7;
            var7 = new var16[var9](var15, var14);
            var7 = var7 instanceof Object ? var7 : var8;
            if(!(var5 != var11)) { _fun0014_ip = 159; continue _fun0014 }
 127:
            var9 = var7.add;
            var8 = var6.HermesInternal;
            var10 = var8.concat;
            var8 = 'guild:';
            var8 = var10.bind(var8)(var11);
            var8 = var9.bind(var7)(var8);
 159:
            var8 = var6.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            _closure1_slot36 = var6;
            var6 = _closure1_slot25;
            if(!(var5 == var6)) { _fun0014_ip = 281; continue _fun0014 }
 186:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 19;
            var6 = var9[var6];
            var11 = var8.bind(var1)(var6);
            var10 = _closure1_slot44;
            var9 = _closure1_slot26;
            var6 = var5 != var3;
            var8 = 5;
            if(!var6) { _fun0014_ip = 227; continue _fun0014 }
 224:
            var8 = 100;
 227:
            var6 = {'frecencyBoosters': true, 'blacklist': null, 'allowSnowflake': true};
            var6['blacklist'] = var7;
            var7 = var11.prototype;
            var7 = Object.create(var7, {constructor: {value: var11}});
            var16 = var7;
            var15 = var10;
            var14 = var9;
            var13 = var8;
            var12 = var6;
            var6 = new var16[var11](var15, var14, var13, var12, var11);
            var6 = var6 instanceof Object ? var6 : var7;
            _fun0014_ip = 285; continue _fun0014;
 281:
            var6 = _closure1_slot25;
 285:
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
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var2.trim;
            var3 = var1.bind(var2)();
            var1 = var3.trim;
            var2 = var1.bind(var3)();
            var1 = '';
            if(!(var1 === var2)) { _fun0015_ip = 47; continue _fun0015 }
 34:
            var2 = _closure1_slot42;
            var1 = undefined;
            var4 = var2.bind(var1)();
 47:
            var9 = _closure1_slot34;
            var6 = var4.length;
            var5 = var9.length;
            var2 = false;
            if(!(var6 === var5)) { _fun0015_ip = 139; continue _fun0015 }
 70:
            var5 = var4.length;
            var7 = 0;
            var5 = var7 < var5;
            var2 = true;
            if(!var5) { _fun0015_ip = 139; continue _fun0015 }
 86:
            var10 = var4[var7];
            var5 = var9[var7];
            var10 = var10.record;
            var10 = var10.id;
            var5 = var5.record;
            var5 = var5.id;
            var2 = false;
            if(!(var10 === var5)) { _fun0015_ip = 139; continue _fun0015 }
 122:
            var7 = var7 + 1;
            var5 = var4.length;
            var5 = var7 < var5;
            var2 = true;
            if(var5) { _fun0015_ip = 86; continue _fun0015 }
 139:
            if(var2) { _fun0015_ip = 158; continue _fun0015 }
 142:
            _closure1_slot34 = var4;
            var2 = _closure1_slot43;
            var1 = undefined;
            var1 = var2.bind(var1)(var4, var3);
 158:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot44 = var1;
    var8 = function handleQuickSwitcherHide() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = null;
            _closure1_slot32 = var1;
            var3 = 0;
            _closure1_slot33 = var3;
            var3 = new Array(0);
            _closure1_slot34 = var3;
            var3 = _closure1_slot25;
            if(!(var1 != var3)) { _fun0016_ip = 49; continue _fun0016 }
 31:
            var4 = _closure1_slot25;
            var3 = var4.destroy;
            var3 = var3.bind(var4)();
            _closure1_slot25 = var1;
 49:
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
                var1 = _closure1_slot38;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 69; continue _fun0017 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0017_ip = 105; continue _fun0017;
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
 0:
                var5 = arg1;
                var6 = this;
                var7 = var6.waitFor;
                var4 = _closure1_slot16;
                var2 = _closure1_slot17;
                var1 = _closure1_slot11;
                var1 = var7.bind(var6)(var4, var2, var1);
                var4 = var6.syncWith;
                var1 = _closure1_slot9;
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
                if(var2) { _fun0018_ip = 114; continue _fun0018 }
 112:
                var2 = false;
 114:
                _closure1_slot28 = var2;
                var4 = null;
                var6 = var4 == var5;
                var2 = undefined;
                if(var6) { _fun0018_ip = 135; continue _fun0018 }
 129:
                var2 = var5.channelHistory;
 135:
                if(!(var4 == var2)) { _fun0018_ip = 143; continue _fun0018 }
 139:
                var2 = new Array(0);
 143:
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
 0:
                var5 = arg1;
                var _closure3_slot0 = var5;
                var1 = _closure1_slot25;
                var2 = null;
                var7 = var2 == var1;
                var6 = 0;
                var1 = 0;
                if(var7) { _fun0019_ip = 92; continue _fun0019 }
 29:
                if(!(var2 != var5)) { _fun0019_ip = 62; continue _fun0019 }
 33:
                var2 = _closure1_slot25;
                var7 = var2.results;
                var5 = var7.reduce;
                var2 = function(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var3 = arg1;
                        var1 = arg2;
                        var4 = var1.type;
                        var2 = _closure3_slot0;
                        var1 = var3;
                        if(!(var4 === var2)) { _fun0020_ip = 32; continue _fun0020 }
 25:
                        var2 = 1;
                        var1 = var3 + var2;
 32:
                        return var1;
                    }
                };
                var2 = var5.bind(var7)(var2, var6);
                _fun0019_ip = 89; continue _fun0019;
 62:
                var4 = _closure1_slot25;
                var5 = var4.results;
                var4 = var5.reduce;
                var3 = function(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
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
                        if(!(var4 !== var2)) { _fun0021_ip = 62; continue _fun0021 }
 55:
                        var2 = 1;
                        var1 = var3 + var2;
 62:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var6);
 89:
                var1 = var2;
 92:
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
 0:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = arg2;
                var3 = var2 - var1;
                var2 = _closure1_slot23;
                var2 = var3 >= var2;
                var1 = _closure1_slot29;
                if(!var1) { _fun0022_ip = 45; continue _fun0022 }
 42:
                var1 = var2;
 45:
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
 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0023_ip = 39; continue _fun0023 }
 16:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var1 = var4.bind(var5)(var3, var2);
 39:
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
 0:
                var3 = _closure1_slot25;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0024_ip = 46; continue _fun0024 }
 18:
                var5 = _closure1_slot25;
                var4 = var5.queryGuilds;
                var3 = '';
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var2.length;
 46:
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
 0:
                var1 = {};
                var3 = _closure1_slot9;
                var3 = var3.theme;
                var1['theme'] = var3;
                var4 = _closure1_slot25;
                var3 = null;
                var4 = var3 != var4;
                var3 = '';
                if(!var4) { _fun0025_ip = 47; continue _fun0025 }
 37:
                var4 = _closure1_slot25;
                var3 = var4.query;
 47:
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
 0:
            var1 = arg1;
            var5 = var1.query;
            var6 = var1.queryMode;
            var1 = _closure1_slot25;
            var4 = null;
            if(!(var4 != var1)) { _fun0026_ip = 406; continue _fun0026 }
 31:
            var1 = _closure1_slot30;
            if(!(var1 !== var6)) { _fun0026_ip = 302; continue _fun0026 }
 42:
            var7 = _closure1_slot25;
            var3 = var7.setResultTypes;
            if(!(var4 == var6)) { _fun0026_ip = 62; continue _fun0026 }
 56:
            var1 = _closure1_slot26;
            _fun0026_ip = 73; continue _fun0026;
 62:
            var8 = new Array(1);
            var8[0] = var6;
            var1 = var8;
 73:
            var1 = var3.bind(var7)(var1);
            var7 = _closure1_slot25;
            var3 = var7.setLimit;
            var8 = var4 != var6;
            var1 = 5;
            if(!var8) { _fun0026_ip = 101; continue _fun0026 }
 98:
            var1 = 100;
 101:
            var1 = var3.bind(var7)(var1);
            var3 = _closure1_slot21;
            var1 = var3.getGuildId;
            var7 = var1.bind(var3)();
            var8 = var4 != var7;
            var3 = undefined;
            var1 = undefined;
            if(!var8) { _fun0026_ip = 134; continue _fun0026 }
 131:
            var1 = var7;
 134:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 19;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.AutocompleterResultTypes;
            var7 = var7.USER;
            if(!(var6 === var7)) { _fun0026_ip = 174; continue _fun0026 }
 170:
            if(!(var4 == var1)) { _fun0026_ip = 266; continue _fun0026 }
 174:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var3)(var7);
            var7 = var7.AutocompleterResultTypes;
            var7 = var7.VOICE_CHANNEL;
            if(!(var6 !== var7)) { _fun0026_ip = 239; continue _fun0026 }
 207:
            var9 = _closure1_slot25;
            var8 = var9.setOptions;
            var7 = {};
            var7['userFilters'] = var4;
            var7['voiceChannelGuildFilter'] = var3;
            var3 = true;
            var3 = var8.bind(var9)(var7, var3);
            _fun0026_ip = 302; continue _fun0026;
 239:
            var9 = _closure1_slot25;
            var8 = var9.setOptions;
            var7 = {};
            var7['voiceChannelGuildFilter'] = var4;
            var3 = true;
            var3 = var8.bind(var9)(var7, var3);
            _fun0026_ip = 302; continue _fun0026;
 266:
            var8 = _closure1_slot25;
            var7 = var8.setOptions;
            var3 = {};
            var9 = {};
            var9['guild'] = var1;
            var1 = true;
            var9['friends'] = var1;
            var3['userFilters'] = var9;
            var1 = var7.bind(var8)(var3, var1);
 302:
            _closure1_slot30 = var6;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var7.bind(var1)(var3);
            var3 = var3.AutocompleterResultTypes;
            var3 = var3.USER;
            if(!(var6 !== var3)) { _fun0026_ip = 362; continue _fun0026 }
 344:
            var6 = _closure1_slot25;
            var3 = var6.search;
            var3 = var3.bind(var6)(var5, var1);
            _fun0026_ip = 404; continue _fun0026;
 362:
            var6 = _closure1_slot21;
            var3 = var6.getGuildId;
            var3 = var3.bind(var6)();
            var6 = var4 != var3;
            var4 = null;
            if(!var6) { _fun0026_ip = 388; continue _fun0026 }
 385:
            var4 = var3;
 388:
            var3 = _closure1_slot25;
            var2 = var3.search;
            var2 = var2.bind(var3)(var5, var4);
 404:
            return var1;
 406:
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
 0:
            var2 = _closure1_slot28;
            if(var2) { _fun0027_ip = 63; continue _fun0027 }
 10:
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
 63:
            var1 = false;
            return var1;
        }
    };
    var4['QUICKSWITCHER_SWITCH_TO'] = var8;
    var8 = function handleChannelSelect(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var _closure2_slot0 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0028_ip = 87; continue _fun0028 }
 20:
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
            var2 = 4;
            if(!(var3 > var2)) { _fun0028_ip = 83; continue _fun0028 }
 73:
            var1 = _closure1_slot35;
            var1['length'] = var2;
 83:
            var1 = undefined;
            return var1;
 87:
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