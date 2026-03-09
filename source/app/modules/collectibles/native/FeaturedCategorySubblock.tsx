// app/modules/collectibles/native/FeaturedCategorySubblock.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['container'] = var9;
    var9 = {'width': '100%', 'aspectRatio': 2.237580993520518, 'resizeMode': 'contain'};
    var4['bannerImage'] = var9;
    var9 = {'position': 'absolute', 'top': '16%', 'left': '3%', 'zIndex': 1};
    var4['limitedTimeBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeaturedCategorySubblock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var20 = var1.subblock;
            var _closure2_slot0 = var20;
            var1 = _closure1_slot10;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var1 = 8;
            var1 = var5[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var2)();
            var _closure2_slot2 = var1;
            var16 = var20.assetUrl;
            var1 = 9;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getCategoryByStoreListingId;
                var1 = _closure2_slot0;
                var1 = var1.categoryStoreListingId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var2, var1);
            var _closure2_slot3 = var2;
            var1 = 10;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useTrackProductCardImpression;
            var5 = var20.categoryStoreListingId;
            var3 = 'mobile_home';
            var1 = 'featured_block';
            var1 = var6.bind(var7)(var5, var3, var1);
            var5 = var1.handleCardVisibilityChange;
            var3 = var20.unpublishedAt;
            var8 = null;
            if(!(var8 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var8 == var2;
            var1 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.unpublishedAt;
case 4:
            var3 = var1;
case 2:
            var1 = var8 != var3;
            var12 = null;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var24 = var2;
            var23 = var3;
            var1 = new var24[var1](var23, var22);
            var12 = var1 instanceof Object ? var1 : var2;
case 6:
            var3 = _closure1_slot8;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 11;
            var1 = var17[var1];
            var2 = var15.bind(var4)(var1);
            var1 = {};
            var1['onChange'] = var5;
            var7 = _closure1_slot9;
            var14 = _closure1_slot0;
            var5 = 12;
            var5 = var17[var5];
            var5 = var14.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var11 = 13;
            var18 = var17[var11];
            var18 = var14.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var11 = var17[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var14 = var11.hEsdA9;
            var11 = {};
            var20 = var20.name;
            var11['category'] = var20;
            var11 = var18.bind(var19)(var14, var11);
            var5['accessibilityLabel'] = var11;
            var11 = {};
            var14 = 14;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.radii;
            var14 = var14.lg;
            var11['radius'] = var14;
            var5['androidRippleConfig'] = var11;
            var9 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var6 = var8.track;
                    var2 = _closure1_slot6;
                    var4 = var2.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var2 = {};
                    var9 = _closure2_slot2;
                    var3 = null;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = _closure2_slot2;
                    var9 = var10.sessionId;
case 8:
                    var2['collectibles_shop_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var9 = var9.categoryStoreListingId;
                    var2['sku_id'] = var9;
                    var9 = 'mobile_home';
                    var2['page_type'] = var9;
                    var9 = _closure2_slot2;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var10 = _closure2_slot2;
                    var9 = var10.pageSection;
case 10:
                    var2['page_section'] = var9;
                    var9 = _closure2_slot2;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var10 = _closure2_slot2;
                    var9 = var10.pageCategory;
case 12:
                    var2['page_category'] = var9;
                    var9 = 'FEATURED_BLOCK';
                    var2['tile_type'] = var9;
                    var9 = global;
                    var10 = var9.String;
                    var9 = _closure2_slot2;
                    var11 = var3 == var9;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var11 = _closure2_slot2;
                    var9 = var11.tilePosition;
case 14:
                    var9 = var10.bind(var1)(var9);
                    var2['tile_position'] = var9;
                    var2['cta_name'] = var3;
                    var2 = var6.bind(var8)(var4, var2);
                    var2 = _closure2_slot3;
                    if(!(var3 != var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot3;
                    var2 = var2.isOrbsExclusive;
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = _closure2_slot1;
                    var4 = var6.push;
                    var2 = _closure1_slot7;
                    var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                    var2 = {};
                    var8 = _closure2_slot3;
                    var2['category'] = var8;
                    var7 = _closure2_slot2;
                    var2['analyticsContext'] = var7;
                    var2 = var4.bind(var6)(var3, var2);
                    _fun0002_ip = 16; continue _fun0002;
case 18:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 16;
                    var2 = var8[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var6 = 17;
                    var9 = var8[var6];
                    var9 = var7.bind(var1)(var9);
                    var10 = var9.COLLECTIBLES_SHOP;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var2['analyticsLocations'] = var9;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.COLLECTIBLES_SHOP;
                    var2['analyticsSource'] = var6;
                    var5 = _closure1_slot5;
                    var5 = var5.ORBS;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
case 16:
                    return var1;
                }
            };
            var5['onPress'] = var9;
            var9 = var13.container;
            var5['style'] = var9;
            var9 = var8 != var16;
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var14 = _closure1_slot8;
            var11 = _closure1_slot3;
            var8 = {};
            var15 = {};
            var15['uri'] = var16;
            var8['source'] = var15;
            var15 = var13.bannerImage;
            var8['style'] = var15;
            var9 = var14.bind(var4)(var11, var8);
case 20:
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 18;
            var9 = var14[var9];
            var11 = var11.bind(var4)(var9);
            var9 = var11.shouldShowLimitedTimeBadge;
            var9 = var9.bind(var11)(var12);
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = _closure1_slot8;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 19;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.LimitedTimeBadge;
            var10 = {};
            var13 = var13.limitedTimeBadge;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 22:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();