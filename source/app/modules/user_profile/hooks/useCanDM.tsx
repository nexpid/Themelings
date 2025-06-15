// app/modules/user_profile/hooks/useCanDM.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useCanDM.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useCanDM
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 5;
        golfie = oscard[michal];
        zuuluu = undefined;
        offset = tangon.bind(zuuluu)(golfie);
        verify = offset.useStateFromStores;
        golfie = _closure1_slot4;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            michal = _closure1_slot4;
            entity = michal.getId;
            michal = entity.bind(michal)();
            entity = _closure2_slot0;
            entity = michal === entity;
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        var _closure2_slot2 = golfie;
        golfie = oscard[michal];
        offset = tangon.bind(zuuluu)(golfie);
        verify = offset.useStateFromStores;
        golfie = _closure1_slot3;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00002_ip = 38; continue _fun00001 }
 16:
                tangon = _closure1_slot3;
                zuuluu = tangon.isLurking;
                michal = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal);
 38:
                return entity;
            }
        };
        golfie = verify.bind(offset)(option, golfie);
        var _closure2_slot3 = golfie;
        golfie = 6;
        golfie = oscard[golfie];
        golfie = tangon.bind(zuuluu)(golfie);
        option = golfie.RestrictedGuildIds;
        golfie = option.useSetting;
        golfie = golfie.bind(option)();
        var _closure2_slot4 = golfie;
        michal = oscard[michal];
        tangon = tangon.bind(zuuluu)(michal);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot6;
        michal = new Array(3);
        michal[0] = oscard;
        oscard = _closure1_slot5;
        michal[1] = oscard;
        report = _closure1_slot2;
        michal[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
                entity = !entity;
                if(!entity) { _fun00004_ip = 20; continue _fun00003 }
 13:
                zuuluu = _closure2_slot3;
                entity = !zuuluu;
 20:
                if(!entity) { _fun00004_ip = 96; continue _fun00003 }
 23:
                oscard = _closure1_slot6;
                report = oscard.isFriend;
                zuuluu = _closure2_slot0;
                zuuluu = report.bind(oscard)(zuuluu);
                if(zuuluu) { _fun00004_ip = 93; continue _fun00003 }
 48:
                oscard = _closure1_slot5;
                report = oscard.memberOf;
                tangon = _closure2_slot0;
                oscard = report.bind(oscard)(tangon);
                report = oscard.find;
                tangon = function(argFoo) {
                    zuuluu = _closure2_slot4;
                    michal = zuuluu.includes;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
                report = report.bind(oscard)(tangon);
                tangon = null;
                zuuluu = tangon != report;
 93:
                entity = zuuluu;
 96:
                if(entity) { _fun00004_ip = 176; continue _fun00003 }
 99:
                report = _closure1_slot2;
                tangon = report.getGameFriendsForUser;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(michal);
                tangon = michal.length;
                michal = 0;
                michal = tangon > michal;
                if(!michal) { _fun00004_ip = 173; continue _fun00003 }
 135:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 6;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                tangon = zuuluu.AllowGameFriendDmsInDiscord;
                zuuluu = tangon.getSetting;
                michal = zuuluu.bind(tangon)();
 173:
                entity = michal;
 176:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();