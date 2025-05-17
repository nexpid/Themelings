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
            variable78 = option.animateEmoji;
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
            if(!(result == update)) { _fun00006_ip = 279; continue _fun00005 }
 267:
            zuuluu = _closure1_slot16;
            update = zuuluu.theme;
 279:
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
            if(!variable64) { _fun00006_ip = 373; continue _fun00005 }
 370:
            cntext = echoed;
 373:
            if(!cntext) { _fun00006_ip = 395; continue _fun00005 }
 376:
            ctrled = michal.type;
            echoed = _closure1_slot23;
            echoed = echoed.CUSTOM_GIFT;
            cntext = ctrled !== echoed;
 395:
            equals = variable64;
            if(!variable64) { _fun00006_ip = 404; continue _fun00005 }
 401:
            equals = output;
 404:
            variable42 = variable64;
            if(!variable42) { _fun00006_ip = 413; continue _fun00005 }
 410:
            variable42 = sizing;
 413:
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
            if(echoed) { _fun00006_ip = 506; continue _fun00005 }
 496:
            echoed = ctrled.getGuildId;
            sizing = echoed.bind(ctrled)();
 506:
            target = _closure1_slot0;
            status = _closure1_slot2;
            echoed = 33;
            echoed = status[echoed];
            target = target.bind(oscard)(echoed);
            echoed = target.canUseEnhancedRoleColors;
            variable77 = echoed.bind(target)(sizing, papara);
            variable67 = sizing;
            if(!(result == variable95)) { _fun00006_ip = 576; continue _fun00005 }
 545:
            echoed = _closure1_slot0;
            target = _closure1_slot2;
            sizing = 34;
            sizing = target[sizing];
            echoed = echoed.bind(oscard)(sizing);
            sizing = echoed.maybeCreateSingleForwardForMessage;
            variable95 = sizing.bind(echoed)(michal);
 576:
            variable44 = michal;
            if(!(result != variable95)) { _fun00006_ip = 594; continue _fun00005 }
 583:
            sizing = variable95.messageSnapshot;
            variable44 = sizing.message;
 594:
            echoed = new Array(0);
            if(!report) { _fun00006_ip = 644; continue _fun00005 }
 601:
            target = _closure1_slot1;
            status = _closure1_slot2;
            sizing = 35;
            sizing = status[sizing];
            target = target.bind(oscard)(sizing);
            sizing = {};
            status = michal.reactions;
            sizing['reactions'] = status;
            sizing['animateEmoji'] = variable78;
            echoed = target.bind(oscard)(sizing);
 644:
            status = michal.type;
            sizing = _closure1_slot23;
            target = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(status === target)) { _fun00006_ip = 715; continue _fun00005 }
 665:
            sierra = _closure1_slot12;
            status = sierra.getMessageByReference;
            target = michal.messageReference;
            status = status.bind(sierra)(target);
            whisks = status.state;
            target = _closure1_slot13;
            sierra = target.LOADED;
            target = null;
            if(!(whisks === sierra)) { _fun00006_ip = 712; continue _fun00005 }
 707:
            target = status.message;
 712:
            sizing = target;
 715:
            if(!(result == sizing)) { _fun00006_ip = 7706; continue _fun00005 }
 722:
            status = _closure1_slot1;
            sierra = _closure1_slot2;
            target = 36;
            target = sierra[target];
            target = status.bind(oscard)(target);
            target = target.bind(oscard)(michal);
            if(target) { _fun00006_ip = 7515; continue _fun00005 }
 753:
            variable70 = !backup;
            if(variable70) { _fun00006_ip = 762; continue _fun00005 }
 759:
            variable70 = variable55;
 762:
            variable76 = michal.author;
            status = _closure1_slot0;
            sierra = _closure1_slot2;
            target = 38;
            target = sierra[target];
            sierra = status.bind(oscard)(target);
            status = sierra.isMessageNewerThanImprovedMarkdownEpoch;
            whisks = michal.editedTimestamp;
            if(!(result == whisks)) { _fun00006_ip = 810; continue _fun00005 }
 804:
            whisks = michal.timestamp;
 810:
            target = whisks.valueOf;
            target = target.bind(whisks)();
            whisks = status.bind(sierra)(target);
            target = variable44.content;
            if(!(result != target)) { _fun00006_ip = 846; continue _fun00005 }
 833:
            status = variable44.content;
            target = '';
            if(!(target === status)) { _fun00006_ip = 859; continue _fun00005 }
 846:
            status = {};
            status['content'] = oscard;
            status['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 949; continue _fun00005;
 859:
            sierra = _closure1_slot0;
            variable39 = _closure1_slot2;
            target = 39;
            target = variable39[target];
            variable39 = sierra.bind(oscard)(target);
            sierra = variable39.parseMessageMarkup;
            if(variable41) { _fun00006_ip = 900; continue _fun00005 }
 888:
            target = cntext;
            if(!target) { _fun00006_ip = 897; continue _fun00005 }
 894:
            target = equals;
 897:
            variable41 = target;
 900:
            target = result != output;
            if(!target) { _fun00006_ip = 918; continue _fun00005 }
 907:
            variable45 = michal.isFirstMessageInForumPost;
            target = variable45.bind(michal)(output);
 918:
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
 949:
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
            if(!cntext) { _fun00006_ip = 1196; continue _fun00005 }
 1018:
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
 1196:
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
            if(papara) { _fun00006_ip = 1350; continue _fun00005 }
 1340:
            limora = michal.isCommandType;
            papara = limora.bind(michal)();
 1350:
            limora = sierra;
            if(papara) { _fun00006_ip = 1421; continue _fun00005 }
 1356:
            papara = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1367; continue _fun00005 }
 1363:
            papara = new Array(0);
 1367:
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
 1421:
            whisks = _closure1_slot8;
            sierra = whisks.getMessage;
            papara = michal.id;
            sierra = sierra.bind(whisks)(papara);
            variable54 = limora;
            if(!(result != sierra)) { _fun00006_ip = 1520; continue _fun00005 }
 1448:
            papara = limora;
            if(!(result == limora)) { _fun00006_ip = 1459; continue _fun00005 }
 1455:
            papara = new Array(0);
 1459:
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
 1520:
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
            if(!papara) { _fun00006_ip = 1648; continue _fun00005 }
 1609:
            papara = michal.author;
            papara = papara.avatar;
            if(!(result == papara)) { _fun00006_ip = 1648; continue _fun00005 }
 1625:
            variable39 = michal.application;
            variable40 = result == variable39;
            papara = undefined;
            if(variable40) { _fun00006_ip = 1644; continue _fun00005 }
 1639:
            papara = variable39.icon;
 1644:
            if(!(result == papara)) { _fun00006_ip = 1723; continue _fun00005 }
 1648:
            if(!(result != variable47)) { _fun00006_ip = 1656; continue _fun00005 }
 1652:
            if(!(result == variable67)) { _fun00006_ip = 1669; continue _fun00005 }
 1656:
            papara = variable76.getAvatarSource;
            papara = papara.bind(variable76)(oscard);
            _fun00006_ip = 1721; continue _fun00005;
 1669:
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
 1721:
            _fun00006_ip = 1800; continue _fun00005;
 1723:
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
 1800:
            variable81 = sierra.bind(limora)(papara);
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 47;
            papara = limora[papara];
            limora = sierra.bind(oscard)(papara);
            sierra = limora.getAvatarDecorationURL;
            papara = {};
            if(!(result == variable36)) { _fun00006_ip = 1843; continue _fun00005 }
 1837:
            variable36 = variable76.avatarDecoration;
 1843:
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
            if(!papara) { _fun00006_ip = 1979; continue _fun00005 }
 1921:
            papara = result != variable67;
            variable73 = undefined;
            if(!papara) { _fun00006_ip = 1979; continue _fun00005 }
 1930:
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
 1979:
            sierra = michal.hasFlag;
            papara = _closure1_slot25;
            papara = papara.SOURCE_MESSAGE_DELETED;
            papara = sierra.bind(michal)(papara);
            if(!papara) { _fun00006_ip = 2058; continue _fun00005 }
 2003:
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
 2058:
            sierra = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[equals];
            sierra = sierra.bind(oscard)(papara);
            papara = sierra.getMessageAuthor;
            papara = papara.bind(sierra)(michal);
            variable82 = papara.nick;
            variable74 = papara.colorString;
            variable79 = papara.colorStrings;
            sierra = michal.type;
            papara = _closure1_slot23;
            papara = papara.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === papara)) { _fun00006_ip = 2186; continue _fun00005 }
 2123:
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
 2186:
            sierra = michal.type;
            papara = _closure1_slot23;
            papara = papara.REPLY;
            variable96 = undefined;
            if(!(sierra === papara)) { _fun00006_ip = 3636; continue _fun00005 }
 2210:
            variable96 = undefined;
            if(!config) { _fun00006_ip = 3636; continue _fun00005 }
 2218:
            sierra = _closure1_slot12;
            papara = sierra.getMessageByReference;
            config = michal.messageReference;
            config = papara.bind(sierra)(config);
            sierra = config.state;
            papara = _closure1_slot13;
            papara = papara.LOADED;
            if(!(papara !== sierra)) { _fun00006_ip = 2496; continue _fun00005 }
 2261:
            papara = _closure1_slot13;
            papara = papara.NOT_LOADED;
            if(!(papara !== sierra)) { _fun00006_ip = 2413; continue _fun00005 }
 2278:
            papara = _closure1_slot13;
            papara = papara.DELETED;
            if(!(papara !== sierra)) { _fun00006_ip = 2330; continue _fun00005 }
 2292:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 52;
            papara = limora[papara];
            sierra = sierra.bind(oscard)(papara);
            papara = sierra.assertNever;
            papara = papara.bind(sierra)(config);
            variable96 = undefined;
            _fun00006_ip = 3636; continue _fun00005;
 2330:
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
            _fun00006_ip = 3636; continue _fun00005;
 2413:
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
            _fun00006_ip = 3636; continue _fun00005;
 2496:
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
            if(papara) { _fun00006_ip = 3558; continue _fun00005 }
 2553:
            sierra = _closure1_slot20;
            papara = sierra.isIgnoredForMessage;
            papara = papara.bind(sierra)(config);
            if(papara) { _fun00006_ip = 3478; continue _fun00005 }
 2574:
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
            if(!(result != sierra)) { _fun00006_ip = 3395; continue _fun00005 }
 2647:
            papara = 'username';
            papara = papara in sierra;
            if(!papara) { _fun00006_ip = 2818; continue _fun00005 }
 2661:
            whisks = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[equals];
            whisks = whisks.bind(oscard)(papara);
            papara = whisks.getMessageAuthor;
            papara = papara.bind(whisks)(config);
            equals = papara.nick;
            whisks = papara.colorString;
            if(!(result == equals)) { _fun00006_ip = 2716; continue _fun00005 }
 2705:
            papara = config.author;
            equals = papara.username;
 2716:
            variable36 = result != equals;
            papara = undefined;
            if(!variable36) { _fun00006_ip = 2728; continue _fun00005 }
 2725:
            papara = equals;
 2728:
            sierra['username'] = papara;
            if(variable70) { _fun00006_ip = 2758; continue _fun00005 }
 2737:
            papara = _closure1_slot3;
            papara = papara.bind(oscard)(whisks);
            if(!(result == papara)) { _fun00006_ip = 2756; continue _fun00005 }
 2750:
            papara = sierra.colorString;
 2756:
            _fun00006_ip = 2764; continue _fun00005;
 2758:
            papara = sierra.colorString;
 2764:
            sierra['colorString'] = papara;
            whisks = _closure1_slot1;
            equals = _closure1_slot2;
            papara = 51;
            papara = equals[papara];
            papara = whisks.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal, config);
            if(!papara) { _fun00006_ip = 2818; continue _fun00005 }
 2799:
            whisks = sierra.username;
            papara = '@';
            papara = papara + whisks;
            sierra['username'] = papara;
 2818:
            whisks = result == limora;
            papara = undefined;
            if(whisks) { _fun00006_ip = 2838; continue _fun00005 }
 2827:
            limora = limora.messageSnapshot;
            papara = limora.message;
 2838:
            equals = config;
            if(!(result != papara)) { _fun00006_ip = 2848; continue _fun00005 }
 2845:
            equals = papara;
 2848:
            papara = 'stickers';
            papara = papara in equals;
            if(papara) { _fun00006_ip = 2865; continue _fun00005 }
 2859:
            papara = new Array(0);
            _fun00006_ip = 2896; continue _fun00005;
 2865:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            limora = 28;
            limora = variable36[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.getMessageStickers;
            papara = limora.bind(whisks)(equals);
 2896:
            papara = papara.length;
            limora = 0;
            if(!(!(papara > limora))) { _fun00006_ip = 3271; continue _fun00005 }
 2910:
            whisks = _closure1_slot0;
            papara = _closure1_slot2;
            variable36 = 29;
            papara = papara[variable36];
            variable40 = whisks.bind(oscard)(papara);
            variable39 = variable40.hasFlag;
            whisks = equals.flags;
            papara = _closure1_slot25;
            papara = papara.IS_VOICE_MESSAGE;
            papara = variable39.bind(variable40)(whisks, papara);
            if(papara) { _fun00006_ip = 3214; continue _fun00005 }
 2963:
            whisks = equals.type;
            papara = _closure1_slot23;
            papara = papara.POLL_RESULT;
            if(!(whisks !== papara)) { _fun00006_ip = 3181; continue _fun00005 }
 2985:
            whisks = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[variable36];
            variable39 = whisks.bind(oscard)(papara);
            variable36 = variable39.hasFlag;
            whisks = equals.flags;
            papara = _closure1_slot25;
            papara = papara.IS_COMPONENTS_V2;
            papara = variable36.bind(variable39)(whisks, papara);
            if(papara) { _fun00006_ip = 3124; continue _fun00005 }
 3032:
            papara = equals.embeds;
            papara = papara.length;
            if(!(!(papara > limora))) { _fun00006_ip = 3067; continue _fun00005 }
 3047:
            papara = equals.attachments;
            papara = papara.length;
            limora = papara > limora;
            papara = null;
            if(!limora) { _fun00006_ip = 3122; continue _fun00005 }
 3067:
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
 3122:
            _fun00006_ip = 3179; continue _fun00005;
 3124:
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
            limora = limora.Xxm5i4;
            papara = whisks.bind(variable36)(limora);
 3179:
            _fun00006_ip = 3212; continue _fun00005;
 3181:
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            limora = 30;
            limora = variable36[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.getPollResultsReplyPreviewMobile;
            papara = limora.bind(whisks)(equals);
 3212:
            _fun00006_ip = 3269; continue _fun00005;
 3214:
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
 3269:
            _fun00006_ip = 3326; continue _fun00005;
 3271:
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
 3326:
            limora = config.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(limora === config)) { _fun00006_ip = 3351; continue _fun00005 }
 3345:
            sierra['content'] = papara;
 3351:
            config = {};
            limora = _closure1_slot22;
            limora = limora.LOADED;
            config['state'] = limora;
            config['message'] = sierra;
            variable96 = config;
            if(!(result != papara)) { _fun00006_ip = 3636; continue _fun00005 }
 3381:
            config['systemContent'] = papara;
            variable96 = config;
            _fun00006_ip = 3636; continue _fun00005;
 3395:
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
            _fun00006_ip = 3636; continue _fun00005;
 3478:
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
            _fun00006_ip = 3636; continue _fun00005;
 3558:
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
 3636:
            variable93 = undefined;
            if(!source) { _fun00006_ip = 3666; continue _fun00005 }
 3641:
            source = _closure1_slot29;
            r107 = undefined;
            r106 = michal;
            r105 = kiloes;
            r104 = golfie;
            r103 = output;
            r102 = option;
            variable93 = r107[source](r106, r105, r104, r103, r102, r101);
 3666:
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
            if(!config) { _fun00006_ip = 3743; continue _fun00005 }
 3722:
            sierra = _closure1_slot19;
            papara = sierra.getMember;
            config = variable76.id;
            source = papara.bind(sierra)(variable67, config);
 3743:
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
            if(config) { _fun00006_ip = 3812; continue _fun00005 }
 3806:
            source = ctrled.parent_id;
 3812:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3862; continue _fun00005 }
 3819:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3862; continue _fun00005 }
 3826:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3862; continue _fun00005 }
 3842:
            papara = _closure1_slot18;
            config = papara.getChannel;
            source = ctrled.parent_id;
            sierra = config.bind(papara)(source);
 3862:
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
            if(!variable41) { _fun00006_ip = 3962; continue _fun00005 }
 3947:
            config = michal.attachments;
            config = config.length;
            source = variable53 === config;
 3962:
            if(!source) { _fun00006_ip = 3969; continue _fun00005 }
 3965:
            source = result != status;
 3969:
            papara = _closure1_slot0;
            config = _closure1_slot2;
            variable45 = 56;
            config = config[variable45];
            config = papara.bind(oscard)(config);
            papara = config.ViewImageDescriptions;
            config = papara.getSetting;
            variable60 = config.bind(papara)();
            variable40 = new Array(0);
            if(source) { _fun00006_ip = 4137; continue _fun00005 }
 4015:
            if(!variable46) { _fun00006_ip = 4198; continue _fun00005 }
 4021:
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
            _fun00006_ip = 4198; continue _fun00005;
 4137:
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
 4198:
            if(!source) { _fun00006_ip = 4220; continue _fun00005 }
 4201:
            config = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(config === source)) { _fun00006_ip = 4260; continue _fun00005 }
 4220:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 59;
            source = papara[source];
            papara = config.bind(oscard)(source);
            config = papara.calendarFormat;
            source = michal.timestamp;
            variable72 = config.bind(papara)(source, verify);
            _fun00006_ip = 4315; continue _fun00005;
 4260:
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
 4315:
            config = _closure1_slot17;
            source = config.getId;
            variable36 = source.bind(config)();
            source = michal.isUnsupported;
            variable68 = target;
            if(!source) { _fun00006_ip = 4398; continue _fun00005 }
 4341:
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
 4398:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4426; continue _fun00005 }
 4414:
            config = !golfie;
            if(!config) { _fun00006_ip = 4423; continue _fun00005 }
 4420:
            config = entity;
 4423:
            source = config;
 4426:
            if(source) { _fun00006_ip = 4447; continue _fun00005 }
 4429:
            config = result != target;
            if(!config) { _fun00006_ip = 4444; continue _fun00005 }
 4436:
            papara = '';
            config = papara !== target;
 4444:
            source = config;
 4447:
            if(source) { _fun00006_ip = 4481; continue _fun00005 }
 4450:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 30;
            source = papara[source];
            config = config.bind(oscard)(source);
            source = config.getPollReplyPreview;
            variable68 = source.bind(config)(michal);
 4481:
            source = undefined;
            if(!entity) { _fun00006_ip = 4524; continue _fun00005 }
 4486:
            config = _closure1_slot1;
            papara = _closure1_slot2;
            entity = 60;
            entity = papara[entity];
            config = config.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable78;
            source = config.bind(oscard)(michal, oscard, entity);
 4524:
            config = _closure1_slot0;
            entity = _closure1_slot2;
            variable97 = 61;
            entity = entity[variable97];
            target = config.bind(oscard)(entity);
            papara = target.shouldDisplayGuildTag;
            config = variable76.id;
            status = result != variable67;
            entity = undefined;
            if(!status) { _fun00006_ip = 4567; continue _fun00005 }
 4564:
            entity = variable67;
 4567:
            entity = papara.bind(target)(config, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4700; continue _fun00005 }
 4582:
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
            if(!equals) { _fun00006_ip = 4691; continue _fun00005 }
 4640:
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
 4691:
            config = entity;
            target = sierra;
            papara = status;
 4700:
            status = _closure1_slot0;
            entity = _closure1_slot2;
            variable98 = 29;
            entity = entity[variable98];
            limora = status.bind(oscard)(entity);
            sierra = limora.hasFlag;
            entity = michal;
            if(!(result != variable44)) { _fun00006_ip = 4736; continue _fun00005 }
 4733:
            entity = variable44;
 4736:
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
            if(!(sierra === entity)) { _fun00006_ip = 4993; continue _fun00005 }
 4827:
            if(!(result != limora)) { _fun00006_ip = 4993; continue _fun00005 }
 4834:
            sierra = _closure1_slot11;
            entity = sierra.getRelevantUserTrialOffer;
            sierra = entity.bind(sierra)(limora);
            entity = result != sierra;
            if(!entity) { _fun00006_ip = 4875; continue _fun00005 }
 4856:
            variable99 = result == sierra;
            limora = undefined;
            if(variable99) { _fun00006_ip = 4871; continue _fun00005 }
 4865:
            limora = sierra.user_id;
 4871:
            entity = result != limora;
 4875:
            if(!entity) { _fun00006_ip = 4888; continue _fun00005 }
 4878:
            sierra = sierra.user_id;
            entity = sierra === variable97;
 4888:
            if(entity) { _fun00006_ip = 4943; continue _fun00005 }
 4891:
            if(!vacuum) { _fun00006_ip = 4897; continue _fun00005 }
 4894:
            if(!entity) { _fun00006_ip = 4943; continue _fun00005 }
 4897:
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
            _fun00006_ip = 4991; continue _fun00005;
 4943:
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
 4991:
            _fun00006_ip = 4997; continue _fun00005;
 4993:
            entity = _closure1_slot28;
 4997:
            sierra = entity.referralTrialOfferDataUpdated;
            limora = entity.referralTrialOfferData;
            variable94 = _closure1_slot5;
            vacuum = variable94.getApplication;
            variable97 = michal.applicationId;
            variable99 = result != variable97;
            equals = '';
            entity = equals;
            if(!variable99) { _fun00006_ip = 5041; continue _fun00005 }
 5038:
            entity = variable97;
 5041:
            entity = vacuum.bind(variable94)(entity);
            variable94 = result != entity;
            if(!variable94) { _fun00006_ip = 5097; continue _fun00005 }
 5053:
            variable97 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable98];
            variable99 = variable97.bind(oscard)(vacuum);
            variable98 = variable99.hasFlag;
            variable97 = michal.flags;
            vacuum = _closure1_slot25;
            vacuum = vacuum.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            variable94 = variable98.bind(variable99)(variable97, vacuum);
 5097:
            vacuum = undefined;
            if(!variable94) { _fun00006_ip = 5107; continue _fun00005 }
 5102:
            vacuum = entity.id;
 5107:
            entity = {};
            variable94 = michal.id;
            entity['id'] = variable94;
            variable94 = michal.channel_id;
            entity['channelId'] = variable94;
            variable97 = result != variable67;
            variable94 = undefined;
            if(!variable97) { _fun00006_ip = 5139; continue _fun00005 }
 5136:
            variable94 = variable67;
 5139:
            entity['guildId'] = variable94;
            variable94 = michal;
            if(!(result != variable44)) { _fun00006_ip = 5153; continue _fun00005 }
 5150:
            variable94 = variable44;
 5153:
            variable94 = variable94.flags;
            entity['flags'] = variable94;
            variable94 = michal.type;
            entity['type'] = variable94;
            variable94 = michal.nonce;
            if(!(result != variable94)) { _fun00006_ip = 5198; continue _fun00005 }
 5181:
            variable94 = michal.nonce;
            variable97 = 'string';
            variable94 = typeof variable94;
            if(!(variable97 === variable94)) { _fun00006_ip = 5206; continue _fun00005 }
 5198:
            variable94 = michal.nonce;
            _fun00006_ip = 5225; continue _fun00005;
 5206:
            variable97 = global;
            variable98 = variable97.String;
            variable97 = michal.nonce;
            variable94 = variable98.bind(oscard)(variable97);
 5225:
            entity['nonce'] = variable94;
            variable94 = michal.state;
            entity['state'] = variable94;
            entity['reactions'] = echoed;
            variable94 = undefined;
            if(variable55) { _fun00006_ip = 5252; continue _fun00005 }
 5249:
            variable94 = variable96;
 5252:
            entity['referencedMessage'] = variable94;
            entity['threadEmbed'] = variable93;
            variable94 = result != variable95;
            variable93 = undefined;
            if(!variable94) { _fun00006_ip = 5283; continue _fun00005 }
 5271:
            variable94 = variable95.getForwardInfo;
            variable93 = variable94.bind(variable95)();
 5283:
            entity['forwardInfo'] = variable93;
            variable93 = !sequen;
            if(!variable93) { _fun00006_ip = 5302; continue _fun00005 }
 5296:
            variable93 = michal.mentioned;
 5302:
            entity['mentioned'] = variable93;
            variable93 = michal.isEdited;
            variable94 = variable93.bind(michal)();
            variable93 = equals;
            if(!variable94) { _fun00006_ip = 5384; continue _fun00005 }
 5323:
            variable93 = equals;
            if(variable55) { _fun00006_ip = 5384; continue _fun00005 }
 5329:
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
 5384:
            entity['edited'] = variable93;
            variable93 = record.editedColor;
            entity['editedColor'] = variable93;
            variable93 = michal.isUnsupported;
            if(variable93) { _fun00006_ip = 5417; continue _fun00005 }
 5409:
            variable93 = record.textColor;
            _fun00006_ip = 5423; continue _fun00005;
 5417:
            variable93 = record.unsupportedColor;
 5423:
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
            entity['animateEmoji'] = variable78;
            if(!variable70) { _fun00006_ip = 5507; continue _fun00005 }
 5502:
            variable82 = variable76.username;
 5507:
            variable83 = result != variable82;
            variable78 = undefined;
            if(!variable83) { _fun00006_ip = 5519; continue _fun00005 }
 5516:
            variable78 = variable82;
 5519:
            entity['username'] = variable78;
            variable78 = undefined;
            if(variable70) { _fun00006_ip = 5534; continue _fun00005 }
 5528:
            variable78 = variable81.uri;
 5534:
            entity['avatarURL'] = variable78;
            variable78 = undefined;
            if(variable70) { _fun00006_ip = 5547; continue _fun00005 }
 5544:
            variable78 = variable80;
 5547:
            entity['avatarDecorationURL'] = variable78;
            variable76 = variable76.id;
            entity['authorId'] = variable76;
            if(variable70) { _fun00006_ip = 5594; continue _fun00005 }
 5565:
            variable76 = 'username';
            if(!(variable76 === kiloes)) { _fun00006_ip = 5594; continue _fun00005 }
 5573:
            variable76 = _closure1_slot3;
            variable76 = variable76.bind(oscard)(variable74);
            if(!(result == variable76)) { _fun00006_ip = 5592; continue _fun00005 }
 5586:
            variable76 = record.defaultUsernameColor;
 5592:
            _fun00006_ip = 5600; continue _fun00005;
 5594:
            variable76 = record.defaultUsernameColor;
 5600:
            entity['usernameColor'] = variable76;
            variable76 = null;
            if(variable70) { _fun00006_ip = 5634; continue _fun00005 }
 5610:
            variable78 = _closure1_slot3;
            variable80 = variable78.bind(oscard)(variable74);
            variable81 = result != variable80;
            variable78 = null;
            if(!variable81) { _fun00006_ip = 5631; continue _fun00005 }
 5628:
            variable78 = variable80;
 5631:
            variable76 = variable78;
 5634:
            entity['roleColor'] = variable76;
            variable76 = null;
            if(!variable77) { _fun00006_ip = 5680; continue _fun00005 }
 5644:
            variable76 = null;
            if(variable70) { _fun00006_ip = 5680; continue _fun00005 }
 5649:
            variable78 = _closure1_slot0;
            variable80 = _closure1_slot2;
            variable77 = 62;
            variable77 = variable80[variable77];
            variable78 = variable78.bind(oscard)(variable77);
            variable77 = variable78.processColorStrings;
            variable76 = variable77.bind(variable78)(variable79);
 5680:
            entity['roleColors'] = variable76;
            variable76 = 'dot';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5700; continue _fun00005 }
 5696:
            variable76 = result != variable74;
 5700:
            entity['shouldShowRoleDot'] = variable76;
            variable76 = 'username';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5720; continue _fun00005 }
 5716:
            variable76 = result != variable74;
 5720:
            entity['shouldShowRoleOnName'] = variable76;
            entity['showLinkDecorations'] = variable69;
            if(variable70) { _fun00006_ip = 5754; continue _fun00005 }
 5733:
            variable69 = _closure1_slot3;
            variable69 = variable69.bind(oscard)(variable74);
            if(!(result == variable69)) { _fun00006_ip = 5752; continue _fun00005 }
 5746:
            variable69 = record.defaultUsernameColor;
 5752:
            _fun00006_ip = 5760; continue _fun00005;
 5754:
            variable69 = record.defaultUsernameColor;
 5760:
            entity['colorString'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5773; continue _fun00005 }
 5770:
            variable69 = variable73;
 5773:
            entity['roleIcon'] = variable69;
            variable73 = result != variable75;
            variable69 = undefined;
            if(!variable73) { _fun00006_ip = 5818; continue _fun00005 }
 5787:
            variable74 = _closure1_slot0;
            variable76 = _closure1_slot2;
            variable73 = 63;
            variable73 = variable76[variable73];
            variable74 = variable74.bind(oscard)(variable73);
            variable73 = variable74.createConnectionsRoleTag;
            variable69 = variable73.bind(variable74)(variable75);
 5818:
            entity['connectionsRoleTag'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5833; continue _fun00005 }
 5830:
            variable69 = variable72;
 5833:
            entity['timestamp'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5849; continue _fun00005 }
 5843:
            variable69 = record.timestampColor;
 5849:
            entity['timestampColor'] = variable69;
            entity['content'] = variable68;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable55;
            variable68 = undefined;
            if(!(oscard !== variable71)) { _fun00006_ip = 5907; continue _fun00005 }
 5874:
            variable70 = _closure1_slot0;
            variable72 = _closure1_slot2;
            variable69 = 64;
            variable69 = variable72[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createSurveyIndication;
            variable68 = variable69.bind(variable70)(michal, update, variable71);
 5907:
            entity['surveyIndication'] = variable68;
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable68 = 65;
            variable68 = variable70[variable68];
            variable69 = variable69.bind(oscard)(variable68);
            variable68 = variable69.createEphemeralIndication;
            variable68 = variable68.bind(variable69)(michal);
            entity['ephemeralIndication'] = variable68;
            entity['interactionStatus'] = variable56;
            variable56 = undefined;
            if(!variable58) { _fun00006_ip = 6013; continue _fun00005 }
 5962:
            variable68 = _closure1_slot0;
            variable69 = _closure1_slot2;
            variable58 = 66;
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
 6013:
            entity['executedCommand'] = variable56;
            variable56 = variable44.components;
            variable56 = variable56.length;
            variable58 = variable56 > variable53;
            variable56 = undefined;
            if(!variable58) { _fun00006_ip = 6124; continue _fun00005 }
 6040:
            variable56 = undefined;
            if(!variable57) { _fun00006_ip = 6124; continue _fun00005 }
 6045:
            variable58 = _closure1_slot1;
            variable68 = _closure1_slot2;
            variable57 = 67;
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
 6124:
            entity['components'] = variable56;
            variable56 = 0;
            if(variable55) { _fun00006_ip = 6140; continue _fun00005 }
 6134:
            variable56 = record.feedbackColor;
 6140:
            entity['feedbackColor'] = variable56;
            variable53 = 0;
            if(variable55) { _fun00006_ip = 6156; continue _fun00005 }
 6150:
            variable53 = record.highlightColor;
 6156:
            entity['highlightColor'] = variable53;
            variable55 = result != variable54;
            variable53 = undefined;
            if(!variable55) { _fun00006_ip = 6173; continue _fun00005 }
 6170:
            variable53 = variable54;
 6173:
            entity['embeds'] = variable53;
            if(variable52) { _fun00006_ip = 6187; continue _fun00005 }
 6181:
            variable52 = new Array(0);
            _fun00006_ip = 6219; continue _fun00005;
 6187:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 68;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createGiftCodeEmbed;
            variable52 = variable53.bind(variable54)(michal, update);
 6219:
            entity['giftCodes'] = variable52;
            if(variable49) { _fun00006_ip = 6233; continue _fun00005 }
 6227:
            variable49 = new Array(0);
            _fun00006_ip = 6266; continue _fun00005;
 6233:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 69;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createCodedLinkEmbeds;
            variable49 = variable52.bind(variable53)(michal, variable44, update);
 6266:
            entity['codedLinks'] = variable49;
            variable49 = undefined;
            if(!variable51) { _fun00006_ip = 6307; continue _fun00005 }
 6276:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 70;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInstanceEmbed;
            variable49 = variable51.bind(variable52)(michal);
 6307:
            entity['activityInstanceEmbed'] = variable49;
            variable49 = undefined;
            if(!variable50) { _fun00006_ip = 6351; continue _fun00005 }
 6319:
            variable51 = _closure1_slot0;
            variable52 = _closure1_slot2;
            variable50 = 71;
            variable50 = variable52[variable50];
            variable51 = variable51.bind(oscard)(variable50);
            variable50 = variable51.createActivityInviteEmbed;
            variable49 = variable50.bind(variable51)(michal, update);
 6351:
            entity['activityInviteEmbed'] = variable49;
            if(!variable42) { _fun00006_ip = 6382; continue _fun00005 }
 6361:
            if(!variable46) { _fun00006_ip = 6373; continue _fun00005 }
 6364:
            if(variable47) { _fun00006_ip = 6370; continue _fun00005 }
 6367:
            variable47 = variable48;
 6370:
            variable46 = variable47;
 6373:
            if(variable46) { _fun00006_ip = 6379; continue _fun00005 }
 6376:
            variable46 = variable41;
 6379:
            variable42 = variable46;
 6382:
            entity['useAttachmentGridLayout'] = variable42;
            entity['useAttachmentUploadPreview'] = variable41;
            entity['attachments'] = variable40;
            variable46 = 1;
            variable40 = variable46;
            if(!variable41) { _fun00006_ip = 6438; continue _fun00005 }
 6406:
            variable42 = michal.state;
            variable41 = _closure1_slot24;
            variable41 = variable41.SEND_FAILED;
            variable40 = variable46;
            if(!(variable42 === variable41)) { _fun00006_ip = 6438; continue _fun00005 }
 6428:
            variable40 = 0.2;
 6438:
            entity['attachmentsOpacity'] = variable40;
            variable41 = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 72;
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
            if(!variable38) { _fun00006_ip = 6533; continue _fun00005 }
 6530:
            variable38 = variable39;
 6533:
            entity['communicationDisabled'] = variable38;
            entity['threadStarterMessageHeader'] = quebec;
            variable38 = result == ctrled;
            if(variable38) { _fun00006_ip = 6563; continue _fun00005 }
 6550:
            quebec = ctrled.isForumPost;
            quebec = quebec.bind(ctrled)();
            variable38 = !quebec;
 6563:
            quebec = !variable38;
            if(variable38) { _fun00006_ip = 6583; continue _fun00005 }
 6569:
            variable39 = michal.id;
            variable38 = michal.channel_id;
            quebec = variable39 === variable38;
 6583:
            entity['isFirstForumPostMessage'] = quebec;
            variable38 = result != ctrled;
            quebec = undefined;
            if(!variable38) { _fun00006_ip = 6627; continue _fun00005 }
 6597:
            variable38 = ctrled.isForumPost;
            variable38 = variable38.bind(ctrled)();
            quebec = undefined;
            if(!variable38) { _fun00006_ip = 6627; continue _fun00005 }
 6612:
            quebec = undefined;
            if(!variable37) { _fun00006_ip = 6627; continue _fun00005 }
 6617:
            variable37 = _closure1_slot30;
            quebec = variable37.bind(oscard)(michal, ctrled);
 6627:
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
            variable37 = 73;
            variable37 = variable39[variable37];
            variable37 = variable38.bind(oscard)(variable37);
            variable37 = variable40.bind(variable41)(variable37);
            entity['swipeToReplyIconUrl'] = variable37;
            quebec = variable39[quebec];
            variable37 = variable36.bind(oscard)(quebec);
            variable36 = variable37.getAssetUriForEmbed;
            quebec = 74;
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
            if(cntext) { _fun00006_ip = 6821; continue _fun00005 }
 6815:
            cntext = new Array(0);
            _fun00006_ip = 6853; continue _fun00005;
 6821:
            limora = _closure1_slot0;
            equals = _closure1_slot2;
            sierra = 75;
            sierra = equals[sierra];
            limora = limora.bind(oscard)(sierra);
            sierra = limora.createPostPreviewEmbeds;
            cntext = sierra.bind(limora)(michal, whisks);
 6853:
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
            whisks = 76;
            whisks = limora[whisks];
            equals = sierra.bind(oscard)(whisks);
            whisks = equals.createSafetyPolicyNoticeEmbed;
            whisks = whisks.bind(equals)(michal);
            entity['safetyPolicyNoticeEmbed'] = whisks;
            entity['pollData'] = source;
            source = 77;
            source = limora[source];
            whisks = sierra.bind(oscard)(source);
            source = whisks.createSafetySystemNotificationEmbed;
            source = source.bind(whisks)(michal);
            entity['safetySystemNotificationEmbed'] = source;
            source = 78;
            source = limora[source];
            whisks = sierra.bind(oscard)(source);
            limora = whisks.createCtaButton;
            sierra = michal.id;
            source = michal.channel_id;
            source = limora.bind(whisks)(sierra, source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!status) { _fun00006_ip = 7038; continue _fun00005 }
 7032:
            source = record.embedBackgroundColor;
 7038:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            status = 79;
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
            if(!tangon) { _fun00006_ip = 7299; continue _fun00005 }
 7266:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7299:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 7345; continue _fun00005 }
 7312:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7345:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 7358; continue _fun00005 }
 7355:
            report = tangon;
 7358:
            if(!report) { _fun00006_ip = 7394; continue _fun00005 }
 7361:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 80;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7394:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7436; continue _fun00005 }
 7404:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 80;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7436:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7457; continue _fun00005 }
 7452:
            report = ctrled.type;
 7457:
            tangon = _closure1_slot26;
            tangon = tangon.GUILD_ANNOUNCEMENT;
            tangon = report === tangon;
            entity['isAnnouncementChannel'] = tangon;
            report = _closure1_slot0;
            source = _closure1_slot2;
            tangon = 80;
            tangon = source[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.isInMessageShortcutsExperiment;
            tangon = tangon.bind(report)();
            entity['shortcutsEnabled'] = tangon;
            return entity;
 7515:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7611; continue _fun00005 }
 7534:
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
            if(source) { _fun00006_ip = 7599; continue _fun00005 }
 7589:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7599:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7704; continue _fun00005;
 7611:
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
 7704:
            return entity;
 7706:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7773; continue _fun00005 }
 7718:
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
 7773:
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
    tangon = 81;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();