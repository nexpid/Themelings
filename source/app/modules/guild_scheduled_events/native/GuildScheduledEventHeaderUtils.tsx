// app/modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.isGuildEventEnded;
    var _closure1_slot3 = var7;
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildScheduledEventHeaderProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.eventTimeData;
            var18 = var1.startDateTimeString;
            var25 = var1.diffMinutes;
            var5 = var1.currentOrPastEvent;
            var4 = var1.upcomingEvent;
            var17 = var2.isStage;
            var9 = var2.theme;
            var15 = var2.event;
            var1 = var2.isCanceled;
            var7 = var2.recurrenceId;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var10 = undefined;
            var3 = var3.bind(var10)(var2);
            var2 = var3.getNextRecurrenceIdInEvent;
            var2 = var2.bind(var3)(var15);
            var16 = null;
            if(!(var16 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var3 = var3.bind(var10)(var15);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var2 === var7;
            if(!var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var7 = _closure1_slot4;
            var2 = var7.bind(var10)(var15);
case 5:
            var3 = var2;
case 4:
            var2 = _closure1_slot3;
            var2 = var2.bind(var10)(var15);
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var11 = 3;
            var7 = var12[var11];
            var7 = var8.bind(var10)(var7);
            var7 = var7.colors;
            var19 = var7.ICON_SUBTLE;
            var7 = 4;
            var7 = var12[var7];
            var13 = var8.bind(var10)(var7);
            if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var19;
            var7 = var18;
            var12 = var13;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = 7;
            var14 = var21[var14];
            var14 = var20.bind(var10)(var14);
            var20 = 0;
            if(!(!(var25 > var20))) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 5;
            var21 = var24[var20];
            var21 = var23.bind(var10)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var10)(var20);
            var20 = var20.t;
            var20 = var20.WINqKV;
            var20 = var21.bind(var22)(var20);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 5;
            var23 = var26[var21];
            var23 = var22.bind(var10)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var21 = var26[var21];
            var21 = var22.bind(var10)(var21);
            var21 = var21.t;
            var22 = var21.PQlCWk;
            var21 = {};
            var21['minutes'] = var25;
            var20 = var23.bind(var24)(var22, var21);
case 17:
            var7 = var20;
            var8 = var19;
            var12 = var14;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var14 = 7;
            var14 = var24[var14];
            var12 = var20.bind(var10)(var14);
            var23 = _closure1_slot0;
            var20 = 5;
            var21 = var24[var20];
            var21 = var23.bind(var10)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var10)(var20);
            var20 = var20.t;
            var20 = var20.WINqKV;
            var7 = var21.bind(var22)(var20);
            var8 = var19;
            _fun0001_ip = 13; continue _fun0001;
case 9:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var14 = 7;
            var14 = var21[var14];
            var12 = var20.bind(var10)(var14);
            var8 = var19;
            var7 = var18;
            _fun0001_ip = 13; continue _fun0001;
case 7:
            var21 = _closure1_slot0;
            var14 = _closure1_slot2;
            var19 = 5;
            var18 = var14[var19];
            var18 = var21.bind(var10)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var14 = var14[var19];
            var14 = var21.bind(var10)(var14);
            var14 = var14.t;
            var14 = var14.X2K3/4;
            var14 = var18.bind(var20)(var14);
            if(!var17) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 6;
            var17 = var20[var17];
            var13 = var18.bind(var10)(var17);
case 18:
            var17 = var16 == var15;
            var16 = undefined;
            if(var17) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = var15.entity_type;
case 20:
            var15 = _closure1_slot5;
            var15 = var15.EXTERNAL;
            if(!(var16 === var15)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var10)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var10)(var15);
            var15 = var15.t;
            var15 = var15.TxqPQR;
            var14 = var16.bind(var17)(var15);
case 22:
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var11];
            var15 = var16.bind(var10)(var15);
            var15 = var15.colors;
            var8 = var15.ICON_FEEDBACK_POSITIVE;
            var7 = var14;
            var12 = var13;
case 13:
            if(!var1) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var13.bind(var10)(var1);
            var1 = var1.colors;
            var8 = var1.ICON_FEEDBACK_CRITICAL;
case 24:
            var1 = {};
            var1['icon'] = var12;
            var1['text'] = var7;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var6 = var7.bind(var10)(var6);
            var7 = var6.internal;
            var6 = var7.resolveSemanticColor;
            var6 = var6.bind(var7)(var9, var8);
            var1['color'] = var6;
            var2 = !var2;
            if(!var2) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = var5;
case 28:
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var4;
case 30:
            var2 = var3;
case 26:
            var1['shouldChangeTextColor'] = var2;
            return var1;
        }
    };
    var3['getGuildScheduledEventHeaderProps'] = var2;
    return var1;
})();