// app/utils/native/CaptchaUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    report = oscar.bind(entity)(tango);
    tango = report.NativeModules;
    options = report.NativeEventEmitter;
    report = report.Keyboard;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.CaptchaEvent;
    var _closure1_slot7 = verify;
    verify = report.RECAPTCHA_SITE_KEY;
    var _closure1_slot8 = verify;
    report = report.AnalyticEvents;
    var _closure1_slot9 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot10 = report;
    tango = tango.CaptchaManager;
    var _closure1_slot11 = tango;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    romeo = tango;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot12 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: trackCaptchaEvent
        verify = argFoo;
        options = argCorge;
        zulu = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 6;
        mike = golf[entity];
        entity = undefined;
        offset = zulu.bind(entity)(mike);
        oscar = offset.track;
        mike = _closure1_slot9;
        tango = mike.CAPTCHA_EVENT;
        mike = {};
        mike['captcha_event_name'] = verify;
        mike['captcha_service'] = options;
        yankee = argBaz;
        mike['sitekey'] = yankee;
        yankee = argBar;
        mike['captcha_flow_key'] = yankee;
        mike = oscar.bind(offset)(tango, mike);
        mike = 7;
        mike = golf[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.increment;
        mike = {};
        oscar = _closure1_slot0;
        report = 8;
        report = golf[report];
        report = oscar.bind(entity)(report);
        report = report.MetricEvents;
        report = report.CAPTCHA_EVENT;
        mike['name'] = report;
        oscar = global;
        report = oscar.HermesInternal;
        golf = report.concat;
        report = 'event_name:';
        golf = golf.bind(report)(verify);
        report = new Array(2);
        report[0] = golf;
        oscar = oscar.HermesInternal;
        golf = oscar.concat;
        oscar = 'captcha_service:';
        oscar = golf.bind(oscar)(options);
        report[1] = oscar;
        mike['tags'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot13 = tango;
    tango = {};
    report = function() { // Original name: showCaptcha
        _fun122847: for(var _fun122847_ip = 0; ; ) switch(_fun122847_ip) {
 0:
            mike = arguments[0];
            report = arguments[1];
            tango = this;
            oscar = undefined;
            if(!(mike === oscar)) { _fun122847_ip = 50; continue _fun122847 }
 15:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 11;
            entity = golf[entity];
            entity = zulu.bind(oscar)(entity);
            entity = entity.CaptchaTypes;
            mike = entity.RECAPTCHA;
 50:
            golf = _closure1_slot4;
            zulu = golf.dismiss;
            zulu = zulu.bind(golf)();
            options = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 6;
            zulu = golf[zulu];
            offset = options.bind(oscar)(zulu);
            verify = offset.track;
            zulu = _closure1_slot9;
            options = zulu.OPEN_MODAL;
            zulu = {};
            yankee = 'CAPTCHA';
            zulu['type'] = yankee;
            zulu = verify.bind(offset)(options, zulu);
            zulu = _closure1_slot0;
            entity = 11;
            entity = golf[entity];
            entity = zulu.bind(oscar)(entity);
            entity = entity.CaptchaTypes;
            entity = entity.HCAPTCHA;
            if(!(mike === entity)) { _fun122847_ip = 156; continue _fun122847 }
 150:
            entity = null;
            if(!(entity == report)) { _fun122847_ip = 168; continue _fun122847 }
 156:
            entity = tango.showRecaptcha;
            entity = entity.bind(tango)();
            _fun122847_ip = 183; continue _fun122847;
 168:
            zulu = tango.showHcaptcha;
            mike = arguments[2];
            entity = zulu.bind(tango)(report, mike);
 183:
            return entity;
        }
    };
    tango['showCaptcha'] = report;
    report = function() { // Original name: closeCaptcha
        mike = _closure1_slot11;
        entity = mike.closeCaptcha;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    tango['closeCaptcha'] = report;
    report = function(argFoo, argBar) { // Original name: showHcaptcha
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 10;
            mike = zulu[entity];
            entity = undefined;
            report = verify.bind(entity)(mike);
            mike = report.v4;
            yankee = mike.bind(report)();
            var _closure3_slot2 = yankee;
            offset = _closure1_slot13;
            options = _closure2_slot0;
            report = 11;
            report = zulu[report];
            report = verify.bind(entity)(report);
            report = report.CaptchaTypes;
            romeo = report.HCAPTCHA;
            kilo = 'initial-load';
            sizing = undefined;
            backup = yankee;
            foxtrot = options;
            report = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
            report = _closure1_slot1;
            tango = 14;
            tango = zulu[tango];
            oscar = report.bind(entity)(tango);
            report = oscar.pushLazy;
            tango = 16;
            tango = zulu[tango];
            verify = verify.bind(entity)(tango);
            tango = 15;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = verify.bind(entity)(tango, zulu);
            zulu = {};
            zulu['siteKey'] = options;
            golf = function(argFoo) { // Original name: onMessage
                _fun122851: for(var _fun122851_ip = 0; ; ) switch(_fun122851_ip) {
 0:
                    mike = argFoo;
                    tango = null;
                    report = tango == mike;
                    entity = undefined;
                    zulu = undefined;
                    if(report) { _fun122851_ip = 26; continue _fun122851 }
 16:
                    report = mike.nativeEvent;
                    zulu = report.data;
 26:
                    if(!(tango != zulu)) { _fun122851_ip = 334; continue _fun122851 }
 33:
                    mike = mike.nativeEvent;
                    zulu = mike.data;
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    oscar = 13;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.CaptchaError;
                    mike = mike.CANCEL;
                    if(!(zulu !== mike)) { _fun122851_ip = 222; continue _fun122851 }
 85:
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.CaptchaError;
                    mike = mike.ERROR;
                    if(!(zulu !== mike)) { _fun122851_ip = 222; continue _fun122851 }
 118:
                    report = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[oscar];
                    mike = report.bind(entity)(mike);
                    mike = mike.CaptchaError;
                    mike = mike.EXPIRED;
                    if(!(zulu !== mike)) { _fun122851_ip = 222; continue _fun122851 }
 151:
                    verify = _closure1_slot13;
                    foxtrot = _closure3_slot2;
                    romeo = _closure2_slot0;
                    oscar = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 11;
                    report = offset[report];
                    report = oscar.bind(entity)(report);
                    report = report.CaptchaTypes;
                    yankee = report.HCAPTCHA;
                    backup = 'verify';
                    kilo = undefined;
                    report = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                    mike = _closure3_slot0;
                    mike = mike.bind(entity)(zulu);
                    _fun122851_ip = 334; continue _fun122851;
 222:
                    verify = _closure1_slot13;
                    foxtrot = _closure3_slot2;
                    romeo = _closure2_slot0;
                    offset = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 11;
                    report = golf[report];
                    report = offset.bind(entity)(report);
                    report = report.CaptchaTypes;
                    yankee = report.HCAPTCHA;
                    kilo = undefined;
                    backup = zulu;
                    report = kilo[verify](backup, foxtrot, romeo, yankee, offset);
                    oscar = _closure1_slot1;
                    report = 6;
                    report = golf[report];
                    golf = oscar.bind(entity)(report);
                    oscar = golf.track;
                    tango = _closure1_slot9;
                    report = tango.CAPTCHA_FAILED;
                    tango = {};
                    tango['reason'] = zulu;
                    tango = oscar.bind(golf)(report, tango);
                    mike = _closure3_slot1;
                    mike = mike.bind(entity)(zulu);
 334:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 14;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.pop;
                    mike = mike.bind(zulu)();
                    return entity;
                }
            };
            zulu['onMessage'] = golf;
            mike = _closure2_slot1;
            zulu['rqdata'] = mike;
            mike = 'hcaptcha';
            mike = report.bind(oscar)(tango, zulu, mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    tango['showHcaptcha'] = report;
    report = function() { // Original name: showRecaptcha
        mike = this;
        var _closure2_slot0 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            report = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 10;
            tango = verify[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            tango = oscar.v4;
            golf = tango.bind(oscar)();
            var _closure3_slot2 = golf;
            oscar = _closure1_slot13;
            options = _closure1_slot8;
            tango = 11;
            tango = verify[tango];
            tango = report.bind(entity)(tango);
            tango = tango.CaptchaTypes;
            offset = tango.HCAPTCHA;
            foxtrot = 'initial-load';
            backup = undefined;
            romeo = golf;
            yankee = options;
            tango = backup[oscar](foxtrot, romeo, yankee, offset, verify);
            golf = _closure1_slot11;
            oscar = golf.showCaptcha;
            tango = _closure1_slot6;
            report = tango.theme;
            tango = 'https://cdn.discordapp.com/recaptcha/ios.html';
            tango = oscar.bind(golf)(options, report, tango);
            report = _closure1_slot12;
            golf = report.addListener;
            zulu = _closure1_slot7;
            oscar = zulu.SOLVED;
            tango = function(argFoo) {
                mike = _closure2_slot0;
                entity = mike.closeCaptcha;
                entity = entity.bind(mike)();
                golf = _closure1_slot13;
                offset = _closure3_slot2;
                verify = _closure1_slot8;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 11;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.CaptchaTypes;
                options = zulu.RECAPTCHA;
                yankee = 'verify';
                romeo = undefined;
                zulu = romeo[golf](yankee, offset, verify, options, golf);
                zulu = _closure3_slot0;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango = golf.bind(report)(oscar, tango);
            tango = report.addListener;
            zulu = zulu.EXPIRED;
            mike = function() {
                mike = _closure2_slot0;
                entity = mike.closeCaptcha;
                entity = entity.bind(mike)();
                yankee = _closure1_slot13;
                tango = _closure1_slot0;
                report = _closure1_slot2;
                mike = 13;
                zulu = report[mike];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.CaptchaError;
                offset = zulu.EXPIRED;
                backup = _closure3_slot2;
                foxtrot = _closure1_slot8;
                golf = 11;
                golf = report[golf];
                golf = tango.bind(entity)(golf);
                golf = golf.CaptchaTypes;
                romeo = golf.RECAPTCHA;
                sizing = undefined;
                kilo = offset;
                golf = sizing[yankee](kilo, backup, foxtrot, romeo, yankee);
                options = _closure1_slot1;
                golf = 6;
                golf = report[golf];
                verify = options.bind(entity)(golf);
                options = verify.track;
                oscar = _closure1_slot9;
                golf = oscar.CAPTCHA_FAILED;
                oscar = {};
                offset = 'expired';
                oscar['reason'] = offset;
                oscar = options.bind(verify)(golf, oscar);
                zulu = _closure3_slot1;
                mike = report[mike];
                mike = tango.bind(entity)(mike);
                mike = mike.CaptchaError;
                mike = mike.EXPIRED;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    tango['showRecaptcha'] = report;
    report = 17;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/native/CaptchaUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: InlineHcaptcha
        zulu = argFoo;
        options = zulu.siteKey;
        var _closure2_slot0 = options;
        entity = zulu.onVerify;
        var _closure2_slot1 = entity;
        entity = zulu.onError;
        var _closure2_slot2 = entity;
        mike = {'siteKey': 0, 'onVerify': 0, 'onError': 0};
        foxtrot = null;
        backup = mike;
        entity = silentSetPrototypeOf(backup, foxtrot);
        backup = {};
        foxtrot = zulu;
        romeo = mike;
        report = copyDataProperties(backup, foxtrot, romeo);
        zulu = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 9;
        mike = verify[mike];
        tango = undefined;
        yankee = zulu.bind(tango)(mike);
        offset = yankee.useStateFromStores;
        mike = _closure1_slot5;
        oscar = new Array(1);
        oscar[0] = mike;
        mike = function() {
            entity = _closure1_slot5;
            entity = entity.locale;
            return entity;
        };
        oscar = offset.bind(yankee)(oscar, mike);
        mike = 10;
        mike = verify[mike];
        zulu = zulu.bind(tango)(mike);
        mike = zulu.v4;
        mike = mike.bind(zulu)();
        var _closure2_slot3 = mike;
        yankee = _closure1_slot3;
        offset = yankee.useEffect;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = options;
        mike = function() {
            oscar = _closure1_slot13;
            verify = _closure2_slot3;
            options = _closure2_slot0;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            mike = mike.CaptchaTypes;
            golf = mike.HCAPTCHA;
            offset = 'initial-load';
            yankee = undefined;
            mike = yankee[oscar](offset, verify, options, golf, oscar);
            return entity;
        };
        mike = offset.bind(yankee)(mike, zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot1;
        entity = 12;
        entity = verify[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['siteKey'] = options;
        golf = function(argFoo) { // Original name: onMessage
            _fun122859: for(var _fun122859_ip = 0; ; ) switch(_fun122859_ip) {
 0:
                entity = argFoo;
                mike = entity.nativeEvent;
                mike = mike.data;
                report = null;
                if(!(report != mike)) { _fun122859_ip = 327; continue _fun122859 }
 22:
                entity = entity.nativeEvent;
                zulu = entity.data;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 13;
                entity = entity[golf];
                mike = undefined;
                entity = oscar.bind(mike)(entity);
                entity = entity.CaptchaError;
                entity = entity.CANCEL;
                if(!(zulu !== entity)) { _fun122859_ip = 210; continue _fun122859 }
 76:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(mike)(entity);
                entity = entity.CaptchaError;
                entity = entity.ERROR;
                if(!(zulu !== entity)) { _fun122859_ip = 210; continue _fun122859 }
 109:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(mike)(entity);
                entity = entity.CaptchaError;
                entity = entity.EXPIRED;
                if(!(zulu !== entity)) { _fun122859_ip = 210; continue _fun122859 }
 142:
                offset = _closure1_slot13;
                backup = _closure2_slot3;
                foxtrot = _closure2_slot0;
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                oscar = 11;
                oscar = yankee[oscar];
                oscar = golf.bind(mike)(oscar);
                oscar = oscar.CaptchaTypes;
                romeo = oscar.HCAPTCHA;
                kilo = 'verify';
                sizing = undefined;
                oscar = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
                entity = _closure2_slot1;
                entity = entity.bind(mike)(zulu);
                _fun122859_ip = 327; continue _fun122859;
 210:
                offset = _closure1_slot13;
                backup = _closure2_slot3;
                foxtrot = _closure2_slot0;
                yankee = _closure1_slot0;
                options = _closure1_slot2;
                oscar = 11;
                oscar = options[oscar];
                oscar = yankee.bind(mike)(oscar);
                oscar = oscar.CaptchaTypes;
                romeo = oscar.HCAPTCHA;
                sizing = undefined;
                kilo = zulu;
                oscar = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
                golf = _closure1_slot1;
                oscar = 6;
                oscar = options[oscar];
                options = golf.bind(mike)(oscar);
                golf = options.track;
                tango = _closure1_slot9;
                oscar = tango.CAPTCHA_FAILED;
                tango = {};
                tango['reason'] = zulu;
                tango = golf.bind(options)(oscar, tango);
                tango = _closure2_slot2;
                if(!(report != tango)) { _fun122859_ip = 327; continue _fun122859 }
 318:
                entity = _closure2_slot2;
                entity = entity.bind(mike)(zulu);
 327:
                entity = undefined;
                return entity;
            }
        };
        entity['onMessage'] = golf;
        entity['languageCode'] = oscar;
        backup = entity;
        foxtrot = report;
        report = copyDataProperties(backup, foxtrot);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['InlineHcaptcha'] = mike;
    return entity;
})();