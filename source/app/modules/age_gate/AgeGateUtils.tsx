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
    golfie = golfie.GuildNSFWContentLevel;
    verify = tangon.Date;
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    foxtra = '06/16/2020';
    backup = option;
    tangon = new backup[verify](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot4 = tangon;
    option = golfie.AGE_RESTRICTED;
    tangon = new Array(2);
    tangon[0] = option;
    golfie = golfie.EXPLICIT;
    tangon[1] = golfie;
    var _closure1_slot5 = tangon;
    tangon = 5;
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
            report = 2;
            oscard = oscard[report];
            report = undefined;
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.extractTimestamp;
            report = michal.id;
            report = oscard.bind(golfie)(report);
            oscard = _closure1_slot4;
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
        zuuluu = _closure1_slot5;
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
            entity = 3;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.isEligibleForTiggerPawtect;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 4;
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
    michal = function() { // Original name: useShouldAgeVerifyForAgeGate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            michal = oscard.useIsTiggerPawtectEnabled;
            entity = {};
            golfie = 'age-gate-utils';
            entity['location'] = golfie;
            entity = michal.bind(oscard)(entity);
            michal = 4;
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
    zuuluu['useShouldAgeVerifyForAgeGate'] = michal;
    return entity;
})();