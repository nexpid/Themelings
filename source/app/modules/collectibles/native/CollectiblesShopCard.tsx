// app/modules/collectibles/native/CollectiblesShopCard.tsx
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
        var4 = 240;
        if(!var2) { _fun0001_ip = 178; continue _fun0001 }
 172:
        var4 = 320;
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
        var6['card'] = var11;
        var11 = {};
        var14 = var8[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.CHAT_BORDER;
        var11['borderColor'] = var14;
        var6['cardDarkBorder'] = var11;
        var11 = {};
        var12 = var8[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_TERTIARY;
        var11['borderColor'] = var12;
        var6['cardLightBorder'] = var11;
        var6 = var9.bind(var10)(var6);
        var _closure1_slot7 = var6;
        var6 = function CollectiblesShopCardInternal(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var9 = var1.product;
                var5 = var1.onPress;
                var12 = var1.isPurchased;
                var11 = var1.unpublishedAt;
                var1 = _closure1_slot7;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var13 = var2.bind(var4)(var1);
                var10 = var13.useStateFromStores;
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
                var13 = var10.bind(var13)(var3, var1);
                var3 = _closure1_slot6;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                if(var13) { _fun0002_ip = 126; continue _fun0002 }
 118:
                var10 = var8.cardLightBorder;
                _fun0002_ip = 132; continue _fun0002;
 126:
                var10 = var8.cardDarkBorder;
 132:
                var7 = new Array(2);
                var7[0] = var10;
                var8 = var8.card;
                var7[1] = var8;
                var1['style'] = var7;
                var1['onPress'] = var5;
                var5 = 0.8;
                var1['activeOpacity'] = var5;
                var5 = 'button';
                var1['accessibilityRole'] = var5;
                var5 = null;
                var7 = var5 != var11;
                if(!var7) { _fun0002_ip = 227; continue _fun0002 }
 190:
                var10 = _closure1_slot5;
                var8 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 9;
                var5 = var14[var5];
                var8 = var8.bind(var4)(var5);
                var5 = {};
                var5['unpublishedAt'] = var11;
                var7 = var10.bind(var4)(var8, var5);
 227:
                var5 = new Array(3);
                var5[0] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 10;
                var6 = var10[var6];
                var11 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var9;
                var6['isDarkTheme'] = var13;
                var6['isPurchased'] = var12;
                var6 = var8.bind(var4)(var11, var6);
                var5[1] = var6;
                var6 = 11;
                var6 = var10[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6['product'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot8 = var6;
        var6 = 18;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/collectibles/native/CollectiblesShopCard.tsx';
        var6 = var7.bind(var8)(var6);
        var5 = function _default(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var11 = var2.product;
                var _closure2_slot0 = var11;
                var7 = var2.unpublishedAt;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 12;
                var3 = var12[var3];
                var4 = undefined;
                var3 = var2.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var9 = var3.analyticsLocations;
                var _closure2_slot1 = var9;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var11;
                var1 = function() {
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var3 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = _closure1_slot0;
                    var2 = 14;
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
                var10 = var6.bind(var8)(var1, var3);
                var3 = _closure1_slot0;
                var1 = 15;
                var1 = var12[var1];
                var6 = var3.bind(var4)(var1);
                var1 = var6.useProductPurchaseState;
                var1 = var1.bind(var6)(var11);
                var8 = var1.isPurchased;
                var9 = var1.isPartiallyOwnedBundle;
                var1 = 16;
                var1 = var12[var1];
                var6 = var3.bind(var4)(var1);
                var3 = var6.useTrackProductCardImpression;
                var1 = var11.skuId;
                var1 = var3.bind(var6)(var1);
                var6 = var1.handleCardVisibilityChange;
                var3 = _closure1_slot5;
                var1 = 17;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['onChange'] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var5['product'] = var11;
                var5['onPress'] = var10;
                if(var8) { _fun0003_ip = 212; continue _fun0003 }
 209:
                var8 = var9;
 212:
                var5['isPurchased'] = var8;
                var5['unpublishedAt'] = var7;
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