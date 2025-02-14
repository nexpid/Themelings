// app/modules/guild_role_subscriptions/PremiumRoleUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/PremiumRoleUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isSubscriptionRole
        _fun43964: for(var _fun43964_ip = 0; ; ) switch(_fun43964_ip) {
 0:
            zulu = argFoo;
            mike = null;
            tango = mike == zulu;
            entity = undefined;
            if(tango) { _fun43964_ip = 35; continue _fun43964 }
 14:
            zulu = zulu.tags;
            tango = mike == zulu;
            entity = undefined;
            if(tango) { _fun43964_ip = 35; continue _fun43964 }
 29:
            entity = zulu.subscription_listing_id;
 35:
            entity = mike != entity;
            return entity;
        }
    };
    zulu['isSubscriptionRole'] = tango;
    mike = function(argFoo) { // Original name: isSubscriptionRoleAvailableForPurchase
        _fun43965: for(var _fun43965_ip = 0; ; ) switch(_fun43965_ip) {
 0:
            zulu = argFoo;
            tango = null;
            report = tango == zulu;
            mike = undefined;
            entity = undefined;
            if(report) { _fun43965_ip = 39; continue _fun43965 }
 16:
            zulu = zulu.tags;
            tango = tango == zulu;
            entity = undefined;
            if(tango) { _fun43965_ip = 39; continue _fun43965 }
 31:
            entity = zulu.available_for_purchase;
 39:
            entity = mike !== entity;
            return entity;
        }
    };
    zulu['isSubscriptionRoleAvailableForPurchase'] = mike;
    return entity;
})();