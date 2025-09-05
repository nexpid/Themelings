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
        var3 = _closure1_slot13;
        var4 = undefined;
        var2 = false;
        var6 = var3.bind(var4)(var2);
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 10;
        var2 = var7[var2];
        var9 = var8.bind(var4)(var2);
        var5 = var9.useToken;
        var2 = _closure1_slot1;
        var3 = 9;
        var3 = var7[var3];
        var3 = var2.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.ACTION_SHEET_GRADIENT_BG;
        var10 = var5.bind(var9)(var3);
        var3 = 11;
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
        var3 = _closure1_slot11;
        var1 = 12;
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
 0:
            var1 = arg1;
            var2 = var1.topic;
            var _closure2_slot0 = var2;
            var17 = var2.messages;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
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
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 54; continue _fun0002 }
 16:
                    var5 = _closure1_slot8;
                    var4 = var5.isChannelMuted;
                    var2 = _closure2_slot1;
                    var3 = var2.getGuildId;
                    var3 = var3.bind(var2)();
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 54:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot13;
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
 0:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    if(!(var3 === var2)) { _fun0003_ip = 65; continue _fun0003 }
 20:
                    var3 = _closure2_slot3;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(!var2) { _fun0003_ip = 47; continue _fun0003 }
 33:
                    var4 = _closure2_slot3;
                    var3 = 460;
                    var2 = var4 >= var3;
 47:
                    if(!var2) { _fun0003_ip = 107; continue _fun0003 }
 50:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0003_ip = 107; continue _fun0003;
 65:
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
 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var7 = null;
            var2 = var7 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 542; continue _fun0001 }
 330:
            var4 = _closure1_slot12;
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
            var11 = _closure1_slot11;
            var10 = _closure1_slot5;
            var6 = {};
            var13 = var16.messagesContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var9;
            if(!var13) { _fun0001_ip = 415; continue _fun0001 }
 409:
            var13 = var16.messagesContainerGradient;
 415:
            var12[1] = var13;
            var6['style'] = var12;
            var14 = _closure1_slot11;
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
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
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
            if(!var9) { _fun0001_ip = 528; continue _fun0001 }
 512:
            var10 = _closure1_slot11;
            var9 = _closure1_slot14;
            var8 = {};
            var7 = var10.bind(var5)(var9, var8);
 528:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 542:
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
    var8 = var5.ICYMI_MARGIN;
    var _closure1_slot9 = var8;
    var5 = var5.MESSAGE_CONTENT_INSET;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot11 = var8;
    var5 = var5.jsxs;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var1 = {};
            var2 = {};
            var10 = 1;
            var2['flex'] = var10;
            var3 = 0;
            if(var7) { _fun0004_ip = 26; continue _fun0004 }
 19:
            var3 = _closure1_slot10;
 26:
            var2['paddingLeft'] = var3;
            var1['pressable'] = var2;
            var2 = {};
            var11 = _closure1_slot9;
            var2['marginHorizontal'] = var11;
            var1['container'] = var2;
            var2 = {'maxHeight': 461, 'display': 'flex', 'overflow': 'hidden', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
            var9 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 9;
            var12 = var8[var6];
            var5 = undefined;
            var12 = var9.bind(var5)(var12);
            var12 = var12.radii;
            var12 = var12.lg;
            var2['borderRadius'] = var12;
            var12 = var8[var6];
            var12 = var9.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_SUBTLE;
            var2['borderColor'] = var12;
            var1['outerCardContainer'] = var2;
            var2 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
            var12 = 'row';
            var13 = var8[var6];
            var13 = var9.bind(var5)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_8;
            var2['gap'] = var13;
            var1['channelHeader'] = var2;
            var2 = {};
            var2['flexDirection'] = var12;
            var12 = var8[var6];
            var12 = var9.bind(var5)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var2['gap'] = var12;
            var1['messageContainer'] = var2;
            var2 = {};
            var2['paddingHorizontal'] = var11;
            var11 = var8[var6];
            var11 = var9.bind(var5)(var11);
            var11 = var11.spacing;
            var11 = var11.PX_16;
            var2['gap'] = var11;
            var1['messages'] = var2;
            var2 = {};
            var2['flex'] = var10;
            var1['messageContent'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'bottom': 0, 'minHeight': 104, 'borderBottomEndRadius': null, 'paddingBottom': 16};
            var10 = var8[var6];
            var10 = var9.bind(var5)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var2['borderBottomEndRadius'] = var10;
            var1['linearGradient'] = var2;
            var2 = {};
            var8 = var8[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['marginTop'] = var8;
            var8 = 'none';
            var2['pointerEvents'] = var8;
            var1['emojiContainer'] = var2;
            var2 = {};
            var8 = undefined;
            if(!var7) { _fun0004_ip = 391; continue _fun0004 }
 363:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.colors;
            var8 = var9.CARD_SECONDARY_BG;
 391:
            var2['backgroundColor'] = var8;
            var8 = 'flex-end';
            var2['justifyContent'] = var8;
            var4 = 0;
            if(var7) { _fun0004_ip = 414; continue _fun0004 }
 410:
            var4 = _closure1_slot10;
 414:
            var2['paddingLeft'] = var4;
            var1['footer'] = var2;
            var2 = {};
            var4 = _closure1_slot9;
            var2['paddingVertical'] = var4;
            var2['gap'] = var4;
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
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_4;
            var2['marginLeft'] = var3;
            var1['rightArrowIcon'] = var2;
            var2 = {'position': 'absolute', 'width': '100%', 'height': 24, 'bottom': 0};
            var1['typingArea'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot13 = var5;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIConversationSummaryRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var10 = var1.topic;
            var _closure2_slot0 = var10;
            var13 = var1.disableInteractions;
            var6 = undefined;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var6;
            var21 = function convertToWords(arg1) {
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
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var12 = 15;
            var1 = var4[var12];
            var5 = var3.bind(var6)(var1);
            var2 = var5.useICYMIUXRefreshExperiment;
            var1 = 'ICYMIConversationSummaryRow';
            var2 = var2.bind(var5)(var1);
            var1 = _closure1_slot13;
            var18 = var1.bind(var6)(var2);
            var1 = 13;
            var5 = var4[var1];
            var9 = var3.bind(var6)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var8.bind(var9)(var7, var5);
            var _closure2_slot1 = var11;
            var1 = var4[var1];
            var5 = var3.bind(var6)(var1);
            var4 = var5.useStateFromStores;
            var1 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 44; continue _fun0006 }
 30:
                    var5 = _closure2_slot1;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var15 = var4.bind(var5)(var3, var1);
            var _closure2_slot2 = var15;
            var1 = var10.messages;
            var4 = 0;
            var3 = var1[var4];
            var1 = null;
            var7 = var1 == var3;
            var5 = undefined;
            if(var7) { _fun0005_ip = 205; continue _fun0005 }
 199:
            var5 = var3.author;
 205:
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var3 = var10.messages;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
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
            var3 = var8.bind(var9)(var3, var7);
            _closure2_slot3 = var3;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = var1 == var15;
            var16 = undefined;
            if(var7) { _fun0005_ip = 268; continue _fun0005 }
 263:
            var16 = var15.id;
 268:
            var7 = new Array(2);
            var7[0] = var16;
            var7[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0007_ip = 29; continue _fun0007 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0007_ip = 94; continue _fun0007 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 16;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0007_ip = 84; continue _fun0007 }
 75:
                    var6 = _closure2_slot2;
                    var3 = var6.id;
 84:
                    var2 = _closure2_slot3;
                    var2 = var4.bind(var5)(var3, var2);
 94:
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(5);
            var7[0] = var11;
            var7[1] = var15;
            var3 = var10.id;
            var7[2] = var3;
            var3 = var10.startId;
            var7[3] = var3;
            var3 = var10.type;
            var7[4] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var2 = var10[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var4 = 18;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0008_ip = 92; continue _fun0008 }
 86:
                    var5 = 'summary_regenerated';
 92:
                    var4 = 'press_summary';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var4)) { _fun0008_ip = 123; continue _fun0008 }
 115:
                    var4 = _closure2_slot2;
                    if(!(var6 == var4)) { _fun0008_ip = 224; continue _fun0008 }
 123:
                    var4 = _closure2_slot1;
                    var4 = var6 != var4;
                    if(!var4) { _fun0008_ip = 148; continue _fun0008 }
 134:
                    var7 = _closure2_slot1;
                    var5 = var7.isDM;
                    var4 = var5.bind(var7)();
 148:
                    if(var4) { _fun0008_ip = 179; continue _fun0008 }
 151:
                    var5 = _closure2_slot1;
                    var5 = var6 != var5;
                    if(!var5) { _fun0008_ip = 176; continue _fun0008 }
 162:
                    var7 = _closure2_slot1;
                    var6 = var7.isGroupDM;
                    var5 = var6.bind(var7)();
 176:
                    var4 = var5;
 179:
                    if(!var4) { _fun0008_ip = 285; continue _fun0008 }
 182:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.transitionToChannel;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    _fun0008_ip = 285; continue _fun0008;
 224:
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
 285:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3, var7);
            var16 = _closure1_slot4;
            var8 = var16.useCallback;
            var3 = var10.channelId;
            var7 = new Array(3);
            var7[0] = var3;
            var3 = var10.id;
            var7[1] = var3;
            var3 = var10.type;
            var7[2] = var3;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var2 = var10[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var4 = 18;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0009_ip = 92; continue _fun0009 }
 86:
                    var5 = 'summary_regenerated';
 92:
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
            var8 = var8.bind(var16)(var3, var7);
            var19 = _closure1_slot4;
            var16 = var19.useMemo;
            var3 = var10.id;
            var7 = new Array(4);
            var7[0] = var3;
            var3 = var10.messages;
            var7[1] = var3;
            var3 = var10.summShort;
            var7[2] = var3;
            var3 = var10.topic;
            var7[3] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
                    if(!(var4 == var3)) { _fun0010_ip = 59; continue _fun0010 }
 49:
                    var4 = _closure2_slot0;
                    var3 = var4.topic;
 59:
                    var1['title'] = var3;
                    var2 = _closure2_slot0;
                    var2 = var2.summShort;
                    var1['description'] = var2;
                    var2 = 'icymi-card';
                    var1['renderLocation'] = var2;
                    return var1;
                }
            };
            var7 = var16.bind(var19)(var3, var7);
            if(!(var1 != var11)) { _fun0005_ip = 1738; continue _fun0005 }
 480:
            var3 = var11.guild_id;
            if(!(var1 != var3)) { _fun0005_ip = 1738; continue _fun0005 }
 492:
            if(!(var1 != var15)) { _fun0005_ip = 1738; continue _fun0005 }
 499:
            if(!(var1 != var5)) { _fun0005_ip = 1738; continue _fun0005 }
 506:
            var19 = global;
            var20 = var19.Set;
            var3 = var10.messages;
            var3 = var3[var4];
            var3 = var3.content;
            var22 = var21.bind(var6)(var3);
            var16 = var22.filter;
            var3 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.startsWith;
                    var1 = 'http';
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0011_ip = 42; continue _fun0011 }
 24:
                    var3 = var4.startsWith;
                    var2 = 'https';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 42:
                    return var1;
                }
            };
            var33 = var16.bind(var22)(var3);
            var16 = var20.prototype;
            var16 = Object.create(var16, {constructor: {value: var20}});
            var34 = var16;
            var3 = new var34[var20](var33, var32);
            var20 = var3 instanceof Object ? var3 : var16;
            var22 = var19.Set;
            var3 = var10.topic;
            var33 = var21.bind(var6)(var3);
            var16 = var22.prototype;
            var16 = Object.create(var16, {constructor: {value: var22}});
            var34 = var16;
            var3 = new var34[var22](var33, var32);
            var16 = var3 instanceof Object ? var3 : var16;
            var22 = var19.Set;
            var3 = var10.summShort;
            var33 = var21.bind(var6)(var3);
            var21 = var22.prototype;
            var21 = Object.create(var21, {constructor: {value: var22}});
            var34 = var21;
            var3 = new var34[var22](var33, var32);
            var3 = var3 instanceof Object ? var3 : var21;
            _closure2_slot4 = var3;
            var22 = var19.Array;
            var21 = var22.from;
            var23 = var21.bind(var22)(var20);
            var22 = var23.filter;
            var21 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var22.bind(var23)(var21);
            var21 = var21.length;
            var20 = var20.size;
            var25 = var21 / var20;
            var20 = var19.Array;
            var19 = var20.from;
            var20 = var19.bind(var20)(var16);
            var19 = var20.filter;
            var17 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var19.bind(var20)(var17);
            var17 = var17.length;
            var16 = var16.size;
            var17 = var17 / var16;
            var16 = 0.8;
            var23 = var17 > var16;
            if(!var23) { _fun0005_ip = 769; continue _fun0005 }
 760:
            var3 = var3.size;
            var23 = var3 < var12;
 769:
            var3 = var10.summShort;
            var3 = var3.length;
            var26 = var4 === var3;
            if(!var26) { _fun0005_ip = 802; continue _fun0005 }
 787:
            var3 = var10.topic;
            var3 = var3.length;
            var26 = var4 === var3;
 802:
            if(var2) { _fun0005_ip = 1571; continue _fun0005 }
 808:
            var4 = _closure1_slot12;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var16 = 19;
            var2 = var17[var16];
            var2 = var12.bind(var6)(var2);
            var3 = var2.SummaryContentPost;
            var2 = {};
            var2['channel'] = var11;
            var2['guild'] = var15;
            var2['author'] = var5;
            var5 = var10.id;
            var2['id'] = var5;
            var15 = _closure1_slot1;
            var5 = 24;
            var5 = var17[var5];
            var19 = var15.bind(var6)(var5);
            var15 = var19.extractTimestamp;
            var5 = var10.endId;
            var5 = var15.bind(var19)(var5);
            var2['timestamp'] = var5;
            var2['disableInteractions'] = var13;
            var15 = var10.type;
            var5 = 18;
            var5 = var17[var5];
            var5 = var12.bind(var6)(var5);
            var5 = var5.SummaryType;
            var12 = var5.SOURCE_1;
            var5 = 'summary';
            if(!(var15 === var12)) { _fun0005_ip = 948; continue _fun0005 }
 942:
            var5 = 'summary_regenerated';
 948:
            var2['type'] = var5;
            var2['onHeaderPress'] = var9;
            var2['onHeaderLongPress'] = var8;
            var15 = _closure1_slot11;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 25;
            var5 = var17[var5];
            var5 = var12.bind(var6)(var5);
            var12 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var9;
            var5['onLongPress'] = var8;
            var17 = 'button';
            var5['accessibilityRole'] = var17;
            var17 = 130;
            var5['unstable_pressDelay'] = var17;
            var17 = var18.pressable;
            var5['style'] = var17;
            var5['disabled'] = var13;
            var20 = _closure1_slot12;
            var19 = _closure1_slot5;
            var17 = {};
            var21 = var18.container;
            var17['style'] = var21;
            var22 = null;
            if(var26) { _fun0005_ip = 1157; continue _fun0005 }
 1057:
            var27 = _closure1_slot11;
            var24 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 26;
            var21 = var30[var21];
            var21 = var24.bind(var6)(var21);
            var24 = var21.Text;
            var21 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var29 = _closure1_slot1;
            var28 = 27;
            var28 = var30[var28];
            var31 = var29.bind(var6)(var28);
            var30 = var31.parseInlineReply;
            if(var23) { _fun0005_ip = 1133; continue _fun0005 }
 1125:
            var29 = var10.topic;
            _fun0005_ip = 1139; continue _fun0005;
 1133:
            var29 = var10.summShort;
 1139:
            var28 = true;
            var28 = var30.bind(var31)(var29, var28);
            var21['children'] = var28;
            var22 = var27.bind(var6)(var24, var21);
 1157:
            var21 = new Array(3);
            var21[0] = var22;
            var22 = null;
            if(var26) { _fun0005_ip = 1296; continue _fun0005 }
 1173:
            var24 = 0.7;
            var22 = null;
            if(!(!(var25 > var24))) { _fun0005_ip = 1296; continue _fun0005 }
 1189:
            var22 = null;
            if(var23) { _fun0005_ip = 1296; continue _fun0005 }
 1194:
            var25 = _closure1_slot11;
            var24 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 26;
            var23 = var29[var23];
            var23 = var24.bind(var6)(var23);
            var24 = var23.Text;
            var23 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var27 = {};
            var28 = 8;
            var27['marginTop'] = var28;
            var23['style'] = var27;
            var28 = _closure1_slot1;
            var27 = 27;
            var27 = var29[var27];
            var30 = var28.bind(var6)(var27);
            var29 = var30.parseInlineReply;
            var28 = var10.summShort;
            var27 = true;
            var27 = var29.bind(var30)(var28, var27);
            var23['children'] = var27;
            var22 = var25.bind(var6)(var24, var23);
 1296:
            var21[1] = var22;
            var24 = _closure1_slot11;
            var23 = _closure1_slot5;
            var22 = {};
            var25 = {};
            if(var26) { _fun0005_ip = 1321; continue _fun0005 }
 1315:
            var26 = _closure1_slot9;
            _fun0005_ip = 1352; continue _fun0005;
 1321:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var27 = 9;
            var27 = var29[var27];
            var27 = var28.bind(var6)(var27);
            var27 = var27.spacing;
            var26 = var27.PX_4;
 1352:
            var25['marginTop'] = var26;
            var26 = _closure1_slot9;
            var25['marginBottom'] = var26;
            var22['style'] = var25;
            var27 = _closure1_slot11;
            var26 = _closure1_slot15;
            var25 = {};
            var25['topic'] = var10;
            var25 = var27.bind(var6)(var26, var25);
            var22['children'] = var25;
            var22 = var24.bind(var6)(var23, var22);
            var21[2] = var22;
            var17['children'] = var21;
            var17 = var20.bind(var6)(var19, var17);
            var5['children'] = var17;
            var12 = var15.bind(var6)(var12, var5);
            var5 = new Array(3);
            var5[0] = var12;
            var12 = null;
            if(var13) { _fun0005_ip = 1513; continue _fun0005 }
 1436:
            var17 = _closure1_slot11;
            var15 = _closure1_slot5;
            var13 = {};
            var18 = var18.footer;
            var13['style'] = var18;
            var20 = _closure1_slot11;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 28;
            var18 = var21[var18];
            var18 = var19.bind(var6)(var18);
            var19 = var18.SummaryShareRow;
            var18 = {};
            var18['channel'] = var11;
            var18['topic'] = var10;
            var18 = var20.bind(var6)(var19, var18);
            var13['children'] = var18;
            var12 = var17.bind(var6)(var15, var13);
 1513:
            var5[1] = var12;
            var15 = _closure1_slot11;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var16];
            var12 = var13.bind(var6)(var12);
            var13 = var12.Separator;
            var12 = {};
            var12 = var15.bind(var6)(var13, var12);
            var5[2] = var12;
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0005_ip = 1736; continue _fun0005;
 1571:
            var5 = _closure1_slot11;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 22;
            var3 = var13[var3];
            var4 = var12.bind(var6)(var3);
            var3 = {};
            var17 = _closure1_slot0;
            var14 = 23;
            var15 = var13[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.ljgIOz;
            var14 = var15.bind(var16)(var14);
            var3['actionLabel'] = var14;
            var14 = var10.id;
            var3['id'] = var14;
            var14 = 'summary';
            var3['type'] = var14;
            var11 = var11.id;
            var3['channelId'] = var11;
            var11 = 24;
            var11 = var13[var11];
            var12 = var12.bind(var6)(var11);
            var11 = var12.extractTimestamp;
            var10 = var10.endId;
            var10 = var11.bind(var12)(var10);
            var3['timestamp'] = var10;
            var3['onHeaderPress'] = var9;
            var3['onHeaderLongPress'] = var8;
            var3['conversationProps'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1736:
            return var2;
 1738:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MAX_AVATARS_IN_PILE'] = var2;
    return var1;
})();