// app/modules/libdiscore/stores/kkv/KkvStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var8;
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
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isPlainRecordDataEqual;
    var _closure1_slot7 = var7;
    var8 = var4.Symbol;
    var7 = 'version';
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var9 = var4.Symbol;
    var8 = var9.for;
    var7 = 'Kkv.PartitionDerivedData';
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var8 = var4.Symbol;
    var7 = 'boxedPartition';
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var9 = var4.Object;
    var8 = var9.freeze;
    var7 = {};
    var10 = var8.bind(var9)(var7);
    var _closure1_slot11 = var10;
    var9 = var4.Object;
    var8 = var9.freeze;
    var7 = {'current': null, 'length': 0, 'version': 4294967295};
    var7['current'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var4.Object;
    var4 = var4.hasOwnProperty;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function KkvStore(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var8 = arg1;
                var2 = arguments[1];
                var6 = this;
                var _closure3_slot0 = var8;
                var5 = undefined;
                if(!(var2 === var5)) { _fun0005_ip = 25; continue _fun0005 }
 21:
                var2 = 'typescript';
 25:
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var5;
                var _closure3_slot3 = var5;
                var _closure3_slot4 = var5;
                var _closure3_slot5 = var5;
                var9 = _closure1_slot2;
                var1 = _closure2_slot0;
                var1 = var9.bind(var5)(var6, var1);
                var1 = {};
                _closure3_slot2 = var1;
                var9 = 'typescript';
                if(!(var9 === var2)) { _fun0005_ip = 197; continue _fun0005 }
 79:
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
                        var14 = var1;
                        if(!(var2 != var4)) { _fun0006_ip = 54; continue _fun0006 }
 25:
                        var14 = var4;
                        _fun0006_ip = 54; continue _fun0006;
 30:
                        var2 = _closure3_slot1;
                        var3 = var2.root;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var1, var3);
                        var14 = var1;
 54:
                        var4 = {};
                        var12 = var14;
                        var3 = 0;
                        var8 = global;
                        var2 = 0;
                        var1 = 0;
                        var6 = 0;
                        var5 = 0;
                        for(var9 in var12)
 82:
                        {
                            var6 = var2;
                            var5 = var1;
 97:
                            var16 = var9;
                            var18 = var8.Object;
                            var17 = var18.keys;
                            var15 = var14[var16];
                            var15 = var17.bind(var18)(var15);
                            var19 = var15.length;
                            var2 = var2 + 1;
                            var1 = var1 + var19;
                            var15 = {};
                            var17 = var14[var16];
                            var15['root'] = var17;
                            var18 = _closure1_slot9;
                            var17 = {};
                            var17['length'] = var19;
                            var19 = {};
                            var17['memoized'] = var19;
                            var15[var18] = var17;
                            var4[var16] = var15;
                            _fun0006_ip = 82; continue _fun0006;
                        }
 171:
                        var1 = var3 === var5;
                        if(!var1) { _fun0006_ip = 200; continue _fun0006 }
 178:
                        var2 = _closure3_slot1;
                        var2 = var2.derived;
                        var2 = var2.length;
                        var1 = var3 === var2;
 200:
                        if(var1) { _fun0006_ip = 248; continue _fun0006 }
 203:
                        var2 = true;
                        _closure3_slot3 = var2;
                        var3 = _closure3_slot1;
                        var2 = var3.setKkvRoot;
                        var1 = {};
                        var7 = {};
                        var1['memoized'] = var7;
                        var1['numPartitions'] = var6;
                        var1['length'] = var5;
                        var1 = var2.bind(var3)(var4, var1);
 248:
                        var1 = undefined;
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
                        if(!(var1 != var6)) { _fun0007_ip = 188; continue _fun0007 }
 35:
                        var1 = var6.root;
                        var11 = var1[var7];
                        var5 = 'function';
                        var1 = typeof var3;
                        var9 = var3;
                        if(!(var5 === var1)) { _fun0007_ip = 66; continue _fun0007 }
 59:
                        var1 = undefined;
                        var9 = var3.bind(var1)(var11);
 66:
                        var10 = undefined;
                        var5 = var10 === var11;
                        var1 = var5;
                        if(var1) { _fun0007_ip = 94; continue _fun0007 }
 78:
                        var8 = _closure1_slot7;
                        var8 = var8.bind(var10)(var11, var9);
                        var1 = !var8;
 94:
                        if(!var1) { _fun0007_ip = 186; continue _fun0007 }
 97:
                        var8 = var6.root;
                        var8[var7] = var9;
                        if(!var5) { _fun0007_ip = 159; continue _fun0007 }
 110:
                        var5 = _closure1_slot9;
                        var8 = var6[var5];
                        var5 = var8.length;
                        var5 = var5 + 1;
                        var8['length'] = var5;
                        var5 = _closure3_slot1;
                        var8 = var5.derived;
                        var5 = var8.length;
                        var5 = var5 + 1;
                        var8['length'] = var5;
 159:
                        var5 = _closure1_slot9;
                        var6 = var6[var5];
                        var5 = {};
                        var6['memoized'] = var5;
                        var5 = true;
                        _closure3_slot3 = var5;
                        var1 = true;
 186:
                        return var1;
 188:
                        var5 = 'function';
                        var1 = typeof var3;
                        var6 = var3;
                        if(!(var5 === var1)) { _fun0007_ip = 209; continue _fun0007 }
 202:
                        var1 = undefined;
                        var6 = var3.bind(var1)(var1);
 209:
                        var1 = _closure3_slot1;
                        var3 = var1.root;
                        var1 = {};
                        var5 = {};
                        var5[var7] = var6;
                        var1['root'] = var5;
                        var6 = _closure1_slot9;
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
                        if(!(var1 != var5)) { _fun0008_ip = 406; continue _fun0008 }
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
                        var16 = _closure1_slot13;
                        var15 = var16.call;
                        var15 = var15.bind(var16)(var9, var7);
                        var2 = false;
                        if(!var15) { _fun0008_ip = 211; continue _fun0008 }
 171:
                        var16 = _closure1_slot7;
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
                        if(var2) { _fun0008_ip = 402; continue _fun0008 }
 217:
                        var2 = global;
                        var7 = var2.Object;
                        var2 = var7.keys;
                        var2 = var2.bind(var7)(var9);
                        var7 = var2.length;
                        var2 = _closure1_slot9;
                        var2 = var5[var2];
                        var10 = var2.length;
                        var2 = _closure3_slot1;
                        var5 = var2.derived;
                        var2 = var5.length;
                        var2 = var2 - var10;
                        var5['length'] = var2;
                        var2 = 0;
                        if(!(var2 !== var7)) { _fun0008_ip = 357; continue _fun0008 }
 287:
                        var2 = _closure3_slot1;
                        var5 = var2.root;
                        var2 = {};
                        var2['root'] = var9;
                        var9 = _closure1_slot9;
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
                        _fun0008_ip = 396; continue _fun0008;
 357:
                        var2 = _closure3_slot1;
                        var2 = var2.root;
                        var2 = delete var2[var6];
                        var2 = _closure3_slot1;
                        var5 = var2.derived;
                        var2 = var5.numPartitions;
                        var2 = var2 - 1;
                        var5['numPartitions'] = var2;
 396:
                        _closure3_slot3 = var1;
                        return var1;
 402:
                        var1 = false;
                        return var1;
 406:
                        var5 = 'function';
                        var1 = typeof var4;
                        var2 = var4;
                        if(!(var5 === var1)) { _fun0008_ip = 427; continue _fun0008 }
 420:
                        var1 = undefined;
                        var2 = var4.bind(var1)(var1);
 427:
                        var1 = global;
                        var4 = var1.Object;
                        var1 = var4.keys;
                        var1 = var1.bind(var4)(var2);
                        var5 = var1.length;
                        var1 = 0;
                        var1 = var1 !== var5;
                        var7 = var2;
                        if(!var1) { _fun0008_ip = 566; continue _fun0008 }
 462:
                        var2 = _closure3_slot1;
                        var4 = var2.root;
                        var2 = {};
                        var2['root'] = var7;
                        var8 = _closure1_slot9;
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
 566:
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
                        if(!var1) { _fun0011_ip = 199; continue _fun0011 }
 35:
                        var2 = var6.root;
                        var3 = var2[var7];
                        var2 = undefined;
                        var2 = var2 !== var3;
                        if(!var2) { _fun0011_ip = 196; continue _fun0011 }
 57:
                        var3 = var6.root;
                        var3 = delete var3[var7];
                        var7 = _closure1_slot9;
                        var9 = var6[var7];
                        var8 = var9.length;
                        var8 = var8 - 1;
                        var9['length'] = var8;
                        var7 = var6[var7];
                        var8 = var7.length;
                        var7 = 0;
                        if(!(var7 !== var8)) { _fun0011_ip = 125; continue _fun0011 }
 107:
                        var3 = _closure1_slot9;
                        var6 = var6[var3];
                        var3 = {};
                        var6['memoized'] = var3;
                        _fun0011_ip = 164; continue _fun0011;
 125:
                        var3 = _closure3_slot1;
                        var3 = var3.root;
                        var3 = delete var3[var5];
                        var3 = _closure3_slot1;
                        var5 = var3.derived;
                        var3 = var5.numPartitions;
                        var3 = var3 - 1;
                        var5['numPartitions'] = var3;
 164:
                        var3 = _closure3_slot1;
                        var5 = var3.derived;
                        var3 = var5.length;
                        var3 = var3 - 1;
                        var5['length'] = var3;
                        var3 = true;
                        _closure3_slot3 = var3;
                        var2 = true;
 196:
                        var1 = var2;
 199:
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
                        if(!(var1 != var4)) { _fun0012_ip = 114; continue _fun0012 }
 26:
                        var1 = _closure1_slot9;
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
 114:
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
 175:
                {
 184:
                    var14 = var8;
                    _closure3_slot5 = var14;
                    var14 = var13.bind(var5)();
                    _fun0005_ip = 175; continue _fun0005;
                }
 197:
                var4 = _closure2_slot0;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 6;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var11 = new Array(2);
                var11[0] = var8;
                var11[1] = var1;
                var1 = _closure1_slot5;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 270; continue _fun0005 }
 257:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 304; continue _fun0005;
 270:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot5;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 304:
                var1 = var4.bind(var5)(var6, var1);
                _closure3_slot1 = var1;
                var1['mode'] = var2;
                var2 = {};
                var1['root'] = var2;
                var3 = {'numPartitions': 0, 'memoized': null, 'length': 0};
                var2 = 0;
                var4 = {};
                var3['memoized'] = var4;
                var1['derived'] = var3;
                var1['nextVersion'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = '_derivedVersion';
        var5['key'] = var1;
        var1 = function _derivedVersion(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var4 = arg1;
                var6 = this;
                var1 = _closure1_slot8;
                var1 = var4[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 52; continue _fun0014 }
 23:
                var3 = _closure1_slot8;
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
        var1 = new Array(16);
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
        var1[3] = var5;
        var5 = {};
        var7 = 'partitionVersion';
        var5['key'] = var7;
        var7 = function partitionVersion(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var4 = this;
                var2 = var4.root;
                var1 = arg1;
                var5 = var2[var1];
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0016_ip = 53; continue _fun0016 }
 25:
                var3 = var4._derivedVersion;
                var2 = _closure1_slot9;
                var2 = var5[var2];
                var2 = var2.memoized;
                var1 = var3.bind(var4)(var2);
 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRecord';
        var5['key'] = var7;
        var7 = function getRecord(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0017_ip = 40; continue _fun0017 }
 27:
                var3 = var2.root;
                var2 = arg2;
                var1 = var3[var2];
 40:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getManyRecords';
        var5['key'] = var7;
        var7 = function getManyRecords(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var7 = var2[var1];
                var6 = null;
                if(!(var6 != var7)) { _fun0018_ip = 101; continue _fun0018 }
 22:
                var1 = new Array(0);
                var3 = _closure1_slot14;
                var5 = undefined;
                var2 = arg2;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0018_ip = 99; continue _fun0018 }
 55:
                var8 = var3.value;
                var2 = var7.root;
                var8 = var2[var8];
                if(!(var6 != var8)) { _fun0018_ip = 84; continue _fun0018 }
 74:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
 84:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0018_ip = 55; continue _fun0018 }
 99:
                return var1;
 101:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getPartition';
        var5['key'] = var7;
        var7 = function getPartition(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0019_ip = 31; continue _fun0019 }
 22:
                var1 = _closure1_slot11;
                _fun0019_ip = 37; continue _fun0019;
 31:
                var1 = var2.root;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getBoxedPartition';
        var5['key'] = var7;
        var7 = function getBoxedPartition(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var7 = this;
                var2 = var7.root;
                var1 = arg1;
                var4 = var2[var1];
                var3 = null;
                if(!(var3 != var4)) { _fun0020_ip = 101; continue _fun0020 }
 22:
                var6 = var4.root;
                var1 = _closure1_slot9;
                var1 = var4[var1];
                var4 = var1.memoized;
                var5 = var1.length;
                var1 = _closure1_slot10;
                var1 = var4[var1];
                if(!(var3 == var1)) { _fun0020_ip = 99; continue _fun0020 }
 62:
                var3 = _closure1_slot10;
                var2 = {};
                var2['current'] = var6;
                var6 = var7._derivedVersion;
                var6 = var6.bind(var7)(var4);
                var2['version'] = var6;
                var2['length'] = var5;
                var4[var3] = var2;
                var1 = var2;
 99:
                return var1;
 101:
                var1 = _closure1_slot12;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'partitionLength';
        var5['key'] = var7;
        var7 = function partitionLength(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = 0;
                if(var2) { _fun0021_ip = 43; continue _fun0021 }
 27:
                var2 = _closure1_slot9;
                var2 = var3[var2];
                var1 = var2.length;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
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
        var1[10] = var5;
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
        var1[11] = var5;
        var5 = {};
        var7 = 'getNullablePartition';
        var5['key'] = var7;
        var7 = function getNullablePartition(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = this;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0022_ip = 31; continue _fun0022 }
 25:
                var1 = var2.root;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2.root;
                    var2 = arg1;
                    var4 = var3[var2];
                    var2 = null;
                    if(!(var2 != var4)) { _fun0023_ip = 99; continue _fun0023 }
 26:
                    var6 = var4.root;
                    var2 = _closure1_slot9;
                    var2 = var4[var2];
                    var5 = var2.memoized;
                    var7 = _closure3_slot2;
                    var2 = var5[var7];
                    var4 = _closure1_slot13;
                    var3 = var4.call;
                    var3 = var3.bind(var4)(var5, var7);
                    if(var3) { _fun0023_ip = 97; continue _fun0023 }
 75:
                    var4 = _closure3_slot1;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var6);
                    var4 = _closure3_slot2;
                    var5[var4] = var3;
                    var2 = var3;
 97:
                    return var2;
 99:
                    var1 = _closure3_slot3;
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
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
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var5 = _closure1_slot13;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0024_ip = 80; continue _fun0024 }
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
        var1[14] = var5;
        var5 = {};
        var7 = 'setKkvRoot';
        var5['key'] = var7;
        var6 = function setKkvRoot(arg1, arg2) {
            var2 = this;
            var1 = arg1;
            var2['root'] = var1;
            var1 = arg2;
            var2['derived'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/stores/kkv/KkvStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['KkvStore'] = var2;
    return var1;
})();