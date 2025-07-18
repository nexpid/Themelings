// app/modules/guild_tag/native/VoiceGuildTag.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var15 = native3;
        var3 = native6;
        var6 = native7;
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
        var10 = 0;
        var7 = var6[var10];
        var4 = native4;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var13 = 1;
        var4 = var6[var13];
        var4 = var5.bind(var1)(var4);
        var7 = var4.View;
        var _closure1_slot2 = var7;
        var4 = var4.Text;
        var _closure1_slot3 = var4;
        var12 = 2;
        var4 = var6[var12];
        var4 = var15.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.GuildTagBadgeSize;
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var11 = 'center';
        var9['textAlignVertical'] = var11;
        var11 = 6;
        var14 = var6[var11];
        var16 = var5.bind(var1)(var14);
        var14 = var16.isAndroid;
        var16 = var14.bind(var16)();
        var14 = 10;
        if(!var16) { _fun0001_ip = 228; continue _fun0001 }
 225:
        var14 = 14;
 228:
        var9['height'] = var14;
        var4['gapContainer'] = var9;
        var9 = {'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'row', 'backgroundColor': null, 'borderRadius': 4, 'paddingHorizontal': 4, 'paddingVertical': null, 'height': 16};
        var14 = 7;
        var14 = var6[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BG_MOD_STRONG;
        var9['backgroundColor'] = var14;
        var14 = var6[var11];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var14 = var14.bind(var15)();
        var10 = 0;
        if(!var14) { _fun0001_ip = 306; continue _fun0001 }
 303:
        var10 = var13;
 306:
        var9['paddingVertical'] = var10;
        var10 = 16;
        var4['tagContainer'] = var9;
        var9 = {};
        var9['marginLeft'] = var12;
        var11 = var6[var11];
        var12 = var5.bind(var1)(var11);
        var11 = var12.isAndroid;
        var11 = var11.bind(var12)();
        if(!var11) { _fun0001_ip = 351; continue _fun0001 }
 348:
        var10 = 13;
 351:
        var9['lineHeight'] = var10;
        var4['tag'] = var9;
        var9 = {'width': 4, 'height': 4};
        var4['spacer'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot8 = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_tag/native/VoiceGuildTag.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function VoiceGuildTagChiplet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var7 = var2.primaryGuild;
                var9 = var2.userId;
                var _closure2_slot0 = var9;
                var22 = var2.badgeSize;
                var5 = undefined;
                if(!(var22 === var5)) { _fun0002_ip = 45; continue _fun0002 }
 32:
                var3 = _closure1_slot5;
                var22 = var3.SIZE_12;
 45:
                var20 = var2.textVariant;
                if(!(var20 === var5)) { _fun0002_ip = 61; continue _fun0002 }
 55:
                var20 = 'text-xs/semibold';
 61:
                var19 = var2.textColor;
                if(!(var19 === var5)) { _fun0002_ip = 77; continue _fun0002 }
 71:
                var19 = 'text-normal';
 77:
                var18 = var2.textStyle;
                var12 = var2.containerStyles;
                var2 = _closure1_slot8;
                var17 = var2.bind(var5)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var4[var2];
                var8 = var3.bind(var5)(var2);
                var4 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() {
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var8)(var3, var1, var2);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0002_ip = 176; continue _fun0002 }
 170:
                var2 = var3.primaryGuild;
 176:
                if(!(var1 != var2)) { _fun0002_ip = 183; continue _fun0002 }
 180:
                var7 = var2;
 183:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getUserPrimaryGuild;
                var3 = var3.bind(var4)(var7);
                var16 = var3.tag;
                var7 = var3.badge;
                var4 = var3.guildId;
                if(!(var1 != var4)) { _fun0002_ip = 525; continue _fun0002 }
 237:
                if(!(var1 != var16)) { _fun0002_ip = 525; continue _fun0002 }
 244:
                var15 = _closure1_slot0;
                var21 = _closure1_slot1;
                var2 = var21[var2];
                var3 = var15.bind(var5)(var2);
                var2 = var3.getGuildTagBadgeUrl;
                var24 = var2.bind(var3)(var4, var7, var22);
                var4 = _closure1_slot7;
                var3 = _closure1_slot3;
                var2 = {};
                var8 = _closure1_slot6;
                var10 = _closure1_slot2;
                var6 = {};
                var7 = var17.spacer;
                var6['style'] = var7;
                var7 = var8.bind(var5)(var10, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var9 = {};
                var13 = var17.gapContainer;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var9['style'] = var11;
                var11 = {};
                var12 = {};
                var13 = var17.tagContainer;
                var12['style'] = var13;
                var13 = 10;
                var13 = var21[var13];
                var13 = var15.bind(var5)(var13);
                var14 = var13.GuildTagBadge;
                var13 = {};
                var23 = {};
                var23['uri'] = var24;
                var13['source'] = var23;
                var13['size'] = var22;
                var14 = var8.bind(var5)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 11;
                var14 = var21[var14];
                var14 = var15.bind(var5)(var14);
                var15 = var14.Text;
                var14 = {};
                var14['variant'] = var20;
                var14['color'] = var19;
                var19 = var17.tag;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var14['style'] = var17;
                var14['children'] = var16;
                var14 = var8.bind(var5)(var15, var14);
                var13[1] = var14;
                var12['children'] = var13;
                var12 = var4.bind(var5)(var10, var12);
                var11['children'] = var12;
                var11 = var8.bind(var5)(var3, var11);
                var9['children'] = var11;
                var9 = var8.bind(var5)(var10, var9);
                var7['children'] = var9;
                var7 = var8.bind(var5)(var3, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
 525:
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();