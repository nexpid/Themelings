// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createThreadEmbed(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.hasFlag;
            var2 = _closure1_slot29;
            var2 = var2.HAS_THREAD;
            var2 = var5.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
            var6 = var11[var6];
            var8 = undefined;
            var10 = var5.bind(var8)(var6);
            var9 = var10.computeChannelName;
            var7 = _closure1_slot23;
            var6 = _closure1_slot21;
            var7 = var9.bind(var10)(var3, var7, var6);
            var10 = _closure1_slot15;
            var9 = var10.getMostRecentMessage;
            var13 = _closure1_slot1;
            var12 = 25;
            var6 = var11[var12];
            var15 = var13.bind(var8)(var6);
            var14 = var15.castMessageIdAsChannelId;
            var6 = var1.id;
            var6 = var14.bind(var15)(var6);
            var9 = var9.bind(var10)(var6);
            var10 = _closure1_slot15;
            var6 = var10.getCount;
            var12 = var11[var12];
            var13 = var13.bind(var8)(var12);
            var12 = var13.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var12.bind(var13)(var1);
            var10 = var6.bind(var10)(var1);
            var1 = 26;
            var6 = var11[var1];
            var13 = var5.bind(var8)(var6);
            var12 = var13.formatMobileMessageCountLabel;
            var6 = var3.id;
            var6 = var12.bind(var13)(var10, var6);
            var1 = var11[var1];
            var11 = var5.bind(var8)(var1);
            var5 = var11.formatMessageCountLabel;
            var1 = var3.id;
            var5 = var5.bind(var11)(var10, var1);
            if(!(var2 != var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 0;
            if(!(!(var10 > var1))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = {};
            var1['title'] = var7;
            var1['messageCountLabel'] = var6;
            var1['messageCountAccessibilityLabel'] = var5;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 27;
            var11 = var14[var10];
            var11 = var13.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10.HYtNyE;
            var10 = var11.bind(var12)(var10);
            var1['messagePreviewString'] = var10;
            var10 = false;
            var1['archived'] = var10;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var3 = var3.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(!(var2 != var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var9.type;
            var2 = _closure1_slot27;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var3 = var9.type;
            var2 = _closure1_slot27;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            var2 = var9.blocked;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = var9.ignored;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var2 = {};
            var2['title'] = var7;
            var2['messageCountLabel'] = var6;
            var2['messageCountAccessibilityLabel'] = var5;
            var3 = {};
            var10 = _closure1_slot26;
            var10 = var10.LOADED;
            var3['state'] = var10;
            var11 = _closure1_slot34;
            var10 = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var10['message'] = var9;
            var12 = arg2;
            var10['roleStyle'] = var12;
            var12 = arg5;
            var10['options'] = var12;
            var10 = var11.bind(var8)(var10);
            var3['message'] = var10;
            var2['referencedMessage'] = var3;
            _fun0001_ip = 20; continue _fun0001;
case 17:
            var3 = {};
            var3['title'] = var7;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var9 = var9.blocked;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 27;
            var11 = var14[var10];
            var11 = var13.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var8)(var10);
            var10 = var10.t;
            if(var9) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = var10.G7p6v/;
            var9 = var11.bind(var12)(var9);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var10 = var10.XAkOo2;
            var9 = var11.bind(var12)(var10);
case 23:
            var3['messagePreviewString'] = var9;
            var9 = false;
            var3['archived'] = var9;
            var2 = var3;
case 20:
            _fun0001_ip = 24; continue _fun0001;
case 13:
            var3 = {};
            var3['title'] = var7;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 27;
            var10 = var13[var9];
            var10 = var12.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var8)(var9);
            var9 = var9.t;
            var9 = var9.ZTo4HS;
            var9 = var10.bind(var11)(var9);
            var3['messagePreviewString'] = var9;
            var9 = false;
            var3['archived'] = var9;
            var2 = var3;
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 12:
            var3 = {};
            var3['title'] = var7;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 27;
            var7 = var9[var5];
            var7 = var6.bind(var8)(var7);
            var10 = var7.intl;
            var7 = var10.string;
            var5 = var9[var5];
            var5 = var6.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.ZTo4HS;
            var5 = var7.bind(var10)(var5);
            var3['messagePreviewString'] = var5;
            var5 = true;
            var3['archived'] = var5;
            var5 = 28;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getAssetUriForEmbed;
            var7 = _closure1_slot1;
            var4 = 29;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var5.bind(var6)(var4);
            var3['archivedIconUrl'] = var4;
            var2 = var3;
case 25:
            var1 = var2;
case 9:
            return var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function getForumPostActions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.id;
            var1 = var3.channel_id;
            if(!(var4 === var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var1 = var2.getGuildId;
            var5 = var1.bind(var2)();
            var10 = null;
            if(!(var10 != var5)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var4 = _closure1_slot10;
            var1 = var4.isLurking;
            var1 = var1.bind(var4)(var5);
            if(!var1) { _fun0002_ip = 28; continue _fun0002 }
case 26:
            var1 = undefined;
            return var1;
case 28:
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
            if(var6) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var9 = _closure1_slot18;
            var8 = var9.getChannel;
            var4 = var2.parent_id;
            var4 = var8.bind(var9)(var4);
            var8 = var10 == var4;
            var11 = undefined;
            if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var11 = var4.defaultReactionEmoji;
case 32:
            var8 = var10 == var11;
            var4 = undefined;
            if(var8) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var4 = var11.emojiId;
case 34:
            var4 = var10 != var4;
            var10 = null;
            if(!var4) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var9 = _closure1_slot7;
            var8 = var9.getUsableCustomEmojiById;
            var4 = var11.emojiId;
            var10 = var8.bind(var9)(var4);
case 36:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 30;
            var4 = var9[var4];
            var9 = var8.bind(var3)(var4);
            var8 = var9.createDefaultReaction;
            var4 = {};
            var4['defaultReactionEmoji'] = var11;
            var4['customGuildEmoji'] = var10;
            var5 = var8.bind(var9)(var4);
case 30:
            var8 = _closure1_slot11;
            var4 = var8.shouldDisplayPrompt;
            var2 = var2.id;
            var4 = var4.bind(var8)(var2);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 30;
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
    var _closure1_slot33 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var96 = var1.messageForward;
            var13 = var1.roleStyle;
            var12 = var1.isFirst;
            var11 = var1.isEditing;
            var10 = var1.canShowImages;
            var9 = var1.isSystemDM;
            var6 = var1.isInlineReplyPreview;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var6 = false;
case 38:
            var7 = var1.options;
            var66 = var1.pushFeedbackType;
            var50 = var1.renderContentOnly;
            var31 = var1.showContentInventoryEntryFallbackEmbed;
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
            var79 = var7.constrainedWidth;
            var91 = var7.ignoreMentioned;
            var78 = var7.animateEmoji;
            var38 = var7.animatingStickerMessageId;
            var52 = var7.gifAutoPlay;
            _closure2_slot1 = var52;
            var27 = var7.timestampHourCycle;
            var44 = var7.renderCodedLinks;
            var47 = var7.renderGiftCode;
            var46 = var7.renderActivityInstanceEmbed;
            var45 = var7.renderActivityInviteEmbed;
            var53 = var7.renderComponents;
            var15 = var7.renderThreadEmbeds;
            var20 = var7.renderReplies;
            var29 = var7.renderCommunicationDisabled;
            var41 = var7.renderAttachments;
            var54 = var7.renderExecutedCommands;
            var4 = var7.renderPolls;
            var1 = var7.renderSharedClientTheme;
            var33 = var7.renderForumPostActions;
            var19 = var7.forcedTheme;
            var35 = var7.ignoreEmbedDescriptionCache;
            var36 = var7.forceHideSimpleEmbedContent;
            var58 = var7.shouldObscureSpoiler;
            _closure2_slot2 = var58;
            var60 = var7.shouldDisableInteractiveComponents;
            _closure2_slot3 = var60;
            var22 = var7.useAlternateEmbedColors;
            var17 = null;
            if(!(var17 == var19)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = _closure1_slot16;
            var19 = var3.theme;
case 40:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 34;
            var8 = var24[var8];
            var8 = var23.bind(var5)(var8);
            var26 = var8.bind(var5)(var19, var22);
            _closure2_slot4 = var26;
            var8 = true;
            var59 = var8 === var10;
            _closure2_slot5 = var59;
            var28 = var59;
            if(!var59) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var28 = var21;
case 42:
            if(!var28) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var22 = var2.type;
            var21 = _closure1_slot27;
            var21 = var21.CUSTOM_GIFT;
            var28 = var22 !== var21;
case 44:
            var34 = var59;
            if(!var59) { _fun0003_ip = 46; continue _fun0003 }
case 16:
            var34 = var18;
case 46:
            var37 = var59;
            if(!var37) { _fun0003_ip = 47; continue _fun0003 }
case 18:
            var37 = var16;
case 47:
            var21 = _closure1_slot18;
            var18 = var21.getChannel;
            var16 = var2.getChannelId;
            var16 = var16.bind(var2)();
            var21 = var18.bind(var21)(var16);
            var22 = _closure1_slot18;
            var18 = var22.getChannel;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 25;
            var16 = var24[var16];
            var24 = var23.bind(var5)(var16);
            var23 = var24.castMessageIdAsChannelId;
            var16 = var2.id;
            var16 = var23.bind(var24)(var16);
            var16 = var18.bind(var22)(var16);
            var22 = var17 == var21;
            var18 = undefined;
            if(var22) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var22 = var21.getGuildId;
            var18 = var22.bind(var21)();
case 48:
            _closure2_slot6 = var18;
            var22 = var2.author;
            var24 = var22.id;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 35;
            var22 = var25[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getHasEnhancedRoleColors;
            var73 = var22.bind(var23)(var18, var24);
            var62 = var18;
            if(!(var17 == var96)) { _fun0003_ip = 21; continue _fun0003 }
case 50:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 36;
            var18 = var23[var18];
            var22 = var22.bind(var5)(var18);
            var18 = var22.maybeCreateSingleForwardForMessage;
            var96 = var18.bind(var22)(var2);
case 21:
            var39 = var2;
            if(!(var17 != var96)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var18 = var96.messageSnapshot;
            var39 = var18.message;
case 51:
            var18 = new Array(0);
            if(!var14) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 37;
            var14 = var23[var14];
            var22 = var22.bind(var5)(var14);
            var14 = {};
            var23 = var2.reactions;
            var14['reactions'] = var23;
            var14['animateEmoji'] = var78;
            var18 = var22.bind(var5)(var14);
case 53:
            var23 = var2.type;
            var14 = _closure1_slot27;
            var22 = var14.THREAD_STARTER_MESSAGE;
            var14 = null;
            if(!(var23 === var22)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var24 = _closure1_slot12;
            var23 = var24.getMessageByReference;
            var22 = var2.messageReference;
            var23 = var23.bind(var24)(var22);
            var25 = var23.state;
            var22 = _closure1_slot13;
            var24 = var22.LOADED;
            var22 = null;
            if(!(var25 === var24)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var22 = var23.message;
case 57:
            var14 = var22;
case 55:
            if(!(var17 == var14)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 38;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.bind(var5)(var2);
            if(var22) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var67 = !var12;
            if(var67) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var67 = var50;
case 63:
            var70 = var2.author;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 40;
            var22 = var24[var22];
            var24 = var23.bind(var5)(var22);
            var23 = var24.isMessageNewerThanImprovedMarkdownEpoch;
            var25 = var2.editedTimestamp;
            if(!(var17 == var25)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var25 = var2.timestamp;
case 65:
            var22 = var25.valueOf;
            var22 = var22.bind(var25)();
            var32 = var23.bind(var24)(var22);
            var22 = var39.content;
            if(!(var17 != var22)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var23 = var39.content;
            var22 = '';
            if(!(var22 === var23)) { _fun0003_ip = 69; continue _fun0003 }
case 67:
            var22 = {'content': null, 'hasSpoilerEmbeds': false, 'hasBailedAst': false};
            var22['content'] = var5;
            _fun0003_ip = 70; continue _fun0003;
case 69:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 41;
            var23 = var25[var23];
            var25 = var24.bind(var5)(var23);
            var24 = var25.parseMessageMarkup;
            if(var36) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var23 = var28;
            if(!var28) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var23 = var34;
case 73:
            var36 = var23;
case 71:
            var23 = var17 != var16;
            if(!var23) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var40 = var2.isFirstMessageInForumPost;
            var23 = var40.bind(var2)(var16);
case 75:
            r106 = var25;
            r105 = var2;
            r104 = var39;
            r103 = var36;
            r102 = var6;
            r101 = var23;
            r100 = var32;
            var100 = var32;
            var22 = r106[var24](r105, r104, r103, r102, r101, r100, var100, var99);
case 70:
            var24 = var22.content;
            var36 = var22.hasSpoilerEmbeds;
            var22 = var22.hasBailedAst;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var40 = 42;
            var40 = var23[var40];
            var42 = var25.bind(var5)(var40);
            var40 = var42.getEnabledHarmTypesForMessage;
            var57 = var40.bind(var42)(var2);
            _closure2_slot7 = var57;
            var40 = 43;
            var40 = var23[var40];
            var42 = var25.bind(var5)(var40);
            var40 = var42.shouldAgeVerifyForExplicitMedia;
            var56 = var40.bind(var42)();
            _closure2_slot8 = var56;
            var40 = 44;
            var23 = var23[var40];
            var23 = var25.bind(var5)(var23);
            var25 = var23.ViewImageDescriptions;
            var23 = var25.getSetting;
            var55 = var23.bind(var25)();
            _closure2_slot9 = var55;
            if(!var28) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var28 = !var22;
case 77:
            var23 = _closure1_slot9;
            var22 = var23.getInteraction;
            var61 = var22.bind(var23)(var2);
            _closure2_slot10 = var61;
            var23 = undefined;
            if(!var28) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var25 = _closure1_slot1;
            var42 = _closure1_slot2;
            var22 = 45;
            var22 = var42[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var42 = var39.embeds;
            var22['embeds'] = var42;
            var42 = var2.channel_id;
            var22['channelId'] = var42;
            var22['gifAutoPlay'] = var52;
            var22['hasSpoilerEmbeds'] = var36;
            var22['ignoreEmbedDescriptionCache'] = var35;
            var22['shouldInlineEmbedMedia'] = var34;
            var22['colors'] = var26;
            var22['showListsAndHeaders'] = var32;
            var22['showMaskedLinks'] = var32;
            var32 = var26.embedBackgroundColor;
            var22['themedBackgroundColor'] = var32;
            var22['enabledContentHarmTypeFlags'] = var57;
            var22['shouldAgeVerify'] = var56;
            var32 = var2.author;
            var32 = var32.bot;
            var22['authorIsBot'] = var32;
            var22['showContentInventoryEntryFallbackEmbed'] = var31;
            var30 = function transformComponents(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 46;
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
            var22['transformComponents'] = var30;
            var23 = var25.bind(var5)(var22);
case 79:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var22 = 47;
            var22 = var30[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var22['message'] = var2;
            var22['isSystemDM'] = var9;
            var22['channel'] = var21;
            var22['colors'] = var26;
            var22 = var25.bind(var5)(var22);
            var89 = var22.tagText;
            var88 = var22.tagAccessibilityLabel;
            var87 = var22.tagVerified;
            var86 = var22.tagTextColor;
            var85 = var22.tagBackgroundColor;
            var84 = var22.tagType;
            var83 = var22.tagIconUrl;
            var82 = var22.opTagText;
            var81 = var22.opTagTextColor;
            var80 = var22.opTagBackgroundColor;
            var30 = _closure1_slot22;
            var25 = var30.getUploaderFileForMessageId;
            var22 = var2.id;
            var25 = var25.bind(var30)(var22);
            var36 = var17 != var25;
            var30 = var2.state;
            var22 = _closure1_slot28;
            var22 = var22.SEND_FAILED;
            var22 = var30 !== var22;
            if(var22) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var30 = var2.isCommandType;
            var22 = var30.bind(var2)();
case 81:
            var30 = var23;
            if(var22) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var22 = var23;
            if(!(var17 == var23)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var22 = new Array(0);
case 85:
            var31 = var22.push;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var23 = 48;
            var23 = var34[var23];
            var32 = var32.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var25;
            var23['useAttachmentUploadPreview'] = var36;
            var23['colors'] = var26;
            var23 = var32.bind(var5)(var23);
            var23 = var31.bind(var22)(var23);
            var30 = var22;
case 83:
            var31 = _closure1_slot8;
            var23 = var31.getMessage;
            var22 = var2.id;
            var23 = var23.bind(var31)(var22);
            var49 = var30;
            if(!(var17 != var23)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var22 = var30;
            if(!(var17 == var30)) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var22 = new Array(0);
case 89:
            var34 = var23.errorMessage;
            var30 = var22.push;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 48;
            var23 = var32[var23];
            var32 = var31.bind(var5)(var23);
            var31 = var32.createAutomodBlockedMessageEmbed;
            var23 = {};
            var23['errorMessage'] = var34;
            var23['colors'] = var26;
            var23 = var31.bind(var32)(var23);
            var23 = var30.bind(var22)(var23);
            var49 = var22;
case 87:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var32 = 49;
            var22 = var30[var32];
            var34 = var23.bind(var5)(var22);
            var31 = var34.getUserAuthor;
            var22 = var2.author;
            var22 = var31.bind(var34)(var22, var21);
            var48 = var22.guildMemberAvatar;
            var34 = var22.guildMemberAvatarDecoration;
            var31 = var22.iconRoleId;
            var22 = 50;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.ensureAvatarSource;
            var22 = var2.isInteractionPlaceholder;
            var22 = var22.bind(var2)();
            if(!var22) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var22 = var2.author;
            var22 = var22.avatar;
            if(!(var17 == var22)) { _fun0003_ip = 91; continue _fun0003 }
case 93:
            if(!(var17 == var48)) { _fun0003_ip = 91; continue _fun0003 }
case 94:
            var35 = var2.application;
            var42 = var17 == var35;
            var22 = undefined;
            if(var42) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var22 = var35.icon;
case 95:
            if(!(var17 == var22)) { _fun0003_ip = 97; continue _fun0003 }
case 91:
            if(!(var17 != var48)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            if(!(var17 == var62)) { _fun0003_ip = 100; continue _fun0003 }
case 98:
            var22 = var70.getAvatarSource;
            var22 = var22.bind(var70)(var5);
            _fun0003_ip = 101; continue _fun0003;
case 100:
            var42 = _closure1_slot1;
            var43 = _closure1_slot2;
            var35 = 51;
            var35 = var43[var35];
            var43 = var42.bind(var5)(var35);
            var42 = var43.getGuildMemberAvatarSource;
            var35 = {};
            var51 = var70.id;
            var35['userId'] = var51;
            var35['avatar'] = var48;
            var35['guildId'] = var62;
            var22 = var42.bind(var43)(var35, var70);
case 101:
            _fun0003_ip = 102; continue _fun0003;
case 97:
            var42 = _closure1_slot1;
            var43 = _closure1_slot2;
            var35 = 51;
            var35 = var43[var35];
            var43 = var42.bind(var5)(var35);
            var42 = var43.getApplicationIconSource;
            var35 = {};
            var48 = var2.application;
            var48 = var48.id;
            var35['id'] = var48;
            var48 = var2.application;
            var48 = var48.icon;
            var35['icon'] = var48;
            var48 = var2.application;
            var48 = var48.bot;
            var35['bot'] = var48;
            var22 = var42.bind(var43)(var35);
case 102:
            var77 = var23.bind(var30)(var22);
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 51;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.getAvatarDecorationURL;
            var22 = {};
            if(!(var17 == var34)) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var34 = var70.avatarDecoration;
case 103:
            var22['avatarDecoration'] = var34;
            var43 = _closure1_slot0;
            var48 = _closure1_slot2;
            var34 = 52;
            var34 = var48[var34];
            var42 = var43.bind(var5)(var34);
            var35 = var42.getDecorationSizeForAvatarSize;
            var34 = 53;
            var34 = var48[var34];
            var34 = var43.bind(var5)(var34);
            var34 = var34.AvatarSizes;
            var34 = var34.NORMAL;
            var34 = var35.bind(var42)(var34);
            var22['size'] = var34;
            var76 = var23.bind(var30)(var22);
            var22 = var17 != var31;
            var69 = undefined;
            if(!var22) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var22 = var17 != var62;
            var69 = undefined;
            if(!var22) { _fun0003_ip = 105; continue _fun0003 }
case 107:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 54;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.getRoleIcon;
            var22 = {};
            var22['guildId'] = var62;
            var22['roleId'] = var31;
            var31 = 18;
            var22['size'] = var31;
            var69 = var23.bind(var30)(var22);
case 105:
            var23 = var2.hasFlag;
            var22 = _closure1_slot29;
            var22 = var22.SOURCE_MESSAGE_DELETED;
            var22 = var23.bind(var2)(var22);
            if(!var22) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var22 = 27;
            var23 = var34[var22];
            var23 = var31.bind(var5)(var23);
            var30 = var23.intl;
            var23 = var30.string;
            var22 = var34[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.JOtgSw;
            var24 = var23.bind(var30)(var22);
case 108:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getMessageAuthor;
            var22 = var22.bind(var23)(var2);
            var74 = var22.nick;
            var72 = var22.colorString;
            var75 = var22.colorStrings;
            var23 = var2.type;
            var22 = _closure1_slot27;
            var22 = var22.INTERACTION_PREMIUM_UPSELL;
            if(!(var23 === var22)) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var23 = _closure1_slot0;
            var34 = _closure1_slot2;
            var22 = 27;
            var30 = var34[var22];
            var30 = var23.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var22 = var34[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.u4A+xK;
            var22 = {};
            var22['appName'] = var74;
            var24 = var30.bind(var31)(var23, var22);
case 110:
            var23 = var2.type;
            var22 = _closure1_slot27;
            var22 = var22.REPLY;
            var97 = undefined;
            if(!(var23 === var22)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var97 = undefined;
            if(!var20) { _fun0003_ip = 112; continue _fun0003 }
case 114:
            var23 = _closure1_slot12;
            var22 = var23.getMessageByReference;
            var20 = var2.messageReference;
            var20 = var22.bind(var23)(var20);
            var23 = var20.state;
            var22 = _closure1_slot13;
            var22 = var22.LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var22 = _closure1_slot13;
            var22 = var22.NOT_LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var22 = _closure1_slot13;
            var22 = var22.DELETED;
            if(!(var22 !== var23)) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 56;
            var22 = var30[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.assertNever;
            var22 = var22.bind(var23)(var20);
            var97 = undefined;
            _fun0003_ip = 112; continue _fun0003;
case 119:
            var22 = {};
            var23 = _closure1_slot26;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var23 = 27;
            var30 = var35[var23];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var23 = var35[var23];
            var23 = var34.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.mE3KJN;
            var23 = var30.bind(var31)(var23);
            var22['content'] = var23;
            var97 = var22;
            _fun0003_ip = 112; continue _fun0003;
case 117:
            var22 = {};
            var23 = _closure1_slot26;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var23 = 27;
            var30 = var35[var23];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var23 = var35[var23];
            var23 = var34.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23["1i+hMi"];
            var23 = var30.bind(var31)(var23);
            var22['content'] = var23;
            var97 = var22;
            _fun0003_ip = 112; continue _fun0003;
case 115:
            var20 = var20.message;
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 36;
            var22 = var30[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeCreateSingleForwardForMessage;
            var30 = var22.bind(var23)(var20);
            var23 = _closure1_slot21;
            var22 = var23.isBlockedForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var23 = _closure1_slot21;
            var22 = var23.isIgnoredForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var23 = _closure1_slot34;
            var22 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var22['message'] = var20;
            var22['messageForward'] = var30;
            var22['roleStyle'] = var13;
            var35 = false;
            var31 = {};
            r105 = var31;
            r104 = var7;
            var34 = copyDataProperties(r105, r104);
            var34 = 'renderReplies';
            var31[33] = var35;
            var22['options'] = var31;
            var23 = var23.bind(var5)(var22);
            if(!(var17 != var23)) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var22 = 'username';
            var22 = var22 in var23;
            if(!var22) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var31 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var31 = var31.bind(var5)(var22);
            var22 = var31.getMessageAuthor;
            var22 = var22.bind(var31)(var20);
            var31 = var22.nick;
            var32 = var22.colorString;
            if(!(var17 == var31)) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var22 = var20.author;
            var31 = var22.username;
case 129:
            var34 = var17 != var31;
            var22 = undefined;
            if(!var34) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var22 = var31;
case 131:
            var23['username'] = var22;
            if(var67) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var31 = _closure1_slot3;
            var34 = var17 != var32;
            var22 = undefined;
            if(!var34) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var22 = var32;
case 135:
            var22 = var31.bind(var5)(var22);
            if(!(var17 == var22)) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            var22 = var23.colorString;
case 137:
            _fun0003_ip = 139; continue _fun0003;
case 133:
            var22 = var23.colorString;
case 139:
            var23['colorString'] = var22;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 55;
            var22 = var32[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.bind(var5)(var2, var20);
            if(!var22) { _fun0003_ip = 127; continue _fun0003 }
case 140:
            var31 = var23.username;
            var22 = '@';
            var22 = var22 + var31;
            var23['username'] = var22;
case 127:
            var31 = var17 == var30;
            var22 = undefined;
            if(var31) { _fun0003_ip = 141; continue _fun0003 }
case 142:
            var30 = var30.messageSnapshot;
            var22 = var30.message;
case 141:
            var32 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var32 = var22;
case 143:
            var22 = 'stickers';
            var22 = var22 in var32;
            if(var22) { _fun0003_ip = 145; continue _fun0003 }
case 146:
            var22 = new Array(0);
            _fun0003_ip = 147; continue _fun0003;
case 145:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 31;
            var30 = var34[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getMessageStickers;
            var22 = var30.bind(var31)(var32);
case 147:
            var22 = var22.length;
            var30 = 0;
            if(!(!(var22 > var30))) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var22 = 'interaction';
            var22 = var22 in var32;
            if(!var22) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var22 = var32.interaction;
            if(!(var17 != var22)) { _fun0003_ip = 150; continue _fun0003 }
case 152:
            var31 = var32.content;
            var22 = '';
            if(!(var22 !== var31)) { _fun0003_ip = 153; continue _fun0003 }
case 150:
            var31 = _closure1_slot0;
            var22 = _closure1_slot2;
            var34 = 32;
            var22 = var22[var34];
            var42 = var31.bind(var5)(var22);
            var35 = var42.hasFlag;
            var31 = var32.flags;
            var22 = _closure1_slot29;
            var22 = var22.IS_VOICE_MESSAGE;
            var22 = var35.bind(var42)(var31, var22);
            if(var22) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var31 = var32.type;
            var22 = _closure1_slot27;
            var22 = var22.POLL_RESULT;
            if(!(var31 !== var22)) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var31 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var34];
            var35 = var31.bind(var5)(var22);
            var34 = var35.hasFlag;
            var31 = var32.flags;
            var22 = _closure1_slot29;
            var22 = var22.IS_COMPONENTS_V2;
            var22 = var34.bind(var35)(var31, var22);
            if(var22) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var22 = var32.embeds;
            var22 = var22.length;
            if(!(!(var22 > var30))) { _fun0003_ip = 160; continue _fun0003 }
case 161:
            var22 = var32.attachments;
            var22 = var22.length;
            if(!(!(var22 > var30))) { _fun0003_ip = 160; continue _fun0003 }
case 162:
            var31 = var32.content;
            var30 = '';
            var22 = null;
            if(!(var30 === var31)) { _fun0003_ip = 163; continue _fun0003 }
case 160:
            var35 = _closure1_slot0;
            var42 = _closure1_slot2;
            var30 = 27;
            var31 = var42[var30];
            var31 = var35.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var42[var30];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.JAKsM8;
            var22 = var31.bind(var34)(var30);
case 163:
            _fun0003_ip = 164; continue _fun0003;
case 158:
            var35 = _closure1_slot0;
            var42 = _closure1_slot2;
            var30 = 27;
            var31 = var42[var30];
            var31 = var35.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var42[var30];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.Xxm5i3;
            var22 = var31.bind(var34)(var30);
case 164:
            _fun0003_ip = 165; continue _fun0003;
case 156:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 33;
            var30 = var34[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getPollResultsReplyPreviewMobile;
            var22 = var30.bind(var31)(var32);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 154:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 27;
            var31 = var35[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var35[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["6bhHrc"];
            var22 = var31.bind(var32)(var30);
case 166:
            _fun0003_ip = 167; continue _fun0003;
case 153:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 27;
            var31 = var35[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var35[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["2v7kfl"];
            var22 = var31.bind(var32)(var30);
case 167:
            _fun0003_ip = 168; continue _fun0003;
case 148:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 27;
            var31 = var35[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var35[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["7K5Lma"];
            var22 = var31.bind(var32)(var30);
case 168:
            var30 = var20.type;
            var20 = _closure1_slot27;
            var20 = var20.POLL_RESULT;
            if(!(var30 === var20)) { _fun0003_ip = 169; continue _fun0003 }
case 170:
            var23['content'] = var22;
case 169:
            var20 = {};
            var30 = _closure1_slot26;
            var30 = var30.LOADED;
            var20['state'] = var30;
            var20['message'] = var23;
            var97 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 112; continue _fun0003 }
case 171:
            var20['systemContent'] = var22;
            var97 = var20;
            _fun0003_ip = 112; continue _fun0003;
case 125:
            var20 = {};
            var22 = _closure1_slot26;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 27;
            var23 = var32[var22];
            var23 = var31.bind(var5)(var23);
            var30 = var23.intl;
            var23 = var30.string;
            var22 = var32[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22["1i+hMi"];
            var22 = var23.bind(var30)(var22);
            var20['content'] = var22;
            var97 = var20;
            _fun0003_ip = 112; continue _fun0003;
case 123:
            var20 = {};
            var22 = _closure1_slot26;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 27;
            var23 = var32[var22];
            var23 = var31.bind(var5)(var23);
            var30 = var23.intl;
            var23 = var30.string;
            var22 = var32[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.G7p6v/;
            var22 = var23.bind(var30)(var22);
            var20['content'] = var22;
            var97 = var20;
            _fun0003_ip = 112; continue _fun0003;
case 121:
            var20 = {};
            var22 = _closure1_slot26;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 27;
            var23 = var32[var22];
            var23 = var31.bind(var5)(var23);
            var30 = var23.intl;
            var23 = var30.string;
            var22 = var32[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.XAkOo2;
            var22 = var23.bind(var30)(var22);
            var20['content'] = var22;
            var97 = var20;
case 112:
            var94 = undefined;
            if(!var15) { _fun0003_ip = 172; continue _fun0003 }
case 173:
            var15 = _closure1_slot32;
            r106 = undefined;
            r105 = var2;
            r104 = var13;
            r103 = var6;
            r102 = var16;
            r101 = var7;
            var94 = r106[var15](r105, r104, r103, r102, r101, r100);
case 172:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 57;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.createInteractionStatus;
            var51 = var15.bind(var20)(var2, var61);
            var20 = var17 != var62;
            var15 = null;
            if(!var20) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var23 = _closure1_slot19;
            var22 = var23.getMember;
            var20 = var70.id;
            var15 = var22.bind(var23)(var62, var20);
case 174:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 58;
            var20 = var23[var20];
            var22 = var22.bind(var5)(var20);
            var20 = var22.isMemberCommunicationDisabled;
            var34 = var20.bind(var22)(var15);
            var20 = _closure1_slot4;
            var32 = var20.useReducedMotion;
            var20 = _closure1_slot4;
            var64 = var20.alwaysShowLinkDecorations;
            var20 = var17 == var21;
            var23 = var15;
            var15 = undefined;
            if(var20) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var15 = var21.parent_id;
case 176:
            var30 = var21;
            if(!(var17 != var15)) { _fun0003_ip = 178; continue _fun0003 }
case 179:
            var30 = var21;
            if(!(var17 != var21)) { _fun0003_ip = 178; continue _fun0003 }
case 180:
            var15 = var21.isThread;
            var15 = var15.bind(var21)();
            var30 = var21;
            if(!var15) { _fun0003_ip = 178; continue _fun0003 }
case 181:
            var22 = _closure1_slot18;
            var20 = var22.getChannel;
            var15 = var21.parent_id;
            var30 = var20.bind(var22)(var15);
case 178:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 59;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.getVisibleConnectionsRole;
            var15 = {};
            var15['guildMember'] = var23;
            var15['channel'] = var30;
            var15['onlyChannelConnectionRoles'] = var8;
            var71 = var20.bind(var22)(var15);
            var15 = var39.attachments;
            var15 = var15.length;
            var48 = 0;
            var42 = var48 !== var15;
            var15 = var39.embeds;
            var15 = var15.length;
            var43 = var48 !== var15;
            var15 = var36;
            if(!var36) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var20 = var2.attachments;
            var20 = var20.length;
            var15 = var48 === var20;
case 182:
            if(!var15) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            var15 = var17 != var25;
case 184:
            var35 = new Array(0);
            if(var15) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            if(!var41) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            var22 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 61;
            var20 = var30[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var30 = var39.attachments;
            var20['attachments'] = var30;
            var63 = _closure1_slot22;
            var31 = var63.getUploadAttachments;
            var30 = var2.nonce;
            var30 = var31.bind(var63)(var30);
            var20['uploadAttachments'] = var30;
            var20['shouldInlineAttachmentMedia'] = var37;
            var20['gifAutoPlay'] = var52;
            var20['viewImageDescriptions'] = var55;
            var20['useReducedMotion'] = var32;
            var20['shouldObscureSpoiler'] = var58;
            var30 = var26.embedBackgroundColor;
            var20['themedBackgroundColor'] = var30;
            var20['enabledContentHarmTypeFlags'] = var57;
            var20['shouldAgeVerify'] = var56;
            var20['colors'] = var26;
            var35 = var22.bind(var5)(var20);
            _fun0003_ip = 188; continue _fun0003;
case 186:
            var22 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 60;
            var20 = var30[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var20['uploaderFile'] = var25;
            var30 = var2.state;
            var25 = _closure1_slot28;
            var25 = var25.SEND_FAILED;
            var25 = var30 === var25;
            var20['isFailedMessage'] = var25;
            var20['shouldInlineAttachmentMedia'] = var37;
            var35 = var22.bind(var5)(var20);
case 188:
            if(!var15) { _fun0003_ip = 190; continue _fun0003 }
case 191:
            var22 = var2.state;
            var20 = _closure1_slot28;
            var20 = var20.SEND_FAILED;
            if(!(var22 === var20)) { _fun0003_ip = 192; continue _fun0003 }
case 190:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 62;
            var20 = var25[var20];
            var25 = var22.bind(var5)(var20);
            var22 = var25.calendarFormat;
            var20 = var2.timestamp;
            var68 = var22.bind(var25)(var20, var8, var27);
            _fun0003_ip = 193; continue _fun0003;
case 192:
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 27;
            var22 = var30[var20];
            var22 = var27.bind(var5)(var22);
            var25 = var22.intl;
            var22 = var25.string;
            var20 = var30[var20];
            var20 = var27.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.yXY+5J;
            var68 = var22.bind(var25)(var20);
case 193:
            if(!var15) { _fun0003_ip = 194; continue _fun0003 }
case 195:
            var20 = var2.state;
            var15 = _closure1_slot28;
            var15 = var15.SEND_FAILED;
            if(!(var20 === var15)) { _fun0003_ip = 196; continue _fun0003 }
case 194:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 62;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.accessibilityLabelCalendarFormat;
            var15 = var2.timestamp;
            var65 = var20.bind(var22)(var15);
            _fun0003_ip = 197; continue _fun0003;
case 196:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 27;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.yXY+5J;
            var65 = var20.bind(var22)(var15);
case 197:
            var20 = _closure1_slot17;
            var15 = var20.getId;
            var31 = var15.bind(var20)();
            var15 = var2.isUnsupported;
            var63 = var24;
            if(!var15) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 27;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.sWi5EU;
            var63 = var20.bind(var22)(var15);
case 198:
            var15 = var2.isPoll;
            var15 = var15.bind(var2)();
            var15 = !var15;
            if(var15) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var20 = !var6;
            if(!var20) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var20 = var4;
case 202:
            var15 = var20;
case 200:
            if(var15) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var22 = '';
            var20 = var22 !== var24;
case 206:
            var15 = var20;
case 204:
            if(var15) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 33;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.getPollReplyPreview;
            var63 = var15.bind(var20)(var2);
case 208:
            var30 = undefined;
            if(!var4) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var4 = 63;
            var4 = var20[var4];
            var15 = var15.bind(var5)(var4);
            var4 = {};
            var4['theme'] = var19;
            var4['animateEmoji'] = var78;
            var30 = var15.bind(var5)(var2, var5, var4);
case 210:
            var25 = undefined;
            if(!var1) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 64;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var25 = var1.bind(var4)(var2, var77, var74);
case 212:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var93 = 65;
            var1 = var1[var93];
            var20 = var4.bind(var5)(var1);
            var15 = var20.shouldDisplayGuildTag;
            var4 = var70.id;
            var22 = var17 != var62;
            var1 = undefined;
            if(!var22) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var1 = var62;
case 214:
            var1 = var15.bind(var20)(var4, var1);
            var24 = undefined;
            var22 = undefined;
            var20 = undefined;
            if(!var1) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var93];
            var15 = var4.bind(var5)(var1);
            var4 = var15.getUserPrimaryGuild;
            var1 = var70.primaryGuild;
            var27 = var4.bind(var15)(var1);
            var15 = var27.guildId;
            var4 = var27.tag;
            var1 = var27.guildId;
            var90 = var17 != var1;
            var1 = undefined;
            if(!var90) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var92 = _closure1_slot0;
            var90 = _closure1_slot2;
            var90 = var90[var93];
            var95 = var92.bind(var5)(var90);
            var93 = var95.getGuildTagBadgeUrl;
            var92 = var27.guildId;
            var90 = var27.badge;
            var27 = _closure1_slot31;
            var27 = var27.SIZE_12;
            var1 = var93.bind(var95)(var92, var90, var27);
case 218:
            var20 = var1;
            var24 = var15;
            var22 = var4;
case 216:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var93 = 32;
            var1 = var1[var93];
            var27 = var4.bind(var5)(var1);
            var15 = var27.hasFlag;
            var1 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var1 = var39;
case 220:
            var4 = var1.flags;
            var1 = _closure1_slot29;
            var1 = var1.IS_VOICE_MESSAGE;
            var27 = var15.bind(var27)(var4, var1);
            var15 = _closure1_slot5;
            var4 = var15.getApplication;
            var90 = var2.applicationId;
            var95 = var17 != var90;
            var92 = '';
            var1 = var92;
            if(!var95) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var1 = var90;
case 222:
            var1 = var4.bind(var15)(var1);
            var4 = var17 != var1;
            if(!var4) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var90 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var93];
            var95 = var90.bind(var5)(var15);
            var93 = var95.hasFlag;
            var90 = var2.flags;
            var15 = _closure1_slot29;
            var15 = var15.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var4 = var93.bind(var95)(var90, var15);
case 224:
            var15 = undefined;
            if(!var4) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var15 = var1.id;
case 226:
            var4 = _closure1_slot0;
            var90 = _closure1_slot2;
            var1 = 66;
            var1 = var90[var1];
            var90 = var4.bind(var5)(var1);
            var4 = var90.createVoiceChannelBadge;
            var1 = var2.author;
            var1 = var1.id;
            var4 = var4.bind(var90)(var1, var62);
            var1 = var17 != var39;
            var93 = undefined;
            if(!var1) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var90 = var39.hasFlag;
            var1 = _closure1_slot29;
            var1 = var1.IS_GUILD_OFFICIAL;
            var1 = var90.bind(var39)(var1);
            var93 = undefined;
            if(!var1) { _fun0003_ip = 228; continue _fun0003 }
case 230:
            var90 = _closure1_slot0;
            var95 = _closure1_slot2;
            var1 = 67;
            var1 = var95[var1];
            var98 = var90.bind(var5)(var1);
            var95 = var98.canRenderOfficialMessages;
            var90 = _closure1_slot20;
            var1 = var90.getGuild;
            var90 = var1.bind(var90)(var62);
            var1 = 'createMessageContent';
            var1 = var95.bind(var98)(var90, var21, var1);
            var93 = undefined;
            if(!var1) { _fun0003_ip = 228; continue _fun0003 }
case 231:
            var90 = _closure1_slot20;
            var1 = var90.getGuild;
            var90 = var1.bind(var90)(var62);
            var95 = var17 == var90;
            var1 = undefined;
            if(var95) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var1 = var90.officialMessageColor;
case 232:
            if(!(var17 == var1)) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var1 = _closure1_slot24;
case 234:
            var93 = var1;
case 228:
            var1 = var17 != var93;
            var90 = undefined;
            if(!var1) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var1 = _closure1_slot25;
            var90 = var93 | var1;
case 236:
            var1 = {};
            var95 = var2.id;
            var1['id'] = var95;
            var95 = var2.channel_id;
            var1['channelId'] = var95;
            var98 = var17 != var62;
            var95 = undefined;
            if(!var98) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var95 = var62;
case 238:
            var1['guildId'] = var95;
            var95 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var95 = var39;
case 240:
            var95 = var95.flags;
            var1['flags'] = var95;
            var95 = var2.type;
            var1['type'] = var95;
            var95 = var2.nonce;
            if(!(var17 != var95)) { _fun0003_ip = 242; continue _fun0003 }
case 243:
            var95 = var2.nonce;
            var98 = 'string';
            var95 = typeof var95;
            if(!(var98 === var95)) { _fun0003_ip = 244; continue _fun0003 }
case 242:
            var95 = var2.nonce;
            _fun0003_ip = 245; continue _fun0003;
case 244:
            var98 = global;
            var99 = var98.String;
            var98 = var2.nonce;
            var95 = var99.bind(var5)(var98);
case 245:
            var1['nonce'] = var95;
            var95 = var2.state;
            var1['state'] = var95;
            var1['reactions'] = var18;
            var95 = undefined;
            if(var50) { _fun0003_ip = 246; continue _fun0003 }
case 247:
            var95 = var97;
case 246:
            var1['referencedMessage'] = var95;
            var1['threadEmbed'] = var94;
            var95 = var17 != var96;
            var94 = undefined;
            if(!var95) { _fun0003_ip = 248; continue _fun0003 }
case 249:
            var95 = var96.getForwardInfo;
            var94 = var95.bind(var96)();
case 248:
            var1['forwardInfo'] = var94;
            var91 = !var91;
            if(!var91) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var91 = var2.mentioned;
case 250:
            var1['mentioned'] = var91;
            var91 = var2.isEdited;
            var94 = var91.bind(var2)();
            var91 = var92;
            if(!var94) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            var91 = var92;
            if(var50) { _fun0003_ip = 252; continue _fun0003 }
case 254:
            var96 = _closure1_slot0;
            var97 = _closure1_slot2;
            var92 = 27;
            var94 = var97[var92];
            var94 = var96.bind(var5)(var94);
            var95 = var94.intl;
            var94 = var95.string;
            var92 = var97[var92];
            var92 = var96.bind(var5)(var92);
            var92 = var92.t;
            var92 = var92.C8sXIM;
            var91 = var94.bind(var95)(var92);
case 252:
            var1['edited'] = var91;
            var91 = var26.editedColor;
            var1['editedColor'] = var91;
            var91 = var2.isUnsupported;
            if(var91) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            if(!(var17 == var93)) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var91 = var26.textColor;
            _fun0003_ip = 259; continue _fun0003;
case 257:
            var92 = 4278190080.0;
            var91 = var92 | var93;
case 259:
            _fun0003_ip = 260; continue _fun0003;
case 255:
            var91 = var26.unsupportedColor;
case 260:
            var1['textColor'] = var91;
            var1['officialMessageColor'] = var90;
            var90 = var26.linkColor;
            var1['linkColor'] = var90;
            var1['tagText'] = var89;
            var1['tagAccessibilityLabel'] = var88;
            var1['tagVerified'] = var87;
            var1['tagTextColor'] = var86;
            var1['tagBackgroundColor'] = var85;
            var1['tagType'] = var84;
            var1['tagIconUrl'] = var83;
            var1['opTagText'] = var82;
            var1['opTagTextColor'] = var81;
            var1['opTagBackgroundColor'] = var80;
            var1['constrainedWidth'] = var79;
            var1['gifAutoPlay'] = var52;
            var1['animateEmoji'] = var78;
            var78 = var74;
            if(!var67) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var78 = var70.username;
case 261:
            var79 = var17 != var78;
            var74 = undefined;
            if(!var79) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var74 = var78;
case 263:
            var1['username'] = var74;
            var74 = undefined;
            if(var67) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var74 = var77.uri;
case 265:
            var1['avatarURL'] = var74;
            var74 = null;
            if(var67) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var74 = var76;
case 267:
            var1['avatarDecorationURL'] = var74;
            var70 = var70.id;
            var1['authorId'] = var70;
            if(var67) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var70 = 'username';
            if(!(var70 === var13)) { _fun0003_ip = 269; continue _fun0003 }
case 271:
            var74 = _closure1_slot3;
            var76 = var17 != var72;
            var70 = undefined;
            if(!var76) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            var70 = var72;
case 272:
            var70 = var74.bind(var5)(var70);
            if(!(var17 == var70)) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var70 = var26.defaultUsernameColor;
case 274:
            _fun0003_ip = 276; continue _fun0003;
case 269:
            var70 = var26.defaultUsernameColor;
case 276:
            var1['usernameColor'] = var70;
            var70 = null;
            if(var67) { _fun0003_ip = 277; continue _fun0003 }
case 278:
            var76 = _closure1_slot3;
            var77 = var17 != var72;
            var74 = undefined;
            if(!var77) { _fun0003_ip = 279; continue _fun0003 }
case 280:
            var74 = var72;
case 279:
            var76 = var76.bind(var5)(var74);
            var77 = var17 != var76;
            var74 = null;
            if(!var77) { _fun0003_ip = 281; continue _fun0003 }
case 282:
            var74 = var76;
case 281:
            var70 = var74;
case 277:
            var1['roleColor'] = var70;
            var70 = null;
            if(!var73) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var70 = null;
            if(var67) { _fun0003_ip = 283; continue _fun0003 }
case 285:
            var74 = _closure1_slot0;
            var76 = _closure1_slot2;
            var73 = 68;
            var73 = var76[var73];
            var74 = var74.bind(var5)(var73);
            var73 = var74.processColorStrings;
            var70 = var73.bind(var74)(var75);
case 283:
            var1['roleColors'] = var70;
            var70 = 'dot';
            var70 = var70 === var13;
            var1['shouldShowRoleDot'] = var70;
            var70 = 'username';
            var70 = var70 === var13;
            var1['shouldShowRoleOnName'] = var70;
            var1['showLinkDecorations'] = var64;
            if(var67) { _fun0003_ip = 286; continue _fun0003 }
case 287:
            var70 = _closure1_slot3;
            var73 = var17 != var72;
            var64 = undefined;
            if(!var73) { _fun0003_ip = 288; continue _fun0003 }
case 289:
            var64 = var72;
case 288:
            var64 = var70.bind(var5)(var64);
            if(!(var17 == var64)) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var64 = var26.defaultUsernameColor;
case 290:
            _fun0003_ip = 292; continue _fun0003;
case 286:
            var64 = var26.defaultUsernameColor;
case 292:
            var1['colorString'] = var64;
            var64 = undefined;
            if(var67) { _fun0003_ip = 293; continue _fun0003 }
case 294:
            var64 = var69;
case 293:
            var1['roleIcon'] = var64;
            var69 = var17 != var71;
            var64 = undefined;
            if(!var69) { _fun0003_ip = 295; continue _fun0003 }
case 296:
            var70 = _closure1_slot0;
            var72 = _closure1_slot2;
            var69 = 69;
            var69 = var72[var69];
            var70 = var70.bind(var5)(var69);
            var69 = var70.createConnectionsRoleTag;
            var64 = var69.bind(var70)(var71);
case 295:
            var1['connectionsRoleTag'] = var64;
            var64 = undefined;
            if(var67) { _fun0003_ip = 297; continue _fun0003 }
case 298:
            var64 = var68;
case 297:
            var1['timestamp'] = var64;
            var64 = undefined;
            if(var67) { _fun0003_ip = 299; continue _fun0003 }
case 300:
            var64 = var26.timestampColor;
case 299:
            var1['timestampColor'] = var64;
            var64 = undefined;
            if(var67) { _fun0003_ip = 301; continue _fun0003 }
case 302:
            var64 = var65;
case 301:
            var1['timestampAccessibilityLabel'] = var64;
            var1['content'] = var63;
            var1['isEditing'] = var11;
            var1['renderContentOnly'] = var50;
            var63 = undefined;
            if(!(var5 !== var66)) { _fun0003_ip = 303; continue _fun0003 }
case 304:
            var65 = _closure1_slot0;
            var67 = _closure1_slot2;
            var64 = 70;
            var64 = var67[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createSurveyIndication;
            var63 = var64.bind(var65)(var2, var19, var66);
case 303:
            var1['surveyIndication'] = var63;
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var63 = 71;
            var63 = var65[var63];
            var64 = var64.bind(var5)(var63);
            var63 = var64.createEphemeralIndication;
            var63 = var63.bind(var64)(var2);
            var1['ephemeralIndication'] = var63;
            var1['interactionStatus'] = var51;
            var51 = undefined;
            if(!var54) { _fun0003_ip = 305; continue _fun0003 }
case 306:
            var63 = _closure1_slot0;
            var64 = _closure1_slot2;
            var54 = 72;
            var54 = var64[var54];
            var64 = var63.bind(var5)(var54);
            var63 = var64.createExecutedCommand;
            r101 = var26.defaultUsernameColor;
            r106 = var64;
            r105 = var2;
            r104 = var21;
            r103 = var13;
            r102 = var19;
            var51 = r106[var63](r105, r104, r103, r102, r101, r100);
case 305:
            var1['executedCommand'] = var51;
            var51 = var39.components;
            var51 = var51.length;
            var54 = var51 > var48;
            var51 = undefined;
            if(!var54) { _fun0003_ip = 307; continue _fun0003 }
case 308:
            var51 = undefined;
            if(!var53) { _fun0003_ip = 307; continue _fun0003 }
case 309:
            var54 = _closure1_slot1;
            var63 = _closure1_slot2;
            var53 = 46;
            var53 = var63[var53];
            var54 = var54.bind(var5)(var53);
            var53 = {};
            var53['message'] = var2;
            var53['guildId'] = var62;
            var53['interaction'] = var61;
            var53['shouldDisableInteractiveComponents'] = var60;
            var53['shouldShowMedia'] = var59;
            var53['shouldObscureSpoiler'] = var58;
            var53['enabledContentHarmTypeFlags'] = var57;
            var53['shouldAgeVerify'] = var56;
            var53['shouldShowMosaicMediaDescriptions'] = var55;
            var53['shouldAutoPlayGifs'] = var52;
            var53['colors'] = var26;
            var52 = var39.components;
            var51 = var54.bind(var5)(var53, var52);
case 307:
            var1['components'] = var51;
            var51 = 0;
            if(var50) { _fun0003_ip = 310; continue _fun0003 }
case 311:
            var51 = var26.feedbackColor;
case 310:
            var1['feedbackColor'] = var51;
            var48 = 0;
            if(var50) { _fun0003_ip = 312; continue _fun0003 }
case 313:
            var48 = var26.highlightColor;
case 312:
            var1['highlightColor'] = var48;
            var50 = var17 != var49;
            var48 = undefined;
            if(!var50) { _fun0003_ip = 314; continue _fun0003 }
case 315:
            var48 = var49;
case 314:
            var1['embeds'] = var48;
            if(var47) { _fun0003_ip = 316; continue _fun0003 }
case 317:
            var47 = new Array(0);
            _fun0003_ip = 318; continue _fun0003;
case 316:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 73;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createGiftCodeEmbed;
            var47 = var48.bind(var49)(var2, var19);
case 318:
            var1['giftCodes'] = var47;
            if(var44) { _fun0003_ip = 319; continue _fun0003 }
case 320:
            var44 = new Array(0);
            _fun0003_ip = 321; continue _fun0003;
case 319:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 74;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createCodedLinkEmbeds;
            var44 = var47.bind(var48)(var2, var39, var19);
case 321:
            var1['codedLinks'] = var44;
            var44 = undefined;
            if(!var46) { _fun0003_ip = 322; continue _fun0003 }
case 323:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 75;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityInstanceEmbed;
            var44 = var46.bind(var47)(var2);
case 322:
            var1['activityInstanceEmbed'] = var44;
            var44 = undefined;
            if(!var45) { _fun0003_ip = 324; continue _fun0003 }
case 325:
            var46 = _closure1_slot0;
            var47 = _closure1_slot2;
            var45 = 76;
            var45 = var47[var45];
            var46 = var46.bind(var5)(var45);
            var45 = var46.createActivityRichPresenceInviteEmbed;
            var44 = var45.bind(var46)(var2, var21);
case 324:
            var1['activityRichPresenceInviteEmbed'] = var44;
            if(!var37) { _fun0003_ip = 326; continue _fun0003 }
case 327:
            if(!var41) { _fun0003_ip = 328; continue _fun0003 }
case 329:
            if(var42) { _fun0003_ip = 330; continue _fun0003 }
case 331:
            var42 = var43;
case 330:
            var41 = var42;
case 328:
            if(var41) { _fun0003_ip = 332; continue _fun0003 }
case 333:
            var41 = var36;
case 332:
            var37 = var41;
case 326:
            var1['useAttachmentGridLayout'] = var37;
            var1['useAttachmentUploadPreview'] = var36;
            var1['attachments'] = var35;
            var41 = 1;
            var35 = var41;
            if(!var36) { _fun0003_ip = 334; continue _fun0003 }
case 335:
            var37 = var2.state;
            var36 = _closure1_slot28;
            var36 = var36.SEND_FAILED;
            var35 = var41;
            if(!(var37 === var36)) { _fun0003_ip = 334; continue _fun0003 }
case 336:
            var35 = 0.2;
case 334:
            var1['attachmentsOpacity'] = var35;
            var36 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 77;
            var35 = var37[var35];
            var36 = var36.bind(var5)(var35);
            var35 = {};
            var35['message'] = var39;
            var39 = _closure1_slot0;
            var37 = var37[var40];
            var37 = var39.bind(var5)(var37);
            var39 = var37.AnimateStickers;
            var37 = var39.getSetting;
            var37 = var37.bind(var39)();
            var35['animateStickersSetting'] = var37;
            var37 = var2.id;
            var37 = var37 === var38;
            var35['isUserInteracting'] = var37;
            var35 = var36.bind(var5)(var35);
            var1['stickers'] = var35;
            if(!var29) { _fun0003_ip = 337; continue _fun0003 }
case 338:
            var29 = var34;
case 337:
            var1['communicationDisabled'] = var29;
            var34 = var17 == var21;
            if(var34) { _fun0003_ip = 339; continue _fun0003 }
case 340:
            var29 = var21.isForumPost;
            var29 = var29.bind(var21)();
            var34 = !var29;
case 339:
            var29 = !var34;
            if(var34) { _fun0003_ip = 341; continue _fun0003 }
case 342:
            var35 = var2.id;
            var34 = var2.channel_id;
            var29 = var35 === var34;
case 341:
            var1['isFirstForumPostMessage'] = var29;
            var34 = var17 != var21;
            var29 = undefined;
            if(!var34) { _fun0003_ip = 343; continue _fun0003 }
case 344:
            var34 = var21.isForumPost;
            var34 = var34.bind(var21)();
            var29 = undefined;
            if(!var34) { _fun0003_ip = 343; continue _fun0003 }
case 345:
            var29 = undefined;
            if(!var33) { _fun0003_ip = 343; continue _fun0003 }
case 346:
            var33 = _closure1_slot33;
            var29 = var33.bind(var5)(var2, var21);
case 343:
            var1['postActions'] = var29;
            var29 = var2.author;
            var29 = var29.id;
            var29 = var29 === var31;
            var1['isCurrentUserMessageAuthor'] = var29;
            var29 = _closure1_slot6;
            var29 = var29.gradientPreset;
            var29 = var17 != var29;
            var1['usingGradientTheme'] = var29;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 28;
            var33 = var35[var29];
            var37 = var31.bind(var5)(var33);
            var36 = var37.getAssetUriForEmbed;
            var34 = _closure1_slot1;
            var33 = 78;
            var33 = var35[var33];
            var33 = var34.bind(var5)(var33);
            var33 = var36.bind(var37)(var33);
            var1['swipeToReplyIconUrl'] = var33;
            var29 = var35[var29];
            var33 = var31.bind(var5)(var29);
            var31 = var33.getAssetUriForEmbed;
            var29 = 79;
            var29 = var35[var29];
            var29 = var34.bind(var5)(var29);
            var29 = var31.bind(var33)(var29);
            var1['swipeToEditIconUrl'] = var29;
            if(var28) { _fun0003_ip = 347; continue _fun0003 }
case 348:
            var28 = new Array(0);
            _fun0003_ip = 349; continue _fun0003;
case 347:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 80;
            var29 = var33[var29];
            var31 = var31.bind(var5)(var29);
            var29 = var31.createPostPreviewEmbeds;
            var28 = var29.bind(var31)(var2, var32);
case 349:
            var1['postPreviewEmbeds'] = var28;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var31 = 27;
            var32 = var29[var31];
            var32 = var28.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var29[var31];
            var31 = var28.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31["2aXnfa"];
            var31 = var32.bind(var33)(var31);
            var1['obscureLearnMoreLabel'] = var31;
            var31 = 81;
            var31 = var29[var31];
            var32 = var28.bind(var5)(var31);
            var31 = var32.createSafetyPolicyNoticeEmbed;
            var31 = var31.bind(var32)(var2);
            var1['safetyPolicyNoticeEmbed'] = var31;
            var1['pollData'] = var30;
            var1['sharedClientTheme'] = var25;
            var25 = 82;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var25 = var30.createSafetySystemNotificationEmbed;
            var25 = var25.bind(var30)(var2);
            var1['safetySystemNotificationEmbed'] = var25;
            var25 = 83;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var29 = var30.createCtaButton;
            var28 = var2.id;
            var25 = var2.channel_id;
            var25 = var29.bind(var30)(var28, var25, var26);
            var1['ctaButton'] = var25;
            var25 = undefined;
            if(!var27) { _fun0003_ip = 350; continue _fun0003 }
case 351:
            var25 = var26.embedBackgroundColor;
case 350:
            var1['audioAttachmentBackgroundColor'] = var25;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 84;
            var25 = var27[var25];
            var26 = var26.bind(var5)(var25);
            var25 = var26.createMessageAccessibilityActions;
            var25 = var25.bind(var26)(var2, var21);
            var1['accessibilityActions'] = var25;
            var1['clanTagGuildId'] = var24;
            var1['clanTag'] = var22;
            var1['clanBadgeUrl'] = var20;
            var1['isFirst'] = var12;
            var1['gameApplicationId'] = var15;
            var15 = var17 == var21;
            var20 = undefined;
            if(var15) { _fun0003_ip = 352; continue _fun0003 }
case 353:
            var20 = var21.type;
case 352:
            var15 = _closure1_slot30;
            var15 = var15.GUILD_ANNOUNCEMENT;
            var15 = var20 === var15;
            var1['isAnnouncementChannel'] = var15;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 85;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.createDisplayNameStylesMobile;
            var15 = var2.author;
            var15 = var20.bind(var22)(var15, var23);
            var1['displayNameStyles'] = var15;
            var1['voiceChannelBadge'] = var4;
            return var1;
case 61:
            var4 = var2.type;
            var1 = _closure1_slot27;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 354; continue _fun0003 }
case 355:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 39;
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
            if(var20) { _fun0003_ip = 356; continue _fun0003 }
case 357:
            var20 = var21.isForumPost;
            var17 = var20.bind(var21)();
case 356:
            var1['isForumPost'] = var17;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 358; continue _fun0003;
case 354:
            var4 = {};
            var15 = _closure1_slot32;
            r106 = undefined;
            r105 = var2;
            r104 = var13;
            r103 = var6;
            r102 = var16;
            r101 = var7;
            var15 = r106[var15](r105, r104, r103, r102, r101, r100);
            var4['threadEmbed'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 39;
            var15 = var17[var15];
            var17 = var16.bind(var5)(var15);
            var16 = var17.createSystemMessageContent;
            var15 = {};
            var15['message'] = var2;
            var15['theme'] = var19;
            var15['reactions'] = var18;
            var15['roleStyle'] = var13;
            r104 = var16.bind(var17)(var15);
            r105 = var4;
            var15 = copyDataProperties(r105, r104);
            var1 = var4;
case 358:
            return var1;
case 59:
            var1 = {};
            var4 = _closure1_slot34;
            var3 = {};
            var3['message'] = var14;
            var3['roleStyle'] = var13;
            var3['isFirst'] = var12;
            var3['isEditing'] = var11;
            var3['canShowImages'] = var10;
            var3['isSystemDM'] = var9;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r105 = var6;
            r104 = var7;
            var7 = copyDataProperties(r105, r104);
            var9 = false;
            var7 = 'renderThreadEmbeds';
            var6[6] = var9;
            var7 = 'renderReactions';
            var6[6] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[6] = var8;
            var3['options'] = var6;
            r104 = var4.bind(var5)(var3);
            r105 = var1;
            var3 = copyDataProperties(r105, r104);
            var3 = var2.id;
            var2 = 'id';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot34 = var2;
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
    var4 = var4.GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR;
    var _closure1_slot25 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageRowState;
    var _closure1_slot26 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MessageTypes;
    var _closure1_slot27 = var8;
    var8 = var4.MessageStates;
    var _closure1_slot28 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot29 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot30 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot31 = var4;
    var4 = 86;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();