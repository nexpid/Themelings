// app/modules/guild_tag/native/VoiceGuildTag.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var14 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
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
        var4 = var4.View;
        var _closure1_slot2 = var4;
        var13 = 2;
        var4 = var6[var13];
        var4 = var14.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.GuildTagBadgeSize;
        var _closure1_slot4 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot5 = var7;
        var4 = var4.jsxs;
        var _closure1_slot6 = var4;
        var11 = 5;
        var4 = var6[var11];
        var7 = var5.bind(var1)(var4);
        var4 = var7.isAndroid;
        var4 = var4.bind(var7)();
        var12 = 10;
        if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var12 = 14;
case 2:
        var4 = 6;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['height'] = var12;
        var4['gapContainer'] = var9;
        var9 = {'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'backgroundColor': null, 'borderRadius': 4, 'paddingHorizontal': 4, 'marginVertical': null, 'height': 16, 'gap': 2};
        var10 = 7;
        var10 = var6[var10];
        var10 = var14.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_MOD_STRONG;
        var9['backgroundColor'] = var10;
        var10 = 16;
        var12 = var12 - var10;
        var12 = var12 / var13;
        var9['marginVertical'] = var12;
        var4['tagContainer'] = var9;
        var9 = {};
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var11 = var11.bind(var12)();
        if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var10 = 13;
case 4:
        var9['lineHeight'] = var10;
        var4['tag'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot7 = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_tag/native/VoiceGuildTag.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function VoiceGuildTagChiplet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var10 = var1.userId;
                var _closure2_slot0 = var10;
                var1 = _closure1_slot7;
                var5 = undefined;
                var12 = var1.bind(var5)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 8;
                var4 = var1[var4];
                var9 = var3.bind(var5)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = new Array(1);
                var4[0] = var10;
                var2 = function() {
                    var3 = _closure1_slot3;
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var8.bind(var9)(var7, var2, var4);
                var2 = 9;
                var1 = var1[var2];
                var7 = var3.bind(var5)(var1);
                var4 = var7.getUserPrimaryGuild;
                var1 = null;
                var9 = var1 == var8;
                var3 = undefined;
                if(var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var8.primaryGuild;
case 6:
                var3 = var4.bind(var7)(var3);
                var11 = var3.tag;
                var8 = var3.badge;
                var7 = var3.guildId;
                if(!(var1 != var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                if(!(var1 != var11)) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                var10 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = var13[var2];
                var4 = var10.bind(var5)(var2);
                var3 = var4.getGuildTagBadgeUrl;
                var14 = _closure1_slot4;
                var2 = var14.SIZE_12;
                var16 = var3.bind(var4)(var7, var8, var2);
                var4 = _closure1_slot5;
                var3 = _closure1_slot2;
                var2 = {};
                var7 = var12.gapContainer;
                var2['style'] = var7;
                var7 = _closure1_slot6;
                var6 = {};
                var8 = var12.tagContainer;
                var6['style'] = var8;
                var8 = 10;
                var8 = var13[var8];
                var8 = var10.bind(var5)(var8);
                var9 = var8.GuildTagBadge;
                var8 = {};
                var15 = {};
                var15['uri'] = var16;
                var8['source'] = var15;
                var14 = var14.SIZE_12;
                var8['size'] = var14;
                var9 = var4.bind(var5)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 11;
                var9 = var13[var9];
                var9 = var10.bind(var5)(var9);
                var10 = var9.Text;
                var9 = {'variant': 'text-xs/semibold', 'color': 'text-default'};
                var12 = var12.tag;
                var9['style'] = var12;
                var9['children'] = var11;
                var9 = var4.bind(var5)(var10, var9);
                var8[1] = var9;
                var6['children'] = var8;
                var6 = var7.bind(var5)(var3, var6);
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
case 8:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();