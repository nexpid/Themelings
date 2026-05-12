// app/modules/user_settings/defs/native/UploadDebugLogsSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = function _handleUploadDebugLogSettingPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = undefined;
                    var2 = undefined;
                    var5 = function onUploadDebugLogsRequestStart() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            var3 = _closure1_slot7;
                            var2 = var3.setState;
                            var1 = {'isDisabled': true, 'isUploading': true};
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var5.bind(var4)();
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 6;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    var6 = _closure1_slot5;
                    if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = var6.ANDROID_APP;
                    _fun0001_ip = 6; continue _fun0001;
case 4:
                    var5 = var6.IOS_APP;
case 6:
                    var2 = var5;
case 7: // try_start_0 // try_start_1
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 7;
                    var5 = var8[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.uploadDebugLogFiles;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=119);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var6 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var5 = 8;
                    var5 = var13[var5];
                    var8 = var6.bind(var4)(var5);
                    var6 = var8.open;
                    var5 = {};
                    var9 = 'USER_SETTINGS_CACHES_CLEARED';
                    var5['key'] = var9;
                    var12 = _closure1_slot0;
                    var9 = 9;
                    var9 = var13[var9];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.CircleInformationIcon;
                    var5['IconComponent'] = var9;
                    var9 = 10;
                    var10 = var13[var9];
                    var10 = var12.bind(var4)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.t;
                    var9 = var9.BvyxE7;
                    var9 = var10.bind(var11)(var9);
                    var5['content'] = var9;
                    var5 = var6.bind(var8)(var5);
case 12: // try_end0
                    _fun0001_ip = 13; continue _fun0001;
case 10: // try_end1
                    var5 = function onUploadDebugLogsRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot7;
                            var2 = var3.setState;
                            var1 = {'isDisabled': true, 'isUploading': false};
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot7;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = false;
                                var1['isDisabled'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = 5000;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var5 = var5.bind(var4)();
                    return var2;
case 14: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 8;
                    var2 = var11[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.open;
                    var2 = {};
                    var8 = 'USER_SETTINGS_CACHES_CLEARED';
                    var2['key'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 9;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.CircleInformationIcon;
                    var2['IconComponent'] = var7;
                    var7 = 10;
                    var8 = var11[var7];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.VzHcSm;
                    var7 = var8.bind(var9)(var7);
                    var2['content'] = var7;
                    var2 = var5.bind(var6)(var2);
case 13: // try_end2
                    var2 = function onUploadDebugLogsRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot7;
                            var2 = var3.setState;
                            var1 = {'isDisabled': true, 'isUploading': false};
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot7;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = false;
                                var1['isDisabled'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = 5000;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2 = var2.bind(var4)();
                    return var4;
case 15: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var3 = function onUploadDebugLogsRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot7;
                            var2 = var3.setState;
                            var1 = {'isDisabled': true, 'isUploading': false};
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var4.bind(var5)(var3);
                        var3 = global;
                        var4 = var3.setTimeout;
                        var3 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot7;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = false;
                                var1['isDisabled'] = var4;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = 5000;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)();
                    throw var2;
case 2:
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
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityIndicator;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.DebugLogCategory;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.create;
    var2 = function() {
        var1 = {'isDisabled': false, 'isUploading': false};
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var _closure1_slot7 = var2;
    var2 = 11;
    var2 = var6[var2];
    var7 = var5.bind(var1)(var2);
    var4 = var7.createPressable;
    var2 = {};
    var9 = function useTitle() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.aY1OH2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['useTitle'] = var9;
    var9 = null;
    var2['parent'] = var9;
    var9 = 9;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.CircleInformationIcon;
    var2['IconComponent'] = var9;
    var9 = function handleUploadDebugLogSettingPress() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onPress'] = var9;
    var9 = function useUploadDebugLogsTrailing() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot7;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var3 = var1.isUploading;
            var1 = null;
            if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var2['useTrailing'] = var9;
    var8 = function useIsUploadDebugLogsDisabled() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.isDisabled;
        return var1;
    };
    var2['useIsDisabled'] = var8;
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/defs/native/UploadDebugLogsSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();