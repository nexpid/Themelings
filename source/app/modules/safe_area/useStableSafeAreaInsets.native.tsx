// app/modules/safe_area/useStableSafeAreaInsets.native.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function() { // Original name: getStableSafeAreaInsets
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 69; continue _fun00001 }
 37:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.getSafeAreaInsets;
            entity = entity.bind(zuuluu)();
            _fun00002_ip = 99; continue _fun00001;
 69:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 3;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getStableSafeAreaInsets;
            entity = michal.bind(zuuluu)();
 99:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/safe_area/useStableSafeAreaInsets.native.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: useStableSafeAreaInsets
        report = _closure1_slot4;
        tangon = report.useState;
        zuuluu = _closure1_slot5;
        oscard = undefined;
        zuuluu = zuuluu.bind(oscard)();
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot3;
        entity = 2;
        tangon = zuuluu.bind(oscard)(tangon, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot0 = zuuluu;
        tangon = report.useEffect;
        zuuluu = function() {
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 5;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = function() {
                zuuluu = _closure2_slot0;
                michal = _closure1_slot5;
                entity = undefined;
                michal = michal.bind(entity)();
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getStableSafeAreaInsets'] = michal;
    return entity;
})();