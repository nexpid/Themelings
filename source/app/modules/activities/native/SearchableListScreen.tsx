// app/modules/activities/native/SearchableListScreen.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
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
    tango = tango.ScrollView;
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
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'width': '100%'};
    offset = 5;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['container'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/native/SearchableListScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SearchableListScreen
        entity = argFoo;
        mike = entity.onCancel;
        var _closure2_slot0 = mike;
        verify = entity.rowData;
        var _closure2_slot1 = verify;
        backup = entity.renderRow;
        var _closure2_slot2 = backup;
        entity = _closure1_slot9;
        tango = undefined;
        report = entity.bind(tango)();
        golf = _closure1_slot1;
        foxtrot = _closure1_slot2;
        entity = 6;
        entity = foxtrot[entity];
        entity = golf.bind(tango)(entity);
        yankee = entity.bind(tango)();
        mike = _closure1_slot0;
        entity = 7;
        entity = foxtrot[entity];
        mike = mike.bind(tango)(entity);
        entity = mike.useNavigation;
        entity = entity.bind(mike)();
        var _closure2_slot3 = entity;
        options = _closure1_slot4;
        mike = options.useState;
        entity = '';
        zulu = mike.bind(options)(entity);
        mike = _closure1_slot3;
        entity = 2;
        zulu = mike.bind(tango)(zulu, entity);
        entity = 0;
        entity = zulu[entity];
        var _closure2_slot4 = entity;
        mike = 1;
        romeo = zulu[mike];
        zulu = options.useMemo;
        mike = new Array(3);
        mike[0] = backup;
        mike[1] = verify;
        mike[2] = entity;
        entity = function() {
            zulu = _closure2_slot1;
            mike = zulu.map;
            entity = function(argFoo) {
                tango = _closure2_slot2;
                zulu = _closure2_slot4;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        verify = zulu.bind(options)(entity, mike);
        zulu = _closure1_slot8;
        mike = _closure1_slot5;
        entity = {};
        options = report.container;
        report = new Array(2);
        report[0] = options;
        options = {};
        backup = yankee.top;
        options['paddingTop'] = backup;
        report[1] = options;
        entity['style'] = report;
        options = _closure1_slot7;
        report = 8;
        report = foxtrot[report];
        golf = golf.bind(tango)(report);
        report = {};
        report['onChange'] = romeo;
        offset = function() { // Original name: onClose
            _fun92108: for(var _fun92108_ip = 0; ; ) switch(_fun92108_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun92108_ip = 23; continue _fun92108 }
 13:
                zulu = _closure2_slot0;
                mike = undefined;
                mike = zulu.bind(mike)();
 23:
                mike = _closure2_slot3;
                entity = mike.pop;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        report['onClose'] = offset;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        golf = _closure1_slot6;
        oscar = {};
        offset = {};
        yankee = yankee.bottom;
        offset['paddingBottom'] = yankee;
        oscar['contentContainerStyle'] = offset;
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();