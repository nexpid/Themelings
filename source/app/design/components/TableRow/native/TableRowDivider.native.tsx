// app/design/components/TableRow/native/TableRowDivider.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.StyleSheet;
    var _closure1_slot2 = golf;
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.TABLE_DIVIDER_WIDTH;
    var _closure1_slot4 = golf;
    tango = tango.TABLE_ROW_DIVIDER_PADDING;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            mike = {};
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 5;
            tango = report[tango];
            report = undefined;
            tango = oscar.bind(report)(tango);
            tango = tango.CARD_PRIMARY_BG;
            mike['backgroundColor'] = tango;
            tango = _closure1_slot4;
            mike['height'] = tango;
            tango = 12;
            oscar = argFoo;
            if(!oscar) { _fun00002_ip = 60; continue _fun00001 }
 56:
            tango = _closure1_slot5;
 60:
            mike['paddingStart'] = tango;
            oscar = _closure1_slot4;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            tango = 6;
            tango = options[tango];
            golf = golf.bind(report)(tango);
            tango = golf.isAndroid;
            golf = tango.bind(golf)();
            tango = 0;
            if(!golf) { _fun00002_ip = 113; continue _fun00001 }
 103:
            golf = _closure1_slot2;
            tango = golf.hairlineWidth;
 113:
            tango = oscar + tango;
            tango = -tango;
            mike['marginTop'] = tango;
            entity['container'] = mike;
            mike = {};
            tango = _closure1_slot4;
            mike['height'] = tango;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 7;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.DIVIDER_BACKGROUND;
            mike['backgroundColor'] = zulu;
            entity['divider'] = mike;
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/TableRow/native/TableRowDivider.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: TableRowDivider
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = entity.adjustSpacingForIcon;
            tango = undefined;
            if(!(zulu === tango)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            zulu = false;
 17:
            mike = _closure1_slot7;
            oscar = mike.bind(tango)(zulu);
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            report = oscar.container;
            entity['style'] = report;
            report = {};
            oscar = oscar.divider;
            report['style'] = oscar;
            report = zulu.bind(tango)(mike, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TableRowDivider'] = mike;
    return entity;
})();