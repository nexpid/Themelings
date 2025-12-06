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
            var93 = var1.messageForward;
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
            var67 = var1.pushFeedbackType;
            var51 = var1.renderContentOnly;
            var30 = var1.showContentInventoryEntryFallbackEmbed;
            var22 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var19 = var7.inlineEmbedMedia;
            var17 = var7.inlineAttachmentMedia;
            var79 = var7.constrainedWidth;
            var89 = var7.ignoreMentioned;
            var78 = var7.animateEmoji;
            var39 = var7.animatingStickerMessageId;
            var55 = var7.gifAutoPlay;
            var45 = var7.renderCodedLinks;
            var48 = var7.renderGiftCode;
            var47 = var7.renderActivityInstanceEmbed;
            var46 = var7.renderActivityInviteEmbed;
            var53 = var7.renderComponents;
            var21 = var7.renderThreadEmbeds;
            var23 = var7.renderReplies;
            var31 = var7.renderCommunicationDisabled;
            var42 = var7.renderAttachments;
            var54 = var7.renderExecutedCommands;
            var16 = var7.renderPolls;
            var4 = var7.renderSharedClientTheme;
            var34 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var35 = var7.ignoreEmbedDescriptionCache;
            var36 = var7.forceHideSimpleEmbedContent;
            var59 = var7.shouldObscureSpoiler;
            var61 = var7.shouldDisableInteractiveComponents;
            var8 = var7.useAlternateEmbedColors;
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
            var26 = var1.bind(var5)(var20, var8);
            var8 = _closure1_slot0;
            var1 = 31;
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
            var60 = var8 === var11;
            var28 = var60;
            if(!var60) { _fun0003_ip = 40; continue _fun0003 }
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
            var33 = var60;
            if(!var60) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var33 = var19;
case 44:
            var38 = var60;
            if(!var38) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var38 = var17;
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
            var17 = 21;
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
            var24 = 32;
            var24 = var29[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.getHasEnhancedRoleColors;
            var73 = var24.bind(var25)(var19, var27);
            var63 = var19;
            if(!(var18 == var93)) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = 33;
            var19 = var25[var19];
            var24 = var24.bind(var5)(var19);
            var19 = var24.maybeCreateSingleForwardForMessage;
            var93 = var19.bind(var24)(var2);
case 50:
            var40 = var2;
            if(!(var18 != var93)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var19 = var93.messageSnapshot;
            var40 = var19.message;
case 52:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var15 = 34;
            var15 = var25[var15];
            var24 = var24.bind(var5)(var15);
            var15 = {};
            var25 = var2.reactions;
            var15['reactions'] = var25;
            var15['animateEmoji'] = var78;
            var19 = var24.bind(var5)(var15);
case 54:
            var25 = var2.type;
            var15 = _closure1_slot22;
            var24 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var25 === var24)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var27 = _closure1_slot11;
            var25 = var27.getMessageByReference;
            var24 = var2.messageReference;
            var25 = var25.bind(var27)(var24);
            var29 = var25.state;
            var24 = _closure1_slot12;
            var27 = var24.LOADED;
            var24 = null;
            if(!(var29 === var27)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var24 = var25.message;
case 58:
            var15 = var24;
case 56:
            if(!(var18 == var15)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var24 = 35;
            var24 = var27[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.bind(var5)(var2);
            if(var24) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var66 = !var13;
            if(var66) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var66 = var51;
case 64:
            var70 = var2.author;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 37;
            var24 = var27[var24];
            var27 = var25.bind(var5)(var24);
            var25 = var27.isMessageNewerThanImprovedMarkdownEpoch;
            var29 = var2.editedTimestamp;
            if(!(var18 == var29)) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var29 = var2.timestamp;
case 66:
            var24 = var29.valueOf;
            var24 = var24.bind(var29)();
            var32 = var25.bind(var27)(var24);
            var24 = var40.content;
            if(!(var18 != var24)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var25 = var40.content;
            var24 = '';
            if(!(var24 === var25)) { _fun0003_ip = 70; continue _fun0003 }
case 68:
            var24 = {};
            var24['content'] = var5;
            var24['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 71; continue _fun0003;
case 70:
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 38;
            var25 = var29[var25];
            var29 = var27.bind(var5)(var25);
            var27 = var29.parseMessageMarkup;
            if(var36) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var25 = var28;
            if(!var25) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var25 = var33;
case 74:
            var36 = var25;
case 72:
            var25 = var18 != var17;
            if(!var25) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var37 = var2.isFirstMessageInForumPost;
            var25 = var37.bind(var2)(var17);
case 76:
            r104 = var29;
            r103 = var2;
            r102 = var40;
            r101 = var36;
            r100 = var6;
            var100 = var25;
            var99 = var32;
            var98 = var32;
            var24 = r104[var27](r103, r102, r101, r100, var100, var99, var98, var97);
case 71:
            var27 = var24.content;
            var36 = var24.hasSpoilerEmbeds;
            var25 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 39;
            var24 = var29[var24];
            var37 = var25.bind(var5)(var24);
            var24 = var37.getEnabledHarmTypesForMessage;
            var58 = var24.bind(var37)(var2);
            var24 = 40;
            var24 = var29[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.shouldAgeVerifyForExplicitMedia;
            var57 = var24.bind(var25)();
            var25 = undefined;
            if(!var28) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var29 = _closure1_slot1;
            var37 = _closure1_slot2;
            var24 = 41;
            var24 = var37[var24];
            var29 = var29.bind(var5)(var24);
            var24 = {};
            var37 = var40.embeds;
            var24['embeds'] = var37;
            var37 = var2.channel_id;
            var24['channelId'] = var37;
            var24['gifAutoPlay'] = var55;
            var24['hasSpoilerEmbeds'] = var36;
            var24['ignoreEmbedDescriptionCache'] = var35;
            var24['shouldInlineEmbedMedia'] = var33;
            var24['colors'] = var26;
            var24['showListsAndHeaders'] = var32;
            var24['showMaskedLinks'] = var32;
            var32 = var26.embedBackgroundColor;
            var24['themedBackgroundColor'] = var32;
            var24['enabledContentHarmTypeFlags'] = var58;
            var24['shouldAgeVerify'] = var57;
            var32 = var2.author;
            var32 = var32.bot;
            var24['authorIsBot'] = var32;
            var24['showContentInventoryEntryFallbackEmbed'] = var30;
            var25 = var29.bind(var5)(var24);
case 78:
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 42;
            var24 = var30[var24];
            var29 = var29.bind(var5)(var24);
            var24 = {};
            var24['message'] = var2;
            var24['isSystemDM'] = var10;
            var24['channel'] = var22;
            var24['colors'] = var26;
            var24 = var29.bind(var5)(var24);
            var88 = var24.tagText;
            var87 = var24.tagVerified;
            var86 = var24.tagTextColor;
            var85 = var24.tagBackgroundColor;
            var84 = var24.tagType;
            var83 = var24.tagIconUrl;
            var82 = var24.opTagText;
            var81 = var24.opTagTextColor;
            var80 = var24.opTagBackgroundColor;
            var30 = _closure1_slot20;
            var29 = var30.getUploaderFileForMessageId;
            var24 = var2.id;
            var29 = var29.bind(var30)(var24);
            var37 = var18 != var29;
            var30 = var2.state;
            var24 = _closure1_slot23;
            var24 = var24.SEND_FAILED;
            var24 = var30 !== var24;
            if(var24) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var30 = var2.isCommandType;
            var24 = var30.bind(var2)();
case 80:
            var30 = var25;
            if(var24) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var24 = var25;
            if(!(var18 == var25)) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var24 = new Array(0);
case 84:
            var32 = var24.push;
            var33 = _closure1_slot1;
            var35 = _closure1_slot2;
            var25 = 43;
            var25 = var35[var25];
            var33 = var33.bind(var5)(var25);
            var25 = {};
            var25['uploaderFile'] = var29;
            var25['useAttachmentUploadPreview'] = var37;
            var25['colors'] = var26;
            var25 = var33.bind(var5)(var25);
            var25 = var32.bind(var24)(var25);
            var30 = var24;
case 82:
            var32 = _closure1_slot8;
            var25 = var32.getMessage;
            var24 = var2.id;
            var25 = var25.bind(var32)(var24);
            var50 = var30;
            if(!(var18 != var25)) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var24 = var30;
            if(!(var18 == var30)) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var24 = new Array(0);
case 88:
            var35 = var25.errorMessage;
            var30 = var24.push;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var25 = 43;
            var25 = var33[var25];
            var33 = var32.bind(var5)(var25);
            var32 = var33.createAutomodBlockedMessageEmbed;
            var25 = {};
            var25['errorMessage'] = var35;
            var25['colors'] = var26;
            var25 = var32.bind(var33)(var25);
            var25 = var30.bind(var24)(var25);
            var50 = var24;
case 86:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var33 = 44;
            var24 = var30[var33];
            var35 = var25.bind(var5)(var24);
            var32 = var35.getUserAuthor;
            var24 = var2.author;
            var24 = var32.bind(var35)(var24, var22);
            var44 = var24.guildMemberAvatar;
            var35 = var24.guildMemberAvatarDecoration;
            var32 = var24.iconRoleId;
            var24 = 45;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.ensureAvatarSource;
            var24 = var2.isInteractionPlaceholder;
            var24 = var24.bind(var2)();
            if(!var24) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var24 = var2.author;
            var24 = var24.avatar;
            if(!(var18 == var24)) { _fun0003_ip = 90; continue _fun0003 }
case 92:
            if(!(var18 == var44)) { _fun0003_ip = 90; continue _fun0003 }
case 93:
            var36 = var2.application;
            var41 = var18 == var36;
            var24 = undefined;
            if(var41) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var24 = var36.icon;
case 94:
            if(!(var18 == var24)) { _fun0003_ip = 96; continue _fun0003 }
case 90:
            if(!(var18 != var44)) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            if(!(var18 == var63)) { _fun0003_ip = 99; continue _fun0003 }
case 97:
            var24 = var70.getAvatarSource;
            var24 = var24.bind(var70)(var5);
            _fun0003_ip = 100; continue _fun0003;
case 99:
            var41 = _closure1_slot1;
            var43 = _closure1_slot2;
            var36 = 46;
            var36 = var43[var36];
            var43 = var41.bind(var5)(var36);
            var41 = var43.getGuildMemberAvatarSource;
            var36 = {};
            var49 = var70.id;
            var36['userId'] = var49;
            var36['avatar'] = var44;
            var36['guildId'] = var63;
            var24 = var41.bind(var43)(var36, var70);
case 100:
            _fun0003_ip = 101; continue _fun0003;
case 96:
            var41 = _closure1_slot1;
            var43 = _closure1_slot2;
            var36 = 46;
            var36 = var43[var36];
            var43 = var41.bind(var5)(var36);
            var41 = var43.getApplicationIconSource;
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
            var24 = var41.bind(var43)(var36);
case 101:
            var77 = var25.bind(var30)(var24);
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 46;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.getAvatarDecorationURL;
            var24 = {};
            if(!(var18 == var35)) { _fun0003_ip = 102; continue _fun0003 }
case 103:
            var35 = var70.avatarDecoration;
case 102:
            var24['avatarDecoration'] = var35;
            var43 = _closure1_slot0;
            var44 = _closure1_slot2;
            var35 = 47;
            var35 = var44[var35];
            var41 = var43.bind(var5)(var35);
            var36 = var41.getDecorationSizeForAvatarSize;
            var35 = 48;
            var35 = var44[var35];
            var35 = var43.bind(var5)(var35);
            var35 = var35.AvatarSizes;
            var35 = var35.NORMAL;
            var35 = var36.bind(var41)(var35);
            var24['size'] = var35;
            var76 = var25.bind(var30)(var24);
            var24 = var18 != var32;
            var69 = undefined;
            if(!var24) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var24 = var18 != var63;
            var69 = undefined;
            if(!var24) { _fun0003_ip = 104; continue _fun0003 }
case 106:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 49;
            var24 = var30[var24];
            var30 = var25.bind(var5)(var24);
            var25 = var30.getRoleIcon;
            var24 = {};
            var24['guildId'] = var63;
            var24['roleId'] = var32;
            var32 = 18;
            var24['size'] = var32;
            var69 = var25.bind(var30)(var24);
case 104:
            var25 = var2.hasFlag;
            var24 = _closure1_slot24;
            var24 = var24.SOURCE_MESSAGE_DELETED;
            var24 = var25.bind(var2)(var24);
            if(!var24) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var24 = 23;
            var25 = var35[var24];
            var25 = var32.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var35[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.JOtgSw;
            var27 = var25.bind(var30)(var24);
case 107:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var33];
            var25 = var25.bind(var5)(var24);
            var24 = var25.getMessageAuthor;
            var24 = var24.bind(var25)(var2);
            var74 = var24.nick;
            var72 = var24.colorString;
            var75 = var24.colorStrings;
            var25 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.INTERACTION_PREMIUM_UPSELL;
            if(!(var25 === var24)) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var25 = _closure1_slot0;
            var35 = _closure1_slot2;
            var24 = 23;
            var30 = var35[var24];
            var30 = var25.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.formatToPlainString;
            var24 = var35[var24];
            var24 = var25.bind(var5)(var24);
            var24 = var24.t;
            var25 = var24.u4A+xK;
            var24 = {};
            var24['appName'] = var74;
            var27 = var30.bind(var32)(var25, var24);
case 109:
            var25 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.REPLY;
            var94 = undefined;
            if(!(var25 === var24)) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var94 = undefined;
            if(!var23) { _fun0003_ip = 111; continue _fun0003 }
case 113:
            var25 = _closure1_slot11;
            var24 = var25.getMessageByReference;
            var23 = var2.messageReference;
            var23 = var24.bind(var25)(var23);
            var25 = var23.state;
            var24 = _closure1_slot12;
            var24 = var24.LOADED;
            if(!(var24 !== var25)) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var24 = _closure1_slot12;
            var24 = var24.NOT_LOADED;
            if(!(var24 !== var25)) { _fun0003_ip = 116; continue _fun0003 }
case 117:
            var24 = _closure1_slot12;
            var24 = var24.DELETED;
            if(!(var24 !== var25)) { _fun0003_ip = 118; continue _fun0003 }
case 119:
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 51;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.assertNever;
            var24 = var24.bind(var25)(var23);
            var94 = undefined;
            _fun0003_ip = 111; continue _fun0003;
case 118:
            var24 = {};
            var25 = _closure1_slot21;
            var25 = var25.SYSTEM;
            var24['state'] = var25;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var25 = 23;
            var30 = var36[var25];
            var30 = var35.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var25 = var36[var25];
            var25 = var35.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.mE3KJN;
            var25 = var30.bind(var32)(var25);
            var24['content'] = var25;
            var94 = var24;
            _fun0003_ip = 111; continue _fun0003;
case 116:
            var24 = {};
            var25 = _closure1_slot21;
            var25 = var25.SYSTEM;
            var24['state'] = var25;
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var25 = 23;
            var30 = var36[var25];
            var30 = var35.bind(var5)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var25 = var36[var25];
            var25 = var35.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.1i+hMi;
            var25 = var30.bind(var32)(var25);
            var24['content'] = var25;
            var94 = var24;
            _fun0003_ip = 111; continue _fun0003;
case 114:
            var23 = var23.message;
            var25 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 33;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.maybeCreateSingleForwardForMessage;
            var30 = var24.bind(var25)(var23);
            var25 = _closure1_slot19;
            var24 = var25.isBlockedForMessage;
            var24 = var24.bind(var25)(var23);
            if(var24) { _fun0003_ip = 120; continue _fun0003 }
case 121:
            var25 = _closure1_slot19;
            var24 = var25.isIgnoredForMessage;
            var24 = var24.bind(var25)(var23);
            if(var24) { _fun0003_ip = 122; continue _fun0003 }
case 123:
            var25 = _closure1_slot30;
            var24 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var24['message'] = var23;
            var24['messageForward'] = var30;
            var24['roleStyle'] = var14;
            var32 = {};
            r103 = var32;
            r102 = var7;
            var35 = copyDataProperties(r103, r102);
            var35 = 'renderReplies';
            var32[var35] = var9;
            var24['options'] = var32;
            var25 = var25.bind(var5)(var24);
            if(!(var18 != var25)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var24 = 'username';
            var24 = var24 in var25;
            if(!var24) { _fun0003_ip = 126; continue _fun0003 }
case 127:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var33];
            var32 = var32.bind(var5)(var24);
            var24 = var32.getMessageAuthor;
            var24 = var24.bind(var32)(var23);
            var32 = var24.nick;
            var33 = var24.colorString;
            if(!(var18 == var32)) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var24 = var23.author;
            var32 = var24.username;
case 128:
            var35 = var18 != var32;
            var24 = undefined;
            if(!var35) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var24 = var32;
case 130:
            var25['username'] = var24;
            if(var66) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var32 = _closure1_slot3;
            var35 = var18 != var33;
            var24 = undefined;
            if(!var35) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var24 = var33;
case 134:
            var24 = var32.bind(var5)(var24);
            if(!(var18 == var24)) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var24 = var25.colorString;
case 136:
            _fun0003_ip = 138; continue _fun0003;
case 132:
            var24 = var25.colorString;
case 138:
            var25['colorString'] = var24;
            var32 = _closure1_slot1;
            var33 = _closure1_slot2;
            var24 = 50;
            var24 = var33[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.bind(var5)(var2, var23);
            if(!var24) { _fun0003_ip = 126; continue _fun0003 }
case 139:
            var32 = var25.username;
            var24 = '@';
            var24 = var24 + var32;
            var25['username'] = var24;
case 126:
            var32 = var18 == var30;
            var24 = undefined;
            if(var32) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var30 = var30.messageSnapshot;
            var24 = var30.message;
case 140:
            var33 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var33 = var24;
case 142:
            var24 = 'stickers';
            var24 = var24 in var33;
            if(var24) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var24 = new Array(0);
            _fun0003_ip = 146; continue _fun0003;
case 144:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 27;
            var30 = var35[var30];
            var32 = var32.bind(var5)(var30);
            var30 = var32.getMessageStickers;
            var24 = var30.bind(var32)(var33);
case 146:
            var24 = var24.length;
            var30 = 0;
            if(!(!(var24 > var30))) { _fun0003_ip = 147; continue _fun0003 }
case 148:
            var24 = 'interaction';
            var24 = var24 in var33;
            if(!var24) { _fun0003_ip = 149; continue _fun0003 }
case 150:
            var24 = var33.interaction;
            if(!(var18 != var24)) { _fun0003_ip = 149; continue _fun0003 }
case 151:
            var32 = var33.content;
            var24 = '';
            if(!(var24 !== var32)) { _fun0003_ip = 152; continue _fun0003 }
case 149:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var35 = 28;
            var24 = var24[var35];
            var41 = var32.bind(var5)(var24);
            var36 = var41.hasFlag;
            var32 = var33.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_VOICE_MESSAGE;
            var24 = var36.bind(var41)(var32, var24);
            if(var24) { _fun0003_ip = 153; continue _fun0003 }
case 154:
            var32 = var33.type;
            var24 = _closure1_slot22;
            var24 = var24.POLL_RESULT;
            if(!(var32 !== var24)) { _fun0003_ip = 155; continue _fun0003 }
case 156:
            var32 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var35];
            var36 = var32.bind(var5)(var24);
            var35 = var36.hasFlag;
            var32 = var33.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_COMPONENTS_V2;
            var24 = var35.bind(var36)(var32, var24);
            if(var24) { _fun0003_ip = 157; continue _fun0003 }
case 158:
            var24 = var33.embeds;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 159; continue _fun0003 }
case 160:
            var24 = var33.attachments;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 159; continue _fun0003 }
case 161:
            var32 = var33.content;
            var30 = '';
            var24 = null;
            if(!(var30 === var32)) { _fun0003_ip = 162; continue _fun0003 }
case 159:
            var36 = _closure1_slot0;
            var41 = _closure1_slot2;
            var30 = 23;
            var32 = var41[var30];
            var32 = var36.bind(var5)(var32);
            var35 = var32.intl;
            var32 = var35.string;
            var30 = var41[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.JAKsM8;
            var24 = var32.bind(var35)(var30);
case 162:
            _fun0003_ip = 163; continue _fun0003;
case 157:
            var36 = _closure1_slot0;
            var41 = _closure1_slot2;
            var30 = 23;
            var32 = var41[var30];
            var32 = var36.bind(var5)(var32);
            var35 = var32.intl;
            var32 = var35.string;
            var30 = var41[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.Xxm5i3;
            var24 = var32.bind(var35)(var30);
case 163:
            _fun0003_ip = 164; continue _fun0003;
case 155:
            var32 = _closure1_slot0;
            var35 = _closure1_slot2;
            var30 = 29;
            var30 = var35[var30];
            var32 = var32.bind(var5)(var30);
            var30 = var32.getPollResultsReplyPreviewMobile;
            var24 = var30.bind(var32)(var33);
case 164:
            _fun0003_ip = 165; continue _fun0003;
case 153:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 23;
            var32 = var36[var30];
            var32 = var35.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var30 = var36[var30];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.6bhHrc;
            var24 = var32.bind(var33)(var30);
case 165:
            _fun0003_ip = 166; continue _fun0003;
case 152:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 23;
            var32 = var36[var30];
            var32 = var35.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var30 = var36[var30];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.2v7kfl;
            var24 = var32.bind(var33)(var30);
case 166:
            _fun0003_ip = 167; continue _fun0003;
case 147:
            var35 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 23;
            var32 = var36[var30];
            var32 = var35.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var30 = var36[var30];
            var30 = var35.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.7K5Lma;
            var24 = var32.bind(var33)(var30);
case 167:
            var30 = var23.type;
            var23 = _closure1_slot22;
            var23 = var23.POLL_RESULT;
            if(!(var30 === var23)) { _fun0003_ip = 168; continue _fun0003 }
case 169:
            var25['content'] = var24;
case 168:
            var23 = {};
            var30 = _closure1_slot21;
            var30 = var30.LOADED;
            var23['state'] = var30;
            var23['message'] = var25;
            var94 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 111; continue _fun0003 }
case 170:
            var23['systemContent'] = var24;
            var94 = var23;
            _fun0003_ip = 111; continue _fun0003;
case 124:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var25 = var33[var24];
            var25 = var32.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var33[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.1i+hMi;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
            _fun0003_ip = 111; continue _fun0003;
case 122:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var25 = var33[var24];
            var25 = var32.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var33[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.G7p6v/;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
            _fun0003_ip = 111; continue _fun0003;
case 120:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var25 = var33[var24];
            var25 = var32.bind(var5)(var25);
            var30 = var25.intl;
            var25 = var30.string;
            var24 = var33[var24];
            var24 = var32.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.XAkOo2;
            var24 = var25.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
case 111:
            var91 = undefined;
            if(!var21) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var21 = _closure1_slot28;
            r104 = undefined;
            r103 = var2;
            r102 = var14;
            r101 = var6;
            r100 = var17;
            var100 = var7;
            var91 = r104[var21](r103, r102, r101, r100, var100, var99);
case 171:
            var23 = _closure1_slot9;
            var21 = var23.getInteraction;
            var62 = var21.bind(var23)(var2);
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 52;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.createInteractionStatus;
            var52 = var21.bind(var23)(var2, var62);
            var23 = var18 != var63;
            var21 = null;
            if(!var23) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var25 = _closure1_slot18;
            var24 = var25.getMember;
            var23 = var70.id;
            var21 = var24.bind(var25)(var63, var23);
case 173:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 53;
            var23 = var25[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isMemberCommunicationDisabled;
            var35 = var23.bind(var24)(var21);
            var23 = _closure1_slot4;
            var32 = var23.useReducedMotion;
            var23 = _closure1_slot4;
            var65 = var23.alwaysShowLinkDecorations;
            var24 = var18 == var22;
            var23 = var21;
            var21 = undefined;
            if(var24) { _fun0003_ip = 175; continue _fun0003 }
case 176:
            var21 = var22.parent_id;
case 175:
            var30 = var22;
            if(!(var18 != var21)) { _fun0003_ip = 177; continue _fun0003 }
case 178:
            var30 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 177; continue _fun0003 }
case 179:
            var21 = var22.isThread;
            var21 = var21.bind(var22)();
            var30 = var22;
            if(!var21) { _fun0003_ip = 177; continue _fun0003 }
case 180:
            var25 = _closure1_slot17;
            var24 = var25.getChannel;
            var21 = var22.parent_id;
            var30 = var24.bind(var25)(var21);
case 177:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 54;
            var21 = var25[var21];
            var25 = var24.bind(var5)(var21);
            var24 = var25.getVisibleConnectionsRole;
            var21 = {};
            var21['guildMember'] = var23;
            var21['channel'] = var30;
            var21['onlyChannelConnectionRoles'] = var8;
            var71 = var24.bind(var25)(var21);
            var21 = var40.attachments;
            var21 = var21.length;
            var49 = 0;
            var43 = var49 !== var21;
            var21 = var40.embeds;
            var21 = var21.length;
            var44 = var49 !== var21;
            var21 = var37;
            if(!var37) { _fun0003_ip = 181; continue _fun0003 }
case 182:
            var24 = var2.attachments;
            var24 = var24.length;
            var21 = var49 === var24;
case 181:
            if(!var21) { _fun0003_ip = 183; continue _fun0003 }
case 184:
            var21 = var18 != var29;
case 183:
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var41 = 55;
            var24 = var24[var41];
            var24 = var25.bind(var5)(var24);
            var25 = var24.ViewImageDescriptions;
            var24 = var25.getSetting;
            var56 = var24.bind(var25)();
            var36 = new Array(0);
            if(var21) { _fun0003_ip = 185; continue _fun0003 }
case 186:
            if(!var42) { _fun0003_ip = 187; continue _fun0003 }
case 188:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 57;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var30 = var40.attachments;
            var24['attachments'] = var30;
            var64 = _closure1_slot20;
            var33 = var64.getUploadAttachments;
            var30 = var2.nonce;
            var30 = var33.bind(var64)(var30);
            var24['uploadAttachments'] = var30;
            var24['shouldInlineAttachmentMedia'] = var38;
            var24['gifAutoPlay'] = var55;
            var24['viewImageDescriptions'] = var56;
            var24['useReducedMotion'] = var32;
            var24['shouldObscureSpoiler'] = var59;
            var30 = var26.embedBackgroundColor;
            var24['themedBackgroundColor'] = var30;
            var24['enabledContentHarmTypeFlags'] = var58;
            var24['shouldAgeVerify'] = var57;
            var24['colors'] = var26;
            var36 = var25.bind(var5)(var24);
            _fun0003_ip = 187; continue _fun0003;
case 185:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 56;
            var24 = var30[var24];
            var25 = var25.bind(var5)(var24);
            var24 = {};
            var24['uploaderFile'] = var29;
            var30 = var2.state;
            var29 = _closure1_slot23;
            var29 = var29.SEND_FAILED;
            var29 = var30 === var29;
            var24['isFailedMessage'] = var29;
            var24['shouldInlineAttachmentMedia'] = var38;
            var36 = var25.bind(var5)(var24);
case 187:
            if(!var21) { _fun0003_ip = 189; continue _fun0003 }
case 190:
            var24 = var2.state;
            var21 = _closure1_slot23;
            var21 = var21.SEND_FAILED;
            if(!(var24 === var21)) { _fun0003_ip = 191; continue _fun0003 }
case 189:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 58;
            var21 = var25[var21];
            var25 = var24.bind(var5)(var21);
            var24 = var25.calendarFormat;
            var21 = var2.timestamp;
            var68 = var24.bind(var25)(var21, var8);
            _fun0003_ip = 192; continue _fun0003;
case 191:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 23;
            var24 = var30[var21];
            var24 = var29.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var30[var21];
            var21 = var29.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.yXY+5J;
            var68 = var24.bind(var25)(var21);
case 192:
            var24 = _closure1_slot16;
            var21 = var24.getId;
            var33 = var21.bind(var24)();
            var21 = var2.isUnsupported;
            var64 = var27;
            if(!var21) { _fun0003_ip = 193; continue _fun0003 }
case 194:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = 23;
            var24 = var30[var21];
            var24 = var29.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var30[var21];
            var21 = var29.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.sWi5EU;
            var64 = var24.bind(var25)(var21);
case 193:
            var21 = var2.isPoll;
            var21 = var21.bind(var2)();
            var21 = !var21;
            if(var21) { _fun0003_ip = 195; continue _fun0003 }
case 196:
            var24 = !var6;
            if(!var24) { _fun0003_ip = 197; continue _fun0003 }
case 198:
            var24 = var16;
case 197:
            var21 = var24;
case 195:
            if(var21) { _fun0003_ip = 199; continue _fun0003 }
case 200:
            var24 = var18 != var27;
            if(!var24) { _fun0003_ip = 201; continue _fun0003 }
case 202:
            var25 = '';
            var24 = var25 !== var27;
case 201:
            var21 = var24;
case 199:
            if(var21) { _fun0003_ip = 203; continue _fun0003 }
case 204:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 29;
            var21 = var25[var21];
            var24 = var24.bind(var5)(var21);
            var21 = var24.getPollReplyPreview;
            var64 = var21.bind(var24)(var2);
case 203:
            var30 = undefined;
            if(!var16) { _fun0003_ip = 205; continue _fun0003 }
case 206:
            var21 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 59;
            var16 = var24[var16];
            var21 = var21.bind(var5)(var16);
            var16 = {};
            var16['theme'] = var20;
            var16['animateEmoji'] = var78;
            var30 = var21.bind(var5)(var2, var5, var16);
case 205:
            var25 = undefined;
            if(!var4) { _fun0003_ip = 207; continue _fun0003 }
case 208:
            var25 = undefined;
            if(!var1) { _fun0003_ip = 207; continue _fun0003 }
case 209:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 60;
            var1 = var16[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var25 = var1.bind(var4)(var2, var77, var74);
case 207:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var95 = 61;
            var1 = var1[var95];
            var21 = var4.bind(var5)(var1);
            var16 = var21.shouldDisplayGuildTag;
            var4 = var70.id;
            var24 = var18 != var63;
            var1 = undefined;
            if(!var24) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var1 = var63;
case 210:
            var1 = var16.bind(var21)(var4, var1);
            var24 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var95];
            var27 = var4.bind(var5)(var1);
            var4 = var27.getUserPrimaryGuild;
            var1 = var70.primaryGuild;
            var29 = var4.bind(var27)(var1);
            var27 = var29.guildId;
            var4 = var29.tag;
            var1 = var29.guildId;
            var90 = var18 != var1;
            var1 = undefined;
            if(!var90) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var92 = _closure1_slot0;
            var90 = _closure1_slot2;
            var90 = var90[var95];
            var96 = var92.bind(var5)(var90);
            var95 = var96.getGuildTagBadgeUrl;
            var92 = var29.guildId;
            var90 = var29.badge;
            var29 = _closure1_slot26;
            var29 = var29.SIZE_12;
            var1 = var95.bind(var96)(var92, var90, var29);
case 214:
            var16 = var1;
            var24 = var27;
            var21 = var4;
case 212:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var96 = 28;
            var1 = var1[var96];
            var29 = var4.bind(var5)(var1);
            var27 = var29.hasFlag;
            var1 = var2;
            if(!(var18 != var40)) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var1 = var40;
case 216:
            var4 = var1.flags;
            var1 = _closure1_slot24;
            var1 = var1.IS_VOICE_MESSAGE;
            var27 = var27.bind(var29)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var33;
            var1['message'] = var2;
            var1['theme'] = var20;
            var95 = var1.currentUserId;
            var92 = var1.message;
            var90 = var1.theme;
            var1 = var92.referralTrialOfferId;
            var29 = var92.type;
            var4 = _closure1_slot22;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var29 === var4)) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            if(!(var18 != var1)) { _fun0003_ip = 218; continue _fun0003 }
case 220:
            var1 = {};
            var29 = _closure1_slot0;
            var97 = _closure1_slot2;
            var4 = 20;
            var4 = var97[var4];
            var29 = var29.bind(var5)(var4);
            var4 = var29.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var29)(var92, var90, var95);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 221; continue _fun0003;
case 218:
            var1 = _closure1_slot27;
case 221:
            var29 = var1.referralTrialOfferDataUpdated;
            var92 = _closure1_slot5;
            var4 = var92.getApplication;
            var95 = var2.applicationId;
            var97 = var18 != var95;
            var90 = '';
            var1 = var90;
            if(!var97) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var1 = var95;
case 222:
            var1 = var4.bind(var92)(var1);
            var92 = var18 != var1;
            if(!var92) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var95 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var96];
            var97 = var95.bind(var5)(var4);
            var96 = var97.hasFlag;
            var95 = var2.flags;
            var4 = _closure1_slot24;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var92 = var96.bind(var97)(var95, var4);
case 224:
            var4 = undefined;
            if(!var92) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var4 = var1.id;
case 226:
            var1 = {};
            var92 = var2.id;
            var1['id'] = var92;
            var92 = var2.channel_id;
            var1['channelId'] = var92;
            var95 = var18 != var63;
            var92 = undefined;
            if(!var95) { _fun0003_ip = 228; continue _fun0003 }
case 229:
            var92 = var63;
case 228:
            var1['guildId'] = var92;
            var92 = var2;
            if(!(var18 != var40)) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var92 = var40;
case 230:
            var92 = var92.flags;
            var1['flags'] = var92;
            var92 = var2.type;
            var1['type'] = var92;
            var92 = var2.nonce;
            if(!(var18 != var92)) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var92 = var2.nonce;
            var95 = 'string';
            var92 = typeof var92;
            if(!(var95 === var92)) { _fun0003_ip = 234; continue _fun0003 }
case 232:
            var92 = var2.nonce;
            _fun0003_ip = 235; continue _fun0003;
case 234:
            var95 = global;
            var96 = var95.String;
            var95 = var2.nonce;
            var92 = var96.bind(var5)(var95);
case 235:
            var1['nonce'] = var92;
            var92 = var2.state;
            var1['state'] = var92;
            var1['reactions'] = var19;
            var92 = undefined;
            if(var51) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var92 = var94;
case 236:
            var1['referencedMessage'] = var92;
            var1['threadEmbed'] = var91;
            var92 = var18 != var93;
            var91 = undefined;
            if(!var92) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var92 = var93.getForwardInfo;
            var91 = var92.bind(var93)();
case 238:
            var1['forwardInfo'] = var91;
            var89 = !var89;
            if(!var89) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var89 = var2.mentioned;
case 240:
            var1['mentioned'] = var89;
            var89 = var2.isEdited;
            var91 = var89.bind(var2)();
            var89 = var90;
            if(!var91) { _fun0003_ip = 242; continue _fun0003 }
case 243:
            var89 = var90;
            if(var51) { _fun0003_ip = 242; continue _fun0003 }
case 244:
            var93 = _closure1_slot0;
            var94 = _closure1_slot2;
            var90 = 23;
            var91 = var94[var90];
            var91 = var93.bind(var5)(var91);
            var92 = var91.intl;
            var91 = var92.string;
            var90 = var94[var90];
            var90 = var93.bind(var5)(var90);
            var90 = var90.t;
            var90 = var90.C8sXIM;
            var89 = var91.bind(var92)(var90);
case 242:
            var1['edited'] = var89;
            var89 = var26.editedColor;
            var1['editedColor'] = var89;
            var89 = var2.isUnsupported;
            if(var89) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            var89 = var26.textColor;
            _fun0003_ip = 247; continue _fun0003;
case 245:
            var89 = var26.unsupportedColor;
case 247:
            var1['textColor'] = var89;
            var89 = var26.linkColor;
            var1['linkColor'] = var89;
            var1['tagText'] = var88;
            var1['tagVerified'] = var87;
            var1['tagTextColor'] = var86;
            var1['tagBackgroundColor'] = var85;
            var1['tagType'] = var84;
            var1['tagIconUrl'] = var83;
            var1['opTagText'] = var82;
            var1['opTagTextColor'] = var81;
            var1['opTagBackgroundColor'] = var80;
            var1['constrainedWidth'] = var79;
            var1['gifAutoPlay'] = var55;
            var1['animateEmoji'] = var78;
            var78 = var74;
            if(!var66) { _fun0003_ip = 248; continue _fun0003 }
case 249:
            var78 = var70.username;
case 248:
            var79 = var18 != var78;
            var74 = undefined;
            if(!var79) { _fun0003_ip = 250; continue _fun0003 }
case 251:
            var74 = var78;
case 250:
            var1['username'] = var74;
            var74 = undefined;
            if(var66) { _fun0003_ip = 252; continue _fun0003 }
case 253:
            var74 = var77.uri;
case 252:
            var1['avatarURL'] = var74;
            var74 = undefined;
            if(var66) { _fun0003_ip = 254; continue _fun0003 }
case 255:
            var74 = var76;
case 254:
            var1['avatarDecorationURL'] = var74;
            var70 = var70.id;
            var1['authorId'] = var70;
            if(var66) { _fun0003_ip = 256; continue _fun0003 }
case 257:
            var70 = 'username';
            if(!(var70 === var14)) { _fun0003_ip = 256; continue _fun0003 }
case 258:
            var74 = _closure1_slot3;
            var76 = var18 != var72;
            var70 = undefined;
            if(!var76) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var70 = var72;
case 259:
            var70 = var74.bind(var5)(var70);
            if(!(var18 == var70)) { _fun0003_ip = 261; continue _fun0003 }
case 262:
            var70 = var26.defaultUsernameColor;
case 261:
            _fun0003_ip = 263; continue _fun0003;
case 256:
            var70 = var26.defaultUsernameColor;
case 263:
            var1['usernameColor'] = var70;
            var70 = null;
            if(var66) { _fun0003_ip = 264; continue _fun0003 }
case 265:
            var76 = _closure1_slot3;
            var77 = var18 != var72;
            var74 = undefined;
            if(!var77) { _fun0003_ip = 266; continue _fun0003 }
case 267:
            var74 = var72;
case 266:
            var76 = var76.bind(var5)(var74);
            var77 = var18 != var76;
            var74 = null;
            if(!var77) { _fun0003_ip = 268; continue _fun0003 }
case 269:
            var74 = var76;
case 268:
            var70 = var74;
case 264:
            var1['roleColor'] = var70;
            var70 = null;
            if(!var73) { _fun0003_ip = 270; continue _fun0003 }
case 271:
            var70 = null;
            if(var66) { _fun0003_ip = 270; continue _fun0003 }
case 272:
            var74 = _closure1_slot0;
            var76 = _closure1_slot2;
            var73 = 62;
            var73 = var76[var73];
            var74 = var74.bind(var5)(var73);
            var73 = var74.processColorStrings;
            var70 = var73.bind(var74)(var75);
case 270:
            var1['roleColors'] = var70;
            var70 = 'dot';
            var70 = var70 === var14;
            var1['shouldShowRoleDot'] = var70;
            var70 = 'username';
            var70 = var70 === var14;
            var1['shouldShowRoleOnName'] = var70;
            var1['showLinkDecorations'] = var65;
            if(var66) { _fun0003_ip = 273; continue _fun0003 }
case 274:
            var70 = _closure1_slot3;
            var73 = var18 != var72;
            var65 = undefined;
            if(!var73) { _fun0003_ip = 275; continue _fun0003 }
case 276:
            var65 = var72;
case 275:
            var65 = var70.bind(var5)(var65);
            if(!(var18 == var65)) { _fun0003_ip = 277; continue _fun0003 }
case 278:
            var65 = var26.defaultUsernameColor;
case 277:
            _fun0003_ip = 279; continue _fun0003;
case 273:
            var65 = var26.defaultUsernameColor;
case 279:
            var1['colorString'] = var65;
            var65 = undefined;
            if(var66) { _fun0003_ip = 280; continue _fun0003 }
case 281:
            var65 = var69;
case 280:
            var1['roleIcon'] = var65;
            var69 = var18 != var71;
            var65 = undefined;
            if(!var69) { _fun0003_ip = 282; continue _fun0003 }
case 283:
            var70 = _closure1_slot0;
            var72 = _closure1_slot2;
            var69 = 63;
            var69 = var72[var69];
            var70 = var70.bind(var5)(var69);
            var69 = var70.createConnectionsRoleTag;
            var65 = var69.bind(var70)(var71);
case 282:
            var1['connectionsRoleTag'] = var65;
            var65 = undefined;
            if(var66) { _fun0003_ip = 284; continue _fun0003 }
case 285:
            var65 = var68;
case 284:
            var1['timestamp'] = var65;
            var65 = undefined;
            if(var66) { _fun0003_ip = 286; continue _fun0003 }
case 287:
            var65 = var26.timestampColor;
case 286:
            var1['timestampColor'] = var65;
            var1['content'] = var64;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var51;
            var64 = undefined;
            if(!(var5 !== var67)) { _fun0003_ip = 288; continue _fun0003 }
case 289:
            var66 = _closure1_slot0;
            var68 = _closure1_slot2;
            var65 = 64;
            var65 = var68[var65];
            var66 = var66.bind(var5)(var65);
            var65 = var66.createSurveyIndication;
            var64 = var65.bind(var66)(var2, var20, var67);
case 288:
            var1['surveyIndication'] = var64;
            var65 = _closure1_slot0;
            var66 = _closure1_slot2;
            var64 = 65;
            var64 = var66[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createEphemeralIndication;
            var64 = var64.bind(var65)(var2);
            var1['ephemeralIndication'] = var64;
            var1['interactionStatus'] = var52;
            var52 = undefined;
            if(!var54) { _fun0003_ip = 290; continue _fun0003 }
case 291:
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var54 = 66;
            var54 = var65[var54];
            var65 = var64.bind(var5)(var54);
            var64 = var65.createExecutedCommand;
            var100 = var26.defaultUsernameColor;
            r104 = var65;
            r103 = var2;
            r102 = var22;
            r101 = var14;
            r100 = var20;
            var52 = r104[var64](r103, r102, r101, r100, var100, var99);
case 290:
            var1['executedCommand'] = var52;
            var52 = var40.components;
            var52 = var52.length;
            var54 = var52 > var49;
            var52 = undefined;
            if(!var54) { _fun0003_ip = 292; continue _fun0003 }
case 293:
            var52 = undefined;
            if(!var53) { _fun0003_ip = 292; continue _fun0003 }
case 294:
            var54 = _closure1_slot1;
            var64 = _closure1_slot2;
            var53 = 67;
            var53 = var64[var53];
            var54 = var54.bind(var5)(var53);
            var53 = {};
            var53['message'] = var2;
            var53['guildId'] = var63;
            var53['interaction'] = var62;
            var53['shouldDisableInteractiveComponents'] = var61;
            var53['shouldShowMedia'] = var60;
            var53['shouldObscureSpoiler'] = var59;
            var53['enabledContentHarmTypeFlags'] = var58;
            var53['shouldAgeVerify'] = var57;
            var53['shouldShowMosaicMediaDescriptions'] = var56;
            var53['shouldAutoPlayGifs'] = var55;
            var53['colors'] = var26;
            var52 = var54.bind(var5)(var53);
case 292:
            var1['components'] = var52;
            var52 = 0;
            if(var51) { _fun0003_ip = 295; continue _fun0003 }
case 296:
            var52 = var26.feedbackColor;
case 295:
            var1['feedbackColor'] = var52;
            var49 = 0;
            if(var51) { _fun0003_ip = 297; continue _fun0003 }
case 298:
            var49 = var26.highlightColor;
case 297:
            var1['highlightColor'] = var49;
            var51 = var18 != var50;
            var49 = undefined;
            if(!var51) { _fun0003_ip = 299; continue _fun0003 }
case 300:
            var49 = var50;
case 299:
            var1['embeds'] = var49;
            if(var48) { _fun0003_ip = 301; continue _fun0003 }
case 302:
            var48 = new Array(0);
            _fun0003_ip = 303; continue _fun0003;
case 301:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 68;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createGiftCodeEmbed;
            var48 = var49.bind(var50)(var2, var20);
case 303:
            var1['giftCodes'] = var48;
            if(var45) { _fun0003_ip = 304; continue _fun0003 }
case 305:
            var45 = new Array(0);
            _fun0003_ip = 306; continue _fun0003;
case 304:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 69;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createCodedLinkEmbeds;
            var45 = var48.bind(var49)(var2, var40, var20);
case 306:
            var1['codedLinks'] = var45;
            var45 = undefined;
            if(!var47) { _fun0003_ip = 307; continue _fun0003 }
case 308:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 70;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityInstanceEmbed;
            var45 = var47.bind(var48)(var2);
case 307:
            var1['activityInstanceEmbed'] = var45;
            var45 = undefined;
            if(!var46) { _fun0003_ip = 309; continue _fun0003 }
case 310:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 71;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityRichPresenceInviteEmbed;
            var45 = var46.bind(var47)(var2, var22);
case 309:
            var1['activityRichPresenceInviteEmbed'] = var45;
            if(!var38) { _fun0003_ip = 311; continue _fun0003 }
case 312:
            if(!var42) { _fun0003_ip = 313; continue _fun0003 }
case 314:
            if(var43) { _fun0003_ip = 315; continue _fun0003 }
case 316:
            var43 = var44;
case 315:
            var42 = var43;
case 313:
            if(var42) { _fun0003_ip = 317; continue _fun0003 }
case 318:
            var42 = var37;
case 317:
            var38 = var42;
case 311:
            var1['useAttachmentGridLayout'] = var38;
            var1['useAttachmentUploadPreview'] = var37;
            var1['attachments'] = var36;
            var42 = 1;
            var36 = var42;
            if(!var37) { _fun0003_ip = 319; continue _fun0003 }
case 320:
            var38 = var2.state;
            var37 = _closure1_slot23;
            var37 = var37.SEND_FAILED;
            var36 = var42;
            if(!(var38 === var37)) { _fun0003_ip = 319; continue _fun0003 }
case 321:
            var36 = 0.2;
case 319:
            var1['attachmentsOpacity'] = var36;
            var37 = _closure1_slot1;
            var38 = _closure1_slot2;
            var36 = 72;
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
            if(!var31) { _fun0003_ip = 322; continue _fun0003 }
case 323:
            var31 = var35;
case 322:
            var1['communicationDisabled'] = var31;
            var35 = var18 == var22;
            if(var35) { _fun0003_ip = 324; continue _fun0003 }
case 325:
            var31 = var22.isForumPost;
            var31 = var31.bind(var22)();
            var35 = !var31;
case 324:
            var31 = !var35;
            if(var35) { _fun0003_ip = 326; continue _fun0003 }
case 327:
            var36 = var2.id;
            var35 = var2.channel_id;
            var31 = var36 === var35;
case 326:
            var1['isFirstForumPostMessage'] = var31;
            var35 = var18 != var22;
            var31 = undefined;
            if(!var35) { _fun0003_ip = 328; continue _fun0003 }
case 329:
            var35 = var22.isForumPost;
            var35 = var35.bind(var22)();
            var31 = undefined;
            if(!var35) { _fun0003_ip = 328; continue _fun0003 }
case 330:
            var31 = undefined;
            if(!var34) { _fun0003_ip = 328; continue _fun0003 }
case 331:
            var34 = _closure1_slot29;
            var31 = var34.bind(var5)(var2, var22);
case 328:
            var1['postActions'] = var31;
            var31 = var2.author;
            var31 = var31.id;
            var31 = var31 === var33;
            var1['isCurrentUserMessageAuthor'] = var31;
            var31 = _closure1_slot6;
            var31 = var31.gradientPreset;
            var31 = var18 != var31;
            var1['usingGradientTheme'] = var31;
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 24;
            var34 = var36[var31];
            var38 = var33.bind(var5)(var34);
            var37 = var38.getAssetUriForEmbed;
            var35 = _closure1_slot1;
            var34 = 73;
            var34 = var36[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var37.bind(var38)(var34);
            var1['swipeToReplyIconUrl'] = var34;
            var31 = var36[var31];
            var34 = var33.bind(var5)(var31);
            var33 = var34.getAssetUriForEmbed;
            var31 = 74;
            var31 = var36[var31];
            var31 = var35.bind(var5)(var31);
            var31 = var33.bind(var34)(var31);
            var1['swipeToEditIconUrl'] = var31;
            var1['referralTrialOfferInfo'] = var29;
            if(var28) { _fun0003_ip = 332; continue _fun0003 }
case 333:
            var28 = new Array(0);
            _fun0003_ip = 334; continue _fun0003;
case 332:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 75;
            var29 = var33[var29];
            var31 = var31.bind(var5)(var29);
            var29 = var31.createPostPreviewEmbeds;
            var28 = var29.bind(var31)(var2, var32);
case 334:
            var1['postPreviewEmbeds'] = var28;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var31 = 23;
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
            var31 = 76;
            var31 = var29[var31];
            var32 = var28.bind(var5)(var31);
            var31 = var32.createSafetyPolicyNoticeEmbed;
            var31 = var31.bind(var32)(var2);
            var1['safetyPolicyNoticeEmbed'] = var31;
            var1['pollData'] = var30;
            var1['sharedClientTheme'] = var25;
            var25 = 77;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var25 = var30.createSafetySystemNotificationEmbed;
            var25 = var25.bind(var30)(var2);
            var1['safetySystemNotificationEmbed'] = var25;
            var25 = 78;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var29 = var30.createCtaButton;
            var28 = var2.id;
            var25 = var2.channel_id;
            var25 = var29.bind(var30)(var28, var25, var26);
            var1['ctaButton'] = var25;
            var25 = undefined;
            if(!var27) { _fun0003_ip = 335; continue _fun0003 }
case 336:
            var25 = var26.embedBackgroundColor;
case 335:
            var1['audioAttachmentBackgroundColor'] = var25;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 79;
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
            if(var4) { _fun0003_ip = 337; continue _fun0003 }
case 338:
            var16 = var22.type;
case 337:
            var4 = _closure1_slot25;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 80;
            var4 = var21[var4];
            var21 = var16.bind(var5)(var4);
            var16 = var21.createDisplayNameStylesMobile;
            var4 = var2.author;
            var4 = var16.bind(var21)(var4, var23);
            var1['displayNameStyles'] = var4;
            return var1;
case 62:
            var4 = var2.type;
            var1 = _closure1_slot22;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 339; continue _fun0003 }
case 340:
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
            if(var21) { _fun0003_ip = 341; continue _fun0003 }
case 342:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
case 341:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 343; continue _fun0003;
case 339:
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
case 343:
            return var1;
case 60:
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
    var4 = 81;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();