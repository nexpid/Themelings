// app/modules/gif_picker/experiments/GifProviderConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getGifProviderConfig() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0: // try_start_0
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GifProvidersExperiment;
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'gif_picker';
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var3 = var2.enableMetrics;
            var1['enabled'] = var3;
            var3 = var2.provider;
            var1['userProvider'] = var3;
            var3 = true;
            var1['sendProviderToAPI'] = var3;
            var2 = var2.fallbackProvider;
            var1['fallbackProvider'] = var2;
case 2: // try_end0
            return var1;
case 3: // catch_target0
            CatchBlockStart(arg_register=4);
            var4 = _closure1_slot2;
            var3 = var4.warn;
            var1 = 'Error getting GIF provider experiment config:';
            var1 = var3.bind(var4)(var1, var5);
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var6 = var3.DEFAULT_GIF_PROVIDER_CONFIG;
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var3 = _closure1_slot3;
            var2 = 'userProvider';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportDefault;
    var1 = undefined;
    var9 = var5.bind(var1)(var8);
    var5 = var9.prototype;
    var8 = Object.create(var5, {constructor: {value: var9}});
    var12 = 'GifProviderConfig';
    var13 = var8;
    var5 = new var13[var9](var12, var11);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot2 = var5;
    var5 = 'tenor';
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/gif_picker/experiments/GifProviderConfig.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getGifProviderConfig'] = var4;
    var4 = function getProviderForAPIRequest() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0: // try_start_0
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.GifProvidersExperiment;
            var2 = var3.getConfig;
            var1 = {};
            var4 = 'gif_picker';
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = var1.provider;
case 4: // try_end0
            return var1;
case 5: // catch_target0
            CatchBlockStart(arg_register=4);
            var4 = _closure1_slot2;
            var3 = var4.warn;
            var2 = 'Error getting provider for API request:';
            var2 = var3.bind(var4)(var2, var5);
            var1 = _closure1_slot3;
            return var1;
        }
    };
    var3['getProviderForAPIRequest'] = var4;
    var2 = function getExperimentContext() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = undefined;
            var2 = undefined;
case 6: // try_start_0
            var1 = _closure1_slot4;
            var4 = var1.bind(var4)();
            var2 = var4;
            var1 = {};
            var5 = null;
            var1['bucket'] = var5;
            var4 = var4.userProvider;
            if(!(var5 == var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var3 = _closure1_slot3;
            _fun0003_ip = 9; continue _fun0003;
case 7:
            var4 = var2;
            var3 = var4.userProvider;
case 9:
            var1['provider'] = var3;
            var2 = var2.enabled;
            var1['enabled'] = var2;
case 10: // try_end0
            return var1;
case 11: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = {'bucket': null, 'provider': null, 'enabled': false};
            var2 = _closure1_slot3;
            var1['provider'] = var2;
            return var1;
        }
    };
    var3['getExperimentContext'] = var2;
    return var1;
})();