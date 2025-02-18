// app/modules/autocompleter/native/UserSearch.worker.tsx
export default (function(argFoo, argBar, argBaz, _, argGra, __, argPlu) {
    zuuluu = argBar;
    oscard = argBaz;
    tangon = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot7;
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
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = 0;
    report = tangon[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 3;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = tangon[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = tangon[report];
    report = zuuluu.bind(entity)(report);
    oscard = report.NativeModules;
    report = report.NativeEventEmitter;
    oscard = oscard.UserSearchWorkerManager;
    var _closure1_slot5 = oscard;
    michal = function(argFoo) {
        tangon = function() { // Original name: UserSearchWorker
            oscard = this;
            zuuluu = _closure1_slot0;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot6;
            golfie = _closure1_slot5;
            entity = new Array(1);
            entity[0] = golfie;
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = global;
            zuuluu = zuuluu.Set;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            yankee = tangon;
            zuuluu = new yankee[zuuluu](offset);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            entity['handlers'] = zuuluu;
            zuuluu = null;
            entity['subscription'] = zuuluu;
            michal = function(argFoo) {
                michal = argFoo;
                var _closure4_slot0 = michal;
                michal = _closure3_slot0;
                zuuluu = michal.handlers;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = {};
                    entity = _closure4_slot0;
                    zuuluu['data'] = entity;
                    michal = argFoo;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleCallback'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'postMessage';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                entity = global;
                if(report) { _fun00006_ip = 42; continue _fun00005 }
 8:
                tangon = entity.Error;
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                oscard = 'Invalid data';
                golfie = zuuluu;
                michal = new golfie[tangon](oscard, report);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 42:
                zuuluu = _closure1_slot5;
                michal = zuuluu.onmessage;
                tangon = entity.JSON;
                entity = tangon.stringify;
                entity = entity.bind(tangon)(report);
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'addEventListener';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = this;
                zuuluu = 'message';
                michal = argFoo;
                if(!(zuuluu === michal)) { _fun00008_ip = 75; continue _fun00007 }
 14:
                zuuluu = entity.subscription;
                michal = null;
                if(!(michal == zuuluu)) { _fun00008_ip = 56; continue _fun00007 }
 26:
                tangon = entity.addListener;
                zuuluu = entity.handleCallback;
                michal = 'ReturnResults';
                michal = tangon.bind(entity)(michal, zuuluu);
                entity['subscription'] = michal;
 56:
                zuuluu = entity.handlers;
                michal = zuuluu.add;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
 75:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'removeEventListener';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                zuuluu = 'message';
                entity = argFoo;
                if(!(zuuluu === entity)) { _fun00010_ip = 78; continue _fun00009 }
 14:
                tangon = michal.handlers;
                zuuluu = tangon.delete;
                entity = argBar;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal.handlers;
                zuuluu = entity.size;
                entity = 0;
                if(!(entity === zuuluu)) { _fun00010_ip = 78; continue _fun00009 }
 50:
                tangon = michal.subscription;
                entity = null;
                if(!(entity != tangon)) { _fun00010_ip = 72; continue _fun00009 }
 62:
                zuuluu = tangon.remove;
                zuuluu = zuuluu.bind(tangon)();
 72:
                michal['subscription'] = entity;
 78:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'terminate';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = _closure1_slot5;
            entity = michal.terminate;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(report);
    report = michal.prototype;
    report = Object.create(report, {constructor: {value: michal}});
    option = report;
    michal = new option[michal](golfie);
    report = michal instanceof Object ? michal : report;
    michal = argGra;
    michal['exports'] = report;
    michal = 6;
    michal = tangon[michal];
    tangon = zuuluu.bind(entity)(michal);
    zuuluu = tangon.fileFinishedImporting;
    michal = 'modules/autocompleter/native/UserSearch.worker.tsx';
    michal = zuuluu.bind(tangon)(michal);
    return entity;
})();