// app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = function() { // Original name: isActivitiesAllowed
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.isTablet;
        entity = !entity;
        return entity;
    };
    var _closure1_slot2 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useIsActivitiesEnabledForCurrentPlatform
        michal = _closure1_slot2;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    zuuluu['useIsActivitiesEnabledForCurrentPlatform'] = tangon;
    michal = function() { // Original name: getIsActivitiesEnabledForCurrentPlatform
        michal = _closure1_slot2;
        entity = undefined;
        entity = michal.bind(entity)();
        return entity;
    };
    zuuluu['getIsActivitiesEnabledForCurrentPlatform'] = michal;
    return entity;
})();