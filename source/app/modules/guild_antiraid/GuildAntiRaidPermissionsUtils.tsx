// app/modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: canReportRaid
        _fun114242: for(var _fun114242_ip = 0; ; ) switch(_fun114242_ip) {
 0:
            report = argFoo;
            zulu = arguments[1];
            entity = undefined;
            if(!(zulu === entity)) { _fun114242_ip = 19; continue _fun114242 }
 12:
            zulu = _closure1_slot2;
 19:
            tango = zulu.can;
            entity = _closure1_slot5;
            entity = entity.BAN_MEMBERS;
            entity = tango.bind(zulu)(entity, report);
            tango = zulu;
            if(entity) { _fun114242_ip = 72; continue _fun114242 }
 50:
            oscar = tango.can;
            zulu = _closure1_slot5;
            zulu = zulu.KICK_MEMBERS;
            entity = oscar.bind(tango)(zulu, report);
 72:
            if(entity) { _fun114242_ip = 97; continue _fun114242 }
 75:
            zulu = tango.can;
            mike = _closure1_slot5;
            mike = mike.MANAGE_GUILD;
            entity = zulu.bind(tango)(mike, report);
 97:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tango = function(argFoo) { // Original name: canEnableRaidAlerts
        _fun114243: for(var _fun114243_ip = 0; ; ) switch(_fun114243_ip) {
 0:
            tango = arguments[1];
            entity = undefined;
            if(!(tango === entity)) { _fun114243_ip = 16; continue _fun114243 }
 9:
            tango = _closure1_slot2;
 16:
            zulu = tango.can;
            entity = _closure1_slot5;
            mike = entity.MANAGE_GUILD;
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = verify;
    oscar = oscar.Permissions;
    var _closure1_slot5 = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['canReportRaid'] = report;
    report = function(argFoo) { // Original name: useCanReportRaid
        _fun114244: for(var _fun114244_ip = 0; ; ) switch(_fun114244_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 3;
            mike = golf[tango];
            oscar = undefined;
            romeo = report.bind(oscar)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot2;
            offset = new Array(1);
            offset[0] = mike;
            options = new Array(1);
            options[0] = verify;
            mike = function() {
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                mike = _closure1_slot2;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = yankee.bind(romeo)(offset, mike, options);
            tango = golf[tango];
            options = report.bind(oscar)(tango);
            golf = options.useStateFromStores;
            tango = _closure1_slot3;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(1);
            tango[0] = verify;
            entity = function() {
                _fun114246: for(var _fun114246_ip = 0; ; ) switch(_fun114246_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun114246_ip = 43; continue _fun114246 }
 16:
                    tango = _closure1_slot3;
                    zulu = tango.getGuildIncident;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 43:
                    return entity;
                }
            };
            report = golf.bind(options)(report, entity, tango);
            entity = null;
            entity = entity != report;
            if(!entity) { _fun114244_ip = 161; continue _fun114244 }
 130:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 4;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.hasDetectedActivity;
            entity = zulu.bind(tango)(report);
 161:
            entity = !entity;
            if(!entity) { _fun114244_ip = 170; continue _fun114244 }
 167:
            entity = mike;
 170:
            return entity;
        }
    };
    zulu['useCanReportRaid'] = report;
    zulu['canEnableRaidAlerts'] = tango;
    tango = function(argFoo) { // Original name: useCanEnableRaidAlerts
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot7;
            zulu = _closure2_slot0;
            mike = _closure1_slot2;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanEnableRaidAlerts'] = tango;
    mike = function(argFoo) { // Original name: useShowMentionRaidLimitUpsell
        _fun114249: for(var _fun114249_ip = 0; ; ) switch(_fun114249_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 3;
            tango = oscar[zulu];
            zulu = undefined;
            offset = report.bind(zulu)(tango);
            verify = offset.useStateFromStores;
            tango = _closure1_slot2;
            options = new Array(1);
            options[0] = tango;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                _fun114250: for(var _fun114250_ip = 0; ; ) switch(_fun114250_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot2;
                    mike = undefined;
                    if(!(zulu === mike)) { _fun114250_ip = 24; continue _fun114250 }
 20:
                    zulu = _closure1_slot2;
 24:
                    mike = zulu.can;
                    entity = _closure1_slot5;
                    entity = entity.MANAGE_GUILD;
                    entity = mike.bind(zulu)(entity, tango);
                    return entity;
                }
            };
            mike = verify.bind(offset)(options, mike, tango);
            tango = 5;
            tango = oscar[tango];
            report = report.bind(zulu)(tango);
            tango = report.useIsMentionRaidExperimentEnabled;
            oscar = null;
            options = oscar == golf;
            if(options) { _fun114249_ip = 105; continue _fun114249 }
 100:
            zulu = golf.id;
 105:
            if(!(oscar == zulu)) { _fun114249_ip = 113; continue _fun114249 }
 109:
            zulu = _closure1_slot4;
 113:
            entity = false;
            entity = tango.bind(report)(zulu, entity);
            if(!entity) { _fun114249_ip = 127; continue _fun114249 }
 124:
            entity = mike;
 127:
            return entity;
        }
    };
    zulu['useShowMentionRaidLimitUpsell'] = mike;
    return entity;
})();