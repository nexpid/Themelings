// app/modules/forums/ForumActivePostStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
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
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
            var9 = _closure1_slot31;
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
            var7 = _closure1_slot31;
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
    var _closure1_slot30 = var1;
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
    var _closure1_slot31 = var1;
    var1 = function getLastMessageId(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot12;
            var2 = var3.lastMessageId;
            var2 = var2.bind(var3)(var1);
            var3 = null;
            if(!(var3 != var2)) { _fun0005_ip = 30; continue _fun0005 }
 27:
            var1 = var2;
 30:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function getSortFunction(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var9 = arg1;
                var5 = arg2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 14;
                var1 = var1[var6];
                var8 = undefined;
                var2 = var2.bind(var8)(var1);
                var1 = var2.isForumPostPinned;
                var2 = var1.bind(var2)(var9);
                var1 = -1;
                if(var2) { _fun0006_ip = 220; continue _fun0006 }
 54:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var8)(var2);
                var2 = var3.isForumPostPinned;
                var3 = var2.bind(var3)(var5);
                var2 = 1;
                if(var3) { _fun0006_ip = 217; continue _fun0006 }
 91:
                var6 = _closure2_slot0;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 11;
                var3 = var10[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.ThreadSortOrder;
                var3 = var3.LATEST_ACTIVITY;
                if(!(var6 !== var3)) { _fun0006_ip = 168; continue _fun0006 }
 134:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 15;
                var3 = var7[var3];
                var6 = var6.bind(var8)(var3);
                var3 = var6.compare;
                var3 = var3.bind(var6)(var5, var9);
                _fun0006_ip = 214; continue _fun0006;
 168:
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var7 = var7.bind(var8)(var6);
                var6 = var7.compare;
                var4 = _closure1_slot32;
                var5 = var4.bind(var8)(var5);
                var4 = var4.bind(var8)(var9);
                var3 = var6.bind(var7)(var5, var4);
 214:
                var2 = var3;
 217:
                var1 = var2;
 220:
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot33 = var1;
    var1 = function resetState() {
        var1 = new Array(0);
        _closure1_slot22 = var1;
        var1 = null;
        var _closure1_slot14 = var1;
        _closure1_slot17 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var10 = var3;
        var1 = new var10[var1](var9);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot18 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 11;
        var3 = var5[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var3 = var3.ThreadSortOrder;
        var3 = var3.LATEST_ACTIVITY;
        _closure1_slot19 = var3;
        var3 = 12;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var3 = var3.ThreadSearchTagSetting;
        var3 = var3.MATCH_SOME;
        _closure1_slot20 = var3;
        var3 = 0;
        _closure1_slot21 = var3;
        var3 = new Array(0);
        _closure1_slot24 = var3;
        var4 = _closure1_slot1;
        var3 = 13;
        var6 = var5[var3];
        var8 = var4.bind(var1)(var6);
        var7 = var8.chain;
        var6 = _closure1_slot15;
        var6 = var7.bind(var8)(var6);
        _closure1_slot25 = var6;
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.chain;
        var3 = _closure1_slot15;
        var3 = var4.bind(var5)(var3);
        _closure1_slot26 = var3;
        var4 = _closure1_slot28;
        var3 = var4.clear;
        var3 = var3.bind(var4)();
        var3 = _closure1_slot27;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot34 = var1;
    var5 = function maybeRebuildState() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot13;
            var2 = var3.getChannelId;
            var5 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var5)) { _fun0007_ip = 76; continue _fun0007 }
 23:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var3 = var3.bind(var4)(var5);
            if(!(var2 != var3)) { _fun0007_ip = 76; continue _fun0007 }
 41:
            var2 = var3.isForumLikeChannel;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0007_ip = 76; continue _fun0007 }
 54:
            var4 = _closure1_slot35;
            var3 = {};
            var2 = true;
            var3['refreshThreadIds'] = var2;
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            return var2;
 76:
            var2 = _closure1_slot34;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = false;
            return var1;
        }
    };
    var1 = function rebuildState(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var5 = _closure1_slot11;
            var4 = var5.getChannel;
            var1 = _closure1_slot17;
            var4 = var4.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0008_ip = 618; continue _fun0008 }
 35:
            var5 = var1 != var7;
            if(!var5) { _fun0008_ip = 48; continue _fun0008 }
 42:
            var5 = var7.refreshThreadIds;
 48:
            if(!var5) { _fun0008_ip = 126; continue _fun0008 }
 51:
            var5 = global;
            var6 = var5.Object;
            var5 = var6.values;
            var10 = _closure1_slot8;
            var9 = var10.getThreadsForParent;
            var8 = var4.guild_id;
            var4 = var4.id;
            var4 = var9.bind(var10)(var8, var4);
            var6 = var5.bind(var6)(var4);
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            _closure1_slot24 = var4;
            var4 = 0;
            _closure1_slot21 = var4;
            var4 = true;
            _closure1_slot23 = var4;
 126:
            var4 = _closure1_slot27;
            var4 = var4.size;
            var6 = 0;
            if(!(var6 !== var4)) { _fun0008_ip = 178; continue _fun0008 }
 141:
            var8 = _closure1_slot24;
            var5 = var8.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot27;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var4 = var5.bind(var8)(var4);
            _closure1_slot24 = var4;
            var5 = _closure1_slot27;
            var4 = var5.clear;
            var4 = var4.bind(var5)();
 178:
            var4 = _closure1_slot28;
            var4 = var4.size;
            if(!(var6 !== var4)) { _fun0008_ip = 284; continue _fun0008 }
 191:
            var4 = global;
            var8 = var4.Array;
            var5 = var8.from;
            var10 = var4.Set;
            var16 = _closure1_slot24;
            var4 = new Array(0);
            var17 = var4;
            var15 = 0;
            var15 = arraySpread(var17, var16, var15);
            var16 = _closure1_slot28;
            var17 = var4;
            var9 = arraySpread(var17, var16, var15);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var18 = var9;
            var17 = var4;
            var4 = new var18[var10](var17, var16);
            var4 = var4 instanceof Object ? var4 : var9;
            var4 = var5.bind(var8)(var4);
            _closure1_slot24 = var4;
            var5 = _closure1_slot28;
            var4 = var5.clear;
            var4 = var4.bind(var5)();
 284:
            var4 = var1 != var7;
            if(!var4) { _fun0008_ip = 297; continue _fun0008 }
 291:
            var4 = var7.refreshThreadIds;
 297:
            if(var4) { _fun0008_ip = 316; continue _fun0008 }
 300:
            var5 = var1 != var7;
            if(!var5) { _fun0008_ip = 313; continue _fun0008 }
 307:
            var5 = var7.sortThreadIds;
 313:
            var4 = var5;
 316:
            if(!var4) { _fun0008_ip = 476; continue _fun0008 }
 322:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 13;
            var4 = var11[var5];
            var9 = undefined;
            var10 = var7.bind(var9)(var4);
            var8 = var10.chain;
            var4 = _closure1_slot24;
            var14 = var8.bind(var10)(var4);
            var13 = var14.sort;
            var8 = _closure1_slot33;
            var10 = _closure1_slot0;
            var4 = 11;
            var12 = var11[var4];
            var12 = var10.bind(var9)(var12);
            var12 = var12.ThreadSortOrder;
            var12 = var12.LATEST_ACTIVITY;
            var12 = var8.bind(var9)(var12);
            var12 = var13.bind(var14)(var12);
            _closure1_slot26 = var12;
            var5 = var11[var5];
            var12 = var7.bind(var9)(var5);
            var7 = var12.chain;
            var5 = _closure1_slot24;
            var7 = var7.bind(var12)(var5);
            var5 = var7.sort;
            var4 = var11[var4];
            var4 = var10.bind(var9)(var4);
            var4 = var4.ThreadSortOrder;
            var4 = var4.CREATION_DATE;
            var4 = var8.bind(var9)(var4);
            var4 = var5.bind(var7)(var4);
            _closure1_slot25 = var4;
 476:
            var5 = _closure1_slot19;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 11;
            var4 = var8[var4];
            var10 = undefined;
            var4 = var7.bind(var10)(var4);
            var4 = var4.ThreadSortOrder;
            var4 = var4.LATEST_ACTIVITY;
            if(!(var5 !== var4)) { _fun0008_ip = 524; continue _fun0008 }
 518:
            var5 = _closure1_slot25;
            _fun0008_ip = 528; continue _fun0008;
 524:
            var5 = _closure1_slot26;
 528:
            var4 = var5.value;
            var7 = var4.bind(var5)();
            var4 = _closure1_slot18;
            var4 = var4.size;
            var5 = var7;
            if(!(var6 !== var4)) { _fun0008_ip = 582; continue _fun0008 }
 553:
            var6 = var7.filter;
            var9 = _closure1_slot18;
            var8 = _closure1_slot20;
            var4 = function getFilterFunction(arg1, arg2) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = arg2;
                var _closure3_slot1 = var2;
                var1 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = _closure1_slot11;
                        var3 = var4.getChannel;
                        var1 = arg1;
                        var4 = var3.bind(var4)(var1);
                        var1 = null;
                        var6 = var1 == var4;
                        var5 = undefined;
                        var3 = undefined;
                        if(var6) { _fun0009_ip = 39; continue _fun0009 }
 33:
                        var3 = var4.appliedTags;
 39:
                        if(!(var1 != var3)) { _fun0009_ip = 198; continue _fun0009 }
 46:
                        var4 = var3.length;
                        var1 = 0;
                        if(!(var1 !== var4)) { _fun0009_ip = 198; continue _fun0009 }
 60:
                        var6 = _closure3_slot1;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 12;
                        var4 = var8[var4];
                        var4 = var7.bind(var5)(var4);
                        var4 = var4.ThreadSearchTagSetting;
                        var4 = var4.MATCH_SOME;
                        if(!(var6 !== var4)) { _fun0009_ip = 178; continue _fun0009 }
 103:
                        var2 = _closure1_slot30;
                        var4 = _closure3_slot0;
                        var1 = var4.values;
                        var1 = var1.bind(var4)();
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.bind(var5)();
                        var1 = var2.done;
                        if(var1) { _fun0009_ip = 174; continue _fun0009 }
 137:
                        var6 = var2.value;
                        var1 = var3.includes;
                        var1 = var1.bind(var3)(var6);
                        if(var1) { _fun0009_ip = 159; continue _fun0009 }
 155:
                        var1 = false;
                        return var1;
 159:
                        var6 = var4.bind(var5)();
                        var1 = var6.done;
                        var2 = var6;
                        if(!var1) { _fun0009_ip = 137; continue _fun0009 }
 174:
                        var1 = true;
                        return var1;
 178:
                        var2 = var3.some;
                        var1 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.has;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
 198:
                        var1 = false;
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var10)(var9, var8);
            var5 = var6.bind(var7)(var4);
 582:
            _closure1_slot22 = var5;
            var4 = var5.find;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getCount;
                    var1 = arg1;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 === var3;
                    if(var1) { _fun0010_ip = 36; continue _fun0010 }
 30:
                    var2 = 0;
                    var1 = var2 === var3;
 36:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = var1 == var3;
            var1 = null;
            if(var4) { _fun0008_ip = 614; continue _fun0008 }
 611:
            var1 = var3;
 614:
            _closure1_slot14 = var1;
 618:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var9 = 0;
    var10 = var7[var9];
    var1 = undefined;
    var10 = var8.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot12 = var10;
    var10 = 10;
    var10 = var7[var10];
    var10 = var8.bind(var1)(var10);
    var _closure1_slot13 = var10;
    var11 = new Array(0);
    var _closure1_slot15 = var11;
    var10 = null;
    var _closure1_slot16 = var10;
    var _closure1_slot17 = var10;
    var10 = var4.Set;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var16 = var12;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot18 = var10;
    var10 = 11;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.ThreadSortOrder;
    var10 = var10.LATEST_ACTIVITY;
    var _closure1_slot19 = var10;
    var10 = 12;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.ThreadSearchTagSetting;
    var10 = var10.MATCH_SOME;
    var _closure1_slot20 = var10;
    var _closure1_slot21 = var9;
    var9 = new Array(0);
    var _closure1_slot22 = var9;
    var9 = false;
    var _closure1_slot23 = var9;
    var9 = new Array(0);
    var _closure1_slot24 = var9;
    var9 = 13;
    var10 = var7[var9];
    var12 = var8.bind(var1)(var10);
    var10 = var12.chain;
    var10 = var10.bind(var12)(var11);
    var _closure1_slot25 = var10;
    var9 = var7[var9];
    var10 = var8.bind(var1)(var9);
    var9 = var10.chain;
    var9 = var9.bind(var10)(var11);
    var _closure1_slot26 = var9;
    var9 = var4.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var16 = var10;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot27 = var9;
    var4 = var4.Set;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var16 = var9;
    var4 = new var16[var4](var15);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot28 = var4;
    var4 = 17;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function ForumActivePostStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                var1 = _closure1_slot29;
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
        var1 = function value() {
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot11;
            var9 = _closure1_slot8;
            var8 = _closure1_slot13;
            var7 = _closure1_slot12;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getNewThreadCount';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCanAckThreads';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot23;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getThreadIds';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var8 = arg1;
                var6 = arg2;
                var10 = arg3;
                var9 = arg4;
                var7 = _closure1_slot17;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.areSetsEqual;
                var2 = _closure1_slot18;
                var2 = var3.bind(var5)(var10, var2);
                var2 = !var2;
                var5 = _closure1_slot19;
                var3 = _closure1_slot20;
                var3 = var9 !== var3;
                _closure1_slot17 = var8;
                _closure1_slot18 = var10;
                _closure1_slot19 = var6;
                _closure1_slot20 = var9;
                if(!(var8 === var7)) { _fun0012_ip = 135; continue _fun0012 }
 92:
                if(!(var6 === var5)) { _fun0012_ip = 115; continue _fun0012 }
 96:
                if(var2) { _fun0012_ip = 102; continue _fun0012 }
 99:
                var2 = var3;
 102:
                if(!var2) { _fun0012_ip = 153; continue _fun0012 }
 105:
                var2 = _closure1_slot35;
                var2 = var2.bind(var4)();
                _fun0012_ip = 153; continue _fun0012;
 115:
                var3 = _closure1_slot35;
                var2 = {};
                var5 = true;
                var2['sortThreadIds'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0012_ip = 153; continue _fun0012;
 135:
                var3 = _closure1_slot35;
                var2 = {};
                var5 = true;
                var2['refreshThreadIds'] = var5;
                var2 = var3.bind(var4)(var2);
 153:
                var1 = _closure1_slot22;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getCurrentThreadIds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAndDeleteMostRecentUserCreatedThreadId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot16;
            var2 = null;
            _closure1_slot16 = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFirstNoReplyThreadId';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'ForumActivePostStore';
    var9['displayName'] = var4;
    var4 = 18;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var5;
    var4['OVERLAY_INITIALIZE'] = var5;
    var4['GUILD_CREATE'] = var5;
    var4['CHANNEL_SELECT'] = var5;
    var5 = function handleChannelDelete(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.parent_id;
            var2 = null;
            if(!(var2 != var3)) { _fun0013_ip = 49; continue _fun0013 }
 20:
            var3 = var1.parent_id;
            var2 = _closure1_slot17;
            if(!(var3 === var2)) { _fun0013_ip = 49; continue _fun0013 }
 37:
            var2 = _closure1_slot34;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 49:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_DELETE'] = var5;
    var5 = function handleThreadListSync(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = _closure1_slot17;
            var2 = null;
            var1 = var2 != var1;
            if(!var1) { _fun0014_ip = 88; continue _fun0014 }
 24:
            var7 = _closure1_slot11;
            var6 = var7.getChannel;
            var3 = _closure1_slot17;
            var6 = var6.bind(var7)(var3);
            var7 = var2 == var6;
            var3 = undefined;
            var2 = undefined;
            if(var7) { _fun0014_ip = 58; continue _fun0014 }
 53:
            var2 = var6.guild_id;
 58:
            var2 = var5 === var2;
            if(!var2) { _fun0014_ip = 85; continue _fun0014 }
 65:
            var5 = _closure1_slot35;
            var4 = {};
            var6 = true;
            var4['refreshThreadIds'] = var6;
            var4 = var5.bind(var3)(var4);
            var2 = undefined;
 85:
            var1 = var2;
 88:
            return var1;
        }
    };
    var4['THREAD_LIST_SYNC'] = var5;
    var5 = function handleThreadCreate(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var2 = var1.isNewlyCreated;
            var4 = var3.parent_id;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0015_ip = 46; continue _fun0015 }
 29:
            var5 = var3.parent_id;
            var4 = _closure1_slot17;
            var1 = var5 === var4;
 46:
            if(!var1) { _fun0015_ip = 118; continue _fun0015 }
 49:
            var4 = !var2;
            var2 = !var4;
            if(var4) { _fun0015_ip = 115; continue _fun0015 }
 58:
            var5 = var3.ownerId;
            var7 = _closure1_slot10;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            if(!(var5 === var4)) { _fun0015_ip = 96; continue _fun0015 }
 85:
            var3 = var3.id;
            _closure1_slot16 = var3;
            _fun0015_ip = 113; continue _fun0015;
 96:
            var4 = _closure1_slot21;
            var4 = parseFloat(var4);
            var5 = var4 + 1;
            _closure1_slot21 = var5;
            var3 = var4;
 113:
            var2 = undefined;
 115:
            var1 = var2;
 118:
            return var1;
        }
    };
    var4['THREAD_CREATE'] = var5;
    var5 = function handleThreadUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var2 = var3.parent_id;
            var1 = null;
            if(!(var1 != var2)) { _fun0016_ip = 194; continue _fun0016 }
 23:
            var4 = var3.parent_id;
            var1 = _closure1_slot17;
            if(!(var4 === var1)) { _fun0016_ip = 194; continue _fun0016 }
 43:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.isForumPostPinned;
            var4 = var3.id;
            var5 = var5.bind(var6)(var4);
            var7 = _closure1_slot28;
            var6 = var7.has;
            var4 = var3.id;
            var4 = var6.bind(var7)(var4);
            if(!var5) { _fun0016_ip = 145; continue _fun0016 }
 103:
            if(var4) { _fun0016_ip = 145; continue _fun0016 }
 106:
            var8 = _closure1_slot28;
            var7 = var8.add;
            var6 = var3.id;
            var6 = var7.bind(var8)(var6);
            var7 = _closure1_slot35;
            var6 = {};
            var8 = true;
            var6['sortThreadIds'] = var8;
            var6 = var7.bind(var1)(var6);
            _fun0016_ip = 188; continue _fun0016;
 145:
            if(var5) { _fun0016_ip = 190; continue _fun0016 }
 148:
            if(!var4) { _fun0016_ip = 190; continue _fun0016 }
 151:
            var5 = _closure1_slot28;
            var4 = var5.delete;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot35;
            var2 = {};
            var4 = true;
            var2['sortThreadIds'] = var4;
            var2 = var3.bind(var1)(var2);
 188:
            return var1;
 190:
            var1 = false;
            return var1;
 194:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_UPDATE'] = var5;
    var5 = function handleThreadDelete(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var3 = var2.parent_id;
            var1 = null;
            if(!(var1 != var3)) { _fun0017_ip = 78; continue _fun0017 }
 20:
            var4 = var2.parent_id;
            var3 = _closure1_slot17;
            if(!(var4 === var3)) { _fun0017_ip = 78; continue _fun0017 }
 37:
            var4 = _closure1_slot27;
            var3 = var4.add;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot35;
            var2 = {};
            var1 = true;
            var2['sortThreadIds'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 78:
            var1 = false;
            return var1;
        }
    };
    var4['THREAD_DELETE'] = var5;
    var5 = function handleResortThreads(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 != var3)) { _fun0018_ip = 47; continue _fun0018 }
 14:
            var2 = _closure1_slot17;
            if(!(var3 === var2)) { _fun0018_ip = 47; continue _fun0018 }
 25:
            var3 = _closure1_slot35;
            var2 = {};
            var1 = true;
            var2['refreshThreadIds'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 47:
            var1 = false;
            return var1;
        }
    };
    var4['RESORT_THREADS'] = var5;
    var5 = function handleChannelAck(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var1 = null;
            if(!(var1 != var3)) { _fun0019_ip = 35; continue _fun0019 }
 14:
            var1 = _closure1_slot17;
            if(!(var3 === var1)) { _fun0019_ip = 35; continue _fun0019 }
 25:
            var1 = false;
            _closure1_slot23 = var1;
            var1 = undefined;
            return var1;
 35:
            var1 = false;
            return var1;
        }
    };
    var4['CHANNEL_ACK'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/ForumActivePostStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function computeThreadIdsSnapshot(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var4 = _closure1_slot11;
            var3 = var4.getChannel;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0020_ip = 115; continue _fun0020 }
 26:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var7 = _closure1_slot8;
            var6 = var7.getThreadsForParent;
            var5 = var2.guild_id;
            var2 = var2.id;
            var2 = var6.bind(var7)(var5, var2);
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.sort;
            var5 = _closure1_slot33;
            var4 = _closure1_slot19;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var2.bind(var3)(var1);
            _fun0020_ip = 119; continue _fun0020;
 115:
            var1 = new Array(0);
 119:
            return var1;
        }
    };
    var3['computeThreadIdsSnapshot'] = var2;
    return var1;
})();