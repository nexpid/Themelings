// app/modules/game_profile/native/components/GameProfileReviews.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function SteamReviewRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.url;
            var _closure2_slot0 = var11;
            var6 = var2.showBorderBottom;
            var8 = var2.trackAction;
            var _closure2_slot1 = var8;
            var22 = var2.title;
            var7 = var2.rating;
            var19 = var2.ratingCount;
            var2 = _closure1_slot9;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var3 = var10.bind(var4)(var2);
            var2 = 6;
            var2 = var5[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.openURL;
            var13 = var3.bind(var4)(var2);
            var _closure2_slot2 = var13;
            var10 = _closure1_slot0;
            var2 = 7;
            var2 = var5[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.calculateSteamReviewScoreDescription;
            var14 = var2.bind(var3)(var7, var19);
            var17 = 8;
            var2 = var5[var17];
            var3 = var10.bind(var4)(var2);
            var2 = var3.getSteamReviewScoreDescriptionColor;
            var20 = var2.bind(var3)(var14);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var13;
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
            var18 = 10;
            var7 = var5[var18];
            var7 = var10.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var18];
            var5 = var10.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.YNC5Di;
            var5 = var7.bind(var8)(var5);
            var1['accessibilityLabel'] = var5;
            var7 = var9.reviewRow;
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9.reviewRowNotLast;
case 2:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var9.steamNameContainer;
            var5['style'] = var8;
            var11 = _closure1_slot7;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 11;
            var8 = var15[var8];
            var8 = var16.bind(var4)(var8);
            var10 = var8.SteamNeutralIcon;
            var8 = {};
            var13 = 'sm';
            var8['size'] = var13;
            var21 = _closure1_slot1;
            var13 = 4;
            var13 = var15[var13];
            var13 = var21.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.ICON_STRONG;
            var8['color'] = var13;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var21 = _closure1_slot7;
            var11 = 12;
            var10 = var15[var11];
            var10 = var16.bind(var4)(var10);
            var13 = var10.Text;
            var10 = {'variant': 'heading-sm/medium', 'color': 'mobile-text-heading-primary'};
            var10['children'] = var22;
            var10 = var21.bind(var4)(var13, var10);
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
            var13 = _closure1_slot7;
            var9 = var15[var11];
            var9 = var16.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            var21 = 'text-sm/medium';
            var9['variant'] = var21;
            var9['color'] = var20;
            var15 = var15[var17];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getSteamReviewScoreDescriptionIntl;
            var15 = var15.bind(var16)(var14);
            var9['children'] = var15;
            var10 = var13.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            var10 = var10 != var19;
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 13;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.SteamReviewScoreDescription;
            var13 = var13.NO_USER_REVIEWS;
            var10 = var14 !== var13;
case 4:
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = _closure1_slot7;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var16 = var14[var18];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var14[var18];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.sgIoin;
            var14 = {};
            var18 = var19.toLocaleString;
            var18 = var18.bind(var19)();
            var14['rating_count'] = var18;
            var15 = var16.bind(var17)(var15, var14);
            var14 = var15.toString;
            var14 = var14.bind(var15)();
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 6:
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
            var2 = var3.game;
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
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.opencritic;
case 8:
            if(!(var14 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = {};
            var3['topCriticRating'] = var4;
            var3['topCriticRatingCount'] = var4;
            var3['tier'] = var4;
            var2 = var3;
case 10:
            var13 = var2.tier;
            var3 = var2.topCriticRating;
            var5 = var14 != var3;
            var15 = -1;
            var16 = var15;
            if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var16 = var3;
case 12:
            var2 = var2.topCriticRatingCount;
            var3 = var14 != var2;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var15 = var2;
case 14:
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
            if(!var1) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getOpenCriticTierText;
            var25 = var1.bind(var2)(var13);
case 16:
            if(!(var14 == var13)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = {'foregroundColor': '', 'backgroundColor': ''};
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getOpenCriticCircleRatingColor;
            var1 = var2.bind(var3)(var13);
case 20:
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
            if(!var9) { _fun0002_ip = 21; continue _fun0002 }
case 22:
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
case 21:
            var9 = new Array(3);
            var9[0] = var10;
            var17 = var14 != var13;
            var10 = null;
            if(!var17) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var17 = 0;
            var19 = var16 > var17;
            var10 = null;
            if(!var19) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var17 = var15 > var17;
            var10 = null;
            if(!var17) { _fun0002_ip = 23; continue _fun0002 }
case 26:
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
case 23:
            var9[1] = var10;
            var10 = 0;
            if(!(!(var16 <= var10))) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var15 = var15 <= var10;
            var10 = null;
            if(!var15) { _fun0002_ip = 29; continue _fun0002 }
case 27:
            var13 = var14 == var13;
            var10 = null;
            if(!var13) { _fun0002_ip = 29; continue _fun0002 }
case 30:
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
case 29:
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
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileReviews.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileReviews(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var18 = var1.game;
            var16 = var1.trackAction;
            var1 = _closure1_slot9;
            var6 = undefined;
            var12 = var1.bind(var6)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var1 = var2.bind(var6)(var1);
            var3 = var1.SteamReviewsV2Experiment;
            var2 = var3.useConfig;
            var1 = {};
            var4 = 'GameProfileReviews';
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var21 = var2.recentEnabled;
            if(var21) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var21 = var2.englishEnabled;
case 31:
            var1 = null;
            var3 = var1 == var18;
            var5 = undefined;
            if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var5 = var18.applicationId;
case 33:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 17;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useSteamWebsiteUrl;
            var23 = var3.bind(var4)(var5);
            var3 = var1 == var18;
            var17 = undefined;
            if(var3) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var17 = var18.opencriticUrl;
case 35:
            if(!(var1 != var18)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var4 = var18.steamReleaseStatus;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 18;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SteamReleaseStatus;
            var3 = var3.RETIRED_ABANDONED;
            var15 = var4 !== var3;
            if(!var15) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var15 = var1 != var23;
case 39:
            var3 = var18.reviews;
            var4 = var1 == var3;
            var22 = undefined;
            if(var4) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var22 = var3.steam;
case 41:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var7 = var4.bind(var6)(var3);
            var5 = var7.calculateSteamReviewScoreDescription;
            var3 = var1 == var22;
            var4 = undefined;
            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 43:
            var4 = var22.recentRating;
case 19:
            var8 = var1 == var22;
            var3 = undefined;
            if(var8) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var3 = var22.recentRatingCount;
case 44:
            var3 = var5.bind(var7)(var4, var3);
            var11 = var15;
            if(!var15) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var11 = var2.recentEnabled;
case 46:
            if(!var11) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.SteamReviewScoreDescription;
            var2 = var2.NO_USER_REVIEWS;
            var11 = var3 !== var2;
case 48:
            var3 = var18.reviews;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var2 = var3.opencritic;
case 50:
            var14 = var1 != var2;
            if(!var14) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var14 = var1 != var17;
case 52:
            if(var15) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            if(var11) { _fun0003_ip = 54; continue _fun0003 }
case 56:
            var2 = null;
            if(!var14) { _fun0003_ip = 57; continue _fun0003 }
case 54:
            var5 = _closure1_slot8;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var12.container;
            var3['style'] = var7;
            var9 = _closure1_slot7;
            var24 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var7 = var24.bind(var6)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'heading-sm/semibold', 'color': 'mobile-text-heading-primary'};
            var19 = var12.headerText;
            var7['style'] = var19;
            var27 = 10;
            var19 = var10[var27];
            var19 = var24.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var10 = var10[var27];
            var10 = var24.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.GaAQXP;
            var10 = var19.bind(var20)(var10);
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
            if(!var11) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var11 = var1 != var23;
            var12 = null;
            if(!var11) { _fun0003_ip = 58; continue _fun0003 }
case 60:
            var20 = _closure1_slot7;
            var19 = _closure1_slot10;
            var11 = {};
            var11['url'] = var23;
            var24 = var15;
            if(var24) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var24 = var14;
case 61:
            var11['showBorderBottom'] = var24;
            var11['trackAction'] = var16;
            var28 = _closure1_slot0;
            var24 = _closure1_slot2;
            var25 = var24[var27];
            var25 = var28.bind(var6)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var27];
            var24 = var28.bind(var6)(var24);
            var24 = var24.t;
            var24 = var24.MQGNsN;
            var24 = var25.bind(var26)(var24);
            var11['title'] = var24;
            var25 = var1 == var22;
            var24 = undefined;
            if(var25) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var24 = var22.recentRating;
case 63:
            var11['rating'] = var24;
            var25 = var1 == var22;
            var24 = undefined;
            if(var25) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var24 = var22.recentRatingCount;
case 65:
            var11['ratingCount'] = var24;
            var12 = var20.bind(var6)(var19, var11);
case 58:
            var11 = new Array(3);
            var11[0] = var12;
            var12 = null;
            if(!var15) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var15 = var1 != var23;
            var12 = null;
            if(!var15) { _fun0003_ip = 67; continue _fun0003 }
case 69:
            var20 = _closure1_slot7;
            var19 = _closure1_slot10;
            var15 = {};
            var15['url'] = var23;
            var15['showBorderBottom'] = var14;
            var15['trackAction'] = var16;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var27];
            var23 = var24.bind(var6)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var26.bind(var6)(var25);
            var25 = var25.t;
            if(var21) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var21 = var25.whmopT;
            _fun0003_ip = 72; continue _fun0003;
case 70:
            var21 = var25["8e4LiB"];
case 72:
            var21 = var23.bind(var24)(var21);
            var15['title'] = var21;
            var23 = var1 == var22;
            var21 = undefined;
            if(var23) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var21 = var22.rating;
case 73:
            var15['rating'] = var21;
            var23 = var1 == var22;
            var21 = undefined;
            if(var23) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var21 = var22.ratingCount;
case 75:
            var15['ratingCount'] = var21;
            var12 = var20.bind(var6)(var19, var15);
case 67:
            var11[1] = var12;
            var12 = null;
            if(!var14) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var14 = var1 != var17;
            var12 = null;
            if(!var14) { _fun0003_ip = 77; continue _fun0003 }
case 79:
            var15 = _closure1_slot7;
            var14 = _closure1_slot11;
            var13 = {};
            var13['game'] = var18;
            var13['url'] = var17;
            var13['trackAction'] = var16;
            var12 = var15.bind(var6)(var14, var13);
case 77:
            var11[2] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 57:
            return var2;
case 37:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();