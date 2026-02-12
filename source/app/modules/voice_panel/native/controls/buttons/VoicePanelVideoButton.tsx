// app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function VideoButtonRive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.isVideoEnabled;
            var10 = var1.color;
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var5 = {'width': 24, 'height': 24, 'pointerEvents': 'none'};
            var2['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var5 = var5[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var6 = var5.CameraRive;
            var5 = {};
            var8 = {};
            var8['fill'] = var10;
            var8['on'] = var9;
            var5['dataBinding'] = var8;
            var8 = 'CamOff';
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 'CamOn';
case 2:
            var5['defaultViewModelInstance'] = var8;
            var5 = var7.bind(var1)(var6, var5);
            var2['children'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = 8;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VideoButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.props;
            var9 = var1.wrapperSpecs;
            var13 = _closure1_slot3;
            var3 = var13.useContext;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var3.bind(var13)(var1);
            var14 = var1.channelId;
            var _closure2_slot0 = var14;
            var3 = _closure1_slot0;
            var1 = 10;
            var1 = var12[var1];
            var8 = var3.bind(var4)(var1);
            var1 = var8.useVoicePanelButtonStyles;
            var11 = var1.bind(var8)(var9);
            var _closure2_slot1 = var11;
            var8 = var13.useRef;
            var1 = null;
            var1 = var8.bind(var13)(var1);
            var _closure2_slot2 = var1;
            var8 = 11;
            var1 = var12[var8];
            var15 = var3.bind(var4)(var1);
            var10 = var15.useStateFromStores;
            var1 = _closure1_slot7;
            var9 = new Array(3);
            var9[0] = var1;
            var1 = _closure1_slot9;
            var9[1] = var1;
            var1 = _closure1_slot6;
            var9[2] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var8 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var8;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = var8.isPrivate;
                    var2 = var2.bind(var8)();
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.canStreamInChannel;
                    var11 = _closure1_slot7;
                    var10 = _closure1_slot9;
                    var9 = false;
                    var13 = var7;
                    var12 = var8;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
case 6:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var1 = var10.bind(var15)(var9, var1);
            var _closure2_slot3 = var1;
            var8 = var12[var8];
            var15 = var3.bind(var4)(var8);
            var10 = var15.useStateFromStores;
            var8 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var2 = _closure1_slot8;
                var1 = var2.isVideoEnabled;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var10.bind(var15)(var9, var8);
            var _closure2_slot4 = var10;
            var9 = var13.useCallback;
            var8 = new Array(3);
            var8[0] = var14;
            var8[1] = var10;
            var8[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 13;
                    var2 = var9[var2];
                    var5 = undefined;
                    var7 = var8.bind(var5)(var2);
                    var6 = var7.openAlert;
                    var2 = 8;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var5 = var2.VOICE_PANEL_NO_VIDEO_PERMS_KEY;
                    var2 = _closure1_slot11;
                    var2 = var6.bind(var7)(var5, var2);
                    _fun0004_ip = 10; continue _fun0004;
case 8:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var6)(var2);
                    var _closure3_slot0 = var5;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = function animateToggleVideo() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
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
                            if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                            var4 = _closure2_slot2;
                            var4 = var4.current;
                            var2 = var5 == var4;
                            var3 = var4;
case 12:
                            if(var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                            var2 = var3.play;
                            var2 = var2.bind(var3)();
case 14:
                            return var1;
                        }
                    };
                    var _closure3_slot1 = var2;
                    var4 = _closure2_slot4;
                    if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var5 = _closure1_slot5;
                    var4 = var5.isReactingToThermalState;
                    var4 = var4.bind(var5)();
                    if(!var4) { _fun0004_ip = 16; continue _fun0004 }
case 18:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 15;
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
                    _fun0004_ip = 10; continue _fun0004;
case 16:
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var9.bind(var13)(var1, var8);
            var1 = 16;
            var1 = var12[var1];
            var9 = var3.bind(var4)(var1);
            var3 = var9.useManaRiveMobileExperiment;
            var1 = 'VoicePanelVideoButton';
            var9 = var3.bind(var9)(var1);
            var _closure2_slot5 = var9;
            var3 = _closure1_slot10;
            var1 = 17;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var8;
            var1['props'] = var7;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 18;
            var12 = var14[var7];
            var12 = var8.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var7 = var14[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.t;
            if(var10) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var7 = var8.v8K+8W;
            var7 = var12.bind(var13)(var7);
            _fun0002_ip = 21; continue _fun0002;
case 19:
            var8 = var8.EnX2Jl;
            var7 = var12.bind(var13)(var8);
case 21:
            var1['accessibilityLabel'] = var7;
            if(var10) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var11.iconBg;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var7 = var11.iconBgSelected;
case 24:
            var1['style'] = var7;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var6 = var11.iconFill;
            var12 = var6.color;
            var6 = new Array(4);
            var6[0] = var12;
            var11 = var11.iconFillSelected;
            var11 = var11.color;
            var6[1] = var11;
            var6[2] = var10;
            var6[3] = var9;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var5 = _closure1_slot10;
                    if(var1) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.CameraLottie;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var1['ref'] = var7;
                    var7 = _closure2_slot4;
                    var8 = _closure2_slot1;
                    if(var7) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var7 = var8.iconFill;
                    var7 = var7.color;
                    _fun0006_ip = 14; continue _fun0006;
case 27:
                    var8 = var8.iconFillSelected;
                    var7 = var8.color;
case 14:
                    var1['color'] = var7;
                    var8 = _closure2_slot4;
                    var7 = 'unmute';
                    if(!var8) { _fun0006_ip = 29; continue _fun0006 }
case 3:
                    var7 = 'mute';
case 29:
                    var1['animation'] = var7;
                    var1 = var5.bind(var4)(var3, var1);
                    _fun0006_ip = 30; continue _fun0006;
case 25:
                    var4 = _closure1_slot12;
                    var3 = {};
                    var2 = _closure2_slot4;
                    var3['isVideoEnabled'] = var2;
                    var6 = _closure2_slot1;
                    if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                    var2 = var6.iconFill;
                    var2 = var2.color;
                    _fun0006_ip = 33; continue _fun0006;
case 31:
                    var6 = var6.iconFillSelected;
                    var2 = var6.color;
case 33:
                    var3['color'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 30:
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