// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var3 = exports;
    var22 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var22;
    var15 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot4;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var15;
    var13 = function getOverlayV3OneClickGoLive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
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
    var _closure1_slot12 = var13;
    var10 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0002_ip = 2; continue _fun0002 }
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
    var _closure1_slot13 = var10;
    var8 = function getOverlayWelcomeNotificationConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
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
    var _closure1_slot14 = var8;
    var6 = function getOverlayBugReporterConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot9;
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
    var _closure1_slot15 = var6;
    var4 = function getOverlayChatConfig(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var4;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var5 = {};
    var27 = true;
    var5['value'] = var27;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var5);
    var11 = 0;
    var5 = var22[var11];
    var1 = undefined;
    var5 = var21.bind(var1)(var5);
    var16 = var5.CommonTriggerPoints;
    var7 = 1;
    var5 = var22[var7];
    var14 = var21.bind(var1)(var5);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-06_overlay_render_timeout', 'label': 'Overlay Render Timeout'};
    var5 = var16.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var5;
    var5 = {'shortTimeout': 8000, 'longTimeout': 12000};
    var9['defaultConfig'] = var5;
    var5 = {'id': 1, 'label': 'Shortest Timeouts (2s, 3s)'};
    var17 = {'shortTimeout': 2000, 'longTimeout': 3000};
    var5['config'] = var17;
    var17 = new Array(3);
    var17[0] = var5;
    var18 = {'id': 2, 'label': 'Medium Timeouts (4s, 6s)'};
    var5 = 2;
    var19 = {'shortTimeout': 4000, 'longTimeout': 6000};
    var18['config'] = var19;
    var17[1] = var18;
    var18 = {'id': 3, 'label': 'Longer Timeouts (16s, 24s)'};
    var19 = {'shortTimeout': 16000, 'longTimeout': 24000};
    var18['config'] = var19;
    var17[2] = var18;
    var9['treatments'] = var17;
    var19 = var12.bind(var14)(var9);
    var _closure1_slot2 = var19;
    var9 = var22[var7];
    var14 = var21.bind(var1)(var9);
    var12 = var14.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var16 = var16.CONNECTION_OPEN;
    var9['commonTriggerPoint'] = var16;
    var16 = {};
    var26 = false;
    var16['enabled'] = var26;
    var9['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var16 = {};
    var16['enabled'] = var27;
    var17['config'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var9['treatments'] = var16;
    var18 = var12.bind(var14)(var9);
    var _closure1_slot3 = var18;
    var17 = {};
    var17['GREEN_BUTTON_WITH_TEXT'] = var11;
    var9 = 'GREEN_BUTTON_WITH_TEXT';
    var17[var11] = var9;
    var17['GRAY_BUTTON_WITH_TEXT'] = var7;
    var9 = 'GRAY_BUTTON_WITH_TEXT';
    var17[var7] = var9;
    var17['SINGLE_ICON_BUTTON'] = var5;
    var9 = 'SINGLE_ICON_BUTTON';
    var17[var5] = var9;
    var9 = var22[var5];
    var12 = var21.bind(var1)(var9);
    var11 = var12.createApexExperiment;
    var9 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var14 = {'enabled': false, 'designVariant': null};
    var9['defaultConfig'] = var14;
    var14 = {};
    var16 = {};
    var16['enabled'] = var27;
    var20 = var17.GREEN_BUTTON_WITH_TEXT;
    var16['designVariant'] = var20;
    var14[1] = var16;
    var16 = {};
    var16['enabled'] = var27;
    var20 = var17.GRAY_BUTTON_WITH_TEXT;
    var16['designVariant'] = var20;
    var14[2] = var16;
    var16 = {};
    var16['enabled'] = var27;
    var20 = var17.SINGLE_ICON_BUTTON;
    var16['designVariant'] = var20;
    var14[3] = var16;
    var9['variations'] = var14;
    var16 = var11.bind(var12)(var9);
    var _closure1_slot4 = var16;
    var9 = var22[var7];
    var12 = var21.bind(var1)(var9);
    var11 = var12.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var14 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var9['defaultConfig'] = var14;
    var20 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var14 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var20['config'] = var14;
    var14 = new Array(2);
    var14[0] = var20;
    var20 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var23 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var20['config'] = var23;
    var14[1] = var20;
    var9['treatments'] = var14;
    var14 = var11.bind(var12)(var9);
    var _closure1_slot5 = var14;
    var9 = var22[var7];
    var12 = var21.bind(var1)(var9);
    var11 = var12.createExperiment;
    var9 = {'id': '2025-10_overlay_default_keybind', 'label': 'Overlay Default Keybind', 'kind': 'user'};
    var20 = {};
    var20['keybindOverride'] = var1;
    var9['defaultConfig'] = var20;
    var23 = {'id': 1, 'label': 'Ctrl + Tab Keybind'};
    var20 = {};
    var24 = 'ctrl+tab';
    var20['keybindOverride'] = var24;
    var23['config'] = var20;
    var20 = new Array(3);
    var20[0] = var23;
    var23 = {'id': 2, 'label': 'Alt + X Keybind'};
    var24 = {};
    var25 = 'alt+x';
    var24['keybindOverride'] = var25;
    var23['config'] = var24;
    var20[1] = var23;
    var23 = {'id': 3, 'label': 'Ctrl + L Keybind'};
    var24 = {};
    var25 = 'ctrl+l';
    var24['keybindOverride'] = var25;
    var23['config'] = var24;
    var20[2] = var23;
    var9['treatments'] = var20;
    var12 = var11.bind(var12)(var9);
    var _closure1_slot6 = var12;
    var9 = var22[var7];
    var23 = var21.bind(var1)(var9);
    var11 = var23.createExperiment;
    var9 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var20 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var9['defaultConfig'] = var20;
    var20 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var24 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var20['config'] = var24;
    var24 = new Array(5);
    var24[0] = var20;
    var20 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var25 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var20['config'] = var25;
    var24[1] = var20;
    var20 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var25 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var20['config'] = var25;
    var24[2] = var20;
    var25 = {'id': 4, 'label': 'Notifications Default Off'};
    var20 = 4;
    var28 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var25['config'] = var28;
    var24[3] = var25;
    var25 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var28 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var25['config'] = var28;
    var24[4] = var25;
    var9['treatments'] = var24;
    var11 = var11.bind(var23)(var9);
    var _closure1_slot7 = var11;
    var9 = var22[var7];
    var24 = var21.bind(var1)(var9);
    var23 = var24.createExperiment;
    var9 = {'id': '2025-11_overlay_welcome_notification', 'label': 'Overlay Welcome Notification', 'kind': 'user'};
    var25 = {};
    var25['enabled'] = var26;
    var9['defaultConfig'] = var25;
    var28 = {'id': 1, 'label': 'Modular Experience'};
    var25 = {};
    var25['enabled'] = var27;
    var28['config'] = var25;
    var25 = new Array(1);
    var25[0] = var28;
    var9['treatments'] = var25;
    var9 = var23.bind(var24)(var9);
    var _closure1_slot8 = var9;
    var7 = var22[var7];
    var24 = var21.bind(var1)(var7);
    var23 = var24.createExperiment;
    var7 = {'id': '2025-11_overlay_bug_reporter', 'label': 'Overlay Bug Reporter', 'kind': 'user'};
    var25 = {};
    var25['enabled'] = var26;
    var7['defaultConfig'] = var25;
    var26 = {'id': 1, 'label': 'Enable Bug Reporter'};
    var25 = {};
    var25['enabled'] = var27;
    var26['config'] = var25;
    var25 = new Array(1);
    var25[0] = var26;
    var7['treatments'] = var25;
    var7 = var23.bind(var24)(var7);
    var _closure1_slot9 = var7;
    var5 = var22[var5];
    var24 = var21.bind(var1)(var5);
    var23 = var24.createApexExperiment;
    var5 = {'name': '2025-11-overlay-chat', 'kind': 'user'};
    var25 = {'hasChat': false, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var5['defaultConfig'] = var25;
    var25 = {};
    var26 = {'hasChat': true, 'hasFriendList': false, 'showNowPlayingForDifferentGames': false};
    var25[1] = var26;
    var26 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': false};
    var25[2] = var26;
    var26 = {'hasChat': true, 'hasFriendList': true, 'showNowPlayingForDifferentGames': true};
    var25[3] = var26;
    var5['variations'] = var25;
    var5 = var23.bind(var24)(var5);
    var _closure1_slot10 = var5;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/overlay/OverlayV3Experiment.tsx';
    var20 = var21.bind(var22)(var20);
    var3['OverlayRenderTimeoutExperiment'] = var19;
    var19 = function getOverlayRenderTimeout(arg1) {
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
            return var1;
        }
    };
    var3['getOverlayRenderTimeout'] = var19;
    var3['OverlayDefaultDisableExperiment'] = var18;
    var18 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot3;
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 2; continue _fun0006 }
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
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getOverlayDefaultDisable'] = var18;
    var3['StreamWatchDesignVariations'] = var17;
    var3['OverlayStreamWatchNudgeExperiment'] = var16;
    var3['getOverlayStreamWatchNudgeConfig'] = var15;
    var15 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot4;
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 2; continue _fun0007 }
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
    var3['getOverlayDefaultKeybind'] = var12;
    var3['OverlayNegativeWidgetExperiment'] = var11;
    var11 = function getOverlayNegativeWidgetExperimentBucket(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = _closure1_slot13;
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
            var3 = _closure1_slot7;
            var3 = var3.definition;
            var3 = var3.defaultConfig;
            var3 = var4.bind(var6)(var3, var5);
            if(var3) { _fun0008_ip = 4; continue _fun0008 }
case 5:
            var2 = _closure1_slot7;
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
            if(var3) { _fun0008_ip = 6; continue _fun0008 }
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
        var3 = _closure1_slot9;
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
        var3 = _closure1_slot10;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayChat'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot11;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot12;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot13;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot14;
        var4 = var4.bind(var1)(var3);
        var4 = _closure1_slot15;
        var4 = var4.bind(var1)(var3);
        var2 = _closure1_slot16;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['trackOverlayInitializedExperiments'] = var2;
    return var1;
})();