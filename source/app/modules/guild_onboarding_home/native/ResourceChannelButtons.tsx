// app/modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'padding': 12};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['wrapper'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['buttonWrapper'] = var9;
    var9 = {};
    var12 = 8;
    var9['width'] = var12;
    var4['spacer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['color'] = var10;
    var4['iconColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/ResourceChannelButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ResourceChannelButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var5 = undefined;
            var3 = var4.bind(var5)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            var _closure2_slot1 = var1;
            var3 = _closure1_slot8;
            var17 = var3.bind(var5)();
            var3 = 7;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.usePreviousAndNextResourceChannel;
            var4 = var2.guild_id;
            var3 = var2.id;
            var6 = var6.bind(var7)(var4, var3);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var8 = var4[var3];
            var _closure2_slot2 = var8;
            var3 = 1;
            var14 = var4[var3];
            var _closure2_slot3 = var14;
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var6 = var2.guild_id;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function(arg1) {
                var3 = _closure2_slot1;
                var1 = var3.goBack;
                var1 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.selectHomeResourceChannel;
                var2 = _closure2_slot0;
                var3 = var2.guild_id;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var _closure2_slot4 = var1;
            var7 = null;
            if(!(var7 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7 == var14;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var17.wrapper;
            var2['style'] = var6;
            var9 = var7 != var8;
            if(!var9) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var11 = _closure1_slot6;
            var10 = _closure1_slot5;
            var6 = {};
            var12 = var17.buttonWrapper;
            var6['style'] = var12;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 9;
            var12 = var22[var12];
            var12 = var19.bind(var5)(var12);
            var15 = var12.Button;
            var12 = {};
            var18 = 'secondary';
            var12['variant'] = var18;
            var18 = var8.title;
            var12['text'] = var18;
            var18 = 10;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Icon;
            var18 = {};
            var20 = var17.iconColor;
            var20 = var20.color;
            var18['color'] = var20;
            var21 = _closure1_slot1;
            var20 = 11;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var18['source'] = var20;
            var18 = var11.bind(var5)(var19, var18);
            var12['icon'] = var18;
            var18 = function onPress() {
                var3 = _closure2_slot4;
                var1 = _closure2_slot2;
                var2 = var1.channelId;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var18;
            var18 = true;
            var12['grow'] = var18;
            var12 = var11.bind(var5)(var15, var12);
            var6['children'] = var12;
            var9 = var11.bind(var5)(var10, var6);
case 5:
            var6 = new Array(3);
            var6[0] = var9;
            var8 = var7 != var8;
            if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var7 != var14;
case 7:
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot6;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var17.spacer;
            var9['style'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 9:
            var6[1] = var8;
            var7 = var7 != var14;
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot6;
            var9 = _closure1_slot5;
            var8 = {};
            var11 = var17.buttonWrapper;
            var8['style'] = var11;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 9;
            var11 = var18[var11];
            var11 = var15.bind(var5)(var11);
            var12 = var11.Button;
            var11 = {};
            var14 = var14.title;
            var11['text'] = var14;
            var14 = 10;
            var14 = var18[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Icon;
            var14 = {};
            var17 = var17.iconColor;
            var17 = var17.color;
            var14['color'] = var17;
            var17 = _closure1_slot1;
            var16 = 12;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var14['source'] = var16;
            var14 = var10.bind(var5)(var15, var14);
            var11['icon'] = var14;
            var14 = 'end';
            var11['iconPosition'] = var14;
            var13 = function onPress() {
                var3 = _closure2_slot4;
                var1 = _closure2_slot3;
                var2 = var1.channelId;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var11['onPress'] = var13;
            var13 = true;
            var11['grow'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 11:
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();