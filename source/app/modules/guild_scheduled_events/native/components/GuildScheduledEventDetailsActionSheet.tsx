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
 0:
            var1 = arg1;
            var13 = var1.eventId;
            var _closure2_slot0 = var13;
            var7 = var1.event;
            var _closure2_slot1 = var7;
            var8 = var1.recurrenceId;
            var18 = var1.onCloseActionSheet;
            var16 = var1.isHubContext;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var1 = _closure1_slot12;
            var27 = var1.bind(var5)();
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
            var17 = 2;
            var1 = var1.bind(var5)(var3, var17);
            var25 = 0;
            var15 = var1[var25];
            var24 = 1;
            var14 = var1[var24];
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
 0:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuildScheduledEvent;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 35; continue _fun0002 }
 31:
                    var1 = _closure2_slot1;
 35:
                    return var1;
                }
            };
            var20 = var10.bind(var11)(var9, var7, var8);
            var _closure2_slot2 = var20;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot6;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot2;
                    var2 = null;
                    var6 = var2 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 39; continue _fun0003 }
 30:
                    var5 = _closure2_slot2;
                    var1 = var5.guild_id;
 39:
                    var1 = var3.bind(var4)(var1);
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var20;
            var10 = undefined;
            if(var3) { _fun0001_ip = 283; continue _fun0001 }
 278:
            var10 = var20.id;
 283:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var8 = var1 == var20;
            var3 = undefined;
            if(var8) { _fun0001_ip = 317; continue _fun0001 }
 312:
            var3 = var20.guild_id;
 317:
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
 0:
                    var7 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    var3 = _closure1_slot9;
                    var3 = var1 >= var3;
                    if(!var3) { _fun0004_ip = 38; continue _fun0004 }
 30:
                    var4 = _closure1_slot9;
                    var3 = var7 > var4;
 38:
                    var4 = 0;
                    var5 = 0;
                    if(!var3) { _fun0004_ip = 68; continue _fun0004 }
 45:
                    var3 = global;
                    var6 = var3.Math;
                    var3 = var6.max;
                    var1 = var7 - var1;
                    var5 = var3.bind(var6)(var1, var4);
 68:
                    if(!(var5 > var4)) { _fun0004_ip = 85; continue _fun0004 }
 72:
                    var1 = _closure2_slot4;
                    var1 = var1.length;
                    if(!(!(var1 > var4))) { _fun0004_ip = 91; continue _fun0004 }
 85:
                    var1 = _closure2_slot4;
                    _fun0004_ip = 129; continue _fun0004;
 91:
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
 129:
                    return var1;
                }
            };
            var22 = var11.bind(var10)(var3, var4);
            var3 = 15;
            var3 = var9[var3];
            var4 = var8.bind(var5)(var3);
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(var7) { _fun0005_ip = 60; continue _fun0005 }
 51:
                    var7 = _closure2_slot2;
                    var2 = var7.id;
 60:
                    var7 = _closure2_slot2;
                    var7 = var3 == var7;
                    var1 = undefined;
                    if(var7) { _fun0005_ip = 82; continue _fun0005 }
 73:
                    var6 = _closure2_slot2;
                    var1 = var6.guild_id;
 82:
                    var1 = var4.bind(var5)(var2, var3, var1);
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var11 = _closure1_slot3;
            var3 = var11.bind(var5)(var3, var17);
            var4 = var3[var25];
            _closure2_slot5 = var4;
            var3 = var3[var24];
            var21 = var3.loading;
            var13 = var3.error;
            var3 = var10.useState;
            var3 = var3.bind(var10)(var25);
            var3 = var11.bind(var5)(var3, var17);
            var4 = var3[var25];
            var3 = var3[var24];
            _closure2_slot6 = var3;
            var3 = var10.useState;
            var3 = var3.bind(var10)(var25);
            var3 = var11.bind(var5)(var3, var17);
            var11 = var3[var25];
            var3 = var3[var24];
            _closure2_slot7 = var3;
            var3 = 17;
            var3 = var9[var3];
            var3 = var8.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var19 = var3.bottom;
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
            var17 = var9.bind(var10)(var8, var3);
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
            if(!var7) { _fun0001_ip = 607; continue _fun0001 }
 587:
            var8 = var3.push;
            var7 = _closure1_slot8;
            var7 = var7.RSVP_LIST;
            var7 = var8.bind(var3)(var7);
 607:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 18;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useSegmentedControlState;
            var7 = {};
            var7['pageWidth'] = var25;
            var7['defaultIndex'] = var4;
            var25 = function onSetActiveIndex(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    var2 = var3 < var2;
                    if(!var2) { _fun0006_ip = 47; continue _fun0006 }
 22:
                    var4 = _closure2_slot8;
                    var5 = var4[var3];
                    var4 = _closure1_slot8;
                    var4 = var4.RSVP_LIST;
                    var2 = var5 === var4;
 47:
                    if(!var2) { _fun0006_ip = 60; continue _fun0006 }
 50:
                    var4 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var4.bind(var2)();
 60:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var7['onSetActiveIndex'] = var25;
            var25 = var3.map;
            var23 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var7 = _closure2_slot3;
                    var2 = _closure1_slot8;
                    var2 = var2.EVENT_INFO;
                    if(!(var2 !== var3)) { _fun0007_ip = 175; continue _fun0007 }
 30:
                    var2 = _closure1_slot8;
                    var2 = var2.RSVP_LIST;
                    if(!(var2 !== var3)) { _fun0007_ip = 106; continue _fun0007 }
 44:
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
                    _fun0007_ip = 232; continue _fun0007;
 106:
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
                    _fun0007_ip = 232; continue _fun0007;
 175:
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
 232:
                    var1 = {};
                    var1['id'] = var2;
                    var1['label'] = var2;
                    var2 = null;
                    var1['page'] = var2;
                    return var1;
                }
            };
            var23 = var25.bind(var3)(var23);
            var7['items'] = var23;
            var29 = var8.bind(var9)(var7);
            if(!(var1 != var20)) { _fun0001_ip = 1165; continue _fun0001 }
 687:
            var9 = _closure1_slot11;
            var8 = _closure1_slot5;
            var7 = {};
            var23 = var27.header;
            var7['style'] = var23;
            var7['onLayout'] = var10;
            var25 = _closure1_slot10;
            var23 = _closure1_slot0;
            var26 = _closure1_slot2;
            var10 = 19;
            var10 = var26[var10];
            var10 = var23.bind(var5)(var10);
            var23 = var10.GuildEventCardImageHeader;
            var10 = {};
            var10['event'] = var20;
            var23 = var25.bind(var5)(var23, var10);
            var10 = new Array(2);
            var10[0] = var23;
            var23 = var3.length;
            var24 = var23 > var24;
            var23 = null;
            if(!var24) { _fun0001_ip = 844; continue _fun0001 }
 776:
            var26 = _closure1_slot10;
            var25 = _closure1_slot5;
            var24 = {};
            var27 = var27.segmentedControl;
            var24['style'] = var27;
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 20;
            var27 = var30[var27];
            var27 = var28.bind(var5)(var27);
            var28 = var27.SegmentedControl;
            var27 = {};
            var27['state'] = var29;
            var27 = var26.bind(var5)(var28, var27);
            var24['children'] = var27;
            var23 = var26.bind(var5)(var25, var24);
 844:
            var10[1] = var23;
            var7['children'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = var3.length;
            if(!(!(var4 < var7))) { _fun0001_ip = 879; continue _fun0001 }
 867:
            var7 = _closure1_slot8;
            var9 = var7.EVENT_INFO;
            _fun0001_ip = 883; continue _fun0001;
 879:
            var9 = var3[var4];
 883:
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
            var6['onDismiss'] = var18;
            var6['header'] = var8;
            var8 = _closure1_slot8;
            var8 = var8.EVENT_INFO;
            if(!(var9 !== var8)) { _fun0001_ip = 1042; continue _fun0001 }
 971:
            var10 = _closure1_slot10;
            var9 = _closure1_slot1;
            var23 = _closure1_slot2;
            var8 = 24;
            var8 = var23[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8['userListItems'] = var22;
            var22 = var20.guild_id;
            var8['guildId'] = var22;
            var8['loading'] = var21;
            var8['error'] = var13;
            var11 = var11 - var19;
            var8['contentHeight'] = var11;
            var8['safeBottomPadding'] = var19;
            var8 = var10.bind(var5)(var9, var8);
            _fun0001_ip = 1143; continue _fun0001;
 1042:
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var21 = _closure1_slot2;
            var9 = 22;
            var9 = var21[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.BottomSheetScrollView;
            var9 = {};
            var13 = _closure1_slot1;
            var12 = 23;
            var12 = var21[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['guildEvent'] = var20;
            var12['safeBottomPadding'] = var19;
            var12['onCloseActionSheet'] = var18;
            var12['onLayout'] = var17;
            var12['isHubContext'] = var16;
            var12['recurrenceId'] = var15;
            var12['onRecurrencePress'] = var14;
            var12 = var11.bind(var5)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 1143:
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1165:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();