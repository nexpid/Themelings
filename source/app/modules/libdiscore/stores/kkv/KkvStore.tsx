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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
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
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function KkvStore(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var8 = arg1;
                var3 = arguments[1];
                var7 = this;
                var _closure3_slot0 = var8;
                var6 = undefined;
                if(!(var3 === var6)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var3 = 'typescript';
case 39:
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
                if(!(var9 !== var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var9 = 'typescript-libdiscore-dual-read';
                if(!(var9 === var3)) { _fun0005_ip = 43; continue _fun0005 }
case 41:
                var9 = false;
                _closure3_slot3 = var9;
                var9 = {};
                var10 = function reset(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var4 = arg1;
                        var1 = {};
                        var3 = 'function';
                        var2 = typeof var4;
                        if(!(var3 !== var2)) { _fun0006_ip = 3; continue _fun0006 }
case 44:
                        var2 = null;
                        var13 = var1;
                        if(!(var2 != var4)) { _fun0006_ip = 45; continue _fun0006 }
case 39:
                        var13 = var4;
                        _fun0006_ip = 45; continue _fun0006;
case 3:
                        var2 = _closure3_slot1;
                        var2 = var2.state;
                        var3 = var2.root;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var1, var3);
                        var13 = var1;
case 45:
                        var4 = {};
                        var11 = var13;
                        var3 = 0;
                        var7 = global;
                        var2 = 0;
                        var1 = 0;
                        var6 = 0;
                        var5 = 0;
                        for(var8 in var11)
case 46:
                        {
                            var6 = var2;
                            var5 = var1;
case 47:
                            var15 = var8;
                            var17 = var7.Object;
                            var16 = var17.keys;
                            var14 = var13[var15];
                            var14 = var16.bind(var17)(var14);
                            var17 = var14.length;
                            var2 = var2 + 1;
                            var1 = var1 + var17;
                            var14 = {};
                            var16 = var13[var15];
                            var14['root'] = var16;
                            var16 = {};
                            var16['length'] = var17;
                            var17 = {};
                            var16['memoized'] = var17;
                            var14['derived'] = var16;
                            var4[var15] = var14;
                            _fun0006_ip = 46; continue _fun0006;
                        }
case 17:
                        var1 = var3 === var5;
                        if(!var1) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var2 = _closure3_slot1;
                        var2 = var2.state;
                        var2 = var2.derived;
                        var2 = var2.length;
                        var1 = var3 === var2;
case 48:
                        if(var1) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                        var2 = true;
                        _closure3_slot3 = var2;
                        var3 = _closure3_slot1;
                        var2 = var3.setKkvState;
                        var1 = {};
                        var1['root'] = var4;
                        var4 = {};
                        var7 = {};
                        var4['memoized'] = var7;
                        var4['numPartitions'] = var6;
                        var4['length'] = var5;
                        var1['derived'] = var4;
                        var1 = var2.bind(var3)(var1);
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var9['reset'] = var10;
                var10 = function set(arg1, arg2, arg3) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var4 = arg1;
                        var7 = arg2;
                        var3 = arg3;
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var1 = var1.root;
                        var5 = var1[var4];
                        var1 = null;
                        if(!(var1 != var5)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                        var1 = var5.root;
                        var11 = var1[var7];
                        var6 = 'function';
                        var1 = typeof var3;
                        var9 = var3;
                        if(!(var6 === var1)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                        var1 = undefined;
                        var9 = var3.bind(var1)(var11);
case 54:
                        var10 = undefined;
                        var6 = var10 === var11;
                        var1 = var6;
                        if(var1) { _fun0007_ip = 47; continue _fun0007 }
case 56:
                        var8 = _closure1_slot8;
                        var8 = var8.bind(var10)(var11, var9);
                        var1 = !var8;
case 47:
                        if(!var1) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                        var8 = var5.root;
                        var8[var7] = var9;
                        if(!var6) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                        var8 = var5.derived;
                        var6 = var8.length;
                        var6 = var6 + 1;
                        var8['length'] = var6;
                        var6 = _closure3_slot1;
                        var6 = var6.state;
                        var8 = var6.derived;
                        var6 = var8.length;
                        var6 = var6 + 1;
                        var8['length'] = var6;
case 59:
                        var6 = var5.derived;
                        var5 = {};
                        var6['memoized'] = var5;
                        var5 = true;
                        _closure3_slot3 = var5;
                        var1 = true;
case 57:
                        return var1;
case 52:
                        var5 = 'function';
                        var1 = typeof var3;
                        var6 = var3;
                        if(!(var5 === var1)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                        var1 = undefined;
                        var6 = var3.bind(var1)(var1);
case 61:
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var3 = var1.root;
                        var1 = {};
                        var5 = {};
                        var5[var7] = var6;
                        var1['root'] = var5;
                        var5 = {};
                        var6 = 1;
                        var5['length'] = var6;
                        var6 = {};
                        var5['memoized'] = var6;
                        var1['derived'] = var5;
                        var3[var4] = var1;
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var3 = var1.derived;
                        var1 = var3.numPartitions;
                        var1 = var1 + 1;
                        var3['numPartitions'] = var1;
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
case 0:
                        var6 = arg1;
                        var4 = arg2;
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var1 = var1.root;
                        var3 = var1[var6];
                        var1 = null;
                        if(!(var1 != var3)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                        var5 = 'function';
                        var1 = typeof var4;
                        var9 = var4;
                        if(!(var5 === var1)) { _fun0008_ip = 55; continue _fun0008 }
case 65:
                        var5 = var3.root;
                        var1 = undefined;
                        var9 = var4.bind(var1)(var5);
case 55:
                        var14 = var3.root;
                        var1 = true;
                        var5 = true;
                        if(!(var14 !== var9)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                        var7 = global;
                        var10 = var7.Object;
                        var8 = var10.keys;
                        var13 = var8.bind(var10)(var14);
                        var8 = var7.Object;
                        var7 = var8.keys;
                        var7 = var7.bind(var8)(var9);
                        var8 = var13.length;
                        var7 = var7.length;
                        var5 = false;
                        if(!(var8 === var7)) { _fun0008_ip = 66; continue _fun0008 }
case 68:
                        var7 = var13.length;
                        var11 = 0;
                        var7 = var11 < var7;
                        var8 = undefined;
                        var5 = true;
                        if(!var7) { _fun0008_ip = 66; continue _fun0008 }
case 69:
                        var7 = var13[var11];
                        var16 = _closure1_slot14;
                        var15 = var16.call;
                        var15 = var15.bind(var16)(var9, var7);
                        var5 = false;
                        if(!var15) { _fun0008_ip = 66; continue _fun0008 }
case 49:
                        var16 = _closure1_slot8;
                        var15 = var14[var7];
                        var7 = var9[var7];
                        var7 = var16.bind(var8)(var15, var7);
                        var5 = false;
                        if(!var7) { _fun0008_ip = 66; continue _fun0008 }
case 70:
                        var11 = var11 + 1;
                        var7 = var13.length;
                        var7 = var11 < var7;
                        var5 = true;
                        if(var7) { _fun0008_ip = 69; continue _fun0008 }
case 66:
                        if(var5) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                        var5 = global;
                        var7 = var5.Object;
                        var5 = var7.keys;
                        var5 = var5.bind(var7)(var9);
                        var7 = var5.length;
                        var3 = var3.derived;
                        var8 = var3.length;
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var5 = var3.derived;
                        var3 = var5.length;
                        var3 = var3 - var8;
                        var5['length'] = var3;
                        var3 = 0;
                        if(!(var3 !== var7)) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var8 = var3.root;
                        var5 = var3.derived;
                        var3 = {};
                        var3['root'] = var9;
                        var9 = {};
                        var9['length'] = var7;
                        var10 = {};
                        var9['memoized'] = var10;
                        var3['derived'] = var9;
                        var8[var6] = var3;
                        var3 = var5.length;
                        var3 = var3 + var7;
                        var5['length'] = var3;
                        _fun0008_ip = 75; continue _fun0008;
case 73:
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var3 = var3.root;
                        var3 = delete var3[var6];
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var5 = var3.derived;
                        var3 = var5.numPartitions;
                        var3 = var3 - 1;
                        var5['numPartitions'] = var3;
case 75:
                        _closure3_slot3 = var1;
                        return var1;
case 71:
                        var1 = false;
                        return var1;
case 63:
                        var5 = 'function';
                        var1 = typeof var4;
                        var3 = var4;
                        if(!(var5 === var1)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                        var1 = undefined;
                        var3 = var4.bind(var1)(var1);
case 76:
                        var1 = global;
                        var4 = var1.Object;
                        var1 = var4.keys;
                        var1 = var1.bind(var4)(var3);
                        var4 = var1.length;
                        var1 = 0;
                        var7 = var3;
                        if(!(var1 !== var4)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var5 = var1.root;
                        var3 = var1.derived;
                        var1 = {};
                        var1['root'] = var7;
                        var7 = {};
                        var7['length'] = var4;
                        var8 = {};
                        var7['memoized'] = var8;
                        var1['derived'] = var7;
                        var5[var6] = var1;
                        var1 = var3.numPartitions;
                        var1 = var1 + 1;
                        var3['numPartitions'] = var1;
                        var1 = var3.length;
                        var1 = var1 + var4;
                        var3['length'] = var1;
                        var1 = true;
                        _closure3_slot3 = var1;
                        return var1;
case 78:
                        var1 = false;
                        return var1;
                    }
                };
                var9['setPartition'] = var10;
                var10 = function get(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var2 = var1.root;
                        var1 = arg1;
                        var2 = var2[var1];
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0009_ip = 5; continue _fun0009 }
case 80:
                        var3 = var2.root;
                        var2 = arg2;
                        var1 = var3[var2];
case 5:
                        return var1;
                    }
                };
                var9['get'] = var10;
                var10 = function getPartition(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var2 = var1.root;
                        var1 = arg1;
                        var2 = var2[var1];
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0010_ip = 81; continue _fun0010 }
case 80:
                        var1 = var2.root;
case 81:
                        return var1;
                    }
                };
                var9['getPartition'] = var10;
                var10 = function remove(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var5 = arg1;
                        var7 = arg2;
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var1 = var1.root;
                        var3 = var1[var5];
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0011_ip = 82; continue _fun0011 }
case 53:
                        var2 = var3.root;
                        var6 = var2[var7];
                        var2 = undefined;
                        var2 = var2 !== var6;
                        if(!var2) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                        var6 = var3.root;
                        var6 = delete var6[var7];
                        var7 = var3.derived;
                        var6 = var7.length;
                        var6 = var6 - 1;
                        var7['length'] = var6;
                        var6 = var3.derived;
                        var7 = var6.length;
                        var6 = 0;
                        if(!(var6 !== var7)) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                        var6 = var3.derived;
                        var3 = {};
                        var6['memoized'] = var3;
                        _fun0011_ip = 87; continue _fun0011;
case 85:
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var3 = var3.root;
                        var3 = delete var3[var5];
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var5 = var3.derived;
                        var3 = var5.numPartitions;
                        var3 = var3 - 1;
                        var5['numPartitions'] = var3;
case 87:
                        var3 = _closure3_slot1;
                        var3 = var3.state;
                        var5 = var3.derived;
                        var3 = var5.length;
                        var3 = var3 - 1;
                        var5['length'] = var3;
                        var3 = true;
                        _closure3_slot3 = var3;
                        var2 = true;
case 83:
                        var1 = var2;
case 82:
                        return var1;
                    }
                };
                var9['remove'] = var10;
                var10 = function removePartition(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var5 = arg1;
                        var1 = _closure3_slot1;
                        var1 = var1.state;
                        var1 = var1.root;
                        var1 = var1[var5];
                        var3 = null;
                        if(!(var3 != var1)) { _fun0012_ip = 88; continue _fun0012 }
case 89:
                        var1 = var1.derived;
                        var4 = var1.length;
                        var1 = _closure3_slot1;
                        var3 = var1.state;
                        var1 = var3.root;
                        var3 = var3.derived;
                        var1 = delete var1[var5];
                        var1 = var3.numPartitions;
                        var1 = var1 - 1;
                        var3['numPartitions'] = var1;
                        var1 = var3.length;
                        var1 = var1 - var4;
                        var3['length'] = var1;
                        var1 = true;
                        _closure3_slot3 = var1;
                        return var1;
case 88:
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
case 0:
                            var3 = false;
                            _closure3_slot3 = var3;
                            var6 = _closure4_slot0;
                            var5 = _closure3_slot4;
                            var1 = undefined;
                            var4 = arg1;
                            var4 = var6.bind(var1)(var4, var5);
                            var4 = _closure3_slot3;
                            if(var4) { _fun0013_ip = 53; continue _fun0013 }
case 90:
                            return var3;
case 53:
                            var2 = _closure3_slot1;
                            var2 = var2.state;
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
case 91:
                {
case 92:
                    var14 = var8;
                    _closure3_slot5 = var14;
                    var14 = var13.bind(var6)();
                    _fun0005_ip = 91; continue _fun0005;
                }
case 43:
                var5 = _closure2_slot0;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 7;
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
                if(var1) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0005_ip = 95; continue _fun0005;
case 93:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
case 95:
                var1 = var5.bind(var6)(var7, var1);
                _closure3_slot1 = var1;
                var5 = {};
                var4 = {};
                var5['root'] = var4;
                var6 = {'numPartitions': 0, 'length': 0};
                var4 = 0;
                var7 = {};
                var6['memoized'] = var7;
                var5['derived'] = var6;
                var1['state'] = var5;
                var5 = null;
                var1['shadowState'] = var5;
                var1['nextVersion'] = var4;
                var1['mode'] = var3;
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
case 0:
                var4 = arg1;
                var6 = this;
                var1 = _closure1_slot10;
                var1 = var4[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 96; continue _fun0014 }
case 31:
                var3 = _closure1_slot10;
                var2 = var6.nextVersion;
                var2 = parseFloat(var2);
                var5 = var2 + 1;
                var6['nextVersion'] = var5;
                var4[var3] = var2;
                var1 = var2;
case 96:
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
case 0:
                var9 = arg1;
                var1 = new Array(0);
                var2 = this;
                var2 = var2.state;
                var8 = var2.root;
                var6 = var8;
                var2 = undefined;
                for(var3 in var6)
case 97:
                {
case 98:
                    var13 = var3;
                    var11 = var1.push;
                    var10 = {};
                    var10['partitionKey'] = var13;
                    var12 = var8[var13];
                    var12 = var12.root;
                    var12 = var9.bind(var2)(var12, var13);
                    var10['values'] = var12;
                    var10 = var11.bind(var1)(var10);
                    _fun0015_ip = 97; continue _fun0015;
                }
case 99:
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
case 0:
                var3 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var4 = var5.mode;
                var1 = 'typescript-libdiscore-dual-read';
                if(!(var1 !== var4)) { _fun0016_ip = 100; continue _fun0016 }
case 101:
                var1 = 'libdiscore';
                if(!(var1 !== var4)) { _fun0016_ip = 102; continue _fun0016 }
case 64:
                var1 = 'typescript';
                if(!(var1 !== var4)) { _fun0016_ip = 103; continue _fun0016 }
case 104:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var4);
                var6 = var7.assertNever;
                var4 = var5.mode;
                var4 = var6.bind(var7)(var4);
                var4 = undefined;
                _fun0016_ip = 50; continue _fun0016;
case 103:
                var1 = global;
                var7 = var1.Error;
                var1 = var7.prototype;
                var6 = Object.create(var1, {constructor: {value: var7}});
                var9 = 'This method should not be called in TypeScript mode.';
                var10 = var6;
                var1 = new var10[var7](var9, var8);
                var1 = var1 instanceof Object ? var1 : var6;
                throw var1;
case 102:
                var6 = var5.setKkvState;
                var1 = var6.bind;
                var4 = var1.bind(var6)(var5);
                _fun0016_ip = 50; continue _fun0016;
case 100:
                var1 = {};
                var6 = {};
                var1['root'] = var6;
                var6 = {'length': 0, 'numPartitions': 0};
                var8 = 0;
                var7 = {};
                var6['memoized'] = var7;
                var1['derived'] = var6;
                var5['shadowState'] = var1;
                var4 = function t(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = _closure3_slot0;
                    var4 = var3.shadowState;
                    var2 = null;
                    var4 = var2 != var4;
                    var2 = 'Shadow state must be set in dual-read mode before setting derived data.';
                    var2 = var5.bind(var1)(var4, var2);
                    var2 = arg1;
                    var3['shadowState'] = var2;
                    return var1;
                };
                var6 = global;
                var7 = var6.Symbol;
                var6 = undefined;
                var6 = var7.bind(var6)();
                var _closure3_slot1 = var6;
                var6 = {};
                var7 = {};
                var6['root'] = var7;
                var7 = {};
                var7['length'] = var8;
                var8 = {};
                var7['memoized'] = var8;
                var6['derived'] = var7;
                var _closure3_slot2 = var6;
                var6 = var5.addChangeListener;
                var2 = function() {
                    var4 = _closure3_slot0;
                    var7 = var4.shadowState;
                    var _closure4_slot0 = var7;
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var5 = var6[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var5);
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = 'Shadow state must be set in dual-read mode before running validation.';
                    var5 = var8.bind(var1)(var7, var5);
                    var5 = _closure1_slot0;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.runDualReadValidation;
                    var3 = var4.getName;
                    var4 = var3.bind(var4)();
                    var3 = 'Kkv';
                    var2 = function(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                            var9 = arg1;
                            var1 = _closure3_slot0;
                            var1 = var1.state;
                            var7 = var1.root;
                            var6 = global;
                            var2 = var6.Object;
                            var1 = var2.keys;
                            var16 = var1.bind(var2)(var7);
                            var3 = var6.Object;
                            var2 = var3.keys;
                            var1 = _closure4_slot0;
                            var1 = var1.root;
                            var4 = var2.bind(var3)(var1);
                            var1 = var16.length;
                            var3 = 0;
                            var2 = var3 < var1;
                            var1 = undefined;
                            var15 = null;
                            var14 = 0;
                            var13 = undefined;
                            var12 = undefined;
                            var11 = undefined;
                            var10 = undefined;
                            if(!var2) { _fun0017_ip = 105; continue _fun0017 }
case 47:
                            var17 = var16[var14];
                            var2 = var6.Object;
                            var2 = var2.prototype;
                            var19 = var2.hasOwnProperty;
                            var18 = var19.call;
                            var2 = _closure4_slot0;
                            var2 = var2.root;
                            var2 = var18.bind(var19)(var2, var17);
                            var19 = var7[var17];
                            if(var2) { _fun0017_ip = 14; continue _fun0017 }
case 106:
                            var2 = _closure3_slot2;
                            var2 = var9.bind(var1)(var19, var2);
                            _fun0017_ip = 107; continue _fun0017;
case 14:
                            var2 = _closure4_slot0;
                            var2 = var2.root;
                            var18 = var2[var17];
                            var2 = var19.derived;
                            var17 = var2.memoized;
                            var2 = _closure3_slot1;
                            var17 = var17[var2];
                            var2 = var18.derived;
                            var20 = var2.memoized;
                            var2 = _closure3_slot1;
                            var2 = var20[var2];
                            if(!(var15 != var17)) { _fun0017_ip = 108; continue _fun0017 }
case 109:
                            var13 = var19;
                            var12 = var18;
                            var11 = var17;
                            var10 = var2;
                            if(!(var11 !== var10)) { _fun0017_ip = 107; continue _fun0017 }
case 108:
                            var20 = var9.bind(var1)(var19, var18);
                            var22 = {};
                            var20 = var19.derived;
                            var21 = var20.memoized;
                            var20 = _closure3_slot1;
                            var21[var20] = var22;
                            var20 = var18.derived;
                            var21 = var20.memoized;
                            var20 = _closure3_slot1;
                            var21[var20] = var22;
                            var13 = var19;
                            var12 = var18;
                            var11 = var17;
                            var10 = var2;
case 107:
                            var14 = var14 + 1;
                            var2 = var16.length;
                            if(var14 < var2) { _fun0017_ip = 47; continue _fun0017 }
case 105:
                            var2 = var4.length;
                            var2 = var3 < var2;
                            var3 = 0;
                            if(!var2) { _fun0017_ip = 110; continue _fun0017 }
case 27:
                            var10 = var4[var3];
                            var2 = var6.Object;
                            var2 = var2.prototype;
                            var11 = var2.hasOwnProperty;
                            var2 = var11.call;
                            var2 = var2.bind(var11)(var7, var10);
                            if(var2) { _fun0017_ip = 111; continue _fun0017 }
case 112:
                            var2 = _closure4_slot0;
                            var2 = var2.root;
                            var10 = var2[var10];
                            var2 = _closure3_slot2;
                            var2 = var9.bind(var1)(var2, var10);
case 111:
                            var3 = var3 + 1;
                            var2 = var4.length;
                            if(var3 < var2) { _fun0017_ip = 27; continue _fun0017 }
case 110:
                            return var1;
                        }
                    };
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2 = var6.bind(var5)(var2);
case 50:
                var2 = var3.registerKkvStore;
                var1 = var5.getName;
                var1 = var1.bind(var5)();
                var2 = var2.bind(var3)(var1);
                var1 = var2.storeToken;
                var3 = var2.state;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
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
            var1 = var3.state;
            var1 = var1.derived;
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
case 0:
                var4 = this;
                var1 = var4.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0018_ip = 113; continue _fun0018 }
case 3:
                var3 = var4._derivedVersion;
                var2 = var2.derived;
                var2 = var2.memoized;
                var1 = var3.bind(var4)(var2);
case 113:
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
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0019_ip = 104; continue _fun0019 }
case 114:
                var3 = var2.root;
                var2 = arg2;
                var1 = var3[var2];
case 104:
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
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var7 = var2[var1];
                var6 = null;
                if(!(var6 != var7)) { _fun0020_ip = 115; continue _fun0020 }
case 101:
                var1 = new Array(0);
                var3 = _closure1_slot15;
                var5 = undefined;
                var2 = arg2;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0020_ip = 116; continue _fun0020 }
case 117:
                var8 = var3.value;
                var2 = var7.root;
                var8 = var2[var8];
                if(!(var6 != var8)) { _fun0020_ip = 41; continue _fun0020 }
case 42:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
case 41:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0020_ip = 117; continue _fun0020 }
case 116:
                return var1;
case 115:
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
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0021_ip = 80; continue _fun0021 }
case 101:
                var1 = _closure1_slot12;
                _fun0021_ip = 81; continue _fun0021;
case 80:
                var1 = var2.root;
case 81:
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
case 0:
                var7 = this;
                var1 = var7.state;
                var2 = var1.root;
                var1 = arg1;
                var1 = var2[var1];
                var3 = null;
                if(!(var3 != var1)) { _fun0022_ip = 116; continue _fun0022 }
case 101:
                var6 = var1.root;
                var1 = var1.derived;
                var4 = var1.memoized;
                var5 = var1.length;
                var1 = _closure1_slot11;
                var1 = var4[var1];
                if(!(var3 == var1)) { _fun0022_ip = 58; continue _fun0022 }
case 118:
                var3 = _closure1_slot11;
                var2 = {};
                var2['current'] = var6;
                var6 = var7._derivedVersion;
                var6 = var6.bind(var7)(var4);
                var2['version'] = var6;
                var2['length'] = var5;
                var4[var3] = var2;
                var1 = var2;
case 58:
                return var1;
case 116:
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
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = 0;
                if(var3) { _fun0023_ip = 98; continue _fun0023 }
case 114:
                var2 = var2.derived;
                var1 = var2.length;
case 98:
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
            var1 = var1.state;
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
            var1 = var1.state;
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
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0024_ip = 80; continue _fun0024 }
case 3:
                var1 = var2.root;
case 80:
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
case 0:
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var3 = var2.root;
                    var2 = arg1;
                    var2 = var3[var2];
                    var3 = null;
                    if(!(var3 != var2)) { _fun0025_ip = 58; continue _fun0025 }
case 89:
                    var6 = var2.root;
                    var2 = var2.derived;
                    var5 = var2.memoized;
                    var7 = _closure3_slot2;
                    var2 = var5[var7];
                    var4 = _closure1_slot14;
                    var3 = var4.call;
                    var3 = var3.bind(var4)(var5, var7);
                    if(var3) { _fun0025_ip = 119; continue _fun0025 }
case 120:
                    var4 = _closure3_slot1;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var6);
                    var4 = _closure3_slot2;
                    var5[var4] = var3;
                    var2 = var3;
case 119:
                    return var2;
case 58:
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
case 0:
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var5 = _closure1_slot14;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0026_ip = 121; continue _fun0026 }
case 113:
                    var6 = _closure3_slot1;
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var5 = var2.root;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = _closure3_slot2;
                    var4[var3] = var2;
                    var1 = var2;
case 121:
                    return var1;
                }
            };
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'setKkvState';
        var5['key'] = var7;
        var7 = function setKkvState(arg1) {
            var2 = arg1;
            var1 = this;
            var1['state'] = var2;
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
case 0:
                var9 = arg1;
                var1 = new Array(0);
                var2 = this;
                var2 = var2.state;
                var8 = var2.root;
                var6 = var8;
                var2 = null;
                for(var3 in var6)
case 97:
                {
case 98:
                    var13 = var3;
                    var10 = var8[var13];
                    var10 = var10.root;
                    var12 = var10[var9];
                    if(var2 == var12) { _fun0027_ip = 97; continue _fun0027 }
case 55:
                    var11 = var1.push;
                    var10 = {};
                    var10['partitionKey'] = var13;
                    var10['record'] = var12;
                    var10 = var11.bind(var1)(var10);
                    _fun0027_ip = 97; continue _fun0027;
                }
case 122:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[17] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/stores/kkv/KkvStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['KkvStore'] = var2;
    return var1;
})();