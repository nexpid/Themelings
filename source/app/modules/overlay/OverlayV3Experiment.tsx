// app/modules/overlay/OverlayV3Experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var3 = exports;
    var22 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var22;
    var18 = function useOverlayV3(arg1) {
        var3 = _closure1_slot2;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var18;
    var17 = function getUseOverlayV3(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
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
    var _closure1_slot12 = var17;
    var11 = function getOverlayStreamWatchNudgeConfig(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var11;
    var9 = function getOverlayV3OneClickGoLive(arg1) {
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
    var _closure1_slot14 = var9;
    var6 = function getOverlayNegativeWidgetConfig(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 2; continue _fun0003 }
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
    var4 = function getOverlayWelcomeNotificationConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot10;
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
    var _closure1_slot16 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var27 = true;
    var5['value'] = var27;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var10 = 0;
    var5 = var22[var10];
    var1 = undefined;
    var5 = var21.bind(var1)(var5);
    var14 = var5.CommonTriggerPoints;
    var5 = 1;
    var7 = var22[var5];
    var13 = var21.bind(var1)(var7);
    var12 = var13.createExperiment;
    var8 = {'kind': 'user', 'id': '2024-10_overlay_v3', 'label': 'Overlay V3 Shared Context OOP'};
    var7 = var14.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var7;
    var26 = false;
    var7 = {'overlayV3tech': false, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var8['defaultConfig'] = var7;
    var7 = {'id': 1, 'label': 'Use Overlay V3, All features included.'};
    var15 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': true};
    var7['config'] = var15;
    var15 = new Array(4);
    var15[0] = var7;
    var16 = {'id': 2, 'label': 'Use Overlay V3, Minus "Now Playing" Notif.'};
    var7 = 2;
    var19 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': true, 'allowNowPlaying': false};
    var16['config'] = var19;
    var15[1] = var16;
    var16 = {'id': 3, 'label': 'Use Overlay V3 minus any activity'};
    var19 = {'overlayV3tech': true, 'overlayV3UI': true, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var16['config'] = var19;
    var15[2] = var16;
    var16 = {'id': 4, 'label': 'Use Overlay V3 tech with Overlay 2 UI'};
    var20 = 4;
    var19 = {'overlayV3tech': true, 'overlayV3UI': false, 'allowActivityWidget': false, 'allowNowPlaying': false};
    var16['config'] = var19;
    var15[3] = var16;
    var8['treatments'] = var15;
    var19 = var12.bind(var13)(var8);
    var _closure1_slot2 = var19;
    var8 = var22[var5];
    var13 = var21.bind(var1)(var8);
    var12 = var13.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-06_overlay_raf_manager', 'label': 'Overlay RAF Manager'};
    var15 = var14.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var15;
    var15 = {};
    var15['enabled'] = var26;
    var8['defaultConfig'] = var15;
    var16 = {'id': 1, 'label': 'Enable RAF Manager'};
    var15 = {};
    var15['enabled'] = var27;
    var16['config'] = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var8['treatments'] = var15;
    var16 = var12.bind(var13)(var8);
    var _closure1_slot3 = var16;
    var8 = var22[var5];
    var13 = var21.bind(var1)(var8);
    var12 = var13.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-06_overlay_render_timeout', 'label': 'Overlay Render Timeout'};
    var15 = var14.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var15;
    var15 = {'shortTimeout': 8000, 'longTimeout': 12000};
    var8['defaultConfig'] = var15;
    var23 = {'id': 1, 'label': 'Shortest Timeouts (2s, 3s)'};
    var15 = {'shortTimeout': 2000, 'longTimeout': 3000};
    var23['config'] = var15;
    var15 = new Array(3);
    var15[0] = var23;
    var23 = {'id': 2, 'label': 'Medium Timeouts (4s, 6s)'};
    var24 = {'shortTimeout': 4000, 'longTimeout': 6000};
    var23['config'] = var24;
    var15[1] = var23;
    var23 = {'id': 3, 'label': 'Longer Timeouts (16s, 24s)'};
    var24 = {'shortTimeout': 16000, 'longTimeout': 24000};
    var23['config'] = var24;
    var15[2] = var23;
    var8['treatments'] = var15;
    var15 = var12.bind(var13)(var8);
    var _closure1_slot4 = var15;
    var8 = var22[var5];
    var13 = var21.bind(var1)(var8);
    var12 = var13.createExperiment;
    var8 = {'kind': 'user', 'id': '2025-07_overlay_default_disable', 'label': 'Overlay Default Disable'};
    var14 = var14.CONNECTION_OPEN;
    var8['commonTriggerPoint'] = var14;
    var14 = {};
    var14['enabled'] = var26;
    var8['defaultConfig'] = var14;
    var23 = {'id': 1, 'label': 'Enable Default Disable Behavior'};
    var14 = {};
    var14['enabled'] = var27;
    var23['config'] = var14;
    var14 = new Array(1);
    var14[0] = var23;
    var8['treatments'] = var14;
    var14 = var12.bind(var13)(var8);
    var _closure1_slot5 = var14;
    var13 = {};
    var13['GREEN_BUTTON_WITH_TEXT'] = var10;
    var8 = 'GREEN_BUTTON_WITH_TEXT';
    var13[var10] = var8;
    var13['GRAY_BUTTON_WITH_TEXT'] = var5;
    var8 = 'GRAY_BUTTON_WITH_TEXT';
    var13[var5] = var8;
    var13['SINGLE_ICON_BUTTON'] = var7;
    var8 = 'SINGLE_ICON_BUTTON';
    var13[var7] = var8;
    var7 = var22[var7];
    var10 = var21.bind(var1)(var7);
    var8 = var10.createApexExperiment;
    var7 = {'name': '2025-08-overlay-stream-watch-nudge', 'kind': 'user'};
    var12 = {'enabled': false, 'designVariant': null};
    var7['defaultConfig'] = var12;
    var12 = {};
    var23 = {};
    var23['enabled'] = var27;
    var24 = var13.GREEN_BUTTON_WITH_TEXT;
    var23['designVariant'] = var24;
    var12[1] = var23;
    var23 = {};
    var23['enabled'] = var27;
    var24 = var13.GRAY_BUTTON_WITH_TEXT;
    var23['designVariant'] = var24;
    var12[2] = var23;
    var23 = {};
    var23['enabled'] = var27;
    var24 = var13.SINGLE_ICON_BUTTON;
    var23['designVariant'] = var24;
    var12[3] = var23;
    var7['variations'] = var12;
    var12 = var8.bind(var10)(var7);
    var _closure1_slot6 = var12;
    var7 = var22[var5];
    var10 = var21.bind(var1)(var7);
    var8 = var10.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-10_overlay_v3_one_click_go_live', 'label': 'Overlay V3 One Click Go Live'};
    var23 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': false};
    var7['defaultConfig'] = var23;
    var24 = {'id': 1, 'label': 'Use Stream CTA Copy'};
    var23 = {'oneClickGoLiveEnabled': false, 'useStreamCtaCopy': true};
    var24['config'] = var23;
    var23 = new Array(2);
    var23[0] = var24;
    var24 = {'id': 2, 'label': 'Enable One Click Go Live with Stream CTA Copy'};
    var25 = {'oneClickGoLiveEnabled': true, 'useStreamCtaCopy': true};
    var24['config'] = var25;
    var23[1] = var24;
    var7['treatments'] = var23;
    var10 = var8.bind(var10)(var7);
    var _closure1_slot7 = var10;
    var7 = var22[var5];
    var23 = var21.bind(var1)(var7);
    var8 = var23.createExperiment;
    var7 = {'id': '2025-10_overlay_default_keybind', 'label': 'Overlay Default Keybind', 'kind': 'user'};
    var24 = {};
    var24['keybindOverride'] = var1;
    var7['defaultConfig'] = var24;
    var25 = {'id': 1, 'label': 'Ctrl + Tab Keybind'};
    var24 = {};
    var28 = 'ctrl+tab';
    var24['keybindOverride'] = var28;
    var25['config'] = var24;
    var24 = new Array(3);
    var24[0] = var25;
    var25 = {'id': 2, 'label': 'Alt + X Keybind'};
    var28 = {};
    var29 = 'alt+x';
    var28['keybindOverride'] = var29;
    var25['config'] = var28;
    var24[1] = var25;
    var25 = {'id': 3, 'label': 'Ctrl + L Keybind'};
    var28 = {};
    var29 = 'ctrl+l';
    var28['keybindOverride'] = var29;
    var25['config'] = var28;
    var24[2] = var25;
    var7['treatments'] = var24;
    var8 = var8.bind(var23)(var7);
    var _closure1_slot8 = var8;
    var7 = var22[var5];
    var24 = var21.bind(var1)(var7);
    var23 = var24.createExperiment;
    var7 = {'kind': 'user', 'id': '2025-10_overlay_negative_widget_testing', 'label': 'Overlay Negative Widget Testing'};
    var25 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var7['defaultConfig'] = var25;
    var28 = {'id': 1, 'label': 'Voice Widget Default Unpinned'};
    var25 = {'voiceWidgetDefaultUnpinned': true, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var28['config'] = var25;
    var25 = new Array(5);
    var25[0] = var28;
    var28 = {'id': 2, 'label': 'Video Widget Default Unpinned'};
    var29 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': true, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var28['config'] = var29;
    var25[1] = var28;
    var28 = {'id': 3, 'label': 'Disable Welcome Notification'};
    var29 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': true, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': false};
    var28['config'] = var29;
    var25[2] = var28;
    var28 = {'id': 4, 'label': 'Notifications Default Off'};
    var29 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': true, 'unlockedOnlyDefaultOverlay': false};
    var28['config'] = var29;
    var25[3] = var28;
    var28 = {'id': 5, 'label': 'Unlocked Only Default Overlay'};
    var29 = {'voiceWidgetDefaultUnpinned': false, 'videoWidgetDefaultUnpinned': false, 'disableWelcomeNotification': false, 'notificationsDefaultOff': false, 'unlockedOnlyDefaultOverlay': true};
    var28['config'] = var29;
    var25[4] = var28;
    var7['treatments'] = var25;
    var7 = var23.bind(var24)(var7);
    var _closure1_slot9 = var7;
    var5 = var22[var5];
    var24 = var21.bind(var1)(var5);
    var23 = var24.createExperiment;
    var5 = {'id': '2025-11_overlay_welcome_notification', 'label': 'Overlay Welcome Notification', 'kind': 'user'};
    var25 = {};
    var25['enabled'] = var26;
    var5['defaultConfig'] = var25;
    var26 = {'id': 1, 'label': 'Modular Experience'};
    var25 = {};
    var25['enabled'] = var27;
    var26['config'] = var25;
    var25 = new Array(1);
    var25[0] = var26;
    var5['treatments'] = var25;
    var5 = var23.bind(var24)(var5);
    var _closure1_slot10 = var5;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = 'modules/overlay/OverlayV3Experiment.tsx';
    var20 = var21.bind(var22)(var20);
    var3['OverlayV3Experiment'] = var19;
    var3['useOverlayV3'] = var18;
    var3['getUseOverlayV3'] = var17;
    var17 = function getUseAnyOverlayV3(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0005_ip = 2; continue _fun0005 }
case 3:
            var4 = true;
case 2:
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.overlayV3tech;
            return var1;
        }
    };
    var3['getUseAnyOverlayV3'] = var17;
    var17 = function useAnyOverlayV3(arg1) {
        var3 = _closure1_slot11;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.overlayV3tech;
        return var1;
    };
    var3['useAnyOverlayV3'] = var17;
    var17 = function isInOverlayNowPlayingExperiment(arg1) {
        var3 = _closure1_slot12;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var1 = var1.allowNowPlaying;
        return var1;
    };
    var3['isInOverlayNowPlayingExperiment'] = var17;
    var3['OverlayRafManagerExperiment'] = var16;
    var16 = function useOverlayRafManager(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayRafManager'] = var16;
    var16 = function getUseOverlayRafManager(arg1) {
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
            return var1;
        }
    };
    var3['getUseOverlayRafManager'] = var16;
    var3['OverlayRenderTimeoutExperiment'] = var15;
    var15 = function getOverlayRenderTimeout(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 2; continue _fun0007 }
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
    var3['getOverlayRenderTimeout'] = var15;
    var3['OverlayDefaultDisableExperiment'] = var14;
    var14 = function useOverlayDefaultDisable(arg1) {
        var3 = _closure1_slot5;
        var2 = var3.useExperiment;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var3['useOverlayDefaultDisable'] = var14;
    var14 = function getOverlayDefaultDisable(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0008_ip = 2; continue _fun0008 }
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
            var1 = var1.enabled;
            return var1;
        }
    };
    var3['getOverlayDefaultDisable'] = var14;
    var3['StreamWatchDesignVariations'] = var13;
    var3['OverlayStreamWatchNudgeExperiment'] = var12;
    var3['getOverlayStreamWatchNudgeConfig'] = var11;
    var11 = function useOverlayStreamWatchNudge(arg1) {
        var3 = _closure1_slot6;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useOverlayStreamWatchNudge'] = var11;
    var3['OverlayV3OneClickGoLiveExperiment'] = var10;
    var3['getOverlayV3OneClickGoLive'] = var9;
    var3['OverlayDefaultKeybindOverrideExperiment'] = var8;
    var8 = function getOverlayDefaultKeybind(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0009_ip = 2; continue _fun0009 }
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
    var3['getOverlayDefaultKeybind'] = var8;
    var3['OverlayNegativeWidgetExperiment'] = var7;
    var7 = function getOverlayNegativeWidgetExperimentBucket(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = _closure1_slot15;
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
            var3 = _closure1_slot9;
            var3 = var3.definition;
            var3 = var3.defaultConfig;
            var3 = var4.bind(var6)(var3, var5);
            if(var3) { _fun0010_ip = 4; continue _fun0010 }
case 5:
            var2 = _closure1_slot9;
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
            if(var3) { _fun0010_ip = 6; continue _fun0010 }
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
    var3['getOverlayNegativeWidgetExperimentBucket'] = var7;
    var3['getOverlayNegativeWidgetConfig'] = var6;
    var3['OverlayWelcomeNotificationExperiment'] = var5;
    var3['getOverlayWelcomeNotificationConfig'] = var4;
    var2 = function trackOverlayInitializedExperiments() {
        var4 = _closure1_slot13;
        var1 = undefined;
        var3 = 'OVERLAY_INITIALIZED';
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