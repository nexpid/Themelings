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
        var3 = _closure1_slot11;
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
        var3 = var3.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
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
    var _closure1_slot12 = var1;
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
            var3 = _closure1_slot11;
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
            var9 = _closure1_slot12;
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
    var _closure1_slot13 = var1;
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
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createICYMIStyles;
    var5 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var2 = {};
        var8 = 1;
        var2['flex'] = var8;
        var3 = var7.inset;
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
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIConversationSummaryRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var19 = var1.topic;
            var _closure2_slot0 = var19;
            var9 = var1.disableInteractions;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var14 = function convertToWords(arg1) {
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
            var1 = _closure1_slot11;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var6 = var3[var1];
            var10 = var2.bind(var5)(var6);
            var8 = var10.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var10)(var7, var6);
            var _closure2_slot1 = var6;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var5 = _closure2_slot1;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
case 16:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var3.bind(var7)(var2, var1);
            var _closure2_slot2 = var3;
            var1 = var19.messages;
            var8 = 0;
            var7 = var1[var8];
            var1 = null;
            var10 = var1 == var7;
            var2 = undefined;
            if(var10) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var2 = var7.author;
case 18:
            var13 = _closure1_slot4;
            var11 = var13.useMemo;
            var7 = var19.messages;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
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
            var7 = var11.bind(var13)(var7, var10);
            _closure2_slot3 = var7;
            var13 = _closure1_slot4;
            var11 = var13.useEffect;
            var10 = var1 == var3;
            var15 = undefined;
            if(var10) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var15 = var3.id;
case 20:
            var10 = new Array(2);
            var10[0] = var15;
            var10[1] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0006_ip = 22; continue _fun0006 }
case 5:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
case 22:
                    if(!(var6 != var3)) { _fun0006_ip = 23; continue _fun0006 }
case 7:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
case 24:
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var5)(var3, var2);
case 23:
                    return var1;
                }
            };
            var7 = var11.bind(var13)(var7, var10);
            var13 = _closure1_slot4;
            var11 = var13.useCallback;
            var10 = new Array(5);
            var10[0] = var6;
            var10[1] = var3;
            var7 = var19.id;
            var10[2] = var7;
            var7 = var19.startId;
            var10[3] = var7;
            var7 = var19.type;
            var10[4] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var6 = 15;
                    var2 = var7[var6];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.itemInteracted;
                    var4 = _closure2_slot0;
                    var8 = var4.id;
                    var11 = var4.type;
                    var5 = _closure1_slot0;
                    var4 = 16;
                    var4 = var7[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var7 = 'summary';
                    var5 = var7;
                    if(!(var11 === var4)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var5 = 'summary_regenerated';
case 26:
                    var4 = 'press_summary';
                    var4 = var9.bind(var10)(var8, var5, var4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.feedItemActioned;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var8 = var8.id;
                    var4['itemId'] = var8;
                    var4['itemType'] = var7;
                    var7 = {'actionGestureType': 'press', 'actionTargetElement': 'item_container', 'actionIntentType': 'navigate', 'actionDestinationType': 'channel'};
                    var4['actionParameters'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var4 = _closure2_slot2;
                    if(!(var6 == var4)) { _fun0007_ip = 30; continue _fun0007 }
case 28:
                    var4 = _closure2_slot1;
                    var4 = var6 != var4;
                    if(!var4) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var7 = _closure2_slot1;
                    var5 = var7.isDM;
                    var4 = var5.bind(var7)();
case 31:
                    if(var4) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var5 = _closure2_slot1;
                    var5 = var6 != var5;
                    if(!var5) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                    var7 = _closure2_slot1;
                    var6 = var7.isGroupDM;
                    var5 = var6.bind(var7)();
case 35:
                    var4 = var5;
case 33:
                    if(!var4) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToChannel;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    _fun0007_ip = 37; continue _fun0007;
case 30:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
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
case 37:
                    return var1;
                }
            };
            var11 = var11.bind(var13)(var7, var10);
            var15 = _closure1_slot4;
            var13 = var15.useCallback;
            var7 = var19.channelId;
            var10 = new Array(3);
            var10[0] = var7;
            var7 = var19.id;
            var10[1] = var7;
            var7 = var19.type;
            var10[2] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 15;
                    var2 = var8[var4];
                    var1 = undefined;
                    var10 = var5.bind(var1)(var2);
                    var9 = var10.itemInteracted;
                    var5 = _closure2_slot0;
                    var7 = var5.id;
                    var11 = var5.type;
                    var6 = _closure1_slot0;
                    var5 = 16;
                    var5 = var8[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.SummaryType;
                    var5 = var5.SOURCE_1;
                    var8 = 'summary';
                    var6 = var8;
                    if(!(var11 === var5)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var6 = 'summary_regenerated';
case 26:
                    var5 = 'long_press_channel';
                    var5 = var9.bind(var10)(var7, var6, var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = var5[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.feedItemActioned;
                    var4 = {};
                    var2 = _closure2_slot0;
                    var9 = var2.id;
                    var4['itemId'] = var9;
                    var4['itemType'] = var8;
                    var8 = {'actionGestureType': 'long_press', 'actionTargetElement': 'item_container', 'actionIntentType': 'open', 'actionDestinationType': null};
                    var4['actionParameters'] = var8;
                    var4 = var6.bind(var7)(var4);
                    var4 = _closure1_slot0;
                    var3 = 19;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openChannelLongPressActionSheet;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var10 = var13.bind(var15)(var7, var10);
            var15 = _closure1_slot4;
            var13 = var15.useContext;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 20;
            var7 = var18[var7];
            var7 = var17.bind(var5)(var7);
            var7 = var7.ICYMIContext;
            var7 = var13.bind(var15)(var7);
            var18 = var7.margin;
            if(!(var1 != var6)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var7 = var6.guild_id;
            if(!(var1 != var7)) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            if(!(var1 != var3)) { _fun0004_ip = 39; continue _fun0004 }
case 42:
            if(!(var1 != var2)) { _fun0004_ip = 39; continue _fun0004 }
case 43:
            var7 = global;
            var13 = var7.Set;
            var2 = var19.messages;
            var2 = var2[var8];
            var2 = var2.content;
            var15 = var14.bind(var5)(var2);
            var3 = var15.filter;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.startsWith;
                    var1 = 'http';
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var3 = var4.startsWith;
                    var2 = 'https';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 44:
                    return var1;
                }
            };
            var27 = var3.bind(var15)(var2);
            var3 = var13.prototype;
            var3 = Object.create(var3, {constructor: {value: var13}});
            var28 = var3;
            var2 = new var28[var13](var27, var26);
            var13 = var2 instanceof Object ? var2 : var3;
            var15 = var7.Set;
            var2 = var19.topic;
            var27 = var14.bind(var5)(var2);
            var3 = var15.prototype;
            var3 = Object.create(var3, {constructor: {value: var15}});
            var28 = var3;
            var2 = new var28[var15](var27, var26);
            var3 = var2 instanceof Object ? var2 : var3;
            var15 = var7.Set;
            var2 = var19.summShort;
            var27 = var14.bind(var5)(var2);
            var14 = var15.prototype;
            var14 = Object.create(var14, {constructor: {value: var15}});
            var28 = var14;
            var2 = new var28[var15](var27, var26);
            var2 = var2 instanceof Object ? var2 : var14;
            _closure2_slot4 = var2;
            var15 = var7.Array;
            var14 = var15.from;
            var17 = var14.bind(var15)(var13);
            var15 = var17.filter;
            var14 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var15.bind(var17)(var14);
            var14 = var14.length;
            var13 = var13.size;
            var17 = var14 / var13;
            var13 = var7.Array;
            var7 = var13.from;
            var13 = var7.bind(var13)(var3);
            var7 = var13.filter;
            var4 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var13)(var4);
            var4 = var4.length;
            var3 = var3.size;
            var4 = var4 / var3;
            var3 = 0.8;
            var14 = var4 > var3;
            if(!var14) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var3 = var2.size;
            var2 = 15;
            var14 = var3 < var2;
case 46:
            var2 = var19.summShort;
            var2 = var2.length;
            var21 = var8 === var2;
            if(!var21) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var2 = var19.topic;
            var2 = var2.length;
            var21 = var8 === var2;
case 48:
            var4 = _closure1_slot9;
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 21;
            var2 = var13[var2];
            var3 = var15.bind(var5)(var2);
            var2 = {};
            var7 = _closure1_slot0;
            var20 = 22;
            var22 = var13[var20];
            var22 = var7.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var13[var20];
            var20 = var7.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ljgIO9;
            var20 = var22.bind(var23)(var20);
            var2['actionLabel'] = var20;
            var20 = var19.id;
            var2['id'] = var20;
            var20 = 'summary';
            var2['interactionType'] = var20;
            var6 = var6.id;
            var2['channelId'] = var6;
            var6 = 23;
            var6 = var13[var6];
            var20 = var15.bind(var5)(var6);
            var15 = var20.extractTimestamp;
            var6 = var19.endId;
            var6 = var15.bind(var20)(var6);
            var2['timestamp'] = var6;
            var2['onHeaderPress'] = var11;
            var2['onHeaderLongPress'] = var10;
            var6 = var19.messages;
            var6 = var6[var8];
            var2['message'] = var6;
            var8 = _closure1_slot9;
            var6 = 24;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var11;
            var6['onLongPress'] = var10;
            var10 = 'button';
            var6['accessibilityRole'] = var10;
            var10 = 130;
            var6['unstable_pressDelay'] = var10;
            var10 = var12.pressable;
            var6['style'] = var10;
            var6['disabled'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var12.container;
            var9['style'] = var12;
            var13 = null;
            if(var21) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var20 = _closure1_slot9;
            var15 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 25;
            var12 = var24[var12];
            var12 = var15.bind(var5)(var12);
            var15 = var12.Text;
            var12 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var23 = _closure1_slot1;
            var22 = 26;
            var22 = var24[var22];
            var25 = var23.bind(var5)(var22);
            var24 = var25.parseInlineReply;
            if(var14) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var23 = var19.topic;
            _fun0004_ip = 54; continue _fun0004;
case 52:
            var23 = var19.summShort;
case 54:
            var22 = true;
            var22 = var24.bind(var25)(var23, var22);
            var12['children'] = var22;
            var13 = var20.bind(var5)(var15, var12);
case 50:
            var12 = new Array(3);
            var12[0] = var13;
            var13 = null;
            if(var21) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var15 = 0.7;
            var13 = null;
            if(!(!(var17 > var15))) { _fun0004_ip = 55; continue _fun0004 }
case 57:
            var13 = null;
            if(var14) { _fun0004_ip = 55; continue _fun0004 }
case 58:
            var17 = _closure1_slot9;
            var15 = _closure1_slot0;
            var23 = _closure1_slot2;
            var14 = 25;
            var14 = var23[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var20 = {};
            var22 = 8;
            var20['marginTop'] = var22;
            var14['style'] = var20;
            var22 = _closure1_slot1;
            var20 = 26;
            var20 = var23[var20];
            var24 = var22.bind(var5)(var20);
            var23 = var24.parseInlineReply;
            var22 = var19.summShort;
            var20 = true;
            var20 = var23.bind(var24)(var22, var20);
            var14['children'] = var20;
            var13 = var17.bind(var5)(var15, var14);
case 55:
            var12[1] = var13;
            var15 = _closure1_slot9;
            var14 = _closure1_slot5;
            var13 = {};
            var17 = {};
            var20 = var18;
            if(!var21) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 8;
            var21 = var23[var21];
            var21 = var22.bind(var5)(var21);
            var21 = var21.spacing;
            var20 = var21.PX_4;
case 59:
            var17['marginTop'] = var20;
            var17['marginBottom'] = var18;
            var13['style'] = var17;
            var18 = _closure1_slot9;
            var17 = _closure1_slot13;
            var16 = {};
            var16['topic'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 39:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MAX_AVATARS_IN_PILE'] = var2;
    return var1;
})();