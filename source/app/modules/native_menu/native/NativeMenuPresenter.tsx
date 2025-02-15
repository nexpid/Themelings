// app/modules/native_menu/native/NativeMenuPresenter.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/native_menu/native/NativeMenuPresenter.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: MenuContainer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            options = _closure1_slot2;
            entity = 3;
            entity = options[entity];
            tango = undefined;
            verify = report.bind(tango)(entity);
            golf = verify.useStateFromStoresObject;
            entity = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = entity;
            report = function() {
                entity = {};
                zulu = _closure1_slot4;
                mike = zulu.getKey;
                mike = mike.bind(zulu)();
                entity['key'] = mike;
                mike = zulu.getMenu;
                mike = mike.bind(zulu)();
                entity['menu'] = mike;
                return entity;
            };
            entity = new Array(0);
            report = golf.bind(verify)(oscar, report, entity);
            entity = report.key;
            var _closure2_slot0 = entity;
            oscar = report.menu;
            verify = _closure1_slot3;
            golf = verify.useCallback;
            report = new Array(1);
            report[0] = entity;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00004_ip = 56; continue _fun00003 }
 16:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 4;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.hideNativeMenu;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            report = golf.bind(verify)(zulu, report);
            golf = _closure1_slot1;
            zulu = 5;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.bind(tango)(report);
            zulu = _closure1_slot6;
            mike = _closure1_slot5;
            report = null;
            if(!(report != entity)) { _fun00002_ip = 147; continue _fun00001 }
 143:
            if(!(report == oscar)) { _fun00002_ip = 155; continue _fun00001 }
 147:
            entity = {};
            entity['children'] = report;
            _fun00002_ip = 164; continue _fun00001;
 155:
            report = {};
            report['children'] = oscar;
            entity = report;
 164:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();