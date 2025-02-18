// app/modules/potions/hooks/useDisableConfettiModeOnFocusChange.native.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/potions/hooks/useDisableConfettiModeOnFocusChange.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: _default
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 2;
        tangon = tangon[entity];
        entity = undefined;
        golfie = report.bind(entity)(tangon);
        oscard = golfie.useStateFromStores;
        tangon = _closure1_slot4;
        report = new Array(1);
        report[0] = tangon;
        tangon = function() {
            michal = _closure1_slot4;
            entity = michal.getState;
            michal = entity.bind(michal)();
            entity = 'active';
            entity = entity === michal;
            return entity;
        };
        oscard = oscard.bind(golfie)(report, tangon);
        var _closure2_slot0 = oscard;
        report = _closure1_slot3;
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00002_ip = 59; continue _fun00001 }
 10:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dispatch;
                entity = {'type': 'POTIONS_SET_CONFETTI_MODE', 'enabled': false};
                entity = michal.bind(zuuluu)(entity);
 59:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();