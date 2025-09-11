// app/modules/guild_settings/native/GuildSettingsModalEmoji.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var2 = function ManageEmojisModal(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.guild;
            var _closure2_slot0 = var11;
            var10 = var1.headerDescription;
            var9 = var1.computeEmojiItems;
            var8 = var1.onSelectRolesForEmoji;
            var7 = var1.contentContainerStyle;
            var6 = var1.disabled;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 51; continue _fun0002 }
 49:
            var6 = false;
 51:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 34;
            var3 = var12[var3];
            var13 = var5.bind(var4)(var3);
            var5 = var13.useStateFromStoresObject;
            var14 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var14;
            var2 = function() {
                var1 = {};
                var6 = _closure1_slot15;
                var5 = var6.getEmojis;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['emojis'] = var4;
                var4 = _closure1_slot15;
                var3 = var4.getEmojiRevision;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['revision'] = var2;
                return var1;
            };
            var15 = var5.bind(var13)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 35;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var12 = var2.bottom;
            var3 = _closure1_slot16;
            var2 = _closure1_slot25;
            var1 = {};
            var16 = var1;
            var5 = copyDataProperties(var16, var15);
            var5 = 'bottomSafeArea';
            var1[var5] = var12;
            var5 = 'guild';
            var1[var5] = var11;
            var5 = 'headerDescription';
            var1[var5] = var10;
            var5 = 'computeEmojiItems';
            var1[var5] = var9;
            var5 = 'onSelectRolesForEmoji';
            var1[var5] = var8;
            var5 = 'contentContainerStyle';
            var1[var5] = var7;
            var5 = 'disabled';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var2;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var5 = var9[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var5);
    var _closure1_slot10 = var7;
    var4 = 8;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.View;
    var _closure1_slot11 = var5;
    var5 = var4.ActivityIndicator;
    var _closure1_slot12 = var5;
    var4 = var4.FlatList;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var9[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot16 = var5;
    var5 = var4.jsxs;
    var _closure1_slot17 = var5;
    var4 = var4.Fragment;
    var _closure1_slot18 = var4;
    var10 = 12;
    var4 = var9[var10];
    var13 = var11.bind(var1)(var4);
    var12 = var13.throttle;
    var4 = 13;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.fetchEmoji;
    var4 = 1000;
    var4 = var12.bind(var13)(var5, var4);
    var _closure1_slot19 = var4;
    var4 = 14;
    var5 = var9[var4];
    var13 = var8.bind(var1)(var5);
    var12 = var13.createLegacyClassComponentStyles;
    var5 = {};
    var14 = {'flex': 1, 'paddingTop': 40};
    var5['loadingContainer'] = var14;
    var14 = {};
    var15 = 30;
    var14['paddingTop'] = var15;
    var5['emptyState'] = var14;
    var14 = {'flexDirection': 'row', 'justifyContent': 'flex-end'};
    var5['quickActionsContainer'] = var14;
    var5 = var12.bind(var13)(var5);
    var _closure1_slot20 = var5;
    var4 = var9[var4];
    var12 = var8.bind(var1)(var4);
    var5 = var12.createStyles;
    var4 = {};
    var13 = {'paddingLeft': 16, 'paddingRight': 16};
    var4['titleContainer'] = var13;
    var4 = var5.bind(var12)(var4);
    var _closure1_slot21 = var4;
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
        var2 = 15;
        var4 = var8[var2];
        var3 = undefined;
        var4 = var7.bind(var3)(var4);
        var5 = var4.intl;
        var4 = var5.formatToPlainString;
        var2 = var8[var2];
        var2 = var7.bind(var3)(var2);
        var2 = var2.t;
        var3 = var2.sgL8sL;
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
    var _closure1_slot22 = var5;
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
    var _closure1_slot23 = var4;
    var10 = var9[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.memoize;
    var10 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = var4.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
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
            var3 = _closure1_slot23;
            var4 = var4.bind(var5)(var3);
            var3 = var4.reverse;
            var5 = var3.bind(var4)();
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 17;
            var3 = var13[var3];
            var10 = undefined;
            var4 = var12.bind(var10)(var3);
            var3 = var4.getMaxEmojiSlots;
            var9 = var3.bind(var4)(var6);
            var4 = _closure1_slot1;
            var3 = 12;
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
            var3 = _closure1_slot9;
            var2 = 2;
            var2 = var3.bind(var10)(var4, var2);
            var4 = 0;
            var3 = var2[var4];
            var6 = 1;
            var5 = var2[var6];
            var7 = _closure1_slot22;
            var1 = 15;
            var2 = var13[var1];
            var2 = var12.bind(var10)(var2);
            var11 = var2.intl;
            var8 = var11.string;
            var2 = var13[var1];
            var2 = var12.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2.sMOuub;
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
            var1 = var1.wWjQyc;
            var2 = var2.bind(var11)(var1);
            var1 = var5.length;
            var7 = var7.bind(var10)(var2, var1, var9);
            var1 = var3.length;
            if(!(!(var1 > var4))) { _fun0003_ip = 286; continue _fun0003 }
 280:
            var2 = new Array(0);
            _fun0003_ip = 310; continue _fun0003;
 286:
            var1 = new Array(1);
            var1[0] = var8;
            var16 = var1;
            var15 = var3;
            var14 = var6;
            var3 = arraySpread(var16, var15, var14);
            var2 = var1;
 310:
            var1 = new Array(0);
            var16 = var1;
            var15 = var2;
            var14 = 0;
            var3 = arraySpread(var16, var15, var14);
            var2 = var5.length;
            if(!(!(var2 > var4))) { _fun0003_ip = 341; continue _fun0003 }
 335:
            var2 = new Array(0);
            _fun0003_ip = 365; continue _fun0003;
 341:
            var4 = new Array(1);
            var4[0] = var7;
            var16 = var4;
            var15 = var5;
            var14 = var6;
            var5 = arraySpread(var16, var15, var14);
            var2 = var4;
 365:
            var16 = var1;
            var15 = var2;
            var14 = var3;
            var2 = arraySpread(var16, var15, var14);
            return var1;
        }
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot24 = var10;
    var10 = var7.PureComponent;
    var7 = function(arg1) {
        var4 = function ManageEmojisModalUnconnected(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot26;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 86; continue _fun0004 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 120; continue _fun0004;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var5 = var1.item;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var7 = var1.guild;
                        var1 = var1.disabled;
                        var4 = undefined;
                        var6 = var4 !== var1;
                        if(!var6) { _fun0005_ip = 42; continue _fun0005 }
 39:
                        var6 = var1;
 42:
                        var2 = var5.type;
                        var1 = 'SECTION';
                        if(!(var1 !== var2)) { _fun0005_ip = 149; continue _fun0005 }
 55:
                        var1 = 'EMOJI';
                        if(!(var1 !== var2)) { _fun0005_ip = 67; continue _fun0005 }
 63:
                        var1 = null;
                        return var1;
 67:
                        var3 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 19;
                        var1 = var8[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.EmojiRow;
                        var1 = {};
                        var8 = var5.emoji;
                        var1['emoji'] = var8;
                        var7 = var7.id;
                        var1['guildId'] = var7;
                        if(var6) { _fun0005_ip = 137; continue _fun0005 }
 123:
                        var7 = var5.emoji;
                        var7 = var7.available;
                        var6 = !var7;
 137:
                        var1['disabled'] = var6;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
 149:
                        var3 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 18;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.SectionRow;
                        var1 = {};
                        var5 = var5.section;
                        var1['title'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1['renderItem'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var8 = var1.guild;
                        var10 = var1.emojis;
                        var7 = var1.headerDescription;
                        var6 = var1.onSelectRolesForEmoji;
                        var1 = var1.disabled;
                        var4 = undefined;
                        var5 = var4 !== var1;
                        if(!var5) { _fun0006_ip = 52; continue _fun0006 }
 49:
                        var5 = var1;
 52:
                        var3 = _closure1_slot16;
                        var2 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 20;
                        var1 = var9[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.ConnectedHeaderRow;
                        var1 = {};
                        var1['guild'] = var8;
                        var8 = null;
                        var11 = var8 == var10;
                        var9 = undefined;
                        if(var11) { _fun0006_ip = 107; continue _fun0006 }
 102:
                        var9 = var10.length;
 107:
                        var10 = var8 != var9;
                        var8 = 0;
                        if(!var10) { _fun0006_ip = 119; continue _fun0006 }
 116:
                        var8 = var9;
 119:
                        var1['emojisLength'] = var8;
                        var1['description'] = var7;
                        var1['onSelectRolesForEmoji'] = var6;
                        var1['uploadDisabled'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1['renderHeaderComponent'] = var3;
                var3 = function() {
                    var2 = _closure1_slot20;
                    var1 = _closure3_slot0;
                    var1 = var1.context;
                    var4 = undefined;
                    var5 = var2.bind(var4)(var1);
                    var3 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 21;
                    var1 = var9[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = 22;
                    var6 = var9[var6];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.EmptyServerSettingsEmoji;
                    var1['Illustration'] = var6;
                    var5 = var5.emptyState;
                    var1['style'] = var5;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var4)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.lxsmBQ;
                    var6 = var7.bind(var10)(var6);
                    var1['title'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var4)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5.RBbtMz;
                    var5 = var6.bind(var7)(var5);
                    var1['body'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['renderEmptyComponent'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.item;
                        var _closure4_slot0 = var1;
                        var4 = _closure1_slot20;
                        var2 = _closure3_slot0;
                        var3 = var2.context;
                        var5 = undefined;
                        var6 = var4.bind(var5)(var3);
                        var2 = var2.props;
                        var9 = var2.onSelectRolesForEmoji;
                        var _closure4_slot1 = var9;
                        var4 = var2.guild;
                        var3 = var1.type;
                        var2 = 'EMOJI';
                        if(!(var2 !== var3)) { _fun0007_ip = 77; continue _fun0007 }
 73:
                        var2 = null;
                        return var2;
 77:
                        var2 = var1.emoji;
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 23;
                        var1 = var7[var1];
                        var3 = var3.bind(var5)(var1);
                        var1 = var3.getManageResourcePermissions;
                        var1 = var1.bind(var3)(var4);
                        var1 = var1.canManageGuildExpression;
                        var2 = var1.bind(var5)(var2);
                        var7 = null;
                        var1 = null;
                        if(!var2) { _fun0007_ip = 491; continue _fun0007 }
 134:
                        var4 = _closure1_slot17;
                        var3 = _closure1_slot11;
                        var2 = {};
                        var6 = var6.quickActionsContainer;
                        var2['style'] = var6;
                        var14 = _closure1_slot16;
                        var15 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 24;
                        var6 = var13[var8];
                        var10 = var15.bind(var5)(var6);
                        var6 = {};
                        var18 = _closure1_slot0;
                        var17 = 15;
                        var16 = var13[var17];
                        var16 = var18.bind(var5)(var16);
                        var20 = var16.intl;
                        var19 = var20.string;
                        var16 = var13[var17];
                        var16 = var18.bind(var5)(var16);
                        var16 = var16.t;
                        var16 = var16.oyYWHB;
                        var16 = var19.bind(var20)(var16);
                        var6['title'] = var16;
                        var16 = 25;
                        var16 = var13[var16];
                        var16 = var18.bind(var5)(var16);
                        var16 = var16.TrashIcon;
                        var6['IconComponent'] = var16;
                        var16 = 26;
                        var13 = var13[var16];
                        var13 = var15.bind(var5)(var13);
                        var13 = var13.unsafe_rawColors;
                        var13 = var13.RED_400;
                        var6['color'] = var13;
                        var13 = 54;
                        var6['height'] = var13;
                        var15 = function onPress() {
                            var3 = _closure3_slot0;
                            var2 = var3.deleteEmoji;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6['onPress'] = var15;
                        var10 = var14.bind(var5)(var10, var6);
                        var6 = new Array(2);
                        var6[0] = var10;
                        var7 = var7 != var9;
                        if(!var7) { _fun0007_ip = 477; continue _fun0007 }
 326:
                        var10 = _closure1_slot16;
                        var15 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var8 = var14[var8];
                        var9 = var15.bind(var5)(var8);
                        var8 = {};
                        var18 = _closure1_slot0;
                        var19 = var14[var17];
                        var19 = var18.bind(var5)(var19);
                        var20 = var19.intl;
                        var19 = var20.string;
                        var17 = var14[var17];
                        var17 = var18.bind(var5)(var17);
                        var17 = var17.t;
                        var17 = var17.bt75u7;
                        var17 = var19.bind(var20)(var17);
                        var8['title'] = var17;
                        var17 = 27;
                        var17 = var14[var17];
                        var17 = var18.bind(var5)(var17);
                        var17 = var17.PencilIcon;
                        var8['IconComponent'] = var17;
                        var14 = var14[var16];
                        var14 = var15.bind(var5)(var14);
                        var14 = var14.unsafe_rawColors;
                        var14 = var14.YELLOW_300;
                        var8['color'] = var14;
                        var8['height'] = var13;
                        var12 = _closure1_slot3;
                        var11 = function* () {
                            var1 = function* anon_0_() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0008_ip = 299; continue _fun0008 }
 10:
                                    var2 = undefined;
                                    var9 = undefined;
                                    var6 = undefined;
 16: // try_start_0
                                    var4 = _closure4_slot0;
                                    var4 = var4.emoji;
                                    var9 = var4;
                                    var3 = _closure4_slot1;
                                    var3 = var3.bind(var2)(var4);
                                    SaveGenerator(address=44);
 42:
                                    return var3;
 44:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                    if(var4) { _fun0008_ip = 145; continue _fun0008 }
 50:
                                    var5 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var4 = 13;
                                    var4 = var8[var4];
                                    var8 = var5.bind(var2)(var4);
                                    var5 = var8.updateEmoji;
                                    var4 = {};
                                    var10 = _closure3_slot0;
                                    var10 = var10.props;
                                    var10 = var10.guild;
                                    var10 = var10.id;
                                    var4['guildId'] = var10;
                                    var9 = var9.id;
                                    var4['emojiId'] = var9;
                                    var4['roles'] = var3;
                                    var4 = var5.bind(var8)(var4);
                                    SaveGenerator(address=131);
 129:
                                    return var4;
 131:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                                    if(var5) { _fun0008_ip = 142; continue _fun0008 }
 137: // try_end0
                                    _fun0008_ip = 296; continue _fun0008;
 142:
                                    return var4;
 145:
                                    return var3;
 148: // catch_target0
                                    CatchBlockStart(arg_register=4);
                                    var7 = var5;
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var4 = 28;
                                    var4 = var9[var4];
                                    var4 = var8.bind(var2)(var4);
                                    var4 = var5 instanceof var4;
                                    if(!var4) { _fun0008_ip = 296; continue _fun0008 }
 183:
                                    var5 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var4 = 29;
                                    var4 = var8[var4];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.presentError;
                                    var8 = var7;
                                    var7 = var8.getAnyErrorMessage;
                                    var8 = var7.bind(var8)();
                                    var6 = var8;
                                    var7 = null;
                                    if(!(var7 == var8)) { _fun0008_ip = 288; continue _fun0008 }
 231:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var3 = 15;
                                    var7 = var10[var3];
                                    var7 = var9.bind(var2)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var3 = var10[var3];
                                    var3 = var9.bind(var2)(var3);
                                    var3 = var3.t;
                                    var3 = var3.R0RpRU;
                                    var3 = var7.bind(var8)(var3);
                                    _fun0008_ip = 291; continue _fun0008;
 288:
                                    var3 = var6;
 291:
                                    var3 = var4.bind(var5)(var3);
 296:
                                    return var2;
 299:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var11 = var12.bind(var5)(var11);
                        var8['onPress'] = var11;
                        var7 = var10.bind(var5)(var9, var8);
 477:
                        var6[1] = var7;
                        var2['children'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 491:
                        return var1;
                    }
                };
                var1['renderQuickActions'] = var3;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.key;
                    return var1;
                };
                var1['extractKey'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var1 = var1.props;
            var1 = var1.guild;
            var3 = _closure1_slot19;
            var2 = var1.id;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = this;
                var2 = var1.props;
                var1 = var2.guild;
                var3 = var2.revision;
                var2 = arg1;
                var2 = var2.revision;
                if(!(var2 < var3)) { _fun0009_ip = 51; continue _fun0009 }
 32:
                var3 = _closure1_slot19;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
 51:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderLoading';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot20;
            var1 = this;
            var1 = var1.context;
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = _closure1_slot17;
            var2 = _closure1_slot11;
            var1 = {};
            var5 = var5.loadingContainer;
            var1['style'] = var5;
            var8 = _closure1_slot16;
            var7 = _closure1_slot12;
            var5 = {'animating': true, 'color': null, 'size': 'large'};
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var10 = 26;
            var10 = var9[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.BRAND_500;
            var5['color'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot16;
            var7 = _closure1_slot0;
            var6 = 30;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'deleteEmoji';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.deleteEmoji;
            var2 = this;
            var2 = var2.props;
            var2 = var2.guild;
            var3 = var2.id;
            var2 = arg1;
            var2 = var2.emoji;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var5 = var2.props;
                var4 = var5.guild;
                var8 = var5.bottomSafeArea;
                var3 = var5.emojis;
                var1 = var5.computeEmojiItems;
                var7 = var5.onSelectRolesForEmoji;
                var5 = var5.disabled;
                var6 = undefined;
                var9 = var6 !== var5;
                if(!var9) { _fun0010_ip = 56; continue _fun0010 }
 53:
                var9 = var5;
 56:
                var5 = null;
                var7 = var5 != var7;
                var11 = 72;
                if(!var7) { _fun0010_ip = 71; continue _fun0010 }
 68:
                var11 = 144;
 71:
                if(!(var5 != var3)) { _fun0010_ip = 339; continue _fun0010 }
 78:
                var1 = var1.bind(var6)(var3, var4);
                var7 = {};
                var3 = 12;
                var7['initialNumToRender'] = var3;
                var3 = var2.renderHeaderComponent;
                var7['ListHeaderComponent'] = var3;
                var3 = var2.renderEmptyComponent;
                var7['ListEmptyComponent'] = var3;
                var3 = 4;
                var7['windowSize'] = var3;
                var7['data'] = var1;
                var1 = var2.extractKey;
                var7['keyExtractor'] = var1;
                var1 = var2.renderItem;
                var7['renderItem'] = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 31;
                var1 = var5[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.isAndroid;
                var1 = var1.bind(var4)();
                var5 = _closure1_slot16;
                if(var1) { _fun0010_ip = 295; continue _fun0010 }
 189:
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 32;
                var1 = var10[var1];
                var4 = var4.bind(var6)(var1);
                var1 = {};
                var13 = var1;
                var12 = var7;
                var10 = copyDataProperties(var13, var12);
                var10 = 'maxSwipeDistance';
                var1[var10] = var11;
                var10 = true;
                var11 = 'bounceFirstRowOnMount';
                var1[var11] = var10;
                var11 = undefined;
                if(var9) { _fun0010_ip = 252; continue _fun0010 }
 246:
                var11 = var2.renderQuickActions;
 252:
                var9 = 'renderQuickActions';
                var1[var9] = var11;
                var9 = 'preventSwipeRight';
                var1[var9] = var10;
                var9 = {};
                var9['bottom'] = var8;
                var8 = 'contentInset';
                var1[var8] = var9;
                var1 = var5.bind(var6)(var4, var1);
                _fun0010_ip = 337; continue _fun0010;
 295:
                var4 = _closure1_slot13;
                var3 = {};
                var13 = var3;
                var12 = var7;
                var7 = copyDataProperties(var13, var12);
                var7 = var2.props;
                var8 = var7.contentContainerStyle;
                var7 = 'contentContainerStyle';
                var3[var7] = var8;
                var1 = var5.bind(var6)(var4, var3);
 337:
                return var1;
 339:
                var1 = var2.renderLoading;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var7.bind(var1)(var10);
    var _closure1_slot25 = var10;
    var7 = 33;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var10['contextType'] = var7;
    var7 = 38;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_settings/native/GuildSettingsModalEmoji.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function GuildSettingsModalEmoji(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var12 = var2.contentContainerStyle;
            var8 = var2.isLandingScreen;
            var _closure2_slot1 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 34;
            var2 = var4[var2];
            var5 = undefined;
            var10 = var3.bind(var5)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot14;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var9.bind(var10)(var6, var2);
            var _closure2_slot2 = var14;
            var2 = 36;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigation;
            var9 = var2.bind(var3)();
            var _closure2_slot3 = var9;
            var2 = _closure1_slot21;
            var6 = var2.bind(var5)();
            var _closure2_slot4 = var6;
            var4 = _closure1_slot10;
            var3 = var4.useLayoutEffect;
            var2 = new Array(4);
            var2[0] = var9;
            var2[1] = var14;
            var2[2] = var8;
            var2[3] = var6;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0012_ip = 20; continue _fun0012 }
 10:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = var3 !== var4;
 20:
                    if(!var2) { _fun0012_ip = 54; continue _fun0012 }
 23:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerTitle() {
                        var4 = _closure1_slot16;
                        var3 = _closure1_slot11;
                        var2 = {};
                        var5 = _closure2_slot4;
                        var5 = var5.titleContainer;
                        var2['style'] = var5;
                        var7 = _closure1_slot16;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 37;
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
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var14)) { _fun0011_ip = 372; continue _fun0011 }
 181:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var3 = var8.bind(var5)(var2);
            var2 = var3.getMaxEmojiSlots;
            var9 = var2.bind(var3)(var14);
            var2 = 15;
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
            var4 = _closure1_slot17;
            var3 = _closure1_slot18;
            var2 = {};
            var11 = _closure1_slot16;
            var9 = _closure1_slot27;
            var6 = {};
            var6['guild'] = var14;
            var6['headerDescription'] = var13;
            var13 = _closure1_slot24;
            var6['computeEmojiItems'] = var13;
            var6['contentContainerStyle'] = var12;
            var9 = var11.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot16;
            var7 = 30;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 372:
            return var1;
        }
    };
    var3['default'] = var6;
    var3['computeSectionItem'] = var5;
    var3['computeEmojiItem'] = var4;
    var3['ManageEmojisModal'] = var2;
    return var1;
})();