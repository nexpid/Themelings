// app/modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 345; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot28;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot28;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var _closure1_slot11 = var8;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var _closure1_slot13 = var13;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var _closure1_slot17 = var14;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var15 = var4.AnalyticEvents;
    var _closure1_slot19 = var15;
    var4 = var4.Permissions;
    var _closure1_slot20 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 20;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 21;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 22;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 23;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 24;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 25;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = new Array(3);
    var4[0] = var14;
    var4[1] = var13;
    var4[2] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var4['DISABLED'] = var12;
    var8 = 'DISABLED';
    var4[var12] = var8;
    var4['NOT_SHOWING'] = var11;
    var8 = 'NOT_SHOWING';
    var4[var11] = var8;
    var4['WAITING_FOR_SERVICE'] = var10;
    var8 = 'WAITING_FOR_SERVICE';
    var4[var10] = var8;
    var4['SHOWING'] = var9;
    var8 = 'SHOWING';
    var4[var9] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 26;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.CVxXDA;
    var9 = var10.bind(var11)(var9);
    var4['useSpeaker'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.w4m94+;
    var9 = var10.bind(var11)(var9);
    var4['mute'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9./lEZpq;
    var9 = var10.bind(var11)(var9);
    var4['disconnectFromVoice'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.JYzIWV;
    var9 = var10.bind(var11)(var9);
    var4['getInvite'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.zJvWqa;
    var9 = var10.bind(var11)(var9);
    var4['switchChannels'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.G/Ez6u;
    var9 = var10.bind(var11)(var9);
    var4['openDiscord'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.OhctGx;
    var9 = var10.bind(var11)(var9);
    var4['inviteLinkCopied'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.r2pts7;
    var9 = var10.bind(var11)(var9);
    var4['channelSelect'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.gaifwc;
    var9 = var10.bind(var11)(var9);
    var4['closeWindow'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.intl;
    var10 = var11.string;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var9 = var9.t;
    var9 = var9.wM7uRE;
    var9 = var10.bind(var11)(var9);
    var4['searchChannels'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var10 = var9.intl;
    var9 = var10.string;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.t;
    var8 = var8.wk3qsL;
    var8 = var9.bind(var10)(var8);
    var4['noResults'] = var8;
    var _closure1_slot23 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function MobileVoiceOverlayManager() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot6;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var6.bind(var1)(var3, var4);
            var4 = null;
            var3['currentVoiceChannelId'] = var4;
            var3['trashedVoiceChannelId'] = var4;
            var5 = _closure1_slot22;
            var5 = var5.DISABLED;
            var3['overlayState'] = var5;
            var5 = new Array(0);
            var3['channelSelectorResults'] = var5;
            var3['layoutTrashedSubscription'] = var4;
            var3['channelQueryUpdateSubscription'] = var4;
            var4 = false;
            var3['isBatchedBridgeInitialized'] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot18;
                    var2 = var3.getEnabled;
                    var3 = var2.bind(var3)();
                    var2 = _closure3_slot0;
                    if(var3) { _fun0005_ip = 133; continue _fun0005 }
 27:
                    var3 = var2.unsubscribeFromVoiceStateStoreUpdates;
                    var3 = var3.bind(var2)();
                    var3 = var2.unsubscribeFromNativeEvents;
                    var3 = var3.bind(var2)();
                    var3 = var2.isOverlayShowing;
                    var3 = var3.bind(var2)();
                    var4 = _closure1_slot22;
                    var4 = var4.DISABLED;
                    var2['overlayState'] = var4;
                    if(!var3) { _fun0005_ip = 143; continue _fun0005 }
 76:
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 27;
                    var3 = var3[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0005_ip = 143; continue _fun0005 }
 104:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.hideOverlay;
                    var1 = var1.bind(var3)();
                    _fun0005_ip = 143; continue _fun0005;
 133:
                    var1 = var2.handleOverlayEnable;
                    var1 = var1.bind(var2)();
 143:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['handleMobileVoiceOverlayStoreUpdate'] = var4;
            var4 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = function handleEnableFail() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 28;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.setEnabled;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure3_slot0;
                        var2 = _closure1_slot22;
                        var2 = var2.DISABLED;
                        var3['overlayState'] = var2;
                        return var1;
                    };
                    var _closure4_slot0 = var1;
                    var6 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var5 = 27;
                    var4 = var1[var5];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var6)) { _fun0006_ip = 108; continue _fun0006 }
 44:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.enableOverlay;
                    var5 = var3.bind(var4)();
                    var4 = var5.then;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            if(var1) { _fun0007_ip = 21; continue _fun0007 }
 6:
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun0007_ip = 67; continue _fun0007;
 21:
                            var2 = _closure3_slot0;
                            var1 = var2.subscribeToVoiceStateStoreUpdates;
                            var1 = var1.bind(var2)();
                            var1 = var2.subscribeToNativeEvents;
                            var1 = var1.bind(var2)();
                            var1 = _closure1_slot22;
                            var1 = var1.NOT_SHOWING;
                            var2['overlayState'] = var1;
 67:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var2 = _closure4_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
 108:
                    return var1;
                }
            };
            var3['handleOverlayEnable'] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isSubscribedToVoiceStateStoreUpdates;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0008_ip = 46; continue _fun0008 }
 20:
                    var3 = _closure1_slot21;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.addChangeListener;
                        var1 = _closure3_slot0;
                        var1 = var1.handleOverlayUIStoreUpdate;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['subscribeToVoiceStateStoreUpdates'] = var4;
            var4 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure3_slot0;
                    var1 = var2.isSubscribedToVoiceStateStoreUpdates;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0009_ip = 46; continue _fun0009 }
 20:
                    var3 = _closure1_slot21;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.removeChangeListener;
                        var1 = _closure3_slot0;
                        var1 = var1.handleOverlayUIStoreUpdate;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['unsubscribeFromVoiceStateStoreUpdates'] = var4;
            var4 = function() {
                var3 = _closure1_slot21;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var3 = var1._changeCallbacks;
                    var2 = var3.has;
                    var1 = _closure3_slot0;
                    var1 = var1.handleOverlayUIStoreUpdate;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var3['isSubscribedToVoiceStateStoreUpdates'] = var4;
            var4 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isFabric;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0010_ip = 124; continue _fun0010 }
 38:
                    var3 = _closure3_slot0;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 27;
                    var6 = var5[var2];
                    var8 = var4.bind(var1)(var6);
                    var7 = var8.onLayoutTrashed;
                    var6 = var3.handleLayoutTrashed;
                    var6 = var7.bind(var8)(var6);
                    var3['layoutTrashedSubscription'] = var6;
                    var2 = var5[var2];
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.onChannelQueryUpdate;
                    var2 = var3.handleChannelQueryUpdate;
                    var2 = var4.bind(var5)(var2);
                    var3['channelQueryUpdateSubscription'] = var2;
 124:
                    return var1;
                }
            };
            var3['subscribeToNativeEvents'] = var4;
            var4 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isFabric;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0011_ip = 91; continue _fun0011 }
 38:
                    var2 = _closure3_slot0;
                    var5 = var2.layoutTrashedSubscription;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0011_ip = 67; continue _fun0011 }
 57:
                    var4 = var5.remove;
                    var4 = var4.bind(var5)();
 67:
                    var3 = _closure3_slot0;
                    var3 = var3.channelQueryUpdateSubscription;
                    if(!(var2 != var3)) { _fun0011_ip = 91; continue _fun0011 }
 81:
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
 91:
                    return var1;
                }
            };
            var3['unsubscribeFromNativeEvents'] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure3_slot0;
                    var4 = var1.overlayState;
                    var1 = _closure1_slot22;
                    var1 = var1.DISABLED;
                    if(!(var4 !== var1)) { _fun0012_ip = 158; continue _fun0012 }
 33:
                    var1 = _closure3_slot0;
                    var4 = var1.getVoiceConnectedGuildAndChannel;
                    var4 = var4.bind(var1)();
                    var4 = var4.currentVoiceChannelId;
                    var1 = var1.currentVoiceChannelId;
                    if(!(var4 !== var1)) { _fun0012_ip = 81; continue _fun0012 }
 63:
                    var5 = _closure3_slot0;
                    var5['currentVoiceChannelId'] = var4;
                    var1 = null;
                    var5['trashedVoiceChannelId'] = var1;
 81:
                    var1 = null;
                    if(!(var1 != var4)) { _fun0012_ip = 101; continue _fun0012 }
 87:
                    var1 = _closure3_slot0;
                    var1 = var1.trashedVoiceChannelId;
                    if(!(var4 === var1)) { _fun0012_ip = 134; continue _fun0012 }
 101:
                    var4 = _closure3_slot0;
                    var1 = var4.isOverlayShowing;
                    var1 = var1.bind(var4)();
                    if(!var1) { _fun0012_ip = 158; continue _fun0012 }
 118:
                    var4 = _closure3_slot0;
                    var1 = var4.hideOverlay;
                    var1 = var1.bind(var4)();
                    _fun0012_ip = 158; continue _fun0012;
 134:
                    var1 = _closure3_slot0;
                    var4 = var1.overlayState;
                    var1 = _closure1_slot22;
                    var1 = var1.WAITING_FOR_SERVICE;
                    if(!(var4 === var1)) { _fun0012_ip = 162; continue _fun0012 }
 158:
                    var1 = undefined;
                    return var1;
 162:
                    var1 = _closure3_slot0;
                    var4 = var1.overlayState;
                    var1 = _closure1_slot22;
                    var1 = var1.NOT_SHOWING;
                    if(!(var4 !== var1)) { _fun0012_ip = 231; continue _fun0012 }
 186:
                    var1 = _closure3_slot0;
                    var4 = var1.overlayState;
                    var1 = _closure1_slot22;
                    var1 = var1.SHOWING;
                    var1 = var4 === var1;
                    if(!var1) { _fun0012_ip = 227; continue _fun0012 }
 213:
                    var5 = _closure3_slot0;
                    var4 = var5.updateOverlayUI;
                    var1 = var4.bind(var5)();
 227:
                    var1 = undefined;
                    _fun0012_ip = 295; continue _fun0012;
 231:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 30;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isForegroundServiceRunning;
                    var4 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var2 = _closure3_slot0;
                            var1 = arg1;
                            if(var1) { _fun0013_ip = 34; continue _fun0013 }
 13:
                            var1 = _closure1_slot22;
                            var1 = var1.NOT_SHOWING;
                            var2['overlayState'] = var1;
                            _fun0013_ip = 44; continue _fun0013;
 34:
                            var1 = var2.showOverlay;
                            var1 = var1.bind(var2)();
 44:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure3_slot0;
                    var2 = _closure1_slot22;
                    var2 = var2.WAITING_FOR_SERVICE;
                    var3['overlayState'] = var2;
                    var1 = undefined;
 295:
                    return var1;
                }
            };
            var3['handleOverlayUIStoreUpdate'] = var4;
            var4 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure1_slot16;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var12 = null;
                    var3 = var12 == var2;
                    var1 = undefined;
                    var16 = undefined;
                    if(var3) { _fun0014_ip = 34; continue _fun0014 }
 29:
                    var16 = var2.id;
 34:
                    if(!(var12 != var16)) { _fun0014_ip = 735; continue _fun0014 }
 41:
                    var3 = _closure3_slot0;
                    var2 = var3.getVoiceConnectedGuildAndChannel;
                    var2 = var2.bind(var3)();
                    var11 = var2.currentGuildId;
                    var10 = var2.currentVoiceChannelId;
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var9 = var2.bind(var3)(var10);
                    if(!(var12 != var10)) { _fun0014_ip = 735; continue _fun0014 }
 91:
                    if(!(var12 != var9)) { _fun0014_ip = 735; continue _fun0014 }
 98:
                    var3 = _closure3_slot0;
                    var2 = var3.getOverlayUser;
                    var3 = var2.bind(var3)(var16);
                    if(!(var12 != var3)) { _fun0014_ip = 735; continue _fun0014 }
 120:
                    var4 = _closure1_slot17;
                    var2 = var4.getVoiceStatesForChannel;
                    var7 = var2.bind(var4)(var10);
                    var2 = global;
                    var4 = var2.Object;
                    var2 = var4.keys;
                    var8 = var2.bind(var4)(var7);
                    var2 = var3.speaking;
                    var15 = var3;
                    if(var2) { _fun0014_ip = 241; continue _fun0014 }
 165:
                    var2 = _closure1_slot27;
                    var7 = var2.bind(var1)(var8);
                    var4 = var7.bind(var1)();
                    var2 = var4.done;
                    var15 = null;
                    if(var2) { _fun0014_ip = 241; continue _fun0014 }
 188:
                    var14 = var4.value;
                    var13 = _closure3_slot0;
                    var2 = var13.getOverlayUser;
                    var13 = var2.bind(var13)(var14);
                    if(!(var12 != var13)) { _fun0014_ip = 224; continue _fun0014 }
 212:
                    var2 = var13.speaking;
                    var15 = var13;
                    if(var2) { _fun0014_ip = 241; continue _fun0014 }
 224:
                    var13 = var7.bind(var1)();
                    var2 = var13.done;
                    var4 = var13;
                    var15 = null;
                    if(!var2) { _fun0014_ip = 188; continue _fun0014 }
 241:
                    if(!(var12 == var15)) { _fun0014_ip = 248; continue _fun0014 }
 245:
                    var15 = var3;
 248:
                    var7 = new Array(1);
                    var7[0] = var15;
                    var4 = var15.userId;
                    var2 = var3.userId;
                    if(!(var4 !== var2)) { _fun0014_ip = 280; continue _fun0014 }
 270:
                    var2 = var7.push;
                    var2 = var2.bind(var7)(var3);
 280:
                    var2 = var8.length;
                    var14 = 0;
                    var2 = var14 < var2;
                    var13 = 3;
                    var4 = undefined;
                    var3 = undefined;
                    if(!var2) { _fun0014_ip = 401; continue _fun0014 }
 301:
                    var19 = var8[var14];
                    var17 = var3;
                    if(!(var19 !== var16)) { _fun0014_ip = 386; continue _fun0014 }
 312:
                    var18 = var12 == var15;
                    var2 = undefined;
                    if(var18) { _fun0014_ip = 326; continue _fun0014 }
 321:
                    var2 = var15.userId;
 326:
                    var4 = var15;
                    var17 = var3;
                    if(!(var19 !== var2)) { _fun0014_ip = 386; continue _fun0014 }
 336:
                    var18 = _closure3_slot0;
                    var2 = var18.getOverlayUser;
                    var18 = var2.bind(var18)(var19);
                    var4 = var15;
                    var17 = var18;
                    if(!(var12 != var17)) { _fun0014_ip = 386; continue _fun0014 }
 361:
                    var2 = var7.push;
                    var2 = var2.bind(var7)(var18);
                    var2 = var7.length;
                    var4 = var15;
                    var17 = var18;
                    if(!(!(var2 >= var13))) { _fun0014_ip = 401; continue _fun0014 }
 386:
                    var14 = var14 + 1;
                    var2 = var8.length;
                    var3 = var17;
                    if(var14 < var2) { _fun0014_ip = 301; continue _fun0014 }
 401:
                    var2 = _closure3_slot0;
                    var3 = var2.overlayState;
                    var2 = _closure1_slot22;
                    var2 = var2.SHOWING;
                    if(!(var3 !== var2)) { _fun0014_ip = 444; continue _fun0014 }
 425:
                    var4 = _closure3_slot0;
                    var3 = var4.refreshChannelSelectorResults;
                    var2 = '';
                    var2 = var3.bind(var4)(var2);
 444:
                    var2 = _closure3_slot0;
                    var2['currentVoiceChannelId'] = var10;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 27;
                    var3 = var3[var2];
                    var3 = var4.bind(var1)(var3);
                    if(!(var12 != var3)) { _fun0014_ip = 735; continue _fun0014 }
 481:
                    var3 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var2 = var15[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setData;
                    var2 = {};
                    var2['users'] = var7;
                    var14 = _closure1_slot0;
                    var13 = 31;
                    var13 = var15[var13];
                    var16 = var14.bind(var1)(var13);
                    var15 = var16.computeChannelName;
                    var14 = _closure1_slot16;
                    var13 = _closure1_slot14;
                    var13 = var15.bind(var16)(var9, var14, var13);
                    var2['channelName'] = var13;
                    var14 = _closure1_slot10;
                    var13 = var14.getGuild;
                    var14 = var13.bind(var14)(var11);
                    var15 = var12 == var14;
                    var13 = undefined;
                    if(var15) { _fun0014_ip = 581; continue _fun0014 }
 576:
                    var13 = var14.name;
 581:
                    var14 = var12 != var13;
                    var12 = '';
                    if(!var14) { _fun0014_ip = 595; continue _fun0014 }
 592:
                    var12 = var13;
 595:
                    var2['guildName'] = var12;
                    var2['guildId'] = var11;
                    var2['channelId'] = var10;
                    var8 = var8.length;
                    var7 = var7.length;
                    var7 = var8 - var7;
                    var2['extraUsers'] = var7;
                    var8 = _closure1_slot11;
                    var7 = var8.isSelfDeaf;
                    var7 = var7.bind(var8)();
                    var2['deafened'] = var7;
                    var7 = var8.isSelfMute;
                    var7 = var7.bind(var8)();
                    var2['muted'] = var7;
                    var8 = _closure1_slot13;
                    var7 = var8.getQuality;
                    var7 = var7.bind(var8)();
                    var2['connectionQuality'] = var7;
                    var8 = _closure1_slot12;
                    var7 = var8.can;
                    var6 = _closure1_slot20;
                    var6 = var6.CREATE_INSTANT_INVITE;
                    var6 = var7.bind(var8)(var6, var9);
                    var2['canGenerateInvite'] = var6;
                    var5 = _closure3_slot0;
                    var5 = var5.channelSelectorResults;
                    var2['channelSelectorResults'] = var5;
                    var2 = var3.bind(var4)(var2);
 735:
                    return var1;
                }
            };
            var3['updateOverlayUI'] = var4;
            var4 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot13;
                    var2 = var4.getGuildId;
                    var5 = var2.bind(var4)();
                    var2 = null;
                    var6 = var2 != var5;
                    var4 = null;
                    if(!var6) { _fun0015_ip = 33; continue _fun0015 }
 30:
                    var4 = var5;
 33:
                    var1['currentGuildId'] = var4;
                    var4 = _closure1_slot13;
                    var3 = var4.getChannelId;
                    var3 = var3.bind(var4)();
                    var4 = var2 != var3;
                    var2 = null;
                    if(!var4) { _fun0015_ip = 64; continue _fun0015 }
 61:
                    var2 = var3;
 64:
                    var1['currentVoiceChannelId'] = var2;
                    return var1;
                }
            };
            var3['getVoiceConnectedGuildAndChannel'] = var4;
            var4 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var9 = arg1;
                    var3 = var9.length;
                    var1 = 0;
                    var7 = null;
                    if(!(var1 === var3)) { _fun0016_ip = 41; continue _fun0016 }
 18:
                    var3 = _closure3_slot0;
                    var1 = var3.getVoiceConnectedGuildAndChannel;
                    var1 = var1.bind(var3)();
                    var7 = var1.currentGuildId;
 41:
                    var3 = _closure3_slot0;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.queryChannels;
                    var4 = {};
                    var4['query'] = var9;
                    var4['guildId'] = var7;
                    var7 = 15;
                    var4['limit'] = var7;
                    var7 = true;
                    var4['fuzzy'] = var7;
                    var9 = function filter(arg1) {
                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                            var3 = arg1;
                            var2 = var3.id;
                            var1 = _closure3_slot0;
                            var1 = var1.currentVoiceChannelId;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0017_ip = 41; continue _fun0017 }
 28:
                            var2 = var3.isGuildStageVoice;
                            var2 = var2.bind(var3)();
                            var1 = !var2;
 41:
                            return var1;
                        }
                    };
                    var4['filter'] = var9;
                    var8 = _closure1_slot9;
                    var4['type'] = var8;
                    var4['allowEmptyQueries'] = var7;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.map;
                    var2 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var1 = arg1;
                            var5 = var1.record;
                            var1 = {};
                            var2 = var5.id;
                            var1['channelId'] = var2;
                            var2 = var5.guild_id;
                            var1['guildId'] = var2;
                            var2 = var5.name;
                            var1['channelName'] = var2;
                            var4 = _closure1_slot10;
                            var3 = var4.getGuild;
                            var2 = var5.guild_id;
                            var2 = var3.bind(var4)(var2);
                            var4 = null;
                            var7 = var4 == var2;
                            var8 = undefined;
                            if(var7) { _fun0018_ip = 77; continue _fun0018 }
 72:
                            var8 = var2.name;
 77:
                            var9 = var4 != var8;
                            var2 = '';
                            var7 = var2;
                            if(!var9) { _fun0018_ip = 94; continue _fun0018 }
 91:
                            var7 = var8;
 94:
                            var1['guildName'] = var7;
                            var7 = _closure1_slot8;
                            var6 = var7.getChannel;
                            var5 = var5.parent_id;
                            var5 = var6.bind(var7)(var5);
                            var6 = var4 == var5;
                            var3 = undefined;
                            if(var6) { _fun0018_ip = 133; continue _fun0018 }
 128:
                            var3 = var5.name;
 133:
                            var4 = var4 != var3;
                            if(!var4) { _fun0018_ip = 143; continue _fun0018 }
 140:
                            var2 = var3;
 143:
                            var1['categoryName'] = var2;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var3['channelSelectorResults'] = var2;
                    return var1;
                }
            };
            var3['refreshChannelSelectorResults'] = var4;
            var4 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = _closure3_slot0;
                    var1 = var2.getVoiceConnectedGuildAndChannel;
                    var1 = var1.bind(var2)();
                    var12 = var1.currentGuildId;
                    var5 = var1.currentVoiceChannelId;
                    var4 = _closure1_slot8;
                    var1 = var4.getChannel;
                    var15 = var1.bind(var4)(var5);
                    var4 = _closure1_slot13;
                    var1 = var4.getRTCConnectionId;
                    var10 = var1.bind(var4)();
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 33;
                    var6 = var4[var1];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var6);
                    var8 = var9.track;
                    var6 = _closure1_slot19;
                    var7 = var6.MOBILE_OVERLAY_OPENED;
                    var6 = {};
                    var11 = 'voice';
                    var6['type'] = var11;
                    var6['rtc_connection_id'] = var10;
                    var11 = _closure1_slot0;
                    var10 = 34;
                    var13 = var4[var10];
                    var14 = var11.bind(var1)(var13);
                    var13 = var14.collectChannelAnalyticsMetadata;
                    var16 = var13.bind(var14)(var15);
                    var17 = var6;
                    var13 = copyDataProperties(var17, var16);
                    var10 = var4[var10];
                    var11 = var11.bind(var1)(var10);
                    var10 = var11.collectGuildAnalyticsMetadata;
                    var16 = var10.bind(var11)(var12);
                    var17 = var6;
                    var10 = copyDataProperties(var17, var16);
                    var6 = var8.bind(var9)(var7, var6);
                    var6 = 27;
                    var4 = var4[var6];
                    var5 = var5.bind(var1)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0019_ip = 229; continue _fun0019 }
 197:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.showOverlay;
                    var4 = _closure1_slot23;
                    var4 = var5.bind(var6)(var4);
 229:
                    var3 = _closure3_slot0;
                    var4 = var3.updateOverlayUI;
                    var4 = var4.bind(var3)();
                    var2 = _closure1_slot22;
                    var2 = var2.SHOWING;
                    var3['overlayState'] = var2;
                    return var1;
                }
            };
            var3['showOverlay'] = var4;
            var4 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var3 = _closure1_slot13;
                    var1 = var3.getRTCConnectionId;
                    var11 = var1.bind(var3)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var6 = 33;
                    var5 = var3[var6];
                    var1 = undefined;
                    var10 = var4.bind(var1)(var5);
                    var9 = var10.track;
                    var5 = _closure1_slot19;
                    var8 = var5.MOBILE_OVERLAY_CLOSED;
                    var7 = {};
                    var12 = 'voice';
                    var7['type'] = var12;
                    var7['rtc_connection_id'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var6 = var3[var6];
                    var8 = var4.bind(var1)(var6);
                    var7 = var8.track;
                    var6 = var5.MOBILE_OVERLAY_CLOSED;
                    var5 = {};
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = 27;
                    var3 = var3[var5];
                    var4 = var4.bind(var1)(var3);
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 148; continue _fun0020 }
 121:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hideOverlay;
                    var3 = var3.bind(var4)();
 148:
                    var3 = _closure3_slot0;
                    var2 = _closure1_slot22;
                    var2 = var2.NOT_SHOWING;
                    var3['overlayState'] = var2;
                    return var1;
                }
            };
            var3['hideOverlay'] = var4;
            var4 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = _closure3_slot0;
                    var4 = var1.overlayState;
                    var1 = _closure1_slot22;
                    var1 = var1.SHOWING;
                    var1 = var4 === var1;
                    if(var1) { _fun0021_ip = 57; continue _fun0021 }
 33:
                    var3 = _closure3_slot0;
                    var3 = var3.overlayState;
                    var2 = _closure1_slot22;
                    var2 = var2.WAITING_FOR_SERVICE;
                    var1 = var3 === var2;
 57:
                    return var1;
                }
            };
            var3['isOverlayShowing'] = var4;
            var4 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure1_slot16;
                    var1 = var3.getUser;
                    var3 = var1.bind(var3)(var5);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0022_ip = 77; continue _fun0022 }
 27:
                    var4 = _closure1_slot15;
                    var2 = var4.isSpeaking;
                    var4 = var2.bind(var4)(var5);
                    var2 = {};
                    var2['userId'] = var5;
                    var5 = var3.avatar;
                    var2['avatar'] = var5;
                    var2['speaking'] = var4;
                    var3 = var3.discriminator;
                    var2['discriminator'] = var3;
                    return var2;
 77:
                    return var1;
                }
            };
            var3['getOverlayUser'] = var4;
            var4 = function() {
                var2 = _closure3_slot0;
                var1 = var2.currentVoiceChannelId;
                var2['trashedVoiceChannelId'] = var1;
                var1 = var2.handleOverlayUIStoreUpdate;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['handleLayoutTrashed'] = var4;
            var2 = function(arg1) {
                var2 = _closure3_slot0;
                var3 = var2.refreshChannelSelectorResults;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = var2.handleOverlayUIStoreUpdate;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var3['handleChannelQueryUpdate'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 29;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isFabric;
                var4 = var4.bind(var5)();
                if(var4) { _fun0023_ip = 47; continue _fun0023 }
 41:
                var4 = var2.isBatchedBridgeInitialized;
 47:
                if(var4) { _fun0023_ip = 123; continue _fun0023 }
 50:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 35;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.registerCallableModule;
                var4 = _closure1_slot25;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var10 = var5;
                var9 = var2;
                var4 = new var10[var4](var9, var8);
                var5 = var4 instanceof Object ? var4 : var5;
                var4 = 'MobileVoiceOverlayManager';
                var4 = var6.bind(var7)(var4, var5);
                var4 = true;
                var2['isBatchedBridgeInitialized'] = var4;
 123:
                var5 = _closure1_slot18;
                var4 = var5.getEnabled;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0023_ip = 150; continue _fun0023 }
 140:
                var4 = var2.handleOverlayEnable;
                var4 = var4.bind(var2)();
 150:
                var4 = _closure1_slot18;
                var3 = var4.addChangeListener;
                var2 = var2.handleMobileVoiceOverlayStoreUpdate;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'terminate';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var4 = _closure1_slot18;
            var3 = var4.removeChangeListener;
            var1 = var2.handleMobileVoiceOverlayStoreUpdate;
            var1 = var3.bind(var4)(var1);
            var1 = var2.unsubscribeFromVoiceStateStoreUpdates;
            var1 = var1.bind(var2)();
            var1 = var2.unsubscribeFromNativeEvents;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var19 = var8;
    var4 = new var19[var4](var18);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot24 = var4;
    var4 = function() {
        var4 = _closure1_slot7;
        var3 = function NativeCallableInterface(arg1) {
            var3 = this;
            var4 = _closure1_slot6;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['manager'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'onLayoutTrashed';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.manager;
            var1 = var2.handleLayoutTrashed;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'onChannelQueryUpdate';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = this;
            var3 = var1.manager;
            var2 = var3.handleChannelQueryUpdate;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot25 = var4;
    var4 = 36;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MobileVoiceOverlayLifecycleManager() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot26;
                var1 = var1.bind(var3)();
                if(var1) { _fun0024_ip = 69; continue _fun0024 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0024_ip = 105; continue _fun0024;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            var2 = _closure1_slot24;
            var1 = var2.initialize;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            var2 = _closure1_slot24;
            var1 = var2.terminate;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var19 = var4;
    var2 = new var19[var2](var18);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();