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
    var9 = {'width': '100%', 'height': '100%'};
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
    var9 = {'display': 'flex', 'width': '100%'};
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
            var35 = var1.heroBlock;
            var _closure2_slot0 = var35;
            var20 = var1.preferVCPrice;
            var _closure2_slot1 = var20;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useNavigation;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var1 = 9;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var4)();
            var _closure2_slot3 = var1;
            var4 = var35.categorySkuId;
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
            var6 = var35.categoryStoreListingId;
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
            var31 = 6;
            var1 = var3[var31];
            var1 = var8.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_PRIMARY;
            var34 = var4.bind(var7)(var1);
            var1 = 13;
            var4 = var3[var1];
            var7 = var2.bind(var5)(var4);
            var4 = var7.hexToRgbaString;
            var1 = var3[var1];
            var8 = var2.bind(var5)(var1);
            var1 = var8.hexWithOpacity;
            var25 = 0;
            var1 = var1.bind(var8)(var34, var25);
            var38 = var4.bind(var7)(var1);
            var7 = _closure1_slot5;
            var4 = var7.getCategory;
            var1 = var35.categorySkuId;
            var12 = var4.bind(var7)(var1);
            var _closure2_slot4 = var12;
            var1 = 14;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useFilteredAndSortedProducts;
            var2 = {};
            var1 = null;
            var8 = var1 == var12;
            var7 = undefined;
            if(var8) { _fun0001_ip = 339; continue _fun0001 }
 333:
            var7 = var12.products;
 339:
            if(!(var1 == var7)) { _fun0001_ip = 347; continue _fun0001 }
 343:
            var7 = new Array(0);
 347:
            var2['products'] = var7;
            var2['bypassAndroidUnsyncedFilter'] = var16;
            var2 = var3.bind(var4)(var2);
            var23 = var2.sortedProducts;
            if(!(var5 !== var12)) { _fun0001_ip = 2000; continue _fun0001 }
 375:
            var2 = var35.mobileTitle;
            if(!(var1 == var2)) { _fun0001_ip = 392; continue _fun0001 }
 385:
            var36 = var35.title;
            _fun0001_ip = 398; continue _fun0001;
 392:
            var36 = var35.mobileTitle;
 398:
            var2 = var35.mobileSummary;
            if(!(var1 == var2)) { _fun0001_ip = 416; continue _fun0001 }
 408:
            var37 = var35.summary;
            _fun0001_ip = 422; continue _fun0001;
 416:
            var37 = var35.mobileSummary;
 422:
            var21 = var35.mobileProductsTitle;
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
            var8 = var18.heroContainer;
            var6['style'] = var8;
            var8 = var5 !== var12;
            if(!var8) { _fun0001_ip = 1978; continue _fun0001 }
 485:
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = {};
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 17;
            var13 = var19[var13];
            var13 = var22.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var29 = 18;
            var15 = var19[var29];
            var15 = var22.bind(var5)(var15);
            var26 = var15.intl;
            var24 = var26.formatToPlainString;
            var15 = var19[var29];
            var15 = var22.bind(var5)(var15);
            var15 = var15.t;
            var22 = var15.hEsdAw;
            var15 = {};
            var28 = var12.name;
            var15['category'] = var28;
            var15 = var24.bind(var26)(var22, var15);
            var13['accessibilityLabel'] = var15;
            var15 = {};
            var22 = _closure1_slot1;
            var19 = var19[var31];
            var19 = var22.bind(var5)(var19);
            var19 = var19.radii;
            var19 = var19.lg;
            var15['radius'] = var19;
            var13['androidRippleConfig'] = var15;
            var15 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = _closure2_slot4;
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
                    var10 = _closure2_slot3;
                    var9 = null;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 74; continue _fun0002 }
 64:
                    var11 = _closure2_slot3;
                    var10 = var11.sessionId;
 74:
                    var3['collectibles_shop_session_id'] = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.categoryStoreListingId;
                    var3['sku_id'] = var10;
                    var10 = 'mobile_home';
                    var3['page_type'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 128; continue _fun0002 }
 118:
                    var11 = _closure2_slot3;
                    var10 = var11.pageSection;
 128:
                    var3['page_section'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 156; continue _fun0002 }
 146:
                    var11 = _closure2_slot3;
                    var10 = var11.pageCategory;
 156:
                    var3['page_category'] = var10;
                    var10 = 'HERO_BLOCK';
                    var3['tile_type'] = var10;
                    var10 = global;
                    var11 = var10.String;
                    var10 = _closure2_slot3;
                    var12 = var9 == var10;
                    var10 = undefined;
                    if(var12) { _fun0002_ip = 203; continue _fun0002 }
 193:
                    var12 = _closure2_slot3;
                    var10 = var12.tilePosition;
 203:
                    var10 = var11.bind(var1)(var10);
                    var3['tile_position'] = var10;
                    var3['cta_name'] = var9;
                    var3 = var5.bind(var8)(var4, var3);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var2 = _closure1_slot7;
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
            var19 = var35.bannerAsset;
            var22 = var1 == var19;
            var15 = undefined;
            if(var22) { _fun0001_ip = 690; continue _fun0001 }
 684:
            var15 = var19.static;
 690:
            var19 = var1 != var15;
            if(!var19) { _fun0001_ip = 961; continue _fun0001 }
 700:
            var24 = _closure1_slot10;
            var22 = _closure1_slot11;
            var15 = {};
            var28 = var16;
            if(!var28) { _fun0001_ip = 796; continue _fun0001 }
 716:
            var32 = _closure1_slot9;
            var30 = _closure1_slot1;
            var33 = _closure1_slot2;
            var26 = 19;
            var26 = var33[var26];
            var30 = var30.bind(var5)(var26);
            var26 = {};
            var33 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
            var26['colors'] = var33;
            var33 = _closure1_slot8;
            var39 = var33.START;
            var26['start'] = var39;
            var33 = var33.END;
            var26['end'] = var33;
            var33 = var18.orbsBackgroundGradient;
            var26['style'] = var33;
            var28 = var32.bind(var5)(var30, var26);
 796:
            var26 = new Array(3);
            var26[0] = var28;
            var32 = _closure1_slot9;
            var30 = _closure1_slot3;
            var28 = {};
            var33 = var18.heroBannerImage;
            var28['style'] = var33;
            var33 = {};
            var40 = var35.bannerAsset;
            var41 = var1 == var40;
            var39 = undefined;
            if(var41) { _fun0001_ip = 847; continue _fun0001 }
 841:
            var39 = var40.static;
 847:
            var33['uri'] = var39;
            var28['source'] = var33;
            var28 = var32.bind(var5)(var30, var28);
            var26[1] = var28;
            var32 = _closure1_slot9;
            var30 = _closure1_slot1;
            var33 = _closure1_slot2;
            var28 = 19;
            var28 = var33[var28];
            var30 = var30.bind(var5)(var28);
            var28 = {};
            var33 = var18.heroBannerGradient;
            var28['style'] = var33;
            var33 = new Array(2);
            var33[0] = var38;
            var33[1] = var34;
            var28['colors'] = var33;
            var33 = _closure1_slot8;
            var34 = var33.START;
            var28['start'] = var34;
            var33 = var33.END;
            var28['end'] = var33;
            var28 = var32.bind(var5)(var30, var28);
            var26[2] = var28;
            var15['children'] = var26;
            var19 = var24.bind(var5)(var22, var15);
 961:
            var15 = new Array(2);
            var15[0] = var19;
            var24 = _closure1_slot9;
            var22 = _closure1_slot4;
            var19 = {};
            var26 = var18.heroBannerContainer;
            var19['style'] = var26;
            var28 = _closure1_slot10;
            var30 = {};
            if(var16) { _fun0001_ip = 1149; continue _fun0001 }
 1001:
            var26 = var18.innerContainer;
            var30['style'] = var26;
            var34 = _closure1_slot9;
            var32 = _closure1_slot3;
            var26 = {};
            var33 = var18.heroLogo;
            var26['style'] = var33;
            var33 = {};
            var35 = var35.logoUrl;
            var33['uri'] = var35;
            var26['source'] = var33;
            var32 = var34.bind(var5)(var32, var26);
            var26 = new Array(2);
            var26[0] = var32;
            var33 = _closure1_slot4;
            var32 = {};
            var35 = var18.heroViewAllIcon;
            var32['style'] = var35;
            var38 = _closure1_slot0;
            var39 = _closure1_slot2;
            var35 = 22;
            var35 = var39[var35];
            var35 = var38.bind(var5)(var35);
            var38 = var35.ChevronSmallRightIcon;
            var35 = {'size': 'sm', 'color': 'white'};
            var35 = var34.bind(var5)(var38, var35);
            var32['children'] = var35;
            var32 = var34.bind(var5)(var33, var32);
            var26[1] = var32;
            var30['children'] = var26;
            var26 = var30;
            _fun0001_ip = 1439; continue _fun0001;
 1149:
            var32 = var18.orbsHeroTitleContainer;
            var30['style'] = var32;
            var33 = var1 != var36;
            if(!var33) { _fun0001_ip = 1219; continue _fun0001 }
 1166:
            var35 = _closure1_slot9;
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var32 = 20;
            var32 = var38[var32];
            var32 = var34.bind(var5)(var32);
            var34 = var32.Text;
            var32 = {'variant': 'heading-xxl/bold', 'color': 'header-primary'};
            var32['children'] = var36;
            var33 = var35.bind(var5)(var34, var32);
 1219:
            var32 = new Array(3);
            var32[0] = var33;
            var33 = '';
            var33 = var33 !== var37;
            if(!var33) { _fun0001_ip = 1287; continue _fun0001 }
 1238:
            var36 = _closure1_slot9;
            var35 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 20;
            var34 = var38[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.Text;
            var34 = {};
            var38 = 'text-md/semibold';
            var34['variant'] = var38;
            var34['children'] = var37;
            var33 = var36.bind(var5)(var35, var34);
 1287:
            var32[1] = var33;
            var35 = _closure1_slot9;
            var34 = _closure1_slot4;
            var33 = {};
            var36 = var18.heroButtonContainer;
            var33['style'] = var36;
            var41 = _closure1_slot0;
            var38 = _closure1_slot2;
            var36 = 21;
            var36 = var38[var36];
            var36 = var41.bind(var5)(var36);
            var37 = var36.Button;
            var36 = {'variant': 'tertiary', 'shrink': true, 'grow': false, 'size': 'sm'};
            var39 = var38[var29];
            var39 = var41.bind(var5)(var39);
            var40 = var39.intl;
            var39 = var40.string;
            var38 = var38[var29];
            var38 = var41.bind(var5)(var38);
            var38 = var38.t;
            var38 = var38.ynollp;
            var38 = var39.bind(var40)(var38);
            var36['text'] = var38;
            var38 = function onPress() {
                var3 = _closure2_slot2;
                var2 = var3.push;
                var1 = _closure1_slot7;
                var1 = var1.QUESTS;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var36['onPress'] = var38;
            var36 = var35.bind(var5)(var37, var36);
            var33['children'] = var36;
            var33 = var35.bind(var5)(var34, var33);
            var32[2] = var33;
            var30['children'] = var32;
            var26 = var30;
 1439:
            var26 = var28.bind(var5)(var22, var26);
            var19['children'] = var26;
            var19 = var24.bind(var5)(var22, var19);
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
            if(var16) { _fun0001_ip = 1557; continue _fun0001 }
 1511:
            var19 = {'position': 'absolute', 'top': '55%', 'left': 0, 'right': 0};
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 23;
            var22 = var26[var22];
            var22 = var24.bind(var5)(var22);
            var22 = var22.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var19['height'] = var22;
            _fun0001_ip = 1616; continue _fun0001;
 1557:
            var22 = {};
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 23;
            var24 = var28[var24];
            var24 = var26.bind(var5)(var24);
            var26 = var24.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var24 = 0.5;
            var24 = var24 * var26;
            var22['bottom'] = var24;
            var24 = '100%';
            var22['height'] = var24;
            var19 = var22;
 1616:
            var18[1] = var19;
            var13['style'] = var18;
            var19 = _closure1_slot9;
            if(var16) { _fun0001_ip = 1890; continue _fun0001 }
 1634:
            var18 = _closure1_slot11;
            var16 = {};
            var22 = var23.length;
            if(!(var25 !== var22)) { _fun0001_ip = 1862; continue _fun0001 }
 1652:
            var26 = _closure1_slot9;
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 25;
            var22 = var28[var22];
            var22 = var30.bind(var5)(var22);
            var24 = var22.FlashList;
            var22 = {};
            var32 = true;
            var22['horizontal'] = var32;
            var32 = var28[var29];
            var32 = var30.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var29 = var28[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.pWG4zc;
            var29 = var32.bind(var33)(var29);
            var22['accessibilityLabel'] = var29;
            var22['data'] = var23;
            var29 = function renderItem(arg1) {
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
                    if(var7) { _fun0003_ip = 157; continue _fun0003 }
 152:
                    var1 = var6.id;
 157:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var22['renderItem'] = var29;
            var29 = 23;
            var29 = var28[var29];
            var29 = var30.bind(var5)(var29);
            var29 = var29.COLLECTIBLES_SHOP_CARD_WIDTH;
            var30 = _closure1_slot1;
            var28 = var28[var31];
            var28 = var30.bind(var5)(var28);
            var28 = var28.spacing;
            var28 = var28.PX_12;
            var28 = var29 + var28;
            var22['estimatedItemSize'] = var28;
            var28 = false;
            var22['showsHorizontalScrollIndicator'] = var28;
            var28 = function ListHeaderComponent() {
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
            var22['ListHeaderComponent'] = var28;
            var28 = function ListFooterComponent() {
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
            var22['ListFooterComponent'] = var28;
            var27 = function ItemSeparatorComponent() {
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
            var22['ItemSeparatorComponent'] = var27;
            var22['initialScrollIndex'] = var25;
            var22 = var26.bind(var5)(var24, var22);
            _fun0001_ip = 1878; continue _fun0001;
 1862:
            var27 = _closure1_slot9;
            var26 = _closure1_slot13;
            var24 = {};
            var22 = var27.bind(var5)(var26, var24);
 1878:
            var16['children'] = var22;
            var16 = var19.bind(var5)(var18, var16);
            _fun0001_ip = 1954; continue _fun0001;
 1890:
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 24;
            var17 = var22[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['products'] = var23;
            var24 = var23.length;
            var22 = 4;
            if(!(var25 !== var24)) { _fun0001_ip = 1934; continue _fun0001 }
 1929:
            var22 = var23.length;
 1934:
            var17['loadingCardsNum'] = var22;
            var17['title'] = var21;
            var17['preferVCPrice'] = var20;
            var16 = var19.bind(var5)(var18, var17);
 1954:
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 1978:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2000:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();