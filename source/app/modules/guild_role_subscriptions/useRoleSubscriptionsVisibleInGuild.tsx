// app/modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: computeCanEveryoneInGuildSeeRoleSubscriptions
        _fun81296: for(var _fun81296_ip = 0; ; ) switch(_fun81296_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            golf = undefined;
            if(!(mike === golf)) { _fun81296_ip = 38; continue _fun81296 }
 12:
            report = _closure1_slot4;
            entity = new Array(2);
            entity[0] = report;
            zulu = _closure1_slot3;
            entity[1] = zulu;
            mike = entity;
 38:
            oscar = mike;
            entity = oscar[Symbol.iterator];
            oscar = entity().next;
            zulu = oscar().value;
            mike = entity;
            report = mike === golf;
            mike = undefined;
            if(report) { _fun81296_ip = 63; continue _fun81296 }
 60:
            mike = zulu;
 63:
            zulu = undefined;
            if(report) { _fun81296_ip = 93; continue _fun81296 }
 68:
            options = oscar().value;
            oscar = entity;
            oscar = oscar === golf;
            zulu = undefined;
            report = oscar;
            if(oscar) { _fun81296_ip = 93; continue _fun81296 }
 87:
            zulu = options;
            report = oscar;
 93:
            if(report) { _fun81296_ip = 99; continue _fun81296 }
 96:
            entity.return();
 99:
            entity = mike.getGuild;
            oscar = entity.bind(mike)(tango);
            entity = null;
            if(!(entity != oscar)) { _fun81296_ip = 204; continue _fun81296 }
 115:
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            report = report.bind(golf)(mike);
            mike = report.isCreatorMonetizationEnabledGuild;
            mike = mike.bind(report)(oscar);
            report = oscar.hasFeature;
            entity = _closure1_slot5;
            entity = entity.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            entity = report.bind(oscar)(entity);
            mike = !mike;
            if(mike) { _fun81296_ip = 179; continue _fun81296 }
 176:
            mike = !entity;
 179:
            entity = !mike;
            if(!mike) { _fun81296_ip = 202; continue _fun81296 }
 185:
            mike = zulu.isViewingServerShop;
            mike = mike.bind(zulu)(tango);
            mike = !mike;
            entity = !mike;
 202:
            return entity;
 204:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    tango = function(argFoo) { // Original name: useRoleSubscriptionsVisibleInGuild
        _fun81297: for(var _fun81297_ip = 0; ; ) switch(_fun81297_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            oscar = undefined;
            zulu = tango.bind(oscar)(zulu);
            zulu = zulu.bind(oscar)(report);
            tango = _closure1_slot0;
            options = 5;
            options = golf[options];
            offset = tango.bind(oscar)(options);
            verify = offset.useStateFromStores;
            yankee = _closure1_slot4;
            options = new Array(2);
            options[0] = yankee;
            mike = _closure1_slot3;
            options[1] = mike;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                tango = _closure1_slot6;
                zulu = _closure2_slot0;
                report = _closure1_slot4;
                mike = new Array(2);
                mike[0] = report;
                entity = _closure1_slot3;
                mike[1] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = verify.bind(offset)(options, entity, mike);
            entity = 6;
            entity = golf[entity];
            tango = tango.bind(oscar)(entity);
            entity = tango.useShouldHideGuildPurchaseEntryPoints;
            entity = entity.bind(tango)(report);
            entity = entity.shouldHideGuildPurchaseEntryPoints;
            entity = !entity;
            if(!entity) { _fun81297_ip = 146; continue _fun81297 }
 137:
            if(mike) { _fun81297_ip = 143; continue _fun81297 }
 140:
            mike = zulu;
 143:
            entity = mike;
 146:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
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
    report = oscar.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot5 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: areRoleSubscriptionsVisibleInGuild
        _fun81299: for(var _fun81299_ip = 0; ; ) switch(_fun81299_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot6;
            tango = undefined;
            zulu = entity.bind(tango)(report);
            entity = !zulu;
            entity = !entity;
            if(zulu) { _fun81299_ip = 61; continue _fun81299 }
 26:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.computeHasRoleSubscriptionsInGuild;
            mike = argBar;
            entity = zulu.bind(tango)(report, mike);
 61:
            return entity;
        }
    };
    zulu['areRoleSubscriptionsVisibleInGuild'] = report;
    zulu['useRoleSubscriptionsVisibleInGuild'] = tango;
    mike = function(argFoo) { // Original name: useShowRoleSubscriptionsInChannelList
        _fun81300: for(var _fun81300_ip = 0; ; ) switch(_fun81300_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot7;
            tango = undefined;
            entity = entity.bind(tango)(report);
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.useIsEligibleForSubscriptionsInGuildShop;
            mike = 'useShowRoleSubscriptionsInChannelList';
            mike = zulu.bind(tango)(report, mike);
            if(!entity) { _fun81300_ip = 67; continue _fun81300 }
 56:
            mike = !mike;
            if(mike) { _fun81300_ip = 64; continue _fun81300 }
 62:
            mike = true;
 64:
            entity = mike;
 67:
            return entity;
        }
    };
    zulu['useShowRoleSubscriptionsInChannelList'] = mike;
    return entity;
})();