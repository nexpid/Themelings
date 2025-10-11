// app/modules/icymi/native/ICYMIConversationSummaryRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function CardGradient() {
        var3 = _closure1_slot12;
        var4 = undefined;
        var2 = false;
        var6 = var3.bind(var4)(var2);
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 9;
        var2 = var7[var2];
        var9 = var8.bind(var4)(var2);
        var5 = var9.useToken;
        var2 = _closure1_slot1;
        var3 = 8;
        var3 = var7[var3];
        var3 = var2.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.ACTION_SHEET_GRADIENT_BG;
        var10 = var5.bind(var9)(var3);
        var3 = 10;
        var5 = var7[var3];
        var11 = var8.bind(var4)(var5);
        var9 = var11.hexOpacityToRgba;
        var5 = 0;
        var9 = var9.bind(var11)(var10, var5);
        var5 = new Array(3);
        var5[0] = var9;
        var9 = var7[var3];
        var12 = var8.bind(var4)(var9);
        var11 = var12.hexOpacityToRgba;
        var9 = 0.6;
        var9 = var11.bind(var12)(var10, var9);
        var5[1] = var9;
        var3 = var7[var3];
        var9 = var8.bind(var4)(var3);
        var8 = var9.hexOpacityToRgba;
        var3 = 1;
        var3 = var8.bind(var9)(var10, var3);
        var5[2] = var3;
        var3 = _closure1_slot9;
        var1 = 11;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {'style': null, 'locations': null, 'pointerEvents': 'none', 'angle': 180, 'useAngle': true};
        var6 = var6.linearGradient;
        var1['style'] = var6;
        var6 = [0, 0.5, 1];
        var1['locations'] = var6;
        var1['colors'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function ConversationMessages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.topic;
            var _closure2_slot0 = var2;
            var17 = var2.messages;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var1 = var6[var3];
            var5 = undefined;
            var10 = var4.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var9.bind(var10)(var7, var1);
            var _closure2_slot1 = var1;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot8;
                    var4 = var5.isChannelMuted;
                    var2 = _closure2_slot1;
                    var3 = var2.getGuildId;
                    var3 = var3.bind(var2)();
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot12;
            var9 = false;
            var16 = var3.bind(var5)(var9);
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var19 = 0;
            var4 = var3.bind(var4)(var19);
            var3 = _closure1_slot3;
            var10 = 2;
            var3 = var3.bind(var5)(var4, var10);
            var7 = var3[var19];
            var _closure2_slot3 = var7;
            var4 = 1;
            var3 = var3[var4];
            var _closure2_slot4 = var3;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var9);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var10);
            var9 = var3[var19];
            var3 = var3[var4];
            var _closure2_slot5 = var3;
            var11 = _closure1_slot4;
            var6 = var11.useState;
            var3 = var2.id;
            var6 = var6.bind(var11)(var3);
            var3 = _closure1_slot3;
            var3 = var3.bind(var5)(var6, var10);
            var10 = var3[var19];
            var _closure2_slot6 = var10;
            var3 = var3[var4];
            var _closure2_slot7 = var3;
            var6 = _closure1_slot4;
            var4 = var6.useLayoutEffect;
            var3 = new Array(4);
            var3[0] = var10;
            var3[1] = var7;
            var7 = var17.length;
            var3[2] = var7;
            var2 = var2.id;
            var3[3] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    if(!(var3 === var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var3 = _closure2_slot3;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot3;
                    var3 = 460;
                    var2 = var4 >= var3;
case 6:
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0003_ip = 8; continue _fun0003;
case 4:
                    var4 = _closure2_slot4;
                    var3 = undefined;
                    var2 = 0;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot5;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot7;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var7 = null;
            var2 = var7 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = function onLayout(arg1) {
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var6;
            var10 = var16.outerCardContainer;
            var6 = new Array(1);
            var6[0] = var10;
            var2['style'] = var6;
            var6 = 'none';
            var2['pointerEvents'] = var6;
            var11 = _closure1_slot9;
            var10 = _closure1_slot5;
            var6 = {};
            var13 = var16.messagesContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var9;
            if(!var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = var16.messagesContainerGradient;
case 12:
            var12[1] = var13;
            var6['style'] = var12;
            var14 = _closure1_slot9;
            var13 = _closure1_slot5;
            var12 = {};
            var18 = var16.messages;
            var16 = new Array(2);
            var16[0] = var18;
            var18 = {};
            var18['paddingBottom'] = var19;
            var16[1] = var18;
            var12['style'] = var16;
            var16 = var17.map;
            var15 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot2;
                var2['muted'] = var7;
                var6 = _closure2_slot1;
                var2['channel'] = var6;
                var2['message'] = var1;
                var6 = false;
                var2['showTimestamps'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var6['children'] = var12;
            var10 = var11.bind(var5)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            var7 = null;
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = _closure1_slot9;
            var9 = _closure1_slot14;
            var8 = {};
            var7 = var10.bind(var5)(var9, var8);
case 14:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var5 = var7[var2];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var8 = var5.jsxs;
    var _closure1_slot10 = var8;
    var5 = var5.Fragment;
    var _closure1_slot11 = var5;
    var5 = 7;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createICYMIStyles;
    var8 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var1 = {};
            var2 = {};
            var8 = 1;
            var2['flex'] = var8;
            var4 = arg2;
            var3 = 0;
            if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = var7.inset;
case 16:
            var2['paddingLeft'] = var3;
            var1['pressable'] = var2;
            var2 = {};
            var3 = var7.margin;
            var2['marginHorizontal'] = var3;
            var1['container'] = var2;
            var2 = {'maxHeight': 461, 'display': 'flex', 'overflow': 'hidden', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var9 = var6[var3];
            var4 = undefined;
            var9 = var5.bind(var4)(var9);
            var9 = var9.radii;
            var9 = var9.lg;
            var2['borderRadius'] = var9;
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_SUBTLE;
            var2['borderColor'] = var9;
            var1['outerCardContainer'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var9 = 'row';
            var10 = var6[var3];
            var10 = var5.bind(var4)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var2['gap'] = var10;
            var1['channelHeader'] = var2;
            var2 = {};
            var2['flexDirection'] = var9;
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_8;
            var2['gap'] = var9;
            var1['messageContainer'] = var2;
            var2 = {};
            var9 = var7.margin;
            var2['paddingHorizontal'] = var9;
            var9 = var6[var3];
            var9 = var5.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var2['gap'] = var9;
            var1['messages'] = var2;
            var2 = {};
            var2['flex'] = var8;
            var1['messageContent'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'bottom': 0, 'minHeight': 104, 'borderBottomEndRadius': null, 'paddingBottom': 16};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.radii;
            var8 = var8.lg;
            var2['borderBottomEndRadius'] = var8;
            var1['linearGradient'] = var2;
            var2 = {};
            var8 = var6[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['marginTop'] = var8;
            var8 = 'none';
            var2['pointerEvents'] = var8;
            var1['emojiContainer'] = var2;
            var2 = {};
            var8 = var7.margin;
            var2['paddingVertical'] = var8;
            var7 = var7.margin;
            var2['gap'] = var7;
            var1['messagesContainer'] = var2;
            var2 = {'maxHeight': 458, 'marginBottom': 4, 'overflow': 'hidden'};
            var1['messagesContainerGradient'] = var2;
            var2 = {'marginLeft': 22, 'marginBottom': 22, 'flexDirection': 'row', 'alignItems': 'center'};
            var1['viewMoreContainer'] = var2;
            var2 = {'position': 'absolute', 'left': 22, 'bottom': 22, 'flexDirection': 'row', 'alignItems': 'center', 'zIndex': 5};
            var1['viewMoreContainerAbsolute'] = var2;
            var2 = {'height': 20, 'width': 20, 'marginRight': 18};
            var1['viewMoreIcon'] = var2;
            var2 = {'height': 20, 'width': 20};
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_4;
            var2['marginLeft'] = var3;
            var1['rightArrowIcon'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': 24, 'bottom': 0};
            var1['typingArea'] = var2;
            return var1;
        }
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot12 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createICYMIStyles;
    var5 = function(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var5 = arg3;
            var1 = {};
            var2 = {};
            var3 = undefined;
            if(!var6) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = var5;
case 18:
            var2['backgroundColor'] = var3;
            var3 = 'flex-end';
            var2['justifyContent'] = var3;
            var3 = 0;
            var5 = 0;
            if(var6) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var5 = var4.inset;
case 20:
            var2['marginLeft'] = var5;
            var4 = var4.margin;
            var2['paddingVertical'] = var4;
            var2['paddingTop'] = var3;
            var1['footer'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIConversationSummaryRow(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var10 = var1.topic;
            var _closure2_slot0 = var10;
            var13 = var1.disableInteractions;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var22 = function convertToWords(arg1) {
                var2 = arg1;
                var1 = var2.toLowerCase;
                var4 = var1.bind(var2)();
                var3 = var4.replace;
                var2 = /[.,\\/#!$%\^&\*;:{}=\-_`~()]/g;
                var1 = '';
                var4 = var3.bind(var4)(var2, var1);
                var2 = var4.replace;
                var1 = /\s{2,}/g;
                var3 = ' ';
                var2 = var2.bind(var4)(var1, var3);
                var1 = var2.split;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 14;
            var1 = var6[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useDestinationICYMIExperiment;
            var1 = {};
            var7 = 'ICYMIConversationSummaryRow';
            var1['location'] = var7;
            var1 = var3.bind(var4)(var1);
            var3 = var1.isNewCardDesign;
            var4 = var1.isNewHeaderAndInteractions;
            var12 = 15;
            var1 = var6[var12];
            var7 = var2.bind(var5)(var1);
            var1 = var7.useConversationBackgroundColors;
            var1 = var1.bind(var7)();
            var7 = var1.secondaryBackground;
            var1 = _closure1_slot13;
            var21 = var1.bind(var5)(var3, var7);
            var1 = _closure1_slot12;
            var24 = var1.bind(var5)(var3);
            var1 = 12;
            var7 = var6[var1];
            var11 = var2.bind(var5)(var7);
            var9 = var11.useStateFromStores;
            var7 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var9.bind(var11)(var8, var7);
            var _closure2_slot1 = var11;
            var1 = var6[var1];
            var7 = var2.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var5 = _closure2_slot1;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
case 22:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var19 = var6.bind(var7)(var2, var1);
            var _closure2_slot2 = var19;
            var1 = var10.messages;
            var6 = 0;
            var2 = var1[var6];
            var1 = null;
            var7 = var1 == var2;
            var16 = undefined;
            if(var7) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var16 = var2.author;
case 24:
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var2 = var10.messages;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = _closure2_slot0;
                var3 = var1.messages;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.author;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var8.bind(var9)(var2, var7);
            _closure2_slot3 = var2;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = var1 == var19;
            var15 = undefined;
            if(var7) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var15 = var19.id;
case 26:
            var7 = new Array(2);
            var7[0] = var15;
            var7[1] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0008_ip = 28; continue _fun0008 }
case 5:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
case 28:
                    if(!(var6 != var3)) { _fun0008_ip = 29; continue _fun0008 }
case 7:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
case 30:
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var5)(var3, var2);
case 29:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var7);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(5);
            var7[0] = var11;
            var7[1] = var19;
            var2 = var10.id;
            var7[2] = var2;
            var2 = var10.startId;
            var7[3] = var2;
            var2 = var10.type;
            var7[4] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var2 = var10[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.itemInteracted;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0009_ip = 32; continue _fun0009 }
case 30:
                    var5 = 'summary_regenerated';
case 32:
                    var4 = 'press_summary';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                    var4 = _closure2_slot2;
                    if(!(var6 == var4)) { _fun0009_ip = 35; continue _fun0009 }
case 33:
                    var4 = _closure2_slot1;
                    var4 = var6 != var4;
                    if(!var4) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                    var7 = _closure2_slot1;
                    var5 = var7.isDM;
                    var4 = var5.bind(var7)();
case 36:
                    if(var4) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                    var5 = _closure2_slot1;
                    var5 = var6 != var5;
                    if(!var5) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                    var7 = _closure2_slot1;
                    var6 = var7.isGroupDM;
                    var5 = var6.bind(var7)();
case 40:
                    var4 = var5;
case 38:
                    if(!var4) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToChannel;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    _fun0009_ip = 42; continue _fun0009;
case 35:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.navigateToPost;
                    var3 = _closure2_slot1;
                    var4 = var3.id;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.startId;
                    var2 = var5.bind(var6)(var4, var3, var2);
case 42:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var2, var7);
            var15 = _closure1_slot4;
            var8 = var15.useCallback;
            var2 = var10.channelId;
            var7 = new Array(3);
            var7[0] = var2;
            var2 = var10.id;
            var7[1] = var2;
            var2 = var10.type;
            var7[2] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var2 = var10[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.itemInteracted;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0010_ip = 32; continue _fun0010 }
case 30:
                    var5 = 'summary_regenerated';
case 32:
                    var4 = 'long_press_channel';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openChannelLongPressActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var8 = var8.bind(var15)(var2, var7);
            var18 = _closure1_slot4;
            var15 = var18.useMemo;
            var2 = var10.id;
            var7 = new Array(4);
            var7[0] = var2;
            var2 = var10.messages;
            var7[1] = var2;
            var2 = var10.summShort;
            var7[2] = var2;
            var2 = var10.topic;
            var7[3] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var1['id'] = var4;
                    var4 = 'summary';
                    var1['type'] = var4;
                    var4 = var3.messages;
                    var1['messages'] = var4;
                    var3 = var3.summShort;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                    var4 = _closure2_slot0;
                    var3 = var4.topic;
case 44:
                    var1['title'] = var3;
                    var2 = _closure2_slot0;
                    var2 = var2.summShort;
                    var1['description'] = var2;
                    var2 = 'icymi-card';
                    var1['renderLocation'] = var2;
                    return var1;
                }
            };
            var7 = var15.bind(var18)(var2, var7);
            var18 = _closure1_slot4;
            var15 = var18.useContext;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 22;
            var2 = var23[var2];
            var2 = var20.bind(var5)(var2);
            var2 = var2.ICYMIContext;
            var2 = var15.bind(var18)(var2);
            var29 = var2.margin;
            if(!(var1 != var11)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var2 = var11.guild_id;
            if(!(var1 != var2)) { _fun0006_ip = 46; continue _fun0006 }
case 48:
            if(!(var1 != var19)) { _fun0006_ip = 46; continue _fun0006 }
case 49:
            if(!(var1 != var16)) { _fun0006_ip = 46; continue _fun0006 }
case 50:
            var18 = global;
            var20 = var18.Set;
            var2 = var10.messages;
            var2 = var2[var6];
            var2 = var2.content;
            var23 = var22.bind(var5)(var2);
            var15 = var23.filter;
            var2 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.startsWith;
                    var1 = 'http';
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0012_ip = 21; continue _fun0012 }
case 51:
                    var3 = var4.startsWith;
                    var2 = 'https';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 21:
                    return var1;
                }
            };
            var37 = var15.bind(var23)(var2);
            var15 = var20.prototype;
            var15 = Object.create(var15, {constructor: {value: var20}});
            var38 = var15;
            var2 = new var38[var20](var37, var36);
            var20 = var2 instanceof Object ? var2 : var15;
            var23 = var18.Set;
            var2 = var10.topic;
            var37 = var22.bind(var5)(var2);
            var15 = var23.prototype;
            var15 = Object.create(var15, {constructor: {value: var23}});
            var38 = var15;
            var2 = new var38[var23](var37, var36);
            var15 = var2 instanceof Object ? var2 : var15;
            var23 = var18.Set;
            var2 = var10.summShort;
            var37 = var22.bind(var5)(var2);
            var22 = var23.prototype;
            var22 = Object.create(var22, {constructor: {value: var23}});
            var38 = var22;
            var2 = new var38[var23](var37, var36);
            var2 = var2 instanceof Object ? var2 : var22;
            _closure2_slot4 = var2;
            var23 = var18.Array;
            var22 = var23.from;
            var25 = var22.bind(var23)(var20);
            var23 = var25.filter;
            var22 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var23.bind(var25)(var22);
            var22 = var22.length;
            var20 = var20.size;
            var28 = var22 / var20;
            var20 = var18.Array;
            var18 = var20.from;
            var20 = var18.bind(var20)(var15);
            var18 = var20.filter;
            var17 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var18.bind(var20)(var17);
            var17 = var17.length;
            var15 = var15.size;
            var17 = var17 / var15;
            var15 = 0.8;
            var26 = var17 > var15;
            if(!var26) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var2 = var2.size;
            var26 = var2 < var12;
case 52:
            var2 = var10.summShort;
            var2 = var2.length;
            var31 = var6 === var2;
            if(!var31) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var2 = var10.topic;
            var2 = var2.length;
            var31 = var6 === var2;
case 54:
            var12 = _closure1_slot10;
            var6 = _closure1_slot11;
            var2 = {};
            var18 = _closure1_slot9;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = 23;
            var15 = var20[var15];
            var15 = var17.bind(var5)(var15);
            var17 = var15.PressableHighlight;
            var15 = {};
            var15['onPress'] = var9;
            var15['onLongPress'] = var8;
            var20 = 'button';
            var15['accessibilityRole'] = var20;
            var20 = 130;
            var15['unstable_pressDelay'] = var20;
            var20 = var24.pressable;
            var15['style'] = var20;
            var15['disabled'] = var13;
            var23 = _closure1_slot10;
            var22 = _closure1_slot5;
            var20 = {};
            var24 = var24.container;
            var20['style'] = var24;
            var25 = null;
            if(var31) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var30 = _closure1_slot9;
            var27 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 24;
            var24 = var34[var24];
            var24 = var27.bind(var5)(var24);
            var27 = var24.Text;
            var24 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var33 = _closure1_slot1;
            var32 = 25;
            var32 = var34[var32];
            var35 = var33.bind(var5)(var32);
            var34 = var35.parseInlineReply;
            if(var26) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var33 = var10.topic;
            _fun0006_ip = 60; continue _fun0006;
case 58:
            var33 = var10.summShort;
case 60:
            var32 = true;
            var32 = var34.bind(var35)(var33, var32);
            var24['children'] = var32;
            var25 = var30.bind(var5)(var27, var24);
case 56:
            var24 = new Array(3);
            var24[0] = var25;
            var25 = null;
            if(var31) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var27 = 0.7;
            var25 = null;
            if(!(!(var28 > var27))) { _fun0006_ip = 61; continue _fun0006 }
case 63:
            var25 = null;
            if(var26) { _fun0006_ip = 61; continue _fun0006 }
case 64:
            var28 = _closure1_slot9;
            var27 = _closure1_slot0;
            var33 = _closure1_slot2;
            var26 = 24;
            var26 = var33[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.Text;
            var26 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var30 = {};
            var32 = 8;
            var30['marginTop'] = var32;
            var26['style'] = var30;
            var32 = _closure1_slot1;
            var30 = 25;
            var30 = var33[var30];
            var34 = var32.bind(var5)(var30);
            var33 = var34.parseInlineReply;
            var32 = var10.summShort;
            var30 = true;
            var30 = var33.bind(var34)(var32, var30);
            var26['children'] = var30;
            var25 = var28.bind(var5)(var27, var26);
case 61:
            var24[1] = var25;
            var27 = _closure1_slot9;
            var26 = _closure1_slot5;
            var25 = {};
            var28 = {};
            var30 = var29;
            if(!var31) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var31 = 8;
            var31 = var33[var31];
            var31 = var32.bind(var5)(var31);
            var31 = var31.spacing;
            var30 = var31.PX_4;
case 65:
            var28['marginTop'] = var30;
            var28['marginBottom'] = var29;
            var25['style'] = var28;
            var30 = _closure1_slot9;
            var29 = _closure1_slot15;
            var28 = {};
            var28['topic'] = var10;
            var28 = var30.bind(var5)(var29, var28);
            var25['children'] = var28;
            var25 = var27.bind(var5)(var26, var25);
            var24[2] = var25;
            var20['children'] = var24;
            var20 = var23.bind(var5)(var22, var20);
            var15['children'] = var20;
            var17 = var18.bind(var5)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var20 = _closure1_slot9;
            var18 = _closure1_slot5;
            var17 = {};
            var21 = var21.footer;
            var17['style'] = var21;
            var21 = null;
            if(var4) { _fun0006_ip = 67; continue _fun0006 }
case 68:
            var21 = null;
            if(var13) { _fun0006_ip = 67; continue _fun0006 }
case 69:
            var24 = _closure1_slot9;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 26;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var23 = var22.SummaryShareRow;
            var22 = {};
            var22['channel'] = var11;
            var22['topic'] = var10;
            var21 = var24.bind(var5)(var23, var22);
case 67:
            var17['children'] = var21;
            var17 = var20.bind(var5)(var18, var17);
            var15[1] = var17;
            var2['children'] = var15;
            var2 = var12.bind(var5)(var6, var2);
            if(var4) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var12 = _closure1_slot10;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = 19;
            var4 = var17[var18];
            var4 = var15.bind(var5)(var4);
            var6 = var4.SummaryContentPost;
            var4 = {};
            var4['channel'] = var11;
            var4['guild'] = var19;
            var4['author'] = var16;
            var16 = var10.id;
            var4['id'] = var16;
            var19 = _closure1_slot1;
            var16 = 29;
            var16 = var17[var16];
            var20 = var19.bind(var5)(var16);
            var19 = var20.extractTimestamp;
            var16 = var10.endId;
            var16 = var19.bind(var20)(var16);
            var4['timestamp'] = var16;
            var4['disableInteractions'] = var13;
            var16 = var10.type;
            var13 = 18;
            var13 = var17[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.SummaryType;
            var15 = var13.SOURCE_1;
            var13 = 'summary';
            if(!(var16 === var15)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
            var13 = 'summary_regenerated';
case 72:
            var4['type'] = var13;
            var4['onHeaderPress'] = var9;
            var4['onHeaderLongPress'] = var8;
            var13 = new Array(2);
            var13[0] = var2;
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var18];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Separator;
            var15 = {};
            var15 = var17.bind(var5)(var16, var15);
            var13[1] = var15;
            var4['children'] = var13;
            var4 = var12.bind(var5)(var6, var4);
            return var4;
case 70:
            var6 = undefined;
            if(var3) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var6 = var2;
case 74:
            var4 = _closure1_slot9;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 27;
            var2 = var13[var2];
            var3 = var12.bind(var5)(var2);
            var2 = {};
            var17 = _closure1_slot0;
            var14 = 28;
            var15 = var13[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.ljgIOz;
            var14 = var15.bind(var16)(var14);
            var2['actionLabel'] = var14;
            var14 = var10.id;
            var2['id'] = var14;
            var14 = 'summary';
            var2['type'] = var14;
            var11 = var11.id;
            var2['channelId'] = var11;
            var11 = 29;
            var11 = var13[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.endId;
            var10 = var11.bind(var12)(var10);
            var2['timestamp'] = var10;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var8;
            var2['conversationProps'] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 46:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MAX_AVATARS_IN_PILE'] = var2;
    return var1;
})();