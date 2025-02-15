// app/modules/activities/panel/native/ActivityPanelUI.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderActivityOrPIP
        _fun121328: for(var _fun121328_ip = 0; ; ) switch(_fun121328_ip) {
 0:
            report = _closure1_slot7;
            mike = _closure1_slot1;
            tango = 'pip';
            entity = argBar;
            if(!(tango !== entity)) { _fun121328_ip = 35; continue _fun121328 }
 22:
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            _fun121328_ip = 46; continue _fun121328;
 35:
            tango = _closure1_slot2;
            zulu = 4;
            entity = tango[zulu];
 46:
            tango = undefined;
            zulu = mike.bind(tango)(entity);
            mike = {};
            entity = argBaz;
            mike['transitionState'] = entity;
            entity = argCorge;
            mike['transitionCleanUp'] = entity;
            entity = argFoo;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getKey
        entity = argFoo;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: wrapChildren
        tango = _closure1_slot7;
        zulu = _closure1_slot4;
        mike = {};
        entity = _closure1_slot5;
        entity = entity.absoluteFill;
        mike['style'] = entity;
        entity = 'box-none';
        mike['pointerEvents'] = entity;
        entity = argFoo;
        mike['children'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    golf = tango.View;
    var _closure1_slot4 = golf;
    tango = tango.StyleSheet;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot6 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot8 = tango;
    tango = new Array(0);
    var _closure1_slot9 = tango;
    tango = ['pip'];
    var _closure1_slot10 = tango;
    tango = ['activity'];
    var _closure1_slot11 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/ActivityPanelUI.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ActivityPanelUI
        tango = _closure1_slot3;
        report = tango.useContext;
        oscar = _closure1_slot1;
        golf = _closure1_slot2;
        mike = 6;
        mike = golf[mike];
        zulu = undefined;
        mike = oscar.bind(zulu)(mike);
        mike = report.bind(tango)(mike);
        report = mike.mode;
        var _closure2_slot0 = report;
        mike = 7;
        mike = golf[mike];
        mike = oscar.bind(zulu)(mike);
        oscar = mike.bind(zulu)();
        var _closure2_slot1 = oscar;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun121332: for(var _fun121332_ip = 0; ; ) switch(_fun121332_ip) {
 0:
                zulu = _closure2_slot0;
                mike = _closure1_slot6;
                mike = mike.DISCONNECTED;
                if(!(zulu !== mike)) { _fun121332_ip = 79; continue _fun121332 }
 24:
                zulu = _closure2_slot0;
                mike = _closure1_slot6;
                mike = mike.PIP;
                if(!(zulu === mike)) { _fun121332_ip = 49; continue _fun121332 }
 42:
                mike = _closure2_slot1;
                if(mike) { _fun121332_ip = 79; continue _fun121332 }
 49:
                mike = _closure2_slot0;
                entity = _closure1_slot6;
                entity = entity.PIP;
                if(!(mike !== entity)) { _fun121332_ip = 73; continue _fun121332 }
 67:
                offset = _closure1_slot11;
                _fun121332_ip = 77; continue _fun121332;
 73:
                offset = _closure1_slot10;
 77:
                _fun121332_ip = 83; continue _fun121332;
 79:
                offset = _closure1_slot9;
 83:
                tango = _closure1_slot8;
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 8;
                entity = yankee[entity];
                zulu = undefined;
                entity = golf.bind(zulu)(entity);
                mike = entity.LayerScope;
                entity = {};
                options = _closure1_slot7;
                oscar = _closure1_slot1;
                report = 9;
                report = yankee[report];
                oscar = oscar.bind(zulu)(report);
                report = {};
                oscar = options.bind(zulu)(oscar, report);
                report = new Array(2);
                report[0] = oscar;
                options = _closure1_slot7;
                oscar = 10;
                oscar = yankee[oscar];
                oscar = golf.bind(zulu)(oscar);
                golf = oscar.TransitionGroup;
                oscar = {};
                oscar['items'] = offset;
                offset = _closure1_slot12;
                oscar['renderItem'] = offset;
                offset = _closure1_slot13;
                oscar['getItemKey'] = offset;
                verify = _closure1_slot14;
                oscar['wrapChildren'] = verify;
                oscar = options.bind(zulu)(golf, oscar);
                report[1] = oscar;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();