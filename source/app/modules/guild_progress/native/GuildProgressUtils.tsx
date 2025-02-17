// app/modules/guild_progress/native/GuildProgressUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: useIOSCompletionStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            romeo = argFoo;
            var _closure2_slot0 = romeo;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            yankee = 10;
            entity = golf[yankee];
            tango = undefined;
            verify = report.bind(tango)(entity);
            options = verify.useStateFromStores;
            entity = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                tango = _closure1_slot5;
                zulu = tango.can;
                entity = _closure1_slot9;
                mike = entity.ADMINISTRATOR;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = options.bind(verify)(zulu, entity);
            zulu = 11;
            options = golf[zulu];
            verify = report.bind(tango)(options);
            options = verify.useGuildPersonalized;
            verify = options.bind(verify)(romeo);
            options = golf[zulu];
            offset = report.bind(tango)(options);
            options = offset.useGuildPopulated;
            offset = options.bind(offset)(romeo);
            options = golf[yankee];
            backup = report.bind(tango)(options);
            foxtrot = backup.useStateFromStores;
            options = _closure1_slot3;
            romeo = new Array(1);
            romeo[0] = options;
            options = function() {
                zulu = _closure1_slot3;
                mike = zulu.getDefaultChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = foxtrot.bind(backup)(romeo, options);
            zulu = golf[zulu];
            options = report.bind(tango)(zulu);
            golf = options.useChannelsMessaged;
            report = null;
            if(!(report == foxtrot)) { _fun00002_ip = 173; continue _fun00001 }
 167:
            zulu = new Array(0);
            _fun00002_ip = 184; continue _fun00001;
 173:
            romeo = new Array(1);
            romeo[0] = foxtrot;
            zulu = romeo;
 184:
            golf = golf.bind(options)(zulu);
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            foxtrot = options.bind(tango)(zulu);
            romeo = foxtrot.useStateFromStores;
            zulu = _closure1_slot6;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = _closure1_slot6;
                    mike = tango.getProgress;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    report = mike.bind(tango)(entity);
                    entity = null;
                    tango = entity == report;
                    mike = undefined;
                    if(tango) { _fun00004_ip = 61; continue _fun00003 }
 41:
                    tango = report.has;
                    zulu = _closure1_slot7;
                    zulu = zulu.MESSAGE;
                    mike = tango.bind(report)(zulu);
 61:
                    entity = entity != mike;
                    if(!entity) { _fun00004_ip = 71; continue _fun00003 }
 68:
                    entity = mike;
 71:
                    return entity;
                }
            };
            zulu = romeo.bind(foxtrot)(options, zulu);
            if(golf) { _fun00002_ip = 242; continue _fun00001 }
 239:
            golf = zulu;
 242:
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            romeo = options.bind(tango)(zulu);
            yankee = romeo.useStateFromStores;
            zulu = _closure1_slot6;
            options = new Array(1);
            options[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getProgress;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = yankee.bind(romeo)(options, zulu);
            if(entity) { _fun00002_ip = 308; continue _fun00001 }
 292:
            entity = {'guildPopulated': false, 'guildPersonalized': false, 'guildMessaged': false, 'guildChannelCreated': false, 'completed': true, 'dismissed': true, 'numFinished': 0, 'totalSteps': 0};
            return entity;
 308:
            entity = new Array(3);
            entity[0] = offset;
            entity[1] = verify;
            entity[2] = golf;
            zulu = entity.filter;
            mike = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            mike = zulu.bind(entity)(mike);
            zulu = mike.length;
            mike = entity.length;
            entity = report == options;
            tango = undefined;
            if(entity) { _fun00002_ip = 380; continue _fun00001 }
 360:
            yankee = options.has;
            entity = _closure1_slot7;
            entity = entity.COMPLETED;
            tango = yankee.bind(options)(entity);
 380:
            if(tango) { _fun00002_ip = 387; continue _fun00001 }
 383:
            tango = zulu === mike;
 387:
            entity = {};
            entity['guildPopulated'] = offset;
            entity['guildPersonalized'] = verify;
            entity['guildMessaged'] = golf;
            entity['completed'] = tango;
            report = report == options;
            if(report) { _fun00002_ip = 436; continue _fun00001 }
 416:
            golf = options.has;
            oscar = _closure1_slot7;
            oscar = oscar.DISMISSED;
            report = golf.bind(options)(oscar);
 436:
            entity['dismissed'] = report;
            if(!tango) { _fun00002_ip = 447; continue _fun00001 }
 444:
            zulu = mike;
 447:
            entity['numFinished'] = zulu;
            entity['totalSteps'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    oscar = options[report];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Steps;
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot8 = verify;
    oscar = oscar.Permissions;
    var _closure1_slot9 = oscar;
    oscar = 14;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_progress/native/GuildProgressUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['MIN_PROGRESS_PERCENT'] = report;
    report = 'rgba(78, 93, 148, 0.3)';
    zulu['PROGRESS_BACKGROUND_COLOR'] = report;
    report = function(argFoo) { // Original name: openActionSheet
        golf = argFoo;
        report = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        tango = mike[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        tango = _closure1_slot0;
        zulu = 8;
        zulu = mike[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = 7;
        zulu = mike[zulu];
        mike = mike.paths;
        tango = tango.bind(entity)(zulu, mike);
        options = golf.id;
        mike = global;
        mike = mike.HermesInternal;
        zulu = mike.concat;
        mike = 'guild-progress-';
        zulu = zulu.bind(mike)(options);
        mike = {};
        mike['guild'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['openActionSheet'] = report;
    report = function(argFoo) { // Original name: hideActionSheet
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.hideActionSheet;
        mike = global;
        mike = mike.HermesInternal;
        oscar = mike.concat;
        report = 'guild-progress-';
        mike = argFoo;
        mike = oscar.bind(report)(mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['hideActionSheet'] = report;
    report = function(argFoo) { // Original name: createGuildProgress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot4;
            mike = tango.getGuild;
            tango = mike.bind(tango)(zulu);
            mike = null;
            if(!(mike != tango)) { _fun00006_ip = 59; continue _fun00005 }
 26:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.createProgress;
            entity = entity.bind(mike)(zulu);
 59:
            entity = undefined;
            return entity;
        }
    };
    zulu['createGuildProgress'] = report;
    zulu['useIOSCompletionStates'] = tango;
    tango = function(argFoo) { // Original name: useGuildProgressStep
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot10;
            offset = undefined;
            entity = argFoo;
            report = mike.bind(offset)(entity);
            entity = report.guildPopulated;
            golf = report.guildPersonalized;
            zulu = report.guildMessaged;
            mike = report.completed;
            verify = report.totalSteps;
            foxtrot = _closure1_slot0;
            oscar = _closure1_slot2;
            romeo = 12;
            report = oscar[romeo];
            report = foxtrot.bind(offset)(report);
            yankee = report.intl;
            options = yankee.string;
            report = oscar[romeo];
            report = foxtrot.bind(offset)(report);
            report = report.t;
            report = report.q9n0TU;
            options = options.bind(yankee)(report);
            report = new Array(3);
            report[0] = options;
            options = oscar[romeo];
            options = foxtrot.bind(offset)(options);
            backup = options.intl;
            yankee = backup.string;
            options = oscar[romeo];
            options = foxtrot.bind(offset)(options);
            options = options.t;
            options = options.DWB2YW;
            options = yankee.bind(backup)(options);
            report[1] = options;
            options = oscar[romeo];
            options = foxtrot.bind(offset)(options);
            yankee = options.intl;
            options = yankee.string;
            oscar = oscar[romeo];
            oscar = foxtrot.bind(offset)(oscar);
            oscar = oscar.t;
            oscar = oscar.dNktpq;
            oscar = options.bind(yankee)(oscar);
            report[2] = oscar;
            options = 0;
            oscar = 0;
            if(!entity) { _fun00008_ip = 222; continue _fun00007 }
 213:
            entity = null;
            report[options] = entity;
            oscar = 1;
 222:
            entity = oscar;
            if(!golf) { _fun00008_ip = 240; continue _fun00007 }
 228:
            entity = oscar + 1;
            options = null;
            golf = 1;
            report[golf] = options;
 240:
            yankee = entity;
            if(!zulu) { _fun00008_ip = 258; continue _fun00007 }
 246:
            yankee = entity + 1;
            oscar = null;
            zulu = 3;
            report[zulu] = oscar;
 258:
            zulu = report.find;
            entity = function(argFoo) {
                mike = null;
                entity = argFoo;
                entity = mike != entity;
                return entity;
            };
            options = zulu.bind(report)(entity);
            entity = null;
            if(!(entity == options)) { _fun00008_ip = 335; continue _fun00007 }
 283:
            oscar = _closure1_slot0;
            entity = _closure1_slot2;
            zulu = entity[romeo];
            zulu = oscar.bind(offset)(zulu);
            report = zulu.intl;
            zulu = report.string;
            entity = entity[romeo];
            entity = oscar.bind(offset)(entity);
            entity = entity.t;
            entity = entity.+Gyklp;
            options = zulu.bind(report)(entity);
 335:
            entity = {};
            zulu = global;
            golf = zulu.Math;
            oscar = golf.max;
            zulu = 100;
            zulu = zulu * yankee;
            report = zulu / verify;
            zulu = 3;
            zulu = oscar.bind(golf)(zulu, report);
            entity['percentComplete'] = zulu;
            if(!(!(yankee < verify))) { _fun00008_ip = 433; continue _fun00007 }
 379:
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            report = zulu[romeo];
            report = golf.bind(offset)(report);
            oscar = report.intl;
            report = oscar.string;
            zulu = zulu[romeo];
            zulu = golf.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.+Gyklp;
            zulu = report.bind(oscar)(zulu);
            _fun00008_ip = 514; continue _fun00007;
 433:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            oscar = tango[romeo];
            oscar = report.bind(offset)(oscar);
            golf = oscar.intl;
            oscar = golf.formatToPlainString;
            tango = tango[romeo];
            tango = report.bind(offset)(tango);
            tango = tango.t;
            report = tango.zhHW5e;
            tango = {};
            offset = 1;
            offset = yankee + offset;
            tango['currStep'] = offset;
            tango['total'] = verify;
            tango['step'] = options;
            zulu = oscar.bind(golf)(report, tango);
 514:
            entity['subtitle'] = zulu;
            entity['completed'] = mike;
            return entity;
        }
    };
    zulu['useGuildProgressStep'] = tango;
    mike = function(argFoo) { // Original name: useIsEligibleForGuildProgress
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 10;
            tango = golf[tango];
            oscar = undefined;
            options = report.bind(oscar)(tango);
            report = options.useStateFromStores;
            verify = _closure1_slot5;
            tango = new Array(1);
            tango[0] = verify;
            entity = function() {
                tango = _closure1_slot5;
                zulu = tango.can;
                entity = _closure1_slot9;
                mike = entity.ADMINISTRATOR;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = report.bind(options)(tango, entity);
            report = _closure1_slot1;
            tango = 13;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.extractTimestamp;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu);
            tango = global;
            report = tango.Date;
            tango = report.now;
            tango = tango.bind(report)();
            mike = _closure1_slot8;
            mike = tango - mike;
            mike = zulu < mike;
            if(!entity) { _fun00010_ip = 131; continue _fun00009 }
 128:
            entity = !mike;
 131:
            return entity;
        }
    };
    zulu['useIsEligibleForGuildProgress'] = mike;
    return entity;
})();