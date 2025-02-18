// app/modules/device/ThermalUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        michal = {};
        entity = true;
        michal['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, michal);
        entity = 0;
        michal = oscard[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        option = michal.NativeEventEmitter;
        michal = michal.NativeModules;
        var _closure1_slot3 = michal;
        golfie = 1;
        golfie = oscard[golfie];
        offset = report.bind(entity)(golfie);
        golfie = offset.isAndroid;
        golfie = golfie.bind(offset)();
        if(golfie) { _fun00002_ip = 119; continue _fun00001 }
 111:
        michal = michal.DCDDeviceThermalStateManager;
        _fun00002_ip = 131; continue _fun00001;
 119:
        golfie = 2;
        golfie = oscard[golfie];
        michal = verify.bind(entity)(golfie);
 131:
        golfie = option.prototype;
        golfie = Object.create(golfie, {constructor: {value: option}});
        backup = golfie;
        foxtra = michal;
        michal = new backup[option](foxtra, romeon);
        michal = michal instanceof Object ? michal : golfie;
        var _closure1_slot4 = michal;
        michal = 4;
        michal = oscard[michal];
        option = report.bind(entity)(michal);
        golfie = option.create;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                var _closure2_slot0 = michal;
                oscard = function(argFoo) { // Original name: updateThermalState
                    entity = argFoo;
                    var _closure3_slot0 = entity;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 5;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        zuuluu = _closure2_slot0;
                        michal = undefined;
                        entity = function(argFoo) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                entity = argFoo;
                                tangon = entity.rawThermalState;
                                michal = _closure3_slot0;
                                if(!(tangon !== michal)) { _fun00006_ip = 34; continue _fun00005 }
 20:
                                michal = {};
                                zuuluu = _closure3_slot0;
                                michal['rawThermalState'] = zuuluu;
                                entity = michal;
 34:
                                return entity;
                            }
                        };
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                var _closure2_slot1 = oscard;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 1;
                tangon = tangon[michal];
                michal = undefined;
                report = report.bind(michal)(tangon);
                tangon = report.isAndroid;
                tangon = tangon.bind(report)();
                if(tangon) { _fun00004_ip = 77; continue _fun00003 }
 55:
                tangon = _closure1_slot3;
                report = tangon.DCDDeviceThermalStateManager;
                tangon = report.getThermalState;
                report = tangon.bind(report)();
                _fun00004_ip = 196; continue _fun00003;
 77:
                golfie = global;
                option = golfie.parseInt;
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                tangon = 3;
                tangon = offset[tangon];
                verify = verify.bind(michal)(tangon);
                tangon = verify.getSystemVersion;
                tangon = tangon.bind(verify)();
                option = option.bind(michal)(tangon);
                tangon = 29;
                if(!(!(option >= tangon))) { _fun00004_ip = 146; continue _fun00003 }
 127:
                option = golfie.Promise;
                tangon = option.resolve;
                tangon = tangon.bind(option)(michal);
                _fun00004_ip = 193; continue _fun00003;
 146:
                verify = golfie.Promise;
                option = verify.resolve;
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                golfie = 2;
                golfie = yankee[golfie];
                offset = offset.bind(michal)(golfie);
                golfie = offset.getThermalState;
                golfie = golfie.bind(offset)();
                tangon = option.bind(verify)(golfie);
 193:
                report = tangon;
 196:
                tangon = report.then;
                tangon = tangon.bind(report)(oscard);
                report = _closure1_slot4;
                tangon = report.addListener;
                zuuluu = 'DeviceThermalStateDidChange';
                entity = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.state;
                    michal = _closure2_slot1;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                };
                entity = tangon.bind(report)(zuuluu, entity);
                entity = {};
                entity['rawThermalState'] = michal;
                return entity;
            }
        };
        michal = golfie.bind(option)(michal);
        var _closure1_slot5 = michal;
        michal = {};
        golfie = function() { // Original name: getRawThermalState
            michal = _closure1_slot5;
            entity = michal.getState;
            entity = entity.bind(michal)();
            entity = entity.rawThermalState;
            return entity;
        };
        michal['getRawThermalState'] = golfie;
        golfie = function() { // Original name: useRawThermalState
            zuuluu = _closure1_slot5;
            michal = undefined;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.rawThermalState;
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        michal['useRawThermalState'] = golfie;
        tangon = function(argFoo) { // Original name: addListener
            entity = {};
            tangon = _closure1_slot5;
            zuuluu = tangon.subscribe;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            entity['remove'] = michal;
            return entity;
        };
        michal['addListener'] = tangon;
        tangon = 6;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/device/ThermalUtils.native.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();