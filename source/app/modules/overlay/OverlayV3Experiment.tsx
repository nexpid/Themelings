// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var3 = exports;
    var18 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var18;
    var13 = function getOverlayV3OneClickGoLive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot3;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var13;
    var10 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot5;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var10;
    var8 = function getOverlayWelcomeNotificationConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot6;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var8;
    var6 = function getOverlayBugReporterConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot7;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var6;
    var4 = function getOverlayChatConfig(arg1) {
        var3 = _closure1_slot8;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var5 = {};
    var23 = true;
    var5['value'] = var23;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var18[var1];
    var1 = undefined;
    var5 = var17.bind(var1)(var5);
    var12 = var5.CommonTriggerPoints;
    var7 = 1;
    var5 = var18[var7];
    var11 = var17.bind(var1)(var5);
    var9 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var12 = var12.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var12;
    var12 = {};
    var22 = false;
    var12['enabled'] = var22;
    var5['defaultConfig'] = var12;
    var14 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var12 = {};
    var12['enabled'] = var23;
    var14['config'] = var12;
    var12 = new Array(1);
    var12[0] = var14;
    var5['treatments'] = var12;
    var15 = var9.bind(var11)(var5);
    var _closure1_slot2 = var15;
    var5 = var18[var7];
    var11 = var17.bind(var1)(var5);
    var9 = var11.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var12 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var5['defaultConfig'] = var12;
    var14 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var12 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var14['config'] = var12;
    var12 = new Array(2);
    var12[0] = var14;
    var14 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var16 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var14['config'] = var16;
    var12[1] = var14;
    var5['treatments'] = var12;
    var14 = var9.bind(var11)(var5);
    var _closure1_slot3 = var14;
    var5 = var18[var7];
    var12 = var17.bind(var1)(var5);
    var11 = var12.createExperiment;
    var9 = {'id': '2025-10_overlay_default_keybind', 'label': 'Overlay Default Keybind', 'kind': 'user'};
    var5 = {};
    var5['keybindOverride'] = var1;
    var9['defaultConfig'] = var5;
    var5 = {'id': 1, 'label': 'Ctrl + Tab Keybind'};
    var16 = {};
    var19 = 'ctrl+tab';
    var16['keybindOverride'] = var19;
    var5['config'] = var16;
    var16 = new Array(3);
    var16[0] = var5;
    var5 = {'id': 2, 'label': 'Alt + X Keybind'};
    var19 = {};
    var20 = 'alt+x';
    var19['keybindOverride'] = var20;
    var5['config'] = var19;
    var16[1] = var5;
    var19 = {'id': 3, 'label': 'Ctrl + L Keybind'};
    var5 = 3;
    var20 = {};
    var21 = 'ctrl+l';
    var20['keybindOverride'] = var21;
    var19['config'] = var20;
    var16[2] = var19;
    var9['treatments'] = var16;
    var12 = var11.bind(var12)(var9);
    var _closure1_slot4 = var12;
    var9 = var18[var7];
    var19 = var17.bind(var1)(var9);
    var11 = var19.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var16 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var9['defaultConfig'] = var16;
    var16 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var20 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var16['config'] = var20;
    var20 = new Array(5);
    var20[0] = var16;
    var16 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var21 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var16['config'] = var21;
    var20[1] = var16;
    var16 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var21 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var16['config'] = var21;
    var20[2] = var16;
    var21 = {'id': 4, 'label': 'Notifications Default Off'};
    var16 = 4;
    var24 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var21['config'] = var24;
    var20[3] = var21;
    var21 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var24 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var21['config'] = var24;
    var20[4] = var21;
    var9['treatments'] = var20;
    var11 = var11.bind(var19)(var9);
    var _closure1_slot5 = var11;
    var9 = var18[var7];
    var20 = var17.bind(var1)(var9);
    var19 = var20.createExperiment;
    var9 = {'id': '2025-11_overlay_welcome_notification', 'label': 'Overlay Welcome Notification', 'kind': 'user'};
    var21 = {};
    var21['enabled'] = var22;
    var9['defaultConfig'] = var21;
    var24 = {'id': 1, 'label': 'Modular Experience'};
    var21 = {};
    var21['enabled'] = var23;
    var24['config'] = var21;
    var21 = new Array(1);
    var21[0] = var24;
    var9['treatments'] = var21;
    var9 = var19.bind(var20)(var9);
    var _closure1_slot6 = var9;
    var7 = var18[var7];
    var20 = var17.bind(var1)(var7);
    var19 = var20.createExperiment;
    var7 = {'id': '2025-11_overlay_bug_reporter', 'label': 'Overlay Bug Reporter', 'kind': 'user'};
    var21 = {};
    var21['enabled'] = var22;
    var7['defaultConfig'] = var21;
    var22 = {'id': 1, 'label': 'Enable Bug Reporter'};
    var21 = {};
    var21['enabled'] = var23;
    var22['config'] = var21;
    var21 = new Array(1);
    var21[0] = var22;
    var7['treatments'] = var21;
    var7 = var19.bind(var20)(var7);
    var _closure1_slot7 = var7;
    var5 = var18[var5];
    var20 = var17.bind(var1)(var5);
    var19 = var20.createApexExperiment;
    var5 = {'name': '2025-11-overlay-chat', 'kind': 'user'};
    var21 = {'hasChat': false, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var5['defaultConfig'] = var21;
    var21 = {};
    var22 = {'hasChat': true, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var21[1] = var22;
    var22 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': false};
    var21[2] = var22;
    var22 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': true};
    var21[3] = var22;
    var5['variations'] = var21;
    var5 = var19.bind(var20)(var5);
    var _closure1_slot8 = var5;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/overlay/OverlayV3Experiment.tsx';
    var16 = var17.bind(var18)(var16);
    var3['OverlayDefaultDisableExperiment'] = var15;
    var15 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var15;
    var15 = function getOverlayDefaultDisable(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getOverlayDefaultDisable'] = var15;
    var3['OverlayV3OneClickGoLiveExperiment'] = var14;
    var3['getOverlayV3OneClickGoLive'] = var13;
    var3['OverlayDefaultKeybindOverrideExperiment'] = var12;
    var12 = function getOverlayDefaultKeybind(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 2; continue _fun0006 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot4;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var1 = arg1;
            var2['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getOverlayDefaultKeybind'] = var12;
    var3['OverlayNegativeWidgetExperiment'] = var11;
    var11 = function getOverlayNegativeWidgetExperimentBucket(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = _closure1_slot10;
            var6 = undefined;
            var4 = arg1;
            var3 = false;
            var5 = var5.bind(var6)(var4, var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot5;
            var3 = var3.definition;
            var3 = var3.defaultConfig;
            var3 = var4.bind(var6)(var3, var5);
            if(var3) { _fun0007_ip = 4; continue _fun0007 }
case 5:
            var2 = _closure1_slot5;
            var2 = var2.definition;
            var3 = var2.treatments;
            var2 = var3.find;
            var1 = function(arg1) {
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var1 = arg1;
                var2 = var1.config;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = 'control';
            if(var3) { _fun0007_ip = 6; continue _fun0007 }
case 7:
            var4 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'treatment-';
            var1 = var3.bind(var2)(var4);
case 6:
            return var1;
case 4:
            var1 = 'control';
            return var1;
        }
    };
    var3['getOverlayNegativeWidgetExperimentBucket'] = var11;
    var3['getOverlayNegativeWidgetConfig'] = var10;
    var3['OverlayWelcomeNotificationExperiment'] = var9;
    var3['getOverlayWelcomeNotificationConfig'] = var8;
    var3['OverlayBugReporterExperiment'] = var7;
    var3['getOverlayBugReporterConfig'] = var6;
    var6 = function useOverlayBugReporter(arg1) {
        var3 = _closure1_slot7;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayBugReporter'] = var6;
    var3['OverlayChatExperiment'] = var5;
    var3['getOverlayChatConfig'] = var4;
    var4 = function useOverlayChat(arg1) {
        var3 = _closure1_slot8;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayChat'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot9;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot10;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot11;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot12;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot13;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['trackOverlayInitializedExperiments'] = var2;
    return var1;
})();