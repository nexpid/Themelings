// app/modules/stage_channels/native/components/StageActionBar.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = 12;
    var11 = {'paddingHorizontal': 12, 'justifyContent': 'center', 'alignItems': 'center', 'flexDirection': 'row', 'position': 'relative'};
    var7['container'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot8 = var7;
    var7 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.channel;
            var _closure2_slot0 = var13;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var3 = _closure1_slot8;
            var6 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var8 = var7.bind(var4)(var3);
            var5 = var8.useCanModerateRequestToSpeak;
            var3 = var13.id;
            var12 = var5.bind(var8)(var3);
            var _closure2_slot1 = var12;
            var3 = 5;
            var3 = var9[var3];
            var8 = var7.bind(var4)(var3);
            var5 = var8.useActionBarPrimaryButton;
            var3 = {};
            var3['channel'] = var13;
            var3 = var5.bind(var8)(var3);
            var _closure2_slot2 = var3;
            var5 = 6;
            var5 = var9[var5];
            var10 = var7.bind(var4)(var5);
            var8 = var10.useGetActionBarHeight;
            var5 = var13.id;
            var8 = var8.bind(var10)(var5);
            var10 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var10 = var10.bind(var4)(var5);
            var5 = var13.id;
            var11 = var10.bind(var4)(var5);
            var _closure2_slot3 = var11;
            var5 = 8;
            var5 = var9[var5];
            var9 = var7.bind(var4)(var5);
            var7 = var9.useShowStageMusicMuteButton;
            var5 = var13.id;
            var14 = var7.bind(var9)(var5);
            if(!var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = !var11;
case 2:
            _closure2_slot4 = var14;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 9;
            var5 = var9[var5];
            var9 = var7.bind(var4)(var5);
            var7 = var9.isStageVideoEnabled;
            var5 = var13.guild_id;
            var9 = var7.bind(var9)(var5);
            _closure2_slot5 = var9;
            var7 = _closure1_slot3;
            var10 = var7.useCallback;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var13;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 5;
                    var1 = var1[var8];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.ActionBarPrimaryButton;
                    var1 = var1.END_STREAM;
                    if(!(var3 !== var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot2;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.ActionBarPrimaryButton;
                    var3 = var1.END_CALL;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var9 = _closure1_slot5;
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 10;
                    var3 = var10[var3];
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.DisconnectStageButton;
                    var3 = {};
                    var10 = _closure2_slot0;
                    var3['channel'] = var10;
                    var3['isSmallSize'] = var6;
                    var1 = var9.bind(var5)(var4, var3);
case 6:
                    _fun0002_ip = 8; continue _fun0002;
case 4:
                    var4 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.DisconnectStreamButton;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['channel'] = var7;
                    var2['isSmallSize'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var10 = var10.bind(var7)(var3, var5);
            _closure2_slot6 = var10;
            var5 = var7.useMemo;
            var3 = new Array(6);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var8 = _closure2_slot4;
                    if(!var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var8 = _closure2_slot1;
case 11:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var11 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 10;
                    var5 = var10[var5];
                    var10 = undefined;
                    var5 = var9.bind(var10)(var5);
                    var9 = var5.MusicMuteButton;
                    var5 = {};
                    var12 = _closure2_slot0;
                    var5['channel'] = var12;
                    var5['isSmallSize'] = var8;
                    var1 = var11.bind(var10)(var9, var5);
case 13:
                    var5 = new Array(5);
                    var5[0] = var1;
                    var12 = _closure1_slot5;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var11 = 10;
                    var9 = var1[var11];
                    var1 = undefined;
                    var9 = var10.bind(var1)(var9);
                    var10 = var9.RequestToSpeakButton;
                    var9 = {};
                    var13 = _closure2_slot0;
                    var9['channel'] = var13;
                    var9['isSmallSize'] = var8;
                    var9 = var12.bind(var1)(var10, var9);
                    var5[1] = var9;
                    var9 = _closure2_slot1;
                    if(!var9) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var13 = _closure1_slot5;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var11];
                    var10 = var12.bind(var1)(var10);
                    var12 = var10.RequestToSpeakListButton;
                    var10 = {};
                    var14 = _closure2_slot0;
                    var10['channel'] = var14;
                    var10['isSmallSize'] = var8;
                    var9 = var13.bind(var1)(var12, var10);
case 15:
                    var5[2] = var9;
                    var10 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var11];
                    var6 = var9.bind(var1)(var6);
                    var9 = var6.ChatButton;
                    var6 = {};
                    var11 = _closure2_slot0;
                    var6['channel'] = var11;
                    var6['isSmallSize'] = var8;
                    var6 = var10.bind(var1)(var9, var6);
                    var5[3] = var6;
                    var6 = _closure2_slot6;
                    var6 = var6.bind(var1)(var8);
                    var5[4] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    _fun0003_ip = 17; continue _fun0003;
case 9:
                    var8 = _closure2_slot5;
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var2 = var8;
                    if(!var2) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var12 = _closure1_slot5;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 5;
                    var6 = var11[var6];
                    var11 = undefined;
                    var6 = var10.bind(var11)(var6);
                    var10 = var6.VideoButton;
                    var6 = {};
                    var13 = _closure2_slot0;
                    var6['channel'] = var13;
                    var6['isSmallSize'] = var8;
                    var2 = var12.bind(var11)(var10, var6);
case 18:
                    var6 = new Array(5);
                    var6[0] = var2;
                    var14 = _closure1_slot5;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 11;
                    var10 = var10[var2];
                    var2 = undefined;
                    var10 = var11.bind(var2)(var10);
                    var11 = var10.ChannelCallMicButton;
                    var10 = {};
                    var12 = _closure2_slot0;
                    var10['channel'] = var12;
                    var10['isSmallSize'] = var8;
                    var10 = var14.bind(var2)(var11, var10);
                    var6[1] = var10;
                    var11 = _closure2_slot1;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var13 = 10;
                    var10 = var10[var13];
                    var10 = var12.bind(var2)(var10);
                    if(var11) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var11 = var10.MoveToAudienceButton;
                    _fun0003_ip = 22; continue _fun0003;
case 20:
                    var11 = var10.RequestToSpeakListButton;
case 22:
                    var10 = {};
                    var12 = _closure2_slot0;
                    var10['channel'] = var12;
                    var10['isSmallSize'] = var8;
                    var10 = var14.bind(var2)(var11, var10);
                    var6[2] = var10;
                    var11 = _closure1_slot5;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var10.bind(var2)(var9);
                    var10 = var9.ChatButton;
                    var9 = {};
                    var9['channel'] = var12;
                    var9['isSmallSize'] = var8;
                    var9 = var11.bind(var2)(var10, var9);
                    var6[3] = var9;
                    var7 = _closure2_slot6;
                    var7 = var7.bind(var2)(var8);
                    var6[4] = var7;
                    var3['children'] = var6;
                    var1 = var5.bind(var2)(var4, var3);
case 17:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = 'box-none';
            var1['pointerEvents'] = var7;
            var7 = var6.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var7['height'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/StageActionBar.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();