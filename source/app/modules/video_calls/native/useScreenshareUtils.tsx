// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var5 = function getOSRequirement() {
        var2 = _closure1_slot5;
        var1 = 12;
        var1 = var2 >= var1;
        return var1;
    };
    var _closure1_slot12 = var5;
    var4 = function getStreamPressHandler(arg1, arg2, arg3, arg4) {
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
            var1 = function S() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 14;
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
    var _closure1_slot13 = var4;
    var8 = global;
    var9 = var8.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var6);
    var1 = 0;
    var6 = var11[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var6);
    var6 = var7.NativeModules;
    var7 = var7.Platform;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.ApplicationStreamStates;
    var _closure1_slot4 = var9;
    var9 = var8.parseInt;
    var8 = var7.Version;
    var7 = 10;
    var7 = var9.bind(var1)(var8, var7);
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
    var8 = function handleCloseScreenshare() {
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
    var _closure1_slot9 = var8;
    var7 = function stopScreenshare() {
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
    var _closure1_slot10 = var7;
    var6 = function handleOnboard(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var7 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var5 = var3[var1];
        var1 = undefined;
        var5 = var7.bind(var1)(var5);
        var9 = var5.Storage;
        var8 = var9.set;
        var5 = 10;
        var5 = var3[var5];
        var5 = var7.bind(var1)(var5);
        var5 = var5.StorageKeys;
        var6 = var5.SCREENSHARE_ONBOARD;
        var5 = true;
        var5 = var8.bind(var9)(var6, var5);
        var5 = _closure1_slot1;
        var4 = 11;
        var4 = var3[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = 13;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 12;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = {};
        var7 = function onScreensharePress() {
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var3['onScreensharePress'] = var7;
        var2 = function onSkip() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['onSkip'] = var2;
        var2 = 'NUF_SCREENSHARE_ACTIONSHEET';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var _closure1_slot11 = var6;
    var9 = 20;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/video_calls/native/useScreenshareUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function _default(arg1) {
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
        var3 = _closure1_slot12;
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
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var2 = 18;
                var2 = var6[var2];
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var4 = 17;
                var2 = var6[var4];
case 19:
                var9 = undefined;
                var2 = var3.bind(var9)(var2);
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 19;
                var6 = var8[var3];
                var6 = var4.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var3 = var8[var3];
                var3 = var4.bind(var9)(var3);
                var3 = var3.t;
                if(var5) { _fun0004_ip = 20; continue _fun0004 }
case 10:
                var4 = var3.fjBNo6;
                var4 = var6.bind(var7)(var4);
                _fun0004_ip = 21; continue _fun0004;
case 20:
                var3 = var3.CpkXwc;
                var4 = var6.bind(var7)(var3);
case 21:
                var8 = _closure1_slot13;
                var13 = _closure2_slot0;
                var6 = _closure2_slot1;
                var10 = _closure2_slot2;
                var14 = undefined;
                var12 = var6;
                var11 = var5;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var1 = {};
                if(!var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var6 = _closure2_slot2;
case 22:
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
    var3['default'] = var9;
    var3['handleCloseScreenshare'] = var8;
    var3['stopScreenshare'] = var7;
    var3['handleOnboard'] = var6;
    var6 = function startStream() {
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
            if(!(var3 !== var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var3 = _closure1_slot8;
            var3 = var3.bind(var1)();
            _fun0005_ip = 26; continue _fun0005;
case 24:
            var2 = _closure1_slot7;
            var2 = var2.bind(var1)();
case 26:
            return var1;
        }
    };
    var3['startStream'] = var6;
    var3['getOSRequirement'] = var5;
    var3['getStreamPressHandler'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var6 = undefined;
            var3 = var7.bind(var6)(var3);
            var5 = var3.Storage;
            var4 = var5.get;
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.StorageKeys;
            var3 = var3.SCREENSHARE_ONBOARD;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
case 27:
            return var1;
        }
    };
    var3['handleOnPressWithOnboard'] = var2;
    return var1;
})();