// app/modules/collectibles/native/CollectiblesShopCardCardDetails.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var15 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var15.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'position': 'absolute', 'height': null, 'width': '100%', 'padding': 10, 'flex': 1, 'bottom': 0, 'overflow': 'hidden'};
    var12 = 7;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var14 = var13.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var13 = 142;
    var14 = var14 - var13;
    var10['height'] = var14;
    var4['regularMetadataContainer'] = var10;
    var10 = {};
    var14 = 8;
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_660;
    var10['backgroundColor'] = var16;
    var4['metadataContainerDarkBackground'] = var10;
    var10 = {};
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_MOBILE_PRIMARY;
    var10['backgroundColor'] = var16;
    var4['metadataContainerLightBackground'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['assetName'] = var10;
    var10 = {};
    var16 = 'auto';
    var10['marginTop'] = var16;
    var4['ctaButtonContainer'] = var10;
    var10 = {};
    var16 = var6[var14];
    var16 = var15.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10['borderBottomLeftRadius'] = var16;
    var14 = var6[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderBottomRightRadius'] = var14;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.COLLECTIBLES_SHOP_CARD_HEIGHT;
    var12 = var12 - var13;
    var10['height'] = var12;
    var4['blur'] = var10;
    var10 = {'opacity': 0.5, 'display': 'flex', 'flexDirection': 'row'};
    var4['priceDescription'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row'};
    var4['bundleDescription'] = var10;
    var10 = {};
    var10['marginRight'] = var11;
    var4['wheelIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.product;
            var14 = var1.isPremiumUser;
            var6 = var1.styles;
            var2 = var1.isFetchingGoogleSkus;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var3 = var4[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var3);
            var5 = var7.extractPriceByPurchaseTypes;
            var8 = _closure1_slot7;
            if(var14) { _fun0001_ip = 73; continue _fun0001 }
 65:
            var3 = var8.MOBILE_PREMIUM_TIER_2;
            _fun0001_ip = 79; continue _fun0001;
 73:
            var3 = var8.MOBILE;
 79:
            var3 = var5.bind(var7)(var15, var3);
            if(!var2) { _fun0001_ip = 97; continue _fun0001 }
 88:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 663; continue _fun0001 }
 97:
            var5 = var15.type;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.BUNDLE;
            if(!(var5 !== var2)) { _fun0001_ip = 468; continue _fun0001 }
 141:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 466; continue _fun0001 }
 150:
            var5 = var3.priceString;
            if(!(var2 == var5)) { _fun0001_ip = 206; continue _fun0001 }
 160:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 15;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.formatPrice;
            var7 = var3.amount;
            var5 = var3.currency;
            var9 = var8.bind(var9)(var7, var5);
            _fun0001_ip = 212; continue _fun0001;
 206:
            var9 = var3.priceString;
 212:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var7 = var10[var3];
            var7 = var5.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            if(var14) { _fun0001_ip = 282; continue _fun0001 }
 259:
            var10 = var3.W3gIWF;
            var5 = {};
            var5['price'] = var9;
            var12 = var7.bind(var8)(var10, var5);
            _fun0001_ip = 303; continue _fun0001;
 282:
            var5 = var3.7yqdFR;
            var3 = {};
            var3['price'] = var9;
            var12 = var7.bind(var8)(var5, var3);
 303:
            var7 = _closure1_slot9;
            var5 = _closure1_slot4;
            var3 = {};
            var8 = var6.priceDescription;
            var3['style'] = var8;
            var9 = !var14;
            if(!var9) { _fun0001_ip = 389; continue _fun0001 }
 329:
            var11 = _closure1_slot8;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 16;
            var8 = var13[var8];
            var8 = var10.bind(var4)(var8);
            var10 = var8.NitroWheelIcon;
            var8 = {'size': 'sm', 'color': 'interactive-active'};
            var13 = var6.wheelIcon;
            var8['style'] = var13;
            var9 = var11.bind(var4)(var10, var8);
 389:
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot8;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 12;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/normal', 'color': 'interactive-active', 'lineClamp': 1};
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var3['children'] = var8;
            var3 = var7.bind(var4)(var5, var3);
            return var3;
 466:
            return var2;
 468:
            var5 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.bundleDescription;
            var2['style'] = var6;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 12;
            var6 = var16[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/normal', 'color': 'text-positive', 'lineClamp': 1};
            var8 = 13;
            var9 = var16[var8];
            var9 = var13.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.formatToPlainString;
            var8 = var16[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var9 = var8.eWoUGx;
            var8 = {};
            var12 = 14;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.getProductDiscount;
            var12 = var12.bind(var13)(var15, var14);
            var15 = var12.discountPercentage;
            var12 = global;
            var12 = var12.HermesInternal;
            var14 = var12.concat;
            var13 = '';
            var12 = '%';
            var12 = var14.bind(var13)(var15, var12);
            var8['percent'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var6['children'] = var8;
            var6 = var5.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 663:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CollectiblesShopPricePlaceholder;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var8 = var8.bind(var7)(var4);
    var _closure1_slot11 = var8;
    var4 = 'PriceDescription';
    var8['displayName'] = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var12 = var2.product;
            var2 = _closure1_slot10;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 17;
            var2 = var3[var2];
            var6 = var5.bind(var4)(var2);
            var2 = var6.useThemeContext;
            var2 = var2.bind(var6)();
            var16 = var2.theme;
            var2 = 18;
            var6 = var3[var2];
            var11 = var5.bind(var4)(var6);
            var8 = var11.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot5;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var11)(var7, var6);
            var6 = 19;
            var6 = var3[var6];
            var7 = var5.bind(var4)(var6);
            var6 = var7.useCurrentUser;
            var11 = var6.bind(var7)();
            var13 = 20;
            var3 = var3[var13];
            var6 = var5.bind(var4)(var3);
            var5 = var6.hexToRgbaString;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var15 = var7.bind(var4)(var3);
            var14 = var15.hexWithOpacity;
            if(var8) { _fun0002_ip = 192; continue _fun0002 }
 168:
            var7 = '#FFFFFF';
            var3 = 0.4;
            var3 = var14.bind(var15)(var7, var3);
            _fun0002_ip = 214; continue _fun0002;
 192:
            var13 = '#1E1F22';
            var7 = 0.7;
            var3 = var14.bind(var15)(var13, var7);
 214:
            var15 = var5.bind(var6)(var3);
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 14;
            var3 = var7[var3];
            var5 = var18.bind(var4)(var3);
            var3 = var5.isPremiumCollectiblesProduct;
            var6 = var3.bind(var5)(var12);
            var5 = _closure1_slot1;
            var3 = 21;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.canUseCollectibles;
            var14 = var3.bind(var5)(var11);
            var2 = var7[var2];
            var5 = var18.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var11 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.isFetchingGoogleSkus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var13 = var10.regularMetadataContainer;
            var5 = new Array(2);
            var5[0] = var13;
            var17 = var12.type;
            var13 = 11;
            var7 = var7[var13];
            var7 = var18.bind(var4)(var7);
            var7 = var7.CollectiblesItemType;
            var7 = var7.PROFILE_EFFECT;
            if(!(var17 === var7)) { _fun0002_ip = 377; continue _fun0002 }
 373:
            var7 = {};
            _fun0002_ip = 397; continue _fun0002;
 377:
            if(var8) { _fun0002_ip = 388; continue _fun0002 }
 380:
            var8 = var10.metadataContainerLightBackground;
            _fun0002_ip = 394; continue _fun0002;
 388:
            var8 = var10.metadataContainerDarkBackground;
 394:
            var7 = var8;
 397:
            var5[1] = var7;
            var1['style'] = var5;
            var7 = var12.type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var13];
            var5 = var8.bind(var4)(var5);
            var5 = var5.CollectiblesItemType;
            var5 = var5.PROFILE_EFFECT;
            var7 = var7 === var5;
            if(!var7) { _fun0002_ip = 535; continue _fun0002 }
 446:
            var13 = _closure1_slot8;
            var8 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 22;
            var5 = var17[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var17 = 0.7;
            var5['blurAmount'] = var17;
            var17 = _closure1_slot3;
            var18 = var17.absoluteFill;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = var10.blur;
            var17[1] = var18;
            var5['style'] = var17;
            var5['blurTheme'] = var16;
            var5['blurTintRgba'] = var15;
            var7 = var13.bind(var4)(var8, var5);
 535:
            var5 = new Array(4);
            var5[0] = var7;
            var13 = _closure1_slot8;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 12;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'heading-sm/bold', 'color': 'header-primary', 'lineClamp': 1, 'accessibilityRole': 'header'};
            var15 = var10.assetName;
            var7['style'] = var15;
            var15 = var12.name;
            var7['children'] = var15;
            var7 = var13.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = !var6;
            if(!var6) { _fun0002_ip = 659; continue _fun0002 }
 623:
            var13 = _closure1_slot8;
            var8 = _closure1_slot11;
            var7 = {};
            var7['product'] = var12;
            var7['isPremiumUser'] = var14;
            var7['styles'] = var10;
            var7['isFetchingGoogleSkus'] = var11;
            var6 = var13.bind(var4)(var8, var7);
 659:
            var5[2] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var10.ctaButtonContainer;
            var6['style'] = var10;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 23;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['product'] = var12;
            var12 = true;
            var9['onMainScreen'] = var12;
            var9['isFetchingGoogleSkus'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopCardCardDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();