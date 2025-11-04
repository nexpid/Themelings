// app/modules/experiments/native/ExperimentEmbedPlatformUtils.tsx
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
    var1 = 7;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/native/ExperimentEmbedPlatformUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EXPERIMENT_EMBED_URL_REGEX'] = var4;
    var2 = function handleCodedLinkExperimentEmbedTap(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var6 = null;
            if(!(var6 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = global;
            var3 = var2.Number;
            var2 = var3.isNaN;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 3;
            var3 = var10[var2];
            var2 = undefined;
            var7 = var9.bind(var2)(var3);
            var3 = var7.getLegacyExperiments;
            var7 = var3.bind(var7)();
            var3 = var7.experiments;
            var8 = var7.overridesInfo;
            var7 = 4;
            var7 = var10[var7];
            var9 = var9.bind(var2)(var7);
            var7 = var9.getApexExperiments;
            var7 = var7.bind(var9)();
            var9 = var7.experiments;
            var7 = var7.overridesInfo;
            var3 = var3[var1];
            if(!(var6 == var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var9[var1];
case 5:
            if(!(var6 != var3)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var8[var1];
            if(!(var6 == var8)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var7[var1];
case 9:
            var9 = var6 != var8;
            var7 = null;
            if(!var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var8;
case 11:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 5;
            var8 = var10[var8];
            var9 = var9.bind(var2)(var8);
            var8 = var9.getExperimentBuckets;
            var9 = var8.bind(var9)(var3);
            var8 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var8.bind(var9)(var5);
            if(!(var6 != var5)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            if(!(var6 != var7)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var7.variantId;
            var7 = var5.value;
            if(!(var8 !== var7)) { _fun0001_ip = 17; continue _fun0001 }
case 15:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var9 = var8.bind(var2)(var7);
            var8 = var9.overrideBucket;
            var7 = var3.system;
            var5 = var5.value;
            var5 = var8.bind(var9)(var7, var1, var5);
            _fun0001_ip = 18; continue _fun0001;
case 17:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var4 = var7[var4];
            var5 = var5.bind(var2)(var4);
            var4 = var5.overrideBucket;
            var3 = var3.system;
            var3 = var4.bind(var5)(var3, var1, var6);
            _fun0001_ip = 18; continue _fun0001;
case 13:
            return var2;
case 7:
            return var2;
case 2:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var4 = 0;
            var4 = var2[var4];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = var5.openLazy;
            var6 = _closure1_slot0;
            var3 = 2;
            var3 = var2[var3];
            var6 = var6.bind(var7)(var3);
            var3 = 1;
            var3 = var2[var3];
            var2 = var2.paths;
            var3 = var6.bind(var7)(var3, var2);
            var2 = {};
            var2['id'] = var1;
            var1 = 'ExperimentOverrideSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleCodedLinkExperimentEmbedTap'] = var2;
    return var1;
})();