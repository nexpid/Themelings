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
            variable96 = entity.messageForward;
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
            variable36 = entity.threadStarterMessageHeader;
            variable72 = entity.pushFeedbackType;
            variable56 = entity.renderContentOnly;
            whisks = entity.showContentInventoryEntryFallbackEmbed;
            echoed = option.renderEmbeds;
            report = option.renderReactions;
            tangon = option.renderShortcuts;
            output = option.inlineEmbedMedia;
            sizing = option.inlineAttachmentMedia;
            variable84 = option.constrainedWidth;
            sequen = option.ignoreMentioned;
            variable80 = option.animateEmoji;
            variable44 = option.animatingStickerMessageId;
            variable60 = option.gifAutoPlay;
            variable50 = option.renderCodedLinks;
            variable53 = option.renderGiftCode;
            variable52 = option.renderActivityInstanceEmbed;
            variable51 = option.renderActivityInviteEmbed;
            variable58 = option.renderComponents;
            source = option.renderThreadEmbeds;
            config = option.renderReplies;
            variable39 = option.renderCommunicationDisabled;
            variable47 = option.renderAttachments;
            variable59 = option.renderExecutedCommands;
            entity = option.renderPolls;
            variable38 = option.renderForumPostActions;
            status = option.renderInlineForwardButton;
            update = option.forcedTheme;
            variable37 = option.ignoreEmbedDescriptionCache;
            variable42 = option.forceHideSimpleEmbedContent;
            variable64 = option.shouldObscureSpoiler;
            variable66 = option.shouldDisableInteractiveComponents;
            vacuum = option.useAlternateEmbedColors;
            variable41 = option.shouldFilterKeywords;
            result = null;
            if(!(result == update)) { _fun00006_ip = 286; continue _fun00005 }
 273:
            zuuluu = _closure1_slot16;
            update = zuuluu.theme;
 286:
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
            variable65 = verify === romeon;
            cntext = variable65;
            if(!variable65) { _fun00006_ip = 380; continue _fun00005 }
 377:
            cntext = echoed;
 380:
            if(!cntext) { _fun00006_ip = 402; continue _fun00005 }
 383:
            ctrled = michal.type;
            echoed = _closure1_slot23;
            echoed = echoed.CUSTOM_GIFT;
            cntext = ctrled !== echoed;
 402:
            quebec = variable65;
            if(!variable65) { _fun00006_ip = 411; continue _fun00005 }
 408:
            quebec = output;
 411:
            variable43 = variable65;
            if(!variable43) { _fun00006_ip = 420; continue _fun00005 }
 417:
            variable43 = sizing;
 420:
            echoed = _closure1_slot18;
            output = echoed.getChannel;
            sizing = michal.getChannelId;
            sizing = sizing.bind(michal)();
            ctrled = output.bind(echoed)(sizing);
            echoed = _closure1_slot18;
            output = echoed.getChannel;
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            sizing = 22;
            sizing = sierra[sizing];
            sierra = target.bind(oscard)(sizing);
            target = sierra.castMessageIdAsChannelId;
            sizing = michal.id;
            sizing = target.bind(sierra)(sizing);
            output = output.bind(echoed)(sizing);
            echoed = result == ctrled;
            sizing = undefined;
            if(echoed) { _fun00006_ip = 513; continue _fun00005 }
 503:
            echoed = ctrled.getGuildId;
            sizing = echoed.bind(ctrled)();
 513:
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            echoed = 33;
            echoed = sierra[echoed];
            target = target.bind(oscard)(echoed);
            echoed = target.canUseEnhancedRoleColors;
            variable78 = echoed.bind(target)(sizing, papara);
            variable68 = sizing;
            if(!(result == variable96)) { _fun00006_ip = 583; continue _fun00005 }
 552:
            echoed = _closure1_slot0;
            target = _closure1_slot2;
            sizing = 34;
            sizing = target[sizing];
            echoed = echoed.bind(oscard)(sizing);
            sizing = echoed.maybeCreateSingleForwardForMessage;
            variable96 = sizing.bind(echoed)(michal);
 583:
            variable45 = michal;
            if(!(result != variable96)) { _fun00006_ip = 601; continue _fun00005 }
 590:
            sizing = variable96.messageSnapshot;
            variable45 = sizing.message;
 601:
            echoed = new Array(0);
            if(!report) { _fun00006_ip = 651; continue _fun00005 }
 608:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            sizing = 35;
            sizing = sierra[sizing];
            target = target.bind(oscard)(sizing);
            sizing = {};
            sierra = michal.reactions;
            sizing['reactions'] = sierra;
            sizing['animateEmoji'] = variable80;
            echoed = target.bind(oscard)(sizing);
 651:
            sierra = michal.type;
            sizing = _closure1_slot23;
            target = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(sierra === target)) { _fun00006_ip = 722; continue _fun00005 }
 672:
            limora = _closure1_slot12;
            sierra = limora.getMessageByReference;
            target = michal.messageReference;
            sierra = sierra.bind(limora)(target);
            equals = sierra.state;
            target = _closure1_slot13;
            limora = target.LOADED;
            target = null;
            if(!(equals === limora)) { _fun00006_ip = 719; continue _fun00005 }
 714:
            target = sierra.message;
 719:
            sizing = target;
 722:
            if(!(result == sizing)) { _fun00006_ip = 7730; continue _fun00005 }
 729:
            sierra = _closure1_slot1;
            limora = _closure1_slot2;
            target = 36;
            target = limora[target];
            target = sierra.bind(oscard)(target);
            target = target.bind(oscard)(michal);
            if(target) { _fun00006_ip = 7537; continue _fun00005 }
 760:
            variable71 = !backup;
            if(variable71) { _fun00006_ip = 769; continue _fun00005 }
 766:
            variable71 = variable56;
 769:
            variable77 = michal.author;
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            target = 38;
            target = limora[target];
            limora = sierra.bind(oscard)(target);
            sierra = limora.isMessageNewerThanImprovedMarkdownEpoch;
            equals = michal.editedTimestamp;
            if(!(result == equals)) { _fun00006_ip = 817; continue _fun00005 }
 811:
            equals = michal.timestamp;
 817:
            target = equals.valueOf;
            target = target.bind(equals)();
            equals = sierra.bind(limora)(target);
            target = variable45.content;
            if(!(result != target)) { _fun00006_ip = 853; continue _fun00005 }
 840:
            sierra = variable45.content;
            target = '';
            if(!(target === sierra)) { _fun00006_ip = 866; continue _fun00005 }
 853:
            sierra = {};
            sierra['content'] = oscard;
            sierra['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 956; continue _fun00005;
 866:
            limora = _closure1_slot0;
            variable40 = _closure1_slot2;
            target = 39;
            target = variable40[target];
            variable40 = limora.bind(oscard)(target);
            limora = variable40.parseMessageMarkup;
            if(variable42) { _fun00006_ip = 907; continue _fun00005 }
 895:
            target = cntext;
            if(!target) { _fun00006_ip = 904; continue _fun00005 }
 901:
            target = quebec;
 904:
            variable42 = target;
 907:
            target = result != output;
            if(!target) { _fun00006_ip = 925; continue _fun00005 }
 914:
            variable46 = michal.isFirstMessageInForumPost;
            target = variable46.bind(michal)(output);
 925:
            r108 = variable40;
            r107 = michal;
            r106 = variable45;
            r105 = variable42;
            r104 = golfie;
            r103 = target;
            r102 = equals;
            r101 = equals;
            r100 = variable41;
            sierra = r108[limora](r107, r106, r105, r104, r103, r102, r101, r100, variable100);
 956:
            target = sierra.content;
            variable41 = sierra.hasSpoilerEmbeds;
            limora = _closure1_slot0;
            variable40 = _closure1_slot2;
            sierra = 40;
            variable42 = variable40[sierra];
            variable46 = limora.bind(oscard)(variable42);
            variable42 = variable46.shouldRedactExplicitContent;
            variable63 = variable42.bind(variable46)(michal);
            sierra = variable40[sierra];
            limora = limora.bind(oscard)(sierra);
            sierra = limora.shouldAgeVerifyForExplicitMedia;
            variable62 = sierra.bind(limora)();
            limora = undefined;
            if(!cntext) { _fun00006_ip = 1203; continue _fun00005 }
 1025:
            sierra = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 41;
            variable40 = variable42[variable40];
            variable48 = sierra.bind(oscard)(variable40);
            variable46 = variable48.getCurrentConfig;
            variable40 = {};
            variable40['location'] = papara;
            papara = {};
            papara['autoTrackExposure'] = offset;
            papara = variable46.bind(variable48)(variable40, papara);
            variable40 = papara.enabled;
            papara = 42;
            papara = variable42[papara];
            sierra = sierra.bind(oscard)(papara);
            papara = {};
            variable42 = variable45.embeds;
            papara['embeds'] = variable42;
            variable42 = michal.channel_id;
            papara['channelId'] = variable42;
            papara['gifAutoPlay'] = variable60;
            papara['hasSpoilerEmbeds'] = variable41;
            papara['ignoreEmbedDescriptionCache'] = variable37;
            variable37 = {};
            variable37['tiktok'] = variable40;
            papara['playInline'] = variable37;
            papara['shouldInlineEmbedMedia'] = quebec;
            papara['colors'] = record;
            papara['showListsAndHeaders'] = equals;
            papara['showMaskedLinks'] = equals;
            equals = record.embedBackgroundColor;
            papara['themedBackgroundColor'] = equals;
            papara['shouldObscureExplicitMedia'] = variable63;
            papara['shouldAgeVerify'] = variable62;
            equals = michal.author;
            equals = equals.bot;
            papara['authorIsBot'] = equals;
            papara['showContentInventoryEntryFallbackEmbed'] = whisks;
            limora = sierra.bind(oscard)(papara);
 1203:
            sierra = _closure1_slot1;
            whisks = _closure1_slot2;
            papara = 43;
            papara = whisks[papara];
            sierra = sierra.bind(oscard)(papara);
            papara = {};
            papara['message'] = michal;
            papara['isSystemDM'] = yankee;
            papara['channel'] = ctrled;
            papara['colors'] = record;
            papara = sierra.bind(oscard)(papara);
            variable93 = papara.tagText;
            variable92 = papara.tagVerified;
            variable91 = papara.tagTextColor;
            variable90 = papara.tagBackgroundColor;
            variable89 = papara.tagType;
            variable88 = papara.tagIconUrl;
            variable87 = papara.opTagText;
            variable86 = papara.opTagTextColor;
            variable85 = papara.opTagBackgroundColor;
            whisks = _closure1_slot21;
            sierra = whisks.getUploaderFileForMessageId;
            papara = michal.id;
            sierra = sierra.bind(whisks)(papara);
            variable42 = result != sierra;
            whisks = michal.state;
            papara = _closure1_slot24;
            papara = papara.SEND_FAILED;
            papara = whisks !== papara;
            if(papara) { _fun00006_ip = 1357; continue _fun00005 }
 1347:
            whisks = michal.isCommandType;
            papara = whisks.bind(michal)();
 1357:
            whisks = limora;
            if(papara) { _fun00006_ip = 1428; continue _fun00005 }
 1363:
            papara = limora;
            if(!(result == limora)) { _fun00006_ip = 1374; continue _fun00005 }
 1370:
            papara = new Array(0);
 1374:
            equals = papara.push;
            quebec = _closure1_slot1;
            variable37 = _closure1_slot2;
            limora = 44;
            limora = variable37[limora];
            quebec = quebec.bind(oscard)(limora);
            limora = {};
            limora['uploaderFile'] = sierra;
            limora['useAttachmentUploadPreview'] = variable42;
            limora['colors'] = record;
            limora = quebec.bind(oscard)(limora);
            limora = equals.bind(papara)(limora);
            whisks = papara;
 1428:
            equals = _closure1_slot8;
            limora = equals.getMessage;
            papara = michal.id;
            limora = limora.bind(equals)(papara);
            variable55 = whisks;
            if(!(result != limora)) { _fun00006_ip = 1527; continue _fun00005 }
 1455:
            papara = whisks;
            if(!(result == whisks)) { _fun00006_ip = 1466; continue _fun00005 }
 1462:
            papara = new Array(0);
 1466:
            variable37 = limora.errorMessage;
            whisks = papara.push;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 44;
            limora = quebec[limora];
            quebec = equals.bind(oscard)(limora);
            equals = quebec.createAutomodBlockedMessageEmbed;
            limora = {};
            limora['errorMessage'] = variable37;
            limora['colors'] = record;
            limora = equals.bind(quebec)(limora);
            limora = whisks.bind(papara)(limora);
            variable55 = papara;
 1527:
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            quebec = 45;
            papara = whisks[quebec];
            variable37 = limora.bind(oscard)(papara);
            equals = variable37.getUserAuthor;
            papara = michal.author;
            papara = equals.bind(variable37)(papara, ctrled);
            variable48 = papara.guildMemberAvatar;
            variable37 = papara.guildMemberAvatarDecoration;
            equals = papara.iconRoleId;
            papara = 46;
            papara = whisks[papara];
            whisks = limora.bind(oscard)(papara);
            limora = whisks.ensureAvatarSource;
            papara = michal.isInteractionPlaceholder;
            papara = papara.bind(michal)();
            if(!papara) { _fun00006_ip = 1655; continue _fun00005 }
 1616:
            papara = michal.author;
            papara = papara.avatar;
            if(!(result == papara)) { _fun00006_ip = 1655; continue _fun00005 }
 1632:
            variable40 = michal.application;
            variable41 = result == variable40;
            papara = undefined;
            if(variable41) { _fun00006_ip = 1651; continue _fun00005 }
 1646:
            papara = variable40.icon;
 1651:
            if(!(result == papara)) { _fun00006_ip = 1730; continue _fun00005 }
 1655:
            if(!(result != variable48)) { _fun00006_ip = 1663; continue _fun00005 }
 1659:
            if(!(result == variable68)) { _fun00006_ip = 1676; continue _fun00005 }
 1663:
            papara = variable77.getAvatarSource;
            papara = papara.bind(variable77)(oscard);
            _fun00006_ip = 1728; continue _fun00005;
 1676:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 47;
            variable40 = variable46[variable40];
            variable46 = variable41.bind(oscard)(variable40);
            variable41 = variable46.getGuildMemberAvatarSource;
            variable40 = {};
            variable49 = variable77.id;
            variable40['userId'] = variable49;
            variable40['guildMemberAvatar'] = variable48;
            variable40['guildId'] = variable68;
            papara = variable41.bind(variable46)(variable40, variable77);
 1728:
            _fun00006_ip = 1807; continue _fun00005;
 1730:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 47;
            variable40 = variable46[variable40];
            variable46 = variable41.bind(oscard)(variable40);
            variable41 = variable46.getApplicationIconSource;
            variable40 = {};
            variable48 = michal.application;
            variable48 = variable48.id;
            variable40['id'] = variable48;
            variable48 = michal.application;
            variable48 = variable48.icon;
            variable40['icon'] = variable48;
            variable48 = michal.application;
            variable48 = variable48.bot;
            variable40['bot'] = variable48;
            papara = variable41.bind(variable46)(variable40);
 1807:
            variable82 = limora.bind(whisks)(papara);
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            papara = 47;
            papara = whisks[papara];
            whisks = limora.bind(oscard)(papara);
            limora = whisks.getAvatarDecorationURL;
            papara = {};
            if(!(result == variable37)) { _fun00006_ip = 1850; continue _fun00005 }
 1844:
            variable37 = variable77.avatarDecoration;
 1850:
            papara['avatarDecoration'] = variable37;
            variable46 = _closure1_slot0;
            variable48 = _closure1_slot2;
            variable37 = 48;
            variable37 = variable48[variable37];
            variable41 = variable46.bind(oscard)(variable37);
            variable40 = variable41.getDecorationSizeForAvatarSize;
            variable37 = 49;
            variable37 = variable48[variable37];
            variable37 = variable46.bind(oscard)(variable37);
            variable37 = variable37.AvatarSizes;
            variable37 = variable37.NORMAL;
            variable37 = variable40.bind(variable41)(variable37);
            papara['size'] = variable37;
            variable81 = limora.bind(whisks)(papara);
            papara = result != equals;
            variable74 = undefined;
            if(!papara) { _fun00006_ip = 1986; continue _fun00005 }
 1928:
            papara = result != variable68;
            variable74 = undefined;
            if(!papara) { _fun00006_ip = 1986; continue _fun00005 }
 1937:
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            papara = 50;
            papara = whisks[papara];
            whisks = limora.bind(oscard)(papara);
            limora = whisks.getRoleIcon;
            papara = {};
            papara['guildId'] = variable68;
            papara['roleId'] = equals;
            equals = 18;
            papara['size'] = equals;
            variable74 = limora.bind(whisks)(papara);
 1986:
            limora = michal.hasFlag;
            papara = _closure1_slot25;
            papara = papara.SOURCE_MESSAGE_DELETED;
            papara = limora.bind(michal)(papara);
            if(!papara) { _fun00006_ip = 2065; continue _fun00005 }
 2010:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            papara = 24;
            limora = variable37[papara];
            limora = equals.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            papara = variable37[papara];
            papara = equals.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.JOtgS0;
            target = limora.bind(whisks)(papara);
 2065:
            limora = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[quebec];
            limora = limora.bind(oscard)(papara);
            papara = limora.getMessageAuthor;
            papara = papara.bind(limora)(michal);
            variable83 = papara.nick;
            variable75 = papara.colorString;
            variable79 = papara.colorStrings;
            limora = michal.type;
            papara = _closure1_slot23;
            papara = papara.INTERACTION_PREMIUM_UPSELL;
            if(!(limora === papara)) { _fun00006_ip = 2193; continue _fun00005 }
 2130:
            limora = _closure1_slot0;
            variable37 = _closure1_slot2;
            papara = 24;
            whisks = variable37[papara];
            whisks = limora.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.formatToPlainString;
            papara = variable37[papara];
            papara = limora.bind(oscard)(papara);
            papara = papara.t;
            limora = papara.u4A+xM;
            papara = {};
            papara['appName'] = variable83;
            target = whisks.bind(equals)(limora, papara);
 2193:
            limora = michal.type;
            papara = _closure1_slot23;
            papara = papara.REPLY;
            variable97 = undefined;
            if(!(limora === papara)) { _fun00006_ip = 3536; continue _fun00005 }
 2217:
            variable97 = undefined;
            if(!config) { _fun00006_ip = 3536; continue _fun00005 }
 2225:
            limora = _closure1_slot12;
            papara = limora.getMessageByReference;
            config = michal.messageReference;
            config = papara.bind(limora)(config);
            limora = config.state;
            papara = _closure1_slot13;
            papara = papara.LOADED;
            if(!(papara !== limora)) { _fun00006_ip = 2503; continue _fun00005 }
 2268:
            papara = _closure1_slot13;
            papara = papara.NOT_LOADED;
            if(!(papara !== limora)) { _fun00006_ip = 2420; continue _fun00005 }
 2285:
            papara = _closure1_slot13;
            papara = papara.DELETED;
            if(!(papara !== limora)) { _fun00006_ip = 2337; continue _fun00005 }
 2299:
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            papara = 52;
            papara = whisks[papara];
            limora = limora.bind(oscard)(papara);
            papara = limora.assertNever;
            papara = papara.bind(limora)(config);
            variable97 = undefined;
            _fun00006_ip = 3536; continue _fun00005;
 2337:
            papara = {};
            limora = _closure1_slot22;
            limora = limora.SYSTEM;
            papara['state'] = limora;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            limora = 24;
            whisks = variable40[limora];
            whisks = variable37.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            limora = variable40[limora];
            limora = variable37.bind(oscard)(limora);
            limora = limora.t;
            limora = limora.mE3KJC;
            limora = whisks.bind(equals)(limora);
            papara['content'] = limora;
            variable97 = papara;
            _fun00006_ip = 3536; continue _fun00005;
 2420:
            papara = {};
            limora = _closure1_slot22;
            limora = limora.SYSTEM;
            papara['state'] = limora;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            limora = 24;
            whisks = variable40[limora];
            whisks = variable37.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            limora = variable40[limora];
            limora = variable37.bind(oscard)(limora);
            limora = limora.t;
            limora = limora.1i+hMj;
            limora = whisks.bind(equals)(limora);
            papara['content'] = limora;
            variable97 = papara;
            _fun00006_ip = 3536; continue _fun00005;
 2503:
            config = config.message;
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            papara = 34;
            papara = whisks[papara];
            limora = limora.bind(oscard)(papara);
            papara = limora.maybeCreateSingleForwardForMessage;
            whisks = papara.bind(limora)(config);
            limora = _closure1_slot20;
            papara = limora.isBlockedForMessage;
            papara = papara.bind(limora)(config);
            if(papara) { _fun00006_ip = 3458; continue _fun00005 }
 2560:
            limora = _closure1_slot20;
            papara = limora.isIgnoredForMessage;
            papara = papara.bind(limora)(config);
            if(papara) { _fun00006_ip = 3378; continue _fun00005 }
 2581:
            limora = _closure1_slot31;
            papara = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            papara['message'] = config;
            papara['messageForward'] = whisks;
            papara['roleStyle'] = kiloes;
            equals = {};
            r107 = equals;
            r106 = option;
            variable37 = copyDataProperties(r107, r106);
            variable37 = 'renderReplies';
            equals[variable37] = offset;
            papara['options'] = equals;
            limora = limora.bind(oscard)(papara);
            if(!(result != limora)) { _fun00006_ip = 3295; continue _fun00005 }
 2654:
            papara = 'username';
            papara = papara in limora;
            if(!papara) { _fun00006_ip = 2825; continue _fun00005 }
 2668:
            equals = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[quebec];
            equals = equals.bind(oscard)(papara);
            papara = equals.getMessageAuthor;
            papara = papara.bind(equals)(config);
            quebec = papara.nick;
            equals = papara.colorString;
            if(!(result == quebec)) { _fun00006_ip = 2723; continue _fun00005 }
 2712:
            papara = config.author;
            quebec = papara.username;
 2723:
            variable37 = result != quebec;
            papara = undefined;
            if(!variable37) { _fun00006_ip = 2735; continue _fun00005 }
 2732:
            papara = quebec;
 2735:
            limora['username'] = papara;
            if(variable71) { _fun00006_ip = 2765; continue _fun00005 }
 2744:
            papara = _closure1_slot3;
            papara = papara.bind(oscard)(equals);
            if(!(result == papara)) { _fun00006_ip = 2763; continue _fun00005 }
 2757:
            papara = limora.colorString;
 2763:
            _fun00006_ip = 2771; continue _fun00005;
 2765:
            papara = limora.colorString;
 2771:
            limora['colorString'] = papara;
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            papara = 51;
            papara = quebec[papara];
            papara = equals.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal, config);
            if(!papara) { _fun00006_ip = 2825; continue _fun00005 }
 2806:
            equals = limora.username;
            papara = '@';
            papara = papara + equals;
            limora['username'] = papara;
 2825:
            equals = result == whisks;
            papara = undefined;
            if(equals) { _fun00006_ip = 2845; continue _fun00005 }
 2834:
            whisks = whisks.messageSnapshot;
            papara = whisks.message;
 2845:
            quebec = config;
            if(!(result != papara)) { _fun00006_ip = 2855; continue _fun00005 }
 2852:
            quebec = papara;
 2855:
            papara = 'stickers';
            papara = papara in quebec;
            if(papara) { _fun00006_ip = 2872; continue _fun00005 }
 2866:
            papara = new Array(0);
            _fun00006_ip = 2903; continue _fun00005;
 2872:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 28;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getMessageStickers;
            papara = whisks.bind(equals)(quebec);
 2903:
            papara = papara.length;
            whisks = 0;
            if(!(!(papara > whisks))) { _fun00006_ip = 3171; continue _fun00005 }
 2917:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            papara = 29;
            papara = variable37[papara];
            variable40 = equals.bind(oscard)(papara);
            variable37 = variable40.hasFlag;
            equals = quebec.flags;
            papara = _closure1_slot25;
            papara = papara.IS_VOICE_MESSAGE;
            papara = variable37.bind(variable40)(equals, papara);
            if(papara) { _fun00006_ip = 3114; continue _fun00005 }
 2970:
            equals = quebec.type;
            papara = _closure1_slot23;
            papara = papara.POLL_RESULT;
            if(!(equals !== papara)) { _fun00006_ip = 3081; continue _fun00005 }
 2989:
            papara = quebec.embeds;
            papara = papara.length;
            if(!(!(papara > whisks))) { _fun00006_ip = 3024; continue _fun00005 }
 3004:
            papara = quebec.attachments;
            papara = papara.length;
            whisks = papara > whisks;
            papara = null;
            if(!whisks) { _fun00006_ip = 3079; continue _fun00005 }
 3024:
            variable40 = _closure1_slot0;
            variable41 = _closure1_slot2;
            whisks = 24;
            equals = variable41[whisks];
            equals = variable40.bind(oscard)(equals);
            variable37 = equals.intl;
            equals = variable37.string;
            whisks = variable41[whisks];
            whisks = variable40.bind(oscard)(whisks);
            whisks = whisks.t;
            whisks = whisks.JAKsMz;
            papara = equals.bind(variable37)(whisks);
 3079:
            _fun00006_ip = 3112; continue _fun00005;
 3081:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 30;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getPollResultsReplyPreviewMobile;
            papara = whisks.bind(equals)(quebec);
 3112:
            _fun00006_ip = 3169; continue _fun00005;
 3114:
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            whisks = 24;
            equals = variable40[whisks];
            equals = variable37.bind(oscard)(equals);
            quebec = equals.intl;
            equals = quebec.string;
            whisks = variable40[whisks];
            whisks = variable37.bind(oscard)(whisks);
            whisks = whisks.t;
            whisks = whisks.6bhHra;
            papara = equals.bind(quebec)(whisks);
 3169:
            _fun00006_ip = 3226; continue _fun00005;
 3171:
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            whisks = 24;
            equals = variable40[whisks];
            equals = variable37.bind(oscard)(equals);
            quebec = equals.intl;
            equals = quebec.string;
            whisks = variable40[whisks];
            whisks = variable37.bind(oscard)(whisks);
            whisks = whisks.t;
            whisks = whisks.7K5LmZ;
            papara = equals.bind(quebec)(whisks);
 3226:
            whisks = config.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(whisks === config)) { _fun00006_ip = 3251; continue _fun00005 }
 3245:
            limora['content'] = papara;
 3251:
            config = {};
            whisks = _closure1_slot22;
            whisks = whisks.LOADED;
            config['state'] = whisks;
            config['message'] = limora;
            variable97 = config;
            if(!(result != papara)) { _fun00006_ip = 3536; continue _fun00005 }
 3281:
            config['systemContent'] = papara;
            variable97 = config;
            _fun00006_ip = 3536; continue _fun00005;
 3295:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            papara = 24;
            limora = quebec[papara];
            limora = equals.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            papara = quebec[papara];
            papara = equals.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.1i+hMj;
            papara = limora.bind(whisks)(papara);
            config['content'] = papara;
            variable97 = config;
            _fun00006_ip = 3536; continue _fun00005;
 3378:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            papara = 24;
            limora = quebec[papara];
            limora = equals.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            papara = quebec[papara];
            papara = equals.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.G7p6v7;
            papara = limora.bind(whisks)(papara);
            config['content'] = papara;
            variable97 = config;
            _fun00006_ip = 3536; continue _fun00005;
 3458:
            config = {};
            papara = _closure1_slot22;
            papara = papara.SYSTEM;
            config['state'] = papara;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            papara = 24;
            limora = quebec[papara];
            limora = equals.bind(oscard)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            papara = quebec[papara];
            papara = equals.bind(oscard)(papara);
            papara = papara.t;
            papara = papara.XAkOo6;
            papara = limora.bind(whisks)(papara);
            config['content'] = papara;
            variable97 = config;
 3536:
            variable94 = undefined;
            if(!source) { _fun00006_ip = 3566; continue _fun00005 }
 3541:
            source = _closure1_slot29;
            r108 = undefined;
            r107 = michal;
            r106 = kiloes;
            r105 = golfie;
            r104 = output;
            r103 = option;
            variable94 = r108[source](r107, r106, r105, r104, r103, r102);
 3566:
            config = _closure1_slot9;
            source = config.getInteraction;
            variable67 = source.bind(config)(michal);
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 53;
            source = papara[source];
            config = config.bind(oscard)(source);
            source = config.createInteractionStatus;
            variable57 = source.bind(config)(michal, variable67);
            config = result != variable68;
            source = null;
            if(!config) { _fun00006_ip = 3643; continue _fun00005 }
 3622:
            limora = _closure1_slot19;
            papara = limora.getMember;
            config = variable77.id;
            source = papara.bind(limora)(variable68, config);
 3643:
            papara = _closure1_slot0;
            limora = _closure1_slot2;
            config = 54;
            config = limora[config];
            papara = papara.bind(oscard)(config);
            config = papara.isMemberCommunicationDisabled;
            variable40 = config.bind(papara)(source);
            config = _closure1_slot4;
            equals = config.useReducedMotion;
            config = _closure1_slot4;
            variable70 = config.alwaysShowLinkDecorations;
            config = result == ctrled;
            whisks = source;
            source = undefined;
            if(config) { _fun00006_ip = 3712; continue _fun00005 }
 3706:
            source = ctrled.parent_id;
 3712:
            limora = ctrled;
            if(!(result != source)) { _fun00006_ip = 3762; continue _fun00005 }
 3719:
            limora = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3762; continue _fun00005 }
 3726:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            limora = ctrled;
            if(!source) { _fun00006_ip = 3762; continue _fun00005 }
 3742:
            papara = _closure1_slot18;
            config = papara.getChannel;
            source = ctrled.parent_id;
            limora = config.bind(papara)(source);
 3762:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 55;
            source = papara[source];
            papara = config.bind(oscard)(source);
            config = papara.getVisibleConnectionsRole;
            source = {};
            source['guildMember'] = whisks;
            source['channel'] = limora;
            source['onlyChannelConnectionRoles'] = verify;
            variable76 = config.bind(papara)(source);
            source = variable45.attachments;
            source = source.length;
            variable54 = 0;
            variable48 = variable54 !== source;
            source = variable45.embeds;
            source = source.length;
            variable49 = variable54 !== source;
            source = variable42;
            if(!variable42) { _fun00006_ip = 3862; continue _fun00005 }
 3847:
            config = michal.attachments;
            config = config.length;
            source = variable54 === config;
 3862:
            if(!source) { _fun00006_ip = 3869; continue _fun00005 }
 3865:
            source = result != sierra;
 3869:
            papara = _closure1_slot0;
            config = _closure1_slot2;
            variable46 = 56;
            config = config[variable46];
            config = papara.bind(oscard)(config);
            papara = config.ViewImageDescriptions;
            config = papara.getSetting;
            variable61 = config.bind(papara)();
            variable41 = new Array(0);
            if(source) { _fun00006_ip = 4037; continue _fun00005 }
 3915:
            if(!variable47) { _fun00006_ip = 4098; continue _fun00005 }
 3921:
            papara = _closure1_slot1;
            limora = _closure1_slot2;
            config = 58;
            config = limora[config];
            papara = papara.bind(oscard)(config);
            config = {};
            limora = variable45.attachments;
            config['attachments'] = limora;
            quebec = _closure1_slot21;
            whisks = quebec.getUploadAttachments;
            limora = michal.nonce;
            limora = whisks.bind(quebec)(limora);
            config['uploadAttachments'] = limora;
            config['shouldInlineAttachmentMedia'] = variable43;
            config['gifAutoPlay'] = variable60;
            config['viewImageDescriptions'] = variable61;
            config['useReducedMotion'] = equals;
            config['shouldObscureSpoiler'] = variable64;
            limora = record.embedBackgroundColor;
            config['themedBackgroundColor'] = limora;
            config['shouldObscureExplicitMedia'] = variable63;
            config['shouldAgeVerify'] = variable62;
            config['colors'] = record;
            variable41 = papara.bind(oscard)(config);
            _fun00006_ip = 4098; continue _fun00005;
 4037:
            papara = _closure1_slot1;
            limora = _closure1_slot2;
            config = 57;
            config = limora[config];
            papara = papara.bind(oscard)(config);
            config = {};
            config['uploaderFile'] = sierra;
            limora = michal.state;
            sierra = _closure1_slot24;
            sierra = sierra.SEND_FAILED;
            sierra = limora === sierra;
            config['isFailedMessage'] = sierra;
            config['shouldInlineAttachmentMedia'] = variable43;
            variable41 = papara.bind(oscard)(config);
 4098:
            if(!source) { _fun00006_ip = 4120; continue _fun00005 }
 4101:
            config = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(config === source)) { _fun00006_ip = 4160; continue _fun00005 }
 4120:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 59;
            source = papara[source];
            papara = config.bind(oscard)(source);
            config = papara.calendarFormat;
            source = michal.timestamp;
            variable73 = config.bind(papara)(source, verify);
            _fun00006_ip = 4215; continue _fun00005;
 4160:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            source = 24;
            config = limora[source];
            config = sierra.bind(oscard)(config);
            papara = config.intl;
            config = papara.string;
            source = limora[source];
            source = sierra.bind(oscard)(source);
            source = source.t;
            source = source.yXY+5O;
            variable73 = config.bind(papara)(source);
 4215:
            config = _closure1_slot17;
            source = config.getId;
            variable37 = source.bind(config)();
            source = michal.isUnsupported;
            variable69 = target;
            if(!source) { _fun00006_ip = 4298; continue _fun00005 }
 4241:
            sierra = _closure1_slot0;
            limora = _closure1_slot2;
            source = 24;
            config = limora[source];
            config = sierra.bind(oscard)(config);
            papara = config.intl;
            config = papara.string;
            source = limora[source];
            source = sierra.bind(oscard)(source);
            source = source.t;
            source = source.sWi5ER;
            variable69 = config.bind(papara)(source);
 4298:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4326; continue _fun00005 }
 4314:
            config = !golfie;
            if(!config) { _fun00006_ip = 4323; continue _fun00005 }
 4320:
            config = entity;
 4323:
            source = config;
 4326:
            if(source) { _fun00006_ip = 4347; continue _fun00005 }
 4329:
            config = result != target;
            if(!config) { _fun00006_ip = 4344; continue _fun00005 }
 4336:
            papara = '';
            config = papara !== target;
 4344:
            source = config;
 4347:
            if(source) { _fun00006_ip = 4381; continue _fun00005 }
 4350:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            source = 30;
            source = papara[source];
            config = config.bind(oscard)(source);
            source = config.getPollReplyPreview;
            variable69 = source.bind(config)(michal);
 4381:
            source = undefined;
            if(!entity) { _fun00006_ip = 4425; continue _fun00005 }
 4386:
            config = _closure1_slot1;
            papara = _closure1_slot2;
            entity = 60;
            entity = papara[entity];
            config = config.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable80;
            source = config.bind(oscard)(michal, oscard, entity);
 4425:
            if(!status) { _fun00006_ip = 4459; continue _fun00005 }
 4428:
            config = _closure1_slot0;
            papara = _closure1_slot2;
            entity = 61;
            entity = papara[entity];
            config = config.bind(oscard)(entity);
            entity = config.canForwardMessage;
            status = entity.bind(config)(michal);
 4459:
            config = _closure1_slot0;
            entity = _closure1_slot2;
            variable98 = 62;
            entity = entity[variable98];
            target = config.bind(oscard)(entity);
            papara = target.shouldDisplayClanTag;
            config = variable77.id;
            sierra = result != variable68;
            entity = undefined;
            if(!sierra) { _fun00006_ip = 4502; continue _fun00005 }
 4499:
            entity = variable68;
 4502:
            entity = papara.bind(target)(config, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4635; continue _fun00005 }
 4517:
            sierra = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable98];
            limora = sierra.bind(oscard)(entity);
            sierra = limora.getUserPrimaryGuild;
            entity = variable77.primaryGuild;
            whisks = sierra.bind(limora)(entity);
            limora = whisks.guildId;
            sierra = whisks.tag;
            entity = whisks.guildId;
            quebec = result != entity;
            entity = undefined;
            if(!quebec) { _fun00006_ip = 4626; continue _fun00005 }
 4575:
            variable95 = _closure1_slot0;
            quebec = _closure1_slot2;
            quebec = quebec[variable98];
            variable99 = variable95.bind(oscard)(quebec);
            variable98 = variable99.getClanBadgeUrl;
            variable95 = whisks.guildId;
            quebec = whisks.badge;
            whisks = _closure1_slot27;
            whisks = whisks.SIZE_12;
            entity = variable98.bind(variable99)(variable95, quebec, whisks);
 4626:
            config = entity;
            target = limora;
            papara = sierra;
 4635:
            sierra = _closure1_slot0;
            entity = _closure1_slot2;
            variable99 = 29;
            entity = entity[variable99];
            whisks = sierra.bind(oscard)(entity);
            limora = whisks.hasFlag;
            entity = michal;
            if(!(result != variable45)) { _fun00006_ip = 4671; continue _fun00005 }
 4668:
            entity = variable45;
 4671:
            sierra = entity.flags;
            entity = _closure1_slot25;
            entity = entity.IS_VOICE_MESSAGE;
            sierra = limora.bind(whisks)(sierra, entity);
            entity = {};
            entity['currentUserId'] = variable37;
            entity['message'] = michal;
            entity['theme'] = update;
            entity['referralSenderMobileXPEnabled'] = vacuum;
            variable98 = entity.currentUserId;
            variable95 = entity.message;
            quebec = entity.theme;
            vacuum = entity.referralSenderMobileXPEnabled;
            whisks = variable95.referralTrialOfferId;
            limora = variable95.type;
            entity = _closure1_slot23;
            entity = entity.PREMIUM_REFERRAL;
            if(!(limora === entity)) { _fun00006_ip = 4930; continue _fun00005 }
 4764:
            if(!(result != whisks)) { _fun00006_ip = 4930; continue _fun00005 }
 4771:
            limora = _closure1_slot11;
            entity = limora.getRelevantUserTrialOffer;
            limora = entity.bind(limora)(whisks);
            entity = result != limora;
            if(!entity) { _fun00006_ip = 4812; continue _fun00005 }
 4793:
            variable100 = result == limora;
            whisks = undefined;
            if(variable100) { _fun00006_ip = 4808; continue _fun00005 }
 4802:
            whisks = limora.user_id;
 4808:
            entity = result != whisks;
 4812:
            if(!entity) { _fun00006_ip = 4825; continue _fun00005 }
 4815:
            limora = limora.user_id;
            entity = limora === variable98;
 4825:
            if(entity) { _fun00006_ip = 4880; continue _fun00005 }
 4828:
            if(!vacuum) { _fun00006_ip = 4834; continue _fun00005 }
 4831:
            if(!entity) { _fun00006_ip = 4880; continue _fun00005 }
 4834:
            entity = {};
            entity['referralTrialOfferDataUpdated'] = oscard;
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            vacuum = 21;
            vacuum = whisks[vacuum];
            limora = limora.bind(oscard)(vacuum);
            vacuum = limora.createReferralTrialEmbed;
            vacuum = vacuum.bind(limora)(variable95, quebec);
            entity['referralTrialOfferData'] = vacuum;
            _fun00006_ip = 4928; continue _fun00005;
 4880:
            vacuum = {};
            whisks = _closure1_slot0;
            variable100 = _closure1_slot2;
            limora = 21;
            limora = variable100[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createReferralTrialEmbedRedeemable;
            limora = limora.bind(whisks)(variable95, quebec, variable98);
            vacuum['referralTrialOfferDataUpdated'] = limora;
            vacuum['referralTrialOfferData'] = oscard;
            entity = vacuum;
 4928:
            _fun00006_ip = 4934; continue _fun00005;
 4930:
            entity = _closure1_slot28;
 4934:
            limora = entity.referralTrialOfferDataUpdated;
            whisks = entity.referralTrialOfferData;
            variable95 = _closure1_slot5;
            vacuum = variable95.getApplication;
            variable98 = michal.applicationId;
            variable100 = result != variable98;
            quebec = '';
            entity = quebec;
            if(!variable100) { _fun00006_ip = 4978; continue _fun00005 }
 4975:
            entity = variable98;
 4978:
            entity = vacuum.bind(variable95)(entity);
            variable95 = result != entity;
            if(!variable95) { _fun00006_ip = 5034; continue _fun00005 }
 4990:
            variable98 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable99];
            variable100 = variable98.bind(oscard)(vacuum);
            variable99 = variable100.hasFlag;
            variable98 = michal.flags;
            vacuum = _closure1_slot25;
            vacuum = vacuum.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            variable95 = variable99.bind(variable100)(variable98, vacuum);
 5034:
            vacuum = undefined;
            if(!variable95) { _fun00006_ip = 5044; continue _fun00005 }
 5039:
            vacuum = entity.id;
 5044:
            entity = {};
            variable95 = michal.id;
            entity['id'] = variable95;
            variable95 = michal.channel_id;
            entity['channelId'] = variable95;
            variable98 = result != variable68;
            variable95 = undefined;
            if(!variable98) { _fun00006_ip = 5076; continue _fun00005 }
 5073:
            variable95 = variable68;
 5076:
            entity['guildId'] = variable95;
            variable95 = michal;
            if(!(result != variable45)) { _fun00006_ip = 5090; continue _fun00005 }
 5087:
            variable95 = variable45;
 5090:
            variable95 = variable95.flags;
            entity['flags'] = variable95;
            variable95 = michal.type;
            entity['type'] = variable95;
            variable95 = michal.nonce;
            if(!(result != variable95)) { _fun00006_ip = 5135; continue _fun00005 }
 5118:
            variable95 = michal.nonce;
            variable98 = 'string';
            variable95 = typeof variable95;
            if(!(variable98 === variable95)) { _fun00006_ip = 5143; continue _fun00005 }
 5135:
            variable95 = michal.nonce;
            _fun00006_ip = 5162; continue _fun00005;
 5143:
            variable98 = global;
            variable99 = variable98.String;
            variable98 = michal.nonce;
            variable95 = variable99.bind(oscard)(variable98);
 5162:
            entity['nonce'] = variable95;
            variable95 = michal.state;
            entity['state'] = variable95;
            entity['reactions'] = echoed;
            variable95 = undefined;
            if(variable56) { _fun00006_ip = 5189; continue _fun00005 }
 5186:
            variable95 = variable97;
 5189:
            entity['referencedMessage'] = variable95;
            entity['threadEmbed'] = variable94;
            variable95 = result != variable96;
            variable94 = undefined;
            if(!variable95) { _fun00006_ip = 5220; continue _fun00005 }
 5208:
            variable95 = variable96.getForwardInfo;
            variable94 = variable95.bind(variable96)();
 5220:
            entity['forwardInfo'] = variable94;
            variable94 = !sequen;
            if(!variable94) { _fun00006_ip = 5239; continue _fun00005 }
 5233:
            variable94 = michal.mentioned;
 5239:
            entity['mentioned'] = variable94;
            variable94 = michal.isEdited;
            variable95 = variable94.bind(michal)();
            variable94 = quebec;
            if(!variable95) { _fun00006_ip = 5321; continue _fun00005 }
 5260:
            variable94 = quebec;
            if(variable56) { _fun00006_ip = 5321; continue _fun00005 }
 5266:
            variable98 = _closure1_slot0;
            variable99 = _closure1_slot2;
            variable95 = 24;
            variable96 = variable99[variable95];
            variable96 = variable98.bind(oscard)(variable96);
            variable97 = variable96.intl;
            variable96 = variable97.string;
            variable95 = variable99[variable95];
            variable95 = variable98.bind(oscard)(variable95);
            variable95 = variable95.t;
            variable95 = variable95.C8sXIC;
            variable94 = variable96.bind(variable97)(variable95);
 5321:
            entity['edited'] = variable94;
            variable94 = record.editedColor;
            entity['editedColor'] = variable94;
            variable94 = michal.isUnsupported;
            if(variable94) { _fun00006_ip = 5354; continue _fun00005 }
 5346:
            variable94 = record.textColor;
            _fun00006_ip = 5360; continue _fun00005;
 5354:
            variable94 = record.unsupportedColor;
 5360:
            entity['textColor'] = variable94;
            variable94 = record.linkColor;
            entity['linkColor'] = variable94;
            entity['tagText'] = variable93;
            entity['tagVerified'] = variable92;
            entity['tagTextColor'] = variable91;
            entity['tagBackgroundColor'] = variable90;
            entity['tagType'] = variable89;
            entity['tagIconUrl'] = variable88;
            entity['opTagText'] = variable87;
            entity['opTagTextColor'] = variable86;
            entity['opTagBackgroundColor'] = variable85;
            entity['constrainedWidth'] = variable84;
            entity['gifAutoPlay'] = variable60;
            entity['animateEmoji'] = variable80;
            if(!variable71) { _fun00006_ip = 5444; continue _fun00005 }
 5439:
            variable83 = variable77.username;
 5444:
            variable84 = result != variable83;
            variable80 = undefined;
            if(!variable84) { _fun00006_ip = 5456; continue _fun00005 }
 5453:
            variable80 = variable83;
 5456:
            entity['username'] = variable80;
            variable80 = undefined;
            if(variable71) { _fun00006_ip = 5471; continue _fun00005 }
 5465:
            variable80 = variable82.uri;
 5471:
            entity['avatarURL'] = variable80;
            variable80 = undefined;
            if(variable71) { _fun00006_ip = 5484; continue _fun00005 }
 5481:
            variable80 = variable81;
 5484:
            entity['avatarDecorationURL'] = variable80;
            variable77 = variable77.id;
            entity['authorId'] = variable77;
            if(variable71) { _fun00006_ip = 5531; continue _fun00005 }
 5502:
            variable77 = 'username';
            if(!(variable77 === kiloes)) { _fun00006_ip = 5531; continue _fun00005 }
 5510:
            variable77 = _closure1_slot3;
            variable77 = variable77.bind(oscard)(variable75);
            if(!(result == variable77)) { _fun00006_ip = 5529; continue _fun00005 }
 5523:
            variable77 = record.defaultUsernameColor;
 5529:
            _fun00006_ip = 5537; continue _fun00005;
 5531:
            variable77 = record.defaultUsernameColor;
 5537:
            entity['usernameColor'] = variable77;
            variable77 = null;
            if(variable71) { _fun00006_ip = 5571; continue _fun00005 }
 5547:
            variable80 = _closure1_slot3;
            variable81 = variable80.bind(oscard)(variable75);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5568; continue _fun00005 }
 5565:
            variable80 = variable81;
 5568:
            variable77 = variable80;
 5571:
            entity['roleColor'] = variable77;
            variable77 = null;
            if(!variable78) { _fun00006_ip = 5696; continue _fun00005 }
 5581:
            variable77 = null;
            if(variable71) { _fun00006_ip = 5696; continue _fun00005 }
 5586:
            variable78 = result != variable79;
            variable77 = null;
            if(!variable78) { _fun00006_ip = 5696; continue _fun00005 }
 5595:
            variable78 = {};
            variable81 = _closure1_slot3;
            variable80 = variable79.primaryColor;
            variable81 = variable81.bind(oscard)(variable80);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5624; continue _fun00005 }
 5621:
            variable80 = variable81;
 5624:
            variable78['primaryColor'] = variable80;
            variable81 = _closure1_slot3;
            variable80 = variable79.secondaryColor;
            variable81 = variable81.bind(oscard)(variable80);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5656; continue _fun00005 }
 5653:
            variable80 = variable81;
 5656:
            variable78['secondaryColor'] = variable80;
            variable80 = _closure1_slot3;
            variable79 = variable79.tertiaryColor;
            variable80 = variable80.bind(oscard)(variable79);
            variable81 = result != variable80;
            variable79 = null;
            if(!variable81) { _fun00006_ip = 5688; continue _fun00005 }
 5685:
            variable79 = variable80;
 5688:
            variable78['tertiaryColor'] = variable79;
            variable77 = variable78;
 5696:
            entity['roleColors'] = variable77;
            variable77 = 'dot';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5716; continue _fun00005 }
 5712:
            variable77 = result != variable75;
 5716:
            entity['shouldShowRoleDot'] = variable77;
            variable77 = 'username';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5736; continue _fun00005 }
 5732:
            variable77 = result != variable75;
 5736:
            entity['shouldShowRoleOnName'] = variable77;
            entity['showLinkDecorations'] = variable70;
            if(variable71) { _fun00006_ip = 5770; continue _fun00005 }
 5749:
            variable70 = _closure1_slot3;
            variable70 = variable70.bind(oscard)(variable75);
            if(!(result == variable70)) { _fun00006_ip = 5768; continue _fun00005 }
 5762:
            variable70 = record.defaultUsernameColor;
 5768:
            _fun00006_ip = 5776; continue _fun00005;
 5770:
            variable70 = record.defaultUsernameColor;
 5776:
            entity['colorString'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5789; continue _fun00005 }
 5786:
            variable70 = variable74;
 5789:
            entity['roleIcon'] = variable70;
            variable74 = result != variable76;
            variable70 = undefined;
            if(!variable74) { _fun00006_ip = 5834; continue _fun00005 }
 5803:
            variable75 = _closure1_slot0;
            variable77 = _closure1_slot2;
            variable74 = 63;
            variable74 = variable77[variable74];
            variable75 = variable75.bind(oscard)(variable74);
            variable74 = variable75.createConnectionsRoleTag;
            variable70 = variable74.bind(variable75)(variable76);
 5834:
            entity['connectionsRoleTag'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5849; continue _fun00005 }
 5846:
            variable70 = variable73;
 5849:
            entity['timestamp'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5865; continue _fun00005 }
 5859:
            variable70 = record.timestampColor;
 5865:
            entity['timestampColor'] = variable70;
            entity['content'] = variable69;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable56;
            variable69 = undefined;
            if(!(oscard !== variable72)) { _fun00006_ip = 5923; continue _fun00005 }
 5890:
            variable71 = _closure1_slot0;
            variable73 = _closure1_slot2;
            variable70 = 64;
            variable70 = variable73[variable70];
            variable71 = variable71.bind(oscard)(variable70);
            variable70 = variable71.createSurveyIndication;
            variable69 = variable70.bind(variable71)(michal, update, variable72);
 5923:
            entity['surveyIndication'] = variable69;
            variable70 = _closure1_slot0;
            variable71 = _closure1_slot2;
            variable69 = 65;
            variable69 = variable71[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createEphemeralIndication;
            variable69 = variable69.bind(variable70)(michal);
            entity['ephemeralIndication'] = variable69;
            entity['interactionStatus'] = variable57;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 6029; continue _fun00005 }
 5978:
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable59 = 66;
            variable59 = variable70[variable59];
            variable70 = variable69.bind(oscard)(variable59);
            variable69 = variable70.createExecutedCommand;
            r103 = record.defaultUsernameColor;
            r108 = variable70;
            r107 = michal;
            r106 = ctrled;
            r105 = kiloes;
            r104 = update;
            variable57 = r108[variable69](r107, r106, r105, r104, r103, r102);
 6029:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 6140; continue _fun00005 }
 6056:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 6140; continue _fun00005 }
 6061:
            variable59 = _closure1_slot1;
            variable69 = _closure1_slot2;
            variable58 = 67;
            variable58 = variable69[variable58];
            variable59 = variable59.bind(oscard)(variable58);
            variable58 = {};
            variable58['message'] = michal;
            variable58['guildId'] = variable68;
            variable58['interaction'] = variable67;
            variable58['shouldDisableInteractiveComponents'] = variable66;
            variable58['shouldShowMedia'] = variable65;
            variable58['shouldObscureSpoiler'] = variable64;
            variable58['shouldObscureExplicitMedia'] = variable63;
            variable58['shouldAgeVerify'] = variable62;
            variable58['shouldShowMosaicMediaDescriptions'] = variable61;
            variable58['shouldAutoPlayGifs'] = variable60;
            variable58['colors'] = record;
            variable57 = variable59.bind(oscard)(variable58);
 6140:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 6156; continue _fun00005 }
 6150:
            variable57 = record.feedbackColor;
 6156:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 6172; continue _fun00005 }
 6166:
            variable54 = record.highlightColor;
 6172:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 6189; continue _fun00005 }
 6186:
            variable54 = variable55;
 6189:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 6203; continue _fun00005 }
 6197:
            variable53 = new Array(0);
            _fun00006_ip = 6235; continue _fun00005;
 6203:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 68;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscard)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(michal, update);
 6235:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 6249; continue _fun00005 }
 6243:
            variable50 = new Array(0);
            _fun00006_ip = 6282; continue _fun00005;
 6249:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 69;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(michal, variable45, update);
 6282:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 6324; continue _fun00005 }
 6292:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 70;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(michal, update);
 6324:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 6368; continue _fun00005 }
 6336:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 71;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(michal, update);
 6368:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 6399; continue _fun00005 }
 6378:
            if(!variable47) { _fun00006_ip = 6390; continue _fun00005 }
 6381:
            if(variable48) { _fun00006_ip = 6387; continue _fun00005 }
 6384:
            variable48 = variable49;
 6387:
            variable47 = variable48;
 6390:
            if(variable47) { _fun00006_ip = 6396; continue _fun00005 }
 6393:
            variable47 = variable42;
 6396:
            variable43 = variable47;
 6399:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6455; continue _fun00005 }
 6423:
            variable43 = michal.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6455; continue _fun00005 }
 6445:
            variable41 = 0.2;
 6455:
            entity['attachmentsOpacity'] = variable41;
            variable42 = _closure1_slot1;
            variable43 = _closure1_slot2;
            variable41 = 72;
            variable41 = variable43[variable41];
            variable42 = variable42.bind(oscard)(variable41);
            variable41 = {};
            variable41['message'] = variable45;
            variable45 = _closure1_slot0;
            variable43 = variable43[variable46];
            variable43 = variable45.bind(oscard)(variable43);
            variable45 = variable43.AnimateStickers;
            variable43 = variable45.getSetting;
            variable43 = variable43.bind(variable45)();
            variable41['animateStickersSetting'] = variable43;
            variable43 = michal.id;
            variable43 = variable43 === variable44;
            variable41['isUserInteracting'] = variable43;
            variable41 = variable42.bind(oscard)(variable41);
            entity['stickers'] = variable41;
            if(!variable39) { _fun00006_ip = 6550; continue _fun00005 }
 6547:
            variable39 = variable40;
 6550:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == ctrled;
            if(variable39) { _fun00006_ip = 6580; continue _fun00005 }
 6567:
            variable36 = ctrled.isForumPost;
            variable36 = variable36.bind(ctrled)();
            variable39 = !variable36;
 6580:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6600; continue _fun00005 }
 6586:
            variable40 = michal.id;
            variable39 = michal.channel_id;
            variable36 = variable40 === variable39;
 6600:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != ctrled;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6644; continue _fun00005 }
 6614:
            variable39 = ctrled.isForumPost;
            variable39 = variable39.bind(ctrled)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6644; continue _fun00005 }
 6629:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6644; continue _fun00005 }
 6634:
            variable38 = _closure1_slot30;
            variable36 = variable38.bind(oscard)(michal, ctrled);
 6644:
            entity['postActions'] = variable36;
            variable36 = michal.author;
            variable36 = variable36.id;
            variable36 = variable36 === variable37;
            entity['isCurrentUserMessageAuthor'] = variable36;
            variable36 = _closure1_slot6;
            variable36 = variable36.gradientPreset;
            variable36 = result != variable36;
            entity['usingGradientTheme'] = variable36;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            variable36 = 25;
            variable38 = variable40[variable36];
            variable42 = variable37.bind(oscard)(variable38);
            variable41 = variable42.getAssetUriForEmbed;
            variable39 = _closure1_slot1;
            variable38 = 73;
            variable38 = variable40[variable38];
            variable38 = variable39.bind(oscard)(variable38);
            variable38 = variable41.bind(variable42)(variable38);
            entity['swipeToReplyIconUrl'] = variable38;
            variable36 = variable40[variable36];
            variable38 = variable37.bind(oscard)(variable36);
            variable37 = variable38.getAssetUriForEmbed;
            variable36 = 74;
            variable36 = variable40[variable36];
            variable36 = variable39.bind(oscard)(variable36);
            variable36 = variable37.bind(variable38)(variable36);
            entity['swipeToEditIconUrl'] = variable36;
            entity['showRemixButton'] = offset;
            entity['remixTitle'] = quebec;
            quebec = record.remixButtonIconColor;
            entity['remixButtonIconColor'] = quebec;
            quebec = record.remixButtonBackgroundColor;
            entity['remixButtonBackgroundColor'] = quebec;
            entity['referralTrialOffer'] = whisks;
            entity['referralTrialOfferInfo'] = limora;
            if(cntext) { _fun00006_ip = 6838; continue _fun00005 }
 6832:
            cntext = new Array(0);
            _fun00006_ip = 6870; continue _fun00005;
 6838:
            whisks = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 75;
            limora = quebec[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createPostPreviewEmbeds;
            cntext = limora.bind(whisks)(michal, equals);
 6870:
            entity['postPreviewEmbeds'] = cntext;
            limora = _closure1_slot0;
            whisks = _closure1_slot2;
            cntext = 24;
            equals = whisks[cntext];
            equals = limora.bind(oscard)(equals);
            variable36 = equals.intl;
            quebec = variable36.string;
            equals = whisks[cntext];
            equals = limora.bind(oscard)(equals);
            equals = equals.t;
            equals = equals.2aXnfX;
            equals = quebec.bind(variable36)(equals);
            entity['obscureLearnMoreLabel'] = equals;
            equals = 76;
            equals = whisks[equals];
            quebec = limora.bind(oscard)(equals);
            equals = quebec.createSafetyPolicyNoticeEmbed;
            equals = equals.bind(quebec)(michal);
            entity['safetyPolicyNoticeEmbed'] = equals;
            entity['pollData'] = source;
            source = 77;
            source = whisks[source];
            equals = limora.bind(oscard)(source);
            source = equals.createSafetySystemNotificationEmbed;
            source = source.bind(equals)(michal);
            entity['safetySystemNotificationEmbed'] = source;
            source = 78;
            source = whisks[source];
            equals = limora.bind(oscard)(source);
            whisks = equals.createCtaButton;
            limora = michal.id;
            source = michal.channel_id;
            source = whisks.bind(equals)(limora, source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!sierra) { _fun00006_ip = 7055; continue _fun00005 }
 7049:
            source = record.embedBackgroundColor;
 7055:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 79;
            sierra = source[sierra];
            limora = record.bind(oscard)(sierra);
            sierra = limora.createMessageAccessibilityActions;
            sierra = sierra.bind(limora)(michal, ctrled);
            entity['accessibilityActions'] = sierra;
            entity['showInlineForwardButton'] = status;
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
            if(!tangon) { _fun00006_ip = 7321; continue _fun00005 }
 7288:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7321:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 7367; continue _fun00005 }
 7334:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7367:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 7380; continue _fun00005 }
 7377:
            report = tangon;
 7380:
            if(!report) { _fun00006_ip = 7416; continue _fun00005 }
 7383:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 80;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7416:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7458; continue _fun00005 }
 7426:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 80;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7458:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7479; continue _fun00005 }
 7474:
            report = ctrled.type;
 7479:
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
 7537:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7634; continue _fun00005 }
 7556:
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
            if(source) { _fun00006_ip = 7622; continue _fun00005 }
 7612:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7622:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7728; continue _fun00005;
 7634:
            tangon = {};
            report = _closure1_slot29;
            r108 = undefined;
            r107 = michal;
            r106 = kiloes;
            r105 = golfie;
            r104 = output;
            r103 = option;
            report = r108[report](r107, r106, r105, r104, r103, r102);
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
            r106 = output.bind(result)(report);
            r107 = tangon;
            report = copyDataProperties(r107, r106);
            entity = tangon;
 7728:
            return entity;
 7730:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7797; continue _fun00005 }
 7742:
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
 7797:
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
            r107 = golfie;
            r106 = option;
            option = copyDataProperties(r107, r106);
            option = 'renderThreadEmbeds';
            golfie[option] = offset;
            option = 'renderReactions';
            golfie[option] = offset;
            option = 'renderShortcuts';
            golfie[option] = offset;
            option = 'shouldDisableInteractiveComponents';
            golfie[option] = verify;
            zuuluu['options'] = golfie;
            r106 = report.bind(oscard)(zuuluu);
            r107 = entity;
            zuuluu = copyDataProperties(r107, r106);
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
    tangon = tangon.ClanTagBadgeSize;
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