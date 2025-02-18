// app/modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo) { // Original name: shouldDisplayCancel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 12:
            zuuluu = global;
            tangon = zuuluu.Date;
            zuuluu = tangon.now;
            zuuluu = zuuluu.bind(tangon)();
            michal = michal.startedAt;
            zuuluu = zuuluu - michal;
            michal = _closure1_slot2;
            entity = zuuluu > michal;
 50:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    oscard = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot1 = tangon;
    tangon = 6000;
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShouldDisplayCancelConsoleTransfer
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot1;
        tangon = report.useState;
        zuuluu = function() {
            zuuluu = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        golfie = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(golfie, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot1 = zuuluu;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = _closure1_slot3;
                golfie = _closure2_slot0;
                entity = undefined;
                report = report.bind(entity)(golfie);
                oscard = _closure2_slot1;
                oscard = oscard.bind(entity)(report);
                oscard = null;
                if(!(oscard != golfie)) { _fun00004_ip = 112; continue _fun00003 }
 38:
                if(report) { _fun00004_ip = 112; continue _fun00003 }
 41:
                oscard = global;
                report = oscard.setTimeout;
                tangon = _closure1_slot2;
                golfie = oscard.Date;
                oscard = golfie.now;
                oscard = oscard.bind(golfie)();
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.startedAt;
                zuuluu = oscard - zuuluu;
                tangon = tangon - zuuluu;
                zuuluu = function() {
                    zuuluu = _closure2_slot1;
                    tangon = _closure1_slot3;
                    entity = _closure2_slot0;
                    michal = undefined;
                    entity = tangon.bind(michal)(entity);
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                zuuluu = report.bind(entity)(zuuluu, tangon);
                var _closure3_slot0 = zuuluu;
                michal = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    michal = _closure3_slot0;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return michal;
 112:
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();