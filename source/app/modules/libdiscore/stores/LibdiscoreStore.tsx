// app/modules/libdiscore/stores/LibdiscoreStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var9 = var4.Symbol;
    var6 = 'version';
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var9 = var4.Object;
    var6 = var9.freeze;
    var4 = {};
    var4 = var6.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var8[var4];
    var6 = var5.bind(var1)(var4);
    var4 = var6.prototype;
    var5 = Object.create(var4, {constructor: {value: var6}});
    var13 = 'LibdiscoreStore';
    var14 = var5;
    var4 = new var14[var6](var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot10 = var4;
    var4 = function identity(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function SecondaryIndexMetadata(arg1, arg2, arg3, arg4, arg5) {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['type'] = var2;
            var2 = arg2;
            var3['kkvDatabase'] = var2;
            var2 = arg3;
            var3['k1key'] = var2;
            var2 = arg4;
            var3['k2key'] = var2;
            var2 = arg5;
            var3['shouldIndex'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'getK1Key';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var5 = var3.type;
                var1 = 'kvPartition';
                var2 = 'kv';
                if(!(var2 !== var5)) { _fun0005_ip = 3; continue _fun0005 }
case 39:
                var2 = var3.k1key;
                var5 = 'string';
                var2 = typeof var2;
                if(!(var5 !== var2)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var2 = var3.k1key;
                var2 = var2.bind(var3)(var4);
                _fun0005_ip = 34; continue _fun0005;
case 40:
                var3 = var3.k1key;
                var2 = var4[var3];
case 34:
                var1 = var2;
case 3:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'getK2Key';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var2 = var5.type;
                var1 = 'kv';
                if(!(var1 !== var2)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var2 = var5.k2key;
                _fun0006_ip = 44; continue _fun0006;
case 42:
                var2 = var5.k1key;
case 44:
                var4 = var5.shouldIndex;
                var1 = null;
                if(!(var1 != var4)) { _fun0006_ip = 11; continue _fun0006 }
case 45:
                var4 = var5.shouldIndex;
                var4 = var4.bind(var5)(var3);
                if(!var4) { _fun0006_ip = 46; continue _fun0006 }
case 11:
                if(!(var1 == var2)) { _fun0006_ip = 47; continue _fun0006 }
case 46:
                var1 = undefined;
                return var1;
case 47:
                var4 = 'string';
                var1 = typeof var2;
                if(!(var4 !== var1)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                _fun0006_ip = 50; continue _fun0006;
case 48:
                var1 = var3[var2];
case 50:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot12 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function KVDatabase(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['kkvDatabase'] = var2;
            var2 = arg2;
            var3['partition'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'set';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var5 = var1.kkvDatabase;
            var4 = var5.setRecord;
            var3 = var1.partition;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.kkvDatabase;
            var3 = var4.getRecord;
            var2 = var1.partition;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.kkvDatabase;
            var3 = var4.hasRecord;
            var2 = var1.partition;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getAllRecords';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.kkvDatabase;
            var2 = var3.getPartition;
            var1 = var1.partition;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'remove';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.kkvDatabase;
            var3 = var4.removeRecord;
            var2 = var1.partition;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var4 = var1.kkvDatabase;
            var3 = var4.removePartition;
            var2 = var1.partition;
            var2 = var3.bind(var4)(var2);
            var4 = var1.kkvDatabase;
            var3 = var4.setPartition;
            var2 = var1.partition;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'length';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.kkvDatabase;
            var2 = var3.partitionLength;
            var1 = var1.partition;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'version';
        var1['key'] = var6;
        var6 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var4 = var2.kkvDatabase;
                var3 = var4.partitionVersion;
                var1 = var2.partition;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var3 = var2.kkvDatabase;
                var2 = var3.version;
                var1 = var2.bind(var3)();
case 51:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'memoized';
        var1['key'] = var6;
        var5 = function value(arg1, arg2) {
            var1 = this;
            var5 = var1.kkvDatabase;
            var4 = var5.memoizedSinglePartition;
            var3 = var1.partition;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1['value'] = var5;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var4.bind(var1)();
    var _closure1_slot13 = var5;
    var4 = function() {
        var4 = function KKVDatabase(arg1) {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['nextVersion'] = var2;
            var2 = new Array(0);
            var3['secondaryIndexes'] = var2;
            var2 = var3.emptyState;
            var2 = var2.bind(var3)();
            var3['state'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot7;
        var1 = {};
        var2 = 'addSecondaryKVIndex';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            var1 = this;
            var4 = _closure2_slot0;
            var13 = var1.nextVersion;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var14 = var3;
            var2 = new var14[var4](var13, var12);
            var2 = var2 instanceof Object ? var2 : var3;
            var8 = _closure1_slot12;
            var3 = var8.prototype;
            var4 = Object.create(var3, {constructor: {value: var8}});
            var13 = 'kv';
            var11 = arg1;
            var10 = undefined;
            var9 = arg2;
            var14 = var4;
            var12 = var2;
            var3 = new var14[var8](var13, var12, var11, var10, var9, var8);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var1.secondaryIndexes;
            var1 = var3.push;
            var1 = var1.bind(var3)(var4);
            var1 = var2.intoKV;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(31);
        var2[0] = var1;
        var1 = {};
        var6 = 'addSecondaryKKVIndex';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var2 = this;
            var4 = _closure2_slot0;
            var13 = var2.nextVersion;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var14 = var3;
            var1 = new var14[var4](var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var8 = _closure1_slot12;
            var3 = var8.prototype;
            var4 = Object.create(var3, {constructor: {value: var8}});
            var13 = 'kkv';
            var11 = arg1;
            var10 = arg2;
            var9 = arg3;
            var14 = var4;
            var12 = var1;
            var3 = new var14[var8](var13, var12, var11, var10, var9, var8);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var2.secondaryIndexes;
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'intoKV';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var4 = _closure1_slot13;
                var2 = null;
                var2 = var2 != var1;
                var3 = 'kvPartition';
                if(!var2) { _fun0008_ip = 38; continue _fun0008 }
case 53:
                var3 = var1;
case 38:
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var6 = this;
                var7 = var2;
                var5 = var3;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'version';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.state;
            var1 = var1.version;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'partitionVersion';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var1 = var3.state;
                var2 = var1.root;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 54; continue _fun0009 }
case 39:
                var2 = var3._derivedVersion;
                var1 = var1.derived;
                var1 = var1.memoized;
                var1 = var2.bind(var3)(var1);
                _fun0009_ip = 55; continue _fun0009;
case 54:
                var2 = var3.version;
                var1 = var2.bind(var3)();
case 55:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'hasPartition';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var1 = var1.state;
            var2 = var1.root;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'hasRecord';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var3 = var2[var1];
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0010_ip = 56; continue _fun0010 }
case 52:
                var4 = var3.root;
                var3 = arg2;
                var1 = var4[var3];
case 56:
                var1 = var2 != var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'getRecord';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0011_ip = 56; continue _fun0011 }
case 52:
                var3 = var2.root;
                var2 = arg2;
                var1 = var3[var2];
case 56:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getManyRecords';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var7 = var2[var1];
                var6 = null;
                if(!(var6 != var7)) { _fun0012_ip = 57; continue _fun0012 }
case 39:
                var1 = new Array(0);
                var3 = _closure1_slot16;
                var5 = undefined;
                var2 = arg2;
                var4 = var3.bind(var5)(var2);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if(var2) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                var8 = var3.value;
                var2 = var7.root;
                var8 = var2[var8];
                if(!(var6 != var8)) { _fun0012_ip = 48; continue _fun0012 }
case 60:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
case 48:
                var8 = var4.bind(var5)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0012_ip = 59; continue _fun0012 }
case 58:
                return var1;
case 57:
                var1 = new Array(0);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'getPartition';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 == var2)) { _fun0013_ip = 61; continue _fun0013 }
case 39:
                var1 = _closure1_slot9;
                _fun0013_ip = 62; continue _fun0013;
case 61:
                var1 = var2.root;
case 62:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getAllPartitions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.state;
            var1 = var1.root;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getPartitionKeys';
        var1['key'] = var6;
        var6 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = this;
            var1 = var1.state;
            var1 = var1.root;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'partitionLength';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = 0;
                if(var3) { _fun0014_ip = 63; continue _fun0014 }
case 52:
                var2 = var2.derived;
                var1 = var2.length;
case 63:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'length';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.state;
            var1 = var1.derived;
            var1 = var1.length;
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'numPartitions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.state;
            var1 = var1.derived;
            var1 = var1.numPartitions;
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'getNullablePartition';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = this;
                var1 = var1.state;
                var2 = var1.root;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                if(var3) { _fun0015_ip = 61; continue _fun0015 }
case 7:
                var1 = var2.root;
case 61:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = '_derivedVersion';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var1 = _closure1_slot8;
                var1 = var4[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0016_ip = 41; continue _fun0016 }
case 35:
                var3 = _closure1_slot8;
                var2 = var5.nextVersion;
                var2 = var2.bind(var5)();
                var4[var3] = var2;
                var1 = var2;
case 41:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'mapPartitions';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var9 = arg1;
                var1 = new Array(0);
                var2 = this;
                var2 = var2.state;
                var8 = var2.root;
                var6 = var8;
                var2 = undefined;
                for(var3 in var6)
case 64:
                {
case 63:
                    var13 = var3;
                    var11 = var1.push;
                    var10 = {};
                    var10['partitionKey'] = var13;
                    var12 = var8[var13];
                    var12 = var12.root;
                    var12 = var9.bind(var2)(var12, var13);
                    var10['values'] = var12;
                    var10 = var11.bind(var1)(var10);
                    _fun0017_ip = 64; continue _fun0017;
                }
case 65:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[17] = var1;
        var1 = {};
        var6 = 'memoizedPartition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var6 = arg1;
                var2 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var6;
                var3 = global;
                var3 = var3.Symbol;
                var5 = undefined;
                var3 = var3.bind(var5)();
                var _closure3_slot2 = var3;
                if(!(var5 === var2)) { _fun0018_ip = 66; continue _fun0018 }
case 67:
                var4 = '';
                var3 = {};
                var2 = var6.bind(var5)(var4, var3);
case 66:
                var _closure3_slot3 = var2;
                var1 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var7 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.root;
                        var2 = var2[var7];
                        var3 = null;
                        if(!(var3 != var2)) { _fun0019_ip = 17; continue _fun0019 }
case 68:
                        var6 = var2.root;
                        var2 = var2.derived;
                        var5 = var2.memoized;
                        var8 = _closure3_slot2;
                        var2 = var5[var8];
                        var3 = global;
                        var3 = var3.Object;
                        var4 = var3.hasOwnProperty;
                        var3 = var4.call;
                        var3 = var3.bind(var4)(var5, var8);
                        if(var3) { _fun0019_ip = 69; continue _fun0019 }
case 65:
                        var4 = _closure3_slot1;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var7, var6);
                        var4 = _closure3_slot2;
                        var5[var4] = var3;
                        var2 = var3;
case 69:
                        return var2;
case 17:
                        var1 = _closure3_slot3;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1['value'] = var6;
        var2[18] = var1;
        var1 = {};
        var6 = 'memoizedSinglePartition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg2;
                var2 = arg3;
                var3 = this;
                var _closure3_slot0 = var3;
                var3 = arg1;
                var _closure3_slot1 = var3;
                var _closure3_slot2 = var5;
                var3 = global;
                var3 = var3.Symbol;
                var4 = undefined;
                var3 = var3.bind(var4)();
                var _closure3_slot3 = var3;
                if(!(var4 === var2)) { _fun0020_ip = 59; continue _fun0020 }
case 51:
                var3 = _closure1_slot9;
                var2 = var5.bind(var4)(var3);
case 59:
                var _closure3_slot4 = var2;
                var1 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var3 = var2.root;
                        var2 = _closure3_slot1;
                        var2 = var3[var2];
                        var3 = null;
                        if(!(var3 != var2)) { _fun0021_ip = 17; continue _fun0021 }
case 52:
                        var6 = var2.root;
                        var2 = var2.derived;
                        var5 = var2.memoized;
                        var7 = _closure3_slot3;
                        var2 = var5[var7];
                        var3 = global;
                        var3 = var3.Object;
                        var4 = var3.hasOwnProperty;
                        var3 = var4.call;
                        var3 = var3.bind(var4)(var5, var7);
                        if(var3) { _fun0021_ip = 69; continue _fun0021 }
case 13:
                        var4 = _closure3_slot2;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var6);
                        var4 = _closure3_slot3;
                        var5[var4] = var3;
                        var2 = var3;
case 69:
                        return var2;
case 17:
                        var1 = _closure3_slot4;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1['value'] = var6;
        var2[19] = var1;
        var1 = {};
        var6 = 'memoized';
        var1['key'] = var6;
        var6 = function value(arg1) {
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
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var1 = var1.derived;
                    var4 = var1.memoized;
                    var6 = _closure3_slot2;
                    var1 = var4[var6];
                    var2 = global;
                    var2 = var2.Object;
                    var5 = var2.hasOwnProperty;
                    var2 = var5.call;
                    var2 = var2.bind(var5)(var4, var6);
                    if(var2) { _fun0022_ip = 70; continue _fun0022 }
case 59:
                    var6 = _closure3_slot1;
                    var2 = _closure3_slot0;
                    var2 = var2.state;
                    var5 = var2.root;
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var3 = _closure3_slot2;
                    var4[var3] = var2;
                    var1 = var2;
case 70:
                    return var1;
                }
            };
            return var1;
        };
        var1['value'] = var6;
        var2[20] = var1;
        var1 = {};
        var6 = 'emptyState';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var1 = {};
            var2 = {};
            var1['root'] = var2;
            var2 = var3.nextVersion;
            var2 = var2.bind(var3)();
            var1['version'] = var2;
            var2 = {'length': 0, 'numPartitions': 0};
            var3 = {};
            var2['memoized'] = var3;
            var1['derived'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[21] = var1;
        var1 = {};
        var6 = 'emptyPartitionState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var1 = {};
                var3 = {};
                var1['root'] = var3;
                var3 = null;
                if(!(var3 == var2)) { _fun0023_ip = 68; continue _fun0023 }
case 43:
                var3 = var4.nextVersion;
                var2 = var3.bind(var4)();
case 68:
                var1['version'] = var2;
                var2 = {};
                var3 = 0;
                var2['length'] = var3;
                var3 = {};
                var2['memoized'] = var3;
                var1['derived'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[22] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = this;
                var2 = var1.emptyState;
                var2 = var2.bind(var1)();
                var1['state'] = var2;
                var3 = _closure1_slot16;
                var2 = var1.secondaryIndexes;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0024_ip = 71; continue _fun0024 }
case 72:
                var2 = var3.value;
                var5 = var2.kkvDatabase;
                var2 = var5.clear;
                var2 = var2.bind(var5)();
                var5 = var4.bind(var1)();
                var2 = var5.done;
                var3 = var5;
                if(!var2) { _fun0024_ip = 72; continue _fun0024 }
case 71:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[23] = var1;
        var1 = {};
        var6 = 'removePartition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var3 = this;
                var1 = null;
                if(!(var5 == var1)) { _fun0025_ip = 53; continue _fun0025 }
case 73:
                var2 = var3.nextVersion;
                var5 = var2.bind(var3)();
case 53:
                var2 = var3.state;
                var2 = var2.root;
                var2 = var2[var6];
                var1 = var1 != var2;
                if(!var1) { _fun0025_ip = 74; continue _fun0025 }
case 75:
                var8 = var3.updateSecondaryIndexes;
                var4 = global;
                var9 = var4.Object;
                var7 = var9.values;
                var4 = var2.root;
                var7 = var7.bind(var9)(var4);
                var4 = undefined;
                var4 = var8.bind(var3)(var4, var7, var5);
                var4 = var3.state;
                var4 = var4.root;
                var4 = delete var4[var6];
                var4 = var3.state;
                var6 = var4.derived;
                var4 = var6.numPartitions;
                var4 = var4 - 1;
                var6['numPartitions'] = var4;
                var4 = var3.state;
                var4['version'] = var5;
                var4 = var3.state;
                var5 = var4.derived;
                var4 = {};
                var5['memoized'] = var4;
                var3 = var3.state;
                var3 = var3.derived;
                var4 = var3.length;
                var2 = var2.derived;
                var2 = var2.length;
                var2 = var4 - var2;
                var3['length'] = var2;
                var1 = true;
case 74:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[24] = var1;
        var1 = {};
        var6 = 'removeRecord';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var7 = arg2;
                var4 = arg3;
                var2 = this;
                var1 = null;
                if(!(var4 == var1)) { _fun0026_ip = 38; continue _fun0026 }
case 76:
                var3 = var2.nextVersion;
                var4 = var3.bind(var2)();
case 38:
                var3 = var2.state;
                var3 = var3.root;
                var3 = var3[var5];
                if(!(var1 != var3)) { _fun0026_ip = 77; continue _fun0026 }
case 75:
                var6 = var3.root;
                var6 = var6[var7];
                var1 = var1 != var6;
                if(!var1) { _fun0026_ip = 78; continue _fun0026 }
case 3:
                var9 = var2.updateSecondaryIndexes;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = undefined;
                var6 = var9.bind(var2)(var6, var8, var4);
                var6 = var3.root;
                var6 = delete var6[var7];
                var7 = var3.derived;
                var6 = var7.length;
                var6 = var6 - 1;
                var7['length'] = var6;
                var6 = var3.derived;
                var7 = var6.length;
                var6 = 0;
                if(!(var6 !== var7)) { _fun0026_ip = 79; continue _fun0026 }
case 80:
                var6 = var3.derived;
                var3 = {};
                var6['memoized'] = var3;
                _fun0026_ip = 81; continue _fun0026;
case 79:
                var3 = var2.state;
                var3 = var3.root;
                var3 = delete var3[var5];
                var3 = var2.state;
                var5 = var3.derived;
                var3 = var5.numPartitions;
                var3 = var3 - 1;
                var5['numPartitions'] = var3;
case 81:
                var3 = var2.state;
                var5 = var3.derived;
                var3 = var5.length;
                var3 = var3 - 1;
                var5['length'] = var3;
                var3 = var2.state;
                var3['version'] = var4;
                var2 = var2.state;
                var3 = var2.derived;
                var2 = {};
                var3['memoized'] = var2;
                var1 = true;
case 78:
                return var1;
case 77:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[25] = var1;
        var1 = {};
        var6 = 'updateRecord';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var6 = arg2;
                var4 = arg5;
                var3 = this;
                var2 = null;
                if(!(var4 == var2)) { _fun0027_ip = 38; continue _fun0027 }
case 76:
                var1 = var3.nextVersion;
                var4 = var1.bind(var3)();
case 38:
                var1 = var3.state;
                var1 = var1.root;
                var1 = var1[var5];
                if(!(var2 != var1)) { _fun0027_ip = 82; continue _fun0027 }
case 75:
                var1 = var3.state;
                var1 = var1.root;
                var1 = var1[var5];
                var1 = var1.root;
                var1 = var1[var6];
                if(!(var2 != var1)) { _fun0027_ip = 83; continue _fun0027 }
case 60:
                var1 = var3.state;
                var1 = var1.root;
                var1 = var1[var5];
                var1 = var1.root;
                var9 = var1[var6];
                var7 = {};
                var12 = var7;
                var11 = var9;
                var1 = copyDataProperties(var12, var11);
                var11 = arg3;
                var12 = var7;
                var1 = copyDataProperties(var12, var11);
                var2 = arg4;
                var1 = undefined;
                var2 = var2.bind(var1)(var7);
                var8 = var3.updateSecondaryIndexes;
                var7 = new Array(1);
                var7[0] = var2;
                var1 = new Array(1);
                var1[0] = var9;
                var1 = var8.bind(var3)(var7, var1, var4);
                var1 = var3.touchPartition;
                var1 = var1.bind(var3)(var5, var4);
                var1 = var1.root;
                var1[var6] = var2;
                var1 = true;
                return var1;
case 83:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Record ';
                var1 = ' does not exist in partition ';
                var12 = var4.bind(var2)(var6, var1, var5);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
case 82:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Partition ';
                var1 = ' does not exist';
                var12 = var4.bind(var2)(var5, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var6;
        var2[26] = var1;
        var1 = {};
        var6 = 'touchPartition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var2 = arg1;
                var4 = arg2;
                var1 = this;
                var5 = null;
                if(!(var4 == var5)) { _fun0028_ip = 53; continue _fun0028 }
case 73:
                var3 = var1.nextVersion;
                var4 = var3.bind(var1)();
case 53:
                var3 = var1.state;
                var3 = var3.root;
                var3 = var3[var2];
                if(!(var5 != var3)) { _fun0028_ip = 15; continue _fun0028 }
case 41:
                var3 = var1.state;
                var3 = var3.root;
                var3 = var3[var2];
                var3['version'] = var4;
                var3 = var1.state;
                var3 = var3.root;
                var3 = var3[var2];
                var5 = var3.derived;
                var3 = {};
                var5['memoized'] = var3;
                _fun0028_ip = 84; continue _fun0028;
case 15:
                var3 = var1.state;
                var5 = var3.root;
                var3 = var1.emptyPartitionState;
                var3 = var3.bind(var1)(var4);
                var5[var2] = var3;
                var3 = var1.state;
                var5 = var3.derived;
                var3 = var5.numPartitions;
                var3 = var3 + 1;
                var5['numPartitions'] = var3;
case 84:
                var3 = var1.state;
                var3['version'] = var4;
                var3 = var1.state;
                var4 = var3.derived;
                var3 = {};
                var4['memoized'] = var3;
                var1 = var1.state;
                var1 = var1.root;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[27] = var1;
        var1 = {};
        var6 = 'setRecord';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var3 = arg2;
                var1 = arg3;
                var4 = arg4;
                var5 = this;
                var7 = null;
                if(!(var4 == var7)) { _fun0029_ip = 38; continue _fun0029 }
case 76:
                var2 = var5.nextVersion;
                var4 = var2.bind(var5)();
case 38:
                var6 = var5.touchPartition;
                var2 = arg1;
                var2 = var6.bind(var5)(var2, var4);
                var6 = var2.root;
                var6 = var6[var3];
                if(!(var7 == var6)) { _fun0029_ip = 85; continue _fun0029 }
case 40:
                var7 = var2.derived;
                var6 = var7.length;
                var6 = var6 + 1;
                var7['length'] = var6;
                var6 = var5.state;
                var7 = var6.derived;
                var6 = var7.length;
                var6 = var6 + 1;
                var7['length'] = var6;
case 85:
                var2 = var2.root;
                var2[var3] = var1;
                var3 = var5.updateSecondaryIndexes;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = undefined;
                var1 = var3.bind(var5)(var2, var1, var4);
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[28] = var1;
        var1 = {};
        var6 = 'setPartition';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var6 = arg1;
                var4 = arg2;
                var5 = arg3;
                var1 = this;
                var2 = null;
                if(!(var5 == var2)) { _fun0030_ip = 38; continue _fun0030 }
case 76:
                var2 = var1.nextVersion;
                var5 = var2.bind(var1)();
case 38:
                var2 = var1.removePartition;
                var2 = var2.bind(var1)(var6, var5);
                var2 = global;
                var7 = var2.Object;
                var3 = var7.keys;
                var3 = var3.bind(var7)(var4);
                var3 = var3.length;
                var7 = 0;
                if(!(var7 !== var3)) { _fun0030_ip = 86; continue _fun0030 }
case 47:
                var8 = var1.updateSecondaryIndexes;
                var7 = var2.Object;
                var2 = var7.values;
                var7 = var2.bind(var7)(var4);
                var2 = undefined;
                var2 = var8.bind(var1)(var7, var2, var5);
                var2 = var1.touchPartition;
                var2 = var2.bind(var1)(var6, var5);
                var2['root'] = var4;
                var2 = var2.derived;
                var2['length'] = var3;
                var1 = var1.state;
                var2 = var1.derived;
                var1 = var2.length;
                var1 = var1 + var3;
                var2['length'] = var1;
                var1 = true;
                return var1;
case 86:
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[29] = var1;
        var1 = {};
        var6 = 'updateSecondaryIndexes';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var18 = arg1;
                var17 = arg2;
                var16 = arg3;
                var3 = _closure1_slot16;
                var1 = this;
                var2 = var1.secondaryIndexes;
                var1 = undefined;
                var14 = var3.bind(var1)(var2);
                var3 = var14.bind(var1)();
                var2 = var3.done;
                var13 = null;
                var12 = var3;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(var2) { _fun0031_ip = 87; continue _fun0031 }
case 3:
                var26 = var12.value;
                var23 = var9;
                var22 = var8;
                if(!(var1 !== var17)) { _fun0031_ip = 88; continue _fun0031 }
case 89:
                var2 = _closure1_slot16;
                var20 = var2.bind(var1)(var17);
                var21 = var20.bind(var1)();
                var2 = var21.done;
                var19 = var21;
                var11 = var19;
                var10 = var20;
                var23 = var9;
                var22 = var8;
                if(var2) { _fun0031_ip = 88; continue _fun0031 }
case 90:
                var21 = var19.value;
                var2 = var26.getK1Key;
                var24 = var2.bind(var26)(var21);
                var2 = var26.getK2Key;
                var21 = var2.bind(var26)(var21);
                var2 = var13 != var24;
                if(!var2) { _fun0031_ip = 91; continue _fun0031 }
case 19:
                var2 = var13 != var21;
case 91:
                if(!var2) { _fun0031_ip = 92; continue _fun0031 }
case 93:
                var25 = var26.kkvDatabase;
                var2 = var25.removeRecord;
                var2 = var2.bind(var25)(var24, var21, var16);
case 92:
                var25 = var20.bind(var1)();
                var2 = var25.done;
                var19 = var25;
                var11 = var19;
                var10 = var20;
                var23 = var24;
                var22 = var21;
                if(!var2) { _fun0031_ip = 90; continue _fun0031 }
case 88:
                var21 = var5;
                var20 = var4;
                var19 = var3;
                if(!(var1 !== var18)) { _fun0031_ip = 94; continue _fun0031 }
case 95:
                var2 = _closure1_slot16;
                var25 = var2.bind(var1)(var18);
                var27 = var25.bind(var1)();
                var2 = var27.done;
                var24 = var27;
                var7 = var24;
                var6 = var25;
                var21 = var5;
                var20 = var4;
                var19 = var3;
                if(var2) { _fun0031_ip = 94; continue _fun0031 }
case 96:
                var29 = var24.value;
                var2 = var26.getK1Key;
                var28 = var2.bind(var26)(var29);
                var2 = var26.getK2Key;
                var27 = var2.bind(var26)(var29);
                var2 = var13 != var28;
                if(!var2) { _fun0031_ip = 97; continue _fun0031 }
case 98:
                var2 = var13 != var27;
case 97:
                if(!var2) { _fun0031_ip = 99; continue _fun0031 }
case 100:
                var30 = var26.kkvDatabase;
                var2 = var30.setRecord;
                var35 = var30;
                var34 = var28;
                var33 = var27;
                var32 = var29;
                var31 = var16;
                var2 = var35[var2](var34, var33, var32, var31, var30);
case 99:
                var30 = var25.bind(var1)();
                var2 = var30.done;
                var24 = var30;
                var7 = var24;
                var6 = var25;
                var21 = var29;
                var20 = var28;
                var19 = var27;
                if(!var2) { _fun0031_ip = 96; continue _fun0031 }
case 94:
                var24 = var14.bind(var1)();
                var2 = var24.done;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                var12 = var24;
                var9 = var23;
                var8 = var22;
                if(!var2) { _fun0031_ip = 3; continue _fun0031 }
case 87:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[30] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot14 = var4;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Store;
    var2 = function(arg1) {
        var4 = function LibdiscoreStore(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var8 = arg1;
                var4 = arguments[1];
                var6 = this;
                var _closure3_slot0 = var8;
                var5 = undefined;
                if(!(var4 === var5)) { _fun0032_ip = 53; continue _fun0032 }
case 43:
                var4 = 'typescript';
case 53:
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var5;
                var _closure3_slot3 = var5;
                var9 = _closure1_slot6;
                var1 = _closure2_slot0;
                var1 = var9.bind(var5)(var6, var1);
                var1 = {};
                _closure3_slot2 = var1;
                var9 = 'typescript';
                if(!(var9 !== var4)) { _fun0032_ip = 101; continue _fun0032 }
case 102:
                var9 = 'typescript-libdiscore-dual-read';
                if(!(var9 === var4)) { _fun0032_ip = 103; continue _fun0032 }
case 101:
                var13 = function _loop() {
                    var4 = _closure3_slot0;
                    var3 = _closure3_slot3;
                    var3 = var4[var3];
                    var _closure4_slot0 = var3;
                    var3 = _closure3_slot2;
                    var2 = _closure3_slot3;
                    var1 = function(arg1) {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                            var3 = _closure3_slot1;
                            var4 = var3.wrappedState;
                            var1 = null;
                            if(!(var4 == var1)) { _fun0033_ip = 104; continue _fun0033 }
case 105:
                            var4 = _closure3_slot1;
                            var1 = var4.stateWrapper;
                            var1 = var1.bind(var4)();
                            var3['wrappedState'] = var1;
case 104:
                            var1 = _closure3_slot1;
                            var3 = var1._nextVersion;
                            var6 = _closure4_slot0;
                            var1 = _closure3_slot1;
                            var5 = var1.wrappedState;
                            var1 = undefined;
                            var4 = arg1;
                            var4 = var6.bind(var1)(var4, var5);
                            var2 = _closure3_slot1;
                            var2 = var2._nextVersion;
                            if(!(var2 !== var3)) { _fun0033_ip = 50; continue _fun0033 }
case 106:
                            return var1;
case 50:
                            var1 = false;
                            return var1;
                        }
                    };
                    var3[var2] = var1;
                    var1 = undefined;
                    return var1;
                };
                var11 = var8;
                for(var8 in var11)
case 70:
                {
case 57:
                    var14 = var8;
                    _closure3_slot3 = var14;
                    var14 = var13.bind(var5)();
                    _fun0032_ip = 70; continue _fun0032;
                }
case 103:
                var3 = _closure2_slot0;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 6;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var11 = new Array(2);
                var11[0] = var8;
                var11[1] = var1;
                var1 = _closure1_slot4;
                var10 = var1.bind(var5)(var3);
                var3 = _closure1_slot3;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0032_ip = 107; continue _fun0032 }
case 20:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0032_ip = 108; continue _fun0032;
case 107:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot4;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 108:
                var1 = var3.bind(var5)(var6, var1);
                _closure3_slot1 = var1;
                var1['mode'] = var4;
                var2 = 0;
                var1['_nextVersion'] = var2;
                var2 = global;
                var3 = var2.Map;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var18 = var5;
                var3 = new var18[var3](var17);
                var3 = var3 instanceof Object ? var3 : var5;
                var1['recordCreators'] = var3;
                var3 = null;
                var1['wrappedState'] = var3;
                var1['shadowDatabases'] = var3;
                var1['shadowRecordCreators'] = var3;
                var3 = {};
                var5 = {};
                var3['databases'] = var5;
                var1['state'] = var3;
                var3 = 'typescript-libdiscore-dual-read';
                if(!(var3 === var4)) { _fun0032_ip = 109; continue _fun0032 }
case 110:
                var3 = {};
                var1['shadowDatabases'] = var3;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var18 = var3;
                var2 = new var18[var2](var17);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['shadowRecordCreators'] = var2;
case 109:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'getMode';
        var5['key'] = var1;
        var1 = function getMode() {
            var1 = this;
            var1 = var1.mode;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'connectWithLibdiscore';
        var5['key'] = var7;
        var7 = function connectWithLibdiscore(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var2 = var3.mode;
                var1 = 'typescript';
                if(!(var1 !== var2)) { _fun0034_ip = 111; continue _fun0034 }
case 112:
                var2 = var4.connectStore;
                var1 = {};
                var5 = var3.getName;
                var5 = var5.bind(var3)();
                var1['storeName'] = var5;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.keys;
                var5 = var3.state;
                var5 = var5.databases;
                var7 = var6.bind(var7)(var5);
                var6 = var7.map;
                var5 = function(arg1) {
                    var1 = {};
                    var2 = arg1;
                    var1['name'] = var2;
                    var2 = 'kkv';
                    var1['type'] = var2;
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
                var1['databases'] = var5;
                var2 = var2.bind(var4)(var1);
                var1 = var2.storeToken;
                var4 = var2.initialState;
                var2 = var3.applyChanges;
                var2 = var2.bind(var3)(var4);
                var4 = var3.mode;
                var2 = 'typescript-libdiscore-dual-read';
                if(!(var2 === var4)) { _fun0034_ip = 113; continue _fun0034 }
case 114:
                var2 = var3.setupDualReadValidation;
                var2 = var2.bind(var3)();
case 113:
                return var1;
case 111:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var8 = 'connectWithLibdiscore should not be called in TypeScript mode.';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'setupDualReadValidation';
        var5['key'] = var7;
        var7 = function setupDualReadValidation() {
            var4 = this;
            var _closure3_slot0 = var4;
            var _closure3_slot1 = var4;
            var1 = global;
            var5 = var1.Symbol;
            var1 = undefined;
            var3 = 'didValidatePartition';
            var3 = var5.bind(var1)(var3);
            var _closure3_slot2 = var3;
            var3 = {};
            var5 = {};
            var3['root'] = var5;
            var5 = {};
            var6 = 0;
            var5['length'] = var6;
            var6 = {};
            var5['memoized'] = var6;
            var3['derived'] = var5;
            var _closure3_slot3 = var3;
            var3 = var4.addChangeListener;
            var2 = function() {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var3 = var2.shadowDatabases;
                    var _closure4_slot0 = var3;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0035_ip = 115; continue _fun0035 }
case 53:
                    var7 = function _loop2() {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var1 = var1.state;
                            var5 = var1.databases;
                            var2 = _closure4_slot1;
                            var6 = var5[var2];
                            var5 = _closure4_slot0;
                            var2 = _closure4_slot1;
                            var5 = var5[var2];
                            var2 = null;
                            if(!(var2 != var5)) { _fun0036_ip = 116; continue _fun0036 }
case 54:
                            var2 = var6.getAllPartitions;
                            var2 = var2.bind(var6)();
                            var _closure5_slot0 = var2;
                            var2 = var5.getAllPartitions;
                            var2 = var2.bind(var5)();
                            var _closure5_slot1 = var2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 7;
                            var5 = var5[var2];
                            var2 = undefined;
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.runDualReadValidation;
                            var5 = _closure3_slot1;
                            var4 = var5.getName;
                            var10 = var4.bind(var5)();
                            var9 = _closure4_slot1;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var8 = var4.concat;
                            var5 = '';
                            var4 = ':';
                            var5 = var8.bind(var5)(var10, var4, var9);
                            var4 = 'Kkv';
                            var3 = function(arg1) {
                                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                                    var8 = arg1;
                                    var7 = global;
                                    var3 = var7.Object;
                                    var2 = var3.keys;
                                    var1 = _closure5_slot0;
                                    var14 = var2.bind(var3)(var1);
                                    var3 = var7.Object;
                                    var2 = var3.keys;
                                    var1 = _closure5_slot1;
                                    var5 = var2.bind(var3)(var1);
                                    var1 = var14.length;
                                    var4 = 0;
                                    var2 = var4 < var1;
                                    var1 = undefined;
                                    var13 = null;
                                    var12 = 0;
                                    var11 = undefined;
                                    var10 = undefined;
                                    var9 = undefined;
                                    if(!var2) { _fun0037_ip = 117; continue _fun0037 }
case 49:
                                    var15 = var14[var12];
                                    var2 = _closure5_slot0;
                                    var17 = var2[var15];
                                    var2 = var7.Object;
                                    var2 = var2.prototype;
                                    var18 = var2.hasOwnProperty;
                                    var16 = var18.call;
                                    var2 = _closure5_slot1;
                                    var2 = var16.bind(var18)(var2, var15);
                                    if(var2) { _fun0037_ip = 114; continue _fun0037 }
case 118:
                                    var2 = _closure3_slot3;
                                    var2 = var8.bind(var1)(var17, var2);
                                    _fun0037_ip = 119; continue _fun0037;
case 114:
                                    var2 = _closure5_slot1;
                                    var16 = var2[var15];
                                    var2 = var17.derived;
                                    var2 = var2.memoized;
                                    var18 = _closure3_slot2;
                                    var15 = var2[var18];
                                    var2 = var16.derived;
                                    var2 = var2.memoized;
                                    var2 = var2[var18];
                                    if(!(var13 != var15)) { _fun0037_ip = 120; continue _fun0037 }
case 23:
                                    var11 = var16;
                                    var10 = var15;
                                    var9 = var2;
                                    if(!(var10 !== var9)) { _fun0037_ip = 119; continue _fun0037 }
case 120:
                                    var18 = var8.bind(var1)(var17, var16);
                                    var19 = {};
                                    var17 = var17.derived;
                                    var17 = var17.memoized;
                                    var18 = _closure3_slot2;
                                    var17[var18] = var19;
                                    var17 = var16.derived;
                                    var17 = var17.memoized;
                                    var17[var18] = var19;
                                    var11 = var16;
                                    var10 = var15;
                                    var9 = var2;
case 119:
                                    var12 = var12 + 1;
                                    var2 = var14.length;
                                    if(var12 < var2) { _fun0037_ip = 49; continue _fun0037 }
case 117:
                                    var2 = var5.length;
                                    var2 = var4 < var2;
                                    var4 = 0;
                                    if(!var2) { _fun0037_ip = 121; continue _fun0037 }
case 122:
                                    var9 = var5[var4];
                                    var2 = var7.Object;
                                    var2 = var2.prototype;
                                    var11 = var2.hasOwnProperty;
                                    var10 = var11.call;
                                    var2 = _closure5_slot0;
                                    var2 = var10.bind(var11)(var2, var9);
                                    if(var2) { _fun0037_ip = 123; continue _fun0037 }
case 124:
                                    var2 = _closure5_slot1;
                                    var9 = var2[var9];
                                    var2 = _closure3_slot3;
                                    var2 = var8.bind(var1)(var2, var9);
case 123:
                                    var4 = var4 + 1;
                                    var2 = var5.length;
                                    if(var4 < var2) { _fun0037_ip = 122; continue _fun0037 }
case 121:
                                    return var1;
                                }
                            };
                            var3 = var6.bind(var7)(var5, var4, var3);
                            return var2;
case 116:
                            var3 = _closure1_slot10;
                            var2 = var3.warn;
                            var6 = _closure4_slot1;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var4 = 'Shadow database ';
                            var1 = ' not found for dual-read validation';
                            var1 = var5.bind(var4)(var6, var1);
                            var1 = var2.bind(var3)(var1);
                            var1 = 1;
                            return var1;
                        }
                    };
                    var1 = _closure3_slot0;
                    var1 = var1.state;
                    var5 = var1.databases;
                    var1 = undefined;
                    for(var2 in var5)
case 8:
                    {
case 125:
                        var9 = var2;
                        var _closure4_slot1 = var9;
                        var9 = var7.bind(var1)();
                        _fun0035_ip = 8; continue _fun0035;
                    }
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'addKKVDatabase';
        var5['key'] = var7;
        var7 = function addKKVDatabase(arg1, arg2) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = this;
                var7 = _closure1_slot14;
                var3 = var2.nextVersion;
                var1 = var3.bind;
                var12 = var1.bind(var3)(var2);
                var3 = var7.prototype;
                var3 = Object.create(var3, {constructor: {value: var7}});
                var13 = var3;
                var1 = new var13[var7](var12, var11);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var2.state;
                var3 = var3.databases;
                var3[var5] = var1;
                var9 = var2.recordCreators;
                var8 = var9.set;
                var7 = null;
                var3 = var4;
                if(!(var7 == var4)) { _fun0038_ip = 106; continue _fun0038 }
case 71:
                var3 = _closure1_slot11;
case 106:
                var3 = var8.bind(var9)(var5, var3);
                var3 = var2.shadowDatabases;
                if(!(var7 != var3)) { _fun0038_ip = 126; continue _fun0038 }
case 127:
                var9 = _closure1_slot14;
                var8 = var2.nextVersion;
                var3 = var8.bind;
                var12 = var3.bind(var8)(var2);
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var3 = new var13[var9](var12, var11);
                var8 = var3 instanceof Object ? var3 : var8;
                var3 = var2.shadowDatabases;
                var3[var5] = var8;
                var3 = var2.shadowRecordCreators;
                var2 = var3.set;
                if(!(var7 == var4)) { _fun0038_ip = 128; continue _fun0038 }
case 129:
                var4 = _closure1_slot11;
case 128:
                var2 = var2.bind(var3)(var5, var4);
case 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'addKVDatabase';
        var5['key'] = var7;
        var7 = function addKVDatabase(arg1, arg2) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var5 = arg1;
                var4 = arg2;
                var2 = this;
                var7 = _closure1_slot14;
                var3 = var2.nextVersion;
                var1 = var3.bind;
                var12 = var1.bind(var3)(var2);
                var3 = var7.prototype;
                var3 = Object.create(var3, {constructor: {value: var7}});
                var13 = var3;
                var1 = new var13[var7](var12, var11);
                var7 = var1 instanceof Object ? var1 : var3;
                var1 = var7.intoKV;
                var1 = var1.bind(var7)();
                var3 = var2.state;
                var3 = var3.databases;
                var3[var5] = var7;
                var9 = var2.recordCreators;
                var8 = var9.set;
                var7 = null;
                var3 = var4;
                if(!(var7 == var4)) { _fun0039_ip = 130; continue _fun0039 }
case 70:
                var3 = _closure1_slot11;
case 130:
                var3 = var8.bind(var9)(var5, var3);
                var3 = var2.shadowDatabases;
                if(!(var7 != var3)) { _fun0039_ip = 107; continue _fun0039 }
case 131:
                var9 = _closure1_slot14;
                var8 = var2.nextVersion;
                var3 = var8.bind;
                var12 = var3.bind(var8)(var2);
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var13 = var8;
                var3 = new var13[var9](var12, var11);
                var8 = var3 instanceof Object ? var3 : var8;
                var3 = var2.shadowDatabases;
                var3[var5] = var8;
                var3 = var2.shadowRecordCreators;
                var2 = var3.set;
                if(!(var7 == var4)) { _fun0039_ip = 132; continue _fun0039 }
case 126:
                var4 = _closure1_slot11;
case 132:
                var2 = var2.bind(var3)(var5, var4);
case 107:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'applyChanges';
        var5['key'] = var7;
        var7 = function applyChanges(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var6 = this;
                var2 = var6.mode;
                var1 = 'typescript-libdiscore-dual-read';
                var5 = var1 === var2;
                var3 = _closure1_slot16;
                var1 = undefined;
                var2 = arg1;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0040_ip = 60; continue _fun0040 }
case 45:
                var7 = var3.value;
                var2 = var6.executeDatabaseChange;
                var2 = var2.bind(var6)(var7, var5);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0040_ip = 45; continue _fun0040 }
case 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'clearAllDatabases';
        var5['key'] = var7;
        var7 = function clearAllDatabases() {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var6 = this;
                var1 = var6.state;
                var4 = var1.databases;
                for(var1 in var4)
case 112:
                {
case 68:
                    var8 = var1;
                    var7 = var6.state;
                    var7 = var7.databases;
                    var8 = var7[var8];
                    var7 = var8.clear;
                    var7 = var7.bind(var8)();
                    _fun0041_ip = 112; continue _fun0041;
                }
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'markDirty';
        var5['key'] = var7;
        var7 = function markDirty() {
            var2 = this;
            var1 = var2._nextVersion;
            var1 = var1 + 1;
            var2['_nextVersion'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'executeDatabaseChange';
        var5['key'] = var7;
        var7 = function executeDatabaseChange(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var2 = arg1;
                var4 = arguments[1];
                var6 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0042_ip = 133; continue _fun0042 }
case 73:
                var4 = false;
case 133:
                var5 = var2.databaseName;
                var3 = var2.opcodes;
                var2 = var6.nextVersion;
                var15 = var2.bind(var6)();
                if(var4) { _fun0042_ip = 8; continue _fun0042 }
case 62:
                var2 = var6.state;
                var2 = var2.databases;
                _fun0042_ip = 11; continue _fun0042;
case 8:
                var2 = var6.shadowDatabases;
case 11:
                if(var4) { _fun0042_ip = 5; continue _fun0042 }
case 125:
                var4 = var6.recordCreators;
                _fun0042_ip = 134; continue _fun0042;
case 5:
                var4 = var6.shadowRecordCreators;
case 134:
                var14 = var2[var5];
                var2 = null;
                if(!(var2 != var14)) { _fun0042_ip = 135; continue _fun0042 }
case 106:
                var2 = var4.get;
                var13 = var2.bind(var4)(var5);
                var2 = _closure1_slot16;
                var12 = var2.bind(var1)(var3);
                var3 = var12.bind(var1)();
                var2 = var3.done;
                var11 = 'clearDatabase';
                var10 = 'removeRecord';
                var9 = 'setRecord';
                var8 = 'updateRecord';
                var7 = 'setPartition';
                var6 = 'removePartition';
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0042_ip = 136; continue _fun0042 }
case 137:
                var2 = var4.value;
                var17 = var2.opcode;
                if(!(var6 !== var17)) { _fun0042_ip = 138; continue _fun0042 }
case 116:
                if(!(var7 !== var17)) { _fun0042_ip = 139; continue _fun0042 }
case 92:
                if(!(var8 !== var17)) { _fun0042_ip = 140; continue _fun0042 }
case 141:
                if(!(var9 !== var17)) { _fun0042_ip = 142; continue _fun0042 }
case 107:
                if(!(var10 !== var17)) { _fun0042_ip = 143; continue _fun0042 }
case 144:
                var16 = var3;
                if(!(var11 === var17)) { _fun0042_ip = 145; continue _fun0042 }
case 146:
                var17 = var14.clear;
                var17 = var17.bind(var14)();
                var16 = var3;
                _fun0042_ip = 145; continue _fun0042;
case 143:
                var19 = var14.removeRecord;
                var18 = var2.partitionKey;
                var17 = var2.clusteringKey;
                var17 = var19.bind(var14)(var18, var17, var15);
                var16 = var3;
                _fun0042_ip = 145; continue _fun0042;
case 142:
                var20 = var14.setRecord;
                var19 = var2.partitionKey;
                var28 = var2.clusteringKey;
                var17 = var2.value;
                var27 = var13.bind(var1)(var17);
                var30 = var14;
                var29 = var19;
                var26 = var15;
                var17 = var30[var20](var29, var28, var27, var26, var25);
                var16 = var3;
                _fun0042_ip = 145; continue _fun0042;
case 140:
                var20 = var14.updateRecord;
                var29 = var2.partitionKey;
                var28 = var2.clusteringKey;
                var27 = var2.value;
                var30 = var14;
                var26 = var13;
                var25 = var15;
                var17 = var30[var20](var29, var28, var27, var26, var25, var24);
                var16 = var3;
                _fun0042_ip = 145; continue _fun0042;
case 139:
                var17 = var2.partition;
                var21 = var17;
                for(var18 in var21)
case 147:
                {
case 148:
                    var24 = var18;
                    var23 = var17[var24];
                    var23 = var13.bind(var1)(var23);
                    var17[var24] = var23;
                    _fun0042_ip = 147; continue _fun0042;
                }
case 149:
                var19 = var14.setPartition;
                var18 = var2.partitionKey;
                var18 = var19.bind(var14)(var18, var17, var15);
                var16 = var17;
                _fun0042_ip = 145; continue _fun0042;
case 138:
                var17 = var14.removePartition;
                var2 = var2.partitionKey;
                var2 = var17.bind(var14)(var2, var15);
                var16 = var3;
case 145:
                var17 = var12.bind(var1)();
                var2 = var17.done;
                var3 = var16;
                var4 = var17;
                if(!var2) { _fun0042_ip = 137; continue _fun0042 }
case 136:
                return var1;
case 135:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = 'Database ';
                var1 = ' does not exist';
                var29 = var4.bind(var2)(var5, var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var30 = var2;
                var1 = new var30[var3](var29, var28);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'nextVersion';
        var5['key'] = var7;
        var6 = function nextVersion() {
            var3 = this;
            var1 = var3._nextVersion;
            var1 = parseFloat(var1);
            var2 = var1 + 1;
            var3['_nextVersion'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var6);
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/libdiscore/stores/LibdiscoreStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['KVDatabase'] = var5;
    var3['KKVDatabase'] = var4;
    var3['LibdiscoreStore'] = var2;
    return var1;
})();