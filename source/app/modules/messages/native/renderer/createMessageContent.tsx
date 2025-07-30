// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createThreadEmbed(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 795; continue _fun0001 }
 15:
            var3 = var1.hasFlag;
            var2 = _closure1_slot25;
            var2 = var2.HAS_THREAD;
            var2 = var3.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 795; continue _fun0001 }
 45:
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 795; continue _fun0001 }
 54:
            var7 = _closure1_slot15;
            var5 = var7.getMostRecentMessage;
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var10 = 22;
            var3 = var9[var10];
            var8 = undefined;
            var13 = var11.bind(var8)(var3);
            var12 = var13.castMessageIdAsChannelId;
            var3 = var1.id;
            var3 = var12.bind(var13)(var3);
            var7 = var5.bind(var7)(var3);
            var5 = _closure1_slot15;
            var3 = var5.getCount;
            var10 = var9[var10];
            var11 = var11.bind(var8)(var10);
            var10 = var11.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var10.bind(var11)(var1);
            var3 = var3.bind(var5)(var1);
            var5 = _closure1_slot0;
            var1 = 23;
            var1 = var9[var1];
            var9 = var5.bind(var8)(var1);
            var5 = var9.formatMobileMessageCountLabel;
            var1 = var6.id;
            var5 = var5.bind(var9)(var3, var1);
            if(!(var2 != var3)) { _fun0001_ip = 190; continue _fun0001 }
 184:
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0001_ip = 278; continue _fun0001 }
 190:
            var1 = {};
            var3 = var6.name;
            var1['title'] = var3;
            var1['messageCountLabel'] = var5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 24;
            var9 = var12[var3];
            var9 = var11.bind(var8)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var3 = var12[var3];
            var3 = var11.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.HYtNyM;
            var3 = var9.bind(var10)(var3);
            var1['messagePreviewString'] = var3;
            var3 = false;
            var1['archived'] = var3;
            _fun0001_ip = 793; continue _fun0001;
 278:
            var3 = var6.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 300; continue _fun0001 }
 288:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 660; continue _fun0001 }
 300:
            if(!(var2 != var7)) { _fun0001_ip = 569; continue _fun0001 }
 307:
            var3 = var7.type;
            var2 = _closure1_slot23;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 569; continue _fun0001 }
 329:
            var3 = var7.type;
            var2 = _closure1_slot23;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 569; continue _fun0001 }
 351:
            var2 = var7.blocked;
            if(var2) { _fun0001_ip = 459; continue _fun0001 }
 360:
            var2 = var7.ignored;
            if(var2) { _fun0001_ip = 459; continue _fun0001 }
 369:
            var2 = {};
            var3 = var6.name;
            var2['title'] = var3;
            var2['messageCountLabel'] = var5;
            var3 = {};
            var9 = _closure1_slot22;
            var9 = var9.LOADED;
            var3['state'] = var9;
            var10 = _closure1_slot31;
            var9 = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var9['message'] = var7;
            var11 = arg2;
            var9['roleStyle'] = var11;
            var11 = arg5;
            var9['options'] = var11;
            var9 = var10.bind(var8)(var9);
            var3['message'] = var9;
            var2['referencedMessage'] = var3;
            _fun0001_ip = 567; continue _fun0001;
 459:
            var3 = {};
            var9 = var6.name;
            var3['title'] = var9;
            var3['messageCountLabel'] = var5;
            var7 = var7.blocked;
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
            if(var7) { _fun0001_ip = 541; continue _fun0001 }
 528:
            var7 = var9.G7p6v7;
            var7 = var10.bind(var11)(var7);
            _fun0001_ip = 552; continue _fun0001;
 541:
            var9 = var9.XAkOo6;
            var7 = var10.bind(var11)(var9);
 552:
            var3['messagePreviewString'] = var7;
            var7 = false;
            var3['archived'] = var7;
            var2 = var3;
 567:
            _fun0001_ip = 655; continue _fun0001;
 569:
            var3 = {};
            var7 = var6.name;
            var3['title'] = var7;
            var3['messageCountLabel'] = var5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 24;
            var9 = var12[var7];
            var9 = var11.bind(var8)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var8)(var7);
            var7 = var7.t;
            var7 = var7.ZTo4HR;
            var7 = var9.bind(var10)(var7);
            var3['messagePreviewString'] = var7;
            var7 = false;
            var3['archived'] = var7;
            var2 = var3;
 655:
            _fun0001_ip = 790; continue _fun0001;
 660:
            var3 = {};
            var6 = var6.name;
            var3['title'] = var6;
            var3['messageCountLabel'] = var5;
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
 790:
            var1 = var2;
 793:
            return var1;
 795:
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
            var29 = var1.showContentInventoryEntryFallbackEmbed;
            var22 = var7.renderEmbeds;
            var15 = var7.renderReactions;
            var19 = var7.inlineEmbedMedia;
            var17 = var7.inlineAttachmentMedia;
            var80 = var7.constrainedWidth;
            var90 = var7.ignoreMentioned;
            var75 = var7.animateEmoji;
            var40 = var7.animatingStickerMessageId;
            var56 = var7.gifAutoPlay;
            var46 = var7.renderCodedLinks;
            var49 = var7.renderGiftCode;
            var48 = var7.renderActivityInstanceEmbed;
            var47 = var7.renderActivityInviteEmbed;
            var54 = var7.renderComponents;
            var16 = var7.renderThreadEmbeds;
            var21 = var7.renderReplies;
            var35 = var7.renderCommunicationDisabled;
            var43 = var7.renderAttachments;
            var55 = var7.renderExecutedCommands;
            var1 = var7.renderPolls;
            var34 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var33 = var7.ignoreEmbedDescriptionCache;
            var37 = var7.forceHideSimpleEmbedContent;
            var60 = var7.shouldObscureSpoiler;
            var62 = var7.shouldDisableInteractiveComponents;
            var23 = var7.useAlternateEmbedColors;
            var36 = var7.shouldFilterKeywords;
            var18 = null;
            if(!(var18 == var20)) { _fun0003_ip = 274; continue _fun0003 }
 261:
            var3 = _closure1_slot16;
            var20 = var3.theme;
 274:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 31;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var25 = var4.bind(var5)(var20, var23);
            var4 = 32;
            var4 = var9[var4];
            var24 = var8.bind(var5)(var4);
            var23 = var24.getCurrentConfig;
            var8 = {};
            var4 = 'createMessageContent';
            var8['location'] = var4;
            var4 = {};
            var9 = false;
            var4['autoTrackExposure'] = var9;
            var4 = var23.bind(var24)(var8, var4);
            var4 = var4.enabled;
            var8 = true;
            var61 = var8 === var11;
            var27 = var61;
            if(!var61) { _fun0003_ip = 368; continue _fun0003 }
 365:
            var27 = var22;
 368:
            if(!var27) { _fun0003_ip = 390; continue _fun0003 }
 371:
            var23 = var2.type;
            var22 = _closure1_slot23;
            var22 = var22.CUSTOM_GIFT;
            var27 = var23 !== var22;
 390:
            var31 = var61;
            if(!var61) { _fun0003_ip = 399; continue _fun0003 }
 396:
            var31 = var19;
 399:
            var39 = var61;
            if(!var39) { _fun0003_ip = 408; continue _fun0003 }
 405:
            var39 = var17;
 408:
            var22 = _closure1_slot18;
            var19 = var22.getChannel;
            var17 = var2.getChannelId;
            var17 = var17.bind(var2)();
            var22 = var19.bind(var22)(var17);
            var23 = _closure1_slot18;
            var19 = var23.getChannel;
            var24 = _closure1_slot1;
            var26 = _closure1_slot2;
            var17 = 22;
            var17 = var26[var17];
            var26 = var24.bind(var5)(var17);
            var24 = var26.castMessageIdAsChannelId;
            var17 = var2.id;
            var17 = var24.bind(var26)(var17);
            var17 = var19.bind(var23)(var17);
            var23 = var18 == var22;
            var19 = undefined;
            if(var23) { _fun0003_ip = 501; continue _fun0003 }
 491:
            var23 = var22.getGuildId;
            var19 = var23.bind(var22)();
 501:
            var23 = var2.author;
            var26 = var23.id;
            var24 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 33;
            var23 = var28[var23];
            var24 = var24.bind(var5)(var23);
            var23 = var24.getHasEnhancedRoleColors;
            var74 = var23.bind(var24)(var19, var26);
            var64 = var19;
            if(!(var18 == var93)) { _fun0003_ip = 582; continue _fun0003 }
 551:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 34;
            var19 = var24[var19];
            var23 = var23.bind(var5)(var19);
            var19 = var23.maybeCreateSingleForwardForMessage;
            var93 = var19.bind(var23)(var2);
 582:
            var41 = var2;
            if(!(var18 != var93)) { _fun0003_ip = 600; continue _fun0003 }
 589:
            var19 = var93.messageSnapshot;
            var41 = var19.message;
 600:
            var19 = new Array(0);
            if(!var15) { _fun0003_ip = 650; continue _fun0003 }
 607:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var15 = 35;
            var15 = var24[var15];
            var23 = var23.bind(var5)(var15);
            var15 = {};
            var24 = var2.reactions;
            var15['reactions'] = var24;
            var15['animateEmoji'] = var75;
            var19 = var23.bind(var5)(var15);
 650:
            var24 = var2.type;
            var15 = _closure1_slot23;
            var23 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var24 === var23)) { _fun0003_ip = 721; continue _fun0003 }
 671:
            var26 = _closure1_slot12;
            var24 = var26.getMessageByReference;
            var23 = var2.messageReference;
            var24 = var24.bind(var26)(var23);
            var28 = var24.state;
            var23 = _closure1_slot13;
            var26 = var23.LOADED;
            var23 = null;
            if(!(var28 === var26)) { _fun0003_ip = 718; continue _fun0003 }
 713:
            var23 = var24.message;
 718:
            var15 = var23;
 721:
            if(!(var18 == var15)) { _fun0003_ip = 7391; continue _fun0003 }
 728:
            var24 = _closure1_slot1;
            var26 = _closure1_slot2;
            var23 = 36;
            var23 = var26[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.bind(var5)(var2);
            if(var23) { _fun0003_ip = 7198; continue _fun0003 }
 759:
            var67 = !var13;
            if(var67) { _fun0003_ip = 768; continue _fun0003 }
 765:
            var67 = var52;
 768:
            var71 = var2.author;
            var24 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 38;
            var23 = var26[var23];
            var26 = var24.bind(var5)(var23);
            var24 = var26.isMessageNewerThanImprovedMarkdownEpoch;
            var28 = var2.editedTimestamp;
            if(!(var18 == var28)) { _fun0003_ip = 816; continue _fun0003 }
 810:
            var28 = var2.timestamp;
 816:
            var23 = var28.valueOf;
            var23 = var23.bind(var28)();
            var30 = var24.bind(var26)(var23);
            var23 = var41.content;
            if(!(var18 != var23)) { _fun0003_ip = 852; continue _fun0003 }
 839:
            var24 = var41.content;
            var23 = '';
            if(!(var23 === var24)) { _fun0003_ip = 865; continue _fun0003 }
 852:
            var23 = {};
            var23['content'] = var5;
            var23['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 955; continue _fun0003;
 865:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var24 = 39;
            var24 = var28[var24];
            var28 = var26.bind(var5)(var24);
            var26 = var28.parseMessageMarkup;
            if(var37) { _fun0003_ip = 906; continue _fun0003 }
 894:
            var24 = var27;
            if(!var24) { _fun0003_ip = 903; continue _fun0003 }
 900:
            var24 = var31;
 903:
            var37 = var24;
 906:
            var24 = var18 != var17;
            if(!var24) { _fun0003_ip = 924; continue _fun0003 }
 913:
            var38 = var2.isFirstMessageInForumPost;
            var24 = var38.bind(var2)(var17);
 924:
            r105 = var28;
            r104 = var2;
            r103 = var41;
            r102 = var37;
            r101 = var6;
            r100 = var24;
            var100 = var30;
            var99 = var30;
            var98 = var36;
            var23 = r105[var26](r104, r103, r102, r101, r100, var100, var99, var98, var97);
 955:
            var24 = var23.content;
            var36 = var23.hasSpoilerEmbeds;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 40;
            var23 = var28[var23];
            var37 = var26.bind(var5)(var23);
            var23 = var37.getEnabledHarmTypesForMessage;
            var59 = var23.bind(var37)(var2);
            var23 = 41;
            var23 = var28[var23];
            var26 = var26.bind(var5)(var23);
            var23 = var26.shouldAgeVerifyForExplicitMedia;
            var58 = var23.bind(var26)();
            var28 = undefined;
            if(!var27) { _fun0003_ip = 1151; continue _fun0003 }
 1027:
            var26 = _closure1_slot1;
            var37 = _closure1_slot2;
            var23 = 42;
            var23 = var37[var23];
            var26 = var26.bind(var5)(var23);
            var23 = {};
            var37 = var41.embeds;
            var23['embeds'] = var37;
            var37 = var2.channel_id;
            var23['channelId'] = var37;
            var23['gifAutoPlay'] = var56;
            var23['hasSpoilerEmbeds'] = var36;
            var23['ignoreEmbedDescriptionCache'] = var33;
            var23['shouldInlineEmbedMedia'] = var31;
            var23['colors'] = var25;
            var23['showListsAndHeaders'] = var30;
            var23['showMaskedLinks'] = var30;
            var30 = var25.embedBackgroundColor;
            var23['themedBackgroundColor'] = var30;
            var23['enabledContentHarmTypeFlags'] = var59;
            var23['shouldAgeVerify'] = var58;
            var30 = var2.author;
            var30 = var30.bot;
            var23['authorIsBot'] = var30;
            var23['showContentInventoryEntryFallbackEmbed'] = var29;
            var28 = var26.bind(var5)(var23);
 1151:
            var26 = _closure1_slot1;
            var29 = _closure1_slot2;
            var23 = 43;
            var23 = var29[var23];
            var26 = var26.bind(var5)(var23);
            var23 = {};
            var23['message'] = var2;
            var23['isSystemDM'] = var10;
            var23['channel'] = var22;
            var23['colors'] = var25;
            var23 = var26.bind(var5)(var23);
            var89 = var23.tagText;
            var88 = var23.tagVerified;
            var87 = var23.tagTextColor;
            var86 = var23.tagBackgroundColor;
            var85 = var23.tagType;
            var84 = var23.tagIconUrl;
            var83 = var23.opTagText;
            var82 = var23.opTagTextColor;
            var81 = var23.opTagBackgroundColor;
            var29 = _closure1_slot21;
            var26 = var29.getUploaderFileForMessageId;
            var23 = var2.id;
            var26 = var26.bind(var29)(var23);
            var38 = var18 != var26;
            var29 = var2.state;
            var23 = _closure1_slot24;
            var23 = var23.SEND_FAILED;
            var23 = var29 !== var23;
            if(var23) { _fun0003_ip = 1305; continue _fun0003 }
 1295:
            var29 = var2.isCommandType;
            var23 = var29.bind(var2)();
 1305:
            var29 = var28;
            if(var23) { _fun0003_ip = 1376; continue _fun0003 }
 1311:
            var23 = var28;
            if(!(var18 == var28)) { _fun0003_ip = 1322; continue _fun0003 }
 1318:
            var23 = new Array(0);
 1322:
            var30 = var23.push;
            var31 = _closure1_slot1;
            var33 = _closure1_slot2;
            var28 = 44;
            var28 = var33[var28];
            var31 = var31.bind(var5)(var28);
            var28 = {};
            var28['uploaderFile'] = var26;
            var28['useAttachmentUploadPreview'] = var38;
            var28['colors'] = var25;
            var28 = var31.bind(var5)(var28);
            var28 = var30.bind(var23)(var28);
            var29 = var23;
 1376:
            var30 = _closure1_slot8;
            var28 = var30.getMessage;
            var23 = var2.id;
            var28 = var28.bind(var30)(var23);
            var51 = var29;
            if(!(var18 != var28)) { _fun0003_ip = 1475; continue _fun0003 }
 1403:
            var23 = var29;
            if(!(var18 == var29)) { _fun0003_ip = 1414; continue _fun0003 }
 1410:
            var23 = new Array(0);
 1414:
            var33 = var28.errorMessage;
            var29 = var23.push;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 44;
            var28 = var31[var28];
            var31 = var30.bind(var5)(var28);
            var30 = var31.createAutomodBlockedMessageEmbed;
            var28 = {};
            var28['errorMessage'] = var33;
            var28['colors'] = var25;
            var28 = var30.bind(var31)(var28);
            var28 = var29.bind(var23)(var28);
            var51 = var23;
 1475:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var31 = 45;
            var23 = var29[var31];
            var33 = var28.bind(var5)(var23);
            var30 = var33.getUserAuthor;
            var23 = var2.author;
            var23 = var30.bind(var33)(var23, var22);
            var44 = var23.guildMemberAvatar;
            var33 = var23.guildMemberAvatarDecoration;
            var30 = var23.iconRoleId;
            var23 = 46;
            var23 = var29[var23];
            var29 = var28.bind(var5)(var23);
            var28 = var29.ensureAvatarSource;
            var23 = var2.isInteractionPlaceholder;
            var23 = var23.bind(var2)();
            if(!var23) { _fun0003_ip = 1603; continue _fun0003 }
 1564:
            var23 = var2.author;
            var23 = var23.avatar;
            if(!(var18 == var23)) { _fun0003_ip = 1603; continue _fun0003 }
 1580:
            var36 = var2.application;
            var37 = var18 == var36;
            var23 = undefined;
            if(var37) { _fun0003_ip = 1599; continue _fun0003 }
 1594:
            var23 = var36.icon;
 1599:
            if(!(var18 == var23)) { _fun0003_ip = 1678; continue _fun0003 }
 1603:
            if(!(var18 != var44)) { _fun0003_ip = 1611; continue _fun0003 }
 1607:
            if(!(var18 == var64)) { _fun0003_ip = 1624; continue _fun0003 }
 1611:
            var23 = var71.getAvatarSource;
            var23 = var23.bind(var71)(var5);
            _fun0003_ip = 1676; continue _fun0003;
 1624:
            var37 = _closure1_slot1;
            var42 = _closure1_slot2;
            var36 = 47;
            var36 = var42[var36];
            var42 = var37.bind(var5)(var36);
            var37 = var42.getGuildMemberAvatarSource;
            var36 = {};
            var45 = var71.id;
            var36['userId'] = var45;
            var36['guildMemberAvatar'] = var44;
            var36['guildId'] = var64;
            var23 = var37.bind(var42)(var36, var71);
 1676:
            _fun0003_ip = 1755; continue _fun0003;
 1678:
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
            var23 = var37.bind(var42)(var36);
 1755:
            var78 = var28.bind(var29)(var23);
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 47;
            var23 = var29[var23];
            var29 = var28.bind(var5)(var23);
            var28 = var29.getAvatarDecorationURL;
            var23 = {};
            if(!(var18 == var33)) { _fun0003_ip = 1798; continue _fun0003 }
 1792:
            var33 = var71.avatarDecoration;
 1798:
            var23['avatarDecoration'] = var33;
            var42 = _closure1_slot0;
            var44 = _closure1_slot2;
            var33 = 48;
            var33 = var44[var33];
            var37 = var42.bind(var5)(var33);
            var36 = var37.getDecorationSizeForAvatarSize;
            var33 = 49;
            var33 = var44[var33];
            var33 = var42.bind(var5)(var33);
            var33 = var33.AvatarSizes;
            var33 = var33.NORMAL;
            var33 = var36.bind(var37)(var33);
            var23['size'] = var33;
            var77 = var28.bind(var29)(var23);
            var23 = var18 != var30;
            var70 = undefined;
            if(!var23) { _fun0003_ip = 1934; continue _fun0003 }
 1876:
            var23 = var18 != var64;
            var70 = undefined;
            if(!var23) { _fun0003_ip = 1934; continue _fun0003 }
 1885:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 50;
            var23 = var29[var23];
            var29 = var28.bind(var5)(var23);
            var28 = var29.getRoleIcon;
            var23 = {};
            var23['guildId'] = var64;
            var23['roleId'] = var30;
            var30 = 18;
            var23['size'] = var30;
            var70 = var28.bind(var29)(var23);
 1934:
            var28 = var2.hasFlag;
            var23 = _closure1_slot25;
            var23 = var23.SOURCE_MESSAGE_DELETED;
            var23 = var28.bind(var2)(var23);
            if(!var23) { _fun0003_ip = 2013; continue _fun0003 }
 1958:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 24;
            var28 = var33[var23];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var33[var23];
            var23 = var30.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.JOtgS0;
            var24 = var28.bind(var29)(var23);
 2013:
            var28 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var31];
            var28 = var28.bind(var5)(var23);
            var23 = var28.getMessageAuthor;
            var23 = var23.bind(var28)(var2);
            var79 = var23.nick;
            var73 = var23.colorString;
            var76 = var23.colorStrings;
            var28 = var2.type;
            var23 = _closure1_slot23;
            var23 = var23.INTERACTION_PREMIUM_UPSELL;
            if(!(var28 === var23)) { _fun0003_ip = 2141; continue _fun0003 }
 2078:
            var28 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 24;
            var29 = var33[var23];
            var29 = var28.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.formatToPlainString;
            var23 = var33[var23];
            var23 = var28.bind(var5)(var23);
            var23 = var23.t;
            var28 = var23.u4A+xM;
            var23 = {};
            var23['appName'] = var79;
            var24 = var29.bind(var30)(var28, var23);
 2141:
            var28 = var2.type;
            var23 = _closure1_slot23;
            var23 = var23.REPLY;
            var94 = undefined;
            if(!(var28 === var23)) { _fun0003_ip = 3603; continue _fun0003 }
 2165:
            var94 = undefined;
            if(!var21) { _fun0003_ip = 3603; continue _fun0003 }
 2173:
            var28 = _closure1_slot12;
            var23 = var28.getMessageByReference;
            var21 = var2.messageReference;
            var21 = var23.bind(var28)(var21);
            var28 = var21.state;
            var23 = _closure1_slot13;
            var23 = var23.LOADED;
            if(!(var23 !== var28)) { _fun0003_ip = 2451; continue _fun0003 }
 2216:
            var23 = _closure1_slot13;
            var23 = var23.NOT_LOADED;
            if(!(var23 !== var28)) { _fun0003_ip = 2368; continue _fun0003 }
 2233:
            var23 = _closure1_slot13;
            var23 = var23.DELETED;
            if(!(var23 !== var28)) { _fun0003_ip = 2285; continue _fun0003 }
 2247:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 52;
            var23 = var29[var23];
            var28 = var28.bind(var5)(var23);
            var23 = var28.assertNever;
            var23 = var23.bind(var28)(var21);
            var94 = undefined;
            _fun0003_ip = 3603; continue _fun0003;
 2285:
            var23 = {};
            var28 = _closure1_slot22;
            var28 = var28.SYSTEM;
            var23['state'] = var28;
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var28 = 24;
            var29 = var36[var28];
            var29 = var33.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var36[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.mE3KJC;
            var28 = var29.bind(var30)(var28);
            var23['content'] = var28;
            var94 = var23;
            _fun0003_ip = 3603; continue _fun0003;
 2368:
            var23 = {};
            var28 = _closure1_slot22;
            var28 = var28.SYSTEM;
            var23['state'] = var28;
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var28 = 24;
            var29 = var36[var28];
            var29 = var33.bind(var5)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var36[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.1i+hMj;
            var28 = var29.bind(var30)(var28);
            var23['content'] = var28;
            var94 = var23;
            _fun0003_ip = 3603; continue _fun0003;
 2451:
            var21 = var21.message;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = 34;
            var23 = var29[var23];
            var28 = var28.bind(var5)(var23);
            var23 = var28.maybeCreateSingleForwardForMessage;
            var29 = var23.bind(var28)(var21);
            var28 = _closure1_slot20;
            var23 = var28.isBlockedForMessage;
            var23 = var23.bind(var28)(var21);
            if(var23) { _fun0003_ip = 3525; continue _fun0003 }
 2508:
            var28 = _closure1_slot20;
            var23 = var28.isIgnoredForMessage;
            var23 = var23.bind(var28)(var21);
            if(var23) { _fun0003_ip = 3445; continue _fun0003 }
 2529:
            var28 = _closure1_slot31;
            var23 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var23['message'] = var21;
            var23['messageForward'] = var29;
            var23['roleStyle'] = var14;
            var30 = {};
            r104 = var30;
            r103 = var7;
            var33 = copyDataProperties(r104, r103);
            var33 = 'renderReplies';
            var30[var33] = var9;
            var23['options'] = var30;
            var28 = var28.bind(var5)(var23);
            if(!(var18 != var28)) { _fun0003_ip = 3362; continue _fun0003 }
 2602:
            var23 = 'username';
            var23 = var23 in var28;
            if(!var23) { _fun0003_ip = 2785; continue _fun0003 }
 2616:
            var30 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var31];
            var30 = var30.bind(var5)(var23);
            var23 = var30.getMessageAuthor;
            var23 = var23.bind(var30)(var21);
            var30 = var23.nick;
            var31 = var23.colorString;
            if(!(var18 == var30)) { _fun0003_ip = 2671; continue _fun0003 }
 2660:
            var23 = var21.author;
            var30 = var23.username;
 2671:
            var33 = var18 != var30;
            var23 = undefined;
            if(!var33) { _fun0003_ip = 2683; continue _fun0003 }
 2680:
            var23 = var30;
 2683:
            var28['username'] = var23;
            if(var67) { _fun0003_ip = 2725; continue _fun0003 }
 2692:
            var30 = _closure1_slot3;
            var33 = var18 != var31;
            var23 = undefined;
            if(!var33) { _fun0003_ip = 2708; continue _fun0003 }
 2705:
            var23 = var31;
 2708:
            var23 = var30.bind(var5)(var23);
            if(!(var18 == var23)) { _fun0003_ip = 2723; continue _fun0003 }
 2717:
            var23 = var28.colorString;
 2723:
            _fun0003_ip = 2731; continue _fun0003;
 2725:
            var23 = var28.colorString;
 2731:
            var28['colorString'] = var23;
            var30 = _closure1_slot1;
            var31 = _closure1_slot2;
            var23 = 51;
            var23 = var31[var23];
            var23 = var30.bind(var5)(var23);
            var23 = var23.bind(var5)(var2, var21);
            if(!var23) { _fun0003_ip = 2785; continue _fun0003 }
 2766:
            var30 = var28.username;
            var23 = '@';
            var23 = var23 + var30;
            var28['username'] = var23;
 2785:
            var30 = var18 == var29;
            var23 = undefined;
            if(var30) { _fun0003_ip = 2805; continue _fun0003 }
 2794:
            var29 = var29.messageSnapshot;
            var23 = var29.message;
 2805:
            var31 = var21;
            if(!(var18 != var23)) { _fun0003_ip = 2815; continue _fun0003 }
 2812:
            var31 = var23;
 2815:
            var23 = 'stickers';
            var23 = var23 in var31;
            if(var23) { _fun0003_ip = 2832; continue _fun0003 }
 2826:
            var23 = new Array(0);
            _fun0003_ip = 2863; continue _fun0003;
 2832:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 28;
            var29 = var33[var29];
            var30 = var30.bind(var5)(var29);
            var29 = var30.getMessageStickers;
            var23 = var29.bind(var30)(var31);
 2863:
            var23 = var23.length;
            var29 = 0;
            if(!(!(var23 > var29))) { _fun0003_ip = 3238; continue _fun0003 }
 2877:
            var30 = _closure1_slot0;
            var23 = _closure1_slot2;
            var33 = 29;
            var23 = var23[var33];
            var37 = var30.bind(var5)(var23);
            var36 = var37.hasFlag;
            var30 = var31.flags;
            var23 = _closure1_slot25;
            var23 = var23.IS_VOICE_MESSAGE;
            var23 = var36.bind(var37)(var30, var23);
            if(var23) { _fun0003_ip = 3181; continue _fun0003 }
 2930:
            var30 = var31.type;
            var23 = _closure1_slot23;
            var23 = var23.POLL_RESULT;
            if(!(var30 !== var23)) { _fun0003_ip = 3148; continue _fun0003 }
 2952:
            var30 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var33];
            var36 = var30.bind(var5)(var23);
            var33 = var36.hasFlag;
            var30 = var31.flags;
            var23 = _closure1_slot25;
            var23 = var23.IS_COMPONENTS_V2;
            var23 = var33.bind(var36)(var30, var23);
            if(var23) { _fun0003_ip = 3091; continue _fun0003 }
 2999:
            var23 = var31.embeds;
            var23 = var23.length;
            if(!(!(var23 > var29))) { _fun0003_ip = 3034; continue _fun0003 }
 3014:
            var23 = var31.attachments;
            var23 = var23.length;
            var29 = var23 > var29;
            var23 = null;
            if(!var29) { _fun0003_ip = 3089; continue _fun0003 }
 3034:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = 24;
            var30 = var37[var29];
            var30 = var36.bind(var5)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var37[var29];
            var29 = var36.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.JAKsMz;
            var23 = var30.bind(var33)(var29);
 3089:
            _fun0003_ip = 3146; continue _fun0003;
 3091:
            var36 = _closure1_slot0;
            var37 = _closure1_slot2;
            var29 = 24;
            var30 = var37[var29];
            var30 = var36.bind(var5)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var29 = var37[var29];
            var29 = var36.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.Xxm5i4;
            var23 = var30.bind(var33)(var29);
 3146:
            _fun0003_ip = 3179; continue _fun0003;
 3148:
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 30;
            var29 = var33[var29];
            var30 = var30.bind(var5)(var29);
            var29 = var30.getPollResultsReplyPreviewMobile;
            var23 = var29.bind(var30)(var31);
 3179:
            _fun0003_ip = 3236; continue _fun0003;
 3181:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 24;
            var30 = var36[var29];
            var30 = var33.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var36[var29];
            var29 = var33.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.6bhHra;
            var23 = var30.bind(var31)(var29);
 3236:
            _fun0003_ip = 3293; continue _fun0003;
 3238:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var29 = 24;
            var30 = var36[var29];
            var30 = var33.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var36[var29];
            var29 = var33.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.7K5LmZ;
            var23 = var30.bind(var31)(var29);
 3293:
            var29 = var21.type;
            var21 = _closure1_slot23;
            var21 = var21.POLL_RESULT;
            if(!(var29 === var21)) { _fun0003_ip = 3318; continue _fun0003 }
 3312:
            var28['content'] = var23;
 3318:
            var21 = {};
            var29 = _closure1_slot22;
            var29 = var29.LOADED;
            var21['state'] = var29;
            var21['message'] = var28;
            var94 = var21;
            if(!(var18 != var23)) { _fun0003_ip = 3603; continue _fun0003 }
 3348:
            var21['systemContent'] = var23;
            var94 = var21;
            _fun0003_ip = 3603; continue _fun0003;
 3362:
            var21 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var21['state'] = var23;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 24;
            var28 = var31[var23];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var31[var23];
            var23 = var30.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.1i+hMj;
            var23 = var28.bind(var29)(var23);
            var21['content'] = var23;
            var94 = var21;
            _fun0003_ip = 3603; continue _fun0003;
 3445:
            var21 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var21['state'] = var23;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 24;
            var28 = var31[var23];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var31[var23];
            var23 = var30.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.G7p6v7;
            var23 = var28.bind(var29)(var23);
            var21['content'] = var23;
            var94 = var21;
            _fun0003_ip = 3603; continue _fun0003;
 3525:
            var21 = {};
            var23 = _closure1_slot22;
            var23 = var23.SYSTEM;
            var21['state'] = var23;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var23 = 24;
            var28 = var31[var23];
            var28 = var30.bind(var5)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var23 = var31[var23];
            var23 = var30.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.XAkOo6;
            var23 = var28.bind(var29)(var23);
            var21['content'] = var23;
            var94 = var21;
 3603:
            var91 = undefined;
            if(!var16) { _fun0003_ip = 3633; continue _fun0003 }
 3608:
            var16 = _closure1_slot29;
            r105 = undefined;
            r104 = var2;
            r103 = var14;
            r102 = var6;
            r101 = var17;
            r100 = var7;
            var91 = r105[var16](r104, r103, r102, r101, r100, var100);
 3633:
            var21 = _closure1_slot9;
            var16 = var21.getInteraction;
            var63 = var16.bind(var21)(var2);
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 53;
            var16 = var23[var16];
            var21 = var21.bind(var5)(var16);
            var16 = var21.createInteractionStatus;
            var53 = var16.bind(var21)(var2, var63);
            var21 = var18 != var64;
            var16 = null;
            if(!var21) { _fun0003_ip = 3710; continue _fun0003 }
 3689:
            var28 = _closure1_slot19;
            var23 = var28.getMember;
            var21 = var71.id;
            var16 = var23.bind(var28)(var64, var21);
 3710:
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 54;
            var21 = var28[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.isMemberCommunicationDisabled;
            var36 = var21.bind(var23)(var16);
            var21 = _closure1_slot4;
            var30 = var21.useReducedMotion;
            var21 = _closure1_slot4;
            var66 = var21.alwaysShowLinkDecorations;
            var21 = var18 == var22;
            var29 = var16;
            var16 = undefined;
            if(var21) { _fun0003_ip = 3779; continue _fun0003 }
 3773:
            var16 = var22.parent_id;
 3779:
            var28 = var22;
            if(!(var18 != var16)) { _fun0003_ip = 3829; continue _fun0003 }
 3786:
            var28 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 3829; continue _fun0003 }
 3793:
            var16 = var22.isThread;
            var16 = var16.bind(var22)();
            var28 = var22;
            if(!var16) { _fun0003_ip = 3829; continue _fun0003 }
 3809:
            var23 = _closure1_slot18;
            var21 = var23.getChannel;
            var16 = var22.parent_id;
            var28 = var21.bind(var23)(var16);
 3829:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 55;
            var16 = var23[var16];
            var23 = var21.bind(var5)(var16);
            var21 = var23.getVisibleConnectionsRole;
            var16 = {};
            var16['guildMember'] = var29;
            var16['channel'] = var28;
            var16['onlyChannelConnectionRoles'] = var8;
            var72 = var21.bind(var23)(var16);
            var16 = var41.attachments;
            var16 = var16.length;
            var50 = 0;
            var44 = var50 !== var16;
            var16 = var41.embeds;
            var16 = var16.length;
            var45 = var50 !== var16;
            var16 = var38;
            if(!var38) { _fun0003_ip = 3929; continue _fun0003 }
 3914:
            var21 = var2.attachments;
            var21 = var21.length;
            var16 = var50 === var21;
 3929:
            if(!var16) { _fun0003_ip = 3936; continue _fun0003 }
 3932:
            var16 = var18 != var26;
 3936:
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var42 = 56;
            var21 = var21[var42];
            var21 = var23.bind(var5)(var21);
            var23 = var21.ViewImageDescriptions;
            var21 = var23.getSetting;
            var57 = var21.bind(var23)();
            var37 = new Array(0);
            if(var16) { _fun0003_ip = 4104; continue _fun0003 }
 3982:
            if(!var43) { _fun0003_ip = 4165; continue _fun0003 }
 3988:
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = 58;
            var21 = var28[var21];
            var23 = var23.bind(var5)(var21);
            var21 = {};
            var28 = var41.attachments;
            var21['attachments'] = var28;
            var31 = _closure1_slot21;
            var29 = var31.getUploadAttachments;
            var28 = var2.nonce;
            var28 = var29.bind(var31)(var28);
            var21['uploadAttachments'] = var28;
            var21['shouldInlineAttachmentMedia'] = var39;
            var21['gifAutoPlay'] = var56;
            var21['viewImageDescriptions'] = var57;
            var21['useReducedMotion'] = var30;
            var21['shouldObscureSpoiler'] = var60;
            var28 = var25.embedBackgroundColor;
            var21['themedBackgroundColor'] = var28;
            var21['enabledContentHarmTypeFlags'] = var59;
            var21['shouldAgeVerify'] = var58;
            var21['colors'] = var25;
            var37 = var23.bind(var5)(var21);
            _fun0003_ip = 4165; continue _fun0003;
 4104:
            var23 = _closure1_slot1;
            var28 = _closure1_slot2;
            var21 = 57;
            var21 = var28[var21];
            var23 = var23.bind(var5)(var21);
            var21 = {};
            var21['uploaderFile'] = var26;
            var28 = var2.state;
            var26 = _closure1_slot24;
            var26 = var26.SEND_FAILED;
            var26 = var28 === var26;
            var21['isFailedMessage'] = var26;
            var21['shouldInlineAttachmentMedia'] = var39;
            var37 = var23.bind(var5)(var21);
 4165:
            if(!var16) { _fun0003_ip = 4187; continue _fun0003 }
 4168:
            var21 = var2.state;
            var16 = _closure1_slot24;
            var16 = var16.SEND_FAILED;
            if(!(var21 === var16)) { _fun0003_ip = 4227; continue _fun0003 }
 4187:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 59;
            var16 = var23[var16];
            var23 = var21.bind(var5)(var16);
            var21 = var23.calendarFormat;
            var16 = var2.timestamp;
            var69 = var21.bind(var23)(var16, var8);
            _fun0003_ip = 4282; continue _fun0003;
 4227:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var16 = 24;
            var21 = var28[var16];
            var21 = var26.bind(var5)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var16 = var28[var16];
            var16 = var26.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.yXY+5O;
            var69 = var21.bind(var23)(var16);
 4282:
            var21 = _closure1_slot17;
            var16 = var21.getId;
            var33 = var16.bind(var21)();
            var16 = var2.isUnsupported;
            var65 = var24;
            if(!var16) { _fun0003_ip = 4365; continue _fun0003 }
 4308:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var16 = 24;
            var21 = var28[var16];
            var21 = var26.bind(var5)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var16 = var28[var16];
            var16 = var26.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.sWi5ER;
            var65 = var21.bind(var23)(var16);
 4365:
            var16 = var2.isPoll;
            var16 = var16.bind(var2)();
            var16 = !var16;
            if(var16) { _fun0003_ip = 4393; continue _fun0003 }
 4381:
            var21 = !var6;
            if(!var21) { _fun0003_ip = 4390; continue _fun0003 }
 4387:
            var21 = var1;
 4390:
            var16 = var21;
 4393:
            if(var16) { _fun0003_ip = 4414; continue _fun0003 }
 4396:
            var21 = var18 != var24;
            if(!var21) { _fun0003_ip = 4411; continue _fun0003 }
 4403:
            var23 = '';
            var21 = var23 !== var24;
 4411:
            var16 = var21;
 4414:
            if(var16) { _fun0003_ip = 4448; continue _fun0003 }
 4417:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 30;
            var16 = var23[var16];
            var21 = var21.bind(var5)(var16);
            var16 = var21.getPollReplyPreview;
            var65 = var16.bind(var21)(var2);
 4448:
            var24 = undefined;
            if(!var1) { _fun0003_ip = 4492; continue _fun0003 }
 4453:
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 60;
            var1 = var21[var1];
            var16 = var16.bind(var5)(var1);
            var1 = {};
            var1['theme'] = var20;
            var1['animateEmoji'] = var75;
            var24 = var16.bind(var5)(var2, var5, var1);
 4492:
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var95 = 61;
            var1 = var1[var95];
            var23 = var16.bind(var5)(var1);
            var21 = var23.shouldDisplayGuildTag;
            var16 = var71.id;
            var26 = var18 != var64;
            var1 = undefined;
            if(!var26) { _fun0003_ip = 4535; continue _fun0003 }
 4532:
            var1 = var64;
 4535:
            var1 = var21.bind(var23)(var16, var1);
            var23 = undefined;
            var21 = undefined;
            var16 = undefined;
            if(!var1) { _fun0003_ip = 4668; continue _fun0003 }
 4550:
            var26 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var95];
            var28 = var26.bind(var5)(var1);
            var26 = var28.getUserPrimaryGuild;
            var1 = var71.primaryGuild;
            var29 = var26.bind(var28)(var1);
            var28 = var29.guildId;
            var26 = var29.tag;
            var1 = var29.guildId;
            var31 = var18 != var1;
            var1 = undefined;
            if(!var31) { _fun0003_ip = 4659; continue _fun0003 }
 4608:
            var92 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var95];
            var96 = var92.bind(var5)(var31);
            var95 = var96.getGuildTagBadgeUrl;
            var92 = var29.guildId;
            var31 = var29.badge;
            var29 = _closure1_slot27;
            var29 = var29.SIZE_12;
            var1 = var95.bind(var96)(var92, var31, var29);
 4659:
            var16 = var1;
            var23 = var28;
            var21 = var26;
 4668:
            var26 = _closure1_slot0;
            var1 = _closure1_slot2;
            var96 = 29;
            var1 = var1[var96];
            var29 = var26.bind(var5)(var1);
            var28 = var29.hasFlag;
            var1 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 4704; continue _fun0003 }
 4701:
            var1 = var41;
 4704:
            var26 = var1.flags;
            var1 = _closure1_slot25;
            var1 = var1.IS_VOICE_MESSAGE;
            var26 = var28.bind(var29)(var26, var1);
            var1 = {};
            var1['currentUserId'] = var33;
            var1['message'] = var2;
            var1['theme'] = var20;
            var1['referralSenderMobileXPEnabled'] = var4;
            var95 = var1.currentUserId;
            var92 = var1.message;
            var31 = var1.theme;
            var4 = var1.referralSenderMobileXPEnabled;
            var29 = var92.referralTrialOfferId;
            var28 = var92.type;
            var1 = _closure1_slot23;
            var1 = var1.PREMIUM_REFERRAL;
            if(!(var28 === var1)) { _fun0003_ip = 4963; continue _fun0003 }
 4797:
            if(!(var18 != var29)) { _fun0003_ip = 4963; continue _fun0003 }
 4804:
            var28 = _closure1_slot11;
            var1 = var28.getRelevantUserTrialOffer;
            var28 = var1.bind(var28)(var29);
            var1 = var18 != var28;
            if(!var1) { _fun0003_ip = 4845; continue _fun0003 }
 4826:
            var97 = var18 == var28;
            var29 = undefined;
            if(var97) { _fun0003_ip = 4841; continue _fun0003 }
 4835:
            var29 = var28.user_id;
 4841:
            var1 = var18 != var29;
 4845:
            if(!var1) { _fun0003_ip = 4858; continue _fun0003 }
 4848:
            var28 = var28.user_id;
            var1 = var28 === var95;
 4858:
            if(var1) { _fun0003_ip = 4913; continue _fun0003 }
 4861:
            if(!var4) { _fun0003_ip = 4867; continue _fun0003 }
 4864:
            if(!var1) { _fun0003_ip = 4913; continue _fun0003 }
 4867:
            var1 = {};
            var1['referralTrialOfferDataUpdated'] = var5;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var4 = 21;
            var4 = var29[var4];
            var28 = var28.bind(var5)(var4);
            var4 = var28.createReferralTrialEmbed;
            var4 = var4.bind(var28)(var92, var31);
            var1['referralTrialOfferData'] = var4;
            _fun0003_ip = 4961; continue _fun0003;
 4913:
            var4 = {};
            var29 = _closure1_slot0;
            var97 = _closure1_slot2;
            var28 = 21;
            var28 = var97[var28];
            var29 = var29.bind(var5)(var28);
            var28 = var29.createReferralTrialEmbedRedeemable;
            var28 = var28.bind(var29)(var92, var31, var95);
            var4['referralTrialOfferDataUpdated'] = var28;
            var4['referralTrialOfferData'] = var5;
            var1 = var4;
 4961:
            _fun0003_ip = 4967; continue _fun0003;
 4963:
            var1 = _closure1_slot28;
 4967:
            var28 = var1.referralTrialOfferDataUpdated;
            var29 = var1.referralTrialOfferData;
            var92 = _closure1_slot5;
            var4 = var92.getApplication;
            var95 = var2.applicationId;
            var97 = var18 != var95;
            var31 = '';
            var1 = var31;
            if(!var97) { _fun0003_ip = 5011; continue _fun0003 }
 5008:
            var1 = var95;
 5011:
            var1 = var4.bind(var92)(var1);
            var92 = var18 != var1;
            if(!var92) { _fun0003_ip = 5067; continue _fun0003 }
 5023:
            var95 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var96];
            var97 = var95.bind(var5)(var4);
            var96 = var97.hasFlag;
            var95 = var2.flags;
            var4 = _closure1_slot25;
            var4 = var4.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var92 = var96.bind(var97)(var95, var4);
 5067:
            var4 = undefined;
            if(!var92) { _fun0003_ip = 5077; continue _fun0003 }
 5072:
            var4 = var1.id;
 5077:
            var1 = {};
            var92 = var2.id;
            var1['id'] = var92;
            var92 = var2.channel_id;
            var1['channelId'] = var92;
            var95 = var18 != var64;
            var92 = undefined;
            if(!var95) { _fun0003_ip = 5109; continue _fun0003 }
 5106:
            var92 = var64;
 5109:
            var1['guildId'] = var92;
            var92 = var2;
            if(!(var18 != var41)) { _fun0003_ip = 5123; continue _fun0003 }
 5120:
            var92 = var41;
 5123:
            var92 = var92.flags;
            var1['flags'] = var92;
            var92 = var2.type;
            var1['type'] = var92;
            var92 = var2.nonce;
            if(!(var18 != var92)) { _fun0003_ip = 5168; continue _fun0003 }
 5151:
            var92 = var2.nonce;
            var95 = 'string';
            var92 = typeof var92;
            if(!(var95 === var92)) { _fun0003_ip = 5176; continue _fun0003 }
 5168:
            var92 = var2.nonce;
            _fun0003_ip = 5195; continue _fun0003;
 5176:
            var95 = global;
            var96 = var95.String;
            var95 = var2.nonce;
            var92 = var96.bind(var5)(var95);
 5195:
            var1['nonce'] = var92;
            var92 = var2.state;
            var1['state'] = var92;
            var1['reactions'] = var19;
            var92 = undefined;
            if(var52) { _fun0003_ip = 5222; continue _fun0003 }
 5219:
            var92 = var94;
 5222:
            var1['referencedMessage'] = var92;
            var1['threadEmbed'] = var91;
            var92 = var18 != var93;
            var91 = undefined;
            if(!var92) { _fun0003_ip = 5253; continue _fun0003 }
 5241:
            var92 = var93.getForwardInfo;
            var91 = var92.bind(var93)();
 5253:
            var1['forwardInfo'] = var91;
            var90 = !var90;
            if(!var90) { _fun0003_ip = 5272; continue _fun0003 }
 5266:
            var90 = var2.mentioned;
 5272:
            var1['mentioned'] = var90;
            var90 = var2.isEdited;
            var91 = var90.bind(var2)();
            var90 = var31;
            if(!var91) { _fun0003_ip = 5354; continue _fun0003 }
 5293:
            var90 = var31;
            if(var52) { _fun0003_ip = 5354; continue _fun0003 }
 5299:
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
            var91 = var91.C8sXIC;
            var90 = var92.bind(var93)(var91);
 5354:
            var1['edited'] = var90;
            var90 = var25.editedColor;
            var1['editedColor'] = var90;
            var90 = var2.isUnsupported;
            if(var90) { _fun0003_ip = 5387; continue _fun0003 }
 5379:
            var90 = var25.textColor;
            _fun0003_ip = 5393; continue _fun0003;
 5387:
            var90 = var25.unsupportedColor;
 5393:
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
            var1['animateEmoji'] = var75;
            if(!var67) { _fun0003_ip = 5477; continue _fun0003 }
 5472:
            var79 = var71.username;
 5477:
            var80 = var18 != var79;
            var75 = undefined;
            if(!var80) { _fun0003_ip = 5489; continue _fun0003 }
 5486:
            var75 = var79;
 5489:
            var1['username'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 5504; continue _fun0003 }
 5498:
            var75 = var78.uri;
 5504:
            var1['avatarURL'] = var75;
            var75 = undefined;
            if(var67) { _fun0003_ip = 5517; continue _fun0003 }
 5514:
            var75 = var77;
 5517:
            var1['avatarDecorationURL'] = var75;
            var71 = var71.id;
            var1['authorId'] = var71;
            if(var67) { _fun0003_ip = 5576; continue _fun0003 }
 5535:
            var71 = 'username';
            if(!(var71 === var14)) { _fun0003_ip = 5576; continue _fun0003 }
 5543:
            var75 = _closure1_slot3;
            var77 = var18 != var73;
            var71 = undefined;
            if(!var77) { _fun0003_ip = 5559; continue _fun0003 }
 5556:
            var71 = var73;
 5559:
            var71 = var75.bind(var5)(var71);
            if(!(var18 == var71)) { _fun0003_ip = 5574; continue _fun0003 }
 5568:
            var71 = var25.defaultUsernameColor;
 5574:
            _fun0003_ip = 5582; continue _fun0003;
 5576:
            var71 = var25.defaultUsernameColor;
 5582:
            var1['usernameColor'] = var71;
            var71 = null;
            if(var67) { _fun0003_ip = 5628; continue _fun0003 }
 5592:
            var77 = _closure1_slot3;
            var78 = var18 != var73;
            var75 = undefined;
            if(!var78) { _fun0003_ip = 5608; continue _fun0003 }
 5605:
            var75 = var73;
 5608:
            var77 = var77.bind(var5)(var75);
            var78 = var18 != var77;
            var75 = null;
            if(!var78) { _fun0003_ip = 5625; continue _fun0003 }
 5622:
            var75 = var77;
 5625:
            var71 = var75;
 5628:
            var1['roleColor'] = var71;
            var71 = null;
            if(!var74) { _fun0003_ip = 5674; continue _fun0003 }
 5638:
            var71 = null;
            if(var67) { _fun0003_ip = 5674; continue _fun0003 }
 5643:
            var75 = _closure1_slot0;
            var77 = _closure1_slot2;
            var74 = 62;
            var74 = var77[var74];
            var75 = var75.bind(var5)(var74);
            var74 = var75.processColorStrings;
            var71 = var74.bind(var75)(var76);
 5674:
            var1['roleColors'] = var71;
            var71 = 'dot';
            var71 = var71 === var14;
            if(!var71) { _fun0003_ip = 5694; continue _fun0003 }
 5690:
            var71 = var18 != var73;
 5694:
            var1['shouldShowRoleDot'] = var71;
            var71 = 'username';
            var71 = var71 === var14;
            if(!var71) { _fun0003_ip = 5714; continue _fun0003 }
 5710:
            var71 = var18 != var73;
 5714:
            var1['shouldShowRoleOnName'] = var71;
            var1['showLinkDecorations'] = var66;
            if(var67) { _fun0003_ip = 5760; continue _fun0003 }
 5727:
            var71 = _closure1_slot3;
            var74 = var18 != var73;
            var66 = undefined;
            if(!var74) { _fun0003_ip = 5743; continue _fun0003 }
 5740:
            var66 = var73;
 5743:
            var66 = var71.bind(var5)(var66);
            if(!(var18 == var66)) { _fun0003_ip = 5758; continue _fun0003 }
 5752:
            var66 = var25.defaultUsernameColor;
 5758:
            _fun0003_ip = 5766; continue _fun0003;
 5760:
            var66 = var25.defaultUsernameColor;
 5766:
            var1['colorString'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5779; continue _fun0003 }
 5776:
            var66 = var70;
 5779:
            var1['roleIcon'] = var66;
            var70 = var18 != var72;
            var66 = undefined;
            if(!var70) { _fun0003_ip = 5824; continue _fun0003 }
 5793:
            var71 = _closure1_slot0;
            var73 = _closure1_slot2;
            var70 = 63;
            var70 = var73[var70];
            var71 = var71.bind(var5)(var70);
            var70 = var71.createConnectionsRoleTag;
            var66 = var70.bind(var71)(var72);
 5824:
            var1['connectionsRoleTag'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5839; continue _fun0003 }
 5836:
            var66 = var69;
 5839:
            var1['timestamp'] = var66;
            var66 = undefined;
            if(var67) { _fun0003_ip = 5855; continue _fun0003 }
 5849:
            var66 = var25.timestampColor;
 5855:
            var1['timestampColor'] = var66;
            var1['content'] = var65;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var52;
            var65 = undefined;
            if(!(var5 !== var68)) { _fun0003_ip = 5913; continue _fun0003 }
 5880:
            var67 = _closure1_slot0;
            var69 = _closure1_slot2;
            var66 = 64;
            var66 = var69[var66];
            var67 = var67.bind(var5)(var66);
            var66 = var67.createSurveyIndication;
            var65 = var66.bind(var67)(var2, var20, var68);
 5913:
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
            if(!var55) { _fun0003_ip = 6019; continue _fun0003 }
 5968:
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
 6019:
            var1['executedCommand'] = var53;
            var53 = var41.components;
            var53 = var53.length;
            var55 = var53 > var50;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 6130; continue _fun0003 }
 6046:
            var53 = undefined;
            if(!var54) { _fun0003_ip = 6130; continue _fun0003 }
 6051:
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
 6130:
            var1['components'] = var53;
            var53 = 0;
            if(var52) { _fun0003_ip = 6146; continue _fun0003 }
 6140:
            var53 = var25.feedbackColor;
 6146:
            var1['feedbackColor'] = var53;
            var50 = 0;
            if(var52) { _fun0003_ip = 6162; continue _fun0003 }
 6156:
            var50 = var25.highlightColor;
 6162:
            var1['highlightColor'] = var50;
            var52 = var18 != var51;
            var50 = undefined;
            if(!var52) { _fun0003_ip = 6179; continue _fun0003 }
 6176:
            var50 = var51;
 6179:
            var1['embeds'] = var50;
            if(var49) { _fun0003_ip = 6193; continue _fun0003 }
 6187:
            var49 = new Array(0);
            _fun0003_ip = 6225; continue _fun0003;
 6193:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 68;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createGiftCodeEmbed;
            var49 = var50.bind(var51)(var2, var20);
 6225:
            var1['giftCodes'] = var49;
            if(var46) { _fun0003_ip = 6239; continue _fun0003 }
 6233:
            var46 = new Array(0);
            _fun0003_ip = 6272; continue _fun0003;
 6239:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 69;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createCodedLinkEmbeds;
            var46 = var49.bind(var50)(var2, var41, var20);
 6272:
            var1['codedLinks'] = var46;
            var46 = undefined;
            if(!var48) { _fun0003_ip = 6313; continue _fun0003 }
 6282:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 70;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityInstanceEmbed;
            var46 = var48.bind(var49)(var2);
 6313:
            var1['activityInstanceEmbed'] = var46;
            var46 = undefined;
            if(!var47) { _fun0003_ip = 6357; continue _fun0003 }
 6325:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 71;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createActivityInviteEmbed;
            var46 = var48.bind(var49)(var2, var20);
 6357:
            var1['activityInviteEmbed'] = var46;
            var46 = undefined;
            if(!var47) { _fun0003_ip = 6401; continue _fun0003 }
 6369:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 72;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityRichPresenceInviteEmbed;
            var46 = var47.bind(var48)(var2, var22);
 6401:
            var1['activityRichPresenceInviteEmbed'] = var46;
            if(!var39) { _fun0003_ip = 6432; continue _fun0003 }
 6411:
            if(!var43) { _fun0003_ip = 6423; continue _fun0003 }
 6414:
            if(var44) { _fun0003_ip = 6420; continue _fun0003 }
 6417:
            var44 = var45;
 6420:
            var43 = var44;
 6423:
            if(var43) { _fun0003_ip = 6429; continue _fun0003 }
 6426:
            var43 = var38;
 6429:
            var39 = var43;
 6432:
            var1['useAttachmentGridLayout'] = var39;
            var1['useAttachmentUploadPreview'] = var38;
            var1['attachments'] = var37;
            var43 = 1;
            var37 = var43;
            if(!var38) { _fun0003_ip = 6488; continue _fun0003 }
 6456:
            var39 = var2.state;
            var38 = _closure1_slot24;
            var38 = var38.SEND_FAILED;
            var37 = var43;
            if(!(var39 === var38)) { _fun0003_ip = 6488; continue _fun0003 }
 6478:
            var37 = 0.2;
 6488:
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
            if(!var35) { _fun0003_ip = 6583; continue _fun0003 }
 6580:
            var35 = var36;
 6583:
            var1['communicationDisabled'] = var35;
            var1['threadStarterMessageHeader'] = var32;
            var35 = var18 == var22;
            if(var35) { _fun0003_ip = 6613; continue _fun0003 }
 6600:
            var32 = var22.isForumPost;
            var32 = var32.bind(var22)();
            var35 = !var32;
 6613:
            var32 = !var35;
            if(var35) { _fun0003_ip = 6633; continue _fun0003 }
 6619:
            var36 = var2.id;
            var35 = var2.channel_id;
            var32 = var36 === var35;
 6633:
            var1['isFirstForumPostMessage'] = var32;
            var35 = var18 != var22;
            var32 = undefined;
            if(!var35) { _fun0003_ip = 6677; continue _fun0003 }
 6647:
            var35 = var22.isForumPost;
            var35 = var35.bind(var22)();
            var32 = undefined;
            if(!var35) { _fun0003_ip = 6677; continue _fun0003 }
 6662:
            var32 = undefined;
            if(!var34) { _fun0003_ip = 6677; continue _fun0003 }
 6667:
            var34 = _closure1_slot30;
            var32 = var34.bind(var5)(var2, var22);
 6677:
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
            var32 = 25;
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
            var1['remixTitle'] = var31;
            var31 = var25.remixButtonIconColor;
            var1['remixButtonIconColor'] = var31;
            var31 = var25.remixButtonBackgroundColor;
            var1['remixButtonBackgroundColor'] = var31;
            var1['referralTrialOffer'] = var29;
            var1['referralTrialOfferInfo'] = var28;
            if(var27) { _fun0003_ip = 6871; continue _fun0003 }
 6865:
            var27 = new Array(0);
            _fun0003_ip = 6903; continue _fun0003;
 6871:
            var29 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 76;
            var28 = var31[var28];
            var29 = var29.bind(var5)(var28);
            var28 = var29.createPostPreviewEmbeds;
            var27 = var28.bind(var29)(var2, var30);
 6903:
            var1['postPreviewEmbeds'] = var27;
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var29 = 24;
            var30 = var28[var29];
            var30 = var27.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var28[var29];
            var29 = var27.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.2aXnfX;
            var29 = var30.bind(var31)(var29);
            var1['obscureLearnMoreLabel'] = var29;
            var29 = 77;
            var29 = var28[var29];
            var30 = var27.bind(var5)(var29);
            var29 = var30.createSafetyPolicyNoticeEmbed;
            var29 = var29.bind(var30)(var2);
            var1['safetyPolicyNoticeEmbed'] = var29;
            var1['pollData'] = var24;
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
            if(!var26) { _fun0003_ip = 7088; continue _fun0003 }
 7082:
            var24 = var25.embedBackgroundColor;
 7088:
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
            if(var4) { _fun0003_ip = 7177; continue _fun0003 }
 7172:
            var16 = var22.type;
 7177:
            var4 = _closure1_slot26;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            return var1;
 7198:
            var4 = var2.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 7295; continue _fun0003 }
 7217:
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
            if(var21) { _fun0003_ip = 7283; continue _fun0003 }
 7273:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
 7283:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 7389; continue _fun0003;
 7295:
            var4 = {};
            var16 = _closure1_slot29;
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
            var16 = 37;
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
 7389:
            return var1;
 7391:
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