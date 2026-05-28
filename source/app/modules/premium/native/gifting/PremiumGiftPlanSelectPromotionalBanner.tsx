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
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'minHeight': 60, 'overflow': 'hidden'};
        var1['gradient'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'width': '100%', 'aspectRatio': 5};
        var1['bannerImage'] = var2;
        var2 = {'minHeight': 60, 'justifyContent': 'center', 'gap': 2};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['paddingBottom'] = var7;
        var3 = var6[var3];
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
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function PremiumGiftPlanSelectPromotionalBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.giftPlanSelectionCardBannerComponent;
            var22 = var2.claimableRewards;
            var14 = var2.isSelected;
            var5 = var2.onLayout;
            var2 = _closure1_slot6;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var8 = var1.gradient;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var6 = var7[var2];
            var11 = var3.bind(var4)(var6);
            var9 = var11.useThemeAndReducedMotionAwareAssetUrl;
            var6 = var1.mobileBannerAsset;
            var15 = var9.bind(var11)(var6);
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useThemeAndReducedMotionAwareAssetUrl;
            var1 = var1.avatarAsset;
            var6 = true;
            var12 = var2.bind(var3)(var1, var6);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 6;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var13.gradient;
            var1['style'] = var7;
            var1['useAngle'] = var6;
            var6 = null;
            var7 = var6 == var8;
            var9 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var8.angle;
case 2:
            var11 = var6 != var9;
            var7 = 90;
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var9;
case 4:
            var1['angle'] = var7;
            var7 = {'x': 0.5, 'y': 0.5};
            var1['angleCenter'] = var7;
            var9 = var6 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8.colors;
case 6:
            if(!(var6 == var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = new Array(0);
case 8:
            var1['colors'] = var7;
            var1['onLayout'] = var5;
            var7 = var6 != var15;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var11 = var13.bannerImage;
            var5['style'] = var11;
            var11 = 'cover';
            var5['resizeMode'] = var11;
            var11 = {};
            var11['uri'] = var15;
            var5['source'] = var11;
            var7 = var9.bind(var4)(var8, var5);
case 10:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var13.content;
            var7['style'] = var11;
            var17 = _closure1_slot4;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 8;
            var11 = var23[var15];
            var11 = var19.bind(var4)(var11);
            var16 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/bold', 'color': 'white'};
            var18 = var13.heading;
            var11['style'] = var18;
            var18 = 9;
            var20 = var23[var18];
            var20 = var19.bind(var4)(var20);
            var24 = var20.intl;
            var21 = var24.string;
            var20 = var23[var18];
            var20 = var19.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.OEtqpm;
            var20 = var21.bind(var24)(var20);
            var11['children'] = var20;
            var16 = var17.bind(var4)(var16, var11);
            var11 = new Array(2);
            var11[0] = var16;
            var15 = var23[var15];
            var15 = var19.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/medium', 'color': 'white'};
            var20 = var13.subheading;
            var15['style'] = var20;
            var20 = var23[var18];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18["2h5M+X"];
            var18 = {};
            var22 = var22.length;
            var18['availableCount'] = var22;
            var18 = var20.bind(var21)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var11[1] = var15;
            var7['children'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = var6 != var12;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var13.logoContainer;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 10;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['shouldAnimate'] = var14;
            var13 = var13.logo;
            var10['promoRotatingStyle'] = var13;
            var10['rotatingAvatarImageUrl'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 12:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
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