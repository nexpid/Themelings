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
            offset = _closure1_slot33;
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
    var _closure1_slot31 = entity;
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
    var _closure1_slot32 = entity;
    michal = function(argFoo) { // Original name: createMessageContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.message;
            variable93 = entity.messageForward;
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
            variable71 = entity.pushFeedbackType;
            variable56 = entity.renderContentOnly;
            whisks = entity.showContentInventoryEntryFallbackEmbed;
            echoed = option.renderEmbeds;
            report = option.renderReactions;
            tangon = option.renderShortcuts;
            output = option.inlineEmbedMedia;
            sizing = option.inlineAttachmentMedia;
            variable81 = option.constrainedWidth;
            sequen = option.ignoreMentioned;
            variable77 = option.animateEmoji;
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
            variable63 = option.shouldObscureSpoiler;
            variable65 = option.shouldDisableInteractiveComponents;
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
            variable64 = verify === romeon;
            cntext = variable64;
            if(!variable64) { _fun00006_ip = 380; continue _fun00005 }
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
            quebec = variable64;
            if(!variable64) { _fun00006_ip = 411; continue _fun00005 }
 408:
            quebec = output;
 411:
            variable43 = variable64;
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
            variable67 = undefined;
            if(sizing) { _fun00006_ip = 513; continue _fun00005 }
 503:
            sizing = ctrled.getGuildId;
            variable67 = sizing.bind(ctrled)();
 513:
            if(!(result == variable93)) { _fun00006_ip = 548; continue _fun00005 }
 517:
            echoed = _closure1_slot0;
            papara = _closure1_slot2;
            sizing = 33;
            sizing = papara[sizing];
            echoed = echoed.bind(oscard)(sizing);
            sizing = echoed.maybeCreateSingleForwardForMessage;
            variable93 = sizing.bind(echoed)(michal);
 548:
            variable45 = michal;
            if(!(result != variable93)) { _fun00006_ip = 566; continue _fun00005 }
 555:
            sizing = variable93.messageSnapshot;
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
            sizing['animateEmoji'] = variable77;
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
            if(!(result == sizing)) { _fun00006_ip = 7304; continue _fun00005 }
 694:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papara = 35;
            papara = sierra[papara];
            papara = target.bind(oscard)(papara);
            papara = papara.bind(oscard)(michal);
            if(papara) { _fun00006_ip = 7111; continue _fun00005 }
 725:
            variable70 = !backup;
            if(variable70) { _fun00006_ip = 734; continue _fun00005 }
 731:
            variable70 = variable56;
 734:
            variable76 = michal.author;
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
            variable62 = target.bind(sierra)(michal);
            sierra = undefined;
            if(!cntext) { _fun00006_ip = 1144; continue _fun00005 }
 971:
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
            config['shouldObscureExplicitMedia'] = variable62;
            equals = michal.author;
            equals = equals.bot;
            config['authorIsBot'] = equals;
            config['showContentInventoryEntryFallbackEmbed'] = whisks;
            sierra = target.bind(oscard)(config);
 1144:
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
            variable90 = config.tagText;
            variable89 = config.tagVerified;
            variable88 = config.tagTextColor;
            variable87 = config.tagBackgroundColor;
            variable86 = config.tagType;
            variable85 = config.tagIconUrl;
            variable84 = config.opTagText;
            variable83 = config.opTagTextColor;
            variable82 = config.opTagBackgroundColor;
            whisks = _closure1_slot21;
            target = whisks.getUploaderFileForMessageId;
            config = michal.id;
            target = target.bind(whisks)(config);
            variable42 = result != target;
            whisks = michal.state;
            config = _closure1_slot24;
            config = config.SEND_FAILED;
            config = whisks !== config;
            if(config) { _fun00006_ip = 1298; continue _fun00005 }
 1288:
            whisks = michal.isCommandType;
            config = whisks.bind(michal)();
 1298:
            whisks = sierra;
            if(config) { _fun00006_ip = 1369; continue _fun00005 }
 1304:
            config = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1315; continue _fun00005 }
 1311:
            config = new Array(0);
 1315:
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
 1369:
            equals = _closure1_slot8;
            sierra = equals.getMessage;
            config = michal.id;
            sierra = sierra.bind(equals)(config);
            variable55 = whisks;
            if(!(result != sierra)) { _fun00006_ip = 1468; continue _fun00005 }
 1396:
            config = whisks;
            if(!(result == whisks)) { _fun00006_ip = 1407; continue _fun00005 }
 1403:
            config = new Array(0);
 1407:
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
 1468:
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
            if(!config) { _fun00006_ip = 1596; continue _fun00005 }
 1557:
            config = michal.author;
            config = config.avatar;
            if(!(result == config)) { _fun00006_ip = 1596; continue _fun00005 }
 1573:
            variable40 = michal.application;
            variable41 = result == variable40;
            config = undefined;
            if(variable41) { _fun00006_ip = 1592; continue _fun00005 }
 1587:
            config = variable40.icon;
 1592:
            if(!(result == config)) { _fun00006_ip = 1671; continue _fun00005 }
 1596:
            if(!(result != variable48)) { _fun00006_ip = 1604; continue _fun00005 }
 1600:
            if(!(result == variable67)) { _fun00006_ip = 1617; continue _fun00005 }
 1604:
            config = variable76.getAvatarSource;
            config = config.bind(variable76)(oscard);
            _fun00006_ip = 1669; continue _fun00005;
 1617:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 46;
            variable40 = variable46[variable40];
            variable46 = variable41.bind(oscard)(variable40);
            variable41 = variable46.getGuildMemberAvatarSource;
            variable40 = {};
            variable49 = variable76.id;
            variable40['userId'] = variable49;
            variable40['guildMemberAvatar'] = variable48;
            variable40['guildId'] = variable67;
            config = variable41.bind(variable46)(variable40, variable76);
 1669:
            _fun00006_ip = 1748; continue _fun00005;
 1671:
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
 1748:
            variable79 = sierra.bind(whisks)(config);
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 46;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getAvatarDecorationURL;
            config = {};
            if(!(result == variable37)) { _fun00006_ip = 1791; continue _fun00005 }
 1785:
            variable37 = variable76.avatarDecoration;
 1791:
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
            variable78 = sierra.bind(whisks)(config);
            config = result != equals;
            variable73 = undefined;
            if(!config) { _fun00006_ip = 1927; continue _fun00005 }
 1869:
            config = result != variable67;
            variable73 = undefined;
            if(!config) { _fun00006_ip = 1927; continue _fun00005 }
 1878:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 49;
            config = whisks[config];
            whisks = sierra.bind(oscard)(config);
            sierra = whisks.getRoleIcon;
            config = {};
            config['guildId'] = variable67;
            config['roleId'] = equals;
            equals = 18;
            config['size'] = equals;
            variable73 = sierra.bind(whisks)(config);
 1927:
            sierra = michal.hasFlag;
            config = _closure1_slot25;
            config = config.SOURCE_MESSAGE_DELETED;
            config = sierra.bind(michal)(config);
            if(!config) { _fun00006_ip = 2006; continue _fun00005 }
 1951:
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
 2006:
            sierra = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            sierra = sierra.bind(oscard)(config);
            config = sierra.getMessageAuthor;
            config = config.bind(sierra)(michal);
            variable80 = config.nick;
            variable74 = config.colorString;
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === config)) { _fun00006_ip = 2128; continue _fun00005 }
 2065:
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
            config['appName'] = variable80;
            papara = whisks.bind(equals)(sierra, config);
 2128:
            sierra = michal.type;
            config = _closure1_slot23;
            config = config.REPLY;
            variable94 = undefined;
            if(!(sierra === config)) { _fun00006_ip = 3467; continue _fun00005 }
 2152:
            variable94 = undefined;
            if(!vacuum) { _fun00006_ip = 3467; continue _fun00005 }
 2160:
            sierra = _closure1_slot12;
            config = sierra.getMessageByReference;
            vacuum = michal.messageReference;
            vacuum = config.bind(sierra)(vacuum);
            sierra = vacuum.state;
            config = _closure1_slot13;
            config = config.LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2438; continue _fun00005 }
 2203:
            config = _closure1_slot13;
            config = config.NOT_LOADED;
            if(!(config !== sierra)) { _fun00006_ip = 2355; continue _fun00005 }
 2220:
            config = _closure1_slot13;
            config = config.DELETED;
            if(!(config !== sierra)) { _fun00006_ip = 2272; continue _fun00005 }
 2234:
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            config = 51;
            config = whisks[config];
            sierra = sierra.bind(oscard)(config);
            config = sierra.assertNever;
            config = config.bind(sierra)(vacuum);
            variable94 = undefined;
            _fun00006_ip = 3467; continue _fun00005;
 2272:
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
            variable94 = config;
            _fun00006_ip = 3467; continue _fun00005;
 2355:
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
            variable94 = config;
            _fun00006_ip = 3467; continue _fun00005;
 2438:
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
            if(config) { _fun00006_ip = 3389; continue _fun00005 }
 2495:
            sierra = _closure1_slot20;
            config = sierra.isIgnoredForMessage;
            config = config.bind(sierra)(vacuum);
            if(config) { _fun00006_ip = 3309; continue _fun00005 }
 2516:
            sierra = _closure1_slot33;
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
            if(!(result != sierra)) { _fun00006_ip = 3226; continue _fun00005 }
 2585:
            config = 'username';
            config = config in sierra;
            if(!config) { _fun00006_ip = 2756; continue _fun00005 }
 2599:
            equals = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            equals = equals.bind(oscard)(config);
            config = equals.getMessageAuthor;
            config = config.bind(equals)(vacuum);
            quebec = config.nick;
            equals = config.colorString;
            if(!(result == quebec)) { _fun00006_ip = 2654; continue _fun00005 }
 2643:
            config = vacuum.author;
            quebec = config.username;
 2654:
            variable37 = result != quebec;
            config = undefined;
            if(!variable37) { _fun00006_ip = 2666; continue _fun00005 }
 2663:
            config = quebec;
 2666:
            sierra['username'] = config;
            if(variable70) { _fun00006_ip = 2696; continue _fun00005 }
 2675:
            config = _closure1_slot3;
            config = config.bind(oscard)(equals);
            if(!(result == config)) { _fun00006_ip = 2694; continue _fun00005 }
 2688:
            config = sierra.colorString;
 2694:
            _fun00006_ip = 2702; continue _fun00005;
 2696:
            config = sierra.colorString;
 2702:
            sierra['colorString'] = config;
            equals = _closure1_slot1;
            quebec = _closure1_slot2;
            config = 50;
            config = quebec[config];
            config = equals.bind(oscard)(config);
            config = config.bind(oscard)(michal, vacuum);
            if(!config) { _fun00006_ip = 2756; continue _fun00005 }
 2737:
            equals = sierra.username;
            config = '@';
            config = config + equals;
            sierra['username'] = config;
 2756:
            equals = result == whisks;
            config = undefined;
            if(equals) { _fun00006_ip = 2776; continue _fun00005 }
 2765:
            whisks = whisks.messageSnapshot;
            config = whisks.message;
 2776:
            quebec = vacuum;
            if(!(result != config)) { _fun00006_ip = 2786; continue _fun00005 }
 2783:
            quebec = config;
 2786:
            config = 'stickers';
            config = config in quebec;
            if(config) { _fun00006_ip = 2803; continue _fun00005 }
 2797:
            config = new Array(0);
            _fun00006_ip = 2834; continue _fun00005;
 2803:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 28;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getMessageStickers;
            config = whisks.bind(equals)(quebec);
 2834:
            config = config.length;
            whisks = 0;
            if(!(!(config > whisks))) { _fun00006_ip = 3102; continue _fun00005 }
 2848:
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
            if(config) { _fun00006_ip = 3045; continue _fun00005 }
 2901:
            equals = quebec.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(equals !== config)) { _fun00006_ip = 3012; continue _fun00005 }
 2920:
            config = quebec.embeds;
            config = config.length;
            if(!(!(config > whisks))) { _fun00006_ip = 2955; continue _fun00005 }
 2935:
            config = quebec.attachments;
            config = config.length;
            whisks = config > whisks;
            config = null;
            if(!whisks) { _fun00006_ip = 3010; continue _fun00005 }
 2955:
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
 3010:
            _fun00006_ip = 3043; continue _fun00005;
 3012:
            equals = _closure1_slot0;
            variable37 = _closure1_slot2;
            whisks = 30;
            whisks = variable37[whisks];
            equals = equals.bind(oscard)(whisks);
            whisks = equals.getPollResultsReplyPreviewMobile;
            config = whisks.bind(equals)(quebec);
 3043:
            _fun00006_ip = 3100; continue _fun00005;
 3045:
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
 3100:
            _fun00006_ip = 3157; continue _fun00005;
 3102:
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
 3157:
            whisks = vacuum.type;
            vacuum = _closure1_slot23;
            vacuum = vacuum.POLL_RESULT;
            if(!(whisks === vacuum)) { _fun00006_ip = 3182; continue _fun00005 }
 3176:
            sierra['content'] = config;
 3182:
            vacuum = {};
            whisks = _closure1_slot22;
            whisks = whisks.LOADED;
            vacuum['state'] = whisks;
            vacuum['message'] = sierra;
            variable94 = vacuum;
            if(!(result != config)) { _fun00006_ip = 3467; continue _fun00005 }
 3212:
            vacuum['systemContent'] = config;
            variable94 = vacuum;
            _fun00006_ip = 3467; continue _fun00005;
 3226:
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
            variable94 = vacuum;
            _fun00006_ip = 3467; continue _fun00005;
 3309:
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
            variable94 = vacuum;
            _fun00006_ip = 3467; continue _fun00005;
 3389:
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
            variable94 = vacuum;
 3467:
            variable91 = undefined;
            if(!source) { _fun00006_ip = 3497; continue _fun00005 }
 3472:
            source = _closure1_slot31;
            r105 = undefined;
            r104 = michal;
            r103 = kiloes;
            r102 = golfie;
            r101 = output;
            r100 = option;
            variable91 = r105[source](r104, r103, r102, r101, r100, variable100);
 3497:
            vacuum = _closure1_slot9;
            source = vacuum.getInteraction;
            variable66 = source.bind(vacuum)(michal);
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 52;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.createInteractionStatus;
            variable57 = source.bind(vacuum)(michal, variable66);
            vacuum = result != variable67;
            source = null;
            if(!vacuum) { _fun00006_ip = 3574; continue _fun00005 }
 3553:
            sierra = _closure1_slot19;
            config = sierra.getMember;
            vacuum = variable76.id;
            source = config.bind(sierra)(variable67, vacuum);
 3574:
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
            variable69 = vacuum.alwaysShowLinkDecorations;
            vacuum = result == ctrled;
            whisks = source;
            source = undefined;
            if(vacuum) { _fun00006_ip = 3643; continue _fun00005 }
 3637:
            source = ctrled.parent_id;
 3643:
            sierra = ctrled;
            if(!(result != source)) { _fun00006_ip = 3693; continue _fun00005 }
 3650:
            sierra = ctrled;
            if(!(result != ctrled)) { _fun00006_ip = 3693; continue _fun00005 }
 3657:
            source = ctrled.isThread;
            source = source.bind(ctrled)();
            sierra = ctrled;
            if(!source) { _fun00006_ip = 3693; continue _fun00005 }
 3673:
            config = _closure1_slot18;
            vacuum = config.getChannel;
            source = ctrled.parent_id;
            sierra = vacuum.bind(config)(source);
 3693:
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
            variable75 = vacuum.bind(config)(source);
            source = variable45.attachments;
            source = source.length;
            variable54 = 0;
            variable48 = variable54 !== source;
            source = variable45.embeds;
            source = source.length;
            variable49 = variable54 !== source;
            source = variable42;
            if(!variable42) { _fun00006_ip = 3793; continue _fun00005 }
 3778:
            vacuum = michal.attachments;
            vacuum = vacuum.length;
            source = variable54 === vacuum;
 3793:
            if(!source) { _fun00006_ip = 3800; continue _fun00005 }
 3796:
            source = result != target;
 3800:
            config = _closure1_slot0;
            vacuum = _closure1_slot2;
            variable46 = 55;
            vacuum = vacuum[variable46];
            vacuum = config.bind(oscard)(vacuum);
            config = vacuum.ViewImageDescriptions;
            vacuum = config.getSetting;
            variable61 = vacuum.bind(config)();
            variable41 = new Array(0);
            if(source) { _fun00006_ip = 3960; continue _fun00005 }
 3843:
            if(!variable47) { _fun00006_ip = 4021; continue _fun00005 }
 3849:
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
            vacuum['shouldObscureSpoiler'] = variable63;
            sierra = record.embedBackgroundColor;
            vacuum['themedBackgroundColor'] = sierra;
            vacuum['shouldObscureExplicitMedia'] = variable62;
            vacuum['colors'] = record;
            variable41 = config.bind(oscard)(vacuum);
            _fun00006_ip = 4021; continue _fun00005;
 3960:
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
 4021:
            if(!source) { _fun00006_ip = 4043; continue _fun00005 }
 4024:
            vacuum = michal.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(vacuum === source)) { _fun00006_ip = 4082; continue _fun00005 }
 4043:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 58;
            source = config[source];
            config = vacuum.bind(oscard)(source);
            vacuum = config.calendarFormat;
            source = michal.timestamp;
            variable72 = vacuum.bind(config)(source);
            _fun00006_ip = 4137; continue _fun00005;
 4082:
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
            variable72 = vacuum.bind(config)(source);
 4137:
            vacuum = _closure1_slot17;
            source = vacuum.getId;
            variable37 = source.bind(vacuum)();
            source = michal.isUnsupported;
            variable68 = papara;
            if(!source) { _fun00006_ip = 4220; continue _fun00005 }
 4163:
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
            variable68 = vacuum.bind(config)(source);
 4220:
            source = michal.isPoll;
            source = source.bind(michal)();
            source = !source;
            if(source) { _fun00006_ip = 4248; continue _fun00005 }
 4236:
            vacuum = !golfie;
            if(!vacuum) { _fun00006_ip = 4245; continue _fun00005 }
 4242:
            vacuum = entity;
 4245:
            source = vacuum;
 4248:
            if(source) { _fun00006_ip = 4269; continue _fun00005 }
 4251:
            vacuum = result != papara;
            if(!vacuum) { _fun00006_ip = 4266; continue _fun00005 }
 4258:
            config = '';
            vacuum = config !== papara;
 4266:
            source = vacuum;
 4269:
            if(source) { _fun00006_ip = 4303; continue _fun00005 }
 4272:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 30;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.getPollReplyPreview;
            variable68 = source.bind(vacuum)(michal);
 4303:
            source = undefined;
            if(!entity) { _fun00006_ip = 4347; continue _fun00005 }
 4308:
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            entity = 59;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable77;
            source = vacuum.bind(oscard)(michal, oscard, entity);
 4347:
            if(!status) { _fun00006_ip = 4381; continue _fun00005 }
 4350:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            entity = 60;
            entity = config[entity];
            vacuum = vacuum.bind(oscard)(entity);
            entity = vacuum.canForwardMessage;
            status = entity.bind(vacuum)(michal);
 4381:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable95 = 61;
            entity = entity[variable95];
            papara = vacuum.bind(oscard)(entity);
            config = papara.shouldDisplayClanTag;
            vacuum = variable76.id;
            target = result != variable67;
            entity = undefined;
            if(!target) { _fun00006_ip = 4424; continue _fun00005 }
 4421:
            entity = variable67;
 4424:
            entity = config.bind(papara)(vacuum, entity);
            target = undefined;
            papara = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4557; continue _fun00005 }
 4439:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable95];
            sierra = vacuum.bind(oscard)(entity);
            vacuum = sierra.getUserPrimaryGuild;
            entity = variable76.primaryGuild;
            whisks = vacuum.bind(sierra)(entity);
            sierra = whisks.guildId;
            vacuum = whisks.tag;
            entity = whisks.guildId;
            quebec = result != entity;
            entity = undefined;
            if(!quebec) { _fun00006_ip = 4548; continue _fun00005 }
 4497:
            variable92 = _closure1_slot0;
            quebec = _closure1_slot2;
            quebec = quebec[variable95];
            variable96 = variable92.bind(oscard)(quebec);
            variable95 = variable96.getClanBadgeUrl;
            variable92 = whisks.guildId;
            quebec = whisks.badge;
            whisks = _closure1_slot28;
            whisks = whisks.SIZE_12;
            entity = variable95.bind(variable96)(variable92, quebec, whisks);
 4548:
            config = entity;
            target = sierra;
            papara = vacuum;
 4557:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable96 = 29;
            entity = entity[variable96];
            whisks = vacuum.bind(oscard)(entity);
            sierra = whisks.hasFlag;
            entity = michal;
            if(!(result != variable45)) { _fun00006_ip = 4593; continue _fun00005 }
 4590:
            entity = variable45;
 4593:
            vacuum = entity.flags;
            entity = _closure1_slot25;
            entity = entity.IS_VOICE_MESSAGE;
            sierra = sierra.bind(whisks)(vacuum, entity);
            vacuum = _closure1_slot30;
            entity = {};
            entity['currentUserId'] = variable37;
            entity['message'] = michal;
            entity['theme'] = update;
            entity['referralSenderMobileXPEnabled'] = limora;
            entity = vacuum.bind(oscard)(entity);
            limora = entity.referralTrialOfferDataUpdated;
            whisks = entity.referralTrialOfferData;
            variable92 = _closure1_slot5;
            vacuum = variable92.getApplication;
            variable95 = michal.applicationId;
            variable97 = result != variable95;
            quebec = '';
            entity = quebec;
            if(!variable97) { _fun00006_ip = 4688; continue _fun00005 }
 4685:
            entity = variable95;
 4688:
            entity = vacuum.bind(variable92)(entity);
            variable92 = result != entity;
            if(!variable92) { _fun00006_ip = 4744; continue _fun00005 }
 4700:
            variable95 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable96];
            variable97 = variable95.bind(oscard)(vacuum);
            variable96 = variable97.hasFlag;
            variable95 = entity.flags;
            vacuum = _closure1_slot26;
            vacuum = vacuum.SOCIAL_LAYER_INTEGRATION;
            variable92 = variable96.bind(variable97)(variable95, vacuum);
 4744:
            vacuum = undefined;
            if(!variable92) { _fun00006_ip = 4754; continue _fun00005 }
 4749:
            vacuum = entity.id;
 4754:
            entity = {};
            variable92 = michal.id;
            entity['id'] = variable92;
            variable92 = michal.channel_id;
            entity['channelId'] = variable92;
            variable95 = result != variable67;
            variable92 = undefined;
            if(!variable95) { _fun00006_ip = 4786; continue _fun00005 }
 4783:
            variable92 = variable67;
 4786:
            entity['guildId'] = variable92;
            variable92 = michal;
            if(!(result != variable45)) { _fun00006_ip = 4800; continue _fun00005 }
 4797:
            variable92 = variable45;
 4800:
            variable92 = variable92.flags;
            entity['flags'] = variable92;
            variable92 = michal.type;
            entity['type'] = variable92;
            variable92 = michal.nonce;
            if(!(result != variable92)) { _fun00006_ip = 4845; continue _fun00005 }
 4828:
            variable92 = michal.nonce;
            variable95 = 'string';
            variable92 = typeof variable92;
            if(!(variable95 === variable92)) { _fun00006_ip = 4853; continue _fun00005 }
 4845:
            variable92 = michal.nonce;
            _fun00006_ip = 4872; continue _fun00005;
 4853:
            variable95 = global;
            variable96 = variable95.String;
            variable95 = michal.nonce;
            variable92 = variable96.bind(oscard)(variable95);
 4872:
            entity['nonce'] = variable92;
            variable92 = michal.state;
            entity['state'] = variable92;
            entity['reactions'] = echoed;
            variable92 = undefined;
            if(variable56) { _fun00006_ip = 4899; continue _fun00005 }
 4896:
            variable92 = variable94;
 4899:
            entity['referencedMessage'] = variable92;
            entity['threadEmbed'] = variable91;
            variable92 = result != variable93;
            variable91 = undefined;
            if(!variable92) { _fun00006_ip = 4930; continue _fun00005 }
 4918:
            variable92 = variable93.getForwardInfo;
            variable91 = variable92.bind(variable93)();
 4930:
            entity['forwardInfo'] = variable91;
            variable91 = !sequen;
            if(!variable91) { _fun00006_ip = 4949; continue _fun00005 }
 4943:
            variable91 = michal.mentioned;
 4949:
            entity['mentioned'] = variable91;
            variable91 = michal.isEdited;
            variable92 = variable91.bind(michal)();
            variable91 = quebec;
            if(!variable92) { _fun00006_ip = 5031; continue _fun00005 }
 4970:
            variable91 = quebec;
            if(variable56) { _fun00006_ip = 5031; continue _fun00005 }
 4976:
            variable95 = _closure1_slot0;
            variable96 = _closure1_slot2;
            variable92 = 24;
            variable93 = variable96[variable92];
            variable93 = variable95.bind(oscard)(variable93);
            variable94 = variable93.intl;
            variable93 = variable94.string;
            variable92 = variable96[variable92];
            variable92 = variable95.bind(oscard)(variable92);
            variable92 = variable92.t;
            variable92 = variable92.C8sXIC;
            variable91 = variable93.bind(variable94)(variable92);
 5031:
            entity['edited'] = variable91;
            variable91 = record.editedColor;
            entity['editedColor'] = variable91;
            variable91 = michal.isUnsupported;
            if(variable91) { _fun00006_ip = 5064; continue _fun00005 }
 5056:
            variable91 = record.textColor;
            _fun00006_ip = 5070; continue _fun00005;
 5064:
            variable91 = record.unsupportedColor;
 5070:
            entity['textColor'] = variable91;
            variable91 = record.linkColor;
            entity['linkColor'] = variable91;
            entity['tagText'] = variable90;
            entity['tagVerified'] = variable89;
            entity['tagTextColor'] = variable88;
            entity['tagBackgroundColor'] = variable87;
            entity['tagType'] = variable86;
            entity['tagIconUrl'] = variable85;
            entity['opTagText'] = variable84;
            entity['opTagTextColor'] = variable83;
            entity['opTagBackgroundColor'] = variable82;
            entity['constrainedWidth'] = variable81;
            entity['gifAutoPlay'] = variable60;
            entity['animateEmoji'] = variable77;
            if(!variable70) { _fun00006_ip = 5154; continue _fun00005 }
 5149:
            variable80 = variable76.username;
 5154:
            variable81 = result != variable80;
            variable77 = undefined;
            if(!variable81) { _fun00006_ip = 5166; continue _fun00005 }
 5163:
            variable77 = variable80;
 5166:
            entity['username'] = variable77;
            variable77 = undefined;
            if(variable70) { _fun00006_ip = 5181; continue _fun00005 }
 5175:
            variable77 = variable79.uri;
 5181:
            entity['avatarURL'] = variable77;
            variable77 = undefined;
            if(variable70) { _fun00006_ip = 5194; continue _fun00005 }
 5191:
            variable77 = variable78;
 5194:
            entity['avatarDecorationURL'] = variable77;
            variable76 = variable76.id;
            entity['authorId'] = variable76;
            if(variable70) { _fun00006_ip = 5241; continue _fun00005 }
 5212:
            variable76 = 'username';
            if(!(variable76 === kiloes)) { _fun00006_ip = 5241; continue _fun00005 }
 5220:
            variable76 = _closure1_slot3;
            variable76 = variable76.bind(oscard)(variable74);
            if(!(result == variable76)) { _fun00006_ip = 5239; continue _fun00005 }
 5233:
            variable76 = record.defaultUsernameColor;
 5239:
            _fun00006_ip = 5247; continue _fun00005;
 5241:
            variable76 = record.defaultUsernameColor;
 5247:
            entity['usernameColor'] = variable76;
            variable76 = null;
            if(variable70) { _fun00006_ip = 5281; continue _fun00005 }
 5257:
            variable77 = _closure1_slot3;
            variable78 = variable77.bind(oscard)(variable74);
            variable79 = result != variable78;
            variable77 = null;
            if(!variable79) { _fun00006_ip = 5278; continue _fun00005 }
 5275:
            variable77 = variable78;
 5278:
            variable76 = variable77;
 5281:
            entity['roleColor'] = variable76;
            variable76 = 'dot';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5301; continue _fun00005 }
 5297:
            variable76 = result != variable74;
 5301:
            entity['shouldShowRoleDot'] = variable76;
            variable76 = 'username';
            variable76 = variable76 === kiloes;
            if(!variable76) { _fun00006_ip = 5321; continue _fun00005 }
 5317:
            variable76 = result != variable74;
 5321:
            entity['shouldShowRoleOnName'] = variable76;
            entity['showLinkDecorations'] = variable69;
            if(variable70) { _fun00006_ip = 5355; continue _fun00005 }
 5334:
            variable69 = _closure1_slot3;
            variable69 = variable69.bind(oscard)(variable74);
            if(!(result == variable69)) { _fun00006_ip = 5353; continue _fun00005 }
 5347:
            variable69 = record.defaultUsernameColor;
 5353:
            _fun00006_ip = 5361; continue _fun00005;
 5355:
            variable69 = record.defaultUsernameColor;
 5361:
            entity['colorString'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5374; continue _fun00005 }
 5371:
            variable69 = variable73;
 5374:
            entity['roleIcon'] = variable69;
            variable73 = result != variable75;
            variable69 = undefined;
            if(!variable73) { _fun00006_ip = 5419; continue _fun00005 }
 5388:
            variable74 = _closure1_slot0;
            variable76 = _closure1_slot2;
            variable73 = 62;
            variable73 = variable76[variable73];
            variable74 = variable74.bind(oscard)(variable73);
            variable73 = variable74.createConnectionsRoleTag;
            variable69 = variable73.bind(variable74)(variable75);
 5419:
            entity['connectionsRoleTag'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5434; continue _fun00005 }
 5431:
            variable69 = variable72;
 5434:
            entity['timestamp'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5450; continue _fun00005 }
 5444:
            variable69 = record.timestampColor;
 5450:
            entity['timestampColor'] = variable69;
            entity['content'] = variable68;
            entity['isEditing'] = foxtra;
            entity['renderContentOnly'] = variable56;
            variable68 = undefined;
            if(!(oscard !== variable71)) { _fun00006_ip = 5508; continue _fun00005 }
 5475:
            variable70 = _closure1_slot0;
            variable72 = _closure1_slot2;
            variable69 = 63;
            variable69 = variable72[variable69];
            variable70 = variable70.bind(oscard)(variable69);
            variable69 = variable70.createSurveyIndication;
            variable68 = variable69.bind(variable70)(michal, update, variable71);
 5508:
            entity['surveyIndication'] = variable68;
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable68 = 64;
            variable68 = variable70[variable68];
            variable69 = variable69.bind(oscard)(variable68);
            variable68 = variable69.createEphemeralIndication;
            variable68 = variable68.bind(variable69)(michal);
            entity['ephemeralIndication'] = variable68;
            entity['interactionStatus'] = variable57;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5614; continue _fun00005 }
 5563:
            variable68 = _closure1_slot0;
            variable69 = _closure1_slot2;
            variable59 = 65;
            variable59 = variable69[variable59];
            variable69 = variable68.bind(oscard)(variable59);
            variable68 = variable69.createExecutedCommand;
            r100 = record.defaultUsernameColor;
            r105 = variable69;
            r104 = michal;
            r103 = ctrled;
            r102 = kiloes;
            r101 = update;
            variable57 = r105[variable68](r104, r103, r102, r101, r100, variable100);
 5614:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5720; continue _fun00005 }
 5641:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 5720; continue _fun00005 }
 5646:
            variable59 = _closure1_slot1;
            variable68 = _closure1_slot2;
            variable58 = 66;
            variable58 = variable68[variable58];
            variable59 = variable59.bind(oscard)(variable58);
            variable58 = {};
            variable58['message'] = michal;
            variable58['guildId'] = variable67;
            variable58['interaction'] = variable66;
            variable58['shouldDisableInteractiveComponents'] = variable65;
            variable58['shouldShowMedia'] = variable64;
            variable58['shouldObscureSpoiler'] = variable63;
            variable58['shouldObscureExplicitMedia'] = variable62;
            variable58['shouldShowMosaicMediaDescriptions'] = variable61;
            variable58['shouldAutoPlayGifs'] = variable60;
            variable58['colors'] = record;
            variable57 = variable59.bind(oscard)(variable58);
 5720:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 5736; continue _fun00005 }
 5730:
            variable57 = record.feedbackColor;
 5736:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 5752; continue _fun00005 }
 5746:
            variable54 = record.highlightColor;
 5752:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 5769; continue _fun00005 }
 5766:
            variable54 = variable55;
 5769:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 5783; continue _fun00005 }
 5777:
            variable53 = new Array(0);
            _fun00006_ip = 5815; continue _fun00005;
 5783:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 67;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscard)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(michal, update);
 5815:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 5829; continue _fun00005 }
 5823:
            variable50 = new Array(0);
            _fun00006_ip = 5862; continue _fun00005;
 5829:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 68;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscard)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(michal, variable45, update);
 5862:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 5904; continue _fun00005 }
 5872:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 69;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscard)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(michal, update);
 5904:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 5948; continue _fun00005 }
 5916:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 70;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscard)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(michal, update);
 5948:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 5979; continue _fun00005 }
 5958:
            if(!variable47) { _fun00006_ip = 5970; continue _fun00005 }
 5961:
            if(variable48) { _fun00006_ip = 5967; continue _fun00005 }
 5964:
            variable48 = variable49;
 5967:
            variable47 = variable48;
 5970:
            if(variable47) { _fun00006_ip = 5976; continue _fun00005 }
 5973:
            variable47 = variable42;
 5976:
            variable43 = variable47;
 5979:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6035; continue _fun00005 }
 6003:
            variable43 = michal.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6035; continue _fun00005 }
 6025:
            variable41 = 0.2;
 6035:
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
            if(!variable39) { _fun00006_ip = 6130; continue _fun00005 }
 6127:
            variable39 = variable40;
 6130:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == ctrled;
            if(variable39) { _fun00006_ip = 6160; continue _fun00005 }
 6147:
            variable36 = ctrled.isForumPost;
            variable36 = variable36.bind(ctrled)();
            variable39 = !variable36;
 6160:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6180; continue _fun00005 }
 6166:
            variable40 = michal.id;
            variable39 = michal.channel_id;
            variable36 = variable40 === variable39;
 6180:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != ctrled;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6224; continue _fun00005 }
 6194:
            variable39 = ctrled.isForumPost;
            variable39 = variable39.bind(ctrled)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6224; continue _fun00005 }
 6209:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6224; continue _fun00005 }
 6214:
            variable38 = _closure1_slot32;
            variable36 = variable38.bind(oscard)(michal, ctrled);
 6224:
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
            if(cntext) { _fun00006_ip = 6418; continue _fun00005 }
 6412:
            cntext = new Array(0);
            _fun00006_ip = 6450; continue _fun00005;
 6418:
            whisks = _closure1_slot0;
            quebec = _closure1_slot2;
            limora = 74;
            limora = quebec[limora];
            whisks = whisks.bind(oscard)(limora);
            limora = whisks.createPostPreviewEmbeds;
            cntext = limora.bind(whisks)(michal, equals);
 6450:
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
            whisks = limora.bind(oscard)(source);
            limora = whisks.createCtaButton;
            source = michal.id;
            source = limora.bind(whisks)(source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!sierra) { _fun00006_ip = 6629; continue _fun00005 }
 6623:
            source = record.embedBackgroundColor;
 6629:
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
            if(!tangon) { _fun00006_ip = 6895; continue _fun00005 }
 6862:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6895:
            entity['showForwardShortcut'] = source;
            source = tangon;
            if(!tangon) { _fun00006_ip = 6941; continue _fun00005 }
 6908:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscard)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(michal, sequen, ctrled);
 6941:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 6954; continue _fun00005 }
 6951:
            report = tangon;
 6954:
            if(!report) { _fun00006_ip = 6990; continue _fun00005 }
 6957:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 79;
            source = config[source];
            vacuum = vacuum.bind(oscard)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(michal, sequen, ctrled);
 6990:
            entity['showReactionShortcut'] = report;
            if(!tangon) { _fun00006_ip = 7032; continue _fun00005 }
 7000:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 79;
            report = vacuum[report];
            source = source.bind(oscard)(report);
            report = source.canShowThreadShortcut;
            tangon = report.bind(source)(michal, ctrled);
 7032:
            entity['showThreadShortcut'] = tangon;
            tangon = result == ctrled;
            report = undefined;
            if(tangon) { _fun00006_ip = 7053; continue _fun00005 }
 7048:
            report = ctrled.type;
 7053:
            tangon = _closure1_slot27;
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
 7111:
            tangon = michal.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tangon !== entity)) { _fun00006_ip = 7208; continue _fun00005 }
 7130:
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
            if(source) { _fun00006_ip = 7196; continue _fun00005 }
 7186:
            source = ctrled.isForumPost;
            result = source.bind(ctrled)();
 7196:
            entity['isForumPost'] = result;
            entity = tangon.bind(report)(entity);
            _fun00006_ip = 7302; continue _fun00005;
 7208:
            tangon = {};
            report = _closure1_slot31;
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
 7302:
            return entity;
 7304:
            entity = michal.activityInstance;
            tangon = undefined;
            if(!(tangon === entity)) { _fun00006_ip = 7371; continue _fun00005 }
 7316:
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
 7371:
            entity = {};
            report = _closure1_slot33;
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
    var _closure1_slot33 = michal;
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
    option = tangon.ApplicationFlags;
    var _closure1_slot26 = option;
    tangon = tangon.ChannelTypes;
    var _closure1_slot27 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ClanTagBadgeSize;
    var _closure1_slot28 = tangon;
    tangon = {};
    tangon['referralTrialOfferDataUpdated'] = entity;
    tangon['referralTrialOfferData'] = entity;
    var _closure1_slot29 = tangon;
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
            entity = _closure1_slot29;
            return entity;
        }
    };
    var _closure1_slot30 = tangon;
    tangon = 80;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/createMessageContent.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();