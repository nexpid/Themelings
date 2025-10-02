// app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
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
    var10 = 0;
    var7 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'height': 112, 'justifyContent': 'center', 'alignItems': 'center'};
    var4['header'] = var9;
    var12 = 'absolute';
    var9 = {'position': 'absolute', 'top': 16, 'left': 16};
    var4['logoContainer'] = var9;
    var9 = {'position': 'absolute', 'height': 90};
    var4['imgWumpus'] = var9;
    var9 = {};
    var14 = {};
    var13 = -1;
    var14['scaleX'] = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var9['transform'] = var13;
    var4['imgWumpusRight'] = var9;
    var9 = {};
    var9['bottom'] = var10;
    var4['imgWumpusBottom'] = var9;
    var9 = {'borderRadius': null, 'paddingHorizontal': 8, 'paddingVertical': 4, 'marginTop': 8, 'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['backgroundColor'] = var13;
    var4['freeTrialTagContainer'] = var9;
    var9 = {};
    var13 = 12;
    var9['lineHeight'] = var13;
    var4['freeTrialTag'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS;
    var9['color'] = var13;
    var4['tier0FreeTrialTag'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var9['color'] = var13;
    var4['tier2FreeTrialTag'] = var9;
    var9 = {};
    var9['position'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['tintColor'] = var10;
    var4['sparkle'] = var9;
    var9 = {'left': 4294967282, 'top': 3, 'width': 8, 'height': 7};
    var4['sparkle1'] = var9;
    var9 = {'left': 4294967284, 'bottom': 4294967290, 'width': 14, 'height': 12};
    var4['sparkle2'] = var9;
    var9 = {'right': 4294967279, 'top': 4294967288, 'width': 13, 'height': 11};
    var4['sparkle3'] = var9;
    var9 = {'right': 4294967285, 'bottom': 5, 'width': 8, 'height': 7};
    var4['sparkle4'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = function FreeTrialTag(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.premiumType;
            var1 = _closure1_slot7;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var11.freeTrialTagContainer;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var9 = 'eyebrow';
            var5['variant'] = var9;
            var10 = var11.freeTrialTag;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = _closure1_slot4;
            var10 = var10.TIER_2;
            if(!(var12 !== var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var11.tier0FreeTrialTag;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var10 = var11.tier2FreeTrialTag;
case 4:
            var9[1] = var10;
            var5['style'] = var9;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 7;
            var10 = var13[var9];
            var10 = var14.bind(var4)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var13[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.IBYG5e;
            var9 = var10.bind(var12)(var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(5);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var12 = _closure1_slot1;
            var6 = 8;
            var7 = var13[var6];
            var14 = var12.bind(var4)(var7);
            var7 = {};
            var10 = 9;
            var9 = var13[var10];
            var9 = var12.bind(var4)(var9);
            var7['source'] = var9;
            var15 = var11.sparkle;
            var9 = new Array(2);
            var9[0] = var15;
            var15 = var11.sparkle1;
            var9[1] = var15;
            var7['style'] = var9;
            var9 = true;
            var7['disableColor'] = var9;
            var7 = var8.bind(var4)(var14, var7);
            var5[1] = var7;
            var7 = var13[var6];
            var14 = var12.bind(var4)(var7);
            var7 = {};
            var15 = var13[var10];
            var15 = var12.bind(var4)(var15);
            var7['source'] = var15;
            var16 = var11.sparkle;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var11.sparkle2;
            var15[1] = var16;
            var7['style'] = var15;
            var7['disableColor'] = var9;
            var7 = var8.bind(var4)(var14, var7);
            var5[2] = var7;
            var7 = var13[var6];
            var14 = var12.bind(var4)(var7);
            var7 = {};
            var15 = var13[var10];
            var15 = var12.bind(var4)(var15);
            var7['source'] = var15;
            var16 = var11.sparkle;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var11.sparkle3;
            var15[1] = var16;
            var7['style'] = var15;
            var7['disableColor'] = var9;
            var7 = var8.bind(var4)(var14, var7);
            var5[3] = var7;
            var6 = var13[var6];
            var7 = var12.bind(var4)(var6);
            var6 = {};
            var10 = var13[var10];
            var10 = var12.bind(var4)(var10);
            var6['source'] = var10;
            var12 = var11.sparkle;
            var10 = new Array(2);
            var10[0] = var12;
            var11 = var11.sparkle4;
            var10[1] = var11;
            var6['style'] = var10;
            var6['disableColor'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanActionSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.premiumType;
            var _closure2_slot0 = var14;
            var1 = var1.trialOffer;
            var3 = _closure1_slot7;
            var4 = undefined;
            var12 = var3.bind(var4)();
            var9 = function getClouds() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_0;
                    if(!(var2 !== var3)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_1;
                    if(!(var2 !== var3)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure1_slot4;
                    var2 = var2.TIER_2;
                    if(!(var2 !== var3)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var2 = undefined;
                    return var2;
case 9:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    return var2;
case 7:
                    var2 = null;
                    return var2;
case 5:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var15 = null;
            var16 = var15 != var1;
            if(!var16) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var1.subscription_trial;
            var3 = var15 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = var1.sku_id;
case 13:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getSkuIdForPremiumType;
            var1 = var1.bind(var3)(var14);
            var16 = var2 === var1;
case 11:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var12.header;
            var1['style'] = var5;
            var6 = _closure1_slot0;
            var5 = 12;
            var5 = var7[var5];
            var8 = var6.bind(var4)(var5);
            var5 = var8.getPremiumGradientColor;
            var5 = var5.bind(var8)(var14);
            var1['colors'] = var5;
            var5 = 14;
            var8 = var7[var5];
            var8 = var6.bind(var4)(var8);
            var8 = var8.HorizontalGradient;
            var8 = var8.START;
            var1['start'] = var8;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.HorizontalGradient;
            var5 = var5.END;
            var1['end'] = var5;
            var6 = var9.bind(var4)();
            if(!var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 15;
            var5 = var10[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = var9.bind(var4)();
            var5['source'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 15:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var12.logoContainer;
            var6['style'] = var9;
            var18 = _closure1_slot5;
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var10 = 15;
            var9 = var9[var10];
            var17 = var13.bind(var4)(var9);
            var13 = {};
            var9 = _closure1_slot4;
            var9 = var9.TIER_0;
            if(!(var9 !== var14)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = _closure1_slot4;
            var9 = var9.TIER_1;
            if(!(var9 !== var14)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var9 = _closure1_slot4;
            var19 = var9.TIER_2;
            var9 = undefined;
            if(!(var19 === var14)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 18;
            var19 = var21[var19];
            var9 = var20.bind(var4)(var19);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 17;
            var19 = var21[var19];
            var9 = var20.bind(var4)(var19);
            _fun0002_ip = 21; continue _fun0002;
case 17:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 16;
            var19 = var21[var19];
            var9 = var20.bind(var4)(var19);
case 21:
            var13['source'] = var9;
            var9 = 'contain';
            var13['resizeMode'] = var9;
            var17 = var18.bind(var4)(var17, var13);
            var13 = new Array(2);
            var13[0] = var17;
            var15 = null;
            if(!var16) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var18 = _closure1_slot5;
            var17 = _closure1_slot8;
            var16 = {};
            var16['premiumType'] = var14;
            var15 = var18.bind(var4)(var17, var16);
case 23:
            var13[1] = var15;
            var6['children'] = var13;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = _closure1_slot4;
            var10 = var10.TIER_0;
            if(!(var10 !== var14)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var10 = _closure1_slot4;
            var10 = var10.TIER_1;
            if(!(var10 !== var14)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var10 = _closure1_slot4;
            var13 = var10.TIER_2;
            var10 = undefined;
            if(!(var13 === var14)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 21;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 20;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
            _fun0002_ip = 29; continue _fun0002;
case 25:
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var13 = 19;
            var13 = var16[var13];
            var10 = var15.bind(var4)(var13);
case 29:
            var6['source'] = var10;
            var13 = var12.imgWumpus;
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot4;
            var13 = var13.TIER_0;
            if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var13 = _closure1_slot4;
            var13 = var13.TIER_1;
            if(!(var13 !== var14)) { _fun0002_ip = 31; continue _fun0002 }
case 33:
            var11 = _closure1_slot4;
            var13 = var11.TIER_2;
            var11 = undefined;
            if(!(var13 === var14)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var11 = var12.imgWumpusRight;
            _fun0002_ip = 34; continue _fun0002;
case 31:
            var11 = var12.imgWumpusBottom;
case 34:
            var10[1] = var11;
            var6['style'] = var10;
            var6['resizeMode'] = var9;
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