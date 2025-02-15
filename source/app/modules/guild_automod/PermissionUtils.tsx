// app/modules/guild_automod/PermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot4 = golf;
    tango = tango.Permissions;
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: getHasAutomodAccess
        _fun120119: for(var _fun120119_ip = 0; ; ) switch(_fun120119_ip) {
 0:
            zulu = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(zulu === entity)) { _fun120119_ip = 19; continue _fun120119 }
 12:
            zulu = _closure1_slot2;
 19:
            if(!(report === entity)) { _fun120119_ip = 30; continue _fun120119 }
 23:
            report = _closure1_slot3;
 30:
            mike = zulu.getGuild;
            entity = argFoo;
            tango = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun120119_ip = 77; continue _fun120119 }
 52:
            zulu = report.can;
            mike = _closure1_slot5;
            mike = mike.MANAGE_GUILD;
            entity = zulu.bind(report)(mike, tango);
 77:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/PermissionUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: canCurrentUserManageMessageFilters
        _fun120120: for(var _fun120120_ip = 0; ; ) switch(_fun120120_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun120120_ip = 26; continue _fun120120 }
 12:
            zulu = _closure1_slot6;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 26:
            return entity;
        }
    };
    zulu['canCurrentUserManageMessageFilters'] = tango;
    tango = function(argFoo) { // Original name: canCurrentUserManageAutomod
        zulu = _closure1_slot6;
        mike = undefined;
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['canCurrentUserManageAutomod'] = tango;
    tango = function(argFoo) { // Original name: useCanCurrentUserManageAutomod
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot2;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot3;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            report = _closure1_slot6;
            tango = _closure2_slot0;
            zulu = _closure1_slot2;
            mike = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanCurrentUserManageAutomod'] = tango;
    mike = function(argFoo) { // Original name: useIsUserProfileRuleEnabled
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
            _fun120125: for(var _fun120125_ip = 0; ; ) switch(_fun120125_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getGuild;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                entity = null;
                zulu = entity == tango;
                entity = undefined;
                if(zulu) { _fun120125_ip = 56; continue _fun120125 }
 35:
                zulu = tango.hasFeature;
                mike = _closure1_slot4;
                mike = mike.COMMUNITY;
                entity = zulu.bind(tango)(mike);
 56:
                if(entity) { _fun120125_ip = 61; continue _fun120125 }
 59:
                entity = false;
 61:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useIsUserProfileRuleEnabled'] = mike;
    return entity;
})();