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
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelCallMicButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var8 = var2.isSmallSize;
            var9 = var2.disableTint;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot0 = var4;
            var11 = _closure1_slot1;
            var16 = _closure1_slot3;
            var2 = 3;
            var2 = var16[var2];
            var2 = var11.bind(var4)(var2);
            var5 = var2.bind(var4)(var3);
            var15 = _closure1_slot0;
            var2 = 4;
            var2 = var16[var2];
            var10 = var15.bind(var4)(var2);
            var7 = var10.useStateFromStores;
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
            var12 = var7.bind(var10)(var3, var2);
            var2 = 5;
            var2 = var16[var2];
            var3 = var15.bind(var4)(var2);
            var2 = var3.createMuteHandler;
            var2 = var2.bind(var3)(var5, var12);
            var7 = var2.mute;
            _closure2_slot0 = var7;
            var10 = var2.onPress;
            var5 = _closure1_slot4;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.VoicePanelRiveMicButton;
                var1 = {};
                var5 = _closure2_slot0;
                var1['muted'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot2;
            var1 = 7;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var1['appearsDisabled'] = var12;
            var12 = 8;
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
            var1['onPress'] = var10;
            var13 = _closure1_slot3;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 10;
            var10 = var13[var10];
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var12 = 9;
            var10 = var13[var12];
case 6:
            var10 = var11.bind(var4)(var10);
            var1['source'] = var10;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = var7;
case 7:
            var1['isActive'] = var9;
            var1['isSmallSize'] = var8;
            var1['lottieComponent'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var6 = 11;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.unsafe_rawColors;
            var5 = var6.RED_400;
case 9:
            var1['tintColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelCallMicButton'] = var2;
    return var1;
})();