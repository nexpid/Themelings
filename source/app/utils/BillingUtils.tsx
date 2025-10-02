// app/utils/BillingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = null;
                    var4 = var5 != var2;
                    var3 = null;
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = var2.paymentGateway;
                    var4 = _closure1_slot4;
                    var4 = var4.BRAINTREE;
                    var3 = null;
                    if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.collectDeviceData;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=82);
case 7:
                    return var2;
case 8:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var4 = var5 != var2;
                    var3 = null;
                    if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 11:
                    var4 = {};
                    var4['braintree_device_data'] = var2;
                    var3 = var4;
case 4:
                    return var3;
case 9:
                    return var2;
case 2:
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
case 0:
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
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var7.tags;
case 12:
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
case 0:
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
            if(var8) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var7.tags;
case 12:
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
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = 'P1M';
            var1 = var1 === var3;
            var5 = var1;
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var2 = 'P1Y';
            var5 = var2 === var4;
case 14:
            var2 = true;
            if(!(var5 !== var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var5 = var1;
            if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var6 = 'P6M';
            var5 = var6 === var4;
case 18:
            if(!(var5 !== var2)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var5 = 'P3M';
            var1 = var5 === var4;
case 22:
            if(!(var1 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var1 = 'P3M';
            var1 = var1 === var3;
            var5 = var1;
            if(!var1) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var6 = 'P1Y';
            var5 = var6 === var4;
case 26:
            if(!(var5 !== var2)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            if(!var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            var5 = 'P6M';
            var1 = var5 === var4;
case 30:
            if(!(var1 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var1 = 'P6M';
            var1 = var1 === var3;
            if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var3 = 'P1Y';
            var1 = var3 === var4;
case 34:
            if(!(var1 !== var2)) { _fun0004_ip = 32; continue _fun0004 }
case 36:
            var1 = 1;
            return var1;
case 32:
            var1 = 2;
            return var1;
case 28:
            var1 = 4;
            return var1;
case 24:
            var1 = 3;
            return var1;
case 20:
            var1 = 6;
            return var1;
case 16:
            var1 = 12;
            return var1;
        }
    };
    var3['calculateStandardizedUnits'] = var2;
    return var1;
})();