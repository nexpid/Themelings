// app/modules/user_settings/MFAUtils.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot5 = golf;
    golf = tango.UserFlags;
    var _closure1_slot6 = golf;
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/MFAUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getSMSBackupDisabledMessage
        _fun94609: for(var _fun94609_ip = 0; ; ) switch(_fun94609_ip) {
 0:
            entity = argFoo;
            mike = entity.hasAnyStaffLevel;
            mike = mike.bind(entity)();
            if(mike) { _fun94609_ip = 117; continue _fun94609 }
 16:
            tango = entity.hasFlag;
            zulu = _closure1_slot6;
            zulu = zulu.PARTNER;
            zulu = tango.bind(entity)(zulu);
            if(zulu) { _fun94609_ip = 117; continue _fun94609 }
 43:
            zulu = entity.email;
            entity = null;
            zulu = entity == zulu;
            if(!zulu) { _fun94609_ip = 115; continue _fun94609 }
 58:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 4;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.LfCBZG;
            entity = zulu.bind(tango)(mike);
 115:
            _fun94609_ip = 177; continue _fun94609;
 117:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 4;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Sq6Q1t;
            entity = zulu.bind(tango)(mike);
 177:
            return entity;
        }
    };
    zulu['getSMSBackupDisabledMessage'] = tango;
    mike = function() { // Original name: use2FARemoveDisableReason
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(3);
        mike[0] = report;
        report = _closure1_slot3;
        mike[1] = report;
        entity = _closure1_slot4;
        mike[2] = entity;
        entity = function() {
            _fun94611: for(var _fun94611_ip = 0; ; ) switch(_fun94611_ip) {
 0:
                zulu = _closure1_slot4;
                mike = zulu.getCurrentUser;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun94611_ip = 35; continue _fun94611 }
 22:
                zulu = tango.hasAnyStaffLevel;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun94611_ip = 151; continue _fun94611 }
 35:
                tango = _closure1_slot2;
                zulu = tango.getGuilds;
                report = zulu.bind(tango)();
                zulu = global;
                tango = zulu.Object;
                zulu = tango.values;
                report = zulu.bind(tango)(report);
                tango = report.some;
                zulu = function(argFoo) {
                    _fun94612: for(var _fun94612_ip = 0; ; ) switch(_fun94612_ip) {
 0:
                        report = argFoo;
                        zulu = report.hasFeature;
                        entity = _closure1_slot5;
                        entity = entity.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                        entity = zulu.bind(report)(entity);
                        if(!entity) { _fun94612_ip = 56; continue _fun94612 }
 30:
                        tango = _closure1_slot3;
                        zulu = tango.can;
                        mike = _closure1_slot7;
                        mike = mike.ADMINISTRATOR;
                        entity = zulu.bind(tango)(mike, report);
 56:
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                mike = null;
                if(!zulu) { _fun94611_ip = 149; continue _fun94611 }
 92:
                golf = _closure1_slot0;
                options = _closure1_slot1;
                zulu = 4;
                tango = options[zulu];
                oscar = undefined;
                tango = golf.bind(oscar)(tango);
                report = tango.intl;
                tango = report.string;
                zulu = options[zulu];
                zulu = golf.bind(oscar)(zulu);
                zulu = zulu.t;
                zulu = zulu.HC8uSU;
                mike = tango.bind(report)(zulu);
 149:
                return mike;
 151:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                entity = 4;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.3iKih4;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['use2FARemoveDisableReason'] = mike;
    return entity;
})();