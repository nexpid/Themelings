// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function createThreadEmbed(arg1, arg2, arg3, arg4, arg5, arg6) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg4;
            var2 = arg3;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var1.hasFlag;
            var2 = _closure1_slot30;
            var2 = var2.HAS_THREAD;
            var2 = var4.bind(var1)(var2);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 24;
            var4 = var12[var4];
            var9 = undefined;
            var10 = var6.bind(var9)(var4);
            var8 = var10.computeChannelName;
            var7 = _closure1_slot23;
            var4 = _closure1_slot21;
            var8 = var8.bind(var10)(var3, var7, var4);
            var14 = _closure1_slot1;
            var4 = 25;
            var4 = var12[var4];
            var7 = var14.bind(var9)(var4);
            var4 = arg6;
            var4 = var7.bind(var9)(var4);
            var4 = var4.baseColors;
            var4 = var4.backgroundColor;
            var11 = _closure1_slot15;
            var10 = var11.getMostRecentMessage;
            var13 = 26;
            var7 = var12[var13];
            var16 = var14.bind(var9)(var7);
            var15 = var16.castMessageIdAsChannelId;
            var7 = var1.id;
            var7 = var15.bind(var16)(var7);
            var10 = var10.bind(var11)(var7);
            var11 = _closure1_slot15;
            var7 = var11.getCount;
            var13 = var12[var13];
            var14 = var14.bind(var9)(var13);
            var13 = var14.castMessageIdAsChannelId;
            var1 = var1.id;
            var1 = var13.bind(var14)(var1);
            var11 = var7.bind(var11)(var1);
            var1 = 27;
            var7 = var12[var1];
            var14 = var6.bind(var9)(var7);
            var13 = var14.formatMobileMessageCountLabel;
            var7 = var3.id;
            var7 = var13.bind(var14)(var11, var7);
            var1 = var12[var1];
            var12 = var6.bind(var9)(var1);
            var6 = var12.formatMessageCountLabel;
            var1 = var3.id;
            var6 = var6.bind(var12)(var11, var1);
            if(!(var2 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 0;
            if(!(!(var11 > var1))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = {};
            var1['title'] = var8;
            var1['messageCountLabel'] = var7;
            var1['messageCountAccessibilityLabel'] = var6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 28;
            var12 = var15[var11];
            var12 = var14.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var9)(var11);
            var11 = var11.t;
            var11 = var11.HYtNyE;
            var11 = var12.bind(var13)(var11);
            var1['messagePreviewString'] = var11;
            var11 = false;
            var1['archived'] = var11;
            var1['backgroundColor'] = var4;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var3 = var3.threadMetadata;
            if(!(var2 != var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3.archived;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 10:
            if(!(var2 != var10)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var10.type;
            var2 = _closure1_slot28;
            var2 = var2.CHANNEL_NAME_CHANGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var3 = var10.type;
            var2 = _closure1_slot28;
            var2 = var2.THREAD_STARTER_MESSAGE;
            if(!(var3 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            var2 = var10.blocked;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = var10.ignored;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var2 = {};
            var2['title'] = var8;
            var2['messageCountLabel'] = var7;
            var2['messageCountAccessibilityLabel'] = var6;
            var3 = {};
            var11 = _closure1_slot27;
            var11 = var11.LOADED;
            var3['state'] = var11;
            var12 = _closure1_slot35;
            var11 = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var11['message'] = var10;
            var13 = arg2;
            var11['roleStyle'] = var13;
            var13 = arg5;
            var11['options'] = var13;
            var11 = var12.bind(var9)(var11);
            var3['message'] = var11;
            var2['referencedMessage'] = var3;
            var2['backgroundColor'] = var4;
            _fun0001_ip = 20; continue _fun0001;
case 17:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var10 = var10.blocked;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 28;
            var12 = var15[var11];
            var12 = var14.bind(var9)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var9)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = var11.G7p6v/;
            var10 = var12.bind(var13)(var10);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var11 = var11.XAkOo2;
            var10 = var12.bind(var13)(var11);
case 23:
            var3['messagePreviewString'] = var10;
            var10 = false;
            var3['archived'] = var10;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 20:
            _fun0001_ip = 24; continue _fun0001;
case 13:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 28;
            var11 = var14[var10];
            var11 = var13.bind(var9)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var9)(var10);
            var10 = var10.t;
            var10 = var10.ZTo4HS;
            var10 = var11.bind(var12)(var10);
            var3['messagePreviewString'] = var10;
            var10 = false;
            var3['archived'] = var10;
            var3['backgroundColor'] = var4;
            var2 = var3;
case 24:
            _fun0001_ip = 25; continue _fun0001;
case 12:
            var3 = {};
            var3['title'] = var8;
            var3['messageCountLabel'] = var7;
            var3['messageCountAccessibilityLabel'] = var6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 28;
            var8 = var10[var6];
            var8 = var7.bind(var9)(var8);
            var11 = var8.intl;
            var8 = var11.string;
            var6 = var10[var6];
            var6 = var7.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.ZTo4HS;
            var6 = var8.bind(var11)(var6);
            var3['messagePreviewString'] = var6;
            var6 = true;
            var3['archived'] = var6;
            var6 = 29;
            var6 = var10[var6];
            var7 = var7.bind(var9)(var6);
            var6 = var7.getAssetUriForEmbed;
            var8 = _closure1_slot1;
            var5 = 30;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var6.bind(var7)(var5);
            var3['archivedIconUrl'] = var5;
            var3['backgroundColor'] = var4;
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
    var _closure1_slot33 = var1;
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
            var4 = 31;
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
            var1 = 31;
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
    var _closure1_slot34 = var1;
    var2 = function createMessageContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var _closure2_slot0 = var2;
            var98 = var1.messageForward;
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
            var80 = var7.constrainedWidth;
            var93 = var7.ignoreMentioned;
            var79 = var7.animateEmoji;
            var38 = var7.animatingStickerMessageId;
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
            var29 = var7.renderCommunicationDisabled;
            var42 = var7.renderAttachments;
            var55 = var7.renderExecutedCommands;
            var4 = var7.renderPolls;
            var1 = var7.renderSharedClientTheme;
            var33 = var7.renderForumPostActions;
            var19 = var7.forcedTheme;
            var36 = var7.ignoreEmbedDescriptionCache;
            var37 = var7.forceHideSimpleEmbedContent;
            var59 = var7.shouldObscureSpoiler;
            _closure2_slot2 = var59;
            var61 = var7.shouldDisableInteractiveComponents;
            _closure2_slot3 = var61;
            var22 = var7.useAlternateEmbedColors;
            var35 = var7.restrictedPreview;
            var17 = null;
            if(!(var17 == var19)) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var3 = _closure1_slot16;
            var19 = var3.theme;
case 40:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var8 = 35;
            var8 = var24[var8];
            var8 = var23.bind(var5)(var8);
            var26 = var8.bind(var5)(var19, var22);
            _closure2_slot4 = var26;
            var8 = true;
            var60 = var8 === var10;
            _closure2_slot5 = var60;
            var28 = var60;
            if(!var60) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var28 = var21;
case 42:
            if(!var28) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var22 = var2.type;
            var21 = _closure1_slot28;
            var21 = var21.CUSTOM_GIFT;
            var28 = var22 !== var21;
case 44:
            var34 = var60;
            if(!var60) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var34 = var18;
case 46:
            var41 = var60;
            if(!var41) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var41 = var16;
case 48:
            var21 = _closure1_slot18;
            var18 = var21.getChannel;
            var16 = var2.getChannelId;
            var16 = var16.bind(var2)();
            var21 = var18.bind(var21)(var16);
            var22 = _closure1_slot18;
            var18 = var22.getChannel;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var16 = 26;
            var16 = var24[var16];
            var24 = var23.bind(var5)(var16);
            var23 = var24.castMessageIdAsChannelId;
            var16 = var2.id;
            var16 = var23.bind(var24)(var16);
            var16 = var18.bind(var22)(var16);
            var22 = var17 == var21;
            var18 = undefined;
            if(var22) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var22 = var21.getGuildId;
            var18 = var22.bind(var21)();
case 50:
            _closure2_slot6 = var18;
            var22 = var2.author;
            var24 = var22.id;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 36;
            var22 = var25[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.getHasEnhancedRoleColors;
            var74 = var22.bind(var23)(var18, var24);
            var63 = var18;
            if(!(var17 == var98)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 37;
            var18 = var23[var18];
            var22 = var22.bind(var5)(var18);
            var18 = var22.maybeCreateSingleForwardForMessage;
            var98 = var18.bind(var22)(var2);
case 52:
            var39 = var2;
            if(!(var17 != var98)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var18 = var98.messageSnapshot;
            var39 = var18.message;
case 54:
            var18 = new Array(0);
            if(!var14) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var14 = 38;
            var14 = var23[var14];
            var22 = var22.bind(var5)(var14);
            var14 = {};
            var23 = var2.reactions;
            var14['reactions'] = var23;
            var14['animateEmoji'] = var79;
            var18 = var22.bind(var5)(var14);
case 56:
            var23 = var2.type;
            var14 = _closure1_slot28;
            var22 = var14.THREAD_STARTER_MESSAGE;
            var14 = null;
            if(!(var23 === var22)) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var24 = _closure1_slot12;
            var23 = var24.getMessageByReference;
            var22 = var2.messageReference;
            var23 = var23.bind(var24)(var22);
            var25 = var23.state;
            var22 = _closure1_slot13;
            var24 = var22.LOADED;
            var22 = null;
            if(!(var25 === var24)) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var22 = var23.message;
case 60:
            var14 = var22;
case 58:
            if(!(var17 == var14)) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 39;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.bind(var5)(var2);
            if(var22) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var68 = !var12;
            if(var68) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var68 = var51;
case 66:
            var71 = var2.author;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var22 = 41;
            var22 = var24[var22];
            var24 = var23.bind(var5)(var22);
            var23 = var24.isMessageNewerThanImprovedMarkdownEpoch;
            var25 = var2.editedTimestamp;
            if(!(var17 == var25)) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var25 = var2.timestamp;
case 68:
            var22 = var25.valueOf;
            var22 = var22.bind(var25)();
            var32 = var23.bind(var24)(var22);
            var22 = var39.content;
            if(!(var17 != var22)) { _fun0003_ip = 70; continue _fun0003 }
case 71:
            var23 = var39.content;
            var22 = '';
            if(!(var22 === var23)) { _fun0003_ip = 72; continue _fun0003 }
case 70:
            var22 = {'content': null, 'hasSpoilerEmbeds': false, 'hasBailedAst': false};
            var22['content'] = var5;
            _fun0003_ip = 73; continue _fun0003;
case 72:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 42;
            var23 = var25[var23];
            var25 = var24.bind(var5)(var23);
            var24 = var25.parseMessageMarkup;
            if(var37) { _fun0003_ip = 74; continue _fun0003 }
case 75:
            var23 = var28;
            if(!var28) { _fun0003_ip = 76; continue _fun0003 }
case 77:
            var23 = var34;
case 76:
            var37 = var23;
case 74:
            var23 = var17 != var16;
            if(!var23) { _fun0003_ip = 78; continue _fun0003 }
case 79:
            var40 = var2.isFirstMessageInForumPost;
            var23 = var40.bind(var2)(var16);
case 78:
            r113 = var25;
            r112 = var2;
            r111 = var39;
            r110 = var37;
            r109 = var6;
            r108 = var23;
            r107 = var32;
            r106 = var32;
            var22 = r113[var24](r112, r111, r110, r109, r108, r107, r106, r105);
case 73:
            var25 = var22.content;
            var37 = var22.hasSpoilerEmbeds;
            var22 = var22.hasBailedAst;
            var23 = var35;
            if(!var23) { _fun0003_ip = 80; continue _fun0003 }
case 81:
            var23 = var17 != var25;
case 80:
            var24 = var25;
            if(!var23) { _fun0003_ip = 82; continue _fun0003 }
case 83:
            var40 = _closure1_slot1;
            var43 = _closure1_slot2;
            var23 = 43;
            var23 = var43[var23];
            var23 = var40.bind(var5)(var23);
            var24 = var23.bind(var5)(var25);
case 82:
            var25 = _closure1_slot0;
            var23 = _closure1_slot2;
            var40 = 44;
            var40 = var23[var40];
            var43 = var25.bind(var5)(var40);
            var40 = var43.getEnabledHarmTypesForMessage;
            var58 = var40.bind(var43)(var2);
            _closure2_slot7 = var58;
            var40 = 45;
            var40 = var23[var40];
            var43 = var25.bind(var5)(var40);
            var40 = var43.shouldAgeVerifyForExplicitMedia;
            var57 = var40.bind(var43)();
            _closure2_slot8 = var57;
            var40 = 46;
            var23 = var23[var40];
            var23 = var25.bind(var5)(var23);
            var25 = var23.ViewImageDescriptions;
            var23 = var25.getSetting;
            var56 = var23.bind(var25)();
            _closure2_slot9 = var56;
            if(!var28) { _fun0003_ip = 84; continue _fun0003 }
case 85:
            var28 = !var22;
case 84:
            if(!var28) { _fun0003_ip = 86; continue _fun0003 }
case 87:
            var28 = !var35;
case 86:
            var23 = _closure1_slot9;
            var22 = var23.getInteraction;
            var62 = var22.bind(var23)(var2);
            _closure2_slot10 = var62;
            var23 = undefined;
            if(!var28) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var25 = _closure1_slot1;
            var43 = _closure1_slot2;
            var22 = 47;
            var22 = var43[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var43 = var39.embeds;
            var22['embeds'] = var43;
            var43 = var2.channel_id;
            var22['channelId'] = var43;
            var22['gifAutoPlay'] = var53;
            var22['hasSpoilerEmbeds'] = var37;
            var22['ignoreEmbedDescriptionCache'] = var36;
            var22['shouldInlineEmbedMedia'] = var34;
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
            var22['showContentInventoryEntryFallbackEmbed'] = var31;
            var30 = function transformComponents(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 48;
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
case 88:
            var25 = _closure1_slot1;
            var30 = _closure1_slot2;
            var22 = 49;
            var22 = var30[var22];
            var25 = var25.bind(var5)(var22);
            var22 = {};
            var22['message'] = var2;
            var22['isSystemDM'] = var9;
            var22['channel'] = var21;
            var22['colors'] = var26;
            var22 = var25.bind(var5)(var22);
            var91 = var22.tagText;
            var90 = var22.tagAccessibilityLabel;
            var89 = var22.tagVerified;
            var88 = var22.tagTextColor;
            var87 = var22.tagBackgroundColor;
            var86 = var22.tagType;
            var85 = var22.tagIconUrl;
            var84 = var22.opTagText;
            var83 = var22.opTagTextColor;
            var82 = var22.opTagBackgroundColor;
            var30 = _closure1_slot22;
            var25 = var30.getUploaderFileForMessageId;
            var22 = var2.id;
            var25 = var25.bind(var30)(var22);
            var37 = var17 != var25;
            var30 = var2.state;
            var22 = _closure1_slot29;
            var22 = var22.SEND_FAILED;
            var22 = var30 !== var22;
            if(var22) { _fun0003_ip = 90; continue _fun0003 }
case 91:
            var30 = var2.isCommandType;
            var22 = var30.bind(var2)();
case 90:
            var30 = var23;
            if(var22) { _fun0003_ip = 92; continue _fun0003 }
case 93:
            var22 = var23;
            if(!(var17 == var23)) { _fun0003_ip = 94; continue _fun0003 }
case 95:
            var22 = new Array(0);
case 94:
            var31 = var22.push;
            var32 = _closure1_slot1;
            var34 = _closure1_slot2;
            var23 = 50;
            var23 = var34[var23];
            var32 = var32.bind(var5)(var23);
            var23 = {};
            var23['uploaderFile'] = var25;
            var23['useAttachmentUploadPreview'] = var37;
            var23['colors'] = var26;
            var23 = var32.bind(var5)(var23);
            var23 = var31.bind(var22)(var23);
            var30 = var22;
case 92:
            var31 = _closure1_slot8;
            var23 = var31.getMessage;
            var22 = var2.id;
            var23 = var23.bind(var31)(var22);
            var50 = var30;
            if(!(var17 != var23)) { _fun0003_ip = 96; continue _fun0003 }
case 97:
            var22 = var30;
            if(!(var17 == var30)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
            var22 = new Array(0);
case 98:
            var34 = var23.errorMessage;
            var30 = var22.push;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var23 = 50;
            var23 = var32[var23];
            var32 = var31.bind(var5)(var23);
            var31 = var32.createAutomodBlockedMessageEmbed;
            var23 = {};
            var23['errorMessage'] = var34;
            var23['colors'] = var26;
            var23 = var31.bind(var32)(var23);
            var23 = var30.bind(var22)(var23);
            var50 = var22;
case 96:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var32 = 51;
            var22 = var30[var32];
            var34 = var23.bind(var5)(var22);
            var31 = var34.getUserAuthor;
            var22 = var2.author;
            var22 = var31.bind(var34)(var22, var21);
            var49 = var22.guildMemberAvatar;
            var34 = var22.guildMemberAvatarDecoration;
            var31 = var22.iconRoleId;
            var22 = 52;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.ensureAvatarSource;
            var22 = var2.isInteractionPlaceholder;
            var22 = var22.bind(var2)();
            if(!var22) { _fun0003_ip = 100; continue _fun0003 }
case 101:
            var22 = var2.author;
            var22 = var22.avatar;
            if(!(var17 == var22)) { _fun0003_ip = 100; continue _fun0003 }
case 102:
            if(!(var17 == var49)) { _fun0003_ip = 100; continue _fun0003 }
case 103:
            var36 = var2.application;
            var43 = var17 == var36;
            var22 = undefined;
            if(var43) { _fun0003_ip = 104; continue _fun0003 }
case 105:
            var22 = var36.icon;
case 104:
            if(!(var17 == var22)) { _fun0003_ip = 106; continue _fun0003 }
case 100:
            if(!(var17 != var49)) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            if(!(var17 == var63)) { _fun0003_ip = 109; continue _fun0003 }
case 107:
            var22 = var71.getAvatarSource;
            var22 = var22.bind(var71)(var5);
            _fun0003_ip = 110; continue _fun0003;
case 109:
            var43 = _closure1_slot1;
            var44 = _closure1_slot2;
            var36 = 53;
            var36 = var44[var36];
            var44 = var43.bind(var5)(var36);
            var43 = var44.getGuildMemberAvatarSource;
            var36 = {};
            var52 = var71.id;
            var36['userId'] = var52;
            var36['avatar'] = var49;
            var36['guildId'] = var63;
            var22 = var43.bind(var44)(var36, var71);
case 110:
            _fun0003_ip = 111; continue _fun0003;
case 106:
            var43 = _closure1_slot1;
            var44 = _closure1_slot2;
            var36 = 53;
            var36 = var44[var36];
            var44 = var43.bind(var5)(var36);
            var43 = var44.getApplicationIconSource;
            var36 = {};
            var49 = var2.application;
            var49 = var49.id;
            var36['id'] = var49;
            var49 = var2.application;
            var49 = var49.icon;
            var36['icon'] = var49;
            var49 = var2.application;
            var49 = var49.bot;
            var36['bot'] = var49;
            var22 = var43.bind(var44)(var36);
case 111:
            var78 = var23.bind(var30)(var22);
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 53;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.getAvatarDecorationURL;
            var22 = {};
            if(!(var17 == var34)) { _fun0003_ip = 112; continue _fun0003 }
case 113:
            var34 = var71.avatarDecoration;
case 112:
            var22['avatarDecoration'] = var34;
            var44 = _closure1_slot0;
            var49 = _closure1_slot2;
            var34 = 54;
            var34 = var49[var34];
            var43 = var44.bind(var5)(var34);
            var36 = var43.getDecorationSizeForAvatarSize;
            var34 = 55;
            var34 = var49[var34];
            var34 = var44.bind(var5)(var34);
            var34 = var34.AvatarSizes;
            var34 = var34.NORMAL;
            var34 = var36.bind(var43)(var34);
            var22['size'] = var34;
            var77 = var23.bind(var30)(var22);
            var22 = var17 != var31;
            var70 = undefined;
            if(!var22) { _fun0003_ip = 114; continue _fun0003 }
case 115:
            var22 = var17 != var63;
            var70 = undefined;
            if(!var22) { _fun0003_ip = 114; continue _fun0003 }
case 116:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 56;
            var22 = var30[var22];
            var30 = var23.bind(var5)(var22);
            var23 = var30.getRoleIcon;
            var22 = {};
            var22['guildId'] = var63;
            var22['roleId'] = var31;
            var31 = 18;
            var22['size'] = var31;
            var70 = var23.bind(var30)(var22);
case 114:
            var23 = var2.hasFlag;
            var22 = _closure1_slot30;
            var22 = var22.SOURCE_MESSAGE_DELETED;
            var22 = var23.bind(var2)(var22);
            if(!var22) { _fun0003_ip = 117; continue _fun0003 }
case 118:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var22 = 28;
            var23 = var34[var22];
            var23 = var31.bind(var5)(var23);
            var30 = var23.intl;
            var23 = var30.string;
            var22 = var34[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.JOtgSw;
            var24 = var23.bind(var30)(var22);
case 117:
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
            var22 = _closure1_slot28;
            var22 = var22.INTERACTION_PREMIUM_UPSELL;
            if(!(var23 === var22)) { _fun0003_ip = 119; continue _fun0003 }
case 120:
            var23 = _closure1_slot0;
            var34 = _closure1_slot2;
            var22 = 28;
            var30 = var34[var22];
            var30 = var23.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.formatToPlainString;
            var22 = var34[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.u4A+xK;
            var22 = {};
            var22['appName'] = var75;
            var24 = var30.bind(var31)(var23, var22);
case 119:
            var23 = var2.type;
            var22 = _closure1_slot28;
            var22 = var22.REPLY;
            var99 = undefined;
            if(!(var23 === var22)) { _fun0003_ip = 121; continue _fun0003 }
case 122:
            var99 = undefined;
            if(!var20) { _fun0003_ip = 121; continue _fun0003 }
case 123:
            var23 = _closure1_slot12;
            var22 = var23.getMessageByReference;
            var20 = var2.messageReference;
            var20 = var22.bind(var23)(var20);
            var23 = var20.state;
            var22 = _closure1_slot13;
            var22 = var22.LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 124; continue _fun0003 }
case 125:
            var22 = _closure1_slot13;
            var22 = var22.NOT_LOADED;
            if(!(var22 !== var23)) { _fun0003_ip = 126; continue _fun0003 }
case 127:
            var22 = _closure1_slot13;
            var22 = var22.DELETED;
            if(!(var22 !== var23)) { _fun0003_ip = 128; continue _fun0003 }
case 129:
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 58;
            var22 = var30[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.assertNever;
            var22 = var22.bind(var23)(var20);
            var99 = undefined;
            _fun0003_ip = 121; continue _fun0003;
case 128:
            var22 = {};
            var23 = _closure1_slot27;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var23 = 28;
            var30 = var36[var23];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var23 = var36[var23];
            var23 = var34.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23.mE3KJN;
            var23 = var30.bind(var31)(var23);
            var22['content'] = var23;
            var99 = var22;
            _fun0003_ip = 121; continue _fun0003;
case 126:
            var22 = {};
            var23 = _closure1_slot27;
            var23 = var23.SYSTEM;
            var22['state'] = var23;
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var23 = 28;
            var30 = var36[var23];
            var30 = var34.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var23 = var36[var23];
            var23 = var34.bind(var5)(var23);
            var23 = var23.t;
            var23 = var23["1i+hMi"];
            var23 = var30.bind(var31)(var23);
            var22['content'] = var23;
            var99 = var22;
            _fun0003_ip = 121; continue _fun0003;
case 124:
            var20 = var20.message;
            var23 = _closure1_slot0;
            var30 = _closure1_slot2;
            var22 = 37;
            var22 = var30[var22];
            var23 = var23.bind(var5)(var22);
            var22 = var23.maybeCreateSingleForwardForMessage;
            var30 = var22.bind(var23)(var20);
            var23 = _closure1_slot21;
            var22 = var23.isBlockedForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 130; continue _fun0003 }
case 131:
            var23 = _closure1_slot21;
            var22 = var23.isIgnoredForMessage;
            var22 = var22.bind(var23)(var20);
            if(var22) { _fun0003_ip = 132; continue _fun0003 }
case 133:
            var23 = _closure1_slot35;
            var22 = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            var22['message'] = var20;
            var22['messageForward'] = var30;
            var22['roleStyle'] = var13;
            var36 = false;
            var31 = {};
            r112 = var31;
            r111 = var7;
            var34 = copyDataProperties(r112, r111);
            var34 = 'renderReplies';
            var31[33] = var36;
            var22['options'] = var31;
            var23 = var23.bind(var5)(var22);
            if(!(var17 != var23)) { _fun0003_ip = 134; continue _fun0003 }
case 135:
            var22 = 'username';
            var22 = var22 in var23;
            if(!var22) { _fun0003_ip = 136; continue _fun0003 }
case 137:
            var31 = _closure1_slot0;
            var22 = _closure1_slot2;
            var22 = var22[var32];
            var31 = var31.bind(var5)(var22);
            var22 = var31.getMessageAuthor;
            var22 = var22.bind(var31)(var20);
            var31 = var22.nick;
            var32 = var22.colorString;
            if(!(var17 == var31)) { _fun0003_ip = 138; continue _fun0003 }
case 139:
            var22 = var20.author;
            var31 = var22.username;
case 138:
            var34 = var17 != var31;
            var22 = undefined;
            if(!var34) { _fun0003_ip = 140; continue _fun0003 }
case 141:
            var22 = var31;
case 140:
            var23['username'] = var22;
            if(var68) { _fun0003_ip = 142; continue _fun0003 }
case 143:
            var31 = _closure1_slot3;
            var34 = var17 != var32;
            var22 = undefined;
            if(!var34) { _fun0003_ip = 144; continue _fun0003 }
case 145:
            var22 = var32;
case 144:
            var22 = var31.bind(var5)(var22);
            if(!(var17 == var22)) { _fun0003_ip = 146; continue _fun0003 }
case 147:
            var22 = var23.colorString;
case 146:
            _fun0003_ip = 148; continue _fun0003;
case 142:
            var22 = var23.colorString;
case 148:
            var23['colorString'] = var22;
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var22 = 57;
            var22 = var32[var22];
            var22 = var31.bind(var5)(var22);
            var22 = var22.bind(var5)(var2, var20);
            if(!var22) { _fun0003_ip = 136; continue _fun0003 }
case 149:
            var31 = var23.username;
            var22 = '@';
            var22 = var22 + var31;
            var23['username'] = var22;
case 136:
            var22 = global;
            var32 = var22.Array;
            var31 = var32.isArray;
            var22 = var23.content;
            var22 = var31.bind(var32)(var22);
            if(!var22) { _fun0003_ip = 150; continue _fun0003 }
case 151:
            var31 = var23.content;
            var32 = var31.length;
            var31 = 0;
            var22 = var31 === var32;
case 150:
            if(!var22) { _fun0003_ip = 152; continue _fun0003 }
case 153:
            var23['content'] = var5;
case 152:
            var31 = var17 == var30;
            var22 = undefined;
            if(var31) { _fun0003_ip = 154; continue _fun0003 }
case 155:
            var30 = var30.messageSnapshot;
            var22 = var30.message;
case 154:
            var32 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 156; continue _fun0003 }
case 157:
            var32 = var22;
case 156:
            var22 = var23.content;
            var30 = 'stickers';
            var30 = var30 in var32;
            if(var30) { _fun0003_ip = 158; continue _fun0003 }
case 159:
            var30 = new Array(0);
            _fun0003_ip = 160; continue _fun0003;
case 158:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var31 = 32;
            var31 = var36[var31];
            var34 = var34.bind(var5)(var31);
            var31 = var34.getMessageStickers;
            var30 = var31.bind(var34)(var32);
case 160:
            var31 = var30.length;
            var30 = 0;
            if(!(!(var31 > var30))) { _fun0003_ip = 161; continue _fun0003 }
case 162:
            var30 = 'interaction';
            var30 = var30 in var32;
            if(!var30) { _fun0003_ip = 163; continue _fun0003 }
case 164:
            var30 = var32.interaction;
            if(!(var17 != var30)) { _fun0003_ip = 163; continue _fun0003 }
case 165:
            var31 = var32.content;
            var30 = '';
            if(!(var30 !== var31)) { _fun0003_ip = 166; continue _fun0003 }
case 163:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var34 = 33;
            var30 = var30[var34];
            var43 = var31.bind(var5)(var30);
            var36 = var43.hasFlag;
            var31 = var32.flags;
            var30 = _closure1_slot30;
            var30 = var30.IS_VOICE_MESSAGE;
            var30 = var36.bind(var43)(var31, var30);
            if(var30) { _fun0003_ip = 167; continue _fun0003 }
case 168:
            var31 = var32.type;
            var30 = _closure1_slot28;
            var30 = var30.POLL_RESULT;
            if(!(var31 !== var30)) { _fun0003_ip = 169; continue _fun0003 }
case 170:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var34];
            var36 = var31.bind(var5)(var30);
            var34 = var36.hasFlag;
            var31 = var32.flags;
            var30 = _closure1_slot30;
            var30 = var30.IS_COMPONENTS_V2;
            var30 = var34.bind(var36)(var31, var30);
            if(var30) { _fun0003_ip = 171; continue _fun0003 }
case 172:
            var31 = var32.content;
            var30 = '';
            if(!(var30 !== var31)) { _fun0003_ip = 173; continue _fun0003 }
case 174:
            var30 = var17 == var22;
            var22 = null;
            if(!var30) { _fun0003_ip = 175; continue _fun0003 }
case 173:
            var36 = _closure1_slot0;
            var43 = _closure1_slot2;
            var30 = 28;
            var31 = var43[var30];
            var31 = var36.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var43[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.JAKsM8;
            var22 = var31.bind(var34)(var30);
case 175:
            _fun0003_ip = 176; continue _fun0003;
case 171:
            var36 = _closure1_slot0;
            var43 = _closure1_slot2;
            var30 = 28;
            var31 = var43[var30];
            var31 = var36.bind(var5)(var31);
            var34 = var31.intl;
            var31 = var34.string;
            var30 = var43[var30];
            var30 = var36.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30.Xxm5i3;
            var22 = var31.bind(var34)(var30);
case 176:
            _fun0003_ip = 177; continue _fun0003;
case 169:
            var31 = _closure1_slot0;
            var34 = _closure1_slot2;
            var30 = 34;
            var30 = var34[var30];
            var31 = var31.bind(var5)(var30);
            var30 = var31.getPollResultsReplyPreviewMobile;
            var22 = var30.bind(var31)(var32);
case 177:
            _fun0003_ip = 178; continue _fun0003;
case 167:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 28;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["6bhHrc"];
            var22 = var31.bind(var32)(var30);
case 178:
            _fun0003_ip = 179; continue _fun0003;
case 166:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 28;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["2v7kfl"];
            var22 = var31.bind(var32)(var30);
case 179:
            _fun0003_ip = 180; continue _fun0003;
case 161:
            var34 = _closure1_slot0;
            var36 = _closure1_slot2;
            var30 = 28;
            var31 = var36[var30];
            var31 = var34.bind(var5)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var36[var30];
            var30 = var34.bind(var5)(var30);
            var30 = var30.t;
            var30 = var30["7K5Lma"];
            var22 = var31.bind(var32)(var30);
case 180:
            var30 = var20.type;
            var20 = _closure1_slot28;
            var20 = var20.POLL_RESULT;
            if(!(var30 === var20)) { _fun0003_ip = 181; continue _fun0003 }
case 182:
            var23['content'] = var22;
case 181:
            var20 = {};
            var30 = _closure1_slot27;
            var30 = var30.LOADED;
            var20['state'] = var30;
            var20['message'] = var23;
            var99 = var20;
            if(!(var17 != var22)) { _fun0003_ip = 121; continue _fun0003 }
case 183:
            var20['systemContent'] = var22;
            var99 = var20;
            _fun0003_ip = 121; continue _fun0003;
case 134:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 28;
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
            var99 = var20;
            _fun0003_ip = 121; continue _fun0003;
case 132:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 28;
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
            var99 = var20;
            _fun0003_ip = 121; continue _fun0003;
case 130:
            var20 = {};
            var22 = _closure1_slot27;
            var22 = var22.SYSTEM;
            var20['state'] = var22;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var22 = 28;
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
            var99 = var20;
case 121:
            var96 = undefined;
            if(!var15) { _fun0003_ip = 184; continue _fun0003 }
case 185:
            var15 = _closure1_slot33;
            r113 = undefined;
            r112 = var2;
            r111 = var13;
            r110 = var6;
            r109 = var16;
            r108 = var7;
            r107 = var19;
            var96 = r113[var15](r112, r111, r110, r109, r108, r107, r106);
case 184:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 59;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.createInteractionStatus;
            var52 = var15.bind(var20)(var2, var62);
            var20 = var17 != var63;
            var15 = null;
            if(!var20) { _fun0003_ip = 186; continue _fun0003 }
case 187:
            var23 = _closure1_slot19;
            var22 = var23.getMember;
            var20 = var71.id;
            var15 = var22.bind(var23)(var63, var20);
case 186:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 60;
            var20 = var23[var20];
            var22 = var22.bind(var5)(var20);
            var20 = var22.isMemberCommunicationDisabled;
            var34 = var20.bind(var22)(var15);
            var20 = _closure1_slot4;
            var32 = var20.useReducedMotion;
            var20 = _closure1_slot4;
            var65 = var20.alwaysShowLinkDecorations;
            var20 = var17 == var21;
            var23 = var15;
            var15 = undefined;
            if(var20) { _fun0003_ip = 188; continue _fun0003 }
case 189:
            var15 = var21.parent_id;
case 188:
            var30 = var21;
            if(!(var17 != var15)) { _fun0003_ip = 190; continue _fun0003 }
case 191:
            var30 = var21;
            if(!(var17 != var21)) { _fun0003_ip = 190; continue _fun0003 }
case 192:
            var15 = var21.isThread;
            var15 = var15.bind(var21)();
            var30 = var21;
            if(!var15) { _fun0003_ip = 190; continue _fun0003 }
case 193:
            var22 = _closure1_slot18;
            var20 = var22.getChannel;
            var15 = var21.parent_id;
            var30 = var20.bind(var22)(var15);
case 190:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 61;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.getVisibleConnectionsRole;
            var15 = {};
            var15['guildMember'] = var23;
            var15['channel'] = var30;
            var15['onlyChannelConnectionRoles'] = var8;
            var72 = var20.bind(var22)(var15);
            var15 = var39.attachments;
            var15 = var15.length;
            var49 = 0;
            var43 = var49 !== var15;
            var15 = var39.embeds;
            var15 = var15.length;
            var44 = var49 !== var15;
            var15 = var37;
            if(!var37) { _fun0003_ip = 194; continue _fun0003 }
case 195:
            var20 = var2.attachments;
            var20 = var20.length;
            var15 = var49 === var20;
case 194:
            if(!var15) { _fun0003_ip = 196; continue _fun0003 }
case 197:
            var15 = var17 != var25;
case 196:
            var36 = new Array(0);
            if(var15) { _fun0003_ip = 198; continue _fun0003 }
case 199:
            if(!var42) { _fun0003_ip = 200; continue _fun0003 }
case 201:
            var22 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 63;
            var20 = var30[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var30 = var39.attachments;
            var20['attachments'] = var30;
            var64 = _closure1_slot22;
            var31 = var64.getUploadAttachments;
            var30 = var2.nonce;
            var30 = var31.bind(var64)(var30);
            var20['uploadAttachments'] = var30;
            var20['shouldInlineAttachmentMedia'] = var41;
            var20['gifAutoPlay'] = var53;
            var20['viewImageDescriptions'] = var56;
            var20['useReducedMotion'] = var32;
            var20['shouldObscureSpoiler'] = var59;
            var30 = var26.embedBackgroundColor;
            var20['themedBackgroundColor'] = var30;
            var20['enabledContentHarmTypeFlags'] = var58;
            var20['shouldAgeVerify'] = var57;
            var20['colors'] = var26;
            var36 = var22.bind(var5)(var20);
            _fun0003_ip = 200; continue _fun0003;
case 198:
            var22 = _closure1_slot1;
            var30 = _closure1_slot2;
            var20 = 62;
            var20 = var30[var20];
            var22 = var22.bind(var5)(var20);
            var20 = {};
            var20['uploaderFile'] = var25;
            var30 = var2.state;
            var25 = _closure1_slot29;
            var25 = var25.SEND_FAILED;
            var25 = var30 === var25;
            var20['isFailedMessage'] = var25;
            var20['shouldInlineAttachmentMedia'] = var41;
            var36 = var22.bind(var5)(var20);
case 200:
            if(!var15) { _fun0003_ip = 202; continue _fun0003 }
case 203:
            var22 = var2.state;
            var20 = _closure1_slot29;
            var20 = var20.SEND_FAILED;
            if(!(var22 === var20)) { _fun0003_ip = 204; continue _fun0003 }
case 202:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 64;
            var20 = var25[var20];
            var25 = var22.bind(var5)(var20);
            var22 = var25.calendarFormat;
            var20 = var2.timestamp;
            var69 = var22.bind(var25)(var20, var8, var27);
            _fun0003_ip = 205; continue _fun0003;
case 204:
            var27 = _closure1_slot0;
            var30 = _closure1_slot2;
            var20 = 28;
            var22 = var30[var20];
            var22 = var27.bind(var5)(var22);
            var25 = var22.intl;
            var22 = var25.string;
            var20 = var30[var20];
            var20 = var27.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.yXY+5J;
            var69 = var22.bind(var25)(var20);
case 205:
            if(!var15) { _fun0003_ip = 206; continue _fun0003 }
case 207:
            var20 = var2.state;
            var15 = _closure1_slot29;
            var15 = var15.SEND_FAILED;
            if(!(var20 === var15)) { _fun0003_ip = 208; continue _fun0003 }
case 206:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 64;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.accessibilityLabelCalendarFormat;
            var15 = var2.timestamp;
            var66 = var20.bind(var22)(var15);
            _fun0003_ip = 209; continue _fun0003;
case 208:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 28;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.yXY+5J;
            var66 = var20.bind(var22)(var15);
case 209:
            var20 = _closure1_slot17;
            var15 = var20.getId;
            var31 = var15.bind(var20)();
            var15 = var2.isUnsupported;
            var64 = var24;
            if(!var15) { _fun0003_ip = 210; continue _fun0003 }
case 211:
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var15 = 28;
            var20 = var27[var15];
            var20 = var25.bind(var5)(var20);
            var22 = var20.intl;
            var20 = var22.string;
            var15 = var27[var15];
            var15 = var25.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.sWi5EU;
            var64 = var20.bind(var22)(var15);
case 210:
            var15 = var2.isPoll;
            var15 = var15.bind(var2)();
            var15 = !var15;
            if(var15) { _fun0003_ip = 212; continue _fun0003 }
case 213:
            var20 = !var6;
            if(!var20) { _fun0003_ip = 214; continue _fun0003 }
case 215:
            var20 = var4;
case 214:
            var15 = var20;
case 212:
            if(var15) { _fun0003_ip = 216; continue _fun0003 }
case 217:
            var20 = var17 != var24;
            if(!var20) { _fun0003_ip = 218; continue _fun0003 }
case 219:
            var22 = '';
            var20 = var22 !== var24;
case 218:
            var15 = var20;
case 216:
            if(var15) { _fun0003_ip = 220; continue _fun0003 }
case 221:
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 34;
            var15 = var22[var15];
            var20 = var20.bind(var5)(var15);
            var15 = var20.getPollReplyPreview;
            var64 = var15.bind(var20)(var2);
case 220:
            var30 = undefined;
            if(!var4) { _fun0003_ip = 222; continue _fun0003 }
case 223:
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var4 = 65;
            var4 = var20[var4];
            var15 = var15.bind(var5)(var4);
            var4 = {};
            var4['theme'] = var19;
            var4['animateEmoji'] = var79;
            var30 = var15.bind(var5)(var2, var5, var4);
case 222:
            var25 = undefined;
            if(!var1) { _fun0003_ip = 224; continue _fun0003 }
case 225:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 66;
            var1 = var15[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.formatSharedClientThemeData;
            var25 = var1.bind(var4)(var2, var78, var75);
case 224:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var94 = 67;
            var1 = var1[var94];
            var20 = var4.bind(var5)(var1);
            var15 = var20.shouldDisplayGuildTag;
            var4 = var71.id;
            var22 = var17 != var63;
            var1 = undefined;
            if(!var22) { _fun0003_ip = 226; continue _fun0003 }
case 227:
            var1 = var63;
case 226:
            var1 = var15.bind(var20)(var4, var1);
            var24 = undefined;
            var22 = undefined;
            var20 = undefined;
            if(!var1) { _fun0003_ip = 228; continue _fun0003 }
case 229:
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
            var81 = var17 != var1;
            var1 = undefined;
            if(!var81) { _fun0003_ip = 230; continue _fun0003 }
case 231:
            var92 = _closure1_slot0;
            var81 = _closure1_slot2;
            var81 = var81[var94];
            var95 = var92.bind(var5)(var81);
            var94 = var95.getGuildTagBadgeUrl;
            var92 = var27.guildId;
            var81 = var27.badge;
            var27 = _closure1_slot32;
            var27 = var27.SIZE_12;
            var1 = var94.bind(var95)(var92, var81, var27);
case 230:
            var20 = var1;
            var24 = var15;
            var22 = var4;
case 228:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var92 = 33;
            var1 = var1[var92];
            var27 = var4.bind(var5)(var1);
            var15 = var27.hasFlag;
            var1 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 232; continue _fun0003 }
case 233:
            var1 = var39;
case 232:
            var4 = var1.flags;
            var1 = _closure1_slot30;
            var1 = var1.IS_VOICE_MESSAGE;
            var27 = var15.bind(var27)(var4, var1);
            var15 = _closure1_slot5;
            var4 = var15.getApplication;
            var81 = var2.applicationId;
            var95 = var17 != var81;
            var94 = '';
            var1 = var94;
            if(!var95) { _fun0003_ip = 234; continue _fun0003 }
case 235:
            var1 = var81;
case 234:
            var1 = var4.bind(var15)(var1);
            var4 = var17 != var1;
            if(!var4) { _fun0003_ip = 236; continue _fun0003 }
case 237:
            var81 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var92];
            var95 = var81.bind(var5)(var15);
            var92 = var95.hasFlag;
            var81 = var2.flags;
            var15 = _closure1_slot30;
            var15 = var15.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            var4 = var92.bind(var95)(var81, var15);
case 236:
            var15 = undefined;
            if(!var4) { _fun0003_ip = 238; continue _fun0003 }
case 239:
            var15 = var1.id;
case 238:
            var1 = var17 != var39;
            var92 = undefined;
            var95 = undefined;
            var81 = undefined;
            if(!var1) { _fun0003_ip = 240; continue _fun0003 }
case 241:
            var4 = var39.hasFlag;
            var1 = _closure1_slot30;
            var1 = var1.IS_GUILD_OFFICIAL;
            var1 = var4.bind(var39)(var1);
            var92 = undefined;
            var95 = undefined;
            var81 = undefined;
            if(!var1) { _fun0003_ip = 240; continue _fun0003 }
case 242:
            var4 = _closure1_slot20;
            var1 = var4.getGuild;
            var1 = var1.bind(var4)(var63);
            var4 = var17 != var1;
            var92 = undefined;
            var95 = undefined;
            var81 = undefined;
            if(!var4) { _fun0003_ip = 240; continue _fun0003 }
case 243:
            var97 = _closure1_slot0;
            var4 = _closure1_slot2;
            r100 = 68;
            var4 = var4[r100];
            var100 = var97.bind(var5)(var4);
            var97 = var100.isGuildOfficialMessagesEnabled;
            var4 = 'createMessageContent';
            var4 = var97.bind(var100)(var1, var4);
            var92 = undefined;
            var95 = undefined;
            var81 = undefined;
            if(!var4) { _fun0003_ip = 240; continue _fun0003 }
case 244:
            r103 = var1.officialMessageColor;
            if(!(var17 == r103)) { _fun0003_ip = 245; continue _fun0003 }
case 246:
            r103 = _closure1_slot24;
case 245:
            var1 = _closure1_slot4;
            var100 = var1.officialMessageStyle;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r100];
            var4 = var4.bind(var5)(var1);
            var1 = var4.showGuildOfficialMessageGradient;
            r104 = var1.bind(var4)(var100);
            var97 = undefined;
            if(!r104) { _fun0003_ip = 247; continue _fun0003 }
case 248:
            var1 = _closure1_slot26;
            var97 = r103 | var1;
case 247:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r100];
            var4 = var4.bind(var5)(var1);
            var1 = var4.showGuildOfficialMessageTextColor;
            var1 = var1.bind(var4)(var100);
            var4 = undefined;
            if(!var1) { _fun0003_ip = 249; continue _fun0003 }
case 250:
            r102 = _closure1_slot1;
            r105 = _closure1_slot2;
            var1 = 69;
            var100 = r105[var1];
            var100 = r102.bind(var5)(var100);
            r101 = var100.internal;
            var100 = r101.resolveSemanticColor;
            var1 = r105[var1];
            var1 = r102.bind(var5)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWER;
            r102 = var100.bind(r101)(var19, var1);
            var1 = _closure1_slot4;
            var1 = var1.desaturateUserColors;
            r101 = 1;
            if(!var1) { _fun0003_ip = 251; continue _fun0003 }
case 252:
            var1 = _closure1_slot4;
            r101 = var1.saturation;
case 251:
            var100 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[r100];
            r100 = var100.bind(var5)(var1);
            var100 = r100.getAccessibleGuildOfficialTextColor;
            var1 = 0;
            if(!r104) { _fun0003_ip = 253; continue _fun0003 }
case 254:
            var1 = _closure1_slot25;
case 253:
            r113 = r100;
            r112 = r103;
            r111 = r102;
            r110 = r101;
            r109 = var1;
            var100 = r113[var100](r112, r111, r110, r109, r108);
            var1 = var100.num;
            var4 = var1.bind(var100)();
case 249:
            r101 = _closure1_slot0;
            r102 = _closure1_slot2;
            var1 = 28;
            var100 = r102[var1];
            var100 = r101.bind(var5)(var100);
            r100 = var100.intl;
            var100 = r100.string;
            var1 = r102[var1];
            var1 = r101.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.GzDTxY;
            var81 = var100.bind(r100)(var1);
            var95 = var4;
            var92 = var97;
case 240:
            var4 = _closure1_slot0;
            var97 = _closure1_slot2;
            var1 = 70;
            var1 = var97[var1];
            var97 = var4.bind(var5)(var1);
            var4 = var97.createVoiceChannelBadge;
            var1 = var2.author;
            var1 = var1.id;
            var4 = var4.bind(var97)(var1, var63);
            var1 = {};
            var97 = var2.id;
            var1['id'] = var97;
            var97 = var2.channel_id;
            var1['channelId'] = var97;
            var100 = var17 != var63;
            var97 = undefined;
            if(!var100) { _fun0003_ip = 255; continue _fun0003 }
case 256:
            var97 = var63;
case 255:
            var1['guildId'] = var97;
            var97 = var2;
            if(!(var17 != var39)) { _fun0003_ip = 257; continue _fun0003 }
case 258:
            var97 = var39;
case 257:
            var97 = var97.flags;
            var1['flags'] = var97;
            var97 = var2.type;
            var1['type'] = var97;
            var97 = var2.nonce;
            if(!(var17 != var97)) { _fun0003_ip = 259; continue _fun0003 }
case 260:
            var97 = var2.nonce;
            var100 = 'string';
            var97 = typeof var97;
            if(!(var100 === var97)) { _fun0003_ip = 261; continue _fun0003 }
case 259:
            var97 = var2.nonce;
            _fun0003_ip = 262; continue _fun0003;
case 261:
            var100 = global;
            r100 = var100.String;
            var100 = var2.nonce;
            var97 = r100.bind(var5)(var100);
case 262:
            var1['nonce'] = var97;
            var97 = var2.state;
            var1['state'] = var97;
            var1['reactions'] = var18;
            var97 = undefined;
            if(var51) { _fun0003_ip = 263; continue _fun0003 }
case 264:
            var97 = var99;
case 263:
            var1['referencedMessage'] = var97;
            var1['threadEmbed'] = var96;
            var97 = var17 != var98;
            var96 = undefined;
            if(!var97) { _fun0003_ip = 265; continue _fun0003 }
case 266:
            var97 = var98.getForwardInfo;
            var96 = var97.bind(var98)();
case 265:
            var1['forwardInfo'] = var96;
            var93 = !var93;
            if(!var93) { _fun0003_ip = 267; continue _fun0003 }
case 268:
            var93 = var2.mentioned;
case 267:
            var1['mentioned'] = var93;
            var93 = var2.isEdited;
            var96 = var93.bind(var2)();
            var93 = var94;
            if(!var96) { _fun0003_ip = 269; continue _fun0003 }
case 270:
            var93 = var94;
            if(var51) { _fun0003_ip = 269; continue _fun0003 }
case 271:
            var98 = _closure1_slot0;
            var99 = _closure1_slot2;
            var94 = 28;
            var96 = var99[var94];
            var96 = var98.bind(var5)(var96);
            var97 = var96.intl;
            var96 = var97.string;
            var94 = var99[var94];
            var94 = var98.bind(var5)(var94);
            var94 = var94.t;
            var94 = var94.C8sXIM;
            var93 = var96.bind(var97)(var94);
case 269:
            var1['edited'] = var93;
            var93 = var26.editedColor;
            var1['editedColor'] = var93;
            var93 = var2.isUnsupported;
            if(var93) { _fun0003_ip = 272; continue _fun0003 }
case 273:
            if(!(var17 == var95)) { _fun0003_ip = 274; continue _fun0003 }
case 275:
            var93 = var26.textColor;
            _fun0003_ip = 276; continue _fun0003;
case 274:
            var94 = 4278190080.0;
            var93 = var94 | var95;
case 276:
            _fun0003_ip = 277; continue _fun0003;
case 272:
            var93 = var26.unsupportedColor;
case 277:
            var1['textColor'] = var93;
            var1['officialMessageColor'] = var92;
            var92 = var26.linkColor;
            var1['linkColor'] = var92;
            var1['tagText'] = var91;
            var1['tagAccessibilityLabel'] = var90;
            var1['tagVerified'] = var89;
            var1['tagTextColor'] = var88;
            var1['tagBackgroundColor'] = var87;
            var1['tagType'] = var86;
            var1['tagIconUrl'] = var85;
            var1['opTagText'] = var84;
            var1['opTagTextColor'] = var83;
            var1['opTagBackgroundColor'] = var82;
            var1['stateAccessibilityLabel'] = var81;
            var1['constrainedWidth'] = var80;
            var1['gifAutoPlay'] = var53;
            var1['animateEmoji'] = var79;
            var79 = var75;
            if(!var68) { _fun0003_ip = 278; continue _fun0003 }
case 279:
            var79 = var71.username;
case 278:
            var80 = var17 != var79;
            var75 = undefined;
            if(!var80) { _fun0003_ip = 280; continue _fun0003 }
case 281:
            var75 = var79;
case 280:
            var1['username'] = var75;
            var75 = undefined;
            if(var68) { _fun0003_ip = 282; continue _fun0003 }
case 283:
            var75 = var78.uri;
case 282:
            var1['avatarURL'] = var75;
            var75 = null;
            if(var68) { _fun0003_ip = 284; continue _fun0003 }
case 285:
            var75 = var77;
case 284:
            var1['avatarDecorationURL'] = var75;
            var71 = var71.id;
            var1['authorId'] = var71;
            if(var68) { _fun0003_ip = 286; continue _fun0003 }
case 287:
            var71 = 'username';
            if(!(var71 === var13)) { _fun0003_ip = 286; continue _fun0003 }
case 288:
            var75 = _closure1_slot3;
            var77 = var17 != var73;
            var71 = undefined;
            if(!var77) { _fun0003_ip = 289; continue _fun0003 }
case 290:
            var71 = var73;
case 289:
            var71 = var75.bind(var5)(var71);
            if(!(var17 == var71)) { _fun0003_ip = 291; continue _fun0003 }
case 292:
            var71 = var26.defaultUsernameColor;
case 291:
            _fun0003_ip = 293; continue _fun0003;
case 286:
            var71 = var26.defaultUsernameColor;
case 293:
            var1['usernameColor'] = var71;
            var71 = null;
            if(var68) { _fun0003_ip = 294; continue _fun0003 }
case 295:
            var77 = _closure1_slot3;
            var78 = var17 != var73;
            var75 = undefined;
            if(!var78) { _fun0003_ip = 296; continue _fun0003 }
case 297:
            var75 = var73;
case 296:
            var77 = var77.bind(var5)(var75);
            var78 = var17 != var77;
            var75 = null;
            if(!var78) { _fun0003_ip = 298; continue _fun0003 }
case 299:
            var75 = var77;
case 298:
            var71 = var75;
case 294:
            var1['roleColor'] = var71;
            var71 = null;
            if(!var74) { _fun0003_ip = 300; continue _fun0003 }
case 301:
            var71 = null;
            if(var68) { _fun0003_ip = 300; continue _fun0003 }
case 302:
            var75 = _closure1_slot0;
            var77 = _closure1_slot2;
            var74 = 71;
            var74 = var77[var74];
            var75 = var75.bind(var5)(var74);
            var74 = var75.processColorStrings;
            var71 = var74.bind(var75)(var76);
case 300:
            var1['roleColors'] = var71;
            var71 = 'dot';
            var71 = var71 === var13;
            var1['shouldShowRoleDot'] = var71;
            var71 = 'username';
            var71 = var71 === var13;
            var1['shouldShowRoleOnName'] = var71;
            var1['showLinkDecorations'] = var65;
            if(var68) { _fun0003_ip = 303; continue _fun0003 }
case 304:
            var71 = _closure1_slot3;
            var74 = var17 != var73;
            var65 = undefined;
            if(!var74) { _fun0003_ip = 305; continue _fun0003 }
case 306:
            var65 = var73;
case 305:
            var65 = var71.bind(var5)(var65);
            if(!(var17 == var65)) { _fun0003_ip = 307; continue _fun0003 }
case 308:
            var65 = var26.defaultUsernameColor;
case 307:
            _fun0003_ip = 309; continue _fun0003;
case 303:
            var65 = var26.defaultUsernameColor;
case 309:
            var1['colorString'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 310; continue _fun0003 }
case 311:
            var65 = var70;
case 310:
            var1['roleIcon'] = var65;
            var70 = var17 != var72;
            var65 = undefined;
            if(!var70) { _fun0003_ip = 312; continue _fun0003 }
case 313:
            var71 = _closure1_slot0;
            var73 = _closure1_slot2;
            var70 = 72;
            var70 = var73[var70];
            var71 = var71.bind(var5)(var70);
            var70 = var71.createConnectionsRoleTag;
            var65 = var70.bind(var71)(var72);
case 312:
            var1['connectionsRoleTag'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 314; continue _fun0003 }
case 315:
            var65 = var69;
case 314:
            var1['timestamp'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 316; continue _fun0003 }
case 317:
            var65 = var26.timestampColor;
case 316:
            var1['timestampColor'] = var65;
            var65 = undefined;
            if(var68) { _fun0003_ip = 318; continue _fun0003 }
case 319:
            var65 = var66;
case 318:
            var1['timestampAccessibilityLabel'] = var65;
            var1['content'] = var64;
            var1['isEditing'] = var11;
            var1['renderContentOnly'] = var51;
            var64 = undefined;
            if(!(var5 !== var67)) { _fun0003_ip = 320; continue _fun0003 }
case 321:
            var66 = _closure1_slot0;
            var68 = _closure1_slot2;
            var65 = 73;
            var65 = var68[var65];
            var66 = var66.bind(var5)(var65);
            var65 = var66.createSurveyIndication;
            var64 = var65.bind(var66)(var2, var19, var67);
case 320:
            var1['surveyIndication'] = var64;
            var65 = _closure1_slot0;
            var66 = _closure1_slot2;
            var64 = 74;
            var64 = var66[var64];
            var65 = var65.bind(var5)(var64);
            var64 = var65.createEphemeralIndication;
            var64 = var64.bind(var65)(var2);
            var1['ephemeralIndication'] = var64;
            var1['interactionStatus'] = var52;
            var52 = undefined;
            if(!var55) { _fun0003_ip = 322; continue _fun0003 }
case 323:
            var64 = _closure1_slot0;
            var65 = _closure1_slot2;
            var55 = 75;
            var55 = var65[var55];
            var65 = var64.bind(var5)(var55);
            var64 = var65.createExecutedCommand;
            r108 = var26.defaultUsernameColor;
            r113 = var65;
            r112 = var2;
            r111 = var21;
            r110 = var13;
            r109 = var19;
            var52 = r113[var64](r112, r111, r110, r109, r108, r107);
case 322:
            var1['executedCommand'] = var52;
            var52 = var39.components;
            var52 = var52.length;
            var55 = var52 > var49;
            var52 = undefined;
            if(!var55) { _fun0003_ip = 324; continue _fun0003 }
case 325:
            var52 = undefined;
            if(!var54) { _fun0003_ip = 324; continue _fun0003 }
case 326:
            var55 = _closure1_slot1;
            var64 = _closure1_slot2;
            var54 = 48;
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
            var53 = var39.components;
            var52 = var55.bind(var5)(var54, var53);
case 324:
            var1['components'] = var52;
            var52 = 0;
            if(var51) { _fun0003_ip = 327; continue _fun0003 }
case 328:
            var52 = var26.feedbackColor;
case 327:
            var1['feedbackColor'] = var52;
            var49 = 0;
            if(var51) { _fun0003_ip = 329; continue _fun0003 }
case 330:
            var49 = var26.highlightColor;
case 329:
            var1['highlightColor'] = var49;
            var51 = var17 != var50;
            var49 = undefined;
            if(!var51) { _fun0003_ip = 331; continue _fun0003 }
case 332:
            var49 = var50;
case 331:
            var1['embeds'] = var49;
            if(var48) { _fun0003_ip = 333; continue _fun0003 }
case 334:
            var48 = new Array(0);
            _fun0003_ip = 335; continue _fun0003;
case 333:
            var50 = _closure1_slot0;
            var51 = _closure1_slot2;
            var49 = 76;
            var49 = var51[var49];
            var50 = var50.bind(var5)(var49);
            var49 = var50.createGiftCodeEmbed;
            var48 = var49.bind(var50)(var2, var19);
case 335:
            var1['giftCodes'] = var48;
            if(var45) { _fun0003_ip = 336; continue _fun0003 }
case 337:
            var45 = new Array(0);
            _fun0003_ip = 338; continue _fun0003;
case 336:
            var49 = _closure1_slot0;
            var50 = _closure1_slot2;
            var48 = 77;
            var48 = var50[var48];
            var49 = var49.bind(var5)(var48);
            var48 = var49.createCodedLinkEmbeds;
            r113 = var49;
            r112 = var2;
            r111 = var39;
            r110 = var21;
            r109 = var19;
            var45 = r113[var48](r112, r111, r110, r109, r108);
case 338:
            var1['codedLinks'] = var45;
            var45 = undefined;
            if(!var47) { _fun0003_ip = 339; continue _fun0003 }
case 340:
            var48 = _closure1_slot0;
            var49 = _closure1_slot2;
            var47 = 78;
            var47 = var49[var47];
            var48 = var48.bind(var5)(var47);
            var47 = var48.createActivityInstanceEmbed;
            var45 = var47.bind(var48)(var2);
case 339:
            var1['activityInstanceEmbed'] = var45;
            var45 = undefined;
            if(!var46) { _fun0003_ip = 341; continue _fun0003 }
case 342:
            var47 = _closure1_slot0;
            var48 = _closure1_slot2;
            var46 = 79;
            var46 = var48[var46];
            var47 = var47.bind(var5)(var46);
            var46 = var47.createActivityRichPresenceInviteEmbed;
            var45 = var46.bind(var47)(var2, var21);
case 341:
            var1['activityRichPresenceInviteEmbed'] = var45;
            if(!var41) { _fun0003_ip = 343; continue _fun0003 }
case 344:
            if(!var42) { _fun0003_ip = 345; continue _fun0003 }
case 346:
            if(var43) { _fun0003_ip = 347; continue _fun0003 }
case 348:
            var43 = var44;
case 347:
            var42 = var43;
case 345:
            if(var42) { _fun0003_ip = 349; continue _fun0003 }
case 350:
            var42 = var37;
case 349:
            var41 = var42;
case 343:
            var1['useAttachmentGridLayout'] = var41;
            var1['useAttachmentUploadPreview'] = var37;
            var1['attachments'] = var36;
            var42 = 1;
            var36 = var42;
            if(!var37) { _fun0003_ip = 351; continue _fun0003 }
case 352:
            var41 = var2.state;
            var37 = _closure1_slot29;
            var37 = var37.SEND_FAILED;
            var36 = var42;
            if(!(var41 === var37)) { _fun0003_ip = 351; continue _fun0003 }
case 353:
            var36 = 0.2;
case 351:
            var1['attachmentsOpacity'] = var36;
            if(var35) { _fun0003_ip = 354; continue _fun0003 }
case 355:
            var36 = _closure1_slot1;
            var37 = _closure1_slot2;
            var35 = 80;
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
            _fun0003_ip = 356; continue _fun0003;
case 354:
            var35 = new Array(0);
case 356:
            var1['stickers'] = var35;
            if(!var29) { _fun0003_ip = 357; continue _fun0003 }
case 358:
            var29 = var34;
case 357:
            var1['communicationDisabled'] = var29;
            var34 = var17 == var21;
            if(var34) { _fun0003_ip = 359; continue _fun0003 }
case 360:
            var29 = var21.isForumPost;
            var29 = var29.bind(var21)();
            var34 = !var29;
case 359:
            var29 = !var34;
            if(var34) { _fun0003_ip = 361; continue _fun0003 }
case 362:
            var35 = var2.id;
            var34 = var2.channel_id;
            var29 = var35 === var34;
case 361:
            var1['isFirstForumPostMessage'] = var29;
            var34 = var17 != var21;
            var29 = undefined;
            if(!var34) { _fun0003_ip = 363; continue _fun0003 }
case 364:
            var34 = var21.isForumPost;
            var34 = var34.bind(var21)();
            var29 = undefined;
            if(!var34) { _fun0003_ip = 363; continue _fun0003 }
case 365:
            var29 = undefined;
            if(!var33) { _fun0003_ip = 363; continue _fun0003 }
case 366:
            var33 = _closure1_slot34;
            var29 = var33.bind(var5)(var2, var21);
case 363:
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
            var29 = 29;
            var33 = var35[var29];
            var37 = var31.bind(var5)(var33);
            var36 = var37.getAssetUriForEmbed;
            var34 = _closure1_slot1;
            var33 = 81;
            var33 = var35[var33];
            var33 = var34.bind(var5)(var33);
            var33 = var36.bind(var37)(var33);
            var1['swipeToReplyIconUrl'] = var33;
            var29 = var35[var29];
            var33 = var31.bind(var5)(var29);
            var31 = var33.getAssetUriForEmbed;
            var29 = 82;
            var29 = var35[var29];
            var29 = var34.bind(var5)(var29);
            var29 = var31.bind(var33)(var29);
            var1['swipeToEditIconUrl'] = var29;
            if(var28) { _fun0003_ip = 367; continue _fun0003 }
case 368:
            var28 = new Array(0);
            _fun0003_ip = 369; continue _fun0003;
case 367:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var29 = 83;
            var29 = var33[var29];
            var31 = var31.bind(var5)(var29);
            var29 = var31.createPostPreviewEmbeds;
            var28 = var29.bind(var31)(var2, var13, var32);
case 369:
            var1['postPreviewEmbeds'] = var28;
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var31 = 28;
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
            var31 = 84;
            var31 = var29[var31];
            var32 = var28.bind(var5)(var31);
            var31 = var32.createSafetyPolicyNoticeEmbed;
            var31 = var31.bind(var32)(var2);
            var1['safetyPolicyNoticeEmbed'] = var31;
            var1['pollData'] = var30;
            var1['sharedClientTheme'] = var25;
            var25 = 85;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var25 = var30.createSafetySystemNotificationEmbed;
            var25 = var25.bind(var30)(var2);
            var1['safetySystemNotificationEmbed'] = var25;
            var25 = 86;
            var25 = var29[var25];
            var30 = var28.bind(var5)(var25);
            var29 = var30.createCtaButton;
            var28 = var2.id;
            var25 = var2.channel_id;
            var25 = var29.bind(var30)(var28, var25, var26);
            var1['ctaButton'] = var25;
            var25 = undefined;
            if(!var27) { _fun0003_ip = 370; continue _fun0003 }
case 371:
            var25 = var26.embedBackgroundColor;
case 370:
            var1['audioAttachmentBackgroundColor'] = var25;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var25 = 87;
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
            if(var15) { _fun0003_ip = 372; continue _fun0003 }
case 373:
            var20 = var21.type;
case 372:
            var15 = _closure1_slot31;
            var15 = var15.GUILD_ANNOUNCEMENT;
            var15 = var20 === var15;
            var1['isAnnouncementChannel'] = var15;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 88;
            var15 = var22[var15];
            var22 = var20.bind(var5)(var15);
            var20 = var22.createDisplayNameStylesMobile;
            var15 = var2.author;
            var15 = var20.bind(var22)(var15, var23);
            var1['displayNameStyles'] = var15;
            var1['voiceChannelBadge'] = var4;
            return var1;
case 64:
            var4 = var2.type;
            var1 = _closure1_slot28;
            var1 = var1.THREAD_CREATED;
            if(!(var4 !== var1)) { _fun0003_ip = 374; continue _fun0003 }
case 375:
            var4 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 40;
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
            if(var20) { _fun0003_ip = 376; continue _fun0003 }
case 377:
            var20 = var21.isForumPost;
            var17 = var20.bind(var21)();
case 376:
            var1['isForumPost'] = var17;
            var1 = var4.bind(var15)(var1);
            _fun0003_ip = 378; continue _fun0003;
case 374:
            var4 = {};
            var15 = _closure1_slot33;
            r113 = undefined;
            r112 = var2;
            r111 = var13;
            r110 = var6;
            r109 = var16;
            r108 = var7;
            r107 = var19;
            var15 = r113[var15](r112, r111, r110, r109, r108, r107, r106);
            var4['threadEmbed'] = var15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var15 = 40;
            var15 = var17[var15];
            var17 = var16.bind(var5)(var15);
            var16 = var17.createSystemMessageContent;
            var15 = {};
            var15['message'] = var2;
            var15['theme'] = var19;
            var15['reactions'] = var18;
            var15['roleStyle'] = var13;
            r111 = var16.bind(var17)(var15);
            r112 = var4;
            var15 = copyDataProperties(r112, r111);
            var1 = var4;
case 378:
            return var1;
case 62:
            var1 = {};
            var4 = _closure1_slot35;
            var3 = {};
            var3['message'] = var14;
            var3['roleStyle'] = var13;
            var3['isFirst'] = var12;
            var3['isEditing'] = var11;
            var3['canShowImages'] = var10;
            var3['isSystemDM'] = var9;
            var3['isInlineReplyPreview'] = var6;
            var6 = {};
            r112 = var6;
            r111 = var7;
            var7 = copyDataProperties(r112, r111);
            var9 = false;
            var7 = 'renderThreadEmbeds';
            var6[6] = var9;
            var7 = 'renderReactions';
            var6[6] = var9;
            var7 = 'shouldDisableInteractiveComponents';
            var6[6] = var8;
            var3['options'] = var6;
            r111 = var4.bind(var5)(var3);
            r112 = var1;
            var3 = copyDataProperties(r112, r111);
            var3 = var2.id;
            var2 = 'id';
            var1[1] = var3;
            return var1;
        }
    };
    var _closure1_slot35 = var2;
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
    var8 = var4.GUILD_OFFICIAL_HIGHLIGHT_ALPHA;
    var _closure1_slot25 = var8;
    var4 = var4.GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR;
    var _closure1_slot26 = var4;
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageRowState;
    var _closure1_slot27 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MessageTypes;
    var _closure1_slot28 = var8;
    var8 = var4.MessageStates;
    var _closure1_slot29 = var8;
    var8 = var4.MessageFlags;
    var _closure1_slot30 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot31 = var4;
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot32 = var4;
    var4 = 89;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/createMessageContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();