// app/modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            tango = 'object';
            entity = typeof golf;
            mike = golf;
            if(!(tango === entity)) { _fun00002_ip = 119; continue _fun00001 }
 17:
            mike = golf;
            if(!mike) { _fun00002_ip = 119; continue _fun00001 }
 23:
            entity = global;
            zulu = entity.Symbol;
            zulu = zulu.toPrimitive;
            oscar = golf[zulu];
            report = undefined;
            if(!(report === oscar)) { _fun00002_ip = 60; continue _fun00001 }
 47:
            zulu = entity.String;
            mike = zulu.bind(report)(golf);
            _fun00002_ip = 119; continue _fun00001;
 60:
            report = oscar.call;
            zulu = 'string';
            report = report.bind(oscar)(golf, zulu);
            zulu = typeof report;
            mike = report;
            if(!(tango === zulu)) { _fun00002_ip = 119; continue _fun00001 }
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
            if(!(tango !== zulu)) { _fun00002_ip = 136; continue _fun00001 }
 133:
            entity = '' + mike;
 136:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    mike = function(argFoo) { // Original name: AddMembersBody
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = mike.guild;
            var _closure2_slot0 = entity;
            entity = mike.role;
            var _closure2_slot1 = entity;
            entity = mike.members;
            var _closure2_slot2 = entity;
            verify = mike.pendingAdditions;
            var _closure2_slot3 = verify;
            zulu = mike.setPendingAdditions;
            var _closure2_slot4 = zulu;
            update = mike.autoFocusSearch;
            control = mike.inActionSheet;
            mike = mike.maxCount;
            var _closure2_slot5 = mike;
            mike = _closure1_slot13;
            tango = undefined;
            romeo = mike.bind(tango)();
            var _closure2_slot6 = romeo;
            zulu = _closure1_slot5;
            mike = zulu.useState;
            offset = '';
            report = mike.bind(zulu)(offset);
            zulu = _closure1_slot4;
            mike = 2;
            zulu = zulu.bind(tango)(report, mike);
            result = 0;
            kilo = zulu[result];
            var _closure2_slot7 = kilo;
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot8 = mike;
            record = _closure1_slot0;
            vacuum = _closure1_slot2;
            mike = 10;
            mike = vacuum[mike];
            oscar = record.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot7;
                entity = entity.keyboardHeight;
                return entity;
            };
            echo = report.bind(oscar)(zulu, mike);
            report = _closure1_slot5;
            zulu = report.useMemo;
            mike = new Array(2);
            mike[0] = entity;
            mike[1] = kilo;
            entity = function() {
                mike = function(argFoo) { // Original name: filterByQuery
                    entity = global;
                    tango = entity.RegExp;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.escape;
                    entity = _closure2_slot7;
                    oscar = mike.bind(zulu)(entity);
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = 'i';
                    golf = mike;
                    entity = new golf[tango](oscar, report, tango);
                    zulu = entity instanceof Object ? entity : mike;
                    mike = zulu.test;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                var _closure3_slot0 = mike;
                zulu = _closure2_slot2;
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        mike = argFoo;
                        report = _closure3_slot0;
                        entity = mike.name;
                        tango = undefined;
                        entity = report.bind(tango)(entity);
                        if(entity) { _fun00006_ip = 40; continue _fun00005 }
 25:
                        zulu = _closure3_slot0;
                        mike = mike.userTag;
                        entity = zulu.bind(tango)(mike);
 40:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = zulu.bind(report)(entity, mike);
            var _closure2_slot9 = foxtrot;
            zulu = _closure1_slot12;
            mike = _closure1_slot11;
            entity = {};
            golf = _closure1_slot10;
            oscar = _closure1_slot6;
            report = {};
            options = romeo.inputContainer;
            report['style'] = options;
            source = _closure1_slot10;
            sizing = _closure1_slot1;
            options = 15;
            options = vacuum[options];
            output = sizing.bind(tango)(options);
            options = {};
            sizing = 16;
            sequence = vacuum[sizing];
            sequence = record.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = vacuum[sizing];
            vacuum = record.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.vMiCaW;
            vacuum = sequence.bind(config)(vacuum);
            options['placeholder'] = vacuum;
            vacuum = global;
            sequence = vacuum.Object;
            vacuum = sequence.values;
            config = vacuum.bind(sequence)(verify);
            sequence = config.map;
            vacuum = function(argFoo) {
                entity = argFoo;
                tango = entity.display;
                entity = entity.row;
                zulu = entity.id;
                entity = {};
                report = entity;
                mike = copyDataProperties(report, tango);
                mike = 'id';
                entity[mike] = zulu;
                return entity;
            };
            vacuum = sequence.bind(config)(vacuum);
            options['tags'] = vacuum;
            vacuum = function(argFoo) { // Original name: onChangeText
                mike = argFoo;
                entity = mike.trim;
                mike = entity.bind(mike)();
                entity = mike.toLowerCase;
                zulu = entity.bind(mike)();
                report = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 17;
                mike = verify[entity];
                entity = undefined;
                golf = report.bind(entity)(mike);
                oscar = golf.requestMembers;
                report = _closure2_slot0;
                report = report.id;
                options = _closure1_slot0;
                tango = 18;
                tango = verify[tango];
                tango = options.bind(entity)(tango);
                tango = tango.ADD_MEMBER_QUERY_LIMIT;
                tango = oscar.bind(golf)(report, zulu, tango);
                mike = _closure2_slot8;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            options['onChangeText'] = vacuum;
            vacuum = function(argFoo) { // Original name: onRemove
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 19;
                zulu = zulu[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.keys;
                tango = _closure2_slot3;
                report = report.bind(oscar)(tango);
                tango = argFoo;
                tango = report[tango];
                var _closure3_slot0 = tango;
                zulu = _closure2_slot4;
                mike = function(argFoo) {
                    tango = argFoo;
                    mike = _closure3_slot0;
                    entity = tango[mike];
                    zulu = _closure1_slot3;
                    report = new Array(1);
                    report[0] = mike;
                    mike = report.map;
                    entity = _closure1_slot14;
                    mike = mike.bind(report)(entity);
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options['onRemove'] = vacuum;
            options['autoFocus'] = update;
            options['inActionSheet'] = control;
            options = source.bind(tango)(output, options);
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            oscar = foxtrot.length;
            if(!(result !== oscar)) { _fun00004_ip = 607; continue _fun00003 }
 449:
            options = _closure1_slot10;
            golf = _closure1_slot0;
            vacuum = _closure1_slot2;
            oscar = 22;
            oscar = vacuum[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.FlashList;
            oscar = {};
            output = {};
            control = _closure1_slot1;
            source = 9;
            sequence = vacuum[source];
            sequence = control.bind(tango)(sequence);
            sequence = sequence.spacing;
            sequence = sequence.PX_16;
            output['paddingHorizontal'] = sequence;
            source = vacuum[source];
            source = control.bind(tango)(source);
            source = source.spacing;
            source = source.PX_12;
            output['paddingTop'] = source;
            result = 0;
            if(!update) { _fun00004_ip = 546; continue _fun00003 }
 543:
            result = echo;
 546:
            output['paddingBottom'] = result;
            oscar['contentContainerStyle'] = output;
            backup = function(argFoo) { // Original name: renderItem
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    offset = entity.item;
                    var _closure3_slot0 = offset;
                    foxtrot = entity.index;
                    zulu = offset.roles;
                    mike = zulu.includes;
                    entity = _closure2_slot1;
                    entity = entity.id;
                    options = mike.bind(zulu)(entity);
                    mike = offset.id;
                    entity = _closure2_slot3;
                    yankee = mike in entity;
                    mike = _closure2_slot5;
                    entity = null;
                    golf = entity != mike;
                    if(!golf) { _fun00008_ip = 108; continue _fun00007 }
 73:
                    entity = global;
                    zulu = entity.Object;
                    mike = zulu.keys;
                    entity = _closure2_slot3;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.length;
                    entity = _closure2_slot5;
                    golf = mike >= entity;
 108:
                    tango = _closure1_slot10;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 13;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    romeo = 0;
                    romeo = romeo === foxtrot;
                    entity['start'] = romeo;
                    romeo = _closure2_slot9;
                    backup = romeo.length;
                    romeo = 1;
                    romeo = backup - romeo;
                    romeo = foxtrot === romeo;
                    entity['end'] = romeo;
                    romeo = _closure2_slot0;
                    romeo = romeo.id;
                    entity['guildId'] = romeo;
                    romeo = offset.id;
                    entity['userId'] = romeo;
                    oscar = function() { // Original name: onPress
                        zulu = _closure3_slot0;
                        mike = function(argFoo) { // Original name: updatePendingAdditions
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                mike = argFoo;
                                var _closure5_slot0 = mike;
                                report = mike.roles;
                                tango = report.includes;
                                zulu = _closure2_slot1;
                                zulu = zulu.id;
                                zulu = tango.bind(report)(zulu);
                                if(zulu) { _fun00010_ip = 58; continue _fun00009 }
 40:
                                zulu = _closure2_slot4;
                                mike = undefined;
                                entity = function(argFoo) {
                                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                        entity = {};
                                        yankee = argFoo;
                                        romeo = entity;
                                        mike = copyDataProperties(romeo, yankee);
                                        mike = _closure5_slot0;
                                        mike = mike.id;
                                        tango = mike in entity;
                                        mike = _closure5_slot0;
                                        if(tango) { _fun00012_ip = 160; continue _fun00011 }
 38:
                                        oscar = {};
                                        tango = mike.name;
                                        oscar['text'] = tango;
                                        options = _closure1_slot10;
                                        report = _closure1_slot1;
                                        golf = _closure1_slot2;
                                        tango = 12;
                                        tango = golf[tango];
                                        golf = undefined;
                                        report = report.bind(golf)(tango);
                                        tango = {};
                                        verify = mike.avatarSource;
                                        tango['source'] = verify;
                                        verify = _closure2_slot6;
                                        offset = verify.tagAvatar;
                                        tango['avatarStyle'] = offset;
                                        verify = verify.tagAvatar;
                                        tango['style'] = verify;
                                        tango = options.bind(golf)(report, tango);
                                        oscar['icon'] = tango;
                                        tango = null;
                                        if(!(tango != oscar)) { _fun00012_ip = 169; continue _fun00011 }
 134:
                                        report = _closure5_slot0;
                                        tango = report.id;
                                        zulu = {};
                                        zulu['display'] = oscar;
                                        zulu['row'] = report;
                                        entity[tango] = zulu;
                                        _fun00012_ip = 169; continue _fun00011;
 160:
                                        mike = mike.id;
                                        mike = delete entity[mike];
 169:
                                        return entity;
                                    }
                                };
                                entity = zulu.bind(mike)(entity);
 58:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = undefined;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    };
                    entity['onPress'] = oscar;
                    oscar = options;
                    if(options) { _fun00008_ip = 221; continue _fun00007 }
 212:
                    if(!golf) { _fun00008_ip = 218; continue _fun00007 }
 215:
                    golf = !yankee;
 218:
                    oscar = golf;
 221:
                    entity['disabled'] = oscar;
                    golf = _closure1_slot10;
                    oscar = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 14;
                    report = yankee[report];
                    report = oscar.bind(zulu)(report);
                    oscar = report.FormCheckbox;
                    report = {};
                    if(options) { _fun00008_ip = 273; continue _fun00007 }
 260:
                    offset = offset.id;
                    verify = _closure2_slot3;
                    options = offset in verify;
 273:
                    report['checked'] = options;
                    report = golf.bind(zulu)(oscar, report);
                    entity['trailing'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                }
            };
            oscar['renderItem'] = backup;
            oscar['data'] = foxtrot;
            foxtrot = 56;
            oscar['estimatedItemSize'] = foxtrot;
            oscar['extraData'] = verify;
            verify = 'always';
            oscar['keyboardShouldPersistTaps'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            _fun00004_ip = 798; continue _fun00003;
 607:
            verify = _closure1_slot10;
            options = _closure1_slot1;
            output = _closure1_slot2;
            golf = 20;
            golf = output[golf];
            options = options.bind(tango)(golf);
            golf = {};
            backup = _closure1_slot0;
            foxtrot = 21;
            foxtrot = output[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.NoResultsAlt;
            golf['Illustration'] = foxtrot;
            romeo = romeo.emptyStateText;
            golf['bodyStyle'] = romeo;
            if(!(offset === kilo)) { _fun00004_ip = 729; continue _fun00003 }
 675:
            backup = _closure1_slot0;
            offset = _closure1_slot2;
            romeo = offset[sizing];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            offset = offset[sizing];
            offset = backup.bind(tango)(offset);
            offset = offset.t;
            offset = offset.oB9gra;
            offset = romeo.bind(foxtrot)(offset);
            _fun00004_ip = 788; continue _fun00003;
 729:
            romeo = _closure1_slot0;
            yankee = _closure1_slot2;
            foxtrot = yankee[sizing];
            foxtrot = romeo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.format;
            yankee = yankee[sizing];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.t;
            romeo = yankee.ErpIY2;
            yankee = {};
            yankee['query'] = kilo;
            offset = foxtrot.bind(backup)(romeo, yankee);
 788:
            golf['body'] = offset;
            oscar = verify.bind(tango)(options, golf);
 798:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = romeo.bind(entity)(report);
    var _closure1_slot3 = report;
    foxtrot = 1;
    report = golf[foxtrot];
    report = romeo.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.MAX_BULK_ROLE_MEMBERS_ADD;
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.CLYDE_AI_USER_ID;
    var _closure1_slot9 = report;
    report = 7;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot11 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot12 = report;
    report = 8;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    yankee = 9;
    backup = golf[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    offset['backgroundColor'] = backup;
    offset['flex'] = foxtrot;
    report['container'] = offset;
    offset = {};
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
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_NORMAL;
    offset['color'] = foxtrot;
    report['emptyStateText'] = offset;
    offset = {};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['marginHorizontal'] = yankee;
    report['addMembersDescription'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot13 = report;
    report = 30;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: AddMembersActionSheet
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            result = entity.guild;
            var _closure2_slot0 = result;
            output = entity.role;
            var _closure2_slot1 = output;
            entity = _closure1_slot13;
            tango = undefined;
            source = entity.bind(tango)();
            zulu = _closure1_slot5;
            mike = zulu.useState;
            entity = {};
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            zulu = 0;
            kilo = mike[zulu];
            var _closure2_slot2 = kilo;
            entity = 1;
            backup = mike[entity];
            oscar = _closure1_slot5;
            report = oscar.useCallback;
            entity = output.id;
            mike = new Array(1);
            mike[0] = entity;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = argFoo;
                    tango = mike.roles;
                    zulu = tango.includes;
                    entity = _closure2_slot1;
                    entity = entity.id;
                    entity = zulu.bind(tango)(entity);
                    entity = !entity;
                    if(!entity) { _fun00016_ip = 53; continue _fun00015 }
 37:
                    zulu = mike.userId;
                    mike = _closure1_slot9;
                    entity = zulu !== mike;
 53:
                    return entity;
                }
            };
            options = report.bind(oscar)(entity, mike);
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 18;
            entity = report[entity];
            golf = mike.bind(tango)(entity);
            oscar = golf.useGuildMembers;
            entity = result.id;
            sizing = oscar.bind(golf)(entity, options);
            entity = 23;
            entity = report[entity];
            oscar = mike.bind(tango)(entity);
            report = oscar.useSubscribeGuildMembers;
            mike = {};
            options = result.id;
            entity = global;
            offset = entity.Object;
            golf = offset.keys;
            golf = golf.bind(offset)(kilo);
            mike[options] = golf;
            mike = report.bind(oscar)(mike);
            report = entity.Object;
            mike = report.keys;
            mike = mike.bind(report)(kilo);
            mike = mike.length;
            romeo = zulu === mike;
            if(romeo) { _fun00014_ip = 265; continue _fun00013 }
 236:
            mike = entity.Object;
            entity = mike.keys;
            entity = entity.bind(mike)(kilo);
            mike = entity.length;
            entity = _closure1_slot8;
            romeo = mike > entity;
 265:
            zulu = _closure1_slot10;
            config = _closure1_slot0;
            control = _closure1_slot2;
            entity = 24;
            entity = control[entity];
            entity = config.bind(tango)(entity);
            mike = entity.BottomSheet;
            entity = {'scrollable': true, 'header': null, 'startExpanded': true};
            foxtrot = true;
            golf = _closure1_slot10;
            report = 25;
            report = control[report];
            report = config.bind(tango)(report);
            oscar = report.BottomSheetTitleHeader;
            report = {};
            update = 16;
            options = control[update];
            options = config.bind(tango)(options);
            yankee = options.intl;
            offset = yankee.string;
            options = control[update];
            options = config.bind(tango)(options);
            options = options.t;
            options = options.ZYOK4+;
            options = offset.bind(yankee)(options);
            report['title'] = options;
            options = output.name;
            report['subtitle'] = options;
            yankee = _closure1_slot10;
            options = 26;
            options = control[options];
            options = config.bind(tango)(options);
            offset = options.Button;
            options = {};
            vacuum = 'sm';
            options['size'] = vacuum;
            vacuum = control[update];
            vacuum = config.bind(tango)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = control[update];
            control = config.bind(tango)(control);
            control = control.t;
            control = control.OYkgVl;
            control = vacuum.bind(sequence)(control);
            options['text'] = control;
            echo = function() { // Original name: onPress
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 27;
                mike = tango[entity];
                entity = undefined;
                options = zulu.bind(entity)(mike);
                golf = options.bulkAddMemberRoles;
                report = _closure2_slot0;
                oscar = report.id;
                report = _closure2_slot1;
                report = report.id;
                verify = 19;
                verify = tango[verify];
                offset = zulu.bind(entity)(verify);
                verify = offset.keys;
                mike = _closure2_slot2;
                mike = verify.bind(offset)(mike);
                mike = golf.bind(options)(oscar, report, mike);
                mike = 28;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            options['onPress'] = echo;
            echo = 'primary';
            if(!romeo) { _fun00014_ip = 494; continue _fun00013 }
 490:
            echo = 'secondary';
 494:
            options['variant'] = echo;
            options['disabled'] = romeo;
            options = yankee.bind(tango)(offset, options);
            report['trailing'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['header'] = report;
            golf = _closure1_slot12;
            oscar = _closure1_slot6;
            report = {};
            options = source.container;
            report['style'] = options;
            yankee = _closure1_slot10;
            echo = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 29;
            options = romeo[options];
            options = echo.bind(tango)(options);
            offset = options.Text;
            options = {};
            control = 'text-sm/normal';
            options['variant'] = control;
            source = source.addMembersDescription;
            options['style'] = source;
            source = romeo[update];
            source = echo.bind(tango)(source);
            control = source.intl;
            source = control.format;
            romeo = romeo[update];
            romeo = echo.bind(tango)(romeo);
            romeo = romeo.t;
            update = romeo.3OxP4u;
            echo = {};
            romeo = _closure1_slot8;
            echo['numMembers'] = romeo;
            echo = source.bind(control)(update, echo);
            options['children'] = echo;
            offset = yankee.bind(tango)(offset, options);
            options = new Array(2);
            options[0] = offset;
            yankee = _closure1_slot10;
            offset = _closure1_slot15;
            verify = {};
            verify['guild'] = result;
            verify['role'] = output;
            verify['members'] = sizing;
            verify['pendingAdditions'] = kilo;
            verify['setPendingAdditions'] = backup;
            verify['autoFocusSearch'] = foxtrot;
            verify['maxCount'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['AddMembersBody'] = mike;
    return entity;
})();