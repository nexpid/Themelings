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
            if(michal) { _fun00002_ip = 791; continue _fun00001 }
 15:
            zuuluu = entity.hasFlag;
            michal = _closure1_slot25;
            michal = michal.HAS_THREAD;
            michal = zuuluu.bind(entity)(michal);
            if(!michal) { _fun00002_ip = 791; continue _fun00001 }
 45:
            michal = null;
            if(!(michal != oscard)) { _fun00002_ip = 791; continue _fun00001 }
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
            _fun00002_ip = 789; continue _fun00001;
 278:
            zuuluu = oscard.threadMetadata;
            if(!(michal != zuuluu)) { _fun00002_ip = 300; continue _fun00001 }
 288:
            zuuluu = zuuluu.archived;
            if(zuuluu) { _fun00002_ip = 656; continue _fun00001 }
 300:
            if(!(michal != golfie)) { _fun00002_ip = 565; continue _fun00001 }
 307:
            zuuluu = golfie.type;
            michal = _closure1_slot23;
            michal = michal.CHANNEL_NAME_CHANGE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 565; continue _fun00001 }
 329:
            zuuluu = golfie.type;
            michal = _closure1_slot23;
            michal = michal.THREAD_STARTER_MESSAGE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 565; continue _fun00001 }
 351:
            michal = golfie.blocked;
            if(michal) { _fun00002_ip = 455; continue _fun00001 }
 360:
            michal = golfie.ignored;
            if(michal) { _fun00002_ip = 455; continue _fun00001 }
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
            _fun00002_ip = 563; continue _fun00001;
 455:
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
            if(golfie) { _fun00002_ip = 537; continue _fun00001 }
 524:
            golfie = verify.G7p6v7;
            golfie = offset.bind(yankee)(golfie);
            _fun00002_ip = 548; continue _fun00001;
 537:
            verify = verify.XAkOo6;
            golfie = offset.bind(yankee)(verify);
 548:
            zuuluu['messagePreviewString'] = golfie;
            golfie = false;
            zuuluu['archived'] = golfie;
            michal = zuuluu;
 563:
            _fun00002_ip = 651; continue _fun00001;
 565:
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
 651:
            _fun00002_ip = 786; continue _fun00001;
 656:
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
 786:
            entity = michal;
 789:
            return entity;
 791:
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
            variable94 = entity.messageForward;
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
            variable82 = option.constrainedWidth;
            sequen = option.ignoreMentioned;
            variable78 = option.animateEmoji;
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
            sizing = result == ctrled;
            variable68 = undefined;
            if(sizing) { _fun00006_ip = 513; continue _fun00005 }
 503:
            sizing = ctrled.getGuildId;
            variable68 = sizing.bind(ctrled)();
 513:
            if(!(result == variable94)) { _fun00006_ip = 548; continue _fun00005 }
 517:
            echoed = _closure1_slot0;
            papara = _closure1_slot2;
            sizing = 33;
            sizing = papara[sizing];
            echoed = echoed.bind(oscard)(sizing);
            sizing = echoed.maybeCreateSingleForwardForMessage;
            variable94 = sizing.bind(echoed)(michal);
 548:
            variable45 = michal;
            if(!(result != variable94)) { _fun00006_ip = 566; continue _fun00005 }
 555:
            sizing = variable94.messageSnapshot;
            variable45 = sizing.message;
 566:
            echoed = new Array(0);
            if(!report) { _fun00006_ip = 616; continue _fun00005 }
 573:
            papara = _closure1_slot1;
            target = _closure1_slot2;
            sizing = 34;
            sizing = target[sizing];
            papara = papara.bind(oscard)(sizing);
            sizing = {};
            target = michal.reactions;
            sizing['reactions'] = target;
            sizing['animateEmoji'] = variable78;
            echoed = papara.bind(oscard)(sizing);
 616:
            target = michal.type;
            sizing = _closure1_slot23;
            papara = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(target === papara)) { _fun00006_ip = 687; continue _fun00005 }
 637:
            sierra = _closure1_slot12;
            target = sierra.getMessageByReference;
            papara = michal.messageReference;
            target = target.bind(sierra)(papara);
            equals = target.state;
            papara = _closure1_slot13;
            sierra = papara.LOADED;
            papara = null;
            if(!(equals === sierra)) { _fun00006_ip = 684; continue _fun00005 }
 679:
            papara = target.message;
 684:
            sizing = papara;
 687:
            if(!(result == sizing)) { _fun00006_ip = 7328; continue _fun00005 }
 694:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 35;
            papara = sierra[papara];
            papara = target.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal);
            if(papara) { _fun00006_ip = 7135; continue _fun00005 }
 725:
            variable71 = !backup;
            if(variable71) { _fun00006_ip = 734; continue _fun00005 }
 731:
            variable71 = variable56;
 734:
            variable77 = michal.author;
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            papara = 37;
            papara = sierra[papara];
            sierra = target.bind(oscard)(papara);
            target = sierra.isMessageNewerThanImprovedMarkdownEpoch;
            equals = michal.editedTimestamp;
            if(!(result == equals)) { _fun00006_ip = 782; continue _fun00005 }
 776:
            equals = michal.timestamp;
 782:
            papara = equals.valueOf;
            papara = papara.bind(equals)();
            equals = target.bind(sierra)(papara);
            papara = variable45.content;
            if(!(result != papara)) { _fun00006_ip = 818; continue _fun00005 }
 805:
            target = variable45.content;
            papara = '';
            if(!(papara === target)) { _fun00006_ip = 831; continue _fun00005 }
 818:
            target = {};
            target['content'] = oscard;
            target['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 921; continue _fun00005;
 831:
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            papara = 38;
            papara = variable40[papara];
            variable40 = sierra.bind(oscard)(papara);
            sierra = variable40.parseMessageMarkup;
            if(variable42) { _fun00006_ip = 872; continue _fun00005 }
 860:
            papara = cntext;
            if(!papara) { _fun00006_ip = 869; continue _fun00005 }
 866:
            papara = quebec;
 869:
            variable42 = papara;
 872:
            papara = result != output;
            if(!papara) { _fun00006_ip = 890; continue _fun00005 }
 879:
            variable46 = michal.isFirstMessageInForumPost;
            papara = variable46.bind(michal)(output);
 890:
            r105 = variable40;
            r104 = michal;
            r103 = variable45;
            r102 = variable42;
            r101 = golfie;
            r100 = papara;
            variable100 = equals;
            variable99 = equals;
            variable98 = variable41;
            target = r105[sierra](r104, r103, r102, r101, r100, variable100, variable99, variable98, variable97);
 921:
            papara = target.content;
            variable41 = target.hasSpoilerEmbeds;
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            target = 39;
            target = variable40[target];
            sierra = sierra.bind(oscard)(target);
            target = sierra.shouldRedactExplicitContent;
            variable63 = target.bind(sierra)(michal);
            sierra = _closure1_slot1;
            target = 40;
            target = variable40[target];
            sierra = sierra.bind(oscard)(target);
            target = sierra.shouldShowTiggerPawtect;
            variable62 = target.bind(sierra)();
            sierra = undefined;
            if(!cntext) { _fun00006_ip = 1175; continue _fun00005 }
 997:
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
 1175:
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
            variable91 = config.tagText;
            variable90 = config.tagVerified;
            variable89 = config.tagTextColor;
            variable88 = config.tagBackgroundColor;
            variable87 = config.tagType;
            variable86 = config.tagIconUrl;
            variable85 = config.opTagText;
            variable84 = config.opTagTextColor;
            variable83 = config.opTagBackgroundColor;
            whisks = _closure1_slot21;
            target = whisks.getUploaderFileForMessageId;
            config = michal.id;
            target = target.bind(whisks)(config);
            variable42 = result != target;
            whisks = michal.state;
            config = _closure1_slot24;
            config = config.SEND_FAILED;
            config = whisks !== config;
            if(config) { _fun00006_ip = 1329; continue _fun00005 }
 1319:
            whisks = michal.isCommandType;
            config = whisks.bind(michal)();
 1329:
            whisks = sierra;
            if(config) { _fun00006_ip = 1400; continue _fun00005 }
 1335:
            config = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1346; continue _fun00005 }
 1342:
            config = new Array(0);
 1346:
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
 1400:
            equals = _closure1_slot8;
            sierra = equals.getMessage;
            config = michal.id;
            sierra = sierra.bind(equals)(config);
            variable55 = whisks;
            if(!(result != sierra)) { _fun00006_ip = 1499; continue _fun00005 }
 1427:
            config = whisks;
            if(!(result == whisks)) { _fun00006_ip = 1438; continue _fun00005 }
 1434:
            config = new Array(0);
 1438:
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
 1499:
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
            if(!config) { _fun00006_ip = 1627; continue _fun00005 }
 1588:
            config = michal.author;
            config = config.avatar;
            if(!(result == config)) { _fun00006_ip = 1627; continue _fun00005 }
 1604:
            variable40 = michal.application;
            variable41 = result == variable40;
            config = undefined;
            if(variable41) { _fun00006_ip = 1623; continue _fun00005 }
 1618:
            config = variable40.icon;
 1623:
            if(!(result == config)) { _fun00006_ip = 1702; continue _fun00005 }
 1627:
            if(!(result != variable48)) { _fun00006_ip = 1635; continue _fun00005 }
 1631:
            if(!(result == variable68)) { _fun00006_ip = 1648; continue _fun00005 }
 1635:
            config = variable77.getAvatarSource;
            config = config.bind(variable77)(oscard);
            _fun00006_ip = 1700; continue _fun00005;
 1648:
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
 1700:
            _fun00006_ip = 1779; continue _fun00005;
 1702:
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
 1779:
            variable80 = sierra.bind(whisks)(config);
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 47;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getAvatarDecorationURL;
            config = {};
            if(!(result == variable37)) { _fun00006_ip = 1822; continue _fun00005 }
 1816:
            variable37 = variable77.avatarDecoration;
 1822:
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
            variable79 = sierra.bind(whisks)(config);
            config = result != equals;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1958; continue _fun00005 }
 1900:
            config = result != variable68;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1958; continue _fun00005 }
 1909:
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
 1958:
            sierra = michal.hasFlag;
            config = _closure1_slot25;
            config = config.SOURCE_MESSAGE_DELETED;
            config = sierra.bind(michal)(config);
            if(!config) { _fun00006_ip = 2037; continue _fun00005 }
 1982:
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
 2037:
            sierra = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            sierra = sierra.bind(oscard)(config);
            config = sierra.getMessageAuthor;
            config = config.bind(sierra)(michal);
            variable81 = config.nick;
            variable75 = config.colorString;
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === config)) { _fun00006_ip = 2159; continue _fun00005 }
 2096:
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
            config['appName'] = variable81;
            papara = whisks.bind(equals)(sierra, config);
 2159:
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.REPLY;
            variable95 = undefined;
            if(!(sierra === config)) { _fun00006_ip = 3498; continue _fun00005 }
 2183:
            variable95 = undefined;
            if(!vacuum) { _fun00006_ip = 3498; continue _fun00005 }
 2191:
            sierra = _closure1_slot12;
            config = sierra.getMessageByReference;
            vacuum = michal.messageReference;
            vacuum = config.bind(sierra)(vacuum);
            sierra = vacuum.state;
            config = _closure1_slot13;
            config = config.LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2469; continue _fun00005 }
 2234:
            config = _closure1_slot13;
            config = config.NOT_LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2386; continue _fun00005 }
 2251:
            config = _closure1_slot13;
            config = config.DELETED;
            if(!(config !== sierra)) { _fun00006_ip = 2303; continue _fun00005 }
 2265:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 52;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.assertNever;
            config = config.bind(sierra)(vacuum);
            variable95 = undefined;
            _fun00006_ip = 3498; continue _fun00005;
 2303:
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
            variable95 = config;
            _fun00006_ip = 3498; continue _fun00005;
 2386:
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
            variable95 = config;
            _fun00006_ip = 3498; continue _fun00005;
 2469:
            vacuum = vacuum.message;
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 33;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.maybeCreateSingleForwardForMessage;
            whisks = config.bind(sierra)(vacuum);
            sierra = _closure1_slot20;
            config = sierra.isBlockedForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3420; continue _fun00005 }
 2526:
            sierra = _closure1_slot20;
            config = sierra.isIgnoredForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3340; continue _fun00005 }
 2547:
            sierra = _closure1_slot32;
            config = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            config['message'] = vacuum;
            config['messageForward'] = whisks;
            config['roleStyle'] = kiloes;
            equals = {};
            r104 = equals;
            r103 = option;
            variable37 = copyDataProperties(r104, r103);
            variable37 = 'renderReplies';
            equals[variable37] = offset;
            config['options'] = equals;
            sierra = sierra.bind(oscard)(config);
            if(!(result != sierra)) { _fun00006_ip = 3257; continue _fun00005 }
 2616:
            config = 'username';
            config = config in sierra;
            if(!config) { _fun00006_ip = 2787; continue _fun00005 }
 2630:
            equals = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            equals = equals.bind(oscard)(config);
            config = equals.getMessageAuthor;
            config = config.bind(equals)(vacuum);
            quebec = config.nick;
            equals = config.colorString;
            if(!(result == quebec)) { _fun00006_ip = 2685; continue _fun00005 }
 2674:
            config = vacuum.author;
            quebec = config.username;
 2685:
            variable37 = result != quebec;
            config = undefined;
            if(!variable37) { _fun00006_ip = 2697; continue _fun00005 }
 2694:
            config = quebec;
 2697:
            sierra['username'] = config;
            if(variable71) { _fun00006_ip = 2727; continue _fun00005 }
 2706:
            config = _closure1_slot3;
            config = config.bind(oscard)(equals);
            if(!(result == config)) { _fun00006_ip = 2725; continue _fun00005 }
 2719:
            config = sierra.colorString;
 2725:
            _fun00006_ip = 2733; continue _fun00005;
 2727:
            config = sierra.colorString;
 2733:
            sierra['colorString'] = config;
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            config = 51;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.bind(oscard)(michal, vacuum);
            if(!config) { _fun00006_ip = 2787; continue _fun00005 }
 2768:
            equals = sierra.username;
            config = '@';
            config = config + equals;
            sierra['username'] = config;
 2787:
            equals = result == whisks;
            config = undefined;
            if(equals) { _fun00006_ip = 2807; continue _fun00005 }
 2796:
            whisks = whisks.messageSnapshot;
            config = whisks.message;
 2807:
            quebec = vacuum;
            if(!(result != config)) { _fun00006_ip = 2817; continue _fun00005 }
 2814:
            quebec = config;
 2817:
            config = 'stickers';
            config = config in quebec;
            if(config) { _fun00006_ip = 2834; continue _fun00005 }
 2828:
            config = new Array(0);
            _fun00006_ip = 2865; continue _fun00005;
 2834:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 28;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getMessageStickers;
            config = whisks.bind(equals)(quebec);
 2865:
            config = config.length;
            whisks = 0;
            if(!(!(config > whisks))) { _fun00006_ip = 3133; continue _fun00005 }
 2879:
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
            if(config) { _fun00006_ip = 3076; continue _fun00005 }
 2932:
            equals = quebec.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(equals !== config)) { _fun00006_ip = 3043; continue _fun00005 }
 2951:
            config = quebec.embeds;
            config = config.length;
            if(!(!(config > whisks))) { _fun00006_ip = 2986; continue _fun00005 }
 2966:
            config = quebec.attachments;
            config = config.length;
            whisks = config > whisks;
            config = null;
            if(!whisks) { _fun00006_ip = 3041; continue _fun00005 }
 2986:
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
 3041:
            _fun00006_ip = 3074; continue _fun00005;
 3043:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 30;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getPollResultsReplyPreviewMobile;
            config = whisks.bind(equals)(quebec);
 3074:
            _fun00006_ip = 3131; continue _fun00005;
 3076:
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
 3131:
            _fun00006_ip = 3188; continue _fun00005;
 3133:
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
 3188:
            whisks = vacuum.type;
            vacuum = _closure1_slot23;
            vacuum = vacuum.POLL_RESULT;
            if(!(whisks === vacuum)) { _fun00006_ip = 3213; continue _fun00005 }
 3207:
            sierra['content'] = config;
 3213:
            vacuum = {};
            whisks = _closure1_slot22;
            whisks = whisks.LOADED;
            vacuum['state'] = whisks;
            vacuum['message'] = sierra;
            variable95 = vacuum;
            if(!(result != config)) { _fun00006_ip = 3498; continue _fun00005 }
 3243:
            vacuum['systemContent'] = config;
            variable95 = vacuum;
            _fun00006_ip = 3498; continue _fun00005;
 3257:
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
            variable95 = vacuum;
            _fun00006_ip = 3498; continue _fun00005;
 3340:
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
            variable95 = vacuum;
            _fun00006_ip = 3498; continue _fun00005;
 3420:
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
            variable95 = vacuum;
 3498:
            variable92 = undefined;
            if(!source) { _fun00006_ip = 3528; continue _fun00005 }
 3503:
            source = _closure1_slot30;
            r105 = undefined;
            r104 = michal;
            r103 = kiloes;
            r102 = golfie;
            r101 = output;
            r100 = option;
            variable92 = r105[source](r104, r103, r102, r101, r100, variable100);
 3528:
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
            if(!vacuum) { _fun00006_ip = 3605; continue _fun00005 }
 3584:
            sierra = _closure1_slot19;
            config = sierra.getMember;
            vacuum = variable77.id;
            source = config.bind(sierra)(variable68, vacuum);
 3605:
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
            if(vacuum) { _fun00006_ip = 3674; continue _fun00005 }
 3668:
            source = ctrled.parent_id;
 3674:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3724; continue _fun00005 }
 3681:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3724; continue _fun00005 }
 3688:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3724; continue _fun00005 }
 3704:
            config = _closure1_slot18;
            vacuum = config.getChannel;
            source = ctrled.parent_id;
            sierra = vacuum.bind(config)(source);
 3724:
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
            if(!variable42) { _fun00006_ip = 3824; continue _fun00005 }
 3809:
            vacuum = michal.attachments;
            vacuum = vacuum.length;
            source = variable54 === vacuum;
 3824:
            if(!source) { _fun00006_ip = 3831; continue _fun00005 }
 3827:
            source = result != target;
 3831:
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            variable46 = 56;
            vacuum = vacuum[variable46];
            vacuum = config.bind(oscard)(vacuum);
            config = vacuum.ViewImageDescriptions;
            vacuum = config.getSetting;
            variable61 = vacuum.bind(config)();
            variable41 = new Array(0);
            if(source) { _fun00006_ip = 3999; continue _fun00005 }
 3877:
            if(!variable47) { _fun00006_ip = 4060; continue _fun00005 }
 3883:
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
            _fun00006_ip = 4060; continue _fun00005;
 3999:
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
 4060:
            if(!source) { _fun00006_ip = 4082; continue _fun00005 }
 4063:
            vacuum = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(vacuum === source)) { _fun00006_ip = 4121; continue _fun00005 }
 4082:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 59;
            source = config[source];
            config = vacuum.bind(oscard)(source);
            vacuum = config.calendarFormat;
            source = michal.timestamp;
            variable73 = vacuum.bind(config)(source);
            _fun00006_ip = 4176; continue _fun00005;
 4121:
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
 4176:
            vacuum = _closure1_slot17;
            source = vacuum.getId;
            variable37 = source.bind(vacuum)();
            source = michal.isUnsupported;
            variable69 = papara;
            if(!source) { _fun00006_ip = 4259; continue _fun00005 }
 4202:
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
 4259:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4287; continue _fun00005 }
 4275:
            vacuum = !golfie;
            if(!vacuum) { _fun00006_ip = 4284; continue _fun00005 }
 4281:
            vacuum = entity;
 4284:
            source = vacuum;
 4287:
            if(source) { _fun00006_ip = 4308; continue _fun00005 }
 4290:
            vacuum = result != papara;
            if(!vacuum) { _fun00006_ip = 4305; continue _fun00005 }
 4297:
            config = '';
            vacuum = config !== papara;
 4305:
            source = vacuum;
 4308:
            if(source) { _fun00006_ip = 4342; continue _fun00005 }
 4311:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 30;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.getPollReplyPreview;
            variable69 = source.bind(vacuum)(michal);
 4342:
            source = undefined;
            if(!entity) { _fun00006_ip = 4386; continue _fun00005 }
 4347:
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            entity = 60;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable78;
            source = vacuum.bind(oscard)(michal, oscard, entity);
 4386:
            if(!status) { _fun00006_ip = 4420; continue _fun00005 }
 4389:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            entity = 61;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = vacuum.canForwardMessage;
            status = entity.bind(vacuum)(michal);
 4420:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable96 = 62;
            entity = entity[variable96];
            papara = vacuum.bind(oscard)(entity);
            config = papara.shouldDisplayClanTag;
            vacuum = variable77.id;
            target = result != variable68;
            entity = undefined;
            if(!target) { _fun00006_ip = 4463; continue _fun00005 }
 4460:
            entity = variable68;
 4463:
            entity = config.bind(papara)(vacuum, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4596; continue _fun00005 }
 4478:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable96];
            sierra = vacuum.bind(oscard)(entity);
            vacuum = sierra.getUserPrimaryGuild;
            entity = variable77.primaryGuild;
            whisks = vacuum.bind(sierra)(entity);
            sierra = whisks.guildId;
            vacuum = whisks.tag;
            entity = whisks.guildId;
            quebec = result != entity;
            entity = undefined;
            if(!quebec) { _fun00006_ip = 4587; continue _fun00005 }
 4536:
            variable93 = _closure1_slot0;
            quebec = _closure1_slot2;
            quebec = quebec[variable96];
            variable97 = variable93.bind(oscard)(quebec);
            variable96 = variable97.getClanBadgeUrl;
            variable93 = whisks.guildId;
            quebec = whisks.badge;
            whisks = _closure1_slot27;
            whisks = whisks.SIZE_12;
            entity = variable96.bind(variable97)(variable93, quebec, whisks);
 4587:
            config = entity;
            target = sierra;
            papara = vacuum;
 4596:
            vacuum = _closure1_slot0;
            sierra = _closure1_slot2;
            entity = 29;
            entity = sierra[entity];
            whisks = vacuum.bind(oscard)(entity);
            sierra = whisks.hasFlag;
            entity = michal;
            if(!(result != variable45)) { _fun00006_ip = 4632; continue _fun00005 }
 4629:
            entity = variable45;
 4632:
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
            variable93 = _closure1_slot5;
            vacuum = variable93.getApplication;
            variable96 = michal.applicationId;
            variable97 = result != variable96;
            quebec = '';
            entity = quebec;
            if(!variable97) { _fun00006_ip = 4727; continue _fun00005 }
 4724:
            entity = variable96;
 4727:
            entity = vacuum.bind(variable93)(entity);
            variable93 = result != entity;
            if(!variable93) { _fun00006_ip = 4764; continue _fun00005 }
 4739:
            variable96 = _closure1_slot1;
            variable97 = _closure1_slot2;
            vacuum = 63;
            vacuum = variable97[vacuum];
            vacuum = variable96.bind(oscard)(vacuum);
            variable93 = vacuum.bind(oscard)(entity);
 4764:
            vacuum = undefined;
            if(!variable93) { _fun00006_ip = 4774; continue _fun00005 }
 4769:
            vacuum = entity.id;
 4774:
            entity = {};
            variable93 = michal.id;
            entity['id'] = variable93;
            variable93 = michal.channel_id;
            entity['channelId'] = variable93;
            variable96 = result != variable68;
            variable93 = undefined;
            if(!variable96) { _fun00006_ip = 4806; continue _fun00005 }
 4803:
            variable93 = variable68;
 4806:
            entity['guildId'] = variable93;
            variable93 = michal;
            if(!(result != variable45)) { _fun00006_ip = 4820; continue _fun00005 }
 4817:
            variable93 = variable45;
 4820:
            variable93 = variable93.flags;
            entity['flags'] = variable93;
            variable93 = michal.type;
            entity['type'] = variable93;
            variable93 = michal.nonce;
            if(!(result != variable93)) { _fun00006_ip = 4865; continue _fun00005 }
 4848:
            variable93 = michal.nonce;
            variable96 = 'string';
            variable93 = typeof variable93;
            if(!(variable96 === variable93)) { _fun00006_ip = 4873; continue _fun00005 }
 4865:
            variable93 = michal.nonce;
            _fun00006_ip = 4892; continue _fun00005;
 4873:
            variable96 = global;
            variable97 = variable96.String;
            variable96 = michal.nonce;
            variable93 = variable97.bind(oscard)(variable96);
 4892:
            entity['nonce'] = variable93;
            variable93 = michal.state;
            entity['state'] = variable93;
            entity['reactions'] = echoed;
            variable93 = undefined;
            if(variable56) { _fun00006_ip = 4919; continue _fun00005 }
 4916:
            variable93 = variable95;
 4919:
            entity['referencedMessage'] = variable93;
            entity['threadEmbed'] = variable92;
            variable93 = result != variable94;
            variable92 = undefined;
            if(!variable93) { _fun00006_ip = 4950; continue _fun00005 }
 4938:
            variable93 = variable94.getForwardInfo;
            variable92 = variable93.bind(variable94)();
 4950:
            entity['forwardInfo'] = variable92;
            variable92 = !sequen;
            if(!variable92) { _fun00006_ip = 4969; continue _fun00005 }
 4963:
            variable92 = michal.mentioned;
 4969:
            entity['mentioned'] = variable92;
            variable92 = michal.isEdited;
            variable93 = variable92.bind(michal)();
            variable92 = quebec;
            if(!variable93) { _fun00006_ip = 5051; continue _fun00005 }
 4990:
            variable92 = quebec;
            if(variable56) { _fun00006_ip = 5051; continue _fun00005 }
 4996:
            variable96 = _closure1_slot0;
            variable97 = _closure1_slot2;
            variable93 = 24;
            variable94 = variable97[variable93];
            variable94 = variable96.bind(oscard)(variable94);
            variable95 = variable94.intl;
            variable94 = variable95.string;
            variable93 = variable97[variable93];
            variable93 = variable96.bind(oscard)(variable93);
            variable93 = variable93.t;
            variable93 = variable93.C8sXIC;
            variable92 = variable94.bind(variable95)(variable93);
 5051:
            entity['edited'] = variable92;
            variable92 = record.editedColor;
            entity['editedColor'] = variable92;
            variable92 = michal.isUnsupported;
            if(variable92) { _fun00006_ip = 5084; continue _fun00005 }
 5076:
            variable92 = record.textColor;
            _fun00006_ip = 5090; continue _fun00005;
 5084:
            variable92 = record.unsupportedColor;
 5090:
            entity['textColor'] = variable92;
            variable92 = record.linkColor;
            entity['linkColor'] = variable92;
            entity['tagText'] = variable91;
            entity['tagVerified'] = variable90;
            entity['tagTextColor'] = variable89;
            entity['tagBackgroundColor'] = variable88;
            entity['tagType'] = variable87;
            entity['tagIconUrl'] = variable86;
            entity['opTagText'] = variable85;
            entity['opTagTextColor'] = variable84;
            entity['opTagBackgroundColor'] = variable83;
            entity['constrainedWidth'] = variable82;
            entity['gifAutoPlay'] = variable60;
            entity['animateEmoji'] = variable78;
            if(!variable71) { _fun00006_ip = 5174; continue _fun00005 }
 5169:
            variable81 = variable77.username;
 5174:
            variable82 = result != variable81;
            variable78 = undefined;
            if(!variable82) { _fun00006_ip = 5186; continue _fun00005 }
 5183:
            variable78 = variable81;
 5186:
            entity['username'] = variable78;
            variable78 = undefined;
            if(variable71) { _fun00006_ip = 5200; continue _fun00005 }
 5195:
            variable78 = variable80.uri;
 5200:
            entity['avatarURL'] = variable78;
            variable78 = undefined;
            if(variable71) { _fun00006_ip = 5213; continue _fun00005 }
 5210:
            variable78 = variable79;
 5213:
            entity['avatarDecorationURL'] = variable78;
            variable77 = variable77.id;
            entity['authorId'] = variable77;
            if(variable71) { _fun00006_ip = 5260; continue _fun00005 }
 5231:
            variable77 = 'username';
            if(!(variable77 === kiloes)) { _fun00006_ip = 5260; continue _fun00005 }
 5239:
            variable77 = _closure1_slot3;
            variable77 = variable77.bind(oscard)(variable75);
            if(!(result == variable77)) { _fun00006_ip = 5258; continue _fun00005 }
 5252:
            variable77 = record.defaultUsernameColor;
 5258:
            _fun00006_ip = 5266; continue _fun00005;
 5260:
            variable77 = record.defaultUsernameColor;
 5266:
            entity['usernameColor'] = variable77;
            variable77 = null;
            if(variable71) { _fun00006_ip = 5300; continue _fun00005 }
 5276:
            variable78 = _closure1_slot3;
            variable79 = variable78.bind(oscard)(variable75);
            variable80 = result != variable79;
            variable78 = null;
            if(!variable80) { _fun00006_ip = 5297; continue _fun00005 }
 5294:
            variable78 = variable79;
 5297:
            variable77 = variable78;
 5300:
            entity['roleColor'] = variable77;
            variable77 = 'dot';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5320; continue _fun00005 }
 5316:
            variable77 = result != variable75;
 5320:
            entity['shouldShowRoleDot'] = variable77;
            variable77 = 'username';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5340; continue _fun00005 }
 5336:
            variable77 = result != variable75;
 5340:
            entity['shouldShowRoleOnName'] = variable77;
            entity['showLinkDecorations'] = variable70;
            if(variable71) { _fun00006_ip = 5374; continue _fun00005 }
 5353:
            variable70 = _closure1_slot3;
            variable70 = variable70.bind(oscard)(variable75);
            if(!(result == variable70)) { _fun00006_ip = 5372; continue _fun00005 }
 5366:
            variable70 = record.defaultUsernameColor;
 5372:
            _fun00006_ip = 5380; continue _fun00005;
 5374:
            variable70 = record.defaultUsernameColor;
 5380:
            entity['colorString'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5393; continue _fun00005 }
 5390:
            variable70 = variable74;
 5393:
            entity['roleIcon'] = variable70;
            variable74 = result != variable76;
            variable70 = undefined;
            if(!variable74) { _fun00006_ip = 5438; continue _fun00005 }
 5407:
            variable75 = _closure1_slot0;
            variable77 = _closure1_slot2;
            variable74 = 64;
            variable74 = variable77[variable74];
            variable75 = variable75.bind(oscard)(variable74);
            variable74 = variable75.createConnectionsRoleTag;
            variable70 = variable74.bind(variable75)(variable76);
 5438:
            entity['connectionsRoleTag'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5453; continue _fun00005 }
 5450:
            variable70 = variable73;
 5453:
            entity['timestamp'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5469; continue _fun00005 }
 5463:
            variable70 = record.timestampColor;
 5469:
            entity['timestampColor'] = variable70;
            entity['content'] = variable69;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable56;
            variable69 = undefined;
            if(!(oscard !== variable72)) { _fun00006_ip = 5527; continue _fun00005 }
 5494:
            variable71 = _closure1_slot0;
            variable73 = _closure1_slot2;
            variable70 = 65;
            variable70 = variable73[variable70];
            variable71 = variable71.bind(oscard)(variable70);
            variable70 = variable71.createSurveyIndication;
            variable69 = variable70.bind(variable71)(michal, update, variable72);
 5527:
            entity['surveyIndication'] = variable69;
            variable70 = _closure1_slot0;
            variable71 = _closure1_slot2;
            variable69 = 66;
            variable69 = variable71[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createEphemeralIndication;
            variable69 = variable69.bind(variable70)(michal);
            entity['ephemeralIndication'] = variable69;
            entity['interactionStatus'] = variable57;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5633; continue _fun00005 }
 5582:
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable59 = 67;
            variable59 = variable70[variable59];
            variable70 = variable69.bind(oscard)(variable59);
            variable69 = variable70.createExecutedCommand;
            r100 = record.defaultUsernameColor;
            r105 = variable70;
            r104 = michal;
            r103 = ctrled;
            r102 = kiloes;
            r101 = update;
            variable57 = r105[variable69](r104, r103, r102, r101, r100, variable100);
 5633:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5744; continue _fun00005 }
 5660:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 5744; continue _fun00005 }
 5665:
            variable59 = _closure1_slot1;
            variable69 = _closure1_slot2;
            variable58 = 68;
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
 5744:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 5760; continue _fun00005 }
 5754:
            variable57 = record.feedbackColor;
 5760:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 5776; continue _fun00005 }
 5770:
            variable54 = record.highlightColor;
 5776:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 5793; continue _fun00005 }
 5790:
            variable54 = variable55;
 5793:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 5807; continue _fun00005 }
 5801:
            variable53 = new Array(0);
            _fun00006_ip = 5839; continue _fun00005;
 5807:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 69;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscard)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(michal, update);
 5839:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 5853; continue _fun00005 }
 5847:
            variable50 = new Array(0);
            _fun00006_ip = 5886; continue _fun00005;
 5853:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 70;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(michal, variable45, update);
 5886:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 5928; continue _fun00005 }
 5896:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 71;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(michal, update);
 5928:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 5972; continue _fun00005 }
 5940:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 72;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(michal, update);
 5972:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 6003; continue _fun00005 }
 5982:
            if(!variable47) { _fun00006_ip = 5994; continue _fun00005 }
 5985:
            if(variable48) { _fun00006_ip = 5991; continue _fun00005 }
 5988:
            variable48 = variable49;
 5991:
            variable47 = variable48;
 5994:
            if(variable47) { _fun00006_ip = 6000; continue _fun00005 }
 5997:
            variable47 = variable42;
 6000:
            variable43 = variable47;
 6003:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6059; continue _fun00005 }
 6027:
            variable43 = michal.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6059; continue _fun00005 }
 6049:
            variable41 = 0.2;
 6059:
            entity['attachmentsOpacity'] = variable41;
            variable42 = _closure1_slot1;
            variable43 = _closure1_slot2;
            variable41 = 73;
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
            if(!variable39) { _fun00006_ip = 6154; continue _fun00005 }
 6151:
            variable39 = variable40;
 6154:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == ctrled;
            if(variable39) { _fun00006_ip = 6184; continue _fun00005 }
 6171:
            variable36 = ctrled.isForumPost;
            variable36 = variable36.bind(ctrled)();
            variable39 = !variable36;
 6184:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6204; continue _fun00005 }
 6190:
            variable40 = michal.id;
            variable39 = michal.channel_id;
            variable36 = variable40 === variable39;
 6204:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != ctrled;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6248; continue _fun00005 }
 6218:
            variable39 = ctrled.isForumPost;
            variable39 = variable39.bind(ctrled)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6248; continue _fun00005 }
 6233:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6248; continue _fun00005 }
 6238:
            variable38 = _closure1_slot31;
            variable36 = variable38.bind(oscard)(michal, ctrled);
 6248:
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
            variable38 = 74;
            variable38 = variable40[variable38];
            variable38 = variable39.bind(oscard)(variable38);
            variable38 = variable41.bind(variable42)(variable38);
            entity['swipeToReplyIconUrl'] = variable38;
            variable36 = variable40[variable36];
            variable38 = variable37.bind(oscard)(variable36);
            variable37 = variable38.getAssetUriForEmbed;
            variable36 = 75;
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
            if(cntext) { _fun00006_ip = 6442; continue _fun00005 }
 6436:
            cntext = new Array(0);
            _fun00006_ip = 6474; continue _fun00005;
 6442:
            whisks = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 76;
            limora = quebec[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createPostPreviewEmbeds;
            cntext = limora.bind(whisks)(michal, equals);
 6474:
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
            equals = 77;
            equals = whisks[equals];
            quebec = limora.bind(oscard)(equals);
            equals = quebec.createSafetyPolicyNoticeEmbed;
            equals = equals.bind(quebec)(michal);
            entity['safetyPolicyNoticeEmbed'] = equals;
            entity['pollData'] = source;
            source = 78;
            source = whisks[source];
            equals = limora.bind(oscard)(source);
            source = equals.createSafetySystemNotificationEmbed;
            source = source.bind(equals)(michal);
            entity['safetySystemNotificationEmbed'] = source;
            source = 79;
            source = whisks[source];
            whisks = limora.bind(oscard)(source);
            limora = whisks.createCtaButton;
            source = michal.id;
            source = limora.bind(whisks)(source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!sierra) { _fun00006_ip = 6653; continue _fun00005 }
 6647:
            source = record.embedBackgroundColor;
 6653:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 80;
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
            if(!tangon) { _fun00006_ip = 6919; continue _fun00005 }
 6886:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 81;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6919:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 6965; continue _fun00005 }
 6932:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 81;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6965:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 6978; continue _fun00005 }
 6975:
            report = tangon;
 6978:
            if(!report) { _fun00006_ip = 7014; continue _fun00005 }
 6981:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 81;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7014:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7056; continue _fun00005 }
 7024:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 81;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7056:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7077; continue _fun00005 }
 7072:
            report = ctrled.type;
 7077:
            tangon = _closure1_slot26;
            tangon = tangon.GUILD_ANNOUNCEMENT;
            tangon = report === tangon;
            entity['isAnnouncementChannel'] = tangon;
            report = _closure1_slot0;
            source = _closure1_slot2;
            tangon = 81;
            tangon = source[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.isInMessageShortcutsExperiment;
            tangon = tangon.bind(report)();
            entity['shortcutsEnabled'] = tangon;
            return entity;
 7135:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7232; continue _fun00005 }
 7154:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 36;
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
            if(source) { _fun00006_ip = 7220; continue _fun00005 }
 7210:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7220:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7326; continue _fun00005;
 7232:
            tangon = {};
            report = _closure1_slot30;
            r105 = undefined;
            r104 = michal;
            r103 = kiloes;
            r102 = golfie;
            r101 = output;
            r100 = option;
            report = r105[report](r104, r103, r102, r101, r100, variable100);
            tangon['threadEmbed'] = report;
            output = _closure1_slot0;
            result = _closure1_slot2;
            report = 36;
            report = result[report];
            result = output.bind(oscard)(report);
            output = result.createSystemMessageContent;
            report = {};
            report['message'] = michal;
            report['theme'] = update;
            report['reactions'] = echoed;
            report['roleStyle'] = kiloes;
            r103 = output.bind(result)(report);
            r104 = tangon;
            report = copyDataProperties(r104, r103);
            entity = tangon;
 7326:
            return entity;
 7328:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7395; continue _fun00005 }
 7340:
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
 7395:
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
            r104 = golfie;
            r103 = option;
            option = copyDataProperties(r104, r103);
            option = 'renderThreadEmbeds';
            golfie[option] = offset;
            option = 'renderReactions';
            golfie[option] = offset;
            option = 'renderShortcuts';
            golfie[option] = offset;
            option = 'shouldDisableInteractiveComponents';
            golfie[option] = verify;
            zuuluu['options'] = golfie;
            r103 = report.bind(oscard)(zuuluu);
            r104 = entity;
            zuuluu = copyDataProperties(r104, r103);
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
    tangon = 82;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();