// app/modules/media/native/MediaPlayerManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var2 = function isPlaybackComplete(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.duration;
            var2 = 0;
            if(!(!(var3 <= var2))) { _fun0002_ip = 42; continue _fun0002 }
 14:
            var2 = var1.duration;
            var1 = var1.time;
            var2 = var2 - var1;
            var1 = _closure1_slot16;
            var1 = var2 <= var1;
            return var1;
 42:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.NativeEventEmitter;
    var _closure1_slot8 = var6;
    var4 = var4.NativeModules;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.PLAYBACK_COMPLETION_DETECTION_TOLERANCE;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var8[var4];
    var10 = var9.bind(var1)(var4);
    var4 = var10.prototype;
    var6 = Object.create(var4, {constructor: {value: var10}});
    var13 = 'MediaPlayerManager';
    var14 = var6;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var6 = var10.create;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'canAccessMedia': true, 'isPlaying': false, 'wasPipClosedByUser': false, 'progress': null, 'rate': 0, 'showPip': false};
        var2 = undefined;
        var1['activeMediaPlayerSource'] = var2;
        var1['mediaSourceMessage'] = var2;
        var1['progress'] = var2;
        var3 = function closePip() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = false;
                var2['showPip'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['closePip'] = var3;
        var3 = {};
        var1['displayedMediaItemIdsPerChannel'] = var3;
        var1['currentlyDisplayedChannelId'] = var2;
        return var1;
    };
    var4 = var6.bind(var10)(var4);
    var _closure1_slot19 = var4;
    var6 = 21;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var5 = function(arg1) {
        var4 = function MediaPlayerManager() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var4, var3);
                var1 = _closure1_slot6;
                var9 = var1.bind(var2)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var2)();
                if(var1) { _fun0003_ip = 62; continue _fun0003 }
 49:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var4, var2);
                _fun0003_ip = 100; continue _fun0003;
 62:
                var6 = global;
                var8 = var6.Reflect;
                var7 = var8.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var2)(var4);
                var6 = var5.constructor;
                var5 = new Array(0);
                var1 = var7.bind(var8)(var9, var5, var6);
 100:
                var1 = var3.bind(var2)(var4, var1);
                var3 = new Array(0);
                var1['subscriptions'] = var3;
                var1['voicePanelStoreUnsubscribe'] = var2;
                var3 = var1.pauseAndClosePip;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['pauseAndClosePip'] = var2;
                var3 = var1.handleVoicePanelStateUpdated;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleVoicePanelStateUpdated'] = var2;
                var3 = var1.handleEmbeddedActivitiesUpdated;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleEmbeddedActivitiesUpdated'] = var2;
                var3 = var1.handleMediaPlayerPlaybackRateChanged;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleMediaPlayerPlaybackRateChanged'] = var2;
                var3 = var1.handleMediaPlayerPlaybackSourceChanged;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleMediaPlayerPlaybackSourceChanged'] = var2;
                var3 = var1.handleMediaPlayerViewWillAppear;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleMediaPlayerViewWillAppear'] = var2;
                var3 = var1.handleMediaPlayerViewDidDisappear;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['handleMediaPlayerViewDidDisappear'] = var2;
                var3 = var1.updateDisplayState;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['updateDisplayState'] = var2;
                var3 = var1.updateMediaPermissions;
                var2 = var3.bind;
                var2 = var2.bind(var3)(var1);
                var1['updateMediaPermissions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var6 = _closure1_slot8;
                var1 = _closure1_slot9;
                var10 = var1.MediaPlayerManager;
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var8 = var4 instanceof Object ? var4 : var5;
                var6 = var8.addListener;
                var5 = var3.handleMediaPlayerPlaybackSourceChanged;
                var4 = 'MediaPlayerPlaybackSourceChanged';
                var5 = var6.bind(var8)(var4, var5);
                var4 = new Array(5);
                var4[0] = var5;
                var7 = var8.addListener;
                var6 = var3.handleMediaPlayerPlaybackProgressUpdated;
                var5 = 'MediaPlayerPlaybackProgressUpdated';
                var5 = var7.bind(var8)(var5, var6);
                var4[1] = var5;
                var7 = var8.addListener;
                var6 = var3.handleMediaPlayerPlaybackRateChanged;
                var5 = 'MediaPlayerPlaybackRateChanged';
                var5 = var7.bind(var8)(var5, var6);
                var4[2] = var5;
                var7 = var8.addListener;
                var6 = var3.handleMediaPlayerViewWillAppear;
                var5 = 'MediaPlayerViewWillAppear';
                var5 = var7.bind(var8)(var5, var6);
                var4[3] = var5;
                var7 = var8.addListener;
                var6 = var3.handleMediaPlayerViewDidDisappear;
                var5 = 'MediaPlayerViewDidDisappear';
                var5 = var7.bind(var8)(var5, var6);
                var4[4] = var5;
                var3['subscriptions'] = var4;
                var4 = var1.MediaPlayerManager;
                var1 = var4.subscribeToPlaybackEvents;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getRootNavigationRef;
                var7 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var7)) { _fun0004_ip = 270; continue _fun0004 }
 248:
                var6 = var7.addListener;
                var5 = var3.updateDisplayState;
                var4 = 'state';
                var4 = var6.bind(var7)(var4, var5);
 270:
                var6 = _closure1_slot11;
                var5 = var6.subscribe;
                var4 = var3.handleVoicePanelStateUpdated;
                var4 = var5.bind(var6)(var4);
                var3['voicePanelStoreUnsubscribe'] = var4;
                var6 = _closure1_slot10;
                var5 = var6.addChangeListener;
                var4 = var3.handleEmbeddedActivitiesUpdated;
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot12;
                var5 = var6.addChangeListener;
                var4 = var3.updateMediaPermissions;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot14;
                var4 = var5.addChangeListener;
                var3 = var3.updateMediaPermissions;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot18;
                var3 = var4.verbose;
                var2 = 'Initialized and subscribed to playback events';
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'updateMediaPermissions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var4 = var1.activeMediaPlayerSource;
                    var6 = _closure1_slot12;
                    var5 = var6.getChannel;
                    var3 = null;
                    var8 = var3 == var4;
                    var1 = undefined;
                    var7 = undefined;
                    if(var8) { _fun0005_ip = 50; continue _fun0005 }
 45:
                    var7 = var4.channelId;
 50:
                    var8 = var3 != var7;
                    var4 = null;
                    if(!var8) { _fun0005_ip = 62; continue _fun0005 }
 59:
                    var4 = var7;
 62:
                    var6 = var5.bind(var6)(var4);
                    if(!(var3 != var6)) { _fun0005_ip = 156; continue _fun0005 }
 71:
                    var3 = var6.isPrivate;
                    var3 = var3.bind(var6)();
                    if(var3) { _fun0005_ip = 156; continue _fun0005 }
 84:
                    var5 = _closure1_slot14;
                    var4 = var5.can;
                    var3 = _closure1_slot17;
                    var3 = var3.VIEW_CHANNEL;
                    var3 = var4.bind(var5)(var3, var6);
                    if(var3) { _fun0005_ip = 156; continue _fun0005 }
 113:
                    var5 = _closure1_slot19;
                    var4 = var5.setState;
                    var3 = {};
                    var6 = false;
                    var3['canAccessMedia'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure3_slot0;
                    var3 = var4.pauseCurrentPlayer;
                    var3 = var3.bind(var4)();
                    _fun0005_ip = 180; continue _fun0005;
 156:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = true;
                    var2['canAccessMedia'] = var5;
                    var2 = var3.bind(var4)(var2);
 180:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var4 = var2.subscriptions;
                var3 = var4.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var1 = new Array(0);
                var2['subscriptions'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 17;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getRootNavigationRef;
                var8 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var8)) { _fun0006_ip = 101; continue _fun0006 }
 79:
                var7 = var8.removeListener;
                var6 = var2.updateDisplayState;
                var5 = 'state';
                var5 = var7.bind(var8)(var5, var6);
 101:
                var5 = var2.voicePanelStoreUnsubscribe;
                if(!(var4 != var5)) { _fun0006_ip = 121; continue _fun0006 }
 111:
                var4 = var5.call;
                var4 = var4.bind(var5)(var2);
 121:
                var6 = _closure1_slot10;
                var5 = var6.removeChangeListener;
                var4 = var2.handleEmbeddedActivitiesUpdated;
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot12;
                var5 = var6.removeChangeListener;
                var4 = var2.updateMediaPermissions;
                var4 = var5.bind(var6)(var4);
                var4 = _closure1_slot14;
                var3 = var4.removeChangeListener;
                var2 = var2.updateMediaPermissions;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'pauseCurrentPlayer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var2 = var1.MediaPlayerManager;
            var1 = var2.pauseCurrentPlayer;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'playCurrentPlayer';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var2 = var1.MediaPlayerManager;
            var1 = var2.playCurrentPlayer;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'userDidClosePip';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot19;
                var2 = var3.setState;
                var1 = {'wasPipClosedByUser': true, 'showPip': false};
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'pauseAndClosePip';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.pauseCurrentPlayer;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot19;
                var2 = var3.setState;
                var1 = {'wasPipClosedByUser': true, 'showPip': false};
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleVoicePanelStateUpdated';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var3 = _closure1_slot11;
                var1 = var3.getState;
                var3 = var1.bind(var3)();
                var1 = var3.isVoicePanelFullscreen;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 50; continue _fun0007 }
 33:
                var3 = var3.voicePanelsPIP;
                var4 = var3.size;
                var3 = 0;
                var1 = var4 > var3;
 50:
                if(!var1) { _fun0007_ip = 63; continue _fun0007 }
 53:
                var1 = var2.pauseAndClosePip;
                var1 = var1.bind(var2)();
 63:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleEmbeddedActivitiesUpdated';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot10;
                var3 = var4.getActivityPanelMode;
                var3 = var3.bind(var4)();
                var1 = _closure1_slot15;
                var1 = var1.PIP;
                if(!(var3 === var1)) { _fun0008_ip = 44; continue _fun0008 }
 34:
                var1 = var2.pauseAndClosePip;
                var1 = var1.bind(var2)();
 44:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleMediaPlayerPlaybackRateChanged';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var3 = var1.source;
            var _closure3_slot1 = var3;
            var1 = var1.rate;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure3_slot1;
                    var9 = null;
                    if(!(var9 == var1)) { _fun0009_ip = 45; continue _fun0009 }
 13:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var1 = {'rate': 0, 'isPlaying': false};
                    var1 = var3.bind(var4)(var1);
 45:
                    var6 = _closure1_slot18;
                    var5 = var6.verbose;
                    var11 = _closure3_slot2;
                    var1 = _closure3_slot1;
                    var4 = var9 == var1;
                    var1 = undefined;
                    var10 = undefined;
                    if(var4) { _fun0009_ip = 86; continue _fun0009 }
 77:
                    var4 = _closure3_slot1;
                    var10 = var4.id;
 86:
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'Playback rate changed to ';
                    var4 = ': ';
                    var4 = var8.bind(var7)(var11, var4, var10);
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot19;
                    var4 = var5.getState;
                    var4 = var4.bind(var5)();
                    var6 = var4.activeMediaPlayerSource;
                    var8 = var4.isPlaying;
                    var7 = var4.wasPipClosedByUser;
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var4 = 18;
                    var4 = var10[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = _closure3_slot1;
                    var9 = var9 != var4;
                    var4 = undefined;
                    if(!var9) { _fun0009_ip = 192; continue _fun0009 }
 188:
                    var4 = _closure3_slot1;
 192:
                    var4 = var5.bind(var1)(var6, var4);
                    if(var4) { _fun0009_ip = 256; continue _fun0009 }
 201:
                    var6 = _closure3_slot0;
                    var5 = var6.handleMediaPlayerPlaybackSourceChanged;
                    var4 = {};
                    var9 = _closure3_slot1;
                    var4['source'] = var9;
                    var4 = var5.bind(var6)(var4);
                    var5 = var6.handleMediaPlayerPlaybackRateChanged;
                    var4 = {};
                    var4['source'] = var9;
                    var9 = _closure3_slot2;
                    var4['rate'] = var9;
                    var4 = var5.bind(var6)(var4);
                    var4 = undefined;
                    return var4;
 256:
                    var5 = _closure1_slot19;
                    var4 = var5.setState;
                    var3 = {};
                    var6 = _closure3_slot2;
                    var3['rate'] = var6;
                    var9 = 0;
                    var6 = var9 !== var6;
                    var3['isPlaying'] = var6;
                    var6 = false;
                    var8 = var6 === var8;
                    if(!var8) { _fun0009_ip = 305; continue _fun0009 }
 297:
                    var6 = _closure3_slot2;
                    var8 = var6 > var9;
 305:
                    var6 = !var8;
                    if(var8) { _fun0009_ip = 314; continue _fun0009 }
 311:
                    var6 = var7;
 314:
                    var3['wasPipClosedByUser'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var2 = var3.updateDisplayState;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleMediaPlayerPlaybackProgressUpdated';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = var1.source;
            var _closure3_slot0 = var3;
            var3 = var1.time;
            var _closure3_slot1 = var3;
            var1 = var1.duration;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var3 = var1.bind(var3)();
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var3.activeMediaPlayerSource;
                    var3 = _closure3_slot0;
                    var5 = null;
                    var8 = var5 != var3;
                    var3 = undefined;
                    if(!var8) { _fun0010_ip = 67; continue _fun0010 }
 63:
                    var3 = _closure3_slot0;
 67:
                    var3 = var7.bind(var1)(var6, var3);
                    if(!var3) { _fun0010_ip = 147; continue _fun0010 }
 76:
                    var6 = _closure3_slot2;
                    var3 = 0;
                    var3 = var6 > var3;
                    var6 = null;
                    if(!var3) { _fun0010_ip = 113; continue _fun0010 }
 91:
                    var3 = {};
                    var7 = _closure3_slot1;
                    var3['time'] = var7;
                    var4 = _closure3_slot2;
                    var3['duration'] = var4;
                    var6 = var3;
 113:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var7 = var5 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0010_ip = 137; continue _fun0010 }
 134:
                    var5 = var6;
 137:
                    var2['progress'] = var5;
                    var2 = var3.bind(var4)(var2);
 147:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleMediaPlayerPlaybackSourceChanged';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var1 = var1.source;
            var _closure3_slot1 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure1_slot19;
                    var1 = var2.getState;
                    var4 = var1.bind(var2)();
                    var8 = _closure1_slot18;
                    var6 = var8.verbose;
                    var1 = _closure3_slot1;
                    var7 = null;
                    var5 = var7 == var1;
                    var1 = undefined;
                    var10 = undefined;
                    if(var5) { _fun0011_ip = 56; continue _fun0011 }
 47:
                    var5 = _closure3_slot1;
                    var10 = var5.id;
 56:
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var5 = 'Playback source changed: ';
                    var5 = var9.bind(var5)(var10);
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 18;
                    var5 = var8[var5];
                    var6 = var6.bind(var1)(var5);
                    var4 = var4.activeMediaPlayerSource;
                    var8 = var7 != var4;
                    var5 = undefined;
                    if(!var8) { _fun0011_ip = 123; continue _fun0011 }
 120:
                    var5 = var4;
 123:
                    var4 = _closure3_slot1;
                    var8 = var7 != var4;
                    var4 = undefined;
                    if(!var8) { _fun0011_ip = 140; continue _fun0011 }
 136:
                    var4 = _closure3_slot1;
 140:
                    var4 = var6.bind(var1)(var5, var4);
                    if(var4) { _fun0011_ip = 274; continue _fun0011 }
 152:
                    var5 = _closure1_slot19;
                    var4 = var5.setState;
                    var3 = {'activeMediaPlayerSource': null, 'mediaSourceMessage': null, 'progress': null, 'rate': 0, 'isPlaying': false, 'wasPipClosedByUser': false};
                    var6 = _closure3_slot1;
                    var8 = var7 != var6;
                    var6 = undefined;
                    if(!var8) { _fun0011_ip = 193; continue _fun0011 }
 189:
                    var6 = _closure3_slot1;
 193:
                    var3['activeMediaPlayerSource'] = var6;
                    var6 = _closure3_slot1;
                    var7 = var7 != var6;
                    var6 = undefined;
                    if(!var7) { _fun0011_ip = 233; continue _fun0011 }
 212:
                    var9 = _closure3_slot0;
                    var8 = var9.getOrFetchMediaSourceMessage;
                    var7 = _closure3_slot1;
                    var6 = var8.bind(var9)(var7);
 233:
                    var3['mediaSourceMessage'] = var6;
                    var3['progress'] = var1;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure3_slot0;
                    var2 = var3.updateMediaPermissions;
                    var2 = var2.bind(var3)();
                    var2 = var3.updateDisplayState;
                    var2 = var2.bind(var3)();
 274:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getOrFetchMediaSourceMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var3 = this;
                var _closure3_slot0 = var3;
                var7 = var1.channelId;
                var6 = var1.messageId;
                var4 = null;
                if(!(var4 != var6)) { _fun0012_ip = 32; continue _fun0012 }
 28:
                if(!(var4 == var7)) { _fun0012_ip = 36; continue _fun0012 }
 32:
                var1 = undefined;
                return var1;
 36:
                var5 = _closure1_slot13;
                var1 = var5.getMessage;
                var1 = var1.bind(var5)(var7, var6);
                if(!(var4 == var1)) { _fun0012_ip = 119; continue _fun0012 }
 59:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 19;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.fetchMessage;
                var3 = {};
                var3['channelId'] = var7;
                var3['messageId'] = var6;
                var4 = var4.bind(var5)(var3);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0013_ip = 29; continue _fun0013 }
 9:
                        var2 = _closure3_slot0;
                        var1 = var2.handleMediaSourceMessageUpdated;
                        var1 = var1.bind(var2)(var3);
 29:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 119:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleMediaSourceMessageUpdated';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var3 = var1.activeMediaPlayerSource;
                    var1 = null;
                    var5 = var1 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0014_ip = 41; continue _fun0014 }
 36:
                    var4 = var3.messageId;
 41:
                    var3 = _closure3_slot0;
                    var3 = var3.id;
                    if(!(var4 === var3)) { _fun0014_ip = 83; continue _fun0014 }
 57:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = _closure3_slot0;
                    var2['mediaSourceMessage'] = var5;
                    var2 = var3.bind(var4)(var2);
 83:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'handleMediaPlayerViewWillAppear';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var3 = var1.mediaItemIds;
            var _closure3_slot1 = var3;
            var1 = var1.channelId;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var5 = var1.displayedMediaItemIdsPerChannel;
                    var3 = _closure3_slot2;
                    var7 = var5[var3];
                    var3 = null;
                    if(!(var3 == var7)) { _fun0015_ip = 44; continue _fun0015 }
 40:
                    var7 = new Array(0);
 44:
                    var3 = global;
                    var6 = var3.Set;
                    var3 = new Array(0);
                    var8 = 0;
                    var10 = var3;
                    var9 = var7;
                    var8 = arraySpread(var10, var9, var8);
                    var9 = _closure3_slot1;
                    var10 = var3;
                    var4 = arraySpread(var10, var9, var8);
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var11 = var4;
                    var10 = var3;
                    var3 = new var11[var6](var10, var9);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = _closure3_slot2;
                    var5[var3] = var4;
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var2['displayedMediaItemIdsPerChannel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure3_slot0;
                    var1 = var2.updateDisplayState;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'handleMediaPlayerViewDidDisappear';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var3 = var1.mediaItemIds;
            var _closure3_slot1 = var3;
            var1 = var1.channelId;
            var _closure3_slot2 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var5 = var1.displayedMediaItemIdsPerChannel;
                    var4 = global;
                    var7 = var4.Set;
                    var3 = _closure3_slot2;
                    var3 = var5[var3];
                    var6 = null;
                    if(!(var6 == var3)) { _fun0016_ip = 74; continue _fun0016 }
 48:
                    var4 = var4.Set;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {constructor: {value: var4}});
                    var12 = var6;
                    var4 = new var12[var4](var11);
                    var3 = var4 instanceof Object ? var4 : var6;
 74:
                    var8 = new Array(0);
                    var6 = 0;
                    var11 = var8;
                    var10 = var3;
                    var9 = 0;
                    var3 = arraySpread(var11, var10, var9);
                    var4 = var8.filter;
                    var3 = function(arg1) {
                        var3 = _closure3_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var11 = var4.bind(var8)(var3);
                    var4 = var7.prototype;
                    var4 = Object.create(var4, {constructor: {value: var7}});
                    var12 = var4;
                    var3 = new var12[var7](var11, var10);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.size;
                    if(!(var6 !== var3)) { _fun0016_ip = 150; continue _fun0016 }
 140:
                    var3 = _closure3_slot2;
                    var5[var3] = var4;
                    _fun0016_ip = 158; continue _fun0016;
 150:
                    var3 = _closure3_slot2;
                    var3 = delete var5[var3];
 158:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var2['displayedMediaItemIdsPerChannel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure3_slot0;
                    var1 = var2.updateDisplayState;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'updateDisplayState';
        var5['key'] = var7;
        var6 = function value() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = var3.getState;
                    var3 = var1.bind(var3)();
                    var6 = var3.displayedMediaItemIdsPerChannel;
                    var4 = var3.currentlyDisplayedChannelId;
                    var5 = var3.activeMediaPlayerSource;
                    var1 = undefined;
                    if(!(var1 === var5)) { _fun0017_ip = 43; continue _fun0017 }
 41:
                    var5 = {};
 43:
                    var11 = var5.id;
                    var5 = var3.wasPipClosedByUser;
                    var7 = var3.progress;
                    var8 = var3.isPlaying;
                    var3 = var3.showPip;
                    if(var5) { _fun0017_ip = 358; continue _fun0017 }
 78:
                    if(var8) { _fun0017_ip = 87; continue _fun0017 }
 81:
                    if(!var3) { _fun0017_ip = 382; continue _fun0017 }
 87:
                    if(var8) { _fun0017_ip = 114; continue _fun0017 }
 90:
                    var3 = null;
                    var3 = var3 != var7;
                    if(!var3) { _fun0017_ip = 111; continue _fun0017 }
 99:
                    var5 = _closure1_slot21;
                    var5 = var5.bind(var1)(var7);
                    var3 = !var5;
 111:
                    var8 = var3;
 114:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 20;
                    var3 = var7[var3];
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.getFocusedChannelId;
                    var7 = var3.bind(var5)();
                    var3 = null;
                    if(!(var3 != var7)) { _fun0017_ip = 187; continue _fun0017 }
 150:
                    if(!(var4 !== var7)) { _fun0017_ip = 187; continue _fun0017 }
 154:
                    var10 = var6;
                    for(var4 in var10)
 165:
                    {
 174:
                        var13 = var4;
                        if(var13 === var7) { _fun0017_ip = 165; continue _fun0017 }
 181:
                        var13 = delete var6[var13];
                        _fun0017_ip = 165; continue _fun0017;
                    }
 187:
                    if(!(var3 == var11)) { _fun0017_ip = 228; continue _fun0017 }
 191:
                    var9 = _closure1_slot19;
                    var5 = var9.setState;
                    var4 = {};
                    var4['showPip'] = var8;
                    var4['currentlyDisplayedChannelId'] = var7;
                    var4['displayedMediaItemIdsPerChannel'] = var6;
                    var4 = var5.bind(var9)(var4);
                    _fun0017_ip = 382; continue _fun0017;
 228:
                    if(!(var3 == var7)) { _fun0017_ip = 266; continue _fun0017 }
 232:
                    var9 = _closure1_slot19;
                    var5 = var9.setState;
                    var4 = {};
                    var4['showPip'] = var8;
                    var4['currentlyDisplayedChannelId'] = var7;
                    var4['displayedMediaItemIdsPerChannel'] = var6;
                    var4 = var5.bind(var9)(var4);
                    _fun0017_ip = 382; continue _fun0017;
 266:
                    var10 = var6[var7];
                    if(!(var3 == var10)) { _fun0017_ip = 308; continue _fun0017 }
 274:
                    var5 = _closure1_slot19;
                    var4 = var5.setState;
                    var3 = {};
                    var3['showPip'] = var8;
                    var3['currentlyDisplayedChannelId'] = var7;
                    var3['displayedMediaItemIdsPerChannel'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0017_ip = 382; continue _fun0017;
 308:
                    var5 = _closure1_slot19;
                    var4 = var5.setState;
                    var3 = {};
                    if(!var8) { _fun0017_ip = 336; continue _fun0017 }
 323:
                    var9 = var10.has;
                    var9 = var9.bind(var10)(var11);
                    var8 = !var9;
 336:
                    var3['showPip'] = var8;
                    var3['currentlyDisplayedChannelId'] = var7;
                    var3['displayedMediaItemIdsPerChannel'] = var6;
                    var3 = var4.bind(var5)(var3);
                    _fun0017_ip = 382; continue _fun0017;
 358:
                    var4 = _closure1_slot19;
                    var3 = var4.setState;
                    var2 = {};
                    var5 = false;
                    var2['showPip'] = var5;
                    var2 = var3.bind(var4)(var2);
 382:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var5 = var5.bind(var1)(var6);
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var14 = var6;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/media/native/MediaPlayerManager.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useMediaPlayerManagerStore'] = var4;
    var3['isPlaybackComplete'] = var2;
    return var1;
})();