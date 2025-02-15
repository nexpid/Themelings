// app/modules/captcha/CaptchaStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    options = oscar.bind(entity)(tango);
    report = options.create;
    tango = function() {
        entity = {};
        mike = {};
        entity['captchaServeVolume'] = mike;
        return entity;
    };
    tango = report.bind(options)(tango);
    var _closure1_slot4 = tango;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/captcha/CaptchaStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['useCaptchaStore'] = tango;
    tango = function() { // Original name: isCaptchaStoreVolumeEmpty
        entity = global;
        zulu = entity.Object;
        mike = zulu.keys;
        tango = _closure1_slot4;
        entity = tango.getState;
        entity = entity.bind(tango)();
        entity = entity.captchaServeVolume;
        entity = mike.bind(zulu)(entity);
        mike = entity.length;
        entity = 0;
        entity = entity === mike;
        return entity;
    };
    zulu['isCaptchaStoreVolumeEmpty'] = tango;
    tango = function(argFoo) { // Original name: incrementCaptchaServeVolume
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun122841: for(var _fun122841_ip = 0; ; ) switch(_fun122841_ip) {
 0:
                    report = argFoo;
                    zulu = _closure2_slot0;
                    mike = null;
                    entity = report;
                    if(!(mike != zulu)) { _fun122841_ip = 105; continue _fun122841 }
 19:
                    zulu = _closure2_slot0;
                    mike = report.captchaServeVolume;
                    mike = zulu in mike;
                    zulu = {};
                    tango = {};
                    verify = report.captchaServeVolume;
                    offset = tango;
                    golf = copyDataProperties(offset, verify);
                    oscar = _closure2_slot0;
                    golf = 1;
                    if(mike) { _fun122841_ip = 75; continue _fun122841 }
 60:
                    tango[oscar] = golf;
                    zulu['captchaServeVolume'] = tango;
                    mike = zulu;
                    _fun122841_ip = 102; continue _fun122841;
 75:
                    report = report.captchaServeVolume;
                    report = report[oscar];
                    report = report + golf;
                    tango[oscar] = report;
                    zulu['captchaServeVolume'] = tango;
                    mike = zulu;
 102:
                    entity = mike;
 105:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['incrementCaptchaServeVolume'] = tango;
    mike = function() { // Original name: flushCaptchaServeVolume
        _fun122842: for(var _fun122842_ip = 0; ; ) switch(_fun122842_ip) {
 0:
            foxtrot = global;
            tango = foxtrot.Object;
            zulu = tango.entries;
            report = _closure1_slot4;
            entity = report.getState;
            entity = entity.bind(report)();
            entity = entity.captchaServeVolume;
            romeo = zulu.bind(tango)(entity);
            entity = romeo.length;
            yankee = 0;
            zulu = yankee < entity;
            entity = undefined;
            tango = 2;
            offset = 1;
            verify = 3;
            options = 4;
            golf = 'user_flow:';
            oscar = true;
            report = 0;
            if(!zulu) { _fun122842_ip = 207; continue _fun122842 }
 83:
            backup = romeo[report];
            zulu = _closure1_slot3;
            zulu = zulu.bind(entity)(backup, tango);
            result = zulu[yankee];
            sizing = zulu[offset];
            backup = _closure1_slot1;
            output = _closure1_slot2;
            zulu = output[verify];
            kilo = backup.bind(entity)(zulu);
            backup = kilo.distribution;
            zulu = {};
            echo = _closure1_slot0;
            output = output[options];
            output = echo.bind(entity)(output);
            output = output.MetricEvents;
            output = output.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
            zulu['name'] = output;
            output = foxtrot.HermesInternal;
            output = output.concat;
            result = output.bind(golf)(result);
            output = new Array(1);
            output[0] = result;
            zulu['tags'] = output;
            zulu = backup.bind(kilo)(zulu, sizing, oscar);
            report = report + 1;
            zulu = romeo.length;
            if(report < zulu) { _fun122842_ip = 83; continue _fun122842 }
 207:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = {};
                tango = {};
                entity['captchaServeVolume'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['flushCaptchaServeVolume'] = mike;
    return entity;
})();