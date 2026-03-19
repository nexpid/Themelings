// app/modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var9 = var5.bind(var1)(var4);
    var8 = var9.createExperiment;
    var7 = {'kind': 'user', 'id': '2022-03_block_russian_purchases', 'label': 'Block purchases based on country'};
    var4 = {};
    var10 = false;
    var4['paymentsBlocked'] = var10;
    var7['defaultConfig'] = var4;
    var13 = {'id': 1, 'label': 'Payments Blocked'};
    var4 = 1;
    var12 = {};
    var12['paymentsBlocked'] = var11;
    var13['config'] = var12;
    var12 = new Array(1);
    var12[0] = var13;
    var7['treatments'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-03-block-purchases', 'kind': 'user'};
    var9 = {};
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useBlockedPaymentsConfig() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var2 = {};
            var6 = 'c519a9_1';
            var2['location'] = var6;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var5)(var2, var1);
            var1 = var1.paymentsBlocked;
            var5 = _closure1_slot3;
            var4 = var5.useConfig;
            var2 = {};
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.enabled;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.defaultBillingCountryCode;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = 'RU';
            var1 = var2 === var3;
case 4:
            return var1;
        }
    };
    var3['useBlockedPaymentsConfig'] = var4;
    var4 = function useIsPaymentsBlocked() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = _closure1_slot2;
            var4 = var6.useExperiment;
            var3 = {};
            var5 = 'dc120b_3';
            var3['location'] = var5;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.paymentsBlocked;
            var4 = _closure1_slot3;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['useIsPaymentsBlocked'] = var4;
    var2 = function getIsPaymentsBlocked() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = _closure1_slot2;
            var4 = var6.getCurrentConfig;
            var3 = {};
            var5 = '1ee357_1';
            var3['location'] = var5;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.paymentsBlocked;
            var4 = _closure1_slot3;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['getIsPaymentsBlocked'] = var2;
    return var1;
})();