// app/modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function StageEndSystemMessage(arg1) {
        var1 = arg1;
        var6 = var1.row;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 7;
        var3 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var3;
        var8 = function() {
            var1 = _closure1_slot4;
            var1 = var1.roleStyle;
            return var1;
        };
        var3 = new Array(0);
        var10 = var10.bind(var11)(var9, var8, var3);
        var _closure2_slot0 = var10;
        var12 = var6.message;
        var _closure2_slot1 = var12;
        var9 = var12.author;
        var _closure2_slot2 = var9;
        var3 = 3;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.useMessageAuthorWithProcessedColor;
        var3 = var3.bind(var5)(var12);
        var11 = var3.nick;
        var _closure2_slot3 = var11;
        var13 = var3.colorString;
        var _closure2_slot4 = var13;
        var8 = _closure1_slot3;
        var5 = var8.useMemo;
        var3 = new Array(6);
        var3[0] = var13;
        var13 = var12.channel_id;
        var3[1] = var13;
        var12 = var12.content;
        var3[2] = var12;
        var3[3] = var11;
        var3[4] = var10;
        var9 = var9.id;
        var3[5] = var9;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.formatToParts;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.vMJhvL;
                var1 = {};
                var6 = _closure2_slot3;
                var1['username'] = var6;
                var6 = {};
                var7 = 'bindUserMenu';
                var6['action'] = var7;
                var7 = _closure2_slot2;
                var7 = var7.id;
                var6['userId'] = var7;
                var9 = _closure2_slot0;
                var8 = 'username';
                var7 = null;
                if(!(var8 === var9)) { _fun0001_ip = 112; continue _fun0001 }
 108:
                var7 = _closure2_slot4;
 112:
                var6['linkColor'] = var7;
                var5 = _closure2_slot1;
                var7 = var5.channel_id;
                var6['messageChannelId'] = var7;
                var7 = true;
                var6['medium'] = var7;
                var1['usernameOnClick'] = var6;
                var5 = var5.content;
                var1['topic'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var1 = 8;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['row'] = var6;
        var1['content'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function createStageEndSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var9 = var4.message;
            var17 = var4.roleStyle;
            var11 = var9.author;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 3;
            var1 = var14[var1];
            var3 = undefined;
            var5 = var6.bind(var3)(var1);
            var1 = var5.getMessageAuthorWithProcessedColor;
            var1 = var1.bind(var5)(var9);
            var10 = var1.nick;
            var15 = var1.colorString;
            var12 = var1.colorStrings;
            var8 = var1.guildId;
            var1 = 4;
            var1 = var14[var1];
            var7 = var6.bind(var3)(var1);
            var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
            var1 = var11.id;
            var13 = var5.bind(var7)(var8, var1, var17);
            var1 = {};
            var5 = 5;
            var7 = var14[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var14[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.vMJhvL;
            var5 = {};
            var5['username'] = var10;
            var10 = {};
            var14 = 'bindUserMenu';
            var10['action'] = var14;
            var11 = var11.id;
            var10['userId'] = var11;
            var16 = 'username';
            var14 = null;
            if(!(var16 === var17)) { _fun0002_ip = 194; continue _fun0002 }
 191:
            var14 = var15;
 194:
            var10['linkColor'] = var14;
            var11 = null;
            if(!var13) { _fun0002_ip = 207; continue _fun0002 }
 204:
            var11 = var12;
 207:
            var10['roleColors'] = var11;
            var11 = var9.channel_id;
            var10['messageChannelId'] = var11;
            var11 = true;
            var10['medium'] = var11;
            var5['usernameOnClick'] = var10;
            var9 = var9.content;
            var5['topic'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var19 = var2.bind(var3)(var4);
            var20 = var1;
            var2 = copyDataProperties(var20, var19);
            return var1;
        }
    };
    var3['createStageEndSystemMessage'] = var2;
    return var1;
})();