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
 0:
            var1 = arg1;
            var7 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 850; continue _fun0001 }
 15:
            var3 = var1.hasFlag;
            var2 = _closure1_slot24;
            var2 = var2.HAS_THREAD;
            var2 = var3.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 850; continue _fun0001 }
 45:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 850; continue _fun0001 }
 54:
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
            if(!(var2 != var3)) { _fun0001_ip = 216; continue _fun0001 }
 210:
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0001_ip = 311; continue _fun0001 }
 216:
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
            var3 = var3.HYtNyM;
            var3 = var10.bind(var11)(var3);
            var1['messagePreviewString'] = var3;
            var3 = false;
            var1['archived'] = var3;
            _fun0001_ip = 848; continue _fun0001;
 311:
            var3 = var7.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 333; continue _fun0001 }
 321:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 708; continue _fun0001 }
 333:
            if(!(var2 != var9)) { _fun0001_ip = 612; continue _fun0001 }
 340:
            var3 = var9.type;
            var2 = _closure1_slot22;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 612; continue _fun0001 }
 362:
            var3 = var9.type;
            var2 = _closure1_slot22;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 612; continue _fun0001 }
 384:
            var2 = var9.blocked;
            if(var2) { _fun0001_ip = 497; continue _fun0001 }
 393:
            var2 = var9.ignored;
            if(var2) { _fun0001_ip = 497; continue _fun0001 }
 402:
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
            _fun0001_ip = 610; continue _fun0001;
 497:
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
            if(var9) { _fun0001_ip = 584; continue _fun0001 }
 571:
            var9 = var10.G7p6v7;
            var9 = var11.bind(var12)(var9);
            _fun0001_ip = 595; continue _fun0001;
 584:
            var10 = var10.XAkOo6;
            var9 = var11.bind(var12)(var10);
 595:
            var3['messagePreviewString'] = var9;
            var9 = false;
            var3['archived'] = var9;
            var2 = var3;
 610:
            _fun0001_ip = 703; continue _fun0001;
 612:
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
            var9 = var9.ZTo4HR;
            var9 = var10.bind(var11)(var9);
            var3['messagePreviewString'] = var9;
            var9 = false;
            var3['archived'] = var9;
            var2 = var3;
 703:
            _fun0001_ip = 845; continue _fun0001;
 708:
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
            var5 = var5.ZTo4HR;
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
 845:
            var1 = var2;
 848:
            return var1;
 850:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function getForumPostActions(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var4 = var3.id;
            var1 = var3.channel_id;
            if(!(var4 !== var1)) { _fun0002_ip = 24; continue _fun0002 }
 20:
            var1 = undefined;
            return var1;
 24:
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
            if(var6) { _fun0002_ip = 199; continue _fun0002 }
 74:
            var9 = _closure1_slot17;
            var8 = var9.getChannel;
            var4 = var2.parent_id;
            var4 = var8.bind(var9)(var4);
            var10 = null;
            var8 = var10 == var4;
            var11 = undefined;
            if(var8) { _fun0002_ip = 111; continue _fun0002 }
 105:
            var11 = var4.defaultReactionEmoji;
 111:
            var8 = var10 == var11;
            var4 = undefined;
            if(var8) { _fun0002_ip = 126; continue _fun0002 }
 120:
            var4 = var11.emojiId;
 126:
            var4 = var10 != var4;
            var10 = null;
            if(!var4) { _fun0002_ip = 156; continue _fun0002 }
 135:
            var9 = _closure1_slot7;
            var8 = var9.getUsableCustomEmojiById;
            var4 = var11.emojiId;
            var10 = var8.bind(var9)(var4);
 156:
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
 199:
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
 0:
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
            if(!(var6 === var5)) { _fun0003_ip = 58; continue _fun0003 }
 56:
            var6 = false;
 58:
            var7 = var1.options;
            var32 = var1.threadStarterMessageHeader;
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
            var35 = var7.renderCommunicationDisabled;
            var43 = var7.renderAttachments;
            var55 = var7.renderExecutedCommands;
            var16 = var7.renderPolls;
            var4 = var7.renderSharedClientTheme;
            var34 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var36 = var7.ignoreEmbedDescriptionCache;
            var38 = var7.forceHideSimpleEmbedContent;
            var60 = var7.shouldObscureSpoiler;
            var62 = var7.shouldDisableInteractiveComponents;
            var8 = var7.useAlternateEmbedColors;
            var37 = var7.shouldFilterKeywords;
            var18 = null;
            if(!(var18 == var20)) { _fun0003_ip = 280; continue _fun0003 }
 267:
            var1 = _closure1_slot15;
            var20 = var1.theme;
 280:
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
            var61 = var8 === var11;
            var27 = var61;
            if(!var61) { _fun0003_ip = 384; continue _fun0003 }
 381:
            var27 = var22;
 384:
            if(!var27) { _fun0003_ip = 406; continue _fun0003 }
 387:
            var24 = var2.type;
            var22 = _closure1_slot22;
            var22 = var22.CUSTOM_GIFT;
            var27 = var24 !== var22;
 406:
            var33 = var61;
            if(!var61) { _fun0003_ip = 415; continue _fun0003 }
 412:
            var33 = var19;
 415:
            var39 = var61;
            if(!var39) { _fun0003_ip = 424; continue _fun0003 }
 421:
            var39 = var17;
 424:
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
            if(var24) { _fun0003_ip = 517; continue _fun0003 }
 507:
            var24 = var22.getGuildId;
            var19 = var24.bind(var22)();
 517:
            var24 = var2.author;
            var28 = var24.id;
            var26 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 32;
            var24 = var29[var24];
            var26 = var26.bind(var5)(var24);
            var24 = var26.getHasEnhancedRoleColors;
            var74 = var24.bind(var26)(var19, var28);
            var64 = var19;
            if(!(var18 == var93)) { _fun0003_ip = 598; continue _fun0003 }
 567:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var19 = 33;
            var19 = var26[var19];
            var24 = var24.bind(var5)(var19);
            var19 = var24.maybeCreateSingleForwardForMessage;
            var93 = var19.bind(var24)(var2);
 598:
            var41 = var2;
            if(!(var18 != var93)) { _fun0003_ip = 616; continue _fun0003 }
 605:
            var19 = var93.messageSnapshot;
            var41 = var19.message;
 616:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 666; continue _fun0003 }
 623:
            var24 = _closure1_slot1;
            var26 = _closure1_slot2;
            var15 = 34;
            var15 = var26[var15];
            var24 = var24.bind(var5)(var15);
            var15 = {};
            var26 = var2.reactions;
            var15['reactions'] = var26;
            var15['animateEmoji'] = var79;
            var19 = var24.bind(var5)(var15);
 666:
            var26 = var2.type;
            var15 = _closure1_slot22;
            var24 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var26 === var24)) { _fun0003_ip = 737; continue _fun0003 }
 687:
            var28 = _closure1_slot11;
            var26 = var28.getMessageByReference;
            var24 = var2.messageReference;
            var26 = var26.bind(var28)(var24);
            var29 = var26.state;
            var24 = _closure1_slot12;
            var28 = var24.LOADED;
            var24 = null;
            if(!(var29 === var28)) { _fun0003_ip = 734; continue _fun0003 }
 729:
            var24 = var26.message;
 734:
            var15 = var24;
 737:
            if(!(var18 == var15)) { _fun0003_ip = 7434; continue _fun0003 }
 744:
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var24 = 35;
            var24 = var28[var24];
            var24 = var26.bind(var5)(var24);
            var24 = var24.bind(var5)(var2);
            if(var24) { _fun0003_ip = 7241; continue _fun0003 }
 775:
            var67 = !var13;
            if(var67) { _fun0003_ip = 784; continue _fun0003 }
 781:
            var67 = var52;
 784:
            var71 = var2.author;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 37;
            var24 = var28[var24];
            var28 = var26.bind(var5)(var24);
            var26 = var28.isMessageNewerThanImprovedMarkdownEpoch;
            var29 = var2.editedTimestamp;
            if(!(var18 == var29)) { _fun0003_ip = 832; continue _fun0003 }
 826:
            var29 = var2.timestamp;
 832:
            var24 = var29.valueOf;
            var24 = var24.bind(var29)();
            var31 = var26.bind(var28)(var24);
            var24 = var41.content;
            if(!(var18 != var24)) { _fun0003_ip = 868; continue _fun0003 }
 855:
            var26 = var41.content;
            var24 = '';
            if(!(var24 === var26)) { _fun0003_ip = 881; continue _fun0003 }
 868:
            var24 = {};
            var24['content'] = var5;
            var24['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 971; continue _fun0003;
 881:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 38;
            var26 = var29[var26];
            var29 = var28.bind(var5)(var26);
            var28 = var29.parseMessageMarkup;
            if(var38) { _fun0003_ip = 922; continue _fun0003 }
 910:
            var26 = var27;
            if(!var26) { _fun0003_ip = 919; continue _fun0003 }
 916:
            var26 = var33;
 919:
            var38 = var26;
 922:
            var26 = var18 != var17;
            if(!var26) { _fun0003_ip = 940; continue _fun0003 }
 929:
            var42 = var2.isFirstMessageInForumPost;
            var26 = var42.bind(var2)(var17);
 940:
            r105 = var29;
            r104 = var2;
            r103 = var41;
            r102 = var38;
            r101 = var6;
            r100 = var26;
            var100 = var31;
            var99 = var31;
            var98 = var37;
            var24 = r105[var28](r104, r103, r102, r101, r100, var100, var99, var98, var97);
 971:
            var26 = var24.content;
            var37 = var24.hasSpoilerEmbeds;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var24 = 39;
            var24 = var29[var24];
            var38 = var28.bind(var5)(var24);
            var24 = var38.getEnabledHarmTypesForMessage;
            var59 = var24.bind(var38)(var2);
            var24 = 40;
            var24 = var29[var24];
            var28 = var28.bind(var5)(var24);
            var24 = var28.shouldAgeVerifyForExplicitMedia;
            var58 = var24.bind(var28)();
            var29 = undefined;
            if(!var27) { _fun0003_ip = 1167; continue _fun0003 }
 1043:
            var28 = _closure1_slot1;
            var38 = _closure1_slot2;
            var24 = 41;
            var24 = var38[var24];
            var28 = var28.bind(var5)(var24);
            var24 = {};
            var38 = var41.embeds;
            var24['embeds'] = var38;
            var38 = var2.channel_id;
            var24['channelId'] = var38;
            var24['gifAutoPlay'] = var56;
            var24['hasSpoilerEmbeds'] = var37;
            var24['ignoreEmbedDescriptionCache'] = var36;
            var24['shouldInlineEmbedMedia'] = var33;
            var24['colors'] = var25;
            var24['showListsAndHeaders'] = var31;
            var24['showMaskedLinks'] = var31;
            var31 = var25.embedBackgroundColor;
            var24['themedBackgroundColor'] = var31;
            var24['enabledContentHarmTypeFlags'] = var59;
            var24['shouldAgeVerify'] = var58;
            var31 = var2.author;
            var31 = var31.bot;
            var24['authorIsBot'] = var31;
            var24['showContentInventoryEntryFallbackEmbed'] = var30;
            var29 = var28.bind(var5)(var24);
 1167:
            var28 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 42;
            var24 = var30[var24];
            var28 = var28.bind(var5)(var24);
            var24 = {};
            var24['message'] = var2;
            var24['isSystemDM'] = var10;
            var24['channel'] = var22;
            var24['colors'] = var25;
            var24 = var28.bind(var5)(var24);
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
            var28 = var30.getUploaderFileForMessageId;
            var24 = var2.id;
            var28 = var28.bind(var30)(var24);
            var38 = var18 != var28;
            var30 = var2.state;
            var24 = _closure1_slot23;
            var24 = var24.SEND_FAILED;
            var24 = var30 !== var24;
            if(var24) { _fun0003_ip = 1321; continue _fun0003 }
 1311:
            var30 = var2.isCommandType;
            var24 = var30.bind(var2)();
 1321:
            var30 = var29;
            if(var24) { _fun0003_ip = 1392; continue _fun0003 }
 1327:
            var24 = var29;
            if(!(var18 == var29)) { _fun0003_ip = 1338; continue _fun0003 }
 1334:
            var24 = new Array(0);
 1338:
            var31 = var24.push;
            var33 = _closure1_slot1;
            var36 = _closure1_slot2;
            var29 = 43;
            var29 = var36[var29];
            var33 = var33.bind(var5)(var29);
            var29 = {};
            var29['uploaderFile'] = var28;
            var29['useAttachmentUploadPreview'] = var38;
            var29['colors'] = var25;
            var29 = var33.bind(var5)(var29);
            var29 = var31.bind(var24)(var29);
            var30 = var24;
 1392:
            var31 = _closure1_slot8;
            var29 = var31.getMessage;
            var24 = var2.id;
            var29 = var29.bind(var31)(var24);
            var51 = var30;
            if(!(var18 != var29)) { _fun0003_ip = 1491; continue _fun0003 }
 1419:
            var24 = var30;
            if(!(var18 == var30)) { _fun0003_ip = 1430; continue _fun0003 }
 1426:
            var24 = new Array(0);
 1430:
            var36 = var29.errorMessage;
            var30 = var24.push;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 43;
            var29 = var33[var29];
            var33 = var31.bind(var5)(var29);
            var31 = var33.createAutomodBlockedMessageEmbed;
            var29 = {};
            var29['errorMessage'] = var36;
            var29['colors'] = var25;
            var29 = var31.bind(var33)(var29);
            var29 = var30.bind(var24)(var29);
            var51 = var24;
 1491:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var33 = 44;
            var24 = var30[var33];
            var36 = var29.bind(var5)(var24);
            var31 = var36.getUserAuthor;
            var24 = var2.author;
            var24 = var31.bind(var36)(var24, var22);
            var45 = var24.guildMemberAvatar;
            var36 = var24.guildMemberAvatarDecoration;
            var31 = var24.iconRoleId;
            var24 = 45;
            var24 = var30[var24];
            var30 = var29.bind(var5)(var24);
            var29 = var30.ensureAvatarSource;
            var24 = var2.isInteractionPlaceholder;
            var24 = var24.bind(var2)();
            if(!var24) { _fun0003_ip = 1623; continue _fun0003 }
 1580:
            var24 = var2.author;
            var24 = var24.avatar;
            if(!(var18 == var24)) { _fun0003_ip = 1623; continue _fun0003 }
 1596:
            if(!(var18 == var45)) { _fun0003_ip = 1623; continue _fun0003 }
 1600:
            var37 = var2.application;
            var42 = var18 == var37;
            var24 = undefined;
            if(var42) { _fun0003_ip = 1619; continue _fun0003 }
 1614:
            var24 = var37.icon;
 1619:
            if(!(var18 == var24)) { _fun0003_ip = 1698; continue _fun0003 }
 1623:
            if(!(var18 != var45)) { _fun0003_ip = 1631; continue _fun0003 }
 1627:
            if(!(var18 == var64)) { _fun0003_ip = 1644; continue _fun0003 }
 1631:
            var24 = var71.getAvatarSource;
            var24 = var24.bind(var71)(var5);
            _fun0003_ip = 1696; continue _fun0003;
 1644:
            var42 = _closure1_slot1;
            var44 = _closure1_slot2;
            var37 = 46;
            var37 = var44[var37];
            var44 = var42.bind(var5)(var37);
            var42 = var44.getGuildMemberAvatarSource;
            var37 = {};
            var50 = var71.id;
            var37['userId'] = var50;
            var37['avatar'] = var45;
            var37['guildId'] = var64;
            var24 = var42.bind(var44)(var37, var71);
 1696:
            _fun0003_ip = 1775; continue _fun0003;
 1698:
            var42 = _closure1_slot1;
            var44 = _closure1_slot2;
            var37 = 46;
            var37 = var44[var37];
            var44 = var42.bind(var5)(var37);
            var42 = var44.getApplicationIconSource;
            var37 = {};
            var45 = var2.application;
            var45 = var45.id;
            var37['id'] = var45;
            var45 = var2.application;
            var45 = var45.icon;
            var37['icon'] = var45;
            var45 = var2.application;
            var45 = var45.bot;
            var37['bot'] = var45;
            var24 = var42.bind(var44)(var37);
 1775:
            var78 = var29.bind(var30)(var24);
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 46;
            var24 = var30[var24];
            var30 = var29.bind(var5)(var24);
            var29 = var30.getAvatarDecorationURL;
            var24 = {};
            if(!(var18 == var36)) { _fun0003_ip = 1818; continue _fun0003 }
 1812:
            var36 = var71.avatarDecoration;
 1818:
            var24['avatarDecoration'] = var36;
            var44 = _closure1_slot0;
            var45 = _closure1_slot2;
            var36 = 47;
            var36 = var45[var36];
            var42 = var44.bind(var5)(var36);
            var37 = var42.getDecorationSizeForAvatarSize;
            var36 = 48;
            var36 = var45[var36];
            var36 = var44.bind(var5)(var36);
            var36 = var36.AvatarSizes;
            var36 = var36.NORMAL;
            var36 = var37.bind(var42)(var36);
            var24['size'] = var36;
            var77 = var29.bind(var30)(var24);
            var24 = var18 != var31;
            var70 = undefined;
            if(!var24) { _fun0003_ip = 1954; continue _fun0003 }
 1896:
            var24 = var18 != var64;
            var70 = undefined;
            if(!var24) { _fun0003_ip = 1954; continue _fun0003 }
 1905:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 49;
            var24 = var30[var24];
            var30 = var29.bind(var5)(var24);
            var29 = var30.getRoleIcon;
            var24 = {};
            var24['guildId'] = var64;
            var24['roleId'] = var31;
            var31 = 18;
            var24['size'] = var31;
            var70 = var29.bind(var30)(var24);
 1954:
            var29 = var2.hasFlag;
            var24 = _closure1_slot24;
            var24 = var24.SOURCE_MESSAGE_DELETED;
            var24 = var29.bind(var2)(var24);
            if(!var24) { _fun0003_ip = 2035; continue _fun0003 }
 1978:
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var24 = 23;
            var29 = var36[var24];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var24 = var36[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.JOtgS0;
            var26 = var29.bind(var30)(var24);
 2035:
            var29 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var33];
            var29 = var29.bind(var5)(var24);
            var24 = var29.getMessageAuthor;
            var24 = var24.bind(var29)(var2);
            var75 = var24.nick;
            var73 = var24.colorString;
            var76 = var24.colorStrings;
            var29 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.INTERACTION_PREMIUM_UPSELL;
            if(!(var29 === var24)) { _fun0003_ip = 2165; continue _fun0003 }
 2100:
            var29 = _closure1_slot0;
            var36 = _closure1_slot2;
            var24 = 23;
            var30 = var36[var24];
            var30 = var29.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var24 = var36[var24];
            var24 = var29.bind(var5)(var24);
            var24 = var24.t;
            var29 = var24.u4A+xM;
            var24 = {};
            var24['appName'] = var75;
            var26 = var30.bind(var31)(var29, var24);
 2165:
            var29 = var2.type;
            var24 = _closure1_slot22;
            var24 = var24.REPLY;
            var94 = undefined;
            if(!(var29 === var24)) { _fun0003_ip = 3731; continue _fun0003 }
 2189:
            var94 = undefined;
            if(!var23) { _fun0003_ip = 3731; continue _fun0003 }
 2197:
            var29 = _closure1_slot11;
            var24 = var29.getMessageByReference;
            var23 = var2.messageReference;
            var23 = var24.bind(var29)(var23);
            var29 = var23.state;
            var24 = _closure1_slot12;
            var24 = var24.LOADED;
            if(!(var24 !== var29)) { _fun0003_ip = 2475; continue _fun0003 }
 2240:
            var24 = _closure1_slot12;
            var24 = var24.NOT_LOADED;
            if(!(var24 !== var29)) { _fun0003_ip = 2392; continue _fun0003 }
 2257:
            var24 = _closure1_slot12;
            var24 = var24.DELETED;
            if(!(var24 !== var29)) { _fun0003_ip = 2309; continue _fun0003 }
 2271:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 51;
            var24 = var30[var24];
            var29 = var29.bind(var5)(var24);
            var24 = var29.assertNever;
            var24 = var24.bind(var29)(var23);
            var94 = undefined;
            _fun0003_ip = 3731; continue _fun0003;
 2309:
            var24 = {};
            var29 = _closure1_slot21;
            var29 = var29.SYSTEM;
            var24['state'] = var29;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = 23;
            var30 = var37[var29];
            var30 = var36.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var37[var29];
            var29 = var36.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.mE3KJC;
            var29 = var30.bind(var31)(var29);
            var24['content'] = var29;
            var94 = var24;
            _fun0003_ip = 3731; continue _fun0003;
 2392:
            var24 = {};
            var29 = _closure1_slot21;
            var29 = var29.SYSTEM;
            var24['state'] = var29;
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = 23;
            var30 = var37[var29];
            var30 = var36.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var37[var29];
            var29 = var36.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.1i+hMj;
            var29 = var30.bind(var31)(var29);
            var24['content'] = var29;
            var94 = var24;
            _fun0003_ip = 3731; continue _fun0003;
 2475:
            var23 = var23.message;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 33;
            var24 = var30[var24];
            var29 = var29.bind(var5)(var24);
            var24 = var29.maybeCreateSingleForwardForMessage;
            var30 = var24.bind(var29)(var23);
            var29 = _closure1_slot19;
            var24 = var29.isBlockedForMessage;
            var24 = var24.bind(var29)(var23);
            if(var24) { _fun0003_ip = 3653; continue _fun0003 }
 2532:
            var29 = _closure1_slot19;
            var24 = var29.isIgnoredForMessage;
            var24 = var24.bind(var29)(var23);
            if(var24) { _fun0003_ip = 3573; continue _fun0003 }
 2553:
            var29 = _closure1_slot30;
            var24 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var24['message'] = var23;
            var24['messageForward'] = var30;
            var24['roleStyle'] = var14;
            var31 = {};
            r104 = var31;
            r103 = var7;
            var36 = copyDataProperties(r104, r103);
            var36 = 'renderReplies';
            var31[var36] = var9;
            var24['options'] = var31;
            var29 = var29.bind(var5)(var24);
            if(!(var18 != var29)) { _fun0003_ip = 3490; continue _fun0003 }
 2626:
            var24 = 'username';
            var24 = var24 in var29;
            if(!var24) { _fun0003_ip = 2809; continue _fun0003 }
 2640:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var33];
            var31 = var31.bind(var5)(var24);
            var24 = var31.getMessageAuthor;
            var24 = var24.bind(var31)(var23);
            var31 = var24.nick;
            var33 = var24.colorString;
            if(!(var18 == var31)) { _fun0003_ip = 2695; continue _fun0003 }
 2684:
            var24 = var23.author;
            var31 = var24.username;
 2695:
            var36 = var18 != var31;
            var24 = undefined;
            if(!var36) { _fun0003_ip = 2707; continue _fun0003 }
 2704:
            var24 = var31;
 2707:
            var29['username'] = var24;
            if(var67) { _fun0003_ip = 2749; continue _fun0003 }
 2716:
            var31 = _closure1_slot3;
            var36 = var18 != var33;
            var24 = undefined;
            if(!var36) { _fun0003_ip = 2732; continue _fun0003 }
 2729:
            var24 = var33;
 2732:
            var24 = var31.bind(var5)(var24);
            if(!(var18 == var24)) { _fun0003_ip = 2747; continue _fun0003 }
 2741:
            var24 = var29.colorString;
 2747:
            _fun0003_ip = 2755; continue _fun0003;
 2749:
            var24 = var29.colorString;
 2755:
            var29['colorString'] = var24;
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var24 = 50;
            var24 = var33[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.bind(var5)(var2, var23);
            if(!var24) { _fun0003_ip = 2809; continue _fun0003 }
 2790:
            var31 = var29.username;
            var24 = '@';
            var24 = var24 + var31;
            var29['username'] = var24;
 2809:
            var31 = var18 == var30;
            var24 = undefined;
            if(var31) { _fun0003_ip = 2829; continue _fun0003 }
 2818:
            var30 = var30.messageSnapshot;
            var24 = var30.message;
 2829:
            var33 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 2839; continue _fun0003 }
 2836:
            var33 = var24;
 2839:
            var24 = 'stickers';
            var24 = var24 in var33;
            if(var24) { _fun0003_ip = 2856; continue _fun0003 }
 2850:
            var24 = new Array(0);
            _fun0003_ip = 2887; continue _fun0003;
 2856:
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 27;
            var30 = var36[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getMessageStickers;
            var24 = var30.bind(var31)(var33);
 2887:
            var24 = var24.length;
            var30 = 0;
            if(!(!(var24 > var30))) { _fun0003_ip = 3366; continue _fun0003 }
 2901:
            var24 = 'interaction';
            var24 = var24 in var33;
            if(!var24) { _fun0003_ip = 2938; continue _fun0003 }
 2912:
            var24 = var33.interaction;
            if(!(var18 != var24)) { _fun0003_ip = 2938; continue _fun0003 }
 2922:
            var31 = var33.content;
            var24 = '';
            if(!(var24 !== var31)) { _fun0003_ip = 3309; continue _fun0003 }
 2938:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var36 = 28;
            var24 = var24[var36];
            var42 = var31.bind(var5)(var24);
            var37 = var42.hasFlag;
            var31 = var33.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_VOICE_MESSAGE;
            var24 = var37.bind(var42)(var31, var24);
            if(var24) { _fun0003_ip = 3252; continue _fun0003 }
 2991:
            var31 = var33.type;
            var24 = _closure1_slot22;
            var24 = var24.POLL_RESULT;
            if(!(var31 !== var24)) { _fun0003_ip = 3219; continue _fun0003 }
 3013:
            var31 = _closure1_slot0;
            var24 = _closure1_slot2;
            var24 = var24[var36];
            var37 = var31.bind(var5)(var24);
            var36 = var37.hasFlag;
            var31 = var33.flags;
            var24 = _closure1_slot24;
            var24 = var24.IS_COMPONENTS_V2;
            var24 = var36.bind(var37)(var31, var24);
            if(var24) { _fun0003_ip = 3162; continue _fun0003 }
 3060:
            var24 = var33.embeds;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 3105; continue _fun0003 }
 3075:
            var24 = var33.attachments;
            var24 = var24.length;
            if(!(!(var24 > var30))) { _fun0003_ip = 3105; continue _fun0003 }
 3090:
            var31 = var33.content;
            var30 = '';
            var24 = null;
            if(!(var30 === var31)) { _fun0003_ip = 3160; continue _fun0003 }
 3105:
            var37 = _closure1_slot0;
            var42 = _closure1_slot2;
            var30 = 23;
            var31 = var42[var30];
            var31 = var37.bind(var5)(var31);
            var36 = var31.intl;
            var31 = var36.string;
            var30 = var42[var30];
            var30 = var37.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.JAKsMz;
            var24 = var31.bind(var36)(var30);
 3160:
            _fun0003_ip = 3217; continue _fun0003;
 3162:
            var37 = _closure1_slot0;
            var42 = _closure1_slot2;
            var30 = 23;
            var31 = var42[var30];
            var31 = var37.bind(var5)(var31);
            var36 = var31.intl;
            var31 = var36.string;
            var30 = var42[var30];
            var30 = var37.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.Xxm5i4;
            var24 = var31.bind(var36)(var30);
 3217:
            _fun0003_ip = 3250; continue _fun0003;
 3219:
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 29;
            var30 = var36[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getPollResultsReplyPreviewMobile;
            var24 = var30.bind(var31)(var33);
 3250:
            _fun0003_ip = 3307; continue _fun0003;
 3252:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var30 = 23;
            var31 = var37[var30];
            var31 = var36.bind(var5)(var31);
            var33 = var31.intl;
            var31 = var33.string;
            var30 = var37[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.6bhHra;
            var24 = var31.bind(var33)(var30);
 3307:
            _fun0003_ip = 3364; continue _fun0003;
 3309:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var30 = 23;
            var31 = var37[var30];
            var31 = var36.bind(var5)(var31);
            var33 = var31.intl;
            var31 = var33.string;
            var30 = var37[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.2v7kfn;
            var24 = var31.bind(var33)(var30);
 3364:
            _fun0003_ip = 3421; continue _fun0003;
 3366:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var30 = 23;
            var31 = var37[var30];
            var31 = var36.bind(var5)(var31);
            var33 = var31.intl;
            var31 = var33.string;
            var30 = var37[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.7K5LmZ;
            var24 = var31.bind(var33)(var30);
 3421:
            var30 = var23.type;
            var23 = _closure1_slot22;
            var23 = var23.POLL_RESULT;
            if(!(var30 === var23)) { _fun0003_ip = 3446; continue _fun0003 }
 3440:
            var29['content'] = var24;
 3446:
            var23 = {};
            var30 = _closure1_slot21;
            var30 = var30.LOADED;
            var23['state'] = var30;
            var23['message'] = var29;
            var94 = var23;
            if(!(var18 != var24)) { _fun0003_ip = 3731; continue _fun0003 }
 3476:
            var23['systemContent'] = var24;
            var94 = var23;
            _fun0003_ip = 3731; continue _fun0003;
 3490:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var29 = var33[var24];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var24 = var33[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.1i+hMj;
            var24 = var29.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
            _fun0003_ip = 3731; continue _fun0003;
 3573:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var29 = var33[var24];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var24 = var33[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.G7p6v7;
            var24 = var29.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
            _fun0003_ip = 3731; continue _fun0003;
 3653:
            var23 = {};
            var24 = _closure1_slot21;
            var24 = var24.SYSTEM;
            var23['state'] = var24;
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var24 = 23;
            var29 = var33[var24];
            var29 = var31.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var24 = var33[var24];
            var24 = var31.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.XAkOo6;
            var24 = var29.bind(var30)(var24);
            var23['content'] = var24;
            var94 = var23;
 3731:
            var91 = undefined;
            if(!var21) { _fun0003_ip = 3761; continue _fun0003 }
 3736:
            var21 = _closure1_slot28;
            r105 = undefined;
            r104 = var2;
            r103 = var14;
            r102 = var6;
            r101 = var17;
            r100 = var7;
            var91 = r105[var21](r104, r103, r102, r101, r100, var100);
 3761:
            var23 = _closure1_slot9;
            var21 = var23.getInteraction;
            var63 = var21.bind(var23)(var2);
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 52;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.createInteractionStatus;
            var53 = var21.bind(var23)(var2, var63);
            var23 = var18 != var64;
            var21 = null;
            if(!var23) { _fun0003_ip = 3838; continue _fun0003 }
 3817:
            var29 = _closure1_slot18;
            var24 = var29.getMember;
            var23 = var71.id;
            var21 = var24.bind(var29)(var64, var23);
 3838:
            var24 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 53;
            var23 = var29[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.isMemberCommunicationDisabled;
            var36 = var23.bind(var24)(var21);
            var23 = _closure1_slot4;
            var31 = var23.useReducedMotion;
            var23 = _closure1_slot4;
            var66 = var23.alwaysShowLinkDecorations;
            var23 = var18 == var22;
            var30 = var21;
            var21 = undefined;
            if(var23) { _fun0003_ip = 3907; continue _fun0003 }
 3901:
            var21 = var22.parent_id;
 3907:
            var29 = var22;
            if(!(var18 != var21)) { _fun0003_ip = 3957; continue _fun0003 }
 3914:
            var29 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 3957; continue _fun0003 }
 3921:
            var21 = var22.isThread;
            var21 = var21.bind(var22)();
            var29 = var22;
            if(!var21) { _fun0003_ip = 3957; continue _fun0003 }
 3937:
            var24 = _closure1_slot17;
            var23 = var24.getChannel;
            var21 = var22.parent_id;
            var29 = var23.bind(var24)(var21);
 3957:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 54;
            var21 = var24[var21];
            var24 = var23.bind(var5)(var21);
            var23 = var24.getVisibleConnectionsRole;
            var21 = {};
            var21['guildMember'] = var30;
            var21['channel'] = var29;
            var21['onlyChannelConnectionRoles'] = var8;
            var72 = var23.bind(var24)(var21);
            var21 = var41.attachments;
            var21 = var21.length;
            var50 = 0;
            var44 = var50 !== var21;
            var21 = var41.embeds;
            var21 = var21.length;
            var45 = var50 !== var21;
            var21 = var38;
            if(!var38) { _fun0003_ip = 4057; continue _fun0003 }
 4042:
            var23 = var2.attachments;
            var23 = var23.length;
            var21 = var50 === var23;
 4057:
            if(!var21) { _fun0003_ip = 4064; continue _fun0003 }
 4060:
            var21 = var18 != var28;
 4064:
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var42 = 55;
            var23 = var23[var42];
            var23 = var24.bind(var5)(var23);
            var24 = var23.ViewImageDescriptions;
            var23 = var24.getSetting;
            var57 = var23.bind(var24)();
            var37 = new Array(0);
            if(var21) { _fun0003_ip = 4234; continue _fun0003 }
 4110:
            if(!var43) { _fun0003_ip = 4295; continue _fun0003 }
 4116:
            var24 = _closure1_slot1;
            var29 = _closure1_slot2;
            var23 = 57;
            var23 = var29[var23];
            var24 = var24.bind(var5)(var23);
            var23 = {};
            var29 = var41.attachments;
            var23['attachments'] = var29;
            var33 = _closure1_slot20;
            var30 = var33.getUploadAttachments;
            var29 = var2.nonce;
            var29 = var30.bind(var33)(var29);
            var23['uploadAttachments'] = var29;
            var23['shouldInlineAttachmentMedia'] = var39;
            var23['gifAutoPlay'] = var56;
            var23['viewImageDescriptions'] = var57;
            var23['useReducedMotion'] = var31;
            var23['shouldObscureSpoiler'] = var60;
            var29 = var25.embedBackgroundColor;
            var23['themedBackgroundColor'] = var29;
            var23['enabledContentHarmTypeFlags'] = var59;
            var23['shouldAgeVerify'] = var58;
            var23['colors'] = var25;
            var37 = var24.bind(var5)(var23);
            _fun0003_ip = 4295; continue _fun0003;
 4234:
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
            var23['shouldInlineAttachmentMedia'] = var39;
            var37 = var24.bind(var5)(var23);
 4295:
            if(!var21) { _fun0003_ip = 4317; continue _fun0003 }
 4298:
            var23 = var2.state;
            var21 = _closure1_slot23;
            var21 = var21.SEND_FAILED;
            if(!(var23 === var21)) { _fun0003_ip = 4357; continue _fun0003 }
 4317:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 58;
            var21 = var24[var21];
            var24 = var23.bind(var5)(var21);
            var23 = var24.calendarFormat;
            var21 = var2.timestamp;
            var69 = var23.bind(var24)(var21, var8);
            _fun0003_ip = 4414; continue _fun0003;
 4357:
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
            var21 = var21.yXY+5O;
            var69 = var23.bind(var24)(var21);
 4414:
            var23 = _closure1_slot16;
            var21 = var23.getId;
            var33 = var21.bind(var23)();
            var21 = var2.isUnsupported;
            var65 = var26;
            if(!var21) { _fun0003_ip = 4497; continue _fun0003 }
 4440:
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
            var21 = var21.sWi5ER;
            var65 = var23.bind(var24)(var21);
 4497:
            var21 = var2.isPoll;
            var21 = var21.bind(var2)();
            var21 = !var21;
            if(var21) { _fun0003_ip = 4525; continue _fun0003 }
 4513:
            var23 = !var6;
            if(!var23) { _fun0003_ip = 4522; continue _fun0003 }
 4519:
            var23 = var16;
 4522:
            var21 = var23;
 4525:
            if(var21) { _fun0003_ip = 4546; continue _fun0003 }
 4528:
            var23 = var18 != var26;
            if(!var23) { _fun0003_ip = 4543; continue _fun0003 }
 4535:
            var24 = '';
            var23 = var24 !== var26;
 4543:
            var21 = var23;
 4546:
            if(var21) { _fun0003_ip = 4580; continue _fun0003 }
 4549:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 29;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.getPollReplyPreview;
            var65 = var21.bind(var23)(var2);
 4580:
            var29 = undefined;
            if(!var16) { _fun0003_ip = 4624; continue _fun0003 }
 4585:
            var21 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = 59;
            var16 = var23[var16];
            var21 = var21.bind(var5)(var16);
            var16 = {};
            var16['theme'] = var20;
            var16['animateEmoji'] = var79;
            var29 = var21.bind(var5)(var2, var5, var16);
 4624:
            var24 = undefined;
            if(!var4) { _fun0003_ip = 4667; continue _fun0003 }
 4629:
            var24 = undefined;
            if(!var1) { _fun0003_ip = 4667; continue _fun0003 }
 4634:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 60;
            var1 = var16[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var24 = var1.bind(var4)(var2, var78, var75);
 4667:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var95 = 61;
            var1 = var1[var95];
            var21 = var4.bind(var5)(var1);
            var16 = var21.shouldDisplayGuildTag;
            var4 = var71.id;
            var23 = var18 != var64;
            var1 = undefined;
            if(!var23) { _fun0003_ip = 4710; continue _fun0003 }
 4707:
            var1 = var64;
 4710:
            var1 = var16.bind(var21)(var4, var1);
            var23 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 4843; continue _fun0003 }
 4725:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var95];
            var26 = var4.bind(var5)(var1);
            var4 = var26.getUserPrimaryGuild;
            var1 = var71.primaryGuild;
            var28 = var4.bind(var26)(var1);
            var26 = var28.guildId;
            var4 = var28.tag;
            var1 = var28.guildId;
            var30 = var18 != var1;
            var1 = undefined;
            if(!var30) { _fun0003_ip = 4834; continue _fun0003 }
 4783:
            var92 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var95];
            var96 = var92.bind(var5)(var30);
            var95 = var96.getGuildTagBadgeUrl;
            var92 = var28.guildId;
            var30 = var28.badge;
            var28 = _closure1_slot26;
            var28 = var28.SIZE_12;
            var1 = var95.bind(var96)(var92, var30, var28);
 4834:
            var16 = var1;
            var23 = var26;
            var21 = var4;
 4843:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var96 = 28;
            var1 = var1[var96];
            var28 = var4.bind(var5)(var1);
            var26 = var28.hasFlag;
            var1 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 4879; continue _fun0003 }
 4876:
            var1 = var41;
 4879:
            var4 = var1.flags;
            var1 = _closure1_slot24;
            var1 = var1.IS_VOICE_MESSAGE;
            var26 = var26.bind(var28)(var4, var1);
            var1 = {};
            var1['currentUserId'] = var33;
            var1['message'] = var2;
            var1['theme'] = var20;
            var95 = var1.currentUserId;
            var92 = var1.message;
            var30 = var1.theme;
            var1 = var92.referralTrialOfferId;
            var28 = var92.type;
            var4 = _closure1_slot22;
            var4 = var4.PREMIUM_REFERRAL;
            if(!(var28 === var4)) { _fun0003_ip = 5004; continue _fun0003 }
 4958:
            if(!(var18 != var1)) { _fun0003_ip = 5004; continue _fun0003 }
 4962:
            var1 = {};
            var28 = _closure1_slot0;
            var97 = _closure1_slot2;
            var4 = 20;
            var4 = var97[var4];
            var28 = var28.bind(var5)(var4);
            var4 = var28.createReferralTrialEmbedRedeemable;
            var4 = var4.bind(var28)(var92, var30, var95);
            var1['referralTrialOfferDataUpdated'] = var4;
            _fun0003_ip = 5008; continue _fun0003;
 5004:
            var1 = _closure1_slot27;
 5008:
            var28 = var1.referralTrialOfferDataUpdated;
            var92 = _closure1_slot5;
            var4 = var92.getApplication;
            var95 = var2.applicationId;
            var97 = var18 != var95;
            var30 = '';
            var1 = var30;
            if(!var97) { _fun0003_ip = 5046; continue _fun0003 }
 5043:
            var1 = var95;
 5046:
            var1 = var4.bind(var92)(var1);
            var92 = var18 != var1;
            if(!var92) { _fun0003_ip = 5102; continue _fun0003 }
 5058:
            var95 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var96];
            var97 = var95.bind(var5)(var4);
            var96 = var97.hasFlag;
            var95 = var2.flags;
            var4 = _closure1_slot24;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var92 = var96.bind(var97)(var95, var4);
 5102:
            var4 = undefined;
            if(!var92) { _fun0003_ip = 5112; continue _fun0003 }
 5107:
            var4 = var1.id;
 5112:
            var1 = {};
            var92 = var2.id;
            var1['id'] = var92;
            var92 = var2.channel_id;
            var1['channelId'] = var92;
            var95 = var18 != var64;
            var92 = undefined;
            if(!var95) { _fun0003_ip = 5144; continue _fun0003 }
 5141:
            var92 = var64;
 5144:
            var1['guildId'] = var92;
            var92 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 5158; continue _fun0003 }
 5155:
            var92 = var41;
 5158:
            var92 = var92.flags;
            var1['flags'] = var92;
            var92 = var2.type;
            var1['type'] = var92;
            var92 = var2.nonce;
            if(!(var18 != var92)) { _fun0003_ip = 5203; continue _fun0003 }
 5186:
            var92 = var2.nonce;
            var95 = 'string';
            var92 = typeof var92;
            if(!(var95 === var92)) { _fun0003_ip = 5211; continue _fun0003 }
 5203:
            var92 = var2.nonce;
            _fun0003_ip = 5230; continue _fun0003;
 5211:
            var95 = global;
            var96 = var95.String;
            var95 = var2.nonce;
            var92 = var96.bind(var5)(var95);
 5230:
            var1['nonce'] = var92;
            var92 = var2.state;
            var1['state'] = var92;
            var1['reactions'] = var19;
            var92 = undefined;
            if(var52) { _fun0003_ip = 5257; continue _fun0003 }
 5254:
            var92 = var94;
 5257:
            var1['referencedMessage'] = var92;
            var1['threadEmbed'] = var91;
            var92 = var18 != var93;
            var91 = undefined;
            if(!var92) { _fun0003_ip = 5288; continue _fun0003 }
 5276:
            var92 = var93.getForwardInfo;
            var91 = var92.bind(var93)();
 5288:
            var1['forwardInfo'] = var91;
            var90 = !var90;
            if(!var90) { _fun0003_ip = 5307; continue _fun0003 }
 5301:
            var90 = var2.mentioned;
 5307:
            var1['mentioned'] = var90;
            var90 = var2.isEdited;
            var91 = var90.bind(var2)();
            var90 = var30;
            if(!var91) { _fun0003_ip = 5393; continue _fun0003 }
 5330:
            var90 = var30;
            if(var52) { _fun0003_ip = 5393; continue _fun0003 }
 5336:
            var94 = _closure1_slot0;
            var95 = _closure1_slot2;
            var91 = 23;
            var92 = var95[var91];
            var92 = var94.bind(var5)(var92);
            var93 = var92.intl;
            var92 = var93.string;
            var91 = var95[var91];
            var91 = var94.bind(var5)(var91);
            var91 = var91.t;
            var91 = var91.C8sXIC;
            var90 = var92.bind(var93)(var91);
 5393:
            var1['edited'] = var90;
            var90 = var25.editedColor;
            var1['editedColor'] = var90;
            var90 = var2.isUnsupported;
            if(var90) { _fun0003_ip = 5426; continue _fun0003 }
 5418:
            var90 = var25.textColor;
            _fun0003_ip = 5432; continue _fun0003;
 5426:
            var90 = var25.unsupportedColor;
 5432:
            var1['textColor'] = var90;
            var90 = var25.linkColor;
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
            if(!var67) { _fun0003_ip = 5519; continue _fun0003 }
 5514:
            var79 = var71.username;
 5519:
            var80 = var18 != var79;
            var75 = undefined;
            if(!var80) { _fun0003_ip = 5531; continue _fun0003 }
 5528:
            var75 = var79;
 5531:
            var1['username'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 5545; continue _fun0003 }
 5540:
            var75 = var78.uri;
 5545:
            var1['avatarURL'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 5558; continue _fun0003 }
 5555:
            var75 = var77;
 5558:
            var1['avatarDecorationURL'] = var75;
            var71 = var71.id;
            var1['authorId'] = var71;
            if(var67) { _fun0003_ip = 5619; continue _fun0003 }
 5578:
            var71 = 'username';
            if(!(var71 === var14)) { _fun0003_ip = 5619; continue _fun0003 }
 5586:
            var75 = _closure1_slot3;
            var77 = var18 != var73;
            var71 = undefined;
            if(!var77) { _fun0003_ip = 5602; continue _fun0003 }
 5599:
            var71 = var73;
 5602:
            var71 = var75.bind(var5)(var71);
            if(!(var18 == var71)) { _fun0003_ip = 5617; continue _fun0003 }
 5611:
            var71 = var25.defaultUsernameColor;
 5617:
            _fun0003_ip = 5625; continue _fun0003;
 5619:
            var71 = var25.defaultUsernameColor;
 5625:
            var1['usernameColor'] = var71;
            var71 = null;
            if(var67) { _fun0003_ip = 5671; continue _fun0003 }
 5635:
            var77 = _closure1_slot3;
            var78 = var18 != var73;
            var75 = undefined;
            if(!var78) { _fun0003_ip = 5651; continue _fun0003 }
 5648:
            var75 = var73;
 5651:
            var77 = var77.bind(var5)(var75);
            var78 = var18 != var77;
            var75 = null;
            if(!var78) { _fun0003_ip = 5668; continue _fun0003 }
 5665:
            var75 = var77;
 5668:
            var71 = var75;
 5671:
            var1['roleColor'] = var71;
            var71 = null;
            if(!var74) { _fun0003_ip = 5717; continue _fun0003 }
 5681:
            var71 = null;
            if(var67) { _fun0003_ip = 5717; continue _fun0003 }
 5686:
            var75 = _closure1_slot0;
            var77 = _closure1_slot2;
            var74 = 62;
            var74 = var77[var74];
            var75 = var75.bind(var5)(var74);
            var74 = var75.processColorStrings;
            var71 = var74.bind(var75)(var76);
 5717:
            var1['roleColors'] = var71;
            var71 = 'dot';
            var71 = var71 === var14;
            var1['shouldShowRoleDot'] = var71;
            var71 = 'username';
            var71 = var71 === var14;
            var1['shouldShowRoleOnName'] = var71;
            var1['showLinkDecorations'] = var66;
            if(var67) { _fun0003_ip = 5791; continue _fun0003 }
 5758:
            var71 = _closure1_slot3;
            var74 = var18 != var73;
            var66 = undefined;
            if(!var74) { _fun0003_ip = 5774; continue _fun0003 }
 5771:
            var66 = var73;
 5774:
            var66 = var71.bind(var5)(var66);
            if(!(var18 == var66)) { _fun0003_ip = 5789; continue _fun0003 }
 5783:
            var66 = var25.defaultUsernameColor;
 5789:
            _fun0003_ip = 5797; continue _fun0003;
 5791:
            var66 = var25.defaultUsernameColor;
 5797:
            var1['colorString'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5810; continue _fun0003 }
 5807:
            var66 = var70;
 5810:
            var1['roleIcon'] = var66;
            var70 = var18 != var72;
            var66 = undefined;
            if(!var70) { _fun0003_ip = 5855; continue _fun0003 }
 5824:
            var71 = _closure1_slot0;
            var73 = _closure1_slot2;
            var70 = 63;
            var70 = var73[var70];
            var71 = var71.bind(var5)(var70);
            var70 = var71.createConnectionsRoleTag;
            var66 = var70.bind(var71)(var72);
 5855:
            var1['connectionsRoleTag'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5870; continue _fun0003 }
 5867:
            var66 = var69;
 5870:
            var1['timestamp'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5886; continue _fun0003 }
 5880:
            var66 = var25.timestampColor;
 5886:
            var1['timestampColor'] = var66;
            var1['content'] = var65;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var52;
            var65 = undefined;
            if(!(var5 !== var68)) { _fun0003_ip = 5944; continue _fun0003 }
 5911:
            var67 = _closure1_slot0;
            var69 = _closure1_slot2;
            var66 = 64;
            var66 = var69[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.createSurveyIndication;
            var65 = var66.bind(var67)(var2, var20, var68);
 5944:
            var1['surveyIndication'] = var65;
            var66 = _closure1_slot0;
            var67 = _closure1_slot2;
            var65 = 65;
            var65 = var67[var65];
            var66 = var66.bind(var5)(var65);
            var65 = var66.createEphemeralIndication;
            var65 = var65.bind(var66)(var2);
            var1['ephemeralIndication'] = var65;
            var1['interactionStatus'] = var53;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 6050; continue _fun0003 }
 5999:
            var65 = _closure1_slot0;
            var66 = _closure1_slot2;
            var55 = 66;
            var55 = var66[var55];
            var66 = var65.bind(var5)(var55);
            var65 = var66.createExecutedCommand;
            r100 = var25.defaultUsernameColor;
            r105 = var66;
            r104 = var2;
            r103 = var22;
            r102 = var14;
            r101 = var20;
            var53 = r105[var65](r104, r103, r102, r101, r100, var100);
 6050:
            var1['executedCommand'] = var53;
            var53 = var41.components;
            var53 = var53.length;
            var55 = var53 > var50;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 6161; continue _fun0003 }
 6077:
            var53 = undefined;
            if(!var54) { _fun0003_ip = 6161; continue _fun0003 }
 6082:
            var55 = _closure1_slot1;
            var65 = _closure1_slot2;
            var54 = 67;
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
            var54['colors'] = var25;
            var53 = var55.bind(var5)(var54);
 6161:
            var1['components'] = var53;
            var53 = 0;
            if(var52) { _fun0003_ip = 6177; continue _fun0003 }
 6171:
            var53 = var25.feedbackColor;
 6177:
            var1['feedbackColor'] = var53;
            var50 = 0;
            if(var52) { _fun0003_ip = 6193; continue _fun0003 }
 6187:
            var50 = var25.highlightColor;
 6193:
            var1['highlightColor'] = var50;
            var52 = var18 != var51;
            var50 = undefined;
            if(!var52) { _fun0003_ip = 6210; continue _fun0003 }
 6207:
            var50 = var51;
 6210:
            var1['embeds'] = var50;
            if(var49) { _fun0003_ip = 6224; continue _fun0003 }
 6218:
            var49 = new Array(0);
            _fun0003_ip = 6256; continue _fun0003;
 6224:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 68;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createGiftCodeEmbed;
            var49 = var50.bind(var51)(var2, var20);
 6256:
            var1['giftCodes'] = var49;
            if(var46) { _fun0003_ip = 6270; continue _fun0003 }
 6264:
            var46 = new Array(0);
            _fun0003_ip = 6303; continue _fun0003;
 6270:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 69;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createCodedLinkEmbeds;
            var46 = var49.bind(var50)(var2, var41, var20);
 6303:
            var1['codedLinks'] = var46;
            var46 = undefined;
            if(!var48) { _fun0003_ip = 6344; continue _fun0003 }
 6313:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 70;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityInstanceEmbed;
            var46 = var48.bind(var49)(var2);
 6344:
            var1['activityInstanceEmbed'] = var46;
            var46 = undefined;
            if(!var47) { _fun0003_ip = 6388; continue _fun0003 }
 6356:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 71;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityInviteEmbed;
            var46 = var48.bind(var49)(var2, var20);
 6388:
            var1['activityInviteEmbed'] = var46;
            var46 = undefined;
            if(!var47) { _fun0003_ip = 6432; continue _fun0003 }
 6400:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 72;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityRichPresenceInviteEmbed;
            var46 = var47.bind(var48)(var2, var22);
 6432:
            var1['activityRichPresenceInviteEmbed'] = var46;
            if(!var39) { _fun0003_ip = 6463; continue _fun0003 }
 6442:
            if(!var43) { _fun0003_ip = 6454; continue _fun0003 }
 6445:
            if(var44) { _fun0003_ip = 6451; continue _fun0003 }
 6448:
            var44 = var45;
 6451:
            var43 = var44;
 6454:
            if(var43) { _fun0003_ip = 6460; continue _fun0003 }
 6457:
            var43 = var38;
 6460:
            var39 = var43;
 6463:
            var1['useAttachmentGridLayout'] = var39;
            var1['useAttachmentUploadPreview'] = var38;
            var1['attachments'] = var37;
            var43 = 1;
            var37 = var43;
            if(!var38) { _fun0003_ip = 6521; continue _fun0003 }
 6489:
            var39 = var2.state;
            var38 = _closure1_slot23;
            var38 = var38.SEND_FAILED;
            var37 = var43;
            if(!(var39 === var38)) { _fun0003_ip = 6521; continue _fun0003 }
 6511:
            var37 = 0.2;
 6521:
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
            if(!var35) { _fun0003_ip = 6618; continue _fun0003 }
 6615:
            var35 = var36;
 6618:
            var1['communicationDisabled'] = var35;
            var1['threadStarterMessageHeader'] = var32;
            var35 = var18 == var22;
            if(var35) { _fun0003_ip = 6648; continue _fun0003 }
 6635:
            var32 = var22.isForumPost;
            var32 = var32.bind(var22)();
            var35 = !var32;
 6648:
            var32 = !var35;
            if(var35) { _fun0003_ip = 6668; continue _fun0003 }
 6654:
            var36 = var2.id;
            var35 = var2.channel_id;
            var32 = var36 === var35;
 6668:
            var1['isFirstForumPostMessage'] = var32;
            var35 = var18 != var22;
            var32 = undefined;
            if(!var35) { _fun0003_ip = 6714; continue _fun0003 }
 6684:
            var35 = var22.isForumPost;
            var35 = var35.bind(var22)();
            var32 = undefined;
            if(!var35) { _fun0003_ip = 6714; continue _fun0003 }
 6699:
            var32 = undefined;
            if(!var34) { _fun0003_ip = 6714; continue _fun0003 }
 6704:
            var34 = _closure1_slot29;
            var32 = var34.bind(var5)(var2, var22);
 6714:
            var1['postActions'] = var32;
            var32 = var2.author;
            var32 = var32.id;
            var32 = var32 === var33;
            var1['isCurrentUserMessageAuthor'] = var32;
            var32 = _closure1_slot6;
            var32 = var32.gradientPreset;
            var32 = var18 != var32;
            var1['usingGradientTheme'] = var32;
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 24;
            var34 = var36[var32];
            var38 = var33.bind(var5)(var34);
            var37 = var38.getAssetUriForEmbed;
            var35 = _closure1_slot1;
            var34 = 74;
            var34 = var36[var34];
            var34 = var35.bind(var5)(var34);
            var34 = var37.bind(var38)(var34);
            var1['swipeToReplyIconUrl'] = var34;
            var32 = var36[var32];
            var34 = var33.bind(var5)(var32);
            var33 = var34.getAssetUriForEmbed;
            var32 = 75;
            var32 = var36[var32];
            var32 = var35.bind(var5)(var32);
            var32 = var33.bind(var34)(var32);
            var1['swipeToEditIconUrl'] = var32;
            var1['showRemixButton'] = var9;
            var1['remixTitle'] = var30;
            var30 = var25.remixButtonIconColor;
            var1['remixButtonIconColor'] = var30;
            var30 = var25.remixButtonBackgroundColor;
            var1['remixButtonBackgroundColor'] = var30;
            var1['referralTrialOfferInfo'] = var28;
            if(var27) { _fun0003_ip = 6903; continue _fun0003 }
 6897:
            var27 = new Array(0);
            _fun0003_ip = 6935; continue _fun0003;
 6903:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 76;
            var28 = var32[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.createPostPreviewEmbeds;
            var27 = var28.bind(var30)(var2, var31);
 6935:
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
            var30 = var30.2aXnfX;
            var30 = var31.bind(var32)(var30);
            var1['obscureLearnMoreLabel'] = var30;
            var30 = 77;
            var30 = var28[var30];
            var31 = var27.bind(var5)(var30);
            var30 = var31.createSafetyPolicyNoticeEmbed;
            var30 = var30.bind(var31)(var2);
            var1['safetyPolicyNoticeEmbed'] = var30;
            var1['pollData'] = var29;
            var1['sharedClientTheme'] = var24;
            var24 = 78;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var24 = var29.createSafetySystemNotificationEmbed;
            var24 = var24.bind(var29)(var2);
            var1['safetySystemNotificationEmbed'] = var24;
            var24 = 79;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var28 = var29.createCtaButton;
            var27 = var2.id;
            var24 = var2.channel_id;
            var24 = var28.bind(var29)(var27, var24, var25);
            var1['ctaButton'] = var24;
            var24 = undefined;
            if(!var26) { _fun0003_ip = 7129; continue _fun0003 }
 7123:
            var24 = var25.embedBackgroundColor;
 7129:
            var1['audioAttachmentBackgroundColor'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 80;
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
            if(var4) { _fun0003_ip = 7218; continue _fun0003 }
 7213:
            var16 = var22.type;
 7218:
            var4 = _closure1_slot25;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            return var1;
 7241:
            var4 = var2.type;
            var1 = _closure1_slot22;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 7338; continue _fun0003 }
 7260:
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
            if(var21) { _fun0003_ip = 7326; continue _fun0003 }
 7316:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
 7326:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 7432; continue _fun0003;
 7338:
            var4 = {};
            var16 = _closure1_slot28;
            r105 = undefined;
            r104 = var2;
            r103 = var14;
            r102 = var6;
            r101 = var17;
            r100 = var7;
            var16 = r105[var16](r104, r103, r102, r101, r100, var100);
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
            r103 = var17.bind(var18)(var16);
            r104 = var4;
            var16 = copyDataProperties(r104, r103);
            var1 = var4;
 7432:
            return var1;
 7434:
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
            r104 = var6;
            r103 = var7;
            var7 = copyDataProperties(r104, r103);
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