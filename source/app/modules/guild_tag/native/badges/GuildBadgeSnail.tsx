// app/modules/guild_tag/native/badges/GuildBadgeSnail.tsx
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
    var4 = ['#7E1B1B', '#C7531A'];
    var _closure1_slot4 = var4;
    var4 = [0.25, 0.45];
    var _closure1_slot5 = var4;
    var4 = new Array(2);
    var7 = {'base': 5, 'tint': 1};
    var4[0] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[1] = var7;
    var _closure1_slot6 = var4;
    var4 = ['#B86F00', '#E6D23B'];
    var _closure1_slot7 = var4;
    var4 = [0.5, 0.75];
    var _closure1_slot8 = var4;
    var4 = new Array(2);
    var7 = {'base': 5, 'tint': 1};
    var4[0] = var7;
    var7 = {'base': 3, 'tint': 1};
    var4[1] = var7;
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/native/badges/GuildBadgeSnail.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var11 = var3.width;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 24;
case 2:
            var10 = var3.height;
            if(!(var10 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 24;
case 4:
            var14 = var3.primaryTintColor;
            var9 = var3.secondaryTintColor;
            var2 = {'width': 0, 'height': 0, 'primaryTintColor': 0, 'secondaryTintColor': 0};
            var12 = null;
            var21 = var2;
            var20 = null;
            var1 = silentSetPrototypeOf(var21, var20);
            var13 = 0;
            var21 = {};
            var20 = var3;
            var19 = var2;
            var20 = copyDataProperties(var21, var20, var19);
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var3 = var8.bind(var4)(var1);
            var2 = var3.getTransformedBadgeColors;
            var1 = {};
            var15 = _closure1_slot4;
            var1['primaryBaseColors'] = var15;
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
            var17 = var1.primaryColorsTransformed;
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
            var1[5] = var11;
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
            var11 = var6.Path;
            var6 = {'d': 'M9 13h-1v-1h1v1ZM8 12h-1v-1h1v1ZM7 11h-1v-2h1v2ZM12 10h-1v-1h1v1ZM11 9h-1v-1h1v1ZM13 9h-1v-1h1v1ZM12 8h-1v-1h1v1ZM2 6H1v-1h1v1ZM8 5h-2v-1h2v1ZM4 2h-1V1h1v1Z', 'fill': 'white'};
            var11 = var10.bind(var4)(var11, var6);
            var6 = new Array(8);
            var6[0] = var11;
            var11 = var7[var9];
            var11 = var8.bind(var4)(var11);
            var15 = var11.Path;
            var11 = {};
            var16 = 'M8 13h-1v-1h1v1ZM12 12v-1h1v-1h1V7h-1v-1h-1v-1H8v-1h5v1h1v1h1v6h-2v1H9v-1h3ZM7 12h-1v-1h1v1Z';
            var11['d'] = var16;
            var16 = 1;
            var18 = var17[var16];
            var11['fill'] = var18;
            var11 = var10.bind(var4)(var15, var11);
            var6[1] = var11;
            var11 = var7[var9];
            var11 = var8.bind(var4)(var11);
            var15 = var11.Path;
            var11 = {};
            var18 = 'M10 10h2v1H8v-2h1v-1h1v2ZM13 10h-1v-1h1v1Z';
            var11['d'] = var18;
            var18 = var17[var16];
            var11['fill'] = var18;
            var11 = var10.bind(var4)(var15, var11);
            var6[2] = var11;
            var11 = var7[var9];
            var11 = var8.bind(var4)(var11);
            var15 = var11.Path;
            var11 = {};
            var18 = 'M12 7H9v1h-1v1h-2v-1h1v-1h1v-1h4v1ZM13 8h-1v-1h1v1ZM8 6h-1v-1h1v1Z';
            var11['d'] = var18;
            var18 = var17[var16];
            var11['fill'] = var18;
            var11 = var10.bind(var4)(var15, var11);
            var6[3] = var11;
            var11 = var7[var9];
            var11 = var8.bind(var4)(var11);
            var15 = var11.Path;
            var11 = {};
            var18 = 'M13 13v1H7v-1h6ZM7 13h-1v-1h1v1ZM14 13h-1v-1h1v1ZM6 12h-1V9h1v3ZM12 12H8v-1h4v1ZM8 11h-1v-2h1v2ZM13 11h-1v-1h1v1ZM11 10h-1v-1h1v1ZM14 10h-1V7h1v3ZM9 9h-1v-1h1v1ZM12 9h-1v-1h1v1ZM11 8h-2v-1h2v1ZM8 7h-1v-1h1v1ZM13 7h-1v-1h1v1ZM12 6H8v-1h4v1Z';
            var11['d'] = var18;
            var17 = var17[var13];
            var11['fill'] = var17;
            var11 = var10.bind(var4)(var15, var11);
            var6[4] = var11;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Path;
            var7 = {};
            var11 = 'M5 15h-1v-1h1v1ZM4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM3 5h2v1h1v2H2v4H1V6h1V2h1v3Z';
            var7['d'] = var11;
            var15 = var12 == var14;
            var11 = undefined;
            if(var15) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var14[var16];
case 6:
            if(!(var12 == var11)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = _closure1_slot7;
            var11 = var15[var16];
case 8:
            var7['fill'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var6[5] = var7;
            var10 = _closure1_slot2;
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Path;
            var7 = {};
            var11 = 'M5 13h1v1h-1v-1ZM7 15h-2v-1h2v1ZM15 14v1h-2v-1h2ZM3 9h1v1h1v4h-1v-1h-1v-1H2V8h1v1ZM5 4h-1v-1h1v1ZM6 3h-1V2h1v1ZM7 2h-1V1h1v1Z';
            var7['d'] = var11;
            var15 = var12 == var14;
            var11 = undefined;
            if(var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var11 = var14[var13];
case 10:
            if(!(var12 == var11)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = _closure1_slot7;
            var11 = var12[var13];
case 12:
            var7['fill'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var6[6] = var7;
            var8 = _closure1_slot2;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Path;
            var5 = {'d': 'M13 15h2v-1h1v2H4v-1h3v-1h6v1ZM4 15h-1v-1h1v1ZM3 14H2v-1h1v1ZM7 14h-1v-1h1v1ZM15 14h-2v-1h1v-1h1v2ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM1 12H0V5h1v7ZM16 12h-1V6h1v6ZM6 9h-1v1h-1v-1h-1v-1h3v1ZM5 1h1V0h2v2h-1V1h-1v1h-1v1h-1v1h1v-1h1V2h1v1h6v1H6v1h1v3h-1v-2h-1v-1h-2V2h1V1h-1V0h2v1ZM15 6h-1v-1h1v1ZM2 5H1V2h1v3ZM14 5h-1v-1h1v1ZM3 2H2V1h1v1Z', 'fill': 'black'};
            var5 = var8.bind(var4)(var7, var5);
            var6[7] = var5;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildBadgeSnail'] = var2;
    return var1;
})();