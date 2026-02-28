// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var10;
    var4 = function getOSRequirement() {
        var2 = _closure1_slot5;
        var1 = 12;
        var1 = var2 >= var1;
        return var1;
    };
    var _closure1_slot11 = var4;
    var2 = function getStreamPressHandler(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.getVoiceEngine;
            var3 = var3.bind(var4)();
            var4 = var3.platform;
            var3 = 'android';
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot8;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot7;
case 4:
            var3 = arg4;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = function l() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 9;
                var2 = var4[var7];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.reportAVError;
                var2 = {};
                var7 = var4[var7];
                var7 = var3.bind(var1)(var7);
                var7 = var7.AVError;
                var7 = var7.SCREENSHARE_OS_NOT_SUPPORTED;
                var2['type'] = var7;
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var2 = var5.bind(var6)(var2);
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showMinOSScreenshareRequirementAlert;
                var2 = var2.bind(var3)();
                return var1;
            };
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var3 = arg2;
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var3 = var5.bind(var6)(var3);
            var1 = var3.showScreenshareDisabledAlert;
            _fun0001_ip = 7; continue _fun0001;
case 8:
            var3 = arg3;
            var1 = var4;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var1 = _closure1_slot10;
case 7:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var8 = global;
    var11 = var8.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var10[var1];
    var1 = undefined;
    var7 = var9.bind(var1)(var6);
    var6 = var7.NativeModules;
    var7 = var7.Platform;
    var11 = 1;
    var11 = var10[var11];
    var11 = var12.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 2;
    var11 = var10[var11];
    var11 = var9.bind(var1)(var11);
    var11 = var11.ApplicationStreamStates;
    var _closure1_slot4 = var11;
    var11 = var8.parseInt;
    var8 = var7.Version;
    var7 = 10;
    var7 = var11.bind(var1)(var8, var7);
    var _closure1_slot5 = var7;
    var6 = var6.BroadcastUploadManager;
    var _closure1_slot6 = var6;
    var6 = function startAndroidScreenshare() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.isForegroundServiceRunning;
        var2 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = arg1;
                if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var1 = 5;
                var4 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var1 = var4.showScreenshareDisabledAlert;
                var1 = var1.bind(var4)();
                _fun0002_ip = 13; continue _fun0002;
case 11:
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var2 = var1.bind(var2)();
                var1 = var2.startBroadcast;
                var1 = var1.bind(var2)();
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var6;
    var6 = function showScreensharePicker() {
        var2 = _closure1_slot6;
        var1 = var2.showPicker;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot8 = var6;
    var7 = function handleCloseScreenshare() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUserActiveStream;
            var7 = var2.bind(var3)();
            var4 = null;
            if(!(var4 != var7)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var6 = undefined;
            var5 = var8.bind(var6)(var2);
            var3 = var5.stopStream;
            var2 = 7;
            var2 = var9[var2];
            var6 = var8.bind(var6)(var2);
            var2 = var6.encodeStreamKey;
            var2 = var2.bind(var6)(var7);
            var2 = var3.bind(var5)(var2);
case 13:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setGoLiveSource;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function stopScreenshare() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getVoiceEngine;
        var4 = var3.bind(var4)();
        var3 = var4.stopBroadcast;
        var3 = var3.bind(var4)();
        var2 = _closure1_slot9;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot10 = var6;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/video_calls/native/useScreenshareUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function _default(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 15;
        var3 = var6[var3];
        var5 = undefined;
        var3 = var7.bind(var5)(var3);
        var3 = var3.bind(var5)(var4);
        var _closure2_slot1 = var3;
        var3 = _closure1_slot11;
        var3 = var3.bind(var5)();
        var _closure2_slot2 = var3;
        var4 = _closure1_slot0;
        var3 = 16;
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.getCurrentUserActiveStream;
                var2 = var2.bind(var3)();
                var3 = null;
                var5 = var3 != var2;
                if(!var5) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = var2.state;
                var2 = _closure1_slot4;
                var2 = var2.ACTIVE;
                var5 = var3 === var2;
case 15:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var9 = undefined;
                var3 = var3.bind(var9)(var2);
                var2 = var3.isMetaQuest;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                if(var2) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(var5) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var2 = 14;
                var2 = var7[var2];
                _fun0004_ip = 21; continue _fun0004;
case 19:
                var3 = 13;
                var2 = var7[var3];
case 21:
                var2 = var4.bind(var9)(var2);
                _fun0004_ip = 22; continue _fun0004;
case 17:
                if(var5) { _fun0004_ip = 10; continue _fun0004 }
case 8:
                var3 = 12;
                var3 = var7[var3];
                _fun0004_ip = 23; continue _fun0004;
case 10:
                var6 = 11;
                var3 = var7[var6];
case 23:
                var2 = var4.bind(var9)(var3);
case 22:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 17;
                var6 = var8[var3];
                var6 = var4.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var8[var3];
                var3 = var4.bind(var9)(var3);
                var3 = var3.t;
                if(var5) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var4 = var3.fjBNo1;
                var4 = var6.bind(var7)(var4);
                _fun0004_ip = 26; continue _fun0004;
case 24:
                var3 = var3.CpkXwZ;
                var4 = var6.bind(var7)(var3);
case 26:
                var8 = _closure1_slot12;
                var13 = _closure2_slot0;
                var6 = _closure2_slot1;
                var10 = _closure2_slot2;
                var14 = undefined;
                var12 = var6;
                var11 = var5;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var1 = {};
                if(!var6) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var6 = _closure2_slot2;
case 27:
                var1['isFeatureEnabled'] = var6;
                var1['isActive'] = var5;
                var1['text'] = var4;
                var1['onPress'] = var3;
                var1['imgSource'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var8;
    var3['handleCloseScreenshare'] = var7;
    var3['stopScreenshare'] = var6;
    var5 = function startStream() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var3 = var3.bind(var4)();
            var4 = var3.platform;
            var3 = 'android';
            if(!(var3 !== var4)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var3 = _closure1_slot8;
            var3 = var3.bind(var1)();
            _fun0005_ip = 31; continue _fun0005;
case 29:
            var2 = _closure1_slot7;
            var2 = var2.bind(var1)();
case 31:
            return var1;
        }
    };
    var3['startStream'] = var5;
    var3['getOSRequirement'] = var4;
    var3['getStreamPressHandler'] = var2;
    return var1;
})();