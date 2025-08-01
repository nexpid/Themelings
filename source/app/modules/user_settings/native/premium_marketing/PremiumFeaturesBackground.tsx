// app/modules/user_settings/native/premium_marketing/PremiumFeaturesBackground.tsx
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
    var4 = var4.PremiumTypes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'borderRadius': null, 'flexDirection': 'column', 'justifyContent': 'space-between', 'overflow': 'hidden'};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['cardContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesBackground.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumFeaturesBackground(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var3 = var7.premiumType;
            var9 = var7.opacity;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 25; continue _fun0001 }
 22:
            var9 = 1;
 25:
            var _closure2_slot0 = var9;
            var6 = var7.children;
            var11 = var7.style;
            var5 = {'premiumType': 0, 'opacity': 0, 'children': 0, 'style': 0};
            var14 = null;
            var15 = var5;
            var2 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var7;
            var13 = var5;
            var5 = copyDataProperties(var15, var14, var13);
            var2 = _closure1_slot5;
            var10 = var2.bind(var4)();
            var2 = _closure1_slot3;
            var2 = var2.TIER_0;
            if(!(var3 !== var2)) { _fun0001_ip = 133; continue _fun0001 }
 99:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 5;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.Gradients;
            var3 = var2.PREMIUM_TIER_2_TRI_COLOR;
            _fun0001_ip = 165; continue _fun0001;
 133:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 5;
            var2 = var12[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.Gradients;
            var3 = var2.PREMIUM_TIER_0;
 165:
            var2 = 1;
            var8 = var3;
            if(!(var9 < var2)) { _fun0001_ip = 190; continue _fun0001 }
 175:
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.alpha;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = var2.hex;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var2.bind(var3)(var1);
 190:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var12 = var10.cardContainer;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var1['colors'] = var8;
            var8 = _closure1_slot0;
            var7 = 5;
            var10 = var9[var7];
            var10 = var8.bind(var4)(var10);
            var10 = var10.HorizontalGradient;
            var10 = var10.START;
            var1['start'] = var10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.HorizontalGradient;
            var7 = var7.END;
            var1['end'] = var7;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();