// app/modules/media_viewer/native/components/openMediaModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function pushLazy(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var17 = var4.initialIndex;
            var1 = undefined;
            if(!(var17 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = 0;
case 2:
            var8 = var4.initialSources;
            var12 = var4.swipeVelocityThreshold;
            if(!(var12 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = 1000;
case 4:
            var6 = var4.shareable;
            if(!(var6 === var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = true;
case 6:
            var7 = var4.analyticsSource;
            var11 = var4.guildId;
            var10 = var4.channelId;
            var9 = var4.channelType;
            var3 = {'initialIndex': 0, 'initialSources': 0, 'swipeVelocityThreshold': 0, 'shareable': 0, 'analyticsSource': 0, 'guildId': 0, 'channelId': 0, 'channelType': 0};
            var20 = null;
            var21 = var3;
            var2 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var4;
            var19 = var3;
            var20 = copyDataProperties(var21, var20, var19);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 1;
            var5 = var4[var5];
            var15 = var3.bind(var1)(var5);
            var14 = var15.setMediaViewerSources;
            var5 = {};
            var5['sources'] = var8;
            var5['initialIndex'] = var17;
            var5 = var14.bind(var15)(var5);
            var5 = _closure1_slot1;
            var14 = 2;
            var14 = var4[var14];
            var16 = var5.bind(var1)(var14);
            var15 = var16.pushLazy;
            var14 = {};
            var21 = var14;
            var2 = copyDataProperties(var21, var20);
            var2 = 'initialIndex';
            var14[var2] = var17;
            var2 = 'swipeVelocityThreshold';
            var14[var2] = var12;
            var2 = 'shareable';
            var14[var2] = var6;
            var19 = _closure1_slot5;
            var18 = _closure1_slot6;
            var21 = function() {
                var1 = global;
                var3 = var1.Promise;
                var2 = var3.resolve;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var16;
            var20 = var14;
            var2 = var22[var15](var21, var20, var19, var18, var17);
            var2 = 4;
            var2 = var4[var2];
            var12 = var5.bind(var1)(var2);
            var6 = var12.track;
            var2 = _closure1_slot3;
            var5 = var2.OPEN_MODAL;
            var2 = {};
            var13 = _closure1_slot4;
            var13 = var13.MEDIA_VIEWER;
            var2['type'] = var13;
            var2['source'] = var7;
            var2['channel_id'] = var10;
            var2['channel_type'] = var9;
            var2 = var6.bind(var12)(var5, var2);
            var2 = 5;
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var5 = var6.startMediaViewerSession;
            var2 = {};
            var2['guildId'] = var11;
            var2['channelId'] = var10;
            var2['channelType'] = var9;
            var8 = var8.length;
            var2['numMediaItems'] = var8;
            var2['source'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = 6;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.initVideoStateStore;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot3 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot4 = var7;
    var4 = var4.MEDIA_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'none';
    var4['animation'] = var7;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/openMediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openMediaModal(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var2;
            var6 = var2.originLayout;
            var _closure2_slot1 = var6;
            var4 = null;
            if(!(var4 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            if(!(var4 != var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot7;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = 'originLayout';
            var4[var2] = var6;
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var2 = var3.measureInWindow;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = arg3;
                    var4 = arg4;
                    var3 = _closure1_slot7;
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
                    if(var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var9 = _closure2_slot1;
                    var10 = var9.width;
case 12:
                    var9 = var6;
                    if(!(var7 != var10)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var9 = var10;
case 14:
                    var9 = var9 - var6;
                    var10 = 2;
                    var11 = var9 / var10;
                    var9 = arg1;
                    var9 = var9 - var11;
                    var5['x'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var7 == var9;
                    var11 = undefined;
                    if(var9) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var9 = _closure2_slot1;
                    var11 = var9.height;
case 16:
                    var9 = var4;
                    if(!(var7 != var11)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var9 = var11;
case 18:
                    var9 = var9 - var4;
                    var10 = var9 / var10;
                    var9 = arg2;
                    var9 = var9 - var10;
                    var5['y'] = var9;
                    var9 = _closure2_slot1;
                    var10 = var7 == var9;
                    var9 = undefined;
                    if(var10) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var10 = _closure2_slot1;
                    var9 = var10.width;
case 20:
                    if(!(var7 != var9)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = var9;
case 22:
                    var5['width'] = var6;
                    var6 = _closure2_slot1;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure2_slot1;
                    var6 = var8.height;
case 24:
                    if(!(var7 != var6)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var4 = var6;
case 26:
                    var5['height'] = var4;
                    var4 = 'originLayout';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var3['openMediaModal'] = var2;
    return var1;
})();