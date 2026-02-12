// app/modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var4 = 3;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var4 = {};
    var11 = {};
    var12 = 4;
    var13 = var6[var12];
    var13 = var7.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var11['backgroundColor'] = var13;
    var13 = var6[var12];
    var13 = var7.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var11['paddingLeft'] = var13;
    var12 = var6[var12];
    var12 = var7.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11['paddingRight'] = var12;
    var4['connectButton'] = var11;
    var11 = {};
    var12 = 'center';
    var11['textAlign'] = var12;
    var4['connectText'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot7 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.props;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot6;
            var6 = var1.bind(var4)();
            var _closure2_slot0 = var6;
            var8 = _closure1_slot3;
            var2 = var8.useContext;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 6;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var2.bind(var8)(var1);
            var14 = var1.channelId;
            var _closure2_slot1 = var14;
            var1 = var1.guildId;
            var2 = 7;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var14);
            var16 = var2.canConnect;
            var _closure2_slot2 = var16;
            var15 = var2.isAtMaxCapacity;
            var _closure2_slot3 = var15;
            var3 = _closure1_slot0;
            var2 = 8;
            var2 = var10[var2];
            var12 = var3.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var11.bind(var12)(var8, var2);
            var2 = 9;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsChannelContentGated;
            var13 = var2.bind(var3)(var8);
            if(!var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var13 = var2 != var1;
case 2:
            if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            var13 = var2 != var14;
case 4:
            _closure2_slot4 = var13;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var10 = var2.bind(var4)(var8);
            var8 = {};
            var8['channelId'] = var14;
            var8 = var3.bind(var4)(var10, var8);
            _closure2_slot5 = var8;
            var8 = 11;
            var8 = var12[var8];
            var10 = var2.bind(var4)(var8);
            var8 = {};
            var8['guildId'] = var1;
            var8['channelId'] = var14;
            var8 = var3.bind(var4)(var10, var8);
            _closure2_slot6 = var8;
            var8 = _closure1_slot3;
            var11 = var8.useCallback;
            var10 = new Array(5);
            var10[0] = var16;
            var10[1] = var15;
            var10[2] = var14;
            var10[3] = var13;
            var10[4] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.selectVoiceChannel;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    _fun0002_ip = 10; continue _fun0002;
case 6:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var3 = var8[var3];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var3);
                    var4 = var5.openAlert;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.VOICE_PANEL_NO_JOIN_PERMS_KEY;
                    var2 = _closure1_slot7;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 10; continue _fun0002;
case 11:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 15:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var2 = var7[var2];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var2);
                    var4 = var5.openAlert;
                    var2 = 11;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var3 = var2.VOICE_PANEL_NSFW_KEY;
                    var2 = _closure2_slot6;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun0002_ip = 10; continue _fun0002;
case 13:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var2 = var7[var2];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var2);
                    var3 = var4.openAlert;
                    var2 = 10;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.VOICE_PANEL_MAX_CAPACITY_KEY;
                    var1 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var11.bind(var8)(var1, var10);
            var1 = 14;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var10;
            var1['props'] = var9;
            var11 = _closure1_slot0;
            var7 = 15;
            var9 = var12[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.96ANUN;
            var7 = var9.bind(var10)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = var6.connectButton;
            var1['style'] = var7;
            var7 = var8.useMemo;
            var9 = var6.connectText;
            var6 = new Array(1);
            var6[0] = var9;
            var5 = function() {
                var4 = _closure1_slot5;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 16;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/semibold', 'color': 'always-white'};
                var5 = _closure2_slot0;
                var5 = var5.connectText;
                var1['style'] = var5;
                var5 = 15;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.96ANUN;
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
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