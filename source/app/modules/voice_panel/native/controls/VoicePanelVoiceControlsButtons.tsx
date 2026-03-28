// app/modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function GameConsoleAccountButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.channel;
            var _closure2_slot0 = var10;
            var1 = var2.account;
            var2 = var2.connected;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 20;
            var6 = var8[var4];
            var6 = var7.bind(var5)(var6);
            var6 = var6.bind(var5)(var10);
            var7 = _closure1_slot0;
            var4 = var8[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.useIsVoiceChannelLocked;
            var4 = var4.bind(var7)(var10);
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var10.isPrivate;
            var7 = var7.bind(var10)();
            var4 = !var7;
case 2:
            _closure2_slot1 = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 21;
            var7 = var9[var7];
            var12 = var8.bind(var5)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot12;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot12;
                var2 = var3.isInChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var12)(var8, var7);
            var8 = !var7;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var6;
case 4:
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var4;
case 6:
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var10 = 17;
                    var9 = var8[var10];
                    var9 = var12.bind(var1)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var8 = var8[var10];
                    var8 = var12.bind(var1)(var8);
                    var8 = var8.t;
                    if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = var8.rZfiNq;
                    var7 = var9.bind(var11)(var7);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var8 = var8.rimHDW;
                    var7 = var9.bind(var11)(var8);
case 10:
                    var2['key'] = var7;
                    var5 = _closure2_slot1;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = var6[var10];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = var6.rZfiNq;
                    var5 = var7.bind(var8)(var5);
                    _fun0002_ip = 13; continue _fun0002;
case 11:
                    var6 = var6.rimHDW;
                    var5 = var7.bind(var8)(var6);
case 13:
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var4, var6);
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 23;
            var6 = var4[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.useOnConnectToConsole;
            var12 = var6.bind(var9)(var10, var1);
            _closure2_slot2 = var12;
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var6 = new Array(1);
            var6[0] = var12;
            var3 = function() {
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var9.bind(var10)(var3, var6);
            var10 = var1.type;
            var3 = _closure1_slot14;
            var3 = var3.XBOX;
            if(!(var10 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = _closure1_slot14;
            var3 = var3.PLAYSTATION;
            if(!(var10 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = _closure1_slot14;
            var3 = var3.PLAYSTATION_STAGING;
            var9 = undefined;
            if(!(var10 === var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 17;
            var12 = var14[var3];
            var12 = var10.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var14[var3];
            var3 = var10.bind(var5)(var3);
            var10 = var3.t;
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = var10.bhdB9+;
            var3 = var12.bind(var13)(var3);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var10 = var10.BDiXtV;
            var3 = var12.bind(var13)(var10);
case 22:
            var9 = var3;
case 18:
            _fun0001_ip = 23; continue _fun0001;
case 16:
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 17;
            var12 = var14[var3];
            var12 = var10.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var3 = var14[var3];
            var3 = var10.bind(var5)(var3);
            var10 = var3.t;
            if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var10.QxEYDj;
            var3 = var12.bind(var13)(var3);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var10 = var10.vzfxmY;
            var3 = var12.bind(var13)(var10);
case 26:
            var9 = var3;
case 23:
            _fun0001_ip = 27; continue _fun0001;
case 14:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 17;
            var10 = var14[var3];
            var10 = var13.bind(var5)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var14[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.t;
            if(var2) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = var3.E8euSk;
            var2 = var10.bind(var12)(var2);
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var3 = var3.qVE/VF;
            var2 = var10.bind(var12)(var3);
case 30:
            var9 = var2;
case 27:
            var3 = _closure1_slot1;
            var2 = 24;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var1 = var1.type;
            var14 = var2.bind(var5)(var1);
            var10 = null;
            var2 = var10 == var9;
            var1 = null;
            if(var2) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var4 = _closure1_slot17;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 25;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var12 = var10 != var14;
            var10 = undefined;
            if(!var12) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var13 = _closure1_slot17;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 26;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.TableRowIcon;
            var11 = {};
            var11['source'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 33:
            var2['icon'] = var10;
            var2['label'] = var9;
            var2['disabled'] = var8;
            if(!var8) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var6 = var7;
case 35:
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var1 = function toggleDeaf() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 43;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.toggleSelfDeaf;
        var2 = var2.bind(var3)();
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot13 = var8;
    var5 = var5.PlatformTypes;
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SelfStreamAndVideoAlertType;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MediaEngineContextTypes;
    var _closure1_slot16 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot17 = var5;
    var5 = 66;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function GameConsoles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var1 = var1.connected;
            var _closure2_slot1 = var1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var8 = var1.bind(var5)();
            var3 = var8.length;
            var1 = 0;
            var3 = var3 > var1;
            var1 = null;
            if(!var3) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var4 = _closure1_slot17;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 19;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {};
            var7 = 17;
            var9 = var12[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.mbi/fB;
            var7 = var9.bind(var10)(var7);
            var2['title'] = var7;
            var7 = var8.map;
            var6 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot17;
                var4 = _closure1_slot18;
                var3 = {};
                var3['account'] = var1;
                var6 = _closure2_slot0;
                var3['channel'] = var6;
                var2 = _closure2_slot1;
                var3['connected'] = var2;
                var2 = var1.type;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 37:
            return var1;
        }
    };
    var3['GameConsoles'] = var5;
    var3['GameConsoleAccountButton'] = var4;
    var4 = function HangStatusButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 27;
            var1 = var7[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var4.useHangStatusExperiment;
            var1 = {};
            var8 = var3.guild_id;
            var1['guildId'] = var8;
            var8 = 'HangStatusButton';
            var1['location'] = var8;
            var1 = var2.bind(var4)(var1);
            var4 = var1.enableHangStatus;
            var2 = _closure1_slot1;
            var1 = 28;
            var1 = var7[var1];
            var2 = var2.bind(var5)(var1);
            var1 = true;
            var2 = var2.bind(var5)(var3, var1);
            var1 = null;
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var1 = null;
            if(!var2) { _fun0004_ip = 39; continue _fun0004 }
case 41:
            var4 = _closure1_slot17;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 25;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.showHangStatusPickerActionSheet;
                var3 = {};
                var2 = _closure2_slot0;
                var2 = var2.id;
                var3['channelId'] = var2;
                var2 = true;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var8 = _closure1_slot17;
            var6 = 26;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var7 = var6.TableRowIcon;
            var6 = {};
            var12 = _closure1_slot1;
            var11 = 30;
            var11 = var10[var11];
            var11 = var12.bind(var5)(var11);
            var6['source'] = var11;
            var6 = var8.bind(var5)(var7, var6);
            var2['icon'] = var6;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.pwvT9g;
            var6 = var7.bind(var8)(var6);
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 39:
            return var1;
        }
    };
    var3['HangStatusButton'] = var4;
    var4 = function ActivitiesButton(arg1) {
        var2 = arg1;
        var7 = var2.openTab;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var3 = var6.useContext;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 31;
        var2 = var9[var2];
        var4 = undefined;
        var2 = var8.bind(var4)(var2);
        var2 = var3.bind(var6)(var2);
        var8 = var2.dismissPanel;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot4;
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var7;
        var1 = function() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = global;
            var4 = var2.setTimeout;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = 'app_launcher';
                var2['tab'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 32;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.VoicePanelTabAnalyticsSources;
                var4 = var4.VOICE_CONTROLS;
                var2['source'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 200;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot17;
        var8 = _closure1_slot0;
        var1 = 25;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var6;
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var6 = var5.TableRowIcon;
        var5 = {};
        var10 = 33;
        var10 = var9[var10];
        var10 = var8.bind(var4)(var10);
        var10 = var10.AppsIcon;
        var5['IconComponent'] = var10;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.aeuOoh;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ActivitiesButton'] = var4;
    var4 = function ChatButton(arg1) {
        var2 = arg1;
        var7 = var2.openTab;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot4;
        var3 = var6.useContext;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 31;
        var2 = var9[var2];
        var4 = undefined;
        var2 = var8.bind(var4)(var2);
        var2 = var3.bind(var6)(var2);
        var8 = var2.dismissPanel;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot4;
        var3 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var7;
        var1 = function() {
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = global;
            var4 = var2.setTimeout;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = 'chat';
                var2['tab'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 32;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.VoicePanelTabAnalyticsSources;
                var4 = var4.VOICE_CONTROLS;
                var2['source'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = 200;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot17;
        var8 = _closure1_slot0;
        var1 = 25;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var6;
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var6 = var5.TableRowIcon;
        var5 = {};
        var10 = 34;
        var10 = var9[var10];
        var10 = var8.bind(var4)(var10);
        var10 = var10.ChatIcon;
        var5['IconComponent'] = var10;
        var5 = var7.bind(var4)(var6, var5);
        var1['icon'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5["5KxXrK"];
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ChatButton'] = var4;
    var4 = function SoundboardButton(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 35;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var2 = var2.id;
            var4 = _closure1_slot0;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.SoundboardButtonLocation;
            var1 = var1.VOICE_CONTROLS;
            var1 = var3.bind(var5)(var2, var1);
            var2 = var1.visible;
            var8 = var1.handlePress;
            var7 = var1.disabled;
            var1 = null;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = _closure1_slot17;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 25;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var9 = 17;
            var12 = var11[var9];
            var12 = var10.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.ABjMWI;
            var9 = var12.bind(var13)(var9);
            var2['label'] = var9;
            var2['onPress'] = var8;
            var2['disabled'] = var7;
            var8 = _closure1_slot17;
            var6 = 26;
            var6 = var11[var6];
            var6 = var10.bind(var5)(var6);
            var7 = var6.TableRowIcon;
            var6 = {};
            var9 = 36;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.SoundboardIcon;
            var6['IconComponent'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['icon'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var3['SoundboardButton'] = var4;
    var4 = function ScreenshareButton(arg1) {
        var2 = arg1;
        var3 = var2.channel;
        var5 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 37;
        var2 = var10[var2];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.bind(var4)(var3);
        var8 = var2.onPress;
        var _closure2_slot0 = var8;
        var9 = var2.imgSource;
        var5 = var2.text;
        var11 = var2.isFeatureEnabled;
        var12 = var2.isActive;
        var _closure2_slot1 = var12;
        var7 = _closure1_slot4;
        var3 = var7.useCallback;
        var2 = new Array(2);
        var2[0] = var12;
        var2[1] = var8;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 38;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.track;
            var2 = _closure1_slot13;
            var4 = var2.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED;
            var3 = {};
            var2 = 'voice controls';
            var3['source'] = var2;
            var7 = _closure2_slot1;
            var3['was_active'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            return var1;
        };
        var8 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot17;
        var7 = _closure1_slot0;
        var1 = 25;
        var1 = var10[var1];
        var1 = var7.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var11 = !var11;
        var1['disabled'] = var11;
        var1['onPress'] = var8;
        var8 = _closure1_slot17;
        var6 = 26;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.TableRowIcon;
        var6 = {};
        var6['source'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ScreenshareButton'] = var4;
    var4 = function StreamVolumeItem() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var3 = var6.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot10;
            var2[1] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getLastActiveStream;
                    var2 = var1.bind(var2)();
                    var5 = null;
                    var4 = var5 != var2;
                    var1 = null;
                    if(!var4) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                    var4 = var2.ownerId;
                    var6 = _closure1_slot10;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0007_ip = 44; continue _fun0007 }
case 46:
                    var1 = var2;
case 44:
                    return var1;
                }
            };
            var2 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot1;
            var1 = 39;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var1 = null;
            var3 = var1 == var2;
            var4 = undefined;
            if(var3) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var4 = var2.ownerId;
case 47:
            var3 = _closure1_slot16;
            var3 = var3.STREAM;
            var3 = var6.bind(var5)(var4, var3);
            var14 = var3.effectiveVolume;
            var13 = var3.handleVolumeChange;
            var2 = var1 == var2;
            var1 = null;
            if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 49:
            var4 = _closure1_slot17;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 19;
            var2 = var18[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.TableRowGroup;
            var2 = {};
            var6 = 17;
            var7 = var18[var6];
            var7 = var17.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.pEAl4b;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var8 = _closure1_slot17;
            var6 = 25;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var7 = var6.TableRow;
            var6 = {};
            var11 = _closure1_slot17;
            var10 = _closure1_slot1;
            var9 = 40;
            var9 = var18[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var15 = 41;
            var15 = var18[var15];
            var17 = var17.bind(var5)(var15);
            var15 = var17.isAndroid;
            var17 = var15.bind(var17)();
            var15 = undefined;
            if(!var17) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var15 = function() {
                var1 = true;
                return var1;
            };
case 50:
            var9['onResponderGrant'] = var15;
            var9['value'] = var14;
            var9['onValueChange'] = var13;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 42;
            var15 = var14[var12];
            var15 = var13.bind(var5)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.WHITE;
            var9['color'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.PRIMARY_300;
            var9['maxTrackTintColor'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['label'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['StreamVolumeItem'] = var4;
    var4 = function DeafenSwitch() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 21;
        var1 = var9[var1];
        var4 = undefined;
        var5 = var8.bind(var4)(var1);
        var3 = var5.useStateFromStores;
        var1 = _closure1_slot11;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot11;
            var1 = var2.isSelfDeaf;
            var1 = var1.bind(var2)();
            return var1;
        };
        var7 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot17;
        var1 = 44;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var11 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var10 = var5.TableRowIcon;
        var5 = {};
        var12 = 45;
        var12 = var9[var12];
        var12 = var8.bind(var4)(var12);
        var12 = var12.HeadphonesSlashIcon;
        var5['IconComponent'] = var12;
        var13 = _closure1_slot1;
        var12 = 46;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var5['source'] = var12;
        var5 = var11.bind(var4)(var10, var5);
        var1['icon'] = var5;
        var5 = 17;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.wjcRFX;
        var10 = var11.bind(var12)(var10);
        var1['accessibilityHint'] = var10;
        var1['value'] = var7;
        var6 = _closure1_slot19;
        var1['onValueChange'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.wjcRFX;
        var6 = var7.bind(var10)(var6);
        var1['label'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.M3VN2U;
        var5 = var6.bind(var7)(var5);
        var1['subLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['DeafenSwitch'] = var4;
    var4 = function AudioRouteButton(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var1 = var1.connected;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 47;
        var1 = var8[var1];
        var4 = undefined;
        var2 = var6.bind(var4)(var1);
        var1 = var2.useMaskedSpeakerStates;
        var1 = var1.bind(var2)();
        var12 = var1.routeSource;
        var3 = _closure1_slot17;
        var1 = 25;
        var1 = var8[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var11 = _closure1_slot17;
        var9 = 26;
        var9 = var8[var9];
        var9 = var6.bind(var4)(var9);
        var10 = var9.TableRowIcon;
        var9 = {};
        var9['source'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var1['icon'] = var9;
        var7 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 48;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.showAudioOutputSelector;
            var3 = _closure2_slot0;
            var3 = var3.id;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var7;
        var7 = 17;
        var9 = var8[var7];
        var9 = var6.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var6.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.A/Ly/2;
        var7 = var9.bind(var10)(var7);
        var1['label'] = var7;
        var7 = _closure1_slot17;
        var5 = 49;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TableRowArrow;
        var5 = {};
        var5 = var7.bind(var4)(var6, var5);
        var1['trailing'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AudioRouteButton'] = var4;
    var4 = function InviteButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var2 = var2.connected;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 50;
            var3 = var9[var3];
            var5 = undefined;
            var7 = var8.bind(var5)(var3);
            var4 = var7.useCanInviteMembers;
            var3 = var1.id;
            var4 = var4.bind(var7)(var3);
            var7 = _closure1_slot1;
            var3 = 20;
            var3 = var9[var3];
            var3 = var7.bind(var5)(var3);
            var7 = var3.bind(var5)(var1);
            var3 = 51;
            var3 = var9[var3];
            var8 = var8.bind(var5)(var3);
            var3 = var8.useInviteMembersCallback;
            var1 = var1.id;
            var8 = var3.bind(var8)(var1);
            var1 = null;
            if(var7) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var1 = null;
            if(!var4) { _fun0008_ip = 52; continue _fun0008 }
case 54:
            var1 = null;
            if(!var2) { _fun0008_ip = 52; continue _fun0008 }
case 55:
            var4 = _closure1_slot17;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 25;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['onPress'] = var8;
            var11 = _closure1_slot17;
            var8 = 26;
            var8 = var9[var8];
            var8 = var7.bind(var5)(var8);
            var10 = var8.TableRowIcon;
            var8 = {};
            var12 = 52;
            var12 = var9[var12];
            var12 = var7.bind(var5)(var12);
            var12 = var12.GroupPlusIcon;
            var8['IconComponent'] = var12;
            var13 = _closure1_slot1;
            var12 = 53;
            var12 = var9[var12];
            var12 = var13.bind(var5)(var12);
            var8['source'] = var12;
            var8 = var11.bind(var5)(var10, var8);
            var2['icon'] = var8;
            var8 = 17;
            var10 = var9[var8];
            var10 = var7.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var9[var8];
            var8 = var7.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.f1+QIK;
            var8 = var10.bind(var11)(var8);
            var2['label'] = var8;
            var8 = _closure1_slot17;
            var6 = 49;
            var6 = var9[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.TableRowArrow;
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['trailing'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 52:
            return var1;
        }
    };
    var3['InviteButton'] = var4;
    var4 = function HideNonVideoParticipants(arg1) {
        var2 = arg1;
        var6 = var2.channelId;
        var _closure2_slot0 = var6;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 21;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var8.bind(var4)(var2);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getVoiceParticipantsHidden;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var5.bind(var7)(var3, var2);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var7;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 54;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.toggleVoiceParticipantsHidden;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = !var2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var6 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot17;
        var1 = 44;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var11 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var10 = var5.TableRowIcon;
        var5 = {};
        var13 = 55;
        var13 = var9[var13];
        var13 = var8.bind(var4)(var13);
        var13 = var13.VideoIcon;
        var5['IconComponent'] = var13;
        var13 = _closure1_slot1;
        var12 = 56;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var5['source'] = var12;
        var5 = var11.bind(var4)(var10, var5);
        var1['icon'] = var5;
        var5 = 17;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var12 = var10.intl;
        var11 = var12.string;
        var10 = var9[var5];
        var10 = var8.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.ZMTRyc;
        var10 = var11.bind(var12)(var10);
        var1['accessibilityHint'] = var10;
        var1['value'] = var7;
        var1['onValueChange'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.ZMTRyc;
        var6 = var7.bind(var10)(var6);
        var1['label'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.MlpCFS;
        var5 = var6.bind(var7)(var5);
        var1['subLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['HideNonVideoParticipants'] = var4;
    var4 = function HideSelfVideo() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 57;
            var1 = var8[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var4 = _closure1_slot10;
            var1 = var4.getId;
            var1 = var1.bind(var4)();
            var4 = var3.bind(var5)(var1);
            var3 = _closure1_slot3;
            var1 = 3;
            var4 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var3 = var4[var1];
            var1 = 1;
            var7 = var4[var1];
            var _closure2_slot0 = var7;
            var1 = 2;
            var1 = var4[var1];
            var _closure2_slot1 = var1;
            var4 = _closure1_slot0;
            var1 = 21;
            var1 = var8[var1];
            var9 = var4.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.disableHideSelfStreamAndVideoConfirmationAlert;
                return var1;
            };
            var1 = var8.bind(var9)(var4, var1);
            var _closure2_slot2 = var1;
            var1 = null;
            if(!var3) { _fun0009_ip = 56; continue _fun0009 }
case 57:
            var4 = _closure1_slot17;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 44;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.TableSwitchRow;
            var2 = {};
            var7 = !var7;
            var2['value'] = var7;
            var6 = function onValueChange() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0010_ip = 58; continue _fun0010 }
case 60:
                    var2 = _closure1_slot15;
                    var5 = var2.VIDEO;
                    var4 = function openHideSelfStreamAndVideoConfirmDialog(arg1, arg2) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 16;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 15;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure6_slot0 = var2;
                                var1 = function(arg1) {
                                    var4 = _closure1_slot17;
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var7 = arg1;
                                    var8 = var2;
                                    var1 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'type';
                                    var2[var5] = var6;
                                    var5 = _closure4_slot1;
                                    var1 = 'onConfirm';
                                    var2[var1] = var5;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['importer'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var2)(var5, var3);
                    return var2;
case 58:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onValueChange'] = var6;
            var6 = 17;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.MH8ESU;
            var6 = var7.bind(var8)(var6);
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 56:
            return var1;
        }
    };
    var3['HideSelfVideo'] = var4;
    var4 = function LeaveActivitiesButton() {
        var4 = _closure1_slot17;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 25;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var7 = _closure1_slot17;
        var5 = 26;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var6 = var5.TableRowIcon;
        var5 = {};
        var11 = _closure1_slot1;
        var10 = 58;
        var10 = var9[var10];
        var10 = var11.bind(var3)(var10);
        var5['source'] = var10;
        var5 = var7.bind(var3)(var6, var5);
        var1['icon'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.R/FK4A;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var5 = function onPress() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.getCurrentEmbeddedActivity;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 59;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.leaveActivity;
                var2 = {};
                var5 = null;
                var8 = var5 == var6;
                var7 = undefined;
                if(var8) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var7 = var6.location;
case 61:
                var2['location'] = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if(var7) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                var5 = var6.applicationId;
case 63:
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['LeaveActivitiesButton'] = var4;
    var4 = function ShareActivityLogsButton() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 60;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.shareActivityLogs;
            var1 = var1.bind(var3)();
            var6 = var1.label;
            var11 = var1.icon;
            var5 = var1.onPress;
            var3 = _closure1_slot17;
            var1 = 25;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = null;
            var9 = var7 != var11;
            var7 = undefined;
            if(!var9) { _fun0012_ip = 65; continue _fun0012 }
case 66:
            var10 = _closure1_slot17;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 26;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TableRowIcon;
            var8 = {};
            var8['source'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 65:
            var1['icon'] = var7;
            var1['label'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ShareActivityLogsButton'] = var4;
    var4 = function ToggleShowActivitiesDebugOverlay() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 21;
        var1 = var9[var1];
        var4 = undefined;
        var6 = var8.bind(var4)(var1);
        var3 = var6.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot8;
            var1 = var2.getShowActivitiesDebugOverlay;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot17;
        var1 = 44;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.TableSwitchRow;
        var1 = {};
        var11 = _closure1_slot17;
        var7 = 26;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var10 = var7.TableRowIcon;
        var7 = {};
        var13 = _closure1_slot1;
        var12 = 61;
        var12 = var9[var12];
        var12 = var13.bind(var4)(var12);
        var7['source'] = var12;
        var7 = var11.bind(var4)(var10, var7);
        var1['icon'] = var7;
        var1['value'] = var6;
        var5 = function onValueChange(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 62;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var2['type'] = var5;
            var5 = arg1;
            var2['visible'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onValueChange'] = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.qv5/SP;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ToggleShowActivitiesDebugOverlay'] = var4;
    var4 = function VoiceSettingsButton(arg1) {
        var2 = arg1;
        var6 = var2.guildId;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 63;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.showVoiceSettingsActionSheet;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot17;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 25;
        var1 = var8[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['onPress'] = var7;
        var10 = _closure1_slot17;
        var7 = 26;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var9 = var7.TableRowIcon;
        var7 = {};
        var11 = 64;
        var11 = var8[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.SettingsIcon;
        var7['IconComponent'] = var11;
        var12 = _closure1_slot1;
        var11 = 65;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var7['source'] = var11;
        var7 = var10.bind(var3)(var9, var7);
        var1['icon'] = var7;
        var7 = 17;
        var9 = var8[var7];
        var9 = var6.bind(var3)(var9);
        var11 = var9.intl;
        var10 = var11.string;
        var9 = var8[var7];
        var9 = var6.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.NiTd0e;
        var9 = var10.bind(var11)(var9);
        var1['label'] = var9;
        var9 = var8[var7];
        var9 = var6.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var6.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["16SG+O"];
        var7 = var9.bind(var10)(var7);
        var1['subLabel'] = var7;
        var7 = _closure1_slot17;
        var5 = 49;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.TableRowArrow;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var1['trailing'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['VoiceSettingsButton'] = var4;
    var4 = function ReportStreamIssueButton(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var5 = var1.stream;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 60;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.reportStreamIssue;
            var1 = var1.bind(var3)(var5);
            var6 = var1.label;
            var11 = var1.icon;
            var5 = var1.onPress;
            var3 = _closure1_slot17;
            var1 = 25;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = null;
            var9 = var7 != var11;
            var7 = undefined;
            if(!var9) { _fun0013_ip = 67; continue _fun0013 }
case 68:
            var10 = _closure1_slot17;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 26;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TableRowIcon;
            var8 = {};
            var8['source'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 67:
            var1['icon'] = var7;
            var1['label'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ReportStreamIssueButton'] = var4;
    var2 = function RTCDebugPanelButton() {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 60;
            var1 = var7[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = var5.rtcDebugPanel;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var5)(var1);
            var6 = var1.label;
            var5 = var1.onPress;
            var11 = var1.icon;
            var3 = _closure1_slot17;
            var1 = 25;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = null;
            var9 = var7 != var11;
            var7 = undefined;
            if(!var9) { _fun0014_ip = 67; continue _fun0014 }
case 68:
            var10 = _closure1_slot17;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 26;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TableRowIcon;
            var8 = {};
            var8['source'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 67:
            var1['icon'] = var7;
            var1['label'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RTCDebugPanelButton'] = var2;
    return var1;
})();