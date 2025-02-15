// app/modules/guild_settings/native/GuildSettingsModalMembers.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot22;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot22;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildSettingsSections;
    var _closure1_slot14 = tango;
    tango = 12;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot15 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot16 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot17 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AutocompleterResultTypes;
    options = tango.USER;
    tango = new Array(1);
    tango[0] = options;
    var _closure1_slot18 = tango;
    tango = 14;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 15;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    offset['paddingHorizontal'] = backup;
    offset['flex'] = foxtrot;
    tango['containerInner'] = offset;
    offset = {};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    offset['paddingVertical'] = foxtrot;
    tango['searchFieldContainer'] = offset;
    offset = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['paddingBottom'] = yankee;
    tango['listView'] = offset;
    offset = {};
    yankee = 70;
    offset['marginLeft'] = yankee;
    tango['rowDivider'] = offset;
    offset = {'flexDirection': 'row', 'flexWrap': 'wrap', 'overflow': 'hidden', 'paddingTop': 4};
    tango['roleList'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot19 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            offset = entity.guild;
            romeo = entity.guildMember;
            var _closure2_slot0 = romeo;
            echo = entity.guildRoles;
            golf = entity.start;
            oscar = entity.end;
            entity = _closure1_slot19;
            report = undefined;
            kilo = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 16;
            entity = zulu[entity];
            mike = mike.bind(report)(entity);
            entity = mike.useNavigation;
            entity = entity.bind(mike)();
            var _closure2_slot1 = entity;
            entity = null;
            if(!(entity != offset)) { _fun00008_ip = 412; continue _fun00007 }
 92:
            zulu = romeo.userId;
            mike = offset.ownerId;
            verify = zulu === mike;
            if(!verify) { _fun00008_ip = 134; continue _fun00007 }
 110:
            zulu = _closure1_slot7;
            mike = zulu.getId;
            zulu = mike.bind(zulu)();
            mike = offset.ownerId;
            verify = zulu === mike;
 134:
            backup = new Array(0);
            output = echo;
            zulu = 17;
            mike = -1;
            for(tango in output)
 158:
            {
 167:
                update = tango;
                update = echo[update];
                source = entity != update;
                if(!source) { _fun00008_ip = 206; continue _fun00007 }
 181:
                sequence = romeo.roles;
                vacuum = sequence.indexOf;
                control = update.id;
                control = vacuum.bind(sequence)(control);
                source = mike !== control;
 206:
                if(!source) { _fun00008_ip = 158; continue _fun00007 }
 209:
                source = backup.push;
                sequence = _closure1_slot15;
                vacuum = _closure1_slot1;
                control = _closure1_slot2;
                control = control[zulu];
                vacuum = vacuum.bind(report)(control);
                control = {};
                control['role'] = update;
                config = offset.id;
                control['guildId'] = config;
                update = update.id;
                update = sequence.bind(report)(vacuum, control, update);
                update = source.bind(backup)(update);
                _fun00008_ip = 158; continue _fun00007;
            }
 270:
            tango = _closure1_slot15;
            zulu = _closure1_slot1;
            foxtrot = _closure1_slot2;
            mike = 18;
            mike = foxtrot[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            romeo = romeo.userId;
            mike['userId'] = romeo;
            offset = offset.id;
            mike['guildId'] = offset;
            romeo = backup.length;
            offset = 0;
            romeo = romeo > offset;
            offset = null;
            if(!romeo) { _fun00008_ip = 369; continue _fun00007 }
 330:
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot5;
            yankee = {};
            kilo = kilo.roleList;
            yankee['style'] = kilo;
            kilo = 'none';
            yankee['pointerEvents'] = kilo;
            yankee['children'] = backup;
            offset = foxtrot.bind(report)(romeo, yankee);
 369:
            mike['subLabel'] = offset;
            mike['disabled'] = verify;
            options = function() { // Original name: onPress
                tango = _closure2_slot1;
                zulu = tango.push;
                entity = _closure1_slot14;
                mike = entity.MEMBER_EDIT;
                entity = {};
                report = _closure2_slot0;
                report = report.userId;
                entity['userId'] = report;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            mike['onPress'] = options;
            options = true;
            mike['arrow'] = options;
            mike['start'] = golf;
            mike['end'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 412:
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot20 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: GuildSettingsModalMembers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            backup = mike.guildId;
            var _closure2_slot0 = backup;
            golf = mike.navScrim;
            sequence = _closure1_slot0;
            update = _closure1_slot2;
            mike = 16;
            mike = update[mike];
            tango = undefined;
            zulu = sequence.bind(tango)(mike);
            mike = zulu.useNavigation;
            foxtrot = mike.bind(zulu)();
            var _closure2_slot1 = foxtrot;
            mike = _closure1_slot19;
            romeo = mike.bind(tango)();
            zulu = _closure1_slot1;
            mike = 19;
            mike = update[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            sizing = mike.bottom;
            zulu = 20;
            mike = update[zulu];
            options = sequence.bind(tango)(mike);
            oscar = options.useStateFromStoresObject;
            mike = _closure1_slot10;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                entity = {};
                tango = _closure1_slot10;
                mike = tango.getGuild;
                zulu = _closure2_slot0;
                mike = mike.bind(tango)(zulu);
                entity['guild'] = mike;
                mike = tango.getGuild;
                report = mike.bind(tango)(zulu);
                mike = null;
                mike = mike != report;
                entity['guildLoaded'] = mike;
                mike = tango.getRoles;
                mike = mike.bind(tango)(zulu);
                entity['guildRoles'] = mike;
                return entity;
            };
            mike = oscar.bind(options)(report, mike);
            offset = mike.guild;
            var _closure2_slot2 = offset;
            result = mike.guildLoaded;
            var _closure2_slot3 = result;
            mike = mike.guildRoles;
            var _closure2_slot4 = mike;
            report = update[zulu];
            verify = sequence.bind(tango)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot13;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                mike = _closure1_slot13;
                entity = mike.getProps;
                entity = entity.bind(mike)();
                entity = entity.selectedRoleId;
                return entity;
            };
            control = options.bind(verify)(oscar, report);
            var _closure2_slot5 = control;
            report = update[zulu];
            yankee = sequence.bind(tango)(report);
            verify = yankee.useStateFromStores;
            report = _closure1_slot8;
            options = new Array(1);
            options[0] = report;
            oscar = new Array(2);
            oscar[0] = backup;
            oscar[1] = result;
            report = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure1_slot8;
                    zulu = tango.getMemberCount;
                    entity = _closure2_slot0;
                    zulu = zulu.bind(tango)(entity);
                    entity = null;
                    report = entity != zulu;
                    entity = 0;
                    tango = 0;
                    if(!report) { _fun00012_ip = 41; continue _fun00011 }
 38:
                    tango = zulu;
 41:
                    entity = tango > entity;
                    if(!entity) { _fun00012_ip = 58; continue _fun00011 }
 48:
                    zulu = 10000;
                    entity = tango <= zulu;
 58:
                    if(!entity) { _fun00012_ip = 65; continue _fun00011 }
 61:
                    entity = _closure2_slot3;
 65:
                    return entity;
                }
            };
            oscar = verify.bind(yankee)(options, report, oscar);
            var _closure2_slot6 = oscar;
            report = update[zulu];
            output = sequence.bind(tango)(report);
            yankee = output.useStateFromStoresArray;
            report = _closure1_slot9;
            verify = new Array(1);
            verify[0] = report;
            options = new Array(1);
            options[0] = backup;
            report = function() {
                zulu = _closure1_slot9;
                mike = zulu.getMembers;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            config = yankee.bind(output)(verify, report, options);
            var _closure2_slot7 = config;
            report = _closure1_slot4;
            verify = report.useState;
            options = new Array(0);
            options = verify.bind(report)(options);
            source = _closure1_slot3;
            output = 2;
            options = source.bind(tango)(options, output);
            yankee = 0;
            vacuum = options[yankee];
            var _closure2_slot8 = vacuum;
            echo = 1;
            options = options[echo];
            var _closure2_slot9 = options;
            zulu = update[zulu];
            record = sequence.bind(tango)(zulu);
            verify = record.useStateFromStores;
            zulu = _closure1_slot12;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                entity = _closure1_slot12;
                entity = entity.keyboardOpen;
                return entity;
            };
            options = verify.bind(record)(options, zulu);
            verify = report.useState;
            zulu = false;
            zulu = verify.bind(report)(zulu);
            zulu = source.bind(tango)(zulu, output);
            verify = zulu[yankee];
            var _closure2_slot10 = verify;
            zulu = zulu[echo];
            var _closure2_slot11 = zulu;
            record = report.useState;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 13;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                options = _closure2_slot9;
                golf = _closure1_slot18;
                entity = report.prototype;
                mike = Object.create(entity, {constructor: {value: report}});
                oscar = 100;
                verify = mike;
                entity = new verify[report](options, golf, oscar, report);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            zulu = record.bind(report)(zulu);
            output = source.bind(tango)(zulu, output);
            zulu = output[yankee];
            var _closure2_slot12 = zulu;
            output = output[echo];
            source = report.useMemo;
            output = new Array(5);
            output[0] = backup;
            output[1] = config;
            output[2] = vacuum;
            output[3] = control;
            output[4] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = new Array(0);
                    yankee = function(argFoo) { // Original name: guildRoleIsFiltered
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zulu = _closure2_slot5;
                            entity = null;
                            entity = entity != zulu;
                            if(!entity) { _fun00016_ip = 64; continue _fun00015 }
 16:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 21;
                            tango = tango[zulu];
                            zulu = undefined;
                            oscar = report.bind(zulu)(tango);
                            report = oscar.isEveryoneRoleId;
                            tango = _closure2_slot0;
                            zulu = _closure2_slot5;
                            zulu = report.bind(oscar)(tango, zulu);
                            entity = !zulu;
 64:
                            if(!entity) { _fun00016_ip = 100; continue _fun00015 }
 67:
                            zulu = argFoo;
                            tango = zulu.roles;
                            zulu = tango.indexOf;
                            mike = _closure2_slot5;
                            zulu = zulu.bind(tango)(mike);
                            mike = -1;
                            entity = mike === zulu;
 100:
                            return entity;
                        }
                    };
                    tango = _closure2_slot10;
                    zulu = _closure1_slot21;
                    if(tango) { _fun00014_ip = 143; continue _fun00013 }
 30:
                    tango = _closure2_slot7;
                    options = undefined;
                    golf = zulu.bind(options)(tango);
                    report = golf.bind(options)();
                    tango = report.done;
                    oscar = null;
                    if(tango) { _fun00014_ip = 120; continue _fun00013 }
 55:
                    romeo = report.value;
                    backup = _closure1_slot11;
                    foxtrot = backup.getUser;
                    tango = romeo.userId;
                    tango = foxtrot.bind(backup)(tango);
                    tango = oscar == tango;
                    if(tango) { _fun00014_ip = 92; continue _fun00013 }
 87:
                    tango = yankee.bind(options)(romeo);
 92:
                    if(tango) { _fun00014_ip = 105; continue _fun00013 }
 95:
                    tango = entity.push;
                    tango = tango.bind(entity)(romeo);
 105:
                    romeo = golf.bind(options)();
                    tango = romeo.done;
                    report = romeo;
                    if(!tango) { _fun00014_ip = 55; continue _fun00013 }
 120:
                    tango = entity.sort;
                    mike = function(argFoo, argBar) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            mike = argFoo;
                            report = argBar;
                            entity = mike.nick;
                            tango = null;
                            if(!(tango == entity)) { _fun00018_ip = 58; continue _fun00017 }
 18:
                            oscar = _closure1_slot11;
                            zulu = oscar.getUser;
                            mike = mike.userId;
                            zulu = zulu.bind(oscar)(mike);
                            oscar = tango == zulu;
                            mike = undefined;
                            if(oscar) { _fun00018_ip = 55; continue _fun00017 }
 50:
                            mike = zulu.username;
 55:
                            entity = mike;
 58:
                            oscar = tango != entity;
                            zulu = '';
                            mike = zulu;
                            if(!oscar) { _fun00018_ip = 75; continue _fun00017 }
 72:
                            mike = entity;
 75:
                            entity = report.nick;
                            if(!(tango == entity)) { _fun00018_ip = 125; continue _fun00017 }
 85:
                            golf = _closure1_slot11;
                            oscar = golf.getUser;
                            report = report.userId;
                            oscar = oscar.bind(golf)(report);
                            golf = tango == oscar;
                            report = undefined;
                            if(golf) { _fun00018_ip = 122; continue _fun00017 }
 117:
                            report = oscar.username;
 122:
                            entity = report;
 125:
                            tango = tango != entity;
                            if(!tango) { _fun00018_ip = 135; continue _fun00017 }
 132:
                            zulu = entity;
 135:
                            entity = mike.localeCompare;
                            entity = entity.bind(mike)(zulu);
                            return entity;
                        }
                    };
                    mike = tango.bind(entity)(mike);
                    _fun00014_ip = 296; continue _fun00013;
 143:
                    mike = _closure2_slot8;
                    options = undefined;
                    golf = zulu.bind(options)(mike);
                    zulu = golf.bind(options)();
                    mike = zulu.done;
                    oscar = null;
                    report = 13;
                    tango = zulu;
                    zulu = undefined;
                    if(mike) { _fun00014_ip = 296; continue _fun00013 }
 176:
                    mike = tango.value;
                    foxtrot = mike.type;
                    backup = _closure1_slot0;
                    romeo = _closure1_slot2;
                    romeo = romeo[report];
                    romeo = backup.bind(options)(romeo);
                    romeo = romeo.AutocompleterResultTypes;
                    romeo = romeo.USER;
                    if(!(foxtrot === romeo)) { _fun00014_ip = 281; continue _fun00013 }
 219:
                    backup = _closure1_slot9;
                    foxtrot = backup.getMember;
                    romeo = _closure2_slot0;
                    mike = mike.record;
                    mike = mike.id;
                    mike = foxtrot.bind(backup)(romeo, mike);
                    romeo = oscar == mike;
                    if(romeo) { _fun00014_ip = 262; continue _fun00013 }
 257:
                    romeo = yankee.bind(options)(mike);
 262:
                    zulu = mike;
                    if(romeo) { _fun00014_ip = 281; continue _fun00013 }
 268:
                    romeo = entity.push;
                    romeo = romeo.bind(entity)(mike);
                    zulu = mike;
 281:
                    romeo = golf.bind(options)();
                    mike = romeo.done;
                    tango = romeo;
                    if(!mike) { _fun00014_ip = 176; continue _fun00013 }
 296:
                    return entity;
                }
            };
            output = source.bind(report)(verify, output);
            verify = output.length;
            verify = verify - echo;
            var _closure2_slot13 = verify;
            source = report.useEffect;
            echo = new Array(2);
            echo[0] = offset;
            echo[1] = foxtrot;
            foxtrot = function() {
                zulu = _closure2_slot1;
                mike = zulu.setOptions;
                entity = {};
                tango = function() { // Original name: headerRight
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tango = _closure1_slot15;
                        mike = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 22;
                        entity = zulu[entity];
                        zulu = undefined;
                        entity = mike.bind(zulu)(entity);
                        mike = entity.ContextMenu;
                        entity = {};
                        golf = _closure2_slot2;
                        report = null;
                        if(!(report == golf)) { _fun00020_ip = 56; continue _fun00019 }
 50:
                        report = new Array(0);
                        _fun00020_ip = 97; continue _fun00019;
 56:
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        oscar = 23;
                        oscar = options[oscar];
                        options = golf.bind(zulu)(oscar);
                        golf = options.getMembersManagementActions;
                        oscar = {};
                        verify = _closure2_slot2;
                        oscar['guild'] = verify;
                        report = golf.bind(options)(oscar);
 97:
                        entity['items'] = report;
                        report = function(argFoo) { // Original name: children
                            tango = _closure1_slot15;
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            entity = 24;
                            entity = verify[entity];
                            zulu = undefined;
                            entity = options.bind(zulu)(entity);
                            mike = entity.HeaderActionButton;
                            entity = {};
                            oscar = _closure1_slot1;
                            report = 25;
                            report = verify[report];
                            report = oscar.bind(zulu)(report);
                            entity['source'] = report;
                            report = 26;
                            oscar = verify[report];
                            oscar = options.bind(zulu)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            report = verify[report];
                            report = options.bind(zulu)(report);
                            report = report.t;
                            report = report.ogxXGh;
                            report = oscar.bind(golf)(report);
                            entity['accessibilityLabel'] = report;
                            offset = argFoo;
                            yankee = entity;
                            report = copyDataProperties(yankee, offset);
                            entity = tango.bind(zulu)(mike, entity);
                            return entity;
                        };
                        entity['children'] = report;
                        entity = tango.bind(zulu)(mike, entity);
                        return entity;
                    }
                };
                entity['headerRight'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            foxtrot = source.bind(report)(foxtrot, echo);
            echo = report.useEffect;
            foxtrot = new Array(2);
            foxtrot[0] = oscar;
            foxtrot[1] = backup;
            oscar = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = _closure2_slot6;
                    if(!mike) { _fun00022_ip = 64; continue _fun00021 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 27;
                    zulu = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(zulu);
                    report = oscar.requestMembers;
                    offset = _closure2_slot0;
                    verify = '';
                    options = 10000;
                    golf = false;
                    yankee = oscar;
                    entity = yankee[report](offset, verify, options, golf, oscar);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = echo.bind(report)(oscar, foxtrot);
            echo = report.useEffect;
            foxtrot = new Array(3);
            foxtrot[0] = backup;
            foxtrot[1] = result;
            foxtrot[2] = zulu;
            oscar = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00024_ip = 49; continue _fun00023 }
 10:
                    zulu = _closure2_slot12;
                    mike = zulu.setOptions;
                    entity = {};
                    tango = {};
                    report = _closure2_slot0;
                    tango['guild'] = report;
                    report = true;
                    tango['strict'] = report;
                    entity['userFilters'] = tango;
                    entity = mike.bind(zulu)(entity);
 49:
                    entity = function() {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            mike = _closure2_slot3;
                            if(!mike) { _fun00026_ip = 73; continue _fun00025 }
 10:
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            mike = 28;
                            mike = golf[mike];
                            report = undefined;
                            tango = oscar.bind(report)(mike);
                            zulu = tango.selectRole;
                            mike = 29;
                            mike = golf[mike];
                            oscar = oscar.bind(report)(mike);
                            report = oscar.castGuildIdAsEveryoneGuildRoleId;
                            mike = _closure2_slot0;
                            mike = report.bind(oscar)(mike);
                            mike = zulu.bind(tango)(mike);
 73:
                            mike = _closure2_slot12;
                            entity = mike.destroy;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            oscar = echo.bind(report)(oscar, foxtrot);
            foxtrot = report.useCallback;
            oscar = new Array(3);
            oscar[0] = result;
            oscar[1] = backup;
            oscar[2] = zulu;
            zulu = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    report = argFoo;
                    entity = report.trim;
                    mike = entity.bind(report)();
                    entity = '';
                    mike = entity !== mike;
                    zulu = _closure2_slot11;
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    tango = _closure2_slot12;
                    if(mike) { _fun00028_ip = 54; continue _fun00027 }
 42:
                    mike = tango.clear;
                    mike = mike.bind(tango)();
                    _fun00028_ip = 79; continue _fun00027;
 54:
                    zulu = tango.search;
                    golf = _closure2_slot3;
                    mike = undefined;
                    if(!golf) { _fun00028_ip = 73; continue _fun00027 }
 69:
                    mike = _closure2_slot0;
 73:
                    mike = zulu.bind(tango)(report, mike);
 79:
                    return entity;
                }
            };
            result = foxtrot.bind(report)(zulu, oscar);
            oscar = report.useCallback;
            zulu = new Array(3);
            zulu[0] = offset;
            zulu[1] = verify;
            zulu[2] = mike;
            mike = function(argFoo) {
                entity = argFoo;
                oscar = entity.item;
                report = entity.index;
                tango = _closure1_slot15;
                zulu = _closure1_slot20;
                mike = {};
                golf = _closure2_slot2;
                mike['guild'] = golf;
                mike['guildMember'] = oscar;
                oscar = _closure2_slot4;
                mike['guildRoles'] = oscar;
                oscar = 0;
                oscar = oscar === report;
                mike['start'] = oscar;
                entity = _closure2_slot13;
                entity = report === entity;
                mike['end'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            backup = oscar.bind(report)(mike, zulu);
            zulu = report.useCallback;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.userId;
                return entity;
            };
            entity = new Array(0);
            echo = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot16;
            mike = _closure1_slot17;
            entity = {};
            oscar = _closure1_slot5;
            report = {};
            verify = romeo.containerInner;
            report['style'] = verify;
            offset = _closure1_slot15;
            verify = {};
            romeo = romeo.searchFieldContainer;
            verify['style'] = romeo;
            romeo = 30;
            romeo = update[romeo];
            romeo = sequence.bind(tango)(romeo);
            foxtrot = romeo.SearchField;
            romeo = {};
            source = 'md';
            romeo['size'] = source;
            control = 26;
            source = update[control];
            source = sequence.bind(tango)(source);
            vacuum = source.intl;
            source = vacuum.string;
            update = update[control];
            update = sequence.bind(tango)(update);
            update = update.t;
            update = update.pYHobG;
            update = source.bind(vacuum)(update);
            romeo['placeholder'] = update;
            romeo['onChange'] = result;
            result = true;
            romeo['isRound'] = result;
            romeo = offset.bind(tango)(foxtrot, romeo);
            verify['children'] = romeo;
            offset = offset.bind(tango)(oscar, verify);
            verify = new Array(2);
            verify[0] = offset;
            offset = output.length;
            if(!(yankee === offset)) { _fun00010_ip = 1042; continue _fun00009 }
 885:
            romeo = _closure1_slot15;
            yankee = _closure1_slot1;
            foxtrot = _closure1_slot2;
            offset = 32;
            offset = foxtrot[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            source = _closure1_slot0;
            result = 33;
            result = foxtrot[result];
            result = source.bind(tango)(result);
            result = result.NoResults;
            offset['Illustration'] = result;
            result = foxtrot[control];
            result = source.bind(tango)(result);
            vacuum = result.intl;
            update = vacuum.string;
            result = foxtrot[control];
            result = source.bind(tango)(result);
            result = result.t;
            result = result.qVQ9ub;
            result = update.bind(vacuum)(result);
            offset['title'] = result;
            result = foxtrot[control];
            result = source.bind(tango)(result);
            update = result.intl;
            result = update.string;
            foxtrot = foxtrot[control];
            foxtrot = source.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.oB9gra;
            foxtrot = result.bind(update)(foxtrot);
            offset['body'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            _fun00010_ip = 1146; continue _fun00009;
 1042:
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot0;
            result = _closure1_slot2;
            yankee = 31;
            yankee = result[yankee];
            yankee = romeo.bind(tango)(yankee);
            romeo = yankee.FlashList;
            yankee = {};
            yankee['keyExtractor'] = echo;
            yankee['data'] = output;
            yankee['renderItem'] = backup;
            backup = _closure1_slot6;
            yankee['estimatedItemSize'] = backup;
            backup = {};
            output = _closure1_slot1;
            kilo = 15;
            kilo = result[kilo];
            kilo = output.bind(tango)(kilo);
            kilo = kilo.spacing;
            kilo = kilo.PX_16;
            kilo = sizing + kilo;
            backup['paddingBottom'] = kilo;
            yankee['contentContainerStyle'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 1146:
            verify[1] = offset;
            report['children'] = verify;
            oscar = zulu.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            oscar = null;
            if(options) { _fun00010_ip = 1176; continue _fun00009 }
 1173:
            oscar = golf;
 1176:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 34;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/GuildSettingsModalMembers.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();