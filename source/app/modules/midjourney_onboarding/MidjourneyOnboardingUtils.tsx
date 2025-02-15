// app/modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: isMidjourneyOnboardingFlow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = arguments[1];
            tango = undefined;
            if(!(entity === tango)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            entity = {};
 11:
            report = entity.guildStore;
            zulu = null;
            if(!(zulu == report)) { _fun00002_ip = 30; continue _fun00001 }
 23:
            report = _closure1_slot2;
 30:
            oscar = report.getGuild;
            entity = _closure1_slot5;
            entity = oscar.bind(report)(entity);
            zulu = zulu == entity;
            golf = undefined;
            if(zulu) { _fun00002_ip = 62; continue _fun00001 }
 56:
            golf = entity.joinedAt;
 62:
            oscar = global;
            zulu = oscar.Date;
            zulu = golf instanceof zulu;
            if(!zulu) { _fun00002_ip = 120; continue _fun00001 }
 77:
            golf = oscar.Date;
            oscar = golf.now;
            oscar = oscar.bind(golf)();
            golf = entity.joinedAt;
            entity = golf.getTime;
            entity = entity.bind(golf)();
            oscar = oscar - entity;
            entity = _closure1_slot6;
            zulu = oscar <= entity;
 120:
            entity = report.getGuildCount;
            report = entity.bind(report)();
            entity = 1;
            entity = entity === report;
            if(!entity) { _fun00002_ip = 143; continue _fun00001 }
 140:
            entity = zulu;
 143:
            if(!entity) { _fun00002_ip = 180; continue _fun00001 }
 146:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.isEligibleForMidjourneyOnboarding;
            mike = argFoo;
            entity = zulu.bind(tango)(mike);
 180:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
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
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.MIDJOURNEY_BOT_ID;
    var _closure1_slot4 = options;
    report = report.MIDJOURNEY_GUILD_ID;
    var _closure1_slot5 = report;
    report = 3600000;
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/midjourney_onboarding/MidjourneyOnboardingUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['isMidjourneyOnboardingFlow'] = tango;
    tango = function(argFoo) { // Original name: useIsMidjourneyOnboardingFlow
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot7;
            zulu = _closure2_slot0;
            mike = {};
            entity = _closure1_slot2;
            mike['guildStore'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsMidjourneyOnboardingFlow'] = tango;
    tango = function(argFoo) { // Original name: isEligibleForMidjourneyRedirect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = mike.isDM;
            entity = entity.bind(mike)();
            if(!entity) { _fun00004_ip = 34; continue _fun00003 }
 16:
            zulu = mike.rawRecipients;
            tango = zulu.length;
            zulu = 1;
            entity = zulu === tango;
 34:
            if(!entity) { _fun00004_ip = 65; continue _fun00003 }
 37:
            zulu = mike.rawRecipients;
            mike = 0;
            mike = zulu[mike];
            zulu = mike.id;
            mike = _closure1_slot4;
            entity = zulu === mike;
 65:
            if(!entity) { _fun00004_ip = 86; continue _fun00003 }
 68:
            tango = _closure1_slot7;
            zulu = undefined;
            mike = 'app';
            entity = tango.bind(zulu)(mike);
 86:
            return entity;
        }
    };
    zulu['isEligibleForMidjourneyRedirect'] = tango;
    mike = function(argFoo) { // Original name: hasRedirectedToGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                var _closure3_slot0 = zulu;
                entity = argBar;
                var _closure3_slot1 = entity;
                report = _closure1_slot3;
                mike = report.getGuildId;
                report = mike.bind(report)();
                mike = _closure2_slot0;
                if(!(report === mike)) { _fun00006_ip = 52; continue _fun00005 }
 44:
                mike = undefined;
                mike = zulu.bind(mike)();
                _fun00006_ip = 122; continue _fun00005;
 52:
                mike = global;
                oscar = mike.setTimeout;
                report = undefined;
                zulu = function() {
                    zulu = _closure3_slot4;
                    entity = undefined;
                    zulu = zulu.bind(entity)();
                    mike = _closure3_slot1;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = 3000;
                mike = oscar.bind(report)(zulu, mike);
                var _closure3_slot2 = mike;
                zulu = function() { // Original name: handleSelectedGuildUpdate
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        mike = _closure1_slot3;
                        entity = mike.getGuildId;
                        mike = entity.bind(mike)();
                        entity = _closure2_slot0;
                        if(!(mike === entity)) { _fun00008_ip = 49; continue _fun00007 }
 28:
                        zulu = _closure3_slot4;
                        mike = undefined;
                        zulu = zulu.bind(mike)();
                        entity = _closure3_slot0;
                        entity = entity.bind(mike)();
 49:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot3 = zulu;
                mike = function() { // Original name: cleanup
                    tango = _closure1_slot3;
                    zulu = tango.removeChangeListener;
                    mike = _closure3_slot3;
                    mike = zulu.bind(tango)(mike);
                    mike = global;
                    zulu = mike.clearTimeout;
                    mike = _closure3_slot2;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                var _closure3_slot4 = mike;
                mike = _closure1_slot3;
                entity = mike.addChangeListener;
                entity = entity.bind(mike)(zulu);
 122:
                entity = undefined;
                return entity;
            }
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['hasRedirectedToGuild'] = mike;
    return entity;
})();