// app/modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx
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
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'gap': 20};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingTop'] = var12;
    var4['container'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['paddingTop'] = var10;
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['loadingState'] = var9;
    var9 = {};
    var9['alignItems'] = var10;
    var4['emptyState'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileMutualGuildsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var _closure2_slot0 = var2;
            var1 = var1.onPressMutualGuild;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot6;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var14 = var1.mutualGuilds;
            var3 = _closure1_slot5;
            var15 = 6;
            var1 = var7[var15];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var5 = true;
            var1['scrollable'] = var5;
            var5 = 7;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var8 = null;
            var7 = var8 == var14;
            var5 = undefined;
            if(var7) { _fun0001_ip = 121; continue _fun0001 }
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
            if(!(var8 != var14)) { _fun0001_ip = 294; continue _fun0001 }
 156:
            var9 = var14.length;
            var8 = 0;
            if(!(var8 !== var9)) { _fun0001_ip = 228; continue _fun0001 }
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
                var1 = arg1;
                var8 = var1.item;
                var _closure3_slot0 = var8;
                var6 = var1.start;
                var5 = var1.end;
                var4 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.MutualGuildRow;
                var1 = {};
                var9 = _closure2_slot0;
                var1['user'] = var9;
                var1['mutualGuild'] = var8;
                var7 = function onPress() {
                    var3 = _closure2_slot1;
                    var1 = _closure3_slot0;
                    var1 = var1.guild;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var7;
                var1['start'] = var6;
                var1['end'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var8['renderItem'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            _fun0001_ip = 292; continue _fun0001;
 228:
            var11 = _closure1_slot5;
            var10 = _closure1_slot3;
            var9 = {};
            var14 = var13.emptyState;
            var9['style'] = var14;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 8;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.NoMutualServers;
            var14 = {};
            var14 = var11.bind(var4)(var15, var14);
            var9['children'] = var14;
            var8 = var11.bind(var4)(var10, var9);
 292:
            _fun0001_ip = 336; continue _fun0001;
 294:
            var11 = _closure1_slot5;
            var10 = _closure1_slot3;
            var9 = {};
            var13 = var13.loadingState;
            var9['style'] = var13;
            var13 = _closure1_slot4;
            var12 = {};
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 336:
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