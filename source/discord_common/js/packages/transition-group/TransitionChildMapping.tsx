// discord_common/js/packages/transition-group/TransitionChildMapping.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/transition-group/TransitionChildMapping.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getChildMapping
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = {};
            var _closure2_slot0 = entity;
            if(!oscard) { _fun00002_ip = 68; continue _fun00001 }
 14:
            zuuluu = _closure1_slot0;
            report = zuuluu.Children;
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            tangon = tangon.bind(report)(oscard, zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 68; continue _fun00001 }
 51:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.key;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 25; continue _fun00003 }
 14:
                    entity = _closure2_slot0;
                    entity[michal] = zuuluu;
 25:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 68:
            return entity;
        }
    };
    zuuluu['getChildMapping'] = tangon;
    michal = function() { // Original name: mergeChildMappings
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = arguments[0];
            michal = arguments[1];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00006_ip = 16; continue _fun00005 }
 14:
            entity = {};
 16:
            var _closure2_slot0 = entity;
            if(!(michal === oscard)) { _fun00006_ip = 26; continue _fun00005 }
 24:
            michal = {};
 26:
            var _closure2_slot1 = michal;
            report = function(argFoo) { // Original name: getValueForKey
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot1;
                    entity = tangon.hasOwnProperty;
                    entity = entity.bind(tangon)(zuuluu);
                    if(entity) { _fun00008_ip = 34; continue _fun00007 }
 24:
                    entity = _closure2_slot0;
                    entity = entity[zuuluu];
                    _fun00008_ip = 42; continue _fun00007;
 34:
                    michal = _closure2_slot1;
                    entity = michal[zuuluu];
 42:
                    return entity;
                }
            };
            romeon = {};
            tangon = new Array(0);
            verify = entity;
            entity = tangon;
            tangon = entity;
            for(zuuluu in verify)
 60:
            {
                foxtra = entity;
                tangon = foxtra;
 75:
                yankee = zuuluu;
                backup = michal.hasOwnProperty;
                backup = backup.bind(michal)(yankee);
                if(backup) { _fun00006_ip = 107; continue _fun00005 }
 92:
                backup = foxtra.push;
                backup = backup.bind(foxtra)(yankee);
                entity = foxtra;
                _fun00006_ip = 60; continue _fun00005;
 107:
                backup = foxtra.length;
                entity = foxtra;
                if(!backup) { _fun00006_ip = 60; continue _fun00005 }
 118:
                romeon[yankee] = foxtra;
                entity = new Array(0);
                _fun00006_ip = 60; continue _fun00005;
            }
 128:
            entity = {};
            offset = michal;
            zuuluu = 0;
            michal = undefined;
            for(golfie in offset)
 145:
            {
 154:
                backup = golfie;
                foxtra = romeon.hasOwnProperty;
                foxtra = foxtra.bind(romeon)(backup);
                if(!foxtra) { _fun00006_ip = 235; continue _fun00005 }
 171:
                foxtra = romeon[backup];
                foxtra = foxtra.length;
                foxtra = zuuluu < foxtra;
                kiloes = 0;
                michal = 0;
                if(!foxtra) { _fun00006_ip = 235; continue _fun00005 }
 191:
                foxtra = romeon[backup];
                foxtra = foxtra[kiloes];
                sizing = romeon[backup];
                sizing = sizing[kiloes];
                foxtra = report.bind(oscard)(foxtra);
                entity[sizing] = foxtra;
                kiloes = kiloes + 1;
                foxtra = romeon[backup];
                foxtra = foxtra.length;
                michal = kiloes;
                if(michal < foxtra) { _fun00006_ip = 191; continue _fun00005 }
 235:
                foxtra = report.bind(oscard)(backup);
                entity[backup] = foxtra;
                _fun00006_ip = 145; continue _fun00005;
            }
 246:
            michal = tangon.length;
            michal = zuuluu < michal;
            zuuluu = 0;
            if(!michal) { _fun00006_ip = 289; continue _fun00005 }
 260:
            golfie = tangon[zuuluu];
            michal = tangon[zuuluu];
            michal = report.bind(oscard)(michal);
            entity[golfie] = michal;
            zuuluu = zuuluu + 1;
            michal = tangon.length;
            if(zuuluu < michal) { _fun00006_ip = 260; continue _fun00005 }
 289:
            return entity;
        }
    };
    zuuluu['mergeChildMappings'] = michal;
    return entity;
})();