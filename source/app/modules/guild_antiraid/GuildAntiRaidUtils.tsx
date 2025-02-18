// app/modules/guild_antiraid/GuildAntiRaidUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: hasDetectedRaid
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            michal = golfie.raidDetectedAt;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 90; continue _fun00001 }
 18:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 1;
            option = oscard[michal];
            tangon = undefined;
            option = report.bind(tangon)(option);
            golfie = golfie.raidDetectedAt;
            verify = option.bind(tangon)(golfie);
            option = verify.add;
            golfie = _closure1_slot3;
            zuuluu = 'hours';
            zuuluu = option.bind(verify)(golfie, zuuluu);
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            entity = zuuluu > michal;
 90:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    report = report.NAGBAR_DISPLAY_MAX_HOURS;
    var _closure1_slot3 = report;
    report = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    var _closure1_slot4 = report;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_antiraid/GuildAntiRaidUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['DATE_CONFIG'] = report;
    report = function(argFoo) { // Original name: hasDetectedActivity
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            entity = option.dmSpamDetectedAt;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00004_ip = 90; continue _fun00003 }
 18:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 1;
            verify = golfie[michal];
            report = undefined;
            offset = oscard.bind(report)(verify);
            verify = option.dmSpamDetectedAt;
            yankee = offset.bind(report)(verify);
            offset = yankee.add;
            verify = _closure1_slot3;
            tangon = 'hours';
            tangon = offset.bind(yankee)(verify, tangon);
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.bind(report)();
            entity = tangon > michal;
 90:
            if(entity) { _fun00004_ip = 181; continue _fun00003 }
 93:
            michal = option.raidDetectedAt;
            michal = zuuluu != michal;
            if(!michal) { _fun00004_ip = 178; continue _fun00003 }
 106:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 1;
            verify = golfie[zuuluu];
            report = undefined;
            verify = oscard.bind(report)(verify);
            option = option.raidDetectedAt;
            offset = verify.bind(report)(option);
            verify = offset.add;
            option = _closure1_slot3;
            tangon = 'hours';
            tangon = verify.bind(offset)(option, tangon);
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            michal = tangon > zuuluu;
 178:
            entity = michal;
 181:
            return entity;
        }
    };
    zuuluu['hasDetectedActivity'] = report;
    zuuluu['hasDetectedRaid'] = tangon;
    tangon = function(argFoo) { // Original name: hasDetectedDMRaid
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argFoo;
            michal = golfie.dmSpamDetectedAt;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 90; continue _fun00005 }
 18:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 1;
            option = oscard[michal];
            tangon = undefined;
            option = report.bind(tangon)(option);
            golfie = golfie.dmSpamDetectedAt;
            verify = option.bind(tangon)(golfie);
            option = verify.add;
            golfie = _closure1_slot3;
            zuuluu = 'hours';
            zuuluu = option.bind(verify)(golfie, zuuluu);
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            entity = zuuluu > michal;
 90:
            return entity;
        }
    };
    zuuluu['hasDetectedDMRaid'] = tangon;
    tangon = function(argFoo) { // Original name: getIncidentAlertType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            report = undefined;
            entity = undefined;
            if(michal) { _fun00008_ip = 74; continue _fun00007 }
 16:
            michal = _closure1_slot5;
            michal = michal.bind(report)(tangon);
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.GuildIncidentAlertTypes;
            if(michal) { _fun00008_ip = 65; continue _fun00007 }
 57:
            michal = zuuluu.DM_RAID;
            _fun00008_ip = 71; continue _fun00007;
 65:
            michal = zuuluu.JOIN_RAID;
 71:
            entity = michal;
 74:
            return entity;
        }
    };
    zuuluu['getIncidentAlertType'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getEnabledInterventions
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = new Array(0);
            michal = argFoo;
            if(!michal) { _fun00010_ip = 57; continue _fun00009 }
 10:
            zuuluu = entity.push;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.GuildIncidentActionTypes;
            michal = michal.INVITES_DISABLED;
            michal = zuuluu.bind(entity)(michal);
 57:
            michal = argBar;
            if(!michal) { _fun00010_ip = 110; continue _fun00009 }
 63:
            zuuluu = entity.push;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.GuildIncidentActionTypes;
            michal = michal.DMS_DISABLED;
            michal = zuuluu.bind(entity)(michal);
 110:
            return entity;
        }
    };
    zuuluu['getEnabledInterventions'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getDisabledInterventions
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = new Array(0);
            michal = argFoo;
            if(michal) { _fun00012_ip = 57; continue _fun00011 }
 10:
            zuuluu = entity.push;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.GuildIncidentActionTypes;
            michal = michal.INVITES_DISABLED;
            michal = zuuluu.bind(entity)(michal);
 57:
            michal = argBar;
            if(michal) { _fun00012_ip = 110; continue _fun00011 }
 63:
            zuuluu = entity.push;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.GuildIncidentActionTypes;
            michal = michal.DMS_DISABLED;
            michal = zuuluu.bind(entity)(michal);
 110:
            return entity;
        }
    };
    zuuluu['getDisabledInterventions'] = tangon;
    tangon = function(argFoo) { // Original name: isUnderLockdown
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            entity = tangon.dmsDisabledUntil;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00014_ip = 82; continue _fun00013 }
 18:
            michal = global;
            golfie = michal.Date;
            option = tangon.dmsDisabledUntil;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            verify = oscard;
            report = new verify[golfie](option, golfie);
            report = report instanceof Object ? report : oscard;
            michal = michal.Date;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            verify = oscard;
            michal = new verify[michal](option);
            michal = michal instanceof Object ? michal : oscard;
            entity = report > michal;
 82:
            if(entity) { _fun00014_ip = 165; continue _fun00013 }
 85:
            michal = tangon.invitesDisabledUntil;
            michal = zuuluu != michal;
            if(!michal) { _fun00014_ip = 162; continue _fun00013 }
 98:
            zuuluu = global;
            oscard = zuuluu.Date;
            option = tangon.invitesDisabledUntil;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            tangon = new verify[oscard](option, golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            verify = report;
            zuuluu = new verify[zuuluu](option);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal = tangon > zuuluu;
 162:
            entity = michal;
 165:
            return entity;
        }
    };
    zuuluu['isUnderLockdown'] = tangon;
    tangon = function(argFoo) { // Original name: hasDMsDisabled
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00016_ip = 20; continue _fun00015 }
 14:
            entity = zuuluu.dmsDisabledUntil;
 20:
            entity = michal != entity;
            if(!entity) { _fun00016_ip = 91; continue _fun00015 }
 27:
            michal = global;
            report = michal.Date;
            oscard = zuuluu.dmsDisabledUntil;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            zuuluu = new golfie[report](oscard, report);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            entity = zuuluu > michal;
 91:
            return entity;
        }
    };
    zuuluu['hasDMsDisabled'] = tangon;
    tangon = function(argFoo) { // Original name: hasInvitesDisabled
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00018_ip = 20; continue _fun00017 }
 14:
            entity = zuuluu.invitesDisabledUntil;
 20:
            entity = michal != entity;
            if(!entity) { _fun00018_ip = 91; continue _fun00017 }
 27:
            michal = global;
            report = michal.Date;
            oscard = zuuluu.invitesDisabledUntil;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            zuuluu = new golfie[report](oscard, report);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            entity = zuuluu > michal;
 91:
            return entity;
        }
    };
    zuuluu['hasInvitesDisabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getSecurityActionDetailsString
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golfie = argBar;
            romeon = entity.dmsDisabledUntil;
            michal = null;
            if(!(michal == romeon)) { _fun00020_ip = 24; continue _fun00019 }
 18:
            romeon = entity.invitesDisabledUntil;
 24:
            if(!(michal != romeon)) { _fun00020_ip = 518; continue _fun00019 }
 31:
            zuuluu = entity.dmsDisabledUntil;
            zuuluu = michal != zuuluu;
            entity = entity.invitesDisabledUntil;
            michal = michal != entity;
            tangon = zuuluu;
            if(!tangon) { _fun00020_ip = 60; continue _fun00019 }
 57:
            tangon = michal;
 60:
            entity = true;
            if(!(tangon !== entity)) { _fun00020_ip = 374; continue _fun00019 }
 69:
            if(!(zuuluu !== entity)) { _fun00020_ip = 230; continue _fun00019 }
 76:
            if(!(michal !== entity)) { _fun00020_ip = 86; continue _fun00019 }
 80:
            entity = '';
            return entity;
 86:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 3;
            entity = foxtra[oscard];
            offset = undefined;
            entity = yankee.bind(offset)(entity);
            tangon = entity.intl;
            zuuluu = tangon.formatToPlainString;
            entity = foxtra[oscard];
            entity = yankee.bind(offset)(entity);
            entity = entity.t;
            michal = entity.M3iSyM;
            entity = {};
            entity['guildName'] = golfie;
            option = global;
            option = option.Date;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            sizing = verify;
            kiloes = romeon;
            option = new sizing[option](kiloes, backup);
            verify = option instanceof Object ? option : verify;
            option = verify.toLocaleString;
            oscard = foxtra[oscard];
            oscard = yankee.bind(offset)(oscard);
            oscard = oscard.intl;
            oscard = oscard.currentLocale;
            report = _closure1_slot4;
            report = option.bind(verify)(oscard, report);
            entity['time'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 230:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 3;
            entity = foxtra[oscard];
            offset = undefined;
            entity = yankee.bind(offset)(entity);
            tangon = entity.intl;
            zuuluu = tangon.formatToPlainString;
            entity = foxtra[oscard];
            entity = yankee.bind(offset)(entity);
            entity = entity.t;
            michal = entity.HNKxf3;
            entity = {};
            entity['guildName'] = golfie;
            option = global;
            option = option.Date;
            verify = option.prototype;
            verify = Object.create(verify, {constructor: {value: option}});
            sizing = verify;
            kiloes = romeon;
            option = new sizing[option](kiloes, backup);
            verify = option instanceof Object ? option : verify;
            option = verify.toLocaleString;
            oscard = foxtra[oscard];
            oscard = yankee.bind(offset)(oscard);
            oscard = oscard.intl;
            oscard = oscard.currentLocale;
            report = _closure1_slot4;
            report = option.bind(verify)(oscard, report);
            entity['time'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 374:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 3;
            entity = yankee[oscard];
            verify = undefined;
            entity = offset.bind(verify)(entity);
            tangon = entity.intl;
            zuuluu = tangon.formatToPlainString;
            entity = yankee[oscard];
            entity = offset.bind(verify)(entity);
            entity = entity.t;
            michal = entity.hCZitb;
            entity = {};
            entity['guildName'] = golfie;
            golfie = global;
            golfie = golfie.Date;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            sizing = option;
            kiloes = romeon;
            golfie = new sizing[golfie](kiloes, backup);
            option = golfie instanceof Object ? golfie : option;
            golfie = option.toLocaleString;
            oscard = yankee[oscard];
            oscard = offset.bind(verify)(oscard);
            oscard = oscard.intl;
            oscard = oscard.currentLocale;
            report = _closure1_slot4;
            report = golfie.bind(option)(oscard, report);
            entity['time'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 518:
            entity = '';
            return entity;
        }
    };
    zuuluu['getSecurityActionDetailsString'] = michal;
    return entity;
})();