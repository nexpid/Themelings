// app/modules/checkpoint/native/components/screens/CheckpointEmojiScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.TouchableOpacity;
        var _closure1_slot5 = var7;
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.CheckpointSlides;
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot10 = var7;
        var4 = var4.jsxs;
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {'position': 'relative', 'top': 80};
        var4['emojiCube'] = var9;
        var9 = {'bottom': 100, 'position': 'absolute', 'maxWidth': '100%'};
        var4['container'] = var9;
        var10 = 'center';
        var12 = 8;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
        var4['title'] = var9;
        var9 = {};
        var13 = 800;
        var9['fontWeight'] = var13;
        var4['titleText'] = var9;
        var14 = 20;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'gap': 8, 'width': '100%', 'marginTop': 20, 'flexWrap': 'wrap'};
        var4['emojis'] = var9;
        var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
        var4['emojiContainer'] = var9;
        var9 = {'width': 20, 'height': 20};
        var4['emoji'] = var9;
        var9 = {'width': 20, 'height': 20};
        var4['customEmoji'] = var9;
        var9 = {};
        var13 = var6[var12];
        var15 = var5.bind(var1)(var13);
        var13 = var15.isIOS;
        var15 = var13.bind(var15)();
        var13 = 16;
        if(!var15) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var13 = var14;
case 2:
        var9['fontSize'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isIOS;
        var13 = var12.bind(var13)();
        var12 = undefined;
        if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var12 = 24;
case 4:
        var9['lineHeight'] = var12;
        var9['textAlign'] = var10;
        var10 = 9;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.INTERACTIVE_NORMAL;
        var9['color'] = var12;
        var4['textEmoji'] = var9;
        var9 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var9['marginBottom'] = var10;
        var4['titleSpacing'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot12 = var4;
        var4 = 25;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/checkpoint/native/components/screens/CheckpointEmojiScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function CheckpointEmojiScreen() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure1_slot12;
                var4 = undefined;
                var14 = var1.bind(var4)();
                var _closure2_slot0 = var14;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var17 = var1.insets;
                var3 = _closure1_slot0;
                var1 = 11;
                var2 = var5[var1];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var1 = _closure1_slot7;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var2 = var7.bind(var8)(var6, var2);
                var _closure2_slot1 = var2;
                var1 = var5[var1];
                var7 = var3.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var2 = _closure1_slot8;
                    var1 = var2.getCheckpointData;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var6.bind(var7)(var2, var1);
                var1 = var1.emojis;
                var21 = var1.numEmojisSent;
                var15 = var1.emojis;
                var6 = _closure1_slot4;
                var2 = var6.useContext;
                var1 = 12;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CheckpointColorContext;
                var1 = var2.bind(var6)(var1);
                var2 = 13;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useToken;
                var1 = var1.primaryColor;
                var18 = var2.bind(var3)(var1);
                var1 = 0;
                var11 = var1 === var21;
                if(var11) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var15.length;
                var11 = var1 === var2;
case 6:
                var5 = _closure1_slot4;
                var3 = var5.useState;
                if(var11) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = var15[var1];
                _fun0002_ip = 10; continue _fun0002;
case 8:
                var2 = {'name': '😢', 'animated': false};
case 10:
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot3;
                var2 = 2;
                var2 = var3.bind(var4)(var5, var2);
                var8 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                if(var11) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var1 = 15;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var12 = var1.ReactionIcon;
                _fun0002_ip = 13; continue _fun0002;
case 11:
                var1 = 14;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var12 = var1.NoReactionIcon;
case 13:
                var3 = _closure1_slot11;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var5 = _closure1_slot9;
                var5 = var5.EMOJIS;
                var1['slide'] = var5;
                var7 = _closure1_slot10;
                var5 = 17;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var16 = var14.emojiCube;
                var9 = new Array(2);
                var9[0] = var16;
                var16 = {};
                var17 = var17.top;
                var16['marginTop'] = var17;
                var9[1] = var16;
                var5['style'] = var9;
                var5['emoji'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var8 = var14.container;
                var6['style'] = var8;
                var8 = {};
                var16 = var14.title;
                var9 = new Array(2);
                var9[0] = var16;
                var16 = undefined;
                if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var16 = var14.titleSpacing;
case 14:
                var9[1] = var16;
                var8['style'] = var9;
                var17 = _closure1_slot10;
                var9 = {};
                var16 = 'xs';
                var9['size'] = var16;
                var16 = {};
                var16['tintColor'] = var18;
                var9['style'] = var16;
                var12 = var17.bind(var4)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var18 = 18;
                var12 = var12[var18];
                var16 = var16.bind(var4)(var12);
                var12 = {};
                var19 = 'eyebrow';
                var12['variant'] = var19;
                var19 = var14.titleText;
                var12['style'] = var19;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var19 = 19;
                var22 = var20[var19];
                var22 = var23.bind(var4)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var23 = _closure1_slot1;
                var22 = 20;
                var20 = var20[var22];
                var23 = var23.bind(var4)(var20);
                if(var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var20 = var23.JwFMdL;
                var20 = var24.bind(var25)(var20);
                _fun0002_ip = 18; continue _fun0002;
case 16:
                var23 = var23.vnG9Sx;
                var20 = var24.bind(var25)(var23);
case 18:
                var12['children'] = var20;
                var12 = var17.bind(var4)(var16, var12);
                var9[1] = var12;
                var8['children'] = var9;
                var9 = var3.bind(var4)(var7, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var9 = !var11;
                var12 = var9;
                if(var11) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var20 = _closure1_slot10;
                var17 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 21;
                var16 = var23[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var16['end'] = var21;
                var12 = var20.bind(var4)(var17, var16);
case 19:
                var8[1] = var12;
                var17 = _closure1_slot10;
                var16 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var18];
                var16 = var16.bind(var4)(var12);
                var12 = {};
                var18 = 'heading-lg/medium';
                var12['variant'] = var18;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var19];
                var19 = var20.bind(var4)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = _closure1_slot1;
                var18 = var18[var22];
                var19 = var19.bind(var4)(var18);
                if(var11) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var18 = var19.ZuvPfg;
                var18 = var20.bind(var21)(var18);
                _fun0002_ip = 23; continue _fun0002;
case 21:
                var19 = var19.BHbwK1;
                var18 = var20.bind(var21)(var19);
case 23:
                var12['children'] = var18;
                var12 = var17.bind(var4)(var16, var12);
                var8[2] = var12;
                if(var11) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                var12 = _closure1_slot10;
                var11 = _closure1_slot6;
                var10 = {};
                var14 = var14.emojis;
                var10['style'] = var14;
                var14 = var15.map;
                var13 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var15 = arg1;
                        var5 = arg2;
                        var _closure3_slot0 = var15;
                        var1 = var15.id;
                        var16 = null;
                        var1 = var16 != var1;
                        var4 = undefined;
                        var12 = undefined;
                        if(!var1) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var1 = var3[var1];
                        var3 = var2.bind(var4)(var1);
                        var2 = var3.getEmojiURL;
                        var1 = {};
                        var7 = var15.id;
                        var1['id'] = var7;
                        var7 = _closure2_slot1;
                        var7 = !var7;
                        if(!var7) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var7 = var15.animated;
case 28:
                        var1['animated'] = var7;
                        var7 = 48;
                        var1['size'] = var7;
                        var12 = var2.bind(var3)(var1);
case 26:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot5;
                        var1 = {};
                        var6 = function onPress() {
                            var3 = _closure2_slot2;
                            var2 = _closure3_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var1['onPress'] = var6;
                        var8 = _closure1_slot11;
                        var11 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var6 = 23;
                        var6 = var17[var6];
                        var7 = var11.bind(var4)(var6);
                        var6 = {};
                        var14 = _closure2_slot0;
                        var9 = var14.emojiContainer;
                        var6['style'] = var9;
                        var9 = 24;
                        var9 = var17[var9];
                        var11 = var11.bind(var4)(var9);
                        var9 = {};
                        var17 = var14.emoji;
                        var9['style'] = var17;
                        var17 = var14.customEmoji;
                        var9['fastImageStyle'] = var17;
                        var14 = var14.textEmoji;
                        var9['textEmojiStyle'] = var14;
                        var14 = var15.id;
                        var16 = var16 == var14;
                        var14 = '';
                        if(!var16) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                        var14 = var15.name;
case 30:
                        var9['name'] = var14;
                        var9['src'] = var12;
                        var11 = var3.bind(var4)(var11, var9);
                        var9 = new Array(2);
                        var9[0] = var11;
                        var12 = _closure1_slot11;
                        var11 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var10 = 18;
                        var10 = var14[var10];
                        var11 = var11.bind(var4)(var10);
                        var10 = {};
                        var14 = 'text-sm/bold';
                        var10['variant'] = var14;
                        var13 = _closure2_slot0;
                        var13 = var13.titleText;
                        var10['style'] = var13;
                        var13 = 1;
                        var14 = var5 + var13;
                        var13 = ['#'];
                        var13[1] = var14;
                        var10['children'] = var13;
                        var10 = var12.bind(var4)(var11, var10);
                        var9[1] = var10;
                        var6['children'] = var9;
                        var6 = var8.bind(var4)(var7, var6);
                        var1['children'] = var6;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    }
                };
                var13 = var14.bind(var15)(var13);
                var10['children'] = var13;
                var9 = var12.bind(var4)(var11, var10);
case 24:
                var8[3] = var9;
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
    }
})();