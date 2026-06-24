// app/modules/collectibles/native/useHandleClaim.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useHandleClaim.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useHandleClaim(arg1) {
        var1 = arg1;
        var6 = var1.product;
        var _closure2_slot0 = var6;
        var1 = {};
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var7 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 2;
                    var2 = var2[var6];
                    var5 = undefined;
                    var7 = var3.bind(var5)(var2);
                    var3 = var7.claimPremiumCollectiblesProduct;
                    var2 = _closure2_slot0;
                    var2 = var2.skuId;
                    var2 = var3.bind(var7)(var2);
                    SaveGenerator(address=62);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var7 = 3;
                    var7 = var3[var7];
                    var9 = var8.bind(var5)(var7);
                    var7 = var9.hideActionSheet;
                    var7 = var7.bind(var9)();
                    var7 = 4;
                    var7 = var3[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.open;
                    var7 = {};
                    var10 = _closure2_slot0;
                    var7['product'] = var10;
                    var10 = true;
                    var7['useCategoryImage'] = var10;
                    var7 = var8.bind(var9)(var7);
                    var4 = _closure1_slot0;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.fetchCollectiblesPurchases;
                    var3 = var3.bind(var4)();
case 8: // try_end0
                    _fun0001_ip = 9; continue _fun0001;
case 6:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 5;
                    var2 = var10[var2];
                    var9 = undefined;
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var6 = 'collectible shop claim error';
                    var2['key'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.CKsXk3;
                    var5 = var6.bind(var7)(var5);
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
case 9:
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var7.bind(var3)(var2);
        var2 = new Array(1);
        var2[0] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['handleClaim'] = var2;
        return var1;
    };
    var3['useHandleClaim'] = var2;
    return var1;
})();