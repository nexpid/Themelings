// app/design/components/TableRow/native/TableSwitchRow.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/TableRow/native/TableSwitchRow.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: TableSwitchRow
        _fun63743: for(var _fun63743_ip = 0; ; ) switch(_fun63743_ip) {
 0:
            report = argFoo;
            offset = report.value;
            var _closure2_slot0 = offset;
            entity = report.onValueChange;
            var _closure2_slot1 = entity;
            result = report.label;
            sizing = report.subLabel;
            options = report.disabled;
            tango = undefined;
            if(!(options === tango)) { _fun63743_ip = 48; continue _fun63743 }
 46:
            options = false;
 48:
            foxtrot = report.accessibilityHint;
            zulu = {'value': 0, 'onValueChange': 0, 'label': 0, 'subLabel': 0, 'disabled': 0, 'accessibilityHint': 0};
            backup = null;
            sequence = zulu;
            vacuum = null;
            entity = silentSetPrototypeOf(sequence, vacuum);
            entity = 0;
            sequence = {};
            vacuum = report;
            control = zulu;
            kilo = copyDataProperties(sequence, vacuum, control);
            var _closure2_slot2 = tango;
            mike = _closure1_slot0;
            echo = _closure1_slot1;
            zulu = 3;
            zulu = echo[zulu];
            golf = mike.bind(tango)(zulu);
            zulu = golf.isAndroid;
            golf = zulu.bind(golf)();
            verify = function() { // Original name: handleOnPress
                _fun63744: for(var _fun63744_ip = 0; ; ) switch(_fun63744_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity == zulu;
                    tango = undefined;
                    entity = undefined;
                    if(zulu) { _fun63744_ip = 36; continue _fun63744 }
 20:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = !mike;
                    entity = zulu.bind(tango)(mike);
 36:
                    return entity;
                }
            };
            zulu = 4;
            yankee = echo[zulu];
            romeo = mike.bind(tango)(yankee);
            yankee = romeo.getNodeText;
            output = yankee.bind(romeo)(result);
            zulu = echo[zulu];
            yankee = mike.bind(tango)(zulu);
            zulu = yankee.getNodeText;
            romeo = zulu.bind(yankee)(sizing);
            source = _closure1_slot3;
            zulu = source.useState;
            update = zulu.bind(source)(offset);
            yankee = _closure1_slot2;
            zulu = 2;
            zulu = yankee.bind(tango)(update, zulu);
            yankee = zulu[entity];
            entity = 1;
            entity = zulu[entity];
            _closure2_slot2 = entity;
            update = source.useEffect;
            zulu = new Array(1);
            zulu[0] = offset;
            entity = function() {
                zulu = _closure2_slot2;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = update.bind(source)(entity, zulu);
            zulu = _closure1_slot4;
            entity = 5;
            entity = echo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {};
            sequence = entity;
            vacuum = kilo;
            kilo = copyDataProperties(sequence, vacuum);
            echo = false;
            kilo = 'arrow';
            entity[kilo] = echo;
            kilo = 'label';
            entity[kilo] = result;
            kilo = 'subLabel';
            entity[kilo] = sizing;
            kilo = 'disabled';
            entity[kilo] = options;
            kilo = {};
            kilo['disabled'] = options;
            kilo['checked'] = yankee;
            yankee = 'accessibilityState';
            entity[yankee] = kilo;
            yankee = true;
            kilo = 'accessible';
            entity[kilo] = yankee;
            sizing = 'switch';
            kilo = 'accessibilityRole';
            entity[kilo] = sizing;
            backup = backup != romeo;
            sizing = '';
            kilo = sizing;
            if(!backup) { _fun63743_ip = 376; continue _fun63743 }
 373:
            kilo = romeo;
 376:
            romeo = global;
            romeo = romeo.HermesInternal;
            backup = romeo.concat;
            romeo = ', ';
            backup = backup.bind(sizing)(output, romeo, kilo);
            romeo = 'accessibilityLabel';
            entity[romeo] = backup;
            romeo = 'accessibilityHint';
            entity[romeo] = foxtrot;
            romeo = undefined;
            if(!golf) { _fun63743_ip = 428; continue _fun63743 }
 425:
            romeo = verify;
 428:
            golf = 'onPress';
            entity[golf] = romeo;
            golf = function() { // Original name: onAccessibilityTap
                zulu = _closure2_slot2;
                entity = _closure2_slot0;
                mike = !entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = global;
                zulu = mike.setTimeout;
                mike = function() {
                    _fun63747: for(var _fun63747_ip = 0; ; ) switch(_fun63747_ip) {
 0:
                        zulu = _closure2_slot1;
                        mike = null;
                        if(!(mike != zulu)) { _fun63747_ip = 31; continue _fun63747 }
 13:
                        zulu = _closure2_slot1;
                        entity = _closure2_slot0;
                        mike = !entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 31:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            oscar = 'onAccessibilityTap';
            entity[oscar] = golf;
            golf = _closure1_slot4;
            oscar = _closure1_slot0;
            romeo = _closure1_slot1;
            report = 6;
            report = romeo[report];
            report = oscar.bind(tango)(report);
            oscar = report.FormSwitch;
            report = {};
            report['aria-hidden'] = yankee;
            report['value'] = offset;
            report['onValueChange'] = verify;
            report['disabled'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = 'trailing';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TableSwitchRow'] = mike;
    return entity;
})();