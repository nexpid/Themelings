// app/modules/user_settings/native/UserSettingsNativeBridgeManager.tsx
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
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: UserSettingsNativeBridgeManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                oscard = this;
                backup = 0;
                entity = copyRestArgs(backup);
                option = _closure1_slot3;
                tangon = _closure2_slot0;
                report = undefined;
                option = option.bind(report)(oscard, tangon);
                yankee = new Array(0);
                backup = yankee;
                foxtra = entity;
                romeon = 0;
                entity = arraySpread(backup, foxtra, romeon);
                entity = _closure1_slot5;
                offset = entity.bind(report)(tangon);
                tangon = _closure1_slot4;
                entity = _closure1_slot9;
                entity = entity.bind(report)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                golfie = _closure1_slot5;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 120:
                entity = tangon.bind(report)(oscard, entity);
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 7;
                michal = oscard[michal];
                tangon = tangon.bind(report)(michal);
                michal = tangon.isIOS;
                michal = michal.bind(tangon)();
                if(michal) { _fun00004_ip = 168; continue _fun00003 }
 159:
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                _fun00004_ip = 175; continue _fun00003;
 168:
                michal = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure1_slot8;
                        tangon = entity.settings;
                        michal = null;
                        report = michal == tangon;
                        entity = undefined;
                        oscard = undefined;
                        if(report) { _fun00006_ip = 47; continue _fun00005 }
 26:
                        tangon = tangon.textAndImages;
                        report = michal == tangon;
                        oscard = undefined;
                        if(report) { _fun00006_ip = 47; continue _fun00005 }
 41:
                        oscard = tangon.explicitContentSettings;
 47:
                        zuuluu = _closure1_slot7;
                        tangon = zuuluu.NSUserDefaultsBridge;
                        if(!(michal != tangon)) { _fun00006_ip = 93; continue _fun00005 }
 61:
                        zuuluu = tangon.setExplicitContentSettingsJSONString;
                        michal = global;
                        report = michal.JSON;
                        michal = report.stringify;
                        michal = michal.bind(report)(oscard);
                        michal = zuuluu.bind(tangon)(michal);
 93:
                        return entity;
                    }
                };
 175:
                entity['saveExplicitContentSettingsToDisk'] = michal;
                michal = {};
                zuuluu = entity.saveExplicitContentSettingsToDisk;
                michal['POST_CONNECTION_OPEN'] = zuuluu;
                zuuluu = entity.saveExplicitContentSettingsToDisk;
                michal['USER_SETTINGS_PROTO_UPDATE'] = zuuluu;
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
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/UserSettingsNativeBridgeManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();