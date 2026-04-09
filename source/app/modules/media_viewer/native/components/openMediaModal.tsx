// app/modules/media_viewer/native/components/openMediaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _openMediaModal() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = var9.originViewOrOriginLayout;
                    var2 = var9.initialIndex;
                    var4 = undefined;
                    if(!(var2 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2 = 0;
case 4:
                    var _closure4_slot0 = var2;
                    var2 = var9.initialSources;
                    var _closure4_slot1 = var2;
                    var2 = var9.analyticsSource;
                    var _closure4_slot2 = var2;
                    var2 = var9.channelId;
                    var _closure4_slot3 = var2;
                    var2 = var9.onClose;
                    var _closure4_slot4 = var2;
                    var8 = {'originViewOrOriginLayout': 0, 'initialIndex': 0, 'initialSources': 0, 'analyticsSource': 0, 'channelId': 0, 'onClose': 0};
                    var18 = null;
                    var19 = var8;
                    var2 = silentSetPrototypeOf(var19, var18);
                    var6 = 0;
                    var19 = {};
                    var18 = var9;
                    var17 = var8;
                    var2 = copyDataProperties(var19, var18, var17);
                    var _closure4_slot5 = var2;
                    var _closure4_slot6 = var4;
                    var _closure4_slot7 = var4;
                    var _closure4_slot8 = var4;
                    SaveGenerator(address=135);
case 6:
                    return var4;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var3 = global;
                    var10 = var3.Promise;
                    var9 = var10.all;
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var12 = 5;
                    var3 = var11[var12];
                    var15 = var13.bind(var4)(var3);
                    var3 = 4;
                    var14 = var11[var3];
                    var3 = var11.paths;
                    var14 = var15.bind(var4)(var14, var3);
                    var3 = new Array(3);
                    var3[0] = var14;
                    var14 = var11[var12];
                    var16 = var13.bind(var4)(var14);
                    var14 = 6;
                    var15 = var11[var14];
                    var14 = var11.paths;
                    var14 = var16.bind(var4)(var15, var14);
                    var3[1] = var14;
                    var12 = var11[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = 7;
                    var12 = var11[var12];
                    var11 = var11.paths;
                    var11 = var13.bind(var4)(var12, var11);
                    var3[2] = var11;
                    var3 = var9.bind(var10)(var3);
                    SaveGenerator(address=278);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var9 = _closure1_slot3;
                    var8 = 3;
                    var8 = var9.bind(var4)(var3, var8);
                    var6 = var8[var6];
                    var6 = var6.setMediaViewerSources;
                    _closure4_slot6 = var6;
                    var6 = 1;
                    var6 = var8[var6];
                    var6 = var6.MediaViewerAnalytics;
                    _closure4_slot7 = var6;
                    var6 = 2;
                    var6 = var8[var6];
                    var6 = var6.initVideoStateStore;
                    _closure4_slot8 = var6;
                    var6 = function getMeasureInWindowFunction(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var4 = arg1;
                            var _closure5_slot0 = var4;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0002_ip = 14; continue _fun0002 }
case 3:
                            var2 = 'measureInWindow';
                            var2 = var2 in var4;
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 14:
                            var1 = function(arg1) {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    var3 = _closure5_slot0;
                                    var1 = null;
                                    if(!(var1 == var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                                    var1 = {'x': 0, 'y': 0};
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 3;
                                    var7 = var6[var3];
                                    var4 = undefined;
                                    var8 = var5.bind(var4)(var7);
                                    var7 = var8.getWindowDimensions;
                                    var7 = var7.bind(var8)();
                                    var7 = var7.width;
                                    var1['width'] = var7;
                                    var3 = var6[var3];
                                    var4 = var5.bind(var4)(var3);
                                    var3 = var4.getWindowDimensions;
                                    var3 = var3.bind(var4)();
                                    var3 = var3.height;
                                    var1['height'] = var3;
                                    _fun0003_ip = 17; continue _fun0003;
case 15:
                                    var1 = _closure5_slot0;
case 17:
                                    var13 = var1.x;
                                    var12 = var1.y;
                                    var11 = var1.width;
                                    var10 = var1.height;
                                    var9 = var1.resizeMode;
                                    var2 = arg1;
                                    var1 = undefined;
                                    var14 = undefined;
                                    var2 = var14[var2](var13, var12, var11, var10, var9, var8);
                                    return var1;
                                }
                            };
                            _fun0002_ip = 18; continue _fun0002;
case 4:
                            var3 = var4.measureInWindow;
                            var2 = var3.bind;
                            var1 = var2.bind(var3)(var4);
case 18:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var4)(var7);
                    var5 = function(arg1, arg2, arg3, arg4, arg5) {
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var4 = var2[var1];
                        var1 = undefined;
                        var9 = var5.bind(var1)(var4);
                        var8 = var9.pushLazy;
                        var5 = _closure1_slot0;
                        var4 = 5;
                        var4 = var2[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = 9;
                        var4 = var2[var4];
                        var2 = var2.paths;
                        var7 = var5.bind(var1)(var4, var2);
                        var6 = {};
                        var13 = _closure4_slot5;
                        var14 = var6;
                        var4 = copyDataProperties(var14, var13);
                        var5 = _closure4_slot0;
                        var4 = 'initialIndex';
                        var6[3] = var5;
                        var10 = {};
                        var4 = arg1;
                        var10['x'] = var4;
                        var4 = arg2;
                        var10['y'] = var4;
                        var4 = arg3;
                        var10['width'] = var4;
                        var4 = arg4;
                        var10['height'] = var4;
                        var4 = arg5;
                        var10['resizeMode'] = var4;
                        var4 = 'originLayout';
                        var6[3] = var10;
                        var10 = _closure4_slot4;
                        var4 = 'onCloseCallback';
                        var6[3] = var10;
                        var12 = _closure1_slot5;
                        var3 = {};
                        var10 = 'none';
                        var3['animation'] = var10;
                        var15 = var9;
                        var14 = var7;
                        var13 = var6;
                        var11 = var3;
                        var3 = var15[var8](var14, var13, var12, var11, var10);
                        var4 = _closure4_slot6;
                        var3 = {};
                        var6 = _closure4_slot1;
                        var3['sources'] = var6;
                        var3['initialIndex'] = var5;
                        var3 = var4.bind(var1)(var3);
                        var5 = _closure4_slot7;
                        var4 = var5.markSessionStarted;
                        var3 = {};
                        var7 = _closure4_slot3;
                        var3['channelId'] = var7;
                        var6 = var6.length;
                        var3['numMediaItems'] = var6;
                        var6 = _closure4_slot2;
                        var3['source'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure4_slot8;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var5 = var6.bind(var4)(var5);
                    var5 = !var5;
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/openMediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openMediaModal() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['openMediaModal'] = var2;
    return var1;
})();