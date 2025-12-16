// app/modules/stage_channels/native/components/ModeratorStartStageView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/ModeratorStartStageView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ModeratorStartStageView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var18 = var2.channel;
            var13 = var2.onSkip;
            var4 = var18.guild_id;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 4;
            var6 = var3[var5];
            var5 = undefined;
            var9 = var2.bind(var5)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = new Array(1);
            var6[0] = var4;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var8.bind(var9)(var7, var1, var6);
            var1 = 5;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var6 = var7.useGuildChannelScheduledEvents;
            var1 = var18.id;
            var7 = var6.bind(var7)(var1);
            var6 = _closure1_slot3;
            var1 = 1;
            var6 = var6.bind(var5)(var7, var1);
            var1 = 0;
            var22 = var6[var1];
            var6 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var8 = var6.bind(var5)(var1);
            var7 = var18.id;
            var1 = true;
            var1 = var8.bind(var5)(var7, var1);
            var15 = var1.moderator;
            var1 = 7;
            var1 = var3[var1];
            var7 = var2.bind(var5)(var1);
            var1 = var7.useManageResourcePermissions;
            var1 = var1.bind(var7)(var18);
            var1 = var1.canManageGuildEvent;
            var9 = var1.bind(var5)(var22);
            var1 = 8;
            var1 = var3[var1];
            var1 = var6.bind(var5)(var1);
            var12 = var1.bind(var5)(var4);
            var1 = 9;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useStageChannelStartEvent;
            var1 = var18.id;
            var1 = var4.bind(var6)(var1);
            var17 = var1.isLive;
            var1 = 10;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getNextRecurrenceIdInEvent;
            var1 = var1.bind(var2)(var22);
            var11 = null;
            var2 = var11 != var1;
            var21 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var1;
case 2:
            var2 = var11 == var16;
            var1 = null;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 11;
            var2 = var19[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var14 = _closure1_slot0;
            var6 = 12;
            var7 = var19[var6];
            var7 = var14.bind(var5)(var7);
            var20 = var7.intl;
            var8 = var20.string;
            var7 = var19[var6];
            var7 = var14.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.QGnDLs;
            var7 = var8.bind(var20)(var7);
            var2['title'] = var7;
            var7 = var19[var6];
            var7 = var14.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var19[var6];
            var6 = var14.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.s/uXzq;
            var6 = var7.bind(var8)(var6);
            var2['body'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot6;
            var6 = {};
            var14 = null;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var11 != var22;
            var14 = null;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var9 = 13;
            var9 = var23[var9];
            var9 = var19.bind(var5)(var9);
            var19 = var9.StartEventPrompt;
            var9 = {};
            var9['channel'] = var18;
            var9['event'] = var22;
            var9['isLive'] = var17;
            var9['guild'] = var16;
            var9['recurrenceId'] = var21;
            var14 = var20.bind(var5)(var19, var9);
case 6:
            var9 = new Array(4);
            var9[0] = var14;
            var14 = null;
            if(!var15) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var15 = 14;
            var15 = var21[var15];
            var15 = var19.bind(var5)(var15);
            var19 = var15.StartStagePrompt;
            var15 = {};
            var15['channel'] = var18;
            var15['isLive'] = var17;
            var14 = var20.bind(var5)(var19, var15);
case 9:
            var9[1] = var14;
            var11 = null;
            if(!var12) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var15 = _closure1_slot5;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 13;
            var12 = var19[var12];
            var12 = var14.bind(var5)(var12);
            var14 = var12.ScheduleEventPrompt;
            var12 = {};
            var12['channel'] = var18;
            var12['isLive'] = var17;
            var12['guild'] = var16;
            var11 = var15.bind(var5)(var14, var12);
case 11:
            var9[2] = var11;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 14;
            var10 = var14[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.ContinueToStagePrompt;
            var10 = {};
            var10['onContinue'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();