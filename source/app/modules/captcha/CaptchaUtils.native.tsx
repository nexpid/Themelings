// app/modules/captcha/CaptchaUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.CAPTCHA_MODAL_KEY;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo, argBar) { // Original name: showCaptcha
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = arguments[2];
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            option = {};
 23:
            yankee = michal.sitekey;
            offset = michal.captchaService;
            golfie = michal.options;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 3;
            tangon = zuuluu[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.openLazy;
            romeon = _closure1_slot0;
            tangon = 5;
            tangon = zuuluu[tangon];
            romeon = romeon.bind(entity)(tangon);
            tangon = 4;
            tangon = zuuluu[tangon];
            zuuluu = zuuluu.paths;
            tangon = romeon.bind(entity)(tangon, zuuluu);
            zuuluu = _closure1_slot4;
            michal = {};
            michal['sitekey'] = yankee;
            michal['captchaService'] = offset;
            offset = function(argFoo, argBar) { // Original name: onCaptchaVerify
                zuuluu = _closure2_slot0;
                michal = {};
                entity = argFoo;
                michal['captcha_key'] = entity;
                entity = argBar;
                michal['captcha_rqtoken'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onCaptchaVerify'] = offset;
            verify = function() { // Original name: close
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.hideActionSheet;
                entity = _closure1_slot4;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['close'] = verify;
            kiloes = michal;
            backup = option;
            option = copyDataProperties(kiloes, backup);
            kiloes = michal;
            backup = golfie;
            golfie = copyDataProperties(kiloes, backup);
            michal = report.bind(oscard)(tangon, zuuluu, michal);
            return entity;
        }
    };
    michal['showCaptcha'] = golfie;
    golfie = function(argFoo) { // Original name: showCaptchaAsync
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = arguments[1];
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00004_ip = 16; continue _fun00003 }
 14:
            tangon = {};
 16:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = zuuluu;
            var _closure2_slot2 = zuuluu;
            var _closure2_slot3 = zuuluu;
            zuuluu = michal.sitekey;
            _closure2_slot1 = zuuluu;
            zuuluu = michal.captchaService;
            _closure2_slot2 = zuuluu;
            michal = michal.options;
            _closure2_slot3 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 3;
                tangon = zuuluu[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                oscard = golfie.openLazy;
                report = _closure1_slot0;
                tangon = 5;
                tangon = zuuluu[tangon];
                report = report.bind(entity)(tangon);
                tangon = 4;
                tangon = zuuluu[tangon];
                zuuluu = zuuluu.paths;
                report = report.bind(entity)(tangon, zuuluu);
                tangon = _closure1_slot4;
                zuuluu = {};
                verify = _closure2_slot1;
                zuuluu['sitekey'] = verify;
                verify = _closure2_slot2;
                zuuluu['captchaService'] = verify;
                verify = function(argFoo, argBar) { // Original name: onCaptchaVerify
                    zuuluu = _closure3_slot0;
                    michal = {};
                    entity = argFoo;
                    michal['captcha_key'] = entity;
                    entity = argBar;
                    michal['captcha_rqtoken'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu['onCaptchaVerify'] = verify;
                verify = function() { // Original name: onReject
                    zuuluu = _closure3_slot1;
                    entity = global;
                    tangon = entity.Error;
                    oscard = _closure2_slot2;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    michal = 'Failed to display captcha for service ';
                    entity = '.';
                    option = report.bind(michal)(oscard, entity);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    verify = michal;
                    entity = new verify[tangon](option, golfie);
                    michal = entity instanceof Object ? entity : michal;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                zuuluu['onReject'] = verify;
                option = function() { // Original name: close
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.hideActionSheet;
                    entity = _closure1_slot4;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['close'] = option;
                romeon = _closure2_slot0;
                foxtra = zuuluu;
                option = copyDataProperties(foxtra, romeon);
                romeon = _closure2_slot3;
                foxtra = zuuluu;
                michal = copyDataProperties(foxtra, romeon);
                offset = 'stack';
                backup = golfie;
                foxtra = report;
                romeon = tangon;
                yankee = zuuluu;
                michal = backup[oscard](foxtra, romeon, yankee, offset, verify);
                return entity;
            };
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    michal['showCaptchaAsync'] = golfie;
    tangon = function() { // Original name: useIsCaptchaModalOpen
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 2;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot3;
            michal = zuuluu.getKey;
            michal = michal.bind(zuuluu)();
            entity = _closure1_slot4;
            entity = michal === entity;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useIsCaptchaModalOpen'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/captcha/CaptchaUtils.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();