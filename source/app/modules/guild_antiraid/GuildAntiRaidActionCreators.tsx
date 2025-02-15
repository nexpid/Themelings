// app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _setGuildRaidAlerts
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tango = argFoo;
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 240; continue _fun00001 }
 16:
                    mike = global;
                    oscar = mike.Set;
                    yankee = tango.features;
                    zulu = oscar.prototype;
                    zulu = Object.create(zulu, {constructor: {value: oscar}});
                    romeo = zulu;
                    mike = new romeo[oscar](yankee, offset);
                    mike = mike instanceof Object ? mike : zulu;
                    golf = mike.has;
                    oscar = _closure1_slot7;
                    oscar = oscar.COMMUNITY;
                    oscar = golf.bind(mike)(oscar);
                    if(oscar) { _fun00002_ip = 123; continue _fun00001 }
 76:
                    if(report) { _fun00002_ip = 101; continue _fun00001 }
 79:
                    golf = mike.delete;
                    oscar = _closure1_slot7;
                    oscar = oscar.NON_COMMUNITY_RAID_ALERTS;
                    oscar = golf.bind(mike)(oscar);
                    _fun00002_ip = 168; continue _fun00001;
 101:
                    golf = mike.add;
                    oscar = _closure1_slot7;
                    oscar = oscar.NON_COMMUNITY_RAID_ALERTS;
                    oscar = golf.bind(mike)(oscar);
                    _fun00002_ip = 168; continue _fun00001;
 123:
                    if(report) { _fun00002_ip = 148; continue _fun00001 }
 126:
                    oscar = mike.add;
                    report = _closure1_slot7;
                    report = report.RAID_ALERTS_DISABLED;
                    report = oscar.bind(mike)(report);
                    _fun00002_ip = 168; continue _fun00001;
 148:
                    oscar = mike.delete;
                    report = _closure1_slot7;
                    report = report.RAID_ALERTS_DISABLED;
                    report = oscar.bind(mike)(report);
 168:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    report = report[zulu];
                    zulu = undefined;
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.saveGuild;
                    report = tango.id;
                    tango = {};
                    tango['features'] = mike;
                    mike = {};
                    options = true;
                    mike['throwErr'] = options;
                    mike = oscar.bind(golf)(report, tango, mike);
                    SaveGenerator(address=228);
 226:
                    return mike;
 228:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 237; continue _fun00001 }
 234:
                    return zulu;
 237:
                    return mike;
 240:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _setGuildIncidentActions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 187; continue _fun00003 }
 10:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 6;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    golf = mike.bind(tango)();
                    report = golf.add;
                    zulu = argCorge;
                    mike = 'hours';
                    zulu = report.bind(golf)(zulu, mike);
                    mike = zulu.toISOString;
                    zulu = mike.bind(zulu)();
                    report = {};
                    options = argBar;
                    golf = null;
                    if(!options) { _fun00004_ip = 80; continue _fun00003 }
 77:
                    golf = zulu;
 80:
                    report['invites_disabled_until'] = golf;
                    golf = argBaz;
                    mike = null;
                    if(!golf) { _fun00004_ip = 96; continue _fun00003 }
 93:
                    mike = zulu;
 96:
                    report['dms_disabled_until'] = mike;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 7;
                    mike = golf[mike];
                    mike = zulu.bind(tango)(mike);
                    tango = mike.HTTP;
                    zulu = tango.put;
                    mike = {};
                    options = _closure1_slot6;
                    golf = options.GUILD_INCIDENT_ACTIONS;
                    oscar = argFoo;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=175);
 173:
                    return mike;
 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00004_ip = 184; continue _fun00003 }
 181:
                    return mike;
 184:
                    return mike;
 187:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _handleResolveRaid
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00006_ip = 168; continue _fun00005 }
 13:
                    zulu = _closure1_slot4;
                    mike = zulu.getGuild;
                    golf = mike.bind(zulu)(options);
                    mike = null;
                    tango = mike == golf;
                    report = undefined;
                    zulu = undefined;
                    if(tango) { _fun00006_ip = 53; continue _fun00005 }
 43:
                    tango = golf.getSafetyAlertsChannelId;
                    zulu = tango.bind(golf)();
 53:
                    zulu = mike == zulu;
                    mike = null;
                    if(zulu) { _fun00006_ip = 165; continue _fun00005 }
 62:
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    zulu = tango.bind(report)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    golf = _closure1_slot6;
                    oscar = golf.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                    oscar = oscar.bind(golf)(options);
                    zulu['url'] = oscar;
                    oscar = {};
                    golf = argBar;
                    oscar['alert_message_id'] = golf;
                    golf = argBaz;
                    oscar['reason'] = golf;
                    zulu['body'] = oscar;
                    oscar = false;
                    zulu['rejectWithError'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=153);
 151:
                    return zulu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    mike = zulu;
                    if(!tango) { _fun00006_ip = 165; continue _fun00005 }
 162:
                    return zulu;
 165:
                    return mike;
 168:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _handleReportRaid
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 144; continue _fun00007 }
 13:
                    zulu = _closure1_slot4;
                    mike = zulu.getGuild;
                    golf = mike.bind(zulu)(options);
                    mike = null;
                    tango = mike == golf;
                    report = undefined;
                    zulu = undefined;
                    if(tango) { _fun00008_ip = 53; continue _fun00007 }
 43:
                    tango = golf.getSafetyAlertsChannelId;
                    zulu = tango.bind(golf)();
 53:
                    zulu = mike == zulu;
                    mike = null;
                    if(zulu) { _fun00008_ip = 141; continue _fun00007 }
 62:
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    zulu = tango.bind(report)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    golf = _closure1_slot6;
                    oscar = golf.GUILD_INCIDENT_REPORT_RAID;
                    oscar = oscar.bind(golf)(options);
                    zulu['url'] = oscar;
                    oscar = false;
                    zulu['rejectWithError'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=129);
 127:
                    return zulu;
 129:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    mike = zulu;
                    if(!tango) { _fun00008_ip = 141; continue _fun00007 }
 138:
                    return zulu;
 141:
                    return mike;
 144:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot5 = golf;
    golf = tango.Endpoints;
    var _closure1_slot6 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_antiraid/GuildAntiRaidActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: trackReportRaidViewed
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            options = argFoo;
            golf = arguments[1];
            entity = undefined;
            if(!(golf === entity)) { _fun00010_ip = 16; continue _fun00009 }
 12:
            golf = new Array(0);
 16:
            zulu = golf.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun00010_ip = 127; continue _fun00009 }
 27:
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 3;
            mike = offset[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot5;
            zulu = mike.GUILD_RAID_REPORTED;
            mike = {};
            verify = _closure1_slot0;
            oscar = 4;
            oscar = offset[oscar];
            verify = verify.bind(entity)(oscar);
            oscar = verify.collectGuildAnalyticsMetadata;
            yankee = oscar.bind(verify)(options);
            romeo = mike;
            oscar = copyDataProperties(romeo, yankee);
            oscar = 'guild_id';
            mike[oscar] = options;
            oscar = 'raid_types';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
 127:
            return entity;
        }
    };
    zulu['trackReportRaidViewed'] = tango;
    tango = function() { // Original name: setGuildRaidAlerts
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['setGuildRaidAlerts'] = tango;
    tango = function() { // Original name: setGuildIncidentActions
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['setGuildIncidentActions'] = tango;
    tango = function() { // Original name: handleResolveRaid
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['handleResolveRaid'] = tango;
    mike = function() { // Original name: handleReportRaid
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['handleReportRaid'] = mike;
    return entity;
})();