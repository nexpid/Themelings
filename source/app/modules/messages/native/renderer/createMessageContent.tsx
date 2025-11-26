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
            var6 = 22;
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
            var4 = 27;
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
    var _closure1_slot29 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var94 = var1.messageForward;
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
            var68 = var1.pushFeedbackType;
            var52 = var1.renderContentOnly;
            var30 = var1.showContentInventoryEntryFallbackEmbed;
            var22 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var19 = var7.inlineEmbedMedia;
            var17 = var7.inlineAttachmentMedia;
            var80 = var7.constrainedWidth;
            var90 = var7.ignoreMentioned;
            var79 = var7.animateEmoji;
            var40 = var7.animatingStickerMessageId;
            var56 = var7.gifAutoPlay;
            var46 = var7.renderCodedLinks;
            var49 = var7.renderGiftCode;
            var48 = var7.renderActivityInstanceEmbed;
            var47 = var7.renderActivityInviteEmbed;
            var54 = var7.renderComponents;
            var21 = var7.renderThreadEmbeds;
            var23 = var7.renderReplies;
            var33 = var7.renderCommunicationDisabled;
            var43 = var7.renderAttachments;
            var55 = var7.renderExecutedCommands;
            var16 = var7.renderPolls;
            var4 = var7.renderSharedClientTheme;
            var35 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var34 = var7.ignoreEmbedDescriptionCache;
            var37 = var7.forceHideSimpleEmbedContent;
            var60 = var7.shouldObscureSpoiler;
            var62 = var7.shouldDisableInteractiveComponents;
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
            var1 = 31;
            var1 = var9[var1];
            var1 = var24.bind(var5)(var1);
            var26 = var1.bind(var5)(var20, var8);
            var8 = _closure1_slot0;
            var1 = 32;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var25 = var1.CustomThemeShareReceiveExperiment;
            var24 = var25.getCurrentConfig;
            var8 = {};
            var1 = 'createMessageContent';
            var8['location'] = var1;
            var1 = {};
            var9 = false;
            var1['autoTrackExposure'] = var9;
            var1 = var24.bind(var25)(var8, var1);
            var1 = var1.enabled;
            var8 = true;
            var61 = var8 === var11;
            var28 = var61;
            if(!var61) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var28 = var22;
case 40:
            if(!var28) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var24 = var2.type;
            var22 = _closure1_slot22;
            var22 = var22.CUSTOM_GIFT;
            var28 = var24 !== var22;
case 42:
            var32 = var61;
            if(!var61) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var32 = var19;
case 44:
            var39 = var61;
            if(!var39) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var39 = var17;
case 46:
            var22 = _closure1_slot17;
            var19 = var22.getChannel;
            var17 = var2.getChannelId;
            var17 = var17.bind(var2)();
            var22 = var19.bind(var22)(var17);
            var24 = _closure1_slot17;
            var19 = var24.getChannel;
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var17 = 22;
            var17 = var27[var17];
            var27 = var25.bind(var5)(var17);
            var25 = var27.castMessageIdAsChannelId;
            var17 = var2.id;
            var17 = var25.bind(var27)(var17);
            var17 = var19.bind(var24)(var17);
            var24 = var18 == var22;
            var19 = undefined;
            if(var24) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var24 = var22.getGuildId;
            var19 = var24.bind(var22)();
case 48:
            var24 = var2.author;
            var27 = var24.id;
            var25 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 33;
            var24 = var29[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.getHasEnhancedRoleColors;
            var74 = var24.bind(var25)(var19, var27);
            var64 = var19;
            if(!(var18 == var94)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 34;
            var19 = var25[var19];
            var24 = var24.bind(var5)(var19);
            var19 = var24.maybeCreateSingleForwardForMessage;
            var94 = var19.bind(var24)(var2);
case 50:
            var41 = var2;
            if(!(var18 != var94)) { _fun0003_ip = 20; continue _fun0003 }
case 52:
            var19 = var94.messageSnapshot;
            var41 = var19.message;
case 20:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 53; continue _fun0003 }
case 54:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var15 = 35;
            var15 = var25[var15];
            var24 = var24.bind(var5)(var15);
            var15 = {};
            var25 = var2.reactions;
            var15['reactions'] = var25;
            var15['animateEmoji'] = var79;
            var19 = var24.bind(var5)(var15);
case 53:
            var25 = var2.type;
            var15 = _closure1_slot22;
            var24 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var25 === var24)) { _fun0003_ip = 55; continue _fun0003 }
case 56:
            var27 = _closure1_slot11;
            var25 = var27.getMessageByReference;
            var24 = var2.messageReference;
            var25 = var25.bind(var27)(var24);
            var29 = var25.state;
            var24 = _closure1_slot12;
            var27 = var24.LOADED;
            var24 = null;
            if(!(var29 === var27)) { _fun0003_ip = 57; continue _fun0003 }
case 58:
            var24 = var25.message;
case 57:
            var15 = var24;
case 55:
            if(!(var18 == var15)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var24 = 36;
            var24 = var27[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.bind(var5)(var2);
            if(var24) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var67 = !var13;
            if(var67) { _fun0003_ip = 63; continue _fun0003 }
case 64:
            var67 = var52;
case 63:
            var71 = var2.author;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 38;
            var24 = var27[var24];
            var27 = var25.bind(var5)(var24);
            var25 = var27.isMessageNewerThanImprovedMarkdownEpoch;
            var29 = var2.editedTimestamp;
            if(!(var18 == var29)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
            var29 = var2.timestamp;
case 65:
            var24 = var29.valueOf;
            var24 = var24.bind(var29)();
            var31 = var25.bind(var27)(var24);
            var24 = var41.content;
            if(!(var18 != var24)) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var25 = var41.content;
            var24 = '';
            if(!(var24 === var25)) { _fun0003_ip = 69; continue _fun0003 }
case 67:
            var24 = {};
            var24['content'] = var5;
            var24['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 70; continue _fun0003;
case 69:
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 39;
            var25 = var29[var25];
            var29 = var27.bind(var5)(var25);
            var27 = var29.parseMessageMarkup;
            if(var37) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var25 = var28;
            if(!var25) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var25 = var32;
case 73:
            var37 = var25;
case 71:
            var25 = var18 != var17;
            if(!var25) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var38 = var2.isFirstMessageInForumPost;
            var25 = var38.bind(var2)(var17);
case 75:
            r107 = var29;
            r106 = var2;
            r105 = var41;
            r104 = var37;
            r103 = var6;
            r102 = var25;
            r101 = var31;
            r100 = var31;
            var100 = var36;
            var24 = r107[var27](r106, r105, r104, r103, r102, r101, r100, var100, var99);
case 70:
            var27 = var24.content;
            var36 = var24.hasSpoilerEmbeds;
            var25 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 40;
            var24 = var29[var24];
            var37 = var25.bind(var5)(var24);
            var24 = var37.getEnabledHarmTypesForMessage;
            var59 = var24.bind(var37)(var2);
            var24 = 41;
            var24 = var29[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.shouldAgeVerifyForExplicitMedia;
            var58 = var24.bind(var25)();
            var25 = undefined;
            if(!var28) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var29 = _closure1_slot1;
            var37 = _closure1_slot2;
            var24 = 42;
            var24 = var37[var24];
            var29 = var29.bind(var5)(var24);
            var24 = {};
            var37 = var41.embeds;
            var24['embeds'] = var37;
            var37 = var2.channel_id;
            var24['channelId'] = var37;
            var24['gifAutoPlay'] = var56;
            var24['hasSpoilerEmbeds'] = var36;
            var24['ignoreEmbedDescriptionCache'] = var34;
            var24['shouldInlineEmbedMedia'] = var32;
            var24['colors'] = var26;
            var24['showListsAndHeaders'] = var31;
            var24['showMaskedLinks'] = var31;
            var31 = var26.embedBackgroundColor;
            var24['themedBackgroundColor'] = var31;
            var24['enabledContentHarmTypeFlags'] = var59;
            var24['shouldAgeVerify'] = var58;
            var31 = var2.author;
            var31 = var31.bot;
            var24['authorIsBot'] = var31;
            var24['showContentInventoryEntryFallbackEmbed'] = var30;
            var25 = var29.bind(var5)(var24);
case 77:
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 43;
            var24 = var30[var24];
            var29 = var29.bind(var5)(var24);
            var24 = {};
            var24['message'] = var2;
            var24['isSystemDM'] = var10;
            var24['channel'] = var22;
            var24['colors'] = var26;
            var24 = var29.bind(var5)(var24);
            var89 = var24.tagText;
            var88 = var24.tagVerified;
            var87 = var24.tagTextColor;
            var86 = var24.tagBackgroundColor;
            var85 = var24.tagType;
            var84 = var24.tagIconUrl;
            var83 = var24.opTagText;
            var82 = var24.opTagTextColor;
            var81 = var24.opTagBackgroundColor;
            var30 = _closure1_slot20;
            var29 = var30.getUploaderFileForMessageId;
            var24 = var2.id;
            var29 = var29.bind(var30)(var24);
            var38 = var18 != var29;
            var30 = var2.state;
            var24 = _closure1_slot23;
            var24 = var24.SEND_FAILED;
            var24 = var30 !== var24;
            if(var24) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var30 = var2.isCommandType;
            var24 = var30.bind(var2)();
case 79:
            var30 = var25;
            if(var24) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var24 = var25;
            if(!(var18 == var25)) { _fun0003_ip = 83; continue _fun0003 }
case 84:
            var24 = new Array(0);
case 83:
            var31 = var24.push;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var25 = 44;
            var25 = var34[var25];
            var32 = var32.bind(var5)(var25);
            var25 = {};
            var25['uploaderFile'] = var29;
            var25['useAttachmentUploadPreview'] = var38;
            var25['colors'] = var26;
            var25 = var32.bind(var5)(var25);
            var25 = var31.bind(var24)(var25);
            var30 = var24;
case 81:
            var31 = _closure1_slot8;
            var25 = var31.getMessage;
            var24 = var2.id;
            var25 = var25.bind(var31)(var24);
            var51 = var30;
            if(!(var18 != var25)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var24 = var30;
            if(!(var18 == var30)) { _fun0003_ip = 87; continue _fun0003 }
case 88:
            var24 = new Array(0);
case 87:
            var34 = var25.errorMessage;
            var30 = var24.push;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = 44;
            var25 = var32[var25];
            var32 = var31.bind(var5)(var25);
            var31 = var32.createAutomodBlockedMessageEmbed;
            var25 = {};
            var25['errorMessage'] = var34;
            var25['colors'] = var26;
            var25 = var31.bind(var32)(var25);
            var25 = var30.bind(var24)(var25);
            var51 = var24;
case 85:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var32 = 45;
            var24 = var30[var32];
            var34 = var25.bind(var5)(var24);
            var31 = var34.getUserAuthor;
            var24 = var2.author;
            var24 = var31.bind(var34)(var24, var22);
            var44 = var24.guildMemberAvatar;
            var34 = var24.guildMemberAvatarDecoration;
            var31 = var24.iconRoleId;
            var24 = 46;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.ensureAvatarSource;
            var24 = var2.isInteractionPlaceholder;
            var24 = var24.bind(var2)();
            if(!var24) { _fun0003_ip = 89; continue _fun0003 }
case 90:
            var24 = var2.author;
            var24 = var24.avatar;
            if(!(var18 == var24)) { _fun0003_ip = 89; continue _fun0003 }
case 91:
            if(!(var18 == var44)) { _fun0003_ip = 89; continue _fun0003 }
case 92:
            var36 = var2.application;
            var37 = var18 == var36;
            var24 = undefined;
            if(var37) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var24 = var36.icon;
case 93:
            if(!(var18 == var24)) { _fun0003_ip = 95; continue _fun0003 }
case 89:
            if(!(var18 != var44)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            if(!(var18 == var64)) { _fun0003_ip = 98; continue _fun0003 }
case 96:
            var24 = var71.getAvatarSource;
            var24 = var24.bind(var71)(var5);
            _fun0003_ip = 99; continue _fun0003;
case 98:
            var37 = _closure1_slot1;
            var42 = _closure1_slot2;
            var36 = 47;
            var36 = var42[var36];
            var42 = var37.bind(var5)(var36);
            var37 = var42.getGuildMemberAvatarSource;
            var36 = {};
            var45 = var71.id;
            var36['userId'] = var45;
            var36['avatar'] = var44;
            var36['guildId'] = var64;
            var24 = var37.bind(var42)(var36, var71);
case 99:
            _fun0003_ip = 100; continue _fun0003;
case 95:
            var37 = _closure1_slot1;
            var42 = _closure1_slot2;
            var36 = 47;
            var36 = var42[var36];
            var42 = var37.bind(var5)(var36);
            var37 = var42.getApplicationIconSource;
            var36 = {};
            var44 = var2.application;
            var44 = var44.id;
            var36['id'] = var44;
            var44 = var2.application;
            var44 = var44.icon;
            var36['icon'] = var44;
            var44 = var2.application;
            var44 = var44.bot;
            var36['bot'] = var44;
            var24 = var37.bind(var42)(var36);
case 100:
            var78 = var25.bind(var30)(var24);
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 47;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.getAvatarDecorationURL;
            var24 = {};
            if(!(var18 == var34)) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var34 = var71.avatarDecoration;
case 101:
            var24['avatarDecoration'] = var34;
            var42 = _closure1_slot0;
            var44 = _closure1_slot2;
            var34 = 48;
            var34 = var44[var34];
            var37 = var42.bind(var5)(var34);
            var36 = var37.getDecorationSizeForAvatarSize;
            var34 = 49;
            var34 = var44[var34];
            var34 = var42.bind(var5)(var34);
            var34 = var34.AvatarSizes;
            var34 = var34.NORMAL;
            var34 = var36.bind(var37)(var34);
            var24['size'] = var34;
            var77 = var25.bind(var30)(var24);
            var24 = var18 != var31;
            var70 = undefined;
            if(!var24) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var24 = var18 != var64;
            var70 = undefined;
            if(!var24) { _fun0003_ip = 103; continue _fun0003 }
case 105:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 50;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.getRoleIcon;
            var24 = {};
            var24['guildId'] = var64;
            var24['roleId'] = var31;
            var31 = 18;
            var24['size'] = var31;
            var70 = var25.bind(var30)(var24);
case 103:
            var25 = var2.hasFlag;
            var24 = _closure1_slot24;
            var24 = var24.SOURCE_MESSAGE_DELETED;
            var24 = var25.bind(var2)(var24);
            if(!var24) { _fun0003_ip = 106; continue _fun0003 }
case 107:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 24;
            var25 = var34[var24];
            var25 = var31.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var34[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.JOtgSw;
            var27 = var25.bind(var30)(var24);
case 106:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var32];
            var25 = var25.bind(var5)(var24);
            var24 = var25.getMessageAuthor;
            var24 = var24.bind(var25)(var2);
            var75 = var24.nick;
            var73 = var24.colorString;
            var76 = var24.colorStrings;
            var25 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.INTERACTION_PREMIUM_UPSELL;
            if(!(var25 === var24)) { _fun0003_ip = 108; continue _fun0003 }
case 109:
            var25 = _closure1_slot0;
            var34 = _closure1_slot2;
            var24 = 24;
            var30 = var34[var24];
            var30 = var25.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var24 = var34[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.t;
            var25 = var24.u4A+xK;
            var24 = {};
            var24['appName'] = var75;
            var27 = var30.bind(var31)(var25, var24);
case 108:
            var25 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.REPLY;
            var95 = undefined;
            if(!(var25 === var24)) { _fun0003_ip = 110; continue _fun0003 }
case 111:
            var95 = undefined;
            if(!var23) { _fun0003_ip = 110; continue _fun0003 }
case 112:
            var25 = _closure1_slot11;
            var24 = var25.getMessageByReference;
            var23 = var2.messageReference;
            var23 = var24.bind(var25)(var23);
            var25 = var23.state;
            var24 = _closure1_slot12;
            var24 = var24.LOADED;
            if(!(var24 !== var25)) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var24 = _closure1_slot12;
            var24 = var24.NOT_LOADED;
            if(!(var24 !== var25)) { _fun0003_ip = 115; continue _fun0003 }
case 116:
            var24 = _closure1_slot12;
            var24 = var24.DELETED;
            if(!(var24 !== var25)) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 52;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.assertNever;
            var24 = var24.bind(var25)(var23);
            var95 = undefined;
            _fun0003_ip = 110; continue _fun0003;
case 117:
            var24 = {};
            var25 = _closure1_slot21;
            var25 = var25.SYSTEM;
            var24['state'] = var25;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var25 = 24;
            var30 = var36[var25];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var25 = var36[var25];
            var25 = var34.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.mE3KJN;
            var25 = var30.bind(var31)(var25);
            var24['content'] = var25;
            var95 = var24;
            _fun0003_ip = 110; continue _fun0003;
case 115:
            var24 = {};
            var25 = _closure1_slot21;
            var25 = var25.SYSTEM;
            var24['state'] = var25;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var25 = 24;
            var30 = var36[var25];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var25 = var36[var25];
            var25 = var34.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.1i+hMi;
            var25 = var30.bind(var31)(var25);
            var24['content'] = var25;
            var95 = var24;
            _fun0003_ip = 110; continue _fun0003;
case 113:
            var23 = var23.message;
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 34;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.maybeCreateSingleForwardForMessage;
            var30 = var24.bind(var25)(var23);
            var25 = _closure1_slot19;
            var24 = var25.isBlockedForMessage;
            var24 = var24.bind(var25)(var23);
            if(var24) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var25 = _closure1_slot19;
            var24 = var25.isIgnoredForMessage;
            var24 = var24.bind(var25)(var23);
            if(var24) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var25 = _closure1_slot30;
            var24 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var24['message'] = var23;
            var24['messageForward'] = var30;
            var24['roleStyle'] = var14;
            var31 = {};
            r106 = var31;
            r105 = var7;
            var34 = copyDataProperties(r106, r105);
            var34 = 'renderReplies';
            var31[var34] = var9;
            var24['options'] = var31;
            var25 = var25.bind(var5)(var24);
            if(!(var18 != var25)) { _fun0003_ip = 123; continue _fun0003 }
case 124:
            var24 = 'username';
            var24 = var24 in var25;
            if(!var24) { _fun0003_ip = 125; continue _fun0003 }
case 126:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var32];
            var31 = var31.bind(var5)(var24);
            var24 = var31.getMessageAuthor;
            var24 = var24.bind(var31)(var23);
            var31 = var24.nick;
            var32 = var24.colorString;
            if(!(var18 == var31)) { _fun0003_ip = 127; continue _fun0003 }
case 128:
            var24 = var23.author;
            var31 = var24.username;
case 127:
            var34 = var18 != var31;
            var24 = undefined;
            if(!var34) { _fun0003_ip = 129; continue _fun0003 }
case 130:
            var24 = var31;
case 129:
            var25['username'] = var24;
            if(var67) { _fun0003_ip = 131; continue _fun0003 }
case 132:
            var31 = _closure1_slot3;
            var34 = var18 != var32;
            var24 = undefined;
            if(!var34) { _fun0003_ip = 133; continue _fun0003 }
case 134:
            var24 = var32;
case 133:
            var24 = var31.bind(var5)(var24);
            if(!(var18 == var24)) { _fun0003_ip = 135; continue _fun0003 }
case 136:
            var24 = var25.colorString;
case 135:
            _fun0003_ip = 137; continue _fun0003;
case 131:
            var24 = var25.colorString;
case 137:
            var25['colorString'] = var24;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var24 = 51;
            var24 = var32[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.bind(var5)(var2, var23);
            if(!var24) { _fun0003_ip = 125; continue _fun0003 }
case 138:
            var31 = var25.username;
            var24 = '@';
            var24 = var24 + var31;
            var25['username'] = var24;
case 125:
            var31 = var18 == var30;
            var24 = undefined;
            if(var31) { _fun0003_ip = 139; continue _fun0003 }
case 140:
            var30 = var30.messageSnapshot;
            var24 = var30.message;
case 139:
            var32 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 141; continue _fun0003 }
case 142:
            var32 = var24;
case 141:
            var24 = 'stickers';
            var24 = var24 in var32;
            if(var24) { _fun0003_ip = 143; continue _fun0003 }
case 144:
            var24 = new Array(0);
            _fun0003_ip = 145; continue _fun0003;
case 143:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 28;
            var30 = var34[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getMessageStickers;
            var24 = var30.bind(var31)(var32);
case 145:
            var24 = var24.length;
            var30 = 0;
            if(!(!(var24 > var30))) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var24 = 'interaction';
            var24 = var24 in var32;
            if(!var24) { _fun0003_ip = 148; continue _fun0003 }
case 149:
            var24 = var32.interaction;
            if(!(var18 != var24)) { _fun0003_ip = 148; continue _fun0003 }
case 150:
            var31 = var32.content;
            var24 = '';
            if(!(var24 !== var31)) { _fun0003_ip = 151; continue _fun0003 }
case 148:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var34 = 29;
            var24 = var24[var34];
            var37 = var31.bind(var5)(var24);
            var36 = var37.hasFlag;
            var31 = var32.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_VOICE_MESSAGE;
            var24 = var36.bind(var37)(var31, var24);
            if(var24) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var31 = var32.type;
            var24 = _closure1_slot22;
            var24 = var24.POLL_RESULT;
            if(!(var31 !== var24)) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var34];
            var36 = var31.bind(var5)(var24);
            var34 = var36.hasFlag;
            var31 = var32.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_COMPONENTS_V2;
            var24 = var34.bind(var36)(var31, var24);
            if(var24) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var24 = var32.embeds;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var24 = var32.attachments;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 158; continue _fun0003 }
case 160:
            var31 = var32.content;
            var30 = '';
            var24 = null;
            if(!(var30 === var31)) { _fun0003_ip = 161; continue _fun0003 }
case 158:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var30 = 24;
            var31 = var37[var30];
            var31 = var36.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var37[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.JAKsM8;
            var24 = var31.bind(var34)(var30);
case 161:
            _fun0003_ip = 162; continue _fun0003;
case 156:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var30 = 24;
            var31 = var37[var30];
            var31 = var36.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var37[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.Xxm5i3;
            var24 = var31.bind(var34)(var30);
case 162:
            _fun0003_ip = 163; continue _fun0003;
case 154:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 30;
            var30 = var34[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getPollResultsReplyPreviewMobile;
            var24 = var30.bind(var31)(var32);
case 163:
            _fun0003_ip = 164; continue _fun0003;
case 152:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 24;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.6bhHrc;
            var24 = var31.bind(var32)(var30);
case 164:
            _fun0003_ip = 165; continue _fun0003;
case 151:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 24;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.2v7kfl;
            var24 = var31.bind(var32)(var30);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 146:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 24;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.7K5Lma;
            var24 = var31.bind(var32)(var30);
case 166:
            var30 = var23.type;
            var23 = _closure1_slot22;
            var23 = var23.POLL_RESULT;
            if(!(var30 === var23)) { _fun0003_ip = 167; continue _fun0003 }
case 168:
            var25['content'] = var24;
case 167:
            var23 = {};
            var30 = _closure1_slot21;
            var30 = var30.LOADED;
            var23['state'] = var30;
            var23['message'] = var25;
            var95 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 110; continue _fun0003 }
case 169:
            var23['systemContent'] = var24;
            var95 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 123:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 24;
            var25 = var32[var24];
            var25 = var31.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var32[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.1i+hMi;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var95 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 121:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 24;
            var25 = var32[var24];
            var25 = var31.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var32[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.G7p6v/;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var95 = var23;
            _fun0003_ip = 110; continue _fun0003;
case 119:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = 24;
            var25 = var32[var24];
            var25 = var31.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var32[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.XAkOo2;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var95 = var23;
case 110:
            var92 = undefined;
            if(!var21) { _fun0003_ip = 170; continue _fun0003 }
case 171:
            var21 = _closure1_slot28;
            r107 = undefined;
            r106 = var2;
            r105 = var14;
            r104 = var6;
            r103 = var17;
            r102 = var7;
            var92 = r107[var21](r106, r105, r104, r103, r102, r101);
case 170:
            var23 = _closure1_slot9;
            var21 = var23.getInteraction;
            var63 = var21.bind(var23)(var2);
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 53;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.createInteractionStatus;
            var53 = var21.bind(var23)(var2, var63);
            var23 = var18 != var64;
            var21 = null;
            if(!var23) { _fun0003_ip = 172; continue _fun0003 }
case 173:
            var25 = _closure1_slot18;
            var24 = var25.getMember;
            var23 = var71.id;
            var21 = var24.bind(var25)(var64, var23);
case 172:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 54;
            var23 = var25[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isMemberCommunicationDisabled;
            var36 = var23.bind(var24)(var21);
            var23 = _closure1_slot4;
            var32 = var23.useReducedMotion;
            var23 = _closure1_slot4;
            var66 = var23.alwaysShowLinkDecorations;
            var24 = var18 == var22;
            var23 = var21;
            var21 = undefined;
            if(var24) { _fun0003_ip = 174; continue _fun0003 }
case 175:
            var21 = var22.parent_id;
case 174:
            var30 = var22;
            if(!(var18 != var21)) { _fun0003_ip = 176; continue _fun0003 }
case 177:
            var30 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 176; continue _fun0003 }
case 178:
            var21 = var22.isThread;
            var21 = var21.bind(var22)();
            var30 = var22;
            if(!var21) { _fun0003_ip = 176; continue _fun0003 }
case 179:
            var25 = _closure1_slot17;
            var24 = var25.getChannel;
            var21 = var22.parent_id;
            var30 = var24.bind(var25)(var21);
case 176:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 55;
            var21 = var25[var21];
            var25 = var24.bind(var5)(var21);
            var24 = var25.getVisibleConnectionsRole;
            var21 = {};
            var21['guildMember'] = var23;
            var21['channel'] = var30;
            var21['onlyChannelConnectionRoles'] = var8;
            var72 = var24.bind(var25)(var21);
            var21 = var41.attachments;
            var21 = var21.length;
            var50 = 0;
            var44 = var50 !== var21;
            var21 = var41.embeds;
            var21 = var21.length;
            var45 = var50 !== var21;
            var21 = var38;
            if(!var38) { _fun0003_ip = 180; continue _fun0003 }
case 181:
            var24 = var2.attachments;
            var24 = var24.length;
            var21 = var50 === var24;
case 180:
            if(!var21) { _fun0003_ip = 182; continue _fun0003 }
case 183:
            var21 = var18 != var29;
case 182:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var42 = 56;
            var24 = var24[var42];
            var24 = var25.bind(var5)(var24);
            var25 = var24.ViewImageDescriptions;
            var24 = var25.getSetting;
            var57 = var24.bind(var25)();
            var37 = new Array(0);
            if(var21) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            if(!var43) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 58;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var30 = var41.attachments;
            var24['attachments'] = var30;
            var34 = _closure1_slot20;
            var31 = var34.getUploadAttachments;
            var30 = var2.nonce;
            var30 = var31.bind(var34)(var30);
            var24['uploadAttachments'] = var30;
            var24['shouldInlineAttachmentMedia'] = var39;
            var24['gifAutoPlay'] = var56;
            var24['viewImageDescriptions'] = var57;
            var24['useReducedMotion'] = var32;
            var24['shouldObscureSpoiler'] = var60;
            var30 = var26.embedBackgroundColor;
            var24['themedBackgroundColor'] = var30;
            var24['enabledContentHarmTypeFlags'] = var59;
            var24['shouldAgeVerify'] = var58;
            var24['colors'] = var26;
            var37 = var25.bind(var5)(var24);
            _fun0003_ip = 186; continue _fun0003;
case 184:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 57;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var24['uploaderFile'] = var29;
            var30 = var2.state;
            var29 = _closure1_slot23;
            var29 = var29.SEND_FAILED;
            var29 = var30 === var29;
            var24['isFailedMessage'] = var29;
            var24['shouldInlineAttachmentMedia'] = var39;
            var37 = var25.bind(var5)(var24);
case 186:
            if(!var21) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            var24 = var2.state;
            var21 = _closure1_slot23;
            var21 = var21.SEND_FAILED;
            if(!(var24 === var21)) { _fun0003_ip = 190; continue _fun0003 }
case 188:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 59;
            var21 = var25[var21];
            var25 = var24.bind(var5)(var21);
            var24 = var25.calendarFormat;
            var21 = var2.timestamp;
            var69 = var24.bind(var25)(var21, var8);
            _fun0003_ip = 191; continue _fun0003;
case 190:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 24;
            var24 = var30[var21];
            var24 = var29.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var30[var21];
            var21 = var29.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.yXY+5J;
            var69 = var24.bind(var25)(var21);
case 191:
            var24 = _closure1_slot16;
            var21 = var24.getId;
            var34 = var21.bind(var24)();
            var21 = var2.isUnsupported;
            var65 = var27;
            if(!var21) { _fun0003_ip = 192; continue _fun0003 }
case 193:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 24;
            var24 = var30[var21];
            var24 = var29.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var30[var21];
            var21 = var29.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.sWi5EU;
            var65 = var24.bind(var25)(var21);
case 192:
            var21 = var2.isPoll;
            var21 = var21.bind(var2)();
            var21 = !var21;
            if(var21) { _fun0003_ip = 194; continue _fun0003 }
case 195:
            var24 = !var6;
            if(!var24) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var24 = var16;
case 196:
            var21 = var24;
case 194:
            if(var21) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            var24 = var18 != var27;
            if(!var24) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var25 = '';
            var24 = var25 !== var27;
case 200:
            var21 = var24;
case 198:
            if(var21) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 30;
            var21 = var25[var21];
            var24 = var24.bind(var5)(var21);
            var21 = var24.getPollReplyPreview;
            var65 = var21.bind(var24)(var2);
case 202:
            var30 = undefined;
            if(!var16) { _fun0003_ip = 204; continue _fun0003 }
case 205:
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 60;
            var16 = var24[var16];
            var21 = var21.bind(var5)(var16);
            var16 = {};
            var16['theme'] = var20;
            var16['animateEmoji'] = var79;
            var30 = var21.bind(var5)(var2, var5, var16);
case 204:
            var25 = undefined;
            if(!var4) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var25 = undefined;
            if(!var1) { _fun0003_ip = 206; continue _fun0003 }
case 208:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 61;
            var1 = var16[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var25 = var1.bind(var4)(var2, var78, var75);
case 206:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var93 = 62;
            var1 = var1[var93];
            var21 = var4.bind(var5)(var1);
            var16 = var21.shouldDisplayGuildTag;
            var4 = var71.id;
            var24 = var18 != var64;
            var1 = undefined;
            if(!var24) { _fun0003_ip = 209; continue _fun0003 }
case 210:
            var1 = var64;
case 209:
            var1 = var16.bind(var21)(var4, var1);
            var24 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 211; continue _fun0003 }
case 212:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var93];
            var27 = var4.bind(var5)(var1);
            var4 = var27.getUserPrimaryGuild;
            var1 = var71.primaryGuild;
            var29 = var4.bind(var27)(var1);
            var27 = var29.guildId;
            var4 = var29.tag;
            var1 = var29.guildId;
            var31 = var18 != var1;
            var1 = undefined;
            if(!var31) { _fun0003_ip = 213; continue _fun0003 }
case 214:
            var91 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var93];
            var96 = var91.bind(var5)(var31);
            var93 = var96.getGuildTagBadgeUrl;
            var91 = var29.guildId;
            var31 = var29.badge;
            var29 = _closure1_slot26;
            var29 = var29.SIZE_12;
            var1 = var93.bind(var96)(var91, var31, var29);
case 213:
            var16 = var1;
            var24 = var27;
            var21 = var4;
case 211:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var97 = 29;
            var1 = var1[var97];
            var29 = var4.bind(var5)(var1);
            var27 = var29.hasFlag;
            var1 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 215; continue _fun0003 }
case 216:
            var1 = var41;
case 215:
            var4 = var1.flags;
            var1 = _closure1_slot24;
            var1 = var1.IS_VOICE_MESSAGE;
            var27 = var27.bind(var29)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var34;
            var1['message'] = var2;
            var1['theme'] = var20;
            var93 = var1.currentUserId;
            var91 = var1.message;
            var31 = var1.theme;
            var1 = var91.referralTrialOfferId;
            var29 = var91.type;
            var4 = _closure1_slot22;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var29 === var4)) { _fun0003_ip = 217; continue _fun0003 }
case 218:
            if(!(var18 != var1)) { _fun0003_ip = 217; continue _fun0003 }
case 219:
            var1 = {};
            var29 = _closure1_slot0;
            var96 = _closure1_slot2;
            var4 = 20;
            var4 = var96[var4];
            var29 = var29.bind(var5)(var4);
            var4 = var29.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var29)(var91, var31, var93);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 220; continue _fun0003;
case 217:
            var1 = _closure1_slot27;
case 220:
            var31 = var1.referralTrialOfferDataUpdated;
            var1 = {};
            var1['channel'] = var22;
            var1['currentUserId'] = var34;
            var1['message'] = var2;
            var1['theme'] = var20;
            var98 = var1.currentUserId;
            var96 = var1.message;
            var93 = var1.theme;
            var91 = var1.channel;
            var4 = var96.type;
            var1 = _closure1_slot22;
            var1 = var1.PREMIUM_GROUP_INVITE;
            var29 = undefined;
            if(!(var4 === var1)) { _fun0003_ip = 221; continue _fun0003 }
case 222:
            var4 = _closure1_slot0;
            var99 = _closure1_slot2;
            var1 = 21;
            var1 = var99[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.createPremiumGroupInviteEmbed;
            r107 = var4;
            r106 = var96;
            r105 = var93;
            r104 = var98;
            r103 = var91;
            var29 = r107[var1](r106, r105, r104, r103, r102);
case 221:
            var93 = _closure1_slot5;
            var4 = var93.getApplication;
            var96 = var2.applicationId;
            var98 = var18 != var96;
            var91 = '';
            var1 = var91;
            if(!var98) { _fun0003_ip = 223; continue _fun0003 }
case 224:
            var1 = var96;
case 223:
            var1 = var4.bind(var93)(var1);
            var93 = var18 != var1;
            if(!var93) { _fun0003_ip = 225; continue _fun0003 }
case 226:
            var96 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var97];
            var98 = var96.bind(var5)(var4);
            var97 = var98.hasFlag;
            var96 = var2.flags;
            var4 = _closure1_slot24;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var93 = var97.bind(var98)(var96, var4);
case 225:
            var4 = undefined;
            if(!var93) { _fun0003_ip = 227; continue _fun0003 }
case 228:
            var4 = var1.id;
case 227:
            var1 = {};
            var93 = var2.id;
            var1['id'] = var93;
            var93 = var2.channel_id;
            var1['channelId'] = var93;
            var96 = var18 != var64;
            var93 = undefined;
            if(!var96) { _fun0003_ip = 229; continue _fun0003 }
case 230:
            var93 = var64;
case 229:
            var1['guildId'] = var93;
            var93 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 231; continue _fun0003 }
case 232:
            var93 = var41;
case 231:
            var93 = var93.flags;
            var1['flags'] = var93;
            var93 = var2.type;
            var1['type'] = var93;
            var93 = var2.nonce;
            if(!(var18 != var93)) { _fun0003_ip = 233; continue _fun0003 }
case 234:
            var93 = var2.nonce;
            var96 = 'string';
            var93 = typeof var93;
            if(!(var96 === var93)) { _fun0003_ip = 235; continue _fun0003 }
case 233:
            var93 = var2.nonce;
            _fun0003_ip = 236; continue _fun0003;
case 235:
            var96 = global;
            var97 = var96.String;
            var96 = var2.nonce;
            var93 = var97.bind(var5)(var96);
case 236:
            var1['nonce'] = var93;
            var93 = var2.state;
            var1['state'] = var93;
            var1['reactions'] = var19;
            var93 = undefined;
            if(var52) { _fun0003_ip = 237; continue _fun0003 }
case 238:
            var93 = var95;
case 237:
            var1['referencedMessage'] = var93;
            var1['threadEmbed'] = var92;
            var93 = var18 != var94;
            var92 = undefined;
            if(!var93) { _fun0003_ip = 239; continue _fun0003 }
case 240:
            var93 = var94.getForwardInfo;
            var92 = var93.bind(var94)();
case 239:
            var1['forwardInfo'] = var92;
            var90 = !var90;
            if(!var90) { _fun0003_ip = 241; continue _fun0003 }
case 242:
            var90 = var2.mentioned;
case 241:
            var1['mentioned'] = var90;
            var90 = var2.isEdited;
            var92 = var90.bind(var2)();
            var90 = var91;
            if(!var92) { _fun0003_ip = 243; continue _fun0003 }
case 244:
            var90 = var91;
            if(var52) { _fun0003_ip = 243; continue _fun0003 }
case 245:
            var94 = _closure1_slot0;
            var95 = _closure1_slot2;
            var91 = 24;
            var92 = var95[var91];
            var92 = var94.bind(var5)(var92);
            var93 = var92.intl;
            var92 = var93.string;
            var91 = var95[var91];
            var91 = var94.bind(var5)(var91);
            var91 = var91.t;
            var91 = var91.C8sXIM;
            var90 = var92.bind(var93)(var91);
case 243:
            var1['edited'] = var90;
            var90 = var26.editedColor;
            var1['editedColor'] = var90;
            var90 = var2.isUnsupported;
            if(var90) { _fun0003_ip = 246; continue _fun0003 }
case 247:
            var90 = var26.textColor;
            _fun0003_ip = 248; continue _fun0003;
case 246:
            var90 = var26.unsupportedColor;
case 248:
            var1['textColor'] = var90;
            var90 = var26.linkColor;
            var1['linkColor'] = var90;
            var1['tagText'] = var89;
            var1['tagVerified'] = var88;
            var1['tagTextColor'] = var87;
            var1['tagBackgroundColor'] = var86;
            var1['tagType'] = var85;
            var1['tagIconUrl'] = var84;
            var1['opTagText'] = var83;
            var1['opTagTextColor'] = var82;
            var1['opTagBackgroundColor'] = var81;
            var1['constrainedWidth'] = var80;
            var1['gifAutoPlay'] = var56;
            var1['animateEmoji'] = var79;
            var79 = var75;
            if(!var67) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            var79 = var71.username;
case 249:
            var80 = var18 != var79;
            var75 = undefined;
            if(!var80) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var75 = var79;
case 251:
            var1['username'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var75 = var78.uri;
case 253:
            var1['avatarURL'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var75 = var77;
case 255:
            var1['avatarDecorationURL'] = var75;
            var71 = var71.id;
            var1['authorId'] = var71;
            if(var67) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var71 = 'username';
            if(!(var71 === var14)) { _fun0003_ip = 257; continue _fun0003 }
case 259:
            var75 = _closure1_slot3;
            var77 = var18 != var73;
            var71 = undefined;
            if(!var77) { _fun0003_ip = 260; continue _fun0003 }
case 261:
            var71 = var73;
case 260:
            var71 = var75.bind(var5)(var71);
            if(!(var18 == var71)) { _fun0003_ip = 262; continue _fun0003 }
case 263:
            var71 = var26.defaultUsernameColor;
case 262:
            _fun0003_ip = 264; continue _fun0003;
case 257:
            var71 = var26.defaultUsernameColor;
case 264:
            var1['usernameColor'] = var71;
            var71 = null;
            if(var67) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var77 = _closure1_slot3;
            var78 = var18 != var73;
            var75 = undefined;
            if(!var78) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var75 = var73;
case 267:
            var77 = var77.bind(var5)(var75);
            var78 = var18 != var77;
            var75 = null;
            if(!var78) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var75 = var77;
case 269:
            var71 = var75;
case 265:
            var1['roleColor'] = var71;
            var71 = null;
            if(!var74) { _fun0003_ip = 271; continue _fun0003 }
case 272:
            var71 = null;
            if(var67) { _fun0003_ip = 271; continue _fun0003 }
case 273:
            var75 = _closure1_slot0;
            var77 = _closure1_slot2;
            var74 = 63;
            var74 = var77[var74];
            var75 = var75.bind(var5)(var74);
            var74 = var75.processColorStrings;
            var71 = var74.bind(var75)(var76);
case 271:
            var1['roleColors'] = var71;
            var71 = 'dot';
            var71 = var71 === var14;
            var1['shouldShowRoleDot'] = var71;
            var71 = 'username';
            var71 = var71 === var14;
            var1['shouldShowRoleOnName'] = var71;
            var1['showLinkDecorations'] = var66;
            if(var67) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var71 = _closure1_slot3;
            var74 = var18 != var73;
            var66 = undefined;
            if(!var74) { _fun0003_ip = 276; continue _fun0003 }
case 277:
            var66 = var73;
case 276:
            var66 = var71.bind(var5)(var66);
            if(!(var18 == var66)) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var66 = var26.defaultUsernameColor;
case 278:
            _fun0003_ip = 280; continue _fun0003;
case 274:
            var66 = var26.defaultUsernameColor;
case 280:
            var1['colorString'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 281; continue _fun0003 }
case 282:
            var66 = var70;
case 281:
            var1['roleIcon'] = var66;
            var70 = var18 != var72;
            var66 = undefined;
            if(!var70) { _fun0003_ip = 283; continue _fun0003 }
case 284:
            var71 = _closure1_slot0;
            var73 = _closure1_slot2;
            var70 = 64;
            var70 = var73[var70];
            var71 = var71.bind(var5)(var70);
            var70 = var71.createConnectionsRoleTag;
            var66 = var70.bind(var71)(var72);
case 283:
            var1['connectionsRoleTag'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 285; continue _fun0003 }
case 286:
            var66 = var69;
case 285:
            var1['timestamp'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 287; continue _fun0003 }
case 288:
            var66 = var26.timestampColor;
case 287:
            var1['timestampColor'] = var66;
            var1['content'] = var65;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var52;
            var65 = undefined;
            if(!(var5 !== var68)) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var67 = _closure1_slot0;
            var69 = _closure1_slot2;
            var66 = 65;
            var66 = var69[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.createSurveyIndication;
            var65 = var66.bind(var67)(var2, var20, var68);
case 289:
            var1['surveyIndication'] = var65;
            var66 = _closure1_slot0;
            var67 = _closure1_slot2;
            var65 = 66;
            var65 = var67[var65];
            var66 = var66.bind(var5)(var65);
            var65 = var66.createEphemeralIndication;
            var65 = var65.bind(var66)(var2);
            var1['ephemeralIndication'] = var65;
            var1['interactionStatus'] = var53;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 291; continue _fun0003 }
case 292:
            var65 = _closure1_slot0;
            var66 = _closure1_slot2;
            var55 = 67;
            var55 = var66[var55];
            var66 = var65.bind(var5)(var55);
            var65 = var66.createExecutedCommand;
            r102 = var26.defaultUsernameColor;
            r107 = var66;
            r106 = var2;
            r105 = var22;
            r104 = var14;
            r103 = var20;
            var53 = r107[var65](r106, r105, r104, r103, r102, r101);
case 291:
            var1['executedCommand'] = var53;
            var53 = var41.components;
            var53 = var53.length;
            var55 = var53 > var50;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 293; continue _fun0003 }
case 294:
            var53 = undefined;
            if(!var54) { _fun0003_ip = 293; continue _fun0003 }
case 295:
            var55 = _closure1_slot1;
            var65 = _closure1_slot2;
            var54 = 68;
            var54 = var65[var54];
            var55 = var55.bind(var5)(var54);
            var54 = {};
            var54['message'] = var2;
            var54['guildId'] = var64;
            var54['interaction'] = var63;
            var54['shouldDisableInteractiveComponents'] = var62;
            var54['shouldShowMedia'] = var61;
            var54['shouldObscureSpoiler'] = var60;
            var54['enabledContentHarmTypeFlags'] = var59;
            var54['shouldAgeVerify'] = var58;
            var54['shouldShowMosaicMediaDescriptions'] = var57;
            var54['shouldAutoPlayGifs'] = var56;
            var54['colors'] = var26;
            var53 = var55.bind(var5)(var54);
case 293:
            var1['components'] = var53;
            var53 = 0;
            if(var52) { _fun0003_ip = 296; continue _fun0003 }
case 297:
            var53 = var26.feedbackColor;
case 296:
            var1['feedbackColor'] = var53;
            var50 = 0;
            if(var52) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            var50 = var26.highlightColor;
case 298:
            var1['highlightColor'] = var50;
            var52 = var18 != var51;
            var50 = undefined;
            if(!var52) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var50 = var51;
case 300:
            var1['embeds'] = var50;
            if(var49) { _fun0003_ip = 302; continue _fun0003 }
case 303:
            var49 = new Array(0);
            _fun0003_ip = 304; continue _fun0003;
case 302:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 69;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createGiftCodeEmbed;
            var49 = var50.bind(var51)(var2, var20);
case 304:
            var1['giftCodes'] = var49;
            if(var46) { _fun0003_ip = 305; continue _fun0003 }
case 306:
            var46 = new Array(0);
            _fun0003_ip = 307; continue _fun0003;
case 305:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 70;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createCodedLinkEmbeds;
            var46 = var49.bind(var50)(var2, var41, var20);
case 307:
            var1['codedLinks'] = var46;
            var46 = undefined;
            if(!var48) { _fun0003_ip = 308; continue _fun0003 }
case 309:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 71;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityInstanceEmbed;
            var46 = var48.bind(var49)(var2);
case 308:
            var1['activityInstanceEmbed'] = var46;
            var46 = undefined;
            if(!var47) { _fun0003_ip = 310; continue _fun0003 }
case 311:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 72;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityRichPresenceInviteEmbed;
            var46 = var47.bind(var48)(var2, var22);
case 310:
            var1['activityRichPresenceInviteEmbed'] = var46;
            if(!var39) { _fun0003_ip = 312; continue _fun0003 }
case 313:
            if(!var43) { _fun0003_ip = 314; continue _fun0003 }
case 315:
            if(var44) { _fun0003_ip = 316; continue _fun0003 }
case 317:
            var44 = var45;
case 316:
            var43 = var44;
case 314:
            if(var43) { _fun0003_ip = 318; continue _fun0003 }
case 319:
            var43 = var38;
case 318:
            var39 = var43;
case 312:
            var1['useAttachmentGridLayout'] = var39;
            var1['useAttachmentUploadPreview'] = var38;
            var1['attachments'] = var37;
            var43 = 1;
            var37 = var43;
            if(!var38) { _fun0003_ip = 320; continue _fun0003 }
case 321:
            var39 = var2.state;
            var38 = _closure1_slot23;
            var38 = var38.SEND_FAILED;
            var37 = var43;
            if(!(var39 === var38)) { _fun0003_ip = 320; continue _fun0003 }
case 322:
            var37 = 0.2;
case 320:
            var1['attachmentsOpacity'] = var37;
            var38 = _closure1_slot1;
            var39 = _closure1_slot2;
            var37 = 73;
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
            var1['stickers'] = var37;
            if(!var33) { _fun0003_ip = 323; continue _fun0003 }
case 324:
            var33 = var36;
case 323:
            var1['communicationDisabled'] = var33;
            var36 = var18 == var22;
            if(var36) { _fun0003_ip = 325; continue _fun0003 }
case 326:
            var33 = var22.isForumPost;
            var33 = var33.bind(var22)();
            var36 = !var33;
case 325:
            var33 = !var36;
            if(var36) { _fun0003_ip = 327; continue _fun0003 }
case 328:
            var37 = var2.id;
            var36 = var2.channel_id;
            var33 = var37 === var36;
case 327:
            var1['isFirstForumPostMessage'] = var33;
            var36 = var18 != var22;
            var33 = undefined;
            if(!var36) { _fun0003_ip = 329; continue _fun0003 }
case 330:
            var36 = var22.isForumPost;
            var36 = var36.bind(var22)();
            var33 = undefined;
            if(!var36) { _fun0003_ip = 329; continue _fun0003 }
case 331:
            var33 = undefined;
            if(!var35) { _fun0003_ip = 329; continue _fun0003 }
case 332:
            var35 = _closure1_slot29;
            var33 = var35.bind(var5)(var2, var22);
case 329:
            var1['postActions'] = var33;
            var33 = var2.author;
            var33 = var33.id;
            var33 = var33 === var34;
            var1['isCurrentUserMessageAuthor'] = var33;
            var33 = _closure1_slot6;
            var33 = var33.gradientPreset;
            var33 = var18 != var33;
            var1['usingGradientTheme'] = var33;
            var34 = _closure1_slot0;
            var37 = _closure1_slot2;
            var33 = 25;
            var35 = var37[var33];
            var39 = var34.bind(var5)(var35);
            var38 = var39.getAssetUriForEmbed;
            var36 = _closure1_slot1;
            var35 = 74;
            var35 = var37[var35];
            var35 = var36.bind(var5)(var35);
            var35 = var38.bind(var39)(var35);
            var1['swipeToReplyIconUrl'] = var35;
            var33 = var37[var33];
            var35 = var34.bind(var5)(var33);
            var34 = var35.getAssetUriForEmbed;
            var33 = 75;
            var33 = var37[var33];
            var33 = var36.bind(var5)(var33);
            var33 = var34.bind(var35)(var33);
            var1['swipeToEditIconUrl'] = var33;
            var1['referralTrialOfferInfo'] = var31;
            var1['premiumGroupInviteInfo'] = var29;
            if(var28) { _fun0003_ip = 333; continue _fun0003 }
case 334:
            var28 = new Array(0);
            _fun0003_ip = 335; continue _fun0003;
case 333:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 76;
            var29 = var33[var29];
            var31 = var31.bind(var5)(var29);
            var29 = var31.createPostPreviewEmbeds;
            var28 = var29.bind(var31)(var2, var32);
case 335:
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
            if(!var27) { _fun0003_ip = 336; continue _fun0003 }
case 337:
            var25 = var26.embedBackgroundColor;
case 336:
            var1['audioAttachmentBackgroundColor'] = var25;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 80;
            var25 = var27[var25];
            var26 = var26.bind(var5)(var25);
            var25 = var26.createMessageAccessibilityActions;
            var25 = var25.bind(var26)(var2, var22);
            var1['accessibilityActions'] = var25;
            var1['clanTagGuildId'] = var24;
            var1['clanTag'] = var21;
            var1['clanBadgeUrl'] = var16;
            var1['isFirst'] = var13;
            var1['gameApplicationId'] = var4;
            var4 = var18 == var22;
            var16 = undefined;
            if(var4) { _fun0003_ip = 338; continue _fun0003 }
case 339:
            var16 = var22.type;
case 338:
            var4 = _closure1_slot25;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 81;
            var4 = var21[var4];
            var21 = var16.bind(var5)(var4);
            var16 = var21.createDisplayNameStylesMobile;
            var4 = var2.author;
            var4 = var16.bind(var21)(var4, var23);
            var1['displayNameStyles'] = var4;
            return var1;
case 61:
            var4 = var2.type;
            var1 = _closure1_slot22;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 340; continue _fun0003 }
case 341:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 37;
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
            if(var21) { _fun0003_ip = 342; continue _fun0003 }
case 343:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
case 342:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 344; continue _fun0003;
case 340:
            var4 = {};
            var16 = _closure1_slot28;
            r107 = undefined;
            r106 = var2;
            r105 = var14;
            r104 = var6;
            r103 = var17;
            r102 = var7;
            var16 = r107[var16](r106, r105, r104, r103, r102, r101);
            var4['threadEmbed'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 37;
            var16 = var18[var16];
            var18 = var17.bind(var5)(var16);
            var17 = var18.createSystemMessageContent;
            var16 = {};
            var16['message'] = var2;
            var16['theme'] = var20;
            var16['reactions'] = var19;
            var16['roleStyle'] = var14;
            r105 = var17.bind(var18)(var16);
            r106 = var4;
            var16 = copyDataProperties(r106, r105);
            var1 = var4;
case 344:
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
            r106 = var6;
            r105 = var7;
            var7 = copyDataProperties(r106, r105);
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[var7] = var8;
            var3['options'] = var6;
            r105 = var4.bind(var5)(var3);
            r106 = var1;
            var3 = copyDataProperties(r106, r105);
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
    var4 = 82;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();