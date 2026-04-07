// app/modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'display': 'flex', 'flexDirection': 'row', 'padding': 12};
    var4 = 12;
    var11 = 5;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var14;
    var7['wrapper'] = var10;
    var10 = {};
    var10['flex'] = var13;
    var7['buttonWrapper'] = var10;
    var10 = {};
    var13 = 8;
    var10['width'] = var13;
    var7['spacer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['color'] = var11;
    var7['iconColor'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/ResourceChannelButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ResourceChannelButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot7;
            var5 = undefined;
            var16 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.usePreviousAndNextResourceChannel;
            var2 = var1.guild_id;
            var1 = var1.id;
            var3 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var1 = 0;
            var8 = var2[var1];
            var _closure2_slot1 = var8;
            var1 = 1;
            var15 = var2[var1];
            var _closure2_slot2 = var15;
            var7 = null;
            if(!(var7 == var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var16.wrapper;
            var2['style'] = var6;
            var9 = var7 != var8;
            if(!var9) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var11 = _closure1_slot5;
            var10 = _closure1_slot4;
            var6 = {};
            var12 = var16.buttonWrapper;
            var6['style'] = var12;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 7;
            var12 = var22[var12];
            var12 = var17.bind(var5)(var12);
            var17 = var12.Button;
            var12 = {};
            var18 = 'secondary';
            var12['variant'] = var18;
            var18 = var8.title;
            var12['text'] = var18;
            var21 = _closure1_slot1;
            var18 = 8;
            var18 = var22[var18];
            var19 = var21.bind(var5)(var18);
            var18 = {};
            var20 = var16.iconColor;
            var20 = var20.color;
            var18['color'] = var20;
            var20 = 9;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var18['source'] = var20;
            var18 = var11.bind(var5)(var19, var18);
            var12['icon'] = var18;
            var18 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectHomeResourceChannel;
                var2 = _closure2_slot0;
                var2 = var2.guild_id;
                var1 = _closure2_slot1;
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12['onPress'] = var18;
            var18 = true;
            var12['grow'] = var18;
            var12 = var11.bind(var5)(var17, var12);
            var6['children'] = var12;
            var9 = var11.bind(var5)(var10, var6);
case 5:
            var6 = new Array(3);
            var6[0] = var9;
            var8 = var7 != var8;
            if(!var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = var7 != var15;
case 7:
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var11 = _closure1_slot5;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var16.spacer;
            var9['style'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 9:
            var6[1] = var8;
            var7 = var7 != var15;
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot5;
            var9 = _closure1_slot4;
            var8 = {};
            var11 = var16.buttonWrapper;
            var8['style'] = var11;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 7;
            var11 = var18[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Button;
            var11 = {};
            var15 = var15.title;
            var11['text'] = var15;
            var17 = _closure1_slot1;
            var14 = 8;
            var14 = var18[var14];
            var15 = var17.bind(var5)(var14);
            var14 = {};
            var16 = var16.iconColor;
            var16 = var16.color;
            var14['color'] = var16;
            var16 = 11;
            var16 = var18[var16];
            var16 = var17.bind(var5)(var16);
            var14['source'] = var16;
            var14 = var10.bind(var5)(var15, var14);
            var11['icon'] = var14;
            var14 = 'end';
            var11['iconPosition'] = var14;
            var13 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectHomeResourceChannel;
                var2 = _closure2_slot0;
                var2 = var2.guild_id;
                var1 = _closure2_slot2;
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var2, var1);
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