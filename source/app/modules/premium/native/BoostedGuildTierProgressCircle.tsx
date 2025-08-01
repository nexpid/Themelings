// app/modules/premium/native/BoostedGuildTierProgressCircle.tsx
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
    var7 = var4.AppliedGuildBoostsRequiredForBoostedGuildTier;
    var _closure1_slot5 = var7;
    var4 = var4.BoostedGuildTiers;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'width': 70, 'height': 70};
    var4['guildTierProgressCircle'] = var9;
    var9 = {'backgroundColor': null, 'width': 64, 'height': 64, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xxl;
    var9['borderRadius'] = var10;
    var4['guildTierBackground'] = var9;
    var9 = {'width': 18, 'height': 30};
    var4['guildTierNoneIcon'] = var9;
    var9 = {'width': 24, 'height': 24};
    var4['guildTierIcon'] = var9;
    var9 = {'lineHeight': 16, 'marginTop': 2};
    var4['guildTierName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = function getTierIcon(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 162; continue _fun0001 }
 12:
            var4 = var2.premiumTier;
            var3 = _closure1_slot6;
            var3 = var3.NONE;
            if(!(var4 !== var3)) { _fun0001_ip = 162; continue _fun0001 }
 38:
            var3 = var2.premiumTier;
            var2 = _closure1_slot6;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0001_ip = 138; continue _fun0001 }
 58:
            var2 = _closure1_slot6;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0001_ip = 114; continue _fun0001 }
 72:
            var2 = _closure1_slot6;
            var2 = var2.TIER_3;
            if(!(var2 !== var3)) { _fun0001_ip = 90; continue _fun0001 }
 86:
            var2 = undefined;
            return var2;
 90:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 114:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            return var2;
 138:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
 162:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getTier048PxSource;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/BoostedGuildTierProgressCircle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var14 = var1.guild;
            var9 = var1.theme;
            var1 = _closure1_slot9;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = null;
            var5 = var2 == var14;
            var1 = undefined;
            if(var5) { _fun0002_ip = 62; continue _fun0002 }
 57:
            var1 = var14.id;
 62:
            var1 = var3.bind(var4)(var1);
            var3 = var1.available;
            if(!(var2 != var14)) { _fun0002_ip = 380; continue _fun0002 }
 80:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var17 = 11;
            var1 = var1[var17];
            var6 = var5.bind(var4)(var1);
            var5 = var6.getNextGuildTierFromGuild;
            var1 = var14.id;
            var6 = var5.bind(var6)(var1);
            var5 = var2 != var6;
            var1 = null;
            if(!var5) { _fun0002_ip = 133; continue _fun0002 }
 125:
            var5 = _closure1_slot5;
            var1 = var5[var6];
 133:
            var6 = var2 != var1;
            var2 = 100;
            var5 = var2;
            if(!var6) { _fun0002_ip = 166; continue _fun0002 }
 146:
            var6 = 0;
            var6 = var1 > var6;
            var5 = var2;
            if(!var6) { _fun0002_ip = 166; continue _fun0002 }
 158:
            var1 = var3 / var1;
            var5 = var1 * var2;
 166:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 12;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var7.guildTierProgressCircle;
            var1['style'] = var6;
            var1['percent'] = var5;
            var10 = _closure1_slot8;
            var6 = _closure1_slot3;
            var5 = {};
            var11 = var7.guildTierBackground;
            var5['style'] = var11;
            var12 = _closure1_slot4;
            var11 = {};
            var13 = _closure1_slot10;
            var13 = var13.bind(var4)(var9, var14);
            var11['source'] = var13;
            var13 = var7.guildTierIcon;
            var11['style'] = var13;
            var12 = var3.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var16 = _closure1_slot0;
            var12 = 13;
            var12 = var15[var12];
            var12 = var16.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            var18 = var7.guildTierName;
            var12['style'] = var18;
            var15 = var15[var17];
            var16 = var16.bind(var4)(var15);
            var15 = var16.getTierName;
            var14 = var14.premiumTier;
            var14 = var15.bind(var16)(var14);
            var12['children'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var11[1] = var12;
            var5['children'] = var11;
            var5 = var10.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 380:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var7.guildTierBackground;
            var1['style'] = var5;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = _closure1_slot10;
            var8 = var8.bind(var4)(var9);
            var5['source'] = var8;
            var7 = var7.guildTierNoneIcon;
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();