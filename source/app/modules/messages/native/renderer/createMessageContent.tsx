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
            var2 = _closure1_slot25;
            var2 = var2.HAS_THREAD;
            var2 = var3.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 850; continue _fun0001 }
 45:
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 850; continue _fun0001 }
 54:
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
            var3 = 24;
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
            var2 = _closure1_slot23;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 612; continue _fun0001 }
 362:
            var3 = var9.type;
            var2 = _closure1_slot23;
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
            var10 = 24;
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
            var9 = 24;
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
            var5 = 24;
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
 845:
            var1 = var2;
 848:
            return var1;
 850:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
            if(var6) { _fun0002_ip = 199; continue _fun0002 }
 74:
            var9 = _closure1_slot18;
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
            var4 = 27;
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
 0:
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
            if(!(var6 === var5)) { _fun0003_ip = 58; continue _fun0003 }
 56:
            var6 = false;
 58:
            var7 = var1.options;
            var33 = var1.threadStarterMessageHeader;
            var69 = var1.pushFeedbackType;
            var53 = var1.renderContentOnly;
            var31 = var1.showContentInventoryEntryFallbackEmbed;
            var22 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var19 = var7.inlineEmbedMedia;
            var17 = var7.inlineAttachmentMedia;
            var81 = var7.constrainedWidth;
            var91 = var7.ignoreMentioned;
            var80 = var7.animateEmoji;
            var41 = var7.animatingStickerMessageId;
            var57 = var7.gifAutoPlay;
            var47 = var7.renderCodedLinks;
            var50 = var7.renderGiftCode;
            var49 = var7.renderActivityInstanceEmbed;
            var48 = var7.renderActivityInviteEmbed;
            var55 = var7.renderComponents;
            var23 = var7.renderThreadEmbeds;
            var24 = var7.renderReplies;
            var36 = var7.renderCommunicationDisabled;
            var44 = var7.renderAttachments;
            var56 = var7.renderExecutedCommands;
            var21 = var7.renderPolls;
            var16 = var7.renderSharedClientTheme;
            var35 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var37 = var7.ignoreEmbedDescriptionCache;
            var39 = var7.forceHideSimpleEmbedContent;
            var61 = var7.shouldObscureSpoiler;
            var63 = var7.shouldDisableInteractiveComponents;
            var8 = var7.useAlternateEmbedColors;
            var38 = var7.shouldFilterKeywords;
            var18 = null;
            if(!(var18 == var20)) { _fun0003_ip = 280; continue _fun0003 }
 267:
            var1 = _closure1_slot16;
            var20 = var1.theme;
 280:
            var4 = _closure1_slot1;
            var27 = _closure1_slot2;
            var1 = 31;
            var1 = var27[var1];
            var1 = var4.bind(var5)(var1);
            var25 = var1.bind(var5)(var20, var8);
            var1 = 32;
            var1 = var27[var1];
            var28 = var4.bind(var5)(var1);
            var26 = var28.getCurrentConfig;
            var8 = {};
            var1 = 'createMessageContent';
            var8['location'] = var1;
            var4 = {};
            var9 = false;
            var4['autoTrackExposure'] = var9;
            var4 = var26.bind(var28)(var8, var4);
            var4 = var4.enabled;
            var26 = _closure1_slot0;
            var8 = 33;
            var8 = var27[var8];
            var8 = var26.bind(var5)(var8);
            var27 = var8.CustomThemeShareReceiveExperiment;
            var26 = var27.getCurrentConfig;
            var8 = {};
            var8['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var9;
            var1 = var26.bind(var27)(var8, var1);
            var1 = var1.enabled;
            var8 = true;
            var62 = var8 === var11;
            var27 = var62;
            if(!var62) { _fun0003_ip = 426; continue _fun0003 }
 423:
            var27 = var22;
 426:
            if(!var27) { _fun0003_ip = 448; continue _fun0003 }
 429:
            var26 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.CUSTOM_GIFT;
            var27 = var26 !== var22;
 448:
            var34 = var62;
            if(!var62) { _fun0003_ip = 457; continue _fun0003 }
 454:
            var34 = var19;
 457:
            var40 = var62;
            if(!var40) { _fun0003_ip = 466; continue _fun0003 }
 463:
            var40 = var17;
 466:
            var22 = _closure1_slot18;
            var19 = var22.getChannel;
            var17 = var2.getChannelId;
            var17 = var17.bind(var2)();
            var22 = var19.bind(var22)(var17);
            var26 = _closure1_slot18;
            var19 = var26.getChannel;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var17 = 22;
            var17 = var29[var17];
            var29 = var28.bind(var5)(var17);
            var28 = var29.castMessageIdAsChannelId;
            var17 = var2.id;
            var17 = var28.bind(var29)(var17);
            var17 = var19.bind(var26)(var17);
            var26 = var18 == var22;
            var19 = undefined;
            if(var26) { _fun0003_ip = 559; continue _fun0003 }
 549:
            var26 = var22.getGuildId;
            var19 = var26.bind(var22)();
 559:
            var26 = var2.author;
            var29 = var26.id;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 34;
            var26 = var30[var26];
            var28 = var28.bind(var5)(var26);
            var26 = var28.getHasEnhancedRoleColors;
            var75 = var26.bind(var28)(var19, var29);
            var65 = var19;
            if(!(var18 == var94)) { _fun0003_ip = 640; continue _fun0003 }
 609:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var19 = 35;
            var19 = var28[var19];
            var26 = var26.bind(var5)(var19);
            var19 = var26.maybeCreateSingleForwardForMessage;
            var94 = var19.bind(var26)(var2);
 640:
            var42 = var2;
            if(!(var18 != var94)) { _fun0003_ip = 658; continue _fun0003 }
 647:
            var19 = var94.messageSnapshot;
            var42 = var19.message;
 658:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 708; continue _fun0003 }
 665:
            var26 = _closure1_slot1;
            var28 = _closure1_slot2;
            var15 = 36;
            var15 = var28[var15];
            var26 = var26.bind(var5)(var15);
            var15 = {};
            var28 = var2.reactions;
            var15['reactions'] = var28;
            var15['animateEmoji'] = var80;
            var19 = var26.bind(var5)(var15);
 708:
            var28 = var2.type;
            var15 = _closure1_slot23;
            var26 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var28 === var26)) { _fun0003_ip = 779; continue _fun0003 }
 729:
            var29 = _closure1_slot12;
            var28 = var29.getMessageByReference;
            var26 = var2.messageReference;
            var28 = var28.bind(var29)(var26);
            var30 = var28.state;
            var26 = _closure1_slot13;
            var29 = var26.LOADED;
            var26 = null;
            if(!(var30 === var29)) { _fun0003_ip = 776; continue _fun0003 }
 771:
            var26 = var28.message;
 776:
            var15 = var26;
 779:
            if(!(var18 == var15)) { _fun0003_ip = 7621; continue _fun0003 }
 786:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var26 = 37;
            var26 = var29[var26];
            var26 = var28.bind(var5)(var26);
            var26 = var26.bind(var5)(var2);
            if(var26) { _fun0003_ip = 7428; continue _fun0003 }
 817:
            var68 = !var13;
            if(var68) { _fun0003_ip = 826; continue _fun0003 }
 823:
            var68 = var53;
 826:
            var72 = var2.author;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 39;
            var26 = var29[var26];
            var29 = var28.bind(var5)(var26);
            var28 = var29.isMessageNewerThanImprovedMarkdownEpoch;
            var30 = var2.editedTimestamp;
            if(!(var18 == var30)) { _fun0003_ip = 874; continue _fun0003 }
 868:
            var30 = var2.timestamp;
 874:
            var26 = var30.valueOf;
            var26 = var26.bind(var30)();
            var32 = var28.bind(var29)(var26);
            var26 = var42.content;
            if(!(var18 != var26)) { _fun0003_ip = 910; continue _fun0003 }
 897:
            var28 = var42.content;
            var26 = '';
            if(!(var26 === var28)) { _fun0003_ip = 923; continue _fun0003 }
 910:
            var26 = {};
            var26['content'] = var5;
            var26['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 1013; continue _fun0003;
 923:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 40;
            var28 = var30[var28];
            var30 = var29.bind(var5)(var28);
            var29 = var30.parseMessageMarkup;
            if(var39) { _fun0003_ip = 964; continue _fun0003 }
 952:
            var28 = var27;
            if(!var28) { _fun0003_ip = 961; continue _fun0003 }
 958:
            var28 = var34;
 961:
            var39 = var28;
 964:
            var28 = var18 != var17;
            if(!var28) { _fun0003_ip = 982; continue _fun0003 }
 971:
            var43 = var2.isFirstMessageInForumPost;
            var28 = var43.bind(var2)(var17);
 982:
            r106 = var30;
            r105 = var2;
            r104 = var42;
            r103 = var39;
            r102 = var6;
            r101 = var28;
            r100 = var32;
            var100 = var32;
            var99 = var38;
            var26 = r106[var29](r105, r104, r103, r102, r101, r100, var100, var99, var98);
 1013:
            var28 = var26.content;
            var38 = var26.hasSpoilerEmbeds;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var26 = 41;
            var26 = var30[var26];
            var39 = var29.bind(var5)(var26);
            var26 = var39.getEnabledHarmTypesForMessage;
            var60 = var26.bind(var39)(var2);
            var26 = 42;
            var26 = var30[var26];
            var29 = var29.bind(var5)(var26);
            var26 = var29.shouldAgeVerifyForExplicitMedia;
            var59 = var26.bind(var29)();
            var30 = undefined;
            if(!var27) { _fun0003_ip = 1209; continue _fun0003 }
 1085:
            var29 = _closure1_slot1;
            var39 = _closure1_slot2;
            var26 = 43;
            var26 = var39[var26];
            var29 = var29.bind(var5)(var26);
            var26 = {};
            var39 = var42.embeds;
            var26['embeds'] = var39;
            var39 = var2.channel_id;
            var26['channelId'] = var39;
            var26['gifAutoPlay'] = var57;
            var26['hasSpoilerEmbeds'] = var38;
            var26['ignoreEmbedDescriptionCache'] = var37;
            var26['shouldInlineEmbedMedia'] = var34;
            var26['colors'] = var25;
            var26['showListsAndHeaders'] = var32;
            var26['showMaskedLinks'] = var32;
            var32 = var25.embedBackgroundColor;
            var26['themedBackgroundColor'] = var32;
            var26['enabledContentHarmTypeFlags'] = var60;
            var26['shouldAgeVerify'] = var59;
            var32 = var2.author;
            var32 = var32.bot;
            var26['authorIsBot'] = var32;
            var26['showContentInventoryEntryFallbackEmbed'] = var31;
            var30 = var29.bind(var5)(var26);
 1209:
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var26 = 44;
            var26 = var31[var26];
            var29 = var29.bind(var5)(var26);
            var26 = {};
            var26['message'] = var2;
            var26['isSystemDM'] = var10;
            var26['channel'] = var22;
            var26['colors'] = var25;
            var26 = var29.bind(var5)(var26);
            var90 = var26.tagText;
            var89 = var26.tagVerified;
            var88 = var26.tagTextColor;
            var87 = var26.tagBackgroundColor;
            var86 = var26.tagType;
            var85 = var26.tagIconUrl;
            var84 = var26.opTagText;
            var83 = var26.opTagTextColor;
            var82 = var26.opTagBackgroundColor;
            var31 = _closure1_slot21;
            var29 = var31.getUploaderFileForMessageId;
            var26 = var2.id;
            var29 = var29.bind(var31)(var26);
            var39 = var18 != var29;
            var31 = var2.state;
            var26 = _closure1_slot24;
            var26 = var26.SEND_FAILED;
            var26 = var31 !== var26;
            if(var26) { _fun0003_ip = 1363; continue _fun0003 }
 1353:
            var31 = var2.isCommandType;
            var26 = var31.bind(var2)();
 1363:
            var31 = var30;
            if(var26) { _fun0003_ip = 1434; continue _fun0003 }
 1369:
            var26 = var30;
            if(!(var18 == var30)) { _fun0003_ip = 1380; continue _fun0003 }
 1376:
            var26 = new Array(0);
 1380:
            var32 = var26.push;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var30 = 45;
            var30 = var37[var30];
            var34 = var34.bind(var5)(var30);
            var30 = {};
            var30['uploaderFile'] = var29;
            var30['useAttachmentUploadPreview'] = var39;
            var30['colors'] = var25;
            var30 = var34.bind(var5)(var30);
            var30 = var32.bind(var26)(var30);
            var31 = var26;
 1434:
            var32 = _closure1_slot8;
            var30 = var32.getMessage;
            var26 = var2.id;
            var30 = var30.bind(var32)(var26);
            var52 = var31;
            if(!(var18 != var30)) { _fun0003_ip = 1533; continue _fun0003 }
 1461:
            var26 = var31;
            if(!(var18 == var31)) { _fun0003_ip = 1472; continue _fun0003 }
 1468:
            var26 = new Array(0);
 1472:
            var37 = var30.errorMessage;
            var31 = var26.push;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 45;
            var30 = var34[var30];
            var34 = var32.bind(var5)(var30);
            var32 = var34.createAutomodBlockedMessageEmbed;
            var30 = {};
            var30['errorMessage'] = var37;
            var30['colors'] = var25;
            var30 = var32.bind(var34)(var30);
            var30 = var31.bind(var26)(var30);
            var52 = var26;
 1533:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var34 = 46;
            var26 = var31[var34];
            var37 = var30.bind(var5)(var26);
            var32 = var37.getUserAuthor;
            var26 = var2.author;
            var26 = var32.bind(var37)(var26, var22);
            var46 = var26.guildMemberAvatar;
            var37 = var26.guildMemberAvatarDecoration;
            var32 = var26.iconRoleId;
            var26 = 47;
            var26 = var31[var26];
            var31 = var30.bind(var5)(var26);
            var30 = var31.ensureAvatarSource;
            var26 = var2.isInteractionPlaceholder;
            var26 = var26.bind(var2)();
            if(!var26) { _fun0003_ip = 1661; continue _fun0003 }
 1622:
            var26 = var2.author;
            var26 = var26.avatar;
            if(!(var18 == var26)) { _fun0003_ip = 1661; continue _fun0003 }
 1638:
            var38 = var2.application;
            var43 = var18 == var38;
            var26 = undefined;
            if(var43) { _fun0003_ip = 1657; continue _fun0003 }
 1652:
            var26 = var38.icon;
 1657:
            if(!(var18 == var26)) { _fun0003_ip = 1736; continue _fun0003 }
 1661:
            if(!(var18 != var46)) { _fun0003_ip = 1669; continue _fun0003 }
 1665:
            if(!(var18 == var65)) { _fun0003_ip = 1682; continue _fun0003 }
 1669:
            var26 = var72.getAvatarSource;
            var26 = var26.bind(var72)(var5);
            _fun0003_ip = 1734; continue _fun0003;
 1682:
            var43 = _closure1_slot1;
            var45 = _closure1_slot2;
            var38 = 48;
            var38 = var45[var38];
            var45 = var43.bind(var5)(var38);
            var43 = var45.getGuildMemberAvatarSource;
            var38 = {};
            var51 = var72.id;
            var38['userId'] = var51;
            var38['guildMemberAvatar'] = var46;
            var38['guildId'] = var65;
            var26 = var43.bind(var45)(var38, var72);
 1734:
            _fun0003_ip = 1813; continue _fun0003;
 1736:
            var43 = _closure1_slot1;
            var45 = _closure1_slot2;
            var38 = 48;
            var38 = var45[var38];
            var45 = var43.bind(var5)(var38);
            var43 = var45.getApplicationIconSource;
            var38 = {};
            var46 = var2.application;
            var46 = var46.id;
            var38['id'] = var46;
            var46 = var2.application;
            var46 = var46.icon;
            var38['icon'] = var46;
            var46 = var2.application;
            var46 = var46.bot;
            var38['bot'] = var46;
            var26 = var43.bind(var45)(var38);
 1813:
            var79 = var30.bind(var31)(var26);
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 48;
            var26 = var31[var26];
            var31 = var30.bind(var5)(var26);
            var30 = var31.getAvatarDecorationURL;
            var26 = {};
            if(!(var18 == var37)) { _fun0003_ip = 1856; continue _fun0003 }
 1850:
            var37 = var72.avatarDecoration;
 1856:
            var26['avatarDecoration'] = var37;
            var45 = _closure1_slot0;
            var46 = _closure1_slot2;
            var37 = 49;
            var37 = var46[var37];
            var43 = var45.bind(var5)(var37);
            var38 = var43.getDecorationSizeForAvatarSize;
            var37 = 50;
            var37 = var46[var37];
            var37 = var45.bind(var5)(var37);
            var37 = var37.AvatarSizes;
            var37 = var37.NORMAL;
            var37 = var38.bind(var43)(var37);
            var26['size'] = var37;
            var78 = var30.bind(var31)(var26);
            var26 = var18 != var32;
            var71 = undefined;
            if(!var26) { _fun0003_ip = 1992; continue _fun0003 }
 1934:
            var26 = var18 != var65;
            var71 = undefined;
            if(!var26) { _fun0003_ip = 1992; continue _fun0003 }
 1943:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 51;
            var26 = var31[var26];
            var31 = var30.bind(var5)(var26);
            var30 = var31.getRoleIcon;
            var26 = {};
            var26['guildId'] = var65;
            var26['roleId'] = var32;
            var32 = 18;
            var26['size'] = var32;
            var71 = var30.bind(var31)(var26);
 1992:
            var30 = var2.hasFlag;
            var26 = _closure1_slot25;
            var26 = var26.SOURCE_MESSAGE_DELETED;
            var26 = var30.bind(var2)(var26);
            if(!var26) { _fun0003_ip = 2073; continue _fun0003 }
 2016:
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var26 = 24;
            var30 = var37[var26];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var37[var26];
            var26 = var32.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.JOtgS0;
            var28 = var30.bind(var31)(var26);
 2073:
            var30 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var34];
            var30 = var30.bind(var5)(var26);
            var26 = var30.getMessageAuthor;
            var26 = var26.bind(var30)(var2);
            var76 = var26.nick;
            var74 = var26.colorString;
            var77 = var26.colorStrings;
            var30 = var2.type;
            var26 = _closure1_slot23;
            var26 = var26.INTERACTION_PREMIUM_UPSELL;
            if(!(var30 === var26)) { _fun0003_ip = 2203; continue _fun0003 }
 2138:
            var30 = _closure1_slot0;
            var37 = _closure1_slot2;
            var26 = 24;
            var31 = var37[var26];
            var31 = var30.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.formatToPlainString;
            var26 = var37[var26];
            var26 = var30.bind(var5)(var26);
            var26 = var26.t;
            var30 = var26.u4A+xM;
            var26 = {};
            var26['appName'] = var76;
            var28 = var31.bind(var32)(var30, var26);
 2203:
            var30 = var2.type;
            var26 = _closure1_slot23;
            var26 = var26.REPLY;
            var95 = undefined;
            if(!(var30 === var26)) { _fun0003_ip = 3769; continue _fun0003 }
 2227:
            var95 = undefined;
            if(!var24) { _fun0003_ip = 3769; continue _fun0003 }
 2235:
            var30 = _closure1_slot12;
            var26 = var30.getMessageByReference;
            var24 = var2.messageReference;
            var24 = var26.bind(var30)(var24);
            var30 = var24.state;
            var26 = _closure1_slot13;
            var26 = var26.LOADED;
            if(!(var26 !== var30)) { _fun0003_ip = 2513; continue _fun0003 }
 2278:
            var26 = _closure1_slot13;
            var26 = var26.NOT_LOADED;
            if(!(var26 !== var30)) { _fun0003_ip = 2430; continue _fun0003 }
 2295:
            var26 = _closure1_slot13;
            var26 = var26.DELETED;
            if(!(var26 !== var30)) { _fun0003_ip = 2347; continue _fun0003 }
 2309:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 53;
            var26 = var31[var26];
            var30 = var30.bind(var5)(var26);
            var26 = var30.assertNever;
            var26 = var26.bind(var30)(var24);
            var95 = undefined;
            _fun0003_ip = 3769; continue _fun0003;
 2347:
            var26 = {};
            var30 = _closure1_slot22;
            var30 = var30.SYSTEM;
            var26['state'] = var30;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var30 = 24;
            var31 = var38[var30];
            var31 = var37.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var38[var30];
            var30 = var37.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.mE3KJC;
            var30 = var31.bind(var32)(var30);
            var26['content'] = var30;
            var95 = var26;
            _fun0003_ip = 3769; continue _fun0003;
 2430:
            var26 = {};
            var30 = _closure1_slot22;
            var30 = var30.SYSTEM;
            var26['state'] = var30;
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var30 = 24;
            var31 = var38[var30];
            var31 = var37.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var38[var30];
            var30 = var37.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.1i+hMj;
            var30 = var31.bind(var32)(var30);
            var26['content'] = var30;
            var95 = var26;
            _fun0003_ip = 3769; continue _fun0003;
 2513:
            var24 = var24.message;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var26 = 35;
            var26 = var31[var26];
            var30 = var30.bind(var5)(var26);
            var26 = var30.maybeCreateSingleForwardForMessage;
            var31 = var26.bind(var30)(var24);
            var30 = _closure1_slot20;
            var26 = var30.isBlockedForMessage;
            var26 = var26.bind(var30)(var24);
            if(var26) { _fun0003_ip = 3691; continue _fun0003 }
 2570:
            var30 = _closure1_slot20;
            var26 = var30.isIgnoredForMessage;
            var26 = var26.bind(var30)(var24);
            if(var26) { _fun0003_ip = 3611; continue _fun0003 }
 2591:
            var30 = _closure1_slot31;
            var26 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var26['message'] = var24;
            var26['messageForward'] = var31;
            var26['roleStyle'] = var14;
            var32 = {};
            r105 = var32;
            r104 = var7;
            var37 = copyDataProperties(r105, r104);
            var37 = 'renderReplies';
            var32[var37] = var9;
            var26['options'] = var32;
            var30 = var30.bind(var5)(var26);
            if(!(var18 != var30)) { _fun0003_ip = 3528; continue _fun0003 }
 2664:
            var26 = 'username';
            var26 = var26 in var30;
            if(!var26) { _fun0003_ip = 2847; continue _fun0003 }
 2678:
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var34];
            var32 = var32.bind(var5)(var26);
            var26 = var32.getMessageAuthor;
            var26 = var26.bind(var32)(var24);
            var32 = var26.nick;
            var34 = var26.colorString;
            if(!(var18 == var32)) { _fun0003_ip = 2733; continue _fun0003 }
 2722:
            var26 = var24.author;
            var32 = var26.username;
 2733:
            var37 = var18 != var32;
            var26 = undefined;
            if(!var37) { _fun0003_ip = 2745; continue _fun0003 }
 2742:
            var26 = var32;
 2745:
            var30['username'] = var26;
            if(var68) { _fun0003_ip = 2787; continue _fun0003 }
 2754:
            var32 = _closure1_slot3;
            var37 = var18 != var34;
            var26 = undefined;
            if(!var37) { _fun0003_ip = 2770; continue _fun0003 }
 2767:
            var26 = var34;
 2770:
            var26 = var32.bind(var5)(var26);
            if(!(var18 == var26)) { _fun0003_ip = 2785; continue _fun0003 }
 2779:
            var26 = var30.colorString;
 2785:
            _fun0003_ip = 2793; continue _fun0003;
 2787:
            var26 = var30.colorString;
 2793:
            var30['colorString'] = var26;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var26 = 52;
            var26 = var34[var26];
            var26 = var32.bind(var5)(var26);
            var26 = var26.bind(var5)(var2, var24);
            if(!var26) { _fun0003_ip = 2847; continue _fun0003 }
 2828:
            var32 = var30.username;
            var26 = '@';
            var26 = var26 + var32;
            var30['username'] = var26;
 2847:
            var32 = var18 == var31;
            var26 = undefined;
            if(var32) { _fun0003_ip = 2867; continue _fun0003 }
 2856:
            var31 = var31.messageSnapshot;
            var26 = var31.message;
 2867:
            var34 = var24;
            if(!(var18 != var26)) { _fun0003_ip = 2877; continue _fun0003 }
 2874:
            var34 = var26;
 2877:
            var26 = 'stickers';
            var26 = var26 in var34;
            if(var26) { _fun0003_ip = 2894; continue _fun0003 }
 2888:
            var26 = new Array(0);
            _fun0003_ip = 2925; continue _fun0003;
 2894:
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 28;
            var31 = var37[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.getMessageStickers;
            var26 = var31.bind(var32)(var34);
 2925:
            var26 = var26.length;
            var31 = 0;
            if(!(!(var26 > var31))) { _fun0003_ip = 3404; continue _fun0003 }
 2939:
            var26 = 'interaction';
            var26 = var26 in var34;
            if(!var26) { _fun0003_ip = 2976; continue _fun0003 }
 2950:
            var26 = var34.interaction;
            if(!(var18 != var26)) { _fun0003_ip = 2976; continue _fun0003 }
 2960:
            var32 = var34.content;
            var26 = '';
            if(!(var26 !== var32)) { _fun0003_ip = 3347; continue _fun0003 }
 2976:
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var37 = 29;
            var26 = var26[var37];
            var43 = var32.bind(var5)(var26);
            var38 = var43.hasFlag;
            var32 = var34.flags;
            var26 = _closure1_slot25;
            var26 = var26.IS_VOICE_MESSAGE;
            var26 = var38.bind(var43)(var32, var26);
            if(var26) { _fun0003_ip = 3290; continue _fun0003 }
 3029:
            var32 = var34.type;
            var26 = _closure1_slot23;
            var26 = var26.POLL_RESULT;
            if(!(var32 !== var26)) { _fun0003_ip = 3257; continue _fun0003 }
 3051:
            var32 = _closure1_slot0;
            var26 = _closure1_slot2;
            var26 = var26[var37];
            var38 = var32.bind(var5)(var26);
            var37 = var38.hasFlag;
            var32 = var34.flags;
            var26 = _closure1_slot25;
            var26 = var26.IS_COMPONENTS_V2;
            var26 = var37.bind(var38)(var32, var26);
            if(var26) { _fun0003_ip = 3200; continue _fun0003 }
 3098:
            var26 = var34.embeds;
            var26 = var26.length;
            if(!(!(var26 > var31))) { _fun0003_ip = 3143; continue _fun0003 }
 3113:
            var26 = var34.attachments;
            var26 = var26.length;
            if(!(!(var26 > var31))) { _fun0003_ip = 3143; continue _fun0003 }
 3128:
            var32 = var34.content;
            var31 = '';
            var26 = null;
            if(!(var31 === var32)) { _fun0003_ip = 3198; continue _fun0003 }
 3143:
            var38 = _closure1_slot0;
            var43 = _closure1_slot2;
            var31 = 24;
            var32 = var43[var31];
            var32 = var38.bind(var5)(var32);
            var37 = var32.intl;
            var32 = var37.string;
            var31 = var43[var31];
            var31 = var38.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.JAKsMz;
            var26 = var32.bind(var37)(var31);
 3198:
            _fun0003_ip = 3255; continue _fun0003;
 3200:
            var38 = _closure1_slot0;
            var43 = _closure1_slot2;
            var31 = 24;
            var32 = var43[var31];
            var32 = var38.bind(var5)(var32);
            var37 = var32.intl;
            var32 = var37.string;
            var31 = var43[var31];
            var31 = var38.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.Xxm5i4;
            var26 = var32.bind(var37)(var31);
 3255:
            _fun0003_ip = 3288; continue _fun0003;
 3257:
            var32 = _closure1_slot0;
            var37 = _closure1_slot2;
            var31 = 30;
            var31 = var37[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.getPollResultsReplyPreviewMobile;
            var26 = var31.bind(var32)(var34);
 3288:
            _fun0003_ip = 3345; continue _fun0003;
 3290:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var31 = 24;
            var32 = var38[var31];
            var32 = var37.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var38[var31];
            var31 = var37.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.6bhHra;
            var26 = var32.bind(var34)(var31);
 3345:
            _fun0003_ip = 3402; continue _fun0003;
 3347:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var31 = 24;
            var32 = var38[var31];
            var32 = var37.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var38[var31];
            var31 = var37.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.2v7kfn;
            var26 = var32.bind(var34)(var31);
 3402:
            _fun0003_ip = 3459; continue _fun0003;
 3404:
            var37 = _closure1_slot0;
            var38 = _closure1_slot2;
            var31 = 24;
            var32 = var38[var31];
            var32 = var37.bind(var5)(var32);
            var34 = var32.intl;
            var32 = var34.string;
            var31 = var38[var31];
            var31 = var37.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.7K5LmZ;
            var26 = var32.bind(var34)(var31);
 3459:
            var31 = var24.type;
            var24 = _closure1_slot23;
            var24 = var24.POLL_RESULT;
            if(!(var31 === var24)) { _fun0003_ip = 3484; continue _fun0003 }
 3478:
            var30['content'] = var26;
 3484:
            var24 = {};
            var31 = _closure1_slot22;
            var31 = var31.LOADED;
            var24['state'] = var31;
            var24['message'] = var30;
            var95 = var24;
            if(!(var18 != var26)) { _fun0003_ip = 3769; continue _fun0003 }
 3514:
            var24['systemContent'] = var26;
            var95 = var24;
            _fun0003_ip = 3769; continue _fun0003;
 3528:
            var24 = {};
            var26 = _closure1_slot22;
            var26 = var26.SYSTEM;
            var24['state'] = var26;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var26 = 24;
            var30 = var34[var26];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var34[var26];
            var26 = var32.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.1i+hMj;
            var26 = var30.bind(var31)(var26);
            var24['content'] = var26;
            var95 = var24;
            _fun0003_ip = 3769; continue _fun0003;
 3611:
            var24 = {};
            var26 = _closure1_slot22;
            var26 = var26.SYSTEM;
            var24['state'] = var26;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var26 = 24;
            var30 = var34[var26];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var34[var26];
            var26 = var32.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.G7p6v7;
            var26 = var30.bind(var31)(var26);
            var24['content'] = var26;
            var95 = var24;
            _fun0003_ip = 3769; continue _fun0003;
 3691:
            var24 = {};
            var26 = _closure1_slot22;
            var26 = var26.SYSTEM;
            var24['state'] = var26;
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var26 = 24;
            var30 = var34[var26];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var26 = var34[var26];
            var26 = var32.bind(var5)(var26);
            var26 = var26.t;
            var26 = var26.XAkOo6;
            var26 = var30.bind(var31)(var26);
            var24['content'] = var26;
            var95 = var24;
 3769:
            var92 = undefined;
            if(!var23) { _fun0003_ip = 3799; continue _fun0003 }
 3774:
            var23 = _closure1_slot29;
            r106 = undefined;
            r105 = var2;
            r104 = var14;
            r103 = var6;
            r102 = var17;
            r101 = var7;
            var92 = r106[var23](r105, r104, r103, r102, r101, r100);
 3799:
            var24 = _closure1_slot9;
            var23 = var24.getInteraction;
            var64 = var23.bind(var24)(var2);
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 54;
            var23 = var26[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.createInteractionStatus;
            var54 = var23.bind(var24)(var2, var64);
            var24 = var18 != var65;
            var23 = null;
            if(!var24) { _fun0003_ip = 3876; continue _fun0003 }
 3855:
            var30 = _closure1_slot19;
            var26 = var30.getMember;
            var24 = var72.id;
            var23 = var26.bind(var30)(var65, var24);
 3876:
            var26 = _closure1_slot0;
            var30 = _closure1_slot2;
            var24 = 55;
            var24 = var30[var24];
            var26 = var26.bind(var5)(var24);
            var24 = var26.isMemberCommunicationDisabled;
            var37 = var24.bind(var26)(var23);
            var24 = _closure1_slot4;
            var31 = var24.useReducedMotion;
            var24 = _closure1_slot4;
            var67 = var24.alwaysShowLinkDecorations;
            var24 = var18 == var22;
            var32 = var23;
            var23 = undefined;
            if(var24) { _fun0003_ip = 3945; continue _fun0003 }
 3939:
            var23 = var22.parent_id;
 3945:
            var30 = var22;
            if(!(var18 != var23)) { _fun0003_ip = 3995; continue _fun0003 }
 3952:
            var30 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 3995; continue _fun0003 }
 3959:
            var23 = var22.isThread;
            var23 = var23.bind(var22)();
            var30 = var22;
            if(!var23) { _fun0003_ip = 3995; continue _fun0003 }
 3975:
            var26 = _closure1_slot18;
            var24 = var26.getChannel;
            var23 = var22.parent_id;
            var30 = var24.bind(var26)(var23);
 3995:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 56;
            var23 = var26[var23];
            var26 = var24.bind(var5)(var23);
            var24 = var26.getVisibleConnectionsRole;
            var23 = {};
            var23['guildMember'] = var32;
            var23['channel'] = var30;
            var23['onlyChannelConnectionRoles'] = var8;
            var73 = var24.bind(var26)(var23);
            var23 = var42.attachments;
            var23 = var23.length;
            var51 = 0;
            var45 = var51 !== var23;
            var23 = var42.embeds;
            var23 = var23.length;
            var46 = var51 !== var23;
            var23 = var39;
            if(!var39) { _fun0003_ip = 4095; continue _fun0003 }
 4080:
            var24 = var2.attachments;
            var24 = var24.length;
            var23 = var51 === var24;
 4095:
            if(!var23) { _fun0003_ip = 4102; continue _fun0003 }
 4098:
            var23 = var18 != var29;
 4102:
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var43 = 57;
            var24 = var24[var43];
            var24 = var26.bind(var5)(var24);
            var26 = var24.ViewImageDescriptions;
            var24 = var26.getSetting;
            var58 = var24.bind(var26)();
            var38 = new Array(0);
            if(var23) { _fun0003_ip = 4272; continue _fun0003 }
 4148:
            if(!var44) { _fun0003_ip = 4333; continue _fun0003 }
 4154:
            var26 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 59;
            var24 = var30[var24];
            var26 = var26.bind(var5)(var24);
            var24 = {};
            var30 = var42.attachments;
            var24['attachments'] = var30;
            var34 = _closure1_slot21;
            var32 = var34.getUploadAttachments;
            var30 = var2.nonce;
            var30 = var32.bind(var34)(var30);
            var24['uploadAttachments'] = var30;
            var24['shouldInlineAttachmentMedia'] = var40;
            var24['gifAutoPlay'] = var57;
            var24['viewImageDescriptions'] = var58;
            var24['useReducedMotion'] = var31;
            var24['shouldObscureSpoiler'] = var61;
            var30 = var25.embedBackgroundColor;
            var24['themedBackgroundColor'] = var30;
            var24['enabledContentHarmTypeFlags'] = var60;
            var24['shouldAgeVerify'] = var59;
            var24['colors'] = var25;
            var38 = var26.bind(var5)(var24);
            _fun0003_ip = 4333; continue _fun0003;
 4272:
            var26 = _closure1_slot1;
            var30 = _closure1_slot2;
            var24 = 58;
            var24 = var30[var24];
            var26 = var26.bind(var5)(var24);
            var24 = {};
            var24['uploaderFile'] = var29;
            var30 = var2.state;
            var29 = _closure1_slot24;
            var29 = var29.SEND_FAILED;
            var29 = var30 === var29;
            var24['isFailedMessage'] = var29;
            var24['shouldInlineAttachmentMedia'] = var40;
            var38 = var26.bind(var5)(var24);
 4333:
            if(!var23) { _fun0003_ip = 4355; continue _fun0003 }
 4336:
            var24 = var2.state;
            var23 = _closure1_slot24;
            var23 = var23.SEND_FAILED;
            if(!(var24 === var23)) { _fun0003_ip = 4395; continue _fun0003 }
 4355:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 60;
            var23 = var26[var23];
            var26 = var24.bind(var5)(var23);
            var24 = var26.calendarFormat;
            var23 = var2.timestamp;
            var70 = var24.bind(var26)(var23, var8);
            _fun0003_ip = 4452; continue _fun0003;
 4395:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 24;
            var24 = var30[var23];
            var24 = var29.bind(var5)(var24);
            var26 = var24.intl;
            var24 = var26.string;
            var23 = var30[var23];
            var23 = var29.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.yXY+5O;
            var70 = var24.bind(var26)(var23);
 4452:
            var24 = _closure1_slot17;
            var23 = var24.getId;
            var34 = var23.bind(var24)();
            var23 = var2.isUnsupported;
            var66 = var28;
            if(!var23) { _fun0003_ip = 4535; continue _fun0003 }
 4478:
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var23 = 24;
            var24 = var30[var23];
            var24 = var29.bind(var5)(var24);
            var26 = var24.intl;
            var24 = var26.string;
            var23 = var30[var23];
            var23 = var29.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.sWi5ER;
            var66 = var24.bind(var26)(var23);
 4535:
            var23 = var2.isPoll;
            var23 = var23.bind(var2)();
            var23 = !var23;
            if(var23) { _fun0003_ip = 4563; continue _fun0003 }
 4551:
            var24 = !var6;
            if(!var24) { _fun0003_ip = 4560; continue _fun0003 }
 4557:
            var24 = var21;
 4560:
            var23 = var24;
 4563:
            if(var23) { _fun0003_ip = 4584; continue _fun0003 }
 4566:
            var24 = var18 != var28;
            if(!var24) { _fun0003_ip = 4581; continue _fun0003 }
 4573:
            var26 = '';
            var24 = var26 !== var28;
 4581:
            var23 = var24;
 4584:
            if(var23) { _fun0003_ip = 4618; continue _fun0003 }
 4587:
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 30;
            var23 = var26[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.getPollReplyPreview;
            var66 = var23.bind(var24)(var2);
 4618:
            var29 = undefined;
            if(!var21) { _fun0003_ip = 4662; continue _fun0003 }
 4623:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var21 = 61;
            var21 = var24[var21];
            var23 = var23.bind(var5)(var21);
            var21 = {};
            var21['theme'] = var20;
            var21['animateEmoji'] = var80;
            var29 = var23.bind(var5)(var2, var5, var21);
 4662:
            var24 = undefined;
            if(!var16) { _fun0003_ip = 4705; continue _fun0003 }
 4667:
            var24 = undefined;
            if(!var1) { _fun0003_ip = 4705; continue _fun0003 }
 4672:
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 62;
            var1 = var21[var1];
            var16 = var16.bind(var5)(var1);
            var1 = var16.formatSharedClientThemeData;
            var24 = var1.bind(var16)(var2, var79, var76);
 4705:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var96 = 63;
            var1 = var1[var96];
            var23 = var16.bind(var5)(var1);
            var21 = var23.shouldDisplayGuildTag;
            var16 = var72.id;
            var26 = var18 != var65;
            var1 = undefined;
            if(!var26) { _fun0003_ip = 4748; continue _fun0003 }
 4745:
            var1 = var65;
 4748:
            var1 = var21.bind(var23)(var16, var1);
            var23 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 4881; continue _fun0003 }
 4763:
            var26 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var96];
            var28 = var26.bind(var5)(var1);
            var26 = var28.getUserPrimaryGuild;
            var1 = var72.primaryGuild;
            var30 = var26.bind(var28)(var1);
            var28 = var30.guildId;
            var26 = var30.tag;
            var1 = var30.guildId;
            var32 = var18 != var1;
            var1 = undefined;
            if(!var32) { _fun0003_ip = 4872; continue _fun0003 }
 4821:
            var93 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var96];
            var97 = var93.bind(var5)(var32);
            var96 = var97.getGuildTagBadgeUrl;
            var93 = var30.guildId;
            var32 = var30.badge;
            var30 = _closure1_slot27;
            var30 = var30.SIZE_12;
            var1 = var96.bind(var97)(var93, var32, var30);
 4872:
            var16 = var1;
            var23 = var28;
            var21 = var26;
 4881:
            var26 = _closure1_slot0;
            var1 = _closure1_slot2;
            var97 = 29;
            var1 = var1[var97];
            var30 = var26.bind(var5)(var1);
            var28 = var30.hasFlag;
            var1 = var2;
            if(!(var18 != var42)) { _fun0003_ip = 4917; continue _fun0003 }
 4914:
            var1 = var42;
 4917:
            var26 = var1.flags;
            var1 = _closure1_slot25;
            var1 = var1.IS_VOICE_MESSAGE;
            var26 = var28.bind(var30)(var26, var1);
            var1 = {};
            var1['currentUserId'] = var34;
            var1['message'] = var2;
            var1['theme'] = var20;
            var1['referralSenderMobileXPEnabled'] = var4;
            var96 = var1.currentUserId;
            var93 = var1.message;
            var32 = var1.theme;
            var4 = var1.referralSenderMobileXPEnabled;
            var30 = var93.referralTrialOfferId;
            var28 = var93.type;
            var1 = _closure1_slot23;
            var1 = var1.PREMIUM_REFERRAL;
            if(!(var28 === var1)) { _fun0003_ip = 5176; continue _fun0003 }
 5010:
            if(!(var18 != var30)) { _fun0003_ip = 5176; continue _fun0003 }
 5017:
            var28 = _closure1_slot11;
            var1 = var28.getRelevantUserTrialOffer;
            var28 = var1.bind(var28)(var30);
            var1 = var18 != var28;
            if(!var1) { _fun0003_ip = 5058; continue _fun0003 }
 5039:
            var98 = var18 == var28;
            var30 = undefined;
            if(var98) { _fun0003_ip = 5054; continue _fun0003 }
 5048:
            var30 = var28.user_id;
 5054:
            var1 = var18 != var30;
 5058:
            if(!var1) { _fun0003_ip = 5071; continue _fun0003 }
 5061:
            var28 = var28.user_id;
            var1 = var28 === var96;
 5071:
            if(var1) { _fun0003_ip = 5126; continue _fun0003 }
 5074:
            if(!var4) { _fun0003_ip = 5080; continue _fun0003 }
 5077:
            if(!var1) { _fun0003_ip = 5126; continue _fun0003 }
 5080:
            var1 = {};
            var1['referralTrialOfferDataUpdated'] = var5;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var4 = 21;
            var4 = var30[var4];
            var28 = var28.bind(var5)(var4);
            var4 = var28.createReferralTrialEmbed;
            var4 = var4.bind(var28)(var93, var32);
            var1['referralTrialOfferData'] = var4;
            _fun0003_ip = 5174; continue _fun0003;
 5126:
            var4 = {};
            var30 = _closure1_slot0;
            var98 = _closure1_slot2;
            var28 = 21;
            var28 = var98[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.createReferralTrialEmbedRedeemable;
            var28 = var28.bind(var30)(var93, var32, var96);
            var4['referralTrialOfferDataUpdated'] = var28;
            var4['referralTrialOfferData'] = var5;
            var1 = var4;
 5174:
            _fun0003_ip = 5180; continue _fun0003;
 5176:
            var1 = _closure1_slot28;
 5180:
            var28 = var1.referralTrialOfferDataUpdated;
            var30 = var1.referralTrialOfferData;
            var93 = _closure1_slot5;
            var4 = var93.getApplication;
            var96 = var2.applicationId;
            var98 = var18 != var96;
            var32 = '';
            var1 = var32;
            if(!var98) { _fun0003_ip = 5224; continue _fun0003 }
 5221:
            var1 = var96;
 5224:
            var1 = var4.bind(var93)(var1);
            var93 = var18 != var1;
            if(!var93) { _fun0003_ip = 5280; continue _fun0003 }
 5236:
            var96 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var97];
            var98 = var96.bind(var5)(var4);
            var97 = var98.hasFlag;
            var96 = var2.flags;
            var4 = _closure1_slot25;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var93 = var97.bind(var98)(var96, var4);
 5280:
            var4 = undefined;
            if(!var93) { _fun0003_ip = 5290; continue _fun0003 }
 5285:
            var4 = var1.id;
 5290:
            var1 = {};
            var93 = var2.id;
            var1['id'] = var93;
            var93 = var2.channel_id;
            var1['channelId'] = var93;
            var96 = var18 != var65;
            var93 = undefined;
            if(!var96) { _fun0003_ip = 5322; continue _fun0003 }
 5319:
            var93 = var65;
 5322:
            var1['guildId'] = var93;
            var93 = var2;
            if(!(var18 != var42)) { _fun0003_ip = 5336; continue _fun0003 }
 5333:
            var93 = var42;
 5336:
            var93 = var93.flags;
            var1['flags'] = var93;
            var93 = var2.type;
            var1['type'] = var93;
            var93 = var2.nonce;
            if(!(var18 != var93)) { _fun0003_ip = 5381; continue _fun0003 }
 5364:
            var93 = var2.nonce;
            var96 = 'string';
            var93 = typeof var93;
            if(!(var96 === var93)) { _fun0003_ip = 5389; continue _fun0003 }
 5381:
            var93 = var2.nonce;
            _fun0003_ip = 5408; continue _fun0003;
 5389:
            var96 = global;
            var97 = var96.String;
            var96 = var2.nonce;
            var93 = var97.bind(var5)(var96);
 5408:
            var1['nonce'] = var93;
            var93 = var2.state;
            var1['state'] = var93;
            var1['reactions'] = var19;
            var93 = undefined;
            if(var53) { _fun0003_ip = 5435; continue _fun0003 }
 5432:
            var93 = var95;
 5435:
            var1['referencedMessage'] = var93;
            var1['threadEmbed'] = var92;
            var93 = var18 != var94;
            var92 = undefined;
            if(!var93) { _fun0003_ip = 5466; continue _fun0003 }
 5454:
            var93 = var94.getForwardInfo;
            var92 = var93.bind(var94)();
 5466:
            var1['forwardInfo'] = var92;
            var91 = !var91;
            if(!var91) { _fun0003_ip = 5485; continue _fun0003 }
 5479:
            var91 = var2.mentioned;
 5485:
            var1['mentioned'] = var91;
            var91 = var2.isEdited;
            var92 = var91.bind(var2)();
            var91 = var32;
            if(!var92) { _fun0003_ip = 5571; continue _fun0003 }
 5508:
            var91 = var32;
            if(var53) { _fun0003_ip = 5571; continue _fun0003 }
 5514:
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
            var92 = var92.C8sXIC;
            var91 = var93.bind(var94)(var92);
 5571:
            var1['edited'] = var91;
            var91 = var25.editedColor;
            var1['editedColor'] = var91;
            var91 = var2.isUnsupported;
            if(var91) { _fun0003_ip = 5604; continue _fun0003 }
 5596:
            var91 = var25.textColor;
            _fun0003_ip = 5610; continue _fun0003;
 5604:
            var91 = var25.unsupportedColor;
 5610:
            var1['textColor'] = var91;
            var91 = var25.linkColor;
            var1['linkColor'] = var91;
            var1['tagText'] = var90;
            var1['tagVerified'] = var89;
            var1['tagTextColor'] = var88;
            var1['tagBackgroundColor'] = var87;
            var1['tagType'] = var86;
            var1['tagIconUrl'] = var85;
            var1['opTagText'] = var84;
            var1['opTagTextColor'] = var83;
            var1['opTagBackgroundColor'] = var82;
            var1['constrainedWidth'] = var81;
            var1['gifAutoPlay'] = var57;
            var1['animateEmoji'] = var80;
            var80 = var76;
            if(!var68) { _fun0003_ip = 5697; continue _fun0003 }
 5692:
            var80 = var72.username;
 5697:
            var81 = var18 != var80;
            var76 = undefined;
            if(!var81) { _fun0003_ip = 5709; continue _fun0003 }
 5706:
            var76 = var80;
 5709:
            var1['username'] = var76;
            var76 = undefined;
            if(var68) { _fun0003_ip = 5723; continue _fun0003 }
 5718:
            var76 = var79.uri;
 5723:
            var1['avatarURL'] = var76;
            var76 = undefined;
            if(var68) { _fun0003_ip = 5736; continue _fun0003 }
 5733:
            var76 = var78;
 5736:
            var1['avatarDecorationURL'] = var76;
            var72 = var72.id;
            var1['authorId'] = var72;
            if(var68) { _fun0003_ip = 5797; continue _fun0003 }
 5756:
            var72 = 'username';
            if(!(var72 === var14)) { _fun0003_ip = 5797; continue _fun0003 }
 5764:
            var76 = _closure1_slot3;
            var78 = var18 != var74;
            var72 = undefined;
            if(!var78) { _fun0003_ip = 5780; continue _fun0003 }
 5777:
            var72 = var74;
 5780:
            var72 = var76.bind(var5)(var72);
            if(!(var18 == var72)) { _fun0003_ip = 5795; continue _fun0003 }
 5789:
            var72 = var25.defaultUsernameColor;
 5795:
            _fun0003_ip = 5803; continue _fun0003;
 5797:
            var72 = var25.defaultUsernameColor;
 5803:
            var1['usernameColor'] = var72;
            var72 = null;
            if(var68) { _fun0003_ip = 5849; continue _fun0003 }
 5813:
            var78 = _closure1_slot3;
            var79 = var18 != var74;
            var76 = undefined;
            if(!var79) { _fun0003_ip = 5829; continue _fun0003 }
 5826:
            var76 = var74;
 5829:
            var78 = var78.bind(var5)(var76);
            var79 = var18 != var78;
            var76 = null;
            if(!var79) { _fun0003_ip = 5846; continue _fun0003 }
 5843:
            var76 = var78;
 5846:
            var72 = var76;
 5849:
            var1['roleColor'] = var72;
            var72 = null;
            if(!var75) { _fun0003_ip = 5895; continue _fun0003 }
 5859:
            var72 = null;
            if(var68) { _fun0003_ip = 5895; continue _fun0003 }
 5864:
            var76 = _closure1_slot0;
            var78 = _closure1_slot2;
            var75 = 64;
            var75 = var78[var75];
            var76 = var76.bind(var5)(var75);
            var75 = var76.processColorStrings;
            var72 = var75.bind(var76)(var77);
 5895:
            var1['roleColors'] = var72;
            var72 = 'dot';
            var72 = var72 === var14;
            var1['shouldShowRoleDot'] = var72;
            var72 = 'username';
            var72 = var72 === var14;
            var1['shouldShowRoleOnName'] = var72;
            var1['showLinkDecorations'] = var67;
            if(var68) { _fun0003_ip = 5969; continue _fun0003 }
 5936:
            var72 = _closure1_slot3;
            var75 = var18 != var74;
            var67 = undefined;
            if(!var75) { _fun0003_ip = 5952; continue _fun0003 }
 5949:
            var67 = var74;
 5952:
            var67 = var72.bind(var5)(var67);
            if(!(var18 == var67)) { _fun0003_ip = 5967; continue _fun0003 }
 5961:
            var67 = var25.defaultUsernameColor;
 5967:
            _fun0003_ip = 5975; continue _fun0003;
 5969:
            var67 = var25.defaultUsernameColor;
 5975:
            var1['colorString'] = var67;
            var67 = undefined;
            if(var68) { _fun0003_ip = 5988; continue _fun0003 }
 5985:
            var67 = var71;
 5988:
            var1['roleIcon'] = var67;
            var71 = var18 != var73;
            var67 = undefined;
            if(!var71) { _fun0003_ip = 6033; continue _fun0003 }
 6002:
            var72 = _closure1_slot0;
            var74 = _closure1_slot2;
            var71 = 65;
            var71 = var74[var71];
            var72 = var72.bind(var5)(var71);
            var71 = var72.createConnectionsRoleTag;
            var67 = var71.bind(var72)(var73);
 6033:
            var1['connectionsRoleTag'] = var67;
            var67 = undefined;
            if(var68) { _fun0003_ip = 6048; continue _fun0003 }
 6045:
            var67 = var70;
 6048:
            var1['timestamp'] = var67;
            var67 = undefined;
            if(var68) { _fun0003_ip = 6064; continue _fun0003 }
 6058:
            var67 = var25.timestampColor;
 6064:
            var1['timestampColor'] = var67;
            var1['content'] = var66;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var53;
            var66 = undefined;
            if(!(var5 !== var69)) { _fun0003_ip = 6122; continue _fun0003 }
 6089:
            var68 = _closure1_slot0;
            var70 = _closure1_slot2;
            var67 = 66;
            var67 = var70[var67];
            var68 = var68.bind(var5)(var67);
            var67 = var68.createSurveyIndication;
            var66 = var67.bind(var68)(var2, var20, var69);
 6122:
            var1['surveyIndication'] = var66;
            var67 = _closure1_slot0;
            var68 = _closure1_slot2;
            var66 = 67;
            var66 = var68[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.createEphemeralIndication;
            var66 = var66.bind(var67)(var2);
            var1['ephemeralIndication'] = var66;
            var1['interactionStatus'] = var54;
            var54 = undefined;
            if(!var56) { _fun0003_ip = 6228; continue _fun0003 }
 6177:
            var66 = _closure1_slot0;
            var67 = _closure1_slot2;
            var56 = 68;
            var56 = var67[var56];
            var67 = var66.bind(var5)(var56);
            var66 = var67.createExecutedCommand;
            r101 = var25.defaultUsernameColor;
            r106 = var67;
            r105 = var2;
            r104 = var22;
            r103 = var14;
            r102 = var20;
            var54 = r106[var66](r105, r104, r103, r102, r101, r100);
 6228:
            var1['executedCommand'] = var54;
            var54 = var42.components;
            var54 = var54.length;
            var56 = var54 > var51;
            var54 = undefined;
            if(!var56) { _fun0003_ip = 6339; continue _fun0003 }
 6255:
            var54 = undefined;
            if(!var55) { _fun0003_ip = 6339; continue _fun0003 }
 6260:
            var56 = _closure1_slot1;
            var66 = _closure1_slot2;
            var55 = 69;
            var55 = var66[var55];
            var56 = var56.bind(var5)(var55);
            var55 = {};
            var55['message'] = var2;
            var55['guildId'] = var65;
            var55['interaction'] = var64;
            var55['shouldDisableInteractiveComponents'] = var63;
            var55['shouldShowMedia'] = var62;
            var55['shouldObscureSpoiler'] = var61;
            var55['enabledContentHarmTypeFlags'] = var60;
            var55['shouldAgeVerify'] = var59;
            var55['shouldShowMosaicMediaDescriptions'] = var58;
            var55['shouldAutoPlayGifs'] = var57;
            var55['colors'] = var25;
            var54 = var56.bind(var5)(var55);
 6339:
            var1['components'] = var54;
            var54 = 0;
            if(var53) { _fun0003_ip = 6355; continue _fun0003 }
 6349:
            var54 = var25.feedbackColor;
 6355:
            var1['feedbackColor'] = var54;
            var51 = 0;
            if(var53) { _fun0003_ip = 6371; continue _fun0003 }
 6365:
            var51 = var25.highlightColor;
 6371:
            var1['highlightColor'] = var51;
            var53 = var18 != var52;
            var51 = undefined;
            if(!var53) { _fun0003_ip = 6388; continue _fun0003 }
 6385:
            var51 = var52;
 6388:
            var1['embeds'] = var51;
            if(var50) { _fun0003_ip = 6402; continue _fun0003 }
 6396:
            var50 = new Array(0);
            _fun0003_ip = 6434; continue _fun0003;
 6402:
            var52 = _closure1_slot0;
            var53 = _closure1_slot2;
            var51 = 70;
            var51 = var53[var51];
            var52 = var52.bind(var5)(var51);
            var51 = var52.createGiftCodeEmbed;
            var50 = var51.bind(var52)(var2, var20);
 6434:
            var1['giftCodes'] = var50;
            if(var47) { _fun0003_ip = 6448; continue _fun0003 }
 6442:
            var47 = new Array(0);
            _fun0003_ip = 6481; continue _fun0003;
 6448:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 71;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createCodedLinkEmbeds;
            var47 = var50.bind(var51)(var2, var42, var20);
 6481:
            var1['codedLinks'] = var47;
            var47 = undefined;
            if(!var49) { _fun0003_ip = 6522; continue _fun0003 }
 6491:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 72;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createActivityInstanceEmbed;
            var47 = var49.bind(var50)(var2);
 6522:
            var1['activityInstanceEmbed'] = var47;
            var47 = undefined;
            if(!var48) { _fun0003_ip = 6566; continue _fun0003 }
 6534:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 73;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createActivityInviteEmbed;
            var47 = var49.bind(var50)(var2, var20);
 6566:
            var1['activityInviteEmbed'] = var47;
            var47 = undefined;
            if(!var48) { _fun0003_ip = 6610; continue _fun0003 }
 6578:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 74;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityRichPresenceInviteEmbed;
            var47 = var48.bind(var49)(var2, var22);
 6610:
            var1['activityRichPresenceInviteEmbed'] = var47;
            if(!var40) { _fun0003_ip = 6641; continue _fun0003 }
 6620:
            if(!var44) { _fun0003_ip = 6632; continue _fun0003 }
 6623:
            if(var45) { _fun0003_ip = 6629; continue _fun0003 }
 6626:
            var45 = var46;
 6629:
            var44 = var45;
 6632:
            if(var44) { _fun0003_ip = 6638; continue _fun0003 }
 6635:
            var44 = var39;
 6638:
            var40 = var44;
 6641:
            var1['useAttachmentGridLayout'] = var40;
            var1['useAttachmentUploadPreview'] = var39;
            var1['attachments'] = var38;
            var44 = 1;
            var38 = var44;
            if(!var39) { _fun0003_ip = 6699; continue _fun0003 }
 6667:
            var40 = var2.state;
            var39 = _closure1_slot24;
            var39 = var39.SEND_FAILED;
            var38 = var44;
            if(!(var40 === var39)) { _fun0003_ip = 6699; continue _fun0003 }
 6689:
            var38 = 0.2;
 6699:
            var1['attachmentsOpacity'] = var38;
            var39 = _closure1_slot1;
            var40 = _closure1_slot2;
            var38 = 75;
            var38 = var40[var38];
            var39 = var39.bind(var5)(var38);
            var38 = {};
            var38['message'] = var42;
            var42 = _closure1_slot0;
            var40 = var40[var43];
            var40 = var42.bind(var5)(var40);
            var42 = var40.AnimateStickers;
            var40 = var42.getSetting;
            var40 = var40.bind(var42)();
            var38['animateStickersSetting'] = var40;
            var40 = var2.id;
            var40 = var40 === var41;
            var38['isUserInteracting'] = var40;
            var38 = var39.bind(var5)(var38);
            var1['stickers'] = var38;
            if(!var36) { _fun0003_ip = 6796; continue _fun0003 }
 6793:
            var36 = var37;
 6796:
            var1['communicationDisabled'] = var36;
            var1['threadStarterMessageHeader'] = var33;
            var36 = var18 == var22;
            if(var36) { _fun0003_ip = 6826; continue _fun0003 }
 6813:
            var33 = var22.isForumPost;
            var33 = var33.bind(var22)();
            var36 = !var33;
 6826:
            var33 = !var36;
            if(var36) { _fun0003_ip = 6846; continue _fun0003 }
 6832:
            var37 = var2.id;
            var36 = var2.channel_id;
            var33 = var37 === var36;
 6846:
            var1['isFirstForumPostMessage'] = var33;
            var36 = var18 != var22;
            var33 = undefined;
            if(!var36) { _fun0003_ip = 6892; continue _fun0003 }
 6862:
            var36 = var22.isForumPost;
            var36 = var36.bind(var22)();
            var33 = undefined;
            if(!var36) { _fun0003_ip = 6892; continue _fun0003 }
 6877:
            var33 = undefined;
            if(!var35) { _fun0003_ip = 6892; continue _fun0003 }
 6882:
            var35 = _closure1_slot30;
            var33 = var35.bind(var5)(var2, var22);
 6892:
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
            var35 = 76;
            var35 = var37[var35];
            var35 = var36.bind(var5)(var35);
            var35 = var38.bind(var39)(var35);
            var1['swipeToReplyIconUrl'] = var35;
            var33 = var37[var33];
            var35 = var34.bind(var5)(var33);
            var34 = var35.getAssetUriForEmbed;
            var33 = 77;
            var33 = var37[var33];
            var33 = var36.bind(var5)(var33);
            var33 = var34.bind(var35)(var33);
            var1['swipeToEditIconUrl'] = var33;
            var1['showRemixButton'] = var9;
            var1['remixTitle'] = var32;
            var32 = var25.remixButtonIconColor;
            var1['remixButtonIconColor'] = var32;
            var32 = var25.remixButtonBackgroundColor;
            var1['remixButtonBackgroundColor'] = var32;
            var1['referralTrialOffer'] = var30;
            var1['referralTrialOfferInfo'] = var28;
            if(var27) { _fun0003_ip = 7090; continue _fun0003 }
 7084:
            var27 = new Array(0);
            _fun0003_ip = 7122; continue _fun0003;
 7090:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 78;
            var28 = var32[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.createPostPreviewEmbeds;
            var27 = var28.bind(var30)(var2, var31);
 7122:
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
            var30 = var30.2aXnfX;
            var30 = var31.bind(var32)(var30);
            var1['obscureLearnMoreLabel'] = var30;
            var30 = 79;
            var30 = var28[var30];
            var31 = var27.bind(var5)(var30);
            var30 = var31.createSafetyPolicyNoticeEmbed;
            var30 = var30.bind(var31)(var2);
            var1['safetyPolicyNoticeEmbed'] = var30;
            var1['pollData'] = var29;
            var1['sharedClientTheme'] = var24;
            var24 = 80;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var24 = var29.createSafetySystemNotificationEmbed;
            var24 = var24.bind(var29)(var2);
            var1['safetySystemNotificationEmbed'] = var24;
            var24 = 81;
            var24 = var28[var24];
            var29 = var27.bind(var5)(var24);
            var28 = var29.createCtaButton;
            var27 = var2.id;
            var24 = var2.channel_id;
            var24 = var28.bind(var29)(var27, var24, var25);
            var1['ctaButton'] = var24;
            var24 = undefined;
            if(!var26) { _fun0003_ip = 7316; continue _fun0003 }
 7310:
            var24 = var25.embedBackgroundColor;
 7316:
            var1['audioAttachmentBackgroundColor'] = var24;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var24 = 82;
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
            if(var4) { _fun0003_ip = 7405; continue _fun0003 }
 7400:
            var16 = var22.type;
 7405:
            var4 = _closure1_slot26;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            return var1;
 7428:
            var4 = var2.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 7525; continue _fun0003 }
 7447:
            var4 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 38;
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
            if(var21) { _fun0003_ip = 7513; continue _fun0003 }
 7503:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
 7513:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 7619; continue _fun0003;
 7525:
            var4 = {};
            var16 = _closure1_slot29;
            r106 = undefined;
            r105 = var2;
            r104 = var14;
            r103 = var6;
            r102 = var17;
            r101 = var7;
            var16 = r106[var16](r105, r104, r103, r102, r101, r100);
            var4['threadEmbed'] = var16;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var16 = 38;
            var16 = var18[var16];
            var18 = var17.bind(var5)(var16);
            var17 = var18.createSystemMessageContent;
            var16 = {};
            var16['message'] = var2;
            var16['theme'] = var20;
            var16['reactions'] = var19;
            var16['roleStyle'] = var14;
            r104 = var17.bind(var18)(var16);
            r105 = var4;
            var16 = copyDataProperties(r105, r104);
            var1 = var4;
 7619:
            return var1;
 7621:
            var1 = {};
            var4 = _closure1_slot31;
            var3 = {};
            var3['message'] = var15;
            var3['roleStyle'] = var14;
            var3['isFirst'] = var13;
            var3['isEditing'] = var12;
            var3['canShowImages'] = var11;
            var3['isSystemDM'] = var10;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r105 = var6;
            r104 = var7;
            var7 = copyDataProperties(r105, r104);
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[var7] = var8;
            var3['options'] = var6;
            r104 = var4.bind(var5)(var3);
            r105 = var1;
            var3 = copyDataProperties(r105, r104);
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
    var4 = 83;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();