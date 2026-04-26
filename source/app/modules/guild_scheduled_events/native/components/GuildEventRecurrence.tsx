// app/modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignSelf': 'stretch', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'marginStart': 8, 'flexShrink': 0, 'flexGrow': 1};
    var4['eventHeader'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_SELECTED;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['active'] = var9;
    var9 = {'alignItems': 'center', 'flexDirection': 'row', 'flexShrink': 0};
    var4['actions'] = var9;
    var9 = {'flexShrink': 0, 'alignItems': 'center', 'flexDirection': 'row', 'padding': 8, 'marginLeft': 8};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var4['secondarySmallButton'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_STRONG;
    var9['tintColor'] = var10;
    var4['secondarySmallIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildEventRecurrence(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.recurrenceId;
            var _closure2_slot0 = var13;
            var6 = var1.guildEventId;
            var _closure2_slot1 = var6;
            var2 = var1.onPress;
            var _closure2_slot2 = var2;
            var17 = var1.isActive;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = _closure1_slot10;
            var16 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 8;
            var1 = var3[var4];
            var8 = var2.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var7.bind(var8)(var2, var1);
            var _closure2_slot3 = var15;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var1 = null;
            var7 = var1 == var15;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var15.id;
case 2:
            var2 = var3.bind(var5)(var13, var2);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = var9[var4];
            var11 = var7.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot3;
                    var1 = var4.guild_id;
case 4:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var8, var3);
            _closure2_slot4 = var3;
            var4 = var9[var4];
            var11 = var7.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure2_slot3;
                    var1 = var4.channel_id;
case 6:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var8 = var10.bind(var11)(var8, var4);
            var4 = 10;
            var4 = var9[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.useManageResourcePermissions;
            if(!(var1 != var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var8;
case 8:
            var3 = var4.bind(var7)(var3);
            var3 = var3.canManageGuildEvent;
            var3 = var3.bind(var5)(var15);
            _closure2_slot5 = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useEventScheduleById;
            var4 = var3.bind(var4)(var6, var13);
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var4.startTime;
            var4 = var6.toISOString;
            var3 = var4.bind(var6)();
case 10:
            _closure2_slot6 = var3;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getEventTimeData;
                    var2 = _closure2_slot6;
                    var1 = var3.bind(var4)(var2);
case 12:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var3, var4);
            if(!(var1 != var15)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!(var1 == var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = {};
case 16:
            var2 = var2.is_canceled;
            var12 = var5 !== var2;
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var2;
case 18:
            _closure2_slot7 = var12;
            var23 = '';
            var3 = var23;
            if(!var12) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var6 = var9[var2];
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var9[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.fyBVRm;
            var7 = var6.bind(var7)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var2 = ', ';
            var3 = var6.bind(var23)(var7, var2);
case 20:
            var2 = var15.name;
            var3 = var3 + var2;
            var6 = var1 != var4;
            var2 = var23;
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var4.startDateTimeString;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var4 = ', ';
            var2 = var6.bind(var4)(var7);
case 22:
            var22 = var3 + var2;
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var16.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = undefined;
            if(!var17) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var16.active;
case 24:
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot8;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var11 = 14;
            var6 = var18[var11];
            var6 = var10.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {'accessible': true, 'accessibilityRole': 'button'};
            var6['accessibilityLabel'] = var22;
            var9 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot7;
                    if(var2) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                    var4 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var4;
case 26:
                    if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var9;
            var9 = var16.eventHeader;
            var6['style'] = var9;
            var9 = 15;
            var9 = var18[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.GuildEventCardHeader;
            var9 = {};
            var9['isActive'] = var17;
            var9['event'] = var15;
            var15 = false;
            var9['showUserCount'] = var15;
            var9['showCreator'] = var15;
            var9['recurrenceId'] = var13;
            var9 = var8.bind(var5)(var10, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var16.actions;
            var7['style'] = var10;
            if(!var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var15 = _closure1_slot8;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 16;
            var10 = var24[var10];
            var10 = var21.bind(var5)(var10);
            var13 = var10.Text;
            var10 = {'variant': 'text-sm/semibold', 'color': 'text-feedback-critical'};
            var17 = 13;
            var18 = var24[var17];
            var18 = var21.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var24[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.fyBVRm;
            var17 = var18.bind(var19)(var17);
            var10['children'] = var17;
            var12 = var15.bind(var5)(var13, var10);
case 30:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot8;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = var19[var11];
            var11 = var18.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {'accessible': true, 'accessibilityRole': 'button'};
            var15 = 13;
            var17 = var19[var15];
            var17 = var18.bind(var5)(var17);
            var21 = var17.intl;
            var17 = var21.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.HIgA5a;
            var21 = var17.bind(var21)(var15);
            var15 = global;
            var15 = var15.HermesInternal;
            var17 = var15.concat;
            var15 = ', ';
            var15 = var17.bind(var23)(var21, var15, var22);
            var11['accessibilityLabel'] = var15;
            var14 = function onPress(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.showGuildEventModeratorActionSheet;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var14;
            var14 = var16.secondarySmallButton;
            var11['style'] = var14;
            var17 = 18;
            var14 = var19[var17];
            var14 = var18.bind(var5)(var14);
            var15 = var14.Icon;
            var14 = {};
            var21 = _closure1_slot1;
            var20 = 19;
            var20 = var19[var20];
            var20 = var21.bind(var5)(var20);
            var14['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
            var17 = var17.Icon;
            var17 = var17.Sizes;
            var17 = var17.REFRESH_SMALL_16;
            var14['size'] = var17;
            var16 = var16.secondarySmallIcon;
            var14['style'] = var16;
            var14 = var13.bind(var5)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();