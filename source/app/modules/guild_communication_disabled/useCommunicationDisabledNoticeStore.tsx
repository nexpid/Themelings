// app/modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY;
    var _closure1_slot3 = verify;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStore;
    tangon = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            report = tangon.Storage;
            tangon = report.get;
            zuuluu = _closure1_slot3;
            report = tangon.bind(report)(zuuluu);
            zuuluu = null;
            if(!(zuuluu == report)) { _fun00002_ip = 73; continue _fun00001 }
 69:
            report = new Array(0);
 73:
            zuuluu = global;
            zuuluu = zuuluu.Set;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            option = tangon;
            golfie = report;
            zuuluu = new option[zuuluu](golfie, oscard);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            entity['notificationDismissedInGuilds'] = zuuluu;
            zuuluu = function(argFoo) { // Original name: dismissNotification
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                option = zuuluu.notificationDismissedInGuilds;
                var _closure3_slot0 = option;
                tangon = option.add;
                zuuluu = argFoo;
                zuuluu = tangon.bind(option)(zuuluu);
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                oscard = 2;
                oscard = report[oscard];
                oscard = tangon.bind(entity)(oscard);
                golfie = oscard.Storage;
                oscard = golfie.set;
                zuuluu = _closure1_slot3;
                zuuluu = oscard.bind(golfie)(zuuluu, option);
                zuuluu = 4;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure2_slot0;
                    michal = {};
                    entity = _closure3_slot0;
                    michal['notificationDismissedInGuilds'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['dismissNotification'] = zuuluu;
            michal = function(argFoo) { // Original name: resetNotification
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure2_slot1;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)();
                    option = zuuluu.notificationDismissedInGuilds;
                    var _closure3_slot0 = option;
                    zuuluu = option.has;
                    zuuluu = zuuluu.bind(option)(tangon);
                    if(!zuuluu) { _fun00004_ip = 123; continue _fun00003 }
 41:
                    zuuluu = option.delete;
                    zuuluu = zuuluu.bind(option)(tangon);
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    oscard = 2;
                    oscard = report[oscard];
                    oscard = tangon.bind(entity)(oscard);
                    golfie = oscard.Storage;
                    oscard = golfie.set;
                    zuuluu = _closure1_slot3;
                    zuuluu = oscard.bind(golfie)(zuuluu, option);
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        zuuluu = _closure2_slot0;
                        michal = {};
                        entity = _closure3_slot0;
                        michal['notificationDismissedInGuilds'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 123:
                    return entity;
                }
            };
            entity['resetNotification'] = michal;
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Storage;
    golfie = option.asyncGet;
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = {};
            tangon = global;
            oscard = tangon.Set;
            golfie = _closure2_slot0;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            option = report;
            tangon = new option[oscard](golfie, oscard);
            tangon = tangon instanceof Object ? tangon : report;
            entity['notificationDismissedInGuilds'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    tangon = golfie.bind(option)(verify, tangon);
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCommunicationDisabledNoticeStore
        zuuluu = _closure1_slot0;
        option = _closure1_slot1;
        michal = 5;
        michal = option[michal];
        tangon = undefined;
        golfie = zuuluu.bind(tangon)(michal);
        oscard = golfie.useStoreWithEqualityFn;
        report = _closure1_slot4;
        michal = 6;
        michal = option[michal];
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = michal.shallow;
        michal = function(argFoo) {
            michal = argFoo;
            zuuluu = michal.notificationDismissedInGuilds;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = michal.dismissNotification;
            entity[1] = michal;
            return entity;
        };
        zuuluu = oscard.bind(golfie)(report, michal, zuuluu);
        michal = _closure1_slot2;
        entity = 2;
        michal = michal.bind(tangon)(zuuluu, entity);
        entity = 0;
        tangon = michal[entity];
        entity = 1;
        michal = michal[entity];
        zuuluu = tangon.has;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity);
        zuuluu = !entity;
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['useCommunicationDisabledNoticeStore'] = tangon;
    michal = function(argFoo) { // Original name: clearCommunicationDisabledNotice
        michal = _closure1_slot4;
        entity = michal.getState;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.resetNotification;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['clearCommunicationDisabledNotice'] = michal;
    return entity;
})();