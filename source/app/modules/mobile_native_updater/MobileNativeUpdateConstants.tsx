// app/modules/mobile_native_updater/MobileNativeUpdateConstants.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    verify = report.bind(entity)(tangon);
    option = verify.duration;
    report = 6;
    tangon = 'hours';
    tangon = option.bind(verify)(report, tangon);
    michal = function() { // Original name: currentUpdateConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = global;
            entity = tangon.process;
            entity = entity.env;
            zuuluu = entity.INTERNAL_UPDATE_URL;
            michal = null;
            entity = undefined;
            report = null;
            if(!(entity !== zuuluu)) { _fun00002_ip = 180; continue _fun00001 }
 33:
            zuuluu = tangon.process;
            zuuluu = zuuluu.env;
            oscard = zuuluu.INTERNAL_UPDATE_URL;
            zuuluu = '';
            report = null;
            if(!(zuuluu !== oscard)) { _fun00002_ip = 180; continue _fun00001 }
 61:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 1;
            zuuluu = zuuluu[option];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.isIOS;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00002_ip = 128; continue _fun00001 }
 97:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.isAndroid;
            golfie = zuuluu.bind(golfie)();
            zuuluu = null;
            if(!golfie) { _fun00002_ip = 177; continue _fun00001 }
 128:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 2;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.toURLSafe;
            oscard = tangon.process;
            oscard = oscard.env;
            oscard = oscard.INTERNAL_UPDATE_URL;
            zuuluu = golfie.bind(option)(oscard);
 177:
            report = zuuluu;
 180:
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            golfie = 3;
            oscard = oscard[golfie];
            option = option.bind(entity)(oscard);
            oscard = option.getConstants;
            verify = oscard.bind(option)();
            option = tangon.parseInt;
            offset = michal == verify;
            oscard = undefined;
            if(offset) { _fun00002_ip = 234; continue _fun00001 }
 228:
            oscard = verify.Build;
 234:
            oscard = option.bind(entity)(oscard);
            option = tangon.Number;
            tangon = option.isNaN;
            option = tangon.bind(option)(oscard);
            tangon = null;
            if(option) { _fun00002_ip = 296; continue _fun00001 }
 261:
            option = 0;
            tangon = null;
            if(!(option !== oscard)) { _fun00002_ip = 296; continue _fun00001 }
 269:
            option = 123456;
            tangon = null;
            if(!(option !== oscard)) { _fun00002_ip = 296; continue _fun00001 }
 281:
            option = 1234567890;
            tangon = null;
            if(!(option !== oscard)) { _fun00002_ip = 296; continue _fun00001 }
 293:
            tangon = oscard;
 296:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.getConstants;
            zuuluu = zuuluu.bind(oscard)();
            oscard = michal == zuuluu;
            entity = undefined;
            if(oscard) { _fun00002_ip = 338; continue _fun00001 }
 332:
            entity = zuuluu.Version;
 338:
            oscard = michal != entity;
            zuuluu = null;
            if(!oscard) { _fun00002_ip = 350; continue _fun00001 }
 347:
            zuuluu = entity;
 350:
            entity = null;
            if(!(michal !== report)) { _fun00002_ip = 387; continue _fun00001 }
 356:
            entity = null;
            if(!(michal !== tangon)) { _fun00002_ip = 387; continue _fun00001 }
 362:
            entity = null;
            if(!(entity !== zuuluu)) { _fun00002_ip = 387; continue _fun00001 }
 368:
            michal = {};
            michal['url'] = report;
            michal['currentBuild'] = tangon;
            michal['currentVersion'] = zuuluu;
            entity = michal;
 387:
            return entity;
        }
    };
    michal = michal.bind(entity)();
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/mobile_native_updater/MobileNativeUpdateConstants.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['UPDATE_CHECK_INTERVAL'] = tangon;
    zuuluu['UPDATE_CONFIG'] = michal;
    return entity;
})();