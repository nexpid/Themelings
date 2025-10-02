// app/utils/DragAndDropUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var5 = function calculatePositionDeltas(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.oldOrdering;
            var4 = var1.newOrdering;
            var13 = var1.idGetter;
            var12 = var1.existingPositionGetter;
            var2 = var1.ascending;
            var11 = undefined;
            if(!(var2 === var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = true;
case 2:
            var10 = var4.length;
            var1 = var5.length;
            if(!(var1 === var10)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var5.map;
            var3 = var1.bind(var5)(var13);
            var1 = var3.sort;
            var3 = var1.bind(var3)();
            var1 = var3.join;
            var6 = ':';
            var7 = var1.bind(var3)(var6);
            var1 = var4.map;
            var3 = var1.bind(var4)(var13);
            var1 = var3.sort;
            var3 = var1.bind(var3)();
            var1 = var3.join;
            var6 = var1.bind(var3)(var6);
            if(!(var7 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = {};
            var8 = 0;
            var3 = var8 < var10;
            var1 = 0;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5[var1];
            var14 = var13.bind(var11)(var3);
            var3 = var5[var1];
            var3 = var12.bind(var11)(var3);
            var9[var14] = var3;
            var1 = var1 + 1;
            if(var1 < var10) { _fun0001_ip = 9; continue _fun0001 }
case 8:
            var1 = new Array(0);
            var14 = var8 < var10;
            var3 = 1;
            var8 = 0;
            if(!var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = var4[var8];
            var17 = var13.bind(var11)(var14);
            var16 = var8;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = var10 - var3;
            var16 = var14 - var8;
case 12:
            var14 = var9[var17];
            var14 = var14 === var16;
            if(!var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var15 = var4[var8];
            var15 = var12.bind(var11)(var15);
            var14 = var15 === var16;
case 14:
            if(var14) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var1.push;
            var14 = {};
            var14['id'] = var17;
            var14['position'] = var16;
            var14 = var15.bind(var1)(var14);
case 16:
            var8 = var8 + 1;
            if(var8 < var10) { _fun0001_ip = 11; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var1.reverse;
            var2 = var2.bind(var1)();
case 18:
            return var1;
case 6:
            var3 = _closure1_slot2;
            var2 = var3.warn;
            var1 = 'Object IDs in the old ordering and the new ordering are not the same.';
            var1 = var2.bind(var3)(var1, var7, var6);
            var1 = new Array(0);
            return var1;
case 4:
            var3 = _closure1_slot2;
            var2 = var3.warn;
            var1 = 'Arrays are not of the same length!';
            var1 = var2.bind(var3)(var1, var5, var4);
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot3 = var5;
    var4 = function moveItemFromTo(arg1, arg2, arg3) {
        var2 = arg1;
        var6 = arg2;
        var5 = var2[var6];
        var1 = new Array(0);
        var4 = 0;
        var9 = var1;
        var8 = var2;
        var7 = 0;
        var2 = arraySpread(var9, var8, var7);
        var3 = var1.splice;
        var2 = 1;
        var2 = var3.bind(var1)(var6, var2);
        var3 = var1.splice;
        var2 = arg3;
        var2 = var3.bind(var1)(var2, var4, var5);
        return var1;
    };
    var _closure1_slot4 = var4;
    var2 = function getPositionUpdates(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.objectArray;
            var10 = var1.fromPosition;
            var9 = var1.toPosition;
            var6 = var1.idGetter;
            var5 = var1.existingPositionGetter;
            var4 = var1.ascending;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = true;
case 20:
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var7);
            var8 = var7;
            if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 1;
            var1 = var11[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var8 = var1.bind(var2)(var7);
case 22:
            var2 = _closure1_slot3;
            var1 = {};
            var1['oldOrdering'] = var8;
            var7 = _closure1_slot4;
            var7 = var7.bind(var3)(var8, var10, var9);
            var1['newOrdering'] = var7;
            var1['idGetter'] = var6;
            var1['existingPositionGetter'] = var5;
            var1['ascending'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var10 = var9.bind(var1)(var6);
    var6 = var10.prototype;
    var9 = Object.create(var6, {constructor: {value: var10}});
    var14 = 'DragAndDropUtils';
    var15 = var9;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot2 = var6;
    var6 = {};
    var6['moveItemFromTo'] = var4;
    var6['calculatePositionDeltas'] = var5;
    var6['getPositionUpdates'] = var2;
    var7 = 2;
    var8 = var8[var7];
    var7 = require;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/DragAndDropUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['calculatePositionDeltas'] = var5;
    var3['moveItemFromTo'] = var4;
    var3['getPositionUpdates'] = var2;
    return var1;
})();