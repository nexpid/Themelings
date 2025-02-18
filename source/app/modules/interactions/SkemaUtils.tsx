// app/modules/interactions/SkemaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar) { // Original name: getFirstSkemaFieldError
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            michal = _closure1_slot1;
            michal = report[michal];
            golfie = null;
            if(!(golfie != michal)) { _fun00002_ip = 44; continue _fun00001 }
 23:
            zuuluu = global;
            tangon = zuuluu.Array;
            zuuluu = tangon.isArray;
            zuuluu = zuuluu.bind(tangon)(michal);
            if(zuuluu) { _fun00002_ip = 165; continue _fun00001 }
 44:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.entries;
            backup = zuuluu.bind(tangon)(report);
            zuuluu = backup.length;
            foxtra = 0;
            zuuluu = foxtra < zuuluu;
            romeon = 'object';
            report = undefined;
            yankee = 2;
            offset = 1;
            verify = 0;
            if(!zuuluu) { _fun00002_ip = 144; continue _fun00001 }
 91:
            tangon = backup[verify];
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.bind(report)(tangon, yankee);
            tangon = zuuluu[foxtra];
            zuuluu = zuuluu[offset];
            option = _closure1_slot1;
            if(!(tangon !== option)) { _fun00002_ip = 132; continue _fun00001 }
 121:
            if(!(golfie != zuuluu)) { _fun00002_ip = 132; continue _fun00001 }
 125:
            option = typeof zuuluu;
            if(!(romeon !== option)) { _fun00002_ip = 146; continue _fun00001 }
 132:
            verify = verify + 1;
            option = backup.length;
            if(verify < option) { _fun00002_ip = 91; continue _fun00001 }
 144:
            return golfie;
 146:
            entity = _closure1_slot2;
            if(!(golfie != oscard)) { _fun00002_ip = 157; continue _fun00001 }
 154:
            tangon = oscard;
 157:
            entity = entity.bind(report)(zuuluu, tangon);
            return entity;
 165:
            entity = 0;
            entity = michal[entity];
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = '_errors';
    var _closure1_slot1 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interactions/SkemaUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getFirstSkemaError
        zuuluu = _closure1_slot2;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity, michal);
        return entity;
    };
    zuuluu['getFirstSkemaError'] = michal;
    return entity;
})();