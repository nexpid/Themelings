// app/modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    offset = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = options;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun113005: for(var _fun113005_ip = 0; ; ) switch(_fun113005_ip) {
 0:
            golf = argFoo;
            tango = 'object';
            entity = typeof golf;
            mike = golf;
            if(!(tango === entity)) { _fun113005_ip = 119; continue _fun113005 }
 17:
            mike = golf;
            if(!mike) { _fun113005_ip = 119; continue _fun113005 }
 23:
            entity = global;
            zulu = entity.Symbol;
            zulu = zulu.toPrimitive;
            oscar = golf[zulu];
            report = undefined;
            if(!(report === oscar)) { _fun113005_ip = 60; continue _fun113005 }
 47:
            zulu = entity.String;
            mike = zulu.bind(report)(golf);
            _fun113005_ip = 119; continue _fun113005;
 60:
            report = oscar.call;
            zulu = 'string';
            report = report.bind(oscar)(golf, zulu);
            zulu = typeof report;
            mike = report;
            if(!(tango === zulu)) { _fun113005_ip = 119; continue _fun113005 }
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
            if(!(tango !== zulu)) { _fun113005_ip = 136; continue _fun113005 }
 133:
            entity = '' + mike;
 136:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun113006: for(var _fun113006_ip = 0; ; ) switch(_fun113006_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun113006_ip = 46; continue _fun113006 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun113006_ip = 55; continue _fun113006 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun113006_ip = 345; continue _fun113006 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun113006_ip = 323; continue _fun113006 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun113006_ip = 283; continue _fun113006 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun113006_ip = 270; continue _fun113006 }
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
            if(!golf) { _fun113006_ip = 163; continue _fun113006 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun113006_ip = 179; continue _fun113006 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun113006_ip = 249; continue _fun113006 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun113006_ip = 249; continue _fun113006 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun113006_ip = 234; continue _fun113006 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun113006_ip = 247; continue _fun113006 }
 234:
            verify = _closure1_slot21;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun113006_ip = 265; continue _fun113006;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun113006_ip = 283; continue _fun113006;
 270:
            golf = _closure1_slot21;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun113006_ip = 323; continue _fun113006 }
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
            if(!tango) { _fun113006_ip = 330; continue _fun113006 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun113007: for(var _fun113007_ip = 0; ; ) switch(_fun113007_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun113007_ip = 56; continue _fun113007 }
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
                    _fun113007_ip = 67; continue _fun113007;
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
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun113008: for(var _fun113008_ip = 0; ; ) switch(_fun113008_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun113008_ip = 23; continue _fun113008 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun113008_ip = 33; continue _fun113008 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun113008_ip = 70; continue _fun113008 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun113008_ip = 55; continue _fun113008 }
 70:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: isMatch
        _fun113009: for(var _fun113009_ip = 0; ; ) switch(_fun113009_ip) {
 0:
            entity = arguments[2];
            mike = argBar;
            var _closure2_slot0 = mike;
            offset = undefined;
            if(!(entity === offset)) { _fun113009_ip = 20; continue _fun113009 }
 18:
            entity = false;
 20:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = offset;
            verify = function(argFoo) { // Original name: _loop
                _fun113010: for(var _fun113010_ip = 0; ; ) switch(_fun113010_ip) {
 0:
                    zulu = argFoo;
                    var _closure3_slot0 = zulu;
                    mike = zulu.some;
                    entity = function(argFoo) {
                        _fun113011: for(var _fun113011_ip = 0; ; ) switch(_fun113011_ip) {
 0:
                            zulu = argFoo;
                            entity = _closure2_slot1;
                            if(entity) { _fun113011_ip = 69; continue _fun113011 }
 13:
                            tango = zulu.startsWith;
                            entity = _closure2_slot0;
                            entity = tango.bind(zulu)(entity);
                            if(entity) { _fun113011_ip = 67; continue _fun113011 }
 31:
                            oscar = _closure3_slot0;
                            report = oscar.join;
                            tango = ' ';
                            oscar = report.bind(oscar)(tango);
                            report = oscar.startsWith;
                            tango = _closure2_slot0;
                            entity = report.bind(oscar)(tango);
 67:
                            _fun113011_ip = 77; continue _fun113011;
 69:
                            mike = _closure2_slot0;
                            entity = zulu === mike;
 77:
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    if(entity) { _fun113010_ip = 34; continue _fun113010 }
 30:
                    entity = undefined;
                    return entity;
 34:
                    entity = {};
                    mike = _closure2_slot2;
                    entity['v'] = mike;
                    return entity;
                }
            };
            entity = global;
            zulu = entity.Object;
            mike = zulu.entries;
            entity = argFoo;
            options = mike.bind(zulu)(entity);
            entity = options.length;
            golf = 0;
            entity = golf < entity;
            report = 2;
            tango = 1;
            zulu = 0;
            if(!entity) { _fun113009_ip = 128; continue _fun113009 }
 82:
            mike = options[zulu];
            entity = _closure1_slot6;
            entity = entity.bind(offset)(mike, report);
            mike = entity[golf];
            _closure2_slot2 = mike;
            entity = entity[tango];
            entity = verify.bind(offset)(entity);
            if(entity) { _fun113009_ip = 132; continue _fun113009 }
 116:
            zulu = zulu + 1;
            mike = options.length;
            if(zulu < mike) { _fun113009_ip = 82; continue _fun113009 }
 128:
            mike = null;
            return mike;
 132:
            entity = entity.v;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: boostExact
        _fun113012: for(var _fun113012_ip = 0; ; ) switch(_fun113012_ip) {
 0:
            report = _closure1_slot22;
            tango = undefined;
            zulu = argFoo;
            mike = argBar;
            entity = true;
            mike = report.bind(tango)(zulu, mike, entity);
            entity = null;
            mike = entity != mike;
            entity = 0;
            if(!mike) { _fun113012_ip = 41; continue _fun113012 }
 35:
            entity = -1000;
 41:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    mike = function(argFoo) { // Original name: parseUserSearchResults
        _fun113013: for(var _fun113013_ip = 0; ; ) switch(_fun113013_ip) {
 0:
            tango = argFoo;
            backup = tango.data;
            verify = tango.withGuildMembers;
            entity = tango.withAffinitySuggestions;
            zulu = tango.withFriends;
            romeo = tango.withFriendSuggestions;
            control = tango.withFriendRequests;
            update = tango.withFriendRequestsIncoming;
            result = tango.withFriendRequestsOutgoing;
            kilo = tango.withFriendRequestsSpam;
            golf = tango.excludeCurrentUser;
            oscar = undefined;
            if(!(golf === oscar)) { _fun113013_ip = 72; continue _fun113013 }
 70:
            golf = false;
 72:
            record = tango.affinitySuggestionsLimit;
            if(!(record === oscar)) { _fun113013_ip = 89; continue _fun113013 }
 82:
            record = _closure1_slot15;
 89:
            var _closure2_slot0 = oscar;
            report = _closure1_slot17;
            lima = report.AffinitySuggestions;
            report = _closure1_slot17;
            sierra = report.FriendRequests;
            report = _closure1_slot17;
            status = report.FriendRequestsIncoming;
            report = _closure1_slot17;
            target = report.FriendRequestsOutgoing;
            report = _closure1_slot17;
            papa = report.FriendRequestsSpam;
            report = _closure1_slot17;
            context = report.FriendSuggestions;
            report = _closure1_slot17;
            sizing = report.Friends;
            report = _closure1_slot17;
            report = report.GuildMembers;
            sequence = backup[lima];
            if(!(oscar === sequence)) { _fun113013_ip = 188; continue _fun113013 }
 184:
            sequence = new Array(0);
 188:
            source = backup[sierra];
            if(!(oscar === source)) { _fun113013_ip = 200; continue _fun113013 }
 196:
            source = new Array(0);
 200:
            echo = backup[status];
            if(!(oscar === echo)) { _fun113013_ip = 212; continue _fun113013 }
 208:
            echo = new Array(0);
 212:
            output = backup[target];
            if(!(oscar === output)) { _fun113013_ip = 224; continue _fun113013 }
 220:
            output = new Array(0);
 224:
            foxtrot = backup[papa];
            if(!(oscar === foxtrot)) { _fun113013_ip = 236; continue _fun113013 }
 232:
            foxtrot = new Array(0);
 236:
            yankee = backup[context];
            if(!(oscar === yankee)) { _fun113013_ip = 248; continue _fun113013 }
 244:
            yankee = new Array(0);
 248:
            offset = backup[sizing];
            if(!(oscar === offset)) { _fun113013_ip = 260; continue _fun113013 }
 256:
            offset = new Array(0);
 260:
            vacuum = backup[report];
            if(!(oscar === vacuum)) { _fun113013_ip = 272; continue _fun113013 }
 268:
            vacuum = new Array(0);
 272:
            options = _closure1_slot3;
            config = new Array(8);
            config[0] = lima;
            config[1] = sierra;
            config[2] = status;
            config[3] = target;
            config[4] = papa;
            config[5] = context;
            config[6] = sizing;
            config[7] = report;
            sizing = config.map;
            report = _closure1_slot19;
            report = sizing.bind(config)(report);
            report = options.bind(oscar)(backup, report);
            backup = _closure1_slot13;
            options = backup.getCurrentUser;
            backup = options.bind(backup)();
            sizing = null;
            config = sizing == backup;
            options = undefined;
            if(config) { _fun113013_ip = 361; continue _fun113013 }
 356:
            options = backup.id;
 361:
            _closure2_slot0 = options;
            options = vacuum;
            if(!golf) { _fun113013_ip = 388; continue _fun113013 }
 371:
            backup = vacuum.filter;
            golf = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike !== entity;
                return entity;
            };
            options = backup.bind(vacuum)(golf);
 388:
            golf = {};
            papa = _closure1_slot0;
            vacuum = _closure1_slot2;
            backup = 19;
            config = vacuum[backup];
            config = papa.bind(oscar)(config);
            context = config.intl;
            config = context.string;
            vacuum = vacuum[backup];
            vacuum = papa.bind(oscar)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.HbJ7eH;
            vacuum = config.bind(context)(vacuum);
            golf['title'] = vacuum;
            if(entity) { _fun113013_ip = 458; continue _fun113013 }
 452:
            entity = new Array(0);
            _fun113013_ip = 523; continue _fun113013;
 458:
            config = _closure1_slot1;
            context = _closure1_slot2;
            vacuum = 18;
            vacuum = context[vacuum];
            vacuum = config.bind(oscar)(vacuum);
            config = vacuum.bind(oscar)(sequence);
            sequence = config.sortBy;
            vacuum = function(argFoo) {
                entity = argFoo;
                entity = entity.affinity;
                entity = -entity;
                return entity;
            };
            config = sequence.bind(config)(vacuum);
            sequence = config.slice;
            vacuum = 0;
            sequence = sequence.bind(config)(vacuum, record);
            vacuum = sequence.value;
            entity = vacuum.bind(sequence)();
 523:
            golf['items'] = entity;
            entity = new Array(8);
            entity[0] = golf;
            golf = {};
            sequence = _closure1_slot0;
            vacuum = _closure1_slot2;
            config = vacuum[backup];
            config = sequence.bind(oscar)(config);
            record = config.intl;
            config = record.formatToPlainString;
            vacuum = vacuum[backup];
            vacuum = sequence.bind(oscar)(vacuum);
            vacuum = vacuum.t;
            sequence = vacuum.zsVtfn;
            vacuum = {};
            context = source.length;
            vacuum['pendingRequestNumber'] = context;
            vacuum = config.bind(record)(sequence, vacuum);
            golf['title'] = vacuum;
            if(control) { _fun113013_ip = 614; continue _fun113013 }
 610:
            source = new Array(0);
 614:
            golf['items'] = source;
            entity[1] = golf;
            golf = {};
            golf['title'] = sizing;
            if(update) { _fun113013_ip = 636; continue _fun113013 }
 632:
            echo = new Array(0);
 636:
            golf['items'] = echo;
            entity[2] = golf;
            golf = {};
            golf['title'] = sizing;
            if(result) { _fun113013_ip = 658; continue _fun113013 }
 654:
            output = new Array(0);
 658:
            golf['items'] = output;
            entity[3] = golf;
            golf = {};
            golf['title'] = sizing;
            if(kilo) { _fun113013_ip = 680; continue _fun113013 }
 676:
            foxtrot = new Array(0);
 680:
            golf['items'] = foxtrot;
            entity[4] = golf;
            golf = {};
            kilo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            sizing = foxtrot[backup];
            sizing = kilo.bind(oscar)(sizing);
            output = sizing.intl;
            sizing = output.formatToPlainString;
            foxtrot = foxtrot[backup];
            foxtrot = kilo.bind(oscar)(foxtrot);
            foxtrot = foxtrot.t;
            kilo = foxtrot.DYMZ/v;
            foxtrot = {};
            result = yankee.length;
            foxtrot['count'] = result;
            foxtrot = sizing.bind(output)(kilo, foxtrot);
            golf['title'] = foxtrot;
            if(romeo) { _fun113013_ip = 766; continue _fun113013 }
 762:
            yankee = new Array(0);
 766:
            golf['items'] = yankee;
            entity[5] = golf;
            golf = {};
            kilo = _closure1_slot0;
            yankee = _closure1_slot2;
            romeo = yankee[backup];
            romeo = kilo.bind(oscar)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[backup];
            yankee = kilo.bind(oscar)(yankee);
            yankee = yankee.t;
            yankee = yankee.TdEu5e;
            yankee = romeo.bind(foxtrot)(yankee);
            golf['title'] = yankee;
            if(zulu) { _fun113013_ip = 840; continue _fun113013 }
 836:
            offset = new Array(0);
 840:
            golf['items'] = offset;
            entity[6] = golf;
            golf = {};
            foxtrot = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = offset[backup];
            yankee = foxtrot.bind(oscar)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = offset[backup];
            offset = foxtrot.bind(oscar)(offset);
            offset = offset.t;
            offset = offset.y29JXl;
            offset = yankee.bind(romeo)(offset);
            golf['title'] = offset;
            if(verify) { _fun113013_ip = 914; continue _fun113013 }
 910:
            options = new Array(0);
 914:
            golf['items'] = options;
            entity[7] = golf;
            if(zulu) { _fun113013_ip = 932; continue _fun113013 }
 926:
            zulu = new Array(0);
            _fun113013_ip = 1001; continue _fun113013;
 932:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            tango = 18;
            tango = options[tango];
            tango = golf.bind(oscar)(tango);
            oscar = tango.bind(oscar)(report);
            report = oscar.map;
            tango = function(argFoo, argBar) {
                entity = {};
                mike = argBar;
                entity['title'] = mike;
                mike = argFoo;
                entity['items'] = mike;
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.sortBy;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.title;
                return entity;
            };
            tango = tango.bind(report)(mike);
            mike = tango.value;
            zulu = mike.bind(tango)();
 1001:
            whiskey = 8;
            quebec = entity;
            equality = zulu;
            mike = arraySpread(quebec, equality, whiskey);
            return entity;
        }
    };
    var _closure1_slot24 = mike;
    tango = global;
    yankee = tango.Object;
    verify = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    verify = options[oscar];
    oscar = argCorge;
    oscar = oscar.bind(entity)(verify);
    var _closure1_slot7 = oscar;
    verify = 5;
    oscar = options[verify];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 8;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    oscar = 9;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot12 = oscar;
    oscar = 10;
    oscar = options[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot13 = oscar;
    oscar = 11;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.RelationshipTypes;
    var _closure1_slot14 = oscar;
    var _closure1_slot15 = verify;
    verify = tango.Set;
    offset = oscar.FRIEND;
    tango = new Array(4);
    tango[0] = offset;
    offset = oscar.SUGGESTION;
    tango[1] = offset;
    offset = oscar.PENDING_INCOMING;
    tango[2] = offset;
    oscar = oscar.PENDING_OUTGOING;
    tango[3] = oscar;
    oscar = verify.prototype;
    oscar = Object.create(oscar, {constructor: {value: verify}});
    kilo = oscar;
    backup = tango;
    tango = new kilo[verify](backup, foxtrot);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot16 = tango;
    tango = {};
    oscar = 'AFFINITY_SUGGESTIONS';
    tango['AffinitySuggestions'] = oscar;
    oscar = 'FRIENDS';
    tango['Friends'] = oscar;
    oscar = 'FRIEND_REQUESTS';
    tango['FriendRequests'] = oscar;
    oscar = 'FRIEND_REQUESTS_INCOMING';
    tango['FriendRequestsIncoming'] = oscar;
    oscar = 'FRIEND_REQUESTS_OUTGOING';
    tango['FriendRequestsOutgoing'] = oscar;
    oscar = 'FRIEND_REQUESTS_SPAM';
    tango['FriendRequestsSpam'] = oscar;
    oscar = 'FRIEND_SUGGESTIONS';
    tango['FriendSuggestions'] = oscar;
    oscar = 'GUILD_MEMBERS';
    tango['GuildMembers'] = oscar;
    var _closure1_slot17 = tango;
    tango = function() {
        tango = _closure1_slot5;
        zulu = function(argFoo) { // Original name: UserSearch
            _fun113019: for(var _fun113019_ip = 0; ; ) switch(_fun113019_ip) {
 0:
                report = arguments[1];
                tango = this;
                var _closure3_slot0 = tango;
                entity = argFoo;
                var _closure3_slot1 = entity;
                entity = undefined;
                if(!(report === entity)) { _fun113019_ip = 27; continue _fun113019 }
 25:
                report = false;
 27:
                golf = _closure1_slot4;
                oscar = _closure2_slot0;
                oscar = golf.bind(entity)(tango, oscar);
                oscar = '';
                tango['currentQuery'] = oscar;
                oscar = {};
                tango['affinities'] = oscar;
                golf = null;
                tango['searchContext'] = golf;
                verify = _closure1_slot0;
                oscar = _closure1_slot2;
                options = 12;
                options = oscar[options];
                options = verify.bind(entity)(options);
                yankee = options.SecondaryIndexMap;
                options = yankee.prototype;
                verify = Object.create(options, {constructor: {value: yankee}});
                foxtrot = function(argFoo) {
                    _fun113020: for(var _fun113020_ip = 0; ; ) switch(_fun113020_ip) {
 0:
                        entity = argFoo;
                        oscar = entity.names;
                        tango = entity.affinity;
                        golf = entity.type;
                        zulu = entity.user;
                        entity = new Array(0);
                        report = _closure1_slot14;
                        report = report.PENDING_INCOMING;
                        if(!(report !== golf)) { _fun113020_ip = 279; continue _fun113020 }
 48:
                        report = _closure1_slot14;
                        report = report.PENDING_OUTGOING;
                        if(!(report !== golf)) { _fun113020_ip = 237; continue _fun113020 }
 65:
                        report = _closure1_slot14;
                        report = report.SUGGESTION;
                        if(!(report !== golf)) { _fun113020_ip = 215; continue _fun113020 }
 82:
                        report = _closure1_slot14;
                        report = report.FRIEND;
                        if(!(report === golf)) { _fun113020_ip = 355; continue _fun113020 }
 99:
                        golf = 0;
                        if(!(tango > golf)) { _fun113020_ip = 125; continue _fun113020 }
 105:
                        yankee = entity.push;
                        tango = _closure1_slot17;
                        tango = tango.AffinitySuggestions;
                        tango = yankee.bind(entity)(tango);
 125:
                        yankee = entity.push;
                        tango = _closure1_slot17;
                        tango = tango.Friends;
                        tango = yankee.bind(entity)(tango);
                        verify = oscar;
                        for(tango in verify)
 159:
                        {
 171:
                            report = entity.push;
                            tango = oscar[tango];
                            oscar = tango[golf];
                            tango = oscar.charAt;
                            oscar = tango.bind(oscar)(golf);
                            tango = oscar.toLocaleUpperCase;
                            tango = tango.bind(oscar)();
                            tango = report.bind(entity)(tango);
                            _fun113020_ip = 355; continue _fun113020;
 215:
                            report = entity.push;
                            tango = _closure1_slot17;
                            tango = tango.FriendSuggestions;
                            tango = report.bind(entity)(tango);
                            _fun113020_ip = 355; continue _fun113020;
 237:
                            report = entity.push;
                            tango = _closure1_slot17;
                            tango = tango.FriendRequests;
                            tango = report.bind(entity)(tango);
                            report = entity.push;
                            tango = _closure1_slot17;
                            tango = tango.FriendRequestsOutgoing;
                            tango = report.bind(entity)(tango);
                            _fun113020_ip = 355; continue _fun113020;
 279:
                            report = entity.push;
                            tango = _closure1_slot17;
                            tango = tango.FriendRequests;
                            tango = report.bind(entity)(tango);
                            report = _closure1_slot12;
                            tango = report.isSpam;
                            zulu = zulu.id;
                            tango = tango.bind(report)(zulu);
                            zulu = entity.push;
                            mike = _closure1_slot17;
                            if(tango) { _fun113020_ip = 344; continue _fun113020 }
 331:
                            tango = mike.FriendRequestsIncoming;
                            tango = zulu.bind(entity)(tango);
                            _fun113020_ip = 355; continue _fun113020;
 344:
                            mike = mike.FriendRequestsSpam;
                            mike = zulu.bind(entity)(mike);
                        }
 355:
                        return entity;
                    }
                };
                romeo = function(argFoo) {
                    _fun113021: for(var _fun113021_ip = 0; ; ) switch(_fun113021_ip) {
 0:
                        entity = argFoo;
                        mike = entity.names;
                        report = mike;
                        for(entity in report)
 19:
                        {
 28:
                            mike = mike[entity];
                            entity = 0;
                            entity = mike[entity];
                            return entity;
                        }
 40:
                        entity = '';
                        return entity;
                    }
                };
                backup = verify;
                options = new backup[yankee](foxtrot, romeo, yankee);
                options = options instanceof Object ? options : verify;
                tango['indexMap'] = options;
                tango['filteredFriends'] = golf;
                tango['filteredGuildMembers'] = golf;
                golf = false;
                tango['withGameFriends'] = golf;
                golf = function() {
                    mike = _closure3_slot0;
                    entity = mike.initializeUsersFromStores;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                tango['handlePostConnectionOpen'] = golf;
                golf = function(argFoo) {
                    _fun113023: for(var _fun113023_ip = 0; ; ) switch(_fun113023_ip) {
 0:
                        entity = argFoo;
                        mike = entity.relationship;
                        tango = _closure3_slot0;
                        zulu = tango.updateUser;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun113023_ip = 65; continue _fun113023 }
 35:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113023_ip = 65; continue _fun113023 }
 51:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 65:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleRelationship'] = golf;
                golf = function(argFoo) {
                    _fun113024: for(var _fun113024_ip = 0; ; ) switch(_fun113024_ip) {
 0:
                        entity = argFoo;
                        mike = entity.suggestion;
                        tango = _closure3_slot0;
                        zulu = tango.updateUser;
                        mike = mike.suggested_user;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun113024_ip = 71; continue _fun113024 }
 41:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113024_ip = 71; continue _fun113024 }
 57:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 71:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleFriendSuggestionCreate'] = golf;
                golf = function(argFoo) {
                    _fun113025: for(var _fun113025_ip = 0; ; ) switch(_fun113025_ip) {
 0:
                        entity = argFoo;
                        tango = entity.suggestedUserId;
                        zulu = _closure3_slot0;
                        mike = zulu.updateUser;
                        mike = mike.bind(zulu)(tango);
                        if(!mike) { _fun113025_ip = 60; continue _fun113025 }
 30:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113025_ip = 60; continue _fun113025 }
 46:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 60:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleFriendSuggestionDelete'] = golf;
                golf = function(argFoo) {
                    _fun113026: for(var _fun113026_ip = 0; ; ) switch(_fun113026_ip) {
 0:
                        entity = argFoo;
                        mike = entity.gameRelationship;
                        zulu = _closure3_slot0;
                        zulu = zulu.withGameFriends;
                        if(zulu) { _fun113026_ip = 29; continue _fun113026 }
 25:
                        zulu = false;
                        return zulu;
 29:
                        tango = _closure3_slot0;
                        zulu = tango.updateUser;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun113026_ip = 82; continue _fun113026 }
 52:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113026_ip = 82; continue _fun113026 }
 68:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 82:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleGameRelationshipAdd'] = golf;
                golf = function(argFoo) {
                    _fun113027: for(var _fun113027_ip = 0; ; ) switch(_fun113027_ip) {
 0:
                        entity = argFoo;
                        tango = entity.userId;
                        mike = _closure3_slot0;
                        mike = mike.withGameFriends;
                        if(mike) { _fun113027_ip = 28; continue _fun113027 }
 24:
                        mike = false;
                        return mike;
 28:
                        zulu = _closure3_slot0;
                        mike = zulu.updateUser;
                        mike = mike.bind(zulu)(tango);
                        if(!mike) { _fun113027_ip = 76; continue _fun113027 }
 46:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113027_ip = 76; continue _fun113027 }
 62:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 76:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleGameRelationshipRemove'] = golf;
                golf = function(argFoo) {
                    _fun113028: for(var _fun113028_ip = 0; ; ) switch(_fun113028_ip) {
 0:
                        entity = argFoo;
                        mike = entity.user;
                        tango = _closure3_slot0;
                        zulu = tango.updateUser;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        if(!mike) { _fun113028_ip = 64; continue _fun113028 }
 34:
                        mike = _closure3_slot0;
                        zulu = mike.onUpdate;
                        mike = null;
                        if(!(mike != zulu)) { _fun113028_ip = 64; continue _fun113028 }
 50:
                        mike = zulu.call;
                        entity = _closure3_slot0;
                        entity = mike.bind(zulu)(entity);
 64:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['handleGuildMember'] = golf;
                golf = function(argFoo) {
                    _fun113029: for(var _fun113029_ip = 0; ; ) switch(_fun113029_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.chunks;
                        mike = _closure1_slot20;
                        entity = undefined;
                        golf = mike.bind(entity)(zulu);
                        report = golf.bind(entity)();
                        tango = report.done;
                        oscar = report;
                        report = false;
                        zulu = false;
                        if(tango) { _fun113029_ip = 164; continue _fun113029 }
 45:
                        verify = _closure1_slot20;
                        tango = oscar.value;
                        tango = tango.members;
                        romeo = verify.bind(entity)(tango);
                        verify = romeo.bind(entity)();
                        tango = verify.done;
                        yankee = report;
                        offset = verify;
                        verify = yankee;
                        if(tango) { _fun113029_ip = 143; continue _fun113029 }
 86:
                        tango = offset.value;
                        backup = _closure3_slot0;
                        foxtrot = backup.updateUser;
                        tango = tango.user;
                        tango = tango.id;
                        foxtrot = foxtrot.bind(backup)(tango);
                        if(foxtrot) { _fun113029_ip = 122; continue _fun113029 }
 119:
                        foxtrot = yankee;
 122:
                        backup = romeo.bind(entity)();
                        tango = backup.done;
                        yankee = foxtrot;
                        offset = backup;
                        verify = yankee;
                        if(!tango) { _fun113029_ip = 86; continue _fun113029 }
 143:
                        offset = golf.bind(entity)();
                        tango = offset.done;
                        report = verify;
                        oscar = offset;
                        zulu = report;
                        if(!tango) { _fun113029_ip = 45; continue _fun113029 }
 164:
                        if(!zulu) { _fun113029_ip = 197; continue _fun113029 }
 167:
                        zulu = _closure3_slot0;
                        tango = zulu.onUpdate;
                        zulu = null;
                        if(!(zulu != tango)) { _fun113029_ip = 197; continue _fun113029 }
 183:
                        zulu = tango.call;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 197:
                        return entity;
                    }
                };
                tango['handleGuildMembersChunkBatch'] = golf;
                golf = function() {
                    _fun113030: for(var _fun113030_ip = 0; ; ) switch(_fun113030_ip) {
 0:
                        mike = arguments[0];
                        entity = undefined;
                        if(!(mike === entity)) { _fun113030_ip = 11; continue _fun113030 }
 9:
                        mike = false;
 11:
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 13;
                        tango = oscar[tango];
                        tango = report.bind(entity)(tango);
                        tango = tango.shouldUseCache;
                        if(tango) { _fun113030_ip = 123; continue _fun113030 }
 43:
                        tango = _closure1_slot10;
                        zulu = tango.getUserAffinities;
                        report = zulu.bind(tango)();
                        tango = report.forEach;
                        zulu = function(argFoo, argBar) {
                            _fun113031: for(var _fun113031_ip = 0; ; ) switch(_fun113031_ip) {
 0:
                                entity = argFoo;
                                zulu = entity.user_id;
                                tango = entity.affinity;
                                mike = _closure3_slot0;
                                mike = mike.affinities;
                                mike[zulu] = tango;
                                tango = _closure1_slot15;
                                mike = argBar;
                                if(!(mike < tango)) { _fun113031_ip = 61; continue _fun113031 }
 46:
                                mike = _closure3_slot0;
                                entity = mike.updateUser;
                                entity = entity.bind(mike)(zulu);
 61:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zulu = tango.bind(report)(zulu);
                        tango = undefined;
                        if(mike) { _fun113030_ip = 103; continue _fun113030 }
 81:
                        zulu = _closure3_slot0;
                        zulu = zulu.onUpdate;
                        report = null;
                        mike = report == zulu;
                        tango = zulu;
 103:
                        if(mike) { _fun113030_ip = 123; continue _fun113030 }
 106:
                        zulu = tango.call;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 123:
                        return entity;
                    }
                };
                tango['handleUserAffinitiesUpdate'] = golf;
                tango['withGameFriends'] = report;
                report = _closure1_slot1;
                zulu = 13;
                zulu = oscar[zulu];
                zulu = report.bind(entity)(zulu);
                zulu = zulu.shouldUseCache;
                if(zulu) { _fun113019_ip = 319; continue _fun113019 }
 307:
                zulu = tango.initializeUsersFromStores;
                zulu = zulu.bind(tango)();
                _fun113019_ip = 348; continue _fun113019;
 319:
                zulu = tango.initializeUsersFromCache;
                tango = zulu.bind(tango)();
                zulu = tango.then;
                mike = function() {
                    _fun113032: for(var _fun113032_ip = 0; ; ) switch(_fun113032_ip) {
 0:
                        zulu = _closure3_slot1;
                        entity = null;
                        tango = entity == zulu;
                        zulu = undefined;
                        entity = undefined;
                        if(tango) { _fun113032_ip = 28; continue _fun113032 }
 20:
                        mike = _closure3_slot1;
                        entity = mike.bind(zulu)();
 28:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 348:
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'subscribe';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: subscribe
            _fun113033: for(var _fun113033_ip = 0; ; ) switch(_fun113033_ip) {
 0:
                report = arguments[1];
                mike = this;
                var _closure3_slot0 = mike;
                entity = undefined;
                if(!(report === entity)) { _fun113033_ip = 20; continue _fun113033 }
 18:
                report = true;
 20:
                zulu = argFoo;
                mike['onUpdate'] = zulu;
                zulu = null;
                if(!report) { _fun113033_ip = 79; continue _fun113033 }
 34:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                report = 14;
                report = golf[report];
                golf = oscar.bind(entity)(report);
                oscar = golf.getSearchContext;
                report = function(argFoo) {
                    _fun113034: for(var _fun113034_ip = 0; ; ) switch(_fun113034_ip) {
 0:
                        entity = argFoo;
                        report = entity.query;
                        golf = entity.results;
                        entity = undefined;
                        var _closure4_slot0 = entity;
                        tango = _closure3_slot0;
                        tango = tango.currentQuery;
                        if(!(tango === report)) { _fun113034_ip = 107; continue _fun113034 }
 39:
                        tango = new Array(0);
                        _closure4_slot0 = tango;
                        oscar = golf.reduce;
                        report = function(argFoo, argBar) {
                            _fun113035: for(var _fun113035_ip = 0; ; ) switch(_fun113035_ip) {
 0:
                                entity = argFoo;
                                mike = argBar;
                                oscar = _closure1_slot1;
                                report = _closure1_slot2;
                                zulu = 13;
                                report = report[zulu];
                                zulu = undefined;
                                zulu = oscar.bind(zulu)(report);
                                zulu = zulu.shouldUseCache;
                                if(zulu) { _fun113035_ip = 181; continue _fun113035 }
 43:
                                oscar = _closure1_slot16;
                                report = oscar.has;
                                options = _closure1_slot12;
                                golf = options.getRelationshipType;
                                zulu = mike.id;
                                zulu = golf.bind(options)(zulu);
                                zulu = report.bind(oscar)(zulu);
                                if(zulu) { _fun113035_ip = 179; continue _fun113035 }
 80:
                                report = _closure3_slot0;
                                report = report.withGameFriends;
                                if(!report) { _fun113035_ip = 127; continue _fun113035 }
 96:
                                oscar = _closure1_slot9;
                                report = oscar.getGameFriendsForUser;
                                tango = mike.id;
                                tango = report.bind(oscar)(tango);
                                report = tango.length;
                                tango = 0;
                                if(!(!(report > tango))) { _fun113035_ip = 177; continue _fun113035 }
 127:
                                tango = _closure3_slot0;
                                zulu = tango.getItem;
                                mike = mike.id;
                                report = zulu.bind(tango)(mike);
                                zulu = null;
                                mike = entity;
                                if(!(zulu != report)) { _fun113035_ip = 175; continue _fun113035 }
 156:
                                tango = _closure4_slot0;
                                zulu = tango.push;
                                zulu = zulu.bind(tango)(report);
                                mike = true;
 175:
                                return mike;
 177:
                                return entity;
 179:
                                return entity;
 181:
                                entity = false;
                                return entity;
                            }
                        };
                        zulu = false;
                        zulu = oscar.bind(golf)(report, zulu);
                        if(!zulu) { _fun113034_ip = 107; continue _fun113034 }
 71:
                        zulu = _closure3_slot0;
                        zulu['filteredGuildMembers'] = tango;
                        tango = zulu.onUpdate;
                        zulu = null;
                        if(!(zulu != tango)) { _fun113034_ip = 107; continue _fun113034 }
 93:
                        zulu = tango.call;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
 107:
                        return entity;
                    }
                };
                tango = 20;
                zulu = oscar.bind(golf)(report, tango);
 79:
                mike['searchContext'] = zulu;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 15;
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handlePostConnectionOpen;
                golf = 'POST_CONNECTION_OPEN';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_REMOVE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_UPDATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleGameRelationshipAdd;
                golf = 'GAME_RELATIONSHIP_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleGameRelationshipRemove;
                golf = 'GAME_RELATIONSHIP_REMOVE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleFriendSuggestionCreate;
                golf = 'FRIEND_SUGGESTION_CREATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleFriendSuggestionDelete;
                golf = 'FRIEND_SUGGESTION_DELETE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_UPDATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.subscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_REMOVE';
                golf = verify.bind(offset)(golf, options);
                tango = oscar[tango];
                golf = report.bind(entity)(tango);
                oscar = golf.subscribe;
                report = mike.handleGuildMembersChunkBatch;
                tango = 'GUILD_MEMBERS_CHUNK_BATCH';
                tango = oscar.bind(golf)(tango, report);
                tango = _closure1_slot10;
                zulu = tango.addChangeListener;
                mike = mike.handleUserAffinitiesUpdate;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(10);
        mike[0] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        oscar = function() { // Original name: unsubscribe
            _fun113036: for(var _fun113036_ip = 0; ; ) switch(_fun113036_ip) {
 0:
                mike = this;
                entity = undefined;
                mike['onUpdate'] = entity;
                tango = mike.searchContext;
                zulu = null;
                if(!(zulu != tango)) { _fun113036_ip = 33; continue _fun113036 }
 23:
                zulu = tango.destroy;
                zulu = zulu.bind(tango)();
 33:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                tango = 15;
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handlePostConnectionOpen;
                golf = 'POST_CONNECTION_OPEN';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_REMOVE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleRelationship;
                golf = 'RELATIONSHIP_UPDATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleGameRelationshipAdd;
                golf = 'GAME_RELATIONSHIP_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleGameRelationshipRemove;
                golf = 'GAME_RELATIONSHIP_REMOVE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleFriendSuggestionCreate;
                golf = 'FRIEND_SUGGESTION_CREATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleFriendSuggestionDelete;
                golf = 'FRIEND_SUGGESTION_DELETE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_ADD';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_UPDATE';
                golf = verify.bind(offset)(golf, options);
                golf = oscar[tango];
                offset = report.bind(entity)(golf);
                verify = offset.unsubscribe;
                options = mike.handleGuildMember;
                golf = 'GUILD_MEMBER_REMOVE';
                golf = verify.bind(offset)(golf, options);
                tango = oscar[tango];
                golf = report.bind(entity)(tango);
                oscar = golf.unsubscribe;
                report = mike.handleGuildMembersChunkBatch;
                tango = 'GUILD_MEMBERS_CHUNK_BATCH';
                tango = oscar.bind(golf)(tango, report);
                tango = _closure1_slot10;
                zulu = tango.removeChangeListener;
                mike = mike.handleUserAffinitiesUpdate;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'fetch';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: fetch
            _fun113037: for(var _fun113037_ip = 0; ; ) switch(_fun113037_ip) {
 0:
                mike = this;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 16;
                tango = tango[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.cleanString;
                tango = argFoo;
                golf = report.bind(oscar)(tango);
                tango = '';
                if(!(tango !== golf)) { _fun113037_ip = 132; continue _fun113037 }
 50:
                tango = argBar;
                if(!tango) { _fun113037_ip = 90; continue _fun113037 }
 56:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 17;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.requestMembers;
                zulu = null;
                zulu = tango.bind(report)(zulu, golf);
 90:
                oscar = mike.searchContext;
                zulu = null;
                if(!(zulu != oscar)) { _fun113037_ip = 154; continue _fun113037 }
 102:
                report = oscar.setQuery;
                options = mike.affinities;
                verify = new Array(0);
                romeo = oscar;
                yankee = golf;
                offset = undefined;
                zulu = romeo[report](yankee, offset, verify, options, golf);
                _fun113037_ip = 154; continue _fun113037;
 132:
                zulu = mike.searchContext;
                mike = null;
                if(!(mike != zulu)) { _fun113037_ip = 154; continue _fun113037 }
 144:
                mike = zulu.clearQuery;
                mike = mike.bind(zulu)();
 154:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'filter';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: filter
            _fun113038: for(var _fun113038_ip = 0; ; ) switch(_fun113038_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 16;
                entity = oscar[entity];
                offset = undefined;
                oscar = report.bind(offset)(entity);
                report = oscar.cleanString;
                entity = argFoo;
                entity = report.bind(oscar)(entity);
                var _closure3_slot1 = entity;
                report = zulu.currentQuery;
                if(!(report !== entity)) { _fun113038_ip = 145; continue _fun113038 }
 62:
                report = '';
                if(!(report !== entity)) { _fun113038_ip = 125; continue _fun113038 }
 70:
                report = new Array(0);
                zulu['filteredFriends'] = report;
                golf = zulu.indexMap;
                oscar = golf.values;
                report = _closure1_slot17;
                report = report.Friends;
                golf = oscar.bind(golf)(report);
                oscar = golf.forEach;
                report = function(argFoo) {
                    _fun113039: for(var _fun113039_ip = 0; ; ) switch(_fun113039_ip) {
 0:
                        report = argFoo;
                        oscar = _closure1_slot22;
                        tango = report.names;
                        mike = _closure3_slot1;
                        entity = undefined;
                        oscar = oscar.bind(entity)(tango, mike);
                        mike = null;
                        if(!(mike != oscar)) { _fun113039_ip = 81; continue _fun113039 }
 36:
                        zulu = _closure3_slot0;
                        tango = zulu.filteredFriends;
                        if(!(mike != tango)) { _fun113039_ip = 81; continue _fun113039 }
 50:
                        zulu = tango.push;
                        mike = {};
                        options = mike;
                        golf = report;
                        report = copyDataProperties(options, golf);
                        report = 'firstMatch';
                        mike[report] = oscar;
                        mike = zulu.bind(tango)(mike);
 81:
                        return entity;
                    }
                };
                report = oscar.bind(golf)(report);
                _fun113038_ip = 139; continue _fun113038;
 125:
                report = null;
                zulu['filteredFriends'] = report;
                zulu['filteredGuildMembers'] = report;
 139:
                zulu['currentQuery'] = entity;
 145:
                report = zulu.currentQuery;
                entity = '';
                if(!(entity !== report)) { _fun113038_ip = 347; continue _fun113038 }
 162:
                entity = {};
                report = _closure1_slot17;
                options = report.Friends;
                golf = _closure1_slot1;
                yankee = _closure1_slot2;
                oscar = 18;
                report = yankee[oscar];
                backup = golf.bind(offset)(report);
                foxtrot = backup.sortBy;
                report = yankee[oscar];
                kilo = golf.bind(offset)(report);
                romeo = kilo.uniqBy;
                verify = zulu.filteredFriends;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    entity = entity.id;
                    return entity;
                };
                romeo = romeo.bind(kilo)(verify, report);
                verify = function(argFoo) {
                    entity = argFoo;
                    tango = entity.names;
                    zulu = _closure1_slot23;
                    mike = _closure3_slot1;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                };
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.affinity;
                    entity = -entity;
                    return entity;
                };
                report = foxtrot.bind(backup)(romeo, verify, report);
                entity[options] = report;
                report = _closure1_slot17;
                report = report.GuildMembers;
                options = yankee[oscar];
                verify = golf.bind(offset)(options);
                options = verify.sortBy;
                oscar = yankee[oscar];
                yankee = golf.bind(offset)(oscar);
                offset = yankee.uniqBy;
                golf = zulu.filteredGuildMembers;
                oscar = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    entity = entity.id;
                    return entity;
                };
                golf = offset.bind(yankee)(golf, oscar);
                oscar = function(argFoo) {
                    entity = argFoo;
                    tango = entity.names;
                    zulu = _closure1_slot23;
                    mike = _closure3_slot1;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
                    return entity;
                };
                tango = function(argFoo) {
                    entity = argFoo;
                    entity = entity.affinity;
                    entity = -entity;
                    return entity;
                };
                tango = options.bind(verify)(golf, oscar, tango);
                entity[report] = tango;
                return entity;
 347:
                entity = {};
                tango = zulu.indexMap;
                zulu = tango.indexes;
                output = zulu.bind(tango)();
                result = entity;
                zulu = copyDataProperties(result, output);
                mike = _closure1_slot17;
                mike = mike.Friends;
                mike = delete entity[mike];
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'initializeUsersFromStores';
        entity['key'] = oscar;
        oscar = function() { // Original name: initializeUsersFromStores
            _fun113046: for(var _fun113046_ip = 0; ; ) switch(_fun113046_ip) {
 0:
                tango = this;
                var _closure3_slot0 = tango;
                verify = _closure1_slot12;
                zulu = verify.getRelationships;
                golf = zulu.bind(verify)();
                for(zulu in golf)
 34:
                {
 43:
                    offset = zulu;
                    verify = tango.updateUser;
                    verify = verify.bind(tango)(offset);
                    _fun113046_ip = 34; continue _fun113046;
                }
 59:
                zulu = tango.withGameFriends;
                if(!zulu) { _fun113046_ip = 108; continue _fun113046 }
 68:
                report = _closure1_slot9;
                zulu = report.getGameRelationships;
                report = zulu.bind(report)();
                zulu = report.values;
                report = zulu.bind(report)();
                zulu = report.forEach;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.updateUser;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = zulu.bind(report)(mike);
 108:
                zulu = _closure1_slot20;
                mike = _closure1_slot8;
                entity = mike.getSuggestions;
                mike = entity.bind(mike)();
                entity = undefined;
                report = zulu.bind(entity)(mike);
                zulu = report.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun113046_ip = 186; continue _fun113046 }
 145:
                mike = zulu.value;
                oscar = tango.updateUser;
                mike = mike.user;
                mike = mike.id;
                mike = oscar.bind(tango)(mike);
                oscar = report.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun113046_ip = 145; continue _fun113046 }
 186:
                zulu = tango.handleUserAffinitiesUpdate;
                mike = true;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'initializeUsersFromCache';
        entity['key'] = oscar;
        oscar = function() { // Original name: initializeUsersFromCache
            mike = this;
            var _closure3_slot0 = mike;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 13;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            mike = zulu.getAll;
            zulu = mike.bind(zulu)();
            mike = zulu.then;
            entity = function(argFoo) {
                _fun113049: for(var _fun113049_ip = 0; ; ) switch(_fun113049_ip) {
 0:
                    zulu = _closure1_slot20;
                    entity = undefined;
                    mike = argFoo;
                    report = zulu.bind(entity)(mike);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun113049_ip = 69; continue _fun113049 }
 32:
                    golf = zulu.value;
                    oscar = _closure3_slot0;
                    mike = oscar.updateUserCached;
                    mike = mike.bind(oscar)(golf);
                    oscar = report.bind(entity)();
                    mike = oscar.done;
                    zulu = oscar;
                    if(!mike) { _fun113049_ip = 32; continue _fun113049 }
 69:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'updateUser';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: updateUser
            _fun113050: for(var _fun113050_ip = 0; ; ) switch(_fun113050_ip) {
 0:
                tango = argFoo;
                mike = this;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 13;
                zulu = oscar[zulu];
                golf = undefined;
                zulu = report.bind(golf)(zulu);
                zulu = zulu.shouldUseCache;
                if(zulu) { _fun113050_ip = 198; continue _fun113050 }
 43:
                zulu = mike.withGameFriends;
                if(!zulu) { _fun113050_ip = 78; continue _fun113050 }
 52:
                report = _closure1_slot9;
                zulu = report.getGameFriendsForUser;
                zulu = zulu.bind(report)(tango);
                report = zulu.length;
                zulu = 0;
                if(!(!(report > zulu))) { _fun113050_ip = 144; continue _fun113050 }
 78:
                report = _closure1_slot16;
                zulu = report.has;
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                entity = 16;
                entity = options[entity];
                oscar = oscar.bind(golf)(entity);
                entity = oscar.getRelationshipType;
                entity = entity.bind(oscar)(tango);
                entity = zulu.bind(report)(entity);
                if(entity) { _fun113050_ip = 144; continue _fun113050 }
 126:
                zulu = mike.indexMap;
                entity = zulu.delete;
                entity = entity.bind(zulu)(tango);
                return entity;
 144:
                entity = mike.getItem;
                report = entity.bind(mike)(tango);
                entity = null;
                if(!(entity != report)) { _fun113050_ip = 180; continue _fun113050 }
 161:
                zulu = mike.indexMap;
                entity = zulu.set;
                entity = entity.bind(zulu)(tango, report);
                _fun113050_ip = 196; continue _fun113050;
 180:
                zulu = mike.indexMap;
                mike = zulu.delete;
                entity = mike.bind(zulu)(tango);
 196:
                return entity;
 198:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getItem';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: getItem
            _fun113051: for(var _fun113051_ip = 0; ; ) switch(_fun113051_ip) {
 0:
                oscar = argFoo;
                options = this;
                zulu = _closure1_slot13;
                entity = zulu.getUser;
                zulu = entity.bind(zulu)(oscar);
                entity = null;
                if(!(entity != zulu)) { _fun113051_ip = 282; continue _fun113051 }
 33:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                offset = 16;
                tango = tango[offset];
                verify = undefined;
                report = report.bind(verify)(tango);
                tango = report.getNames;
                tango = tango.bind(report)(zulu);
                golf = tango.nick;
                romeo = tango.names;
                report = {};
                report['user'] = zulu;
                report['names'] = romeo;
                yankee = options.affinities;
                tango = zulu.id;
                foxtrot = yankee[tango];
                backup = entity != foxtrot;
                tango = 0;
                yankee = 0;
                if(!backup) { _fun113051_ip = 116; continue _fun113051 }
 113:
                yankee = foxtrot;
 116:
                report['affinity'] = yankee;
                foxtrot = options.currentQuery;
                yankee = '';
                if(!(yankee !== foxtrot)) { _fun113051_ip = 151; continue _fun113051 }
 135:
                yankee = _closure1_slot22;
                options = options.currentQuery;
                golf = yankee.bind(verify)(romeo, options);
 151:
                report['firstMatch'] = golf;
                options = _closure1_slot0;
                golf = _closure1_slot2;
                golf = golf[offset];
                options = options.bind(verify)(golf);
                golf = options.getRelationshipType;
                zulu = zulu.id;
                golf = golf.bind(options)(zulu);
                zulu = _closure1_slot14;
                zulu = zulu.FRIEND;
                if(!(golf !== zulu)) { _fun113051_ip = 227; continue _fun113051 }
 203:
                zulu = _closure1_slot9;
                mike = zulu.getGameFriendsForUser;
                zulu = mike.bind(zulu)(oscar);
                mike = zulu.length;
                if(!(!(mike > tango))) { _fun113051_ip = 250; continue _fun113051 }
 227:
                mike = {};
                sizing = mike;
                kilo = report;
                oscar = copyDataProperties(sizing, kilo);
                oscar = 'type';
                mike[oscar] = golf;
                return mike;
 250:
                mike = {};
                sizing = mike;
                kilo = report;
                report = copyDataProperties(sizing, kilo);
                zulu = zulu[tango];
                tango = zulu.type;
                zulu = 'type';
                mike[zulu] = tango;
                return mike;
 282:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'updateUserCached';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: updateUserCached
            _fun113052: for(var _fun113052_ip = 0; ; ) switch(_fun113052_ip) {
 0:
                mike = argFoo;
                zulu = this;
                report = _closure1_slot16;
                tango = report.has;
                entity = mike.type;
                entity = tango.bind(report)(entity);
                if(entity) { _fun113052_ip = 54; continue _fun113052 }
 31:
                report = zulu.indexMap;
                tango = report.delete;
                entity = mike.id;
                entity = tango.bind(report)(entity);
                return entity;
 54:
                entity = zulu.getItemCached;
                oscar = entity.bind(zulu)(mike);
                entity = null;
                if(!(entity != oscar)) { _fun113052_ip = 97; continue _fun113052 }
 73:
                report = zulu.indexMap;
                tango = report.set;
                entity = mike.id;
                entity = tango.bind(report)(entity, oscar);
                _fun113052_ip = 118; continue _fun113052;
 97:
                tango = zulu.indexMap;
                zulu = tango.delete;
                mike = mike.id;
                entity = zulu.bind(tango)(mike);
 118:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getItemCached';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: getItemCached
            _fun113053: for(var _fun113053_ip = 0; ; ) switch(_fun113053_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = null;
                mike = entity == report;
                if(mike) { _fun113053_ip = 135; continue _fun113053 }
 15:
                mike = {};
                zulu = report.type;
                mike['type'] = zulu;
                options = _closure1_slot11;
                offset = report.user;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                yankee = golf;
                zulu = new yankee[options](offset, verify);
                zulu = zulu instanceof Object ? zulu : golf;
                mike['user'] = zulu;
                zulu = report.names;
                mike['names'] = zulu;
                zulu = report.affinity;
                mike['affinity'] = zulu;
                golf = tango.currentQuery;
                zulu = '';
                if(!(zulu === golf)) { _fun113053_ip = 104; continue _fun113053 }
 96:
                zulu = report.nick;
                _fun113053_ip = 127; continue _fun113053;
 104:
                golf = _closure1_slot22;
                oscar = report.names;
                report = tango.currentQuery;
                tango = undefined;
                zulu = golf.bind(tango)(oscar, report);
 127:
                mike['firstMatch'] = zulu;
                entity = mike;
 135:
                return entity;
            }
        };
        entity['value'] = report;
        mike[9] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot18 = tango;
    oscar = 21;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: useUserListData
        _fun113054: for(var _fun113054_ip = 0; ; ) switch(_fun113054_ip) {
 0:
            zulu = argFoo;
            mike = zulu.query;
            var _closure2_slot0 = mike;
            kilo = zulu.withGuildMembers;
            var _closure2_slot1 = kilo;
            backup = zulu.withAffinitySuggestions;
            var _closure2_slot2 = backup;
            foxtrot = zulu.withFriends;
            var _closure2_slot3 = foxtrot;
            romeo = zulu.withGameFriends;
            var _closure2_slot4 = romeo;
            yankee = zulu.withFriendSuggestions;
            var _closure2_slot5 = yankee;
            offset = zulu.withFriendRequests;
            var _closure2_slot6 = offset;
            verify = zulu.withFriendRequestsIncoming;
            var _closure2_slot7 = verify;
            options = zulu.withFriendRequestsOutgoing;
            var _closure2_slot8 = options;
            golf = zulu.withFriendRequestsSpam;
            var _closure2_slot9 = golf;
            oscar = zulu.excludeCurrentUser;
            update = undefined;
            if(!(oscar === update)) { _fun113054_ip = 118; continue _fun113054 }
 116:
            oscar = false;
 118:
            var _closure2_slot10 = oscar;
            report = zulu.affinitySuggestionsLimit;
            if(!(report === update)) { _fun113054_ip = 139; continue _fun113054 }
 132:
            report = _closure1_slot15;
 139:
            var _closure2_slot11 = report;
            var _closure2_slot12 = update;
            var _closure2_slot13 = update;
            var _closure2_slot14 = update;
            var _closure2_slot15 = update;
            tango = _closure1_slot7;
            output = tango.useState;
            sizing = 0;
            echo = output.bind(tango)(sizing);
            result = _closure1_slot6;
            output = 2;
            result = result.bind(update)(echo, output);
            output = result[sizing];
            _closure2_slot12 = output;
            echo = 1;
            result = result[echo];
            _closure2_slot13 = result;
            control = tango.useMemo;
            source = new Array(2);
            source[0] = result;
            source[1] = romeo;
            result = function() {
                tango = _closure1_slot18;
                report = _closure2_slot4;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                oscar = function() {
                    zulu = _closure2_slot13;
                    entity = global;
                    mike = entity.Date;
                    entity = mike.now;
                    mike = entity.bind(mike)();
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                golf = mike;
                entity = new golf[tango](oscar, report, tango);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            result = control.bind(tango)(result, source);
            _closure2_slot14 = result;
            control = tango.useMemo;
            source = new Array(3);
            source[0] = output;
            source[1] = result;
            source[2] = mike;
            output = function() {
                tango = _closure2_slot14;
                zulu = tango.filter;
                entity = _closure2_slot0;
                zulu = zulu.bind(tango)(entity);
                entity = new Array(2);
                entity[0] = zulu;
                mike = _closure2_slot12;
                entity[1] = mike;
                return entity;
            };
            output = control.bind(tango)(output, source);
            zulu = _closure1_slot6;
            zulu = zulu.bind(update)(output, echo);
            sizing = zulu[sizing];
            _closure2_slot15 = sizing;
            echo = tango.useEffect;
            output = new Array(2);
            output[0] = result;
            output[1] = kilo;
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 18;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                tango = report.debounce;
                zulu = function() {
                    zulu = _closure2_slot13;
                    entity = global;
                    mike = entity.Date;
                    entity = mike.now;
                    mike = entity.bind(mike)();
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = 0;
                mike = tango.bind(report)(zulu, mike);
                var _closure3_slot0 = mike;
                report = _closure2_slot14;
                tango = report.subscribe;
                zulu = _closure2_slot1;
                mike = function() {
                    mike = _closure3_slot0;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = tango.bind(report)(mike, zulu);
                entity = function() {
                    mike = _closure2_slot14;
                    entity = mike.unsubscribe;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            };
            zulu = echo.bind(tango)(zulu, output);
            output = tango.useEffect;
            zulu = new Array(3);
            zulu[0] = result;
            zulu[1] = mike;
            zulu[2] = kilo;
            mike = function() {
                tango = _closure2_slot14;
                zulu = tango.fetch;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            mike = output.bind(tango)(mike, zulu);
            output = tango.useEffect;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchUserAffinities;
                mike = mike.bind(zulu)();
                return entity;
            };
            mike = new Array(0);
            mike = output.bind(tango)(zulu, mike);
            zulu = tango.useMemo;
            mike = new Array(12);
            mike[0] = sizing;
            mike[1] = kilo;
            mike[2] = backup;
            mike[3] = foxtrot;
            mike[4] = romeo;
            mike[5] = yankee;
            mike[6] = offset;
            mike[7] = verify;
            mike[8] = options;
            mike[9] = golf;
            mike[10] = oscar;
            mike[11] = report;
            entity = function() {
                zulu = _closure1_slot24;
                mike = {};
                tango = _closure2_slot15;
                mike['data'] = tango;
                tango = _closure2_slot1;
                mike['withGuildMembers'] = tango;
                tango = _closure2_slot2;
                mike['withAffinitySuggestions'] = tango;
                tango = _closure2_slot3;
                mike['withFriends'] = tango;
                tango = _closure2_slot4;
                mike['withGameFriends'] = tango;
                tango = _closure2_slot5;
                mike['withFriendSuggestions'] = tango;
                tango = _closure2_slot6;
                mike['withFriendRequests'] = tango;
                tango = _closure2_slot7;
                mike['withFriendRequestsIncoming'] = tango;
                tango = _closure2_slot8;
                mike['withFriendRequestsOutgoing'] = tango;
                tango = _closure2_slot9;
                mike['withFriendRequestsSpam'] = tango;
                tango = _closure2_slot10;
                mike['excludeCurrentUser'] = tango;
                entity = _closure2_slot11;
                mike['affinitySuggestionsLimit'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['UserSearch'] = tango;
    zulu['parseUserSearchResults'] = mike;
    return entity;
})();