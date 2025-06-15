// app/modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx
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
    tangon = 'modules/premium/gifting/hooks/useIsGiftingPromotionActiveNow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useIsGiftingPromotionActiveNow
        report = _closure1_slot1;
        zuuluu = _closure1_slot2;
        golfie = 2;
        zuuluu = zuuluu[golfie];
        tangon = undefined;
        report = report.bind(tangon)(zuuluu);
        zuuluu = argFoo;
        oscard = report.bind(tangon)(zuuluu);
        var _closure2_slot0 = oscard;
        report = _closure1_slot4;
        option = report.useState;
        zuuluu = function() {
            zuuluu = _closure2_slot0;
            michal = zuuluu.isAfter;
            entity = global;
            tangon = entity.Date;
            entity = tangon.now;
            entity = entity.bind(tangon)();
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = option.bind(report)(zuuluu);
        entity = _closure1_slot3;
        tangon = entity.bind(tangon)(zuuluu, golfie);
        entity = 0;
        entity = tangon[entity];
        var _closure2_slot1 = entity;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot2 = zuuluu;
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = entity;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00002_ip = 16; continue _fun00001 }
 12:
                michal = undefined;
                return michal;
 16:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 3;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                michal = michal.Timeout;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                oscard = tangon;
                michal = new oscard[michal](report);
                michal = michal instanceof Object ? michal : tangon;
                var _closure3_slot0 = michal;
                michal = function() { // Original name: startTimer
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = global;
                        tangon = entity.Math;
                        zuuluu = tangon.min;
                        oscard = _closure2_slot0;
                        report = oscard.diff;
                        michal = entity.Date;
                        entity = michal.now;
                        michal = entity.bind(michal)();
                        entity = 'millisecond';
                        michal = report.bind(oscard)(michal, entity);
                        entity = 86400000;
                        tangon = zuuluu.bind(tangon)(michal, entity);
                        zuuluu = _closure3_slot0;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 98; continue _fun00003 }
 76:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.start;
                        entity = function() {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                tangon = _closure2_slot0;
                                zuuluu = tangon.isBefore;
                                michal = global;
                                report = michal.Date;
                                michal = report.now;
                                michal = michal.bind(report)();
                                michal = zuuluu.bind(tangon)(michal);
                                if(michal) { _fun00006_ip = 53; continue _fun00005 }
 38:
                                zuuluu = _closure3_slot1;
                                michal = undefined;
                                michal = zuuluu.bind(michal)();
                                _fun00006_ip = 66; continue _fun00005;
 53:
                                zuuluu = _closure2_slot2;
                                michal = undefined;
                                entity = false;
                                entity = zuuluu.bind(michal)(entity);
 66:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(tangon, entity);
 98:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot1 = michal;
                michal = michal.bind(zuuluu)();
                entity = function() {
                    michal = _closure3_slot0;
                    entity = michal.stop;
                    entity = entity.bind(michal)();
                    return entity;
                };
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useIsGiftingPromotionActiveNow'] = michal;
    return entity;
})();