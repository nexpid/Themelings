// app/modules/markup/MarkupChannelMentionRule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(!(var5 === var3)) { _fun0001_ip = 106; continue _fun0001 }
 81:
            var3 = {};
            var5 = 'em';
            var3['type'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var3['content'] = var5;
            var4 = var3;
 106:
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
 0:
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
            if(!var3) { _fun0002_ip = 54; continue _fun0002 }
 50:
            var2 = 'post';
 54:
            var1['iconType'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function getChannel(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!var10) { _fun0003_ip = 124; continue _fun0003 }
 121:
            var5 = var7;
 124:
            if(!(var4 != var8)) { _fun0003_ip = 150; continue _fun0003 }
 128:
            var7 = var8.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var7.bind(var8)(var1);
            if(!(var4 == var7)) { _fun0003_ip = 353; continue _fun0003 }
 150:
            var8 = var4 != var3;
            var1 = null;
            if(!var8) { _fun0003_ip = 351; continue _fun0003 }
 162:
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
 351:
            return var1;
 353:
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
            if(!var7) { _fun0003_ip = 408; continue _fun0003 }
 398:
            var8 = var3.isPrivate;
            var7 = var8.bind(var3)();
 408:
            var1['isDm'] = var7;
            var7 = var4 != var3;
            if(!var7) { _fun0003_ip = 430; continue _fun0003 }
 420:
            var8 = var3.isForumPost;
            var7 = var8.bind(var3)();
 430:
            var1['isForumPost'] = var7;
            var7 = true;
            var1['isMentionable'] = var7;
            var1['canViewChannel'] = var7;
            var1['roleSubscriptionGated'] = var6;
            var1['iconType'] = var5;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0003_ip = 472; continue _fun0003 }
 466:
            var2 = var3.parent_id;
 472:
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
 0:
            var3 = arg1;
            var4 = _closure1_slot5;
            var1 = var4.getGuild;
            var6 = var1.bind(var4)(var3);
            var8 = null;
            var1 = var8 == var6;
            var5 = undefined;
            var7 = undefined;
            if(var1) { _fun0004_ip = 38; continue _fun0004 }
 33:
            var7 = var6.id;
 38:
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
            if(var4) { _fun0004_ip = 112; continue _fun0004 }
 83:
            var4 = arg4;
            var3 = null;
            if(!(var7 !== var4)) { _fun0004_ip = 112; continue _fun0004 }
 92:
            var4 = _closure1_slot12;
            var6 = var4.bind(var5)(var6);
            var4 = new Array(1);
            var4[0] = var6;
            var3 = var4;
 112:
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
 0:
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
            if(!var10) { _fun0005_ip = 59; continue _fun0005 }
 53:
            if(var9) { _fun0005_ip = 186; continue _fun0005 }
 59:
            if(!var10) { _fun0005_ip = 88; continue _fun0005 }
 62:
            if(var9) { _fun0005_ip = 88; continue _fun0005 }
 65:
            var2 = {};
            var6 = null;
            var2['inContent'] = var6;
            var6 = new Array(1);
            var6[0] = var3;
            var2['content'] = var6;
            _fun0005_ip = 184; continue _fun0005;
 88:
            if(var10) { _fun0005_ip = 138; continue _fun0005 }
 91:
            if(!var9) { _fun0005_ip = 138; continue _fun0005 }
 94:
            var6 = {};
            var8 = new Array(1);
            var8[0] = var11;
            var6['inContent'] = var8;
            var8 = var1.isForumPost;
            var12 = var4;
            if(!var8) { _fun0005_ip = 124; continue _fun0005 }
 121:
            var12 = var3;
 124:
            var8 = new Array(1);
            var8[0] = var12;
            var6['content'] = var8;
            _fun0005_ip = 181; continue _fun0005;
 138:
            var8 = undefined;
            if(var10) { _fun0005_ip = 178; continue _fun0005 }
 143:
            var8 = undefined;
            if(var9) { _fun0005_ip = 178; continue _fun0005 }
 148:
            var9 = {};
            var10 = new Array(1);
            var10[0] = var11;
            var9['inContent'] = var10;
            var10 = new Array(1);
            var10[0] = var3;
            var9['content'] = var10;
            var8 = var9;
 178:
            var6 = var8;
 181:
            var2 = var6;
 184:
            return var2;
 186:
            var2 = var1.isForumPost;
            if(!var2) { _fun0005_ip = 221; continue _fun0005 }
 195:
            var6 = _closure1_slot4;
            var2 = var6.getChannel;
            var1 = var1.parentId;
            var9 = var2.bind(var6)(var1);
            var6 = null;
            if(!(var6 == var9)) { _fun0005_ip = 250; continue _fun0005 }
 221:
            var1 = {};
            var2 = new Array(1);
            var2[0] = var3;
            var1['inContent'] = var2;
            var2 = new Array(1);
            var2[0] = var4;
            var1['content'] = var2;
            return var1;
 250:
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
            if(!var8) { _fun0005_ip = 323; continue _fun0005 }
 320:
            var6 = var7;
 323:
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
 0:
            var6 = arg1;
            var5 = arg2;
            var7 = arg4;
            var1 = var6.canViewChannel;
            if(var1) { _fun0006_ip = 223; continue _fun0006 }
 21:
            var3 = {};
            var1 = 'channel';
            var3['type'] = var1;
            var8 = _closure1_slot17;
            var2 = var6.roleSubscriptionGated;
            if(var2) { _fun0006_ip = 106; continue _fun0006 }
 47:
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
            _fun0006_ip = 111; continue _fun0006;
 106:
            var4 = var6.name;
 111:
            var2 = undefined;
            var4 = var8.bind(var2)(var4);
            var2 = new Array(1);
            var2[0] = var4;
            var3['content'] = var2;
            var2 = var6.roleSubscriptionGated;
            if(var2) { _fun0006_ip = 151; continue _fun0006 }
 139:
            var1 = _closure1_slot9;
            var1 = var1.UNKNOWN;
            _fun0006_ip = 156; continue _fun0006;
 151:
            var1 = var6.type;
 156:
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
 223:
            var1 = var6.isMentionable;
            if(var1) { _fun0006_ip = 275; continue _fun0006 }
 232:
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
 275:
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
            if(!(var1 != var11)) { _fun0006_ip = 393; continue _fun0006 }
 340:
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
 393:
            var2 = var6.isDm;
            if(var2) { _fun0006_ip = 509; continue _fun0006 }
 402:
            if(!(var1 == var7)) { _fun0006_ip = 496; continue _fun0006 }
 406:
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
            _fun0006_ip = 507; continue _fun0006;
 496:
            var5 = _closure1_slot16;
            var2 = undefined;
            var1 = var5.bind(var2)(var7);
 507:
            _fun0006_ip = 593; continue _fun0006;
 509:
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
 593:
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
 0:
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var3;
            var1 = undefined;
            if(var2) { _fun0007_ip = 41; continue _fun0007 }
 31:
            var2 = var3.getGuildId;
            var1 = var2.bind(var3)();
 41:
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
 0:
            var3 = arg3;
            var2 = arg1;
            var1 = 1;
            var2 = var2[var1];
            var1 = var3.returnMentionIds;
            if(var1) { _fun0008_ip = 109; continue _fun0008 }
 22:
            var4 = _closure1_slot15;
            var1 = var3.mentionChannels;
            var6 = undefined;
            var8 = var4.bind(var6)(var2, var1);
            var5 = null;
            if(!(var5 != var8)) { _fun0008_ip = 76; continue _fun0008 }
 49:
            var4 = _closure1_slot20;
            var9 = _closure1_slot11;
            var1 = var3.channelId;
            var1 = var9.bind(var6)(var1);
            var1 = var4.bind(var6)(var8, var5, var1);
            _fun0008_ip = 107; continue _fun0008;
 76:
            var4 = _closure1_slot18;
            var7 = _closure1_slot11;
            var3 = var3.channelId;
            var10 = var7.bind(var6)(var3);
            var14 = undefined;
            var13 = null;
            var12 = var2;
            var11 = null;
            var1 = var14[var4](var13, var12, var11, var10, var9);
 107:
            return var1;
 109:
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
 0:
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
            if(!(var1 != var2)) { _fun0009_ip = 135; continue _fun0009 }
 51:
            var3 = 2;
            var4 = var2[var3];
            if(!(var1 != var4)) { _fun0009_ip = 93; continue _fun0009 }
 62:
            var5 = /\D/;
            var4 = var5.test;
            var3 = var2[var3];
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 139; continue _fun0009 }
 93:
            var3 = 3;
            var4 = var2[var3];
            if(!(var1 != var4)) { _fun0009_ip = 135; continue _fun0009 }
 104:
            var5 = /\D/;
            var4 = var5.test;
            var3 = var2[var3];
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0009_ip = 137; continue _fun0009 }
 135:
            return var2;
 137:
            return var1;
 139:
            return var1;
        }
    };
    var4['match'] = var11;
    var11 = function parse(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!(var1 != var7)) { _fun0010_ip = 131; continue _fun0010 }
 39:
            var4 = _closure1_slot15;
            var5 = undefined;
            var10 = var4.bind(var5)(var7, var1);
            if(!(var1 != var10)) { _fun0010_ip = 93; continue _fun0010 }
 58:
            var4 = _closure1_slot20;
            var11 = _closure1_slot11;
            var1 = var2.channelId;
            var14 = var11.bind(var5)(var1);
            var17 = undefined;
            var16 = var10;
            var15 = var6;
            var13 = var3;
            var1 = var17[var4](var16, var15, var14, var13, var12);
            _fun0010_ip = 129; continue _fun0010;
 93:
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
 129:
            return var1;
 131:
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
 0:
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
            if(!(var2 != var9)) { _fun0011_ip = 197; continue _fun0011 }
 49:
            if(!(var2 != var8)) { _fun0011_ip = 197; continue _fun0011 }
 56:
            var4 = _closure1_slot15;
            var5 = undefined;
            var4 = var4.bind(var5)(var8, var2);
            if(!(var2 == var4)) { _fun0011_ip = 162; continue _fun0011 }
 75:
            var8 = _closure1_slot15;
            var10 = var8.bind(var5)(var9, var2);
            if(!(var2 == var10)) { _fun0011_ip = 127; continue _fun0011 }
 89:
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
            _fun0011_ip = 160; continue _fun0011;
 127:
            var9 = _closure1_slot20;
            var11 = _closure1_slot11;
            var8 = var1.channelId;
            var15 = var11.bind(var5)(var8);
            var18 = undefined;
            var17 = var10;
            var16 = var6;
            var14 = var3;
            var2 = var18[var9](var17, var16, var15, var14, var13);
 160:
            return var2;
 162:
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
 197:
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