// app/modules/collectibles/native/hooks/useTrackShopCardImpression.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function trackOnConsecutiveVisibility(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var4 = arg3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
            var4['current'] = var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var1.current;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var5 = var4.current;
            var3 = !var5;
case 5:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var5 = arg4;
            var3 = undefined;
            var3 = var5.bind(var3)();
            var3 = true;
            var4['current'] = var3;
case 4:
            var1['current'] = var2;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function isVisibleAtThreshold(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var10 = arg1;
            var11 = arg2;
            var2 = arg3;
            var1 = arg4;
            var3 = global;
            var7 = var3.Math;
            var6 = var7.max;
            var9 = var3.Math;
            var8 = var9.min;
            var5 = var11 + var1;
            var4 = arg6;
            var8 = var8.bind(var9)(var5, var4);
            var9 = var3.Math;
            var5 = var9.max;
            var4 = 0;
            var5 = var5.bind(var9)(var11, var4);
            var5 = var8 - var5;
            var5 = var6.bind(var7)(var4, var5);
            var7 = var3.Math;
            var6 = var7.max;
            var12 = var3.Math;
            var11 = var12.min;
            var9 = var10 + var2;
            var8 = arg5;
            var8 = var11.bind(var12)(var9, var8);
            var9 = var3.Math;
            var3 = var9.max;
            var3 = var3.bind(var9)(var10, var4);
            var3 = var8 - var3;
            var3 = var6.bind(var7)(var4, var3);
            var3 = var5 * var3;
            var2 = var2 * var1;
            var1 = var2 > var4;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var3 > var4;
case 8:
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = var3 / var2;
            var2 = arg7;
            var1 = var3 >= var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/hooks/useTrackShopCardImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackShopCardImpression(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var14 = arg1;
            var13 = arg2;
            var8 = arg3;
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var10 = undefined;
            var4 = var7.bind(var10)(var1);
            var1 = var4.useCollectiblesAnalyticsContext;
            var11 = var1.bind(var4)();
            var _closure2_slot3 = var11;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var9[var1];
            var1 = var5.bind(var10)(var1);
            var1 = var1.bind(var10)();
            var4 = var1.analyticsLocations;
            var _closure2_slot4 = var4;
            var1 = 4;
            var1 = var9[var1];
            var1 = var5.bind(var10)(var1);
            var1 = var1.bind(var10)();
            var16 = var1.width;
            var _closure2_slot5 = var16;
            var6 = var1.height;
            var _closure2_slot6 = var6;
            var1 = 5;
            var1 = var9[var1];
            var7 = var7.bind(var10)(var1);
            var1 = var7.useCurrentUser;
            var7 = var1.bind(var7)();
            var1 = 6;
            var1 = var9[var1];
            var5 = var5.bind(var10)(var1);
            var1 = var5.canUseCollectibles;
            var5 = var1.bind(var5)(var7);
            var _closure2_slot7 = var5;
            var9 = _closure1_slot3;
            var1 = var9.useRef;
            var12 = null;
            var1 = var1.bind(var9)(var12);
            var _closure2_slot8 = var1;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var12);
            var _closure2_slot9 = var7;
            var15 = var9.useRef;
            var7 = {};
            var7['windowWidth'] = var16;
            var7['windowHeight'] = var6;
            var7 = var15.bind(var9)(var7);
            var _closure2_slot10 = var7;
            var7 = var9.useRef;
            var15 = false;
            var7 = var7.bind(var9)(var15);
            var _closure2_slot11 = var7;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var15);
            var _closure2_slot12 = var7;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var15);
            var _closure2_slot13 = var7;
            var7 = var9.useRef;
            var7 = var7.bind(var9)(var15);
            var _closure2_slot14 = var7;
            var15 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var6;
            var6 = function() {
                var2 = _closure2_slot10;
                var1 = {};
                var4 = _closure2_slot5;
                var1['windowWidth'] = var4;
                var3 = _closure2_slot6;
                var1['windowHeight'] = var3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var15.bind(var9)(var6, var7);
            var7 = var9.useCallback;
            var6 = new Array(7);
            var6[0] = var5;
            var15 = var12 == var11;
            var5 = undefined;
            if(var15) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var5 = var11.sessionId;
case 12:
            var6[1] = var5;
            var15 = var12 == var11;
            var5 = undefined;
            if(var15) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var5 = var11.tilePosition;
case 14:
            var6[2] = var5;
            var15 = var12 == var11;
            var5 = undefined;
            if(var15) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var5 = var11.pageCategory;
case 16:
            var6[3] = var5;
            var15 = var12 == var11;
            var5 = undefined;
            if(var15) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = var11.pageSection;
case 18:
            var6[4] = var5;
            var15 = var12 == var11;
            var5 = undefined;
            if(var15) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var11.categoryPosition;
case 20:
            var6[5] = var5;
            var6[6] = var14;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var8 = null;
                    var1 = var8 != var1;
                    var10 = null;
                    if(!var1) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getPriceForCollectiblesProduct;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot7;
                    var1 = true;
                    var10 = var4.bind(var5)(var3, var2, var1);
case 22:
                    var1 = _closure2_slot0;
                    var2 = var8 != var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var9 = var3.bind(var1)(var2);
                    var5 = var9.getStrikeThroughPriceAmountForCollectiblesProduct;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot7;
                    var2 = true;
                    var6 = var5.bind(var9)(var4, var3, var2);
case 24:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.COLLECTIBLES_TILE_IMPRESSION;
                    var2 = {};
                    var9 = _closure2_slot3;
                    var11 = var8 == var9;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var11 = _closure2_slot3;
                    var9 = var11.sessionId;
case 26:
                    var2['collectibles_shop_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var9 = var9.skuId;
                    var2['sku_id'] = var9;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var9 = var10.amount;
case 28:
                    var2['display_price'] = var9;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var11 = var10.currency;
                    var10 = var11.toString;
                    var9 = var10.bind(var11)();
case 30:
                    var2['display_price_currency'] = var9;
                    var2['display_price_strikethrough'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var9 = _closure2_slot3;
                    var6 = var9.tilePosition;
case 32:
                    var2['position'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var9 = _closure2_slot3;
                    var6 = var9.pageCategory;
case 34:
                    var2['page_category'] = var6;
                    var6 = _closure2_slot3;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var9 = _closure2_slot3;
                    var6 = var9.pageSection;
case 36:
                    var2['page_section'] = var6;
                    var6 = _closure2_slot3;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var7 = _closure2_slot3;
                    var6 = var7.categoryPosition;
case 38:
                    var2['category_position'] = var6;
                    var6 = 'product';
                    var2['type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var5, var6);
            var _closure2_slot15 = var7;
            var9 = _closure1_slot3;
            var6 = var9.useCallback;
            var5 = new Array(6);
            var5[0] = var14;
            var5[1] = var13;
            var14 = var12 == var11;
            var13 = undefined;
            if(var14) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var13 = var11.cardId;
case 40:
            var5[2] = var13;
            var14 = var12 == var11;
            var13 = undefined;
            if(var14) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var13 = var11.sessionId;
case 42:
            var5[3] = var13;
            var12 = var12 == var11;
            var10 = undefined;
            if(var12) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var10 = var11.tilePosition;
case 44:
            var5[4] = var10;
            var5[5] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 9;
                    var2 = var8[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.trackImpression;
                    var4 = {};
                    var2 = 10;
                    var9 = var8[var2];
                    var9 = var3.bind(var1)(var9);
                    var9 = var9.ImpressionNames;
                    var9 = var9.SHOP_CARD;
                    var4['name'] = var9;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.ImpressionTypes;
                    var2 = var2.VIEW;
                    var4['type'] = var2;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var8 = var8.skuId;
                    var2['sku_id'] = var8;
                    var8 = _closure2_slot3;
                    var9 = null;
                    var10 = var9 == var8;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                    var10 = _closure2_slot3;
                    var8 = var10.cardId;
case 46:
                    var2['card_id'] = var8;
                    var8 = _closure2_slot3;
                    var10 = var9 == var8;
                    var8 = undefined;
                    if(var10) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                    var10 = _closure2_slot3;
                    var8 = var10.sessionId;
case 48:
                    var2['shop_session_id'] = var8;
                    var8 = _closure2_slot3;
                    var9 = var9 == var8;
                    var8 = undefined;
                    if(var9) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var9 = _closure2_slot3;
                    var8 = var9.tilePosition;
case 50:
                    var2['position_in_section'] = var8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 11;
                    var7 = var9[var7];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.getProductSkuIds;
                    var7 = _closure2_slot0;
                    var7 = var8.bind(var9)(var7);
                    var2['product_sku_ids'] = var7;
                    var3 = _closure2_slot4;
                    var2['location_stack'] = var3;
                    var4['properties'] = var2;
                    var3 = false;
                    var2 = true;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var4, var5);
            var _closure2_slot16 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0006_ip = 52; continue _fun0006 }
case 3:
                    var3 = undefined;
                    return var3;
case 52:
                    var3 = _closure2_slot9;
                    var2 = global;
                    var6 = var2.setInterval;
                    var5 = undefined;
                    var4 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure2_slot8;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0007_ip = 53; continue _fun0007 }
case 23:
                            var1 = _closure2_slot8;
                            var3 = var1.current;
                            var2 = var3.measure;
                            var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                                var12 = arg3;
                                var11 = arg4;
                                var10 = arg5;
                                var9 = arg6;
                                var1 = _closure2_slot10;
                                var1 = var1.current;
                                var7 = var1.windowWidth;
                                var6 = var1.windowHeight;
                                var5 = _closure1_slot6;
                                var1 = undefined;
                                var13 = 0;
                                var20 = undefined;
                                var19 = var10;
                                var18 = var9;
                                var17 = var12;
                                var16 = var11;
                                var15 = var7;
                                var14 = var6;
                                var8 = var20[var5](var19, var18, var17, var16, var15, var14, var13, var12);
                                var13 = 0.5;
                                var19 = var10;
                                var18 = var9;
                                var17 = var12;
                                var16 = var11;
                                var15 = var7;
                                var14 = var6;
                                var6 = var20[var5](var19, var18, var17, var16, var15, var14, var13, var12);
                                var5 = _closure1_slot5;
                                var18 = _closure2_slot11;
                                var17 = _closure2_slot12;
                                var16 = _closure2_slot15;
                                var19 = var8;
                                var3 = var20[var5](var19, var18, var17, var16, var15);
                                var18 = _closure2_slot13;
                                var17 = _closure2_slot14;
                                var16 = _closure2_slot16;
                                var19 = var6;
                                var2 = var20[var5](var19, var18, var17, var16, var15);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 53:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 1000;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
                    var1 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot9;
                            var2 = var2.current;
                            var3 = null;
                            if(!(var3 !== var2)) { _fun0008_ip = 54; continue _fun0008 }
case 23:
                            var2 = global;
                            var6 = var2.clearInterval;
                            var2 = _closure2_slot9;
                            var5 = var2.current;
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var2['current'] = var3;
case 54:
                            var3 = _closure2_slot11;
                            var2 = false;
                            var3['current'] = var2;
                            var3 = _closure2_slot12;
                            var3['current'] = var2;
                            var3 = _closure2_slot13;
                            var3['current'] = var2;
                            var1 = _closure2_slot14;
                            var1['current'] = var2;
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useTrackShopCardImpression'] = var2;
    return var1;
})();