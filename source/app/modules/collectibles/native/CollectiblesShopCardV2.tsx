// app/modules/collectibles/native/CollectiblesShopCardV2.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var7 = native2;
        var13 = native3;
        var3 = native6;
        var8 = native7;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var13;
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
        var2 = native4;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var8[var2];
        var2 = var7.bind(var1)(var2);
        var4 = var2.PixelRatio;
        var2 = 2;
        var2 = var8[var2];
        var2 = var13.bind(var1)(var2);
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
        var10 = var7.bind(var1)(var2);
        var9 = var10.createStyles;
        var6 = {};
        var11 = {'height': null, 'width': 150, 'display': 'flex', 'borderWidth': 1, 'borderRadius': null, 'overflow': 'hidden'};
        var11['height'] = var4;
        var2 = 150;
        var12 = 5;
        var14 = var8[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.radii;
        var14 = var14.sm;
        var11['borderRadius'] = var14;
        var14 = var8[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BORDER_SUBTLE;
        var11['borderColor'] = var14;
        var6['card'] = var11;
        var11 = {};
        var12 = var8[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BORDER_FAINT;
        var11['borderColor'] = var12;
        var6['cardProfileEffectBorder'] = var11;
        var11 = {'position': 'absolute', 'top': 6, 'right': 6, 'zIndex': 2};
        var6['premiumWheel'] = var11;
        var6 = var9.bind(var10)(var6);
        var _closure1_slot7 = var6;
        var6 = function CollectiblesShopCardInternalV2(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var10 = var1.product;
                var5 = var1.onPress;
                var14 = var1.unpublishedAt;
                var9 = var1.collectibleProductState;
                var13 = var1.solidBackground;
                var1 = _closure1_slot7;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var11 = var2.bind(var4)(var1);
                var8 = var11.useStateFromStores;
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
                var12 = var8.bind(var11)(var3, var1);
                var3 = _closure1_slot6;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var15.card;
                var8 = new Array(2);
                var8[0] = var7;
                var7 = null;
                var11 = var7 == var10;
                var16 = undefined;
                if(var11) { _fun0002_ip = 151; continue _fun0002 }
 146:
                var16 = var10.type;
 151:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 9;
                var11 = var18[var11];
                var11 = var17.bind(var4)(var11);
                var11 = var11.CollectiblesItemType;
                var11 = var11.PROFILE_EFFECT;
                var11 = var16 === var11;
                if(!var11) { _fun0002_ip = 196; continue _fun0002 }
 190:
                var11 = var15.cardProfileEffectBorder;
 196:
                var8[1] = var11;
                var1['style'] = var8;
                var1['onPress'] = var5;
                var5 = 0.8;
                var1['activeOpacity'] = var5;
                var5 = 'button';
                var1['accessibilityRole'] = var5;
                if(!(var7 == var14)) { _fun0002_ip = 307; continue _fun0002 }
 235:
                var5 = 'nitroClaim';
                var7 = null;
                if(!(var5 === var9)) { _fun0002_ip = 305; continue _fun0002 }
 247:
                var11 = _closure1_slot5;
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 11;
                var5 = var16[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.NitroWheelIcon;
                var5 = {};
                var15 = var15.premiumWheel;
                var5['style'] = var15;
                var15 = 'header-primary';
                var5['color'] = var15;
                var7 = var11.bind(var4)(var8, var5);
 305:
                _fun0002_ip = 344; continue _fun0002;
 307:
                var11 = _closure1_slot5;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 10;
                var5 = var15[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5['unpublishedAt'] = var14;
                var7 = var11.bind(var4)(var8, var5);
 344:
                var5 = new Array(3);
                var5[0] = var7;
                var11 = _closure1_slot5;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 12;
                var7 = var14[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var13;
                var7['product'] = var10;
                var7['isDarkTheme'] = var12;
                var12 = 'purchased';
                var12 = var12 === var9;
                if(var12) { _fun0002_ip = 414; continue _fun0002 }
 404:
                var13 = 'partiallyOwnedBundle';
                var12 = var13 === var9;
 414:
                var7['isPurchased'] = var12;
                var7 = var11.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 13;
                var6 = var11[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var10;
                var6['collectibleProductState'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot8 = var6;
        var6 = 23;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/collectibles/native/CollectiblesShopCardV2.tsx';
        var6 = var7.bind(var8)(var6);
        var5 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var11 = var2.product;
                var _closure2_slot0 = var11;
                var8 = var2.unpublishedAt;
                var7 = var2.solidBackground;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 14;
                var2 = var15[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var2 = var2.analyticsLocations;
                var _closure2_slot1 = var2;
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var11;
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
                var10 = var9.bind(var10)(var2, var6);
                var12 = _closure1_slot0;
                var2 = 17;
                var2 = var15[var2];
                var9 = var12.bind(var4)(var2);
                var6 = var9.useTrackProductCardImpression;
                var2 = var11.skuId;
                var2 = var6.bind(var9)(var2);
                var6 = var2.handleCardVisibilityChange;
                var2 = 18;
                var2 = var15[var2];
                var9 = var12.bind(var4)(var2);
                var2 = var9.useCurrentUser;
                var9 = var2.bind(var9)();
                var2 = 19;
                var2 = var15[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.canUseCollectibles;
                var3 = var2.bind(var3)(var9);
                var2 = 20;
                var2 = var15[var2];
                var9 = var12.bind(var4)(var2);
                var2 = var9.useProductPurchaseState;
                var2 = var2.bind(var9)(var11);
                var13 = var2.isPurchased;
                var _closure2_slot2 = var13;
                var14 = var2.isPartiallyOwnedBundle;
                var _closure2_slot3 = var14;
                var9 = 21;
                var2 = var15[var9];
                var16 = var12.bind(var4)(var2);
                var2 = var16.isPremiumCollectiblesProduct;
                var2 = var2.bind(var16)(var11);
                var9 = var15[var9];
                var12 = var12.bind(var4)(var9);
                var9 = var12.isFreeCollectiblesProduct;
                var9 = var9.bind(var12)(var11);
                var12 = var2;
                if(!var2) { _fun0003_ip = 287; continue _fun0003 }
 284:
                var12 = !var3;
 287:
                if(!var12) { _fun0003_ip = 293; continue _fun0003 }
 290:
                var12 = !var9;
 293:
                _closure2_slot4 = var12;
                var15 = var9;
                if(var15) { _fun0003_ip = 312; continue _fun0003 }
 303:
                if(!var2) { _fun0003_ip = 309; continue _fun0003 }
 306:
                var2 = var3;
 309:
                var15 = var2;
 312:
                _closure2_slot5 = var15;
                var9 = _closure1_slot3;
                var3 = var9.useMemo;
                var2 = new Array(4);
                var2[0] = var15;
                var2[1] = var14;
                var2[2] = var13;
                var2[3] = var12;
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
                var9 = var3.bind(var9)(var1, var2);
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 22;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onChange'] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var5['product'] = var11;
                var5['onPress'] = var10;
                var5['collectibleProductState'] = var9;
                var5['unpublishedAt'] = var8;
                var5['solidBackground'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var5;
        var3['COLLECTIBLES_SHOP_CARD_HEIGHT'] = var4;
        var3['COLLECTIBLES_SHOP_CARD_WIDTH'] = var2;
        return var1;
    }
})();