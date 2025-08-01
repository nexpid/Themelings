// app/modules/user_settings/native/premium_marketing/PremiumFeaturesWumpus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumTypes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 0, 'right': 0};
    var4['clouds'] = var9;
    var9 = {'position': 'absolute', 'top': 22, 'right': 22, 'height': 90};
    var4['wumpus'] = var9;
    var9 = {};
    var11 = {};
    var10 = -1;
    var11['scaleX'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var9['transform'] = var10;
    var4['wumpusLeft'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesWumpus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumFeaturesWumpus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.premiumType;
            var _closure2_slot0 = var14;
            var2 = _closure1_slot7;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 4;
            var2 = var11[var2];
            var2 = var7.bind(var4)(var2);
            var6 = var2.bind(var4)();
            var _closure2_slot1 = var6;
            var5 = _closure1_slot2;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1.TIER_0;
                    if(!(var2 !== var1)) { _fun0002_ip = 96; continue _fun0002 }
 24:
                    var2 = _closure1_slot0;
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    if(var1) { _fun0002_ip = 48; continue _fun0002 }
 39:
                    var1 = 9;
                    var1 = var5[var1];
                    _fun0002_ip = 55; continue _fun0002;
 48:
                    var4 = 8;
                    var1 = var5[var4];
 55:
                    var7 = undefined;
                    var2 = var2.bind(var7)(var1);
                    var1 = {};
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 10;
                    var4 = var8[var4];
                    var4 = var5.bind(var7)(var4);
                    var1['wumpusImageSource'] = var4;
                    var1['cloudsImageSource'] = var2;
                    _fun0002_ip = 165; continue _fun0002;
 96:
                    var2 = {};
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 5;
                    var7 = var7[var4];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var7);
                    var2['wumpusImageSource'] = var7;
                    var3 = _closure2_slot1;
                    var7 = _closure1_slot1;
                    if(var3) { _fun0002_ip = 145; continue _fun0002 }
 136:
                    var3 = 7;
                    var3 = var7[var3];
                    _fun0002_ip = 152; continue _fun0002;
 145:
                    var6 = 6;
                    var3 = var7[var6];
 152:
                    var3 = var5.bind(var4)(var3);
                    var2['cloudsImageSource'] = var3;
                    var1 = var2;
 165:
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var9 = var1.wumpusImageSource;
            var16 = var1.cloudsImageSource;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = _closure1_slot4;
            var6 = 11;
            var5 = var11[var6];
            var15 = var7.bind(var4)(var5);
            var5 = {};
            var10 = var13.clouds;
            var5['style'] = var10;
            var10 = 'contain';
            var5['resizeMode'] = var10;
            var5['source'] = var16;
            var15 = var8.bind(var4)(var15, var5);
            var5 = new Array(2);
            var5[0] = var15;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var15 = var13.wumpus;
            var11 = new Array(2);
            var11[0] = var15;
            var12 = _closure1_slot3;
            var12 = var12.TIER_0;
            var12 = var14 === var12;
            if(!var12) { _fun0001_ip = 213; continue _fun0001 }
 207:
            var12 = var13.wumpusLeft;
 213:
            var11[1] = var12;
            var6['style'] = var11;
            var6['resizeMode'] = var10;
            var6['source'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();