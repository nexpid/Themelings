// app/modules/experiments/client_override_hooks/useLegacyExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function bucketVariantType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot6;
            var1 = var1.CONTROL;
            if(!(var3 !== var1)) { _fun0001_ip = 106; continue _fun0001 }
 20:
            var1 = _closure1_slot6;
            var1 = var1.NOT_ELIGIBLE;
            if(!(var3 !== var1)) { _fun0001_ip = 70; continue _fun0001 }
 34:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.Variant_Type;
            var1 = var1.TREATMENT;
            _fun0001_ip = 104; continue _fun0001;
 70:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.Variant_Type;
            var1 = var3.UNSPECIFIED;
 104:
            _fun0001_ip = 140; continue _fun0001;
 106:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Variant_Type;
            var1 = var2.CONTROL;
 140:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ExperimentBuckets;
    var _closure1_slot6 = var7;
    var4 = var4.ExperimentTypes;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/client_override_hooks/useLegacyExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useLegacyExperiments() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 5;
        var1 = var8[var6];
        var5 = undefined;
        var11 = var7.bind(var5)(var1);
        var10 = var11.useStateFromStoresObject;
        var1 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var1;
        var3 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getRegisteredExperiments;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = var10.bind(var11)(var9, var3);
        var _closure2_slot0 = var3;
        var6 = var8[var6];
        var8 = var7.bind(var5)(var6);
        var7 = var8.useStateFromStoresObject;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getAllExperimentOverrideDescriptors;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var7.bind(var8)(var6, var1);
        var _closure2_slot1 = var6;
        var1 = {};
        var4 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = {};
                var _closure3_slot0 = var1;
                var10 = function _loop(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var6 = arg1;
                        var _closure4_slot0 = var6;
                        var4 = _closure3_slot0;
                        var3 = _closure3_slot1;
                        var2 = {};
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 6;
                        var9 = var9[var1];
                        var1 = undefined;
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.ExperimentSystem;
                        var9 = var9.LEGACY;
                        var2['system'] = var9;
                        var10 = var6.type;
                        var8 = _closure1_slot7;
                        var9 = var8.USER;
                        var8 = 'guild';
                        if(!(var10 === var9)) { _fun0003_ip = 91; continue _fun0003 }
 87:
                        var8 = 'user';
 91:
                        var2['kind'] = var8;
                        var7 = _closure3_slot1;
                        var2['name'] = var7;
                        var7 = var6.title;
                        var2['title'] = var7;
                        var7 = var6.buckets;
                        var6 = var7.map;
                        var5 = function(arg1, arg2) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var4 = arg1;
                                var1 = {};
                                var2 = var4.valueOf;
                                var2 = var2.bind(var4)();
                                var1['id'] = var2;
                                var2 = _closure4_slot0;
                                var2 = var2.description;
                                var5 = 'object';
                                var2 = typeof var2;
                                if(!(var5 !== var2)) { _fun0004_ip = 79; continue _fun0004 }
 41:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 7;
                                var5 = var5[var2];
                                var2 = undefined;
                                var5 = var6.bind(var2)(var5);
                                var2 = var5.getExperimentBucketName;
                                var2 = var2.bind(var5)(var4);
                                _fun0004_ip = 95; continue _fun0004;
 79:
                                var3 = _closure4_slot0;
                                var5 = var3.description;
                                var3 = arg2;
                                var2 = var5[var3];
 95:
                                var1['label'] = var2;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 7;
                                var5 = var5[var3];
                                var3 = undefined;
                                var6 = var6.bind(var3)(var5);
                                var5 = var6.getExperimentBucketName;
                                var5 = var5.bind(var6)(var4);
                                var1['shortLabel'] = var5;
                                var2 = _closure1_slot8;
                                var2 = var2.bind(var3)(var4);
                                var1['type'] = var2;
                                return var1;
                            }
                        };
                        var5 = var6.bind(var7)(var5);
                        var2['variants'] = var5;
                        var4[var3] = var2;
                        return var1;
                    }
                };
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure2_slot0;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0002_ip = 111; continue _fun0002 }
 68:
                var12 = var9[var3];
                var2 = _closure1_slot3;
                var2 = var2.bind(var6)(var12, var5);
                var12 = var2[var8];
                var _closure3_slot1 = var12;
                var2 = var2[var4];
                var2 = var10.bind(var6)(var2);
                var3 = var3 + 1;
                var2 = var9.length;
                if(var3 < var2) { _fun0002_ip = 68; continue _fun0002 }
 111:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3, var7);
        var1['experiments'] = var3;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = {};
                var2 = global;
                var4 = var2.Object;
                var3 = var4.entries;
                var2 = _closure2_slot1;
                var9 = var3.bind(var4)(var2);
                var2 = var9.length;
                var8 = 0;
                var2 = var8 < var2;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if(!var2) { _fun0005_ip = 125; continue _fun0005 }
 55:
                var10 = var9[var3];
                var2 = _closure1_slot3;
                var2 = var2.bind(var6)(var10, var5);
                var10 = var2[var8];
                var11 = var2[var4];
                var2 = {};
                var2['experimentId'] = var10;
                var13 = var11.bucket;
                var12 = var13.valueOf;
                var12 = var12.bind(var13)();
                var2['variantId'] = var12;
                var2['originalDescriptor'] = var11;
                var1[var10] = var2;
                var3 = var3 + 1;
                var2 = var9.length;
                if(var3 < var2) { _fun0005_ip = 55; continue _fun0005 }
 125:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['overridesInfo'] = var2;
        return var1;
    };
    var3['useLegacyExperiments'] = var2;
    return var1;
})();