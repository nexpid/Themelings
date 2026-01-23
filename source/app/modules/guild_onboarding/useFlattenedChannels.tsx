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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = function getFlattenedChannels(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg3;
            var1 = arguments[3];
            var2 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var10;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = false;
case 36:
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
case 0:
                    var2 = arg1;
                    var1 = var2.isCategory;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var1 = var2.parent_id;
                    _fun0005_ip = 40; continue _fun0005;
case 38:
                    var1 = var2.id;
case 40:
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
case 0:
                    var3 = arg1;
                    var1 = var3.isCategory;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 39:
                    var4 = var3.parent_id;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var5 = _closure2_slot4;
                    var4 = var5.has;
                    var3 = var3.parent_id;
                    var2 = var4.bind(var5)(var3);
case 42:
                    var1 = var2;
case 41:
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
case 0:
                    var2 = arg1;
                    var1 = var2.isGuildVocal;
                    var1 = var1.bind(var2)();
                    var3 = var2.position;
                    if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var1 = var3;
                    _fun0007_ip = 46; continue _fun0007;
case 44:
                    var2 = 10000;
                    var1 = var3 + var2;
case 46:
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var8, var1);
            _closure2_slot5 = var1;
            var5 = function _loop(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot2;
                    if(var4) { _fun0008_ip = 33; continue _fun0008 }
case 47:
                    var5 = _closure2_slot5;
                    var4 = var5.push;
                    var4 = var4.bind(var5)(var1);
case 33:
                    var6 = _closure2_slot0;
                    var5 = var6.has;
                    var4 = var1.id;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0008_ip = 48; continue _fun0008 }
case 4:
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
                    _fun0008_ip = 49; continue _fun0008;
case 48:
                    var4 = _closure2_slot3;
                    var1 = var1.id;
                    var6 = var4[var1];
case 49:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 1;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.sortBy;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var6 = new Array(0);
case 50:
                    var3 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.isGuildVocal;
                            var1 = var1.bind(var2)();
                            var3 = var2.position;
                            if(var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                            var1 = var3;
                            _fun0009_ip = 46; continue _fun0009;
case 44:
                            var2 = 10000;
                            var1 = var3 + var2;
case 46:
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
            if(var2) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var2 = var3.value;
            var2 = var5.bind(var6)(var2);
            var7 = var4.bind(var6)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0004_ip = 53; continue _fun0004 }
case 52:
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
case 0:
            var2 = arguments[2];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0010_ip = 36; continue _fun0010 }
case 37:
            var2 = false;
case 36:
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