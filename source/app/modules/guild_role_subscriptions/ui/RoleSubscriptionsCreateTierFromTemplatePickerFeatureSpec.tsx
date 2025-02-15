// app/modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.GuildFeatures;
    var _closure1_slot4 = golf;
    mike = mike.Permissions;
    var _closure1_slot5 = mike;
    mike = {};
    golf = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 3;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.aTFQKi;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = golf;
    golf = function() { // Original name: description
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 3;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.oTbFQk;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['description'] = golf;
    golf = false;
    mike['canCreateGuild'] = golf;
    tango = function() { // Original name: useIsGuildSupported
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        report = tango.bind(mike)(zulu);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(2);
        zulu[0] = mike;
        entity = _closure1_slot3;
        zulu[1] = entity;
        mike = function() {
            entity = function(argFoo) {
                _fun107569: for(var _fun107569_ip = 0; ; ) switch(_fun107569_ip) {
 0:
                    mike = argFoo;
                    tango = mike.hasFeature;
                    entity = _closure1_slot4;
                    entity = entity.ROLE_SUBSCRIPTIONS_ENABLED;
                    entity = tango.bind(mike)(entity);
                    if(!entity) { _fun107569_ip = 54; continue _fun107569 }
 30:
                    report = mike.hasFeature;
                    tango = _closure1_slot4;
                    tango = tango.CREATOR_MONETIZABLE_RESTRICTED;
                    tango = report.bind(mike)(tango);
                    entity = !tango;
 54:
                    if(!entity) { _fun107569_ip = 83; continue _fun107569 }
 57:
                    oscar = _closure1_slot3;
                    report = oscar.can;
                    tango = _closure1_slot5;
                    tango = tango.ADMINISTRATOR;
                    entity = report.bind(oscar)(tango, mike);
 83:
                    if(!entity) { _fun107569_ip = 118; continue _fun107569 }
 86:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 5;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.isUserEligibleForTierTemplates;
                    entity = tango.bind(report)();
 118:
                    if(!entity) { _fun107569_ip = 159; continue _fun107569 }
 121:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 5;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.isGuildEligibleForTierTemplates;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 159:
                    return entity;
                }
            };
            return entity;
        };
        entity = new Array(0);
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    mike['useIsGuildSupported'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();