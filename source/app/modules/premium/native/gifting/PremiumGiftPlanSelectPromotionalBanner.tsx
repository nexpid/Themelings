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
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {'minHeight': 60, 'overflow': 'hidden'};
            var1['gradient'] = var2;
            var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'opacity': 0.4};
            var1['bannerImage'] = var2;
            var2 = {'minHeight': 60, 'justifyContent': 'center', 'gap': 2};
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var8 = var7[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['paddingTop'] = var8;
            var8 = var7[var3];
            var8 = var6.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['paddingBottom'] = var8;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_24;
            var2['paddingStart'] = var3;
            var1['content'] = var2;
            var2 = {};
            var4 = 3;
            var7 = var5 < var4;
            var3 = '50%';
            var6 = var3;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = '60%';
case 2:
            var2['width'] = var6;
            var1['heading'] = var2;
            var2 = {};
            var4 = var5 < var4;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = '60%';
case 4:
            var2['width'] = var3;
            var1['subheading'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function PremiumGiftPlanSelectPromotionalBanner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.claimableRewards;
            var4 = var1.length;
            var1 = _closure1_slot7;
            var5 = undefined;
            var16 = var1.bind(var5)(var4);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = null;
            var2 = var11 == var1;
            var7 = undefined;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var1.planSelection;
            var3 = var11 == var2;
            var7 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = var2.gradientConfig;
            var3 = var11 == var2;
            var7 = undefined;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var7 = var2.gradient;
case 6:
            var2 = var11 != var7;
            var6 = undefined;
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = new Array(0);
            var20 = 0;
            var22 = var3;
            var21 = var7;
            var2 = arraySpread(var22, var21, var20);
            var2 = var3.reverse;
            var6 = var2.bind(var3)();
case 10:
            var2 = var11 == var1;
            var18 = undefined;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var1.planSelection;
            var2 = var11 == var3;
            var18 = undefined;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var2 = var3.heading;
            var18 = var2.bind(var3)();
case 12:
            var2 = var11 == var1;
            var15 = undefined;
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var1.planSelection;
            var2 = var11 == var3;
            var15 = undefined;
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var2 = var3.mobileSubheading;
            var2 = var11 == var2;
            var15 = undefined;
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 18:
            var2 = var3.mobileSubheading;
            var15 = var2.bind(var3)(var4);
case 15:
            var2 = var11 == var1;
            var13 = undefined;
            if(var2) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = var1.planSelection;
            var1 = var11 == var2;
            var13 = undefined;
            if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 21:
            var1 = var2.getBannerImageUrl;
            var1 = var11 == var1;
            var13 = undefined;
            if(var1) { _fun0002_ip = 19; continue _fun0002 }
case 22:
            var1 = var2.getBannerImageUrl;
            var13 = var1.bind(var2)();
case 19:
            var2 = var11 == var6;
            var1 = null;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var2 = var11 == var18;
            var1 = null;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var16.gradient;
            var2['style'] = var7;
            var7 = _closure1_slot4;
            var8 = var7.START;
            var2['start'] = var8;
            var7 = var7.END;
            var2['end'] = var7;
            var2['colors'] = var6;
            var7 = var11 != var13;
            if(!var7) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var10 = var16.bannerImage;
            var6['style'] = var10;
            var10 = 'cover';
            var6['resizeMode'] = var10;
            var10 = {};
            var10['uri'] = var13;
            var6['source'] = var10;
            var7 = var9.bind(var5)(var8, var6);
case 26:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot6;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var16.content;
            var7['style'] = var10;
            var14 = _closure1_slot5;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var17 = 9;
            var10 = var10[var17];
            var10 = var13.bind(var5)(var10);
            var13 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/bold', 'color': 'white'};
            var19 = var16.heading;
            var10['style'] = var19;
            var10['children'] = var18;
            var13 = var14.bind(var5)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var11 = var11 != var15;
            if(!var11) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var14 = _closure1_slot5;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var17];
            var12 = var13.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/medium', 'color': 'white'};
            var16 = var16.subheading;
            var12['style'] = var16;
            var12['children'] = var15;
            var11 = var14.bind(var5)(var13, var12);
case 28:
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 23:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();