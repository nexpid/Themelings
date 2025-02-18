// discord_common/js/packages/shallow-equal/shallowEqual.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/shallow-equal/shallowEqual.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: shallowEqual
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            backup = argFoo;
            foxtra = argBar;
            romeon = argBaz;
            tangon = argCor;
            entity = backup === foxtra;
            if(entity) { _fun00002_ip = 304; continue _fun00001 }
 22:
            zuuluu = undefined;
            if(!(zuuluu !== backup)) { _fun00002_ip = 302; continue _fun00001 }
 31:
            if(!(zuuluu !== foxtra)) { _fun00002_ip = 302; continue _fun00001 }
 38:
            michal = global;
            oscard = michal.Object;
            report = oscard.keys;
            oscard = report.bind(oscard)(backup);
            golfie = michal.Object;
            report = golfie.keys;
            report = report.bind(golfie)(foxtra);
            option = oscard.length;
            golfie = report.length;
            if(!(option === golfie)) { _fun00002_ip = 247; continue _fun00001 }
 89:
            golfie = new Array(0);
            verify = oscard.length;
            option = 0;
            offset = option < verify;
            verify = null;
            yankee = 0;
            if(!offset) { _fun00002_ip = 170; continue _fun00001 }
 111:
            kiloes = oscard[yankee];
            sizing = backup[kiloes];
            offset = foxtra[kiloes];
            if(!(sizing !== offset)) { _fun00002_ip = 158; continue _fun00001 }
 127:
            if(!(verify != romeon)) { _fun00002_ip = 144; continue _fun00001 }
 131:
            offset = romeon.includes;
            offset = offset.bind(romeon)(kiloes);
            if(offset) { _fun00002_ip = 158; continue _fun00001 }
 144:
            if(!(verify != tangon)) { _fun00002_ip = 243; continue _fun00001 }
 148:
            offset = golfie.push;
            offset = offset.bind(golfie)(kiloes);
 158:
            yankee = yankee + 1;
            offset = oscard.length;
            if(yankee < offset) { _fun00002_ip = 111; continue _fun00001 }
 170:
            verify = verify != tangon;
            if(!verify) { _fun00002_ip = 186; continue _fun00001 }
 177:
            offset = golfie.length;
            verify = offset > option;
 186:
            if(!verify) { _fun00002_ip = 232; continue _fun00001 }
 189:
            offset = golfie.join;
            verify = ', ';
            yankee = offset.bind(golfie)(verify);
            verify = michal.HermesInternal;
            offset = verify.concat;
            verify = 'shallowEqual: unequal keys: ';
            verify = offset.bind(verify)(yankee);
            verify = tangon.bind(zuuluu)(verify);
 232:
            golfie = golfie.length;
            golfie = option === golfie;
            return golfie;
 243:
            golfie = false;
            return golfie;
 247:
            golfie = null;
            if(!(golfie != tangon)) { _fun00002_ip = 298; continue _fun00001 }
 253:
            option = oscard.length;
            golfie = report.length;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = 'shallowEqual: unequal key lengths ';
            michal = ' !=== ';
            michal = oscard.bind(report)(option, michal, golfie);
            michal = tangon.bind(zuuluu)(michal);
 298:
            michal = false;
            return michal;
 302:
            return entity;
 304:
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
            var _closure2_slot0 = zuuluu;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00004_ip = 35; continue _fun00003 }
 21:
            report = tangon.length;
            zuuluu = zuuluu.length;
            entity = report === zuuluu;
 35:
            if(!entity) { _fun00004_ip = 57; continue _fun00003 }
 38:
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
 57:
            return entity;
        }
    };
    zuuluu['areArraysShallowEqual'] = michal;
    return entity;
})();