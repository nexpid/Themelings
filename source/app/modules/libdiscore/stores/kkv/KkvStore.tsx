// app/modules/libdiscore/stores/kkv/KkvStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isPlainRecordDataEqual;
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Logger;
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var13 = 'KkvStore';
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot9 = var7;
    var8 = var4.Symbol;
    var7 = 'version';
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var8 = var4.Symbol;
    var7 = 'boxedPartition';
    var7 = var8.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var9 = var4.Object;
    var8 = var9.freeze;
    var7 = {};
    var10 = var8.bind(var9)(var7);
    var _closure1_slot12 = var10;
    var9 = var4.Object;
    var8 = var9.freeze;
    var7 = {'current': null, 'length': 0, 'version': 4294967295};
    var7['current'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var4 = var4.Object;
    var4 = var4.hasOwnProperty;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function KkvStore(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = arg1;
                var3 = arguments[1];
                var7 = this;
                var _closure3_slot0 = var8;
                var6 = undefined;
                if(!(var3 === var6)) { _fun0005_ip = 25; continue _fun0005 }
 21:
                var3 = 'typescript';
 25:
                var _closure3_slot1 = var6;
                var _closure3_slot2 = var6;
                var _closure3_slot3 = var6;
                var _closure3_slot4 = var6;
                var _closure3_slot5 = var6;
                var9 = _closure1_slot3;
                var1 = _closure2_slot0;
                var1 = var9.bind(var6)(var7, var1);
                var1 = {};
                _closure3_slot2 = var1;
                var9 = 'typescript';
                if(!(var9 !== var3)) { _fun0005_ip = 89; continue _fun0005 }
 79:
                var9 = 'typescript-libdiscore-dual-read';
                if(!(var9 === var3)) { _fun0005_ip = 207; continue _fun0005 }
 89:
                var9 = false;
                _closure3_slot3 = var9;
                var9 = {};
                var10 = function reset(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var1 = {};
                        var3 = 'function';
                        var2 = typeof var4;
                        if(!(var3 !== var2)) { _fun0006_ip = 30; continue _fun0006 }
 16:
                        var2 = null;
                        var16 = var1;
                        if(!(var2 != var4)) { _fun0006_ip = 54; continue _fun0006 }
 25:
                        var16 = var4;
                        _fun0006_ip = 54; continue _fun0006;
 30:
                        var2 = _closure3_slot1;
                        var3 = var2.root;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var1, var3);
                        var16 = var1;
 54:
                        var5 = {};
                        var14 = var16;
                        var4 = 0;
                        var10 = global;
                        var8 = 7;
                        var1 = undefined;
                        var3 = 0;
                        var2 = 0;
                        var7 = 0;
                        var6 = 0;
                        for(var11 in var14)
 87:
                        {
                            var7 = var3;
                            var6 = var2;
 102:
                            var18 = var11;
                            var20 = var10.Object;
                            var19 = var20.keys;
                            var17 = var16[var18];
                            var17 = var19.bind(var20)(var17);
                            var21 = var17.length;
                            var3 = var3 + 1;
                            var2 = var2 + var21;
                            var17 = {};
                            var19 = var16[var18];
                            var17['root'] = var19;
                            var20 = _closure1_slot0;
                            var19 = _closure1_slot2;
                            var19 = var19[var8];
                            var19 = var20.bind(var1)(var19);
                            var20 = var19.partitionRootDerived;
                            var19 = {};
                            var19['length'] = var21;
                            var21 = {};
                            var19['memoized'] = var21;
                            var17[var20] = var19;
                            var5[var18] = var17;
                            _fun0006_ip = 87; continue _fun0006;
                        }
 195:
                        var2 = var4 === var6;
                        if(!var2) { _fun0006_ip = 224; continue _fun0006 }
 202:
                        var3 = _closure3_slot1;
                        var3 = var3.derived;
                        var3 = var3.length;
                        var2 = var4 === var3;
 224:
                        if(var2) { _fun0006_ip = 270; continue _fun0006 }
 227:
                        var3 = true;
                        _closure3_slot3 = var3;
                        var4 = _closure3_slot1;
                        var3 = var4.setKkvRoot;
                        var2 = {};
                        var8 = {};
                        var2['memoized'] = var8;
                        var2['numPartitions'] = var7;
                        var2['length'] = var6;
                        var2 = var3.bind(var4)(var5, var2);
 270:
                        return var1;
                    }
                };
                var9['reset'] = var10;
                var10 = function set(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = arg1;
                        var7 = arg2;
                        var3 = arg3;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var6 = var1[var4];
                        var1 = null;
                        if(!(var1 != var6)) { _fun0007_ip = 235; continue _fun0007 }
 35:
                        var1 = var6.root;
                        var11 = var1[var7];
                        var5 = 'function';
                        var1 = typeof var3;
                        var10 = var3;
                        if(!(var5 === var1)) { _fun0007_ip = 66; continue _fun0007 }
 59:
                        var1 = undefined;
                        var10 = var3.bind(var1)(var11);
 66:
                        var9 = undefined;
                        var5 = var9 === var11;
                        var1 = var5;
                        if(var1) { _fun0007_ip = 94; continue _fun0007 }
 78:
                        var8 = _closure1_slot8;
                        var8 = var8.bind(var9)(var11, var10);
                        var1 = !var8;
 94:
                        if(!var1) { _fun0007_ip = 233; continue _fun0007 }
 100:
                        var8 = var6.root;
                        var8[var7] = var10;
                        if(!var5) { _fun0007_ip = 184; continue _fun0007 }
 113:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 7;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.partitionRootDerived;
                        var8 = var6[var5];
                        var5 = var8.length;
                        var5 = var5 + 1;
                        var8['length'] = var5;
                        var5 = _closure3_slot1;
                        var8 = var5.derived;
                        var5 = var8.length;
                        var5 = var5 + 1;
                        var8['length'] = var5;
 184:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 7;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.partitionRootDerived;
                        var6 = var6[var5];
                        var5 = {};
                        var6['memoized'] = var5;
                        var5 = true;
                        _closure3_slot3 = var5;
                        var1 = true;
 233:
                        return var1;
 235:
                        var5 = 'function';
                        var1 = typeof var3;
                        var6 = var3;
                        if(!(var5 === var1)) { _fun0007_ip = 256; continue _fun0007 }
 249:
                        var1 = undefined;
                        var6 = var3.bind(var1)(var1);
 256:
                        var1 = _closure3_slot1;
                        var3 = var1.root;
                        var1 = {};
                        var5 = {};
                        var5[var7] = var6;
                        var1['root'] = var5;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 7;
                        var6 = var6[var5];
                        var5 = undefined;
                        var5 = var7.bind(var5)(var6);
                        var6 = var5.partitionRootDerived;
                        var5 = {};
                        var7 = 1;
                        var5['length'] = var7;
                        var7 = {};
                        var5['memoized'] = var7;
                        var1[var6] = var5;
                        var3[var4] = var1;
                        var1 = _closure3_slot1;
                        var3 = var1.derived;
                        var1 = var3.numPartitions;
                        var1 = var1 + 1;
                        var3['numPartitions'] = var1;
                        var1 = _closure3_slot1;
                        var3 = var1.derived;
                        var1 = var3.length;
                        var1 = var1 + 1;
                        var3['length'] = var1;
                        var1 = true;
                        _closure3_slot3 = var1;
                        return var1;
                    }
                };
                var9['set'] = var10;
                var10 = function setPartition(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var6 = arg1;
                        var4 = arg2;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var5 = var1[var6];
                        var1 = null;
                        if(!(var1 != var5)) { _fun0008_ip = 449; continue _fun0008 }
 32:
                        var2 = 'function';
                        var1 = typeof var4;
                        var9 = var4;
                        if(!(var2 === var1)) { _fun0008_ip = 59; continue _fun0008 }
 46:
                        var2 = var5.root;
                        var1 = undefined;
                        var9 = var4.bind(var1)(var2);
 59:
                        var14 = var5.root;
                        var1 = true;
                        var2 = true;
                        if(!(var14 !== var9)) { _fun0008_ip = 211; continue _fun0008 }
 76:
                        var7 = global;
                        var10 = var7.Object;
                        var8 = var10.keys;
                        var13 = var8.bind(var10)(var14);
                        var8 = var7.Object;
                        var7 = var8.keys;
                        var7 = var7.bind(var8)(var9);
                        var8 = var13.length;
                        var7 = var7.length;
                        var2 = false;
                        if(!(var8 === var7)) { _fun0008_ip = 211; continue _fun0008 }
 126:
                        var7 = var13.length;
                        var11 = 0;
                        var7 = var11 < var7;
                        var8 = undefined;
                        var2 = true;
                        if(!var7) { _fun0008_ip = 211; continue _fun0008 }
 147:
                        var7 = var13[var11];
                        var16 = _closure1_slot14;
                        var15 = var16.call;
                        var15 = var15.bind(var16)(var9, var7);
                        var2 = false;
                        if(!var15) { _fun0008_ip = 211; continue _fun0008 }
 171:
                        var16 = _closure1_slot8;
                        var15 = var14[var7];
                        var7 = var9[var7];
                        var7 = var16.bind(var8)(var15, var7);
                        var2 = false;
                        if(!var7) { _fun0008_ip = 211; continue _fun0008 }
 194:
                        var11 = var11 + 1;
                        var7 = var13.length;
                        var7 = var11 < var7;
                        var2 = true;
                        if(var7) { _fun0008_ip = 147; continue _fun0008 }
 211:
                        if(var2) { _fun0008_ip = 445; continue _fun0008 }
 217:
                        var2 = global;
                        var7 = var2.Object;
                        var2 = var7.keys;
                        var2 = var2.bind(var7)(var9);
                        var7 = var2.length;
                        var12 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var11 = 7;
                        var2 = var2[var11];
                        var10 = undefined;
                        var2 = var12.bind(var10)(var2);
                        var2 = var2.partitionRootDerived;
                        var2 = var5[var2];
                        var12 = var2.length;
                        var2 = _closure3_slot1;
                        var5 = var2.derived;
                        var2 = var5.length;
                        var2 = var2 - var12;
                        var5['length'] = var2;
                        var2 = 0;
                        if(!(var2 !== var7)) { _fun0008_ip = 400; continue _fun0008 }
 311:
                        var2 = _closure3_slot1;
                        var5 = var2.root;
                        var2 = {};
                        var2['root'] = var9;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var8 = var9.bind(var10)(var8);
                        var9 = var8.partitionRootDerived;
                        var8 = {};
                        var8['length'] = var7;
                        var10 = {};
                        var8['memoized'] = var10;
                        var2[var9] = var8;
                        var5[var6] = var2;
                        var2 = _closure3_slot1;
                        var5 = var2.derived;
                        var2 = var5.length;
                        var2 = var2 + var7;
                        var5['length'] = var2;
                        _fun0008_ip = 439; continue _fun0008;
 400:
                        var2 = _closure3_slot1;
                        var2 = var2.root;
                        var2 = delete var2[var6];
                        var2 = _closure3_slot1;
                        var5 = var2.derived;
                        var2 = var5.numPartitions;
                        var2 = var2 - 1;
                        var5['numPartitions'] = var2;
 439:
                        _closure3_slot3 = var1;
                        return var1;
 445:
                        var1 = false;
                        return var1;
 449:
                        var5 = 'function';
                        var1 = typeof var4;
                        var2 = var4;
                        if(!(var5 === var1)) { _fun0008_ip = 470; continue _fun0008 }
 463:
                        var1 = undefined;
                        var2 = var4.bind(var1)(var1);
 470:
                        var1 = global;
                        var4 = var1.Object;
                        var1 = var4.keys;
                        var1 = var1.bind(var4)(var2);
                        var5 = var1.length;
                        var1 = 0;
                        var1 = var1 !== var5;
                        var7 = var2;
                        if(!var1) { _fun0008_ip = 636; continue _fun0008 }
 508:
                        var2 = _closure3_slot1;
                        var4 = var2.root;
                        var2 = {};
                        var2['root'] = var7;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var7 = 7;
                        var8 = var8[var7];
                        var7 = undefined;
                        var7 = var9.bind(var7)(var8);
                        var8 = var7.partitionRootDerived;
                        var7 = {};
                        var7['length'] = var5;
                        var9 = {};
                        var7['memoized'] = var9;
                        var2[var8] = var7;
                        var4[var6] = var2;
                        var2 = _closure3_slot1;
                        var4 = var2.derived;
                        var2 = var4.numPartitions;
                        var2 = var2 + 1;
                        var4['numPartitions'] = var2;
                        var2 = _closure3_slot1;
                        var4 = var2.derived;
                        var2 = var4.length;
                        var2 = var2 + var5;
                        var4['length'] = var2;
                        var2 = true;
                        _closure3_slot3 = var2;
                        var1 = true;
 636:
                        return var1;
                    }
                };
                var9['setPartition'] = var10;
                var10 = function get(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure3_slot1;
                        var2 = var1.root;
                        var1 = arg1;
                        var2 = var2[var1];
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 44; continue _fun0009 }
 31:
                        var3 = var2.root;
                        var2 = arg2;
                        var1 = var3[var2];
 44:
                        return var1;
                    }
                };
                var9['get'] = var10;
                var10 = function getPartition(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var1 = _closure3_slot1;
                        var2 = var1.root;
                        var1 = arg1;
                        var2 = var2[var1];
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0010_ip = 37; continue _fun0010 }
 31:
                        var1 = var2.root;
 37:
                        return var1;
                    }
                };
                var9['getPartition'] = var10;
                var10 = function remove(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var5 = arg1;
                        var7 = arg2;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var6 = var1[var5];
                        var1 = null;
                        var1 = var1 != var6;
                        if(!var1) { _fun0011_ip = 255; continue _fun0011 }
 35:
                        var2 = var6.root;
                        var2 = var2[var7];
                        var8 = undefined;
                        var2 = var8 !== var2;
                        if(!var2) { _fun0011_ip = 252; continue _fun0011 }
 57:
                        var3 = var6.root;
                        var3 = delete var3[var7];
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 7;
                        var11 = var7[var9];
                        var11 = var10.bind(var8)(var11);
                        var11 = var11.partitionRootDerived;
                        var12 = var6[var11];
                        var11 = var12.length;
                        var11 = var11 - 1;
                        var12['length'] = var11;
                        var7 = var7[var9];
                        var7 = var10.bind(var8)(var7);
                        var7 = var7.partitionRootDerived;
                        var7 = var6[var7];
                        var10 = var7.length;
                        var7 = 0;
                        if(!(var7 !== var10)) { _fun0011_ip = 181; continue _fun0011 }
 144:
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.partitionRootDerived;
                        var6 = var6[var3];
                        var3 = {};
                        var6['memoized'] = var3;
                        _fun0011_ip = 220; continue _fun0011;
 181:
                        var3 = _closure3_slot1;
                        var3 = var3.root;
                        var3 = delete var3[var5];
                        var3 = _closure3_slot1;
                        var5 = var3.derived;
                        var3 = var5.numPartitions;
                        var3 = var3 - 1;
                        var5['numPartitions'] = var3;
 220:
                        var3 = _closure3_slot1;
                        var5 = var3.derived;
                        var3 = var5.length;
                        var3 = var3 - 1;
                        var5['length'] = var3;
                        var3 = true;
                        _closure3_slot3 = var3;
                        var2 = true;
 252:
                        var1 = var2;
 255:
                        return var1;
                    }
                };
                var9['remove'] = var10;
                var10 = function removePartition(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var4 = var1[var3];
                        var1 = null;
                        if(!(var1 != var4)) { _fun0012_ip = 138; continue _fun0012 }
 26:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var5 = var5[var1];
                        var1 = undefined;
                        var1 = var6.bind(var1)(var5);
                        var1 = var1.partitionRootDerived;
                        var1 = var4[var1];
                        var4 = var1.length;
                        var1 = _closure3_slot1;
                        var1 = var1.root;
                        var1 = delete var1[var3];
                        var1 = _closure3_slot1;
                        var3 = var1.derived;
                        var1 = var3.numPartitions;
                        var1 = var1 - 1;
                        var3['numPartitions'] = var1;
                        var1 = _closure3_slot1;
                        var3 = var1.derived;
                        var1 = var3.length;
                        var1 = var1 - var4;
                        var3['length'] = var1;
                        var1 = true;
                        _closure3_slot3 = var1;
                        return var1;
 138:
                        var1 = false;
                        return var1;
                    }
                };
                var9['removePartition'] = var10;
                _closure3_slot4 = var9;
                var13 = function _loop() {
                    var4 = _closure3_slot0;
                    var3 = _closure3_slot5;
                    var3 = var4[var3];
                    var _closure4_slot0 = var3;
                    var3 = _closure3_slot2;
                    var2 = _closure3_slot5;
                    var1 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var3 = false;
                            _closure3_slot3 = var3;
                            var6 = _closure4_slot0;
                            var5 = _closure3_slot4;
                            var1 = undefined;
                            var4 = arg1;
                            var4 = var6.bind(var1)(var4, var5);
                            var4 = _closure3_slot3;
                            if(var4) { _fun0013_ip = 40; continue _fun0013 }
 38:
                            return var3;
 40:
                            var2 = _closure3_slot1;
                            var3 = var2.derived;
                            var2 = {};
                            var3['memoized'] = var2;
                            return var1;
                        }
                    };
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                };
                var11 = var8;
                for(var8 in var11)
 185:
                {
 194:
                    var14 = var8;
                    _closure3_slot5 = var14;
                    var14 = var13.bind(var6)();
                    _fun0005_ip = 185; continue _fun0005;
                }
 207:
                var5 = _closure2_slot0;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var6)(var8);
                var12 = new Array(2);
                var12[0] = var8;
                var12[1] = var1;
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var6)();
                if(var1) { _fun0005_ip = 280; continue _fun0005 }
 267:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0005_ip = 314; continue _fun0005;
 280:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
 314:
                var1 = var5.bind(var6)(var7, var1);
                _closure3_slot1 = var1;
                var1['mode'] = var3;
                var3 = {};
                var1['root'] = var3;
                var3 = null;
                var1['shadowState'] = var3;
                var4 = {'numPartitions': 0, 'memoized': null, 'length': 0};
                var3 = 0;
                var5 = {};
                var4['memoized'] = var5;
                var1['derived'] = var4;
                var1['nextVersion'] = var3;
                var4 = _closure1_slot9;
                var3 = var4.info;
                var2 = var1.getName;
                var8 = var2.bind(var1)();
                var7 = var1.mode;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ' initialized in mode: ';
                var2 = var6.bind(var5)(var8, var2, var7);
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_derivedVersion';
        var5['key'] = var1;
        var1 = function _derivedVersion(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = arg1;
                var6 = this;
                var1 = _closure1_slot10;
                var1 = var4[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 52; continue _fun0014 }
 23:
                var3 = _closure1_slot10;
                var2 = var6.nextVersion;
                var2 = parseFloat(var2);
                var5 = var2 + 1;
                var6['nextVersion'] = var5;
                var4[var3] = var2;
                var1 = var2;
 52:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(18);
        var1[0] = var5;
        var5 = {};
        var7 = 'mapPartitions';
        var5['key'] = var7;
        var7 = function mapPartitions(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var9 = arg1;
                var8 = this;
                var1 = new Array(0);
                var6 = var8.root;
                var2 = undefined;
                for(var3 in var6)
 26:
                {
 35:
                    var13 = var3;
                    var11 = var1.push;
                    var10 = {};
                    var10['partitionKey'] = var13;
                    var12 = var8.root;
                    var12 = var12[var13];
                    var12 = var12.root;
                    var12 = var9.bind(var2)(var12, var13);
                    var10['values'] = var12;
                    var10 = var11.bind(var1)(var10);
                    _fun0015_ip = 26; continue _fun0015;
                }
 83:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMode';
        var5['key'] = var7;
        var7 = function getMode() {
            var1 = this;
            var1 = var1.mode;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'registerWithLibdiscore';
        var5['key'] = var7;
        var7 = function registerWithLibdiscore(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var3 = var5.mode;
                var2 = 'typescript-libdiscore-dual-read';
                if(!(var2 !== var3)) { _fun0016_ip = 152; continue _fun0016 }
 30:
                var2 = 'libdiscore';
                if(!(var2 !== var3)) { _fun0016_ip = 130; continue _fun0016 }
 40:
                var2 = 'typescript';
                if(!(var2 !== var3)) { _fun0016_ip = 94; continue _fun0016 }
 48:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var3);
                var3 = var6.assertNever;
                var2 = var5.mode;
                var2 = var3.bind(var6)(var2);
                _fun0016_ip = 232; continue _fun0016;
 94:
                var2 = global;
                var6 = var2.Error;
                var2 = var6.prototype;
                var3 = Object.create(var2, {constructor: {value: var6}});
                var8 = 'This method should not be called in TypeScript mode.';
                var9 = var3;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
 130:
                var3 = var5.setKkvRoot;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var5);
                var _closure3_slot1 = var2;
                _fun0016_ip = 232; continue _fun0016;
 152:
                var2 = {};
                var3 = {};
                var2['root'] = var3;
                var3 = {'length': 0, 'numPartitions': 0};
                var6 = {};
                var3['memoized'] = var6;
                var2['derived'] = var3;
                var5['shadowState'] = var2;
                var2 = function t(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure3_slot0;
                    var4 = var3.shadowState;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 'Shadow state must be set in dual-read mode before setting derived data.';
                    var2 = var5.bind(var1)(var4, var2);
                    var2 = {};
                    var4 = arg1;
                    var2['root'] = var4;
                    var4 = arg2;
                    var2['derived'] = var4;
                    var3['shadowState'] = var2;
                    return var1;
                };
                _closure3_slot1 = var2;
                var2 = global;
                var3 = var2.Symbol;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var _closure3_slot2 = var2;
                var3 = var5.addChangeListener;
                var2 = function() {
                    var4 = _closure3_slot0;
                    var7 = var4.shadowState;
                    var _closure4_slot0 = var7;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var5 = var6[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var5);
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = 'Shadow state must be set in dual-read mode before running validation.';
                    var5 = var8.bind(var1)(var7, var5);
                    var5 = _closure1_slot0;
                    var3 = 10;
                    var3 = var6[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.runDualReadValidation;
                    var3 = var4.getName;
                    var4 = var3.bind(var4)();
                    var3 = 'Kkv';
                    var2 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var11 = arg1;
                            var10 = global;
                            var3 = var10.Object;
                            var2 = var3.keys;
                            var1 = _closure3_slot0;
                            var1 = var1.root;
                            var17 = var2.bind(var3)(var1);
                            var3 = var10.Object;
                            var2 = var3.keys;
                            var1 = _closure4_slot0;
                            var1 = var1.root;
                            var7 = var2.bind(var3)(var1);
                            var1 = var17.length;
                            var6 = 0;
                            var2 = var6 < var1;
                            var1 = undefined;
                            var4 = 7;
                            var16 = null;
                            var15 = 0;
                            var14 = undefined;
                            var13 = undefined;
                            var12 = undefined;
                            var3 = undefined;
                            if(!var2) { _fun0017_ip = 536; continue _fun0017 }
 100:
                            var18 = var17[var15];
                            var2 = var10.Object;
                            var2 = var2.prototype;
                            var20 = var2.hasOwnProperty;
                            var19 = var20.call;
                            var2 = _closure4_slot0;
                            var2 = var2.root;
                            var2 = var19.bind(var20)(var2, var18);
                            var19 = _closure3_slot0;
                            var19 = var19.root;
                            var20 = var19[var18];
                            if(var2) { _fun0017_ip = 242; continue _fun0017 }
 159:
                            var19 = {};
                            var2 = var20.root;
                            var19['root'] = var2;
                            var21 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var2 = var21.bind(var1)(var2);
                            var2 = var2.partitionRootDerived;
                            var2 = var20[var2];
                            var19['derived'] = var2;
                            var2 = {};
                            var21 = {};
                            var2['root'] = var21;
                            var21 = {};
                            var21['length'] = var6;
                            var22 = {};
                            var21['memoized'] = var22;
                            var2['derived'] = var21;
                            var2 = var11.bind(var1)(var19, var2);
                            _fun0017_ip = 521; continue _fun0017;
 242:
                            var2 = _closure4_slot0;
                            var2 = var2.root;
                            var19 = var2[var18];
                            var21 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var18 = var2[var4];
                            var18 = var21.bind(var1)(var18);
                            var18 = var18.partitionRootDerived;
                            var18 = var20[var18];
                            var22 = var18.memoized;
                            var18 = _closure3_slot2;
                            var18 = var22[var18];
                            var2 = var2[var4];
                            var2 = var21.bind(var1)(var2);
                            var2 = var2.partitionRootDerived;
                            var2 = var19[var2];
                            var21 = var2.memoized;
                            var2 = _closure3_slot2;
                            var2 = var21[var2];
                            if(!(var16 != var18)) { _fun0017_ip = 353; continue _fun0017 }
 334:
                            var14 = var20;
                            var13 = var19;
                            var12 = var18;
                            var3 = var2;
                            if(!(var12 !== var3)) { _fun0017_ip = 521; continue _fun0017 }
 353:
                            var24 = {};
                            var21 = var20.root;
                            var24['root'] = var21;
                            var22 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var23 = var21[var4];
                            var23 = var22.bind(var1)(var23);
                            var23 = var23.partitionRootDerived;
                            var23 = var20[var23];
                            var24['derived'] = var23;
                            var23 = {};
                            var25 = var19.root;
                            var23['root'] = var25;
                            var25 = var21[var4];
                            var25 = var22.bind(var1)(var25);
                            var25 = var25.partitionRootDerived;
                            var25 = var19[var25];
                            var23['derived'] = var25;
                            var23 = var11.bind(var1)(var24, var23);
                            var23 = {};
                            var24 = var21[var4];
                            var24 = var22.bind(var1)(var24);
                            var24 = var24.partitionRootDerived;
                            var24 = var20[var24];
                            var25 = var24.memoized;
                            var24 = _closure3_slot2;
                            var25[var24] = var23;
                            var21 = var21[var4];
                            var21 = var22.bind(var1)(var21);
                            var21 = var21.partitionRootDerived;
                            var21 = var19[var21];
                            var22 = var21.memoized;
                            var21 = _closure3_slot2;
                            var22[var21] = var23;
                            var14 = var20;
                            var13 = var19;
                            var12 = var18;
                            var3 = var2;
 521:
                            var15 = var15 + 1;
                            var2 = var17.length;
                            if(var15 < var2) { _fun0017_ip = 100; continue _fun0017 }
 536:
                            var2 = var7.length;
                            var2 = var6 < var2;
                            var3 = 0;
                            if(!var2) { _fun0017_ip = 715; continue _fun0017 }
 553:
                            var14 = var7[var3];
                            var2 = var10.Object;
                            var2 = var2.prototype;
                            var13 = var2.hasOwnProperty;
                            var12 = var13.call;
                            var2 = _closure3_slot0;
                            var2 = var2.root;
                            var2 = var12.bind(var13)(var2, var14);
                            if(var2) { _fun0017_ip = 700; continue _fun0017 }
 598:
                            var12 = {};
                            var2 = {};
                            var12['root'] = var2;
                            var2 = {};
                            var2['length'] = var6;
                            var13 = {};
                            var2['memoized'] = var13;
                            var12['derived'] = var2;
                            var2 = {};
                            var13 = _closure4_slot0;
                            var15 = var13.root;
                            var15 = var15[var14];
                            var15 = var15.root;
                            var2['root'] = var15;
                            var13 = var13.root;
                            var14 = var13[var14];
                            var15 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var13 = var13[var4];
                            var13 = var15.bind(var1)(var13);
                            var13 = var13.partitionRootDerived;
                            var13 = var14[var13];
                            var2['derived'] = var13;
                            var2 = var11.bind(var1)(var12, var2);
 700:
                            var3 = var3 + 1;
                            var2 = var7.length;
                            if(var3 < var2) { _fun0017_ip = 553; continue _fun0017 }
 715:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = var3.bind(var5)(var2);
 232:
                var3 = var4.registerKkvStore;
                var2 = var5.getName;
                var2 = var2.bind(var5)();
                var1 = function(arg1, arg2) {
                    var4 = _closure3_slot1;
                    var1 = undefined;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'version';
        var5['key'] = var7;
        var7 = function version() {
            var3 = this;
            var2 = var3._derivedVersion;
            var1 = var3.derived;
            var1 = var1.memoized;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'partitionVersion';
        var5['key'] = var7;
        var7 = function partitionVersion(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var4 = this;
                var2 = var4.root;
                var1 = arg1;
                var5 = var2[var1];
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0018_ip = 77; continue _fun0018 }
 25:
                var3 = var4._derivedVersion;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.partitionRootDerived;
                var2 = var5[var2];
                var2 = var2.memoized;
                var1 = var3.bind(var4)(var2);
 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getRecord';
        var5['key'] = var7;
        var7 = function getRecord(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0019_ip = 40; continue _fun0019 }
 27:
                var3 = var2.root;
                var2 = arg2;
                var1 = var3[var2];
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getManyRecords';
        var5['key'] = var7;
        var7 = function getManyRecords(arg1, arg2) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var7 = var2[var1];
                var6 = null;
                if(!(var6 != var7)) { _fun0020_ip = 101; continue _fun0020 }
 22:
                var1 = new Array(0);
                var3 = _closure1_slot15;
                var5 = undefined;
                var2 = arg2;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0020_ip = 99; continue _fun0020 }
 55:
                var8 = var3.value;
                var2 = var7.root;
                var8 = var2[var8];
                if(!(var6 != var8)) { _fun0020_ip = 84; continue _fun0020 }
 74:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
 84:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0020_ip = 55; continue _fun0020 }
 99:
                return var1;
 101:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPartition';
        var5['key'] = var7;
        var7 = function getPartition(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0021_ip = 31; continue _fun0021 }
 22:
                var1 = _closure1_slot12;
                _fun0021_ip = 37; continue _fun0021;
 31:
                var1 = var2.root;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getBoxedPartition';
        var5['key'] = var7;
        var7 = function getBoxedPartition(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var7 = this;
                var2 = var7.root;
                var1 = arg1;
                var4 = var2[var1];
                var3 = null;
                if(!(var3 != var4)) { _fun0022_ip = 125; continue _fun0022 }
 22:
                var6 = var4.root;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var5 = var5[var1];
                var1 = undefined;
                var1 = var8.bind(var1)(var5);
                var1 = var1.partitionRootDerived;
                var1 = var4[var1];
                var4 = var1.memoized;
                var5 = var1.length;
                var1 = _closure1_slot11;
                var1 = var4[var1];
                if(!(var3 == var1)) { _fun0022_ip = 123; continue _fun0022 }
 86:
                var3 = _closure1_slot11;
                var2 = {};
                var2['current'] = var6;
                var6 = var7._derivedVersion;
                var6 = var6.bind(var7)(var4);
                var2['version'] = var6;
                var2['length'] = var5;
                var4[var3] = var2;
                var1 = var2;
 123:
                return var1;
 125:
                var1 = _closure1_slot13;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'partitionLength';
        var5['key'] = var7;
        var7 = function partitionLength(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = 0;
                if(var2) { _fun0023_ip = 67; continue _fun0023 }
 27:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.partitionRootDerived;
                var2 = var3[var2];
                var1 = var2.length;
 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'length';
        var5['key'] = var7;
        var7 = function length() {
            var1 = this;
            var1 = var1.derived;
            var1 = var1.length;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'numPartitions';
        var5['key'] = var7;
        var7 = function numPartitions() {
            var1 = this;
            var1 = var1.derived;
            var1 = var1.numPartitions;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getNullablePartition';
        var5['key'] = var7;
        var7 = function getNullablePartition(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0024_ip = 31; continue _fun0024 }
 25:
                var1 = var2.root;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'memoizedPartition';
        var5['key'] = var7;
        var7 = function memoizedPartition(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var4;
            var2 = global;
            var2 = var2.Symbol;
            var3 = undefined;
            var2 = var2.bind(var3)();
            var _closure3_slot2 = var2;
            var2 = {};
            var2 = var4.bind(var3)(var2);
            var _closure3_slot3 = var2;
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2.root;
                    var2 = arg1;
                    var5 = var3[var2];
                    var2 = null;
                    if(!(var2 != var5)) { _fun0025_ip = 121; continue _fun0025 }
 26:
                    var6 = var5.root;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.partitionRootDerived;
                    var2 = var5[var2];
                    var5 = var2.memoized;
                    var8 = _closure3_slot2;
                    var2 = var5[var8];
                    var7 = _closure1_slot14;
                    var3 = var7.call;
                    var3 = var3.bind(var7)(var5, var8);
                    if(var3) { _fun0025_ip = 119; continue _fun0025 }
 99:
                    var3 = _closure3_slot1;
                    var3 = var3.bind(var4)(var6);
                    var4 = _closure3_slot2;
                    var5[var4] = var3;
                    var2 = var3;
 119:
                    return var2;
 121:
                    var1 = _closure3_slot3;
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'memoized';
        var5['key'] = var7;
        var7 = function memoized(arg1) {
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = global;
            var3 = var2.Symbol;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var _closure3_slot2 = var2;
            var1 = function() {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var5 = _closure1_slot14;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0026_ip = 80; continue _fun0026 }
 48:
                    var6 = _closure3_slot1;
                    var2 = _closure3_slot0;
                    var5 = var2.root;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = _closure3_slot2;
                    var4[var3] = var2;
                    var1 = var2;
 80:
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'setKkvRoot';
        var5['key'] = var7;
        var7 = function setKkvRoot(arg1, arg2) {
            var2 = this;
            var1 = arg1;
            var2['root'] = var1;
            var1 = arg2;
            var2['derived'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'debugFindRecordByClusteringKeyDoNotUse';
        var5['key'] = var7;
        var6 = function debugFindRecordByClusteringKeyDoNotUse(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var9 = arg1;
                var8 = this;
                var1 = new Array(0);
                var6 = var8.root;
                var2 = null;
                for(var3 in var6)
 26:
                {
 35:
                    var13 = var3;
                    var10 = var8.root;
                    var10 = var10[var13];
                    var10 = var10.root;
                    var12 = var10[var9];
                    if(var2 == var12) { _fun0027_ip = 26; continue _fun0027 }
 62:
                    var11 = var1.push;
                    var10 = {};
                    var10['partitionKey'] = var13;
                    var10['record'] = var12;
                    var10 = var11.bind(var1)(var10);
                    _fun0027_ip = 26; continue _fun0027;
                }
 86:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/stores/kkv/KkvStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['KkvStore'] = var2;
    return var1;
})();