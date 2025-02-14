// app/modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    options = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = options;
    var _closure1_slot3 = golf;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun76677: for(var _fun76677_ip = 0; ; ) switch(_fun76677_ip) {
 0:
            golf = argFoo;
            tango = 'object';
            entity = typeof golf;
            mike = golf;
            if(!(tango === entity)) { _fun76677_ip = 119; continue _fun76677 }
 17:
            mike = golf;
            if(!mike) { _fun76677_ip = 119; continue _fun76677 }
 23:
            entity = global;
            zulu = entity.Symbol;
            zulu = zulu.toPrimitive;
            oscar = golf[zulu];
            report = undefined;
            if(!(report === oscar)) { _fun76677_ip = 60; continue _fun76677 }
 47:
            zulu = entity.String;
            mike = zulu.bind(report)(golf);
            _fun76677_ip = 119; continue _fun76677;
 60:
            report = oscar.call;
            zulu = 'string';
            report = report.bind(oscar)(golf, zulu);
            zulu = typeof report;
            mike = report;
            if(!(tango === zulu)) { _fun76677_ip = 119; continue _fun76677 }
 85:
            tango = entity.TypeError;
            entity = tango.prototype;
            zulu = Object.create(entity, {constructor: {value: tango}});
            verify = '@@toPrimitive must return a primitive value.';
            offset = zulu;
            entity = new offset[tango](verify, options);
            entity = entity instanceof Object ? entity : zulu;
            throw entity;
 119:
            tango = 'symbol';
            zulu = typeof mike;
            entity = mike;
            if(!(tango !== zulu)) { _fun76677_ip = 136; continue _fun76677 }
 133:
            entity = '' + mike;
 136:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: getFullRowId
        entity = argFoo;
        report = entity.rowType;
        tango = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = ':';
        entity = zulu.bind(mike)(report, entity, tango);
        return entity;
    };
    var _closure1_slot22 = entity;
    mike = function(argFoo) { // Original name: AddMembersBody
        _fun76679: for(var _fun76679_ip = 0; ; ) switch(_fun76679_ip) {
 0:
            report = argFoo;
            vacuum = report.channel;
            update = report.guild;
            var _closure2_slot0 = update;
            source = report.pendingAdditions;
            var _closure2_slot1 = source;
            entity = report.setPendingAdditions;
            var _closure2_slot2 = entity;
            result = report.permission;
            tango = undefined;
            if(!(result === tango)) { _fun76679_ip = 80; continue _fun76679 }
 51:
            mike = _closure1_slot2;
            zulu = _closure1_slot3;
            entity = 14;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            result = entity.NONE;
 80:
            echo = report.fullScreen;
            mike = report.inActionSheet;
            zulu = {'channel': 0, 'guild': 0, 'pendingAdditions': 0, 'setPendingAdditions': 0, 'permission': 0, 'fullScreen': 0, 'inActionSheet': 0};
            variable36 = null;
            variable37 = zulu;
            entity = silentSetPrototypeOf(variable37, variable36);
            romeo = 0;
            variable37 = {};
            variable36 = report;
            quebec = zulu;
            offset = copyDataProperties(variable37, variable36, quebec);
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            entity = function(argFoo, argBar) { // Original name: getQuery
                _fun76680: for(var _fun76680_ip = 0; ; ) switch(_fun76680_ip) {
 0:
                    tango = argFoo;
                    mike = argBar;
                    entity = tango;
                    if(!mike) { _fun76680_ip = 25; continue _fun76680 }
 12:
                    zulu = tango.slice;
                    mike = 1;
                    entity = zulu.bind(tango)(mike);
 25:
                    return entity;
                }
            };
            var _closure2_slot12 = entity;
            options = function(argFoo) { // Original name: filterByQuery
                zulu = _closure2_slot12;
                tango = _closure2_slot6;
                mike = tango.trim;
                mike = mike.bind(tango)();
                entity = _closure2_slot4;
                oscar = undefined;
                report = zulu.bind(oscar)(mike, entity);
                entity = global;
                tango = entity.RegExp;
                zulu = _closure1_slot1;
                golf = _closure1_slot3;
                mike = 16;
                mike = golf[mike];
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.escape;
                zulu = mike.bind(zulu)(report);
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '';
                verify = mike.bind(entity)(zulu);
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                options = 'i';
                offset = mike;
                entity = new offset[tango](verify, options, golf);
                zulu = entity instanceof Object ? entity : mike;
                mike = zulu.test;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = _closure1_slot20;
            kilo = entity.bind(tango)();
            _closure2_slot3 = kilo;
            report = _closure1_slot7;
            zulu = report.useState;
            entity = false;
            zulu = zulu.bind(report)(entity);
            entity = _closure1_slot6;
            verify = 2;
            report = entity.bind(tango)(zulu, verify);
            entity = report[romeo];
            _closure2_slot4 = entity;
            zulu = 1;
            report = report[zulu];
            _closure2_slot5 = report;
            oscar = _closure1_slot7;
            report = oscar.useState;
            foxtrot = '';
            oscar = report.bind(oscar)(foxtrot);
            report = _closure1_slot6;
            report = report.bind(tango)(oscar, verify);
            output = report[romeo];
            _closure2_slot6 = output;
            report = report[zulu];
            _closure2_slot7 = report;
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            report = 15;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = {'includeKeyboardHeightIOS': true, 'includeKeyboardHeightAndroid': true};
            report = oscar.bind(tango)(report);
            sizing = report.insets;
            oscar = _closure1_slot2;
            report = 14;
            report = golf[report];
            control = oscar.bind(tango)(report);
            oscar = control.canEveryoneRole;
            report = _closure1_slot15;
            report = report.ADMINISTRATOR;
            control = oscar.bind(control)(report, update);
            oscar = _closure1_slot0;
            report = 17;
            sequence = golf[report];
            context = oscar.bind(tango)(sequence);
            record = context.useStateFromStores;
            sequence = _closure1_slot11;
            config = new Array(1);
            config[0] = sequence;
            sequence = function() {
                zulu = _closure1_slot11;
                mike = zulu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            context = record.bind(context)(config, sequence);
            report = golf[report];
            sequence = oscar.bind(tango)(report);
            golf = sequence.useStateFromStoresArray;
            report = _closure1_slot10;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot10;
                mike = zulu.getMemberIds;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = golf.bind(sequence)(oscar, report);
            if(entity) { _fun76679_ip = 602; continue _fun76679 }
 461:
            report = _closure1_slot2;
            entity = _closure1_slot3;
            config = 18;
            entity = entity[config];
            report = report.bind(tango)(entity);
            entity = report.getRolesRows;
            variable38 = report;
            variable37 = update;
            variable36 = context;
            quebec = vacuum;
            equality = result;
            whiskey = options;
            entity = variable38[entity](variable37, variable36, quebec, equality, whiskey, lima);
            report = entity.length;
            golf = entity;
            if(!(romeo === report)) { _fun76679_ip = 606; continue _fun76679 }
 521:
            report = output.trim;
            report = report.bind(output)();
            report = foxtrot !== report;
            if(report) { _fun76679_ip = 567; continue _fun76679 }
 538:
            record = _closure1_slot2;
            sequence = _closure1_slot3;
            sequence = sequence[config];
            record = record.bind(tango)(sequence);
            sequence = record.hasCustomRoles;
            report = sequence.bind(record)(update, context);
 567:
            if(report) { _fun76679_ip = 597; continue _fun76679 }
 570:
            sequence = _closure1_slot2;
            report = _closure1_slot3;
            report = report[config];
            sequence = sequence.bind(tango)(report);
            report = sequence.getNoRolesRow;
            entity = report.bind(sequence)();
 597:
            golf = entity;
            _fun76679_ip = 606; continue _fun76679;
 602:
            golf = new Array(0);
 606:
            report = _closure1_slot2;
            sequence = _closure1_slot3;
            entity = 18;
            entity = sequence[entity];
            report = report.bind(tango)(entity);
            entity = report.getMembersRows;
            variable38 = report;
            variable37 = oscar;
            variable36 = vacuum;
            quebec = update;
            equality = result;
            whiskey = options;
            oscar = variable38[entity](variable37, variable36, quebec, equality, whiskey, lima);
            report = new Array(0);
            entity = golf.length;
            if(!(!(entity > romeo))) { _fun76679_ip = 673; continue _fun76679 }
 667:
            entity = new Array(0);
            _fun76679_ip = 739; continue _fun76679;
 673:
            vacuum = _closure1_slot0;
            sequence = _closure1_slot3;
            options = 23;
            result = sequence[options];
            result = vacuum.bind(tango)(result);
            update = result.intl;
            result = update.string;
            options = sequence[options];
            options = vacuum.bind(tango)(options);
            options = options.t;
            options = options.LPJmLy;
            result = result.bind(update)(options);
            options = new Array(1);
            options[0] = result;
            entity = options;
 739:
            update = new Array(0);
            variable37 = update;
            variable36 = entity;
            quebec = 0;
            quebec = arraySpread(variable37, variable36, quebec);
            variable37 = update;
            variable36 = golf;
            options = arraySpread(variable37, variable36, quebec);
            entity = oscar.length;
            if(!(!(entity > romeo))) { _fun76679_ip = 780; continue _fun76679 }
 774:
            entity = new Array(0);
            _fun76679_ip = 846; continue _fun76679;
 780:
            config = _closure1_slot0;
            record = _closure1_slot3;
            result = 23;
            vacuum = record[result];
            vacuum = config.bind(tango)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            result = record[result];
            result = config.bind(tango)(result);
            result = result.t;
            result = result.9Oq93t;
            vacuum = vacuum.bind(sequence)(result);
            result = new Array(1);
            result[0] = vacuum;
            entity = result;
 846:
            variable37 = update;
            variable36 = entity;
            quebec = options;
            quebec = arraySpread(variable37, variable36, quebec);
            variable37 = update;
            variable36 = oscar;
            entity = arraySpread(variable37, variable36, quebec);
            entity = golf.length;
            entity = entity > romeo;
            options = 0;
            if(!entity) { _fun76679_ip = 886; continue _fun76679 }
 883:
            options = zulu;
 886:
            _closure2_slot8 = options;
            entity = golf.length;
            entity = options + entity;
            entity = entity - zulu;
            _closure2_slot9 = entity;
            result = oscar.length;
            options = entity;
            if(!(result > romeo)) { _fun76679_ip = 923; continue _fun76679 }
 919:
            options = entity + verify;
 923:
            _closure2_slot10 = options;
            entity = oscar.length;
            entity = options + entity;
            entity = entity - zulu;
            _closure2_slot11 = entity;
            zulu = report.push;
            entity = {};
            sequence = _closure1_slot0;
            options = _closure1_slot3;
            result = 23;
            verify = options[result];
            verify = sequence.bind(tango)(verify);
            config = verify.intl;
            vacuum = config.string;
            verify = options[result];
            verify = sequence.bind(tango)(verify);
            verify = verify.t;
            verify = verify.LPJmLy;
            verify = vacuum.bind(config)(verify);
            entity['title'] = verify;
            entity['data'] = golf;
            entity = zulu.bind(report)(entity);
            zulu = report.push;
            entity = {};
            verify = options[result];
            verify = sequence.bind(tango)(verify);
            vacuum = verify.intl;
            verify = vacuum.string;
            options = options[result];
            options = sequence.bind(tango)(options);
            options = options.t;
            options = options.9Oq93t;
            options = verify.bind(vacuum)(options);
            entity['title'] = options;
            entity['data'] = oscar;
            entity = zulu.bind(report)(entity);
            entity = global;
            zulu = entity.Object;
            entity = zulu.values;
            report = entity.bind(zulu)(source);
            zulu = report.map;
            entity = function(argFoo) {
                entity = argFoo;
                tango = entity.display;
                mike = entity.row;
                entity = {};
                report = entity;
                zulu = copyDataProperties(report, tango);
                zulu = mike.id;
                mike = 'id';
                entity[mike] = zulu;
                return entity;
            };
            papa = zulu.bind(report)(entity);
            if(mike) { _fun76679_ip = 1127; continue _fun76679 }
 1121:
            verify = _closure1_slot9;
            _fun76679_ip = 1153; continue _fun76679;
 1127:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 24;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            verify = entity.BottomSheetScrollView;
 1153:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 25;
            entity = report[entity];
            entity = zulu.bind(tango)(entity);
            if(mike) { _fun76679_ip = 1184; continue _fun76679 }
 1176:
            options = entity.FlashList;
            _fun76679_ip = 1190; continue _fun76679;
 1184:
            options = entity.BottomSheetFlashList;
 1190:
            zulu = _closure1_slot18;
            mike = _closure1_slot17;
            entity = {};
            sequence = _closure1_slot16;
            vacuum = _closure1_slot8;
            report = {};
            config = kilo.inputContainer;
            report['style'] = config;
            context = _closure1_slot16;
            record = _closure1_slot1;
            target = _closure1_slot3;
            config = 26;
            config = target[config];
            record = record.bind(tango)(config);
            config = {};
            lima = _closure1_slot0;
            status = target[result];
            status = lima.bind(tango)(status);
            sierra = status.intl;
            status = sierra.string;
            target = target[result];
            target = lima.bind(tango)(target);
            target = target.t;
            target = target.TVZdKi;
            target = status.bind(sierra)(target);
            config['placeholder'] = target;
            config['tags'] = papa;
            papa = function(argFoo) { // Original name: onChangeText
                report = argFoo;
                entity = report.trim;
                offset = entity.bind(report)();
                mike = offset.charAt;
                entity = 0;
                mike = mike.bind(offset)(entity);
                entity = '@';
                zulu = entity === mike;
                oscar = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 27;
                mike = mike[entity];
                entity = undefined;
                verify = oscar.bind(entity)(mike);
                options = verify.requestMembers;
                oscar = _closure2_slot0;
                golf = oscar.id;
                oscar = _closure2_slot12;
                oscar = oscar.bind(entity)(offset, zulu);
                tango = _closure1_slot14;
                tango = options.bind(verify)(golf, oscar, tango);
                tango = _closure2_slot7;
                tango = tango.bind(entity)(report);
                mike = _closure2_slot5;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            config['onChangeText'] = papa;
            papa = function(argFoo) { // Original name: onRemove
                entity = global;
                report = entity.Object;
                tango = report.keys;
                zulu = _closure2_slot1;
                tango = tango.bind(report)(zulu);
                zulu = argFoo;
                zulu = tango[zulu];
                var _closure3_slot0 = zulu;
                zulu = _closure2_slot2;
                entity = undefined;
                mike = function(argFoo) {
                    tango = argFoo;
                    mike = _closure3_slot0;
                    entity = tango[mike];
                    zulu = _closure1_slot5;
                    report = new Array(1);
                    report[0] = mike;
                    mike = report.map;
                    entity = _closure1_slot21;
                    mike = mike.bind(report)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            config['onRemove'] = papa;
            config = context.bind(tango)(record, config);
            report['children'] = config;
            vacuum = sequence.bind(tango)(vacuum, report);
            report = new Array(3);
            report[0] = vacuum;
            if(!control) { _fun76679_ip = 1498; continue _fun76679 }
 1358:
            config = _closure1_slot16;
            sequence = _closure1_slot8;
            vacuum = {};
            record = kilo.adminWarning;
            vacuum['style'] = record;
            papa = _closure1_slot16;
            context = _closure1_slot1;
            target = _closure1_slot3;
            status = 28;
            record = target[status];
            context = context.bind(tango)(record);
            record = {};
            lima = _closure1_slot0;
            status = target[status];
            status = lima.bind(tango)(status);
            status = status.HelpMessageTypes;
            status = status.WARNING;
            record['messageType'] = status;
            status = target[result];
            status = lima.bind(tango)(status);
            sierra = status.intl;
            status = sierra.string;
            target = target[result];
            target = lima.bind(tango)(target);
            target = target.t;
            target = target.5f3HIC;
            target = status.bind(sierra)(target);
            record['children'] = target;
            record = papa.bind(tango)(context, record);
            vacuum['children'] = record;
            control = config.bind(tango)(sequence, vacuum);
 1498:
            report[1] = control;
            if(!(foxtrot !== output)) { _fun76679_ip = 1527; continue _fun76679 }
 1506:
            golf = golf.length;
            if(!(romeo === golf)) { _fun76679_ip = 1527; continue _fun76679 }
 1515:
            oscar = oscar.length;
            if(!(romeo !== oscar)) { _fun76679_ip = 1707; continue _fun76679 }
 1527:
            golf = _closure1_slot16;
            oscar = {};
            variable37 = oscar;
            variable36 = offset;
            foxtrot = copyDataProperties(variable37, variable36);
            control = _closure1_slot19;
            foxtrot = 'estimatedItemSize';
            oscar[foxtrot] = control;
            foxtrot = 'extraData';
            oscar[foxtrot] = source;
            foxtrot = 'data';
            oscar[foxtrot] = update;
            foxtrot = {};
            control = _closure1_slot1;
            update = _closure1_slot3;
            source = 13;
            update = update[source];
            update = control.bind(tango)(update);
            update = update.spacing;
            update = update.PX_16;
            foxtrot['paddingHorizontal'] = update;
            romeo = 0;
            if(echo) { _fun76679_ip = 1653; continue _fun76679 }
 1616:
            update = _closure1_slot1;
            echo = _closure1_slot3;
            echo = echo[source];
            echo = update.bind(tango)(echo);
            echo = echo.spacing;
            echo = echo.PX_16;
            sizing = sizing.bottom;
            romeo = echo + sizing;
 1653:
            foxtrot['paddingBottom'] = romeo;
            romeo = 'contentContainerStyle';
            oscar[romeo] = foxtrot;
            romeo = function(argFoo) { // Original name: renderRow
                _fun76688: for(var _fun76688_ip = 0; ; ) switch(_fun76688_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.item;
                    var _closure3_slot0 = oscar;
                    yankee = entity.index;
                    mike = 'string';
                    entity = typeof oscar;
                    if(!(mike !== entity)) { _fun76688_ip = 214; continue _fun76688 }
 33:
                    tango = _closure1_slot16;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 21;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    golf = _closure2_slot8;
                    golf = golf === yankee;
                    if(golf) { _fun76688_ip = 86; continue _fun76688 }
 78:
                    options = _closure2_slot10;
                    golf = options === yankee;
 86:
                    entity['start'] = golf;
                    golf = _closure2_slot9;
                    golf = golf === yankee;
                    if(golf) { _fun76688_ip = 109; continue _fun76688 }
 101:
                    options = _closure2_slot11;
                    golf = options === yankee;
 109:
                    entity['end'] = golf;
                    entity['item'] = oscar;
                    golf = _closure2_slot0;
                    golf = golf.id;
                    entity['guildId'] = golf;
                    report = function() { // Original name: onPress
                        zulu = _closure3_slot0;
                        mike = function(argFoo) { // Original name: updatePendingAdditions
                            _fun76690: for(var _fun76690_ip = 0; ; ) switch(_fun76690_ip) {
 0:
                                mike = argFoo;
                                var _closure5_slot0 = mike;
                                zulu = mike.rowType;
                                mike = _closure1_slot13;
                                mike = mike.EMPTY_STATE;
                                if(!(zulu !== mike)) { _fun76690_ip = 53; continue _fun76690 }
 32:
                                zulu = _closure2_slot2;
                                mike = undefined;
                                entity = function(argFoo) {
                                    _fun76691: for(var _fun76691_ip = 0; ; ) switch(_fun76691_ip) {
 0:
                                        entity = {};
                                        foxtrot = argFoo;
                                        backup = entity;
                                        mike = copyDataProperties(backup, foxtrot);
                                        zulu = _closure1_slot22;
                                        mike = _closure5_slot0;
                                        verify = undefined;
                                        mike = zulu.bind(verify)(mike);
                                        zulu = mike in entity;
                                        if(zulu) { _fun76691_ip = 399; continue _fun76691 }
 43:
                                        zulu = _closure5_slot0;
                                        report = zulu.rowType;
                                        zulu = _closure1_slot13;
                                        zulu = zulu.ROLE;
                                        if(!(report !== zulu)) { _fun76691_ip = 293; continue _fun76691 }
 70:
                                        zulu = _closure5_slot0;
                                        report = zulu.rowType;
                                        zulu = _closure1_slot13;
                                        zulu = zulu.ADMINISTRATOR;
                                        if(!(report !== zulu)) { _fun76691_ip = 293; continue _fun76691 }
 97:
                                        zulu = _closure5_slot0;
                                        report = zulu.rowType;
                                        zulu = _closure1_slot13;
                                        zulu = zulu.MEMBER;
                                        if(!(report !== zulu)) { _fun76691_ip = 150; continue _fun76691 }
 121:
                                        zulu = _closure5_slot0;
                                        golf = zulu.rowType;
                                        zulu = _closure1_slot13;
                                        zulu = zulu.OWNER;
                                        report = undefined;
                                        if(!(golf === zulu)) { _fun76691_ip = 372; continue _fun76691 }
 150:
                                        options = _closure1_slot12;
                                        golf = options.getUser;
                                        zulu = _closure5_slot0;
                                        zulu = zulu.id;
                                        yankee = golf.bind(options)(zulu);
                                        zulu = null;
                                        zulu = zulu != yankee;
                                        report = undefined;
                                        if(!zulu) { _fun76691_ip = 372; continue _fun76691 }
 188:
                                        zulu = {};
                                        golf = _closure5_slot0;
                                        golf = golf.name;
                                        zulu['text'] = golf;
                                        offset = _closure1_slot16;
                                        options = _closure1_slot1;
                                        romeo = _closure1_slot3;
                                        golf = 19;
                                        golf = romeo[golf];
                                        options = options.bind(verify)(golf);
                                        golf = {};
                                        golf['user'] = yankee;
                                        romeo = _closure2_slot0;
                                        romeo = romeo.id;
                                        golf['guildId'] = romeo;
                                        romeo = _closure2_slot3;
                                        romeo = romeo.tagAvatar;
                                        golf['avatarStyle'] = romeo;
                                        yankee = _closure2_slot3;
                                        yankee = yankee.tagAvatar;
                                        golf['style'] = yankee;
                                        golf = offset.bind(verify)(options, golf);
                                        zulu['icon'] = golf;
                                        report = zulu;
                                        _fun76691_ip = 372; continue _fun76691;
 293:
                                        zulu = {};
                                        romeo = _closure5_slot0;
                                        golf = romeo.name;
                                        zulu['text'] = golf;
                                        options = _closure1_slot16;
                                        golf = _closure1_slot8;
                                        oscar = {};
                                        offset = _closure2_slot3;
                                        yankee = offset.tagRoleColor;
                                        offset = new Array(2);
                                        offset[0] = yankee;
                                        yankee = {};
                                        romeo = romeo.colorString;
                                        yankee['backgroundColor'] = romeo;
                                        offset[1] = yankee;
                                        oscar['style'] = offset;
                                        oscar = options.bind(verify)(golf, oscar);
                                        zulu['icon'] = oscar;
                                        report = zulu;
 372:
                                        zulu = null;
                                        if(!(zulu != report)) { _fun76691_ip = 403; continue _fun76691 }
 378:
                                        zulu = {};
                                        zulu['display'] = report;
                                        tango = _closure5_slot0;
                                        zulu['row'] = tango;
                                        entity[mike] = zulu;
                                        _fun76691_ip = 403; continue _fun76691;
 399:
                                        mike = delete entity[mike];
 403:
                                        return entity;
                                    }
                                };
                                entity = zulu.bind(mike)(entity);
 53:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    entity['onPress'] = report;
                    options = _closure1_slot16;
                    golf = _closure1_slot0;
                    yankee = _closure1_slot3;
                    report = 22;
                    report = yankee[report];
                    report = golf.bind(zulu)(report);
                    golf = report.FormCheckbox;
                    report = {};
                    offset = _closure1_slot22;
                    offset = offset.bind(zulu)(oscar);
                    verify = _closure2_slot1;
                    verify = offset in verify;
                    report['checked'] = verify;
                    report = options.bind(zulu)(golf, report);
                    entity['trailing'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    _fun76688_ip = 291; continue _fun76688;
 214:
                    report = _closure1_slot16;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot3;
                    mike = 20;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.Text;
                    mike = {'style': null, 'maxFontSizeMultiplier': 2, 'accessibilityRole': 'header', 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
                    golf = _closure2_slot3;
                    golf = golf.sectionRowWrapper;
                    mike['style'] = golf;
                    mike['children'] = oscar;
                    entity = report.bind(tango)(zulu, mike);
 291:
                    return entity;
                }
            };
            yankee = 'renderItem';
            oscar[yankee] = romeo;
            romeo = 'handled';
            yankee = 'keyboardShouldPersistTaps';
            oscar[yankee] = romeo;
            oscar = golf.bind(tango)(options, oscar);
            _fun76679_ip = 1873; continue _fun76679;
 1707:
            options = _closure1_slot16;
            golf = {};
            variable37 = golf;
            variable36 = offset;
            offset = copyDataProperties(variable37, variable36);
            romeo = _closure1_slot16;
            yankee = _closure1_slot1;
            foxtrot = _closure1_slot3;
            offset = 29;
            offset = foxtrot[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            backup = _closure1_slot0;
            sizing = 30;
            sizing = foxtrot[sizing];
            sizing = backup.bind(tango)(sizing);
            sizing = sizing.NoResultsAlt;
            offset['Illustration'] = sizing;
            sizing = kilo.emptyState;
            offset['style'] = sizing;
            kilo = kilo.emptyStateText;
            offset['bodyStyle'] = kilo;
            kilo = foxtrot[result];
            kilo = backup.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.format;
            foxtrot = foxtrot[result];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            backup = foxtrot.ErpIY2;
            foxtrot = {};
            foxtrot['query'] = output;
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            offset['body'] = foxtrot;
            yankee = romeo.bind(tango)(yankee, offset);
            offset = 'children';
            golf[offset] = yankee;
            oscar = options.bind(tango)(verify, golf);
 1873:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = romeo.bind(entity)(report);
    var _closure1_slot4 = report;
    yankee = 1;
    report = golf[yankee];
    report = romeo.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.View;
    var _closure1_slot8 = options;
    report = report.ScrollView;
    var _closure1_slot9 = report;
    report = 5;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 7;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.RowType;
    var _closure1_slot13 = options;
    report = report.MEMBER_REQUEST_COUNT;
    var _closure1_slot14 = report;
    report = 9;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.FORM_ROW_VERTICAL_PADDING;
    report = 10;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot15 = report;
    report = 11;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot16 = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot17 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot18 = report;
    report = 30;
    report = options + report;
    var _closure1_slot19 = report;
    report = 12;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    offset['flex'] = yankee;
    report['container'] = offset;
    offset = {};
    yankee = 'center';
    offset['alignItems'] = yankee;
    yankee = 13;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    offset['paddingHorizontal'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    offset['paddingTop'] = foxtrot;
    report['inputContainer'] = offset;
    offset = {'height': 12, 'width': 12, 'borderRadius': 6};
    report['tagRoleColor'] = offset;
    offset = {'width': 16, 'height': 16};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderRadius'] = foxtrot;
    report['tagAvatar'] = offset;
    offset = {};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_16;
    offset['paddingTop'] = foxtrot;
    report['emptyState'] = offset;
    offset = {};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_NORMAL;
    offset['color'] = foxtrot;
    report['emptyStateText'] = offset;
    offset = {};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['paddingVertical'] = yankee;
    report['sectionRowWrapper'] = offset;
    offset = {'marginHorizontal': 16, 'marginVertical': 8};
    report['adminWarning'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot20 = report;
    report = 39;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/channel_permissions/native/action_sheets/AddMembersActionSheet.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: AddMembersActionSheet
        _fun76692: for(var _fun76692_ip = 0; ; ) switch(_fun76692_ip) {
 0:
            entity = argFoo;
            kilo = entity.channel;
            var _closure2_slot0 = kilo;
            yankee = entity.canSkip;
            report = undefined;
            var _closure2_slot1 = report;
            entity = function() { // Original name: _handleAddPressed
                tango = undefined;
                entity = undefined;
                zulu = _closure1_slot4;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun76695: for(var _fun76695_ip = 0; ; ) switch(_fun76695_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun76695_ip = 209; continue _fun76695 }
 12:
                            zulu = new Array(0);
                            mike = zulu;
                            var _closure5_slot0 = zulu;
                            zulu = 0;
                            var _closure5_slot1 = zulu;
                            var _closure5_slot2 = zulu;
                            zulu = global;
                            golf = zulu.Object;
                            report = golf.values;
                            zulu = _closure2_slot1;
                            golf = report.bind(golf)(zulu);
                            report = golf.forEach;
                            zulu = function(argFoo) {
                                _fun76696: for(var _fun76696_ip = 0; ; ) switch(_fun76696_ip) {
 0:
                                    entity = argFoo;
                                    entity = entity.row;
                                    zulu = entity.id;
                                    mike = null;
                                    mike = mike != zulu;
                                    if(!mike) { _fun76696_ip = 36; continue _fun76696 }
 23:
                                    tango = entity.id;
                                    zulu = '';
                                    mike = zulu !== tango;
 36:
                                    if(!mike) { _fun76696_ip = 248; continue _fun76696 }
 42:
                                    zulu = entity.rowType;
                                    mike = _closure1_slot13;
                                    mike = mike.ROLE;
                                    if(!(zulu !== mike)) { _fun76696_ip = 169; continue _fun76696 }
 65:
                                    zulu = entity.rowType;
                                    mike = _closure1_slot13;
                                    mike = mike.MEMBER;
                                    if(!(zulu === mike)) { _fun76696_ip = 248; continue _fun76696 }
 88:
                                    zulu = _closure5_slot1;
                                    zulu = zulu + 1;
                                    _closure5_slot1 = zulu;
                                    report = _closure5_slot0;
                                    zulu = report.push;
                                    golf = _closure1_slot0;
                                    oscar = _closure1_slot3;
                                    mike = 32;
                                    oscar = oscar[mike];
                                    mike = undefined;
                                    options = golf.bind(mike)(oscar);
                                    golf = options.permissionOverwriteForUser;
                                    oscar = entity.id;
                                    mike = _closure2_slot0;
                                    mike = mike.type;
                                    mike = golf.bind(options)(oscar, mike);
                                    mike = zulu.bind(report)(mike);
                                    _fun76696_ip = 248; continue _fun76696;
 169:
                                    zulu = _closure5_slot2;
                                    zulu = zulu + 1;
                                    _closure5_slot2 = zulu;
                                    zulu = _closure5_slot0;
                                    mike = zulu.push;
                                    oscar = _closure1_slot0;
                                    report = _closure1_slot3;
                                    tango = 32;
                                    report = report[tango];
                                    tango = undefined;
                                    oscar = oscar.bind(tango)(report);
                                    report = oscar.permissionOverwriteForRole;
                                    tango = entity.id;
                                    entity = _closure2_slot0;
                                    entity = entity.type;
                                    entity = report.bind(oscar)(tango, entity);
                                    entity = mike.bind(zulu)(entity);
 248:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            zulu = report.bind(golf)(zulu);
 75: // try_start_0
                            options = _closure1_slot0;
                            golf = _closure1_slot3;
                            report = 33;
                            golf = golf[report];
                            report = undefined;
                            options = options.bind(report)(golf);
                            golf = options.savePermissionUpdates;
                            oscar = _closure2_slot0;
                            oscar = oscar.id;
                            mike = golf.bind(options)(oscar, mike);
                            SaveGenerator(address=125);
 123:
                            return mike;
 125:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscar) { _fun76695_ip = 199; continue _fun76695 }
 131:
                            options = _closure1_slot0;
                            oscar = _closure1_slot3;
                            golf = 34;
                            golf = oscar[golf];
                            verify = options.bind(report)(golf);
                            options = verify.memberOrRoleAddedToast;
                            golf = _closure5_slot2;
                            tango = _closure5_slot1;
                            tango = options.bind(verify)(golf, tango);
                            tango = _closure1_slot1;
                            zulu = 35;
                            zulu = oscar[zulu];
                            tango = tango.bind(report)(zulu);
                            zulu = tango.hideActionSheet;
                            zulu = zulu.bind(tango)();
 197: // try_end0
                            _fun76695_ip = 204; continue _fun76695;
 199:
                            return mike;
 202: // catch_target0
                            CatchBlockStart(arg_register=1);
 204:
                            mike = undefined;
                            return mike;
 209:
                            return entity;
                        }
                    };
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                _closure2_slot2 = tango;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure2_slot2 = entity;
            entity = _closure1_slot20;
            offset = entity.bind(report)();
            zulu = _closure1_slot7;
            mike = zulu.useState;
            entity = {};
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = 2;
            mike = mike.bind(report)(zulu, entity);
            zulu = 0;
            backup = mike[zulu];
            _closure2_slot1 = backup;
            entity = 1;
            foxtrot = mike[entity];
            mike = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 17;
            entity = tango[entity];
            golf = mike.bind(report)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot11;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                _fun76697: for(var _fun76697_ip = 0; ; ) switch(_fun76697_ip) {
 0:
                    zulu = _closure1_slot11;
                    mike = zulu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun76697_ip = 44; continue _fun76697 }
 30:
                    report = _closure2_slot0;
                    tango = report.getGuildId;
                    entity = tango.bind(report)();
 44:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            sizing = oscar.bind(golf)(mike, entity);
            mike = _closure1_slot1;
            entity = 31;
            entity = tango[entity];
            entity = mike.bind(report)(entity);
            romeo = true;
            mike = entity.bind(report)(kilo, romeo);
            entity = null;
            tango = entity != mike;
            output = '';
            if(!tango) { _fun76692_ip = 184; continue _fun76692 }
 181:
            output = mike;
 184:
            if(!(entity != sizing)) { _fun76692_ip = 666; continue _fun76692 }
 191:
            mike = global;
            tango = mike.Object;
            mike = tango.keys;
            mike = mike.bind(tango)(backup);
            mike = mike.length;
            echo = zulu === mike;
            tango = _closure1_slot16;
            source = _closure1_slot0;
            control = _closure1_slot3;
            mike = 36;
            mike = control[mike];
            mike = source.bind(report)(mike);
            zulu = mike.BottomSheet;
            mike = {'scrollable': true, 'header': null, 'startExpanded': true};
            options = _closure1_slot16;
            oscar = 37;
            oscar = control[oscar];
            oscar = source.bind(report)(oscar);
            golf = oscar.BottomSheetTitleHeader;
            oscar = {};
            config = 23;
            result = control[config];
            result = source.bind(report)(result);
            sequence = result.intl;
            vacuum = sequence.string;
            result = control[config];
            result = source.bind(report)(result);
            result = result.t;
            result = result.dMJ3Y2;
            result = vacuum.bind(sequence)(result);
            oscar['title'] = result;
            oscar['subtitle'] = output;
            result = _closure1_slot16;
            output = 38;
            output = control[output];
            output = source.bind(report)(output);
            output = output.Button;
            if(!yankee) { _fun76692_ip = 366; continue _fun76692 }
 363:
            if(echo) { _fun76692_ip = 464; continue _fun76692 }
 366:
            yankee = {};
            source = 'sm';
            yankee['size'] = source;
            sequence = _closure1_slot0;
            source = _closure1_slot3;
            control = source[config];
            control = sequence.bind(report)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = source[config];
            source = sequence.bind(report)(source);
            source = source.t;
            source = source.OYkgVl;
            source = control.bind(vacuum)(source);
            yankee['text'] = source;
            source = function() { // Original name: handleAddPressed
                entity = undefined;
                tango = _closure2_slot2;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            yankee['onPress'] = source;
            source = 'primary';
            if(!echo) { _fun76692_ip = 454; continue _fun76692 }
 450:
            source = 'secondary';
 454:
            yankee['variant'] = source;
            yankee['disabled'] = echo;
            _fun76692_ip = 552; continue _fun76692;
 464:
            echo = {};
            source = 'sm';
            echo['size'] = source;
            sequence = _closure1_slot0;
            source = _closure1_slot3;
            control = source[config];
            control = sequence.bind(report)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = source[config];
            source = sequence.bind(report)(source);
            source = source.t;
            source = source.5WxrcX;
            source = control.bind(vacuum)(source);
            echo['text'] = source;
            update = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 35;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            echo['onPress'] = update;
            update = 'secondary';
            echo['variant'] = update;
            yankee = echo;
 552:
            yankee = result.bind(report)(output, yankee);
            oscar['trailing'] = yankee;
            oscar = options.bind(report)(golf, oscar);
            mike['header'] = oscar;
            options = _closure1_slot16;
            golf = _closure1_slot8;
            oscar = {};
            offset = offset.container;
            oscar['style'] = offset;
            yankee = _closure1_slot16;
            offset = _closure1_slot23;
            verify = {};
            verify['channel'] = kilo;
            verify['guild'] = sizing;
            kilo = kilo.accessPermissions;
            verify['permission'] = kilo;
            verify['pendingAdditions'] = backup;
            verify['setPendingAdditions'] = foxtrot;
            verify['inActionSheet'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 666:
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['AddMembersBody'] = mike;
    return entity;
})();