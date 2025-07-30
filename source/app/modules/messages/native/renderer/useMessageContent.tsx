// app/modules/messages/native/renderer/useMessageContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MessageTypes;
    var _closure1_slot12 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot13 = var7;
    var7 = var4.MessageFlags;
    var _closure1_slot14 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot15 = var4;
    var4 = new Array(0);
    var _closure1_slot16 = var4;
    var4 = new Array(0);
    var _closure1_slot17 = var4;
    var4 = new Array(0);
    var _closure1_slot18 = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/useMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMessageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.message;
            var _closure2_slot0 = var10;
            var12 = var2.isFirst;
            var21 = var2.isEditing;
            var16 = var2.canShowImages;
            var40 = var2.isSystemDM;
            var9 = var2.threadStarterMessageHeader;
            var23 = var2.renderContentOnly;
            var27 = var2.isMentioningReply;
            var3 = undefined;
            if(!(var27 === var3)) { _fun0001_ip = 64; continue _fun0001 }
 62:
            var27 = false;
 64:
            var6 = var2.canShowReactions;
            if(!(var6 === var3)) { _fun0001_ip = 76; continue _fun0001 }
 74:
            var6 = true;
 76:
            var20 = var2.useAlternateEmbedColors;
            if(!(var20 === var3)) { _fun0001_ip = 88; continue _fun0001 }
 86:
            var20 = false;
 88:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var3;
            var _closure2_slot3 = var3;
            var _closure2_slot4 = var3;
            var _closure2_slot5 = var3;
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var3;
            var _closure2_slot8 = var3;
            var _closure2_slot9 = var3;
            var _closure2_slot10 = var3;
            var _closure2_slot11 = var3;
            var _closure2_slot12 = var3;
            var _closure2_slot13 = var3;
            var _closure2_slot14 = var3;
            var _closure2_slot15 = var3;
            var14 = _closure1_slot0;
            var8 = _closure1_slot2;
            var17 = 20;
            var4 = var8[var17];
            var13 = var14.bind(var3)(var4);
            var11 = var13.useStateFromStoresObject;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var5 = function() {
                var1 = {};
                var2 = _closure1_slot5;
                var3 = var2.roleStyle;
                var1['roleStyle'] = var3;
                var3 = var2.useReducedMotion;
                var1['useReducedMotion'] = var3;
                var2 = var2.alwaysShowLinkDecorations;
                var1['alwaysShowLinkDecorations'] = var2;
                return var1;
            };
            var4 = new Array(0);
            var4 = var11.bind(var13)(var7, var5, var4);
            var32 = var4.roleStyle;
            var34 = var4.useReducedMotion;
            _closure2_slot1 = var34;
            var29 = var4.alwaysShowLinkDecorations;
            var26 = _closure1_slot3;
            var5 = var26.useContext;
            var4 = 21;
            var4 = var8[var4];
            var4 = var14.bind(var3)(var4);
            var4 = var4.RenderMessageOptionsContext;
            var7 = var5.bind(var26)(var4);
            var4 = var7.inlineAttachmentMedia;
            var5 = var7.inlineEmbedMedia;
            var13 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var37 = var7.animateEmoji;
            var38 = var7.gifAutoPlay;
            _closure2_slot2 = var38;
            var49 = var7.ignoreMentioned;
            var11 = var7.renderCommunicationDisabled;
            var19 = var7.renderAttachments;
            var25 = var7.ignoreEmbedDescriptionCache;
            var31 = var7.forceHideSimpleEmbedContent;
            var7 = var7.renderPolls;
            var22 = var26.useContext;
            var28 = _closure1_slot1;
            var24 = 22;
            var18 = var8[var24];
            var18 = var28.bind(var3)(var18);
            var18 = var22.bind(var26)(var18);
            var8 = var8[var24];
            var8 = var14.bind(var3)(var8);
            var8 = var8.NestedMessageType;
            var8 = var8.REPLIED_MESSAGE;
            var8 = var18 === var8;
            if(var8) { _fun0001_ip = 424; continue _fun0001 }
 391:
            var22 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var24];
            var14 = var22.bind(var3)(var14);
            var14 = var14.NestedMessageType;
            var14 = var14.THREAD_EMBED;
            var8 = var18 === var14;
 424:
            var24 = _closure1_slot3;
            var18 = var24.useContext;
            var26 = _closure1_slot1;
            var22 = _closure1_slot2;
            var14 = 23;
            var14 = var22[var14];
            var14 = var26.bind(var3)(var14);
            var39 = var18.bind(var24)(var14);
            var18 = _closure1_slot0;
            var14 = 17;
            var14 = var22[var14];
            var14 = var18.bind(var3)(var14);
            var24 = var14.ViewImageDescriptions;
            var14 = var24.useSetting;
            var35 = var14.bind(var24)();
            _closure2_slot3 = var35;
            var14 = 24;
            var14 = var22[var14];
            var18 = var18.bind(var3)(var14);
            var14 = var18.useMessageContentColors;
            var22 = var14.bind(var18)(var20);
            _closure2_slot4 = var22;
            var14 = true;
            var18 = var14 === var16;
            var28 = var18;
            if(!var18) { _fun0001_ip = 537; continue _fun0001 }
 534:
            var28 = var13;
 537:
            var20 = var18;
            if(!var18) { _fun0001_ip = 546; continue _fun0001 }
 543:
            var20 = var5;
 546:
            if(!var18) { _fun0001_ip = 552; continue _fun0001 }
 549:
            var18 = var4;
 552:
            _closure2_slot5 = var18;
            var4 = var10.getChannelId;
            var13 = var4.bind(var10)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var17];
            var24 = var5.bind(var3)(var4);
            var16 = var24.useStateFromStores;
            var4 = _closure1_slot11;
            var14 = new Array(1);
            var14[0] = var4;
            var4 = var10.id;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getUploaderFileForMessageId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var16.bind(var24)(var14, var4, var5);
            _closure2_slot6 = var14;
            var5 = null;
            var16 = var5 != var14;
            var26 = _closure1_slot9;
            var24 = var26.getChannel;
            var4 = var10.getChannelId;
            var4 = var4.bind(var10)();
            var4 = var24.bind(var26)(var4);
            var24 = var5 == var4;
            var53 = undefined;
            if(var24) { _fun0001_ip = 678; continue _fun0001 }
 668:
            var24 = var4.getGuildId;
            var53 = var24.bind(var4)();
 678:
            _closure2_slot7 = var53;
            var24 = !var12;
            if(var24) { _fun0001_ip = 691; continue _fun0001 }
 688:
            var24 = var23;
 691:
            var33 = var10.author;
            _closure2_slot8 = var33;
            var12 = {};
            var26 = var10.reactions;
            var12['messageReactions'] = var26;
            if(!var6) { _fun0001_ip = 720; continue _fun0001 }
 717:
            var6 = var15;
 720:
            var12['renderReactions'] = var6;
            var12['animateEmoji'] = var37;
            var6 = function useTransformedReactions(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var6 = var3.messageReactions;
                    var2 = var3.renderReactions;
                    var5 = var3.animateEmoji;
                    var _closure3_slot0 = var5;
                    var3 = undefined;
                    var _closure3_slot1 = var3;
                    if(var2) { _fun0002_ip = 43; continue _fun0002 }
 36:
                    var6 = _closure1_slot16;
 43:
                    _closure3_slot1 = var6;
                    var4 = _closure1_slot3;
                    var3 = var4.useMemo;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure3_slot1;
                        var1['reactions'] = var5;
                        var4 = _closure3_slot0;
                        var1['animateEmoji'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var50 = var6.bind(var3)(var12);
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = var15[var17];
            var41 = var12.bind(var3)(var6);
            var36 = var41.useStateFromStores;
            var6 = _closure1_slot9;
            var30 = new Array(1);
            var30[0] = var6;
            var26 = new Array(1);
            var26[0] = var10;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot9;
                    var3 = var4.getChannel;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.castMessageIdAsChannelId;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var5.bind(var6)(var1);
                    var4 = var3.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0003_ip = 86; continue _fun0003 }
 71:
                    var3 = _closure2_slot0;
                    var2 = var3.isFirstMessageInForumPost;
                    var1 = var2.bind(var3)(var4);
 86:
                    return var1;
                }
            };
            var30 = var36.bind(var41)(var30, var6, var26);
            var6 = 26;
            var6 = var15[var6];
            var15 = var12.bind(var3)(var6);
            var12 = var15.isMessageNewerThanImprovedMarkdownEpoch;
            var26 = var10.editedTimestamp;
            if(!(var5 == var26)) { _fun0001_ip = 828; continue _fun0001 }
 822:
            var26 = var10.timestamp;
 828:
            var6 = var26.valueOf;
            var6 = var6.bind(var26)();
            var12 = var12.bind(var15)(var6);
            var15 = _closure1_slot0;
            var36 = _closure1_slot2;
            var6 = 27;
            var6 = var36[var6];
            var26 = var15.bind(var3)(var6);
            var6 = var26.useShouldFilterKeywords;
            var26 = var6.bind(var26)();
            var6 = 28;
            var6 = var36[var6];
            var15 = var15.bind(var3)(var6);
            var6 = var15.parseMessageMarkup;
            if(var31) { _fun0001_ip = 905; continue _fun0001 }
 893:
            var36 = var28;
            if(!var36) { _fun0001_ip = 902; continue _fun0001 }
 899:
            var36 = var20;
 902:
            var31 = var36;
 905:
            var65 = var15;
            var64 = var10;
            var63 = undefined;
            var62 = var31;
            var61 = var8;
            var60 = var30;
            var59 = var12;
            var58 = var12;
            var57 = var26;
            var15 = var65[var6](var64, var63, var62, var61, var60, var59, var58, var57, var56);
            var6 = var15.content;
            var26 = var15.hasSpoilerEmbeds;
            var30 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var41 = var30.bind(var3)(var15);
            var36 = var41.useStateFromStores;
            var15 = _closure1_slot7;
            var31 = new Array(1);
            var31[0] = var15;
            var15 = var10.id;
            var30 = new Array(1);
            var30[0] = var15;
            var15 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getMessage;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var51 = var36.bind(var41)(var31, var15, var30);
            var15 = {};
            var15['message'] = var10;
            var15['uploaderFile'] = var14;
            var15['automodMessage'] = var51;
            var15['shouldRenderEmbeds'] = var28;
            var15['channelId'] = var13;
            var15['colors'] = var22;
            var15['gifAutoPlay'] = var38;
            var15['hasSpoilerEmbeds'] = var26;
            var15['ignoreEmbedDescriptionCache'] = var25;
            var15['shouldInlineEmbedMedia'] = var20;
            var15['useAttachmentUploadPreview'] = var16;
            var15['showListsAndHeaders'] = var12;
            var15['showMaskedLinks'] = var12;
            var12 = function useTransformedEmbeds(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.message;
                    var _closure3_slot0 = var3;
                    var11 = var1.uploaderFile;
                    var _closure3_slot1 = var11;
                    var8 = var1.automodMessage;
                    var5 = var1.shouldRenderEmbeds;
                    var19 = var1.channelId;
                    var _closure3_slot2 = var19;
                    var14 = var1.colors;
                    var _closure3_slot3 = var14;
                    var18 = var1.gifAutoPlay;
                    var _closure3_slot4 = var18;
                    var17 = var1.hasSpoilerEmbeds;
                    var _closure3_slot5 = var17;
                    var16 = var1.ignoreEmbedDescriptionCache;
                    var _closure3_slot6 = var16;
                    var15 = var1.shouldInlineEmbedMedia;
                    var _closure3_slot7 = var15;
                    var6 = var1.useAttachmentUploadPreview;
                    var _closure3_slot8 = var6;
                    var13 = var1.showListsAndHeaders;
                    var _closure3_slot9 = var13;
                    var12 = var1.showMaskedLinks;
                    var _closure3_slot10 = var12;
                    var1 = undefined;
                    var _closure3_slot11 = var1;
                    var _closure3_slot12 = var1;
                    var _closure3_slot13 = var1;
                    var _closure3_slot14 = var1;
                    var _closure3_slot15 = var1;
                    var _closure3_slot16 = var1;
                    var _closure3_slot17 = var1;
                    var _closure3_slot18 = var1;
                    var _closure3_slot19 = var1;
                    var9 = var3.state;
                    var7 = _closure1_slot13;
                    var7 = var7.SEND_FAILED;
                    var20 = var9 === var7;
                    if(!var20) { _fun0004_ip = 200; continue _fun0004 }
 187:
                    var7 = var3.isCommandType;
                    var7 = var7.bind(var3)();
                    var20 = !var7;
 200:
                    _closure3_slot11 = var20;
                    var10 = _closure1_slot3;
                    var9 = var10.useMemo;
                    var7 = new Array(4);
                    var7[0] = var14;
                    var7[1] = var20;
                    var7[2] = var11;
                    var7[3] = var6;
                    var6 = function() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var2 = _closure3_slot11;
                            var4 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0005_ip = 70; continue _fun0005 }
 14:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var6 = _closure3_slot1;
                            var2['uploaderFile'] = var6;
                            var6 = _closure3_slot8;
                            var2['useAttachmentUploadPreview'] = var6;
                            var5 = _closure3_slot3;
                            var2['colors'] = var5;
                            var1 = var3.bind(var4)(var2);
 70:
                            return var1;
                        }
                    };
                    var7 = var9.bind(var10)(var6, var7);
                    _closure3_slot12 = var7;
                    var11 = null;
                    var9 = var11 == var8;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 265; continue _fun0004 }
 259:
                    var6 = var8.errorMessage;
 265:
                    _closure3_slot13 = var6;
                    var10 = _closure1_slot3;
                    var9 = var10.useMemo;
                    var8 = new Array(2);
                    var8[0] = var6;
                    var8[1] = var14;
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = _closure3_slot13;
                            var1 = null;
                            var2 = var1 != var2;
                            var4 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0006_ip = 73; continue _fun0006 }
 20:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 11;
                            var2 = var6[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.createAutomodBlockedMessageEmbed;
                            var2 = {};
                            var6 = _closure3_slot13;
                            var2['errorMessage'] = var6;
                            var5 = _closure3_slot3;
                            var2['colors'] = var5;
                            var1 = var3.bind(var4)(var2);
 73:
                            return var1;
                        }
                    };
                    var8 = var9.bind(var10)(var6, var8);
                    _closure3_slot14 = var8;
                    if(var5) { _fun0004_ip = 314; continue _fun0004 }
 308:
                    var20 = _closure1_slot17;
                    _fun0004_ip = 320; continue _fun0004;
 314:
                    var20 = var3.embeds;
 320:
                    _closure3_slot15 = var20;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 12;
                    var5 = var9[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.getEmbedBackground;
                    var9 = var5.bind(var6)();
                    var5 = var11 != var9;
                    var11 = null;
                    if(!var5) { _fun0004_ip = 394; continue _fun0004 }
 363:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 13;
                    var5 = var10[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.processColorOrThrow;
                    var11 = var5.bind(var6)(var9);
 394:
                    _closure3_slot16 = var11;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 14;
                    var5 = var9[var5];
                    var10 = var6.bind(var1)(var5);
                    var5 = var10.getEnabledHarmTypesForMessage;
                    var10 = var5.bind(var10)(var3);
                    _closure3_slot17 = var10;
                    var5 = 15;
                    var5 = var9[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.useShouldAgeVerifyForExplicitMedia;
                    var9 = var5.bind(var6)();
                    _closure3_slot18 = var9;
                    var5 = _closure1_slot3;
                    var6 = var5.useMemo;
                    var4 = new Array(13);
                    var4[0] = var20;
                    var4[1] = var19;
                    var4[2] = var18;
                    var4[3] = var17;
                    var4[4] = var16;
                    var4[5] = var15;
                    var4[6] = var14;
                    var4[7] = var13;
                    var4[8] = var12;
                    var4[9] = var11;
                    var4[10] = var10;
                    var4[11] = var9;
                    var3 = var3.author;
                    var3 = var3.bot;
                    var4[12] = var3;
                    var3 = function() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var5 = _closure3_slot15;
                        var1['embeds'] = var5;
                        var5 = _closure3_slot2;
                        var1['channelId'] = var5;
                        var5 = _closure3_slot4;
                        var1['gifAutoPlay'] = var5;
                        var5 = _closure3_slot5;
                        var1['hasSpoilerEmbeds'] = var5;
                        var5 = _closure3_slot6;
                        var1['ignoreEmbedDescriptionCache'] = var5;
                        var5 = _closure3_slot7;
                        var1['shouldInlineEmbedMedia'] = var5;
                        var5 = _closure3_slot3;
                        var1['colors'] = var5;
                        var5 = _closure3_slot9;
                        var1['showListsAndHeaders'] = var5;
                        var5 = _closure3_slot10;
                        var1['showMaskedLinks'] = var5;
                        var5 = _closure3_slot16;
                        var1['themedBackgroundColor'] = var5;
                        var5 = _closure3_slot17;
                        var1['enabledContentHarmTypeFlags'] = var5;
                        var5 = _closure3_slot18;
                        var1['shouldAgeVerify'] = var5;
                        var4 = _closure3_slot0;
                        var4 = var4.author;
                        var4 = var4.bot;
                        var1['authorIsBot'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var6.bind(var5)(var3, var4);
                    _closure3_slot19 = var6;
                    var4 = var5.useMemo;
                    var3 = new Array(3);
                    var3[0] = var8;
                    var3[1] = var7;
                    var3[2] = var6;
                    var2 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var6 = _closure3_slot19;
                            var1 = _closure3_slot12;
                            var5 = null;
                            var4 = var6;
                            if(!(var5 != var1)) { _fun0007_ip = 34; continue _fun0007 }
 20:
                            var3 = var6.concat;
                            var1 = _closure3_slot12;
                            var4 = var3.bind(var6)(var1);
 34:
                            var3 = _closure3_slot14;
                            var1 = var4;
                            if(!(var5 != var3)) { _fun0007_ip = 59; continue _fun0007 }
 45:
                            var3 = var4.concat;
                            var2 = _closure3_slot14;
                            var1 = var3.bind(var4)(var2);
 59:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = var2.length;
                    var3 = 0;
                    var3 = var4 > var3;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 602; continue _fun0004 }
 599:
                    var1 = var2;
 602:
                    return var1;
                }
            };
            var20 = var12.bind(var3)(var15);
            var12 = var16;
            if(!var16) { _fun0001_ip = 1102; continue _fun0001 }
 1085:
            var15 = var10.attachments;
            var25 = var15.length;
            var15 = 0;
            var12 = var15 === var25;
 1102:
            if(!var12) { _fun0001_ip = 1109; continue _fun0001 }
 1105:
            var12 = var5 != var14;
 1109:
            _closure2_slot9 = var12;
            var25 = var10.state;
            var15 = _closure1_slot13;
            var15 = var15.SEND_FAILED;
            var28 = var25 === var15;
            _closure2_slot10 = var28;
            var26 = _closure1_slot3;
            var25 = var26.useMemo;
            var15 = new Array(4);
            var15[0] = var28;
            var15[1] = var18;
            var15[2] = var14;
            var15[3] = var12;
            var14 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot9;
                    var4 = undefined;
                    var1 = undefined;
                    if(!var2) { _fun0008_ip = 71; continue _fun0008 }
 14:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 29;
                    var2 = var6[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure2_slot6;
                    var2['uploaderFile'] = var6;
                    var6 = _closure2_slot10;
                    var2['isFailedMessage'] = var6;
                    var5 = _closure2_slot5;
                    var2['shouldInlineAttachmentMedia'] = var5;
                    var1 = var3.bind(var4)(var2);
 71:
                    return var1;
                }
            };
            var14 = var25.bind(var26)(var14, var15);
            if(!var19) { _fun0001_ip = 1183; continue _fun0001 }
 1179:
            if(!(var5 != var14)) { _fun0001_ip = 1189; continue _fun0001 }
 1183:
            var41 = _closure1_slot18;
            _fun0001_ip = 1195; continue _fun0001;
 1189:
            var41 = var10.attachments;
 1195:
            _closure2_slot11 = var41;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = var26[var17];
            var36 = var25.bind(var3)(var15);
            var31 = var36.useStateFromStores;
            var15 = _closure1_slot11;
            var30 = new Array(1);
            var30[0] = var15;
            var15 = var10.nonce;
            var28 = new Array(1);
            var28[0] = var15;
            var15 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getUploadAttachments;
                var1 = _closure2_slot0;
                var1 = var1.nonce;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var36 = var31.bind(var36)(var30, var15, var28);
            _closure2_slot12 = var36;
            var15 = 30;
            var15 = var26[var15];
            var28 = var25.bind(var3)(var15);
            var15 = var28.useShouldDisplaySpoilerObscurity;
            var31 = var15.bind(var28)(var4);
            _closure2_slot13 = var31;
            var15 = 14;
            var15 = var26[var15];
            var28 = var25.bind(var3)(var15);
            var15 = var28.getEnabledHarmTypesForMessage;
            var30 = var15.bind(var28)(var10);
            _closure2_slot14 = var30;
            var15 = 15;
            var15 = var26[var15];
            var25 = var25.bind(var3)(var15);
            var15 = var25.useShouldAgeVerifyForExplicitMedia;
            var15 = var15.bind(var25)();
            _closure2_slot15 = var15;
            var28 = _closure1_slot3;
            var26 = var28.useMemo;
            var25 = new Array(10);
            var25[0] = var41;
            var25[1] = var36;
            var25[2] = var18;
            var25[3] = var38;
            var25[4] = var35;
            var25[5] = var34;
            var25[6] = var31;
            var25[7] = var30;
            var25[8] = var22;
            var25[9] = var15;
            var15 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 31;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot11;
                var1['attachments'] = var5;
                var5 = _closure2_slot12;
                var1['uploadAttachments'] = var5;
                var5 = _closure2_slot5;
                var1['shouldInlineAttachmentMedia'] = var5;
                var5 = _closure2_slot2;
                var1['gifAutoPlay'] = var5;
                var5 = _closure2_slot3;
                var1['viewImageDescriptions'] = var5;
                var5 = _closure2_slot1;
                var1['useReducedMotion'] = var5;
                var5 = _closure2_slot13;
                var1['shouldObscureSpoiler'] = var5;
                var5 = _closure2_slot14;
                var1['enabledContentHarmTypeFlags'] = var5;
                var5 = _closure2_slot15;
                var1['shouldAgeVerify'] = var5;
                var4 = _closure2_slot4;
                var1['colors'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var26.bind(var28)(var15, var25);
            if(!(var5 != var14)) { _fun0001_ip = 1414; continue _fun0001 }
 1411:
            var15 = var14;
 1414:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var14 = 32;
            var14 = var30[var14];
            var26 = var25.bind(var3)(var14);
            var25 = var26.useNullableUserAuthor;
            var14 = var10.author;
            var25 = var25.bind(var26)(var14, var4);
            var14 = var25.nick;
            var31 = var25.colorString;
            var47 = var25.guildMemberAvatar;
            var26 = var25.guildMemberAvatarDecoration;
            var48 = var25.iconRoleId;
            var28 = _closure1_slot1;
            var25 = 33;
            var25 = var30[var25];
            var25 = var28.bind(var3)(var25);
            if(!(var5 == var26)) { _fun0001_ip = 1508; continue _fun0001 }
 1502:
            var26 = var33.avatarDecoration;
 1508:
            var43 = var25.bind(var3)(var26);
            var26 = var14;
            if(!var24) { _fun0001_ip = 1524; continue _fun0001 }
 1519:
            var26 = var33.username;
 1524:
            var25 = var5 != var26;
            if(!var25) { _fun0001_ip = 1534; continue _fun0001 }
 1531:
            var25 = var27;
 1534:
            var36 = var26;
            if(!var25) { _fun0001_ip = 1548; continue _fun0001 }
 1540:
            var25 = '@';
            var36 = var25 + var26;
 1548:
            var35 = undefined;
            var34 = undefined;
            var30 = undefined;
            var28 = undefined;
            var27 = undefined;
            var26 = undefined;
            var25 = undefined;
            if(var24) { _fun0001_ip = 1981; continue _fun0001 }
 1568:
            var41 = _closure1_slot0;
            var42 = _closure1_slot2;
            var24 = 34;
            var24 = var42[var24];
            var42 = var41.bind(var3)(var24);
            var41 = var42.ensureAvatarSource;
            if(!(var5 != var47)) { _fun0001_ip = 1602; continue _fun0001 }
 1598:
            if(!(var5 == var53)) { _fun0001_ip = 1615; continue _fun0001 }
 1602:
            var24 = var33.getAvatarSource;
            var24 = var24.bind(var33)(var3);
            _fun0001_ip = 1667; continue _fun0001;
 1615:
            var45 = _closure1_slot1;
            var46 = _closure1_slot2;
            var44 = 35;
            var44 = var46[var44];
            var46 = var45.bind(var3)(var44);
            var45 = var46.getGuildMemberAvatarSource;
            var44 = {};
            var52 = var33.id;
            var44['userId'] = var52;
            var44['guildMemberAvatar'] = var47;
            var44['guildId'] = var53;
            var24 = var45.bind(var46)(var44, var33);
 1667:
            var24 = var41.bind(var42)(var24);
            var45 = var24.uri;
            var47 = _closure1_slot0;
            var52 = _closure1_slot2;
            var24 = 35;
            var24 = var52[var24];
            var42 = var47.bind(var3)(var24);
            var41 = var42.getAvatarDecorationURL;
            var24 = {};
            var24['avatarDecoration'] = var43;
            var43 = 36;
            var43 = var52[var43];
            var46 = var47.bind(var3)(var43);
            var44 = var46.getDecorationSizeForAvatarSize;
            var43 = 37;
            var43 = var52[var43];
            var43 = var47.bind(var3)(var43);
            var43 = var43.AvatarSizes;
            var43 = var43.NORMAL;
            var43 = var44.bind(var46)(var43);
            var24['size'] = var43;
            var44 = var41.bind(var42)(var24);
            var41 = _closure1_slot4;
            var42 = var5 != var31;
            var24 = undefined;
            if(!var42) { _fun0001_ip = 1783; continue _fun0001 }
 1780:
            var24 = var31;
 1783:
            var42 = var41.bind(var3)(var24);
            var24 = 'username';
            var43 = undefined;
            if(!(var24 === var32)) { _fun0001_ip = 1801; continue _fun0001 }
 1798:
            var43 = var42;
 1801:
            var24 = var5 != var48;
            var41 = undefined;
            if(!var24) { _fun0001_ip = 1868; continue _fun0001 }
 1810:
            var24 = var5 != var53;
            var41 = undefined;
            if(!var24) { _fun0001_ip = 1868; continue _fun0001 }
 1819:
            var46 = _closure1_slot0;
            var47 = _closure1_slot2;
            var24 = 38;
            var24 = var47[var24];
            var47 = var46.bind(var3)(var24);
            var46 = var47.getRoleIcon;
            var24 = {};
            var24['guildId'] = var53;
            var24['roleId'] = var48;
            var48 = 18;
            var24['size'] = var48;
            var41 = var46.bind(var47)(var24);
 1868:
            var48 = _closure1_slot0;
            var52 = _closure1_slot2;
            if(var12) { _fun0001_ip = 1910; continue _fun0001 }
 1879:
            var12 = 40;
            var12 = var52[var12];
            var46 = var48.bind(var3)(var12);
            var24 = var46.calendarFormat;
            var12 = var10.timestamp;
            var24 = var24.bind(var46)(var12);
            _fun0001_ip = 1957; continue _fun0001;
 1910:
            var12 = 39;
            var46 = var52[var12];
            var46 = var48.bind(var3)(var46);
            var47 = var46.intl;
            var46 = var47.string;
            var12 = var52[var12];
            var12 = var48.bind(var3)(var12);
            var12 = var12.t;
            var12 = var12.yXY+5O;
            var24 = var46.bind(var47)(var12);
 1957:
            var25 = var22.timestampColor;
            var26 = var24;
            var35 = var45;
            var34 = var44;
            var30 = var43;
            var28 = var42;
            var27 = var41;
 1981:
            var24 = _closure1_slot1;
            var41 = _closure1_slot2;
            var12 = 41;
            var12 = var41[var12];
            var24 = var24.bind(var3)(var12);
            var12 = {};
            var12['message'] = var10;
            var12['isSystemDM'] = var40;
            var12['channel'] = var4;
            var12['colors'] = var22;
            var12 = var24.bind(var3)(var12);
            var48 = var12.tagText;
            var47 = var12.tagVerified;
            var46 = var12.tagTextColor;
            var45 = var12.tagBackgroundColor;
            var44 = var12.tagType;
            var43 = var12.tagIconUrl;
            var42 = var12.opTagText;
            var41 = var12.opTagTextColor;
            var40 = var12.opTagBackgroundColor;
            var24 = var10.type;
            var12 = _closure1_slot12;
            var12 = var12.INTERACTION_PREMIUM_UPSELL;
            if(!(var24 !== var12)) { _fun0001_ip = 2297; continue _fun0001 }
 2101:
            var12 = var10.isPoll;
            var12 = var12.bind(var10)();
            if(!var12) { _fun0001_ip = 2178; continue _fun0001 }
 2114:
            if(var8) { _fun0001_ip = 2120; continue _fun0001 }
 2117:
            if(var7) { _fun0001_ip = 2178; continue _fun0001 }
 2120:
            var7 = var10.content;
            if(!(var5 != var7)) { _fun0001_ip = 2142; continue _fun0001 }
 2129:
            var8 = var10.content;
            var7 = '';
            if(!(var7 === var8)) { _fun0001_ip = 2178; continue _fun0001 }
 2142:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 42;
            var7 = var12[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.getPollReplyPreview;
            var24 = var7.bind(var8)(var10);
            _fun0001_ip = 2360; continue _fun0001;
 2178:
            var8 = var10.hasFlag;
            var7 = _closure1_slot14;
            var7 = var7.SOURCE_MESSAGE_DELETED;
            var7 = var8.bind(var10)(var7);
            if(var7) { _fun0001_ip = 2240; continue _fun0001 }
 2202:
            var7 = var10.content;
            var7 = var5 != var7;
            if(!var7) { _fun0001_ip = 2227; continue _fun0001 }
 2214:
            var12 = var10.content;
            var8 = '';
            var7 = var8 !== var12;
 2227:
            var24 = undefined;
            if(!var7) { _fun0001_ip = 2360; continue _fun0001 }
 2235:
            var24 = var6;
            _fun0001_ip = 2360; continue _fun0001;
 2240:
            var12 = _closure1_slot0;
            var52 = _closure1_slot2;
            var6 = 39;
            var7 = var52[var6];
            var7 = var12.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var52[var6];
            var6 = var12.bind(var3)(var6);
            var6 = var6.t;
            var6 = var6.JOtgS0;
            var24 = var7.bind(var8)(var6);
            _fun0001_ip = 2360; continue _fun0001;
 2297:
            var7 = _closure1_slot0;
            var52 = _closure1_slot2;
            var6 = 39;
            var8 = var52[var6];
            var8 = var7.bind(var3)(var8);
            var12 = var8.intl;
            var8 = var12.formatToPlainString;
            var6 = var52[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.u4A+xM;
            var6 = {};
            var6['appName'] = var14;
            var24 = var8.bind(var12)(var7, var6);
 2360:
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = var12[var17];
            var54 = var7.bind(var3)(var6);
            var52 = var54.useStateFromStores;
            var6 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var6;
            var8 = new Array(2);
            var8[0] = var53;
            var6 = var33.id;
            var8[1] = var6;
            var6 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0009_ip = 48; continue _fun0009 }
 16:
                    var5 = _closure1_slot10;
                    var4 = var5.getMember;
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot8;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 48:
                    return var1;
                }
            };
            var8 = var52.bind(var54)(var14, var6, var8);
            var6 = 43;
            var6 = var12[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.isMemberCommunicationDisabled;
            var12 = var6.bind(var7)(var8);
            if(!var19) { _fun0001_ip = 2487; continue _fun0001 }
 2449:
            var6 = var10.attachments;
            var6 = var6.length;
            var8 = 0;
            var6 = var8 !== var6;
            if(var6) { _fun0001_ip = 2484; continue _fun0001 }
 2469:
            var7 = var10.embeds;
            var7 = var7.length;
            var6 = var8 !== var7;
 2484:
            var19 = var6;
 2487:
            var6 = function useTransformedStickers(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 17;
                var3 = var9[var3];
                var8 = undefined;
                var3 = var4.bind(var8)(var3);
                var4 = var3.AnimateStickers;
                var3 = var4.useSetting;
                var7 = var3.bind(var4)();
                var _closure3_slot1 = var7;
                var4 = _closure1_slot3;
                var3 = var4.useContext;
                var6 = _closure1_slot1;
                var2 = 18;
                var2 = var9[var2];
                var2 = var6.bind(var8)(var2);
                var6 = var3.bind(var4)(var2);
                var _closure3_slot2 = var6;
                var3 = var4.useMemo;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['message'] = var5;
                    var6 = _closure3_slot1;
                    var1['animateStickersSetting'] = var6;
                    var5 = var5.id;
                    var4 = _closure3_slot2;
                    var4 = var5 === var4;
                    var1['isUserInteracting'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var14 = var6.bind(var3)(var10);
            var6 = _closure1_slot0;
            var52 = _closure1_slot2;
            var7 = var52[var17];
            var56 = var6.bind(var3)(var7);
            var55 = var56.useStateFromStores;
            var7 = _closure1_slot8;
            var54 = new Array(1);
            var54[0] = var7;
            var8 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = new Array(0);
            var8 = var55.bind(var56)(var54, var8, var7);
            var7 = var10.author;
            var7 = var7.id;
            var17 = var52[var17];
            var55 = var6.bind(var3)(var17);
            var54 = var55.useStateFromStores;
            var56 = _closure1_slot6;
            var17 = new Array(1);
            var17[0] = var56;
            var1 = function() {
                var1 = _closure1_slot6;
                var1 = var1.gradientPreset;
                return var1;
            };
            var17 = var54.bind(var55)(var17, var1);
            var1 = 44;
            var1 = var52[var1];
            var54 = var6.bind(var3)(var1);
            var52 = var54.useCtaButton;
            var6 = var10.id;
            var1 = var10.channel_id;
            var6 = var52.bind(var54)(var6, var1, var22);
            var1 = {};
            var52 = var10.id;
            var1['id'] = var52;
            var1['channelId'] = var13;
            var54 = var5 != var53;
            var52 = undefined;
            if(!var54) { _fun0001_ip = 2657; continue _fun0001 }
 2654:
            var52 = var53;
 2657:
            var1['guildId'] = var52;
            if(!(var5 == var51)) { _fun0001_ip = 2672; continue _fun0001 }
 2665:
            var51 = var10.flags;
            _fun0001_ip = 2719; continue _fun0001;
 2672:
            var53 = _closure1_slot0;
            var54 = _closure1_slot2;
            var52 = 45;
            var52 = var54[var52];
            var55 = var53.bind(var3)(var52);
            var54 = var55.addFlag;
            var53 = var10.flags;
            var52 = _closure1_slot14;
            var52 = var52.EPHEMERAL;
            var51 = var54.bind(var55)(var53, var52);
 2719:
            var1['flags'] = var51;
            var51 = var10.type;
            var1['type'] = var51;
            var51 = var10.nonce;
            var1['nonce'] = var51;
            var51 = var10.state;
            var1['state'] = var51;
            var1['reactions'] = var50;
            var49 = !var49;
            if(!var49) { _fun0001_ip = 2769; continue _fun0001 }
 2763:
            var49 = var10.mentioned;
 2769:
            var1['mentioned'] = var49;
            var49 = var10.isEdited;
            var51 = var49.bind(var10)();
            var50 = '';
            var49 = var50;
            if(!var51) { _fun0001_ip = 2855; continue _fun0001 }
 2794:
            var49 = var50;
            if(var23) { _fun0001_ip = 2855; continue _fun0001 }
 2800:
            var53 = _closure1_slot0;
            var54 = _closure1_slot2;
            var50 = 39;
            var51 = var54[var50];
            var51 = var53.bind(var3)(var51);
            var52 = var51.intl;
            var51 = var52.string;
            var50 = var54[var50];
            var50 = var53.bind(var3)(var50);
            var50 = var50.t;
            var50 = var50.C8sXIC;
            var49 = var51.bind(var52)(var50);
 2855:
            var1['edited'] = var49;
            var49 = var22.editedColor;
            var1['editedColor'] = var49;
            var49 = var22.textColor;
            var1['textColor'] = var49;
            var49 = var22.linkColor;
            var1['linkColor'] = var49;
            var1['tagText'] = var48;
            var1['tagVerified'] = var47;
            var1['tagTextColor'] = var46;
            var1['tagBackgroundColor'] = var45;
            var1['tagType'] = var44;
            var1['tagIconUrl'] = var43;
            var1['opTagText'] = var42;
            var1['opTagTextColor'] = var41;
            var1['opTagBackgroundColor'] = var40;
            var1['constrainedWidth'] = var39;
            var1['gifAutoPlay'] = var38;
            var1['animateEmoji'] = var37;
            var1['username'] = var36;
            var1['avatarURL'] = var35;
            var1['avatarDecorationURL'] = var34;
            var33 = var33.id;
            var1['authorId'] = var33;
            if(!(var5 == var30)) { _fun0001_ip = 2987; continue _fun0001 }
 2981:
            var30 = var22.defaultUsernameColor;
 2987:
            var1['usernameColor'] = var30;
            var1['roleColor'] = var28;
            var30 = 'dot';
            var30 = var30 === var32;
            if(!var30) { _fun0001_ip = 3012; continue _fun0001 }
 3008:
            var30 = var5 != var31;
 3012:
            var1['shouldShowRoleDot'] = var30;
            var30 = 'username';
            var30 = var30 === var32;
            if(!var30) { _fun0001_ip = 3032; continue _fun0001 }
 3028:
            var30 = var5 != var31;
 3032:
            var1['shouldShowRoleOnName'] = var30;
            var1['showLinkDecorations'] = var29;
            if(!(var5 == var28)) { _fun0001_ip = 3052; continue _fun0001 }
 3046:
            var28 = var22.defaultUsernameColor;
 3052:
            var1['colorString'] = var28;
            var1['roleIcon'] = var27;
            var1['timestamp'] = var26;
            var1['timestampColor'] = var25;
            var1['content'] = var24;
            var1['isEditing'] = var21;
            var1['renderContentOnly'] = var23;
            var24 = 0;
            if(var23) { _fun0001_ip = 3097; continue _fun0001 }
 3091:
            var24 = var22.feedbackColor;
 3097:
            var1['feedbackColor'] = var24;
            var21 = 0;
            if(var23) { _fun0001_ip = 3113; continue _fun0001 }
 3107:
            var21 = var22.highlightColor;
 3113:
            var1['highlightColor'] = var21;
            var1['embeds'] = var20;
            if(!var18) { _fun0001_ip = 3135; continue _fun0001 }
 3126:
            if(var19) { _fun0001_ip = 3132; continue _fun0001 }
 3129:
            var19 = var16;
 3132:
            var18 = var19;
 3135:
            var1['useAttachmentGridLayout'] = var18;
            var1['useAttachmentUploadPreview'] = var16;
            var17 = var5 != var17;
            var1['usingGradientTheme'] = var17;
            var1['attachments'] = var15;
            var18 = 1;
            var15 = var18;
            if(!var16) { _fun0001_ip = 3200; continue _fun0001 }
 3168:
            var17 = var10.state;
            var16 = _closure1_slot13;
            var16 = var16.SEND_FAILED;
            var15 = var18;
            if(!(var17 === var16)) { _fun0001_ip = 3200; continue _fun0001 }
 3190:
            var15 = 0.2;
 3200:
            var1['attachmentsOpacity'] = var15;
            var1['stickers'] = var14;
            if(!var11) { _fun0001_ip = 3216; continue _fun0001 }
 3213:
            var11 = var12;
 3216:
            var1['communicationDisabled'] = var11;
            var1['threadStarterMessageHeader'] = var9;
            var11 = var5 == var4;
            if(var11) { _fun0001_ip = 3246; continue _fun0001 }
 3233:
            var9 = var4.isForumPost;
            var9 = var9.bind(var4)();
            var11 = !var9;
 3246:
            var9 = !var11;
            if(var11) { _fun0001_ip = 3292; continue _fun0001 }
 3252:
            var11 = var10.id;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 25;
            var10 = var14[var10];
            var12 = var12.bind(var3)(var10);
            var10 = var12.castChannelIdAsMessageId;
            var10 = var10.bind(var12)(var13);
            var9 = var11 === var10;
 3292:
            var1['isFirstForumPostMessage'] = var9;
            var7 = var7 === var8;
            var1['isCurrentUserMessageAuthor'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 46;
            var8 = var11[var7];
            var13 = var10.bind(var3)(var8);
            var9 = var13.getAssetUriForEmbed;
            var12 = _closure1_slot1;
            var8 = 47;
            var8 = var11[var8];
            var8 = var12.bind(var3)(var8);
            var8 = var9.bind(var13)(var8);
            var1['swipeToReplyIconUrl'] = var8;
            var7 = var11[var7];
            var9 = var10.bind(var3)(var7);
            var8 = var9.getAssetUriForEmbed;
            var7 = 48;
            var7 = var11[var7];
            var7 = var12.bind(var3)(var7);
            var7 = var8.bind(var9)(var7);
            var1['swipeToEditIconUrl'] = var7;
            var7 = 39;
            var8 = var11[var7];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.2aXnfX;
            var7 = var8.bind(var9)(var7);
            var1['obscureLearnMoreLabel'] = var7;
            var1['ctaButton'] = var6;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 3466; continue _fun0001 }
 3461:
            var3 = var4.type;
 3466:
            var2 = _closure1_slot15;
            var2 = var2.GUILD_ANNOUNCEMENT;
            var2 = var3 === var2;
            var1['isAnnouncementChannel'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();