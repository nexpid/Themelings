// app/modules/conversations/native/ConversationMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Pressable;
    var _closure1_slot5 = var8;
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONVERSATION_VALID_EMBED_TYPES;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot9 = var8;
    var4 = var4.VerticalGradient;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_48;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var11 = arg3;
            var1 = {};
            var2 = {'flexDirection': 'row', 'gap': null, 'overflow': 'hidden', 'alignItems': 'flex-start'};
            var8 = 'row';
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 7;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_12;
            var2['gap'] = var3;
            var3 = undefined;
            if(var11) { _fun0001_ip = 98; continue _fun0001 }
 70:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.radii;
            var3 = var5.md;
 98:
            var2['borderRadius'] = var3;
            var1['messageContainer'] = var2;
            var2 = {};
            var3 = _closure1_slot13;
            var2['maxHeight'] = var3;
            var5 = 'bottomPreview';
            var3 = arg2;
            var5 = var5 === var3;
            var9 = 0;
            if(!var5) { _fun0001_ip = 163; continue _fun0001 }
 136:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var7];
            var10 = var12.bind(var6)(var10);
            var10 = var10.spacing;
            var9 = var10.PX_16;
 163:
            var2['marginTop'] = var9;
            var9 = 'none';
            var2['pointerEvents'] = var9;
            var1['previewContainer'] = var2;
            var2 = {};
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var9 = var10[var7];
            var9 = var12.bind(var6)(var9);
            var9 = var9.colors;
            var9 = var9.BACKGROUND_MESSAGE_HIGHLIGHT;
            var2['backgroundColor'] = var9;
            var1['keyMessageContainer'] = var2;
            var2 = {};
            var9 = 1;
            var2['flex'] = var9;
            var1['messageContent'] = var2;
            var2 = {};
            var10 = var10[var7];
            var10 = var12.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var2['marginTop'] = var10;
            var10 = 0;
            if(!var11) { _fun0001_ip = 293; continue _fun0001 }
 265:
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var7];
            var11 = var12.bind(var6)(var11);
            var11 = var11.spacing;
            var10 = var11.PX_64;
 293:
            var2['marginLeft'] = var10;
            var1['emojiContainer'] = var2;
            var2 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'top': 0};
            var1['linearGradient'] = var2;
            var2 = {};
            var10 = arg1;
            var2['color'] = var10;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var7];
            var10 = var11.bind(var6)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_4;
            var2['marginBottom'] = var10;
            var1['username'] = var2;
            var2 = {'bottom': 0, 'position': 'relative'};
            var1['avatar'] = var2;
            var2 = {'width': '100%', 'height': 350};
            var1['loadingSpacer'] = var2;
            var2 = {};
            var2['flexGrow'] = var9;
            var1['spacer'] = var2;
            var2 = {};
            var2['flexDirection'] = var8;
            var1['usernameContainer'] = var2;
            var2 = {};
            var3 = 0;
            if(!var5) { _fun0001_ip = 462; continue _fun0001 }
 435:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_16;
 462:
            var2['marginTop'] = var3;
            var1['mediaContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var16 = var3.message;
            var30 = var3.channel;
            var _closure2_slot0 = var30;
            var33 = var3.hideTimestamp;
            var4 = undefined;
            if(!(var33 === var4)) { _fun0002_ip = 33; continue _fun0002 }
 31:
            var33 = false;
 33:
            var22 = var3.isKeyMessage;
            if(!(var22 === var4)) { _fun0002_ip = 45; continue _fun0002 }
 43:
            var22 = false;
 45:
            var14 = var3.previewType;
            var _closure2_slot1 = var14;
            var8 = var3.containerStyle;
            var7 = var3.noPointerEvents;
            if(!(var7 === var4)) { _fun0002_ip = 75; continue _fun0002 }
 73:
            var7 = false;
 75:
            var28 = var3.backgroundVariant;
            if(!(var28 === var4)) { _fun0002_ip = 89; continue _fun0002 }
 85:
            var28 = 'primary';
 89:
            var23 = var3.hideAdditionalButtons;
            if(!(var23 === var4)) { _fun0002_ip = 101; continue _fun0002 }
 99:
            var23 = false;
 101:
            var5 = var3.disableNavigateOnPress;
            if(!(var5 === var4)) { _fun0002_ip = 113; continue _fun0002 }
 111:
            var5 = false;
 113:
            var _closure2_slot2 = var5;
            var15 = var3.channelStyling;
            if(!(var15 === var4)) { _fun0002_ip = 129; continue _fun0002 }
 127:
            var15 = false;
 129:
            var _closure2_slot3 = var15;
            var11 = var3.scrollViewRef;
            var _closure2_slot4 = var11;
            var2 = var3.setScrollPosition;
            var _closure2_slot5 = var2;
            var3 = var3.truncate;
            if(!(var3 === var4)) { _fun0002_ip = 165; continue _fun0002 }
 163:
            var3 = false;
 165:
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var17 = _closure1_slot4;
            var6 = var17.useState;
            var27 = true;
            var6 = var6.bind(var17)(var27);
            var12 = _closure1_slot3;
            var10 = 2;
            var6 = var12.bind(var4)(var6, var10);
            var20 = 0;
            var18 = var6[var20];
            var9 = 1;
            var6 = var6[var9];
            _closure2_slot7 = var6;
            var6 = var17.useState;
            var6 = var6.bind(var17)(var4);
            var6 = var12.bind(var4)(var6, var10);
            var26 = var6[var20];
            var6 = var6[var9];
            _closure2_slot8 = var6;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 9;
            var9 = var12[var6];
            var17 = var10.bind(var4)(var9);
            var9 = var17.useConversationContext;
            var9 = var9.bind(var17)();
            var24 = var9.conversation;
            _closure2_slot9 = var24;
            var6 = var12[var6];
            var9 = var10.bind(var4)(var6);
            var6 = var9.useConversationRenderContext;
            var6 = var6.bind(var9)();
            var21 = var6.MediaComponent;
            var19 = var6.trackItemInteraction;
            _closure2_slot10 = var19;
            var6 = 10;
            var6 = var12[var6];
            var9 = var10.bind(var4)(var6);
            var6 = var9.useConversationMessage;
            var25 = var6.bind(var9)(var16);
            _closure2_slot11 = var25;
            var6 = 11;
            var6 = var12[var6];
            var17 = var10.bind(var4)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 59; continue _fun0003 }
 16:
                    var5 = _closure1_slot7;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var3 = var3.guild_id;
                    var2 = _closure2_slot11;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 59:
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var9, var6);
            var6 = 12;
            var6 = var12[var6];
            var29 = var10.bind(var4)(var6);
            var17 = var29.useName;
            var6 = null;
            var10 = var6 == var30;
            var16 = undefined;
            if(var10) { _fun0002_ip = 456; continue _fun0002 }
 451:
            var16 = var30.guild_id;
 456:
            var10 = var6 == var30;
            var12 = undefined;
            if(var10) { _fun0002_ip = 470; continue _fun0002 }
 465:
            var12 = var30.id;
 470:
            var10 = var25.author;
            var35 = var17.bind(var29)(var16, var12, var10);
            var12 = var6 == var9;
            var10 = undefined;
            if(var12) { _fun0002_ip = 498; continue _fun0002 }
 492:
            var10 = var9.colorString;
 498:
            if(!(var6 == var10)) { _fun0002_ip = 506; continue _fun0002 }
 502:
            var10 = _closure1_slot9;
 506:
            var9 = _closure1_slot14;
            var12 = var9.bind(var4)(var10, var14, var15);
            var36 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 13;
            var9 = var16[var9];
            var9 = var36.bind(var4)(var9);
            var17 = var9.bind(var4)();
            var10 = _closure1_slot0;
            var9 = 8;
            var9 = var16[var9];
            var31 = var10.bind(var4)(var9);
            var29 = var31.createNativeStyleProperties;
            var9 = {};
            var32 = 7;
            var34 = var16[var32];
            var34 = var36.bind(var4)(var34);
            var34 = var34.colors;
            var34 = var34.TEXT_NORMAL;
            var9['seeMoreLabelColor'] = var34;
            var9 = var29.bind(var31)(var9);
            var29 = var9.bind(var4)(var17);
            _closure2_slot12 = var29;
            var9 = 14;
            var9 = var16[var9];
            var16 = var10.bind(var4)(var9);
            var10 = var16.useToken;
            var9 = 'primary';
            if(!(var9 !== var28)) { _fun0002_ip = 663; continue _fun0002 }
 633:
            var28 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var32];
            var9 = var28.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.CARD_SECONDARY_BG;
            _fun0002_ip = 691; continue _fun0002;
 663:
            var31 = _closure1_slot1;
            var28 = _closure1_slot2;
            var28 = var28[var32];
            var28 = var31.bind(var4)(var28);
            var28 = var28.colors;
            var9 = var28.CARD_PRIMARY_BG;
 691:
            var9 = var10.bind(var16)(var9, var17);
            _closure2_slot13 = var9;
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var1 = var6[var3];
                var4 = undefined;
                var9 = var5.bind(var4)(var1);
                var8 = var9.hexOpacityToRgba;
                var7 = _closure2_slot13;
                var1 = 0.1;
                var7 = var8.bind(var9)(var7, var1);
                var1 = new Array(2);
                var1[0] = var7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.hexOpacityToRgba;
                var3 = _closure2_slot13;
                var2 = 1;
                var2 = var4.bind(var5)(var3, var2);
                var1[1] = var2;
                return var1;
            };
            var10 = var16.bind(var17)(var9, var10);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var9 = 16;
            var9 = var17[var9];
            var28 = var16.bind(var4)(var9);
            var17 = var28.extractMediaSourcesFromMessage;
            var9 = var6 == var30;
            var16 = undefined;
            if(var9) { _fun0002_ip = 771; continue _fun0002 }
 766:
            var16 = var30.guild_id;
 771:
            var42 = _closure1_slot8;
            var46 = var28;
            var45 = var25;
            var44 = var25;
            var43 = var16;
            var17 = var46[var17](var45, var44, var43, var42, var41);
            var9 = var6 != var21;
            _closure2_slot14 = var9;
            var16 = var6 != var17;
            if(!var16) { _fun0002_ip = 815; continue _fun0002 }
 806:
            var17 = var17.length;
            var16 = var17 > var20;
 815:
            if(!var16) { _fun0002_ip = 821; continue _fun0002 }
 818:
            var16 = var9;
 821:
            var28 = _closure1_slot4;
            var20 = var28.useMemo;
            var17 = new Array(2);
            var17[0] = var9;
            var17[1] = var15;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 17;
                    var1 = var7[var1];
                    var6 = undefined;
                    var1 = var2.bind(var6)(var1);
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var10 = var2;
                    var1 = new var10[var1](var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var3 = var1.setOptions;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var8 = var4.DEFAULT_OPTIONS;
                    var9 = var2;
                    var4 = copyDataProperties(var9, var8);
                    var5 = false;
                    var4 = 'renderReactions';
                    var2[var4] = var5;
                    var4 = _closure2_slot3;
                    if(var4) { _fun0004_ip = 143; continue _fun0004 }
 103:
                    var4 = {'gifAutoPlay': true, 'renderCodedLinks': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'renderThreadEmbeds': false, 'renderReplies': false};
                    var6 = _closure2_slot14;
                    var6 = !var6;
                    var4['renderAttachments'] = var6;
                    var5 = _closure2_slot14;
                    var5 = !var5;
                    var4['renderEmbeds'] = var5;
                    _fun0004_ip = 145; continue _fun0004;
 143:
                    var4 = {};
 145:
                    var9 = var2;
                    var8 = var4;
                    var4 = copyDataProperties(var9, var8);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var20 = var20.bind(var28)(var9, var17);
            var17 = var28.useCallback;
            var9 = new Array(5);
            var9[0] = var15;
            var9[1] = var14;
            var32 = var6 == var24;
            var31 = undefined;
            if(var32) { _fun0002_ip = 886; continue _fun0002 }
 881:
            var31 = var24.type;
 886:
            var9[2] = var31;
            var29 = var29.seeMoreLabelColor;
            var9[3] = var29;
            var9[4] = var3;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot3;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.MessageContextType;
                    if(var2) { _fun0005_ip = 52; continue _fun0005 }
 44:
                    var2 = var6.SEARCH;
                    _fun0005_ip = 58; continue _fun0005;
 52:
                    var2 = var6.DEFAULT;
 58:
                    var3['contextType'] = var2;
                    var2 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0005_ip = 256; continue _fun0005 }
 77:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0005_ip = 256; continue _fun0005 }
 87:
                    var2 = _closure2_slot9;
                    var2 = var7 == var2;
                    var6 = undefined;
                    if(var2) { _fun0005_ip = 109; continue _fun0005 }
 100:
                    var2 = _closure2_slot9;
                    var6 = var2.type;
 109:
                    var2 = 'forum_thread';
                    var2 = var2 !== var6;
                    if(!var2) { _fun0005_ip = 152; continue _fun0005 }
 122:
                    var6 = _closure2_slot9;
                    var6 = var7 == var6;
                    var7 = undefined;
                    if(var6) { _fun0005_ip = 144; continue _fun0005 }
 135:
                    var6 = _closure2_slot9;
                    var7 = var6.type;
 144:
                    var6 = 'announcement';
                    var2 = var6 !== var7;
 152:
                    var6 = 3;
                    if(var2) { _fun0005_ip = 161; continue _fun0005 }
 158:
                    var6 = 5;
 161:
                    var2 = {};
                    var2['numberOfLines'] = var6;
                    var6 = true;
                    var2['expandable'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.qCozu7;
                    var5 = var6.bind(var7)(var5);
                    var2['seeMoreLabel'] = var5;
                    var4 = _closure2_slot12;
                    var4 = var4.seeMoreLabelColor;
                    var2['seeMoreLabelColor'] = var4;
                    var3['truncation'] = var2;
 256:
                    return var1;
                }
            };
            var28 = var17.bind(var28)(var3, var9);
            var17 = _closure1_slot4;
            var9 = var17.useCallback;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot4;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0006_ip = 27; continue _fun0006 }
 19:
                    var4 = _closure2_slot5;
                    var3 = var5 != var4;
 27:
                    if(!var3) { _fun0006_ip = 66; continue _fun0006 }
 30:
                    var6 = var1.currentTarget;
                    var5 = var6.measureLayout;
                    var3 = _closure2_slot4;
                    var4 = var3.current;
                    var3 = function(arg1, arg2) {
                        var3 = _closure2_slot5;
                        var2 = undefined;
                        var1 = arg2;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4, var3);
 66:
                    var4 = _closure2_slot8;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.width;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot7;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var11 = var9.bind(var17)(var2, var3);
            var9 = var17.useCallback;
            var3 = new Array(4);
            var3[0] = var30;
            var3[1] = var25;
            var3[2] = var5;
            var3[3] = var19;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var2;
                    if(var2) { _fun0007_ip = 20; continue _fun0007 }
 16:
                    var2 = _closure2_slot2;
 20:
                    if(var2) { _fun0007_ip = 131; continue _fun0007 }
 23:
                    var2 = _closure2_slot10;
                    if(!(var3 != var2)) { _fun0007_ip = 48; continue _fun0007 }
 31:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = 'press_preview_message';
                    var2 = var4.bind(var3)(var2);
 48:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var5 = var4[var2];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var5);
                    var7 = var8.navigateToMessage;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var5 = var5.guild_id;
                    var1 = _closure2_slot11;
                    var1 = var1.id;
                    var1 = var7.bind(var8)(var6, var5, var1);
                    var1 = 22;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.closeConversation;
                    var1 = var1.bind(var2)();
 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var9.bind(var17)(var2, var3);
            var3 = var17.useCallback;
            var2 = var25.author;
            var29 = var2.id;
            var2 = new Array(2);
            var2[0] = var29;
            var2[1] = var19;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 30; continue _fun0008 }
 13:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = 'open_profile';
                    var1 = var3.bind(var2)(var1);
 30:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure2_slot11;
                    var4 = var4.author;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var32 = var3.bind(var17)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var9;
            var1['disabled'] = var5;
            var9 = var12.messageContainer;
            var5 = new Array(5);
            var5[0] = var9;
            var9 = var22;
            if(!var9) { _fun0002_ip = 1074; continue _fun0002 }
 1068:
            var9 = var12.keyMessageContainer;
 1074:
            var5[1] = var9;
            var9 = var6 != var14;
            if(!var9) { _fun0002_ip = 1091; continue _fun0002 }
 1085:
            var9 = var12.previewContainer;
 1091:
            var5[2] = var9;
            var5[3] = var8;
            if(!var7) { _fun0002_ip = 1116; continue _fun0002 }
 1102:
            var8 = {};
            var9 = 'none';
            var8['pointerEvents'] = var9;
            var7 = var8;
 1116:
            var5[4] = var7;
            var1['style'] = var5;
            var7 = !var15;
            if(!var7) { _fun0002_ip = 1249; continue _fun0002 }
 1130:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var5 = {};
            var5['onPress'] = var32;
            var19 = _closure1_slot1;
            var34 = _closure1_slot2;
            var29 = 24;
            var17 = var34[var29];
            var19 = var19.bind(var4)(var17);
            var17 = {};
            var31 = var25.author;
            var17['user'] = var31;
            var31 = _closure1_slot0;
            var29 = var34[var29];
            var29 = var31.bind(var4)(var29);
            var29 = var29.AvatarSizes;
            var29 = var29.XSMALL;
            var17['size'] = var29;
            var31 = var6 == var30;
            var29 = undefined;
            if(var31) { _fun0002_ip = 1219; continue _fun0002 }
 1214:
            var29 = var30.guild_id;
 1219:
            var17['guildId'] = var29;
            var29 = var12.avatar;
            var17['style'] = var29;
            var17 = var9.bind(var4)(var19, var17);
            var5['children'] = var17;
            var7 = var9.bind(var4)(var8, var5);
 1249:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot6;
            var7 = {};
            var17 = var12.messageContent;
            var7['style'] = var17;
            var17 = !var15;
            if(!var17) { _fun0002_ip = 1555; continue _fun0002 }
 1286:
            var29 = _closure1_slot12;
            var19 = _closure1_slot6;
            var15 = {};
            var30 = var12.usernameContainer;
            var15['style'] = var30;
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var34 = 25;
            var30 = var30[var34];
            var30 = var31.bind(var4)(var30);
            var31 = var30.Text;
            var30 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            var36 = var12.username;
            var30['style'] = var36;
            var30['onPress'] = var32;
            var32 = new Array(2);
            var32[0] = var35;
            var33 = !var33;
            if(!var33) { _fun0002_ip = 1493; continue _fun0002 }
 1374:
            var36 = _closure1_slot12;
            var38 = _closure1_slot0;
            var41 = _closure1_slot2;
            var34 = var41[var34];
            var34 = var38.bind(var4)(var34);
            var35 = var34.Text;
            var34 = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            var37 = 26;
            var37 = var41[var37];
            var39 = var38.bind(var4)(var37);
            var38 = var39.getRelativeTimestamp;
            var40 = _closure1_slot1;
            var37 = 27;
            var37 = var41[var37];
            var41 = var40.bind(var4)(var37);
            var40 = var41.extractTimestamp;
            var37 = var25.id;
            var37 = var40.bind(var41)(var37);
            var38 = var38.bind(var39)(var37);
            var37 = ['   '];
            var37[1] = var38;
            var34['children'] = var37;
            var33 = var36.bind(var4)(var35, var34);
 1493:
            var32[1] = var33;
            var30['children'] = var32;
            var31 = var29.bind(var4)(var31, var30);
            var30 = new Array(2);
            var30[0] = var31;
            var33 = _closure1_slot11;
            var32 = _closure1_slot6;
            var31 = {};
            var34 = var12.spacer;
            var31['style'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var30[1] = var31;
            var15['children'] = var30;
            var17 = var29.bind(var4)(var19, var15);
 1555:
            var15 = new Array(5);
            var15[0] = var17;
            var17 = null;
            if(!var18) { _fun0002_ip = 1594; continue _fun0002 }
 1568:
            var29 = _closure1_slot11;
            var19 = _closure1_slot6;
            var18 = {};
            var30 = var12.loadingSpacer;
            var18['style'] = var30;
            var17 = var29.bind(var4)(var19, var18);
 1594:
            var15[1] = var17;
            var19 = _closure1_slot11;
            var18 = _closure1_slot1;
            var29 = _closure1_slot2;
            var17 = 28;
            var17 = var29[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {'onLayout': null, 'pointerEvents': 'none', 'horizontalOffset': 0};
            var17['onLayout'] = var11;
            var11 = 'none';
            var17['modifyRow'] = var28;
            var17['message'] = var25;
            var17['rowGenerator'] = var20;
            var28 = var6 != var14;
            var20 = undefined;
            if(!var28) { _fun0002_ip = 1673; continue _fun0002 }
 1669:
            var20 = _closure1_slot13;
 1673:
            var17['maxHeight'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var15[2] = var17;
            if(!var16) { _fun0002_ip = 1695; continue _fun0002 }
 1691:
            var16 = var6 != var21;
 1695:
            if(!var16) { _fun0002_ip = 1750; continue _fun0002 }
 1698:
            var19 = _closure1_slot11;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var12.mediaContainer;
            var17['style'] = var20;
            var20 = {};
            var20['message'] = var25;
            var20['visible'] = var27;
            var20['widthOverride'] = var26;
            var20 = var19.bind(var4)(var21, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 1750:
            var15[3] = var16;
            var16 = var6 != var24;
            if(!var16) { _fun0002_ip = 1851; continue _fun0002 }
 1761:
            var19 = _closure1_slot11;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var12.emojiContainer;
            var17['style'] = var20;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 29;
            var20 = var26[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var20['message'] = var25;
            var25 = var24.channel;
            var20['channel'] = var25;
            var24 = var24.guild;
            var20['guild'] = var24;
            var20['hideAdditionalButtons'] = var23;
            var20['isKeyMessage'] = var22;
            var20 = var19.bind(var4)(var21, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 1851:
            var15[4] = var16;
            var7['children'] = var15;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = var6 != var14;
            if(!var6) { _fun0002_ip = 1987; continue _fun0002 }
 1876:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 30;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var12.linearGradient;
            var7['style'] = var12;
            var12 = 'bottomPreview';
            var12 = var12 === var14;
            var15 = _closure1_slot10;
            if(var12) { _fun0002_ip = 1937; continue _fun0002 }
 1929:
            var14 = var15.END;
            _fun0002_ip = 1943; continue _fun0002;
 1937:
            var14 = var15.START;
 1943:
            var7['start'] = var14;
            var13 = _closure1_slot10;
            if(var12) { _fun0002_ip = 1962; continue _fun0002 }
 1954:
            var12 = var13.START;
            _fun0002_ip = 1968; continue _fun0002;
 1962:
            var12 = var13.END;
 1968:
            var7['end'] = var12;
            var7['pointerEvents'] = var11;
            var7['colors'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1987:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();