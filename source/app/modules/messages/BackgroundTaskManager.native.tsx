// app/modules/messages/BackgroundTaskManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun82197: for(var _fun82197_ip = 0; ; ) switch(_fun82197_ip) {
 0:
        verify = argBar;
        report = argBaz;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        var _closure1_slot1 = report;
        var _closure1_slot2 = offset;
        mike = function(argFoo, argBar) { // Original name: backgroundify
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot3;
            mike = undefined;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun82200: for(var _fun82200_ip = 0; ; ) switch(_fun82200_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun82200_ip = 102; continue _fun82200 }
 9:
                        tango = _closure1_slot5;
                        var _closure4_slot0 = tango;
 20: // try_start_0
                        oscar = _closure1_slot6;
                        mike = _closure2_slot1;
                        report = undefined;
                        mike = oscar.bind(report)(mike);
                        SaveGenerator(address=42);
 40:
                        return mike;
 42:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun82200_ip = 81; continue _fun82200 }
 48:
                        _closure4_slot0 = mike;
 52: // try_end0
                        tango = _closure2_slot0;
                        report = tango.bind(report)();
                        tango = report.finally;
                        zulu = function() {
                            zulu = _closure1_slot7;
                            mike = _closure4_slot0;
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        zulu = tango.bind(report)(zulu);
                        return zulu;
 81:
                        return mike;
 84: // catch_target0
                        CatchBlockStart(arg_register=1);
                        zulu = _closure2_slot0;
                        mike = undefined;
                        mike = zulu.bind(mike)();
                        return mike;
 102:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity = global;
        options = entity.Object;
        oscar = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = oscar.bind(options)(zulu, entity, tango);
        entity = 0;
        tango = offset[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        var _closure1_slot3 = tango;
        tango = 1;
        tango = offset[tango];
        tango = verify.bind(entity)(tango);
        tango = tango.NativeModules;
        var _closure1_slot4 = tango;
        report = 2;
        report = offset[report];
        oscar = verify.bind(entity)(report);
        report = oscar.isAndroid;
        report = report.bind(oscar)();
        oscar = -1;
        if(report) { _fun82197_ip = 146; continue _fun82197 }
 134:
        tango = tango.DCDBackgroundTaskManager;
        oscar = tango.backgroundTaskIdentifierInvalid;
 146:
        var _closure1_slot5 = oscar;
        report = function(argFoo) { // Original name: startBackgroundTask
            _fun82202: for(var _fun82202_ip = 0; ; ) switch(_fun82202_ip) {
 0:
                entity = argFoo;
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 2;
                mike = report[mike];
                oscar = undefined;
                zulu = zulu.bind(oscar)(mike);
                mike = zulu.isAndroid;
                mike = mike.bind(zulu)();
                if(mike) { _fun82202_ip = 62; continue _fun82202 }
 40:
                mike = _closure1_slot4;
                zulu = mike.DCDBackgroundTaskManager;
                mike = zulu.startBackgroundTask;
                mike = mike.bind(zulu)();
                return mike;
 62:
                mike = null;
                if(!(mike != entity)) { _fun82202_ip = 179; continue _fun82202 }
 68:
                options = entity.title;
                report = entity.content;
                mike = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 3;
                entity = golf[entity];
                zulu = mike.bind(oscar)(entity);
                mike = zulu.addServiceHandler;
                entity = {};
                entity['title'] = options;
                entity['content'] = report;
                report = _closure1_slot0;
                tango = 4;
                options = golf[tango];
                options = report.bind(oscar)(options);
                options = options.ServiceNotificationPriority;
                options = options.MEDIUM;
                entity['priority'] = options;
                tango = golf[tango];
                tango = report.bind(oscar)(tango);
                tango = tango.ServiceNotificationType;
                tango = tango.FILE_UPLOAD;
                entity['type'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
 179:
                entity = global;
                zulu = entity.Promise;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                verify = function(argFoo) {
                    zulu = _closure1_slot5;
                    mike = argFoo;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
                    return entity;
                };
                offset = mike;
                entity = new offset[zulu](verify, options);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        var _closure1_slot6 = report;
        tango = function(argFoo) { // Original name: endBackgroundTask
            _fun82204: for(var _fun82204_ip = 0; ; ) switch(_fun82204_ip) {
 0:
                zulu = argFoo;
                mike = _closure1_slot5;
                if(!(zulu !== mike)) { _fun82204_ip = 102; continue _fun82204 }
 14:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 2;
                mike = tango[mike];
                tango = undefined;
                report = report.bind(tango)(mike);
                mike = report.isAndroid;
                mike = mike.bind(report)();
                if(mike) { _fun82204_ip = 71; continue _fun82204 }
 48:
                mike = _closure1_slot4;
                report = mike.DCDBackgroundTaskManager;
                mike = report.endBackgroundTask;
                mike = mike.bind(report)(zulu);
                _fun82204_ip = 102; continue _fun82204;
 71:
                mike = _closure1_slot1;
                report = _closure1_slot2;
                entity = 3;
                entity = report[entity];
                mike = mike.bind(tango)(entity);
                entity = mike.removeServiceHandler;
                entity = entity.bind(mike)(zulu);
 102:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot7 = tango;
        golf = {};
        golf['backgroundTaskIdentifierInvalid'] = oscar;
        golf['backgroundify'] = mike;
        golf['startBackgroundTask'] = report;
        golf['endBackgroundTask'] = tango;
        options = 5;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'modules/messages/BackgroundTaskManager.native.tsx';
        options = verify.bind(offset)(options);
        zulu['default'] = golf;
        zulu['backgroundTaskIdentifierInvalid'] = oscar;
        zulu['startBackgroundTask'] = report;
        zulu['endBackgroundTask'] = tango;
        zulu['backgroundify'] = mike;
        return entity;
    }
})();