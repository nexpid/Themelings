// app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx
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
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserPremiumGuildSubscriptionSystemMessage(arg1) {
        var1 = arg1;
        var6 = var1.row;
        var9 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 8;
        var2 = var7[var2];
        var4 = undefined;
        var11 = var9.bind(var4)(var2);
        var10 = var11.useStateFromStores;
        var2 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var2;
        var5 = function() {
            var1 = _closure1_slot4;
            var1 = var1.roleStyle;
            return var1;
        };
        var2 = new Array(0);
        var13 = var10.bind(var11)(var8, var5, var2);
        var _closure2_slot0 = var13;
        var14 = var6.message;
        var _closure2_slot1 = var14;
        var5 = var14.author;
        var _closure2_slot2 = var5;
        var2 = _closure1_slot1;
        var8 = 3;
        var8 = var7[var8];
        var8 = var2.bind(var4)(var8);
        var11 = var8.bind(var4)(var14);
        var _closure2_slot3 = var11;
        var8 = 4;
        var8 = var7[var8];
        var9 = var9.bind(var4)(var8);
        var8 = var9.useMessageAuthorWithProcessedColor;
        var8 = var8.bind(var9)(var14);
        var12 = var8.nick;
        var _closure2_slot4 = var12;
        var15 = var8.colorString;
        var _closure2_slot5 = var15;
        var9 = _closure1_slot3;
        var10 = var9.useMemo;
        var8 = new Array(4);
        var8[0] = var15;
        var14 = var14.channel_id;
        var8[1] = var14;
        var8[2] = var13;
        var5 = var5.id;
        var8[3] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = {};
                var2 = 'bindUserMenu';
                var1['action'] = var2;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var1['userId'] = var3;
                var3 = _closure2_slot5;
                var1['colorString'] = var3;
                var6 = _closure2_slot0;
                var5 = null;
                var4 = 'username';
                var3 = null;
                if(!(var4 === var6)) { _fun0001_ip = 57; continue _fun0001 }
 53:
                var3 = _closure2_slot5;
 57:
                var1['linkColor'] = var3;
                var3 = _closure2_slot5;
                var1['roleColor'] = var3;
                var4 = _closure2_slot0;
                var3 = 'dot';
                var3 = var3 === var4;
                if(!var3) { _fun0001_ip = 94; continue _fun0001 }
 86:
                var4 = _closure2_slot5;
                var3 = var5 != var4;
 94:
                var1['shouldShowRoleDot'] = var3;
                var2 = _closure2_slot1;
                var2 = var2.channel_id;
                var1['messageChannelId'] = var2;
                var2 = true;
                var1['medium'] = var2;
                return var1;
            }
        };
        var10 = var10.bind(var9)(var5, var8);
        var _closure2_slot6 = var10;
        var8 = var9.useMemo;
        var5 = new Array(3);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot3;
                var1 = 1;
                if(!(!(var2 > var1))) { _fun0002_ip = 97; continue _fun0002 }
 14:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToParts;
                var1 = var7[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.ihxM9/;
                var1 = {};
                var5 = _closure2_slot4;
                var1['username'] = var5;
                var5 = _closure2_slot6;
                var1['usernameOnClick'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 187; continue _fun0002;
 97:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var4 = var8[var2];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToParts;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.rbj009;
                var2 = {};
                var7 = _closure2_slot4;
                var2['username'] = var7;
                var7 = _closure2_slot6;
                var2['usernameOnClick'] = var7;
                var6 = _closure2_slot3;
                var2['numSubscriptions'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 187:
                return var1;
            }
        };
        var5 = var8.bind(var9)(var3, var5);
        var3 = _closure1_slot5;
        var1 = 9;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['row'] = var6;
        var1['content'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function createUserPremiumGuildSubscriptionSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var12 = var4.message;
            var16 = var4.roleStyle;
            var13 = var12.author;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var10 = var1.bind(var3)(var12);
            var5 = _closure1_slot0;
            var1 = 4;
            var1 = var6[var1];
            var7 = var5.bind(var3)(var1);
            var1 = var7.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var7)(var12);
            var11 = var1.nick;
            var15 = var1.colorString;
            var17 = var1.colorStrings;
            var7 = var1.guildId;
            var1 = 5;
            var1 = var6[var1];
            var6 = var5.bind(var3)(var1);
            var5 = var6.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var13.id;
            var18 = var5.bind(var6)(var7, var1, var16);
            var1 = {};
            var5 = 1;
            if(!(!(var10 > var5))) { _fun0003_ip = 316; continue _fun0003 }
 142:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 6;
            var7 = var9[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.ihxM9/;
            var5 = {};
            var5['username'] = var11;
            var9 = {};
            var14 = 'bindUserMenu';
            var9['action'] = var14;
            var14 = var13.id;
            var9['userId'] = var14;
            var9['colorString'] = var15;
            var19 = null;
            var20 = 'username';
            var14 = null;
            if(!(var20 === var16)) { _fun0003_ip = 240; continue _fun0003 }
 237:
            var14 = var15;
 240:
            var9['linkColor'] = var14;
            var9['roleColor'] = var15;
            var14 = null;
            if(!var18) { _fun0003_ip = 258; continue _fun0003 }
 255:
            var14 = var17;
 258:
            var9['roleColors'] = var14;
            var14 = 'dot';
            var14 = var14 === var16;
            if(!var14) { _fun0003_ip = 278; continue _fun0003 }
 274:
            var14 = var19 != var15;
 278:
            var9['shouldShowRoleDot'] = var14;
            var14 = var12.channel_id;
            var9['messageChannelId'] = var14;
            var14 = true;
            var9['medium'] = var14;
            var5['usernameOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            _fun0003_ip = 490; continue _fun0003;
 316:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 6;
            var8 = var14[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var14[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.rbj009;
            var6 = {};
            var6['username'] = var11;
            var11 = {};
            var14 = 'bindUserMenu';
            var11['action'] = var14;
            var13 = var13.id;
            var11['userId'] = var13;
            var11['colorString'] = var15;
            var14 = null;
            var19 = 'username';
            var13 = null;
            if(!(var19 === var16)) { _fun0003_ip = 414; continue _fun0003 }
 411:
            var13 = var15;
 414:
            var11['linkColor'] = var13;
            var11['roleColor'] = var15;
            var13 = null;
            if(!var18) { _fun0003_ip = 432; continue _fun0003 }
 429:
            var13 = var17;
 432:
            var11['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var16;
            if(!var13) { _fun0003_ip = 452; continue _fun0003 }
 448:
            var13 = var14 != var15;
 452:
            var11['shouldShowRoleDot'] = var13;
            var12 = var12.channel_id;
            var11['messageChannelId'] = var12;
            var12 = true;
            var11['medium'] = var12;
            var6['usernameOnClick'] = var11;
            var6['numSubscriptions'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 490:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createUserPremiumGuildSubscriptionSystemMessage'] = var2;
    return var1;
})();