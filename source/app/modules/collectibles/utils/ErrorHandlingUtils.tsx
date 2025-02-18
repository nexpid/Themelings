// app/modules/collectibles/utils/ErrorHandlingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AbortCodes;
    option = golfie.UNAUTHORIZED;
    tangon = new Array(3);
    tangon[0] = option;
    option = golfie.EMAIL_VERIFICATION_REQUIRED;
    tangon[1] = option;
    golfie = golfie.USER_BANNED;
    tangon[2] = golfie;
    var _closure1_slot2 = tangon;
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
            if(entity) { _fun00002_ip = 265; continue _fun00001 }
 15:
            michal = golfie != zuuluu;
            if(!michal) { _fun00002_ip = 262; continue _fun00001 }
 25:
            tangon = 'status';
            tangon = tangon in zuuluu;
            if(!tangon) { _fun00002_ip = 52; continue _fun00001 }
 36:
            report = zuuluu.status;
            oscard = 'number';
            report = typeof report;
            tangon = oscard === report;
 52:
            if(!tangon) { _fun00002_ip = 66; continue _fun00001 }
 55:
            oscard = zuuluu.status;
            report = 0;
            tangon = report === oscard;
 66:
            if(tangon) { _fun00002_ip = 259; continue _fun00001 }
 72:
            verify = 'code';
            report = verify in zuuluu;
            oscard = !report;
            if(!report) { _fun00002_ip = 102; continue _fun00001 }
 86:
            report = zuuluu.code;
            option = 'number';
            report = typeof report;
            oscard = option !== report;
 102:
            if(oscard) { _fun00002_ip = 130; continue _fun00001 }
 105:
            offset = _closure1_slot2;
            option = offset.includes;
            report = zuuluu.code;
            report = option.bind(offset)(report);
            oscard = !report;
 130:
            report = !oscard;
            if(!oscard) { _fun00002_ip = 256; continue _fun00001 }
 136:
            oscard = 'body';
            oscard = oscard in zuuluu;
            if(!oscard) { _fun00002_ip = 156; continue _fun00001 }
 147:
            option = zuuluu.body;
            oscard = golfie != option;
 156:
            if(!oscard) { _fun00002_ip = 175; continue _fun00001 }
 159:
            option = zuuluu.body;
            offset = 'object';
            option = typeof option;
            oscard = offset === option;
 175:
            if(!oscard) { _fun00002_ip = 187; continue _fun00001 }
 178:
            option = zuuluu.body;
            oscard = verify in option;
 187:
            if(!oscard) { _fun00002_ip = 220; continue _fun00001 }
 190:
            option = zuuluu.body;
            verify = golfie == option;
            golfie = undefined;
            if(verify) { _fun00002_ip = 209; continue _fun00001 }
 204:
            golfie = option.code;
 209:
            option = 'number';
            golfie = typeof golfie;
            oscard = option === golfie;
 220:
            if(!oscard) { _fun00002_ip = 250; continue _fun00001 }
 223:
            verify = _closure1_slot2;
            option = verify.includes;
            golfie = zuuluu.body;
            golfie = golfie.code;
            oscard = option.bind(verify)(golfie);
 250:
            oscard = !oscard;
            report = !oscard;
 256:
            tangon = report;
 259:
            michal = tangon;
 262:
            entity = michal;
 265:
            if(entity) { _fun00002_ip = 304; continue _fun00001 }
 268:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.captureException;
            entity = entity.bind(michal)(zuuluu);
 304:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['captureOrIgnoreApiError'] = michal;
    return entity;
})();