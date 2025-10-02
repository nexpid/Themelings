// discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = function sortedInsert(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var4 = arg3;
            var6 = arg4;
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var7.bind(var3)(var2);
            var10 = var2.bind(var3)(var5, var9, var6);
            var2 = var5[var10];
            var7 = var10;
            if(!(var2 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var5.length;
            var8 = 1;
            var2 = var2 - var8;
            var3 = var10;
            var7 = var3;
            if(!(var7 < var2)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var10 = var3 + var8;
            var2 = var5[var10];
            var7 = var10;
            if(!(var2 !== var9)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var2 = var5.length;
            var2 = var2 - var8;
            var3 = var10;
            var7 = var3;
            if(var7 < var2) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var3 = var5.splice;
            var2 = 1;
            var2 = var3.bind(var5)(var7, var2);
case 2:
            if(!(var1 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var5.splice;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var7.bind(var2)(var1);
            var2 = var1.bind(var2)(var5, var4, var6);
            var1 = 0;
            var1 = var3.bind(var5)(var2, var1, var4);
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = new Array(0);
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function SecondaryIndexMap(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arguments[2];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var3 = function l(arg1, arg2) {
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var2 === var1;
                    return var1;
                };
case 10:
                var5 = _closure1_slot3;
                var4 = _closure2_slot0;
                var4 = var5.bind(var1)(var2, var4);
                var4 = global;
                var4 = var4.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var8 = var5;
                var4 = new var8[var4](var7);
                var4 = var4 instanceof Object ? var4 : var5;
                var2['valueMap'] = var4;
                var4 = new Array(0);
                var2['valueArray'] = var4;
                var4 = {};
                var2['valueIndexes'] = var4;
                var4 = {};
                var2['valueIndexesForGetter'] = var4;
                var4 = false;
                var2['dirty'] = var4;
                var4 = 0;
                var2['_version'] = var4;
                var4 = arg1;
                var2['indexBy'] = var4;
                var4 = arg2;
                var2['sortBy'] = var4;
                var2['isEqual'] = var3;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'version';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._version;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(11);
        var2[0] = var1;
        var1 = {};
        var6 = 'indexes';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arguments[0];
                var1 = this;
                var10 = undefined;
                if(!(var2 === var10)) { _fun0003_ip = 12; continue _fun0003 }
case 11:
                var2 = false;
case 12:
                if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var2 = var1.dirty;
                if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                var2 = {};
                var3 = global;
                var5 = var3.Object;
                var4 = var5.entries;
                var3 = var1.valueIndexes;
                var9 = var4.bind(var5)(var3);
                var3 = var9.length;
                var8 = 0;
                var3 = var8 < var3;
                var6 = 2;
                var5 = 1;
                var4 = 0;
                if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var11 = var9[var4];
                var3 = _closure1_slot2;
                var3 = var3.bind(var10)(var11, var6);
                var11 = var3[var8];
                var14 = var3[var5];
                var3 = new Array(0);
                var15 = var3;
                var13 = 0;
                var12 = arraySpread(var15, var14, var13);
                var2[var11] = var3;
                var4 = var4 + 1;
                var3 = var9.length;
                if(var4 < var3) { _fun0003_ip = 19; continue _fun0003 }
case 18:
                var1['valueIndexesForGetter'] = var2;
                var2 = false;
                var1['dirty'] = var2;
case 15:
                var2 = var1.valueIndexesForGetter;
                return var2;
case 13:
                var1 = var1.valueIndexes;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'keys';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.valueMap;
            var1 = var2.keys;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'values';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var5 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var5 = false;
case 20:
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var1 = var2.indexes;
                var1 = var1.bind(var2)(var5);
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var1 = _closure1_slot5;
case 24:
                _fun0004_ip = 26; continue _fun0004;
case 22:
                var1 = var2.valueArray;
case 26:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'size';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var1 = null;
                if(!(var1 != var4)) { _fun0005_ip = 27; continue _fun0005 }
case 11:
                var3 = var2.valueIndexes;
                var4 = var3[var4];
                var5 = var1 == var4;
                var3 = undefined;
                if(var5) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var3 = var4.length;
case 28:
                var4 = var1 != var3;
                var1 = 0;
                if(!var4) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var1 = var3;
case 30:
                _fun0005_ip = 5; continue _fun0005;
case 27:
                var2 = var2.valueArray;
                var1 = var2.length;
case 5:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var3 = var2.valueMap;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var1 = new Array(0);
            var2['valueArray'] = var1;
            var1 = {};
            var2['valueIndexes'] = var1;
            var1 = {};
            var2['valueIndexesForGetter'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.valueMap;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.valueMap;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var10 = arg1;
                var6 = arg2;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var6;
                var1 = var5.get;
                var8 = var1.bind(var5)(var10);
                var _closure3_slot2 = var8;
                var4 = null;
                var1 = var4 != var8;
                if(var1) { _fun0006_ip = 32; continue _fun0006 }
case 25:
                var1 = var4 != var6;
case 32:
                if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                var2 = var4 == var8;
                if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                var2 = var4 == var6;
case 35:
                if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                var7 = var5.isEqual;
                var7 = var7.bind(var5)(var8, var6);
                var2 = !var7;
case 37:
                if(!var2) { _fun0006_ip = 39; continue _fun0006 }
case 19:
                if(!(var4 == var6)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var9 = var5.valueMap;
                var7 = var9.delete;
                var7 = var7.bind(var9)(var10);
                _fun0006_ip = 42; continue _fun0006;
case 40:
                var9 = var5.valueMap;
                var7 = var9.set;
                var7 = var7.bind(var9)(var10, var6);
case 42:
                var11 = _closure1_slot6;
                var15 = var5.valueArray;
                var12 = var5.sortBy;
                var16 = undefined;
                var14 = var8;
                var13 = var6;
                var7 = var16[var11](var15, var14, var13, var12, var11);
                if(!(var4 != var8)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var7 = var5.indexBy;
                var9 = var7.bind(var5)(var8);
                var8 = var9.forEach;
                var7 = function(arg1) {
                    var6 = _closure1_slot6;
                    var1 = _closure3_slot0;
                    var4 = var1.getIndex;
                    var3 = arg1;
                    var10 = var4.bind(var1)(var3);
                    var9 = _closure3_slot2;
                    var7 = var1.sortBy;
                    var1 = undefined;
                    var8 = null;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
case 43:
                if(!(var4 != var6)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                var4 = var5.indexBy;
                var6 = var4.bind(var5)(var6);
                var4 = var6.forEach;
                var3 = function(arg1) {
                    var6 = _closure1_slot6;
                    var1 = _closure3_slot0;
                    var4 = var1.getIndex;
                    var3 = arg1;
                    var10 = var4.bind(var1)(var3);
                    var8 = _closure3_slot1;
                    var7 = var1.sortBy;
                    var1 = undefined;
                    var9 = null;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var3 = var4.bind(var6)(var3);
case 45:
                var3 = true;
                var5['dirty'] = var3;
                var4 = var5._version;
                var4 = var4 + 1;
                var5['_version'] = var4;
                var2 = true;
case 39:
                var1 = var2;
case 33:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var3 = var4.set;
            var2 = arg1;
            var1 = null;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getIndex';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var1 = var3.valueIndexes;
                var1 = var1[var4];
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var2 = new Array(0);
                var3 = var3.valueIndexes;
                var3[var4] = var2;
                var1 = var2;
case 47:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[10] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx';
    var4 = var5.bind(var6)(var4);
    var3['SecondaryIndexMap'] = var2;
    return var1;
})();