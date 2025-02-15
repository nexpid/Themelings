// app/modules/opt_in_channels/isOptInEnabled.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot6 = golf;
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/opt_in_channels/isOptInEnabled.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useOptInEnabledForGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(3);
        mike[0] = oscar;
        oscar = _closure1_slot2;
        mike[1] = oscar;
        report = _closure1_slot5;
        mike[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure1_slot4;
                entity = mike.isOptInEnabled;
                tango = _closure2_slot0;
                entity = entity.bind(mike)(tango);
                zulu = _closure1_slot2;
                mike = zulu.getGuild;
                options = mike.bind(zulu)(tango);
                zulu = null;
                mike = zulu == options;
                oscar = undefined;
                if(mike) { _fun00002_ip = 71; continue _fun00001 }
 50:
                golf = options.hasFeature;
                mike = _closure1_slot6;
                mike = mike.COMMUNITY;
                oscar = golf.bind(options)(mike);
 71:
                mike = zulu != oscar;
                if(!mike) { _fun00002_ip = 81; continue _fun00001 }
 78:
                mike = oscar;
 81:
                oscar = _closure1_slot5;
                report = oscar.getCurrentUser;
                oscar = report.bind(oscar)();
                report = zulu == oscar;
                tango = undefined;
                if(report) { _fun00002_ip = 113; continue _fun00001 }
 103:
                report = oscar.isStaff;
                tango = report.bind(oscar)();
 113:
                zulu = zulu != tango;
                if(!zulu) { _fun00002_ip = 123; continue _fun00001 }
 120:
                zulu = tango;
 123:
                if(!entity) { _fun00002_ip = 135; continue _fun00001 }
 126:
                if(mike) { _fun00002_ip = 132; continue _fun00001 }
 129:
                mike = zulu;
 132:
                entity = mike;
 135:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useOptInEnabledForGuild'] = tango;
    tango = function(argFoo) { // Original name: isOptInEnabledForGuild
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            mike = _closure1_slot2;
            entity = mike.getGuild;
            golf = entity.bind(mike)(report);
            mike = _closure1_slot5;
            entity = mike.getCurrentUser;
            oscar = entity.bind(mike)();
            mike = null;
            entity = mike != report;
            if(!entity) { _fun00004_ip = 46; continue _fun00003 }
 42:
            entity = mike != golf;
 46:
            if(!entity) { _fun00004_ip = 53; continue _fun00003 }
 49:
            entity = mike != oscar;
 53:
            if(!entity) { _fun00004_ip = 111; continue _fun00003 }
 56:
            tango = golf.hasFeature;
            mike = _closure1_slot6;
            mike = mike.COMMUNITY;
            mike = tango.bind(golf)(mike);
            if(mike) { _fun00004_ip = 90; continue _fun00003 }
 80:
            tango = oscar.isStaff;
            mike = tango.bind(oscar)();
 90:
            if(!mike) { _fun00004_ip = 108; continue _fun00003 }
 93:
            tango = _closure1_slot4;
            zulu = tango.isOptInEnabled;
            mike = zulu.bind(tango)(report);
 108:
            entity = mike;
 111:
            return entity;
        }
    };
    zulu['isOptInEnabledForGuild'] = tango;
    mike = function(argFoo) { // Original name: useShouldShowOnboardingAdminUpsellForGuild
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getGuild;
                entity = _closure2_slot0;
                report = zulu.bind(tango)(entity);
                oscar = _closure1_slot3;
                tango = oscar.can;
                entity = _closure1_slot7;
                zulu = entity.MANAGE_GUILD;
                tango = tango.bind(oscar)(zulu, report);
                zulu = oscar.can;
                entity = entity.MANAGE_ROLES;
                zulu = zulu.bind(oscar)(entity, report);
                entity = null;
                golf = entity == report;
                oscar = undefined;
                if(golf) { _fun00006_ip = 100; continue _fun00005 }
 79:
                golf = report.hasFeature;
                mike = _closure1_slot6;
                mike = mike.GUILD_ONBOARDING_EVER_ENABLED;
                oscar = golf.bind(report)(mike);
 100:
                mike = entity != oscar;
                if(!mike) { _fun00006_ip = 110; continue _fun00005 }
 107:
                mike = oscar;
 110:
                entity = entity != report;
                if(!entity) { _fun00006_ip = 120; continue _fun00005 }
 117:
                entity = tango;
 120:
                if(!entity) { _fun00006_ip = 126; continue _fun00005 }
 123:
                entity = zulu;
 126:
                if(!entity) { _fun00006_ip = 132; continue _fun00005 }
 129:
                entity = !mike;
 132:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useShouldShowOnboardingAdminUpsellForGuild'] = mike;
    return entity;
})();