// app/modules/colors/native/ColorConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot0 = var4;
    var4 = {};
    var8 = 1;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS;
    var5 = new Array(2);
    var5[0] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
    var5[1] = var10;
    var4['PREMIUM_TIER_0'] = var5;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS;
    var5 = new Array(2);
    var5[0] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS;
    var5[1] = var10;
    var4['PREMIUM_TIER_1'] = var5;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var5 = new Array(2);
    var5[0] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PREMIUM_TIER_2_PINK_FOR_GRADIENTS;
    var5[1] = var10;
    var4['PREMIUM_TIER_2'] = var5;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var5 = new Array(3);
    var5[0] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2;
    var5[1] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PREMIUM_TIER_2_PINK_FOR_GRADIENTS;
    var5[2] = var10;
    var4['PREMIUM_TIER_2_TRI_COLOR'] = var5;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.GUILD_BOOSTING_BLUE_FOR_GRADIENTS;
    var5 = new Array(2);
    var5[0] = var10;
    var10 = var7[var8];
    var10 = var9.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS;
    var5[1] = var10;
    var4['PREMIUM_GUILD'] = var5;
    var5 = ['#3736BB', '#4670E8', '#8377EB', '#E782F1', '#DF90AF'];
    var4['PREMIUM_TIER_0_PERK_CARD'] = var5;
    var5 = var7[var8];
    var5 = var9.bind(var1)(var5);
    var5 = var5.unsafe_rawColors;
    var10 = var5.BLURPLE_50;
    var5 = new Array(2);
    var5[0] = var10;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.unsafe_rawColors;
    var8 = var8.PINK_60;
    var5[1] = var8;
    var4['PREMIUM_TIER_2_OFFER_COLOR'] = var5;
    var _closure1_slot1 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/colors/native/ColorConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Gradients'] = var4;
    var2 = function getPremiumGradientColor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = undefined;
            return var2;
case 6:
            var2 = _closure1_slot1;
            var2 = var2.PREMIUM_TIER_2;
            return var2;
case 4:
            var2 = _closure1_slot1;
            var2 = var2.PREMIUM_TIER_1;
            return var2;
case 2:
            var1 = _closure1_slot1;
            var1 = var1.PREMIUM_TIER_0;
            return var1;
        }
    };
    var3['getPremiumGradientColor'] = var2;
    return var1;
})();