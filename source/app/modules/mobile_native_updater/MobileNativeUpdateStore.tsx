// app/modules/mobile_native_updater/MobileNativeUpdateStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UPDATE_CONFIG;
    var _closure1_slot8 = option;
    michal = michal.UPDATE_CHECK_INTERVAL;
    var _closure1_slot9 = michal;
    michal = 6;
    michal = oscard[michal];
    option = golfie.bind(entity)(michal);
    michal = option.prototype;
    verify = Object.create(michal, {constructor: {value: option}});
    michal = 'MobileNativeUpdateStore';
    foxtra = verify;
    romeon = michal;
    option = new foxtra[option](romeon, yankee);
    option = option instanceof Object ? option : verify;
    var _closure1_slot10 = option;
    option = null;
    verify = {'lastCheck': null, 'checking': false, 'newBuild': null};
    var _closure1_slot11 = verify;
    var _closure1_slot12 = option;
    option = 9;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    verify = option.Store;
    option = function(argFoo) {
        tangon = function(argFoo) { // Original name: MobileNativeUpdateStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot13;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 84; continue _fun00003 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 118; continue _fun00003;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = _closure1_slot8;
                michal = null;
                michal = michal !== zuuluu;
                entity['hasUpdatesConfigured'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'checkForNewerBuild';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot11;
                tangon = zuuluu.checking;
                zuuluu = true;
                if(!(zuuluu !== tangon)) { _fun00006_ip = 116; continue _fun00005 }
 21:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 7;
                zuuluu = report[zuuluu];
                tangon = undefined;
                golfie = oscard.bind(tangon)(zuuluu);
                oscard = golfie.dispatch;
                zuuluu = {};
                option = 'MOBILE_NATIVE_UPDATE_CHECK_STARTED';
                zuuluu['type'] = option;
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = _closure1_slot0;
                michal = 8;
                michal = report[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.checkForNewerBuild;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'MOBILE_NATIVE_UPDATE_CHECK_FINISHED';
                    michal['type'] = report;
                    report = argFoo;
                    michal['newBuild'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = function() {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'MOBILE_NATIVE_UPDATE_CHECK_FAILED';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
 116:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'ensureInitialized';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                michal = michal.hasUpdatesConfigured;
                if(!michal) { _fun00008_ip = 90; continue _fun00007 }
 18:
                zuuluu = _closure1_slot12;
                michal = null;
                if(!(michal === zuuluu)) { _fun00008_ip = 90; continue _fun00007 }
 31:
                tangon = function() { // Original name: backgroundUpdateCheck
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.info;
                    entity = 'Checking for new native builds in the background';
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure3_slot0;
                    entity = michal.checkForNewerBuild;
                    entity = entity.bind(michal)();
                    entity = undefined;
                    return entity;
                };
                entity = global;
                oscard = entity.setInterval;
                zuuluu = _closure1_slot9;
                michal = zuuluu.asMilliseconds;
                michal = michal.bind(zuuluu)();
                zuuluu = undefined;
                michal = oscard.bind(zuuluu)(tangon, michal);
                _closure1_slot12 = michal;
                michal = entity.setTimeout;
                entity = 1000;
                entity = michal.bind(zuuluu)(tangon, entity);
 90:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'latestFetchedBuild';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.ensureInitialized;
            entity = entity.bind(michal)();
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = option.bind(entity)(verify);
    option['displayName'] = michal;
    michal = 7;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleCheckStarted
        michal = {};
        report = _closure1_slot11;
        oscard = michal;
        zuuluu = copyDataProperties(oscard, report);
        tangon = true;
        zuuluu = 'checking';
        michal[zuuluu] = tangon;
        _closure1_slot11 = michal;
        entity = undefined;
        return entity;
    };
    michal['MOBILE_NATIVE_UPDATE_CHECK_STARTED'] = verify;
    verify = function() { // Original name: handleCheckFailed
        michal = {};
        report = _closure1_slot11;
        oscard = michal;
        zuuluu = copyDataProperties(oscard, report);
        tangon = false;
        zuuluu = 'checking';
        michal[zuuluu] = tangon;
        _closure1_slot11 = michal;
        entity = undefined;
        return entity;
    };
    michal['MOBILE_NATIVE_UPDATE_CHECK_FAILED'] = verify;
    tangon = function(argFoo) { // Original name: handleCheckFinished
        entity = argFoo;
        entity = entity.newBuild;
        michal = {};
        zuuluu = global;
        zuuluu = zuuluu.Date;
        tangon = zuuluu.prototype;
        tangon = Object.create(tangon, {constructor: {value: zuuluu}});
        report = tangon;
        zuuluu = new report[zuuluu](tangon);
        zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
        michal['lastCheck'] = zuuluu;
        zuuluu = false;
        michal['checking'] = zuuluu;
        michal['newBuild'] = entity;
        _closure1_slot11 = michal;
        entity = undefined;
        return entity;
    };
    michal['MOBILE_NATIVE_UPDATE_CHECK_FINISHED'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/mobile_native_updater/MobileNativeUpdateStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();