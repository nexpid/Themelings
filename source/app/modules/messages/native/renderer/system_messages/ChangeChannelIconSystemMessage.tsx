// app/modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChangeChannelIconSystemMessage(arg1) {
        var1 = arg1;
        var6 = var1.row;
        var12 = var6.message;
        var _closure2_slot0 = var12;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 4;
        var5 = var7[var4];
        var4 = undefined;
        var5 = var2.bind(var4)(var5);
        var5 = var5.bind(var4)(var12);
        var13 = var5.nick;
        var _closure2_slot1 = var13;
        var8 = _closure1_slot0;
        var5 = 7;
        var5 = var7[var5];
        var10 = var8.bind(var4)(var5);
        var9 = var10.useStateFromStores;
        var5 = _closure1_slot4;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var4;
                var2 = undefined;
                if(var3) { _fun0001_ip = 65; continue _fun0001 }
 40:
                var3 = var4.isGroupDM;
                var3 = var1 == var3;
                var2 = undefined;
                if(var3) { _fun0001_ip = 65; continue _fun0001 }
 55:
                var3 = var4.isGroupDM;
                var2 = var3.bind(var4)();
 65:
                var1 = var1 != var2;
                if(!var1) { _fun0001_ip = 75; continue _fun0001 }
 72:
                var1 = var2;
 75:
                return var1;
            }
        };
        var11 = var9.bind(var10)(var8, var5);
        var _closure2_slot2 = var11;
        var9 = _closure1_slot3;
        var10 = var9.useCallback;
        var5 = var12.channel_id;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = {};
            var4 = _closure2_slot0;
            var4 = var4.channel_id;
            var2['channelId'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10 = var10.bind(var9)(var5, var8);
        var _closure2_slot3 = var10;
        var8 = var9.useMemo;
        var5 = new Array(5);
        var5[0] = var13;
        var13 = var12.author;
        var13 = var13.id;
        var5[1] = var13;
        var12 = var12.channel_id;
        var5[2] = var12;
        var5[3] = var11;
        var5[4] = var10;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var7 = {};
                var1 = 'bindUserMenu';
                var7['action'] = var1;
                var1 = _closure2_slot0;
                var2 = var1.author;
                var2 = var2.id;
                var7['userId'] = var2;
                var1 = var1.channel_id;
                var7['messageChannelId'] = var1;
                var1 = true;
                var7['medium'] = var1;
                var1 = _closure2_slot2;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 5;
                var4 = var9[var2];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToParts;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                if(var1) { _fun0002_ip = 137; continue _fun0002 }
 108:
                var3 = var2.wypJZ2;
                var1 = {};
                var8 = _closure2_slot1;
                var1['username'] = var8;
                var1['usernameOnClick'] = var7;
                var1 = var4.bind(var5)(var3, var1);
                _fun0002_ip = 173; continue _fun0002;
 137:
                var3 = var2.hfeYXF;
                var2 = {};
                var8 = _closure2_slot1;
                var2['username'] = var8;
                var2['usernameOnClick'] = var7;
                var6 = _closure2_slot3;
                var2['onEditGroup'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 173:
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
    var2 = function createChangeChannelIconSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var12 = var4.message;
            var5 = var4.theme;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var14 = var1.bind(var3)(var5);
            var5 = _closure1_slot0;
            var1 = 4;
            var1 = var6[var1];
            var5 = var5.bind(var3)(var1);
            var1 = var5.getMessageAuthor;
            var1 = var1.bind(var5)(var12);
            var15 = var1.nick;
            var10 = {};
            var1 = 'bindUserMenu';
            var10['action'] = var1;
            var1 = var12.author;
            var1 = var1.id;
            var10['userId'] = var1;
            var1 = var12.channel_id;
            var10['messageChannelId'] = var1;
            var11 = true;
            var10['medium'] = var11;
            var1 = {};
            var7 = _closure1_slot4;
            var6 = var7.getChannel;
            var5 = var12.channel_id;
            var7 = var6.bind(var7)(var5);
            var13 = null;
            var6 = var13 == var7;
            var5 = undefined;
            if(var6) { _fun0003_ip = 177; continue _fun0003 }
 152:
            var6 = var7.isGroupDM;
            var6 = var13 == var6;
            var5 = undefined;
            if(var6) { _fun0003_ip = 177; continue _fun0003 }
 167:
            var6 = var7.isGroupDM;
            var5 = var6.bind(var7)();
 177:
            if(!(var13 != var5)) { _fun0003_ip = 184; continue _fun0003 }
 181:
            if(var5) { _fun0003_ip = 254; continue _fun0003 }
 184:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var7 = var9[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.wypJZ2;
            var5 = {};
            var5['username'] = var15;
            var5['usernameOnClick'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            _fun0003_ip = 374; continue _fun0003;
 254:
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 5;
            var8 = var16[var6];
            var8 = var7.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var16[var6];
            var6 = var7.bind(var3)(var6);
            var6 = var6.t;
            var7 = var6.hfeYXF;
            var6 = {};
            var6['username'] = var15;
            var6['usernameOnClick'] = var10;
            var10 = {};
            var15 = 'bindOpenGdmCustomizeActionSheet';
            var10['action'] = var15;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0003_ip = 343; continue _fun0003 }
 337:
            var13 = var14.linkColor;
 343:
            var10['linkColor'] = var13;
            var12 = var12.channel_id;
            var10['messageChannelId'] = var12;
            var10['medium'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 374:
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
    var3['createChangeChannelIconSystemMessage'] = var2;
    return var1;
})();