// app/modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var5 = 0;
    var4 = var7[var5];
    var1 = undefined;
    var9 = var6.bind(var1)(var4);
    var8 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2022-03_block_russian_purchases', 'label': 'Block purchases based on country'};
    var10 = {};
    var11 = false;
    var10['paymentsBlocked'] = var11;
    var4['defaultConfig'] = var10;
    var13 = {'id': 1, 'label': 'Payments Blocked'};
    var10 = {};
    var10['paymentsBlocked'] = var12;
    var13['config'] = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var4['treatments'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot2 = var4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2022-03_block_russian_purchases_desktop', 'label': 'Block purchases based on country (desktop specific flags)'};
    var10 = {};
    var10['checkPaymentSource'] = var11;
    var5['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Check Payment Source'};
    var10 = {};
    var10['checkPaymentSource'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var5['treatments'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/experiments/BlockedPaymentsCountryExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useBlockedPaymentsConfig() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var2 = {};
            var1 = 'c519a9_1';
            var2['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var5)(var2, var1);
            var1 = var1.paymentsBlocked;
            var6 = _closure1_slot3;
            var5 = var6.useExperiment;
            var4 = {};
            var2 = 'c519a9_2';
            var4['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            var2 = var2.checkPaymentSource;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var4 = var3.defaultBillingCountryCode;
            if(var1) { _fun0001_ip = 136; continue _fun0001 }
 122:
            if(!var2) { _fun0001_ip = 133; continue _fun0001 }
 125:
            var3 = 'RU';
            var2 = var3 === var4;
 133:
            var1 = var2;
 136:
            return var1;
        }
    };
    var3['useBlockedPaymentsConfig'] = var2;
    return var1;
})();