// app/modules/collectibles/hooks/useTrackShopCardClick.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useSelectedVariantIndex;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useTrackShopCardClick.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackShopCardClick(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.product;
            var _closure2_slot0 = var11;
            var7 = var2.analyticsLocations;
            var _closure2_slot1 = var7;
            var12 = undefined;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var12;
            var _closure2_slot6 = var12;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var4 = var4.bind(var12)(var3);
            var3 = var4.useCollectiblesAnalyticsContext;
            var3 = var3.bind(var4)();
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var8 = var3.cardId;
            _closure2_slot2 = var8;
            var9 = var3.sessionId;
            _closure2_slot3 = var9;
            var6 = var3.tilePosition;
            _closure2_slot4 = var6;
            var3 = _closure1_slot4;
            var10 = var3.bind(var12)(var11);
            _closure2_slot5 = var10;
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 4;
            var3 = var13[var3];
            var5 = var4.bind(var12)(var3);
            var3 = var5.useCurrentUserIfAvailable;
            var5 = var3.bind(var5)();
            var3 = 5;
            var3 = var13[var3];
            var4 = var4.bind(var12)(var3);
            var3 = var4.getShopDiscountSource;
            var5 = var3.bind(var4)(var5);
            _closure2_slot6 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var2[5] = var6;
            var2[6] = var5;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg2;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 6;
                    var2 = var1[var7];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.getIsVariantProduct;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2);
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var3 = var2.variants;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot5;
case 6:
                    var3 = var3[var4];
                    var4 = var2 == var3;
                    var10 = undefined;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = var3.skuId;
case 8:
                    if(!(var2 == var10)) { _fun0002_ip = 10; continue _fun0002 }
case 4:
                    var2 = _closure2_slot0;
                    var10 = var2.skuId;
case 10:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 7;
                    var2 = var9[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.SHOP_CARD_CLICKED;
                    var2 = {};
                    var2['sku_id'] = var10;
                    var10 = arg1;
                    var2['cta'] = var10;
                    var10 = _closure2_slot3;
                    var2['shop_session_id'] = var10;
                    var10 = _closure2_slot2;
                    var2['card_id'] = var10;
                    var8 = _closure1_slot0;
                    var7 = var9[var7];
                    var11 = var8.bind(var1)(var7);
                    var10 = var11.getProductSkuIds;
                    var7 = _closure2_slot0;
                    var7 = var10.bind(var11)(var7);
                    var2['product_sku_ids'] = var7;
                    var7 = _closure2_slot1;
                    var2['location_stack'] = var7;
                    var7 = _closure2_slot4;
                    var2['position_in_section'] = var7;
                    var7 = 5;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getAnalyticsShopDiscountSource;
                    var6 = _closure2_slot6;
                    var6 = var7.bind(var8)(var6);
                    var2['discount_source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useTrackShopCardClick'] = var2;
    return var1;
})();