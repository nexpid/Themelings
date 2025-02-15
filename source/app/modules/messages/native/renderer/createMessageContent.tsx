// app/modules/messages/native/renderer/createMessageContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: createThreadEmbed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = argCorge;
            mike = argBaz;
            if(mike) { _fun00002_ip = 791; continue _fun00001 }
 15:
            zulu = entity.hasFlag;
            mike = _closure1_slot25;
            mike = mike.HAS_THREAD;
            mike = zulu.bind(entity)(mike);
            if(!mike) { _fun00002_ip = 791; continue _fun00001 }
 45:
            mike = null;
            if(!(mike != oscar)) { _fun00002_ip = 791; continue _fun00001 }
 54:
            golf = _closure1_slot15;
            report = golf.getMostRecentMessage;
            yankee = _closure1_slot1;
            verify = _closure1_slot2;
            offset = 22;
            zulu = verify[offset];
            options = undefined;
            foxtrot = yankee.bind(options)(zulu);
            romeo = foxtrot.castMessageIdAsChannelId;
            zulu = entity.id;
            zulu = romeo.bind(foxtrot)(zulu);
            golf = report.bind(golf)(zulu);
            report = _closure1_slot15;
            zulu = report.getCount;
            offset = verify[offset];
            yankee = yankee.bind(options)(offset);
            offset = yankee.castMessageIdAsChannelId;
            entity = entity.id;
            entity = offset.bind(yankee)(entity);
            zulu = zulu.bind(report)(entity);
            report = _closure1_slot0;
            entity = 23;
            entity = verify[entity];
            verify = report.bind(options)(entity);
            report = verify.formatMobileMessageCountLabel;
            entity = oscar.id;
            report = report.bind(verify)(zulu, entity);
            if(!(mike != zulu)) { _fun00002_ip = 190; continue _fun00001 }
 184:
            entity = 0;
            if(!(!(zulu > entity))) { _fun00002_ip = 278; continue _fun00001 }
 190:
            entity = {};
            zulu = oscar.name;
            entity['title'] = zulu;
            entity['messageCountLabel'] = report;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 24;
            verify = romeo[zulu];
            verify = yankee.bind(options)(verify);
            offset = verify.intl;
            verify = offset.string;
            zulu = romeo[zulu];
            zulu = yankee.bind(options)(zulu);
            zulu = zulu.t;
            zulu = zulu.HYtNyM;
            zulu = verify.bind(offset)(zulu);
            entity['messagePreviewString'] = zulu;
            zulu = false;
            entity['archived'] = zulu;
            _fun00002_ip = 789; continue _fun00001;
 278:
            zulu = oscar.threadMetadata;
            if(!(mike != zulu)) { _fun00002_ip = 300; continue _fun00001 }
 288:
            zulu = zulu.archived;
            if(zulu) { _fun00002_ip = 656; continue _fun00001 }
 300:
            if(!(mike != golf)) { _fun00002_ip = 565; continue _fun00001 }
 307:
            zulu = golf.type;
            mike = _closure1_slot23;
            mike = mike.CHANNEL_NAME_CHANGE;
            if(!(zulu !== mike)) { _fun00002_ip = 565; continue _fun00001 }
 329:
            zulu = golf.type;
            mike = _closure1_slot23;
            mike = mike.THREAD_STARTER_MESSAGE;
            if(!(zulu !== mike)) { _fun00002_ip = 565; continue _fun00001 }
 351:
            mike = golf.blocked;
            if(mike) { _fun00002_ip = 455; continue _fun00001 }
 360:
            mike = golf.ignored;
            if(mike) { _fun00002_ip = 455; continue _fun00001 }
 369:
            mike = {};
            zulu = oscar.name;
            mike['title'] = zulu;
            mike['messageCountLabel'] = report;
            zulu = {};
            verify = _closure1_slot22;
            verify = verify.LOADED;
            zulu['state'] = verify;
            offset = _closure1_slot33;
            verify = {'message': null, 'roleStyle': null, 'options': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'isSystemDM': false, 'isInlineReplyPreview': true};
            verify['message'] = golf;
            yankee = argBar;
            verify['roleStyle'] = yankee;
            yankee = argGrault;
            verify['options'] = yankee;
            verify = offset.bind(options)(verify);
            zulu['message'] = verify;
            mike['referencedMessage'] = zulu;
            _fun00002_ip = 563; continue _fun00001;
 455:
            zulu = {};
            verify = oscar.name;
            zulu['title'] = verify;
            zulu['messageCountLabel'] = report;
            golf = golf.blocked;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 24;
            offset = foxtrot[verify];
            offset = romeo.bind(options)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(options)(verify);
            verify = verify.t;
            if(golf) { _fun00002_ip = 537; continue _fun00001 }
 524:
            golf = verify.G7p6v7;
            golf = offset.bind(yankee)(golf);
            _fun00002_ip = 548; continue _fun00001;
 537:
            verify = verify.XAkOo6;
            golf = offset.bind(yankee)(verify);
 548:
            zulu['messagePreviewString'] = golf;
            golf = false;
            zulu['archived'] = golf;
            mike = zulu;
 563:
            _fun00002_ip = 651; continue _fun00001;
 565:
            zulu = {};
            golf = oscar.name;
            zulu['title'] = golf;
            zulu['messageCountLabel'] = report;
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            golf = 24;
            verify = romeo[golf];
            verify = yankee.bind(options)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = romeo[golf];
            golf = yankee.bind(options)(golf);
            golf = golf.t;
            golf = golf.ZTo4HR;
            golf = verify.bind(offset)(golf);
            zulu['messagePreviewString'] = golf;
            golf = false;
            zulu['archived'] = golf;
            mike = zulu;
 651:
            _fun00002_ip = 786; continue _fun00001;
 656:
            zulu = {};
            oscar = oscar.name;
            zulu['title'] = oscar;
            zulu['messageCountLabel'] = report;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 24;
            golf = verify[report];
            golf = oscar.bind(options)(golf);
            offset = golf.intl;
            golf = offset.string;
            report = verify[report];
            report = oscar.bind(options)(report);
            report = report.t;
            report = report.ZTo4HR;
            report = golf.bind(offset)(report);
            zulu['messagePreviewString'] = report;
            report = true;
            zulu['archived'] = report;
            report = 25;
            report = verify[report];
            oscar = oscar.bind(options)(report);
            report = oscar.getAssetUriForEmbed;
            golf = _closure1_slot1;
            tango = 26;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            tango = report.bind(oscar)(tango);
            zulu['archivedIconUrl'] = tango;
            mike = zulu;
 786:
            entity = mike;
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
            zulu = argFoo;
            mike = argBar;
            tango = zulu.id;
            entity = zulu.channel_id;
            if(!(tango !== entity)) { _fun00004_ip = 24; continue _fun00003 }
 20:
            entity = undefined;
            return entity;
 24:
            oscar = _closure1_slot14;
            report = oscar.hasJoined;
            tango = zulu.channel_id;
            golf = report.bind(oscar)(tango);
            zulu = zulu.reactions;
            tango = zulu.length;
            zulu = 0;
            oscar = zulu !== tango;
            zulu = undefined;
            report = undefined;
            if(oscar) { _fun00004_ip = 199; continue _fun00003 }
 74:
            verify = _closure1_slot18;
            options = verify.getChannel;
            tango = mike.parent_id;
            tango = options.bind(verify)(tango);
            offset = null;
            options = offset == tango;
            yankee = undefined;
            if(options) { _fun00004_ip = 111; continue _fun00003 }
 105:
            yankee = tango.defaultReactionEmoji;
 111:
            options = offset == yankee;
            tango = undefined;
            if(options) { _fun00004_ip = 126; continue _fun00003 }
 120:
            tango = yankee.emojiId;
 126:
            tango = offset != tango;
            offset = null;
            if(!tango) { _fun00004_ip = 156; continue _fun00003 }
 135:
            verify = _closure1_slot7;
            options = verify.getUsableCustomEmojiById;
            tango = yankee.emojiId;
            offset = options.bind(verify)(tango);
 156:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 27;
            tango = verify[tango];
            verify = options.bind(zulu)(tango);
            options = verify.createDefaultReaction;
            tango = {};
            tango['defaultReactionEmoji'] = yankee;
            tango['customGuildEmoji'] = offset;
            report = options.bind(verify)(tango);
 199:
            options = _closure1_slot10;
            tango = options.shouldDisplayPrompt;
            mike = mike.id;
            tango = tango.bind(options)(mike);
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 27;
            entity = options[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.createForumPostActions;
            entity = {};
            entity['isFollowing'] = golf;
            entity['hasReactions'] = oscar;
            entity['defaultReaction'] = report;
            entity['showMediaPostSharePrompt'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    mike = function(argFoo) { // Original name: createMessageContent
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            mike = entity.message;
            variable93 = entity.messageForward;
            kilo = entity.roleStyle;
            backup = entity.isFirst;
            foxtrot = entity.isEditing;
            romeo = entity.canShowImages;
            yankee = entity.isSystemDM;
            golf = entity.isInlineReplyPreview;
            oscar = undefined;
            if(!(golf === oscar)) { _fun00006_ip = 58; continue _fun00005 }
 56:
            golf = false;
 58:
            options = entity.options;
            variable36 = entity.threadStarterMessageHeader;
            variable71 = entity.pushFeedbackType;
            variable56 = entity.renderContentOnly;
            whiskey = entity.showContentInventoryEntryFallbackEmbed;
            echo = options.renderEmbeds;
            report = options.renderReactions;
            tango = options.renderShortcuts;
            output = options.inlineEmbedMedia;
            sizing = options.inlineAttachmentMedia;
            variable81 = options.constrainedWidth;
            sequence = options.ignoreMentioned;
            variable77 = options.animateEmoji;
            variable44 = options.animatingStickerMessageId;
            variable60 = options.gifAutoPlay;
            variable50 = options.renderCodedLinks;
            variable53 = options.renderGiftCode;
            variable52 = options.renderActivityInstanceEmbed;
            variable51 = options.renderActivityInviteEmbed;
            variable58 = options.renderComponents;
            source = options.renderThreadEmbeds;
            vacuum = options.renderReplies;
            variable39 = options.renderCommunicationDisabled;
            variable47 = options.renderAttachments;
            variable59 = options.renderExecutedCommands;
            entity = options.renderPolls;
            variable38 = options.renderForumPostActions;
            status = options.renderInlineForwardButton;
            update = options.forcedTheme;
            variable37 = options.ignoreEmbedDescriptionCache;
            variable42 = options.forceHideSimpleEmbedContent;
            variable63 = options.shouldObscureSpoiler;
            variable65 = options.shouldDisableInteractiveComponents;
            config = options.useAlternateEmbedColors;
            variable41 = options.shouldFilterKeywords;
            result = null;
            if(!(result == update)) { _fun00006_ip = 286; continue _fun00005 }
 273:
            zulu = _closure1_slot16;
            update = zulu.theme;
 286:
            offset = _closure1_slot1;
            control = _closure1_slot2;
            verify = 31;
            verify = control[verify];
            verify = offset.bind(oscar)(verify);
            record = verify.bind(oscar)(update, config);
            verify = 32;
            verify = control[verify];
            papa = offset.bind(oscar)(verify);
            context = papa.getCurrentConfig;
            control = {};
            config = 'createMessageContent';
            control['location'] = config;
            verify = {};
            offset = false;
            verify['autoTrackExposure'] = offset;
            verify = context.bind(papa)(control, verify);
            lima = verify.enabled;
            verify = true;
            variable64 = verify === romeo;
            context = variable64;
            if(!variable64) { _fun00006_ip = 380; continue _fun00005 }
 377:
            context = echo;
 380:
            if(!context) { _fun00006_ip = 402; continue _fun00005 }
 383:
            control = mike.type;
            echo = _closure1_slot23;
            echo = echo.CUSTOM_GIFT;
            context = control !== echo;
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
            echo = _closure1_slot18;
            output = echo.getChannel;
            sizing = mike.getChannelId;
            sizing = sizing.bind(mike)();
            control = output.bind(echo)(sizing);
            echo = _closure1_slot18;
            output = echo.getChannel;
            papa = _closure1_slot1;
            target = _closure1_slot2;
            sizing = 22;
            sizing = target[sizing];
            target = papa.bind(oscar)(sizing);
            papa = target.castMessageIdAsChannelId;
            sizing = mike.id;
            sizing = papa.bind(target)(sizing);
            output = output.bind(echo)(sizing);
            sizing = result == control;
            variable67 = undefined;
            if(sizing) { _fun00006_ip = 513; continue _fun00005 }
 503:
            sizing = control.getGuildId;
            variable67 = sizing.bind(control)();
 513:
            if(!(result == variable93)) { _fun00006_ip = 548; continue _fun00005 }
 517:
            echo = _closure1_slot0;
            papa = _closure1_slot2;
            sizing = 33;
            sizing = papa[sizing];
            echo = echo.bind(oscar)(sizing);
            sizing = echo.maybeCreateSingleForwardForMessage;
            variable93 = sizing.bind(echo)(mike);
 548:
            variable45 = mike;
            if(!(result != variable93)) { _fun00006_ip = 566; continue _fun00005 }
 555:
            sizing = variable93.messageSnapshot;
            variable45 = sizing.message;
 566:
            echo = new Array(0);
            if(!report) { _fun00006_ip = 616; continue _fun00005 }
 573:
            papa = _closure1_slot1;
            target = _closure1_slot2;
            sizing = 34;
            sizing = target[sizing];
            papa = papa.bind(oscar)(sizing);
            sizing = {};
            target = mike.reactions;
            sizing['reactions'] = target;
            sizing['animateEmoji'] = variable77;
            echo = papa.bind(oscar)(sizing);
 616:
            target = mike.type;
            sizing = _closure1_slot23;
            papa = sizing.THREAD_STARTER_MESSAGE;
            sizing = null;
            if(!(target === papa)) { _fun00006_ip = 687; continue _fun00005 }
 637:
            sierra = _closure1_slot12;
            target = sierra.getMessageByReference;
            papa = mike.messageReference;
            target = target.bind(sierra)(papa);
            equality = target.state;
            papa = _closure1_slot13;
            sierra = papa.LOADED;
            papa = null;
            if(!(equality === sierra)) { _fun00006_ip = 684; continue _fun00005 }
 679:
            papa = target.message;
 684:
            sizing = papa;
 687:
            if(!(result == sizing)) { _fun00006_ip = 7302; continue _fun00005 }
 694:
            target = _closure1_slot1;
            sierra = _closure1_slot2;
            papa = 35;
            papa = sierra[papa];
            papa = target.bind(oscar)(papa);
            papa = papa.bind(oscar)(mike);
            if(papa) { _fun00006_ip = 7109; continue _fun00005 }
 725:
            variable70 = !backup;
            if(variable70) { _fun00006_ip = 734; continue _fun00005 }
 731:
            variable70 = variable56;
 734:
            variable76 = mike.author;
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            papa = 37;
            papa = sierra[papa];
            sierra = target.bind(oscar)(papa);
            target = sierra.isMessageNewerThanImprovedMarkdownEpoch;
            equality = mike.editedTimestamp;
            if(!(result == equality)) { _fun00006_ip = 782; continue _fun00005 }
 776:
            equality = mike.timestamp;
 782:
            papa = equality.valueOf;
            papa = papa.bind(equality)();
            equality = target.bind(sierra)(papa);
            papa = variable45.content;
            if(!(result != papa)) { _fun00006_ip = 818; continue _fun00005 }
 805:
            target = variable45.content;
            papa = '';
            if(!(papa === target)) { _fun00006_ip = 831; continue _fun00005 }
 818:
            target = {};
            target['content'] = oscar;
            target['hasSpoilerEmbeds'] = offset;
            _fun00006_ip = 921; continue _fun00005;
 831:
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            papa = 38;
            papa = variable40[papa];
            variable40 = sierra.bind(oscar)(papa);
            sierra = variable40.parseMessageMarkup;
            if(variable42) { _fun00006_ip = 872; continue _fun00005 }
 860:
            papa = context;
            if(!papa) { _fun00006_ip = 869; continue _fun00005 }
 866:
            papa = quebec;
 869:
            variable42 = papa;
 872:
            papa = result != output;
            if(!papa) { _fun00006_ip = 890; continue _fun00005 }
 879:
            variable46 = mike.isFirstMessageInForumPost;
            papa = variable46.bind(mike)(output);
 890:
            r105 = variable40;
            r104 = mike;
            r103 = variable45;
            r102 = variable42;
            r101 = golf;
            r100 = papa;
            variable100 = equality;
            variable99 = equality;
            variable98 = variable41;
            target = r105[sierra](r104, r103, r102, r101, r100, variable100, variable99, variable98, variable97);
 921:
            papa = target.content;
            variable41 = target.hasSpoilerEmbeds;
            sierra = _closure1_slot0;
            variable40 = _closure1_slot2;
            target = 39;
            target = variable40[target];
            sierra = sierra.bind(oscar)(target);
            target = sierra.shouldRedactExplicitContent;
            variable62 = target.bind(sierra)(mike);
            sierra = undefined;
            if(!context) { _fun00006_ip = 1144; continue _fun00005 }
 971:
            target = _closure1_slot1;
            variable42 = _closure1_slot2;
            variable40 = 40;
            variable40 = variable42[variable40];
            variable48 = target.bind(oscar)(variable40);
            variable46 = variable48.getCurrentConfig;
            variable40 = {};
            variable40['location'] = config;
            config = {};
            config['autoTrackExposure'] = offset;
            config = variable46.bind(variable48)(variable40, config);
            variable40 = config.enabled;
            config = 41;
            config = variable42[config];
            target = target.bind(oscar)(config);
            config = {};
            variable42 = variable45.embeds;
            config['embeds'] = variable42;
            variable42 = mike.channel_id;
            config['channelId'] = variable42;
            config['gifAutoPlay'] = variable60;
            config['hasSpoilerEmbeds'] = variable41;
            config['ignoreEmbedDescriptionCache'] = variable37;
            variable37 = {};
            variable37['tiktok'] = variable40;
            config['playInline'] = variable37;
            config['shouldInlineEmbedMedia'] = quebec;
            config['colors'] = record;
            config['showListsAndHeaders'] = equality;
            config['showMaskedLinks'] = equality;
            equality = record.embedBackgroundColor;
            config['themedBackgroundColor'] = equality;
            config['shouldObscureExplicitMedia'] = variable62;
            equality = mike.author;
            equality = equality.bot;
            config['authorIsBot'] = equality;
            config['showContentInventoryEntryFallbackEmbed'] = whiskey;
            sierra = target.bind(oscar)(config);
 1144:
            target = _closure1_slot1;
            whiskey = _closure1_slot2;
            config = 42;
            config = whiskey[config];
            target = target.bind(oscar)(config);
            config = {};
            config['message'] = mike;
            config['isSystemDM'] = yankee;
            config['channel'] = control;
            config['colors'] = record;
            config = target.bind(oscar)(config);
            variable90 = config.tagText;
            variable89 = config.tagVerified;
            variable88 = config.tagTextColor;
            variable87 = config.tagBackgroundColor;
            variable86 = config.tagType;
            variable85 = config.tagIconUrl;
            variable84 = config.opTagText;
            variable83 = config.opTagTextColor;
            variable82 = config.opTagBackgroundColor;
            whiskey = _closure1_slot21;
            target = whiskey.getUploaderFileForMessageId;
            config = mike.id;
            target = target.bind(whiskey)(config);
            variable42 = result != target;
            whiskey = mike.state;
            config = _closure1_slot24;
            config = config.SEND_FAILED;
            config = whiskey !== config;
            if(config) { _fun00006_ip = 1298; continue _fun00005 }
 1288:
            whiskey = mike.isCommandType;
            config = whiskey.bind(mike)();
 1298:
            whiskey = sierra;
            if(config) { _fun00006_ip = 1369; continue _fun00005 }
 1304:
            config = sierra;
            if(!(result == sierra)) { _fun00006_ip = 1315; continue _fun00005 }
 1311:
            config = new Array(0);
 1315:
            equality = config.push;
            quebec = _closure1_slot1;
            variable37 = _closure1_slot2;
            sierra = 43;
            sierra = variable37[sierra];
            quebec = quebec.bind(oscar)(sierra);
            sierra = {};
            sierra['uploaderFile'] = target;
            sierra['useAttachmentUploadPreview'] = variable42;
            sierra['colors'] = record;
            sierra = quebec.bind(oscar)(sierra);
            sierra = equality.bind(config)(sierra);
            whiskey = config;
 1369:
            equality = _closure1_slot8;
            sierra = equality.getMessage;
            config = mike.id;
            sierra = sierra.bind(equality)(config);
            variable55 = whiskey;
            if(!(result != sierra)) { _fun00006_ip = 1468; continue _fun00005 }
 1396:
            config = whiskey;
            if(!(result == whiskey)) { _fun00006_ip = 1407; continue _fun00005 }
 1403:
            config = new Array(0);
 1407:
            variable37 = sierra.errorMessage;
            whiskey = config.push;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            sierra = 43;
            sierra = quebec[sierra];
            quebec = equality.bind(oscar)(sierra);
            equality = quebec.createAutomodBlockedMessageEmbed;
            sierra = {};
            sierra['errorMessage'] = variable37;
            sierra['colors'] = record;
            sierra = equality.bind(quebec)(sierra);
            sierra = whiskey.bind(config)(sierra);
            variable55 = config;
 1468:
            sierra = _closure1_slot0;
            whiskey = _closure1_slot2;
            quebec = 44;
            config = whiskey[quebec];
            variable37 = sierra.bind(oscar)(config);
            equality = variable37.getUserAuthor;
            config = mike.author;
            config = equality.bind(variable37)(config, control);
            variable48 = config.guildMemberAvatar;
            variable37 = config.guildMemberAvatarDecoration;
            equality = config.iconRoleId;
            config = 45;
            config = whiskey[config];
            whiskey = sierra.bind(oscar)(config);
            sierra = whiskey.ensureAvatarSource;
            config = mike.isInteractionPlaceholder;
            config = config.bind(mike)();
            if(!config) { _fun00006_ip = 1596; continue _fun00005 }
 1557:
            config = mike.author;
            config = config.avatar;
            if(!(result == config)) { _fun00006_ip = 1596; continue _fun00005 }
 1573:
            variable40 = mike.application;
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
            config = config.bind(variable76)(oscar);
            _fun00006_ip = 1669; continue _fun00005;
 1617:
            variable41 = _closure1_slot1;
            variable46 = _closure1_slot2;
            variable40 = 46;
            variable40 = variable46[variable40];
            variable46 = variable41.bind(oscar)(variable40);
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
            variable46 = variable41.bind(oscar)(variable40);
            variable41 = variable46.getApplicationIconSource;
            variable40 = {};
            variable48 = mike.application;
            variable48 = variable48.id;
            variable40['id'] = variable48;
            variable48 = mike.application;
            variable48 = variable48.icon;
            variable40['icon'] = variable48;
            variable48 = mike.application;
            variable48 = variable48.bot;
            variable40['bot'] = variable48;
            config = variable41.bind(variable46)(variable40);
 1748:
            variable79 = sierra.bind(whiskey)(config);
            sierra = _closure1_slot0;
            whiskey = _closure1_slot2;
            config = 46;
            config = whiskey[config];
            whiskey = sierra.bind(oscar)(config);
            sierra = whiskey.getAvatarDecorationURL;
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
            variable41 = variable46.bind(oscar)(variable37);
            variable40 = variable41.getDecorationSizeForAvatarSize;
            variable37 = 48;
            variable37 = variable48[variable37];
            variable37 = variable46.bind(oscar)(variable37);
            variable37 = variable37.AvatarSizes;
            variable37 = variable37.NORMAL;
            variable37 = variable40.bind(variable41)(variable37);
            config['size'] = variable37;
            variable78 = sierra.bind(whiskey)(config);
            config = result != equality;
            variable73 = undefined;
            if(!config) { _fun00006_ip = 1927; continue _fun00005 }
 1869:
            config = result != variable67;
            variable73 = undefined;
            if(!config) { _fun00006_ip = 1927; continue _fun00005 }
 1878:
            sierra = _closure1_slot0;
            whiskey = _closure1_slot2;
            config = 49;
            config = whiskey[config];
            whiskey = sierra.bind(oscar)(config);
            sierra = whiskey.getRoleIcon;
            config = {};
            config['guildId'] = variable67;
            config['roleId'] = equality;
            equality = 18;
            config['size'] = equality;
            variable73 = sierra.bind(whiskey)(config);
 1927:
            sierra = mike.hasFlag;
            config = _closure1_slot25;
            config = config.SOURCE_MESSAGE_DELETED;
            config = sierra.bind(mike)(config);
            if(!config) { _fun00006_ip = 2006; continue _fun00005 }
 1951:
            equality = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 24;
            sierra = variable37[config];
            sierra = equality.bind(oscar)(sierra);
            whiskey = sierra.intl;
            sierra = whiskey.string;
            config = variable37[config];
            config = equality.bind(oscar)(config);
            config = config.t;
            config = config.JOtgS0;
            papa = sierra.bind(whiskey)(config);
 2006:
            sierra = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            sierra = sierra.bind(oscar)(config);
            config = sierra.getMessageAuthor;
            config = config.bind(sierra)(mike);
            variable80 = config.nick;
            variable74 = config.colorString;
            sierra = mike.type;
            config = _closure1_slot23;
            config = config.INTERACTION_PREMIUM_UPSELL;
            if(!(sierra === config)) { _fun00006_ip = 2128; continue _fun00005 }
 2065:
            sierra = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 24;
            whiskey = variable37[config];
            whiskey = sierra.bind(oscar)(whiskey);
            equality = whiskey.intl;
            whiskey = equality.formatToPlainString;
            config = variable37[config];
            config = sierra.bind(oscar)(config);
            config = config.t;
            sierra = config.u4A+xM;
            config = {};
            config['appName'] = variable80;
            papa = whiskey.bind(equality)(sierra, config);
 2128:
            sierra = mike.type;
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
            vacuum = mike.messageReference;
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
            whiskey = _closure1_slot2;
            config = 51;
            config = whiskey[config];
            sierra = sierra.bind(oscar)(config);
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
            whiskey = variable40[sierra];
            whiskey = variable37.bind(oscar)(whiskey);
            equality = whiskey.intl;
            whiskey = equality.string;
            sierra = variable40[sierra];
            sierra = variable37.bind(oscar)(sierra);
            sierra = sierra.t;
            sierra = sierra.mE3KJC;
            sierra = whiskey.bind(equality)(sierra);
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
            whiskey = variable40[sierra];
            whiskey = variable37.bind(oscar)(whiskey);
            equality = whiskey.intl;
            whiskey = equality.string;
            sierra = variable40[sierra];
            sierra = variable37.bind(oscar)(sierra);
            sierra = sierra.t;
            sierra = sierra.1i+hMj;
            sierra = whiskey.bind(equality)(sierra);
            config['content'] = sierra;
            variable94 = config;
            _fun00006_ip = 3467; continue _fun00005;
 2438:
            vacuum = vacuum.message;
            sierra = _closure1_slot0;
            whiskey = _closure1_slot2;
            config = 33;
            config = whiskey[config];
            sierra = sierra.bind(oscar)(config);
            config = sierra.maybeCreateSingleForwardForMessage;
            whiskey = config.bind(sierra)(vacuum);
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
            config['messageForward'] = whiskey;
            config['roleStyle'] = kilo;
            equality = {};
            r104 = equality;
            r103 = options;
            variable37 = copyDataProperties(r104, r103);
            variable37 = 'renderReplies';
            equality[variable37] = offset;
            config['options'] = equality;
            sierra = sierra.bind(oscar)(config);
            if(!(result != sierra)) { _fun00006_ip = 3226; continue _fun00005 }
 2585:
            config = 'username';
            config = config in sierra;
            if(!config) { _fun00006_ip = 2756; continue _fun00005 }
 2599:
            equality = _closure1_slot0;
            config = _closure1_slot2;
            config = config[quebec];
            equality = equality.bind(oscar)(config);
            config = equality.getMessageAuthor;
            config = config.bind(equality)(vacuum);
            quebec = config.nick;
            equality = config.colorString;
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
            config = config.bind(oscar)(equality);
            if(!(result == config)) { _fun00006_ip = 2694; continue _fun00005 }
 2688:
            config = sierra.colorString;
 2694:
            _fun00006_ip = 2702; continue _fun00005;
 2696:
            config = sierra.colorString;
 2702:
            sierra['colorString'] = config;
            equality = _closure1_slot1;
            quebec = _closure1_slot2;
            config = 50;
            config = quebec[config];
            config = equality.bind(oscar)(config);
            config = config.bind(oscar)(mike, vacuum);
            if(!config) { _fun00006_ip = 2756; continue _fun00005 }
 2737:
            equality = sierra.username;
            config = '@';
            config = config + equality;
            sierra['username'] = config;
 2756:
            equality = result == whiskey;
            config = undefined;
            if(equality) { _fun00006_ip = 2776; continue _fun00005 }
 2765:
            whiskey = whiskey.messageSnapshot;
            config = whiskey.message;
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
            equality = _closure1_slot0;
            variable37 = _closure1_slot2;
            whiskey = 28;
            whiskey = variable37[whiskey];
            equality = equality.bind(oscar)(whiskey);
            whiskey = equality.getMessageStickers;
            config = whiskey.bind(equality)(quebec);
 2834:
            config = config.length;
            whiskey = 0;
            if(!(!(config > whiskey))) { _fun00006_ip = 3102; continue _fun00005 }
 2848:
            equality = _closure1_slot0;
            variable37 = _closure1_slot2;
            config = 29;
            config = variable37[config];
            variable40 = equality.bind(oscar)(config);
            variable37 = variable40.hasFlag;
            equality = quebec.flags;
            config = _closure1_slot25;
            config = config.IS_VOICE_MESSAGE;
            config = variable37.bind(variable40)(equality, config);
            if(config) { _fun00006_ip = 3045; continue _fun00005 }
 2901:
            equality = quebec.type;
            config = _closure1_slot23;
            config = config.POLL_RESULT;
            if(!(equality !== config)) { _fun00006_ip = 3012; continue _fun00005 }
 2920:
            config = quebec.embeds;
            config = config.length;
            if(!(!(config > whiskey))) { _fun00006_ip = 2955; continue _fun00005 }
 2935:
            config = quebec.attachments;
            config = config.length;
            whiskey = config > whiskey;
            config = null;
            if(!whiskey) { _fun00006_ip = 3010; continue _fun00005 }
 2955:
            variable40 = _closure1_slot0;
            variable41 = _closure1_slot2;
            whiskey = 24;
            equality = variable41[whiskey];
            equality = variable40.bind(oscar)(equality);
            variable37 = equality.intl;
            equality = variable37.string;
            whiskey = variable41[whiskey];
            whiskey = variable40.bind(oscar)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.JAKsMz;
            config = equality.bind(variable37)(whiskey);
 3010:
            _fun00006_ip = 3043; continue _fun00005;
 3012:
            equality = _closure1_slot0;
            variable37 = _closure1_slot2;
            whiskey = 30;
            whiskey = variable37[whiskey];
            equality = equality.bind(oscar)(whiskey);
            whiskey = equality.getPollResultsReplyPreviewMobile;
            config = whiskey.bind(equality)(quebec);
 3043:
            _fun00006_ip = 3100; continue _fun00005;
 3045:
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            whiskey = 24;
            equality = variable40[whiskey];
            equality = variable37.bind(oscar)(equality);
            quebec = equality.intl;
            equality = quebec.string;
            whiskey = variable40[whiskey];
            whiskey = variable37.bind(oscar)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.6bhHra;
            config = equality.bind(quebec)(whiskey);
 3100:
            _fun00006_ip = 3157; continue _fun00005;
 3102:
            variable37 = _closure1_slot0;
            variable40 = _closure1_slot2;
            whiskey = 24;
            equality = variable40[whiskey];
            equality = variable37.bind(oscar)(equality);
            quebec = equality.intl;
            equality = quebec.string;
            whiskey = variable40[whiskey];
            whiskey = variable37.bind(oscar)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.7K5LmZ;
            config = equality.bind(quebec)(whiskey);
 3157:
            whiskey = vacuum.type;
            vacuum = _closure1_slot23;
            vacuum = vacuum.POLL_RESULT;
            if(!(whiskey === vacuum)) { _fun00006_ip = 3182; continue _fun00005 }
 3176:
            sierra['content'] = config;
 3182:
            vacuum = {};
            whiskey = _closure1_slot22;
            whiskey = whiskey.LOADED;
            vacuum['state'] = whiskey;
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
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equality.bind(oscar)(sierra);
            whiskey = sierra.intl;
            sierra = whiskey.string;
            config = quebec[config];
            config = equality.bind(oscar)(config);
            config = config.t;
            config = config.1i+hMj;
            config = sierra.bind(whiskey)(config);
            vacuum['content'] = config;
            variable94 = vacuum;
            _fun00006_ip = 3467; continue _fun00005;
 3309:
            vacuum = {};
            config = _closure1_slot22;
            config = config.SYSTEM;
            vacuum['state'] = config;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equality.bind(oscar)(sierra);
            whiskey = sierra.intl;
            sierra = whiskey.string;
            config = quebec[config];
            config = equality.bind(oscar)(config);
            config = config.t;
            config = config.G7p6v7;
            config = sierra.bind(whiskey)(config);
            vacuum['content'] = config;
            variable94 = vacuum;
            _fun00006_ip = 3467; continue _fun00005;
 3389:
            vacuum = {};
            config = _closure1_slot22;
            config = config.SYSTEM;
            vacuum['state'] = config;
            equality = _closure1_slot0;
            quebec = _closure1_slot2;
            config = 24;
            sierra = quebec[config];
            sierra = equality.bind(oscar)(sierra);
            whiskey = sierra.intl;
            sierra = whiskey.string;
            config = quebec[config];
            config = equality.bind(oscar)(config);
            config = config.t;
            config = config.XAkOo6;
            config = sierra.bind(whiskey)(config);
            vacuum['content'] = config;
            variable94 = vacuum;
 3467:
            variable91 = undefined;
            if(!source) { _fun00006_ip = 3497; continue _fun00005 }
 3472:
            source = _closure1_slot31;
            r105 = undefined;
            r104 = mike;
            r103 = kilo;
            r102 = golf;
            r101 = output;
            r100 = options;
            variable91 = r105[source](r104, r103, r102, r101, r100, variable100);
 3497:
            vacuum = _closure1_slot9;
            source = vacuum.getInteraction;
            variable66 = source.bind(vacuum)(mike);
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 52;
            source = config[source];
            vacuum = vacuum.bind(oscar)(source);
            source = vacuum.createInteractionStatus;
            variable57 = source.bind(vacuum)(mike, variable66);
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
            config = config.bind(oscar)(vacuum);
            vacuum = config.isMemberCommunicationDisabled;
            variable40 = vacuum.bind(config)(source);
            vacuum = _closure1_slot4;
            equality = vacuum.useReducedMotion;
            vacuum = _closure1_slot4;
            variable69 = vacuum.alwaysShowLinkDecorations;
            vacuum = result == control;
            whiskey = source;
            source = undefined;
            if(vacuum) { _fun00006_ip = 3643; continue _fun00005 }
 3637:
            source = control.parent_id;
 3643:
            sierra = control;
            if(!(result != source)) { _fun00006_ip = 3693; continue _fun00005 }
 3650:
            sierra = control;
            if(!(result != control)) { _fun00006_ip = 3693; continue _fun00005 }
 3657:
            source = control.isThread;
            source = source.bind(control)();
            sierra = control;
            if(!source) { _fun00006_ip = 3693; continue _fun00005 }
 3673:
            config = _closure1_slot18;
            vacuum = config.getChannel;
            source = control.parent_id;
            sierra = vacuum.bind(config)(source);
 3693:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 54;
            source = config[source];
            config = vacuum.bind(oscar)(source);
            vacuum = config.getVisibleConnectionsRole;
            source = {};
            source['guildMember'] = whiskey;
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
            vacuum = mike.attachments;
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
            vacuum = config.bind(oscar)(vacuum);
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
            config = config.bind(oscar)(vacuum);
            vacuum = {};
            sierra = variable45.attachments;
            vacuum['attachments'] = sierra;
            quebec = _closure1_slot21;
            whiskey = quebec.getUploadAttachments;
            sierra = mike.nonce;
            sierra = whiskey.bind(quebec)(sierra);
            vacuum['uploadAttachments'] = sierra;
            vacuum['shouldInlineAttachmentMedia'] = variable43;
            vacuum['gifAutoPlay'] = variable60;
            vacuum['viewImageDescriptions'] = variable61;
            vacuum['useReducedMotion'] = equality;
            vacuum['shouldObscureSpoiler'] = variable63;
            sierra = record.embedBackgroundColor;
            vacuum['themedBackgroundColor'] = sierra;
            vacuum['shouldObscureExplicitMedia'] = variable62;
            vacuum['colors'] = record;
            variable41 = config.bind(oscar)(vacuum);
            _fun00006_ip = 4021; continue _fun00005;
 3960:
            config = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = 56;
            vacuum = sierra[vacuum];
            config = config.bind(oscar)(vacuum);
            vacuum = {};
            vacuum['uploaderFile'] = target;
            sierra = mike.state;
            target = _closure1_slot24;
            target = target.SEND_FAILED;
            target = sierra === target;
            vacuum['isFailedMessage'] = target;
            vacuum['shouldInlineAttachmentMedia'] = variable43;
            variable41 = config.bind(oscar)(vacuum);
 4021:
            if(!source) { _fun00006_ip = 4043; continue _fun00005 }
 4024:
            vacuum = mike.state;
            source = _closure1_slot24;
            source = source.SEND_FAILED;
            if(!(vacuum === source)) { _fun00006_ip = 4082; continue _fun00005 }
 4043:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 58;
            source = config[source];
            config = vacuum.bind(oscar)(source);
            vacuum = config.calendarFormat;
            source = mike.timestamp;
            variable72 = vacuum.bind(config)(source);
            _fun00006_ip = 4137; continue _fun00005;
 4082:
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            vacuum = sierra[source];
            vacuum = target.bind(oscar)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = sierra[source];
            source = target.bind(oscar)(source);
            source = source.t;
            source = source.yXY+5O;
            variable72 = vacuum.bind(config)(source);
 4137:
            vacuum = _closure1_slot17;
            source = vacuum.getId;
            variable37 = source.bind(vacuum)();
            source = mike.isUnsupported;
            variable68 = papa;
            if(!source) { _fun00006_ip = 4218; continue _fun00005 }
 4163:
            target = _closure1_slot0;
            sierra = _closure1_slot2;
            source = 24;
            vacuum = sierra[source];
            vacuum = target.bind(oscar)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = sierra[source];
            source = target.bind(oscar)(source);
            source = source.t;
            source = source.sWi5ER;
            variable68 = vacuum.bind(config)(source);
 4218:
            source = mike.isPoll;
            source = source.bind(mike)();
            source = !source;
            if(source) { _fun00006_ip = 4246; continue _fun00005 }
 4234:
            vacuum = !golf;
            if(!vacuum) { _fun00006_ip = 4243; continue _fun00005 }
 4240:
            vacuum = entity;
 4243:
            source = vacuum;
 4246:
            if(source) { _fun00006_ip = 4267; continue _fun00005 }
 4249:
            vacuum = result != papa;
            if(!vacuum) { _fun00006_ip = 4264; continue _fun00005 }
 4256:
            config = '';
            vacuum = config !== papa;
 4264:
            source = vacuum;
 4267:
            if(source) { _fun00006_ip = 4301; continue _fun00005 }
 4270:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 30;
            source = config[source];
            vacuum = vacuum.bind(oscar)(source);
            source = vacuum.getPollReplyPreview;
            variable68 = source.bind(vacuum)(mike);
 4301:
            source = undefined;
            if(!entity) { _fun00006_ip = 4345; continue _fun00005 }
 4306:
            vacuum = _closure1_slot1;
            config = _closure1_slot2;
            entity = 59;
            entity = config[entity];
            vacuum = vacuum.bind(oscar)(entity);
            entity = {};
            entity['theme'] = update;
            entity['animateEmoji'] = variable77;
            source = vacuum.bind(oscar)(mike, oscar, entity);
 4345:
            if(!status) { _fun00006_ip = 4379; continue _fun00005 }
 4348:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            entity = 60;
            entity = config[entity];
            vacuum = vacuum.bind(oscar)(entity);
            entity = vacuum.canForwardMessage;
            status = entity.bind(vacuum)(mike);
 4379:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable95 = 61;
            entity = entity[variable95];
            papa = vacuum.bind(oscar)(entity);
            config = papa.shouldDisplayClanTag;
            vacuum = variable76.id;
            target = result != variable67;
            entity = undefined;
            if(!target) { _fun00006_ip = 4422; continue _fun00005 }
 4419:
            entity = variable67;
 4422:
            entity = config.bind(papa)(vacuum, entity);
            target = undefined;
            papa = undefined;
            config = undefined;
            if(!entity) { _fun00006_ip = 4555; continue _fun00005 }
 4437:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[variable95];
            sierra = vacuum.bind(oscar)(entity);
            vacuum = sierra.getUserPrimaryGuild;
            entity = variable76.primaryGuild;
            whiskey = vacuum.bind(sierra)(entity);
            sierra = whiskey.guildId;
            vacuum = whiskey.tag;
            entity = whiskey.guildId;
            quebec = result != entity;
            entity = undefined;
            if(!quebec) { _fun00006_ip = 4546; continue _fun00005 }
 4495:
            variable92 = _closure1_slot0;
            quebec = _closure1_slot2;
            quebec = quebec[variable95];
            variable96 = variable92.bind(oscar)(quebec);
            variable95 = variable96.getClanBadgeUrl;
            variable92 = whiskey.guildId;
            quebec = whiskey.badge;
            whiskey = _closure1_slot28;
            whiskey = whiskey.SIZE_12;
            entity = variable95.bind(variable96)(variable92, quebec, whiskey);
 4546:
            config = entity;
            target = sierra;
            papa = vacuum;
 4555:
            vacuum = _closure1_slot0;
            entity = _closure1_slot2;
            variable96 = 29;
            entity = entity[variable96];
            whiskey = vacuum.bind(oscar)(entity);
            sierra = whiskey.hasFlag;
            entity = mike;
            if(!(result != variable45)) { _fun00006_ip = 4591; continue _fun00005 }
 4588:
            entity = variable45;
 4591:
            vacuum = entity.flags;
            entity = _closure1_slot25;
            entity = entity.IS_VOICE_MESSAGE;
            sierra = sierra.bind(whiskey)(vacuum, entity);
            vacuum = _closure1_slot30;
            entity = {};
            entity['currentUserId'] = variable37;
            entity['message'] = mike;
            entity['theme'] = update;
            entity['referralSenderMobileXPEnabled'] = lima;
            entity = vacuum.bind(oscar)(entity);
            lima = entity.referralTrialOfferDataUpdated;
            whiskey = entity.referralTrialOfferData;
            variable92 = _closure1_slot5;
            vacuum = variable92.getApplication;
            variable95 = mike.applicationId;
            variable97 = result != variable95;
            quebec = '';
            entity = quebec;
            if(!variable97) { _fun00006_ip = 4686; continue _fun00005 }
 4683:
            entity = variable95;
 4686:
            entity = vacuum.bind(variable92)(entity);
            variable92 = result != entity;
            if(!variable92) { _fun00006_ip = 4742; continue _fun00005 }
 4698:
            variable95 = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[variable96];
            variable97 = variable95.bind(oscar)(vacuum);
            variable96 = variable97.hasFlag;
            variable95 = entity.flags;
            vacuum = _closure1_slot26;
            vacuum = vacuum.SOCIAL_LAYER_INTEGRATION;
            variable92 = variable96.bind(variable97)(variable95, vacuum);
 4742:
            vacuum = undefined;
            if(!variable92) { _fun00006_ip = 4752; continue _fun00005 }
 4747:
            vacuum = entity.id;
 4752:
            entity = {};
            variable92 = mike.id;
            entity['id'] = variable92;
            variable92 = mike.channel_id;
            entity['channelId'] = variable92;
            variable95 = result != variable67;
            variable92 = undefined;
            if(!variable95) { _fun00006_ip = 4784; continue _fun00005 }
 4781:
            variable92 = variable67;
 4784:
            entity['guildId'] = variable92;
            variable92 = mike;
            if(!(result != variable45)) { _fun00006_ip = 4798; continue _fun00005 }
 4795:
            variable92 = variable45;
 4798:
            variable92 = variable92.flags;
            entity['flags'] = variable92;
            variable92 = mike.type;
            entity['type'] = variable92;
            variable92 = mike.nonce;
            if(!(result != variable92)) { _fun00006_ip = 4843; continue _fun00005 }
 4826:
            variable92 = mike.nonce;
            variable95 = 'string';
            variable92 = typeof variable92;
            if(!(variable95 === variable92)) { _fun00006_ip = 4851; continue _fun00005 }
 4843:
            variable92 = mike.nonce;
            _fun00006_ip = 4870; continue _fun00005;
 4851:
            variable95 = global;
            variable96 = variable95.String;
            variable95 = mike.nonce;
            variable92 = variable96.bind(oscar)(variable95);
 4870:
            entity['nonce'] = variable92;
            variable92 = mike.state;
            entity['state'] = variable92;
            entity['reactions'] = echo;
            variable92 = undefined;
            if(variable56) { _fun00006_ip = 4897; continue _fun00005 }
 4894:
            variable92 = variable94;
 4897:
            entity['referencedMessage'] = variable92;
            entity['threadEmbed'] = variable91;
            variable92 = result != variable93;
            variable91 = undefined;
            if(!variable92) { _fun00006_ip = 4928; continue _fun00005 }
 4916:
            variable92 = variable93.getForwardInfo;
            variable91 = variable92.bind(variable93)();
 4928:
            entity['forwardInfo'] = variable91;
            variable91 = !sequence;
            if(!variable91) { _fun00006_ip = 4947; continue _fun00005 }
 4941:
            variable91 = mike.mentioned;
 4947:
            entity['mentioned'] = variable91;
            variable91 = mike.isEdited;
            variable92 = variable91.bind(mike)();
            variable91 = quebec;
            if(!variable92) { _fun00006_ip = 5029; continue _fun00005 }
 4968:
            variable91 = quebec;
            if(variable56) { _fun00006_ip = 5029; continue _fun00005 }
 4974:
            variable95 = _closure1_slot0;
            variable96 = _closure1_slot2;
            variable92 = 24;
            variable93 = variable96[variable92];
            variable93 = variable95.bind(oscar)(variable93);
            variable94 = variable93.intl;
            variable93 = variable94.string;
            variable92 = variable96[variable92];
            variable92 = variable95.bind(oscar)(variable92);
            variable92 = variable92.t;
            variable92 = variable92.C8sXIC;
            variable91 = variable93.bind(variable94)(variable92);
 5029:
            entity['edited'] = variable91;
            variable91 = record.editedColor;
            entity['editedColor'] = variable91;
            variable91 = mike.isUnsupported;
            if(variable91) { _fun00006_ip = 5062; continue _fun00005 }
 5054:
            variable91 = record.textColor;
            _fun00006_ip = 5068; continue _fun00005;
 5062:
            variable91 = record.unsupportedColor;
 5068:
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
            if(!variable70) { _fun00006_ip = 5152; continue _fun00005 }
 5147:
            variable80 = variable76.username;
 5152:
            variable81 = result != variable80;
            variable77 = undefined;
            if(!variable81) { _fun00006_ip = 5164; continue _fun00005 }
 5161:
            variable77 = variable80;
 5164:
            entity['username'] = variable77;
            variable77 = undefined;
            if(variable70) { _fun00006_ip = 5179; continue _fun00005 }
 5173:
            variable77 = variable79.uri;
 5179:
            entity['avatarURL'] = variable77;
            variable77 = undefined;
            if(variable70) { _fun00006_ip = 5192; continue _fun00005 }
 5189:
            variable77 = variable78;
 5192:
            entity['avatarDecorationURL'] = variable77;
            variable76 = variable76.id;
            entity['authorId'] = variable76;
            if(variable70) { _fun00006_ip = 5239; continue _fun00005 }
 5210:
            variable76 = 'username';
            if(!(variable76 === kilo)) { _fun00006_ip = 5239; continue _fun00005 }
 5218:
            variable76 = _closure1_slot3;
            variable76 = variable76.bind(oscar)(variable74);
            if(!(result == variable76)) { _fun00006_ip = 5237; continue _fun00005 }
 5231:
            variable76 = record.defaultUsernameColor;
 5237:
            _fun00006_ip = 5245; continue _fun00005;
 5239:
            variable76 = record.defaultUsernameColor;
 5245:
            entity['usernameColor'] = variable76;
            variable76 = null;
            if(variable70) { _fun00006_ip = 5279; continue _fun00005 }
 5255:
            variable77 = _closure1_slot3;
            variable78 = variable77.bind(oscar)(variable74);
            variable79 = result != variable78;
            variable77 = null;
            if(!variable79) { _fun00006_ip = 5276; continue _fun00005 }
 5273:
            variable77 = variable78;
 5276:
            variable76 = variable77;
 5279:
            entity['roleColor'] = variable76;
            variable76 = 'dot';
            variable76 = variable76 === kilo;
            if(!variable76) { _fun00006_ip = 5299; continue _fun00005 }
 5295:
            variable76 = result != variable74;
 5299:
            entity['shouldShowRoleDot'] = variable76;
            variable76 = 'username';
            variable76 = variable76 === kilo;
            if(!variable76) { _fun00006_ip = 5319; continue _fun00005 }
 5315:
            variable76 = result != variable74;
 5319:
            entity['shouldShowRoleOnName'] = variable76;
            entity['showLinkDecorations'] = variable69;
            if(variable70) { _fun00006_ip = 5353; continue _fun00005 }
 5332:
            variable69 = _closure1_slot3;
            variable69 = variable69.bind(oscar)(variable74);
            if(!(result == variable69)) { _fun00006_ip = 5351; continue _fun00005 }
 5345:
            variable69 = record.defaultUsernameColor;
 5351:
            _fun00006_ip = 5359; continue _fun00005;
 5353:
            variable69 = record.defaultUsernameColor;
 5359:
            entity['colorString'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5372; continue _fun00005 }
 5369:
            variable69 = variable73;
 5372:
            entity['roleIcon'] = variable69;
            variable73 = result != variable75;
            variable69 = undefined;
            if(!variable73) { _fun00006_ip = 5417; continue _fun00005 }
 5386:
            variable74 = _closure1_slot0;
            variable76 = _closure1_slot2;
            variable73 = 62;
            variable73 = variable76[variable73];
            variable74 = variable74.bind(oscar)(variable73);
            variable73 = variable74.createConnectionsRoleTag;
            variable69 = variable73.bind(variable74)(variable75);
 5417:
            entity['connectionsRoleTag'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5432; continue _fun00005 }
 5429:
            variable69 = variable72;
 5432:
            entity['timestamp'] = variable69;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 5448; continue _fun00005 }
 5442:
            variable69 = record.timestampColor;
 5448:
            entity['timestampColor'] = variable69;
            entity['content'] = variable68;
            entity['isEditing'] = foxtrot;
            entity['renderContentOnly'] = variable56;
            variable68 = undefined;
            if(!(oscar !== variable71)) { _fun00006_ip = 5506; continue _fun00005 }
 5473:
            variable70 = _closure1_slot0;
            variable72 = _closure1_slot2;
            variable69 = 63;
            variable69 = variable72[variable69];
            variable70 = variable70.bind(oscar)(variable69);
            variable69 = variable70.createSurveyIndication;
            variable68 = variable69.bind(variable70)(mike, update, variable71);
 5506:
            entity['surveyIndication'] = variable68;
            variable69 = _closure1_slot0;
            variable70 = _closure1_slot2;
            variable68 = 64;
            variable68 = variable70[variable68];
            variable69 = variable69.bind(oscar)(variable68);
            variable68 = variable69.createEphemeralIndication;
            variable68 = variable68.bind(variable69)(mike);
            entity['ephemeralIndication'] = variable68;
            entity['interactionStatus'] = variable57;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5612; continue _fun00005 }
 5561:
            variable68 = _closure1_slot0;
            variable69 = _closure1_slot2;
            variable59 = 65;
            variable59 = variable69[variable59];
            variable69 = variable68.bind(oscar)(variable59);
            variable68 = variable69.createExecutedCommand;
            r100 = record.defaultUsernameColor;
            r105 = variable69;
            r104 = mike;
            r103 = control;
            r102 = kilo;
            r101 = update;
            variable57 = r105[variable68](r104, r103, r102, r101, r100, variable100);
 5612:
            entity['executedCommand'] = variable57;
            variable57 = variable45.components;
            variable57 = variable57.length;
            variable59 = variable57 > variable54;
            variable57 = undefined;
            if(!variable59) { _fun00006_ip = 5718; continue _fun00005 }
 5639:
            variable57 = undefined;
            if(!variable58) { _fun00006_ip = 5718; continue _fun00005 }
 5644:
            variable59 = _closure1_slot1;
            variable68 = _closure1_slot2;
            variable58 = 66;
            variable58 = variable68[variable58];
            variable59 = variable59.bind(oscar)(variable58);
            variable58 = {};
            variable58['message'] = mike;
            variable58['guildId'] = variable67;
            variable58['interaction'] = variable66;
            variable58['shouldDisableInteractiveComponents'] = variable65;
            variable58['shouldShowMedia'] = variable64;
            variable58['shouldObscureSpoiler'] = variable63;
            variable58['shouldObscureExplicitMedia'] = variable62;
            variable58['shouldShowMosaicMediaDescriptions'] = variable61;
            variable58['shouldAutoPlayGifs'] = variable60;
            variable58['colors'] = record;
            variable57 = variable59.bind(oscar)(variable58);
 5718:
            entity['components'] = variable57;
            variable57 = 0;
            if(variable56) { _fun00006_ip = 5734; continue _fun00005 }
 5728:
            variable57 = record.feedbackColor;
 5734:
            entity['feedbackColor'] = variable57;
            variable54 = 0;
            if(variable56) { _fun00006_ip = 5750; continue _fun00005 }
 5744:
            variable54 = record.highlightColor;
 5750:
            entity['highlightColor'] = variable54;
            variable56 = result != variable55;
            variable54 = undefined;
            if(!variable56) { _fun00006_ip = 5767; continue _fun00005 }
 5764:
            variable54 = variable55;
 5767:
            entity['embeds'] = variable54;
            if(variable53) { _fun00006_ip = 5781; continue _fun00005 }
 5775:
            variable53 = new Array(0);
            _fun00006_ip = 5813; continue _fun00005;
 5781:
            variable55 = _closure1_slot0;
            variable56 = _closure1_slot2;
            variable54 = 67;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(oscar)(variable54);
            variable54 = variable55.createGiftCodeEmbed;
            variable53 = variable54.bind(variable55)(mike, update);
 5813:
            entity['giftCodes'] = variable53;
            if(variable50) { _fun00006_ip = 5827; continue _fun00005 }
 5821:
            variable50 = new Array(0);
            _fun00006_ip = 5860; continue _fun00005;
 5827:
            variable54 = _closure1_slot0;
            variable55 = _closure1_slot2;
            variable53 = 68;
            variable53 = variable55[variable53];
            variable54 = variable54.bind(oscar)(variable53);
            variable53 = variable54.createCodedLinkEmbeds;
            variable50 = variable53.bind(variable54)(mike, variable45, update);
 5860:
            entity['codedLinks'] = variable50;
            variable50 = undefined;
            if(!variable52) { _fun00006_ip = 5902; continue _fun00005 }
 5870:
            variable53 = _closure1_slot0;
            variable54 = _closure1_slot2;
            variable52 = 69;
            variable52 = variable54[variable52];
            variable53 = variable53.bind(oscar)(variable52);
            variable52 = variable53.createActivityInstanceEmbed;
            variable50 = variable52.bind(variable53)(mike, update);
 5902:
            entity['activityInstanceEmbed'] = variable50;
            variable50 = undefined;
            if(!variable51) { _fun00006_ip = 5946; continue _fun00005 }
 5914:
            variable52 = _closure1_slot0;
            variable53 = _closure1_slot2;
            variable51 = 70;
            variable51 = variable53[variable51];
            variable52 = variable52.bind(oscar)(variable51);
            variable51 = variable52.createActivityInviteEmbed;
            variable50 = variable51.bind(variable52)(mike, update);
 5946:
            entity['activityInviteEmbed'] = variable50;
            if(!variable43) { _fun00006_ip = 5977; continue _fun00005 }
 5956:
            if(!variable47) { _fun00006_ip = 5968; continue _fun00005 }
 5959:
            if(variable48) { _fun00006_ip = 5965; continue _fun00005 }
 5962:
            variable48 = variable49;
 5965:
            variable47 = variable48;
 5968:
            if(variable47) { _fun00006_ip = 5974; continue _fun00005 }
 5971:
            variable47 = variable42;
 5974:
            variable43 = variable47;
 5977:
            entity['useAttachmentGridLayout'] = variable43;
            entity['useAttachmentUploadPreview'] = variable42;
            entity['attachments'] = variable41;
            variable47 = 1;
            variable41 = variable47;
            if(!variable42) { _fun00006_ip = 6033; continue _fun00005 }
 6001:
            variable43 = mike.state;
            variable42 = _closure1_slot24;
            variable42 = variable42.SEND_FAILED;
            variable41 = variable47;
            if(!(variable43 === variable42)) { _fun00006_ip = 6033; continue _fun00005 }
 6023:
            variable41 = 0.2;
 6033:
            entity['attachmentsOpacity'] = variable41;
            variable42 = _closure1_slot1;
            variable43 = _closure1_slot2;
            variable41 = 71;
            variable41 = variable43[variable41];
            variable42 = variable42.bind(oscar)(variable41);
            variable41 = {};
            variable41['message'] = variable45;
            variable45 = _closure1_slot0;
            variable43 = variable43[variable46];
            variable43 = variable45.bind(oscar)(variable43);
            variable45 = variable43.AnimateStickers;
            variable43 = variable45.getSetting;
            variable43 = variable43.bind(variable45)();
            variable41['animateStickersSetting'] = variable43;
            variable43 = mike.id;
            variable43 = variable43 === variable44;
            variable41['isUserInteracting'] = variable43;
            variable41 = variable42.bind(oscar)(variable41);
            entity['stickers'] = variable41;
            if(!variable39) { _fun00006_ip = 6128; continue _fun00005 }
 6125:
            variable39 = variable40;
 6128:
            entity['communicationDisabled'] = variable39;
            entity['threadStarterMessageHeader'] = variable36;
            variable39 = result == control;
            if(variable39) { _fun00006_ip = 6158; continue _fun00005 }
 6145:
            variable36 = control.isForumPost;
            variable36 = variable36.bind(control)();
            variable39 = !variable36;
 6158:
            variable36 = !variable39;
            if(variable39) { _fun00006_ip = 6178; continue _fun00005 }
 6164:
            variable40 = mike.id;
            variable39 = mike.channel_id;
            variable36 = variable40 === variable39;
 6178:
            entity['isFirstForumPostMessage'] = variable36;
            variable39 = result != control;
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6222; continue _fun00005 }
 6192:
            variable39 = control.isForumPost;
            variable39 = variable39.bind(control)();
            variable36 = undefined;
            if(!variable39) { _fun00006_ip = 6222; continue _fun00005 }
 6207:
            variable36 = undefined;
            if(!variable38) { _fun00006_ip = 6222; continue _fun00005 }
 6212:
            variable38 = _closure1_slot32;
            variable36 = variable38.bind(oscar)(mike, control);
 6222:
            entity['postActions'] = variable36;
            variable36 = mike.author;
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
            variable42 = variable37.bind(oscar)(variable38);
            variable41 = variable42.getAssetUriForEmbed;
            variable39 = _closure1_slot1;
            variable38 = 72;
            variable38 = variable40[variable38];
            variable38 = variable39.bind(oscar)(variable38);
            variable38 = variable41.bind(variable42)(variable38);
            entity['swipeToReplyIconUrl'] = variable38;
            variable36 = variable40[variable36];
            variable38 = variable37.bind(oscar)(variable36);
            variable37 = variable38.getAssetUriForEmbed;
            variable36 = 73;
            variable36 = variable40[variable36];
            variable36 = variable39.bind(oscar)(variable36);
            variable36 = variable37.bind(variable38)(variable36);
            entity['swipeToEditIconUrl'] = variable36;
            entity['showRemixButton'] = offset;
            entity['remixTitle'] = quebec;
            quebec = record.remixButtonIconColor;
            entity['remixButtonIconColor'] = quebec;
            quebec = record.remixButtonBackgroundColor;
            entity['remixButtonBackgroundColor'] = quebec;
            entity['referralTrialOffer'] = whiskey;
            entity['referralTrialOfferInfo'] = lima;
            if(context) { _fun00006_ip = 6416; continue _fun00005 }
 6410:
            context = new Array(0);
            _fun00006_ip = 6448; continue _fun00005;
 6416:
            whiskey = _closure1_slot0;
            quebec = _closure1_slot2;
            lima = 74;
            lima = quebec[lima];
            whiskey = whiskey.bind(oscar)(lima);
            lima = whiskey.createPostPreviewEmbeds;
            context = lima.bind(whiskey)(mike, equality);
 6448:
            entity['postPreviewEmbeds'] = context;
            lima = _closure1_slot0;
            whiskey = _closure1_slot2;
            context = 24;
            equality = whiskey[context];
            equality = lima.bind(oscar)(equality);
            variable36 = equality.intl;
            quebec = variable36.string;
            equality = whiskey[context];
            equality = lima.bind(oscar)(equality);
            equality = equality.t;
            equality = equality.2aXnfX;
            equality = quebec.bind(variable36)(equality);
            entity['obscureLearnMoreLabel'] = equality;
            equality = 75;
            equality = whiskey[equality];
            quebec = lima.bind(oscar)(equality);
            equality = quebec.createSafetyPolicyNoticeEmbed;
            equality = equality.bind(quebec)(mike);
            entity['safetyPolicyNoticeEmbed'] = equality;
            entity['pollData'] = source;
            source = 76;
            source = whiskey[source];
            equality = lima.bind(oscar)(source);
            source = equality.createSafetySystemNotificationEmbed;
            source = source.bind(equality)(mike);
            entity['safetySystemNotificationEmbed'] = source;
            source = 77;
            source = whiskey[source];
            whiskey = lima.bind(oscar)(source);
            lima = whiskey.createCtaButton;
            source = mike.id;
            source = lima.bind(whiskey)(source, record);
            entity['ctaButton'] = source;
            source = undefined;
            if(!sierra) { _fun00006_ip = 6627; continue _fun00005 }
 6621:
            source = record.embedBackgroundColor;
 6627:
            entity['audioAttachmentBackgroundColor'] = source;
            record = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 78;
            sierra = source[sierra];
            lima = record.bind(oscar)(sierra);
            sierra = lima.createMessageAccessibilityActions;
            sierra = sierra.bind(lima)(mike, control);
            entity['accessibilityActions'] = sierra;
            entity['showInlineForwardButton'] = status;
            entity['clanTagGuildId'] = target;
            entity['clanTag'] = papa;
            entity['clanBadgeUrl'] = config;
            entity['isFirst'] = backup;
            entity['gameApplicationId'] = vacuum;
            vacuum = source[context];
            vacuum = record.bind(oscar)(vacuum);
            papa = vacuum.intl;
            config = papa.string;
            vacuum = source[context];
            vacuum = record.bind(oscar)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.5IEsGx;
            vacuum = config.bind(papa)(vacuum);
            entity['replyAccessibilityLabel'] = vacuum;
            vacuum = source[context];
            vacuum = record.bind(oscar)(vacuum);
            papa = vacuum.intl;
            config = papa.string;
            vacuum = source[context];
            vacuum = record.bind(oscar)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.I3ltXF;
            vacuum = config.bind(papa)(vacuum);
            entity['forwardAccessibilityLabel'] = vacuum;
            vacuum = source[context];
            vacuum = record.bind(oscar)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = source[context];
            source = record.bind(oscar)(source);
            source = source.t;
            source = source.rBIGBA;
            source = vacuum.bind(config)(source);
            entity['threadAccessibilityLabel'] = source;
            source = tango;
            if(!tango) { _fun00006_ip = 6893; continue _fun00005 }
 6860:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscar)(vacuum);
            vacuum = config.canShowForwardShortcut;
            source = vacuum.bind(config)(mike, sequence, control);
 6893:
            entity['showForwardShortcut'] = source;
            source = tango;
            if(!tango) { _fun00006_ip = 6939; continue _fun00005 }
 6906:
            config = _closure1_slot0;
            record = _closure1_slot2;
            vacuum = 79;
            vacuum = record[vacuum];
            config = config.bind(oscar)(vacuum);
            vacuum = config.canShowReplyShortcut;
            source = vacuum.bind(config)(mike, sequence, control);
 6939:
            entity['showReplyShortcut'] = source;
            if(report) { _fun00006_ip = 6952; continue _fun00005 }
 6949:
            report = tango;
 6952:
            if(!report) { _fun00006_ip = 6988; continue _fun00005 }
 6955:
            vacuum = _closure1_slot0;
            config = _closure1_slot2;
            source = 79;
            source = config[source];
            vacuum = vacuum.bind(oscar)(source);
            source = vacuum.canShowReactionShortcut;
            report = source.bind(vacuum)(mike, sequence, control);
 6988:
            entity['showReactionShortcut'] = report;
            if(!tango) { _fun00006_ip = 7030; continue _fun00005 }
 6998:
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            report = 79;
            report = vacuum[report];
            source = source.bind(oscar)(report);
            report = source.canShowThreadShortcut;
            tango = report.bind(source)(mike, control);
 7030:
            entity['showThreadShortcut'] = tango;
            tango = result == control;
            report = undefined;
            if(tango) { _fun00006_ip = 7051; continue _fun00005 }
 7046:
            report = control.type;
 7051:
            tango = _closure1_slot27;
            tango = tango.GUILD_ANNOUNCEMENT;
            tango = report === tango;
            entity['isAnnouncementChannel'] = tango;
            report = _closure1_slot0;
            source = _closure1_slot2;
            tango = 79;
            tango = source[tango];
            report = report.bind(oscar)(tango);
            tango = report.isInMessageShortcutsExperiment;
            tango = tango.bind(report)();
            entity['shortcutsEnabled'] = tango;
            return entity;
 7109:
            tango = mike.type;
            entity = _closure1_slot23;
            entity = entity.THREAD_CREATED;
            if(!(tango !== entity)) { _fun00006_ip = 7206; continue _fun00005 }
 7128:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 36;
            entity = report[entity];
            report = tango.bind(oscar)(entity);
            tango = report.createSystemMessageContent;
            entity = {};
            entity['message'] = mike;
            entity['theme'] = update;
            entity['reactions'] = echo;
            entity['roleStyle'] = kilo;
            source = result == control;
            result = undefined;
            if(source) { _fun00006_ip = 7194; continue _fun00005 }
 7184:
            source = control.isForumPost;
            result = source.bind(control)();
 7194:
            entity['isForumPost'] = result;
            entity = tango.bind(report)(entity);
            _fun00006_ip = 7300; continue _fun00005;
 7206:
            tango = {};
            report = _closure1_slot31;
            r105 = undefined;
            r104 = mike;
            r103 = kilo;
            r102 = golf;
            r101 = output;
            r100 = options;
            report = r105[report](r104, r103, r102, r101, r100, variable100);
            tango['threadEmbed'] = report;
            output = _closure1_slot0;
            result = _closure1_slot2;
            report = 36;
            report = result[report];
            result = output.bind(oscar)(report);
            output = result.createSystemMessageContent;
            report = {};
            report['message'] = mike;
            report['theme'] = update;
            report['reactions'] = echo;
            report['roleStyle'] = kilo;
            r103 = output.bind(result)(report);
            r104 = tango;
            report = copyDataProperties(r104, r103);
            entity = tango;
 7300:
            return entity;
 7302:
            entity = mike.activityInstance;
            tango = undefined;
            if(!(tango === entity)) { _fun00006_ip = 7369; continue _fun00005 }
 7314:
            result = _closure1_slot0;
            echo = _closure1_slot2;
            entity = 24;
            report = echo[entity];
            report = result.bind(oscar)(report);
            output = report.intl;
            report = output.string;
            entity = echo[entity];
            entity = result.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.uBid4u;
            tango = report.bind(output)(entity);
 7369:
            entity = {};
            report = _closure1_slot33;
            zulu = {};
            zulu['message'] = sizing;
            zulu['roleStyle'] = kilo;
            zulu['isFirst'] = backup;
            zulu['isEditing'] = foxtrot;
            zulu['canShowImages'] = romeo;
            zulu['isSystemDM'] = yankee;
            zulu['isInlineReplyPreview'] = golf;
            golf = {};
            r104 = golf;
            r103 = options;
            options = copyDataProperties(r104, r103);
            options = 'renderThreadEmbeds';
            golf[options] = offset;
            options = 'renderReactions';
            golf[options] = offset;
            options = 'renderShortcuts';
            golf[options] = offset;
            options = 'shouldDisableInteractiveComponents';
            golf[options] = verify;
            zulu['options'] = golf;
            r103 = report.bind(oscar)(zulu);
            r104 = entity;
            zulu = copyDataProperties(r104, r103);
            zulu = 'threadStarterMessageHeader';
            entity[zulu] = tango;
            zulu = mike.id;
            mike = 'id';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot33 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.processColor;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    verify = oscar[tango];
    verify = options.bind(entity)(verify);
    var _closure1_slot12 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReferencedMessageState;
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot20 = tango;
    tango = 17;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot21 = tango;
    tango = 18;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ReferencedMessageRowState;
    var _closure1_slot22 = tango;
    tango = 19;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.MessageTypes;
    var _closure1_slot23 = options;
    options = tango.MessageStates;
    var _closure1_slot24 = options;
    options = tango.MessageFlags;
    var _closure1_slot25 = options;
    options = tango.ApplicationFlags;
    var _closure1_slot26 = options;
    tango = tango.ChannelTypes;
    var _closure1_slot27 = tango;
    tango = 20;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ClanTagBadgeSize;
    var _closure1_slot28 = tango;
    tango = {};
    tango['referralTrialOfferDataUpdated'] = entity;
    tango['referralTrialOfferData'] = entity;
    var _closure1_slot29 = tango;
    tango = function(argFoo) { // Original name: getReferralTrialOfferData
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            verify = entity.currentUserId;
            options = entity.message;
            golf = entity.theme;
            zulu = entity.referralSenderMobileXPEnabled;
            report = options.referralTrialOfferId;
            tango = options.type;
            mike = _closure1_slot23;
            mike = mike.PREMIUM_REFERRAL;
            if(!(tango === mike)) { _fun00008_ip = 229; continue _fun00007 }
 57:
            oscar = null;
            if(!(oscar != report)) { _fun00008_ip = 229; continue _fun00007 }
 66:
            tango = _closure1_slot11;
            mike = tango.getRelevantUserTrialOffer;
            tango = mike.bind(tango)(report);
            mike = oscar != tango;
            if(!mike) { _fun00008_ip = 107; continue _fun00007 }
 88:
            offset = oscar == tango;
            report = undefined;
            if(offset) { _fun00008_ip = 103; continue _fun00007 }
 97:
            report = tango.user_id;
 103:
            mike = oscar != report;
 107:
            if(!mike) { _fun00008_ip = 120; continue _fun00007 }
 110:
            tango = tango.user_id;
            mike = tango === verify;
 120:
            if(mike) { _fun00008_ip = 177; continue _fun00007 }
 123:
            if(!zulu) { _fun00008_ip = 129; continue _fun00007 }
 126:
            if(!mike) { _fun00008_ip = 177; continue _fun00007 }
 129:
            mike = {};
            report = undefined;
            mike['referralTrialOfferDataUpdated'] = report;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 21;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.createReferralTrialEmbed;
            zulu = zulu.bind(tango)(options, golf);
            mike['referralTrialOfferData'] = zulu;
            _fun00008_ip = 227; continue _fun00007;
 177:
            zulu = {};
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 21;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.createReferralTrialEmbedRedeemable;
            report = report.bind(oscar)(options, golf, verify);
            zulu['referralTrialOfferDataUpdated'] = report;
            zulu['referralTrialOfferData'] = tango;
            mike = zulu;
 227:
            return mike;
 229:
            entity = _closure1_slot29;
            return entity;
        }
    };
    var _closure1_slot30 = tango;
    tango = 80;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/createMessageContent.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();