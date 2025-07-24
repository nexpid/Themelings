// app/modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createInGameMessageNuxSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = var5.message;
            var2 = var5.theme;
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var8 = var1.bind(var4)(var2);
            var12 = var3.author;
            var7 = _closure1_slot3;
            var6 = var7.getApplication;
            var10 = var3.applicationId;
            var1 = null;
            var11 = var1 != var10;
            var2 = '';
            if(!var11) { _fun0001_ip = 81; continue _fun0001 }
 78:
            var2 = var10;
 81:
            var2 = var6.bind(var7)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 357; continue _fun0001 }
 93:
            var10 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 3;
            var6 = var7[var6];
            var13 = var11.bind(var4)(var6);
            var6 = var13.getMessageAuthorWithProcessedColor;
            var6 = var6.bind(var13)(var3);
            var6 = var6.nick;
            var10['username'] = var6;
            var6 = {};
            var13 = 'bindUserMenu';
            var6['action'] = var13;
            var12 = var12.id;
            var6['userId'] = var12;
            var12 = var8.textColor;
            var6['linkColor'] = var12;
            var3 = var3.channel_id;
            var6['messageChannelId'] = var3;
            var3 = true;
            var6['medium'] = var3;
            var10['usernameOnClick'] = var6;
            var2 = var2.name;
            var10['gameName'] = var2;
            var2 = {};
            var6 = 'bindOpenUrl';
            var2['action'] = var6;
            var6 = _closure1_slot1;
            var12 = 4;
            var12 = var7[var12];
            var13 = var6.bind(var4)(var12);
            var12 = var13.getArticleURL;
            var9 = _closure1_slot4;
            var9 = var9.SOCIAL_LAYER_CONNECTIONS;
            var9 = var12.bind(var13)(var9);
            var2['url'] = var9;
            var8 = var8.linkColor;
            var2['linkColor'] = var8;
            var2['medium'] = var3;
            var10['urlOnClick'] = var2;
            var2 = {};
            var3 = 5;
            var8 = var7[var3];
            var8 = var11.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var3 = var7[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.92erOD;
            var3 = var8.bind(var9)(var3, var10);
            var2['content'] = var3;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var14 = var3.bind(var4)(var5);
            var15 = var2;
            var3 = copyDataProperties(var15, var14);
            return var2;
 357:
            return var1;
        }
    };
    var3['createInGameMessageNuxSystemMessage'] = var2;
    return var1;
})();