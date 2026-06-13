// app/modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx
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
    var12 = 0;
    var7 = var6[var12];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 3;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var9['color'] = var13;
    var4['title'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['marginHorizontal'] = var13;
    var9['padding'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_24;
    var9['marginBottom'] = var10;
    var4['cardStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildActionSheetProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.guild;
            var1 = _closure1_slot4;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var2 = var7[var1];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useIOSCompletionStates;
            var2 = var2.bind(var4)(var9);
            var4 = var2.completed;
            var2 = var2.dismissed;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useIsEligibleForGuildProgress;
            var7 = var1.bind(var3)(var9);
            var1 = null;
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var1 = null;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Card;
            var2 = {};
            var7 = var8.cardStyle;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var9;
            var8 = var8.title;
            var6['titleStyle'] = var8;
            var8 = true;
            var6['longPressDisabled'] = var8;
            var6['resume'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();