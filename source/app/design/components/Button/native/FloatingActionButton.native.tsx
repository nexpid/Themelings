// app/design/components/Button/native/FloatingActionButton.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    offset = 0;
    report = golf[offset];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.createStyles;
    tango = {};
    verify = {'position': 'absolute', 'right': 16, 'bottom': 16};
    yankee = 3;
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.shadows;
    backup = yankee.SHADOW_HIGH;
    kilo = verify;
    yankee = copyDataProperties(kilo, backup);
    tango['button'] = verify;
    verify = {};
    yankee = 4;
    romeo = golf[yankee];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.FAB_BUTTON_SIZE;
    verify['minWidth'] = romeo;
    yankee = golf[yankee];
    yankee = oscar.bind(entity)(yankee);
    yankee = yankee.FAB_BUTTON_SIZE;
    verify['minHeight'] = yankee;
    verify['padding'] = offset;
    tango['iconButtonPill'] = verify;
    tango = report.bind(options)(tango);
    var _closure1_slot5 = tango;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Button/native/FloatingActionButton.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['useStyles'] = tango;
    mike = function(argFoo) { // Original name: FloatingActionButton
        _fun76249: for(var _fun76249_ip = 0; ; ) switch(_fun76249_ip) {
 0:
            tango = argFoo;
            yankee = tango.icon;
            golf = tango.positionBottom;
            var _closure2_slot0 = golf;
            verify = tango.accessibilityLabel;
            zulu = {'icon': 0, 'positionBottom': 0, 'accessibilityLabel': 0};
            sizing = null;
            output = zulu;
            mike = silentSetPrototypeOf(output, sizing);
            output = {};
            sizing = tango;
            kilo = zulu;
            oscar = copyDataProperties(output, sizing, kilo);
            mike = _closure1_slot5;
            tango = undefined;
            report = mike.bind(tango)();
            var _closure2_slot1 = report;
            options = _closure1_slot3;
            zulu = options.useMemo;
            mike = new Array(2);
            mike[0] = report;
            mike[1] = golf;
            entity = function() {
                _fun76250: for(var _fun76250_ip = 0; ; ) switch(_fun76250_ip) {
 0:
                    entity = _closure2_slot1;
                    mike = entity.button;
                    entity = new Array(2);
                    entity[0] = mike;
                    zulu = _closure2_slot0;
                    mike = null;
                    zulu = mike != zulu;
                    mike = undefined;
                    if(!zulu) { _fun76250_ip = 49; continue _fun76250 }
 36:
                    zulu = {};
                    tango = _closure2_slot0;
                    zulu['bottom'] = tango;
                    mike = zulu;
 49:
                    entity[1] = mike;
                    return entity;
                }
            };
            golf = zulu.bind(options)(entity, mike);
            zulu = _closure1_slot4;
            mike = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 5;
            entity = offset[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.BaseIconButton;
            entity = {};
            output = entity;
            sizing = oscar;
            oscar = copyDataProperties(output, sizing);
            oscar = 'accessibilityLabel';
            entity[oscar] = verify;
            verify = 'lg';
            oscar = 'size';
            entity[oscar] = verify;
            verify = 'primary';
            oscar = 'variant';
            entity[oscar] = verify;
            oscar = options.isValidElement;
            oscar = oscar.bind(options)(yankee);
            options = yankee;
            if(!oscar) { _fun76249_ip = 254; continue _fun76249 }
 201:
            offset = _closure1_slot3;
            verify = offset.cloneElement;
            oscar = {};
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            romeo = 3;
            romeo = backup[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            romeo = romeo.colors;
            romeo = romeo.WHITE;
            oscar['color'] = romeo;
            options = verify.bind(offset)(yankee, oscar);
 254:
            oscar = 'icon';
            entity[oscar] = options;
            oscar = 'style';
            entity[oscar] = golf;
            oscar = report.iconButtonPill;
            report = 'pillStyle';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['FloatingActionButton'] = mike;
    return entity;
})();