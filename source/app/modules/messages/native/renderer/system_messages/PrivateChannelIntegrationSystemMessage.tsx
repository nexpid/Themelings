// app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function PrivateChannelIntegrationSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.row;
            var10 = var1.type;
            var _closure2_slot0 = var10;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = var7.message;
            var _closure2_slot1 = var3;
            var6 = var3.author;
            var _closure2_slot2 = var6;
            var12 = var3.application;
            var _closure2_slot3 = var12;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var8 = var8.bind(var4)(var5);
            var5 = var8.useNullableMessageAuthor;
            var5 = var5.bind(var8)(var3);
            var5 = var5.nick;
            var _closure2_slot4 = var5;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var13 = var3.channel_id;
            var8 = new Array(2);
            var8[0] = var13;
            var6 = var6.id;
            var8[1] = var6;
            var6 = function() {
                var1 = {};
                var2 = 'bindUserMenu';
                var1['action'] = var2;
                var3 = _closure2_slot2;
                var3 = var3.id;
                var1['userId'] = var3;
                var2 = _closure2_slot1;
                var2 = var2.channel_id;
                var1['messageChannelId'] = var2;
                var2 = true;
                var1['medium'] = var2;
                return var1;
            };
            var9 = var9.bind(var11)(var6, var8);
            var _closure2_slot5 = var9;
            var6 = null;
            var6 = var6 == var12;
            var13 = undefined;
            if(var6) { _fun0001_ip = 167; continue _fun0001 }
 161:
            var13 = var12.bot;
 167:
            _closure2_slot6 = var13;
            var8 = _closure1_slot3;
            var11 = var8.useMemo;
            var6 = new Array(2);
            var6[0] = var13;
            var3 = var3.channel_id;
            var6[1] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    if(!var2) { _fun0002_ip = 67; continue _fun0002 }
 18:
                    var2 = {};
                    var4 = 'bindUserMenu';
                    var2['action'] = var4;
                    var4 = _closure2_slot6;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.channel_id;
                    var2['messageChannelId'] = var3;
                    var3 = true;
                    var2['medium'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            var11 = var11.bind(var8)(var3, var6);
            _closure2_slot7 = var11;
            var6 = var8.useMemo;
            var3 = new Array(5);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var5;
            var3[3] = var10;
            var3[4] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot4;
                    var2 = var2.PRIVATE_CHANNEL_INTEGRATION_ADDED;
                    if(!(var2 !== var3)) { _fun0003_ip = 151; continue _fun0003 }
 27:
                    var2 = _closure1_slot4;
                    var2 = var2.PRIVATE_CHANNEL_INTEGRATION_REMOVED;
                    if(!(var2 !== var3)) { _fun0003_ip = 80; continue _fun0003 }
 41:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.assertNever;
                    var3 = _closure2_slot0;
                    var3 = var5.bind(var6)(var3);
                    return var2;
 80:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                    var2 = {};
                    var6 = _closure2_slot3;
                    var2['application'] = var6;
                    var6 = _closure2_slot4;
                    var2['username'] = var6;
                    var6 = _closure2_slot5;
                    var2['usernameOnClick'] = var6;
                    var6 = _closure2_slot7;
                    var2['applicationNameOnClick'] = var6;
                    var2 = var3.bind(var5)(var2);
                    return var2;
 151:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1['application'] = var5;
                    var5 = _closure2_slot4;
                    var1['username'] = var5;
                    var5 = _closure2_slot5;
                    var1['usernameOnClick'] = var5;
                    var4 = _closure2_slot7;
                    var1['applicationNameOnClick'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var7;
            var1['content'] = var6;
            var1['username'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createPrivateChannelIntegrationSystemMessage(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var6 = var4.message;
            var1 = var6.author;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var7.bind(var3)(var5);
            var5 = var7.getMessageAuthor;
            var5 = var5.bind(var7)(var6);
            var11 = var5.nick;
            var10 = {};
            var7 = 'bindUserMenu';
            var10['action'] = var7;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var6.channel_id;
            var10['messageChannelId'] = var1;
            var5 = true;
            var10['medium'] = var5;
            var12 = var6.application;
            var8 = null;
            var9 = var8 == var12;
            var1 = undefined;
            if(var9) { _fun0004_ip = 116; continue _fun0004 }
 110:
            var1 = var12.bot;
 116:
            var1 = var8 != var1;
            var9 = undefined;
            if(!var1) { _fun0004_ip = 164; continue _fun0004 }
 125:
            var1 = {};
            var1['action'] = var7;
            var7 = var12.bot;
            var7 = var7.id;
            var1['userId'] = var7;
            var6 = var6.channel_id;
            var1['messageChannelId'] = var6;
            var1['medium'] = var5;
            var9 = var1;
 164:
            var1 = {};
            var5 = _closure1_slot4;
            var6 = var5.PRIVATE_CHANNEL_INTEGRATION_ADDED;
            var5 = arg2;
            if(!(var5 !== var6)) { _fun0004_ip = 236; continue _fun0004 }
 183:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 4;
            var5 = var7[var5];
            var7 = var6.bind(var3)(var5);
            var6 = var7.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
            var5 = {};
            var5['application'] = var12;
            var5['username'] = var11;
            var5['usernameOnClick'] = var10;
            var5['applicationNameOnClick'] = var9;
            var5 = var6.bind(var7)(var5);
            _fun0004_ip = 287; continue _fun0004;
 236:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var8 = var7.bind(var3)(var6);
            var7 = var8.getPrivateChannelIntegrationAddedSystemMessageASTContent;
            var6 = {};
            var6['application'] = var12;
            var6['username'] = var11;
            var6['usernameOnClick'] = var10;
            var6['applicationNameOnClick'] = var9;
            var5 = var7.bind(var8)(var6);
 287:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var13 = var2.bind(var3)(var4);
            var14 = var1;
            var2 = copyDataProperties(var14, var13);
            return var1;
        }
    };
    var3['createPrivateChannelIntegrationSystemMessage'] = var2;
    return var1;
})();