// app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: getContainerStyles
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot5;
            entity = entity.RED;
            if(!(entity !== zulu)) { _fun00002_ip = 104; continue _fun00001 }
 20:
            entity = _closure1_slot5;
            entity = entity.YELLOW;
            if(!(entity !== zulu)) { _fun00002_ip = 38; continue _fun00001 }
 34:
            entity = undefined;
            return entity;
 38:
            entity = {};
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 3;
            golf = oscar[zulu];
            tango = undefined;
            golf = report.bind(tango)(golf);
            golf = golf.colors;
            golf = golf.INFO_WARNING_BACKGROUND;
            entity['backgroundColor'] = golf;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            zulu = zulu.colors;
            zulu = zulu.STATUS_WARNING;
            entity['borderColor'] = zulu;
            return entity;
 104:
            entity = {};
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 3;
            oscar = report[mike];
            zulu = undefined;
            oscar = tango.bind(zulu)(oscar);
            oscar = oscar.colors;
            oscar = oscar.INFO_DANGER_BACKGROUND;
            entity['backgroundColor'] = oscar;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.colors;
            mike = mike.STATUS_DANGER;
            entity['borderColor'] = mike;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: getTextColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot5;
            mike = mike.RED;
            if(!(mike !== zulu)) { _fun00004_ip = 73; continue _fun00003 }
 20:
            mike = _closure1_slot5;
            mike = mike.YELLOW;
            if(!(mike !== zulu)) { _fun00004_ip = 38; continue _fun00003 }
 34:
            mike = undefined;
            return mike;
 38:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.colors;
            mike = mike.INFO_WARNING_TEXT;
            return mike;
 73:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.colors;
            entity = entity.INFO_DANGER_TEXT;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    verify = 0;
    report = golf[verify];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(report);
    options = 1;
    mike = golf[options];
    mike = oscar.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot4 = mike;
    mike = {};
    mike['RED'] = verify;
    report = 'RED';
    mike[verify] = report;
    mike['YELLOW'] = options;
    report = 'YELLOW';
    mike[options] = report;
    var _closure1_slot5 = mike;
    report = 4;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = function(argFoo) {
        report = argFoo;
        entity = {};
        mike = {};
        oscar = _closure1_slot7;
        tango = undefined;
        offset = oscar.bind(tango)(report);
        yankee = mike;
        oscar = copyDataProperties(yankee, offset);
        oscar = 'center';
        golf = 'alignItems';
        mike[golf] = oscar;
        options = _closure1_slot1;
        verify = _closure1_slot2;
        golf = 3;
        golf = verify[golf];
        golf = options.bind(tango)(golf);
        golf = golf.radii;
        options = golf.xs;
        golf = 'borderRadius';
        mike[golf] = options;
        options = 1;
        golf = 'borderWidth';
        mike[golf] = options;
        options = 8;
        golf = 'padding';
        mike[golf] = options;
        options = '100%';
        golf = 'width';
        mike[golf] = options;
        entity['container'] = mike;
        mike = {};
        mike['textAlign'] = oscar;
        zulu = _closure1_slot8;
        zulu = zulu.bind(tango)(report);
        mike['color'] = zulu;
        entity['text'] = mike;
        return entity;
    };
    report = options.bind(verify)(report);
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/native/components/MessageBlock.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: MessageBlock
        entity = argFoo;
        mike = entity.color;
        golf = entity.children;
        entity = _closure1_slot6;
        tango = undefined;
        options = entity.bind(tango)(mike);
        zulu = _closure1_slot4;
        mike = _closure1_slot3;
        entity = {};
        oscar = options.container;
        entity['style'] = oscar;
        oscar = _closure1_slot0;
        verify = _closure1_slot2;
        report = 5;
        report = verify[report];
        report = oscar.bind(tango)(report);
        oscar = report.LegacyText;
        report = {};
        options = options.text;
        report['style'] = options;
        report['children'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['MessageBlockColors'] = mike;
    return entity;
})();