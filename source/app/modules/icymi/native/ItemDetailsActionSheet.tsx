// app/modules/icymi/native/ItemDetailsActionSheet.tsx
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['height'] = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['divider'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ItemDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ItemDetailsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.channelId;
            var _closure2_slot1 = var3;
            var2 = var2.id;
            var _closure2_slot2 = var2;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 8;
            var2 = var3[var5];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var8, var2);
            var2 = var3[var5];
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var8, var2);
            var2 = _closure1_slot1;
            var8 = 9;
            var8 = var3[var8];
            var9 = var2.bind(var4)(var8);
            var8 = true;
            var11 = var9.bind(var4)(var13, var8);
            var5 = var3[var5];
            var8 = var6.bind(var4)(var5);
            var6 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getDehydratedItem;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var12 = var6.bind(var8)(var5, var1);
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'show_icymi_debug_scores';
            var8 = var2.bind(var4)(var1);
            var9 = null;
            if(!(var9 == var18)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var9 != var13;
            var14 = undefined;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 12;
            var1 = var10[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.AvatarSizes;
            var5 = var5.LARGE;
            var1['size'] = var5;
            var1['channel'] = var13;
            var14 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 11;
            var1 = var10[var5];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var18;
            var6 = _closure1_slot0;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.GuildIconSizes;
            var5 = var5.LARGE;
            var1['size'] = var5;
            var14 = var3.bind(var4)(var2, var1);
case 6:
            var1 = _closure1_slot10;
            var19 = var1.bind(var4)();
            var15 = var9 != var13;
            if(!var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var15 = var9 != var18;
case 8:
            if(!var15) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isChannelCustomScoreEligible;
            var15 = var1.bind(var2)(var13);
case 10:
            var3 = _closure1_slot9;
            var6 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 14;
            var1 = var16[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {'showGradient': true, 'startExpanded': true};
            var10 = _closure1_slot7;
            var5 = 15;
            var5 = var16[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ActionSheetIconHeader;
            var5 = {};
            var5['icon'] = var14;
            var5['title'] = var11;
            var11 = var9 == var18;
            var14 = undefined;
            if(var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = var18.name;
case 12:
            var16 = var9 != var14;
            var11 = '';
            if(!var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var11 = var14;
case 14:
            var5['subtitle'] = var11;
            var5 = var10.bind(var4)(var6, var5);
            var1['header'] = var5;
            var6 = var15;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var11 = _closure1_slot7;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 16;
            var5 = var14[var5];
            var5 = var10.bind(var4)(var5);
            var10 = var5.ChannelScoreSettings;
            var5 = {};
            var5['channel'] = var13;
            var5['guild'] = var18;
            var6 = var11.bind(var4)(var10, var5);
case 16:
            var5 = new Array(3);
            var5[0] = var6;
            var6 = var9 != var12;
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var9 != var18;
case 18:
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var13 = _closure1_slot9;
            var11 = _closure1_slot8;
            var10 = {};
            if(!var15) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var17 = _closure1_slot7;
            var16 = _closure1_slot3;
            var14 = {};
            var19 = var19.divider;
            var14['style'] = var19;
            var15 = var17.bind(var4)(var16, var14);
case 22:
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 16;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.GuildScoreSettings;
            var15 = {};
            var15['guild'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var10['children'] = var14;
            var6 = var13.bind(var4)(var11, var10);
case 20:
            var5[1] = var6;
            var10 = var9 != var12;
            var6 = null;
            if(!var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var6 = null;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var9 = _closure1_slot7;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 17;
            var7 = var13[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var10 = 'Debug details';
            var7['title'] = var10;
            var10 = 18;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableRow;
            var10 = {};
            var14 = var12.score;
            var13 = 'Total Score: ';
            var13 = var13 + var14;
            var10['label'] = var13;
            var13 = global;
            var14 = var13.JSON;
            var13 = var14.stringify;
            var12 = var12.score_components;
            var12 = var13.bind(var14)(var12);
            var10['subLabel'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 24:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();