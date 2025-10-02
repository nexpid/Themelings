// app/modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var12 = 4;
    var4 = var6[var12];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'margin': 12, 'padding': 12, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1};
    var11 = 12;
    var13 = 5;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10['borderRadius'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACCENT;
    var10['borderColor'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var13;
    var4['header'] = var10;
    var10 = {};
    var10['paddingTop'] = var12;
    var4['descriptionContainerStyle'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var4['button'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var1 = _closure1_slot8;
            var16 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var6 = var4[var1];
            var8 = var3.bind(var5)(var6);
            var7 = var8.useActiveEvent;
            var6 = var11.id;
            var10 = var7.bind(var8)(var6);
            var _closure2_slot1 = var10;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useImminentUpcomingGuildEvents;
            var1 = var11.id;
            var8 = var6.bind(var7)(var1);
            var1 = 7;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var4.bind(var6)(var3, var1);
            var1 = var11.id;
            var7 = var3 === var1;
            var1 = null;
            var3 = var10;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1 == var8;
            var4 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = 0;
            var4 = var8[var6];
case 4:
            var3 = var4;
case 2:
            _closure2_slot2 = var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var9 = var6.bind(var5)(var4);
            var4 = var9.useManageResourcePermissions;
            var4 = var4.bind(var9)(var11);
            var4 = var4.canManageGuildEvent;
            var9 = var4.bind(var5)(var3);
            var4 = 9;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var4 = var6.getNextRecurrenceIdInEvent;
            var4 = var4.bind(var6)(var3);
            var6 = var1 != var4;
            var13 = var3;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var4;
case 6:
            _closure2_slot3 = var3;
            var6 = _closure1_slot3;
            var8 = var6.useCallback;
            var4 = new Array(4);
            var4[0] = var13;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 == var2;
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
case 8:
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.hideActionSheet;
                    var3 = var3.bind(var6)();
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.openStartGuildEventModal;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openVoiceChannelActionSheet;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var8.bind(var6)(var3, var4);
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var2 = var5[var2];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var2);
                    var2 = var6.hideActionSheet;
                    var2 = var2.bind(var6)();
                    var2 = _closure1_slot0;
                    var1 = 13;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.openGuildEventDetails;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.id;
                    var1['eventId'] = var5;
                    var4 = _closure2_slot2;
                    var1['event'] = var4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var4.bind(var6)(var2, var3);
            if(!(var1 != var13)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = _closure1_slot5;
            var8 = var2.bind(var5)(var13);
            var4 = _closure1_slot7;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 14;
            var2 = var17[var2];
            var2 = var11.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var10 = 'button';
            var2['accessibilityRole'] = var10;
            var2['onPress'] = var6;
            var6 = var16.header;
            var2['style'] = var6;
            var12 = _closure1_slot6;
            var10 = 15;
            var6 = var17[var10];
            var6 = var11.bind(var5)(var6);
            var18 = var6.GuildEventCardHeader;
            var6 = {};
            var6['event'] = var13;
            var19 = false;
            var6['showUserCount'] = var19;
            var18 = var12.bind(var5)(var18, var6);
            var6 = new Array(3);
            var6[0] = var18;
            var10 = var17[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.GuildEventCardMetaInfo;
            var10 = {};
            var10['event'] = var13;
            var13 = var16.descriptionContainerStyle;
            var10['descriptionContainerStyle'] = var13;
            var10['condensed'] = var7;
            var10 = var12.bind(var5)(var11, var10);
            var6[1] = var10;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var9;
case 16:
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = !var8;
case 18:
            if(!var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = _closure1_slot6;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var11 = 16;
            var8 = var13[var11];
            var9 = var12.bind(var5)(var8);
            var8 = {};
            var16 = var16.button;
            var8['style'] = var16;
            var18 = _closure1_slot0;
            var15 = 17;
            var16 = var13[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var13[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.cK1GGR;
            var15 = var16.bind(var17)(var15);
            var8['text'] = var15;
            var8['onPress'] = var14;
            var14 = var13[var11];
            var14 = var12.bind(var5)(var14);
            var14 = var14.Colors;
            var14 = var14.GREEN;
            var8['color'] = var14;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.Sizes;
            var11 = var11.SMALL;
            var8['size'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 20:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 14:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();