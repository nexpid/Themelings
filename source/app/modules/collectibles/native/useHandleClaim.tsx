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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useHandleClaim.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        var1 = arg1;
        var7 = var1.product;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 2;
        var1 = var5[var1];
        var8 = undefined;
        var5 = var4.bind(var8)(var1);
        var4 = var5.useShopVariantsReturnStyle;
        var1 = 'useHandleClaim';
        var6 = var4.bind(var5)(var1);
        var _closure2_slot1 = var6;
        var1 = {};
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var3 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 298; continue _fun0001 }
 10: // try_start_0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 3;
                    var2 = var2[var7];
                    var5 = undefined;
                    var8 = var3.bind(var5)(var2);
                    var3 = var8.claimPremiumCollectiblesProduct;
                    var2 = _closure2_slot0;
                    var2 = var2.skuId;
                    var2 = var3.bind(var8)(var2);
                    SaveGenerator(address=63);
 61:
                    return var2;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 185; continue _fun0001 }
 69:
                    var9 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 4;
                    var8 = var3[var8];
                    var10 = var9.bind(var5)(var8);
                    var8 = var10.hideActionSheet;
                    var8 = var8.bind(var10)();
                    var8 = 5;
                    var8 = var3[var8];
                    var10 = var9.bind(var5)(var8);
                    var9 = var10.open;
                    var8 = {};
                    var11 = _closure2_slot0;
                    var8['product'] = var11;
                    var11 = true;
                    var8['useCategoryImage'] = var11;
                    var8 = var9.bind(var10)(var8);
                    var4 = _closure1_slot0;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.fetchCollectiblesPurchases;
                    var3 = {};
                    var6 = _closure2_slot1;
                    var3['variantsReturnStyle'] = var6;
                    var6 = 'useHandleClaim';
                    var3['location'] = var6;
                    var3 = var4.bind(var5)(var3);
 183: // try_end0
                    _fun0001_ip = 293; continue _fun0001;
 185:
                    return var2;
 188: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 6;
                    var2 = var10[var2];
                    var9 = undefined;
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var6 = 'collectible shop claim error';
                    var2['key'] = var6;
                    var8 = _closure1_slot0;
                    var5 = 7;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.CKsXk5;
                    var5 = var6.bind(var7)(var5);
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
 293:
                    var2 = undefined;
                    return var2;
 298:
                    return var1;
                }
            };
            return var1;
        };
        var3 = var3.bind(var8)(var2);
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['handleClaim'] = var2;
        return var1;
    };
    var3['useHandleClaim'] = var2;
    return var1;
})();