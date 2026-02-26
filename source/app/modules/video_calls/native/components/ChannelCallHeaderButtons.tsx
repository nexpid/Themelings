// app/modules/video_calls/native/components/ChannelCallHeaderButtons.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallHeaderButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot3;
                var2 = var3.isVideoEnabled;
                var2 = var2.bind(var3)();
                var1['isVideoEnabled'] = var2;
                var2 = var3.getVideoDeviceId;
                var2 = var2.bind(var3)();
                var1['videoDeviceId'] = var2;
                var2 = var3.getVideoDevices;
                var2 = var2.bind(var3)();
                var1['videoDevices'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var2 = var1.isVideoEnabled;
            var3 = var1.videoDeviceId;
            var _closure2_slot0 = var3;
            var1 = var1.videoDevices;
            var _closure2_slot1 = var1;
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 5;
            var10 = var9[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.t9eQ/g;
            var7 = var10.bind(var11)(var7);
            var2['accessibilityLabel'] = var7;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2['source'] = var7;
            var6 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setVideoDevice;
                    var1 = var1.bind(var2)(var3);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = true;
            var2['disableBackground'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['CameraButton'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var2 = var1.bind(var5)(var3);
            var1 = 9;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            var3 = null;
            var4 = var3 == var1;
            var1 = null;
            if(var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var1 = null;
            if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 8:
            var4 = _closure1_slot4;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 5;
            var10 = var9[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.HK4JIu;
            var7 = var10.bind(var11)(var7);
            var2['accessibilityLabel'] = var7;
            var7 = 10;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2['source'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectParticipant;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = null;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = true;
            var2['disableBackground'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['GridButton'] = var2;
    return var1;
})();