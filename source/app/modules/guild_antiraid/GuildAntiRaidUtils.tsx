// app/modules/guild_antiraid/GuildAntiRaidUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: hasDetectedRaid
        _fun72470: for(var _fun72470_ip = 0; ; ) switch(_fun72470_ip) {
 0:
            golf = argFoo;
            mike = golf.raidDetectedAt;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun72470_ip = 90; continue _fun72470 }
 18:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 1;
            options = oscar[mike];
            tango = undefined;
            options = report.bind(tango)(options);
            golf = golf.raidDetectedAt;
            verify = options.bind(tango)(golf);
            options = verify.add;
            golf = _closure1_slot3;
            zulu = 'hours';
            zulu = options.bind(verify)(golf, zulu);
            mike = oscar[mike];
            mike = report.bind(tango)(mike);
            mike = mike.bind(tango)();
            entity = zulu > mike;
 90:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = golf.bind(entity)(report);
    report = report.NAGBAR_DISPLAY_MAX_HOURS;
    var _closure1_slot3 = report;
    report = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    var _closure1_slot4 = report;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_antiraid/GuildAntiRaidUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['DATE_CONFIG'] = report;
    report = function(argFoo) { // Original name: hasDetectedActivity
        _fun72471: for(var _fun72471_ip = 0; ; ) switch(_fun72471_ip) {
 0:
            options = argFoo;
            entity = options.dmSpamDetectedAt;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun72471_ip = 90; continue _fun72471 }
 18:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 1;
            verify = golf[mike];
            report = undefined;
            offset = oscar.bind(report)(verify);
            verify = options.dmSpamDetectedAt;
            yankee = offset.bind(report)(verify);
            offset = yankee.add;
            verify = _closure1_slot3;
            tango = 'hours';
            tango = offset.bind(yankee)(verify, tango);
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.bind(report)();
            entity = tango > mike;
 90:
            if(entity) { _fun72471_ip = 181; continue _fun72471 }
 93:
            mike = options.raidDetectedAt;
            mike = zulu != mike;
            if(!mike) { _fun72471_ip = 178; continue _fun72471 }
 106:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 1;
            verify = golf[zulu];
            report = undefined;
            verify = oscar.bind(report)(verify);
            options = options.raidDetectedAt;
            offset = verify.bind(report)(options);
            verify = offset.add;
            options = _closure1_slot3;
            tango = 'hours';
            tango = verify.bind(offset)(options, tango);
            zulu = golf[zulu];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.bind(report)();
            mike = tango > zulu;
 178:
            entity = mike;
 181:
            return entity;
        }
    };
    zulu['hasDetectedActivity'] = report;
    zulu['hasDetectedRaid'] = tango;
    tango = function(argFoo) { // Original name: hasDetectedDMRaid
        _fun72472: for(var _fun72472_ip = 0; ; ) switch(_fun72472_ip) {
 0:
            golf = argFoo;
            mike = golf.dmSpamDetectedAt;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun72472_ip = 90; continue _fun72472 }
 18:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 1;
            options = oscar[mike];
            tango = undefined;
            options = report.bind(tango)(options);
            golf = golf.dmSpamDetectedAt;
            verify = options.bind(tango)(golf);
            options = verify.add;
            golf = _closure1_slot3;
            zulu = 'hours';
            zulu = options.bind(verify)(golf, zulu);
            mike = oscar[mike];
            mike = report.bind(tango)(mike);
            mike = mike.bind(tango)();
            entity = zulu > mike;
 90:
            return entity;
        }
    };
    zulu['hasDetectedDMRaid'] = tango;
    tango = function(argFoo) { // Original name: getIncidentAlertType
        _fun72473: for(var _fun72473_ip = 0; ; ) switch(_fun72473_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            report = undefined;
            entity = undefined;
            if(mike) { _fun72473_ip = 74; continue _fun72473 }
 16:
            mike = _closure1_slot5;
            mike = mike.bind(report)(tango);
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 2;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.GuildIncidentAlertTypes;
            if(mike) { _fun72473_ip = 65; continue _fun72473 }
 57:
            mike = zulu.DM_RAID;
            _fun72473_ip = 71; continue _fun72473;
 65:
            mike = zulu.JOIN_RAID;
 71:
            entity = mike;
 74:
            return entity;
        }
    };
    zulu['getIncidentAlertType'] = tango;
    tango = function(argFoo, argBar) { // Original name: getEnabledInterventions
        _fun72474: for(var _fun72474_ip = 0; ; ) switch(_fun72474_ip) {
 0:
            entity = new Array(0);
            mike = argFoo;
            if(!mike) { _fun72474_ip = 57; continue _fun72474 }
 10:
            zulu = entity.push;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.GuildIncidentActionTypes;
            mike = mike.INVITES_DISABLED;
            mike = zulu.bind(entity)(mike);
 57:
            mike = argBar;
            if(!mike) { _fun72474_ip = 110; continue _fun72474 }
 63:
            zulu = entity.push;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.GuildIncidentActionTypes;
            mike = mike.DMS_DISABLED;
            mike = zulu.bind(entity)(mike);
 110:
            return entity;
        }
    };
    zulu['getEnabledInterventions'] = tango;
    tango = function(argFoo, argBar) { // Original name: getDisabledInterventions
        _fun72475: for(var _fun72475_ip = 0; ; ) switch(_fun72475_ip) {
 0:
            entity = new Array(0);
            mike = argFoo;
            if(mike) { _fun72475_ip = 57; continue _fun72475 }
 10:
            zulu = entity.push;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.GuildIncidentActionTypes;
            mike = mike.INVITES_DISABLED;
            mike = zulu.bind(entity)(mike);
 57:
            mike = argBar;
            if(mike) { _fun72475_ip = 110; continue _fun72475 }
 63:
            zulu = entity.push;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.GuildIncidentActionTypes;
            mike = mike.DMS_DISABLED;
            mike = zulu.bind(entity)(mike);
 110:
            return entity;
        }
    };
    zulu['getDisabledInterventions'] = tango;
    tango = function(argFoo) { // Original name: isUnderLockdown
        _fun72476: for(var _fun72476_ip = 0; ; ) switch(_fun72476_ip) {
 0:
            tango = argFoo;
            entity = tango.dmsDisabledUntil;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun72476_ip = 82; continue _fun72476 }
 18:
            mike = global;
            golf = mike.Date;
            options = tango.dmsDisabledUntil;
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            verify = oscar;
            report = new verify[golf](options, golf);
            report = report instanceof Object ? report : oscar;
            mike = mike.Date;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            verify = oscar;
            mike = new verify[mike](options);
            mike = mike instanceof Object ? mike : oscar;
            entity = report > mike;
 82:
            if(entity) { _fun72476_ip = 165; continue _fun72476 }
 85:
            mike = tango.invitesDisabledUntil;
            mike = zulu != mike;
            if(!mike) { _fun72476_ip = 162; continue _fun72476 }
 98:
            zulu = global;
            oscar = zulu.Date;
            options = tango.invitesDisabledUntil;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            tango = new verify[oscar](options, golf);
            tango = tango instanceof Object ? tango : report;
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            verify = report;
            zulu = new verify[zulu](options);
            zulu = zulu instanceof Object ? zulu : report;
            mike = tango > zulu;
 162:
            entity = mike;
 165:
            return entity;
        }
    };
    zulu['isUnderLockdown'] = tango;
    tango = function(argFoo) { // Original name: hasDMsDisabled
        _fun72477: for(var _fun72477_ip = 0; ; ) switch(_fun72477_ip) {
 0:
            zulu = argFoo;
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            if(tango) { _fun72477_ip = 20; continue _fun72477 }
 14:
            entity = zulu.dmsDisabledUntil;
 20:
            entity = mike != entity;
            if(!entity) { _fun72477_ip = 91; continue _fun72477 }
 27:
            mike = global;
            report = mike.Date;
            oscar = zulu.dmsDisabledUntil;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            zulu = new golf[report](oscar, report);
            zulu = zulu instanceof Object ? zulu : tango;
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            entity = zulu > mike;
 91:
            return entity;
        }
    };
    zulu['hasDMsDisabled'] = tango;
    tango = function(argFoo) { // Original name: hasInvitesDisabled
        _fun72478: for(var _fun72478_ip = 0; ; ) switch(_fun72478_ip) {
 0:
            zulu = argFoo;
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            if(tango) { _fun72478_ip = 20; continue _fun72478 }
 14:
            entity = zulu.invitesDisabledUntil;
 20:
            entity = mike != entity;
            if(!entity) { _fun72478_ip = 91; continue _fun72478 }
 27:
            mike = global;
            report = mike.Date;
            oscar = zulu.invitesDisabledUntil;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            zulu = new golf[report](oscar, report);
            zulu = zulu instanceof Object ? zulu : tango;
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            entity = zulu > mike;
 91:
            return entity;
        }
    };
    zulu['hasInvitesDisabled'] = tango;
    mike = function(argFoo, argBar) { // Original name: getSecurityActionDetailsString
        _fun72479: for(var _fun72479_ip = 0; ; ) switch(_fun72479_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            romeo = entity.dmsDisabledUntil;
            mike = null;
            if(!(mike == romeo)) { _fun72479_ip = 24; continue _fun72479 }
 18:
            romeo = entity.invitesDisabledUntil;
 24:
            if(!(mike != romeo)) { _fun72479_ip = 512; continue _fun72479 }
 31:
            zulu = entity.dmsDisabledUntil;
            zulu = mike != zulu;
            entity = entity.invitesDisabledUntil;
            mike = mike != entity;
            tango = zulu;
            if(!tango) { _fun72479_ip = 60; continue _fun72479 }
 57:
            tango = mike;
 60:
            entity = true;
            if(!(tango !== entity)) { _fun72479_ip = 370; continue _fun72479 }
 69:
            if(!(zulu !== entity)) { _fun72479_ip = 228; continue _fun72479 }
 76:
            if(!(mike !== entity)) { _fun72479_ip = 86; continue _fun72479 }
 80:
            entity = '';
            return entity;
 86:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 3;
            entity = foxtrot[oscar];
            offset = undefined;
            entity = yankee.bind(offset)(entity);
            tango = entity.intl;
            zulu = tango.formatToPlainString;
            entity = foxtrot[oscar];
            entity = yankee.bind(offset)(entity);
            entity = entity.t;
            mike = entity.M3iSyM;
            entity = {};
            entity['guildName'] = golf;
            options = global;
            options = options.Date;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            sizing = verify;
            kilo = romeo;
            options = new sizing[options](kilo, backup);
            verify = options instanceof Object ? options : verify;
            options = verify.toLocaleString;
            oscar = foxtrot[oscar];
            oscar = yankee.bind(offset)(oscar);
            oscar = oscar.intl;
            oscar = oscar.currentLocale;
            report = _closure1_slot4;
            report = options.bind(verify)(oscar, report);
            entity['time'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 228:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 3;
            entity = foxtrot[oscar];
            offset = undefined;
            entity = yankee.bind(offset)(entity);
            tango = entity.intl;
            zulu = tango.formatToPlainString;
            entity = foxtrot[oscar];
            entity = yankee.bind(offset)(entity);
            entity = entity.t;
            mike = entity.HNKxf3;
            entity = {};
            entity['guildName'] = golf;
            options = global;
            options = options.Date;
            verify = options.prototype;
            verify = Object.create(verify, {constructor: {value: options}});
            sizing = verify;
            kilo = romeo;
            options = new sizing[options](kilo, backup);
            verify = options instanceof Object ? options : verify;
            options = verify.toLocaleString;
            oscar = foxtrot[oscar];
            oscar = yankee.bind(offset)(oscar);
            oscar = oscar.intl;
            oscar = oscar.currentLocale;
            report = _closure1_slot4;
            report = options.bind(verify)(oscar, report);
            entity['time'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 370:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 3;
            entity = yankee[oscar];
            verify = undefined;
            entity = offset.bind(verify)(entity);
            tango = entity.intl;
            zulu = tango.formatToPlainString;
            entity = yankee[oscar];
            entity = offset.bind(verify)(entity);
            entity = entity.t;
            mike = entity.hCZitb;
            entity = {};
            entity['guildName'] = golf;
            golf = global;
            golf = golf.Date;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            sizing = options;
            kilo = romeo;
            golf = new sizing[golf](kilo, backup);
            options = golf instanceof Object ? golf : options;
            golf = options.toLocaleString;
            oscar = yankee[oscar];
            oscar = offset.bind(verify)(oscar);
            oscar = oscar.intl;
            oscar = oscar.currentLocale;
            report = _closure1_slot4;
            report = golf.bind(options)(oscar, report);
            entity['time'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 512:
            entity = '';
            return entity;
        }
    };
    zulu['getSecurityActionDetailsString'] = mike;
    return entity;
})();