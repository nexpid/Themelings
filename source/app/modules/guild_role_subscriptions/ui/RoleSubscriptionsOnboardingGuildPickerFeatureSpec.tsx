// app/modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = {};
    golf = function() { // Original name: title
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 1;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.KzCF//;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['title'] = golf;
    golf = function() { // Original name: description
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 1;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.xMW8FB;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['description'] = golf;
    golf = false;
    mike['canCreateGuild'] = golf;
    tango = function() { // Original name: useIsGuildSupported
        zulu = _closure1_slot0;
        golf = _closure1_slot1;
        entity = 2;
        report = golf[entity];
        mike = undefined;
        oscar = zulu.bind(mike)(report);
        report = oscar.useStateFromStores;
        options = _closure1_slot2;
        tango = new Array(1);
        tango[0] = options;
        entity = golf[entity];
        entity = zulu.bind(mike)(entity);
        verify = entity.statesWillNeverBeEqual;
        yankee = function() {
            entity = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    report = argFoo;
                    mike = report.isOwner;
                    entity = argBar;
                    entity = mike.bind(report)(entity);
                    if(!entity) { _fun00002_ip = 223; continue _fun00001 }
 23:
                    options = _closure1_slot0;
                    verify = _closure1_slot1;
                    mike = 3;
                    mike = verify[mike];
                    golf = undefined;
                    tango = options.bind(golf)(mike);
                    zulu = tango.canSeeGuildRoleSubscriptionSettings;
                    mike = {'guild': null, 'isOwner': true, 'canManageGuildRoleSubscriptions': true};
                    mike['guild'] = report;
                    oscar = 4;
                    offset = verify[oscar];
                    romeo = options.bind(golf)(offset);
                    yankee = romeo.isMonetizationWaitlistEnabledForGuild;
                    offset = report.id;
                    offset = yankee.bind(romeo)(offset);
                    mike['isMonetizationWaitlistEnabledForGuild'] = offset;
                    offset = 5;
                    offset = verify[offset];
                    romeo = options.bind(golf)(offset);
                    yankee = romeo.isGuildEligibleForRoleSubscriptions;
                    offset = report.id;
                    offset = yankee.bind(romeo)(offset);
                    mike['isGuildEligibleForRoleSubscriptions'] = offset;
                    offset = verify[oscar];
                    yankee = options.bind(golf)(offset);
                    offset = yankee.isExpeditedMonetizationOnboardingGuild;
                    offset = offset.bind(yankee)(report);
                    mike['isExpeditedMonetizationOnboardingGuild'] = offset;
                    oscar = verify[oscar];
                    offset = options.bind(golf)(oscar);
                    oscar = offset.isUserInCreatorMonetizationEligibleCountry;
                    oscar = oscar.bind(offset)();
                    mike['isUserInCreatorMonetizationEligibleCountry'] = oscar;
                    oscar = 6;
                    oscar = verify[oscar];
                    golf = options.bind(golf)(oscar);
                    oscar = golf.shouldRestrictUpdatingCreatorMonetizationSettings;
                    report = report.id;
                    report = oscar.bind(golf)(report);
                    mike['shouldRestrictUpdatingRoleSubscriptionSettings'] = report;
                    entity = zulu.bind(tango)(mike);
 223:
                    return entity;
                }
            };
            return entity;
        };
        offset = new Array(0);
        foxtrot = oscar;
        romeo = tango;
        entity = foxtrot[report](romeo, yankee, offset, verify, options);
        return entity;
    };
    mike['useIsGuildSupported'] = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();