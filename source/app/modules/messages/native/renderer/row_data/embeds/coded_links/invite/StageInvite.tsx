// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/StageInvite.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function StageInviteEmbedInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = var2.invite;
            var _closure2_slot0 = var5;
            var8 = var2.stageInstance;
            var _closure2_slot1 = var8;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var2 = var5.guild;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.guild;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 68; continue _fun0002 }
 25:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 8;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.fromInviteGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.guild;
                    var1 = var3.bind(var4)(var2);
 68:
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var2, var3);
            var _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var11 = var3.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot6;
            var9 = new Array(2);
            var9[0] = var2;
            var2 = _closure1_slot7;
            var9[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var6 = null;
                    if(!(var6 == var1)) { _fun0003_ip = 83; continue _fun0003 }
 13:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var8 = _closure1_slot6;
                    var7 = var8.getChannel;
                    var1 = _closure2_slot0;
                    var9 = var1.channel;
                    var10 = var6 == var9;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 57; continue _fun0003 }
 52:
                    var5 = var9.id;
 57:
                    var5 = var7.bind(var8)(var5);
                    var6 = var6 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 76; continue _fun0003 }
 71:
                    var1 = var5.guild_id;
 76:
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 87; continue _fun0003;
 83:
                    var1 = _closure2_slot2;
 87:
                    return var1;
                }
            };
            var15 = var10.bind(var11)(var9, var2);
            var _closure2_slot3 = var15;
            var2 = 21;
            var2 = var7[var2];
            var9 = var3.bind(var4)(var2);
            var2 = var9.useMessageRendererTheme;
            var11 = var2.bind(var9)();
            var _closure2_slot4 = var11;
            var2 = 9;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useEmbedThemeColors;
            var2 = var2.bind(var3)(var11);
            var9 = var2.colors;
            var7 = null;
            var2 = var7 != var15;
            var10 = undefined;
            if(!var2) { _fun0001_ip = 212; continue _fun0001 }
 196:
            var12 = _closure1_slot4;
            var3 = 128;
            var2 = false;
            var10 = var12.bind(var4)(var15, var3, var2);
 212:
            var2 = var7 != var10;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 252; continue _fun0001 }
 221:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAssetUriForEmbed;
            var12 = var2.bind(var3)(var10);
 252:
            var17 = var8.participant_count;
            var13 = var8.speaker_count;
            _closure2_slot5 = var13;
            var10 = _closure1_slot3;
            var3 = var10.useMemo;
            var2 = var7 == var15;
            var14 = undefined;
            if(var2) { _fun0001_ip = 291; continue _fun0001 }
 286:
            var14 = var15.id;
 291:
            var2 = new Array(5);
            var2[0] = var14;
            var16 = var5.channel;
            var18 = var7 == var16;
            var14 = undefined;
            if(var18) { _fun0001_ip = 318; continue _fun0001 }
 313:
            var14 = var16.id;
 318:
            var2[1] = var14;
            var2[2] = var13;
            var13 = var8.members;
            var2[3] = var13;
            var2[4] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = global;
                    var3 = var5.Array;
                    var2 = var3.isArray;
                    var1 = _closure2_slot1;
                    var1 = var1.members;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0004_ip = 40; continue _fun0004 }
 34:
                    var6 = new Array(0);
                    _fun0004_ip = 50; continue _fun0004;
 40:
                    var1 = _closure2_slot1;
                    var6 = var1.members;
 50:
                    var3 = var6.slice;
                    var2 = 0;
                    var1 = 3;
                    var6 = var3.bind(var6)(var2, var1);
                    var3 = var6.map;
                    var1 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var2 = arg1;
                            var5 = _closure1_slot5;
                            var15 = var2.user;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var16 = var4;
                            var1 = new var16[var5](var15, var14);
                            var7 = var1 instanceof Object ? var1 : var4;
                            var1 = {};
                            var5 = var2.nick;
                            var10 = null;
                            if(!(var10 == var5)) { _fun0005_ip = 132; continue _fun0005 }
 49:
                            var8 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 11;
                            var6 = var6[var4];
                            var4 = undefined;
                            var9 = var8.bind(var4)(var6);
                            var8 = var9.getName;
                            var6 = _closure2_slot3;
                            var12 = var10 == var6;
                            var6 = undefined;
                            if(var12) { _fun0005_ip = 102; continue _fun0005 }
 93:
                            var12 = _closure2_slot3;
                            var6 = var12.id;
 102:
                            var11 = _closure2_slot0;
                            var11 = var11.channel;
                            var12 = var10 == var11;
                            var4 = undefined;
                            if(var12) { _fun0005_ip = 125; continue _fun0005 }
 120:
                            var4 = var11.id;
 125:
                            var5 = var8.bind(var9)(var6, var4, var7);
 132:
                            var6 = var10 != var5;
                            var4 = '';
                            if(!var6) { _fun0005_ip = 146; continue _fun0005 }
 143:
                            var4 = var5;
 146:
                            var1['name'] = var4;
                            var2 = var2.avatar;
                            if(!(var10 == var2)) { _fun0005_ip = 227; continue _fun0005 }
 160:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 10;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.getAssetUriForEmbed;
                            var6 = var7.getAvatarSource;
                            var9 = _closure2_slot3;
                            var9 = var10 == var9;
                            if(var9) { _fun0005_ip = 217; continue _fun0005 }
 208:
                            var8 = _closure2_slot3;
                            var3 = var8.id;
 217:
                            var3 = var6.bind(var7)(var3);
                            var2 = var4.bind(var5)(var3);
 227:
                            var1['icon'] = var2;
                            return var1;
                        }
                    };
                    var1 = var3.bind(var6)(var1);
                    var6 = _closure2_slot5;
                    var3 = var1.length;
                    var14 = var6 - var3;
                    if(!(var14 > var2)) { _fun0004_ip = 297; continue _fun0004 }
 103:
                    var3 = var1.push;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 12;
                    var8 = var11[var6];
                    var9 = undefined;
                    var8 = var10.bind(var9)(var8);
                    var13 = var8.intl;
                    var12 = var13.formatToPlainString;
                    var6 = var11[var6];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var8 = var6.L1pCBQ;
                    var6 = {};
                    var6['count'] = var14;
                    var8 = var12.bind(var13)(var8, var6);
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = '+';
                    var5 = var6.bind(var5)(var8);
                    var2['name'] = var5;
                    var5 = 10;
                    var5 = var11[var5];
                    var6 = var10.bind(var9)(var5);
                    var5 = var6.getAssetUriForEmbed;
                    var8 = 13;
                    var8 = var11[var8];
                    var10 = var10.bind(var9)(var8);
                    var8 = var10.isThemeDark;
                    var4 = _closure2_slot4;
                    var4 = var8.bind(var10)(var4);
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    if(var4) { _fun0004_ip = 271; continue _fun0004 }
 257:
                    var4 = 15;
                    var4 = var10[var4];
                    var4 = var8.bind(var9)(var4);
                    _fun0004_ip = 283; continue _fun0004;
 271:
                    var7 = 14;
                    var7 = var10[var7];
                    var4 = var8.bind(var9)(var7);
 283:
                    var4 = var5.bind(var6)(var4);
                    var2['icon'] = var4;
                    var2 = var3.bind(var1)(var2);
 297:
                    return var1;
                }
            };
            var10 = var3.bind(var10)(var1, var2);
            var3 = _closure1_slot10;
            var21 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 22;
            var1 = var16[var1];
            var2 = var21.bind(var4)(var1);
            var1 = {};
            var20 = _closure1_slot0;
            var14 = 16;
            var11 = var16[var14];
            var19 = var20.bind(var4)(var11);
            var18 = var19.processColorOrThrow;
            var11 = 17;
            var13 = var16[var11];
            var13 = var21.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.GREEN_360;
            var13 = var18.bind(var19)(var13);
            var1['acceptLabelBackgroundColor'] = var13;
            var13 = var9.acceptLabelGreenColor;
            var1['acceptLabelColor'] = var13;
            var13 = 12;
            var18 = var16[var13];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var13];
            var16 = var20.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.ZYO5OD;
            var16 = var18.bind(var19)(var16);
            var1['acceptLabelText'] = var16;
            var16 = var9.backgroundColor;
            var1['backgroundColor'] = var16;
            var16 = var9.borderColor;
            var1['borderColor'] = var16;
            var16 = false;
            var1['canBeAccepted'] = var16;
            var16 = true;
            var1['embedCanBeTapped'] = var16;
            var16 = _closure1_slot8;
            var16 = var16.STAGE_INSTANCE;
            var1['extendedType'] = var16;
            var1['guildIcon'] = var12;
            var16 = var7 == var15;
            var12 = undefined;
            if(var16) { _fun0001_ip = 563; continue _fun0001 }
 558:
            var12 = var15.name;
 563:
            var1['guildName'] = var12;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = var15[var14];
            var18 = var12.bind(var4)(var14);
            var16 = var18.processColorOrThrow;
            var14 = _closure1_slot1;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.unsafe_rawColors;
            var11 = var11.GREEN_360;
            var11 = var16.bind(var18)(var11);
            var1['headerColor'] = var11;
            var11 = 10;
            var16 = var15[var11];
            var19 = var12.bind(var4)(var16);
            var18 = var19.getAssetUriForEmbed;
            var16 = 18;
            var16 = var15[var16];
            var16 = var14.bind(var4)(var16);
            var16 = var18.bind(var19)(var16);
            var1['headerIcon'] = var16;
            var16 = var15[var13];
            var16 = var12.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var13 = var15[var13];
            var13 = var12.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.X2K3//;
            var16 = var16.bind(var18)(var13);
            var13 = var16.toUpperCase;
            var13 = var13.bind(var16)();
            var1['headerText'] = var13;
            var13 = global;
            var13 = var13.HermesInternal;
            var16 = var13.concat;
            var13 = '';
            var13 = var16.bind(var13)(var17);
            var1['listenerCount'] = var13;
            var11 = var15[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.getAssetUriForEmbed;
            var11 = 19;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var12.bind(var13)(var11);
            var1['listenerIcon'] = var11;
            var1['speakers'] = var10;
            var1['subtitle'] = var4;
            var10 = 15;
            var1['thumbnailCornerRadius'] = var10;
            var9 = var9.titleColor;
            var1['titleColor'] = var9;
            var8 = var8.topic;
            var1['titleText'] = var8;
            var5 = var5.type;
            if(!(var7 == var5)) { _fun0001_ip = 847; continue _fun0001 }
 837:
            var6 = _closure1_slot9;
            var5 = var6.GUILD;
 847:
            var1['type'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/StageInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function StageInviteEmbed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var6 = var1.invite;
            var2 = var6.stage_instance;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0006_ip = 55; continue _fun0006 }
 24:
            var5 = _closure1_slot10;
            var4 = _closure1_slot11;
            var3 = {};
            var3['invite'] = var6;
            var3['stageInstance'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 55:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createStageInviteEmbed(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var18 = arg2;
            var _closure2_slot0 = var3;
            var4 = var3.stage_instance;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 1020; continue _fun0007 }
 27:
            var5 = var3.stage_instance;
            var4 = var3.guild;
            if(!(var1 == var4)) { _fun0007_ip = 108; continue _fun0007 }
 42:
            var7 = _closure1_slot7;
            var6 = var7.getGuild;
            var10 = _closure1_slot6;
            var9 = var10.getChannel;
            var11 = var3.channel;
            var12 = var1 == var11;
            var8 = undefined;
            if(var12) { _fun0007_ip = 82; continue _fun0007 }
 77:
            var8 = var11.id;
 82:
            var8 = var9.bind(var10)(var8);
            var9 = var1 == var8;
            var4 = undefined;
            if(var9) { _fun0007_ip = 101; continue _fun0007 }
 96:
            var4 = var8.guild_id;
 101:
            var13 = var6.bind(var7)(var4);
            _fun0007_ip = 149; continue _fun0007;
 108:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 8;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.fromInviteGuild;
            var4 = var3.guild;
            var13 = var6.bind(var7)(var4);
 149:
            var _closure2_slot1 = var13;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 9;
            var6 = var7[var6];
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var6 = var6.bind(var7)(var18);
            var6 = var6.colors;
            var8 = var1 != var13;
            var11 = undefined;
            if(!var8) { _fun0007_ip = 213; continue _fun0007 }
 197:
            var10 = _closure1_slot4;
            var9 = 128;
            var8 = false;
            var11 = var10.bind(var7)(var13, var9, var8);
 213:
            var8 = var1 != var11;
            var10 = undefined;
            if(!var8) { _fun0007_ip = 253; continue _fun0007 }
 222:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 10;
            var8 = var12[var8];
            var9 = var9.bind(var7)(var8);
            var8 = var9.getAssetUriForEmbed;
            var10 = var8.bind(var9)(var11);
 253:
            var15 = var5.participant_count;
            var12 = var5.speaker_count;
            var11 = global;
            var14 = var11.Array;
            var9 = var14.isArray;
            var8 = var5.members;
            var8 = var9.bind(var14)(var8);
            if(var8) { _fun0007_ip = 298; continue _fun0007 }
 292:
            var9 = new Array(0);
            _fun0007_ip = 304; continue _fun0007;
 298:
            var9 = var5.members;
 304:
            var8 = var9.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure1_slot5;
                    var15 = var2.user;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var16 = var4;
                    var1 = new var16[var5](var15, var14);
                    var7 = var1 instanceof Object ? var1 : var4;
                    var1 = {};
                    var5 = var2.nick;
                    var10 = null;
                    if(!(var10 == var5)) { _fun0008_ip = 132; continue _fun0008 }
 49:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 11;
                    var6 = var6[var4];
                    var4 = undefined;
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.getName;
                    var6 = _closure2_slot1;
                    var12 = var10 == var6;
                    var6 = undefined;
                    if(var12) { _fun0008_ip = 102; continue _fun0008 }
 93:
                    var12 = _closure2_slot1;
                    var6 = var12.id;
 102:
                    var11 = _closure2_slot0;
                    var11 = var11.channel;
                    var12 = var10 == var11;
                    var4 = undefined;
                    if(var12) { _fun0008_ip = 125; continue _fun0008 }
 120:
                    var4 = var11.id;
 125:
                    var5 = var8.bind(var9)(var6, var4, var7);
 132:
                    var6 = var10 != var5;
                    var4 = '';
                    if(!var6) { _fun0008_ip = 146; continue _fun0008 }
 143:
                    var4 = var5;
 146:
                    var1['name'] = var4;
                    var2 = var2.avatar;
                    if(!(var10 == var2)) { _fun0008_ip = 227; continue _fun0008 }
 160:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 10;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getAssetUriForEmbed;
                    var6 = var7.getAvatarSource;
                    var9 = _closure2_slot1;
                    var9 = var10 == var9;
                    if(var9) { _fun0008_ip = 217; continue _fun0008 }
 208:
                    var8 = _closure2_slot1;
                    var3 = var8.id;
 217:
                    var3 = var6.bind(var7)(var3);
                    var2 = var4.bind(var5)(var3);
 227:
                    var1['icon'] = var2;
                    return var1;
                }
            };
            var14 = var8.bind(var9)(var2);
            var9 = var14.slice;
            var2 = 0;
            var8 = 3;
            var8 = var9.bind(var14)(var2, var8);
            var9 = var8.length;
            var21 = var12 - var9;
            if(!(var21 > var2)) { _fun0007_ip = 536; continue _fun0007 }
 351:
            var9 = var8.push;
            var2 = {};
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 12;
            var14 = var19[var12];
            var14 = var17.bind(var7)(var14);
            var20 = var14.intl;
            var16 = var20.formatToPlainString;
            var12 = var19[var12];
            var12 = var17.bind(var7)(var12);
            var12 = var12.t;
            var14 = var12.L1pCBQ;
            var12 = {};
            var12['count'] = var21;
            var16 = var16.bind(var20)(var14, var12);
            var12 = var11.HermesInternal;
            var14 = var12.concat;
            var12 = '+';
            var12 = var14.bind(var12)(var16);
            var2['name'] = var12;
            var12 = 10;
            var12 = var19[var12];
            var16 = var17.bind(var7)(var12);
            var14 = var16.getAssetUriForEmbed;
            var12 = 13;
            var12 = var19[var12];
            var17 = var17.bind(var7)(var12);
            var12 = var17.isThemeDark;
            var12 = var12.bind(var17)(var18);
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var12) { _fun0007_ip = 510; continue _fun0007 }
 496:
            var12 = 15;
            var12 = var19[var12];
            var12 = var18.bind(var7)(var12);
            _fun0007_ip = 522; continue _fun0007;
 510:
            var17 = 14;
            var17 = var19[var17];
            var12 = var18.bind(var7)(var17);
 522:
            var12 = var14.bind(var16)(var12);
            var2['icon'] = var12;
            var2 = var9.bind(var8)(var2);
 536:
            var2 = {};
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 16;
            var9 = var16[var12];
            var18 = var19.bind(var7)(var9);
            var17 = var18.processColorOrThrow;
            var20 = _closure1_slot1;
            var9 = 17;
            var14 = var16[var9];
            var14 = var20.bind(var7)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.GREEN_360;
            var14 = var17.bind(var18)(var14);
            var2['acceptLabelBackgroundColor'] = var14;
            var14 = var6.acceptLabelGreenColor;
            var2['acceptLabelColor'] = var14;
            var14 = 12;
            var17 = var16[var14];
            var17 = var19.bind(var7)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var14];
            var16 = var19.bind(var7)(var16);
            var16 = var16.t;
            var16 = var16.ZYO5OD;
            var16 = var17.bind(var18)(var16);
            var2['acceptLabelText'] = var16;
            var16 = var6.backgroundColor;
            var2['backgroundColor'] = var16;
            var16 = var6.borderColor;
            var2['borderColor'] = var16;
            var16 = false;
            var2['canBeAccepted'] = var16;
            var16 = true;
            var2['embedCanBeTapped'] = var16;
            var16 = _closure1_slot8;
            var16 = var16.STAGE_INSTANCE;
            var2['extendedType'] = var16;
            var2['guildIcon'] = var10;
            var16 = var1 == var13;
            var10 = undefined;
            if(var16) { _fun0007_ip = 732; continue _fun0007 }
 727:
            var10 = var13.name;
 732:
            var2['guildName'] = var10;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var12 = var13[var12];
            var17 = var10.bind(var7)(var12);
            var16 = var17.processColorOrThrow;
            var12 = _closure1_slot1;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.GREEN_360;
            var9 = var16.bind(var17)(var9);
            var2['headerColor'] = var9;
            var9 = 10;
            var16 = var13[var9];
            var18 = var10.bind(var7)(var16);
            var17 = var18.getAssetUriForEmbed;
            var16 = 18;
            var16 = var13[var16];
            var16 = var12.bind(var7)(var16);
            var16 = var17.bind(var18)(var16);
            var2['headerIcon'] = var16;
            var16 = var13[var14];
            var16 = var10.bind(var7)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var13[var14];
            var14 = var10.bind(var7)(var14);
            var14 = var14.t;
            var14 = var14.X2K3//;
            var16 = var16.bind(var17)(var14);
            var14 = var16.toUpperCase;
            var14 = var14.bind(var16)();
            var2['headerText'] = var14;
            var11 = var11.HermesInternal;
            var14 = var11.concat;
            var11 = '';
            var11 = var14.bind(var11)(var15);
            var2['listenerCount'] = var11;
            var9 = var13[var9];
            var11 = var10.bind(var7)(var9);
            var10 = var11.getAssetUriForEmbed;
            var9 = 19;
            var9 = var13[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var10.bind(var11)(var9);
            var2['listenerIcon'] = var9;
            var2['speakers'] = var8;
            var2['subtitle'] = var7;
            var7 = 15;
            var2['thumbnailCornerRadius'] = var7;
            var6 = var6.titleColor;
            var2['titleColor'] = var6;
            var5 = var5.topic;
            var2['titleText'] = var5;
            var3 = var3.type;
            if(!(var1 == var3)) { _fun0007_ip = 1014; continue _fun0007 }
 1004:
            var4 = _closure1_slot9;
            var3 = var4.GUILD;
 1014:
            var2['type'] = var3;
            return var2;
 1020:
            return var1;
        }
    };
    var3['createStageInviteEmbed'] = var2;
    return var1;
})();