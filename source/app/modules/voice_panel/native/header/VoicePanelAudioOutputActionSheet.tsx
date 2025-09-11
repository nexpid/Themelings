// app/modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function closeActionSheet() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.hideActionSheet;
        var2 = _closure1_slot9;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function VoicePanelAudioPhoneOutputSection() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = _closure1_slot13;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var3 = var4.getActiveAudioDevice;
                var3 = var3.bind(var4)();
                var1['activeDevice'] = var3;
                var3 = _closure1_slot6;
                var2 = var3.getAudioDevices;
                var2 = var2.bind(var3)();
                var1['availableDevices'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var10 = var1.activeDevice;
            var11 = var1.availableDevices;
            var _closure2_slot0 = var11;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.setAudioOutputDevice;
                var3 = arg1;
                var3 = var4.bind(var5)(var3);
                var2 = _closure1_slot14;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var _closure2_slot1 = var1;
            var2 = var11.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = null;
            if(!var2) { _fun0001_ip = 302; continue _fun0001 }
 127:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 14;
            var2 = var12[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.VoicePanelFormSection;
            var2 = {};
            var8 = var8.sectionContainer;
            var2['style'] = var8;
            var8 = 15;
            var13 = var12[var8];
            var13 = var7.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var8 = var12[var8];
            var8 = var7.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.CxyS19;
            var8 = var13.bind(var14)(var8);
            var2['title'] = var8;
            var8 = _closure1_slot11;
            var6 = 16;
            var6 = var12[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TableRadioGroup;
            var6 = {};
            var10 = var10.deviceId;
            var6['defaultValue'] = var10;
            var10 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot0;
                    var3 = var4.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.deviceId;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 49; continue _fun0002 }
 38:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onChange'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 17;
                    var2 = var8[var2];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.TableRadioRow;
                    var2 = {};
                    var9 = var1.deviceId;
                    var2['value'] = var9;
                    var11 = _closure1_slot11;
                    var6 = 18;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var10 = var6.TableRowIcon;
                    var9 = {};
                    var6 = 19;
                    var12 = var8[var6];
                    var12 = var7.bind(var4)(var12);
                    var13 = var12.audioDeviceToIconMap;
                    var12 = var1.simpleDeviceType;
                    var12 = var13[var12];
                    var9['source'] = var12;
                    var9 = var11.bind(var4)(var10, var9);
                    var2['icon'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.getAudioDeviceToDisplayText;
                    var6 = var6.bind(var7)(var1);
                    var2['label'] = var6;
                    var6 = var1.deviceName;
                    var7 = null;
                    var8 = var7 == var6;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 162; continue _fun0003 }
 157:
                    var7 = var6.length;
 162:
                    var6 = 0;
                    var7 = var7 > var6;
                    var6 = undefined;
                    if(!var7) { _fun0003_ip = 179; continue _fun0003 }
 173:
                    var6 = var1.deviceName;
 179:
                    var2['subLabel'] = var6;
                    var1 = var1.deviceId;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 302:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function VoicePanelAudioConsoleSection(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot13;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var11 = var2.bind(var5)();
            var _closure2_slot1 = var11;
            var2 = 21;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var _closure2_slot2 = var2;
            var4 = _closure1_slot0;
            var2 = 12;
            var3 = var7[var2];
            var13 = var4.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getAwaitingRemoteSessionInfo;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var12.bind(var13)(var10, var3);
            var _closure2_slot3 = var13;
            var2 = var7[var2];
            var12 = var4.bind(var5)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getSessionById;
                    var4 = _closure2_slot2;
                    var1 = null;
                    var6 = var1 == var4;
                    var4 = undefined;
                    if(var6) { _fun0005_ip = 41; continue _fun0005 }
 31:
                    var5 = _closure2_slot2;
                    var4 = var5.sessionId;
 41:
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0005_ip = 55; continue _fun0005 }
 52:
                    var1 = var4;
 55:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var10.bind(var12)(var3, var2);
            var _closure2_slot4 = var2;
            var12 = _closure1_slot3;
            var10 = var12.useMemo;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = null;
                    var3 = var1 == var2;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 27; continue _fun0006 }
 18:
                    var3 = _closure2_slot3;
                    var2 = var3.type;
 27:
                    if(!(var1 == var2)) { _fun0006_ip = 72; continue _fun0006 }
 31:
                    var3 = _closure2_slot4;
                    var5 = var1 == var3;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 69; continue _fun0006 }
 44:
                    var4 = _closure2_slot4;
                    var4 = var4.clientInfo;
                    var5 = var1 == var4;
                    var3 = undefined;
                    if(var5) { _fun0006_ip = 69; continue _fun0006 }
 63:
                    var3 = var4.os;
 69:
                    var2 = var3;
 72:
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun0006_ip = 86; continue _fun0006 }
 83:
                    var1 = var2;
 86:
                    return var1;
                }
            };
            var12 = var10.bind(var12)(var2, var3);
            var10 = _closure1_slot3;
            var3 = var10.useCallback;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var1;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure2_slot1;
                    var2 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var2.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var6)) { _fun0007_ip = 53; continue _fun0007 }
 38:
                    var2 = _closure1_slot14;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0007_ip = 102; continue _fun0007;
 53:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 22;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.onConnectToConsole;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3, var6);
                    var1 = _closure1_slot14;
                    var1 = var1.bind(var2)();
 102:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var10)(var1, var2);
            var1 = 23;
            var1 = var7[var1];
            var3 = var4.bind(var5)(var1);
            var2 = var3.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 24;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.DONUT_MOBILE_NUX;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            var _closure2_slot5 = var1;
            var4 = _closure1_slot3;
            var3 = var4.useEffect;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var1;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0008_ip = 25; continue _fun0008 }
 10:
                    var2 = _closure2_slot1;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 25:
                    if(!var1) { _fun0008_ip = 88; continue _fun0008 }
 28:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 23;
                    var1 = var6[var1];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var1);
                    var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = 24;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.DismissibleContent;
                    var1 = var1.DONUT_MOBILE_NUX;
                    var1 = var2.bind(var3)(var1);
 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var2 = var11.length;
            var1 = 0;
            var2 = var2 > var1;
            var1 = null;
            if(!var2) { _fun0004_ip = 497; continue _fun0004 }
 333:
            var4 = _closure1_slot11;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 14;
            var2 = var13[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.VoicePanelFormSection;
            var2 = {};
            var14 = 15;
            var15 = var13[var14];
            var15 = var7.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var7.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.q22XnZ;
            var14 = var15.bind(var16)(var14);
            var2['title'] = var14;
            var8 = var8.sectionContainer;
            var2['style'] = var8;
            var8 = _closure1_slot11;
            var6 = 16;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TableRadioGroup;
            var6 = {};
            var6['defaultValue'] = var12;
            var6['onChange'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot10;
                    var1 = var1.XBOX;
                    if(!(var1 !== var3)) { _fun0009_ip = 120; continue _fun0009 }
 25:
                    var1 = _closure1_slot10;
                    var1 = var1.PLAYSTATION;
                    var7 = null;
                    if(!(var1 === var3)) { _fun0009_ip = 194; continue _fun0009 }
 44:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var4 = var9[var3];
                    var6 = undefined;
                    var4 = var8.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.fFl4jo;
                    var3 = var4.bind(var5)(var3);
                    var1['label'] = var3;
                    var3 = 'playstation';
                    var1['variant'] = var3;
                    var7 = var1;
                    _fun0009_ip = 194; continue _fun0009;
 120:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var4 = var9[var3];
                    var6 = undefined;
                    var4 = var8.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var9[var3];
                    var3 = var8.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.Nfvo7+;
                    var3 = var4.bind(var5)(var3);
                    var1['label'] = var3;
                    var3 = 'xbox';
                    var1['variant'] = var3;
                    var7 = var1;
 194:
                    var1 = null;
                    var1 = var1 != var7;
                    if(!var1) { _fun0009_ip = 343; continue _fun0009 }
 206:
                    var6 = _closure1_slot11;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 17;
                    var3 = var13[var3];
                    var5 = undefined;
                    var3 = var9.bind(var5)(var3);
                    var4 = var3.TableRadioRow;
                    var3 = {};
                    var10 = _closure1_slot11;
                    var8 = 18;
                    var8 = var13[var8];
                    var8 = var9.bind(var5)(var8);
                    var9 = var8.TableRowIcon;
                    var8 = {};
                    var12 = _closure1_slot1;
                    var11 = 25;
                    var11 = var13[var11];
                    var12 = var12.bind(var5)(var11);
                    var11 = var2.type;
                    var11 = var12.bind(var5)(var11);
                    var8['source'] = var11;
                    var11 = var7.variant;
                    var8['variant'] = var11;
                    var8 = var10.bind(var5)(var9, var8);
                    var3['icon'] = var8;
                    var7 = var7.label;
                    var3['label'] = var7;
                    var7 = var2.type;
                    var3['value'] = var7;
                    var2 = var2.type;
                    var1 = var6.bind(var5)(var4, var3, var2);
 343:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 497:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VOICE_PANEL_AUDIO_OUTPUT_ACTION_SHEET_KEY;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'marginTop': 0, 'marginBottom': 24};
    var4['sectionContainer'] = var10;
    var10 = {'padding': 6, 'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 10;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var4['deviceIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelAudioOutputActionSheet(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var14 = var2.isConnectedToVoiceChannel;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var16;
            if(var2) { _fun0010_ip = 317; continue _fun0010 }
 85:
            var4 = _closure1_slot11;
            var15 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 26;
            var2 = var12[var2];
            var2 = var15.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var8 = _closure1_slot11;
            var6 = 27;
            var6 = var12[var6];
            var6 = var15.bind(var5)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var9 = 15;
            var10 = var12[var9];
            var10 = var15.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var12[var9];
            var9 = var15.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.iwxPMz;
            var9 = var10.bind(var11)(var9);
            var6['title'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['header'] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = _closure1_slot12;
            var10 = _closure1_slot1;
            var9 = 28;
            var9 = var12[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            if(!var14) { _fun0010_ip = 255; continue _fun0010 }
 239:
            var17 = _closure1_slot11;
            var15 = _closure1_slot15;
            var12 = {};
            var14 = var17.bind(var5)(var15, var12);
 255:
            var12 = new Array(2);
            var12[0] = var14;
            var15 = _closure1_slot11;
            var14 = _closure1_slot16;
            var13 = {};
            var13['channel'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 317:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelAudioOutputActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();