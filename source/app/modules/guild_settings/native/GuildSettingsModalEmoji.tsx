// app/modules/guild_settings/native/GuildSettingsModalEmoji.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function computeSectionItem(arg1, arg2, arg3) {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.max;
        var3 = arg3;
        var2 = arg2;
        var3 = var3 - var2;
        var2 = 0;
        var6 = var4.bind(var5)(var3, var2);
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 10;
        var4 = var8[var2];
        var3 = undefined;
        var4 = var7.bind(var3)(var4);
        var5 = var4.intl;
        var4 = var5.formatToPlainString;
        var2 = var8[var2];
        var2 = var7.bind(var3)(var2);
        var2 = var2.t;
        var3 = var2.sgL8sI;
        var2 = {};
        var2['count'] = var6;
        var5 = var4.bind(var5)(var3, var2);
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var3 = '';
        var2 = arg1;
        var1 = ' - ';
        var2 = var4.bind(var3)(var2, var1, var5);
        var1 = var2.toUpperCase;
        var2 = var1.bind(var2)();
        var1 = {};
        var3 = 'SECTION';
        var1['type'] = var3;
        var1['key'] = var2;
        var1['section'] = var2;
        return var1;
    };
    var _closure1_slot15 = var5;
    var4 = function computeEmojiItem(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = 'EMOJI';
        var1['type'] = var3;
        var3 = var2.id;
        var1['key'] = var3;
        var1['emoji'] = var2;
        return var1;
    };
    var _closure1_slot16 = var4;
    var2 = function ManageEmojisModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.computeEmojiItems;
            var8 = var1.contentContainerStyle;
            var9 = var1.disabled;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var _closure2_slot0 = var9;
            var16 = var1.guild;
            var _closure2_slot1 = var16;
            var15 = var1.headerDescription;
            var _closure2_slot2 = var15;
            var14 = var1.onSelectRolesForEmoji;
            var _closure2_slot3 = var14;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var12 = var4.bind(var5)(var1);
            var11 = var12.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot8;
                var5 = var6.getEmojis;
                var2 = _closure2_slot1;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['emojis'] = var4;
                var4 = _closure1_slot8;
                var3 = var4.getEmojiRevision;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['revision'] = var2;
                return var1;
            };
            var1 = var11.bind(var12)(var2, var1);
            var2 = var1.emojis;
            _closure2_slot4 = var2;
            var11 = var1.revision;
            _closure2_slot5 = var11;
            var1 = 14;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useManageResourcePermissions;
            var1 = var1.bind(var4)(var16);
            var4 = var1.canManageGuildExpression;
            _closure2_slot6 = var4;
            var1 = null;
            var6 = var2;
            if(!(var1 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = new Array(0);
case 4:
            var10 = var10.bind(var5)(var6, var16);
            _closure2_slot7 = var10;
            var6 = _closure1_slot13;
            var6 = var6.bind(var5)();
            _closure2_slot8 = var6;
            var13 = _closure1_slot4;
            var12 = var13.useRef;
            var12 = var12.bind(var13)(var11);
            _closure2_slot9 = var12;
            var18 = _closure1_slot4;
            var17 = var18.useEffect;
            var12 = var16.id;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var3 = _closure1_slot12;
                var1 = _closure2_slot1;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var17.bind(var18)(var12, var13);
            var17 = _closure1_slot4;
            var13 = var17.useEffect;
            var18 = var16.id;
            var12 = new Array(2);
            var12[0] = var18;
            var12[1] = var11;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = _closure2_slot5;
                    if(!(var3 < var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot12;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 6:
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot5;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var13.bind(var17)(var11, var12);
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var17 = var16.id;
            var11 = new Array(6);
            var11[0] = var17;
            var11[1] = var9;
            var11[2] = var10;
            var11[3] = var6;
            var11[4] = var14;
            var11[5] = var4;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.item;
                    var2 = var1.index;
                    var3 = var5.type;
                    var8 = 'SECTION';
                    if(!(var8 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = 'EMOJI';
                    if(!(var1 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = null;
                    return var1;
case 10:
                    var4 = _closure2_slot7;
                    var3 = 1;
                    var1 = var2 - var3;
                    var6 = var4[var1];
                    var1 = null;
                    var10 = var1 == var6;
                    var4 = undefined;
                    var7 = undefined;
                    if(var10) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = var6.type;
case 12:
                    var10 = _closure2_slot7;
                    var6 = var2 + var3;
                    var6 = var10[var6];
                    var10 = var1 == var6;
                    var1 = undefined;
                    if(var10) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = var6.type;
case 14:
                    var6 = var8 === var1;
                    if(var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var1 = _closure2_slot7;
                    var1 = var1.length;
                    var1 = var1 - var3;
                    var6 = var2 === var1;
case 16:
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 16;
                    var1 = var10[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.EmojiRow;
                    var1 = {};
                    var10 = var5.emoji;
                    var1['emoji'] = var10;
                    var10 = _closure2_slot1;
                    var10 = var10.id;
                    var1['guildId'] = var10;
                    var10 = _closure2_slot0;
                    if(var10) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var11 = var5.emoji;
                    var11 = var11.available;
                    var10 = !var11;
case 18:
                    if(var10) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var12 = _closure2_slot6;
                    var11 = var5.emoji;
                    var11 = var12.bind(var4)(var11);
                    var10 = !var11;
case 20:
                    var1['disabled'] = var10;
                    var9 = _closure2_slot3;
                    var1['onSelectRolesForEmoji'] = var9;
                    var7 = var8 === var7;
                    var1['start'] = var7;
                    var1['end'] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 8:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {'style': null, 'variant': 'text-xs/bold', 'color': 'text-default'};
                    var6 = _closure2_slot8;
                    var6 = var6.section;
                    var1['style'] = var6;
                    var5 = var5.section;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var4 = var12.bind(var13)(var4, var11);
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var11 = new Array(5);
            var11[0] = var16;
            var17 = var1 == var2;
            var16 = undefined;
            if(var17) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = var2.length;
case 22:
            var11[1] = var16;
            var11[2] = var15;
            var11[3] = var14;
            var11[4] = var9;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.ConnectedHeaderRow;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1['guild'] = var6;
                    var7 = _closure2_slot4;
                    var6 = null;
                    var8 = var6 == var7;
                    var7 = undefined;
                    if(var8) { _fun0004_ip = 13; continue _fun0004 }
case 24:
                    var8 = _closure2_slot4;
                    var7 = var8.length;
case 13:
                    var8 = var6 != var7;
                    var6 = 0;
                    if(!var8) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var6 = var7;
case 25:
                    var1['emojisLength'] = var6;
                    var6 = _closure2_slot2;
                    var1['description'] = var6;
                    var6 = _closure2_slot3;
                    var1['onSelectRolesForEmoji'] = var6;
                    var5 = _closure2_slot0;
                    var1['uploadDisabled'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var9, var11);
            var14 = _closure1_slot4;
            var13 = var14.useCallback;
            var11 = new Array(1);
            var11[0] = var6;
            var9 = function() {
                var4 = _closure1_slot9;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.EmptyState;
                var1 = {};
                var5 = 19;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.EmptyServerSettingsEmoji;
                var1['Illustration'] = var5;
                var5 = _closure2_slot8;
                var5 = var5.emptyState;
                var1['style'] = var5;
                var5 = 10;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.lxsmBd;
                var6 = var7.bind(var10)(var6);
                var1['title'] = var6;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.RBbtMy;
                var5 = var6.bind(var7)(var5);
                var1['body'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var11 = var13.bind(var14)(var9, var11);
            var14 = _closure1_slot4;
            var13 = var14.useCallback;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.key;
                return var1;
            };
            var3 = new Array(0);
            var9 = var13.bind(var14)(var9, var3);
            if(!(var1 != var2)) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var13 = 12;
            var1['initialNumToRender'] = var13;
            var1['ListHeaderComponent'] = var12;
            var1['ListEmptyComponent'] = var11;
            var11 = 4;
            var1['windowSize'] = var11;
            var1['data'] = var10;
            var1['keyExtractor'] = var9;
            var1['renderItem'] = var4;
            var4 = new Array(2);
            var4[0] = var8;
            var8 = var6.list;
            var4[1] = var8;
            var1['contentContainerStyle'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 29; continue _fun0001;
case 27:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.loadingContainer;
            var2['style'] = var6;
            var11 = _closure1_slot9;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 20;
            var6 = var10[var6];
            var6 = var8.bind(var5)(var6);
            var9 = var6.ActivityIndicator;
            var6 = {};
            var9 = var11.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot9;
            var7 = 21;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 29:
            return var1;
        }
    };
    var _closure1_slot17 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var11 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.View;
    var _closure1_slot5 = var11;
    var7 = var7.FlatList;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.jsx;
    var _closure1_slot9 = var11;
    var11 = var7.jsxs;
    var _closure1_slot10 = var11;
    var7 = var7.Fragment;
    var _closure1_slot11 = var7;
    var7 = 6;
    var11 = var9[var7];
    var14 = var10.bind(var1)(var11);
    var13 = var14.throttle;
    var11 = 7;
    var11 = var9[var11];
    var11 = var8.bind(var1)(var11);
    var12 = var11.fetchEmoji;
    var11 = 1000;
    var11 = var13.bind(var14)(var12, var11);
    var _closure1_slot12 = var11;
    var11 = 8;
    var11 = var9[var11];
    var13 = var8.bind(var1)(var11);
    var12 = var13.createStyles;
    var11 = {};
    var14 = {'flex': 1, 'paddingTop': 40};
    var11['loadingContainer'] = var14;
    var14 = {};
    var15 = 30;
    var14['paddingTop'] = var15;
    var11['emptyState'] = var14;
    var14 = {};
    var15 = 9;
    var16 = var9[var15];
    var16 = var10.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_12;
    var14['paddingHorizontal'] = var16;
    var11['list'] = var14;
    var14 = {};
    var15 = var9[var15];
    var15 = var10.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_16;
    var14['paddingVertical'] = var15;
    var11['section'] = var14;
    var14 = {'paddingLeft': 16, 'paddingRight': 16};
    var11['titleContainer'] = var14;
    var11 = var12.bind(var13)(var11);
    var _closure1_slot13 = var11;
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var10 = var11.memoize;
    var7 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.isRoleSubscriptionEmoji;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                var1 = !var1;
                return var1;
            };
            var5 = var3.bind(var4)(var1);
            var4 = var5.map;
            var3 = _closure1_slot16;
            var4 = var4.bind(var5)(var3);
            var3 = var4.reverse;
            var5 = var3.bind(var4)();
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 12;
            var3 = var13[var3];
            var10 = undefined;
            var4 = var12.bind(var10)(var3);
            var3 = var4.getMaxEmojiSlots;
            var9 = var3.bind(var4)(var6);
            var4 = _closure1_slot1;
            var3 = 6;
            var3 = var13[var3];
            var4 = var4.bind(var10)(var3);
            var3 = var4.partition;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.emoji;
                var1 = var1.animated;
                var1 = !var1;
                return var1;
            };
            var4 = var3.bind(var4)(var5, var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var2 = var3.bind(var10)(var4, var2);
            var4 = 0;
            var3 = var2[var4];
            var6 = 1;
            var5 = var2[var6];
            var7 = _closure1_slot15;
            var1 = 10;
            var2 = var13[var1];
            var2 = var12.bind(var10)(var2);
            var11 = var2.intl;
            var8 = var11.string;
            var2 = var13[var1];
            var2 = var12.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.sMOuuS;
            var8 = var8.bind(var11)(var2);
            var2 = var3.length;
            var8 = var7.bind(var10)(var8, var2, var9);
            var2 = var13[var1];
            var2 = var12.bind(var10)(var2);
            var11 = var2.intl;
            var2 = var11.string;
            var1 = var13[var1];
            var1 = var12.bind(var10)(var1);
            var1 = var1.t;
            var1 = var1.wWjQye;
            var2 = var2.bind(var11)(var1);
            var1 = var5.length;
            var7 = var7.bind(var10)(var2, var1, var9);
            var1 = var3.length;
            if(!(!(var1 > var4))) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var2 = new Array(0);
            _fun0005_ip = 32; continue _fun0005;
case 30:
            var1 = new Array(1);
            var1[0] = var8;
            var16 = var1;
            var15 = var3;
            var14 = var6;
            var3 = arraySpread(var16, var15, var14);
            var2 = var1;
case 32:
            var1 = new Array(0);
            var16 = var1;
            var15 = var2;
            var14 = 0;
            var3 = arraySpread(var16, var15, var14);
            var2 = var5.length;
            if(!(!(var2 > var4))) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var2 = new Array(0);
            _fun0005_ip = 35; continue _fun0005;
case 33:
            var4 = new Array(1);
            var4[0] = var7;
            var16 = var4;
            var15 = var5;
            var14 = var6;
            var5 = arraySpread(var16, var15, var14);
            var2 = var4;
case 35:
            var16 = var1;
            var15 = var2;
            var14 = var3;
            var2 = arraySpread(var16, var15, var14);
            return var1;
        }
    };
    var7 = var10.bind(var11)(var7);
    var _closure1_slot14 = var7;
    var7 = 24;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_settings/native/GuildSettingsModalEmoji.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function GuildSettingsModalEmoji(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var12 = var2.contentContainerStyle;
            var8 = var2.isLandingScreen;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var5 = undefined;
            var10 = var3.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var9.bind(var10)(var6, var2);
            var _closure2_slot2 = var14;
            var2 = 22;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigation;
            var9 = var2.bind(var3)();
            var _closure2_slot3 = var9;
            var2 = _closure1_slot13;
            var6 = var2.bind(var5)();
            var _closure2_slot4 = var6;
            var4 = _closure1_slot4;
            var3 = var4.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var14;
            var2[2] = var8;
            var2[3] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0007_ip = 7; continue _fun0007 }
case 36:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = var3 !== var4;
case 7:
                    if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerTitle() {
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot5;
                        var2 = {};
                        var5 = _closure2_slot4;
                        var5 = var5.titleContainer;
                        var2['style'] = var5;
                        var7 = _closure1_slot9;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 23;
                        var5 = var5[var1];
                        var1 = undefined;
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.NavigatorHeader;
                        var5 = {};
                        var8 = _closure2_slot2;
                        var8 = var8.name;
                        var5['title'] = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var2['children'] = var5;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var14)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 12;
            var2 = var10[var2];
            var3 = var8.bind(var5)(var2);
            var2 = var3.getMaxEmojiSlots;
            var9 = var2.bind(var3)(var14);
            var2 = 10;
            var3 = var10[var2];
            var3 = var8.bind(var5)(var3);
            var6 = var3.intl;
            var4 = var6.formatToPlainString;
            var2 = var10[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.TA1BR0;
            var2 = {};
            var2['count'] = var9;
            var13 = var4.bind(var6)(var3, var2);
            var4 = _closure1_slot10;
            var3 = _closure1_slot11;
            var2 = {};
            var11 = _closure1_slot9;
            var9 = _closure1_slot17;
            var6 = {};
            var6['guild'] = var14;
            var6['headerDescription'] = var13;
            var13 = _closure1_slot14;
            var6['computeEmojiItems'] = var13;
            var6['contentContainerStyle'] = var12;
            var9 = var11.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot9;
            var7 = 21;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 39:
            return var1;
        }
    };
    var3['default'] = var6;
    var3['computeSectionItem'] = var5;
    var3['computeEmojiItem'] = var4;
    var3['ManageEmojisModal'] = var2;
    return var1;
})();