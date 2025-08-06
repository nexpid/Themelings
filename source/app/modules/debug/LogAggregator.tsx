// app/modules/debug/LogAggregator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
            var9 = _closure1_slot2;
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
            var7 = _closure1_slot2;
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
    var _closure1_slot1 = var1;
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
    var _closure1_slot2 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var7 = var4.bind(var1)(var6);
    var4 = var7.prototype;
    var6 = Object.create(var4, {constructor: {value: var7}});
    var10 = 5000;
    var11 = var6;
    var4 = new var11[var7](var10, var9);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/LogAggregator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function report(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var18 = 1;
            var3 = copyRestArgs(var18);
            var2 = _closure1_slot1;
            var1 = undefined;
            var14 = var2.bind(var1)(var3);
            var5 = var14.bind(var1)();
            var2 = var5.done;
            var6 = '';
            var13 = ' ';
            var12 = '\n';
            var8 = global;
            var11 = 'boolean';
            var10 = 'number';
            var3 = 'string';
            var9 = var5;
            var5 = var6;
            var6 = var5;
            if(var2) { _fun0004_ip = 189; continue _fun0004 }
 71:
            var2 = var9.value;
            var15 = typeof var2;
            if(!(var3 !== var15)) { _fun0004_ip = 160; continue _fun0004 }
 83:
            if(!(var10 !== var15)) { _fun0004_ip = 160; continue _fun0004 }
 87:
            if(!(var11 !== var15)) { _fun0004_ip = 160; continue _fun0004 }
 91:
            var15 = var8.Error;
            var15 = var2 instanceof var15;
            if(var15) { _fun0004_ip = 131; continue _fun0004 }
 104:
            var16 = var8.JSON;
            var15 = var16.stringify;
            var15 = var15.bind(var16)(var2);
            var15 = var15 + var13;
            var15 = var5 + var15;
            _fun0004_ip = 168; continue _fun0004;
 131:
            var16 = var2.message;
            var17 = var16 + var12;
            var16 = var2.stack;
            var16 = var17 + var16;
            var16 = var16 + var13;
            var15 = var5 + var16;
            _fun0004_ip = 168; continue _fun0004;
 160:
            var2 = var2 + var13;
            var15 = var5 + var2;
 168:
            var16 = var14.bind(var1)();
            var2 = var16.done;
            var5 = var15;
            var9 = var16;
            var6 = var5;
            if(!var2) { _fun0004_ip = 71; continue _fun0004 }
 189:
            var2 = typeof var7;
            if(!(var3 !== var2)) { _fun0004_ip = 259; continue _fun0004 }
 196:
            var5 = _closure1_slot0;
            var3 = var5.push;
            var2 = {};
            var10 = var8.Date;
            var9 = var10.now;
            var9 = var9.bind(var10)();
            var2['time'] = var9;
            var9 = var7.name;
            var2['category'] = var9;
            var9 = var7.timing;
            var2['timing'] = var9;
            var2['message'] = var6;
            var2 = var3.bind(var5)(var2);
            _fun0004_ip = 304; continue _fun0004;
 259:
            var5 = _closure1_slot0;
            var3 = var5.push;
            var2 = {};
            var9 = var8.Date;
            var8 = var9.now;
            var8 = var8.bind(var9)();
            var2['time'] = var8;
            var2['category'] = var7;
            var2['message'] = var6;
            var2 = var3.bind(var5)(var2);
 304:
            var2 = _closure1_slot0;
            var2 = var2.length;
            var3 = 5000;
            if(!(var2 > var3)) { _fun0004_ip = 346; continue _fun0004 }
 323:
            var2 = _closure1_slot0;
            var5 = var2.shift;
            var5 = var5.bind(var2)();
            var2 = var2.length;
            if(var2 > var3) { _fun0004_ip = 323; continue _fun0004 }
 346:
            return var1;
        }
    };
    var3['report'] = var4;
    var4 = function clear() {
        var2 = _closure1_slot0;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clear'] = var4;
    var4 = function stringify(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = var3.toArray;
        var4 = var2.bind(var3)();
        var3 = var4.filter;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 39; continue _fun0005 }
 16:
                var4 = _closure2_slot0;
                var3 = var4.includes;
                var2 = arg1;
                var2 = var2.category;
                var1 = var3.bind(var4)(var2);
 39:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var3 = new Array(0);
                var4 = var3.push;
                var2 = global;
                var6 = var2.Date;
                var8 = var1.time;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var5 = var2 instanceof Object ? var2 : var5;
                var2 = var5.toISOString;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                var4 = var1.timing;
                var2 = null;
                if(!(var2 != var4)) { _fun0006_ip = 89; continue _fun0006 }
 73:
                var4 = var3.push;
                var2 = var1.timing;
                var2 = var4.bind(var3)(var2);
 89:
                var4 = var3.push;
                var2 = var1.category;
                var1 = var1.message;
                var1 = var4.bind(var3)(var2, var1);
                var2 = var3.join;
                var1 = ' -> ';
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = '\n';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['stringify'] = var4;
    var2 = function getAllForDebugPanel() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arguments[0];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0007_ip = 11; continue _fun0007 }
 9:
            var1 = false;
 11:
            var3 = _closure1_slot0;
            var2 = var3.toArray;
            var3 = var2.bind(var3)();
            if(var1) { _fun0007_ip = 36; continue _fun0007 }
 31:
            var1 = var3;
            _fun0007_ip = 46; continue _fun0007;
 36:
            var2 = var3.reverse;
            var1 = var2.bind(var3)();
 46:
            return var1;
        }
    };
    var3['getAllForDebugPanel'] = var2;
    return var1;
})();