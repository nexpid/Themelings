// app/modules/collectibles/hooks/useTrackPdpClick.tsx
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useTrackPdpClick.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackPdpClick(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.skuId;
            var _closure2_slot0 = var10;
            var7 = var2.productSkuIds;
            var _closure2_slot1 = var7;
            var9 = var2.analyticsLocations;
            var _closure2_slot2 = var9;
            var11 = undefined;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var11)(var3);
            var3 = var4.useCollectiblesAnalyticsContext;
            var3 = var3.bind(var4)();
            var4 = null;
            if(!(var4 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var8 = var3.cardId;
            _closure2_slot3 = var8;
            var6 = var3.sessionId;
            _closure2_slot4 = var6;
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 3;
            var3 = var12[var3];
            var5 = var4.bind(var11)(var3);
            var3 = var5.useCurrentUserIfAvailable;
            var5 = var3.bind(var5)();
            var3 = 4;
            var3 = var12[var3];
            var4 = var4.bind(var11)(var3);
            var3 = var4.getShopDiscountSource;
            var5 = var3.bind(var4)(var5);
            _closure2_slot5 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg2;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.SHOP_PRODUCT_DETAIL_PAGE_CLICKED;
                    var2 = {};
                    var8 = null;
                    if(!(var8 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure2_slot0;
case 4:
                    var2['sku_id'] = var6;
                    var6 = arg1;
                    var2['cta'] = var6;
                    var8 = _closure2_slot4;
                    var2['shop_session_id'] = var8;
                    var8 = _closure2_slot3;
                    var2['card_id'] = var8;
                    var8 = _closure2_slot1;
                    var2['product_sku_ids'] = var8;
                    var8 = _closure2_slot2;
                    var2['location_stack'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getAnalyticsShopDiscountSource;
                    var6 = _closure2_slot5;
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
    var3['useTrackPdpClick'] = var2;
    return var1;
})();