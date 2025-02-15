// app/modules/age_gate/native/AgeGateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = global;
    offset = tango.Object;
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
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    options = oscar.bind(entity)(report);
    report = options.GuildNSFWContentLevel;
    var _closure1_slot6 = report;
    options = options.Permissions;
    var _closure1_slot7 = options;
    options = tango.Set;
    verify = report.EXPLICIT;
    tango = new Array(2);
    tango[0] = verify;
    report = report.AGE_RESTRICTED;
    tango[1] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    backup = report;
    foxtrot = tango;
    tango = new backup[options](foxtrot, romeo);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot8 = tango;
    tango = function(argFoo) { // Original name: isNSFWInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot8;
            mike = zulu.has;
            report = null;
            golf = report == oscar;
            entity = undefined;
            if(golf) { _fun00002_ip = 46; continue _fun00001 }
 26:
            oscar = oscar.guild;
            golf = report == oscar;
            entity = undefined;
            if(golf) { _fun00002_ip = 46; continue _fun00001 }
 40:
            entity = oscar.nsfw_level;
 46:
            if(!(report == entity)) { _fun00002_ip = 60; continue _fun00001 }
 50:
            tango = _closure1_slot6;
            entity = tango.DEFAULT;
 60:
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/age_gate/native/AgeGateUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['isNSFWInvite'] = tango;
    tango = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            verify = undefined;
            mike = mike.bind(verify)(entity);
            entity = mike.isIOS;
            entity = entity.bind(mike)();
            if(entity) { _fun00004_ip = 45; continue _fun00003 }
 41:
            entity = false;
            return entity;
 45:
            entity = _closure1_slot9;
            mike = entity.bind(verify)(golf);
            report = _closure1_slot3;
            tango = report.getGuild;
            options = null;
            oscar = options == golf;
            entity = undefined;
            if(oscar) { _fun00004_ip = 93; continue _fun00003 }
 74:
            oscar = golf.guild;
            offset = options == oscar;
            entity = undefined;
            if(offset) { _fun00004_ip = 93; continue _fun00003 }
 88:
            entity = oscar.id;
 93:
            entity = tango.bind(report)(entity);
            entity = options != entity;
            mike = !mike;
            if(mike) { _fun00004_ip = 111; continue _fun00003 }
 108:
            mike = entity;
 111:
            entity = !mike;
            if(mike) { _fun00004_ip = 219; continue _fun00003 }
 117:
            report = _closure1_slot1;
            mike = _closure1_slot2;
            tango = 5;
            tango = mike[tango];
            report = report.bind(verify)(tango);
            tango = report.pushLazy;
            oscar = _closure1_slot0;
            zulu = 7;
            zulu = mike[zulu];
            oscar = oscar.bind(verify)(zulu);
            zulu = 6;
            zulu = mike[zulu];
            mike = mike.paths;
            zulu = oscar.bind(verify)(zulu, mike);
            mike = {};
            offset = options == golf;
            oscar = undefined;
            if(offset) { _fun00004_ip = 207; continue _fun00003 }
 188:
            golf = golf.guild;
            options = options == golf;
            oscar = undefined;
            if(options) { _fun00004_ip = 207; continue _fun00003 }
 202:
            oscar = golf.id;
 207:
            mike['guildId'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = true;
 219:
            return entity;
        }
    };
    zulu['handleNSFWGuildInvite'] = tango;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            entity = tango[entity];
            golf = undefined;
            zulu = zulu.bind(golf)(entity);
            entity = zulu.isIOS;
            entity = entity.bind(zulu)();
            if(entity) { _fun00006_ip = 42; continue _fun00005 }
 38:
            entity = false;
            return entity;
 42:
            tango = _closure1_slot3;
            zulu = tango.getGuild;
            entity = argFoo;
            oscar = zulu.bind(tango)(entity);
            zulu = _closure1_slot5;
            entity = zulu.getCurrentUser;
            tango = entity.bind(zulu)();
            entity = null;
            if(!(entity != oscar)) { _fun00006_ip = 311; continue _fun00005 }
 81:
            if(!(entity != tango)) { _fun00006_ip = 311; continue _fun00005 }
 88:
            report = _closure1_slot4;
            zulu = report.can;
            entity = _closure1_slot7;
            entity = entity.ADMINISTRATOR;
            entity = zulu.bind(report)(entity, oscar);
            if(entity) { _fun00006_ip = 143; continue _fun00005 }
 117:
            options = _closure1_slot4;
            report = options.can;
            zulu = _closure1_slot7;
            zulu = zulu.MANAGE_GUILD;
            entity = report.bind(options)(zulu, oscar);
 143:
            if(entity) { _fun00006_ip = 172; continue _fun00005 }
 146:
            options = _closure1_slot4;
            report = options.can;
            zulu = _closure1_slot7;
            zulu = zulu.KICK_MEMBERS;
            entity = report.bind(options)(zulu, oscar);
 172:
            if(entity) { _fun00006_ip = 201; continue _fun00005 }
 175:
            options = _closure1_slot4;
            report = options.can;
            zulu = _closure1_slot7;
            zulu = zulu.BAN_MEMBERS;
            entity = report.bind(options)(zulu, oscar);
 201:
            options = oscar.nsfwLevel;
            report = _closure1_slot6;
            zulu = report.AGE_RESTRICTED;
            zulu = options === zulu;
            oscar = oscar.nsfwLevel;
            report = report.EXPLICIT;
            report = oscar === report;
            tango = tango.nsfwAllowed;
            if(!tango) { _fun00006_ip = 282; continue _fun00005 }
 246:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 8;
            mike = options[mike];
            mike = oscar.bind(golf)(mike);
            oscar = mike.ViewNsfwGuilds;
            mike = oscar.getSetting;
            tango = mike.bind(oscar)();
 282:
            entity = !entity;
            if(!entity) { _fun00006_ip = 309; continue _fun00005 }
 288:
            mike = !report;
            mike = !mike;
            if(report) { _fun00006_ip = 306; continue _fun00005 }
 297:
            if(!zulu) { _fun00006_ip = 303; continue _fun00005 }
 300:
            zulu = !tango;
 303:
            mike = zulu;
 306:
            entity = mike;
 309:
            return entity;
 311:
            entity = false;
            return entity;
        }
    };
    zulu['shouldNSFWGateGuild'] = mike;
    return entity;
})();