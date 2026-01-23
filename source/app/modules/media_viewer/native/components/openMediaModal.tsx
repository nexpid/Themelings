// app/modules/media_viewer/native/components/openMediaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function pushLazy() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _pushLazy() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var20 = var7.initialIndex;
                    var4 = undefined;
                    if(!(var20 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var20 = 0;
case 4:
                    var9 = var7.initialSources;
                    var19 = var7.swipeVelocityThreshold;
                    if(!(var19 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var19 = 1000;
case 6:
                    var13 = var7.shareable;
                    if(!(var13 === var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var13 = true;
case 8:
                    var8 = var7.analyticsSource;
                    var12 = var7.guildId;
                    var11 = var7.channelId;
                    var10 = var7.channelType;
                    var15 = var7.isRNModal;
                    if(!(var15 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var15 = false;
case 10:
                    var6 = {'initialIndex': 0, 'initialSources': 0, 'swipeVelocityThreshold': 0, 'shareable': 0, 'analyticsSource': 0, 'guildId': 0, 'channelId': 0, 'channelType': 0, 'isRNModal': 0};
                    var28 = null;
                    var29 = var6;
                    var2 = silentSetPrototypeOf(var29, var28);
                    var5 = 0;
                    var29 = {};
                    var28 = var7;
                    var27 = var6;
                    var6 = copyDataProperties(var29, var28, var27);
                    SaveGenerator(address=136);
case 12:
                    return var4;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var3 = global;
                    var17 = var3.Promise;
                    var7 = var17.all;
                    var23 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var21 = 4;
                    var3 = var18[var21];
                    var24 = var23.bind(var4)(var3);
                    var14 = 3;
                    var22 = var18[var14];
                    var3 = var18.paths;
                    var22 = var24.bind(var4)(var22, var3);
                    var3 = new Array(3);
                    var3[0] = var22;
                    var22 = var18[var21];
                    var25 = var23.bind(var4)(var22);
                    var22 = 5;
                    var24 = var18[var22];
                    var22 = var18.paths;
                    var22 = var25.bind(var4)(var24, var22);
                    var3[1] = var22;
                    var22 = var18[var21];
                    var23 = var23.bind(var4)(var22);
                    var22 = 6;
                    var22 = var18[var22];
                    var18 = var18.paths;
                    var18 = var23.bind(var4)(var22, var18);
                    var3[2] = var18;
                    var3 = var7.bind(var17)(var3);
                    SaveGenerator(address=279);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var7 = _closure1_slot3;
                    var14 = var7.bind(var4)(var3, var14);
                    var5 = var14[var5];
                    var17 = var5.setMediaViewerSources;
                    var5 = 1;
                    var5 = var14[var5];
                    var7 = var5.startMediaViewerSession;
                    var5 = 2;
                    var5 = var14[var5];
                    var5 = var5.initVideoStateStore;
                    var14 = {};
                    var14['sources'] = var9;
                    var14['initialIndex'] = var20;
                    var14 = var17.bind(var4)(var14);
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var14 = 7;
                    var14 = var18[var14];
                    var18 = var17.bind(var4)(var14);
                    var17 = var18.pushLazy;
                    var22 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var21 = var14[var21];
                    var22 = var22.bind(var4)(var21);
                    if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var15 = 9;
                    var21 = var14[var15];
                    var15 = var14.paths;
                    var15 = var22.bind(var4)(var21, var15);
                    _fun0001_ip = 22; continue _fun0001;
case 20:
                    var21 = 8;
                    var21 = var14[var21];
                    var14 = var14.paths;
                    var15 = var22.bind(var4)(var21, var14);
case 22:
                    var14 = {};
                    var29 = var14;
                    var28 = var6;
                    var6 = copyDataProperties(var29, var28);
                    var6 = 'initialIndex';
                    var14[var6] = var20;
                    var6 = 'swipeVelocityThreshold';
                    var14[var6] = var19;
                    var6 = 'shareable';
                    var14[var6] = var13;
                    var27 = _closure1_slot7;
                    var6 = {};
                    var19 = 'none';
                    var6['animation'] = var19;
                    var30 = var18;
                    var29 = var15;
                    var28 = var14;
                    var26 = var6;
                    var6 = var30[var17](var29, var28, var27, var26, var25);
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var6 = 10;
                    var6 = var14[var6];
                    var15 = var13.bind(var4)(var6);
                    var14 = var15.track;
                    var6 = _closure1_slot5;
                    var13 = var6.OPEN_MODAL;
                    var6 = {};
                    var16 = _closure1_slot6;
                    var16 = var16.MEDIA_VIEWER;
                    var6['type'] = var16;
                    var6['source'] = var8;
                    var6['channel_id'] = var11;
                    var6['channel_type'] = var10;
                    var6 = var14.bind(var15)(var13, var6);
                    var6 = {};
                    var6['guildId'] = var12;
                    var6['channelId'] = var11;
                    var6['channelType'] = var10;
                    var9 = var9.length;
                    var6['numMediaItems'] = var9;
                    var6['source'] = var8;
                    var6 = var7.bind(var4)(var6);
                    var5 = var5.bind(var4)();
                    return var4;
case 18:
                    return var3;
case 14:
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot6 = var7;
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/openMediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openMediaModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = var2.origin;
            var6 = var2.originLayout;
            var _closure2_slot1 = var6;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            if(!(var4 != var6)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = _closure1_slot8;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = 'originLayout';
            var4[var2] = var6;
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            _fun0002_ip = 25; continue _fun0002;
case 23:
            var2 = var3.measureInWindow;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg3;
                    var4 = arg4;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var13 = _closure2_slot0;
                    var14 = var2;
                    var1 = copyDataProperties(var14, var13);
                    var5 = {};
                    var1 = _closure2_slot1;
                    var7 = null;
                    var9 = var7 == var1;
                    var1 = undefined;
                    var10 = undefined;
                    if(var9) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                    var9 = _closure2_slot1;
                    var10 = var9.width;
case 27:
                    var9 = var6;
                    if(!(var7 != var10)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var9 = var10;
case 29:
                    var9 = var9 - var6;
                    var10 = 2;
                    var11 = var9 / var10;
                    var9 = arg1;
                    var9 = var9 - var11;
                    var5['x'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var7 == var9;
                    var11 = undefined;
                    if(var9) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var9 = _closure2_slot1;
                    var11 = var9.height;
case 31:
                    var9 = var4;
                    if(!(var7 != var11)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var9 = var11;
case 33:
                    var9 = var9 - var4;
                    var10 = var9 / var10;
                    var9 = arg2;
                    var9 = var9 - var10;
                    var5['y'] = var9;
                    var9 = _closure2_slot1;
                    var10 = var7 == var9;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var10 = _closure2_slot1;
                    var9 = var10.width;
case 35:
                    if(!(var7 != var9)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                    var6 = var9;
case 37:
                    var5['width'] = var6;
                    var6 = _closure2_slot1;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                    var8 = _closure2_slot1;
                    var6 = var8.height;
case 39:
                    if(!(var7 != var6)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var4 = var6;
case 41:
                    var5['height'] = var4;
                    var4 = 'originLayout';
                    var2[var4] = var5;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 25:
            var1 = undefined;
            return var1;
        }
    };
    var3['openMediaModal'] = var2;
    return var1;
})();