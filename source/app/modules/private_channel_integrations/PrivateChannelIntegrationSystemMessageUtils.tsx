// app/modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.HelpdeskArticles;
    var _closure1_slot3 = var7;
    var4 = var4.NOOP;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getPrivateChannelIntegrationAddedSystemMessageContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.application;
            var12 = var1.username;
            var8 = var1.usernameHook;
            var9 = undefined;
            if(!(var8 === var9)) { _fun0001_ip = 32; continue _fun0001 }
 25:
            var8 = _closure1_slot4;
 32:
            var7 = var1.applicationNameHook;
            if(!(var7 === var9)) { _fun0001_ip = 49; continue _fun0001 }
 42:
            var7 = _closure1_slot4;
 49:
            var1 = null;
            if(!(var1 == var11)) { _fun0001_ip = 174; continue _fun0001 }
 55:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 1;
            var3 = var13[var1];
            var3 = var2.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var13[var1];
            var1 = var2.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.+6V2sb;
            var1 = {};
            var1['username'] = var12;
            var1['usernameHook'] = var8;
            var10 = _closure1_slot1;
            var6 = 2;
            var6 = var13[var6];
            var10 = var10.bind(var9)(var6);
            var6 = var10.getArticleURL;
            var5 = _closure1_slot3;
            var5 = var5.PRIVATE_CHANNEL_INTEGRATIONS;
            var5 = var6.bind(var10)(var5);
            var1['helpCenterLink'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 303; continue _fun0001;
 174:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 1;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.J8SaGx;
            var2 = {};
            var2['username'] = var12;
            var11 = var11.name;
            var2['otherUsername'] = var11;
            var2['usernameHook'] = var8;
            var2['otherUsernameHook'] = var7;
            var8 = _closure1_slot1;
            var7 = 2;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.getArticleURL;
            var6 = _closure1_slot3;
            var6 = var6.PRIVATE_CHANNEL_INTEGRATIONS;
            var6 = var7.bind(var8)(var6);
            var2['helpCenterLink'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 303:
            return var1;
        }
    };
    var3['getPrivateChannelIntegrationAddedSystemMessageContent'] = var4;
    var4 = function getPrivateChannelIntegrationRemovedSystemMessageContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.application;
            var12 = var1.username;
            var8 = var1.usernameHook;
            var9 = undefined;
            if(!(var8 === var9)) { _fun0002_ip = 32; continue _fun0002 }
 25:
            var8 = _closure1_slot4;
 32:
            var7 = var1.applicationNameHook;
            if(!(var7 === var9)) { _fun0002_ip = 49; continue _fun0002 }
 42:
            var7 = _closure1_slot4;
 49:
            var1 = null;
            if(!(var1 == var11)) { _fun0002_ip = 174; continue _fun0002 }
 55:
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 1;
            var3 = var13[var1];
            var3 = var2.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var13[var1];
            var1 = var2.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.sAX6rq;
            var1 = {};
            var1['username'] = var12;
            var1['usernameHook'] = var8;
            var10 = _closure1_slot1;
            var6 = 2;
            var6 = var13[var6];
            var10 = var10.bind(var9)(var6);
            var6 = var10.getArticleURL;
            var5 = _closure1_slot3;
            var5 = var5.PRIVATE_CHANNEL_INTEGRATIONS;
            var5 = var6.bind(var10)(var5);
            var1['helpCenterLink'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0002_ip = 303; continue _fun0002;
 174:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 1;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.eGCDam;
            var2 = {};
            var2['username'] = var12;
            var11 = var11.name;
            var2['otherUsername'] = var11;
            var2['usernameHook'] = var8;
            var2['otherUsernameHook'] = var7;
            var8 = _closure1_slot1;
            var7 = 2;
            var7 = var10[var7];
            var8 = var8.bind(var9)(var7);
            var7 = var8.getArticleURL;
            var6 = _closure1_slot3;
            var6 = var6.PRIVATE_CHANNEL_INTEGRATIONS;
            var6 = var7.bind(var8)(var6);
            var2['helpCenterLink'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 303:
            return var1;
        }
    };
    var3['getPrivateChannelIntegrationRemovedSystemMessageContent'] = var4;
    var4 = function getPrivateChannelIntegrationAddedSystemMessageASTContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var12 = var1.application;
            var13 = var1.username;
            var9 = var1.usernameOnClick;
            var8 = var1.applicationNameOnClick;
            var6 = var1.medium;
            var1 = null;
            if(!(var1 == var12)) { _fun0003_ip = 173; continue _fun0003 }
 40:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 1;
            var3 = var15[var1];
            var14 = undefined;
            var3 = var2.bind(var14)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var15[var1];
            var1 = var2.bind(var14)(var1);
            var1 = var1.t;
            var2 = var1.ojysqa;
            var1 = {};
            var1['username'] = var13;
            var1['usernameOnClick'] = var9;
            var1['medium'] = var6;
            var5 = {};
            var11 = _closure1_slot1;
            var10 = 2;
            var10 = var15[var10];
            var11 = var11.bind(var14)(var10);
            var10 = var11.getArticleURL;
            var7 = _closure1_slot3;
            var7 = var7.PRIVATE_CHANNEL_INTEGRATIONS;
            var7 = var10.bind(var11)(var7);
            var5['url'] = var7;
            var1['helpCenterLink'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0003_ip = 316; continue _fun0003;
 173:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 1;
            var4 = var11[var2];
            var10 = undefined;
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.formatToParts;
            var2 = var11[var2];
            var2 = var3.bind(var10)(var2);
            var2 = var2.t;
            var3 = var2.8r+Z+P;
            var2 = {};
            var2['username'] = var13;
            var12 = var12.name;
            var2['otherUsername'] = var12;
            var2['usernameOnClick'] = var9;
            var2['otherUsernameOnClick'] = var8;
            var2['medium'] = var6;
            var6 = {};
            var9 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.getArticleURL;
            var7 = _closure1_slot3;
            var7 = var7.PRIVATE_CHANNEL_INTEGRATIONS;
            var7 = var8.bind(var9)(var7);
            var6['url'] = var7;
            var2['helpCenterLink'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 316:
            return var1;
        }
    };
    var3['getPrivateChannelIntegrationAddedSystemMessageASTContent'] = var4;
    var2 = function getPrivateChannelIntegrationRemovedSystemMessageASTContent(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var12 = var1.application;
            var13 = var1.username;
            var9 = var1.usernameOnClick;
            var8 = var1.applicationNameOnClick;
            var6 = var1.medium;
            var1 = null;
            if(!(var1 == var12)) { _fun0004_ip = 173; continue _fun0004 }
 40:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 1;
            var3 = var15[var1];
            var14 = undefined;
            var3 = var2.bind(var14)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var15[var1];
            var1 = var2.bind(var14)(var1);
            var1 = var1.t;
            var2 = var1.x2CN/f;
            var1 = {};
            var1['username'] = var13;
            var1['usernameOnClick'] = var9;
            var1['medium'] = var6;
            var5 = {};
            var11 = _closure1_slot1;
            var10 = 2;
            var10 = var15[var10];
            var11 = var11.bind(var14)(var10);
            var10 = var11.getArticleURL;
            var7 = _closure1_slot3;
            var7 = var7.PRIVATE_CHANNEL_INTEGRATIONS;
            var7 = var10.bind(var11)(var7);
            var5['url'] = var7;
            var1['helpCenterLink'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0004_ip = 316; continue _fun0004;
 173:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 1;
            var4 = var11[var2];
            var10 = undefined;
            var4 = var3.bind(var10)(var4);
            var5 = var4.intl;
            var4 = var5.formatToParts;
            var2 = var11[var2];
            var2 = var3.bind(var10)(var2);
            var2 = var2.t;
            var3 = var2.zmc0mp;
            var2 = {};
            var2['username'] = var13;
            var12 = var12.name;
            var2['otherUsername'] = var12;
            var2['usernameOnClick'] = var9;
            var2['otherUsernameOnClick'] = var8;
            var2['medium'] = var6;
            var6 = {};
            var9 = _closure1_slot1;
            var8 = 2;
            var8 = var11[var8];
            var9 = var9.bind(var10)(var8);
            var8 = var9.getArticleURL;
            var7 = _closure1_slot3;
            var7 = var7.PRIVATE_CHANNEL_INTEGRATIONS;
            var7 = var8.bind(var9)(var7);
            var6['url'] = var7;
            var2['helpCenterLink'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 316:
            return var1;
        }
    };
    var3['getPrivateChannelIntegrationRemovedSystemMessageASTContent'] = var2;
    return var1;
})();