// app/utils/DragAndDropUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var5 = function calculatePositionDeltas(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.oldOrdering;
            var4 = var1.newOrdering;
            var13 = var1.idGetter;
            var12 = var1.existingPositionGetter;
            var2 = var1.ascending;
            var11 = undefined;
            if(!(var2 === var11)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var2 = true;
 41:
            var10 = var4.length;
            var1 = var5.length;
            if(!(var1 === var10)) { _fun0001_ip = 310; continue _fun0001 }
 58:
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
            if(!(var7 === var6)) { _fun0001_ip = 279; continue _fun0001 }
 129:
            var9 = {};
            var8 = 0;
            var3 = var8 < var10;
            var1 = 0;
            if(!var3) { _fun0001_ip = 171; continue _fun0001 }
 142:
            var3 = var5[var1];
            var14 = var13.bind(var11)(var3);
            var3 = var5[var1];
            var3 = var12.bind(var11)(var3);
            var9[var14] = var3;
            var1 = var1 + 1;
            if(var1 < var10) { _fun0001_ip = 142; continue _fun0001 }
 171:
            var1 = new Array(0);
            var14 = var8 < var10;
            var3 = 1;
            var8 = 0;
            if(!var14) { _fun0001_ip = 264; continue _fun0001 }
 187:
            var14 = var4[var8];
            var17 = var13.bind(var11)(var14);
            var16 = var8;
            if(var2) { _fun0001_ip = 210; continue _fun0001 }
 202:
            var14 = var10 - var3;
            var16 = var14 - var8;
 210:
            var14 = var9[var17];
            var14 = var14 === var16;
            if(!var14) { _fun0001_ip = 234; continue _fun0001 }
 221:
            var15 = var4[var8];
            var15 = var12.bind(var11)(var15);
            var14 = var15 === var16;
 234:
            if(var14) { _fun0001_ip = 257; continue _fun0001 }
 237:
            var15 = var1.push;
            var14 = {};
            var14['id'] = var17;
            var14['position'] = var16;
            var14 = var15.bind(var1)(var14);
 257:
            var8 = var8 + 1;
            if(var8 < var10) { _fun0001_ip = 187; continue _fun0001 }
 264:
            if(var2) { _fun0001_ip = 277; continue _fun0001 }
 267:
            var2 = var1.reverse;
            var2 = var2.bind(var1)();
 277:
            return var1;
 279:
            var3 = _closure1_slot2;
            var2 = var3.warn;
            var1 = 'Object IDs in the old ordering and the new ordering are not the same.';
            var1 = var2.bind(var3)(var1, var7, var6);
            var1 = new Array(0);
            return var1;
 310:
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
 0:
            var1 = arg1;
            var7 = var1.objectArray;
            var10 = var1.fromPosition;
            var9 = var1.toPosition;
            var6 = var1.idGetter;
            var5 = var1.existingPositionGetter;
            var4 = var1.ascending;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0002_ip = 53; continue _fun0002 }
 51:
            var4 = true;
 53:
            var1 = global;
            var2 = var1.Array;
            var1 = var2.isArray;
            var1 = var1.bind(var2)(var7);
            var8 = var7;
            if(var1) { _fun0002_ip = 110; continue _fun0002 }
 77:
            var2 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 1;
            var1 = var11[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var8 = var1.bind(var2)(var7);
 110:
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
    var7 = native2;
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