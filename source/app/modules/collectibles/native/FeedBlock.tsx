// app/modules/collectibles/native/FeedBlock.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Consents;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'column', 'height': '100%'};
    var10 = 9;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['feedContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['feedHeader'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['feedTitle'] = var9;
    var9 = {'display': 'flex', 'gap': null, 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['gap'] = var10;
    var4['feedFooter'] = var9;
    var9 = {'width': '100%', 'resizeMode': 'cover'};
    var4['feedFooterImage'] = var9;
    var9 = {'width': '100%', 'alignSelf': 'center', 'resizeMode': 'contain', 'height': 130};
    var4['feedFooterOrbImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeedBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.feedBlock;
            var _closure2_slot0 = var5;
            var3 = var1.screen;
            var8 = var1.preferVCPrice;
            var1 = _closure1_slot13;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var18 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var2 = var7[var1];
            var10 = var18.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isThemeDark;
                var1 = _closure1_slot7;
                var1 = var1.theme;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var6, var2);
            var2 = var7[var1];
            var11 = var18.bind(var4)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.hasConsented;
                var1 = _closure1_slot10;
                var1 = var1.PERSONALIZATION;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var11)(var6, var2);
            var _closure2_slot1 = var2;
            var9 = _closure1_slot1;
            var6 = 12;
            var6 = var7[var6];
            var6 = var9.bind(var4)(var6);
            var11 = var6.bind(var4)();
            var _closure2_slot2 = var11;
            var9 = _closure1_slot3;
            var6 = var9.useMemo;
            var12 = var5.sortedSkuIds;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.sortedSkuIds;
                    var1 = null;
                    var2 = var1 == var4;
                    var5 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 13;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.ShopHomeSortType;
                    var2 = var2.RECOMMENDED;
                    var6 = var4[var2];
case 2:
                    if(!(var1 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = new Array(0);
case 4:
                    var2 = _closure2_slot0;
                    var7 = var2.sortedSkuIds;
                    var2 = var1 == var7;
                    var4 = undefined;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 13;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var2 = var2.ShopHomeSortType;
                    var2 = var2.POPULAR;
                    var4 = var7[var2];
case 6:
                    if(!(var1 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = new Array(0);
case 8:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = var6.length;
                    var1 = 0;
                    var2 = var7 > var1;
case 10:
                    var1 = {};
                    var3 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = var6;
case 12:
                    var3 = var3.bind(var5)(var4);
                    var1['feedProducts'] = var3;
                    var1['isPersonalized'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var9)(var2, var5);
            var9 = var2.feedProducts;
            var16 = var2.isPersonalized;
            var23 = 14;
            var2 = var7[var23];
            var6 = var18.bind(var4)(var2);
            var5 = var6.useFilteredAndSortedProducts;
            var2 = {};
            var2['products'] = var9;
            var13 = 36;
            var2['maxProducts'] = var13;
            var2['screen'] = var3;
            var14 = var5.bind(var6)(var2);
            var19 = function goToShopAll() {
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 15;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openCollectiblesShopMobile;
                var2 = {};
                var7 = _closure1_slot1;
                var6 = 16;
                var9 = var8[var6];
                var9 = var7.bind(var1)(var9);
                var10 = var9.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
                var9 = new Array(1);
                var9[0] = var10;
                var2['analyticsLocations'] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
                var2['analyticsSource'] = var6;
                var5 = _closure1_slot9;
                var5 = var5.SHOP_ALL;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = _closure1_slot9;
            var2 = var2.ORBS;
            var12 = var3 === var2;
            var1 = var7[var1];
            var5 = var18.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var11 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var15.feedContainer;
            var1['style'] = var5;
            var5 = {};
            var6 = var15.feedHeader;
            var5['style'] = var6;
            var6 = {};
            var9 = var15.feedTitle;
            var6['style'] = var9;
            var20 = _closure1_slot11;
            var9 = 17;
            var7 = var7[var9];
            var7 = var18.bind(var4)(var7);
            var18 = var7.Text;
            var7 = {'variant': 'heading-lg/semibold', 'accessibilityRole': 'header'};
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = 18;
            var25 = var21[var22];
            var25 = var24.bind(var4)(var25);
            var27 = var25.intl;
            var25 = var27.string;
            var21 = var21[var22];
            var21 = var24.bind(var4)(var21);
            var24 = var21.t;
            if(var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var21 = var24.ivaAA7;
            var21 = var25.bind(var27)(var21);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var24 = var24.NSv5KV;
            var21 = var25.bind(var27)(var24);
case 16:
            var7['children'] = var21;
            var18 = var20.bind(var4)(var18, var7);
            var7 = new Array(2);
            var7[0] = var18;
            if(!var16) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var21 = _closure1_slot11;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 19;
            var18 = var25[var18];
            var18 = var24.bind(var4)(var18);
            var20 = var18.PressableOpacity;
            var18 = {};
            var26 = function onPress() {
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 20;
                var3 = var1[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot0;
                var2 = 22;
                var2 = var1[var2];
                var3 = var3.bind(var6)(var2);
                var2 = 21;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var6)(var2, var1);
                var2 = 'PersonalizationDisclaimerActionSheet';
                var1 = {};
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var18['onPress'] = var26;
            var18['hitSlop'] = var23;
            var23 = var25[var22];
            var23 = var24.bind(var4)(var23);
            var27 = var23.intl;
            var26 = var27.string;
            var23 = var25[var22];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.hvVgAZ;
            var23 = var26.bind(var27)(var23);
            var18['aria-label'] = var23;
            var23 = 23;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var24 = var23.CircleInformationIcon;
            var23 = {};
            var25 = 'xs';
            var23['size'] = var25;
            var23 = var21.bind(var4)(var24, var23);
            var18['children'] = var23;
            var16 = var21.bind(var4)(var20, var18);
case 17:
            var7[1] = var16;
            var6['children'] = var7;
            var7 = var3.bind(var4)(var2, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = !var12;
            if(var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var20 = _closure1_slot11;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 24;
            var16 = var21[var16];
            var16 = var25.bind(var4)(var16);
            var18 = var16.Button;
            var16 = {};
            var16['onPress'] = var19;
            var23 = var21[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var21[var22];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.xFcotU;
            var21 = var23.bind(var24)(var21);
            var16['text'] = var21;
            var21 = 'primary';
            var16['variant'] = var21;
            var21 = 'md';
            var16['size'] = var21;
            var7 = var20.bind(var4)(var18, var16);
case 19:
            var6[1] = var7;
            var5['children'] = var6;
            var6 = var3.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var16 = _closure1_slot11;
            var7 = _closure1_slot1;
            var18 = _closure1_slot2;
            var6 = 25;
            var6 = var18[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['products'] = var14;
            var6['loadingCardsNum'] = var13;
            var6['preferVCPrice'] = var8;
            var6 = var16.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot5;
            var6 = {};
            var13 = var15.feedFooter;
            var6['style'] = var13;
            var21 = _closure1_slot0;
            var9 = var18[var9];
            var9 = var21.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'heading-lg/bold', 'accessibilityRole': 'header'};
            var14 = var18[var22];
            var14 = var21.bind(var4)(var14);
            var23 = var14.intl;
            var20 = var23.string;
            var14 = var18[var22];
            var14 = var21.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Yr70c4;
            var14 = var20.bind(var23)(var14);
            var9['children'] = var14;
            var13 = var16.bind(var4)(var13, var9);
            var9 = new Array(3);
            var9[0] = var13;
            var13 = 24;
            var13 = var18[var13];
            var13 = var21.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var13['onPress'] = var19;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.AfrvRD;
            var18 = var19.bind(var20)(var18);
            var13['text'] = var18;
            var18 = 'primary';
            var13['variant'] = var18;
            var18 = 'md';
            var13['size'] = var18;
            var13 = var16.bind(var4)(var14, var13);
            var9[1] = var13;
            var14 = _closure1_slot11;
            if(var12) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = _closure1_slot4;
            var13 = {};
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = 30;
            var10 = var19[var10];
            var10 = var18.bind(var4)(var10);
            var13['source'] = var10;
            var10 = var15.feedFooterImage;
            var13['style'] = var10;
            var10 = var13;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var16 = 29;
            var16 = var19[var16];
            var16 = var18.bind(var4)(var16);
            var13['source'] = var16;
            var16 = var15.feedFooterImage;
            var13['style'] = var16;
            var10 = var13;
case 25:
            var10 = var14.bind(var4)(var12, var10);
            _fun0001_ip = 26; continue _fun0001;
case 21:
            if(var11) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 27;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.VideoComponent;
            var11 = {'source': null, 'style': null, 'resizeMode': 'contain', 'muted': true, 'pauseWhileAppInactive': true, 'paused': false, 'poster': null, 'preventsDisplaySleepDuringVideoPlayback': false};
            var13 = {};
            var16 = _closure1_slot1;
            var19 = 28;
            var19 = var18[var19];
            var19 = var16.bind(var4)(var19);
            var13['uri'] = var19;
            var11['source'] = var13;
            var13 = var15.feedFooterOrbImage;
            var11['style'] = var13;
            var13 = 26;
            var13 = var18[var13];
            var13 = var16.bind(var4)(var13);
            var11['poster'] = var13;
            var11 = var14.bind(var4)(var12, var11);
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var13 = _closure1_slot4;
            var12 = {};
            var16 = {};
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 26;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var16['uri'] = var17;
            var12['source'] = var16;
            var15 = var15.feedFooterOrbImage;
            var12['style'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 29:
            var10 = var11;
case 26:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();