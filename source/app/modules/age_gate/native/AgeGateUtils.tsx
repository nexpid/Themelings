// app/modules/age_gate/native/AgeGateUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    option = oscard.bind(entity)(report);
    report = option.GuildNSFWContentLevel;
    var _closure1_slot6 = report;
    option = option.Permissions;
    var _closure1_slot7 = option;
    option = tangon.Set;
    verify = report.EXPLICIT;
    tangon = new Array(2);
    tangon[0] = verify;
    report = report.AGE_RESTRICTED;
    tangon[1] = report;
    report = option.prototype;
    report = Object.create(report, {constructor: {value: option}});
    backup = report;
    foxtra = tangon;
    tangon = new backup[option](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: isNSFWInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot8;
            michal = zuuluu.has;
            report = null;
            golfie = report == oscard;
            entity = undefined;
            if(golfie) { _fun00002_ip = 46; continue _fun00001 }
 26:
            oscard = oscard.guild;
            golfie = report == oscard;
            entity = undefined;
            if(golfie) { _fun00002_ip = 46; continue _fun00001 }
 40:
            entity = oscard.nsfw_level;
 46:
            if(!(report == entity)) { _fun00002_ip = 60; continue _fun00001 }
 50:
            tangon = _closure1_slot6;
            entity = tangon.DEFAULT;
 60:
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/age_gate/native/AgeGateUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isNSFWInvite'] = tangon;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            verify = undefined;
            michal = michal.bind(verify)(entity);
            entity = michal.isIOS;
            entity = entity.bind(michal)();
            if(entity) { _fun00004_ip = 45; continue _fun00003 }
 41:
            entity = false;
            return entity;
 45:
            entity = _closure1_slot9;
            michal = entity.bind(verify)(golfie);
            report = _closure1_slot3;
            tangon = report.getGuild;
            option = null;
            oscard = option == golfie;
            entity = undefined;
            if(oscard) { _fun00004_ip = 93; continue _fun00003 }
 74:
            oscard = golfie.guild;
            offset = option == oscard;
            entity = undefined;
            if(offset) { _fun00004_ip = 93; continue _fun00003 }
 88:
            entity = oscard.id;
 93:
            entity = tangon.bind(report)(entity);
            entity = option != entity;
            michal = !michal;
            if(michal) { _fun00004_ip = 111; continue _fun00003 }
 108:
            michal = entity;
 111:
            entity = !michal;
            if(michal) { _fun00004_ip = 219; continue _fun00003 }
 117:
            report = _closure1_slot1;
            michal = _closure1_slot2;
            tangon = 5;
            tangon = michal[tangon];
            report = report.bind(verify)(tangon);
            tangon = report.pushLazy;
            oscard = _closure1_slot0;
            zuuluu = 7;
            zuuluu = michal[zuuluu];
            oscard = oscard.bind(verify)(zuuluu);
            zuuluu = 6;
            zuuluu = michal[zuuluu];
            michal = michal.paths;
            zuuluu = oscard.bind(verify)(zuuluu, michal);
            michal = {};
            offset = option == golfie;
            oscard = undefined;
            if(offset) { _fun00004_ip = 207; continue _fun00003 }
 188:
            golfie = golfie.guild;
            option = option == golfie;
            oscard = undefined;
            if(option) { _fun00004_ip = 207; continue _fun00003 }
 202:
            oscard = golfie.id;
 207:
            michal['guildId'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = true;
 219:
            return entity;
        }
    };
    zuuluu['handleNSFWGuildInvite'] = tangon;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 4;
            entity = tangon[entity];
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.isIOS;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00006_ip = 42; continue _fun00005 }
 38:
            entity = false;
            return entity;
 42:
            tangon = _closure1_slot3;
            zuuluu = tangon.getGuild;
            entity = argFoo;
            oscard = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != oscard)) { _fun00006_ip = 311; continue _fun00005 }
 81:
            if(!(entity != tangon)) { _fun00006_ip = 311; continue _fun00005 }
 88:
            report = _closure1_slot4;
            zuuluu = report.can;
            entity = _closure1_slot7;
            entity = entity.ADMINISTRATOR;
            entity = zuuluu.bind(report)(entity, oscard);
            if(entity) { _fun00006_ip = 143; continue _fun00005 }
 117:
            option = _closure1_slot4;
            report = option.can;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.MANAGE_GUILD;
            entity = report.bind(option)(zuuluu, oscard);
 143:
            if(entity) { _fun00006_ip = 172; continue _fun00005 }
 146:
            option = _closure1_slot4;
            report = option.can;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.KICK_MEMBERS;
            entity = report.bind(option)(zuuluu, oscard);
 172:
            if(entity) { _fun00006_ip = 201; continue _fun00005 }
 175:
            option = _closure1_slot4;
            report = option.can;
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.BAN_MEMBERS;
            entity = report.bind(option)(zuuluu, oscard);
 201:
            option = oscard.nsfwLevel;
            report = _closure1_slot6;
            zuuluu = report.AGE_RESTRICTED;
            zuuluu = option === zuuluu;
            oscard = oscard.nsfwLevel;
            report = report.EXPLICIT;
            report = oscard === report;
            tangon = tangon.nsfwAllowed;
            if(!tangon) { _fun00006_ip = 282; continue _fun00005 }
 246:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 8;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            oscard = michal.ViewNsfwGuilds;
            michal = oscard.getSetting;
            tangon = michal.bind(oscard)();
 282:
            entity = !entity;
            if(!entity) { _fun00006_ip = 309; continue _fun00005 }
 288:
            michal = !report;
            michal = !michal;
            if(report) { _fun00006_ip = 306; continue _fun00005 }
 297:
            if(!zuuluu) { _fun00006_ip = 303; continue _fun00005 }
 300:
            zuuluu = !tangon;
 303:
            michal = zuuluu;
 306:
            entity = michal;
 309:
            return entity;
 311:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldNSFWGateGuild'] = michal;
    return entity;
})();