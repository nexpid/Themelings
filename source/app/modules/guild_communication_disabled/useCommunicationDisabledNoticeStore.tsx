// app/modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
    var _closure1_slot3 = verify;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStore;
    tango = function(argFoo, argBar) {
        _fun43912: for(var _fun43912_ip = 0; ; ) switch(_fun43912_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = {};
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 2;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            report = tango.Storage;
            tango = report.get;
            zulu = _closure1_slot3;
            report = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu == report)) { _fun43912_ip = 73; continue _fun43912 }
 69:
            report = new Array(0);
 73:
            zulu = global;
            zulu = zulu.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            options = tango;
            golf = report;
            zulu = new options[zulu](golf, oscar);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['notificationDismissedInGuilds'] = zulu;
            zulu = function(argFoo) { // Original name: dismissNotification
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                options = zulu.notificationDismissedInGuilds;
                var _closure3_slot0 = options;
                tango = options.add;
                zulu = argFoo;
                zulu = tango.bind(options)(zulu);
                tango = _closure1_slot0;
                report = _closure1_slot1;
                oscar = 2;
                oscar = report[oscar];
                oscar = tango.bind(entity)(oscar);
                golf = oscar.Storage;
                oscar = golf.set;
                zulu = _closure1_slot3;
                zulu = oscar.bind(golf)(zulu, options);
                zulu = 4;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.batchUpdates;
                mike = function() {
                    zulu = _closure2_slot0;
                    mike = {};
                    entity = _closure3_slot0;
                    mike['notificationDismissedInGuilds'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['dismissNotification'] = zulu;
            mike = function(argFoo) { // Original name: resetNotification
                _fun43915: for(var _fun43915_ip = 0; ; ) switch(_fun43915_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot1;
                    entity = undefined;
                    zulu = zulu.bind(entity)();
                    options = zulu.notificationDismissedInGuilds;
                    var _closure3_slot0 = options;
                    zulu = options.has;
                    zulu = zulu.bind(options)(tango);
                    if(!zulu) { _fun43915_ip = 123; continue _fun43915 }
 41:
                    zulu = options.delete;
                    zulu = zulu.bind(options)(tango);
                    tango = _closure1_slot0;
                    report = _closure1_slot1;
                    oscar = 2;
                    oscar = report[oscar];
                    oscar = tango.bind(entity)(oscar);
                    golf = oscar.Storage;
                    oscar = golf.set;
                    zulu = _closure1_slot3;
                    zulu = oscar.bind(golf)(zulu, options);
                    zulu = 4;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.batchUpdates;
                    mike = function() {
                        zulu = _closure2_slot0;
                        mike = {};
                        entity = _closure3_slot0;
                        mike['notificationDismissedInGuilds'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 123:
                    return entity;
                }
            };
            entity['resetNotification'] = mike;
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Storage;
    golf = options.asyncGet;
    tango = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = {};
            tango = global;
            oscar = tango.Set;
            golf = _closure2_slot0;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            options = report;
            tango = new options[oscar](golf, oscar);
            tango = tango instanceof Object ? tango : report;
            entity['notificationDismissedInGuilds'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango = golf.bind(options)(verify, tango);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCommunicationDisabledNoticeStore
        zulu = _closure1_slot0;
        options = _closure1_slot1;
        mike = 5;
        mike = options[mike];
        tango = undefined;
        golf = zulu.bind(tango)(mike);
        oscar = golf.useStoreWithEqualityFn;
        report = _closure1_slot4;
        mike = 6;
        mike = options[mike];
        mike = zulu.bind(tango)(mike);
        zulu = mike.shallow;
        mike = function(argFoo) {
            mike = argFoo;
            zulu = mike.notificationDismissedInGuilds;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.dismissNotification;
            entity[1] = mike;
            return entity;
        };
        zulu = oscar.bind(golf)(report, mike, zulu);
        mike = _closure1_slot2;
        entity = 2;
        mike = mike.bind(tango)(zulu, entity);
        entity = 0;
        tango = mike[entity];
        entity = 1;
        mike = mike[entity];
        zulu = tango.has;
        entity = argFoo;
        entity = zulu.bind(tango)(entity);
        zulu = !entity;
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['useCommunicationDisabledNoticeStore'] = tango;
    mike = function(argFoo) { // Original name: clearCommunicationDisabledNotice
        mike = _closure1_slot4;
        entity = mike.getState;
        zulu = entity.bind(mike)();
        mike = zulu.resetNotification;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['clearCommunicationDisabledNotice'] = mike;
    return entity;
})();