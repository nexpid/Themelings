// app/lib/VideoHealthManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = tangon.VideoToggleState;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz, argCor) { // Original name: VideoHealthManager
            golfie = argFoo;
            romeon = argCor;
            report = this;
            tangon = _closure1_slot3;
            zuuluu = _closure2_slot0;
            entity = undefined;
            zuuluu = tangon.bind(entity)(report, zuuluu);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Logger;
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            echoed = 'VideoHealthManager';
            update = zuuluu;
            michal = new update[tangon](echoed, result);
            michal = michal instanceof Object ? michal : zuuluu;
            report['logger'] = michal;
            michal = false;
            report['disabled'] = michal;
            michal = {};
            report['perUserFpsWindow'] = michal;
            michal = {};
            report['prevFramesCodec'] = michal;
            michal = {};
            report['prevTimestamp'] = michal;
            michal = global;
            zuuluu = michal.Set;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            update = tangon;
            zuuluu = new update[zuuluu](echoed);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            report['streamDisabledUsers'] = zuuluu;
            zuuluu = {};
            report['retryBackoffCache'] = zuuluu;
            zuuluu = {};
            report['timeoutIdCache'] = zuuluu;
            zuuluu = {};
            report['currentVideoAutoToggleState'] = zuuluu;
            zuuluu = new Array(0);
            report['enableQueue'] = zuuluu;
            report['windowLength'] = golfie;
            zuuluu = argBaz;
            report['fpsThreshold'] = zuuluu;
            oscard = michal.Math;
            tangon = oscard.ceil;
            zuuluu = argBar;
            zuuluu = golfie * zuuluu;
            zuuluu = tangon.bind(oscard)(zuuluu);
            report['fpsWindowBorderlineCount'] = zuuluu;
            report['backoffTimeSec'] = romeon;
            tangon = report.logger;
            zuuluu = tangon.info;
            echoed = report.windowLength;
            output = report.fpsWindowBorderlineCount;
            kiloes = report.fpsThreshold;
            michal = michal.HermesInternal;
            option = michal.concat;
            update = 'constructor with windowLength = ';
            result = ',\n      fpsWindowBorderlineCount = ';
            sizing = ',\n      fpsThreshold = ';
            backup = ',\n      backoffTimeSec = ';
            foxtra = romeon;
            michal = update[option](echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'calculateFps';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                report = argBar;
                tangon = argBaz;
                entity = this;
                michal = entity.prevFramesCodec;
                oscard = michal[zuuluu];
                michal = -1;
                if(!(michal !== oscard)) { _fun00002_ip = 199; continue _fun00001 }
 35:
                michal = entity.prevFramesCodec;
                michal = michal[zuuluu];
                if(!(!(report < michal))) { _fun00002_ip = 199; continue _fun00001 }
 52:
                michal = entity.prevTimestamp;
                michal = michal[zuuluu];
                if(!(!(tangon < michal))) { _fun00002_ip = 199; continue _fun00001 }
 69:
                michal = entity.prevTimestamp;
                oscard = michal[zuuluu];
                golfie = entity.windowLength;
                michal = 1000;
                michal = michal * golfie;
                michal = oscard + michal;
                if(!(!(tangon > michal))) { _fun00002_ip = 199; continue _fun00001 }
 103:
                michal = entity.prevTimestamp;
                oscard = michal[zuuluu];
                michal = 900;
                michal = oscard + michal;
                if(!(!(tangon < michal))) { _fun00002_ip = 189; continue _fun00001 }
 127:
                oscard = entity.elapsedSeconds;
                michal = entity.prevTimestamp;
                michal = michal[zuuluu];
                oscard = oscard.bind(entity)(tangon, michal);
                michal = entity.prevTimestamp;
                michal[zuuluu] = tangon;
                michal = entity.prevFramesCodec;
                michal = michal[zuuluu];
                michal = report - michal;
                michal = michal / oscard;
                oscard = entity.prevFramesCodec;
                oscard[zuuluu] = report;
                return michal;
 189:
                michal = global;
                michal = michal.NaN;
                return michal;
 199:
                michal = entity.prevFramesCodec;
                michal[zuuluu] = report;
                michal = entity.prevTimestamp;
                michal[zuuluu] = tangon;
                michal = entity.perUserFpsWindow;
                entity = new Array(0);
                michal[zuuluu] = entity;
                entity = global;
                entity = entity.NaN;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(12);
        michal[0] = entity;
        entity = {};
        oscard = 'updateFps';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                entity = michal.disabled;
                if(entity) { _fun00004_ip = 530; continue _fun00003 }
 23:
                report = michal.streamDisabledUsers;
                entity = report.has;
                entity = entity.bind(report)(zuuluu);
                if(entity) { _fun00004_ip = 530; continue _fun00003 }
 45:
                oscard = michal.calculateFps;
                report = argBar;
                entity = argBaz;
                golfie = oscard.bind(michal)(zuuluu, report, entity);
                entity = 0;
                if(!(!(golfie < entity))) { _fun00004_ip = 526; continue _fun00003 }
 75:
                entity = global;
                oscard = entity.Number;
                report = oscard.isFinite;
                report = report.bind(oscard)(golfie);
                if(!report) { _fun00004_ip = 526; continue _fun00003 }
 100:
                report = michal.perUserFpsWindow;
                oscard = report[zuuluu];
                report = oscard.push;
                report = report.bind(oscard)(golfie);
                report = michal.perUserFpsWindow;
                report = report[zuuluu];
                oscard = report.length;
                report = michal.windowLength;
                if(!(!(oscard < report))) { _fun00004_ip = 522; continue _fun00003 }
 148:
                report = michal.perUserFpsWindow;
                report = report[zuuluu];
                oscard = report.length;
                report = michal.windowLength;
                if(!(oscard > report)) { _fun00004_ip = 193; continue _fun00003 }
 173:
                report = michal.perUserFpsWindow;
                oscard = report[zuuluu];
                report = oscard.shift;
                report = report.bind(oscard)();
 193:
                report = michal.perUserFpsWindow;
                oscard = report[zuuluu];
                report = oscard.filter;
                tangon = function(argFoo) {
                    entity = _closure3_slot0;
                    michal = entity.fpsThreshold;
                    entity = argFoo;
                    entity = entity < michal;
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                report = tangon.length;
                tangon = michal.fpsWindowBorderlineCount;
                if(!(!(report >= tangon))) { _fun00004_ip = 363; continue _fun00003 }
 236:
                tangon = michal.currentVideoAutoToggleState;
                oscard = tangon[zuuluu];
                tangon = _closure1_slot5;
                tangon = tangon.AUTO_PROBING;
                if(!(oscard === tangon)) { _fun00004_ip = 492; continue _fun00003 }
 266:
                golfie = michal.currentVideoAutoToggleState;
                tangon = _closure1_slot5;
                oscard = tangon.AUTO_ENABLED;
                golfie[zuuluu] = oscard;
                option = michal.logger;
                golfie = option.info;
                oscard = entity.HermesInternal;
                verify = oscard.concat;
                oscard = 'acceptable conditions reached, will reset and send a AUTO_ENABLED for user ';
                oscard = verify.bind(oscard)(zuuluu);
                oscard = golfie.bind(option)(oscard);
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                report = 4;
                report = oscard[report];
                oscard = undefined;
                report = golfie.bind(oscard)(report);
                tangon = tangon.AUTO_ENABLED;
                tangon = report.bind(oscard)(zuuluu, tangon);
                _fun00004_ip = 492; continue _fun00003;
 363:
                report = michal.logger;
                tangon = report.info;
                entity = entity.HermesInternal;
                golfie = entity.concat;
                oscard = '';
                entity = ': detected poor network quality, turning off video';
                entity = golfie.bind(oscard)(zuuluu, entity);
                entity = tangon.bind(report)(entity);
                tangon = michal.streamDisabledUsers;
                entity = tangon.add;
                entity = entity.bind(tangon)(zuuluu);
                oscard = michal.currentVideoAutoToggleState;
                entity = _closure1_slot5;
                report = entity.DISABLED;
                oscard[zuuluu] = report;
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 4;
                tangon = report[tangon];
                report = undefined;
                tangon = oscard.bind(report)(tangon);
                entity = entity.DISABLED;
                entity = tangon.bind(report)(zuuluu, entity);
                entity = michal.startReenableBackoffTimer;
                entity = entity.bind(michal)(zuuluu);
 492:
                entity = michal.probingUserId;
                if(!(entity === zuuluu)) { _fun00004_ip = 530; continue _fun00003 }
 502:
                entity = undefined;
                michal['probingUserId'] = entity;
                entity = michal.tryReenableQueue;
                entity = entity.bind(michal)();
                _fun00004_ip = 530; continue _fun00003;
 522:
                entity = undefined;
                return entity;
 526:
                entity = undefined;
                return entity;
 530:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'startReenableBackoffTimer';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = zuuluu;
                tangon = michal.disabled;
                if(tangon) { _fun00006_ip = 353; continue _fun00005 }
 27:
                golfie = michal.logger;
                oscard = golfie.info;
                tangon = global;
                report = tangon.HermesInternal;
                option = report.concat;
                report = 'startReenableBackoffTimer for user ';
                report = option.bind(report)(zuuluu);
                report = oscard.bind(golfie)(report);
                report = michal.retryBackoffCache;
                report = report[zuuluu];
                offset = report.lastBackoffTime;
                oscard = report.expBackoffFactor;
                golfie = 1;
                report = null;
                option = golfie;
                if(!(report !== offset)) { _fun00006_ip = 183; continue _fun00005 }
 101:
                report = 16;
                report = oscard > report;
                option = golfie;
                if(report) { _fun00006_ip = 183; continue _fun00005 }
 114:
                verify = michal.elapsedSeconds;
                romeon = _closure1_slot0;
                yankee = _closure1_slot2;
                report = 5;
                yankee = yankee[report];
                report = undefined;
                yankee = romeon.bind(report)(yankee);
                report = yankee.now;
                report = report.bind(yankee)();
                verify = verify.bind(michal)(report, offset);
                report = 600;
                report = verify > report;
                option = golfie;
                if(report) { _fun00006_ip = 183; continue _fun00005 }
 176:
                report = 2;
                option = oscard * report;
 183:
                offset = michal.retryBackoffCache;
                golfie = {};
                romeon = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 5;
                yankee = verify[oscard];
                oscard = undefined;
                romeon = romeon.bind(oscard)(yankee);
                yankee = romeon.now;
                yankee = yankee.bind(romeon)();
                golfie['lastBackoffTime'] = yankee;
                golfie['expBackoffFactor'] = option;
                offset[zuuluu] = golfie;
                golfie = michal.backoffTimeSec;
                golfie = option * golfie;
                option = _closure1_slot1;
                report = 6;
                report = verify[report];
                report = option.bind(oscard)(report);
                report = report.Millis;
                report = report.SECOND;
                report = golfie * report;
                verify = michal.logger;
                option = verify.info;
                golfie = tangon.HermesInternal;
                yankee = golfie.concat;
                offset = 'starting backoff timer with time = ';
                golfie = ' milliseconds';
                golfie = yankee.bind(offset)(report, golfie);
                golfie = option.bind(verify)(golfie);
                michal = michal.timeoutIdCache;
                tangon = tangon.setTimeout;
                entity = function() {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.queueReenable;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = tangon.bind(oscard)(entity, report);
                michal[zuuluu] = entity;
 353:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'queueReenable';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            tangon = michal.enableQueue;
            zuuluu = tangon.push;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            entity = michal.tryReenableQueue;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'tryReenableQueue';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                entity = tangon.disabled;
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 11:
                entity = tangon.probingUserId;
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00008_ip = 42; continue _fun00007 }
 23:
                michal = tangon.probingUserId;
                entity = tangon.perUserFpsWindow;
                entity = michal in entity;
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 42:
                michal = tangon.enableQueue;
                entity = michal.shift;
                michal = entity.bind(michal)();
                if(!(zuuluu != michal)) { _fun00008_ip = 94; continue _fun00007 }
 62:
                entity = tangon.reenableVideo;
                entity = entity.bind(tangon)(michal);
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 76:
                if(!(zuuluu != michal)) { _fun00008_ip = 94; continue _fun00007 }
 80:
                entity = tangon.reenableVideo;
                entity = entity.bind(tangon)(michal);
                if(!entity) { _fun00008_ip = 76; continue _fun00007 }
 94:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'reenableVideo';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                oscard = this;
                entity = oscard.perUserFpsWindow;
                entity = report in entity;
                if(!entity) { _fun00010_ip = 173; continue _fun00009 }
 22:
                verify = oscard.logger;
                option = verify.info;
                offset = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 5;
                michal = golfie[michal];
                tangon = undefined;
                offset = offset.bind(tangon)(michal);
                michal = offset.now;
                romeon = michal.bind(offset)();
                michal = global;
                michal = michal.HermesInternal;
                yankee = michal.concat;
                offset = 'reenableVideo called for user ';
                michal = ' - time = ';
                michal = yankee.bind(offset)(report, michal, romeon);
                michal = option.bind(verify)(michal);
                michal = oscard.stateCleanupBeforeEnable;
                michal = michal.bind(oscard)(report);
                verify = oscard.currentVideoAutoToggleState;
                michal = _closure1_slot5;
                option = michal.AUTO_PROBING;
                verify[report] = option;
                oscard['probingUserId'] = report;
                oscard = _closure1_slot1;
                zuuluu = 4;
                zuuluu = golfie[zuuluu];
                zuuluu = oscard.bind(tangon)(zuuluu);
                michal = michal.AUTO_PROBING;
                michal = zuuluu.bind(tangon)(report, michal);
                entity = true;
 173:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'elapsedSeconds';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = argFoo;
            entity = argBar;
            michal = michal - entity;
            entity = 1000;
            entity = michal / entity;
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'stateCleanupBeforeEnable';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            entity = this;
            report = entity.logger;
            tangon = report.info;
            michal = 'VideoHealthManager::stateCleanupBeforeEnable';
            michal = tangon.bind(report)(michal);
            tangon = entity.perUserFpsWindow;
            michal = new Array(0);
            tangon[zuuluu] = michal;
            tangon = entity.prevFramesCodec;
            michal = -1;
            tangon[zuuluu] = michal;
            michal = entity.streamDisabledUsers;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'getCurrentVideoToggleState';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.currentVideoAutoToggleState;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'createUser';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                report = entity.logger;
                tangon = report.info;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                michal = 'VideoHealthManager::createUser ';
                michal = oscard.bind(michal)(zuuluu);
                michal = tangon.bind(report)(michal);
                michal = entity.perUserFpsWindow;
                michal = zuuluu in michal;
                if(michal) { _fun00012_ip = 132; continue _fun00011 }
 59:
                tangon = entity.perUserFpsWindow;
                michal = new Array(0);
                tangon[zuuluu] = michal;
                tangon = entity.prevFramesCodec;
                michal = -1;
                tangon[zuuluu] = michal;
                tangon = entity.currentVideoAutoToggleState;
                michal = _closure1_slot5;
                michal = michal.NONE;
                tangon[zuuluu] = michal;
                michal = entity.retryBackoffCache;
                entity = {'lastBackoffTime': null, 'expBackoffFactor': 1};
                michal[zuuluu] = entity;
 132:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'deleteUser';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                oscard = michal.logger;
                report = oscard.info;
                entity = global;
                tangon = entity.HermesInternal;
                golfie = tangon.concat;
                tangon = 'VideoHealthManager::deleteUser ';
                tangon = golfie.bind(tangon)(zuuluu);
                tangon = report.bind(oscard)(tangon);
                tangon = michal.perUserFpsWindow;
                tangon = delete tangon[zuuluu];
                tangon = michal.prevFramesCodec;
                tangon = delete tangon[zuuluu];
                tangon = michal.retryBackoffCache;
                tangon = delete tangon[zuuluu];
                tangon = michal.currentVideoAutoToggleState;
                tangon = delete tangon[zuuluu];
                report = michal.streamDisabledUsers;
                tangon = report.delete;
                tangon = tangon.bind(report)(zuuluu);
                tangon = michal.probingUserId;
                if(!(zuuluu === tangon)) { _fun00014_ip = 130; continue _fun00013 }
 112:
                tangon = undefined;
                michal['probingUserId'] = tangon;
                tangon = michal.tryReenableQueue;
                tangon = tangon.bind(michal)();
 130:
                report = entity.clearTimeout;
                entity = michal.timeoutIdCache;
                tangon = entity[zuuluu];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                michal = michal.timeoutIdCache;
                michal = delete michal[zuuluu];
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'disable';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = this;
                entity = true;
                oscard['disabled'] = entity;
                tangon = oscard.perUserFpsWindow;
                for(entity in tangon)
 25:
                {
 34:
                    option = entity;
                    golfie = oscard.deleteUser;
                    golfie = golfie.bind(oscard)(option);
                    _fun00016_ip = 25; continue _fun00015;
                }
 50:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        michal[11] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/VideoHealthManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['VideoHealthManager'] = michal;
    return entity;
})();