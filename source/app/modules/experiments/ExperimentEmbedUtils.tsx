// app/modules/experiments/ExperimentEmbedUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var7);
    var8 = var1.RegExp;
    var1 = var8.prototype;
    var4 = Object.create(var1, {constructor: {value: var8}});
    var12 = '^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$';
    var11 = 'i';
    var13 = var4;
    var1 = new var13[var8](var12, var11, var10);
    var4 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot3 = var4;
    var1 = 3;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/ExperimentEmbedUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EXPERIMENT_EMBED_URL_REGEX'] = var4;
    var4 = function isExperimentEmbedURL(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isExperimentEmbedURL'] = var4;
    var4 = function getExperimentFromEmbedURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot3;
            var3 = var2.bind(var3)(var1);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.length;
            var2 = 2;
            var2 = var5 < var2;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = 1;
            var1 = var3[var2];
case 2:
            return var1;
        }
    };
    var3['getExperimentFromEmbedURL'] = var4;
    var4 = function getExperimentTreatmentFromEmbedURL(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot3;
            var3 = var2.bind(var3)(var1);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 3:
            var5 = var3.length;
            var2 = 3;
            var2 = var5 < var2;
            var1 = null;
            if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 4:
            var2 = global;
            var5 = var2.parseInt;
            var2 = 2;
            var4 = var3[var2];
            var3 = undefined;
            var2 = 10;
            var1 = var5.bind(var3)(var4, var2);
case 5:
            return var1;
        }
    };
    var3['getExperimentTreatmentFromEmbedURL'] = var4;
    var4 = function getURLForExperiment(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'dev://experiment/';
            var1 = var2.bind(var1)(var6);
            _fun0003_ip = 8; continue _fun0003;
case 6:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'dev://experiment/';
            var2 = '/';
            var1 = var4.bind(var3)(var6, var2, var5);
case 8:
            return var1;
        }
    };
    var3['getURLForExperiment'] = var4;
    var4 = function getExperimentServerAssignmentLabel(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            if(!(var1 != var4)) { _fun0004_ip = 9; continue _fun0004 }
case 11:
            var7 = var4.system;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 0;
            var6 = var5[var9];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var6 = var6.ExperimentSystem;
            var6 = var6.LEGACY;
            if(!(var6 !== var7)) { _fun0004_ip = 12; continue _fun0004 }
case 8:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var5)(var6);
            var6 = var6.ExperimentSystem;
            var6 = var6.APEX;
            if(!(var6 !== var7)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var4 = var4.system;
            return var1;
case 13:
            var7 = var2.variantId;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = 'Variant ';
            var4 = var6.bind(var4)(var7);
            return var4;
case 12:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getExperimentBucketName;
            var2 = var2.bucket;
            var2 = var3.bind(var4)(var2);
            return var2;
case 9:
            return var1;
        }
    };
    var3['getExperimentServerAssignmentLabel'] = var4;
    var2 = function getExperimentBuckets(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getExperimentVariantsForDevTools;
        var1 = arg1;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.label;
            var1['label'] = var3;
            var2 = var2.id;
            var1['value'] = var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getExperimentBuckets'] = var2;
    return var1;
})();