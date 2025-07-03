// app/modules/guild_settings/GuildInvitesDisabledUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: useInvitesDisabledPermission
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot3;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00002_ip = 49; continue _fun00001 }
 16:
                report = _closure1_slot3;
                tangon = report.can;
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.MANAGE_GUILD;
                michal = _closure2_slot0;
                entity = tangon.bind(report)(zuuluu, michal);
 49:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: useInvitesDisabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            golfie = tangon.bind(michal)(zuuluu);
            tangon = golfie.useStateFromStores;
            option = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00006_ip = 43; continue _fun00005 }
 16:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.getGuildIncident;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            tangon = tangon.bind(golfie)(zuuluu, entity);
            zuuluu = null;
            golfie = zuuluu == oscard;
            entity = undefined;
            if(golfie) { _fun00004_ip = 101; continue _fun00003 }
 75:
            golfie = oscard.features;
            oscard = golfie.has;
            report = _closure1_slot4;
            report = report.INVITES_DISABLED;
            entity = oscard.bind(golfie)(report);
 101:
            if(entity) { _fun00004_ip = 193; continue _fun00003 }
 104:
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00004_ip = 119; continue _fun00003 }
 113:
            michal = tangon.invitesDisabledUntil;
 119:
            michal = zuuluu != michal;
            if(!michal) { _fun00004_ip = 190; continue _fun00003 }
 126:
            zuuluu = global;
            oscard = zuuluu.Date;
            offset = tangon.invitesDisabledUntil;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            yankee = report;
            tangon = new yankee[oscard](offset, verify);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            yankee = report;
            zuuluu = new yankee[zuuluu](offset);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal = tangon > zuuluu;
 190:
            entity = michal;
 193:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.GuildFeatures;
    var _closure1_slot4 = verify;
    oscard = oscard.Permissions;
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_settings/GuildInvitesDisabledUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['useInvitesDisabledPermission'] = report;
    zuuluu['useInvitesDisabled'] = tangon;
    michal = function(argFoo) { // Original name: useShouldShowInvitesDisabledNotif
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot6;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(tangon);
            michal = _closure1_slot7;
            michal = michal.bind(zuuluu)(tangon);
            if(!entity) { _fun00008_ip = 32; continue _fun00007 }
 29:
            entity = michal;
 32:
            return entity;
        }
    };
    zuuluu['useShouldShowInvitesDisabledNotif'] = michal;
    return entity;
})();