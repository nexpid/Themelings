// app/modules/icymi/native/ICYMIConversationSummaryRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function CardGradient() {
        var2 = _closure1_slot12;
        var4 = undefined;
        var6 = var2.bind(var4)();
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
        var3 = _closure1_slot10;
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
    var _closure1_slot13 = var1;
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
            var3 = _closure1_slot12;
            var16 = var3.bind(var5)();
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
            var9 = _closure1_slot4;
            var6 = var9.useState;
            var3 = false;
            var6 = var6.bind(var9)(var3);
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
            if(var2) { _fun0001_ip = 541; continue _fun0001 }
 329:
            var4 = _closure1_slot11;
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
            var11 = _closure1_slot10;
            var10 = _closure1_slot5;
            var6 = {};
            var13 = var16.messagesContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var9;
            if(!var13) { _fun0001_ip = 414; continue _fun0001 }
 408:
            var13 = var16.messagesContainerGradient;
 414:
            var12[1] = var13;
            var6['style'] = var12;
            var14 = _closure1_slot10;
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
                var5 = _closure1_slot10;
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
            if(!var9) { _fun0001_ip = 527; continue _fun0001 }
 511:
            var10 = _closure1_slot10;
            var9 = _closure1_slot13;
            var8 = {};
            var7 = var10.bind(var5)(var9, var8);
 527:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 541:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var15 = 1;
    var5 = var7[var15];
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
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var13 = var5.ICYMI_MARGIN;
    var _closure1_slot9 = var13;
    var14 = var5.MESSAGE_CONTENT_INSET;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flex'] = var15;
    var10['paddingLeft'] = var14;
    var5['pressable'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var13;
    var5['container'] = var10;
    var10 = {'maxHeight': 461, 'display': 'flex', 'overflow': 'hidden', 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
    var11 = 9;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10['borderRadius'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var10['borderColor'] = var16;
    var5['outerCardContainer'] = var10;
    var10 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var16 = 'row';
    var17 = var7[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var10['gap'] = var17;
    var5['channelHeader'] = var10;
    var10 = {};
    var10['flexDirection'] = var16;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var10['gap'] = var16;
    var5['messageContainer'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var13;
    var16 = var7[var11];
    var16 = var12.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var10['gap'] = var16;
    var5['messages'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var5['messageContent'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'bottom': 0, 'minHeight': 104, 'borderBottomEndRadius': null, 'paddingBottom': 16};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderBottomEndRadius'] = var15;
    var5['linearGradient'] = var10;
    var10 = {};
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var10['marginTop'] = var15;
    var15 = 'none';
    var10['pointerEvents'] = var15;
    var5['emojiContainer'] = var10;
    var10 = {};
    var15 = 'flex-end';
    var10['justifyContent'] = var15;
    var10['paddingLeft'] = var14;
    var5['footer'] = var10;
    var10 = {};
    var10['paddingVertical'] = var13;
    var10['gap'] = var13;
    var5['messagesContainer'] = var10;
    var10 = {'maxHeight': 458, 'marginBottom': 4, 'overflow': 'hidden'};
    var5['messagesContainerGradient'] = var10;
    var10 = {'marginLeft': 22, 'marginBottom': 22, 'flexDirection': 'row', 'alignItems': 'center'};
    var5['viewMoreContainer'] = var10;
    var10 = {'position': 'absolute', 'left': 22, 'bottom': 22, 'flexDirection': 'row', 'alignItems': 'center', 'zIndex': 5};
    var5['viewMoreContainerAbsolute'] = var10;
    var10 = {'height': 20, 'width': 20, 'marginRight': 18};
    var5['viewMoreIcon'] = var10;
    var10 = {'height': 20, 'width': 20};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['marginLeft'] = var11;
    var5['rightArrowIcon'] = var10;
    var10 = {'position': 'absolute', 'width': '100%', 'height': 24, 'bottom': 0};
    var5['typingArea'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIConversationSummaryRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var14 = var1.topic;
            var _closure2_slot0 = var14;
            var8 = var1.disableInteractions;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var18 = function convertToWords(arg1) {
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
            var1 = _closure1_slot12;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var4 = var3[var1];
            var10 = var2.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var9.bind(var10)(var6, var4);
            var _closure2_slot1 = var15;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 44; continue _fun0005 }
 30:
                    var5 = _closure2_slot1;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var9 = var3.bind(var4)(var2, var1);
            var _closure2_slot2 = var9;
            var1 = var14.messages;
            var3 = 0;
            var2 = var1[var3];
            var1 = null;
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0004_ip = 175; continue _fun0004 }
 169:
            var6 = var2.author;
 175:
            var13 = _closure1_slot4;
            var10 = var13.useMemo;
            var2 = var14.messages;
            var4 = new Array(1);
            var4[0] = var2;
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
            var2 = var10.bind(var13)(var2, var4);
            _closure2_slot3 = var2;
            var13 = _closure1_slot4;
            var10 = var13.useEffect;
            var4 = var1 == var9;
            var16 = undefined;
            if(var4) { _fun0004_ip = 238; continue _fun0004 }
 233:
            var16 = var9.id;
 238:
            var4 = new Array(2);
            var4[0] = var16;
            var4[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    var4 = var6 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var4) { _fun0006_ip = 29; continue _fun0006 }
 20:
                    var4 = _closure2_slot2;
                    var3 = var4.id;
 29:
                    if(!(var6 != var3)) { _fun0006_ip = 94; continue _fun0006 }
 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.requestMembersById;
                    var3 = _closure2_slot2;
                    var6 = var6 == var3;
                    var3 = undefined;
                    if(var6) { _fun0006_ip = 84; continue _fun0006 }
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
            var2 = var10.bind(var13)(var2, var4);
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var4 = new Array(5);
            var4[0] = var15;
            var4[1] = var9;
            var2 = var14.id;
            var4[2] = var2;
            var2 = var14.startId;
            var4[3] = var2;
            var2 = var14.type;
            var4[4] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 16;
                    var2 = var10[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var9 = var2.type;
                    var2 = 17;
                    var2 = var10[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.SummaryType;
                    var2 = var2.SOURCE_1;
                    var4 = 'summary';
                    if(!(var9 === var2)) { _fun0007_ip = 92; continue _fun0007 }
 86:
                    var4 = 'summary_regenerated';
 92:
                    var2 = 'press_summary';
                    var2 = var7.bind(var8)(var6, var4, var2);
                    var2 = _closure2_slot1;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0007_ip = 123; continue _fun0007 }
 115:
                    var2 = _closure2_slot2;
                    if(!(var6 == var2)) { _fun0007_ip = 227; continue _fun0007 }
 123:
                    var2 = _closure2_slot1;
                    var2 = var6 != var2;
                    if(!var2) { _fun0007_ip = 148; continue _fun0007 }
 134:
                    var7 = _closure2_slot1;
                    var4 = var7.isDM;
                    var2 = var4.bind(var7)();
 148:
                    if(var2) { _fun0007_ip = 179; continue _fun0007 }
 151:
                    var4 = _closure2_slot1;
                    var4 = var6 != var4;
                    if(!var4) { _fun0007_ip = 176; continue _fun0007 }
 162:
                    var7 = _closure2_slot1;
                    var6 = var7.isGroupDM;
                    var4 = var6.bind(var7)();
 176:
                    var2 = var4;
 179:
                    if(!var2) { _fun0007_ip = 326; continue _fun0007 }
 185:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 20;
                    var2 = var6[var2];
                    var6 = var4.bind(var1)(var2);
                    var4 = var6.transitionToChannel;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var4.bind(var6)(var2);
                    _fun0007_ip = 326; continue _fun0007;
 227:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var2 = var7[var2];
                    var10 = var4.bind(var1)(var2);
                    var9 = var10.setGravitySelectedSummary;
                    var4 = _closure2_slot1;
                    var8 = var4.id;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var6 = var9.bind(var10)(var8, var6);
                    var6 = _closure1_slot0;
                    var5 = 19;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.navigateToPost;
                    var4 = var4.id;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var2 = var2.startId;
                    var2 = var5.bind(var6)(var4, var3, var2);
 326:
                    return var1;
                }
            };
            var13 = var10.bind(var13)(var2, var4);
            var16 = _closure1_slot4;
            var10 = var16.useCallback;
            var2 = var14.channelId;
            var4 = new Array(3);
            var4[0] = var2;
            var2 = var14.id;
            var4[1] = var2;
            var2 = var14.type;
            var4[2] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 16;
                    var2 = var10[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var8 = var2.ICYMIAnalytics;
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var4 = 17;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0008_ip = 92; continue _fun0008 }
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
            var10 = var10.bind(var16)(var2, var4);
            if(!(var1 != var15)) { _fun0004_ip = 1431; continue _fun0004 }
 385:
            var2 = var15.guild_id;
            if(!(var1 != var2)) { _fun0004_ip = 1431; continue _fun0004 }
 397:
            if(!(var1 != var9)) { _fun0004_ip = 1431; continue _fun0004 }
 404:
            if(!(var1 != var6)) { _fun0004_ip = 1431; continue _fun0004 }
 411:
            var16 = global;
            var17 = var16.Set;
            var2 = var14.messages;
            var2 = var2[var3];
            var2 = var2.content;
            var19 = var18.bind(var5)(var2);
            var4 = var19.filter;
            var2 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.startsWith;
                    var1 = 'http';
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 24:
                    var3 = var4.startsWith;
                    var2 = 'https';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 42:
                    return var1;
                }
            };
            var29 = var4.bind(var19)(var2);
            var4 = var17.prototype;
            var4 = Object.create(var4, {constructor: {value: var17}});
            var30 = var4;
            var2 = new var30[var17](var29, var28);
            var17 = var2 instanceof Object ? var2 : var4;
            var19 = var16.Set;
            var2 = var14.topic;
            var29 = var18.bind(var5)(var2);
            var4 = var19.prototype;
            var4 = Object.create(var4, {constructor: {value: var19}});
            var30 = var4;
            var2 = new var30[var19](var29, var28);
            var4 = var2 instanceof Object ? var2 : var4;
            var19 = var16.Set;
            var2 = var14.summShort;
            var29 = var18.bind(var5)(var2);
            var18 = var19.prototype;
            var18 = Object.create(var18, {constructor: {value: var19}});
            var30 = var18;
            var2 = new var30[var19](var29, var28);
            var2 = var2 instanceof Object ? var2 : var18;
            _closure2_slot4 = var2;
            var19 = var16.Array;
            var18 = var19.from;
            var20 = var18.bind(var19)(var17);
            var19 = var20.filter;
            var18 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var19.bind(var20)(var18);
            var18 = var18.length;
            var17 = var17.size;
            var21 = var18 / var17;
            var17 = var16.Array;
            var16 = var17.from;
            var17 = var16.bind(var17)(var4);
            var16 = var17.filter;
            var7 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var16.bind(var17)(var7);
            var7 = var7.length;
            var4 = var4.size;
            var7 = var7 / var4;
            var4 = 0.8;
            var19 = var7 > var4;
            if(!var19) { _fun0004_ip = 677; continue _fun0004 }
 665:
            var4 = var2.size;
            var2 = 15;
            var19 = var4 < var2;
 677:
            var2 = var14.summShort;
            var2 = var2.length;
            var22 = var3 === var2;
            if(!var22) { _fun0004_ip = 710; continue _fun0004 }
 695:
            var2 = var14.topic;
            var2 = var2.length;
            var22 = var3 === var2;
 710:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 19;
            var2 = var16[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.SummaryContentPost;
            var2 = {};
            var2['channel'] = var15;
            var2['guild'] = var9;
            var2['author'] = var6;
            var6 = var14.id;
            var2['id'] = var6;
            var9 = _closure1_slot1;
            var6 = 22;
            var6 = var16[var6];
            var17 = var9.bind(var5)(var6);
            var9 = var17.extractTimestamp;
            var6 = var14.endId;
            var6 = var9.bind(var17)(var6);
            var2['timestamp'] = var6;
            var2['disableInteractions'] = var8;
            var9 = var14.type;
            var6 = 17;
            var6 = var16[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.SummaryType;
            var7 = var6.SOURCE_1;
            var6 = 'summary';
            if(!(var9 === var7)) { _fun0004_ip = 850; continue _fun0004 }
 844:
            var6 = 'summary_regenerated';
 850:
            var2['type'] = var6;
            var2['onHeaderPress'] = var13;
            var2['onHeaderLongPress'] = var10;
            var9 = _closure1_slot10;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 23;
            var6 = var16[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var13;
            var6['onLongPress'] = var10;
            var10 = 'button';
            var6['accessibilityRole'] = var10;
            var10 = 130;
            var6['unstable_pressDelay'] = var10;
            var10 = var12.pressable;
            var6['style'] = var10;
            var6['disabled'] = var8;
            var16 = _closure1_slot11;
            var13 = _closure1_slot5;
            var10 = {};
            var17 = var12.container;
            var10['style'] = var17;
            var18 = null;
            if(var22) { _fun0004_ip = 1059; continue _fun0004 }
 959:
            var23 = _closure1_slot10;
            var20 = _closure1_slot0;
            var26 = _closure1_slot2;
            var17 = 24;
            var17 = var26[var17];
            var17 = var20.bind(var5)(var17);
            var20 = var17.Text;
            var17 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var25 = _closure1_slot1;
            var24 = 25;
            var24 = var26[var24];
            var27 = var25.bind(var5)(var24);
            var26 = var27.parseInlineReply;
            if(var19) { _fun0004_ip = 1035; continue _fun0004 }
 1027:
            var25 = var14.topic;
            _fun0004_ip = 1041; continue _fun0004;
 1035:
            var25 = var14.summShort;
 1041:
            var24 = true;
            var24 = var26.bind(var27)(var25, var24);
            var17['children'] = var24;
            var18 = var23.bind(var5)(var20, var17);
 1059:
            var17 = new Array(3);
            var17[0] = var18;
            var18 = null;
            if(var22) { _fun0004_ip = 1198; continue _fun0004 }
 1075:
            var20 = 0.7;
            var18 = null;
            if(!(!(var21 > var20))) { _fun0004_ip = 1198; continue _fun0004 }
 1091:
            var18 = null;
            if(var19) { _fun0004_ip = 1198; continue _fun0004 }
 1096:
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 24;
            var19 = var25[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var23 = {};
            var24 = 8;
            var23['marginTop'] = var24;
            var19['style'] = var23;
            var24 = _closure1_slot1;
            var23 = 25;
            var23 = var25[var23];
            var26 = var24.bind(var5)(var23);
            var25 = var26.parseInlineReply;
            var24 = var14.summShort;
            var23 = true;
            var23 = var25.bind(var26)(var24, var23);
            var19['children'] = var23;
            var18 = var21.bind(var5)(var20, var19);
 1198:
            var17[1] = var18;
            var20 = _closure1_slot10;
            var19 = _closure1_slot5;
            var18 = {};
            var21 = {};
            if(var22) { _fun0004_ip = 1223; continue _fun0004 }
 1217:
            var22 = _closure1_slot9;
            _fun0004_ip = 1254; continue _fun0004;
 1223:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 9;
            var23 = var25[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.spacing;
            var22 = var23.PX_4;
 1254:
            var21['marginTop'] = var22;
            var22 = _closure1_slot9;
            var21['marginBottom'] = var22;
            var18['style'] = var21;
            var23 = _closure1_slot10;
            var22 = _closure1_slot14;
            var21 = {};
            var21['topic'] = var14;
            var21 = var23.bind(var5)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[2] = var18;
            var10['children'] = var17;
            var10 = var16.bind(var5)(var13, var10);
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(var8) { _fun0004_ip = 1415; continue _fun0004 }
 1338:
            var10 = _closure1_slot10;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var12.footer;
            var8['style'] = var12;
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 26;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.SummaryShareRow;
            var11 = {};
            var11['channel'] = var15;
            var11['topic'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1415:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1431:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MAX_AVATARS_IN_PILE'] = var2;
    return var1;
})();