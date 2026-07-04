// app/modules/collectibles/native/CollectiblesShopOrbsPage.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flex': 1};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopOrbsPage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.shopBlocks;
            var2 = var3.fetchShopHomeError;
            var11 = var3.onRenderFirstOrbsItem;
            var _closure2_slot0 = var11;
            var4 = var3.getItemType;
            var3 = _closure1_slot8;
            var5 = undefined;
            var7 = var3.bind(var5)();
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var13 = var3.analyticsLocations;
            var _closure2_slot1 = var13;
            var10 = _closure1_slot0;
            var3 = 7;
            var3 = var12[var3];
            var8 = var10.bind(var5)(var3);
            var3 = var8.useCollectiblesAnalyticsContext;
            var3 = var3.bind(var8)();
            var _closure2_slot2 = var3;
            var8 = 8;
            var8 = var12[var8];
            var12 = var10.bind(var5)(var8);
            var10 = var12.useCollectiblesShopDeepLinkProps;
            var8 = {};
            var8 = var10.bind(var12)(var8);
            var16 = var8.initialProductSkuId;
            var _closure2_slot3 = var16;
            var15 = var8.initialVariantIndex;
            var _closure2_slot4 = var15;
            var14 = var8.initialCategorySkuId;
            var _closure2_slot5 = var14;
            var10 = _closure1_slot3;
            var12 = var10.useEffect;
            var8 = new Array(5);
            var8[0] = var16;
            var8[1] = var15;
            var8[2] = var14;
            var8[3] = var13;
            var8[4] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot5;
                    if(!(var7 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var4 = _closure1_slot5;
                    var3 = var4.getCategory;
                    var2 = _closure2_slot5;
                    var2 = var3.bind(var4)(var2);
                    var3 = var7 == var2;
                    var4 = undefined;
                    var6 = undefined;
                    if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var8 = var2.products;
                    var3 = var8.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.skuId;
                        var1 = _closure2_slot3;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var3.bind(var8)(var2);
case 5:
                    if(!(var7 != var6)) { _fun0002_ip = 2; continue _fun0002 }
case 7:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var2 = var3[var2];
                    var8 = var8.bind(var4)(var2);
                    var2 = var8.hideActionSheet;
                    var2 = var2.bind(var8)();
                    var2 = _closure1_slot0;
                    var1 = 10;
                    var1 = var3[var1];
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.openProductDetailsActionSheet;
                    var1 = {};
                    var1['product'] = var6;
                    var6 = _closure2_slot4;
                    var1['initialVariantIndex'] = var6;
                    var6 = _closure2_slot1;
                    var1['analyticsLocations'] = var6;
                    var6 = _closure2_slot2;
                    var6 = var7 != var6;
                    var4 = undefined;
                    if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot2;
case 8:
                    var1['shopAnalyticsContext'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var10)(var3, var8);
            var8 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var2 = var1.index;
                    var1 = 0;
                    if(!(var1 === var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 10:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['block'] = var6;
                    var5 = _closure1_slot6;
                    var5 = var5.ORBS;
                    var1['screen'] = var5;
                    var5 = true;
                    var1['preferVCPrice'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var8 = var8.bind(var10)(var1, var3);
            var1 = null;
            if(!(var1 === var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var9.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 15;
            var1 = var10[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['data'] = var9;
            var1['renderItem'] = var8;
            var1['getItemType'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 15; continue _fun0001;
case 12:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.container;
            var2['style'] = var7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 12;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.EmptyState;
            var6 = {};
            var8 = {};
            var9 = 42;
            var8['marginTop'] = var9;
            var6['style'] = var8;
            var8 = 13;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.NoResults;
            var6['Illustration'] = var8;
            var8 = 14;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.eAn6z2;
            var8 = var9.bind(var10)(var8);
            var6['body'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();