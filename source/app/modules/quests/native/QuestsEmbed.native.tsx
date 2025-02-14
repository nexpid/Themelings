// app/modules/quests/native/QuestsEmbed.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: buildBaseEmbedProps
        _fun70533: for(var _fun70533_ip = 0; ; ) switch(_fun70533_ip) {
 0:
            mike = argFoo;
            golf = mike.titleText;
            tango = mike.bodyText;
            report = mike.subtitle;
            entity = mike.themeColors;
            mike = mike.thumbnailUrl;
            verify = entity.baseColors;
            entity = entity.colors;
            zulu = {};
            offset = zulu;
            oscar = copyDataProperties(offset, verify);
            options = entity.headerColor;
            oscar = 'headerColor';
            zulu[oscar] = options;
            oscar = 'titleText';
            zulu[oscar] = golf;
            golf = entity.titleColor;
            oscar = 'titleColor';
            zulu[oscar] = golf;
            golf = entity.bodyTextColor;
            oscar = 'subtitleColor';
            zulu[oscar] = golf;
            oscar = entity.bodyTextColor;
            entity = 'bodyTextColor';
            zulu[entity] = oscar;
            entity = 'thumbnailUrl';
            zulu[entity] = mike;
            mike = true;
            entity = 'embedCanBeTapped';
            zulu[entity] = mike;
            entity = 'canBeAccepted';
            zulu[entity] = mike;
            mike = _closure1_slot8;
            oscar = mike.GUILD;
            mike = 'type';
            zulu[mike] = oscar;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 8;
            entity = oscar[entity];
            oscar = undefined;
            mike = mike.bind(oscar)(entity);
            entity = mike.isAndroid;
            entity = entity.bind(mike)();
            if(entity) { _fun70533_ip = 248; continue _fun70533 }
 207:
            entity = {};
            offset = entity;
            verify = zulu;
            mike = copyDataProperties(offset, verify);
            mike = 'headerText';
            entity[mike] = oscar;
            mike = 'bodyText';
            entity[mike] = tango;
            mike = 'subtitle';
            entity[mike] = report;
            _fun70533_ip = 283; continue _fun70533;
 248:
            mike = {};
            offset = mike;
            verify = zulu;
            zulu = copyDataProperties(offset, verify);
            report = null;
            zulu = 'headerText';
            mike[zulu] = report;
            zulu = 'subtitle';
            mike[zulu] = tango;
            entity = mike;
 283:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: buildSupportedOnMobileEmbedBodyText
        _fun70534: for(var _fun70534_ip = 0; ; ) switch(_fun70534_ip) {
 0:
            entity = argFoo;
            report = entity.quest;
            entity = report.config;
            mike = entity.expiresAt;
            entity = global;
            entity = entity.Date;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            foxtrot = zulu;
            entity = new foxtrot[entity](romeo);
            zulu = entity instanceof Object ? entity : zulu;
            entity = zulu.toISOString;
            entity = entity.bind(zulu)();
            if(!(!(mike < entity))) { _fun70534_ip = 267; continue _fun70534 }
 65:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 10;
            entity = offset[entity];
            golf = undefined;
            mike = options.bind(golf)(entity);
            entity = mike.getQuestTaskDetails;
            oscar = entity.bind(mike)(report);
            entity = 11;
            entity = offset[entity];
            zulu = options.bind(golf)(entity);
            mike = zulu.getQuestsInstructionsToWinReward;
            entity = {};
            entity['quest'] = report;
            entity['taskDetails'] = oscar;
            oscar = _closure1_slot6;
            oscar = oscar.EMBED_MOBILE;
            entity['location'] = oscar;
            oscar = 12;
            oscar = offset[oscar];
            oscar = options.bind(golf)(oscar);
            oscar = oscar.QuestContent;
            oscar = oscar.QUEST_EMBED_MOBILE;
            entity['questContent'] = oscar;
            oscar = function() { // Original name: connectedConsoleLinkOnClick
                entity = undefined;
                return entity;
            };
            entity['connectedConsoleLinkOnClick'] = oscar;
            verify = true;
            entity['withoutMarkdown'] = verify;
            oscar = 13;
            oscar = offset[oscar];
            oscar = options.bind(golf)(oscar);
            options = oscar.QuestBarCopySimplification;
            golf = options.getCurrentConfig;
            oscar = {};
            tango = _closure1_slot6;
            tango = tango.EMBED_MOBILE;
            oscar['location'] = tango;
            tango = {};
            tango['autoTrackExposure'] = verify;
            tango = golf.bind(options)(oscar, tango);
            tango = tango.enabled;
            entity['withSimplifiedCopy'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
 267:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 9;
            zulu = golf[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.ge+AJi;
            entity = {};
            report = report.config;
            report = report.messages;
            report = report.questName;
            entity['questName'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: buildQuestsEmbedProps
        _fun70536: for(var _fun70536_ip = 0; ; ) switch(_fun70536_ip) {
 0:
            mike = argFoo;
            oscar = mike.questId;
            entity = mike.isEligibleForQuests;
            report = mike.calculateVisibilityPercentages;
            zulu = mike.themeColors;
            if(entity) { _fun70536_ip = 206; continue _fun70536 }
 36:
            golf = _closure1_slot10;
            mike = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 9;
            verify = romeo[options];
            entity = undefined;
            verify = yankee.bind(entity)(verify);
            foxtrot = verify.intl;
            offset = foxtrot.string;
            verify = romeo[options];
            verify = yankee.bind(entity)(verify);
            verify = verify.t;
            verify = verify.3Z/Ejo;
            verify = offset.bind(foxtrot)(verify);
            mike['titleText'] = verify;
            verify = romeo[options];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(entity)(options);
            options = options.t;
            options = options.yHzB4e;
            options = verify.bind(offset)(options);
            mike['bodyText'] = options;
            mike['themeColors'] = zulu;
            offset = _closure1_slot3;
            verify = offset.resolveAssetSource;
            yankee = _closure1_slot1;
            options = 16;
            options = romeo[options];
            options = yankee.bind(entity)(options);
            options = verify.bind(offset)(options);
            options = options.uri;
            mike['thumbnailUrl'] = options;
            entity = golf.bind(entity)(mike);
            return entity;
 206:
            entity = _closure1_slot5;
            mike = entity.quests;
            entity = mike.get;
            oscar = entity.bind(mike)(oscar);
            options = null;
            mike = options == oscar;
            if(!mike) { _fun70536_ip = 245; continue _fun70536 }
 235:
            entity = _closure1_slot5;
            mike = entity.isFetchingCurrentQuests;
 245:
            if(!mike) { _fun70536_ip = 256; continue _fun70536 }
 248:
            entity = null;
            if(!report) { _fun70536_ip = 1053; continue _fun70536 }
 256:
            if(mike) { _fun70536_ip = 1032; continue _fun70536 }
 262:
            if(!(options != oscar)) { _fun70536_ip = 862; continue _fun70536 }
 269:
            mike = null;
            if(!report) { _fun70536_ip = 857; continue _fun70536 }
 277:
            report = {};
            report['themeColors'] = zulu;
            report['quest'] = oscar;
            oscar = report.themeColors;
            result = report.quest;
            golf = oscar.colors;
            verify = result.userStatus;
            offset = options == verify;
            backup = undefined;
            report = undefined;
            if(offset) { _fun70536_ip = 329; continue _fun70536 }
 323:
            report = verify.enrolledAt;
 329:
            verify = options != report;
            report = result.config;
            options = report.expiresAt;
            report = global;
            report = report.Date;
            offset = report.prototype;
            offset = Object.create(offset, {constructor: {value: report}});
            record = offset;
            report = new record[report](config);
            offset = report instanceof Object ? report : offset;
            report = offset.toISOString;
            report = report.bind(offset)();
            options = options < report;
            offset = _closure1_slot4;
            report = offset.getState;
            report = report.bind(offset)();
            yankee = report.theme;
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            report = 14;
            report = romeo[report];
            offset = offset.bind(backup)(report);
            report = offset.isThemeDark;
            offset = report.bind(offset)(yankee);
            report = _closure1_slot7;
            if(offset) { _fun70536_ip = 452; continue _fun70536 }
 444:
            output = report.LIGHT;
            _fun70536_ip = 458; continue _fun70536;
 452:
            output = report.DARK;
 458:
            report = {};
            yankee = _closure1_slot10;
            offset = {};
            echo = _closure1_slot0;
            update = _closure1_slot2;
            kilo = 9;
            romeo = update[kilo];
            romeo = echo.bind(backup)(romeo);
            source = romeo.intl;
            sizing = source.formatToPlainString;
            romeo = update[kilo];
            romeo = echo.bind(backup)(romeo);
            romeo = romeo.t;
            foxtrot = romeo.EAYZAg;
            romeo = {};
            control = result.config;
            control = control.messages;
            control = control.questName;
            romeo['questName'] = control;
            romeo = sizing.bind(source)(foxtrot, romeo);
            offset['titleText'] = romeo;
            romeo = result.config;
            romeo = romeo.messages;
            romeo = romeo.gamePublisher;
            offset['subtitle'] = romeo;
            foxtrot = _closure1_slot11;
            romeo = {};
            romeo['quest'] = result;
            romeo = foxtrot.bind(backup)(romeo);
            offset['bodyText'] = romeo;
            offset['themeColors'] = oscar;
            romeo = 15;
            foxtrot = update[romeo];
            sizing = echo.bind(backup)(foxtrot);
            foxtrot = sizing.getQuestAsset;
            romeo = update[romeo];
            romeo = echo.bind(backup)(romeo);
            romeo = romeo.QuestAssetType;
            romeo = romeo.GAME_TILE;
            romeo = foxtrot.bind(sizing)(result, romeo, output);
            romeo = romeo.url;
            offset['thumbnailUrl'] = romeo;
            sequence = yankee.bind(backup)(offset);
            config = report;
            offset = copyDataProperties(config, sequence);
            if(verify) { _fun70536_ip = 727; continue _fun70536 }
 670:
            if(options) { _fun70536_ip = 727; continue _fun70536 }
 673:
            romeo = _closure1_slot0;
            verify = _closure1_slot2;
            offset = verify[kilo];
            offset = romeo.bind(backup)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[kilo];
            verify = romeo.bind(backup)(verify);
            verify = verify.t;
            verify = verify.kUQLMD;
            verify = offset.bind(yankee)(verify);
            _fun70536_ip = 798; continue _fun70536;
 727:
            foxtrot = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = offset[kilo];
            yankee = foxtrot.bind(backup)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = offset[kilo];
            offset = foxtrot.bind(backup)(offset);
            offset = offset.t;
            if(options) { _fun70536_ip = 784; continue _fun70536 }
 771:
            options = offset.th2+0t;
            options = yankee.bind(romeo)(options);
            _fun70536_ip = 795; continue _fun70536;
 784:
            offset = offset.hvVgAQ;
            options = yankee.bind(romeo)(offset);
 795:
            verify = options;
 798:
            options = 'acceptLabelText';
            report[options] = verify;
            options = golf.acceptBlurpleLabelBackgroundColor;
            golf = 'acceptLabelBackgroundColor';
            report[golf] = options;
            oscar = oscar.colors;
            golf = oscar.acceptLabelGreenColor;
            oscar = 'acceptLabelColor';
            report[oscar] = golf;
            golf = 8;
            oscar = 'thumbnailCornerRadius';
            report[oscar] = golf;
            mike = report;
 857:
            _fun70536_ip = 1030; continue _fun70536;
 862:
            golf = _closure1_slot10;
            oscar = {};
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 9;
            verify = romeo[options];
            report = undefined;
            verify = yankee.bind(report)(verify);
            foxtrot = verify.intl;
            offset = foxtrot.string;
            verify = romeo[options];
            verify = yankee.bind(report)(verify);
            verify = verify.t;
            verify = verify.rxf+n5;
            verify = offset.bind(foxtrot)(verify);
            oscar['titleText'] = verify;
            verify = romeo[options];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(report)(options);
            options = options.t;
            options = options.Ow5AQE;
            options = verify.bind(offset)(options);
            oscar['bodyText'] = options;
            oscar['themeColors'] = zulu;
            offset = _closure1_slot3;
            verify = offset.resolveAssetSource;
            yankee = _closure1_slot1;
            options = 16;
            options = romeo[options];
            options = yankee.bind(report)(options);
            options = verify.bind(offset)(options);
            options = options.uri;
            oscar['thumbnailUrl'] = options;
            mike = golf.bind(report)(oscar);
 1030:
            _fun70536_ip = 1050; continue _fun70536;
 1032:
            report = _closure1_slot10;
            tango = {};
            tango['themeColors'] = zulu;
            zulu = undefined;
            mike = report.bind(zulu)(tango);
 1050:
            entity = mike;
 1053:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Image;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.QuestsExperimentLocations;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ThemeTypes;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.InviteTypes;
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestsEmbed.native.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: QuestsEmbed
        _fun70537: for(var _fun70537_ip = 0; ; ) switch(_fun70537_ip) {
 0:
            entity = argFoo;
            tango = entity.questId;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 20;
            entity = golf[entity];
            report = undefined;
            zulu = oscar.bind(report)(entity);
            entity = zulu.useMessageRendererTheme;
            verify = entity.bind(zulu)();
            zulu = _closure1_slot12;
            entity = {};
            entity['questId'] = tango;
            tango = 17;
            tango = golf[tango];
            options = oscar.bind(report)(tango);
            tango = options.useEmbedThemeColors;
            tango = tango.bind(options)(verify);
            entity['themeColors'] = tango;
            tango = 18;
            tango = golf[tango];
            verify = oscar.bind(report)(tango);
            options = verify.useIsEligibleForQuests;
            tango = {};
            offset = _closure1_slot6;
            offset = offset.EMBED_MOBILE;
            tango['location'] = offset;
            tango = options.bind(verify)(tango);
            entity['isEligibleForQuests'] = tango;
            tango = 19;
            tango = golf[tango];
            golf = oscar.bind(report)(tango);
            oscar = golf.useShouldCalculateMobileMessageVisibilityPercentages;
            tango = {};
            options = _closure1_slot6;
            options = options.EMBED_MOBILE;
            tango['location'] = options;
            tango = oscar.bind(golf)(tango);
            entity['calculateVisibilityPercentages'] = tango;
            oscar = zulu.bind(report)(entity);
            entity = null;
            zulu = entity != oscar;
            if(!zulu) { _fun70537_ip = 227; continue _fun70537 }
 185:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 21;
            mike = golf[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            romeo = mike;
            yankee = oscar;
            oscar = copyDataProperties(romeo, yankee);
            entity = tango.bind(report)(zulu, mike);
 227:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createQuestsEmbed
        mike = argFoo;
        entity = mike.questId;
        report = mike.theme;
        zulu = _closure1_slot12;
        mike = {};
        mike['questId'] = entity;
        options = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 17;
        tango = oscar[entity];
        entity = undefined;
        tango = options.bind(entity)(tango);
        tango = tango.bind(entity)(report);
        mike['themeColors'] = tango;
        report = _closure1_slot0;
        tango = 18;
        tango = oscar[tango];
        verify = report.bind(entity)(tango);
        options = verify.getIsEligibleForQuests;
        tango = {};
        offset = _closure1_slot6;
        offset = offset.EMBED_MOBILE;
        tango['location'] = offset;
        tango = options.bind(verify)(tango);
        mike['isEligibleForQuests'] = tango;
        tango = 19;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.shouldCalculateMobileMessageVisibilityPercentages;
        tango = {};
        golf = _closure1_slot6;
        golf = golf.EMBED_MOBILE;
        tango['location'] = golf;
        tango = report.bind(oscar)(tango);
        mike['calculateVisibilityPercentages'] = tango;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['createQuestsEmbed'] = mike;
    return entity;
})();