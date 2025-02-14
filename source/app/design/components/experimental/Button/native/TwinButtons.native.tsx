// app/design/components/experimental/Button/native/TwinButtons.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tango = function(argFoo) {
        _fun76235: for(var _fun76235_ip = 0; ; ) switch(_fun76235_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = {};
            tango = 'row';
            if(!zulu) { _fun76235_ip = 18; continue _fun76235 }
 14:
            tango = 'column';
 18:
            mike['flexDirection'] = tango;
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            tango = 4;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            tango = tango.spacing;
            if(zulu) { _fun76235_ip = 63; continue _fun76235 }
 55:
            zulu = tango.PX_12;
            _fun76235_ip = 69; continue _fun76235;
 63:
            zulu = tango.PX_8;
 69:
            mike['gap'] = zulu;
            entity['container'] = mike;
            mike = {};
            zulu = 1;
            mike['flex'] = zulu;
            entity['button'] = mike;
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/experimental/Button/native/TwinButtons.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: TwinButtons
        entity = argFoo;
        options = entity.children;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        tango = undefined;
        mike = mike.bind(tango)(entity);
        entity = mike.useFontScale;
        zulu = entity.bind(mike)();
        mike = _closure1_slot6;
        entity = 1.2;
        entity = zulu > entity;
        golf = mike.bind(tango)(entity);
        var _closure2_slot0 = golf;
        zulu = _closure1_slot5;
        mike = _closure1_slot4;
        entity = {};
        golf = golf.container;
        entity['style'] = golf;
        oscar = _closure1_slot3;
        golf = oscar.Children;
        oscar = golf.map;
        report = function(argFoo) {
            _fun76237: for(var _fun76237_ip = 0; ; ) switch(_fun76237_ip) {
 0:
                oscar = argFoo;
                zulu = _closure1_slot3;
                entity = zulu.isValidElement;
                zulu = entity.bind(zulu)(oscar);
                entity = null;
                if(!zulu) { _fun76237_ip = 102; continue _fun76237 }
 26:
                tango = oscar.type;
                options = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 6;
                zulu = report[zulu];
                report = undefined;
                zulu = options.bind(report)(zulu);
                zulu = zulu.Button;
                entity = null;
                if(!(tango === zulu)) { _fun76237_ip = 102; continue _fun76237 }
 65:
                tango = _closure1_slot5;
                zulu = _closure1_slot4;
                mike = {};
                golf = _closure2_slot0;
                golf = golf.button;
                mike['style'] = golf;
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 102:
                return entity;
            }
        };
        report = oscar.bind(golf)(options, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['TwinButtons'] = mike;
    return entity;
})();