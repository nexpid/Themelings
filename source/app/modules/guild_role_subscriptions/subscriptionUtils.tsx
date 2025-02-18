// app/modules/guild_role_subscriptions/subscriptionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/subscriptionUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getRoleSubscriptionPlanId
        entity = argFoo;
        michal = entity.items;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 0;
        zuuluu = zuuluu[entity];
        oscard = undefined;
        report = tangon.bind(oscard)(zuuluu);
        tangon = michal.length;
        zuuluu = 1;
        tangon = zuuluu === tangon;
        zuuluu = 'more than 1 subscription item for role subscription';
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        entity = michal[entity];
        entity = entity.planId;
        return entity;
    };
    zuuluu['getRoleSubscriptionPlanId'] = tangon;
    michal = function(argFoo) { // Original name: getRoleSubscriptionMutationPlanId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = null;
            report = tangon == michal;
            entity = undefined;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 37; continue _fun00001 }
 16:
            michal = michal.renewalMutations;
            report = tangon == michal;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 37; continue _fun00001 }
 31:
            zuuluu = michal.items;
 37:
            if(!(tangon == zuuluu)) { _fun00002_ip = 43; continue _fun00001 }
 41:
            return entity;
 43:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            michal = 0;
            report = report[michal];
            golfie = oscard.bind(entity)(report);
            oscard = zuuluu.length;
            report = 1;
            oscard = oscard <= report;
            report = 'more than 1 renewal mutation for role subscription';
            report = golfie.bind(entity)(oscard, report);
            tangon = tangon == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 108; continue _fun00001 }
 98:
            michal = zuuluu[michal];
            entity = michal.planId;
 108:
            return entity;
        }
    };
    zuuluu['getRoleSubscriptionMutationPlanId'] = michal;
    return entity;
})();