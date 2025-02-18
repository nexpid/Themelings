// app/modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function() { // Original name: getUserRoleSubscriptionRelationship
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 29; continue _fun00001 }
 11:
            tangon = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            report = zuuluu;
 29:
            zuuluu = report;
            tangon = zuuluu[Symbol.iterator];
            zuuluu = tangon().next;
            oscard = zuuluu().value;
            zuuluu = tangon;
            report = zuuluu === entity;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 54; continue _fun00001 }
 51:
            zuuluu = oscard;
 54:
            var _closure2_slot0 = zuuluu;
            if(report) { _fun00002_ip = 64; continue _fun00001 }
 61:
            tangon.return();
 64:
            var _closure2_slot1 = entity;
            entity = zuuluu.getGuildIdsWithPurchasableRoles;
            entity = entity.bind(zuuluu)();
            zuuluu = false;
            _closure2_slot1 = zuuluu;
            tangon = entity.forEach;
            zuuluu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.getUserSubscriptionRoles;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = entity.size;
                    entity = 0;
                    if(!(zuuluu > entity)) { _fun00004_ip = 38; continue _fun00003 }
 32:
                    entity = true;
                    _closure2_slot1 = entity;
 38:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = tangon.bind(entity)(zuuluu);
            michal = _closure2_slot1;
            if(michal) { _fun00002_ip = 151; continue _fun00001 }
 110:
            michal = entity.size;
            entity = 0;
            if(!(entity !== michal)) { _fun00002_ip = 136; continue _fun00001 }
 121:
            entity = _closure1_slot3;
            entity = entity.IN_SUBSCRIPTION_SERVER;
            _fun00002_ip = 149; continue _fun00001;
 136:
            michal = _closure1_slot3;
            entity = michal.NONE;
 149:
            _fun00002_ip = 164; continue _fun00001;
 151:
            michal = _closure1_slot3;
            entity = michal.SUBSCRIBED;
 164:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: useUserRoleSubscriptionRelationship
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot4;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getUserRoleSubscriptionRelationship'] = michal;
    return entity;
})();