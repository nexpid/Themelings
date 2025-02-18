// app/modules/user_settings/UserSettingSearchStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
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
    golfie = tangon.createZustandStore;
    tangon = function() {
        entity = {'query': '', 'isActive': false, 'selected': null};
        return entity;
    };
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/UserSettingSearchStore.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: setSelectedSearchResult
        zuuluu = _closure1_slot0;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['selected'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['setSelectedSearchResult'] = tangon;
    tangon = function() { // Original name: getSelectedSearchResult
        zuuluu = _closure1_slot0;
        michal = zuuluu.getField;
        entity = 'selected';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getSelectedSearchResult'] = tangon;
    tangon = function() { // Original name: useSelectedSearchResult
        zuuluu = _closure1_slot0;
        michal = zuuluu.useField;
        entity = 'selected';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useSelectedSearchResult'] = tangon;
    tangon = function() { // Original name: clearSelectedSearchResult
        zuuluu = _closure1_slot0;
        michal = zuuluu.setState;
        entity = {};
        tangon = null;
        entity['selected'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['clearSelectedSearchResult'] = tangon;
    tangon = function(argFoo) { // Original name: setSettingSearchQuery
        zuuluu = _closure1_slot0;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['query'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['setSettingSearchQuery'] = tangon;
    tangon = function(argFoo) { // Original name: setIsSettingSearchActive
        zuuluu = _closure1_slot0;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['isActive'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['setIsSettingSearchActive'] = tangon;
    tangon = function() { // Original name: useIsSettingSearchActive
        zuuluu = _closure1_slot0;
        michal = zuuluu.useField;
        entity = 'isActive';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useIsSettingSearchActive'] = tangon;
    tangon = function() { // Original name: getIsSettingSearchActive
        zuuluu = _closure1_slot0;
        michal = zuuluu.getField;
        entity = 'isActive';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getIsSettingSearchActive'] = tangon;
    tangon = function() { // Original name: useSettingSearchQuery
        zuuluu = _closure1_slot0;
        michal = zuuluu.useField;
        entity = 'query';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useSettingSearchQuery'] = tangon;
    tangon = function() { // Original name: useIsSettingSearchQueryEmpty
        tangon = _closure1_slot0;
        zuuluu = tangon.useState;
        michal = function(argFoo) {
            entity = argFoo;
            michal = entity.query;
            entity = michal.trim;
            michal = entity.bind(michal)();
            entity = '';
            entity = entity === michal;
            return entity;
        };
        entity = function(argFoo, argBar) {
            michal = argFoo;
            entity = argBar;
            entity = michal === entity;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsSettingSearchQueryEmpty'] = tangon;
    michal = function() { // Original name: getSettingSearchQuery
        zuuluu = _closure1_slot0;
        michal = zuuluu.getField;
        entity = 'query';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getSettingSearchQuery'] = michal;
    return entity;
})();