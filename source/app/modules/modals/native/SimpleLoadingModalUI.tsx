// app/modules/modals/native/SimpleLoadingModalUI.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    offset = 0;
    golf = oscar[offset];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    verify = 1;
    tango = oscar[verify];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityIndicator;
    var _closure1_slot3 = golf;
    golf = tango.Modal;
    var _closure1_slot4 = golf;
    tango = tango.View;
    var _closure1_slot5 = tango;
    options = 2;
    tango = oscar[options];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    yankee = report.bind(entity)(tango);
    golf = yankee.createStyles;
    tango = {};
    romeo = {'flex': 1, 'alignItems': 'center', 'flexDirection': 'column', 'justifyContent': 'center'};
    tango['modalBackground'] = romeo;
    tango = golf.bind(yankee)(tango);
    var _closure1_slot7 = tango;
    tango = {};
    tango['OPENING'] = offset;
    golf = 'OPENING';
    tango[offset] = golf;
    tango['SHOWN'] = verify;
    golf = 'SHOWN';
    tango[verify] = golf;
    tango['DISMISSED'] = options;
    golf = 'DISMISSED';
    tango[options] = golf;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/modals/native/SimpleLoadingModalUI.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SimpleLoadingModal
        _fun81518: for(var _fun81518_ip = 0; ; ) switch(_fun81518_ip) {
 0:
            zulu = argFoo;
            offset = zulu.operation;
            var _closure2_slot0 = offset;
            mike = zulu.onResolved;
            tango = undefined;
            if(!(mike === tango)) { _fun81518_ip = 34; continue _fun81518 }
 27:
            mike = function() { // Original name: I
                entity = undefined;
                return entity;
            };
 34:
            var _closure2_slot1 = mike;
            entity = zulu.onRejected;
            if(!(entity === tango)) { _fun81518_ip = 55; continue _fun81518 }
 48:
            entity = function() { // Original name: f
                entity = undefined;
                return entity;
            };
 55:
            var _closure2_slot2 = entity;
            oscar = zulu.cancelable;
            if(!(oscar === tango)) { _fun81518_ip = 71; continue _fun81518 }
 69:
            oscar = false;
 71:
            var _closure2_slot3 = oscar;
            zulu = zulu.onDismissed;
            if(!(zulu === tango)) { _fun81518_ip = 92; continue _fun81518 }
 85:
            zulu = function() { // Original name: N
                entity = undefined;
                return entity;
            };
 92:
            var _closure2_slot4 = zulu;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            oscar = _closure1_slot7;
            golf = oscar.bind(tango)();
            oscar = _closure1_slot2;
            yankee = oscar.useRef;
            options = _closure1_slot8;
            options = options.OPENING;
            options = yankee.bind(oscar)(options);
            _closure2_slot5 = options;
            yankee = oscar.useCallback;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                _fun81522: for(var _fun81522_ip = 0; ; ) switch(_fun81522_ip) {
 0:
                    entity = _closure2_slot5;
                    tango = entity.current;
                    zulu = _closure1_slot8;
                    zulu = zulu.SHOWN;
                    if(!(tango === zulu)) { _fun81522_ip = 39; continue _fun81522 }
 29:
                    tango = _closure2_slot4;
                    zulu = undefined;
                    zulu = tango.bind(zulu)();
 39:
                    mike = _closure2_slot5;
                    entity = _closure1_slot8;
                    entity = entity.DISMISSED;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            yankee = yankee.bind(oscar)(zulu, options);
            _closure2_slot6 = yankee;
            options = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = yankee;
            zulu[1] = mike;
            mike = function(argFoo) {
                tango = _closure2_slot1;
                entity = undefined;
                zulu = argFoo;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot6;
                mike = mike.bind(entity)();
                return entity;
            };
            options = options.bind(oscar)(mike, zulu);
            _closure2_slot7 = options;
            zulu = oscar.useCallback;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = entity;
            entity = function(argFoo) {
                tango = _closure2_slot2;
                entity = undefined;
                zulu = argFoo;
                zulu = tango.bind(entity)(zulu);
                mike = _closure2_slot6;
                mike = mike.bind(entity)();
                return entity;
            };
            entity = zulu.bind(oscar)(entity, mike);
            _closure2_slot8 = entity;
            zulu = oscar.useEffect;
            mike = new Array(3);
            mike[0] = offset;
            mike[1] = options;
            mike[2] = entity;
            entity = function() {
                zulu = _closure2_slot0;
                entity = undefined;
                report = zulu.bind(entity)();
                tango = report.then;
                zulu = function(argFoo) {
                    zulu = _closure2_slot7;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                tango = tango.bind(report)(zulu);
                zulu = tango.catch;
                mike = function(argFoo) {
                    zulu = _closure2_slot8;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot6;
            mike = _closure1_slot4;
            entity = {'transparent': true, 'animationType': 'none'};
            oscar = function() { // Original name: onShow
                _fun81528: for(var _fun81528_ip = 0; ; ) switch(_fun81528_ip) {
 0:
                    mike = _closure2_slot5;
                    tango = mike.current;
                    zulu = _closure1_slot8;
                    zulu = zulu.DISMISSED;
                    if(!(tango !== zulu)) { _fun81528_ip = 51; continue _fun81528 }
 29:
                    zulu = _closure2_slot5;
                    mike = _closure1_slot8;
                    mike = mike.SHOWN;
                    zulu['current'] = mike;
                    _fun81528_ip = 61; continue _fun81528;
 51:
                    mike = _closure2_slot4;
                    entity = undefined;
                    entity = mike.bind(entity)();
 61:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onShow'] = oscar;
            report = function() { // Original name: onRequestClose
                _fun81529: for(var _fun81529_ip = 0; ; ) switch(_fun81529_ip) {
 0:
                    mike = _closure2_slot3;
                    if(!mike) { _fun81529_ip = 20; continue _fun81529 }
 10:
                    mike = _closure2_slot6;
                    entity = undefined;
                    entity = mike.bind(entity)();
 20:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onRequestClose'] = report;
            oscar = _closure1_slot5;
            report = {};
            golf = golf.modalBackground;
            report['style'] = golf;
            options = _closure1_slot3;
            golf = {'animating': true, 'color': null, 'size': 'large'};
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(tango)(verify);
            verify = verify.unsafe_rawColors;
            verify = verify.BRAND_500;
            golf['color'] = verify;
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();