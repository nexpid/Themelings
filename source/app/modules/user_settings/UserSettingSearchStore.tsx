// app/modules/user_settings/UserSettingSearchStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.createZustandStore;
    tango = function() {
        entity = {'query': '', 'isActive': false, 'selected': null};
        return entity;
    };
    tango = golf.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/UserSettingSearchStore.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: setSelectedSearchResult
        zulu = _closure1_slot0;
        mike = zulu.setState;
        entity = {};
        tango = argFoo;
        entity['selected'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['setSelectedSearchResult'] = tango;
    tango = function() { // Original name: getSelectedSearchResult
        zulu = _closure1_slot0;
        mike = zulu.getField;
        entity = 'selected';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getSelectedSearchResult'] = tango;
    tango = function() { // Original name: useSelectedSearchResult
        zulu = _closure1_slot0;
        mike = zulu.useField;
        entity = 'selected';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useSelectedSearchResult'] = tango;
    tango = function() { // Original name: clearSelectedSearchResult
        zulu = _closure1_slot0;
        mike = zulu.setState;
        entity = {};
        tango = null;
        entity['selected'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['clearSelectedSearchResult'] = tango;
    tango = function(argFoo) { // Original name: setSettingSearchQuery
        zulu = _closure1_slot0;
        mike = zulu.setState;
        entity = {};
        tango = argFoo;
        entity['query'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['setSettingSearchQuery'] = tango;
    tango = function(argFoo) { // Original name: setIsSettingSearchActive
        zulu = _closure1_slot0;
        mike = zulu.setState;
        entity = {};
        tango = argFoo;
        entity['isActive'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['setIsSettingSearchActive'] = tango;
    tango = function() { // Original name: useIsSettingSearchActive
        zulu = _closure1_slot0;
        mike = zulu.useField;
        entity = 'isActive';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useIsSettingSearchActive'] = tango;
    tango = function() { // Original name: getIsSettingSearchActive
        zulu = _closure1_slot0;
        mike = zulu.getField;
        entity = 'isActive';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getIsSettingSearchActive'] = tango;
    tango = function() { // Original name: useSettingSearchQuery
        zulu = _closure1_slot0;
        mike = zulu.useField;
        entity = 'query';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useSettingSearchQuery'] = tango;
    tango = function() { // Original name: useIsSettingSearchQueryEmpty
        tango = _closure1_slot0;
        zulu = tango.useState;
        mike = function(argFoo) {
            entity = argFoo;
            mike = entity.query;
            entity = mike.trim;
            mike = entity.bind(mike)();
            entity = '';
            entity = entity === mike;
            return entity;
        };
        entity = function(argFoo, argBar) {
            mike = argFoo;
            entity = argBar;
            entity = mike === entity;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsSettingSearchQueryEmpty'] = tango;
    mike = function() { // Original name: getSettingSearchQuery
        zulu = _closure1_slot0;
        mike = zulu.getField;
        entity = 'query';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getSettingSearchQuery'] = mike;
    return entity;
})();