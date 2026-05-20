// app/components_native/premium/PremiumTierCard.tsx
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
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getPremiumGradientColor;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 16;
    var9 = {'marginTop': 24, 'padding': 16};
    var4['header'] = var9;
    var9 = {'width': 158, 'height': 32};
    var4['textLogoTier0'] = var9;
    var9 = {'width': 185, 'height': 32};
    var4['textLogoTier1'] = var9;
    var9 = {'width': 80, 'height': 32};
    var4['textLogoTier2'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'right': 24, 'zIndex': 1};
    var4['wumpusLogo'] = var9;
    var9 = {'width': 83, 'height': 100};
    var4['wumpusLogoTier0'] = var9;
    var9 = {'width': 86, 'height': 100};
    var4['wumpusLogoTier1'] = var9;
    var9 = {'width': 133, 'height': 100};
    var4['wumpusLogoTier2'] = var9;
    var9 = {};
    var9['padding'] = var10;
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderBottomRightRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderBottomLeftRadius'] = var10;
    var4['body'] = var9;
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DARK_PRIMARY_630_LIGHT_PRIMARY_100;
    var9['backgroundColor'] = var10;
    var4['bodyLegacy'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumTierCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var16 = var1.premiumType;
            var12 = var1.children;
            var7 = var1.style;
            var1 = _closure1_slot10;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var9 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 8;
            var1 = var18[var1];
            var3 = var9.bind(var5)(var1);
            var1 = 'PremiumTierCard';
            var1 = var3.bind(var5)(var1);
            var6 = _closure1_slot9;
            var4 = _closure1_slot8;
            var3 = {};
            var11 = _closure1_slot7;
            var8 = 9;
            var8 = var18[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var10 = var15.header;
            var8['style'] = var10;
            var17 = _closure1_slot0;
            var10 = 10;
            var13 = var18[var10];
            var13 = var17.bind(var5)(var13);
            var13 = var13.HorizontalGradient;
            var13 = var13.START;
            var8['start'] = var13;
            var10 = var18[var10];
            var10 = var17.bind(var5)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.END;
            var8['end'] = var10;
            var10 = _closure1_slot5;
            var10 = var10.bind(var5)(var16);
            var8['colors'] = var10;
            var10 = _closure1_slot4;
            var13 = {'accessible': true, 'accessibilityLabel': null, 'accessibilityRole': 'header'};
            var14 = 11;
            var14 = var18[var14];
            var17 = var17.bind(var5)(var14);
            var14 = var17.getPremiumTypeDisplayName;
            var14 = var14.bind(var17)(var16);
            var13['accessibilityLabel'] = var14;
            var14 = _closure1_slot6;
            var14 = var14.TIER_0;
            if(!(var14 !== var16)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = _closure1_slot6;
            var14 = var14.TIER_1;
            if(!(var14 !== var16)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = _closure1_slot6;
            var17 = var14.TIER_2;
            var14 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var15.textLogoTier2;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var14 = var15.textLogoTier1;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var14 = var15.textLogoTier0;
case 6:
            var13['style'] = var14;
            var14 = _closure1_slot6;
            var14 = var14.TIER_0;
            if(!(var14 !== var16)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = _closure1_slot6;
            var14 = var14.TIER_1;
            if(!(var14 !== var16)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = _closure1_slot6;
            var17 = var14.TIER_2;
            var14 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 14;
            var17 = var19[var17];
            var14 = var18.bind(var5)(var17);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 13;
            var17 = var19[var17];
            var14 = var18.bind(var5)(var17);
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 12;
            var17 = var19[var17];
            var14 = var18.bind(var5)(var17);
case 12:
            var13['source'] = var14;
            var13 = var11.bind(var5)(var10, var13);
            var8['children'] = var13;
            var9 = var11.bind(var5)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var9 = {'accessible': false, 'importantForAccessibility': 'no'};
            var14 = var15.wumpusLogo;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = _closure1_slot6;
            var14 = var14.TIER_0;
            if(!(var14 !== var16)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var14 = _closure1_slot6;
            var14 = var14.TIER_1;
            if(!(var14 !== var16)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = _closure1_slot6;
            var17 = var14.TIER_2;
            var14 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var14 = var15.wumpusLogoTier2;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var14 = var15.wumpusLogoTier1;
            _fun0001_ip = 18; continue _fun0001;
case 14:
            var14 = var15.wumpusLogoTier0;
case 18:
            var13[1] = var14;
            var9['style'] = var13;
            var13 = _closure1_slot6;
            var13 = var13.TIER_0;
            if(!(var13 !== var16)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = _closure1_slot6;
            var13 = var13.TIER_1;
            if(!(var13 !== var16)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var13 = _closure1_slot6;
            var14 = var13.TIER_2;
            var13 = undefined;
            if(!(var14 === var16)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 17;
            var14 = var17[var14];
            var13 = var16.bind(var5)(var14);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 16;
            var14 = var17[var14];
            var13 = var16.bind(var5)(var14);
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 15;
            var14 = var17[var14];
            var13 = var16.bind(var5)(var14);
case 24:
            var9['source'] = var13;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var10 = _closure1_slot3;
            var9 = {};
            var14 = var15.body;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = !var1;
            if(!var14) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var14 = var15.bodyLegacy;
case 26:
            var13[1] = var14;
            var9['style'] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[2] = var9;
            var3['children'] = var8;
            var6 = var6.bind(var5)(var4, var3);
            var4 = _closure1_slot7;
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = _closure1_slot3;
            var1 = {};
            var1['style'] = var7;
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 18;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var8 = 'surface-high';
            var2['variant'] = var8;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();