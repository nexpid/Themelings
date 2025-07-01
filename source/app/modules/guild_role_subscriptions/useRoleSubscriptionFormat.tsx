// app/modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildRoleSubscriptionFormat;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    tangon = tangon.VIEW_CHANNEL;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useRoleSubscriptionFormat
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        oscard = report.bind(zuuluu)(tangon);
        report = oscard.useStateFromStores;
        zuuluu = _closure1_slot5;
        tangon = new Array(2);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot4;
        tangon[1] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot5;
                zuuluu = tangon.getGuild;
                entity = _closure2_slot0;
                oscard = zuuluu.bind(tangon)(entity);
                entity = null;
                zuuluu = entity != oscard;
                entity = undefined;
                if(!zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 35:
                report = _closure1_slot4;
                tangon = report.getRole;
                zuuluu = oscard.id;
                michal = oscard.getEveryoneRoleId;
                michal = michal.bind(oscard)();
                entity = tangon.bind(report)(zuuluu, michal);
 66:
                return entity;
            }
        };
        oscard = report.bind(oscard)(tangon, zuuluu);
        var _closure2_slot1 = oscard;
        report = _closure1_slot3;
        tangon = report.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                if(!(entity != zuuluu)) { _fun00004_ip = 78; continue _fun00003 }
 13:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 6;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.has;
                michal = _closure2_slot1;
                zuuluu = michal.permissions;
                michal = _closure1_slot7;
                michal = tangon.bind(report)(zuuluu, michal);
                if(michal) { _fun00004_ip = 78; continue _fun00003 }
 66:
                entity = _closure1_slot6;
                entity = entity.ALL_CHANNELS;
                _fun00004_ip = 91; continue _fun00003;
 78:
                michal = _closure1_slot6;
                entity = michal.SOME_CHANNELS;
 91:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(entity, zuuluu);
        entity = {};
        entity['format'] = zuuluu;
        michal = _closure1_slot6;
        michal = michal.ALL_CHANNELS;
        michal = zuuluu === michal;
        entity['isFullServerGating'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();