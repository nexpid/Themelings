// app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useDelayedSwapToActivityActionLeave
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot3;
        zuuluu = report.useState;
        golfie = zuuluu.bind(report)(oscard);
        tangon = _closure1_slot2;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(golfie, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot1 = zuuluu;
        tangon = report.useLayoutEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot0;
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 2;
                zuuluu = report[zuuluu];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                zuuluu = zuuluu.ActivityAction;
                zuuluu = zuuluu.LEAVE;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 65; continue _fun00001 }
 50:
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                michal = zuuluu.bind(report)(michal);
                return report;
 65:
                michal = global;
                tangon = michal.setTimeout;
                zuuluu = function() {
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = 100;
                michal = tangon.bind(report)(zuuluu, michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    michal = _closure3_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useDelayedSwapToActivityActionLeave'] = michal;
    return entity;
})();