// app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createUserPremiumGuildSubscriptionSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var12 = var4.message;
            var16 = var4.roleStyle;
            var13 = var12.author;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 0;
            var1 = var7[var1];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var10 = var1.bind(var3)(var12);
            var6 = _closure1_slot0;
            var5 = 1;
            var1 = var7[var5];
            var8 = var6.bind(var3)(var1);
            var1 = var8.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var8)(var12);
            var11 = var1.nick;
            var15 = var1.colorString;
            var17 = var1.colorStrings;
            var8 = var1.guildId;
            var1 = 2;
            var1 = var7[var1];
            var7 = var6.bind(var3)(var1);
            var6 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var13.id;
            var18 = var6.bind(var7)(var8, var1, var16);
            var1 = {};
            if(!(!(var10 > var5))) { _fun0001_ip = 312; continue _fun0001 }
 138:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
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
            if(!(var20 === var16)) { _fun0001_ip = 236; continue _fun0001 }
 233:
            var14 = var15;
 236:
            var9['linkColor'] = var14;
            var9['roleColor'] = var15;
            var14 = null;
            if(!var18) { _fun0001_ip = 254; continue _fun0001 }
 251:
            var14 = var17;
 254:
            var9['roleColors'] = var14;
            var14 = 'dot';
            var14 = var14 === var16;
            if(!var14) { _fun0001_ip = 274; continue _fun0001 }
 270:
            var14 = var19 != var15;
 274:
            var9['shouldShowRoleDot'] = var14;
            var14 = var12.channel_id;
            var9['messageChannelId'] = var14;
            var14 = true;
            var9['medium'] = var14;
            var5['usernameOnClick'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 488; continue _fun0001;
 312:
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
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
            if(!(var19 === var16)) { _fun0001_ip = 412; continue _fun0001 }
 409:
            var13 = var15;
 412:
            var11['linkColor'] = var13;
            var11['roleColor'] = var15;
            var13 = null;
            if(!var18) { _fun0001_ip = 430; continue _fun0001 }
 427:
            var13 = var17;
 430:
            var11['roleColors'] = var13;
            var13 = 'dot';
            var13 = var13 === var16;
            if(!var13) { _fun0001_ip = 450; continue _fun0001 }
 446:
            var13 = var14 != var15;
 450:
            var11['shouldShowRoleDot'] = var13;
            var12 = var12.channel_id;
            var11['messageChannelId'] = var12;
            var12 = true;
            var11['medium'] = var12;
            var6['usernameOnClick'] = var11;
            var6['numSubscriptions'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 488:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
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