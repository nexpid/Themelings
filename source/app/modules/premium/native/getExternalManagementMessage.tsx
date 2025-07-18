// app/modules/premium/native/getExternalManagementMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/getExternalManagementMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getExternalManagementMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 248; continue _fun0001 }
 12:
            var2 = var7.isOnPlatformMatchingExternalPaymentGateway;
            if(var2) { _fun0001_ip = 248; continue _fun0001 }
 24:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var10 = undefined;
            var3 = var3.bind(var10)(var2);
            var2 = var3.isIOS;
            var2 = var2.bind(var3)();
            var9 = 'Android';
            if(!var2) { _fun0001_ip = 74; continue _fun0001 }
 68:
            var9 = 'iOS';
 74:
            var2 = var7.isPurchasedExternally;
            if(!var2) { _fun0001_ip = 93; continue _fun0001 }
 83:
            var2 = var7.paymentGateway;
            if(!(var1 == var2)) { _fun0001_ip = 160; continue _fun0001 }
 93:
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
            _fun0001_ip = 246; continue _fun0001;
 160:
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
 246:
            return var2;
 248:
            return var1;
        }
    };
    var3['getExternalManagementMessage'] = var2;
    return var1;
})();