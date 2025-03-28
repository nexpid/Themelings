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
            offset = _closure1_slot32;
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
    var _closure1_slot30 = entity;
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
    var _closure1_slot31 = entity;
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
            vacuum = option.renderReplies;
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
            config = option.useAlternateEmbedColors;
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
            record = verify.bind(oscard)(update, config);
            verify = 32;
            verify = ctrled[verify];
            papara = offset.bind(oscard)(verify);
            cntext = papara.getCurrentConfig;
            ctrled = {};
            config = 'createMessageContent';
            ctrled['location'] = config;
            verify = {};
            offset = false;
            verify['autoTrackExposure'] = offset;
            verify = cntext.bind(papara)(ctrled, verify);
            limora = verify.enabled;
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
            papara = _closure1_slot1;
            target = _closure1_slot2;
            sizing = 22;
            sizing = target[sizing];
            target = papara.bind(oscard)(sizing);
            papara = target.castMessageIdAsChannelId;
            sizing = michal.id;
            sizing = papara.bind(target)(sizing);
            output = output.bind(echoed)(sizing);
            echoed = result == ctrled;
            sizing = undefined;
            if(echoed) { _fun00006_ip = 513; continue _fun00005 }
 503:
            echoed = ctrled.getGuildId;
            sizing = echoed.bind(ctrled)();
 513:
            papara = _closure1_slot0;
            target = _closure1_slot2;
            echoed = 33;
            echoed = target[echoed];
            papara = papara.bind(oscard)(echoed);
            echoed = papara.canUseEnhancedRoleColors;
            variable78 = echoed.bind(papara)(sizing, config);
            variable68 = sizing;
            if(!(result == variable96)) { _fun00006_ip = 583; continue _fun00005 }
 552:
            echoed = _closure1_slot0;
            papara = _closure1_slot2;
            sizing = 34;
            sizing = papara[sizing];
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
            papara = _closure1_slot1;
            target = _closure1_slot2;
            sizing = 35;
            sizing = target[sizing];
            papara = papara.bind(oscard)(sizing);
            sizing = {};
            target = michal.reactions;
            sizing['reactions'] = target;
            sizing['animateEmoji'] = variable80;
            echoed = papara.bind(oscard)(sizing);
 651:
            target = michal.type;
            sizing = _closure1_slot23;
            papara = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(target === papara)) { _fun00006_ip = 722; continue _fun00005 }
 672:
            sierra = _closure1_slot12;
            target = sierra.getMessageByReference;
            papara = michal.messageReference;
            target = target.bind(sierra)(papara);
            equals = target.state;
            papara = _closure1_slot13;
            sierra = papara.LOADED;
            papara = null;
            if(!(equals === sierra)) { _fun00006_ip = 719; continue _fun00005 }
 714:
            papara = target.message;
 719:
            sizing = papara;
 722:
            if(!(result == sizing)) { _fun00006_ip = 7518; continue _fun00005 }
 729:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 36;
            papara = sierra[papara];
            papara = target.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal);
            if(papara) { _fun00006_ip = 7325; continue _fun00005 }
 760:
            variable71 = !backup;
            if(variable71) { _fun00006_ip = 769; continue _fun00005 }
 766:
            variable71 = variable56;
 769:
            variable77 = michal.author;
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            papara = 38;
            papara = sierra[papara];
            sierra = target.bind(oscard)(papara);
            target = sierra.isMessageNewerThanImprovedMarkdownEpoch;
            equals = michal.editedTimestamp;
            if(!(result == equals)) { _fun00006_ip = 817; continue _fun00005 }
 811:
            equals = michal.timestamp;
 817:
            papara = equals.valueOf;
            papara = papara.bind(equals)();
            equals = target.bind(sierra)(papara);
            papara = variable45.content;
            if(!(result != papara)) { _fun00006_ip = 853; continue _fun00005 }
 840:
            target = variable45.content;
            papara = '';
            if(!(papara === target)) { _fun00006_ip = 866; continue _fun00005 }
 853:
            target = {};
            target['content'] = oscard;
            target['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 956; continue _fun00005;
 866:
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            papara = 39;
            papara = variable40[papara];
            variable40 = sierra.bind(oscard)(papara);
            sierra = variable40.parseMessageMarkup;
            if(variable42) { _fun00006_ip = 907; continue _fun00005 }
 895:
            papara = cntext;
            if(!papara) { _fun00006_ip = 904; continue _fun00005 }
 901:
            papara = quebec;
 904:
            variable42 = papara;
 907:
            papara = result != output;
            if(!papara) { _fun00006_ip = 925; continue _fun00005 }
 914:
            variable46 = michal.isFirstMessageInForumPost;
            papara = variable46.bind(michal)(output);
 925:
            r108 = variable40;
            r107 = michal;
            r106 = variable45;
            r105 = variable42;
            r104 = golfie;
            r103 = papara;
            r102 = equals;
            r101 = equals;
            r100 = variable41;
            target = r108[sierra](r107, r106, r105, r104, r103, r102, r101, r100, variable100);
 956:
            papara = target.content;
            variable41 = target.hasSpoilerEmbeds;
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            target = 40;
            variable42 = variable40[target];
            variable46 = sierra.bind(oscard)(variable42);
            variable42 = variable46.shouldRedactExplicitContent;
            variable63 = variable42.bind(variable46)(michal);
            target = variable40[target];
            sierra = sierra.bind(oscard)(target);
            target = sierra.shouldAgeVerifyForExplicitMedia;
            variable62 = target.bind(sierra)();
            sierra = undefined;
            if(!cntext) { _fun00006_ip = 1203; continue _fun00005 }
 1025:
            target = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 41;
            variable40 = variable42[variable40];
            variable48 = target.bind(oscard)(variable40);
            variable46 = variable48.getCurrentConfig;
            variable40 = {};
            variable40['location'] = config;
            config = {};
            config['autoTrackExposure'] = offset;
            config = variable46.bind(variable48)(variable40, config);
            variable40 = config.enabled;
            config = 42;
            config = variable42[config];
            target = target.bind(oscard)(config);
            config = {};
            variable42 = variable45.embeds;
            config['embeds'] = variable42;
            variable42 = michal.channel_id;
            config['channelId'] = variable42;
            config['gifAutoPlay'] = variable60;
            config['hasSpoilerEmbeds'] = variable41;
            config['ignoreEmbedDescriptionCache'] = variable37;
            variable37 = {};
            variable37['tiktok'] = variable40;
            config['playInline'] = variable37;
            config['shouldInlineEmbedMedia'] = quebec;
            config['colors'] = record;
            config['showListsAndHeaders'] = equals;
            config['showMaskedLinks'] = equals;
            equals = record.embedBackgroundColor;
            config['themedBackgroundColor'] = equals;
            config['shouldObscureExplicitMedia'] = variable63;
            config['shouldAgeVerify'] = variable62;
            equals = michal.author;
            equals = equals.bot;
            config['authorIsBot'] = equals;
            config['showContentInventoryEntryFallbackEmbed'] = whisks;
            sierra = target.bind(oscard)(config);
 1203:
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            config = 43;
            config = whisks[config];
            target = target.bind(oscard)(config);
            config = {};
            config['message'] = michal;
            config['isSystemDM'] = yankee;
            config['channel'] = ctrled;
            config['colors'] = record;
            config = target.bind(oscard)(config);
            variable93 = config.tagText;
            variable92 = config.tagVerified;
            variable91 = config.tagTextColor;
            variable90 = config.tagBackgroundColor;
            variable89 = config.tagType;
            variable88 = config.tagIconUrl;
            variable87 = config.opTagText;
            variable86 = config.opTagTextColor;
            variable85 = config.opTagBackgroundColor;
            whisks = _closure1_slot21;
            target = whisks.getUploaderFileForMessageId;
            config = michal.id;
            target = target.bind(whisks)(config);
            variable42 = result != target;
            whisks = michal.state;
            config = _closure1_slot24;
            config = config.SEND_FAILED;
            config = whisks !== config;
            if(config) { _fun00006_ip = 1357; continue _fun00005 }
 1347:
            whisks = michal.isCommandType;
            config = whisks.bind(michal)();
 1357:
            whisks = sierra;
            if(config) { _fun00006_ip = 1428; continue _fun00005 }
 1363:
            config = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1374; continue _fun00005 }
 1370:
            config = new Array(0);
 1374:
            equals = config.push;
            quebec = _closure1_slot1;
            variable37 = _closure1_slot2;
            sierra = 44;
            sierra = variable37[sierra];
            quebec = quebec.bind(oscard)(sierra);
            sierra = {};
            sierra['uploaderFile'] = target;
            sierra['useAttachmentUploadPreview'] = variable42;
            sierra['colors'] = record;
            sierra = quebec.bind(oscard)(sierra);
            sierra = equals.bind(config)(sierra);
            whisks = config;
 1428:
            equals = _closure1_slot8;
            sierra = equals.getMessage;
            config = michal.id;
            sierra = sierra.bind(equals)(config);
            variable55 = whisks;
            if(!(result != sierra)) { _fun00006_ip = 1527; continue _fun00005 }
 1455:
            config = whisks;
            if(!(result == whisks)) { _fun00006_ip = 1466; continue _fun00005 }
 1462:
            config = new Array(0);
 1466:
            variable37 = sierra.errorMessage;
            whisks = config.push;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            sierra = 44;
            sierra = quebec[sierra];
            quebec = equals.bind(oscard)(sierra);
            equals = quebec.createAutomodBlockedMessageEmbed;
            sierra = {};
            sierra['errorMessage'] = variable37;
            sierra['colors'] = record;
            sierra = equals.bind(quebec)(sierra);
            sierra = whisks.bind(config)(sierra);
            variable55 = config;
 1527:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            quebec = 45;
            config = whisks[quebec];
            variable37 = sierra.bind(oscard)(config);
            equals = variable37.getUserAuthor;
            config = michal.author;
            config = equals.bind(variable37)(config, ctrled);
            variable48 = config.guildMemberAvatar;
            variable37 = config.guildMemberAvatarDecoration;
            equals = config.iconRoleId;
            config = 46;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.ensureAvatarSource;
            config = michal.isInteractionPlaceholder;
            config = config.bind(michal)();
            if(!config) { _fun00006_ip = 1655; continue _fun00005 }
 1616:
            config = michal.author;
            config = config.avatar;
            if(!(result == config)) { _fun00006_ip = 1655; continue _fun00005 }
 1632:
            variable40 = michal.application;
            variable41 = result == variable40;
            config = undefined;
            if(variable41) { _fun00006_ip = 1651; continue _fun00005 }
 1646:
            config = variable40.icon;
 1651:
            if(!(result == config)) { _fun00006_ip = 1730; continue _fun00005 }
 1655:
            if(!(result != variable48)) { _fun00006_ip = 1663; continue _fun00005 }
 1659:
            if(!(result == variable68)) { _fun00006_ip = 1676; continue _fun00005 }
 1663:
            config = variable77.getAvatarSource;
            config = config.bind(variable77)(oscard);
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
            config = variable41.bind(variable46)(variable40, variable77);
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
            config = variable41.bind(variable46)(variable40);
 1807:
            variable82 = sierra.bind(whisks)(config);
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 47;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getAvatarDecorationURL;
            config = {};
            if(!(result == variable37)) { _fun00006_ip = 1850; continue _fun00005 }
 1844:
            variable37 = variable77.avatarDecoration;
 1850:
            config['avatarDecoration'] = variable37;
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
            config['size'] = variable37;
            variable81 = sierra.bind(whisks)(config);
            config = result != equals;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1986; continue _fun00005 }
 1928:
            config = result != variable68;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1986; continue _fun00005 }
 1937:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 50;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getRoleIcon;
            config = {};
            config['guildId'] = variable68;
            config['roleId'] = equals;
            equals = 18;
            config['size'] = equals;
            variable74 = sierra.bind(whisks)(config);
 1986:
            sierra = michal.hasFlag;
            config = _closure1_slot25;
            config = config.SOURCE_MESSAGE_DELETED;
            config = sierra.bind(michal)(config);
            if(!config) { _fun00006_ip = 2065; continue _fun00005 }
 2010:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 24;
            sierra = variable37[config];
            sierra = equals.bind(oscard)(sierra);
            whisks = sierra.intl;
            sierra = whisks.string;
            config = variable37[config];
            config = equals.bind(oscard)(config);
            config = config.t;
            config = config.JOtgS0;
            papara = sierra.bind(whisks)(config);
 2065:
            sierra = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            sierra = sierra.bind(oscard)(config);
            config = sierra.getMessageAuthor;
            config = config.bind(sierra)(michal);
            variable83 = config.nick;
            variable75 = config.colorString;
            variable79 = config.colorStrings;
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === config)) { _fun00006_ip = 2193; continue _fun00005 }
 2130:
            sierra = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 24;
            whisks = variable37[config];
            whisks = sierra.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.formatToPlainString;
            config = variable37[config];
            config = sierra.bind(oscard)(config);
            config = config.t;
            sierra = config.u4A+xM;
            config = {};
            config['appName'] = variable83;
            papara = whisks.bind(equals)(sierra, config);
 2193:
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.REPLY;
            variable97 = undefined;
            if(!(sierra === config)) { _fun00006_ip = 3536; continue _fun00005 }
 2217:
            variable97 = undefined;
            if(!vacuum) { _fun00006_ip = 3536; continue _fun00005 }
 2225:
            sierra = _closure1_slot12;
            config = sierra.getMessageByReference;
            vacuum = michal.messageReference;
            vacuum = config.bind(sierra)(vacuum);
            sierra = vacuum.state;
            config = _closure1_slot13;
            config = config.LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2503; continue _fun00005 }
 2268:
            config = _closure1_slot13;
            config = config.NOT_LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2420; continue _fun00005 }
 2285:
            config = _closure1_slot13;
            config = config.DELETED;
            if(!(config !== sierra)) { _fun00006_ip = 2337; continue _fun00005 }
 2299:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 52;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.assertNever;
            config = config.bind(sierra)(vacuum);
            variable97 = undefined;
            _fun00006_ip = 3536; continue _fun00005;
 2337:
            config = {};
            sierra = _closure1_slot22;
            sierra = sierra.SYSTEM;
            config['state'] = sierra;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            sierra = 24;
            whisks = variable40[sierra];
            whisks = variable37.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            sierra = variable40[sierra];
            sierra = variable37.bind(oscard)(sierra);
            sierra = sierra.t;
            sierra = sierra.mE3KJC;
            sierra = whisks.bind(equals)(sierra);
            config['content'] = sierra;
            variable97 = config;
            _fun00006_ip = 3536; continue _fun00005;
 2420:
            config = {};
            sierra = _closure1_slot22;
            sierra = sierra.SYSTEM;
            config['state'] = sierra;
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            sierra = 24;
            whisks = variable40[sierra];
            whisks = variable37.bind(oscard)(whisks);
            equals = whisks.intl;
            whisks = equals.string;
            sierra = variable40[sierra];
            sierra = variable37.bind(oscard)(sierra);
            sierra = sierra.t;
            sierra = sierra.1i+hMj;
            sierra = whisks.bind(equals)(sierra);
            config['content'] = sierra;
            variable97 = config;
            _fun00006_ip = 3536; continue _fun00005;
 2503:
            vacuum = vacuum.message;
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 34;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.maybeCreateSingleForwardForMessage;
            whisks = config.bind(sierra)(vacuum);
            sierra = _closure1_slot20;
            config = sierra.isBlockedForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3458; continue _fun00005 }
 2560:
            sierra = _closure1_slot20;
            config = sierra.isIgnoredForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3378; continue _fun00005 }
 2581:
            sierra = _closure1_slot32;
            config = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            config['message'] = vacuum;
            config['messageForward'] = whisks;
            config['roleStyle'] = kiloes;
            equals = {};
            r107 = equals;
            r106 = option;
            variable37 = copyDataProperties(r107, r106);
            variable37 = 'renderReplies';
            equals[variable37] = offset;
            config['options'] = equals;
            sierra = sierra.bind(oscard)(config);
            if(!(result != sierra)) { _fun00006_ip = 3295; continue _fun00005 }
 2654:
            config = 'username';
            config = config in sierra;
            if(!config) { _fun00006_ip = 2825; continue _fun00005 }
 2668:
            equals = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            equals = equals.bind(oscard)(config);
            config = equals.getMessageAuthor;
            config = config.bind(equals)(vacuum);
            quebec = config.nick;
            equals = config.colorString;
            if(!(result == quebec)) { _fun00006_ip = 2723; continue _fun00005 }
 2712:
            config = vacuum.author;
            quebec = config.username;
 2723:
            variable37 = result != quebec;
            config = undefined;
            if(!variable37) { _fun00006_ip = 2735; continue _fun00005 }
 2732:
            config = quebec;
 2735:
            sierra['username'] = config;
            if(variable71) { _fun00006_ip = 2765; continue _fun00005 }
 2744:
            config = _closure1_slot3;
            config = config.bind(oscard)(equals);
            if(!(result == config)) { _fun00006_ip = 2763; continue _fun00005 }
 2757:
            config = sierra.colorString;
 2763:
            _fun00006_ip = 2771; continue _fun00005;
 2765:
            config = sierra.colorString;
 2771:
            sierra['colorString'] = config;
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            config = 51;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.bind(oscard)(michal, vacuum);
            if(!config) { _fun00006_ip = 2825; continue _fun00005 }
 2806:
            equals = sierra.username;
            config = '@';
            config = config + equals;
            sierra['username'] = config;
 2825:
            equals = result == whisks;
            config = undefined;
            if(equals) { _fun00006_ip = 2845; continue _fun00005 }
 2834:
            whisks = whisks.messageSnapshot;
            config = whisks.message;
 2845:
            quebec = vacuum;
            if(!(result != config)) { _fun00006_ip = 2855; continue _fun00005 }
 2852:
            quebec = config;
 2855:
            config = 'stickers';
            config = config in quebec;
            if(config) { _fun00006_ip = 2872; continue _fun00005 }
 2866:
            config = new Array(0);
            _fun00006_ip = 2903; continue _fun00005;
 2872:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 28;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getMessageStickers;
            config = whisks.bind(equals)(quebec);
 2903:
            config = config.length;
            whisks = 0;
            if(!(!(config > whisks))) { _fun00006_ip = 3171; continue _fun00005 }
 2917:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 29;
            config = variable37[config];
            variable40 = equals.bind(oscard)(config);
            variable37 = variable40.hasFlag;
            equals = quebec.flags;
            config = _closure1_slot25;
            config = config.IS_VOICE_MESSAGE;
            config = variable37.bind(variable40)(equals, config);
            if(config) { _fun00006_ip = 3114; continue _fun00005 }
 2970:
            equals = quebec.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(equals !== config)) { _fun00006_ip = 3081; continue _fun00005 }
 2989:
            config = quebec.embeds;
            config = config.length;
            if(!(!(config > whisks))) { _fun00006_ip = 3024; continue _fun00005 }
 3004:
            config = quebec.attachments;
            config = config.length;
            whisks = config > whisks;
            config = null;
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
            config = equals.bind(variable37)(whisks);
 3079:
            _fun00006_ip = 3112; continue _fun00005;
 3081:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 30;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getPollResultsReplyPreviewMobile;
            config = whisks.bind(equals)(quebec);
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
            config = equals.bind(quebec)(whisks);
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
            config = equals.bind(quebec)(whisks);
 3226:
            whisks = vacuum.type;
            vacuum = _closure1_slot23;
            vacuum = vacuum.POLL_RESULT;
            if(!(whisks === vacuum)) { _fun00006_ip = 3251; continue _fun00005 }
 3245:
            sierra['content'] = config;
 3251:
            vacuum = {};
            whisks = _closure1_slot22;
            whisks = whisks.LOADED;
            vacuum['state'] = whisks;
            vacuum['message'] = sierra;
            variable97 = vacuum;
            if(!(result != config)) { _fun00006_ip = 3536; continue _fun00005 }
 3281:
            vacuum['systemContent'] = config;
            variable97 = vacuum;
            _fun00006_ip = 3536; continue _fun00005;
 3295:
            vacuum = {};
            config = _closure1_slot22;
            config = config.SYSTEM;
            vacuum['state'] = config;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equals.bind(oscard)(sierra);
            whisks = sierra.intl;
            sierra = whisks.string;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.t;
            config = config.1i+hMj;
            config = sierra.bind(whisks)(config);
            vacuum['content'] = config;
            variable97 = vacuum;
            _fun00006_ip = 3536; continue _fun00005;
 3378:
            vacuum = {};
            config = _closure1_slot22;
            config = config.SYSTEM;
            vacuum['state'] = config;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equals.bind(oscard)(sierra);
            whisks = sierra.intl;
            sierra = whisks.string;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.t;
            config = config.G7p6v7;
            config = sierra.bind(whisks)(config);
            vacuum['content'] = config;
            variable97 = vacuum;
            _fun00006_ip = 3536; continue _fun00005;
 3458:
            vacuum = {};
            config = _closure1_slot22;
            config = config.SYSTEM;
            vacuum['state'] = config;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equals.bind(oscard)(sierra);
            whisks = sierra.intl;
            sierra = whisks.string;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.t;
            config = config.XAkOo6;
            config = sierra.bind(whisks)(config);
            vacuum['content'] = config;
            variable97 = vacuum;
 3536:
            variable94 = undefined;
            if(!source) { _fun00006_ip = 3566; continue _fun00005 }
 3541:
            source = _closure1_slot30;
            r108 = undefined;
            r107 = michal;
            r106 = kiloes;
            r105 = golfie;
            r104 = output;
            r103 = option;
            variable94 = r108[source](r107, r106, r105, r104, r103, r102);
 3566:
            vacuum = _closure1_slot9;
            source = vacuum.getInteraction;
            variable67 = source.bind(vacuum)(michal);
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 53;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.createInteractionStatus;
            variable57 = source.bind(vacuum)(michal, variable67);
            vacuum = result != variable68;
            source = null;
            if(!vacuum) { _fun00006_ip = 3643; continue _fun00005 }
 3622:
            sierra = _closure1_slot19;
            config = sierra.getMember;
            vacuum = variable77.id;
            source = config.bind(sierra)(variable68, vacuum);
 3643:
            config = _closure1_slot0;
            sierra = _closure1_slot2;
            vacuum = 54;
            vacuum = sierra[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.isMemberCommunicationDisabled;
            variable40 = vacuum.bind(config)(source);
            vacuum = _closure1_slot4;
            equals = vacuum.useReducedMotion;
            vacuum = _closure1_slot4;
            variable70 = vacuum.alwaysShowLinkDecorations;
            vacuum = result == ctrled;
            whisks = source;
            source = undefined;
            if(vacuum) { _fun00006_ip = 3712; continue _fun00005 }
 3706:
            source = ctrled.parent_id;
 3712:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3762; continue _fun00005 }
 3719:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3762; continue _fun00005 }
 3726:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3762; continue _fun00005 }
 3742:
            config = _closure1_slot18;
            vacuum = config.getChannel;
            source = ctrled.parent_id;
            sierra = vacuum.bind(config)(source);
 3762:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 55;
            source = config[source];
            config = vacuum.bind(oscard)(source);
            vacuum = config.getVisibleConnectionsRole;
            source = {};
            source['guildMember'] = whisks;
            source['channel'] = sierra;
            source['onlyChannelConnectionRoles'] = verify;
            variable76 = vacuum.bind(config)(source);
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
            vacuum = michal.attachments;
            vacuum = vacuum.length;
            source = variable54 === vacuum;
 3862:
            if(!source) { _fun00006_ip = 3869; continue _fun00005 }
 3865:
            source = result != target;
 3869:
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            variable46 = 56;
            vacuum = vacuum[variable46];
            vacuum = config.bind(oscard)(vacuum);
            config = vacuum.ViewImageDescriptions;
            vacuum = config.getSetting;
            variable61 = vacuum.bind(config)();
            variable41 = new Array(0);
            if(source) { _fun00006_ip = 4037; continue _fun00005 }
 3915:
            if(!variable47) { _fun00006_ip = 4098; continue _fun00005 }
 3921:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = 58;
            vacuum = sierra[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = {};
            sierra = variable45.attachments;
            vacuum['attachments'] = sierra;
            quebec = _closure1_slot21;
            whisks = quebec.getUploadAttachments;
            sierra = michal.nonce;
            sierra = whisks.bind(quebec)(sierra);
            vacuum['uploadAttachments'] = sierra;
            vacuum['shouldInlineAttachmentMedia'] = variable43;
            vacuum['gifAutoPlay'] = variable60;
            vacuum['viewImageDescriptions'] = variable61;
            vacuum['useReducedMotion'] = equals;
            vacuum['shouldObscureSpoiler'] = variable64;
            sierra = record.embedBackgroundColor;
            vacuum['themedBackgroundColor'] = sierra;
            vacuum['shouldObscureExplicitMedia'] = variable63;
            vacuum['shouldAgeVerify'] = variable62;
            vacuum['colors'] = record;
            variable41 = config.bind(oscard)(vacuum);
            _fun00006_ip = 4098; continue _fun00005;
 4037:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = 57;
            vacuum = sierra[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = {};
            vacuum['uploaderFile'] = target;
            sierra = michal.state;
            target = _closure1_slot24;
            target = target.SEND_FAILED;
            target = sierra === target;
            vacuum['isFailedMessage'] = target;
            vacuum['shouldInlineAttachmentMedia'] = variable43;
            variable41 = config.bind(oscard)(vacuum);
 4098:
            if(!source) { _fun00006_ip = 4120; continue _fun00005 }
 4101:
            vacuum = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(vacuum === source)) { _fun00006_ip = 4160; continue _fun00005 }
 4120:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 59;
            source = config[source];
            config = vacuum.bind(oscard)(source);
            vacuum = config.calendarFormat;
            source = michal.timestamp;
            variable73 = vacuum.bind(config)(source, verify);
            _fun00006_ip = 4215; continue _fun00005;
 4160:
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            vacuum = sierra[source];
            vacuum = target.bind(oscard)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = sierra[source];
            source = target.bind(oscard)(source);
            source = source.t;
            source = source.yXY+5O;
            variable73 = vacuum.bind(config)(source);
 4215:
            vacuum = _closure1_slot17;
            source = vacuum.getId;
            variable37 = source.bind(vacuum)();
            source = michal.isUnsupported;
            variable69 = papara;
            if(!source) { _fun00006_ip = 4298; continue _fun00005 }
 4241:
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            vacuum = sierra[source];
            vacuum = target.bind(oscard)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = sierra[source];
            source = target.bind(oscard)(source);
            source = source.t;
            source = source.sWi5ER;
            variable69 = vacuum.bind(config)(source);
 4298:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4326; continue _fun00005 }
 4314:
            vacuum = !golfie;
            if(!vacuum) { _fun00006_ip = 4323; continue _fun00005 }
 4320:
            vacuum = entity;
 4323:
            source = vacuum;
 4326:
            if(source) { _fun00006_ip = 4347; continue _fun00005 }
 4329:
            vacuum = result != papara;
            if(!vacuum) { _fun00006_ip = 4344; continue _fun00005 }
 4336:
            config = '';
            vacuum = config !== papara;
 4344:
            source = vacuum;
 4347:
            if(source) { _fun00006_ip = 4381; continue _fun00005 }
 4350:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 30;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.getPollReplyPreview;
            variable69 = source.bind(vacuum)(michal);
 4381:
            source = undefined;
            if(!entity) { _fun00006_ip = 4425; continue _fun00005 }
 4386:
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            entity = 60;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable80;
            source = vacuum.bind(oscard)(michal, oscard, entity);
 4425:
            if(!status) { _fun00006_ip = 4459; continue _fun00005 }
 4428:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            entity = 61;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = vacuum.canForwardMessage;
            status = entity.bind(vacuum)(michal);
 4459:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable98 = 62;
            entity = entity[variable98];
            papara = vacuum.bind(oscard)(entity);
            config = papara.shouldDisplayClanTag;
            vacuum = variable77.id;
            target = result != variable68;
            entity = undefined;
            if(!target) { _fun00006_ip = 4502; continue _fun00005 }
 4499:
            entity = variable68;
 4502:
            entity = config.bind(papara)(vacuum, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4635; continue _fun00005 }
 4517:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable98];
            sierra = vacuum.bind(oscard)(entity);
            vacuum = sierra.getUserPrimaryGuild;
            entity = variable77.primaryGuild;
            whisks = vacuum.bind(sierra)(entity);
            sierra = whisks.guildId;
            vacuum = whisks.tag;
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
            target = sierra;
            papara = vacuum;
 4635:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable99 = 29;
            entity = entity[variable99];
            whisks = vacuum.bind(oscard)(entity);
            sierra = whisks.hasFlag;
            entity = michal;
            if(!(result != variable45)) { _fun00006_ip = 4671; continue _fun00005 }
 4668:
            entity = variable45;
 4671:
            vacuum = entity.flags;
            entity = _closure1_slot25;
            entity = entity.IS_VOICE_MESSAGE;
            sierra = sierra.bind(whisks)(vacuum, entity);
            vacuum = _closure1_slot29;
            entity = {};
            entity['currentUserId'] = variable37;
            entity['message'] = michal;
            entity['theme'] = update;
            entity['referralSenderMobileXPEnabled'] = limora;
            entity = vacuum.bind(oscard)(entity);
            limora = entity.referralTrialOfferDataUpdated;
            whisks = entity.referralTrialOfferData;
            variable95 = _closure1_slot5;
            vacuum = variable95.getApplication;
            variable98 = michal.applicationId;
            variable100 = result != variable98;
            quebec = '';
            entity = quebec;
            if(!variable100) { _fun00006_ip = 4766; continue _fun00005 }
 4763:
            entity = variable98;
 4766:
            entity = vacuum.bind(variable95)(entity);
            variable95 = result != entity;
            if(!variable95) { _fun00006_ip = 4822; continue _fun00005 }
 4778:
            variable98 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable99];
            variable100 = variable98.bind(oscard)(vacuum);
            variable99 = variable100.hasFlag;
            variable98 = michal.flags;
            vacuum = _closure1_slot25;
            vacuum = vacuum.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            variable95 = variable99.bind(variable100)(variable98, vacuum);
 4822:
            vacuum = undefined;
            if(!variable95) { _fun00006_ip = 4832; continue _fun00005 }
 4827:
            vacuum = entity.id;
 4832:
            entity = {};
            variable95 = michal.id;
            entity['id'] = variable95;
            variable95 = michal.channel_id;
            entity['channelId'] = variable95;
            variable98 = result != variable68;
            variable95 = undefined;
            if(!variable98) { _fun00006_ip = 4864; continue _fun00005 }
 4861:
            variable95 = variable68;
 4864:
            entity['guildId'] = variable95;
            variable95 = michal;
            if(!(result != variable45)) { _fun00006_ip = 4878; continue _fun00005 }
 4875:
            variable95 = variable45;
 4878:
            variable95 = variable95.flags;
            entity['flags'] = variable95;
            variable95 = michal.type;
            entity['type'] = variable95;
            variable95 = michal.nonce;
            if(!(result != variable95)) { _fun00006_ip = 4923; continue _fun00005 }
 4906:
            variable95 = michal.nonce;
            variable98 = 'string';
            variable95 = typeof variable95;
            if(!(variable98 === variable95)) { _fun00006_ip = 4931; continue _fun00005 }
 4923:
            variable95 = michal.nonce;
            _fun00006_ip = 4950; continue _fun00005;
 4931:
            variable98 = global;
            variable99 = variable98.String;
            variable98 = michal.nonce;
            variable95 = variable99.bind(oscard)(variable98);
 4950:
            entity['nonce'] = variable95;
            variable95 = michal.state;
            entity['state'] = variable95;
            entity['reactions'] = echoed;
            variable95 = undefined;
            if(variable56) { _fun00006_ip = 4977; continue _fun00005 }
 4974:
            variable95 = variable97;
 4977:
            entity['referencedMessage'] = variable95;
            entity['threadEmbed'] = variable94;
            variable95 = result != variable96;
            variable94 = undefined;
            if(!variable95) { _fun00006_ip = 5008; continue _fun00005 }
 4996:
            variable95 = variable96.getForwardInfo;
            variable94 = variable95.bind(variable96)();
 5008:
            entity['forwardInfo'] = variable94;
            variable94 = !sequen;
            if(!variable94) { _fun00006_ip = 5027; continue _fun00005 }
 5021:
            variable94 = michal.mentioned;
 5027:
            entity['mentioned'] = variable94;
            variable94 = michal.isEdited;
            variable95 = variable94.bind(michal)();
            variable94 = quebec;
            if(!variable95) { _fun00006_ip = 5109; continue _fun00005 }
 5048:
            variable94 = quebec;
            if(variable56) { _fun00006_ip = 5109; continue _fun00005 }
 5054:
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
 5109:
            entity['edited'] = variable94;
            variable94 = record.editedColor;
            entity['editedColor'] = variable94;
            variable94 = michal.isUnsupported;
            if(variable94) { _fun00006_ip = 5142; continue _fun00005 }
 5134:
            variable94 = record.textColor;
            _fun00006_ip = 5148; continue _fun00005;
 5142:
            variable94 = record.unsupportedColor;
 5148:
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
            if(!variable71) { _fun00006_ip = 5232; continue _fun00005 }
 5227:
            variable83 = variable77.username;
 5232:
            variable84 = result != variable83;
            variable80 = undefined;
            if(!variable84) { _fun00006_ip = 5244; continue _fun00005 }
 5241:
            variable80 = variable83;
 5244:
            entity['username'] = variable80;
            variable80 = undefined;
            if(variable71) { _fun00006_ip = 5259; continue _fun00005 }
 5253:
            variable80 = variable82.uri;
 5259:
            entity['avatarURL'] = variable80;
            variable80 = undefined;
            if(variable71) { _fun00006_ip = 5272; continue _fun00005 }
 5269:
            variable80 = variable81;
 5272:
            entity['avatarDecorationURL'] = variable80;
            variable77 = variable77.id;
            entity['authorId'] = variable77;
            if(variable71) { _fun00006_ip = 5319; continue _fun00005 }
 5290:
            variable77 = 'username';
            if(!(variable77 === kiloes)) { _fun00006_ip = 5319; continue _fun00005 }
 5298:
            variable77 = _closure1_slot3;
            variable77 = variable77.bind(oscard)(variable75);
            if(!(result == variable77)) { _fun00006_ip = 5317; continue _fun00005 }
 5311:
            variable77 = record.defaultUsernameColor;
 5317:
            _fun00006_ip = 5325; continue _fun00005;
 5319:
            variable77 = record.defaultUsernameColor;
 5325:
            entity['usernameColor'] = variable77;
            variable77 = null;
            if(variable71) { _fun00006_ip = 5359; continue _fun00005 }
 5335:
            variable80 = _closure1_slot3;
            variable81 = variable80.bind(oscard)(variable75);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5356; continue _fun00005 }
 5353:
            variable80 = variable81;
 5356:
            variable77 = variable80;
 5359:
            entity['roleColor'] = variable77;
            variable77 = null;
            if(!variable78) { _fun00006_ip = 5484; continue _fun00005 }
 5369:
            variable77 = null;
            if(variable71) { _fun00006_ip = 5484; continue _fun00005 }
 5374:
            variable78 = result != variable79;
            variable77 = null;
            if(!variable78) { _fun00006_ip = 5484; continue _fun00005 }
 5383:
            variable78 = {};
            variable81 = _closure1_slot3;
            variable80 = variable79.primaryColor;
            variable81 = variable81.bind(oscard)(variable80);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5412; continue _fun00005 }
 5409:
            variable80 = variable81;
 5412:
            variable78['primaryColor'] = variable80;
            variable81 = _closure1_slot3;
            variable80 = variable79.secondaryColor;
            variable81 = variable81.bind(oscard)(variable80);
            variable82 = result != variable81;
            variable80 = null;
            if(!variable82) { _fun00006_ip = 5444; continue _fun00005 }
 5441:
            variable80 = variable81;
 5444:
            variable78['secondaryColor'] = variable80;
            variable80 = _closure1_slot3;
            variable79 = variable79.tertiaryColor;
            variable80 = variable80.bind(oscard)(variable79);
            variable81 = result != variable80;
            variable79 = null;
            if(!variable81) { _fun00006_ip = 5476; continue _fun00005 }
 5473:
            variable79 = variable80;
 5476:
            variable78['tertiaryColor'] = variable79;
            variable77 = variable78;
 5484:
            entity['roleColors'] = variable77;
            variable77 = 'dot';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5504; continue _fun00005 }
 5500:
            variable77 = result != variable75;
 5504:
            entity['shouldShowRoleDot'] = variable77;
            variable77 = 'username';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5524; continue _fun00005 }
 5520:
            variable77 = result != variable75;
 5524:
            entity['shouldShowRoleOnName'] = variable77;
            entity['showLinkDecorations'] = variable70;
            if(variable71) { _fun00006_ip = 5558; continue _fun00005 }
 5537:
            variable70 = _closure1_slot3;
            variable70 = variable70.bind(oscard)(variable75);
            if(!(result == variable70)) { _fun00006_ip = 5556; continue _fun00005 }
 5550:
            variable70 = record.defaultUsernameColor;
 5556:
            _fun00006_ip = 5564; continue _fun00005;
 5558:
            variable70 = record.defaultUsernameColor;
 5564:
            entity['colorString'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5577; continue _fun00005 }
 5574:
            variable70 = variable74;
 5577:
            entity['roleIcon'] = variable70;
            variable74 = result != variable76;
            variable70 = undefined;
            if(!variable74) { _fun00006_ip = 5622; continue _fun00005 }
 5591:
            variable75 = _closure1_slot0;
            variable77 = _closure1_slot2;
            variable74 = 63;
            variable74 = variable77[variable74];
            variable75 = variable75.bind(oscard)(variable74);
            variable74 = variable75.createConnectionsRoleTag;
            variable70 = variable74.bind(variable75)(variable76);
 5622:
            entity['connectionsRoleTag'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5637; continue _fun00005 }
 5634:
            variable70 = variable73;
 5637:
            entity['timestamp'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5653; continue _fun00005 }
 5647:
            variable70 = record.timestampColor;
 5653:
            entity['timestampColor'] = variable70;
            entity['content'] = variable69;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable56;
            variable69 = undefined;
            if(!(oscard !== variable72)) { _fun00006_ip = 5711; continue _fun00005 }
 5678:
            variable71 = _closure1_slot0;
            variable73 = _closure1_slot2;
            variable70 = 64;
            variable70 = variable73[variable70];
            variable71 = variable71.bind(oscard)(variable70);
            variable70 = variable71.createSurveyIndication;
            variable69 = variable70.bind(variable71)(michal, update, variable72);
 5711:
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
            if(!variable59) { _fun00006_ip = 5817; continue _fun00005 }
 5766:
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
 5817:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5928; continue _fun00005 }
 5844:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 5928; continue _fun00005 }
 5849:
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
 5928:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 5944; continue _fun00005 }
 5938:
            variable57 = record.feedbackColor;
 5944:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 5960; continue _fun00005 }
 5954:
            variable54 = record.highlightColor;
 5960:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 5977; continue _fun00005 }
 5974:
            variable54 = variable55;
 5977:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 5991; continue _fun00005 }
 5985:
            variable53 = new Array(0);
            _fun00006_ip = 6023; continue _fun00005;
 5991:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 68;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscard)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(michal, update);
 6023:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 6037; continue _fun00005 }
 6031:
            variable50 = new Array(0);
            _fun00006_ip = 6070; continue _fun00005;
 6037:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 69;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(michal, variable45, update);
 6070:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 6112; continue _fun00005 }
 6080:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 70;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(michal, update);
 6112:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 6156; continue _fun00005 }
 6124:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 71;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(michal, update);
 6156:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 6187; continue _fun00005 }
 6166:
            if(!variable47) { _fun00006_ip = 6178; continue _fun00005 }
 6169:
            if(variable48) { _fun00006_ip = 6175; continue _fun00005 }
 6172:
            variable48 = variable49;
 6175:
            variable47 = variable48;
 6178:
            if(variable47) { _fun00006_ip = 6184; continue _fun00005 }
 6181:
            variable47 = variable42;
 6184:
            variable43 = variable47;
 6187:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6243; continue _fun00005 }
 6211:
            variable43 = michal.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6243; continue _fun00005 }
 6233:
            variable41 = 0.2;
 6243:
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
            if(!variable39) { _fun00006_ip = 6338; continue _fun00005 }
 6335:
            variable39 = variable40;
 6338:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == ctrled;
            if(variable39) { _fun00006_ip = 6368; continue _fun00005 }
 6355:
            variable36 = ctrled.isForumPost;
            variable36 = variable36.bind(ctrled)();
            variable39 = !variable36;
 6368:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6388; continue _fun00005 }
 6374:
            variable40 = michal.id;
            variable39 = michal.channel_id;
            variable36 = variable40 === variable39;
 6388:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != ctrled;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6432; continue _fun00005 }
 6402:
            variable39 = ctrled.isForumPost;
            variable39 = variable39.bind(ctrled)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6432; continue _fun00005 }
 6417:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6432; continue _fun00005 }
 6422:
            variable38 = _closure1_slot31;
            variable36 = variable38.bind(oscard)(michal, ctrled);
 6432:
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
            if(cntext) { _fun00006_ip = 6626; continue _fun00005 }
 6620:
            cntext = new Array(0);
            _fun00006_ip = 6658; continue _fun00005;
 6626:
            whisks = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 75;
            limora = quebec[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createPostPreviewEmbeds;
            cntext = limora.bind(whisks)(michal, equals);
 6658:
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
            if(!sierra) { _fun00006_ip = 6843; continue _fun00005 }
 6837:
            source = record.embedBackgroundColor;
 6843:
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
            if(!tangon) { _fun00006_ip = 7109; continue _fun00005 }
 7076:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7109:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 7155; continue _fun00005 }
 7122:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 80;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 7155:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 7168; continue _fun00005 }
 7165:
            report = tangon;
 7168:
            if(!report) { _fun00006_ip = 7204; continue _fun00005 }
 7171:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 80;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7204:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7246; continue _fun00005 }
 7214:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 80;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7246:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7267; continue _fun00005 }
 7262:
            report = ctrled.type;
 7267:
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
 7325:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7422; continue _fun00005 }
 7344:
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
            if(source) { _fun00006_ip = 7410; continue _fun00005 }
 7400:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7410:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7516; continue _fun00005;
 7422:
            tangon = {};
            report = _closure1_slot30;
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
 7516:
            return entity;
 7518:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7585; continue _fun00005 }
 7530:
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
 7585:
            entity = {};
            report = _closure1_slot32;
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
    var _closure1_slot32 = michal;
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
    tangon = function(argFoo) { // Original name: getReferralTrialOfferData
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.currentUserId;
            option = entity.message;
            golfie = entity.theme;
            zuuluu = entity.referralSenderMobileXPEnabled;
            report = option.referralTrialOfferId;
            tangon = option.type;
            michal = _closure1_slot23;
            michal = michal.PREMIUM_REFERRAL;
            if(!(tangon === michal)) { _fun00008_ip = 229; continue _fun00007 }
 57:
            oscard = null;
            if(!(oscard != report)) { _fun00008_ip = 229; continue _fun00007 }
 66:
            tangon = _closure1_slot11;
            michal = tangon.getRelevantUserTrialOffer;
            tangon = michal.bind(tangon)(report);
            michal = oscard != tangon;
            if(!michal) { _fun00008_ip = 107; continue _fun00007 }
 88:
            offset = oscard == tangon;
            report = undefined;
            if(offset) { _fun00008_ip = 103; continue _fun00007 }
 97:
            report = tangon.user_id;
 103:
            michal = oscard != report;
 107:
            if(!michal) { _fun00008_ip = 120; continue _fun00007 }
 110:
            tangon = tangon.user_id;
            michal = tangon === verify;
 120:
            if(michal) { _fun00008_ip = 177; continue _fun00007 }
 123:
            if(!zuuluu) { _fun00008_ip = 129; continue _fun00007 }
 126:
            if(!michal) { _fun00008_ip = 177; continue _fun00007 }
 129:
            michal = {};
            report = undefined;
            michal['referralTrialOfferDataUpdated'] = report;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 21;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.createReferralTrialEmbed;
            zuuluu = zuuluu.bind(tangon)(option, golfie);
            michal['referralTrialOfferData'] = zuuluu;
            _fun00008_ip = 227; continue _fun00007;
 177:
            zuuluu = {};
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 21;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.createReferralTrialEmbedRedeemable;
            report = report.bind(oscard)(option, golfie, verify);
            zuuluu['referralTrialOfferDataUpdated'] = report;
            zuuluu['referralTrialOfferData'] = tangon;
            michal = zuuluu;
 227:
            return michal;
 229:
            entity = _closure1_slot28;
            return entity;
        }
    };
    var _closure1_slot29 = tangon;
    tangon = 81;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();