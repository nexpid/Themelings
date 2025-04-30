// app/utils/UserSettingsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = global;
    offset = entity.Object;
    oscard = offset.defineProperty;
    tangon = {};
    verify = true;
    tangon['value'] = verify;
    entity = '__esModule';
    entity = oscard.bind(offset)(zuuluu, entity, tangon);
    yankee = 0;
    tangon = option[yankee];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = option[offset];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    oscard = 2;
    tangon = option[oscard];
    tangon = golfie.bind(entity)(tangon);
    report = tangon.REQUEST_DATA_LIMIT_DAYS;
    romeon = tangon.AnalyticEvents;
    var _closure1_slot5 = romeon;
    romeon = tangon.FriendSourceFlags;
    var _closure1_slot6 = romeon;
    tangon = tangon.AllFriendSourceFlags;
    var _closure1_slot7 = tangon;
    tangon = 86400000;
    tangon = tangon * report;
    var _closure1_slot8 = tangon;
    report = {};
    report['UNDECIDED'] = yankee;
    tangon = 'UNDECIDED';
    report[yankee] = tangon;
    report['OPTIN'] = offset;
    tangon = 'OPTIN';
    report[offset] = tangon;
    report['OPTOUT'] = oscard;
    tangon = 'OPTOUT';
    report[oscard] = tangon;
    var _closure1_slot9 = report;
    tangon = {};
    oscard = report.UNDECIDED;
    tangon[oscard] = entity;
    oscard = report.OPTIN;
    tangon[oscard] = verify;
    verify = report.OPTOUT;
    oscard = false;
    tangon[verify] = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/UserSettingsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function() { // Original name: getSanitizedRestrictedGuilds
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.RestrictedGuildIds;
            michal = zuuluu.getSetting;
            tangon = michal.bind(zuuluu)();
            entity = _closure1_slot3;
            michal = entity.totalUnavailableGuilds;
            entity = 0;
            zuuluu = tangon;
            if(!(entity === michal)) { _fun00002_ip = 77; continue _fun00001 }
 60:
            michal = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = michal.bind(tangon)(entity);
 77:
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            report = zuuluu;
            entity = new oscard[entity](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getSanitizedRestrictedGuilds'] = oscard;
    oscard = function() { // Original name: getSanitizedMessageRequestRestrictedGuilds
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.MessageRequestRestrictedGuildIds;
            michal = zuuluu.getSetting;
            tangon = michal.bind(zuuluu)();
            entity = _closure1_slot3;
            michal = entity.totalUnavailableGuilds;
            entity = 0;
            zuuluu = tangon;
            if(!(entity === michal)) { _fun00004_ip = 77; continue _fun00003 }
 60:
            michal = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = michal.bind(tangon)(entity);
 77:
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            report = zuuluu;
            entity = new oscard[entity](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getSanitizedMessageRequestRestrictedGuilds'] = oscard;
    oscard = function() { // Original name: getSanitizedActivityRestrictedGuilds
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.ActivityRestrictedGuilds;
            michal = zuuluu.getSetting;
            tangon = michal.bind(zuuluu)();
            entity = _closure1_slot3;
            michal = entity.totalUnavailableGuilds;
            entity = 0;
            zuuluu = tangon;
            if(!(entity === michal)) { _fun00006_ip = 77; continue _fun00005 }
 60:
            michal = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = michal.bind(tangon)(entity);
 77:
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            report = zuuluu;
            entity = new oscard[entity](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getSanitizedActivityRestrictedGuilds'] = oscard;
    oscard = function() { // Original name: getSanitizedActivityJoiningRestrictedGuilds
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            zuuluu = michal.ActivityJoiningRestrictedGuilds;
            michal = zuuluu.getSetting;
            tangon = michal.bind(zuuluu)();
            entity = _closure1_slot3;
            michal = entity.totalUnavailableGuilds;
            entity = 0;
            zuuluu = tangon;
            if(!(entity === michal)) { _fun00008_ip = 77; continue _fun00007 }
 60:
            michal = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getGuild;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = michal.bind(tangon)(entity);
 77:
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            oscard = michal;
            report = zuuluu;
            entity = new oscard[entity](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getSanitizedActivityJoiningRestrictedGuilds'] = oscard;
    oscard = function(argFoo) { // Original name: computeFlags
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot7;
            entity = tangon & zuuluu;
            if(!(entity !== zuuluu)) { _fun00010_ip = 83; continue _fun00009 }
 18:
            entity = {};
            zuuluu = false;
            entity['all'] = zuuluu;
            michal = _closure1_slot6;
            zuuluu = michal.MUTUAL_FRIENDS;
            report = tangon & zuuluu;
            zuuluu = michal.MUTUAL_FRIENDS;
            zuuluu = report === zuuluu;
            entity['mutualFriends'] = zuuluu;
            zuuluu = michal.MUTUAL_GUILDS;
            zuuluu = tangon & zuuluu;
            michal = michal.MUTUAL_GUILDS;
            michal = zuuluu === michal;
            entity['mutualGuilds'] = michal;
            _fun00010_ip = 93; continue _fun00009;
 83:
            entity = {'all': true, 'mutualFriends': true, 'mutualGuilds': true};
 93:
            return entity;
        }
    };
    zuuluu['computeFlags'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: harvestDisabled
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = zuuluu.verified;
            entity = !entity;
            if(entity) { _fun00012_ip = 126; continue _fun00011 }
 18:
            michal = zuuluu.isStaff;
            michal = michal.bind(zuuluu)();
            zuuluu = !michal;
            michal = !zuuluu;
            if(!zuuluu) { _fun00012_ip = 123; continue _fun00011 }
 37:
            zuuluu = null;
            zuuluu = zuuluu != tangon;
            if(!zuuluu) { _fun00012_ip = 120; continue _fun00011 }
 46:
            report = _closure1_slot8;
            golfie = global;
            option = golfie.Date;
            oscard = option.now;
            oscard = oscard.bind(option)();
            option = golfie.Date;
            verify = tangon.created_at;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            tangon = new offset[option](verify, option);
            golfie = tangon instanceof Object ? tangon : golfie;
            tangon = golfie.getTime;
            tangon = tangon.bind(golfie)();
            tangon = oscard - tangon;
            zuuluu = report > tangon;
 120:
            michal = zuuluu;
 123:
            entity = michal;
 126:
            return entity;
        }
    };
    zuuluu['harvestDisabled'] = oscard;
    oscard = function(argFoo) { // Original name: trackPaneViewed
        entity = argFoo;
        option = entity.destinationPane;
        golfie = entity.source;
        oscard = entity.applicationId;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot5;
        zuuluu = michal.SETTINGS_PANE_VIEWED;
        michal = {};
        verify = 'user';
        michal['settings_type'] = verify;
        michal['destination_pane'] = option;
        michal['source'] = golfie;
        michal['application_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackPaneViewed'] = oscard;
    zuuluu['NonSpamRetrainingOptInOptions'] = report;
    zuuluu['NonSpamRetrainingOptInOptionsToValue'] = tangon;
    michal = function() { // Original name: generateNonSpamRetrainingOptInSettingOptions
        michal = {};
        option = _closure1_slot0;
        verify = _closure1_slot2;
        tangon = 5;
        zuuluu = verify[tangon];
        golfie = undefined;
        zuuluu = option.bind(golfie)(zuuluu);
        oscard = zuuluu.intl;
        report = oscard.string;
        zuuluu = verify[tangon];
        zuuluu = option.bind(golfie)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu./yLMRU;
        zuuluu = report.bind(oscard)(zuuluu);
        michal['name'] = zuuluu;
        zuuluu = verify[tangon];
        zuuluu = option.bind(golfie)(zuuluu);
        oscard = zuuluu.intl;
        report = oscard.string;
        zuuluu = verify[tangon];
        zuuluu = option.bind(golfie)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.3fzkPj;
        zuuluu = report.bind(oscard)(zuuluu);
        michal['desc'] = zuuluu;
        zuuluu = _closure1_slot9;
        entity = zuuluu.OPTIN;
        michal['value'] = entity;
        entity = new Array(3);
        entity[0] = michal;
        michal = {};
        report = verify[tangon];
        report = option.bind(golfie)(report);
        offset = report.intl;
        oscard = offset.string;
        report = verify[tangon];
        report = option.bind(golfie)(report);
        report = report.t;
        report = report.21fP2d;
        report = oscard.bind(offset)(report);
        michal['name'] = report;
        report = verify[tangon];
        report = option.bind(golfie)(report);
        offset = report.intl;
        oscard = offset.string;
        report = verify[tangon];
        report = option.bind(golfie)(report);
        report = report.t;
        report = report.ggJ9jY;
        report = oscard.bind(offset)(report);
        michal['desc'] = report;
        report = zuuluu.OPTOUT;
        michal['value'] = report;
        entity[1] = michal;
        michal = {};
        report = verify[tangon];
        report = option.bind(golfie)(report);
        offset = report.intl;
        oscard = offset.string;
        report = verify[tangon];
        report = option.bind(golfie)(report);
        report = report.t;
        report = report.OWIo8/;
        report = oscard.bind(offset)(report);
        michal['name'] = report;
        report = verify[tangon];
        report = option.bind(golfie)(report);
        oscard = report.intl;
        report = oscard.string;
        tangon = verify[tangon];
        tangon = option.bind(golfie)(tangon);
        tangon = tangon.t;
        tangon = tangon.HqYXp6;
        tangon = report.bind(oscard)(tangon);
        michal['desc'] = tangon;
        zuuluu = zuuluu.UNDECIDED;
        michal['value'] = zuuluu;
        entity[2] = michal;
        return entity;
    };
    zuuluu['generateNonSpamRetrainingOptInSettingOptions'] = michal;
    return entity;
})();