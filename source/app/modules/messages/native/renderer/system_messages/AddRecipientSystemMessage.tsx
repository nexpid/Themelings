// app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
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
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function AddRecipientSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var8 = var7[var3];
            var12 = var5.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var8;
            var9 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var8 = new Array(0);
            var10 = var11.bind(var12)(var10, var9, var8);
            var _closure2_slot0 = var10;
            var16 = var6.message;
            var9 = var16.author;
            var _closure2_slot1 = var9;
            var17 = var16.channel_id;
            var _closure2_slot2 = var17;
            var11 = var16.mentions;
            var8 = 0;
            var11 = var11[var8];
            var _closure2_slot3 = var11;
            var8 = var7[var3];
            var15 = var5.bind(var4)(var8);
            var14 = var15.useStateFromStores;
            var8 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var8;
            var12 = new Array(1);
            var12[0] = var11;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var14.bind(var15)(var13, var8, var12);
            var3 = var7[var3];
            var13 = var5.bind(var4)(var3);
            var8 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = new Array(1);
            var5[0] = var17;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var13)(var7, var3, var5);
            var3 = null;
            var15 = var3 != var8;
            if(!var15) { _fun0001_ip = 259; continue _fun0001 }
 240:
            var7 = _closure1_slot5;
            var5 = var7.has;
            var3 = var8.type;
            var15 = var5.bind(var7)(var3);
 259:
            _closure2_slot4 = var15;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var13 = var7[var3];
            var14 = var5.bind(var4)(var13);
            var13 = var14.useMessageAuthorWithProcessedColor;
            var13 = var13.bind(var14)(var16);
            var14 = var13.nick;
            _closure2_slot5 = var14;
            var16 = var13.colorString;
            _closure2_slot6 = var16;
            var3 = var7[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useUserAuthorWithProcessedColor;
            var3 = var3.bind(var5)(var12, var8);
            var12 = var3.nick;
            _closure2_slot7 = var12;
            var13 = var3.colorString;
            _closure2_slot8 = var13;
            var8 = _closure1_slot3;
            var5 = var8.useMemo;
            var3 = new Array(9);
            var3[0] = var17;
            var3[1] = var16;
            var3[2] = var15;
            var3[3] = var14;
            var3[4] = var13;
            var3[5] = var12;
            var3[6] = var11;
            var3[7] = var10;
            var9 = var9.id;
            var3[8] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = {};
                    var2 = _closure2_slot5;
                    var5['username'] = var2;
                    var2 = {};
                    var4 = 'bindUserMenu';
                    var2['action'] = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2['userId'] = var3;
                    var3 = _closure2_slot6;
                    var2['colorString'] = var3;
                    var6 = _closure2_slot0;
                    var7 = null;
                    var9 = 'username';
                    var3 = null;
                    if(!(var9 === var6)) { _fun0002_ip = 67; continue _fun0002 }
 63:
                    var3 = _closure2_slot6;
 67:
                    var2['linkColor'] = var3;
                    var3 = _closure2_slot6;
                    var2['roleColor'] = var3;
                    var3 = _closure2_slot0;
                    var6 = 'dot';
                    var3 = var6 === var3;
                    if(!var3) { _fun0002_ip = 104; continue _fun0002 }
 96:
                    var8 = _closure2_slot6;
                    var3 = var7 != var8;
 104:
                    var2['shouldShowRoleDot'] = var3;
                    var3 = _closure2_slot2;
                    var2['messageChannelId'] = var3;
                    var3 = true;
                    var2['medium'] = var3;
                    var5['usernameOnClick'] = var2;
                    var2 = _closure2_slot7;
                    var5['otherUsername'] = var2;
                    var2 = {};
                    var2['action'] = var4;
                    var4 = _closure2_slot3;
                    var2['userId'] = var4;
                    var4 = _closure2_slot8;
                    var2['colorString'] = var4;
                    var8 = _closure2_slot0;
                    var4 = null;
                    if(!(var9 === var8)) { _fun0002_ip = 176; continue _fun0002 }
 172:
                    var4 = _closure2_slot8;
 176:
                    var2['linkColor'] = var4;
                    var4 = _closure2_slot8;
                    var2['roleColor'] = var4;
                    var4 = _closure2_slot0;
                    var4 = var6 === var4;
                    if(!var4) { _fun0002_ip = 209; continue _fun0002 }
 201:
                    var6 = _closure2_slot8;
                    var4 = var7 != var6;
 209:
                    var2['shouldShowRoleDot'] = var4;
                    var4 = _closure2_slot2;
                    var2['messageChannelId'] = var4;
                    var2['medium'] = var3;
                    var5['otherUsernameOnClick'] = var2;
                    var1 = _closure2_slot4;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var3 = var8[var2];
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToParts;
                    var2 = var8[var2];
                    var2 = var7.bind(var6)(var2);
                    var2 = var2.t;
                    if(var1) { _fun0002_ip = 304; continue _fun0002 }
 290:
                    var1 = var2.7/Xl0d;
                    var1 = var3.bind(var4)(var1, var5);
                    _fun0002_ip = 316; continue _fun0002;
 304:
                    var2 = var2.Vej1Nz;
                    var1 = var3.bind(var4)(var2, var5);
 316:
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = 11;
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
    var2 = function createAddRecipientSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var7 = var4.message;
            var8 = var4.roleStyle;
            var6 = var7.author;
            var2 = var7.mentions;
            var1 = 0;
            var12 = var2[var1];
            var3 = _closure1_slot7;
            var1 = var3.getUser;
            var13 = var1.bind(var3)(var12);
            var5 = _closure1_slot6;
            var3 = var5.getChannel;
            var1 = var7.channel_id;
            var10 = var3.bind(var5)(var1);
            var11 = null;
            var5 = var11 != var10;
            if(!var5) { _fun0003_ip = 97; continue _fun0003 }
 78:
            var9 = _closure1_slot5;
            var3 = var9.has;
            var1 = var10.type;
            var5 = var3.bind(var9)(var1);
 97:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 6;
            var9 = var16[var1];
            var3 = undefined;
            var15 = var14.bind(var3)(var9);
            var9 = var15.getMessageAuthorWithProcessedColor;
            var9 = var9.bind(var15)(var7);
            var15 = var9.nick;
            var18 = var9.colorString;
            var19 = var9.colorStrings;
            var17 = var9.guildId;
            var1 = var16[var1];
            var9 = var14.bind(var3)(var1);
            var1 = var9.getUserAuthorWithProcessedColor;
            var9 = var1.bind(var9)(var13, var10);
            var1 = var9.nick;
            var10 = var9.colorString;
            var13 = var9.colorStrings;
            var9 = 7;
            var9 = var16[var9];
            var16 = var14.bind(var3)(var9);
            var14 = var16.isNativeMessageEligibleForEnhancedRoleColors;
            var9 = var6.id;
            var14 = var14.bind(var16)(var17, var9, var8);
            var9 = {};
            var9['username'] = var15;
            var17 = {};
            var16 = 'bindUserMenu';
            var17['action'] = var16;
            var6 = var6.id;
            var17['userId'] = var6;
            var17['colorString'] = var18;
            var6 = 'username';
            var15 = var6 === var8;
            var6 = null;
            if(!var15) { _fun0003_ip = 270; continue _fun0003 }
 267:
            var6 = var18;
 270:
            var17['linkColor'] = var6;
            var17['roleColor'] = var18;
            var6 = null;
            if(!var14) { _fun0003_ip = 288; continue _fun0003 }
 285:
            var6 = var19;
 288:
            var17['roleColors'] = var6;
            var6 = 'dot';
            var8 = var6 === var8;
            var6 = var8;
            if(!var8) { _fun0003_ip = 311; continue _fun0003 }
 307:
            var6 = var11 != var18;
 311:
            var17['shouldShowRoleDot'] = var6;
            var6 = var7.channel_id;
            var17['messageChannelId'] = var6;
            var6 = true;
            var17['medium'] = var6;
            var9['usernameOnClick'] = var17;
            var9['otherUsername'] = var1;
            var1 = {};
            var1['action'] = var16;
            var1['userId'] = var12;
            var1['colorString'] = var10;
            var12 = null;
            if(!var15) { _fun0003_ip = 366; continue _fun0003 }
 363:
            var12 = var10;
 366:
            var1['linkColor'] = var12;
            var1['roleColor'] = var10;
            var12 = null;
            if(!var14) { _fun0003_ip = 384; continue _fun0003 }
 381:
            var12 = var13;
 384:
            var1['roleColors'] = var12;
            if(!var8) { _fun0003_ip = 396; continue _fun0003 }
 392:
            var8 = var11 != var10;
 396:
            var1['shouldShowRoleDot'] = var8;
            var7 = var7.channel_id;
            var1['messageChannelId'] = var7;
            var1['medium'] = var6;
            var9['otherUsernameOnClick'] = var1;
            var1 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 8;
            var7 = var11[var6];
            var7 = var10.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var6 = var11[var6];
            var6 = var10.bind(var3)(var6);
            var6 = var6.t;
            if(var5) { _fun0003_ip = 485; continue _fun0003 }
 471:
            var5 = var6.7/Xl0d;
            var5 = var7.bind(var8)(var5, var9);
            _fun0003_ip = 497; continue _fun0003;
 485:
            var6 = var6.Vej1Nz;
            var5 = var7.bind(var8)(var6, var9);
 497:
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var22 = var2.bind(var3)(var4);
            var23 = var1;
            var2 = copyDataProperties(var23, var22);
            return var1;
        }
    };
    var3['createAddRecipientSystemMessage'] = var2;
    return var1;
})();