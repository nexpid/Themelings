// app/modules/icymi/native/ICYMIConversationSummaryRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function CardGradient() {
        var2 = _closure1_slot14;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 12;
        var2 = var7[var2];
        var9 = var8.bind(var4)(var2);
        var5 = var9.useToken;
        var2 = _closure1_slot1;
        var3 = 11;
        var3 = var7[var3];
        var3 = var2.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.ACTION_SHEET_GRADIENT_BG;
        var10 = var5.bind(var9)(var3);
        var3 = 13;
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
        var3 = _closure1_slot12;
        var1 = 14;
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
    var _closure1_slot15 = var1;
    var1 = function ConversationMessages(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.topic;
            var _closure2_slot0 = var1;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var6 = var1.messages;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var10.bind(var11)(var9, var3);
            var _closure2_slot1 = var21;
            var3 = var7[var2];
            var11 = var4.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 54; continue _fun0002 }
 16:
                    var5 = _closure1_slot9;
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
            var3 = var10.bind(var11)(var9, var3);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot14;
            var18 = var3.bind(var5)();
            var9 = _closure1_slot1;
            var3 = 16;
            var3 = var7[var3];
            var11 = var9.bind(var5)(var3);
            var10 = var11.age;
            var12 = var1.messageIds;
            var3 = var1.messageIds;
            var9 = var3.length;
            var3 = 1;
            var9 = var9 - var3;
            var9 = var12[var9];
            var10 = var10.bind(var11)(var9);
            var9 = 17;
            var9 = var7[var9];
            var9 = var4.bind(var5)(var9);
            var9 = var9.ACTIVE_CONVERSATION_AGE;
            var9 = var10 < var9;
            var _closure2_slot3 = var9;
            var2 = var7[var2];
            var10 = var4.bind(var5)(var2);
            var7 = var10.useStateFromStores;
            var2 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var10)(var4, var2);
            var19 = var6;
            if(!var9) { _fun0001_ip = 331; continue _fun0001 }
 277:
            var4 = var2._array;
            var7 = var4.length;
            var4 = 0;
            var19 = var6;
            if(!(var7 > var4)) { _fun0001_ip = 331; continue _fun0001 }
 297:
            var7 = var2._array;
            var4 = var7.slice;
            var2 = var2._array;
            var10 = var2.length;
            var2 = 3;
            var2 = var10 - var2;
            var19 = var4.bind(var7)(var2);
 331:
            var4 = _closure1_slot4;
            var2 = var4.useState;
            var22 = 0;
            var4 = var2.bind(var4)(var22);
            var2 = _closure1_slot3;
            var10 = 2;
            var2 = var2.bind(var5)(var4, var10);
            var7 = var2[var22];
            _closure2_slot4 = var7;
            var2 = var2[var3];
            _closure2_slot5 = var2;
            var11 = _closure1_slot4;
            var4 = var11.useState;
            var2 = false;
            var4 = var4.bind(var11)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4, var10);
            var11 = var2[var22];
            var2 = var2[var3];
            _closure2_slot6 = var2;
            var12 = _closure1_slot4;
            var4 = var12.useState;
            var2 = var1.id;
            var4 = var4.bind(var12)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var5)(var4, var10);
            var10 = var2[var22];
            _closure2_slot7 = var10;
            var2 = var2[var3];
            _closure2_slot8 = var2;
            var4 = _closure1_slot4;
            var3 = var4.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var10;
            var2[1] = var7;
            var6 = var6.length;
            var2[2] = var6;
            var1 = var1.id;
            var2[3] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    if(!(var3 === var2)) { _fun0003_ip = 65; continue _fun0003 }
 20:
                    var3 = _closure2_slot4;
                    var2 = 0;
                    var2 = var2 !== var3;
                    if(!var2) { _fun0003_ip = 47; continue _fun0003 }
 33:
                    var4 = _closure2_slot4;
                    var3 = 460;
                    var2 = var4 >= var3;
 47:
                    if(!var2) { _fun0003_ip = 107; continue _fun0003 }
 50:
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0003_ip = 107; continue _fun0003;
 65:
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = 0;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot6;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot8;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var10 = null;
            var2 = var10 == var21;
            var1 = null;
            if(var2) { _fun0001_ip = 862; continue _fun0001 }
 526:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = function onLayout(arg1) {
                var3 = _closure2_slot5;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onLayout'] = var6;
            var7 = var18.outerCardContainer;
            var6 = new Array(1);
            var6[0] = var7;
            var2['style'] = var6;
            var6 = 'none';
            var2['pointerEvents'] = var6;
            var12 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var14 = var18.messagesContainer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var11;
            if(!var14) { _fun0001_ip = 611; continue _fun0001 }
 605:
            var14 = var18.messagesContainerGradient;
 611:
            var13[1] = var14;
            var6['style'] = var13;
            var15 = _closure1_slot12;
            var14 = _closure1_slot5;
            var13 = {};
            var20 = var18.messages;
            var17 = new Array(2);
            var17[0] = var20;
            var20 = {};
            var22 = 0;
            if(!var9) { _fun0001_ip = 681; continue _fun0001 }
 650:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var23 = 11;
            var23 = var25[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.spacing;
            var22 = var23.PX_12;
 681:
            var20['paddingBottom'] = var22;
            var17[1] = var20;
            var13['style'] = var17;
            var17 = var19.map;
            var16 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot12;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot2;
                var2['muted'] = var7;
                var7 = _closure2_slot1;
                var2['channel'] = var7;
                var2['message'] = var1;
                var6 = _closure2_slot3;
                var2['showTimestamps'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var16 = var17.bind(var19)(var16);
            var13['children'] = var16;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = null;
            if(!var9) { _fun0001_ip = 800; continue _fun0001 }
 734:
            var17 = _closure1_slot12;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var18.typingArea;
            var15['style'] = var18;
            var20 = _closure1_slot12;
            var19 = _closure1_slot1;
            var22 = _closure1_slot2;
            var18 = 19;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var18['channel'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
 800:
            var13[1] = var14;
            var6['children'] = var13;
            var7 = var12.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var11) { _fun0001_ip = 848; continue _fun0001 }
 827:
            var7 = null;
            if(var9) { _fun0001_ip = 848; continue _fun0001 }
 832:
            var10 = _closure1_slot12;
            var9 = _closure1_slot15;
            var8 = {};
            var7 = var10.bind(var5)(var9, var8);
 848:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 862:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var2 = native4;
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
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var13 = var5.ICYMI_MARGIN;
    var _closure1_slot10 = var13;
    var14 = var5.MESSAGE_CONTENT_INSET;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ComponentActions;
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot12 = var8;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 10;
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
    var11 = 11;
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
    var10 = {};
    var16 = 360;
    var10['maxHeight'] = var16;
    var5['activeContainer'] = var10;
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
    var _closure1_slot14 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIConversationSummaryRow.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ICYMIConversationSummaryRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var15 = var1.topic;
            var _closure2_slot0 = var15;
            var8 = var1.disableInteractions;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
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
            var1 = _closure1_slot14;
            var12 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 15;
            var3 = var1[var4];
            var9 = var2.bind(var5)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var7.bind(var9)(var6, var3);
            var _closure2_slot1 = var16;
            var1 = var1[var4];
            var6 = var2.bind(var5)(var1);
            var3 = var6.useStateFromStores;
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
            var18 = var3.bind(var6)(var2, var1);
            var _closure2_slot2 = var18;
            var1 = var15.messages;
            var3 = 0;
            var2 = var1[var3];
            var1 = null;
            var6 = var1 == var2;
            var9 = undefined;
            if(var6) { _fun0004_ip = 187; continue _fun0004 }
 181:
            var9 = var2.author;
 187:
            var10 = _closure1_slot1;
            var2 = _closure1_slot2;
            var6 = 16;
            var7 = var2[var6];
            var14 = var10.bind(var5)(var7);
            var13 = var14.age;
            var19 = var15.messageIds;
            var7 = var15.messageIds;
            var7 = var7.length;
            var10 = 1;
            var7 = var7 - var10;
            var7 = var19[var7];
            var14 = var13.bind(var14)(var7);
            var7 = _closure1_slot0;
            var13 = 17;
            var13 = var2[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.ACTIVE_CONVERSATION_AGE;
            var14 = var14 < var13;
            _closure2_slot3 = var14;
            var2 = var2[var4];
            var19 = var7.bind(var5)(var2);
            var13 = var19.useStateFromStores;
            var2 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessages;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var13.bind(var19)(var7, var2);
            if(!var14) { _fun0004_ip = 333; continue _fun0004 }
 318:
            var7 = var2._array;
            var7 = var7.length;
            if(!(!(var7 > var3))) { _fun0004_ip = 355; continue _fun0004 }
 333:
            var19 = var15.messages;
            var13 = var19.slice;
            var7 = 3;
            var7 = var13.bind(var19)(var3, var7);
            _fun0004_ip = 389; continue _fun0004;
 355:
            var19 = var2._array;
            var13 = var19.slice;
            var2 = var2._array;
            var20 = var2.length;
            var2 = 3;
            var2 = var20 - var2;
            var7 = var13.bind(var19)(var2);
 389:
            _closure2_slot4 = var7;
            var2 = var7.length;
            var2 = var2 - var10;
            var10 = var7[var2];
            var13 = var1 == var10;
            var2 = undefined;
            if(var13) { _fun0004_ip = 420; continue _fun0004 }
 415:
            var2 = var10.id;
 420:
            _closure2_slot5 = var2;
            var19 = _closure1_slot4;
            var13 = var19.useMemo;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure2_slot4;
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
            var7 = var13.bind(var19)(var7, var10);
            _closure2_slot6 = var7;
            var19 = _closure1_slot4;
            var13 = var19.useEffect;
            var10 = var1 == var18;
            var20 = undefined;
            if(var10) { _fun0004_ip = 481; continue _fun0004 }
 476:
            var20 = var18.id;
 481:
            var10 = new Array(2);
            var10[0] = var20;
            var10[1] = var7;
            var7 = function() {
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
                    var3 = 20;
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
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var3, var2);
 94:
                    return var1;
                }
            };
            var7 = var13.bind(var19)(var7, var10);
            var19 = _closure1_slot4;
            var13 = var19.useEffect;
            var10 = new Array(3);
            var10[0] = var18;
            var10[1] = var16;
            var10[2] = var14;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0007_ip = 20; continue _fun0007 }
 10:
                    var4 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 != var4;
 20:
                    if(!var2) { _fun0007_ip = 33; continue _fun0007 }
 23:
                    var4 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var4;
 33:
                    if(!var2) { _fun0007_ip = 81; continue _fun0007 }
 36:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.subscribeGuild;
                    var1 = _closure2_slot2;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 81:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var19)(var7, var10);
            var13 = _closure1_slot4;
            var10 = var13.useCallback;
            var7 = new Array(7);
            var7[0] = var16;
            var7[1] = var18;
            var19 = var15.id;
            var7[2] = var19;
            var19 = var15.startId;
            var7[3] = var19;
            var19 = var15.type;
            var7[4] = var19;
            var7[5] = var2;
            var7[6] = var14;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 22;
                    var3 = var11[var6];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var3);
                    var8 = var9.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var7 = var4.id;
                    var10 = var4.type;
                    var4 = 23;
                    var4 = var11[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var10 === var4)) { _fun0008_ip = 86; continue _fun0008 }
 80:
                    var5 = 'summary_regenerated';
 86:
                    var4 = 'press_summary';
                    var4 = var8.bind(var9)(var7, var5, var4);
                    var4 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 != var4)) { _fun0008_ip = 117; continue _fun0008 }
 109:
                    var4 = _closure2_slot2;
                    if(!(var7 == var4)) { _fun0008_ip = 224; continue _fun0008 }
 117:
                    var4 = _closure2_slot1;
                    var4 = var7 != var4;
                    if(!var4) { _fun0008_ip = 142; continue _fun0008 }
 128:
                    var8 = _closure2_slot1;
                    var5 = var8.isDM;
                    var4 = var5.bind(var8)();
 142:
                    if(var4) { _fun0008_ip = 173; continue _fun0008 }
 145:
                    var5 = _closure2_slot1;
                    var5 = var7 != var5;
                    if(!var5) { _fun0008_ip = 170; continue _fun0008 }
 156:
                    var8 = _closure2_slot1;
                    var7 = var8.isGroupDM;
                    var5 = var7.bind(var8)();
 170:
                    var4 = var5;
 173:
                    if(!var4) { _fun0008_ip = 431; continue _fun0008 }
 179:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 26;
                    var4 = var7[var4];
                    var7 = var5.bind(var1)(var4);
                    var5 = var7.transitionToChannel;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var4 = var5.bind(var7)(var4);
                    _fun0008_ip = 431; continue _fun0008;
 224:
                    var4 = _closure2_slot3;
                    if(var4) { _fun0008_ip = 329; continue _fun0008 }
 231:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 25;
                    var4 = var7[var4];
                    var11 = var5.bind(var1)(var4);
                    var10 = var11.setGravitySelectedSummary;
                    var5 = _closure2_slot1;
                    var9 = var5.id;
                    var4 = _closure2_slot0;
                    var8 = var4.id;
                    var8 = var10.bind(var11)(var9, var8);
                    var8 = _closure1_slot0;
                    var7 = var7[var6];
                    var9 = var8.bind(var1)(var7);
                    var8 = var9.navigateToPost;
                    var7 = var5.id;
                    var5 = _closure2_slot2;
                    var5 = var5.id;
                    var4 = var4.startId;
                    var4 = var8.bind(var9)(var7, var5, var4);
                    _fun0008_ip = 431; continue _fun0008;
 329:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = var5[var6];
                    var10 = var4.bind(var1)(var6);
                    var9 = var10.navigateToPost;
                    var6 = _closure2_slot1;
                    var8 = var6.id;
                    var7 = _closure2_slot2;
                    var7 = var7.id;
                    var3 = _closure2_slot5;
                    var3 = var9.bind(var10)(var8, var7, var3);
                    var3 = 24;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var5 = var3.ComponentDispatch;
                    var4 = var5.dispatch;
                    var2 = _closure1_slot11;
                    var3 = var2.TEXTAREA_FOCUS;
                    var2 = {};
                    var6 = var6.id;
                    var2['channelId'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 431:
                    return var1;
                }
            };
            var13 = var10.bind(var13)(var2, var7);
            var19 = _closure1_slot4;
            var10 = var19.useCallback;
            var2 = var15.channelId;
            var7 = new Array(3);
            var7[0] = var2;
            var2 = var15.id;
            var7[1] = var2;
            var2 = var15.type;
            var7[2] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 22;
                    var2 = var10[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var2);
                    var7 = var8.trackItemInteraction;
                    var4 = _closure2_slot0;
                    var6 = var4.id;
                    var9 = var4.type;
                    var4 = 23;
                    var4 = var10[var4];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.SummaryType;
                    var4 = var4.SOURCE_1;
                    var5 = 'summary';
                    if(!(var9 === var4)) { _fun0009_ip = 86; continue _fun0009 }
 80:
                    var5 = 'summary_regenerated';
 86:
                    var4 = 'long_press_channel';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openChannelLongPressActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var10 = var10.bind(var19)(var2, var7);
            if(!(var1 != var16)) { _fun0004_ip = 1724; continue _fun0004 }
 674:
            var2 = var16.guild_id;
            if(!(var1 != var2)) { _fun0004_ip = 1724; continue _fun0004 }
 686:
            if(!(var1 != var18)) { _fun0004_ip = 1724; continue _fun0004 }
 693:
            if(!(var1 != var9)) { _fun0004_ip = 1724; continue _fun0004 }
 700:
            var19 = global;
            var20 = var19.Set;
            var2 = var15.messages;
            var2 = var2[var3];
            var2 = var2.content;
            var22 = var21.bind(var5)(var2);
            var7 = var22.filter;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.startsWith;
                    var1 = 'http';
                    var1 = var2.bind(var4)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0010_ip = 42; continue _fun0010 }
 24:
                    var3 = var4.startsWith;
                    var2 = 'https';
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 42:
                    return var1;
                }
            };
            var30 = var7.bind(var22)(var2);
            var7 = var20.prototype;
            var7 = Object.create(var7, {constructor: {value: var20}});
            var31 = var7;
            var2 = new var31[var20](var30, var29);
            var20 = var2 instanceof Object ? var2 : var7;
            var22 = var19.Set;
            var2 = var15.topic;
            var30 = var21.bind(var5)(var2);
            var7 = var22.prototype;
            var7 = Object.create(var7, {constructor: {value: var22}});
            var31 = var7;
            var2 = new var31[var22](var30, var29);
            var7 = var2 instanceof Object ? var2 : var7;
            var22 = var19.Set;
            var2 = var15.summShort;
            var30 = var21.bind(var5)(var2);
            var21 = var22.prototype;
            var21 = Object.create(var21, {constructor: {value: var22}});
            var31 = var21;
            var2 = new var31[var22](var30, var29);
            var2 = var2 instanceof Object ? var2 : var21;
            _closure2_slot7 = var2;
            var22 = var19.Array;
            var21 = var22.from;
            var23 = var21.bind(var22)(var20);
            var22 = var23.filter;
            var21 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var22.bind(var23)(var21);
            var21 = var21.length;
            var20 = var20.size;
            var22 = var21 / var20;
            var20 = var19.Array;
            var19 = var20.from;
            var20 = var19.bind(var20)(var7);
            var19 = var20.filter;
            var17 = function(arg1) {
                var3 = _closure2_slot7;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var19.bind(var20)(var17);
            var17 = var17.length;
            var7 = var7.size;
            var17 = var17 / var7;
            var7 = 0.8;
            var20 = var17 > var7;
            if(!var20) { _fun0004_ip = 963; continue _fun0004 }
 954:
            var2 = var2.size;
            var20 = var2 < var4;
 963:
            var2 = var15.summShort;
            var2 = var2.length;
            var23 = var3 === var2;
            if(!var23) { _fun0004_ip = 996; continue _fun0004 }
 981:
            var2 = var15.topic;
            var2 = var2.length;
            var23 = var3 === var2;
 996:
            var4 = _closure1_slot13;
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 22;
            var2 = var17[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.SummaryContentPost;
            var2 = {};
            var2['channel'] = var16;
            var2['guild'] = var18;
            var2['author'] = var9;
            var9 = var15.id;
            var2['id'] = var9;
            var9 = _closure1_slot1;
            var6 = var17[var6];
            var18 = var9.bind(var5)(var6);
            var9 = var18.extractTimestamp;
            var6 = var15.endId;
            var6 = var9.bind(var18)(var6);
            var2['timestamp'] = var6;
            var2['disableInteractions'] = var8;
            var9 = var15.type;
            var6 = 23;
            var6 = var17[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.SummaryType;
            var7 = var6.SOURCE_1;
            var6 = 'summary';
            if(!(var9 === var7)) { _fun0004_ip = 1133; continue _fun0004 }
 1127:
            var6 = 'summary_regenerated';
 1133:
            var2['type'] = var6;
            var2['onHeaderPress'] = var13;
            var2['onHeaderLongPress'] = var10;
            var2['isActive'] = var14;
            var9 = _closure1_slot12;
            var7 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = 28;
            var6 = var17[var6];
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
            var17 = _closure1_slot13;
            var13 = _closure1_slot5;
            var10 = {};
            var18 = var12.container;
            var10['style'] = var18;
            var19 = null;
            if(var23) { _fun0004_ip = 1347; continue _fun0004 }
 1247:
            var24 = _closure1_slot12;
            var21 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 29;
            var18 = var27[var18];
            var18 = var21.bind(var5)(var18);
            var21 = var18.Text;
            var18 = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            var26 = _closure1_slot1;
            var25 = 30;
            var25 = var27[var25];
            var28 = var26.bind(var5)(var25);
            var27 = var28.parseInlineReply;
            if(var20) { _fun0004_ip = 1323; continue _fun0004 }
 1315:
            var26 = var15.topic;
            _fun0004_ip = 1329; continue _fun0004;
 1323:
            var26 = var15.summShort;
 1329:
            var25 = true;
            var25 = var27.bind(var28)(var26, var25);
            var18['children'] = var25;
            var19 = var24.bind(var5)(var21, var18);
 1347:
            var18 = new Array(3);
            var18[0] = var19;
            var19 = null;
            if(var23) { _fun0004_ip = 1486; continue _fun0004 }
 1363:
            var21 = 0.7;
            var19 = null;
            if(!(!(var22 > var21))) { _fun0004_ip = 1486; continue _fun0004 }
 1379:
            var19 = null;
            if(var20) { _fun0004_ip = 1486; continue _fun0004 }
 1384:
            var22 = _closure1_slot12;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            var20 = 29;
            var20 = var26[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-md/normal', 'color': 'text-secondary'};
            var24 = {};
            var25 = 8;
            var24['marginTop'] = var25;
            var20['style'] = var24;
            var25 = _closure1_slot1;
            var24 = 30;
            var24 = var26[var24];
            var27 = var25.bind(var5)(var24);
            var26 = var27.parseInlineReply;
            var25 = var15.summShort;
            var24 = true;
            var24 = var26.bind(var27)(var25, var24);
            var20['children'] = var24;
            var19 = var22.bind(var5)(var21, var20);
 1486:
            var18[1] = var19;
            var21 = _closure1_slot12;
            var20 = _closure1_slot5;
            var19 = {};
            var22 = {};
            if(var23) { _fun0004_ip = 1511; continue _fun0004 }
 1505:
            var23 = _closure1_slot10;
            _fun0004_ip = 1542; continue _fun0004;
 1511:
            var25 = _closure1_slot1;
            var26 = _closure1_slot2;
            var24 = 11;
            var24 = var26[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.spacing;
            var23 = var24.PX_4;
 1542:
            var22['marginTop'] = var23;
            var23 = _closure1_slot10;
            var22['marginBottom'] = var23;
            var19['style'] = var22;
            var24 = _closure1_slot12;
            var23 = _closure1_slot16;
            var22 = {};
            var22['topic'] = var15;
            var22 = var24.bind(var5)(var23, var22);
            var19['children'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var18[2] = var19;
            var10['children'] = var18;
            var10 = var17.bind(var5)(var13, var10);
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(var8) { _fun0004_ip = 1708; continue _fun0004 }
 1626:
            var10 = _closure1_slot12;
            var9 = _closure1_slot5;
            var8 = {};
            var12 = var12.footer;
            var8['style'] = var12;
            var13 = _closure1_slot12;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 31;
            var11 = var17[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.SummaryShareRow;
            var11 = {};
            var11['channel'] = var16;
            var11['topic'] = var15;
            var11['active'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 1708:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1724:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['MAX_AVATARS_IN_PILE'] = var2;
    return var1;
})();