// app/lib/VideoHealthManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    tango = tango.VideoToggleState;
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar, argBaz, argCorge) { // Original name: VideoHealthManager
            golf = argFoo;
            romeo = argCorge;
            report = this;
            tango = _closure1_slot3;
            zulu = _closure2_slot0;
            entity = undefined;
            zulu = tango.bind(entity)(report, zulu);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            tango = mike.Logger;
            mike = tango.prototype;
            zulu = Object.create(mike, {constructor: {value: tango}});
            echo = 'VideoHealthManager';
            update = zulu;
            mike = new update[tango](echo, result);
            mike = mike instanceof Object ? mike : zulu;
            report['logger'] = mike;
            mike = false;
            report['disabled'] = mike;
            mike = {};
            report['perUserFpsWindow'] = mike;
            mike = {};
            report['prevFramesCodec'] = mike;
            mike = {};
            report['prevTimestamp'] = mike;
            mike = global;
            zulu = mike.Set;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            update = tango;
            zulu = new update[zulu](echo);
            zulu = zulu instanceof Object ? zulu : tango;
            report['streamDisabledUsers'] = zulu;
            zulu = {};
            report['retryBackoffCache'] = zulu;
            zulu = {};
            report['timeoutIdCache'] = zulu;
            zulu = {};
            report['currentVideoAutoToggleState'] = zulu;
            zulu = new Array(0);
            report['enableQueue'] = zulu;
            report['windowLength'] = golf;
            zulu = argBaz;
            report['fpsThreshold'] = zulu;
            oscar = mike.Math;
            tango = oscar.ceil;
            zulu = argBar;
            zulu = golf * zulu;
            zulu = tango.bind(oscar)(zulu);
            report['fpsWindowBorderlineCount'] = zulu;
            report['backoffTimeSec'] = romeo;
            tango = report.logger;
            zulu = tango.info;
            echo = report.windowLength;
            output = report.fpsWindowBorderlineCount;
            kilo = report.fpsThreshold;
            mike = mike.HermesInternal;
            options = mike.concat;
            update = 'constructor with windowLength = ';
            result = ',\n      fpsWindowBorderlineCount = ';
            sizing = ',\n      fpsThreshold = ';
            backup = ',\n      backoffTimeSec = ';
            foxtrot = romeo;
            mike = update[options](echo, result, output, sizing, kilo, backup, foxtrot, romeo);
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'calculateFps';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = argFoo;
                report = argBar;
                tango = argBaz;
                entity = this;
                mike = entity.prevFramesCodec;
                oscar = mike[zulu];
                mike = -1;
                if(!(mike !== oscar)) { _fun00002_ip = 199; continue _fun00001 }
 35:
                mike = entity.prevFramesCodec;
                mike = mike[zulu];
                if(!(!(report < mike))) { _fun00002_ip = 199; continue _fun00001 }
 52:
                mike = entity.prevTimestamp;
                mike = mike[zulu];
                if(!(!(tango < mike))) { _fun00002_ip = 199; continue _fun00001 }
 69:
                mike = entity.prevTimestamp;
                oscar = mike[zulu];
                golf = entity.windowLength;
                mike = 1000;
                mike = mike * golf;
                mike = oscar + mike;
                if(!(!(tango > mike))) { _fun00002_ip = 199; continue _fun00001 }
 103:
                mike = entity.prevTimestamp;
                oscar = mike[zulu];
                mike = 900;
                mike = oscar + mike;
                if(!(!(tango < mike))) { _fun00002_ip = 189; continue _fun00001 }
 127:
                oscar = entity.elapsedSeconds;
                mike = entity.prevTimestamp;
                mike = mike[zulu];
                oscar = oscar.bind(entity)(tango, mike);
                mike = entity.prevTimestamp;
                mike[zulu] = tango;
                mike = entity.prevFramesCodec;
                mike = mike[zulu];
                mike = report - mike;
                mike = mike / oscar;
                oscar = entity.prevFramesCodec;
                oscar[zulu] = report;
                return mike;
 189:
                mike = global;
                mike = mike.NaN;
                return mike;
 199:
                mike = entity.prevFramesCodec;
                mike[zulu] = report;
                mike = entity.prevTimestamp;
                mike[zulu] = tango;
                mike = entity.perUserFpsWindow;
                entity = new Array(0);
                mike[zulu] = entity;
                entity = global;
                entity = entity.NaN;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(12);
        mike[0] = entity;
        entity = {};
        oscar = 'updateFps';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                entity = mike.disabled;
                if(entity) { _fun00004_ip = 530; continue _fun00003 }
 23:
                report = mike.streamDisabledUsers;
                entity = report.has;
                entity = entity.bind(report)(zulu);
                if(entity) { _fun00004_ip = 530; continue _fun00003 }
 45:
                oscar = mike.calculateFps;
                report = argBar;
                entity = argBaz;
                golf = oscar.bind(mike)(zulu, report, entity);
                entity = 0;
                if(!(!(golf < entity))) { _fun00004_ip = 526; continue _fun00003 }
 75:
                entity = global;
                oscar = entity.Number;
                report = oscar.isFinite;
                report = report.bind(oscar)(golf);
                if(!report) { _fun00004_ip = 526; continue _fun00003 }
 100:
                report = mike.perUserFpsWindow;
                oscar = report[zulu];
                report = oscar.push;
                report = report.bind(oscar)(golf);
                report = mike.perUserFpsWindow;
                report = report[zulu];
                oscar = report.length;
                report = mike.windowLength;
                if(!(!(oscar < report))) { _fun00004_ip = 522; continue _fun00003 }
 148:
                report = mike.perUserFpsWindow;
                report = report[zulu];
                oscar = report.length;
                report = mike.windowLength;
                if(!(oscar > report)) { _fun00004_ip = 193; continue _fun00003 }
 173:
                report = mike.perUserFpsWindow;
                oscar = report[zulu];
                report = oscar.shift;
                report = report.bind(oscar)();
 193:
                report = mike.perUserFpsWindow;
                oscar = report[zulu];
                report = oscar.filter;
                tango = function(argFoo) {
                    entity = _closure3_slot0;
                    mike = entity.fpsThreshold;
                    entity = argFoo;
                    entity = entity < mike;
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                report = tango.length;
                tango = mike.fpsWindowBorderlineCount;
                if(!(!(report >= tango))) { _fun00004_ip = 363; continue _fun00003 }
 236:
                tango = mike.currentVideoAutoToggleState;
                oscar = tango[zulu];
                tango = _closure1_slot5;
                tango = tango.AUTO_PROBING;
                if(!(oscar === tango)) { _fun00004_ip = 492; continue _fun00003 }
 266:
                golf = mike.currentVideoAutoToggleState;
                tango = _closure1_slot5;
                oscar = tango.AUTO_ENABLED;
                golf[zulu] = oscar;
                options = mike.logger;
                golf = options.info;
                oscar = entity.HermesInternal;
                verify = oscar.concat;
                oscar = 'acceptable conditions reached, will reset and send a AUTO_ENABLED for user ';
                oscar = verify.bind(oscar)(zulu);
                oscar = golf.bind(options)(oscar);
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                report = 4;
                report = oscar[report];
                oscar = undefined;
                report = golf.bind(oscar)(report);
                tango = tango.AUTO_ENABLED;
                tango = report.bind(oscar)(zulu, tango);
                _fun00004_ip = 492; continue _fun00003;
 363:
                report = mike.logger;
                tango = report.info;
                entity = entity.HermesInternal;
                golf = entity.concat;
                oscar = '';
                entity = ': detected poor network quality, turning off video';
                entity = golf.bind(oscar)(zulu, entity);
                entity = tango.bind(report)(entity);
                tango = mike.streamDisabledUsers;
                entity = tango.add;
                entity = entity.bind(tango)(zulu);
                oscar = mike.currentVideoAutoToggleState;
                entity = _closure1_slot5;
                report = entity.DISABLED;
                oscar[zulu] = report;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                tango = 4;
                tango = report[tango];
                report = undefined;
                tango = oscar.bind(report)(tango);
                entity = entity.DISABLED;
                entity = tango.bind(report)(zulu, entity);
                entity = mike.startReenableBackoffTimer;
                entity = entity.bind(mike)(zulu);
 492:
                entity = mike.probingUserId;
                if(!(entity === zulu)) { _fun00004_ip = 530; continue _fun00003 }
 502:
                entity = undefined;
                mike['probingUserId'] = entity;
                entity = mike.tryReenableQueue;
                entity = entity.bind(mike)();
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
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'startReenableBackoffTimer';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = zulu;
                tango = mike.disabled;
                if(tango) { _fun00006_ip = 353; continue _fun00005 }
 27:
                golf = mike.logger;
                oscar = golf.info;
                tango = global;
                report = tango.HermesInternal;
                options = report.concat;
                report = 'startReenableBackoffTimer for user ';
                report = options.bind(report)(zulu);
                report = oscar.bind(golf)(report);
                report = mike.retryBackoffCache;
                report = report[zulu];
                offset = report.lastBackoffTime;
                oscar = report.expBackoffFactor;
                golf = 1;
                report = null;
                options = golf;
                if(!(report !== offset)) { _fun00006_ip = 183; continue _fun00005 }
 101:
                report = 16;
                report = oscar > report;
                options = golf;
                if(report) { _fun00006_ip = 183; continue _fun00005 }
 114:
                verify = mike.elapsedSeconds;
                romeo = _closure1_slot0;
                yankee = _closure1_slot2;
                report = 5;
                yankee = yankee[report];
                report = undefined;
                yankee = romeo.bind(report)(yankee);
                report = yankee.now;
                report = report.bind(yankee)();
                verify = verify.bind(mike)(report, offset);
                report = 600;
                report = verify > report;
                options = golf;
                if(report) { _fun00006_ip = 183; continue _fun00005 }
 176:
                report = 2;
                options = oscar * report;
 183:
                offset = mike.retryBackoffCache;
                golf = {};
                romeo = _closure1_slot0;
                verify = _closure1_slot2;
                oscar = 5;
                yankee = verify[oscar];
                oscar = undefined;
                romeo = romeo.bind(oscar)(yankee);
                yankee = romeo.now;
                yankee = yankee.bind(romeo)();
                golf['lastBackoffTime'] = yankee;
                golf['expBackoffFactor'] = options;
                offset[zulu] = golf;
                golf = mike.backoffTimeSec;
                golf = options * golf;
                options = _closure1_slot1;
                report = 6;
                report = verify[report];
                report = options.bind(oscar)(report);
                report = report.Millis;
                report = report.SECOND;
                report = golf * report;
                verify = mike.logger;
                options = verify.info;
                golf = tango.HermesInternal;
                yankee = golf.concat;
                offset = 'starting backoff timer with time = ';
                golf = ' milliseconds';
                golf = yankee.bind(offset)(report, golf);
                golf = options.bind(verify)(golf);
                mike = mike.timeoutIdCache;
                tango = tango.setTimeout;
                entity = function() {
                    zulu = _closure3_slot0;
                    mike = zulu.queueReenable;
                    entity = _closure3_slot1;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = tango.bind(oscar)(entity, report);
                mike[zulu] = entity;
 353:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'queueReenable';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            tango = mike.enableQueue;
            zulu = tango.push;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            entity = mike.tryReenableQueue;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'tryReenableQueue';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = this;
                entity = tango.disabled;
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 11:
                entity = tango.probingUserId;
                zulu = null;
                if(!(zulu != entity)) { _fun00008_ip = 42; continue _fun00007 }
 23:
                mike = tango.probingUserId;
                entity = tango.perUserFpsWindow;
                entity = mike in entity;
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 42:
                mike = tango.enableQueue;
                entity = mike.shift;
                mike = entity.bind(mike)();
                if(!(zulu != mike)) { _fun00008_ip = 94; continue _fun00007 }
 62:
                entity = tango.reenableVideo;
                entity = entity.bind(tango)(mike);
                if(entity) { _fun00008_ip = 94; continue _fun00007 }
 76:
                if(!(zulu != mike)) { _fun00008_ip = 94; continue _fun00007 }
 80:
                entity = tango.reenableVideo;
                entity = entity.bind(tango)(mike);
                if(!entity) { _fun00008_ip = 76; continue _fun00007 }
 94:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'reenableVideo';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                oscar = this;
                entity = oscar.perUserFpsWindow;
                entity = report in entity;
                if(!entity) { _fun00010_ip = 173; continue _fun00009 }
 22:
                verify = oscar.logger;
                options = verify.info;
                offset = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 5;
                mike = golf[mike];
                tango = undefined;
                offset = offset.bind(tango)(mike);
                mike = offset.now;
                romeo = mike.bind(offset)();
                mike = global;
                mike = mike.HermesInternal;
                yankee = mike.concat;
                offset = 'reenableVideo called for user ';
                mike = ' - time = ';
                mike = yankee.bind(offset)(report, mike, romeo);
                mike = options.bind(verify)(mike);
                mike = oscar.stateCleanupBeforeEnable;
                mike = mike.bind(oscar)(report);
                verify = oscar.currentVideoAutoToggleState;
                mike = _closure1_slot5;
                options = mike.AUTO_PROBING;
                verify[report] = options;
                oscar['probingUserId'] = report;
                oscar = _closure1_slot1;
                zulu = 4;
                zulu = golf[zulu];
                zulu = oscar.bind(tango)(zulu);
                mike = mike.AUTO_PROBING;
                mike = zulu.bind(tango)(report, mike);
                entity = true;
 173:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'elapsedSeconds';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            entity = argBar;
            mike = mike - entity;
            entity = 1000;
            entity = mike / entity;
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'stateCleanupBeforeEnable';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = this;
            report = entity.logger;
            tango = report.info;
            mike = 'VideoHealthManager::stateCleanupBeforeEnable';
            mike = tango.bind(report)(mike);
            tango = entity.perUserFpsWindow;
            mike = new Array(0);
            tango[zulu] = mike;
            tango = entity.prevFramesCodec;
            mike = -1;
            tango[zulu] = mike;
            mike = entity.streamDisabledUsers;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'getCurrentVideoToggleState';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.currentVideoAutoToggleState;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'createUser';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                entity = this;
                report = entity.logger;
                tango = report.info;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                mike = 'VideoHealthManager::createUser ';
                mike = oscar.bind(mike)(zulu);
                mike = tango.bind(report)(mike);
                mike = entity.perUserFpsWindow;
                mike = zulu in mike;
                if(mike) { _fun00012_ip = 132; continue _fun00011 }
 59:
                tango = entity.perUserFpsWindow;
                mike = new Array(0);
                tango[zulu] = mike;
                tango = entity.prevFramesCodec;
                mike = -1;
                tango[zulu] = mike;
                tango = entity.currentVideoAutoToggleState;
                mike = _closure1_slot5;
                mike = mike.NONE;
                tango[zulu] = mike;
                mike = entity.retryBackoffCache;
                entity = {'lastBackoffTime': null, 'expBackoffFactor': 1};
                mike[zulu] = entity;
 132:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'deleteUser';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = argFoo;
                mike = this;
                oscar = mike.logger;
                report = oscar.info;
                entity = global;
                tango = entity.HermesInternal;
                golf = tango.concat;
                tango = 'VideoHealthManager::deleteUser ';
                tango = golf.bind(tango)(zulu);
                tango = report.bind(oscar)(tango);
                tango = mike.perUserFpsWindow;
                tango = delete tango[zulu];
                tango = mike.prevFramesCodec;
                tango = delete tango[zulu];
                tango = mike.retryBackoffCache;
                tango = delete tango[zulu];
                tango = mike.currentVideoAutoToggleState;
                tango = delete tango[zulu];
                report = mike.streamDisabledUsers;
                tango = report.delete;
                tango = tango.bind(report)(zulu);
                tango = mike.probingUserId;
                if(!(zulu === tango)) { _fun00014_ip = 130; continue _fun00013 }
 112:
                tango = undefined;
                mike['probingUserId'] = tango;
                tango = mike.tryReenableQueue;
                tango = tango.bind(mike)();
 130:
                report = entity.clearTimeout;
                entity = mike.timeoutIdCache;
                tango = entity[zulu];
                entity = undefined;
                tango = report.bind(entity)(tango);
                mike = mike.timeoutIdCache;
                mike = delete mike[zulu];
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'disable';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = this;
                entity = true;
                oscar['disabled'] = entity;
                tango = oscar.perUserFpsWindow;
                for(entity in tango)
 25:
                {
 34:
                    options = entity;
                    golf = oscar.deleteUser;
                    golf = golf.bind(oscar)(options);
                    _fun00016_ip = 25; continue _fun00015;
                }
 50:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[11] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/VideoHealthManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['VideoHealthManager'] = mike;
    return entity;
})();