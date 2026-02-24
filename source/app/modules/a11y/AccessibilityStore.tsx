// app/modules/a11y/AccessibilityStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = ['fontScale'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.Accessibility;
    var _closure1_slot11 = var9;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.MESSAGE_GROUP_SPACING;
    var _closure1_slot12 = var4;
    var4 = var2.DEFAULT_COMPACT_SPACING;
    var _closure1_slot13 = var4;
    var2 = var2.DEFAULT_COZY_SPACING;
    var _closure1_slot14 = var2;
    var2 = {};
    var4 = 'default';
    var2['DEFAULT'] = var4;
    var4 = 'high';
    var2['HIGH'] = var4;
    var _closure1_slot15 = var2;
    var4 = {'fontSize': null, 'zoom': null, 'keyboardModeEnabled': false, 'contrastMode': null, 'colorblindMode': false, 'lowContrastMode': false, 'saturation': 1, 'contrast': 1, 'desaturateUserColors': false, 'forcedColorsModalSeen': false, 'keyboardNavigationExplainerModalSeen': false, 'messageGroupSpacing': null, 'systemPrefersReducedMotion': 'no-preference', 'systemPrefersCrossfades': false, 'prefersReducedMotion': 'auto', 'systemForcedColors': 'none', 'syncForcedColors': true, 'systemPrefersContrast': 'no-preference', 'alwaysShowLinkDecorations': false, 'roleStyle': 'username', 'displayNameStylesEnabled': true, 'submitButtonEnabled': false, 'syncProfileThemeWithUserTheme': false, 'enableCustomCursor': true, 'switchIconsEnabled': false};
    var10 = var9.FONT_SIZE_DEFAULT;
    var4['fontSize'] = var10;
    var9 = var9.ZOOM_DEFAULT;
    var4['zoom'] = var9;
    var9 = var2.DEFAULT;
    var4['contrastMode'] = var9;
    var _closure1_slot16 = var4;
    var _closure1_slot17 = var4;
    var4 = {12: 'font-size-12', 14: 'font-size-14', 15: 'font-size-15', 16: 'font-size-16', 18: 'font-size-18', 20: 'font-size-20', 24: 'font-size-24'};
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.DeviceSettingsStore;
    var4 = function(arg1) {
        var4 = function AccessibilityStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot5;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var3 = var4.waitFor;
                var1 = _closure1_slot10;
                var1 = var3.bind(var4)(var1);
                var1 = {};
                var8 = _closure1_slot16;
                var9 = var1;
                var3 = copyDataProperties(var9, var8);
                var3 = null;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0003_ip = 7; continue _fun0003 }
case 9:
                var4 = var5;
case 7:
                var9 = var1;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                _closure1_slot17 = var1;
                var1 = global;
                var5 = var1.isNaN;
                var1 = _closure1_slot17;
                var4 = var1.fontSize;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                if(!var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var5 = _closure1_slot17;
                var4 = _closure1_slot11;
                var4 = var4.FONT_SIZE_DEFAULT;
                var5['fontSize'] = var4;
case 10:
                var6 = _closure1_slot12;
                var5 = var6.indexOf;
                var4 = _closure1_slot17;
                var4 = var4.messageGroupSpacing;
                var7 = var3 != var4;
                var4 = -1;
                if(!var7) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var7 = _closure1_slot17;
                var4 = var7.messageGroupSpacing;
case 12:
                var5 = var5.bind(var6)(var4);
                var4 = 0;
                if(!(var5 < var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var2 = _closure1_slot17;
                var2['messageGroupSpacing'] = var3;
case 14:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(37);
        var1[0] = var5;
        var5 = {};
        var7 = 'fontScale';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.fontSize;
            var1 = _closure1_slot11;
            var1 = var1.FONT_SIZE_DEFAULT;
            var2 = var2 / var1;
            var1 = 100;
            var1 = var2 * var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'fontSize';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.fontSize;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFontScaledUp';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.fontSize;
            var1 = _closure1_slot11;
            var1 = var1.FONT_SIZE_DEFAULT;
            var1 = var2 > var1;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isFontScaledDown';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.fontSize;
            var1 = _closure1_slot11;
            var1 = var1.FONT_SIZE_DEFAULT;
            var1 = var2 < var1;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'fontScaleClass';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = this;
                var2 = _closure1_slot18;
                var1 = var3.fontSize;
                var2 = var2[var1];
                var1 = null;
                var5 = var1 != var2;
                var1 = '';
                var4 = var1;
                if(!var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var4 = var2;
case 16:
                var5 = var3.isFontScaledUp;
                var2 = global;
                if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = var3.isFontScaledDown;
                var5 = var2.HermesInternal;
                var5 = var5.concat;
                if(var3) { _fun0004_ip = 20; continue _fun0004 }
case 3:
                var1 = var5.bind(var1)(var4);
                _fun0004_ip = 21; continue _fun0004;
case 20:
                var3 = 'a11y-font-scaled-down ';
                var1 = var5.bind(var3)(var4);
case 21:
                _fun0004_ip = 22; continue _fun0004;
case 18:
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'a11y-font-scaled-up ';
                var1 = var3.bind(var2)(var4);
case 22:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'zoom';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.zoom;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isZoomedIn';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.zoom;
            var1 = _closure1_slot11;
            var1 = var1.ZOOM_DEFAULT;
            var1 = var2 > var1;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isZoomedOut';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.zoom;
            var1 = _closure1_slot11;
            var1 = var1.ZOOM_DEFAULT;
            var1 = var2 < var1;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'keyboardModeEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.keyboardModeEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'colorblindMode';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.colorblindMode;
            return var1;
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'lowContrastMode';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.lowContrastMode;
            return var1;
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'saturation';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.saturation;
            return var1;
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'contrast';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.contrast;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'desaturateUserColors';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.desaturateUserColors;
            return var1;
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'forcedColorsModalSeen';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.forcedColorsModalSeen;
            return var1;
        };
        var5['get'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'keyboardNavigationExplainerModalSeen';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.keyboardNavigationExplainerModalSeen;
            return var1;
        };
        var5['get'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'messageGroupSpacing';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = _closure1_slot17;
                var3 = var1.messageGroupSpacing;
                var1 = null;
                if(!(var1 == var3)) { _fun0005_ip = 5; continue _fun0005 }
case 23:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.MessageDisplayCompact;
                var1 = var3.getSetting;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var1 = _closure1_slot14;
                _fun0005_ip = 3; continue _fun0005;
case 24:
                var1 = _closure1_slot13;
case 3:
                _fun0005_ip = 26; continue _fun0005;
case 5:
                var2 = _closure1_slot17;
                var1 = var2.messageGroupSpacing;
case 26:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'isMessageGroupSpacingIncreased';
        var5['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.MessageDisplayCompact;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 27:
                var2 = _closure1_slot14;
                _fun0006_ip = 28; continue _fun0006;
case 19:
                var2 = _closure1_slot13;
case 28:
                var1 = this;
                var1 = var1.messageGroupSpacing;
                var1 = var1 > var2;
                return var1;
            }
        };
        var5['get'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isMessageGroupSpacingDecreased';
        var5['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.MessageDisplayCompact;
                var2 = var3.getSetting;
                var2 = var2.bind(var3)();
                if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 27:
                var2 = _closure1_slot14;
                _fun0007_ip = 28; continue _fun0007;
case 19:
                var2 = _closure1_slot13;
case 28:
                var1 = this;
                var1 = var1.messageGroupSpacing;
                var1 = var1 < var2;
                return var1;
            }
        };
        var5['get'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isSubmitButtonEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.submitButtonEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'syncProfileThemeWithUserTheme';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.syncProfileThemeWithUserTheme;
            return var1;
        };
        var5['get'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'systemPrefersReducedMotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.systemPrefersReducedMotion;
            return var1;
        };
        var5['get'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'rawPrefersReducedMotion';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.prefersReducedMotion;
            return var1;
        };
        var5['get'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'useReducedMotion';
        var5['key'] = var7;
        var7 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot17;
                var3 = var2.prefersReducedMotion;
                var2 = 'no-preference';
                if(!(var2 !== var3)) { _fun0008_ip = 7; continue _fun0008 }
case 29:
                var2 = 'reduce';
                if(!(var2 !== var3)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = _closure1_slot17;
                var1 = var1.systemPrefersReducedMotion;
                var1 = var2 === var1;
                return var1;
case 30:
                var1 = true;
                return var1;
case 7:
                var1 = false;
                return var1;
            }
        };
        var5['get'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'systemForcedColors';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.systemForcedColors;
            return var1;
        };
        var5['get'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'syncForcedColors';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.syncForcedColors;
            return var1;
        };
        var5['get'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'useForcedColors';
        var5['key'] = var7;
        var7 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure1_slot17;
                var1 = var1.syncForcedColors;
                var1 = !var1;
                if(var1) { _fun0009_ip = 32; continue _fun0009 }
case 23:
                var2 = _closure1_slot17;
                var3 = var2.systemForcedColors;
                var2 = 'active';
                var1 = var2 !== var3;
case 32:
                var1 = !var1;
                return var1;
            }
        };
        var5['get'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'systemPrefersContrast';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.systemPrefersContrast;
            return var1;
        };
        var5['get'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'systemPrefersCrossfades';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.systemPrefersCrossfades;
            return var1;
        };
        var5['get'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'alwaysShowLinkDecorations';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.alwaysShowLinkDecorations;
            return var1;
        };
        var5['get'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'enableCustomCursor';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.enableCustomCursor;
            return var1;
        };
        var5['get'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'roleStyle';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.roleStyle;
            return var1;
        };
        var5['get'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'displayNameStylesEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.displayNameStylesEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[33] = var5;
        var5 = {};
        var7 = 'isHighContrastModeEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot17;
            var2 = var2.contrastMode;
            var1 = _closure1_slot15;
            var1 = var1.HIGH;
            var1 = var2 === var1;
            return var1;
        };
        var5['get'] = var7;
        var1[34] = var5;
        var5 = {};
        var7 = 'isSwitchIconsEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.switchIconsEnabled;
            return var1;
        };
        var5['get'] = var7;
        var1[35] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[36] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'AccessibilityStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(10);
    var10 = function() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 12;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var3 = var2.Storage;
            var2 = var3.get;
            var12 = 'a11yFontScale';
            var4 = var2.bind(var3)(var12);
            if(var4) { _fun0010_ip = 33; continue _fun0010 }
case 19:
            var4 = 100;
case 33:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var3 = var2.Storage;
            var2 = var3.get;
            var11 = 'a11yZoom';
            var3 = var2.bind(var3)(var11);
            if(var3) { _fun0010_ip = 8; continue _fun0010 }
case 34:
            var2 = _closure1_slot11;
            var3 = var2.ZOOM_DEFAULT;
case 8:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var5.bind(var7)(var2);
            var5 = var2.Storage;
            var2 = var5.get;
            var6 = 'a11yColorblindMode';
            var2 = var2.bind(var5)(var6);
            if(var2) { _fun0010_ip = 35; continue _fun0010 }
case 36:
            var2 = false;
case 35:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = var1[var8];
            var9 = var5.bind(var7)(var9);
            var10 = var9.Storage;
            var9 = var10.remove;
            var9 = var9.bind(var10)(var12);
            var9 = var1[var8];
            var9 = var5.bind(var7)(var9);
            var10 = var9.Storage;
            var9 = var10.remove;
            var9 = var9.bind(var10)(var11);
            var1 = var1[var8];
            var1 = var5.bind(var7)(var1);
            var5 = var1.Storage;
            var1 = var5.remove;
            var1 = var1.bind(var5)(var6);
            var1 = {};
            var1['fontScale'] = var4;
            var1['zoom'] = var3;
            var1['colorblindMode'] = var2;
            var2 = false;
            var1['keyboardModeEnabled'] = var2;
            return var1;
        }
    };
    var4[0] = var10;
    var10 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var4 = var5.fontScale;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = undefined;
            var2 = var3.bind(var1)(var5, var2);
            var1 = 82;
            if(!(var1 !== var4)) { _fun0011_ip = 37; continue _fun0011 }
case 38:
            var1 = 92;
            if(!(var1 !== var4)) { _fun0011_ip = 39; continue _fun0011 }
case 40:
            var5 = 16;
            var1 = 100;
            var3 = var5;
            if(!(var1 !== var4)) { _fun0011_ip = 41; continue _fun0011 }
case 42:
            var1 = 110;
            if(!(var1 !== var4)) { _fun0011_ip = 43; continue _fun0011 }
case 44:
            var1 = 125;
            if(!(var1 !== var4)) { _fun0011_ip = 45; continue _fun0011 }
case 6:
            var1 = 150;
            var3 = var5;
            if(!(var1 === var4)) { _fun0011_ip = 41; continue _fun0011 }
case 46:
            var3 = 24;
            _fun0011_ip = 41; continue _fun0011;
case 45:
            var3 = 20;
            _fun0011_ip = 41; continue _fun0011;
case 43:
            var3 = 18;
            _fun0011_ip = 41; continue _fun0011;
case 39:
            var3 = 15;
            _fun0011_ip = 41; continue _fun0011;
case 37:
            var3 = 12;
case 41:
            var1 = {};
            var7 = var1;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var2 = 'fontSize';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[1] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'darkSidebar';
        var1[var2] = var3;
        return var1;
    };
    var4[2] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = null;
        var2 = 'messageGroupSpacing';
        var1[var2] = var3;
        return var1;
    };
    var4[3] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = 'no-preference';
        var2 = 'systemPrefersReducedMotion';
        var1[var2] = var3;
        var3 = 'auto';
        var2 = 'prefersReducedMotion';
        var1[var2] = var3;
        return var1;
    };
    var4[4] = var10;
    var10 = function(arg1) {
        var2 = arg1;
        var1 = {};
        var7 = var1;
        var6 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = var2.saturation;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 13;
        var4 = var4[var2];
        var2 = undefined;
        var2 = var5.bind(var2)(var4);
        var2 = var2.LOW_SATURATION_THRESHOLD;
        var3 = var3 <= var2;
        var2 = 'alwaysShowLinkDecorations';
        var1[var2] = var3;
        return var1;
    };
    var4[5] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'disableVoiceBackgrounds';
        var1[var2] = var3;
        return var1;
    };
    var4[6] = var10;
    var10 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
case 47: // try_start_0
            var2 = var1;
            var2 = delete var2.disableVoiceBackgrounds;
case 48: // try_end0
            _fun0012_ip = 49; continue _fun0012;
case 50: // catch_target0
            CatchBlockStart(arg_register=1);
case 49:
            return var1;
        }
    };
    var4[7] = var10;
    var10 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
case 47: // try_start_0
            var2 = var1;
            var2 = delete var2.hideGuildTags;
case 48: // try_end0
            _fun0013_ip = 49; continue _fun0013;
case 50: // catch_target0
            CatchBlockStart(arg_register=1);
case 49:
            return var1;
        }
    };
    var4[8] = var10;
    var10 = function(arg1) {
        var1 = {};
        var4 = arg1;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = true;
        var2 = 'enableCustomCursor';
        var1[var2] = var3;
        return var1;
    };
    var4[9] = var10;
    var9['migrations'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleFontScaleTo(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.fontSize;
            var1 = _closure1_slot11;
            var4 = var1.FONT_SIZES;
            var1 = var4.indexOf;
            var4 = var1.bind(var4)(var2);
            var1 = 0;
            if(!(!(var4 >= var1))) { _fun0014_ip = 51; continue _fun0014 }
case 16:
            var1 = _closure1_slot11;
            var2 = var1.FONT_SIZE_DEFAULT;
case 51:
            var1 = _closure1_slot11;
            var1 = var1.FONT_SIZE_MAX;
            if(!(!(var2 > var1))) { _fun0014_ip = 52; continue _fun0014 }
case 53:
            var1 = _closure1_slot11;
            var1 = var1.FONT_SIZE_MIN;
            if(!(!(var2 < var1))) { _fun0014_ip = 52; continue _fun0014 }
case 20:
            var1 = _closure1_slot17;
            var1 = var1.fontSize;
            if(!(var1 !== var2)) { _fun0014_ip = 52; continue _fun0014 }
case 54:
            var1 = {};
            var5 = _closure1_slot17;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            _closure1_slot17 = var1;
            var1['fontSize'] = var2;
            var1 = undefined;
            return var1;
case 52:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SET_FONT_SIZE'] = var10;
    var10 = function handleZoomTo(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var4 = var1.zoom;
            var3 = _closure1_slot11;
            var3 = var3.ZOOM_MIN;
            if(!(!(var4 < var3))) { _fun0015_ip = 55; continue _fun0015 }
case 56:
            var4 = var1.zoom;
            var3 = _closure1_slot11;
            var3 = var3.ZOOM_MAX;
            if(!(!(var4 > var3))) { _fun0015_ip = 55; continue _fun0015 }
case 57:
            var3 = _closure1_slot17;
            var4 = var3.zoom;
            var3 = var1.zoom;
            if(!(var4 !== var3)) { _fun0015_ip = 55; continue _fun0015 }
case 24:
            var3 = {};
            var5 = _closure1_slot17;
            var6 = var3;
            var4 = copyDataProperties(var6, var5);
            _closure1_slot17 = var3;
            var1 = var1.zoom;
            var3['zoom'] = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.setZoomFactor;
            var2 = _closure1_slot17;
            var2 = var2.zoom;
            var2 = var3.bind(var4)(var2);
            return var1;
case 55:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SET_ZOOM'] = var10;
    var10 = function handleResetToDefault() {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = _closure1_slot17;
            var5 = var2.fontSize;
            var2 = _closure1_slot11;
            var4 = var2.FONT_SIZE_DEFAULT;
            var3 = _closure1_slot17;
            var3 = var3.zoom;
            var2 = var2.ZOOM_DEFAULT;
            if(!(var5 === var4)) { _fun0016_ip = 7; continue _fun0016 }
case 58:
            if(!(var3 === var2)) { _fun0016_ip = 7; continue _fun0016 }
case 30:
            var2 = false;
            return var2;
case 7:
            var2 = {};
            var6 = _closure1_slot17;
            var7 = var2;
            var3 = copyDataProperties(var7, var6);
            _closure1_slot17 = var2;
            var3 = var2.fontSize;
            var2 = _closure1_slot11;
            var2 = var2.FONT_SIZE_DEFAULT;
            if(!(var3 !== var2)) { _fun0016_ip = 59; continue _fun0016 }
case 21:
            var3 = _closure1_slot17;
            var2 = _closure1_slot11;
            var2 = var2.FONT_SIZE_DEFAULT;
            var3['fontSize'] = var2;
case 59:
            var2 = _closure1_slot17;
            var3 = var2.zoom;
            var2 = _closure1_slot11;
            var2 = var2.ZOOM_DEFAULT;
            if(!(var3 !== var2)) { _fun0016_ip = 60; continue _fun0016 }
case 61:
            var3 = _closure1_slot17;
            var2 = _closure1_slot11;
            var2 = var2.ZOOM_DEFAULT;
            var3['zoom'] = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.setZoomFactor;
            var1 = _closure1_slot17;
            var1 = var1.zoom;
            var1 = var2.bind(var3)(var1);
case 60:
            var1 = undefined;
            return var1;
        }
    };
    var4['ACCESSIBILITY_RESET_TO_DEFAULT'] = var10;
    var10 = function handleEnableKeyboardMode() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = _closure1_slot17;
            var2 = var2.keyboardModeEnabled;
            if(var2) { _fun0017_ip = 62; continue _fun0017 }
case 63:
            var2 = {};
            var4 = _closure1_slot17;
            var5 = var2;
            var3 = copyDataProperties(var5, var4);
            _closure1_slot17 = var2;
            var1 = true;
            var2['keyboardModeEnabled'] = var1;
            var1 = undefined;
            return var1;
case 62:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_KEYBOARD_MODE_ENABLE'] = var10;
    var10 = function handleDisableKeyboardMode() {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = _closure1_slot17;
            var2 = var2.keyboardModeEnabled;
            if(var2) { _fun0018_ip = 64; continue _fun0018 }
case 63:
            var2 = false;
            return var2;
case 64:
            var2 = {};
            var4 = _closure1_slot17;
            var5 = var2;
            var3 = copyDataProperties(var5, var4);
            _closure1_slot17 = var2;
            var1 = false;
            var2['keyboardModeEnabled'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['ACCESSIBILITY_KEYBOARD_MODE_DISABLE'] = var10;
    var10 = function handleToggleColorblindMode() {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = var2.colorblindMode;
        var1 = !var1;
        var2['colorblindMode'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_COLORBLIND_TOGGLE'] = var10;
    var10 = function handleToggleLowContrastMode() {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = var2.lowContrastMode;
        var1 = !var1;
        var2['lowContrastMode'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_LOW_CONTRAST_TOGGLE'] = var10;
    var10 = function handleSetSaturation(arg1) {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = arg1;
        var1 = var1.saturation;
        var2['saturation'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_SATURATION'] = var10;
    var10 = function handledesaturateUserColorsToggle() {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = var2.desaturateUserColors;
        var1 = !var1;
        var2['desaturateUserColors'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_DESATURATE_ROLES_TOGGLE'] = var10;
    var10 = function handleSystemColorPreferencesChanged(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = {};
            var6 = _closure1_slot17;
            var7 = var2;
            var3 = copyDataProperties(var7, var6);
            var3 = arg1;
            var3 = var3.systemForcedColors;
            var4 = null;
            var5 = var4 != var3;
            var4 = 'none';
            if(!var5) { _fun0019_ip = 65; continue _fun0019 }
case 66:
            var4 = var3;
case 65:
            var3 = 'systemForcedColors';
            var2[var3] = var4;
            _closure1_slot17 = var2;
            var1 = true;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED'] = var10;
    var10 = function handleSystemPrefersContrastChanged(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var4 = var1.systemPrefersContrast;
            var1 = var3.systemPrefersContrast;
            if(!(var4 !== var1)) { _fun0020_ip = 44; continue _fun0020 }
case 56:
            var1 = {};
            var5 = _closure1_slot17;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var4 = var3.systemPrefersContrast;
            var3 = 'systemPrefersContrast';
            var1[var3] = var4;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED'] = var10;
    var10 = function handleSystemPrefersReducedMotionChanged(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var4 = var1.systemPrefersReducedMotion;
            var1 = var3.systemPrefersReducedMotion;
            if(!(var4 !== var1)) { _fun0021_ip = 44; continue _fun0021 }
case 56:
            var1 = {};
            var5 = _closure1_slot17;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var4 = var3.systemPrefersReducedMotion;
            var3 = 'systemPrefersReducedMotion';
            var1[var3] = var4;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED'] = var10;
    var10 = function handleSystemPrefersCrossfadesChanged(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var4 = var1.systemPrefersCrossfades;
            var1 = var3.systemPrefersCrossfades;
            if(!(var4 !== var1)) { _fun0022_ip = 44; continue _fun0022 }
case 56:
            var1 = {};
            var5 = _closure1_slot17;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var4 = var3.systemPrefersCrossfades;
            var3 = 'systemPrefersCrossfades';
            var1[var3] = var4;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED'] = var10;
    var10 = function handleSetPrefersReducedMotion(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var4 = var1.prefersReducedMotion;
            var1 = var3.prefersReducedMotion;
            if(!(var4 !== var1)) { _fun0023_ip = 44; continue _fun0023 }
case 56:
            var1 = {};
            var5 = _closure1_slot17;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var4 = var3.prefersReducedMotion;
            var3 = 'prefersReducedMotion';
            var1[var3] = var4;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var4['ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION'] = var10;
    var10 = function handleSetSyncForcedColors(arg1) {
        var2 = _closure1_slot17;
        var1 = arg1;
        var1 = var1.syncForcedColors;
        var2['syncForcedColors'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_SYNC_FORCED_COLORS'] = var10;
    var10 = function handleSetAlwaysShowLinkDecorations(arg1) {
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.alwaysShowLinkDecorations;
        var3 = 'alwaysShowLinkDecorations';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS'] = var10;
    var10 = function handleSetEnableCustomCursor(arg1) {
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.enableCustomCursor;
        var3 = 'enableCustomCursor';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR'] = var10;
    var10 = function handleSetRoleStyle(arg1) {
        var2 = _closure1_slot17;
        var1 = arg1;
        var1 = var1.roleStyle;
        var2['roleStyle'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_ROLE_STYLE'] = var10;
    var10 = function handleSetDisplayNameStylesEnabled(arg1) {
        var2 = _closure1_slot17;
        var1 = arg1;
        var1 = var1.enabled;
        var2['displayNameStylesEnabled'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED'] = var10;
    var10 = function handleForcedColorsModalSeen() {
        var2 = _closure1_slot17;
        var1 = true;
        var2['forcedColorsModalSeen'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN'] = var10;
    var10 = function handleKeyboardNavigationExplainerModalSeen() {
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var4 = true;
        var3 = 'keyboardNavigationExplainerModalSeen';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN'] = var10;
    var10 = function handleMessageGroupSpacingChange(arg1) {
        var1 = arg1;
        var4 = var1.messageGroupSpacing;
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'messageGroupSpacing';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING'] = var10;
    var10 = function handleSubmitButtonToggle() {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = var2.submitButtonEnabled;
        var1 = !var1;
        var2['submitButtonEnabled'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE'] = var10;
    var10 = function handleSyncProfileThemeWithUserThemeToggle() {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = var2.syncProfileThemeWithUserTheme;
        var1 = !var1;
        var2['syncProfileThemeWithUserTheme'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE'] = var10;
    var10 = function handleSetContrast(arg1) {
        var1 = arg1;
        var4 = var1.contrast;
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'contrast';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_CONTRAST'] = var10;
    var10 = function handleSetContrastMode(arg1) {
        var1 = arg1;
        var4 = var1.contrastMode;
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = 'contrastMode';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_CONTRAST_MODE'] = var10;
    var5 = function handleSetSwitchIconsEnabled(arg1) {
        var2 = {};
        var5 = _closure1_slot17;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.switchIconsEnabled;
        var3 = 'switchIconsEnabled';
        var2[var3] = var4;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var4['ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var9](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/a11y/AccessibilityStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['AccessibilityContrastMode'] = var2;
    return var1;
})();