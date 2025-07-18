// app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useGuildInviteSendStates;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteSendStates;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.row;
            var _closure2_slot0 = var1;
            var3 = var2.recipientId;
            var _closure2_slot1 = var3;
            var3 = var2.source;
            var _closure2_slot2 = var3;
            var5 = var2.style;
            var10 = var1.guild;
            var _closure2_slot3 = var10;
            var3 = _closure1_slot4;
            var4 = undefined;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = arg1;
                    var3 = var1[var3];
                    var1 = null;
                    var4 = var1 == var3;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 38; continue _fun0002 }
 25:
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3[var2];
 38:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var6 = function handlePress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.sendGuildInvite;
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var3 = var3.id;
                var2 = _closure2_slot2;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var11 = _closure1_slot6;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 6;
            var2 = var16[var2];
            var7 = var13.bind(var4)(var2);
            var2 = {};
            var2['sendState'] = var3;
            var2['onPressSend'] = var6;
            var9 = var11.bind(var4)(var7, var2);
            var7 = _closure1_slot3;
            var2 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var14 = 7;
            var12 = var16[var14];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['guild'] = var10;
            var15 = _closure1_slot0;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.GuildIconSizes;
            var14 = var14.SMALL;
            var12['size'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var2['children'] = var12;
            var11 = var11.bind(var4)(var7, var2);
            var2 = _closure1_slot5;
            var2 = var2.SENDING;
            var7 = var3 === var2;
            if(var7) { _fun0001_ip = 230; continue _fun0001 }
 216:
            var2 = _closure1_slot5;
            var2 = var2.SENT;
            var7 = var3 === var2;
 230:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 8;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var1['leading'] = var11;
            var10 = var10.name;
            var1['label'] = var10;
            var1['trailing'] = var9;
            var8 = function subLabel() {
                var4 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 9;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
                var5 = 10;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.zRl6XV;
                var5 = {};
                var9 = _closure2_slot0;
                var9 = var9.memberCount;
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['subLabel'] = var8;
            var1['onPress'] = var6;
            var1['disabled'] = var7;
            var6 = {};
            var6['disabled'] = var7;
            var1['accessibilityState'] = var6;
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();