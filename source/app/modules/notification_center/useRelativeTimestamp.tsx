// app/modules/notification_center/useRelativeTimestamp.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notification_center/useRelativeTimestamp.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useRelativeTimestamp
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.timestamp;
            var _closure2_slot0 = golfie;
            oscard = entity.abbreviated;
            option = undefined;
            if(!(oscard === option)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            oscard = true;
 29:
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = option;
            report = _closure1_slot4;
            tangon = report.useState;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getRelativeTimestamp;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot3;
            entity = 2;
            tangon = zuuluu.bind(option)(tangon, entity);
            entity = 0;
            entity = tangon[entity];
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            _closure2_slot2 = zuuluu;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure2_slot2;
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 2;
                    golfie = oscard[entity];
                    entity = undefined;
                    verify = option.bind(entity)(golfie);
                    option = verify.getRelativeTimestamp;
                    golfie = _closure2_slot0;
                    zuuluu = _closure2_slot1;
                    zuuluu = option.bind(verify)(golfie, zuuluu);
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = global;
                    option = tangon.Date;
                    zuuluu = option.now;
                    zuuluu = zuuluu.bind(option)();
                    zuuluu = zuuluu - golfie;
                    golfie = _closure1_slot1;
                    option = 3;
                    oscard = oscard[option];
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.Millis;
                    oscard = oscard.DAY;
                    if(!(!(zuuluu > oscard))) { _fun00004_ip = 249; continue _fun00003 }
 115:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.Millis;
                    oscard = oscard.HOUR;
                    if(!(!(zuuluu >= oscard))) { _fun00004_ip = 179; continue _fun00003 }
 148:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    oscard = golfie.bind(entity)(oscard);
                    oscard = oscard.Millis;
                    oscard = oscard.MINUTE;
                    _fun00004_ip = 208; continue _fun00003;
 179:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[option];
                    report = golfie.bind(entity)(report);
                    report = report.Millis;
                    oscard = report.HOUR;
 208:
                    report = tangon.setInterval;
                    zuuluu = zuuluu % oscard;
                    tangon = oscard - zuuluu;
                    zuuluu = function() {
                        zuuluu = _closure2_slot2;
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        entity = 2;
                        tangon = tangon[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        report = oscard.getRelativeTimestamp;
                        tangon = _closure2_slot0;
                        michal = _closure2_slot1;
                        michal = report.bind(oscard)(tangon, michal);
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    zuuluu = report.bind(entity)(zuuluu, oscard, tangon);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        entity = global;
                        zuuluu = entity.clearInterval;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return michal;
 249:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useRelativeTimestamp'] = michal;
    return entity;
})();