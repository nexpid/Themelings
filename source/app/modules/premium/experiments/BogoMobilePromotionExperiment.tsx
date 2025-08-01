// app/modules/premium/experiments/BogoMobilePromotionExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-06_bogo_mobile_promotion_gate', 'label': 'BOGO Mobile Promotion Manager'};
    var5 = {};
    var10 = false;
    var5['enabled'] = var10;
    var4['defaultConfig'] = var5;
    var11 = {'id': 1, 'label': 'Enable BOGO Mobile Promotion Manager'};
    var5 = 1;
    var10 = {};
    var10['enabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot0 = var4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/experiments/BogoMobilePromotionExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var3 = var4.useExperiment;
            var2 = {};
            var1 = '489551_1';
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['BogoMobilePromotionExperiment'] = var4;
    var2 = function() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = '489551_2';
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['isBogoMobilePromotionExperimentEnabled'] = var2;
    return var1;
})();