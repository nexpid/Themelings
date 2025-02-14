// app/lib/RTCConnectionStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RTCConnectionStates;
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: StateHistory
            _fun52400: for(var _fun52400_ip = 0; ; ) switch(_fun52400_ip) {
 0:
                tango = argFoo;
                zulu = this;
                report = _closure1_slot3;
                mike = _closure2_slot0;
                entity = undefined;
                mike = report.bind(entity)(zulu, mike);
                mike = null;
                zulu['current'] = mike;
                report = new Array(0);
                zulu['history'] = report;
                if(!(mike != tango)) { _fun52400_ip = 61; continue _fun52400 }
 50:
                mike = zulu.update;
                mike = mike.bind(zulu)(tango);
 61:
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun52401: for(var _fun52401_ip = 0; ; ) switch(_fun52401_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = null;
                mike['current'] = entity;
                tango = new Array(0);
                mike['history'] = tango;
                if(!(entity != zulu)) { _fun52401_ip = 39; continue _fun52401 }
 28:
                entity = mike.update;
                entity = entity.bind(mike)(zulu);
 39:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun52402: for(var _fun52402_ip = 0; ; ) switch(_fun52402_ip) {
 0:
                tango = argFoo;
                entity = this;
                mike = entity.current;
                if(!(mike !== tango)) { _fun52402_ip = 82; continue _fun52402 }
 15:
                entity['current'] = tango;
                zulu = entity.history;
                mike = zulu.push;
                entity = {};
                entity['state'] = tango;
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                tango = 3;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.now;
                tango = tango.bind(report)();
                entity['startTime'] = tango;
                entity = mike.bind(zulu)(entity);
 82:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getVoiceConnectionSuccessStats';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun52403: for(var _fun52403_ip = 0; ; ) switch(_fun52403_ip) {
 0:
                report = arguments[0];
                zulu = this;
                tango = undefined;
                if(!(report === tango)) { _fun52403_ip = 46; continue _fun52403 }
 14:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 3;
                mike = golf[mike];
                oscar = oscar.bind(tango)(mike);
                mike = oscar.now;
                report = mike.bind(oscar)();
 46:
                var _closure3_slot0 = tango;
                mike = zulu.getStateDurations;
                mike = mike.bind(zulu)(report);
                _closure3_slot0 = mike;
                zulu = function(argFoo) { // Original name: totalDuration
                    mike = argFoo;
                    var _closure4_slot0 = mike;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.sumBy;
                    mike = _closure3_slot0;
                    entity = function(argFoo) {
                        _fun52405: for(var _fun52405_ip = 0; ; ) switch(_fun52405_ip) {
 0:
                            mike = argFoo;
                            tango = mike.state;
                            zulu = _closure4_slot0;
                            entity = 0;
                            if(!(tango === zulu)) { _fun52405_ip = 27; continue _fun52405 }
 21:
                            entity = mike.durationMs;
 27:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = {};
                mike = _closure1_slot5;
                report = mike.AWAITING_ENDPOINT;
                report = zulu.bind(tango)(report);
                entity['state_awaiting_endpoint_ms'] = report;
                report = mike.AUTHENTICATING;
                report = zulu.bind(tango)(report);
                entity['state_authenticating_ms'] = report;
                report = mike.CONNECTING;
                report = zulu.bind(tango)(report);
                entity['state_connecting_ms'] = report;
                report = mike.DISCONNECTED;
                report = zulu.bind(tango)(report);
                entity['state_disconnected_ms'] = report;
                report = mike.ICE_CHECKING;
                report = zulu.bind(tango)(report);
                entity['state_ice_checking_ms'] = report;
                report = mike.NO_ROUTE;
                report = zulu.bind(tango)(report);
                entity['state_no_route_ms'] = report;
                report = mike.RTC_CONNECTING;
                report = zulu.bind(tango)(report);
                entity['state_rtc_connecting_ms'] = report;
                mike = mike.RTC_DISCONNECTED;
                mike = zulu.bind(tango)(mike);
                entity['state_rtc_disconnected_ms'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getStateDurations';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun52406: for(var _fun52406_ip = 0; ; ) switch(_fun52406_ip) {
 0:
                mike = this;
                entity = mike.history;
                zulu = entity.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun52406_ip = 134; continue _fun52406 }
 20:
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 5;
                entity = golf[entity];
                report = undefined;
                tango = oscar.bind(report)(entity);
                zulu = mike.history;
                entity = function(argFoo, argBar) {
                    mike = argFoo;
                    entity = {};
                    zulu = mike.state;
                    entity['state'] = zulu;
                    zulu = argBar;
                    zulu = zulu.startTime;
                    mike = mike.startTime;
                    mike = zulu - mike;
                    entity['durationMs'] = mike;
                    return entity;
                };
                entity = tango.bind(report)(zulu, entity);
                zulu = entity.push;
                tango = 4;
                tango = golf[tango];
                report = oscar.bind(report)(tango);
                tango = report.last;
                mike = mike.history;
                tango = tango.bind(report)(mike);
                mike = {};
                report = tango.state;
                mike['state'] = report;
                report = tango.startTime;
                tango = argFoo;
                tango = tango - report;
                mike['durationMs'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
 134:
                entity = new Array(0);
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/RTCConnectionStats.tsx';
    tango = report.bind(oscar)(tango);
    zulu['StateHistory'] = mike;
    return entity;
})();