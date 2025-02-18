// app/modules/captcha/CaptchaStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = {};
        entity['captchaServeVolume'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot4 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/captcha/CaptchaStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useCaptchaStore'] = tangon;
    tangon = function() { // Original name: isCaptchaStoreVolumeEmpty
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.keys;
        tangon = _closure1_slot4;
        entity = tangon.getState;
        entity = entity.bind(tangon)();
        entity = entity.captchaServeVolume;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.length;
        entity = 0;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isCaptchaStoreVolumeEmpty'] = tangon;
    tangon = function(argFoo) { // Original name: incrementCaptchaServeVolume
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot0;
                    michal = null;
                    entity = report;
                    if(!(michal != zuuluu)) { _fun00002_ip = 105; continue _fun00001 }
 19:
                    zuuluu = _closure2_slot0;
                    michal = report.captchaServeVolume;
                    michal = zuuluu in michal;
                    zuuluu = {};
                    tangon = {};
                    verify = report.captchaServeVolume;
                    offset = tangon;
                    golfie = copyDataProperties(offset, verify);
                    oscard = _closure2_slot0;
                    golfie = 1;
                    if(michal) { _fun00002_ip = 75; continue _fun00001 }
 60:
                    tangon[oscard] = golfie;
                    zuuluu['captchaServeVolume'] = tangon;
                    michal = zuuluu;
                    _fun00002_ip = 102; continue _fun00001;
 75:
                    report = report.captchaServeVolume;
                    report = report[oscard];
                    report = report + golfie;
                    tangon[oscard] = report;
                    zuuluu['captchaServeVolume'] = tangon;
                    michal = zuuluu;
 102:
                    entity = michal;
 105:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['incrementCaptchaServeVolume'] = tangon;
    michal = function() { // Original name: flushCaptchaServeVolume
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            foxtra = global;
            tangon = foxtra.Object;
            zuuluu = tangon.entries;
            report = _closure1_slot4;
            entity = report.getState;
            entity = entity.bind(report)();
            entity = entity.captchaServeVolume;
            romeon = zuuluu.bind(tangon)(entity);
            entity = romeon.length;
            yankee = 0;
            zuuluu = yankee < entity;
            entity = undefined;
            tangon = 2;
            offset = 1;
            verify = 3;
            option = 4;
            golfie = 'user_flow:';
            oscard = true;
            report = 0;
            if(!zuuluu) { _fun00004_ip = 207; continue _fun00003 }
 83:
            backup = romeon[report];
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(entity)(backup, tangon);
            result = zuuluu[yankee];
            sizing = zuuluu[offset];
            backup = _closure1_slot1;
            output = _closure1_slot2;
            zuuluu = output[verify];
            kiloes = backup.bind(entity)(zuuluu);
            backup = kiloes.distribution;
            zuuluu = {};
            echoed = _closure1_slot0;
            output = output[option];
            output = echoed.bind(entity)(output);
            output = output.MetricEvents;
            output = output.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
            zuuluu['name'] = output;
            output = foxtra.HermesInternal;
            output = output.concat;
            result = output.bind(golfie)(result);
            output = new Array(1);
            output[0] = result;
            zuuluu['tags'] = output;
            zuuluu = backup.bind(kiloes)(zuuluu, sizing, oscard);
            report = report + 1;
            zuuluu = romeon.length;
            if(report < zuuluu) { _fun00004_ip = 83; continue _fun00003 }
 207:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.setState;
                entity = {};
                tangon = {};
                entity['captchaServeVolume'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['flushCaptchaServeVolume'] = michal;
    return entity;
})();