// app/modules/video_calls/native/components/ChannelCallMicButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var8 = var1.isSmallSize;
            var9 = var1.disableTint;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var15 = _closure1_slot0;
            var16 = _closure1_slot3;
            var1 = 3;
            var1 = var16[var1];
            var5 = var15.bind(var4)(var1);
            var2 = var5.useManaRiveMobileExperiment;
            var1 = 'ChannelCallMicButton';
            var1 = var2.bind(var5)(var1);
            _closure2_slot0 = var1;
            var11 = _closure1_slot1;
            var2 = 4;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var5 = var2.bind(var4)(var3);
            var2 = 5;
            var2 = var16[var2];
            var12 = var15.bind(var4)(var2);
            var7 = var12.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var12 = var7.bind(var12)(var3, var2);
            var2 = 6;
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.createMuteHandler;
            var2 = var2.bind(var3)(var5, var12);
            var7 = var2.mute;
            _closure2_slot1 = var7;
            var2 = var2.onPress;
            _closure2_slot2 = var2;
            var13 = _closure1_slot4;
            var3 = var13.useRef;
            var2 = null;
            var14 = var3.bind(var13)(var2);
            _closure2_slot3 = var14;
            var3 = _closure1_slot6;
            var2 = 7;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var5 = var2.VoicePanelRiveMicButton;
            var2 = {};
            var2['muted'] = var7;
            var2 = var3.bind(var4)(var5, var2);
            _closure2_slot4 = var2;
            var5 = var13.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var14;
            var2[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.MicrophoneLottie;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1['ref'] = var6;
                    var6 = 'md';
                    var1['size'] = var6;
                    var7 = _closure2_slot1;
                    var6 = 'mute';
                    if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = 'unmute';
case 6:
                    var1['animation'] = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var1 = _closure2_slot4;
case 8:
                    return var1;
                }
            };
            var5 = var5.bind(var13)(var1, var2);
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var1['appearsDisabled'] = var12;
            var12 = 10;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.B3zz0G;
            var12 = var13.bind(var14)(var12);
            var1['accessibilityLabel'] = var12;
            var10 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot3;
                    var5 = null;
                    var2 = var5 == var2;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 3:
                    var4 = _closure2_slot3;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
case 9:
                    if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
case 10:
                    return var1;
                }
            };
            var1['onPress'] = var10;
            var13 = _closure1_slot3;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = 12;
            var10 = var13[var10];
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var12 = 11;
            var10 = var13[var12];
case 14:
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            if(var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var7;
case 15:
            var1['isActive'] = var9;
            var1['isSmallSize'] = var8;
            var1['lottieComponent'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var6 = 13;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var5 = var6.RED_400;
case 17:
            var1['tintColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelCallMicButton'] = var2;
    return var1;
})();