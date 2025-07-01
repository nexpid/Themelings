// app/modules/age_gate/AgeGateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = offset;
    golfie = function() { // Original name: shouldAgeVerifyForAgeGate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.isEligibleForTiggerPawtect;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 7;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.shouldShowTiggerPawtect;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 76; continue _fun00001 }
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    var _closure1_slot12 = golfie;
    tangon = global;
    yankee = tangon.Object;
    option = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, report);
    entity = 0;
    report = offset[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = offset[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = offset[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = offset[report];
    report = verify.bind(entity)(report);
    report = report.AgeGateSource;
    var _closure1_slot6 = report;
    report = 4;
    report = offset[report];
    report = verify.bind(entity)(report);
    report = report.GuildNSFWContentLevel;
    option = tangon.Date;
    tangon = option.prototype;
    oscard = Object.create(tangon, {constructor: {value: option}});
    backup = '06/16/2020';
    kiloes = oscard;
    tangon = new kiloes[option](backup, foxtra);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot7 = tangon;
    oscard = report.AGE_RESTRICTED;
    tangon = new Array(2);
    tangon[0] = oscard;
    report = report.EXPLICIT;
    tangon[1] = report;
    var _closure1_slot8 = tangon;
    oscard = function() { // Original name: shouldShowAgeGateForCurrentUser
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            entity = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00004_ip = 50; continue _fun00003 }
 22:
            tangon = _closure1_slot12;
            michal = undefined;
            michal = tangon.bind(michal)();
            entity = entity.nsfwAllowed;
            entity = zuuluu == entity;
            if(entity) { _fun00004_ip = 48; continue _fun00003 }
 45:
            entity = michal;
 48:
            return entity;
 50:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot9 = oscard;
    report = function(argFoo) { // Original name: shouldShowAgeGateForGuildId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot9;
            tangon = undefined;
            entity = entity.bind(tangon)();
            if(!entity) { _fun00006_ip = 110; continue _fun00005 }
 19:
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 110; continue _fun00005 }
 25:
            oscard = _closure1_slot4;
            zuuluu = oscard.getGuild;
            oscard = zuuluu.bind(oscard)(report);
            zuuluu = entity == oscard;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 58; continue _fun00005 }
 48:
            zuuluu = oscard.isNSFW;
            entity = zuuluu.bind(oscard)();
 58:
            if(!entity) { _fun00006_ip = 108; continue _fun00005 }
 61:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.isEligibleForGuildContentLevelSetting;
            michal = {};
            michal['guildId'] = report;
            report = 'age-gate-utils';
            michal['location'] = report;
            entity = zuuluu.bind(tangon)(michal);
 108:
            return entity;
 110:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: shouldShowAgeGateForChannelId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot9;
            michal = undefined;
            entity = entity.bind(michal)();
            tangon = !entity;
            if(tangon) { _fun00008_ip = 28; continue _fun00007 }
 22:
            entity = null;
            tangon = entity == report;
 28:
            entity = !tangon;
            if(tangon) { _fun00008_ip = 72; continue _fun00007 }
 34:
            tangon = _closure1_slot3;
            zuuluu = tangon.getChannel;
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            michal = undefined;
            if(zuuluu) { _fun00008_ip = 69; continue _fun00007 }
 59:
            zuuluu = tangon.isNSFW;
            michal = zuuluu.bind(tangon)();
 69:
            entity = michal;
 72:
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    option = 11;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/age_gate/AgeGateUtils.tsx';
    option = verify.bind(offset)(option);
    option = function() { // Original name: userNeedsAgeGate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot5;
            entity = michal.getCurrentUser;
            michal = entity.bind(michal)();
            zuuluu = null;
            entity = zuuluu != michal;
            if(!entity) { _fun00010_ip = 81; continue _fun00009 }
 25:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 5;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.extractTimestamp;
            report = michal.id;
            report = oscard.bind(golfie)(report);
            oscard = _closure1_slot7;
            tangon = oscard.getTime;
            tangon = tangon.bind(oscard)();
            entity = report > tangon;
 81:
            if(!entity) { _fun00010_ip = 94; continue _fun00009 }
 84:
            michal = michal.nsfwAllowed;
            entity = zuuluu == michal;
 94:
            return entity;
        }
    };
    zuuluu['userNeedsAgeGate'] = option;
    option = function(argFoo) { // Original name: guildNeedsAgeGate
        zuuluu = _closure1_slot8;
        michal = zuuluu.includes;
        entity = argFoo;
        entity = entity.nsfwLevel;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildNeedsAgeGate'] = option;
    zuuluu['shouldAgeVerifyForAgeGate'] = golfie;
    golfie = function() { // Original name: useShouldAgeVerifyForAgeGate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.useIsTiggerPawtectEnabled;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 7;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.useShouldShowTiggerPawtect;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00012_ip = 76; continue _fun00011 }
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    zuuluu['useShouldAgeVerifyForAgeGate'] = golfie;
    golfie = function(argFoo) { // Original name: useAgeGateVerifyContent
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            option = undefined;
            michal = michal.bind(option)(entity);
            entity = michal.useIsAgeVerified;
            entity = entity.bind(michal)();
            michal = _closure1_slot6;
            michal = michal.NSFW_SERVER;
            zuuluu = report === michal;
            if(zuuluu) { _fun00014_ip = 69; continue _fun00013 }
 55:
            michal = _closure1_slot6;
            michal = michal.NSFW_SERVER_INVITE;
            zuuluu = report === michal;
 69:
            if(zuuluu) { _fun00014_ip = 86; continue _fun00013 }
 72:
            michal = _closure1_slot6;
            michal = michal.NSFW_SERVER_INVITE_EMBED;
            zuuluu = report === michal;
 86:
            michal = {};
            offset = _closure1_slot0;
            report = _closure1_slot2;
            verify = 8;
            oscard = report[verify];
            oscard = offset.bind(option)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[verify];
            report = offset.bind(option)(report);
            report = report.t;
            if(entity) { _fun00014_ip = 235; continue _fun00013 }
 135:
            entity = report.5B+npK;
            entity = oscard.bind(golfie)(entity);
            michal['verifyAgreementButtonText'] = entity;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            yankee = entity[verify];
            yankee = offset.bind(option)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            entity = entity[verify];
            entity = offset.bind(option)(entity);
            offset = entity.t;
            if(zuuluu) { _fun00014_ip = 212; continue _fun00013 }
 197:
            entity = offset.u/xqhY;
            entity = yankee.bind(romeon)(entity);
            _fun00014_ip = 225; continue _fun00013;
 212:
            offset = offset.akjk0d;
            entity = yankee.bind(romeon)(offset);
 225:
            michal['verifyGateDescription'] = entity;
            entity = michal;
            _fun00014_ip = 339; continue _fun00013;
 235:
            report = report.PBG51t;
            report = oscard.bind(golfie)(report);
            michal['verifyAgreementButtonText'] = report;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            oscard = tangon[verify];
            oscard = report.bind(option)(oscard);
            golfie = oscard.intl;
            oscard = golfie.format;
            tangon = tangon[verify];
            tangon = report.bind(option)(tangon);
            tangon = tangon.t;
            if(zuuluu) { _fun00014_ip = 315; continue _fun00013 }
 297:
            report = tangon.x1coPj;
            zuuluu = {};
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            _fun00014_ip = 331; continue _fun00013;
 315:
            report = tangon.7uIWQE;
            tangon = {};
            zuuluu = oscard.bind(golfie)(report, tangon);
 331:
            michal['verifyGateDescription'] = zuuluu;
            entity = michal;
 339:
            return entity;
        }
    };
    zuuluu['useAgeGateVerifyContent'] = golfie;
    zuuluu['shouldShowAgeGateForCurrentUser'] = oscard;
    zuuluu['shouldShowAgeGateForGuildId'] = report;
    zuuluu['shouldShowAgeGateForChannelId'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: maybeShowAgeGate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argBaz;
            zuuluu = _closure1_slot10;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            if(michal) { _fun00016_ip = 90; continue _fun00015 }
 23:
            zuuluu = _closure1_slot11;
            michal = argBar;
            michal = zuuluu.bind(entity)(michal);
            if(!michal) { _fun00016_ip = 137; continue _fun00015 }
 38:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            oscard = zuuluu.bind(entity)(michal);
            zuuluu = oscard.openAgeGateModal;
            golfie = null;
            michal = tangon;
            if(!(golfie == tangon)) { _fun00016_ip = 83; continue _fun00015 }
 73:
            golfie = _closure1_slot6;
            michal = golfie.NSFW_CHANNEL;
 83:
            michal = zuuluu.bind(oscard)(michal);
            _fun00016_ip = 137; continue _fun00015;
 90:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.openAgeGateModal;
            oscard = null;
            if(!(oscard == tangon)) { _fun00016_ip = 132; continue _fun00015 }
 122:
            report = _closure1_slot6;
            tangon = report.NSFW_SERVER;
 132:
            michal = michal.bind(zuuluu)(tangon);
 137:
            return entity;
        }
    };
    zuuluu['maybeShowAgeGate'] = michal;
    return entity;
})();