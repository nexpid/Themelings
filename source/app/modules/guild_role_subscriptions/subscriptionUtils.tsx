// app/modules/guild_role_subscriptions/subscriptionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/subscriptionUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getRoleSubscriptionPlanId
        entity = argFoo;
        mike = entity.items;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 0;
        zulu = zulu[entity];
        oscar = undefined;
        report = tango.bind(oscar)(zulu);
        tango = mike.length;
        zulu = 1;
        tango = zulu === tango;
        zulu = 'more than 1 subscription item for role subscription';
        zulu = report.bind(oscar)(tango, zulu);
        entity = mike[entity];
        entity = entity.planId;
        return entity;
    };
    zulu['getRoleSubscriptionPlanId'] = tango;
    mike = function(argFoo) { // Original name: getRoleSubscriptionMutationPlanId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = null;
            report = tango == mike;
            entity = undefined;
            zulu = undefined;
            if(report) { _fun00002_ip = 37; continue _fun00001 }
 16:
            mike = mike.renewalMutations;
            report = tango == mike;
            zulu = undefined;
            if(report) { _fun00002_ip = 37; continue _fun00001 }
 31:
            zulu = mike.items;
 37:
            if(!(tango == zulu)) { _fun00002_ip = 43; continue _fun00001 }
 41:
            return entity;
 43:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            mike = 0;
            report = report[mike];
            golf = oscar.bind(entity)(report);
            oscar = zulu.length;
            report = 1;
            oscar = oscar <= report;
            report = 'more than 1 renewal mutation for role subscription';
            report = golf.bind(entity)(oscar, report);
            tango = tango == zulu;
            entity = undefined;
            if(tango) { _fun00002_ip = 108; continue _fun00001 }
 98:
            mike = zulu[mike];
            entity = mike.planId;
 108:
            return entity;
        }
    };
    zulu['getRoleSubscriptionMutationPlanId'] = mike;
    return entity;
})();