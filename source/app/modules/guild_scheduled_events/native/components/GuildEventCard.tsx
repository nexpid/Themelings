// app/modules/guild_scheduled_events/native/components/GuildEventCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function HubGuildEventCardControls(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.event;
            var _closure2_slot0 = var10;
            var13 = var2.isConnected;
            var14 = var2.onCloseAction;
            var2 = _closure1_slot9;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var11 = 8;
            var3 = var12[var11];
            var5 = var2.bind(var4)(var3);
            var3 = var5.useHubPrimaryActionButtonType;
            var9 = var3.bind(var5)(var10, var13);
            var3 = var12[var11];
            var3 = var2.bind(var4)(var3);
            var3 = var3.HubPrimaryActionType;
            var5 = var3.RSVP;
            var3 = 9;
            var3 = var12[var3];
            var15 = var2.bind(var4)(var3);
            var6 = var15.useStateFromStores;
            var16 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var16;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var6 = var6.bind(var15)(var3, var1);
            var3 = _closure1_slot8;
            var1 = 10;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ButtonGroup;
            var1 = {};
            var12 = 'horizontal';
            var1['direction'] = var12;
            var8 = var8.actionContainer;
            var1['style'] = var8;
            var8 = null;
            if(!(var9 === var5)) { _fun0001_ip = 224; continue _fun0001 }
 184:
            var12 = _closure1_slot7;
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var11];
            var5 = var9.bind(var4)(var5);
            var9 = var5.GuildEventCardTransitionTo;
            var5 = {};
            var5['event'] = var10;
            var8 = var12.bind(var4)(var9, var5);
 224:
            var5 = new Array(3);
            var5[0] = var8;
            var12 = _closure1_slot7;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var11];
            var8 = var9.bind(var4)(var8);
            var9 = var8.HubGuildEventCardPrimaryAction;
            var8 = {};
            var8['event'] = var10;
            var8['onCloseAction'] = var14;
            var8['isConnected'] = var13;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            if(!var6) { _fun0001_ip = 329; continue _fun0001 }
 289:
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GuildEventShareAction;
            var7 = {};
            var7['event'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 329:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function GuildEventCardControls(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.event;
            var14 = var1.isConnected;
            var15 = var1.onCloseAction;
            var1 = _closure1_slot9;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 8;
            var1 = var7[var10];
            var2 = var11.bind(var4)(var1);
            var1 = var2.usePrimaryActionButtonType;
            var8 = var1.bind(var2)(var9, var14);
            var3 = _closure1_slot8;
            var1 = 10;
            var1 = var7[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.ButtonGroup;
            var1 = {};
            var12 = 'horizontal';
            var1['direction'] = var12;
            var5 = var5.actionContainer;
            var1['style'] = var5;
            var13 = _closure1_slot7;
            var5 = var7[var10];
            var5 = var11.bind(var4)(var5);
            var12 = var5.GuildEventCardPrimaryAction;
            var5 = {};
            var5['event'] = var9;
            var5['onCloseAction'] = var15;
            var5['isConnected'] = var14;
            var12 = var13.bind(var4)(var12, var5);
            var5 = new Array(3);
            var5[0] = var12;
            var7 = var7[var10];
            var7 = var11.bind(var4)(var7);
            var7 = var7.PrimaryActionType;
            var7 = var7.START;
            var7 = var8 === var7;
            if(!var7) { _fun0002_ip = 227; continue _fun0002 }
 187:
            var12 = _closure1_slot7;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var11.bind(var4)(var8);
            var11 = var8.GuildEventCardRSVPAction;
            var8 = {};
            var8['event'] = var9;
            var7 = var12.bind(var4)(var11, var8);
 227:
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.GuildEventShareAction;
            var6 = {};
            var6['event'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var11 = 0;
    var5 = var7[var11];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.isGuildScheduledEventActive;
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {};
    var12 = 7;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var10['paddingTop'] = var12;
    var10['paddingBottom'] = var11;
    var2['actionContainer'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var14 = var1.event;
            var _closure2_slot0 = var14;
            var2 = var1.onPress;
            var _closure2_slot1 = var2;
            var6 = var1.onCloseAction;
            var16 = var1.hideControls;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0003_ip = 44; continue _fun0003 }
 42:
            var16 = false;
 44:
            var17 = var1.isHubContext;
            var21 = var1.isNew;
            if(!(var21 === var4)) { _fun0003_ip = 62; continue _fun0003 }
 60:
            var21 = false;
 62:
            var _closure2_slot2 = var4;
            var1 = var14.channel_id;
            _closure2_slot2 = var1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot5;
                    var1 = var3.isConnected;
                    var1 = var1.bind(var3)();
                    if(!var1) { _fun0004_ip = 45; continue _fun0004 }
 20:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannelId;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
 45:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var3, var1, var2);
            if(!var5) { _fun0003_ip = 149; continue _fun0003 }
 140:
            var1 = _closure1_slot6;
            var5 = var1.bind(var4)(var14);
 149:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.recurrenceRuleFromServer;
            var1 = var14.recurrence_rule;
            var15 = var2.bind(var3)(var1);
            var22 = function handlePress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 28; continue _fun0005 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = _closure1_slot7;
            if(var17) { _fun0003_ip = 206; continue _fun0003 }
 200:
            var2 = _closure1_slot11;
            _fun0003_ip = 210; continue _fun0003;
 206:
            var2 = _closure1_slot10;
 210:
            var1 = {};
            var1['event'] = var14;
            var1['onCloseAction'] = var6;
            var1['isConnected'] = var5;
            var12 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Card;
            var1 = {};
            var5 = false;
            var1['accessible'] = var5;
            var1['onPress'] = var22;
            var7 = _closure1_slot8;
            var6 = _closure1_slot3;
            var5 = {};
            var19 = _closure1_slot7;
            var20 = 8;
            var8 = var9[var20];
            var8 = var11.bind(var4)(var8);
            var18 = var8.GuildEventCardHeader;
            var8 = {};
            var8['event'] = var14;
            var23 = !var17;
            var8['showCreator'] = var23;
            var8['isNew'] = var21;
            var18 = var19.bind(var4)(var18, var8);
            var8 = new Array(6);
            var8[0] = var18;
            var21 = _closure1_slot7;
            var18 = var9[var20];
            var18 = var11.bind(var4)(var18);
            var19 = var18.GuildEventCardMetaInfo;
            var18 = {};
            var18['event'] = var14;
            var18['onTitlePress'] = var22;
            var18 = var21.bind(var4)(var19, var18);
            var8[1] = var18;
            var18 = _closure1_slot7;
            var9 = var9[var20];
            var9 = var11.bind(var4)(var9);
            var11 = var9.GuildEventSimpleLocation;
            var9 = {};
            var9['event'] = var14;
            var9 = var18.bind(var4)(var11, var9);
            var8[2] = var9;
            var9 = null;
            var11 = null;
            if(!var17) { _fun0003_ip = 466; continue _fun0003 }
 426:
            var19 = _closure1_slot7;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var20];
            var17 = var18.bind(var4)(var17);
            var18 = var17.HubEventGuildInfo;
            var17 = {};
            var17['event'] = var14;
            var11 = var19.bind(var4)(var18, var17);
 466:
            var8[3] = var11;
            var11 = null;
            if(var16) { _fun0003_ip = 478; continue _fun0003 }
 475:
            var11 = var12;
 478:
            var8[4] = var11;
            var9 = var9 != var15;
            if(!var9) { _fun0003_ip = 557; continue _fun0003 }
 489:
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 13;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var16 = var14.guild_id;
            var10['guildId'] = var16;
            var10['recurrenceRule'] = var15;
            var14 = var14.id;
            var10['guildEventId'] = var14;
            var13 = function onRecurrencePress(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 == var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 37; continue _fun0006 }
 20:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var1 = var4.bind(var5)(var3, var2);
 37:
                    return var1;
                }
            };
            var10['onRecurrencePress'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 557:
            var8[5] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_scheduled_events/native/components/GuildEventCard.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['useGuildEventCardStyles'] = var2;
    return var1;
})();