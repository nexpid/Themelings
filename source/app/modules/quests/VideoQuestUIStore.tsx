// app/modules/quests/VideoQuestUIStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            tango = 'object';
            entity = typeof golf;
            mike = golf;
            if(!(tango === entity)) { _fun00002_ip = 119; continue _fun00001 }
 17:
            mike = golf;
            if(!mike) { _fun00002_ip = 119; continue _fun00001 }
 23:
            entity = global;
            zulu = entity.Symbol;
            zulu = zulu.toPrimitive;
            oscar = golf[zulu];
            report = undefined;
            if(!(report === oscar)) { _fun00002_ip = 60; continue _fun00001 }
 47:
            zulu = entity.String;
            mike = zulu.bind(report)(golf);
            _fun00002_ip = 119; continue _fun00001;
 60:
            report = oscar.call;
            zulu = 'string';
            report = report.bind(oscar)(golf, zulu);
            zulu = typeof report;
            mike = report;
            if(!(tango === zulu)) { _fun00002_ip = 119; continue _fun00001 }
 85:
            tango = entity.TypeError;
            entity = tango.prototype;
            zulu = Object.create(entity, {constructor: {value: tango}});
            verify = '@@toPrimitive must return a primitive value.';
            offset = zulu;
            entity = new offset[tango](verify, options);
            entity = entity instanceof Object ? entity : zulu;
            throw entity;
 119:
            tango = 'symbol';
            zulu = typeof mike;
            entity = mike;
            if(!(tango !== zulu)) { _fun00002_ip = 136; continue _fun00001 }
 133:
            entity = '' + mike;
 136:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    romeo = 0;
    report = options[romeo];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(report);
    var _closure1_slot2 = tango;
    report = {};
    tango = 'UNKNOWN';
    report['UNKNOWN'] = tango;
    tango = 'NOT_STARTED';
    report['NOT_STARTED'] = tango;
    tango = 'IN_PROGRESS';
    report['IN_PROGRESS'] = tango;
    tango = 'COMPLETED';
    report['COMPLETED'] = tango;
    var _closure1_slot3 = report;
    tango = {};
    oscar = 'NONE';
    tango['NONE'] = oscar;
    oscar = 'FETCHING';
    tango['FETCHING'] = oscar;
    oscar = 'SUCCESS';
    tango['SUCCESS'] = oscar;
    oscar = 'FAILURE';
    tango['FAILURE'] = oscar;
    oscar = 1;
    oscar = options[oscar];
    verify = golf.bind(entity)(oscar);
    oscar = verify.createWithEqualityFn;
    oscar = oscar.bind(verify)();
    foxtrot = 2;
    verify = options[foxtrot];
    yankee = golf.bind(entity)(verify);
    offset = yankee.persist;
    verify = {};
    backup = 'videoQuestUIState';
    verify['name'] = backup;
    foxtrot = options[foxtrot];
    kilo = golf.bind(entity)(foxtrot);
    backup = kilo.createJSONStorage;
    foxtrot = function() {
        entity = {};
        zulu = function(argFoo) { // Original name: getItem
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.Storage;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity != mike;
                if(!zulu) { _fun00004_ip = 56; continue _fun00003 }
 53:
                entity = mike;
 56:
                return entity;
            }
        };
        entity['getItem'] = zulu;
        zulu = function(argFoo, argBar) { // Original name: setItem
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            tango = entity.Storage;
            zulu = tango.set;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['setItem'] = zulu;
        mike = function(argFoo) { // Original name: removeItem
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.Storage;
            mike = zulu.remove;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['removeItem'] = mike;
        return entity;
    };
    foxtrot = backup.bind(kilo)(foxtrot);
    verify['storage'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: partialize
        mike = argFoo;
        entity = {};
        zulu = mike.volume;
        entity['volume'] = zulu;
        zulu = mike.muted;
        entity['muted'] = zulu;
        mike = mike.videoProgress;
        entity['videoProgress'] = mike;
        return entity;
    };
    verify['partialize'] = foxtrot;
    verify['version'] = romeo;
    mike = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {'volume': 0.3, 'muted': false, 'transcriptEnabled': false, 'captionEnabled': false, 'fullScreenEnabled': false, 'videoProgress': null, 'transcript': null};
        zulu = {};
        entity['videoProgress'] = zulu;
        zulu = function(argFoo) { // Original name: setVolume
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['volume'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setVolume'] = zulu;
        zulu = function(argFoo) { // Original name: setMuted
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['muted'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setMuted'] = zulu;
        zulu = function(argFoo, argBar, argBaz) { // Original name: setVideoProgress
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tango = argFoo;
                options = argBar;
                var _closure3_slot0 = tango;
                var _closure3_slot1 = options;
                entity = argBaz;
                var _closure3_slot2 = entity;
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                zulu = zulu.videoProgress;
                report = zulu[tango];
                tango = null;
                oscar = tango == report;
                zulu = undefined;
                if(oscar) { _fun00006_ip = 63; continue _fun00005 }
 57:
                zulu = report.maxTimestampSec;
 63:
                tango = tango != zulu;
                oscar = 0;
                if(!tango) { _fun00006_ip = 75; continue _fun00005 }
 72:
                oscar = zulu;
 75:
                zulu = global;
                report = zulu.Math;
                tango = report.max;
                golf = zulu.Math;
                zulu = golf.floor;
                zulu = zulu.bind(golf)(options);
                zulu = tango.bind(report)(oscar, zulu);
                var _closure3_slot3 = zulu;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 3;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.batchUpdates;
                mike = function() {
                    zulu = _closure2_slot0;
                    mike = {};
                    tango = {};
                    report = _closure2_slot1;
                    entity = undefined;
                    report = report.bind(entity)();
                    verify = report.videoProgress;
                    offset = tango;
                    report = copyDataProperties(offset, verify);
                    oscar = _closure3_slot0;
                    report = {};
                    options = _closure3_slot1;
                    report['timestampSec'] = options;
                    options = _closure3_slot2;
                    report['duration'] = options;
                    golf = _closure3_slot3;
                    report['maxTimestampSec'] = golf;
                    tango[oscar] = report;
                    mike['videoProgress'] = tango;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['setVideoProgress'] = zulu;
        zulu = function(argFoo) { // Original name: setTranscriptEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['transcriptEnabled'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setTranscriptEnabled'] = zulu;
        zulu = function(argFoo) { // Original name: setCaptionEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['captionEnabled'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setCaptionEnabled'] = zulu;
        zulu = function(argFoo) { // Original name: setFullScreenEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['fullScreenEnabled'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setFullScreenEnabled'] = zulu;
        zulu = function(argFoo) { // Original name: getVideoProgress
            mike = _closure2_slot1;
            entity = undefined;
            entity = mike.bind(entity)();
            mike = entity.videoProgress;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['getVideoProgress'] = zulu;
        zulu = function(argFoo) { // Original name: getVideoProgressState
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure2_slot1;
                entity = undefined;
                entity = mike.bind(entity)();
                mike = entity.videoProgress;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                if(!(mike != entity)) { _fun00008_ip = 104; continue _fun00007 }
 32:
                zulu = entity.timestampSec;
                mike = 0;
                if(!(mike !== zulu)) { _fun00008_ip = 89; continue _fun00007 }
 44:
                mike = entity.timestampSec;
                entity = entity.duration;
                if(!(!(mike >= entity))) { _fun00008_ip = 74; continue _fun00007 }
 59:
                entity = _closure1_slot3;
                entity = entity.IN_PROGRESS;
                _fun00008_ip = 87; continue _fun00007;
 74:
                mike = _closure1_slot3;
                entity = mike.COMPLETED;
 87:
                _fun00008_ip = 102; continue _fun00007;
 89:
                mike = _closure1_slot3;
                entity = mike.NOT_STARTED;
 102:
                _fun00008_ip = 117; continue _fun00007;
 104:
                mike = _closure1_slot3;
                entity = mike.UNKNOWN;
 117:
                return entity;
            }
        };
        entity['getVideoProgressState'] = zulu;
        zulu = function(argFoo) { // Original name: resetQuest
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                report = zulu.videoProgress;
                oscar = _closure3_slot0;
                zulu = report[oscar];
                tango = _closure1_slot2;
                golf = new Array(1);
                golf[0] = oscar;
                oscar = golf.map;
                zulu = _closure1_slot4;
                zulu = oscar.bind(golf)(zulu);
                tango = tango.bind(entity)(report, zulu);
                zulu = _closure2_slot0;
                mike = {};
                mike['videoProgress'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['resetQuest'] = zulu;
        mike = function(argFoo) { // Original name: setTranscriptAsset
            entity = argFoo;
            var _closure3_slot0 = entity;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure2_slot0;
                mike = {};
                entity = _closure3_slot0;
                mike['transcript'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['setTranscriptAsset'] = mike;
        return entity;
    };
    mike = offset.bind(yankee)(mike, verify);
    mike = oscar.bind(entity)(mike);
    oscar = 5;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/quests/VideoQuestUIStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = mike;
    zulu['VideoProgressState'] = report;
    zulu['FetchStatus'] = tango;
    zulu['useVideoQuestUIStore'] = mike;
    return entity;
})();