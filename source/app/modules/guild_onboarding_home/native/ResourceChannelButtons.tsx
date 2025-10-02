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
    var4 = 1;
    var7 = var6[var4];
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
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var7['wrapper'] = var10;
    var10 = {'paddingHorizontal': 12, 'flex': 1};
    var7['button'] = var10;
    var10 = {};
    var13 = 8;
    var10['width'] = var13;
    var7['spacer'] = var10;
    var10 = {'flex': 1, 'textAlign': 'center'};
    var7['buttonText'] = var10;
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
            var _closure2_slot1 = var16;
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
            var9 = var2[var1];
            var _closure2_slot2 = var9;
            var1 = 1;
            var12 = var2[var1];
            var _closure2_slot3 = var12;
            var7 = null;
            if(!(var7 == var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var16.wrapper;
            var2['style'] = var6;
            var10 = var7 != var9;
            if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var14 = _closure1_slot5;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var15 = 7;
            var6 = var18[var15];
            var13 = var17.bind(var5)(var6);
            var6 = {};
            var19 = var16.button;
            var6['style'] = var19;
            var19 = var16.buttonText;
            var6['textStyle'] = var19;
            var15 = var18[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.Colors;
            var15 = var15.GREY;
            var6['color'] = var15;
            var15 = var9.title;
            var6['text'] = var15;
            var15 = function renderIcon() {
                var4 = _closure1_slot5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var5 = var5.iconColor;
                var5 = var5.color;
                var1['color'] = var5;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderIcon'] = var15;
            var15 = function onPress() {
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
            var6['onPress'] = var15;
            var10 = var14.bind(var5)(var13, var6);
case 5:
            var6 = new Array(3);
            var6[0] = var10;
            var9 = var7 != var9;
            if(!var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var7 != var12;
case 7:
            if(!var9) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var14 = _closure1_slot5;
            var13 = _closure1_slot4;
            var10 = {};
            var15 = var16.spacer;
            var10['style'] = var15;
            var9 = var14.bind(var5)(var13, var10);
case 9:
            var6[1] = var9;
            var7 = var7 != var12;
            if(!var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot5;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 7;
            var8 = var15[var13];
            var9 = var14.bind(var5)(var8);
            var8 = {};
            var17 = var16.button;
            var8['style'] = var17;
            var16 = var16.buttonText;
            var8['textStyle'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.Colors;
            var13 = var13.BRAND;
            var8['color'] = var13;
            var12 = var12.title;
            var8['text'] = var12;
            var12 = function renderRightIcon() {
                var4 = _closure1_slot5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var5 = var5.iconColor;
                var5 = var5.color;
                var1['color'] = var5;
                var5 = 11;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var1['source'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var8['renderRightIcon'] = var12;
            var11 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectHomeResourceChannel;
                var2 = _closure2_slot0;
                var2 = var2.guild_id;
                var1 = _closure2_slot3;
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8['onPress'] = var11;
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