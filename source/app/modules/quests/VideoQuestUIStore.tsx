// app/modules/quests/VideoQuestUIStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function(argFoo) { // Original name: _toPropertyKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = 'object';
            entity = typeof golfie;
            michal = golfie;
            if(!(tangon === entity)) { _fun00002_ip = 119; continue _fun00001 }
 17:
            michal = golfie;
            if(!michal) { _fun00002_ip = 119; continue _fun00001 }
 23:
            entity = global;
            zuuluu = entity.Symbol;
            zuuluu = zuuluu.toPrimitive;
            oscard = golfie[zuuluu];
            report = undefined;
            if(!(report === oscard)) { _fun00002_ip = 60; continue _fun00001 }
 47:
            zuuluu = entity.String;
            michal = zuuluu.bind(report)(golfie);
            _fun00002_ip = 119; continue _fun00001;
 60:
            report = oscard.call;
            zuuluu = 'string';
            report = report.bind(oscard)(golfie, zuuluu);
            zuuluu = typeof report;
            michal = report;
            if(!(tangon === zuuluu)) { _fun00002_ip = 119; continue _fun00001 }
 85:
            tangon = entity.TypeError;
            entity = tangon.prototype;
            zuuluu = Object.create(entity, {constructor: {value: tangon}});
            verify = '@@toPrimitive must return a primitive value.';
            offset = zuuluu;
            entity = new offset[tangon](verify, option);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 119:
            tangon = 'symbol';
            zuuluu = typeof michal;
            entity = michal;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 136; continue _fun00001 }
 133:
            entity = '' + michal;
 136:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    romeon = 0;
    report = option[romeon];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    report = {};
    tangon = 'UNKNOWN';
    report['UNKNOWN'] = tangon;
    tangon = 'NOT_STARTED';
    report['NOT_STARTED'] = tangon;
    tangon = 'IN_PROGRESS';
    report['IN_PROGRESS'] = tangon;
    tangon = 'COMPLETED';
    report['COMPLETED'] = tangon;
    var _closure1_slot3 = report;
    tangon = {};
    oscard = 'NONE';
    tangon['NONE'] = oscard;
    oscard = 'FETCHING';
    tangon['FETCHING'] = oscard;
    oscard = 'SUCCESS';
    tangon['SUCCESS'] = oscard;
    oscard = 'FAILURE';
    tangon['FAILURE'] = oscard;
    oscard = 1;
    oscard = option[oscard];
    verify = golfie.bind(entity)(oscard);
    oscard = verify.createWithEqualityFn;
    oscard = oscard.bind(verify)();
    foxtra = 2;
    verify = option[foxtra];
    yankee = golfie.bind(entity)(verify);
    offset = yankee.persist;
    verify = {};
    backup = 'videoQuestUIState';
    verify['name'] = backup;
    foxtra = option[foxtra];
    kiloes = golfie.bind(entity)(foxtra);
    backup = kiloes.createJSONStorage;
    foxtra = function() {
        entity = {};
        zuuluu = function(argFoo) { // Original name: getItem
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.Storage;
                michal = zuuluu.get;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00004_ip = 56; continue _fun00003 }
 53:
                entity = michal;
 56:
                return entity;
            }
        };
        entity['getItem'] = zuuluu;
        zuuluu = function(argFoo, argBar) { // Original name: setItem
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            tangon = entity.Storage;
            zuuluu = tangon.set;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['setItem'] = zuuluu;
        michal = function(argFoo) { // Original name: removeItem
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.Storage;
            michal = zuuluu.remove;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['removeItem'] = michal;
        return entity;
    };
    foxtra = backup.bind(kiloes)(foxtra);
    verify['storage'] = foxtra;
    foxtra = function(argFoo) { // Original name: partialize
        michal = argFoo;
        entity = {};
        zuuluu = michal.volume;
        entity['volume'] = zuuluu;
        zuuluu = michal.muted;
        entity['muted'] = zuuluu;
        michal = michal.videoProgress;
        entity['videoProgress'] = michal;
        return entity;
    };
    verify['partialize'] = foxtra;
    verify['version'] = romeon;
    michal = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {'volume': 0.3, 'muted': false, 'transcriptEnabled': false, 'captionEnabled': false, 'fullScreenEnabled': false, 'videoProgress': null, 'transcript': null};
        zuuluu = {};
        entity['videoProgress'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setVolume
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['volume'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setVolume'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setMuted
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['muted'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setMuted'] = zuuluu;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: setVideoProgress
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                option = argBar;
                var _closure3_slot0 = tangon;
                var _closure3_slot1 = option;
                entity = argBaz;
                var _closure3_slot2 = entity;
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = zuuluu.videoProgress;
                report = zuuluu[tangon];
                tangon = null;
                oscard = tangon == report;
                zuuluu = undefined;
                if(oscard) { _fun00006_ip = 63; continue _fun00005 }
 57:
                zuuluu = report.maxTimestampSec;
 63:
                tangon = tangon != zuuluu;
                oscard = 0;
                if(!tangon) { _fun00006_ip = 75; continue _fun00005 }
 72:
                oscard = zuuluu;
 75:
                zuuluu = global;
                report = zuuluu.Math;
                tangon = report.max;
                golfie = zuuluu.Math;
                zuuluu = golfie.floor;
                zuuluu = zuuluu.bind(golfie)(option);
                zuuluu = tangon.bind(report)(oscard, zuuluu);
                var _closure3_slot3 = zuuluu;
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 3;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.batchUpdates;
                michal = function() {
                    zuuluu = _closure2_slot0;
                    michal = {};
                    tangon = {};
                    report = _closure2_slot1;
                    entity = undefined;
                    report = report.bind(entity)();
                    verify = report.videoProgress;
                    offset = tangon;
                    report = copyDataProperties(offset, verify);
                    oscard = _closure3_slot0;
                    report = {};
                    option = _closure3_slot1;
                    report['timestampSec'] = option;
                    option = _closure3_slot2;
                    report['duration'] = option;
                    golfie = _closure3_slot3;
                    report['maxTimestampSec'] = golfie;
                    tangon[oscard] = report;
                    michal['videoProgress'] = tangon;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['setVideoProgress'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setTranscriptEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['transcriptEnabled'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setTranscriptEnabled'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setCaptionEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['captionEnabled'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setCaptionEnabled'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setFullScreenEnabled
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['fullScreenEnabled'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setFullScreenEnabled'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: getVideoProgress
            michal = _closure2_slot1;
            entity = undefined;
            entity = michal.bind(entity)();
            michal = entity.videoProgress;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['getVideoProgress'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: getVideoProgressState
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)();
                michal = entity.videoProgress;
                entity = argFoo;
                entity = michal[entity];
                michal = null;
                if(!(michal != entity)) { _fun00008_ip = 104; continue _fun00007 }
 32:
                zuuluu = entity.timestampSec;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00008_ip = 89; continue _fun00007 }
 44:
                michal = entity.timestampSec;
                entity = entity.duration;
                if(!(!(michal >= entity))) { _fun00008_ip = 74; continue _fun00007 }
 59:
                entity = _closure1_slot3;
                entity = entity.IN_PROGRESS;
                _fun00008_ip = 87; continue _fun00007;
 74:
                michal = _closure1_slot3;
                entity = michal.COMPLETED;
 87:
                _fun00008_ip = 102; continue _fun00007;
 89:
                michal = _closure1_slot3;
                entity = michal.NOT_STARTED;
 102:
                _fun00008_ip = 117; continue _fun00007;
 104:
                michal = _closure1_slot3;
                entity = michal.UNKNOWN;
 117:
                return entity;
            }
        };
        entity['getVideoProgressState'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: resetQuest
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                report = zuuluu.videoProgress;
                oscard = _closure3_slot0;
                zuuluu = report[oscard];
                tangon = _closure1_slot2;
                golfie = new Array(1);
                golfie[0] = oscard;
                oscard = golfie.map;
                zuuluu = _closure1_slot4;
                zuuluu = oscard.bind(golfie)(zuuluu);
                tangon = tangon.bind(entity)(report, zuuluu);
                zuuluu = _closure2_slot0;
                michal = {};
                michal['videoProgress'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['resetQuest'] = zuuluu;
        michal = function(argFoo) { // Original name: setTranscriptAsset
            entity = argFoo;
            var _closure3_slot0 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure2_slot0;
                michal = {};
                entity = _closure3_slot0;
                michal['transcript'] = entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['setTranscriptAsset'] = michal;
        return entity;
    };
    michal = offset.bind(yankee)(michal, verify);
    michal = oscard.bind(entity)(michal);
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/quests/VideoQuestUIStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = michal;
    zuuluu['VideoProgressState'] = report;
    zuuluu['FetchStatus'] = tangon;
    zuuluu['useVideoQuestUIStore'] = michal;
    return entity;
})();