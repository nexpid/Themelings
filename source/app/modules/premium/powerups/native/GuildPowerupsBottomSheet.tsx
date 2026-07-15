// app/modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function GuildPowerupsBottomSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.guildId;
            var16 = var1.powerup;
            var1 = _closure1_slot11;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.bind(var4)(var6, var16);
            var1 = 8;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var1 = 'GuildPowerupsBottomSheet';
            var6 = var5.bind(var4)(var6, var16, var1);
            var5 = _closure1_slot0;
            var1 = 9;
            var1 = var3[var1];
            var5 = var5.bind(var4)(var1);
            var1 = var5.useCalculatePowerupCardStatus;
            var14 = var1.bind(var5)(var16, var7, var6);
            var1 = 10;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var8 = true;
            var1 = var1.bind(var4)(var16, var8);
            var2 = null;
            var2 = var2 != var1;
            var9 = '';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var1;
case 2:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var18 = var3.bind(var5)(var2, var1);
            var2 = var16.skuId;
            var1 = _closure1_slot5;
            var15 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = '+';
case 4:
            var6 = var16.skuId;
            var5 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var11 = var16.type;
            var7 = _closure1_slot6;
            var7 = var7.LEVEL;
            if(!(var11 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var6 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot8;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 14;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['imageUrl'] = var9;
            var9 = var13.image;
            var5['style'] = var9;
            var5['isAnimated'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var8 = _closure1_slot8;
            var7 = _closure1_slot3;
            var5 = {};
            var9 = var13.image;
            var5['style'] = var9;
            var12 = _closure1_slot8;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 13;
            var9 = var17[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.GameServerHostingRive;
            var9 = {};
            var17 = 'SM_Auto';
            var9['stateMachine'] = var17;
            var17 = {};
            var17['reducedMotion'] = var18;
            var9['dataBinding'] = var17;
            var9 = var12.bind(var4)(var11, var9);
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 10:
            _fun0001_ip = 11; continue _fun0001;
case 6:
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 12;
            var5 = var9[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var9 = var13.gemContainer;
            var5['style'] = var9;
            var6 = var8.bind(var4)(var7, var5);
case 11:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var13.headerContainer;
            var6['style'] = var9;
            var18 = _closure1_slot8;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 15;
            var9 = var17[var9];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'heading-xl/bold', 'accessibilityRole': 'header'};
            var19 = var16.title;
            var9['children'] = var19;
            var12 = var18.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot8;
            var10 = 16;
            var10 = var17[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.GuildPowerupsCardFooter;
            var10 = {};
            var16 = var16.cost;
            var10['cost'] = var16;
            var10['costDecorator'] = var15;
            var10['status'] = var14;
            var13 = var13.statusContainer;
            var10['style'] = var13;
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
    var _closure1_slot12 = var1;
    var1 = function GuildPowerupsBottomSheetLevelBody(arg1) {
        var1 = arg1;
        var3 = var1.powerup;
        var2 = _closure1_slot11;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var _closure2_slot0 = var6;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 17;
        var2 = var8[var2];
        var2 = var7.bind(var4)(var2);
        var7 = var2.bind(var4)(var3);
        var3 = _closure1_slot8;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var6.levelContainer;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 18;
            var2 = var12[var2];
            var5 = undefined;
            var4 = var8.bind(var5)(var2);
            var3 = var4.getIconForPerk;
            var2 = var1.perkIcon;
            var9 = var3.bind(var4)(var2);
            var4 = _closure1_slot9;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = _closure2_slot0;
            var6 = var10.perkContainer;
            var2['style'] = var6;
            var11 = _closure1_slot8;
            var6 = 15;
            var6 = var12[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {};
            var12 = var10.perkText;
            var6['style'] = var12;
            var12 = 'text-md/medium';
            var6['variant'] = var12;
            var12 = var1.description;
            var6['children'] = var12;
            var8 = var11.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var8 = _closure1_slot8;
            var7 = {};
            var10 = var10.perkIcon;
            var7['style'] = var10;
            var7 = var8.bind(var5)(var9, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var9 = var1.perkIcon;
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var7 = 'perk-';
            var6 = arg2;
            var1 = '-';
            var1 = var8.bind(var7)(var6, var1, var9);
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function GuildPowerupsBottomSheetBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.powerup;
            var1 = _closure1_slot11;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = var18.type;
            var1 = _closure1_slot6;
            var1 = var1.PERK;
            if(!(var1 !== var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot6;
            var1 = var1.LEVEL;
            if(!(var1 !== var2)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            return var4;
case 14:
            var3 = _closure1_slot8;
            var2 = _closure1_slot13;
            var1 = {};
            var1['powerup'] = var18;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 12:
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var11 = 15;
            var5 = var5[var11];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var8 = var10.description;
            var5['style'] = var8;
            var8 = 'text-md/medium';
            var5['variant'] = var8;
            var8 = var18.description;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = var18.deactivationCooldownPeriodDays;
            var6 = null;
            var6 = var6 != var7;
            if(!var6) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var8 = var18.deactivationCooldownPeriodDays;
            var7 = 0;
            var6 = var8 > var7;
case 16:
            if(!var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var9 = _closure1_slot9;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var10.cooldownInfo;
            var7['style'] = var10;
            var14 = _closure1_slot8;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 19;
            var10 = var19[var10];
            var10 = var16.bind(var4)(var10);
            var13 = var10.CircleInformationIcon;
            var10 = {};
            var15 = 'xs';
            var10['size'] = var15;
            var15 = _closure1_slot1;
            var17 = 6;
            var17 = var19[var17];
            var17 = var15.bind(var4)(var17);
            var17 = var17.colors;
            var17 = var17.TEXT_MUTED;
            var10['color'] = var17;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = _closure1_slot8;
            var11 = var19[var11];
            var11 = var16.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var14 = 20;
            var14 = var19[var14];
            var14 = var16.bind(var4)(var14);
            var17 = var14.intl;
            var16 = var17.formatToPlainString;
            var14 = 21;
            var14 = var19[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.GMhQcE;
            var14 = {};
            var18 = var18.deactivationCooldownPeriodDays;
            var14['cooldownDays'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 18:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function GuildPowerupsBottomSheetFooter(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var7 = var1.powerup;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot11;
            var18 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 22;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.bind(var4)(var3);
            var2 = 23;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3, var7);
            var6 = var2.showToggleButton;
            var8 = var2.showConfigureButton;
            var13 = var2.isPowerupActive;
            var _closure2_slot0 = var13;
            if(!var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var5 = var7.skuId;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 24;
            var2 = var11[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.GUILD_POWERUP_TAG_SKU_ID;
            var2 = var5 !== var2;
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 2:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 25;
            var5 = var11[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.canUseMobileServerTagSettings;
            var2 = var5.bind(var9)(var3);
case 22:
            var8 = var2;
case 20:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 26;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3, var7, var13);
            var11 = var2.disabled;
            var19 = var2.reason;
            var2 = 27;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3, var7);
            var12 = var2.onActivate;
            _closure2_slot1 = var12;
            var12 = var2.isLoading;
            var2 = 28;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3, var7);
            _closure2_slot2 = var2;
            var2 = 29;
            var2 = var9[var2];
            var2 = var5.bind(var4)(var2);
            var17 = var2.bind(var4)(var3, var7);
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = null;
            return var1;
case 23:
            var3 = _closure1_slot7;
            var2 = var3.has;
            var1 = var7.skuId;
            var1 = var2.bind(var3)(var1);
            var9 = !var8;
            if(!var9) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var9 = var13;
case 25:
            if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = var7.type;
            var2 = _closure1_slot6;
            var2 = var2.PERK;
            var9 = var3 === var2;
case 27:
            if(!var9) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var9 = var1;
case 29:
            if(var9) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var7.skuId;
            var1 = _closure1_slot5;
            var9 = var2 === var1;
case 31:
            var3 = _closure1_slot9;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var18.footerContainer;
            var1['style'] = var5;
            if(!var9) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var16 = _closure1_slot8;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var5 = 15;
            var5 = var23[var5];
            var5 = var20.bind(var4)(var5);
            var15 = var5.Text;
            var5 = {};
            var18 = var18.description;
            var5['style'] = var18;
            var18 = 'text-md/bold';
            var5['variant'] = var18;
            var18 = 20;
            var18 = var23[var18];
            var18 = var20.bind(var4)(var18);
            var21 = var18.intl;
            var20 = var21.string;
            var22 = _closure1_slot1;
            var18 = 21;
            var18 = var23[var18];
            var18 = var22.bind(var4)(var18);
            var18 = var18.jo5++h;
            var18 = var20.bind(var21)(var18);
            var5['children'] = var18;
            var9 = var16.bind(var4)(var15, var5);
case 33:
            var5 = new Array(4);
            var5[0] = var9;
            var9 = var11;
            if(!var9) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var15 = null;
            var9 = var15 != var19;
case 35:
            if(!var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var18 = _closure1_slot8;
            var16 = _closure1_slot1;
            var20 = _closure1_slot2;
            var15 = 30;
            var15 = var20[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['text'] = var19;
            var9 = var18.bind(var4)(var16, var15);
case 37:
            var5[1] = var9;
            if(!var8) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var16 = _closure1_slot8;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 31;
            var9 = var22[var9];
            var9 = var19.bind(var4)(var9);
            var15 = var9.Button;
            var9 = {};
            var18 = 'primary';
            var9['variant'] = var18;
            var18 = 20;
            var18 = var22[var18];
            var18 = var19.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var21 = _closure1_slot1;
            var18 = 21;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.g5Ds69;
            var18 = var19.bind(var20)(var18);
            var9['text'] = var18;
            var9['onPress'] = var17;
            var8 = var16.bind(var4)(var15, var9);
case 39:
            var5[2] = var8;
            if(!var6) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var8 = var7.skuId;
            var7 = _closure1_slot5;
            var6 = var8 !== var7;
case 41:
            if(!var6) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var9 = _closure1_slot8;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var7 = 31;
            var7 = var15[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Button;
            var7 = {};
            var15 = 'primary';
            if(!var13) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var15 = 'secondary';
case 45:
            var7['variant'] = var15;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 20;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var17 = _closure1_slot1;
            var14 = 21;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            if(var13) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var13 = var14.gSxlHf;
            var13 = var15.bind(var16)(var13);
            _fun0003_ip = 49; continue _fun0003;
case 47:
            var14 = var14.TZsu1U;
            var13 = var15.bind(var16)(var14);
case 49:
            var7['text'] = var13;
            var7['loading'] = var12;
            var7['disabled'] = var11;
            var10 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 52; continue _fun0004;
case 50:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 52:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 43:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildPowerupType;
    var _closure1_slot6 = var7;
    var4 = var4.GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_24;
    var9['marginTop'] = var12;
    var12 = 'center';
    var9['alignItems'] = var12;
    var4['headerContainer'] = var9;
    var9 = {};
    var9['justifyContent'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['statusContainer'] = var9;
    var9 = {};
    var13 = 'column';
    var9['flexDirection'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginTop'] = var13;
    var4['levelContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var4['perkContainer'] = var9;
    var9 = {'width': 20, 'height': 20};
    var4['perkIcon'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['marginStart'] = var13;
    var4['perkText'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['marginTop'] = var13;
    var4['footerContainer'] = var9;
    var9 = {'width': '100%', 'height': 160};
    var4['image'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var9['marginHorizontal'] = var13;
    var9['textAlign'] = var12;
    var4['description'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var4['cooldownInfo'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_16;
    var9['marginTop'] = var10;
    var4['gemContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsBottomSheet(arg1) {
        var1 = arg1;
        var13 = var1.guildId;
        var12 = var1.powerup;
        var1 = _closure1_slot11;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 32;
        var3 = var5[var1];
        var6 = var2.bind(var4)(var3);
        var3 = var6.useLogPowerupModalOpened;
        var1 = var5[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.ModalType;
        var1 = var1.DETAIL;
        var1 = var3.bind(var6)(var13, var12, var1);
        var3 = _closure1_slot8;
        var1 = 33;
        var1 = var5[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var5 = true;
        var1['startExpanded'] = var5;
        var7 = _closure1_slot9;
        var6 = _closure1_slot3;
        var5 = {};
        var8 = var8.container;
        var5['style'] = var8;
        var11 = _closure1_slot8;
        var10 = _closure1_slot12;
        var8 = {};
        var8['guildId'] = var13;
        var8['powerup'] = var12;
        var10 = var11.bind(var4)(var10, var8);
        var8 = new Array(3);
        var8[0] = var10;
        var14 = _closure1_slot8;
        var11 = _closure1_slot14;
        var10 = {};
        var10['guildId'] = var13;
        var10['powerup'] = var12;
        var10 = var14.bind(var4)(var11, var10);
        var8[1] = var10;
        var11 = _closure1_slot8;
        var10 = _closure1_slot15;
        var9 = {};
        var9['guildId'] = var13;
        var9['powerup'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var8[2] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();