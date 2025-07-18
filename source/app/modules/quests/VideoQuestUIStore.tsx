// app/modules/quests/VideoQuestUIStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = function _toPropertyKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var4 = 'object';
            var1 = typeof var7;
            var2 = var7;
            if(!(var4 === var1)) { _fun0001_ip = 119; continue _fun0001 }
 17:
            var2 = var7;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 23:
            var1 = global;
            var3 = var1.Symbol;
            var3 = var3.toPrimitive;
            var6 = var7[var3];
            var5 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 60; continue _fun0001 }
 47:
            var3 = var1.String;
            var2 = var3.bind(var5)(var7);
            _fun0001_ip = 119; continue _fun0001;
 60:
            var5 = var6.call;
            var3 = 'string';
            var5 = var5.bind(var6)(var7, var3);
            var3 = typeof var5;
            var2 = var5;
            if(!(var4 === var3)) { _fun0001_ip = 119; continue _fun0001 }
 85:
            var4 = var1.TypeError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var9 = '@@toPrimitive must return a primitive value.';
            var10 = var3;
            var1 = new var10[var4](var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
 119:
            var4 = 'symbol';
            var3 = typeof var2;
            var1 = var2;
            if(!(var4 !== var3)) { _fun0001_ip = 136; continue _fun0001 }
 133:
            var1 = '' + var2;
 136:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var12 = 0;
    var5 = var8[var12];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var5 = {};
    var4 = 'UNKNOWN';
    var5['UNKNOWN'] = var4;
    var4 = 'NOT_STARTED';
    var5['NOT_STARTED'] = var4;
    var4 = 'IN_PROGRESS';
    var5['IN_PROGRESS'] = var4;
    var4 = 'COMPLETED';
    var5['COMPLETED'] = var4;
    var _closure1_slot3 = var5;
    var4 = {};
    var6 = 'NONE';
    var4['NONE'] = var6;
    var6 = 'FETCHING';
    var4['FETCHING'] = var6;
    var6 = 'SUCCESS';
    var4['SUCCESS'] = var6;
    var6 = 'FAILURE';
    var4['FAILURE'] = var6;
    var6 = 1;
    var6 = var8[var6];
    var9 = var7.bind(var1)(var6);
    var6 = var9.createWithEqualityFn;
    var6 = var6.bind(var9)();
    var13 = 2;
    var9 = var8[var13];
    var11 = var7.bind(var1)(var9);
    var10 = var11.persist;
    var9 = {};
    var14 = 'videoQuestUIState';
    var9['name'] = var14;
    var13 = var8[var13];
    var15 = var7.bind(var1)(var13);
    var14 = var15.createJSONStorage;
    var13 = function() {
        var1 = {};
        var3 = function getItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.Storage;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0002_ip = 56; continue _fun0002 }
 53:
                var1 = var2;
 56:
                return var1;
            }
        };
        var1['getItem'] = var3;
        var3 = function setItem(arg1, arg2) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.Storage;
            var3 = var4.set;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['setItem'] = var3;
        var2 = function removeItem(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Storage;
            var2 = var3.remove;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['removeItem'] = var2;
        return var1;
    };
    var13 = var14.bind(var15)(var13);
    var9['storage'] = var13;
    var13 = function partialize(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.volume;
        var1['volume'] = var3;
        var3 = var2.muted;
        var1['muted'] = var3;
        var2 = var2.videoProgress;
        var1['videoProgress'] = var2;
        return var1;
    };
    var9['partialize'] = var13;
    var9['version'] = var12;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {'volume': 0.3, 'muted': false, 'transcriptEnabled': false, 'captionEnabled': false, 'fullScreenEnabled': false, 'videoProgress': null, 'transcript': null};
        var3 = {};
        var1['videoProgress'] = var3;
        var3 = function setVolume(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['volume'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setVolume'] = var3;
        var3 = function setMuted(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['muted'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setMuted'] = var3;
        var3 = function setVideoProgress(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var8 = arg2;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var8;
                var1 = arg3;
                var _closure3_slot2 = var1;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = var3.videoProgress;
                var5 = var3[var4];
                var4 = null;
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0003_ip = 63; continue _fun0003 }
 57:
                var3 = var5.maxTimestampSec;
 63:
                var4 = var4 != var3;
                var6 = 0;
                if(!var4) { _fun0003_ip = 75; continue _fun0003 }
 72:
                var6 = var3;
 75:
                var3 = global;
                var5 = var3.Math;
                var4 = var5.max;
                var7 = var3.Math;
                var3 = var7.floor;
                var3 = var3.bind(var7)(var8);
                var3 = var4.bind(var5)(var6, var3);
                var _closure3_slot3 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 3;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.batchUpdates;
                var2 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var4 = {};
                    var5 = _closure2_slot1;
                    var1 = undefined;
                    var5 = var5.bind(var1)();
                    var9 = var5.videoProgress;
                    var10 = var4;
                    var5 = copyDataProperties(var10, var9);
                    var6 = _closure3_slot0;
                    var5 = {};
                    var8 = _closure3_slot1;
                    var5['timestampSec'] = var8;
                    var8 = _closure3_slot2;
                    var5['duration'] = var8;
                    var7 = _closure3_slot3;
                    var5['maxTimestampSec'] = var7;
                    var4[var6] = var5;
                    var2['videoProgress'] = var4;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['setVideoProgress'] = var3;
        var3 = function setTranscriptEnabled(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['transcriptEnabled'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setTranscriptEnabled'] = var3;
        var3 = function setCaptionEnabled(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['captionEnabled'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setCaptionEnabled'] = var3;
        var3 = function setFullScreenEnabled(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['fullScreenEnabled'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setFullScreenEnabled'] = var3;
        var3 = function getVideoProgress(arg1) {
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var2 = var1.videoProgress;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['getVideoProgress'] = var3;
        var3 = function getVideoProgressState(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var1.videoProgress;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 != var1)) { _fun0004_ip = 104; continue _fun0004 }
 32:
                var3 = var1.timestampSec;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0004_ip = 89; continue _fun0004 }
 44:
                var2 = var1.timestampSec;
                var1 = var1.duration;
                if(!(!(var2 >= var1))) { _fun0004_ip = 74; continue _fun0004 }
 59:
                var1 = _closure1_slot3;
                var1 = var1.IN_PROGRESS;
                _fun0004_ip = 87; continue _fun0004;
 74:
                var2 = _closure1_slot3;
                var1 = var2.COMPLETED;
 87:
                _fun0004_ip = 102; continue _fun0004;
 89:
                var2 = _closure1_slot3;
                var1 = var2.NOT_STARTED;
 102:
                _fun0004_ip = 117; continue _fun0004;
 104:
                var2 = _closure1_slot3;
                var1 = var2.UNKNOWN;
 117:
                return var1;
            }
        };
        var1['getVideoProgressState'] = var3;
        var3 = function resetQuest(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var5 = var3.videoProgress;
                var6 = _closure3_slot0;
                var3 = var5[var6];
                var4 = _closure1_slot2;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = var7.map;
                var3 = _closure1_slot4;
                var3 = var6.bind(var7)(var3);
                var4 = var4.bind(var1)(var5, var3);
                var3 = _closure2_slot0;
                var2 = {};
                var2['videoProgress'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['resetQuest'] = var3;
        var2 = function setTranscriptAsset(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = _closure3_slot0;
                var2['transcript'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['setTranscriptAsset'] = var2;
        return var1;
    };
    var2 = var10.bind(var11)(var2, var9);
    var2 = var6.bind(var1)(var2);
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/VideoQuestUIStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var3['VideoProgressState'] = var5;
    var3['FetchStatus'] = var4;
    var3['useVideoQuestUIStore'] = var2;
    return var1;
})();