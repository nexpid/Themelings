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
            var5 = arg1;
            var18 = var5.initialIndex;
            var1 = undefined;
            if(!(var18 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = 0;
case 2:
            var8 = var5.initialSources;
            var17 = var5.swipeVelocityThreshold;
            if(!(var17 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var17 = 1000;
case 4:
            var12 = var5.shareable;
            if(!(var12 === var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = true;
case 6:
            var7 = var5.analyticsSource;
            var11 = var5.guildId;
            var10 = var5.channelId;
            var9 = var5.channelType;
            var3 = var5.isRNModal;
            if(!(var3 === var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = false;
case 8:
            var _closure2_slot0 = var3;
            var4 = {'initialIndex': 0, 'initialSources': 0, 'swipeVelocityThreshold': 0, 'shareable': 0, 'analyticsSource': 0, 'guildId': 0, 'channelId': 0, 'channelType': 0, 'isRNModal': 0};
            var21 = null;
            var22 = var4;
            var3 = silentSetPrototypeOf(var22, var21);
            var22 = {};
            var21 = var5;
            var20 = var4;
            var21 = copyDataProperties(var22, var21, var20);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 1;
            var5 = var4[var5];
            var15 = var3.bind(var1)(var5);
            var14 = var15.setMediaViewerSources;
            var5 = {};
            var5['sources'] = var8;
            var5['initialIndex'] = var18;
            var5 = var14.bind(var15)(var5);
            var5 = _closure1_slot1;
            var14 = 2;
            var14 = var4[var14];
            var16 = var5.bind(var1)(var14);
            var15 = var16.pushLazy;
            var14 = {};
            var22 = var14;
            var6 = copyDataProperties(var22, var21);
            var6 = 'initialIndex';
            var14[var6] = var18;
            var6 = 'swipeVelocityThreshold';
            var14[var6] = var17;
            var6 = 'shareable';
            var14[var6] = var12;
            var20 = _closure1_slot5;
            var19 = _closure1_slot6;
            var22 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.resolve;
                    if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 4;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 12; continue _fun0002;
case 10:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.MediaModalContainer;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var23 = var16;
            var21 = var14;
            var2 = var23[var15](var22, var21, var20, var19, var18);
            var2 = 5;
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
            var2 = 6;
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
            var2 = 7;
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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/openMediaModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openMediaModal(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var2;
            var6 = var2.originLayout;
            var _closure2_slot1 = var6;
            var4 = null;
            if(!(var4 == var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            if(!(var4 != var6)) { _fun0003_ip = 9; continue _fun0003 }
case 15:
            var5 = _closure1_slot7;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = 'originLayout';
            var4[var2] = var6;
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            _fun0003_ip = 9; continue _fun0003;
case 13:
            var2 = var3.measureInWindow;
            var1 = function(arg1, arg2, arg3, arg4) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                    if(var9) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var9 = _closure2_slot1;
                    var10 = var9.width;
case 16:
                    var9 = var6;
                    if(!(var7 != var10)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var9 = var10;
case 18:
                    var9 = var9 - var6;
                    var10 = 2;
                    var11 = var9 / var10;
                    var9 = arg1;
                    var9 = var9 - var11;
                    var5['x'] = var9;
                    var9 = _closure2_slot1;
                    var9 = var7 == var9;
                    var11 = undefined;
                    if(var9) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var9 = _closure2_slot1;
                    var11 = var9.height;
case 20:
                    var9 = var4;
                    if(!(var7 != var11)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var9 = var11;
case 22:
                    var9 = var9 - var4;
                    var10 = var9 / var10;
                    var9 = arg2;
                    var9 = var9 - var10;
                    var5['y'] = var9;
                    var9 = _closure2_slot1;
                    var10 = var7 == var9;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var10 = _closure2_slot1;
                    var9 = var10.width;
case 24:
                    if(!(var7 != var9)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var6 = var9;
case 26:
                    var5['width'] = var6;
                    var6 = _closure2_slot1;
                    var9 = var7 == var6;
                    var6 = undefined;
                    if(var9) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var8 = _closure2_slot1;
                    var6 = var8.height;
case 28:
                    if(!(var7 != var6)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var4 = var6;
case 30:
                    var5['height'] = var4;
                    var4 = 'originLayout';
                    var2[var4] = var5;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var3['openMediaModal'] = var2;
    return var1;
})();