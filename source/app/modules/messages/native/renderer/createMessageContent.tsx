// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createThreadEmbed(arg1, arg2, arg3, arg4, arg5, arg6) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.hasFlag;
            var2 = _closure1_slot30;
            var2 = var2.HAS_THREAD;
            var2 = var4.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 24;
            var4 = var12[var4];
            var9 = undefined;
            var10 = var6.bind(var9)(var4);
            var8 = var10.computeChannelName;
            var7 = _closure1_slot23;
            var4 = _closure1_slot21;
            var8 = var8.bind(var10)(var3, var7, var4);
            var14 = _closure1_slot1;
            var4 = 25;
            var4 = var12[var4];
            var7 = var14.bind(var9)(var4);
            var4 = arg6;
            var4 = var7.bind(var9)(var4);
            var4 = var4.baseColors;
            var4 = var4.backgroundColor;
            var11 = _closure1_slot15;
            var10 = var11.getMostRecentMessage;
            var13 = 26;
            var7 = var12[var13];
            var16 = var14.bind(var9)(var7);
            var15 = var16.castMessageIdAsChannelId;
            var7 = var1.id;
            var7 = var15.bind(var16)(var7);
            var10 = var10.bind(var11)(var7);
            var11 = _closure1_slot15;
            var7 = var11.getCount;
            var13 = var12[var13];
            var14 = var14.bind(var9)(var13);
            var13 = var14.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var13.bind(var14)(var1);
            var11 = var7.bind(var11)(var1);
            var1 = 27;
            var7 = var12[var1];
            var14 = var6.bind(var9)(var7);
            var13 = var14.formatMobileMessageCountLabel;
            var7 = var3.id;
            var7 = var13.bind(var14)(var11, var7);
            var1 = var12[var1];
            var12 = var6.bind(var9)(var1);
            var6 = var12.formatMessageCountLabel;
            var1 = var3.id;
            var6 = var6.bind(var12)(var11, var1);
            if(!(var2 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 0;
            if(!(!(var11 > var1))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = {};
            var1['title'] = var8;
            var1['messageCountLabel'] = var7;
            var1['messageCountAccessibilityLabel'] = var6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 29;
            var12 = var15[var11];
            var12 = var14.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var9)(var11);
            var11 = var11.t;
            var11 = var11.HYtNyE;
            var11 = var12.bind(var13)(var11);
            var1['messagePreviewString'] = var11;
            var11 = false;
            var1['archived'] = var11;
            var1['backgroundColor'] = var4;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 28;
            var11 = var13[var11];
            var12 = var12.bind(var9)(var11);
            var11 = var12.isChannelSpoilerGated;
            var11 = var11.bind(var12)(var3);
            if(var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            if(!(var2 != var10)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = var10.type;
            var2 = _closure1_slot28;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var3 = var10.type;
            var2 = _closure1_slot28;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var2 = var10.blocked;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = var10.ignored;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var2 = {};
            var2['title'] = var8;
            var2['messageCountLabel'] = var7;
            var2['messageCountAccessibilityLabel'] = var6;
            var3 = {};
            var11 = _closure1_slot27;
            var11 = var11.LOADED;
            var3['state'] = var11;
            var12 = _closure1_slot35;
            var11 = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var11['message'] = var10;
            var13 = arg2;
            var11['roleStyle'] = var13;
            var13 = arg5;
            var11['options'] = var13;
            var11 = var12.bind(var9)(var11);
            var3['message'] = var11;
            var2['referencedMessage'] = var3;
            var2['backgroundColor'] = var4;
            _fun0001_ip = 22; continue _fun0001;
case 19:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var10 = var10.blocked;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 29;
            var12 = var15[var11];
            var12 = var14.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var9)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = var11.G7p6v/;
            var10 = var12.bind(var13)(var10);
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var11 = var11.XAkOo2;
            var10 = var12.bind(var13)(var11);
case 25:
            var3['messagePreviewString'] = var10;
            var10 = false;
            var3['archived'] = var10;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 22:
            _fun0001_ip = 26; continue _fun0001;
case 15:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 29;
            var11 = var14[var10];
            var11 = var13.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var10.t;
            var10 = var10.ZTo4HS;
            var10 = var11.bind(var12)(var10);
            var3['messagePreviewString'] = var10;
            var10 = false;
            var3['archived'] = var10;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 26:
            _fun0001_ip = 27; continue _fun0001;
case 14:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 29;
            var12 = var14[var10];
            var12 = var11.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var14[var10];
            var10 = var11.bind(var9)(var10);
            var10 = var10.t;
            var10 = var10.ZTo4HS;
            var10 = var12.bind(var13)(var10);
            var3['messagePreviewString'] = var10;
            var10 = true;
            var3['archived'] = var10;
            var10 = 30;
            var10 = var14[var10];
            var12 = var11.bind(var9)(var10);
            var11 = var12.getAssetUriForEmbed;
            var13 = _closure1_slot1;
            var10 = 31;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var11.bind(var12)(var10);
            var3['archivedIconUrl'] = var10;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 27:
            _fun0001_ip = 28; continue _fun0001;
case 10:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 29;
            var6 = var10[var5];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5["5uaI/7"];
            var5 = var6.bind(var7)(var5);
            var3['messagePreviewString'] = var5;
            var5 = false;
            var3['archived'] = var5;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 28:
            var1 = var2;
case 9:
            return var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function getForumPostActions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.id;
            var1 = var3.channel_id;
            if(!(var4 === var1)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var1 = var2.getGuildId;
            var5 = var1.bind(var2)();
            var10 = null;
            if(!(var10 != var5)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var4 = _closure1_slot10;
            var1 = var4.isLurking;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0002_ip = 31; continue _fun0002 }
case 29:
            var1 = undefined;
            return var1;
case 31:
            var6 = _closure1_slot14;
            var5 = var6.hasJoined;
            var4 = var3.channel_id;
            var7 = var5.bind(var6)(var4);
            var3 = var3.reactions;
            var4 = var3.length;
            var3 = 0;
            var6 = var3 !== var4;
            var3 = undefined;
            var5 = undefined;
            if(var6) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var9 = _closure1_slot18;
            var8 = var9.getChannel;
            var4 = var2.parent_id;
            var4 = var8.bind(var9)(var4);
            var8 = var10 == var4;
            var11 = undefined;
            if(var8) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var11 = var4.defaultReactionEmoji;
case 35:
            var8 = var10 == var11;
            var4 = undefined;
            if(var8) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var4 = var11.emojiId;
case 37:
            var4 = var10 != var4;
            var10 = null;
            if(!var4) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var9 = _closure1_slot7;
            var8 = var9.getUsableCustomEmojiById;
            var4 = var11.emojiId;
            var10 = var8.bind(var9)(var4);
case 39:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 32;
            var4 = var9[var4];
            var9 = var8.bind(var3)(var4);
            var8 = var9.createDefaultReaction;
            var4 = {};
            var4['defaultReactionEmoji'] = var11;
            var4['customGuildEmoji'] = var10;
            var5 = var8.bind(var9)(var4);
case 33:
            var8 = _closure1_slot11;
            var4 = var8.shouldDisplayPrompt;
            var2 = var2.id;
            var4 = var4.bind(var8)(var2);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 32;
            var1 = var8[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.createForumPostActions;
            var1 = {};
            var1['isFollowing'] = var7;
            var1['hasReactions'] = var6;
            var1['defaultReaction'] = var5;
            var1['showMediaPostSharePrompt'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var100 = var1.messageForward;
            var13 = var1.roleStyle;
            var12 = var1.isFirst;
            var11 = var1.isEditing;
            var10 = var1.canShowImages;
            var9 = var1.isSystemDM;
            var6 = var1.isInlineReplyPreview;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var6 = false;
case 41:
            var7 = var1.options;
            var69 = var1.pushFeedbackType;
            var53 = var1.renderContentOnly;
            var29 = var1.showContentInventoryEntryFallbackEmbed;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var21 = var7.renderEmbeds;
            var14 = var7.renderReactions;
            var18 = var7.inlineEmbedMedia;
            var16 = var7.inlineAttachmentMedia;
            var82 = var7.constrainedWidth;
            var95 = var7.ignoreMentioned;
            var81 = var7.animateEmoji;
            var40 = var7.animatingStickerMessageId;
            var55 = var7.gifAutoPlay;
            _closure2_slot1 = var55;
            var26 = var7.timestampHourCycle;
            var47 = var7.renderCodedLinks;
            var50 = var7.renderGiftCode;
            var49 = var7.renderActivityInstanceEmbed;
            var48 = var7.renderActivityInviteEmbed;
            var56 = var7.renderComponents;
            var15 = var7.renderThreadEmbeds;
            var20 = var7.renderReplies;
            var31 = var7.renderCommunicationDisabled;
            var44 = var7.renderAttachments;
            var57 = var7.renderExecutedCommands;
            var4 = var7.renderPolls;
            var1 = var7.renderSharedClientTheme;
            var35 = var7.renderForumPostActions;
            var19 = var7.forcedTheme;
            var34 = var7.ignoreEmbedDescriptionCache;
            var36 = var7.forceHideSimpleEmbedContent;
            var61 = var7.shouldObscureSpoiler;
            _closure2_slot2 = var61;
            var63 = var7.shouldDisableInteractiveComponents;
            _closure2_slot3 = var63;
            var22 = var7.useAlternateEmbedColors;
            var37 = var7.restrictedPreview;
            var17 = null;
            if(!(var17 == var19)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var3 = _closure1_slot16;
            var19 = var3.theme;
case 43:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 36;
            var8 = var24[var8];
            var8 = var23.bind(var5)(var8);
            var28 = var8.bind(var5)(var19, var22);
            _closure2_slot4 = var28;
            var8 = true;
            var62 = var8 === var10;
            _closure2_slot5 = var62;
            var30 = var62;
            if(!var62) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var30 = var21;
case 45:
            if(!var30) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var22 = var2.type;
            var21 = _closure1_slot28;
            var21 = var21.CUSTOM_GIFT;
            var30 = var22 !== var21;
case 47:
            var33 = var62;
            if(!var62) { _fun0003_ip = 13; continue _fun0003 }
case 49:
            var33 = var18;
case 13:
            var43 = var62;
            if(!var43) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var43 = var16;
case 50:
            var21 = _closure1_slot18;
            var18 = var21.getChannel;
            var16 = var2.getChannelId;
            var16 = var16.bind(var2)();
            var21 = var18.bind(var21)(var16);
            var22 = _closure1_slot18;
            var18 = var22.getChannel;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 26;
            var16 = var24[var16];
            var24 = var23.bind(var5)(var16);
            var23 = var24.castMessageIdAsChannelId;
            var16 = var2.id;
            var16 = var23.bind(var24)(var16);
            var16 = var18.bind(var22)(var16);
            var22 = var17 == var21;
            var18 = undefined;
            if(var22) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var22 = var21.getGuildId;
            var18 = var22.bind(var21)();
case 52:
            _closure2_slot6 = var18;
            var22 = var2.author;
            var24 = var22.id;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 37;
            var22 = var25[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getHasEnhancedRoleColors;
            var76 = var22.bind(var23)(var18, var24);
            var65 = var18;
            if(!(var17 == var100)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 38;
            var18 = var23[var18];
            var22 = var22.bind(var5)(var18);
            var18 = var22.maybeCreateSingleForwardForMessage;
            var100 = var18.bind(var22)(var2);
case 54:
            var41 = var2;
            if(!(var17 != var100)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var18 = var100.messageSnapshot;
            var41 = var18.message;
case 56:
            var18 = new Array(0);
            if(!var14) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 39;
            var14 = var23[var14];
            var22 = var22.bind(var5)(var14);
            var14 = {};
            var23 = var2.reactions;
            var14['reactions'] = var23;
            var14['animateEmoji'] = var81;
            var18 = var22.bind(var5)(var14);
case 58:
            var23 = var2.type;
            var14 = _closure1_slot28;
            var22 = var14.THREAD_STARTER_MESSAGE;
            var14 = null;
            if(!(var23 === var22)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var24 = _closure1_slot12;
            var23 = var24.getMessageByReference;
            var22 = var2.messageReference;
            var23 = var23.bind(var24)(var22);
            var25 = var23.state;
            var22 = _closure1_slot13;
            var24 = var22.LOADED;
            var22 = null;
            if(!(var25 === var24)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var22 = var23.message;
case 62:
            var14 = var22;
case 60:
            if(!(var17 == var14)) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 40;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.bind(var5)(var2);
            if(var22) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var70 = !var12;
            if(var70) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var70 = var53;
case 68:
            var73 = var2.author;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 42;
            var22 = var24[var22];
            var24 = var23.bind(var5)(var22);
            var23 = var24.isMessageNewerThanImprovedMarkdownEpoch;
            var25 = var2.editedTimestamp;
            if(!(var17 == var25)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var25 = var2.timestamp;
case 70:
            var22 = var25.valueOf;
            var22 = var22.bind(var25)();
            var32 = var23.bind(var24)(var22);
            var22 = var41.content;
            if(!(var17 != var22)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var23 = var41.content;
            var22 = '';
            if(!(var22 === var23)) { _fun0003_ip = 74; continue _fun0003 }
case 72:
            var22 = {'content': null, 'hasSpoilerEmbeds': false, 'hasBailedAst': false};
            var22['content'] = var5;
            _fun0003_ip = 75; continue _fun0003;
case 74:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 43;
            var23 = var25[var23];
            var25 = var24.bind(var5)(var23);
            var24 = var25.parseMessageMarkup;
            if(var36) { _fun0003_ip = 27; continue _fun0003 }
case 76:
            var23 = var30;
            if(!var30) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var23 = var33;
case 77:
            var36 = var23;
case 27:
            var23 = var17 != var16;
            if(!var23) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var38 = var2.isFirstMessageInForumPost;
            var23 = var38.bind(var2)(var16);
case 79:
            r115 = var25;
            r114 = var2;
            r113 = var41;
            r112 = var36;
            r111 = var6;
            r110 = var23;
            r109 = var32;
            r108 = var32;
            var22 = r115[var24](r114, r113, r112, r111, r110, r109, r108, r107);
case 75:
            var25 = var22.content;
            var36 = var22.hasSpoilerEmbeds;
            var22 = var22.hasBailedAst;
            var23 = var37;
            if(!var23) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var23 = var17 != var25;
case 81:
            var24 = var25;
            if(!var23) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var38 = _closure1_slot1;
            var39 = _closure1_slot2;
            var23 = 44;
            var23 = var39[var23];
            var23 = var38.bind(var5)(var23);
            var24 = var23.bind(var5)(var25);
case 83:
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var38 = 45;
            var38 = var23[var38];
            var39 = var25.bind(var5)(var38);
            var38 = var39.getEnabledHarmTypesForMessage;
            var60 = var38.bind(var39)(var2);
            _closure2_slot7 = var60;
            var38 = 46;
            var38 = var23[var38];
            var39 = var25.bind(var5)(var38);
            var38 = var39.shouldAgeVerifyForExplicitMedia;
            var59 = var38.bind(var39)();
            _closure2_slot8 = var59;
            var42 = 47;
            var23 = var23[var42];
            var23 = var25.bind(var5)(var23);
            var25 = var23.ViewImageDescriptions;
            var23 = var25.getSetting;
            var58 = var23.bind(var25)();
            _closure2_slot9 = var58;
            if(!var30) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var30 = !var22;
case 85:
            if(!var30) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var30 = !var37;
case 87:
            var23 = _closure1_slot9;
            var22 = var23.getInteraction;
            var64 = var22.bind(var23)(var2);
            _closure2_slot10 = var64;
            var23 = undefined;
            if(!var30) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var25 = _closure1_slot1;
            var38 = _closure1_slot2;
            var22 = 48;
            var22 = var38[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var38 = var41.embeds;
            var22['embeds'] = var38;
            var38 = var2.channel_id;
            var22['channelId'] = var38;
            var22['gifAutoPlay'] = var55;
            var22['hasSpoilerEmbeds'] = var36;
            var22['ignoreEmbedDescriptionCache'] = var34;
            var22['shouldInlineEmbedMedia'] = var33;
            var22['colors'] = var28;
            var22['showListsAndHeaders'] = var32;
            var22['showMaskedLinks'] = var32;
            var32 = var28.embedBackgroundColor;
            var22['themedBackgroundColor'] = var32;
            var22['enabledContentHarmTypeFlags'] = var60;
            var22['shouldAgeVerify'] = var59;
            var32 = var2.author;
            var32 = var32.bot;
            var22['authorIsBot'] = var32;
            var22['showContentInventoryEntryFallbackEmbed'] = var29;
            var27 = function transformComponents(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 49;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var5 = _closure2_slot0;
                var2['message'] = var5;
                var5 = _closure2_slot6;
                var2['guildId'] = var5;
                var5 = _closure2_slot10;
                var2['interaction'] = var5;
                var5 = _closure2_slot3;
                var2['shouldDisableInteractiveComponents'] = var5;
                var5 = _closure2_slot5;
                var2['shouldShowMedia'] = var5;
                var5 = _closure2_slot2;
                var2['shouldObscureSpoiler'] = var5;
                var5 = _closure2_slot7;
                var2['enabledContentHarmTypeFlags'] = var5;
                var5 = _closure2_slot8;
                var2['shouldAgeVerify'] = var5;
                var5 = _closure2_slot9;
                var2['shouldShowMosaicMediaDescriptions'] = var5;
                var5 = _closure2_slot1;
                var2['shouldAutoPlayGifs'] = var5;
                var1 = _closure2_slot4;
                var2['colors'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var22['transformComponents'] = var27;
            var23 = var25.bind(var5)(var22);
case 89:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var22 = 50;
            var22 = var27[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var22['message'] = var2;
            var22['isSystemDM'] = var9;
            var22['channel'] = var21;
            var22['colors'] = var28;
            var22 = var25.bind(var5)(var22);
            var93 = var22.tagText;
            var92 = var22.tagAccessibilityLabel;
            var91 = var22.tagVerified;
            var90 = var22.tagTextColor;
            var89 = var22.tagBackgroundColor;
            var88 = var22.tagType;
            var87 = var22.tagIconUrl;
            var86 = var22.opTagText;
            var85 = var22.opTagTextColor;
            var84 = var22.opTagBackgroundColor;
            var27 = _closure1_slot22;
            var25 = var27.getUploaderFileForMessageId;
            var22 = var2.id;
            var25 = var25.bind(var27)(var22);
            var39 = var17 != var25;
            var27 = var2.state;
            var22 = _closure1_slot29;
            var22 = var22.SEND_FAILED;
            var22 = var27 !== var22;
            if(var22) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var27 = var2.isCommandType;
            var22 = var27.bind(var2)();
case 91:
            var27 = var23;
            if(var22) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var22 = var23;
            if(!(var17 == var23)) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var22 = new Array(0);
case 95:
            var29 = var22.push;
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var23 = 51;
            var23 = var33[var23];
            var32 = var32.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var25;
            var23['useAttachmentUploadPreview'] = var39;
            var23['colors'] = var28;
            var23 = var32.bind(var5)(var23);
            var23 = var29.bind(var22)(var23);
            var27 = var22;
case 93:
            var29 = _closure1_slot8;
            var23 = var29.getMessage;
            var22 = var2.id;
            var23 = var23.bind(var29)(var22);
            var52 = var27;
            if(!(var17 != var23)) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var22 = var27;
            if(!(var17 == var27)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            var22 = new Array(0);
case 99:
            var33 = var23.errorMessage;
            var27 = var22.push;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 51;
            var23 = var32[var23];
            var32 = var29.bind(var5)(var23);
            var29 = var32.createAutomodBlockedMessageEmbed;
            var23 = {};
            var23['errorMessage'] = var33;
            var23['colors'] = var28;
            var23 = var29.bind(var32)(var23);
            var23 = var27.bind(var22)(var23);
            var52 = var22;
case 97:
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var32 = 52;
            var22 = var27[var32];
            var33 = var23.bind(var5)(var22);
            var29 = var33.getUserAuthor;
            var22 = var2.author;
            var22 = var29.bind(var33)(var22, var21);
            var45 = var22.guildMemberAvatar;
            var33 = var22.guildMemberAvatarDecoration;
            var29 = var22.iconRoleId;
            var22 = 53;
            var22 = var27[var22];
            var27 = var23.bind(var5)(var22);
            var23 = var27.ensureAvatarSource;
            var22 = var2.isInteractionPlaceholder;
            var22 = var22.bind(var2)();
            if(!var22) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var22 = var2.author;
            var22 = var22.avatar;
            if(!(var17 == var22)) { _fun0003_ip = 101; continue _fun0003 }
case 103:
            if(!(var17 == var45)) { _fun0003_ip = 101; continue _fun0003 }
case 104:
            var34 = var2.application;
            var36 = var17 == var34;
            var22 = undefined;
            if(var36) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var22 = var34.icon;
case 105:
            if(!(var17 == var22)) { _fun0003_ip = 107; continue _fun0003 }
case 101:
            if(!(var17 != var45)) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            if(!(var17 == var65)) { _fun0003_ip = 110; continue _fun0003 }
case 108:
            var22 = var73.getAvatarSource;
            var22 = var22.bind(var73)(var5);
            _fun0003_ip = 111; continue _fun0003;
case 110:
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var34 = 54;
            var34 = var38[var34];
            var38 = var36.bind(var5)(var34);
            var36 = var38.getGuildMemberAvatarSource;
            var34 = {};
            var46 = var73.id;
            var34['userId'] = var46;
            var34['avatar'] = var45;
            var34['guildId'] = var65;
            var22 = var36.bind(var38)(var34, var73);
case 111:
            _fun0003_ip = 112; continue _fun0003;
case 107:
            var36 = _closure1_slot1;
            var38 = _closure1_slot2;
            var34 = 54;
            var34 = var38[var34];
            var38 = var36.bind(var5)(var34);
            var36 = var38.getApplicationIconSource;
            var34 = {};
            var45 = var2.application;
            var45 = var45.id;
            var34['id'] = var45;
            var45 = var2.application;
            var45 = var45.icon;
            var34['icon'] = var45;
            var45 = var2.application;
            var45 = var45.bot;
            var34['bot'] = var45;
            var22 = var36.bind(var38)(var34);
case 112:
            var80 = var23.bind(var27)(var22);
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var83 = 54;
            var22 = var22[var83];
            var27 = var23.bind(var5)(var22);
            var23 = var27.getAvatarDecorationURL;
            var22 = {};
            if(!(var17 == var33)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var33 = var73.avatarDecoration;
case 113:
            var22['avatarDecoration'] = var33;
            var38 = _closure1_slot0;
            var45 = _closure1_slot2;
            var33 = 55;
            var33 = var45[var33];
            var36 = var38.bind(var5)(var33);
            var34 = var36.getDecorationSizeForAvatarSize;
            var33 = 56;
            var33 = var45[var33];
            var33 = var38.bind(var5)(var33);
            var33 = var33.AvatarSizes;
            var33 = var33.NORMAL;
            var33 = var34.bind(var36)(var33);
            var22['size'] = var33;
            var79 = var23.bind(var27)(var22);
            var22 = var17 != var29;
            var72 = undefined;
            if(!var22) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var22 = var17 != var65;
            var72 = undefined;
            if(!var22) { _fun0003_ip = 115; continue _fun0003 }
case 117:
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 57;
            var22 = var27[var22];
            var27 = var23.bind(var5)(var22);
            var23 = var27.getRoleIcon;
            var22 = {};
            var22['guildId'] = var65;
            var22['roleId'] = var29;
            var29 = 18;
            var22['size'] = var29;
            var72 = var23.bind(var27)(var22);
case 115:
            var23 = var2.hasFlag;
            var22 = _closure1_slot30;
            var22 = var22.SOURCE_MESSAGE_DELETED;
            var22 = var23.bind(var2)(var22);
            if(!var22) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 29;
            var23 = var33[var22];
            var23 = var29.bind(var5)(var23);
            var27 = var23.intl;
            var23 = var27.string;
            var22 = var33[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.JOtgSw;
            var24 = var23.bind(var27)(var22);
case 118:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getMessageAuthor;
            var22 = var22.bind(var23)(var2);
            var77 = var22.nick;
            var75 = var22.colorString;
            var78 = var22.colorStrings;
            var23 = var2.type;
            var22 = _closure1_slot28;
            var22 = var22.INTERACTION_PREMIUM_UPSELL;
            if(!(var23 === var22)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var23 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 29;
            var27 = var33[var22];
            var27 = var23.bind(var5)(var27);
            var29 = var27.intl;
            var27 = var29.formatToPlainString;
            var22 = var33[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.u4A+xK;
            var22 = {};
            var22['appName'] = var77;
            var24 = var27.bind(var29)(var23, var22);
case 120:
            var23 = var2.type;
            var22 = _closure1_slot28;
            var22 = var22.REPLY;
            r100 = undefined;
            if(!(var23 === var22)) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            r100 = undefined;
            if(!var20) { _fun0003_ip = 122; continue _fun0003 }
case 124:
            var23 = _closure1_slot12;
            var22 = var23.getMessageByReference;
            var20 = var2.messageReference;
            var20 = var22.bind(var23)(var20);
            var23 = var20.state;
            var22 = _closure1_slot13;
            var22 = var22.LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var22 = _closure1_slot13;
            var22 = var22.NOT_LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var22 = _closure1_slot13;
            var22 = var22.DELETED;
            if(!(var22 !== var23)) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 59;
            var22 = var27[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.assertNever;
            var22 = var22.bind(var23)(var20);
            r100 = undefined;
            _fun0003_ip = 122; continue _fun0003;
case 129:
            var22 = {};
            var23 = _closure1_slot27;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var23 = 29;
            var27 = var34[var23];
            var27 = var33.bind(var5)(var27);
            var29 = var27.intl;
            var27 = var29.string;
            var23 = var34[var23];
            var23 = var33.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.mE3KJN;
            var23 = var27.bind(var29)(var23);
            var22['content'] = var23;
            r100 = var22;
            _fun0003_ip = 122; continue _fun0003;
case 127:
            var22 = {};
            var23 = _closure1_slot27;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var23 = 29;
            var27 = var34[var23];
            var27 = var33.bind(var5)(var27);
            var29 = var27.intl;
            var27 = var29.string;
            var23 = var34[var23];
            var23 = var33.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23["1i+hMi"];
            var23 = var27.bind(var29)(var23);
            var22['content'] = var23;
            r100 = var22;
            _fun0003_ip = 122; continue _fun0003;
case 125:
            var20 = var20.message;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 38;
            var22 = var27[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeCreateSingleForwardForMessage;
            var27 = var22.bind(var23)(var20);
            var23 = _closure1_slot21;
            var22 = var23.isBlockedForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var23 = _closure1_slot21;
            var22 = var23.isIgnoredForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var23 = _closure1_slot35;
            var22 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var22['message'] = var20;
            var22['messageForward'] = var27;
            var22['roleStyle'] = var13;
            var34 = false;
            var29 = {};
            r114 = var29;
            r113 = var7;
            var33 = copyDataProperties(r114, r113);
            var33 = 'renderReplies';
            var29[32] = var34;
            var22['options'] = var29;
            var23 = var23.bind(var5)(var22);
            if(!(var17 != var23)) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var22 = 'username';
            var22 = var22 in var23;
            if(!var22) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            var29 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var29 = var29.bind(var5)(var22);
            var22 = var29.getMessageAuthor;
            var22 = var22.bind(var29)(var20);
            var29 = var22.nick;
            var32 = var22.colorString;
            if(!(var17 == var29)) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var22 = var20.author;
            var29 = var22.username;
case 139:
            var33 = var17 != var29;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 141; continue _fun0003 }
case 142:
            var22 = var29;
case 141:
            var23['username'] = var22;
            if(var70) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var29 = _closure1_slot3;
            var33 = var17 != var32;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 145; continue _fun0003 }
case 146:
            var22 = var32;
case 145:
            var22 = var29.bind(var5)(var22);
            if(!(var17 == var22)) { _fun0003_ip = 147; continue _fun0003 }
case 148:
            var22 = var23.colorString;
case 147:
            _fun0003_ip = 149; continue _fun0003;
case 143:
            var22 = var23.colorString;
case 149:
            var23['colorString'] = var22;
            var29 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 58;
            var22 = var32[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.bind(var5)(var2, var20);
            if(!var22) { _fun0003_ip = 137; continue _fun0003 }
case 150:
            var29 = var23.username;
            var22 = '@';
            var22 = var22 + var29;
            var23['username'] = var22;
case 137:
            var22 = global;
            var32 = var22.Array;
            var29 = var32.isArray;
            var22 = var23.content;
            var22 = var29.bind(var32)(var22);
            if(!var22) { _fun0003_ip = 151; continue _fun0003 }
case 152:
            var29 = var23.content;
            var32 = var29.length;
            var29 = 0;
            var22 = var29 === var32;
case 151:
            if(!var22) { _fun0003_ip = 153; continue _fun0003 }
case 154:
            var23['content'] = var5;
case 153:
            var29 = var17 == var27;
            var22 = undefined;
            if(var29) { _fun0003_ip = 155; continue _fun0003 }
case 156:
            var27 = var27.messageSnapshot;
            var22 = var27.message;
case 155:
            var32 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 157; continue _fun0003 }
case 158:
            var32 = var22;
case 157:
            var22 = var23.content;
            var27 = 'stickers';
            var27 = var27 in var32;
            if(var27) { _fun0003_ip = 159; continue _fun0003 }
case 160:
            var27 = new Array(0);
            _fun0003_ip = 161; continue _fun0003;
case 159:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 33;
            var29 = var34[var29];
            var33 = var33.bind(var5)(var29);
            var29 = var33.getMessageStickers;
            var27 = var29.bind(var33)(var32);
case 161:
            var29 = var27.length;
            var27 = 0;
            if(!(!(var29 > var27))) { _fun0003_ip = 162; continue _fun0003 }
case 163:
            var27 = 'interaction';
            var27 = var27 in var32;
            if(!var27) { _fun0003_ip = 164; continue _fun0003 }
case 165:
            var27 = var32.interaction;
            if(!(var17 != var27)) { _fun0003_ip = 164; continue _fun0003 }
case 166:
            var29 = var32.content;
            var27 = '';
            if(!(var27 !== var29)) { _fun0003_ip = 167; continue _fun0003 }
case 164:
            var29 = _closure1_slot0;
            var27 = _closure1_slot2;
            var33 = 34;
            var27 = var27[var33];
            var36 = var29.bind(var5)(var27);
            var34 = var36.hasFlag;
            var29 = var32.flags;
            var27 = _closure1_slot30;
            var27 = var27.IS_VOICE_MESSAGE;
            var27 = var34.bind(var36)(var29, var27);
            if(var27) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            var29 = var32.type;
            var27 = _closure1_slot28;
            var27 = var27.POLL_RESULT;
            if(!(var29 !== var27)) { _fun0003_ip = 170; continue _fun0003 }
case 171:
            var29 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var33];
            var34 = var29.bind(var5)(var27);
            var33 = var34.hasFlag;
            var29 = var32.flags;
            var27 = _closure1_slot30;
            var27 = var27.IS_COMPONENTS_V2;
            var27 = var33.bind(var34)(var29, var27);
            if(var27) { _fun0003_ip = 172; continue _fun0003 }
case 173:
            var29 = var32.content;
            var27 = '';
            if(!(var27 !== var29)) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var27 = var17 == var22;
            var22 = null;
            if(!var27) { _fun0003_ip = 176; continue _fun0003 }
case 174:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var27 = 29;
            var29 = var36[var27];
            var29 = var34.bind(var5)(var29);
            var33 = var29.intl;
            var29 = var33.string;
            var27 = var36[var27];
            var27 = var34.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.JAKsM8;
            var22 = var29.bind(var33)(var27);
case 176:
            _fun0003_ip = 177; continue _fun0003;
case 172:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var27 = 29;
            var29 = var36[var27];
            var29 = var34.bind(var5)(var29);
            var33 = var29.intl;
            var29 = var33.string;
            var27 = var36[var27];
            var27 = var34.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27.Xxm5i3;
            var22 = var29.bind(var33)(var27);
case 177:
            _fun0003_ip = 178; continue _fun0003;
case 170:
            var29 = _closure1_slot0;
            var33 = _closure1_slot2;
            var27 = 35;
            var27 = var33[var27];
            var29 = var29.bind(var5)(var27);
            var27 = var29.getPollResultsReplyPreviewMobile;
            var22 = var27.bind(var29)(var32);
case 178:
            _fun0003_ip = 179; continue _fun0003;
case 168:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = 29;
            var29 = var34[var27];
            var29 = var33.bind(var5)(var29);
            var32 = var29.intl;
            var29 = var32.string;
            var27 = var34[var27];
            var27 = var33.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27["6bhHrc"];
            var22 = var29.bind(var32)(var27);
case 179:
            _fun0003_ip = 180; continue _fun0003;
case 167:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = 29;
            var29 = var34[var27];
            var29 = var33.bind(var5)(var29);
            var32 = var29.intl;
            var29 = var32.string;
            var27 = var34[var27];
            var27 = var33.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27["2v7kfl"];
            var22 = var29.bind(var32)(var27);
case 180:
            _fun0003_ip = 181; continue _fun0003;
case 162:
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var27 = 29;
            var29 = var34[var27];
            var29 = var33.bind(var5)(var29);
            var32 = var29.intl;
            var29 = var32.string;
            var27 = var34[var27];
            var27 = var33.bind(var5)(var27);
            var27 = var27.t;
            var27 = var27["7K5Lma"];
            var22 = var29.bind(var32)(var27);
case 181:
            var27 = var20.type;
            var20 = _closure1_slot28;
            var20 = var20.POLL_RESULT;
            if(!(var27 === var20)) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var23['content'] = var22;
case 182:
            var20 = {};
            var27 = _closure1_slot27;
            var27 = var27.LOADED;
            var20['state'] = var27;
            var20['message'] = var23;
            r100 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 122; continue _fun0003 }
case 184:
            var20['systemContent'] = var22;
            r100 = var20;
            _fun0003_ip = 122; continue _fun0003;
case 135:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 29;
            var23 = var32[var22];
            var23 = var29.bind(var5)(var23);
            var27 = var23.intl;
            var23 = var27.string;
            var22 = var32[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22["1i+hMi"];
            var22 = var23.bind(var27)(var22);
            var20['content'] = var22;
            r100 = var20;
            _fun0003_ip = 122; continue _fun0003;
case 133:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 29;
            var23 = var32[var22];
            var23 = var29.bind(var5)(var23);
            var27 = var23.intl;
            var23 = var27.string;
            var22 = var32[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.G7p6v/;
            var22 = var23.bind(var27)(var22);
            var20['content'] = var22;
            r100 = var20;
            _fun0003_ip = 122; continue _fun0003;
case 131:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 29;
            var23 = var32[var22];
            var23 = var29.bind(var5)(var23);
            var27 = var23.intl;
            var23 = var27.string;
            var22 = var32[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.XAkOo2;
            var22 = var23.bind(var27)(var22);
            var20['content'] = var22;
            r100 = var20;
case 122:
            var98 = undefined;
            if(!var15) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            var15 = _closure1_slot33;
            r115 = undefined;
            r114 = var2;
            r113 = var13;
            r112 = var6;
            r111 = var16;
            r110 = var7;
            r109 = var19;
            var98 = r115[var15](r114, r113, r112, r111, r110, r109, r108);
case 185:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 60;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.createInteractionStatus;
            var54 = var15.bind(var20)(var2, var64);
            var20 = var17 != var65;
            var15 = null;
            if(!var20) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            var23 = _closure1_slot19;
            var22 = var23.getMember;
            var20 = var73.id;
            var15 = var22.bind(var23)(var65, var20);
case 187:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 61;
            var20 = var23[var20];
            var22 = var22.bind(var5)(var20);
            var20 = var22.isMemberCommunicationDisabled;
            var36 = var20.bind(var22)(var15);
            var20 = _closure1_slot4;
            var34 = var20.useReducedMotion;
            var20 = _closure1_slot4;
            var67 = var20.alwaysShowLinkDecorations;
            var20 = var17 == var21;
            var23 = var15;
            var15 = undefined;
            if(var20) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var15 = var21.parent_id;
case 189:
            var27 = var21;
            if(!(var17 != var15)) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var27 = var21;
            if(!(var17 != var21)) { _fun0003_ip = 191; continue _fun0003 }
case 193:
            var15 = var21.isThread;
            var15 = var15.bind(var21)();
            var27 = var21;
            if(!var15) { _fun0003_ip = 191; continue _fun0003 }
case 194:
            var22 = _closure1_slot18;
            var20 = var22.getChannel;
            var15 = var21.parent_id;
            var27 = var20.bind(var22)(var15);
case 191:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 62;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.getVisibleConnectionsRole;
            var15 = {};
            var15['guildMember'] = var23;
            var15['channel'] = var27;
            var15['onlyChannelConnectionRoles'] = var8;
            var74 = var20.bind(var22)(var15);
            var15 = var41.attachments;
            var15 = var15.length;
            var51 = 0;
            var45 = var51 !== var15;
            var15 = var41.embeds;
            var15 = var15.length;
            var46 = var51 !== var15;
            var15 = var39;
            if(!var39) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var20 = var2.attachments;
            var20 = var20.length;
            var15 = var51 === var20;
case 195:
            if(!var15) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var15 = var17 != var25;
case 197:
            var38 = new Array(0);
            if(var15) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            if(!var44) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var20 = 64;
            var20 = var27[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var27 = var41.attachments;
            var20['attachments'] = var27;
            var32 = _closure1_slot22;
            var29 = var32.getUploadAttachments;
            var27 = var2.nonce;
            var27 = var29.bind(var32)(var27);
            var20['uploadAttachments'] = var27;
            var20['shouldInlineAttachmentMedia'] = var43;
            var20['gifAutoPlay'] = var55;
            var20['viewImageDescriptions'] = var58;
            var20['useReducedMotion'] = var34;
            var20['shouldObscureSpoiler'] = var61;
            var27 = var28.embedBackgroundColor;
            var20['themedBackgroundColor'] = var27;
            var20['enabledContentHarmTypeFlags'] = var60;
            var20['shouldAgeVerify'] = var59;
            var20['colors'] = var28;
            var38 = var22.bind(var5)(var20);
            _fun0003_ip = 201; continue _fun0003;
case 199:
            var22 = _closure1_slot1;
            var27 = _closure1_slot2;
            var20 = 63;
            var20 = var27[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var20['uploaderFile'] = var25;
            var27 = var2.state;
            var25 = _closure1_slot29;
            var25 = var25.SEND_FAILED;
            var25 = var27 === var25;
            var20['isFailedMessage'] = var25;
            var20['shouldInlineAttachmentMedia'] = var43;
            var38 = var22.bind(var5)(var20);
case 201:
            if(!var15) { _fun0003_ip = 203; continue _fun0003 }
case 204:
            var22 = var2.state;
            var20 = _closure1_slot29;
            var20 = var20.SEND_FAILED;
            if(!(var22 === var20)) { _fun0003_ip = 205; continue _fun0003 }
case 203:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 65;
            var20 = var25[var20];
            var25 = var22.bind(var5)(var20);
            var22 = var25.calendarFormat;
            var20 = var2.timestamp;
            var71 = var22.bind(var25)(var20, var8, var26);
            _fun0003_ip = 206; continue _fun0003;
case 205:
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = 29;
            var22 = var27[var20];
            var22 = var26.bind(var5)(var22);
            var25 = var22.intl;
            var22 = var25.string;
            var20 = var27[var20];
            var20 = var26.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.yXY+5J;
            var71 = var22.bind(var25)(var20);
case 206:
            if(!var15) { _fun0003_ip = 207; continue _fun0003 }
case 208:
            var20 = var2.state;
            var15 = _closure1_slot29;
            var15 = var15.SEND_FAILED;
            if(!(var20 === var15)) { _fun0003_ip = 209; continue _fun0003 }
case 207:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 65;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.accessibilityLabelCalendarFormat;
            var15 = var2.timestamp;
            var68 = var20.bind(var22)(var15);
            _fun0003_ip = 210; continue _fun0003;
case 209:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 29;
            var20 = var26[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var26[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.yXY+5J;
            var68 = var20.bind(var22)(var15);
case 210:
            var20 = _closure1_slot17;
            var15 = var20.getId;
            var33 = var15.bind(var20)();
            var15 = var2.isUnsupported;
            var66 = var24;
            if(!var15) { _fun0003_ip = 211; continue _fun0003 }
case 212:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var15 = 29;
            var20 = var26[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var26[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.sWi5EU;
            var66 = var20.bind(var22)(var15);
case 211:
            var15 = var2.isPoll;
            var15 = var15.bind(var2)();
            var15 = !var15;
            if(var15) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            var20 = !var6;
            if(!var20) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var20 = var4;
case 215:
            var15 = var20;
case 213:
            if(var15) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            var22 = '';
            var20 = var22 !== var24;
case 219:
            var15 = var20;
case 217:
            if(var15) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 35;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.getPollReplyPreview;
            var66 = var15.bind(var20)(var2);
case 221:
            var32 = undefined;
            if(!var4) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var4 = 66;
            var4 = var20[var4];
            var15 = var15.bind(var5)(var4);
            var4 = {};
            var4['theme'] = var19;
            var4['animateEmoji'] = var81;
            var32 = var15.bind(var5)(var2, var5, var4);
case 223:
            var27 = undefined;
            if(!var1) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 67;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var27 = var1.bind(var4)(var2, var80, var77);
case 225:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 68;
            var1 = var1[var94];
            var20 = var4.bind(var5)(var1);
            var15 = var20.shouldDisplayGuildTag;
            var4 = var73.id;
            var22 = var17 != var65;
            var1 = undefined;
            if(!var22) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var1 = var65;
case 227:
            var1 = var15.bind(var20)(var4, var1);
            var26 = undefined;
            var25 = undefined;
            var24 = undefined;
            if(!var1) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var94];
            var15 = var4.bind(var5)(var1);
            var4 = var15.getUserPrimaryGuild;
            var1 = var73.primaryGuild;
            var20 = var4.bind(var15)(var1);
            var15 = var20.guildId;
            var4 = var20.tag;
            var1 = var20.guildId;
            var22 = var17 != var1;
            var1 = undefined;
            if(!var22) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var29 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var94];
            var96 = var29.bind(var5)(var22);
            var94 = var96.getGuildTagBadgeUrl;
            var29 = var20.guildId;
            var22 = var20.badge;
            var20 = _closure1_slot32;
            var20 = var20.SIZE_12;
            var1 = var94.bind(var96)(var29, var22, var20);
case 231:
            var24 = var1;
            var26 = var15;
            var25 = var4;
case 229:
            var4 = var17 == var21;
            var1 = undefined;
            if(var4) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var1 = var21.linkedLobby;
case 233:
            var4 = var17 != var1;
            var22 = undefined;
            var20 = undefined;
            if(!var4) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var4 = var2.additionalName;
            var4 = var17 != var4;
            var22 = undefined;
            var20 = undefined;
            if(!var4) { _fun0003_ip = 235; continue _fun0003 }
case 237:
            var15 = var2.additionalName;
            var4 = '';
            var22 = undefined;
            var20 = undefined;
            if(!(var4 !== var15)) { _fun0003_ip = 235; continue _fun0003 }
case 238:
            var4 = var2.additionalName;
            var29 = _closure1_slot5;
            var15 = var29.getApplication;
            var1 = var1.application_id;
            var94 = var15.bind(var29)(var1);
            var15 = var17 == var94;
            var1 = undefined;
            if(var15) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var1 = var94.icon;
case 239:
            var15 = var17 != var1;
            var1 = undefined;
            if(!var15) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var29 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var83];
            var83 = var29.bind(var5)(var15);
            var29 = var83.getApplicationIconURL;
            var15 = {};
            var96 = var94.id;
            var15['id'] = var96;
            var94 = var94.icon;
            var15['icon'] = var94;
            var94 = 16;
            var15['size'] = var94;
            var1 = var29.bind(var83)(var15);
case 241:
            var20 = var1;
            var22 = var4;
case 235:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 34;
            var1 = var1[var94];
            var29 = var4.bind(var5)(var1);
            var15 = var29.hasFlag;
            var1 = var2;
            if(!(var17 != var41)) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var1 = var41;
case 243:
            var4 = var1.flags;
            var1 = _closure1_slot30;
            var1 = var1.IS_VOICE_MESSAGE;
            var29 = var15.bind(var29)(var4, var1);
            var15 = _closure1_slot5;
            var4 = var15.getApplication;
            var83 = var2.applicationId;
            var97 = var17 != var83;
            var96 = '';
            var1 = var96;
            if(!var97) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var1 = var83;
case 245:
            var1 = var4.bind(var15)(var1);
            var4 = var17 != var1;
            if(!var4) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var83 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var94];
            var97 = var83.bind(var5)(var15);
            var94 = var97.hasFlag;
            var83 = var2.flags;
            var15 = _closure1_slot30;
            var15 = var15.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var4 = var94.bind(var97)(var83, var15);
case 247:
            var15 = undefined;
            if(!var4) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var15 = var1.id;
case 249:
            var1 = var17 != var41;
            var94 = undefined;
            var97 = undefined;
            var83 = undefined;
            if(!var1) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var4 = var41.hasFlag;
            var1 = _closure1_slot30;
            var1 = var1.IS_GUILD_OFFICIAL;
            var1 = var4.bind(var41)(var1);
            var94 = undefined;
            var97 = undefined;
            var83 = undefined;
            if(!var1) { _fun0003_ip = 251; continue _fun0003 }
case 253:
            var4 = _closure1_slot20;
            var1 = var4.getGuild;
            var1 = var1.bind(var4)(var65);
            var4 = var17 != var1;
            var94 = undefined;
            var97 = undefined;
            var83 = undefined;
            if(!var4) { _fun0003_ip = 251; continue _fun0003 }
case 254:
            var99 = _closure1_slot0;
            var4 = _closure1_slot2;
            r102 = 69;
            var4 = var4[r102];
            r101 = var99.bind(var5)(var4);
            var99 = r101.isGuildOfficialMessagesEnabled;
            var4 = 'createMessageContent';
            var4 = var99.bind(r101)(var1, var4);
            var94 = undefined;
            var97 = undefined;
            var83 = undefined;
            if(!var4) { _fun0003_ip = 251; continue _fun0003 }
case 255:
            r105 = var1.officialMessageColor;
            if(!(var17 == r105)) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            r105 = _closure1_slot24;
case 256:
            var1 = _closure1_slot4;
            r101 = var1.officialMessageStyle;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r102];
            var4 = var4.bind(var5)(var1);
            var1 = var4.showGuildOfficialMessageGradient;
            r106 = var1.bind(var4)(r101);
            var99 = undefined;
            if(!r106) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            var1 = _closure1_slot26;
            var99 = r105 | var1;
case 258:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r102];
            var4 = var4.bind(var5)(var1);
            var1 = var4.showGuildOfficialMessageTextColor;
            var1 = var1.bind(var4)(r101);
            var4 = undefined;
            if(!var1) { _fun0003_ip = 260; continue _fun0003 }
case 261:
            r104 = _closure1_slot1;
            r107 = _closure1_slot2;
            var1 = 70;
            r101 = r107[var1];
            r101 = r104.bind(var5)(r101);
            r103 = r101.internal;
            r101 = r103.resolveSemanticColor;
            var1 = r107[var1];
            var1 = r104.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWER;
            r104 = r101.bind(r103)(var19, var1);
            var1 = _closure1_slot4;
            var1 = var1.desaturateUserColors;
            r103 = 1;
            if(!var1) { _fun0003_ip = 262; continue _fun0003 }
case 263:
            var1 = _closure1_slot4;
            r103 = var1.saturation;
case 262:
            r101 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r102];
            r102 = r101.bind(var5)(var1);
            r101 = r102.getAccessibleGuildOfficialTextColor;
            var1 = 0;
            if(!r106) { _fun0003_ip = 264; continue _fun0003 }
case 265:
            var1 = _closure1_slot25;
case 264:
            r115 = r102;
            r114 = r105;
            r113 = r104;
            r112 = r103;
            r111 = var1;
            r101 = r115[r101](r114, r113, r112, r111, r110);
            var1 = r101.num;
            var4 = var1.bind(r101)();
case 260:
            r103 = _closure1_slot0;
            r104 = _closure1_slot2;
            var1 = 29;
            r101 = r104[var1];
            r101 = r103.bind(var5)(r101);
            r102 = r101.intl;
            r101 = r102.string;
            var1 = r104[var1];
            var1 = r103.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.GzDTxY;
            var83 = r101.bind(r102)(var1);
            var97 = var4;
            var94 = var99;
case 251:
            var4 = _closure1_slot0;
            var99 = _closure1_slot2;
            var1 = 71;
            var1 = var99[var1];
            var99 = var4.bind(var5)(var1);
            var4 = var99.createVoiceChannelBadge;
            var1 = var2.author;
            var1 = var1.id;
            var4 = var4.bind(var99)(var1, var65);
            var1 = {};
            var99 = var2.id;
            var1['id'] = var99;
            var99 = var2.channel_id;
            var1['channelId'] = var99;
            r101 = var17 != var65;
            var99 = undefined;
            if(!r101) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var99 = var65;
case 266:
            var1['guildId'] = var99;
            var99 = var2;
            if(!(var17 != var41)) { _fun0003_ip = 268; continue _fun0003 }
case 269:
            var99 = var41;
case 268:
            var99 = var99.flags;
            var1['flags'] = var99;
            var99 = var2.type;
            var1['type'] = var99;
            var99 = var2.nonce;
            if(!(var17 != var99)) { _fun0003_ip = 270; continue _fun0003 }
case 271:
            var99 = var2.nonce;
            r101 = 'string';
            var99 = typeof var99;
            if(!(r101 === var99)) { _fun0003_ip = 272; continue _fun0003 }
case 270:
            var99 = var2.nonce;
            _fun0003_ip = 273; continue _fun0003;
case 272:
            r101 = global;
            r102 = r101.String;
            r101 = var2.nonce;
            var99 = r102.bind(var5)(r101);
case 273:
            var1['nonce'] = var99;
            var99 = var2.state;
            var1['state'] = var99;
            var1['reactions'] = var18;
            var99 = undefined;
            if(var53) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var99 = r100;
case 274:
            var1['referencedMessage'] = var99;
            var1['threadEmbed'] = var98;
            var99 = var17 != var100;
            var98 = undefined;
            if(!var99) { _fun0003_ip = 276; continue _fun0003 }
case 277:
            var99 = var100.getForwardInfo;
            var98 = var99.bind(var100)();
case 276:
            var1['forwardInfo'] = var98;
            var95 = !var95;
            if(!var95) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var95 = var2.mentioned;
case 278:
            var1['mentioned'] = var95;
            var95 = var2.isEdited;
            var98 = var95.bind(var2)();
            var95 = var96;
            if(!var98) { _fun0003_ip = 280; continue _fun0003 }
case 281:
            var95 = var96;
            if(var53) { _fun0003_ip = 280; continue _fun0003 }
case 282:
            var100 = _closure1_slot0;
            r100 = _closure1_slot2;
            var96 = 29;
            var98 = r100[var96];
            var98 = var100.bind(var5)(var98);
            var99 = var98.intl;
            var98 = var99.string;
            var96 = r100[var96];
            var96 = var100.bind(var5)(var96);
            var96 = var96.t;
            var96 = var96.C8sXIM;
            var95 = var98.bind(var99)(var96);
case 280:
            var1['edited'] = var95;
            var95 = var2.isEdited;
            var96 = var95.bind(var2)();
            var95 = undefined;
            if(!var96) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var95 = undefined;
            if(var53) { _fun0003_ip = 283; continue _fun0003 }
case 285:
            var96 = var2.editedTimestamp;
            var96 = var17 != var96;
            var95 = undefined;
            if(!var96) { _fun0003_ip = 283; continue _fun0003 }
case 286:
            var98 = _closure1_slot0;
            var99 = _closure1_slot2;
            var96 = 65;
            var96 = var99[var96];
            var100 = var98.bind(var5)(var96);
            var99 = var100.dateFormat;
            var98 = var2.editedTimestamp;
            var96 = 'LLLL';
            var95 = var99.bind(var100)(var98, var96);
case 283:
            var1['editedTimestamp'] = var95;
            var95 = var28.editedColor;
            var1['editedColor'] = var95;
            var95 = var2.isUnsupported;
            if(var95) { _fun0003_ip = 287; continue _fun0003 }
case 288:
            if(!(var17 == var97)) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var95 = var28.textColor;
            _fun0003_ip = 291; continue _fun0003;
case 289:
            var96 = 4278190080.0;
            var95 = var96 | var97;
case 291:
            _fun0003_ip = 292; continue _fun0003;
case 287:
            var95 = var28.unsupportedColor;
case 292:
            var1['textColor'] = var95;
            var1['officialMessageColor'] = var94;
            var94 = var28.linkColor;
            var1['linkColor'] = var94;
            var1['tagText'] = var93;
            var1['tagAccessibilityLabel'] = var92;
            var1['tagVerified'] = var91;
            var1['tagTextColor'] = var90;
            var1['tagBackgroundColor'] = var89;
            var1['tagType'] = var88;
            var1['tagIconUrl'] = var87;
            var1['opTagText'] = var86;
            var1['opTagTextColor'] = var85;
            var1['opTagBackgroundColor'] = var84;
            var1['stateAccessibilityLabel'] = var83;
            var1['constrainedWidth'] = var82;
            var1['gifAutoPlay'] = var55;
            var1['animateEmoji'] = var81;
            var81 = var77;
            if(!var70) { _fun0003_ip = 293; continue _fun0003 }
case 294:
            var81 = var73.username;
case 293:
            var82 = var17 != var81;
            var77 = undefined;
            if(!var82) { _fun0003_ip = 295; continue _fun0003 }
case 296:
            var77 = var81;
case 295:
            var1['username'] = var77;
            var77 = undefined;
            if(var70) { _fun0003_ip = 297; continue _fun0003 }
case 298:
            var77 = var80.uri;
case 297:
            var1['avatarURL'] = var77;
            var77 = null;
            if(var70) { _fun0003_ip = 299; continue _fun0003 }
case 300:
            var77 = var79;
case 299:
            var1['avatarDecorationURL'] = var77;
            var73 = var73.id;
            var1['authorId'] = var73;
            if(var70) { _fun0003_ip = 301; continue _fun0003 }
case 302:
            var73 = 'username';
            if(!(var73 === var13)) { _fun0003_ip = 301; continue _fun0003 }
case 303:
            var77 = _closure1_slot3;
            var79 = var17 != var75;
            var73 = undefined;
            if(!var79) { _fun0003_ip = 304; continue _fun0003 }
case 305:
            var73 = var75;
case 304:
            var73 = var77.bind(var5)(var73);
            if(!(var17 == var73)) { _fun0003_ip = 306; continue _fun0003 }
case 307:
            var73 = var28.defaultUsernameColor;
case 306:
            _fun0003_ip = 308; continue _fun0003;
case 301:
            var73 = var28.defaultUsernameColor;
case 308:
            var1['usernameColor'] = var73;
            var73 = null;
            if(var70) { _fun0003_ip = 309; continue _fun0003 }
case 310:
            var79 = _closure1_slot3;
            var80 = var17 != var75;
            var77 = undefined;
            if(!var80) { _fun0003_ip = 311; continue _fun0003 }
case 312:
            var77 = var75;
case 311:
            var79 = var79.bind(var5)(var77);
            var80 = var17 != var79;
            var77 = null;
            if(!var80) { _fun0003_ip = 313; continue _fun0003 }
case 314:
            var77 = var79;
case 313:
            var73 = var77;
case 309:
            var1['roleColor'] = var73;
            var73 = null;
            if(!var76) { _fun0003_ip = 315; continue _fun0003 }
case 316:
            var73 = null;
            if(var70) { _fun0003_ip = 315; continue _fun0003 }
case 317:
            var77 = _closure1_slot0;
            var79 = _closure1_slot2;
            var76 = 72;
            var76 = var79[var76];
            var77 = var77.bind(var5)(var76);
            var76 = var77.processColorStrings;
            var73 = var76.bind(var77)(var78);
case 315:
            var1['roleColors'] = var73;
            var73 = 'dot';
            var73 = var73 === var13;
            var1['shouldShowRoleDot'] = var73;
            var73 = 'username';
            var73 = var73 === var13;
            var1['shouldShowRoleOnName'] = var73;
            var1['showLinkDecorations'] = var67;
            if(var70) { _fun0003_ip = 318; continue _fun0003 }
case 319:
            var73 = _closure1_slot3;
            var76 = var17 != var75;
            var67 = undefined;
            if(!var76) { _fun0003_ip = 320; continue _fun0003 }
case 321:
            var67 = var75;
case 320:
            var67 = var73.bind(var5)(var67);
            if(!(var17 == var67)) { _fun0003_ip = 322; continue _fun0003 }
case 323:
            var67 = var28.defaultUsernameColor;
case 322:
            _fun0003_ip = 324; continue _fun0003;
case 318:
            var67 = var28.defaultUsernameColor;
case 324:
            var1['colorString'] = var67;
            var67 = undefined;
            if(var70) { _fun0003_ip = 325; continue _fun0003 }
case 326:
            var67 = var72;
case 325:
            var1['roleIcon'] = var67;
            var72 = var17 != var74;
            var67 = undefined;
            if(!var72) { _fun0003_ip = 327; continue _fun0003 }
case 328:
            var73 = _closure1_slot0;
            var75 = _closure1_slot2;
            var72 = 73;
            var72 = var75[var72];
            var73 = var73.bind(var5)(var72);
            var72 = var73.createConnectionsRoleTag;
            var67 = var72.bind(var73)(var74);
case 327:
            var1['connectionsRoleTag'] = var67;
            var67 = undefined;
            if(var70) { _fun0003_ip = 329; continue _fun0003 }
case 330:
            var67 = var71;
case 329:
            var1['timestamp'] = var67;
            var67 = undefined;
            if(var70) { _fun0003_ip = 331; continue _fun0003 }
case 332:
            var72 = _closure1_slot0;
            var73 = _closure1_slot2;
            var71 = 65;
            var71 = var73[var71];
            var74 = var72.bind(var5)(var71);
            var73 = var74.dateFormat;
            var72 = var2.timestamp;
            var71 = 'LLLL';
            var67 = var73.bind(var74)(var72, var71);
case 331:
            var1['timestampTooltip'] = var67;
            var67 = undefined;
            if(var70) { _fun0003_ip = 333; continue _fun0003 }
case 334:
            var67 = var28.timestampColor;
case 333:
            var1['timestampColor'] = var67;
            var67 = undefined;
            if(var70) { _fun0003_ip = 335; continue _fun0003 }
case 336:
            var67 = var68;
case 335:
            var1['timestampAccessibilityLabel'] = var67;
            var1['content'] = var66;
            var1['isEditing'] = var11;
            var1['renderContentOnly'] = var53;
            var66 = undefined;
            if(!(var5 !== var69)) { _fun0003_ip = 337; continue _fun0003 }
case 338:
            var68 = _closure1_slot0;
            var70 = _closure1_slot2;
            var67 = 74;
            var67 = var70[var67];
            var68 = var68.bind(var5)(var67);
            var67 = var68.createSurveyIndication;
            var66 = var67.bind(var68)(var2, var19, var69);
case 337:
            var1['surveyIndication'] = var66;
            var67 = _closure1_slot0;
            var68 = _closure1_slot2;
            var66 = 75;
            var66 = var68[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.createEphemeralIndication;
            var66 = var66.bind(var67)(var2);
            var1['ephemeralIndication'] = var66;
            var1['interactionStatus'] = var54;
            var54 = undefined;
            if(!var57) { _fun0003_ip = 339; continue _fun0003 }
case 340:
            var66 = _closure1_slot0;
            var67 = _closure1_slot2;
            var57 = 76;
            var57 = var67[var57];
            var67 = var66.bind(var5)(var57);
            var66 = var67.createExecutedCommand;
            r110 = var28.defaultUsernameColor;
            r115 = var67;
            r114 = var2;
            r113 = var21;
            r112 = var13;
            r111 = var19;
            var54 = r115[var66](r114, r113, r112, r111, r110, r109);
case 339:
            var1['executedCommand'] = var54;
            var54 = var41.components;
            var54 = var54.length;
            var57 = var54 > var51;
            var54 = undefined;
            if(!var57) { _fun0003_ip = 341; continue _fun0003 }
case 342:
            var54 = undefined;
            if(!var56) { _fun0003_ip = 341; continue _fun0003 }
case 343:
            var57 = _closure1_slot1;
            var66 = _closure1_slot2;
            var56 = 49;
            var56 = var66[var56];
            var57 = var57.bind(var5)(var56);
            var56 = {};
            var56['message'] = var2;
            var56['guildId'] = var65;
            var56['interaction'] = var64;
            var56['shouldDisableInteractiveComponents'] = var63;
            var56['shouldShowMedia'] = var62;
            var56['shouldObscureSpoiler'] = var61;
            var56['enabledContentHarmTypeFlags'] = var60;
            var56['shouldAgeVerify'] = var59;
            var56['shouldShowMosaicMediaDescriptions'] = var58;
            var56['shouldAutoPlayGifs'] = var55;
            var56['colors'] = var28;
            var55 = var41.components;
            var54 = var57.bind(var5)(var56, var55);
case 341:
            var1['components'] = var54;
            var54 = 0;
            if(var53) { _fun0003_ip = 344; continue _fun0003 }
case 345:
            var54 = var28.feedbackColor;
case 344:
            var1['feedbackColor'] = var54;
            var51 = 0;
            if(var53) { _fun0003_ip = 346; continue _fun0003 }
case 347:
            var51 = var28.highlightColor;
case 346:
            var1['highlightColor'] = var51;
            var53 = var17 != var52;
            var51 = undefined;
            if(!var53) { _fun0003_ip = 348; continue _fun0003 }
case 349:
            var51 = var52;
case 348:
            var1['embeds'] = var51;
            if(var50) { _fun0003_ip = 350; continue _fun0003 }
case 351:
            var50 = new Array(0);
            _fun0003_ip = 352; continue _fun0003;
case 350:
            var52 = _closure1_slot0;
            var53 = _closure1_slot2;
            var51 = 77;
            var51 = var53[var51];
            var52 = var52.bind(var5)(var51);
            var51 = var52.createGiftCodeEmbed;
            var50 = var51.bind(var52)(var2, var19);
case 352:
            var1['giftCodes'] = var50;
            if(var47) { _fun0003_ip = 353; continue _fun0003 }
case 354:
            var47 = new Array(0);
            _fun0003_ip = 355; continue _fun0003;
case 353:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 78;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createCodedLinkEmbeds;
            r115 = var51;
            r114 = var2;
            r113 = var41;
            r112 = var21;
            r111 = var19;
            var47 = r115[var50](r114, r113, r112, r111, r110);
case 355:
            var1['codedLinks'] = var47;
            var47 = undefined;
            if(!var49) { _fun0003_ip = 356; continue _fun0003 }
case 357:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 79;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createActivityInstanceEmbed;
            var47 = var49.bind(var50)(var2);
case 356:
            var1['activityInstanceEmbed'] = var47;
            var47 = undefined;
            if(!var48) { _fun0003_ip = 358; continue _fun0003 }
case 359:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 80;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityRichPresenceInviteEmbed;
            var47 = var48.bind(var49)(var2, var21);
case 358:
            var1['activityRichPresenceInviteEmbed'] = var47;
            if(!var43) { _fun0003_ip = 360; continue _fun0003 }
case 361:
            if(!var44) { _fun0003_ip = 362; continue _fun0003 }
case 363:
            if(var45) { _fun0003_ip = 364; continue _fun0003 }
case 365:
            var45 = var46;
case 364:
            var44 = var45;
case 362:
            if(var44) { _fun0003_ip = 366; continue _fun0003 }
case 367:
            var44 = var39;
case 366:
            var43 = var44;
case 360:
            var1['useAttachmentGridLayout'] = var43;
            var1['useAttachmentUploadPreview'] = var39;
            var1['attachments'] = var38;
            var44 = 1;
            var38 = var44;
            if(!var39) { _fun0003_ip = 368; continue _fun0003 }
case 369:
            var43 = var2.state;
            var39 = _closure1_slot29;
            var39 = var39.SEND_FAILED;
            var38 = var44;
            if(!(var43 === var39)) { _fun0003_ip = 368; continue _fun0003 }
case 370:
            var38 = 0.2;
case 368:
            var1['attachmentsOpacity'] = var38;
            if(var37) { _fun0003_ip = 371; continue _fun0003 }
case 372:
            var38 = _closure1_slot1;
            var39 = _closure1_slot2;
            var37 = 81;
            var37 = var39[var37];
            var38 = var38.bind(var5)(var37);
            var37 = {};
            var37['message'] = var41;
            var41 = _closure1_slot0;
            var39 = var39[var42];
            var39 = var41.bind(var5)(var39);
            var41 = var39.AnimateStickers;
            var39 = var41.getSetting;
            var39 = var39.bind(var41)();
            var37['animateStickersSetting'] = var39;
            var39 = var2.id;
            var39 = var39 === var40;
            var37['isUserInteracting'] = var39;
            var37 = var38.bind(var5)(var37);
            _fun0003_ip = 373; continue _fun0003;
case 371:
            var37 = new Array(0);
case 373:
            var1['stickers'] = var37;
            if(!var31) { _fun0003_ip = 374; continue _fun0003 }
case 375:
            var31 = var36;
case 374:
            var1['communicationDisabled'] = var31;
            var36 = var17 == var21;
            if(var36) { _fun0003_ip = 376; continue _fun0003 }
case 377:
            var31 = var21.isForumPost;
            var31 = var31.bind(var21)();
            var36 = !var31;
case 376:
            var31 = !var36;
            if(var36) { _fun0003_ip = 378; continue _fun0003 }
case 379:
            var37 = var2.id;
            var36 = var2.channel_id;
            var31 = var37 === var36;
case 378:
            var1['isFirstForumPostMessage'] = var31;
            var36 = var17 != var21;
            var31 = undefined;
            if(!var36) { _fun0003_ip = 380; continue _fun0003 }
case 381:
            var36 = var21.isForumPost;
            var36 = var36.bind(var21)();
            var31 = undefined;
            if(!var36) { _fun0003_ip = 380; continue _fun0003 }
case 382:
            var31 = undefined;
            if(!var35) { _fun0003_ip = 380; continue _fun0003 }
case 383:
            var35 = _closure1_slot34;
            var31 = var35.bind(var5)(var2, var21);
case 380:
            var1['postActions'] = var31;
            var31 = var2.author;
            var31 = var31.id;
            var31 = var31 === var33;
            var1['isCurrentUserMessageAuthor'] = var31;
            var31 = _closure1_slot6;
            var31 = var31.gradientPreset;
            var31 = var17 != var31;
            var1['usingGradientTheme'] = var31;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 30;
            var35 = var37[var31];
            var39 = var33.bind(var5)(var35);
            var38 = var39.getAssetUriForEmbed;
            var36 = _closure1_slot1;
            var35 = 82;
            var35 = var37[var35];
            var35 = var36.bind(var5)(var35);
            var35 = var38.bind(var39)(var35);
            var1['swipeToReplyIconUrl'] = var35;
            var31 = var37[var31];
            var35 = var33.bind(var5)(var31);
            var33 = var35.getAssetUriForEmbed;
            var31 = 83;
            var31 = var37[var31];
            var31 = var36.bind(var5)(var31);
            var31 = var33.bind(var35)(var31);
            var1['swipeToEditIconUrl'] = var31;
            if(var30) { _fun0003_ip = 384; continue _fun0003 }
case 385:
            var30 = new Array(0);
            _fun0003_ip = 386; continue _fun0003;
case 384:
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 84;
            var31 = var35[var31];
            var33 = var33.bind(var5)(var31);
            var31 = var33.createPostPreviewEmbeds;
            var30 = var31.bind(var33)(var2, var13, var34);
case 386:
            var1['postPreviewEmbeds'] = var30;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var33 = 29;
            var34 = var31[var33];
            var34 = var30.bind(var5)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var33 = var31[var33];
            var33 = var30.bind(var5)(var33);
            var33 = var33.t;
            var33 = var33["2aXnfa"];
            var33 = var34.bind(var35)(var33);
            var1['obscureLearnMoreLabel'] = var33;
            var33 = 85;
            var33 = var31[var33];
            var34 = var30.bind(var5)(var33);
            var33 = var34.createSafetyPolicyNoticeEmbed;
            var33 = var33.bind(var34)(var2);
            var1['safetyPolicyNoticeEmbed'] = var33;
            var1['pollData'] = var32;
            var1['sharedClientTheme'] = var27;
            var27 = 86;
            var27 = var31[var27];
            var32 = var30.bind(var5)(var27);
            var27 = var32.createSafetySystemNotificationEmbed;
            var27 = var27.bind(var32)(var2);
            var1['safetySystemNotificationEmbed'] = var27;
            var27 = 87;
            var27 = var31[var27];
            var32 = var30.bind(var5)(var27);
            var31 = var32.createCtaButton;
            var30 = var2.id;
            var27 = var2.channel_id;
            var27 = var31.bind(var32)(var30, var27, var28);
            var1['ctaButton'] = var27;
            var27 = undefined;
            if(!var29) { _fun0003_ip = 387; continue _fun0003 }
case 388:
            var27 = var28.embedBackgroundColor;
case 387:
            var1['audioAttachmentBackgroundColor'] = var27;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var27 = 88;
            var27 = var29[var27];
            var28 = var28.bind(var5)(var27);
            var27 = var28.createMessageAccessibilityActions;
            var27 = var27.bind(var28)(var2, var21);
            var1['accessibilityActions'] = var27;
            var1['clanTagGuildId'] = var26;
            var1['clanTag'] = var25;
            var1['clanBadgeUrl'] = var24;
            var1['lobbyAdditionalName'] = var22;
            var1['lobbyTagIconUrl'] = var20;
            var1['isFirst'] = var12;
            var1['gameApplicationId'] = var15;
            var15 = var17 == var21;
            var20 = undefined;
            if(var15) { _fun0003_ip = 389; continue _fun0003 }
case 390:
            var20 = var21.type;
case 389:
            var15 = _closure1_slot31;
            var15 = var15.GUILD_ANNOUNCEMENT;
            var15 = var20 === var15;
            var1['isAnnouncementChannel'] = var15;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 89;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.createDisplayNameStylesMobile;
            var15 = var2.author;
            var15 = var20.bind(var22)(var15, var23);
            var1['displayNameStyles'] = var15;
            var1['voiceChannelBadge'] = var4;
            return var1;
case 66:
            var4 = var2.type;
            var1 = _closure1_slot28;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 391; continue _fun0003 }
case 392:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 41;
            var1 = var15[var1];
            var15 = var4.bind(var5)(var1);
            var4 = var15.createSystemMessageContent;
            var1 = {};
            var1['message'] = var2;
            var1['theme'] = var19;
            var1['reactions'] = var18;
            var1['roleStyle'] = var13;
            var20 = var17 == var21;
            var17 = undefined;
            if(var20) { _fun0003_ip = 393; continue _fun0003 }
case 394:
            var20 = var21.isForumPost;
            var17 = var20.bind(var21)();
case 393:
            var1['isForumPost'] = var17;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 395; continue _fun0003;
case 391:
            var4 = {};
            var15 = _closure1_slot33;
            r115 = undefined;
            r114 = var2;
            r113 = var13;
            r112 = var6;
            r111 = var16;
            r110 = var7;
            r109 = var19;
            var15 = r115[var15](r114, r113, r112, r111, r110, r109, r108);
            var4['threadEmbed'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 41;
            var15 = var17[var15];
            var17 = var16.bind(var5)(var15);
            var16 = var17.createSystemMessageContent;
            var15 = {};
            var15['message'] = var2;
            var15['theme'] = var19;
            var15['reactions'] = var18;
            var15['roleStyle'] = var13;
            r113 = var16.bind(var17)(var15);
            r114 = var4;
            var15 = copyDataProperties(r114, r113);
            var1 = var4;
case 395:
            return var1;
case 64:
            var1 = {};
            var4 = _closure1_slot35;
            var3 = {};
            var3['message'] = var14;
            var3['roleStyle'] = var13;
            var3['isFirst'] = var12;
            var3['isEditing'] = var11;
            var3['canShowImages'] = var10;
            var3['isSystemDM'] = var9;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r114 = var6;
            r113 = var7;
            var7 = copyDataProperties(r114, r113);
            var9 = false;
            var7 = 'renderThreadEmbeds';
            var6[6] = var9;
            var7 = 'renderReactions';
            var6[6] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[6] = var8;
            var3['options'] = var6;
            r113 = var4.bind(var5)(var3);
            r114 = var1;
            var3 = copyDataProperties(r114, r113);
            var3 = var2.id;
            var2 = 'id';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot35 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.processColor;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot21 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot22 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot23 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DEFAULT_GUILD_OFFICIAL_COLOR;
    var _closure1_slot24 = var8;
    var8 = var4.GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
    var _closure1_slot25 = var8;
    var4 = var4.GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR;
    var _closure1_slot26 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageRowState;
    var _closure1_slot27 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MessageTypes;
    var _closure1_slot28 = var8;
    var8 = var4.MessageStates;
    var _closure1_slot29 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot30 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot31 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot32 = var4;
    var4 = 90;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();