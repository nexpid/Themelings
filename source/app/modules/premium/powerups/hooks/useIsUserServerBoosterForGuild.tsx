// app/modules/premium/powerups/hooks/useIsUserServerBoosterForGuild.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getIsRoleServerBooster
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.tags;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 38; continue _fun00001 }
 18:
            michal = michal.tags;
            zuuluu = michal.premium_subscriber;
            michal = undefined;
            entity = michal !== zuuluu;
 38:
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = function(argFoo, argBar) { // Original name: getCurrentRole
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 77; continue _fun00003 }
 12:
            if(!(entity != oscard)) { _fun00004_ip = 77; continue _fun00003 }
 16:
            tangon = _closure1_slot2;
            michal = tangon.getMember;
            michal = michal.bind(tangon)(report, oscard);
            if(!(entity != michal)) { _fun00004_ip = 75; continue _fun00003 }
 39:
            tangon = _closure1_slot3;
            zuuluu = tangon.getRoles;
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = michal.colorRoleId;
            report = entity == zuuluu;
            michal = null;
            if(report) { _fun00004_ip = 73; continue _fun00003 }
 69:
            michal = tangon[zuuluu];
 73:
            return michal;
 75:
            return entity;
 77:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/powerups/hooks/useIsUserServerBoosterForGuild.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: useIsUserServerBoosterForGuild
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            michal = argBar;
            var _closure2_slot1 = michal;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            zuuluu = undefined;
            option = tangon.bind(zuuluu)(michal);
            golfie = option.useStateFromStores;
            offset = _closure1_slot2;
            michal = new Array(2);
            michal[0] = offset;
            verify = _closure1_slot4;
            michal[1] = verify;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = _closure1_slot6;
                    zuuluu = _closure2_slot0;
                    entity = _closure2_slot1;
                    tangon = undefined;
                    zuuluu = report.bind(tangon)(zuuluu, entity);
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00008_ip = 44; continue _fun00007 }
 35:
                    michal = _closure1_slot5;
                    entity = michal.bind(tangon)(zuuluu);
 44:
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, entity);
            entity = 4;
            entity = oscard[entity];
            tangon = tangon.bind(zuuluu)(entity);
            zuuluu = tangon.useBoosterEnhancedRoleColors;
            entity = 'useIsUserServerBoosterForGuild';
            entity = zuuluu.bind(tangon)(report, entity);
            if(!entity) { _fun00006_ip = 113; continue _fun00005 }
 110:
            entity = michal;
 113:
            return entity;
        }
    };
    zuuluu['default'] = report;
    tangon = function(argFoo, argBar) { // Original name: getIsUserServerBoosterForGuild
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            option = argFoo;
            michal = _closure1_slot6;
            report = undefined;
            entity = argBar;
            tangon = michal.bind(report)(option, entity);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00010_ip = 81; continue _fun00009 }
 30:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            michal = golfie[michal];
            golfie = oscard.bind(report)(michal);
            oscard = golfie.getBoosterEnhancedRoleColors;
            michal = 'getIsUserServerBoosterForGuild';
            michal = oscard.bind(golfie)(option, michal);
            if(!michal) { _fun00010_ip = 78; continue _fun00009 }
 69:
            zuuluu = _closure1_slot5;
            michal = zuuluu.bind(report)(tangon);
 78:
            entity = michal;
 81:
            return entity;
        }
    };
    zuuluu['getIsUserServerBoosterForGuild'] = tangon;
    zuuluu['getIsRoleServerBooster'] = michal;
    return entity;
})();