// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var20 = require;
    var3 = exports;
    var21 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var21;
    var15 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var15;
    var13 = function getOverlayV3OneClickGoLive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
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
    var _closure1_slot11 = var13;
    var10 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 2; continue _fun0002 }
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
    var _closure1_slot12 = var10;
    var8 = function getOverlayWelcomeNotificationConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
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
    var _closure1_slot13 = var8;
    var6 = function getOverlayBugReporterConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot8;
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
    var _closure1_slot14 = var6;
    var4 = function getOverlayChatConfig(arg1) {
        var3 = _closure1_slot9;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot15 = var4;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var5 = {};
    var26 = true;
    var5['value'] = var26;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var5);
    var9 = 0;
    var5 = var21[var9];
    var1 = undefined;
    var5 = var20.bind(var1)(var5);
    var14 = var5.CommonTriggerPoints;
    var7 = 1;
    var5 = var21[var7];
    var12 = var20.bind(var1)(var5);
    var11 = var12.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var14 = var14.CONNECTION_OPEN;
    var5['commonTriggerPoint'] = var14;
    var14 = {};
    var25 = false;
    var14['enabled'] = var25;
    var5['defaultConfig'] = var14;
    var16 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var14 = {};
    var14['enabled'] = var26;
    var16['config'] = var14;
    var14 = new Array(1);
    var14[0] = var16;
    var5['treatments'] = var14;
    var18 = var11.bind(var12)(var5);
    var _closure1_slot2 = var18;
    var17 = {};
    var17['GREEN_BUTTON_WITH_TEXT'] = var9;
    var5 = 'GREEN_BUTTON_WITH_TEXT';
    var17[var9] = var5;
    var17['GRAY_BUTTON_WITH_TEXT'] = var7;
    var5 = 'GRAY_BUTTON_WITH_TEXT';
    var17[var7] = var5;
    var5 = 2;
    var17['SINGLE_ICON_BUTTON'] = var5;
    var9 = 'SINGLE_ICON_BUTTON';
    var17[var5] = var9;
    var9 = var21[var5];
    var12 = var20.bind(var1)(var9);
    var11 = var12.createApexExperiment;
    var9 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var14 = {'enabled': false, 'designVariant': null};
    var9['defaultConfig'] = var14;
    var14 = {};
    var16 = {};
    var16['enabled'] = var26;
    var19 = var17.GREEN_BUTTON_WITH_TEXT;
    var16['designVariant'] = var19;
    var14[1] = var16;
    var16 = {};
    var16['enabled'] = var26;
    var19 = var17.GRAY_BUTTON_WITH_TEXT;
    var16['designVariant'] = var19;
    var14[2] = var16;
    var16 = {};
    var16['enabled'] = var26;
    var19 = var17.SINGLE_ICON_BUTTON;
    var16['designVariant'] = var19;
    var14[3] = var16;
    var9['variations'] = var14;
    var16 = var11.bind(var12)(var9);
    var _closure1_slot3 = var16;
    var9 = var21[var7];
    var12 = var20.bind(var1)(var9);
    var11 = var12.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var14 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var9['defaultConfig'] = var14;
    var19 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var14 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var19['config'] = var14;
    var14 = new Array(2);
    var14[0] = var19;
    var19 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var22 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var19['config'] = var22;
    var14[1] = var19;
    var9['treatments'] = var14;
    var14 = var11.bind(var12)(var9);
    var _closure1_slot4 = var14;
    var9 = var21[var7];
    var12 = var20.bind(var1)(var9);
    var11 = var12.createExperiment;
    var9 = {'id': '2025-10_overlay_default_keybind', 'label': 'Overlay Default Keybind', 'kind': 'user'};
    var19 = {};
    var19['keybindOverride'] = var1;
    var9['defaultConfig'] = var19;
    var22 = {'id': 1, 'label': 'Ctrl + Tab Keybind'};
    var19 = {};
    var23 = 'ctrl+tab';
    var19['keybindOverride'] = var23;
    var22['config'] = var19;
    var19 = new Array(3);
    var19[0] = var22;
    var22 = {'id': 2, 'label': 'Alt + X Keybind'};
    var23 = {};
    var24 = 'alt+x';
    var23['keybindOverride'] = var24;
    var22['config'] = var23;
    var19[1] = var22;
    var22 = {'id': 3, 'label': 'Ctrl + L Keybind'};
    var23 = {};
    var24 = 'ctrl+l';
    var23['keybindOverride'] = var24;
    var22['config'] = var23;
    var19[2] = var22;
    var9['treatments'] = var19;
    var12 = var11.bind(var12)(var9);
    var _closure1_slot5 = var12;
    var9 = var21[var7];
    var22 = var20.bind(var1)(var9);
    var11 = var22.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var19 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var9['defaultConfig'] = var19;
    var19 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var23 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var19['config'] = var23;
    var23 = new Array(5);
    var23[0] = var19;
    var19 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var24 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var19['config'] = var24;
    var23[1] = var19;
    var19 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var24 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var19['config'] = var24;
    var23[2] = var19;
    var24 = {'id': 4, 'label': 'Notifications Default Off'};
    var19 = 4;
    var27 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var24['config'] = var27;
    var23[3] = var24;
    var24 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var27 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var24['config'] = var27;
    var23[4] = var24;
    var9['treatments'] = var23;
    var11 = var11.bind(var22)(var9);
    var _closure1_slot6 = var11;
    var9 = var21[var7];
    var23 = var20.bind(var1)(var9);
    var22 = var23.createExperiment;
    var9 = {'id': '2025-11_overlay_welcome_notification', 'label': 'Overlay Welcome Notification', 'kind': 'user'};
    var24 = {};
    var24['enabled'] = var25;
    var9['defaultConfig'] = var24;
    var27 = {'id': 1, 'label': 'Modular Experience'};
    var24 = {};
    var24['enabled'] = var26;
    var27['config'] = var24;
    var24 = new Array(1);
    var24[0] = var27;
    var9['treatments'] = var24;
    var9 = var22.bind(var23)(var9);
    var _closure1_slot7 = var9;
    var7 = var21[var7];
    var23 = var20.bind(var1)(var7);
    var22 = var23.createExperiment;
    var7 = {'id': '2025-11_overlay_bug_reporter', 'label': 'Overlay Bug Reporter', 'kind': 'user'};
    var24 = {};
    var24['enabled'] = var25;
    var7['defaultConfig'] = var24;
    var25 = {'id': 1, 'label': 'Enable Bug Reporter'};
    var24 = {};
    var24['enabled'] = var26;
    var25['config'] = var24;
    var24 = new Array(1);
    var24[0] = var25;
    var7['treatments'] = var24;
    var7 = var22.bind(var23)(var7);
    var _closure1_slot8 = var7;
    var5 = var21[var5];
    var23 = var20.bind(var1)(var5);
    var22 = var23.createApexExperiment;
    var5 = {'name': '2025-11-overlay-chat', 'kind': 'user'};
    var24 = {'hasChat': false, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var5['defaultConfig'] = var24;
    var24 = {};
    var25 = {'hasChat': true, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var24[1] = var25;
    var25 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': false};
    var24[2] = var25;
    var25 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': true};
    var24[3] = var25;
    var5['variations'] = var24;
    var5 = var22.bind(var23)(var5);
    var _closure1_slot9 = var5;
    var19 = var21[var19];
    var21 = var20.bind(var1)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/overlay/OverlayV3Experiment.tsx';
    var19 = var20.bind(var21)(var19);
    var3['OverlayDefaultDisableExperiment'] = var18;
    var18 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var18;
    var18 = function getOverlayDefaultDisable(arg1) {
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
    var3['getOverlayDefaultDisable'] = var18;
    var3['StreamWatchDesignVariations'] = var17;
    var3['OverlayStreamWatchNudgeExperiment'] = var16;
    var3['getOverlayStreamWatchNudgeConfig'] = var15;
    var15 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayStreamWatchNudge'] = var15;
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
    var3['getOverlayDefaultKeybind'] = var12;
    var3['OverlayNegativeWidgetExperiment'] = var11;
    var11 = function getOverlayNegativeWidgetExperimentBucket(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = _closure1_slot12;
            var6 = undefined;
            var4 = arg1;
            var3 = false;
            var5 = var5.bind(var6)(var4, var3);
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 3;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = _closure1_slot6;
            var3 = var3.definition;
            var3 = var3.defaultConfig;
            var3 = var4.bind(var6)(var3, var5);
            if(var3) { _fun0007_ip = 4; continue _fun0007 }
case 5:
            var2 = _closure1_slot6;
            var2 = var2.definition;
            var3 = var2.treatments;
            var2 = var3.find;
            var1 = function(arg1) {
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
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
        var3 = _closure1_slot8;
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
        var3 = _closure1_slot9;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayChat'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot10;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot11;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot12;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot13;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot14;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot15;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['trackOverlayInitializedExperiments'] = var2;
    return var1;
})();