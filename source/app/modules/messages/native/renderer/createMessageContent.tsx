// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: createThreadEmbed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = argCor;
            michal = argBaz;
            if(michal) { _fun00002_ip = 795; continue _fun00001 }
 15:
            zuuluu = entity.hasFlag;
            michal = _closure1_slot25;
            michal = michal.HAS_THREAD;
            michal = zuuluu.bind(entity)(michal);
            if(!michal) { _fun00002_ip = 795; continue _fun00001 }
 45:
            michal = null;
            if(!(michal != oscard)) { _fun00002_ip = 795; continue _fun00001 }
 54:
            golfie = _closure1_slot15;
            report = golfie.getMostRecentMessage;
            yankee = _closure1_slot1;
            verify = _closure1_slot2;
            offset = 22;
            zuuluu = verify[offset];
            option = undefined;
            foxtra = yankee.bind(option)(zuuluu);
            romeon = foxtra.castMessageIdAsChannelId;
            zuuluu = entity.id;
            zuuluu = romeon.bind(foxtra)(zuuluu);
            golfie = report.bind(golfie)(zuuluu);
            report = _closure1_slot15;
            zuuluu = report.getCount;
            offset = verify[offset];
            yankee = yankee.bind(option)(offset);
            offset = yankee.castMessageIdAsChannelId;
            entity = entity.id;
            entity = offset.bind(yankee)(entity);
            zuuluu = zuuluu.bind(report)(entity);
            report = _closure1_slot0;
            entity = 23;
            entity = verify[entity];
            verify = report.bind(option)(entity);
            report = verify.formatMobileMessageCountLabel;
            entity = oscard.id;
            report = report.bind(verify)(zuuluu, entity);
            if(!(michal != zuuluu)) { _fun00002_ip = 190; continue _fun00001 }
 184:
            entity = 0;
            if(!(!(zuuluu > entity))) { _fun00002_ip = 278; continue _fun00001 }
 190:
            entity = {};
            zuuluu = oscard.name;
            entity['title'] = zuuluu;
            entity['messageCountLabel'] = report;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 24;
            verify = romeon[zuuluu];
            verify = yankee.bind(option)(verify);
            offset = verify.intl;
            verify = offset.string;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.HYtNyM;
            zuuluu = verify.bind(offset)(zuuluu);
            entity['messagePreviewString'] = zuuluu;
            zuuluu = false;
            entity['archived'] = zuuluu;
            _fun00002_ip = 793; continue _fun00001;
 278:
            zuuluu = oscard.threadMetadata;
            if(!(michal != zuuluu)) { _fun00002_ip = 300; continue _fun00001 }
 288:
            zuuluu = zuuluu.archived;
            if(zuuluu) { _fun00002_ip = 660; continue _fun00001 }
 300:
            if(!(michal != golfie)) { _fun00002_ip = 569; continue _fun00001 }
 307:
            zuuluu = golfie.type;
            michal = _closure1_slot23;
            michal = michal.CHANNEL_NAME_CHANGE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 569; continue _fun00001 }
 329:
            zuuluu = golfie.type;
            michal = _closure1_slot23;
            michal = michal.THREAD_STARTER_MESSAGE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 569; continue _fun00001 }
 351:
            michal = golfie.blocked;
            if(michal) { _fun00002_ip = 459; continue _fun00001 }
 360:
            michal = golfie.ignored;
            if(michal) { _fun00002_ip = 459; continue _fun00001 }
 369:
            michal = {};
            zuuluu = oscard.name;
            michal['title'] = zuuluu;
            michal['messageCountLabel'] = report;
            zuuluu = {};
            verify = _closure1_slot22;
            verify = verify.LOADED;
            zuuluu['state'] = verify;
            offset = _closure1_slot31;
            verify = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            verify['message'] = golfie;
            yankee = argBar;
            verify['roleStyle'] = yankee;
            yankee = argGra;
            verify['options'] = yankee;
            verify = offset.bind(option)(verify);
            zuuluu['message'] = verify;
            michal['referencedMessage'] = zuuluu;
            _fun00002_ip = 567; continue _fun00001;
 459:
            zuuluu = {};
            verify = oscard.name;
            zuuluu['title'] = verify;
            zuuluu['messageCountLabel'] = report;
            golfie = golfie.blocked;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 24;
            offset = foxtra[verify];
            offset = romeon.bind(option)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(option)(verify);
            verify = verify.t;
            if(golfie) { _fun00002_ip = 541; continue _fun00001 }
 528:
            golfie = verify.G7p6v7;
            golfie = offset.bind(yankee)(golfie);
            _fun00002_ip = 552; continue _fun00001;
 541:
            verify = verify.XAkOo6;
            golfie = offset.bind(yankee)(verify);
 552:
            zuuluu['messagePreviewString'] = golfie;
            golfie = false;
            zuuluu['archived'] = golfie;
            michal = zuuluu;
 567:
            _fun00002_ip = 655; continue _fun00001;
 569:
            zuuluu = {};
            golfie = oscard.name;
            zuuluu['title'] = golfie;
            zuuluu['messageCountLabel'] = report;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 24;
            verify = romeon[golfie];
            verify = yankee.bind(option)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(option)(golfie);
            golfie = golfie.t;
            golfie = golfie.ZTo4HR;
            golfie = verify.bind(offset)(golfie);
            zuuluu['messagePreviewString'] = golfie;
            golfie = false;
            zuuluu['archived'] = golfie;
            michal = zuuluu;
 655:
            _fun00002_ip = 790; continue _fun00001;
 660:
            zuuluu = {};
            oscard = oscard.name;
            zuuluu['title'] = oscard;
            zuuluu['messageCountLabel'] = report;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 24;
            golfie = verify[report];
            golfie = oscard.bind(option)(golfie);
            offset = golfie.intl;
            golfie = offset.string;
            report = verify[report];
            report = oscard.bind(option)(report);
            report = report.t;
            report = report.ZTo4HR;
            report = golfie.bind(offset)(report);
            zuuluu['messagePreviewString'] = report;
            report = true;
            zuuluu['archived'] = report;
            report = 25;
            report = verify[report];
            oscard = oscard.bind(option)(report);
            report = oscard.getAssetUriForEmbed;
            golfie = _closure1_slot1;
            tangon = 26;
            tangon = verify[tangon];
            tangon = golfie.bind(option)(tangon);
            tangon = report.bind(oscard)(tangon);
            zuuluu['archivedIconUrl'] = tangon;
            michal = zuuluu;
 790:
            entity = michal;
 793:
            return entity;
 795:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo, argBar) { // Original name: getForumPostActions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = argBar;
            tangon = zuuluu.id;
            entity = zuuluu.channel_id;
            if(!(tangon !== entity)) { _fun00004_ip = 24; continue _fun00003 }
 20:
            entity = undefined;
            return entity;
 24:
            oscard = _closure1_slot14;
            report = oscard.hasJoined;
            tangon = zuuluu.channel_id;
            golfie = report.bind(oscard)(tangon);
            zuuluu = zuuluu.reactions;
            tangon = zuuluu.length;
            zuuluu = 0;
            oscard = zuuluu !== tangon;
            zuuluu = undefined;
            report = undefined;
            if(oscard) { _fun00004_ip = 199; continue _fun00003 }
 74:
            verify = _closure1_slot18;
            option = verify.getChannel;
            tangon = michal.parent_id;
            tangon = option.bind(verify)(tangon);
            offset = null;
            option = offset == tangon;
            yankee = undefined;
            if(option) { _fun00004_ip = 111; continue _fun00003 }
 105:
            yankee = tangon.defaultReactionEmoji;
 111:
            option = offset == yankee;
            tangon = undefined;
            if(option) { _fun00004_ip = 126; continue _fun00003 }
 120:
            tangon = yankee.emojiId;
 126:
            tangon = offset != tangon;
            offset = null;
            if(!tangon) { _fun00004_ip = 156; continue _fun00003 }
 135:
            verify = _closure1_slot7;
            option = verify.getUsableCustomEmojiById;
            tangon = yankee.emojiId;
            offset = option.bind(verify)(tangon);
 156:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 27;
            tangon = verify[tangon];
            verify = option.bind(zuuluu)(tangon);
            option = verify.createDefaultReaction;
            tangon = {};
            tangon['defaultReactionEmoji'] = yankee;
            tangon['customGuildEmoji'] = offset;
            report = option.bind(verify)(tangon);
 199:
            option = _closure1_slot10;
            tangon = option.shouldDisplayPrompt;
            michal = michal.id;
            tangon = tangon.bind(option)(michal);
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 27;
            entity = option[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.createForumPostActions;
            entity = {};
            entity['isFollowing'] = golfie;
            entity['hasReactions'] = oscard;
            entity['defaultReaction'] = report;
            entity['showMediaPostSharePrompt'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    michal = function(argFoo) { // Original name: createMessageContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            variable95 = entity.messageForward;
            kiloes = entity.roleStyle;
            backup = entity.isFirst;
            foxtra = entity.isEditing;
            romeon = entity.canShowImages;
            yankee = entity.isSystemDM;
            golfie = entity.isInlineReplyPreview;
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00006_ip = 58; continue _fun00005 }
 56:
            golfie = false;
 58:
            option = entity.options;
            quebec = entity.threadStarterMessageHeader;
            variable71 = entity.pushFeedbackType;
            variable55 = entity.renderContentOnly;
            limora = entity.showContentInventoryEntryFallbackEmbed;
            echoed = option.renderEmbeds;
            report = option.renderReactions;
            tangon = option.renderShortcuts;
            output = option.inlineEmbedMedia;
            sizing = option.inlineAttachmentMedia;
            variable83 = option.constrainedWidth;
            sequen = option.ignoreMentioned;
            variable79 = option.animateEmoji;
            variable43 = option.animatingStickerMessageId;
            variable59 = option.gifAutoPlay;
            variable49 = option.renderCodedLinks;
            variable52 = option.renderGiftCode;
            variable51 = option.renderActivityInstanceEmbed;
            variable50 = option.renderActivityInviteEmbed;
            variable57 = option.renderComponents;
            source = option.renderThreadEmbeds;
            config = option.renderReplies;
            variable38 = option.renderCommunicationDisabled;
            variable46 = option.renderAttachments;
            variable58 = option.renderExecutedCommands;
            entity = option.renderPolls;
            variable37 = option.renderForumPostActions;
            update = option.forcedTheme;
            variable36 = option.ignoreEmbedDescriptionCache;
            variable41 = option.forceHideSimpleEmbedContent;
            variable63 = option.shouldObscureSpoiler;
            variable65 = option.shouldDisableInteractiveComponents;
            vacuum = option.useAlternateEmbedColors;
            variable40 = option.shouldFilterKeywords;
            result = null;
            if(!(result == update)) { _fun00006_ip = 280; continue _fun00005 }
 267:
            zuuluu = _closure1_slot16;
            update = zuuluu.theme;
 280:
            offset = _closure1_slot1;
            ctrled = _closure1_slot2;
            verify = 31;
            verify = ctrled[verify];
            verify = offset.bind(oscard)(verify);
            record = verify.bind(oscard)(update, vacuum);
            verify = 32;
            verify = ctrled[verify];
            cntext = offset.bind(oscard)(verify);
            vacuum = cntext.getCurrentConfig;
            ctrled = {};
            papara = 'createMessageContent';
            ctrled['location'] = papara;
            verify = {};
            offset = false;
            verify['autoTrackExposure'] = offset;
            verify = vacuum.bind(cntext)(ctrled, verify);
            vacuum = verify.enabled;
            verify = true;
            variable64 = verify === romeon;
            cntext = variable64;
            if(!variable64) { _fun00006_ip = 374; continue _fun00005 }
 371:
            cntext = echoed;
 374:
            if(!cntext) { _fun00006_ip = 396; continue _fun00005 }
 377:
            ctrled = michal.type;
            echoed = _closure1_slot23;
            echoed = echoed.CUSTOM_GIFT;
            cntext = ctrled !== echoed;
 396:
            equals = variable64;
            if(!variable64) { _fun00006_ip = 405; continue _fun00005 }
 402:
            equals = output;
 405:
            variable42 = variable64;
            if(!variable42) { _fun00006_ip = 414; continue _fun00005 }
 411:
            variable42 = sizing;
 414:
            echoed = _closure1_slot18;
            output = echoed.getChannel;
            sizing = michal.getChannelId;
            sizing = sizing.bind(michal)();
            ctrled = output.bind(echoed)(sizing);
            echoed = _closure1_slot18;
            output = echoed.getChannel;
            target = _closure1_slot1;
            status = _closure1_slot2;
            sizing = 22;
            sizing = status[sizing];
            status = target.bind(oscard)(sizing);
            target = status.castMessageIdAsChannelId;
            sizing = michal.id;
            sizing = target.bind(status)(sizing);
            output = output.bind(echoed)(sizing);
            echoed = result == ctrled;
            sizing = undefined;
            if(echoed) { _fun00006_ip = 507; continue _fun00005 }
 497:
            echoed = ctrled.getGuildId;
            sizing = echoed.bind(ctrled)();
 507:
            target = _closure1_slot0;
            status = _closure1_slot2;
            echoed = 33;
            echoed = status[echoed];
            target = target.bind(oscard)(echoed);
            echoed = target.canUseEnhancedRoleColors;
            variable77 = echoed.bind(target)(sizing, papara);
            variable67 = sizing;
            if(!(result == variable95)) { _fun00006_ip = 577; continue _fun00005 }
 546:
            echoed = _closure1_slot0;
            target = _closure1_slot2;
            sizing = 34;
            sizing = target[sizing];
            echoed = echoed.bind(oscard)(sizing);
            sizing = echoed.maybeCreateSingleForwardForMessage;
            variable95 = sizing.bind(echoed)(michal);
 577:
            variable44 = michal;
            if(!(result != variable95)) { _fun00006_ip = 595; continue _fun00005 }
 584:
            sizing = variable95.messageSnapshot;
            variable44 = sizing.message;
 595:
            echoed = new Array(0);
            if(!report) { _fun00006_ip = 645; continue _fun00005 }
 602:
            target = _closure1_slot1;
            status = _closure1_slot2;
            sizing = 35;
            sizing = status[sizing];
            target = target.bind(oscard)(sizing);
            sizing = {};
            status = michal.reactions;
            sizing['reactions'] = status;
            sizing['animateEmoji'] = variable79;
            echoed = target.bind(oscard)(sizing);
 645:
            status = michal.type;
            sizing = _closure1_slot23;
            target = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(status === target)) { _fun00006_ip = 716; continue _fun00005 }
 666:
            sierra = _closure1_slot12;
            status = sierra.getMessageByReference;
            target = michal.messageReference;
            status = status.bind(sierra)(target);
            whisks = status.state;
            target = _closure1_slot13;
            sierra = target.LOADED;
            target = null;
            if(!(whisks === sierra)) { _fun00006_ip = 713; continue _fun00005 }
 708:
            target = status.message;
 713:
            sizing = target;
 716:
            if(!(result == sizing)) { _fun00006_ip = 7685; continue _fun00005 }
 723:
            status = _closure1_slot1;
            sierra = _closure1_slot2;
            target = 36;
            target = sierra[target];
            target = status.bind(oscard)(target);
            target = target.bind(oscard)(michal);
            if(target) { _fun00006_ip = 7492; continue _fun00005 }
 754:
            variable70 = !backup;
            if(variable70) { _fun00006_ip = 763; continue _fun00005 }
 760:
            variable70 = variable55;
 763:
            variable76 = michal.author;
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            target = 38;
            target = sierra[target];
            sierra = status.bind(oscard)(target);
            status = sierra.isMessageNewerThanImprovedMarkdownEpoch;
            whisks = michal.editedTimestamp;
            if(!(result == whisks)) { _fun00006_ip = 811; continue _fun00005 }
 805:
            whisks = michal.timestamp;
 811:
            target = whisks.valueOf;
            target = target.bind(whisks)();
            whisks = status.bind(sierra)(target);
            target = variable44.content;
            if(!(result != target)) { _fun00006_ip = 847; continue _fun00005 }
 834:
            status = variable44.content;
            target = '';
            if(!(target === status)) { _fun00006_ip = 860; continue _fun00005 }
 847:
            status = {};
            status['content'] = oscard;
            status['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 950; continue _fun00005;
 860:
            sierra = _closure1_slot0;
            variable39 = _closure1_slot2;
            target = 39;
            target = variable39[target];
            variable39 = sierra.bind(oscard)(target);
            sierra = variable39.parseMessageMarkup;
            if(variable41) { _fun00006_ip = 901; continue _fun00005 }
 889:
            target = cntext;
            if(!target) { _fun00006_ip = 898; continue _fun00005 }
 895:
            target = equals;
 898:
            variable41 = target;
 901:
            target = result != output;
            if(!target) { _fun00006_ip = 919; continue _fun00005 }
 908:
            variable45 = michal.isFirstMessageInForumPost;
            target = variable45.bind(michal)(output);
 919:
            r107 = variable39;
            r106 = michal;
            r105 = variable44;
            r104 = variable41;
            r103 = golfie;
            r102 = target;
            r101 = whisks;
            r100 = whisks;
            variable100 = variable40;
            status = r107[sierra](r106, r105, r104, r103, r102, r101, r100, variable100, variable99);
 950:
            target = status.content;
            variable40 = status.hasSpoilerEmbeds;
            sierra = _closure1_slot0;
            variable39 = _closure1_slot2;
            status = 40;
            variable41 = variable39[status];
            variable45 = sierra.bind(oscard)(variable41);
            variable41 = variable45.shouldRedactExplicitContent;
            variable62 = variable41.bind(variable45)(michal);
            status = variable39[status];
            sierra = sierra.bind(oscard)(status);
            status = sierra.shouldAgeVerifyForExplicitMedia;
            variable61 = status.bind(sierra)();
            sierra = undefined;
            if(!cntext) { _fun00006_ip = 1197; continue _fun00005 }
 1019:
            status = _closure1_slot1;
            variable41 = _closure1_slot2;
            variable39 = 41;
            variable39 = variable41[variable39];
            variable47 = status.bind(oscard)(variable39);
            variable45 = variable47.getCurrentConfig;
            variable39 = {};
            variable39['location'] = papara;
            papara = {};
            papara['autoTrackExposure'] = offset;
            papara = variable45.bind(variable47)(variable39, papara);
            variable39 = papara.enabled;
            papara = 42;
            papara = variable41[papara];
            status = status.bind(oscard)(papara);
            papara = {};
            variable41 = variable44.embeds;
            papara['embeds'] = variable41;
            variable41 = michal.channel_id;
            papara['channelId'] = variable41;
            papara['gifAutoPlay'] = variable59;
            papara['hasSpoilerEmbeds'] = variable40;
            papara['ignoreEmbedDescriptionCache'] = variable36;
            variable36 = {};
            variable36['tiktok'] = variable39;
            papara['playInline'] = variable36;
            papara['shouldInlineEmbedMedia'] = equals;
            papara['colors'] = record;
            papara['showListsAndHeaders'] = whisks;
            papara['showMaskedLinks'] = whisks;
            whisks = record.embedBackgroundColor;
            papara['themedBackgroundColor'] = whisks;
            papara['shouldObscureExplicitMedia'] = variable62;
            papara['shouldAgeVerify'] = variable61;
            whisks = michal.author;
            whisks = whisks.bot;
            papara['authorIsBot'] = whisks;
            papara['showContentInventoryEntryFallbackEmbed'] = limora;
            sierra = status.bind(oscard)(papara);
 1197:
            status = _closure1_slot1;
            limora = _closure1_slot2;
            papara = 43;
            papara = limora[papara];
            status = status.bind(oscard)(papara);
            papara = {};
            papara['message'] = michal;
            papara['isSystemDM'] = yankee;
            papara['channel'] = ctrled;
            papara['colors'] = record;
            papara = status.bind(oscard)(papara);
            variable92 = papara.tagText;
            variable91 = papara.tagVerified;
            variable90 = papara.tagTextColor;
            variable89 = papara.tagBackgroundColor;
            variable88 = papara.tagType;
            variable87 = papara.tagIconUrl;
            variable86 = papara.opTagText;
            variable85 = papara.opTagTextColor;
            variable84 = papara.opTagBackgroundColor;
            limora = _closure1_slot21;
            status = limora.getUploaderFileForMessageId;
            papara = michal.id;
            status = status.bind(limora)(papara);
            variable41 = result != status;
            limora = michal.state;
            papara = _closure1_slot24;
            papara = papara.SEND_FAILED;
            papara = limora !== papara;
            if(papara) { _fun00006_ip = 1351; continue _fun00005 }
 1341:
            limora = michal.isCommandType;
            papara = limora.bind(michal)();
 1351:
            limora = sierra;
            if(papara) { _fun00006_ip = 1422; continue _fun00005 }
 1357:
            papara = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1368; continue _fun00005 }
 1364:
            papara = new Array(0);
 1368:
            whisks = papara.push;
            equals = _closure1_slot1;
            variable36 = _closure1_slot2;
            sierra = 44;
            sierra = variable36[sierra];
            equals = equals.bind(oscard)(sierra);
            sierra = {};
            sierra['uploaderFile'] = status;
            sierra['useAttachmentUploadPreview'] = variable41;
            sierra['colors'] = record;
            sierra = equals.bind(oscard)(sierra);
            sierra = whisks.bind(papara)(sierra);
            limora = papara;
 1422:
            whisks = _closure1_slot8;
            sierra = whisks.getMessage;
            papara = michal.id;
            sierra = sierra.bind(whisks)(papara);
            variable54 = limora;
            if(!(result != sierra)) { _fun00006_ip = 1521; continue _fun00005 }
 1449:
            papara = limora;
            if(!(result == limora)) { _fun00006_ip = 1460; continue _fun00005 }
 1456:
            papara = new Array(0);
 1460:
            variable36 = sierra.errorMessage;
            limora = papara.push;
            whisks = _closure1_slot0;
            equals = _closure1_slot2;
            sierra = 44;
            sierra = equals[sierra];
            equals = whisks.bind(oscard)(sierra);
            whisks = equals.createAutomodBlockedMessageEmbed;
            sierra = {};
            sierra['errorMessage'] = variable36;
            sierra['colors'] = record;
            sierra = whisks.bind(equals)(sierra);
            sierra = limora.bind(papara)(sierra);
            variable54 = papara;
 1521:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            equals = 45;
            papara = limora[equals];
            variable36 = sierra.bind(oscard)(papara);
            whisks = variable36.getUserAuthor;
            papara = michal.author;
            papara = whisks.bind(variable36)(papara, ctrled);
            variable47 = papara.guildMemberAvatar;
            variable36 = papara.guildMemberAvatarDecoration;
            whisks = papara.iconRoleId;
            papara = 46;
            papara = limora[papara];
            limora = sierra.bind(oscard)(papara);
            sierra = limora.ensureAvatarSource;
            papara = michal.isInteractionPlaceholder;
            papara = papara.bind(michal)();
            if(!papara) { _fun00006_ip = 1649; continue _fun00005 }
 1610:
            papara = michal.author;
            papara = papara.avatar;
            if(!(result == papara)) { _fun00006_ip = 1649; continue _fun00005 }
 1626:
            variable39 = michal.application;
            variable40 = result == variable39;
            papara = undefined;
            if(variable40) { _fun00006_ip = 1645; continue _fun00005 }
 1640:
            papara = variable39.icon;
 1645:
            if(!(result == papara)) { _fun00006_ip = 1724; continue _fun00005 }
 1649:
            if(!(result != variable47)) { _fun00006_ip = 1657; continue _fun00005 }
 1653:
            if(!(result == variable67)) { _fun00006_ip = 1670; continue _fun00005 }
 1657:
            papara = variable76.getAvatarSource;
            papara = papara.bind(variable76)(oscard);
            _fun00006_ip = 1722; continue _fun00005;
 1670:
            variable40 = _closure1_slot1;
            variable45 = _closure1_slot2;
            variable39 = 47;
            variable39 = variable45[variable39];
            variable45 = variable40.bind(oscard)(variable39);
            variable40 = variable45.getGuildMemberAvatarSource;
            variable39 = {};
            variable48 = variable76.id;
            variable39['userId'] = variable48;
            variable39['guildMemberAvatar'] = variable47;
            variable39['guildId'] = variable67;
            papara = variable40.bind(variable45)(variable39, variable76);
 1722:
            _fun00006_ip = 1801; continue _fun00005;
 1724:
            variable40 = _closure1_slot1;
            variable45 = _closure1_slot2;
            variable39 = 47;
            variable39 = variable45[variable39];
            variable45 = variable40.bind(oscard)(variable39);
            variable40 = variable45.getApplicationIconSource;
            variable39 = {};
            variable47 = michal.application;
            variable47 = variable47.id;
            variable39['id'] = variable47;
            variable47 = michal.application;
            variable47 = variable47.icon;
            variable39['icon'] = variable47;
            variable47 = michal.application;
            variable47 = variable47.bot;
            variable39['bot'] = variable47;
            papara = variable40.bind(variable45)(variable39);
 1801:
            variable81 = sierra.bind(limora)(papara);
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 47;
            papara = limora[papara];
            limora = sierra.bind(oscard)(papara);
            sierra = limora.getAvatarDecorationURL;
            papara = {};
            if(!(result == variable36)) { _fun00006_ip = 1844; continue _fun00005 }
 1838:
            variable36 = variable76.avatarDecoration;
 1844:
            papara['avatarDecoration'] = variable36;
            variable45 = _closure1_slot0;
            variable47 = _closure1_slot2;
            variable36 = 48;
            variable36 = variable47[variable36];
            variable40 = variable45.bind(oscard)(variable36);
            variable39 = variable40.getDecorationSizeForAvatarSize;
            variable36 = 49;
            variable36 = variable47[variable36];
            variable36 = variable45.bind(oscard)(variable36);
            variable36 = variable36.AvatarSizes;
            variable36 = variable36.NORMAL;
            variable36 = variable39.bind(variable40)(variable36);
            papara['size'] = variable36;
            variable80 = sierra.bind(limora)(papara);
            papara = result != whisks;
            variable73 = undefined;
            if(!papara) { _fun00006_ip = 1980; continue _fun00005 }
 1922:
            papara = result != variable67;
            variable73 = undefined;
            if(!papara) { _fun00006_ip = 1980; continue _fun00005 }
 1931:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 50;
            papara = limora[papara];
            limora = sierra.bind(oscard)(papara);
            sierra = limora.getRoleIcon;
            papara = {};
            papara['guildId'] = variable67;
            papara['roleId'] = whisks;
            whisks = 18;
            papara['size'] = whisks;
            variable73 = sierra.bind(limora)(papara);
 1980:
            sierra = michal.hasFlag;
            papara = _closure1_slot25;
            papara = papara.SOURCE_MESSAGE_DELETED;
            papara = sierra.bind(michal)(papara);
            if(!papara) { _fun00006_ip = 2059; continue _fun00005 }
 2004:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            papara = 24;
            sierra = variable36[papara];
            sierra = whisks.bind(oscard)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            papara = variable36[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.JOtgS0;
            target = sierra.bind(limora)(papara);
 2059:
            sierra = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[equals];
            sierra = sierra.bind(oscard)(papara);
            papara = sierra.getMessageAuthor;
            papara = papara.bind(sierra)(michal);
            variable82 = papara.nick;
            variable74 = papara.colorString;
            variable78 = papara.colorStrings;
            sierra = michal.type;
            papara = _closure1_slot23;
            papara = papara.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === papara)) { _fun00006_ip = 2187; continue _fun00005 }
 2124:
            sierra = _closure1_slot0;
            variable36 = _closure1_slot2;
            papara = 24;
            limora = variable36[papara];
            limora = sierra.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.formatToPlainString;
            papara = variable36[papara];
            papara = sierra.bind(oscard)(papara);
            papara = papara.t;
            sierra = papara.u4A+xM;
            papara = {};
            papara['appName'] = variable82;
            target = limora.bind(whisks)(sierra, papara);
 2187:
            sierra = michal.type;
            papara = _closure1_slot23;
            papara = papara.REPLY;
            variable96 = undefined;
            if(!(sierra === papara)) { _fun00006_ip = 3530; continue _fun00005 }
 2211:
            variable96 = undefined;
            if(!config) { _fun00006_ip = 3530; continue _fun00005 }
 2219:
            sierra = _closure1_slot12;
            papara = sierra.getMessageByReference;
            config = michal.messageReference;
            config = papara.bind(sierra)(config);
            sierra = config.state;
            papara = _closure1_slot13;
            papara = papara.LOADED;
            if(!(papara !== sierra)) { _fun00006_ip = 2497; continue _fun00005 }
 2262:
            papara = _closure1_slot13;
            papara = papara.NOT_LOADED;
            if(!(papara !== sierra)) { _fun00006_ip = 2414; continue _fun00005 }
 2279:
            papara = _closure1_slot13;
            papara = papara.DELETED;
            if(!(papara !== sierra)) { _fun00006_ip = 2331; continue _fun00005 }
 2293:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 52;
            papara = limora[papara];
            sierra = sierra.bind(oscard)(papara);
            papara = sierra.assertNever;
            papara = papara.bind(sierra)(config);
            variable96 = undefined;
            _fun00006_ip = 3530; continue _fun00005;
 2331:
            papara = {};
            sierra = _closure1_slot22;
            sierra = sierra.SYSTEM;
            papara['state'] = sierra;
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            sierra = 24;
            limora = variable39[sierra];
            limora = variable36.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            sierra = variable39[sierra];
            sierra = variable36.bind(oscard)(sierra);
            sierra = sierra.t;
            sierra = sierra.mE3KJC;
            sierra = limora.bind(whisks)(sierra);
            papara['content'] = sierra;
            variable96 = papara;
            _fun00006_ip = 3530; continue _fun00005;
 2414:
            papara = {};
            sierra = _closure1_slot22;
            sierra = sierra.SYSTEM;
            papara['state'] = sierra;
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            sierra = 24;
            limora = variable39[sierra];
            limora = variable36.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            sierra = variable39[sierra];
            sierra = variable36.bind(oscard)(sierra);
            sierra = sierra.t;
            sierra = sierra.1i+hMj;
            sierra = limora.bind(whisks)(sierra);
            papara['content'] = sierra;
            variable96 = papara;
            _fun00006_ip = 3530; continue _fun00005;
 2497:
            config = config.message;
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 34;
            papara = limora[papara];
            sierra = sierra.bind(oscard)(papara);
            papara = sierra.maybeCreateSingleForwardForMessage;
            limora = papara.bind(sierra)(config);
            sierra = _closure1_slot20;
            papara = sierra.isBlockedForMessage;
            papara = papara.bind(sierra)(config);
            if(papara) { _fun00006_ip = 3452; continue _fun00005 }
 2554:
            sierra = _closure1_slot20;
            papara = sierra.isIgnoredForMessage;
            papara = papara.bind(sierra)(config);
            if(papara) { _fun00006_ip = 3372; continue _fun00005 }
 2575:
            sierra = _closure1_slot31;
            papara = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            papara['message'] = config;
            papara['messageForward'] = limora;
            papara['roleStyle'] = kiloes;
            whisks = {};
            r106 = whisks;
            r105 = option;
            variable36 = copyDataProperties(r106, r105);
            variable36 = 'renderReplies';
            whisks[variable36] = offset;
            papara['options'] = whisks;
            sierra = sierra.bind(oscard)(papara);
            if(!(result != sierra)) { _fun00006_ip = 3289; continue _fun00005 }
 2648:
            papara = 'username';
            papara = papara in sierra;
            if(!papara) { _fun00006_ip = 2819; continue _fun00005 }
 2662:
            whisks = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[equals];
            whisks = whisks.bind(oscard)(papara);
            papara = whisks.getMessageAuthor;
            papara = papara.bind(whisks)(config);
            equals = papara.nick;
            whisks = papara.colorString;
            if(!(result == equals)) { _fun00006_ip = 2717; continue _fun00005 }
 2706:
            papara = config.author;
            equals = papara.username;
 2717:
            variable36 = result != equals;
            papara = undefined;
            if(!variable36) { _fun00006_ip = 2729; continue _fun00005 }
 2726:
            papara = equals;
 2729:
            sierra['username'] = papara;
            if(variable70) { _fun00006_ip = 2759; continue _fun00005 }
 2738:
            papara = _closure1_slot3;
            papara = papara.bind(oscard)(whisks);
            if(!(result == papara)) { _fun00006_ip = 2757; continue _fun00005 }
 2751:
            papara = sierra.colorString;
 2757:
            _fun00006_ip = 2765; continue _fun00005;
 2759:
            papara = sierra.colorString;
 2765:
            sierra['colorString'] = papara;
            whisks = _closure1_slot1;
            equals = _closure1_slot2;
            papara = 51;
            papara = equals[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal, config);
            if(!papara) { _fun00006_ip = 2819; continue _fun00005 }
 2800:
            whisks = sierra.username;
            papara = '@';
            papara = papara + whisks;
            sierra['username'] = papara;
 2819:
            whisks = result == limora;
            papara = undefined;
            if(whisks) { _fun00006_ip = 2839; continue _fun00005 }
 2828:
            limora = limora.messageSnapshot;
            papara = limora.message;
 2839:
            equals = config;
            if(!(result != papara)) { _fun00006_ip = 2849; continue _fun00005 }
 2846:
            equals = papara;
 2849:
            papara = 'stickers';
            papara = papara in equals;
            if(papara) { _fun00006_ip = 2866; continue _fun00005 }
 2860:
            papara = new Array(0);
            _fun00006_ip = 2897; continue _fun00005;
 2866:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            limora = 28;
            limora = variable36[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.getMessageStickers;
            papara = limora.bind(whisks)(equals);
 2897:
            papara = papara.length;
            limora = 0;
            if(!(!(papara > limora))) { _fun00006_ip = 3165; continue _fun00005 }
 2911:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            papara = 29;
            papara = variable36[papara];
            variable39 = whisks.bind(oscard)(papara);
            variable36 = variable39.hasFlag;
            whisks = equals.flags;
            papara = _closure1_slot25;
            papara = papara.IS_VOICE_MESSAGE;
            papara = variable36.bind(variable39)(whisks, papara);
            if(papara) { _fun00006_ip = 3108; continue _fun00005 }
 2964:
            whisks = equals.type;
            papara = _closure1_slot23;
            papara = papara.POLL_RESULT;
            if(!(whisks !== papara)) { _fun00006_ip = 3075; continue _fun00005 }
 2983:
            papara = equals.embeds;
            papara = papara.length;
            if(!(!(papara > limora))) { _fun00006_ip = 3018; continue _fun00005 }
 2998:
            papara = equals.attachments;
            papara = papara.length;
            limora = papara > limora;
            papara = null;
            if(!limora) { _fun00006_ip = 3073; continue _fun00005 }
 3018:
            variable39 = _closure1_slot0;
            variable40 = _closure1_slot2;
            limora = 24;
            whisks = variable40[limora];
            whisks = variable39.bind(oscard)(whisks);
            variable36 = whisks.intl;
            whisks = variable36.string;
            limora = variable40[limora];
            limora = variable39.bind(oscard)(limora);
            limora = limora.t;
            limora = limora.JAKsMz;
            papara = whisks.bind(variable36)(limora);
 3073:
            _fun00006_ip = 3106; continue _fun00005;
 3075:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            limora = 30;
            limora = variable36[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.getPollResultsReplyPreviewMobile;
            papara = limora.bind(whisks)(equals);
 3106:
            _fun00006_ip = 3163; continue _fun00005;
 3108:
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            limora = 24;
            whisks = variable39[limora];
            whisks = variable36.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            limora = variable39[limora];
            limora = variable36.bind(oscard)(limora);
            limora = limora.t;
            limora = limora.6bhHra;
            papara = whisks.bind(equals)(limora);
 3163:
            _fun00006_ip = 3220; continue _fun00005;
 3165:
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            limora = 24;
            whisks = variable39[limora];
            whisks = variable36.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            limora = variable39[limora];
            limora = variable36.bind(oscard)(limora);
            limora = limora.t;
            limora = limora.7K5LmZ;
            papara = whisks.bind(equals)(limora);
 3220:
            limora = config.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(limora === config)) { _fun00006_ip = 3245; continue _fun00005 }
 3239:
            sierra['content'] = papara;
 3245:
            config = {};
            limora = _closure1_slot22;
            limora = limora.LOADED;
            config['state'] = limora;
            config['message'] = sierra;
            variable96 = config;
            if(!(result != papara)) { _fun00006_ip = 3530; continue _fun00005 }
 3275:
            config['systemContent'] = papara;
            variable96 = config;
            _fun00006_ip = 3530; continue _fun00005;
 3289:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            whisks = _closure1_slot0;
            equals = _closure1_slot2;
            papara = 24;
            sierra = equals[papara];
            sierra = whisks.bind(oscard)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            papara = equals[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.1i+hMj;
            papara = sierra.bind(limora)(papara);
            config['content'] = papara;
            variable96 = config;
            _fun00006_ip = 3530; continue _fun00005;
 3372:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            whisks = _closure1_slot0;
            equals = _closure1_slot2;
            papara = 24;
            sierra = equals[papara];
            sierra = whisks.bind(oscard)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            papara = equals[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.G7p6v7;
            papara = sierra.bind(limora)(papara);
            config['content'] = papara;
            variable96 = config;
            _fun00006_ip = 3530; continue _fun00005;
 3452:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            whisks = _closure1_slot0;
            equals = _closure1_slot2;
            papara = 24;
            sierra = equals[papara];
            sierra = whisks.bind(oscard)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            papara = equals[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.XAkOo6;
            papara = sierra.bind(limora)(papara);
            config['content'] = papara;
            variable96 = config;
 3530:
            variable93 = undefined;
            if(!source) { _fun00006_ip = 3560; continue _fun00005 }
 3535:
            source = _closure1_slot29;
            r107 = undefined;
            r106 = michal;
            r105 = kiloes;
            r104 = golfie;
            r103 = output;
            r102 = option;
            variable93 = r107[source](r106, r105, r104, r103, r102, r101);
 3560:
            config = _closure1_slot9;
            source = config.getInteraction;
            variable66 = source.bind(config)(michal);
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 53;
            source = papara[source];
            config = config.bind(oscard)(source);
            source = config.createInteractionStatus;
            variable56 = source.bind(config)(michal, variable66);
            config = result != variable67;
            source = null;
            if(!config) { _fun00006_ip = 3637; continue _fun00005 }
 3616:
            sierra = _closure1_slot19;
            papara = sierra.getMember;
            config = variable76.id;
            source = papara.bind(sierra)(variable67, config);
 3637:
            papara = _closure1_slot0;
            sierra = _closure1_slot2;
            config = 54;
            config = sierra[config];
            papara = papara.bind(oscard)(config);
            config = papara.isMemberCommunicationDisabled;
            variable39 = config.bind(papara)(source);
            config = _closure1_slot4;
            whisks = config.useReducedMotion;
            config = _closure1_slot4;
            variable69 = config.alwaysShowLinkDecorations;
            config = result == ctrled;
            limora = source;
            source = undefined;
            if(config) { _fun00006_ip = 3706; continue _fun00005 }
 3700:
            source = ctrled.parent_id;
 3706:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3756; continue _fun00005 }
 3713:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3756; continue _fun00005 }
 3720:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3756; continue _fun00005 }
 3736:
            papara = _closure1_slot18;
            config = papara.getChannel;
            source = ctrled.parent_id;
            sierra = config.bind(papara)(source);
 3756:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 55;
            source = papara[source];
            papara = config.bind(oscard)(source);
            config = papara.getVisibleConnectionsRole;
            source = {};
            source['guildMember'] = limora;
            source['channel'] = sierra;
            source['onlyChannelConnectionRoles'] = verify;
            variable75 = config.bind(papara)(source);
            source = variable44.attachments;
            source = source.length;
            variable53 = 0;
            variable47 = variable53 !== source;
            source = variable44.embeds;
            source = source.length;
            variable48 = variable53 !== source;
            source = variable41;
            if(!variable41) { _fun00006_ip = 3856; continue _fun00005 }
 3841:
            config = michal.attachments;
            config = config.length;
            source = variable53 === config;
 3856:
            if(!source) { _fun00006_ip = 3863; continue _fun00005 }
 3859:
            source = result != status;
 3863:
            papara = _closure1_slot0;
            config = _closure1_slot2;
            variable45 = 56;
            config = config[variable45];
            config = papara.bind(oscard)(config);
            papara = config.ViewImageDescriptions;
            config = papara.getSetting;
            variable60 = config.bind(papara)();
            variable40 = new Array(0);
            if(source) { _fun00006_ip = 4031; continue _fun00005 }
 3909:
            if(!variable46) { _fun00006_ip = 4092; continue _fun00005 }
 3915:
            papara = _closure1_slot1;
            sierra = _closure1_slot2;
            config = 58;
            config = sierra[config];
            papara = papara.bind(oscard)(config);
            config = {};
            sierra = variable44.attachments;
            config['attachments'] = sierra;
            equals = _closure1_slot21;
            limora = equals.getUploadAttachments;
            sierra = michal.nonce;
            sierra = limora.bind(equals)(sierra);
            config['uploadAttachments'] = sierra;
            config['shouldInlineAttachmentMedia'] = variable42;
            config['gifAutoPlay'] = variable59;
            config['viewImageDescriptions'] = variable60;
            config['useReducedMotion'] = whisks;
            config['shouldObscureSpoiler'] = variable63;
            sierra = record.embedBackgroundColor;
            config['themedBackgroundColor'] = sierra;
            config['shouldObscureExplicitMedia'] = variable62;
            config['shouldAgeVerify'] = variable61;
            config['colors'] = record;
            variable40 = papara.bind(oscard)(config);
            _fun00006_ip = 4092; continue _fun00005;
 4031:
            papara = _closure1_slot1;
            sierra = _closure1_slot2;
            config = 57;
            config = sierra[config];
            papara = papara.bind(oscard)(config);
            config = {};
            config['uploaderFile'] = status;
            sierra = michal.state;
            status = _closure1_slot24;
            status = status.SEND_FAILED;
            status = sierra === status;
            config['isFailedMessage'] = status;
            config['shouldInlineAttachmentMedia'] = variable42;
            variable40 = papara.bind(oscard)(config);
 4092:
            if(!source) { _fun00006_ip = 4114; continue _fun00005 }
 4095:
            config = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(config === source)) { _fun00006_ip = 4154; continue _fun00005 }
 4114:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 59;
            source = papara[source];
            papara = config.bind(oscard)(source);
            config = papara.calendarFormat;
            source = michal.timestamp;
            variable72 = config.bind(papara)(source, verify);
            _fun00006_ip = 4209; continue _fun00005;
 4154:
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            config = sierra[source];
            config = status.bind(oscard)(config);
            papara = config.intl;
            config = papara.string;
            source = sierra[source];
            source = status.bind(oscard)(source);
            source = source.t;
            source = source.yXY+5O;
            variable72 = config.bind(papara)(source);
 4209:
            config = _closure1_slot17;
            source = config.getId;
            variable36 = source.bind(config)();
            source = michal.isUnsupported;
            variable68 = target;
            if(!source) { _fun00006_ip = 4292; continue _fun00005 }
 4235:
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            config = sierra[source];
            config = status.bind(oscard)(config);
            papara = config.intl;
            config = papara.string;
            source = sierra[source];
            source = status.bind(oscard)(source);
            source = source.t;
            source = source.sWi5ER;
            variable68 = config.bind(papara)(source);
 4292:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4320; continue _fun00005 }
 4308:
            config = !golfie;
            if(!config) { _fun00006_ip = 4317; continue _fun00005 }
 4314:
            config = entity;
 4317:
            source = config;
 4320:
            if(source) { _fun00006_ip = 4341; continue _fun00005 }
 4323:
            config = result != target;
            if(!config) { _fun00006_ip = 4338; continue _fun00005 }
 4330:
            papara = '';
            config = papara !== target;
 4338:
            source = config;
 4341:
            if(source) { _fun00006_ip = 4375; continue _fun00005 }
 4344:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 30;
            source = papara[source];
            config = config.bind(oscard)(source);
            source = config.getPollReplyPreview;
            variable68 = source.bind(config)(michal);
 4375:
            source = undefined;
            if(!entity) { _fun00006_ip = 4419; continue _fun00005 }
 4380:
            config = _closure1_slot1;
            papara = _closure1_slot2;
            entity = 60;
            entity = papara[entity];
            config = config.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable79;
            source = config.bind(oscard)(michal, oscard, entity);
 4419:
            config = _closure1_slot0;
            entity = _closure1_slot2;
            variable97 = 61;
            entity = entity[variable97];
            target = config.bind(oscard)(entity);
            papara = target.shouldDisplayGuildTag;
            config = variable76.id;
            status = result != variable67;
            entity = undefined;
            if(!status) { _fun00006_ip = 4462; continue _fun00005 }
 4459:
            entity = variable67;
 4462:
            entity = papara.bind(target)(config, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4595; continue _fun00005 }
 4477:
            status = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable97];
            sierra = status.bind(oscard)(entity);
            status = sierra.getUserPrimaryGuild;
            entity = variable76.primaryGuild;
            limora = status.bind(sierra)(entity);
            sierra = limora.guildId;
            status = limora.tag;
            entity = limora.guildId;
            equals = result != entity;
            entity = undefined;
            if(!equals) { _fun00006_ip = 4586; continue _fun00005 }
 4535:
            variable94 = _closure1_slot0;
            equals = _closure1_slot2;
            equals = equals[variable97];
            variable98 = variable94.bind(oscard)(equals);
            variable97 = variable98.getGuildTagBadgeUrl;
            variable94 = limora.guildId;
            equals = limora.badge;
            limora = _closure1_slot27;
            limora = limora.SIZE_12;
            entity = variable97.bind(variable98)(variable94, equals, limora);
 4586:
            config = entity;
            target = sierra;
            papara = status;
 4595:
            status = _closure1_slot0;
            entity = _closure1_slot2;
            variable98 = 29;
            entity = entity[variable98];
            limora = status.bind(oscard)(entity);
            sierra = limora.hasFlag;
            entity = michal;
            if(!(result != variable44)) { _fun00006_ip = 4631; continue _fun00005 }
 4628:
            entity = variable44;
 4631:
            status = entity.flags;
            entity = _closure1_slot25;
            entity = entity.IS_VOICE_MESSAGE;
            status = sierra.bind(limora)(status, entity);
            entity = {};
            entity['currentUserId'] = variable36;
            entity['message'] = michal;
            entity['theme'] = update;
            entity['referralSenderMobileXPEnabled'] = vacuum;
            variable97 = entity.currentUserId;
            variable94 = entity.message;
            equals = entity.theme;
            vacuum = entity.referralSenderMobileXPEnabled;
            limora = variable94.referralTrialOfferId;
            sierra = variable94.type;
            entity = _closure1_slot23;
            entity = entity.PREMIUM_REFERRAL;
            if(!(sierra === entity)) { _fun00006_ip = 4890; continue _fun00005 }
 4724:
            if(!(result != limora)) { _fun00006_ip = 4890; continue _fun00005 }
 4731:
            sierra = _closure1_slot11;
            entity = sierra.getRelevantUserTrialOffer;
            sierra = entity.bind(sierra)(limora);
            entity = result != sierra;
            if(!entity) { _fun00006_ip = 4772; continue _fun00005 }
 4753:
            variable99 = result == sierra;
            limora = undefined;
            if(variable99) { _fun00006_ip = 4768; continue _fun00005 }
 4762:
            limora = sierra.user_id;
 4768:
            entity = result != limora;
 4772:
            if(!entity) { _fun00006_ip = 4785; continue _fun00005 }
 4775:
            sierra = sierra.user_id;
            entity = sierra === variable97;
 4785:
            if(entity) { _fun00006_ip = 4840; continue _fun00005 }
 4788:
            if(!vacuum) { _fun00006_ip = 4794; continue _fun00005 }
 4791:
            if(!entity) { _fun00006_ip = 4840; continue _fun00005 }
 4794:
            entity = {};
            entity['referralTrialOfferDataUpdated'] = oscard;
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            vacuum = 21;
            vacuum = limora[vacuum];
            sierra = sierra.bind(oscard)(vacuum);
            vacuum = sierra.createReferralTrialEmbed;
            vacuum = vacuum.bind(sierra)(variable94, equals);
            entity['referralTrialOfferData'] = vacuum;
            _fun00006_ip = 4888; continue _fun00005;
 4840:
            vacuum = {};
            limora = _closure1_slot0;
            variable99 = _closure1_slot2;
            sierra = 21;
            sierra = variable99[sierra];
            limora = limora.bind(oscard)(sierra);
            sierra = limora.createReferralTrialEmbedRedeemable;
            sierra = sierra.bind(limora)(variable94, equals, variable97);
            vacuum['referralTrialOfferDataUpdated'] = sierra;
            vacuum['referralTrialOfferData'] = oscard;
            entity = vacuum;
 4888:
            _fun00006_ip = 4894; continue _fun00005;
 4890:
            entity = _closure1_slot28;
 4894:
            sierra = entity.referralTrialOfferDataUpdated;
            limora = entity.referralTrialOfferData;
            variable94 = _closure1_slot5;
            vacuum = variable94.getApplication;
            variable97 = michal.applicationId;
            variable99 = result != variable97;
            equals = '';
            entity = equals;
            if(!variable99) { _fun00006_ip = 4938; continue _fun00005 }
 4935:
            entity = variable97;
 4938:
            entity = vacuum.bind(variable94)(entity);
            variable94 = result != entity;
            if(!variable94) { _fun00006_ip = 4994; continue _fun00005 }
 4950:
            variable97 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable98];
            variable99 = variable97.bind(oscard)(vacuum);
            variable98 = variable99.hasFlag;
            variable97 = michal.flags;
            vacuum = _closure1_slot25;
            vacuum = vacuum.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            variable94 = variable98.bind(variable99)(variable97, vacuum);
 4994:
            vacuum = undefined;
            if(!variable94) { _fun00006_ip = 5004; continue _fun00005 }
 4999:
            vacuum = entity.id;
 5004:
            entity = {};
            variable94 = michal.id;
            entity['id'] = variable94;
            variable94 = michal.channel_id;
            entity['channelId'] = variable94;
            variable97 = result != variable67;
            variable94 = undefined;
            if(!variable97) { _fun00006_ip = 5036; continue _fun00005 }
 5033:
            variable94 = variable67;
 5036:
            entity['guildId'] = variable94;
            variable94 = michal;
            if(!(result != variable44)) { _fun00006_ip = 5050; continue _fun00005 }
 5047:
            variable94 = variable44;
 5050:
            variable94 = variable94.flags;
            entity['flags'] = variable94;
            variable94 = michal.type;
            entity['type'] = variable94;
            variable94 = michal.nonce;
            if(!(result != variable94)) { _fun00006_ip = 5095; continue _fun00005 }
 5078:
            variable94 = michal.nonce;
            variable97 = 'string';
            variable94 = typeof variable94;
            if(!(variable97 === variable94)) { _fun00006_ip = 5103; continue _fun00005 }
 5095:
            variable94 = michal.nonce;
            _fun00006_ip = 5122; continue _fun00005;
 5103:
            variable97 = global;
            variable98 = variable97.String;
            variable97 = michal.nonce;
            variable94 = variable98.bind(oscard)(variable97);
 5122:
            entity['nonce'] = variable94;
            variable94 = michal.state;
            entity['state'] = variable94;
            entity['reactions'] = echoed;
            variable94 = undefined;
            if(variable55) { _fun00006_ip = 5149; continue _fun00005 }
 5146:
            variable94 = variable96;
 5149:
            entity['referencedMessage'] = variable94;
            entity['threadEmbed'] = variable93;
            variable94 = result != variable95;
            variable93 = undefined;
            if(!variable94) { _fun00006_ip = 5180; continue _fun00005 }
 5168:
            variable94 = variable95.getForwardInfo;
            variable93 = variable94.bind(variable95)();
 5180:
            entity['forwardInfo'] = variable93;
            variable93 = !sequen;
            if(!variable93) { _fun00006_ip = 5199; continue _fun00005 }
 5193:
            variable93 = michal.mentioned;
 5199:
            entity['mentioned'] = variable93;
            variable93 = michal.isEdited;
            variable94 = variable93.bind(michal)();
            variable93 = equals;
            if(!variable94) { _fun00006_ip = 5281; continue _fun00005 }
 5220:
            variable93 = equals;
            if(variable55) { _fun00006_ip = 5281; continue _fun00005 }
 5226:
            variable97 = _closure1_slot0;
            variable98 = _closure1_slot2;
            variable94 = 24;
            variable95 = variable98[variable94];
            variable95 = variable97.bind(oscard)(variable95);
            variable96 = variable95.intl;
            variable95 = variable96.string;
            variable94 = variable98[variable94];
            variable94 = variable97.bind(oscard)(variable94);
            variable94 = variable94.t;
            variable94 = variable94.C8sXIC;
            variable93 = variable95.bind(variable96)(variable94);
 5281:
            entity['edited'] = variable93;
            variable93 = record.editedColor;
            entity['editedColor'] = variable93;
            variable93 = michal.isUnsupported;
            if(variable93) { _fun00006_ip = 5314; continue _fun00005 }
 5306:
            variable93 = record.textColor;
            _fun00006_ip = 5320; continue _fun00005;
 5314:
            variable93 = record.unsupportedColor;
 5320:
            entity['textColor'] = variable93;
            variable93 = record.linkColor;
            entity['linkColor'] = variable93;
            entity['tagText'] = variable92;
            entity['tagVerified'] = variable91;
            entity['tagTextColor'] = variable90;
            entity['tagBackgroundColor'] = variable89;
            entity['tagType'] = variable88;
            entity['tagIconUrl'] = variable87;
            entity['opTagText'] = variable86;
            entity['opTagTextColor'] = variable85;
            entity['opTagBackgroundColor'] = variable84;
            entity['constrainedWidth'] = variable83;
            entity['gifAutoPlay'] = variable59;
            entity['animateEmoji'] = variable79;
            if(!variable70) { _fun00006_ip = 5404; continue _fun00005 }
 5399:
            variable82 = variable76.username;
 5404:
            variable83 = result != variable82;
            variable79 = undefined;
            if(!variable83) { _fun00006_ip = 5416; continue _fun00005 }
 5413:
            variable79 = variable82;
 5416:
            entity['username'] = variable79;
            variable79 = undefined;
            if(variable70) { _fun00006_ip = 5431; continue _fun00005 }
 5425:
            variable79 = variable81.uri;
 5431:
            entity['avatarURL'] = variable79;
            variable79 = undefined;
            if(variable70) { _fun00006_ip = 5444; continue _fun00005 }
 5441:
            variable79 = variable80;
 5444:
            entity['avatarDecorationURL'] = variable79;
            variable76 = variable76.id;
            entity['authorId'] = variable76;
            if(variable70) { _fun00006_ip = 5491; continue _fun00005 }
 5462:
            variable76 = 'username';
            if(!(variable76 === kiloes)) { _fun00006_ip = 5491; continue _fun00005 }
 5470:
            variable76 = _closure1_slot3;
            variable76 = variable76.bind(oscard)(variable74);
            if(!(result == variable76)) { _fun00006_ip = 5489; continue _fun00005 }
 5483:
            variable76 = record.defaultUsernameColor;
 5489:
            _fun00006_ip = 5497; continue _fun00005;
 5491:
            variable76 = record.defaultUsernameColor;
 5497:
            entity['usernameColor'] = variable76;
            variable76 = null;
            if(variable70) { _fun00006_ip = 5531; continue _fun00005 }
 5507:
            variable79 = _closure1_slot3;
            variable80 = variable79.bind(oscard)(variable74);
            variable81 = result != variable80;
            variable79 = null;
            if(!variable81) { _fun00006_ip = 5528; continue _fun00005 }
 5525:
            variable79 = variable80;
 5528:
            variable76 = variable79;
 5531:
            entity['roleColor'] = variable76;
            variable76 = null;
            if(!variable77) { _fun00006_ip = 5656; continue _fun00005 }
 5541:
            variable76 = null;
            if(variable70) { _fun00006_ip = 5656; continue _fun00005 }
 5546:
            variable77 = result != variable78;
            variable76 = null;
            if(!variable77) { _fun00006_ip = 5656; continue _fun00005 }
 5555:
            variable77 = {};
            variable80 = _closure1_slot3;
            variable79 = variable78.primaryColor;
            variable80 = variable80.bind(oscard)(variable79);
            variable81 = result != variable80;
            variable79 = null;
            if(!variable81) { _fun00006_ip = 5584; continue _fun00005 }
 5581:
            variable79 = variable80;
 5584:
            variable77['primaryColor'] = variable79;
            variable80 = _closure1_slot3;
            variable79 = variable78.secondaryColor;
            variable80 = variable80.bind(oscard)(variable79);
            variable81 = result != variable80;
            variable79 = null;
            if(!variable81) { _fun00006_ip = 5616; continue _fun00005 }
 5613:
            variable79 = variable80;
 5616:
            variable77['secondaryColor'] = variable79;
            variable79 = _closure1_slot3;
            variable78 = variable78.tertiaryColor;
            variable79 = variable79.bind(oscard)(variable78);
            variable80 = result != variable79;
            variable78 = null;
            if(!variable80) { _fun00006_ip = 5648; continue _fun00005 }
 5645:
            variable78 = variable79;
 5648:
            variable77['tertiaryColor'] = variable78;
            variable76 = variable77;
 5656:
            entity['roleColors'] = variable76;
            variable76 = 'dot';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5676; continue _fun00005 }
 5672:
            variable76 = result != variable74;
 5676:
            entity['shouldShowRoleDot'] = variable76;
            variable76 = 'username';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5696; continue _fun00005 }
 5692:
            variable76 = result != variable74;
 5696:
            entity['shouldShowRoleOnName'] = variable76;
            entity['showLinkDecorations'] = variable69;
            if(variable70) { _fun00006_ip = 5730; continue _fun00005 }
 5709:
            variable69 = _closure1_slot3;
            variable69 = variable69.bind(oscard)(variable74);
            if(!(result == variable69)) { _fun00006_ip = 5728; continue _fun00005 }
 5722:
            variable69 = record.defaultUsernameColor;
 5728:
            _fun00006_ip = 5736; continue _fun00005;
 5730:
            variable69 = record.defaultUsernameColor;
 5736:
            entity['colorString'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5749; continue _fun00005 }
 5746:
            variable69 = variable73;
 5749:
            entity['roleIcon'] = variable69;
            variable73 = result != variable75;
            variable69 = undefined;
            if(!variable73) { _fun00006_ip = 5794; continue _fun00005 }
 5763:
            variable74 = _closure1_slot0;
            variable76 = _closure1_slot2;
            variable73 = 62;
            variable73 = variable76[variable73];
            variable74 = variable74.bind(oscard)(variable73);
            variable73 = variable74.createConnectionsRoleTag;
            variable69 = variable73.bind(variable74)(variable75);
 5794:
            entity['connectionsRoleTag'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5809; continue _fun00005 }
 5806:
            variable69 = variable72;
 5809:
            entity['timestamp'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5825; continue _fun00005 }
 5819:
            variable69 = record.timestampColor;
 5825:
            entity['timestampColor'] = variable69;
            entity['content'] = variable68;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable55;
            variable68 = undefined;
            if(!(oscard !== variable71)) { _fun00006_ip = 5883; continue _fun00005 }
 5850:
            variable70 = _closure1_slot0;
            variable72 = _closure1_slot2;
            variable69 = 63;
            variable69 = variable72[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createSurveyIndication;
            variable68 = variable69.bind(variable70)(michal, update, variable71);
 5883:
            entity['surveyIndication'] = variable68;
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable68 = 64;
            variable68 = variable70[variable68];
            variable69 = variable69.bind(oscard)(variable68);
            variable68 = variable69.createEphemeralIndication;
            variable68 = variable68.bind(variable69)(michal);
            entity['ephemeralIndication'] = variable68;
            entity['interactionStatus'] = variable56;
            variable56 = undefined;
            if(!variable58) { _fun00006_ip = 5989; continue _fun00005 }
 5938:
            variable68 = _closure1_slot0;
            variable69 = _closure1_slot2;
            variable58 = 65;
            variable58 = variable69[variable58];
            variable69 = variable68.bind(oscard)(variable58);
            variable68 = variable69.createExecutedCommand;
            r102 = record.defaultUsernameColor;
            r107 = variable69;
            r106 = michal;
            r105 = ctrled;
            r104 = kiloes;
            r103 = update;
            variable56 = r107[variable68](r106, r105, r104, r103, r102, r101);
 5989:
            entity['executedCommand'] = variable56;
            variable56 = variable44.components;
            variable56 = variable56.length;
            variable58 = variable56 > variable53;
            variable56 = undefined;
            if(!variable58) { _fun00006_ip = 6100; continue _fun00005 }
 6016:
            variable56 = undefined;
            if(!variable57) { _fun00006_ip = 6100; continue _fun00005 }
 6021:
            variable58 = _closure1_slot1;
            variable68 = _closure1_slot2;
            variable57 = 66;
            variable57 = variable68[variable57];
            variable58 = variable58.bind(oscard)(variable57);
            variable57 = {};
            variable57['message'] = michal;
            variable57['guildId'] = variable67;
            variable57['interaction'] = variable66;
            variable57['shouldDisableInteractiveComponents'] = variable65;
            variable57['shouldShowMedia'] = variable64;
            variable57['shouldObscureSpoiler'] = variable63;
            variable57['shouldObscureExplicitMedia'] = variable62;
            variable57['shouldAgeVerify'] = variable61;
            variable57['shouldShowMosaicMediaDescriptions'] = variable60;
            variable57['shouldAutoPlayGifs'] = variable59;
            variable57['colors'] = record;
            variable56 = variable58.bind(oscard)(variable57);
 6100:
            entity['components'] = variable56;
            variable56 = 0;
            if(variable55) { _fun00006_ip = 6116; continue _fun00005 }
 6110:
            variable56 = record.feedbackColor;
 6116:
            entity['feedbackColor'] = variable56;
            variable53 = 0;
            if(variable55) { _fun00006_ip = 6132; continue _fun00005 }
 6126:
            variable53 = record.highlightColor;
 6132:
            entity['highlightColor'] = variable53;
            variable55 = result != variable54;
            variable53 = undefined;
            if(!variable55) { _fun00006_ip = 6149; continue _fun00005 }
 6146:
            variable53 = variable54;
 6149:
            entity['embeds'] = variable53;
            if(variable52) { _fun00006_ip = 6163; continue _fun00005 }
 6157:
            variable52 = new Array(0);
            _fun00006_ip = 6195; continue _fun00005;
 6163:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 67;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createGiftCodeEmbed;
            variable52 = variable53.bind(variable54)(michal, update);
 6195:
            entity['giftCodes'] = variable52;
            if(variable49) { _fun00006_ip = 6209; continue _fun00005 }
 6203:
            variable49 = new Array(0);
            _fun00006_ip = 6242; continue _fun00005;
 6209:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 68;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createCodedLinkEmbeds;
            variable49 = variable52.bind(variable53)(michal, variable44, update);
 6242:
            entity['codedLinks'] = variable49;
            variable49 = undefined;
            if(!variable51) { _fun00006_ip = 6284; continue _fun00005 }
 6252:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 69;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInstanceEmbed;
            variable49 = variable51.bind(variable52)(michal, update);
 6284:
            entity['activityInstanceEmbed'] = variable49;
            variable49 = undefined;
            if(!variable50) { _fun00006_ip = 6328; continue _fun00005 }
 6296:
            variable51 = _closure1_slot0;
            variable52 = _closure1_slot2;
            variable50 = 70;
            variable50 = variable52[variable50];
            variable51 = variable51.bind(oscard)(variable50);
            variable50 = variable51.createActivityInviteEmbed;
            variable49 = variable50.bind(variable51)(michal, update);
 6328:
            entity['activityInviteEmbed'] = variable49;
            if(!variable42) { _fun00006_ip = 6359; continue _fun00005 }
 6338:
            if(!variable46) { _fun00006_ip = 6350; continue _fun00005 }
 6341:
            if(variable47) { _fun00006_ip = 6347; continue _fun00005 }
 6344:
            variable47 = variable48;
 6347:
            variable46 = variable47;
 6350:
            if(variable46) { _fun00006_ip = 6356; continue _fun00005 }
 6353:
            variable46 = variable41;
 6356:
            variable42 = variable46;
 6359:
            entity['useAttachmentGridLayout'] = variable42;
            entity['useAttachmentUploadPreview'] = variable41;
            entity['attachments'] = variable40;
            variable46 = 1;
            variable40 = variable46;
            if(!variable41) { _fun00006_ip = 6415; continue _fun00005 }
 6383:
            variable42 = michal.state;
            variable41 = _closure1_slot24;
            variable41 = variable41.SEND_FAILED;
            variable40 = variable46;
            if(!(variable42 === variable41)) { _fun00006_ip = 6415; continue _fun00005 }
 6405:
            variable40 = 0.2;
 6415:
            entity['attachmentsOpacity'] = variable40;
            variable41 = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 71;
            variable40 = variable42[variable40];
            variable41 = variable41.bind(oscard)(variable40);
            variable40 = {};
            variable40['message'] = variable44;
            variable44 = _closure1_slot0;
            variable42 = variable42[variable45];
            variable42 = variable44.bind(oscard)(variable42);
            variable44 = variable42.AnimateStickers;
            variable42 = variable44.getSetting;
            variable42 = variable42.bind(variable44)();
            variable40['animateStickersSetting'] = variable42;
            variable42 = michal.id;
            variable42 = variable42 === variable43;
            variable40['isUserInteracting'] = variable42;
            variable40 = variable41.bind(oscard)(variable40);
            entity['stickers'] = variable40;
            if(!variable38) { _fun00006_ip = 6510; continue _fun00005 }
 6507:
            variable38 = variable39;
 6510:
            entity['communicationDisabled'] = variable38;
            entity['threadStarterMessageHeader'] = quebec;
            variable38 = result == ctrled;
            if(variable38) { _fun00006_ip = 6540; continue _fun00005 }
 6527:
            quebec = ctrled.isForumPost;
            quebec = quebec.bind(ctrled)();
            variable38 = !quebec;
 6540:
            quebec = !variable38;
            if(variable38) { _fun00006_ip = 6560; continue _fun00005 }
 6546:
            variable39 = michal.id;
            variable38 = michal.channel_id;
            quebec = variable39 === variable38;
 6560:
            entity['isFirstForumPostMessage'] = quebec;
            variable38 = result != ctrled;
            quebec = undefined;
            if(!variable38) { _fun00006_ip = 6604; continue _fun00005 }
 6574:
            variable38 = ctrled.isForumPost;
            variable38 = variable38.bind(ctrled)();
            quebec = undefined;
            if(!variable38) { _fun00006_ip = 6604; continue _fun00005 }
 6589:
            quebec = undefined;
            if(!variable37) { _fun00006_ip = 6604; continue _fun00005 }
 6594:
            variable37 = _closure1_slot30;
            quebec = variable37.bind(oscard)(michal, ctrled);
 6604:
            entity['postActions'] = quebec;
            quebec = michal.author;
            quebec = quebec.id;
            quebec = quebec === variable36;
            entity['isCurrentUserMessageAuthor'] = quebec;
            quebec = _closure1_slot6;
            quebec = quebec.gradientPreset;
            quebec = result != quebec;
            entity['usingGradientTheme'] = quebec;
            variable36 = _closure1_slot0;
            variable39 = _closure1_slot2;
            quebec = 25;
            variable37 = variable39[quebec];
            variable41 = variable36.bind(oscard)(variable37);
            variable40 = variable41.getAssetUriForEmbed;
            variable38 = _closure1_slot1;
            variable37 = 72;
            variable37 = variable39[variable37];
            variable37 = variable38.bind(oscard)(variable37);
            variable37 = variable40.bind(variable41)(variable37);
            entity['swipeToReplyIconUrl'] = variable37;
            quebec = variable39[quebec];
            variable37 = variable36.bind(oscard)(quebec);
            variable36 = variable37.getAssetUriForEmbed;
            quebec = 73;
            quebec = variable39[quebec];
            quebec = variable38.bind(oscard)(quebec);
            quebec = variable36.bind(variable37)(quebec);
            entity['swipeToEditIconUrl'] = quebec;
            entity['showRemixButton'] = offset;
            entity['remixTitle'] = equals;
            equals = record.remixButtonIconColor;
            entity['remixButtonIconColor'] = equals;
            equals = record.remixButtonBackgroundColor;
            entity['remixButtonBackgroundColor'] = equals;
            entity['referralTrialOffer'] = limora;
            entity['referralTrialOfferInfo'] = sierra;
            if(cntext) { _fun00006_ip = 6798; continue _fun00005 }
 6792:
            cntext = new Array(0);
            _fun00006_ip = 6830; continue _fun00005;
 6798:
            limora = _closure1_slot0;
            equals = _closure1_slot2;
            sierra = 74;
            sierra = equals[sierra];
            limora = limora.bind(oscard)(sierra);
            sierra = limora.createPostPreviewEmbeds;
            cntext = sierra.bind(limora)(michal, whisks);
 6830:
            entity['postPreviewEmbeds'] = cntext;
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            cntext = 24;
            whisks = limora[cntext];
            whisks = sierra.bind(oscard)(whisks);
            quebec = whisks.intl;
            equals = quebec.string;
            whisks = limora[cntext];
            whisks = sierra.bind(oscard)(whisks);
            whisks = whisks.t;
            whisks = whisks.2aXnfX;
            whisks = equals.bind(quebec)(whisks);
            entity['obscureLearnMoreLabel'] = whisks;
            whisks = 75;
            whisks = limora[whisks];
            equals = sierra.bind(oscard)(whisks);
            whisks = equals.createSafetyPolicyNoticeEmbed;
            whisks = whisks.bind(equals)(michal);
            entity['safetyPolicyNoticeEmbed'] = whisks;
            entity['pollData'] = source;
            source = 76;
            source = limora[source];
            whisks = sierra.bind(oscard)(source);
            source = whisks.createSafetySystemNotificationEmbed;
            source = source.bind(whisks)(michal);
            entity['safetySystemNotificationEmbed'] = source;
            source = 77;
            source = limora[source];
            whisks = sierra.bind(oscard)(source);
            limora = whisks.createCtaButton;
            sierra = michal.id;
            source = michal.channel_id;
            source = limora.bind(whisks)(sierra, source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!status) { _fun00006_ip = 7015; continue _fun00005 }
 7009:
            source = record.embedBackgroundColor;
 7015:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            status = 78;
            status = source[status];
            sierra = record.bind(oscard)(status);
            status = sierra.createMessageAccessibilityActions;
            status = status.bind(sierra)(michal, ctrled);
            entity['accessibilityActions'] = status;
            entity['clanTagGuildId'] = target;
            entity['clanTag'] = papara;
            entity['clanBadgeUrl'] = config;
            entity['isFirst'] = backup;
            entity['gameApplicationId'] = vacuum;
            vacuum = source[cntext];
            vacuum = record.bind(oscard)(vacuum);
            papara = vacuum.intl;
            config = papara.string;
            vacuum = source[cntext];
            vacuum = record.bind(oscard)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.5IEsGx;
            vacuum = config.bind(papara)(vacuum);
            entity['replyAccessibilityLabel'] = vacuum;
            vacuum = source[cntext];
            vacuum = record.bind(oscard)(vacuum);
            papara = vacuum.intl;
            config = papara.string;
            vacuum = source[cntext];
            vacuum = record.bind(oscard)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.I3ltXF;
            vacuum = config.bind(papara)(vacuum);
            entity['forwardAccessibilityLabel'] = vacuum;
            vacuum = source[cntext];
            vacuum = record.bind(oscard)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = source[cntext];
            source = record.bind(oscard)(source);
            source = source.t;
            source = source.rBIGBA;
            source = vacuum.bind(config)(source);
            entity['threadAccessibilityLabel'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 7276; continue _fun00005 }
 7243:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7276:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 7322; continue _fun00005 }
 7289:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7322:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 7335; continue _fun00005 }
 7332:
            report = tangon;
 7335:
            if(!report) { _fun00006_ip = 7371; continue _fun00005 }
 7338:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 79;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7371:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7413; continue _fun00005 }
 7381:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 79;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7413:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7434; continue _fun00005 }
 7429:
            report = ctrled.type;
 7434:
            tangon = _closure1_slot26;
            tangon = tangon.GUILD_ANNOUNCEMENT;
            tangon = report === tangon;
            entity['isAnnouncementChannel'] = tangon;
            report = _closure1_slot0;
            source = _closure1_slot2;
            tangon = 79;
            tangon = source[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.isInMessageShortcutsExperiment;
            tangon = tangon.bind(report)();
            entity['shortcutsEnabled'] = tangon;
            return entity;
 7492:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7589; continue _fun00005 }
 7511:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 37;
            entity = report[entity];
            report = tangon.bind(oscard)(entity);
            tangon = report.createSystemMessageContent;
            entity = {};
            entity['message'] = michal;
            entity['theme'] = update;
            entity['reactions'] = echoed;
            entity['roleStyle'] = kiloes;
            source = result == ctrled;
            result = undefined;
            if(source) { _fun00006_ip = 7577; continue _fun00005 }
 7567:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7577:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7683; continue _fun00005;
 7589:
            tangon = {};
            report = _closure1_slot29;
            r107 = undefined;
            r106 = michal;
            r105 = kiloes;
            r104 = golfie;
            r103 = output;
            r102 = option;
            report = r107[report](r106, r105, r104, r103, r102, r101);
            tangon['threadEmbed'] = report;
            output = _closure1_slot0;
            result = _closure1_slot2;
            report = 37;
            report = result[report];
            result = output.bind(oscard)(report);
            output = result.createSystemMessageContent;
            report = {};
            report['message'] = michal;
            report['theme'] = update;
            report['reactions'] = echoed;
            report['roleStyle'] = kiloes;
            r105 = output.bind(result)(report);
            r106 = tangon;
            report = copyDataProperties(r106, r105);
            entity = tangon;
 7683:
            return entity;
 7685:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7752; continue _fun00005 }
 7697:
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            entity = 24;
            report = echoed[entity];
            report = result.bind(oscard)(report);
            output = report.intl;
            report = output.string;
            entity = echoed[entity];
            entity = result.bind(oscard)(entity);
            entity = entity.t;
            entity = entity.uBid4u;
            tangon = report.bind(output)(entity);
 7752:
            entity = {};
            report = _closure1_slot31;
            zuuluu = {};
            zuuluu['message'] = sizing;
            zuuluu['roleStyle'] = kiloes;
            zuuluu['isFirst'] = backup;
            zuuluu['isEditing'] = foxtra;
            zuuluu['canShowImages'] = romeon;
            zuuluu['isSystemDM'] = yankee;
            zuuluu['isInlineReplyPreview'] = golfie;
            golfie = {};
            r106 = golfie;
            r105 = option;
            option = copyDataProperties(r106, r105);
            option = 'renderThreadEmbeds';
            golfie[option] = offset;
            option = 'renderReactions';
            golfie[option] = offset;
            option = 'renderShortcuts';
            golfie[option] = offset;
            option = 'shouldDisableInteractiveComponents';
            golfie[option] = verify;
            zuuluu['options'] = golfie;
            r105 = report.bind(oscard)(zuuluu);
            r106 = entity;
            zuuluu = copyDataProperties(r106, r105);
            zuuluu = 'threadStarterMessageHeader';
            entity[zuuluu] = tangon;
            zuuluu = michal.id;
            michal = 'id';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot31 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.processColor;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    verify = oscard[tangon];
    verify = option.bind(entity)(verify);
    var _closure1_slot12 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReferencedMessageState;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot17 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot19 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot21 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReferencedMessageRowState;
    var _closure1_slot22 = tangon;
    tangon = 19;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.MessageTypes;
    var _closure1_slot23 = option;
    option = tangon.MessageStates;
    var _closure1_slot24 = option;
    option = tangon.MessageFlags;
    var _closure1_slot25 = option;
    tangon = tangon.ChannelTypes;
    var _closure1_slot26 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildTagBadgeSize;
    var _closure1_slot27 = tangon;
    tangon = {};
    tangon['referralTrialOfferDataUpdated'] = entity;
    tangon['referralTrialOfferData'] = entity;
    var _closure1_slot28 = tangon;
    tangon = 80;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();