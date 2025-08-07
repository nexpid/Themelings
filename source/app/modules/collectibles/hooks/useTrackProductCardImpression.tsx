// app/modules/collectibles/hooks/useTrackProductCardImpression.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useTrackProductCardImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackProductCardImpression(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var9 = arg2;
            var2 = arguments[2];
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var9;
            var11 = undefined;
            if(!(var2 === var11)) { _fun0001_ip = 29; continue _fun0001 }
 25:
            var2 = 'product';
 29:
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var11;
            var _closure2_slot5 = var11;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var11;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 3;
            var4 = var10[var4];
            var6 = var5.bind(var11)(var4);
            var4 = var6.useCollectiblesAnalyticsContext;
            var12 = var4.bind(var6)();
            _closure2_slot3 = var12;
            var4 = 4;
            var4 = var10[var4];
            var13 = var5.bind(var11)(var4);
            var8 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getProduct;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var13)(var6, var4);
            _closure2_slot4 = var8;
            var4 = 5;
            var4 = var10[var4];
            var5 = var5.bind(var11)(var4);
            var4 = var5.useCurrentUser;
            var6 = var4.bind(var5)();
            var5 = _closure1_slot1;
            var4 = 6;
            var4 = var10[var4];
            var5 = var5.bind(var11)(var4);
            var4 = var5.canUseCollectibles;
            var10 = var4.bind(var5)(var6);
            _closure2_slot5 = var10;
            var6 = _closure1_slot3;
            var4 = var6.useRef;
            var13 = null;
            var4 = var4.bind(var6)(var13);
            _closure2_slot6 = var4;
            var5 = var6.useCallback;
            var4 = var13 == var12;
            var14 = undefined;
            if(var4) { _fun0001_ip = 229; continue _fun0001 }
 223:
            var14 = var12.sessionId;
 229:
            var4 = new Array(10);
            var4[0] = var14;
            var15 = var13 == var12;
            var14 = undefined;
            if(var15) { _fun0001_ip = 252; continue _fun0001 }
 246:
            var14 = var12.categoryPosition;
 252:
            var4[1] = var14;
            var15 = var13 == var12;
            var14 = undefined;
            if(var15) { _fun0001_ip = 271; continue _fun0001 }
 265:
            var14 = var12.pageCategory;
 271:
            var4[2] = var14;
            var15 = var13 == var12;
            var14 = undefined;
            if(var15) { _fun0001_ip = 290; continue _fun0001 }
 284:
            var14 = var12.pageSection;
 290:
            var4[3] = var14;
            var13 = var13 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 309; continue _fun0001 }
 303:
            var11 = var12.tilePosition;
 309:
            var4[4] = var11;
            var4[5] = var10;
            var4[6] = var9;
            var4[7] = var8;
            var4[8] = var7;
            var4[9] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot4;
                    var8 = null;
                    var1 = var8 != var1;
                    var10 = null;
                    if(!var1) { _fun0002_ip = 66; continue _fun0002 }
 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getPriceForCollectiblesProduct;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var1 = true;
                    var10 = var4.bind(var5)(var3, var2, var1);
 66:
                    var1 = _closure2_slot4;
                    var2 = var8 != var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(!var2) { _fun0002_ip = 127; continue _fun0002 }
 81:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var9 = var3.bind(var1)(var2);
                    var5 = var9.getStrikeThroughPriceAmountForCollectiblesProduct;
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot5;
                    var2 = true;
                    var6 = var5.bind(var9)(var4, var3, var2);
 127:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.COLLECTIBLES_TILE_IMPRESSION;
                    var2 = {};
                    var9 = _closure2_slot3;
                    var11 = var8 == var9;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 190; continue _fun0002 }
 180:
                    var11 = _closure2_slot3;
                    var9 = var11.sessionId;
 190:
                    var2['collectibles_shop_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var2['sku_id'] = var9;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 219; continue _fun0002 }
 213:
                    var9 = var10.amount;
 219:
                    var2['display_price'] = var9;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 250; continue _fun0002 }
 235:
                    var11 = var10.currency;
                    var10 = var11.toString;
                    var9 = var10.bind(var11)();
 250:
                    var2['display_price_currency'] = var9;
                    var2['display_price_strikethrough'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 287; continue _fun0002 }
 277:
                    var9 = _closure2_slot3;
                    var6 = var9.tilePosition;
 287:
                    var2['position'] = var6;
                    var6 = _closure2_slot1;
                    var2['page_type'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 323; continue _fun0002 }
 313:
                    var9 = _closure2_slot3;
                    var6 = var9.pageCategory;
 323:
                    var2['page_category'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0002_ip = 351; continue _fun0002 }
 341:
                    var9 = _closure2_slot3;
                    var6 = var9.pageSection;
 351:
                    var2['page_section'] = var6;
                    var6 = _closure2_slot2;
                    var2['type'] = var6;
                    var6 = _closure2_slot3;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 387; continue _fun0002 }
 377:
                    var7 = _closure2_slot3;
                    var6 = var7.categoryPosition;
 387:
                    var2['category_position'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var4);
            _closure2_slot7 = var2;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    var4 = arg1;
                    if(var4) { _fun0003_ip = 60; continue _fun0003 }
 20:
                    if(!(var2 !== var3)) { _fun0003_ip = 105; continue _fun0003 }
 24:
                    var4 = global;
                    var6 = var4.clearTimeout;
                    var4 = _closure2_slot6;
                    var5 = var4.current;
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = _closure2_slot6;
                    var4['current'] = var2;
                    _fun0003_ip = 105; continue _fun0003;
 60:
                    if(!(var2 === var3)) { _fun0003_ip = 105; continue _fun0003 }
 64:
                    var2 = _closure2_slot6;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot7;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var3 = _closure2_slot6;
                        var2 = null;
                        var3['current'] = var2;
                        return var1;
                    };
                    var1 = 1000;
                    var1 = var5.bind(var4)(var3, var1);
                    var2['current'] = var1;
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            var4 = var5.useEffect;
            var3 = function() {
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot6;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 !== var3)) { _fun0004_ip = 52; continue _fun0004 }
 18:
                        var3 = global;
                        var5 = var3.clearTimeout;
                        var3 = _closure2_slot6;
                        var4 = var3.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1 = _closure2_slot6;
                        var1['current'] = var2;
 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var4.bind(var5)(var3, var1);
            var1 = {};
            var1['handleCardVisibilityChange'] = var2;
            return var1;
        }
    };
    var3['useTrackProductCardImpression'] = var2;
    return var1;
})();