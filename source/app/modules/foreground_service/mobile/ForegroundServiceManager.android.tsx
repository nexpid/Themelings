// app/modules/foreground_service/mobile/ForegroundServiceManager.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
            entity = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    tangon = function() {
        tangon = _closure1_slot6;
        zuuluu = function() { // Original name: ForegroundServiceManager
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot5;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = global;
            tangon = tangon.Map;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            option = report;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['serviceNotifications'] = tangon;
            tangon = 1;
            zuuluu['serviceNotificationIdentifier'] = tangon;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.serviceNotifications;
                    michal = michal.size;
                    report = 0;
                    if(!(!(michal > report))) { _fun00006_ip = 51; continue _fun00005 }
 24:
                    michal = _closure1_slot7;
                    zuuluu = michal.ForegroundServiceModule;
                    michal = zuuluu.stopService;
                    michal = michal.bind(zuuluu)();
                    _fun00006_ip = 109; continue _fun00005;
 51:
                    michal = _closure1_slot7;
                    zuuluu = michal.ForegroundServiceModule;
                    michal = zuuluu.startService;
                    entity = _closure3_slot0;
                    tangon = entity.serviceNotifications;
                    entity = tangon.values;
                    golfie = entity.bind(tangon)();
                    entity = new Array(0);
                    option = entity;
                    oscard = 0;
                    tangon = arraySpread(option, golfie, oscard);
                    entity = michal.bind(zuuluu)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleChange'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'initialize';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'terminate';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'addServiceHandler';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            tangon = function(argFoo) {
                tangon = _closure3_slot0;
                zuuluu = tangon.serviceNotificationIdentifier;
                michal = tangon.serviceNotificationIdentifier;
                michal = michal + 1;
                tangon['serviceNotificationIdentifier'] = michal;
                michal = tangon.updateServiceHandler;
                entity = _closure3_slot1;
                entity = michal.bind(tangon)(zuuluu, entity);
                michal = argFoo;
                entity = undefined;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'updateServiceHandler';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                report = argBar;
                michal = this;
                entity = null;
                if(!(entity != report)) { _fun00008_ip = 94; continue _fun00007 }
 15:
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 6;
                entity = oscard[entity];
                oscard = undefined;
                zuuluu = zuuluu.bind(oscard)(entity);
                golfie = michal.serviceNotifications;
                entity = golfie.get;
                entity = entity.bind(golfie)(tangon);
                entity = zuuluu.bind(oscard)(entity, report);
                if(entity) { _fun00008_ip = 139; continue _fun00007 }
 65:
                zuuluu = michal.serviceNotifications;
                entity = zuuluu.set;
                entity = entity.bind(zuuluu)(tangon, report);
                entity = michal.handleChange;
                entity = entity.bind(michal)();
                _fun00008_ip = 139; continue _fun00007;
 94:
                zuuluu = michal.serviceNotifications;
                entity = zuuluu.has;
                entity = entity.bind(zuuluu)(tangon);
                if(!entity) { _fun00008_ip = 139; continue _fun00007 }
 113:
                zuuluu = michal.serviceNotifications;
                entity = zuuluu.delete;
                entity = entity.bind(zuuluu)(tangon);
                entity = michal.handleChange;
                entity = entity.bind(michal)();
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'removeServiceHandler';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.updateServiceHandler;
            michal = argFoo;
            entity = null;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'isForegroundServiceRunning';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            entity = _closure1_slot7;
            zuuluu = entity.ForegroundServiceModule;
            michal = zuuluu.isServiceRunning;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    option = tangon.prototype;
    option = Object.create(option, {constructor: {value: tangon}});
    foxtra = option;
    tangon = new foxtra[tangon](romeon);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function() { // Original name: ForegroundServiceLifecycleManager
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot5;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot9;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = _closure1_slot8;
            entity = michal.initialize;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = '_terminate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot8;
            entity = michal.terminate;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'addServiceHandler';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.addServiceHandler;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'updateServiceHandler';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = _closure1_slot8;
            zuuluu = tangon.updateServiceHandler;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'removeServiceHandler';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.removeServiceHandler;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isForegroundServiceRunning';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.isForegroundServiceRunning;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/foreground_service/mobile/ForegroundServiceManager.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();