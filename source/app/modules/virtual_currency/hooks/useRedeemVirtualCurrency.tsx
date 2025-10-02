// app/modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx
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
    var7 = var4.useState;
    var _closure1_slot3 = var7;
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRedeemVirtualCurrency() {
        var12 = _closure1_slot3;
        var9 = undefined;
        var3 = '';
        var3 = var12.bind(var9)(var3);
        var11 = _closure1_slot2;
        var10 = 2;
        var5 = var11.bind(var9)(var3, var10);
        var4 = 0;
        var3 = var5[var4];
        var8 = 1;
        var5 = var5[var8];
        var _closure2_slot0 = var5;
        var5 = new Array(0);
        var5 = var12.bind(var9)(var5);
        var5 = var11.bind(var9)(var5, var10);
        var6 = var5[var4];
        var _closure2_slot1 = var6;
        var5 = var5[var8];
        var _closure2_slot2 = var5;
        var5 = null;
        var5 = var12.bind(var9)(var5);
        var7 = var11.bind(var9)(var5, var10);
        var5 = var7[var4];
        var _closure2_slot3 = var5;
        var7 = var7[var8];
        var _closure2_slot4 = var7;
        var7 = false;
        var7 = var12.bind(var9)(var7);
        var7 = var11.bind(var9)(var7, var10);
        var4 = var7[var4];
        var7 = var7[var8];
        var _closure2_slot5 = var7;
        var8 = _closure1_slot4;
        var7 = new Array(2);
        var7[0] = var6;
        var7[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                var3 = null;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 2;
                var6 = var9[var2];
                var5 = undefined;
                var6 = var4.bind(var5)(var6);
                var8 = var6.intl;
                var6 = var8.format;
                var2 = var9[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.t;
                var4 = var2.7gHWra;
                var2 = {};
                var9 = '1 orb';
                var2['amount'] = var9;
                var9 = _closure2_slot3;
                var9 = var9.message;
                var2['errorMessage'] = var9;
                var4 = var6.bind(var8)(var4, var2);
                var2 = _closure2_slot0;
                var2 = var2.bind(var5)(var4);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = _closure2_slot1;
                if(!(var3 != var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var2 = _closure2_slot1;
                var3 = var2.length;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0001_ip = 7; continue _fun0001 }
case 5:
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = '';
                var2 = var4.bind(var3)(var2);
                _fun0001_ip = 4; continue _fun0001;
case 7:
                var4 = _closure2_slot1;
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = var1.sku;
                        var1 = null;
                        var3 = var1 == var2;
                        var1 = undefined;
                        if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var1 = var2.name;
case 8:
                        return var1;
                    }
                };
                var11 = var3.bind(var4)(var2);
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var5 = var8[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.format;
                var2 = var8[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.JxNFam;
                var2 = {};
                var8 = '1 orb';
                var2['amountDescription'] = var8;
                var8 = var11.length;
                var14 = 'SKUs';
                var10 = 1;
                if(!(var10 === var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var14 = 'SKU';
case 10:
                var8 = var11.join;
                var9 = ', ';
                var13 = var8.bind(var11)(var9);
                var8 = _closure2_slot1;
                var8 = var8.length;
                var12 = 'IDs';
                if(!(var10 === var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var12 = 'ID';
case 12:
                var10 = _closure2_slot1;
                var8 = var10.map;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var8 = var8.bind(var10)(var7);
                var7 = var8.join;
                var15 = var7.bind(var8)(var9);
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var22 = '';
                var8 = ': ';
                var18 = '. Entitlement ';
                var21 = var14;
                var20 = var8;
                var19 = var13;
                var17 = var12;
                var16 = var8;
                var7 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14);
                var2['redeemedItemDescription'] = var7;
                var2 = var5.bind(var6)(var4, var2);
                var1 = _closure2_slot0;
                var1 = var1.bind(var3)(var2);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var1['entitlements'] = var6;
        var1['error'] = var5;
        var1['isSubmitting'] = var4;
        var1['responseMessage'] = var3;
        var2 = function redeemVirtualCurrency(arg1, arg2, arg3) {
            var1 = arg3;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.redeemVirtualCurrencyForSKU;
            var1 = {};
            var5 = arg1;
            var1['skuId'] = var5;
            var5 = arg2;
            var1['loadId'] = var5;
            var5 = function onRedeemStart() {
                var4 = _closure2_slot5;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot4;
                var2 = null;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onRedeemStart'] = var5;
            var5 = function onRedeemSucceed(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var4 = _closure2_slot5;
                    var2 = false;
                    var2 = var4.bind(var1)(var2);
                    var5 = _closure3_slot0;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var1)(var3);
case 14:
                    return var1;
                }
            };
            var1['onRedeemSucceed'] = var5;
            var4 = function onRedeemFail(arg1) {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot5;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onRedeemFail'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['redeemVirtualCurrency'] = var2;
        return var1;
    };
    var3['useRedeemVirtualCurrency'] = var2;
    return var1;
})();