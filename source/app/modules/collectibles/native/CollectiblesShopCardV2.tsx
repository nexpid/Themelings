// app/modules/collectibles/native/CollectiblesShopCardV2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = 302;
case 2:
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
case 0:
                var1 = arg1;
                var12 = var1.product;
                var5 = var1.onPress;
                var16 = var1.unpublishedAt;
                var11 = var1.collectibleProductState;
                var15 = var1.solidBackground;
                var10 = var1.preferVCPrice;
                var9 = var1.isDisabled;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var9 = false;
case 4:
                var1 = _closure1_slot7;
                var17 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var13 = var2.bind(var4)(var1);
                var8 = var13.useStateFromStores;
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
                var14 = var8.bind(var13)(var3, var1);
                var3 = _closure1_slot6;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var17.card;
                var8 = new Array(2);
                var8[0] = var7;
                var7 = null;
                var13 = var7 == var12;
                var18 = undefined;
                if(var13) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var18 = var12.type;
case 6:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 9;
                var13 = var20[var13];
                var13 = var19.bind(var4)(var13);
                var13 = var13.CollectiblesItemType;
                var13 = var13.PROFILE_EFFECT;
                var13 = var18 === var13;
                if(!var13) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var13 = var17.cardProfileEffectBorder;
case 8:
                var8[1] = var13;
                var1['style'] = var8;
                var1['onPress'] = var5;
                var5 = 0.8;
                var1['activeOpacity'] = var5;
                var5 = 'button';
                var1['accessibilityRole'] = var5;
                if(!(var7 == var16)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var5 = 'nitroClaim';
                var7 = null;
                if(!(var5 === var11)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var13 = _closure1_slot5;
                var8 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 11;
                var5 = var18[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.NitroWheelIcon;
                var5 = {};
                var17 = var17.premiumWheel;
                var5['style'] = var17;
                var17 = 'header-primary';
                var5['color'] = var17;
                var7 = var13.bind(var4)(var8, var5);
case 12:
                _fun0002_ip = 14; continue _fun0002;
case 10:
                var13 = _closure1_slot5;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var5 = 10;
                var5 = var17[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5['unpublishedAt'] = var16;
                var7 = var13.bind(var4)(var8, var5);
case 14:
                var5 = new Array(3);
                var5[0] = var7;
                var13 = _closure1_slot5;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 12;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['solidBackground'] = var15;
                var7['product'] = var12;
                var7['isDarkTheme'] = var14;
                var14 = 'purchased';
                var14 = var14 === var11;
                if(var14) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var15 = 'partiallyOwnedBundle';
                var14 = var15 === var11;
case 15:
                var7['isPurchased'] = var14;
                var7['isDisabled'] = var9;
                var7 = var13.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 13;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var12;
                var6['collectibleProductState'] = var11;
                var6['preferVCPrice'] = var10;
                var6['isDisabled'] = var9;
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
case 0:
                var2 = arg1;
                var13 = var2.product;
                var _closure2_slot0 = var13;
                var10 = var2.unpublishedAt;
                var9 = var2.solidBackground;
                var8 = var2.preferVCPrice;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 14;
                var2 = var17[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var2 = var2.analyticsLocations;
                var _closure2_slot1 = var2;
                var11 = _closure1_slot3;
                var7 = var11.useCallback;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var13;
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
                var12 = var7.bind(var11)(var2, var6);
                var14 = _closure1_slot0;
                var2 = 17;
                var2 = var17[var2];
                var7 = var14.bind(var4)(var2);
                var6 = var7.useTrackProductCardImpression;
                var2 = var13.skuId;
                var2 = var6.bind(var7)(var2);
                var6 = var2.handleCardVisibilityChange;
                var2 = 18;
                var2 = var17[var2];
                var7 = var14.bind(var4)(var2);
                var2 = var7.useCurrentUser;
                var7 = var2.bind(var7)();
                var2 = 19;
                var2 = var17[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.canUseCollectibles;
                var3 = var2.bind(var3)(var7);
                var2 = 20;
                var2 = var17[var2];
                var7 = var14.bind(var4)(var2);
                var2 = var7.useProductPurchaseState;
                var2 = var2.bind(var7)(var13);
                var15 = var2.isPurchased;
                var _closure2_slot2 = var15;
                var16 = var2.isPartiallyOwnedBundle;
                var _closure2_slot3 = var16;
                var2 = 21;
                var2 = var17[var2];
                var11 = var14.bind(var4)(var2);
                var7 = var11.useProductDisableState;
                var2 = var13.skuId;
                var2 = var7.bind(var11)(var2);
                var7 = var2.isDisabled;
                var11 = 22;
                var2 = var17[var11];
                var18 = var14.bind(var4)(var2);
                var2 = var18.isPremiumCollectiblesProduct;
                var2 = var2.bind(var18)(var13);
                var11 = var17[var11];
                var14 = var14.bind(var4)(var11);
                var11 = var14.isFreeCollectiblesProduct;
                var11 = var11.bind(var14)(var13);
                var14 = var2;
                if(!var2) { _fun0003_ip = 17; continue _fun0003 }
case 10:
                var14 = !var3;
case 17:
                if(!var14) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var14 = !var11;
case 18:
                _closure2_slot4 = var14;
                var17 = var11;
                if(var17) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var2 = var3;
case 22:
                var17 = var2;
case 20:
                _closure2_slot5 = var17;
                var11 = _closure1_slot3;
                var3 = var11.useMemo;
                var2 = new Array(4);
                var2[0] = var17;
                var2[1] = var16;
                var2[2] = var15;
                var2[3] = var14;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var2 = true;
                        if(!(var3 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var3 = _closure2_slot3;
                        if(!(var3 !== var2)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var3 = _closure2_slot4;
                        if(!(var3 !== var2)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var1 = _closure2_slot5;
                        if(!(var1 !== var2)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                        var1 = null;
                        return var1;
case 30:
                        var1 = 'nitroClaim';
                        return var1;
case 28:
                        var1 = 'nitroUpsell';
                        return var1;
case 26:
                        var1 = 'partiallyOwnedBundle';
                        return var1;
case 24:
                        var1 = 'purchased';
                        return var1;
                    }
                };
                var11 = var3.bind(var11)(var1, var2);
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 23;
                var1 = var14[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onChange'] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var5['product'] = var13;
                var5['onPress'] = var12;
                var5['collectibleProductState'] = var11;
                var5['unpublishedAt'] = var10;
                var5['solidBackground'] = var9;
                var5['preferVCPrice'] = var8;
                var5['isDisabled'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var6.bind(var9)(var5);
        var6 = 24;
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