// app/design/components/TableRow/native/TableRadioGroup.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    tango = 1;
    report = golf[tango];
    tango = argCorge;
    options = tango.bind(entity)(report);
    var _closure1_slot3 = options;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    verify = tango.NOOP;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    report = options.createContext;
    tango = {};
    offset = null;
    tango['selectedValue'] = offset;
    tango['onSelect'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot5 = tango;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/TableRow/native/TableRadioGroup.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['TableRadioGroupContext'] = tango;
    mike = function(argFoo) { // Original name: TableRadioGroup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.children;
            report = entity.value;
            mike = entity.onChange;
            var _closure2_slot0 = mike;
            yankee = entity.title;
            verify = entity.hasIcons;
            tango = undefined;
            if(!(verify === tango)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            verify = true;
 44:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            options = _closure1_slot3;
            zulu = options.useState;
            oscar = zulu.bind(options)(report);
            report = _closure1_slot2;
            zulu = 2;
            report = report.bind(tango)(oscar, zulu);
            zulu = 0;
            foxtrot = report[zulu];
            _closure2_slot1 = foxtrot;
            zulu = 1;
            zulu = report[zulu];
            _closure2_slot2 = zulu;
            report = options.useContext;
            oscar = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 4;
            zulu = romeo[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.RedesignCompatContext;
            zulu = report.bind(options)(zulu);
            _closure2_slot3 = zulu;
            report = options.useCallback;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot2;
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    report = _closure2_slot0;
                    tango = null;
                    if(!(tango != report)) { _fun00004_ip = 36; continue _fun00003 }
 27:
                    mike = _closure2_slot0;
                    mike = mike.bind(entity)(zulu);
 36:
                    return entity;
                }
            };
            mike = report.bind(options)(mike, zulu);
            _closure2_slot4 = mike;
            report = options.useMemo;
            zulu = new Array(2);
            zulu[0] = foxtrot;
            zulu[1] = mike;
            mike = function() {
                entity = {};
                zulu = _closure2_slot1;
                entity['selectedValue'] = zulu;
                mike = _closure2_slot4;
                entity['onSelect'] = mike;
                return entity;
            };
            report = report.bind(options)(mike, zulu);
            zulu = _closure1_slot4;
            entity = _closure1_slot5;
            mike = entity.Provider;
            entity = {};
            entity['value'] = report;
            report = 5;
            report = romeo[report];
            report = oscar.bind(tango)(report);
            oscar = report.TableRowGroup;
            report = {};
            romeo = 'radiogroup';
            report['accessibilityRole'] = romeo;
            report['title'] = yankee;
            report['hasIcons'] = verify;
            verify = options.Children;
            options = verify.map;
            golf = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot3;
                    zulu = tango.isValidElement;
                    zulu = zulu.bind(tango)(mike);
                    if(!zulu) { _fun00006_ip = 61; continue _fun00005 }
 24:
                    zulu = mike.type;
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 6;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.TableRadioRow;
                    if(!(zulu !== entity)) { _fun00006_ip = 73; continue _fun00005 }
 61:
                    zulu = _closure2_slot3;
                    entity = null;
                    if(!zulu) { _fun00006_ip = 76; continue _fun00005 }
 73:
                    entity = mike;
 76:
                    return entity;
                }
            };
            golf = options.bind(verify)(offset, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TableRadioGroup'] = mike;
    return entity;
})();