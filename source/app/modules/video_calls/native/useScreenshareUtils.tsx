// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var11;
    var8 = function handleCloseScreenshare() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUserActiveStream;
            var7 = var2.bind(var3)();
            var4 = null;
            if(!(var4 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var6 = undefined;
            var5 = var8.bind(var6)(var2);
            var3 = var5.stopStream;
            var2 = 9;
            var2 = var9[var2];
            var6 = var8.bind(var6)(var2);
            var2 = var6.encodeStreamKey;
            var2 = var2.bind(var6)(var7);
            var2 = var3.bind(var5)(var2);
case 2:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setGoLiveSource;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot8 = var8;
    var7 = function stopScreenshare() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getVoiceEngine;
        var4 = var3.bind(var4)();
        var3 = var4.stopBroadcast;
        var3 = var3.bind(var4)();
        var2 = _closure1_slot8;
        var2 = var2.bind(var1)();
        return var1;
    };
    var _closure1_slot9 = var7;
    var6 = function startStream() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getVoiceEngine;
            var3 = var3.bind(var4)();
            var4 = var3.platform;
            var3 = 'android';
            if(!(var3 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = _closure1_slot7;
            var2 = var3.showPicker;
            var2 = var2.bind(var3)();
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var2 = function startAndroidScreenshare() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.isForegroundServiceRunning;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = arg1;
                        if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var1 = 7;
                        var4 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var4);
                        var1 = var4.showScreenshareDisabledAlert;
                        var1 = var1.bind(var4)();
                        _fun0003_ip = 2; continue _fun0003;
case 7:
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.getVoiceEngine;
                        var2 = var1.bind(var2)();
                        var1 = var2.startBroadcast;
                        var1 = var1.bind(var2)();
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var2.bind(var1)();
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function getOSRequirement() {
        var2 = _closure1_slot6;
        var1 = 12;
        var1 = var2 >= var1;
        return var1;
    };
    var _closure1_slot11 = var5;
    var4 = function getStreamPressHandler(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = var3.channel;
            var _closure2_slot0 = var1;
            var7 = var3.hasPermission;
            var4 = var3.isActive;
            var1 = var3.osRequirement;
            var6 = var3.showMobileGoLiveUpsell;
            var9 = undefined;
            if(!(var6 === var9)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var6 = false;
case 9:
            var3 = var3.analyticsLocations;
            var _closure2_slot1 = var3;
            var5 = _closure1_slot10;
            if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = function S() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 11;
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
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.showMinOSScreenshareRequirementAlert;
                var2 = var2.bind(var3)();
                return var1;
            };
            _fun0004_ip = 13; continue _fun0004;
case 11:
            if(var7) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 7;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var1 = var7.showScreenshareDisabledAlert;
            _fun0004_ip = 13; continue _fun0004;
case 14:
            if(var6) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = var5;
            if(!var4) { _fun0004_ip = 13; continue _fun0004 }
case 18:
            var1 = _closure1_slot9;
            _fun0004_ip = 13; continue _fun0004;
case 16:
            var1 = function S() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.showMobileGoLiveActionSheet;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
case 13:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = function getShareIcon(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isMetaQuest;
            var1 = var1.bind(var3)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 5:
            var1 = arg2;
            if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            if(var2) { _fun0005_ip = 4; continue _fun0005 }
case 22:
            var1 = 17;
            var1 = var6[var1];
            _fun0005_ip = 23; continue _fun0005;
case 4:
            var5 = 18;
            var1 = var6[var5];
case 23:
            _fun0005_ip = 24; continue _fun0005;
case 20:
            var5 = 17;
            var1 = var6[var5];
case 24:
            var1 = var3.bind(var4)(var1);
            _fun0005_ip = 25; continue _fun0005;
case 19:
            if(var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var2 = 16;
            var2 = var6[var2];
            _fun0005_ip = 17; continue _fun0005;
case 26:
            var5 = 15;
            var2 = var6[var5];
case 17:
            var1 = var3.bind(var4)(var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var14 = var1.Object;
    var12 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var14)(var3, var1, var9);
    var1 = 0;
    var12 = var11[var1];
    var9 = metroImportAll;
    var1 = undefined;
    var9 = var9.bind(var1)(var12);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.NativeModules;
    var12 = 2;
    var12 = var11[var12];
    var12 = var13.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 3;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.ApplicationStreamStates;
    var _closure1_slot5 = var12;
    var12 = 4;
    var12 = var11[var12];
    var13 = var10.bind(var1)(var12);
    var12 = var13.getSystemVersionMajor;
    var12 = var12.bind(var13)();
    var _closure1_slot6 = var12;
    var9 = var9.BroadcastUploadManager;
    var _closure1_slot7 = var9;
    var9 = 23;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/video_calls/native/useScreenshareUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function useScreenshareUtils(arg1) {
        var9 = arg1;
        var _closure2_slot0 = var9;
        var5 = _closure1_slot1;
        var11 = _closure1_slot2;
        var3 = 13;
        var3 = var11[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var8 = var3.bind(var4)(var9);
        var _closure2_slot1 = var8;
        var3 = _closure1_slot11;
        var7 = var3.bind(var4)();
        var _closure2_slot2 = var7;
        var3 = 19;
        var3 = var11[var3];
        var10 = var5.bind(var4)(var3);
        var6 = var10.useConfig;
        var3 = {};
        var12 = 'useScreenshareUtils';
        var3['location'] = var12;
        var3 = var6.bind(var10)(var3);
        var6 = var3.showMobileGoLiveUpsell;
        var _closure2_slot3 = var6;
        var10 = _closure1_slot0;
        var3 = 20;
        var3 = var11[var3];
        var13 = var10.bind(var4)(var3);
        var12 = var13.useStateFromStores;
        var3 = _closure1_slot4;
        var10 = new Array(1);
        var10[0] = var3;
        var3 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUserActiveStream;
            var1 = var1.bind(var2)();
            return var1;
        };
        var10 = var12.bind(var13)(var10, var3);
        var _closure2_slot4 = var10;
        var3 = 21;
        var3 = var11[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var5 = var3.analyticsLocations;
        var _closure2_slot5 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure2_slot4;
                var1 = null;
                var5 = var1 != var2;
                if(!var5) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var1 = _closure2_slot4;
                var2 = var1.state;
                var1 = _closure1_slot5;
                var1 = var1.ACTIVE;
                var5 = var2 === var1;
case 28:
                var1 = {};
                var2 = _closure2_slot1;
                if(!var2) { _fun0006_ip = 21; continue _fun0006 }
case 30:
                var2 = _closure2_slot2;
case 21:
                var1['isFeatureEnabled'] = var2;
                var1['isActive'] = var5;
                var2 = _closure2_slot3;
                if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                if(!var5) { _fun0006_ip = 31; continue _fun0006 }
case 11:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 22;
                var4 = var9[var2];
                var7 = undefined;
                var4 = var8.bind(var7)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var9[var2];
                var2 = var8.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.CpkXwZ;
                var2 = var4.bind(var6)(var2);
                _fun0006_ip = 33; continue _fun0006;
case 31:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 22;
                var6 = var10[var4];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var10[var4];
                var4 = var9.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.fjBNo1;
                var2 = var6.bind(var7)(var4);
case 33:
                var1['text'] = var2;
                var7 = _closure1_slot12;
                var6 = {};
                var4 = _closure2_slot0;
                var6['channel'] = var4;
                var4 = _closure2_slot1;
                var6['hasPermission'] = var4;
                var6['isActive'] = var5;
                var4 = _closure2_slot2;
                var6['osRequirement'] = var4;
                var4 = _closure2_slot3;
                var6['showMobileGoLiveUpsell'] = var4;
                var3 = _closure2_slot5;
                var6['analyticsLocations'] = var3;
                var3 = undefined;
                var6 = var7.bind(var3)(var6);
                var1['onPress'] = var6;
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)(var5, var4);
                var1['imgSource'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var9;
    var3['handleCloseScreenshare'] = var8;
    var3['stopScreenshare'] = var7;
    var3['startStream'] = var6;
    var3['getOSRequirement'] = var5;
    var3['getStreamPressHandler'] = var4;
    var2 = function tryStartScreenShare(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot11;
            var1 = undefined;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0007_ip = 34; continue _fun0007 }
case 29:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 13;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.getVideoPermission;
            var4 = arg1;
            var3 = var5.bind(var6)(var4);
case 34:
            if(!var3) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var2 = _closure1_slot10;
            var2 = var2.bind(var1)();
case 35:
            return var1;
        }
    };
    var3['tryStartScreenShare'] = var2;
    return var1;
})();