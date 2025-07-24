// app/modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx
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
    var4 = 11;
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
            var11 = var6.message;
            var _closure2_slot0 = var11;
            var1 = var11.getChannelId;
            var13 = var1.bind(var11)();
            var _closure2_slot1 = var13;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var7.bind(var8)(var5, var3);
            var7 = null;
            var3 = var7 == var9;
            var5 = undefined;
            if(var3) { _fun0001_ip = 141; continue _fun0001 }
 116:
            var3 = var9.isGroupDM;
            var3 = var7 == var3;
            var5 = undefined;
            if(var3) { _fun0001_ip = 141; continue _fun0001 }
 131:
            var3 = var9.isGroupDM;
            var5 = var3.bind(var9)();
 141:
            var3 = var7 != var5;
            if(!var3) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var3 = var5;
 151:
            var8 = var7 == var9;
            var5 = undefined;
            if(var8) { _fun0001_ip = 185; continue _fun0001 }
 160:
            var8 = var9.isForumPost;
            var8 = var7 == var8;
            var5 = undefined;
            if(var8) { _fun0001_ip = 185; continue _fun0001 }
 175:
            var8 = var9.isForumPost;
            var5 = var8.bind(var9)();
 185:
            var10 = var7 != var5;
            if(!var10) { _fun0001_ip = 195; continue _fun0001 }
 192:
            var10 = var5;
 195:
            _closure2_slot2 = var10;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)(var11);
            var12 = var5.nick;
            _closure2_slot3 = var12;
            var7 = _closure1_slot0;
            var5 = 5;
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.useIsGdmBedazzleExperimentEnabled;
            var7 = {};
            var7['autoTrackExposure'] = var3;
            var5 = 'NativeChangeChannelNameSystemMessage';
            var9 = var8.bind(var9)(var5, var13, var7);
            if(!var9) { _fun0001_ip = 282; continue _fun0001 }
 279:
            var9 = var3;
 282:
            _closure2_slot4 = var9;
            var7 = _closure1_slot3;
            var8 = var7.useCallback;
            var5 = new Array(1);
            var5[0] = var13;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var4 = _closure2_slot1;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var8.bind(var7)(var3, var5);
            _closure2_slot5 = var8;
            var5 = var7.useMemo;
            var3 = new Array(7);
            var3[0] = var13;
            var3[1] = var12;
            var12 = var11.author;
            var12 = var12.id;
            var3[2] = var12;
            var11 = var11.content;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var9;
            var3[6] = var8;
            var2 = function() {
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
                    var10 = _closure2_slot4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 6;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToParts;
                    if(var10) { _fun0002_ip = 173; continue _fun0002 }
 93:
                    var10 = _closure2_slot2;
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
                    var11 = _closure2_slot3;
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
                    var8 = _closure2_slot3;
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
            var5 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 10;
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
            var1 = var12 == var6;
            var5 = undefined;
            if(var1) { _fun0003_ip = 176; continue _fun0003 }
 151:
            var1 = var6.isGroupDM;
            var1 = var12 == var1;
            var5 = undefined;
            if(var1) { _fun0003_ip = 176; continue _fun0003 }
 166:
            var1 = var6.isGroupDM;
            var5 = var1.bind(var6)();
 176:
            var1 = var12 != var5;
            if(!var1) { _fun0003_ip = 186; continue _fun0003 }
 183:
            var1 = var5;
 186:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var9 = var6.bind(var3)(var5);
            var8 = var9.isGdmBedazzleExperimentEnabled;
            var7 = var11.channel_id;
            var6 = {};
            var6['autoTrackExposure'] = var1;
            var5 = 'createChangeChannelNameSystemMessage';
            var5 = var8.bind(var9)(var5, var7, var6);
            if(!var5) { _fun0003_ip = 241; continue _fun0003 }
 238:
            var5 = var1;
 241:
            var6 = var11.content;
            var1 = '';
            if(!(var1 !== var6)) { _fun0003_ip = 287; continue _fun0003 }
 254:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.rk0be3;
            _fun0003_ip = 320; continue _fun0003;
 287:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var9 = var1.hToFyc;
 320:
            var1 = {};
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var16 = 6;
            var6 = var6[var16];
            var6 = var7.bind(var3)(var6);
            var8 = var6.intl;
            var7 = var8.formatToParts;
            if(var5) { _fun0003_ip = 430; continue _fun0003 }
 356:
            var6 = var4.isForumPost;
            var15 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var16];
            var5 = var15.bind(var3)(var5);
            var5 = var5.t;
            if(var6) { _fun0003_ip = 395; continue _fun0003 }
 387:
            var6 = var5.XCPMEB;
            _fun0003_ip = 401; continue _fun0003;
 395:
            var6 = var5.qa0e/v;
 401:
            var5 = {};
            var5['username'] = var14;
            var5['usernameOnClick'] = var10;
            var15 = var11.content;
            var5['channelName'] = var15;
            var5 = var7.bind(var8)(var6, var5);
            _fun0003_ip = 504; continue _fun0003;
 430:
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
            if(var14) { _fun0003_ip = 478; continue _fun0003 }
 472:
            var12 = var13.linkColor;
 478:
            var10['linkColor'] = var12;
            var11 = var11.channel_id;
            var10['messageChannelId'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var7.bind(var8)(var9, var6);
 504:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var18 = var2.bind(var3)(var4);
            var19 = var1;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createChangeChannelNameSystemMessage'] = var2;
    return var1;
})();