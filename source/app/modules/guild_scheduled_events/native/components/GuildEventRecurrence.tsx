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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignSelf': 'stretch', 'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['container'] = var9;
    var9 = {'marginStart': 8, 'flexShrink': 0, 'flexGrow': 1};
    var4['eventHeader'] = var9;
    var9 = {};
    var10 = 7;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
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
    var10 = var10.TEXT_PRIMARY;
    var9['tintColor'] = var10;
    var4['secondarySmallIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventRecurrence.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildEventRecurrence(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.recurrenceId;
            var _closure2_slot0 = var9;
            var2 = var1.guildEventId;
            var _closure2_slot1 = var2;
            var2 = var1.onPress;
            var _closure2_slot2 = var2;
            var8 = var1.isActive;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = _closure1_slot9;
            var16 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 8;
            var1 = var3[var4];
            var7 = var2.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var6.bind(var7)(var2, var1);
            var _closure2_slot3 = var10;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var1 = null;
            var6 = var1 == var10;
            var2 = undefined;
            if(var6) { _fun0001_ip = 149; continue _fun0001 }
 144:
            var2 = var10.id;
 149:
            var2 = var3.bind(var5)(var9, var2);
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = var11[var4];
            var13 = var6.bind(var5)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 39; continue _fun0002 }
 30:
                    var4 = _closure2_slot3;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var7, var3);
            _closure2_slot4 = var3;
            var4 = var11[var4];
            var13 = var6.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot3;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
 30:
                    var4 = _closure2_slot3;
                    var1 = var4.channel_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var7 = var12.bind(var13)(var7, var4);
            var4 = 10;
            var4 = var11[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.useManageResourcePermissions;
            if(!(var1 != var7)) { _fun0001_ip = 266; continue _fun0001 }
 263:
            var3 = var7;
 266:
            var3 = var4.bind(var6)(var3);
            var3 = var3.canManageGuildEvent;
            var3 = var3.bind(var5)(var10);
            _closure2_slot5 = var3;
            if(!(var1 != var10)) { _fun0001_ip = 834; continue _fun0001 }
 293:
            if(!(var1 == var2)) { _fun0001_ip = 299; continue _fun0001 }
 297:
            var2 = {};
 299:
            var2 = var2.is_canceled;
            var12 = var5 !== var2;
            if(!var12) { _fun0001_ip = 315; continue _fun0001 }
 312:
            var12 = var2;
 315:
            _closure2_slot6 = var12;
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 11;
            var2 = var2[var11];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var6 = function onPress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot6;
                    if(var2) { _fun0004_ip = 33; continue _fun0004 }
 23:
                    var4 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var4;
 33:
                    if(var2) { _fun0004_ip = 51; continue _fun0004 }
 36:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = '';
            var2['aria-label'] = var6;
            var7 = var16.container;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = undefined;
            if(!var8) { _fun0001_ip = 393; continue _fun0001 }
 387:
            var7 = var16.active;
 393:
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 12;
            var6 = var13[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.GuildEventCardHeader;
            var6 = {};
            var6['event'] = var10;
            var10 = var16.eventHeader;
            var6['style'] = var10;
            var10 = false;
            var6['showUserCount'] = var10;
            var6['showCreator'] = var10;
            var6['recurrenceId'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot3;
            var7 = {};
            var10 = var16.actions;
            var7['style'] = var10;
            if(!var12) { _fun0001_ip = 604; continue _fun0001 }
 502:
            var17 = _closure1_slot7;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 13;
            var10 = var22[var10];
            var10 = var21.bind(var5)(var10);
            var13 = var10.Text;
            var10 = {'variant': 'text-sm/semibold', 'color': 'text-danger'};
            var18 = 14;
            var19 = var22[var18];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.fyBVRk;
            var18 = var19.bind(var20)(var18);
            var10['children'] = var18;
            var12 = var17.bind(var5)(var13, var10);
 604:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot7;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = var19[var11];
            var11 = var21.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var17 = 'button';
            var11['accessibilityRole'] = var17;
            var17 = 14;
            var18 = var19[var17];
            var18 = var21.bind(var5)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var17 = var19[var17];
            var17 = var21.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.HIgA5e;
            var17 = var18.bind(var20)(var17);
            var11['accessibilityLabel'] = var17;
            var15 = function onPress(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 76; continue _fun0005 }
 26:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.showGuildEventModeratorActionSheet;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2, var1);
 76:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var15;
            var15 = var16.secondarySmallButton;
            var11['style'] = var15;
            var18 = _closure1_slot1;
            var17 = 16;
            var14 = var19[var17];
            var15 = var18.bind(var5)(var14);
            var14 = {};
            var20 = 17;
            var20 = var19[var20];
            var20 = var18.bind(var5)(var20);
            var14['source'] = var20;
            var17 = var19[var17];
            var17 = var18.bind(var5)(var17);
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
 834:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();