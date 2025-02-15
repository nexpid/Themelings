// app/hooks/useTheme.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function() { // Original name: useTheme
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.useThemeContext;
        entity = entity.bind(mike)();
        entity = entity.theme;
        return entity;
    };
    var _closure1_slot3 = report;
    mike = function(argFoo) { // Original name: getThemeIndex
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot2;
            zulu = zulu.DARK;
            if(!(zulu !== mike)) { _fun00002_ip = 43; continue _fun00001 }
 20:
            entity = _closure1_slot2;
            entity = entity.LIGHT;
            if(!(entity !== mike)) { _fun00002_ip = 38; continue _fun00001 }
 34:
            entity = undefined;
            return entity;
 38:
            entity = 1;
            return entity;
 43:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ThemeTypes;
    var _closure1_slot2 = oscar;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'hooks/useTheme.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['useTheme'] = report;
    tango = function() { // Original name: useThemeIndex
        zulu = _closure1_slot4;
        entity = _closure1_slot3;
        mike = undefined;
        entity = entity.bind(mike)();
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useThemeIndex'] = tango;
    zulu['getThemeIndex'] = mike;
    return entity;
})();