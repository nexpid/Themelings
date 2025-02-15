// app/modules/colors/ColorUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: kebabToShoutingCamelCase
        mike = argFoo;
        entity = mike.toUpperCase;
        tango = entity.bind(mike)();
        zulu = tango.replace;
        mike = /-/g;
        entity = '_';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HEXColors;
    var _closure1_slot5 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/colors/ColorUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getColor
        mike = _closure1_slot5;
        tango = _closure1_slot6;
        zulu = undefined;
        entity = argFoo;
        entity = tango.bind(zulu)(entity);
        entity = mike[entity];
        return entity;
    };
    zulu['getColor'] = tango;
    tango = function(argFoo) { // Original name: useColorValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun00002_ip = 47; continue _fun00001 }
 12:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 3;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.ColorDetails;
            entity = mike[zulu];
 47:
            return entity;
        }
    };
    zulu['useColorValue'] = tango;
    tango = function(argFoo) { // Original name: useDesaturatedColorString
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        golf = report.bind(zulu)(tango);
        report = golf.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot4;
            entity = entity.saturation;
            return entity;
        };
        report = report.bind(golf)(tango, zulu);
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun00004_ip = 140; continue _fun00003 }
 16:
                tango = _closure2_slot0;
                zulu = 'currentColor';
                if(!(zulu !== tango)) { _fun00004_ip = 134; continue _fun00003 }
 30:
                report = _closure2_slot0;
                tango = report.startsWith;
                zulu = 'var(';
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun00004_ip = 134; continue _fun00003 }
 54:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 5;
                zulu = report[zulu];
                report = undefined;
                tango = tango.bind(report)(zulu);
                zulu = _closure2_slot0;
                oscar = tango.bind(report)(zulu);
                report = oscar.set;
                zulu = oscar.get;
                tango = 'hsl.s';
                golf = zulu.bind(oscar)(tango);
                zulu = _closure2_slot1;
                zulu = golf * zulu;
                tango = report.bind(oscar)(tango, zulu);
                zulu = tango.hex;
                zulu = zulu.bind(tango)();
                return zulu;
 134:
                mike = _closure2_slot0;
                return mike;
 140:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useDesaturatedColorString'] = tango;
    mike = function(argFoo, argBar) { // Original name: useThemedColorValue
        options = argFoo;
        report = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = report;
        golf = _closure1_slot0;
        verify = _closure1_slot2;
        zulu = 6;
        zulu = verify[zulu];
        tango = undefined;
        oscar = golf.bind(tango)(zulu);
        zulu = oscar.useTheme;
        oscar = zulu.bind(oscar)();
        var _closure2_slot2 = oscar;
        zulu = 4;
        zulu = verify[zulu];
        verify = golf.bind(tango)(zulu);
        golf = verify.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            entity = _closure1_slot4;
            entity = entity.saturation;
            return entity;
        };
        golf = golf.bind(verify)(tango, zulu);
        var _closure2_slot3 = golf;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot0;
                verify = null;
                mike = verify == entity;
                entity = null;
                if(mike) { _fun00006_ip = 111; continue _fun00005 }
 18:
                mike = {};
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 7;
                tango = oscar[tango];
                options = undefined;
                oscar = report.bind(options)(tango);
                report = oscar.getResolvedSemanticColor;
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                tango = tango.bind(options)(zulu);
                zulu = {};
                options = _closure2_slot1;
                if(!(verify == options)) { _fun00006_ip = 80; continue _fun00005 }
 74:
                options = _closure2_slot2;
                _fun00006_ip = 84; continue _fun00005;
 80:
                options = _closure2_slot1;
 84:
                zulu['theme'] = options;
                golf = _closure2_slot3;
                zulu['saturation'] = golf;
                zulu = report.bind(oscar)(tango, zulu);
                mike['hex'] = zulu;
                entity = mike;
 111:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useThemedColorValue'] = mike;
    return entity;
})();