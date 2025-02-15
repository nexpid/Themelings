// app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
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
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
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
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'width': '100%', 'backgroundColor': null, 'borderRadius': null, 'alignItems': 'center'};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_SURFACE_RAISED;
    verify['backgroundColor'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    tango['container'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AppLauncherBooleanOption
        entity = argFoo;
        offset = entity.style;
        golf = entity.option;
        mike = entity.initialValue;
        var _closure2_slot0 = mike;
        mike = entity.onPress;
        var _closure2_slot1 = mike;
        options = entity.hasError;
        mike = _closure1_slot5;
        tango = undefined;
        verify = mike.bind(tango)();
        oscar = _closure1_slot3;
        zulu = oscar.useState;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00002_ip = 33; continue _fun00001 }
 16:
                zulu = _closure2_slot0;
                tango = zulu.type;
                zulu = 'text';
                entity = zulu === tango;
 33:
                if(!entity) { _fun00002_ip = 53; continue _fun00001 }
 36:
                mike = _closure2_slot0;
                zulu = mike.text;
                mike = 'true';
                entity = mike === zulu;
 53:
                return entity;
            }
        };
        oscar = zulu.bind(oscar)(mike);
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu.bind(tango)(oscar, mike);
        mike = 0;
        oscar = zulu[mike];
        var _closure2_slot2 = oscar;
        mike = 1;
        mike = zulu[mike];
        var _closure2_slot3 = mike;
        zulu = _closure1_slot4;
        mike = _closure1_slot0;
        yankee = _closure1_slot1;
        entity = 5;
        entity = yankee[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.FormCheckboxRow;
        entity = {'start': true, 'end': true};
        yankee = verify.container;
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        entity['style'] = verify;
        entity['hasError'] = options;
        golf = golf.displayName;
        entity['label'] = golf;
        entity['selected'] = oscar;
        report = function() { // Original name: onPress
            report = _closure2_slot3;
            mike = _closure2_slot2;
            tango = !mike;
            entity = undefined;
            tango = report.bind(entity)(tango);
            zulu = _closure2_slot1;
            mike = !mike;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity['onPress'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();