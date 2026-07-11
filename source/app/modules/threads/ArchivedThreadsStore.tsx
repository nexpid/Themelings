// app/modules/threads/ArchivedThreadsStore.tsx
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
            var9 = _closure1_slot17;
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
            var7 = _closure1_slot17;
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
    var _closure1_slot16 = var1;
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
    var _closure1_slot17 = var1;
    var1 = function listKey(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg3;
            var2 = global;
            var1 = var2.HermesInternal;
            var8 = var1.concat;
            var15 = '';
            var14 = arg1;
            var4 = '|';
            var12 = arg2;
            var10 = arg4;
            var13 = var4;
            var11 = var4;
            var9 = var4;
            var4 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
            var6 = var5.size;
            var3 = 0;
            var1 = var4;
            if(!(var3 !== var6)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = var5.size;
            var3 = 1;
            if(!(var3 !== var6)) { _fun0005_ip = 41; continue _fun0005 }
case 5:
            var3 = var2.Array;
            var2 = var3.from;
            var3 = var2.bind(var3)(var5);
            var2 = var3.sort;
            var6 = var2.bind(var3)();
            var3 = var6.join;
            var2 = ',';
            var2 = var3.bind(var6)(var2);
            var2 = var4 + var2;
            _fun0005_ip = 42; continue _fun0005;
case 41:
            var3 = var5.values;
            var5 = var3.bind(var5)();
            var3 = var5.next;
            var3 = var3.bind(var5)();
            var3 = var3.value;
            var2 = var4 + var3;
case 42:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getSortValue(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ThreadSortOrder;
            var4 = var1.LATEST_ACTIVITY;
            var1 = arg2;
            if(!(var1 !== var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var1 = var2.id;
            _fun0006_ip = 4; continue _fun0006;
case 43:
            var4 = _closure1_slot11;
            var3 = var4.lastMessageId;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function resortListState(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var7 = var3.channelId;
            var9 = var3.sortOrder;
            var _closure2_slot0 = var9;
            var1 = var3.tagFilter;
            var _closure2_slot1 = var1;
            var1 = var3.tagSetting;
            var _closure2_slot2 = var1;
            var1 = var3.hasMore;
            var _closure2_slot3 = var1;
            var6 = _closure1_slot10;
            var5 = var6.getChannel;
            var8 = var3.threads;
            var1 = var3.threads;
            var10 = var1.length;
            var1 = 1;
            var1 = var10 - var1;
            var1 = var8[var1];
            var8 = var5.bind(var6)(var1);
            var1 = null;
            var5 = var1 == var8;
            if(var5) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var6 = _closure1_slot19;
            var5 = undefined;
            var1 = var6.bind(var5)(var8, var9);
case 45:
            var _closure2_slot4 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 12;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = _closure1_slot10;
            var4 = var6.getAllThreadsForParent;
            var4 = var4.bind(var6)(var7);
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var8 = arg1;
                    var1 = _closure2_slot1;
                    var1 = var1.size;
                    var3 = 0;
                    if(!(var3 !== var1)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var6 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 13;
                    var5 = var4[var9];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.ThreadSearchTagSetting;
                    var5 = var5.MATCH_SOME;
                    if(!(var5 !== var6)) { _fun0008_ip = 49; continue _fun0008 }
case 5:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.ThreadSearchTagSetting;
                    var5 = var5.MATCH_ALL;
                    if(!(var5 === var6)) { _fun0008_ip = 47; continue _fun0008 }
case 50:
                    var5 = _closure1_slot16;
                    var6 = _closure2_slot1;
                    var1 = var6.values;
                    var1 = var1.bind(var6)();
                    var9 = var5.bind(var4)(var1);
                    var5 = var9.bind(var4)();
                    var1 = var5.done;
                    var7 = true;
                    var6 = null;
                    if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 51:
                    var12 = var5.value;
                    var11 = var8.appliedTags;
                    var10 = var6 == var11;
                    var1 = undefined;
                    if(var10) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var10 = var11.includes;
                    var1 = var10.bind(var11)(var12);
case 52:
                    if(!(var7 === var1)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var10 = var9.bind(var4)();
                    var1 = var10.done;
                    var5 = var10;
                    if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 24:
                    _fun0008_ip = 51; continue _fun0008;
case 54:
                    var1 = false;
                    return var1;
case 49:
                    var6 = var8.appliedTags;
                    var1 = null;
                    var1 = var1 == var6;
                    var4 = undefined;
                    if(var1) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var5 = var6.some;
                    var1 = function(arg1) {
                        var3 = _closure2_slot1;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var1);
case 56:
                    var1 = true;
                    if(!(var1 === var4)) { _fun0008_ip = 58; continue _fun0008 }
case 47:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0008_ip = 59; continue _fun0008 }
case 22:
                    var4 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0008_ip = 60; continue _fun0008 }
case 59:
                    var4 = true;
                    return var4;
case 60:
                    var4 = var1 == var8;
                    var6 = null;
                    if(var4) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var7 = _closure1_slot19;
                    var5 = _closure2_slot0;
                    var4 = undefined;
                    var6 = var7.bind(var4)(var8, var5);
case 61:
                    var1 = var1 != var6;
                    if(!var1) { _fun0008_ip = 10; continue _fun0008 }
case 63:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 14;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var7.bind(var4)(var5);
                    var4 = var5.compare;
                    var2 = _closure2_slot4;
                    var2 = var4.bind(var5)(var6, var2);
                    var1 = var2 >= var3;
case 10:
                    return var1;
case 58:
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
                var6 = _closure1_slot19;
                var5 = _closure2_slot0;
                var1 = arg1;
                var2 = var6.bind(var7)(var1, var5);
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
            var3['threads'] = var2;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ALL_CHANNEL_TYPES;
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var14 = var8;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot13 = var2;
    var2 = new Array(0);
    var _closure1_slot14 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ArchivedThreadsStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 66; continue _fun0009;
case 64:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 66:
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
            var3 = _closure1_slot10;
            var2 = _closure1_slot12;
            var1 = _closure1_slot11;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCanLoadMore';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var8 = _closure1_slot18;
                var13 = undefined;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var1 = var13[var8](var12, var11, var10, var9, var8);
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                var2 = var3.hasMore;
                if(!var2) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                var4 = var3.loading;
                var2 = !var4;
case 69:
                if(!var2) { _fun0010_ip = 71; continue _fun0010 }
case 64:
                var3 = var3.failed;
                var2 = !var3;
case 71:
                var1 = var2;
case 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getNextOffset';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var8 = _closure1_slot18;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var13 = undefined;
                var1 = var13[var8](var12, var11, var10, var9, var8);
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 32; continue _fun0011 }
case 72:
                var2 = var3.nextOffset;
case 32:
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                var1 = var2;
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getIsInitialLoad';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var8 = _closure1_slot18;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var13 = undefined;
                var1 = var13[var8](var12, var11, var10, var9, var8);
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 32; continue _fun0012 }
case 72:
                var2 = var3.isInitialLoad;
case 32:
                var1 = var1 == var2;
                if(var1) { _fun0012_ip = 69; continue _fun0012 }
case 75:
                var1 = var2;
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isLoading';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = _closure1_slot13;
                var3 = var4.get;
                var8 = _closure1_slot18;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = arg4;
                var13 = undefined;
                var1 = var13[var8](var12, var11, var10, var9, var8);
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 32; continue _fun0013 }
case 72:
                var2 = var3.loading;
case 32:
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 69; continue _fun0013 }
case 75:
                var1 = var2;
case 69:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getThreads';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = _closure1_slot13;
                var4 = var5.get;
                var9 = _closure1_slot18;
                var13 = arg1;
                var12 = arg2;
                var11 = arg3;
                var10 = arg4;
                var14 = undefined;
                var3 = var14[var9](var13, var12, var11, var10, var9);
                var4 = var4.bind(var5)(var3);
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0014_ip = 32; continue _fun0014 }
case 72:
                var1 = var4.threads;
case 32:
                if(!(var3 == var1)) { _fun0014_ip = 76; continue _fun0014 }
case 40:
                var1 = _closure1_slot14;
case 76:
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
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function resetAll() {
        var2 = _closure1_slot13;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleThreadDelete(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.id;
            var2 = function removeThreadIdFromAllLists(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var9 = arg1;
                    var _closure3_slot0 = var9;
                    var2 = _closure1_slot16;
                    var3 = _closure1_slot13;
                    var1 = var3.values;
                    var1 = var1.bind(var3)();
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var3 = var7.bind(var8)();
                    var2 = var3.done;
                    var5 = 0;
                    var4 = var3;
                    var3 = false;
                    var1 = false;
                    if(var2) { _fun0016_ip = 77; continue _fun0016 }
case 70:
                    var11 = var4.value;
                    var12 = var11.threads;
                    var2 = var12.indexOf;
                    var2 = var2.bind(var12)(var9);
                    if(!(var2 >= var5)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
                    var13 = var11.threads;
                    var12 = var13.filter;
                    var2 = function(arg1) {
                        var2 = _closure3_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var2 = var12.bind(var13)(var2);
                    var11['threads'] = var2;
                    var3 = true;
case 78:
                    var12 = var7.bind(var8)();
                    var2 = var12.done;
                    var4 = var12;
                    var1 = var3;
                    if(!var2) { _fun0016_ip = 70; continue _fun0016 }
case 77:
                    return var1;
                }
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            if(var2) { _fun0015_ip = 80; continue _fun0015 }
case 7:
            var2 = false;
            return var2;
case 80:
            return var1;
        }
    };
    var2['THREAD_DELETE'] = var9;
    var9 = function handleThreadUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.isForumPostPinned;
            var3 = var9.id;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0017_ip = 81; continue _fun0017 }
case 82:
            var3 = false;
            return var3;
case 81:
            var3 = _closure1_slot16;
            var4 = _closure1_slot13;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var8 = var3.bind(var2)(var1);
            var4 = var8.bind(var2)();
            var1 = var4.done;
            var6 = 0;
            var5 = var4;
            var4 = false;
            var3 = false;
            if(var1) { _fun0017_ip = 83; continue _fun0017 }
case 66:
            var12 = var5.value;
            var13 = var12.channelId;
            var1 = var9.parent_id;
            var11 = var4;
            if(!(var13 === var1)) { _fun0017_ip = 84; continue _fun0017 }
case 85:
            var14 = var12.threads;
            var13 = var14.indexOf;
            var1 = var9.id;
            var1 = var13.bind(var14)(var1);
            if(!(var1 >= var6)) { _fun0017_ip = 86; continue _fun0017 }
case 87:
            var14 = var12.threads;
            var13 = var14.filter;
            var1 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var13.bind(var14)(var1);
            var12['threads'] = var1;
            var4 = true;
case 86:
            var11 = var4;
case 84:
            var12 = var8.bind(var2)();
            var1 = var12.done;
            var4 = var11;
            var5 = var12;
            var3 = var4;
            if(!var1) { _fun0017_ip = 66; continue _fun0017 }
case 83:
            var1 = !var3;
            var1 = !var1;
            if(!var3) { _fun0017_ip = 57; continue _fun0017 }
case 88:
            var1 = undefined;
case 57:
            return var1;
        }
    };
    var2['THREAD_UPDATE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var13 = arg1;
            var3 = _closure1_slot16;
            var2 = _closure1_slot13;
            var1 = undefined;
            var11 = var3.bind(var1)(var2);
            var3 = var11.bind(var1)();
            var4 = var3.done;
            var2 = false;
            var9 = 2;
            var8 = 0;
            var7 = 1;
            var6 = var3;
            var5 = false;
            var3 = false;
            if(var4) { _fun0018_ip = 89; continue _fun0018 }
case 72:
            var14 = var6.value;
            var4 = _closure1_slot8;
            var4 = var4.bind(var1)(var14, var9);
            var15 = var4[var8];
            var4 = var4[var7];
            var14 = var4.channelId;
            var4 = var13.channel;
            var4 = var4.id;
            if(!(var14 === var4)) { _fun0018_ip = 50; continue _fun0018 }
case 90:
            var14 = _closure1_slot13;
            var4 = var14.delete;
            var4 = var4.bind(var14)(var15);
            var5 = true;
case 50:
            var15 = var11.bind(var1)();
            var4 = var15.done;
            var6 = var15;
            var3 = var5;
            if(!var4) { _fun0018_ip = 72; continue _fun0018 }
case 89:
            if(var3) { _fun0018_ip = 91; continue _fun0018 }
case 92:
            return var2;
case 91:
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleLoadArchivedThreads(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var4 = var2.tagFilter;
            var1 = global;
            var3 = var1.Set;
            var3 = var4 instanceof var3;
            if(var3) { _fun0019_ip = 82; continue _fun0019 }
case 48:
            var4 = var1.Set;
            var19 = var2.tagFilter;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var20 = var3;
            var1 = new var20[var4](var19, var18);
            var10 = var1 instanceof Object ? var1 : var3;
            _fun0019_ip = 76; continue _fun0019;
case 82:
            var10 = var2.tagFilter;
case 76:
            var6 = _closure1_slot18;
            var19 = var2.channelId;
            var18 = var2.sortOrder;
            var16 = var2.tagSetting;
            var1 = undefined;
            var20 = undefined;
            var17 = var10;
            var5 = var20[var6](var19, var18, var17, var16, var15);
            var4 = _closure1_slot16;
            var3 = _closure1_slot13;
            var11 = var4.bind(var1)(var3);
            var4 = var11.bind(var1)();
            var3 = var4.done;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            if(var3) { _fun0019_ip = 93; continue _fun0019 }
case 94:
            var12 = var4.value;
            var3 = _closure1_slot8;
            var3 = var3.bind(var1)(var12, var8);
            var13 = var3[var7];
            var12 = var3[var6];
            var3 = var13 !== var5;
            if(!var3) { _fun0019_ip = 52; continue _fun0019 }
case 95:
            var15 = var12.channelId;
            var14 = var2.channelId;
            var3 = var15 === var14;
case 52:
            if(!var3) { _fun0019_ip = 96; continue _fun0019 }
case 20:
            var3 = var12.failed;
case 96:
            if(!var3) { _fun0019_ip = 97; continue _fun0019 }
case 98:
            var12 = _closure1_slot13;
            var3 = var12.delete;
            var3 = var3.bind(var12)(var13);
case 97:
            var12 = var11.bind(var1)();
            var3 = var12.done;
            var4 = var12;
            if(!var3) { _fun0019_ip = 94; continue _fun0019 }
case 93:
            var4 = _closure1_slot13;
            var3 = var4.get;
            var3 = var3.bind(var4)(var5);
            var4 = null;
            if(!(var4 != var3)) { _fun0019_ip = 99; continue _fun0019 }
case 100:
            var3['tagFilter'] = var10;
            var4 = false;
            var3['failed'] = var4;
            var4 = var3;
            _fun0019_ip = 101; continue _fun0019;
case 99:
            var12 = var2.channelId;
            var11 = var2.sortOrder;
            var3 = var2.tagSetting;
            var2 = {'loading': false, 'isInitialLoad': true, 'hasMore': false, 'failed': false, 'threads': null, 'nextOffset': 0};
            var13 = new Array(0);
            var2['threads'] = var13;
            var2['channelId'] = var12;
            var2['sortOrder'] = var11;
            var2['tagFilter'] = var10;
            var2['tagSetting'] = var3;
            var4 = var2;
case 101:
            var2 = true;
            var4['loading'] = var2;
            var2 = false;
            var4['isInitialLoad'] = var2;
            var2 = _closure1_slot13;
            var3 = var2.delete;
            var3 = var3.bind(var2)(var5);
            var3 = var2.set;
            var3 = var3.bind(var2)(var5, var4);
            var2 = var2.size;
            var5 = 50;
            if(!(!(var2 <= var5))) { _fun0019_ip = 102; continue _fun0019 }
case 103:
            var3 = _closure1_slot16;
            var2 = _closure1_slot13;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0019_ip = 102; continue _fun0019 }
case 104:
            var10 = var3.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var10, var8);
            var11 = var2[var7];
            var2 = var2[var6];
            var10 = _closure1_slot13;
            var10 = var10.size;
            if(!(!(var10 <= var5))) { _fun0019_ip = 102; continue _fun0019 }
case 105:
            var2 = var2.loading;
            if(var2) { _fun0019_ip = 106; continue _fun0019 }
case 107:
            var10 = _closure1_slot13;
            var2 = var10.delete;
            var2 = var2.bind(var10)(var11);
case 106:
            var10 = var4.bind(var1)();
            var2 = var10.done;
            var3 = var10;
            if(!var2) { _fun0019_ip = 104; continue _fun0019 }
case 102:
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS'] = var9;
    var9 = function handleLoadArchivedThreadsSuccess(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var3 = var2.tagFilter;
            var8 = global;
            var1 = var8.Set;
            var1 = var3 instanceof var1;
            if(var1) { _fun0020_ip = 40; continue _fun0020 }
case 108:
            var4 = var8.Set;
            var14 = var2.tagFilter;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var15 = var3;
            var1 = new var15[var4](var14, var13);
            var10 = var1 instanceof Object ? var1 : var3;
            _fun0020_ip = 69; continue _fun0020;
case 40:
            var10 = var2.tagFilter;
case 69:
            var9 = _closure1_slot18;
            var14 = var2.channelId;
            var13 = var2.sortOrder;
            var11 = var2.tagSetting;
            var1 = undefined;
            var15 = undefined;
            var12 = var10;
            var7 = var15[var9](var14, var13, var12, var11, var10);
            var5 = _closure1_slot13;
            var3 = var5.get;
            var3 = var3.bind(var5)(var7);
            var5 = null;
            if(!(var5 != var3)) { _fun0020_ip = 109; continue _fun0020 }
case 110:
            var10 = var2.threads;
            var9 = var10.filter;
            var7 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var10)(var7);
            var7 = var9.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var7.bind(var9)(var6);
            var7 = var3.threads;
            var6 = var7.concat;
            var6 = var6.bind(var7)(var9);
            var3['threads'] = var6;
            var9 = _closure1_slot10;
            var7 = var9.getChannel;
            var6 = var3.channelId;
            var9 = var7.bind(var9)(var6);
            var5 = var5 != var9;
            if(!var5) { _fun0020_ip = 57; continue _fun0020 }
case 111:
            var6 = var9.isForumLikeChannel;
            var5 = var6.bind(var9)();
case 57:
            if(!var5) { _fun0020_ip = 112; continue _fun0020 }
case 113:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 11;
            var5 = var7[var5];
            var7 = var6.bind(var1)(var5);
            var6 = var7.trackForumMorePostsLoaded;
            var5 = {};
            var10 = var9.guild_id;
            var5['guildId'] = var10;
            var9 = var9.id;
            var5['channelId'] = var9;
            var9 = var3.threads;
            var9 = var9.length;
            var5['numArchivedThreads'] = var9;
            var9 = var2.hasMore;
            var5['hasMoreThreads'] = var9;
            var10 = var8.Array;
            var9 = var10.from;
            var8 = var2.tagFilter;
            var8 = var9.bind(var10)(var8);
            var5['filterTagIds'] = var8;
            var8 = var2.sortOrder;
            var5['sortOrder'] = var8;
            var5 = var6.bind(var7)(var5);
case 112:
            var4 = _closure1_slot20;
            var4 = var4.bind(var1)(var3);
            var4 = var2.hasMore;
            var3['hasMore'] = var4;
            var4 = var2.offset;
            var2 = 25;
            var2 = var4 + var2;
            var3['nextOffset'] = var2;
            var2 = false;
            var3['loading'] = var2;
            var3['isInitialLoad'] = var2;
            return var1;
case 109:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var9 = function handleLoadArchivedThreadsFail(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var4 = var1.tagFilter;
            var2 = global;
            var3 = var2.Set;
            var3 = var4 instanceof var3;
            if(var3) { _fun0021_ip = 82; continue _fun0021 }
case 48:
            var4 = var2.Set;
            var11 = var1.tagFilter;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var2 = new var12[var4](var11, var10);
            var7 = var2 instanceof Object ? var2 : var3;
            _fun0021_ip = 76; continue _fun0021;
case 82:
            var7 = var1.tagFilter;
case 76:
            var6 = _closure1_slot18;
            var11 = var1.channelId;
            var10 = var1.sortOrder;
            var8 = var1.tagSetting;
            var1 = undefined;
            var12 = undefined;
            var9 = var7;
            var4 = var12[var6](var11, var10, var9, var8, var7);
            var3 = _closure1_slot13;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var3)) { _fun0021_ip = 114; continue _fun0021 }
case 115:
            var2 = false;
            var3['loading'] = var2;
            var4 = true;
            var3['failed'] = var4;
            var3['isInitialLoad'] = var2;
            return var1;
case 114:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_ARCHIVED_THREADS_FAIL'] = var9;
    var4 = function handleResortThreads(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var11 = arg1;
            var3 = _closure1_slot16;
            var2 = _closure1_slot13;
            var1 = var2.values;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var9 = var3.bind(var1)(var2);
            var3 = var9.bind(var1)();
            var4 = var3.done;
            var2 = false;
            var7 = null;
            var6 = var3;
            var5 = false;
            var3 = false;
            if(var4) { _fun0022_ip = 45; continue _fun0022 }
case 116:
            var12 = var6.value;
            var4 = var11.channelId;
            var4 = var7 != var4;
            if(!var4) { _fun0022_ip = 117; continue _fun0022 }
case 3:
            var14 = var12.channelId;
            var13 = var11.channelId;
            var4 = var14 !== var13;
case 117:
            if(var4) { _fun0022_ip = 118; continue _fun0022 }
case 119:
            var4 = _closure1_slot20;
            var4 = var4.bind(var1)(var12);
            var5 = true;
case 118:
            var13 = var9.bind(var1)();
            var4 = var13.done;
            var6 = var13;
            var3 = var5;
            if(!var4) { _fun0022_ip = 116; continue _fun0022 }
case 45:
            if(var3) { _fun0022_ip = 120; continue _fun0022 }
case 115:
            return var2;
case 120:
            return var1;
        }
    };
    var2['RESORT_THREADS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
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