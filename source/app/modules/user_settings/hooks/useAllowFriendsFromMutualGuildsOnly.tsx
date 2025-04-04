// app/modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useAllowFriendsFromMutualGuildsOnly
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            tangon = zuuluu.FriendSourceFlagsSetting;
            zuuluu = tangon.useSetting;
            report = zuuluu.bind(tangon)();
            var _closure2_slot0 = report;
            tangon = _closure1_slot2;
            zuuluu = tangon.useMemo;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.computeFlags;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(entity, michal);
            entity = michal.mutualGuilds;
            if(!entity) { _fun00002_ip = 95; continue _fun00001 }
 86:
            michal = michal.all;
            entity = !michal;
 95:
            return entity;
        }
    };
    zuuluu['useAllowFriendsFromMutualGuildsOnly'] = michal;
    return entity;
})();