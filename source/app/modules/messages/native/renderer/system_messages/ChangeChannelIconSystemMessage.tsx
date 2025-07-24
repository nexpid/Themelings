// app/modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
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
    var4 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ChangeChannelIconSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var10 = var6.message;
            var _closure2_slot0 = var10;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var10);
            var11 = var3.nick;
            var _closure2_slot1 = var11;
            var7 = _closure1_slot0;
            var3 = 8;
            var3 = var8[var3];
            var12 = var7.bind(var4)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.channel_id;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 65; continue _fun0002 }
 40:
                    var3 = var4.isGroupDM;
                    var3 = var1 == var3;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 65; continue _fun0002 }
 55:
                    var3 = var4.isGroupDM;
                    var2 = var3.bind(var4)();
 65:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 75; continue _fun0002 }
 72:
                    var1 = var2;
 75:
                    return var1;
                }
            };
            var3 = var9.bind(var12)(var5, var3);
            var5 = 5;
            var5 = var8[var5];
            var12 = var7.bind(var4)(var5);
            var9 = var12.useIsGdmBedazzleExperimentEnabled;
            var8 = var10.channel_id;
            var7 = {};
            var7['autoTrackExposure'] = var3;
            var5 = 'NativeChangeChannelIconSystemMessage';
            var9 = var9.bind(var12)(var5, var8, var7);
            if(!var9) { _fun0001_ip = 163; continue _fun0001 }
 160:
            var9 = var3;
 163:
            _closure2_slot2 = var9;
            var7 = _closure1_slot3;
            var8 = var7.useCallback;
            var3 = var10.channel_id;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
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
            var8 = var8.bind(var7)(var3, var5);
            _closure2_slot3 = var8;
            var5 = var7.useMemo;
            var3 = new Array(5);
            var3[0] = var11;
            var11 = var10.author;
            var11 = var11.id;
            var3[1] = var11;
            var10 = var10.channel_id;
            var3[2] = var10;
            var3[3] = var9;
            var3[4] = var8;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                    var2 = 6;
                    var4 = var9[var2];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToParts;
                    var2 = var9[var2];
                    var2 = var8.bind(var3)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0003_ip = 137; continue _fun0003 }
 108:
                    var3 = var2.wypJZ2;
                    var1 = {};
                    var8 = _closure2_slot1;
                    var1['username'] = var8;
                    var1['usernameOnClick'] = var7;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0003_ip = 173; continue _fun0003;
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
    var2 = function createChangeChannelIconSystemMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var1 = var12.channel_id;
            var6 = var5.bind(var6)(var1);
            var13 = null;
            var5 = var13 == var6;
            var1 = undefined;
            if(var5) { _fun0004_ip = 176; continue _fun0004 }
 151:
            var5 = var6.isGroupDM;
            var5 = var13 == var5;
            var1 = undefined;
            if(var5) { _fun0004_ip = 176; continue _fun0004 }
 166:
            var5 = var6.isGroupDM;
            var1 = var5.bind(var6)();
 176:
            var5 = var13 != var1;
            if(!var5) { _fun0004_ip = 186; continue _fun0004 }
 183:
            var5 = var1;
 186:
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var16 = var7.bind(var3)(var6);
            var9 = var16.isGdmBedazzleExperimentEnabled;
            var8 = var12.channel_id;
            var7 = {};
            var7['autoTrackExposure'] = var5;
            var6 = 'createChangeChannelIconSystemMessage';
            var6 = var9.bind(var16)(var6, var8, var7);
            if(!var6) { _fun0004_ip = 243; continue _fun0004 }
 240:
            if(var5) { _fun0004_ip = 313; continue _fun0004 }
 243:
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
            var6 = var5.wypJZ2;
            var5 = {};
            var5['username'] = var15;
            var5['usernameOnClick'] = var10;
            var5 = var7.bind(var8)(var6, var5);
            _fun0004_ip = 433; continue _fun0004;
 313:
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 6;
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
            if(var15) { _fun0004_ip = 402; continue _fun0004 }
 396:
            var13 = var14.linkColor;
 402:
            var10['linkColor'] = var13;
            var12 = var12.channel_id;
            var10['messageChannelId'] = var12;
            var10['medium'] = var11;
            var6['onEditGroup'] = var10;
            var5 = var8.bind(var9)(var7, var6);
 433:
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
    var3['createChangeChannelIconSystemMessage'] = var2;
    return var1;
})();