// app/modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GuildPowerupsMultiPerkCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var20 = var1.powerup;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var4 = undefined;
            var8 = var6.bind(var4)(var1);
            var7 = var8.isThemeLight;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var7 = var7.bind(var8)(var1);
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)(var7);
            var1 = 7;
            var7 = var5[var1];
            var7 = var3.bind(var4)(var7);
            var7 = var7.bind(var4)(var2, var20);
            var8 = 8;
            var8 = var5[var8];
            var10 = var6.bind(var4)(var8);
            var9 = var10.useCalculatePowerupCardStatus;
            var8 = false;
            var21 = var9.bind(var10)(var20, var7, var8);
            var1 = var5[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.isPowerupActiveStatusActive;
            var14 = var1.bind(var6)(var7);
            var _closure2_slot0 = var14;
            var1 = 9;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var14);
            var22 = var1.textColor;
            var1 = 10;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = true;
            var18 = var6.bind(var4)(var20, var1);
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var20, var14);
            var15 = var1.disabled;
            var1 = 12;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var20);
            var2 = var1.onActivate;
            var _closure2_slot1 = var2;
            var1 = var1.onShowDeactivate;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var12.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var15;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var12.disabled;
case 2:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot3;
            var5 = {};
            var9 = var12.imageContainer;
            var8 = new Array(4);
            var8[0] = var9;
            var16 = null;
            var9 = var16 == var21;
            var10 = undefined;
            if(var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var21.type;
case 4:
            var9 = 'active';
            var9 = var9 === var10;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var12.imageContainerActive;
case 6:
            var8[1] = var9;
            var9 = var16 == var21;
            var10 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var21.type;
case 8:
            var9 = 'expiring';
            var9 = var9 === var10;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var12.imageContainerExpiring;
case 10:
            var8[2] = var9;
            var9 = var16 == var21;
            var10 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var21.type;
case 12:
            var9 = 'removing';
            var9 = var9 === var10;
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var12.imageContainerRemoving;
case 14:
            var8[3] = var9;
            var5['style'] = var8;
            var10 = _closure1_slot4;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 13;
            var8 = var11[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var19 = var16 != var18;
            var11 = '';
            if(!var19) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var18;
case 16:
            var8['imageUrl'] = var11;
            var11 = var12.image;
            var8['style'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var12.bodyContainer;
            var6['style'] = var9;
            var11 = _closure1_slot5;
            var10 = _closure1_slot3;
            var9 = {};
            var12 = var12.titleContainer;
            var9['style'] = var12;
            var19 = _closure1_slot4;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 14;
            var12 = var23[var12];
            var12 = var18.bind(var4)(var12);
            var18 = var12.Text;
            var12 = {};
            var23 = 'heading-md/semibold';
            var12['variant'] = var23;
            var12['color'] = var22;
            var22 = var20.title;
            var12['children'] = var22;
            var18 = var19.bind(var4)(var18, var12);
            var12 = new Array(2);
            var12[0] = var18;
            if(!(var16 == var21)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = _closure1_slot4;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 15;
            var16 = var22[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.GuildPowerupCardFooterCost;
            var16 = {};
            var20 = var20.cost;
            var16['cost'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var20 = _closure1_slot4;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 15;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.GuildPowerupCardFooterStatus;
            var18 = {};
            var18['status'] = var21;
            var16 = var20.bind(var4)(var19, var18);
case 20:
            var12[1] = var16;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 16;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var10['disabled'] = var15;
            var15 = 'primary';
            if(!var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var15 = 'secondary';
case 21:
            var10['variant'] = var15;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 17;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 18;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            if(var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var14 = var17.gSxlHf;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var14 = var17.TZsu1U;
case 25:
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0002_ip = 28; continue _fun0002;
case 26:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 2;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = {};
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var8 = 3;
            var4 = var5[var8];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_8;
            var2['gap'] = var4;
            var1['container'] = var2;
            var2 = {};
            var4 = var5[var8];
            var4 = var7.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_24;
            var2['gap'] = var4;
            var4 = var5[var8];
            var4 = var7.bind(var6)(var4);
            var4 = var4.spacing;
            var4 = var4.PX_16;
            var2['marginHorizontal'] = var4;
            var1['cardsContainer'] = var2;
            var4 = 4;
            var2 = {'flexDirection': 'column', 'gap': 4};
            var1['titleContainer'] = var2;
            var2 = {'justifyContent': 'space-between', 'alignItems': 'center', 'flexDirection': 'row'};
            var1['bodyContainer'] = var2;
            var2 = {};
            var9 = var5[var8];
            var9 = var7.bind(var6)(var9);
            var9 = var9.radii;
            var9 = var9.md;
            var2['borderRadius'] = var9;
            var9 = 1;
            var2['borderWidth'] = var9;
            var9 = var5[var8];
            var9 = var7.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_MOD_MUTED;
            var2['borderColor'] = var9;
            var9 = 'solid';
            var2['borderStyle'] = var9;
            var5 = var5[var4];
            var7 = var7.bind(var6)(var5);
            var5 = '#ffffff';
            var9 = arg1;
            if(!var9) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var5 = '#000000';
case 29:
            var9 = var7.bind(var6)(var5);
            var7 = var9.alpha;
            var5 = 0.04;
            var7 = var7.bind(var9)(var5);
            var5 = var7.hex;
            var5 = var5.bind(var7)();
            var2['backgroundColor'] = var5;
            var1['imageContainer'] = var2;
            var2 = {};
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = var3[var4];
            var9 = var7.bind(var6)(var5);
            var5 = var3[var8];
            var5 = var7.bind(var6)(var5);
            var5 = var5.unsafe_rawColors;
            var5 = var5.GREEN_360;
            var10 = var9.bind(var6)(var5);
            var9 = var10.alpha;
            var5 = 0.35;
            var10 = var9.bind(var10)(var5);
            var9 = var10.hex;
            var9 = var9.bind(var10)();
            var2['borderColor'] = var9;
            var1['imageContainerActive'] = var2;
            var2 = {};
            var9 = var3[var4];
            var10 = var7.bind(var6)(var9);
            var9 = var3[var8];
            var9 = var7.bind(var6)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.YELLOW_300;
            var10 = var10.bind(var6)(var9);
            var9 = var10.alpha;
            var10 = var9.bind(var10)(var5);
            var9 = var10.hex;
            var9 = var9.bind(var10)();
            var2['borderColor'] = var9;
            var1['imageContainerExpiring'] = var2;
            var2 = {};
            var4 = var3[var4];
            var4 = var7.bind(var6)(var4);
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var3 = var3.unsafe_rawColors;
            var3 = var3.YELLOW_300;
            var4 = var4.bind(var6)(var3);
            var3 = var4.alpha;
            var4 = var3.bind(var4)(var5);
            var3 = var4.hex;
            var3 = var3.bind(var4)();
            var2['borderColor'] = var3;
            var1['imageContainerRemoving'] = var2;
            var2 = {'width': '75%', 'height': 180, 'resizeMode': 'contain'};
            var1['image'] = var2;
            var2 = {};
            var3 = 0.5;
            var2['opacity'] = var3;
            var1['disabled'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['gap'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginHorizontal'] = var10;
    var4['cardsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsMultiPerkBottomSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var14 = var1.listing;
            var1 = _closure1_slot7;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var16 = var1.bind(var5)(var14);
            var1 = null;
            var2 = var1 == var16;
            if(var2) { _fun0004_ip = 31; continue _fun0004 }
case 32:
            var4 = _closure1_slot4;
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 20;
            var2 = var17[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var6 = true;
            var2['scrollable'] = var6;
            var8 = _closure1_slot5;
            var6 = 21;
            var6 = var17[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var9 = 22;
            var9 = var17[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var17 = var16.title;
            var9['title'] = var17;
            var16 = var16.description;
            var9['description'] = var16;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot4;
            var11 = _closure1_slot3;
            var10 = {};
            var15 = var15.cardsContainer;
            var10['style'] = var15;
            var15 = var14.powerups;
            var14 = var15.map;
            var13 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot4;
                var4 = _closure1_slot8;
                var3 = {};
                var2 = _closure2_slot0;
                var3['guildId'] = var2;
                var3['powerup'] = var1;
                var2 = var1.skuId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();