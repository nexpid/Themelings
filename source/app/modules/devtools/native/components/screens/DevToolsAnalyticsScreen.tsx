// app/modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: CommonProperty
        entity = argFoo;
        verify = entity.name;
        oscar = entity.children;
        entity = _closure1_slot10;
        tango = undefined;
        golf = entity.bind(tango)();
        zulu = _closure1_slot9;
        mike = _closure1_slot5;
        entity = {};
        golf = golf.commonProperty;
        entity['style'] = golf;
        options = _closure1_slot8;
        golf = _closure1_slot0;
        offset = _closure1_slot2;
        report = 9;
        report = offset[report];
        report = golf.bind(tango)(report);
        golf = report.Text;
        report = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
        report['children'] = verify;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: LoggedEvent
        _fun98309: for(var _fun98309_ip = 0; ; ) switch(_fun98309_ip) {
 0:
            entity = argFoo;
            romeo = entity.event;
            output = entity.properties;
            sequence = entity.timestamp;
            status = entity.fingerprint;
            var _closure2_slot0 = status;
            offset = entity.start;
            verify = entity.end;
            entity = _closure1_slot10;
            tango = undefined;
            kilo = entity.bind(tango)();
            var _closure2_slot1 = kilo;
            mike = _closure1_slot4;
            entity = mike.useState;
            report = false;
            zulu = entity.bind(mike)(report);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            oscar = mike[entity];
            entity = 1;
            entity = mike[entity];
            var _closure2_slot2 = entity;
            mike = _closure1_slot6;
            entity = mike.getUser;
            context = entity.bind(mike)(status);
            zulu = _closure1_slot9;
            mike = _closure1_slot5;
            entity = {};
            entity['collapsable'] = report;
            options = _closure1_slot8;
            sizing = _closure1_slot0;
            echo = _closure1_slot2;
            report = 10;
            report = echo[report];
            report = sizing.bind(tango)(report);
            golf = report.TableRow;
            report = {};
            foxtrot = !oscar;
            report['arrow'] = foxtrot;
            result = _closure1_slot8;
            foxtrot = 11;
            foxtrot = echo[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            sizing = foxtrot.AnalyticsIcon;
            foxtrot = {};
            foxtrot = result.bind(tango)(sizing, foxtrot);
            report['icon'] = foxtrot;
            report['label'] = romeo;
            romeo = 'name';
            romeo = romeo in output;
            if(romeo) { _fun98309_ip = 268; continue _fun98309 }
 225:
            result = output.location;
            romeo = null;
            sizing = romeo == result;
            foxtrot = undefined;
            if(sizing) { _fun98309_ip = 250; continue _fun98309 }
 241:
            sizing = result.toString;
            foxtrot = sizing.bind(result)();
 250:
            sizing = romeo != foxtrot;
            romeo = 'N/A';
            if(!sizing) { _fun98309_ip = 266; continue _fun98309 }
 263:
            romeo = foxtrot;
 266:
            _fun98309_ip = 273; continue _fun98309;
 268:
            romeo = output.name;
 273:
            report['subLabel'] = romeo;
            romeo = function() { // Original name: onPress
                zulu = _closure2_slot2;
                mike = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            report['onPress'] = romeo;
            report['start'] = offset;
            report['end'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            if(!oscar) { _fun98309_ip = 944; continue _fun98309 }
 317:
            verify = _closure1_slot9;
            options = _closure1_slot5;
            golf = {};
            offset = kilo.detailsContainer;
            golf['style'] = offset;
            foxtrot = _closure1_slot9;
            romeo = _closure1_slot5;
            offset = {};
            sizing = kilo.commonPropertiesContainer;
            offset['style'] = sizing;
            echo = _closure1_slot8;
            result = _closure1_slot11;
            sizing = {};
            update = 'Timestamp (local)';
            sizing['name'] = update;
            control = _closure1_slot8;
            source = _closure1_slot0;
            papa = _closure1_slot2;
            config = 9;
            update = papa[config];
            update = source.bind(tango)(update);
            source = update.Text;
            update = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            record = _closure1_slot1;
            vacuum = 12;
            vacuum = papa[vacuum];
            vacuum = record.bind(tango)(vacuum);
            sequence = vacuum.bind(tango)(sequence);
            vacuum = sequence.calendar;
            vacuum = vacuum.bind(sequence)();
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            sizing['children'] = update;
            result = echo.bind(tango)(result, sizing);
            sizing = new Array(3);
            sizing[0] = result;
            source = null;
            result = source != context;
            if(!result) { _fun98309_ip = 554; continue _fun98309 }
 488:
            control = _closure1_slot8;
            update = _closure1_slot11;
            echo = {};
            vacuum = 'User ';
            echo['name'] = vacuum;
            record = _closure1_slot8;
            sequence = _closure1_slot1;
            papa = _closure1_slot2;
            vacuum = 13;
            vacuum = papa[vacuum];
            sequence = sequence.bind(tango)(vacuum);
            vacuum = {};
            vacuum['user'] = context;
            vacuum = record.bind(tango)(sequence, vacuum);
            echo['children'] = vacuum;
            result = control.bind(tango)(update, echo);
 554:
            sizing[1] = result;
            update = _closure1_slot8;
            echo = _closure1_slot11;
            result = {};
            control = 'Fingerprint';
            result['name'] = control;
            if(!(source == status)) { _fun98309_ip = 645; continue _fun98309 }
 582:
            vacuum = _closure1_slot8;
            control = _closure1_slot0;
            source = _closure1_slot2;
            source = source[config];
            source = control.bind(tango)(source);
            control = source.Text;
            source = {'variant': 'text-sm/medium', 'color': 'text-muted', 'style': null, 'children': 'null'};
            sequence = kilo.monospace;
            source['style'] = sequence;
            source = vacuum.bind(tango)(control, source);
            _fun98309_ip = 832; continue _fun98309;
 645:
            sequence = _closure1_slot9;
            context = _closure1_slot0;
            target = _closure1_slot2;
            control = 14;
            control = target[control];
            control = context.bind(tango)(control);
            vacuum = control.PressableOpacity;
            control = {};
            record = kilo.copyContainer;
            control['style'] = record;
            record = function() { // Original name: onPress
                _fun98312: for(var _fun98312_ip = 0; ; ) switch(_fun98312_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun98312_ip = 53; continue _fun98312 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 15;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.copy;
                    entity = _closure2_slot0;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            control['onPress'] = record;
            papa = _closure1_slot8;
            config = target[config];
            config = context.bind(tango)(config);
            record = config.Text;
            config = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            lima = kilo.monospace;
            sierra = new Array(2);
            sierra[0] = lima;
            lima = {};
            whiskey = 4;
            lima['marginRight'] = whiskey;
            sierra[1] = lima;
            config['style'] = sierra;
            config['children'] = status;
            record = papa.bind(tango)(record, config);
            config = new Array(2);
            config[0] = record;
            papa = _closure1_slot8;
            record = 16;
            record = target[record];
            record = context.bind(tango)(record);
            context = record.CopyIcon;
            record = {};
            target = 'sm';
            record['size'] = target;
            record = papa.bind(tango)(context, record);
            config[1] = record;
            control['children'] = config;
            source = sequence.bind(tango)(vacuum, control);
 832:
            result['children'] = source;
            result = update.bind(tango)(echo, result);
            sizing[2] = result;
            offset['children'] = sizing;
            romeo = foxtrot.bind(tango)(romeo, offset);
            offset = new Array(2);
            offset[0] = romeo;
            foxtrot = _closure1_slot8;
            romeo = _closure1_slot5;
            yankee = {};
            kilo = kilo.customPropertiesContainer;
            yankee['style'] = kilo;
            kilo = global;
            sizing = kilo.Object;
            kilo = sizing.entries;
            sizing = kilo.bind(sizing)(output);
            kilo = sizing.map;
            backup = function(argFoo) {
                _fun98313: for(var _fun98313_ip = 0; ; ) switch(_fun98313_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu[Symbol.iterator];
                    zulu = entity().next;
                    oscar = zulu().value;
                    mike = entity;
                    report = undefined;
                    mike = mike === report;
                    tango = undefined;
                    if(mike) { _fun98313_ip = 27; continue _fun98313 }
 24:
                    tango = oscar;
 27:
                    foxtrot = undefined;
                    if(mike) { _fun98313_ip = 57; continue _fun98313 }
 32:
                    oscar = zulu().value;
                    zulu = entity;
                    zulu = zulu === report;
                    foxtrot = undefined;
                    mike = zulu;
                    if(zulu) { _fun98313_ip = 57; continue _fun98313 }
 51:
                    foxtrot = oscar;
                    mike = zulu;
 57:
                    if(mike) { _fun98313_ip = 63; continue _fun98313 }
 60:
                    entity.return();
 63:
                    zulu = _closure1_slot9;
                    mike = _closure1_slot5;
                    entity = {};
                    kilo = _closure2_slot1;
                    oscar = kilo.customProperty;
                    entity['style'] = oscar;
                    backup = _closure1_slot9;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 9;
                    oscar = offset[golf];
                    oscar = options.bind(report)(oscar);
                    romeo = oscar.Text;
                    oscar = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
                    kilo = kilo.customPropertyName;
                    oscar['style'] = kilo;
                    kilo = new Array(2);
                    kilo[0] = tango;
                    sizing = ':';
                    kilo[1] = sizing;
                    oscar['children'] = kilo;
                    romeo = backup.bind(report)(romeo, oscar);
                    oscar = new Array(2);
                    oscar[0] = romeo;
                    verify = _closure1_slot8;
                    golf = offset[golf];
                    golf = options.bind(report)(golf);
                    options = golf.Text;
                    golf = null;
                    if(!(golf == foxtrot)) { _fun98313_ip = 236; continue _fun98313 }
 204:
                    golf = {'variant': 'text-sm/semibold', 'color': 'text-muted', 'style': null, 'children': 'null'};
                    offset = _closure2_slot1;
                    offset = offset.monospace;
                    golf['style'] = offset;
                    _fun98313_ip = 290; continue _fun98313;
 236:
                    offset = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
                    yankee = _closure2_slot1;
                    yankee = yankee.monospace;
                    offset['style'] = yankee;
                    yankee = global;
                    romeo = yankee.JSON;
                    yankee = romeo.stringify;
                    yankee = yankee.bind(romeo)(foxtrot);
                    offset['children'] = yankee;
                    golf = offset;
 290:
                    golf = verify.bind(report)(options, golf);
                    oscar[1] = golf;
                    entity['children'] = oscar;
                    entity = zulu.bind(report)(mike, entity, tango);
                    return entity;
                }
            };
            backup = kilo.bind(sizing)(backup);
            yankee['children'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 944:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    foxtrot = 1;
    golf = oscar[foxtrot];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.Fonts;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    yankee = 8;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = backup;
    verify['flex'] = foxtrot;
    tango['analyticsContainer'] = verify;
    verify = {};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    verify['padding'] = foxtrot;
    tango['contentContainer'] = verify;
    verify = {};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtrot;
    tango['detailsContainer'] = verify;
    verify = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = yankee;
    yankee = 10;
    verify['paddingHorizontal'] = yankee;
    tango['commonPropertiesContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginVertical': 8, 'height': 20};
    tango['commonProperty'] = verify;
    verify = {'flexGrow': 0, 'height': 22};
    tango['commonPropertyDiscordTag'] = verify;
    verify = {'paddingHorizontal': 10, 'paddingVertical': 4};
    tango['customPropertiesContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'justifyContent': 'flex-start', 'marginVertical': 4};
    tango['customProperty'] = verify;
    verify = {'fontWeight': '600', 'fontFamily': null, 'marginRight': 4};
    yankee = offset.CODE_BOLD;
    verify['fontFamily'] = yankee;
    tango['customPropertyName'] = verify;
    verify = {};
    offset = offset.CODE_BOLD;
    verify['fontFamily'] = offset;
    tango['monospace'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['copyContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/devtools/native/components/screens/DevToolsAnalyticsScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: DevToolsAnalyticsScreen
        _fun98314: for(var _fun98314_ip = 0; ; ) switch(_fun98314_ip) {
 0:
            entity = _closure1_slot10;
            tango = undefined;
            backup = entity.bind(tango)();
            update = _closure1_slot0;
            control = _closure1_slot2;
            entity = 17;
            entity = control[entity];
            oscar = update.bind(tango)(entity);
            report = oscar.useStateFromStores;
            entity = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = entity;
            mike = function() {
                entity = _closure1_slot7;
                entity = entity.loggedEventsVersion;
                return entity;
            };
            romeo = report.bind(oscar)(zulu, mike);
            foxtrot = entity.loggedEvents;
            var _closure2_slot0 = foxtrot;
            zulu = _closure1_slot4;
            mike = zulu.useState;
            entity = false;
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            yankee = 0;
            offset = mike[yankee];
            entity = 1;
            papa = mike[entity];
            mike = _closure1_slot1;
            entity = 18;
            entity = control[entity];
            entity = mike.bind(tango)(entity);
            verify = entity.bind(tango)();
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = backup.analyticsContainer;
            entity['style'] = report;
            golf = _closure1_slot8;
            report = 19;
            report = control[report];
            report = update.bind(tango)(report);
            oscar = report.FlashList;
            report = {};
            output = _closure1_slot9;
            kilo = 20;
            kilo = control[kilo];
            kilo = update.bind(tango)(kilo);
            sizing = kilo.Stack;
            kilo = {};
            result = 16;
            kilo['spacing'] = result;
            sequence = _closure1_slot9;
            echo = 21;
            result = control[echo];
            result = update.bind(tango)(result);
            source = result.TableRowGroup;
            result = {'title': 'Actions', 'hasIcons': true};
            context = _closure1_slot8;
            config = 22;
            config = control[config];
            config = update.bind(tango)(config);
            record = config.TableSwitchRow;
            config = {};
            sierra = _closure1_slot8;
            target = 23;
            target = control[target];
            target = update.bind(tango)(target);
            status = target.ArrowsUpDownIcon;
            target = {};
            target = sierra.bind(tango)(status, target);
            config['icon'] = target;
            target = 'Reverse Events';
            config['label'] = target;
            config['value'] = offset;
            config['onValueChange'] = papa;
            record = context.bind(tango)(record, config);
            config = new Array(2);
            config[0] = record;
            target = _closure1_slot8;
            record = 10;
            context = control[record];
            context = update.bind(tango)(context);
            papa = context.TableRow;
            context = {'arrow': true, 'variant': 'danger', 'icon': null, 'label': 'Clear Analytics Log'};
            lima = _closure1_slot8;
            status = 24;
            status = control[status];
            status = update.bind(tango)(status);
            sierra = status.TrashIcon;
            status = {};
            whiskey = 'text-danger';
            status['color'] = whiskey;
            status = lima.bind(tango)(sierra, status);
            context['icon'] = status;
            status = 25;
            status = control[status];
            status = update.bind(tango)(status);
            status = status.clearAnalyticsLog;
            context['onPress'] = status;
            context = target.bind(tango)(papa, context);
            config[1] = context;
            result['children'] = config;
            source = sequence.bind(tango)(source, result);
            result = new Array(2);
            result[0] = source;
            source = _closure1_slot8;
            echo = control[echo];
            echo = update.bind(tango)(echo);
            update = echo.TableRowGroup;
            echo = {};
            control = 'Analytics Events';
            echo['title'] = control;
            sequence = foxtrot.length;
            control = null;
            if(!(yankee === sequence)) { _fun98314_ip = 560; continue _fun98314 }
 515:
            config = _closure1_slot8;
            sequence = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[record];
            vacuum = sequence.bind(tango)(vacuum);
            sequence = vacuum.TableRow;
            vacuum = {};
            record = 'No events logged.';
            vacuum['label'] = record;
            control = config.bind(tango)(sequence, vacuum);
 560:
            echo['children'] = control;
            echo = source.bind(tango)(update, echo);
            result[1] = echo;
            kilo['children'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            report['ListHeaderComponent'] = kilo;
            backup = backup.contentContainer;
            report['contentContainerStyle'] = backup;
            report['extraData'] = romeo;
            romeo = new Array(0);
            variable36 = romeo;
            quebec = foxtrot;
            equality = 0;
            yankee = arraySpread(variable36, quebec, equality);
            if(offset) { _fun98314_ip = 629; continue _fun98314 }
 624:
            offset = romeo;
            _fun98314_ip = 639; continue _fun98314;
 629:
            yankee = romeo.reverse;
            offset = yankee.bind(romeo)();
 639:
            report['data'] = offset;
            report['estimatedItemSize'] = verify;
            options = function(argFoo) { // Original name: renderItem
                mike = argFoo;
                entity = mike.item;
                oscar = mike.index;
                tango = _closure1_slot8;
                zulu = _closure1_slot12;
                mike = {};
                report = 0;
                report = report === oscar;
                mike['start'] = report;
                report = _closure2_slot0;
                golf = report.length;
                report = 1;
                report = golf - report;
                report = oscar === report;
                mike['end'] = report;
                report = entity.event;
                mike['event'] = report;
                report = entity.properties;
                mike['properties'] = report;
                report = entity.timestamp;
                mike['timestamp'] = report;
                entity = entity.fingerprint;
                mike['fingerprint'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report['renderItem'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();