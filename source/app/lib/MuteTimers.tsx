// app/lib/MuteTimers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: MuteTimers
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = {};
            zuuluu['timers'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = global;
            tangon = entity.Object;
            zuuluu = tangon.values;
            entity = michal.timers;
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.forEach;
            entity = function(argFoo) {
                entity = global;
                zuuluu = entity.clearTimeout;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            entity = {};
            michal['timers'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'setTimer';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                entity = null;
                if(!(entity != report)) { _fun00002_ip = 176; continue _fun00001 }
 15:
                if(!(entity != zuuluu)) { _fun00002_ip = 172; continue _fun00001 }
 22:
                michal = zuuluu.end_time;
                michal = entity == michal;
                verify = null;
                if(michal) { _fun00002_ip = 100; continue _fun00001 }
 37:
                michal = global;
                oscard = michal.Date;
                yankee = zuuluu.end_time;
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                romeon = tangon;
                zuuluu = new romeon[oscard](yankee, offset);
                tangon = zuuluu instanceof Object ? zuuluu : tangon;
                zuuluu = tangon.getTime;
                zuuluu = zuuluu.bind(tangon)();
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                verify = zuuluu - michal;
 100:
                entity = entity != verify;
                if(!entity) { _fun00002_ip = 170; continue _fun00001 }
 107:
                golfie = 0;
                michal = verify <= golfie;
                if(michal) { _fun00002_ip = 167; continue _fun00001 }
 116:
                zuuluu = this;
                tangon = zuuluu.timers;
                zuuluu = global;
                option = zuuluu.setTimeout;
                oscard = zuuluu.Math;
                zuuluu = oscard.max;
                golfie = zuuluu.bind(oscard)(golfie, verify);
                oscard = undefined;
                zuuluu = argBaz;
                zuuluu = option.bind(oscard)(zuuluu, golfie);
                tangon[report] = zuuluu;
                michal = false;
 167:
                entity = michal;
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
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'clearTimer';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                entity = this;
                zuuluu = null;
                zuuluu = zuuluu != michal;
                if(!zuuluu) { _fun00004_ip = 25; continue _fun00003 }
 15:
                tangon = entity.timers;
                zuuluu = michal in tangon;
 25:
                if(!zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 28:
                zuuluu = global;
                report = zuuluu.clearTimeout;
                zuuluu = entity.timers;
                tangon = zuuluu[michal];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                entity = entity.timers;
                entity = delete entity[michal];
 63:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'lib/MuteTimers.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: computeIsMuted
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = michal.muted;
            tangon = michal.mute_config;
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00006_ip = 113; continue _fun00005 }
 24:
            report = null;
            michal = report == tangon;
            if(michal) { _fun00006_ip = 43; continue _fun00005 }
 33:
            zuuluu = tangon.end_time;
            michal = report == zuuluu;
 43:
            if(michal) { _fun00006_ip = 110; continue _fun00005 }
 46:
            zuuluu = global;
            oscard = zuuluu.Date;
            golfie = tangon.end_time;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            option = report;
            tangon = new option[oscard](golfie, oscard);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal = tangon >= zuuluu;
 110:
            entity = michal;
 113:
            return entity;
        }
    };
    zuuluu['computeIsMuted'] = tangon;
    michal = function(argFoo) { // Original name: isTemporarilyMuted
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.muted;
            zuuluu = michal.mute_config;
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00008_ip = 30; continue _fun00007 }
 24:
            michal = null;
            entity = michal != zuuluu;
 30:
            if(!entity) { _fun00008_ip = 45; continue _fun00007 }
 33:
            tangon = zuuluu.end_time;
            michal = null;
            entity = michal != tangon;
 45:
            if(!entity) { _fun00008_ip = 112; continue _fun00007 }
 48:
            michal = global;
            report = michal.Date;
            oscard = zuuluu.end_time;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            zuuluu = new golfie[report](oscard, report);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            golfie = tangon;
            michal = new golfie[michal](oscard);
            michal = michal instanceof Object ? michal : tangon;
            entity = zuuluu >= michal;
 112:
            return entity;
        }
    };
    zuuluu['isTemporarilyMuted'] = michal;
    return entity;
})();