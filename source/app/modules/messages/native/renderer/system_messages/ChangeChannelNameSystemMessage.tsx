// app/modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChangeChannelNameSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var13 = var6.message;
            var _closure2_slot0 = var13;
            var1 = var13.getChannelId;
            var15 = var1.bind(var13)();
            var _closure2_slot1 = var15;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var8 = var5.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var7.bind(var8)(var5, var2);
            var5 = null;
            var7 = var5 == var8;
            var2 = undefined;
            if(var7) { _fun0001_ip = 141; continue _fun0001 }
 116:
            var7 = var8.isGroupDM;
            var7 = var5 == var7;
            var2 = undefined;
            if(var7) { _fun0001_ip = 141; continue _fun0001 }
 131:
            var7 = var8.isGroupDM;
            var2 = var7.bind(var8)();
 141:
            var11 = var5 != var2;
            if(!var11) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var11 = var2;
 151:
            _closure2_slot2 = var11;
            var7 = var5 == var8;
            var2 = undefined;
            if(var7) { _fun0001_ip = 189; continue _fun0001 }
 164:
            var7 = var8.isForumPost;
            var7 = var5 == var7;
            var2 = undefined;
            if(var7) { _fun0001_ip = 189; continue _fun0001 }
 179:
            var7 = var8.isForumPost;
            var2 = var7.bind(var8)();
 189:
            var12 = var5 != var2;
            if(!var12) { _fun0001_ip = 199; continue _fun0001 }
 196:
            var12 = var2;
 199:
            _closure2_slot3 = var12;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 4;
            var5 = var7[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var13);
            var14 = var5.nick;
            _closure2_slot4 = var14;
            var9 = _closure1_slot3;
            var10 = var9.useCallback;
            var8 = new Array(1);
            var8[0] = var15;
            var5 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot1;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10 = var10.bind(var9)(var5, var8);
            _closure2_slot5 = var10;
            var8 = var9.useMemo;
            var5 = new Array(7);
            var5[0] = var15;
            var5[1] = var14;
            var14 = var13.author;
            var14 = var14.id;
            var5[2] = var14;
            var13 = var13.content;
            var5[3] = var13;
            var5[4] = var12;
            var5[5] = var11;
            var5[6] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = {};
                    var1 = 'bindUserMenu';
                    var7['action'] = var1;
                    var1 = _closure2_slot0;
                    var1 = var1.author;
                    var1 = var1.id;
                    var7['userId'] = var1;
                    var1 = _closure2_slot1;
                    var7['messageChannelId'] = var1;
                    var1 = true;
                    var7['medium'] = var1;
                    var10 = _closure2_slot2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 5;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToParts;
                    if(var10) { _fun0002_ip = 173; continue _fun0002 }
 93:
                    var10 = _closure2_slot3;
                    var11 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var2];
                    var1 = var11.bind(var3)(var1);
                    var1 = var1.t;
                    if(var10) { _fun0002_ip = 130; continue _fun0002 }
 122:
                    var10 = var1.XCPMEB;
                    _fun0002_ip = 136; continue _fun0002;
 130:
                    var10 = var1.qa0e/v;
 136:
                    var1 = {};
                    var11 = _closure2_slot4;
                    var1['username'] = var11;
                    var1['usernameOnClick'] = var7;
                    var11 = _closure2_slot0;
                    var11 = var11.content;
                    var1['channelName'] = var11;
                    var1 = var4.bind(var5)(var10, var1);
                    _fun0002_ip = 237; continue _fun0002;
 173:
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.rk0be3;
                    var2 = {};
                    var8 = _closure2_slot4;
                    var2['username'] = var8;
                    var2['usernameOnClick'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var7.content;
                    var2['channelName'] = var7;
                    var6 = _closure2_slot5;
                    var2['onEditGroup'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 237:
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
        }
    };
    var3['default'] = var4;
    var2 = function createChangeChannelNameSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var11 = var4.message;
            var5 = var4.theme;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var13 = var1.bind(var3)(var5);
            var5 = _closure1_slot0;
            var1 = 4;
            var1 = var6[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthor;
            var1 = var1.bind(var5)(var11);
            var14 = var1.nick;
            var10 = {};
            var1 = 'bindUserMenu';
            var10['action'] = var1;
            var1 = var11.author;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var11.channel_id;
            var10['messageChannelId'] = var1;
            var1 = true;
            var10['medium'] = var1;
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var1 = var11.channel_id;
            var6 = var5.bind(var6)(var1);
            var12 = null;
            var5 = var12 == var6;
            var1 = undefined;
            if(var5) { _fun0003_ip = 175; continue _fun0003 }
 150:
            var5 = var6.isGroupDM;
            var5 = var12 == var5;
            var1 = undefined;
            if(var5) { _fun0003_ip = 175; continue _fun0003 }
 165:
            var5 = var6.isGroupDM;
            var1 = var5.bind(var6)();
 175:
            var5 = var12 != var1;
            if(!var5) { _fun0003_ip = 185; continue _fun0003 }
 182:
            var5 = var1;
 185:
            var6 = var11.content;
            var1 = '';
            if(!(var1 !== var6)) { _fun0003_ip = 231; continue _fun0003 }
 198:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.rk0be3;
            _fun0003_ip = 264; continue _fun0003;
 231:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 5;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.hToFyc;
 264:
            var1 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 5;
            var6 = var6[var16];
            var6 = var7.bind(var3)(var6);
            var8 = var6.intl;
            var7 = var8.formatToParts;
            if(var5) { _fun0003_ip = 374; continue _fun0003 }
 300:
            var6 = var4.isForumPost;
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var16];
            var5 = var15.bind(var3)(var5);
            var5 = var5.t;
            if(var6) { _fun0003_ip = 339; continue _fun0003 }
 331:
            var6 = var5.XCPMEB;
            _fun0003_ip = 345; continue _fun0003;
 339:
            var6 = var5.qa0e/v;
 345:
            var5 = {};
            var5['username'] = var14;
            var5['usernameOnClick'] = var10;
            var15 = var11.content;
            var5['channelName'] = var15;
            var5 = var7.bind(var8)(var6, var5);
            _fun0003_ip = 448; continue _fun0003;
 374:
            var6 = {};
            var6['username'] = var14;
            var6['usernameOnClick'] = var10;
            var10 = var11.content;
            var6['channelName'] = var10;
            var10 = {};
            var14 = 'bindOpenGdmCustomizeActionSheet';
            var10['action'] = var14;
            var14 = var12 == var13;
            var12 = undefined;
            if(var14) { _fun0003_ip = 422; continue _fun0003 }
 416:
            var12 = var13.linkColor;
 422:
            var10['linkColor'] = var12;
            var11 = var11.channel_id;
            var10['messageChannelId'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var7.bind(var8)(var9, var6);
 448:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var17 = var2.bind(var3)(var4);
            var18 = var1;
            var2 = copyDataProperties(var18, var17);
            return var1;
        }
    };
    var3['createChangeChannelNameSystemMessage'] = var2;
    return var1;
})();