// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CreatorMonetizationApplicationState;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationRequestRejected.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsCreatorMonetizationRequestRejected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = {};
            report = null;
            zuuluu = report == michal;
            tangon = undefined;
            oscard = undefined;
            if(zuuluu) { _fun00002_ip = 38; continue _fun00001 }
 18:
            zuuluu = michal.latestRequest;
            golfie = report == zuuluu;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 38; continue _fun00001 }
 33:
            oscard = zuuluu.state;
 38:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.REJECTED;
            zuuluu = oscard === zuuluu;
            entity['isApplicationRejected'] = zuuluu;
            oscard = report == michal;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 92; continue _fun00001 }
 69:
            michal = michal.rejection;
            report = report == michal;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 92; continue _fun00001 }
 84:
            zuuluu = michal.can_reapply_at;
 92:
            michal = function(argFoo) { // Original name: getRequestCooldown
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    michal = null;
                    if(!(michal != report)) { _fun00004_ip = 521; continue _fun00003 }
 14:
                    zuuluu = global;
                    tangon = zuuluu.Date;
                    michal = tangon.parse;
                    report = michal.bind(tangon)(report);
                    tangon = zuuluu.Date;
                    michal = tangon.now;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.isNaN;
                    option = undefined;
                    tangon = tangon.bind(option)(report);
                    if(tangon) { _fun00004_ip = 521; continue _fun00003 }
 67:
                    if(!(!(report < michal))) { _fun00004_ip = 521; continue _fun00003 }
 74:
                    tangon = zuuluu.Math;
                    zuuluu = tangon.round;
                    report = report - michal;
                    michal = 60000;
                    michal = report / michal;
                    report = zuuluu.bind(tangon)(michal);
                    var _closure3_slot0 = report;
                    golfie = function(argFoo) { // Original name: roundByInterval
                        entity = global;
                        zuuluu = entity.Math;
                        michal = zuuluu.round;
                        tangon = _closure3_slot0;
                        entity = argFoo;
                        entity = tangon / entity;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    oscard = 43200;
                    if(!(!(report >= oscard))) { _fun00004_ip = 448; continue _fun00003 }
 128:
                    verify = 10080;
                    if(!(!(report >= verify))) { _fun00004_ip = 375; continue _fun00003 }
 141:
                    offset = 1440;
                    if(!(!(report >= offset))) { _fun00004_ip = 302; continue _fun00003 }
 154:
                    yankee = 60;
                    if(!(!(report >= yankee))) { _fun00004_ip = 229; continue _fun00003 }
 161:
                    michal = _closure1_slot0;
                    romeon = _closure1_slot1;
                    entity = 1;
                    zuuluu = romeon[entity];
                    zuuluu = michal.bind(option)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.formatToPlainString;
                    entity = romeon[entity];
                    entity = michal.bind(option)(entity);
                    entity = entity.t;
                    michal = entity.iXLF9f;
                    entity = {};
                    entity['minutes'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    _fun00004_ip = 300; continue _fun00003;
 229:
                    zuuluu = _closure1_slot0;
                    romeon = _closure1_slot1;
                    michal = 1;
                    tangon = romeon[michal];
                    tangon = zuuluu.bind(option)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = romeon[michal];
                    michal = zuuluu.bind(option)(michal);
                    michal = michal.t;
                    zuuluu = michal.xCjYxM;
                    michal = {};
                    yankee = golfie.bind(option)(yankee);
                    michal['hours'] = yankee;
                    entity = tangon.bind(report)(zuuluu, michal);
 300:
                    _fun00004_ip = 373; continue _fun00003;
 302:
                    zuuluu = _closure1_slot0;
                    yankee = _closure1_slot1;
                    michal = 1;
                    tangon = yankee[michal];
                    tangon = zuuluu.bind(option)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = yankee[michal];
                    michal = zuuluu.bind(option)(michal);
                    michal = michal.t;
                    zuuluu = michal.k2UNz8;
                    michal = {};
                    offset = golfie.bind(option)(offset);
                    michal['days'] = offset;
                    entity = tangon.bind(report)(zuuluu, michal);
 373:
                    _fun00004_ip = 446; continue _fun00003;
 375:
                    zuuluu = _closure1_slot0;
                    offset = _closure1_slot1;
                    michal = 1;
                    tangon = offset[michal];
                    tangon = zuuluu.bind(option)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = offset[michal];
                    michal = zuuluu.bind(option)(michal);
                    michal = michal.t;
                    zuuluu = michal.EmoBDw;
                    michal = {};
                    verify = golfie.bind(option)(verify);
                    michal['weeks'] = verify;
                    entity = tangon.bind(report)(zuuluu, michal);
 446:
                    _fun00004_ip = 519; continue _fun00003;
 448:
                    zuuluu = _closure1_slot0;
                    verify = _closure1_slot1;
                    michal = 1;
                    tangon = verify[michal];
                    tangon = zuuluu.bind(option)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = verify[michal];
                    michal = zuuluu.bind(option)(michal);
                    michal = michal.t;
                    zuuluu = michal.kridzM;
                    michal = {};
                    oscard = golfie.bind(option)(oscard);
                    michal['months'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 519:
                    return entity;
 521:
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.bind(tangon)(zuuluu);
            entity['requestCooldownDuration'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();