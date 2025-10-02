// app/modules/video_backgrounds/VideoBackgroundActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _fetchVideoFilterAssets() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.get;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.VIDEO_FILTER_ASSETS;
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=76);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['assets'] = var6;
                    var3 = var4.bind(var5)(var3);
case 8: // try_end0
                    return var2;
case 6:
                    return var2;
case 9: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIDEO_FILTER_ASSETS_FETCH_FAILURE';
                    var3['type'] = var6;
                    var3['error'] = var2;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _uploadVideoFilterAsset() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                    var8 = arg1;
                    var10 = arg2;
                    var9 = arg3;
case 11: // try_start_0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.post;
                    var2 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.VIDEO_FILTER_ASSETS;
                    var2['url'] = var7;
                    var7 = {};
                    var7['type'] = var10;
                    var7['asset'] = var8;
                    var10 = var9;
                    var8 = null;
                    var10 = var8 == var10;
                    var8 = undefined;
                    if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var10 = var9;
                    var9 = var10.toISOString;
                    var8 = var9.bind(var10)();
case 12:
                    var7['last_used'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=135);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS';
                    var3['type'] = var6;
                    var6 = var2.body;
                    var3['videoFilterAsset'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
case 18: // try_end0
                    return var3;
case 16:
                    return var2;
case 19: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var12 = var3;
                    var11 = var4;
                    var2 = new var12[var2](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _deleteVideoFilterAsset() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.del;
                    var2 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.VIDEO_FILTER_ASSET;
                    var8 = var7.id;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=90);
case 22:
                    return var2;
case 23:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 7;
                    var5 = var9[var5];
                    var10 = var8.bind(var3)(var5);
                    var6 = var10.getLastUsedVideoBackgroundOption;
                    var11 = _closure1_slot5;
                    var5 = var11.getCurrentUser;
                    var5 = var5.bind(var11)();
                    var6 = var6.bind(var10)(var5);
                    var5 = 8;
                    var5 = var9[var5];
                    var8 = var8.bind(var3)(var5);
                    var5 = var8.isCustomBackgroundOption;
                    var5 = var5.bind(var8)(var6);
                    if(!var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var8 = var6.id;
                    var6 = var7.id;
                    var5 = var8 === var6;
case 26:
                    if(!var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var6 = _closure1_slot10;
                    var5 = null;
                    var5 = var6.bind(var3)(var5);
case 28:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'VIDEO_FILTER_ASSET_DELETE_SUCCESS';
                    var4['type'] = var8;
                    var4['videoFilterAsset'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 24:
                    return var2;
case 20:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function saveLastUsedBackgroundOption() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _saveLastUsedBackgroundOption() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var _closure4_slot0 = var8;
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 9;
                    var7 = var10[var3];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var7);
                    var9 = var7.PreloadedUserSettingsActionCreators;
                    var7 = var9.updateAsync;
                    var3 = var10[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.UserSettingsDelay;
                    var6 = var3.FREQUENT_USER_ACTION;
                    var3 = 'voiceAndVideo';
                    var2 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getVideoBackgroundProtoFromOption;
                        var2 = _closure4_slot0;
                        var3 = var3.bind(var4)(var2);
                        var2 = arg1;
                        var2['videoBackgroundFilterDesktop'] = var3;
                        return var1;
                    };
                    var2 = var7.bind(var9)(var3, var2, var6);
                    SaveGenerator(address=99);
case 32:
                    return var2;
case 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 8;
                    var3 = var7[var3];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.isCustomBackgroundOption;
                    var3 = var3.bind(var6)(var8);
                    if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 5;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.dispatch;
                    var3 = {};
                    var9 = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    var3['type'] = var9;
                    var3['backgroundOption'] = var8;
                    var3 = var6.bind(var7)(var3);
                    _fun0004_ip = 37; continue _fun0004;
case 35:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.post;
                    var3 = {};
                    var10 = _closure1_slot6;
                    var9 = var10.VIDEO_FILTER_ASSET_LAST_USED;
                    var8 = var8.id;
                    var8 = var9.bind(var10)(var8);
                    var3['url'] = var8;
                    var8 = false;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=266);
case 38:
                    return var3;
case 39:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 5;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                    var5['type'] = var8;
                    var8 = var3.body;
                    var5['backgroundOption'] = var8;
                    var5 = var6.bind(var7)(var5);
case 37:
                    return var4;
case 40:
                    return var3;
case 33:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_backgrounds/VideoBackgroundActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchVideoFilterAssets() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchVideoFilterAssets'] = var5;
    var5 = function uploadVideoFilterAsset() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['uploadVideoFilterAsset'] = var5;
    var5 = function deleteVideoFilterAsset() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteVideoFilterAsset'] = var5;
    var3['saveLastUsedBackgroundOption'] = var4;
    var4 = function applyMediaFilterSettings(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.isSupported;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS';
            var1['type'] = var4;
            var4 = arg1;
            var1['settings'] = var4;
            var1 = var2.bind(var3)(var1);
case 42:
            var1 = undefined;
            return var1;
        }
    };
    var3['applyMediaFilterSettings'] = var4;
    var4 = function startApplyMediaFilterSettings() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.isSupported;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0006_ip = 44; continue _fun0006 }
case 43:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START';
            var1['type'] = var4;
            var1 = var2.bind(var3)(var1);
case 44:
            var1 = undefined;
            return var1;
        }
    };
    var3['startApplyMediaFilterSettings'] = var4;
    var2 = function errorApplyingMediaFilterSettings() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['errorApplyingMediaFilterSettings'] = var2;
    return var1;
})();