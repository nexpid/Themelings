// app/modules/game_profile/native/components/GameProfileReviews.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function SteamReview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.supplementalGameData;
            var11 = var3.url;
            var _closure2_slot0 = var11;
            var6 = var3.showBorderBottom;
            var8 = var3.trackAction;
            var _closure2_slot1 = var8;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot9;
            var9 = var3.bind(var4)();
            var2 = var2.reviews;
            var13 = null;
            var3 = var13 == var2;
            var18 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = var2.steam;
case 2:
            if(!(var13 == var18)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var2['rating'] = var4;
            var2['ratingCount'] = var4;
            var18 = var2;
case 4:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var3 = var7.bind(var4)(var2);
            var2 = 6;
            var2 = var5[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.openURL;
            var15 = var3.bind(var4)(var2);
            _closure2_slot2 = var15;
            var10 = _closure1_slot0;
            var2 = 7;
            var2 = var5[var2];
            var14 = var10.bind(var4)(var2);
            var7 = var14.calculateSteamReviewScoreDescription;
            var3 = var18.rating;
            var2 = var18.ratingCount;
            var14 = var7.bind(var14)(var3, var2);
            var20 = 8;
            var2 = var5[var20];
            var3 = var10.bind(var4)(var2);
            var2 = var3.getSteamReviewScoreDescriptionColor;
            var21 = var2.bind(var3)(var14);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var15;
            var2[1] = var11;
            var2[2] = var8;
            var1 = function() {
                var4 = _closure2_slot1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.GameProfileTrackActionActions;
                var3 = var3.SteamReviews;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var7;
            var7 = 'link';
            var1['accessibilityRole'] = var7;
            var19 = 10;
            var7 = var5[var19];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var19];
            var5 = var10.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.YNC5Di;
            var5 = var7.bind(var8)(var5);
            var1['accessibilityLabel'] = var5;
            var7 = var9.reviewRow;
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var9.reviewRowNotLast;
case 6:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var9.steamNameContainer;
            var5['style'] = var8;
            var11 = _closure1_slot7;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 11;
            var8 = var16[var8];
            var8 = var17.bind(var4)(var8);
            var10 = var8.SteamNeutralIcon;
            var8 = {};
            var15 = 'sm';
            var8['size'] = var15;
            var22 = _closure1_slot1;
            var15 = 4;
            var15 = var16[var15];
            var15 = var22.bind(var4)(var15);
            var15 = var15.colors;
            var15 = var15.ICON_STRONG;
            var8['color'] = var15;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var22 = _closure1_slot7;
            var11 = 12;
            var10 = var16[var11];
            var10 = var17.bind(var4)(var10);
            var15 = var10.Text;
            var10 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary'};
            var23 = var16[var19];
            var23 = var17.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var16[var19];
            var23 = var17.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.whmopT;
            var23 = var24.bind(var25)(var23);
            var10['children'] = var23;
            var10 = var22.bind(var4)(var15, var10);
            var8[1] = var10;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.steamRatingContainer;
            var6['style'] = var9;
            var15 = _closure1_slot7;
            var9 = var16[var11];
            var9 = var17.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            var22 = 'text-sm/medium';
            var9['variant'] = var22;
            var9['color'] = var21;
            var16 = var16[var20];
            var17 = var17.bind(var4)(var16);
            var16 = var17.getSteamReviewScoreDescriptionIntl;
            var16 = var16.bind(var17)(var14);
            var9['children'] = var16;
            var10 = var15.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var18.ratingCount;
            var10 = var13 != var10;
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 13;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.SteamReviewScoreDescription;
            var13 = var13.NO_USER_REVIEWS;
            var10 = var14 !== var13;
case 8:
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = _closure1_slot7;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var16 = var14[var19];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.sgIoin;
            var14 = {};
            var19 = var18.ratingCount;
            var18 = var19.toLocaleString;
            var18 = var18.bind(var19)();
            var14['rating_count'] = var18;
            var15 = var16.bind(var17)(var15, var14);
            var14 = var15.toString;
            var14 = var14.bind(var15)();
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 10:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function OpenCriticReview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.supplementalGameData;
            var7 = var3.url;
            var _closure2_slot0 = var7;
            var6 = var3.trackAction;
            var _closure2_slot1 = var6;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot9;
            var27 = var3.bind(var4)();
            var3 = var2.reviews;
            var14 = null;
            var5 = var14 == var3;
            var2 = undefined;
            if(var5) { _fun0002_ip = 3; continue _fun0002 }
case 12:
            var2 = var3.opencritic;
case 3:
            if(!(var14 == var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = {};
            var3['topCriticRating'] = var4;
            var3['topCriticRatingCount'] = var4;
            var3['tier'] = var4;
            var2 = var3;
case 13:
            var13 = var2.tier;
            var3 = var2.topCriticRating;
            var5 = var14 != var3;
            var15 = -1;
            var16 = var15;
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var16 = var3;
case 15:
            var2 = var2.topCriticRatingCount;
            var3 = var14 != var2;
            if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var15 = var2;
case 17:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var3 = var5.bind(var4)(var2);
            var2 = 6;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.openURL;
            var8 = var3.bind(var4)(var2);
            _closure2_slot2 = var8;
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var1 = function() {
                var4 = _closure2_slot1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.GameProfileTrackActionActions;
                var3 = var3.OpenCriticReviews;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var1 = var14 != var13;
            var25 = '';
            if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getOpenCriticTierText;
            var25 = var1.bind(var2)(var13);
case 19:
            if(!(var14 == var13)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = {'foregroundColor': '', 'backgroundColor': ''};
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getOpenCriticCircleRatingColor;
            var1 = var2.bind(var3)(var13);
case 23:
            var24 = var1.foregroundColor;
            var23 = var1.backgroundColor;
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var5;
            var5 = 'link';
            var1['accessibilityRole'] = var5;
            var17 = _closure1_slot0;
            var8 = _closure1_slot2;
            var18 = 10;
            var5 = var8[var18];
            var5 = var17.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var8[var18];
            var5 = var17.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.aLNBAw;
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var5 = var27.reviewRow;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var11 = 12;
            var5 = var8[var11];
            var5 = var17.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary'};
            var9 = var8[var18];
            var9 = var17.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var8[var18];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.UxvER+;
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var27.opencriticRightContainer;
            var6['style'] = var9;
            var9 = var14 != var13;
            var10 = null;
            if(!var9) { _fun0002_ip = 9; continue _fun0002 }
case 24:
            var19 = _closure1_slot7;
            var17 = _closure1_slot4;
            var9 = {};
            var20 = var27.opencriticTopCriticContainer;
            var9['style'] = var20;
            var9['accessibilityLabel'] = var25;
            var20 = 'image';
            var9['accessibilityRole'] = var20;
            var22 = _closure1_slot7;
            var21 = _closure1_slot6;
            var20 = {};
            var26 = {};
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 14;
            var28 = var30[var28];
            var29 = var29.bind(var4)(var28);
            var28 = var29.getOpenCriticTierImage;
            var28 = var28.bind(var29)(var13);
            var26['uri'] = var28;
            var20['source'] = var26;
            var26 = var27.opencriticTopCriticImage;
            var20['style'] = var26;
            var26 = true;
            var20['accessible'] = var26;
            var20['accessibilityLabel'] = var25;
            var20 = var22.bind(var4)(var21, var20);
            var9['children'] = var20;
            var10 = var19.bind(var4)(var17, var9);
case 9:
            var9 = new Array(3);
            var9[0] = var10;
            var17 = var14 != var13;
            var10 = null;
            if(!var17) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var17 = 0;
            var19 = var16 > var17;
            var10 = null;
            if(!var19) { _fun0002_ip = 25; continue _fun0002 }
case 27:
            var17 = var15 > var17;
            var10 = null;
            if(!var17) { _fun0002_ip = 25; continue _fun0002 }
case 28:
            var20 = _closure1_slot8;
            var19 = _closure1_slot4;
            var17 = {};
            var22 = var27.opencriticTopCriticContainer;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = {};
            var22['backgroundColor'] = var23;
            var21[1] = var22;
            var17['style'] = var21;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = var25[var18];
            var21 = var26.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var25[var18];
            var21 = var26.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.Ub4YR1;
            var21 = var22.bind(var23)(var21);
            var17['accessibilityLabel'] = var21;
            var21 = 'image';
            var17['accessibilityRole'] = var21;
            var23 = _closure1_slot7;
            var22 = _closure1_slot1;
            var21 = 15;
            var21 = var25[var21];
            var22 = var22.bind(var4)(var21);
            var21 = {};
            var21['rating'] = var16;
            var21['strokeColor'] = var24;
            var24 = 32;
            var21['size'] = var24;
            var22 = var23.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var24 = _closure1_slot7;
            var23 = _closure1_slot4;
            var22 = {};
            var27 = var27.opencriticTopCriticRatingContainer;
            var22['style'] = var27;
            var27 = _closure1_slot7;
            var25 = var25[var11];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-xs/bold', 'color': 'always-white'};
            var28 = global;
            var29 = var28.Math;
            var28 = var29.floor;
            var28 = var28.bind(var29)(var16);
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var21[1] = var22;
            var17['children'] = var21;
            var10 = var20.bind(var4)(var19, var17);
case 25:
            var9[1] = var10;
            var10 = 0;
            if(!(!(var16 <= var10))) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var15 = var15 <= var10;
            var10 = null;
            if(!var15) { _fun0002_ip = 31; continue _fun0002 }
case 29:
            var13 = var14 == var13;
            var10 = null;
            if(!var13) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var13 = _closure1_slot7;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var15 = 'text-xs/medium';
            var11['variant'] = var15;
            var15 = 8;
            var15 = var14[var15];
            var19 = var17.bind(var4)(var15);
            var16 = var19.getSteamReviewScoreDescriptionColor;
            var15 = 13;
            var15 = var14[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.SteamReviewScoreDescription;
            var15 = var15.NO_USER_REVIEWS;
            var15 = var16.bind(var19)(var15);
            var11['color'] = var15;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14["0xYzpO"];
            var14 = var15.bind(var16)(var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 31:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.Pressable;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['paddingHorizontal'] = var13;
    var4['headerText'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var9['borderWidth'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['reviewContainer'] = var9;
    var9 = {'height': 56, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var4['reviewRow'] = var9;
    var9 = {};
    var9['borderBottomWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9['borderBottomColor'] = var12;
    var4['reviewRowNotLast'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['steamNameContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-end', 'flexShrink': 1};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['paddingLeft'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var4['steamRatingContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['opencriticRightContainer'] = var9;
    var9 = {'width': 32, 'height': 32, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var10;
    var4['opencriticTopCriticContainer'] = var9;
    var9 = {'width': 32, 'height': 32};
    var4['opencriticTopCriticImage'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 1, 'right': 0, 'bottom': 0, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['opencriticTopCriticRatingContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileReviews.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileReviews(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var18 = var1.supplementalGameData;
            var16 = var1.trackAction;
            var1 = _closure1_slot9;
            var6 = undefined;
            var12 = var1.bind(var6)();
            var1 = null;
            var2 = var1 == var18;
            var4 = undefined;
            if(var2) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var4 = var18.applicationId;
case 33:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.useSteamWebsiteUrl;
            var20 = var2.bind(var3)(var4);
            var2 = var1 == var18;
            var17 = undefined;
            if(var2) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var17 = var18.opencriticUrl;
case 35:
            if(!(var1 != var18)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var3 = var18.steamReleaseStatus;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.SteamReleaseStatus;
            var2 = var2.RETIRED_ABANDONED;
            var11 = var3 !== var2;
            if(!var11) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var11 = var1 != var20;
case 39:
            var3 = var18.reviews;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var2 = var3.opencritic;
case 41:
            var14 = var1 != var2;
            if(!var14) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var14 = var1 != var17;
case 43:
            if(var11) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var2 = null;
            if(!var14) { _fun0003_ip = 47; continue _fun0003 }
case 45:
            var5 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var12.container;
            var3['style'] = var7;
            var9 = _closure1_slot7;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var7 = 12;
            var7 = var22[var7];
            var7 = var21.bind(var6)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var10 = var12.headerText;
            var7['style'] = var10;
            var10 = 10;
            var15 = var22[var10];
            var15 = var21.bind(var6)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var10 = var22[var10];
            var10 = var21.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.GaAQXP;
            var10 = var15.bind(var19)(var10);
            var7['children'] = var10;
            var8 = var9.bind(var6)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var12.reviewContainer;
            var8['style'] = var12;
            var12 = null;
            if(!var11) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var19 = _closure1_slot7;
            var15 = _closure1_slot10;
            var11 = {};
            var11['supplementalGameData'] = var18;
            var11['url'] = var20;
            var11['showBorderBottom'] = var14;
            var11['trackAction'] = var16;
            var12 = var19.bind(var6)(var15, var11);
case 48:
            var11 = new Array(2);
            var11[0] = var12;
            var12 = null;
            if(!var14) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var13 = {};
            var13['supplementalGameData'] = var18;
            var13['url'] = var17;
            var13['trackAction'] = var16;
            var12 = var15.bind(var6)(var14, var13);
case 50:
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 47:
            return var2;
case 37:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();