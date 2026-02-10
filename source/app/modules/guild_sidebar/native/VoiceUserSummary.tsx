// app/modules/guild_sidebar/native/VoiceUserSummary.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot4 = var9;
    var5 = var5.jsxs;
    var _closure1_slot5 = var5;
    var9 = var2.Object;
    var5 = var9.freeze;
    var2 = {};
    var10 = 3;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.CutoutDirection;
    var10 = var10.RIGHT;
    var2['direction'] = var10;
    var10 = -2;
    var2['inset'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot6 = var2;
    var12 = 4;
    var2 = var7[var12];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var5 = {};
    var2 = 40;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 16, 'height': 40};
    var5['container'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'height': 40};
    var5['containerNoPadding'] = var11;
    var11 = {};
    var11['height'] = var2;
    var5['iconContainer'] = var11;
    var11 = {};
    var11['marginRight'] = var12;
    var5['redesignChannelIcon'] = var11;
    var11 = {'height': 20, 'paddingHorizontal': 4, 'paddingVertical': 0, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var5['overflow'] = var11;
    var11 = {};
    var12 = 'transparent';
    var11['borderColor'] = var12;
    var5['transparentBorder'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot7 = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.users;
            var10 = var1.max;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var6 = var1.renderIcon;
            var7 = var1.noPadding;
            var5 = var1.stageIcon;
            var1 = _closure1_slot7;
            var4 = undefined;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var16 = null;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var15.transparentBorder;
case 2:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useClientThemesOverride;
            var8 = var1.bind(var2)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = var15.container;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var12 = var15.containerNoPadding;
case 6:
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var8;
            var1['style'] = var7;
            var7 = _closure1_slot4;
            if(!var6) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.VoiceNormalIcon;
            _fun0001_ip = 10; continue _fun0001;
case 9:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 7;
            var5 = var12[var5];
            var5 = var8.bind(var4)(var5);
            var6 = var5.StageIcon;
case 10:
            var5 = {'size': 'sm', 'color': 'channel-icon'};
            var8 = var15.redesignChannelIcon;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 9;
            var6 = var14[var12];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var17 = -6;
            var6['offsetAmount'] = var17;
            var17 = var15.iconContainer;
            var6['style'] = var17;
            var17 = var15.overflow;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var6['overflowStyle'] = var15;
            var13 = _closure1_slot0;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.OverflowTextSmall;
            var6['overflowComponent'] = var12;
            var6['items'] = var11;
            var6['max'] = var10;
            var9 = function renderItem(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 3;
                    var1 = var8[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = arg1;
                    var1['user'] = var7;
                    var7 = _closure2_slot0;
                    var1['guildId'] = var7;
                    var7 = _closure1_slot0;
                    var5 = var8[var5];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.XSMALL_20;
                    var1['size'] = var5;
                    var7 = arg2;
                    var5 = undefined;
                    if(var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = _closure1_slot6;
case 11:
                    var1['cutout'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var6['renderItem'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_sidebar/native/VoiceUserSummary.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['VOICE_USER_SUMMARY_HEIGHT'] = var2;
    return var1;
})();