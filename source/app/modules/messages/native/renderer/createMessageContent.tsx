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
            var7 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.hasFlag;
            var2 = _closure1_slot25;
            var2 = var2.HAS_THREAD;
            var2 = var3.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var9 = _closure1_slot15;
            var5 = var9.getMostRecentMessage;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 22;
            var3 = var10[var6];
            var8 = undefined;
            var13 = var11.bind(var8)(var3);
            var12 = var13.castMessageIdAsChannelId;
            var3 = var1.id;
            var3 = var12.bind(var13)(var3);
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot15;
            var3 = var5.getCount;
            var6 = var10[var6];
            var11 = var11.bind(var8)(var6);
            var6 = var11.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var6.bind(var11)(var1);
            var3 = var3.bind(var5)(var1);
            var5 = _closure1_slot0;
            var1 = 23;
            var6 = var10[var1];
            var12 = var5.bind(var8)(var6);
            var11 = var12.formatMobileMessageCountLabel;
            var6 = var7.id;
            var6 = var11.bind(var12)(var3, var6);
            var1 = var10[var1];
            var10 = var5.bind(var8)(var1);
            var5 = var10.formatMessageCountLabel;
            var1 = var7.id;
            var5 = var5.bind(var10)(var3, var1);
            if(!(var2 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = {};
            var3 = var7.name;
            var1['title'] = var3;
            var1['messageCountLabel'] = var6;
            var1['messageCountAccessibilityLabel'] = var5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 24;
            var10 = var13[var3];
            var10 = var12.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var3 = var13[var3];
            var3 = var12.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.HYtNyE;
            var3 = var10.bind(var11)(var3);
            var1['messagePreviewString'] = var3;
            var3 = false;
            var1['archived'] = var3;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var3 = var7.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(!(var2 != var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var9.type;
            var2 = _closure1_slot23;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var3 = var9.type;
            var2 = _closure1_slot23;
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
            var3 = var7.name;
            var2['title'] = var3;
            var2['messageCountLabel'] = var6;
            var2['messageCountAccessibilityLabel'] = var5;
            var3 = {};
            var10 = _closure1_slot22;
            var10 = var10.LOADED;
            var3['state'] = var10;
            var11 = _closure1_slot31;
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
            var10 = var7.name;
            var3['title'] = var10;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var9 = var9.blocked;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 24;
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
            var9 = var7.name;
            var3['title'] = var9;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 24;
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
            var7 = var7.name;
            var3['title'] = var7;
            var3['messageCountLabel'] = var6;
            var3['messageCountAccessibilityLabel'] = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 24;
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
            var5 = 25;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getAssetUriForEmbed;
            var7 = _closure1_slot1;
            var4 = 26;
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
    var _closure1_slot29 = var1;
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
            var4 = 27;
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
            var1 = 27;
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
    var _closure1_slot30 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var95 = var1.messageForward;
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
            var67 = var1.pushFeedbackType;
            var51 = var1.renderContentOnly;
            var30 = var1.showContentInventoryEntryFallbackEmbed;
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
            var80 = var7.constrainedWidth;
            var91 = var7.ignoreMentioned;
            var79 = var7.animateEmoji;
            var39 = var7.animatingStickerMessageId;
            var53 = var7.gifAutoPlay;
            _closure2_slot1 = var53;
            var27 = var7.timestampHourCycle;
            var45 = var7.renderCodedLinks;
            var48 = var7.renderGiftCode;
            var47 = var7.renderActivityInstanceEmbed;
            var46 = var7.renderActivityInviteEmbed;
            var54 = var7.renderComponents;
            var15 = var7.renderThreadEmbeds;
            var20 = var7.renderReplies;
            var31 = var7.renderCommunicationDisabled;
            var42 = var7.renderAttachments;
            var55 = var7.renderExecutedCommands;
            var4 = var7.renderPolls;
            var1 = var7.renderSharedClientTheme;
            var34 = var7.renderForumPostActions;
            var19 = var7.forcedTheme;
            var35 = var7.ignoreEmbedDescriptionCache;
            var36 = var7.forceHideSimpleEmbedContent;
            var59 = var7.shouldObscureSpoiler;
            _closure2_slot2 = var59;
            var61 = var7.shouldDisableInteractiveComponents;
            _closure2_slot3 = var61;
            var22 = var7.useAlternateEmbedColors;
            var17 = null;
            if(!(var17 == var19)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = _closure1_slot16;
            var19 = var3.theme;
case 40:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 31;
            var8 = var24[var8];
            var8 = var23.bind(var5)(var8);
            var26 = var8.bind(var5)(var19, var22);
            _closure2_slot4 = var26;
            var8 = true;
            var60 = var8 === var10;
            _closure2_slot5 = var60;
            var28 = var60;
            if(!var60) { _fun0003_ip = 16; continue _fun0003 }
case 42:
            var28 = var21;
case 16:
            if(!var28) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var22 = var2.type;
            var21 = _closure1_slot23;
            var21 = var21.CUSTOM_GIFT;
            var28 = var22 !== var21;
case 43:
            var33 = var60;
            if(!var60) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var33 = var18;
case 45:
            var38 = var60;
            if(!var38) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var38 = var16;
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
            var16 = 22;
            var16 = var24[var16];
            var24 = var23.bind(var5)(var16);
            var23 = var24.castMessageIdAsChannelId;
            var16 = var2.id;
            var16 = var23.bind(var24)(var16);
            var16 = var18.bind(var22)(var16);
            var22 = var17 == var21;
            var18 = undefined;
            if(var22) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var22 = var21.getGuildId;
            var18 = var22.bind(var21)();
case 49:
            _closure2_slot6 = var18;
            var22 = var2.author;
            var24 = var22.id;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 32;
            var22 = var25[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getHasEnhancedRoleColors;
            var74 = var22.bind(var23)(var18, var24);
            var63 = var18;
            if(!(var17 == var95)) { _fun0003_ip = 51; continue _fun0003 }
case 22:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 33;
            var18 = var23[var18];
            var22 = var22.bind(var5)(var18);
            var18 = var22.maybeCreateSingleForwardForMessage;
            var95 = var18.bind(var22)(var2);
case 51:
            var40 = var2;
            if(!(var17 != var95)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var18 = var95.messageSnapshot;
            var40 = var18.message;
case 52:
            var18 = new Array(0);
            if(!var14) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 34;
            var14 = var23[var14];
            var22 = var22.bind(var5)(var14);
            var14 = {};
            var23 = var2.reactions;
            var14['reactions'] = var23;
            var14['animateEmoji'] = var79;
            var18 = var22.bind(var5)(var14);
case 54:
            var23 = var2.type;
            var14 = _closure1_slot23;
            var22 = var14.THREAD_STARTER_MESSAGE;
            var14 = null;
            if(!(var23 === var22)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var24 = _closure1_slot12;
            var23 = var24.getMessageByReference;
            var22 = var2.messageReference;
            var23 = var23.bind(var24)(var22);
            var25 = var23.state;
            var22 = _closure1_slot13;
            var24 = var22.LOADED;
            var22 = null;
            if(!(var25 === var24)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var22 = var23.message;
case 58:
            var14 = var22;
case 56:
            if(!(var17 == var14)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 35;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.bind(var5)(var2);
            if(var22) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var68 = !var12;
            if(var68) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var68 = var51;
case 64:
            var71 = var2.author;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 37;
            var22 = var24[var22];
            var24 = var23.bind(var5)(var22);
            var23 = var24.isMessageNewerThanImprovedMarkdownEpoch;
            var25 = var2.editedTimestamp;
            if(!(var17 == var25)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var25 = var2.timestamp;
case 66:
            var22 = var25.valueOf;
            var22 = var22.bind(var25)();
            var32 = var23.bind(var24)(var22);
            var22 = var40.content;
            if(!(var17 != var22)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var23 = var40.content;
            var22 = '';
            if(!(var22 === var23)) { _fun0003_ip = 70; continue _fun0003 }
case 68:
            var22 = {'content': null, 'hasSpoilerEmbeds': false, 'hasBailedAst': false};
            var22['content'] = var5;
            _fun0003_ip = 71; continue _fun0003;
case 70:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 38;
            var23 = var25[var23];
            var25 = var24.bind(var5)(var23);
            var24 = var25.parseMessageMarkup;
            if(var36) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var23 = var28;
            if(!var28) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var23 = var33;
case 74:
            var36 = var23;
case 72:
            var23 = var17 != var16;
            if(!var23) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var37 = var2.isFirstMessageInForumPost;
            var23 = var37.bind(var2)(var16);
case 76:
            r105 = var25;
            r104 = var2;
            r103 = var40;
            r102 = var36;
            r101 = var6;
            r100 = var23;
            var100 = var32;
            var99 = var32;
            var22 = r105[var24](r104, r103, r102, r101, r100, var100, var99, var98);
case 71:
            var24 = var22.content;
            var36 = var22.hasSpoilerEmbeds;
            var22 = var22.hasBailedAst;
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var37 = 39;
            var37 = var23[var37];
            var41 = var25.bind(var5)(var37);
            var37 = var41.getEnabledHarmTypesForMessage;
            var58 = var37.bind(var41)(var2);
            _closure2_slot7 = var58;
            var37 = 40;
            var37 = var23[var37];
            var41 = var25.bind(var5)(var37);
            var37 = var41.shouldAgeVerifyForExplicitMedia;
            var57 = var37.bind(var41)();
            _closure2_slot8 = var57;
            var41 = 41;
            var23 = var23[var41];
            var23 = var25.bind(var5)(var23);
            var25 = var23.ViewImageDescriptions;
            var23 = var25.getSetting;
            var56 = var23.bind(var25)();
            _closure2_slot9 = var56;
            if(!var28) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var28 = !var22;
case 78:
            var23 = _closure1_slot9;
            var22 = var23.getInteraction;
            var62 = var22.bind(var23)(var2);
            _closure2_slot10 = var62;
            var23 = undefined;
            if(!var28) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var25 = _closure1_slot1;
            var37 = _closure1_slot2;
            var22 = 42;
            var22 = var37[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var37 = var40.embeds;
            var22['embeds'] = var37;
            var37 = var2.channel_id;
            var22['channelId'] = var37;
            var22['gifAutoPlay'] = var53;
            var22['hasSpoilerEmbeds'] = var36;
            var22['ignoreEmbedDescriptionCache'] = var35;
            var22['shouldInlineEmbedMedia'] = var33;
            var22['colors'] = var26;
            var22['showListsAndHeaders'] = var32;
            var22['showMaskedLinks'] = var32;
            var32 = var26.embedBackgroundColor;
            var22['themedBackgroundColor'] = var32;
            var22['enabledContentHarmTypeFlags'] = var58;
            var22['shouldAgeVerify'] = var57;
            var32 = var2.author;
            var32 = var32.bot;
            var22['authorIsBot'] = var32;
            var22['showContentInventoryEntryFallbackEmbed'] = var30;
            var29 = function transformComponents(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 43;
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
            var22['transformComponents'] = var29;
            var23 = var25.bind(var5)(var22);
case 80:
            var25 = _closure1_slot1;
            var29 = _closure1_slot2;
            var22 = 44;
            var22 = var29[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var22['message'] = var2;
            var22['isSystemDM'] = var9;
            var22['channel'] = var21;
            var22['colors'] = var26;
            var22 = var25.bind(var5)(var22);
            var90 = var22.tagText;
            var89 = var22.tagAccessibilityLabel;
            var88 = var22.tagVerified;
            var87 = var22.tagTextColor;
            var86 = var22.tagBackgroundColor;
            var85 = var22.tagType;
            var84 = var22.tagIconUrl;
            var83 = var22.opTagText;
            var82 = var22.opTagTextColor;
            var81 = var22.opTagBackgroundColor;
            var29 = _closure1_slot21;
            var25 = var29.getUploaderFileForMessageId;
            var22 = var2.id;
            var25 = var25.bind(var29)(var22);
            var37 = var17 != var25;
            var29 = var2.state;
            var22 = _closure1_slot24;
            var22 = var22.SEND_FAILED;
            var22 = var29 !== var22;
            if(var22) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var29 = var2.isCommandType;
            var22 = var29.bind(var2)();
case 82:
            var29 = var23;
            if(var22) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var22 = var23;
            if(!(var17 == var23)) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var22 = new Array(0);
case 86:
            var30 = var22.push;
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var23 = 45;
            var23 = var33[var23];
            var32 = var32.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var25;
            var23['useAttachmentUploadPreview'] = var37;
            var23['colors'] = var26;
            var23 = var32.bind(var5)(var23);
            var23 = var30.bind(var22)(var23);
            var29 = var22;
case 84:
            var30 = _closure1_slot8;
            var23 = var30.getMessage;
            var22 = var2.id;
            var23 = var23.bind(var30)(var22);
            var50 = var29;
            if(!(var17 != var23)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var22 = var29;
            if(!(var17 == var29)) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var22 = new Array(0);
case 90:
            var33 = var23.errorMessage;
            var29 = var22.push;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 45;
            var23 = var32[var23];
            var32 = var30.bind(var5)(var23);
            var30 = var32.createAutomodBlockedMessageEmbed;
            var23 = {};
            var23['errorMessage'] = var33;
            var23['colors'] = var26;
            var23 = var30.bind(var32)(var23);
            var23 = var29.bind(var22)(var23);
            var50 = var22;
case 88:
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var32 = 46;
            var22 = var29[var32];
            var33 = var23.bind(var5)(var22);
            var30 = var33.getUserAuthor;
            var22 = var2.author;
            var22 = var30.bind(var33)(var22, var21);
            var44 = var22.guildMemberAvatar;
            var33 = var22.guildMemberAvatarDecoration;
            var30 = var22.iconRoleId;
            var22 = 47;
            var22 = var29[var22];
            var29 = var23.bind(var5)(var22);
            var23 = var29.ensureAvatarSource;
            var22 = var2.isInteractionPlaceholder;
            var22 = var22.bind(var2)();
            if(!var22) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var22 = var2.author;
            var22 = var22.avatar;
            if(!(var17 == var22)) { _fun0003_ip = 92; continue _fun0003 }
case 94:
            if(!(var17 == var44)) { _fun0003_ip = 92; continue _fun0003 }
case 95:
            var35 = var2.application;
            var36 = var17 == var35;
            var22 = undefined;
            if(var36) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var22 = var35.icon;
case 96:
            if(!(var17 == var22)) { _fun0003_ip = 98; continue _fun0003 }
case 92:
            if(!(var17 != var44)) { _fun0003_ip = 99; continue _fun0003 }
case 100:
            if(!(var17 == var63)) { _fun0003_ip = 101; continue _fun0003 }
case 99:
            var22 = var71.getAvatarSource;
            var22 = var22.bind(var71)(var5);
            _fun0003_ip = 102; continue _fun0003;
case 101:
            var36 = _closure1_slot1;
            var43 = _closure1_slot2;
            var35 = 48;
            var35 = var43[var35];
            var43 = var36.bind(var5)(var35);
            var36 = var43.getGuildMemberAvatarSource;
            var35 = {};
            var49 = var71.id;
            var35['userId'] = var49;
            var35['avatar'] = var44;
            var35['guildId'] = var63;
            var22 = var36.bind(var43)(var35, var71);
case 102:
            _fun0003_ip = 103; continue _fun0003;
case 98:
            var36 = _closure1_slot1;
            var43 = _closure1_slot2;
            var35 = 48;
            var35 = var43[var35];
            var43 = var36.bind(var5)(var35);
            var36 = var43.getApplicationIconSource;
            var35 = {};
            var44 = var2.application;
            var44 = var44.id;
            var35['id'] = var44;
            var44 = var2.application;
            var44 = var44.icon;
            var35['icon'] = var44;
            var44 = var2.application;
            var44 = var44.bot;
            var35['bot'] = var44;
            var22 = var36.bind(var43)(var35);
case 103:
            var78 = var23.bind(var29)(var22);
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 48;
            var22 = var29[var22];
            var29 = var23.bind(var5)(var22);
            var23 = var29.getAvatarDecorationURL;
            var22 = {};
            if(!(var17 == var33)) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var33 = var71.avatarDecoration;
case 104:
            var22['avatarDecoration'] = var33;
            var43 = _closure1_slot0;
            var44 = _closure1_slot2;
            var33 = 49;
            var33 = var44[var33];
            var36 = var43.bind(var5)(var33);
            var35 = var36.getDecorationSizeForAvatarSize;
            var33 = 50;
            var33 = var44[var33];
            var33 = var43.bind(var5)(var33);
            var33 = var33.AvatarSizes;
            var33 = var33.NORMAL;
            var33 = var35.bind(var36)(var33);
            var22['size'] = var33;
            var77 = var23.bind(var29)(var22);
            var22 = var17 != var30;
            var70 = undefined;
            if(!var22) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var22 = var17 != var63;
            var70 = undefined;
            if(!var22) { _fun0003_ip = 106; continue _fun0003 }
case 108:
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 51;
            var22 = var29[var22];
            var29 = var23.bind(var5)(var22);
            var23 = var29.getRoleIcon;
            var22 = {};
            var22['guildId'] = var63;
            var22['roleId'] = var30;
            var30 = 18;
            var22['size'] = var30;
            var70 = var23.bind(var29)(var22);
case 106:
            var23 = var2.hasFlag;
            var22 = _closure1_slot25;
            var22 = var22.SOURCE_MESSAGE_DELETED;
            var22 = var23.bind(var2)(var22);
            if(!var22) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 24;
            var23 = var33[var22];
            var23 = var30.bind(var5)(var23);
            var29 = var23.intl;
            var23 = var29.string;
            var22 = var33[var22];
            var22 = var30.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.JOtgSw;
            var24 = var23.bind(var29)(var22);
case 109:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getMessageAuthor;
            var22 = var22.bind(var23)(var2);
            var75 = var22.nick;
            var73 = var22.colorString;
            var76 = var22.colorStrings;
            var23 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.INTERACTION_PREMIUM_UPSELL;
            if(!(var23 === var22)) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var23 = _closure1_slot0;
            var33 = _closure1_slot2;
            var22 = 24;
            var29 = var33[var22];
            var29 = var23.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.formatToPlainString;
            var22 = var33[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.u4A+xK;
            var22 = {};
            var22['appName'] = var75;
            var24 = var29.bind(var30)(var23, var22);
case 111:
            var23 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.REPLY;
            var96 = undefined;
            if(!(var23 === var22)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var96 = undefined;
            if(!var20) { _fun0003_ip = 113; continue _fun0003 }
case 115:
            var23 = _closure1_slot12;
            var22 = var23.getMessageByReference;
            var20 = var2.messageReference;
            var20 = var22.bind(var23)(var20);
            var23 = var20.state;
            var22 = _closure1_slot13;
            var22 = var22.LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var22 = _closure1_slot13;
            var22 = var22.NOT_LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var22 = _closure1_slot13;
            var22 = var22.DELETED;
            if(!(var22 !== var23)) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 53;
            var22 = var29[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.assertNever;
            var22 = var22.bind(var23)(var20);
            var96 = undefined;
            _fun0003_ip = 113; continue _fun0003;
case 120:
            var22 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var23 = 24;
            var29 = var35[var23];
            var29 = var33.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var23 = var35[var23];
            var23 = var33.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.mE3KJN;
            var23 = var29.bind(var30)(var23);
            var22['content'] = var23;
            var96 = var22;
            _fun0003_ip = 113; continue _fun0003;
case 118:
            var22 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var23 = 24;
            var29 = var35[var23];
            var29 = var33.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var23 = var35[var23];
            var23 = var33.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.1i+hMi;
            var23 = var29.bind(var30)(var23);
            var22['content'] = var23;
            var96 = var22;
            _fun0003_ip = 113; continue _fun0003;
case 116:
            var20 = var20.message;
            var23 = _closure1_slot0;
            var29 = _closure1_slot2;
            var22 = 33;
            var22 = var29[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeCreateSingleForwardForMessage;
            var29 = var22.bind(var23)(var20);
            var23 = _closure1_slot20;
            var22 = var23.isBlockedForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            var23 = _closure1_slot20;
            var22 = var23.isIgnoredForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var23 = _closure1_slot31;
            var22 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var22['message'] = var20;
            var22['messageForward'] = var29;
            var22['roleStyle'] = var13;
            var35 = false;
            var30 = {};
            r104 = var30;
            r103 = var7;
            var33 = copyDataProperties(r104, r103);
            var33 = 'renderReplies';
            var30[var33] = var35;
            var22['options'] = var30;
            var23 = var23.bind(var5)(var22);
            if(!(var17 != var23)) { _fun0003_ip = 126; continue _fun0003 }
case 127:
            var22 = 'username';
            var22 = var22 in var23;
            if(!var22) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var30 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var30 = var30.bind(var5)(var22);
            var22 = var30.getMessageAuthor;
            var22 = var22.bind(var30)(var20);
            var30 = var22.nick;
            var32 = var22.colorString;
            if(!(var17 == var30)) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var22 = var20.author;
            var30 = var22.username;
case 130:
            var33 = var17 != var30;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var22 = var30;
case 132:
            var23['username'] = var22;
            if(var68) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var30 = _closure1_slot3;
            var33 = var17 != var32;
            var22 = undefined;
            if(!var33) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var22 = var32;
case 136:
            var22 = var30.bind(var5)(var22);
            if(!(var17 == var22)) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var22 = var23.colorString;
case 138:
            _fun0003_ip = 140; continue _fun0003;
case 134:
            var22 = var23.colorString;
case 140:
            var23['colorString'] = var22;
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 52;
            var22 = var32[var22];
            var22 = var30.bind(var5)(var22);
            var22 = var22.bind(var5)(var2, var20);
            if(!var22) { _fun0003_ip = 128; continue _fun0003 }
case 141:
            var30 = var23.username;
            var22 = '@';
            var22 = var22 + var30;
            var23['username'] = var22;
case 128:
            var30 = var17 == var29;
            var22 = undefined;
            if(var30) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var29 = var29.messageSnapshot;
            var22 = var29.message;
case 142:
            var32 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var32 = var22;
case 144:
            var22 = 'stickers';
            var22 = var22 in var32;
            if(var22) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var22 = new Array(0);
            _fun0003_ip = 148; continue _fun0003;
case 146:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 28;
            var29 = var33[var29];
            var30 = var30.bind(var5)(var29);
            var29 = var30.getMessageStickers;
            var22 = var29.bind(var30)(var32);
case 148:
            var22 = var22.length;
            var29 = 0;
            if(!(!(var22 > var29))) { _fun0003_ip = 149; continue _fun0003 }
case 150:
            var22 = 'interaction';
            var22 = var22 in var32;
            if(!var22) { _fun0003_ip = 151; continue _fun0003 }
case 152:
            var22 = var32.interaction;
            if(!(var17 != var22)) { _fun0003_ip = 151; continue _fun0003 }
case 153:
            var30 = var32.content;
            var22 = '';
            if(!(var22 !== var30)) { _fun0003_ip = 154; continue _fun0003 }
case 151:
            var30 = _closure1_slot0;
            var22 = _closure1_slot2;
            var33 = 29;
            var22 = var22[var33];
            var36 = var30.bind(var5)(var22);
            var35 = var36.hasFlag;
            var30 = var32.flags;
            var22 = _closure1_slot25;
            var22 = var22.IS_VOICE_MESSAGE;
            var22 = var35.bind(var36)(var30, var22);
            if(var22) { _fun0003_ip = 155; continue _fun0003 }
case 156:
            var30 = var32.type;
            var22 = _closure1_slot23;
            var22 = var22.POLL_RESULT;
            if(!(var30 !== var22)) { _fun0003_ip = 157; continue _fun0003 }
case 158:
            var30 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var33];
            var35 = var30.bind(var5)(var22);
            var33 = var35.hasFlag;
            var30 = var32.flags;
            var22 = _closure1_slot25;
            var22 = var22.IS_COMPONENTS_V2;
            var22 = var33.bind(var35)(var30, var22);
            if(var22) { _fun0003_ip = 159; continue _fun0003 }
case 160:
            var22 = var32.embeds;
            var22 = var22.length;
            if(!(!(var22 > var29))) { _fun0003_ip = 161; continue _fun0003 }
case 162:
            var22 = var32.attachments;
            var22 = var22.length;
            if(!(!(var22 > var29))) { _fun0003_ip = 161; continue _fun0003 }
case 163:
            var30 = var32.content;
            var29 = '';
            var22 = null;
            if(!(var29 === var30)) { _fun0003_ip = 164; continue _fun0003 }
case 161:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 24;
            var30 = var36[var29];
            var30 = var35.bind(var5)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var36[var29];
            var29 = var35.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.JAKsM8;
            var22 = var30.bind(var33)(var29);
case 164:
            _fun0003_ip = 165; continue _fun0003;
case 159:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 24;
            var30 = var36[var29];
            var30 = var35.bind(var5)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var36[var29];
            var29 = var35.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.Xxm5i3;
            var22 = var30.bind(var33)(var29);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 157:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 30;
            var29 = var33[var29];
            var30 = var30.bind(var5)(var29);
            var29 = var30.getPollResultsReplyPreviewMobile;
            var22 = var29.bind(var30)(var32);
case 166:
            _fun0003_ip = 167; continue _fun0003;
case 155:
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 24;
            var30 = var35[var29];
            var30 = var33.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var29 = var35[var29];
            var29 = var33.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.6bhHrc;
            var22 = var30.bind(var32)(var29);
case 167:
            _fun0003_ip = 168; continue _fun0003;
case 154:
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 24;
            var30 = var35[var29];
            var30 = var33.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var29 = var35[var29];
            var29 = var33.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.2v7kfl;
            var22 = var30.bind(var32)(var29);
case 168:
            _fun0003_ip = 169; continue _fun0003;
case 149:
            var33 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = 24;
            var30 = var35[var29];
            var30 = var33.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var29 = var35[var29];
            var29 = var33.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.7K5Lma;
            var22 = var30.bind(var32)(var29);
case 169:
            var29 = var20.type;
            var20 = _closure1_slot23;
            var20 = var20.POLL_RESULT;
            if(!(var29 === var20)) { _fun0003_ip = 170; continue _fun0003 }
case 171:
            var23['content'] = var22;
case 170:
            var20 = {};
            var29 = _closure1_slot22;
            var29 = var29.LOADED;
            var20['state'] = var29;
            var20['message'] = var23;
            var96 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 113; continue _fun0003 }
case 172:
            var20['systemContent'] = var22;
            var96 = var20;
            _fun0003_ip = 113; continue _fun0003;
case 126:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 24;
            var23 = var32[var22];
            var23 = var30.bind(var5)(var23);
            var29 = var23.intl;
            var23 = var29.string;
            var22 = var32[var22];
            var22 = var30.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.1i+hMi;
            var22 = var23.bind(var29)(var22);
            var20['content'] = var22;
            var96 = var20;
            _fun0003_ip = 113; continue _fun0003;
case 124:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 24;
            var23 = var32[var22];
            var23 = var30.bind(var5)(var23);
            var29 = var23.intl;
            var23 = var29.string;
            var22 = var32[var22];
            var22 = var30.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.G7p6v/;
            var22 = var23.bind(var29)(var22);
            var20['content'] = var22;
            var96 = var20;
            _fun0003_ip = 113; continue _fun0003;
case 122:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 24;
            var23 = var32[var22];
            var23 = var30.bind(var5)(var23);
            var29 = var23.intl;
            var23 = var29.string;
            var22 = var32[var22];
            var22 = var30.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.XAkOo2;
            var22 = var23.bind(var29)(var22);
            var20['content'] = var22;
            var96 = var20;
case 113:
            var93 = undefined;
            if(!var15) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var15 = _closure1_slot29;
            r105 = undefined;
            r104 = var2;
            r103 = var13;
            r102 = var6;
            r101 = var16;
            r100 = var7;
            var93 = r105[var15](r104, r103, r102, r101, r100, var100);
case 173:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 54;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.createInteractionStatus;
            var52 = var15.bind(var20)(var2, var62);
            var20 = var17 != var63;
            var15 = null;
            if(!var20) { _fun0003_ip = 175; continue _fun0003 }
case 176:
            var23 = _closure1_slot19;
            var22 = var23.getMember;
            var20 = var71.id;
            var15 = var22.bind(var23)(var63, var20);
case 175:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 55;
            var20 = var23[var20];
            var22 = var22.bind(var5)(var20);
            var20 = var22.isMemberCommunicationDisabled;
            var35 = var20.bind(var22)(var15);
            var20 = _closure1_slot4;
            var32 = var20.useReducedMotion;
            var20 = _closure1_slot4;
            var65 = var20.alwaysShowLinkDecorations;
            var20 = var17 == var21;
            var23 = var15;
            var15 = undefined;
            if(var20) { _fun0003_ip = 177; continue _fun0003 }
case 178:
            var15 = var21.parent_id;
case 177:
            var29 = var21;
            if(!(var17 != var15)) { _fun0003_ip = 179; continue _fun0003 }
case 180:
            var29 = var21;
            if(!(var17 != var21)) { _fun0003_ip = 179; continue _fun0003 }
case 181:
            var15 = var21.isThread;
            var15 = var15.bind(var21)();
            var29 = var21;
            if(!var15) { _fun0003_ip = 179; continue _fun0003 }
case 182:
            var22 = _closure1_slot18;
            var20 = var22.getChannel;
            var15 = var21.parent_id;
            var29 = var20.bind(var22)(var15);
case 179:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 56;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.getVisibleConnectionsRole;
            var15 = {};
            var15['guildMember'] = var23;
            var15['channel'] = var29;
            var15['onlyChannelConnectionRoles'] = var8;
            var72 = var20.bind(var22)(var15);
            var15 = var40.attachments;
            var15 = var15.length;
            var49 = 0;
            var43 = var49 !== var15;
            var15 = var40.embeds;
            var15 = var15.length;
            var44 = var49 !== var15;
            var15 = var37;
            if(!var37) { _fun0003_ip = 183; continue _fun0003 }
case 184:
            var20 = var2.attachments;
            var20 = var20.length;
            var15 = var49 === var20;
case 183:
            if(!var15) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            var15 = var17 != var25;
case 185:
            var36 = new Array(0);
            if(var15) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            if(!var42) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var22 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 58;
            var20 = var29[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var29 = var40.attachments;
            var20['attachments'] = var29;
            var33 = _closure1_slot21;
            var30 = var33.getUploadAttachments;
            var29 = var2.nonce;
            var29 = var30.bind(var33)(var29);
            var20['uploadAttachments'] = var29;
            var20['shouldInlineAttachmentMedia'] = var38;
            var20['gifAutoPlay'] = var53;
            var20['viewImageDescriptions'] = var56;
            var20['useReducedMotion'] = var32;
            var20['shouldObscureSpoiler'] = var59;
            var29 = var26.embedBackgroundColor;
            var20['themedBackgroundColor'] = var29;
            var20['enabledContentHarmTypeFlags'] = var58;
            var20['shouldAgeVerify'] = var57;
            var20['colors'] = var26;
            var36 = var22.bind(var5)(var20);
            _fun0003_ip = 189; continue _fun0003;
case 187:
            var22 = _closure1_slot1;
            var29 = _closure1_slot2;
            var20 = 57;
            var20 = var29[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var20['uploaderFile'] = var25;
            var29 = var2.state;
            var25 = _closure1_slot24;
            var25 = var25.SEND_FAILED;
            var25 = var29 === var25;
            var20['isFailedMessage'] = var25;
            var20['shouldInlineAttachmentMedia'] = var38;
            var36 = var22.bind(var5)(var20);
case 189:
            if(!var15) { _fun0003_ip = 191; continue _fun0003 }
case 192:
            var22 = var2.state;
            var20 = _closure1_slot24;
            var20 = var20.SEND_FAILED;
            if(!(var22 === var20)) { _fun0003_ip = 193; continue _fun0003 }
case 191:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 59;
            var20 = var25[var20];
            var25 = var22.bind(var5)(var20);
            var22 = var25.calendarFormat;
            var20 = var2.timestamp;
            var69 = var22.bind(var25)(var20, var8, var27);
            _fun0003_ip = 194; continue _fun0003;
case 193:
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = 24;
            var22 = var29[var20];
            var22 = var27.bind(var5)(var22);
            var25 = var22.intl;
            var22 = var25.string;
            var20 = var29[var20];
            var20 = var27.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.yXY+5J;
            var69 = var22.bind(var25)(var20);
case 194:
            if(!var15) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var20 = var2.state;
            var15 = _closure1_slot24;
            var15 = var15.SEND_FAILED;
            if(!(var20 === var15)) { _fun0003_ip = 197; continue _fun0003 }
case 195:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 59;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.accessibilityLabelCalendarFormat;
            var15 = var2.timestamp;
            var66 = var20.bind(var22)(var15);
            _fun0003_ip = 198; continue _fun0003;
case 197:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 24;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.yXY+5J;
            var66 = var20.bind(var22)(var15);
case 198:
            var20 = _closure1_slot17;
            var15 = var20.getId;
            var33 = var15.bind(var20)();
            var15 = var2.isUnsupported;
            var64 = var24;
            if(!var15) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 24;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.sWi5EU;
            var64 = var20.bind(var22)(var15);
case 199:
            var15 = var2.isPoll;
            var15 = var15.bind(var2)();
            var15 = !var15;
            if(var15) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            var20 = !var6;
            if(!var20) { _fun0003_ip = 203; continue _fun0003 }
case 204:
            var20 = var4;
case 203:
            var15 = var20;
case 201:
            if(var15) { _fun0003_ip = 205; continue _fun0003 }
case 206:
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 207; continue _fun0003 }
case 208:
            var22 = '';
            var20 = var22 !== var24;
case 207:
            var15 = var20;
case 205:
            if(var15) { _fun0003_ip = 209; continue _fun0003 }
case 210:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 30;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.getPollReplyPreview;
            var64 = var15.bind(var20)(var2);
case 209:
            var30 = undefined;
            if(!var4) { _fun0003_ip = 211; continue _fun0003 }
case 212:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var4 = 60;
            var4 = var20[var4];
            var15 = var15.bind(var5)(var4);
            var4 = {};
            var4['theme'] = var19;
            var4['animateEmoji'] = var79;
            var30 = var15.bind(var5)(var2, var5, var4);
case 211:
            var25 = undefined;
            if(!var1) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 61;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var25 = var1.bind(var4)(var2, var78, var75);
case 213:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 62;
            var1 = var1[var94];
            var20 = var4.bind(var5)(var1);
            var15 = var20.shouldDisplayGuildTag;
            var4 = var71.id;
            var22 = var17 != var63;
            var1 = undefined;
            if(!var22) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var1 = var63;
case 215:
            var1 = var15.bind(var20)(var4, var1);
            var24 = undefined;
            var22 = undefined;
            var20 = undefined;
            if(!var1) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var94];
            var15 = var4.bind(var5)(var1);
            var4 = var15.getUserPrimaryGuild;
            var1 = var71.primaryGuild;
            var27 = var4.bind(var15)(var1);
            var15 = var27.guildId;
            var4 = var27.tag;
            var1 = var27.guildId;
            var29 = var17 != var1;
            var1 = undefined;
            if(!var29) { _fun0003_ip = 219; continue _fun0003 }
case 220:
            var92 = _closure1_slot0;
            var29 = _closure1_slot2;
            var29 = var29[var94];
            var97 = var92.bind(var5)(var29);
            var94 = var97.getGuildTagBadgeUrl;
            var92 = var27.guildId;
            var29 = var27.badge;
            var27 = _closure1_slot27;
            var27 = var27.SIZE_12;
            var1 = var94.bind(var97)(var92, var29, var27);
case 219:
            var20 = var1;
            var24 = var15;
            var22 = var4;
case 217:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var97 = 29;
            var1 = var1[var97];
            var27 = var4.bind(var5)(var1);
            var15 = var27.hasFlag;
            var1 = var2;
            if(!(var17 != var40)) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var1 = var40;
case 221:
            var4 = var1.flags;
            var1 = _closure1_slot25;
            var1 = var1.IS_VOICE_MESSAGE;
            var27 = var15.bind(var27)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var33;
            var1['message'] = var2;
            var1['theme'] = var19;
            var94 = var1.currentUserId;
            var92 = var1.message;
            var29 = var1.theme;
            var1 = var92.referralTrialOfferId;
            var15 = var92.type;
            var4 = _closure1_slot23;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var15 === var4)) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            if(!(var17 != var1)) { _fun0003_ip = 223; continue _fun0003 }
case 225:
            var1 = {};
            var15 = _closure1_slot0;
            var98 = _closure1_slot2;
            var4 = 21;
            var4 = var98[var4];
            var15 = var15.bind(var5)(var4);
            var4 = var15.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var15)(var92, var29, var94);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 226; continue _fun0003;
case 223:
            var1 = _closure1_slot28;
case 226:
            var29 = var1.referralTrialOfferDataUpdated;
            var15 = _closure1_slot5;
            var4 = var15.getApplication;
            var94 = var2.applicationId;
            var98 = var17 != var94;
            var92 = '';
            var1 = var92;
            if(!var98) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var1 = var94;
case 227:
            var1 = var4.bind(var15)(var1);
            var4 = var17 != var1;
            if(!var4) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var94 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var97];
            var98 = var94.bind(var5)(var15);
            var97 = var98.hasFlag;
            var94 = var2.flags;
            var15 = _closure1_slot25;
            var15 = var15.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var4 = var97.bind(var98)(var94, var15);
case 229:
            var15 = undefined;
            if(!var4) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var15 = var1.id;
case 231:
            var4 = _closure1_slot0;
            var94 = _closure1_slot2;
            var1 = 63;
            var1 = var94[var1];
            var94 = var4.bind(var5)(var1);
            var4 = var94.createVoiceChannelBadge;
            var1 = var2.author;
            var1 = var1.id;
            var4 = var4.bind(var94)(var1, var63);
            var1 = {};
            var94 = var2.id;
            var1['id'] = var94;
            var94 = var2.channel_id;
            var1['channelId'] = var94;
            var97 = var17 != var63;
            var94 = undefined;
            if(!var97) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var94 = var63;
case 233:
            var1['guildId'] = var94;
            var94 = var2;
            if(!(var17 != var40)) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var94 = var40;
case 235:
            var94 = var94.flags;
            var1['flags'] = var94;
            var94 = var2.type;
            var1['type'] = var94;
            var94 = var2.nonce;
            if(!(var17 != var94)) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var94 = var2.nonce;
            var97 = 'string';
            var94 = typeof var94;
            if(!(var97 === var94)) { _fun0003_ip = 239; continue _fun0003 }
case 237:
            var94 = var2.nonce;
            _fun0003_ip = 240; continue _fun0003;
case 239:
            var97 = global;
            var98 = var97.String;
            var97 = var2.nonce;
            var94 = var98.bind(var5)(var97);
case 240:
            var1['nonce'] = var94;
            var94 = var2.state;
            var1['state'] = var94;
            var1['reactions'] = var18;
            var94 = undefined;
            if(var51) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var94 = var96;
case 241:
            var1['referencedMessage'] = var94;
            var1['threadEmbed'] = var93;
            var94 = var17 != var95;
            var93 = undefined;
            if(!var94) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var94 = var95.getForwardInfo;
            var93 = var94.bind(var95)();
case 243:
            var1['forwardInfo'] = var93;
            var91 = !var91;
            if(!var91) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var91 = var2.mentioned;
case 245:
            var1['mentioned'] = var91;
            var91 = var2.isEdited;
            var93 = var91.bind(var2)();
            var91 = var92;
            if(!var93) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var91 = var92;
            if(var51) { _fun0003_ip = 247; continue _fun0003 }
case 249:
            var95 = _closure1_slot0;
            var96 = _closure1_slot2;
            var92 = 24;
            var93 = var96[var92];
            var93 = var95.bind(var5)(var93);
            var94 = var93.intl;
            var93 = var94.string;
            var92 = var96[var92];
            var92 = var95.bind(var5)(var92);
            var92 = var92.t;
            var92 = var92.C8sXIM;
            var91 = var93.bind(var94)(var92);
case 247:
            var1['edited'] = var91;
            var91 = var26.editedColor;
            var1['editedColor'] = var91;
            var91 = var2.isUnsupported;
            if(var91) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var91 = var26.textColor;
            _fun0003_ip = 252; continue _fun0003;
case 250:
            var91 = var26.unsupportedColor;
case 252:
            var1['textColor'] = var91;
            var91 = var26.linkColor;
            var1['linkColor'] = var91;
            var1['tagText'] = var90;
            var1['tagAccessibilityLabel'] = var89;
            var1['tagVerified'] = var88;
            var1['tagTextColor'] = var87;
            var1['tagBackgroundColor'] = var86;
            var1['tagType'] = var85;
            var1['tagIconUrl'] = var84;
            var1['opTagText'] = var83;
            var1['opTagTextColor'] = var82;
            var1['opTagBackgroundColor'] = var81;
            var1['constrainedWidth'] = var80;
            var1['gifAutoPlay'] = var53;
            var1['animateEmoji'] = var79;
            var79 = var75;
            if(!var68) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var79 = var71.username;
case 253:
            var80 = var17 != var79;
            var75 = undefined;
            if(!var80) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var75 = var79;
case 255:
            var1['username'] = var75;
            var75 = undefined;
            if(var68) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var75 = var78.uri;
case 257:
            var1['avatarURL'] = var75;
            var75 = null;
            if(var68) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var75 = var77;
case 259:
            var1['avatarDecorationURL'] = var75;
            var71 = var71.id;
            var1['authorId'] = var71;
            if(var68) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var71 = 'username';
            if(!(var71 === var13)) { _fun0003_ip = 261; continue _fun0003 }
case 263:
            var75 = _closure1_slot3;
            var77 = var17 != var73;
            var71 = undefined;
            if(!var77) { _fun0003_ip = 264; continue _fun0003 }
case 265:
            var71 = var73;
case 264:
            var71 = var75.bind(var5)(var71);
            if(!(var17 == var71)) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var71 = var26.defaultUsernameColor;
case 266:
            _fun0003_ip = 268; continue _fun0003;
case 261:
            var71 = var26.defaultUsernameColor;
case 268:
            var1['usernameColor'] = var71;
            var71 = null;
            if(var68) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var77 = _closure1_slot3;
            var78 = var17 != var73;
            var75 = undefined;
            if(!var78) { _fun0003_ip = 271; continue _fun0003 }
case 272:
            var75 = var73;
case 271:
            var77 = var77.bind(var5)(var75);
            var78 = var17 != var77;
            var75 = null;
            if(!var78) { _fun0003_ip = 273; continue _fun0003 }
case 274:
            var75 = var77;
case 273:
            var71 = var75;
case 269:
            var1['roleColor'] = var71;
            var71 = null;
            if(!var74) { _fun0003_ip = 275; continue _fun0003 }
case 276:
            var71 = null;
            if(var68) { _fun0003_ip = 275; continue _fun0003 }
case 277:
            var75 = _closure1_slot0;
            var77 = _closure1_slot2;
            var74 = 64;
            var74 = var77[var74];
            var75 = var75.bind(var5)(var74);
            var74 = var75.processColorStrings;
            var71 = var74.bind(var75)(var76);
case 275:
            var1['roleColors'] = var71;
            var71 = 'dot';
            var71 = var71 === var13;
            var1['shouldShowRoleDot'] = var71;
            var71 = 'username';
            var71 = var71 === var13;
            var1['shouldShowRoleOnName'] = var71;
            var1['showLinkDecorations'] = var65;
            if(var68) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var71 = _closure1_slot3;
            var74 = var17 != var73;
            var65 = undefined;
            if(!var74) { _fun0003_ip = 280; continue _fun0003 }
case 281:
            var65 = var73;
case 280:
            var65 = var71.bind(var5)(var65);
            if(!(var17 == var65)) { _fun0003_ip = 282; continue _fun0003 }
case 283:
            var65 = var26.defaultUsernameColor;
case 282:
            _fun0003_ip = 284; continue _fun0003;
case 278:
            var65 = var26.defaultUsernameColor;
case 284:
            var1['colorString'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 285; continue _fun0003 }
case 286:
            var65 = var70;
case 285:
            var1['roleIcon'] = var65;
            var70 = var17 != var72;
            var65 = undefined;
            if(!var70) { _fun0003_ip = 287; continue _fun0003 }
case 288:
            var71 = _closure1_slot0;
            var73 = _closure1_slot2;
            var70 = 65;
            var70 = var73[var70];
            var71 = var71.bind(var5)(var70);
            var70 = var71.createConnectionsRoleTag;
            var65 = var70.bind(var71)(var72);
case 287:
            var1['connectionsRoleTag'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var65 = var69;
case 289:
            var1['timestamp'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 291; continue _fun0003 }
case 292:
            var65 = var26.timestampColor;
case 291:
            var1['timestampColor'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 293; continue _fun0003 }
case 294:
            var65 = var66;
case 293:
            var1['timestampAccessibilityLabel'] = var65;
            var1['content'] = var64;
            var1['isEditing'] = var11;
            var1['renderContentOnly'] = var51;
            var64 = undefined;
            if(!(var5 !== var67)) { _fun0003_ip = 295; continue _fun0003 }
case 296:
            var66 = _closure1_slot0;
            var68 = _closure1_slot2;
            var65 = 66;
            var65 = var68[var65];
            var66 = var66.bind(var5)(var65);
            var65 = var66.createSurveyIndication;
            var64 = var65.bind(var66)(var2, var19, var67);
case 295:
            var1['surveyIndication'] = var64;
            var65 = _closure1_slot0;
            var66 = _closure1_slot2;
            var64 = 67;
            var64 = var66[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createEphemeralIndication;
            var64 = var64.bind(var65)(var2);
            var1['ephemeralIndication'] = var64;
            var1['interactionStatus'] = var52;
            var52 = undefined;
            if(!var55) { _fun0003_ip = 297; continue _fun0003 }
case 298:
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var55 = 68;
            var55 = var65[var55];
            var65 = var64.bind(var5)(var55);
            var64 = var65.createExecutedCommand;
            r100 = var26.defaultUsernameColor;
            r105 = var65;
            r104 = var2;
            r103 = var21;
            r102 = var13;
            r101 = var19;
            var52 = r105[var64](r104, r103, r102, r101, r100, var100);
case 297:
            var1['executedCommand'] = var52;
            var52 = var40.components;
            var52 = var52.length;
            var55 = var52 > var49;
            var52 = undefined;
            if(!var55) { _fun0003_ip = 299; continue _fun0003 }
case 300:
            var52 = undefined;
            if(!var54) { _fun0003_ip = 299; continue _fun0003 }
case 301:
            var55 = _closure1_slot1;
            var64 = _closure1_slot2;
            var54 = 43;
            var54 = var64[var54];
            var55 = var55.bind(var5)(var54);
            var54 = {};
            var54['message'] = var2;
            var54['guildId'] = var63;
            var54['interaction'] = var62;
            var54['shouldDisableInteractiveComponents'] = var61;
            var54['shouldShowMedia'] = var60;
            var54['shouldObscureSpoiler'] = var59;
            var54['enabledContentHarmTypeFlags'] = var58;
            var54['shouldAgeVerify'] = var57;
            var54['shouldShowMosaicMediaDescriptions'] = var56;
            var54['shouldAutoPlayGifs'] = var53;
            var54['colors'] = var26;
            var53 = var40.components;
            var52 = var55.bind(var5)(var54, var53);
case 299:
            var1['components'] = var52;
            var52 = 0;
            if(var51) { _fun0003_ip = 302; continue _fun0003 }
case 303:
            var52 = var26.feedbackColor;
case 302:
            var1['feedbackColor'] = var52;
            var49 = 0;
            if(var51) { _fun0003_ip = 304; continue _fun0003 }
case 305:
            var49 = var26.highlightColor;
case 304:
            var1['highlightColor'] = var49;
            var51 = var17 != var50;
            var49 = undefined;
            if(!var51) { _fun0003_ip = 306; continue _fun0003 }
case 307:
            var49 = var50;
case 306:
            var1['embeds'] = var49;
            if(var48) { _fun0003_ip = 308; continue _fun0003 }
case 309:
            var48 = new Array(0);
            _fun0003_ip = 310; continue _fun0003;
case 308:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 69;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createGiftCodeEmbed;
            var48 = var49.bind(var50)(var2, var19);
case 310:
            var1['giftCodes'] = var48;
            if(var45) { _fun0003_ip = 311; continue _fun0003 }
case 312:
            var45 = new Array(0);
            _fun0003_ip = 313; continue _fun0003;
case 311:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 70;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createCodedLinkEmbeds;
            var45 = var48.bind(var49)(var2, var40, var19);
case 313:
            var1['codedLinks'] = var45;
            var45 = undefined;
            if(!var47) { _fun0003_ip = 314; continue _fun0003 }
case 315:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 71;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityInstanceEmbed;
            var45 = var47.bind(var48)(var2);
case 314:
            var1['activityInstanceEmbed'] = var45;
            var45 = undefined;
            if(!var46) { _fun0003_ip = 316; continue _fun0003 }
case 317:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 72;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityRichPresenceInviteEmbed;
            var45 = var46.bind(var47)(var2, var21);
case 316:
            var1['activityRichPresenceInviteEmbed'] = var45;
            if(!var38) { _fun0003_ip = 318; continue _fun0003 }
case 319:
            if(!var42) { _fun0003_ip = 320; continue _fun0003 }
case 321:
            if(var43) { _fun0003_ip = 322; continue _fun0003 }
case 323:
            var43 = var44;
case 322:
            var42 = var43;
case 320:
            if(var42) { _fun0003_ip = 324; continue _fun0003 }
case 325:
            var42 = var37;
case 324:
            var38 = var42;
case 318:
            var1['useAttachmentGridLayout'] = var38;
            var1['useAttachmentUploadPreview'] = var37;
            var1['attachments'] = var36;
            var42 = 1;
            var36 = var42;
            if(!var37) { _fun0003_ip = 326; continue _fun0003 }
case 327:
            var38 = var2.state;
            var37 = _closure1_slot24;
            var37 = var37.SEND_FAILED;
            var36 = var42;
            if(!(var38 === var37)) { _fun0003_ip = 326; continue _fun0003 }
case 328:
            var36 = 0.2;
case 326:
            var1['attachmentsOpacity'] = var36;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var36 = 73;
            var36 = var38[var36];
            var37 = var37.bind(var5)(var36);
            var36 = {};
            var36['message'] = var40;
            var40 = _closure1_slot0;
            var38 = var38[var41];
            var38 = var40.bind(var5)(var38);
            var40 = var38.AnimateStickers;
            var38 = var40.getSetting;
            var38 = var38.bind(var40)();
            var36['animateStickersSetting'] = var38;
            var38 = var2.id;
            var38 = var38 === var39;
            var36['isUserInteracting'] = var38;
            var36 = var37.bind(var5)(var36);
            var1['stickers'] = var36;
            if(!var31) { _fun0003_ip = 329; continue _fun0003 }
case 330:
            var31 = var35;
case 329:
            var1['communicationDisabled'] = var31;
            var35 = var17 == var21;
            if(var35) { _fun0003_ip = 331; continue _fun0003 }
case 332:
            var31 = var21.isForumPost;
            var31 = var31.bind(var21)();
            var35 = !var31;
case 331:
            var31 = !var35;
            if(var35) { _fun0003_ip = 333; continue _fun0003 }
case 334:
            var36 = var2.id;
            var35 = var2.channel_id;
            var31 = var36 === var35;
case 333:
            var1['isFirstForumPostMessage'] = var31;
            var35 = var17 != var21;
            var31 = undefined;
            if(!var35) { _fun0003_ip = 335; continue _fun0003 }
case 336:
            var35 = var21.isForumPost;
            var35 = var35.bind(var21)();
            var31 = undefined;
            if(!var35) { _fun0003_ip = 335; continue _fun0003 }
case 337:
            var31 = undefined;
            if(!var34) { _fun0003_ip = 335; continue _fun0003 }
case 338:
            var34 = _closure1_slot30;
            var31 = var34.bind(var5)(var2, var21);
case 335:
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
            var36 = _closure1_slot2;
            var31 = 25;
            var34 = var36[var31];
            var38 = var33.bind(var5)(var34);
            var37 = var38.getAssetUriForEmbed;
            var35 = _closure1_slot1;
            var34 = 74;
            var34 = var36[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var37.bind(var38)(var34);
            var1['swipeToReplyIconUrl'] = var34;
            var31 = var36[var31];
            var34 = var33.bind(var5)(var31);
            var33 = var34.getAssetUriForEmbed;
            var31 = 75;
            var31 = var36[var31];
            var31 = var35.bind(var5)(var31);
            var31 = var33.bind(var34)(var31);
            var1['swipeToEditIconUrl'] = var31;
            var1['referralTrialOfferInfo'] = var29;
            if(var28) { _fun0003_ip = 339; continue _fun0003 }
case 340:
            var28 = new Array(0);
            _fun0003_ip = 341; continue _fun0003;
case 339:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 76;
            var29 = var33[var29];
            var31 = var31.bind(var5)(var29);
            var29 = var31.createPostPreviewEmbeds;
            var28 = var29.bind(var31)(var2, var32);
case 341:
            var1['postPreviewEmbeds'] = var28;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var31 = 24;
            var32 = var29[var31];
            var32 = var28.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var29[var31];
            var31 = var28.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.2aXnfa;
            var31 = var32.bind(var33)(var31);
            var1['obscureLearnMoreLabel'] = var31;
            var31 = 77;
            var31 = var29[var31];
            var32 = var28.bind(var5)(var31);
            var31 = var32.createSafetyPolicyNoticeEmbed;
            var31 = var31.bind(var32)(var2);
            var1['safetyPolicyNoticeEmbed'] = var31;
            var1['pollData'] = var30;
            var1['sharedClientTheme'] = var25;
            var25 = 78;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var25 = var30.createSafetySystemNotificationEmbed;
            var25 = var25.bind(var30)(var2);
            var1['safetySystemNotificationEmbed'] = var25;
            var25 = 79;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var29 = var30.createCtaButton;
            var28 = var2.id;
            var25 = var2.channel_id;
            var25 = var29.bind(var30)(var28, var25, var26);
            var1['ctaButton'] = var25;
            var25 = undefined;
            if(!var27) { _fun0003_ip = 342; continue _fun0003 }
case 343:
            var25 = var26.embedBackgroundColor;
case 342:
            var1['audioAttachmentBackgroundColor'] = var25;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 80;
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
            if(var15) { _fun0003_ip = 344; continue _fun0003 }
case 345:
            var20 = var21.type;
case 344:
            var15 = _closure1_slot26;
            var15 = var15.GUILD_ANNOUNCEMENT;
            var15 = var20 === var15;
            var1['isAnnouncementChannel'] = var15;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 81;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.createDisplayNameStylesMobile;
            var15 = var2.author;
            var15 = var20.bind(var22)(var15, var23);
            var1['displayNameStyles'] = var15;
            var1['voiceChannelBadge'] = var4;
            return var1;
case 62:
            var4 = var2.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 346; continue _fun0003 }
case 347:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 36;
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
            if(var20) { _fun0003_ip = 348; continue _fun0003 }
case 349:
            var20 = var21.isForumPost;
            var17 = var20.bind(var21)();
case 348:
            var1['isForumPost'] = var17;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 350; continue _fun0003;
case 346:
            var4 = {};
            var15 = _closure1_slot29;
            r105 = undefined;
            r104 = var2;
            r103 = var13;
            r102 = var6;
            r101 = var16;
            r100 = var7;
            var15 = r105[var15](r104, r103, r102, r101, r100, var100);
            var4['threadEmbed'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 36;
            var15 = var17[var15];
            var17 = var16.bind(var5)(var15);
            var16 = var17.createSystemMessageContent;
            var15 = {};
            var15['message'] = var2;
            var15['theme'] = var19;
            var15['reactions'] = var18;
            var15['roleStyle'] = var13;
            r103 = var16.bind(var17)(var15);
            r104 = var4;
            var15 = copyDataProperties(r104, r103);
            var1 = var4;
case 350:
            return var1;
case 60:
            var1 = {};
            var4 = _closure1_slot31;
            var3 = {};
            var3['message'] = var14;
            var3['roleStyle'] = var13;
            var3['isFirst'] = var12;
            var3['isEditing'] = var11;
            var3['canShowImages'] = var10;
            var3['isSystemDM'] = var9;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r104 = var6;
            r103 = var7;
            var7 = copyDataProperties(r104, r103);
            var9 = false;
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[var7] = var8;
            var3['options'] = var6;
            r103 = var4.bind(var5)(var3);
            r104 = var1;
            var3 = copyDataProperties(r104, r103);
            var3 = var2.id;
            var2 = 'id';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot31 = var2;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageRowState;
    var _closure1_slot22 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MessageTypes;
    var _closure1_slot23 = var8;
    var8 = var4.MessageStates;
    var _closure1_slot24 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot25 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot26 = var4;
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot27 = var4;
    var4 = {};
    var4['referralTrialOfferDataUpdated'] = var1;
    var4['referralTrialOfferData'] = var1;
    var _closure1_slot28 = var4;
    var4 = 82;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();