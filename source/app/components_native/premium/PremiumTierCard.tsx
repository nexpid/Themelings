// app/components_native/premium/PremiumTierCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.PremiumTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = 16;
    var10 = {'marginTop': 24, 'padding': 16};
    var7['header'] = var10;
    var10 = {'width': 158, 'height': 32};
    var7['textLogoTier0'] = var10;
    var10 = {'width': 185, 'height': 32};
    var7['textLogoTier1'] = var10;
    var10 = {'width': 80, 'height': 32};
    var7['textLogoTier2'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'right': 24, 'zIndex': 1};
    var7['wumpusLogo'] = var10;
    var10 = {'width': 83, 'height': 100};
    var7['wumpusLogoTier0'] = var10;
    var10 = {'width': 86, 'height': 100};
    var7['wumpusLogoTier1'] = var10;
    var10 = {'width': 133, 'height': 100};
    var7['wumpusLogoTier2'] = var10;
    var10 = {};
    var10['padding'] = var4;
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderBottomRightRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10['borderBottomLeftRadius'] = var11;
    var11 = 6;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_PRIMARY_630_LIGHT_PRIMARY_100;
    var10['backgroundColor'] = var11;
    var7['body'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumTierCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.premiumType;
            var8 = var1.children;
            var5 = var1.style;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 7;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var10 = var9.header;
            var5['style'] = var10;
            var11 = _closure1_slot0;
            var10 = 8;
            var15 = var13[var10];
            var15 = var11.bind(var4)(var15);
            var15 = var15.HorizontalGradient;
            var15 = var15.START;
            var5['start'] = var15;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.END;
            var5['end'] = var10;
            var10 = 9;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.getPremiumGradientColor;
            var10 = var10.bind(var11)(var14);
            var5['colors'] = var10;
            var10 = _closure1_slot4;
            var11 = {};
            var13 = _closure1_slot5;
            var13 = var13.TIER_0;
            if(!(var13 !== var14)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = _closure1_slot5;
            var13 = var13.TIER_1;
            if(!(var13 !== var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = _closure1_slot5;
            var15 = var13.TIER_2;
            var13 = undefined;
            if(!(var15 === var14)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = var9.textLogoTier2;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var13 = var9.textLogoTier1;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var13 = var9.textLogoTier0;
case 6:
            var11['style'] = var13;
            var13 = _closure1_slot5;
            var13 = var13.TIER_0;
            if(!(var13 !== var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot5;
            var13 = var13.TIER_1;
            if(!(var13 !== var14)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = _closure1_slot5;
            var15 = var13.TIER_2;
            var13 = undefined;
            if(!(var15 === var14)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 12;
            var15 = var17[var15];
            var13 = var16.bind(var4)(var15);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 11;
            var15 = var17[var15];
            var13 = var16.bind(var4)(var15);
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var16 = _closure1_slot1;
            var17 = _closure1_slot2;
            var15 = 10;
            var15 = var17[var15];
            var13 = var16.bind(var4)(var15);
case 12:
            var11['source'] = var13;
            var11 = var7.bind(var4)(var10, var11);
            var5['children'] = var11;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var6 = {};
            var13 = var9.wumpusLogo;
            var11 = new Array(2);
            var11[0] = var13;
            var13 = _closure1_slot5;
            var13 = var13.TIER_0;
            if(!(var13 !== var14)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = _closure1_slot5;
            var13 = var13.TIER_1;
            if(!(var13 !== var14)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var13 = _closure1_slot5;
            var15 = var13.TIER_2;
            var13 = undefined;
            if(!(var15 === var14)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = var9.wumpusLogoTier2;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var13 = var9.wumpusLogoTier1;
            _fun0001_ip = 18; continue _fun0001;
case 14:
            var13 = var9.wumpusLogoTier0;
case 18:
            var11[1] = var13;
            var6['style'] = var11;
            var11 = _closure1_slot5;
            var11 = var11.TIER_0;
            if(!(var11 !== var14)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = _closure1_slot5;
            var11 = var11.TIER_1;
            if(!(var11 !== var14)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = _closure1_slot5;
            var13 = var11.TIER_2;
            var11 = undefined;
            if(!(var13 === var14)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 15;
            var13 = var15[var13];
            var11 = var14.bind(var4)(var13);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 14;
            var13 = var15[var13];
            var11 = var14.bind(var4)(var13);
            _fun0001_ip = 24; continue _fun0001;
case 20:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 13;
            var12 = var14[var12];
            var11 = var13.bind(var4)(var12);
case 24:
            var6['source'] = var11;
            var6 = var7.bind(var4)(var10, var6);
            var5[1] = var6;
            var6 = {};
            var9 = var9.body;
            var6['style'] = var9;
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();