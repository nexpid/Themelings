// app/modules/collectibles/native/HeroBlock.tsx
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot8 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = {};
            var3 = '100%';
            var2 = {'width': '100%', 'height': '100%'};
            var1['heroContainer'] = var2;
            var2 = {'height': null, 'position': 'absolute', 'resizeMode': 'cover', 'width': '100%', 'zIndex': 1};
            var4 = 360;
            var4 = var9 <= var4;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 235;
case 2:
            var2['height'] = var3;
            var1['heroBannerImage'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0, 'right': 0};
            var1['orbsBackgroundGradient'] = var2;
            var2 = {'position': 'absolute', 'bottom': 0, 'height': '50%', 'width': '100%', 'zIndex': 1};
            var1['heroBannerGradient'] = var2;
            var2 = {'display': 'flex', 'justifyContent': 'center', 'height': '100%', 'zIndex': 1};
            var1['heroBannerContainer'] = var2;
            var2 = {};
            var3 = '-10%';
            var2['top'] = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var7 = var6[var3];
            var4 = undefined;
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['padding'] = var7;
            var1['orbsHeroTitleContainer'] = var2;
            var2 = {'fontSize': 24, 'lineHeight': 30, 'textAlignVertical': 'center', 'textTransform': 'uppercase'};
            var1['heroTitle'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'paddingHorizontal': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '100%', 'height': '75%'};
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingHorizontal'] = var7;
            var7 = 'row';
            var1['innerContainer'] = var2;
            var2 = {'resizeMode': 'contain', 'height': null, 'aspectRatio': 1};
            var8 = 0.35;
            var8 = var8 * var9;
            var2['height'] = var8;
            var1['heroLogo'] = var2;
            var2 = {};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.colors;
            var8 = var8.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND;
            var2['backgroundColor'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['padding'] = var8;
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.radii;
            var8 = var8.round;
            var2['borderRadius'] = var8;
            var1['heroViewAllIcon'] = var2;
            var2 = {'display': 'flex', 'width': '100%'};
            var1['heroProductsContainer'] = var2;
            var2 = {};
            var2['flexDirection'] = var7;
            var7 = var6[var3];
            var7 = var5.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['paddingHorizontal'] = var7;
            var1['skeletonContainer'] = var2;
            var2 = {};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_16;
            var2['marginTop'] = var3;
            var3 = 'flex-start';
            var2['alignSelf'] = var3;
            var1['heroButtonContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function SkeletonLoading() {
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 7;
        var1 = var10[var1];
        var4 = undefined;
        var1 = var7.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var2 = var1.width;
        var1 = _closure1_slot13;
        var6 = var1.bind(var4)(var2);
        var2 = _closure1_slot0;
        var1 = 8;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useCardLayout;
        var1 = var1.bind(var2)();
        var9 = var1.cardWidth;
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.skeletonContainer;
        var1['style'] = var6;
        var8 = _closure1_slot10;
        var6 = 9;
        var5 = var10[var6];
        var11 = var7.bind(var4)(var5);
        var5 = {};
        var5['width'] = var9;
        var12 = {};
        var14 = 6;
        var13 = var10[var14];
        var13 = var7.bind(var4)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var12['marginRight'] = var13;
        var5['style'] = var12;
        var11 = var8.bind(var4)(var11, var5);
        var5 = new Array(9);
        var5[0] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[1] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[2] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[3] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[4] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[5] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var15 = var10[var14];
        var15 = var7.bind(var4)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_12;
        var13['marginRight'] = var15;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[6] = var11;
        var11 = var10[var6];
        var12 = var7.bind(var4)(var11);
        var11 = {};
        var11['width'] = var9;
        var13 = {};
        var14 = var10[var14];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var13['marginRight'] = var14;
        var11['style'] = var13;
        var11 = var8.bind(var4)(var12, var11);
        var5[7] = var11;
        var6 = var10[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['width'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[8] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/HeroBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.heroBlock;
            var _closure2_slot0 = var2;
            var20 = var1.preferVCPrice;
            var _closure2_slot1 = var20;
            var5 = undefined;
            var _closure2_slot5 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 10;
            var3 = var1[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var6.useNavigation;
            var3 = var3.bind(var6)();
            var _closure2_slot2 = var3;
            var3 = 11;
            var3 = var1[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var6.useCollectiblesAnalyticsContext;
            var3 = var3.bind(var6)();
            var _closure2_slot3 = var3;
            var6 = _closure1_slot1;
            var3 = 7;
            var3 = var1[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var10 = var3.width;
            var3 = 12;
            var3 = var1[var3];
            var6 = var4.bind(var5)(var3);
            var3 = var6.useHeroBlockAssets;
            var3 = var3.bind(var6)(var2);
            var38 = var3.heroBannerURL;
            var37 = var3.heroLogoURL;
            var3 = 13;
            var1 = var1[var3];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getCategory;
                var1 = _closure2_slot0;
                var1 = var1.categorySkuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var6.bind(var7)(var4, var1);
            var _closure2_slot4 = var12;
            var1 = null;
            var16 = var1 != var12;
            if(!var16) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var16 = var12.isOrbsExclusive;
case 4:
            var13 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 14;
            var4 = var8[var4];
            var4 = var13.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var7 = _closure1_slot0;
            var6 = 15;
            var6 = var8[var6];
            var15 = var7.bind(var5)(var6);
            var14 = var15.useTrackProductCardImpression;
            var11 = var2.categoryStoreListingId;
            var9 = 'mobile_home';
            var6 = 'hero_block';
            var6 = var14.bind(var15)(var11, var9, var6);
            var6 = var6.handleCardVisibilityChange;
            var9 = _closure1_slot13;
            var18 = var9.bind(var5)(var10);
            var9 = 16;
            var10 = var8[var9];
            var14 = var7.bind(var5)(var10);
            var11 = var14.useToken;
            var30 = 6;
            var10 = var8[var30];
            var10 = var13.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BASE_LOW;
            var19 = var11.bind(var14)(var10);
            var10 = 17;
            var11 = var8[var10];
            var14 = var7.bind(var5)(var11);
            var11 = var14.hexToRgbaString;
            var10 = var8[var10];
            var15 = var7.bind(var5)(var10);
            var10 = var15.hexWithOpacity;
            var24 = 0;
            var10 = var10.bind(var15)(var19, var24);
            var34 = var11.bind(var14)(var10);
            var9 = var8[var9];
            var11 = var7.bind(var5)(var9);
            var10 = var11.useToken;
            var9 = var8[var30];
            var9 = var13.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_BASE_LOWEST;
            var33 = var10.bind(var11)(var9);
            var3 = var8[var3];
            var11 = var7.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.products;
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            _closure2_slot5 = var3;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var13 = var2.rankedSkuIds;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var3;
            var3 = function() {
                var2 = _closure2_slot0;
                var4 = var2.rankedSkuIds;
                var3 = var4.map;
                var2 = function(arg1) {
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = null;
                    var1 = arg1;
                    var1 = var2 != var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var10.bind(var11)(var3, var9);
            var3 = 18;
            var3 = var8[var3];
            var8 = var7.bind(var5)(var3);
            var7 = var8.useFilteredAndSortedProducts;
            var3 = {};
            var3['products'] = var9;
            var3['bypassAndroidUnsyncedFilter'] = var16;
            var22 = var7.bind(var8)(var3);
            if(!(var5 !== var12)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.mobileTitle;
            if(!(var1 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var35 = var2.title;
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var35 = var2.mobileTitle;
case 10:
            var3 = var2.mobileSummary;
            if(!(var1 == var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var36 = var2.summary;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var36 = var2.mobileSummary;
case 13:
            if(!var16) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var4);
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = 22;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            _fun0002_ip = 18; continue _fun0002;
case 16:
            var3 = 21;
            var3 = var7[var3];
            var2 = var4.bind(var5)(var3);
case 18:
            var38 = var2;
case 14:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onChange'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = var18.heroContainer;
            var6['style'] = var8;
            var8 = var5 !== var12;
            if(!var8) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = {};
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 24;
            var13 = var19[var13];
            var13 = var21.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var28 = 25;
            var15 = var19[var28];
            var15 = var21.bind(var5)(var15);
            var25 = var15.intl;
            var23 = var25.formatToPlainString;
            var15 = var19[var28];
            var15 = var21.bind(var5)(var15);
            var15 = var15.t;
            var21 = var15.hEsdA9;
            var15 = {};
            var27 = var12.name;
            var15['category'] = var27;
            var15 = var23.bind(var25)(var21, var15);
            var13['accessibilityLabel'] = var15;
            var15 = {};
            var21 = _closure1_slot1;
            var19 = var19[var30];
            var19 = var21.bind(var5)(var19);
            var19 = var19.radii;
            var19 = var19.lg;
            var15['radius'] = var19;
            var13['androidRippleConfig'] = var15;
            var15 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure2_slot4;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var5 = var8.track;
                    var3 = _closure1_slot7;
                    var4 = var3.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var3 = {};
                    var10 = _closure2_slot3;
                    var9 = null;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var11 = _closure2_slot3;
                    var10 = var11.sessionId;
case 21:
                    var3['collectibles_shop_session_id'] = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.categoryStoreListingId;
                    var3['sku_id'] = var10;
                    var10 = 'mobile_home';
                    var3['page_type'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var11 = _closure2_slot3;
                    var10 = var11.pageSection;
case 23:
                    var3['page_section'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var11 = _closure2_slot3;
                    var10 = var11.pageCategory;
case 25:
                    var3['page_category'] = var10;
                    var10 = 'HERO_BLOCK';
                    var3['tile_type'] = var10;
                    var10 = global;
                    var11 = var10.String;
                    var10 = _closure2_slot3;
                    var12 = var9 == var10;
                    var10 = undefined;
                    if(var12) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var12 = _closure2_slot3;
                    var10 = var12.tilePosition;
case 27:
                    var10 = var11.bind(var1)(var10);
                    var3['tile_position'] = var10;
                    var3['cta_name'] = var9;
                    var3 = var5.bind(var8)(var4, var3);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot8;
                    var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                    var2 = {};
                    var2['category'] = var7;
                    var6 = _closure2_slot3;
                    var2['analyticsContext'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13['onPress'] = var15;
            var13['disabled'] = var16;
            var15 = {};
            var19 = 275;
            var15['height'] = var19;
            var13['style'] = var15;
            var19 = var1 != var38;
            if(!var19) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var23 = _closure1_slot11;
            var21 = _closure1_slot12;
            var15 = {};
            var27 = var16;
            if(!var27) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var31 = _closure1_slot10;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var25 = 26;
            var25 = var32[var25];
            var29 = var29.bind(var5)(var25);
            var25 = {};
            var32 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
            var25['colors'] = var32;
            var32 = _closure1_slot9;
            var39 = var32.START;
            var25['start'] = var39;
            var32 = var32.END;
            var25['end'] = var32;
            var32 = var18.orbsBackgroundGradient;
            var25['style'] = var32;
            var27 = var31.bind(var5)(var29, var25);
case 31:
            var25 = new Array(3);
            var25[0] = var27;
            var31 = _closure1_slot10;
            var29 = _closure1_slot4;
            var27 = {};
            var39 = var18.heroBannerImage;
            var32 = new Array(1);
            var32[0] = var39;
            var27['style'] = var32;
            var32 = {};
            var32['uri'] = var38;
            var27['source'] = var32;
            var27 = var31.bind(var5)(var29, var27);
            var25[1] = var27;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var27 = 26;
            var27 = var32[var27];
            var29 = var29.bind(var5)(var27);
            var27 = {};
            var32 = var18.heroBannerGradient;
            var27['style'] = var32;
            var32 = new Array(2);
            var32[0] = var34;
            var32[1] = var33;
            var27['colors'] = var32;
            var32 = _closure1_slot9;
            var33 = var32.START;
            var27['start'] = var33;
            var32 = var32.END;
            var27['end'] = var32;
            var27 = var31.bind(var5)(var29, var27);
            var25[2] = var27;
            var15['children'] = var25;
            var19 = var23.bind(var5)(var21, var15);
case 29:
            var15 = new Array(2);
            var15[0] = var19;
            var23 = _closure1_slot10;
            var21 = _closure1_slot5;
            var19 = {};
            var25 = var18.heroBannerContainer;
            var19['style'] = var25;
            var27 = _closure1_slot11;
            var29 = {};
            if(var16) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var25 = var18.innerContainer;
            var29['style'] = var25;
            var31 = var1 != var37;
            if(!var31) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var33 = _closure1_slot10;
            var32 = _closure1_slot4;
            var25 = {};
            var34 = var18.heroLogo;
            var25['style'] = var34;
            var34 = {};
            var34['uri'] = var37;
            var25['source'] = var34;
            var31 = var33.bind(var5)(var32, var25);
case 35:
            var25 = new Array(2);
            var25[0] = var31;
            var33 = _closure1_slot10;
            var32 = _closure1_slot5;
            var31 = {};
            var34 = var18.heroViewAllIcon;
            var31['style'] = var34;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 29;
            var34 = var38[var34];
            var34 = var37.bind(var5)(var34);
            var37 = var34.ChevronSmallRightIcon;
            var34 = {'size': 'sm', 'color': 'white'};
            var34 = var33.bind(var5)(var37, var34);
            var31['children'] = var34;
            var31 = var33.bind(var5)(var32, var31);
            var25[1] = var31;
            var29['children'] = var25;
            var25 = var29;
            _fun0002_ip = 37; continue _fun0002;
case 33:
            var31 = var18.orbsHeroTitleContainer;
            var29['style'] = var31;
            var32 = var1 != var35;
            if(!var32) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var34 = _closure1_slot10;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 27;
            var31 = var37[var31];
            var31 = var33.bind(var5)(var31);
            var33 = var31.Text;
            var31 = {'variant': 'display-md', 'color': 'mobile-text-heading-primary'};
            var37 = var18.heroTitle;
            var31['style'] = var37;
            var31['children'] = var35;
            var32 = var34.bind(var5)(var33, var31);
case 38:
            var31 = new Array(3);
            var31[0] = var32;
            var32 = var1 != var36;
            if(!var32) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var33 = '';
            var32 = var33 !== var36;
case 40:
            if(!var32) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var35 = _closure1_slot10;
            var34 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 27;
            var33 = var37[var33];
            var33 = var34.bind(var5)(var33);
            var34 = var33.Text;
            var33 = {};
            var37 = 'text-md/medium';
            var33['variant'] = var37;
            var33['children'] = var36;
            var32 = var35.bind(var5)(var34, var33);
case 42:
            var31[1] = var32;
            var34 = _closure1_slot10;
            var33 = _closure1_slot5;
            var32 = {};
            var35 = var18.heroButtonContainer;
            var32['style'] = var35;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 28;
            var35 = var37[var35];
            var35 = var40.bind(var5)(var35);
            var36 = var35.Button;
            var35 = {'variant': 'tertiary', 'shrink': true, 'grow': false, 'size': 'sm'};
            var38 = var37[var28];
            var38 = var40.bind(var5)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var28];
            var37 = var40.bind(var5)(var37);
            var37 = var37.t;
            var37 = var37.ynollq;
            var37 = var38.bind(var39)(var37);
            var35['text'] = var37;
            var37 = function onPress() {
                var3 = _closure2_slot2;
                var2 = var3.push;
                var1 = _closure1_slot8;
                var1 = var1.QUESTS;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var35['onPress'] = var37;
            var35 = var34.bind(var5)(var36, var35);
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var31[2] = var32;
            var29['children'] = var31;
            var25 = var29;
case 37:
            var25 = var27.bind(var5)(var21, var25);
            var19['children'] = var25;
            var19 = var23.bind(var5)(var21, var19);
            var15[1] = var19;
            var13['children'] = var15;
            var12 = var12.storeListingId;
            var13 = var11.bind(var5)(var14, var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot10;
            var14 = _closure1_slot5;
            var13 = {};
            var19 = var18.heroProductsContainer;
            var18 = new Array(2);
            var18[0] = var19;
            if(var16) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var19 = {'position': 'absolute', 'top': '55%', 'left': 0, 'right': 0};
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 30;
            var21 = var25[var21];
            var21 = var23.bind(var5)(var21);
            var21 = var21.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var19['height'] = var21;
            _fun0002_ip = 46; continue _fun0002;
case 44:
            var21 = {};
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 30;
            var23 = var27[var23];
            var23 = var25.bind(var5)(var23);
            var25 = var23.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var23 = 0.5;
            var23 = var23 * var25;
            var21['bottom'] = var23;
            var23 = '100%';
            var21['height'] = var23;
            var19 = var21;
case 46:
            var18[1] = var19;
            var13['style'] = var18;
            var19 = _closure1_slot10;
            if(var16) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var18 = _closure1_slot12;
            var16 = {};
            var21 = var22.length;
            if(!(var24 !== var21)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var25 = _closure1_slot10;
            var29 = _closure1_slot0;
            var27 = _closure1_slot2;
            var21 = 32;
            var21 = var27[var21];
            var21 = var29.bind(var5)(var21);
            var23 = var21.FlashList;
            var21 = {};
            var31 = true;
            var21['horizontal'] = var31;
            var31 = var27[var28];
            var31 = var29.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var28 = var27[var28];
            var28 = var29.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.pWG4ze;
            var28 = var31.bind(var32)(var28);
            var21['accessibilityLabel'] = var28;
            var21['data'] = var22;
            var28 = function renderItem(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var9 = var2.index;
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
                    var2 = var8[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesAnalyticsProvider;
                    var2 = {};
                    var7 = {};
                    var7['tilePosition'] = var9;
                    var2['newValue'] = var7;
                    var7 = _closure1_slot1;
                    var6 = 30;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var8 = true;
                    var6['solidBackground'] = var8;
                    var6['product'] = var1;
                    var9 = _closure2_slot4;
                    var9 = var9.unpublishedAt;
                    var6['unpublishedAt'] = var9;
                    var8 = _closure2_slot1;
                    var6['preferVCPrice'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var6 = var1.items;
                    var1 = 0;
                    var6 = var6[var1];
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    if(var7) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                    var1 = var6.skuId;
case 51:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var21['renderItem'] = var28;
            var28 = 30;
            var28 = var27[var28];
            var28 = var29.bind(var5)(var28);
            var28 = var28.COLLECTIBLES_SHOP_CARD_WIDTH;
            var29 = _closure1_slot1;
            var27 = var27[var30];
            var27 = var29.bind(var5)(var27);
            var27 = var27.spacing;
            var27 = var27.PX_12;
            var27 = var28 + var27;
            var21['estimatedItemSize'] = var27;
            var27 = false;
            var21['showsHorizontalScrollIndicator'] = var27;
            var27 = function ListHeaderComponent() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var5['width'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var21['ListHeaderComponent'] = var27;
            var27 = function ListFooterComponent() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var5['width'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var21['ListFooterComponent'] = var27;
            var26 = function ItemSeparatorComponent() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_12;
                var5['width'] = var6;
                var2['style'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var21['ItemSeparatorComponent'] = var26;
            var21['initialScrollIndex'] = var24;
            var21 = var25.bind(var5)(var23, var21);
            _fun0002_ip = 53; continue _fun0002;
case 49:
            var26 = _closure1_slot10;
            var25 = _closure1_slot14;
            var23 = {};
            var21 = var26.bind(var5)(var25, var23);
case 53:
            var16['children'] = var21;
            var16 = var19.bind(var5)(var18, var16);
            _fun0002_ip = 54; continue _fun0002;
case 47:
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var17 = 31;
            var17 = var21[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['products'] = var22;
            var23 = var22.length;
            var21 = 4;
            if(!(var24 !== var23)) { _fun0002_ip = 55; continue _fun0002 }
case 56:
            var21 = var22.length;
case 55:
            var17['loadingCardsNum'] = var21;
            var17['preferVCPrice'] = var20;
            var16 = var19.bind(var5)(var18, var17);
case 54:
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 19:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();