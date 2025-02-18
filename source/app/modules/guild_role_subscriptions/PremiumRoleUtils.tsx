// app/modules/guild_role_subscriptions/PremiumRoleUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/PremiumRoleUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isSubscriptionRole
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 35; continue _fun00001 }
 14:
            zuuluu = zuuluu.tags;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 35; continue _fun00001 }
 29:
            entity = zuuluu.subscription_listing_id;
 35:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['isSubscriptionRole'] = tangon;
    michal = function(argFoo) { // Original name: isSubscriptionRoleAvailableForPurchase
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            report = tangon == zuuluu;
            michal = undefined;
            entity = undefined;
            if(report) { _fun00004_ip = 39; continue _fun00003 }
 16:
            zuuluu = zuuluu.tags;
            tangon = tangon == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 39; continue _fun00003 }
 31:
            entity = zuuluu.available_for_purchase;
 39:
            entity = michal !== entity;
            return entity;
        }
    };
    zuuluu['isSubscriptionRoleAvailableForPurchase'] = michal;
    return entity;
})();