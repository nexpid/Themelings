// app/modules/messages/BackgroundTaskManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        report = argBaz;
        zuuluu = argFre;
        offset = argPlu;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = report;
        var _closure1_slot2 = offset;
        michal = function(argFoo, argBar) { // Original name: backgroundify
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot3;
            michal = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 102; continue _fun00003 }
 9:
                        tangon = _closure1_slot5;
                        var _closure4_slot0 = tangon;
 20: // try_start_0
                        oscard = _closure1_slot6;
                        michal = _closure2_slot1;
                        report = undefined;
                        michal = oscard.bind(report)(michal);
                        SaveGenerator(address=42);
 40:
                        return michal;
 42:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscard) { _fun00004_ip = 81; continue _fun00003 }
 48:
                        _closure4_slot0 = michal;
 52: // try_end0
                        tangon = _closure2_slot0;
                        report = tangon.bind(report)();
                        tangon = report.finally;
                        zuuluu = function() {
                            zuuluu = _closure1_slot7;
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        zuuluu = tangon.bind(report)(zuuluu);
                        return zuuluu;
 81:
                        return michal;
 84: // catch_target0
                        CatchBlockStart(arg_register=1);
                        zuuluu = _closure2_slot0;
                        michal = undefined;
                        michal = zuuluu.bind(michal)();
                        return michal;
 102:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity = global;
        option = entity.Object;
        oscard = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = oscard.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = offset[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 1;
        tangon = offset[tangon];
        tangon = verify.bind(entity)(tangon);
        tangon = tangon.NativeModules;
        var _closure1_slot4 = tangon;
        report = 2;
        report = offset[report];
        oscard = verify.bind(entity)(report);
        report = oscard.isAndroid;
        report = report.bind(oscard)();
        oscard = -1;
        if(report) { _fun00002_ip = 146; continue _fun00001 }
 134:
        tangon = tangon.DCDBackgroundTaskManager;
        oscard = tangon.backgroundTaskIdentifierInvalid;
 146:
        var _closure1_slot5 = oscard;
        report = function(argFoo) { // Original name: startBackgroundTask
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 2;
                michal = report[michal];
                oscard = undefined;
                zuuluu = zuuluu.bind(oscard)(michal);
                michal = zuuluu.isAndroid;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00006_ip = 62; continue _fun00005 }
 40:
                michal = _closure1_slot4;
                zuuluu = michal.DCDBackgroundTaskManager;
                michal = zuuluu.startBackgroundTask;
                michal = michal.bind(zuuluu)();
                return michal;
 62:
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 186; continue _fun00005 }
 68:
                option = entity.title;
                report = entity.content;
                michal = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 3;
                entity = golfie[entity];
                zuuluu = michal.bind(oscard)(entity);
                michal = zuuluu.addServiceHandler;
                entity = {};
                entity['title'] = option;
                entity['content'] = report;
                report = _closure1_slot0;
                tangon = 4;
                option = golfie[tangon];
                option = report.bind(oscard)(option);
                option = option.ServiceNotificationPriority;
                option = option.MEDIUM;
                entity['priority'] = option;
                tangon = golfie[tangon];
                tangon = report.bind(oscard)(tangon);
                tangon = tangon.ServiceNotificationType;
                tangon = tangon.FILE_UPLOAD;
                entity['type'] = tangon;
                tangon = false;
                entity['usesGateway'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
 186:
                entity = global;
                zuuluu = entity.Promise;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                verify = function(argFoo) {
                    zuuluu = _closure1_slot5;
                    michal = argFoo;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
                    return entity;
                };
                offset = michal;
                entity = new offset[zuuluu](verify, option);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        var _closure1_slot6 = report;
        tangon = function(argFoo) { // Original name: endBackgroundTask
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                michal = _closure1_slot5;
                if(!(zuuluu !== michal)) { _fun00008_ip = 102; continue _fun00007 }
 14:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 2;
                michal = tangon[michal];
                tangon = undefined;
                report = report.bind(tangon)(michal);
                michal = report.isAndroid;
                michal = michal.bind(report)();
                if(michal) { _fun00008_ip = 71; continue _fun00007 }
 48:
                michal = _closure1_slot4;
                report = michal.DCDBackgroundTaskManager;
                michal = report.endBackgroundTask;
                michal = michal.bind(report)(zuuluu);
                _fun00008_ip = 102; continue _fun00007;
 71:
                michal = _closure1_slot1;
                report = _closure1_slot2;
                entity = 3;
                entity = report[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.removeServiceHandler;
                entity = entity.bind(michal)(zuuluu);
 102:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot7 = tangon;
        golfie = {};
        golfie['backgroundTaskIdentifierInvalid'] = oscard;
        golfie['backgroundify'] = michal;
        golfie['startBackgroundTask'] = report;
        golfie['endBackgroundTask'] = tangon;
        option = 5;
        option = offset[option];
        offset = verify.bind(entity)(option);
        verify = offset.fileFinishedImporting;
        option = 'modules/messages/BackgroundTaskManager.native.tsx';
        option = verify.bind(offset)(option);
        zuuluu['default'] = golfie;
        zuuluu['backgroundTaskIdentifierInvalid'] = oscard;
        zuuluu['startBackgroundTask'] = report;
        zuuluu['endBackgroundTask'] = tangon;
        zuuluu['backgroundify'] = michal;
        return entity;
    }
})();