// app/modules/billing/native/subscription/BillingInformation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionStatusTypes;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/subscription/BillingInformation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getBillingInformationStringNative(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var12 = arguments[2];
            var11 = arguments[3];
            var9 = undefined;
            if(!(var12 === var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = null;
case 2:
            if(!(var11 === var9)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = false;
case 4:
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 2;
            var1 = var5[var1];
            var10 = var4.bind(var9)(var1);
            var2 = var10.getBillingInformationString;
            var13 = arguments[4];
            var18 = var10;
            var17 = var3;
            var16 = var8;
            var15 = var12;
            var14 = var11;
            var1 = var18[var2](var17, var16, var15, var14, var13, var12);
            var2 = 3;
            var2 = var5[var2];
            var4 = var4.bind(var9)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.isPurchasedViaApple;
case 6:
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var3.status;
            var3 = _closure1_slot3;
            var3 = var3.ACTIVE;
            var2 = var4 === var3;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 4;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.gknRR3;
            var2 = {};
            var8 = var8.subscriptionPeriodStart;
            var2['renewalDate'] = var8;
            var8 = _closure1_slot2;
            var7 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 5;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.manageSubscription;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address=46);
case 14:
                        return var2;
case 15:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        return var3;
case 16:
                        return var2;
case 12:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            _closure2_slot0 = var7;
            var6 = function() {
                var1 = undefined;
                var4 = _closure2_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2['onSubscriptionManagementClick'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['getBillingInformationStringNative'] = var2;
    return var1;
})();