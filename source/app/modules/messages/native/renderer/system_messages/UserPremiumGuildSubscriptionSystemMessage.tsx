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
case 0:
            var4 = arg1;
            var8 = var4.message;
            var7 = var4.roleStyle;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 0;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var10 = var1.bind(var3)(var8);
            var11 = _closure1_slot0;
            var5 = 1;
            var1 = var9[var5];
            var11 = var11.bind(var3)(var1);
            var1 = var11.getMessageAuthorWithProcessedColor;
            var12 = var1.bind(var11)(var8);
            var1 = 2;
            var1 = var9[var1];
            var6 = var6.bind(var3)(var1);
            var1 = {};
            var1['message'] = var8;
            var1['author'] = var12;
            var1['roleStyle'] = var7;
            var11 = var6.bind(var3)(var1);
            var1 = {};
            if(!(!(var10 > var5))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
            var6 = var5.ihxM9x;
            var5 = {};
            var9 = var12.nick;
            var5['username'] = var9;
            var5['usernameOnClick'] = var11;
            var5 = var7.bind(var8)(var6, var5);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 3;
            var8 = var13[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var13[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.rbj006;
            var6 = {};
            var12 = var12.nick;
            var6['username'] = var12;
            var6['usernameOnClick'] = var11;
            var6['numSubscriptions'] = var10;
            var5 = var8.bind(var9)(var7, var6);
case 4:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var14 = var2.bind(var3)(var4);
            var15 = var1;
            var2 = copyDataProperties(var15, var14);
            return var1;
        }
    };
    var3['createUserPremiumGuildSubscriptionSystemMessage'] = var2;
    return var1;
})();