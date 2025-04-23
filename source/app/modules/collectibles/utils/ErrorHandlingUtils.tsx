// app/modules/collectibles/utils/ErrorHandlingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    option = golfie.AbortCodes;
    verify = option.UNAUTHORIZED;
    golfie = new Array(3);
    golfie[0] = verify;
    verify = option.EMAIL_VERIFICATION_REQUIRED;
    golfie[1] = verify;
    option = option.USER_BANNED;
    golfie[2] = option;
    var _closure1_slot2 = golfie;
    verify = tangon.Set;
    golfie = verify.prototype;
    option = Object.create(golfie, {constructor: {value: verify}});
    romeon = [500, 502, 503, 504];
    foxtra = option;
    golfie = new foxtra[verify](romeon, yankee);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot3 = golfie;
    option = tangon.Set;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = [401, 403, 405, 409, 429];
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/utils/ErrorHandlingUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            golfie = null;
            entity = golfie == zuuluu;
            if(entity) { _fun00002_ip = 330; continue _fun00001 }
 15:
            michal = golfie != zuuluu;
            if(!michal) { _fun00002_ip = 327; continue _fun00001 }
 25:
            tangon = 'status';
            tangon = tangon in zuuluu;
            report = !tangon;
            if(!tangon) { _fun00002_ip = 55; continue _fun00001 }
 39:
            tangon = zuuluu.status;
            oscard = 'number';
            tangon = typeof tangon;
            report = oscard !== tangon;
 55:
            if(report) { _fun00002_ip = 128; continue _fun00001 }
 58:
            oscard = zuuluu.status;
            tangon = 0;
            tangon = tangon !== oscard;
            if(!tangon) { _fun00002_ip = 97; continue _fun00001 }
 72:
            verify = _closure1_slot3;
            option = verify.has;
            oscard = zuuluu.status;
            oscard = option.bind(verify)(oscard);
            tangon = !oscard;
 97:
            if(!tangon) { _fun00002_ip = 125; continue _fun00001 }
 100:
            verify = _closure1_slot4;
            option = verify.has;
            oscard = zuuluu.status;
            oscard = option.bind(verify)(oscard);
            tangon = !oscard;
 125:
            report = tangon;
 128:
            tangon = !report;
            if(!report) { _fun00002_ip = 324; continue _fun00001 }
 137:
            verify = 'code';
            report = verify in zuuluu;
            oscard = !report;
            if(!report) { _fun00002_ip = 167; continue _fun00001 }
 151:
            report = zuuluu.code;
            option = 'number';
            report = typeof report;
            oscard = option !== report;
 167:
            if(oscard) { _fun00002_ip = 195; continue _fun00001 }
 170:
            offset = _closure1_slot2;
            option = offset.includes;
            report = zuuluu.code;
            report = option.bind(offset)(report);
            oscard = !report;
 195:
            report = !oscard;
            if(!oscard) { _fun00002_ip = 321; continue _fun00001 }
 201:
            oscard = 'body';
            oscard = oscard in zuuluu;
            if(!oscard) { _fun00002_ip = 221; continue _fun00001 }
 212:
            option = zuuluu.body;
            oscard = golfie != option;
 221:
            if(!oscard) { _fun00002_ip = 240; continue _fun00001 }
 224:
            option = zuuluu.body;
            offset = 'object';
            option = typeof option;
            oscard = offset === option;
 240:
            if(!oscard) { _fun00002_ip = 252; continue _fun00001 }
 243:
            option = zuuluu.body;
            oscard = verify in option;
 252:
            if(!oscard) { _fun00002_ip = 285; continue _fun00001 }
 255:
            option = zuuluu.body;
            verify = golfie == option;
            golfie = undefined;
            if(verify) { _fun00002_ip = 274; continue _fun00001 }
 269:
            golfie = option.code;
 274:
            option = 'number';
            golfie = typeof golfie;
            oscard = option === golfie;
 285:
            if(!oscard) { _fun00002_ip = 315; continue _fun00001 }
 288:
            verify = _closure1_slot2;
            option = verify.includes;
            golfie = zuuluu.body;
            golfie = golfie.code;
            oscard = option.bind(verify)(golfie);
 315:
            oscard = !oscard;
            report = !oscard;
 321:
            tangon = report;
 324:
            michal = tangon;
 327:
            entity = michal;
 330:
            if(entity) { _fun00002_ip = 369; continue _fun00001 }
 333:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.captureException;
            entity = entity.bind(michal)(zuuluu);
 369:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['captureOrIgnoreApiError'] = michal;
    return entity;
})();