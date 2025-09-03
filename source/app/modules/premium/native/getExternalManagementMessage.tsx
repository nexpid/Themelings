// app/modules/premium/native/getExternalManagementMessage.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGatewayToFriendlyName;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/getExternalManagementMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getExternalManagementMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var2 = arguments[1];
            var10 = undefined;
            if(!(var2 === var10)) { _fun0001_ip = 16; continue _fun0001 }
 14:
            var2 = null;
 16:
            var _closure2_slot0 = var2;
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 369; continue _fun0001 }
 29:
            var3 = var7.isOnPlatformMatchingExternalPaymentGateway;
            if(var3) { _fun0001_ip = 369; continue _fun0001 }
 41:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            var9 = 'Android';
            if(!var3) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var9 = 'iOS';
 89:
            var3 = var7.isPurchasedExternally;
            if(!var3) { _fun0001_ip = 111; continue _fun0001 }
 98:
            var3 = var7.paymentGateway;
            if(!(var1 == var3)) { _fun0001_ip = 281; continue _fun0001 }
 111:
            if(!(var1 != var2)) { _fun0001_ip = 140; continue _fun0001 }
 115:
            var3 = var2.shouldAllow;
            if(!var3) { _fun0001_ip = 140; continue _fun0001 }
 124:
            var3 = var2.destinationType;
            var2 = 'premium_management';
            if(!(var2 !== var3)) { _fun0001_ip = 207; continue _fun0001 }
 140:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var4 = var6[var2];
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var6[var2];
            var2 = var3.bind(var10)(var2);
            var2 = var2.t;
            var3 = var2.CnoyAA;
            var2 = {};
            var2['mobilePlatform'] = var9;
            var2 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 279; continue _fun0001;
 207:
            var4 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 2;
            var5 = var12[var3];
            var5 = var4.bind(var10)(var5);
            var6 = var5.intl;
            var5 = var6.format;
            var3 = var12[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var4 = var3.IERwUV;
            var3 = {};
            var11 = function manageExternalNitroSubscription() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.goToStandaloneNitroManagementFromMobileApp;
                var1 = _closure2_slot0;
                var2 = var1.onSuccessCallback;
                var1 = var1.onFailureCallback;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3['manageExternalNitroSubscription'] = var11;
            var2 = var5.bind(var6)(var4, var3);
 279:
            _fun0001_ip = 367; continue _fun0001;
 281:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 2;
            var5 = var11[var3];
            var5 = var4.bind(var10)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var10)(var3);
            var3 = var3.t;
            var4 = var3.cFZnqa;
            var3 = {};
            var3['mobilePlatform'] = var9;
            var8 = _closure1_slot2;
            var7 = var7.paymentGateway;
            var7 = var8[var7];
            var3['externalPaymentGateway'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 367:
            return var2;
 369:
            return var1;
        }
    };
    var3['getExternalManagementMessage'] = var2;
    return var1;
})();