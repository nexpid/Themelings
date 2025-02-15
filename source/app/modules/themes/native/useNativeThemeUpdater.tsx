// app/modules/themes/native/useNativeThemeUpdater.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/themes/native/useNativeThemeUpdater.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useNativeThemeUpdater
        tango = _closure1_slot2;
        zulu = tango.useRef;
        mike = _closure1_slot3;
        mike = mike.theme;
        mike = zulu.bind(tango)(mike);
        var _closure2_slot0 = mike;
        zulu = tango.useLayoutEffect;
        mike = function() {
            tango = function() { // Original name: handleThemeUpdate
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure1_slot3;
                    zulu = mike.theme;
                    tango = _closure2_slot0;
                    tango = tango.current;
                    if(!(zulu !== tango)) { _fun00002_ip = 72; continue _fun00001 }
 29:
                    mike = _closure2_slot0;
                    mike['current'] = zulu;
                    tango = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    entity = mike.updateTheme;
                    entity = entity.bind(mike)(zulu);
 72:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = tango;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 2;
            report = report[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.updateTheme;
            zulu = _closure1_slot3;
            mike = zulu.theme;
            mike = report.bind(oscar)(mike);
            mike = zulu.addChangeListener;
            mike = mike.bind(zulu)(tango);
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.removeChangeListener;
                entity = _closure3_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();