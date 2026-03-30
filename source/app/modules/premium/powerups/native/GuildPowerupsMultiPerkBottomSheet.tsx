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
            var21 = var1.powerup;
            var9 = var1.isNewPerk;
            var7 = var1.forceStaticImage;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var4 = undefined;
            var10 = var6.bind(var4)(var1);
            var8 = var10.isThemeLight;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var8 = var8.bind(var10)(var1);
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)(var8);
            var1 = 7;
            var8 = var5[var1];
            var8 = var3.bind(var4)(var8);
            var8 = var8.bind(var4)(var2, var21);
            var10 = 8;
            var10 = var5[var10];
            var14 = var6.bind(var4)(var10);
            var11 = var14.useCalculatePowerupCardStatus;
            var10 = false;
            var22 = var11.bind(var14)(var21, var8, var10);
            var1 = var5[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.isPowerupActiveStatusActive;
            var14 = var1.bind(var6)(var8);
            var _closure2_slot0 = var14;
            var1 = 9;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var14);
            var23 = var1.textColor;
            var1 = 10;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = true;
            var20 = var6.bind(var4)(var21, var1, var7);
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var21, var14);
            var16 = var1.disabled;
            var1 = 12;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var21);
            var6 = var1.onActivate;
            var _closure2_slot1 = var6;
            var15 = var1.isLoading;
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var21);
            var _closure2_slot2 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var12.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var16;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var12.disabled;
case 2:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var10 = var12.imageContainer;
            var8 = new Array(4);
            var8[0] = var10;
            var18 = null;
            var10 = var18 == var22;
            var11 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var22.type;
case 4:
            var10 = 'active';
            var10 = var10 === var11;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var12.imageContainerActive;
case 6:
            var8[1] = var10;
            var10 = var18 == var22;
            var11 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var22.type;
case 8:
            var10 = 'expiring';
            var10 = var10 === var11;
            if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var12.imageContainerExpiring;
case 10:
            var8[2] = var10;
            var10 = var18 == var22;
            var11 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var22.type;
case 12:
            var10 = 'removing';
            var10 = var10 === var11;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var12.imageContainerRemoving;
case 14:
            var8[3] = var10;
            var5['style'] = var8;
            var11 = _closure1_slot4;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var8 = 14;
            var8 = var19[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var24 = var18 != var20;
            var19 = '';
            if(!var24) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var19 = var20;
case 16:
            var8['imageUrl'] = var19;
            var19 = var12.image;
            var8['style'] = var19;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var19 = _closure1_slot4;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var10 = 15;
            var10 = var27[var10];
            var10 = var26.bind(var4)(var10);
            var11 = var10.TextBadge;
            var10 = {};
            var20 = 16;
            var24 = var27[var20];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var20 = var27[var20];
            var20 = var26.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.y2b7CA;
            var20 = var24.bind(var25)(var20);
            var10['text'] = var20;
            var20 = var12.badge;
            var10['style'] = var20;
            var9 = var19.bind(var4)(var11, var10);
case 18:
            var8[1] = var9;
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
            var20 = _closure1_slot4;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 17;
            var12 = var24[var12];
            var12 = var19.bind(var4)(var12);
            var19 = var12.Text;
            var12 = {};
            var24 = 'heading-md/semibold';
            var12['variant'] = var24;
            var12['color'] = var23;
            var23 = var21.title;
            var12['children'] = var23;
            var19 = var20.bind(var4)(var19, var12);
            var12 = new Array(2);
            var12[0] = var19;
            if(!(var18 == var22)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var20 = _closure1_slot4;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 18;
            var18 = var23[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.GuildPowerupCardFooterCost;
            var18 = {};
            var21 = var21.cost;
            var18['cost'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var21 = _closure1_slot4;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 18;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.GuildPowerupCardFooterStatus;
            var19 = {};
            var19['status'] = var22;
            var18 = var21.bind(var4)(var20, var19);
case 22:
            var12[1] = var18;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 19;
            var10 = var18[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var10['disabled'] = var16;
            var10['loading'] = var15;
            var15 = 'primary';
            if(!var14) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var15 = 'secondary';
case 23:
            var10['variant'] = var15;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 16;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 20;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            if(var14) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var14 = var17.gSxlHf;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var14 = var17.TZsu1U;
case 27:
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var13 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 30:
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
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 3;
            var7 = var4[var6];
            var5 = undefined;
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['gap'] = var7;
            var1['container'] = var2;
            var2 = {};
            var7 = var4[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_24;
            var2['gap'] = var7;
            var7 = var4[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var2['marginHorizontal'] = var7;
            var1['cardsContainer'] = var2;
            var7 = 4;
            var2 = {'flexDirection': 'column', 'gap': 4};
            var1['titleContainer'] = var2;
            var2 = {'justifyContent': 'space-between', 'alignItems': 'center', 'flexDirection': 'row'};
            var1['bodyContainer'] = var2;
            var2 = {};
            var9 = var4[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.radii;
            var9 = var9.md;
            var2['borderRadius'] = var9;
            var9 = 1;
            var2['borderWidth'] = var9;
            var9 = var4[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_MOD_MUTED;
            var2['borderColor'] = var9;
            var9 = 'solid';
            var2['borderStyle'] = var9;
            var4 = var4[var7];
            var8 = var8.bind(var5)(var4);
            var4 = '#ffffff';
            var9 = arg1;
            if(!var9) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var4 = '#000000';
case 31:
            var9 = var8.bind(var5)(var4);
            var8 = var9.alpha;
            var4 = 0.04;
            var8 = var8.bind(var9)(var4);
            var4 = var8.hex;
            var4 = var4.bind(var8)();
            var2['backgroundColor'] = var4;
            var1['imageContainer'] = var2;
            var2 = {};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var9 = var4.bind(var5)(var8);
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.GREEN_360;
            var10 = var9.bind(var5)(var8);
            var8 = var10.alpha;
            var9 = 0.35;
            var10 = var8.bind(var10)(var9);
            var8 = var10.hex;
            var8 = var8.bind(var10)();
            var2['borderColor'] = var8;
            var1['imageContainerActive'] = var2;
            var2 = {};
            var8 = var3[var7];
            var10 = var4.bind(var5)(var8);
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.YELLOW_300;
            var10 = var10.bind(var5)(var8);
            var8 = var10.alpha;
            var10 = var8.bind(var10)(var9);
            var8 = var10.hex;
            var8 = var8.bind(var10)();
            var2['borderColor'] = var8;
            var1['imageContainerExpiring'] = var2;
            var2 = {};
            var7 = var3[var7];
            var8 = var4.bind(var5)(var7);
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.YELLOW_300;
            var8 = var8.bind(var5)(var7);
            var7 = var8.alpha;
            var8 = var7.bind(var8)(var9);
            var7 = var8.hex;
            var7 = var7.bind(var8)();
            var2['borderColor'] = var7;
            var1['imageContainerRemoving'] = var2;
            var2 = {'width': '75%', 'height': 180, 'resizeMode': 'contain'};
            var1['image'] = var2;
            var2 = {};
            var7 = 0.5;
            var2['opacity'] = var7;
            var1['disabled'] = var2;
            var2 = {};
            var7 = 'absolute';
            var2['position'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_8;
            var2['top'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_8;
            var2['right'] = var3;
            var1['badge'] = var2;
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
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var4['cardsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['marginBottom'] = var10;
    var4['disabledReasonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 27;
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
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.bottom;
            var1 = 22;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var21 = var1.bind(var5)(var2, var14);
            var _closure2_slot1 = var21;
            var12 = null;
            var2 = var12 == var21;
            var1 = null;
            if(var2) { _fun0004_ip = 9; continue _fun0004 }
case 33:
            var4 = _closure1_slot4;
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 23;
            var2 = var17[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {'scrollable': true, 'startExpanded': true};
            var8 = _closure1_slot5;
            var6 = 24;
            var6 = var17[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var9 = {};
            var9['paddingBottom'] = var11;
            var6['contentContainerStyle'] = var9;
            var16 = _closure1_slot4;
            var11 = _closure1_slot1;
            var9 = 25;
            var9 = var17[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var17 = var21.title;
            var9['title'] = var17;
            var17 = var21.description;
            var9['description'] = var17;
            var11 = var16.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var11 = var21.disabledReason;
            var11 = var12 != var11;
            if(!var11) { _fun0004_ip = 34; continue _fun0004 }
case 35:
            var17 = _closure1_slot4;
            var16 = _closure1_slot3;
            var12 = {};
            var18 = var15.disabledReasonContainer;
            var12['style'] = var18;
            var20 = _closure1_slot4;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var18 = 26;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var21 = var21.disabledReason;
            var18['text'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var12['children'] = var18;
            var11 = var17.bind(var5)(var16, var12);
case 34:
            var9[1] = var11;
            var12 = _closure1_slot4;
            var11 = _closure1_slot3;
            var10 = {};
            var15 = var15.cardsContainer;
            var10['style'] = var15;
            var15 = var14.powerups;
            var14 = var15.map;
            var13 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot8;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3['guildId'] = var2;
                    var3['powerup'] = var1;
                    var2 = _closure2_slot1;
                    var10 = var2.newPowerupSkuIdSet;
                    var2 = null;
                    var8 = var2 == var10;
                    var2 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var9 = var10.has;
                    var8 = var1.skuId;
                    var7 = var9.bind(var10)(var8);
case 36:
                    var3['isNewPerk'] = var7;
                    var6 = _closure2_slot1;
                    var6 = var6.forceStaticImages;
                    var3['forceStaticImage'] = var6;
                    var1 = var1.skuId;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();