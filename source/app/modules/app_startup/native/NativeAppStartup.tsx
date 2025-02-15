// app/modules/app_startup/native/NativeAppStartup.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot23;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot23;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: getInitialURLs
        entity = undefined;
        tango = _closure1_slot25;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _getInitialURLs
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 244; continue _fun00007 }
 10:
                    zulu = new Array(0);
                    mike = global;
                    report = mike.Promise;
                    tango = report.all;
                    golf = _closure1_slot7;
                    mike = golf.getInitialURL;
                    golf = mike.bind(golf)();
                    mike = new Array(2);
                    mike[0] = golf;
                    golf = _closure1_slot9;
                    options = golf.DynamicLinkManager;
                    golf = options.getInitialURL;
                    golf = golf.bind(options)();
                    mike[1] = golf;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=88);
 86:
                    return mike;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00008_ip = 241; continue _fun00007 }
 97:
                    report = _closure1_slot4;
                    options = undefined;
                    tango = 2;
                    report = report.bind(options)(mike, tango);
                    tango = 0;
                    verify = report[tango];
                    tango = 1;
                    golf = report[tango];
                    tango = null;
                    if(!(tango != verify)) { _fun00008_ip = 183; continue _fun00007 }
 131:
                    report = zulu.push;
                    tango = {};
                    tango['url'] = verify;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot3;
                    verify = 13;
                    verify = yankee[verify];
                    verify = offset.bind(options)(verify);
                    verify = verify.DeeplinkSource;
                    verify = verify.OS;
                    tango['source'] = verify;
                    tango = report.bind(zulu)(tango);
 183:
                    if(!golf) { _fun00008_ip = 238; continue _fun00007 }
 186:
                    report = zulu.push;
                    tango = {};
                    tango['url'] = golf;
                    golf = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscar = 13;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    oscar = oscar.DeeplinkSource;
                    oscar = oscar.Firebase;
                    tango['source'] = oscar;
                    tango = report.bind(zulu)(tango);
 238:
                    return zulu;
 241:
                    return mike;
 244:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot25 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: handleURL
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 14;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = 'handleURL';
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        mike = tango.bind(entity)(zulu, mike);
        zulu = mike.default;
        mike = argFoo;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: sharedInit
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = function(argFoo) { // Original name: handleNotification
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = argFoo;
                    mike = _closure2_slot0;
                    if(mike) { _fun00012_ip = 29; continue _fun00011 }
 13:
                    mike = _closure2_slot1;
                    entity = mike.push;
                    entity = entity.bind(mike)(report);
                    _fun00012_ip = 111; continue _fun00011;
 29:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot3;
                    entity = 14;
                    entity = tango[entity];
                    mike = undefined;
                    golf = zulu.bind(mike)(entity);
                    oscar = 'receiveNotification';
                    entity = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 23;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = golf.bind(mike)(oscar, entity);
                    entity = entity.default;
                    entity = entity.bind(mike)(report);
                    entity = 11;
                    entity = tango[entity];
                    entity = zulu.bind(mike)(entity);
                    mike = entity.extraProperties;
                    entity = true;
                    mike['tapped_notification'] = entity;
 111:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot3 = entity;
            report = function(argFoo) { // Original name: handleLocalNotification
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot0;
                    if(mike) { _fun00014_ip = 29; continue _fun00013 }
 13:
                    mike = _closure2_slot2;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
                    _fun00014_ip = 86; continue _fun00013;
 29:
                    tango = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 14;
                    entity = mike[entity];
                    mike = undefined;
                    report = tango.bind(mike)(entity);
                    tango = 'LocalPushNotificationActionCreators';
                    entity = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 24;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = report.bind(mike)(tango, entity);
                    entity = entity.receiveLocalNotification;
                    entity = entity.bind(mike)(zulu);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot4 = report;
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 16;
            zulu = golf[zulu];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            verify = zulu.Emitter;
            options = verify.injectBatchEmitChanges;
            offset = _closure1_slot0;
            zulu = 17;
            zulu = golf[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.batchUpdates;
            zulu = options.bind(verify)(zulu);
            offset = _closure1_slot7;
            verify = offset.addEventListener;
            options = 'url';
            zulu = function(argFoo) {
                entity = argFoo;
                report = entity.url;
                oscar = _closure1_slot18;
                zulu = oscar.log;
                mike = global;
                entity = mike.HermesInternal;
                golf = entity.concat;
                entity = 'Handling URL: ';
                entity = golf.bind(entity)(report);
                entity = zulu.bind(oscar)(entity);
                golf = _closure1_slot1;
                oscar = _closure1_slot3;
                entity = 18;
                zulu = oscar[entity];
                entity = undefined;
                options = golf.bind(entity)(zulu);
                golf = options.mark;
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = 'Handle URL ';
                zulu = zulu.bind(mike)(report);
                mike = '❗';
                mike = golf.bind(options)(mike, zulu);
                zulu = _closure1_slot26;
                mike = {};
                mike['url'] = report;
                report = _closure1_slot0;
                tango = 13;
                tango = oscar[tango];
                tango = report.bind(entity)(tango);
                tango = tango.DeeplinkSource;
                tango = tango.OS;
                mike['source'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = verify.bind(offset)(options, zulu);
            verify = _closure1_slot8;
            options = verify.ignoreLogs;
            zulu = ['The native module for Flipper seems unavailable', 'Could not find Fiber with id', 'Non-serializable values were found in the navigation state', 'Overriding previous layout animation with new one before the first began', 'Check the render method of `SceneView`'];
            zulu = options.bind(verify)(zulu);
            zulu = 19;
            options = golf[zulu];
            verify = oscar.bind(tango)(options);
            options = verify.getInitialBundleDownloaded;
            offset = options.bind(verify)();
            verify = offset.then;
            options = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    tango = null;
                    mike = tango != entity;
                    if(!mike) { _fun00016_ip = 22; continue _fun00015 }
 12:
                    zulu = entity.versionRequired;
                    mike = tango != zulu;
 22:
                    if(!mike) { _fun00016_ip = 112; continue _fun00015 }
 25:
                    report = _closure1_slot18;
                    tango = report.verbose;
                    golf = entity.versionRequired;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'Get initial downloaded bundle ';
                    zulu = oscar.bind(zulu)(golf);
                    zulu = tango.bind(report)(zulu);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 20;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.prepareUpdate;
                    entity = entity.versionRequired;
                    entity = mike.bind(zulu)(entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            options = verify.bind(offset)(options);
            options = golf[zulu];
            yankee = oscar.bind(tango)(options);
            offset = yankee.addEventListener;
            verify = 'downloaded';
            options = function(argFoo) {
                entity = argFoo;
                tango = entity.versionRequired;
                report = _closure1_slot18;
                zulu = report.verbose;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                mike = 'Bundle Event: bundle downloaded for ';
                mike = oscar.bind(mike)(tango);
                mike = zulu.bind(report)(mike);
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.prepareUpdate;
                mike = mike.bind(zulu)(tango);
                return entity;
            };
            options = offset.bind(yankee)(verify, options);
            options = golf[zulu];
            verify = oscar.bind(tango)(options);
            options = verify.getInitialOtaUpdateChecked;
            offset = options.bind(verify)();
            verify = offset.then;
            options = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.metrics;
                    tango = _closure1_slot18;
                    mike = tango.verbose;
                    entity = 'Initial OTA update check metrics';
                    entity = mike.bind(tango)(entity, zulu);
                    mike = _closure1_slot22;
                    entity = undefined;
                    report = mike.bind(entity)(zulu);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    tango = 19;
                    if(mike) { _fun00018_ip = 108; continue _fun00017 }
 60:
                    options = zulu.value;
                    golf = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[tango];
                    golf = golf.bind(entity)(mike);
                    mike = golf.emitOtaMetric;
                    mike = mike.bind(golf)(options);
                    golf = report.bind(entity)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00018_ip = 60; continue _fun00017 }
 108:
                    return entity;
                }
            };
            options = verify.bind(offset)(options);
            zulu = golf[zulu];
            options = oscar.bind(tango)(zulu);
            golf = options.addEventListener;
            oscar = 'otaUpdateChecked';
            zulu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.metrics;
                    tango = _closure1_slot18;
                    mike = tango.verbose;
                    entity = 'OTA update check metrics';
                    entity = mike.bind(tango)(entity, zulu);
                    mike = _closure1_slot22;
                    entity = undefined;
                    report = mike.bind(entity)(zulu);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    tango = 19;
                    if(mike) { _fun00020_ip = 108; continue _fun00019 }
 60:
                    options = zulu.value;
                    golf = _closure1_slot1;
                    mike = _closure1_slot3;
                    mike = mike[tango];
                    golf = golf.bind(entity)(mike);
                    mike = golf.emitOtaMetric;
                    mike = mike.bind(golf)(options);
                    golf = report.bind(entity)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00020_ip = 60; continue _fun00019 }
 108:
                    return entity;
                }
            };
            zulu = golf.bind(options)(oscar, zulu);
            options = _closure1_slot6;
            golf = options.addEventListener;
            oscar = 'change';
            zulu = function(argFoo) {
                oscar = argFoo;
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 11;
                report = tango[mike];
                entity = undefined;
                report = zulu.bind(entity)(report);
                report = report.imports;
                golf = report.appStateChangeStart;
                report = golf.record;
                report = report.bind(golf)();
                report = 18;
                report = tango[report];
                golf = zulu.bind(entity)(report);
                report = golf.resumeTracing;
                report = report.bind(golf)();
                report = 21;
                report = tango[report];
                options = zulu.bind(entity)(report);
                golf = options.addBreadcrumb;
                report = {};
                verify = global;
                verify = verify.HermesInternal;
                offset = verify.concat;
                verify = 'App state changed to ';
                verify = offset.bind(verify)(oscar);
                report['message'] = verify;
                verify = 'appState';
                report['category'] = verify;
                report = golf.bind(options)(report);
                report = 14;
                report = tango[report];
                options = zulu.bind(entity)(report);
                golf = 'handleAppStateChange';
                report = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 22;
                    mike = mike[entity];
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                report = options.bind(entity)(golf, report);
                report = report.default;
                report = report.bind(entity)(oscar);
                mike = tango[mike];
                mike = zulu.bind(entity)(mike);
                mike = mike.imports;
                zulu = mike.appStateChangeEnd;
                mike = zulu.record;
                mike = mike.bind(zulu)();
                return entity;
            };
            zulu = golf.bind(options)(oscar, zulu);
            zulu = _closure1_slot9;
            oscar = zulu.Hosts;
            zulu = null;
            if(!(zulu != oscar)) { _fun00010_ip = 460; continue _fun00009 }
 329:
            zulu = _closure1_slot9;
            options = zulu.Hosts;
            golf = options.setHosts;
            zulu = global;
            oscar = zulu.location;
            offset = oscar.protocol;
            oscar = zulu.window;
            oscar = oscar.GLOBAL_ENV;
            verify = oscar.API_ENDPOINT;
            oscar = zulu.HermesInternal;
            oscar = oscar.concat;
            romeo = '';
            oscar = oscar.bind(romeo)(offset, verify);
            verify = zulu.location;
            yankee = verify.protocol;
            verify = zulu.window;
            verify = verify.GLOBAL_ENV;
            offset = verify.CDN_HOST;
            zulu = zulu.HermesInternal;
            verify = zulu.concat;
            zulu = '//';
            zulu = verify.bind(romeo)(yankee, zulu, offset);
            zulu = golf.bind(options)(oscar, zulu);
 460:
            zulu = false;
            var _closure2_slot0 = zulu;
            zulu = new Array(0);
            var _closure2_slot1 = zulu;
            zulu = new Array(0);
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 25;
            golf = oscar[entity];
            offset = zulu.bind(tango)(golf);
            verify = offset.addNotificationEventListener;
            options = 'notification';
            golf = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = _closure1_slot11;
                    mike = zulu.getState;
                    mike = mike.bind(zulu)();
                    report = _closure1_slot18;
                    tango = report.log;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    oscar = zulu.concat;
                    zulu = 'Push notification received, the app state is ';
                    zulu = oscar.bind(zulu)(mike);
                    zulu = tango.bind(report)(zulu);
                    entity = _closure1_slot12;
                    entity = entity.ACTIVE;
                    if(!(mike !== entity)) { _fun00022_ip = 87; continue _fun00021 }
 70:
                    zulu = _closure2_slot3;
                    mike = undefined;
                    entity = argFoo;
                    entity = zulu.bind(mike)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            golf = verify.bind(offset)(options, golf);
            entity = oscar[entity];
            tango = zulu.bind(tango)(entity);
            zulu = tango.addNotificationEventListener;
            entity = 'localNotification';
            entity = zulu.bind(tango)(entity, report);
            entity = {};
            mike = function() { // Original name: onStorageInitialize
                mike = true;
                _closure2_slot0 = mike;
                tango = _closure2_slot1;
                zulu = tango.forEach;
                mike = _closure2_slot3;
                mike = zulu.bind(tango)(mike);
                tango = _closure2_slot2;
                zulu = tango.forEach;
                mike = _closure2_slot4;
                mike = zulu.bind(tango)(mike);
                zulu = _closure2_slot1;
                mike = 0;
                zulu['length'] = mike;
                entity = _closure2_slot2;
                entity['length'] = mike;
                entity = undefined;
                return entity;
            };
            entity['onStorageInitialize'] = mike;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _trackFirstLaunched
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00024_ip = 263; continue _fun00023 }
 10:
                    report = _closure1_slot0;
                    mike = _closure1_slot3;
                    golf = 26;
                    mike = mike[golf];
                    zulu = undefined;
                    mike = report.bind(zulu)(mike);
                    options = mike.Storage;
                    oscar = options.get;
                    mike = _closure1_slot13;
                    report = mike.APP_FIRST_LAUNCHED;
                    mike = true;
                    mike = oscar.bind(options)(report, mike);
                    if(!mike) { _fun00024_ip = 257; continue _fun00023 }
 70:
                    report = _closure1_slot1;
                    yankee = _closure1_slot3;
                    mike = 27;
                    mike = yankee[mike];
                    verify = report.bind(zulu)(mike);
                    options = verify.track;
                    mike = _closure1_slot13;
                    oscar = mike.APP_FIRST_LAUNCHED;
                    report = {};
                    offset = _closure1_slot0;
                    mike = 28;
                    mike = yankee[mike];
                    offset = offset.bind(zulu)(mike);
                    mike = offset.isAndroid;
                    mike = mike.bind(offset)();
                    offset = _closure1_slot17;
                    if(mike) { _fun00024_ip = 147; continue _fun00023 }
 139:
                    mike = offset.IOS;
                    _fun00024_ip = 153; continue _fun00023;
 147:
                    mike = offset.ANDROID;
 153:
                    report['platform'] = mike;
                    mike = _closure1_slot9;
                    yankee = mike.InstallReferrer;
                    mike = null;
                    offset = mike == yankee;
                    mike = undefined;
                    if(offset) { _fun00024_ip = 190; continue _fun00023 }
 181:
                    offset = yankee.get;
                    mike = offset.bind(yankee)();
 190:
                    SaveGenerator(address=194);
 192:
                    return mike;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 260; continue _fun00023 }
 200:
                    report['referrer'] = mike;
                    report = options.bind(verify)(oscar, report);
                    oscar = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[golf];
                    report = oscar.bind(zulu)(report);
                    golf = report.Storage;
                    oscar = golf.set;
                    tango = _closure1_slot13;
                    report = tango.APP_FIRST_LAUNCHED;
                    tango = false;
                    tango = oscar.bind(golf)(report, tango);
 257:
                    return zulu;
 260:
                    return mike;
 263:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: loadStorage
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _loadStorage
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 213; continue _fun00025 }
 12:
                    mike = undefined;
                    var _closure4_slot0 = mike;
 18: // try_start_0
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    golf = 11;
                    zulu = options[golf];
                    zulu = oscar.bind(mike)(zulu);
                    oscar = zulu.loadStorage;
                    zulu = oscar.recordStart;
                    zulu = zulu.bind(oscar)();
                    oscar = _closure1_slot0;
                    zulu = 26;
                    zulu = options[zulu];
                    zulu = oscar.bind(mike)(zulu);
                    verify = zulu.Storage;
                    options = verify.refresh;
                    oscar = _closure1_slot16;
                    zulu = new Array(0);
                    zulu = options.bind(verify)(zulu, oscar);
                    SaveGenerator(address=103);
 101:
                    return zulu;
 103:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00026_ip = 181; continue _fun00025 }
 109:
                    _closure4_slot0 = zulu;
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    options = report[golf];
                    options = oscar.bind(mike)(options);
                    verify = options.loadStorage;
                    options = verify.recordEnd;
                    options = options.bind(verify)();
                    report = report[golf];
                    report = oscar.bind(mike)(report);
                    oscar = report.parseStorage;
                    report = oscar.measure;
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 26;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        zulu = entity.Storage;
                        mike = zulu.parse;
                        entity = _closure4_slot0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
 179: // try_end0
                    _fun00026_ip = 210; continue _fun00025;
 181:
                    return zulu;
 184: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot18;
                    tango = report.error;
                    zulu = 'Unable to load Storage';
                    zulu = tango.bind(report)(zulu, oscar);
 210:
                    return mike;
 213:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: loadKvStorage
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0: // try_start_0
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 30;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.initialize;
            entity = entity.bind(mike)();
 35: // try_end0
            _fun00028_ip = 96; continue _fun00027;
 37: // catch_target0
            CatchBlockStart(arg_register=2);
            report = _closure1_slot18;
            tango = report.warn;
            mike = 'DatabaseManager.initialize errored.';
            mike = tango.bind(report)(mike, zulu);
            tango = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 21;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.captureException;
            entity = entity.bind(mike)(zulu);
 96:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: initializeIntl
        entity = undefined;
        tango = _closure1_slot33;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _initializeIntl
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00030_ip = 214; continue _fun00029 }
 10:
                    mike = argFoo;
                    report = mike.log;
                    oscar = undefined;
                    SaveGenerator(address=25);
 23:
                    return oscar;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00030_ip = 211; continue _fun00029 }
 34:
                    golf = _closure1_slot0;
                    options = _closure1_slot3;
                    zulu = 32;
                    zulu = options[zulu];
                    golf = golf.bind(oscar)(zulu);
                    zulu = golf.waitForAllDefaultIntlMessagesLoaded;
                    zulu = zulu.bind(golf)();
                    SaveGenerator(address=71);
 69:
                    return zulu;
 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00030_ip = 208; continue _fun00029 }
 80:
                    if(!report) { _fun00030_ip = 132; continue _fun00029 }
 83:
                    golf = _closure1_slot1;
                    options = _closure1_slot3;
                    report = 18;
                    report = options[report];
                    offset = golf.bind(oscar)(report);
                    verify = offset.markAndLog;
                    options = _closure1_slot18;
                    golf = '🌎';
                    report = 'i18n loaded';
                    report = verify.bind(offset)(options, golf, report);
 132:
                    golf = _closure1_slot0;
                    tango = _closure1_slot3;
                    report = 34;
                    report = tango[report];
                    golf = golf.bind(oscar)(report);
                    report = 33;
                    report = tango[report];
                    tango = tango.paths;
                    tango = golf.bind(oscar)(report, tango);
                    SaveGenerator(address=174);
 172:
                    return tango;
 174:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00030_ip = 205; continue _fun00029 }
 180:
                    report = tango.default;
                    report = report.bind(oscar)();
                    SaveGenerator(address=193);
 191:
                    return report;
 193:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun00030_ip = 202; continue _fun00029 }
 199:
                    return oscar;
 202:
                    return report;
 205:
                    return tango;
 208:
                    return zulu;
 211:
                    return mike;
 214:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot33 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _init
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00032_ip = 1709; continue _fun00031 }
 12:
                    tango = undefined;
                    var _closure4_slot0 = tango;
                    zulu = _closure1_slot21;
                    mike = _closure1_slot20;
                    mike = mike.Full;
                    if(!(zulu === mike)) { _fun00032_ip = 87; continue _fun00031 }
 39:
                    zulu = _closure1_slot1;
                    oscar = _closure1_slot3;
                    mike = 21;
                    mike = oscar[mike];
                    oscar = zulu.bind(tango)(mike);
                    zulu = oscar.addBreadcrumb;
                    mike = {};
                    golf = 'Init called when already initialized';
                    mike['message'] = golf;
                    mike = zulu.bind(oscar)(mike);
                    _fun00032_ip = 1700; continue _fun00031;
 87:
                    zulu = _closure1_slot21;
                    mike = _closure1_slot20;
                    mike = mike.HeadlessRan;
                    oscar = zulu === mike;
                    mike = _closure1_slot20;
                    mike = mike.Full;
                    _closure1_slot21 = mike;
                    verify = undefined;
                    if(oscar) { _fun00032_ip = 138; continue _fun00031 }
 124:
                    mike = _closure1_slot27;
                    mike = mike.bind(tango)();
                    verify = mike.onStorageInitialize;
 138:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    sizing = 28;
                    mike = mike[sizing];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.isAndroid;
                    mike = mike.bind(zulu)();
                    golf = _closure1_slot0;
                    offset = _closure1_slot3;
                    zulu = 35;
                    zulu = offset[zulu];
                    golf = golf.bind(tango)(zulu);
                    if(mike) { _fun00032_ip = 202; continue _fun00031 }
 190:
                    mike = golf.lockOrientationForiOS;
                    mike = mike.bind(golf)();
                    _fun00032_ip = 222; continue _fun00031;
 202:
                    zulu = golf.unlockOrientation;
                    mike = {};
                    offset = false;
                    mike['unlockAfterRotatingToPreviousLock'] = offset;
                    mike = zulu.bind(golf)(mike);
 222:
                    foxtrot = _closure1_slot1;
                    yankee = _closure1_slot3;
                    backup = 11;
                    mike = yankee[backup];
                    zulu = foxtrot.bind(tango)(mike);
                    mike = _closure1_slot6;
                    golf = mike.currentState;
                    mike = _closure1_slot12;
                    mike = mike.BACKGROUND;
                    mike = golf === mike;
                    zulu['didBackgroundApp'] = mike;
                    mike = yankee[backup];
                    mike = foxtrot.bind(tango)(mike);
                    mike = mike.imports;
                    zulu = mike.loadStorageStart;
                    mike = zulu.record;
                    mike = mike.bind(zulu)();
                    zulu = global;
                    offset = zulu.Promise;
                    golf = offset.all;
                    mike = _closure1_slot24;
                    romeo = mike.bind(tango)();
                    mike = new Array(5);
                    mike[0] = romeo;
                    romeo = 25;
                    romeo = yankee[romeo];
                    foxtrot = foxtrot.bind(tango)(romeo);
                    romeo = foxtrot.getInitialNotification;
                    kilo = romeo.bind(foxtrot)();
                    foxtrot = kilo.catch;
                    romeo = function() {
                        entity = null;
                        return entity;
                    };
                    romeo = foxtrot.bind(kilo)(romeo);
                    mike[1] = romeo;
                    romeo = _closure1_slot29;
                    romeo = romeo.bind(tango)();
                    mike[2] = romeo;
                    romeo = _closure1_slot31;
                    romeo = romeo.bind(tango)();
                    mike[3] = romeo;
                    foxtrot = _closure1_slot0;
                    kilo = 34;
                    romeo = yankee[kilo];
                    foxtrot = foxtrot.bind(tango)(romeo);
                    romeo = 36;
                    romeo = yankee[romeo];
                    yankee = yankee.paths;
                    foxtrot = foxtrot.bind(tango)(romeo, yankee);
                    romeo = foxtrot.then;
                    yankee = function(argFoo) {
                        entity = argFoo;
                        mike = entity.default;
                        entity = undefined;
                        entity = mike.bind(entity)();
                        return entity;
                    };
                    yankee = romeo.bind(foxtrot)(yankee);
                    mike[4] = yankee;
                    mike = golf.bind(offset)(mike);
                    SaveGenerator(address=465);
 463:
                    return mike;
 465:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun00032_ip = 1706; continue _fun00031 }
 474:
                    offset = _closure1_slot4;
                    golf = 2;
                    romeo = offset.bind(tango)(mike, golf);
                    yankee = 0;
                    echo = romeo[yankee];
                    offset = 1;
                    result = romeo[offset];
                    output = _closure1_slot1;
                    romeo = _closure1_slot3;
                    foxtrot = romeo[backup];
                    foxtrot = output.bind(tango)(foxtrot);
                    foxtrot = foxtrot.imports;
                    update = foxtrot.loadStorageEnd;
                    foxtrot = update.record;
                    foxtrot = foxtrot.bind(update)();
                    source = _closure1_slot32;
                    foxtrot = {};
                    update = true;
                    foxtrot['log'] = update;
                    foxtrot = source.bind(tango)(foxtrot);
                    source = 18;
                    romeo = romeo[source];
                    sequence = output.bind(tango)(romeo);
                    control = sequence.markAndLog;
                    output = _closure1_slot18;
                    vacuum = '🏃';
                    romeo = 'The initial promise has resolved';
                    romeo = control.bind(sequence)(output, vacuum, romeo);
                    romeo = null;
                    output = romeo != echo;
                    if(!output) { _fun00032_ip = 616; continue _fun00031 }
 607:
                    control = echo.length;
                    output = control > yankee;
 616:
                    if(!output) { _fun00032_ip = 641; continue _fun00031 }
 619:
                    sequence = _closure1_slot18;
                    control = sequence.log;
                    output = 'initialURLs';
                    output = control.bind(sequence)(output, echo);
 641:
                    if(!(romeo != result)) { _fun00032_ip = 667; continue _fun00031 }
 645:
                    sequence = _closure1_slot18;
                    control = sequence.log;
                    output = 'initialNotification';
                    output = control.bind(sequence)(output, result);
 667:
                    control = _closure1_slot0;
                    output = _closure1_slot3;
                    sequence = 26;
                    output = output[sequence];
                    output = control.bind(tango)(output);
                    config = output.Storage;
                    control = config.get;
                    output = _closure1_slot14;
                    output = control.bind(config)(output);
                    if(!(romeo == output)) { _fun00032_ip = 764; continue _fun00031 }
 711:
                    control = _closure1_slot0;
                    output = _closure1_slot3;
                    output = output[sequence];
                    output = control.bind(tango)(output);
                    config = output.Storage;
                    sequence = config.set;
                    control = _closure1_slot14;
                    record = zulu.Date;
                    output = record.now;
                    output = output.bind(record)();
                    output = sequence.bind(config)(control, output);
 764:
                    output = function() { // Original name: trackFirstLaunched
                        entity = undefined;
                        tango = _closure1_slot28;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    output = output.bind(tango)();
                    if(oscar) { _fun00032_ip = 794; continue _fun00031 }
 778:
                    output = _closure1_slot36;
                    output = output.bind(tango)();
                    if(!(romeo != verify)) { _fun00032_ip = 794; continue _fun00031 }
 790:
                    verify = verify.bind(tango)();
 794:
                    output = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[source];
                    control = output.bind(tango)(verify);
                    if(oscar) { _fun00032_ip = 842; continue _fun00031 }
 814:
                    source = control.time;
                    output = 'Flux.initialize()';
                    verify = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        entity = 16;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.initialize;
                        zulu = zulu.bind(tango)();
                        tango = _closure1_slot18;
                        zulu = tango.verbose;
                        mike = 'Flux has initialized';
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    verify = source.bind(control)(vacuum, output, verify);
                    _fun00032_ip = 865; continue _fun00031;
 842:
                    source = control.markAndLog;
                    output = _closure1_slot18;
                    verify = 'Flux already initialized.';
                    verify = source.bind(control)(output, vacuum, verify);
 865:
                    output = echo.forEach;
                    verify = _closure1_slot26;
                    verify = output.bind(echo)(verify);
                    output = romeo != result;
                    verify = false;
                    if(!output) { _fun00032_ip = 958; continue _fun00031 }
 888:
                    source = _closure1_slot1;
                    echo = _closure1_slot3;
                    output = 14;
                    output = echo[output];
                    vacuum = source.bind(tango)(output);
                    control = 'receiveNotification';
                    output = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 23;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    output = vacuum.bind(tango)(control, output);
                    output = output.default;
                    echo = echo[backup];
                    echo = source.bind(tango)(echo);
                    echo = echo.extraProperties;
                    echo['tapped_notification'] = update;
                    verify = output.bind(tango)(result);
 958:
                    if(verify) { _fun00032_ip = 1030; continue _fun00031 }
 961:
                    output = _closure1_slot10;
                    verify = output.getChannelId;
                    echo = verify.bind(output)();
                    if(!(romeo != echo)) { _fun00032_ip = 1030; continue _fun00031 }
 979:
                    output = _closure1_slot1;
                    result = _closure1_slot3;
                    verify = 37;
                    verify = result[verify];
                    result = output.bind(tango)(verify);
                    output = result.fetchMessages;
                    verify = {'channelId': null, 'isPreload': true, 'skipLocalFetch': true};
                    verify['channelId'] = echo;
                    verify = output.bind(result)(verify);
 1030:
                    output = _closure1_slot1;
                    verify = _closure1_slot3;
                    backup = verify[backup];
                    backup = output.bind(tango)(backup);
                    backup = backup.imports;
                    output = backup.loadMiniCacheStart;
                    backup = output.record;
                    backup = backup.bind(output)();
                    result = zulu.Promise;
                    backup = result.prototype;
                    output = Object.create(backup, {constructor: {value: result}});
                    target = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        report = _closure1_slot0;
                        zulu = _closure1_slot3;
                        entity = 34;
                        tango = zulu[entity];
                        entity = undefined;
                        report = report.bind(entity)(tango);
                        tango = 38;
                        tango = zulu[tango];
                        zulu = zulu.paths;
                        tango = report.bind(entity)(tango, zulu);
                        zulu = tango.then;
                        mike = function(argFoo) {
                            entity = argFoo;
                            tango = entity.default;
                            zulu = _closure1_slot0;
                            report = _closure1_slot3;
                            mike = 39;
                            mike = report[mike];
                            report = undefined;
                            zulu = zulu.bind(report)(mike);
                            mike = zulu.computeInitialNavigationState;
                            zulu = mike.bind(zulu)();
                            mike = _closure1_slot4;
                            entity = 1;
                            mike = mike.bind(report)(zulu, entity);
                            entity = 0;
                            zulu = mike[entity];
                            mike = tango.loadCacheAsync;
                            entity = function() {
                                tango = _closure1_slot0;
                                report = _closure1_slot3;
                                entity = 40;
                                mike = report[entity];
                                entity = undefined;
                                mike = tango.bind(entity)(mike);
                                mike = mike.default;
                                zulu = 41;
                                zulu = report[zulu];
                                zulu = tango.bind(entity)(zulu);
                                zulu = zulu.default;
                                oscar = 42;
                                oscar = report[oscar];
                                golf = tango.bind(entity)(oscar);
                                oscar = golf.updateSaturation;
                                zulu = zulu.saturation;
                                zulu = oscar.bind(golf)(zulu);
                                zulu = 43;
                                zulu = report[zulu];
                                tango = tango.bind(entity)(zulu);
                                zulu = tango.updateTheme;
                                mike = mike.theme;
                                mike = zulu.bind(tango)(mike);
                                mike = _closure5_slot0;
                                mike = mike.bind(entity)();
                                return entity;
                            };
                            entity = mike.bind(tango)(zulu, entity);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    status = output;
                    backup = new status[result](target, papa);
                    result = backup instanceof Object ? backup : output;
                    backup = _closure1_slot0;
                    verify = verify[sizing];
                    backup = backup.bind(tango)(verify);
                    verify = backup.isAndroid;
                    verify = verify.bind(backup)();
                    if(!verify) { _fun00032_ip = 1151; continue _fun00031 }
 1127:
                    backup = _closure1_slot1;
                    verify = _closure1_slot3;
                    sizing = 44;
                    verify = verify[sizing];
                    verify = backup.bind(tango)(verify);
                    if(!(romeo == verify)) { _fun00032_ip = 1169; continue _fun00031 }
 1151:
                    backup = zulu.Promise;
                    verify = backup.resolve;
                    output = verify.bind(backup)();
                    _fun00032_ip = 1192; continue _fun00031;
 1169:
                    backup = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[sizing];
                    verify = backup.bind(tango)(verify);
                    output = verify.applicationReady;
 1192:
                    backup = _closure1_slot2;
                    sizing = _closure1_slot3;
                    verify = 45;
                    verify = sizing[verify];
                    backup = backup.bind(tango)(verify);
                    verify = backup.getToken;
                    verify = verify.bind(backup)();
                    if(!(romeo == verify)) { _fun00032_ip = 1268; continue _fun00031 }
 1226:
                    romeo = _closure1_slot0;
                    backup = _closure1_slot3;
                    verify = 46;
                    verify = backup[verify];
                    romeo = romeo.bind(tango)(verify);
                    verify = romeo.beginLoadedExperimentsTimeout;
                    verify = verify.bind(romeo)();
                    verify = romeo.getPromise;
                    sizing = verify.bind(romeo)();
                    _fun00032_ip = 1284; continue _fun00031;
 1268:
                    romeo = zulu.Promise;
                    verify = romeo.resolve;
                    sizing = verify.bind(romeo)();
 1284:
                    backup = zulu.Promise;
                    romeo = backup.all;
                    verify = new Array(3);
                    verify[0] = result;
                    verify[1] = output;
                    verify[2] = sizing;
                    backup = romeo.bind(backup)(verify);
                    romeo = backup.then;
                    verify = function() {
                        mike = _closure1_slot19;
                        entity = mike.resolve;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    verify = romeo.bind(backup)(verify);
                    romeo = zulu.Promise;
                    verify = romeo.all;
                    sizing = _closure1_slot0;
                    backup = _closure1_slot3;
                    zulu = backup[kilo];
                    result = sizing.bind(tango)(zulu);
                    zulu = 47;
                    output = backup[zulu];
                    zulu = backup.paths;
                    output = result.bind(tango)(output, zulu);
                    zulu = new Array(6);
                    zulu[0] = output;
                    output = backup[kilo];
                    echo = sizing.bind(tango)(output);
                    output = 48;
                    result = backup[output];
                    output = backup.paths;
                    output = echo.bind(tango)(result, output);
                    zulu[1] = output;
                    output = backup[kilo];
                    echo = sizing.bind(tango)(output);
                    output = 49;
                    result = backup[output];
                    output = backup.paths;
                    output = echo.bind(tango)(result, output);
                    zulu[2] = output;
                    output = backup[kilo];
                    echo = sizing.bind(tango)(output);
                    output = 50;
                    result = backup[output];
                    output = backup.paths;
                    output = echo.bind(tango)(result, output);
                    zulu[3] = output;
                    kilo = backup[kilo];
                    sizing = sizing.bind(tango)(kilo);
                    kilo = 51;
                    kilo = backup[kilo];
                    backup = backup.paths;
                    backup = sizing.bind(tango)(kilo, backup);
                    zulu[4] = backup;
                    zulu[5] = foxtrot;
                    zulu = verify.bind(romeo)(zulu);
                    SaveGenerator(address=1526);
 1524:
                    return zulu;
 1526:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun00032_ip = 1703; continue _fun00031 }
 1535:
                    romeo = _closure1_slot4;
                    verify = 5;
                    verify = romeo.bind(tango)(zulu, verify);
                    yankee = verify[yankee];
                    offset = verify[offset];
                    romeo = offset.default;
                    golf = verify[golf];
                    yankee = golf.default;
                    golf = 3;
                    golf = verify[golf];
                    offset = golf.default;
                    _closure4_slot0 = offset;
                    golf = 4;
                    golf = verify[golf];
                    verify = romeo.registerNotificationCategories;
                    verify = verify.bind(romeo)();
                    verify = romeo.registerListener;
                    verify = verify.bind(romeo)();
                    verify = yankee.loadServer;
                    verify = verify.bind(yankee)();
                    verify = offset.addChangeListener;
                    options = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot3;
                        entity = 25;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.setApplicationIconBadgeNumber;
                        report = _closure4_slot0;
                        mike = report.getTotalMentionCount;
                        mike = mike.bind(report)();
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    options = verify.bind(offset)(options);
                    if(oscar) { _fun00032_ip = 1658; continue _fun00031 }
 1648:
                    oscar = golf.init;
                    oscar = oscar.bind(golf)();
 1658:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot3;
                    report = 52;
                    report = golf[report];
                    report = oscar.bind(tango)(report);
                    report = 53;
                    report = golf[report];
                    oscar = oscar.bind(tango)(report);
                    report = oscar.initSessionHeartbeatScheduler;
                    report = report.bind(oscar)();
 1700:
                    return tango;
 1703:
                    return zulu;
 1706:
                    return mike;
 1709:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot34 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: _initHeadlessTask
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00034_ip = 355; continue _fun00033 }
 10:
                    zulu = _closure1_slot21;
                    mike = _closure1_slot20;
                    mike = mike.None;
                    if(!(zulu === mike)) { _fun00034_ip = 344; continue _fun00033 }
 34:
                    mike = _closure1_slot20;
                    mike = mike.HeadlessRan;
                    _closure1_slot21 = mike;
                    mike = _closure1_slot27;
                    oscar = undefined;
                    mike = mike.bind(oscar)();
                    zulu = mike.onStorageInitialize;
                    report = global;
                    options = report.Promise;
                    golf = options.all;
                    mike = _closure1_slot29;
                    verify = mike.bind(oscar)();
                    mike = new Array(3);
                    mike[0] = verify;
                    verify = _closure1_slot31;
                    verify = verify.bind(oscar)();
                    mike[1] = verify;
                    offset = _closure1_slot32;
                    verify = {};
                    yankee = false;
                    verify['log'] = yankee;
                    verify = offset.bind(oscar)(verify);
                    mike[2] = verify;
                    mike = golf.bind(options)(mike);
                    SaveGenerator(address=137);
 135:
                    return mike;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun00034_ip = 352; continue _fun00033 }
 146:
                    golf = _closure1_slot36;
                    golf = golf.bind(oscar)();
                    zulu = zulu.bind(oscar)();
                    verify = _closure1_slot0;
                    zulu = _closure1_slot3;
                    golf = 54;
                    golf = zulu[golf];
                    golf = verify.bind(oscar)(golf);
                    options = _closure1_slot1;
                    golf = 16;
                    golf = zulu[golf];
                    options = options.bind(oscar)(golf);
                    golf = options.initialize;
                    golf = golf.bind(options)();
                    options = 34;
                    golf = zulu[options];
                    yankee = verify.bind(oscar)(golf);
                    golf = 38;
                    offset = zulu[golf];
                    golf = zulu.paths;
                    yankee = yankee.bind(oscar)(offset, golf);
                    offset = yankee.then;
                    golf = function(argFoo) {
                        entity = argFoo;
                        tango = entity.default;
                        zulu = tango.loadCacheAsync;
                        mike = {};
                        entity = 'other';
                        mike['page'] = entity;
                        entity = function() {
                            mike = _closure1_slot19;
                            entity = mike.resolve;
                            entity = entity.bind(mike)();
                            entity = undefined;
                            return entity;
                        };
                        entity = zulu.bind(tango)(mike, entity);
                        entity = undefined;
                        return entity;
                    };
                    golf = offset.bind(yankee)(golf);
                    golf = report.Promise;
                    report = golf.all;
                    options = zulu[options];
                    verify = verify.bind(oscar)(options);
                    options = 51;
                    options = zulu[options];
                    zulu = zulu.paths;
                    options = verify.bind(oscar)(options, zulu);
                    zulu = new Array(1);
                    zulu[0] = options;
                    zulu = report.bind(golf)(zulu);
                    SaveGenerator(address=309);
 307:
                    return zulu;
 309:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00034_ip = 349; continue _fun00033 }
 315:
                    report = _closure1_slot4;
                    tango = 1;
                    report = report.bind(oscar)(zulu, tango);
                    tango = 0;
                    report = report[tango];
                    tango = report.init;
                    tango = tango.bind(report)();
 344:
                    tango = undefined;
                    return tango;
 349:
                    return zulu;
 352:
                    return mike;
 355:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot35 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: initializeTokenStorage
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tango = _closure1_slot0;
            entity = _closure1_slot3;
            golf = 26;
            mike = entity[golf];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            report = mike.Storage;
            tango = report.get;
            mike = _closure1_slot15;
            mike = tango.bind(report)(mike);
            report = null;
            if(!(report != mike)) { _fun00036_ip = 77; continue _fun00035 }
 51:
            oscar = _closure1_slot18;
            tango = oscar.verbose;
            mike = 'No need to apply token storage fix as token already exists.';
            mike = tango.bind(oscar)(mike);
            _fun00036_ip = 249; continue _fun00035;
 77:
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 28;
            mike = oscar[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun00036_ip = 127; continue _fun00035 }
 109:
            mike = _closure1_slot9;
            mike = mike.DCDFastConnectManager;
            options = mike.token;
            _fun00036_ip = 163; continue _fun00035;
 127:
            tango = _closure1_slot1;
            oscar = _closure1_slot3;
            mike = 29;
            mike = oscar[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.getConstants;
            mike = mike.bind(tango)();
            options = mike.token;
 163:
            if(!(report == options)) { _fun00036_ip = 190; continue _fun00035 }
 167:
            oscar = _closure1_slot18;
            tango = oscar.log;
            mike = 'Cannot apply token storage fix as token not in NSUserDefaults.';
            mike = tango.bind(oscar)(mike);
            _fun00036_ip = 249; continue _fun00035;
 190:
            oscar = _closure1_slot18;
            tango = oscar.log;
            mike = 'Applying token storage fix.';
            mike = tango.bind(oscar)(mike);
            tango = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[golf];
            mike = tango.bind(entity)(mike);
            oscar = mike.Storage;
            tango = oscar.set;
            mike = _closure1_slot15;
            mike = tango.bind(oscar)(mike, options);
 249:
            oscar = _closure1_slot2;
            tango = _closure1_slot3;
            mike = 45;
            options = tango[mike];
            verify = oscar.bind(entity)(options);
            options = verify.init;
            options = options.bind(verify)();
            mike = tango[mike];
            oscar = oscar.bind(entity)(mike);
            mike = oscar.getToken;
            mike = mike.bind(oscar)();
            mike = report != mike;
            oscar = _closure1_slot0;
            tango = tango[golf];
            tango = oscar.bind(entity)(tango);
            golf = tango.Storage;
            oscar = golf.get;
            tango = _closure1_slot15;
            tango = oscar.bind(golf)(tango);
            oscar = report != tango;
            report = _closure1_slot18;
            tango = report.verbose;
            zulu = {};
            zulu['storageHasToken'] = oscar;
            zulu['tokenManagerHasToken'] = mike;
            mike = 'Token manager has initialized';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    foxtrot = 0;
    tango = golf[foxtrot];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    romeo = 1;
    tango = golf[romeo];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    yankee = 2;
    tango = golf[yankee];
    tango = oscar.bind(entity)(tango);
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.AppState;
    var _closure1_slot6 = report;
    report = tango.Linking;
    var _closure1_slot7 = report;
    report = tango.LogBox;
    var _closure1_slot8 = report;
    tango = tango.NativeModules;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = 6;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = 9;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = 10;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.AppStates;
    var _closure1_slot12 = report;
    report = tango.AnalyticEvents;
    var _closure1_slot13 = report;
    report = tango.FIRST_RUN_DATE_KEY;
    var _closure1_slot14 = report;
    report = tango.TOKEN_KEY;
    var _closure1_slot15 = report;
    report = tango.STORAGE_SECURE_KEYS;
    var _closure1_slot16 = report;
    tango = tango.Platforms;
    var _closure1_slot17 = tango;
    report = 11;
    tango = golf[report];
    tango = options.bind(entity)(tango);
    verify = tango.loadImports;
    tango = verify.recordEnd;
    tango = tango.bind(verify)();
    tango = 12;
    tango = golf[tango];
    offset = options.bind(entity)(tango);
    tango = offset.prototype;
    verify = Object.create(tango, {constructor: {value: offset}});
    sizing = 'index.native.tsx';
    output = verify;
    tango = new output[offset](sizing, kilo);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot18 = tango;
    tango = 31;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Future;
    verify = tango.prototype;
    verify = Object.create(verify, {constructor: {value: tango}});
    output = verify;
    tango = new output[tango](sizing);
    tango = tango instanceof Object ? tango : verify;
    var _closure1_slot19 = tango;
    verify = {};
    verify['None'] = foxtrot;
    offset = 'None';
    verify[foxtrot] = offset;
    verify['HeadlessRan'] = romeo;
    offset = 'HeadlessRan';
    verify[romeo] = offset;
    verify['Full'] = yankee;
    offset = 'Full';
    verify[yankee] = offset;
    var _closure1_slot20 = verify;
    verify = verify.None;
    var _closure1_slot21 = verify;
    report = golf[report];
    report = options.bind(entity)(report);
    options = report.loadIndex;
    report = options.recordEnd;
    report = report.bind(options)();
    report = 55;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/app_startup/native/NativeAppStartup.tsx';
    report = oscar.bind(golf)(report);
    zulu['applicationReady'] = tango;
    tango = function() { // Original name: init
        entity = undefined;
        tango = _closure1_slot34;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['init'] = tango;
    mike = function() { // Original name: initHeadlessTask
        entity = undefined;
        tango = _closure1_slot35;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['initHeadlessTask'] = mike;
    return entity;
})();