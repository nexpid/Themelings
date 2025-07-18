// app/modules/video_calls/native/components/ChannelCallMicButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
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
    var4 = var4.Colors;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallMicButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var11 = var1.disableTint;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 22:
            var11 = false;
 24:
            var9 = var1.isSmallSize;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var12 = _closure1_slot1;
            var17 = _closure1_slot3;
            var1 = 4;
            var1 = var17[var1];
            var1 = var12.bind(var4)(var1);
            var3 = var1.bind(var4)(var2);
            var16 = _closure1_slot0;
            var1 = 5;
            var1 = var17[var1];
            var7 = var16.bind(var4)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var13 = var5.bind(var7)(var2, var1);
            var1 = 6;
            var1 = var17[var1];
            var2 = var16.bind(var4)(var1);
            var1 = var2.createMuteHandler;
            var1 = var1.bind(var2)(var3, var13);
            var7 = var1.mute;
            _closure2_slot0 = var7;
            var1 = var1.onPress;
            _closure2_slot1 = var1;
            var1 = 7;
            var1 = var17[var1];
            var2 = var12.bind(var4)(var1);
            var1 = {};
            var3 = 'ChannelCallMicButton';
            var1['location'] = var3;
            var1 = var2.bind(var4)(var1);
            var8 = var1.enabled;
            var5 = _closure1_slot4;
            var2 = var5.useRef;
            var1 = null;
            var1 = var2.bind(var5)(var1);
            _closure2_slot2 = var1;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.MicrophoneLottie;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['ref'] = var6;
                    var6 = 'md';
                    var1['size'] = var6;
                    var6 = _closure2_slot0;
                    var5 = 'mute';
                    if(!var6) { _fun0002_ip = 71; continue _fun0002 }
 67:
                    var5 = 'unmute';
 71:
                    var1['animation'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot2;
            var1 = 9;
            var1 = var17[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var1['appearsDisabled'] = var13;
            var13 = 10;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.B3zz0N;
            var13 = var14.bind(var15)(var13);
            var1['accessibilityLabel'] = var13;
            var10 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot2;
                    var5 = null;
                    var2 = var5 == var2;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 44; continue _fun0003 }
 28:
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
 44:
                    if(var2) { _fun0003_ip = 57; continue _fun0003 }
 47:
                    var2 = var3.play;
                    var2 = var2.bind(var3)();
 57:
                    return var1;
                }
            };
            var1['onPress'] = var10;
            var10 = false;
            var1['disableTint'] = var10;
            var14 = _closure1_slot3;
            if(var7) { _fun0001_ip = 361; continue _fun0001 }
 352:
            var10 = 12;
            var10 = var14[var10];
            _fun0001_ip = 368; continue _fun0001;
 361:
            var13 = 11;
            var10 = var14[var13];
 368:
            var10 = var12.bind(var4)(var10);
            var1['source'] = var10;
            var10 = var7;
            if(var8) { _fun0001_ip = 392; continue _fun0001 }
 383:
            if(var11) { _fun0001_ip = 389; continue _fun0001 }
 386:
            var11 = !var7;
 389:
            var10 = var11;
 392:
            var1['isActive'] = var10;
            var1['isSmallSize'] = var9;
            var1['lottieComponent'] = var5;
            var5 = undefined;
            if(!var8) { _fun0001_ip = 427; continue _fun0001 }
 412:
            var5 = undefined;
            if(!var7) { _fun0001_ip = 427; continue _fun0001 }
 417:
            var6 = _closure1_slot6;
            var5 = var6.RED_400;
 427:
            var1['tintColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelCallMicButton'] = var2;
    return var1;
})();