// app/modules/premium/native/utils/PremiumManagementUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = var4.PaymentGatewayToFriendlyName;
    var _closure1_slot2 = var4;
    var6 = {};
    var4 = 'premium_management';
    var6['PREMIUM_MANAGEMENT'] = var4;
    var _closure1_slot3 = var6;
    var5 = {};
    var4 = 'manage_in_app';
    var5['IN_APP'] = var4;
    var4 = 'manage_in_external_mobile_payment_gateway';
    var5['IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY'] = var4;
    var4 = 'manage_in_web';
    var5['IN_WEB'] = var4;
    var _closure1_slot4 = var5;
    var4 = function getPremiumManagementMethod(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = null;
            if(var4) { _fun0001_ip = 88; continue _fun0001 }
 14:
            var4 = var2.isOnPlatformMatchingExternalPaymentGateway;
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
 23:
            var4 = var2.isPurchasedExternally;
            if(!var4) { _fun0001_ip = 42; continue _fun0001 }
 32:
            var2 = var2.paymentGateway;
            if(!(var3 == var2)) { _fun0001_ip = 57; continue _fun0001 }
 42:
            var2 = _closure1_slot4;
            var2 = var2.IN_WEB;
            _fun0001_ip = 70; continue _fun0001;
 57:
            var3 = _closure1_slot4;
            var2 = var3.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
 70:
            _fun0001_ip = 85; continue _fun0001;
 72:
            var3 = _closure1_slot4;
            var2 = var3.IN_APP;
 85:
            var1 = var2;
 88:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var7 = 4;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/premium/native/utils/PremiumManagementUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['MobileWebDestinationTypes'] = var6;
    var3['PremiumManagementMethod'] = var5;
    var3['getPremiumManagementMethod'] = var4;
    var2 = function getExternalManagementMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var3 = arguments[1];
            var10 = undefined;
            if(!(var3 === var10)) { _fun0002_ip = 16; continue _fun0002 }
 14:
            var3 = null;
 16:
            var _closure2_slot0 = var3;
            var1 = _closure1_slot5;
            var5 = var1.bind(var10)(var7);
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 418; continue _fun0002 }
 41:
            var2 = _closure1_slot4;
            var2 = var2.IN_APP;
            if(!(var5 !== var2)) { _fun0002_ip = 418; continue _fun0002 }
 58:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 1;
            var2 = var6[var2];
            var4 = var4.bind(var10)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            var9 = 'Android';
            if(!var2) { _fun0002_ip = 103; continue _fun0002 }
 97:
            var9 = 'iOS';
 103:
            var2 = _closure1_slot4;
            var2 = var2.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
            if(!(var5 === var2)) { _fun0002_ip = 134; continue _fun0002 }
 117:
            if(!(var1 != var7)) { _fun0002_ip = 134; continue _fun0002 }
 121:
            var2 = var7.paymentGateway;
            if(!(var1 == var2)) { _fun0002_ip = 330; continue _fun0002 }
 134:
            var2 = _closure1_slot4;
            var4 = var2.IN_WEB;
            var2 = null;
            if(!(var5 === var4)) { _fun0002_ip = 328; continue _fun0002 }
 153:
            if(!(var1 != var3)) { _fun0002_ip = 186; continue _fun0002 }
 157:
            var4 = var3.shouldAllow;
            if(!var4) { _fun0002_ip = 186; continue _fun0002 }
 166:
            var4 = var3.destinationType;
            var3 = _closure1_slot3;
            var3 = var3.PREMIUM_MANAGEMENT;
            if(!(var4 !== var3)) { _fun0002_ip = 253; continue _fun0002 }
 186:
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
            var4 = var3.CnoyAA;
            var3 = {};
            var3['mobilePlatform'] = var9;
            var3 = var5.bind(var6)(var4, var3);
            _fun0002_ip = 325; continue _fun0002;
 253:
            var5 = _closure1_slot0;
            var13 = _closure1_slot1;
            var4 = 2;
            var6 = var13[var4];
            var6 = var5.bind(var10)(var6);
            var11 = var6.intl;
            var6 = var11.format;
            var4 = var13[var4];
            var4 = var5.bind(var10)(var4);
            var4 = var4.t;
            var5 = var4.IERwUV;
            var4 = {};
            var12 = function manageExternalNitroSubscription() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.goToStandaloneNitroManagementFromMobileApp;
                var3 = {};
                var1 = _closure2_slot0;
                var2 = var1.loadId;
                var3['loadId'] = var2;
                var2 = var1.onSuccessCallback;
                var1 = var1.onFailureCallback;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var4['manageExternalNitroSubscription'] = var12;
            var3 = var6.bind(var11)(var5, var4);
 325:
            var2 = var3;
 328:
            _fun0002_ip = 416; continue _fun0002;
 330:
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
 416:
            return var2;
 418:
            return var1;
        }
    };
    var3['getExternalManagementMessage'] = var2;
    return var1;
})();