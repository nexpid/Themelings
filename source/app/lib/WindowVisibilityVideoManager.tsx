// app/lib/WindowVisibilityVideoManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
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
    report = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = {};
    report = 'window-visibility-changed';
    tangon['WindowVisibilityChanged'] = report;
    report = 'incoming-video-enabled-changed';
    tangon['IncomingVideoEnabledChanged'] = report;
    var _closure1_slot8 = tangon;
    report = 11;
    report = golfie[report];
    report = option.bind(entity)(report);
    michal = function(argFoo) {
        tangon = function() { // Original name: WindowVisibilityVideoManager
            oscard = this;
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            entity = _closure1_slot9;
            entity = entity.bind(tangon)(oscard, report);
            var _closure3_slot0 = entity;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            oscard = 5;
            oscard = report[oscard];
            oscard = golfie.bind(tangon)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            romeon = golfie;
            oscard = new romeon[oscard](yankee);
            oscard = oscard instanceof Object ? oscard : golfie;
            entity['disableVideoTimer'] = oscard;
            oscard = true;
            entity['discordVisible'] = oscard;
            entity['incomingVideoEnabled'] = oscard;
            zuuluu = _closure1_slot1;
            oscard = 6;
            oscard = report[oscard];
            option = zuuluu.bind(tangon)(oscard);
            oscard = option.prototype;
            golfie = Object.create(oscard, {constructor: {value: option}});
            yankee = 'WindowVisibilityVideoManager';
            romeon = golfie;
            oscard = new romeon[option](yankee, offset);
            oscard = oscard instanceof Object ? oscard : golfie;
            entity['logger'] = oscard;
            oscard = 7;
            oscard = report[oscard];
            oscard = zuuluu.bind(tangon)(oscard);
            oscard = oscard.Millis;
            golfie = oscard.SECOND;
            oscard = 30;
            oscard = oscard * golfie;
            entity['HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS'] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure3_slot0;
                    report = entity.discordVisible;
                    oscard = _closure1_slot1;
                    entity = _closure1_slot2;
                    golfie = 8;
                    michal = entity[golfie];
                    entity = undefined;
                    michal = oscard.bind(entity)(michal);
                    michal = michal.bind(entity)();
                    if(!(report !== michal)) { _fun00006_ip = 176; continue _fun00005 }
 49:
                    michal = _closure3_slot0;
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golfie];
                    report = oscard.bind(entity)(report);
                    report = report.bind(entity)();
                    michal['discordVisible'] = report;
                    oscard = michal.emit;
                    tangon = _closure1_slot8;
                    report = tangon.WindowVisibilityChanged;
                    tangon = michal.discordVisible;
                    tangon = oscard.bind(michal)(report, tangon);
                    michal = michal.discordVisible;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.disableVideoTimer;
                    if(michal) { _fun00006_ip = 153; continue _fun00005 }
 127:
                    oscard = zuuluu.start;
                    report = tangon.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS;
                    michal = function() {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.setIncomingVideoEnabled;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    michal = oscard.bind(zuuluu)(report, michal);
                    _fun00006_ip = 176; continue _fun00005;
 153:
                    michal = zuuluu.stop;
                    michal = michal.bind(zuuluu)();
                    zuuluu = tangon.setIncomingVideoEnabled;
                    michal = true;
                    michal = zuuluu.bind(tangon)(michal);
 176:
                    return entity;
                }
            };
            entity['update'] = michal;
            michal = 9;
            oscard = report[michal];
            verify = zuuluu.bind(tangon)(oscard);
            option = verify.subscribe;
            golfie = entity.update;
            oscard = 'WINDOW_VISIBILITY_CHANGE';
            oscard = option.bind(verify)(oscard, golfie);
            michal = report[michal];
            option = zuuluu.bind(tangon)(michal);
            golfie = option.subscribe;
            oscard = entity.update;
            michal = 'APP_STATE_UPDATE';
            michal = golfie.bind(option)(michal, oscard);
            michal = 10;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.addOnPipModeChangedListener;
            michal = entity.update;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'isIncomingVideoEnabled';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            entity = entity.incomingVideoEnabled;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'setIncomingVideoEnabled';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                tangon = this;
                entity = tangon.incomingVideoEnabled;
                tangon['incomingVideoEnabled'] = michal;
                if(!(entity !== michal)) { _fun00008_ip = 99; continue _fun00007 }
 22:
                zuuluu = tangon.logger;
                michal = zuuluu.info;
                oscard = tangon.incomingVideoEnabled;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'Incoming video enabled changed, incomingVideoEnabled = ';
                entity = report.bind(entity)(oscard);
                entity = michal.bind(zuuluu)(entity);
                zuuluu = tangon.emit;
                entity = _closure1_slot8;
                michal = entity.IncomingVideoEnabledChanged;
                entity = tangon.incomingVideoEnabled;
                entity = zuuluu.bind(tangon)(michal, entity);
 99:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(report);
    report = michal.prototype;
    report = Object.create(report, {constructor: {value: michal}});
    foxtra = report;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/WindowVisibilityVideoManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['WindowVisibilityEvent'] = tangon;
    zuuluu['WindowVisibilityVideoManager'] = michal;
    return entity;
})();