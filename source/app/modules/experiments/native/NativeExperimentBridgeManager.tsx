// app/modules/experiments/native/NativeExperimentBridgeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot9 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: isScrollExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            tangon = entity.ScrollRefactorExperiment;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = 'NativeExperimentBridgeManager';
            entity['location'] = report;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.enabled;
            tangon = entity.showDebug;
            entity = zuuluu;
            if(!tangon) { _fun00004_ip = 96; continue _fun00003 }
 71:
            michal = _closure1_slot8;
            michal = michal.chatScrollRefactorEnabled;
            tangon = !michal;
            michal = !tangon;
            if(tangon) { _fun00004_ip = 93; continue _fun00003 }
 90:
            michal = zuuluu;
 93:
            entity = michal;
 96:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: updateIOSExperiments
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot7;
            zuuluu = michal.NSUserDefaultsBridge;
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 42; continue _fun00005 }
 19:
            michal = zuuluu.setScrollRefactorExperimentEnabled;
            tangon = _closure1_slot10;
            entity = undefined;
            entity = tangon.bind(entity)();
            entity = michal.bind(zuuluu)(entity);
 42:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: updateAndroidExperiments
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot7;
            tangon = michal.NativeCacheModule;
            michal = null;
            if(!(michal != tangon)) { _fun00008_ip = 58; continue _fun00007 }
 19:
            zuuluu = tangon.setItem;
            michal = _closure1_slot10;
            entity = undefined;
            entity = michal.bind(entity)();
            michal = 'false';
            if(!entity) { _fun00008_ip = 46; continue _fun00007 }
 42:
            michal = 'true';
 46:
            entity = 'scrollToRefactorExperimentEnabled';
            entity = zuuluu.bind(tangon)(entity, michal);
 58:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: NativeExperimentBridgeManager
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot3;
                michal = _closure2_slot0;
                report = undefined;
                golfie = golfie.bind(report)(tangon, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(report)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot9;
                entity = entity.bind(report)();
                if(entity) { _fun00010_ip = 84; continue _fun00009 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, offset);
                _fun00010_ip = 118; continue _fun00009;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(report)(tangon);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(report)(tangon, entity);
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                oscard = 8;
                michal = michal[oscard];
                tangon = tangon.bind(report)(michal);
                michal = tangon.isIOS;
                michal = michal.bind(tangon)();
                if(michal) { _fun00010_ip = 203; continue _fun00009 }
 157:
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[oscard];
                tangon = tangon.bind(report)(michal);
                michal = tangon.isAndroid;
                michal = michal.bind(tangon)();
                if(michal) { _fun00010_ip = 197; continue _fun00009 }
 186:
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                _fun00010_ip = 201; continue _fun00009;
 197:
                michal = _closure1_slot12;
 201:
                _fun00010_ip = 207; continue _fun00009;
 203:
                michal = _closure1_slot11;
 207:
                entity['handleUpdate'] = michal;
                michal = {};
                zuuluu = entity.handleUpdate;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
                zuuluu = entity.handleUpdate;
                michal['UNSYNCED_USER_SETTINGS_UPDATE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/native/NativeExperimentBridgeManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();