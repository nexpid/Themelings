// app/modules/user_settings/native/defs/UploadIntlDataSetting.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _serializeIntlData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 637; continue _fun0001 }
 10:
                    var10 = undefined;
                    var6 = undefined;
                    var8 = undefined;
 16: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 8;
                    var2 = var9[var2];
                    var4 = var7.bind(var10)(var2);
                    var3 = var4.loadJsonAsset;
                    var2 = 9;
                    var2 = var9[var2];
                    var2 = var7.bind(var10)(var2);
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=65);
 63:
                    return var2;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 605; continue _fun0001 }
 74:
                    var6 = var2;
                    var7 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var11 = 10;
                    var3 = var13[var11];
                    var3 = var12.bind(var10)(var3);
                    var3 = var3.intl;
                    var3 = var3.currentLocale;
                    var7['currentLocale'] = var3;
                    var3 = var13[var11];
                    var3 = var12.bind(var10)(var3);
                    var3 = var3.systemLocale;
                    var7['systemLocale'] = var3;
                    var3 = var13[var11];
                    var3 = var12.bind(var10)(var3);
                    var3 = var3.initialLocale;
                    var7['initialLocale'] = var3;
                    var4 = {};
                    var3 = global;
                    var15 = var3.Object;
                    var14 = var15.fromEntries;
                    var17 = var3.Object;
                    var16 = var17.keys;
                    var9 = var13[var11];
                    var9 = var12.bind(var10)(var9);
                    var9 = var9.t;
                    var17 = var16.bind(var17)(var9);
                    var16 = var17.map;
                    var9 = function(arg1) {
                        var5 = arg1;
                        var1 = new Array(2);
                        var1[0] = var5;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 10;
                        var3 = var8[var2];
                        var6 = undefined;
                        var3 = var7.bind(var6)(var3);
                        var4 = var3.intl;
                        var3 = var4.reserialize;
                        var2 = var8[var2];
                        var2 = var7.bind(var6)(var2);
                        var2 = var2.t;
                        var2 = var2[var5];
                        var2 = var3.bind(var4)(var2);
                        var1[1] = var2;
                        return var1;
                    };
                    var9 = var16.bind(var17)(var9);
                    var19 = var14.bind(var15)(var9);
                    var20 = var4;
                    var9 = copyDataProperties(var20, var19);
                    var7['messagesFromIntl'] = var4;
                    var4 = {};
                    var20 = var4;
                    var19 = var2;
                    var9 = copyDataProperties(var20, var19);
                    var7['messagesFromFile'] = var4;
                    var4 = {};
                    var9 = var3.Date;
                    var14 = var9.prototype;
                    var14 = Object.create(var14, {constructor: {value: var9}});
                    var21 = var14;
                    var9 = new var21[var9](var20);
                    var14 = var9 instanceof Object ? var9 : var14;
                    var9 = var14.toISOString;
                    var9 = var9.bind(var14)();
                    var4['timestamp'] = var9;
                    var9 = 11;
                    var9 = var13[var9];
                    var12 = var12.bind(var10)(var9);
                    var9 = var12.isIOS;
                    var12 = var9.bind(var12)();
                    var9 = 'Android';
                    if(!var12) { _fun0001_ip = 338; continue _fun0001 }
 332:
                    var9 = 'iOS';
 338:
                    var4['platform'] = var9;
                    var12 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var9 = 7;
                    var9 = var13[var9];
                    var12 = var12.bind(var10)(var9);
                    var9 = var12.getConstants;
                    var9 = var9.bind(var12)();
                    var8 = var9;
                    var12 = var9.Manifest;
                    var9 = var12.trim;
                    var9 = var9.bind(var12)();
                    var12 = var9.length;
                    var9 = 0;
                    var9 = var12 > var9;
                    var13 = 'N/A';
                    if(!var9) { _fun0001_ip = 421; continue _fun0001 }
 412:
                    var9 = var8;
                    var13 = var9.Manifest;
 421:
                    var9 = var8;
                    var12 = var9.Identifier;
                    var14 = var9.Build;
                    var8 = {};
                    var15 = var9.Version;
                    var8['appVersion'] = var15;
                    var8['buildNumber'] = var14;
                    var8['manifest'] = var13;
                    var13 = var9.ReleaseChannel;
                    var8['releaseChannel'] = var13;
                    var8['identifier'] = var12;
                    var9 = var9.OTABuild;
                    var8['otaBuild'] = var9;
                    var4['clientInfo'] = var8;
                    var9 = var3.Object;
                    var8 = var9.keys;
                    var6 = var8.bind(var9)(var6);
                    var6 = var6.length;
                    var4['messagesFromFileKeys'] = var6;
                    var8 = var3.Object;
                    var6 = var8.keys;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var11];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.t;
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.length;
                    var4['messagesFromIntlKeys'] = var5;
                    var7['metadata'] = var4;
                    var6 = var3.JSON;
                    var5 = var6.stringify;
                    var4 = null;
                    var3 = 2;
                    var3 = var5.bind(var6)(var7, var4, var3);
 602: // try_end0
                    return var3;
 605:
                    return var2;
 608: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'Failed to serialize intl data: ';
                    var2 = var3.bind(var2)(var4);
                    return var2;
 637:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _handleUploadIntlDataSettingPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 429; continue _fun0002 }
 12:
                    var4 = undefined;
                    var5 = undefined;
                    var2 = function onUploadIntlDataRequestStart() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            var3 = _closure1_slot9;
                            var2 = var3.setState;
                            var1 = {'isDisabled': true, 'isUploading': true};
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var2.bind(var4)();
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 11;
                    var2 = var8[var2];
                    var6 = var6.bind(var4)(var2);
                    var2 = var6.isIOS;
                    var2 = var2.bind(var6)();
                    var6 = _closure1_slot6;
                    if(var2) { _fun0002_ip = 75; continue _fun0002 }
 67:
                    var2 = var6.ANDROID_APP;
                    _fun0002_ip = 81; continue _fun0002;
 75:
                    var2 = var6.IOS_APP;
 81:
                    var5 = var2;
 84: // try_start_0 // try_start_1
                    var2 = function serializeIntlData() {
                        var1 = undefined;
                        var4 = _closure1_slot10;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=99);
 97:
                    return var2;
 99:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 311; continue _fun0002 }
 108:
                    var9 = _closure1_slot7;
                    var8 = var9.DEBUG_LOG;
                    var6 = var5;
                    var5 = 'intl_data';
                    var9 = var8.bind(var9)(var6, var5);
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 12;
                    var5 = var8[var5];
                    var5 = var6.bind(var4)(var5);
                    var8 = var5.HTTP;
                    var6 = var8.post;
                    var5 = {'url': null, 'body': null, 'retries': 3, 'headers': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var5['url'] = var9;
                    var5['body'] = var2;
                    var9 = {};
                    var10 = 'application/json';
                    var9['Content-Type'] = var10;
                    var5['headers'] = var9;
                    var5 = var6.bind(var8)(var5);
                    SaveGenerator(address=216);
 214:
                    return var5;
 216:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 297; continue _fun0002 }
 222:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var6 = 13;
                    var6 = var12[var6];
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.open;
                    var6 = {'key': 'USER_SETTINGS_INTL_DATA_UPLOADED', 'IconComponent': null, 'content': 'Internationalization data uploaded successfully.'};
                    var11 = _closure1_slot0;
                    var10 = 14;
                    var10 = var12[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.CircleInformationIcon;
                    var6['IconComponent'] = var10;
                    var6 = var8.bind(var9)(var6);
 295: // try_end0
                    _fun0002_ip = 400; continue _fun0002;
 297: // try_end1
                    var6 = function onUploadIntlDataRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot9;
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
                            var2 = _closure1_slot3;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot9;
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
                    var6 = var6.bind(var4)();
                    return var5;
 311:
                    var5 = function onUploadIntlDataRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot9;
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
                            var2 = _closure1_slot3;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot9;
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
 325: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=1);
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var2 = 13;
                    var2 = var9[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.open;
                    var2 = {'key': 'USER_SETTINGS_INTL_DATA_UPLOAD_FAILED', 'IconComponent': null, 'content': 'Failed to upload internationalization data.'};
                    var8 = _closure1_slot0;
                    var7 = 14;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.CircleInformationIcon;
                    var2['IconComponent'] = var7;
                    var2 = var5.bind(var6)(var2);
 400: // try_end2
                    var2 = function onUploadIntlDataRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot9;
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
                            var2 = _closure1_slot3;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot9;
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
 414: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    var3 = function onUploadIntlDataRequestFinish() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchUpdates;
                        var3 = function() {
                            var3 = _closure1_slot9;
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
                            var2 = _closure1_slot3;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() {
                                var3 = _closure1_slot9;
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
 429:
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
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityIndicator;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.DebugLogCategory;
    var _closure1_slot6 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot7 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.RendererType;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var9 = var5.bind(var1)(var2);
    var8 = var9.create;
    var2 = function() {
        var1 = {'isDisabled': false, 'isUploading': false};
        return var1;
    };
    var2 = var8.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var7 = var7.PRESSABLE;
    var2['type'] = var7;
    var7 = function title() {
        var1 = 'Upload i18n data';
        return var1;
    };
    var2['title'] = var7;
    var7 = null;
    var2['parent'] = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FileUpIcon;
    var2['IconComponent'] = var7;
    var7 = function handleUploadIntlDataSettingPress() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['onPress'] = var7;
    var7 = 16;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.useStaffOrDeveloperSettingPredicate;
    var2['usePredicate'] = var7;
    var7 = function useUploadIntlDataTrailing() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot9;
            var5 = undefined;
            var1 = var1.bind(var5)();
            var3 = var1.isUploading;
            var1 = null;
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
 24:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 40:
            return var1;
        }
    };
    var2['useTrailing'] = var7;
    var4 = function useIsUploadIntlDataDisabled() {
        var2 = _closure1_slot9;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = var1.isDisabled;
        return var1;
    };
    var2['useIsDisabled'] = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/defs/UploadIntlDataSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();