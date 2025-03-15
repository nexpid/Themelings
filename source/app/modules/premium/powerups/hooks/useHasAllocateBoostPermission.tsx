// app/modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo, argBar) { // Original name: getHasAllocateBoostPermission
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = null;
            michal = zuuluu == tangon;
            entity = null;
            if(michal) { _fun00002_ip = 62; continue _fun00001 }
 17:
            michal = report.getGuildPermissions;
            michal = michal.bind(report)(tangon);
            michal = zuuluu == michal;
            entity = null;
            if(michal) { _fun00002_ip = 62; continue _fun00001 }
 37:
            zuuluu = report.can;
            michal = _closure1_slot3;
            michal = michal.ADMINISTRATOR;
            entity = zuuluu.bind(report)(michal, tangon);
 62:
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
    report = report.Permissions;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useHasAllocateBoostPermission
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getHasAllocateBoostPermission'] = michal;
    return entity;
})();