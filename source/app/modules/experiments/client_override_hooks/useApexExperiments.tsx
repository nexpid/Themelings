// app/modules/experiments/client_override_hooks/useApexExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function mergeApexExperiments(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var12 = global;
            var4 = var12.Object;
            var3 = var4.entries;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var11 = 0;
            var2 = var11 < var2;
            var9 = undefined;
            var8 = 2;
            var7 = 1;
            var6 = 3;
            var4 = 4;
            var3 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var5[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var9)(var14, var8);
            var14 = var2[var11];
            var15 = var2[var7];
            var2 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var18 = var16[var6];
            var18 = var17.bind(var9)(var18);
            var18 = var18.ExperimentSystem;
            var18 = var18.APEX;
            var2['system'] = var18;
            var16 = var16[var4];
            var16 = var17.bind(var9)(var16);
            var17 = var16.UnitTypeToKind;
            var16 = var15.unitType;
            var16 = var17[var16];
            var2['kind'] = var16;
            var16 = var15.name;
            var2['name'] = var16;
            var16 = var15.title;
            var2['title'] = var16;
            var17 = var15.variants;
            var16 = var17.map;
            var15 = function(arg1) {
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
            var15 = var16.bind(var17)(var15);
            var2['variants'] = var15;
            var1[var14] = var2;
            var3 = var3 + 1;
            var2 = var5.length;
            if(var3 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
            var4 = var12.Object;
            var3 = var4.entries;
            var2 = arg2;
            var5 = var3.bind(var4)(var2);
            var2 = var5.length;
            var2 = var11 < var2;
            var4 = null;
            var3 = 0;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var5[var3];
            var2 = _closure1_slot2;
            var2 = var2.bind(var9)(var14, var8);
            var14 = var2[var11];
            var15 = var2[var7];
            var2 = var1[var14];
            if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot1;
            var16 = var16[var6];
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
            var16 = var17.entries;
            var15 = var15.variations;
            var17 = var16.bind(var17)(var15);
            var16 = var17.map;
            var15 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var6 = var3().value;
                    var2 = var1;
                    var4 = undefined;
                    var2 = var2 === var4;
                    var5 = undefined;
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = var6;
case 8:
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = var3().value;
                    var3 = var1;
                    var2 = var3 === var4;
case 10:
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var1.return();
case 12:
                    var1 = {};
                    var2 = global;
                    var3 = var2.Number;
                    var3 = var3.bind(var4)(var5);
                    var1['id'] = var3;
                    var3 = var2.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Variant ';
                    var6 = var6.bind(var3)(var5);
                    var1['label'] = var6;
                    var2 = var2.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var3)(var5);
                    var1['shortLabel'] = var2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 5;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Variation_Type;
                    var2 = var2.UNSPECIFIED;
                    var1['type'] = var2;
                    return var1;
                }
            };
            var15 = var16.bind(var17)(var15);
            var2['variants'] = var15;
            var1[var14] = var2;
case 6:
            var3 = var3 + 1;
            var2 = var5.length;
            if(var3 < var2) { _fun0001_ip = 5; continue _fun0001 }
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var5;
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
            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
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
            if(var3 < var2) { _fun0003_ip = 15; continue _fun0003 }
case 14:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
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
        var7 = _closure1_slot6;
        var5 = _closure1_slot5;
        var3 = var5.getExperimentsMetadata;
        var6 = var3.bind(var5)();
        var3 = var5.getRegisteredExperiments;
        var3 = var3.bind(var5)();
        var4 = undefined;
        var3 = var7.bind(var4)(var6, var3);
        var1['experiments'] = var3;
        var3 = _closure1_slot7;
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
            var2 = 5;
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
            var4 = _closure1_slot6;
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
            var3 = _closure1_slot7;
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