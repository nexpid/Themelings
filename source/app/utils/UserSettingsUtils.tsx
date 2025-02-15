// app/utils/UserSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = global;
    offset = entity.Object;
    oscar = offset.defineProperty;
    tango = {};
    verify = true;
    tango['value'] = verify;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, tango);
    yankee = 0;
    tango = options[yankee];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = options[offset];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    oscar = 2;
    tango = options[oscar];
    tango = golf.bind(entity)(tango);
    report = tango.REQUEST_DATA_LIMIT_DAYS;
    romeo = tango.AnalyticEvents;
    var _closure1_slot5 = romeo;
    romeo = tango.FriendSourceFlags;
    var _closure1_slot6 = romeo;
    tango = tango.AllFriendSourceFlags;
    var _closure1_slot7 = tango;
    tango = 86400000;
    tango = tango * report;
    var _closure1_slot8 = tango;
    report = {};
    report['UNDECIDED'] = yankee;
    tango = 'UNDECIDED';
    report[yankee] = tango;
    report['OPTIN'] = offset;
    tango = 'OPTIN';
    report[offset] = tango;
    report['OPTOUT'] = oscar;
    tango = 'OPTOUT';
    report[oscar] = tango;
    var _closure1_slot9 = report;
    tango = {};
    oscar = report.UNDECIDED;
    tango[oscar] = entity;
    oscar = report.OPTIN;
    tango[oscar] = verify;
    verify = report.OPTOUT;
    oscar = false;
    tango[verify] = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/UserSettingsUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function() { // Original name: getSanitizedRestrictedGuilds
        _fun65656: for(var _fun65656_ip = 0; ; ) switch(_fun65656_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.RestrictedGuildIds;
            mike = zulu.getSetting;
            tango = mike.bind(zulu)();
            entity = _closure1_slot3;
            mike = entity.totalUnavailableGuilds;
            entity = 0;
            zulu = tango;
            if(!(entity === mike)) { _fun65656_ip = 79; continue _fun65656 }
 60:
            mike = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            zulu = mike.bind(tango)(entity);
 79:
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            report = zulu;
            entity = new oscar[entity](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getSanitizedRestrictedGuilds'] = oscar;
    oscar = function() { // Original name: getSanitizedMessageRequestRestrictedGuilds
        _fun65658: for(var _fun65658_ip = 0; ; ) switch(_fun65658_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.MessageRequestRestrictedGuildIds;
            mike = zulu.getSetting;
            tango = mike.bind(zulu)();
            entity = _closure1_slot3;
            mike = entity.totalUnavailableGuilds;
            entity = 0;
            zulu = tango;
            if(!(entity === mike)) { _fun65658_ip = 79; continue _fun65658 }
 60:
            mike = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            zulu = mike.bind(tango)(entity);
 79:
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            report = zulu;
            entity = new oscar[entity](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getSanitizedMessageRequestRestrictedGuilds'] = oscar;
    oscar = function() { // Original name: getSanitizedActivityRestrictedGuilds
        _fun65660: for(var _fun65660_ip = 0; ; ) switch(_fun65660_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.ActivityRestrictedGuilds;
            mike = zulu.getSetting;
            tango = mike.bind(zulu)();
            entity = _closure1_slot3;
            mike = entity.totalUnavailableGuilds;
            entity = 0;
            zulu = tango;
            if(!(entity === mike)) { _fun65660_ip = 79; continue _fun65660 }
 60:
            mike = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            zulu = mike.bind(tango)(entity);
 79:
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            report = zulu;
            entity = new oscar[entity](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getSanitizedActivityRestrictedGuilds'] = oscar;
    oscar = function() { // Original name: getSanitizedActivityJoiningRestrictedGuilds
        _fun65662: for(var _fun65662_ip = 0; ; ) switch(_fun65662_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            zulu = mike.ActivityJoiningRestrictedGuilds;
            mike = zulu.getSetting;
            tango = mike.bind(zulu)();
            entity = _closure1_slot3;
            mike = entity.totalUnavailableGuilds;
            entity = 0;
            zulu = tango;
            if(!(entity === mike)) { _fun65662_ip = 79; continue _fun65662 }
 60:
            mike = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.getGuild;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            zulu = mike.bind(tango)(entity);
 79:
            entity = global;
            entity = entity.Set;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            oscar = mike;
            report = zulu;
            entity = new oscar[entity](report, tango);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getSanitizedActivityJoiningRestrictedGuilds'] = oscar;
    oscar = function(argFoo) { // Original name: computeFlags
        _fun65664: for(var _fun65664_ip = 0; ; ) switch(_fun65664_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot7;
            entity = tango & zulu;
            if(!(entity !== zulu)) { _fun65664_ip = 83; continue _fun65664 }
 18:
            entity = {};
            zulu = false;
            entity['all'] = zulu;
            mike = _closure1_slot6;
            zulu = mike.MUTUAL_FRIENDS;
            report = tango & zulu;
            zulu = mike.MUTUAL_FRIENDS;
            zulu = report === zulu;
            entity['mutualFriends'] = zulu;
            zulu = mike.MUTUAL_GUILDS;
            zulu = tango & zulu;
            mike = mike.MUTUAL_GUILDS;
            mike = zulu === mike;
            entity['mutualGuilds'] = mike;
            _fun65664_ip = 93; continue _fun65664;
 83:
            entity = {'all': true, 'mutualFriends': true, 'mutualGuilds': true};
 93:
            return entity;
        }
    };
    zulu['computeFlags'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: harvestDisabled
        _fun65665: for(var _fun65665_ip = 0; ; ) switch(_fun65665_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = zulu.verified;
            entity = !entity;
            if(entity) { _fun65665_ip = 126; continue _fun65665 }
 18:
            mike = zulu.isStaff;
            mike = mike.bind(zulu)();
            zulu = !mike;
            mike = !zulu;
            if(!zulu) { _fun65665_ip = 123; continue _fun65665 }
 37:
            zulu = null;
            zulu = zulu != tango;
            if(!zulu) { _fun65665_ip = 120; continue _fun65665 }
 46:
            report = _closure1_slot8;
            golf = global;
            options = golf.Date;
            oscar = options.now;
            oscar = oscar.bind(options)();
            options = golf.Date;
            verify = tango.created_at;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            offset = golf;
            tango = new offset[options](verify, options);
            golf = tango instanceof Object ? tango : golf;
            tango = golf.getTime;
            tango = tango.bind(golf)();
            tango = oscar - tango;
            zulu = report > tango;
 120:
            mike = zulu;
 123:
            entity = mike;
 126:
            return entity;
        }
    };
    zulu['harvestDisabled'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: trackPaneViewed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot5;
        zulu = mike.SETTINGS_PANE_VIEWED;
        mike = {};
        oscar = 'user';
        mike['settings_type'] = oscar;
        oscar = argFoo;
        mike['destination_pane'] = oscar;
        oscar = argBar;
        mike['source'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackPaneViewed'] = oscar;
    zulu['NonSpamRetrainingOptInOptions'] = report;
    zulu['NonSpamRetrainingOptInOptionsToValue'] = tango;
    mike = function() { // Original name: generateNonSpamRetrainingOptInSettingOptions
        mike = {};
        options = _closure1_slot0;
        verify = _closure1_slot2;
        tango = 5;
        zulu = verify[tango];
        golf = undefined;
        zulu = options.bind(golf)(zulu);
        oscar = zulu.intl;
        report = oscar.string;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        zulu = zulu.t;
        zulu = zulu./yLMRU;
        zulu = report.bind(oscar)(zulu);
        mike['name'] = zulu;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        oscar = zulu.intl;
        report = oscar.string;
        zulu = verify[tango];
        zulu = options.bind(golf)(zulu);
        zulu = zulu.t;
        zulu = zulu.3fzkPj;
        zulu = report.bind(oscar)(zulu);
        mike['desc'] = zulu;
        zulu = _closure1_slot9;
        entity = zulu.OPTIN;
        mike['value'] = entity;
        entity = new Array(3);
        entity[0] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.21fP2d;
        report = oscar.bind(offset)(report);
        mike['name'] = report;
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.ggJ9jY;
        report = oscar.bind(offset)(report);
        mike['desc'] = report;
        report = zulu.OPTOUT;
        mike['value'] = report;
        entity[1] = mike;
        mike = {};
        report = verify[tango];
        report = options.bind(golf)(report);
        offset = report.intl;
        oscar = offset.string;
        report = verify[tango];
        report = options.bind(golf)(report);
        report = report.t;
        report = report.OWIo8/;
        report = oscar.bind(offset)(report);
        mike['name'] = report;
        report = verify[tango];
        report = options.bind(golf)(report);
        oscar = report.intl;
        report = oscar.string;
        tango = verify[tango];
        tango = options.bind(golf)(tango);
        tango = tango.t;
        tango = tango.HqYXp6;
        tango = report.bind(oscar)(tango);
        mike['desc'] = tango;
        zulu = zulu.UNDECIDED;
        mike['value'] = zulu;
        entity[2] = mike;
        return entity;
    };
    zulu['generateNonSpamRetrainingOptInSettingOptions'] = mike;
    return entity;
})();