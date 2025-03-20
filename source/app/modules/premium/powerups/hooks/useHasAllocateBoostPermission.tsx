// app/modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
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
            michal = _closure1_slot4;
            michal = michal.ADMINISTRATOR;
            entity = zuuluu.bind(report)(michal, tangon);
 62:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
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
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useHasAllocateBoostPermission
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot2;
        michal[1] = report;
        entity = function() {
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            report = _closure1_slot2;
            michal = report.getGuild;
            entity = _closure2_slot0;
            michal = michal.bind(report)(entity);
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