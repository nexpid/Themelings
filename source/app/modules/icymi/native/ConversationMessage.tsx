// app/modules/icymi/native/ConversationMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot8 = var7;
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9['gap'] = var13;
    var4['messageContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['messageContent'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['marginTop'] = var10;
    var10 = 'none';
    var9['pointerEvents'] = var10;
    var4['emojiContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ConversationMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.message;
            var _closure2_slot0 = var3;
            var16 = var1.channel;
            var _closure2_slot1 = var16;
            var21 = var1.showTimestamps;
            var19 = var1.muted;
            var4 = undefined;
            if(!(var19 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var19 = false;
case 2:
            var _closure2_slot2 = var4;
            var1 = _closure1_slot12;
            var13 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var1 = var6[var3];
            var9 = var5.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot7;
                    var4 = var5.getMessage;
                    var1 = _closure2_slot0;
                    var3 = var1.channel_id;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var1);
                    var3 = null;
                    if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot0;
case 4:
                    return var1;
                }
            };
            var14 = var8.bind(var9)(var7, var1);
            _closure2_slot2 = var14;
            var1 = var6[var3];
            var9 = var5.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getMember;
                var2 = _closure2_slot1;
                var2 = var2.guild_id;
                var1 = _closure2_slot2;
                var1 = var1.author;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var3 = var6[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var6.bind(var7)(var5, var3);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = var14.attachments;
            var7 = var3.length;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = var14.content;
            var3[1] = var7;
            var7 = var14.embeds;
            var3[2] = var7;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.embeds;
                    var2 = var1.length;
                    var1 = 1;
                    var2 = var1 !== var2;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = _closure2_slot2;
                    var1 = var1.attachments;
                    var4 = var1.length;
                    var1 = 0;
                    var2 = var4 > var1;
case 6:
                    var1 = !var2;
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure2_slot2;
                    var2 = var2.embeds;
                    var5 = 0;
                    var2 = var2[var5];
                    var4 = var2.type;
                    var2 = _closure1_slot9;
                    var2 = var2.GIFV;
                    var2 = var4 === var2;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var4 = _closure2_slot2;
                    var4 = var4.embeds;
                    var4 = var4[var5];
                    var4 = var4.url;
                    var3 = _closure2_slot2;
                    var3 = var3.content;
                    var2 = var4 === var3;
case 10:
                    var1 = var2;
case 8:
                    return var1;
                }
            };
            var18 = var5.bind(var6)(var2, var3);
            var8 = null;
            var2 = var8 == var1;
            var22 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var22 = var1.colorString;
case 12:
            if(!(var8 == var22)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var22 = _closure1_slot8;
case 14:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var5 = var9.bind(var4)(var1);
            var3 = var5.extractMediaSourcesFromMessage;
            var30 = var16.guild_id;
            var1 = 11;
            var1 = var7[var1];
            var1 = var9.bind(var4)(var1);
            var29 = var1.GRAVITY_VALID_EMBED_TYPES;
            var33 = var5;
            var32 = var14;
            var31 = var14;
            var11 = var33[var3](var32, var31, var30, var29, var28);
            var1 = 12;
            var1 = var7[var1];
            var6 = var9.bind(var4)(var1);
            var5 = var6.useName;
            var3 = var16.guild_id;
            var2 = var16.id;
            var1 = var14.author;
            var20 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.messageContainer;
            var1['style'] = var5;
            var10 = _closure1_slot10;
            var6 = _closure1_slot1;
            var17 = 13;
            var5 = var7[var17];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var23 = var14.author;
            var5['user'] = var23;
            var17 = var7[var17];
            var17 = var9.bind(var4)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.REFRESH_MEDIUM_32;
            var5['size'] = var17;
            var17 = var16.guild_id;
            var5['guildId'] = var17;
            var6 = var10.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var10 = var13.messageContent;
            var6['style'] = var10;
            var17 = 14;
            var7 = var7[var17];
            var7 = var9.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-strong'};
            var10 = {};
            var10['color'] = var22;
            var7['style'] = var10;
            var10 = new Array(2);
            var10[0] = var20;
            var20 = null;
            if(!var21) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var23 = _closure1_slot11;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = var28[var17];
            var21 = var25.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var24 = 15;
            var24 = var28[var24];
            var26 = var25.bind(var4)(var24);
            var25 = var26.getRelativeTimestamp;
            var27 = _closure1_slot1;
            var24 = 16;
            var24 = var28[var24];
            var28 = var27.bind(var4)(var24);
            var27 = var28.extractTimestamp;
            var24 = var14.id;
            var24 = var27.bind(var28)(var24);
            var25 = var25.bind(var26)(var24);
            var24 = ['   '];
            var24[1] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 16:
            var10[1] = var20;
            var7['children'] = var10;
            var9 = var3.bind(var4)(var9, var7);
            var7 = new Array(4);
            var7[0] = var9;
            var9 = var14.content;
            var9 = var9.length;
            var10 = 0;
            var9 = var9 > var10;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = !var18;
case 18:
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var20 = _closure1_slot10;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = var23[var17];
            var17 = var18.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-md/normal', 'lineClamp': 5, 'color': 'text-strong'};
            var22 = _closure1_slot1;
            var21 = 17;
            var21 = var23[var21];
            var24 = var22.bind(var4)(var21);
            var23 = var24.parseInlineReply;
            var22 = var14.content;
            var21 = true;
            var21 = var23.bind(var24)(var22, var21);
            var17['children'] = var21;
            var9 = var20.bind(var4)(var18, var17);
case 20:
            var7[1] = var9;
            var9 = var8 != var11;
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = var11.length;
            var9 = var11 > var10;
case 22:
            if(!var9) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var18 = _closure1_slot10;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var11 = 18;
            var11 = var20[var11];
            var11 = var17.bind(var4)(var11);
            var17 = var11.MediaOnlyRowPreview;
            var11 = {};
            var11['message'] = var14;
            var11['muted'] = var19;
            var19 = 2;
            var11['lineClamp'] = var19;
            var9 = var18.bind(var4)(var17, var11);
case 24:
            var7[2] = var9;
            var8 = var8 != var15;
            if(!var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var14.reactions;
            var9 = var9.length;
            var8 = var9 > var10;
case 26:
            if(!var8) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var11 = _closure1_slot10;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var13.emojiContainer;
            var9['style'] = var13;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 19;
            var12 = var17[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['message'] = var14;
            var12['channel'] = var16;
            var12['guild'] = var15;
            var14 = var14.id;
            var12['id'] = var14;
            var14 = 'message';
            var12['itemType'] = var14;
            var14 = true;
            var12['hideAdditionalButtons'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 28:
            var7[3] = var8;
            var6['children'] = var7;
            var6 = var3.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();