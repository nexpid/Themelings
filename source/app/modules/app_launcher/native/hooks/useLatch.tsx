// app/modules/app_launcher/native/hooks/useLatch.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/hooks/useLatch.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useLatch
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        zuuluu = report.useRef;
        entity = false;
        entity = zuuluu.bind(report)(entity);
        var _closure2_slot1 = entity;
        entity = {};
        golfie = report.useCallback;
        tangon = function(argFoo) {
            entity = argFoo;
            michal = _closure2_slot1;
            michal['current'] = entity;
            return entity;
        };
        zuuluu = new Array(0);
        zuuluu = golfie.bind(report)(tangon, zuuluu);
        entity['setLatch'] = zuuluu;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot1;
                michal = michal.current;
                if(!michal) { _fun00002_ip = 37; continue _fun00001 }
 15:
                zuuluu = _closure2_slot1;
                michal = false;
                zuuluu['current'] = michal;
                michal = _closure2_slot0;
                entity = undefined;
                entity = michal.bind(entity)();
 37:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['tryCallback'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();