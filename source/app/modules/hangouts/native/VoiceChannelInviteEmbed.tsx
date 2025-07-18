// app/modules/hangouts/native/VoiceChannelInviteEmbed.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'voiceChannelInviteEmbed';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hangouts/native/VoiceChannelInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoiceChannelInviteEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.message;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var15 = 9;
            var2 = var2[var15];
            var7 = var5.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channel_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var6.bind(var7)(var5, var2);
            var2 = var3.embeds;
            var8 = 0;
            var2 = var2[var8];
            var12 = null;
            var5 = var12 == var2;
            var13 = undefined;
            if(var5) { _fun0001_ip = 163; continue _fun0001 }
 116:
            var6 = var2.fields;
            var2 = var12 == var6;
            var13 = undefined;
            if(var2) { _fun0001_ip = 163; continue _fun0001 }
 131:
            var5 = var6.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = 'guild_id';
                var1 = var1 === var2;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var5 = var12 == var2;
            var13 = undefined;
            if(var5) { _fun0001_ip = 163; continue _fun0001 }
 157:
            var13 = var2.rawValue;
 163:
            _closure2_slot1 = var13;
            var2 = var3.embeds;
            var2 = var2[var8];
            var5 = var12 == var2;
            var10 = undefined;
            if(var5) { _fun0001_ip = 233; continue _fun0001 }
 186:
            var6 = var2.fields;
            var2 = var12 == var6;
            var10 = undefined;
            if(var2) { _fun0001_ip = 233; continue _fun0001 }
 201:
            var5 = var6.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = 'channel_id';
                var1 = var1 === var2;
                return var1;
            };
            var2 = var5.bind(var6)(var2);
            var5 = var12 == var2;
            var10 = undefined;
            if(var5) { _fun0001_ip = 233; continue _fun0001 }
 227:
            var10 = var2.rawValue;
 233:
            _closure2_slot2 = var10;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = var2[var15];
            var14 = var5.bind(var4)(var6);
            var9 = var14.useStateFromStores;
            var6 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var14)(var7, var6);
            var7 = var2[var15];
            var16 = var5.bind(var4)(var7);
            var14 = var16.useStateFromStores;
            var7 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var14.bind(var16)(var9, var7);
            _closure2_slot3 = var21;
            var7 = var2[var15];
            var16 = var5.bind(var4)(var7);
            var14 = var16.useStateFromStores;
            var7 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var14.bind(var16)(var9, var7);
            _closure2_slot4 = var7;
            var2 = var2[var15];
            var9 = var5.bind(var4)(var2);
            var7 = var9.useStateFromStores;
            var5 = new Array(0);
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.author;
                    var2 = var1.id;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 42; continue _fun0002 }
 33:
                    var3 = _closure2_slot4;
                    var1 = var3.id;
 42:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var5, var2);
            var7 = var12 == var18;
            var5 = undefined;
            if(var7) { _fun0001_ip = 442; continue _fun0001 }
 410:
            var14 = var18.recipients;
            var7 = var12 == var14;
            var5 = undefined;
            if(var7) { _fun0001_ip = 442; continue _fun0001 }
 425:
            var9 = var14.find;
            var7 = function(arg1) {
                var1 = _closure2_slot0;
                var1 = var1.author;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var5 = var9.bind(var14)(var7);
 442:
            _closure2_slot5 = var5;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = var14[var15];
            var17 = var7.bind(var4)(var5);
            var16 = var17.useStateFromStores;
            var5 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 38; continue _fun0003 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getUser;
                    var2 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var9 = var16.bind(var17)(var9, var5);
            var16 = _closure1_slot1;
            var5 = 10;
            var5 = var14[var5];
            var5 = var16.bind(var4)(var5);
            var17 = var5.bind(var4)(var3);
            var5 = 11;
            var5 = var14[var5];
            var16 = var7.bind(var4)(var5);
            var14 = var16.useName;
            var5 = var12 == var18;
            var7 = undefined;
            if(var5) { _fun0001_ip = 551; continue _fun0001 }
 541:
            var5 = var18.getGuildId;
            var7 = var5.bind(var18)();
 551:
            var19 = var12 == var18;
            var5 = undefined;
            if(var19) { _fun0001_ip = 565; continue _fun0001 }
 560:
            var5 = var18.id;
 565:
            var18 = var14.bind(var16)(var7, var5, var9);
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var15];
            var19 = var7.bind(var4)(var5);
            var16 = var19.useStateFromStoresArray;
            var5 = _closure1_slot7;
            var14 = new Array(1);
            var14[0] = var5;
            var7 = new Array(1);
            var7[0] = var21;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0004_ip = 19; continue _fun0004 }
 13:
                    var1 = new Array(0);
                    _fun0004_ip = 41; continue _fun0004;
 19:
                    var4 = _closure1_slot7;
                    var3 = var4.getVoiceStatesForChannel;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
 41:
                    return var1;
                }
            };
            var7 = var16.bind(var19)(var14, var5, var7);
            var14 = var7.some;
            var5 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.user;
                    var2 = var1.id;
                    var4 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 40; continue _fun0005 }
 31:
                    var3 = _closure2_slot4;
                    var1 = var3.id;
 40:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var5 = var14.bind(var7)(var5);
            var3 = var3.embeds;
            var3 = var3[var8];
            var14 = var12 == var3;
            var16 = undefined;
            if(var14) { _fun0001_ip = 713; continue _fun0001 }
 666:
            var19 = var3.fields;
            var3 = var12 == var19;
            var16 = undefined;
            if(var3) { _fun0001_ip = 713; continue _fun0001 }
 681:
            var14 = var19.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = 'voice_user_ids';
                var1 = var1 === var2;
                return var1;
            };
            var3 = var14.bind(var19)(var3);
            var14 = var12 == var3;
            var16 = undefined;
            if(var14) { _fun0001_ip = 713; continue _fun0001 }
 707:
            var16 = var3.rawValue;
 713:
            if(!(var12 == var16)) { _fun0001_ip = 723; continue _fun0001 }
 717:
            var20 = new Array(0);
            _fun0001_ip = 737; continue _fun0001;
 723:
            var14 = var16.split;
            var3 = ',';
            var20 = var14.bind(var16)(var3);
 737:
            _closure2_slot6 = var20;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 12;
            var3 = var16[var3];
            var16 = var14.bind(var4)(var3);
            var14 = var16.useSubscribeGuildMembers;
            var3 = {};
            var22 = var12 != var13;
            var19 = '';
            if(!var22) { _fun0001_ip = 783; continue _fun0001 }
 780:
            var19 = var13;
 783:
            var3[var19] = var20;
            var3 = var14.bind(var16)(var3);
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var15];
            var16 = var14.bind(var4)(var3);
            var15 = var16.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var3;
            var3 = function() {
                var3 = _closure2_slot6;
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot6;
                    var2 = var3.getUser;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = global;
                var1 = var1.Boolean;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var15.bind(var16)(var14, var3);
            if(!var2) { _fun0001_ip = 848; continue _fun0001 }
 844:
            if(!(var12 == var9)) { _fun0001_ip = 920; continue _fun0001 }
 848:
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 13;
            var15 = var19[var9];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var9 = var19[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            var14 = var9.noNjkZ;
            var9 = {};
            var17 = var17.nick;
            var9['username'] = var17;
            var16 = var15.bind(var16)(var14, var9);
            _fun0001_ip = 984; continue _fun0001;
 920:
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 13;
            var15 = var19[var9];
            var15 = var14.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.formatToPlainString;
            var9 = var19[var9];
            var9 = var14.bind(var4)(var9);
            var9 = var9.t;
            var14 = var9.er/cHx;
            var9 = {};
            var9['username'] = var18;
            var16 = var15.bind(var17)(var14, var9);
 984:
            var6 = var12 != var6;
            if(!var6) { _fun0001_ip = 995; continue _fun0001 }
 991:
            var6 = var12 != var21;
 995:
            var18 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 13;
            var15 = var9[var14];
            var15 = var18.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var9 = var9[var14];
            var9 = var18.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.tHT/Vl;
            var15 = var15.bind(var17)(var9);
            if(!var6) { _fun0001_ip = 1203; continue _fun0001 }
 1058:
            if(var2) { _fun0001_ip = 1133; continue _fun0001 }
 1061:
            if(var5) { _fun0001_ip = 1133; continue _fun0001 }
 1064:
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var18 = var9[var14];
            var18 = var17.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var9 = var9[var14];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            var17 = var9.RqCPVl;
            var9 = {};
            var20 = var21.name;
            var9['channelName'] = var20;
            var9 = var18.bind(var19)(var17, var9);
            _fun0001_ip = 1200; continue _fun0001;
 1133:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var14];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.formatToPlainString;
            var17 = var17[var14];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.YIZnWl;
            var17 = {};
            var21 = var21.name;
            var17['channelName'] = var21;
            var9 = var19.bind(var20)(var18, var17);
 1200:
            var15 = var9;
 1203:
            var9 = var7.length;
            if(!(var8 === var9)) { _fun0001_ip = 1287; continue _fun0001 }
 1212:
            var19 = _closure1_slot0;
            var9 = _closure1_slot2;
            var17 = var9[var14];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var9 = var9[var14];
            var9 = var19.bind(var4)(var9);
            var9 = var9.t;
            if(var2) { _fun0001_ip = 1271; continue _fun0001 }
 1256:
            var2 = var9.QVhmGx;
            var2 = var17.bind(var18)(var2);
            _fun0001_ip = 1284; continue _fun0001;
 1271:
            var9 = var9.IE2uZW;
            var2 = var17.bind(var18)(var9);
 1284:
            var15 = var2;
 1287:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var8 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.ensureAvatarSource;
                    var7 = var8.getAvatarSource;
                    var6 = _closure2_slot1;
                    var5 = false;
                    var2 = 24;
                    var2 = var7.bind(var8)(var6, var5, var2);
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    if(var3) { _fun0006_ip = 79; continue _fun0006 }
 73:
                    var1 = var2.uri;
 79:
                    return var1;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = global;
            var1 = var1.Boolean;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var1['titleText'] = var16;
            var1['bodyText'] = var15;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var15 = var20[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var20[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.zIeJq6;
            var14 = var15.bind(var16)(var14);
            var1['joinText'] = var14;
            var16 = _closure1_slot3;
            var15 = var16.resolveAssetSource;
            var14 = 15;
            var14 = var20[var14];
            var18 = var17.bind(var4)(var14);
            var17 = var18.makeSource;
            var19 = _closure1_slot1;
            var14 = 16;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var17.bind(var18)(var14);
            var14 = var15.bind(var16)(var14);
            var14 = var14.uri;
            var1['joinIcon'] = var14;
            if(!(var12 == var13)) { _fun0001_ip = 1478; continue _fun0001 }
 1474:
            var13 = _closure1_slot8;
 1478:
            var1['guildId'] = var13;
            if(!(var12 == var10)) { _fun0001_ip = 1490; continue _fun0001 }
 1486:
            var10 = _closure1_slot8;
 1490:
            var1['channelId'] = var10;
            var1['avatars'] = var9;
            var7 = var7.length;
            var7 = var8 === var7;
            var1['isInactive'] = var7;
            if(var5) { _fun0001_ip = 1521; continue _fun0001 }
 1518:
            var5 = !var6;
 1521:
            var1['joinDisabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();