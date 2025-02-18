// app/modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot2 = michal;
    michal = 1;
    report = golfie[michal];
    michal = argBaz;
    michal = michal.bind(entity)(report);
    var _closure1_slot3 = michal;
    michal = new Array(0);
    var _closure1_slot4 = michal;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useRoleSubscriptionEmojis
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        option = oscard.bind(zuuluu)(tangon);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot3;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        tangon = new Array(1);
        tangon[0] = report;
        zuuluu = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.getGuildEmoji;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = golfie.bind(option)(oscard, zuuluu, tangon);
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 13:
                zuuluu = _closure2_slot1;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.isRoleSubscriptionEmoji;
                    michal = _closure2_slot0;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                _fun00002_ip = 45; continue _fun00001;
 38:
                entity = _closure1_slot4;
 45:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['NO_EMOJIS_AVAILABLE'] = michal;
    return entity;
})();