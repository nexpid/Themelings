// app/modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot2 = var7;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = ['#003E22', '#027D46', '#14A95C'];
    var _closure1_slot4 = var4;
    var4 = [0.1, 0.25, 0.45];
    var _closure1_slot5 = var4;
    var4 = new Array(3);
    var7 = {'base': 5, 'tint': 1};
    var4[0] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[1] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[2] = var7;
    var _closure1_slot6 = var4;
    var4 = ['#FD7531', '#FFAE49', '#FFC781'];
    var _closure1_slot7 = var4;
    var4 = [0.45, 0.6, 0.75];
    var _closure1_slot8 = var4;
    var4 = new Array(3);
    var7 = {'base': 5, 'tint': 1};
    var4[0] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[1] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[2] = var7;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/native/badges/GuildBadgePottedPlant.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildBadgePottedPlant(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var13 = var3.width;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = 24;
case 2:
            var10 = var3.height;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 24;
case 4:
            var14 = var3.primaryTintColor;
            var9 = var3.secondaryTintColor;
            var2 = {'width': 0, 'height': 0, 'primaryTintColor': 0, 'secondaryTintColor': 0};
            var11 = null;
            var21 = var2;
            var20 = null;
            var1 = silentSetPrototypeOf(var21, var20);
            var15 = 0;
            var21 = {};
            var20 = var3;
            var19 = var2;
            var20 = copyDataProperties(var21, var20, var19);
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var12 = 2;
            var1 = var7[var12];
            var3 = var8.bind(var4)(var1);
            var2 = var3.getTransformedBadgeColors;
            var1 = {};
            var16 = _closure1_slot4;
            var1['primaryBaseColors'] = var16;
            var1['primaryTintColor'] = var14;
            var14 = _closure1_slot5;
            var1['primaryTintLuminances'] = var14;
            var14 = _closure1_slot6;
            var1['primaryLuminanceWeights'] = var14;
            var14 = _closure1_slot7;
            var1['secondaryBaseColors'] = var14;
            var1['secondaryTintColor'] = var9;
            var9 = _closure1_slot8;
            var1['secondaryTintLuminances'] = var9;
            var9 = _closure1_slot9;
            var1['secondaryLuminanceWeights'] = var9;
            var1 = var2.bind(var3)(var1);
            var18 = var1.primaryColorsTransformed;
            var14 = var1.secondaryColorsTransformed;
            var3 = _closure1_slot3;
            var9 = 3;
            var1 = var7[var9];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Svg;
            var1 = {};
            var21 = var1;
            var6 = copyDataProperties(var21, var20);
            var6 = 'width';
            var1[5] = var13;
            var6 = 'height';
            var1[5] = var10;
            var10 = '0 0 16 16';
            var6 = 'viewBox';
            var1[5] = var10;
            var10 = 'none';
            var6 = 'fill';
            var1[5] = var10;
            var10 = _closure1_slot2;
            var6 = var7[var9];
            var6 = var8.bind(var4)(var6);
            var13 = var6.Path;
            var6 = {};
            var16 = 'M7 6h-2v-1h1v-1h1v2ZM10 5h1v1h-2v-2h1v1ZM5 5h-1v-1h1v1ZM12 5h-1v-1h1v1ZM4 4h-1v-1h1v1ZM13 4h-1v-1h1v1Z';
            var6['d'] = var16;
            var16 = var18[var15];
            var6['fill'] = var16;
            var13 = var10.bind(var4)(var13, var6);
            var6 = new Array(10);
            var6[0] = var13;
            var13 = var7[var9];
            var13 = var8.bind(var4)(var13);
            var16 = var13.Path;
            var13 = {};
            var17 = 'M8 9h-1V4h1v5Z';
            var13['d'] = var17;
            var17 = var18[var12];
            var13['fill'] = var17;
            var13 = var10.bind(var4)(var16, var13);
            var6[1] = var13;
            var13 = var7[var9];
            var13 = var8.bind(var4)(var13);
            var16 = var13.Path;
            var13 = {'d': 'M6 3h1v1h-1v1h-1v-1h-1v1H2V2h4v1Zm-3 1h1v-1h-1v1Z', 'fill': null, 'fillRule': 'evenodd'};
            var17 = var18[var12];
            var13['fill'] = var17;
            var13 = var10.bind(var4)(var16, var13);
            var6[2] = var13;
            var13 = var7[var9];
            var13 = var8.bind(var4)(var13);
            var16 = var13.Path;
            var13 = {};
            var17 = 'M14 3h-2v1h-1v1h-1v-2h1V2h3v1Z';
            var13['d'] = var17;
            var17 = var18[var12];
            var13['fill'] = var17;
            var13 = var10.bind(var4)(var16, var13);
            var6[3] = var13;
            var13 = var7[var9];
            var13 = var8.bind(var4)(var13);
            var17 = var13.Path;
            var16 = {};
            var13 = 'M9 9h-1V4h1v5ZM5 6h-2v-1h2v1ZM15 4h-1v1h-1v1h-2v-1h1v-1h1v-1h1V2h1v2Z';
            var16['d'] = var13;
            var13 = 1;
            var18 = var18[var13];
            var16['fill'] = var18;
            var16 = var10.bind(var4)(var17, var16);
            var6[4] = var16;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Path;
            var7 = {};
            var16 = 'M13 11v1H3v-1h10Z';
            var7['d'] = var16;
            var17 = var11 == var14;
            var16 = undefined;
            if(var17) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var14[var15];
case 6:
            var17 = var11 != var16;
            var15 = '#FD7531';
            if(!var17) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var16;
case 8:
            var7['fill'] = var15;
            var7 = var10.bind(var4)(var8, var7);
            var6[5] = var7;
            var10 = _closure1_slot2;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var15 = var7[var9];
            var15 = var8.bind(var4)(var15);
            var16 = var15.Path;
            var15 = {'d': 'M4 14h-1v-2h1v2ZM5 11h-2v-1h2v1ZM2 4H1V2h1v2ZM10 4h-1v-1h1v1ZM11 3h-1V2h1v1ZM5 2H2V1h3v1ZM14 2H11V1h3v1Z', 'fill': 'white'};
            var15 = var10.bind(var4)(var16, var15);
            var6[6] = var15;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Path;
            var7 = {};
            var15 = 'M12 14H4v-2h8v2ZM13 11H5v-1h8v1Z';
            var7['d'] = var15;
            var16 = var11 == var14;
            var15 = undefined;
            if(var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = var14[var12];
case 10:
            var16 = var11 != var15;
            var12 = '#FFC781';
            if(!var16) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = var15;
case 12:
            var7['fill'] = var12;
            var7 = var10.bind(var4)(var8, var7);
            var6[7] = var7;
            var10 = _closure1_slot2;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Path;
            var7 = {};
            var12 = 'M12 14v1H4v-1h8ZM13 14h-1v-2h1v2Z';
            var7['d'] = var12;
            var15 = var11 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var14[var13];
case 14:
            var13 = var11 != var12;
            var11 = '#FFAE49';
            if(!var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var12;
case 16:
            var7['fill'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var6[8] = var7;
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Path;
            var5 = {'d': 'M12 15v1H4v-1h8ZM4 15h-1v-1h1v1ZM13 15h-1v-1h1v1ZM7 9h2V6h4v1H10v2h4v5h-1V10H3v4H2V9h4v-2H3v-1h4v3ZM3 6H2v-1h1v1ZM14 6h-1v-1h1v1ZM2 5H1v-1h1v1ZM15 5h-1v-1h1v1ZM1 4H0V2h1v2ZM9 4h-2v-1h2v1ZM16 4h-1V2h1v2ZM7 3h-1V2h1v1ZM10 3h-1V2h1v1ZM2 2H1V1h1v1ZM6 2h-1V1h1v1ZM11 2h-1V1h1v1ZM15 2h-1V1h1v1ZM5 1H2V0h3v1ZM14 1H11V0h3v1Z', 'fill': 'black'};
            var5 = var8.bind(var4)(var7, var5);
            var6[9] = var5;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildBadgePottedPlant'] = var2;
    return var1;
})();