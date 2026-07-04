// app/modules/experiments/client_override_hooks/useApexExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function makeClientVariant(arg1) {
        var4 = arg1;
        var1 = {};
        var1['id'] = var4;
        var2 = global;
        var3 = var2.HermesInternal;
        var5 = var3.concat;
        var3 = 'Variant ';
        var5 = var5.bind(var3)(var4);
        var1['label'] = var5;
        var2 = var2.HermesInternal;
        var2 = var2.concat;
        var2 = var2.bind(var3)(var4);
        var1['shortLabel'] = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.Variation_Type;
        var2 = var2.UNSPECIFIED;
        var1['type'] = var2;
        return var1;
    };
    var _closure1_slot6 = var1;
    var5 = function mergeApexExperiments(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var _closure2_slot0 = var4;
            var1 = {};
            var _closure2_slot1 = var1;
            var6 = function _loop() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = var1.variants;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.id;
                        var1['id'] = var3;
                        var8 = var2.id;
                        var7 = var2.label;
                        var3 = global;
                        var4 = var3.HermesInternal;
                        var6 = var4.concat;
                        var5 = 'Variant ';
                        var4 = ': ';
                        var4 = var6.bind(var5)(var8, var4, var7);
                        var1['label'] = var4;
                        var4 = var2.id;
                        var3 = var3.HermesInternal;
                        var3 = var3.concat;
                        var3 = var3.bind(var5)(var4);
                        var1['shortLabel'] = var3;
                        var2 = var2.type;
                        var1['type'] = var2;
                        return var1;
                    };
                    var9 = var2.bind(var3)(var1);
                    var2 = global;
                    var4 = var2.Set;
                    var3 = var9.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var14 = var3.bind(var9)(var1);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var15 = var3;
                    var1 = new var15[var4](var14, var13);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var _closure3_slot0 = var1;
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var1 = var3[var1];
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = new Array(0);
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var1 = var1.variations;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = global;
                        var3 = var1.Number;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.has;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = _closure1_slot6;
                    var8 = var2.bind(var3)(var1);
case 4:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var1 = 4;
                    var7 = var11[var1];
                    var1 = undefined;
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.ExperimentSystem;
                    var7 = var7.APEX;
                    var2['system'] = var7;
                    var7 = 5;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var10 = var7.UnitTypeToKind;
                    var7 = _closure2_slot3;
                    var7 = var7.unitType;
                    var7 = var10[var7];
                    var2['kind'] = var7;
                    var7 = _closure2_slot3;
                    var7 = var7.name;
                    var2['name'] = var7;
                    var6 = _closure2_slot3;
                    var6 = var6.title;
                    var2['title'] = var6;
                    var7 = new Array(0);
                    var12 = 0;
                    var14 = var7;
                    var13 = var9;
                    var12 = arraySpread(var14, var13, var12);
                    var14 = var7;
                    var13 = var8;
                    var6 = arraySpread(var14, var13, var12);
                    var6 = var7.sort;
                    var5 = function(arg1, arg2) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var2 - var1;
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var2['variants'] = var5;
                    var4[var3] = var2;
                    return var1;
                }
            };
            var12 = global;
            var5 = var12.Object;
            var3 = var5.entries;
            var2 = arg1;
            var5 = var3.bind(var5)(var2);
            var2 = var5.length;
            var11 = 0;
            var2 = var11 < var2;
            var9 = undefined;
            var8 = 2;
            var7 = 1;
            var3 = 0;
            if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = var5[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var9)(var14, var8);
            var14 = var2[var11];
            var _closure2_slot2 = var14;
            var2 = var2[var7];
            var _closure2_slot3 = var2;
            var2 = var6.bind(var9)();
            var3 = var3 + 1;
            var2 = var5.length;
            if(var3 < var2) { _fun0001_ip = 6; continue _fun0001 }
case 5:
            var3 = var12.Object;
            var2 = var3.entries;
            var6 = var2.bind(var3)(var4);
            var2 = var6.length;
            var2 = var11 < var2;
            var5 = 4;
            var4 = null;
            var3 = 0;
            if(!var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var14 = var6[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var9)(var14, var8);
            var14 = var2[var11];
            var15 = var2[var7];
            var2 = var1[var14];
            if(!(var4 == var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var5];
            var16 = var17.bind(var9)(var16);
            var16 = var16.ExperimentSystem;
            var16 = var16.APEX;
            var2['system'] = var16;
            var16 = var15.kind;
            var2['kind'] = var16;
            var16 = var15.name;
            var2['name'] = var16;
            var16 = var15.name;
            var2['title'] = var16;
            var17 = var12.Object;
            var16 = var17.keys;
            var15 = var15.variations;
            var17 = var16.bind(var17)(var15);
            var16 = var17.map;
            var15 = function(arg1) {
                var3 = _closure1_slot6;
                var1 = global;
                var4 = var1.Number;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            var2['variants'] = var15;
            var1[var14] = var2;
case 9:
            var3 = var3 + 1;
            var2 = var6.length;
            if(var3 < var2) { _fun0001_ip = 8; continue _fun0001 }
case 7:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getApexExperimentOverridesInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = arg1;
            var9 = var3.bind(var4)(var2);
            var2 = var9.length;
            var8 = 0;
            var2 = var8 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var10 = var9[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var6)(var10, var5);
            var10 = var2[var8];
            var11 = var2[var4];
            var2 = {};
            var2['experimentId'] = var10;
            var12 = var11.variantId;
            var2['variantId'] = var12;
            var2['originalDescriptor'] = var11;
            var1[var10] = var2;
            var3 = var3 + 1;
            var2 = var9.length;
            if(var3 < var2) { _fun0003_ip = 12; continue _fun0003 }
case 11:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
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
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var10 = var6.useEffect;
    var _closure1_slot3 = var10;
    var6 = var6.useMemo;
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/experiments/client_override_hooks/useApexExperiments.tsx';
    var6 = var7.bind(var8)(var6);
    var3['mergeApexExperiments'] = var5;
    var3['getApexExperimentOverridesInfo'] = var4;
    var4 = function getApexExperiments() {
        var1 = {};
        var7 = _closure1_slot7;
        var5 = _closure1_slot5;
        var3 = var5.getExperimentsMetadata;
        var6 = var3.bind(var5)();
        var3 = var5.getRegisteredExperiments;
        var3 = var3.bind(var5)();
        var4 = undefined;
        var3 = var7.bind(var4)(var6, var3);
        var1['experiments'] = var3;
        var3 = _closure1_slot8;
        var2 = var5.getClientOverrides;
        var2 = var2.bind(var5)();
        var2 = var3.bind(var4)(var2);
        var1['overridesInfo'] = var2;
        return var1;
    };
    var3['getApexExperiments'] = var4;
    var2 = function useApexExperiments() {
        var6 = _closure1_slot3;
        var5 = undefined;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 6;
            var2 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var2);
            var3 = var4.fetchApexExperimentsMetadata;
            var2 = 3;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.Experiment_Surface;
            var2 = var2.APP;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = new Array(0);
        var1 = var6.bind(var5)(var3, var1);
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var6 = 7;
        var1 = var8[var6];
        var11 = var7.bind(var5)(var1);
        var10 = var11.useStateFromStores;
        var1 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var1;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getExperimentsMetadata;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var10.bind(var11)(var9, var3);
        var _closure2_slot0 = var10;
        var3 = var8[var6];
        var12 = var7.bind(var5)(var3);
        var11 = var12.useStateFromStores;
        var9 = new Array(1);
        var9[0] = var1;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getRegisteredExperiments;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var11.bind(var12)(var9, var3);
        var _closure2_slot1 = var3;
        var4 = _closure1_slot4;
        var9 = new Array(2);
        var9[0] = var10;
        var9[1] = var3;
        var3 = function() {
            var4 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3 = var4.bind(var5)(var3, var9);
        var6 = var8[var6];
        var8 = var7.bind(var5)(var6);
        var7 = var8.useStateFromStores;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getClientOverrides;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var7.bind(var8)(var6, var1);
        var _closure2_slot2 = var6;
        var1 = {};
        var1['experiments'] = var3;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot8;
            var2 = _closure2_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['overridesInfo'] = var2;
        return var1;
    };
    var3['useApexExperiments'] = var2;
    return var1;
})();