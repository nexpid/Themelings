// app/modules/video_calls/native/components/FocusedExpandedControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ExpandedControlItemIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.iconSource;
            var3 = var1.showIconSparkle;
            var1 = _closure1_slot11;
            var6 = undefined;
            var11 = var1.bind(var6)();
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot8;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 8;
            var2 = var12[var9];
            var4 = var10.bind(var6)(var2);
            var2 = {};
            var9 = var12[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.Sizes;
            var9 = var9.MEDIUM;
            var2['size'] = var9;
            var2['source'] = var7;
            var7 = var11.formTintColor;
            var2['style'] = var7;
            var7 = true;
            var2['disableColor'] = var7;
            var9 = var5.bind(var6)(var4, var2);
            var2 = var9;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot9;
            var4 = _closure1_slot3;
            var3 = {};
            var7 = new Array(3);
            var7[0] = var9;
            var14 = _closure1_slot8;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var11.sparkle2;
            var9['style'] = var12;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var15 = 9;
            var15 = var13[var15];
            var15 = var12.bind(var6)(var15);
            var9['source'] = var15;
            var9 = var14.bind(var6)(var10, var9);
            var7[1] = var9;
            var10 = _closure1_slot8;
            var9 = _closure1_slot4;
            var8 = {};
            var11 = var11.sparkle;
            var8['style'] = var11;
            var11 = 10;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var8['source'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[2] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function ExpandedControlItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.disabled;
            var17 = var1.iconSource;
            var16 = var1.showIconSparkle;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var16 = false;
case 6:
            var11 = var1.label;
            var6 = var1.onPress;
            var7 = var1.onSwitchValueChange;
            var8 = var1.switchValue;
            var5 = var1.trailing;
            var1 = _closure1_slot11;
            var10 = var1.bind(var4)();
            var2 = null;
            var1 = var2 == var5;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var2 != var8;
case 8:
            if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 11;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormSwitch;
            var1 = {};
            var14 = _closure1_slot1;
            var12 = 7;
            var12 = var15[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.BRAND_500;
            var1['tintColor'] = var12;
            var12 = true;
            var1['renderIosBackground'] = var12;
            var1['value'] = var8;
            var1['disabled'] = var13;
            var1['onValueChange'] = var7;
            var5 = var3.bind(var4)(var2, var1);
case 10:
            var3 = _closure1_slot8;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 11;
            var1 = var12[var7];
            var1 = var8.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var1['disabled'] = var13;
            var15 = _closure1_slot8;
            var14 = _closure1_slot12;
            var13 = {};
            var13['iconSource'] = var17;
            var13['showIconSparkle'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var1['leading'] = var13;
            var9 = _closure1_slot8;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.FormLabel;
            var7 = {};
            var7['text'] = var11;
            var10 = var10.formColor;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['label'] = var7;
            var1['onPress'] = var6;
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_STRONG;
    var9['tintColor'] = var12;
    var4['formTintColor'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var10;
    var4['formColor'] = var9;
    var9 = {'position': 'absolute', 'bottom': 4294967292, 'right': '70%'};
    var4['sparkle'] = var9;
    var9 = {'position': 'absolute', 'right': 4294967291, 'height': 10, 'width': 10};
    var4['sparkle2'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/FocusedExpandedControls.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function StreamVolumeItem() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot11;
            var5 = undefined;
            var12 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = _closure1_slot6;
            var3[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getLastActiveStream;
                    var2 = var1.bind(var2)();
                    var5 = null;
                    var4 = var5 != var2;
                    var1 = null;
                    if(!var4) { _fun0004_ip = 12; continue _fun0004 }
case 6:
                    var4 = var2.ownerId;
                    var6 = _closure1_slot6;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var3 = var4.bind(var7)(var3, var1);
            var4 = _closure1_slot1;
            var1 = 13;
            var1 = var6[var1];
            var7 = var4.bind(var5)(var1);
            var1 = null;
            var4 = var1 == var3;
            var6 = undefined;
            if(var4) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var6 = var3.ownerId;
case 14:
            var4 = _closure1_slot7;
            var4 = var4.STREAM;
            var4 = var7.bind(var5)(var6, var4);
            var14 = var4.effectiveVolume;
            var13 = var4.handleVolumeChange;
            var8 = _closure1_slot9;
            var6 = _closure1_slot10;
            var4 = {};
            var11 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 11;
            var9 = var18[var7];
            var9 = var17.bind(var5)(var9);
            var10 = var9.FormLabel;
            var9 = {};
            var15 = 14;
            var19 = var18[var15];
            var19 = var17.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var18[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.pEAl4b;
            var15 = var19.bind(var20)(var15);
            var9['text'] = var15;
            var15 = var12.formColor;
            var12 = new Array(2);
            var12[0] = var15;
            var19 = {};
            var15 = 16;
            var19['marginBottom'] = var15;
            var12[1] = var19;
            var9['style'] = var12;
            var10 = var11.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot8;
            var11 = _closure1_slot1;
            var10 = 15;
            var10 = var18[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var15 = var18[var15];
            var17 = var17.bind(var5)(var15);
            var15 = var17.isAndroid;
            var17 = var15.bind(var17)();
            var15 = undefined;
            if(!var17) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var15 = function() {
                var1 = true;
                return var1;
            };
case 16:
            var10['onResponderGrant'] = var15;
            var10['value'] = var14;
            var10['onValueChange'] = var13;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 7;
            var16 = var15[var13];
            var16 = var14.bind(var5)(var16);
            var16 = var16.unsafe_rawColors;
            var16 = var16.WHITE;
            var10['color'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.PRIMARY_300;
            var10['maxTrackTintColor'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var4['children'] = var9;
            var6 = var8.bind(var5)(var6, var4);
            var3 = var1 != var3;
            var1 = null;
            if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var3 = var2.FormRow;
            var2 = {};
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var3['StreamVolumeItem'] = var4;
    var4 = function AudioRouteButton(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        var _closure2_slot0 = var2;
        var1 = var1.isConnectedToVoiceChannel;
        var _closure2_slot1 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 17;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useMaskedSpeakerStates;
        var2 = var2.bind(var3)();
        var5 = var2.routeSource;
        var3 = _closure1_slot8;
        var2 = _closure1_slot13;
        var1 = {};
        var6 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.showAudioOutputSelector;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var1['iconSource'] = var5;
        var5 = 14;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.A/Ly/2;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AudioRouteButton'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var9 = var1.disabled;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 19;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3);
            var7 = var2.onPress;
            var6 = var2.imgSource;
            var5 = var2.text;
            var8 = var2.isFeatureEnabled;
            var3 = _closure1_slot8;
            var2 = _closure1_slot13;
            var1 = {};
            var8 = !var8;
            if(var8) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var8 = var9;
case 20:
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var1['iconSource'] = var6;
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ScreenshareButton'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var8 = var1.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var8 = false;
case 22:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 20;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)(var3);
            var3 = _closure1_slot0;
            var1 = 21;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.createDeafHandler;
            var3 = var1.bind(var3)(var6);
            var1 = var3.deaf;
            var7 = var3.onPress;
            var6 = _closure1_slot2;
            if(var1) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var1 = 23;
            var1 = var6[var1];
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var3 = 22;
            var1 = var6[var3];
case 26:
            var6 = var2.bind(var4)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot13;
            var1 = {};
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var1['iconSource'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 14;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.wjcRFX;
            var5 = var6.bind(var7)(var5);
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['DeafenButton'] = var2;
    return var1;
})();