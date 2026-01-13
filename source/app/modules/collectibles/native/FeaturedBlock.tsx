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
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['container'] = var9;
    var9 = {'width': '100%', 'aspectRatio': 2, 'resizeMode': 'contain'};
    var4['bannerImage'] = var9;
    var9 = {'position': 'absolute', 'top': '16%', 'left': '3%', 'zIndex': 1};
    var4['limitedTimeBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 15;
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
            var16 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useNavigation;
            var1 = var1.bind(var7)();
            var _closure2_slot2 = var1;
            var1 = 6;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = var7.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var7)();
            var _closure2_slot3 = var1;
            var19 = var5.assetUrl;
            var1 = 7;
            var1 = var6[var1];
            var9 = var3.bind(var4)(var1);
            var7 = var9.useTrackProductCardImpression;
            var6 = var5.categoryStoreListingId;
            var3 = 'mobile_home';
            var1 = 'featured_block';
            var1 = var7.bind(var9)(var6, var3, var1);
            var6 = var1.handleCardVisibilityChange;
            var3 = var5.unpublishedAt;
            var11 = null;
            if(!(var11 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var11 == var2;
            var1 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2.unpublishedAt;
case 4:
            var3 = var1;
case 2:
            var1 = var11 != var3;
            var15 = null;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var24 = var2;
            var23 = var3;
            var1 = new var24[var1](var23, var22);
            var15 = var1 instanceof Object ? var1 : var2;
case 6:
            var3 = _closure1_slot7;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 9;
            var1 = var14[var1];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var1['onChange'] = var6;
            var10 = _closure1_slot0;
            var6 = 10;
            var6 = var14[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableOpacity;
            var6 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var9 = 11;
            var17 = var14[var9];
            var17 = var10.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.hEsdA9;
            var9 = {};
            var20 = var5.name;
            var9['category'] = var20;
            var9 = var17.bind(var18)(var10, var9);
            var6['accessibilityLabel'] = var9;
            var9 = {};
            var10 = 12;
            var10 = var14[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var9['radius'] = var10;
            var6['androidRippleConfig'] = var9;
            var8 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var10 = undefined;
                    var7 = var3.bind(var10)(var1);
                    var5 = var7.track;
                    var1 = _closure1_slot5;
                    var4 = var1.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var1 = {};
                    var8 = _closure2_slot3;
                    var3 = null;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var9 = _closure2_slot3;
                    var8 = var9.sessionId;
case 8:
                    var1['collectibles_shop_session_id'] = var8;
                    var8 = _closure2_slot0;
                    var8 = var8.categoryStoreListingId;
                    var1['sku_id'] = var8;
                    var8 = 'mobile_home';
                    var1['page_type'] = var8;
                    var8 = _closure2_slot3;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = _closure2_slot3;
                    var8 = var9.pageSection;
case 10:
                    var1['page_section'] = var8;
                    var8 = _closure2_slot3;
                    var9 = var3 == var8;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = _closure2_slot3;
                    var8 = var9.pageCategory;
case 12:
                    var1['page_category'] = var8;
                    var8 = 'FEATURED_BLOCK';
                    var1['tile_type'] = var8;
                    var8 = global;
                    var9 = var8.String;
                    var8 = _closure2_slot3;
                    var11 = var3 == var8;
                    var8 = undefined;
                    if(var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var11 = _closure2_slot3;
                    var8 = var11.tilePosition;
case 14:
                    var8 = var9.bind(var10)(var8);
                    var1['tile_position'] = var8;
                    var1['cta_name'] = var3;
                    var1 = var5.bind(var7)(var4, var1);
                    var1 = _closure2_slot1;
                    var1 = var3 != var1;
                    if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot6;
                    var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['category'] = var7;
                    var6 = _closure2_slot3;
                    var2['analyticsContext'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var16.container;
            var8['style'] = var12;
            var12 = var11 != var19;
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = _closure1_slot7;
            var14 = _closure1_slot3;
            var11 = {};
            var18 = {};
            var18['uri'] = var19;
            var11['source'] = var18;
            var18 = var16.bannerImage;
            var11['style'] = var18;
            var12 = var17.bind(var4)(var14, var11);
case 18:
            var11 = new Array(2);
            var11[0] = var12;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 13;
            var12 = var17[var12];
            var14 = var14.bind(var4)(var12);
            var12 = var14.shouldShowLimitedTimeBadge;
            var12 = var12.bind(var14)(var15);
            if(!var12) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var15 = _closure1_slot7;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 14;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.LimitedTimeBadge;
            var13 = {};
            var16 = var16.limitedTimeBadge;
            var13['style'] = var16;
            var12 = var15.bind(var4)(var14, var13);
case 20:
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var6['children'] = var8;
            var5 = var5.categoryStoreListingId;
            var5 = var3.bind(var4)(var7, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();