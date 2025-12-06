// app/modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'minHeight': 60, 'overflow': 'hidden'};
        var1['gradient'] = var2;
        var6 = 5;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'width': '100%', 'aspectRatio': 5, 'opacity': 0.4};
        var1['bannerImage'] = var2;
        var2 = {'minHeight': 60, 'justifyContent': 'center', 'gap': 2};
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var7 = var3[var6];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var3[var6];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingBottom'] = var7;
        var3 = var3[var6];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_24;
        var2['paddingStart'] = var3;
        var3 = 120;
        var2['paddingEnd'] = var3;
        var1['content'] = var2;
        var2 = {};
        var1['heading'] = var2;
        var2 = {};
        var1['subheading'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'right': 10, 'justifyContent': 'center', 'alignItems': 'center'};
        var1['logoContainer'] = var2;
        var2 = {'width': 95, 'height': 95};
        var1['logo'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function PremiumGiftPlanSelectPromotionalBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.claimableRewards;
            var13 = var2.isSelected;
            var4 = var1.length;
            var1 = _closure1_slot7;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var14 = null;
            var2 = var14 == var1;
            var7 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var1.planSelection;
            var3 = var14 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var2.gradientConfig;
            var3 = var14 == var2;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var7 = var2.gradient;
case 2:
            var2 = var14 != var7;
            var6 = undefined;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = new Array(0);
            var21 = 0;
            var23 = var3;
            var22 = var7;
            var2 = arraySpread(var23, var22, var21);
            var2 = var3.reverse;
            var6 = var2.bind(var3)();
case 6:
            var2 = var14 == var1;
            var17 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var1.planSelection;
            var2 = var14 == var3;
            var17 = undefined;
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = var3.heading;
            var17 = var2.bind(var3)();
case 8:
            var2 = var14 == var1;
            var18 = undefined;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1.planSelection;
            var2 = var14 == var3;
            var18 = undefined;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = var3.mobileSubheading;
            var2 = var14 == var2;
            var18 = undefined;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 14:
            var2 = var3.mobileSubheading;
            var18 = var2.bind(var3)(var4);
case 11:
            var2 = var14 == var1;
            var15 = undefined;
            if(var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var1.planSelection;
            var1 = var14 == var2;
            var15 = undefined;
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var1 = var2.getBannerImageUrl;
            var1 = var14 == var1;
            var15 = undefined;
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var1 = var2.getBannerImageUrl;
            var15 = var1.bind(var2)();
case 15:
            var2 = var14 == var6;
            var1 = null;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var14 == var17;
            var1 = null;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var12.gradient;
            var2['style'] = var7;
            var7 = _closure1_slot4;
            var8 = var7.START;
            var2['start'] = var8;
            var7 = var7.END;
            var2['end'] = var7;
            var2['colors'] = var6;
            var7 = var14 != var15;
            if(!var7) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var11 = var12.bannerImage;
            var6['style'] = var11;
            var11 = 'cover';
            var6['resizeMode'] = var11;
            var11 = {};
            var11['uri'] = var15;
            var6['source'] = var11;
            var7 = var9.bind(var5)(var8, var6);
case 22:
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var12.content;
            var7['style'] = var11;
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var19 = 9;
            var11 = var11[var19];
            var11 = var15.bind(var5)(var11);
            var15 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/bold', 'color': 'white'};
            var20 = var12.heading;
            var11['style'] = var20;
            var11['children'] = var17;
            var15 = var16.bind(var5)(var15, var11);
            var11 = new Array(2);
            var11[0] = var15;
            var14 = var14 != var18;
            if(!var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = _closure1_slot5;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/medium', 'color': 'white'};
            var19 = var12.subheading;
            var15['style'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
case 24:
            var11[1] = var14;
            var7['children'] = var11;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var12.logoContainer;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 10;
            var10 = var14[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['shouldAnimate'] = var13;
            var12 = var12.logo;
            var10['promoRotatingStyle'] = var12;
            var12 = true;
            var10['darkOverride'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();