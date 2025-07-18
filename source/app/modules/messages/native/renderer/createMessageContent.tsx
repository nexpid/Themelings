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
            var95 = var1.messageForward;
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
            var35 = var1.threadStarterMessageHeader;
            var71 = var1.pushFeedbackType;
            var55 = var1.renderContentOnly;
            var32 = var1.showContentInventoryEntryFallbackEmbed;
            var19 = var7.renderEmbeds;
            var16 = var7.renderReactions;
            var4 = var7.renderShortcuts;
            var17 = var7.inlineEmbedMedia;
            var15 = var7.inlineAttachmentMedia;
            var83 = var7.constrainedWidth;
            var24 = var7.ignoreMentioned;
            var78 = var7.animateEmoji;
            var43 = var7.animatingStickerMessageId;
            var59 = var7.gifAutoPlay;
            var49 = var7.renderCodedLinks;
            var52 = var7.renderGiftCode;
            var51 = var7.renderActivityInstanceEmbed;
            var50 = var7.renderActivityInviteEmbed;
            var57 = var7.renderComponents;
            var21 = var7.renderThreadEmbeds;
            var25 = var7.renderReplies;
            var38 = var7.renderCommunicationDisabled;
            var46 = var7.renderAttachments;
            var58 = var7.renderExecutedCommands;
            var1 = var7.renderPolls;
            var37 = var7.renderForumPostActions;
            var20 = var7.forcedTheme;
            var36 = var7.ignoreEmbedDescriptionCache;
            var40 = var7.forceHideSimpleEmbedContent;
            var63 = var7.shouldObscureSpoiler;
            var65 = var7.shouldDisableInteractiveComponents;
            var23 = var7.useAlternateEmbedColors;
            var39 = var7.shouldFilterKeywords;
            var18 = null;
            if(!(var18 == var20)) { _fun0003_ip = 279; continue _fun0003 }
 267:
            var3 = _closure1_slot16;
            var20 = var3.theme;
 279:
            var9 = _closure1_slot1;
            var22 = _closure1_slot2;
            var8 = 31;
            var8 = var22[var8];
            var8 = var9.bind(var5)(var8);
            var26 = var8.bind(var5)(var20, var23);
            var8 = 32;
            var8 = var22[var8];
            var27 = var9.bind(var5)(var8);
            var23 = var27.getCurrentConfig;
            var22 = {};
            var8 = 'createMessageContent';
            var22['location'] = var8;
            var8 = {};
            var9 = false;
            var8['autoTrackExposure'] = var9;
            var8 = var23.bind(var27)(var22, var8);
            var23 = var8.enabled;
            var8 = true;
            var64 = var8 === var11;
            var27 = var64;
            if(!var64) { _fun0003_ip = 373; continue _fun0003 }
 370:
            var27 = var19;
 373:
            if(!var27) { _fun0003_ip = 395; continue _fun0003 }
 376:
            var22 = var2.type;
            var19 = _closure1_slot23;
            var19 = var19.CUSTOM_GIFT;
            var27 = var22 !== var19;
 395:
            var34 = var64;
            if(!var64) { _fun0003_ip = 404; continue _fun0003 }
 401:
            var34 = var17;
 404:
            var42 = var64;
            if(!var42) { _fun0003_ip = 413; continue _fun0003 }
 410:
            var42 = var15;
 413:
            var19 = _closure1_slot18;
            var17 = var19.getChannel;
            var15 = var2.getChannelId;
            var15 = var15.bind(var2)();
            var22 = var17.bind(var19)(var15);
            var19 = _closure1_slot18;
            var17 = var19.getChannel;
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var15 = 22;
            var15 = var29[var15];
            var29 = var28.bind(var5)(var15);
            var28 = var29.castMessageIdAsChannelId;
            var15 = var2.id;
            var15 = var28.bind(var29)(var15);
            var17 = var17.bind(var19)(var15);
            var19 = var18 == var22;
            var15 = undefined;
            if(var19) { _fun0003_ip = 506; continue _fun0003 }
 496:
            var19 = var22.getGuildId;
            var15 = var19.bind(var22)();
 506:
            var19 = var2.author;
            var29 = var19.id;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var19 = 33;
            var19 = var30[var19];
            var28 = var28.bind(var5)(var19);
            var19 = var28.getHasEnhancedRoleColors;
            var77 = var19.bind(var28)(var15, var29);
            var67 = var15;
            if(!(var18 == var95)) { _fun0003_ip = 587; continue _fun0003 }
 556:
            var19 = _closure1_slot0;
            var28 = _closure1_slot2;
            var15 = 34;
            var15 = var28[var15];
            var19 = var19.bind(var5)(var15);
            var15 = var19.maybeCreateSingleForwardForMessage;
            var95 = var15.bind(var19)(var2);
 587:
            var44 = var2;
            if(!(var18 != var95)) { _fun0003_ip = 605; continue _fun0003 }
 594:
            var15 = var95.messageSnapshot;
            var44 = var15.message;
 605:
            var19 = new Array(0);
            if(!var16) { _fun0003_ip = 655; continue _fun0003 }
 612:
            var28 = _closure1_slot1;
            var29 = _closure1_slot2;
            var15 = 35;
            var15 = var29[var15];
            var28 = var28.bind(var5)(var15);
            var15 = {};
            var29 = var2.reactions;
            var15['reactions'] = var29;
            var15['animateEmoji'] = var78;
            var19 = var28.bind(var5)(var15);
 655:
            var29 = var2.type;
            var15 = _closure1_slot23;
            var28 = var15.THREAD_STARTER_MESSAGE;
            var15 = null;
            if(!(var29 === var28)) { _fun0003_ip = 726; continue _fun0003 }
 676:
            var30 = _closure1_slot12;
            var29 = var30.getMessageByReference;
            var28 = var2.messageReference;
            var29 = var29.bind(var30)(var28);
            var31 = var29.state;
            var28 = _closure1_slot13;
            var30 = var28.LOADED;
            var28 = null;
            if(!(var31 === var30)) { _fun0003_ip = 723; continue _fun0003 }
 718:
            var28 = var29.message;
 723:
            var15 = var28;
 726:
            if(!(var18 == var15)) { _fun0003_ip = 7710; continue _fun0003 }
 733:
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 36;
            var28 = var30[var28];
            var28 = var29.bind(var5)(var28);
            var28 = var28.bind(var5)(var2);
            if(var28) { _fun0003_ip = 7519; continue _fun0003 }
 764:
            var70 = !var13;
            if(var70) { _fun0003_ip = 773; continue _fun0003 }
 770:
            var70 = var55;
 773:
            var76 = var2.author;
            var29 = _closure1_slot0;
            var30 = _closure1_slot2;
            var28 = 38;
            var28 = var30[var28];
            var30 = var29.bind(var5)(var28);
            var29 = var30.isMessageNewerThanImprovedMarkdownEpoch;
            var31 = var2.editedTimestamp;
            if(!(var18 == var31)) { _fun0003_ip = 821; continue _fun0003 }
 815:
            var31 = var2.timestamp;
 821:
            var28 = var31.valueOf;
            var28 = var28.bind(var31)();
            var33 = var29.bind(var30)(var28);
            var28 = var44.content;
            if(!(var18 != var28)) { _fun0003_ip = 857; continue _fun0003 }
 844:
            var29 = var44.content;
            var28 = '';
            if(!(var28 === var29)) { _fun0003_ip = 870; continue _fun0003 }
 857:
            var28 = {};
            var28['content'] = var5;
            var28['hasSpoilerEmbeds'] = var9;
            _fun0003_ip = 960; continue _fun0003;
 870:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var29 = 39;
            var29 = var31[var29];
            var31 = var30.bind(var5)(var29);
            var30 = var31.parseMessageMarkup;
            if(var40) { _fun0003_ip = 911; continue _fun0003 }
 899:
            var29 = var27;
            if(!var29) { _fun0003_ip = 908; continue _fun0003 }
 905:
            var29 = var34;
 908:
            var40 = var29;
 911:
            var29 = var18 != var17;
            if(!var29) { _fun0003_ip = 929; continue _fun0003 }
 918:
            var41 = var2.isFirstMessageInForumPost;
            var29 = var41.bind(var2)(var17);
 929:
            r107 = var31;
            r106 = var2;
            r105 = var44;
            r104 = var40;
            r103 = var6;
            r102 = var29;
            r101 = var33;
            r100 = var33;
            var100 = var39;
            var28 = r107[var30](r106, r105, r104, r103, r102, r101, r100, var100, var99);
 960:
            var29 = var28.content;
            var39 = var28.hasSpoilerEmbeds;
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var28 = 40;
            var28 = var31[var28];
            var40 = var30.bind(var5)(var28);
            var28 = var40.getEnabledHarmTypesForMessage;
            var62 = var28.bind(var40)(var2);
            var28 = 41;
            var28 = var31[var28];
            var30 = var30.bind(var5)(var28);
            var28 = var30.shouldAgeVerifyForExplicitMedia;
            var61 = var28.bind(var30)();
            var31 = undefined;
            if(!var27) { _fun0003_ip = 1156; continue _fun0003 }
 1032:
            var30 = _closure1_slot1;
            var40 = _closure1_slot2;
            var28 = 42;
            var28 = var40[var28];
            var30 = var30.bind(var5)(var28);
            var28 = {};
            var40 = var44.embeds;
            var28['embeds'] = var40;
            var40 = var2.channel_id;
            var28['channelId'] = var40;
            var28['gifAutoPlay'] = var59;
            var28['hasSpoilerEmbeds'] = var39;
            var28['ignoreEmbedDescriptionCache'] = var36;
            var28['shouldInlineEmbedMedia'] = var34;
            var28['colors'] = var26;
            var28['showListsAndHeaders'] = var33;
            var28['showMaskedLinks'] = var33;
            var33 = var26.embedBackgroundColor;
            var28['themedBackgroundColor'] = var33;
            var28['enabledContentHarmTypeFlags'] = var62;
            var28['shouldAgeVerify'] = var61;
            var33 = var2.author;
            var33 = var33.bot;
            var28['authorIsBot'] = var33;
            var28['showContentInventoryEntryFallbackEmbed'] = var32;
            var31 = var30.bind(var5)(var28);
 1156:
            var30 = _closure1_slot1;
            var32 = _closure1_slot2;
            var28 = 43;
            var28 = var32[var28];
            var30 = var30.bind(var5)(var28);
            var28 = {};
            var28['message'] = var2;
            var28['isSystemDM'] = var10;
            var28['channel'] = var22;
            var28['colors'] = var26;
            var28 = var30.bind(var5)(var28);
            var92 = var28.tagText;
            var91 = var28.tagVerified;
            var90 = var28.tagTextColor;
            var89 = var28.tagBackgroundColor;
            var88 = var28.tagType;
            var87 = var28.tagIconUrl;
            var86 = var28.opTagText;
            var85 = var28.opTagTextColor;
            var84 = var28.opTagBackgroundColor;
            var32 = _closure1_slot21;
            var30 = var32.getUploaderFileForMessageId;
            var28 = var2.id;
            var30 = var30.bind(var32)(var28);
            var41 = var18 != var30;
            var32 = var2.state;
            var28 = _closure1_slot24;
            var28 = var28.SEND_FAILED;
            var28 = var32 !== var28;
            if(var28) { _fun0003_ip = 1310; continue _fun0003 }
 1300:
            var32 = var2.isCommandType;
            var28 = var32.bind(var2)();
 1310:
            var32 = var31;
            if(var28) { _fun0003_ip = 1381; continue _fun0003 }
 1316:
            var28 = var31;
            if(!(var18 == var31)) { _fun0003_ip = 1327; continue _fun0003 }
 1323:
            var28 = new Array(0);
 1327:
            var33 = var28.push;
            var34 = _closure1_slot1;
            var36 = _closure1_slot2;
            var31 = 44;
            var31 = var36[var31];
            var34 = var34.bind(var5)(var31);
            var31 = {};
            var31['uploaderFile'] = var30;
            var31['useAttachmentUploadPreview'] = var41;
            var31['colors'] = var26;
            var31 = var34.bind(var5)(var31);
            var31 = var33.bind(var28)(var31);
            var32 = var28;
 1381:
            var33 = _closure1_slot8;
            var31 = var33.getMessage;
            var28 = var2.id;
            var31 = var31.bind(var33)(var28);
            var54 = var32;
            if(!(var18 != var31)) { _fun0003_ip = 1480; continue _fun0003 }
 1408:
            var28 = var32;
            if(!(var18 == var32)) { _fun0003_ip = 1419; continue _fun0003 }
 1415:
            var28 = new Array(0);
 1419:
            var36 = var31.errorMessage;
            var32 = var28.push;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var31 = 44;
            var31 = var34[var31];
            var34 = var33.bind(var5)(var31);
            var33 = var34.createAutomodBlockedMessageEmbed;
            var31 = {};
            var31['errorMessage'] = var36;
            var31['colors'] = var26;
            var31 = var33.bind(var34)(var31);
            var31 = var32.bind(var28)(var31);
            var54 = var28;
 1480:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var34 = 45;
            var28 = var32[var34];
            var36 = var31.bind(var5)(var28);
            var33 = var36.getUserAuthor;
            var28 = var2.author;
            var28 = var33.bind(var36)(var28, var22);
            var47 = var28.guildMemberAvatar;
            var36 = var28.guildMemberAvatarDecoration;
            var33 = var28.iconRoleId;
            var28 = 46;
            var28 = var32[var28];
            var32 = var31.bind(var5)(var28);
            var31 = var32.ensureAvatarSource;
            var28 = var2.isInteractionPlaceholder;
            var28 = var28.bind(var2)();
            if(!var28) { _fun0003_ip = 1608; continue _fun0003 }
 1569:
            var28 = var2.author;
            var28 = var28.avatar;
            if(!(var18 == var28)) { _fun0003_ip = 1608; continue _fun0003 }
 1585:
            var39 = var2.application;
            var40 = var18 == var39;
            var28 = undefined;
            if(var40) { _fun0003_ip = 1604; continue _fun0003 }
 1599:
            var28 = var39.icon;
 1604:
            if(!(var18 == var28)) { _fun0003_ip = 1683; continue _fun0003 }
 1608:
            if(!(var18 != var47)) { _fun0003_ip = 1616; continue _fun0003 }
 1612:
            if(!(var18 == var67)) { _fun0003_ip = 1629; continue _fun0003 }
 1616:
            var28 = var76.getAvatarSource;
            var28 = var28.bind(var76)(var5);
            _fun0003_ip = 1681; continue _fun0003;
 1629:
            var40 = _closure1_slot1;
            var45 = _closure1_slot2;
            var39 = 47;
            var39 = var45[var39];
            var45 = var40.bind(var5)(var39);
            var40 = var45.getGuildMemberAvatarSource;
            var39 = {};
            var48 = var76.id;
            var39['userId'] = var48;
            var39['guildMemberAvatar'] = var47;
            var39['guildId'] = var67;
            var28 = var40.bind(var45)(var39, var76);
 1681:
            _fun0003_ip = 1760; continue _fun0003;
 1683:
            var40 = _closure1_slot1;
            var45 = _closure1_slot2;
            var39 = 47;
            var39 = var45[var39];
            var45 = var40.bind(var5)(var39);
            var40 = var45.getApplicationIconSource;
            var39 = {};
            var47 = var2.application;
            var47 = var47.id;
            var39['id'] = var47;
            var47 = var2.application;
            var47 = var47.icon;
            var39['icon'] = var47;
            var47 = var2.application;
            var47 = var47.bot;
            var39['bot'] = var47;
            var28 = var40.bind(var45)(var39);
 1760:
            var81 = var31.bind(var32)(var28);
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 47;
            var28 = var32[var28];
            var32 = var31.bind(var5)(var28);
            var31 = var32.getAvatarDecorationURL;
            var28 = {};
            if(!(var18 == var36)) { _fun0003_ip = 1803; continue _fun0003 }
 1797:
            var36 = var76.avatarDecoration;
 1803:
            var28['avatarDecoration'] = var36;
            var45 = _closure1_slot0;
            var47 = _closure1_slot2;
            var36 = 48;
            var36 = var47[var36];
            var40 = var45.bind(var5)(var36);
            var39 = var40.getDecorationSizeForAvatarSize;
            var36 = 49;
            var36 = var47[var36];
            var36 = var45.bind(var5)(var36);
            var36 = var36.AvatarSizes;
            var36 = var36.NORMAL;
            var36 = var39.bind(var40)(var36);
            var28['size'] = var36;
            var80 = var31.bind(var32)(var28);
            var28 = var18 != var33;
            var73 = undefined;
            if(!var28) { _fun0003_ip = 1939; continue _fun0003 }
 1881:
            var28 = var18 != var67;
            var73 = undefined;
            if(!var28) { _fun0003_ip = 1939; continue _fun0003 }
 1890:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 50;
            var28 = var32[var28];
            var32 = var31.bind(var5)(var28);
            var31 = var32.getRoleIcon;
            var28 = {};
            var28['guildId'] = var67;
            var28['roleId'] = var33;
            var33 = 18;
            var28['size'] = var33;
            var73 = var31.bind(var32)(var28);
 1939:
            var31 = var2.hasFlag;
            var28 = _closure1_slot25;
            var28 = var28.SOURCE_MESSAGE_DELETED;
            var28 = var31.bind(var2)(var28);
            if(!var28) { _fun0003_ip = 2018; continue _fun0003 }
 1963:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var28 = 24;
            var31 = var36[var28];
            var31 = var33.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var28 = var36[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.JOtgS0;
            var29 = var31.bind(var32)(var28);
 2018:
            var31 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var34];
            var31 = var31.bind(var5)(var28);
            var28 = var31.getMessageAuthor;
            var28 = var28.bind(var31)(var2);
            var82 = var28.nick;
            var74 = var28.colorString;
            var79 = var28.colorStrings;
            var31 = var2.type;
            var28 = _closure1_slot23;
            var28 = var28.INTERACTION_PREMIUM_UPSELL;
            if(!(var31 === var28)) { _fun0003_ip = 2146; continue _fun0003 }
 2083:
            var31 = _closure1_slot0;
            var36 = _closure1_slot2;
            var28 = 24;
            var32 = var36[var28];
            var32 = var31.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.formatToPlainString;
            var28 = var36[var28];
            var28 = var31.bind(var5)(var28);
            var28 = var28.t;
            var31 = var28.u4A+xM;
            var28 = {};
            var28['appName'] = var82;
            var29 = var32.bind(var33)(var31, var28);
 2146:
            var31 = var2.type;
            var28 = _closure1_slot23;
            var28 = var28.REPLY;
            var96 = undefined;
            if(!(var31 === var28)) { _fun0003_ip = 3596; continue _fun0003 }
 2170:
            var96 = undefined;
            if(!var25) { _fun0003_ip = 3596; continue _fun0003 }
 2178:
            var31 = _closure1_slot12;
            var28 = var31.getMessageByReference;
            var25 = var2.messageReference;
            var25 = var28.bind(var31)(var25);
            var31 = var25.state;
            var28 = _closure1_slot13;
            var28 = var28.LOADED;
            if(!(var28 !== var31)) { _fun0003_ip = 2456; continue _fun0003 }
 2221:
            var28 = _closure1_slot13;
            var28 = var28.NOT_LOADED;
            if(!(var28 !== var31)) { _fun0003_ip = 2373; continue _fun0003 }
 2238:
            var28 = _closure1_slot13;
            var28 = var28.DELETED;
            if(!(var28 !== var31)) { _fun0003_ip = 2290; continue _fun0003 }
 2252:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 52;
            var28 = var32[var28];
            var31 = var31.bind(var5)(var28);
            var28 = var31.assertNever;
            var28 = var28.bind(var31)(var25);
            var96 = undefined;
            _fun0003_ip = 3596; continue _fun0003;
 2290:
            var28 = {};
            var31 = _closure1_slot22;
            var31 = var31.SYSTEM;
            var28['state'] = var31;
            var36 = _closure1_slot0;
            var39 = _closure1_slot2;
            var31 = 24;
            var32 = var39[var31];
            var32 = var36.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var39[var31];
            var31 = var36.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.mE3KJC;
            var31 = var32.bind(var33)(var31);
            var28['content'] = var31;
            var96 = var28;
            _fun0003_ip = 3596; continue _fun0003;
 2373:
            var28 = {};
            var31 = _closure1_slot22;
            var31 = var31.SYSTEM;
            var28['state'] = var31;
            var36 = _closure1_slot0;
            var39 = _closure1_slot2;
            var31 = 24;
            var32 = var39[var31];
            var32 = var36.bind(var5)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var39[var31];
            var31 = var36.bind(var5)(var31);
            var31 = var31.t;
            var31 = var31.1i+hMj;
            var31 = var32.bind(var33)(var31);
            var28['content'] = var31;
            var96 = var28;
            _fun0003_ip = 3596; continue _fun0003;
 2456:
            var25 = var25.message;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var28 = 34;
            var28 = var32[var28];
            var31 = var31.bind(var5)(var28);
            var28 = var31.maybeCreateSingleForwardForMessage;
            var32 = var28.bind(var31)(var25);
            var31 = _closure1_slot20;
            var28 = var31.isBlockedForMessage;
            var28 = var28.bind(var31)(var25);
            if(var28) { _fun0003_ip = 3518; continue _fun0003 }
 2513:
            var31 = _closure1_slot20;
            var28 = var31.isIgnoredForMessage;
            var28 = var28.bind(var31)(var25);
            if(var28) { _fun0003_ip = 3438; continue _fun0003 }
 2534:
            var31 = _closure1_slot31;
            var28 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var28['message'] = var25;
            var28['messageForward'] = var32;
            var28['roleStyle'] = var14;
            var33 = {};
            r106 = var33;
            r105 = var7;
            var36 = copyDataProperties(r106, r105);
            var36 = 'renderReplies';
            var33[var36] = var9;
            var28['options'] = var33;
            var31 = var31.bind(var5)(var28);
            if(!(var18 != var31)) { _fun0003_ip = 3355; continue _fun0003 }
 2607:
            var28 = 'username';
            var28 = var28 in var31;
            if(!var28) { _fun0003_ip = 2778; continue _fun0003 }
 2621:
            var33 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var34];
            var33 = var33.bind(var5)(var28);
            var28 = var33.getMessageAuthor;
            var28 = var28.bind(var33)(var25);
            var34 = var28.nick;
            var33 = var28.colorString;
            if(!(var18 == var34)) { _fun0003_ip = 2676; continue _fun0003 }
 2665:
            var28 = var25.author;
            var34 = var28.username;
 2676:
            var36 = var18 != var34;
            var28 = undefined;
            if(!var36) { _fun0003_ip = 2688; continue _fun0003 }
 2685:
            var28 = var34;
 2688:
            var31['username'] = var28;
            if(var70) { _fun0003_ip = 2718; continue _fun0003 }
 2697:
            var28 = _closure1_slot3;
            var28 = var28.bind(var5)(var33);
            if(!(var18 == var28)) { _fun0003_ip = 2716; continue _fun0003 }
 2710:
            var28 = var31.colorString;
 2716:
            _fun0003_ip = 2724; continue _fun0003;
 2718:
            var28 = var31.colorString;
 2724:
            var31['colorString'] = var28;
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var28 = 51;
            var28 = var34[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.bind(var5)(var2, var25);
            if(!var28) { _fun0003_ip = 2778; continue _fun0003 }
 2759:
            var33 = var31.username;
            var28 = '@';
            var28 = var28 + var33;
            var31['username'] = var28;
 2778:
            var33 = var18 == var32;
            var28 = undefined;
            if(var33) { _fun0003_ip = 2798; continue _fun0003 }
 2787:
            var32 = var32.messageSnapshot;
            var28 = var32.message;
 2798:
            var34 = var25;
            if(!(var18 != var28)) { _fun0003_ip = 2808; continue _fun0003 }
 2805:
            var34 = var28;
 2808:
            var28 = 'stickers';
            var28 = var28 in var34;
            if(var28) { _fun0003_ip = 2825; continue _fun0003 }
 2819:
            var28 = new Array(0);
            _fun0003_ip = 2856; continue _fun0003;
 2825:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 28;
            var32 = var36[var32];
            var33 = var33.bind(var5)(var32);
            var32 = var33.getMessageStickers;
            var28 = var32.bind(var33)(var34);
 2856:
            var28 = var28.length;
            var32 = 0;
            if(!(!(var28 > var32))) { _fun0003_ip = 3231; continue _fun0003 }
 2870:
            var33 = _closure1_slot0;
            var28 = _closure1_slot2;
            var36 = 29;
            var28 = var28[var36];
            var40 = var33.bind(var5)(var28);
            var39 = var40.hasFlag;
            var33 = var34.flags;
            var28 = _closure1_slot25;
            var28 = var28.IS_VOICE_MESSAGE;
            var28 = var39.bind(var40)(var33, var28);
            if(var28) { _fun0003_ip = 3174; continue _fun0003 }
 2923:
            var33 = var34.type;
            var28 = _closure1_slot23;
            var28 = var28.POLL_RESULT;
            if(!(var33 !== var28)) { _fun0003_ip = 3141; continue _fun0003 }
 2945:
            var33 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var36];
            var39 = var33.bind(var5)(var28);
            var36 = var39.hasFlag;
            var33 = var34.flags;
            var28 = _closure1_slot25;
            var28 = var28.IS_COMPONENTS_V2;
            var28 = var36.bind(var39)(var33, var28);
            if(var28) { _fun0003_ip = 3084; continue _fun0003 }
 2992:
            var28 = var34.embeds;
            var28 = var28.length;
            if(!(!(var28 > var32))) { _fun0003_ip = 3027; continue _fun0003 }
 3007:
            var28 = var34.attachments;
            var28 = var28.length;
            var32 = var28 > var32;
            var28 = null;
            if(!var32) { _fun0003_ip = 3082; continue _fun0003 }
 3027:
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var32 = 24;
            var33 = var40[var32];
            var33 = var39.bind(var5)(var33);
            var36 = var33.intl;
            var33 = var36.string;
            var32 = var40[var32];
            var32 = var39.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.JAKsMz;
            var28 = var33.bind(var36)(var32);
 3082:
            _fun0003_ip = 3139; continue _fun0003;
 3084:
            var39 = _closure1_slot0;
            var40 = _closure1_slot2;
            var32 = 24;
            var33 = var40[var32];
            var33 = var39.bind(var5)(var33);
            var36 = var33.intl;
            var33 = var36.string;
            var32 = var40[var32];
            var32 = var39.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.Xxm5i4;
            var28 = var33.bind(var36)(var32);
 3139:
            _fun0003_ip = 3172; continue _fun0003;
 3141:
            var33 = _closure1_slot0;
            var36 = _closure1_slot2;
            var32 = 30;
            var32 = var36[var32];
            var33 = var33.bind(var5)(var32);
            var32 = var33.getPollResultsReplyPreviewMobile;
            var28 = var32.bind(var33)(var34);
 3172:
            _fun0003_ip = 3229; continue _fun0003;
 3174:
            var36 = _closure1_slot0;
            var39 = _closure1_slot2;
            var32 = 24;
            var33 = var39[var32];
            var33 = var36.bind(var5)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var39[var32];
            var32 = var36.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.6bhHra;
            var28 = var33.bind(var34)(var32);
 3229:
            _fun0003_ip = 3286; continue _fun0003;
 3231:
            var36 = _closure1_slot0;
            var39 = _closure1_slot2;
            var32 = 24;
            var33 = var39[var32];
            var33 = var36.bind(var5)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var39[var32];
            var32 = var36.bind(var5)(var32);
            var32 = var32.t;
            var32 = var32.7K5LmZ;
            var28 = var33.bind(var34)(var32);
 3286:
            var32 = var25.type;
            var25 = _closure1_slot23;
            var25 = var25.POLL_RESULT;
            if(!(var32 === var25)) { _fun0003_ip = 3311; continue _fun0003 }
 3305:
            var31['content'] = var28;
 3311:
            var25 = {};
            var32 = _closure1_slot22;
            var32 = var32.LOADED;
            var25['state'] = var32;
            var25['message'] = var31;
            var96 = var25;
            if(!(var18 != var28)) { _fun0003_ip = 3596; continue _fun0003 }
 3341:
            var25['systemContent'] = var28;
            var96 = var25;
            _fun0003_ip = 3596; continue _fun0003;
 3355:
            var25 = {};
            var28 = _closure1_slot22;
            var28 = var28.SYSTEM;
            var25['state'] = var28;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var31 = var34[var28];
            var31 = var33.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var28 = var34[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.1i+hMj;
            var28 = var31.bind(var32)(var28);
            var25['content'] = var28;
            var96 = var25;
            _fun0003_ip = 3596; continue _fun0003;
 3438:
            var25 = {};
            var28 = _closure1_slot22;
            var28 = var28.SYSTEM;
            var25['state'] = var28;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var31 = var34[var28];
            var31 = var33.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var28 = var34[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.G7p6v7;
            var28 = var31.bind(var32)(var28);
            var25['content'] = var28;
            var96 = var25;
            _fun0003_ip = 3596; continue _fun0003;
 3518:
            var25 = {};
            var28 = _closure1_slot22;
            var28 = var28.SYSTEM;
            var25['state'] = var28;
            var33 = _closure1_slot0;
            var34 = _closure1_slot2;
            var28 = 24;
            var31 = var34[var28];
            var31 = var33.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var28 = var34[var28];
            var28 = var33.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.XAkOo6;
            var28 = var31.bind(var32)(var28);
            var25['content'] = var28;
            var96 = var25;
 3596:
            var93 = undefined;
            if(!var21) { _fun0003_ip = 3626; continue _fun0003 }
 3601:
            var21 = _closure1_slot29;
            r107 = undefined;
            r106 = var2;
            r105 = var14;
            r104 = var6;
            r103 = var17;
            r102 = var7;
            var93 = r107[var21](r106, r105, r104, r103, r102, r101);
 3626:
            var25 = _closure1_slot9;
            var21 = var25.getInteraction;
            var66 = var21.bind(var25)(var2);
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 53;
            var21 = var28[var21];
            var25 = var25.bind(var5)(var21);
            var21 = var25.createInteractionStatus;
            var56 = var21.bind(var25)(var2, var66);
            var25 = var18 != var67;
            var21 = null;
            if(!var25) { _fun0003_ip = 3703; continue _fun0003 }
 3682:
            var31 = _closure1_slot19;
            var28 = var31.getMember;
            var25 = var76.id;
            var21 = var28.bind(var31)(var67, var25);
 3703:
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var25 = 54;
            var25 = var31[var25];
            var28 = var28.bind(var5)(var25);
            var25 = var28.isMemberCommunicationDisabled;
            var39 = var25.bind(var28)(var21);
            var25 = _closure1_slot4;
            var33 = var25.useReducedMotion;
            var25 = _closure1_slot4;
            var69 = var25.alwaysShowLinkDecorations;
            var25 = var18 == var22;
            var32 = var21;
            var21 = undefined;
            if(var25) { _fun0003_ip = 3772; continue _fun0003 }
 3766:
            var21 = var22.parent_id;
 3772:
            var31 = var22;
            if(!(var18 != var21)) { _fun0003_ip = 3822; continue _fun0003 }
 3779:
            var31 = var22;
            if(!(var18 != var22)) { _fun0003_ip = 3822; continue _fun0003 }
 3786:
            var21 = var22.isThread;
            var21 = var21.bind(var22)();
            var31 = var22;
            if(!var21) { _fun0003_ip = 3822; continue _fun0003 }
 3802:
            var28 = _closure1_slot18;
            var25 = var28.getChannel;
            var21 = var22.parent_id;
            var31 = var25.bind(var28)(var21);
 3822:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 55;
            var21 = var28[var21];
            var28 = var25.bind(var5)(var21);
            var25 = var28.getVisibleConnectionsRole;
            var21 = {};
            var21['guildMember'] = var32;
            var21['channel'] = var31;
            var21['onlyChannelConnectionRoles'] = var8;
            var75 = var25.bind(var28)(var21);
            var21 = var44.attachments;
            var21 = var21.length;
            var53 = 0;
            var47 = var53 !== var21;
            var21 = var44.embeds;
            var21 = var21.length;
            var48 = var53 !== var21;
            var21 = var41;
            if(!var41) { _fun0003_ip = 3922; continue _fun0003 }
 3907:
            var25 = var2.attachments;
            var25 = var25.length;
            var21 = var53 === var25;
 3922:
            if(!var21) { _fun0003_ip = 3929; continue _fun0003 }
 3925:
            var21 = var18 != var30;
 3929:
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var45 = 56;
            var25 = var25[var45];
            var25 = var28.bind(var5)(var25);
            var28 = var25.ViewImageDescriptions;
            var25 = var28.getSetting;
            var60 = var25.bind(var28)();
            var40 = new Array(0);
            if(var21) { _fun0003_ip = 4097; continue _fun0003 }
 3975:
            if(!var46) { _fun0003_ip = 4158; continue _fun0003 }
 3981:
            var28 = _closure1_slot1;
            var31 = _closure1_slot2;
            var25 = 58;
            var25 = var31[var25];
            var28 = var28.bind(var5)(var25);
            var25 = {};
            var31 = var44.attachments;
            var25['attachments'] = var31;
            var34 = _closure1_slot21;
            var32 = var34.getUploadAttachments;
            var31 = var2.nonce;
            var31 = var32.bind(var34)(var31);
            var25['uploadAttachments'] = var31;
            var25['shouldInlineAttachmentMedia'] = var42;
            var25['gifAutoPlay'] = var59;
            var25['viewImageDescriptions'] = var60;
            var25['useReducedMotion'] = var33;
            var25['shouldObscureSpoiler'] = var63;
            var31 = var26.embedBackgroundColor;
            var25['themedBackgroundColor'] = var31;
            var25['enabledContentHarmTypeFlags'] = var62;
            var25['shouldAgeVerify'] = var61;
            var25['colors'] = var26;
            var40 = var28.bind(var5)(var25);
            _fun0003_ip = 4158; continue _fun0003;
 4097:
            var28 = _closure1_slot1;
            var31 = _closure1_slot2;
            var25 = 57;
            var25 = var31[var25];
            var28 = var28.bind(var5)(var25);
            var25 = {};
            var25['uploaderFile'] = var30;
            var31 = var2.state;
            var30 = _closure1_slot24;
            var30 = var30.SEND_FAILED;
            var30 = var31 === var30;
            var25['isFailedMessage'] = var30;
            var25['shouldInlineAttachmentMedia'] = var42;
            var40 = var28.bind(var5)(var25);
 4158:
            if(!var21) { _fun0003_ip = 4180; continue _fun0003 }
 4161:
            var25 = var2.state;
            var21 = _closure1_slot24;
            var21 = var21.SEND_FAILED;
            if(!(var25 === var21)) { _fun0003_ip = 4220; continue _fun0003 }
 4180:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 59;
            var21 = var28[var21];
            var28 = var25.bind(var5)(var21);
            var25 = var28.calendarFormat;
            var21 = var2.timestamp;
            var72 = var25.bind(var28)(var21, var8);
            _fun0003_ip = 4275; continue _fun0003;
 4220:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 24;
            var25 = var31[var21];
            var25 = var30.bind(var5)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var21 = var31[var21];
            var21 = var30.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.yXY+5O;
            var72 = var25.bind(var28)(var21);
 4275:
            var25 = _closure1_slot17;
            var21 = var25.getId;
            var36 = var21.bind(var25)();
            var21 = var2.isUnsupported;
            var68 = var29;
            if(!var21) { _fun0003_ip = 4358; continue _fun0003 }
 4301:
            var30 = _closure1_slot0;
            var31 = _closure1_slot2;
            var21 = 24;
            var25 = var31[var21];
            var25 = var30.bind(var5)(var25);
            var28 = var25.intl;
            var25 = var28.string;
            var21 = var31[var21];
            var21 = var30.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.sWi5ER;
            var68 = var25.bind(var28)(var21);
 4358:
            var21 = var2.isPoll;
            var21 = var21.bind(var2)();
            var21 = !var21;
            if(var21) { _fun0003_ip = 4386; continue _fun0003 }
 4374:
            var25 = !var6;
            if(!var25) { _fun0003_ip = 4383; continue _fun0003 }
 4380:
            var25 = var1;
 4383:
            var21 = var25;
 4386:
            if(var21) { _fun0003_ip = 4407; continue _fun0003 }
 4389:
            var25 = var18 != var29;
            if(!var25) { _fun0003_ip = 4404; continue _fun0003 }
 4396:
            var28 = '';
            var25 = var28 !== var29;
 4404:
            var21 = var25;
 4407:
            if(var21) { _fun0003_ip = 4441; continue _fun0003 }
 4410:
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = 30;
            var21 = var28[var21];
            var25 = var25.bind(var5)(var21);
            var21 = var25.getPollReplyPreview;
            var68 = var21.bind(var25)(var2);
 4441:
            var21 = undefined;
            if(!var1) { _fun0003_ip = 4484; continue _fun0003 }
 4446:
            var25 = _closure1_slot1;
            var28 = _closure1_slot2;
            var1 = 60;
            var1 = var28[var1];
            var25 = var25.bind(var5)(var1);
            var1 = {};
            var1['theme'] = var20;
            var1['animateEmoji'] = var78;
            var21 = var25.bind(var5)(var2, var5, var1);
 4484:
            var25 = _closure1_slot0;
            var1 = _closure1_slot2;
            var97 = 61;
            var1 = var1[var97];
            var29 = var25.bind(var5)(var1);
            var28 = var29.shouldDisplayGuildTag;
            var25 = var76.id;
            var30 = var18 != var67;
            var1 = undefined;
            if(!var30) { _fun0003_ip = 4527; continue _fun0003 }
 4524:
            var1 = var67;
 4527:
            var1 = var28.bind(var29)(var25, var1);
            var29 = undefined;
            var28 = undefined;
            var25 = undefined;
            if(!var1) { _fun0003_ip = 4660; continue _fun0003 }
 4542:
            var30 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var97];
            var31 = var30.bind(var5)(var1);
            var30 = var31.getUserPrimaryGuild;
            var1 = var76.primaryGuild;
            var32 = var30.bind(var31)(var1);
            var31 = var32.guildId;
            var30 = var32.tag;
            var1 = var32.guildId;
            var34 = var18 != var1;
            var1 = undefined;
            if(!var34) { _fun0003_ip = 4651; continue _fun0003 }
 4600:
            var94 = _closure1_slot0;
            var34 = _closure1_slot2;
            var34 = var34[var97];
            var98 = var94.bind(var5)(var34);
            var97 = var98.getGuildTagBadgeUrl;
            var94 = var32.guildId;
            var34 = var32.badge;
            var32 = _closure1_slot27;
            var32 = var32.SIZE_12;
            var1 = var97.bind(var98)(var94, var34, var32);
 4651:
            var25 = var1;
            var29 = var31;
            var28 = var30;
 4660:
            var30 = _closure1_slot0;
            var1 = _closure1_slot2;
            var98 = 29;
            var1 = var1[var98];
            var32 = var30.bind(var5)(var1);
            var31 = var32.hasFlag;
            var1 = var2;
            if(!(var18 != var44)) { _fun0003_ip = 4696; continue _fun0003 }
 4693:
            var1 = var44;
 4696:
            var30 = var1.flags;
            var1 = _closure1_slot25;
            var1 = var1.IS_VOICE_MESSAGE;
            var30 = var31.bind(var32)(var30, var1);
            var1 = {};
            var1['currentUserId'] = var36;
            var1['message'] = var2;
            var1['theme'] = var20;
            var1['referralSenderMobileXPEnabled'] = var23;
            var97 = var1.currentUserId;
            var94 = var1.message;
            var34 = var1.theme;
            var23 = var1.referralSenderMobileXPEnabled;
            var32 = var94.referralTrialOfferId;
            var31 = var94.type;
            var1 = _closure1_slot23;
            var1 = var1.PREMIUM_REFERRAL;
            if(!(var31 === var1)) { _fun0003_ip = 4953; continue _fun0003 }
 4787:
            if(!(var18 != var32)) { _fun0003_ip = 4953; continue _fun0003 }
 4794:
            var31 = _closure1_slot11;
            var1 = var31.getRelevantUserTrialOffer;
            var31 = var1.bind(var31)(var32);
            var1 = var18 != var31;
            if(!var1) { _fun0003_ip = 4835; continue _fun0003 }
 4816:
            var99 = var18 == var31;
            var32 = undefined;
            if(var99) { _fun0003_ip = 4831; continue _fun0003 }
 4825:
            var32 = var31.user_id;
 4831:
            var1 = var18 != var32;
 4835:
            if(!var1) { _fun0003_ip = 4848; continue _fun0003 }
 4838:
            var31 = var31.user_id;
            var1 = var31 === var97;
 4848:
            if(var1) { _fun0003_ip = 4903; continue _fun0003 }
 4851:
            if(!var23) { _fun0003_ip = 4857; continue _fun0003 }
 4854:
            if(!var1) { _fun0003_ip = 4903; continue _fun0003 }
 4857:
            var1 = {};
            var1['referralTrialOfferDataUpdated'] = var5;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 21;
            var23 = var32[var23];
            var31 = var31.bind(var5)(var23);
            var23 = var31.createReferralTrialEmbed;
            var23 = var23.bind(var31)(var94, var34);
            var1['referralTrialOfferData'] = var23;
            _fun0003_ip = 4951; continue _fun0003;
 4903:
            var23 = {};
            var32 = _closure1_slot0;
            var99 = _closure1_slot2;
            var31 = 21;
            var31 = var99[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.createReferralTrialEmbedRedeemable;
            var31 = var31.bind(var32)(var94, var34, var97);
            var23['referralTrialOfferDataUpdated'] = var31;
            var23['referralTrialOfferData'] = var5;
            var1 = var23;
 4951:
            _fun0003_ip = 4957; continue _fun0003;
 4953:
            var1 = _closure1_slot28;
 4957:
            var31 = var1.referralTrialOfferDataUpdated;
            var32 = var1.referralTrialOfferData;
            var94 = _closure1_slot5;
            var23 = var94.getApplication;
            var97 = var2.applicationId;
            var99 = var18 != var97;
            var34 = '';
            var1 = var34;
            if(!var99) { _fun0003_ip = 5001; continue _fun0003 }
 4998:
            var1 = var97;
 5001:
            var1 = var23.bind(var94)(var1);
            var94 = var18 != var1;
            if(!var94) { _fun0003_ip = 5057; continue _fun0003 }
 5013:
            var97 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var98];
            var99 = var97.bind(var5)(var23);
            var98 = var99.hasFlag;
            var97 = var2.flags;
            var23 = _closure1_slot25;
            var23 = var23.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var94 = var98.bind(var99)(var97, var23);
 5057:
            var23 = undefined;
            if(!var94) { _fun0003_ip = 5067; continue _fun0003 }
 5062:
            var23 = var1.id;
 5067:
            var1 = {};
            var94 = var2.id;
            var1['id'] = var94;
            var94 = var2.channel_id;
            var1['channelId'] = var94;
            var97 = var18 != var67;
            var94 = undefined;
            if(!var97) { _fun0003_ip = 5099; continue _fun0003 }
 5096:
            var94 = var67;
 5099:
            var1['guildId'] = var94;
            var94 = var2;
            if(!(var18 != var44)) { _fun0003_ip = 5113; continue _fun0003 }
 5110:
            var94 = var44;
 5113:
            var94 = var94.flags;
            var1['flags'] = var94;
            var94 = var2.type;
            var1['type'] = var94;
            var94 = var2.nonce;
            if(!(var18 != var94)) { _fun0003_ip = 5158; continue _fun0003 }
 5141:
            var94 = var2.nonce;
            var97 = 'string';
            var94 = typeof var94;
            if(!(var97 === var94)) { _fun0003_ip = 5166; continue _fun0003 }
 5158:
            var94 = var2.nonce;
            _fun0003_ip = 5185; continue _fun0003;
 5166:
            var97 = global;
            var98 = var97.String;
            var97 = var2.nonce;
            var94 = var98.bind(var5)(var97);
 5185:
            var1['nonce'] = var94;
            var94 = var2.state;
            var1['state'] = var94;
            var1['reactions'] = var19;
            var94 = undefined;
            if(var55) { _fun0003_ip = 5212; continue _fun0003 }
 5209:
            var94 = var96;
 5212:
            var1['referencedMessage'] = var94;
            var1['threadEmbed'] = var93;
            var94 = var18 != var95;
            var93 = undefined;
            if(!var94) { _fun0003_ip = 5243; continue _fun0003 }
 5231:
            var94 = var95.getForwardInfo;
            var93 = var94.bind(var95)();
 5243:
            var1['forwardInfo'] = var93;
            var93 = !var24;
            if(!var93) { _fun0003_ip = 5262; continue _fun0003 }
 5256:
            var93 = var2.mentioned;
 5262:
            var1['mentioned'] = var93;
            var93 = var2.isEdited;
            var94 = var93.bind(var2)();
            var93 = var34;
            if(!var94) { _fun0003_ip = 5344; continue _fun0003 }
 5283:
            var93 = var34;
            if(var55) { _fun0003_ip = 5344; continue _fun0003 }
 5289:
            var97 = _closure1_slot0;
            var98 = _closure1_slot2;
            var94 = 24;
            var95 = var98[var94];
            var95 = var97.bind(var5)(var95);
            var96 = var95.intl;
            var95 = var96.string;
            var94 = var98[var94];
            var94 = var97.bind(var5)(var94);
            var94 = var94.t;
            var94 = var94.C8sXIC;
            var93 = var95.bind(var96)(var94);
 5344:
            var1['edited'] = var93;
            var93 = var26.editedColor;
            var1['editedColor'] = var93;
            var93 = var2.isUnsupported;
            if(var93) { _fun0003_ip = 5377; continue _fun0003 }
 5369:
            var93 = var26.textColor;
            _fun0003_ip = 5383; continue _fun0003;
 5377:
            var93 = var26.unsupportedColor;
 5383:
            var1['textColor'] = var93;
            var93 = var26.linkColor;
            var1['linkColor'] = var93;
            var1['tagText'] = var92;
            var1['tagVerified'] = var91;
            var1['tagTextColor'] = var90;
            var1['tagBackgroundColor'] = var89;
            var1['tagType'] = var88;
            var1['tagIconUrl'] = var87;
            var1['opTagText'] = var86;
            var1['opTagTextColor'] = var85;
            var1['opTagBackgroundColor'] = var84;
            var1['constrainedWidth'] = var83;
            var1['gifAutoPlay'] = var59;
            var1['animateEmoji'] = var78;
            if(!var70) { _fun0003_ip = 5467; continue _fun0003 }
 5462:
            var82 = var76.username;
 5467:
            var83 = var18 != var82;
            var78 = undefined;
            if(!var83) { _fun0003_ip = 5479; continue _fun0003 }
 5476:
            var78 = var82;
 5479:
            var1['username'] = var78;
            var78 = undefined;
            if(var70) { _fun0003_ip = 5494; continue _fun0003 }
 5488:
            var78 = var81.uri;
 5494:
            var1['avatarURL'] = var78;
            var78 = undefined;
            if(var70) { _fun0003_ip = 5507; continue _fun0003 }
 5504:
            var78 = var80;
 5507:
            var1['avatarDecorationURL'] = var78;
            var76 = var76.id;
            var1['authorId'] = var76;
            if(var70) { _fun0003_ip = 5554; continue _fun0003 }
 5525:
            var76 = 'username';
            if(!(var76 === var14)) { _fun0003_ip = 5554; continue _fun0003 }
 5533:
            var76 = _closure1_slot3;
            var76 = var76.bind(var5)(var74);
            if(!(var18 == var76)) { _fun0003_ip = 5552; continue _fun0003 }
 5546:
            var76 = var26.defaultUsernameColor;
 5552:
            _fun0003_ip = 5560; continue _fun0003;
 5554:
            var76 = var26.defaultUsernameColor;
 5560:
            var1['usernameColor'] = var76;
            var76 = null;
            if(var70) { _fun0003_ip = 5594; continue _fun0003 }
 5570:
            var78 = _closure1_slot3;
            var80 = var78.bind(var5)(var74);
            var81 = var18 != var80;
            var78 = null;
            if(!var81) { _fun0003_ip = 5591; continue _fun0003 }
 5588:
            var78 = var80;
 5591:
            var76 = var78;
 5594:
            var1['roleColor'] = var76;
            var76 = null;
            if(!var77) { _fun0003_ip = 5640; continue _fun0003 }
 5604:
            var76 = null;
            if(var70) { _fun0003_ip = 5640; continue _fun0003 }
 5609:
            var78 = _closure1_slot0;
            var80 = _closure1_slot2;
            var77 = 62;
            var77 = var80[var77];
            var78 = var78.bind(var5)(var77);
            var77 = var78.processColorStrings;
            var76 = var77.bind(var78)(var79);
 5640:
            var1['roleColors'] = var76;
            var76 = 'dot';
            var76 = var76 === var14;
            if(!var76) { _fun0003_ip = 5660; continue _fun0003 }
 5656:
            var76 = var18 != var74;
 5660:
            var1['shouldShowRoleDot'] = var76;
            var76 = 'username';
            var76 = var76 === var14;
            if(!var76) { _fun0003_ip = 5680; continue _fun0003 }
 5676:
            var76 = var18 != var74;
 5680:
            var1['shouldShowRoleOnName'] = var76;
            var1['showLinkDecorations'] = var69;
            if(var70) { _fun0003_ip = 5714; continue _fun0003 }
 5693:
            var69 = _closure1_slot3;
            var69 = var69.bind(var5)(var74);
            if(!(var18 == var69)) { _fun0003_ip = 5712; continue _fun0003 }
 5706:
            var69 = var26.defaultUsernameColor;
 5712:
            _fun0003_ip = 5720; continue _fun0003;
 5714:
            var69 = var26.defaultUsernameColor;
 5720:
            var1['colorString'] = var69;
            var69 = undefined;
            if(var70) { _fun0003_ip = 5733; continue _fun0003 }
 5730:
            var69 = var73;
 5733:
            var1['roleIcon'] = var69;
            var73 = var18 != var75;
            var69 = undefined;
            if(!var73) { _fun0003_ip = 5778; continue _fun0003 }
 5747:
            var74 = _closure1_slot0;
            var76 = _closure1_slot2;
            var73 = 63;
            var73 = var76[var73];
            var74 = var74.bind(var5)(var73);
            var73 = var74.createConnectionsRoleTag;
            var69 = var73.bind(var74)(var75);
 5778:
            var1['connectionsRoleTag'] = var69;
            var69 = undefined;
            if(var70) { _fun0003_ip = 5793; continue _fun0003 }
 5790:
            var69 = var72;
 5793:
            var1['timestamp'] = var69;
            var69 = undefined;
            if(var70) { _fun0003_ip = 5809; continue _fun0003 }
 5803:
            var69 = var26.timestampColor;
 5809:
            var1['timestampColor'] = var69;
            var1['content'] = var68;
            var1['isEditing'] = var12;
            var1['renderContentOnly'] = var55;
            var68 = undefined;
            if(!(var5 !== var71)) { _fun0003_ip = 5867; continue _fun0003 }
 5834:
            var70 = _closure1_slot0;
            var72 = _closure1_slot2;
            var69 = 64;
            var69 = var72[var69];
            var70 = var70.bind(var5)(var69);
            var69 = var70.createSurveyIndication;
            var68 = var69.bind(var70)(var2, var20, var71);
 5867:
            var1['surveyIndication'] = var68;
            var69 = _closure1_slot0;
            var70 = _closure1_slot2;
            var68 = 65;
            var68 = var70[var68];
            var69 = var69.bind(var5)(var68);
            var68 = var69.createEphemeralIndication;
            var68 = var68.bind(var69)(var2);
            var1['ephemeralIndication'] = var68;
            var1['interactionStatus'] = var56;
            var56 = undefined;
            if(!var58) { _fun0003_ip = 5973; continue _fun0003 }
 5922:
            var68 = _closure1_slot0;
            var69 = _closure1_slot2;
            var58 = 66;
            var58 = var69[var58];
            var69 = var68.bind(var5)(var58);
            var68 = var69.createExecutedCommand;
            r102 = var26.defaultUsernameColor;
            r107 = var69;
            r106 = var2;
            r105 = var22;
            r104 = var14;
            r103 = var20;
            var56 = r107[var68](r106, r105, r104, r103, r102, r101);
 5973:
            var1['executedCommand'] = var56;
            var56 = var44.components;
            var56 = var56.length;
            var58 = var56 > var53;
            var56 = undefined;
            if(!var58) { _fun0003_ip = 6084; continue _fun0003 }
 6000:
            var56 = undefined;
            if(!var57) { _fun0003_ip = 6084; continue _fun0003 }
 6005:
            var58 = _closure1_slot1;
            var68 = _closure1_slot2;
            var57 = 67;
            var57 = var68[var57];
            var58 = var58.bind(var5)(var57);
            var57 = {};
            var57['message'] = var2;
            var57['guildId'] = var67;
            var57['interaction'] = var66;
            var57['shouldDisableInteractiveComponents'] = var65;
            var57['shouldShowMedia'] = var64;
            var57['shouldObscureSpoiler'] = var63;
            var57['enabledContentHarmTypeFlags'] = var62;
            var57['shouldAgeVerify'] = var61;
            var57['shouldShowMosaicMediaDescriptions'] = var60;
            var57['shouldAutoPlayGifs'] = var59;
            var57['colors'] = var26;
            var56 = var58.bind(var5)(var57);
 6084:
            var1['components'] = var56;
            var56 = 0;
            if(var55) { _fun0003_ip = 6100; continue _fun0003 }
 6094:
            var56 = var26.feedbackColor;
 6100:
            var1['feedbackColor'] = var56;
            var53 = 0;
            if(var55) { _fun0003_ip = 6116; continue _fun0003 }
 6110:
            var53 = var26.highlightColor;
 6116:
            var1['highlightColor'] = var53;
            var55 = var18 != var54;
            var53 = undefined;
            if(!var55) { _fun0003_ip = 6133; continue _fun0003 }
 6130:
            var53 = var54;
 6133:
            var1['embeds'] = var53;
            if(var52) { _fun0003_ip = 6147; continue _fun0003 }
 6141:
            var52 = new Array(0);
            _fun0003_ip = 6179; continue _fun0003;
 6147:
            var54 = _closure1_slot0;
            var55 = _closure1_slot2;
            var53 = 68;
            var53 = var55[var53];
            var54 = var54.bind(var5)(var53);
            var53 = var54.createGiftCodeEmbed;
            var52 = var53.bind(var54)(var2, var20);
 6179:
            var1['giftCodes'] = var52;
            if(var49) { _fun0003_ip = 6193; continue _fun0003 }
 6187:
            var49 = new Array(0);
            _fun0003_ip = 6226; continue _fun0003;
 6193:
            var53 = _closure1_slot0;
            var54 = _closure1_slot2;
            var52 = 69;
            var52 = var54[var52];
            var53 = var53.bind(var5)(var52);
            var52 = var53.createCodedLinkEmbeds;
            var49 = var52.bind(var53)(var2, var44, var20);
 6226:
            var1['codedLinks'] = var49;
            var49 = undefined;
            if(!var51) { _fun0003_ip = 6267; continue _fun0003 }
 6236:
            var52 = _closure1_slot0;
            var53 = _closure1_slot2;
            var51 = 70;
            var51 = var53[var51];
            var52 = var52.bind(var5)(var51);
            var51 = var52.createActivityInstanceEmbed;
            var49 = var51.bind(var52)(var2);
 6267:
            var1['activityInstanceEmbed'] = var49;
            var49 = undefined;
            if(!var50) { _fun0003_ip = 6311; continue _fun0003 }
 6279:
            var52 = _closure1_slot0;
            var53 = _closure1_slot2;
            var51 = 71;
            var51 = var53[var51];
            var52 = var52.bind(var5)(var51);
            var51 = var52.createActivityInviteEmbed;
            var49 = var51.bind(var52)(var2, var20);
 6311:
            var1['activityInviteEmbed'] = var49;
            var49 = undefined;
            if(!var50) { _fun0003_ip = 6355; continue _fun0003 }
 6323:
            var51 = _closure1_slot0;
            var52 = _closure1_slot2;
            var50 = 72;
            var50 = var52[var50];
            var51 = var51.bind(var5)(var50);
            var50 = var51.createActivityRichPresenceInviteEmbed;
            var49 = var50.bind(var51)(var2, var22);
 6355:
            var1['activityRichPresenceInviteEmbed'] = var49;
            if(!var42) { _fun0003_ip = 6386; continue _fun0003 }
 6365:
            if(!var46) { _fun0003_ip = 6377; continue _fun0003 }
 6368:
            if(var47) { _fun0003_ip = 6374; continue _fun0003 }
 6371:
            var47 = var48;
 6374:
            var46 = var47;
 6377:
            if(var46) { _fun0003_ip = 6383; continue _fun0003 }
 6380:
            var46 = var41;
 6383:
            var42 = var46;
 6386:
            var1['useAttachmentGridLayout'] = var42;
            var1['useAttachmentUploadPreview'] = var41;
            var1['attachments'] = var40;
            var46 = 1;
            var40 = var46;
            if(!var41) { _fun0003_ip = 6442; continue _fun0003 }
 6410:
            var42 = var2.state;
            var41 = _closure1_slot24;
            var41 = var41.SEND_FAILED;
            var40 = var46;
            if(!(var42 === var41)) { _fun0003_ip = 6442; continue _fun0003 }
 6432:
            var40 = 0.2;
 6442:
            var1['attachmentsOpacity'] = var40;
            var41 = _closure1_slot1;
            var42 = _closure1_slot2;
            var40 = 73;
            var40 = var42[var40];
            var41 = var41.bind(var5)(var40);
            var40 = {};
            var40['message'] = var44;
            var44 = _closure1_slot0;
            var42 = var42[var45];
            var42 = var44.bind(var5)(var42);
            var44 = var42.AnimateStickers;
            var42 = var44.getSetting;
            var42 = var42.bind(var44)();
            var40['animateStickersSetting'] = var42;
            var42 = var2.id;
            var42 = var42 === var43;
            var40['isUserInteracting'] = var42;
            var40 = var41.bind(var5)(var40);
            var1['stickers'] = var40;
            if(!var38) { _fun0003_ip = 6537; continue _fun0003 }
 6534:
            var38 = var39;
 6537:
            var1['communicationDisabled'] = var38;
            var1['threadStarterMessageHeader'] = var35;
            var38 = var18 == var22;
            if(var38) { _fun0003_ip = 6567; continue _fun0003 }
 6554:
            var35 = var22.isForumPost;
            var35 = var35.bind(var22)();
            var38 = !var35;
 6567:
            var35 = !var38;
            if(var38) { _fun0003_ip = 6587; continue _fun0003 }
 6573:
            var39 = var2.id;
            var38 = var2.channel_id;
            var35 = var39 === var38;
 6587:
            var1['isFirstForumPostMessage'] = var35;
            var38 = var18 != var22;
            var35 = undefined;
            if(!var38) { _fun0003_ip = 6631; continue _fun0003 }
 6601:
            var38 = var22.isForumPost;
            var38 = var38.bind(var22)();
            var35 = undefined;
            if(!var38) { _fun0003_ip = 6631; continue _fun0003 }
 6616:
            var35 = undefined;
            if(!var37) { _fun0003_ip = 6631; continue _fun0003 }
 6621:
            var37 = _closure1_slot30;
            var35 = var37.bind(var5)(var2, var22);
 6631:
            var1['postActions'] = var35;
            var35 = var2.author;
            var35 = var35.id;
            var35 = var35 === var36;
            var1['isCurrentUserMessageAuthor'] = var35;
            var35 = _closure1_slot6;
            var35 = var35.gradientPreset;
            var35 = var18 != var35;
            var1['usingGradientTheme'] = var35;
            var36 = _closure1_slot0;
            var39 = _closure1_slot2;
            var35 = 25;
            var37 = var39[var35];
            var41 = var36.bind(var5)(var37);
            var40 = var41.getAssetUriForEmbed;
            var38 = _closure1_slot1;
            var37 = 74;
            var37 = var39[var37];
            var37 = var38.bind(var5)(var37);
            var37 = var40.bind(var41)(var37);
            var1['swipeToReplyIconUrl'] = var37;
            var35 = var39[var35];
            var37 = var36.bind(var5)(var35);
            var36 = var37.getAssetUriForEmbed;
            var35 = 75;
            var35 = var39[var35];
            var35 = var38.bind(var5)(var35);
            var35 = var36.bind(var37)(var35);
            var1['swipeToEditIconUrl'] = var35;
            var1['showRemixButton'] = var9;
            var1['remixTitle'] = var34;
            var34 = var26.remixButtonIconColor;
            var1['remixButtonIconColor'] = var34;
            var34 = var26.remixButtonBackgroundColor;
            var1['remixButtonBackgroundColor'] = var34;
            var1['referralTrialOffer'] = var32;
            var1['referralTrialOfferInfo'] = var31;
            if(var27) { _fun0003_ip = 6825; continue _fun0003 }
 6819:
            var27 = new Array(0);
            _fun0003_ip = 6857; continue _fun0003;
 6825:
            var32 = _closure1_slot0;
            var34 = _closure1_slot2;
            var31 = 76;
            var31 = var34[var31];
            var32 = var32.bind(var5)(var31);
            var31 = var32.createPostPreviewEmbeds;
            var27 = var31.bind(var32)(var2, var33);
 6857:
            var1['postPreviewEmbeds'] = var27;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var27 = 24;
            var33 = var32[var27];
            var33 = var31.bind(var5)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var32[var27];
            var33 = var31.bind(var5)(var33);
            var33 = var33.t;
            var33 = var33.2aXnfX;
            var33 = var34.bind(var35)(var33);
            var1['obscureLearnMoreLabel'] = var33;
            var33 = 77;
            var33 = var32[var33];
            var34 = var31.bind(var5)(var33);
            var33 = var34.createSafetyPolicyNoticeEmbed;
            var33 = var33.bind(var34)(var2);
            var1['safetyPolicyNoticeEmbed'] = var33;
            var1['pollData'] = var21;
            var21 = 78;
            var21 = var32[var21];
            var33 = var31.bind(var5)(var21);
            var21 = var33.createSafetySystemNotificationEmbed;
            var21 = var21.bind(var33)(var2);
            var1['safetySystemNotificationEmbed'] = var21;
            var21 = 79;
            var21 = var32[var21];
            var33 = var31.bind(var5)(var21);
            var32 = var33.createCtaButton;
            var31 = var2.id;
            var21 = var2.channel_id;
            var21 = var32.bind(var33)(var31, var21, var26);
            var1['ctaButton'] = var21;
            var21 = undefined;
            if(!var30) { _fun0003_ip = 7042; continue _fun0003 }
 7036:
            var21 = var26.embedBackgroundColor;
 7042:
            var1['audioAttachmentBackgroundColor'] = var21;
            var26 = _closure1_slot0;
            var21 = _closure1_slot2;
            var30 = 80;
            var30 = var21[var30];
            var31 = var26.bind(var5)(var30);
            var30 = var31.createMessageAccessibilityActions;
            var30 = var30.bind(var31)(var2, var22);
            var1['accessibilityActions'] = var30;
            var1['clanTagGuildId'] = var29;
            var1['clanTag'] = var28;
            var1['clanBadgeUrl'] = var25;
            var1['isFirst'] = var13;
            var1['gameApplicationId'] = var23;
            var23 = var21[var27];
            var23 = var26.bind(var5)(var23);
            var28 = var23.intl;
            var25 = var28.string;
            var23 = var21[var27];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.5IEsGx;
            var23 = var25.bind(var28)(var23);
            var1['replyAccessibilityLabel'] = var23;
            var23 = var21[var27];
            var23 = var26.bind(var5)(var23);
            var28 = var23.intl;
            var25 = var28.string;
            var23 = var21[var27];
            var23 = var26.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.I3ltXF;
            var23 = var25.bind(var28)(var23);
            var1['forwardAccessibilityLabel'] = var23;
            var23 = var21[var27];
            var23 = var26.bind(var5)(var23);
            var25 = var23.intl;
            var23 = var25.string;
            var21 = var21[var27];
            var21 = var26.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.rBIGBA;
            var21 = var23.bind(var25)(var21);
            var1['threadAccessibilityLabel'] = var21;
            var21 = var4;
            if(!var4) { _fun0003_ip = 7303; continue _fun0003 }
 7270:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 81;
            var23 = var26[var23];
            var25 = var25.bind(var5)(var23);
            var23 = var25.canShowForwardShortcut;
            var21 = var23.bind(var25)(var2, var24, var22);
 7303:
            var1['showForwardShortcut'] = var21;
            var21 = var4;
            if(!var4) { _fun0003_ip = 7349; continue _fun0003 }
 7316:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var23 = 81;
            var23 = var26[var23];
            var25 = var25.bind(var5)(var23);
            var23 = var25.canShowReplyShortcut;
            var21 = var23.bind(var25)(var2, var24, var22);
 7349:
            var1['showReplyShortcut'] = var21;
            if(var16) { _fun0003_ip = 7362; continue _fun0003 }
 7359:
            var16 = var4;
 7362:
            if(!var16) { _fun0003_ip = 7398; continue _fun0003 }
 7365:
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 81;
            var21 = var25[var21];
            var23 = var23.bind(var5)(var21);
            var21 = var23.canShowReactionShortcut;
            var16 = var21.bind(var23)(var2, var24, var22);
 7398:
            var1['showReactionShortcut'] = var16;
            if(!var4) { _fun0003_ip = 7440; continue _fun0003 }
 7408:
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 81;
            var16 = var23[var16];
            var21 = var21.bind(var5)(var16);
            var16 = var21.canShowThreadShortcut;
            var4 = var16.bind(var21)(var2, var22);
 7440:
            var1['showThreadShortcut'] = var4;
            var4 = var18 == var22;
            var16 = undefined;
            if(var4) { _fun0003_ip = 7461; continue _fun0003 }
 7456:
            var16 = var22.type;
 7461:
            var4 = _closure1_slot26;
            var4 = var4.GUILD_ANNOUNCEMENT;
            var4 = var16 === var4;
            var1['isAnnouncementChannel'] = var4;
            var16 = _closure1_slot0;
            var21 = _closure1_slot2;
            var4 = 81;
            var4 = var21[var4];
            var16 = var16.bind(var5)(var4);
            var4 = var16.isInMessageShortcutsExperiment;
            var4 = var4.bind(var16)();
            var1['shortcutsEnabled'] = var4;
            return var1;
 7519:
            var4 = var2.type;
            var1 = _closure1_slot23;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 7615; continue _fun0003 }
 7538:
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
            if(var21) { _fun0003_ip = 7603; continue _fun0003 }
 7593:
            var21 = var22.isForumPost;
            var18 = var21.bind(var22)();
 7603:
            var1['isForumPost'] = var18;
            var1 = var4.bind(var16)(var1);
            _fun0003_ip = 7708; continue _fun0003;
 7615:
            var4 = {};
            var16 = _closure1_slot29;
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
 7708:
            return var1;
 7710:
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
            r106 = var6;
            r105 = var7;
            var7 = copyDataProperties(r106, r105);
            var7 = 'renderThreadEmbeds';
            var6[var7] = var9;
            var7 = 'renderReactions';
            var6[var7] = var9;
            var7 = 'renderShortcuts';
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