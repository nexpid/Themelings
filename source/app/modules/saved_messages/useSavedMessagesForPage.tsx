// app/modules/saved_messages/useSavedMessagesForPage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var1 = function getKeys() {
        var2 = _closure1_slot4;
        var1 = var2.getSavedMessages;
        var3 = var1.bind(var2)();
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.saveData;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/useSavedMessagesForPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSavedMessagesForPage() {
        var7 = _closure1_slot3;
        var3 = var7.useState;
        var1 = _closure1_slot7;
        var6 = var3.bind(var7)(var1);
        var5 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var6 = var5.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot0 = var5;
        var6 = var7.useRef;
        var8 = _closure1_slot4;
        var5 = var8.getIsStale;
        var5 = var5.bind(var8)();
        var5 = var6.bind(var7)(var5);
        var _closure2_slot1 = var5;
        var6 = var7.useEffect;
        var5 = function() {
            var4 = function handleChange() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot4;
                    var1 = var3.getLastChanged;
                    var3 = var1.bind(var3)();
                    var4 = _closure3_slot0;
                    if(!(var4 !== var3)) { _fun0004_ip = 119; continue _fun0004 }
 28:
                    _closure3_slot0 = var3;
                    var3 = _closure2_slot1;
                    var3 = var3.current;
                    if(!var3) { _fun0004_ip = 99; continue _fun0004 }
 47:
                    var4 = _closure1_slot4;
                    var3 = var4.getIsStale;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0004_ip = 99; continue _fun0004 }
 64:
                    var4 = _closure2_slot1;
                    var3 = false;
                    var4['current'] = var3;
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    var2 = var4.bind(var3)(var2);
                    var2 = undefined;
                    return var2;
 99:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var6 = arg1;
                            var1 = new Array(0);
                            var11 = 0;
                            var13 = var1;
                            var12 = var6;
                            var2 = arraySpread(var13, var12, var11);
                            var4 = _closure1_slot4;
                            var3 = var4.getSavedMessages;
                            var7 = var3.bind(var4)();
                            var3 = global;
                            var5 = var3.Map;
                            var4 = var7.map;
                            var3 = function(arg1) {
                                var2 = arg1;
                                var1 = var2.saveData;
                                var3 = var1.messageId;
                                var1 = new Array(2);
                                var1[0] = var3;
                                var1[1] = var2;
                                return var1;
                            };
                            var13 = var4.bind(var7)(var3);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var14 = var4;
                            var3 = new var14[var5](var13, var12);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = _closure1_slot5;
                            var5 = undefined;
                            var8 = var3.bind(var5)(var6);
                            var6 = var8.bind(var5)();
                            var3 = var6.done;
                            var7 = 1;
                            if(var3) { _fun0005_ip = 187; continue _fun0005 }
 109:
                            var3 = var6.value;
                            var10 = var4.has;
                            var9 = var3.messageId;
                            var9 = var10.bind(var4)(var9);
                            if(var9) { _fun0005_ip = 157; continue _fun0005 }
 132:
                            var10 = var1.splice;
                            var9 = var1.indexOf;
                            var9 = var9.bind(var1)(var3);
                            var9 = var10.bind(var1)(var9, var7);
                            _fun0005_ip = 172; continue _fun0005;
 157:
                            var9 = var4.delete;
                            var3 = var3.messageId;
                            var3 = var9.bind(var4)(var3);
 172:
                            var9 = var8.bind(var5)();
                            var3 = var9.done;
                            var6 = var9;
                            if(!var3) { _fun0005_ip = 109; continue _fun0005 }
 187:
                            var3 = _closure1_slot5;
                            var2 = var4.values;
                            var2 = var2.bind(var4)();
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.bind(var5)();
                            var2 = var3.done;
                            if(var2) { _fun0005_ip = 253; continue _fun0005 }
 217:
                            var2 = var3.value;
                            var6 = var1.push;
                            var2 = var2.saveData;
                            var2 = var6.bind(var1)(var2);
                            var6 = var4.bind(var5)();
                            var2 = var6.done;
                            var3 = var6;
                            if(!var2) { _fun0005_ip = 217; continue _fun0005 }
 253:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
 119:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot1 = var4;
            var5 = _closure1_slot4;
            var3 = var5.getLastChanged;
            var3 = var3.bind(var5)();
            var _closure3_slot0 = var3;
            var3 = _closure1_slot4;
            var2 = var3.addChangeListener;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.removeChangeListener;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var4 = new Array(0);
        var4 = var6.bind(var7)(var5, var4);
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();