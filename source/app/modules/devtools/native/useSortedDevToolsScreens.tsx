// app/modules/devtools/native/useSortedDevToolsScreens.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot5;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot5;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
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
    var1 = function getSortedDevToolsScreens() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[0];
            var6 = undefined;
            if(!(var2 === var6)) { _fun0004_ip = 24; continue _fun0004 }
 11:
            var3 = _closure1_slot3;
            var2 = var3.sortedScreenKeys;
 24:
            var _closure2_slot0 = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.DevToolsScreens;
            var3 = var3.bind(var4)(var2);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2[Symbol.iterator];
                    var2 = var1().next;
                    var5 = var2().value;
                    var2 = var1;
                    var3 = undefined;
                    var2 = var2 === var3;
                    var4 = undefined;
                    if(var2) { _fun0005_ip = 27; continue _fun0005 }
 24:
                    var4 = var5;
 27:
                    if(var2) { _fun0005_ip = 33; continue _fun0005 }
 30:
                    var1.return();
 33:
                    var2 = arg2;
                    var1 = var2[Symbol.iterator];
                    var2 = var1().next;
                    var5 = var2().value;
                    var2 = var1;
                    var2 = var2 === var3;
                    var3 = undefined;
                    if(var2) { _fun0005_ip = 58; continue _fun0005 }
 55:
                    var3 = var5;
 58:
                    if(var2) { _fun0005_ip = 64; continue _fun0005 }
 61:
                    var1.return();
 64:
                    var2 = _closure2_slot0;
                    var1 = var2.indexOf;
                    var5 = var1.bind(var2)(var4);
                    var1 = var2.indexOf;
                    var4 = var1.bind(var2)(var3);
                    var6 = -1;
                    var3 = var6 === var5;
                    if(!var3) { _fun0005_ip = 112; continue _fun0005 }
 106:
                    var1 = 0;
                    if(!(var6 !== var4)) { _fun0005_ip = 135; continue _fun0005 }
 112:
                    var2 = var6;
                    if(var3) { _fun0005_ip = 132; continue _fun0005 }
 118:
                    var3 = 1;
                    if(!(var6 !== var4)) { _fun0005_ip = 129; continue _fun0005 }
 125:
                    var3 = var5 - var4;
 129:
                    var2 = var3;
 132:
                    var1 = var2;
 135:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/useSortedDevToolsScreens.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSortedDevToolsScreens() {
        var3 = _closure1_slot6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 4;
        var4 = var4[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var4);
        var5 = var6.useStateFromStores;
        var1 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() {
            var1 = _closure1_slot3;
            var1 = var1.sortedScreenKeys;
            return var1;
        };
        var1 = var5.bind(var6)(var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function updateSortOrder(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var7 = arg2;
            var1 = _closure1_slot3;
            var12 = var1.sortedScreenKeys;
            var5 = new Array(0);
            var9 = 0;
            var13 = var5;
            var11 = 0;
            var1 = arraySpread(var13, var12, var11);
            var4 = _closure1_slot4;
            var3 = _closure1_slot6;
            var1 = undefined;
            var3 = var3.bind(var1)();
            var8 = var4.bind(var1)(var3);
            var4 = var8.bind(var1)();
            var3 = var4.done;
            var6 = 1;
            if(var3) { _fun0006_ip = 122; continue _fun0006 }
 65:
            var10 = var4.value;
            var3 = _closure1_slot2;
            var3 = var3.bind(var1)(var10, var6);
            var10 = var3[var9];
            var3 = var5.includes;
            var3 = var3.bind(var5)(var10);
            if(var3) { _fun0006_ip = 107; continue _fun0006 }
 97:
            var3 = var5.push;
            var3 = var3.bind(var5)(var10);
 107:
            var10 = var8.bind(var1)();
            var3 = var10.done;
            var4 = var10;
            if(!var3) { _fun0006_ip = 65; continue _fun0006 }
 122:
            var4 = var5.indexOf;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var4 = 'up';
            if(!(var4 !== var7)) { _fun0006_ip = 178; continue _fun0006 }
 144:
            var4 = 'down';
            if(!(var4 === var7)) { _fun0006_ip = 202; continue _fun0006 }
 152:
            var7 = var5[var3];
            var4 = var3 + var6;
            var4 = var5[var4];
            var5[var3] = var4;
            var4 = var3 + var6;
            var5[var4] = var7;
            _fun0006_ip = 202; continue _fun0006;
 178:
            var4 = var5[var3];
            var7 = var3 - var6;
            var7 = var5[var7];
            var5[var3] = var7;
            var3 = var3 - var6;
            var5[var3] = var4;
 202:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateDevToolsSettings;
            var2 = {};
            var2['sortedScreenKeys'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['updateSortOrder'] = var2;
    return var1;
})();