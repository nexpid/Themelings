// app/modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = report;
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
    var _closure1_slot2 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useExternalPipAspectRatioUpdater
        report = argBar;
        zuuluu = argBaz;
        var _closure2_slot0 = report;
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot2;
        michal = tangon.useRef;
        michal = michal.bind(tangon)(zuuluu);
        var _closure2_slot2 = michal;
        zuuluu = tangon.useInsertionEffect;
        michal = function() {
            michal = _closure2_slot2;
            entity = _closure2_slot1;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot0;
            tangon = zuuluu.getTargetDimensions;
            michal = _closure2_slot2;
            michal = michal.current;
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 1;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.setPipAspectRatio;
            tangon = michal.width;
            michal = michal.height;
            michal = report.bind(oscard)(tangon, michal);
            michal = zuuluu.subscribeFromItem;
            entity = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.getTargetDimensions;
                    entity = _closure2_slot2;
                    entity = entity.current;
                    entity = michal.bind(zuuluu)(entity);
                    tangon = entity.width;
                    zuuluu = entity.height;
                    entity = _closure3_slot0;
                    entity = entity.width;
                    entity = tangon === entity;
                    if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 56:
                    report = _closure3_slot0;
                    report = report.height;
                    entity = zuuluu === report;
 69:
                    if(entity) { _fun00002_ip = 123; continue _fun00001 }
 72:
                    entity = {};
                    entity['width'] = tangon;
                    entity['height'] = zuuluu;
                    _closure3_slot0 = entity;
                    report = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 1;
                    michal = michal[entity];
                    entity = undefined;
                    michal = report.bind(entity)(michal);
                    entity = michal.setPipAspectRatio;
                    entity = entity.bind(michal)(tangon, zuuluu);
 123:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();