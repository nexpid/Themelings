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
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot7 = var7;
    var4 = var4.MessageEmbedTypes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var10 = 7;
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
    var _closure1_slot11 = var4;
    var4 = 19;
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
            var14 = var1.channel;
            var _closure2_slot1 = var14;
            var20 = var1.showTimestamps;
            var17 = var1.muted;
            var4 = undefined;
            if(!(var17 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = false;
case 2:
            var _closure2_slot2 = var4;
            var1 = _closure1_slot11;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 8;
            var6 = var5[var1];
            var9 = var3.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot6;
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
            var15 = var8.bind(var9)(var7, var6);
            _closure2_slot2 = var15;
            var1 = var5[var1];
            var6 = var3.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
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
            var1 = var5.bind(var6)(var3, var1);
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = var15.attachments;
            var7 = var3.length;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = var15.content;
            var3[1] = var7;
            var7 = var15.embeds;
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
                    var2 = _closure1_slot8;
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
            var21 = undefined;
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var21 = var1.colorString;
case 12:
            if(!(var8 == var21)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var21 = _closure1_slot7;
case 14:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var5 = var9.bind(var4)(var1);
            var3 = var5.extractMediaSourcesFromMessage;
            var29 = var14.guild_id;
            var1 = 10;
            var1 = var7[var1];
            var1 = var9.bind(var4)(var1);
            var28 = var1.GRAVITY_VALID_EMBED_TYPES;
            var32 = var5;
            var31 = var15;
            var30 = var15;
            var10 = var32[var3](var31, var30, var29, var28, var27);
            var1 = 11;
            var1 = var7[var1];
            var6 = var9.bind(var4)(var1);
            var5 = var6.useName;
            var3 = var14.guild_id;
            var2 = var14.id;
            var1 = var15.author;
            var19 = var5.bind(var6)(var3, var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.messageContainer;
            var1['style'] = var5;
            var11 = _closure1_slot9;
            var6 = _closure1_slot1;
            var16 = 12;
            var5 = var7[var16];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var22 = var15.author;
            var5['user'] = var22;
            var16 = var7[var16];
            var16 = var9.bind(var4)(var16);
            var16 = var16.AvatarSizes;
            var16 = var16.REFRESH_MEDIUM_32;
            var5['size'] = var16;
            var16 = var14.guild_id;
            var5['guildId'] = var16;
            var6 = var11.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var11 = var13.messageContent;
            var6['style'] = var11;
            var16 = 13;
            var7 = var7[var16];
            var7 = var9.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/semibold', 'color': 'text-primary'};
            var11 = {};
            var11['color'] = var21;
            var7['style'] = var11;
            var11 = new Array(2);
            var11[0] = var19;
            var19 = null;
            if(!var20) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var22 = _closure1_slot10;
            var24 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = var27[var16];
            var20 = var24.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-xs/normal', 'color': 'header-muted'};
            var23 = 14;
            var23 = var27[var23];
            var25 = var24.bind(var4)(var23);
            var24 = var25.getRelativeTimestamp;
            var26 = _closure1_slot1;
            var23 = 15;
            var23 = var27[var23];
            var27 = var26.bind(var4)(var23);
            var26 = var27.extractTimestamp;
            var23 = var15.id;
            var23 = var26.bind(var27)(var23);
            var24 = var24.bind(var25)(var23);
            var23 = ['   '];
            var23[1] = var24;
            var20['children'] = var23;
            var19 = var22.bind(var4)(var21, var20);
case 16:
            var11[1] = var19;
            var7['children'] = var11;
            var9 = var3.bind(var4)(var9, var7);
            var7 = new Array(4);
            var7[0] = var9;
            var9 = var15.content;
            var11 = var9.length;
            var9 = 0;
            var11 = var11 > var9;
            if(!var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var11 = !var18;
case 18:
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var19 = _closure1_slot9;
            var18 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = var22[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-md/normal', 'lineClamp': 5, 'color': 'text-primary'};
            var21 = _closure1_slot1;
            var20 = 16;
            var20 = var22[var20];
            var23 = var21.bind(var4)(var20);
            var22 = var23.parseInlineReply;
            var21 = var15.content;
            var20 = true;
            var20 = var22.bind(var23)(var21, var20);
            var16['children'] = var20;
            var11 = var19.bind(var4)(var18, var16);
case 20:
            var7[1] = var11;
            var8 = var8 != var10;
            if(!var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var10.length;
            var8 = var10 > var9;
case 22:
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var16 = _closure1_slot9;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 17;
            var10 = var18[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.MediaOnlyRowPreview;
            var10 = {};
            var10['message'] = var15;
            var10['muted'] = var17;
            var17 = 2;
            var10['lineClamp'] = var17;
            var8 = var16.bind(var4)(var11, var10);
case 24:
            var7[2] = var8;
            var8 = var15.reactions;
            var8 = var8.length;
            var8 = var8 > var9;
            if(!var8) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var11 = _closure1_slot9;
            var10 = _closure1_slot4;
            var9 = {};
            var13 = var13.emojiContainer;
            var9['style'] = var13;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 18;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['message'] = var15;
            var12['channel'] = var14;
            var14 = true;
            var12['hideAdditionalButtons'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 26:
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