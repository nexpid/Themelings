// app/utils/InstantInviteUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun79198: for(var _fun79198_ip = 0; ; ) switch(_fun79198_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun79198_ip = 46; continue _fun79198 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun79198_ip = 55; continue _fun79198 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun79198_ip = 345; continue _fun79198 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun79198_ip = 323; continue _fun79198 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun79198_ip = 283; continue _fun79198 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun79198_ip = 270; continue _fun79198 }
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
            if(!golf) { _fun79198_ip = 163; continue _fun79198 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun79198_ip = 179; continue _fun79198 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun79198_ip = 249; continue _fun79198 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun79198_ip = 249; continue _fun79198 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun79198_ip = 234; continue _fun79198 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun79198_ip = 247; continue _fun79198 }
 234:
            verify = _closure1_slot17;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun79198_ip = 265; continue _fun79198;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun79198_ip = 283; continue _fun79198;
 270:
            golf = _closure1_slot17;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun79198_ip = 323; continue _fun79198 }
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
            if(!tango) { _fun79198_ip = 330; continue _fun79198 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun79199: for(var _fun79199_ip = 0; ; ) switch(_fun79199_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun79199_ip = 56; continue _fun79199 }
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
                    _fun79199_ip = 67; continue _fun79199;
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
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun79200: for(var _fun79200_ip = 0; ; ) switch(_fun79200_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun79200_ip = 23; continue _fun79200 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun79200_ip = 33; continue _fun79200 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun79200_ip = 70; continue _fun79200 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun79200_ip = 55; continue _fun79200 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.InviteTargetTypes;
    var _closure1_slot11 = tango;
    tango = {};
    report = 'GROUP_DM';
    tango['GROUP_DM'] = report;
    report = 'DM';
    tango['DM'] = report;
    report = 'FRIEND';
    tango['FRIEND'] = report;
    report = 'CHANNEL';
    tango['CHANNEL'] = report;
    var _closure1_slot12 = tango;
    report = function(argFoo, argBar) { // Original name: isGuildMember
        _fun79201: for(var _fun79201_ip = 0; ; ) switch(_fun79201_ip) {
 0:
            report = argFoo;
            entity = null;
            entity = entity != report;
            if(!entity) { _fun79201_ip = 34; continue _fun79201 }
 12:
            tango = _closure1_slot5;
            zulu = tango.isMember;
            mike = argBar;
            entity = zulu.bind(tango)(report, mike);
 34:
            return entity;
        }
    };
    var _closure1_slot13 = report;
    report = function(argFoo) { // Original name: addDmUsers
        _fun79202: for(var _fun79202_ip = 0; ; ) switch(_fun79202_ip) {
 0:
            entity = argFoo;
            echo = entity.omitUserIds;
            result = entity.maxRowsWithoutQuery;
            output = entity.omitGuildId;
            sizing = entity.shownUserIds;
            kilo = entity.rows;
            backup = entity.counts;
            foxtrot = entity.includeGroupDms;
            romeo = entity.limit;
            zulu = _closure1_slot16;
            mike = _closure1_slot9;
            entity = mike.getPrivateChannelIds;
            mike = entity.bind(mike)();
            entity = undefined;
            offset = zulu.bind(entity)(mike);
            zulu = offset.bind(entity)();
            mike = zulu.done;
            verify = 0;
            options = false;
            golf = null;
            oscar = zulu;
            report = 0;
            tango = undefined;
            zulu = undefined;
            if(mike) { _fun79202_ip = 583; continue _fun79202 }
 111:
            source = oscar.value;
            if(!(golf != result)) { _fun79202_ip = 136; continue _fun79202 }
 120:
            if(!(result > verify)) { _fun79202_ip = 136; continue _fun79202 }
 124:
            mike = kilo.length;
            if(!(!(mike >= result))) { _fun79202_ip = 583; continue _fun79202 }
 136:
            if(!(golf != romeo)) { _fun79202_ip = 147; continue _fun79202 }
 140:
            if(!(!(report >= romeo))) { _fun79202_ip = 583; continue _fun79202 }
 147:
            update = _closure1_slot4;
            mike = update.getChannel;
            sequence = mike.bind(update)(source);
            control = report;
            source = tango;
            update = zulu;
            if(!(golf != sequence)) { _fun79202_ip = 556; continue _fun79202 }
 177:
            mike = sequence.isPrivate;
            mike = mike.bind(sequence)();
            control = report;
            source = tango;
            update = zulu;
            if(!mike) { _fun79202_ip = 556; continue _fun79202 }
 202:
            if(!foxtrot) { _fun79202_ip = 227; continue _fun79202 }
 205:
            vacuum = sequence.type;
            mike = _closure1_slot10;
            mike = mike.GROUP_DM;
            if(!(vacuum !== mike)) { _fun79202_ip = 497; continue _fun79202 }
 227:
            config = _closure1_slot6;
            vacuum = config.lastMessageId;
            mike = sequence.id;
            mike = vacuum.bind(config)(mike);
            control = report;
            source = tango;
            update = zulu;
            if(!(golf != mike)) { _fun79202_ip = 556; continue _fun79202 }
 263:
            mike = sequence.getRecipientId;
            vacuum = mike.bind(sequence)();
            control = report;
            source = vacuum;
            update = zulu;
            if(!(golf != vacuum)) { _fun79202_ip = 556; continue _fun79202 }
 289:
            mike = echo.has;
            mike = mike.bind(echo)(vacuum);
            control = report;
            source = vacuum;
            update = zulu;
            if(mike) { _fun79202_ip = 556; continue _fun79202 }
 314:
            mike = sizing.has;
            mike = mike.bind(sizing)(vacuum);
            control = report;
            source = vacuum;
            update = zulu;
            if(mike) { _fun79202_ip = 556; continue _fun79202 }
 339:
            config = _closure1_slot8;
            mike = config.getUser;
            mike = mike.bind(config)(vacuum);
            control = report;
            source = vacuum;
            update = mike;
            if(!(golf != mike)) { _fun79202_ip = 556; continue _fun79202 }
 370:
            config = mike.bot;
            control = report;
            source = vacuum;
            update = mike;
            if(config) { _fun79202_ip = 556; continue _fun79202 }
 391:
            record = _closure1_slot13;
            config = mike.id;
            config = record.bind(entity)(output, config);
            control = report;
            source = vacuum;
            update = mike;
            if(config) { _fun79202_ip = 556; continue _fun79202 }
 421:
            record = sizing.add;
            config = mike.id;
            config = record.bind(sizing)(config);
            record = kilo.push;
            config = {};
            context = _closure1_slot12;
            context = context.DM;
            config['type'] = context;
            config['item'] = mike;
            config['isSuggested'] = options;
            config = record.bind(kilo)(config);
            config = backup.numDms;
            config = config + 1;
            backup['numDms'] = config;
            control = report + 1;
            source = vacuum;
            update = mike;
            _fun79202_ip = 556; continue _fun79202;
 497:
            vacuum = kilo.push;
            mike = {};
            config = _closure1_slot12;
            config = config.GROUP_DM;
            mike['type'] = config;
            mike['item'] = sequence;
            mike['isSuggested'] = options;
            mike = vacuum.bind(kilo)(mike);
            mike = backup.numGroupDms;
            mike = mike + 1;
            backup['numGroupDms'] = mike;
            control = report + 1;
            source = tango;
            update = zulu;
 556:
            vacuum = offset.bind(entity)();
            mike = vacuum.done;
            report = control;
            tango = source;
            zulu = update;
            oscar = vacuum;
            if(!mike) { _fun79202_ip = 111; continue _fun79202 }
 583:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    report = {};
    verify = 10;
    oscar = options[verify];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.INVITE_OPTIONS_30_MINUTES;
    offset = oscar.value;
    oscar = {'value': 30, 'type': 'minutes'};
    report[offset] = oscar;
    oscar = options[verify];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.INVITE_OPTIONS_1_HOUR;
    offset = oscar.value;
    oscar = {'value': 1, 'type': 'hours'};
    report[offset] = oscar;
    oscar = options[verify];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.INVITE_OPTIONS_6_HOURS;
    offset = oscar.value;
    oscar = {'value': 6, 'type': 'hours'};
    report[offset] = oscar;
    oscar = options[verify];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.INVITE_OPTIONS_12_HOURS;
    yankee = oscar.value;
    oscar = 12;
    offset = {'value': 12, 'type': 'hours'};
    report[yankee] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_DAY;
    yankee = offset.value;
    offset = {'value': 1, 'type': 'days'};
    report[yankee] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_7_DAYS;
    yankee = offset.value;
    offset = {'value': 7, 'type': 'days'};
    report[yankee] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_FOREVER;
    yankee = offset.value;
    offset = {'value': 0, 'type': 'never'};
    report[yankee] = offset;
    var _closure1_slot15 = report;
    report = {};
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.MAX_AGE_OPTIONS;
    report['getMaxAgeOptions'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.MAX_USES_OPTIONS;
    report['getMaxUsesOptions'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_FOREVER;
    report['INVITE_OPTIONS_FOREVER'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_DAY;
    report['INVITE_OPTIONS_1_DAY'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_7_DAYS;
    report['INVITE_OPTIONS_7_DAYS'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_12_HOURS;
    report['INVITE_OPTIONS_12_HOURS'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_6_HOURS;
    report['INVITE_OPTIONS_6_HOURS'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_1_HOUR;
    report['INVITE_OPTIONS_1_HOUR'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_30_MINUTES;
    report['INVITE_OPTIONS_30_MINUTES'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_UNLIMITED;
    report['INVITE_OPTIONS_UNLIMITED'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_ONCE;
    report['INVITE_OPTIONS_ONCE'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_5_TIMES;
    report['INVITE_OPTIONS_5_TIMES'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_10_TIMES;
    report['INVITE_OPTIONS_10_TIMES'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_25_TIMES;
    report['INVITE_OPTIONS_25_TIMES'] = offset;
    offset = options[verify];
    offset = golf.bind(entity)(offset);
    offset = offset.INVITE_OPTIONS_50_TIMES;
    report['INVITE_OPTIONS_50_TIMES'] = offset;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.INVITE_OPTIONS_100_TIMES;
    report['INVITE_OPTIONS_100_TIMES'] = verify;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/InstantInviteUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['RowTypes'] = tango;
    tango = function(argFoo) { // Original name: generateRowsForQuery
        _fun79203: for(var _fun79203_ip = 0; ; ) switch(_fun79203_ip) {
 0:
            mike = argFoo;
            yankee = mike.query;
            report = mike.inviteTargetType;
            offset = mike.omitUserIds;
            oscar = mike.suggestedUserIds;
            golf = mike.suggestedChannelIds;
            verify = mike.maxRowsWithoutQuery;
            options = mike.omitGuildId;
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            config = zulu;
            mike = new config[mike](sequence);
            tango = mike instanceof Object ? mike : zulu;
            zulu = new Array(0);
            mike = {'numFriends': 0, 'numDms': 0, 'numGroupDms': 0, 'numGuildMembers': 0, 'numChannels': 0};
            output = 0;
            romeo = '';
            if(!(romeo !== yankee)) { _fun79203_ip = 264; continue _fun79203 }
 101:
            kilo = {};
            kilo['query'] = yankee;
            kilo['rows'] = zulu;
            kilo['counts'] = mike;
            yankee = _closure1_slot11;
            yankee = yankee.EMBEDDED_APPLICATION;
            if(!(report === yankee)) { _fun79203_ip = 169; continue _fun79203 }
 134:
            foxtrot = {};
            sequence = foxtrot;
            vacuum = kilo;
            yankee = copyDataProperties(sequence, vacuum);
            yankee = 'inviteTargetType';
            foxtrot[yankee] = report;
            romeo = function(argFoo) {
                _fun79204: for(var _fun79204_ip = 0; ; ) switch(_fun79204_ip) {
 0:
                    mike = argFoo;
                    oscar = mike.query;
                    zulu = mike.rows;
                    var _closure3_slot0 = zulu;
                    zulu = mike.counts;
                    var _closure3_slot1 = zulu;
                    tango = mike.inviteTargetType;
                    zulu = _closure1_slot11;
                    zulu = zulu.EMBEDDED_APPLICATION;
                    if(!(tango === zulu)) { _fun79204_ip = 121; continue _fun79204 }
 53:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 9;
                    mike = tango[mike];
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.queryChannels;
                    mike = {};
                    mike['query'] = oscar;
                    oscar = 3;
                    mike['limit'] = oscar;
                    mike['guildId'] = report;
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        entity = argFoo;
                        report = entity.record;
                        tango = _closure3_slot0;
                        zulu = tango.push;
                        mike = {};
                        oscar = _closure1_slot12;
                        oscar = oscar.CHANNEL;
                        mike['type'] = oscar;
                        mike['item'] = report;
                        report = false;
                        mike['isSuggested'] = report;
                        mike = zulu.bind(tango)(mike);
                        mike = _closure3_slot1;
                        entity = mike.numChannels;
                        entity = entity + 1;
                        mike['numChannels'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = undefined;
            yankee = romeo.bind(yankee)(foxtrot);
 169:
            sizing = {};
            sequence = sizing;
            vacuum = kilo;
            yankee = copyDataProperties(sequence, vacuum);
            backup = 'omitUserIds';
            sizing[backup] = offset;
            foxtrot = 'shownUserIds';
            sizing[foxtrot] = tango;
            yankee = function(argFoo) {
                entity = argFoo;
                oscar = entity.query;
                zulu = entity.omitUserIds;
                var _closure3_slot0 = zulu;
                zulu = entity.shownUserIds;
                var _closure3_slot1 = zulu;
                zulu = entity.rows;
                var _closure3_slot2 = zulu;
                entity = entity.counts;
                var _closure3_slot3 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.queryDMUsers;
                zulu = {};
                zulu['query'] = oscar;
                oscar = 50;
                zulu['limit'] = oscar;
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun79207: for(var _fun79207_ip = 0; ; ) switch(_fun79207_ip) {
 0:
                        entity = argFoo;
                        report = entity.record;
                        tango = _closure3_slot0;
                        zulu = tango.has;
                        mike = report.id;
                        mike = zulu.bind(tango)(mike);
                        if(mike) { _fun79207_ip = 170; continue _fun79207 }
 37:
                        tango = _closure1_slot4;
                        zulu = tango.getDMFromUserId;
                        mike = report.id;
                        options = zulu.bind(tango)(mike);
                        tango = null;
                        mike = tango != options;
                        if(!mike) { _fun79207_ip = 88; continue _fun79207 }
 69:
                        golf = _closure1_slot6;
                        zulu = golf.lastMessageId;
                        zulu = zulu.bind(golf)(options);
                        mike = tango != zulu;
 88:
                        if(!mike) { _fun79207_ip = 170; continue _fun79207 }
 91:
                        tango = _closure3_slot1;
                        zulu = tango.add;
                        mike = report.id;
                        mike = zulu.bind(tango)(mike);
                        tango = _closure3_slot2;
                        zulu = tango.push;
                        mike = {};
                        oscar = _closure1_slot12;
                        oscar = oscar.DM;
                        mike['type'] = oscar;
                        mike['item'] = report;
                        report = false;
                        mike['isSuggested'] = report;
                        mike = zulu.bind(tango)(mike);
                        mike = _closure3_slot3;
                        entity = mike.numDms;
                        entity = entity + 1;
                        mike['numDms'] = entity;
 170:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            romeo = undefined;
            yankee = yankee.bind(romeo)(sizing);
            yankee = function(argFoo) {
                entity = argFoo;
                oscar = entity.query;
                zulu = entity.rows;
                var _closure3_slot0 = zulu;
                entity = entity.counts;
                var _closure3_slot1 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.queryGroupDMs;
                zulu = {'query': null, 'limit': 50, 'fuzzy': false};
                zulu['query'] = oscar;
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    entity = argFoo;
                    report = entity.record;
                    tango = _closure3_slot0;
                    zulu = tango.push;
                    mike = {};
                    oscar = _closure1_slot12;
                    oscar = oscar.GROUP_DM;
                    mike['type'] = oscar;
                    mike['item'] = report;
                    report = false;
                    mike['isSuggested'] = report;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure3_slot1;
                    entity = mike.numGroupDms;
                    entity = entity + 1;
                    mike['numGroupDms'] = entity;
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            yankee = yankee.bind(romeo)(kilo);
            yankee = {};
            sequence = yankee;
            vacuum = kilo;
            kilo = copyDataProperties(sequence, vacuum);
            yankee[backup] = offset;
            yankee[foxtrot] = tango;
            entity = function(argFoo) {
                entity = argFoo;
                oscar = entity.query;
                zulu = entity.rows;
                var _closure3_slot0 = zulu;
                zulu = entity.counts;
                var _closure3_slot1 = zulu;
                zulu = entity.omitUserIds;
                var _closure3_slot2 = zulu;
                entity = entity.shownUserIds;
                var _closure3_slot3 = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.queryFriends;
                zulu = {'query': null, 'limit': 500, '_fuzzy': false};
                zulu['query'] = oscar;
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun79211: for(var _fun79211_ip = 0; ; ) switch(_fun79211_ip) {
 0:
                        entity = argFoo;
                        report = entity.record;
                        tango = _closure3_slot2;
                        zulu = tango.has;
                        mike = report.id;
                        mike = zulu.bind(tango)(mike);
                        if(mike) { _fun79211_ip = 53; continue _fun79211 }
 34:
                        oscar = _closure3_slot3;
                        tango = oscar.has;
                        zulu = report.id;
                        mike = tango.bind(oscar)(zulu);
 53:
                        if(mike) { _fun79211_ip = 138; continue _fun79211 }
 56:
                        tango = _closure3_slot3;
                        zulu = tango.add;
                        mike = report.id;
                        mike = zulu.bind(tango)(mike);
                        tango = _closure3_slot0;
                        zulu = tango.push;
                        mike = {};
                        oscar = _closure1_slot12;
                        oscar = oscar.FRIEND;
                        mike['type'] = oscar;
                        mike['item'] = report;
                        report = false;
                        mike['isSuggested'] = report;
                        mike = zulu.bind(tango)(mike);
                        mike = _closure3_slot1;
                        entity = mike.numFriends;
                        entity = entity + 1;
                        mike['numFriends'] = entity;
 138:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = entity.bind(romeo)(yankee);
            _fun79203_ip = 1134; continue _fun79203;
 264:
            entity = {};
            entity['omitUserIds'] = offset;
            entity['maxRowsWithoutQuery'] = verify;
            entity['omitGuildId'] = options;
            entity['shownUserIds'] = tango;
            entity['rows'] = zulu;
            entity['counts'] = mike;
            tango = _closure1_slot11;
            tango = tango.EMBEDDED_APPLICATION;
            if(!(report === tango)) { _fun79203_ip = 546; continue _fun79203 }
 316:
            report = _closure1_slot14;
            tango = {};
            sequence = tango;
            vacuum = entity;
            options = copyDataProperties(sequence, vacuum);
            verify = false;
            options = 'includeGroupDms';
            tango[options] = verify;
            verify = 1;
            options = 'limit';
            tango[options] = verify;
            foxtrot = undefined;
            tango = report.bind(foxtrot)(tango);
            tango = {};
            sequence = tango;
            vacuum = entity;
            report = copyDataProperties(sequence, vacuum);
            report = 'suggestedChannelIds';
            tango[report] = golf;
            report = tango.suggestedChannelIds;
            romeo = tango.maxRowsWithoutQuery;
            yankee = tango.rows;
            offset = tango.counts;
            verify = null;
            if(!(verify != report)) { _fun79203_ip = 546; continue _fun79203 }
 418:
            tango = _closure1_slot16;
            options = tango.bind(foxtrot)(report);
            report = options.bind(foxtrot)();
            tango = report.done;
            golf = true;
            if(tango) { _fun79203_ip = 546; continue _fun79203 }
 441:
            kilo = report.value;
            if(!(verify != romeo)) { _fun79203_ip = 463; continue _fun79203 }
 450:
            if(!(romeo > output)) { _fun79203_ip = 463; continue _fun79203 }
 454:
            tango = yankee.length;
            if(!(!(tango >= romeo))) { _fun79203_ip = 546; continue _fun79203 }
 463:
            backup = _closure1_slot4;
            tango = backup.getChannel;
            kilo = tango.bind(backup)(kilo);
            if(!(verify != kilo)) { _fun79203_ip = 531; continue _fun79203 }
 481:
            backup = yankee.push;
            tango = {};
            result = _closure1_slot12;
            result = result.CHANNEL;
            tango['type'] = result;
            tango['item'] = kilo;
            tango['isSuggested'] = golf;
            tango = backup.bind(yankee)(tango);
            tango = offset.numChannels;
            tango = tango + 1;
            offset['numChannels'] = tango;
 531:
            backup = options.bind(foxtrot)();
            tango = backup.done;
            report = backup;
            if(!tango) { _fun79203_ip = 441; continue _fun79203 }
 546:
            tango = {};
            sequence = tango;
            vacuum = entity;
            report = copyDataProperties(sequence, vacuum);
            report = 'suggestedUserIds';
            tango[report] = oscar;
            result = tango.omitUserIds;
            report = tango.suggestedUserIds;
            backup = tango.maxRowsWithoutQuery;
            foxtrot = tango.omitGuildId;
            romeo = tango.shownUserIds;
            yankee = tango.rows;
            offset = tango.counts;
            kilo = null;
            if(!(kilo != report)) { _fun79203_ip = 843; continue _fun79203 }
 618:
            tango = _closure1_slot16;
            verify = undefined;
            options = tango.bind(verify)(report);
            report = options.bind(verify)();
            tango = report.done;
            golf = true;
            oscar = report;
            report = undefined;
            if(tango) { _fun79203_ip = 843; continue _fun79203 }
 651:
            source = oscar.value;
            if(!(kilo != backup)) { _fun79203_ip = 676; continue _fun79203 }
 660:
            if(!(backup > output)) { _fun79203_ip = 676; continue _fun79203 }
 664:
            tango = yankee.length;
            if(!(!(tango >= backup))) { _fun79203_ip = 843; continue _fun79203 }
 676:
            tango = result.has;
            tango = tango.bind(result)(source);
            echo = report;
            if(tango) { _fun79203_ip = 822; continue _fun79203 }
 695:
            tango = romeo.has;
            tango = tango.bind(romeo)(source);
            echo = report;
            if(tango) { _fun79203_ip = 822; continue _fun79203 }
 711:
            update = _closure1_slot8;
            tango = update.getUser;
            tango = tango.bind(update)(source);
            update = kilo == tango;
            if(update) { _fun79203_ip = 748; continue _fun79203 }
 733:
            control = _closure1_slot13;
            source = tango.id;
            update = control.bind(verify)(foxtrot, source);
 748:
            echo = tango;
            if(update) { _fun79203_ip = 822; continue _fun79203 }
 754:
            source = romeo.add;
            update = tango.id;
            update = source.bind(romeo)(update);
            source = yankee.push;
            update = {};
            control = _closure1_slot12;
            control = control.FRIEND;
            update['type'] = control;
            update['item'] = tango;
            update['isSuggested'] = golf;
            update = source.bind(yankee)(update);
            update = offset.numFriends;
            update = update + 1;
            offset['numFriends'] = update;
            echo = tango;
 822:
            update = options.bind(verify)();
            tango = update.done;
            report = echo;
            oscar = update;
            if(!tango) { _fun79203_ip = 651; continue _fun79203 }
 843:
            report = _closure1_slot14;
            tango = {};
            sequence = tango;
            vacuum = entity;
            oscar = copyDataProperties(sequence, vacuum);
            golf = true;
            oscar = 'includeGroupDms';
            tango[oscar] = golf;
            backup = undefined;
            tango = report.bind(backup)(tango);
            foxtrot = entity.omitUserIds;
            romeo = entity.maxRowsWithoutQuery;
            yankee = entity.omitGuildId;
            offset = entity.shownUserIds;
            verify = entity.rows;
            options = entity.counts;
            tango = _closure1_slot16;
            report = _closure1_slot7;
            entity = report.getFriendIDs;
            entity = entity.bind(report)();
            golf = tango.bind(backup)(entity);
            tango = golf.bind(backup)();
            entity = tango.done;
            oscar = false;
            report = tango;
            tango = undefined;
            if(entity) { _fun79203_ip = 1134; continue _fun79203 }
 960:
            update = report.value;
            if(!(kilo != romeo)) { _fun79203_ip = 985; continue _fun79203 }
 969:
            if(!(romeo > output)) { _fun79203_ip = 985; continue _fun79203 }
 973:
            entity = verify.length;
            if(!(!(entity >= romeo))) { _fun79203_ip = 1134; continue _fun79203 }
 985:
            entity = foxtrot.has;
            entity = entity.bind(foxtrot)(update);
            result = tango;
            if(entity) { _fun79203_ip = 1113; continue _fun79203 }
 1001:
            entity = offset.has;
            entity = entity.bind(offset)(update);
            result = tango;
            if(entity) { _fun79203_ip = 1113; continue _fun79203 }
 1017:
            echo = _closure1_slot8;
            entity = echo.getUser;
            entity = entity.bind(echo)(update);
            echo = kilo == entity;
            if(echo) { _fun79203_ip = 1054; continue _fun79203 }
 1039:
            source = _closure1_slot13;
            update = entity.id;
            echo = source.bind(backup)(yankee, update);
 1054:
            result = entity;
            if(echo) { _fun79203_ip = 1113; continue _fun79203 }
 1060:
            update = verify.push;
            echo = {};
            source = _closure1_slot12;
            source = source.FRIEND;
            echo['type'] = source;
            echo['item'] = entity;
            echo['isSuggested'] = oscar;
            echo = update.bind(verify)(echo);
            echo = options.numFriends;
            echo = echo + 1;
            options['numFriends'] = echo;
            result = entity;
 1113:
            echo = golf.bind(backup)();
            entity = echo.done;
            tango = result;
            report = echo;
            if(!entity) { _fun79203_ip = 960; continue _fun79203 }
 1134:
            entity = {};
            entity['rows'] = zulu;
            entity['counts'] = mike;
            return entity;
        }
    };
    zulu['generateRowsForQuery'] = tango;
    tango = function(argFoo, argBar) { // Original name: getMostRecentDMedUser
        _fun79212: for(var _fun79212_ip = 0; ; ) switch(_fun79212_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            mike = _closure1_slot16;
            zulu = _closure1_slot9;
            entity = zulu.getPrivateChannelIds;
            entity = entity.bind(zulu)();
            golf = undefined;
            oscar = mike.bind(golf)(entity);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            entity = null;
            report = zulu;
            tango = undefined;
            zulu = undefined;
            if(mike) { _fun79212_ip = 271; continue _fun79212 }
 58:
            romeo = report.value;
            yankee = _closure1_slot4;
            mike = yankee.getChannel;
            foxtrot = mike.bind(yankee)(romeo);
            romeo = tango;
            yankee = zulu;
            if(!(entity != foxtrot)) { _fun79212_ip = 247; continue _fun79212 }
 90:
            mike = foxtrot.isDM;
            mike = mike.bind(foxtrot)();
            romeo = tango;
            yankee = zulu;
            if(!mike) { _fun79212_ip = 247; continue _fun79212 }
 112:
            kilo = _closure1_slot6;
            backup = kilo.lastMessageId;
            mike = foxtrot.id;
            mike = backup.bind(kilo)(mike);
            romeo = tango;
            yankee = zulu;
            if(!(entity != mike)) { _fun79212_ip = 247; continue _fun79212 }
 142:
            mike = foxtrot.getRecipientId;
            backup = mike.bind(foxtrot)();
            yankee = zulu;
            romeo = backup;
            if(!(entity != romeo)) { _fun79212_ip = 247; continue _fun79212 }
 162:
            mike = offset.has;
            mike = mike.bind(offset)(backup);
            romeo = backup;
            yankee = zulu;
            if(mike) { _fun79212_ip = 247; continue _fun79212 }
 181:
            foxtrot = _closure1_slot8;
            mike = foxtrot.getUser;
            mike = mike.bind(foxtrot)(backup);
            romeo = backup;
            yankee = mike;
            if(!(entity != mike)) { _fun79212_ip = 247; continue _fun79212 }
 206:
            foxtrot = mike.bot;
            romeo = backup;
            yankee = mike;
            if(foxtrot) { _fun79212_ip = 247; continue _fun79212 }
 221:
            kilo = _closure1_slot13;
            foxtrot = mike.id;
            foxtrot = kilo.bind(golf)(verify, foxtrot);
            romeo = backup;
            yankee = mike;
            if(foxtrot) { _fun79212_ip = 247; continue _fun79212 }
 245:
            return mike;
 247:
            foxtrot = oscar.bind(golf)();
            mike = foxtrot.done;
            tango = romeo;
            zulu = yankee;
            report = foxtrot;
            if(!mike) { _fun79212_ip = 58; continue _fun79212 }
 271:
            return entity;
        }
    };
    zulu['getMostRecentDMedUser'] = tango;
    tango = function(argFoo) { // Original name: getUsersAlreadyJoined
        _fun79213: for(var _fun79213_ip = 0; ; ) switch(_fun79213_ip) {
 0:
            mike = argFoo;
            entity = mike.channel;
            tango = mike.inviteTargetType;
            oscar = mike.applicationId;
            mike = _closure1_slot11;
            mike = mike.EMBEDDED_APPLICATION;
            if(!(tango === mike)) { _fun79213_ip = 155; continue _fun79213 }
 36:
            mike = null;
            if(!(mike != entity)) { _fun79213_ip = 155; continue _fun79213 }
 42:
            mike = _closure1_slot16;
            tango = _closure1_slot3;
            zulu = tango.getEmbeddedActivitiesForChannel;
            entity = entity.id;
            entity = zulu.bind(tango)(entity);
            report = undefined;
            tango = mike.bind(report)(entity);
            mike = tango.bind(report)();
            entity = mike.done;
            zulu = mike;
            if(entity) { _fun79213_ip = 155; continue _fun79213 }
 88:
            entity = zulu.value;
            mike = entity.applicationId;
            if(!(mike !== oscar)) { _fun79213_ip = 119; continue _fun79213 }
 102:
            golf = tango.bind(report)();
            mike = golf.done;
            zulu = golf;
            if(mike) { _fun79213_ip = 155; continue _fun79213 }
 117:
            _fun79213_ip = 88; continue _fun79213;
 119:
            mike = global;
            zulu = mike.Set;
            options = entity.userIds;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            verify = mike;
            entity = new verify[zulu](options, golf);
            entity = entity instanceof Object ? entity : mike;
            return entity;
 155:
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            verify = mike;
            entity = new verify[entity](options);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getUsersAlreadyJoined'] = tango;
    tango = function(argFoo, argBar) { // Original name: maxAgeString
        _fun79214: for(var _fun79214_ip = 0; ; ) switch(_fun79214_ip) {
 0:
            tango = argFoo;
            entity = global;
            zulu = entity.parseInt;
            oscar = undefined;
            mike = argBar;
            entity = 10;
            verify = zulu.bind(oscar)(mike, entity);
            entity = 0;
            entity = entity === verify;
            zulu = _closure1_slot15;
            report = zulu[tango];
            offset = report.value;
            zulu = zulu[tango];
            tango = zulu.type;
            zulu = 'minutes';
            if(!(zulu !== tango)) { _fun79214_ip = 390; continue _fun79214 }
 67:
            zulu = 'hours';
            if(!(zulu !== tango)) { _fun79214_ip = 296; continue _fun79214 }
 78:
            zulu = 'days';
            if(!(zulu !== tango)) { _fun79214_ip = 202; continue _fun79214 }
 86:
            zulu = 'never';
            if(!(zulu !== tango)) { _fun79214_ip = 102; continue _fun79214 }
 96:
            zulu = '';
            return zulu;
 102:
            options = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 11;
            zulu = yankee[tango];
            zulu = options.bind(oscar)(zulu);
            golf = zulu.intl;
            if(entity) { _fun79214_ip = 170; continue _fun79214 }
 130:
            romeo = golf.formatToPlainString;
            zulu = yankee[tango];
            zulu = options.bind(oscar)(zulu);
            zulu = zulu.t;
            report = zulu.yJnTxM;
            zulu = {};
            zulu['numUses'] = verify;
            zulu = romeo.bind(golf)(report, zulu);
            _fun79214_ip = 200; continue _fun79214;
 170:
            report = golf.string;
            tango = yankee[tango];
            tango = options.bind(oscar)(tango);
            tango = tango.t;
            tango = tango.QrHBnJ;
            zulu = report.bind(golf)(tango);
 200:
            return zulu;
 202:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 11;
            golf = report[zulu];
            golf = tango.bind(oscar)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            zulu = report[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.t;
            if(entity) { _fun79214_ip = 275; continue _fun79214 }
 249:
            report = tango.TfuB9P;
            zulu = {};
            zulu['numDays'] = offset;
            zulu['numUses'] = verify;
            zulu = golf.bind(options)(report, zulu);
            _fun79214_ip = 294; continue _fun79214;
 275:
            report = tango.T96qsr;
            tango = {};
            tango['numDays'] = offset;
            zulu = golf.bind(options)(report, tango);
 294:
            return zulu;
 296:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 11;
            golf = report[zulu];
            golf = tango.bind(oscar)(golf);
            options = golf.intl;
            golf = options.formatToPlainString;
            zulu = report[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.t;
            if(entity) { _fun79214_ip = 369; continue _fun79214 }
 343:
            report = tango.NgZgAA;
            zulu = {};
            zulu['numHours'] = offset;
            zulu['numUses'] = verify;
            zulu = golf.bind(options)(report, zulu);
            _fun79214_ip = 388; continue _fun79214;
 369:
            report = tango.ZVdJMz;
            tango = {};
            tango['numHours'] = offset;
            zulu = golf.bind(options)(report, tango);
 388:
            return zulu;
 390:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 11;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            if(entity) { _fun79214_ip = 458; continue _fun79214 }
 418:
            options = tango.formatToPlainString;
            entity = golf[mike];
            entity = report.bind(oscar)(entity);
            entity = entity.t;
            zulu = entity.eDRWJC;
            entity = {};
            entity['numUses'] = verify;
            entity = options.bind(tango)(zulu, entity);
            _fun79214_ip = 488; continue _fun79214;
 458:
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike./WbTXF;
            entity = zulu.bind(tango)(mike);
 488:
            return entity;
        }
    };
    zulu['maxAgeString'] = tango;
    mike = function(argFoo, argBar) { // Original name: urgentShareMessageString
        _fun79215: for(var _fun79215_ip = 0; ; ) switch(_fun79215_ip) {
 0:
            zulu = argFoo;
            report = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun79215_ip = 355; continue _fun79215 }
 15:
            mike = _closure1_slot15;
            tango = mike[zulu];
            oscar = tango.value;
            mike = mike[zulu];
            zulu = mike.type;
            mike = 'minutes';
            if(!(mike !== zulu)) { _fun79215_ip = 281; continue _fun79215 }
 51:
            mike = 'hours';
            if(!(mike !== zulu)) { _fun79215_ip = 209; continue _fun79215 }
 62:
            mike = 'days';
            if(!(mike !== zulu)) { _fun79215_ip = 137; continue _fun79215 }
 70:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 11;
            tango = verify[mike];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            golf = tango.intl;
            tango = golf.formatToPlainString;
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.RHbY6O;
            mike = {};
            mike['link'] = report;
            mike = tango.bind(golf)(zulu, mike);
            return mike;
 137:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 11;
            tango = verify[mike];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            golf = tango.intl;
            tango = golf.formatToPlainString;
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.gLIlkZ;
            mike = {};
            mike['numDays'] = oscar;
            mike['link'] = report;
            mike = tango.bind(golf)(zulu, mike);
            return mike;
 209:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 11;
            tango = verify[mike];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            golf = tango.intl;
            tango = golf.formatToPlainString;
            mike = verify[mike];
            mike = options.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.3d9BlJ;
            mike = {};
            mike['numHours'] = oscar;
            mike['link'] = report;
            mike = tango.bind(golf)(zulu, mike);
            return mike;
 281:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 11;
            zulu = options[entity];
            mike = undefined;
            zulu = golf.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = options[entity];
            entity = golf.bind(mike)(entity);
            entity = entity.t;
            mike = entity.N3VHk5;
            entity = {};
            entity['numMinutes'] = oscar;
            entity['link'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 355:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 11;
            zulu = golf[entity];
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            tango = zulu.intl;
            zulu = tango.formatToPlainString;
            entity = golf[entity];
            entity = oscar.bind(mike)(entity);
            entity = entity.t;
            mike = entity.RHbY6O;
            entity = {};
            entity['link'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['urgentShareMessageString'] = mike;
    return entity;
})();