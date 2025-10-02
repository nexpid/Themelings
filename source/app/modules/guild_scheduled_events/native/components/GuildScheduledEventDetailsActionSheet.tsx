// app/modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var7 = var4.EventDetailSections;
    var _closure1_slot8 = var7;
    var4 = var4.MAX_RSVP_USER_DISPLAY_COUNT;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['paddingHorizontal'] = var10;
    var4['segmentedControl'] = var9;
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['header'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildScheduledEventDetailsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.eventId;
            var _closure2_slot0 = var13;
            var7 = var1.event;
            var _closure2_slot1 = var7;
            var8 = var1.recurrenceId;
            var17 = var1.onCloseActionSheet;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot12;
            var26 = var1.bind(var5)();
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var1 = var4[var2];
            var3 = var6.bind(var5)(var1);
            var1 = 11;
            var1 = var4[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.GUILD_EVENT_MODAL;
            var1 = var3.bind(var5)(var1);
            var6 = var1.analyticsLocations;
            var3 = _closure1_slot4;
            var1 = var3.useState;
            var3 = var1.bind(var3)(var8);
            var1 = _closure1_slot3;
            var16 = 2;
            var1 = var1.bind(var5)(var3, var16);
            var24 = 0;
            var15 = var1[var24];
            var23 = 1;
            var14 = var1[var23];
            var3 = _closure1_slot0;
            var1 = 12;
            var8 = var4[var1];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(2);
            var8[0] = var13;
            var8[1] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuildScheduledEvent;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot1;
case 2:
                    return var1;
                }
            };
            var19 = var10.bind(var11)(var9, var7, var8);
            var _closure2_slot2 = var19;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot2;
                    var2 = null;
                    var6 = var2 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var5 = _closure2_slot2;
                    var1 = var5.guild_id;
case 4:
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var19;
            var10 = undefined;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var19.id;
case 6:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var8 = var1 == var19;
            var3 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var19.guild_id;
case 8:
            var3 = var4.bind(var5)(var3, var10, var15);
            _closure2_slot3 = var3;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 14;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var13 = var4.bind(var5)(var10, var15);
            _closure2_slot4 = var13;
            var10 = _closure1_slot4;
            var11 = var10.useMemo;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var7 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var3 = _closure1_slot9;
                    var3 = var1 >= var3;
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 5:
                    var4 = _closure1_slot9;
                    var3 = var7 > var4;
case 10:
                    var4 = 0;
                    var5 = 0;
                    if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = global;
                    var6 = var3.Math;
                    var3 = var6.max;
                    var1 = var7 - var1;
                    var5 = var3.bind(var6)(var1, var4);
case 11:
                    if(!(var5 > var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    if(!(!(var1 > var4))) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                    var1 = _closure2_slot4;
                    _fun0004_ip = 16; continue _fun0004;
case 15:
                    var9 = _closure2_slot4;
                    var2 = new Array(1);
                    var10 = var2;
                    var8 = 0;
                    var4 = arraySpread(var10, var9, var8);
                    var3 = {};
                    var3['count'] = var5;
                    var2[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1 = var2;
case 16:
                    return var1;
                }
            };
            var21 = var11.bind(var10)(var3, var4);
            var3 = 15;
            var3 = var9[var3];
            var4 = var8.bind(var5)(var3);
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getGuildEventUsers;
                    var2 = _closure2_slot2;
                    var3 = null;
                    var7 = var3 == var2;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var7 = _closure2_slot2;
                    var2 = var7.id;
case 17:
                    var7 = _closure2_slot2;
                    var7 = var3 == var7;
                    var1 = undefined;
                    if(var7) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var6 = _closure2_slot2;
                    var1 = var6.guild_id;
case 19:
                    var1 = var4.bind(var5)(var2, var3, var1);
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var11 = _closure1_slot3;
            var3 = var11.bind(var5)(var3, var16);
            var4 = var3[var24];
            _closure2_slot5 = var4;
            var3 = var3[var23];
            var20 = var3.loading;
            var13 = var3.error;
            var3 = var10.useState;
            var3 = var3.bind(var10)(var24);
            var3 = var11.bind(var5)(var3, var16);
            var4 = var3[var24];
            var3 = var3[var23];
            _closure2_slot6 = var3;
            var3 = var10.useState;
            var3 = var3.bind(var10)(var24);
            var3 = var11.bind(var5)(var3, var16);
            var11 = var3[var24];
            var3 = var3[var23];
            _closure2_slot7 = var3;
            var3 = 17;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var18 = var3.bottom;
            var9 = var10.useCallback;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot7;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var16 = var9.bind(var10)(var8, var3);
            var9 = var10.useCallback;
            var8 = function() {
                var1 = undefined;
                return var1;
            };
            var3 = new Array(0);
            var10 = var9.bind(var10)(var8, var3);
            var3 = _closure1_slot8;
            var8 = var3.EVENT_INFO;
            var3 = new Array(1);
            var3[0] = var8;
            _closure2_slot8 = var3;
            if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var3.push;
            var7 = _closure1_slot8;
            var7 = var7.RSVP_LIST;
            var7 = var8.bind(var3)(var7);
case 21:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 18;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useSegmentedControlState;
            var7 = {};
            var7['pageWidth'] = var24;
            var7['defaultIndex'] = var4;
            var24 = function onSetActiveIndex(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    var2 = var3 < var2;
                    if(!var2) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                    var4 = _closure2_slot8;
                    var5 = var4[var3];
                    var4 = _closure1_slot8;
                    var4 = var4.RSVP_LIST;
                    var2 = var5 === var4;
case 23:
                    if(!var2) { _fun0006_ip = 17; continue _fun0006 }
case 25:
                    var4 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
case 17:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var7['onSetActiveIndex'] = var24;
            var24 = var3.map;
            var22 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var7 = _closure2_slot3;
                    var2 = _closure1_slot8;
                    var2 = var2.EVENT_INFO;
                    if(!(var2 !== var3)) { _fun0007_ip = 26; continue _fun0007 }
case 5:
                    var2 = _closure1_slot8;
                    var2 = var2.RSVP_LIST;
                    if(!(var2 !== var3)) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var3 = var8[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.iW6Xur;
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 29; continue _fun0007;
case 27:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 9;
                    var5 = var9[var3];
                    var4 = undefined;
                    var5 = var8.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.ZrTT/P;
                    var3 = {};
                    var3['userCount'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
                    _fun0007_ip = 29; continue _fun0007;
case 26:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.iW6Xur;
                    var2 = var3.bind(var4)(var1);
case 29:
                    var1 = {};
                    var1['id'] = var2;
                    var1['label'] = var2;
                    var2 = null;
                    var1['page'] = var2;
                    return var1;
                }
            };
            var22 = var24.bind(var3)(var22);
            var7['items'] = var22;
            var28 = var8.bind(var9)(var7);
            if(!(var1 != var19)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var22 = var26.header;
            var7['style'] = var22;
            var7['onLayout'] = var10;
            var24 = _closure1_slot10;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var10 = 19;
            var10 = var25[var10];
            var10 = var22.bind(var5)(var10);
            var22 = var10.GuildEventCardImageHeader;
            var10 = {};
            var10['event'] = var19;
            var22 = var24.bind(var5)(var22, var10);
            var10 = new Array(2);
            var10[0] = var22;
            var22 = var3.length;
            var23 = var22 > var23;
            var22 = null;
            if(!var23) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var25 = _closure1_slot10;
            var24 = _closure1_slot5;
            var23 = {};
            var26 = var26.segmentedControl;
            var23['style'] = var26;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 20;
            var26 = var29[var26];
            var26 = var27.bind(var5)(var26);
            var27 = var26.SegmentedControl;
            var26 = {};
            var26['state'] = var28;
            var26 = var25.bind(var5)(var27, var26);
            var23['children'] = var26;
            var22 = var25.bind(var5)(var24, var23);
case 32:
            var10[1] = var22;
            var7['children'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = var3.length;
            if(!(!(var4 < var7))) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = _closure1_slot8;
            var9 = var7.EVENT_INFO;
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var9 = var3[var4];
case 36:
            var4 = _closure1_slot10;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var6 = 21;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.BottomSheet;
            var6 = {'scrollable': true, 'startExpanded': true};
            var6['onDismiss'] = var17;
            var6['header'] = var8;
            var8 = _closure1_slot8;
            var8 = var8.EVENT_INFO;
            if(!(var9 !== var8)) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var22 = _closure1_slot2;
            var8 = 24;
            var8 = var22[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['userListItems'] = var21;
            var21 = var19.guild_id;
            var8['guildId'] = var21;
            var8['loading'] = var20;
            var8['error'] = var13;
            var11 = var11 - var18;
            var8['contentHeight'] = var11;
            var8['safeBottomPadding'] = var18;
            var8 = var10.bind(var5)(var9, var8);
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 22;
            var9 = var20[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.BottomSheetScrollView;
            var9 = {};
            var13 = _closure1_slot1;
            var12 = 23;
            var12 = var20[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['guildEvent'] = var19;
            var12['safeBottomPadding'] = var18;
            var12['onCloseActionSheet'] = var17;
            var12['onLayout'] = var16;
            var12['recurrenceId'] = var15;
            var12['onRecurrencePress'] = var14;
            var12 = var11.bind(var5)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
case 39:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();