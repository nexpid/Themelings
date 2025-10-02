// app/modules/markup/MarkupChannelMentionRule.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function makeGuild(arg1) {
        var5 = arg1;
        var1 = {};
        var2 = 'guild';
        var1['type'] = var2;
        var2 = var5.id;
        var1['guildId'] = var2;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 7;
        var3 = var6[var3];
        var4 = undefined;
        var9 = var7.bind(var4)(var3);
        var8 = var9.truncateText;
        var7 = var5.name;
        var3 = 32;
        var3 = var8.bind(var9)(var7, var3);
        var1['content'] = var3;
        var3 = _closure1_slot1;
        var2 = 8;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.getGuildIconURL;
        var2 = {};
        var6 = var5.id;
        var2['id'] = var6;
        var5 = var5.icon;
        var2['icon'] = var5;
        var5 = 40;
        var2['size'] = var5;
        var2 = var3.bind(var4)(var2);
        var1['icon'] = var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function makeChannel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot17;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var6 = var7.truncateText;
            var5 = var2.name;
            var1 = 32;
            var1 = var6.bind(var7)(var5, var1);
            var6 = var4.bind(var3)(var1);
            var1 = {};
            var3 = 'channel';
            var1['type'] = var3;
            var5 = 'italics';
            var3 = arg2;
            var4 = var6;
            if(!(var5 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
            var5 = 'em';
            var3['type'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var3['content'] = var5;
            var4 = var3;
case 2:
            var3 = new Array(1);
            var3[0] = var4;
            var1['content'] = var3;
            var3 = var2.type;
            var1['channelType'] = var3;
            var2 = var2.iconType;
            var1['iconType'] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function makeMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = {};
            var2 = 'channel';
            var1['type'] = var2;
            var4 = _closure1_slot17;
            var3 = undefined;
            var2 = '';
            var3 = var4.bind(var3)(var2);
            var2 = new Array(1);
            var2[0] = var3;
            var1['content'] = var2;
            var2 = 'message';
            var3 = arg1;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = 'post';
case 4:
            var1['iconType'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getChannel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var13 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var13;
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var3 = var2.bind(var3)(var13);
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var4 = var7[var2];
            var2 = undefined;
            var12 = var5.bind(var2)(var4);
            var11 = var12.getChannelRoleSubscriptionStatus;
            var17 = _closure1_slot4;
            var16 = _closure1_slot3;
            var15 = _closure1_slot6;
            var19 = var12;
            var18 = var13;
            var4 = var19[var11](var18, var17, var16, var15, var14);
            var6 = var4.isSubscriptionGated;
            var4 = 11;
            var4 = var7[var4];
            var5 = var5.bind(var2)(var4);
            var4 = var5.getMentionIconType;
            var7 = var4.bind(var5)(var3);
            var4 = null;
            var10 = var4 != var7;
            var5 = 'text';
            if(!var10) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var5 = var7;
case 6:
            if(!(var4 != var8)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var7 = var8.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var7.bind(var8)(var1);
            if(!(var4 == var7)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
            var8 = var4 != var3;
            var1 = null;
            if(!var8) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var8 = {};
            var10 = var3.type;
            var8['type'] = var10;
            var10 = var3.id;
            var8['id'] = var10;
            var10 = var3.guild_id;
            var8['guildId'] = var10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = 12;
            var12 = var11[var12];
            var14 = var10.bind(var2)(var12);
            var13 = var14.computeChannelName;
            var12 = _closure1_slot8;
            var9 = _closure1_slot7;
            var9 = var13.bind(var14)(var3, var12, var9);
            var8['name'] = var9;
            var9 = var3.isPrivate;
            var9 = var9.bind(var3)();
            var8['isDm'] = var9;
            var9 = var3.isForumPost;
            var9 = var9.bind(var3)();
            var8['isForumPost'] = var9;
            var9 = 13;
            var9 = var11[var9];
            var13 = var10.bind(var2)(var9);
            var12 = var13.isChannelTypeMentionable;
            var9 = var3.type;
            var9 = var12.bind(var13)(var9);
            var8['isMentionable'] = var9;
            var9 = 14;
            var9 = var11[var9];
            var10 = var10.bind(var2)(var9);
            var9 = var10.canViewChannel;
            var9 = var9.bind(var10)(var3);
            var8['canViewChannel'] = var9;
            var8['roleSubscriptionGated'] = var6;
            var8['iconType'] = var5;
            var9 = var3.parent_id;
            var8['parentId'] = var9;
            var1 = var8;
case 11:
            return var1;
case 10:
            var1 = {};
            var8 = var7.type;
            var1['type'] = var8;
            var8 = var7.id;
            var1['id'] = var8;
            var8 = var7.guild_id;
            var1['guildId'] = var8;
            var7 = var7.name;
            var1['name'] = var7;
            var7 = var4 != var3;
            if(!var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var8 = var3.isPrivate;
            var7 = var8.bind(var3)();
case 13:
            var1['isDm'] = var7;
            var7 = var4 != var3;
            if(!var7) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var8 = var3.isForumPost;
            var7 = var8.bind(var3)();
case 15:
            var1['isForumPost'] = var7;
            var7 = true;
            var1['isMentionable'] = var7;
            var1['canViewChannel'] = var7;
            var1['roleSubscriptionGated'] = var6;
            var1['iconType'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = var3.parent_id;
case 17:
            var1['parentId'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function makeLink(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = 'link';
        var1['type'] = var3;
        var4 = {};
        var3 = 'text';
        var4['type'] = var3;
        var4['content'] = var2;
        var3 = new Array(1);
        var3[0] = var4;
        var1['content'] = var3;
        var1['target'] = var2;
        var2 = undefined;
        var1['title'] = var2;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function makeText(arg1) {
        var1 = {};
        var2 = 'text';
        var1['type'] = var2;
        var2 = arg1;
        var1['content'] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function handleUnknownChannel(arg1, arg2, arg3, arg4, arg5) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot5;
            var1 = var4.getGuild;
            var6 = var1.bind(var4)(var3);
            var8 = null;
            var1 = var8 == var6;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var7 = var6.id;
case 19:
            var1 = {};
            var4 = 'channelMention';
            var1['type'] = var4;
            var1['guildId'] = var3;
            var3 = arg2;
            var1['channelId'] = var3;
            var3 = arg3;
            var1['messageId'] = var3;
            var3 = arg5;
            var1['originalLink'] = var3;
            var4 = var8 == var6;
            var3 = null;
            if(var4) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var4 = arg4;
            var3 = null;
            if(!(var7 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 23:
            var4 = _closure1_slot12;
            var6 = var4.bind(var5)(var6);
            var4 = new Array(1);
            var4[0] = var6;
            var3 = var4;
case 21:
            var1['inContent'] = var3;
            var4 = _closure1_slot13;
            var3 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 9;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.zLZPmp;
            var7 = var7.bind(var8)(var6);
            var6 = var7.toLowerCase;
            var6 = var6.bind(var7)();
            var3['name'] = var6;
            var2 = _closure1_slot9;
            var2 = var2.UNKNOWN;
            var3['type'] = var2;
            var2 = 'text';
            var3['iconType'] = var2;
            var2 = 'italics';
            var3 = var4.bind(var5)(var3, var2);
            var2 = new Array(1);
            var2[0] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function formatChannelMentionContent(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg2;
            var10 = arg3;
            var9 = arg4;
            var3 = _closure1_slot12;
            var5 = undefined;
            var2 = arg1;
            var11 = var3.bind(var5)(var2);
            var2 = _closure1_slot13;
            var3 = var2.bind(var5)(var1);
            var4 = _closure1_slot14;
            var2 = var1.isForumPost;
            var4 = var4.bind(var5)(var2);
            if(!var10) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            if(var9) { _fun0005_ip = 26; continue _fun0005 }
case 24:
            if(!var10) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            if(var9) { _fun0005_ip = 27; continue _fun0005 }
case 29:
            var2 = {};
            var6 = null;
            var2['inContent'] = var6;
            var6 = new Array(1);
            var6[0] = var3;
            var2['content'] = var6;
            _fun0005_ip = 30; continue _fun0005;
case 27:
            if(var10) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            if(!var9) { _fun0005_ip = 31; continue _fun0005 }
case 33:
            var6 = {};
            var8 = new Array(1);
            var8[0] = var11;
            var6['inContent'] = var8;
            var8 = var1.isForumPost;
            var12 = var4;
            if(!var8) { _fun0005_ip = 6; continue _fun0005 }
case 7:
            var12 = var3;
case 6:
            var8 = new Array(1);
            var8[0] = var12;
            var6['content'] = var8;
            _fun0005_ip = 34; continue _fun0005;
case 31:
            var8 = undefined;
            if(var10) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var8 = undefined;
            if(var9) { _fun0005_ip = 35; continue _fun0005 }
case 37:
            var9 = {};
            var10 = new Array(1);
            var10[0] = var11;
            var9['inContent'] = var10;
            var10 = new Array(1);
            var10[0] = var3;
            var9['content'] = var10;
            var8 = var9;
case 35:
            var6 = var8;
case 34:
            var2 = var6;
case 30:
            return var2;
case 26:
            var2 = var1.isForumPost;
            if(!var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var6 = _closure1_slot4;
            var2 = var6.getChannel;
            var1 = var1.parentId;
            var9 = var2.bind(var6)(var1);
            var6 = null;
            if(!(var6 == var9)) { _fun0005_ip = 40; continue _fun0005 }
case 38:
            var1 = {};
            var2 = new Array(1);
            var2[0] = var3;
            var1['inContent'] = var2;
            var2 = new Array(1);
            var2[0] = var4;
            var1['content'] = var2;
            return var1;
case 40:
            var1 = {};
            var4 = _closure1_slot13;
            var2 = {};
            var8 = var9.name;
            var2['name'] = var8;
            var8 = var9.type;
            var2['type'] = var8;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var7 = var10[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.getMentionIconType;
            var7 = var7.bind(var8)(var9);
            var8 = var6 != var7;
            var6 = 'forum';
            if(!var8) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = var7;
case 41:
            var2['iconType'] = var6;
            var4 = var4.bind(var5)(var2);
            var2 = new Array(1);
            var2[0] = var4;
            var1['inContent'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function parseChannel(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var7 = arg4;
            var1 = var6.canViewChannel;
            if(var1) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var3 = {};
            var1 = 'channel';
            var3['type'] = var1;
            var8 = _closure1_slot17;
            var2 = var6.roleSubscriptionGated;
            if(var2) { _fun0006_ip = 2; continue _fun0006 }
case 45:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 9;
            var4 = var12[var2];
            var10 = undefined;
            var4 = var11.bind(var10)(var4);
            var9 = var4.intl;
            var4 = var9.string;
            var2 = var12[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var2.t;
            var2 = var2./YzI6+;
            var4 = var4.bind(var9)(var2);
            _fun0006_ip = 46; continue _fun0006;
case 2:
            var4 = var6.name;
case 46:
            var2 = undefined;
            var4 = var8.bind(var2)(var4);
            var2 = new Array(1);
            var2[0] = var4;
            var3['content'] = var2;
            var2 = var6.roleSubscriptionGated;
            if(var2) { _fun0006_ip = 8; continue _fun0006 }
case 47:
            var1 = _closure1_slot9;
            var1 = var1.UNKNOWN;
            _fun0006_ip = 48; continue _fun0006;
case 8:
            var1 = var6.type;
case 48:
            var3['channelType'] = var1;
            var1 = 'locked';
            var3['iconType'] = var1;
            var1 = {};
            var2 = 'channelMention';
            var1['type'] = var2;
            var2 = var6.guildId;
            var1['guildId'] = var2;
            var2 = var6.id;
            var1['channelId'] = var2;
            var1['messageId'] = var5;
            var2 = null;
            var1['inContent'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['content'] = var2;
            return var1;
case 43:
            var1 = var6.isMentionable;
            if(var1) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var3 = _closure1_slot17;
            var4 = var6.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var2 = var2.bind(var1)(var4);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
case 49:
            var4 = {};
            var1 = 'channelMention';
            var4['type'] = var1;
            var1 = var6.id;
            var4['channelId'] = var1;
            var1 = var6.guildId;
            var4['guildId'] = var1;
            var4['messageId'] = var5;
            var4['originalLink'] = var7;
            var8 = _closure1_slot5;
            var2 = var8.getGuild;
            var1 = var6.guildId;
            var11 = var2.bind(var8)(var1);
            var1 = null;
            if(!(var1 != var11)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var12 = var6.guildId;
            var2 = {};
            var16 = var2;
            var15 = var4;
            var8 = copyDataProperties(var16, var15);
            var10 = _closure1_slot19;
            var13 = var1 != var5;
            var17 = undefined;
            var5 = arg3;
            var14 = var12 === var5;
            var16 = var11;
            var15 = var6;
            var15 = var17[var10](var16, var15, var14, var13, var12);
            var16 = var2;
            var5 = copyDataProperties(var16, var15);
            return var2;
case 51:
            var2 = var6.isDm;
            if(var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            if(!(var1 == var7)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var5 = _closure1_slot17;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 9;
            var8 = var11[var1];
            var2 = undefined;
            var8 = var10.bind(var2)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var1 = var11[var1];
            var1 = var10.bind(var2)(var1);
            var1 = var1.t;
            var1 = var1.J90oLS;
            var9 = var8.bind(var9)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var1 = '#';
            var1 = var8.bind(var1)(var9);
            var1 = var5.bind(var2)(var1);
            _fun0006_ip = 57; continue _fun0006;
case 55:
            var5 = _closure1_slot16;
            var2 = undefined;
            var1 = var5.bind(var2)(var7);
case 57:
            _fun0006_ip = 58; continue _fun0006;
case 53:
            var2 = {};
            var16 = var2;
            var15 = var4;
            var4 = copyDataProperties(var16, var15);
            var5 = _closure1_slot10;
            var4 = 'guildId';
            var2[var4] = var5;
            var4 = _closure1_slot13;
            var5 = undefined;
            var4 = var4.bind(var5)(var6);
            var6 = new Array(1);
            var6[0] = var4;
            var4 = 'inContent';
            var2[var4] = var6;
            var4 = _closure1_slot14;
            var3 = false;
            var3 = var4.bind(var5)(var3);
            var4 = new Array(1);
            var4[0] = var3;
            var3 = 'content';
            var2[var3] = var4;
            var1 = var2;
case 58:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.ChannelTypes;
    var _closure1_slot9 = var4;
    var2 = var2.ME;
    var _closure1_slot10 = var2;
    var2 = function getGuildIdFromChannelId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
case 59:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var2 = {};
    var4 = {};
    var8 = 15;
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.order;
    var4['order'] = var8;
    var8 = ['<'];
    var4['requiredFirstCharacters'] = var8;
    var8 = function match(arg1) {
        var3 = /^<#(\d+)>/;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['match'] = var8;
    var8 = function parse(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg3;
            var2 = arg1;
            var1 = 1;
            var2 = var2[var1];
            var1 = var3.returnMentionIds;
            if(var1) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var4 = _closure1_slot15;
            var1 = var3.mentionChannels;
            var6 = undefined;
            var8 = var4.bind(var6)(var2, var1);
            var5 = null;
            if(!(var5 != var8)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
            var4 = _closure1_slot20;
            var9 = _closure1_slot11;
            var1 = var3.channelId;
            var1 = var9.bind(var6)(var1);
            var1 = var4.bind(var6)(var8, var5, var1);
            _fun0008_ip = 65; continue _fun0008;
case 63:
            var4 = _closure1_slot18;
            var7 = _closure1_slot11;
            var3 = var3.channelId;
            var10 = var7.bind(var6)(var3);
            var14 = undefined;
            var13 = null;
            var12 = var2;
            var11 = null;
            var1 = var14[var4](var13, var12, var11, var10, var9);
case 65:
            return var1;
case 61:
            var1 = {};
            var3 = 'channelMention';
            var1['type'] = var3;
            var1['id'] = var2;
            return var1;
        }
    };
    var4['parse'] = var8;
    var2['channelMention'] = var4;
    var4 = {};
    var8 = 16;
    var9 = var6[var8];
    var9 = var10.bind(var1)(var9);
    var9 = var9.defaultRules;
    var9 = var9.url;
    var11 = var9.order;
    var9 = 0.5;
    var11 = var11 - var9;
    var4['order'] = var11;
    var11 = ['h'];
    var4['requiredFirstCharacters'] = var11;
    var11 = function match(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.CHANNEL_OR_MESSAGES_URL_RE;
            var2 = var3.exec;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var3 = 2;
            var4 = var2[var3];
            if(!(var1 != var4)) { _fun0009_ip = 68; continue _fun0009 }
case 28:
            var5 = /\D/;
            var4 = var5.test;
            var3 = var2[var3];
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 47; continue _fun0009 }
case 68:
            var3 = 3;
            var4 = var2[var3];
            if(!(var1 != var4)) { _fun0009_ip = 66; continue _fun0009 }
case 69:
            var5 = /\D/;
            var4 = var5.test;
            var3 = var2[var3];
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 70; continue _fun0009 }
case 66:
            return var2;
case 70:
            return var1;
case 47:
            return var1;
        }
    };
    var4['match'] = var11;
    var11 = function parse(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var2 = arg3;
            var1 = 0;
            var3 = var4[var1];
            var1 = 1;
            var8 = var4[var1];
            var1 = 2;
            var7 = var4[var1];
            var1 = 3;
            var6 = var4[var1];
            var1 = null;
            if(!(var1 != var7)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var4 = _closure1_slot15;
            var5 = undefined;
            var10 = var4.bind(var5)(var7, var1);
            if(!(var1 != var10)) { _fun0010_ip = 68; continue _fun0010 }
case 73:
            var4 = _closure1_slot20;
            var11 = _closure1_slot11;
            var1 = var2.channelId;
            var14 = var11.bind(var5)(var1);
            var17 = undefined;
            var16 = var10;
            var15 = var6;
            var13 = var3;
            var1 = var17[var4](var16, var15, var14, var13, var12);
            _fun0010_ip = 74; continue _fun0010;
case 68:
            var4 = _closure1_slot18;
            var9 = _closure1_slot11;
            var2 = var2.channelId;
            var13 = var9.bind(var5)(var2);
            var17 = undefined;
            var16 = var8;
            var15 = var7;
            var14 = var6;
            var12 = var3;
            var1 = var17[var4](var16, var15, var14, var13, var12, var11);
case 74:
            return var1;
case 71:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['parse'] = var11;
    var2['channelOrMessageUrl'] = var4;
    var4 = {};
    var8 = var6[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.defaultRules;
    var8 = var8.url;
    var8 = var8.order;
    var8 = var8 - var9;
    var4['order'] = var8;
    var8 = ['h'];
    var4['requiredFirstCharacters'] = var8;
    var8 = function match(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.MEDIA_POST_URL_RE;
        var2 = var3.exec;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['match'] = var8;
    var7 = function parse(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var1 = arg3;
            var2 = 0;
            var3 = var4[var2];
            var2 = 1;
            var11 = var4[var2];
            var2 = 2;
            var9 = var4[var2];
            var2 = 3;
            var8 = var4[var2];
            var2 = 4;
            var6 = var4[var2];
            var2 = null;
            if(!(var2 != var9)) { _fun0011_ip = 75; continue _fun0011 }
case 64:
            if(!(var2 != var8)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var4 = _closure1_slot15;
            var5 = undefined;
            var4 = var4.bind(var5)(var8, var2);
            if(!(var2 == var4)) { _fun0011_ip = 77; continue _fun0011 }
case 78:
            var8 = _closure1_slot15;
            var10 = var8.bind(var5)(var9, var2);
            if(!(var2 == var10)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var8 = _closure1_slot18;
            var12 = _closure1_slot11;
            var2 = var1.channelId;
            var14 = var12.bind(var5)(var2);
            var18 = undefined;
            var17 = var11;
            var16 = var9;
            var15 = var6;
            var13 = var3;
            var2 = var18[var8](var17, var16, var15, var14, var13, var12);
            _fun0011_ip = 81; continue _fun0011;
case 79:
            var9 = _closure1_slot20;
            var11 = _closure1_slot11;
            var8 = var1.channelId;
            var15 = var11.bind(var5)(var8);
            var18 = undefined;
            var17 = var10;
            var16 = var6;
            var14 = var3;
            var2 = var18[var9](var17, var16, var15, var14, var13);
case 81:
            return var2;
case 77:
            var2 = _closure1_slot20;
            var7 = _closure1_slot11;
            var1 = var1.channelId;
            var15 = var7.bind(var5)(var1);
            var18 = undefined;
            var17 = var4;
            var16 = var6;
            var14 = var3;
            var1 = var18[var2](var17, var16, var15, var14, var13);
            return var1;
case 75:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var4['parse'] = var7;
    var2['mediaPostLink'] = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupChannelMentionRule.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();