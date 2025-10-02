// app/modules/premium/native/utils/PremiumManagementUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = var4.PaymentGatewayToFriendlyName;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var6 = var5.bind(var1)(var4);
    var4 = var6.prototype;
    var5 = Object.create(var4, {constructor: {value: var6}});
    var12 = 'PremiumManagementUtils';
    var13 = var5;
    var4 = new var13[var6](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot4 = var4;
    var6 = {};
    var4 = 'premium_management';
    var6['PREMIUM_MANAGEMENT'] = var4;
    var5 = {};
    var4 = 'manage_in_app';
    var5['IN_APP'] = var4;
    var4 = 'manage_in_external_mobile_payment_gateway';
    var5['IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY'] = var4;
    var4 = 'manage_in_web';
    var5['IN_WEB'] = var4;
    var _closure1_slot5 = var5;
    var4 = function getPremiumManagementMethod(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2.isOnPlatformMatchingExternalPaymentGateway;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2.isPurchasedExternally;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2.paymentGateway;
            if(!(var3 == var2)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = _closure1_slot5;
            var2 = var2.IN_WEB;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var3 = _closure1_slot5;
            var2 = var3.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
case 9:
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var3 = _closure1_slot5;
            var2 = var3.IN_APP;
case 10:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var7 = function defaultMobileWebNitroManagementSuccessCallback() {
        var3 = _closure1_slot4;
        var2 = var3.log;
        var1 = 'Successfully opened mobile web Nitro Management page';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var7;
    var7 = function defaultMobileWebNitroManagementFailureCallback(arg1) {
        var4 = _closure1_slot4;
        var3 = var4.error;
        var2 = 'Failed to open mobile web Nitro Management page, error response: ';
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 2;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = 3;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.vgvbiI;
        var6 = var7.bind(var10)(var6);
        var2['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.ycleJS;
        var5 = var6.bind(var7)(var5);
        var2['body'] = var5;
        var5 = true;
        var2['hideActionSheet'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot8 = var7;
    var7 = 7;
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
case 0:
            var7 = arg1;
            var6 = arguments[1];
            var10 = undefined;
            if(!(var6 === var10)) { _fun0002_ip = 11; continue _fun0002 }
case 3:
            var6 = null;
case 11:
            var _closure2_slot0 = var6;
            var1 = _closure1_slot6;
            var4 = var1.bind(var10)(var7);
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = _closure1_slot5;
            var2 = var2.IN_APP;
            if(!(var4 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = var3.bind(var10)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            var9 = 'Android';
            if(!var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var9 = 'iOS';
case 15:
            var2 = _closure1_slot5;
            var2 = var2.IN_EXTERNAL_MOBILE_PAYMENT_GATEWAY;
            if(!(var4 === var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            if(!(var1 != var7)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
            var2 = var7.paymentGateway;
            if(!(var1 == var2)) { _fun0002_ip = 20; continue _fun0002 }
case 17:
            var2 = _closure1_slot5;
            var3 = var2.IN_WEB;
            var2 = null;
            if(!(var4 === var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            if(!(var1 != var6)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var3 = var6.shouldAllowIfApplePaymentLinksEnabled;
            if(!var3) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var10)(var3);
            var4 = var5.getApplePaymentLinkExperimentConfig;
            var3 = {};
            var6 = var6.location;
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enabled;
            if(var3) { _fun0002_ip = 26; continue _fun0002 }
case 23:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
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
            _fun0002_ip = 27; continue _fun0002;
case 26:
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 3;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.goToStandaloneNitroManagementFromMobileApp;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var7 = var3.loadId;
                    var4['loadId'] = var7;
                    var3 = var3.onSuccessCallback;
                    var8 = null;
                    if(!(var8 == var3)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var3 = _closure1_slot7;
                    _fun0003_ip = 30; continue _fun0003;
case 28:
                    var7 = _closure2_slot0;
                    var3 = var7.onSuccessCallback;
case 30:
                    var7 = _closure2_slot0;
                    var7 = var7.onFailureCallback;
                    if(!(var8 == var7)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var2 = _closure1_slot8;
                    _fun0003_ip = 33; continue _fun0003;
case 31:
                    var1 = _closure2_slot0;
                    var2 = var1.onFailureCallback;
case 33:
                    var12 = 'premium_external_management';
                    var13 = var6;
                    var11 = var4;
                    var10 = var3;
                    var9 = var2;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var4['manageExternalNitroSubscription'] = var12;
            var3 = var6.bind(var11)(var5, var4);
case 27:
            var2 = var3;
case 21:
            _fun0002_ip = 34; continue _fun0002;
case 20:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
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
            var8 = _closure1_slot3;
            var7 = var7.paymentGateway;
            var7 = var8[var7];
            var3['externalPaymentGateway'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 34:
            return var2;
case 12:
            return var1;
        }
    };
    var3['getExternalManagementMessage'] = var2;
    return var1;
})();