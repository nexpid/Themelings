// app/modules/avatar_decorations/useAvatarDecoration.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar) { // Original name: getAvatarDecoration
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = argBar;
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun00002_ip = 33; continue _fun00001 }
 15:
            tangon = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            report = zuuluu;
 33:
            tangon = _closure1_slot2;
            zuuluu = 1;
            tangon = tangon.bind(entity)(report, zuuluu);
            zuuluu = 0;
            golfie = tangon[zuuluu];
            zuuluu = null;
            report = zuuluu != option;
            tangon = null;
            if(!report) { _fun00002_ip = 83; continue _fun00001 }
 66:
            oscard = golfie.getMember;
            report = michal.id;
            tangon = oscard.bind(golfie)(option, report);
 83:
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 98; continue _fun00001 }
 92:
            entity = tangon.avatarDecoration;
 98:
            if(!(zuuluu == entity)) { _fun00002_ip = 108; continue _fun00001 }
 102:
            entity = michal.avatarDecoration;
 108:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/avatar_decorations/useAvatarDecoration.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: useAvatarDecoration
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            report = _closure1_slot4;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            entity = _closure1_slot3;
            michal = new Array(1);
            michal[0] = entity;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useAvatarDecoration'] = tangon;
    zuuluu['getAvatarDecoration'] = michal;
    return entity;
})();