// app/modules/libdiscore/stores/DualReadUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function deepEqualImpl(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var3 = arg3;
            if(!(var4 !== var2)) { _fun0004_ip = 573; continue _fun0004 }
 16:
            var1 = arg4;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 22:
            var1 = undefined;
            if(!(var1 === var4)) { _fun0004_ip = 37; continue _fun0004 }
 28:
            var1 = null;
            if(!(var1 !== var2)) { _fun0004_ip = 569; continue _fun0004 }
 37:
            var5 = 'object';
            var1 = typeof var4;
            if(!(var5 === var1)) { _fun0004_ip = 565; continue _fun0004 }
 51:
            var1 = typeof var2;
            if(!(var5 === var1)) { _fun0004_ip = 565; continue _fun0004 }
 61:
            var1 = null;
            if(!(var1 !== var4)) { _fun0004_ip = 565; continue _fun0004 }
 70:
            if(!(var1 !== var2)) { _fun0004_ip = 565; continue _fun0004 }
 77:
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0004_ip = 549; continue _fun0004 }
 93:
            var1 = var3.set;
            var1 = var1.bind(var3)(var4, var2);
            var10 = global;
            var1 = var10.Date;
            var1 = var4 instanceof var1;
            if(!var1) { _fun0004_ip = 135; continue _fun0004 }
 119:
            var1 = var10.Date;
            var1 = var2 instanceof var1;
            if(var1) { _fun0004_ip = 523; continue _fun0004 }
 135:
            var1 = var10.Set;
            var1 = var4 instanceof var1;
            if(!var1) { _fun0004_ip = 164; continue _fun0004 }
 148:
            var1 = var10.Set;
            var1 = var2 instanceof var1;
            if(var1) { _fun0004_ip = 484; continue _fun0004 }
 164:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0004_ip = 205; continue _fun0004 }
 183:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0004_ip = 403; continue _fun0004 }
 205:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0004_ip = 399; continue _fun0004 }
 227:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0004_ip = 399; continue _fun0004 }
 249:
            var5 = var10.Object;
            var1 = var5.keys;
            var9 = var1.bind(var5)(var4);
            var5 = var10.Object;
            var1 = var5.keys;
            var1 = var1.bind(var5)(var2);
            var5 = var9.length;
            var1 = var1.length;
            if(!(var5 === var1)) { _fun0004_ip = 395; continue _fun0004 }
 295:
            var1 = var9.length;
            var8 = 0;
            var1 = var8 < var1;
            var5 = false;
            if(!var1) { _fun0004_ip = 391; continue _fun0004 }
 314:
            var1 = var9[var8];
            var11 = var10.Object;
            var11 = var11.prototype;
            var12 = var11.hasOwnProperty;
            var11 = var12.call;
            var11 = var11.bind(var12)(var2, var1);
            if(var11) { _fun0004_ip = 351; continue _fun0004 }
 349:
            return var5;
 351:
            var12 = _closure1_slot8;
            var16 = var4[var1];
            var15 = var2[var1];
            var17 = undefined;
            var14 = var3;
            var13 = false;
            var1 = var17[var12](var16, var15, var14, var13, var12);
            if(var1) { _fun0004_ip = 379; continue _fun0004 }
 377:
            return var5;
 379:
            var8 = var8 + 1;
            var1 = var9.length;
            if(var8 < var1) { _fun0004_ip = 314; continue _fun0004 }
 391:
            var1 = true;
            return var1;
 395:
            var1 = false;
            return var1;
 399:
            var1 = false;
            return var1;
 403:
            var5 = var4.length;
            var1 = var2.length;
            if(!(var5 === var1)) { _fun0004_ip = 480; continue _fun0004 }
 417:
            var1 = var4.length;
            var8 = 0;
            var1 = var8 < var1;
            var5 = false;
            if(!var1) { _fun0004_ip = 476; continue _fun0004 }
 436:
            var10 = _closure1_slot8;
            var16 = var4[var8];
            var15 = var2[var8];
            var17 = undefined;
            var14 = var3;
            var13 = false;
            var1 = var17[var10](var16, var15, var14, var13, var12);
            if(var1) { _fun0004_ip = 464; continue _fun0004 }
 462:
            return var5;
 464:
            var8 = var8 + 1;
            var1 = var4.length;
            if(var8 < var1) { _fun0004_ip = 436; continue _fun0004 }
 476:
            var1 = true;
            return var1;
 480:
            var1 = false;
            return var1;
 484:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 1;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var1 = var5.areSetsEqual;
            var1 = var1.bind(var5)(var4, var2);
            return var1;
 523:
            var1 = var4.getTime;
            var5 = var1.bind(var4)();
            var1 = var2.getTime;
            var1 = var1.bind(var2)();
            var1 = var5 === var1;
            return var1;
 549:
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var1 = var1 === var2;
            return var1;
 565:
            var1 = false;
            return var1;
 569:
            var1 = true;
            return var1;
 573:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function deepEqual(arg1, arg2) {
        var6 = _closure1_slot8;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var11 = var2;
        var1 = new var11[var1](var10);
        var8 = var1 instanceof Object ? var1 : var2;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var7 = true;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function doDualReadValidation(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var8 = arg1;
            var7 = arg2;
            var14 = arg3;
            var1 = var7.derived;
            var2 = var1.length;
            var1 = var14.derived;
            var1 = var1.length;
            if(!(var2 !== var1)) { _fun0005_ip = 89; continue _fun0005 }
 35:
            var2 = var8.push;
            var1 = {};
            var3 = 'length-mismatch';
            var1['type'] = var3;
            var3 = var7.derived;
            var3 = var3.length;
            var1['primaryLength'] = var3;
            var3 = var14.derived;
            var3 = var3.length;
            var1['shadowLength'] = var3;
            var1 = var2.bind(var8)(var1);
 89:
            var6 = global;
            var3 = var6.Object;
            var2 = var3.keys;
            var1 = var7.root;
            var13 = var2.bind(var3)(var1);
            var3 = var6.Object;
            var2 = var3.keys;
            var1 = var14.root;
            var5 = var2.bind(var3)(var1);
            var1 = var13.length;
            var4 = 0;
            var2 = var4 < var1;
            var1 = undefined;
            var11 = null;
            var10 = 'missing-record';
            var9 = 0;
            var3 = undefined;
            if(!var2) { _fun0005_ip = 295; continue _fun0005 }
 169:
            var17 = var13[var9];
            var2 = var6.Object;
            var2 = var2.prototype;
            var16 = var2.hasOwnProperty;
            var15 = var16.call;
            var2 = var14.root;
            var2 = var15.bind(var16)(var2, var17);
            if(var2) { _fun0005_ip = 232; continue _fun0005 }
 210:
            var15 = var8.push;
            var2 = {};
            var2['type'] = var10;
            var2['key'] = var17;
            var2 = var15.bind(var8)(var2);
            _fun0005_ip = 283; continue _fun0005;
 232:
            var16 = _closure1_slot11;
            var2 = var7.root;
            var15 = var2[var17];
            var2 = var14.root;
            var2 = var2[var17];
            var2 = var16.bind(var1)(var17, var15, var2);
            var3 = var2;
            if(!(var11 != var2)) { _fun0005_ip = 283; continue _fun0005 }
 270:
            var15 = var8.push;
            var15 = var15.bind(var8)(var2);
            var3 = var2;
 283:
            var9 = var9 + 1;
            var2 = var13.length;
            if(var9 < var2) { _fun0005_ip = 169; continue _fun0005 }
 295:
            var2 = var5.length;
            var2 = var4 < var2;
            var3 = 'extra-record';
            var4 = 0;
            if(!var2) { _fun0005_ip = 388; continue _fun0005 }
 315:
            var10 = var5[var4];
            var2 = var6.Object;
            var2 = var2.prototype;
            var11 = var2.hasOwnProperty;
            var9 = var11.call;
            var2 = var7.root;
            var2 = var9.bind(var11)(var2, var10);
            if(var2) { _fun0005_ip = 376; continue _fun0005 }
 356:
            var9 = var8.push;
            var2 = {};
            var2['type'] = var3;
            var2['key'] = var10;
            var2 = var9.bind(var8)(var2);
 376:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0005_ip = 315; continue _fun0005 }
 388:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function validateRecord(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg2;
            var3 = arg3;
            var2 = new Array(0);
            var14 = var4;
            var1 = undefined;
            var10 = 'value-mismatch';
            var8 = 'field-missing';
            var7 = global;
            var6 = undefined;
            var5 = undefined;
            for(var11 in var14)
 47:
            {
 59:
                var20 = var11;
                var16 = var7.Object;
                var16 = var16.prototype;
                var17 = var16.hasOwnProperty;
                var16 = var17.call;
                var16 = var16.bind(var17)(var4, var20);
                if(!var16) { _fun0006_ip = 47; continue _fun0006 }
 93:
                var17 = var4[var20];
                var16 = var7.Object;
                var16 = var16.prototype;
                var18 = var16.hasOwnProperty;
                var16 = var18.call;
                var16 = var16.bind(var18)(var3, var20);
                if(var16) { _fun0006_ip = 154; continue _fun0006 }
 128:
                var18 = var2.push;
                var16 = {};
                var16['type'] = var8;
                var16['field'] = var20;
                var16 = var18.bind(var2)(var16);
                var6 = var17;
                _fun0006_ip = 47; continue _fun0006;
 154:
                var16 = var3[var20];
                var18 = _closure1_slot9;
                var18 = var18.bind(var1)(var17, var16);
                var6 = var17;
                var5 = var16;
                if(var18) { _fun0006_ip = 47; continue _fun0006 }
 177:
                var19 = var2.push;
                var18 = {};
                var18['type'] = var10;
                var18['field'] = var20;
                var18['primaryValue'] = var17;
                var18['shadowValue'] = var16;
                var18 = var19.bind(var2)(var18);
                var6 = var17;
                var5 = var16;
                _fun0006_ip = 47; continue _fun0006;
            }
 219:
            var6 = var2.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0006_ip = 232; continue _fun0006 }
 230:
            return var1;
 232:
            var1 = {};
            var5 = 'record-mismatch';
            var1['type'] = var5;
            var5 = arg1;
            var1['key'] = var5;
            var1['primaryRecord'] = var4;
            var1['shadowRecord'] = var3;
            var1['mismatches'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function isPlainObject(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            var1 = var2 !== var1;
            if(var1) { _fun0007_ip = 23; continue _fun0007 }
 17:
            var2 = null;
            var1 = var2 === var3;
 23:
            if(var1) { _fun0007_ip = 44; continue _fun0007 }
 26:
            var2 = global;
            var4 = var2.Array;
            var2 = var4.isArray;
            var1 = var2.bind(var4)(var3);
 44:
            if(var1) { _fun0007_ip = 59; continue _fun0007 }
 47:
            var2 = global;
            var2 = var2.Date;
            var1 = var3 instanceof var2;
 59:
            if(var1) { _fun0007_ip = 74; continue _fun0007 }
 62:
            var2 = global;
            var2 = var2.Set;
            var1 = var3 instanceof var2;
 74:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = function logErrorsToAnalytics(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var1 = var9.length;
            var11 = 0;
            if(!(var11 !== var1)) { _fun0008_ip = 417; continue _fun0008 }
 20:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.last;
            var6 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var6)) { _fun0008_ip = 417; continue _fun0008 }
 64:
            var5 = _closure1_slot5;
            var3 = var5.get;
            var3 = var3.bind(var5)(var7);
            if(!(var2 == var3)) { _fun0008_ip = 187; continue _fun0008 }
 82:
            var5 = {};
            var5['mismatchesReported'] = var11;
            var8 = global;
            var10 = var8.Map;
            var12 = var10.prototype;
            var12 = Object.create(var12, {constructor: {value: var10}});
            var15 = var12;
            var10 = new var15[var10](var14);
            var10 = var10 instanceof Object ? var10 : var12;
            var5['mismatchesByLastAction'] = var10;
            var10 = var8.WeakSet;
            var12 = var10.prototype;
            var12 = Object.create(var12, {constructor: {value: var10}});
            var15 = var12;
            var10 = new var15[var10](var14);
            var10 = var10 instanceof Object ? var10 : var12;
            var5['visitedEntries'] = var10;
            var8 = var8.Set;
            var10 = var8.prototype;
            var10 = Object.create(var10, {constructor: {value: var8}});
            var15 = var10;
            var8 = new var15[var8](var14);
            var8 = var8 instanceof Object ? var8 : var10;
            var5['seenMismatches'] = var8;
            var3 = var5;
 187:
            var8 = _closure1_slot5;
            var5 = var8.set;
            var5 = var5.bind(var8)(var7, var3);
            var8 = var3.mismatchesReported;
            var5 = 15;
            if(!(!(var8 >= var5))) { _fun0008_ip = 417; continue _fun0008 }
 218:
            var8 = var3.mismatchesByLastAction;
            var5 = var8.get;
            var5 = var5.bind(var8)(var6);
            var8 = var2 != var5;
            var11 = 0;
            if(!var8) { _fun0008_ip = 246; continue _fun0008 }
 243:
            var11 = var5;
 246:
            var8 = 3;
            if(!(!(var11 >= var8))) { _fun0008_ip = 417; continue _fun0008 }
 256:
            var5 = function generateErrorReport(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var24 = arg1;
                    var _closure3_slot0 = var24;
                    var23 = function appendMismatch(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = 0;
                            var16 = 0;
                            var7 = copyRestArgs(var16);
                            var1 = var7.length;
                            var1 = var2 < var1;
                            var5 = global;
                            var4 = '';
                            var3 = ':';
                            if(!var1) { _fun0010_ip = 154; continue _fun0010 }
 33:
                            var9 = var7[var2];
                            var16 = var9.fieldName;
                            var14 = var9.primaryType;
                            var12 = var9.shadowType;
                            var1 = var5.HermesInternal;
                            var1 = var1.concat;
                            var17 = var4;
                            var15 = var3;
                            var13 = var3;
                            var10 = var17[var1](var16, var15, var14, var13, var12, var11);
                            var1 = _closure3_slot0;
                            var8 = var1.seenMismatches;
                            var1 = var8.has;
                            var1 = var1.bind(var8)(var10);
                            if(var1) { _fun0010_ip = 142; continue _fun0010 }
 102:
                            var1 = _closure3_slot0;
                            var8 = var1.seenMismatches;
                            var1 = var8.add;
                            var1 = var1.bind(var8)(var10);
                            var1 = _closure3_slot1;
                            var8 = var1.mismatchedFields;
                            var1 = var8.push;
                            var1 = var1.bind(var8)(var9);
 142:
                            var2 = var2 + 1;
                            var1 = var7.length;
                            if(var2 < var1) { _fun0010_ip = 33; continue _fun0010 }
 154:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var23;
                    var22 = function appendDeepMismatches(arg1, arg2, arg3) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var17 = arg1;
                            var16 = arg2;
                            var15 = arg3;
                            var14 = arguments[3];
                            var1 = undefined;
                            if(!(var14 === var1)) { _fun0011_ip = 46; continue _fun0011 }
 18:
                            var2 = global;
                            var2 = var2.Set;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var28 = var3;
                            var2 = new var28[var2](var27);
                            var14 = var2 instanceof Object ? var2 : var3;
 46:
                            var13 = global;
                            var3 = var13.Object;
                            var2 = var3.keys;
                            var12 = var2.bind(var3)(var16);
                            var2 = var12.length;
                            var11 = 0;
                            var2 = var11 < var2;
                            var9 = null;
                            var7 = 'object';
                            var6 = 'missing';
                            var5 = '';
                            var4 = '.';
                            var3 = undefined;
                            if(!var2) { _fun0011_ip = 414; continue _fun0011 }
 107:
                            var2 = var12[var11];
                            var18 = var13.HermesInternal;
                            var18 = var18.concat;
                            var20 = var18.bind(var5)(var17, var4, var2);
                            var19 = var16[var2];
                            var18 = var13.Object;
                            var18 = var18.prototype;
                            var21 = var18.hasOwnProperty;
                            var18 = var21.call;
                            var18 = var18.bind(var21)(var15, var2);
                            if(var18) { _fun0011_ip = 204; continue _fun0011 }
 164:
                            var21 = _closure3_slot2;
                            var18 = {};
                            var18['fieldName'] = var20;
                            var22 = _closure1_slot14;
                            var22 = var22.bind(var1)(var19);
                            var18['primaryType'] = var22;
                            var18['shadowType'] = var6;
                            var18 = var21.bind(var1)(var18);
                            _fun0011_ip = 399; continue _fun0011;
 204:
                            var2 = var15[var2];
                            var3 = var2;
                            if(!(var19 !== var2)) { _fun0011_ip = 399; continue _fun0011 }
 218:
                            var18 = typeof var19;
                            if(!(var7 === var18)) { _fun0011_ip = 232; continue _fun0011 }
 225:
                            var18 = typeof var2;
                            if(!(var7 !== var18)) { _fun0011_ip = 277; continue _fun0011 }
 232:
                            var21 = _closure3_slot2;
                            var18 = {};
                            var18['fieldName'] = var20;
                            var22 = _closure1_slot14;
                            var23 = var22.bind(var1)(var19);
                            var18['primaryType'] = var23;
                            var22 = var22.bind(var1)(var2);
                            var18['shadowType'] = var22;
                            var18 = var21.bind(var1)(var18);
                            var3 = var2;
                            _fun0011_ip = 399; continue _fun0011;
 277:
                            var21 = var13.Array;
                            var18 = var21.isArray;
                            var18 = var18.bind(var21)(var19);
                            if(!var18) { _fun0011_ip = 315; continue _fun0011 }
 296:
                            var21 = var13.Array;
                            var18 = var21.isArray;
                            var18 = var18.bind(var21)(var2);
                            if(var18) { _fun0011_ip = 385; continue _fun0011 }
 315:
                            var18 = var9 != var19;
                            if(!var18) { _fun0011_ip = 326; continue _fun0011 }
 322:
                            var18 = var9 != var2;
 326:
                            var3 = var2;
                            if(!var18) { _fun0011_ip = 399; continue _fun0011 }
 332:
                            var18 = var14.has;
                            var18 = var18.bind(var14)(var19);
                            var3 = var2;
                            if(var18) { _fun0011_ip = 399; continue _fun0011 }
 348:
                            var18 = var14.add;
                            var18 = var18.bind(var14)(var19);
                            var18 = _closure3_slot3;
                            var28 = undefined;
                            var27 = var20;
                            var26 = var19;
                            var25 = var2;
                            var24 = var14;
                            var18 = var28[var18](var27, var26, var25, var24, var23);
                            var3 = var2;
                            _fun0011_ip = 399; continue _fun0011;
 385:
                            var18 = _closure3_slot4;
                            var18 = var18.bind(var1)(var20, var19, var2);
                            var3 = var2;
 399:
                            var11 = var11 + 1;
                            var2 = var12.length;
                            if(var11 < var2) { _fun0011_ip = 107; continue _fun0011 }
 414:
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var22;
                    var21 = function appendArrayMismatches(arg1, arg2, arg3) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var5 = arg2;
                            var4 = arg3;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.areArraysShallowEqual;
                            var2 = var2.bind(var3)(var5, var4);
                            if(var2) { _fun0012_ip = 101; continue _fun0012 }
 46:
                            var3 = _closure3_slot2;
                            var2 = {'fieldName': null, 'primaryType': 'array', 'shadowType': 'array'};
                            var6 = arg1;
                            var2['fieldName'] = var6;
                            var5 = var5.length;
                            var2['primaryArrayLength'] = var5;
                            var4 = var4.length;
                            var2['secondaryArrayLength'] = var4;
                            var2 = var3.bind(var1)(var2);
 101:
                            return var1;
                        }
                    };
                    var _closure3_slot4 = var21;
                    var2 = {'numExtraKeys': 0, 'numMissingKeys': 0};
                    var4 = 0;
                    var3 = new Array(0);
                    var2['mismatchedFields'] = var3;
                    var _closure3_slot1 = var2;
                    var3 = _closure1_slot6;
                    var19 = undefined;
                    var1 = arg2;
                    var18 = var3.bind(var19)(var1);
                    var5 = var18.bind(var19)();
                    var3 = var5.done;
                    var17 = 'missing';
                    var16 = global;
                    var15 = 'object';
                    var1 = null;
                    var14 = 'value-mismatch';
                    var13 = 'field-missing';
                    var12 = 'record-mismatch';
                    var11 = 'missing-record';
                    var10 = 'extra-record';
                    var9 = var5;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0009_ip = 706; continue _fun0009 }
 150:
                    var31 = var9.value;
                    var3 = var31.type;
                    if(!(var10 !== var3)) { _fun0009_ip = 649; continue _fun0009 }
 167:
                    if(!(var11 !== var3)) { _fun0009_ip = 620; continue _fun0009 }
 174:
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    if(!(var12 === var3)) { _fun0009_ip = 676; continue _fun0009 }
 193:
                    var30 = var24.visitedEntries;
                    var29 = var30.has;
                    var3 = var31.primaryRecord;
                    var3 = var29.bind(var30)(var3);
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    if(var3) { _fun0009_ip = 676; continue _fun0009 }
 233:
                    var30 = var24.visitedEntries;
                    var29 = var30.add;
                    var3 = var31.primaryRecord;
                    var3 = var29.bind(var30)(var3);
                    var29 = _closure1_slot6;
                    var3 = var31.mismatches;
                    var30 = var29.bind(var19)(var3);
                    var32 = var30.bind(var19)();
                    var3 = var32.done;
                    var29 = var32;
                    var28 = var29;
                    var27 = var30;
                    var26 = var6;
                    var25 = var5;
                    if(var3) { _fun0009_ip = 676; continue _fun0009 }
 300:
                    var33 = var29.value;
                    var32 = var33.field;
                    var3 = var32.toString;
                    var32 = var3.bind(var32)();
                    var3 = var33.type;
                    if(!(var13 !== var3)) { _fun0009_ip = 530; continue _fun0009 }
 332:
                    if(!(var14 === var3)) { _fun0009_ip = 588; continue _fun0009 }
 339:
                    var3 = var33.primaryValue;
                    if(!(var1 !== var3)) { _fun0009_ip = 385; continue _fun0009 }
 349:
                    var3 = var33.shadowValue;
                    if(!(var1 !== var3)) { _fun0009_ip = 385; continue _fun0009 }
 359:
                    var3 = var33.primaryValue;
                    var3 = typeof var3;
                    if(!(var15 === var3)) { _fun0009_ip = 385; continue _fun0009 }
 372:
                    var3 = var33.shadowValue;
                    var3 = typeof var3;
                    if(!(var15 !== var3)) { _fun0009_ip = 438; continue _fun0009 }
 385:
                    var3 = {};
                    var3['fieldName'] = var32;
                    var35 = _closure1_slot14;
                    var34 = var33.primaryValue;
                    var34 = var35.bind(var19)(var34);
                    var3['primaryType'] = var34;
                    var34 = var33.shadowValue;
                    var34 = var35.bind(var19)(var34);
                    var3['shadowType'] = var34;
                    var3 = var23.bind(var19)(var3);
                    _fun0009_ip = 588; continue _fun0009;
 438:
                    var35 = var16.Array;
                    var34 = var35.isArray;
                    var3 = var33.primaryValue;
                    var3 = var34.bind(var35)(var3);
                    if(!var3) { _fun0009_ip = 488; continue _fun0009 }
 463:
                    var35 = var16.Array;
                    var34 = var35.isArray;
                    var3 = var33.shadowValue;
                    var3 = var34.bind(var35)(var3);
                    if(var3) { _fun0009_ip = 509; continue _fun0009 }
 488:
                    var34 = var33.primaryValue;
                    var3 = var33.shadowValue;
                    var3 = var22.bind(var19)(var32, var34, var3);
                    _fun0009_ip = 588; continue _fun0009;
 509:
                    var34 = var33.primaryValue;
                    var3 = var33.shadowValue;
                    var3 = var21.bind(var19)(var32, var34, var3);
                    _fun0009_ip = 588; continue _fun0009;
 530:
                    var35 = var2.mismatchedFields;
                    var34 = var35.push;
                    var3 = {};
                    var3['fieldName'] = var32;
                    var37 = _closure1_slot14;
                    var38 = var31.primaryRecord;
                    var36 = var33.field;
                    var36 = var38[var36];
                    var36 = var37.bind(var19)(var36);
                    var3['primaryType'] = var36;
                    var3['shadowType'] = var17;
                    var3 = var34.bind(var35)(var3);
 588:
                    var34 = var30.bind(var19)();
                    var3 = var34.done;
                    var29 = var34;
                    var28 = var29;
                    var27 = var30;
                    var26 = var33;
                    var25 = var32;
                    if(var3) { _fun0009_ip = 676; continue _fun0009 }
 615:
                    _fun0009_ip = 300; continue _fun0009;
 620:
                    var3 = var2.numMissingKeys;
                    var3 = var3 + 1;
                    var2['numMissingKeys'] = var3;
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    _fun0009_ip = 676; continue _fun0009;
 649:
                    var3 = var2.numExtraKeys;
                    var3 = var3 + 1;
                    var2['numExtraKeys'] = var3;
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
 676:
                    var29 = var18.bind(var19)();
                    var3 = var29.done;
                    var8 = var28;
                    var7 = var27;
                    var6 = var26;
                    var5 = var25;
                    var9 = var29;
                    if(!var3) { _fun0009_ip = 150; continue _fun0009 }
 706:
                    var3 = var2.mismatchedFields;
                    var5 = var3.length;
                    var3 = var2.numExtraKeys;
                    var5 = var5 + var3;
                    var3 = var2.numMissingKeys;
                    var3 = var5 + var3;
                    if(!(var3 !== var4)) { _fun0009_ip = 743; continue _fun0009 }
 741:
                    return var2;
 743:
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var3, var9);
            if(!(var2 != var5)) { _fun0008_ip = 417; continue _fun0008 }
 276:
            var10 = var3.mismatchesByLastAction;
            var9 = var10.set;
            var2 = 1;
            var2 = var11 + var2;
            var2 = var9.bind(var10)(var6, var2);
            var2 = var3.mismatchesReported;
            var2 = var2 + 1;
            var3['mismatchesReported'] = var2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var8];
            var4 = var3.bind(var4)(var2);
            var3 = var4.track;
            var1 = _closure1_slot4;
            var2 = var1.LIBDISCORE_KV_DUAL_READ_ERROR;
            var1 = {};
            var1['store_name'] = var7;
            var1['action_type'] = var6;
            var6 = var5.numMissingKeys;
            var1['num_missing_keys'] = var6;
            var6 = var5.numExtraKeys;
            var1['num_extra_keys'] = var6;
            var6 = global;
            var7 = var6.JSON;
            var6 = var7.stringify;
            var5 = var5.mismatchedFields;
            var5 = var6.bind(var7)(var5);
            var1['mismatched_fields'] = var5;
            var1 = var3.bind(var4)(var2, var1);
 417:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = function getType(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var6 = arg1;
            var1 = 'null';
            var2 = null;
            if(!(var2 !== var6)) { _fun0013_ip = 55; continue _fun0013 }
 13:
            var2 = typeof var6;
            var3 = 'object';
            if(!(var3 === var2)) { _fun0013_ip = 52; continue _fun0013 }
 24:
            var4 = global;
            var5 = var4.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0013_ip = 49; continue _fun0013 }
 45:
            var3 = 'array';
 49:
            var2 = var3;
 52:
            var1 = var2;
 55:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var9);
    var9 = var9.AnalyticEvents;
    var _closure1_slot4 = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var15 = var9;
    var6 = new var15[var6](var14);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot5 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/libdiscore/stores/DualReadUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function runDualReadValidation(arg1, arg2, arg3) {
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var5 = arg3;
        var1 = undefined;
        var3 = function(arg1, arg2) {
            var5 = _closure1_slot10;
            var4 = _closure2_slot0;
            var1 = undefined;
            var3 = arg1;
            var2 = arg2;
            var2 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var3 = var5.bind(var1)(var3);
        var2 = function logErrors(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var5 = arg3;
                var2 = var5.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0014_ip = 61; continue _fun0014 }
 16:
                var2 = new Array(0);
                var _closure3_slot0 = var2;
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = arg1;
                        var3 = var1.type;
                        var2 = 'length-mismatch';
                        if(!(var2 !== var3)) { _fun0015_ip = 119; continue _fun0015 }
 18:
                        var2 = 'missing-record';
                        if(!(var2 !== var3)) { _fun0015_ip = 97; continue _fun0015 }
 28:
                        var2 = 'extra-record';
                        if(!(var2 !== var3)) { _fun0015_ip = 73; continue _fun0015 }
 38:
                        var2 = 'record-mismatch';
                        if(!(var2 === var3)) { _fun0015_ip = 119; continue _fun0015 }
 48:
                        var4 = var1.mismatches;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = 'field-missing';
                                if(!(var2 !== var3)) { _fun0016_ip = 45; continue _fun0016 }
 18:
                                var4 = var1.primaryValue;
                                var3 = var1.shadowValue;
                                var2 = function logDiff(arg1, arg2) {
                                    var4 = function impl(arg1, arg2) {
                                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                            var4 = arg1;
                                            var8 = arg2;
                                            var _closure7_slot0 = var4;
                                            var _closure7_slot1 = var8;
                                            var3 = _closure1_slot9;
                                            var1 = undefined;
                                            var3 = var3.bind(var1)(var4, var8);
                                            if(var3) { _fun0017_ip = 715; continue _fun0017 }
 37:
                                            var6 = 'object';
                                            var3 = typeof var4;
                                            if(!(var6 === var3)) { _fun0017_ip = 103; continue _fun0017 }
 48:
                                            var3 = null;
                                            if(!(var3 !== var4)) { _fun0017_ip = 103; continue _fun0017 }
 54:
                                            var5 = typeof var8;
                                            if(!(var6 === var5)) { _fun0017_ip = 103; continue _fun0017 }
 61:
                                            if(!(var3 !== var8)) { _fun0017_ip = 103; continue _fun0017 }
 65:
                                            var6 = _closure6_slot0;
                                            var5 = var6.has;
                                            var5 = var5.bind(var6)(var4);
                                            var3 = _closure6_slot0;
                                            if(var5) { _fun0017_ip = 701; continue _fun0017 }
 92:
                                            var5 = var3.set;
                                            var5 = var5.bind(var3)(var4, var8);
 103:
                                            var5 = global;
                                            var6 = var5.Date;
                                            var6 = var4 instanceof var6;
                                            if(!var6) { _fun0017_ip = 134; continue _fun0017 }
 118:
                                            var6 = var5.Date;
                                            var6 = var8 instanceof var6;
                                            if(var6) { _fun0017_ip = 715; continue _fun0017 }
 134:
                                            var6 = var5.Set;
                                            var6 = var4 instanceof var6;
                                            if(!var6) { _fun0017_ip = 163; continue _fun0017 }
 147:
                                            var6 = var5.Set;
                                            var6 = var8 instanceof var6;
                                            if(var6) { _fun0017_ip = 627; continue _fun0017 }
 163:
                                            var7 = var5.Array;
                                            var6 = var7.isArray;
                                            var6 = var6.bind(var7)(var4);
                                            if(!var6) { _fun0017_ip = 204; continue _fun0017 }
 182:
                                            var7 = var5.Array;
                                            var6 = var7.isArray;
                                            var6 = var6.bind(var7)(var8);
                                            if(var6) { _fun0017_ip = 516; continue _fun0017 }
 204:
                                            var6 = _closure1_slot12;
                                            var6 = var6.bind(var1)(var4);
                                            if(!var6) { _fun0017_ip = 715; continue _fun0017 }
 219:
                                            var6 = _closure1_slot12;
                                            var6 = var6.bind(var1)(var8);
                                            if(!var6) { _fun0017_ip = 715; continue _fun0017 }
 234:
                                            var10 = var5.Set;
                                            var7 = var5.Object;
                                            var6 = var7.keys;
                                            var19 = var6.bind(var7)(var4);
                                            var7 = var10.prototype;
                                            var7 = Object.create(var7, {constructor: {value: var10}});
                                            var20 = var7;
                                            var6 = new var20[var10](var19, var18);
                                            var13 = var6 instanceof Object ? var6 : var7;
                                            var10 = var5.Set;
                                            var7 = var5.Object;
                                            var6 = var7.keys;
                                            var19 = var6.bind(var7)(var8);
                                            var7 = var10.prototype;
                                            var7 = Object.create(var7, {constructor: {value: var10}});
                                            var20 = var7;
                                            var6 = new var20[var10](var19, var18);
                                            var12 = var6 instanceof Object ? var6 : var7;
                                            var10 = var5.Set;
                                            var6 = new Array(0);
                                            var17 = 0;
                                            var19 = var6;
                                            var18 = var13;
                                            var17 = arraySpread(var19, var18, var17);
                                            var19 = var6;
                                            var18 = var12;
                                            var7 = arraySpread(var19, var18, var17);
                                            var7 = var10.prototype;
                                            var7 = Object.create(var7, {constructor: {value: var10}});
                                            var20 = var7;
                                            var19 = var6;
                                            var6 = new var20[var10](var19, var18);
                                            var11 = var6 instanceof Object ? var6 : var7;
                                            var7 = _closure1_slot6;
                                            var10 = var5.Array;
                                            var6 = var10.from;
                                            var10 = var6.bind(var10)(var11);
                                            var6 = var10.sort;
                                            var6 = var6.bind(var10)();
                                            var11 = var7.bind(var1)(var6);
                                            var7 = var11.bind(var1)();
                                            var6 = var7.done;
                                            if(var6) { _fun0017_ip = 715; continue _fun0017 }
 426:
                                            var6 = var7.value;
                                            var14 = var13.has;
                                            var14 = var14.bind(var13)(var6);
                                            if(!var14) { _fun0017_ip = 454; continue _fun0017 }
 444:
                                            var15 = var12.has;
                                            var14 = var15.bind(var12)(var6);
 454:
                                            if(!var14) { _fun0017_ip = 496; continue _fun0017 }
 457:
                                            var16 = _closure1_slot9;
                                            var15 = var4[var6];
                                            var14 = var8[var6];
                                            var14 = var16.bind(var1)(var15, var14);
                                            if(var14) { _fun0017_ip = 496; continue _fun0017 }
 478:
                                            var15 = _closure6_slot1;
                                            var14 = var4[var6];
                                            var6 = var8[var6];
                                            var6 = var15.bind(var1)(var14, var6);
 496:
                                            var14 = var11.bind(var1)();
                                            var6 = var14.done;
                                            var7 = var14;
                                            if(var6) { _fun0017_ip = 715; continue _fun0017 }
 514:
                                            _fun0017_ip = 426; continue _fun0017;
 516:
                                            var10 = var5.Math;
                                            var7 = var10.min;
                                            var6 = var4.length;
                                            var5 = var8.length;
                                            var7 = var7.bind(var10)(var6, var5);
                                            var6 = 0;
                                            var10 = var6 < var7;
                                            if(!var10) { _fun0017_ip = 601; continue _fun0017 }
 555:
                                            var12 = _closure1_slot9;
                                            var11 = var4[var6];
                                            var10 = var8[var6];
                                            var10 = var12.bind(var1)(var11, var10);
                                            if(var10) { _fun0017_ip = 594; continue _fun0017 }
 576:
                                            var12 = _closure6_slot1;
                                            var11 = var4[var6];
                                            var10 = var8[var6];
                                            var10 = var12.bind(var1)(var11, var10);
 594:
                                            var6 = var6 + 1;
                                            if(var6 < var7) { _fun0017_ip = 555; continue _fun0017 }
 601:
                                            var6 = var4.length;
                                            var5 = var8.length;
                                            if(!(!(var6 > var5))) { _fun0017_ip = 715; continue _fun0017 }
 615:
                                            var5 = var8.length;
                                            var5 = var4.length;
                                            _fun0017_ip = 715; continue _fun0017;
 627:
                                            var9 = new Array(0);
                                            var19 = var9;
                                            var18 = var4;
                                            var17 = 0;
                                            var5 = arraySpread(var19, var18, var17);
                                            var7 = var9.filter;
                                            var5 = function(arg1) {
                                                var3 = _closure7_slot1;
                                                var2 = var3.has;
                                                var1 = arg1;
                                                var1 = var2.bind(var3)(var1);
                                                var1 = !var1;
                                                return var1;
                                            };
                                            var5 = var7.bind(var9)(var5);
                                            var7 = new Array(0);
                                            var19 = var7;
                                            var18 = var8;
                                            var6 = arraySpread(var19, var18, var17);
                                            var6 = var7.filter;
                                            var2 = function(arg1) {
                                                var3 = _closure7_slot0;
                                                var2 = var3.has;
                                                var1 = arg1;
                                                var1 = var2.bind(var3)(var1);
                                                var1 = !var1;
                                                return var1;
                                            };
                                            var2 = var6.bind(var7)(var2);
                                            var5 = var5.length;
                                            var2 = var2.length;
                                            var2 = undefined;
                                            return var2;
 701:
                                            var2 = var3.get;
                                            var2 = var2.bind(var3)(var4);
                                            var2 = undefined;
                                            return var2;
 715:
                                            return var1;
                                        }
                                    };
                                    var _closure6_slot1 = var4;
                                    var1 = global;
                                    var1 = var1.Map;
                                    var3 = var1.prototype;
                                    var3 = Object.create(var3, {constructor: {value: var1}});
                                    var7 = var3;
                                    var1 = new var7[var1](var6);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    var _closure6_slot0 = var1;
                                    var1 = undefined;
                                    var3 = arg1;
                                    var2 = arg2;
                                    var2 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                var1 = undefined;
                                var1 = var2.bind(var1)(var4, var3);
 45:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        _fun0015_ip = 119; continue _fun0015;
 73:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var2 = var1.key;
                        var2 = var3.bind(var4)(var2);
                        _fun0015_ip = 119; continue _fun0015;
 97:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = var1.key;
                        var1 = var2.bind(var3)(var1);
 119:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2 = var2.length;
                var1 = var1.length;
                var1 = undefined;
                return var1;
 61:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var2.bind(var1)(var1, var1, var4);
        var3 = _closure1_slot13;
        var2 = arg1;
        var2 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var3['runDualReadValidation'] = var5;
    var3['doDualReadValidation'] = var4;
    var3['logErrorsToAnalytics'] = var2;
    return var1;
})();