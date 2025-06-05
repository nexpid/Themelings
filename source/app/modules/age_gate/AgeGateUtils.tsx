// app/modules/age_gate/AgeGateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AgeGateSource;
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.GuildNSFWContentLevel;
    verify = tangon.Date;
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    foxtra = '06/16/2020';
    backup = option;
    tangon = new backup[verify](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot5 = tangon;
    option = golfie.AGE_RESTRICTED;
    tangon = new Array(2);
    tangon[0] = option;
    golfie = golfie.EXPLICIT;
    tangon[1] = golfie;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/age_gate/AgeGateUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: userNeedsAgeGate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getCurrentUser;
            michal = entity.bind(michal)();
            zuuluu = null;
            entity = zuuluu != michal;
            if(!entity) { _fun00002_ip = 81; continue _fun00001 }
 25:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 3;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.extractTimestamp;
            report = michal.id;
            report = oscard.bind(golfie)(report);
            oscard = _closure1_slot5;
            tangon = oscard.getTime;
            tangon = tangon.bind(oscard)();
            entity = report > tangon;
 81:
            if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 84:
            michal = michal.nsfwAllowed;
            entity = zuuluu == michal;
 94:
            return entity;
        }
    };
    zuuluu['userNeedsAgeGate'] = tangon;
    tangon = function(argFoo) { // Original name: guildNeedsAgeGate
        zuuluu = _closure1_slot6;
        michal = zuuluu.includes;
        entity = argFoo;
        entity = entity.nsfwLevel;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildNeedsAgeGate'] = tangon;
    tangon = function() { // Original name: shouldAgeVerifyForAgeGate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.isEligibleForTiggerPawtect;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 5;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.shouldShowTiggerPawtect;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 76; continue _fun00003 }
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    zuuluu['shouldAgeVerifyForAgeGate'] = tangon;
    tangon = function() { // Original name: useShouldAgeVerifyForAgeGate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.useIsTiggerPawtectEnabled;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 5;
            michal = report[michal];
            zuuluu = tangon.bind(zuuluu)(michal);
            michal = zuuluu.useShouldShowTiggerPawtect;
            michal = michal.bind(zuuluu)();
            if(!entity) { _fun00006_ip = 76; continue _fun00005 }
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    zuuluu['useShouldAgeVerifyForAgeGate'] = tangon;
    michal = function(argFoo) { // Original name: useAgeGateVerifyContent
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
            entity = zuuluu[entity];
            option = undefined;
            michal = michal.bind(option)(entity);
            entity = michal.useIsAgeVerified;
            entity = entity.bind(michal)();
            michal = _closure1_slot4;
            michal = michal.NSFW_SERVER;
            zuuluu = report === michal;
            if(zuuluu) { _fun00008_ip = 69; continue _fun00007 }
 55:
            michal = _closure1_slot4;
            michal = michal.NSFW_SERVER_INVITE;
            zuuluu = report === michal;
 69:
            if(zuuluu) { _fun00008_ip = 86; continue _fun00007 }
 72:
            michal = _closure1_slot4;
            michal = michal.NSFW_SERVER_INVITE_EMBED;
            zuuluu = report === michal;
 86:
            michal = {};
            offset = _closure1_slot0;
            report = _closure1_slot2;
            verify = 6;
            oscard = report[verify];
            oscard = offset.bind(option)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[verify];
            report = offset.bind(option)(report);
            report = report.t;
            if(entity) { _fun00008_ip = 235; continue _fun00007 }
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
            if(zuuluu) { _fun00008_ip = 212; continue _fun00007 }
 197:
            entity = offset.u/xqhY;
            entity = yankee.bind(romeon)(entity);
            _fun00008_ip = 225; continue _fun00007;
 212:
            offset = offset.akjk0d;
            entity = yankee.bind(romeon)(offset);
 225:
            michal['verifyGateDescription'] = entity;
            entity = michal;
            _fun00008_ip = 339; continue _fun00007;
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
            if(zuuluu) { _fun00008_ip = 315; continue _fun00007 }
 297:
            report = tangon.x1coPj;
            zuuluu = {};
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            _fun00008_ip = 331; continue _fun00007;
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
    zuuluu['useAgeGateVerifyContent'] = michal;
    return entity;
})();