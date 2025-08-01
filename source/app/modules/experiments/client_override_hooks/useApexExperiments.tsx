// app/modules/experiments/client_override_hooks/useApexExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useEffect;
    var _closure1_slot3 = var8;
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/client_override_hooks/useApexExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useApexExperiments() {
        var6 = _closure1_slot3;
        var5 = undefined;
        var3 = function() {
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var2);
            var3 = var4.fetchApexExperimentsMetadata;
            var2 = 4;
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
        var6 = 5;
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
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = {};
                var12 = global;
                var5 = var12.Object;
                var4 = var5.entries;
                var3 = _closure2_slot0;
                var16 = var4.bind(var5)(var3);
                var3 = var16.length;
                var11 = 0;
                var3 = var11 < var3;
                var15 = 'user';
                var9 = undefined;
                var8 = 2;
                var7 = 1;
                var6 = 6;
                var14 = 7;
                var5 = 'guild';
                var4 = 0;
                if(!var3) { _fun0001_ip = 238; continue _fun0001 }
 74:
                var17 = var16[var4];
                var3 = _closure1_slot2;
                var3 = var3.bind(var9)(var17, var8);
                var17 = var3[var11];
                var18 = var3[var7];
                var3 = {};
                var20 = _closure1_slot0;
                var19 = _closure1_slot1;
                var21 = var19[var6];
                var21 = var20.bind(var9)(var21);
                var21 = var21.ExperimentSystem;
                var21 = var21.APEX;
                var3['system'] = var21;
                var21 = var18.unitType;
                var19 = var19[var14];
                var19 = var20.bind(var9)(var19);
                var19 = var19.UnitType;
                var20 = var19.User;
                var19 = var5;
                if(!(var21 === var20)) { _fun0001_ip = 169; continue _fun0001 }
 166:
                var19 = var15;
 169:
                var3['kind'] = var19;
                var19 = var18.name;
                var3['name'] = var19;
                var19 = var18.title;
                var3['title'] = var19;
                var20 = var18.variants;
                var19 = var20.map;
                var18 = function(arg1) {
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
                var18 = var19.bind(var20)(var18);
                var3['variants'] = var18;
                var1[var17] = var3;
                var4 = var4 + 1;
                var3 = var16.length;
                if(var4 < var3) { _fun0001_ip = 74; continue _fun0001 }
 238:
                var4 = var12.Object;
                var3 = var4.entries;
                var2 = _closure2_slot1;
                var5 = var3.bind(var4)(var2);
                var2 = var5.length;
                var2 = var11 < var2;
                var4 = null;
                var3 = 0;
                if(!var2) { _fun0001_ip = 435; continue _fun0001 }
 278:
                var14 = var5[var3];
                var2 = _closure1_slot2;
                var2 = var2.bind(var9)(var14, var8);
                var14 = var2[var11];
                var15 = var2[var7];
                var2 = var1[var14];
                if(!(var4 == var2)) { _fun0001_ip = 420; continue _fun0001 }
 308:
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
 0:
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var6 = var3().value;
                        var2 = var1;
                        var4 = undefined;
                        var2 = var2 === var4;
                        var5 = undefined;
                        if(var2) { _fun0002_ip = 27; continue _fun0002 }
 24:
                        var5 = var6;
 27:
                        if(var2) { _fun0002_ip = 41; continue _fun0002 }
 30:
                        var3 = var3().value;
                        var3 = var1;
                        var2 = var3 === var4;
 41:
                        if(var2) { _fun0002_ip = 47; continue _fun0002 }
 44:
                        var1.return();
 47:
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
                        var2 = 4;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.Variant_Type;
                        var2 = var2.UNSPECIFIED;
                        var1['type'] = var2;
                        return var1;
                    }
                };
                var15 = var16.bind(var17)(var15);
                var2['variants'] = var15;
                var1[var14] = var2;
 420:
                var3 = var3 + 1;
                var2 = var5.length;
                if(var3 < var2) { _fun0001_ip = 278; continue _fun0001 }
 435:
                return var1;
            }
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = {};
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure2_slot2;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0003_ip = 116; continue _fun0003 }
 55:
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
                if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 116:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['overridesInfo'] = var2;
        return var1;
    };
    var3['useApexExperiments'] = var2;
    return var1;
})();