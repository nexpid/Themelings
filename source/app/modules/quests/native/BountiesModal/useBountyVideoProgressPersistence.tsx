// app/modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot5 = var4;
    var4 = {'timestampSec': 0, 'maxTimestampSec': 0, 'duration': 0};
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/useBountyVideoProgressPersistence.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBountyVideoProgressPersistence(arg1) {
        var1 = arg1;
        var6 = var1.bountyId;
        var _closure2_slot0 = var6;
        var1 = var1.endMode;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 4;
        var3 = var5[var3];
        var8 = undefined;
        var3 = var4.bind(var8)(var3);
        var5 = var3.BountiesStage1Experiment;
        var4 = var5.useConfig;
        var3 = {};
        var7 = _closure1_slot5;
        var7 = var7.VIDEO_MODAL_MOBILE;
        var3['location'] = var7;
        var3 = var4.bind(var5)(var3);
        var7 = var3.enabled;
        var _closure2_slot2 = var7;
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure1_slot6;
                return var1;
case 2:
                var5 = _closure1_slot4;
                var4 = var5.getBountyVideoProgress;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var4 = null;
                if(!(var4 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot1;
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 5;
                var6 = var3[var4];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.BountyVideoEndMode;
                var3 = var3.LOOP;
                if(!(var5 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = var1.maxTimestampSec;
                var7 = var1.duration;
                var3 = 0;
                var3 = var7 > var3;
                if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var5 = 1;
                var5 = var7 - var5;
                var3 = var6 >= var5;
case 8:
                if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var3 = var1.timestampSec;
                if(!(var3 <= var4)) { _fun0001_ip = 10; continue _fun0001 }
case 4:
                var1 = _closure1_slot6;
case 10:
                return var1;
            }
        };
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3.bind(var8)(var4, var1);
        var4 = 0;
        var3 = var1[var4];
        var1 = var5.useRef;
        var1 = var1.bind(var5)(var4);
        var _closure2_slot3 = var1;
        var4 = var5.useRef;
        var1 = var3.timestampSec;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot4 = var1;
        var4 = var5.useRef;
        var1 = var3.maxTimestampSec;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot5 = var1;
        var4 = var5.useRef;
        var1 = var3.duration;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot6 = var1;
        var1 = {};
        var1['initialProgress'] = var3;
        var8 = var5.useCallback;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var3 = function(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var7 = arg3;
                var2 = _closure2_slot4;
                var2['current'] = var7;
                var2 = _closure2_slot5;
                var2['current'] = var6;
                var2 = _closure2_slot6;
                var2['current'] = var5;
                var2 = _closure2_slot2;
                if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = _closure2_slot3;
                var3 = var3.current;
                var2 = var7 >= var3;
case 11:
                if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var3 = _closure2_slot3;
                var2 = 1;
                var2 = var7 + var2;
                var3['current'] = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.setBountyVideoProgress;
                var2 = _closure2_slot0;
                var1 = {};
                var1['timestampSec'] = var7;
                var1['maxTimestampSec'] = var6;
                var1['duration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var8.bind(var5)(var3, var4);
        var1['handleProgress'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot2;
                if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setBountyVideoProgress;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure2_slot4;
                var6 = var6.current;
                var1['timestampSec'] = var6;
                var6 = _closure2_slot5;
                var6 = var6.current;
                var1['maxTimestampSec'] = var6;
                var5 = _closure2_slot6;
                var5 = var5.current;
                var1['duration'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 15:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['flushProgress'] = var2;
        return var1;
    };
    var3['useBountyVideoProgressPersistence'] = var2;
    return var1;
})();