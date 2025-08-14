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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGuildScheduledEventHeaderProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.eventTimeData;
            var18 = var2.startDateTimeString;
            var25 = var2.diffMinutes;
            var5 = var2.currentOrPastEvent;
            var4 = var2.upcomingEvent;
            var17 = var1.isStage;
            var11 = var1.theme;
            var15 = var1.event;
            var9 = var1.isCanceled;
            var6 = var1.recurrenceId;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var13 = undefined;
            var3 = var3.bind(var13)(var2);
            var2 = var3.isThemeDark;
            var3 = var2.bind(var3)(var11);
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var14 = 3;
            var2 = var2[var14];
            var2 = var7.bind(var13)(var2);
            var2 = var2.unsafe_rawColors;
            if(var3) { _fun0001_ip = 135; continue _fun0001 }
 127:
            var19 = var2.BRAND_500;
            _fun0001_ip = 141; continue _fun0001;
 135:
            var19 = var2.BRAND_360;
 141:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var3 = var3.bind(var13)(var2);
            var2 = var3.getNextRecurrenceIdInEvent;
            var2 = var2.bind(var3)(var15);
            var16 = null;
            if(!(var16 == var6)) { _fun0001_ip = 189; continue _fun0001 }
 178:
            var3 = _closure1_slot4;
            var3 = var3.bind(var13)(var15);
            _fun0001_ip = 208; continue _fun0001;
 189:
            var2 = var2 === var6;
            if(!var2) { _fun0001_ip = 205; continue _fun0001 }
 196:
            var6 = _closure1_slot4;
            var2 = var6.bind(var13)(var15);
 205:
            var3 = var2;
 208:
            var2 = _closure1_slot3;
            var2 = var2.bind(var13)(var15);
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var10 = var7.bind(var13)(var6);
            if(var3) { _fun0001_ip = 542; continue _fun0001 }
 243:
            if(var2) { _fun0001_ip = 511; continue _fun0001 }
 249:
            if(var5) { _fun0001_ip = 432; continue _fun0001 }
 255:
            var6 = var19;
            var7 = var18;
            var8 = var10;
            if(!var4) { _fun0001_ip = 735; continue _fun0001 }
 270:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 8;
            var12 = var21[var12];
            var12 = var20.bind(var13)(var12);
            var20 = 0;
            if(!(!(var25 > var20))) { _fun0001_ip = 353; continue _fun0001 }
 296:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 6;
            var21 = var24[var20];
            var21 = var23.bind(var13)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var13)(var20);
            var20 = var20.t;
            var20 = var20.WINqKS;
            var20 = var21.bind(var22)(var20);
            _fun0001_ip = 418; continue _fun0001;
 353:
            var22 = _closure1_slot0;
            var26 = _closure1_slot2;
            var21 = 6;
            var23 = var26[var21];
            var23 = var22.bind(var13)(var23);
            var24 = var23.intl;
            var23 = var24.formatToPlainString;
            var21 = var26[var21];
            var21 = var22.bind(var13)(var21);
            var21 = var21.t;
            var22 = var21.PQlCWl;
            var21 = {};
            var21['minutes'] = var25;
            var20 = var23.bind(var24)(var22, var21);
 418:
            var7 = var20;
            var6 = var19;
            var8 = var12;
            _fun0001_ip = 735; continue _fun0001;
 432:
            var20 = _closure1_slot1;
            var24 = _closure1_slot2;
            var12 = 8;
            var12 = var24[var12];
            var8 = var20.bind(var13)(var12);
            var23 = _closure1_slot0;
            var20 = 6;
            var21 = var24[var20];
            var21 = var23.bind(var13)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var13)(var20);
            var20 = var20.t;
            var20 = var20.WINqKS;
            var7 = var21.bind(var22)(var20);
            var6 = var19;
            _fun0001_ip = 735; continue _fun0001;
 511:
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 8;
            var12 = var21[var12];
            var8 = var20.bind(var13)(var12);
            var6 = var19;
            var7 = var18;
            _fun0001_ip = 735; continue _fun0001;
 542:
            var21 = _closure1_slot0;
            var12 = _closure1_slot2;
            var19 = 6;
            var18 = var12[var19];
            var18 = var21.bind(var13)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var12 = var12[var19];
            var12 = var21.bind(var13)(var12);
            var12 = var12.t;
            var12 = var12.X2K3//;
            var12 = var18.bind(var20)(var12);
            if(!var17) { _fun0001_ip = 620; continue _fun0001 }
 600:
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var17 = 7;
            var17 = var20[var17];
            var10 = var18.bind(var13)(var17);
 620:
            var17 = var16 == var15;
            var16 = undefined;
            if(var17) { _fun0001_ip = 635; continue _fun0001 }
 629:
            var16 = var15.entity_type;
 635:
            var15 = _closure1_slot5;
            var15 = var15.EXTERNAL;
            if(!(var16 === var15)) { _fun0001_ip = 701; continue _fun0001 }
 649:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = var15[var19];
            var16 = var18.bind(var13)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var13)(var15);
            var15 = var15.t;
            var15 = var15.TxqPQU;
            var12 = var16.bind(var17)(var15);
 701:
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var15 = var15[var14];
            var15 = var16.bind(var13)(var15);
            var15 = var15.unsafe_rawColors;
            var6 = var15.GREEN_360;
            var7 = var12;
            var8 = var10;
 735:
            if(!var9) { _fun0001_ip = 793; continue _fun0001 }
 738:
            var12 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = var1[var14];
            var9 = var12.bind(var13)(var9);
            var10 = var9.internal;
            var9 = var10.resolveSemanticColor;
            var1 = var1[var14];
            var1 = var12.bind(var13)(var1);
            var1 = var1.colors;
            var1 = var1.TEXT_DANGER;
            var6 = var9.bind(var10)(var11, var1);
 793:
            var1 = {};
            var1['icon'] = var8;
            var1['text'] = var7;
            var1['color'] = var6;
            var2 = !var2;
            if(!var2) { _fun0001_ip = 828; continue _fun0001 }
 813:
            if(var3) { _fun0001_ip = 819; continue _fun0001 }
 816:
            var3 = var5;
 819:
            if(var3) { _fun0001_ip = 825; continue _fun0001 }
 822:
            var3 = var4;
 825:
            var2 = var3;
 828:
            var1['shouldChangeTextColor'] = var2;
            return var1;
        }
    };
    var3['getGuildScheduledEventHeaderProps'] = var2;
    return var1;
})();