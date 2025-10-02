// app/modules/video_calls/native/ChannelCallLifecycleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var2 = true;
    var8['value'] = var2;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var9 = var8.VoiceCallOverlayType;
    var11 = false;
    var _closure1_slot9 = var11;
    var _closure1_slot10 = var11;
    var _closure1_slot11 = var11;
    var _closure1_slot12 = var11;
    var8 = {};
    var13 = var9.VOICE_CONTROLS_TOGGLE_BUTTON;
    var10 = {};
    var10['x'] = var1;
    var10['y'] = var1;
    var10['width'] = var1;
    var10['height'] = var1;
    var12 = 7;
    var14 = var6[var12];
    var14 = var5.bind(var1)(var14);
    var14 = var14.OrientationType;
    var14 = var14.PORTRAIT;
    var10['screenOrientation'] = var14;
    var10['hasUserInteractedSinceOrientationChange'] = var11;
    var10['isInitialized'] = var11;
    var10['isVisible'] = var11;
    var8[var13] = var10;
    var10 = var9.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
    var9 = {};
    var9['x'] = var1;
    var9['y'] = var1;
    var9['width'] = var1;
    var9['height'] = var1;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.OrientationType;
    var12 = var12.PORTRAIT;
    var9['screenOrientation'] = var12;
    var9['hasUserInteractedSinceOrientationChange'] = var11;
    var9['isInitialized'] = var11;
    var9['isVisible'] = var11;
    var8[var10] = var9;
    var _closure1_slot13 = var8;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ChannelCallLifecycleStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot16;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldReactToSeriousThermalStateWhenActivityFocused';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'consumedRequestToRespondToSeriousThermalState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'disregardSeriousThermalState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isReactingToThermalState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure1_slot10;
                if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure1_slot11;
                var1 = !var2;
case 9:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getShowActivitiesDebugOverlay';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getVoiceCallOverlayLayoutStates';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isPipEnabledWhileFocusedOnActivityOrStream';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ChannelCallLifecycleStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleVoiceChannelSelect(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var4 = _closure1_slot7;
            var1 = var4.getVoiceChannelId;
            var1 = var1.bind(var4)();
            var4 = _closure1_slot8;
            if(!(var1 !== var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var4 = false;
            _closure1_slot9 = var4;
            _closure1_slot10 = var4;
            _closure1_slot12 = var4;
            _closure1_slot11 = var4;
            var4 = _closure1_slot13;
            _closure1_slot14 = var4;
case 13:
            var _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
case 11:
            var6 = "Cannot destructure 'undefined' or 'null'.";
            var7 = var2;
            var1 = throwTypeError(var7, var6);
            var1 = undefined;
            throw var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var9;
    var9 = function handleRequestRespondToSeriousThermalState(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0005_ip = 15; continue _fun0005 }
case 12:
            var1 = true;
            _closure1_slot9 = var1;
            var1 = undefined;
            return var1;
case 15:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE'] = var9;
    var9 = function handleConsumeReactToSeriousThermalStateRequest(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0006_ip = 15; continue _fun0006 }
case 12:
            var1 = true;
            _closure1_slot10 = var1;
            var1 = undefined;
            return var1;
case 15:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST'] = var9;
    var9 = function handleDisregardSeriousThermalState(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0007_ip = 15; continue _fun0007 }
case 12:
            var1 = true;
            _closure1_slot11 = var1;
            var1 = undefined;
            return var1;
case 15:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE'] = var9;
    var9 = function handleSetDebugOverlayVisibility(arg1) {
        var1 = arg1;
        var2 = var1.visible;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY'] = var9;
    var9 = function handleVoiceCallOverlayLayoutStateUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.voiceCallOverlayType;
            var1 = var1.voiceCallOverlayLayoutState;
            var5 = _closure1_slot14;
            var2 = {};
            var8 = var2;
            var7 = var5;
            var6 = copyDataProperties(var8, var7);
            var2[var4] = var1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var4);
            var4 = var4.bind(var1)(var2, var5);
            if(var4) { _fun0008_ip = 4; continue _fun0008 }
case 3:
            _closure1_slot14 = var2;
case 4:
            return var1;
        }
    };
    var2['VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE'] = var9;
    var9 = function handleSetPipEnabledForActivityOrStream(arg1) {
        var1 = arg1;
        var2 = var1.pipEnabledWhileFocusedOnActivityOrStream;
        _closure1_slot15 = var2;
        var1 = undefined;
        return var1;
    };
    var2['VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM'] = var9;
    var9 = function handleEmbeddedActivityOpen(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0009_ip = 15; continue _fun0009 }
case 12:
            var1 = true;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 15:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['EMBEDDED_ACTIVITY_OPEN'] = var9;
    var4 = function handleStreamWatch(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            if(!(var2 != var1)) { _fun0010_ip = 15; continue _fun0010 }
case 12:
            var1 = true;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
case 15:
            var4 = "Cannot destructure 'undefined' or 'null'.";
            var5 = var2;
            var1 = throwTypeError(var5, var4);
            var1 = undefined;
            throw var1;
        }
    };
    var2['STREAM_WATCH'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/ChannelCallLifecycleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();