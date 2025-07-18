// app/utils/BillingUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createGatewayCheckoutContext() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 115; continue _fun0001 }
 10:
                    var5 = null;
                    var4 = var5 != var2;
                    var3 = null;
                    if(!var4) { _fun0001_ip = 109; continue _fun0001 }
 21:
                    var6 = var2.paymentGateway;
                    var4 = _closure1_slot4;
                    var4 = var4.BRAINTREE;
                    var3 = null;
                    if(!(var6 === var4)) { _fun0001_ip = 109; continue _fun0001 }
 46:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.collectDeviceData;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=82);
 80:
                    return var2;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 112; continue _fun0001 }
 88:
                    var4 = var5 != var2;
                    var3 = null;
                    if(!var4) { _fun0001_ip = 109; continue _fun0001 }
 97:
                    var4 = {};
                    var4['braintree_device_data'] = var2;
                    var3 = var4;
 109:
                    return var3;
 112:
                    return var2;
 115:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PaymentGateways;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/BillingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getLocalizedDisplayMonth(arg1, arg2) {
        var1 = global;
        var1 = var1.Date;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var7 = var2;
        var1 = new var7[var1](var6);
        var4 = var1 instanceof Object ? var1 : var2;
        var2 = var4.setMonth;
        var3 = arg1;
        var1 = 1;
        var1 = var3 - var1;
        var1 = var2.bind(var4)(var1);
        var3 = var4.toLocaleString;
        var2 = {};
        var1 = 'short';
        var2['month'] = var1;
        var1 = arg2;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getLocalizedDisplayMonth'] = var4;
    var4 = function createGatewayCheckoutContext() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGatewayCheckoutContext'] = var4;
    var4 = function captureBillingException(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.captureException;
            var3 = {};
            var10 = var3;
            var9 = var7;
            var2 = copyDataProperties(var10, var9);
            var6 = {};
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0002_ip = 65; continue _fun0002 }
 59:
            var2 = var7.tags;
 65:
            var10 = var6;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            var7 = 'billing';
            var2 = 'app_context';
            var6[var2] = var7;
            var2 = 'tags';
            var3[var2] = var6;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['captureBillingException'] = var4;
    var4 = function captureBillingMessage(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg2;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.captureMessage;
            var3 = {};
            var10 = var3;
            var9 = var7;
            var2 = copyDataProperties(var10, var9);
            var6 = {};
            var2 = null;
            var8 = var2 == var7;
            var2 = undefined;
            if(var8) { _fun0003_ip = 65; continue _fun0003 }
 59:
            var2 = var7.tags;
 65:
            var10 = var6;
            var9 = var2;
            var2 = copyDataProperties(var10, var9);
            var7 = 'billing';
            var2 = 'app_context';
            var6[var2] = var7;
            var2 = 'tags';
            var3[var2] = var6;
            var2 = arg1;
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['captureBillingMessage'] = var4;
    var2 = function calculateStandardizedUnits(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = 'P1M';
            var1 = var1 === var3;
            var5 = var1;
            if(!var1) { _fun0004_ip = 32; continue _fun0004 }
 22:
            var2 = 'P1Y';
            var5 = var2 === var4;
 32:
            var2 = true;
            if(!(var5 !== var2)) { _fun0004_ip = 177; continue _fun0004 }
 41:
            var5 = var1;
            if(!var1) { _fun0004_ip = 57; continue _fun0004 }
 47:
            var6 = 'P6M';
            var5 = var6 === var4;
 57:
            if(!(var5 !== var2)) { _fun0004_ip = 172; continue _fun0004 }
 61:
            if(!var1) { _fun0004_ip = 74; continue _fun0004 }
 64:
            var5 = 'P3M';
            var1 = var5 === var4;
 74:
            if(!(var1 !== var2)) { _fun0004_ip = 167; continue _fun0004 }
 78:
            var1 = 'P3M';
            var1 = var1 === var3;
            var5 = var1;
            if(!var1) { _fun0004_ip = 104; continue _fun0004 }
 94:
            var6 = 'P1Y';
            var5 = var6 === var4;
 104:
            if(!(var5 !== var2)) { _fun0004_ip = 162; continue _fun0004 }
 108:
            if(!var1) { _fun0004_ip = 121; continue _fun0004 }
 111:
            var5 = 'P6M';
            var1 = var5 === var4;
 121:
            if(!(var1 !== var2)) { _fun0004_ip = 157; continue _fun0004 }
 125:
            var1 = 'P6M';
            var1 = var1 === var3;
            if(!var1) { _fun0004_ip = 148; continue _fun0004 }
 138:
            var3 = 'P1Y';
            var1 = var3 === var4;
 148:
            if(!(var1 !== var2)) { _fun0004_ip = 157; continue _fun0004 }
 152:
            var1 = 1;
            return var1;
 157:
            var1 = 2;
            return var1;
 162:
            var1 = 4;
            return var1;
 167:
            var1 = 3;
            return var1;
 172:
            var1 = 6;
            return var1;
 177:
            var1 = 12;
            return var1;
        }
    };
    var3['calculateStandardizedUnits'] = var2;
    return var1;
})();