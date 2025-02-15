// app/modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: fuzzySearchToggle
        _fun98967: for(var _fun98967_ip = 0; ; ) switch(_fun98967_ip) {
 0:
            tango = argFoo;
            offset = argBar;
            golf = argBaz;
            mike = tango.length;
            entity = 0;
            entity = entity === mike;
            if(entity) { _fun98967_ip = 123; continue _fun98967 }
 23:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            options = 6;
            mike = mike[options];
            oscar = undefined;
            verify = report.bind(oscar)(mike);
            mike = tango.toLowerCase;
            report = mike.bind(tango)();
            mike = offset.toLowerCase;
            mike = mike.bind(offset)();
            mike = verify.bind(oscar)(report, mike);
            if(mike) { _fun98967_ip = 120; continue _fun98967 }
 77:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            report = report.bind(oscar)(zulu);
            zulu = tango.toLowerCase;
            tango = zulu.bind(tango)();
            zulu = golf.toLowerCase;
            zulu = zulu.bind(golf)();
            mike = report.bind(oscar)(tango, zulu);
 120:
            entity = mike;
 123:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: ToggleTableRow
        entity = argFoo;
        report = entity.toggleName;
        var _closure2_slot0 = report;
        romeo = entity.description;
        var _closure2_slot1 = romeo;
        offset = entity.value;
        verify = entity.onValueChange;
        tango = _closure1_slot9;
        golf = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 9;
        entity = yankee[entity];
        zulu = undefined;
        entity = golf.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {};
        entity['label'] = romeo;
        romeo = 1;
        entity['labelLineClamp'] = romeo;
        entity['subLabel'] = report;
        entity['subLabelLineClamp'] = romeo;
        options = function() { // Original name: onPress
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.open;
            mike = {};
            oscar = _closure2_slot1;
            mike['content'] = oscar;
            report = _closure2_slot0;
            mike['key'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['onPress'] = options;
        options = _closure1_slot9;
        oscar = 11;
        oscar = yankee[oscar];
        oscar = golf.bind(zulu)(oscar);
        golf = oscar.FormSwitch;
        oscar = {};
        oscar['value'] = offset;
        oscar['onValueChange'] = verify;
        oscar = options.bind(zulu)(golf, oscar);
        entity['trailing'] = oscar;
        entity = tango.bind(zulu)(mike, entity, report);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: useFilteredDevTogglesForCategory
        offset = argFoo;
        yankee = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = yankee;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 12;
        tango = verify[mike];
        golf = undefined;
        oscar = options.bind(golf)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot7;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(2);
        zulu[0] = yankee;
        zulu[1] = offset;
        mike = verify[mike];
        mike = options.bind(golf)(mike);
        romeo = mike.statesWillNeverBeEqual;
        backup = function() {
            zulu = _closure1_slot7;
            mike = zulu.allByCategory;
            entity = _closure2_slot0;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun98972: for(var _fun98972_ip = 0; ; ) switch(_fun98972_ip) {
 0:
                    golf = argFoo;
                    mike = golf[Symbol.iterator];
                    golf = mike().next;
                    options = undefined;
                    zulu = undefined;
                    oscar = undefined;
                    verify = golf().value;
                    offset = mike;
                    offset = offset === options;
                    zulu = offset;
                    if(offset) { _fun98972_ip = 32; continue _fun98972 }
 29:
                    oscar = verify;
 32:
                    report = oscar;
                    oscar = undefined;
                    verify = zulu;
                    if(verify) { _fun98972_ip = 63; continue _fun98972 }
 43:
                    verify = golf().value;
                    offset = mike;
                    offset = offset === options;
                    zulu = offset;
                    if(offset) { _fun98972_ip = 63; continue _fun98972 }
 60:
                    oscar = verify;
 63:
                    oscar = undefined;
                    verify = zulu;
                    if(verify) { _fun98972_ip = 91; continue _fun98972 }
 71:
                    golf = golf().value;
                    verify = mike;
                    verify = verify === options;
                    zulu = verify;
                    if(verify) { _fun98972_ip = 91; continue _fun98972 }
 88:
                    oscar = golf;
 91: // try_start_0
                    tango = oscar.label;
 96: // try_end0
                    oscar = zulu;
                    if(oscar) { _fun98972_ip = 105; continue _fun98972 }
 102:
                    mike.return();
 105:
                    golf = _closure1_slot12;
                    oscar = _closure2_slot1;
                    tango = golf.bind(options)(oscar, report, tango);
                    return tango;
 128: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun98972_ip = 134; continue _fun98972;
 132:
                    CatchBlockStart(arg_register=0);
 134:
                    if(zulu) { _fun98972_ip = 140; continue _fun98972 }
 137:
                    mike.return();
 140:
                    throw entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        sizing = oscar;
        kilo = tango;
        foxtrot = zulu;
        entity = sizing[report](kilo, backup, foxtrot, romeo, yankee);
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
    tango = tango.ScrollView;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot7 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DevSettingsCategory;
    var _closure1_slot8 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 8;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['paddingHorizontal'] = romeo;
    tango['wrap'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingVertical'] = offset;
    tango['container'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: DevToolsTogglesScreen
        _fun98973: for(var _fun98973_ip = 0; ; ) switch(_fun98973_ip) {
 0:
            entity = _closure1_slot11;
            tango = undefined;
            report = entity.bind(tango)();
            offset = _closure1_slot1;
            record = _closure1_slot2;
            entity = 13;
            entity = record[entity];
            entity = offset.bind(tango)(entity);
            options = entity.bind(tango)();
            zulu = _closure1_slot4;
            mike = zulu.useState;
            entity = '';
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            yankee = 0;
            zulu = mike[yankee];
            var _closure2_slot0 = zulu;
            entity = 1;
            config = mike[entity];
            echo = _closure1_slot0;
            entity = 12;
            mike = record[entity];
            backup = echo.bind(tango)(mike);
            romeo = backup.useStateFromStores;
            mike = _closure1_slot6;
            verify = new Array(1);
            verify[0] = mike;
            golf = new Array(1);
            golf[0] = zulu;
            entity = record[entity];
            entity = echo.bind(tango)(entity);
            context = entity.statesWillNeverBeEqual;
            target = function() {
                mike = _closure1_slot6;
                entity = mike.allWithDescriptions;
                zulu = entity.bind(mike)();
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun98975: for(var _fun98975_ip = 0; ; ) switch(_fun98975_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar[Symbol.iterator];
                        oscar = entity().next;
                        zulu = oscar().value;
                        mike = entity;
                        report = undefined;
                        mike = mike === report;
                        tango = undefined;
                        if(mike) { _fun98975_ip = 27; continue _fun98975 }
 24:
                        tango = zulu;
 27:
                        if(mike) { _fun98975_ip = 41; continue _fun98975 }
 30:
                        zulu = oscar().value;
                        zulu = entity;
                        mike = zulu === report;
 41:
                        zulu = undefined;
                        if(mike) { _fun98975_ip = 71; continue _fun98975 }
 46:
                        golf = oscar().value;
                        oscar = entity;
                        oscar = oscar === report;
                        zulu = undefined;
                        mike = oscar;
                        if(oscar) { _fun98975_ip = 71; continue _fun98975 }
 65:
                        zulu = golf;
                        mike = oscar;
 71:
                        if(mike) { _fun98975_ip = 77; continue _fun98975 }
 74:
                        entity.return();
 77:
                        mike = _closure1_slot12;
                        entity = _closure2_slot0;
                        entity = mike.bind(report)(entity, tango, zulu);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sierra = backup;
            status = verify;
            papa = golf;
            vacuum = sierra[romeo](status, target, papa, context, record);
            mike = _closure1_slot14;
            entity = _closure1_slot8;
            golf = entity.OVERLAYS;
            source = mike.bind(tango)(golf, zulu);
            golf = entity.MESSAGING;
            update = mike.bind(tango)(golf, zulu);
            golf = entity.REPORTING;
            control = mike.bind(tango)(golf, zulu);
            entity = entity.APP_COLLECTIONS;
            kilo = mike.bind(tango)(entity, zulu);
            zulu = _closure1_slot10;
            mike = _closure1_slot5;
            entity = {};
            golf = report.wrap;
            entity['style'] = golf;
            golf = report.container;
            report = new Array(2);
            report[0] = golf;
            golf = {};
            verify = 8;
            verify = record[verify];
            verify = offset.bind(tango)(verify);
            verify = verify.spacing;
            verify = verify.PX_16;
            options = options.bottom;
            options = verify + options;
            golf['paddingBottom'] = options;
            report[1] = golf;
            entity['contentContainerStyle'] = report;
            report = 14;
            report = record[report];
            report = echo.bind(tango)(report);
            golf = report.Stack;
            report = {};
            options = 16;
            report['spacing'] = options;
            backup = 15;
            options = record[backup];
            options = echo.bind(tango)(options);
            verify = options.TableRowGroup;
            options = {};
            offset = 'Actions';
            options['title'] = offset;
            output = _closure1_slot9;
            romeo = 9;
            offset = record[romeo];
            offset = echo.bind(tango)(offset);
            sizing = offset.TableRow;
            offset = {'label': 'Clear All', 'variant': 'danger', 'onPress': null, 'arrow': true};
            result = function() { // Original name: onPress
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 16;
                mike = tango[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                mike = report.clearAll;
                mike = mike.bind(report)();
                mike = 17;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.clearAll;
                mike = mike.bind(zulu)();
                return entity;
            };
            offset['onPress'] = result;
            sizing = output.bind(tango)(sizing, offset);
            offset = new Array(2);
            offset[0] = sizing;
            output = _closure1_slot9;
            romeo = record[romeo];
            romeo = echo.bind(tango)(romeo);
            sizing = romeo.TableRow;
            romeo = {};
            sequence = _closure1_slot9;
            result = 18;
            result = record[result];
            result = echo.bind(tango)(result);
            echo = result.SearchField;
            result = {'size': 'md', 'placeholder': 'Search design toggles'};
            result['onChange'] = config;
            result = sequence.bind(tango)(echo, result);
            romeo['label'] = result;
            romeo = output.bind(tango)(sizing, romeo);
            offset[1] = romeo;
            options['children'] = offset;
            verify = zulu.bind(tango)(verify, options);
            options = new Array(6);
            options[0] = verify;
            verify = vacuum.length;
            romeo = verify > yankee;
            offset = null;
            if(!romeo) { _fun98973_ip = 600; continue _fun98973 }
 534:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[backup];
            romeo = sizing.bind(tango)(romeo);
            sizing = romeo.TableRowGroup;
            romeo = {};
            result = 'Design Toggles';
            romeo['title'] = result;
            echo = vacuum.map;
            result = function(argFoo) {
                _fun98977: for(var _fun98977_ip = 0; ; ) switch(_fun98977_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu[Symbol.iterator];
                    zulu = entity().next;
                    golf = zulu().value;
                    mike = entity;
                    report = undefined;
                    mike = mike === report;
                    tango = undefined;
                    if(mike) { _fun98977_ip = 29; continue _fun98977 }
 26:
                    tango = golf;
 29:
                    var _closure3_slot0 = tango;
                    golf = undefined;
                    if(mike) { _fun98977_ip = 63; continue _fun98977 }
 38:
                    verify = zulu().value;
                    options = entity;
                    options = options === report;
                    golf = undefined;
                    mike = options;
                    if(options) { _fun98977_ip = 63; continue _fun98977 }
 57:
                    golf = verify;
                    mike = options;
 63:
                    options = undefined;
                    if(mike) { _fun98977_ip = 93; continue _fun98977 }
 68:
                    verify = zulu().value;
                    zulu = entity;
                    zulu = zulu === report;
                    options = undefined;
                    mike = zulu;
                    if(zulu) { _fun98977_ip = 93; continue _fun98977 }
 87:
                    options = verify;
                    mike = zulu;
 93:
                    if(mike) { _fun98977_ip = 99; continue _fun98977 }
 96:
                    entity.return();
 99:
                    zulu = _closure1_slot9;
                    mike = _closure1_slot13;
                    entity = {};
                    entity['toggleName'] = tango;
                    entity['description'] = options;
                    entity['value'] = golf;
                    oscar = function(argFoo) { // Original name: onValueChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 16;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.toggle;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity['onValueChange'] = oscar;
                    entity = zulu.bind(report)(mike, entity, tango);
                    return entity;
                }
            };
            result = echo.bind(vacuum)(result);
            romeo['children'] = result;
            offset = output.bind(tango)(sizing, romeo);
 600:
            options[1] = offset;
            offset = control.length;
            romeo = offset > yankee;
            offset = null;
            if(!romeo) { _fun98973_ip = 684; continue _fun98973 }
 618:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[backup];
            romeo = sizing.bind(tango)(romeo);
            sizing = romeo.TableRowGroup;
            romeo = {};
            result = 'Reporting Toggles';
            romeo['title'] = result;
            echo = control.map;
            result = function(argFoo) {
                _fun98979: for(var _fun98979_ip = 0; ; ) switch(_fun98979_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    report = undefined;
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98979_ip = 34; continue _fun98979 }
 31:
                    report = golf;
 34:
                    golf = report;
                    tango = golf;
                    var _closure3_slot0 = golf;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98979_ip = 72; continue _fun98979 }
 52:
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98979_ip = 72; continue _fun98979 }
 69:
                    report = golf;
 72:
                    offset = report;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98979_ip = 103; continue _fun98979 }
 83:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun98979_ip = 103; continue _fun98979 }
 100:
                    report = oscar;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zulu;
                    if(report) { _fun98979_ip = 117; continue _fun98979 }
 114:
                    mike.return();
 117:
                    golf = _closure1_slot9;
                    oscar = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tango;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.toggle;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
                    return tango;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun98979_ip = 170; continue _fun98979;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zulu) { _fun98979_ip = 176; continue _fun98979 }
 173:
                    mike.return();
 176:
                    throw entity;
                }
            };
            result = echo.bind(control)(result);
            romeo['children'] = result;
            offset = output.bind(tango)(sizing, romeo);
 684:
            options[2] = offset;
            offset = source.length;
            romeo = offset > yankee;
            offset = null;
            if(!romeo) { _fun98973_ip = 768; continue _fun98973 }
 702:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[backup];
            romeo = sizing.bind(tango)(romeo);
            sizing = romeo.TableRowGroup;
            romeo = {};
            result = 'Dev Overlays';
            romeo['title'] = result;
            echo = source.map;
            result = function(argFoo) {
                _fun98981: for(var _fun98981_ip = 0; ; ) switch(_fun98981_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    report = undefined;
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98981_ip = 34; continue _fun98981 }
 31:
                    report = golf;
 34:
                    golf = report;
                    tango = golf;
                    var _closure3_slot0 = golf;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98981_ip = 72; continue _fun98981 }
 52:
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98981_ip = 72; continue _fun98981 }
 69:
                    report = golf;
 72:
                    offset = report;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98981_ip = 103; continue _fun98981 }
 83:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun98981_ip = 103; continue _fun98981 }
 100:
                    report = oscar;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zulu;
                    if(report) { _fun98981_ip = 117; continue _fun98981 }
 114:
                    mike.return();
 117:
                    golf = _closure1_slot9;
                    oscar = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tango;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.toggle;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
                    return tango;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun98981_ip = 170; continue _fun98981;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zulu) { _fun98981_ip = 176; continue _fun98981 }
 173:
                    mike.return();
 176:
                    throw entity;
                }
            };
            result = echo.bind(source)(result);
            romeo['children'] = result;
            offset = output.bind(tango)(sizing, romeo);
 768:
            options[3] = offset;
            offset = update.length;
            romeo = offset > yankee;
            offset = null;
            if(!romeo) { _fun98973_ip = 852; continue _fun98973 }
 786:
            output = _closure1_slot9;
            sizing = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[backup];
            romeo = sizing.bind(tango)(romeo);
            sizing = romeo.TableRowGroup;
            romeo = {};
            result = 'Messaging Toggles';
            romeo['title'] = result;
            echo = update.map;
            result = function(argFoo) {
                _fun98983: for(var _fun98983_ip = 0; ; ) switch(_fun98983_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    report = undefined;
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98983_ip = 34; continue _fun98983 }
 31:
                    report = golf;
 34:
                    golf = report;
                    tango = golf;
                    var _closure3_slot0 = golf;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98983_ip = 72; continue _fun98983 }
 52:
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98983_ip = 72; continue _fun98983 }
 69:
                    report = golf;
 72:
                    offset = report;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98983_ip = 103; continue _fun98983 }
 83:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun98983_ip = 103; continue _fun98983 }
 100:
                    report = oscar;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zulu;
                    if(report) { _fun98983_ip = 117; continue _fun98983 }
 114:
                    mike.return();
 117:
                    golf = _closure1_slot9;
                    oscar = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tango;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.toggle;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
                    return tango;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun98983_ip = 170; continue _fun98983;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zulu) { _fun98983_ip = 176; continue _fun98983 }
 173:
                    mike.return();
 176:
                    throw entity;
                }
            };
            result = echo.bind(update)(result);
            romeo['children'] = result;
            offset = output.bind(tango)(sizing, romeo);
 852:
            options[4] = offset;
            offset = kilo.length;
            offset = offset > yankee;
            verify = null;
            if(!offset) { _fun98973_ip = 936; continue _fun98973 }
 870:
            romeo = _closure1_slot9;
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[backup];
            offset = yankee.bind(tango)(offset);
            yankee = offset.TableRowGroup;
            offset = {};
            backup = 'App Collections Toggles';
            offset['title'] = backup;
            backup = kilo.map;
            foxtrot = function(argFoo) {
                _fun98985: for(var _fun98985_ip = 0; ; ) switch(_fun98985_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    report = undefined;
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98985_ip = 34; continue _fun98985 }
 31:
                    report = golf;
 34:
                    golf = report;
                    tango = golf;
                    var _closure3_slot0 = golf;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98985_ip = 72; continue _fun98985 }
 52:
                    golf = oscar().value;
                    romeo = mike;
                    romeo = romeo === options;
                    zulu = romeo;
                    if(romeo) { _fun98985_ip = 72; continue _fun98985 }
 69:
                    report = golf;
 72:
                    offset = report;
                    report = undefined;
                    golf = zulu;
                    if(golf) { _fun98985_ip = 103; continue _fun98985 }
 83:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun98985_ip = 103; continue _fun98985 }
 100:
                    report = oscar;
 103: // try_start_0
                    yankee = report.label;
 108: // try_end0
                    report = zulu;
                    if(report) { _fun98985_ip = 117; continue _fun98985 }
 114:
                    mike.return();
 117:
                    golf = _closure1_slot9;
                    oscar = _closure1_slot13;
                    report = {};
                    report['toggleName'] = tango;
                    report['description'] = yankee;
                    report['value'] = offset;
                    verify = function(argFoo) { // Original name: onValueChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.toggle;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    report['onValueChange'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
                    return tango;
 164: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun98985_ip = 170; continue _fun98985;
 168:
                    CatchBlockStart(arg_register=0);
 170:
                    if(zulu) { _fun98985_ip = 176; continue _fun98985 }
 173:
                    mike.return();
 176:
                    throw entity;
                }
            };
            foxtrot = backup.bind(kilo)(foxtrot);
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 936:
            options[5] = verify;
            report['children'] = options;
            golf = zulu.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot9;
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 19;
            oscar = verify[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();