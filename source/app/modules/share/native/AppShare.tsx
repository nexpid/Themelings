// app/modules/share/native/AppShare.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.BackHandler;
    var _closure1_slot5 = var8;
    var4 = var4.NativeModules;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/native/AppShare.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppShare(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var2 = function useInitialization(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.targetUserId;
                    var _closure3_slot0 = var7;
                    var10 = undefined;
                    var _closure3_slot3 = var10;
                    var11 = _closure1_slot4;
                    var2 = var11.useState;
                    var1 = false;
                    var2 = var2.bind(var11)(var1);
                    var1 = _closure1_slot3;
                    var9 = 2;
                    var5 = var1.bind(var10)(var2, var9);
                    var2 = 0;
                    var1 = var5[var2];
                    var _closure3_slot1 = var1;
                    var6 = 1;
                    var5 = var5[var6];
                    var _closure3_slot2 = var5;
                    var8 = var11.useState;
                    var5 = null;
                    var5 = var5 == var7;
                    if(var5) { _fun0002_ip = 106; continue _fun0002 }
 88:
                    var13 = _closure1_slot7;
                    var12 = var13.getId;
                    var12 = var12.bind(var13)();
                    var5 = var12 === var7;
 106:
                    var8 = var8.bind(var11)(var5);
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var10)(var8, var9);
                    var2 = var5[var2];
                    var5 = var5[var6];
                    _closure3_slot3 = var5;
                    var6 = _closure1_slot4;
                    var8 = var6.useEffect;
                    var5 = new Array(1);
                    var5[0] = var1;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var2 = _closure3_slot1;
                            if(var2) { _fun0003_ip = 56; continue _fun0003 }
 10:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.init;
                            var2 = var2.bind(var4)();
                            var2 = _closure3_slot2;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
 56:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = var8.bind(var6)(var4, var5);
                    var5 = var6.useEffect;
                    var4 = new Array(1);
                    var4[0] = var7;
                    var3 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure3_slot0;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
 16:
                            var4 = _closure1_slot7;
                            var3 = var4.getId;
                            var3 = var3.bind(var4)();
                            var2 = _closure3_slot0;
                            var1 = var3 !== var2;
 41:
                            if(!var1) { _fun0004_ip = 72; continue _fun0004 }
 44:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 12;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.switchAccount;
                                var3 = _closure3_slot0;
                                var2 = false;
                                var4 = var4.bind(var5)(var3, var2);
                                var3 = var4.then;
                                var2 = function() {
                                    var3 = _closure3_slot3;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var1 = 18;
                            var1 = var4.bind(var3)(var2, var1);
 72:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3, var4);
                    if(!var1) { _fun0002_ip = 195; continue _fun0002 }
 192:
                    var1 = var2;
 195:
                    return var1;
                }
            };
            var4 = undefined;
            var5 = var2.bind(var4)(var10);
            var2 = function useAuthenticated() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() {
                    var2 = _closure1_slot7;
                    var1 = var2.isAuthenticated;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = var6.bind(var7)(var5, var4);
                var _closure3_slot0 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure3_slot0;
                        if(!var1) { _fun0005_ip = 108; continue _fun0005 }
 10:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var2);
                        var3 = var6.startSession;
                        var7 = _closure1_slot7;
                        var2 = var7.getToken;
                        var2 = var2.bind(var7)();
                        var2 = var3.bind(var6)(var2);
                        var3 = _closure1_slot0;
                        var2 = 10;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0005_ip = 108; continue _fun0005 }
 88:
                        var1 = _closure1_slot6;
                        var2 = var1.NativePermissionManager;
                        var1 = var2.requestNotificationAuthorization;
                        var1 = var1.bind(var2)();
 108:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var2 = var2.bind(var4)();
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var2 = var10.attachments;
            var2 = var2.length;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var10.text;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.EXTERNAL_SHARE_OPENED;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.text;
                    var7 = null;
                    var7 = var7 != var8;
                    if(!var7) { _fun0006_ip = 83; continue _fun0006 }
 63:
                    var8 = _closure2_slot0;
                    var8 = var8.text;
                    var9 = var8.length;
                    var8 = 0;
                    var7 = var9 > var8;
 83:
                    var2['has_content'] = var7;
                    var6 = _closure2_slot0;
                    var6 = var6.attachments;
                    var7 = var6.length;
                    var6 = 0;
                    var6 = var7 > var6;
                    var2['has_attachment'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var2, var3);
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 15;
            var3 = var7[var3];
            var3 = var2.bind(var4)(var3);
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var3 = var2.attachments;
                var3 = var3.length;
                var1['numAttachments'] = var3;
                var4 = var2.attachments;
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.mimeType;
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = 'unknown';
                        if(!var3) { _fun0007_ip = 25; continue _fun0007 }
 22:
                        var1 = var2;
 25:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1['mimeTypes'] = var2;
                var6 = var1.numAttachments;
                var2 = var1.mimeTypes;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackAppUIViewed;
                var3 = {};
                var3['share_num_attachments'] = var6;
                var3['share_attachment_mimetypes'] = var2;
                var2 = 'share';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot10;
            var1 = 16;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = 'share';
            var1['appEntryKey'] = var7;
            var9 = _closure1_slot9;
            if(var5) { _fun0001_ip = 189; continue _fun0001 }
 153:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 18;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.SceneLoadingIndicator;
            var5 = {};
            var7 = var9.bind(var4)(var7, var5);
            _fun0001_ip = 237; continue _fun0001;
 189:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 17;
            var5 = var11[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var5['sharedContent'] = var10;
            var10 = _closure1_slot5;
            var10 = var10.exitApp;
            var5['onClose'] = var10;
            var7 = var9.bind(var4)(var8, var5);
 237:
            var5 = new Array(4);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 19;
            var10 = var9[var10];
            var10 = var7.bind(var4)(var10);
            var11 = var10.ActionSheetContainer;
            var10 = {};
            var10 = var8.bind(var4)(var11, var10);
            var5[1] = var10;
            var10 = _closure1_slot1;
            var6 = 20;
            var6 = var9[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var6 = var8.bind(var4)(var10, var6);
            var5[2] = var6;
            var6 = 21;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.AlertModalContainer;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();