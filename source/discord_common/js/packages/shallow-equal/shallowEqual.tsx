// discord_common/js/packages/shallow-equal/shallowEqual.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = {};
    var _closure1_slot0 = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/shallow-equal/shallowEqual.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) { // Original name: shallowEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            oscard = argBaz;
            entity = arguments[3];
            michal = undefined;
            if(!(entity === michal)) { _fun00002_ip = 25; continue _fun00001 }
 18:
            entity = _closure1_slot0;
 25:
            zuuluu = entity.shouldWarnLargeObjects;
            entity = entity.logCallback;
            entity = option === golfie;
            if(entity) { _fun00002_ip = 184; continue _fun00001 }
 47:
            if(!(michal !== option)) { _fun00002_ip = 182; continue _fun00001 }
 54:
            if(!(michal !== golfie)) { _fun00002_ip = 182; continue _fun00001 }
 61:
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.keys;
            report = zuuluu.bind(tangon)(option);
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            michal = michal.bind(zuuluu)(golfie);
            zuuluu = report.length;
            michal = michal.length;
            if(!(zuuluu === michal)) { _fun00002_ip = 178; continue _fun00001 }
 109:
            michal = report.length;
            tangon = 0;
            michal = tangon < michal;
            zuuluu = null;
            if(!michal) { _fun00002_ip = 170; continue _fun00001 }
 125:
            verify = report[tangon];
            offset = option[verify];
            michal = golfie[verify];
            if(!(offset !== michal)) { _fun00002_ip = 158; continue _fun00001 }
 141:
            if(!(zuuluu != oscard)) { _fun00002_ip = 174; continue _fun00001 }
 145:
            michal = oscard.includes;
            michal = michal.bind(oscard)(verify);
            if(!michal) { _fun00002_ip = 174; continue _fun00001 }
 158:
            tangon = tangon + 1;
            michal = report.length;
            if(tangon < michal) { _fun00002_ip = 125; continue _fun00001 }
 170:
            michal = true;
            return michal;
 174:
            michal = false;
            return michal;
 178:
            michal = false;
            return michal;
 182:
            return entity;
 184:
            entity = true;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: areArraysShallowEqual
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = arguments[2];
            var _closure2_slot0 = zuuluu;
            report = undefined;
            if(!(entity === report)) { _fun00004_ip = 28; continue _fun00003 }
 21:
            entity = _closure1_slot0;
 28:
            report = entity.logCallback;
            entity = entity.shouldWarnLargeObjects;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 49:
            report = tangon.length;
            zuuluu = zuuluu.length;
            entity = report === zuuluu;
 63:
            if(!entity) { _fun00004_ip = 85; continue _fun00003 }
 66:
            zuuluu = tangon.some;
            michal = function(argFoo, argBar) {
                michal = _closure2_slot0;
                entity = argBar;
                michal = michal[entity];
                entity = argFoo;
                entity = michal !== entity;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 85:
            return entity;
        }
    };
    zuuluu['areArraysShallowEqual'] = michal;
    return entity;
})();