// app/modules/quests/native/QuestsEmbed.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: buildBaseEmbedProps
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = michal.titleText;
            tangon = michal.bodyText;
            report = michal.subtitle;
            entity = michal.themeColors;
            michal = michal.thumbnailUrl;
            verify = entity.baseColors;
            entity = entity.colors;
            zuuluu = {};
            offset = zuuluu;
            oscard = copyDataProperties(offset, verify);
            option = entity.headerColor;
            oscard = 'headerColor';
            zuuluu[oscard] = option;
            oscard = 'titleText';
            zuuluu[oscard] = golfie;
            golfie = entity.titleColor;
            oscard = 'titleColor';
            zuuluu[oscard] = golfie;
            golfie = entity.bodyTextColor;
            oscard = 'subtitleColor';
            zuuluu[oscard] = golfie;
            oscard = entity.bodyTextColor;
            entity = 'bodyTextColor';
            zuuluu[entity] = oscard;
            entity = 'thumbnailUrl';
            zuuluu[entity] = michal;
            michal = true;
            entity = 'embedCanBeTapped';
            zuuluu[entity] = michal;
            entity = 'canBeAccepted';
            zuuluu[entity] = michal;
            michal = _closure1_slot8;
            oscard = michal.GUILD;
            michal = 'type';
            zuuluu[michal] = oscard;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 8;
            entity = oscard[entity];
            oscard = undefined;
            michal = michal.bind(oscard)(entity);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            if(entity) { _fun00002_ip = 248; continue _fun00001 }
 207:
            entity = {};
            offset = entity;
            verify = zuuluu;
            michal = copyDataProperties(offset, verify);
            michal = 'headerText';
            entity[michal] = oscard;
            michal = 'bodyText';
            entity[michal] = tangon;
            michal = 'subtitle';
            entity[michal] = report;
            _fun00002_ip = 283; continue _fun00001;
 248:
            michal = {};
            offset = michal;
            verify = zuuluu;
            zuuluu = copyDataProperties(offset, verify);
            report = null;
            zuuluu = 'headerText';
            michal[zuuluu] = report;
            zuuluu = 'subtitle';
            michal[zuuluu] = tangon;
            entity = michal;
 283:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: buildSupportedOnMobileEmbedBodyText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.quest;
            entity = report.config;
            michal = entity.expiresAt;
            entity = global;
            entity = entity.Date;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            foxtra = zuuluu;
            entity = new foxtra[entity](romeon);
            zuuluu = entity instanceof Object ? entity : zuuluu;
            entity = zuuluu.toISOString;
            entity = entity.bind(zuuluu)();
            if(!(!(michal < entity))) { _fun00004_ip = 265; continue _fun00003 }
 65:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 10;
            entity = offset[entity];
            golfie = undefined;
            michal = option.bind(golfie)(entity);
            entity = michal.getQuestTaskDetails;
            oscard = entity.bind(michal)(report);
            entity = 11;
            entity = offset[entity];
            zuuluu = option.bind(golfie)(entity);
            michal = zuuluu.getQuestsInstructionsToWinReward;
            entity = {};
            entity['quest'] = report;
            entity['taskDetails'] = oscard;
            oscard = _closure1_slot6;
            oscard = oscard.EMBED_MOBILE;
            entity['location'] = oscard;
            oscard = 12;
            oscard = offset[oscard];
            oscard = option.bind(golfie)(oscard);
            oscard = oscard.QuestContent;
            oscard = oscard.QUEST_EMBED_MOBILE;
            entity['questContent'] = oscard;
            oscard = function() { // Original name: connectedConsoleLinkOnClick
                entity = undefined;
                return entity;
            };
            entity['connectedConsoleLinkOnClick'] = oscard;
            verify = true;
            entity['withoutMarkdown'] = verify;
            oscard = 13;
            oscard = offset[oscard];
            oscard = option.bind(golfie)(oscard);
            option = oscard.QuestBarCopySimplification;
            golfie = option.getCurrentConfig;
            oscard = {};
            tangon = _closure1_slot6;
            tangon = tangon.EMBED_MOBILE;
            oscard['location'] = tangon;
            tangon = {};
            tangon['autoTrackExposure'] = verify;
            tangon = golfie.bind(option)(oscard, tangon);
            tangon = tangon.enabled;
            entity['withSimplifiedCopy'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 265:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 9;
            zuuluu = golfie[entity];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = golfie[entity];
            entity = oscard.bind(michal)(entity);
            entity = entity.t;
            michal = entity.ge+AJi;
            entity = {};
            report = report.config;
            report = report.messages;
            report = report.questName;
            entity['questName'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: buildQuestsEmbedProps
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            oscard = michal.questId;
            entity = michal.isEligibleForQuests;
            michal = michal.themeColors;
            if(entity) { _fun00006_ip = 204; continue _fun00005 }
 30:
            report = _closure1_slot10;
            tangon = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 9;
            option = yankee[golfie];
            entity = undefined;
            option = offset.bind(entity)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[golfie];
            option = offset.bind(entity)(option);
            option = option.t;
            option = option.3Z/Ejo;
            option = verify.bind(romeon)(option);
            tangon['titleText'] = option;
            option = yankee[golfie];
            option = offset.bind(entity)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.yHzB4e;
            golfie = option.bind(verify)(golfie);
            tangon['bodyText'] = golfie;
            tangon['themeColors'] = michal;
            verify = _closure1_slot3;
            option = verify.resolveAssetSource;
            offset = _closure1_slot1;
            golfie = 16;
            golfie = yankee[golfie];
            golfie = offset.bind(entity)(golfie);
            golfie = option.bind(verify)(golfie);
            golfie = golfie.uri;
            tangon['thumbnailUrl'] = golfie;
            entity = report.bind(entity)(tangon);
            return entity;
 204:
            entity = _closure1_slot5;
            tangon = entity.quests;
            entity = tangon.get;
            tangon = entity.bind(tangon)(oscard);
            entity = _closure1_slot5;
            report = entity.excludedQuests;
            entity = report.get;
            entity = entity.bind(report)(oscard);
            oscard = null;
            if(!(oscard == tangon)) { _fun00006_ip = 266; continue _fun00005 }
 250:
            report = _closure1_slot5;
            report = report.isFetchingCurrentQuests;
            if(report) { _fun00006_ip = 1215; continue _fun00005 }
 266:
            if(!(oscard == entity)) { _fun00006_ip = 1041; continue _fun00005 }
 273:
            if(!(oscard != tangon)) { _fun00006_ip = 864; continue _fun00005 }
 280:
            entity = {};
            entity['themeColors'] = michal;
            entity['quest'] = tangon;
            tangon = entity.themeColors;
            sizing = entity.quest;
            report = tangon.colors;
            golfie = sizing.userStatus;
            option = oscard == golfie;
            romeon = undefined;
            entity = undefined;
            if(option) { _fun00006_ip = 332; continue _fun00005 }
 326:
            entity = golfie.enrolledAt;
 332:
            golfie = oscard != entity;
            entity = sizing.config;
            oscard = entity.expiresAt;
            entity = global;
            entity = entity.Date;
            option = entity.prototype;
            option = Object.create(option, {constructor: {value: entity}});
            sequen = option;
            entity = new sequen[entity](vacuum);
            option = entity instanceof Object ? entity : option;
            entity = option.toISOString;
            entity = entity.bind(option)();
            oscard = oscard < entity;
            option = _closure1_slot4;
            entity = option.getState;
            entity = entity.bind(option)();
            verify = entity.theme;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 14;
            entity = offset[entity];
            option = option.bind(romeon)(entity);
            entity = option.isThemeDark;
            option = entity.bind(option)(verify);
            entity = _closure1_slot7;
            if(option) { _fun00006_ip = 455; continue _fun00005 }
 447:
            kiloes = entity.LIGHT;
            _fun00006_ip = 461; continue _fun00005;
 455:
            kiloes = entity.DARK;
 461:
            entity = {};
            verify = _closure1_slot10;
            option = {};
            output = _closure1_slot0;
            result = _closure1_slot2;
            foxtra = 9;
            offset = result[foxtra];
            offset = output.bind(romeon)(offset);
            echoed = offset.intl;
            backup = echoed.formatToPlainString;
            offset = result[foxtra];
            offset = output.bind(romeon)(offset);
            offset = offset.t;
            yankee = offset.EAYZAg;
            offset = {};
            update = sizing.config;
            update = update.messages;
            update = update.questName;
            offset['questName'] = update;
            offset = backup.bind(echoed)(yankee, offset);
            option['titleText'] = offset;
            offset = sizing.config;
            offset = offset.messages;
            offset = offset.gamePublisher;
            option['subtitle'] = offset;
            yankee = _closure1_slot11;
            offset = {};
            offset['quest'] = sizing;
            offset = yankee.bind(romeon)(offset);
            option['bodyText'] = offset;
            option['themeColors'] = tangon;
            offset = 15;
            yankee = result[offset];
            backup = output.bind(romeon)(yankee);
            yankee = backup.getQuestAsset;
            offset = result[offset];
            offset = output.bind(romeon)(offset);
            offset = offset.QuestAssetType;
            offset = offset.GAME_TILE;
            offset = yankee.bind(backup)(sizing, offset, kiloes);
            offset = offset.url;
            option['thumbnailUrl'] = offset;
            ctrled = verify.bind(romeon)(option);
            vacuum = entity;
            option = copyDataProperties(vacuum, ctrled);
            if(golfie) { _fun00006_ip = 730; continue _fun00005 }
 673:
            if(oscard) { _fun00006_ip = 730; continue _fun00005 }
 676:
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            option = golfie[foxtra];
            option = offset.bind(romeon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = golfie[foxtra];
            golfie = offset.bind(romeon)(golfie);
            golfie = golfie.t;
            golfie = golfie.kUQLMD;
            golfie = option.bind(verify)(golfie);
            _fun00006_ip = 803; continue _fun00005;
 730:
            yankee = _closure1_slot0;
            option = _closure1_slot2;
            verify = option[foxtra];
            verify = yankee.bind(romeon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = option[foxtra];
            option = yankee.bind(romeon)(option);
            option = option.t;
            if(oscard) { _fun00006_ip = 789; continue _fun00005 }
 774:
            oscard = option.th2+0t;
            oscard = verify.bind(offset)(oscard);
            _fun00006_ip = 800; continue _fun00005;
 789:
            option = option.hvVgAQ;
            oscard = verify.bind(offset)(option);
 800:
            golfie = oscard;
 803:
            oscard = 'acceptLabelText';
            entity[oscard] = golfie;
            oscard = report.acceptBlurpleLabelBackgroundColor;
            report = 'acceptLabelBackgroundColor';
            entity[report] = oscard;
            tangon = tangon.colors;
            report = tangon.acceptLabelGreenColor;
            tangon = 'acceptLabelColor';
            entity[tangon] = report;
            report = 8;
            tangon = 'thumbnailCornerRadius';
            entity[tangon] = report;
            _fun00006_ip = 1036; continue _fun00005;
 864:
            oscard = _closure1_slot10;
            report = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 9;
            option = yankee[golfie];
            tangon = undefined;
            option = offset.bind(tangon)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            option = option.t;
            option = option.rxf+n5;
            option = verify.bind(romeon)(option);
            report['titleText'] = option;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.Ow5AQE;
            golfie = option.bind(verify)(golfie);
            report['bodyText'] = golfie;
            report['themeColors'] = michal;
            verify = _closure1_slot3;
            option = verify.resolveAssetSource;
            offset = _closure1_slot1;
            golfie = 16;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = option.bind(verify)(golfie);
            golfie = golfie.uri;
            report['thumbnailUrl'] = golfie;
            entity = oscard.bind(tangon)(report);
 1036:
            _fun00006_ip = 1213; continue _fun00005;
 1041:
            oscard = _closure1_slot10;
            report = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 9;
            option = yankee[golfie];
            tangon = undefined;
            option = offset.bind(tangon)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            option = option.t;
            option = option.Dd6Da2;
            option = verify.bind(romeon)(option);
            report['titleText'] = option;
            option = yankee[golfie];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.ii4mJi;
            golfie = option.bind(verify)(golfie);
            report['bodyText'] = golfie;
            report['themeColors'] = michal;
            verify = _closure1_slot3;
            option = verify.resolveAssetSource;
            offset = _closure1_slot1;
            golfie = 16;
            golfie = yankee[golfie];
            golfie = offset.bind(tangon)(golfie);
            golfie = option.bind(verify)(golfie);
            golfie = golfie.uri;
            report['thumbnailUrl'] = golfie;
            entity = oscard.bind(tangon)(report);
 1213:
            _fun00006_ip = 1233; continue _fun00005;
 1215:
            tangon = _closure1_slot10;
            zuuluu = {};
            zuuluu['themeColors'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 1233:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Image;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.QuestsExperimentLocations;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InviteTypes;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestsEmbed.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: QuestsEmbed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.questId;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 19;
            entity = golfie[entity];
            report = undefined;
            zuuluu = oscard.bind(report)(entity);
            entity = zuuluu.useMessageRendererTheme;
            verify = entity.bind(zuuluu)();
            zuuluu = _closure1_slot12;
            entity = {};
            entity['questId'] = tangon;
            tangon = 17;
            tangon = golfie[tangon];
            option = oscard.bind(report)(tangon);
            tangon = option.useEmbedThemeColors;
            tangon = tangon.bind(option)(verify);
            entity['themeColors'] = tangon;
            tangon = 18;
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.useIsEligibleForQuests;
            tangon = {};
            option = _closure1_slot6;
            option = option.EMBED_MOBILE;
            tangon['location'] = option;
            tangon = oscard.bind(golfie)(tangon);
            entity['isEligibleForQuests'] = tangon;
            oscard = zuuluu.bind(report)(entity);
            entity = null;
            zuuluu = entity != oscard;
            if(!zuuluu) { _fun00008_ip = 183; continue _fun00007 }
 141:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 20;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            yankee = michal;
            offset = oscard;
            oscard = copyDataProperties(yankee, offset);
            entity = tangon.bind(report)(zuuluu, michal);
 183:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createQuestsEmbed
        michal = argFoo;
        entity = michal.questId;
        report = michal.theme;
        zuuluu = _closure1_slot12;
        michal = {};
        michal['questId'] = entity;
        option = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 17;
        tangon = oscard[entity];
        entity = undefined;
        tangon = option.bind(entity)(tangon);
        tangon = tangon.bind(entity)(report);
        michal['themeColors'] = tangon;
        report = _closure1_slot0;
        tangon = 18;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.getIsEligibleForQuests;
        tangon = {};
        golfie = _closure1_slot6;
        golfie = golfie.EMBED_MOBILE;
        tangon['location'] = golfie;
        tangon = report.bind(oscard)(tangon);
        michal['isEligibleForQuests'] = tangon;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['createQuestsEmbed'] = michal;
    return entity;
})();