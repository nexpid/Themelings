// app/modules/polls/chat/useFormattedExpirationLabel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    michal = function(argFoo) { // Original name: formatExpirationLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 0;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.bind(entity)();
            if(!(!(option <= report))) { _fun00002_ip = 292; continue _fun00001 }
 38:
            tangon = option.diff;
            zuuluu = 'days';
            oscard = tangon.bind(option)(report, zuuluu);
            golfie = 1;
            if(!(!(oscard > golfie))) { _fun00002_ip = 228; continue _fun00001 }
 64:
            tangon = option.diff;
            zuuluu = 'hours';
            verify = tangon.bind(option)(report, zuuluu);
            if(!(!(verify > golfie))) { _fun00002_ip = 164; continue _fun00001 }
 84:
            tangon = option.diff;
            zuuluu = 'minutes';
            offset = tangon.bind(option)(report, zuuluu);
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[golfie];
            report = tangon.bind(entity)(report);
            option = report.intl;
            report = option.formatToPlainString;
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.3SLXAw;
            zuuluu = {};
            zuuluu['minutes'] = offset;
            zuuluu = report.bind(option)(tangon, zuuluu);
            return zuuluu;
 164:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[golfie];
            report = tangon.bind(entity)(report);
            option = report.intl;
            report = option.formatToPlainString;
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.BWqf0d;
            zuuluu = {};
            zuuluu['hours'] = verify;
            zuuluu = report.bind(option)(tangon, zuuluu);
            return zuuluu;
 228:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = michal[golfie];
            tangon = zuuluu.bind(entity)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = michal[golfie];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.t;
            zuuluu = michal.dex68f;
            michal = {};
            michal['days'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 292:
            return entity;
        }
    };
    var _closure1_slot3 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/polls/chat/useFormattedExpirationLabel.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useFormattedExpirationLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            entity = undefined;
            return entity;
 13:
            michal = _closure1_slot3;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['formatExpirationLabel'] = michal;
    return entity;
})();