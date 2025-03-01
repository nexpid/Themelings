// app/modules/hangouts/native/NativeHangoutsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        entity = argBaz;
        var _closure1_slot1 = entity;
        var _closure1_slot2 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        option = tangon.NativeEventEmitter;
        tangon = tangon.NativeModules;
        var _closure1_slot3 = tangon;
        golfie = 1;
        golfie = oscard[golfie];
        verify = report.bind(entity)(golfie);
        golfie = verify.isIOS;
        golfie = golfie.bind(verify)();
        if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 112:
        romeon = tangon.DCDLockscreenWidgetManager;
        golfie = option.prototype;
        golfie = Object.create(golfie, {constructor: {value: option}});
        foxtra = golfie;
        tangon = new foxtra[option](romeon, yankee);
        verify = tangon instanceof Object ? tangon : golfie;
        option = verify.addListener;
        golfie = 'pushTokenUpdate';
        tangon = function(argFoo) {
            entity = argFoo;
            report = entity.token;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'HANGOUT_PUSH_TOKEN_UPDATE';
            michal['type'] = oscard;
            michal['token'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        tangon = option.bind(verify)(golfie, tangon);
 163:
        tangon = 3;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/hangouts/native/NativeHangoutsUtils.tsx';
        tangon = report.bind(oscard)(tangon);
        tangon = function(argFoo, argBar) { // Original name: preloadAsset
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 1;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isIOS;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00004_ip = 68; continue _fun00003 }
 38:
                michal = _closure1_slot3;
                report = michal.DCDLockscreenWidgetManager;
                tangon = report.downloadAndStoreImage;
                zuuluu = argFoo;
                michal = argBar;
                michal = tangon.bind(report)(zuuluu, michal);
 68:
                return entity;
            }
        };
        zuuluu['preloadAsset'] = tangon;
        tangon = function() { // Original name: hasActivity
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 1;
                tangon = tangon[michal];
                michal = undefined;
                tangon = report.bind(michal)(tangon);
                michal = tangon.isIOS;
                tangon = michal.bind(tangon)();
                michal = global;
                if(tangon) { _fun00006_ip = 75; continue _fun00005 }
 42:
                oscard = michal.Promise;
                report = oscard.resolve;
                tangon = {'hasActivity': false, 'hasActiveActivity': false};
                tangon = report.bind(oscard)(tangon);
                return tangon;
 75:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.DCDLockscreenWidgetManager;
                var _closure2_slot0 = zuuluu;
                zuuluu = michal.Promise;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = function(argFoo) {
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.hasActivity;
                    entity = function(argFoo, argBar, argBaz) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = null;
                            entity = argFoo;
                            if(!(michal == entity)) { _fun00008_ip = 36; continue _fun00007 }
 16:
                            michal = {};
                            entity = argBar;
                            michal['hasActivity'] = entity;
                            entity = argBaz;
                            michal['hasActiveActivity'] = entity;
                            _fun00008_ip = 50; continue _fun00007;
 36:
                            michal = {'hasActivity': false, 'hasActiveActivity': false};
 50:
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                option = michal;
                entity = new option[zuuluu](golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        zuuluu['hasActivity'] = tangon;
        tangon = function() { // Original name: stopHangoutActivity
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = arguments[0];
                entity = undefined;
                if(!(tangon === entity)) { _fun00010_ip = 11; continue _fun00009 }
 9:
                tangon = 0;
 11:
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 1;
                zuuluu = oscard[zuuluu];
                report = report.bind(entity)(zuuluu);
                zuuluu = report.isIOS;
                zuuluu = zuuluu.bind(report)();
                if(!zuuluu) { _fun00010_ip = 70; continue _fun00009 }
 47:
                michal = _closure1_slot3;
                zuuluu = michal.DCDLockscreenWidgetManager;
                michal = zuuluu.endActivity;
                michal = michal.bind(zuuluu)(tangon);
 70:
                return entity;
            }
        };
        zuuluu['stopHangoutActivity'] = tangon;
        tangon = function(argFoo) { // Original name: startHangoutActivity
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 1;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isIOS;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00012_ip = 83; continue _fun00011 }
 38:
                michal = _closure1_slot3;
                tangon = michal.DCDLockscreenWidgetManager;
                zuuluu = tangon.startActivity;
                michal = global;
                oscard = michal.JSON;
                report = oscard.stringify;
                michal = argFoo;
                michal = report.bind(oscard)(michal);
                michal = zuuluu.bind(tangon)(michal);
 83:
                return entity;
            }
        };
        zuuluu['startHangoutActivity'] = tangon;
        michal = function() { // Original name: activitiesAllowed
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 1;
                tangon = tangon[michal];
                michal = undefined;
                tangon = report.bind(michal)(tangon);
                michal = tangon.isIOS;
                tangon = michal.bind(tangon)();
                michal = global;
                if(tangon) { _fun00014_ip = 65; continue _fun00013 }
 42:
                oscard = michal.Promise;
                report = oscard.reject;
                tangon = 'unsupported';
                tangon = report.bind(oscard)(tangon);
                return tangon;
 65:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.DCDLockscreenWidgetManager;
                var _closure2_slot0 = zuuluu;
                zuuluu = michal.Promise;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = function(argFoo, argBar) {
                    michal = argFoo;
                    var _closure3_slot0 = michal;
                    michal = argBar;
                    var _closure3_slot1 = michal;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.activitiesAllowed;
                    entity = function(argFoo, argBar) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            zuuluu = argFoo;
                            entity = null;
                            if(!(entity == zuuluu)) { _fun00016_ip = 28; continue _fun00015 }
 9:
                            tangon = _closure3_slot0;
                            michal = undefined;
                            entity = argBar;
                            entity = tangon.bind(michal)(entity);
                            _fun00016_ip = 42; continue _fun00015;
 28:
                            michal = _closure3_slot1;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 42:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                option = michal;
                entity = new option[zuuluu](golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        zuuluu['activitiesAllowed'] = michal;
        return entity;
    }
})();