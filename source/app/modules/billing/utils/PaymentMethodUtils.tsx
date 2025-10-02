// app/modules/billing/utils/PaymentMethodUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.PaymentSourceTypes;
    var _closure1_slot3 = var7;
    var9 = var7.CARD;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = var7.PAYPAL;
    var8[1] = var9;
    var _closure1_slot4 = var8;
    var10 = var4.Set;
    var8 = var10.prototype;
    var9 = Object.create(var8, {constructor: {value: var10}});
    var17 = ['DE', 'BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'CH', 'SI', 'IE', 'LV', 'MT', 'FR', 'SK', 'FI', 'GR', 'PT', 'LU', 'LT', 'CY', 'NO', 'NL', 'ES', 'BE', 'AT', 'IT'];
    var18 = var9;
    var8 = new var18[var10](var17, var16);
    var16 = var8 instanceof Object ? var8 : var9;
    var10 = var4.Map;
    var8 = var7.SOFORT;
    var9 = new Array(2);
    var9[0] = var8;
    var12 = var4.Set;
    var8 = var12.prototype;
    var11 = Object.create(var8, {constructor: {value: var12}});
    var17 = new Array(0);
    var18 = var11;
    var8 = new var18[var12](var17, var16);
    var8 = var8 instanceof Object ? var8 : var11;
    var9[1] = var8;
    var8 = new Array(14);
    var8[0] = var9;
    var11 = var7.PRZELEWY24;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'PL'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[1] = var9;
    var11 = var7.GIROPAY;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'DE'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[2] = var9;
    var11 = var7.PAYSAFE_CARD;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = ['ALL'];
    var15 = 1;
    var17 = var11;
    var12 = arraySpread(var17, var16, var15);
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var18 = var12;
    var17 = var11;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[3] = var9;
    var11 = var7.GCASH;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'PH'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[4] = var9;
    var11 = var7.GRABPAY_MY;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'MY'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[5] = var9;
    var11 = var7.MOMO_WALLET;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'VN'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[6] = var9;
    var11 = var7.VENMO;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'US'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[7] = var9;
    var11 = var7.KAKAOPAY;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'KR'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[8] = var9;
    var11 = var7.GOPAY_WALLET;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'ID'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[9] = var9;
    var11 = var7.BANCONTACT;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'BE'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[10] = var9;
    var11 = var7.EPS;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'AT'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[11] = var9;
    var11 = var7.IDEAL;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'NL'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[12] = var9;
    var11 = var7.CASH_APP;
    var9 = new Array(2);
    var9[0] = var11;
    var13 = var4.Set;
    var11 = var13.prototype;
    var12 = Object.create(var11, {constructor: {value: var13}});
    var17 = ['ALL', 'US'];
    var18 = var12;
    var11 = new var18[var13](var17, var16);
    var11 = var11 instanceof Object ? var11 : var12;
    var9[1] = var11;
    var8[13] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var18 = var9;
    var17 = var8;
    var8 = new var18[var10](var17, var16);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot5 = var8;
    var8 = var4.Map;
    var9 = var7.PAYSAFE_CARD;
    var7 = new Array(2);
    var7[0] = var9;
    var10 = var4.Set;
    var4 = var10.prototype;
    var9 = Object.create(var4, {constructor: {value: var10}});
    var17 = ['DE'];
    var18 = var9;
    var4 = new var18[var10](var17, var16);
    var4 = var4 instanceof Object ? var4 : var9;
    var7[1] = var4;
    var4 = new Array(1);
    var4[0] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var18 = var7;
    var17 = var4;
    var4 = new var18[var8](var17, var16);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/utils/PaymentMethodUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getPaymentMethods(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.ipCountryCode;
            var1 = var1.location;
            var10 = undefined;
            var _closure2_slot1 = var10;
            var _closure2_slot2 = var10;
            var _closure2_slot3 = var10;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 1;
            var4 = var7[var4];
            var7 = var6.bind(var10)(var4);
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var1;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var4 = var6.bind(var7)(var4, var1);
            var1 = var4.enabledPaymentTypes;
            var _closure2_slot0 = var1;
            var1 = var4.forceCountryCode;
            var7 = var4.validCountryCodes;
            var8 = null;
            var6 = var8 != var2;
            var4 = 'ALL';
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var2;
case 2:
            _closure2_slot1 = var4;
            var4 = var7.length;
            var6 = 0;
            var4 = var4 > var6;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var8 != var1;
case 4:
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var8 != var2;
case 6:
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var7.includes;
            var4 = var4.bind(var7)(var2);
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var2;
case 10:
            _closure2_slot1 = var1;
case 8:
            var4 = global;
            var1 = var4.Set;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var15 = var2;
            var1 = new var15[var1](var14);
            var7 = var1 instanceof Object ? var1 : var2;
            _closure2_slot2 = var7;
            var9 = new Array(0);
            _closure2_slot3 = var9;
            var8 = _closure1_slot5;
            var2 = var8.forEach;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = arg2;
                    var4 = _closure2_slot0;
                    var2 = var4.includes;
                    var2 = var2.bind(var4)(var3);
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var5.has;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = _closure2_slot3;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                    _fun0002_ip = 12; continue _fun0002;
case 14:
                    var2 = _closure2_slot2;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var8)(var1);
            var8 = _closure1_slot6;
            var2 = var8.forEach;
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.has;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    if(!var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot2;
                    var2 = var3.add;
                    var1 = arg2;
                    var1 = var2.bind(var3)(var1);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var8)(var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = 2;
            var1 = var1[var11];
            var1 = var2.bind(var10)(var1);
            var1 = var1.isIOSWeb;
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var11];
            var2 = var8.bind(var10)(var2);
            var1 = var2.isAndroidWeb;
case 18:
            var2 = var9;
            if(!var1) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var7.delete;
            var1 = _closure1_slot3;
            var1 = var1.VENMO;
            var1 = var8.bind(var7)(var1);
            var8 = var9.filter;
            var1 = function(arg1) {
                var1 = _closure1_slot3;
                var2 = var1.VENMO;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var8.bind(var9)(var1);
            _closure2_slot3 = var1;
            var2 = var1;
case 20:
            var1 = {};
            var13 = _closure1_slot4;
            var3 = new Array(0);
            var14 = var3;
            var12 = 0;
            var12 = arraySpread(var14, var13, var12);
            var6 = var4.Array;
            var4 = var6.from;
            var13 = var4.bind(var6)(var7);
            var14 = var3;
            var4 = arraySpread(var14, var13, var12);
            var1['countryPaymentMethods'] = var3;
            var1['remainingPaymentMethods'] = var2;
            return var1;
        }
    };
    var3['getPaymentMethods'] = var2;
    return var1;
})();