// app/modules/app_startup/native/NativeAppStartup.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot23;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot23;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: getInitialURLs
        entity = undefined;
        tangon = _closure1_slot25;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _getInitialURLs
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 244; continue _fun00007 }
 10:
                    zuuluu = new Array(0);
                    michal = global;
                    report = michal.Promise;
                    tangon = report.all;
                    golfie = _closure1_slot7;
                    michal = golfie.getInitialURL;
                    golfie = michal.bind(golfie)();
                    michal = new Array(2);
                    michal[0] = golfie;
                    golfie = _closure1_slot9;
                    option = golfie.DynamicLinkManager;
                    golfie = option.getInitialURL;
                    golfie = golfie.bind(option)();
                    michal[1] = golfie;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=88);
 86:
                    return michal;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 241; continue _fun00007 }
 97:
                    report = _closure1_slot4;
                    option = undefined;
                    tangon = 2;
                    report = report.bind(option)(michal, tangon);
                    tangon = 0;
                    verify = report[tangon];
                    tangon = 1;
                    golfie = report[tangon];
                    tangon = null;
                    if(!(tangon != verify)) { _fun00008_ip = 183; continue _fun00007 }
 131:
                    report = zuuluu.push;
                    tangon = {};
                    tangon['url'] = verify;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot3;
                    verify = 13;
                    verify = yankee[verify];
                    verify = offset.bind(option)(verify);
                    verify = verify.DeeplinkSource;
                    verify = verify.OS;
                    tangon['source'] = verify;
                    tangon = report.bind(zuuluu)(tangon);
 183:
                    if(!golfie) { _fun00008_ip = 238; continue _fun00007 }
 186:
                    report = zuuluu.push;
                    tangon = {};
                    tangon['url'] = golfie;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    oscard = 13;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    oscard = oscard.DeeplinkSource;
                    oscard = oscard.Firebase;
                    tangon['source'] = oscard;
                    tangon = report.bind(zuuluu)(tangon);
 238:
                    return zuuluu;
 241:
                    return michal;
 244:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot25 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: handleURL
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 14;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = 'handleURL';
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        michal = tangon.bind(entity)(zuuluu, michal);
        zuuluu = michal.default;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
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
                    michal = _closure2_slot0;
                    if(michal) { _fun00012_ip = 29; continue _fun00011 }
 13:
                    michal = _closure2_slot1;
                    entity = michal.push;
                    entity = entity.bind(michal)(report);
                    _fun00012_ip = 111; continue _fun00011;
 29:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    entity = 14;
                    entity = tangon[entity];
                    michal = undefined;
                    golfie = zuuluu.bind(michal)(entity);
                    oscard = 'receiveNotification';
                    entity = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 23;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = golfie.bind(michal)(oscard, entity);
                    entity = entity.default;
                    entity = entity.bind(michal)(report);
                    entity = 11;
                    entity = tangon[entity];
                    entity = zuuluu.bind(michal)(entity);
                    michal = entity.extraProperties;
                    entity = true;
                    michal['tapped_notification'] = entity;
 111:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot3 = entity;
            report = function(argFoo) { // Original name: handleLocalNotification
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot0;
                    if(michal) { _fun00014_ip = 29; continue _fun00013 }
 13:
                    michal = _closure2_slot2;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
                    _fun00014_ip = 86; continue _fun00013;
 29:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 14;
                    entity = michal[entity];
                    michal = undefined;
                    report = tangon.bind(michal)(entity);
                    tangon = 'LocalPushNotificationActionCreators';
                    entity = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 24;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = report.bind(michal)(tangon, entity);
                    entity = entity.receiveLocalNotification;
                    entity = entity.bind(michal)(zuuluu);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot4 = report;
            oscard = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            verify = zuuluu.Emitter;
            option = verify.injectBatchEmitChanges;
            offset = _closure1_slot0;
            zuuluu = 17;
            zuuluu = golfie[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.batchUpdates;
            zuuluu = option.bind(verify)(zuuluu);
            offset = _closure1_slot7;
            verify = offset.addEventListener;
            option = 'url';
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.url;
                oscard = _closure1_slot18;
                zuuluu = oscard.log;
                michal = global;
                entity = michal.HermesInternal;
                golfie = entity.concat;
                entity = 'Handling URL: ';
                entity = golfie.bind(entity)(report);
                entity = zuuluu.bind(oscard)(entity);
                golfie = _closure1_slot1;
                oscard = _closure1_slot3;
                entity = 18;
                zuuluu = oscard[entity];
                entity = undefined;
                option = golfie.bind(entity)(zuuluu);
                golfie = option.mark;
                michal = michal.HermesInternal;
                zuuluu = michal.concat;
                michal = 'Handle URL ';
                zuuluu = zuuluu.bind(michal)(report);
                michal = '❗';
                michal = golfie.bind(option)(michal, zuuluu);
                zuuluu = _closure1_slot26;
                michal = {};
                michal['url'] = report;
                report = _closure1_slot0;
                tangon = 13;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                tangon = tangon.DeeplinkSource;
                tangon = tangon.OS;
                michal['source'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = verify.bind(offset)(option, zuuluu);
            verify = _closure1_slot8;
            option = verify.ignoreLogs;
            zuuluu = ['The native module for Flipper seems unavailable', 'Could not find Fiber with id', 'Non-serializable values were found in the navigation state', 'Overriding previous layout animation with new one before the first began', 'Check the render method of `SceneView`'];
            zuuluu = option.bind(verify)(zuuluu);
            zuuluu = 19;
            option = golfie[zuuluu];
            verify = oscard.bind(tangon)(option);
            option = verify.getInitialBundleDownloaded;
            offset = option.bind(verify)();
            verify = offset.then;
            option = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    tangon = null;
                    michal = tangon != entity;
                    if(!michal) { _fun00016_ip = 22; continue _fun00015 }
 12:
                    zuuluu = entity.versionRequired;
                    michal = tangon != zuuluu;
 22:
                    if(!michal) { _fun00016_ip = 112; continue _fun00015 }
 25:
                    report = _closure1_slot18;
                    tangon = report.verbose;
                    golfie = entity.versionRequired;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    oscard = zuuluu.concat;
                    zuuluu = 'Get initial downloaded bundle ';
                    zuuluu = oscard.bind(zuuluu)(golfie);
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 20;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.prepareUpdate;
                    entity = entity.versionRequired;
                    entity = michal.bind(zuuluu)(entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            option = verify.bind(offset)(option);
            option = golfie[zuuluu];
            yankee = oscard.bind(tangon)(option);
            offset = yankee.addEventListener;
            verify = 'downloaded';
            option = function(argFoo) {
                entity = argFoo;
                tangon = entity.versionRequired;
                report = _closure1_slot18;
                zuuluu = report.verbose;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                michal = 'Bundle Event: bundle downloaded for ';
                michal = oscard.bind(michal)(tangon);
                michal = zuuluu.bind(report)(michal);
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.prepareUpdate;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            option = offset.bind(yankee)(verify, option);
            option = golfie[zuuluu];
            verify = oscard.bind(tangon)(option);
            option = verify.getInitialOtaUpdateChecked;
            offset = option.bind(verify)();
            verify = offset.then;
            option = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.metrics;
                    tangon = _closure1_slot18;
                    michal = tangon.verbose;
                    entity = 'Initial OTA update check metrics';
                    entity = michal.bind(tangon)(entity, zuuluu);
                    michal = _closure1_slot22;
                    entity = undefined;
                    report = michal.bind(entity)(zuuluu);
                    zuuluu = report.bind(entity)();
                    michal = zuuluu.done;
                    tangon = 19;
                    if(michal) { _fun00018_ip = 108; continue _fun00017 }
 60:
                    option = zuuluu.value;
                    golfie = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[tangon];
                    golfie = golfie.bind(entity)(michal);
                    michal = golfie.emitOtaMetric;
                    michal = michal.bind(golfie)(option);
                    golfie = report.bind(entity)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00018_ip = 60; continue _fun00017 }
 108:
                    return entity;
                }
            };
            option = verify.bind(offset)(option);
            zuuluu = golfie[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.addEventListener;
            oscard = 'otaUpdateChecked';
            zuuluu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.metrics;
                    tangon = _closure1_slot18;
                    michal = tangon.verbose;
                    entity = 'OTA update check metrics';
                    entity = michal.bind(tangon)(entity, zuuluu);
                    michal = _closure1_slot22;
                    entity = undefined;
                    report = michal.bind(entity)(zuuluu);
                    zuuluu = report.bind(entity)();
                    michal = zuuluu.done;
                    tangon = 19;
                    if(michal) { _fun00020_ip = 108; continue _fun00019 }
 60:
                    option = zuuluu.value;
                    golfie = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[tangon];
                    golfie = golfie.bind(entity)(michal);
                    michal = golfie.emitOtaMetric;
                    michal = michal.bind(golfie)(option);
                    golfie = report.bind(entity)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00020_ip = 60; continue _fun00019 }
 108:
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            option = _closure1_slot6;
            golfie = option.addEventListener;
            oscard = 'change';
            zuuluu = function(argFoo) {
                oscard = argFoo;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot3;
                michal = 11;
                report = tangon[michal];
                entity = undefined;
                report = zuuluu.bind(entity)(report);
                report = report.imports;
                golfie = report.appStateChangeStart;
                report = golfie.record;
                report = report.bind(golfie)();
                report = 18;
                report = tangon[report];
                golfie = zuuluu.bind(entity)(report);
                report = golfie.resumeTracing;
                report = report.bind(golfie)();
                report = 21;
                report = tangon[report];
                option = zuuluu.bind(entity)(report);
                golfie = option.addBreadcrumb;
                report = {};
                verify = global;
                verify = verify.HermesInternal;
                offset = verify.concat;
                verify = 'App state changed to ';
                verify = offset.bind(verify)(oscard);
                report['message'] = verify;
                verify = 'appState';
                report['category'] = verify;
                report = golfie.bind(option)(report);
                report = 14;
                report = tangon[report];
                option = zuuluu.bind(entity)(report);
                golfie = 'handleAppStateChange';
                report = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                report = option.bind(entity)(golfie, report);
                report = report.default;
                report = report.bind(entity)(oscard);
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                michal = michal.imports;
                zuuluu = michal.appStateChangeEnd;
                michal = zuuluu.record;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            zuuluu = _closure1_slot9;
            oscard = zuuluu.Hosts;
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00010_ip = 460; continue _fun00009 }
 329:
            zuuluu = _closure1_slot9;
            option = zuuluu.Hosts;
            golfie = option.setHosts;
            zuuluu = global;
            oscard = zuuluu.location;
            offset = oscard.protocol;
            oscard = zuuluu.window;
            oscard = oscard.GLOBAL_ENV;
            verify = oscard.API_ENDPOINT;
            oscard = zuuluu.HermesInternal;
            oscard = oscard.concat;
            romeon = '';
            oscard = oscard.bind(romeon)(offset, verify);
            verify = zuuluu.location;
            yankee = verify.protocol;
            verify = zuuluu.window;
            verify = verify.GLOBAL_ENV;
            offset = verify.CDN_HOST;
            zuuluu = zuuluu.HermesInternal;
            verify = zuuluu.concat;
            zuuluu = '//';
            zuuluu = verify.bind(romeon)(yankee, zuuluu, offset);
            zuuluu = golfie.bind(option)(oscard, zuuluu);
 460:
            zuuluu = false;
            var _closure2_slot0 = zuuluu;
            zuuluu = new Array(0);
            var _closure2_slot1 = zuuluu;
            zuuluu = new Array(0);
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 25;
            golfie = oscard[entity];
            offset = zuuluu.bind(tangon)(golfie);
            verify = offset.addNotificationEventListener;
            option = 'notification';
            golfie = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure1_slot11;
                    michal = zuuluu.getState;
                    michal = michal.bind(zuuluu)();
                    report = _closure1_slot18;
                    tangon = report.log;
                    zuuluu = global;
                    zuuluu = zuuluu.HermesInternal;
                    oscard = zuuluu.concat;
                    zuuluu = 'Push notification received, the app state is ';
                    zuuluu = oscard.bind(zuuluu)(michal);
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity = _closure1_slot12;
                    entity = entity.ACTIVE;
                    if(!(michal !== entity)) { _fun00022_ip = 87; continue _fun00021 }
 70:
                    zuuluu = _closure2_slot3;
                    michal = undefined;
                    entity = argFoo;
                    entity = zuuluu.bind(michal)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = verify.bind(offset)(option, golfie);
            entity = oscard[entity];
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.addNotificationEventListener;
            entity = 'localNotification';
            entity = zuuluu.bind(tangon)(entity, report);
            entity = {};
            michal = function() { // Original name: onStorageInitialize
                michal = true;
                _closure2_slot0 = michal;
                tangon = _closure2_slot1;
                zuuluu = tangon.forEach;
                michal = _closure2_slot3;
                michal = zuuluu.bind(tangon)(michal);
                tangon = _closure2_slot2;
                zuuluu = tangon.forEach;
                michal = _closure2_slot4;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure2_slot1;
                michal = 0;
                zuuluu['length'] = michal;
                entity = _closure2_slot2;
                entity['length'] = michal;
                entity = undefined;
                return entity;
            };
            entity['onStorageInitialize'] = michal;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _trackFirstLaunched
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 263; continue _fun00023 }
 10:
                    report = _closure1_slot0;
                    michal = _closure1_slot3;
                    golfie = 26;
                    michal = michal[golfie];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    option = michal.Storage;
                    oscard = option.get;
                    michal = _closure1_slot13;
                    report = michal.APP_FIRST_LAUNCHED;
                    michal = true;
                    michal = oscard.bind(option)(report, michal);
                    if(!michal) { _fun00024_ip = 257; continue _fun00023 }
 70:
                    report = _closure1_slot1;
                    yankee = _closure1_slot3;
                    michal = 27;
                    michal = yankee[michal];
                    verify = report.bind(zuuluu)(michal);
                    option = verify.track;
                    michal = _closure1_slot13;
                    oscard = michal.APP_FIRST_LAUNCHED;
                    report = {};
                    offset = _closure1_slot0;
                    michal = 28;
                    michal = yankee[michal];
                    offset = offset.bind(zuuluu)(michal);
                    michal = offset.isAndroid;
                    michal = michal.bind(offset)();
                    offset = _closure1_slot17;
                    if(michal) { _fun00024_ip = 147; continue _fun00023 }
 139:
                    michal = offset.IOS;
                    _fun00024_ip = 153; continue _fun00023;
 147:
                    michal = offset.ANDROID;
 153:
                    report['platform'] = michal;
                    michal = _closure1_slot9;
                    yankee = michal.InstallReferrer;
                    michal = null;
                    offset = michal == yankee;
                    michal = undefined;
                    if(offset) { _fun00024_ip = 190; continue _fun00023 }
 181:
                    offset = yankee.get;
                    michal = offset.bind(yankee)();
 190:
                    SaveGenerator(address=194);
 192:
                    return michal;
 194:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(offset) { _fun00024_ip = 260; continue _fun00023 }
 200:
                    report['referrer'] = michal;
                    report = option.bind(verify)(oscard, report);
                    oscard = _closure1_slot0;
                    report = _closure1_slot3;
                    report = report[golfie];
                    report = oscard.bind(zuuluu)(report);
                    golfie = report.Storage;
                    oscard = golfie.set;
                    tangon = _closure1_slot13;
                    report = tangon.APP_FIRST_LAUNCHED;
                    tangon = false;
                    tangon = oscard.bind(golfie)(report, tangon);
 257:
                    return zuuluu;
 260:
                    return michal;
 263:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot28 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: loadStorage
        entity = undefined;
        tangon = _closure1_slot30;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _loadStorage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00026_ip = 213; continue _fun00025 }
 12:
                    michal = undefined;
                    var _closure4_slot0 = michal;
 18: // try_start_0
                    oscard = _closure1_slot1;
                    option = _closure1_slot3;
                    golfie = 11;
                    zuuluu = option[golfie];
                    zuuluu = oscard.bind(michal)(zuuluu);
                    oscard = zuuluu.loadStorage;
                    zuuluu = oscard.recordStart;
                    zuuluu = zuuluu.bind(oscard)();
                    oscard = _closure1_slot0;
                    zuuluu = 26;
                    zuuluu = option[zuuluu];
                    zuuluu = oscard.bind(michal)(zuuluu);
                    verify = zuuluu.Storage;
                    option = verify.refresh;
                    oscard = _closure1_slot16;
                    zuuluu = new Array(0);
                    zuuluu = option.bind(verify)(zuuluu, oscard);
                    SaveGenerator(address=103);
 101:
                    return zuuluu;
 103:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00026_ip = 181; continue _fun00025 }
 109:
                    _closure4_slot0 = zuuluu;
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    option = report[golfie];
                    option = oscard.bind(michal)(option);
                    verify = option.loadStorage;
                    option = verify.recordEnd;
                    option = option.bind(verify)();
                    report = report[golfie];
                    report = oscard.bind(michal)(report);
                    oscard = report.parseStorage;
                    report = oscard.measure;
                    tangon = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 26;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        zuuluu = entity.Storage;
                        michal = zuuluu.parse;
                        entity = _closure4_slot0;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
 179: // try_end0
                    _fun00026_ip = 210; continue _fun00025;
 181:
                    return zuuluu;
 184: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot18;
                    tangon = report.error;
                    zuuluu = 'Unable to load Storage';
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
 210:
                    return michal;
 213:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot30 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: loadKvStorage
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0: // try_start_0
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 30;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.initialize;
            entity = entity.bind(michal)();
 35: // try_end0
            _fun00028_ip = 96; continue _fun00027;
 37: // catch_target0
            CatchBlockStart(arg_register=2);
            report = _closure1_slot18;
            tangon = report.warn;
            michal = 'DatabaseManager.initialize errored.';
            michal = tangon.bind(report)(michal, zuuluu);
            tangon = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 21;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.captureException;
            entity = entity.bind(michal)(zuuluu);
 96:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: initializeIntl
        entity = undefined;
        tangon = _closure1_slot33;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _initializeIntl
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00030_ip = 214; continue _fun00029 }
 10:
                    michal = argFoo;
                    report = michal.log;
                    oscard = undefined;
                    SaveGenerator(address=25);
 23:
                    return oscard;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00030_ip = 211; continue _fun00029 }
 34:
                    golfie = _closure1_slot0;
                    option = _closure1_slot3;
                    zuuluu = 32;
                    zuuluu = option[zuuluu];
                    golfie = golfie.bind(oscard)(zuuluu);
                    zuuluu = golfie.waitForAllDefaultIntlMessagesLoaded;
                    zuuluu = zuuluu.bind(golfie)();
                    SaveGenerator(address=71);
 69:
                    return zuuluu;
 71:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00030_ip = 208; continue _fun00029 }
 80:
                    if(!report) { _fun00030_ip = 132; continue _fun00029 }
 83:
                    golfie = _closure1_slot1;
                    option = _closure1_slot3;
                    report = 18;
                    report = option[report];
                    offset = golfie.bind(oscard)(report);
                    verify = offset.markAndLog;
                    option = _closure1_slot18;
                    golfie = '🌎';
                    report = 'i18n loaded';
                    report = verify.bind(offset)(option, golfie, report);
 132:
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot3;
                    report = 34;
                    report = tangon[report];
                    golfie = golfie.bind(oscard)(report);
                    report = 33;
                    report = tangon[report];
                    tangon = tangon.paths;
                    tangon = golfie.bind(oscard)(report, tangon);
                    SaveGenerator(address=174);
 172:
                    return tangon;
 174:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00030_ip = 205; continue _fun00029 }
 180:
                    report = tangon.default;
                    report = report.bind(oscard)();
                    SaveGenerator(address=193);
 191:
                    return report;
 193:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00030_ip = 202; continue _fun00029 }
 199:
                    return oscard;
 202:
                    return report;
 205:
                    return tangon;
 208:
                    return zuuluu;
 211:
                    return michal;
 214:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot33 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _init
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00032_ip = 1725; continue _fun00031 }
 12:
                    tangon = undefined;
                    var _closure4_slot0 = tangon;
                    zuuluu = _closure1_slot21;
                    michal = _closure1_slot20;
                    michal = michal.Full;
                    if(!(zuuluu === michal)) { _fun00032_ip = 87; continue _fun00031 }
 39:
                    zuuluu = _closure1_slot1;
                    oscard = _closure1_slot3;
                    michal = 21;
                    michal = oscard[michal];
                    oscard = zuuluu.bind(tangon)(michal);
                    zuuluu = oscard.addBreadcrumb;
                    michal = {};
                    golfie = 'Init called when already initialized';
                    michal['message'] = golfie;
                    michal = zuuluu.bind(oscard)(michal);
                    _fun00032_ip = 1716; continue _fun00031;
 87:
                    zuuluu = _closure1_slot21;
                    michal = _closure1_slot20;
                    michal = michal.HeadlessRan;
                    oscard = zuuluu === michal;
                    michal = _closure1_slot20;
                    michal = michal.Full;
                    _closure1_slot21 = michal;
                    verify = undefined;
                    if(oscard) { _fun00032_ip = 138; continue _fun00031 }
 124:
                    michal = _closure1_slot27;
                    michal = michal.bind(tangon)();
                    verify = michal.onStorageInitialize;
 138:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    sizing = 28;
                    michal = michal[sizing];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.isAndroid;
                    michal = michal.bind(zuuluu)();
                    golfie = _closure1_slot0;
                    offset = _closure1_slot3;
                    zuuluu = 35;
                    zuuluu = offset[zuuluu];
                    golfie = golfie.bind(tangon)(zuuluu);
                    if(michal) { _fun00032_ip = 202; continue _fun00031 }
 190:
                    michal = golfie.lockOrientationForiOS;
                    michal = michal.bind(golfie)();
                    _fun00032_ip = 222; continue _fun00031;
 202:
                    zuuluu = golfie.unlockOrientation;
                    michal = {};
                    offset = false;
                    michal['unlockAfterRotatingToPreviousLock'] = offset;
                    michal = zuuluu.bind(golfie)(michal);
 222:
                    foxtra = _closure1_slot1;
                    yankee = _closure1_slot3;
                    backup = 11;
                    michal = yankee[backup];
                    zuuluu = foxtra.bind(tangon)(michal);
                    michal = _closure1_slot6;
                    golfie = michal.currentState;
                    michal = _closure1_slot12;
                    michal = michal.BACKGROUND;
                    michal = golfie === michal;
                    zuuluu['didBackgroundApp'] = michal;
                    michal = 36;
                    michal = yankee[michal];
                    michal = foxtra.bind(tangon)(michal);
                    michal = michal.bind(tangon)();
                    michal = yankee[backup];
                    michal = foxtra.bind(tangon)(michal);
                    michal = michal.imports;
                    zuuluu = michal.loadStorageStart;
                    michal = zuuluu.record;
                    michal = michal.bind(zuuluu)();
                    zuuluu = global;
                    offset = zuuluu.Promise;
                    golfie = offset.all;
                    michal = _closure1_slot24;
                    romeon = michal.bind(tangon)();
                    michal = new Array(5);
                    michal[0] = romeon;
                    romeon = 25;
                    romeon = yankee[romeon];
                    foxtra = foxtra.bind(tangon)(romeon);
                    romeon = foxtra.getInitialNotification;
                    kiloes = romeon.bind(foxtra)();
                    foxtra = kiloes.catch;
                    romeon = function() {
                        entity = null;
                        return entity;
                    };
                    romeon = foxtra.bind(kiloes)(romeon);
                    michal[1] = romeon;
                    romeon = _closure1_slot29;
                    romeon = romeon.bind(tangon)();
                    michal[2] = romeon;
                    romeon = _closure1_slot31;
                    romeon = romeon.bind(tangon)();
                    michal[3] = romeon;
                    foxtra = _closure1_slot0;
                    kiloes = 34;
                    romeon = yankee[kiloes];
                    foxtra = foxtra.bind(tangon)(romeon);
                    romeon = 37;
                    romeon = yankee[romeon];
                    yankee = yankee.paths;
                    foxtra = foxtra.bind(tangon)(romeon, yankee);
                    romeon = foxtra.then;
                    yankee = function(argFoo) {
                        entity = argFoo;
                        michal = entity.default;
                        entity = undefined;
                        entity = michal.bind(entity)();
                        return entity;
                    };
                    yankee = romeon.bind(foxtra)(yankee);
                    michal[4] = yankee;
                    michal = golfie.bind(offset)(michal);
                    SaveGenerator(address=481);
 479:
                    return michal;
 481:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00032_ip = 1722; continue _fun00031 }
 490:
                    offset = _closure1_slot4;
                    golfie = 2;
                    romeon = offset.bind(tangon)(michal, golfie);
                    yankee = 0;
                    echoed = romeon[yankee];
                    offset = 1;
                    result = romeon[offset];
                    output = _closure1_slot1;
                    romeon = _closure1_slot3;
                    foxtra = romeon[backup];
                    foxtra = output.bind(tangon)(foxtra);
                    foxtra = foxtra.imports;
                    update = foxtra.loadStorageEnd;
                    foxtra = update.record;
                    foxtra = foxtra.bind(update)();
                    source = _closure1_slot32;
                    foxtra = {};
                    update = true;
                    foxtra['log'] = update;
                    foxtra = source.bind(tangon)(foxtra);
                    source = 18;
                    romeon = romeon[source];
                    sequen = output.bind(tangon)(romeon);
                    ctrled = sequen.markAndLog;
                    output = _closure1_slot18;
                    vacuum = '🏃';
                    romeon = 'The initial promise has resolved';
                    romeon = ctrled.bind(sequen)(output, vacuum, romeon);
                    romeon = null;
                    output = romeon != echoed;
                    if(!output) { _fun00032_ip = 632; continue _fun00031 }
 623:
                    ctrled = echoed.length;
                    output = ctrled > yankee;
 632:
                    if(!output) { _fun00032_ip = 657; continue _fun00031 }
 635:
                    sequen = _closure1_slot18;
                    ctrled = sequen.log;
                    output = 'initialURLs';
                    output = ctrled.bind(sequen)(output, echoed);
 657:
                    if(!(romeon != result)) { _fun00032_ip = 683; continue _fun00031 }
 661:
                    sequen = _closure1_slot18;
                    ctrled = sequen.log;
                    output = 'initialNotification';
                    output = ctrled.bind(sequen)(output, result);
 683:
                    ctrled = _closure1_slot0;
                    output = _closure1_slot3;
                    sequen = 26;
                    output = output[sequen];
                    output = ctrled.bind(tangon)(output);
                    config = output.Storage;
                    ctrled = config.get;
                    output = _closure1_slot14;
                    output = ctrled.bind(config)(output);
                    if(!(romeon == output)) { _fun00032_ip = 780; continue _fun00031 }
 727:
                    ctrled = _closure1_slot0;
                    output = _closure1_slot3;
                    output = output[sequen];
                    output = ctrled.bind(tangon)(output);
                    config = output.Storage;
                    sequen = config.set;
                    ctrled = _closure1_slot14;
                    record = zuuluu.Date;
                    output = record.now;
                    output = output.bind(record)();
                    output = sequen.bind(config)(ctrled, output);
 780:
                    output = function() { // Original name: trackFirstLaunched
                        entity = undefined;
                        tangon = _closure1_slot28;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    output = output.bind(tangon)();
                    if(oscard) { _fun00032_ip = 810; continue _fun00031 }
 794:
                    output = _closure1_slot36;
                    output = output.bind(tangon)();
                    if(!(romeon != verify)) { _fun00032_ip = 810; continue _fun00031 }
 806:
                    verify = verify.bind(tangon)();
 810:
                    output = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[source];
                    ctrled = output.bind(tangon)(verify);
                    if(oscard) { _fun00032_ip = 858; continue _fun00031 }
 830:
                    source = ctrled.time;
                    output = 'Flux.initialize()';
                    verify = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        entity = 16;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.initialize;
                        zuuluu = zuuluu.bind(tangon)();
                        tangon = _closure1_slot18;
                        zuuluu = tangon.verbose;
                        michal = 'Flux has initialized';
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    verify = source.bind(ctrled)(vacuum, output, verify);
                    _fun00032_ip = 881; continue _fun00031;
 858:
                    source = ctrled.markAndLog;
                    output = _closure1_slot18;
                    verify = 'Flux already initialized.';
                    verify = source.bind(ctrled)(output, vacuum, verify);
 881:
                    output = echoed.forEach;
                    verify = _closure1_slot26;
                    verify = output.bind(echoed)(verify);
                    output = romeon != result;
                    verify = false;
                    if(!output) { _fun00032_ip = 974; continue _fun00031 }
 904:
                    source = _closure1_slot1;
                    echoed = _closure1_slot3;
                    output = 14;
                    output = echoed[output];
                    vacuum = source.bind(tangon)(output);
                    ctrled = 'receiveNotification';
                    output = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 23;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    output = vacuum.bind(tangon)(ctrled, output);
                    output = output.default;
                    echoed = echoed[backup];
                    echoed = source.bind(tangon)(echoed);
                    echoed = echoed.extraProperties;
                    echoed['tapped_notification'] = update;
                    verify = output.bind(tangon)(result);
 974:
                    if(verify) { _fun00032_ip = 1046; continue _fun00031 }
 977:
                    output = _closure1_slot10;
                    verify = output.getChannelId;
                    echoed = verify.bind(output)();
                    if(!(romeon != echoed)) { _fun00032_ip = 1046; continue _fun00031 }
 995:
                    output = _closure1_slot1;
                    result = _closure1_slot3;
                    verify = 38;
                    verify = result[verify];
                    result = output.bind(tangon)(verify);
                    output = result.fetchMessages;
                    verify = {'channelId': null, 'isPreload': true, 'skipLocalFetch': true};
                    verify['channelId'] = echoed;
                    verify = output.bind(result)(verify);
 1046:
                    output = _closure1_slot1;
                    verify = _closure1_slot3;
                    backup = verify[backup];
                    backup = output.bind(tangon)(backup);
                    backup = backup.imports;
                    output = backup.loadMiniCacheStart;
                    backup = output.record;
                    backup = backup.bind(output)();
                    result = zuuluu.Promise;
                    backup = result.prototype;
                    output = Object.create(backup, {constructor: {value: result}});
                    target = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        entity = 34;
                        tangon = zuuluu[entity];
                        entity = undefined;
                        report = report.bind(entity)(tangon);
                        tangon = 39;
                        tangon = zuuluu[tangon];
                        zuuluu = zuuluu.paths;
                        tangon = report.bind(entity)(tangon, zuuluu);
                        zuuluu = tangon.then;
                        michal = function(argFoo) {
                            entity = argFoo;
                            tangon = entity.default;
                            zuuluu = _closure1_slot0;
                            report = _closure1_slot3;
                            michal = 40;
                            michal = report[michal];
                            report = undefined;
                            zuuluu = zuuluu.bind(report)(michal);
                            michal = zuuluu.computeInitialNavigationState;
                            zuuluu = michal.bind(zuuluu)();
                            michal = _closure1_slot4;
                            entity = 1;
                            michal = michal.bind(report)(zuuluu, entity);
                            entity = 0;
                            zuuluu = michal[entity];
                            michal = tangon.loadCacheAsync;
                            entity = function() {
                                tangon = _closure1_slot0;
                                report = _closure1_slot3;
                                entity = 41;
                                michal = report[entity];
                                entity = undefined;
                                michal = tangon.bind(entity)(michal);
                                michal = michal.default;
                                zuuluu = 42;
                                zuuluu = report[zuuluu];
                                zuuluu = tangon.bind(entity)(zuuluu);
                                zuuluu = zuuluu.default;
                                oscard = 43;
                                oscard = report[oscard];
                                golfie = tangon.bind(entity)(oscard);
                                oscard = golfie.updateSaturation;
                                zuuluu = zuuluu.saturation;
                                zuuluu = oscard.bind(golfie)(zuuluu);
                                zuuluu = 44;
                                zuuluu = report[zuuluu];
                                tangon = tangon.bind(entity)(zuuluu);
                                zuuluu = tangon.updateTheme;
                                michal = michal.theme;
                                michal = zuuluu.bind(tangon)(michal);
                                michal = _closure5_slot0;
                                michal = michal.bind(entity)();
                                return entity;
                            };
                            entity = michal.bind(tangon)(zuuluu, entity);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    status = output;
                    backup = new status[result](target, papara);
                    result = backup instanceof Object ? backup : output;
                    backup = _closure1_slot0;
                    verify = verify[sizing];
                    backup = backup.bind(tangon)(verify);
                    verify = backup.isAndroid;
                    verify = verify.bind(backup)();
                    if(!verify) { _fun00032_ip = 1167; continue _fun00031 }
 1143:
                    backup = _closure1_slot1;
                    verify = _closure1_slot3;
                    sizing = 45;
                    verify = verify[sizing];
                    verify = backup.bind(tangon)(verify);
                    if(!(romeon == verify)) { _fun00032_ip = 1185; continue _fun00031 }
 1167:
                    backup = zuuluu.Promise;
                    verify = backup.resolve;
                    output = verify.bind(backup)();
                    _fun00032_ip = 1208; continue _fun00031;
 1185:
                    backup = _closure1_slot1;
                    verify = _closure1_slot3;
                    verify = verify[sizing];
                    verify = backup.bind(tangon)(verify);
                    output = verify.applicationReady;
 1208:
                    backup = _closure1_slot2;
                    sizing = _closure1_slot3;
                    verify = 46;
                    verify = sizing[verify];
                    backup = backup.bind(tangon)(verify);
                    verify = backup.getToken;
                    verify = verify.bind(backup)();
                    if(!(romeon == verify)) { _fun00032_ip = 1284; continue _fun00031 }
 1242:
                    romeon = _closure1_slot0;
                    backup = _closure1_slot3;
                    verify = 47;
                    verify = backup[verify];
                    romeon = romeon.bind(tangon)(verify);
                    verify = romeon.beginLoadedExperimentsTimeout;
                    verify = verify.bind(romeon)();
                    verify = romeon.getPromise;
                    sizing = verify.bind(romeon)();
                    _fun00032_ip = 1300; continue _fun00031;
 1284:
                    romeon = zuuluu.Promise;
                    verify = romeon.resolve;
                    sizing = verify.bind(romeon)();
 1300:
                    backup = zuuluu.Promise;
                    romeon = backup.all;
                    verify = new Array(3);
                    verify[0] = result;
                    verify[1] = output;
                    verify[2] = sizing;
                    backup = romeon.bind(backup)(verify);
                    romeon = backup.then;
                    verify = function() {
                        michal = _closure1_slot19;
                        entity = michal.resolve;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    verify = romeon.bind(backup)(verify);
                    romeon = zuuluu.Promise;
                    verify = romeon.all;
                    sizing = _closure1_slot0;
                    backup = _closure1_slot3;
                    zuuluu = backup[kiloes];
                    result = sizing.bind(tangon)(zuuluu);
                    zuuluu = 48;
                    output = backup[zuuluu];
                    zuuluu = backup.paths;
                    output = result.bind(tangon)(output, zuuluu);
                    zuuluu = new Array(6);
                    zuuluu[0] = output;
                    output = backup[kiloes];
                    echoed = sizing.bind(tangon)(output);
                    output = 49;
                    result = backup[output];
                    output = backup.paths;
                    output = echoed.bind(tangon)(result, output);
                    zuuluu[1] = output;
                    output = backup[kiloes];
                    echoed = sizing.bind(tangon)(output);
                    output = 50;
                    result = backup[output];
                    output = backup.paths;
                    output = echoed.bind(tangon)(result, output);
                    zuuluu[2] = output;
                    output = backup[kiloes];
                    echoed = sizing.bind(tangon)(output);
                    output = 51;
                    result = backup[output];
                    output = backup.paths;
                    output = echoed.bind(tangon)(result, output);
                    zuuluu[3] = output;
                    kiloes = backup[kiloes];
                    sizing = sizing.bind(tangon)(kiloes);
                    kiloes = 52;
                    kiloes = backup[kiloes];
                    backup = backup.paths;
                    backup = sizing.bind(tangon)(kiloes, backup);
                    zuuluu[4] = backup;
                    zuuluu[5] = foxtra;
                    zuuluu = verify.bind(romeon)(zuuluu);
                    SaveGenerator(address=1542);
 1540:
                    return zuuluu;
 1542:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(verify) { _fun00032_ip = 1719; continue _fun00031 }
 1551:
                    romeon = _closure1_slot4;
                    verify = 5;
                    verify = romeon.bind(tangon)(zuuluu, verify);
                    yankee = verify[yankee];
                    offset = verify[offset];
                    romeon = offset.default;
                    golfie = verify[golfie];
                    yankee = golfie.default;
                    golfie = 3;
                    golfie = verify[golfie];
                    offset = golfie.default;
                    _closure4_slot0 = offset;
                    golfie = 4;
                    golfie = verify[golfie];
                    verify = romeon.registerNotificationCategories;
                    verify = verify.bind(romeon)();
                    verify = romeon.registerListener;
                    verify = verify.bind(romeon)();
                    verify = yankee.loadServer;
                    verify = verify.bind(yankee)();
                    verify = offset.addChangeListener;
                    option = function() {
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 25;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.setApplicationIconBadgeNumber;
                        report = _closure4_slot0;
                        michal = report.getTotalMentionCount;
                        michal = michal.bind(report)();
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    option = verify.bind(offset)(option);
                    if(oscard) { _fun00032_ip = 1674; continue _fun00031 }
 1664:
                    oscard = golfie.init;
                    oscard = oscard.bind(golfie)();
 1674:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot3;
                    report = 53;
                    report = golfie[report];
                    report = oscard.bind(tangon)(report);
                    report = 54;
                    report = golfie[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.initSessionHeartbeatScheduler;
                    report = report.bind(oscard)();
 1716:
                    return tangon;
 1719:
                    return zuuluu;
 1722:
                    return michal;
 1725:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot34 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: _initHeadlessTask
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00034_ip = 355; continue _fun00033 }
 10:
                    zuuluu = _closure1_slot21;
                    michal = _closure1_slot20;
                    michal = michal.None;
                    if(!(zuuluu === michal)) { _fun00034_ip = 344; continue _fun00033 }
 34:
                    michal = _closure1_slot20;
                    michal = michal.HeadlessRan;
                    _closure1_slot21 = michal;
                    michal = _closure1_slot27;
                    oscard = undefined;
                    michal = michal.bind(oscard)();
                    zuuluu = michal.onStorageInitialize;
                    report = global;
                    option = report.Promise;
                    golfie = option.all;
                    michal = _closure1_slot29;
                    verify = michal.bind(oscard)();
                    michal = new Array(3);
                    michal[0] = verify;
                    verify = _closure1_slot31;
                    verify = verify.bind(oscard)();
                    michal[1] = verify;
                    offset = _closure1_slot32;
                    verify = {};
                    yankee = false;
                    verify['log'] = yankee;
                    verify = offset.bind(oscard)(verify);
                    michal[2] = verify;
                    michal = golfie.bind(option)(michal);
                    SaveGenerator(address=137);
 135:
                    return michal;
 137:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00034_ip = 352; continue _fun00033 }
 146:
                    golfie = _closure1_slot36;
                    golfie = golfie.bind(oscard)();
                    zuuluu = zuuluu.bind(oscard)();
                    verify = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    golfie = 55;
                    golfie = zuuluu[golfie];
                    golfie = verify.bind(oscard)(golfie);
                    option = _closure1_slot1;
                    golfie = 16;
                    golfie = zuuluu[golfie];
                    option = option.bind(oscard)(golfie);
                    golfie = option.initialize;
                    golfie = golfie.bind(option)();
                    option = 34;
                    golfie = zuuluu[option];
                    yankee = verify.bind(oscard)(golfie);
                    golfie = 39;
                    offset = zuuluu[golfie];
                    golfie = zuuluu.paths;
                    yankee = yankee.bind(oscard)(offset, golfie);
                    offset = yankee.then;
                    golfie = function(argFoo) {
                        entity = argFoo;
                        tangon = entity.default;
                        zuuluu = tangon.loadCacheAsync;
                        michal = {};
                        entity = 'other';
                        michal['page'] = entity;
                        entity = function() {
                            michal = _closure1_slot19;
                            entity = michal.resolve;
                            entity = entity.bind(michal)();
                            entity = undefined;
                            return entity;
                        };
                        entity = zuuluu.bind(tangon)(michal, entity);
                        entity = undefined;
                        return entity;
                    };
                    golfie = offset.bind(yankee)(golfie);
                    golfie = report.Promise;
                    report = golfie.all;
                    option = zuuluu[option];
                    verify = verify.bind(oscard)(option);
                    option = 52;
                    option = zuuluu[option];
                    zuuluu = zuuluu.paths;
                    option = verify.bind(oscard)(option, zuuluu);
                    zuuluu = new Array(1);
                    zuuluu[0] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    SaveGenerator(address=309);
 307:
                    return zuuluu;
 309:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00034_ip = 349; continue _fun00033 }
 315:
                    report = _closure1_slot4;
                    tangon = 1;
                    report = report.bind(oscard)(zuuluu, tangon);
                    tangon = 0;
                    report = report[tangon];
                    tangon = report.init;
                    tangon = tangon.bind(report)();
 344:
                    tangon = undefined;
                    return tangon;
 349:
                    return zuuluu;
 352:
                    return michal;
 355:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot35 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: initializeTokenStorage
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            tangon = _closure1_slot0;
            entity = _closure1_slot3;
            golfie = 26;
            michal = entity[golfie];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            report = michal.Storage;
            tangon = report.get;
            michal = _closure1_slot15;
            michal = tangon.bind(report)(michal);
            report = null;
            if(!(report != michal)) { _fun00036_ip = 77; continue _fun00035 }
 51:
            oscard = _closure1_slot18;
            tangon = oscard.verbose;
            michal = 'No need to apply token storage fix as token already exists.';
            michal = tangon.bind(oscard)(michal);
            _fun00036_ip = 249; continue _fun00035;
 77:
            tangon = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 28;
            michal = oscard[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00036_ip = 127; continue _fun00035 }
 109:
            michal = _closure1_slot9;
            michal = michal.DCDFastConnectManager;
            option = michal.token;
            _fun00036_ip = 163; continue _fun00035;
 127:
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            michal = 29;
            michal = oscard[michal];
            tangon = tangon.bind(entity)(michal);
            michal = tangon.getConstants;
            michal = michal.bind(tangon)();
            option = michal.token;
 163:
            if(!(report == option)) { _fun00036_ip = 190; continue _fun00035 }
 167:
            oscard = _closure1_slot18;
            tangon = oscard.log;
            michal = 'Cannot apply token storage fix as token not in NSUserDefaults.';
            michal = tangon.bind(oscard)(michal);
            _fun00036_ip = 249; continue _fun00035;
 190:
            oscard = _closure1_slot18;
            tangon = oscard.log;
            michal = 'Applying token storage fix.';
            michal = tangon.bind(oscard)(michal);
            tangon = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[golfie];
            michal = tangon.bind(entity)(michal);
            oscard = michal.Storage;
            tangon = oscard.set;
            michal = _closure1_slot15;
            michal = tangon.bind(oscard)(michal, option);
 249:
            oscard = _closure1_slot2;
            tangon = _closure1_slot3;
            michal = 46;
            option = tangon[michal];
            verify = oscard.bind(entity)(option);
            option = verify.init;
            option = option.bind(verify)();
            michal = tangon[michal];
            oscard = oscard.bind(entity)(michal);
            michal = oscard.getToken;
            michal = michal.bind(oscard)();
            michal = report != michal;
            oscard = _closure1_slot0;
            tangon = tangon[golfie];
            tangon = oscard.bind(entity)(tangon);
            golfie = tangon.Storage;
            oscard = golfie.get;
            tangon = _closure1_slot15;
            tangon = oscard.bind(golfie)(tangon);
            oscard = report != tangon;
            report = _closure1_slot18;
            tangon = report.verbose;
            zuuluu = {};
            zuuluu['storageHasToken'] = oscard;
            zuuluu['tokenManagerHasToken'] = michal;
            michal = 'Token manager has initialized';
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    var _closure1_slot36 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    foxtra = 0;
    tangon = golfie[foxtra];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    romeon = 1;
    tangon = golfie[romeon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    yankee = 2;
    tangon = golfie[yankee];
    tangon = oscard.bind(entity)(tangon);
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.AppState;
    var _closure1_slot6 = report;
    report = tangon.Linking;
    var _closure1_slot7 = report;
    report = tangon.LogBox;
    var _closure1_slot8 = report;
    tangon = tangon.NativeModules;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = 6;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = 9;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = 10;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.AppStates;
    var _closure1_slot12 = report;
    report = tangon.AnalyticEvents;
    var _closure1_slot13 = report;
    report = tangon.FIRST_RUN_DATE_KEY;
    var _closure1_slot14 = report;
    report = tangon.TOKEN_KEY;
    var _closure1_slot15 = report;
    report = tangon.STORAGE_SECURE_KEYS;
    var _closure1_slot16 = report;
    tangon = tangon.Platforms;
    var _closure1_slot17 = tangon;
    report = 11;
    tangon = golfie[report];
    tangon = option.bind(entity)(tangon);
    verify = tangon.loadImports;
    tangon = verify.recordEnd;
    tangon = tangon.bind(verify)();
    tangon = 12;
    tangon = golfie[tangon];
    offset = option.bind(entity)(tangon);
    tangon = offset.prototype;
    verify = Object.create(tangon, {constructor: {value: offset}});
    sizing = 'index.native.tsx';
    output = verify;
    tangon = new output[offset](sizing, kiloes);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot18 = tangon;
    tangon = 31;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Future;
    verify = tangon.prototype;
    verify = Object.create(verify, {constructor: {value: tangon}});
    output = verify;
    tangon = new output[tangon](sizing);
    tangon = tangon instanceof Object ? tangon : verify;
    var _closure1_slot19 = tangon;
    verify = {};
    verify['None'] = foxtra;
    offset = 'None';
    verify[foxtra] = offset;
    verify['HeadlessRan'] = romeon;
    offset = 'HeadlessRan';
    verify[romeon] = offset;
    verify['Full'] = yankee;
    offset = 'Full';
    verify[yankee] = offset;
    var _closure1_slot20 = verify;
    verify = verify.None;
    var _closure1_slot21 = verify;
    report = golfie[report];
    report = option.bind(entity)(report);
    option = report.loadIndex;
    report = option.recordEnd;
    report = report.bind(option)();
    report = 56;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_startup/native/NativeAppStartup.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['applicationReady'] = tangon;
    tangon = function() { // Original name: init
        entity = undefined;
        tangon = _closure1_slot34;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['init'] = tangon;
    michal = function() { // Original name: initHeadlessTask
        entity = undefined;
        tangon = _closure1_slot35;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['initHeadlessTask'] = michal;
    return entity;
})();