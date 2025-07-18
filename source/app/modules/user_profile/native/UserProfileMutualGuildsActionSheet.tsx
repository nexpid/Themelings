// app/modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function MutualGuildRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.mutualGuild;
            var1 = var3.guild;
            var13 = var3.nick;
            var14 = var2.user;
            var7 = var2.style;
            var6 = var2.onPress;
            var2 = _closure1_slot7;
            var5 = undefined;
            var9 = var2.bind(var5)();
            var3 = var14.hasAvatarForGuild;
            var2 = var1.id;
            var12 = var3.bind(var14)(var2);
            var4 = _closure1_slot5;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 5;
            var2 = var16[var2];
            var2 = var15.bind(var5)(var2);
            var3 = var2.FormRow;
            var2 = {};
            var2['style'] = var7;
            var2['onPress'] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var10 = 6;
            var6 = var16[var10];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var1;
            var10 = var16[var10];
            var10 = var15.bind(var5)(var10);
            var10 = var10.GuildIconSizes;
            var10 = var10.SMALL_32;
            var6['size'] = var10;
            var6 = var8.bind(var5)(var7, var6);
            var2['leading'] = var6;
            var6 = var1.name;
            var2['label'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.mutualGuildSubLabel;
            var6['style'] = var9;
            var10 = var12;
            if(!var12) { _fun0001_ip = 275; continue _fun0001 }
 201:
            var16 = _closure1_slot5;
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 7;
            var9 = var19[var17];
            var15 = var15.bind(var5)(var9);
            var9 = {};
            var18 = _closure1_slot0;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.SIZE_16;
            var9['size'] = var17;
            var9['user'] = var14;
            var17 = var1.id;
            var9['guildId'] = var17;
            var10 = var16.bind(var5)(var15, var9);
 275:
            var9 = new Array(3);
            var9[0] = var10;
            var10 = null;
            var15 = var10 != var13;
            if(!var15) { _fun0001_ip = 345; continue _fun0001 }
 292:
            var18 = _closure1_slot5;
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 8;
            var16 = var19[var16];
            var16 = var17.bind(var5)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
            var16['children'] = var13;
            var15 = var18.bind(var5)(var17, var16);
 345:
            var9[1] = var15;
            var10 = var10 == var13;
            if(!var10) { _fun0001_ip = 359; continue _fun0001 }
 356:
            var10 = var12;
 359:
            if(!var10) { _fun0001_ip = 420; continue _fun0001 }
 362:
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 8;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-secondary'};
            var14 = var14.username;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 420:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['subLabel'] = var6;
            var1 = var1.id;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'gap': 20, 'paddingTop': 8};
    var4['container'] = var9;
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['pages'] = var9;
    var10 = 'center';
    var9 = {'paddingTop': 8, 'alignItems': 'center'};
    var4['loadingState'] = var9;
    var9 = {};
    var9['alignItems'] = var10;
    var4['emptyState'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['mutualGuildSubLabel'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileMutualGuildsActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var _closure2_slot0 = var2;
            var1 = var1.onPressMutualGuild;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot7;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var14 = var1.mutualGuilds;
            var3 = _closure1_slot5;
            var15 = 10;
            var1 = var7[var15];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 11;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var8 = null;
            var7 = var8 == var14;
            var5 = undefined;
            if(var7) { _fun0002_ip = 121; continue _fun0002 }
 116:
            var5 = var14.length;
 121:
            var5 = var6.bind(var4)(var5);
            var1['title'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var9 = var13.container;
            var5['style'] = var9;
            if(!(var8 != var14)) { _fun0002_ip = 298; continue _fun0002 }
 156:
            var9 = var14.length;
            var8 = 0;
            if(!(var8 !== var9)) { _fun0002_ip = 228; continue _fun0002 }
 167:
            var10 = _closure1_slot5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var8 = var9.bind(var4)(var8);
            var9 = var8.UserProfileStackedActionSheetList;
            var8 = {};
            var8['data'] = var14;
            var14 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.guild;
                var1 = var1.id;
                return var1;
            };
            var8['keyExtractor'] = var14;
            var11 = function renderItem(arg1) {
                var2 = arg1;
                var5 = var2.item;
                var _closure3_slot0 = var5;
                var6 = var2.style;
                var4 = _closure1_slot5;
                var3 = _closure1_slot8;
                var2 = {};
                var2['style'] = var6;
                var6 = _closure2_slot0;
                var2['user'] = var6;
                var2['mutualGuild'] = var5;
                var1 = function onPress() {
                    var3 = _closure2_slot1;
                    var1 = _closure3_slot0;
                    var1 = var1.guild;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var8['renderItem'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0002_ip = 296; continue _fun0002;
 228:
            var11 = _closure1_slot5;
            var10 = _closure1_slot3;
            var9 = {};
            var14 = var13.emptyState;
            var9['style'] = var14;
            var16 = _closure1_slot5;
            var15 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = 12;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.NoMutualServers;
            var14 = {};
            var14 = var16.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var11.bind(var4)(var10, var9);
 296:
            _fun0002_ip = 344; continue _fun0002;
 298:
            var11 = _closure1_slot5;
            var10 = _closure1_slot3;
            var9 = {};
            var13 = var13.loadingState;
            var9['style'] = var13;
            var14 = _closure1_slot5;
            var13 = _closure1_slot4;
            var12 = {};
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 344:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();