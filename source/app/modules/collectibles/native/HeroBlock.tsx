// app/modules/collectibles/native/HeroBlock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.UserSettingsSections;
    var _closure1_slot7 = var7;
    var4 = var4.VerticalGradient;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['heroContainer'] = var9;
    var9 = {'position': 'absolute', 'resizeMode': 'cover', 'height': '100%', 'width': '100%', 'zIndex': 1};
    var4['heroBannerImage'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0, 'right': 0};
    var4['orbsBackgroundGradient'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'height': '50%', 'width': '100%', 'zIndex': 1};
    var4['heroBannerGradient'] = var9;
    var9 = {'display': 'flex', 'justifyContent': 'center', 'height': '100%', 'zIndex': 1};
    var4['heroBannerContainer'] = var9;
    var9 = {};
    var10 = '-10%';
    var9['top'] = var10;
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var4['orbsHeroTitleContainer'] = var9;
    var9 = {'padding': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '100%'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var12 = 'row';
    var4['innerContainer'] = var9;
    var9 = {'resizeMode': 'contain', 'width': '40%', 'aspectRatio': 2};
    var4['heroLogo'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['padding'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var4['heroViewAllIcon'] = var9;
    var9 = {'position': 'relative', 'display': 'flex', 'width': '100%'};
    var4['heroProductsContainer'] = var9;
    var9 = {};
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['skeletonContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginTop'] = var10;
    var10 = 'flex-start';
    var9['alignSelf'] = var10;
    var4['heroButtonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function SkeletonLoading() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.skeletonContainer;
        var1['style'] = var6;
        var8 = _closure1_slot9;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var6 = 7;
        var5 = var9[var6];
        var10 = var7.bind(var4)(var5);
        var5 = {};
        var11 = {};
        var13 = 6;
        var12 = var9[var13];
        var12 = var7.bind(var4)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var11['marginRight'] = var12;
        var5['style'] = var11;
        var10 = var8.bind(var4)(var10, var5);
        var5 = new Array(9);
        var5[0] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[1] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[2] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[3] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[4] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[5] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var14 = var9[var13];
        var14 = var7.bind(var4)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var12['marginRight'] = var14;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[6] = var10;
        var10 = var9[var6];
        var11 = var7.bind(var4)(var10);
        var10 = {};
        var12 = {};
        var13 = var9[var13];
        var13 = var7.bind(var4)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var12['marginRight'] = var13;
        var10['style'] = var12;
        var10 = var8.bind(var4)(var11, var10);
        var5[7] = var10;
        var6 = var9[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[8] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/HeroBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var34 = var1.heroBlock;
            var _closure2_slot0 = var34;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useNavigation;
            var1 = var1.bind(var4)();
            var _closure2_slot1 = var1;
            var1 = 9;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var4 = var34.categorySkuId;
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.CollectiblesCategorySkuId;
            var1 = var1.ORB;
            var16 = var4 === var1;
            var1 = 11;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.useTrackProductCardImpression;
            var6 = var34.categoryStoreListingId;
            var4 = 'mobile_home';
            var1 = 'hero_block';
            var1 = var7.bind(var8)(var6, var4, var1);
            var6 = var1.handleCardVisibilityChange;
            var1 = _closure1_slot12;
            var18 = var1.bind(var5)();
            var1 = 12;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var4 = var7.useToken;
            var8 = _closure1_slot1;
            var30 = 6;
            var1 = var3[var30];
            var1 = var8.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_PRIMARY;
            var33 = var4.bind(var7)(var1);
            var1 = 13;
            var4 = var3[var1];
            var7 = var2.bind(var5)(var4);
            var4 = var7.hexToRgbaString;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var1 = var8.hexWithOpacity;
            var24 = 0;
            var1 = var1.bind(var8)(var33, var24);
            var37 = var4.bind(var7)(var1);
            var7 = _closure1_slot5;
            var4 = var7.getCategory;
            var1 = var34.categorySkuId;
            var12 = var4.bind(var7)(var1);
            var _closure2_slot3 = var12;
            var1 = 14;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useFilteredAndSortedProducts;
            var2 = {};
            var1 = null;
            var8 = var1 == var12;
            var7 = undefined;
            if(var8) { _fun0001_ip = 329; continue _fun0001 }
 323:
            var7 = var12.products;
 329:
            if(!(var1 == var7)) { _fun0001_ip = 337; continue _fun0001 }
 333:
            var7 = new Array(0);
 337:
            var2['products'] = var7;
            var2 = var3.bind(var4)(var2);
            var22 = var2.sortedProducts;
            if(!(var5 !== var12)) { _fun0001_ip = 1976; continue _fun0001 }
 360:
            var2 = var34.mobileTitle;
            if(!(var1 == var2)) { _fun0001_ip = 377; continue _fun0001 }
 370:
            var35 = var34.title;
            _fun0001_ip = 383; continue _fun0001;
 377:
            var35 = var34.mobileTitle;
 383:
            var2 = var34.mobileSummary;
            if(!(var1 == var2)) { _fun0001_ip = 401; continue _fun0001 }
 393:
            var36 = var34.summary;
            _fun0001_ip = 407; continue _fun0001;
 401:
            var36 = var34.mobileSummary;
 407:
            var20 = var34.mobileProductsTitle;
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onChange'] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var18.heroContainer;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var21 = 275;
            var10 = var21;
            if(!var16) { _fun0001_ip = 480; continue _fun0001 }
 478:
            var10 = undefined;
 480:
            var9['height'] = var10;
            var8[1] = var9;
            var6['style'] = var8;
            var8 = var5 !== var12;
            if(!var8) { _fun0001_ip = 1954; continue _fun0001 }
 502:
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = {};
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 17;
            var13 = var19[var13];
            var13 = var23.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var28 = 18;
            var15 = var19[var28];
            var15 = var23.bind(var5)(var15);
            var27 = var15.intl;
            var25 = var27.formatToPlainString;
            var15 = var19[var28];
            var15 = var23.bind(var5)(var15);
            var15 = var15.t;
            var23 = var15.hEsdAw;
            var15 = {};
            var29 = var12.name;
            var15['category'] = var29;
            var15 = var25.bind(var27)(var23, var15);
            var13['accessibilityLabel'] = var15;
            var15 = {};
            var23 = _closure1_slot1;
            var19 = var19[var30];
            var19 = var23.bind(var5)(var19);
            var19 = var19.radii;
            var19 = var19.lg;
            var15['radius'] = var19;
            var13['androidRippleConfig'] = var15;
            var15 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = _closure2_slot3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var5 = var8.track;
                    var3 = _closure1_slot6;
                    var4 = var3.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
                    var3 = {};
                    var10 = _closure2_slot2;
                    var9 = null;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 74; continue _fun0002 }
 64:
                    var11 = _closure2_slot2;
                    var10 = var11.sessionId;
 74:
                    var3['collectibles_shop_session_id'] = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.categoryStoreListingId;
                    var3['sku_id'] = var10;
                    var10 = 'mobile_home';
                    var3['page_type'] = var10;
                    var10 = _closure2_slot2;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 128; continue _fun0002 }
 118:
                    var11 = _closure2_slot2;
                    var10 = var11.pageSection;
 128:
                    var3['page_section'] = var10;
                    var10 = _closure2_slot2;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 156; continue _fun0002 }
 146:
                    var11 = _closure2_slot2;
                    var10 = var11.pageCategory;
 156:
                    var3['page_category'] = var10;
                    var10 = 'HERO_BLOCK';
                    var3['tile_type'] = var10;
                    var10 = global;
                    var11 = var10.String;
                    var10 = _closure2_slot2;
                    var12 = var9 == var10;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 203; continue _fun0002 }
 193:
                    var12 = _closure2_slot2;
                    var10 = var12.tilePosition;
 203:
                    var10 = var11.bind(var1)(var10);
                    var3['tile_position'] = var10;
                    var3['cta_name'] = var9;
                    var3 = var5.bind(var8)(var4, var3);
                    var5 = _closure2_slot1;
                    var4 = var5.push;
                    var2 = _closure1_slot7;
                    var3 = var2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS;
                    var2 = {};
                    var2['category'] = var7;
                    var6 = _closure2_slot2;
                    var2['analyticsContext'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var13['onPress'] = var15;
            var13['disabled'] = var16;
            var15 = {};
            var19 = undefined;
            if(!var16) { _fun0001_ip = 680; continue _fun0001 }
 677:
            var19 = var21;
 680:
            var15['height'] = var19;
            var13['style'] = var15;
            var19 = var34.bannerAsset;
            var21 = var1 == var19;
            var15 = undefined;
            if(var21) { _fun0001_ip = 709; continue _fun0001 }
 703:
            var15 = var19.static;
 709:
            var19 = var1 != var15;
            if(!var19) { _fun0001_ip = 980; continue _fun0001 }
 719:
            var23 = _closure1_slot10;
            var21 = _closure1_slot11;
            var15 = {};
            var27 = var16;
            if(!var27) { _fun0001_ip = 815; continue _fun0001 }
 735:
            var31 = _closure1_slot9;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var25 = 19;
            var25 = var32[var25];
            var29 = var29.bind(var5)(var25);
            var25 = {};
            var32 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
            var25['colors'] = var32;
            var32 = _closure1_slot8;
            var38 = var32.START;
            var25['start'] = var38;
            var32 = var32.END;
            var25['end'] = var32;
            var32 = var18.orbsBackgroundGradient;
            var25['style'] = var32;
            var27 = var31.bind(var5)(var29, var25);
 815:
            var25 = new Array(3);
            var25[0] = var27;
            var31 = _closure1_slot9;
            var29 = _closure1_slot3;
            var27 = {};
            var32 = var18.heroBannerImage;
            var27['style'] = var32;
            var32 = {};
            var39 = var34.bannerAsset;
            var40 = var1 == var39;
            var38 = undefined;
            if(var40) { _fun0001_ip = 866; continue _fun0001 }
 860:
            var38 = var39.static;
 866:
            var32['uri'] = var38;
            var27['source'] = var32;
            var27 = var31.bind(var5)(var29, var27);
            var25[1] = var27;
            var31 = _closure1_slot9;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var27 = 19;
            var27 = var32[var27];
            var29 = var29.bind(var5)(var27);
            var27 = {};
            var32 = var18.heroBannerGradient;
            var27['style'] = var32;
            var32 = new Array(2);
            var32[0] = var37;
            var32[1] = var33;
            var27['colors'] = var32;
            var32 = _closure1_slot8;
            var33 = var32.START;
            var27['start'] = var33;
            var32 = var32.END;
            var27['end'] = var32;
            var27 = var31.bind(var5)(var29, var27);
            var25[2] = var27;
            var15['children'] = var25;
            var19 = var23.bind(var5)(var21, var15);
 980:
            var15 = new Array(2);
            var15[0] = var19;
            var23 = _closure1_slot9;
            var21 = _closure1_slot4;
            var19 = {};
            var25 = var18.heroBannerContainer;
            var19['style'] = var25;
            var27 = _closure1_slot10;
            var29 = {};
            if(var16) { _fun0001_ip = 1168; continue _fun0001 }
 1020:
            var25 = var18.innerContainer;
            var29['style'] = var25;
            var33 = _closure1_slot9;
            var31 = _closure1_slot3;
            var25 = {};
            var32 = var18.heroLogo;
            var25['style'] = var32;
            var32 = {};
            var34 = var34.logoUrl;
            var32['uri'] = var34;
            var25['source'] = var32;
            var31 = var33.bind(var5)(var31, var25);
            var25 = new Array(2);
            var25[0] = var31;
            var32 = _closure1_slot4;
            var31 = {};
            var34 = var18.heroViewAllIcon;
            var31['style'] = var34;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 22;
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
            _fun0001_ip = 1458; continue _fun0001;
 1168:
            var31 = var18.orbsHeroTitleContainer;
            var29['style'] = var31;
            var32 = var1 != var35;
            if(!var32) { _fun0001_ip = 1238; continue _fun0001 }
 1185:
            var34 = _closure1_slot9;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 20;
            var31 = var37[var31];
            var31 = var33.bind(var5)(var31);
            var33 = var31.Text;
            var31 = {'variant': 'heading-xxl/bold', 'color': 'header-primary'};
            var31['children'] = var35;
            var32 = var34.bind(var5)(var33, var31);
 1238:
            var31 = new Array(3);
            var31[0] = var32;
            var32 = '';
            var32 = var32 !== var36;
            if(!var32) { _fun0001_ip = 1306; continue _fun0001 }
 1257:
            var35 = _closure1_slot9;
            var34 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 20;
            var33 = var37[var33];
            var33 = var34.bind(var5)(var33);
            var34 = var33.Text;
            var33 = {};
            var37 = 'text-md/semibold';
            var33['variant'] = var37;
            var33['children'] = var36;
            var32 = var35.bind(var5)(var34, var33);
 1306:
            var31[1] = var32;
            var34 = _closure1_slot9;
            var33 = _closure1_slot4;
            var32 = {};
            var35 = var18.heroButtonContainer;
            var32['style'] = var35;
            var40 = _closure1_slot0;
            var37 = _closure1_slot2;
            var35 = 21;
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
            var37 = var37.ynollp;
            var37 = var38.bind(var39)(var37);
            var35['text'] = var37;
            var37 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot7;
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
 1458:
            var25 = var27.bind(var5)(var21, var25);
            var19['children'] = var25;
            var19 = var23.bind(var5)(var21, var19);
            var15[1] = var19;
            var13['children'] = var15;
            var12 = var12.storeListingId;
            var13 = var11.bind(var5)(var14, var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot4;
            var13 = {};
            var19 = var18.heroProductsContainer;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var21 = '25%';
            if(!var16) { _fun0001_ip = 1578; continue _fun0001 }
 1538:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var23 = 23;
            var23 = var27[var23];
            var23 = var25.bind(var5)(var23);
            var25 = var23.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var23 = 0.5;
            var21 = var23 * var25;
 1578:
            var19['bottom'] = var21;
            var21 = undefined;
            if(!var16) { _fun0001_ip = 1593; continue _fun0001 }
 1587:
            var21 = '100%';
 1593:
            var19['height'] = var21;
            var18[1] = var19;
            var13['style'] = var18;
            var19 = _closure1_slot9;
            if(var16) { _fun0001_ip = 1871; continue _fun0001 }
 1615:
            var18 = _closure1_slot11;
            var16 = {};
            var21 = var22.length;
            if(!(var24 !== var21)) { _fun0001_ip = 1843; continue _fun0001 }
 1633:
            var25 = _closure1_slot9;
            var29 = _closure1_slot0;
            var27 = _closure1_slot2;
            var21 = 25;
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
            var28 = var28.pWG4zc;
            var28 = var31.bind(var32)(var28);
            var21['accessibilityLabel'] = var28;
            var21['data'] = var22;
            var28 = function renderItem(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var9 = var2.index;
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesAnalyticsProvider;
                    var2 = {};
                    var7 = {};
                    var7['tilePosition'] = var9;
                    var2['newValue'] = var7;
                    var7 = _closure1_slot1;
                    var6 = 23;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var8 = true;
                    var6['solidBackground'] = var8;
                    var6['product'] = var1;
                    var8 = _closure2_slot3;
                    var8 = var8.unpublishedAt;
                    var6['unpublishedAt'] = var8;
                    var6 = var5.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var6 = var1.items;
                    var1 = 0;
                    var6 = var6[var1];
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    if(var7) { _fun0003_ip = 148; continue _fun0003 }
 143:
                    var1 = var6.id;
 148:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var21['renderItem'] = var28;
            var28 = 23;
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
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
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
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
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
                var4 = _closure1_slot9;
                var3 = _closure1_slot4;
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
            _fun0001_ip = 1859; continue _fun0001;
 1843:
            var26 = _closure1_slot9;
            var25 = _closure1_slot13;
            var23 = {};
            var21 = var26.bind(var5)(var25, var23);
 1859:
            var16['children'] = var21;
            var16 = var19.bind(var5)(var18, var16);
            _fun0001_ip = 1930; continue _fun0001;
 1871:
            var18 = _closure1_slot1;
            var21 = _closure1_slot2;
            var17 = 24;
            var17 = var21[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['products'] = var22;
            var23 = var22.length;
            var21 = 4;
            if(!(var24 !== var23)) { _fun0001_ip = 1915; continue _fun0001 }
 1910:
            var21 = var22.length;
 1915:
            var17['loadingCardsNum'] = var21;
            var17['title'] = var20;
            var16 = var19.bind(var5)(var18, var17);
 1930:
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 1954:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1976:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();