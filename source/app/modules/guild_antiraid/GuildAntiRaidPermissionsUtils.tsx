// app/modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: canReportRaid
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = arguments[1];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            zuuluu = _closure1_slot2;
 19:
            tangon = zuuluu.can;
            entity = _closure1_slot5;
            entity = entity.BAN_MEMBERS;
            entity = tangon.bind(zuuluu)(entity, report);
            tangon = zuuluu;
            if(entity) { _fun00002_ip = 72; continue _fun00001 }
 50:
            oscard = tangon.can;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.KICK_MEMBERS;
            entity = oscard.bind(tangon)(zuuluu, report);
 72:
            if(entity) { _fun00002_ip = 97; continue _fun00001 }
 75:
            zuuluu = tangon.can;
            michal = _closure1_slot5;
            michal = michal.MANAGE_GUILD;
            entity = zuuluu.bind(tangon)(michal, report);
 97:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: canEnableRaidAlerts
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00004_ip = 16; continue _fun00003 }
 9:
            tangon = _closure1_slot2;
 16:
            zuuluu = tangon.can;
            entity = _closure1_slot5;
            michal = entity.MANAGE_GUILD;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(michal, entity);
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
    verify = oscard.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = verify;
    oscard = oscard.Permissions;
    var _closure1_slot5 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['canReportRaid'] = report;
    report = function(argFoo) { // Original name: useCanReportRaid
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 3;
            michal = golfie[tangon];
            oscard = undefined;
            romeon = report.bind(oscard)(michal);
            yankee = romeon.useStateFromStores;
            michal = _closure1_slot2;
            offset = new Array(1);
            offset[0] = michal;
            option = new Array(1);
            option[0] = verify;
            michal = function() {
                tangon = _closure1_slot6;
                zuuluu = _closure2_slot0;
                michal = _closure1_slot2;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = yankee.bind(romeon)(offset, michal, option);
            tangon = golfie[tangon];
            option = report.bind(oscard)(tangon);
            golfie = option.useStateFromStores;
            tangon = _closure1_slot3;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(1);
            tangon[0] = verify;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 43; continue _fun00007 }
 16:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.getGuildIncident;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            report = golfie.bind(option)(report, entity, tangon);
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00006_ip = 161; continue _fun00005 }
 130:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.hasDetectedActivity;
            entity = zuuluu.bind(tangon)(report);
 161:
            entity = !entity;
            if(!entity) { _fun00006_ip = 170; continue _fun00005 }
 167:
            entity = michal;
 170:
            return entity;
        }
    };
    zuuluu['useCanReportRaid'] = report;
    zuuluu['canEnableRaidAlerts'] = tangon;
    tangon = function(argFoo) { // Original name: useCanEnableRaidAlerts
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            tangon = _closure1_slot7;
            zuuluu = _closure2_slot0;
            michal = _closure1_slot2;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanEnableRaidAlerts'] = tangon;
    michal = function(argFoo) { // Original name: useShowMentionRaidLimitUpsell
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 3;
            tangon = oscard[zuuluu];
            zuuluu = undefined;
            offset = report.bind(zuuluu)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot2;
            option = new Array(1);
            option[0] = tangon;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = _closure1_slot2;
                    michal = undefined;
                    if(!(zuuluu === michal)) { _fun00012_ip = 24; continue _fun00011 }
 20:
                    zuuluu = _closure1_slot2;
 24:
                    michal = zuuluu.can;
                    entity = _closure1_slot5;
                    entity = entity.MANAGE_GUILD;
                    entity = michal.bind(zuuluu)(entity, tangon);
                    return entity;
                }
            };
            michal = verify.bind(offset)(option, michal, tangon);
            tangon = 5;
            tangon = oscard[tangon];
            report = report.bind(zuuluu)(tangon);
            tangon = report.useIsMentionRaidExperimentEnabled;
            oscard = null;
            option = oscard == golfie;
            if(option) { _fun00010_ip = 105; continue _fun00009 }
 100:
            zuuluu = golfie.id;
 105:
            if(!(oscard == zuuluu)) { _fun00010_ip = 113; continue _fun00009 }
 109:
            zuuluu = _closure1_slot4;
 113:
            entity = false;
            entity = tangon.bind(report)(zuuluu, entity);
            if(!entity) { _fun00010_ip = 127; continue _fun00009 }
 124:
            entity = michal;
 127:
            return entity;
        }
    };
    zuuluu['useShowMentionRaidLimitUpsell'] = michal;
    return entity;
})();