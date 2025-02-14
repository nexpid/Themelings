// app/design/components/Navigator/native/useAndroidNavScrim.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'position': 'absolute', 'bottom': 0, 'left': 0, 'right': 0};
    offset = 4;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
    verify['backgroundColor'] = offset;
    tango['androidNavScrim'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Navigator/native/useAndroidNavScrim.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useAndroidNavScrim
        _fun47699: for(var _fun47699_ip = 0; ; ) switch(_fun47699_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot6;
            options = undefined;
            oscar = zulu.bind(options)();
            var _closure2_slot1 = oscar;
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 5;
            zulu = verify[zulu];
            zulu = tango.bind(options)(zulu);
            zulu = zulu.bind(options)();
            zulu = zulu.bottom;
            golf = _closure1_slot0;
            tango = 6;
            tango = verify[tango];
            golf = golf.bind(options)(tango);
            tango = golf.isAndroid;
            tango = tango.bind(golf)();
            golf = 0;
            if(!tango) { _fun47699_ip = 88; continue _fun47699 }
 85:
            golf = zulu;
 88:
            var _closure2_slot2 = golf;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(3);
            mike[0] = golf;
            mike[1] = oscar;
            mike[2] = report;
            entity = function() {
                _fun47700: for(var _fun47700_ip = 0; ; ) switch(_fun47700_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = 0;
                    if(!(!(entity > mike))) { _fun47700_ip = 29; continue _fun47700 }
 13:
                    entity = {};
                    entity['scrimHeight'] = mike;
                    mike = undefined;
                    entity['scrim'] = mike;
                    _fun47700_ip = 113; continue _fun47700;
 29:
                    mike = {};
                    zulu = _closure2_slot2;
                    mike['scrimHeight'] = zulu;
                    oscar = _closure1_slot5;
                    report = _closure1_slot4;
                    tango = {};
                    zulu = _closure2_slot1;
                    options = zulu.androidNavScrim;
                    zulu = new Array(3);
                    zulu[0] = options;
                    options = {};
                    verify = _closure2_slot2;
                    options['height'] = verify;
                    zulu[1] = options;
                    golf = _closure2_slot0;
                    zulu[2] = golf;
                    tango['style'] = zulu;
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(report, tango);
                    mike['scrim'] = zulu;
                    entity = mike;
 113:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useAndroidNavScrim'] = mike;
    return entity;
})();