// app/lib/RTCConnectionStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RTCConnectionStates;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: StateHistory
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                report = _closure1_slot3;
                michal = _closure2_slot0;
                entity = undefined;
                michal = report.bind(entity)(zuuluu, michal);
                michal = null;
                zuuluu['current'] = michal;
                report = new Array(0);
                zuuluu['history'] = report;
                if(!(michal != tangon)) { _fun00002_ip = 61; continue _fun00001 }
 50:
                michal = zuuluu.update;
                michal = michal.bind(zuuluu)(tangon);
 61:
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = null;
                michal['current'] = entity;
                tangon = new Array(0);
                michal['history'] = tangon;
                if(!(entity != zuuluu)) { _fun00004_ip = 39; continue _fun00003 }
 28:
                entity = michal.update;
                entity = entity.bind(michal)(zuuluu);
 39:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'update';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                entity = this;
                michal = entity.current;
                if(!(michal !== tangon)) { _fun00006_ip = 82; continue _fun00005 }
 15:
                entity['current'] = tangon;
                zuuluu = entity.history;
                michal = zuuluu.push;
                entity = {};
                entity['state'] = tangon;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 3;
                report = report[tangon];
                tangon = undefined;
                report = oscard.bind(tangon)(report);
                tangon = report.now;
                tangon = tangon.bind(report)();
                entity['startTime'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 82:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getVoiceConnectionSuccessStats';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = arguments[0];
                zuuluu = this;
                tangon = undefined;
                if(!(report === tangon)) { _fun00008_ip = 46; continue _fun00007 }
 14:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 3;
                michal = golfie[michal];
                oscard = oscard.bind(tangon)(michal);
                michal = oscard.now;
                report = michal.bind(oscard)();
 46:
                var _closure3_slot0 = tangon;
                michal = zuuluu.getStateDurations;
                michal = michal.bind(zuuluu)(report);
                _closure3_slot0 = michal;
                zuuluu = function(argFoo) { // Original name: totalDuration
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.sumBy;
                    michal = _closure3_slot0;
                    entity = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            michal = argFoo;
                            tangon = michal.state;
                            zuuluu = _closure4_slot0;
                            entity = 0;
                            if(!(tangon === zuuluu)) { _fun00010_ip = 27; continue _fun00009 }
 21:
                            entity = michal.durationMs;
 27:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity = {};
                michal = _closure1_slot5;
                report = michal.AWAITING_ENDPOINT;
                report = zuuluu.bind(tangon)(report);
                entity['state_awaiting_endpoint_ms'] = report;
                report = michal.AUTHENTICATING;
                report = zuuluu.bind(tangon)(report);
                entity['state_authenticating_ms'] = report;
                report = michal.CONNECTING;
                report = zuuluu.bind(tangon)(report);
                entity['state_connecting_ms'] = report;
                report = michal.DISCONNECTED;
                report = zuuluu.bind(tangon)(report);
                entity['state_disconnected_ms'] = report;
                report = michal.ICE_CHECKING;
                report = zuuluu.bind(tangon)(report);
                entity['state_ice_checking_ms'] = report;
                report = michal.NO_ROUTE;
                report = zuuluu.bind(tangon)(report);
                entity['state_no_route_ms'] = report;
                report = michal.RTC_CONNECTING;
                report = zuuluu.bind(tangon)(report);
                entity['state_rtc_connecting_ms'] = report;
                michal = michal.RTC_DISCONNECTED;
                michal = zuuluu.bind(tangon)(michal);
                entity['state_rtc_disconnected_ms'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getStateDurations';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.history;
                zuuluu = entity.length;
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00012_ip = 134; continue _fun00011 }
 20:
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 5;
                entity = golfie[entity];
                report = undefined;
                tangon = oscard.bind(report)(entity);
                zuuluu = michal.history;
                entity = function(argFoo, argBar) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.state;
                    entity['state'] = zuuluu;
                    zuuluu = argBar;
                    zuuluu = zuuluu.startTime;
                    michal = michal.startTime;
                    michal = zuuluu - michal;
                    entity['durationMs'] = michal;
                    return entity;
                };
                entity = tangon.bind(report)(zuuluu, entity);
                zuuluu = entity.push;
                tangon = 4;
                tangon = golfie[tangon];
                report = oscard.bind(report)(tangon);
                tangon = report.last;
                michal = michal.history;
                tangon = tangon.bind(report)(michal);
                michal = {};
                report = tangon.state;
                michal['state'] = report;
                report = tangon.startTime;
                tangon = argFoo;
                tangon = tangon - report;
                michal['durationMs'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
 134:
                entity = new Array(0);
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/RTCConnectionStats.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['StateHistory'] = michal;
    return entity;
})();