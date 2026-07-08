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
            var22 = var1.powerup;
            var9 = var1.isNewPerk;
            var20 = var1.forceStaticImage;
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
            var13 = var1.bind(var4)(var7);
            var1 = 7;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var10 = var1.bind(var4)(var2);
            var1 = 8;
            var7 = var5[var1];
            var7 = var3.bind(var4)(var7);
            var7 = var7.bind(var4)(var2, var22);
            var8 = 9;
            var8 = var5[var8];
            var11 = var3.bind(var4)(var8);
            var8 = 'GuildPowerupsMultiPerkBottomSheet';
            var12 = var11.bind(var4)(var2, var22, var8);
            var8 = 10;
            var8 = var5[var8];
            var11 = var6.bind(var4)(var8);
            var8 = var11.useCalculatePowerupCardStatus;
            var23 = var8.bind(var11)(var22, var7, var12);
            var1 = var5[var1];
            var6 = var6.bind(var4)(var1);
            var1 = var6.isPowerupActiveStatusActive;
            var15 = var1.bind(var6)(var7);
            var _closure2_slot0 = var15;
            var1 = 11;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var15);
            var24 = var1.textColor;
            var1 = 12;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var1 = true;
            var25 = var6.bind(var4)(var22, var1, var20);
            var1 = 13;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var22, var15);
            var17 = var1.disabled;
            var1 = 14;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var22);
            var6 = var1.onActivate;
            var _closure2_slot1 = var6;
            var16 = var1.isLoading;
            var1 = 15;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2, var22);
            var _closure2_slot2 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var13.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = var17;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var10;
case 2:
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var13.disabled;
case 4:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var11 = var13.imageContainer;
            var8 = new Array(4);
            var8[0] = var11;
            var19 = null;
            var11 = var19 == var23;
            var12 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = var23.type;
case 6:
            var11 = 'active';
            var11 = var11 === var12;
            if(!var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var13.imageContainerActive;
case 8:
            var8[1] = var11;
            var11 = var19 == var23;
            var12 = undefined;
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = var23.type;
case 10:
            var11 = 'expiring';
            var11 = var11 === var12;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var13.imageContainerExpiring;
case 12:
            var8[2] = var11;
            var11 = var19 == var23;
            var12 = undefined;
            if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var23.type;
case 14:
            var11 = 'removing';
            var11 = var11 === var12;
            if(!var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = var13.imageContainerRemoving;
case 16:
            var8[3] = var11;
            var5['style'] = var8;
            var12 = _closure1_slot4;
            var11 = _closure1_slot1;
            var21 = _closure1_slot2;
            var8 = 16;
            var8 = var21[var8];
            var11 = var11.bind(var4)(var8);
            var8 = {};
            var26 = var19 != var25;
            var21 = '';
            if(!var26) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var21 = var25;
case 18:
            var8['imageUrl'] = var21;
            var20 = !var20;
            var8['isAnimated'] = var20;
            var20 = var13.image;
            var8['style'] = var20;
            var11 = var12.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var20 = _closure1_slot4;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var11 = 17;
            var11 = var28[var11];
            var11 = var27.bind(var4)(var11);
            var12 = var11.TextBadge;
            var11 = {};
            var21 = 18;
            var25 = var28[var21];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var21 = var28[var21];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.y2b7CA;
            var21 = var25.bind(var26)(var21);
            var11['text'] = var21;
            var21 = var13.badge;
            var11['style'] = var21;
            var9 = var20.bind(var4)(var12, var11);
case 20:
            var8[1] = var9;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var13.bodyContainer;
            var6['style'] = var9;
            var12 = _closure1_slot5;
            var11 = _closure1_slot3;
            var9 = {};
            var13 = var13.titleContainer;
            var9['style'] = var13;
            var21 = _closure1_slot4;
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var13 = 19;
            var13 = var25[var13];
            var13 = var20.bind(var4)(var13);
            var20 = var13.Text;
            var13 = {};
            var25 = 'heading-md/semibold';
            var13['variant'] = var25;
            var13['color'] = var24;
            var24 = var22.title;
            var13['children'] = var24;
            var20 = var21.bind(var4)(var20, var13);
            var13 = new Array(2);
            var13[0] = var20;
            if(!(var19 == var23)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var21 = _closure1_slot4;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 20;
            var19 = var24[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.GuildPowerupCardFooterCost;
            var19 = {};
            var22 = var22.cost;
            var19['cost'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var22 = _closure1_slot4;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 20;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.GuildPowerupCardFooterStatus;
            var20 = {};
            var20['status'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 24:
            var13[1] = var19;
            var9['children'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            if(!var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var13 = _closure1_slot4;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 21;
            var11 = var19[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {};
            var11['disabled'] = var17;
            var11['loading'] = var16;
            var16 = 'primary';
            if(!var15) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var16 = 'secondary';
case 27:
            var11['variant'] = var16;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 18;
            var16 = var19[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var19 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 22;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            if(var15) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var15 = var18.gSxlHf;
            _fun0001_ip = 31; continue _fun0001;
case 29:
            var15 = var18.TZsu1U;
case 31:
            var15 = var16.bind(var17)(var15);
            var11['text'] = var15;
            var14 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0002_ip = 34; continue _fun0002;
case 32:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 25:
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
            var7 = var7.space;
            var7 = var7.PX_8;
            var2['gap'] = var7;
            var1['container'] = var2;
            var2 = {};
            var7 = var4[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.space;
            var7 = var7.PX_24;
            var2['gap'] = var7;
            var7 = var4[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.space;
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
            if(!var9) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var4 = '#000000';
case 35:
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
            var7 = var7.space;
            var7 = var7.PX_8;
            var2['top'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.space;
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
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var4['cardsContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['marginHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['marginBottom'] = var10;
    var4['disabledReasonContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 29;
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
            var6 = var1.onDismiss;
            var1 = _closure1_slot7;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.bottom;
            var1 = 24;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var21 = var1.bind(var5)(var2, var14);
            var _closure2_slot1 = var21;
            var12 = null;
            var2 = var12 == var21;
            var1 = null;
            if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var4 = _closure1_slot4;
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 25;
            var2 = var17[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {'scrollable': true, 'startExpanded': true};
            var2['onDismiss'] = var6;
            var8 = _closure1_slot5;
            var6 = 26;
            var6 = var17[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var9 = {};
            var9['paddingBottom'] = var11;
            var6['contentContainerStyle'] = var9;
            var16 = _closure1_slot4;
            var11 = _closure1_slot1;
            var9 = 27;
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
            if(!var11) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var17 = _closure1_slot4;
            var16 = _closure1_slot3;
            var12 = {};
            var18 = var15.disabledReasonContainer;
            var12['style'] = var18;
            var20 = _closure1_slot4;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var18 = 28;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var21 = var21.disabledReason;
            var18['text'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var12['children'] = var18;
            var11 = var17.bind(var5)(var16, var12);
case 39:
            var9[1] = var11;
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
                var6 = _closure2_slot0;
                var3['guildId'] = var6;
                var3['powerup'] = var1;
                var2 = _closure2_slot1;
                var2 = var2.forceStaticImages;
                var3['forceStaticImage'] = var2;
                var2 = var1.skuId;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 37:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();