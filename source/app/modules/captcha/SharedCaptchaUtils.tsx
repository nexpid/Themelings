// app/modules/captcha/SharedCaptchaUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    report = tango.incrementCaptchaServeVolume;
    var _closure1_slot0 = report;
    report = tango.flushCaptchaServeVolume;
    var _closure1_slot1 = report;
    tango = tango.isCaptchaStoreVolumeEmpty;
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
    var _closure1_slot3 = tango;
    tango = {};
    report = 'cancel';
    tango['CANCEL'] = report;
    report = 'error';
    tango['ERROR'] = report;
    report = 'expired';
    tango['EXPIRED'] = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/captcha/SharedCaptchaUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['CaptchaError'] = tango;
    tango = function(argFoo) { // Original name: extractCaptchaPropsFromResponse
        _fun122833: for(var _fun122833_ip = 0; ; ) switch(_fun122833_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = zulu.captcha_service;
            entity['captchaService'] = mike;
            mike = zulu.captcha_sitekey;
            entity['sitekey'] = mike;
            mike = {};
            tango = zulu.captcha_rqdata;
            mike['rqdata'] = tango;
            tango = zulu.captcha_rqtoken;
            mike['rqtoken'] = tango;
            report = zulu.should_serve_invisible;
            tango = null;
            tango = tango != report;
            if(!tango) { _fun122833_ip = 75; continue _fun122833 }
 72:
            tango = report;
 75:
            mike['serveInvisible'] = tango;
            zulu = zulu.user_flow;
            mike['userflow'] = zulu;
            entity['options'] = mike;
            return entity;
        }
    };
    zulu['extractCaptchaPropsFromResponse'] = tango;
    mike = function(argFoo) { // Original name: emitCaptchaDistributionMetric
        _fun122834: for(var _fun122834_ip = 0; ; ) switch(_fun122834_ip) {
 0:
            zulu = _closure1_slot2;
            entity = undefined;
            zulu = zulu.bind(entity)();
            if(!zulu) { _fun122834_ip = 43; continue _fun122834 }
 16:
            zulu = global;
            report = zulu.setTimeout;
            tango = _closure1_slot3;
            zulu = function() {
                mike = _closure1_slot1;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            zulu = report.bind(entity)(zulu, tango);
 43:
            zulu = _closure1_slot0;
            mike = argFoo;
            mike = zulu.bind(entity)(mike);
            return entity;
        }
    };
    zulu['emitCaptchaDistributionMetric'] = mike;
    return entity;
})();