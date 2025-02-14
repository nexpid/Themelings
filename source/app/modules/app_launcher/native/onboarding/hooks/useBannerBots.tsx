// app/modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun118542: for(var _fun118542_ip = 0; ; ) switch(_fun118542_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun118542_ip = 46; continue _fun118542 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun118542_ip = 55; continue _fun118542 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun118542_ip = 345; continue _fun118542 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun118542_ip = 323; continue _fun118542 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun118542_ip = 283; continue _fun118542 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun118542_ip = 270; continue _fun118542 }
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
            if(!golf) { _fun118542_ip = 163; continue _fun118542 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun118542_ip = 179; continue _fun118542 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun118542_ip = 249; continue _fun118542 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun118542_ip = 249; continue _fun118542 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun118542_ip = 234; continue _fun118542 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun118542_ip = 247; continue _fun118542 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun118542_ip = 265; continue _fun118542;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun118542_ip = 283; continue _fun118542;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun118542_ip = 323; continue _fun118542 }
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
            if(!tango) { _fun118542_ip = 330; continue _fun118542 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun118543: for(var _fun118543_ip = 0; ; ) switch(_fun118543_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun118543_ip = 56; continue _fun118543 }
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
                    _fun118543_ip = 67; continue _fun118543;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun118544: for(var _fun118544_ip = 0; ; ) switch(_fun118544_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun118544_ip = 23; continue _fun118544 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun118544_ip = 33; continue _fun118544 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun118544_ip = 70; continue _fun118544 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun118544_ip = 55; continue _fun118544 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useBannerBots
        _fun118545: for(var _fun118545_ip = 0; ; ) switch(_fun118545_ip) {
 0:
            mike = argFoo;
            tango = mike.context;
            kilo = undefined;
            var _closure2_slot0 = kilo;
            zulu = {};
            zulu['context'] = tango;
            mike = function(argFoo) { // Original name: useAppsMap
                mike = argFoo;
                oscar = mike.context;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 5;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useApplicationsInContext;
                zulu = {'context': null, 'onlyWithCommands': true, 'includeBuiltIn': false, 'includeEmbeddedApps': false, 'includeNonEmbeddedApps': true};
                zulu['context'] = oscar;
                zulu = tango.bind(report)(zulu);
                report = zulu.apps;
                var _closure3_slot0 = report;
                tango = _closure1_slot2;
                zulu = tango.useMemo;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun118547: for(var _fun118547_ip = 0; ; ) switch(_fun118547_ip) {
 0:
                        entity = global;
                        entity = entity.Map;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        offset = mike;
                        entity = new offset[entity](verify);
                        entity = entity instanceof Object ? entity : mike;
                        zulu = _closure1_slot5;
                        mike = _closure3_slot0;
                        report = undefined;
                        tango = zulu.bind(report)(mike);
                        zulu = tango.bind(report)();
                        mike = zulu.done;
                        if(mike) { _fun118547_ip = 97; continue _fun118547 }
 61:
                        golf = zulu.value;
                        oscar = entity.set;
                        mike = golf.id;
                        mike = oscar.bind(entity)(mike, golf);
                        oscar = tango.bind(report)();
                        mike = oscar.done;
                        zulu = oscar;
                        if(!mike) { _fun118547_ip = 61; continue _fun118547 }
 97:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            backup = mike.bind(kilo)(zulu);
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 5;
            zulu = golf[zulu];
            options = oscar.bind(kilo)(zulu);
            report = options.useApplicationsInContext;
            zulu = {'context': null, 'onlyWithCommands': true, 'includeBuiltIn': false, 'includeEmbeddedApps': false, 'includeNonEmbeddedApps': true};
            zulu['context'] = tango;
            verify = true;
            zulu = report.bind(options)(zulu);
            options = zulu.apps;
            report = {};
            report['context'] = tango;
            zulu = function(argFoo) { // Original name: useCommandsMap
                mike = argFoo;
                oscar = mike.context;
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 5;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useApplicationCommandsInContext;
                zulu = {};
                zulu['context'] = oscar;
                oscar = false;
                zulu['includeBuiltIn'] = oscar;
                zulu = tango.bind(report)(zulu);
                report = zulu.commands;
                var _closure3_slot0 = report;
                tango = _closure1_slot2;
                zulu = tango.useMemo;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    _fun118549: for(var _fun118549_ip = 0; ; ) switch(_fun118549_ip) {
 0:
                        entity = global;
                        entity = entity.Map;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        offset = mike;
                        entity = new offset[entity](verify);
                        entity = entity instanceof Object ? entity : mike;
                        zulu = _closure1_slot5;
                        mike = _closure3_slot0;
                        report = undefined;
                        tango = zulu.bind(report)(mike);
                        zulu = tango.bind(report)();
                        mike = zulu.done;
                        if(mike) { _fun118549_ip = 97; continue _fun118549 }
 61:
                        golf = zulu.value;
                        oscar = entity.set;
                        mike = golf.id;
                        mike = oscar.bind(entity)(mike, golf);
                        oscar = tango.bind(report)();
                        mike = oscar.done;
                        zulu = oscar;
                        if(!mike) { _fun118549_ip = 61; continue _fun118549 }
 97:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            foxtrot = zulu.bind(kilo)(report);
            report = {};
            report['context'] = tango;
            zulu = function(argFoo) { // Original name: useFrecencyCommandIds
                mike = argFoo;
                oscar = mike.context;
                var _closure3_slot0 = oscar;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                mike = 3;
                golf = report[mike];
                mike = undefined;
                options = tango.bind(mike)(golf);
                golf = options.useStateFromStores;
                verify = _closure1_slot3;
                zulu = new Array(1);
                zulu[0] = verify;
                entity = function() {
                    _fun118551: for(var _fun118551_ip = 0; ; ) switch(_fun118551_ip) {
 0:
                        zulu = _closure1_slot3;
                        mike = zulu.getGuild;
                        entity = _closure3_slot0;
                        tango = entity.channel;
                        entity = null;
                        report = entity == tango;
                        entity = undefined;
                        if(report) { _fun118551_ip = 40; continue _fun118551 }
 35:
                        entity = tango.guild_id;
 40:
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    }
                };
                entity = golf.bind(options)(zulu, entity);
                zulu = {};
                oscar = oscar.channel;
                zulu['channel'] = oscar;
                zulu['guild'] = entity;
                entity = 4;
                entity = report[entity];
                mike = tango.bind(mike)(entity);
                entity = mike.useTopCommands;
                entity = entity.bind(mike)(zulu);
                return entity;
            };
            zulu = zulu.bind(kilo)(report);
            report = 6;
            report = golf[report];
            golf = oscar.bind(kilo)(report);
            oscar = golf.useActivityApplications;
            report = {};
            yankee = tango.channel;
            tango = null;
            romeo = tango == yankee;
            offset = undefined;
            if(romeo) { _fun118545_ip = 173; continue _fun118545 }
 168:
            offset = yankee.guild_id;
 173:
            report['guildId'] = offset;
            report['fetchesShelf'] = verify;
            report = oscar.bind(golf)(report);
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            oscar = 3;
            oscar = verify[oscar];
            offset = golf.bind(kilo)(oscar);
            verify = offset.useStateFromStores;
            oscar = _closure1_slot4;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                mike = _closure1_slot4;
                entity = mike.getRecentApplicationCommandMetadata;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = verify.bind(offset)(golf, oscar);
            verify = tango != oscar;
            golf = null;
            if(!verify) { _fun118545_ip = 261; continue _fun118545 }
 246:
            verify = backup.get;
            oscar = oscar.applicationId;
            golf = verify.bind(backup)(oscar);
 261:
            _closure2_slot0 = golf;
            mike = _closure1_slot5;
            romeo = mike.bind(kilo)(zulu);
            zulu = romeo.bind(kilo)();
            mike = zulu.done;
            yankee = golf;
            verify = zulu;
            oscar = undefined;
            zulu = undefined;
            golf = yankee;
            offset = undefined;
            if(mike) { _fun118545_ip = 443; continue _fun118545 }
 304:
            sizing = verify.value;
            mike = foxtrot.get;
            mike = mike.bind(foxtrot)(sizing);
            sizing = yankee;
            output = oscar;
            if(!(tango != mike)) { _fun118545_ip = 414; continue _fun118545 }
 329:
            result = backup.get;
            mike = mike.applicationId;
            mike = result.bind(backup)(mike);
            sizing = yankee;
            output = oscar;
            zulu = mike;
            if(!(tango != mike)) { _fun118545_ip = 414; continue _fun118545 }
 357:
            if(!(tango != yankee)) { _fun118545_ip = 401; continue _fun118545 }
 361:
            echo = mike.id;
            update = tango == yankee;
            result = undefined;
            if(update) { _fun118545_ip = 380; continue _fun118545 }
 375:
            result = yankee.id;
 380:
            sizing = yankee;
            output = sizing;
            zulu = mike;
            golf = output;
            offset = zulu;
            if(!(echo === result)) { _fun118545_ip = 443; continue _fun118545 }
 399:
            _fun118545_ip = 414; continue _fun118545;
 401:
            _closure2_slot0 = mike;
            sizing = mike;
            output = oscar;
            zulu = sizing;
 414:
            result = romeo.bind(kilo)();
            mike = result.done;
            yankee = sizing;
            oscar = output;
            verify = result;
            golf = yankee;
            offset = undefined;
            if(!mike) { _fun118545_ip = 304; continue _fun118545 }
 443:
            if(!(tango != golf)) { _fun118545_ip = 479; continue _fun118545 }
 447:
            oscar = golf;
            mike = offset;
            if(!(tango == offset)) { _fun118545_ip = 526; continue _fun118545 }
 457:
            verify = options.find;
            zulu = function(argFoo) {
                _fun118553: for(var _fun118553_ip = 0; ; ) switch(_fun118553_ip) {
 0:
                    entity = argFoo;
                    mike = entity.id;
                    zulu = _closure2_slot0;
                    entity = null;
                    tango = entity == zulu;
                    entity = undefined;
                    if(tango) { _fun118553_ip = 31; continue _fun118553 }
 26:
                    entity = zulu.id;
 31:
                    entity = mike !== entity;
                    return entity;
                }
            };
            mike = verify.bind(options)(zulu);
            oscar = golf;
            _fun118545_ip = 526; continue _fun118545;
 479:
            verify = options.length;
            zulu = 0;
            if(!(verify > zulu)) { _fun118545_ip = 501; continue _fun118545 }
 490:
            zulu = options[zulu];
            _closure2_slot0 = zulu;
            golf = zulu;
 501:
            verify = options.length;
            zulu = 1;
            oscar = golf;
            mike = offset;
            if(!(verify > zulu)) { _fun118545_ip = 526; continue _fun118545 }
 519:
            mike = options[zulu];
            oscar = golf;
 526:
            if(!(tango != oscar)) { _fun118545_ip = 548; continue _fun118545 }
 530:
            zulu = oscar;
            if(!(tango == mike)) { _fun118545_ip = 568; continue _fun118545 }
 537:
            tango = 0;
            mike = report[tango];
            zulu = oscar;
            _fun118545_ip = 568; continue _fun118545;
 548:
            tango = 0;
            tango = report[tango];
            _closure2_slot0 = tango;
            entity = 1;
            mike = report[entity];
            zulu = tango;
 568:
            entity = {};
            entity['firstBotApplication'] = zulu;
            entity['secondBotApplication'] = mike;
            return entity;
        }
    };
    zulu['useBannerBots'] = mike;
    return entity;
})();