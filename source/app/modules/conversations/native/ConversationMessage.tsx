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
case 0:
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
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var5 = var5.radii;
            var3 = var5.md;
case 2:
            var2['borderRadius'] = var3;
            var1['messageContainer'] = var2;
            var2 = {};
            var3 = _closure1_slot13;
            var2['maxHeight'] = var3;
            var5 = 'bottomPreview';
            var3 = arg2;
            var5 = var5 === var3;
            var9 = 0;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var7];
            var10 = var12.bind(var6)(var10);
            var10 = var10.spacing;
            var9 = var10.PX_16;
case 4:
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
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = _closure1_slot1;
            var11 = _closure1_slot2;
            var11 = var11[var7];
            var11 = var12.bind(var6)(var11);
            var11 = var11.spacing;
            var10 = var11.PX_64;
case 6:
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
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.spacing;
            var3 = var4.PX_16;
case 8:
            var2['marginTop'] = var3;
            var1['mediaContainer'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/native/ConversationMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var16 = var6.message;
            var31 = var6.channel;
            var _closure2_slot0 = var31;
            var34 = var6.hideTimestamp;
            var4 = undefined;
            if(!(var34 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var34 = false;
case 10:
            var22 = var6.isKeyMessage;
            if(!(var22 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var22 = false;
case 12:
            var14 = var6.previewType;
            var _closure2_slot1 = var14;
            var8 = var6.containerStyle;
            var7 = var6.noPointerEvents;
            if(!(var7 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = false;
case 14:
            var33 = var6.backgroundVariant;
            if(!(var33 === var4)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var33 = 'primary';
case 16:
            var23 = var6.hideAdditionalButtons;
            if(!(var23 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var23 = false;
case 18:
            var5 = var6.disableNavigateOnPress;
            if(!(var5 === var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = false;
case 20:
            var _closure2_slot2 = var5;
            var15 = var6.channelStyling;
            if(!(var15 === var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var15 = false;
case 22:
            var _closure2_slot3 = var15;
            var11 = var6.scrollViewRef;
            var _closure2_slot4 = var11;
            var2 = var6.setScrollPosition;
            var _closure2_slot5 = var2;
            var3 = var6.truncate;
            if(!(var3 === var4)) { _fun0002_ip = 24; continue _fun0002 }
case 4:
            var3 = false;
case 24:
            var _closure2_slot6 = var3;
            var18 = var6.renderLoadingSpacer;
            if(!(var18 === var4)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var18 = false;
case 25:
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var17 = _closure1_slot4;
            var6 = var17.useState;
            var27 = true;
            var6 = var6.bind(var17)(var27);
            var12 = _closure1_slot3;
            var10 = 2;
            var6 = var12.bind(var4)(var6, var10);
            var20 = 0;
            var19 = var6[var20];
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
            var29 = var6.trackItemInteraction;
            _closure2_slot10 = var29;
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
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var5 = _closure1_slot7;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var3 = var3.guild_id;
                    var2 = _closure2_slot11;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 27:
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var9, var6);
            var6 = 12;
            var6 = var12[var6];
            var28 = var10.bind(var4)(var6);
            var17 = var28.useName;
            var6 = null;
            var10 = var6 == var31;
            var16 = undefined;
            if(var10) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var16 = var31.guild_id;
case 29:
            var10 = var6 == var31;
            var12 = undefined;
            if(var10) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var12 = var31.id;
case 31:
            var10 = var25.author;
            var36 = var17.bind(var28)(var16, var12, var10);
            var12 = var6 == var9;
            var10 = undefined;
            if(var12) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var10 = var9.colorString;
case 33:
            if(!(var6 == var10)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var10 = _closure1_slot9;
case 35:
            var9 = _closure1_slot14;
            var12 = var9.bind(var4)(var10, var14, var15);
            var38 = _closure1_slot1;
            var32 = _closure1_slot2;
            var9 = 13;
            var9 = var32[var9];
            var9 = var38.bind(var4)(var9);
            var17 = var9.bind(var4)();
            var10 = _closure1_slot0;
            var9 = 14;
            var9 = var32[var9];
            var16 = var10.bind(var4)(var9);
            var9 = var16.useConversationBackgroundColors;
            var9 = var9.bind(var16)();
            var28 = var9.primaryBackground;
            var16 = var9.secondaryBackground;
            var9 = 8;
            var9 = var32[var9];
            var35 = var10.bind(var4)(var9);
            var30 = var35.createNativeStyleProperties;
            var9 = {};
            var37 = 7;
            var37 = var32[var37];
            var37 = var38.bind(var4)(var37);
            var37 = var37.colors;
            var37 = var37.TEXT_NORMAL;
            var9['seeMoreLabelColor'] = var37;
            var9 = var30.bind(var35)(var9);
            var30 = var9.bind(var4)(var17);
            _closure2_slot12 = var30;
            var9 = 15;
            var9 = var32[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.useToken;
            var32 = 'primary';
            if(!(var32 === var33)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var16 = var28;
case 37:
            var9 = var9.bind(var10)(var16, var17);
            _closure2_slot13 = var9;
            var17 = _closure1_slot4;
            var16 = var17.useMemo;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 16;
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
            var9 = 17;
            var9 = var17[var9];
            var28 = var16.bind(var4)(var9);
            var17 = var28.extractMediaSourcesFromMessage;
            var9 = var6 == var31;
            var16 = undefined;
            if(var9) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var16 = var31.guild_id;
case 39:
            var43 = _closure1_slot8;
            var47 = var28;
            var46 = var25;
            var45 = var25;
            var44 = var16;
            var17 = var47[var17](var46, var45, var44, var43, var42);
            var9 = var6 != var21;
            _closure2_slot14 = var9;
            var16 = var6 != var17;
            if(!var16) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var17 = var17.length;
            var16 = var17 > var20;
case 41:
            if(!var16) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var16 = var9;
case 43:
            _closure2_slot15 = var16;
            var28 = _closure1_slot4;
            var20 = var28.useMemo;
            var17 = new Array(3);
            var17[0] = var9;
            var17[1] = var15;
            var17[2] = var16;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 18;
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
                    var4 = 19;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var8 = var4.DEFAULT_OPTIONS;
                    var9 = var2;
                    var4 = copyDataProperties(var9, var8);
                    var5 = false;
                    var4 = 'renderReactions';
                    var2[var4] = var5;
                    var4 = _closure2_slot3;
                    if(var4) { _fun0004_ip = 4; continue _fun0004 }
case 45:
                    var4 = {'gifAutoPlay': true, 'renderCodedLinks': false, 'renderForumPostActions': false, 'ignoreMentioned': true, 'renderThreadEmbeds': false, 'renderReplies': false};
                    var7 = _closure2_slot14;
                    var5 = !var7;
                    if(!var7) { _fun0004_ip = 46; continue _fun0004 }
case 23:
                    var7 = _closure2_slot15;
                    var5 = !var7;
case 46:
                    var4['renderAttachments'] = var5;
                    var7 = _closure2_slot14;
                    var5 = !var7;
                    if(!var7) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                    var6 = _closure2_slot15;
                    var5 = !var6;
case 47:
                    var4['renderEmbeds'] = var5;
                    _fun0004_ip = 24; continue _fun0004;
case 4:
                    var4 = {};
case 24:
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
            var33 = var6 == var24;
            var32 = undefined;
            if(var33) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var32 = var24.type;
case 49:
            var9[2] = var32;
            var30 = var30.seeMoreLabelColor;
            var9[3] = var30;
            var9[4] = var3;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot3;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 20;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.MessageContextType;
                    if(var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var2 = var6.SEARCH;
                    _fun0005_ip = 53; continue _fun0005;
case 51:
                    var2 = var6.DEFAULT;
case 53:
                    var3['contextType'] = var2;
                    var2 = _closure2_slot1;
                    var7 = null;
                    if(!(var7 == var2)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var2 = _closure2_slot6;
                    if(!var2) { _fun0005_ip = 54; continue _fun0005 }
case 56:
                    var2 = _closure2_slot9;
                    var2 = var7 == var2;
                    var6 = undefined;
                    if(var2) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var2 = _closure2_slot9;
                    var6 = var2.type;
case 57:
                    var2 = 'forum_thread';
                    var2 = var2 !== var6;
                    if(!var2) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                    var6 = _closure2_slot9;
                    var6 = var7 == var6;
                    var7 = undefined;
                    if(var6) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var6 = _closure2_slot9;
                    var7 = var6.type;
case 61:
                    var6 = 'announcement';
                    var2 = var6 !== var7;
case 59:
                    var6 = 3;
                    if(var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var6 = 5;
case 63:
                    var2 = {};
                    var2['numberOfLines'] = var6;
                    var6 = true;
                    var2['expandable'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 21;
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
case 54:
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
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot4;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                    var4 = _closure2_slot5;
                    var3 = var5 != var4;
case 65:
                    if(!var3) { _fun0006_ip = 67; continue _fun0006 }
case 68:
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
case 67:
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
            var3[0] = var31;
            var3[1] = var25;
            var3[2] = var5;
            var3[3] = var29;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = null;
                    var2 = var3 == var2;
                    if(var2) { _fun0007_ip = 69; continue _fun0007 }
case 28:
                    var2 = _closure2_slot2;
case 69:
                    if(var2) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                    var2 = _closure2_slot10;
                    if(!(var3 != var2)) { _fun0007_ip = 72; continue _fun0007 }
case 11:
                    var4 = _closure2_slot10;
                    var3 = undefined;
                    var2 = 'press_preview_message';
                    var2 = var4.bind(var3)(var2);
case 72:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 22;
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
                    var1 = 23;
                    var1 = var4[var1];
                    var2 = var3.bind(var2)(var1);
                    var1 = var2.closeConversation;
                    var1 = var1.bind(var2)();
case 70:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var9.bind(var17)(var2, var3);
            var3 = var17.useCallback;
            var2 = var25.author;
            var30 = var2.id;
            var2 = new Array(2);
            var2[0] = var30;
            var2[1] = var29;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 68; continue _fun0008 }
case 73:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var1 = 'open_profile';
                    var1 = var3.bind(var2)(var1);
case 68:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
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
            var33 = var3.bind(var17)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var1['onPress'] = var9;
            var1['disabled'] = var5;
            var9 = var12.messageContainer;
            var5 = new Array(5);
            var5[0] = var9;
            var9 = var22;
            if(!var9) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var9 = var12.keyMessageContainer;
case 74:
            var5[1] = var9;
            var9 = var6 != var14;
            if(!var9) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var9 = var12.previewContainer;
case 76:
            var5[2] = var9;
            var5[3] = var8;
            if(!var7) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var8 = {};
            var9 = 'none';
            var8['pointerEvents'] = var9;
            var7 = var8;
case 78:
            var5[4] = var7;
            var1['style'] = var5;
            var7 = !var15;
            if(!var7) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var5 = {};
            var5['onPress'] = var33;
            var29 = _closure1_slot1;
            var35 = _closure1_slot2;
            var30 = 25;
            var17 = var35[var30];
            var29 = var29.bind(var4)(var17);
            var17 = {};
            var32 = var25.author;
            var17['user'] = var32;
            var32 = _closure1_slot0;
            var30 = var35[var30];
            var30 = var32.bind(var4)(var30);
            var30 = var30.AvatarSizes;
            var30 = var30.XSMALL;
            var17['size'] = var30;
            var32 = var6 == var31;
            var30 = undefined;
            if(var32) { _fun0002_ip = 82; continue _fun0002 }
case 83:
            var30 = var31.guild_id;
case 82:
            var17['guildId'] = var30;
            var30 = var12.avatar;
            var17['style'] = var30;
            var17 = var9.bind(var4)(var29, var17);
            var5['children'] = var17;
            var7 = var9.bind(var4)(var8, var5);
case 80:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot6;
            var7 = {};
            var17 = var12.messageContent;
            var7['style'] = var17;
            var17 = !var15;
            if(!var17) { _fun0002_ip = 84; continue _fun0002 }
case 85:
            var30 = _closure1_slot12;
            var29 = _closure1_slot6;
            var15 = {};
            var31 = var12.usernameContainer;
            var15['style'] = var31;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var35 = 26;
            var31 = var31[var35];
            var31 = var32.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            var37 = var12.username;
            var31['style'] = var37;
            var31['onPress'] = var33;
            var33 = new Array(2);
            var33[0] = var36;
            var34 = !var34;
            if(!var34) { _fun0002_ip = 86; continue _fun0002 }
case 87:
            var37 = _closure1_slot12;
            var39 = _closure1_slot0;
            var42 = _closure1_slot2;
            var35 = var42[var35];
            var35 = var39.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            var38 = 27;
            var38 = var42[var38];
            var40 = var39.bind(var4)(var38);
            var39 = var40.getRelativeTimestamp;
            var41 = _closure1_slot1;
            var38 = 28;
            var38 = var42[var38];
            var42 = var41.bind(var4)(var38);
            var41 = var42.extractTimestamp;
            var38 = var25.id;
            var38 = var41.bind(var42)(var38);
            var39 = var39.bind(var40)(var38);
            var38 = ['   '];
            var38[1] = var39;
            var35['children'] = var38;
            var34 = var37.bind(var4)(var36, var35);
case 86:
            var33[1] = var34;
            var31['children'] = var33;
            var32 = var30.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var34 = _closure1_slot11;
            var33 = _closure1_slot6;
            var32 = {};
            var35 = var12.spacer;
            var32['style'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var31[1] = var32;
            var15['children'] = var31;
            var17 = var30.bind(var4)(var29, var15);
case 84:
            var15 = new Array(5);
            var15[0] = var17;
            var17 = null;
            if(!var19) { _fun0002_ip = 88; continue _fun0002 }
case 89:
            var17 = null;
            if(!var18) { _fun0002_ip = 88; continue _fun0002 }
case 90:
            var29 = _closure1_slot11;
            var19 = _closure1_slot6;
            var18 = {};
            var30 = var12.loadingSpacer;
            var18['style'] = var30;
            var17 = var29.bind(var4)(var19, var18);
case 88:
            var15[1] = var17;
            var19 = _closure1_slot11;
            var18 = _closure1_slot1;
            var29 = _closure1_slot2;
            var17 = 29;
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
            if(!var28) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var20 = _closure1_slot13;
case 91:
            var17['maxHeight'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var15[2] = var17;
            if(!var16) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var16 = var6 != var21;
case 93:
            if(!var16) { _fun0002_ip = 95; continue _fun0002 }
case 96:
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
case 95:
            var15[3] = var16;
            var16 = var6 != var24;
            if(!var16) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var19 = _closure1_slot11;
            var18 = _closure1_slot6;
            var17 = {};
            var20 = var12.emojiContainer;
            var17['style'] = var20;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 30;
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
case 97:
            var15[4] = var16;
            var7['children'] = var15;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = var6 != var14;
            if(!var6) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var15 = _closure1_slot2;
            var7 = 31;
            var7 = var15[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var12 = var12.linearGradient;
            var7['style'] = var12;
            var12 = 'bottomPreview';
            var12 = var12 === var14;
            var15 = _closure1_slot10;
            if(var12) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var14 = var15.END;
            _fun0002_ip = 103; continue _fun0002;
case 101:
            var14 = var15.START;
case 103:
            var7['start'] = var14;
            var13 = _closure1_slot10;
            if(var12) { _fun0002_ip = 104; continue _fun0002 }
case 105:
            var12 = var13.START;
            _fun0002_ip = 106; continue _fun0002;
case 104:
            var12 = var13.END;
case 106:
            var7['end'] = var12;
            var7['pointerEvents'] = var11;
            var7['colors'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 99:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();