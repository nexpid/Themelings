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
        var2 = {};
        var3 = 60;
        var2['minHeight'] = var3;
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
        var7 = var7.space;
        var7 = var7.PX_12;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.space;
        var7 = var7.PX_12;
        var2['paddingBottom'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.space;
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
        var2 = {};
        var4 = {};
        var3 = '-7deg';
        var4['rotate'] = var3;
        var3 = new Array(2);
        var3[0] = var4;
        var4 = {};
        var5 = 8;
        var4['translateY'] = var5;
        var3[1] = var4;
        var2['transform'] = var3;
        var1['logoContainerLargeTilted'] = var2;
        var2 = {'width': 95, 'height': 95};
        var1['logo'] = var2;
        var2 = {'width': 120, 'height': 120};
        var1['logoLargeTilted'] = var2;
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
            var23 = var2.claimableRewards;
            var14 = var2.isSelected;
            var5 = var2.onLayout;
            var2 = _closure1_slot6;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var8 = var1.gradient;
            var6 = var1.assetVariant;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.GiftPlanSelectionCardBanner_AssetVariant;
            var2 = var2.LARGE_TILTED;
            var15 = var6 === var2;
            var2 = 6;
            var6 = var7[var2];
            var11 = var3.bind(var4)(var6);
            var9 = var11.useThemeAndReducedMotionAwareAssetUrl;
            var6 = var1.mobileBannerAsset;
            var12 = var9.bind(var11)(var6);
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useThemeAndReducedMotionAwareAssetUrl;
            var1 = var1.avatarAsset;
            var6 = true;
            var13 = var2.bind(var3)(var1, var6);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = var16.gradient;
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
            var7 = var6 != var12;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 8;
            var5 = var11[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var11 = var16.bannerImage;
            var5['style'] = var11;
            var11 = 'cover';
            var5['resizeMode'] = var11;
            var11 = {};
            var11['uri'] = var12;
            var5['source'] = var11;
            var7 = var9.bind(var4)(var8, var5);
case 10:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var16.content;
            var7['style'] = var11;
            var18 = _closure1_slot4;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 9;
            var11 = var24[var12];
            var11 = var20.bind(var4)(var11);
            var17 = var11.Text;
            var11 = {'style': null, 'variant': 'text-md/bold', 'color': 'white'};
            var19 = var16.heading;
            var11['style'] = var19;
            var19 = 10;
            var21 = var24[var19];
            var21 = var20.bind(var4)(var21);
            var25 = var21.intl;
            var22 = var25.string;
            var21 = var24[var19];
            var21 = var20.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.OEtqpm;
            var21 = var22.bind(var25)(var21);
            var11['children'] = var21;
            var17 = var18.bind(var4)(var17, var11);
            var11 = new Array(2);
            var11[0] = var17;
            var12 = var24[var12];
            var12 = var20.bind(var4)(var12);
            var17 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/medium', 'color': 'white'};
            var21 = var16.subheading;
            var12['style'] = var21;
            var21 = var24[var19];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.formatToPlainString;
            var19 = var24[var19];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var20 = var19["2h5M+X"];
            var19 = {};
            var23 = var23.length;
            var19['availableCount'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var12['children'] = var19;
            var12 = var18.bind(var4)(var17, var12);
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = var6 != var13;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var12 = var16.logoContainer;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = var15;
            if(!var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var16.logoContainerLargeTilted;
case 14:
            var11[1] = var12;
            var7['style'] = var11;
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 11;
            var10 = var17[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['shouldAnimate'] = var14;
            var17 = var16.logo;
            var14 = new Array(2);
            var14[0] = var17;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var16.logoLargeTilted;
case 16:
            var14[1] = var15;
            var10['promoRotatingStyle'] = var14;
            var10['rotatingAvatarImageUrl'] = var13;
            var10 = var12.bind(var4)(var11, var10);
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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();