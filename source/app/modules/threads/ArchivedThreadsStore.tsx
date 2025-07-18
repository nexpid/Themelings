// app/modules/threads/ArchivedThreadsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
    var9 = function reset() {
        var1 = false;
        _closure1_slot13 = var1;
        var2 = true;
        _closure1_slot14 = var2;
        _closure1_slot15 = var1;
        _closure1_slot16 = var1;
        var1 = null;
        _closure1_slot17 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 9;
        var2 = var5[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.ThreadSortOrder;
        var2 = var2.LATEST_ACTIVITY;
        _closure1_slot18 = var2;
        var2 = global;
        var2 = var2.Set;
        var6 = var2.prototype;
        var6 = Object.create(var6, {constructor: {value: var2}});
        var8 = var6;
        var2 = new var8[var2](var7);
        var2 = var2 instanceof Object ? var2 : var6;
        var _closure1_slot12 = var2;
        var2 = 0;
        _closure1_slot20 = var2;
        var2 = new Array(0);
        _closure1_slot19 = var2;
        var2 = 10;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.ThreadSearchTagSetting;
        var2 = var2.MATCH_SOME;
        _closure1_slot21 = var2;
        return var1;
    };
    var _closure1_slot26 = var9;
    var1 = function getSortValue(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ThreadSortOrder;
            var4 = var1.LATEST_ACTIVITY;
            var1 = arg2;
            if(!(var1 !== var4)) { _fun0005_ip = 54; continue _fun0005 }
 47:
            var1 = var2.id;
            _fun0005_ip = 74; continue _fun0005;
 54:
            var4 = _closure1_slot10;
            var3 = var4.lastMessageId;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
 74:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function resort() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot17;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 224; continue _fun0006 }
 18:
            var4 = _closure1_slot15;
            var4 = !var4;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot9;
            var5 = var6.getChannel;
            var7 = _closure1_slot19;
            var8 = var7.length;
            var4 = 1;
            var4 = var8 - var4;
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var4 = var1 == var7;
            var1 = null;
            if(var4) { _fun0006_ip = 88; continue _fun0006 }
 72:
            var6 = _closure1_slot27;
            var5 = _closure1_slot18;
            var4 = undefined;
            var1 = var6.bind(var4)(var7, var5);
 88:
            var _closure2_slot1 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 13;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var7 = _closure1_slot9;
            var6 = var7.getAllThreadsForParent;
            var4 = _closure1_slot17;
            var4 = var6.bind(var7)(var4);
            var6 = var5.bind(var1)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = var2.isArchivedThread;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var9 = arg1;
                    var1 = _closure1_slot12;
                    var1 = var1.size;
                    var3 = 0;
                    if(!(var3 !== var1)) { _fun0007_ip = 243; continue _fun0007 }
 24:
                    var5 = _closure1_slot21;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 10;
                    var1 = var1[var7];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.ThreadSearchTagSetting;
                    var1 = var1.MATCH_SOME;
                    if(!(var5 !== var1)) { _fun0007_ip = 202; continue _fun0007 }
 69:
                    var5 = _closure1_slot21;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.ThreadSearchTagSetting;
                    var1 = var1.MATCH_ALL;
                    if(!(var5 === var1)) { _fun0007_ip = 243; continue _fun0007 }
 109:
                    var5 = _closure1_slot24;
                    var6 = _closure1_slot12;
                    var1 = var6.values;
                    var1 = var1.bind(var6)();
                    var8 = var5.bind(var2)(var1);
                    var5 = var8.bind(var2)();
                    var1 = var5.done;
                    var7 = true;
                    var6 = null;
                    if(var1) { _fun0007_ip = 243; continue _fun0007 }
 147:
                    var12 = var5.value;
                    var11 = var9.appliedTags;
                    var10 = var6 == var11;
                    var1 = undefined;
                    if(var10) { _fun0007_ip = 177; continue _fun0007 }
 167:
                    var10 = var11.includes;
                    var1 = var10.bind(var11)(var12);
 177:
                    if(!(var7 === var1)) { _fun0007_ip = 198; continue _fun0007 }
 181:
                    var10 = var8.bind(var2)();
                    var1 = var10.done;
                    var5 = var10;
                    if(var1) { _fun0007_ip = 243; continue _fun0007 }
 196:
                    _fun0007_ip = 147; continue _fun0007;
 198:
                    var1 = false;
                    return var1;
 202:
                    var6 = var9.appliedTags;
                    var1 = null;
                    var1 = var1 == var6;
                    var2 = undefined;
                    if(var1) { _fun0007_ip = 237; continue _fun0007 }
 219:
                    var5 = var6.some;
                    var1 = function(arg1) {
                        var3 = _closure1_slot12;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var1);
 237:
                    var1 = true;
                    if(!(var1 === var2)) { _fun0007_ip = 343; continue _fun0007 }
 243:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0007_ip = 339; continue _fun0007 }
 253:
                    var5 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 339; continue _fun0007 }
 263:
                    var5 = var1 == var9;
                    var6 = null;
                    if(var5) { _fun0007_ip = 288; continue _fun0007 }
 272:
                    var8 = _closure1_slot27;
                    var7 = _closure1_slot18;
                    var5 = undefined;
                    var6 = var8.bind(var5)(var9, var7);
 288:
                    var1 = var1 != var6;
                    if(!var1) { _fun0007_ip = 337; continue _fun0007 }
 295:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 14;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.compare;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var6, var2);
                    var1 = var2 >= var3;
 337:
                    return var1;
 339:
                    var1 = true;
                    return var1;
 343:
                    var1 = false;
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var4);
            var5 = var6.sort;
            var4 = function(arg1, arg2) {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.compare;
                var6 = _closure1_slot27;
                var5 = _closure1_slot18;
                var2 = arg1;
                var2 = var6.bind(var7)(var2, var5);
                var5 = _closure1_slot18;
                var1 = arg2;
                var1 = var6.bind(var7)(var1, var5);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.reverse;
            var4 = var2.bind(var4)();
            var2 = var4.value;
            var2 = var2.bind(var4)();
            _closure1_slot19 = var2;
            return var1;
 224:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function removeThreadId(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot19;
            var3 = var4.indexOf;
            var4 = var3.bind(var4)(var5);
            var3 = 0;
            if(!(!(var4 >= var3))) { _fun0008_ip = 37; continue _fun0008 }
 33:
            var3 = false;
            return var3;
 37:
            var4 = _closure1_slot19;
            var3 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ALL_CHANNEL_TYPES;
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
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = false;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var10;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var8 = null;
    var _closure1_slot17 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThreadSortOrder;
    var8 = var8.LATEST_ACTIVITY;
    var _closure1_slot18 = var8;
    var8 = new Array(0);
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ThreadSearchTagSetting;
    var2 = var2.MATCH_SOME;
    var _closure1_slot21 = var2;
    var2 = new Array(0);
    var _closure1_slot22 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ArchivedThreadsStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
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
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot11;
            var1 = _closure1_slot10;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'canLoadMore';
        var5['key'] = var7;
        var7 = function get() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = _closure1_slot15;
                if(!var1) { _fun0010_ip = 17; continue _fun0010 }
 10:
                var3 = _closure1_slot13;
                var1 = !var3;
 17:
                if(!var1) { _fun0010_ip = 27; continue _fun0010 }
 20:
                var2 = _closure1_slot16;
                var1 = !var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'nextOffset';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isInitialLoad';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot17;
                var1 = arg1;
                if(!(var3 === var1)) { _fun0011_ip = 80; continue _fun0011 }
 14:
                var3 = _closure1_slot18;
                var1 = arg2;
                if(!(var3 === var1)) { _fun0011_ip = 80; continue _fun0011 }
 25:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.areSetsEqual;
                var3 = _closure1_slot12;
                var1 = arg3;
                var1 = var4.bind(var5)(var3, var1);
                if(!var1) { _fun0011_ip = 80; continue _fun0011 }
 69:
                var3 = _closure1_slot21;
                var1 = arg4;
                if(!(var3 !== var1)) { _fun0011_ip = 94; continue _fun0011 }
 80:
                var3 = _closure1_slot26;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var1 = false;
                _fun0011_ip = 98; continue _fun0011;
 94:
                var1 = _closure1_slot13;
 98:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getThreads';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot17;
                var1 = arg1;
                if(!(var3 === var1)) { _fun0012_ip = 80; continue _fun0012 }
 14:
                var3 = _closure1_slot18;
                var1 = arg2;
                if(!(var3 === var1)) { _fun0012_ip = 80; continue _fun0012 }
 25:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.areSetsEqual;
                var3 = _closure1_slot12;
                var1 = arg3;
                var1 = var4.bind(var5)(var3, var1);
                if(!var1) { _fun0012_ip = 80; continue _fun0012 }
 69:
                var3 = _closure1_slot21;
                var1 = arg4;
                if(!(var3 !== var1)) { _fun0012_ip = 86; continue _fun0012 }
 80:
                var1 = _closure1_slot22;
                _fun0012_ip = 90; continue _fun0012;
 86:
                var1 = _closure1_slot19;
 90:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ArchivedThreadsStore';
    var8['displayName'] = var2;
    var2 = 17;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot29;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['THREAD_DELETE'] = var9;
    var9 = function handleThreadUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var2 = _closure1_slot17;
            var1 = var3.parent_id;
            var1 = var2 === var1;
            if(!var1) { _fun0013_ip = 94; continue _fun0013 }
 28:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var6.bind(var5)(var2);
            var6 = var7.isForumPostPinned;
            var2 = var3.id;
            var2 = var6.bind(var7)(var2);
            var6 = !var2;
            var2 = !var6;
            if(var6) { _fun0013_ip = 91; continue _fun0013 }
 75:
            var4 = _closure1_slot29;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var2 = undefined;
 91:
            var1 = var2;
 94:
            return var1;
        }
    };
    var2['THREAD_UPDATE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = _closure1_slot17;
            if(!(var3 === var2)) { _fun0014_ip = 36; continue _fun0014 }
 24:
            var2 = _closure1_slot26;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 36:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleLoadArchivedThreads(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot17;
            var3 = var4 === var3;
            if(!var3) { _fun0015_ip = 36; continue _fun0015 }
 22:
            var5 = var1.sortOrder;
            var4 = _closure1_slot18;
            var3 = var5 === var4;
 36:
            if(!var3) { _fun0015_ip = 83; continue _fun0015 }
 39:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 11;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.areSetsEqual;
            var5 = var1.tagFilter;
            var4 = _closure1_slot12;
            var3 = var6.bind(var7)(var5, var4);
 83:
            if(!var3) { _fun0015_ip = 100; continue _fun0015 }
 86:
            var5 = var1.tagSetting;
            var4 = _closure1_slot21;
            var3 = var5 === var4;
 100:
            if(var3) { _fun0015_ip = 113; continue _fun0015 }
 103:
            var4 = _closure1_slot26;
            var3 = undefined;
            var3 = var4.bind(var3)();
 113:
            var3 = var1.channelId;
            _closure1_slot17 = var3;
            var3 = var1.sortOrder;
            _closure1_slot18 = var3;
            var5 = var1.tagFilter;
            var3 = global;
            var4 = var3.Set;
            var4 = var5 instanceof var4;
            if(var4) { _fun0015_ip = 187; continue _fun0015 }
 153:
            var5 = var3.Set;
            var9 = var1.tagFilter;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var10 = var4;
            var3 = new var10[var5](var9, var8);
            var3 = var3 instanceof Object ? var3 : var4;
            _fun0015_ip = 193; continue _fun0015;
 187:
            var3 = var1.tagFilter;
 193:
            _closure1_slot12 = var3;
            var1 = var1.tagSetting;
            _closure1_slot21 = var1;
            var1 = true;
            _closure1_slot13 = var1;
            var1 = false;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS'] = var9;
    var9 = function handleLoadArchivedThreadsSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = arg1;
            var5 = var2.channelId;
            var1 = _closure1_slot17;
            if(!(var5 === var1)) { _fun0016_ip = 365; continue _fun0016 }
 24:
            var5 = var2.sortOrder;
            var1 = _closure1_slot18;
            if(!(var5 === var1)) { _fun0016_ip = 365; continue _fun0016 }
 41:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var5 = var5[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var5);
            var7 = var8.areSetsEqual;
            var6 = var2.tagFilter;
            var5 = _closure1_slot12;
            var5 = var7.bind(var8)(var6, var5);
            if(!var5) { _fun0016_ip = 365; continue _fun0016 }
 91:
            var6 = var2.tagSetting;
            var5 = _closure1_slot21;
            if(!(var6 === var5)) { _fun0016_ip = 365; continue _fun0016 }
 108:
            var7 = var2.threads;
            var6 = var7.filter;
            var5 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var6 = var5.bind(var6)(var4);
            var5 = _closure1_slot19;
            var4 = var5.concat;
            var4 = var4.bind(var5)(var6);
            _closure1_slot19 = var4;
            var6 = _closure1_slot9;
            var5 = var6.getChannel;
            var4 = _closure1_slot17;
            var7 = var5.bind(var6)(var4);
            var4 = null;
            var4 = var4 != var7;
            if(!var4) { _fun0016_ip = 199; continue _fun0016 }
 189:
            var5 = var7.isForumLikeChannel;
            var4 = var5.bind(var7)();
 199:
            if(!var4) { _fun0016_ip = 318; continue _fun0016 }
 202:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 12;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.trackForumMorePostsLoaded;
            var4 = {};
            var8 = var7.guild_id;
            var4['guildId'] = var8;
            var7 = var7.id;
            var4['channelId'] = var7;
            var7 = _closure1_slot19;
            var7 = var7.length;
            var4['numArchivedThreads'] = var7;
            var7 = var2.hasMore;
            var4['hasMoreThreads'] = var7;
            var7 = global;
            var9 = var7.Array;
            var8 = var9.from;
            var7 = var2.tagFilter;
            var7 = var8.bind(var9)(var7);
            var4['filterTagIds'] = var7;
            var7 = var2.sortOrder;
            var4['sortOrder'] = var7;
            var4 = var5.bind(var6)(var4);
 318:
            var4 = _closure1_slot28;
            var4 = var4.bind(var1)();
            var4 = var2.hasMore;
            _closure1_slot15 = var4;
            var4 = var2.offset;
            var2 = 25;
            var2 = var4 + var2;
            _closure1_slot20 = var2;
            var2 = false;
            _closure1_slot13 = var2;
            _closure1_slot14 = var2;
            return var1;
 365:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var9 = function handleLoadArchivedThreadsFail(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var2 = arg1;
            var4 = var2.channelId;
            var1 = _closure1_slot17;
            if(!(var4 === var1)) { _fun0017_ip = 112; continue _fun0017 }
 19:
            var4 = var2.sortOrder;
            var1 = _closure1_slot18;
            if(!(var4 === var1)) { _fun0017_ip = 112; continue _fun0017 }
 33:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var5.bind(var1)(var4);
            var6 = var7.areSetsEqual;
            var5 = var2.tagFilter;
            var4 = _closure1_slot12;
            var4 = var6.bind(var7)(var5, var4);
            if(!var4) { _fun0017_ip = 112; continue _fun0017 }
 80:
            var4 = var2.tagSetting;
            var2 = _closure1_slot21;
            if(!(var4 === var2)) { _fun0017_ip = 112; continue _fun0017 }
 94:
            var2 = false;
            _closure1_slot13 = var2;
            var4 = true;
            _closure1_slot16 = var4;
            _closure1_slot14 = var2;
            return var1;
 112:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS_FAIL'] = var9;
    var4 = function handleResortThreads(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var5 = null;
            var1 = var5 == var1;
            if(var1) { _fun0018_ip = 28; continue _fun0018 }
 19:
            var4 = var3.channelId;
            var1 = var5 == var4;
 28:
            if(var1) { _fun0018_ip = 44; continue _fun0018 }
 31:
            var4 = _closure1_slot17;
            var3 = var3.channelId;
            var1 = var4 === var3;
 44:
            if(!var1) { _fun0018_ip = 57; continue _fun0018 }
 47:
            var3 = _closure1_slot28;
            var2 = undefined;
            var1 = var3.bind(var2)();
 57:
            return var1;
        }
    };
    var2['RESORT_THREADS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ArchivedThreadsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var2 = 25;
    var3['PAGE_SIZE'] = var2;
    return var1;
})();