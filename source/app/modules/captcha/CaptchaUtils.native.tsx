// app/modules/captcha/CaptchaUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.CAPTCHA_MODAL_KEY;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: showCaptcha
        _fun122803: for(var _fun122803_ip = 0; ; ) switch(_fun122803_ip) {
 0:
            mike = argFoo;
            options = arguments[2];
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = undefined;
            if(!(options === entity)) { _fun122803_ip = 23; continue _fun122803 }
 21:
            options = {};
 23:
            yankee = mike.sitekey;
            offset = mike.captchaService;
            golf = mike.options;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 3;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.openLazy;
            romeo = _closure1_slot0;
            tango = 5;
            tango = zulu[tango];
            romeo = romeo.bind(entity)(tango);
            tango = 4;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = romeo.bind(entity)(tango, zulu);
            zulu = _closure1_slot4;
            mike = {};
            mike['sitekey'] = yankee;
            mike['captchaService'] = offset;
            offset = function(argFoo, argBar) { // Original name: onCaptchaVerify
                zulu = _closure2_slot0;
                mike = {};
                entity = argFoo;
                mike['captcha_key'] = entity;
                entity = argBar;
                mike['captcha_rqtoken'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onCaptchaVerify'] = offset;
            verify = function() { // Original name: close
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.hideActionSheet;
                entity = _closure1_slot4;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['close'] = verify;
            kilo = mike;
            backup = options;
            options = copyDataProperties(kilo, backup);
            kilo = mike;
            backup = golf;
            golf = copyDataProperties(kilo, backup);
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        }
    };
    mike['showCaptcha'] = golf;
    golf = function(argFoo) { // Original name: showCaptchaAsync
        _fun122806: for(var _fun122806_ip = 0; ; ) switch(_fun122806_ip) {
 0:
            mike = argFoo;
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun122806_ip = 16; continue _fun122806 }
 14:
            tango = {};
 16:
            var _closure2_slot0 = tango;
            var _closure2_slot1 = zulu;
            var _closure2_slot2 = zulu;
            var _closure2_slot3 = zulu;
            zulu = mike.sitekey;
            _closure2_slot1 = zulu;
            zulu = mike.captchaService;
            _closure2_slot2 = zulu;
            mike = mike.options;
            _closure2_slot3 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            oscar = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 3;
                tango = zulu[entity];
                entity = undefined;
                golf = report.bind(entity)(tango);
                oscar = golf.openLazy;
                report = _closure1_slot0;
                tango = 5;
                tango = zulu[tango];
                report = report.bind(entity)(tango);
                tango = 4;
                tango = zulu[tango];
                zulu = zulu.paths;
                report = report.bind(entity)(tango, zulu);
                tango = _closure1_slot4;
                zulu = {};
                verify = _closure2_slot1;
                zulu['sitekey'] = verify;
                verify = _closure2_slot2;
                zulu['captchaService'] = verify;
                verify = function(argFoo, argBar) { // Original name: onCaptchaVerify
                    zulu = _closure3_slot0;
                    mike = {};
                    entity = argFoo;
                    mike['captcha_key'] = entity;
                    entity = argBar;
                    mike['captcha_rqtoken'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu['onCaptchaVerify'] = verify;
                verify = function() { // Original name: onReject
                    zulu = _closure3_slot1;
                    entity = global;
                    tango = entity.Error;
                    oscar = _closure2_slot2;
                    entity = entity.HermesInternal;
                    report = entity.concat;
                    mike = 'Failed to display captcha for service ';
                    entity = '.';
                    options = report.bind(mike)(oscar, entity);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    verify = mike;
                    entity = new verify[tango](options, golf);
                    mike = entity instanceof Object ? entity : mike;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                zulu['onReject'] = verify;
                options = function() { // Original name: close
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.hideActionSheet;
                    entity = _closure1_slot4;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu['close'] = options;
                romeo = _closure2_slot0;
                foxtrot = zulu;
                options = copyDataProperties(foxtrot, romeo);
                romeo = _closure2_slot3;
                foxtrot = zulu;
                mike = copyDataProperties(foxtrot, romeo);
                offset = 'stack';
                backup = golf;
                foxtrot = report;
                romeo = tango;
                yankee = zulu;
                mike = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                return entity;
            };
            golf = mike;
            entity = new golf[zulu](oscar, report);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    mike['showCaptchaAsync'] = golf;
    tango = function() { // Original name: useIsCaptchaModalOpen
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot3;
            mike = zulu.getKey;
            mike = mike.bind(zulu)();
            entity = _closure1_slot4;
            entity = mike === entity;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['useIsCaptchaModalOpen'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/captcha/CaptchaUtils.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();