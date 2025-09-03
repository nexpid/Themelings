// app/modules/libdiscore/LibdiscoreExperimentManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function experimentStoreUpdateHandler() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 6;
            var2 = var1[var6];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.isLibdiscoreLoaded;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0005_ip = 238; continue _fun0005 }
 41:
            var2 = {};
            var5 = _closure1_slot11;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 7;
            var4 = var8[var4];
            var4 = var7.bind(var1)(var4);
            var4 = var4.ALL_LIBDISCORE_EXPERIMENTS;
            var7 = var5.bind(var1)(var4);
            var5 = var7.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0005_ip = 129; continue _fun0005 }
 90:
            var9 = var5.value;
            var8 = var9.id;
            var4 = var9.getCurrentConfig;
            var4 = var4.bind(var9)();
            var2[var8] = var4;
            var8 = var7.bind(var1)();
            var4 = var8.done;
            var5 = var8;
            if(!var4) { _fun0005_ip = 90; continue _fun0005 }
 129:
            var5 = _closure1_slot9;
            var4 = null;
            var4 = var4 != var5;
            if(!var4) { _fun0005_ip = 172; continue _fun0005 }
 142:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var7 = var7.bind(var1)(var5);
            var5 = _closure1_slot9;
            var4 = var7.bind(var1)(var5, var2);
 172:
            if(var4) { _fun0005_ip = 238; continue _fun0005 }
 175:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var5 = var5.bind(var1)(var4);
            var4 = var5.getExperimentCacher;
            var6 = var4.bind(var5)();
            var5 = var6.flushToCache;
            var4 = global;
            var7 = var4.JSON;
            var4 = var7.stringify;
            var4 = var4.bind(var7)(var2);
            var4 = var5.bind(var6)(var4);
            _closure1_slot9 = var2;
 238:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function initializeAllExperiments() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.ALL_LIBDISCORE_EXPERIMENTS;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var2 = var3.setExperiment;
                var1 = var3.legacyExperiment;
                if(var1) { _fun0006_ip = 38; continue _fun0006 }
 22:
                var5 = function createApexExperimentWrapper(arg1) {
                    var7 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.createApexExperiment;
                    var1 = {};
                    var4 = 'user';
                    var1['kind'] = var4;
                    var4 = var7.id;
                    var1['name'] = var4;
                    var4 = {};
                    var5 = -1;
                    var4['treatmentId'] = var5;
                    var1['defaultConfig'] = var4;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.fromEntries;
                    var4 = var7.getTreatments;
                    var8 = var4.bind(var7)();
                    var7 = var8.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.treatmentId;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var2 = {};
                        var2['treatmentId'] = var3;
                        var1[1] = var2;
                        return var1;
                    };
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var4);
                    var1['variations'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = undefined;
                var1 = var5.bind(var1)(var3);
                _fun0006_ip = 52; continue _fun0006;
 38:
                var5 = function createLegacyExperimentWrapper(arg1) {
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.createExperiment;
                    var1 = {};
                    var4 = 'user';
                    var1['kind'] = var4;
                    var4 = var5.id;
                    var1['id'] = var4;
                    var4 = var5.getLabel;
                    var4 = var4.bind(var5)();
                    var1['label'] = var4;
                    var4 = {};
                    var6 = -1;
                    var4['treatmentId'] = var6;
                    var1['defaultConfig'] = var4;
                    var4 = var5.getTreatments;
                    var6 = var4.bind(var5)();
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.treatmentId;
                        var2 = var1.label;
                        var1 = {};
                        var1['id'] = var3;
                        var1['label'] = var2;
                        var2 = {};
                        var2['treatmentId'] = var3;
                        var1['config'] = var2;
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    var1['treatments'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = undefined;
                var1 = var5.bind(var4)(var3);
 52:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = null;
    var _closure1_slot9 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function LibdiscoreExperimentManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 84; continue _fun0007 }
 71:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 118; continue _fun0007;
 84:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 118:
                var1 = var3.bind(var4)(var5, var1);
                var3 = {};
                var1['actions'] = var3;
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var14 = var4;
                var3 = new var14[var3](var13);
                var5 = var3 instanceof Object ? var3 : var4;
                var4 = var5.set;
                var3 = _closure1_slot8;
                var2 = _closure1_slot13;
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
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
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot14;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/libdiscore/LibdiscoreExperimentManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();