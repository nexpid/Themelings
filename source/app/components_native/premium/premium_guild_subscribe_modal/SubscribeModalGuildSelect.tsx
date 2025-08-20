// app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumGuildSubscribeModalScenes;
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'backgroundColor': null, 'flexGrow': 1, 'flexShrink': 1};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOBILE_SECONDARY;
    var4['backgroundColor'] = var10;
    var7['safeArea'] = var4;
    var4 = {};
    var10 = 16;
    var4['padding'] = var10;
    var7['guildList'] = var4;
    var4 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 10};
    var7['guildOption'] = var4;
    var10 = {'marginLeft': 32, 'fontSize': 16, 'lineHeight': 20};
    var4 = 20;
    var11 = 9;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.DARK_WHITE_500_LIGHT_PRIMARY_660;
    var10['color'] = var11;
    var7['guildName'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubscribeModalGuildSelect(arg1) {
        var1 = arg1;
        var1 = var1.previousGuildSubscriptionSlot;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot12;
        var4 = undefined;
        var15 = var2.bind(var4)();
        var _closure2_slot1 = var15;
        var10 = _closure1_slot0;
        var14 = _closure1_slot3;
        var2 = 10;
        var2 = var14[var2];
        var3 = var10.bind(var4)(var2);
        var2 = var3.useNavigation;
        var2 = var2.bind(var3)();
        var _closure2_slot2 = var2;
        var5 = _closure1_slot5;
        var3 = var5.useState;
        var2 = '';
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var8 = var3[var2];
        var _closure2_slot3 = var8;
        var2 = 1;
        var16 = var3[var2];
        var2 = 11;
        var2 = var14[var2];
        var7 = var10.bind(var4)(var2);
        var5 = var7.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = _closure1_slot8;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot3;
                var3 = var1.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0001_ip = 115; continue _fun0001 }
 20:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.queryGuilds;
                var1 = {};
                var5 = _closure2_slot3;
                var1['query'] = var5;
                var5 = var3.bind(var4)(var1);
                var4 = var5.reduce;
                var1 = global;
                var1 = var1.Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var9 = var3;
                var1 = new var9[var1](var8);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = function(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        var2 = arg2;
                        var3 = var2.record;
                        var4 = _closure2_slot0;
                        var5 = null;
                        var7 = var5 == var4;
                        var4 = undefined;
                        if(var7) { _fun0002_ip = 54; continue _fun0002 }
 30:
                        var2 = _closure2_slot0;
                        var2 = var2.premiumGuildSubscription;
                        var5 = var5 == var2;
                        var4 = undefined;
                        if(var5) { _fun0002_ip = 54; continue _fun0002 }
 49:
                        var4 = var2.guildId;
 54:
                        var2 = var3.id;
                        if(!(var4 !== var2)) { _fun0002_ip = 73; continue _fun0002 }
 63:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
 73:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                _fun0001_ip = 179; continue _fun0001;
 115:
                var4 = _closure1_slot8;
                var3 = var4.getFlattenedGuildIds;
                var5 = var3.bind(var4)();
                var4 = var5.reduce;
                var3 = global;
                var3 = var3.Array;
                var6 = var3.prototype;
                var6 = Object.create(var6, {constructor: {value: var3}});
                var9 = var6;
                var3 = new var9[var3](var8);
                var3 = var3 instanceof Object ? var3 : var6;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var4 = _closure1_slot7;
                        var3 = var4.getGuild;
                        var2 = arg2;
                        var3 = var3.bind(var4)(var2);
                        var6 = null;
                        var2 = var6 == var3;
                        if(var2) { _fun0003_ip = 81; continue _fun0003 }
 32:
                        var5 = _closure2_slot0;
                        var8 = var6 == var5;
                        var5 = undefined;
                        if(var8) { _fun0003_ip = 72; continue _fun0003 }
 48:
                        var4 = _closure2_slot0;
                        var4 = var4.premiumGuildSubscription;
                        var6 = var6 == var4;
                        var5 = undefined;
                        if(var6) { _fun0003_ip = 72; continue _fun0003 }
 67:
                        var5 = var4.guildId;
 72:
                        var4 = var3.id;
                        var2 = var5 === var4;
 81:
                        if(var2) { _fun0003_ip = 94; continue _fun0003 }
 84:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var3);
 94:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var2, var3);
 179:
                return var1;
            }
        };
        var13 = var5.bind(var7)(var3, var1, var2);
        var3 = _closure1_slot11;
        var9 = 13;
        var1 = var14[var9];
        var1 = var10.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var12 = true;
        var1['top'] = var12;
        var5 = var15.safeArea;
        var1['style'] = var5;
        var8 = _closure1_slot10;
        var7 = _closure1_slot1;
        var5 = 14;
        var5 = var14[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var17 = 15;
        var18 = var14[var17];
        var18 = var10.bind(var4)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var14[var17];
        var17 = var10.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.vf3ZTU;
        var17 = var18.bind(var19)(var17);
        var5['placeholder'] = var17;
        var5['onChange'] = var16;
        var17 = _closure1_slot2;
        var16 = 16;
        var16 = var14[var16];
        var16 = var17.bind(var4)(var16);
        var16 = var16.closeApplyBoostModal;
        var5['onClose'] = var16;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot6;
        var6 = {};
        var15 = var15.guildList;
        var6['style'] = var15;
        var15 = 'always';
        var6['keyboardShouldPersistTaps'] = var15;
        var9 = var14[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.SafeAreaPaddingView;
        var9 = {};
        var9['bottom'] = var12;
        var12 = var13.map;
        var11 = function(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot11;
            var13 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 17;
            var2 = var11[var2];
            var4 = undefined;
            var2 = var13.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var10 = _closure2_slot1;
            var8 = var10.guildOption;
            var2['style'] = var8;
            var7 = function onPress() {
                var6 = _closure3_slot0;
                var4 = _closure2_slot2;
                var3 = var4.replace;
                var1 = _closure1_slot9;
                var2 = var1.CONFIRMATION;
                var1 = {};
                var6 = var6.id;
                var1['guildId'] = var6;
                var5 = _closure2_slot0;
                var1['previousGuildSubscriptionSlot'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2['onPress'] = var7;
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = 18;
            var6 = var11[var12];
            var7 = var8.bind(var4)(var6);
            var6 = {};
            var6['guild'] = var1;
            var12 = var11[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.GuildIconSizes;
            var12 = var12.SMALL;
            var6['size'] = var12;
            var12 = false;
            var6['selected'] = var12;
            var7 = var9.bind(var4)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 19;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var10 = var10.guildName;
            var7['style'] = var10;
            var10 = var1.name;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var1.id;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var11 = var12.bind(var13)(var11);
        var9['children'] = var11;
        var9 = var8.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();