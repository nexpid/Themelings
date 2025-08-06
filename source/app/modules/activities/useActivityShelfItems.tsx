// app/modules/activities/useActivityShelfItems.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useActivityShelfItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityShelfItems(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var10 = var2.guildId;
            var7 = var2.enableFilter;
            var8 = undefined;
            if(!(var7 === var8)) { _fun0004_ip = 26; continue _fun0004 }
 24:
            var7 = false;
 26:
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var8;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var3 = var9[var3];
            var11 = var4.bind(var8)(var3);
            var6 = var11.useStateFromStoresObject;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getFilter;
                var2 = var2.bind(var3)();
                var1['filter'] = var2;
                return var1;
            };
            var3 = var6.bind(var11)(var5, var3);
            var6 = var3.filter;
            _closure2_slot1 = var6;
            var3 = 3;
            var3 = var9[var3];
            var5 = var4.bind(var8)(var3);
            var3 = var5.useActivityShelfData;
            var5 = var3.bind(var5)(var10);
            var10 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var3 = var10.bind(var8)(var3);
            var5 = var3.bind(var8)(var5);
            _closure2_slot2 = var5;
            var3 = 5;
            var3 = var9[var3];
            var4 = var4.bind(var8)(var3);
            var3 = var4.useDeveloperActivityShelfItems;
            var8 = var3.bind(var4)();
            _closure2_slot3 = var8;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var7 = function shouldKeepShelfItem(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            if(var1) { _fun0006_ip = 84; continue _fun0006 }
 13:
                            var4 = _closure2_slot1;
                            var2 = '';
                            var2 = var2 === var4;
                            if(var2) { _fun0006_ip = 81; continue _fun0006 }
 28:
                            var4 = arg1;
                            var4 = var4.application;
                            var5 = var4.name;
                            var4 = var5.toLowerCase;
                            var5 = var4.bind(var5)();
                            var4 = var5.includes;
                            var6 = _closure2_slot1;
                            var3 = var6.toLowerCase;
                            var3 = var3.bind(var6)();
                            var3 = var4.bind(var5)(var3);
                            var3 = !var3;
                            var2 = !var3;
 81:
                            var1 = var2;
 84:
                            return var1;
                        }
                    };
                    var11 = _closure2_slot3;
                    var4 = new Array(0);
                    var10 = 0;
                    var12 = var4;
                    var1 = arraySpread(var12, var11, var10);
                    var1 = var4.filter;
                    var1 = var1.bind(var4)(var7);
                    var4 = global;
                    var5 = var4.Set;
                    var4 = var1.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.application;
                        var1 = var1.id;
                        return var1;
                    };
                    var12 = var4.bind(var1)(var3);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var13 = var4;
                    var3 = new var13[var5](var12, var11);
                    var6 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot2;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if(var2) { _fun0005_ip = 178; continue _fun0005 }
 114:
                    var8 = var3.value;
                    var9 = var6.has;
                    var2 = var8.application;
                    var2 = var2.id;
                    var2 = var9.bind(var6)(var2);
                    var2 = !var2;
                    if(!var2) { _fun0005_ip = 150; continue _fun0005 }
 145:
                    var2 = var7.bind(var5)(var8);
 150:
                    if(!var2) { _fun0005_ip = 163; continue _fun0005 }
 153:
                    var2 = var1.push;
                    var2 = var2.bind(var1)(var8);
 163:
                    var8 = var4.bind(var5)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0005_ip = 114; continue _fun0005 }
 178:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();