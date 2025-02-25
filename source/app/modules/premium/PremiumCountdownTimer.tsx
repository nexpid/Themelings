// app/modules/premium/PremiumCountdownTimer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: formatCountdownNumerals
        tangon = argFoo;
        zuuluu = tangon.toLocaleString;
        entity = _closure1_slot3;
        michal = entity.locale;
        entity = {'minimumIntegerDigits': 2, 'useGrouping': false};
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/PremiumCountdownTimer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PremiumCountdownTimer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.endDate;
            michal = global;
            zuuluu = michal.Date;
            entity = zuuluu.now;
            report = entity.bind(zuuluu)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 1;
            entity = oscard[entity];
            option = undefined;
            tangon = tangon.bind(option)(entity);
            entity = tangon.diffAsUnits;
            entity = entity.bind(tangon)(report, golfie);
            tangon = golfie.getTime;
            tangon = tangon.bind(golfie)();
            oscard = report > tangon;
            entity = entity.days;
            tangon = 0;
            entity = entity > tangon;
            report = 1000;
            if(!entity) { _fun00002_ip = 104; continue _fun00001 }
 98:
            report = 3600000;
 104:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 2;
            entity = offset[entity];
            entity = verify.bind(option)(entity);
            kiloes = undefined;
            backup = golfie;
            foxtra = report;
            romeon = undefined;
            yankee = oscard;
            golfie = kiloes[entity](backup, foxtra, romeon, yankee, offset);
            entity = null;
            if(oscard) { _fun00002_ip = 391; continue _fun00001 }
 149:
            oscard = michal.Object;
            michal = oscard.values;
            verify = michal.bind(oscard)(golfie);
            oscard = verify.every;
            michal = function(argFoo) {
                michal = 0;
                entity = argFoo;
                entity = michal === entity;
                return entity;
            };
            michal = oscard.bind(verify)(michal);
            entity = null;
            if(michal) { _fun00002_ip = 391; continue _fun00001 }
 193:
            michal = golfie.days;
            if(!(!(michal > tangon))) { _fun00002_ip = 317; continue _fun00001 }
 203:
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 3;
            report = verify[michal];
            report = tangon.bind(option)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            michal = verify[michal];
            michal = tangon.bind(option)(michal);
            michal = michal.t;
            tangon = michal.3MT4MT;
            michal = {};
            offset = _closure1_slot4;
            verify = golfie.hours;
            verify = offset.bind(option)(verify);
            michal['hours'] = verify;
            verify = golfie.minutes;
            verify = offset.bind(option)(verify);
            michal['minutes'] = verify;
            verify = golfie.seconds;
            verify = offset.bind(option)(verify);
            michal['seconds'] = verify;
            michal = report.bind(oscard)(tangon, michal);
            _fun00002_ip = 388; continue _fun00001;
 317:
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 3;
            report = verify[zuuluu];
            report = tangon.bind(option)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.f0QaSU;
            zuuluu = {};
            golfie = golfie.days;
            zuuluu['days'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 388:
            entity = michal;
 391:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();