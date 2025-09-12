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
            var11 = arg2;
            var9 = arg3;
            var1 = {};
            var2 = {'flexDirection': 'row', 'gap': 10, 'overflow': 'hidden', 'alignItems': 'flex-start'};
            var3 = 'row';
            var7 = undefined;
            var4 = undefined;
            if(var9) { _fun0001_ip = 67; continue _fun0001 }
 33:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.radii;
            var4 = var5.md;
 67:
            var2['borderRadius'] = var4;
            var1['messageContainer'] = var2;
            var2 = {};
            var4 = _closure1_slot13;
            var2['maxHeight'] = var4;
            var4 = 'bottomPreview';
            var8 = var4 === var11;
            var4 = 0;
            if(!var8) { _fun0001_ip = 136; continue _fun0001 }
 105:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 7;
            var10 = var13[var10];
            var10 = var12.bind(var7)(var10);
            var10 = var10.spacing;
            var4 = var10.PX_4;
 136:
            var2['paddingTop'] = var4;
            var4 = 0;
            if(!var8) { _fun0001_ip = 177; continue _fun0001 }
 146:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 7;
            var8 = var12[var8];
            var8 = var10.bind(var7)(var8);
            var8 = var8.spacing;
            var4 = var8.PX_8;
 177:
            var2['marginTop'] = var4;
            var4 = 'none';
            var2['pointerEvents'] = var4;
            var1['previewContainer'] = var2;
            var2 = {};
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var8 = 7;
            var4 = var4[var8];
            var4 = var10.bind(var7)(var4);
            var4 = var4.colors;
            var4 = var4.BACKGROUND_MESSAGE_HIGHLIGHT;
            var2['backgroundColor'] = var4;
            var1['keyMessageContainer'] = var2;
            var2 = {};
            var4 = 1;
            var2['flex'] = var4;
            var10 = null;
            var10 = var10 != var11;
            if(!var10) { _fun0001_ip = 269; continue _fun0001 }
 255:
            var10 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-start'};
 269:
            var15 = var2;
            var14 = var10;
            var10 = copyDataProperties(var15, var14);
            var1['messageContent'] = var2;
            var2 = {};
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var8];
            var10 = var11.bind(var7)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var2['marginTop'] = var10;
            var6 = 0;
            if(!var9) { _fun0001_ip = 351; continue _fun0001 }
 323:
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var8];
            var9 = var10.bind(var7)(var9);
            var9 = var9.spacing;
            var6 = var9.PX_64;
 351:
            var2['marginLeft'] = var6;
            var1['emojiContainer'] = var2;
            var2 = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0, 'top': 0};
            var1['linearGradient'] = var2;
            var2 = {};
            var6 = arg1;
            var2['color'] = var6;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.spacing;
            var5 = var5.PX_4;
            var2['marginBottom'] = var5;
            var1['username'] = var2;
            var2 = {'bottom': 0, 'position': 'relative'};
            var1['avatar'] = var2;
            var2 = {'width': '100%', 'height': 350};
            var1['loadingSpacer'] = var2;
            var2 = {};
            var2['flexGrow'] = var4;
            var1['spacer'] = var2;
            var2 = {};
            var2['flexDirection'] = var3;
            var1['usernameContainer'] = var2;
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
            var2 = arg1;
            var12 = var2.message;
            var30 = var2.channel;
            var _closure2_slot0 = var30;
            var33 = var2.hideTimestamp;
            var4 = undefined;
            if(!(var33 === var4)) { _fun0002_ip = 33; continue _fun0002 }
 31:
            var33 = false;
 33:
            var22 = var2.isKeyMessage;
            if(!(var22 === var4)) { _fun0002_ip = 45; continue _fun0002 }
 43:
            var22 = false;
 45:
            var14 = var2.previewType;
            var _closure2_slot1 = var14;
            var8 = var2.containerStyle;
            var7 = var2.noPointerEvents;
            if(!(var7 === var4)) { _fun0002_ip = 75; continue _fun0002 }
 73:
            var7 = false;
 75:
            var28 = var2.backgroundVariant;
            if(!(var28 === var4)) { _fun0002_ip = 89; continue _fun0002 }
 85:
            var28 = 'primary';
 89:
            var23 = var2.hideAdditionalButtons;
            if(!(var23 === var4)) { _fun0002_ip = 101; continue _fun0002 }
 99:
            var23 = false;
 101:
            var5 = var2.disableNavigateOnPress;
            if(!(var5 === var4)) { _fun0002_ip = 113; continue _fun0002 }
 111:
            var5 = false;
 113:
            var _closure2_slot2 = var5;
            var15 = var2.channelStyling;
            if(!(var15 === var4)) { _fun0002_ip = 129; continue _fun0002 }
 127:
            var15 = false;
 129:
            var _closure2_slot3 = var15;
            var11 = var2.scrollViewRef;
            var _closure2_slot4 = var11;
            var2 = var2.setScrollPosition;
            var _closure2_slot5 = var2;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var16 = _closure1_slot4;
            var3 = var16.useState;
            var21 = true;
            var3 = var3.bind(var16)(var21);
            var10 = _closure1_slot3;
            var9 = 2;
            var3 = var10.bind(var4)(var3, var9);
            var27 = 0;
            var18 = var3[var27];
            var6 = 1;
            var3 = var3[var6];
            _closure2_slot6 = var3;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var4);
            var3 = var10.bind(var4)(var3, var9);
            var20 = var3[var27];
            var3 = var3[var6];
            _closure2_slot7 = var3;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 9;
            var6 = var10[var3];
            var16 = var9.bind(var4)(var6);
            var6 = var16.useConversationContext;
            var6 = var6.bind(var16)();
            var24 = var6.conversation;
            _closure2_slot8 = var24;
            var3 = var10[var3];
            var6 = var9.bind(var4)(var3);
            var3 = var6.useConversationRenderContext;
            var3 = var3.bind(var6)();
            var19 = var3.MediaComponent;
            var26 = var3.trackItemInteraction;
            _closure2_slot9 = var26;
            var3 = 10;
            var3 = var10[var3];
            var6 = var9.bind(var4)(var3);
            var3 = var6.useConversationMessage;
            var25 = var3.bind(var6)(var12);
            _closure2_slot10 = var25;
            var3 = 11;
            var3 = var10[var3];
            var16 = var9.bind(var4)(var3);
            var12 = var16.useStateFromStores;
            var3 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
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
                    var2 = _closure2_slot10;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 59:
                    return var1;
                }
            };
            var3 = var12.bind(var16)(var6, var3);
            var6 = 12;
            var6 = var10[var6];
            var17 = var9.bind(var4)(var6);
            var16 = var17.useName;
            var6 = null;
            var9 = var6 == var30;
            var12 = undefined;
            if(var9) { _fun0002_ip = 440; continue _fun0002 }
 435:
            var12 = var30.guild_id;
 440:
            var9 = var6 == var30;
            var10 = undefined;
            if(var9) { _fun0002_ip = 454; continue _fun0002 }
 449:
            var10 = var30.id;
 454:
            var9 = var25.author;
            var35 = var16.bind(var17)(var12, var10, var9);
            var10 = var6 == var3;
            var9 = undefined;
            if(var10) { _fun0002_ip = 482; continue _fun0002 }
 476:
            var9 = var3.colorString;
 482:
            if(!(var6 == var9)) { _fun0002_ip = 490; continue _fun0002 }
 486:
            var9 = _closure1_slot9;
 490:
            var3 = _closure1_slot14;
            var12 = var3.bind(var4)(var9, var14, var15);
            var34 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 13;
            var3 = var16[var3];
            var3 = var34.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var3 = 8;
            var3 = var16[var3];
            var29 = var10.bind(var4)(var3);
            var9 = var29.createNativeStyleProperties;
            var3 = {};
            var31 = 7;
            var32 = var16[var31];
            var32 = var34.bind(var4)(var32);
            var32 = var32.colors;
            var32 = var32.TEXT_NORMAL;
            var3['seeMoreLabelColor'] = var32;
            var3 = var9.bind(var29)(var3);
            var3 = var3.bind(var4)(var17);
            _closure2_slot11 = var3;
            var9 = 14;
            var9 = var16[var9];
            var16 = var10.bind(var4)(var9);
            var10 = var16.useToken;
            var9 = 'primary';
            if(!(var9 !== var28)) { _fun0002_ip = 647; continue _fun0002 }
 617:
            var28 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var31];
            var9 = var28.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.CARD_SECONDARY_BG;
            _fun0002_ip = 675; continue _fun0002;
 647:
            var29 = _closure1_slot1;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var28 = var29.bind(var4)(var28);
            var28 = var28.colors;
            var9 = var28.CARD_PRIMARY_BG;
 675:
            var9 = var10.bind(var16)(var9, var17);
            _closure2_slot12 = var9;
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
                var7 = _closure2_slot12;
                var1 = 0.1;
                var7 = var8.bind(var9)(var7, var1);
                var1 = new Array(2);
                var1[0] = var7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.hexOpacityToRgba;
                var3 = _closure2_slot12;
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
            if(var9) { _fun0002_ip = 755; continue _fun0002 }
 750:
            var16 = var30.guild_id;
 755:
            var42 = _closure1_slot8;
            var46 = var28;
            var45 = var25;
            var44 = var25;
            var43 = var16;
            var17 = var46[var17](var45, var44, var43, var42, var41);
            var9 = var6 != var19;
            _closure2_slot13 = var9;
            var16 = var6 != var17;
            if(!var16) { _fun0002_ip = 799; continue _fun0002 }
 790:
            var17 = var17.length;
            var16 = var17 > var27;
 799:
            if(!var16) { _fun0002_ip = 805; continue _fun0002 }
 802:
            var16 = var9;
 805:
            var28 = _closure1_slot4;
            var27 = var28.useMemo;
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
                    var6 = _closure2_slot13;
                    var6 = !var6;
                    var4['renderAttachments'] = var6;
                    var5 = _closure2_slot13;
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
            var27 = var27.bind(var28)(var9, var17);
            var17 = var28.useCallback;
            var9 = new Array(4);
            var9[0] = var15;
            var9[1] = var14;
            var31 = var6 == var24;
            var29 = undefined;
            if(var31) { _fun0002_ip = 870; continue _fun0002 }
 865:
            var29 = var24.type;
 870:
            var9[2] = var29;
            var3 = var3.seeMoreLabelColor;
            var9[3] = var3;
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
                    if(!(var7 == var2)) { _fun0005_ip = 246; continue _fun0005 }
 77:
                    var2 = _closure2_slot8;
                    var2 = var7 == var2;
                    var6 = undefined;
                    if(var2) { _fun0005_ip = 99; continue _fun0005 }
 90:
                    var2 = _closure2_slot8;
                    var6 = var2.type;
 99:
                    var2 = 'forum_thread';
                    var2 = var2 !== var6;
                    if(!var2) { _fun0005_ip = 142; continue _fun0005 }
 112:
                    var6 = _closure2_slot8;
                    var6 = var7 == var6;
                    var7 = undefined;
                    if(var6) { _fun0005_ip = 134; continue _fun0005 }
 125:
                    var6 = _closure2_slot8;
                    var7 = var6.type;
 134:
                    var6 = 'announcement';
                    var2 = var6 !== var7;
 142:
                    var6 = 3;
                    if(var2) { _fun0005_ip = 151; continue _fun0005 }
 148:
                    var6 = 5;
 151:
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
                    var4 = _closure2_slot11;
                    var4 = var4.seeMoreLabelColor;
                    var2['seeMoreLabelColor'] = var4;
                    var3['truncation'] = var2;
 246:
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
                    var4 = _closure2_slot7;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.width;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
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
            var3[3] = var26;
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
                    var2 = _closure2_slot9;
                    if(!(var3 != var2)) { _fun0007_ip = 48; continue _fun0007 }
 31:
                    var4 = _closure2_slot9;
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
                    var1 = _closure2_slot10;
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
            var2[1] = var26;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 30; continue _fun0008 }
 13:
                    var3 = _closure2_slot9;
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
                    var4 = _closure2_slot10;
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
            if(!var9) { _fun0002_ip = 1054; continue _fun0002 }
 1048:
            var9 = var12.keyMessageContainer;
 1054:
            var5[1] = var9;
            var9 = var6 != var14;
            if(!var9) { _fun0002_ip = 1071; continue _fun0002 }
 1065:
            var9 = var12.previewContainer;
 1071:
            var5[2] = var9;
            var5[3] = var8;
            if(!var7) { _fun0002_ip = 1096; continue _fun0002 }
 1082:
            var8 = {};
            var9 = 'none';
            var8['pointerEvents'] = var9;
            var7 = var8;
 1096:
            var5[4] = var7;
            var1['style'] = var5;
            var7 = !var15;
            if(!var7) { _fun0002_ip = 1229; continue _fun0002 }
 1110:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var5 = {};
            var5['onPress'] = var32;
            var26 = _closure1_slot1;
            var34 = _closure1_slot2;
            var29 = 24;
            var17 = var34[var29];
            var26 = var26.bind(var4)(var17);
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
            if(var31) { _fun0002_ip = 1199; continue _fun0002 }
 1194:
            var29 = var30.guild_id;
 1199:
            var17['guildId'] = var29;
            var29 = var12.avatar;
            var17['style'] = var29;
            var17 = var9.bind(var4)(var26, var17);
            var5['children'] = var17;
            var7 = var9.bind(var4)(var8, var5);
 1229:
            var5 = new Array(3);
            var5[0] = var7;
            var9 = _closure1_slot12;
            var8 = _closure1_slot6;
            var7 = {};
            var17 = var12.messageContent;
            var7['style'] = var17;
            var17 = !var15;
            if(!var17) { _fun0002_ip = 1535; continue _fun0002 }
 1266:
            var29 = _closure1_slot12;
            var26 = _closure1_slot6;
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
            if(!var33) { _fun0002_ip = 1473; continue _fun0002 }
 1354:
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
 1473:
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
            var17 = var29.bind(var4)(var26, var15);
 1535:
            var15 = new Array(5);
            var15[0] = var17;
            var17 = null;
            if(!var18) { _fun0002_ip = 1574; continue _fun0002 }
 1548:
            var29 = _closure1_slot11;
            var26 = _closure1_slot6;
            var18 = {};
            var30 = var12.loadingSpacer;
            var18['style'] = var30;
            var17 = var29.bind(var4)(var26, var18);
 1574:
            var15[1] = var17;
            var26 = _closure1_slot11;
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
            var17['rowGenerator'] = var27;
            var28 = var6 != var14;
            var27 = undefined;
            if(!var28) { _fun0002_ip = 1653; continue _fun0002 }
 1649:
            var27 = _closure1_slot13;
 1653:
            var17['maxHeight'] = var27;
            var17 = var26.bind(var4)(var18, var17);
            var15[2] = var17;
            if(!var16) { _fun0002_ip = 1675; continue _fun0002 }
 1671:
            var16 = var6 != var19;
 1675:
            if(!var16) { _fun0002_ip = 1704; continue _fun0002 }
 1678:
            var18 = _closure1_slot11;
            var17 = {};
            var17['message'] = var25;
            var17['visible'] = var21;
            var17['widthOverride'] = var20;
            var16 = var18.bind(var4)(var19, var17);
 1704:
            var15[3] = var16;
            var16 = var6 != var24;
            if(!var16) { _fun0002_ip = 1805; continue _fun0002 }
 1715:
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
 1805:
            var15[4] = var16;
            var7['children'] = var15;
            var7 = var9.bind(var4)(var8, var7);
            var5[1] = var7;
            var6 = var6 != var14;
            if(!var6) { _fun0002_ip = 1941; continue _fun0002 }
 1830:
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
            if(var12) { _fun0002_ip = 1891; continue _fun0002 }
 1883:
            var14 = var15.END;
            _fun0002_ip = 1897; continue _fun0002;
 1891:
            var14 = var15.START;
 1897:
            var7['start'] = var14;
            var13 = _closure1_slot10;
            if(var12) { _fun0002_ip = 1916; continue _fun0002 }
 1908:
            var12 = var13.START;
            _fun0002_ip = 1922; continue _fun0002;
 1916:
            var12 = var13.END;
 1922:
            var7['end'] = var12;
            var7['pointerEvents'] = var11;
            var7['colors'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1941:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();