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
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot9 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 6;
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
            var3 = 7;
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
            var8 = var8.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
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
    var _closure1_slot14 = var4;
    var4 = function SkeletonLoading() {
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 8;
        var1 = var10[var1];
        var4 = undefined;
        var1 = var7.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var2 = var1.width;
        var1 = _closure1_slot14;
        var6 = var1.bind(var4)(var2);
        var2 = _closure1_slot0;
        var1 = 9;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = var2.useCardLayout;
        var1 = var1.bind(var2)();
        var9 = var1.cardWidth;
        var3 = _closure1_slot12;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.skeletonContainer;
        var1['style'] = var6;
        var8 = _closure1_slot11;
        var6 = 10;
        var5 = var10[var6];
        var11 = var7.bind(var4)(var5);
        var5 = {};
        var5['width'] = var9;
        var12 = {};
        var14 = 7;
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
    var _closure1_slot15 = var4;
    var4 = 36;
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
            var23 = var1.preferVCPrice;
            var _closure2_slot1 = var23;
            var7 = var1.screen;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useNavigation;
            var1 = var1.bind(var6)();
            var _closure2_slot2 = var1;
            var1 = 12;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var3)();
            var _closure2_slot3 = var1;
            var3 = _closure1_slot1;
            var1 = 8;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.width;
            var38 = var2.mobileHeroUrl;
            var1 = null;
            if(!(var1 == var38)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var38 = var2.heroBannerUrl;
case 4:
            var37 = var2.heroLogoUrl;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getCategory;
                var1 = _closure2_slot0;
                var1 = var1.categorySkuId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var6.bind(var8)(var4, var3);
            _closure2_slot4 = var12;
            var19 = var1 != var12;
            if(!var19) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var19 = var12.isOrbsExclusive;
case 6:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var3 = var10.bind(var5)(var3);
            var4 = var3.bind(var5)();
            var8 = _closure1_slot0;
            var3 = 15;
            var3 = var9[var3];
            var15 = var8.bind(var5)(var3);
            var14 = var15.useTrackProductCardImpression;
            var13 = var2.categoryStoreListingId;
            var6 = 'mobile_home';
            var3 = 'hero_block';
            var3 = var14.bind(var15)(var13, var6, var3);
            var6 = var3.handleCardVisibilityChange;
            var3 = _closure1_slot14;
            var16 = var3.bind(var5)(var11);
            var3 = 16;
            var11 = var9[var3];
            var14 = var8.bind(var5)(var11);
            var13 = var14.useToken;
            var33 = 7;
            var11 = var9[var33];
            var11 = var10.bind(var5)(var11);
            var11 = var11.colors;
            var11 = var11.BACKGROUND_BASE_LOW;
            var17 = var13.bind(var14)(var11);
            var11 = 17;
            var13 = var9[var11];
            var14 = var8.bind(var5)(var13);
            var13 = var14.hexToRgbaString;
            var11 = var9[var11];
            var15 = var8.bind(var5)(var11);
            var11 = var15.hexWithOpacity;
            var27 = 0;
            var11 = var11.bind(var15)(var17, var27);
            var34 = var13.bind(var14)(var11);
            var3 = var9[var3];
            var13 = var8.bind(var5)(var3);
            var11 = var13.useToken;
            var3 = var9[var33];
            var3 = var10.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWEST;
            var32 = var11.bind(var13)(var3);
            var3 = 18;
            var3 = var9[var3];
            var3 = var10.bind(var5)(var3);
            var3 = var3.bind(var5)();
            _closure2_slot5 = var3;
            var13 = _closure1_slot3;
            var11 = var13.useMemo;
            var14 = var2.rankedSkuIds;
            var10 = new Array(2);
            var10[0] = var14;
            var10[1] = var3;
            var3 = function() {
                var3 = _closure2_slot5;
                var1 = _closure2_slot0;
                var2 = var1.rankedSkuIds;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var11.bind(var13)(var3, var10);
            var3 = 19;
            var3 = var9[var3];
            var9 = var8.bind(var5)(var3);
            var8 = var9.useFilteredAndSortedProducts;
            var3 = {};
            var3['products'] = var10;
            var3['bypassAndroidUnsyncedFilter'] = var19;
            var25 = var8.bind(var9)(var3);
            var3 = _closure1_slot7;
            var3 = var3.FEATURED_PAGE;
            var3 = var7 === var3;
            _closure2_slot6 = var3;
            if(!(var5 !== var12)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var2.mobileTitle;
            if(!(var1 == var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var35 = var2.title;
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var35 = var2.mobileTitle;
case 12:
            var3 = var2.mobileSummary;
            if(!(var1 == var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var36 = var2.summary;
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var36 = var2.mobileSummary;
case 15:
            if(!var19) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 21;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var4);
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = 23;
            var2 = var7[var2];
            var2 = var4.bind(var5)(var2);
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var3 = 22;
            var3 = var7[var3];
            var2 = var4.bind(var5)(var3);
case 20:
            var38 = var2;
case 16:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 24;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onChange'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = var16.heroContainer;
            var6['style'] = var8;
            var8 = var5 !== var12;
            if(!var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var11 = _closure1_slot12;
            var10 = _closure1_slot13;
            var9 = {};
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 25;
            var13 = var17[var13];
            var13 = var18.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var31 = 26;
            var15 = var17[var31];
            var15 = var18.bind(var5)(var15);
            var22 = var15.intl;
            var21 = var22.formatToPlainString;
            var15 = var17[var31];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var18 = var15.hEsdA9;
            var15 = {};
            var24 = var12.name;
            var15['category'] = var24;
            var15 = var21.bind(var22)(var18, var15);
            var13['accessibilityLabel'] = var15;
            var15 = {};
            var18 = _closure1_slot1;
            var17 = var17[var33];
            var17 = var18.bind(var5)(var17);
            var17 = var17.radii;
            var17 = var17.lg;
            var15['radius'] = var17;
            var13['androidRippleConfig'] = var15;
            var15 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var7 = _closure2_slot4;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var5 = var8.track;
                    var3 = _closure1_slot8;
                    var4 = var3.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var3 = {};
                    var10 = _closure2_slot3;
                    var9 = null;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var11 = _closure2_slot3;
                    var10 = var11.sessionId;
case 23:
                    var3['collectibles_shop_session_id'] = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.categoryStoreListingId;
                    var3['sku_id'] = var10;
                    var10 = 'mobile_home';
                    var3['page_type'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var11 = _closure2_slot3;
                    var10 = var11.pageSection;
case 25:
                    var3['page_section'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var11 = _closure2_slot3;
                    var10 = var11.pageCategory;
case 27:
                    var3['page_category'] = var10;
                    var10 = 'HERO_BLOCK';
                    var3['tile_type'] = var10;
                    var10 = global;
                    var11 = var10.String;
                    var10 = _closure2_slot3;
                    var12 = var9 == var10;
                    var10 = undefined;
                    if(var12) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var12 = _closure2_slot3;
                    var10 = var12.tilePosition;
case 29:
                    var10 = var11.bind(var1)(var10);
                    var3['tile_position'] = var10;
                    var3['cta_name'] = var9;
                    var3 = var5.bind(var8)(var4, var3);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot9;
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
            var13['disabled'] = var19;
            var15 = {};
            var17 = 275;
            var15['height'] = var17;
            var13['style'] = var15;
            var17 = var1 != var38;
            if(!var17) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var21 = _closure1_slot12;
            var18 = _closure1_slot13;
            var15 = {};
            var24 = var19;
            if(!var24) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var28 = _closure1_slot11;
            var26 = _closure1_slot1;
            var30 = _closure1_slot2;
            var22 = 27;
            var22 = var30[var22];
            var26 = var26.bind(var5)(var22);
            var22 = {};
            var30 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
            var22['colors'] = var30;
            var30 = _closure1_slot10;
            var39 = var30.START;
            var22['start'] = var39;
            var30 = var30.END;
            var22['end'] = var30;
            var30 = var16.orbsBackgroundGradient;
            var22['style'] = var30;
            var24 = var28.bind(var5)(var26, var22);
case 33:
            var22 = new Array(3);
            var22[0] = var24;
            var28 = _closure1_slot11;
            var26 = _closure1_slot4;
            var24 = {};
            var39 = var16.heroBannerImage;
            var30 = new Array(1);
            var30[0] = var39;
            var24['style'] = var30;
            var30 = {};
            var30['uri'] = var38;
            var24['source'] = var30;
            var24 = var28.bind(var5)(var26, var24);
            var22[1] = var24;
            var26 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 27;
            var24 = var30[var24];
            var26 = var26.bind(var5)(var24);
            var24 = {};
            var30 = var16.heroBannerGradient;
            var24['style'] = var30;
            var30 = new Array(2);
            var30[0] = var34;
            var30[1] = var32;
            var24['colors'] = var30;
            var30 = _closure1_slot10;
            var32 = var30.START;
            var24['start'] = var32;
            var30 = var30.END;
            var24['end'] = var30;
            var24 = var28.bind(var5)(var26, var24);
            var22[2] = var24;
            var15['children'] = var22;
            var17 = var21.bind(var5)(var18, var15);
case 31:
            var15 = new Array(2);
            var15[0] = var17;
            var21 = _closure1_slot11;
            var18 = _closure1_slot5;
            var17 = {};
            var22 = var16.heroBannerContainer;
            var17['style'] = var22;
            var24 = _closure1_slot12;
            var26 = {};
            if(var19) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var22 = var16.innerContainer;
            var26['style'] = var22;
            var28 = var1 != var37;
            if(!var28) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var32 = _closure1_slot11;
            var30 = _closure1_slot4;
            var22 = {};
            var34 = var16.heroLogo;
            var22['style'] = var34;
            var34 = {};
            var34['uri'] = var37;
            var22['source'] = var34;
            var28 = var32.bind(var5)(var30, var22);
case 37:
            var22 = new Array(2);
            var22[0] = var28;
            var32 = _closure1_slot11;
            var30 = _closure1_slot5;
            var28 = {};
            var34 = var16.heroViewAllIcon;
            var28['style'] = var34;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 30;
            var34 = var38[var34];
            var34 = var37.bind(var5)(var34);
            var37 = var34.ChevronSmallRightIcon;
            var34 = {'size': 'sm', 'color': 'white'};
            var34 = var32.bind(var5)(var37, var34);
            var28['children'] = var34;
            var28 = var32.bind(var5)(var30, var28);
            var22[1] = var28;
            var26['children'] = var22;
            var22 = var26;
            _fun0002_ip = 39; continue _fun0002;
case 35:
            var28 = var16.orbsHeroTitleContainer;
            var26['style'] = var28;
            var30 = var1 != var35;
            if(!var30) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var34 = _closure1_slot11;
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var28 = 28;
            var28 = var37[var28];
            var28 = var32.bind(var5)(var28);
            var32 = var28.Text;
            var28 = {'variant': 'display-md', 'color': 'mobile-text-heading-primary'};
            var37 = var16.heroTitle;
            var28['style'] = var37;
            var28['children'] = var35;
            var30 = var34.bind(var5)(var32, var28);
case 40:
            var28 = new Array(3);
            var28[0] = var30;
            var30 = var1 != var36;
            if(!var30) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var32 = '';
            var30 = var32 !== var36;
case 42:
            if(!var30) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var35 = _closure1_slot11;
            var34 = _closure1_slot0;
            var37 = _closure1_slot2;
            var32 = 28;
            var32 = var37[var32];
            var32 = var34.bind(var5)(var32);
            var34 = var32.Text;
            var32 = {};
            var37 = 'text-md/medium';
            var32['variant'] = var37;
            var32['children'] = var36;
            var30 = var35.bind(var5)(var34, var32);
case 44:
            var28[1] = var30;
            var34 = _closure1_slot11;
            var32 = _closure1_slot5;
            var30 = {};
            var35 = var16.heroButtonContainer;
            var30['style'] = var35;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 29;
            var35 = var37[var35];
            var35 = var40.bind(var5)(var35);
            var36 = var35.Button;
            var35 = {'variant': 'tertiary', 'shrink': true, 'grow': false, 'size': 'sm'};
            var38 = var37[var31];
            var38 = var40.bind(var5)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var31];
            var37 = var40.bind(var5)(var37);
            var37 = var37.t;
            var37 = var37.ynollq;
            var37 = var38.bind(var39)(var37);
            var35['text'] = var37;
            var37 = function onPress() {
                var3 = _closure2_slot2;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.QUESTS;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var35['onPress'] = var37;
            var35 = var34.bind(var5)(var36, var35);
            var30['children'] = var35;
            var30 = var34.bind(var5)(var32, var30);
            var28[2] = var30;
            var26['children'] = var28;
            var22 = var26;
case 39:
            var22 = var24.bind(var5)(var18, var22);
            var17['children'] = var22;
            var17 = var21.bind(var5)(var18, var17);
            var15[1] = var17;
            var13['children'] = var15;
            var12 = var12.storeListingId;
            var13 = var11.bind(var5)(var14, var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot11;
            var14 = _closure1_slot5;
            var13 = {};
            var17 = var16.heroProductsContainer;
            var16 = new Array(2);
            var16[0] = var17;
            if(var19) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var17 = {'position': 'absolute', 'top': '55%', 'left': 0, 'right': 0};
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 31;
            var18 = var22[var18];
            var18 = var21.bind(var5)(var18);
            var18 = var18.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var17['height'] = var18;
            _fun0002_ip = 48; continue _fun0002;
case 46:
            var18 = {};
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 31;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var21 = 0.5;
            var21 = var21 * var22;
            var18['bottom'] = var21;
            var21 = '100%';
            var18['height'] = var21;
            var17 = var18;
case 48:
            var16[1] = var17;
            var13['style'] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 32;
            var16 = var21[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.LayerScope;
            var16 = {};
            var22 = _closure1_slot11;
            if(var19) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var21 = _closure1_slot13;
            var19 = {};
            var24 = var25.length;
            if(!(var27 !== var24)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var28 = _closure1_slot11;
            var32 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 34;
            var24 = var30[var24];
            var24 = var32.bind(var5)(var24);
            var26 = var24.FlashList;
            var24 = {};
            var34 = true;
            var24['horizontal'] = var34;
            var34 = var30[var31];
            var34 = var32.bind(var5)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var31 = var30[var31];
            var31 = var32.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.pWG4ze;
            var31 = var34.bind(var35)(var31);
            var24['accessibilityLabel'] = var31;
            var24['data'] = var25;
            var31 = function renderItem(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var11 = var2.index;
                    var5 = _closure1_slot11;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 31;
                    var2 = var6[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var8 = true;
                    var2['solidBackground'] = var8;
                    var2['product'] = var1;
                    var9 = _closure2_slot4;
                    var9 = var9.unpublishedAt;
                    var2['unpublishedAt'] = var9;
                    var9 = _closure2_slot1;
                    var2['preferVCPrice'] = var9;
                    var10 = var5.bind(var4)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesAnalyticsProvider;
                    var2 = {};
                    var6 = {};
                    var6['tilePosition'] = var11;
                    var2['newValue'] = var6;
                    var9 = 0;
                    var6 = var10;
                    if(!(var9 === var11)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                    var8 = _closure2_slot6;
                    var6 = var10;
                    if(!var8) { _fun0004_ip = 53; continue _fun0004 }
case 55:
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 35;
                    var7 = var11[var7];
                    var8 = var8.bind(var4)(var7);
                    var7 = {};
                    var7['children'] = var10;
                    var6 = var9.bind(var4)(var8, var7);
case 53:
                    var2['children'] = var6;
                    var1 = var1.skuId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var24['renderItem'] = var31;
            var31 = 31;
            var31 = var30[var31];
            var31 = var32.bind(var5)(var31);
            var31 = var31.COLLECTIBLES_SHOP_CARD_WIDTH;
            var32 = _closure1_slot1;
            var30 = var30[var33];
            var30 = var32.bind(var5)(var30);
            var30 = var30.spacing;
            var30 = var30.PX_12;
            var30 = var31 + var30;
            var24['estimatedItemSize'] = var30;
            var30 = false;
            var24['showsHorizontalScrollIndicator'] = var30;
            var30 = function ListHeaderComponent() {
                var4 = _closure1_slot11;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
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
            var24['ListHeaderComponent'] = var30;
            var30 = function ListFooterComponent() {
                var4 = _closure1_slot11;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
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
            var24['ListFooterComponent'] = var30;
            var29 = function ItemSeparatorComponent() {
                var4 = _closure1_slot11;
                var3 = _closure1_slot5;
                var2 = {};
                var5 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
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
            var24['ItemSeparatorComponent'] = var29;
            var24['initialScrollIndex'] = var27;
            var24 = var28.bind(var5)(var26, var24);
            _fun0002_ip = 56; continue _fun0002;
case 51:
            var29 = _closure1_slot11;
            var28 = _closure1_slot15;
            var26 = {};
            var24 = var29.bind(var5)(var28, var26);
case 56:
            var19['children'] = var24;
            var19 = var22.bind(var5)(var21, var19);
            _fun0002_ip = 57; continue _fun0002;
case 49:
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var20 = 33;
            var20 = var24[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['products'] = var25;
            var26 = var25.length;
            var24 = 4;
            if(!(var27 !== var26)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var24 = var25.length;
case 58:
            var20['loadingCardsNum'] = var24;
            var20['preferVCPrice'] = var23;
            var19 = var22.bind(var5)(var21, var20);
case 57:
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 21:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();