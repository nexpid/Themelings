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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot3 = var8;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg1;
            var1 = {};
            var3 = '100%';
            var2 = {'width': '100%', 'height': '100%'};
            var1['heroContainer'] = var2;
            var2 = {'height': null, 'position': 'absolute', 'resizeMode': 'cover', 'width': '100%', 'zIndex': 1};
            var4 = 360;
            var4 = var9 <= var4;
            if(!var4) { _fun0001_ip = 56; continue _fun0001 }
 53:
            var3 = 235;
 56:
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
            var8 = 0.4;
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
    var _closure1_slot12 = var4;
    var4 = function SkeletonLoading() {
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var4 = undefined;
        var1 = var7.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var2 = var1.width;
        var1 = _closure1_slot12;
        var6 = var1.bind(var4)(var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var6.skeletonContainer;
        var1['style'] = var6;
        var8 = _closure1_slot9;
        var6 = 8;
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
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/HeroBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var35 = var1.heroBlock;
            var _closure2_slot0 = var35;
            var20 = var1.preferVCPrice;
            var _closure2_slot1 = var20;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var1 = var4.useNavigation;
            var1 = var1.bind(var4)();
            var _closure2_slot2 = var1;
            var1 = 10;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useCollectiblesAnalyticsContext;
            var1 = var1.bind(var4)();
            var _closure2_slot3 = var1;
            var8 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var4 = var1.width;
            var1 = 11;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var6 = var7.isOrbsCollection;
            var1 = var35.categorySkuId;
            var16 = var6.bind(var7)(var1);
            var1 = 12;
            var1 = var3[var1];
            var10 = var2.bind(var5)(var1);
            var9 = var10.useTrackProductCardImpression;
            var7 = var35.categoryStoreListingId;
            var6 = 'mobile_home';
            var1 = 'hero_block';
            var1 = var9.bind(var10)(var7, var6, var1);
            var6 = var1.handleCardVisibilityChange;
            var1 = _closure1_slot12;
            var18 = var1.bind(var5)(var4);
            var1 = 13;
            var4 = var3[var1];
            var9 = var2.bind(var5)(var4);
            var7 = var9.useToken;
            var31 = 6;
            var4 = var3[var31];
            var4 = var8.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_PRIMARY;
            var11 = var7.bind(var9)(var4);
            var4 = 14;
            var7 = var3[var4];
            var9 = var2.bind(var5)(var7);
            var7 = var9.hexToRgbaString;
            var4 = var3[var4];
            var10 = var2.bind(var5)(var4);
            var4 = var10.hexWithOpacity;
            var25 = 0;
            var4 = var4.bind(var10)(var11, var25);
            var38 = var7.bind(var9)(var4);
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var4 = var7.useToken;
            var1 = var3[var31];
            var1 = var8.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWEST;
            var34 = var4.bind(var7)(var1);
            var7 = _closure1_slot5;
            var4 = var7.getCategory;
            var1 = var35.categorySkuId;
            var12 = var4.bind(var7)(var1);
            var _closure2_slot4 = var12;
            var1 = 15;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useFilteredAndSortedProducts;
            var2 = {};
            var1 = null;
            var8 = var1 == var12;
            var7 = undefined;
            if(var8) { _fun0002_ip = 396; continue _fun0002 }
 390:
            var7 = var12.products;
 396:
            if(!(var1 == var7)) { _fun0002_ip = 404; continue _fun0002 }
 400:
            var7 = new Array(0);
 404:
            var2['products'] = var7;
            var2['bypassAndroidUnsyncedFilter'] = var16;
            var2 = var3.bind(var4)(var2);
            var23 = var2.sortedProducts;
            if(!(var5 !== var12)) { _fun0002_ip = 2038; continue _fun0002 }
 432:
            var2 = var35.mobileTitle;
            if(!(var1 == var2)) { _fun0002_ip = 449; continue _fun0002 }
 442:
            var36 = var35.title;
            _fun0002_ip = 455; continue _fun0002;
 449:
            var36 = var35.mobileTitle;
 455:
            var2 = var35.mobileSummary;
            if(!(var1 == var2)) { _fun0002_ip = 473; continue _fun0002 }
 465:
            var37 = var35.summary;
            _fun0002_ip = 479; continue _fun0002;
 473:
            var37 = var35.mobileSummary;
 479:
            var21 = var35.mobileProductsTitle;
            var33 = function getHeroBannerSource() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.mobileHeroPath;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 88; continue _fun0003 }
 19:
                    var3 = _closure2_slot0;
                    var3 = var3.bannerAsset;
                    var6 = var1 == var3;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 44; continue _fun0003 }
 38:
                    var4 = var3.static;
 44:
                    if(!(var1 == var4)) { _fun0003_ip = 58; continue _fun0003 }
 48:
                    var3 = _closure2_slot0;
                    var4 = var3.fallbackBannerUrl;
 58:
                    var3 = var1 != var4;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 86; continue _fun0003 }
 67:
                    var3 = '';
                    var1 = undefined;
                    if(!(var3 !== var4)) { _fun0003_ip = 86; continue _fun0003 }
 77:
                    var3 = {};
                    var3['uri'] = var4;
                    var1 = var3;
 86:
                    return var1;
 88:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getAssetCDNURL;
                    var2 = _closure2_slot0;
                    var2 = var2.mobileHeroPath;
                    var2 = var3.bind(var4)(var2);
                    var1['uri'] = var2;
                    return var1;
                }
            };
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onChange'] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var8 = var18.heroContainer;
            var6['style'] = var8;
            var8 = var5 !== var12;
            if(!var8) { _fun0002_ip = 2016; continue _fun0002 }
 549:
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var9 = {};
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 18;
            var13 = var19[var13];
            var13 = var22.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'activeOpacity': 0.8, 'androidRippleConfig': null, 'hitSlop': 8};
            var29 = 19;
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
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = _closure2_slot4;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
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
                    if(var11) { _fun0004_ip = 74; continue _fun0004 }
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
                    if(var11) { _fun0004_ip = 128; continue _fun0004 }
 118:
                    var11 = _closure2_slot3;
                    var10 = var11.pageSection;
 128:
                    var3['page_section'] = var10;
                    var10 = _closure2_slot3;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0004_ip = 156; continue _fun0004 }
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
                    if(var12) { _fun0004_ip = 203; continue _fun0004 }
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
            var15 = var33.bind(var5)();
            var19 = var1 != var15;
            if(!var19) { _fun0002_ip = 989; continue _fun0002 }
 747:
            var24 = _closure1_slot10;
            var22 = _closure1_slot11;
            var15 = {};
            var28 = var16;
            if(!var28) { _fun0002_ip = 843; continue _fun0002 }
 763:
            var32 = _closure1_slot9;
            var30 = _closure1_slot1;
            var39 = _closure1_slot2;
            var26 = 20;
            var26 = var39[var26];
            var30 = var30.bind(var5)(var26);
            var26 = {};
            var39 = ['rgba(39, 30, 173, 0.3)', 'transparent'];
            var26['colors'] = var39;
            var39 = _closure1_slot8;
            var40 = var39.START;
            var26['start'] = var40;
            var39 = var39.END;
            var26['end'] = var39;
            var39 = var18.orbsBackgroundGradient;
            var26['style'] = var39;
            var28 = var32.bind(var5)(var30, var26);
 843:
            var26 = new Array(3);
            var26[0] = var28;
            var32 = _closure1_slot9;
            var30 = _closure1_slot3;
            var28 = {};
            var40 = var18.heroBannerImage;
            var39 = new Array(1);
            var39[0] = var40;
            var28['style'] = var39;
            var33 = var33.bind(var5)();
            var28['source'] = var33;
            var28 = var32.bind(var5)(var30, var28);
            var26[1] = var28;
            var30 = _closure1_slot1;
            var33 = _closure1_slot2;
            var28 = 20;
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
 989:
            var15 = new Array(2);
            var15[0] = var19;
            var24 = _closure1_slot9;
            var22 = _closure1_slot4;
            var19 = {};
            var26 = var18.heroBannerContainer;
            var19['style'] = var26;
            var28 = _closure1_slot10;
            var30 = {};
            if(var16) { _fun0002_ip = 1177; continue _fun0002 }
 1029:
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
            var35 = 23;
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
            _fun0002_ip = 1477; continue _fun0002;
 1177:
            var32 = var18.orbsHeroTitleContainer;
            var30['style'] = var32;
            var33 = var1 != var36;
            if(!var33) { _fun0002_ip = 1257; continue _fun0002 }
 1194:
            var35 = _closure1_slot9;
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var32 = 21;
            var32 = var38[var32];
            var32 = var34.bind(var5)(var32);
            var34 = var32.Text;
            var32 = {'variant': 'display-md', 'color': 'header-primary'};
            var38 = var18.heroTitle;
            var32['style'] = var38;
            var32['children'] = var36;
            var33 = var35.bind(var5)(var34, var32);
 1257:
            var32 = new Array(3);
            var32[0] = var33;
            var33 = '';
            var33 = var33 !== var37;
            if(!var33) { _fun0002_ip = 1325; continue _fun0002 }
 1276:
            var36 = _closure1_slot9;
            var35 = _closure1_slot0;
            var38 = _closure1_slot2;
            var34 = 21;
            var34 = var38[var34];
            var34 = var35.bind(var5)(var34);
            var35 = var34.Text;
            var34 = {};
            var38 = 'text-md/medium';
            var34['variant'] = var38;
            var34['children'] = var37;
            var33 = var36.bind(var5)(var35, var34);
 1325:
            var32[1] = var33;
            var35 = _closure1_slot9;
            var34 = _closure1_slot4;
            var33 = {};
            var36 = var18.heroButtonContainer;
            var33['style'] = var36;
            var41 = _closure1_slot0;
            var38 = _closure1_slot2;
            var36 = 22;
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
 1477:
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
            if(var16) { _fun0002_ip = 1595; continue _fun0002 }
 1549:
            var19 = {'position': 'absolute', 'top': '55%', 'left': 0, 'right': 0};
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 24;
            var22 = var26[var22];
            var22 = var24.bind(var5)(var22);
            var22 = var22.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var19['height'] = var22;
            _fun0002_ip = 1654; continue _fun0002;
 1595:
            var22 = {};
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 24;
            var24 = var28[var24];
            var24 = var26.bind(var5)(var24);
            var26 = var24.COLLECTIBLES_SHOP_CARD_HEIGHT;
            var24 = 0.5;
            var24 = var24 * var26;
            var22['bottom'] = var24;
            var24 = '100%';
            var22['height'] = var24;
            var19 = var22;
 1654:
            var18[1] = var19;
            var13['style'] = var18;
            var19 = _closure1_slot9;
            if(var16) { _fun0002_ip = 1928; continue _fun0002 }
 1672:
            var18 = _closure1_slot11;
            var16 = {};
            var22 = var23.length;
            if(!(var25 !== var22)) { _fun0002_ip = 1900; continue _fun0002 }
 1690:
            var26 = _closure1_slot9;
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 26;
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.item;
                    var9 = var2.index;
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.CollectiblesAnalyticsProvider;
                    var2 = {};
                    var7 = {};
                    var7['tilePosition'] = var9;
                    var2['newValue'] = var7;
                    var7 = _closure1_slot1;
                    var6 = 24;
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
                    if(var7) { _fun0005_ip = 157; continue _fun0005 }
 152:
                    var1 = var6.id;
 157:
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var22['renderItem'] = var29;
            var29 = 24;
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
            _fun0002_ip = 1916; continue _fun0002;
 1900:
            var27 = _closure1_slot9;
            var26 = _closure1_slot13;
            var24 = {};
            var22 = var27.bind(var5)(var26, var24);
 1916:
            var16['children'] = var22;
            var16 = var19.bind(var5)(var18, var16);
            _fun0002_ip = 1992; continue _fun0002;
 1928:
            var18 = _closure1_slot1;
            var22 = _closure1_slot2;
            var17 = 25;
            var17 = var22[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var17['products'] = var23;
            var24 = var23.length;
            var22 = 4;
            if(!(var25 !== var24)) { _fun0002_ip = 1972; continue _fun0002 }
 1967:
            var22 = var23.length;
 1972:
            var17['loadingCardsNum'] = var22;
            var17['title'] = var21;
            var17['preferVCPrice'] = var20;
            var16 = var19.bind(var5)(var18, var17);
 1992:
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 2016:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 2038:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();