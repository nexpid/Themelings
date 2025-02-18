// app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _setGuildRaidAlerts
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = argFoo;
                    report = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 240; continue _fun00001 }
 16:
                    michal = global;
                    oscard = michal.Set;
                    yankee = tangon.features;
                    zuuluu = oscard.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
                    romeon = zuuluu;
                    michal = new romeon[oscard](yankee, offset);
                    michal = michal instanceof Object ? michal : zuuluu;
                    golfie = michal.has;
                    oscard = _closure1_slot7;
                    oscard = oscard.COMMUNITY;
                    oscard = golfie.bind(michal)(oscard);
                    if(oscard) { _fun00002_ip = 123; continue _fun00001 }
 76:
                    if(report) { _fun00002_ip = 101; continue _fun00001 }
 79:
                    golfie = michal.delete;
                    oscard = _closure1_slot7;
                    oscard = oscard.NON_COMMUNITY_RAID_ALERTS;
                    oscard = golfie.bind(michal)(oscard);
                    _fun00002_ip = 168; continue _fun00001;
 101:
                    golfie = michal.add;
                    oscard = _closure1_slot7;
                    oscard = oscard.NON_COMMUNITY_RAID_ALERTS;
                    oscard = golfie.bind(michal)(oscard);
                    _fun00002_ip = 168; continue _fun00001;
 123:
                    if(report) { _fun00002_ip = 148; continue _fun00001 }
 126:
                    oscard = michal.add;
                    report = _closure1_slot7;
                    report = report.RAID_ALERTS_DISABLED;
                    report = oscard.bind(michal)(report);
                    _fun00002_ip = 168; continue _fun00001;
 148:
                    oscard = michal.delete;
                    report = _closure1_slot7;
                    report = report.RAID_ALERTS_DISABLED;
                    report = oscard.bind(michal)(report);
 168:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    report = report[zuuluu];
                    zuuluu = undefined;
                    golfie = oscard.bind(zuuluu)(report);
                    oscard = golfie.saveGuild;
                    report = tangon.id;
                    tangon = {};
                    tangon['features'] = michal;
                    michal = {};
                    option = true;
                    michal['throwErr'] = option;
                    michal = oscard.bind(golfie)(report, tangon, michal);
                    SaveGenerator(address=228);
 226:
                    return michal;
 228:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 237; continue _fun00001 }
 234:
                    return zuuluu;
 237:
                    return michal;
 240:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _setGuildIncidentActions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 187; continue _fun00003 }
 10:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 6;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    golfie = michal.bind(tangon)();
                    report = golfie.add;
                    zuuluu = argCor;
                    michal = 'hours';
                    zuuluu = report.bind(golfie)(zuuluu, michal);
                    michal = zuuluu.toISOString;
                    zuuluu = michal.bind(zuuluu)();
                    report = {};
                    option = argBar;
                    golfie = null;
                    if(!option) { _fun00004_ip = 80; continue _fun00003 }
 77:
                    golfie = zuuluu;
 80:
                    report['invites_disabled_until'] = golfie;
                    golfie = argBaz;
                    michal = null;
                    if(!golfie) { _fun00004_ip = 96; continue _fun00003 }
 93:
                    michal = zuuluu;
 96:
                    report['dms_disabled_until'] = michal;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 7;
                    michal = golfie[michal];
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.put;
                    michal = {};
                    option = _closure1_slot6;
                    golfie = option.GUILD_INCIDENT_ACTIONS;
                    oscard = argFoo;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=175);
 173:
                    return michal;
 175:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 184; continue _fun00003 }
 181:
                    return michal;
 184:
                    return michal;
 187:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _handleResolveRaid
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 168; continue _fun00005 }
 13:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getGuild;
                    golfie = michal.bind(zuuluu)(option);
                    michal = null;
                    tangon = michal == golfie;
                    report = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00006_ip = 53; continue _fun00005 }
 43:
                    tangon = golfie.getSafetyAlertsChannelId;
                    zuuluu = tangon.bind(golfie)();
 53:
                    zuuluu = michal == zuuluu;
                    michal = null;
                    if(zuuluu) { _fun00006_ip = 165; continue _fun00005 }
 62:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    golfie = _closure1_slot6;
                    oscard = golfie.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                    oscard = oscard.bind(golfie)(option);
                    zuuluu['url'] = oscard;
                    oscard = {};
                    golfie = argBar;
                    oscard['alert_message_id'] = golfie;
                    golfie = argBaz;
                    oscard['reason'] = golfie;
                    zuuluu['body'] = oscard;
                    oscard = false;
                    zuuluu['rejectWithError'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=153);
 151:
                    return zuuluu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    michal = zuuluu;
                    if(!tangon) { _fun00006_ip = 165; continue _fun00005 }
 162:
                    return zuuluu;
 165:
                    return michal;
 168:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _handleReportRaid
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 144; continue _fun00007 }
 13:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getGuild;
                    golfie = michal.bind(zuuluu)(option);
                    michal = null;
                    tangon = michal == golfie;
                    report = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00008_ip = 53; continue _fun00007 }
 43:
                    tangon = golfie.getSafetyAlertsChannelId;
                    zuuluu = tangon.bind(golfie)();
 53:
                    zuuluu = michal == zuuluu;
                    michal = null;
                    if(zuuluu) { _fun00008_ip = 141; continue _fun00007 }
 62:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    golfie = _closure1_slot6;
                    oscard = golfie.GUILD_INCIDENT_REPORT_RAID;
                    oscard = oscard.bind(golfie)(option);
                    zuuluu['url'] = oscard;
                    oscard = false;
                    zuuluu['rejectWithError'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=129);
 127:
                    return zuuluu;
 129:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    michal = zuuluu;
                    if(!tangon) { _fun00008_ip = 141; continue _fun00007 }
 138:
                    return zuuluu;
 141:
                    return michal;
 144:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    golfie = tangon.Endpoints;
    var _closure1_slot6 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_antiraid/GuildAntiRaidActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: trackReportRaidViewed
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            option = argFoo;
            golfie = arguments[1];
            entity = undefined;
            if(!(golfie === entity)) { _fun00010_ip = 16; continue _fun00009 }
 12:
            golfie = new Array(0);
 16:
            zuuluu = golfie.length;
            michal = 0;
            if(!(michal !== zuuluu)) { _fun00010_ip = 127; continue _fun00009 }
 27:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 3;
            michal = offset[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot5;
            zuuluu = michal.GUILD_RAID_REPORTED;
            michal = {};
            verify = _closure1_slot0;
            oscard = 4;
            oscard = offset[oscard];
            verify = verify.bind(entity)(oscard);
            oscard = verify.collectGuildAnalyticsMetadata;
            yankee = oscard.bind(verify)(option);
            romeon = michal;
            oscard = copyDataProperties(romeon, yankee);
            oscard = 'guild_id';
            michal[oscard] = option;
            oscard = 'raid_types';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
 127:
            return entity;
        }
    };
    zuuluu['trackReportRaidViewed'] = tangon;
    tangon = function() { // Original name: setGuildRaidAlerts
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setGuildRaidAlerts'] = tangon;
    tangon = function() { // Original name: setGuildIncidentActions
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['setGuildIncidentActions'] = tangon;
    tangon = function() { // Original name: handleResolveRaid
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['handleResolveRaid'] = tangon;
    michal = function() { // Original name: handleReportRaid
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['handleReportRaid'] = michal;
    return entity;
})();