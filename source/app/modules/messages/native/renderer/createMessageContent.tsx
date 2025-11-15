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
            var2 = _closure1_slot24;
            var2 = var2.HAS_THREAD;
            var2 = var3.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var9 = _closure1_slot14;
            var5 = var9.getMostRecentMessage;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 21;
            var3 = var10[var6];
            var8 = undefined;
            var13 = var11.bind(var8)(var3);
            var12 = var13.castMessageIdAsChannelId;
            var3 = var1.id;
            var3 = var12.bind(var13)(var3);
            var9 = var5.bind(var9)(var3);
            var5 = _closure1_slot14;
            var3 = var5.getCount;
            var6 = var10[var6];
            var11 = var11.bind(var8)(var6);
            var6 = var11.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var6.bind(var11)(var1);
            var3 = var3.bind(var5)(var1);
            var5 = _closure1_slot0;
            var1 = 22;
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
            var3 = 23;
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
            var2 = _closure1_slot22;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var3 = var9.type;
            var2 = _closure1_slot22;
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
            var10 = _closure1_slot21;
            var10 = var10.LOADED;
            var3['state'] = var10;
            var11 = _closure1_slot30;
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
            var10 = 23;
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
            var9 = 23;
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
            var5 = 23;
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
            var5 = 24;
            var5 = var9[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var6.getAssetUriForEmbed;
            var7 = _closure1_slot1;
            var4 = 25;
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
    var _closure1_slot28 = var1;
    var1 = function getForumPostActions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.id;
            var1 = var3.channel_id;
            if(!(var4 !== var1)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var1 = undefined;
            return var1;
case 26:
            var6 = _closure1_slot13;
            var5 = var6.hasJoined;
            var4 = var3.channel_id;
            var7 = var5.bind(var6)(var4);
            var3 = var3.reactions;
            var4 = var3.length;
            var3 = 0;
            var6 = var3 !== var4;
            var3 = undefined;
            var5 = undefined;
            if(var6) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var9 = _closure1_slot17;
            var8 = var9.getChannel;
            var4 = var2.parent_id;
            var4 = var8.bind(var9)(var4);
            var10 = null;
            var8 = var10 == var4;
            var11 = undefined;
            if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var11 = var4.defaultReactionEmoji;
case 30:
            var8 = var10 == var11;
            var4 = undefined;
            if(var8) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = var11.emojiId;
case 32:
            var4 = var10 != var4;
            var10 = null;
            if(!var4) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var9 = _closure1_slot7;
            var8 = var9.getUsableCustomEmojiById;
            var4 = var11.emojiId;
            var10 = var8.bind(var9)(var4);
case 34:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 26;
            var4 = var9[var4];
            var9 = var8.bind(var3)(var4);
            var8 = var9.createDefaultReaction;
            var4 = {};
            var4['defaultReactionEmoji'] = var11;
            var4['customGuildEmoji'] = var10;
            var5 = var8.bind(var9)(var4);
case 28:
            var8 = _closure1_slot10;
            var4 = var8.shouldDisplayPrompt;
            var2 = var2.id;
            var4 = var4.bind(var8)(var2);
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 26;
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
    var _closure1_slot29 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var92 = var1.messageForward;
            var14 = var1.roleStyle;
            var13 = var1.isFirst;
            var12 = var1.isEditing;
            var11 = var1.canShowImages;
            var10 = var1.isSystemDM;
            var6 = var1.isInlineReplyPreview;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var6 = false;
case 36:
            var7 = var1.options;
            var66 = var1.pushFeedbackType;
            var50 = var1.renderContentOnly;
            var31 = var1.showContentInventoryEntryFallbackEmbed;
            var22 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var19 = var7.inlineEmbedMedia;
            var17 = var7.inlineAttachmentMedia;
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
            var21 = var7.renderThreadEmbeds;
            var23 = var7.renderReplies;
            var30 = var7.renderCommunicationDisabled;
            var41 = var7.renderAttachments;
            var53 = var7.renderExecutedCommands;
            var16 = var7.renderPolls;
            var4 = var7.renderSharedClientTheme;
            var33 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var35 = var7.ignoreEmbedDescriptionCache;
            var40 = var7.forceHideSimpleEmbedContent;
            var58 = var7.shouldObscureSpoiler;
            var60 = var7.shouldDisableInteractiveComponents;
            var8 = var7.useAlternateEmbedColors;
            var36 = var7.shouldFilterKeywords;
            var18 = null;
            if(!(var18 == var20)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var1 = _closure1_slot15;
            var20 = var1.theme;
case 38:
            var24 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 30;
            var1 = var9[var1];
            var1 = var24.bind(var5)(var1);
            var25 = var1.bind(var5)(var20, var8);
            var8 = _closure1_slot0;
            var1 = 31;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var26 = var1.CustomThemeShareReceiveExperiment;
            var24 = var26.getCurrentConfig;
            var8 = {};
            var1 = 'createMessageContent';
            var8['location'] = var1;
            var1 = {};
            var9 = false;
            var1['autoTrackExposure'] = var9;
            var1 = var24.bind(var26)(var8, var1);
            var1 = var1.enabled;
            var8 = true;
            var59 = var8 === var11;
            var27 = var59;
            if(!var59) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var27 = var22;
case 40:
            if(!var27) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var24 = var2.type;
            var22 = _closure1_slot22;
            var22 = var22.CUSTOM_GIFT;
            var27 = var24 !== var22;
case 42:
            var34 = var59;
            if(!var59) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var34 = var19;
case 44:
            var37 = var59;
            if(!var37) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var37 = var17;
case 46:
            var22 = _closure1_slot17;
            var19 = var22.getChannel;
            var17 = var2.getChannelId;
            var17 = var17.bind(var2)();
            var22 = var19.bind(var22)(var17);
            var24 = _closure1_slot17;
            var19 = var24.getChannel;
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var17 = 21;
            var17 = var28[var17];
            var28 = var26.bind(var5)(var17);
            var26 = var28.castMessageIdAsChannelId;
            var17 = var2.id;
            var17 = var26.bind(var28)(var17);
            var17 = var19.bind(var24)(var17);
            var24 = var18 == var22;
            var19 = undefined;
            if(var24) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var24 = var22.getGuildId;
            var19 = var24.bind(var22)();
case 48:
            var24 = var2.author;
            var28 = var24.id;
            var26 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 32;
            var24 = var29[var24];
            var26 = var26.bind(var5)(var24);
            var24 = var26.getHasEnhancedRoleColors;
            var72 = var24.bind(var26)(var19, var28);
            var62 = var19;
            if(!(var18 == var92)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = 33;
            var19 = var26[var19];
            var24 = var24.bind(var5)(var19);
            var19 = var24.maybeCreateSingleForwardForMessage;
            var92 = var19.bind(var24)(var2);
case 50:
            var39 = var2;
            if(!(var18 != var92)) { _fun0003_ip = 20; continue _fun0003 }
case 52:
            var19 = var92.messageSnapshot;
            var39 = var19.message;
case 20:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var24 = _closure1_slot1;
            var26 = _closure1_slot2;
            var15 = 34;
            var15 = var26[var15];
            var24 = var24.bind(var5)(var15);
            var15 = {};
            var26 = var2.reactions;
            var15['reactions'] = var26;
            var15['animateEmoji'] = var77;
            var19 = var24.bind(var5)(var15);
case 53:
            var26 = var2.type;
            var15 = _closure1_slot22;
            var24 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var26 === var24)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var28 = _closure1_slot11;
            var26 = var28.getMessageByReference;
            var24 = var2.messageReference;
            var26 = var26.bind(var28)(var24);
            var29 = var26.state;
            var24 = _closure1_slot12;
            var28 = var24.LOADED;
            var24 = null;
            if(!(var29 === var28)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var24 = var26.message;
case 57:
            var15 = var24;
case 55:
            if(!(var18 == var15)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var24 = 35;
            var24 = var28[var24];
            var24 = var26.bind(var5)(var24);
            var24 = var24.bind(var5)(var2);
            if(var24) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var65 = !var13;
            if(var65) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var65 = var50;
case 63:
            var69 = var2.author;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 37;
            var24 = var28[var24];
            var28 = var26.bind(var5)(var24);
            var26 = var28.isMessageNewerThanImprovedMarkdownEpoch;
            var29 = var2.editedTimestamp;
            if(!(var18 == var29)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var29 = var2.timestamp;
case 65:
            var24 = var29.valueOf;
            var24 = var24.bind(var29)();
            var32 = var26.bind(var28)(var24);
            var24 = var39.content;
            if(!(var18 != var24)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var26 = var39.content;
            var24 = '';
            if(!(var24 === var26)) { _fun0003_ip = 69; continue _fun0003 }
case 67:
            var24 = {};
            var24['content'] = var5;
            var24['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 70; continue _fun0003;
case 69:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 38;
            var26 = var29[var26];
            var29 = var28.bind(var5)(var26);
            var28 = var29.parseMessageMarkup;
            if(var40) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var26 = var27;
            if(!var26) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var26 = var34;
case 73:
            var40 = var26;
case 71:
            var26 = var18 != var17;
            if(!var26) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var42 = var2.isFirstMessageInForumPost;
            var26 = var42.bind(var2)(var17);
case 75:
            r104 = var29;
            r103 = var2;
            r102 = var39;
            r101 = var40;
            r100 = var6;
            var100 = var26;
            var99 = var32;
            var98 = var32;
            var97 = var36;
            var24 = r104[var28](r103, r102, r101, r100, var100, var99, var98, var97, var96);
case 70:
            var26 = var24.content;
            var36 = var24.hasSpoilerEmbeds;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 39;
            var24 = var29[var24];
            var40 = var28.bind(var5)(var24);
            var24 = var40.getEnabledHarmTypesForMessage;
            var57 = var24.bind(var40)(var2);
            var24 = 40;
            var24 = var29[var24];
            var28 = var28.bind(var5)(var24);
            var24 = var28.shouldAgeVerifyForExplicitMedia;
            var56 = var24.bind(var28)();
            var29 = undefined;
            if(!var27) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var28 = _closure1_slot1;
            var40 = _closure1_slot2;
            var24 = 41;
            var24 = var40[var24];
            var28 = var28.bind(var5)(var24);
            var24 = {};
            var40 = var39.embeds;
            var24['embeds'] = var40;
            var40 = var2.channel_id;
            var24['channelId'] = var40;
            var24['gifAutoPlay'] = var54;
            var24['hasSpoilerEmbeds'] = var36;
            var24['ignoreEmbedDescriptionCache'] = var35;
            var24['shouldInlineEmbedMedia'] = var34;
            var24['colors'] = var25;
            var24['showListsAndHeaders'] = var32;
            var24['showMaskedLinks'] = var32;
            var32 = var25.embedBackgroundColor;
            var24['themedBackgroundColor'] = var32;
            var24['enabledContentHarmTypeFlags'] = var57;
            var24['shouldAgeVerify'] = var56;
            var32 = var2.author;
            var32 = var32.bot;
            var24['authorIsBot'] = var32;
            var24['showContentInventoryEntryFallbackEmbed'] = var31;
            var29 = var28.bind(var5)(var24);
case 77:
            var28 = _closure1_slot1;
            var31 = _closure1_slot2;
            var24 = 42;
            var24 = var31[var24];
            var28 = var28.bind(var5)(var24);
            var24 = {};
            var24['message'] = var2;
            var24['isSystemDM'] = var10;
            var24['channel'] = var22;
            var24['colors'] = var25;
            var24 = var28.bind(var5)(var24);
            var87 = var24.tagText;
            var86 = var24.tagVerified;
            var85 = var24.tagTextColor;
            var84 = var24.tagBackgroundColor;
            var83 = var24.tagType;
            var82 = var24.tagIconUrl;
            var81 = var24.opTagText;
            var80 = var24.opTagTextColor;
            var79 = var24.opTagBackgroundColor;
            var31 = _closure1_slot20;
            var28 = var31.getUploaderFileForMessageId;
            var24 = var2.id;
            var28 = var28.bind(var31)(var24);
            var36 = var18 != var28;
            var31 = var2.state;
            var24 = _closure1_slot23;
            var24 = var24.SEND_FAILED;
            var24 = var31 !== var24;
            if(var24) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var31 = var2.isCommandType;
            var24 = var31.bind(var2)();
case 79:
            var31 = var29;
            if(var24) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var24 = var29;
            if(!(var18 == var29)) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var24 = new Array(0);
case 83:
            var32 = var24.push;
            var34 = _closure1_slot1;
            var35 = _closure1_slot2;
            var29 = 43;
            var29 = var35[var29];
            var34 = var34.bind(var5)(var29);
            var29 = {};
            var29['uploaderFile'] = var28;
            var29['useAttachmentUploadPreview'] = var36;
            var29['colors'] = var25;
            var29 = var34.bind(var5)(var29);
            var29 = var32.bind(var24)(var29);
            var31 = var24;
case 81:
            var32 = _closure1_slot8;
            var29 = var32.getMessage;
            var24 = var2.id;
            var29 = var29.bind(var32)(var24);
            var49 = var31;
            if(!(var18 != var29)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var24 = var31;
            if(!(var18 == var31)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var24 = new Array(0);
case 87:
            var35 = var29.errorMessage;
            var31 = var24.push;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = 43;
            var29 = var34[var29];
            var34 = var32.bind(var5)(var29);
            var32 = var34.createAutomodBlockedMessageEmbed;
            var29 = {};
            var29['errorMessage'] = var35;
            var29['colors'] = var25;
            var29 = var32.bind(var34)(var29);
            var29 = var31.bind(var24)(var29);
            var49 = var24;
case 85:
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var34 = 44;
            var24 = var31[var34];
            var35 = var29.bind(var5)(var24);
            var32 = var35.getUserAuthor;
            var24 = var2.author;
            var24 = var32.bind(var35)(var24, var22);
            var48 = var24.guildMemberAvatar;
            var35 = var24.guildMemberAvatarDecoration;
            var32 = var24.iconRoleId;
            var24 = 45;
            var24 = var31[var24];
            var31 = var29.bind(var5)(var24);
            var29 = var31.ensureAvatarSource;
            var24 = var2.isInteractionPlaceholder;
            var24 = var24.bind(var2)();
            if(!var24) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var24 = var2.author;
            var24 = var24.avatar;
            if(!(var18 == var24)) { _fun0003_ip = 89; continue _fun0003 }
case 91:
            if(!(var18 == var48)) { _fun0003_ip = 89; continue _fun0003 }
case 92:
            var40 = var2.application;
            var42 = var18 == var40;
            var24 = undefined;
            if(var42) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var24 = var40.icon;
case 93:
            if(!(var18 == var24)) { _fun0003_ip = 95; continue _fun0003 }
case 89:
            if(!(var18 != var48)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            if(!(var18 == var62)) { _fun0003_ip = 98; continue _fun0003 }
case 96:
            var24 = var69.getAvatarSource;
            var24 = var24.bind(var69)(var5);
            _fun0003_ip = 99; continue _fun0003;
case 98:
            var42 = _closure1_slot1;
            var43 = _closure1_slot2;
            var40 = 46;
            var40 = var43[var40];
            var43 = var42.bind(var5)(var40);
            var42 = var43.getGuildMemberAvatarSource;
            var40 = {};
            var51 = var69.id;
            var40['userId'] = var51;
            var40['avatar'] = var48;
            var40['guildId'] = var62;
            var24 = var42.bind(var43)(var40, var69);
case 99:
            _fun0003_ip = 100; continue _fun0003;
case 95:
            var42 = _closure1_slot1;
            var43 = _closure1_slot2;
            var40 = 46;
            var40 = var43[var40];
            var43 = var42.bind(var5)(var40);
            var42 = var43.getApplicationIconSource;
            var40 = {};
            var48 = var2.application;
            var48 = var48.id;
            var40['id'] = var48;
            var48 = var2.application;
            var48 = var48.icon;
            var40['icon'] = var48;
            var48 = var2.application;
            var48 = var48.bot;
            var40['bot'] = var48;
            var24 = var42.bind(var43)(var40);
case 100:
            var76 = var29.bind(var31)(var24);
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 46;
            var24 = var31[var24];
            var31 = var29.bind(var5)(var24);
            var29 = var31.getAvatarDecorationURL;
            var24 = {};
            if(!(var18 == var35)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var35 = var69.avatarDecoration;
case 101:
            var24['avatarDecoration'] = var35;
            var43 = _closure1_slot0;
            var48 = _closure1_slot2;
            var35 = 47;
            var35 = var48[var35];
            var42 = var43.bind(var5)(var35);
            var40 = var42.getDecorationSizeForAvatarSize;
            var35 = 48;
            var35 = var48[var35];
            var35 = var43.bind(var5)(var35);
            var35 = var35.AvatarSizes;
            var35 = var35.NORMAL;
            var35 = var40.bind(var42)(var35);
            var24['size'] = var35;
            var75 = var29.bind(var31)(var24);
            var24 = var18 != var32;
            var68 = undefined;
            if(!var24) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var24 = var18 != var62;
            var68 = undefined;
            if(!var24) { _fun0003_ip = 103; continue _fun0003 }
case 105:
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 49;
            var24 = var31[var24];
            var31 = var29.bind(var5)(var24);
            var29 = var31.getRoleIcon;
            var24 = {};
            var24['guildId'] = var62;
            var24['roleId'] = var32;
            var32 = 18;
            var24['size'] = var32;
            var68 = var29.bind(var31)(var24);
case 103:
            var29 = var2.hasFlag;
            var24 = _closure1_slot24;
            var24 = var24.SOURCE_MESSAGE_DELETED;
            var24 = var29.bind(var2)(var24);
            if(!var24) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var24 = 23;
            var29 = var35[var24];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var24 = var35[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.JOtgSw;
            var26 = var29.bind(var31)(var24);
case 106:
            var29 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var34];
            var29 = var29.bind(var5)(var24);
            var24 = var29.getMessageAuthor;
            var24 = var24.bind(var29)(var2);
            var73 = var24.nick;
            var71 = var24.colorString;
            var74 = var24.colorStrings;
            var29 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.INTERACTION_PREMIUM_UPSELL;
            if(!(var29 === var24)) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var29 = _closure1_slot0;
            var35 = _closure1_slot2;
            var24 = 23;
            var31 = var35[var24];
            var31 = var29.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var24 = var35[var24];
            var24 = var29.bind(var5)(var24);
            var24 = var24.t;
            var29 = var24.u4A+xK;
            var24 = {};
            var24['appName'] = var73;
            var26 = var31.bind(var32)(var29, var24);
case 108:
            var29 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.REPLY;
            var93 = undefined;
            if(!(var29 === var24)) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var93 = undefined;
            if(!var23) { _fun0003_ip = 110; continue _fun0003 }
case 112:
            var29 = _closure1_slot11;
            var24 = var29.getMessageByReference;
            var23 = var2.messageReference;
            var23 = var24.bind(var29)(var23);
            var29 = var23.state;
            var24 = _closure1_slot12;
            var24 = var24.LOADED;
            if(!(var24 !== var29)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var24 = _closure1_slot12;
            var24 = var24.NOT_LOADED;
            if(!(var24 !== var29)) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var24 = _closure1_slot12;
            var24 = var24.DELETED;
            if(!(var24 !== var29)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 51;
            var24 = var31[var24];
            var29 = var29.bind(var5)(var24);
            var24 = var29.assertNever;
            var24 = var24.bind(var29)(var23);
            var93 = undefined;
            _fun0003_ip = 110; continue _fun0003;
case 117:
            var24 = {};
            var29 = _closure1_slot21;
            var29 = var29.SYSTEM;
            var24['state'] = var29;
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var29 = 23;
            var31 = var40[var29];
            var31 = var35.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var29 = var40[var29];
            var29 = var35.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.mE3KJN;
            var29 = var31.bind(var32)(var29);
            var24['content'] = var29;
            var93 = var24;
            _fun0003_ip = 110; continue _fun0003;
case 115:
            var24 = {};
            var29 = _closure1_slot21;
            var29 = var29.SYSTEM;
            var24['state'] = var29;
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var29 = 23;
            var31 = var40[var29];
            var31 = var35.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var29 = var40[var29];
            var29 = var35.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.1i+hMi;
            var29 = var31.bind(var32)(var29);
            var24['content'] = var29;
            var93 = var24;
            _fun0003_ip = 110; continue _fun0003;
case 113:
            var23 = var23.message;
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var24 = 33;
            var24 = var31[var24];
            var29 = var29.bind(var5)(var24);
            var24 = var29.maybeCreateSingleForwardForMessage;
            var31 = var24.bind(var29)(var23);
            var29 = _closure1_slot19;
            var24 = var29.isBlockedForMessage;
            var24 = var24.bind(var29)(var23);
            if(var24) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var29 = _closure1_slot19;
            var24 = var29.isIgnoredForMessage;
            var24 = var24.bind(var29)(var23);
            if(var24) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var29 = _closure1_slot30;
            var24 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var24['message'] = var23;
            var24['messageForward'] = var31;
            var24['roleStyle'] = var14;
            var32 = {};
            r103 = var32;
            r102 = var7;
            var35 = copyDataProperties(r103, r102);
            var35 = 'renderReplies';
            var32[var35] = var9;
            var24['options'] = var32;
            var29 = var29.bind(var5)(var24);
            if(!(var18 != var29)) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var24 = 'username';
            var24 = var24 in var29;
            if(!var24) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var34];
            var32 = var32.bind(var5)(var24);
            var24 = var32.getMessageAuthor;
            var24 = var24.bind(var32)(var23);
            var32 = var24.nick;
            var34 = var24.colorString;
            if(!(var18 == var32)) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var24 = var23.author;
            var32 = var24.username;
case 127:
            var35 = var18 != var32;
            var24 = undefined;
            if(!var35) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var24 = var32;
case 129:
            var29['username'] = var24;
            if(var65) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var32 = _closure1_slot3;
            var35 = var18 != var34;
            var24 = undefined;
            if(!var35) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var24 = var34;
case 133:
            var24 = var32.bind(var5)(var24);
            if(!(var18 == var24)) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var24 = var29.colorString;
case 135:
            _fun0003_ip = 137; continue _fun0003;
case 131:
            var24 = var29.colorString;
case 137:
            var29['colorString'] = var24;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var24 = 50;
            var24 = var34[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.bind(var5)(var2, var23);
            if(!var24) { _fun0003_ip = 125; continue _fun0003 }
case 138:
            var32 = var29.username;
            var24 = '@';
            var24 = var24 + var32;
            var29['username'] = var24;
case 125:
            var32 = var18 == var31;
            var24 = undefined;
            if(var32) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var31 = var31.messageSnapshot;
            var24 = var31.message;
case 139:
            var34 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 141; continue _fun0003 }
case 142:
            var34 = var24;
case 141:
            var24 = 'stickers';
            var24 = var24 in var34;
            if(var24) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var24 = new Array(0);
            _fun0003_ip = 145; continue _fun0003;
case 143:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 27;
            var31 = var35[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.getMessageStickers;
            var24 = var31.bind(var32)(var34);
case 145:
            var24 = var24.length;
            var31 = 0;
            if(!(!(var24 > var31))) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var24 = 'interaction';
            var24 = var24 in var34;
            if(!var24) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var24 = var34.interaction;
            if(!(var18 != var24)) { _fun0003_ip = 148; continue _fun0003 }
case 150:
            var32 = var34.content;
            var24 = '';
            if(!(var24 !== var32)) { _fun0003_ip = 151; continue _fun0003 }
case 148:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var35 = 28;
            var24 = var24[var35];
            var42 = var32.bind(var5)(var24);
            var40 = var42.hasFlag;
            var32 = var34.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_VOICE_MESSAGE;
            var24 = var40.bind(var42)(var32, var24);
            if(var24) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var32 = var34.type;
            var24 = _closure1_slot22;
            var24 = var24.POLL_RESULT;
            if(!(var32 !== var24)) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var35];
            var40 = var32.bind(var5)(var24);
            var35 = var40.hasFlag;
            var32 = var34.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_COMPONENTS_V2;
            var24 = var35.bind(var40)(var32, var24);
            if(var24) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var24 = var34.embeds;
            var24 = var24.length;
            if(!(!(var24 > var31))) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var24 = var34.attachments;
            var24 = var24.length;
            if(!(!(var24 > var31))) { _fun0003_ip = 158; continue _fun0003 }
case 160:
            var32 = var34.content;
            var31 = '';
            var24 = null;
            if(!(var31 === var32)) { _fun0003_ip = 161; continue _fun0003 }
case 158:
            var40 = _closure1_slot0;
            var42 = _closure1_slot2;
            var31 = 23;
            var32 = var42[var31];
            var32 = var40.bind(var5)(var32);
            var35 = var32.intl;
            var32 = var35.string;
            var31 = var42[var31];
            var31 = var40.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.JAKsM8;
            var24 = var32.bind(var35)(var31);
case 161:
            _fun0003_ip = 162; continue _fun0003;
case 156:
            var40 = _closure1_slot0;
            var42 = _closure1_slot2;
            var31 = 23;
            var32 = var42[var31];
            var32 = var40.bind(var5)(var32);
            var35 = var32.intl;
            var32 = var35.string;
            var31 = var42[var31];
            var31 = var40.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.Xxm5i3;
            var24 = var32.bind(var35)(var31);
case 162:
            _fun0003_ip = 163; continue _fun0003;
case 154:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var31 = 29;
            var31 = var35[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.getPollResultsReplyPreviewMobile;
            var24 = var31.bind(var32)(var34);
case 163:
            _fun0003_ip = 164; continue _fun0003;
case 152:
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = 23;
            var32 = var40[var31];
            var32 = var35.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var40[var31];
            var31 = var35.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.6bhHrc;
            var24 = var32.bind(var34)(var31);
case 164:
            _fun0003_ip = 165; continue _fun0003;
case 151:
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = 23;
            var32 = var40[var31];
            var32 = var35.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var40[var31];
            var31 = var35.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.2v7kfl;
            var24 = var32.bind(var34)(var31);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 146:
            var35 = _closure1_slot0;
            var40 = _closure1_slot2;
            var31 = 23;
            var32 = var40[var31];
            var32 = var35.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var40[var31];
            var31 = var35.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.7K5Lma;
            var24 = var32.bind(var34)(var31);
case 166:
            var31 = var23.type;
            var23 = _closure1_slot22;
            var23 = var23.POLL_RESULT;
            if(!(var31 === var23)) { _fun0003_ip = 167; continue _fun0003 }
case 168:
            var29['content'] = var24;
case 167:
            var23 = {};
            var31 = _closure1_slot21;
            var31 = var31.LOADED;
            var23['state'] = var31;
            var23['message'] = var29;
            var93 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 110; continue _fun0003 }
case 169:
            var23['systemContent'] = var24;
            var93 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 123:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 23;
            var29 = var34[var24];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var24 = var34[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.1i+hMi;
            var24 = var29.bind(var31)(var24);
            var23['content'] = var24;
            var93 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 121:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 23;
            var29 = var34[var24];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var24 = var34[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.G7p6v/;
            var24 = var29.bind(var31)(var24);
            var23['content'] = var24;
            var93 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 119:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 23;
            var29 = var34[var24];
            var29 = var32.bind(var5)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var24 = var34[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.XAkOo2;
            var24 = var29.bind(var31)(var24);
            var23['content'] = var24;
            var93 = var23;
case 110:
            var90 = undefined;
            if(!var21) { _fun0003_ip = 170; continue _fun0003 }
case 171:
            var21 = _closure1_slot28;
            r104 = undefined;
            r103 = var2;
            r102 = var14;
            r101 = var6;
            r100 = var17;
            var100 = var7;
            var90 = r104[var21](r103, r102, r101, r100, var100, var99);
case 170:
            var23 = _closure1_slot9;
            var21 = var23.getInteraction;
            var61 = var21.bind(var23)(var2);
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 52;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.createInteractionStatus;
            var51 = var21.bind(var23)(var2, var61);
            var23 = var18 != var62;
            var21 = null;
            if(!var23) { _fun0003_ip = 172; continue _fun0003 }
case 173:
            var29 = _closure1_slot18;
            var24 = var29.getMember;
            var23 = var69.id;
            var21 = var24.bind(var29)(var62, var23);
case 172:
            var24 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 53;
            var23 = var29[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isMemberCommunicationDisabled;
            var34 = var23.bind(var24)(var21);
            var23 = _closure1_slot4;
            var31 = var23.useReducedMotion;
            var23 = _closure1_slot4;
            var64 = var23.alwaysShowLinkDecorations;
            var23 = var18 == var22;
            var32 = var21;
            var21 = undefined;
            if(var23) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var21 = var22.parent_id;
case 174:
            var29 = var22;
            if(!(var18 != var21)) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var29 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 176; continue _fun0003 }
case 178:
            var21 = var22.isThread;
            var21 = var21.bind(var22)();
            var29 = var22;
            if(!var21) { _fun0003_ip = 176; continue _fun0003 }
case 179:
            var24 = _closure1_slot17;
            var23 = var24.getChannel;
            var21 = var22.parent_id;
            var29 = var23.bind(var24)(var21);
case 176:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 54;
            var21 = var24[var21];
            var24 = var23.bind(var5)(var21);
            var23 = var24.getVisibleConnectionsRole;
            var21 = {};
            var21['guildMember'] = var32;
            var21['channel'] = var29;
            var21['onlyChannelConnectionRoles'] = var8;
            var70 = var23.bind(var24)(var21);
            var21 = var39.attachments;
            var21 = var21.length;
            var48 = 0;
            var42 = var48 !== var21;
            var21 = var39.embeds;
            var21 = var21.length;
            var43 = var48 !== var21;
            var21 = var36;
            if(!var36) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var23 = var2.attachments;
            var23 = var23.length;
            var21 = var48 === var23;
case 180:
            if(!var21) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var21 = var18 != var28;
case 182:
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var40 = 55;
            var23 = var23[var40];
            var23 = var24.bind(var5)(var23);
            var24 = var23.ViewImageDescriptions;
            var23 = var24.getSetting;
            var55 = var23.bind(var24)();
            var35 = new Array(0);
            if(var21) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            if(!var41) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var24 = _closure1_slot1;
            var29 = _closure1_slot2;
            var23 = 57;
            var23 = var29[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var29 = var39.attachments;
            var23['attachments'] = var29;
            var63 = _closure1_slot20;
            var32 = var63.getUploadAttachments;
            var29 = var2.nonce;
            var29 = var32.bind(var63)(var29);
            var23['uploadAttachments'] = var29;
            var23['shouldInlineAttachmentMedia'] = var37;
            var23['gifAutoPlay'] = var54;
            var23['viewImageDescriptions'] = var55;
            var23['useReducedMotion'] = var31;
            var23['shouldObscureSpoiler'] = var58;
            var29 = var25.embedBackgroundColor;
            var23['themedBackgroundColor'] = var29;
            var23['enabledContentHarmTypeFlags'] = var57;
            var23['shouldAgeVerify'] = var56;
            var23['colors'] = var25;
            var35 = var24.bind(var5)(var23);
            _fun0003_ip = 186; continue _fun0003;
case 184:
            var24 = _closure1_slot1;
            var29 = _closure1_slot2;
            var23 = 56;
            var23 = var29[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var28;
            var29 = var2.state;
            var28 = _closure1_slot23;
            var28 = var28.SEND_FAILED;
            var28 = var29 === var28;
            var23['isFailedMessage'] = var28;
            var23['shouldInlineAttachmentMedia'] = var37;
            var35 = var24.bind(var5)(var23);
case 186:
            if(!var21) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            var23 = var2.state;
            var21 = _closure1_slot23;
            var21 = var21.SEND_FAILED;
            if(!(var23 === var21)) { _fun0003_ip = 190; continue _fun0003 }
case 188:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 58;
            var21 = var24[var21];
            var24 = var23.bind(var5)(var21);
            var23 = var24.calendarFormat;
            var21 = var2.timestamp;
            var67 = var23.bind(var24)(var21, var8);
            _fun0003_ip = 191; continue _fun0003;
case 190:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var21 = 23;
            var23 = var29[var21];
            var23 = var28.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var29[var21];
            var21 = var28.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.yXY+5J;
            var67 = var23.bind(var24)(var21);
case 191:
            var23 = _closure1_slot16;
            var21 = var23.getId;
            var32 = var21.bind(var23)();
            var21 = var2.isUnsupported;
            var63 = var26;
            if(!var21) { _fun0003_ip = 192; continue _fun0003 }
case 193:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var21 = 23;
            var23 = var29[var21];
            var23 = var28.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var29[var21];
            var21 = var28.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.sWi5EU;
            var63 = var23.bind(var24)(var21);
case 192:
            var21 = var2.isPoll;
            var21 = var21.bind(var2)();
            var21 = !var21;
            if(var21) { _fun0003_ip = 194; continue _fun0003 }
case 195:
            var23 = !var6;
            if(!var23) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var23 = var16;
case 196:
            var21 = var23;
case 194:
            if(var21) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var23 = var18 != var26;
            if(!var23) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var24 = '';
            var23 = var24 !== var26;
case 200:
            var21 = var23;
case 198:
            if(var21) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 29;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.getPollReplyPreview;
            var63 = var21.bind(var23)(var2);
case 202:
            var29 = undefined;
            if(!var16) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = 59;
            var16 = var23[var16];
            var21 = var21.bind(var5)(var16);
            var16 = {};
            var16['theme'] = var20;
            var16['animateEmoji'] = var77;
            var29 = var21.bind(var5)(var2, var5, var16);
case 204:
            var24 = undefined;
            if(!var4) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var24 = undefined;
            if(!var1) { _fun0003_ip = 206; continue _fun0003 }
case 208:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 60;
            var1 = var16[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var24 = var1.bind(var4)(var2, var76, var73);
case 206:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 61;
            var1 = var1[var94];
            var21 = var4.bind(var5)(var1);
            var16 = var21.shouldDisplayGuildTag;
            var4 = var69.id;
            var23 = var18 != var62;
            var1 = undefined;
            if(!var23) { _fun0003_ip = 209; continue _fun0003 }
case 210:
            var1 = var62;
case 209:
            var1 = var16.bind(var21)(var4, var1);
            var23 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 211; continue _fun0003 }
case 212:
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
            var89 = var18 != var1;
            var1 = undefined;
            if(!var89) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            var91 = _closure1_slot0;
            var89 = _closure1_slot2;
            var89 = var89[var94];
            var95 = var91.bind(var5)(var89);
            var94 = var95.getGuildTagBadgeUrl;
            var91 = var28.guildId;
            var89 = var28.badge;
            var28 = _closure1_slot26;
            var28 = var28.SIZE_12;
            var1 = var94.bind(var95)(var91, var89, var28);
case 213:
            var16 = var1;
            var23 = var26;
            var21 = var4;
case 211:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var95 = 28;
            var1 = var1[var95];
            var28 = var4.bind(var5)(var1);
            var26 = var28.hasFlag;
            var1 = var2;
            if(!(var18 != var39)) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var1 = var39;
case 215:
            var4 = var1.flags;
            var1 = _closure1_slot24;
            var1 = var1.IS_VOICE_MESSAGE;
            var26 = var26.bind(var28)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var32;
            var1['message'] = var2;
            var1['theme'] = var20;
            var94 = var1.currentUserId;
            var91 = var1.message;
            var89 = var1.theme;
            var1 = var91.referralTrialOfferId;
            var28 = var91.type;
            var4 = _closure1_slot22;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var28 === var4)) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            if(!(var18 != var1)) { _fun0003_ip = 217; continue _fun0003 }
case 219:
            var1 = {};
            var28 = _closure1_slot0;
            var96 = _closure1_slot2;
            var4 = 20;
            var4 = var96[var4];
            var28 = var28.bind(var5)(var4);
            var4 = var28.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var28)(var91, var89, var94);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 220; continue _fun0003;
case 217:
            var1 = _closure1_slot27;
case 220:
            var28 = var1.referralTrialOfferDataUpdated;
            var91 = _closure1_slot5;
            var4 = var91.getApplication;
            var94 = var2.applicationId;
            var96 = var18 != var94;
            var89 = '';
            var1 = var89;
            if(!var96) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var1 = var94;
case 221:
            var1 = var4.bind(var91)(var1);
            var91 = var18 != var1;
            if(!var91) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var94 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var95];
            var96 = var94.bind(var5)(var4);
            var95 = var96.hasFlag;
            var94 = var2.flags;
            var4 = _closure1_slot24;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var91 = var95.bind(var96)(var94, var4);
case 223:
            var4 = undefined;
            if(!var91) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var4 = var1.id;
case 225:
            var1 = {};
            var91 = var2.id;
            var1['id'] = var91;
            var91 = var2.channel_id;
            var1['channelId'] = var91;
            var94 = var18 != var62;
            var91 = undefined;
            if(!var94) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var91 = var62;
case 227:
            var1['guildId'] = var91;
            var91 = var2;
            if(!(var18 != var39)) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var91 = var39;
case 229:
            var91 = var91.flags;
            var1['flags'] = var91;
            var91 = var2.type;
            var1['type'] = var91;
            var91 = var2.nonce;
            if(!(var18 != var91)) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var91 = var2.nonce;
            var94 = 'string';
            var91 = typeof var91;
            if(!(var94 === var91)) { _fun0003_ip = 233; continue _fun0003 }
case 231:
            var91 = var2.nonce;
            _fun0003_ip = 234; continue _fun0003;
case 233:
            var94 = global;
            var95 = var94.String;
            var94 = var2.nonce;
            var91 = var95.bind(var5)(var94);
case 234:
            var1['nonce'] = var91;
            var91 = var2.state;
            var1['state'] = var91;
            var1['reactions'] = var19;
            var91 = undefined;
            if(var50) { _fun0003_ip = 235; continue _fun0003 }
case 236:
            var91 = var93;
case 235:
            var1['referencedMessage'] = var91;
            var1['threadEmbed'] = var90;
            var91 = var18 != var92;
            var90 = undefined;
            if(!var91) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var91 = var92.getForwardInfo;
            var90 = var91.bind(var92)();
case 237:
            var1['forwardInfo'] = var90;
            var88 = !var88;
            if(!var88) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var88 = var2.mentioned;
case 239:
            var1['mentioned'] = var88;
            var88 = var2.isEdited;
            var90 = var88.bind(var2)();
            var88 = var89;
            if(!var90) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var88 = var89;
            if(var50) { _fun0003_ip = 241; continue _fun0003 }
case 243:
            var92 = _closure1_slot0;
            var93 = _closure1_slot2;
            var89 = 23;
            var90 = var93[var89];
            var90 = var92.bind(var5)(var90);
            var91 = var90.intl;
            var90 = var91.string;
            var89 = var93[var89];
            var89 = var92.bind(var5)(var89);
            var89 = var89.t;
            var89 = var89.C8sXIM;
            var88 = var90.bind(var91)(var89);
case 241:
            var1['edited'] = var88;
            var88 = var25.editedColor;
            var1['editedColor'] = var88;
            var88 = var2.isUnsupported;
            if(var88) { _fun0003_ip = 244; continue _fun0003 }
case 245:
            var88 = var25.textColor;
            _fun0003_ip = 246; continue _fun0003;
case 244:
            var88 = var25.unsupportedColor;
case 246:
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
            if(!var65) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var77 = var69.username;
case 247:
            var78 = var18 != var77;
            var73 = undefined;
            if(!var78) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var73 = var77;
case 249:
            var1['username'] = var73;
            var73 = undefined;
            if(var65) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var73 = var76.uri;
case 251:
            var1['avatarURL'] = var73;
            var73 = undefined;
            if(var65) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var73 = var75;
case 253:
            var1['avatarDecorationURL'] = var73;
            var69 = var69.id;
            var1['authorId'] = var69;
            if(var65) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var69 = 'username';
            if(!(var69 === var14)) { _fun0003_ip = 255; continue _fun0003 }
case 257:
            var73 = _closure1_slot3;
            var75 = var18 != var71;
            var69 = undefined;
            if(!var75) { _fun0003_ip = 258; continue _fun0003 }
case 259:
            var69 = var71;
case 258:
            var69 = var73.bind(var5)(var69);
            if(!(var18 == var69)) { _fun0003_ip = 260; continue _fun0003 }
case 261:
            var69 = var25.defaultUsernameColor;
case 260:
            _fun0003_ip = 262; continue _fun0003;
case 255:
            var69 = var25.defaultUsernameColor;
case 262:
            var1['usernameColor'] = var69;
            var69 = null;
            if(var65) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var75 = _closure1_slot3;
            var76 = var18 != var71;
            var73 = undefined;
            if(!var76) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var73 = var71;
case 265:
            var75 = var75.bind(var5)(var73);
            var76 = var18 != var75;
            var73 = null;
            if(!var76) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var73 = var75;
case 267:
            var69 = var73;
case 263:
            var1['roleColor'] = var69;
            var69 = null;
            if(!var72) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var69 = null;
            if(var65) { _fun0003_ip = 269; continue _fun0003 }
case 271:
            var73 = _closure1_slot0;
            var75 = _closure1_slot2;
            var72 = 62;
            var72 = var75[var72];
            var73 = var73.bind(var5)(var72);
            var72 = var73.processColorStrings;
            var69 = var72.bind(var73)(var74);
case 269:
            var1['roleColors'] = var69;
            var69 = 'dot';
            var69 = var69 === var14;
            var1['shouldShowRoleDot'] = var69;
            var69 = 'username';
            var69 = var69 === var14;
            var1['shouldShowRoleOnName'] = var69;
            var1['showLinkDecorations'] = var64;
            if(var65) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            var69 = _closure1_slot3;
            var72 = var18 != var71;
            var64 = undefined;
            if(!var72) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var64 = var71;
case 274:
            var64 = var69.bind(var5)(var64);
            if(!(var18 == var64)) { _fun0003_ip = 276; continue _fun0003 }
case 277:
            var64 = var25.defaultUsernameColor;
case 276:
            _fun0003_ip = 278; continue _fun0003;
case 272:
            var64 = var25.defaultUsernameColor;
case 278:
            var1['colorString'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 279; continue _fun0003 }
case 280:
            var64 = var68;
case 279:
            var1['roleIcon'] = var64;
            var68 = var18 != var70;
            var64 = undefined;
            if(!var68) { _fun0003_ip = 281; continue _fun0003 }
case 282:
            var69 = _closure1_slot0;
            var71 = _closure1_slot2;
            var68 = 63;
            var68 = var71[var68];
            var69 = var69.bind(var5)(var68);
            var68 = var69.createConnectionsRoleTag;
            var64 = var68.bind(var69)(var70);
case 281:
            var1['connectionsRoleTag'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var64 = var67;
case 283:
            var1['timestamp'] = var64;
            var64 = undefined;
            if(var65) { _fun0003_ip = 285; continue _fun0003 }
case 286:
            var64 = var25.timestampColor;
case 285:
            var1['timestampColor'] = var64;
            var1['content'] = var63;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var50;
            var63 = undefined;
            if(!(var5 !== var66)) { _fun0003_ip = 287; continue _fun0003 }
case 288:
            var65 = _closure1_slot0;
            var67 = _closure1_slot2;
            var64 = 64;
            var64 = var67[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createSurveyIndication;
            var63 = var64.bind(var65)(var2, var20, var66);
case 287:
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
            if(!var53) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var63 = _closure1_slot0;
            var64 = _closure1_slot2;
            var53 = 66;
            var53 = var64[var53];
            var64 = var63.bind(var5)(var53);
            var63 = var64.createExecutedCommand;
            var100 = var25.defaultUsernameColor;
            r104 = var64;
            r103 = var2;
            r102 = var22;
            r101 = var14;
            r100 = var20;
            var51 = r104[var63](r103, r102, r101, r100, var100, var99);
case 289:
            var1['executedCommand'] = var51;
            var51 = var39.components;
            var51 = var51.length;
            var53 = var51 > var48;
            var51 = undefined;
            if(!var53) { _fun0003_ip = 291; continue _fun0003 }
case 292:
            var51 = undefined;
            if(!var52) { _fun0003_ip = 291; continue _fun0003 }
case 293:
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
case 291:
            var1['components'] = var51;
            var51 = 0;
            if(var50) { _fun0003_ip = 294; continue _fun0003 }
case 295:
            var51 = var25.feedbackColor;
case 294:
            var1['feedbackColor'] = var51;
            var48 = 0;
            if(var50) { _fun0003_ip = 296; continue _fun0003 }
case 297:
            var48 = var25.highlightColor;
case 296:
            var1['highlightColor'] = var48;
            var50 = var18 != var49;
            var48 = undefined;
            if(!var50) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            var48 = var49;
case 298:
            var1['embeds'] = var48;
            if(var47) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var47 = new Array(0);
            _fun0003_ip = 302; continue _fun0003;
case 300:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 68;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createGiftCodeEmbed;
            var47 = var48.bind(var49)(var2, var20);
case 302:
            var1['giftCodes'] = var47;
            if(var44) { _fun0003_ip = 303; continue _fun0003 }
case 304:
            var44 = new Array(0);
            _fun0003_ip = 305; continue _fun0003;
case 303:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 69;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createCodedLinkEmbeds;
            var44 = var47.bind(var48)(var2, var39, var20);
case 305:
            var1['codedLinks'] = var44;
            var44 = undefined;
            if(!var46) { _fun0003_ip = 306; continue _fun0003 }
case 307:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 70;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityInstanceEmbed;
            var44 = var46.bind(var47)(var2);
case 306:
            var1['activityInstanceEmbed'] = var44;
            var44 = undefined;
            if(!var45) { _fun0003_ip = 308; continue _fun0003 }
case 309:
            var46 = _closure1_slot0;
            var47 = _closure1_slot2;
            var45 = 71;
            var45 = var47[var45];
            var46 = var46.bind(var5)(var45);
            var45 = var46.createActivityRichPresenceInviteEmbed;
            var44 = var45.bind(var46)(var2, var22);
case 308:
            var1['activityRichPresenceInviteEmbed'] = var44;
            if(!var37) { _fun0003_ip = 310; continue _fun0003 }
case 311:
            if(!var41) { _fun0003_ip = 312; continue _fun0003 }
case 313:
            if(var42) { _fun0003_ip = 314; continue _fun0003 }
case 315:
            var42 = var43;
case 314:
            var41 = var42;
case 312:
            if(var41) { _fun0003_ip = 316; continue _fun0003 }
case 317:
            var41 = var36;
case 316:
            var37 = var41;
case 310:
            var1['useAttachmentGridLayout'] = var37;
            var1['useAttachmentUploadPreview'] = var36;
            var1['attachments'] = var35;
            var41 = 1;
            var35 = var41;
            if(!var36) { _fun0003_ip = 318; continue _fun0003 }
case 319:
            var37 = var2.state;
            var36 = _closure1_slot23;
            var36 = var36.SEND_FAILED;
            var35 = var41;
            if(!(var37 === var36)) { _fun0003_ip = 318; continue _fun0003 }
case 320:
            var35 = 0.2;
case 318:
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
            if(!var30) { _fun0003_ip = 321; continue _fun0003 }
case 322:
            var30 = var34;
case 321:
            var1['communicationDisabled'] = var30;
            var34 = var18 == var22;
            if(var34) { _fun0003_ip = 323; continue _fun0003 }
case 324:
            var30 = var22.isForumPost;
            var30 = var30.bind(var22)();
            var34 = !var30;
case 323:
            var30 = !var34;
            if(var34) { _fun0003_ip = 325; continue _fun0003 }
case 326:
            var35 = var2.id;
            var34 = var2.channel_id;
            var30 = var35 === var34;
case 325:
            var1['isFirstForumPostMessage'] = var30;
            var34 = var18 != var22;
            var30 = undefined;
            if(!var34) { _fun0003_ip = 327; continue _fun0003 }
case 328:
            var34 = var22.isForumPost;
            var34 = var34.bind(var22)();
            var30 = undefined;
            if(!var34) { _fun0003_ip = 327; continue _fun0003 }
case 329:
            var30 = undefined;
            if(!var33) { _fun0003_ip = 327; continue _fun0003 }
case 330:
            var33 = _closure1_slot29;
            var30 = var33.bind(var5)(var2, var22);
case 327:
            var1['postActions'] = var30;
            var30 = var2.author;
            var30 = var30.id;
            var30 = var30 === var32;
            var1['isCurrentUserMessageAuthor'] = var30;
            var30 = _closure1_slot6;
            var30 = var30.gradientPreset;
            var30 = var18 != var30;
            var1['usingGradientTheme'] = var30;
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 24;
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
            if(var27) { _fun0003_ip = 331; continue _fun0003 }
case 332:
            var27 = new Array(0);
            _fun0003_ip = 333; continue _fun0003;
case 331:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 75;
            var28 = var32[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.createPostPreviewEmbeds;
            var27 = var28.bind(var30)(var2, var31);
case 333:
            var1['postPreviewEmbeds'] = var27;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var30 = 23;
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
            if(!var26) { _fun0003_ip = 334; continue _fun0003 }
case 335:
            var24 = var25.embedBackgroundColor;
case 334:
            var1['audioAttachmentBackgroundColor'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 79;
            var24 = var26[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.createMessageAccessibilityActions;
            var24 = var24.bind(var25)(var2, var22);
            var1['accessibilityActions'] = var24;
            var1['clanTagGuildId'] = var23;
            var1['clanTag'] = var21;
            var1['clanBadgeUrl'] = var16;
            var1['isFirst'] = var13;
            var1['gameApplicationId'] = var4;
            var4 = var18 == var22;
            var16 = undefined;
            if(var4) { _fun0003_ip = 336; continue _fun0003 }
case 337:
            var16 = var22.type;
case 336:
            var4 = _closure1_slot25;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            return var1;
case 61:
            var4 = var2.type;
            var1 = _closure1_slot22;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 338; continue _fun0003 }
case 339:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 36;
            var1 = var16[var1];
            var16 = var4.bind(var5)(var1);
            var4 = var16.createSystemMessageContent;
            var1 = {};
            var1['message'] = var2;
            var1['theme'] = var20;
            var1['reactions'] = var19;
            var1['roleStyle'] = var14;
            var21 = var18 == var22;
            var18 = undefined;
            if(var21) { _fun0003_ip = 340; continue _fun0003 }
case 341:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
case 340:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 342; continue _fun0003;
case 338:
            var4 = {};
            var16 = _closure1_slot28;
            r104 = undefined;
            r103 = var2;
            r102 = var14;
            r101 = var6;
            r100 = var17;
            var100 = var7;
            var16 = r104[var16](r103, r102, r101, r100, var100, var99);
            var4['threadEmbed'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 36;
            var16 = var18[var16];
            var18 = var17.bind(var5)(var16);
            var17 = var18.createSystemMessageContent;
            var16 = {};
            var16['message'] = var2;
            var16['theme'] = var20;
            var16['reactions'] = var19;
            var16['roleStyle'] = var14;
            r102 = var17.bind(var18)(var16);
            r103 = var4;
            var16 = copyDataProperties(r103, r102);
            var1 = var4;
case 342:
            return var1;
case 59:
            var1 = {};
            var4 = _closure1_slot30;
            var3 = {};
            var3['message'] = var15;
            var3['roleStyle'] = var14;
            var3['isFirst'] = var13;
            var3['isEditing'] = var12;
            var3['canShowImages'] = var11;
            var3['isSystemDM'] = var10;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r103 = var6;
            r102 = var7;
            var7 = copyDataProperties(r103, r102);
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[var7] = var8;
            var3['options'] = var6;
            r102 = var4.bind(var5)(var3);
            r103 = var1;
            var3 = copyDataProperties(r103, r102);
            var3 = var2.id;
            var2 = 'id';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot30 = var2;
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
    var9 = var6[var4];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageRowState;
    var _closure1_slot21 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MessageTypes;
    var _closure1_slot22 = var8;
    var8 = var4.MessageStates;
    var _closure1_slot23 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot24 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot25 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot26 = var4;
    var4 = {};
    var4['referralTrialOfferDataUpdated'] = var1;
    var4['referralTrialOfferData'] = var1;
    var _closure1_slot27 = var4;
    var4 = 80;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();