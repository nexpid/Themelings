// app/modules/virtual_currency/shared/AnimationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {'EARN': 0.25, 'SPEND': 0.3};
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/shared/AnimationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 3000;
    var3['EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS'] = var5;
    var3['ORB_LOTTIE_COUNTER_ANIMATION_FACTORS'] = var4;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var1 = arg1;
            var2 = 0;
            var5 = var1 > var2;
            var3 = _closure1_slot0;
            var1 = 'SPEND';
            if(!var5) { _fun0001_ip = 34; continue _fun0001 }
 28:
            var1 = 'EARN';
 34:
            var1 = var3[var1];
            var3 = var4 * var1;
            var1 = {};
            var1['duration'] = var3;
            var2 = 0;
            if(!var5) { _fun0001_ip = 57; continue _fun0001 }
 53:
            var2 = var4 - var3;
 57:
            var1['delay'] = var2;
            return var1;
        }
    };
    var3['getDesiredAnimationConfigs'] = var2;
    return var1;
})();