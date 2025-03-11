// app/modules/experiments/native/NativeExperimentBridgeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot9;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
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
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: NativeExperimentBridgeManager
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golfie = this;
                romeon = 0;
                option = copyRestArgs(romeon);
                entity = _closure1_slot3;
                oscard = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golfie, oscard);
                tangon = _closure1_slot8;
                entity = new Array(0);
                romeon = entity;
                yankee = option;
                offset = 0;
                option = arraySpread(romeon, yankee, offset);
                entity = tangon.bind(report)(golfie, oscard, entity);
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 6;
                michal = oscard[michal];
                tangon = tangon.bind(report)(michal);
                michal = tangon.isIOS;
                michal = michal.bind(tangon)();
                if(michal) { _fun00006_ip = 102; continue _fun00005 }
 93:
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                _fun00006_ip = 109; continue _fun00005;
 102:
                michal = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure1_slot7;
                        report = michal.NSUserDefaultsBridge;
                        michal = null;
                        if(!(michal != report)) { _fun00008_ip = 77; continue _fun00007 }
 19:
                        tangon = report.setShareJumpToAppEnabled;
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot1;
                        zuuluu = 7;
                        oscard = oscard[zuuluu];
                        zuuluu = undefined;
                        golfie = golfie.bind(zuuluu)(oscard);
                        oscard = golfie.isShareJumpToAppEnabled;
                        zuuluu = {};
                        option = 'NativeExperimentBridgeManager';
                        zuuluu['location'] = option;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        zuuluu = tangon.bind(report)(zuuluu);
 77:
                        zuuluu = _closure1_slot7;
                        zuuluu = zuuluu.NSUserDefaultsBridge;
                        if(!(michal != zuuluu)) { _fun00008_ip = 149; continue _fun00007 }
 91:
                        michal = zuuluu.setSwiftMessageCellExperimentEnabled;
                        report = _closure1_slot0;
                        tangon = _closure1_slot1;
                        entity = 8;
                        tangon = tangon[entity];
                        entity = undefined;
                        report = report.bind(entity)(tangon);
                        tangon = report.isSwiftMessageCellExperimentEnabled;
                        entity = {};
                        oscard = 'NativeExperimentBridgeManager';
                        entity['location'] = oscard;
                        entity = tangon.bind(report)(entity);
                        entity = michal.bind(zuuluu)(entity);
 149:
                        entity = undefined;
                        return entity;
                    }
                };
 109:
                entity['handlePostConnectionOpen'] = michal;
                michal = {};
                zuuluu = entity.handlePostConnectionOpen;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
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