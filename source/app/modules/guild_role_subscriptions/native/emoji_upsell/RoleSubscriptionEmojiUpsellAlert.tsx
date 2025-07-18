// app/modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RoleSubscriptionEmojiUpsellAlert(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var10 = var1.onClose;
            var _closure2_slot1 = var10;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.width;
            var9 = var1.height;
            var1 = global;
            var8 = var1.Math;
            var7 = var8.min;
            var2 = var1.Math;
            var1 = var2.min;
            var2 = var1.bind(var2)(var11, var9);
            var1 = 0.9;
            var2 = var1 * var2;
            var1 = 500;
            var2 = var7.bind(var8)(var2, var1);
            var1 = 32;
            var8 = var2 - var1;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var7 = var2.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0002_ip = 37; continue _fun0002 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2, var1);
            var _closure2_slot2 = var2;
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var1 = null;
            var9 = var1 == var2;
            var1 = undefined;
            if(var9) { _fun0001_ip = 203; continue _fun0001 }
 198:
            var1 = var2.name;
 203:
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 == var3;
                    var7 = undefined;
                    var6 = undefined;
                    if(var2) { _fun0003_ip = 29; continue _fun0003 }
 20:
                    var1 = _closure2_slot2;
                    var6 = var1.name;
 29:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 4;
                    var3 = var8[var3];
                    var3 = var4.bind(var7)(var3);
                    var1['image'] = var3;
                    var3 = _closure1_slot0;
                    var2 = 5;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.cBjkc3;
                    var4 = var5.bind(var9)(var4);
                    var1['title'] = var4;
                    var4 = var8[var2];
                    var4 = var3.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.t;
                    var3 = var2.h0u/Hh;
                    var2 = {};
                    var2['serverName'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['description'] = var2;
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var1, var2);
            var1 = function handleConfirm() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.transitionToGuildSync;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot5;
                    var3 = var3.ROLE_SUBSCRIPTIONS;
                    var3 = var5.bind(var6)(var4, var1, var3);
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 73; continue _fun0004 }
 65:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 73:
                    return var1;
                }
            };
            _closure2_slot3 = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var11 = 5;
            var12 = var9[var11];
            var12 = var6.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var9[var11];
            var11 = var6.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.cpT0Cg;
            var11 = var12.bind(var13)(var11);
            var1['cancelText'] = var11;
            var1['onClose'] = var10;
            var5 = function renderConfirmButton() {
                var4 = _closure1_slot6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.CreatorRevenueButton;
                var1 = {};
                var5 = _closure2_slot3;
                var1['onPress'] = var5;
                var5 = 5;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.p8FG1N;
                var5 = var6.bind(var7)(var5);
                var1['text'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['renderConfirmButton'] = var5;
            var5 = 11;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PremiumUpsellItem;
            var5 = {};
            var5['alertWidth'] = var8;
            var5['upsellItem'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();