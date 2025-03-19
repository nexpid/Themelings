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
            if(!(result == sizing)) { _fun00006_ip = 7351; continue _fun00005 }
 694:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 35;
            papara = sierra[papara];
            papara = target.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal);
            if(papara) { _fun00006_ip = 7158; continue _fun00005 }
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
            r106 = variable40;
            r105 = michal;
            r104 = variable45;
            r103 = variable42;
            r102 = golfie;
            r101 = papara;
            r100 = equals;
            variable100 = equals;
            variable99 = variable41;
            target = r106[sierra](r105, r104, r103, r102, r101, r100, variable100, variable99, variable98);
 921:
            papara = target.content;
            variable41 = target.hasSpoilerEmbeds;
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            target = 39;
            variable42 = variable40[target];
            variable46 = sierra.bind(oscard)(variable42);
            variable42 = variable46.shouldRedactExplicitContent;
            variable63 = variable42.bind(variable46)(michal);
            target = variable40[target];
            sierra = sierra.bind(oscard)(target);
            target = sierra.shouldAgeVerifyForExplicitMedia;
            variable62 = target.bind(sierra)();
            sierra = undefined;
            if(!cntext) { _fun00006_ip = 1168; continue _fun00005 }
 990:
            target = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 40;
            variable40 = variable42[variable40];
            variable48 = target.bind(oscard)(variable40);
            variable46 = variable48.getCurrentConfig;
            variable40 = {};
            variable40['location'] = config;
            config = {};
            config['autoTrackExposure'] = offset;
            config = variable46.bind(variable48)(variable40, config);
            variable40 = config.enabled;
            config = 41;
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
 1168:
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            config = 42;
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
            if(config) { _fun00006_ip = 1322; continue _fun00005 }
 1312:
            whisks = michal.isCommandType;
            config = whisks.bind(michal)();
 1322:
            whisks = sierra;
            if(config) { _fun00006_ip = 1393; continue _fun00005 }
 1328:
            config = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1339; continue _fun00005 }
 1335:
            config = new Array(0);
 1339:
            equals = config.push;
            quebec = _closure1_slot1;
            variable37 = _closure1_slot2;
            sierra = 43;
            sierra = variable37[sierra];
            quebec = quebec.bind(oscard)(sierra);
            sierra = {};
            sierra['uploaderFile'] = target;
            sierra['useAttachmentUploadPreview'] = variable42;
            sierra['colors'] = record;
            sierra = quebec.bind(oscard)(sierra);
            sierra = equals.bind(config)(sierra);
            whisks = config;
 1393:
            equals = _closure1_slot8;
            sierra = equals.getMessage;
            config = michal.id;
            sierra = sierra.bind(equals)(config);
            variable55 = whisks;
            if(!(result != sierra)) { _fun00006_ip = 1492; continue _fun00005 }
 1420:
            config = whisks;
            if(!(result == whisks)) { _fun00006_ip = 1431; continue _fun00005 }
 1427:
            config = new Array(0);
 1431:
            variable37 = sierra.errorMessage;
            whisks = config.push;
            equals = _closure1_slot0;
            quebec = _closure1_slot2;
            sierra = 43;
            sierra = quebec[sierra];
            quebec = equals.bind(oscard)(sierra);
            equals = quebec.createAutomodBlockedMessageEmbed;
            sierra = {};
            sierra['errorMessage'] = variable37;
            sierra['colors'] = record;
            sierra = equals.bind(quebec)(sierra);
            sierra = whisks.bind(config)(sierra);
            variable55 = config;
 1492:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            quebec = 44;
            config = whisks[quebec];
            variable37 = sierra.bind(oscard)(config);
            equals = variable37.getUserAuthor;
            config = michal.author;
            config = equals.bind(variable37)(config, ctrled);
            variable48 = config.guildMemberAvatar;
            variable37 = config.guildMemberAvatarDecoration;
            equals = config.iconRoleId;
            config = 45;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.ensureAvatarSource;
            config = michal.isInteractionPlaceholder;
            config = config.bind(michal)();
            if(!config) { _fun00006_ip = 1620; continue _fun00005 }
 1581:
            config = michal.author;
            config = config.avatar;
            if(!(result == config)) { _fun00006_ip = 1620; continue _fun00005 }
 1597:
            variable40 = michal.application;
            variable41 = result == variable40;
            config = undefined;
            if(variable41) { _fun00006_ip = 1616; continue _fun00005 }
 1611:
            config = variable40.icon;
 1616:
            if(!(result == config)) { _fun00006_ip = 1695; continue _fun00005 }
 1620:
            if(!(result != variable48)) { _fun00006_ip = 1628; continue _fun00005 }
 1624:
            if(!(result == variable68)) { _fun00006_ip = 1641; continue _fun00005 }
 1628:
            config = variable77.getAvatarSource;
            config = config.bind(variable77)(oscard);
            _fun00006_ip = 1693; continue _fun00005;
 1641:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 46;
            variable40 = variable46[variable40];
            variable46 = variable41.bind(oscard)(variable40);
            variable41 = variable46.getGuildMemberAvatarSource;
            variable40 = {};
            variable49 = variable77.id;
            variable40['userId'] = variable49;
            variable40['guildMemberAvatar'] = variable48;
            variable40['guildId'] = variable68;
            config = variable41.bind(variable46)(variable40, variable77);
 1693:
            _fun00006_ip = 1772; continue _fun00005;
 1695:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 46;
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
 1772:
            variable80 = sierra.bind(whisks)(config);
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 46;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getAvatarDecorationURL;
            config = {};
            if(!(result == variable37)) { _fun00006_ip = 1815; continue _fun00005 }
 1809:
            variable37 = variable77.avatarDecoration;
 1815:
            config['avatarDecoration'] = variable37;
            variable46 = _closure1_slot0;
            variable48 = _closure1_slot2;
            variable37 = 47;
            variable37 = variable48[variable37];
            variable41 = variable46.bind(oscard)(variable37);
            variable40 = variable41.getDecorationSizeForAvatarSize;
            variable37 = 48;
            variable37 = variable48[variable37];
            variable37 = variable46.bind(oscard)(variable37);
            variable37 = variable37.AvatarSizes;
            variable37 = variable37.NORMAL;
            variable37 = variable40.bind(variable41)(variable37);
            config['size'] = variable37;
            variable79 = sierra.bind(whisks)(config);
            config = result != equals;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1951; continue _fun00005 }
 1893:
            config = result != variable68;
            variable74 = undefined;
            if(!config) { _fun00006_ip = 1951; continue _fun00005 }
 1902:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 49;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getRoleIcon;
            config = {};
            config['guildId'] = variable68;
            config['roleId'] = equals;
            equals = 18;
            config['size'] = equals;
            variable74 = sierra.bind(whisks)(config);
 1951:
            sierra = michal.hasFlag;
            config = _closure1_slot25;
            config = config.SOURCE_MESSAGE_DELETED;
            config = sierra.bind(michal)(config);
            if(!config) { _fun00006_ip = 2030; continue _fun00005 }
 1975:
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
 2030:
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
            if(!(sierra === config)) { _fun00006_ip = 2152; continue _fun00005 }
 2089:
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
 2152:
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.REPLY;
            variable95 = undefined;
            if(!(sierra === config)) { _fun00006_ip = 3495; continue _fun00005 }
 2176:
            variable95 = undefined;
            if(!vacuum) { _fun00006_ip = 3495; continue _fun00005 }
 2184:
            sierra = _closure1_slot12;
            config = sierra.getMessageByReference;
            vacuum = michal.messageReference;
            vacuum = config.bind(sierra)(vacuum);
            sierra = vacuum.state;
            config = _closure1_slot13;
            config = config.LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2462; continue _fun00005 }
 2227:
            config = _closure1_slot13;
            config = config.NOT_LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2379; continue _fun00005 }
 2244:
            config = _closure1_slot13;
            config = config.DELETED;
            if(!(config !== sierra)) { _fun00006_ip = 2296; continue _fun00005 }
 2258:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 51;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.assertNever;
            config = config.bind(sierra)(vacuum);
            variable95 = undefined;
            _fun00006_ip = 3495; continue _fun00005;
 2296:
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
            _fun00006_ip = 3495; continue _fun00005;
 2379:
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
            _fun00006_ip = 3495; continue _fun00005;
 2462:
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
            if(config) { _fun00006_ip = 3417; continue _fun00005 }
 2519:
            sierra = _closure1_slot20;
            config = sierra.isIgnoredForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3337; continue _fun00005 }
 2540:
            sierra = _closure1_slot32;
            config = {'message': null, 'messageForward': null, 'roleStyle': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            config['message'] = vacuum;
            config['messageForward'] = whisks;
            config['roleStyle'] = kiloes;
            equals = {};
            r105 = equals;
            r104 = option;
            variable37 = copyDataProperties(r105, r104);
            variable37 = 'renderReplies';
            equals[variable37] = offset;
            config['options'] = equals;
            sierra = sierra.bind(oscard)(config);
            if(!(result != sierra)) { _fun00006_ip = 3254; continue _fun00005 }
 2613:
            config = 'username';
            config = config in sierra;
            if(!config) { _fun00006_ip = 2784; continue _fun00005 }
 2627:
            equals = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            equals = equals.bind(oscard)(config);
            config = equals.getMessageAuthor;
            config = config.bind(equals)(vacuum);
            quebec = config.nick;
            equals = config.colorString;
            if(!(result == quebec)) { _fun00006_ip = 2682; continue _fun00005 }
 2671:
            config = vacuum.author;
            quebec = config.username;
 2682:
            variable37 = result != quebec;
            config = undefined;
            if(!variable37) { _fun00006_ip = 2694; continue _fun00005 }
 2691:
            config = quebec;
 2694:
            sierra['username'] = config;
            if(variable71) { _fun00006_ip = 2724; continue _fun00005 }
 2703:
            config = _closure1_slot3;
            config = config.bind(oscard)(equals);
            if(!(result == config)) { _fun00006_ip = 2722; continue _fun00005 }
 2716:
            config = sierra.colorString;
 2722:
            _fun00006_ip = 2730; continue _fun00005;
 2724:
            config = sierra.colorString;
 2730:
            sierra['colorString'] = config;
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            config = 50;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.bind(oscard)(michal, vacuum);
            if(!config) { _fun00006_ip = 2784; continue _fun00005 }
 2765:
            equals = sierra.username;
            config = '@';
            config = config + equals;
            sierra['username'] = config;
 2784:
            equals = result == whisks;
            config = undefined;
            if(equals) { _fun00006_ip = 2804; continue _fun00005 }
 2793:
            whisks = whisks.messageSnapshot;
            config = whisks.message;
 2804:
            quebec = vacuum;
            if(!(result != config)) { _fun00006_ip = 2814; continue _fun00005 }
 2811:
            quebec = config;
 2814:
            config = 'stickers';
            config = config in quebec;
            if(config) { _fun00006_ip = 2831; continue _fun00005 }
 2825:
            config = new Array(0);
            _fun00006_ip = 2862; continue _fun00005;
 2831:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 28;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getMessageStickers;
            config = whisks.bind(equals)(quebec);
 2862:
            config = config.length;
            whisks = 0;
            if(!(!(config > whisks))) { _fun00006_ip = 3130; continue _fun00005 }
 2876:
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
            if(config) { _fun00006_ip = 3073; continue _fun00005 }
 2929:
            equals = quebec.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(equals !== config)) { _fun00006_ip = 3040; continue _fun00005 }
 2948:
            config = quebec.embeds;
            config = config.length;
            if(!(!(config > whisks))) { _fun00006_ip = 2983; continue _fun00005 }
 2963:
            config = quebec.attachments;
            config = config.length;
            whisks = config > whisks;
            config = null;
            if(!whisks) { _fun00006_ip = 3038; continue _fun00005 }
 2983:
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
 3038:
            _fun00006_ip = 3071; continue _fun00005;
 3040:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 30;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getPollResultsReplyPreviewMobile;
            config = whisks.bind(equals)(quebec);
 3071:
            _fun00006_ip = 3128; continue _fun00005;
 3073:
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
 3128:
            _fun00006_ip = 3185; continue _fun00005;
 3130:
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
 3185:
            whisks = vacuum.type;
            vacuum = _closure1_slot23;
            vacuum = vacuum.POLL_RESULT;
            if(!(whisks === vacuum)) { _fun00006_ip = 3210; continue _fun00005 }
 3204:
            sierra['content'] = config;
 3210:
            vacuum = {};
            whisks = _closure1_slot22;
            whisks = whisks.LOADED;
            vacuum['state'] = whisks;
            vacuum['message'] = sierra;
            variable95 = vacuum;
            if(!(result != config)) { _fun00006_ip = 3495; continue _fun00005 }
 3240:
            vacuum['systemContent'] = config;
            variable95 = vacuum;
            _fun00006_ip = 3495; continue _fun00005;
 3254:
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
            _fun00006_ip = 3495; continue _fun00005;
 3337:
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
            _fun00006_ip = 3495; continue _fun00005;
 3417:
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
 3495:
            variable92 = undefined;
            if(!source) { _fun00006_ip = 3525; continue _fun00005 }
 3500:
            source = _closure1_slot30;
            r106 = undefined;
            r105 = michal;
            r104 = kiloes;
            r103 = golfie;
            r102 = output;
            r101 = option;
            variable92 = r106[source](r105, r104, r103, r102, r101, r100);
 3525:
            vacuum = _closure1_slot9;
            source = vacuum.getInteraction;
            variable67 = source.bind(vacuum)(michal);
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 52;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.createInteractionStatus;
            variable57 = source.bind(vacuum)(michal, variable67);
            vacuum = result != variable68;
            source = null;
            if(!vacuum) { _fun00006_ip = 3602; continue _fun00005 }
 3581:
            sierra = _closure1_slot19;
            config = sierra.getMember;
            vacuum = variable77.id;
            source = config.bind(sierra)(variable68, vacuum);
 3602:
            config = _closure1_slot0;
            sierra = _closure1_slot2;
            vacuum = 53;
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
            if(vacuum) { _fun00006_ip = 3671; continue _fun00005 }
 3665:
            source = ctrled.parent_id;
 3671:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3721; continue _fun00005 }
 3678:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3721; continue _fun00005 }
 3685:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3721; continue _fun00005 }
 3701:
            config = _closure1_slot18;
            vacuum = config.getChannel;
            source = ctrled.parent_id;
            sierra = vacuum.bind(config)(source);
 3721:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 54;
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
            if(!variable42) { _fun00006_ip = 3821; continue _fun00005 }
 3806:
            vacuum = michal.attachments;
            vacuum = vacuum.length;
            source = variable54 === vacuum;
 3821:
            if(!source) { _fun00006_ip = 3828; continue _fun00005 }
 3824:
            source = result != target;
 3828:
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            variable46 = 55;
            vacuum = vacuum[variable46];
            vacuum = config.bind(oscard)(vacuum);
            config = vacuum.ViewImageDescriptions;
            vacuum = config.getSetting;
            variable61 = vacuum.bind(config)();
            variable41 = new Array(0);
            if(source) { _fun00006_ip = 3996; continue _fun00005 }
 3874:
            if(!variable47) { _fun00006_ip = 4057; continue _fun00005 }
 3880:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = 57;
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
            _fun00006_ip = 4057; continue _fun00005;
 3996:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = 56;
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
 4057:
            if(!source) { _fun00006_ip = 4079; continue _fun00005 }
 4060:
            vacuum = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(vacuum === source)) { _fun00006_ip = 4119; continue _fun00005 }
 4079:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 58;
            source = config[source];
            config = vacuum.bind(oscard)(source);
            vacuum = config.calendarFormat;
            source = michal.timestamp;
            variable73 = vacuum.bind(config)(source, verify);
            _fun00006_ip = 4174; continue _fun00005;
 4119:
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
 4174:
            vacuum = _closure1_slot17;
            source = vacuum.getId;
            variable37 = source.bind(vacuum)();
            source = michal.isUnsupported;
            variable69 = papara;
            if(!source) { _fun00006_ip = 4257; continue _fun00005 }
 4200:
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
 4257:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4285; continue _fun00005 }
 4273:
            vacuum = !golfie;
            if(!vacuum) { _fun00006_ip = 4282; continue _fun00005 }
 4279:
            vacuum = entity;
 4282:
            source = vacuum;
 4285:
            if(source) { _fun00006_ip = 4306; continue _fun00005 }
 4288:
            vacuum = result != papara;
            if(!vacuum) { _fun00006_ip = 4303; continue _fun00005 }
 4295:
            config = '';
            vacuum = config !== papara;
 4303:
            source = vacuum;
 4306:
            if(source) { _fun00006_ip = 4340; continue _fun00005 }
 4309:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 30;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.getPollReplyPreview;
            variable69 = source.bind(vacuum)(michal);
 4340:
            source = undefined;
            if(!entity) { _fun00006_ip = 4384; continue _fun00005 }
 4345:
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            entity = 59;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable78;
            source = vacuum.bind(oscard)(michal, oscard, entity);
 4384:
            if(!status) { _fun00006_ip = 4418; continue _fun00005 }
 4387:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            entity = 60;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = vacuum.canForwardMessage;
            status = entity.bind(vacuum)(michal);
 4418:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable96 = 61;
            entity = entity[variable96];
            papara = vacuum.bind(oscard)(entity);
            config = papara.shouldDisplayClanTag;
            vacuum = variable77.id;
            target = result != variable68;
            entity = undefined;
            if(!target) { _fun00006_ip = 4461; continue _fun00005 }
 4458:
            entity = variable68;
 4461:
            entity = config.bind(papara)(vacuum, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4594; continue _fun00005 }
 4476:
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
            if(!quebec) { _fun00006_ip = 4585; continue _fun00005 }
 4534:
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
 4585:
            config = entity;
            target = sierra;
            papara = vacuum;
 4594:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable97 = 29;
            entity = entity[variable97];
            whisks = vacuum.bind(oscard)(entity);
            sierra = whisks.hasFlag;
            entity = michal;
            if(!(result != variable45)) { _fun00006_ip = 4630; continue _fun00005 }
 4627:
            entity = variable45;
 4630:
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
            variable98 = result != variable96;
            quebec = '';
            entity = quebec;
            if(!variable98) { _fun00006_ip = 4725; continue _fun00005 }
 4722:
            entity = variable96;
 4725:
            entity = vacuum.bind(variable93)(entity);
            variable93 = result != entity;
            if(!variable93) { _fun00006_ip = 4781; continue _fun00005 }
 4737:
            variable96 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable97];
            variable98 = variable96.bind(oscard)(vacuum);
            variable97 = variable98.hasFlag;
            variable96 = michal.flags;
            vacuum = _closure1_slot25;
            vacuum = vacuum.SENT_BY_SOCIAL_LAYER_INTEGRATION;
            variable93 = variable97.bind(variable98)(variable96, vacuum);
 4781:
            vacuum = undefined;
            if(!variable93) { _fun00006_ip = 4791; continue _fun00005 }
 4786:
            vacuum = entity.id;
 4791:
            entity = {};
            variable93 = michal.id;
            entity['id'] = variable93;
            variable93 = michal.channel_id;
            entity['channelId'] = variable93;
            variable96 = result != variable68;
            variable93 = undefined;
            if(!variable96) { _fun00006_ip = 4823; continue _fun00005 }
 4820:
            variable93 = variable68;
 4823:
            entity['guildId'] = variable93;
            variable93 = michal;
            if(!(result != variable45)) { _fun00006_ip = 4837; continue _fun00005 }
 4834:
            variable93 = variable45;
 4837:
            variable93 = variable93.flags;
            entity['flags'] = variable93;
            variable93 = michal.type;
            entity['type'] = variable93;
            variable93 = michal.nonce;
            if(!(result != variable93)) { _fun00006_ip = 4882; continue _fun00005 }
 4865:
            variable93 = michal.nonce;
            variable96 = 'string';
            variable93 = typeof variable93;
            if(!(variable96 === variable93)) { _fun00006_ip = 4890; continue _fun00005 }
 4882:
            variable93 = michal.nonce;
            _fun00006_ip = 4909; continue _fun00005;
 4890:
            variable96 = global;
            variable97 = variable96.String;
            variable96 = michal.nonce;
            variable93 = variable97.bind(oscard)(variable96);
 4909:
            entity['nonce'] = variable93;
            variable93 = michal.state;
            entity['state'] = variable93;
            entity['reactions'] = echoed;
            variable93 = undefined;
            if(variable56) { _fun00006_ip = 4936; continue _fun00005 }
 4933:
            variable93 = variable95;
 4936:
            entity['referencedMessage'] = variable93;
            entity['threadEmbed'] = variable92;
            variable93 = result != variable94;
            variable92 = undefined;
            if(!variable93) { _fun00006_ip = 4967; continue _fun00005 }
 4955:
            variable93 = variable94.getForwardInfo;
            variable92 = variable93.bind(variable94)();
 4967:
            entity['forwardInfo'] = variable92;
            variable92 = !sequen;
            if(!variable92) { _fun00006_ip = 4986; continue _fun00005 }
 4980:
            variable92 = michal.mentioned;
 4986:
            entity['mentioned'] = variable92;
            variable92 = michal.isEdited;
            variable93 = variable92.bind(michal)();
            variable92 = quebec;
            if(!variable93) { _fun00006_ip = 5068; continue _fun00005 }
 5007:
            variable92 = quebec;
            if(variable56) { _fun00006_ip = 5068; continue _fun00005 }
 5013:
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
 5068:
            entity['edited'] = variable92;
            variable92 = record.editedColor;
            entity['editedColor'] = variable92;
            variable92 = michal.isUnsupported;
            if(variable92) { _fun00006_ip = 5101; continue _fun00005 }
 5093:
            variable92 = record.textColor;
            _fun00006_ip = 5107; continue _fun00005;
 5101:
            variable92 = record.unsupportedColor;
 5107:
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
            if(!variable71) { _fun00006_ip = 5191; continue _fun00005 }
 5186:
            variable81 = variable77.username;
 5191:
            variable82 = result != variable81;
            variable78 = undefined;
            if(!variable82) { _fun00006_ip = 5203; continue _fun00005 }
 5200:
            variable78 = variable81;
 5203:
            entity['username'] = variable78;
            variable78 = undefined;
            if(variable71) { _fun00006_ip = 5217; continue _fun00005 }
 5212:
            variable78 = variable80.uri;
 5217:
            entity['avatarURL'] = variable78;
            variable78 = undefined;
            if(variable71) { _fun00006_ip = 5230; continue _fun00005 }
 5227:
            variable78 = variable79;
 5230:
            entity['avatarDecorationURL'] = variable78;
            variable77 = variable77.id;
            entity['authorId'] = variable77;
            if(variable71) { _fun00006_ip = 5277; continue _fun00005 }
 5248:
            variable77 = 'username';
            if(!(variable77 === kiloes)) { _fun00006_ip = 5277; continue _fun00005 }
 5256:
            variable77 = _closure1_slot3;
            variable77 = variable77.bind(oscard)(variable75);
            if(!(result == variable77)) { _fun00006_ip = 5275; continue _fun00005 }
 5269:
            variable77 = record.defaultUsernameColor;
 5275:
            _fun00006_ip = 5283; continue _fun00005;
 5277:
            variable77 = record.defaultUsernameColor;
 5283:
            entity['usernameColor'] = variable77;
            variable77 = null;
            if(variable71) { _fun00006_ip = 5317; continue _fun00005 }
 5293:
            variable78 = _closure1_slot3;
            variable79 = variable78.bind(oscard)(variable75);
            variable80 = result != variable79;
            variable78 = null;
            if(!variable80) { _fun00006_ip = 5314; continue _fun00005 }
 5311:
            variable78 = variable79;
 5314:
            variable77 = variable78;
 5317:
            entity['roleColor'] = variable77;
            variable77 = 'dot';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5337; continue _fun00005 }
 5333:
            variable77 = result != variable75;
 5337:
            entity['shouldShowRoleDot'] = variable77;
            variable77 = 'username';
            variable77 = variable77 === kiloes;
            if(!variable77) { _fun00006_ip = 5357; continue _fun00005 }
 5353:
            variable77 = result != variable75;
 5357:
            entity['shouldShowRoleOnName'] = variable77;
            entity['showLinkDecorations'] = variable70;
            if(variable71) { _fun00006_ip = 5391; continue _fun00005 }
 5370:
            variable70 = _closure1_slot3;
            variable70 = variable70.bind(oscard)(variable75);
            if(!(result == variable70)) { _fun00006_ip = 5389; continue _fun00005 }
 5383:
            variable70 = record.defaultUsernameColor;
 5389:
            _fun00006_ip = 5397; continue _fun00005;
 5391:
            variable70 = record.defaultUsernameColor;
 5397:
            entity['colorString'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5410; continue _fun00005 }
 5407:
            variable70 = variable74;
 5410:
            entity['roleIcon'] = variable70;
            variable74 = result != variable76;
            variable70 = undefined;
            if(!variable74) { _fun00006_ip = 5455; continue _fun00005 }
 5424:
            variable75 = _closure1_slot0;
            variable77 = _closure1_slot2;
            variable74 = 62;
            variable74 = variable77[variable74];
            variable75 = variable75.bind(oscard)(variable74);
            variable74 = variable75.createConnectionsRoleTag;
            variable70 = variable74.bind(variable75)(variable76);
 5455:
            entity['connectionsRoleTag'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5470; continue _fun00005 }
 5467:
            variable70 = variable73;
 5470:
            entity['timestamp'] = variable70;
            variable70 = undefined;
            if(variable71) { _fun00006_ip = 5486; continue _fun00005 }
 5480:
            variable70 = record.timestampColor;
 5486:
            entity['timestampColor'] = variable70;
            entity['content'] = variable69;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable56;
            variable69 = undefined;
            if(!(oscard !== variable72)) { _fun00006_ip = 5544; continue _fun00005 }
 5511:
            variable71 = _closure1_slot0;
            variable73 = _closure1_slot2;
            variable70 = 63;
            variable70 = variable73[variable70];
            variable71 = variable71.bind(oscard)(variable70);
            variable70 = variable71.createSurveyIndication;
            variable69 = variable70.bind(variable71)(michal, update, variable72);
 5544:
            entity['surveyIndication'] = variable69;
            variable70 = _closure1_slot0;
            variable71 = _closure1_slot2;
            variable69 = 64;
            variable69 = variable71[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createEphemeralIndication;
            variable69 = variable69.bind(variable70)(michal);
            entity['ephemeralIndication'] = variable69;
            entity['interactionStatus'] = variable57;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5650; continue _fun00005 }
 5599:
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable59 = 65;
            variable59 = variable70[variable59];
            variable70 = variable69.bind(oscard)(variable59);
            variable69 = variable70.createExecutedCommand;
            r101 = record.defaultUsernameColor;
            r106 = variable70;
            r105 = michal;
            r104 = ctrled;
            r103 = kiloes;
            r102 = update;
            variable57 = r106[variable69](r105, r104, r103, r102, r101, r100);
 5650:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5761; continue _fun00005 }
 5677:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 5761; continue _fun00005 }
 5682:
            variable59 = _closure1_slot1;
            variable69 = _closure1_slot2;
            variable58 = 66;
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
 5761:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 5777; continue _fun00005 }
 5771:
            variable57 = record.feedbackColor;
 5777:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 5793; continue _fun00005 }
 5787:
            variable54 = record.highlightColor;
 5793:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 5810; continue _fun00005 }
 5807:
            variable54 = variable55;
 5810:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 5824; continue _fun00005 }
 5818:
            variable53 = new Array(0);
            _fun00006_ip = 5856; continue _fun00005;
 5824:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 67;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscard)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(michal, update);
 5856:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 5870; continue _fun00005 }
 5864:
            variable50 = new Array(0);
            _fun00006_ip = 5903; continue _fun00005;
 5870:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 68;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(michal, variable45, update);
 5903:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 5945; continue _fun00005 }
 5913:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 69;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(michal, update);
 5945:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 5989; continue _fun00005 }
 5957:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 70;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(michal, update);
 5989:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 6020; continue _fun00005 }
 5999:
            if(!variable47) { _fun00006_ip = 6011; continue _fun00005 }
 6002:
            if(variable48) { _fun00006_ip = 6008; continue _fun00005 }
 6005:
            variable48 = variable49;
 6008:
            variable47 = variable48;
 6011:
            if(variable47) { _fun00006_ip = 6017; continue _fun00005 }
 6014:
            variable47 = variable42;
 6017:
            variable43 = variable47;
 6020:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6076; continue _fun00005 }
 6044:
            variable43 = michal.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6076; continue _fun00005 }
 6066:
            variable41 = 0.2;
 6076:
            entity['attachmentsOpacity'] = variable41;
            variable42 = _closure1_slot1;
            variable43 = _closure1_slot2;
            variable41 = 71;
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
            if(!variable39) { _fun00006_ip = 6171; continue _fun00005 }
 6168:
            variable39 = variable40;
 6171:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == ctrled;
            if(variable39) { _fun00006_ip = 6201; continue _fun00005 }
 6188:
            variable36 = ctrled.isForumPost;
            variable36 = variable36.bind(ctrled)();
            variable39 = !variable36;
 6201:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6221; continue _fun00005 }
 6207:
            variable40 = michal.id;
            variable39 = michal.channel_id;
            variable36 = variable40 === variable39;
 6221:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != ctrled;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6265; continue _fun00005 }
 6235:
            variable39 = ctrled.isForumPost;
            variable39 = variable39.bind(ctrled)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6265; continue _fun00005 }
 6250:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6265; continue _fun00005 }
 6255:
            variable38 = _closure1_slot31;
            variable36 = variable38.bind(oscard)(michal, ctrled);
 6265:
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
            variable38 = 72;
            variable38 = variable40[variable38];
            variable38 = variable39.bind(oscard)(variable38);
            variable38 = variable41.bind(variable42)(variable38);
            entity['swipeToReplyIconUrl'] = variable38;
            variable36 = variable40[variable36];
            variable38 = variable37.bind(oscard)(variable36);
            variable37 = variable38.getAssetUriForEmbed;
            variable36 = 73;
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
            if(cntext) { _fun00006_ip = 6459; continue _fun00005 }
 6453:
            cntext = new Array(0);
            _fun00006_ip = 6491; continue _fun00005;
 6459:
            whisks = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 74;
            limora = quebec[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createPostPreviewEmbeds;
            cntext = limora.bind(whisks)(michal, equals);
 6491:
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
            equals = 75;
            equals = whisks[equals];
            quebec = limora.bind(oscard)(equals);
            equals = quebec.createSafetyPolicyNoticeEmbed;
            equals = equals.bind(quebec)(michal);
            entity['safetyPolicyNoticeEmbed'] = equals;
            entity['pollData'] = source;
            source = 76;
            source = whisks[source];
            equals = limora.bind(oscard)(source);
            source = equals.createSafetySystemNotificationEmbed;
            source = source.bind(equals)(michal);
            entity['safetySystemNotificationEmbed'] = source;
            source = 77;
            source = whisks[source];
            equals = limora.bind(oscard)(source);
            whisks = equals.createCtaButton;
            limora = michal.id;
            source = michal.channel_id;
            source = whisks.bind(equals)(limora, source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!sierra) { _fun00006_ip = 6676; continue _fun00005 }
 6670:
            source = record.embedBackgroundColor;
 6676:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 78;
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
            if(!tangon) { _fun00006_ip = 6942; continue _fun00005 }
 6909:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6942:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 6988; continue _fun00005 }
 6955:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6988:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 7001; continue _fun00005 }
 6998:
            report = tangon;
 7001:
            if(!report) { _fun00006_ip = 7037; continue _fun00005 }
 7004:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 79;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 7037:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7079; continue _fun00005 }
 7047:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 79;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7079:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7100; continue _fun00005 }
 7095:
            report = ctrled.type;
 7100:
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
 7158:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7255; continue _fun00005 }
 7177:
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
            if(source) { _fun00006_ip = 7243; continue _fun00005 }
 7233:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7243:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7349; continue _fun00005;
 7255:
            tangon = {};
            report = _closure1_slot30;
            r106 = undefined;
            r105 = michal;
            r104 = kiloes;
            r103 = golfie;
            r102 = output;
            r101 = option;
            report = r106[report](r105, r104, r103, r102, r101, r100);
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
            r104 = output.bind(result)(report);
            r105 = tangon;
            report = copyDataProperties(r105, r104);
            entity = tangon;
 7349:
            return entity;
 7351:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7418; continue _fun00005 }
 7363:
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
 7418:
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
            r105 = golfie;
            r104 = option;
            option = copyDataProperties(r105, r104);
            option = 'renderThreadEmbeds';
            golfie[option] = offset;
            option = 'renderReactions';
            golfie[option] = offset;
            option = 'renderShortcuts';
            golfie[option] = offset;
            option = 'shouldDisableInteractiveComponents';
            golfie[option] = verify;
            zuuluu['options'] = golfie;
            r104 = report.bind(oscard)(zuuluu);
            r105 = entity;
            zuuluu = copyDataProperties(r105, r104);
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
    tangon = 80;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();