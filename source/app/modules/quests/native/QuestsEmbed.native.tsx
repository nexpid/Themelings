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
            report = michal.calculateVisibilityPercentages;
            zuuluu = michal.themeColors;
            if(entity) { _fun00006_ip = 210; continue _fun00005 }
 36:
            golfie = _closure1_slot10;
            michal = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 9;
            verify = romeon[option];
            entity = undefined;
            verify = yankee.bind(entity)(verify);
            foxtra = verify.intl;
            offset = foxtra.string;
            verify = romeon[option];
            verify = yankee.bind(entity)(verify);
            verify = verify.t;
            verify = verify.3Z/Ejo;
            verify = offset.bind(foxtra)(verify);
            michal['titleText'] = verify;
            verify = romeon[option];
            verify = yankee.bind(entity)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = option.t;
            option = option.yHzB4e;
            option = verify.bind(offset)(option);
            michal['bodyText'] = option;
            michal['themeColors'] = zuuluu;
            offset = _closure1_slot3;
            verify = offset.resolveAssetSource;
            yankee = _closure1_slot1;
            option = 16;
            option = romeon[option];
            option = yankee.bind(entity)(option);
            option = verify.bind(offset)(option);
            option = option.uri;
            michal['thumbnailUrl'] = option;
            entity = golfie.bind(entity)(michal);
            return entity;
 210:
            entity = _closure1_slot5;
            michal = entity.quests;
            entity = michal.get;
            oscard = entity.bind(michal)(oscard);
            option = null;
            michal = option == oscard;
            if(!michal) { _fun00006_ip = 249; continue _fun00005 }
 239:
            entity = _closure1_slot5;
            michal = entity.isFetchingCurrentQuests;
 249:
            if(!michal) { _fun00006_ip = 260; continue _fun00005 }
 252:
            entity = null;
            if(!report) { _fun00006_ip = 1063; continue _fun00005 }
 260:
            if(michal) { _fun00006_ip = 1042; continue _fun00005 }
 266:
            if(!(option != oscard)) { _fun00006_ip = 868; continue _fun00005 }
 273:
            michal = null;
            if(!report) { _fun00006_ip = 863; continue _fun00005 }
 281:
            report = {};
            report['themeColors'] = zuuluu;
            report['quest'] = oscard;
            oscard = report.themeColors;
            result = report.quest;
            golfie = oscard.colors;
            verify = result.userStatus;
            offset = option == verify;
            backup = undefined;
            report = undefined;
            if(offset) { _fun00006_ip = 333; continue _fun00005 }
 327:
            report = verify.enrolledAt;
 333:
            verify = option != report;
            report = result.config;
            option = report.expiresAt;
            report = global;
            report = report.Date;
            offset = report.prototype;
            offset = Object.create(offset, {constructor: {value: report}});
            record = offset;
            report = new record[report](config);
            offset = report instanceof Object ? report : offset;
            report = offset.toISOString;
            report = report.bind(offset)();
            option = option < report;
            offset = _closure1_slot4;
            report = offset.getState;
            report = report.bind(offset)();
            yankee = report.theme;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            report = 14;
            report = romeon[report];
            offset = offset.bind(backup)(report);
            report = offset.isThemeDark;
            offset = report.bind(offset)(yankee);
            report = _closure1_slot7;
            if(offset) { _fun00006_ip = 456; continue _fun00005 }
 448:
            output = report.LIGHT;
            _fun00006_ip = 462; continue _fun00005;
 456:
            output = report.DARK;
 462:
            report = {};
            yankee = _closure1_slot10;
            offset = {};
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            kiloes = 9;
            romeon = update[kiloes];
            romeon = echoed.bind(backup)(romeon);
            source = romeon.intl;
            sizing = source.formatToPlainString;
            romeon = update[kiloes];
            romeon = echoed.bind(backup)(romeon);
            romeon = romeon.t;
            foxtra = romeon.EAYZAg;
            romeon = {};
            ctrled = result.config;
            ctrled = ctrled.messages;
            ctrled = ctrled.questName;
            romeon['questName'] = ctrled;
            romeon = sizing.bind(source)(foxtra, romeon);
            offset['titleText'] = romeon;
            romeon = result.config;
            romeon = romeon.messages;
            romeon = romeon.gamePublisher;
            offset['subtitle'] = romeon;
            foxtra = _closure1_slot11;
            romeon = {};
            romeon['quest'] = result;
            romeon = foxtra.bind(backup)(romeon);
            offset['bodyText'] = romeon;
            offset['themeColors'] = oscard;
            romeon = 15;
            foxtra = update[romeon];
            sizing = echoed.bind(backup)(foxtra);
            foxtra = sizing.getQuestAsset;
            romeon = update[romeon];
            romeon = echoed.bind(backup)(romeon);
            romeon = romeon.QuestAssetType;
            romeon = romeon.GAME_TILE;
            romeon = foxtra.bind(sizing)(result, romeon, output);
            romeon = romeon.url;
            offset['thumbnailUrl'] = romeon;
            sequen = yankee.bind(backup)(offset);
            config = report;
            offset = copyDataProperties(config, sequen);
            if(verify) { _fun00006_ip = 731; continue _fun00005 }
 674:
            if(option) { _fun00006_ip = 731; continue _fun00005 }
 677:
            romeon = _closure1_slot0;
            verify = _closure1_slot2;
            offset = verify[kiloes];
            offset = romeon.bind(backup)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[kiloes];
            verify = romeon.bind(backup)(verify);
            verify = verify.t;
            verify = verify.kUQLMD;
            verify = offset.bind(yankee)(verify);
            _fun00006_ip = 804; continue _fun00005;
 731:
            foxtra = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = offset[kiloes];
            yankee = foxtra.bind(backup)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            offset = offset[kiloes];
            offset = foxtra.bind(backup)(offset);
            offset = offset.t;
            if(option) { _fun00006_ip = 790; continue _fun00005 }
 775:
            option = offset.th2+0t;
            option = yankee.bind(romeon)(option);
            _fun00006_ip = 801; continue _fun00005;
 790:
            offset = offset.hvVgAQ;
            option = yankee.bind(romeon)(offset);
 801:
            verify = option;
 804:
            option = 'acceptLabelText';
            report[option] = verify;
            option = golfie.acceptBlurpleLabelBackgroundColor;
            golfie = 'acceptLabelBackgroundColor';
            report[golfie] = option;
            oscard = oscard.colors;
            golfie = oscard.acceptLabelGreenColor;
            oscard = 'acceptLabelColor';
            report[oscard] = golfie;
            golfie = 8;
            oscard = 'thumbnailCornerRadius';
            report[oscard] = golfie;
            michal = report;
 863:
            _fun00006_ip = 1040; continue _fun00005;
 868:
            golfie = _closure1_slot10;
            oscard = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 9;
            verify = romeon[option];
            report = undefined;
            verify = yankee.bind(report)(verify);
            foxtra = verify.intl;
            offset = foxtra.string;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            verify = verify.t;
            verify = verify.rxf+n5;
            verify = offset.bind(foxtra)(verify);
            oscard['titleText'] = verify;
            verify = romeon[option];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = option.t;
            option = option.Ow5AQE;
            option = verify.bind(offset)(option);
            oscard['bodyText'] = option;
            oscard['themeColors'] = zuuluu;
            offset = _closure1_slot3;
            verify = offset.resolveAssetSource;
            yankee = _closure1_slot1;
            option = 16;
            option = romeon[option];
            option = yankee.bind(report)(option);
            option = verify.bind(offset)(option);
            option = option.uri;
            oscard['thumbnailUrl'] = option;
            michal = golfie.bind(report)(oscard);
 1040:
            _fun00006_ip = 1060; continue _fun00005;
 1042:
            report = _closure1_slot10;
            tangon = {};
            tangon['themeColors'] = zuuluu;
            zuuluu = undefined;
            michal = report.bind(zuuluu)(tangon);
 1060:
            entity = michal;
 1063:
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
            verify = oscard.bind(report)(tangon);
            option = verify.useIsEligibleForQuests;
            tangon = {};
            offset = _closure1_slot6;
            offset = offset.EMBED_MOBILE;
            tangon['location'] = offset;
            tangon = option.bind(verify)(tangon);
            entity['isEligibleForQuests'] = tangon;
            tangon = 19;
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.useShouldCalculateMobileMessageVisibilityPercentages;
            tangon = {};
            option = _closure1_slot6;
            option = option.EMBED_MOBILE;
            tangon['location'] = option;
            tangon = oscard.bind(golfie)(tangon);
            entity['calculateVisibilityPercentages'] = tangon;
            oscard = zuuluu.bind(report)(entity);
            entity = null;
            zuuluu = entity != oscard;
            if(!zuuluu) { _fun00008_ip = 227; continue _fun00007 }
 185:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 21;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            romeon = michal;
            yankee = oscard;
            oscard = copyDataProperties(romeon, yankee);
            entity = tangon.bind(report)(zuuluu, michal);
 227:
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
        verify = report.bind(entity)(tangon);
        option = verify.getIsEligibleForQuests;
        tangon = {};
        offset = _closure1_slot6;
        offset = offset.EMBED_MOBILE;
        tangon['location'] = offset;
        tangon = option.bind(verify)(tangon);
        michal['isEligibleForQuests'] = tangon;
        tangon = 19;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.shouldCalculateMobileMessageVisibilityPercentages;
        tangon = {};
        golfie = _closure1_slot6;
        golfie = golfie.EMBED_MOBILE;
        tangon['location'] = golfie;
        tangon = report.bind(oscard)(tangon);
        michal['calculateVisibilityPercentages'] = tangon;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['createQuestsEmbed'] = michal;
    return entity;
})();