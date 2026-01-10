// app/modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.CommonTriggerPoints;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.CommonTriggerPointConfiguration;
    var12 = var4.PAYMENT_FLOW_STARTED;
    var8 = {};
    var4 = 'payment flow started';
    var8['location'] = var4;
    var4 = var10.prototype;
    var5 = Object.create(var4, {constructor: {value: var10}});
    var13 = new Array(0);
    var14 = var5;
    var11 = var8;
    var4 = new var14[var10](var13, var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot3 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx';
    var5 = var6.bind(var7)(var5);
    var3['PaymentFlowStartedTriggerPoint'] = var4;
    var2 = function trackPaymentFlowStartedAnalyticsAndCTP(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arguments[1];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = {};
case 2:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var3 = _closure1_slot2;
            var4 = var3.PAYMENT_FLOW_STARTED;
            var3 = arg1;
            var3 = var5.bind(var6)(var4, var3, var7);
            var3 = _closure1_slot3;
            var2 = var3.trigger;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var3['trackPaymentFlowStartedAnalyticsAndCTP'] = var2;
    return var1;
})();