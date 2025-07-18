// app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.props;
            var9 = var1.wrapperSpecs;
            var12 = _closure1_slot3;
            var3 = var12.useContext;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var3.bind(var12)(var1);
            var13 = var1.channelId;
            var _closure2_slot0 = var13;
            var8 = _closure1_slot0;
            var1 = 8;
            var1 = var11[var1];
            var3 = var8.bind(var4)(var1);
            var1 = var3.useVoicePanelButtonStyles;
            var10 = var1.bind(var3)(var9);
            var _closure2_slot1 = var10;
            var3 = var12.useRef;
            var1 = null;
            var1 = var3.bind(var12)(var1);
            var _closure2_slot2 = var1;
            var3 = 9;
            var1 = var11[var3];
            var15 = var8.bind(var4)(var1);
            var14 = var15.useStateFromStores;
            var1 = _closure1_slot6;
            var9 = new Array(3);
            var9[0] = var1;
            var1 = _closure1_slot8;
            var9[1] = var1;
            var1 = _closure1_slot5;
            var9[2] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var8 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var8;
                    if(!var1) { _fun0002_ip = 97; continue _fun0002 }
 33:
                    var2 = var8.isPrivate;
                    var2 = var2.bind(var8)();
                    if(var2) { _fun0002_ip = 94; continue _fun0002 }
 46:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.canStreamInChannel;
                    var11 = _closure1_slot6;
                    var10 = _closure1_slot8;
                    var9 = false;
                    var13 = var7;
                    var12 = var8;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
 94:
                    var1 = var2;
 97:
                    return var1;
                }
            };
            var1 = var14.bind(var15)(var9, var1);
            var _closure2_slot3 = var1;
            var3 = var11[var3];
            var14 = var8.bind(var4)(var3);
            var9 = var14.useStateFromStores;
            var3 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isVideoEnabled;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var14)(var8, var3);
            var _closure2_slot4 = var9;
            var8 = var12.useCallback;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var9;
            var3[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0003_ip = 94; continue _fun0003 }
 15:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 11;
                    var2 = var11[var2];
                    var10 = undefined;
                    var7 = var8.bind(var10)(var2);
                    var6 = var7.openAlert;
                    var2 = 12;
                    var5 = var11[var2];
                    var5 = var8.bind(var10)(var5);
                    var5 = var5.VOICE_PANEL_NO_VIDEO_PERMS_KEY;
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot1;
                    var2 = var11[var2];
                    var8 = var8.bind(var10)(var2);
                    var2 = {};
                    var2 = var9.bind(var10)(var8, var2);
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0003_ip = 205; continue _fun0003;
 94:
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var6)(var2);
                    var _closure3_slot0 = var5;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 205; continue _fun0003 }
 122:
                    var2 = function animateToggleVideo() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.handleToggleVideo;
                            var2 = _closure3_slot0;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot2;
                            var5 = null;
                            var2 = var5 == var2;
                            var3 = undefined;
                            if(var2) { _fun0004_ip = 77; continue _fun0004 }
 61:
                            var4 = _closure2_slot2;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
 77:
                            if(var2) { _fun0004_ip = 90; continue _fun0004 }
 80:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
 90:
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var2;
                    var4 = _closure2_slot4;
                    if(var4) { _fun0003_ip = 199; continue _fun0003 }
 140:
                    var5 = _closure1_slot4;
                    var4 = var5.isReactingToThermalState;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0003_ip = 199; continue _fun0003 }
 157:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 14;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.openIgnoreThermalStateAlert;
                    var1 = function() {
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 205; continue _fun0003;
 199:
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 205:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var8.bind(var12)(var1, var3);
            var3 = _closure1_slot9;
            var1 = 15;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var8;
            var1['props'] = var7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 16;
            var11 = var13[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.t;
            if(var9) { _fun0001_ip = 339; continue _fun0001 }
 324:
            var7 = var8.v8K+8f;
            var7 = var11.bind(var12)(var7);
            _fun0001_ip = 352; continue _fun0001;
 339:
            var8 = var8.EnX2Ji;
            var7 = var11.bind(var12)(var8);
 352:
            var1['accessibilityLabel'] = var7;
            if(var9) { _fun0001_ip = 367; continue _fun0001 }
 359:
            var7 = var10.iconBg;
            _fun0001_ip = 373; continue _fun0001;
 367:
            var7 = var10.iconBgSelected;
 373:
            var1['style'] = var7;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = var10.iconFill;
            var11 = var6.color;
            var6 = new Array(3);
            var6[0] = var11;
            var10 = var10.iconFillSelected;
            var10 = var10.color;
            var6[1] = var10;
            var6[2] = var9;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CameraLottie;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['ref'] = var6;
                    var6 = _closure2_slot4;
                    var7 = _closure2_slot1;
                    if(var6) { _fun0005_ip = 72; continue _fun0005 }
 59:
                    var6 = var7.iconFill;
                    var6 = var6.color;
                    _fun0005_ip = 83; continue _fun0005;
 72:
                    var7 = var7.iconFillSelected;
                    var6 = var7.color;
 83:
                    var1['color'] = var6;
                    var6 = _closure2_slot4;
                    var5 = 'unmute';
                    if(!var6) { _fun0005_ip = 102; continue _fun0005 }
 98:
                    var5 = 'mute';
 102:
                    var1['animation'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var6);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();