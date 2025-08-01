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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
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
    var13 = var13.TEXT_NORMAL;
    var9['color'] = var13;
    var4['title'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['marginHorizontal'] = var13;
    var9['padding'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_24;
    var9['marginBottom'] = var10;
    var4['cardStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildActionSheetProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.guild;
            var1 = _closure1_slot5;
            var6 = undefined;
            var9 = var1.bind(var6)();
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 4;
            var2 = var12[var1];
            var3 = var11.bind(var6)(var2);
            var2 = var3.useIOSCompletionStates;
            var2 = var2.bind(var3)(var10);
            var5 = var2.completed;
            var3 = var2.dismissed;
            var1 = var12[var1];
            var2 = var11.bind(var6)(var1);
            var1 = var2.useIsEligibleForGuildProgress;
            var8 = var1.bind(var2)(var10);
            var4 = _closure1_slot3;
            var2 = var4.useContext;
            var1 = 5;
            var1 = var12[var1];
            var1 = var11.bind(var6)(var1);
            var1 = var1.RedesignCompatContext;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(!var8) { _fun0001_ip = 329; continue _fun0001 }
 125:
            var1 = null;
            if(var5) { _fun0001_ip = 329; continue _fun0001 }
 133:
            var1 = null;
            if(!var3) { _fun0001_ip = 329; continue _fun0001 }
 141:
            var5 = _closure1_slot4;
            if(var2) { _fun0001_ip = 228; continue _fun0001 }
 148:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 8;
            var2 = var11[var2];
            var3 = var8.bind(var6)(var2);
            var2 = {};
            var4 = 7;
            var4 = var11[var4];
            var8 = var8.bind(var6)(var4);
            var4 = {};
            var4['guild'] = var10;
            var11 = var9.title;
            var4['titleStyle'] = var11;
            var11 = true;
            var4['longPressDisabled'] = var11;
            var4['resume'] = var11;
            var4 = var5.bind(var6)(var8, var4);
            var2['children'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 326; continue _fun0001;
 228:
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 6;
            var3 = var11[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.Card;
            var3 = {};
            var8 = var9.cardStyle;
            var3['style'] = var8;
            var8 = _closure1_slot1;
            var7 = 7;
            var7 = var11[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['guild'] = var10;
            var9 = var9.title;
            var7['titleStyle'] = var9;
            var9 = true;
            var7['longPressDisabled'] = var9;
            var7['resume'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 326:
            var1 = var2;
 329:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();