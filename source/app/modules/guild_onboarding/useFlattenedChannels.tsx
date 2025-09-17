// app/modules/guild_onboarding/useFlattenedChannels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
    var _closure1_slot4 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function getFlattenedChannels(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var10 = arg3;
            var1 = arguments[3];
            var2 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var10;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0004_ip = 27; continue _fun0004 }
 25:
            var1 = false;
 27:
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var6;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 1;
            var3 = var7[var1];
            var8 = var5.bind(var6)(var3);
            var11 = _closure1_slot3;
            var9 = var11.getMutableGuildChannelsForGuild;
            var3 = arg1;
            var3 = var9.bind(var11)(var3);
            var8 = var8.bind(var6)(var3);
            var3 = var8.values;
            var9 = var3.bind(var8)();
            var8 = var9.groupBy;
            var3 = 'parent_id';
            var8 = var8.bind(var9)(var3);
            var3 = var8.value;
            var3 = var3.bind(var8)();
            _closure2_slot3 = var3;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var9 = var3.bind(var6)(var10);
            var8 = var9.map;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.isCategory;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0005_ip = 24; continue _fun0005 }
 16:
                    var1 = var2.parent_id;
                    _fun0005_ip = 29; continue _fun0005;
 24:
                    var1 = var2.id;
 29:
                    return var1;
                }
            };
            var12 = var8.bind(var9)(var3);
            var9 = var12.filter;
            var11 = _closure1_slot0;
            var3 = 2;
            var8 = var7[var3];
            var8 = var11.bind(var6)(var8);
            var8 = var8.isNotNullish;
            var9 = var9.bind(var12)(var8);
            var8 = var9.uniq;
            var12 = var8.bind(var9)();
            var9 = var12.map;
            var8 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var12)(var8);
            var8 = var9.filter;
            var3 = var7[var3];
            var3 = var11.bind(var6)(var3);
            var3 = var3.isNotNullish;
            var9 = var8.bind(var9)(var3);
            var8 = var9.sortBy;
            var3 = 'position';
            var8 = var8.bind(var9)(var3);
            var3 = var8.value;
            var3 = var3.bind(var8)();
            var8 = global;
            var11 = var8.Set;
            var9 = var3.map;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var14 = var9.bind(var3)(var8);
            var9 = var11.prototype;
            var9 = Object.create(var9, {constructor: {value: var11}});
            var15 = var9;
            var8 = new var15[var11](var14, var13);
            var8 = var8 instanceof Object ? var8 : var9;
            _closure2_slot4 = var8;
            var9 = var10.filter;
            var8 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var1 = var3.isCategory;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0006_ip = 57; continue _fun0006 }
 16:
                    var4 = var3.parent_id;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0006_ip = 54; continue _fun0006 }
 31:
                    var5 = _closure2_slot4;
                    var4 = var5.has;
                    var3 = var3.parent_id;
                    var2 = var4.bind(var5)(var3);
 54:
                    var1 = var2;
 57:
                    var1 = !var1;
                    return var1;
                }
            };
            var8 = var9.bind(var10)(var8);
            _closure2_slot5 = var8;
            var1 = var7[var1];
            var7 = var5.bind(var6)(var1);
            var5 = var7.sortBy;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.isGuildVocal;
                    var1 = var1.bind(var2)();
                    var3 = var2.position;
                    if(var1) { _fun0007_ip = 26; continue _fun0007 }
 21:
                    var1 = var3;
                    _fun0007_ip = 36; continue _fun0007;
 26:
                    var2 = 10000;
                    var1 = var3 + var2;
 36:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var8, var1);
            _closure2_slot5 = var1;
            var5 = function _loop(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot2;
                    if(var4) { _fun0008_ip = 33; continue _fun0008 }
 19:
                    var5 = _closure2_slot5;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var1);
 33:
                    var6 = _closure2_slot0;
                    var5 = var6.has;
                    var4 = var1.id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0008_ip = 76; continue _fun0008 }
 55:
                    var6 = _closure2_slot1;
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.parent_id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var5.bind(var6)(var4);
                    _fun0008_ip = 89; continue _fun0008;
 76:
                    var4 = _closure2_slot3;
                    var1 = var1.id;
                    var6 = var4[var1];
 89:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.sortBy;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0008_ip = 130; continue _fun0008 }
 126:
                    var6 = new Array(0);
 130:
                    var3 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var1 = var2.isGuildVocal;
                            var1 = var1.bind(var2)();
                            var3 = var2.position;
                            if(var1) { _fun0009_ip = 26; continue _fun0009 }
 21:
                            var1 = var3;
                            _fun0009_ip = 36; continue _fun0009;
 26:
                            var2 = 10000;
                            var1 = var3 + var2;
 36:
                            return var1;
                        }
                    };
                    var9 = var4.bind(var5)(var6, var3);
                    var4 = _closure2_slot5;
                    var3 = var4.push;
                    var2 = new Array(0);
                    var8 = 0;
                    var10 = var2;
                    var5 = arraySpread(var10, var9, var8);
                    var10 = var3;
                    var9 = var2;
                    var8 = var4;
                    var2 = apply(var10, var9, var8);
                    return var1;
                }
            };
            var2 = _closure1_slot4;
            var4 = var2.bind(var6)(var3);
            var3 = var4.bind(var6)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 408; continue _fun0004 }
 383:
            var2 = var3.value;
            var2 = var5.bind(var6)(var2);
            var7 = var4.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0004_ip = 383; continue _fun0004 }
 408:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding/useFlattenedChannels.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getFlattenedChannels'] = var4;
    var2 = function useFlattenedChannels(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arguments[2];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0010_ip = 27; continue _fun0010 }
 25:
            var2 = false;
 27:
            var _closure2_slot2 = var2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 3;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useStateFromStoresArray;
            var5 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var6 = _closure2_slot1;
                var4 = var2.bind(var3)(var6);
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot3;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var3.bind(var4)(var2);
                var4 = var7.filter;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 2;
                var3 = var5[var3];
                var5 = undefined;
                var3 = var8.bind(var5)(var3);
                var3 = var3.isNotNullish;
                var10 = var4.bind(var7)(var3);
                var3 = _closure1_slot6;
                var12 = _closure2_slot0;
                var9 = _closure2_slot2;
                var13 = undefined;
                var11 = var6;
                var1 = var13[var3](var12, var11, var10, var9, var8);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useFlattenedChannels'] = var2;
    return var1;
})();