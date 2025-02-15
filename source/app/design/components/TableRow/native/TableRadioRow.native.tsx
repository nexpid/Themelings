// app/design/components/TableRow/native/TableRadioRow.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/TableRow/native/TableRadioRow.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: TableRadioRow
        _fun63769: for(var _fun63769_ip = 0; ; ) switch(_fun63769_ip) {
 0:
            report = argFoo;
            mike = report.value;
            var _closure2_slot0 = mike;
            kilo = report.label;
            backup = report.subLabel;
            yankee = report.disabled;
            tango = undefined;
            if(!(yankee === tango)) { _fun63769_ip = 38; continue _fun63769 }
 36:
            yankee = false;
 38:
            verify = report.accessibilityHint;
            options = report.legacyCompat_selected;
            entity = report.legacyCompat_onPress;
            var _closure2_slot1 = entity;
            zulu = {'value': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0, 'legacyCompat_selected': 0, 'legacyCompat_onPress': 0};
            offset = null;
            echo = zulu;
            result = null;
            entity = silentSetPrototypeOf(echo, result);
            echo = {};
            result = report;
            output = zulu;
            romeo = copyDataProperties(echo, result, output);
            var _closure2_slot2 = tango;
            golf = _closure1_slot2;
            zulu = golf.useContext;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot1;
            entity = 2;
            entity = sizing[entity];
            entity = foxtrot.bind(tango)(entity);
            entity = entity.TableRadioGroupContext;
            zulu = zulu.bind(golf)(entity);
            entity = zulu.selectedValue;
            zulu = zulu.onSelect;
            _closure2_slot2 = zulu;
            if(!(offset == options)) { _fun63769_ip = 169; continue _fun63769 }
 165:
            options = entity === mike;
 169:
            mike = _closure1_slot0;
            sizing = _closure1_slot1;
            entity = 3;
            zulu = sizing[entity];
            golf = mike.bind(tango)(zulu);
            zulu = golf.getNodeText;
            foxtrot = zulu.bind(golf)(kilo);
            entity = sizing[entity];
            zulu = mike.bind(tango)(entity);
            entity = zulu.getNodeText;
            golf = entity.bind(zulu)(backup);
            zulu = _closure1_slot3;
            entity = 4;
            entity = sizing[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            echo = entity;
            result = romeo;
            romeo = copyDataProperties(echo, result);
            sizing = false;
            romeo = 'arrow';
            entity[romeo] = sizing;
            romeo = 'label';
            entity[romeo] = kilo;
            romeo = 'subLabel';
            entity[romeo] = backup;
            romeo = 'disabled';
            entity[romeo] = yankee;
            romeo = {};
            romeo['disabled'] = yankee;
            romeo['selected'] = options;
            yankee = 'accessibilityState';
            entity[yankee] = romeo;
            romeo = true;
            yankee = 'accessible';
            entity[yankee] = romeo;
            romeo = 'radio';
            yankee = 'accessibilityRole';
            entity[yankee] = romeo;
            offset = offset != golf;
            romeo = '';
            yankee = romeo;
            if(!offset) { _fun63769_ip = 353; continue _fun63769 }
 350:
            yankee = golf;
 353:
            golf = global;
            golf = golf.HermesInternal;
            offset = golf.concat;
            golf = ', ';
            offset = offset.bind(romeo)(foxtrot, golf, yankee);
            golf = 'accessibilityLabel';
            entity[golf] = offset;
            golf = 'accessibilityHint';
            entity[golf] = verify;
            golf = function(argFoo) { // Original name: onPress
                _fun63770: for(var _fun63770_ip = 0; ; ) switch(_fun63770_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun63770_ip = 27; continue _fun63770 }
 13:
                    tango = _closure2_slot1;
                    zulu = undefined;
                    mike = argFoo;
                    mike = tango.bind(zulu)(mike);
 27:
                    zulu = _closure2_slot2;
                    mike = _closure2_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            oscar = 'onPress';
            entity[oscar] = golf;
            golf = _closure1_slot3;
            oscar = _closure1_slot0;
            verify = _closure1_slot1;
            report = 5;
            report = verify[report];
            report = oscar.bind(tango)(report);
            oscar = report.FormRadio;
            report = {};
            report['selected'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = 'trailing';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TableRadioRow'] = mike;
    return entity;
})();