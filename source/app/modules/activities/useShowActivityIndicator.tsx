// app/modules/activities/useShowActivityIndicator.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useShowActivityIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() {
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.getState;
            entity = entity.bind(michal)();
            entity = entity.shouldShowNewActivityIndicator;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useShowActivityIndicator'] = michal;
    return entity;
})();