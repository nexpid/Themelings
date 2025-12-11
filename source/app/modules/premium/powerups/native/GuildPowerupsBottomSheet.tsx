// app/modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function GuildPowerupsBottomSheetHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var15 = var1.powerup;
            var1 = _closure1_slot7;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.bind(var4)(var5, var15);
            var5 = _closure1_slot0;
            var1 = 6;
            var1 = var3[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useCalculatePowerupCardStatus;
            var1 = false;
            var14 = var5.bind(var6)(var15, var7, var1);
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = true;
            var1 = var2.bind(var4)(var15, var1);
            var2 = null;
            var2 = var2 != var1;
            var8 = '';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var1;
case 2:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = _closure1_slot5;
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 8;
            var5 = var16[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['imageUrl'] = var8;
            var8 = var13.image;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var13.headerContainer;
            var6['style'] = var9;
            var17 = _closure1_slot5;
            var11 = _closure1_slot0;
            var9 = 9;
            var9 = var16[var9];
            var9 = var11.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {};
            var18 = 'heading-xl/bold';
            var9['variant'] = var18;
            var18 = var15.title;
            var9['children'] = var18;
            var12 = var17.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot5;
            var10 = 10;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.GuildPowerupsCardFooter;
            var10 = {};
            var15 = var15.cost;
            var10['cost'] = var15;
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
    var _closure1_slot8 = var1;
    var1 = function GuildPowerupsBottomSheetLevelBody(arg1) {
        var1 = arg1;
        var3 = var1.powerup;
        var2 = _closure1_slot7;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var _closure2_slot0 = var6;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 11;
        var2 = var8[var2];
        var2 = var7.bind(var4)(var2);
        var7 = var2.bind(var4)(var3);
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var6.levelContainer;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            var1 = arg1;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var5 = undefined;
            var4 = var8.bind(var5)(var2);
            var3 = var4.getIconForPerk;
            var2 = var1.perkIcon;
            var9 = var3.bind(var4)(var2);
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = _closure2_slot0;
            var6 = var10.perkContainer;
            var2['style'] = var6;
            var11 = _closure1_slot5;
            var6 = 9;
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
            var8 = _closure1_slot5;
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
    var _closure1_slot9 = var1;
    var1 = function GuildPowerupsBottomSheetBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.powerup;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = var5.type;
            var2 = _closure1_slot4;
            var2 = var2.PERK;
            if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = _closure1_slot4;
            var2 = var2.LEVEL;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            return var4;
case 6:
            var7 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var2['powerup'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 4:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {};
            var6 = var6.description;
            var1['style'] = var6;
            var6 = 'text-md/medium';
            var1['variant'] = var6;
            var5 = var5.description;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function GuildPowerupsBottomSheetFooter(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.powerup;
            var1 = _closure1_slot7;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var3, var2);
            var6 = var1.showToggleButton;
            var7 = var1.showConfigureButton;
            var12 = var1.isPowerupActive;
            var _closure2_slot0 = var12;
            var1 = 14;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)(var3, var2);
            var11 = var1.isLoading;
            var2 = var1.onActivate;
            var _closure2_slot1 = var2;
            var1 = var1.onDeactivate;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.footerContainer;
            var1['style'] = var5;
            if(!var7) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var9 = _closure1_slot5;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var5 = 15;
            var5 = var18[var5];
            var5 = var15.bind(var4)(var5);
            var8 = var5.Button;
            var5 = {};
            var14 = 'primary';
            var5['variant'] = var14;
            var14 = 16;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var17 = _closure1_slot1;
            var14 = 17;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.g5Ds69;
            var14 = var15.bind(var16)(var14);
            var5['text'] = var14;
            var14 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var5['onPress'] = var14;
            var7 = var9.bind(var4)(var8, var5);
case 8:
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Button;
            var7 = {};
            var14 = 'primary';
            if(!var12) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var14 = 'secondary';
case 12:
            var7['variant'] = var14;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 16;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var16 = _closure1_slot1;
            var13 = 17;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            if(var12) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var12 = var13.gSxlHf;
            var12 = var14.bind(var15)(var12);
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var13 = var13.TZsu1U;
            var12 = var14.bind(var15)(var13);
case 16:
            var7['text'] = var12;
            var7['loading'] = var11;
            var10 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 19; continue _fun0004 }
case 21:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var7['onPress'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 10:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var4.GuildPowerupType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['padding'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9['gap'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9['marginTop'] = var10;
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['headerContainer'] = var9;
    var9 = {};
    var9['justifyContent'] = var10;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['statusContainer'] = var9;
    var9 = {};
    var13 = 'column';
    var9['flexDirection'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginTop'] = var13;
    var4['levelContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var4['perkContainer'] = var9;
    var9 = {'width': 20, 'height': 20};
    var4['perkIcon'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginStart'] = var13;
    var4['perkText'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['gap'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['marginTop'] = var13;
    var4['footerContainer'] = var9;
    var9 = {'width': '100%', 'height': 160};
    var4['image'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var9['marginHorizontal'] = var11;
    var9['textAlign'] = var10;
    var4['description'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsBottomSheet(arg1) {
        var1 = arg1;
        var13 = var1.guildId;
        var12 = var1.powerup;
        var1 = _closure1_slot7;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 18;
        var1 = var5[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var7 = _closure1_slot6;
        var6 = _closure1_slot3;
        var5 = {};
        var8 = var8.container;
        var5['style'] = var8;
        var11 = _closure1_slot5;
        var10 = _closure1_slot8;
        var8 = {};
        var8['guildId'] = var13;
        var8['powerup'] = var12;
        var10 = var11.bind(var4)(var10, var8);
        var8 = new Array(3);
        var8[0] = var10;
        var14 = _closure1_slot5;
        var11 = _closure1_slot10;
        var10 = {};
        var10['guildId'] = var13;
        var10['powerup'] = var12;
        var10 = var14.bind(var4)(var11, var10);
        var8[1] = var10;
        var11 = _closure1_slot5;
        var10 = _closure1_slot11;
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