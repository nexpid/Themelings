// app/uikit-native/refresh/form/FormSwitchRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: FormSwitchRow
        _fun63741: for(var _fun63741_ip = 0; ; ) switch(_fun63741_ip) {
 0:
            report = argFoo;
            verify = report.onValueChange;
            var _closure2_slot0 = verify;
            offset = report.value;
            var _closure2_slot1 = offset;
            yankee = report.disabled;
            tango = undefined;
            if(!(yankee === tango)) { _fun63741_ip = 37; continue _fun63741 }
 35:
            yankee = false;
 37:
            sequence = report.label;
            sizing = report.subLabel;
            golf = report.accessibilityHint;
            source = report.trailing;
            config = report.numberOfLines;
            options = report.switchProps;
            if(!(options === tango)) { _fun63741_ip = 78; continue _fun63741 }
 76:
            options = {};
 78:
            zulu = {'onValueChange': 0, 'value': 0, 'disabled': 0, 'label': 0, 'subLabel': 0, 'accessibilityHint': 0, 'trailing': 0, 'numberOfLines': 0, 'switchProps': 0};
            update = null;
            target = zulu;
            papa = null;
            entity = silentSetPrototypeOf(target, papa);
            entity = 0;
            target = {};
            papa = report;
            context = zulu;
            kilo = copyDataProperties(target, papa, context);
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.isAndroid;
            backup = mike.bind(zulu)();
            zulu = _closure1_slot4;
            mike = zulu.useState;
            oscar = mike.bind(zulu)(offset);
            zulu = _closure1_slot3;
            mike = 2;
            mike = zulu.bind(tango)(oscar, mike);
            oscar = mike[entity];
            _closure2_slot2 = oscar;
            entity = 1;
            entity = mike[entity];
            _closure2_slot3 = entity;
            foxtrot = _closure1_slot4;
            zulu = foxtrot.useEffect;
            mike = new Array(1);
            mike[0] = offset;
            entity = function() {
                zulu = _closure2_slot3;
                mike = _closure2_slot1;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = zulu.bind(foxtrot)(entity, mike);
            foxtrot = 'string';
            entity = typeof sequence;
            mike = undefined;
            if(!(foxtrot === entity)) { _fun63741_ip = 247; continue _fun63741 }
 244:
            mike = sequence;
 247:
            entity = update != mike;
            if(!entity) { _fun63741_ip = 261; continue _fun63741 }
 254:
            zulu = typeof sizing;
            entity = foxtrot === zulu;
 261:
            foxtrot = mike;
            if(!entity) { _fun63741_ip = 293; continue _fun63741 }
 267:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = ' ';
            entity = zulu.bind(entity)(sizing);
            foxtrot = mike + entity;
 293:
            zulu = _closure1_slot6;
            control = _closure1_slot1;
            record = _closure1_slot2;
            entity = 5;
            entity = record[entity];
            mike = control.bind(tango)(entity);
            entity = {};
            target = entity;
            papa = kilo;
            kilo = copyDataProperties(target, papa);
            result = _closure1_slot7;
            output = _closure1_slot5;
            kilo = {};
            echo = _closure1_slot8;
            echo = echo.trailing;
            kilo['style'] = echo;
            vacuum = _closure1_slot6;
            echo = 6;
            echo = record[echo];
            control = control.bind(tango)(echo);
            echo = {};
            echo['numberOfLines'] = config;
            echo['text'] = sequence;
            control = vacuum.bind(tango)(control, echo);
            echo = new Array(2);
            echo[0] = control;
            update = update != source;
            if(!update) { _fun63741_ip = 404; continue _fun63741 }
 401:
            update = source;
 404:
            echo[1] = update;
            kilo['children'] = echo;
            output = result.bind(tango)(output, kilo);
            kilo = 'label';
            entity[kilo] = output;
            kilo = 'subLabel';
            entity[kilo] = sizing;
            kilo = 'disabled';
            entity[kilo] = yankee;
            kilo = undefined;
            if(!backup) { _fun63741_ip = 455; continue _fun63741 }
 450:
            kilo = function() {
                _fun63743: for(var _fun63743_ip = 0; ; ) switch(_fun63743_ip) {
 0:
                    mike = _closure2_slot0;
                    tango = null;
                    mike = tango != mike;
                    if(!mike) { _fun63743_ip = 24; continue _fun63743 }
 16:
                    zulu = _closure2_slot1;
                    mike = tango != zulu;
 24:
                    if(!mike) { _fun63743_ip = 45; continue _fun63743 }
 27:
                    zulu = _closure2_slot0;
                    entity = _closure2_slot1;
                    mike = !entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 45:
                    entity = undefined;
                    return entity;
                }
            };
 455:
            backup = 'onPress';
            entity[backup] = kilo;
            kilo = true;
            backup = 'accessible';
            entity[backup] = kilo;
            backup = function() { // Original name: onAccessibilityTap
                zulu = _closure2_slot3;
                entity = _closure2_slot2;
                mike = !entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                mike = global;
                zulu = mike.setTimeout;
                mike = function() {
                    _fun63745: for(var _fun63745_ip = 0; ; ) switch(_fun63745_ip) {
 0:
                        zulu = _closure2_slot0;
                        mike = null;
                        if(!(mike != zulu)) { _fun63745_ip = 31; continue _fun63745 }
 13:
                        zulu = _closure2_slot0;
                        entity = _closure2_slot2;
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
            romeo = 'onAccessibilityTap';
            entity[romeo] = backup;
            backup = 'switch';
            romeo = 'accessibilityRole';
            entity[romeo] = backup;
            romeo = 'accessibilityLabel';
            entity[romeo] = foxtrot;
            romeo = {};
            romeo['disabled'] = yankee;
            romeo['checked'] = oscar;
            oscar = 'accessibilityState';
            entity[oscar] = romeo;
            oscar = 'accessibilityHint';
            entity[oscar] = golf;
            golf = _closure1_slot6;
            oscar = _closure1_slot1;
            romeo = _closure1_slot2;
            report = 7;
            report = romeo[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['disabled'] = yankee;
            report['value'] = offset;
            report['onValueChange'] = verify;
            target = report;
            papa = options;
            options = copyDataProperties(target, papa);
            oscar = golf.bind(tango)(oscar, report);
            report = 'trailing';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot5 = golf;
    options = tango.StyleSheet;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    golf = options.create;
    tango = {};
    verify = {'flex': 1, 'flexDirection': 'row', 'width': '100%', 'alignItems': 'center'};
    tango['trailing'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/refresh/form/FormSwitchRow.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: FormSwitchRowContainer
        _fun63746: for(var _fun63746_ip = 0; ; ) switch(_fun63746_ip) {
 0:
            verify = argFoo;
            zulu = _closure1_slot4;
            mike = zulu.useContext;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.RedesignCompatContext;
            entity = mike.bind(zulu)(entity);
            tango = _closure1_slot6;
            if(entity) { _fun63746_ip = 80; continue _fun63746 }
 56:
            mike = _closure1_slot9;
            entity = {};
            romeo = entity;
            yankee = verify;
            zulu = copyDataProperties(romeo, yankee);
            entity = tango.bind(report)(mike, entity);
            _fun63746_ip = 174; continue _fun63746;
 80:
            zulu = _closure1_slot5;
            mike = {};
            golf = verify.DEPRECATED_style;
            mike['style'] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 9;
            oscar = offset[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.TableSwitchRow;
            oscar = {};
            offset = verify.value;
            oscar['value'] = offset;
            offset = verify.onValueChange;
            oscar['onValueChange'] = offset;
            romeo = oscar;
            yankee = verify;
            verify = copyDataProperties(romeo, yankee);
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 174:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();