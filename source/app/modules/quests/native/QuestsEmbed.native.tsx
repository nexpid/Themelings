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
            michal = _closure1_slot9;
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
    var _closure1_slot11 = entity;
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
            backup = zuuluu;
            entity = new backup[entity](foxtra);
            zuuluu = entity instanceof Object ? entity : zuuluu;
            entity = zuuluu.toISOString;
            entity = entity.bind(zuuluu)();
            if(!(!(michal < entity))) { _fun00004_ip = 314; continue _fun00003 }
 65:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 10;
            michal = offset[entity];
            option = undefined;
            zuuluu = verify.bind(option)(michal);
            michal = zuuluu.getQuestTaskDetails;
            oscard = michal.bind(zuuluu)(report);
            entity = offset[entity];
            michal = verify.bind(option)(entity);
            entity = michal.getThirdPartyTaskDetails;
            golfie = entity.bind(michal)(report);
            entity = 11;
            entity = offset[entity];
            zuuluu = verify.bind(option)(entity);
            michal = zuuluu.getQuestsInstructionsToWinReward;
            entity = {};
            entity['quest'] = report;
            entity['taskDetails'] = oscard;
            oscard = _closure1_slot6;
            oscard = oscard.EMBED_MOBILE;
            entity['location'] = oscard;
            oscard = 12;
            oscard = offset[oscard];
            oscard = verify.bind(option)(oscard);
            oscard = oscard.QuestContent;
            oscard = oscard.QUEST_EMBED_MOBILE;
            entity['questContent'] = oscard;
            oscard = function() { // Original name: connectedConsoleLinkOnClick
                entity = undefined;
                return entity;
            };
            entity['connectedConsoleLinkOnClick'] = oscard;
            oscard = null;
            verify = oscard != golfie;
            oscard = undefined;
            if(!verify) { _fun00004_ip = 224; continue _fun00003 }
 221:
            oscard = golfie;
 224:
            entity['thirdPartyTaskDetails'] = oscard;
            verify = true;
            entity['withoutMarkdown'] = verify;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 13;
            oscard = offset[oscard];
            oscard = golfie.bind(option)(oscard);
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
 314:
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
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: buildQuestsEmbedProps
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            option = michal.questId;
            entity = michal.isEligibleForQuests;
            michal = michal.themeColors;
            if(entity) { _fun00006_ip = 205; continue _fun00005 }
 30:
            report = _closure1_slot11;
            tangon = {};
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 9;
            golfie = yankee[oscard];
            entity = undefined;
            golfie = offset.bind(entity)(golfie);
            romeon = golfie.intl;
            verify = romeon.string;
            golfie = yankee[oscard];
            golfie = offset.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.3Z/Ejo;
            golfie = verify.bind(romeon)(golfie);
            tangon['titleText'] = golfie;
            golfie = yankee[oscard];
            golfie = offset.bind(entity)(golfie);
            verify = golfie.intl;
            golfie = verify.string;
            oscard = yankee[oscard];
            oscard = offset.bind(entity)(oscard);
            oscard = oscard.t;
            oscard = oscard.yHzB4e;
            oscard = golfie.bind(verify)(oscard);
            tangon['bodyText'] = oscard;
            tangon['themeColors'] = michal;
            verify = _closure1_slot3;
            golfie = verify.resolveAssetSource;
            offset = _closure1_slot1;
            oscard = 16;
            oscard = yankee[oscard];
            oscard = offset.bind(entity)(oscard);
            oscard = golfie.bind(verify)(oscard);
            oscard = oscard.uri;
            tangon['thumbnailUrl'] = oscard;
            entity = report.bind(entity)(tangon);
            return entity;
 205:
            entity = _closure1_slot5;
            tangon = entity.quests;
            entity = tangon.get;
            tangon = entity.bind(tangon)(option);
            entity = _closure1_slot5;
            report = entity.excludedQuests;
            entity = report.get;
            entity = entity.bind(report)(option);
            golfie = null;
            if(!(golfie == tangon)) { _fun00006_ip = 267; continue _fun00005 }
 251:
            report = _closure1_slot5;
            report = report.isFetchingCurrentQuests;
            if(report) { _fun00006_ip = 1314; continue _fun00005 }
 267:
            if(!(golfie == entity)) { _fun00006_ip = 1105; continue _fun00005 }
 274:
            if(!(golfie != tangon)) { _fun00006_ip = 893; continue _fun00005 }
 281:
            entity = {};
            entity['themeColors'] = michal;
            entity['quest'] = tangon;
            tangon = entity.themeColors;
            result = entity.quest;
            report = tangon.colors;
            oscard = result.userStatus;
            verify = golfie == oscard;
            foxtra = undefined;
            entity = undefined;
            if(verify) { _fun00006_ip = 333; continue _fun00005 }
 327:
            entity = oscard.enrolledAt;
 333:
            verify = golfie != entity;
            entity = result.config;
            oscard = entity.expiresAt;
            entity = global;
            entity = entity.Date;
            offset = entity.prototype;
            offset = Object.create(offset, {constructor: {value: entity}});
            record = offset;
            entity = new record[entity](config);
            offset = entity instanceof Object ? entity : offset;
            entity = offset.toISOString;
            entity = entity.bind(offset)();
            oscard = oscard < entity;
            offset = _closure1_slot4;
            entity = offset.getState;
            entity = entity.bind(offset)();
            yankee = entity.theme;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 14;
            entity = romeon[entity];
            offset = offset.bind(foxtra)(entity);
            entity = offset.isThemeDark;
            offset = entity.bind(offset)(yankee);
            entity = _closure1_slot8;
            if(offset) { _fun00006_ip = 456; continue _fun00005 }
 448:
            output = entity.LIGHT;
            _fun00006_ip = 462; continue _fun00005;
 456:
            output = entity.DARK;
 462:
            entity = _closure1_slot5;
            entity = entity.questEnrollmentBlockedUntil;
            golfie = golfie != entity;
            entity = {};
            yankee = _closure1_slot11;
            offset = {};
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            backup = 9;
            romeon = update[backup];
            romeon = echoed.bind(foxtra)(romeon);
            source = romeon.intl;
            sizing = source.formatToPlainString;
            romeon = update[backup];
            romeon = echoed.bind(foxtra)(romeon);
            romeon = romeon.t;
            kiloes = romeon.EAYZAg;
            romeon = {};
            ctrled = result.config;
            ctrled = ctrled.messages;
            ctrled = ctrled.questName;
            romeon['questName'] = ctrled;
            romeon = sizing.bind(source)(kiloes, romeon);
            offset['titleText'] = romeon;
            romeon = result.config;
            romeon = romeon.messages;
            romeon = romeon.gamePublisher;
            offset['subtitle'] = romeon;
            kiloes = _closure1_slot12;
            romeon = {};
            romeon['quest'] = result;
            romeon = kiloes.bind(foxtra)(romeon);
            offset['bodyText'] = romeon;
            offset['themeColors'] = tangon;
            romeon = 15;
            kiloes = update[romeon];
            sizing = echoed.bind(foxtra)(kiloes);
            kiloes = sizing.getQuestAsset;
            romeon = update[romeon];
            romeon = echoed.bind(foxtra)(romeon);
            romeon = romeon.QuestAssetType;
            romeon = romeon.GAME_TILE;
            romeon = kiloes.bind(sizing)(result, romeon, output);
            romeon = romeon.url;
            offset['thumbnailUrl'] = romeon;
            sequen = yankee.bind(foxtra)(offset);
            config = entity;
            offset = copyDataProperties(config, sequen);
            if(verify) { _fun00006_ip = 761; continue _fun00005 }
 688:
            if(oscard) { _fun00006_ip = 761; continue _fun00005 }
 691:
            romeon = _closure1_slot0;
            verify = _closure1_slot2;
            offset = verify[backup];
            offset = romeon.bind(foxtra)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[backup];
            verify = romeon.bind(foxtra)(verify);
            verify = verify.t;
            if(golfie) { _fun00006_ip = 748; continue _fun00005 }
 735:
            golfie = verify.kUQLMD;
            golfie = offset.bind(yankee)(golfie);
            _fun00006_ip = 759; continue _fun00005;
 748:
            verify = verify.th2+0t;
            golfie = offset.bind(yankee)(verify);
 759:
            _fun00006_ip = 832; continue _fun00005;
 761:
            romeon = _closure1_slot0;
            verify = _closure1_slot2;
            offset = verify[backup];
            offset = romeon.bind(foxtra)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[backup];
            verify = romeon.bind(foxtra)(verify);
            verify = verify.t;
            if(oscard) { _fun00006_ip = 818; continue _fun00005 }
 805:
            oscard = verify.th2+0t;
            oscard = offset.bind(yankee)(oscard);
            _fun00006_ip = 829; continue _fun00005;
 818:
            verify = verify.hvVgAQ;
            oscard = offset.bind(yankee)(verify);
 829:
            golfie = oscard;
 832:
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
            _fun00006_ip = 1100; continue _fun00005;
 893:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 17;
            tangon = romeon[tangon];
            oscard = undefined;
            golfie = yankee.bind(oscard)(tangon);
            report = golfie.trackQuestEmbedFallbackViewed;
            tangon = _closure1_slot7;
            tangon = tangon.UNKNOWN_QUEST;
            tangon = report.bind(golfie)(option, tangon);
            report = _closure1_slot11;
            tangon = {};
            golfie = 9;
            verify = romeon[golfie];
            verify = yankee.bind(oscard)(verify);
            foxtra = verify.intl;
            offset = foxtra.string;
            verify = romeon[golfie];
            verify = yankee.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.rxf+n5;
            verify = offset.bind(foxtra)(verify);
            tangon['titleText'] = verify;
            verify = romeon[golfie];
            verify = yankee.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.Ow5AQE;
            golfie = verify.bind(offset)(golfie);
            tangon['bodyText'] = golfie;
            tangon['themeColors'] = michal;
            offset = _closure1_slot3;
            verify = offset.resolveAssetSource;
            yankee = _closure1_slot1;
            golfie = 16;
            golfie = romeon[golfie];
            golfie = yankee.bind(oscard)(golfie);
            golfie = verify.bind(offset)(golfie);
            golfie = golfie.uri;
            tangon['thumbnailUrl'] = golfie;
            entity = report.bind(oscard)(tangon);
 1100:
            _fun00006_ip = 1312; continue _fun00005;
 1105:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            tangon = 17;
            tangon = yankee[tangon];
            oscard = undefined;
            golfie = offset.bind(oscard)(tangon);
            report = golfie.trackQuestEmbedFallbackViewed;
            tangon = _closure1_slot7;
            tangon = tangon.EXCLUDED_QUEST;
            tangon = report.bind(golfie)(option, tangon);
            report = _closure1_slot11;
            tangon = {};
            golfie = 9;
            option = yankee[golfie];
            option = offset.bind(oscard)(option);
            romeon = option.intl;
            verify = romeon.string;
            option = yankee[golfie];
            option = offset.bind(oscard)(option);
            option = option.t;
            option = option.Dd6Da2;
            option = verify.bind(romeon)(option);
            tangon['titleText'] = option;
            option = yankee[golfie];
            option = offset.bind(oscard)(option);
            verify = option.intl;
            option = verify.string;
            golfie = yankee[golfie];
            golfie = offset.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.ii4mJi;
            golfie = option.bind(verify)(golfie);
            tangon['bodyText'] = golfie;
            tangon['themeColors'] = michal;
            verify = _closure1_slot3;
            option = verify.resolveAssetSource;
            offset = _closure1_slot1;
            golfie = 16;
            golfie = yankee[golfie];
            golfie = offset.bind(oscard)(golfie);
            golfie = option.bind(verify)(golfie);
            golfie = golfie.uri;
            tangon['thumbnailUrl'] = golfie;
            entity = report.bind(oscard)(tangon);
 1312:
            _fun00006_ip = 1332; continue _fun00005;
 1314:
            tangon = _closure1_slot11;
            zuuluu = {};
            zuuluu['themeColors'] = michal;
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 1332:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    golfie = tangon.QuestsExperimentLocations;
    var _closure1_slot6 = golfie;
    tangon = tangon.QuestEmbedFallbackReason;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InviteTypes;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = 22;
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
            entity = 20;
            entity = golfie[entity];
            report = undefined;
            zuuluu = oscard.bind(report)(entity);
            entity = zuuluu.useMessageRendererTheme;
            verify = entity.bind(zuuluu)();
            zuuluu = _closure1_slot13;
            entity = {};
            entity['questId'] = tangon;
            tangon = 18;
            tangon = golfie[tangon];
            option = oscard.bind(report)(tangon);
            tangon = option.useEmbedThemeColors;
            tangon = tangon.bind(option)(verify);
            entity['themeColors'] = tangon;
            tangon = 19;
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
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 21;
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
        zuuluu = _closure1_slot13;
        michal = {};
        michal['questId'] = entity;
        option = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 18;
        tangon = oscard[entity];
        entity = undefined;
        tangon = option.bind(entity)(tangon);
        tangon = tangon.bind(entity)(report);
        michal['themeColors'] = tangon;
        report = _closure1_slot0;
        tangon = 19;
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