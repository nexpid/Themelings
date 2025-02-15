// app/modules/application_commands/native/ContextMenuCommandActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/native/ContextMenuCommandActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ContextMenuCommandActionSheet
        entity = argFoo;
        output = entity.channel;
        var _closure2_slot0 = output;
        foxtrot = entity.commandType;
        sizing = entity.commandTargetId;
        var _closure2_slot1 = sizing;
        romeo = entity.onBack;
        kilo = entity.onPressAppCommand;
        var _closure2_slot2 = kilo;
        oscar = _closure1_slot0;
        offset = _closure1_slot3;
        zulu = 4;
        zulu = offset[zulu];
        tango = undefined;
        options = oscar.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot5;
        report = new Array(1);
        report[0] = zulu;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                report = _closure2_slot0;
                entity = null;
                report = entity == report;
                entity = undefined;
                if(report) { _fun00002_ip = 44; continue _fun00001 }
 30:
                report = _closure2_slot0;
                tango = report.getGuildId;
                entity = tango.bind(report)();
 44:
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report = golf.bind(options)(report, zulu);
        var _closure2_slot3 = report;
        golf = _closure1_slot2;
        zulu = 5;
        zulu = offset[zulu];
        options = golf.bind(tango)(zulu);
        golf = options.useDiscovery;
        zulu = {};
        verify = {};
        verify['channel'] = output;
        yankee = 'channel';
        verify['type'] = yankee;
        zulu['context'] = verify;
        verify = {};
        yankee = new Array(1);
        yankee[0] = foxtrot;
        verify['commandTypes'] = yankee;
        zulu['filters'] = verify;
        verify = {};
        yankee = _closure1_slot6;
        verify['limit'] = yankee;
        zulu['options'] = verify;
        yankee = true;
        zulu['allowFetch'] = yankee;
        golf = golf.bind(options)(zulu);
        foxtrot = golf.commands;
        var _closure2_slot4 = foxtrot;
        zulu = golf.sectionDescriptors;
        var _closure2_slot5 = zulu;
        backup = golf.loading;
        var _closure2_slot6 = backup;
        verify = _closure1_slot4;
        options = verify.useMemo;
        golf = new Array(1);
        golf[0] = zulu;
        zulu = function() {
            mike = {};
            var _closure3_slot0 = mike;
            tango = _closure2_slot5;
            zulu = tango.forEach;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = _closure3_slot0;
                entity = zulu.id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            entity = {};
            entity['sections'] = mike;
            return entity;
        };
        zulu = options.bind(verify)(zulu, golf);
        zulu = zulu.sections;
        var _closure2_slot7 = zulu;
        options = verify.useCallback;
        golf = new Array(3);
        golf[0] = output;
        golf[1] = sizing;
        golf[2] = report;
        report = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscar = argFoo;
                mike = oscar.type;
                entity = 'command';
                if(!(entity === mike)) { _fun00004_ip = 122; continue _fun00003 }
 16:
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                entity = 6;
                entity = tango[entity];
                mike = undefined;
                report = zulu.bind(mike)(entity);
                entity = {};
                oscar = oscar.command;
                entity['command'] = oscar;
                oscar = {};
                entity['optionValues'] = oscar;
                golf = {};
                options = _closure2_slot0;
                golf['channel'] = options;
                options = _closure2_slot3;
                golf['guild'] = options;
                entity['context'] = golf;
                oscar = _closure2_slot1;
                entity['commandTargetId'] = oscar;
                entity = report.bind(mike)(entity);
                entity = 7;
                entity = tango[entity];
                mike = zulu.bind(mike)(entity);
                entity = mike.hideActionSheet;
                entity = entity.bind(mike)();
 122:
                entity = undefined;
                return entity;
            }
        };
        sizing = options.bind(verify)(report, golf);
        var _closure2_slot8 = sizing;
        options = verify.useCallback;
        golf = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                zulu = mike.type;
                entity = 'command';
                if(!(entity !== zulu)) { _fun00006_ip = 23; continue _fun00005 }
 16:
                entity = mike.type;
                _fun00006_ip = 34; continue _fun00005;
 23:
                mike = mike.command;
                entity = mike.id;
 34:
                return entity;
            }
        };
        report = new Array(0);
        options = options.bind(verify)(golf, report);
        golf = verify.useCallback;
        report = new Array(3);
        report[0] = sizing;
        report[1] = kilo;
        report[2] = zulu;
        zulu = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                report = entity.item;
                var _closure3_slot0 = report;
                mike = report.type;
                entity = 'placeholder';
                if(!(entity !== mike)) { _fun00008_ip = 183; continue _fun00007 }
 30:
                entity = 'no_commands';
                if(!(entity !== mike)) { _fun00008_ip = 138; continue _fun00007 }
 40:
                entity = 'command';
                if(!(entity !== mike)) { _fun00008_ip = 52; continue _fun00007 }
 48:
                entity = undefined;
                return entity;
 52:
                tango = _closure1_slot7;
                mike = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                golf = report.command;
                entity['item'] = golf;
                oscar = function() { // Original name: onPress
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00010_ip = 23; continue _fun00009 }
 13:
                        zulu = _closure2_slot2;
                        mike = undefined;
                        mike = zulu.bind(mike)();
 23:
                        zulu = _closure2_slot8;
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    }
                };
                entity['onPress'] = oscar;
                oscar = _closure2_slot7;
                report = report.command;
                report = report.applicationId;
                report = oscar[report];
                entity['section'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
 138:
                tango = _closure1_slot7;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.ContextMenuCommandEmptyItem;
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
 183:
                tango = _closure1_slot7;
                mike = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.ContextMenuCommandLoadingItem;
                entity = {};
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        golf = golf.bind(verify)(zulu, report);
        report = verify.useMemo;
        zulu = new Array(2);
        zulu[0] = backup;
        zulu[1] = foxtrot;
        mike = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure2_slot6;
                if(mike) { _fun00012_ip = 75; continue _fun00011 }
 10:
                mike = _closure2_slot4;
                zulu = mike.length;
                mike = 0;
                if(!(mike !== zulu)) { _fun00012_ip = 50; continue _fun00011 }
 25:
                zulu = _closure2_slot4;
                mike = zulu.map;
                entity = function(argFoo) {
                    entity = {};
                    mike = 'command';
                    entity['type'] = mike;
                    mike = argFoo;
                    entity['command'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                _fun00012_ip = 73; continue _fun00011;
 50:
                zulu = {};
                mike = 'no_commands';
                zulu['type'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 73:
                _fun00012_ip = 96; continue _fun00011;
 75:
                zulu = {};
                mike = 'placeholder';
                zulu['type'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 96:
                return entity;
            }
        };
        verify = report.bind(verify)(mike, zulu);
        zulu = _closure1_slot7;
        mike = _closure1_slot1;
        report = 9;
        entity = offset[report];
        mike = mike.bind(tango)(entity);
        entity = {};
        foxtrot = 10;
        backup = offset[foxtrot];
        backup = oscar.bind(tango)(backup);
        kilo = backup.intl;
        backup = kilo.string;
        foxtrot = offset[foxtrot];
        foxtrot = oscar.bind(tango)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.PHjkRE;
        foxtrot = backup.bind(kilo)(foxtrot);
        entity['title'] = foxtrot;
        entity['onBack'] = romeo;
        entity['scrollable'] = yankee;
        report = offset[report];
        report = oscar.bind(tango)(report);
        oscar = report.UserProfileStackedActionSheetList;
        report = {};
        report['data'] = verify;
        report['keyExtractor'] = options;
        report['renderItem'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();