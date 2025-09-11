// app/modules/collectibles/native/CollectiblesShopCardV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = require;
        var14 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var14;
        var _closure1_slot2 = var8;
        var1 = global;
        var6 = var1.Object;
        var4 = var6.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var6)(var3, var1, var2);
        var1 = 0;
        var4 = var8[var1];
        var2 = metroImportAll;
        var1 = undefined;
        var9 = var2.bind(var1)(var4);
        var _closure1_slot3 = var9;
        var2 = 1;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.PixelRatio;
        var2 = 2;
        var2 = var8[var2];
        var2 = var14.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var6 = var2.jsx;
        var _closure1_slot5 = var6;
        var2 = var2.jsxs;
        var _closure1_slot6 = var2;
        var2 = var4.getFontScale;
        var4 = var2.bind(var4)();
        var2 = 1.78;
        var2 = var4 >= var2;
        var4 = 170;
        if(!var2) { _fun0001_ip = 178; continue _fun0001 }
 172:
        var4 = 302;
 178:
        var2 = 4;
        var2 = var8[var2];
        var11 = var7.bind(var1)(var2);
        var10 = var11.createStyles;
        var6 = {};
        var12 = {'height': null, 'width': 150, 'display': 'flex', 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
        var12['height'] = var4;
        var2 = 150;
        var13 = 5;
        var15 = var8[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var12['borderRadius'] = var15;
        var15 = var8[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BORDER_SUBTLE;
        var12['borderColor'] = var15;
        var6['card'] = var12;
        var12 = {};
        var13 = var8[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.BORDER_FAINT;
        var12['borderColor'] = var13;
        var6['cardProfileEffectBorder'] = var12;
        var12 = {'position': 'absolute', 'top': 6, 'right': 6, 'zIndex': 2};
        var6['premiumWheel'] = var12;
        var6 = var10.bind(var11)(var6);
        var _closure1_slot7 = var6;
        var6 = function CollectiblesShopCardInternalV2(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var11 = var1.product;
                var5 = var1.onPress;
                var15 = var1.unpublishedAt;
                var10 = var1.collectibleProductState;
                var14 = var1.solidBackground;
                var9 = var1.preferVCPrice;
                var1 = _closure1_slot7;
                var4 = undefined;
                var16 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var12 = var2.bind(var4)(var1);
                var8 = var12.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isThemeDark;
                    var1 = _closure1_slot4;
                    var1 = var1.theme;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var13 = var8.bind(var12)(var3, var1);
                var3 = _closure1_slot6;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var16.card;
                var8 = new Array(2);
                var8[0] = var7;
                var7 = null;
                var12 = var7 == var11;
                var17 = undefined;
                if(var12) { _fun0002_ip = 157; continue _fun0002 }
 152:
                var17 = var11.type;
 157:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 9;
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var12 = var12.CollectiblesItemType;
                var12 = var12.PROFILE_EFFECT;
                var12 = var17 === var12;
                if(!var12) { _fun0002_ip = 202; continue _fun0002 }
 196:
                var12 = var16.cardProfileEffectBorder;
 202:
                var8[1] = var12;
                var1['style'] = var8;
                var1['onPress'] = var5;
                var5 = 0.8;
                var1['activeOpacity'] = var5;
                var5 = 'button';
                var1['accessibilityRole'] = var5;
                if(!(var7 == var15)) { _fun0002_ip = 313; continue _fun0002 }
 241:
                var5 = 'nitroClaim';
                var7 = null;
                if(!(var5 === var10)) { _fun0002_ip = 311; continue _fun0002 }
 253:
                var12 = _closure1_slot5;
                var8 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 11;
                var5 = var17[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.NitroWheelIcon;
                var5 = {};
                var16 = var16.premiumWheel;
                var5['style'] = var16;
                var16 = 'header-primary';
                var5['color'] = var16;
                var7 = var12.bind(var4)(var8, var5);
 311:
                _fun0002_ip = 350; continue _fun0002;
 313:
                var12 = _closure1_slot5;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 10;
                var5 = var16[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5['unpublishedAt'] = var15;
                var7 = var12.bind(var4)(var8, var5);
 350:
                var5 = new Array(3);
                var5[0] = var7;
                var12 = _closure1_slot5;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 12;
                var7 = var15[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var14;
                var7['product'] = var11;
                var7['isDarkTheme'] = var13;
                var13 = 'purchased';
                var13 = var13 === var10;
                if(var13) { _fun0002_ip = 420; continue _fun0002 }
 410:
                var14 = 'partiallyOwnedBundle';
                var13 = var14 === var10;
 420:
                var7['isPurchased'] = var13;
                var7 = var12.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 13;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var11;
                var6['collectibleProductState'] = var10;
                var6['preferVCPrice'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot8 = var6;
        var6 = var9.memo;
        var5 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var12 = var2.product;
                var _closure2_slot0 = var12;
                var9 = var2.unpublishedAt;
                var8 = var2.solidBackground;
                var7 = var2.preferVCPrice;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 14;
                var2 = var16[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var2 = var2.analyticsLocations;
                var _closure2_slot1 = var2;
                var11 = _closure1_slot3;
                var10 = var11.useCallback;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var12;
                var2 = function() {
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var3 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = _closure1_slot0;
                    var2 = 16;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openProductDetailActionSheet;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2['product'] = var6;
                    var5 = _closure2_slot1;
                    var2['analyticsLocations'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var11 = var10.bind(var11)(var2, var6);
                var13 = _closure1_slot0;
                var2 = 17;
                var2 = var16[var2];
                var10 = var13.bind(var4)(var2);
                var6 = var10.useTrackProductCardImpression;
                var2 = var12.skuId;
                var2 = var6.bind(var10)(var2);
                var6 = var2.handleCardVisibilityChange;
                var2 = 18;
                var2 = var16[var2];
                var10 = var13.bind(var4)(var2);
                var2 = var10.useCurrentUser;
                var10 = var2.bind(var10)();
                var2 = 19;
                var2 = var16[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.canUseCollectibles;
                var3 = var2.bind(var3)(var10);
                var2 = 20;
                var2 = var16[var2];
                var10 = var13.bind(var4)(var2);
                var2 = var10.useProductPurchaseState;
                var2 = var2.bind(var10)(var12);
                var14 = var2.isPurchased;
                var _closure2_slot2 = var14;
                var15 = var2.isPartiallyOwnedBundle;
                var _closure2_slot3 = var15;
                var10 = 21;
                var2 = var16[var10];
                var17 = var13.bind(var4)(var2);
                var2 = var17.isPremiumCollectiblesProduct;
                var2 = var2.bind(var17)(var12);
                var10 = var16[var10];
                var13 = var13.bind(var4)(var10);
                var10 = var13.isFreeCollectiblesProduct;
                var10 = var10.bind(var13)(var12);
                var13 = var2;
                if(!var2) { _fun0003_ip = 293; continue _fun0003 }
 290:
                var13 = !var3;
 293:
                if(!var13) { _fun0003_ip = 299; continue _fun0003 }
 296:
                var13 = !var10;
 299:
                _closure2_slot4 = var13;
                var16 = var10;
                if(var16) { _fun0003_ip = 318; continue _fun0003 }
 309:
                if(!var2) { _fun0003_ip = 315; continue _fun0003 }
 312:
                var2 = var3;
 315:
                var16 = var2;
 318:
                _closure2_slot5 = var16;
                var10 = _closure1_slot3;
                var3 = var10.useMemo;
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var15;
                var2[2] = var14;
                var2[3] = var13;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0004_ip = 63; continue _fun0004 }
 13:
                        var3 = _closure2_slot3;
                        if(!(var3 !== var2)) { _fun0004_ip = 55; continue _fun0004 }
 21:
                        var3 = _closure2_slot4;
                        if(!(var3 !== var2)) { _fun0004_ip = 49; continue _fun0004 }
 29:
                        var1 = _closure2_slot5;
                        if(!(var1 !== var2)) { _fun0004_ip = 41; continue _fun0004 }
 37:
                        var1 = null;
                        return var1;
 41:
                        var1 = 'nitroClaim';
                        return var1;
 49:
                        var1 = 'nitroUpsell';
                        return var1;
 55:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
 63:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var10 = var3.bind(var10)(var1, var2);
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 22;
                var1 = var13[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onChange'] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var5['product'] = var12;
                var5['onPress'] = var11;
                var5['collectibleProductState'] = var10;
                var5['unpublishedAt'] = var9;
                var5['solidBackground'] = var8;
                var5['preferVCPrice'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 23;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/collectibles/native/CollectiblesShopCardV2.tsx';
        var6 = var7.bind(var8)(var6);
        var3['default'] = var5;
        var3['COLLECTIBLES_SHOP_CARD_HEIGHT'] = var4;
        var3['COLLECTIBLES_SHOP_CARD_WIDTH'] = var2;
        return var1;
    }
})();