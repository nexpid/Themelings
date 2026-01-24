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
            var92 = var1.messageForward;
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
            var28 = var1.showContentInventoryEntryFallbackEmbed;
            var21 = var7.renderEmbeds;
            var14 = var7.renderReactions;
            var18 = var7.inlineEmbedMedia;
            var16 = var7.inlineAttachmentMedia;
            var78 = var7.constrainedWidth;
            var88 = var7.ignoreMentioned;
            var77 = var7.animateEmoji;
            var38 = var7.animatingStickerMessageId;
            var54 = var7.gifAutoPlay;
            var44 = var7.renderCodedLinks;
            var47 = var7.renderGiftCode;
            var46 = var7.renderActivityInstanceEmbed;
            var45 = var7.renderActivityInviteEmbed;
            var52 = var7.renderComponents;
            var15 = var7.renderThreadEmbeds;
            var20 = var7.renderReplies;
            var30 = var7.renderCommunicationDisabled;
            var41 = var7.renderAttachments;
            var53 = var7.renderExecutedCommands;
            var4 = var7.renderPolls;
            var1 = var7.renderSharedClientTheme;
            var33 = var7.renderForumPostActions;
            var19 = var7.forcedTheme;
            var32 = var7.ignoreEmbedDescriptionCache;
            var34 = var7.forceHideSimpleEmbedContent;
            var58 = var7.shouldObscureSpoiler;
            var60 = var7.shouldDisableInteractiveComponents;
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
            var25 = var8.bind(var5)(var19, var22);
            var8 = true;
            var59 = var8 === var10;
            var27 = var59;
            if(!var59) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var27 = var21;
case 42:
            if(!var27) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var22 = var2.type;
            var21 = _closure1_slot23;
            var21 = var21.CUSTOM_GIFT;
            var27 = var22 !== var21;
case 44:
            var31 = var59;
            if(!var59) { _fun0003_ip = 46; continue _fun0003 }
case 14:
            var31 = var18;
case 46:
            var37 = var59;
            if(!var37) { _fun0003_ip = 47; continue _fun0003 }
case 48:
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
            var22 = var2.author;
            var24 = var22.id;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var22 = 32;
            var22 = var26[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getHasEnhancedRoleColors;
            var72 = var22.bind(var23)(var18, var24);
            var62 = var18;
            if(!(var17 == var92)) { _fun0003_ip = 51; continue _fun0003 }
case 52:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 33;
            var18 = var23[var18];
            var22 = var22.bind(var5)(var18);
            var18 = var22.maybeCreateSingleForwardForMessage;
            var92 = var18.bind(var22)(var2);
case 51:
            var39 = var2;
            if(!(var17 != var92)) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var18 = var92.messageSnapshot;
            var39 = var18.message;
case 53:
            var18 = new Array(0);
            if(!var14) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 34;
            var14 = var23[var14];
            var22 = var22.bind(var5)(var14);
            var14 = {};
            var23 = var2.reactions;
            var14['reactions'] = var23;
            var14['animateEmoji'] = var77;
            var18 = var22.bind(var5)(var14);
case 55:
            var23 = var2.type;
            var14 = _closure1_slot23;
            var22 = var14.THREAD_STARTER_MESSAGE;
            var14 = null;
            if(!(var23 === var22)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var24 = _closure1_slot12;
            var23 = var24.getMessageByReference;
            var22 = var2.messageReference;
            var23 = var23.bind(var24)(var22);
            var26 = var23.state;
            var22 = _closure1_slot13;
            var24 = var22.LOADED;
            var22 = null;
            if(!(var26 === var24)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var22 = var23.message;
case 59:
            var14 = var22;
case 57:
            if(!(var17 == var14)) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 35;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.bind(var5)(var2);
            if(var22) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var65 = !var12;
            if(var65) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var65 = var50;
case 65:
            var69 = var2.author;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 37;
            var22 = var24[var22];
            var24 = var23.bind(var5)(var22);
            var23 = var24.isMessageNewerThanImprovedMarkdownEpoch;
            var26 = var2.editedTimestamp;
            if(!(var17 == var26)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var26 = var2.timestamp;
case 67:
            var22 = var26.valueOf;
            var22 = var22.bind(var26)();
            var29 = var23.bind(var24)(var22);
            var22 = var39.content;
            if(!(var17 != var22)) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var23 = var39.content;
            var22 = '';
            if(!(var22 === var23)) { _fun0003_ip = 71; continue _fun0003 }
case 69:
            var22 = {'content': null, 'hasSpoilerEmbeds': false, 'hasBailedAst': false};
            var22['content'] = var5;
            _fun0003_ip = 72; continue _fun0003;
case 71:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 38;
            var23 = var26[var23];
            var26 = var24.bind(var5)(var23);
            var24 = var26.parseMessageMarkup;
            if(var34) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var23 = var27;
            if(!var27) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var23 = var31;
case 75:
            var34 = var23;
case 73:
            var23 = var17 != var16;
            if(!var23) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var35 = var2.isFirstMessageInForumPost;
            var23 = var35.bind(var2)(var16);
case 77:
            r103 = var26;
            r102 = var2;
            r101 = var39;
            r100 = var34;
            var100 = var6;
            var99 = var23;
            var98 = var29;
            var97 = var29;
            var22 = r103[var24](r102, r101, r100, var100, var99, var98, var97, var96);
case 72:
            var24 = var22.content;
            var34 = var22.hasSpoilerEmbeds;
            var22 = var22.hasBailedAst;
            var26 = _closure1_slot0;
            var35 = _closure1_slot2;
            var23 = 39;
            var23 = var35[var23];
            var36 = var26.bind(var5)(var23);
            var23 = var36.getEnabledHarmTypesForMessage;
            var57 = var23.bind(var36)(var2);
            var23 = 40;
            var23 = var35[var23];
            var26 = var26.bind(var5)(var23);
            var23 = var26.shouldAgeVerifyForExplicitMedia;
            var56 = var23.bind(var26)();
            if(!var27) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var27 = !var22;
case 79:
            var23 = undefined;
            if(!var27) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var26 = _closure1_slot1;
            var35 = _closure1_slot2;
            var22 = 41;
            var22 = var35[var22];
            var26 = var26.bind(var5)(var22);
            var22 = {};
            var35 = var39.embeds;
            var22['embeds'] = var35;
            var35 = var2.channel_id;
            var22['channelId'] = var35;
            var22['gifAutoPlay'] = var54;
            var22['hasSpoilerEmbeds'] = var34;
            var22['ignoreEmbedDescriptionCache'] = var32;
            var22['shouldInlineEmbedMedia'] = var31;
            var22['colors'] = var25;
            var22['showListsAndHeaders'] = var29;
            var22['showMaskedLinks'] = var29;
            var29 = var25.embedBackgroundColor;
            var22['themedBackgroundColor'] = var29;
            var22['enabledContentHarmTypeFlags'] = var57;
            var22['shouldAgeVerify'] = var56;
            var29 = var2.author;
            var29 = var29.bot;
            var22['authorIsBot'] = var29;
            var22['showContentInventoryEntryFallbackEmbed'] = var28;
            var23 = var26.bind(var5)(var22);
case 81:
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var22 = 42;
            var22 = var28[var22];
            var26 = var26.bind(var5)(var22);
            var22 = {};
            var22['message'] = var2;
            var22['isSystemDM'] = var9;
            var22['channel'] = var21;
            var22['colors'] = var25;
            var22 = var26.bind(var5)(var22);
            var87 = var22.tagText;
            var86 = var22.tagVerified;
            var85 = var22.tagTextColor;
            var84 = var22.tagBackgroundColor;
            var83 = var22.tagType;
            var82 = var22.tagIconUrl;
            var81 = var22.opTagText;
            var80 = var22.opTagTextColor;
            var79 = var22.opTagBackgroundColor;
            var28 = _closure1_slot21;
            var26 = var28.getUploaderFileForMessageId;
            var22 = var2.id;
            var26 = var26.bind(var28)(var22);
            var36 = var17 != var26;
            var28 = var2.state;
            var22 = _closure1_slot24;
            var22 = var22.SEND_FAILED;
            var22 = var28 !== var22;
            if(var22) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var28 = var2.isCommandType;
            var22 = var28.bind(var2)();
case 83:
            var28 = var23;
            if(var22) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var22 = var23;
            if(!(var17 == var23)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var22 = new Array(0);
case 87:
            var29 = var22.push;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var23 = 43;
            var23 = var32[var23];
            var31 = var31.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var26;
            var23['useAttachmentUploadPreview'] = var36;
            var23['colors'] = var25;
            var23 = var31.bind(var5)(var23);
            var23 = var29.bind(var22)(var23);
            var28 = var22;
case 85:
            var29 = _closure1_slot8;
            var23 = var29.getMessage;
            var22 = var2.id;
            var23 = var23.bind(var29)(var22);
            var49 = var28;
            if(!(var17 != var23)) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var22 = var28;
            if(!(var17 == var28)) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var22 = new Array(0);
case 91:
            var32 = var23.errorMessage;
            var28 = var22.push;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 43;
            var23 = var31[var23];
            var31 = var29.bind(var5)(var23);
            var29 = var31.createAutomodBlockedMessageEmbed;
            var23 = {};
            var23['errorMessage'] = var32;
            var23['colors'] = var25;
            var23 = var29.bind(var31)(var23);
            var23 = var28.bind(var22)(var23);
            var49 = var22;
case 89:
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var31 = 44;
            var22 = var28[var31];
            var32 = var23.bind(var5)(var22);
            var29 = var32.getUserAuthor;
            var22 = var2.author;
            var22 = var29.bind(var32)(var22, var21);
            var42 = var22.guildMemberAvatar;
            var32 = var22.guildMemberAvatarDecoration;
            var29 = var22.iconRoleId;
            var22 = 45;
            var22 = var28[var22];
            var28 = var23.bind(var5)(var22);
            var23 = var28.ensureAvatarSource;
            var22 = var2.isInteractionPlaceholder;
            var22 = var22.bind(var2)();
            if(!var22) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var22 = var2.author;
            var22 = var22.avatar;
            if(!(var17 == var22)) { _fun0003_ip = 93; continue _fun0003 }
case 95:
            if(!(var17 == var42)) { _fun0003_ip = 93; continue _fun0003 }
case 96:
            var34 = var2.application;
            var35 = var17 == var34;
            var22 = undefined;
            if(var35) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var22 = var34.icon;
case 97:
            if(!(var17 == var22)) { _fun0003_ip = 99; continue _fun0003 }
case 93:
            if(!(var17 != var42)) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            if(!(var17 == var62)) { _fun0003_ip = 102; continue _fun0003 }
case 100:
            var22 = var69.getAvatarSource;
            var22 = var22.bind(var69)(var5);
            _fun0003_ip = 103; continue _fun0003;
case 102:
            var35 = _closure1_slot1;
            var40 = _closure1_slot2;
            var34 = 46;
            var34 = var40[var34];
            var40 = var35.bind(var5)(var34);
            var35 = var40.getGuildMemberAvatarSource;
            var34 = {};
            var43 = var69.id;
            var34['userId'] = var43;
            var34['avatar'] = var42;
            var34['guildId'] = var62;
            var22 = var35.bind(var40)(var34, var69);
case 103:
            _fun0003_ip = 104; continue _fun0003;
case 99:
            var35 = _closure1_slot1;
            var40 = _closure1_slot2;
            var34 = 46;
            var34 = var40[var34];
            var40 = var35.bind(var5)(var34);
            var35 = var40.getApplicationIconSource;
            var34 = {};
            var42 = var2.application;
            var42 = var42.id;
            var34['id'] = var42;
            var42 = var2.application;
            var42 = var42.icon;
            var34['icon'] = var42;
            var42 = var2.application;
            var42 = var42.bot;
            var34['bot'] = var42;
            var22 = var35.bind(var40)(var34);
case 104:
            var76 = var23.bind(var28)(var22);
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 46;
            var22 = var28[var22];
            var28 = var23.bind(var5)(var22);
            var23 = var28.getAvatarDecorationURL;
            var22 = {};
            if(!(var17 == var32)) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var32 = var69.avatarDecoration;
case 105:
            var22['avatarDecoration'] = var32;
            var40 = _closure1_slot0;
            var42 = _closure1_slot2;
            var32 = 47;
            var32 = var42[var32];
            var35 = var40.bind(var5)(var32);
            var34 = var35.getDecorationSizeForAvatarSize;
            var32 = 48;
            var32 = var42[var32];
            var32 = var40.bind(var5)(var32);
            var32 = var32.AvatarSizes;
            var32 = var32.NORMAL;
            var32 = var34.bind(var35)(var32);
            var22['size'] = var32;
            var75 = var23.bind(var28)(var22);
            var22 = var17 != var29;
            var68 = undefined;
            if(!var22) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var22 = var17 != var62;
            var68 = undefined;
            if(!var22) { _fun0003_ip = 107; continue _fun0003 }
case 109:
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 49;
            var22 = var28[var22];
            var28 = var23.bind(var5)(var22);
            var23 = var28.getRoleIcon;
            var22 = {};
            var22['guildId'] = var62;
            var22['roleId'] = var29;
            var29 = 18;
            var22['size'] = var29;
            var68 = var23.bind(var28)(var22);
case 107:
            var23 = var2.hasFlag;
            var22 = _closure1_slot25;
            var22 = var22.SOURCE_MESSAGE_DELETED;
            var22 = var23.bind(var2)(var22);
            if(!var22) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 24;
            var23 = var32[var22];
            var23 = var29.bind(var5)(var23);
            var28 = var23.intl;
            var23 = var28.string;
            var22 = var32[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.JOtgSw;
            var24 = var23.bind(var28)(var22);
case 110:
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var31];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getMessageAuthor;
            var22 = var22.bind(var23)(var2);
            var73 = var22.nick;
            var71 = var22.colorString;
            var74 = var22.colorStrings;
            var23 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.INTERACTION_PREMIUM_UPSELL;
            if(!(var23 === var22)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var23 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 24;
            var28 = var32[var22];
            var28 = var23.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.formatToPlainString;
            var22 = var32[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.u4A+xK;
            var22 = {};
            var22['appName'] = var73;
            var24 = var28.bind(var29)(var23, var22);
case 112:
            var23 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.REPLY;
            var93 = undefined;
            if(!(var23 === var22)) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var93 = undefined;
            if(!var20) { _fun0003_ip = 114; continue _fun0003 }
case 116:
            var23 = _closure1_slot12;
            var22 = var23.getMessageByReference;
            var20 = var2.messageReference;
            var20 = var22.bind(var23)(var20);
            var23 = var20.state;
            var22 = _closure1_slot13;
            var22 = var22.LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var22 = _closure1_slot13;
            var22 = var22.NOT_LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var22 = _closure1_slot13;
            var22 = var22.DELETED;
            if(!(var22 !== var23)) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 51;
            var22 = var28[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.assertNever;
            var22 = var22.bind(var23)(var20);
            var93 = undefined;
            _fun0003_ip = 114; continue _fun0003;
case 121:
            var22 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var23 = 24;
            var28 = var34[var23];
            var28 = var32.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var34[var23];
            var23 = var32.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.mE3KJN;
            var23 = var28.bind(var29)(var23);
            var22['content'] = var23;
            var93 = var22;
            _fun0003_ip = 114; continue _fun0003;
case 119:
            var22 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var23 = 24;
            var28 = var34[var23];
            var28 = var32.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var34[var23];
            var23 = var32.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.1i+hMi;
            var23 = var28.bind(var29)(var23);
            var22['content'] = var23;
            var93 = var22;
            _fun0003_ip = 114; continue _fun0003;
case 117:
            var20 = var20.message;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var22 = 33;
            var22 = var28[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeCreateSingleForwardForMessage;
            var28 = var22.bind(var23)(var20);
            var23 = _closure1_slot20;
            var22 = var23.isBlockedForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var23 = _closure1_slot20;
            var22 = var23.isIgnoredForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var23 = _closure1_slot31;
            var22 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var22['message'] = var20;
            var22['messageForward'] = var28;
            var22['roleStyle'] = var13;
            var34 = false;
            var29 = {};
            r102 = var29;
            r101 = var7;
            var32 = copyDataProperties(r102, r101);
            var32 = 'renderReplies';
            var29[var32] = var34;
            var22['options'] = var29;
            var23 = var23.bind(var5)(var22);
            if(!(var17 != var23)) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var22 = 'username';
            var22 = var22 in var23;
            if(!var22) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var29 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var31];
            var29 = var29.bind(var5)(var22);
            var22 = var29.getMessageAuthor;
            var22 = var22.bind(var29)(var20);
            var29 = var22.nick;
            var31 = var22.colorString;
            if(!(var17 == var29)) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var22 = var20.author;
            var29 = var22.username;
case 131:
            var32 = var17 != var29;
            var22 = undefined;
            if(!var32) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var22 = var29;
case 133:
            var23['username'] = var22;
            if(var65) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var29 = _closure1_slot3;
            var32 = var17 != var31;
            var22 = undefined;
            if(!var32) { _fun0003_ip = 137; continue _fun0003 }
case 138:
            var22 = var31;
case 137:
            var22 = var29.bind(var5)(var22);
            if(!(var17 == var22)) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var22 = var23.colorString;
case 139:
            _fun0003_ip = 141; continue _fun0003;
case 135:
            var22 = var23.colorString;
case 141:
            var23['colorString'] = var22;
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var22 = 50;
            var22 = var31[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.bind(var5)(var2, var20);
            if(!var22) { _fun0003_ip = 129; continue _fun0003 }
case 142:
            var29 = var23.username;
            var22 = '@';
            var22 = var22 + var29;
            var23['username'] = var22;
case 129:
            var29 = var17 == var28;
            var22 = undefined;
            if(var29) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var28 = var28.messageSnapshot;
            var22 = var28.message;
case 143:
            var31 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 145; continue _fun0003 }
case 146:
            var31 = var22;
case 145:
            var22 = 'stickers';
            var22 = var22 in var31;
            if(var22) { _fun0003_ip = 147; continue _fun0003 }
case 148:
            var22 = new Array(0);
            _fun0003_ip = 149; continue _fun0003;
case 147:
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 28;
            var28 = var32[var28];
            var29 = var29.bind(var5)(var28);
            var28 = var29.getMessageStickers;
            var22 = var28.bind(var29)(var31);
case 149:
            var22 = var22.length;
            var28 = 0;
            if(!(!(var22 > var28))) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var22 = 'interaction';
            var22 = var22 in var31;
            if(!var22) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var22 = var31.interaction;
            if(!(var17 != var22)) { _fun0003_ip = 152; continue _fun0003 }
case 154:
            var29 = var31.content;
            var22 = '';
            if(!(var22 !== var29)) { _fun0003_ip = 155; continue _fun0003 }
case 152:
            var29 = _closure1_slot0;
            var22 = _closure1_slot2;
            var32 = 29;
            var22 = var22[var32];
            var35 = var29.bind(var5)(var22);
            var34 = var35.hasFlag;
            var29 = var31.flags;
            var22 = _closure1_slot25;
            var22 = var22.IS_VOICE_MESSAGE;
            var22 = var34.bind(var35)(var29, var22);
            if(var22) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var29 = var31.type;
            var22 = _closure1_slot23;
            var22 = var22.POLL_RESULT;
            if(!(var29 !== var22)) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var29 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var34 = var29.bind(var5)(var22);
            var32 = var34.hasFlag;
            var29 = var31.flags;
            var22 = _closure1_slot25;
            var22 = var22.IS_COMPONENTS_V2;
            var22 = var32.bind(var34)(var29, var22);
            if(var22) { _fun0003_ip = 160; continue _fun0003 }
case 161:
            var22 = var31.embeds;
            var22 = var22.length;
            if(!(!(var22 > var28))) { _fun0003_ip = 162; continue _fun0003 }
case 163:
            var22 = var31.attachments;
            var22 = var22.length;
            if(!(!(var22 > var28))) { _fun0003_ip = 162; continue _fun0003 }
case 164:
            var29 = var31.content;
            var28 = '';
            var22 = null;
            if(!(var28 === var29)) { _fun0003_ip = 165; continue _fun0003 }
case 162:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = 24;
            var29 = var35[var28];
            var29 = var34.bind(var5)(var29);
            var32 = var29.intl;
            var29 = var32.string;
            var28 = var35[var28];
            var28 = var34.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.JAKsM8;
            var22 = var29.bind(var32)(var28);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 160:
            var34 = _closure1_slot0;
            var35 = _closure1_slot2;
            var28 = 24;
            var29 = var35[var28];
            var29 = var34.bind(var5)(var29);
            var32 = var29.intl;
            var29 = var32.string;
            var28 = var35[var28];
            var28 = var34.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.Xxm5i3;
            var22 = var29.bind(var32)(var28);
case 166:
            _fun0003_ip = 167; continue _fun0003;
case 158:
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 30;
            var28 = var32[var28];
            var29 = var29.bind(var5)(var28);
            var28 = var29.getPollResultsReplyPreviewMobile;
            var22 = var28.bind(var29)(var31);
case 167:
            _fun0003_ip = 168; continue _fun0003;
case 156:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var29 = var34[var28];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var28 = var34[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.6bhHrc;
            var22 = var29.bind(var31)(var28);
case 168:
            _fun0003_ip = 169; continue _fun0003;
case 155:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var29 = var34[var28];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var28 = var34[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.2v7kfl;
            var22 = var29.bind(var31)(var28);
case 169:
            _fun0003_ip = 170; continue _fun0003;
case 150:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var29 = var34[var28];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var28 = var34[var28];
            var28 = var32.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.7K5Lma;
            var22 = var29.bind(var31)(var28);
case 170:
            var28 = var20.type;
            var20 = _closure1_slot23;
            var20 = var20.POLL_RESULT;
            if(!(var28 === var20)) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var23['content'] = var22;
case 171:
            var20 = {};
            var28 = _closure1_slot22;
            var28 = var28.LOADED;
            var20['state'] = var28;
            var20['message'] = var23;
            var93 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 114; continue _fun0003 }
case 173:
            var20['systemContent'] = var22;
            var93 = var20;
            _fun0003_ip = 114; continue _fun0003;
case 127:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = 24;
            var23 = var31[var22];
            var23 = var29.bind(var5)(var23);
            var28 = var23.intl;
            var23 = var28.string;
            var22 = var31[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.1i+hMi;
            var22 = var23.bind(var28)(var22);
            var20['content'] = var22;
            var93 = var20;
            _fun0003_ip = 114; continue _fun0003;
case 125:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = 24;
            var23 = var31[var22];
            var23 = var29.bind(var5)(var23);
            var28 = var23.intl;
            var23 = var28.string;
            var22 = var31[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.G7p6v/;
            var22 = var23.bind(var28)(var22);
            var20['content'] = var22;
            var93 = var20;
            _fun0003_ip = 114; continue _fun0003;
case 123:
            var20 = {};
            var22 = _closure1_slot22;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = 24;
            var23 = var31[var22];
            var23 = var29.bind(var5)(var23);
            var28 = var23.intl;
            var23 = var28.string;
            var22 = var31[var22];
            var22 = var29.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.XAkOo2;
            var22 = var23.bind(var28)(var22);
            var20['content'] = var22;
            var93 = var20;
case 114:
            var90 = undefined;
            if(!var15) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var15 = _closure1_slot29;
            r103 = undefined;
            r102 = var2;
            r101 = var13;
            r100 = var6;
            var100 = var16;
            var99 = var7;
            var90 = r103[var15](r102, r101, r100, var100, var99, var98);
case 174:
            var20 = _closure1_slot9;
            var15 = var20.getInteraction;
            var61 = var15.bind(var20)(var2);
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 52;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.createInteractionStatus;
            var51 = var15.bind(var20)(var2, var61);
            var20 = var17 != var62;
            var15 = null;
            if(!var20) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var23 = _closure1_slot19;
            var22 = var23.getMember;
            var20 = var69.id;
            var15 = var22.bind(var23)(var62, var20);
case 176:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 53;
            var20 = var23[var20];
            var22 = var22.bind(var5)(var20);
            var20 = var22.isMemberCommunicationDisabled;
            var34 = var20.bind(var22)(var15);
            var20 = _closure1_slot4;
            var31 = var20.useReducedMotion;
            var20 = _closure1_slot4;
            var64 = var20.alwaysShowLinkDecorations;
            var20 = var17 == var21;
            var22 = var15;
            var15 = undefined;
            if(var20) { _fun0003_ip = 178; continue _fun0003 }
case 179:
            var15 = var21.parent_id;
case 178:
            var28 = var21;
            if(!(var17 != var15)) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var28 = var21;
            if(!(var17 != var21)) { _fun0003_ip = 180; continue _fun0003 }
case 182:
            var15 = var21.isThread;
            var15 = var15.bind(var21)();
            var28 = var21;
            if(!var15) { _fun0003_ip = 180; continue _fun0003 }
case 183:
            var23 = _closure1_slot18;
            var20 = var23.getChannel;
            var15 = var21.parent_id;
            var28 = var20.bind(var23)(var15);
case 180:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 54;
            var15 = var23[var15];
            var23 = var20.bind(var5)(var15);
            var20 = var23.getVisibleConnectionsRole;
            var15 = {};
            var15['guildMember'] = var22;
            var15['channel'] = var28;
            var15['onlyChannelConnectionRoles'] = var8;
            var70 = var20.bind(var23)(var15);
            var15 = var39.attachments;
            var15 = var15.length;
            var48 = 0;
            var42 = var48 !== var15;
            var15 = var39.embeds;
            var15 = var15.length;
            var43 = var48 !== var15;
            var15 = var36;
            if(!var36) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            var20 = var2.attachments;
            var20 = var20.length;
            var15 = var48 === var20;
case 184:
            if(!var15) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var15 = var17 != var26;
case 186:
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var40 = 55;
            var20 = var20[var40];
            var20 = var23.bind(var5)(var20);
            var23 = var20.ViewImageDescriptions;
            var20 = var23.getSetting;
            var55 = var20.bind(var23)();
            var35 = new Array(0);
            if(var15) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            if(!var41) { _fun0003_ip = 190; continue _fun0003 }
case 191:
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 57;
            var20 = var28[var20];
            var23 = var23.bind(var5)(var20);
            var20 = {};
            var28 = var39.attachments;
            var20['attachments'] = var28;
            var32 = _closure1_slot21;
            var29 = var32.getUploadAttachments;
            var28 = var2.nonce;
            var28 = var29.bind(var32)(var28);
            var20['uploadAttachments'] = var28;
            var20['shouldInlineAttachmentMedia'] = var37;
            var20['gifAutoPlay'] = var54;
            var20['viewImageDescriptions'] = var55;
            var20['useReducedMotion'] = var31;
            var20['shouldObscureSpoiler'] = var58;
            var28 = var25.embedBackgroundColor;
            var20['themedBackgroundColor'] = var28;
            var20['enabledContentHarmTypeFlags'] = var57;
            var20['shouldAgeVerify'] = var56;
            var20['colors'] = var25;
            var35 = var23.bind(var5)(var20);
            _fun0003_ip = 190; continue _fun0003;
case 188:
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var20 = 56;
            var20 = var28[var20];
            var23 = var23.bind(var5)(var20);
            var20 = {};
            var20['uploaderFile'] = var26;
            var28 = var2.state;
            var26 = _closure1_slot24;
            var26 = var26.SEND_FAILED;
            var26 = var28 === var26;
            var20['isFailedMessage'] = var26;
            var20['shouldInlineAttachmentMedia'] = var37;
            var35 = var23.bind(var5)(var20);
case 190:
            if(!var15) { _fun0003_ip = 192; continue _fun0003 }
case 193:
            var20 = var2.state;
            var15 = _closure1_slot24;
            var15 = var15.SEND_FAILED;
            if(!(var20 === var15)) { _fun0003_ip = 194; continue _fun0003 }
case 192:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 58;
            var15 = var23[var15];
            var23 = var20.bind(var5)(var15);
            var20 = var23.calendarFormat;
            var15 = var2.timestamp;
            var67 = var20.bind(var23)(var15, var8);
            _fun0003_ip = 195; continue _fun0003;
case 194:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var15 = 24;
            var20 = var28[var15];
            var20 = var26.bind(var5)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var15 = var28[var15];
            var15 = var26.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.yXY+5J;
            var67 = var20.bind(var23)(var15);
case 195:
            var20 = _closure1_slot17;
            var15 = var20.getId;
            var32 = var15.bind(var20)();
            var15 = var2.isUnsupported;
            var63 = var24;
            if(!var15) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var15 = 24;
            var20 = var28[var15];
            var20 = var26.bind(var5)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var15 = var28[var15];
            var15 = var26.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.sWi5EU;
            var63 = var20.bind(var23)(var15);
case 196:
            var15 = var2.isPoll;
            var15 = var15.bind(var2)();
            var15 = !var15;
            if(var15) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var20 = !var6;
            if(!var20) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var20 = var4;
case 200:
            var15 = var20;
case 198:
            if(var15) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var23 = '';
            var20 = var23 !== var24;
case 204:
            var15 = var20;
case 202:
            if(var15) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var15 = 30;
            var15 = var23[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.getPollReplyPreview;
            var63 = var15.bind(var20)(var2);
case 206:
            var29 = undefined;
            if(!var4) { _fun0003_ip = 208; continue _fun0003 }
case 209:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var4 = 59;
            var4 = var20[var4];
            var15 = var15.bind(var5)(var4);
            var4 = {};
            var4['theme'] = var19;
            var4['animateEmoji'] = var77;
            var29 = var15.bind(var5)(var2, var5, var4);
case 208:
            var24 = undefined;
            if(!var1) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 60;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var24 = var1.bind(var4)(var2, var76, var73);
case 210:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 61;
            var1 = var1[var94];
            var20 = var4.bind(var5)(var1);
            var15 = var20.shouldDisplayGuildTag;
            var4 = var69.id;
            var23 = var17 != var62;
            var1 = undefined;
            if(!var23) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var1 = var62;
case 212:
            var1 = var15.bind(var20)(var4, var1);
            var23 = undefined;
            var20 = undefined;
            var15 = undefined;
            if(!var1) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var94];
            var26 = var4.bind(var5)(var1);
            var4 = var26.getUserPrimaryGuild;
            var1 = var69.primaryGuild;
            var28 = var4.bind(var26)(var1);
            var26 = var28.guildId;
            var4 = var28.tag;
            var1 = var28.guildId;
            var89 = var17 != var1;
            var1 = undefined;
            if(!var89) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var91 = _closure1_slot0;
            var89 = _closure1_slot2;
            var89 = var89[var94];
            var95 = var91.bind(var5)(var89);
            var94 = var95.getGuildTagBadgeUrl;
            var91 = var28.guildId;
            var89 = var28.badge;
            var28 = _closure1_slot27;
            var28 = var28.SIZE_12;
            var1 = var94.bind(var95)(var91, var89, var28);
case 216:
            var15 = var1;
            var23 = var26;
            var20 = var4;
case 214:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var95 = 29;
            var1 = var1[var95];
            var28 = var4.bind(var5)(var1);
            var26 = var28.hasFlag;
            var1 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var1 = var39;
case 218:
            var4 = var1.flags;
            var1 = _closure1_slot25;
            var1 = var1.IS_VOICE_MESSAGE;
            var26 = var26.bind(var28)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var32;
            var1['message'] = var2;
            var1['theme'] = var19;
            var94 = var1.currentUserId;
            var91 = var1.message;
            var89 = var1.theme;
            var1 = var91.referralTrialOfferId;
            var28 = var91.type;
            var4 = _closure1_slot23;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var28 === var4)) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            if(!(var17 != var1)) { _fun0003_ip = 220; continue _fun0003 }
case 222:
            var1 = {};
            var28 = _closure1_slot0;
            var96 = _closure1_slot2;
            var4 = 21;
            var4 = var96[var4];
            var28 = var28.bind(var5)(var4);
            var4 = var28.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var28)(var91, var89, var94);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 223; continue _fun0003;
case 220:
            var1 = _closure1_slot28;
case 223:
            var28 = var1.referralTrialOfferDataUpdated;
            var91 = _closure1_slot5;
            var4 = var91.getApplication;
            var94 = var2.applicationId;
            var96 = var17 != var94;
            var89 = '';
            var1 = var89;
            if(!var96) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var1 = var94;
case 224:
            var1 = var4.bind(var91)(var1);
            var91 = var17 != var1;
            if(!var91) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var94 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var95];
            var96 = var94.bind(var5)(var4);
            var95 = var96.hasFlag;
            var94 = var2.flags;
            var4 = _closure1_slot25;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var91 = var95.bind(var96)(var94, var4);
case 226:
            var4 = undefined;
            if(!var91) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var4 = var1.id;
case 228:
            var1 = {};
            var91 = var2.id;
            var1['id'] = var91;
            var91 = var2.channel_id;
            var1['channelId'] = var91;
            var94 = var17 != var62;
            var91 = undefined;
            if(!var94) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var91 = var62;
case 230:
            var1['guildId'] = var91;
            var91 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var91 = var39;
case 232:
            var91 = var91.flags;
            var1['flags'] = var91;
            var91 = var2.type;
            var1['type'] = var91;
            var91 = var2.nonce;
            if(!(var17 != var91)) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var91 = var2.nonce;
            var94 = 'string';
            var91 = typeof var91;
            if(!(var94 === var91)) { _fun0003_ip = 236; continue _fun0003 }
case 234:
            var91 = var2.nonce;
            _fun0003_ip = 237; continue _fun0003;
case 236:
            var94 = global;
            var95 = var94.String;
            var94 = var2.nonce;
            var91 = var95.bind(var5)(var94);
case 237:
            var1['nonce'] = var91;
            var91 = var2.state;
            var1['state'] = var91;
            var1['reactions'] = var18;
            var91 = undefined;
            if(var50) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var91 = var93;
case 238:
            var1['referencedMessage'] = var91;
            var1['threadEmbed'] = var90;
            var91 = var17 != var92;
            var90 = undefined;
            if(!var91) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var91 = var92.getForwardInfo;
            var90 = var91.bind(var92)();
case 240:
            var1['forwardInfo'] = var90;
            var88 = !var88;
            if(!var88) { _fun0003_ip = 242; continue _fun0003 }
case 243:
            var88 = var2.mentioned;
case 242:
            var1['mentioned'] = var88;
            var88 = var2.isEdited;
            var90 = var88.bind(var2)();
            var88 = var89;
            if(!var90) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            var88 = var89;
            if(var50) { _fun0003_ip = 244; continue _fun0003 }
case 246:
            var92 = _closure1_slot0;
            var93 = _closure1_slot2;
            var89 = 24;
            var90 = var93[var89];
            var90 = var92.bind(var5)(var90);
            var91 = var90.intl;
            var90 = var91.string;
            var89 = var93[var89];
            var89 = var92.bind(var5)(var89);
            var89 = var89.t;
            var89 = var89.C8sXIM;
            var88 = var90.bind(var91)(var89);
case 244:
            var1['edited'] = var88;
            var88 = var25.editedColor;
            var1['editedColor'] = var88;
            var88 = var2.isUnsupported;
            if(var88) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var88 = var25.textColor;
            _fun0003_ip = 249; continue _fun0003;
case 247:
            var88 = var25.unsupportedColor;
case 249:
            var1['textColor'] = var88;
            var88 = var25.linkColor;
            var1['linkColor'] = var88;
            var1['tagText'] = var87;
            var1['tagVerified'] = var86;
            var1['tagTextColor'] = var85;
            var1['tagBackgroundColor'] = var84;
            var1['tagType'] = var83;
            var1['tagIconUrl'] = var82;
            var1['opTagText'] = var81;
            var1['opTagTextColor'] = var80;
            var1['opTagBackgroundColor'] = var79;
            var1['constrainedWidth'] = var78;
            var1['gifAutoPlay'] = var54;
            var1['animateEmoji'] = var77;
            var77 = var73;
            if(!var65) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var77 = var69.username;
case 250:
            var78 = var17 != var77;
            var73 = undefined;
            if(!var78) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            var73 = var77;
case 252:
            var1['username'] = var73;
            var73 = undefined;
            if(var65) { _fun0003_ip = 254; continue _fun0003 }
case 255:
            var73 = var76.uri;
case 254:
            var1['avatarURL'] = var73;
            var73 = undefined;
            if(var65) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            var73 = var75;
case 256:
            var1['avatarDecorationURL'] = var73;
            var69 = var69.id;
            var1['authorId'] = var69;
            if(var65) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            var69 = 'username';
            if(!(var69 === var13)) { _fun0003_ip = 258; continue _fun0003 }
case 260:
            var73 = _closure1_slot3;
            var75 = var17 != var71;
            var69 = undefined;
            if(!var75) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var69 = var71;
case 261:
            var69 = var73.bind(var5)(var69);
            if(!(var17 == var69)) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var69 = var25.defaultUsernameColor;
case 263:
            _fun0003_ip = 265; continue _fun0003;
case 258:
            var69 = var25.defaultUsernameColor;
case 265:
            var1['usernameColor'] = var69;
            var69 = null;
            if(var65) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var75 = _closure1_slot3;
            var76 = var17 != var71;
            var73 = undefined;
            if(!var76) { _fun0003_ip = 268; continue _fun0003 }
case 269:
            var73 = var71;
case 268:
            var75 = var75.bind(var5)(var73);
            var76 = var17 != var75;
            var73 = null;
            if(!var76) { _fun0003_ip = 270; continue _fun0003 }
case 271:
            var73 = var75;
case 270:
            var69 = var73;
case 266:
            var1['roleColor'] = var69;
            var69 = null;
            if(!var72) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            var69 = null;
            if(var65) { _fun0003_ip = 272; continue _fun0003 }
case 274:
            var73 = _closure1_slot0;
            var75 = _closure1_slot2;
            var72 = 62;
            var72 = var75[var72];
            var73 = var73.bind(var5)(var72);
            var72 = var73.processColorStrings;
            var69 = var72.bind(var73)(var74);
case 272:
            var1['roleColors'] = var69;
            var69 = 'dot';
            var69 = var69 === var13;
            var1['shouldShowRoleDot'] = var69;
            var69 = 'username';
            var69 = var69 === var13;
            var1['shouldShowRoleOnName'] = var69;
            var1['showLinkDecorations'] = var64;
            if(var65) { _fun0003_ip = 275; continue _fun0003 }
case 276:
            var69 = _closure1_slot3;
            var72 = var17 != var71;
            var64 = undefined;
            if(!var72) { _fun0003_ip = 277; continue _fun0003 }
case 278:
            var64 = var71;
case 277:
            var64 = var69.bind(var5)(var64);
            if(!(var17 == var64)) { _fun0003_ip = 279; continue _fun0003 }
case 280:
            var64 = var25.defaultUsernameColor;
case 279:
            _fun0003_ip = 281; continue _fun0003;
case 275:
            var64 = var25.defaultUsernameColor;
case 281:
            var1['colorString'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 282; continue _fun0003 }
case 283:
            var64 = var68;
case 282:
            var1['roleIcon'] = var64;
            var68 = var17 != var70;
            var64 = undefined;
            if(!var68) { _fun0003_ip = 284; continue _fun0003 }
case 285:
            var69 = _closure1_slot0;
            var71 = _closure1_slot2;
            var68 = 63;
            var68 = var71[var68];
            var69 = var69.bind(var5)(var68);
            var68 = var69.createConnectionsRoleTag;
            var64 = var68.bind(var69)(var70);
case 284:
            var1['connectionsRoleTag'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 286; continue _fun0003 }
case 287:
            var64 = var67;
case 286:
            var1['timestamp'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 288; continue _fun0003 }
case 289:
            var64 = var25.timestampColor;
case 288:
            var1['timestampColor'] = var64;
            var1['content'] = var63;
            var1['isEditing'] = var11;
            var1['renderContentOnly'] = var50;
            var63 = undefined;
            if(!(var5 !== var66)) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var65 = _closure1_slot0;
            var67 = _closure1_slot2;
            var64 = 64;
            var64 = var67[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createSurveyIndication;
            var63 = var64.bind(var65)(var2, var19, var66);
case 290:
            var1['surveyIndication'] = var63;
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var63 = 65;
            var63 = var65[var63];
            var64 = var64.bind(var5)(var63);
            var63 = var64.createEphemeralIndication;
            var63 = var63.bind(var64)(var2);
            var1['ephemeralIndication'] = var63;
            var1['interactionStatus'] = var51;
            var51 = undefined;
            if(!var53) { _fun0003_ip = 292; continue _fun0003 }
case 293:
            var63 = _closure1_slot0;
            var64 = _closure1_slot2;
            var53 = 66;
            var53 = var64[var53];
            var64 = var63.bind(var5)(var53);
            var63 = var64.createExecutedCommand;
            var99 = var25.defaultUsernameColor;
            r103 = var64;
            r102 = var2;
            r101 = var21;
            r100 = var13;
            var100 = var19;
            var51 = r103[var63](r102, r101, r100, var100, var99, var98);
case 292:
            var1['executedCommand'] = var51;
            var51 = var39.components;
            var51 = var51.length;
            var53 = var51 > var48;
            var51 = undefined;
            if(!var53) { _fun0003_ip = 294; continue _fun0003 }
case 295:
            var51 = undefined;
            if(!var52) { _fun0003_ip = 294; continue _fun0003 }
case 296:
            var53 = _closure1_slot1;
            var63 = _closure1_slot2;
            var52 = 67;
            var52 = var63[var52];
            var53 = var53.bind(var5)(var52);
            var52 = {};
            var52['message'] = var2;
            var52['guildId'] = var62;
            var52['interaction'] = var61;
            var52['shouldDisableInteractiveComponents'] = var60;
            var52['shouldShowMedia'] = var59;
            var52['shouldObscureSpoiler'] = var58;
            var52['enabledContentHarmTypeFlags'] = var57;
            var52['shouldAgeVerify'] = var56;
            var52['shouldShowMosaicMediaDescriptions'] = var55;
            var52['shouldAutoPlayGifs'] = var54;
            var52['colors'] = var25;
            var51 = var53.bind(var5)(var52);
case 294:
            var1['components'] = var51;
            var51 = 0;
            if(var50) { _fun0003_ip = 297; continue _fun0003 }
case 298:
            var51 = var25.feedbackColor;
case 297:
            var1['feedbackColor'] = var51;
            var48 = 0;
            if(var50) { _fun0003_ip = 299; continue _fun0003 }
case 300:
            var48 = var25.highlightColor;
case 299:
            var1['highlightColor'] = var48;
            var50 = var17 != var49;
            var48 = undefined;
            if(!var50) { _fun0003_ip = 301; continue _fun0003 }
case 302:
            var48 = var49;
case 301:
            var1['embeds'] = var48;
            if(var47) { _fun0003_ip = 303; continue _fun0003 }
case 304:
            var47 = new Array(0);
            _fun0003_ip = 305; continue _fun0003;
case 303:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 68;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createGiftCodeEmbed;
            var47 = var48.bind(var49)(var2, var19);
case 305:
            var1['giftCodes'] = var47;
            if(var44) { _fun0003_ip = 306; continue _fun0003 }
case 307:
            var44 = new Array(0);
            _fun0003_ip = 308; continue _fun0003;
case 306:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 69;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createCodedLinkEmbeds;
            var44 = var47.bind(var48)(var2, var39, var19);
case 308:
            var1['codedLinks'] = var44;
            var44 = undefined;
            if(!var46) { _fun0003_ip = 309; continue _fun0003 }
case 310:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 70;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityInstanceEmbed;
            var44 = var46.bind(var47)(var2);
case 309:
            var1['activityInstanceEmbed'] = var44;
            var44 = undefined;
            if(!var45) { _fun0003_ip = 311; continue _fun0003 }
case 312:
            var46 = _closure1_slot0;
            var47 = _closure1_slot2;
            var45 = 71;
            var45 = var47[var45];
            var46 = var46.bind(var5)(var45);
            var45 = var46.createActivityRichPresenceInviteEmbed;
            var44 = var45.bind(var46)(var2, var21);
case 311:
            var1['activityRichPresenceInviteEmbed'] = var44;
            if(!var37) { _fun0003_ip = 313; continue _fun0003 }
case 314:
            if(!var41) { _fun0003_ip = 315; continue _fun0003 }
case 316:
            if(var42) { _fun0003_ip = 317; continue _fun0003 }
case 318:
            var42 = var43;
case 317:
            var41 = var42;
case 315:
            if(var41) { _fun0003_ip = 319; continue _fun0003 }
case 320:
            var41 = var36;
case 319:
            var37 = var41;
case 313:
            var1['useAttachmentGridLayout'] = var37;
            var1['useAttachmentUploadPreview'] = var36;
            var1['attachments'] = var35;
            var41 = 1;
            var35 = var41;
            if(!var36) { _fun0003_ip = 321; continue _fun0003 }
case 322:
            var37 = var2.state;
            var36 = _closure1_slot24;
            var36 = var36.SEND_FAILED;
            var35 = var41;
            if(!(var37 === var36)) { _fun0003_ip = 321; continue _fun0003 }
case 323:
            var35 = 0.2;
case 321:
            var1['attachmentsOpacity'] = var35;
            var36 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 72;
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
            if(!var30) { _fun0003_ip = 324; continue _fun0003 }
case 325:
            var30 = var34;
case 324:
            var1['communicationDisabled'] = var30;
            var34 = var17 == var21;
            if(var34) { _fun0003_ip = 326; continue _fun0003 }
case 327:
            var30 = var21.isForumPost;
            var30 = var30.bind(var21)();
            var34 = !var30;
case 326:
            var30 = !var34;
            if(var34) { _fun0003_ip = 328; continue _fun0003 }
case 329:
            var35 = var2.id;
            var34 = var2.channel_id;
            var30 = var35 === var34;
case 328:
            var1['isFirstForumPostMessage'] = var30;
            var34 = var17 != var21;
            var30 = undefined;
            if(!var34) { _fun0003_ip = 330; continue _fun0003 }
case 331:
            var34 = var21.isForumPost;
            var34 = var34.bind(var21)();
            var30 = undefined;
            if(!var34) { _fun0003_ip = 330; continue _fun0003 }
case 332:
            var30 = undefined;
            if(!var33) { _fun0003_ip = 330; continue _fun0003 }
case 333:
            var33 = _closure1_slot30;
            var30 = var33.bind(var5)(var2, var21);
case 330:
            var1['postActions'] = var30;
            var30 = var2.author;
            var30 = var30.id;
            var30 = var30 === var32;
            var1['isCurrentUserMessageAuthor'] = var30;
            var30 = _closure1_slot6;
            var30 = var30.gradientPreset;
            var30 = var17 != var30;
            var1['usingGradientTheme'] = var30;
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 25;
            var33 = var35[var30];
            var37 = var32.bind(var5)(var33);
            var36 = var37.getAssetUriForEmbed;
            var34 = _closure1_slot1;
            var33 = 73;
            var33 = var35[var33];
            var33 = var34.bind(var5)(var33);
            var33 = var36.bind(var37)(var33);
            var1['swipeToReplyIconUrl'] = var33;
            var30 = var35[var30];
            var33 = var32.bind(var5)(var30);
            var32 = var33.getAssetUriForEmbed;
            var30 = 74;
            var30 = var35[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var32.bind(var33)(var30);
            var1['swipeToEditIconUrl'] = var30;
            var1['referralTrialOfferInfo'] = var28;
            if(var27) { _fun0003_ip = 334; continue _fun0003 }
case 335:
            var27 = new Array(0);
            _fun0003_ip = 336; continue _fun0003;
case 334:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 75;
            var28 = var32[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.createPostPreviewEmbeds;
            var27 = var28.bind(var30)(var2, var31);
case 336:
            var1['postPreviewEmbeds'] = var27;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var30 = 24;
            var31 = var28[var30];
            var31 = var27.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var28[var30];
            var30 = var27.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.2aXnfa;
            var30 = var31.bind(var32)(var30);
            var1['obscureLearnMoreLabel'] = var30;
            var30 = 76;
            var30 = var28[var30];
            var31 = var27.bind(var5)(var30);
            var30 = var31.createSafetyPolicyNoticeEmbed;
            var30 = var30.bind(var31)(var2);
            var1['safetyPolicyNoticeEmbed'] = var30;
            var1['pollData'] = var29;
            var1['sharedClientTheme'] = var24;
            var24 = 77;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var24 = var29.createSafetySystemNotificationEmbed;
            var24 = var24.bind(var29)(var2);
            var1['safetySystemNotificationEmbed'] = var24;
            var24 = 78;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var28 = var29.createCtaButton;
            var27 = var2.id;
            var24 = var2.channel_id;
            var24 = var28.bind(var29)(var27, var24, var25);
            var1['ctaButton'] = var24;
            var24 = undefined;
            if(!var26) { _fun0003_ip = 337; continue _fun0003 }
case 338:
            var24 = var25.embedBackgroundColor;
case 337:
            var1['audioAttachmentBackgroundColor'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 79;
            var24 = var26[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.createMessageAccessibilityActions;
            var24 = var24.bind(var25)(var2, var21);
            var1['accessibilityActions'] = var24;
            var1['clanTagGuildId'] = var23;
            var1['clanTag'] = var20;
            var1['clanBadgeUrl'] = var15;
            var1['isFirst'] = var12;
            var1['gameApplicationId'] = var4;
            var4 = var17 == var21;
            var15 = undefined;
            if(var4) { _fun0003_ip = 339; continue _fun0003 }
case 340:
            var15 = var21.type;
case 339:
            var4 = _closure1_slot26;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var15 === var4;
            var1['isAnnouncementChannel'] = var4;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var4 = 80;
            var4 = var20[var4];
            var20 = var15.bind(var5)(var4);
            var15 = var20.createDisplayNameStylesMobile;
            var4 = var2.author;
            var4 = var15.bind(var20)(var4, var22);
            var1['displayNameStyles'] = var4;
            return var1;
case 63:
            var4 = var2.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 341; continue _fun0003 }
case 342:
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
            if(var20) { _fun0003_ip = 343; continue _fun0003 }
case 344:
            var20 = var21.isForumPost;
            var17 = var20.bind(var21)();
case 343:
            var1['isForumPost'] = var17;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 345; continue _fun0003;
case 341:
            var4 = {};
            var15 = _closure1_slot29;
            r103 = undefined;
            r102 = var2;
            r101 = var13;
            r100 = var6;
            var100 = var16;
            var99 = var7;
            var15 = r103[var15](r102, r101, r100, var100, var99, var98);
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
            r101 = var16.bind(var17)(var15);
            r102 = var4;
            var15 = copyDataProperties(r102, r101);
            var1 = var4;
case 345:
            return var1;
case 61:
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
            r102 = var6;
            r101 = var7;
            var7 = copyDataProperties(r102, r101);
            var9 = false;
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[var7] = var8;
            var3['options'] = var6;
            r101 = var4.bind(var5)(var3);
            r102 = var1;
            var3 = copyDataProperties(r102, r101);
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
    var4 = 81;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();