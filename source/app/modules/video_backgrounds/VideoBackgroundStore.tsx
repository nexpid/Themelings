// app/modules/video_backgrounds/VideoBackgroundStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function hasVideoBackgroundLive(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot10;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var2 = null;
            if(!(var2 != var1)) { _fun0002_ip = 141; continue _fun0002 }
 25:
            if(!(var2 == var3)) { _fun0002_ip = 97; continue _fun0002 }
 29:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 9;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.getVideoBackgroundOptionFromProto;
            var8 = _closure1_slot7;
            var8 = var8.settings;
            var8 = var8.voiceAndVideo;
            var9 = var2 == var8;
            if(var9) { _fun0002_ip = 86; continue _fun0002 }
 80:
            var5 = var8.videoBackgroundFilterDesktop;
 86:
            var1 = var1.id;
            var3 = var6.bind(var7)(var5, var1);
 97:
            var5 = _closure1_slot9;
            var1 = var5.getVoiceChannelId;
            var1 = var1.bind(var5)();
            var1 = var2 != var1;
            if(!var1) { _fun0002_ip = 132; continue _fun0002 }
 118:
            var5 = _closure1_slot8;
            var4 = var5.isVideoEnabled;
            var1 = var4.bind(var5)();
 132:
            if(!var1) { _fun0002_ip = 139; continue _fun0002 }
 135:
            var1 = var2 != var3;
 139:
            return var1;
 141:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleSyncedStoresUpdate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot12;
            var4 = _closure1_slot9;
            var1 = var4.getVoiceChannelId;
            var1 = var1.bind(var4)();
            if(!(var2 !== var1)) { _fun0003_ip = 31; continue _fun0003 }
 25:
            var1 = false;
            _closure1_slot13 = var1;
 31:
            var2 = _closure1_slot16;
            var1 = undefined;
            var2 = var2.bind(var1)();
            if(!var2) { _fun0003_ip = 50; continue _fun0003 }
 44:
            var2 = true;
            _closure1_slot13 = var2;
 50:
            var4 = _closure1_slot9;
            var2 = var4.getVoiceChannelId;
            var2 = var2.bind(var4)();
            _closure1_slot12 = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = false;
    var _closure1_slot11 = var2;
    var8 = null;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var2;
    var2 = {};
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function VideoBackgroundStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var6 = var4.waitFor;
            var5 = _closure1_slot7;
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var2 = var6.bind(var4)(var5, var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot9;
            var2 = new Array(2);
            var2[0] = var5;
            var5 = _closure1_slot8;
            var2[1] = var5;
            var1 = _closure1_slot17;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'videoFilterAssets';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasBeenApplied';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasUsedBackgroundInCall';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'VideoBackgroundStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleVideoFilterAssetFetchSuccess(arg1) {
        var2 = arg1;
        var4 = var2.assets;
        var2 = {};
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = _closure2_slot0;
            var2 = var1.id;
            var3[var2] = var1;
            return var1;
        };
        var1 = var3.bind(var4)(var1);
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['VIDEO_FILTER_ASSETS_FETCH_SUCCESS'] = var9;
    var9 = function handleAddBackground(arg1) {
        var1 = arg1;
        var4 = var1.videoFilterAsset;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = var4.id;
        var2[var3] = var4;
        _closure1_slot14 = var2;
        var1 = undefined;
        return var1;
    };
    var2['VIDEO_FILTER_ASSET_UPLOAD_SUCCESS'] = var9;
    var9 = function handleRemoveBackground(arg1) {
        var1 = arg1;
        var1 = var1.videoFilterAsset;
        var2 = {};
        var5 = _closure1_slot14;
        var6 = var2;
        var4 = copyDataProperties(var6, var5);
        _closure1_slot14 = var2;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['VIDEO_FILTER_ASSET_DELETE_SUCCESS'] = var9;
    var9 = function handleSaveLastUsedBackgroundOption(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.backgroundOption;
            var2 = _closure1_slot16;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            if(!var2) { _fun0005_ip = 32; continue _fun0005 }
 26:
            var2 = true;
            _closure1_slot13 = var2;
 32:
            return var1;
        }
    };
    var2['VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION'] = var9;
    var9 = function handleApplyMediaFilterSettings(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.settings;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var2 = var2.FilterSettingsKey;
            var2 = var2.CAMERA_BACKGROUND_LIVE;
            var2 = var2 in var4;
            if(!var2) { _fun0006_ip = 59; continue _fun0006 }
 53:
            var2 = true;
            _closure1_slot11 = var2;
 59:
            return var1;
        }
    };
    var2['MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS'] = var9;
    var4 = function handleLogout() {
        var1 = false;
        _closure1_slot11 = var1;
        _closure1_slot13 = var1;
        var1 = null;
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/VideoBackgroundStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();