// app/modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingLeft'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['paddingRight'] = var10;
    var4['connectButton'] = var9;
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['connectText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
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
            var _closure2_slot5 = var4;
            var1 = _closure1_slot6;
            var6 = var1.bind(var4)();
            var _closure2_slot0 = var6;
            var8 = _closure1_slot3;
            var2 = var8.useContext;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var2.bind(var8)(var1);
            var11 = var1.channelId;
            var _closure2_slot1 = var11;
            var1 = var1.guildId;
            var _closure2_slot2 = var1;
            var2 = 6;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var11);
            var13 = var2.canConnect;
            var _closure2_slot3 = var13;
            var12 = var2.isAtMaxCapacity;
            var _closure2_slot4 = var12;
            var3 = _closure1_slot0;
            var2 = 7;
            var2 = var10[var2];
            var15 = var3.bind(var4)(var2);
            var14 = var15.useStateFromStores;
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
            var8 = var14.bind(var15)(var8, var2);
            var2 = 8;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useIsChannelContentGated;
            var10 = var2.bind(var3)(var8);
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            var10 = var2 != var1;
case 2:
            if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            var10 = var2 != var11;
case 4:
            _closure2_slot5 = var10;
            var8 = _closure1_slot3;
            var3 = var8.useCallback;
            var2 = new Array(5);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.selectVoiceChannel;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 10; continue _fun0002;
case 6:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var7 = undefined;
                    var4 = var6.bind(var7)(var1);
                    var3 = var4.openAlert;
                    var1 = 11;
                    var2 = var9[var1];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.VOICE_PANEL_NO_JOIN_PERMS_KEY;
                    var6 = _closure1_slot5;
                    var5 = _closure1_slot1;
                    var1 = var9[var1];
                    var5 = var5.bind(var7)(var1);
                    var1 = {};
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0002_ip = 10; continue _fun0002;
case 11:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0002_ip = 10; continue _fun0002 }
case 15:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var7 = undefined;
                    var4 = var6.bind(var7)(var1);
                    var3 = var4.openAlert;
                    var1 = 13;
                    var2 = var9[var1];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.VOICE_PANEL_NSFW_KEY;
                    var6 = _closure1_slot5;
                    var5 = _closure1_slot1;
                    var1 = var9[var1];
                    var5 = var5.bind(var7)(var1);
                    var1 = {};
                    var9 = _closure2_slot2;
                    var1['guildId'] = var9;
                    var9 = _closure2_slot1;
                    var1['channelId'] = var9;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0002_ip = 10; continue _fun0002;
case 13:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 10;
                    var1 = var9[var1];
                    var7 = undefined;
                    var4 = var6.bind(var7)(var1);
                    var3 = var4.openAlert;
                    var1 = 12;
                    var2 = var9[var1];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.VOICE_PANEL_MAX_CAPACITY_KEY;
                    var6 = _closure1_slot5;
                    var5 = _closure1_slot1;
                    var1 = var9[var1];
                    var5 = var5.bind(var7)(var1);
                    var1 = {};
                    var8 = _closure2_slot1;
                    var1['channelId'] = var8;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = var3.bind(var4)(var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
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
            var7 = var7["96ANUN"];
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
                var5 = var5["96ANUN"];
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