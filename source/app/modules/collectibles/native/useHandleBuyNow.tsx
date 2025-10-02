// app/modules/collectibles/native/useHandleBuyNow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useHandleBuyNow';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var2 = function useHandleBuyNow(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var _closure2_slot0 = var7;
        var9 = var1.analyticsLocations;
        var8 = var1.onBuy;
        var _closure2_slot1 = var8;
        var10 = undefined;
        var _closure2_slot3 = var10;
        var1 = function _onPurchaseComplete() {
            var4 = undefined;
            var1 = undefined;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 5;
                        var2 = var9[var2];
                        var3 = undefined;
                        var6 = var8.bind(var3)(var2);
                        var5 = var6.fetchCollectiblesPurchases;
                        var2 = {};
                        var7 = 6;
                        var7 = var9[var7];
                        var7 = var8.bind(var3)(var7);
                        var7 = var7.ShopVariantsReturnStyle;
                        var7 = var7.INDIVIDUAL_PRODUCTS;
                        var2['variantsReturnStyle'] = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=81);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                        var6 = _closure2_slot3;
                        var5 = false;
                        var5 = var6.bind(var3)(var5);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var4 = var6[var4];
                        var8 = var5.bind(var3)(var4);
                        var4 = var8.hideActionSheet;
                        var4 = var4.bind(var8)();
                        var4 = 8;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.open;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var4['product'] = var7;
                        var7 = true;
                        var4['useCategoryImage'] = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            _closure2_slot5 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure2_slot5 = var1;
        var6 = _closure1_slot5;
        var2 = var6.useState;
        var1 = false;
        var5 = var2.bind(var6)(var1);
        var2 = _closure1_slot4;
        var1 = 2;
        var5 = var2.bind(var10)(var5, var1);
        var1 = 0;
        var2 = var5[var1];
        var _closure2_slot2 = var2;
        var1 = 1;
        var1 = var5[var1];
        _closure2_slot3 = var1;
        var5 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 4;
        var1 = var11[var1];
        var5 = var5.bind(var10)(var1);
        var1 = {};
        var1['product'] = var7;
        var1['analyticsLocations'] = var9;
        var9 = function onPurchaseComplete() {
            var1 = undefined;
            var4 = _closure2_slot5;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['onPurchaseComplete'] = var9;
        var9 = function onPurchaseError() {
            var3 = _closure2_slot3;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['onPurchaseError'] = var9;
        var9 = function onPurchasePending() {
            var1 = undefined;
            return var1;
        };
        var1['onPurchasePending'] = var9;
        var9 = var5.bind(var10)(var1);
        var _closure2_slot4 = var9;
        var1 = {};
        var5 = var6.useCallback;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 3: // try_start_0
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var5 = _closure2_slot3;
                    var4 = undefined;
                    var2 = true;
                    var2 = var5.bind(var4)(var2);
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=45);
case 11:
                    return var2;
case 12:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = _closure2_slot1;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0002_ip = 9; continue _fun0002 }
case 15:
                    var3 = _closure2_slot1;
                    var3 = var3.bind(var4)();
                    _fun0002_ip = 9; continue _fun0002;
case 13: // try_end0
                    return var2;
case 9:
                    _fun0002_ip = 16; continue _fun0002;
case 4: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = _closure2_slot3;
                    var4 = undefined;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    var8 = _closure1_slot6;
                    var6 = var8.error;
                    var3 = global;
                    var10 = var3.JSON;
                    var9 = var10.stringify;
                    var10 = var9.bind(var10)(var5);
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var3 = 'Error running purchase: ';
                    var3 = var9.bind(var3)(var10);
                    var3 = var6.bind(var8)(var3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.captureBillingException;
                    var2 = {};
                    var6 = {};
                    var8 = 'useHandleBuyNow';
                    var6['source'] = var8;
                    var7 = _closure2_slot0;
                    var7 = var7.skuId;
                    var6['skuId'] = var7;
                    var2['tags'] = var6;
                    var2 = var3.bind(var4)(var5, var2);
case 16:
                    var2 = undefined;
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var10)(var3);
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var2;
        var3[2] = var8;
        var7 = var7.skuId;
        var3[3] = var7;
        var3 = var5.bind(var6)(var4, var3);
        var1['handleBuyNow'] = var3;
        var1['isBuying'] = var2;
        return var1;
    };
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useHandleBuyNow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    var3['useHandleBuyNow'] = var2;
    return var1;
})();