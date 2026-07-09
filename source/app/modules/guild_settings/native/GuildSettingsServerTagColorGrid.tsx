// app/modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx
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
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GUILD_TAG_BADGE_PALETTE_PRESETS;
    var _closure1_slot4 = var7;
    var7 = var4.GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS;
    var _closure1_slot5 = var7;
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.space;
    var12 = var4.PX_8;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var9['gap'] = var12;
    var4['grid'] = var9;
    var9 = {};
    var12 = 'absolute';
    var9['position'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['right'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['bottom'] = var10;
    var4['defaultIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsServerTagColorGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsServerTagColorGrid(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var25 = var1.badge;
            var _closure2_slot0 = var25;
            var8 = var1.primaryColor;
            var _closure2_slot1 = var8;
            var6 = var1.secondaryColor;
            var _closure2_slot2 = var6;
            var2 = var1.onSelectColor;
            var _closure2_slot3 = var2;
            var12 = var1.onPressEyedropper;
            var19 = var1.cellSize;
            var _closure2_slot4 = var19;
            var1 = _closure1_slot9;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var1 = _closure1_slot5;
            var2 = var1[var25];
            var1 = 2;
            var2 = var2 >= var1;
            var _closure2_slot5 = var2;
            var7 = null;
            var26 = var7 == var8;
            if(!var26) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var2;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var7 == var6;
case 4:
            var26 = var1;
case 2:
            var18 = !var26;
            if(var26) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot4;
            var3 = var5.every;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.primary;
                    var1 = _closure2_slot1;
                    var1 = var2 !== var1;
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = var4.secondary;
                    var3 = _closure2_slot2;
                    var2 = var4 !== var3;
case 10:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var1);
case 6:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var22 = 6;
            var3 = var1[var22];
            var3 = var9.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.formatToPlainString;
            var1 = var1[var22];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var1["7BFCRR"];
            var2 = {};
            var10 = var8;
            if(!(var7 == var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = _closure1_slot4;
            var11 = 0;
            var11 = var13[var11];
            var10 = var11.primary;
case 14:
            var2['color'] = var10;
            var17 = var3.bind(var5)(var9, var2);
            _fun0001_ip = 16; continue _fun0001;
case 12:
            var2 = var1.hr4D2X;
            var1 = {};
            if(!(var7 == var8)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = _closure1_slot4;
            var9 = 0;
            var9 = var10[var9];
            var8 = var9.primary;
case 17:
            var1['primaryColor'] = var8;
            if(!(var7 == var6)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = _closure1_slot4;
            var7 = 0;
            var7 = var8[var7];
            var6 = var7.secondary;
case 19:
            var1['secondaryColor'] = var6;
            var17 = var3.bind(var5)(var2, var1);
case 16:
            var3 = _closure1_slot8;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 7;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var15 = _closure1_slot1;
            var14 = 4;
            var5 = var16[var14];
            var5 = var15.bind(var4)(var5);
            var5 = var5.space;
            var5 = var5.PX_8;
            var1['spacing'] = var5;
            var11 = _closure1_slot7;
            var5 = 8;
            var5 = var16[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/medium', 'color': 'text-subtle', 'accessibilityRole': 'header'};
            var7 = var16[var22];
            var7 = var13.bind(var4)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var16[var22];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Fg/TNW;
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var6 = var11.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot3;
            var6 = {};
            var8 = 'radiogroup';
            var6['accessibilityRole'] = var8;
            var8 = var24.grid;
            var6['style'] = var8;
            var10 = _closure1_slot4;
            var9 = var10.map;
            var8 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = _closure2_slot4;
                    var2['size'] = var7;
                    var8 = var1.primary;
                    var7 = _closure2_slot1;
                    var7 = var8 === var7;
                    if(!var7) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var11 = _closure2_slot5;
                    var8 = !var11;
                    if(!var11) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                    var12 = var1.secondary;
                    var11 = _closure2_slot2;
                    var8 = var12 === var11;
case 23:
                    var7 = var8;
case 21:
                    var2['selected'] = var7;
                    var7 = _closure2_slot5;
                    if(var7) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 10;
                    var7 = var11[var7];
                    var11 = var8.bind(var4)(var7);
                    var8 = var11.getGuildTagPalettePresetColorLabel;
                    var7 = var1.primary;
                    var7 = var8.bind(var11)(var7);
                    _fun0003_ip = 27; continue _fun0003;
case 25:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 10;
                    var8 = var12[var8];
                    var12 = var11.bind(var4)(var8);
                    var11 = var1.primary;
                    var8 = var1.secondary;
                    var7 = var12.bind(var4)(var11, var8);
case 27:
                    var2['accessibilityLabel'] = var7;
                    var6 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = _closure2_slot3;
                            var3 = _closure3_slot0;
                            var3 = var3.primary;
                            var5 = _closure2_slot5;
                            var2 = null;
                            if(!var5) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                            var1 = _closure3_slot0;
                            var2 = var1.secondary;
case 28:
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var2['onPress'] = var6;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 11;
                    var6 = var11[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.GuildBadge;
                    var6 = {};
                    var11 = _closure2_slot0;
                    var6['badge'] = var11;
                    var10 = _closure1_slot6;
                    var11 = var10.SIZE_32;
                    var6['width'] = var11;
                    var10 = var10.SIZE_32;
                    var6['height'] = var10;
                    var10 = var1.primary;
                    var6['primaryTintColor'] = var10;
                    var10 = _closure2_slot5;
                    var9 = undefined;
                    if(!var10) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var9 = var1.secondary;
case 30:
                    var6['secondaryTintColor'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var2['children'] = var6;
                    var8 = var1.primary;
                    var7 = var1.secondary;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = '';
                    var1 = var6.bind(var1)(var8, var7);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var8);
            var8 = new Array(3);
            var8[0] = var9;
            var9 = 9;
            var10 = var16[var9];
            var20 = var15.bind(var4)(var10);
            var10 = {};
            var10['size'] = var19;
            var10['selected'] = var26;
            var26 = var16[var22];
            var26 = var13.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var22 = var16[var22];
            var22 = var13.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.S6N0gC;
            var22 = var26.bind(var27)(var22);
            var10['accessibilityLabel'] = var22;
            var21 = function onPress() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = null;
                var1 = var3.bind(var2)(var1, var1);
                return var1;
            };
            var10['onPress'] = var21;
            var21 = 11;
            var21 = var16[var21];
            var21 = var13.bind(var4)(var21);
            var22 = var21.GuildBadge;
            var21 = {};
            var21['badge'] = var25;
            var23 = _closure1_slot6;
            var25 = var23.SIZE_32;
            var21['width'] = var25;
            var23 = var23.SIZE_32;
            var21['height'] = var23;
            var22 = var11.bind(var4)(var22, var21);
            var21 = new Array(2);
            var21[0] = var22;
            var22 = 12;
            var22 = var16[var22];
            var22 = var13.bind(var4)(var22);
            var23 = var22.RefreshIcon;
            var22 = {};
            var25 = 'xs';
            var22['size'] = var25;
            var25 = var16[var14];
            var25 = var15.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.ICON_DEFAULT;
            var22['color'] = var25;
            var24 = var24.defaultIcon;
            var22['style'] = var24;
            var22 = var11.bind(var4)(var23, var22);
            var21[1] = var22;
            var10['children'] = var21;
            var10 = var3.bind(var4)(var20, var10);
            var8[1] = var10;
            var9 = var16[var9];
            var10 = var15.bind(var4)(var9);
            var9 = {};
            var9['size'] = var19;
            var9['selected'] = var18;
            var18 = 'button';
            var9['accessibilityRole'] = var18;
            var9['accessibilityLabel'] = var17;
            var9['onPress'] = var12;
            var12 = 13;
            var12 = var16[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.EyeDropperIcon;
            var12 = {};
            var17 = 'sm';
            var12['size'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.colors;
            var14 = var14.ICON_DEFAULT;
            var12['color'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();