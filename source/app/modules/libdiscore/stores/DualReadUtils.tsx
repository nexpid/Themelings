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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function deepEqualImpl(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = arg3;
            if(!(var4 !== var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var1 = arg4;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var1 = undefined;
            if(!(var1 === var4)) { _fun0004_ip = 38; continue _fun0004 }
case 34:
            var1 = null;
            if(!(var1 !== var2)) { _fun0004_ip = 40; continue _fun0004 }
case 38:
            var5 = 'object';
            var1 = typeof var4;
            if(!(var5 === var1)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = typeof var2;
            if(!(var5 === var1)) { _fun0004_ip = 41; continue _fun0004 }
case 7:
            var1 = null;
            if(!(var1 !== var4)) { _fun0004_ip = 41; continue _fun0004 }
case 35:
            if(!(var1 !== var2)) { _fun0004_ip = 41; continue _fun0004 }
case 43:
            var1 = var3.has;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = var3.set;
            var1 = var1.bind(var3)(var4, var2);
            var10 = global;
            var1 = var10.Date;
            var1 = var4 instanceof var1;
            if(!var1) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var1 = var10.Date;
            var1 = var2 instanceof var1;
            if(var1) { _fun0004_ip = 48; continue _fun0004 }
case 46:
            var1 = var10.Set;
            var1 = var4 instanceof var1;
            if(!var1) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var1 = var10.Set;
            var1 = var2 instanceof var1;
            if(var1) { _fun0004_ip = 51; continue _fun0004 }
case 49:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var4);
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 52:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0004_ip = 53; continue _fun0004 }
case 22:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var4);
            if(var1) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var5 = var10.Array;
            var1 = var5.isArray;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0004_ip = 54; continue _fun0004 }
case 18:
            var5 = var10.Object;
            var1 = var5.keys;
            var9 = var1.bind(var5)(var4);
            var5 = var10.Object;
            var1 = var5.keys;
            var1 = var1.bind(var5)(var2);
            var5 = var9.length;
            var1 = var1.length;
            if(!(var5 === var1)) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var1 = var9.length;
            var8 = 0;
            var1 = var8 < var1;
            var5 = false;
            if(!var1) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var1 = var9[var8];
            var11 = var10.Object;
            var11 = var11.prototype;
            var12 = var11.hasOwnProperty;
            var11 = var12.call;
            var11 = var11.bind(var12)(var2, var1);
            if(var11) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            return var5;
case 60:
            var12 = _closure1_slot8;
            var16 = var4[var1];
            var15 = var2[var1];
            var17 = undefined;
            var14 = var3;
            var13 = false;
            var1 = var17[var12](var16, var15, var14, var13, var12);
            if(var1) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            return var5;
case 62:
            var8 = var8 + 1;
            var1 = var9.length;
            if(var8 < var1) { _fun0004_ip = 59; continue _fun0004 }
case 58:
            var1 = true;
            return var1;
case 56:
            var1 = false;
            return var1;
case 54:
            var1 = false;
            return var1;
case 53:
            var5 = var4.length;
            var1 = var2.length;
            if(!(var5 === var1)) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var1 = var4.length;
            var8 = 0;
            var1 = var8 < var1;
            var5 = false;
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var10 = _closure1_slot8;
            var16 = var4[var8];
            var15 = var2[var8];
            var17 = undefined;
            var14 = var3;
            var13 = false;
            var1 = var17[var10](var16, var15, var14, var13, var12);
            if(var1) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            return var5;
case 68:
            var8 = var8 + 1;
            var1 = var4.length;
            if(var8 < var1) { _fun0004_ip = 67; continue _fun0004 }
case 66:
            var1 = true;
            return var1;
case 64:
            var1 = false;
            return var1;
case 51:
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 1;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var1 = var5.areSetsEqual;
            var1 = var1.bind(var5)(var4, var2);
            return var1;
case 48:
            var1 = var4.getTime;
            var5 = var1.bind(var4)();
            var1 = var2.getTime;
            var1 = var1.bind(var2)();
            var1 = var5 === var1;
            return var1;
case 44:
            var1 = var3.get;
            var1 = var1.bind(var3)(var4);
            var1 = var1 === var2;
            return var1;
case 41:
            var1 = false;
            return var1;
case 40:
            var1 = true;
            return var1;
case 36:
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
case 0:
            var8 = arg1;
            var7 = arg2;
            var14 = arg3;
            var1 = var7.derived;
            var2 = var1.length;
            var1 = var14.derived;
            var1 = var1.length;
            if(!(var2 !== var1)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
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
case 70:
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
            if(!var2) { _fun0005_ip = 57; continue _fun0005 }
case 17:
            var17 = var13[var9];
            var2 = var6.Object;
            var2 = var2.prototype;
            var16 = var2.hasOwnProperty;
            var15 = var16.call;
            var2 = var14.root;
            var2 = var15.bind(var16)(var2, var17);
            if(var2) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var15 = var8.push;
            var2 = {};
            var2['type'] = var10;
            var2['key'] = var17;
            var2 = var15.bind(var8)(var2);
            _fun0005_ip = 10; continue _fun0005;
case 72:
            var16 = _closure1_slot11;
            var2 = var7.root;
            var15 = var2[var17];
            var2 = var14.root;
            var2 = var2[var17];
            var2 = var16.bind(var1)(var17, var15, var2);
            var3 = var2;
            if(!(var11 != var2)) { _fun0005_ip = 10; continue _fun0005 }
case 12:
            var15 = var8.push;
            var15 = var15.bind(var8)(var2);
            var3 = var2;
case 10:
            var9 = var9 + 1;
            var2 = var13.length;
            if(var9 < var2) { _fun0005_ip = 17; continue _fun0005 }
case 57:
            var2 = var5.length;
            var2 = var4 < var2;
            var3 = 'extra-record';
            var4 = 0;
            if(!var2) { _fun0005_ip = 74; continue _fun0005 }
case 75:
            var10 = var5[var4];
            var2 = var6.Object;
            var2 = var2.prototype;
            var11 = var2.hasOwnProperty;
            var9 = var11.call;
            var2 = var7.root;
            var2 = var9.bind(var11)(var2, var10);
            if(var2) { _fun0005_ip = 76; continue _fun0005 }
case 77:
            var9 = var8.push;
            var2 = {};
            var2['type'] = var3;
            var2['key'] = var10;
            var2 = var9.bind(var8)(var2);
case 76:
            var4 = var4 + 1;
            var2 = var5.length;
            if(var4 < var2) { _fun0005_ip = 75; continue _fun0005 }
case 74:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = function validateRecord(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
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
case 78:
            {
case 79:
                var20 = var11;
                var16 = var7.Object;
                var16 = var16.prototype;
                var17 = var16.hasOwnProperty;
                var16 = var17.call;
                var16 = var16.bind(var17)(var4, var20);
                if(!var16) { _fun0006_ip = 78; continue _fun0006 }
case 45:
                var17 = var4[var20];
                var16 = var7.Object;
                var16 = var16.prototype;
                var18 = var16.hasOwnProperty;
                var16 = var18.call;
                var16 = var16.bind(var18)(var3, var20);
                if(var16) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                var18 = var2.push;
                var16 = {};
                var16['type'] = var8;
                var16['field'] = var20;
                var16 = var18.bind(var2)(var16);
                var6 = var17;
                _fun0006_ip = 78; continue _fun0006;
case 80:
                var16 = var3[var20];
                var18 = _closure1_slot9;
                var18 = var18.bind(var1)(var17, var16);
                var6 = var17;
                var5 = var16;
                if(var18) { _fun0006_ip = 78; continue _fun0006 }
case 82:
                var19 = var2.push;
                var18 = {};
                var18['type'] = var10;
                var18['field'] = var20;
                var18['primaryValue'] = var17;
                var18['shadowValue'] = var16;
                var18 = var19.bind(var2)(var18);
                var6 = var17;
                var5 = var16;
                _fun0006_ip = 78; continue _fun0006;
            }
case 83:
            var6 = var2.length;
            var5 = 0;
            if(!(!(var6 > var5))) { _fun0006_ip = 72; continue _fun0006 }
case 84:
            return var1;
case 72:
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
case 0:
            var3 = arg1;
            var2 = 'object';
            var1 = typeof var3;
            var1 = var2 !== var1;
            if(var1) { _fun0007_ip = 31; continue _fun0007 }
case 85:
            var2 = null;
            var1 = var2 === var3;
case 31:
            if(var1) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var2 = global;
            var4 = var2.Array;
            var2 = var4.isArray;
            var1 = var2.bind(var4)(var3);
case 86:
            if(var1) { _fun0007_ip = 79; continue _fun0007 }
case 78:
            var2 = global;
            var2 = var2.Date;
            var1 = var3 instanceof var2;
case 79:
            if(var1) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var2 = global;
            var2 = var2.Set;
            var1 = var3 instanceof var2;
case 88:
            var1 = !var1;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var2 = function logErrorsToAnalytics(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var9 = arg2;
            var1 = var9.length;
            var11 = 0;
            if(!(var11 !== var1)) { _fun0008_ip = 65; continue _fun0008 }
case 29:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.last;
            var6 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var6)) { _fun0008_ip = 65; continue _fun0008 }
case 90:
            var5 = _closure1_slot5;
            var3 = var5.get;
            var3 = var3.bind(var5)(var7);
            if(!(var2 == var3)) { _fun0008_ip = 19; continue _fun0008 }
case 91:
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
case 19:
            var8 = _closure1_slot5;
            var5 = var8.set;
            var5 = var5.bind(var8)(var7, var3);
            var8 = var3.mismatchesReported;
            var5 = 15;
            if(!(!(var8 >= var5))) { _fun0008_ip = 65; continue _fun0008 }
case 92:
            var8 = var3.mismatchesByLastAction;
            var5 = var8.get;
            var5 = var5.bind(var8)(var6);
            var8 = var2 != var5;
            var11 = 0;
            if(!var8) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var11 = var5;
case 93:
            var8 = 3;
            if(!(!(var11 >= var8))) { _fun0008_ip = 65; continue _fun0008 }
case 95:
            var5 = function generateErrorReport(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var24 = arg1;
                    var _closure3_slot0 = var24;
                    var23 = function appendMismatch(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = 0;
                            var16 = 0;
                            var7 = copyRestArgs(var16);
                            var1 = var7.length;
                            var1 = var2 < var1;
                            var5 = global;
                            var4 = '';
                            var3 = ':';
                            if(!var1) { _fun0010_ip = 80; continue _fun0010 }
case 33:
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
                            if(var1) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                            var1 = _closure3_slot0;
                            var8 = var1.seenMismatches;
                            var1 = var8.add;
                            var1 = var1.bind(var8)(var10);
                            var1 = _closure3_slot1;
                            var8 = var1.mismatchedFields;
                            var1 = var8.push;
                            var1 = var1.bind(var8)(var9);
case 96:
                            var2 = var2 + 1;
                            var1 = var7.length;
                            if(var2 < var1) { _fun0010_ip = 33; continue _fun0010 }
case 80:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot2 = var23;
                    var22 = function appendDeepMismatches(arg1, arg2, arg3) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var17 = arg1;
                            var16 = arg2;
                            var15 = arg3;
                            var14 = arguments[3];
                            var1 = undefined;
                            if(!(var14 === var1)) { _fun0011_ip = 2; continue _fun0011 }
case 98:
                            var2 = global;
                            var2 = var2.Set;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var28 = var3;
                            var2 = new var28[var2](var27);
                            var14 = var2 instanceof Object ? var2 : var3;
case 2:
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
                            if(!var2) { _fun0011_ip = 99; continue _fun0011 }
case 100:
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
                            if(var18) { _fun0011_ip = 101; continue _fun0011 }
case 49:
                            var21 = _closure3_slot2;
                            var18 = {};
                            var18['fieldName'] = var20;
                            var22 = _closure1_slot14;
                            var22 = var22.bind(var1)(var19);
                            var18['primaryType'] = var22;
                            var18['shadowType'] = var6;
                            var18 = var21.bind(var1)(var18);
                            _fun0011_ip = 54; continue _fun0011;
case 101:
                            var2 = var15[var2];
                            var3 = var2;
                            if(!(var19 !== var2)) { _fun0011_ip = 54; continue _fun0011 }
case 92:
                            var18 = typeof var19;
                            if(!(var7 === var18)) { _fun0011_ip = 72; continue _fun0011 }
case 102:
                            var18 = typeof var2;
                            if(!(var7 !== var18)) { _fun0011_ip = 103; continue _fun0011 }
case 72:
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
                            _fun0011_ip = 54; continue _fun0011;
case 103:
                            var21 = var13.Array;
                            var18 = var21.isArray;
                            var18 = var18.bind(var21)(var19);
                            if(!var18) { _fun0011_ip = 75; continue _fun0011 }
case 104:
                            var21 = var13.Array;
                            var18 = var21.isArray;
                            var18 = var18.bind(var21)(var2);
                            if(var18) { _fun0011_ip = 105; continue _fun0011 }
case 75:
                            var18 = var9 != var19;
                            if(!var18) { _fun0011_ip = 27; continue _fun0011 }
case 106:
                            var18 = var9 != var2;
case 27:
                            var3 = var2;
                            if(!var18) { _fun0011_ip = 54; continue _fun0011 }
case 107:
                            var18 = var14.has;
                            var18 = var18.bind(var14)(var19);
                            var3 = var2;
                            if(var18) { _fun0011_ip = 54; continue _fun0011 }
case 108:
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
                            _fun0011_ip = 54; continue _fun0011;
case 105:
                            var18 = _closure3_slot4;
                            var18 = var18.bind(var1)(var20, var19, var2);
                            var3 = var2;
case 54:
                            var11 = var11 + 1;
                            var2 = var12.length;
                            if(var11 < var2) { _fun0011_ip = 100; continue _fun0011 }
case 99:
                            return var1;
                        }
                    };
                    var _closure3_slot3 = var22;
                    var21 = function appendArrayMismatches(arg1, arg2, arg3) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
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
                            if(var2) { _fun0012_ip = 109; continue _fun0012 }
case 2:
                            var3 = _closure3_slot2;
                            var2 = {'fieldName': null, 'primaryType': 'array', 'shadowType': 'array'};
                            var6 = arg1;
                            var2['fieldName'] = var6;
                            var5 = var5.length;
                            var2['primaryArrayLength'] = var5;
                            var4 = var4.length;
                            var2['secondaryArrayLength'] = var4;
                            var2 = var3.bind(var1)(var2);
case 109:
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
                    if(var3) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var31 = var9.value;
                    var3 = var31.type;
                    if(!(var10 !== var3)) { _fun0009_ip = 112; continue _fun0009 }
case 113:
                    if(!(var11 !== var3)) { _fun0009_ip = 114; continue _fun0009 }
case 115:
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    if(!(var12 === var3)) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                    var30 = var24.visitedEntries;
                    var29 = var30.has;
                    var3 = var31.primaryRecord;
                    var3 = var29.bind(var30)(var3);
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    if(var3) { _fun0009_ip = 116; continue _fun0009 }
case 118:
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
                    if(var3) { _fun0009_ip = 116; continue _fun0009 }
case 119:
                    var33 = var29.value;
                    var32 = var33.field;
                    var3 = var32.toString;
                    var32 = var3.bind(var32)();
                    var3 = var33.type;
                    if(!(var13 !== var3)) { _fun0009_ip = 120; continue _fun0009 }
case 107:
                    if(!(var14 === var3)) { _fun0009_ip = 121; continue _fun0009 }
case 122:
                    var3 = var33.primaryValue;
                    if(!(var1 !== var3)) { _fun0009_ip = 105; continue _fun0009 }
case 61:
                    var3 = var33.shadowValue;
                    if(!(var1 !== var3)) { _fun0009_ip = 105; continue _fun0009 }
case 123:
                    var3 = var33.primaryValue;
                    var3 = typeof var3;
                    if(!(var15 === var3)) { _fun0009_ip = 105; continue _fun0009 }
case 124:
                    var3 = var33.shadowValue;
                    var3 = typeof var3;
                    if(!(var15 !== var3)) { _fun0009_ip = 125; continue _fun0009 }
case 105:
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
                    _fun0009_ip = 121; continue _fun0009;
case 125:
                    var35 = var16.Array;
                    var34 = var35.isArray;
                    var3 = var33.primaryValue;
                    var3 = var34.bind(var35)(var3);
                    if(!var3) { _fun0009_ip = 126; continue _fun0009 }
case 127:
                    var35 = var16.Array;
                    var34 = var35.isArray;
                    var3 = var33.shadowValue;
                    var3 = var34.bind(var35)(var3);
                    if(var3) { _fun0009_ip = 128; continue _fun0009 }
case 126:
                    var34 = var33.primaryValue;
                    var3 = var33.shadowValue;
                    var3 = var22.bind(var19)(var32, var34, var3);
                    _fun0009_ip = 121; continue _fun0009;
case 128:
                    var34 = var33.primaryValue;
                    var3 = var33.shadowValue;
                    var3 = var21.bind(var19)(var32, var34, var3);
                    _fun0009_ip = 121; continue _fun0009;
case 120:
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
case 121:
                    var34 = var30.bind(var19)();
                    var3 = var34.done;
                    var29 = var34;
                    var28 = var29;
                    var27 = var30;
                    var26 = var33;
                    var25 = var32;
                    if(var3) { _fun0009_ip = 116; continue _fun0009 }
case 129:
                    _fun0009_ip = 119; continue _fun0009;
case 114:
                    var3 = var2.numMissingKeys;
                    var3 = var3 + 1;
                    var2['numMissingKeys'] = var3;
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
                    _fun0009_ip = 116; continue _fun0009;
case 112:
                    var3 = var2.numExtraKeys;
                    var3 = var3 + 1;
                    var2['numExtraKeys'] = var3;
                    var28 = var8;
                    var27 = var7;
                    var26 = var6;
                    var25 = var5;
case 116:
                    var29 = var18.bind(var19)();
                    var3 = var29.done;
                    var8 = var28;
                    var7 = var27;
                    var6 = var26;
                    var5 = var25;
                    var9 = var29;
                    if(!var3) { _fun0009_ip = 111; continue _fun0009 }
case 110:
                    var3 = var2.mismatchedFields;
                    var5 = var3.length;
                    var3 = var2.numExtraKeys;
                    var5 = var5 + var3;
                    var3 = var2.numMissingKeys;
                    var3 = var5 + var3;
                    if(!(var3 !== var4)) { _fun0009_ip = 130; continue _fun0009 }
case 131:
                    return var2;
case 130:
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var3, var9);
            if(!(var2 != var5)) { _fun0008_ip = 65; continue _fun0008 }
case 132:
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
case 65:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = function getType(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var1 = 'null';
            var2 = null;
            if(!(var2 !== var6)) { _fun0013_ip = 4; continue _fun0013 }
case 133:
            var2 = typeof var6;
            var3 = 'object';
            if(!(var3 === var2)) { _fun0013_ip = 134; continue _fun0013 }
case 135:
            var4 = global;
            var5 = var4.Array;
            var4 = var5.isArray;
            var4 = var4.bind(var5)(var6);
            if(!var4) { _fun0013_ip = 5; continue _fun0013 }
case 136:
            var3 = 'array';
case 5:
            var2 = var3;
case 134:
            var1 = var2;
case 4:
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
case 0:
                var5 = arg3;
                var2 = var5.length;
                var1 = 0;
                if(!(var1 !== var2)) { _fun0014_ip = 7; continue _fun0014 }
case 37:
                var2 = new Array(0);
                var _closure3_slot0 = var2;
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.type;
                        var2 = 'length-mismatch';
                        if(!(var2 !== var3)) { _fun0015_ip = 47; continue _fun0015 }
case 98:
                        var2 = 'missing-record';
                        if(!(var2 !== var3)) { _fun0015_ip = 137; continue _fun0015 }
case 34:
                        var2 = 'extra-record';
                        if(!(var2 !== var3)) { _fun0015_ip = 138; continue _fun0015 }
case 139:
                        var2 = 'record-mismatch';
                        if(!(var2 === var3)) { _fun0015_ip = 47; continue _fun0015 }
case 140:
                        var4 = var1.mismatches;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = 'field-missing';
                                if(!(var2 !== var3)) { _fun0016_ip = 136; continue _fun0016 }
case 98:
                                var4 = var1.primaryValue;
                                var3 = var1.shadowValue;
                                var2 = function logDiff(arg1, arg2) {
                                    var4 = function impl(arg1, arg2) {
                                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                            var4 = arg1;
                                            var8 = arg2;
                                            var _closure7_slot0 = var4;
                                            var _closure7_slot1 = var8;
                                            var3 = _closure1_slot9;
                                            var1 = undefined;
                                            var3 = var3.bind(var1)(var4, var8);
                                            if(var3) { _fun0017_ip = 141; continue _fun0017 }
case 38:
                                            var6 = 'object';
                                            var3 = typeof var4;
                                            if(!(var6 === var3)) { _fun0017_ip = 142; continue _fun0017 }
case 140:
                                            var3 = null;
                                            if(!(var3 !== var4)) { _fun0017_ip = 142; continue _fun0017 }
case 143:
                                            var5 = typeof var8;
                                            if(!(var6 === var5)) { _fun0017_ip = 142; continue _fun0017 }
case 7:
                                            if(!(var3 !== var8)) { _fun0017_ip = 142; continue _fun0017 }
case 144:
                                            var6 = _closure6_slot0;
                                            var5 = var6.has;
                                            var5 = var5.bind(var6)(var4);
                                            var3 = _closure6_slot0;
                                            if(var5) { _fun0017_ip = 145; continue _fun0017 }
case 146:
                                            var5 = var3.set;
                                            var5 = var5.bind(var3)(var4, var8);
case 142:
                                            var5 = global;
                                            var6 = var5.Date;
                                            var6 = var4 instanceof var6;
                                            if(!var6) { _fun0017_ip = 147; continue _fun0017 }
case 148:
                                            var6 = var5.Date;
                                            var6 = var8 instanceof var6;
                                            if(var6) { _fun0017_ip = 141; continue _fun0017 }
case 147:
                                            var6 = var5.Set;
                                            var6 = var4 instanceof var6;
                                            if(!var6) { _fun0017_ip = 14; continue _fun0017 }
case 149:
                                            var6 = var5.Set;
                                            var6 = var8 instanceof var6;
                                            if(var6) { _fun0017_ip = 150; continue _fun0017 }
case 14:
                                            var7 = var5.Array;
                                            var6 = var7.isArray;
                                            var6 = var6.bind(var7)(var4);
                                            if(!var6) { _fun0017_ip = 101; continue _fun0017 }
case 151:
                                            var7 = var5.Array;
                                            var6 = var7.isArray;
                                            var6 = var6.bind(var7)(var8);
                                            if(var6) { _fun0017_ip = 152; continue _fun0017 }
case 101:
                                            var6 = _closure1_slot12;
                                            var6 = var6.bind(var1)(var4);
                                            if(!var6) { _fun0017_ip = 141; continue _fun0017 }
case 83:
                                            var6 = _closure1_slot12;
                                            var6 = var6.bind(var1)(var8);
                                            if(!var6) { _fun0017_ip = 141; continue _fun0017 }
case 21:
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
                                            if(var6) { _fun0017_ip = 141; continue _fun0017 }
case 153:
                                            var6 = var7.value;
                                            var14 = var13.has;
                                            var14 = var14.bind(var13)(var6);
                                            if(!var14) { _fun0017_ip = 154; continue _fun0017 }
case 155:
                                            var15 = var12.has;
                                            var14 = var15.bind(var12)(var6);
case 154:
                                            if(!var14) { _fun0017_ip = 156; continue _fun0017 }
case 157:
                                            var16 = _closure1_slot9;
                                            var15 = var4[var6];
                                            var14 = var8[var6];
                                            var14 = var16.bind(var1)(var15, var14);
                                            if(var14) { _fun0017_ip = 156; continue _fun0017 }
case 158:
                                            var15 = _closure6_slot1;
                                            var14 = var4[var6];
                                            var6 = var8[var6];
                                            var6 = var15.bind(var1)(var14, var6);
case 156:
                                            var14 = var11.bind(var1)();
                                            var6 = var14.done;
                                            var7 = var14;
                                            if(var6) { _fun0017_ip = 141; continue _fun0017 }
case 159:
                                            _fun0017_ip = 153; continue _fun0017;
case 152:
                                            var10 = var5.Math;
                                            var7 = var10.min;
                                            var6 = var4.length;
                                            var5 = var8.length;
                                            var7 = var7.bind(var10)(var6, var5);
                                            var6 = 0;
                                            var10 = var6 < var7;
                                            if(!var10) { _fun0017_ip = 160; continue _fun0017 }
case 161:
                                            var12 = _closure1_slot9;
                                            var11 = var4[var6];
                                            var10 = var8[var6];
                                            var10 = var12.bind(var1)(var11, var10);
                                            if(var10) { _fun0017_ip = 162; continue _fun0017 }
case 163:
                                            var12 = _closure6_slot1;
                                            var11 = var4[var6];
                                            var10 = var8[var6];
                                            var10 = var12.bind(var1)(var11, var10);
case 162:
                                            var6 = var6 + 1;
                                            if(var6 < var7) { _fun0017_ip = 161; continue _fun0017 }
case 160:
                                            var6 = var4.length;
                                            var5 = var8.length;
                                            if(!(!(var6 > var5))) { _fun0017_ip = 141; continue _fun0017 }
case 129:
                                            var5 = var8.length;
                                            var5 = var4.length;
                                            _fun0017_ip = 141; continue _fun0017;
case 150:
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
case 145:
                                            var2 = var3.get;
                                            var2 = var2.bind(var3)(var4);
                                            var2 = undefined;
                                            return var2;
case 141:
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
case 136:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        _fun0015_ip = 47; continue _fun0015;
case 138:
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var2 = var1.key;
                        var2 = var3.bind(var4)(var2);
                        _fun0015_ip = 47; continue _fun0015;
case 137:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = var1.key;
                        var1 = var2.bind(var3)(var1);
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var2 = var2.length;
                var1 = var1.length;
                var1 = undefined;
                return var1;
case 7:
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