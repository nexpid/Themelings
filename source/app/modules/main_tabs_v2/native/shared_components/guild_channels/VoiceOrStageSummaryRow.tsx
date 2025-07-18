// app/modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        var7 = arg1;
        var1 = {};
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'marginLeft': 4294967294};
        var1['container'] = var2;
        var2 = {'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BG_MOD_STRONG;
        var2['backgroundColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var2['height'] = var7;
        var2['width'] = var7;
        var1['overflowCircle'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BG_BASE_PRIMARY;
        var2['borderColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BG_BASE_PRIMARY;
        var2['backgroundColor'] = var8;
        var8 = 2;
        var2['borderWidth'] = var8;
        var1['wrapper'] = var2;
        var2 = {'borderRadius': null, 'paddingHorizontal': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var2['height'] = var7;
        var1['badge'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.STATUS_DANGER;
        var2['backgroundColor'] = var7;
        var1['liveBadge'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BG_BASE_SECONDARY;
        var2['backgroundColor'] = var3;
        var1['audienceBadge'] = var2;
        return var1;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function VoiceOrStageSummaryRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.users;
            var6 = var1.max;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 25; continue _fun0001 }
 22:
            var6 = 5;
 25:
            var _closure2_slot0 = var6;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var3 = var1.layout;
            var17 = var1.audienceCount;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getLayoutStyles;
            var1 = var1.bind(var2)(var3);
            _closure2_slot2 = var1;
            var1 = var1.voiceOrStageSummaryRow;
            var8 = var1.size;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var1 = var11.length;
            var1 = var1 - var6;
            var12 = 0;
            var1 = var2.bind(var3)(var1, var12);
            _closure2_slot3 = var1;
            var1 = _closure1_slot6;
            var15 = var1.bind(var4)(var8);
            _closure2_slot4 = var15;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var15.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = {};
            var19 = 4;
            var8 = var8 + var19;
            var7['height'] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = var11.map;
            var5 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var8 = arg2;
                    var1 = _closure2_slot0;
                    if(!(!(var8 >= var1))) { _fun0002_ip = 384; continue _fun0002 }
 17:
                    var1 = _closure2_slot0;
                    var12 = 1;
                    var1 = var1 - var12;
                    if(!(var8 === var1)) { _fun0002_ip = 45; continue _fun0002 }
 32:
                    var1 = _closure2_slot3;
                    var7 = 0;
                    if(!(!(var1 > var7))) { _fun0002_ip = 194; continue _fun0002 }
 45:
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var5 = _closure2_slot4;
                    var6 = var5.wrapper;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 0;
                    var6 = var6 !== var8;
                    if(!var6) { _fun0002_ip = 101; continue _fun0002 }
 85:
                    var9 = {};
                    var10 = -12;
                    var9['marginLeft'] = var10;
                    var6 = var9;
 101:
                    var5[1] = var6;
                    var2['style'] = var5;
                    var9 = _closure1_slot4;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 7;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = {};
                    var10 = arg1;
                    var5['user'] = var10;
                    var10 = _closure2_slot1;
                    var5['guildId'] = var10;
                    var10 = _closure2_slot2;
                    var10 = var10.voiceOrStageSummaryRow;
                    var10 = var10.avatarSize;
                    var5['size'] = var10;
                    var5 = var9.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2, var8);
                    _fun0002_ip = 382; continue _fun0002;
 194:
                    var6 = _closure1_slot4;
                    var5 = _closure1_slot3;
                    var4 = {};
                    var2 = _closure2_slot4;
                    var9 = var2.wrapper;
                    var2 = new Array(2);
                    var2[0] = var9;
                    var7 = var7 !== var8;
                    if(!var7) { _fun0002_ip = 248; continue _fun0002 }
 232:
                    var8 = {};
                    var9 = -12;
                    var8['marginLeft'] = var9;
                    var7 = var8;
 248:
                    var2[1] = var7;
                    var4['style'] = var2;
                    var8 = _closure1_slot4;
                    var7 = _closure1_slot3;
                    var2 = {};
                    var9 = _closure2_slot4;
                    var9 = var9.overflowCircle;
                    var2['style'] = var9;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 6;
                    var9 = var9[var3];
                    var3 = undefined;
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.Text;
                    var9 = {};
                    var13 = 'text-xs/medium';
                    var9['variant'] = var13;
                    var11 = _closure2_slot3;
                    var13 = var11 + var12;
                    var11 = global;
                    var11 = var11.HermesInternal;
                    var12 = var11.concat;
                    var11 = '+';
                    var11 = var12.bind(var11)(var13);
                    var9['children'] = var11;
                    var9 = var8.bind(var3)(var10, var9);
                    var2['children'] = var9;
                    var2 = var8.bind(var3)(var7, var2);
                    var4['children'] = var2;
                    var2 = 'overflow';
                    var1 = var6.bind(var3)(var5, var4, var2);
 382:
                    return var1;
 384:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var11)(var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var17;
            if(!var6) { _fun0001_ip = 240; continue _fun0001 }
 236:
            var6 = var17 > var12;
 240:
            if(!var6) { _fun0001_ip = 521; continue _fun0001 }
 246:
            var9 = _closure1_slot4;
            var8 = _closure1_slot3;
            var7 = {};
            var13 = var15.wrapper;
            var10 = new Array(2);
            var10[0] = var13;
            var11 = var11.length;
            var11 = var11 > var12;
            if(!var11) { _fun0001_ip = 298; continue _fun0001 }
 282:
            var12 = {};
            var13 = -12;
            var12['marginLeft'] = var13;
            var11 = var12;
 298:
            var10[1] = var11;
            var7['style'] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot3;
            var10 = {};
            var16 = var15.badge;
            var13 = new Array(2);
            var13[0] = var16;
            var15 = var15.audienceBadge;
            var13[1] = var15;
            var10['style'] = var13;
            var16 = _closure1_slot4;
            var21 = _closure1_slot1;
            var18 = _closure1_slot2;
            var20 = 8;
            var13 = var18[var20];
            var15 = var21.bind(var4)(var13);
            var13 = {};
            var20 = var18[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.Sizes;
            var20 = var20.CUSTOM;
            var13['size'] = var20;
            var20 = {'height': 14, 'width': 14};
            var13['style'] = var20;
            var20 = 9;
            var20 = var18[var20];
            var20 = var21.bind(var4)(var20);
            var13['source'] = var20;
            var15 = var16.bind(var4)(var15, var13);
            var13 = new Array(2);
            var13[0] = var15;
            var15 = _closure1_slot0;
            var14 = 6;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {};
            var18 = 'text-sm/bold';
            var14['variant'] = var18;
            var18 = {};
            var18['marginLeft'] = var19;
            var14['style'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 521:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();