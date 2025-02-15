// app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
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
            verify = _closure1_slot14;
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
            golf = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: getFirstGuildIncidentId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            kilo = argFoo;
            mike = _closure1_slot8;
            entity = mike.getCurrentUser;
            foxtrot = entity.bind(mike)();
            mike = _closure1_slot9;
            entity = mike.getIncidentsByGuild;
            romeo = entity.bind(mike)();
            mike = _closure1_slot13;
            zulu = _closure1_slot1;
            tango = _closure1_slot3;
            entity = 9;
            entity = tango[entity];
            yankee = undefined;
            zulu = zulu.bind(yankee)(entity);
            entity = zulu.keys;
            tango = entity.bind(zulu)(romeo);
            zulu = tango.map;
            entity = function(argFoo) {
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            offset = mike.bind(yankee)(entity);
            zulu = offset.bind(yankee)();
            mike = zulu.done;
            verify = 11;
            options = 12;
            golf = false;
            oscar = 10;
            entity = null;
            report = zulu;
            tango = undefined;
            if(mike) { _fun00008_ip = 366; continue _fun00007 }
 126:
            mike = report.value;
            if(!(entity != mike)) { _fun00008_ip = 339; continue _fun00007 }
 138:
            zulu = mike.id;
            sizing = romeo[zulu];
            tango = sizing;
            if(!(entity != sizing)) { _fun00008_ip = 339; continue _fun00007 }
 157:
            output = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            output = output.bind(yankee)(zulu);
            zulu = output.hasDetectedActivity;
            zulu = zulu.bind(output)(sizing);
            if(zulu) { _fun00008_ip = 222; continue _fun00007 }
 188:
            output = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            output = output.bind(yankee)(zulu);
            zulu = output.isUnderLockdown;
            zulu = zulu.bind(output)(sizing);
            tango = sizing;
            if(!zulu) { _fun00008_ip = 339; continue _fun00007 }
 222:
            output = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            output = output.bind(yankee)(zulu);
            zulu = output.isUnderLockdown;
            zulu = zulu.bind(output)(sizing);
            if(!zulu) { _fun00008_ip = 265; continue _fun00007 }
 253:
            zulu = mike.id;
            tango = sizing;
            if(!(zulu === kilo)) { _fun00008_ip = 339; continue _fun00007 }
 265:
            output = _closure1_slot2;
            zulu = _closure1_slot3;
            result = zulu[verify];
            echo = output.bind(yankee)(result);
            result = echo.hasAny;
            zulu = zulu[options];
            update = output.bind(yankee)(zulu);
            output = update.computePermissions;
            zulu = {};
            zulu['user'] = foxtrot;
            zulu['context'] = mike;
            zulu['checkElevated'] = golf;
            output = output.bind(update)(zulu);
            zulu = _closure1_slot10;
            zulu = result.bind(echo)(output, zulu);
            tango = sizing;
            if(zulu) { _fun00008_ip = 359; continue _fun00007 }
 339:
            sizing = offset.bind(yankee)();
            zulu = sizing.done;
            report = sizing;
            if(zulu) { _fun00008_ip = 366; continue _fun00007 }
 354:
            _fun00008_ip = 126; continue _fun00007;
 359:
            mike = mike.id;
            return mike;
 366:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IncidentAlertModeratorPermissions;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot12 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_antiraid/GuildAntiRaidHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useFirstGuildIncidentId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot3;
            zulu = 8;
            mike = report[zulu];
            foxtrot = undefined;
            options = tango.bind(foxtrot)(mike);
            golf = options.useStateFromStores;
            mike = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = golf.bind(options)(oscar, mike);
            mike = report[zulu];
            options = tango.bind(foxtrot)(mike);
            golf = options.useStateFromStores;
            mike = _closure1_slot9;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                mike = _closure1_slot9;
                entity = mike.getIncidentsByGuild;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = golf.bind(options)(oscar, mike);
            var _closure2_slot0 = yankee;
            mike = _closure1_slot13;
            zulu = report[zulu];
            report = tango.bind(foxtrot)(zulu);
            tango = report.useStateFromStoresArray;
            oscar = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.keys;
                entity = _closure2_slot0;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.map;
                entity = function(argFoo) {
                    zulu = _closure1_slot5;
                    mike = zulu.getGuild;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity);
            offset = mike.bind(foxtrot)(entity);
            zulu = offset.bind(foxtrot)();
            mike = zulu.done;
            verify = 11;
            options = 12;
            golf = false;
            oscar = 10;
            entity = null;
            report = zulu;
            tango = undefined;
            if(mike) { _fun00010_ip = 379; continue _fun00009 }
 182:
            mike = report.value;
            if(!(entity != mike)) { _fun00010_ip = 352; continue _fun00009 }
 194:
            zulu = mike.id;
            kilo = yankee[zulu];
            tango = kilo;
            if(!(entity != tango)) { _fun00010_ip = 352; continue _fun00009 }
 213:
            sizing = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            sizing = sizing.bind(foxtrot)(zulu);
            zulu = sizing.hasDetectedActivity;
            zulu = zulu.bind(sizing)(kilo);
            if(zulu) { _fun00010_ip = 278; continue _fun00009 }
 244:
            sizing = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            sizing = sizing.bind(foxtrot)(zulu);
            zulu = sizing.isUnderLockdown;
            zulu = zulu.bind(sizing)(kilo);
            tango = kilo;
            if(!zulu) { _fun00010_ip = 352; continue _fun00009 }
 278:
            sizing = _closure1_slot2;
            zulu = _closure1_slot3;
            output = zulu[verify];
            result = sizing.bind(foxtrot)(output);
            output = result.hasAny;
            zulu = zulu[options];
            echo = sizing.bind(foxtrot)(zulu);
            sizing = echo.computePermissions;
            zulu = {};
            zulu['user'] = romeo;
            zulu['context'] = mike;
            zulu['checkElevated'] = golf;
            sizing = sizing.bind(echo)(zulu);
            zulu = _closure1_slot10;
            zulu = output.bind(result)(sizing, zulu);
            tango = kilo;
            if(zulu) { _fun00010_ip = 372; continue _fun00009 }
 352:
            kilo = offset.bind(foxtrot)();
            zulu = kilo.done;
            report = kilo;
            if(zulu) { _fun00010_ip = 379; continue _fun00009 }
 367:
            _fun00010_ip = 182; continue _fun00009;
 372:
            mike = mike.id;
            return mike;
 379:
            return entity;
        }
    };
    zulu['useFirstGuildIncidentId'] = tango;
    tango = function(argFoo) { // Original name: useGuildIncidentsState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            report = _closure1_slot0;
            golf = _closure1_slot3;
            tango = 8;
            mike = golf[tango];
            oscar = undefined;
            offset = report.bind(oscar)(mike);
            verify = offset.useStateFromStores;
            mike = _closure1_slot5;
            options = new Array(2);
            options[0] = mike;
            mike = _closure1_slot6;
            options[1] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tango = _closure1_slot5;
                    zulu = tango.getGuild;
                    entity = _closure2_slot0;
                    report = zulu.bind(tango)(entity);
                    entity = null;
                    if(!(entity != report)) { _fun00014_ip = 92; continue _fun00013 }
 30:
                    tango = _closure1_slot6;
                    zulu = tango.getGuildPermissions;
                    report = zulu.bind(tango)(report);
                    entity = entity != report;
                    if(!entity) { _fun00014_ip = 90; continue _fun00013 }
 52:
                    oscar = _closure1_slot2;
                    tango = _closure1_slot3;
                    zulu = 11;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.hasAny;
                    mike = _closure1_slot10;
                    entity = zulu.bind(tango)(report, mike);
 90:
                    return entity;
 92:
                    entity = false;
                    return entity;
                }
            };
            mike = verify.bind(offset)(options, mike);
            tango = golf[tango];
            golf = report.bind(oscar)(tango);
            report = golf.useStateFromStores;
            options = _closure1_slot9;
            tango = new Array(1);
            tango[0] = options;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00016_ip = 38; continue _fun00015 }
 16:
                    tango = _closure1_slot9;
                    zulu = tango.getGuildIncident;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            report = report.bind(golf)(tango, entity);
            entity = {};
            entity['shouldShowIncidentActions'] = mike;
            entity['incidentData'] = report;
            mike = null;
            mike = mike != report;
            if(!mike) { _fun00012_ip = 163; continue _fun00011 }
 132:
            tango = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 10;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.isUnderLockdown;
            mike = zulu.bind(tango)(report);
 163:
            entity['isUnderLockdown'] = mike;
            return entity;
        }
    };
    zulu['useGuildIncidentsState'] = tango;
    tango = function() { // Original name: shouldShowRaidNotificationNagbar
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tango = _closure1_slot15;
            zulu = _closure1_slot7;
            mike = zulu.getGuildId;
            zulu = mike.bind(zulu)();
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = _closure1_slot4;
            entity = zulu.getGuildsProto;
            tango = entity.bind(zulu)();
            zulu = null;
            if(!(zulu == tango)) { _fun00018_ip = 50; continue _fun00017 }
 48:
            tango = {};
 50:
            report = zulu != mike;
            entity = null;
            if(!report) { _fun00018_ip = 63; continue _fun00017 }
 59:
            entity = tango[mike];
 63:
            tango = zulu != entity;
            if(!tango) { _fun00018_ip = 76; continue _fun00017 }
 70:
            tango = entity.disableRaidAlertNag;
 76:
            entity = {};
            zulu = zulu != mike;
            if(!zulu) { _fun00018_ip = 88; continue _fun00017 }
 85:
            zulu = !tango;
 88:
            entity['show'] = zulu;
            entity['guildId'] = mike;
            return entity;
        }
    };
    zulu['shouldShowRaidNotificationNagbar'] = tango;
    tango = function() { // Original name: shouldShowRaidInAppNotification
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zulu = _closure1_slot15;
            tango = _closure1_slot7;
            mike = tango.getGuildId;
            mike = mike.bind(tango)();
            options = undefined;
            mike = zulu.bind(options)(mike);
            tango = _closure1_slot4;
            zulu = tango.getGuildsProto;
            tango = zulu.bind(tango)();
            zulu = null;
            if(!(zulu == tango)) { _fun00020_ip = 50; continue _fun00019 }
 48:
            tango = {};
 50:
            oscar = zulu != mike;
            report = null;
            if(!oscar) { _fun00020_ip = 63; continue _fun00019 }
 59:
            report = tango[mike];
 63:
            tango = zulu != report;
            if(!tango) { _fun00020_ip = 76; continue _fun00019 }
 70:
            tango = report.disableRaidAlertNag;
 76:
            report = zulu != mike;
            golf = null;
            if(!report) { _fun00020_ip = 100; continue _fun00019 }
 85:
            oscar = _closure1_slot9;
            report = oscar.getGuildIncident;
            golf = report.bind(oscar)(mike);
 100:
            report = zulu != golf;
            if(!report) { _fun00020_ip = 138; continue _fun00019 }
 107:
            oscar = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 10;
            entity = verify[entity];
            oscar = oscar.bind(options)(entity);
            entity = oscar.isUnderLockdown;
            report = entity.bind(oscar)(golf);
 138:
            entity = {};
            zulu = zulu != mike;
            if(!zulu) { _fun00020_ip = 150; continue _fun00019 }
 147:
            zulu = !report;
 150:
            if(!zulu) { _fun00020_ip = 156; continue _fun00019 }
 153:
            zulu = !tango;
 156:
            entity['show'] = zulu;
            entity['guildId'] = mike;
            return entity;
        }
    };
    zulu['shouldShowRaidInAppNotification'] = tango;
    tango = function(argFoo) { // Original name: getDisabledActions
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            options = argFoo;
            zulu = null;
            if(!(zulu != options)) { _fun00022_ip = 257; continue _fun00021 }
 12:
            tango = _closure1_slot9;
            mike = tango.getGuildIncident;
            entity = options.id;
            tango = mike.bind(tango)(entity);
            entity = {};
            golf = zulu == options;
            report = undefined;
            if(golf) { _fun00022_ip = 67; continue _fun00021 }
 46:
            golf = options.hasFeature;
            oscar = _closure1_slot12;
            oscar = oscar.INVITES_DISABLED;
            report = golf.bind(options)(oscar);
 67:
            if(report) { _fun00022_ip = 159; continue _fun00021 }
 70:
            golf = zulu == tango;
            oscar = undefined;
            if(golf) { _fun00022_ip = 85; continue _fun00021 }
 79:
            oscar = tango.invitesDisabledUntil;
 85:
            oscar = zulu != oscar;
            if(!oscar) { _fun00022_ip = 156; continue _fun00021 }
 92:
            golf = global;
            offset = golf.Date;
            yankee = tango.invitesDisabledUntil;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeo = verify;
            options = new romeo[offset](yankee, offset);
            options = options instanceof Object ? options : verify;
            golf = golf.Date;
            verify = golf.prototype;
            verify = Object.create(verify, {constructor: {value: golf}});
            romeo = verify;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : verify;
            oscar = options > golf;
 156:
            report = oscar;
 159:
            entity['invitesDisabled'] = report;
            report = zulu == tango;
            mike = undefined;
            if(report) { _fun00022_ip = 179; continue _fun00021 }
 173:
            mike = tango.dmsDisabledUntil;
 179:
            mike = zulu != mike;
            if(!mike) { _fun00022_ip = 250; continue _fun00021 }
 186:
            zulu = global;
            oscar = zulu.Date;
            yankee = tango.dmsDisabledUntil;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            romeo = report;
            tango = new romeo[oscar](yankee, offset);
            tango = tango instanceof Object ? tango : report;
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            romeo = report;
            zulu = new romeo[zulu](yankee);
            zulu = zulu instanceof Object ? zulu : report;
            mike = tango > zulu;
 250:
            entity['dmsDisabled'] = mike;
            return entity;
 257:
            entity = {'dmsDisabled': false, 'invitesDisabled': false};
            return entity;
        }
    };
    zulu['getDisabledActions'] = tango;
    mike = function(argFoo) { // Original name: useDisabledActions
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            options = argFoo;
            zulu = null;
            tango = zulu == options;
            mike = undefined;
            offset = undefined;
            if(tango) { _fun00024_ip = 23; continue _fun00023 }
 18:
            offset = options.id;
 23:
            if(!(zulu == offset)) { _fun00024_ip = 34; continue _fun00023 }
 27:
            offset = _closure1_slot11;
 34:
            var _closure2_slot0 = offset;
            report = _closure1_slot0;
            golf = _closure1_slot3;
            tango = 8;
            tango = golf[tango];
            verify = report.bind(mike)(tango);
            golf = verify.useStateFromStores;
            tango = _closure1_slot9;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(1);
            tango[0] = offset;
            entity = function() {
                zulu = _closure1_slot9;
                mike = zulu.getGuildIncident;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = golf.bind(verify)(report, entity, tango);
            if(!(zulu != options)) { _fun00024_ip = 329; continue _fun00023 }
 107:
            entity = {};
            golf = zulu == options;
            report = undefined;
            if(golf) { _fun00024_ip = 139; continue _fun00023 }
 118:
            golf = options.hasFeature;
            oscar = _closure1_slot12;
            oscar = oscar.INVITES_DISABLED;
            report = golf.bind(options)(oscar);
 139:
            if(report) { _fun00024_ip = 231; continue _fun00023 }
 142:
            golf = zulu == tango;
            oscar = undefined;
            if(golf) { _fun00024_ip = 157; continue _fun00023 }
 151:
            oscar = tango.invitesDisabledUntil;
 157:
            oscar = zulu != oscar;
            if(!oscar) { _fun00024_ip = 228; continue _fun00023 }
 164:
            golf = global;
            offset = golf.Date;
            foxtrot = tango.invitesDisabledUntil;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            backup = verify;
            options = new backup[offset](foxtrot, romeo);
            options = options instanceof Object ? options : verify;
            golf = golf.Date;
            verify = golf.prototype;
            verify = Object.create(verify, {constructor: {value: golf}});
            backup = verify;
            golf = new backup[golf](foxtrot);
            golf = golf instanceof Object ? golf : verify;
            oscar = options > golf;
 228:
            report = oscar;
 231:
            entity['invitesDisabled'] = report;
            report = zulu == tango;
            mike = undefined;
            if(report) { _fun00024_ip = 251; continue _fun00023 }
 245:
            mike = tango.dmsDisabledUntil;
 251:
            mike = zulu != mike;
            if(!mike) { _fun00024_ip = 322; continue _fun00023 }
 258:
            zulu = global;
            oscar = zulu.Date;
            foxtrot = tango.dmsDisabledUntil;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            backup = report;
            tango = new backup[oscar](foxtrot, romeo);
            tango = tango instanceof Object ? tango : report;
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            backup = report;
            zulu = new backup[zulu](foxtrot);
            zulu = zulu instanceof Object ? zulu : report;
            mike = tango > zulu;
 322:
            entity['dmsDisabled'] = mike;
            _fun00024_ip = 339; continue _fun00023;
 329:
            entity = {'dmsDisabled': false, 'invitesDisabled': false};
 339:
            return entity;
        }
    };
    zulu['useDisabledActions'] = mike;
    return entity;
})();