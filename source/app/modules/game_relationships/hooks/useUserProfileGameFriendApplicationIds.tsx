// app/modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = new Array(0);
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_relationships/hooks/useUserProfileGameFriendApplicationIds.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUserProfileGameFriendApplicationIds
        michal = argFoo;
        offset = michal.userId;
        var _closure2_slot0 = offset;
        option = michal.location;
        report = _closure1_slot0;
        verify = _closure1_slot1;
        zuuluu = 3;
        zuuluu = verify[zuuluu];
        tangon = undefined;
        yankee = report.bind(tangon)(zuuluu);
        golfie = yankee.useStateFromStores;
        zuuluu = _closure1_slot3;
        oscard = new Array(2);
        oscard[0] = zuuluu;
        zuuluu = _closure1_slot4;
        oscard[1] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot3;
                tangon = report.isFriend;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(entity);
                if(entity) { _fun00002_ip = 67; continue _fun00001 }
 28:
                tangon = _closure1_slot4;
                zuuluu = tangon.getUser;
                michal = _closure2_slot0;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = null;
                tangon = michal == zuuluu;
                michal = undefined;
                if(tangon) { _fun00002_ip = 64; continue _fun00001 }
 58:
                michal = zuuluu.isProvisional;
 64:
                entity = michal;
 67:
                return entity;
            }
        };
        oscard = golfie.bind(yankee)(oscard, zuuluu);
        var _closure2_slot1 = oscard;
        zuuluu = 4;
        zuuluu = verify[zuuluu];
        golfie = report.bind(tangon)(zuuluu);
        zuuluu = golfie.useGameFriendsForUser;
        golfie = zuuluu.bind(golfie)(offset);
        var _closure2_slot2 = golfie;
        zuuluu = 5;
        zuuluu = verify[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.useIsFriendTiersUIEnabled;
        zuuluu = {};
        zuuluu['location'] = option;
        report = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot3;
                if(!michal) { _fun00004_ip = 42; continue _fun00003 }
 10:
                michal = _closure2_slot1;
                if(michal) { _fun00004_ip = 42; continue _fun00003 }
 17:
                zuuluu = _closure2_slot2;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = entity.applicationId;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                _fun00004_ip = 49; continue _fun00003;
 42:
                entity = _closure1_slot5;
 49:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useUserProfileGameFriendApplicationIds'] = michal;
    return entity;
})();