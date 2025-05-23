// app/modules/collectibles/hooks/useNameplateFilter.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useCallback;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/useNameplateFilter.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNameplateFilter
        tangon = _closure1_slot2;
        zuuluu = undefined;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.items;
                michal = zuuluu.some;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.type;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 1;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu);
                    entity = entity.CollectiblesItemType;
                    entity = entity.NAMEPLATE;
                    entity = michal === entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = new Array(0);
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useNameplateFilter'] = michal;
    return entity;
})();