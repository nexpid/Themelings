// app/lib/MuteTimers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = function() {
        tango = _closure1_slot1;
        zulu = function() { // Original name: MuteTimers
            zulu = this;
            tango = _closure1_slot0;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['timers'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = global;
            tango = entity.Object;
            zulu = tango.values;
            entity = mike.timers;
            tango = zulu.bind(tango)(entity);
            zulu = tango.forEach;
            entity = function(argFoo) {
                entity = global;
                zulu = entity.clearTimeout;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            entity = {};
            mike['timers'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'setTimer';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun44200: for(var _fun44200_ip = 0; ; ) switch(_fun44200_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                entity = null;
                if(!(entity != report)) { _fun44200_ip = 176; continue _fun44200 }
 15:
                if(!(entity != zulu)) { _fun44200_ip = 172; continue _fun44200 }
 22:
                mike = zulu.end_time;
                mike = entity == mike;
                verify = null;
                if(mike) { _fun44200_ip = 100; continue _fun44200 }
 37:
                mike = global;
                oscar = mike.Date;
                yankee = zulu.end_time;
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                romeo = tango;
                zulu = new romeo[oscar](yankee, offset);
                tango = zulu instanceof Object ? zulu : tango;
                zulu = tango.getTime;
                zulu = zulu.bind(tango)();
                tango = mike.Date;
                mike = tango.now;
                mike = mike.bind(tango)();
                verify = zulu - mike;
 100:
                entity = entity != verify;
                if(!entity) { _fun44200_ip = 170; continue _fun44200 }
 107:
                golf = 0;
                mike = verify <= golf;
                if(mike) { _fun44200_ip = 167; continue _fun44200 }
 116:
                zulu = this;
                tango = zulu.timers;
                zulu = global;
                options = zulu.setTimeout;
                oscar = zulu.Math;
                zulu = oscar.max;
                golf = zulu.bind(oscar)(golf, verify);
                oscar = undefined;
                zulu = argBaz;
                zulu = options.bind(oscar)(zulu, golf);
                tango[report] = zulu;
                mike = false;
 167:
                entity = mike;
 170:
                return entity;
 172:
                entity = false;
                return entity;
 176:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'clearTimer';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun44201: for(var _fun44201_ip = 0; ; ) switch(_fun44201_ip) {
 0:
                mike = argFoo;
                entity = this;
                zulu = null;
                zulu = zulu != mike;
                if(!zulu) { _fun44201_ip = 25; continue _fun44201 }
 15:
                tango = entity.timers;
                zulu = mike in tango;
 25:
                if(!zulu) { _fun44201_ip = 63; continue _fun44201 }
 28:
                zulu = global;
                report = zulu.clearTimeout;
                zulu = entity.timers;
                tango = zulu[mike];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                entity = entity.timers;
                entity = delete entity[mike];
 63:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = 2;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'lib/MuteTimers.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: computeIsMuted
        _fun44202: for(var _fun44202_ip = 0; ; ) switch(_fun44202_ip) {
 0:
            mike = argFoo;
            entity = mike.muted;
            tango = mike.mute_config;
            mike = !entity;
            entity = !mike;
            if(mike) { _fun44202_ip = 113; continue _fun44202 }
 24:
            report = null;
            mike = report == tango;
            if(mike) { _fun44202_ip = 43; continue _fun44202 }
 33:
            zulu = tango.end_time;
            mike = report == zulu;
 43:
            if(mike) { _fun44202_ip = 110; continue _fun44202 }
 46:
            zulu = global;
            oscar = zulu.Date;
            golf = tango.end_time;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            options = report;
            tango = new options[oscar](golf, oscar);
            tango = tango instanceof Object ? tango : report;
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : report;
            mike = tango >= zulu;
 110:
            entity = mike;
 113:
            return entity;
        }
    };
    zulu['computeIsMuted'] = tango;
    mike = function(argFoo) { // Original name: isTemporarilyMuted
        _fun44203: for(var _fun44203_ip = 0; ; ) switch(_fun44203_ip) {
 0:
            mike = argFoo;
            entity = mike.muted;
            zulu = mike.mute_config;
            mike = !entity;
            entity = !mike;
            if(mike) { _fun44203_ip = 30; continue _fun44203 }
 24:
            mike = null;
            entity = mike != zulu;
 30:
            if(!entity) { _fun44203_ip = 45; continue _fun44203 }
 33:
            tango = zulu.end_time;
            mike = null;
            entity = mike != tango;
 45:
            if(!entity) { _fun44203_ip = 112; continue _fun44203 }
 48:
            mike = global;
            report = mike.Date;
            oscar = zulu.end_time;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            zulu = new golf[report](oscar, report);
            zulu = zulu instanceof Object ? zulu : tango;
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            entity = zulu >= mike;
 112:
            return entity;
        }
    };
    zulu['isTemporarilyMuted'] = mike;
    return entity;
})();