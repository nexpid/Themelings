// app/modules/collectibles/native/FeaturedBlock.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
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
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeaturedBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.featuredCategory;
            var _closure2_slot0 = var5;
            var2 = var1.category;
            var _closure2_slot1 = var2;
            var1 = _closure1_slot9;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useNavigation;
            var1 = var1.bind(var7)();
            var _closure2_slot2 = var1;
            var1 = 7;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var7)();
            var _closure2_slot3 = var1;
            var17 = var5.assetUrl;
            var1 = 8;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var7 = var8.useTrackProductCardImpression;
            var6 = var5.categoryStoreListingId;
            var3 = 'mobile_home';
            var1 = 'featured_block';
            var1 = var7.bind(var8)(var6, var3, var1);
            var6 = var1.handleCardVisibilityChange;
            var3 = var5.unpublishedAt;
            var9 = null;
            if(!(var9 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var9 == var2;
            var1 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.unpublishedAt;
case 4:
            var3 = var1;
case 2:
            var1 = var9 != var3;
            var13 = null;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var25 = var2;
            var24 = var3;
            var1 = new var25[var1](var24, var23);
            var13 = var1 instanceof Object ? var1 : var2;
case 6:
            var3 = _closure1_slot7;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 9;
            var1 = var18[var1];
            var2 = var16.bind(var4)(var1);
            var1 = {};
            var1['onChange'] = var6;
            var8 = _closure1_slot8;
            var15 = _closure1_slot0;
            var6 = 10;
            var6 = var18[var6];
            var6 = var15.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var12 = 11;
            var19 = var18[var12];
            var19 = var15.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var12 = var18[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var15 = var12.hEsdA9;
            var12 = {};
            var21 = var5.name;
            var12['category'] = var21;
            var12 = var19.bind(var20)(var15, var12);
            var6['accessibilityLabel'] = var12;
            var12 = {};
            var15 = 12;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.radii;
            var15 = var15.lg;
            var12['radius'] = var15;
            var6['androidRippleConfig'] = var12;
            var10 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var6 = var8.track;
                    var2 = _closure1_slot5;
                    var4 = var2.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var2 = {};
                    var9 = _closure2_slot3;
                    var3 = null;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = _closure2_slot3;
                    var9 = var10.sessionId;
case 8:
                    var2['collectibles_shop_session_id'] = var9;
                    var9 = _closure2_slot0;
                    var9 = var9.categoryStoreListingId;
                    var2['sku_id'] = var9;
                    var9 = 'mobile_home';
                    var2['page_type'] = var9;
                    var9 = _closure2_slot3;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var10 = _closure2_slot3;
                    var9 = var10.pageSection;
case 10:
                    var2['page_section'] = var9;
                    var9 = _closure2_slot3;
                    var10 = var3 == var9;
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var10 = _closure2_slot3;
                    var9 = var10.pageCategory;
case 12:
                    var2['page_category'] = var9;
                    var9 = 'FEATURED_BLOCK';
                    var2['tile_type'] = var9;
                    var9 = global;
                    var10 = var9.String;
                    var9 = _closure2_slot3;
                    var11 = var3 == var9;
                    var9 = undefined;
                    if(var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var11 = _closure2_slot3;
                    var9 = var11.tilePosition;
case 14:
                    var9 = var10.bind(var1)(var9);
                    var2['tile_position'] = var9;
                    var2['cta_name'] = var3;
                    var2 = var6.bind(var8)(var4, var2);
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var2 = _closure2_slot1;
                    var2 = var2.isOrbsExclusive;
                    if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = _closure2_slot2;
                    var4 = var6.push;
                    var2 = _closure1_slot6;
                    var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2['category'] = var8;
                    var7 = _closure2_slot3;
                    var2['analyticsContext'] = var7;
                    var2 = var4.bind(var6)(var3, var2);
                    _fun0002_ip = 16; continue _fun0002;
case 18:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 14;
                    var2 = var8[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openCollectiblesShopMobile;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var6 = 15;
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
                    var5 = _closure1_slot4;
                    var5 = var5.ORBS;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
case 16:
                    return var1;
                }
            };
            var6['onPress'] = var10;
            var10 = var14.container;
            var6['style'] = var10;
            var10 = var9 != var17;
            if(!var10) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = _closure1_slot7;
            var12 = _closure1_slot3;
            var9 = {};
            var16 = {};
            var16['uri'] = var17;
            var9['source'] = var16;
            var16 = var14.bannerImage;
            var9['style'] = var16;
            var10 = var15.bind(var4)(var12, var9);
case 20:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 16;
            var10 = var15[var10];
            var12 = var12.bind(var4)(var10);
            var10 = var12.shouldShowLimitedTimeBadge;
            var10 = var10.bind(var12)(var13);
            if(!var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = _closure1_slot7;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 17;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.LimitedTimeBadge;
            var11 = {};
            var14 = var14.limitedTimeBadge;
            var11['style'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 22:
            var9[1] = var10;
            var6['children'] = var9;
            var5 = var5.categoryStoreListingId;
            var5 = var8.bind(var4)(var7, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();