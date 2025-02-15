// app/modules/gateway/WorkSchedulerTelemetry.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    report = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    golf = global;
    offset = golf.Object;
    oscar = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(offset)(zulu, entity, tango);
    foxtrot = 0;
    tango = verify[foxtrot];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    oscar = {};
    tango = 'longer_dispatch';
    oscar['LONGER_DISPATCH'] = tango;
    tango = 'exceeded_max_consecutive_flushes';
    oscar['EXCEEDED_MAX_CONSECUTIVE_FLUSHES'] = tango;
    tango = 'fired_due_to_max_timeout';
    oscar['FIRED_DUE_TO_MAX_TIMEOUT'] = tango;
    tango = 'skip_idle_callback_due_to_backgrounded';
    oscar['SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED'] = tango;
    report = {};
    tango = 'time_to_fire_idle_callback';
    report['TIME_TO_FIRE_IDLE_CALLBACK'] = tango;
    tango = 'time_to_flush_all_work';
    report['TIME_TO_QUEUE_EMPTY'] = tango;
    tango = 'time_over_deadline';
    report['TIME_OVER_DEADLINE'] = tango;
    tango = 'initial_time_of_deadline';
    report['DEADLINE_INITIAL_TIME_REMAINING'] = tango;
    tango = {};
    offset = 'count_dispatches_left_after_yield';
    tango['COUNT_DISPATCHES_LEFT_AFTER_YIELD'] = offset;
    offset = 'count_flush_before_queue_empty';
    tango['COUNT_FLUSH_BEFORE_QUEUE_EMPTY'] = offset;
    offset = 'count_initial_dispatches_length';
    tango['COUNT_INITIAL_DISPATCHS_LENGTH'] = offset;
    romeo = golf.Object;
    yankee = romeo.freeze;
    offset = {};
    backup = report.TIME_TO_FIRE_IDLE_CALLBACK;
    kilo = null;
    offset[backup] = kilo;
    backup = report.TIME_TO_QUEUE_EMPTY;
    offset[backup] = kilo;
    backup = report.TIME_OVER_DEADLINE;
    offset[backup] = kilo;
    backup = report.DEADLINE_INITIAL_TIME_REMAINING;
    offset[backup] = kilo;
    offset = yankee.bind(romeo)(offset);
    var _closure1_slot5 = offset;
    romeo = golf.Object;
    yankee = romeo.freeze;
    offset = {};
    kilo = report.TIME_TO_FIRE_IDLE_CALLBACK;
    backup = [0, 0];
    offset[kilo] = backup;
    kilo = report.TIME_TO_QUEUE_EMPTY;
    backup = [0, 0];
    offset[kilo] = backup;
    kilo = report.TIME_OVER_DEADLINE;
    backup = [0, 0];
    offset[kilo] = backup;
    kilo = report.DEADLINE_INITIAL_TIME_REMAINING;
    backup = [0, 0];
    offset[kilo] = backup;
    offset = yankee.bind(romeo)(offset);
    var _closure1_slot6 = offset;
    romeo = golf.Object;
    yankee = romeo.freeze;
    offset = {};
    kilo = tango.COUNT_FLUSH_BEFORE_QUEUE_EMPTY;
    backup = [0, 0];
    offset[kilo] = backup;
    kilo = tango.COUNT_DISPATCHES_LEFT_AFTER_YIELD;
    backup = [0, 0];
    offset[kilo] = backup;
    kilo = tango.COUNT_INITIAL_DISPATCHS_LENGTH;
    backup = [0, 0];
    offset[kilo] = backup;
    offset = yankee.bind(romeo)(offset);
    var _closure1_slot7 = offset;
    yankee = golf.Object;
    offset = yankee.freeze;
    golf = {};
    romeo = oscar.LONGER_DISPATCH;
    golf[romeo] = foxtrot;
    romeo = oscar.EXCEEDED_MAX_CONSECUTIVE_FLUSHES;
    golf[romeo] = foxtrot;
    romeo = oscar.FIRED_DUE_TO_MAX_TIMEOUT;
    golf[romeo] = foxtrot;
    romeo = oscar.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED;
    golf[romeo] = foxtrot;
    golf = offset.bind(yankee)(golf);
    var _closure1_slot8 = golf;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: WorkSchedulerTelemetry
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 3;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot5;
            golf = options.bind(verify)(golf);
            zulu['_timeTracking'] = golf;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot6;
            golf = options.bind(verify)(golf);
            zulu['_timingStats'] = golf;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot7;
            golf = options.bind(verify)(golf);
            zulu['_measurements'] = golf;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.cloneDeep;
            mike = _closure1_slot8;
            mike = tango.bind(report)(mike);
            zulu['_eventCounts'] = mike;
            mike = false;
            zulu['_enabled'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 3;
            golf = oscar[tango];
            entity = undefined;
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot5;
            golf = options.bind(verify)(golf);
            zulu['_timeTracking'] = golf;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot6;
            golf = options.bind(verify)(golf);
            zulu['_timingStats'] = golf;
            golf = oscar[tango];
            verify = report.bind(entity)(golf);
            options = verify.cloneDeep;
            golf = _closure1_slot7;
            golf = options.bind(verify)(golf);
            zulu['_measurements'] = golf;
            tango = oscar[tango];
            report = report.bind(entity)(tango);
            tango = report.cloneDeep;
            mike = _closure1_slot8;
            mike = tango.bind(report)(mike);
            zulu['_eventCounts'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'clearTime';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._timeTracking;
            mike = null;
            entity = argFoo;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = '_storeTimeValue';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            zulu = this;
            oscar = _closure1_slot2;
            entity = zulu._timingStats;
            report = entity[tango];
            entity = undefined;
            mike = 2;
            report = oscar.bind(entity)(report, mike);
            mike = 0;
            mike = report[mike];
            oscar = 1;
            report = report[oscar];
            zulu = zulu._timingStats;
            golf = mike * report;
            mike = argBar;
            golf = golf + mike;
            mike = report + oscar;
            golf = golf / mike;
            mike = new Array(2);
            mike[0] = golf;
            report = report + oscar;
            mike[1] = report;
            zulu[tango] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'time';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun106048: for(var _fun106048_ip = 0; ; ) switch(_fun106048_ip) {
 0:
                entity = this;
                mike = entity._enabled;
                if(!mike) { _fun106048_ip = 42; continue _fun106048 }
 12:
                zulu = entity._timeTracking;
                entity = global;
                mike = entity.performance;
                entity = mike.now;
                mike = entity.bind(mike)();
                entity = argFoo;
                zulu[entity] = mike;
 42:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'timeEnd';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun106049: for(var _fun106049_ip = 0; ; ) switch(_fun106049_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity._enabled;
                if(!mike) { _fun106049_ip = 74; continue _fun106049 }
 15:
                mike = entity._timeTracking;
                report = mike[zulu];
                mike = null;
                if(!(mike != report)) { _fun106049_ip = 74; continue _fun106049 }
 31:
                tango = global;
                oscar = tango.performance;
                tango = oscar.now;
                tango = tango.bind(oscar)();
                report = tango - report;
                tango = entity._storeTimeValue;
                tango = tango.bind(entity)(zulu, report);
                entity = entity._timeTracking;
                entity[zulu] = mike;
 74:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'timeTrack';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun106050: for(var _fun106050_ip = 0; ; ) switch(_fun106050_ip) {
 0:
                tango = this;
                entity = tango._enabled;
                if(!entity) { _fun106050_ip = 30; continue _fun106050 }
 12:
                zulu = tango._storeTimeValue;
                mike = argFoo;
                entity = argBar;
                entity = zulu.bind(tango)(mike, entity);
 30:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'measure';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun106051: for(var _fun106051_ip = 0; ; ) switch(_fun106051_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike._enabled;
                if(!entity) { _fun106051_ip = 101; continue _fun106051 }
 15:
                oscar = _closure1_slot2;
                entity = mike._measurements;
                report = entity[zulu];
                tango = undefined;
                entity = 2;
                tango = oscar.bind(tango)(report, entity);
                entity = 0;
                entity = tango[entity];
                report = 1;
                tango = tango[report];
                mike = mike._measurements;
                oscar = entity * tango;
                entity = argBar;
                oscar = oscar + entity;
                entity = tango + report;
                oscar = oscar / entity;
                entity = new Array(2);
                entity[0] = oscar;
                tango = tango + report;
                entity[1] = tango;
                mike[zulu] = entity;
 101:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'track';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun106052: for(var _fun106052_ip = 0; ; ) switch(_fun106052_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity._enabled;
                if(!mike) { _fun106052_ip = 36; continue _fun106052 }
 15:
                mike = entity._eventCounts;
                tango = mike[zulu];
                entity = 1;
                entity = tango + entity;
                mike[zulu] = entity;
 36:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'toggleTelemetry';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['_enabled'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'isTelemetryEnabled';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._enabled;
            return entity;
        };
        entity['get'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'generateTelemetry';
        entity['key'] = oscar;
        report = function() { // Original name: value
            report = this;
            oscar = global;
            zulu = oscar.Object;
            mike = zulu.entries;
            entity = report._timingStats;
            golf = mike.bind(zulu)(entity);
            zulu = golf.reduce;
            mike = function(argFoo, argBar) {
                _fun106056: for(var _fun106056_ip = 0; ; ) switch(_fun106056_ip) {
 0:
                    tango = argFoo;
                    options = argBar;
                    mike = options[Symbol.iterator];
                    options = mike().next;
                    romeo = undefined;
                    zulu = undefined;
                    oscar = undefined;
                    verify = options().value;
                    offset = mike;
                    offset = offset === romeo;
                    zulu = offset;
                    if(offset) { _fun106056_ip = 35; continue _fun106056 }
 32:
                    oscar = verify;
 35:
                    report = oscar;
                    oscar = undefined;
                    verify = zulu;
                    if(verify) { _fun106056_ip = 66; continue _fun106056 }
 46:
                    options = options().value;
                    verify = mike;
                    verify = verify === romeo;
                    zulu = verify;
                    if(verify) { _fun106056_ip = 66; continue _fun106056 }
 63:
                    oscar = options;
 66: // try_start_0
                    options = oscar;
                    offset = options;
                    oscar = offset[Symbol.iterator];
                    offset = oscar().next;
                    options = undefined;
                    verify = undefined;
                    offset = offset().value;
                    yankee = oscar;
                    yankee = yankee === romeo;
                    options = yankee;
                    if(yankee) { _fun106056_ip = 99; continue _fun106056 }
 96:
                    verify = offset;
 99:
                    golf = verify;
                    if(options) { _fun106056_ip = 108; continue _fun106056 }
 105:
                    oscar.return();
 108: // try_end0
                    oscar = zulu;
                    if(oscar) { _fun106056_ip = 117; continue _fun106056 }
 114:
                    mike.return();
 117:
                    verify = report;
                    report = global;
                    oscar = report.HermesInternal;
                    options = oscar.concat;
                    oscar = 'avg_';
                    oscar = options.bind(oscar)(verify);
                    verify = golf;
                    options = verify.toFixed;
                    golf = 2;
                    verify = options.bind(verify)(golf);
                    report = report.HermesInternal;
                    options = report.concat;
                    golf = '';
                    report = 'ms';
                    report = options.bind(golf)(verify, report);
                    tango[oscar] = report;
                    return tango;
 192: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun106056_ip = 198; continue _fun106056;
 196:
                    CatchBlockStart(arg_register=0);
 198:
                    if(zulu) { _fun106056_ip = 204; continue _fun106056 }
 201:
                    mike.return();
 204:
                    throw entity;
                }
            };
            entity = {};
            zulu = zulu.bind(golf)(mike, entity);
            golf = oscar.Object;
            mike = golf.entries;
            entity = report._measurements;
            options = mike.bind(golf)(entity);
            golf = options.reduce;
            mike = function(argFoo, argBar) {
                _fun106057: for(var _fun106057_ip = 0; ; ) switch(_fun106057_ip) {
 0:
                    tango = argFoo;
                    options = argBar;
                    mike = options[Symbol.iterator];
                    options = mike().next;
                    romeo = undefined;
                    zulu = undefined;
                    oscar = undefined;
                    verify = options().value;
                    offset = mike;
                    offset = offset === romeo;
                    zulu = offset;
                    if(offset) { _fun106057_ip = 35; continue _fun106057 }
 32:
                    oscar = verify;
 35:
                    report = oscar;
                    oscar = undefined;
                    verify = zulu;
                    if(verify) { _fun106057_ip = 66; continue _fun106057 }
 46:
                    options = options().value;
                    verify = mike;
                    verify = verify === romeo;
                    zulu = verify;
                    if(verify) { _fun106057_ip = 66; continue _fun106057 }
 63:
                    oscar = options;
 66: // try_start_0
                    options = oscar;
                    offset = options;
                    oscar = offset[Symbol.iterator];
                    offset = oscar().next;
                    options = undefined;
                    verify = undefined;
                    offset = offset().value;
                    yankee = oscar;
                    yankee = yankee === romeo;
                    options = yankee;
                    if(yankee) { _fun106057_ip = 99; continue _fun106057 }
 96:
                    verify = offset;
 99:
                    golf = verify;
                    if(options) { _fun106057_ip = 108; continue _fun106057 }
 105:
                    oscar.return();
 108: // try_end0
                    oscar = zulu;
                    if(oscar) { _fun106057_ip = 117; continue _fun106057 }
 114:
                    mike.return();
 117:
                    verify = report;
                    report = global;
                    oscar = report.HermesInternal;
                    options = oscar.concat;
                    oscar = 'avg_';
                    oscar = options.bind(oscar)(verify);
                    verify = golf;
                    options = verify.toFixed;
                    golf = 2;
                    options = options.bind(verify)(golf);
                    report = report.HermesInternal;
                    golf = report.concat;
                    report = '';
                    report = golf.bind(report)(options);
                    tango[oscar] = report;
                    return tango;
 187: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun106057_ip = 193; continue _fun106057;
 191:
                    CatchBlockStart(arg_register=0);
 193:
                    if(zulu) { _fun106057_ip = 199; continue _fun106057 }
 196:
                    mike.return();
 199:
                    throw entity;
                }
            };
            entity = {};
            mike = golf.bind(options)(mike, entity);
            entity = {};
            golf = oscar.Object;
            oscar = golf.entries;
            report = report._eventCounts;
            golf = oscar.bind(golf)(report);
            oscar = golf.reduce;
            report = function(argFoo, argBar) {
                _fun106058: for(var _fun106058_ip = 0; ; ) switch(_fun106058_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    mike = tango[Symbol.iterator];
                    tango = mike().next;
                    report = tango().value;
                    zulu = mike;
                    options = undefined;
                    zulu = zulu === options;
                    oscar = undefined;
                    if(zulu) { _fun106058_ip = 30; continue _fun106058 }
 27:
                    oscar = report;
 30:
                    report = undefined;
                    if(zulu) { _fun106058_ip = 60; continue _fun106058 }
 35:
                    golf = tango().value;
                    tango = mike;
                    tango = tango === options;
                    report = undefined;
                    zulu = tango;
                    if(tango) { _fun106058_ip = 60; continue _fun106058 }
 54:
                    report = golf;
                    zulu = tango;
 60:
                    if(zulu) { _fun106058_ip = 66; continue _fun106058 }
 63:
                    mike.return();
 66:
                    mike = global;
                    zulu = mike.HermesInternal;
                    tango = zulu.concat;
                    zulu = 'count_';
                    zulu = tango.bind(zulu)(oscar);
                    mike = mike.HermesInternal;
                    tango = mike.concat;
                    mike = '';
                    mike = tango.bind(mike)(report);
                    entity[zulu] = mike;
                    return entity;
                }
            };
            tango = {};
            verify = oscar.bind(golf)(report, tango);
            offset = entity;
            tango = copyDataProperties(offset, verify);
            offset = entity;
            verify = zulu;
            zulu = copyDataProperties(offset, verify);
            offset = entity;
            verify = mike;
            mike = copyDataProperties(offset, verify);
            return entity;
        };
        entity['value'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    golf = 4;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/gateway/WorkSchedulerTelemetry.tsx';
    golf = options.bind(verify)(golf);
    zulu['WorkSchedulerTelemetryEvent'] = oscar;
    zulu['WorkSchedulerTelemetryTiming'] = report;
    zulu['WorkSchedulerTelemetryMeasurement'] = tango;
    zulu['WorkSchedulerTelemetry'] = mike;
    return entity;
})();