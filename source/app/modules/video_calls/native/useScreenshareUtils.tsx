// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = global;
    var7 = var6.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var4);
    var4 = var5.NativeModules;
    var5 = var5.Platform;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ApplicationStreamStates;
    var _closure1_slot4 = var7;
    var7 = var6.parseInt;
    var6 = var5.Version;
    var5 = 10;
    var5 = var7.bind(var1)(var6, var5);
    var _closure1_slot5 = var5;
    var4 = var4.BroadcastUploadManager;
    var _closure1_slot6 = var4;
    var4 = function startAndroidScreenshare() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.isForegroundServiceRunning;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = arg1;
                if(var1) { _fun0001_ip = 43; continue _fun0001 }
 17:
                var1 = 5;
                var4 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var1 = var4.showScreenshareDisabledAlert;
                var1 = var1.bind(var4)();
                _fun0001_ip = 79; continue _fun0001;
 43:
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getVoiceEngine;
                var2 = var1.bind(var2)();
                var1 = var2.startBroadcast;
                var1 = var1.bind(var2)();
 79:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var4;
    var4 = function showScreensharePicker() {
        var2 = _closure1_slot6;
        var1 = var2.showPicker;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var _closure1_slot8 = var4;
    var6 = function handleCloseScreenshare() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUserActiveStream;
            var7 = var2.bind(var3)();
            var4 = null;
            if(!(var4 != var7)) { _fun0002_ip = 79; continue _fun0002 }
 23:
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
 79:
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
    var _closure1_slot9 = var6;
    var5 = function stopScreenshare() {
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
    var _closure1_slot10 = var5;
    var4 = function handleOnboard(arg1) {
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
    var _closure1_slot11 = var4;
    var7 = 20;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/video_calls/native/useScreenshareUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function _default(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 14;
        var3 = var6[var3];
        var5 = undefined;
        var3 = var7.bind(var5)(var3);
        var3 = var3.bind(var5)(var4);
        var _closure2_slot1 = var3;
        var4 = _closure1_slot0;
        var3 = 15;
        var3 = var6[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = 12;
                var7 = var3 >= var2;
                var3 = _closure1_slot3;
                var2 = var3.getCurrentUserActiveStream;
                var2 = var2.bind(var3)();
                var3 = null;
                var5 = var3 != var2;
                if(!var5) { _fun0003_ip = 56; continue _fun0003 }
 37:
                var3 = var2.state;
                var2 = _closure1_slot4;
                var2 = var2.ACTIVE;
                var5 = var3 === var2;
 56:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var9 = undefined;
                var3 = var3.bind(var9)(var2);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var3 = var2.platform;
                var2 = 'android';
                if(!(var2 !== var3)) { _fun0003_ip = 108; continue _fun0003 }
 102:
                var2 = _closure1_slot8;
                _fun0003_ip = 112; continue _fun0003;
 108:
                var2 = _closure1_slot7;
 112:
                if(var7) { _fun0003_ip = 126; continue _fun0003 }
 115:
                var3 = function u() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 16;
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
                _fun0003_ip = 174; continue _fun0003;
 126:
                var4 = _closure2_slot1;
                if(var4) { _fun0003_ip = 164; continue _fun0003 }
 136:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var4 = var6.bind(var9)(var4);
                var3 = var4.showScreenshareDisabledAlert;
                _fun0003_ip = 174; continue _fun0003;
 164:
                var3 = var2;
                if(!var5) { _fun0003_ip = 174; continue _fun0003 }
 170:
                var3 = _closure1_slot10;
 174:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                if(var5) { _fun0003_ip = 194; continue _fun0003 }
 185:
                var2 = 18;
                var2 = var8[var2];
                _fun0003_ip = 201; continue _fun0003;
 194:
                var6 = 17;
                var2 = var8[var6];
 201:
                var2 = var4.bind(var9)(var2);
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 19;
                var6 = var10[var1];
                var6 = var4.bind(var9)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var1 = var10[var1];
                var1 = var4.bind(var9)(var1);
                var1 = var1.t;
                if(var5) { _fun0003_ip = 268; continue _fun0003 }
 253:
                var4 = var1.fjBNo6;
                var4 = var6.bind(var8)(var4);
                _fun0003_ip = 279; continue _fun0003;
 268:
                var1 = var1.CpkXwc;
                var4 = var6.bind(var8)(var1);
 279:
                var1 = {};
                var6 = _closure2_slot1;
                if(!var6) { _fun0003_ip = 294; continue _fun0003 }
 291:
                var6 = var7;
 294:
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
    var3['default'] = var7;
    var3['handleCloseScreenshare'] = var6;
    var3['stopScreenshare'] = var5;
    var3['handleOnboard'] = var4;
    var2 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var3) { _fun0004_ip = 84; continue _fun0004 }
 77:
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
 84:
            return var1;
        }
    };
    var3['handleOnPressWithOnboard'] = var2;
    return var1;
})();