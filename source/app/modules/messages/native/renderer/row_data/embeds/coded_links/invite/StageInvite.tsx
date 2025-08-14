// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/StageInvite.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildIconSource;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.CodedLinkExtendedType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot8 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/StageInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createStageInviteEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var18 = arg2;
            var _closure2_slot0 = var3;
            var4 = var3.stage_instance;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 1027; continue _fun0001 }
 27:
            var5 = var3.stage_instance;
            var4 = var3.guild;
            if(!(var1 == var4)) { _fun0001_ip = 108; continue _fun0001 }
 42:
            var7 = _closure1_slot6;
            var6 = var7.getGuild;
            var10 = _closure1_slot5;
            var9 = var10.getChannel;
            var11 = var3.channel;
            var12 = var1 == var11;
            var8 = undefined;
            if(var12) { _fun0001_ip = 82; continue _fun0001 }
 77:
            var8 = var11.id;
 82:
            var8 = var9.bind(var10)(var8);
            var9 = var1 == var8;
            var4 = undefined;
            if(var9) { _fun0001_ip = 101; continue _fun0001 }
 96:
            var4 = var8.guild_id;
 101:
            var13 = var6.bind(var7)(var4);
            _fun0001_ip = 149; continue _fun0001;
 108:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var6 = var6[var4];
            var4 = undefined;
            var7 = var7.bind(var4)(var6);
            var6 = var7.fromInviteGuild;
            var4 = var3.guild;
            var13 = var6.bind(var7)(var4);
 149:
            var _closure2_slot1 = var13;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 7;
            var6 = var8[var6];
            var8 = undefined;
            var6 = var7.bind(var8)(var6);
            var6 = var6.bind(var8)(var18);
            var6 = var6.colors;
            var7 = var1 != var13;
            var10 = undefined;
            if(!var7) { _fun0001_ip = 213; continue _fun0001 }
 197:
            var11 = _closure1_slot3;
            var9 = 128;
            var7 = false;
            var10 = var11.bind(var8)(var13, var9, var7);
 213:
            var7 = var1 != var10;
            var11 = undefined;
            if(!var7) { _fun0001_ip = 253; continue _fun0001 }
 222:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 8;
            var7 = var12[var7];
            var9 = var9.bind(var8)(var7);
            var7 = var9.getAssetUriForEmbed;
            var11 = var7.bind(var9)(var10);
 253:
            var16 = var5.participant_count;
            var10 = var5.speaker_count;
            var12 = global;
            var14 = var12.Array;
            var9 = var14.isArray;
            var7 = var5.members;
            var7 = var9.bind(var14)(var7);
            if(var7) { _fun0001_ip = 298; continue _fun0001 }
 292:
            var9 = new Array(0);
            _fun0001_ip = 304; continue _fun0001;
 298:
            var9 = var5.members;
 304:
            var7 = var9.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure1_slot4;
                    var15 = var2.user;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var16 = var4;
                    var1 = new var16[var5](var15, var14);
                    var7 = var1 instanceof Object ? var1 : var4;
                    var1 = {};
                    var5 = var2.nick;
                    var10 = null;
                    if(!(var10 == var5)) { _fun0002_ip = 132; continue _fun0002 }
 49:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var6 = var6[var4];
                    var4 = undefined;
                    var9 = var8.bind(var4)(var6);
                    var8 = var9.getName;
                    var6 = _closure2_slot1;
                    var12 = var10 == var6;
                    var6 = undefined;
                    if(var12) { _fun0002_ip = 102; continue _fun0002 }
 93:
                    var12 = _closure2_slot1;
                    var6 = var12.id;
 102:
                    var11 = _closure2_slot0;
                    var11 = var11.channel;
                    var12 = var10 == var11;
                    var4 = undefined;
                    if(var12) { _fun0002_ip = 125; continue _fun0002 }
 120:
                    var4 = var11.id;
 125:
                    var5 = var8.bind(var9)(var6, var4, var7);
 132:
                    var6 = var10 != var5;
                    var4 = '';
                    if(!var6) { _fun0002_ip = 146; continue _fun0002 }
 143:
                    var4 = var5;
 146:
                    var1['name'] = var4;
                    var2 = var2.avatar;
                    if(!(var10 == var2)) { _fun0002_ip = 227; continue _fun0002 }
 160:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getAssetUriForEmbed;
                    var6 = var7.getAvatarSource;
                    var9 = _closure2_slot1;
                    var9 = var10 == var9;
                    if(var9) { _fun0002_ip = 217; continue _fun0002 }
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
            var14 = var7.bind(var9)(var2);
            var9 = var14.slice;
            var2 = 0;
            var7 = 3;
            var9 = var9.bind(var14)(var2, var7);
            var7 = var9.length;
            var21 = var10 - var7;
            if(!(var21 > var2)) { _fun0001_ip = 538; continue _fun0001 }
 351:
            var7 = var9.push;
            var2 = {};
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var10 = 10;
            var14 = var19[var10];
            var14 = var17.bind(var8)(var14);
            var20 = var14.intl;
            var15 = var20.formatToPlainString;
            var10 = var19[var10];
            var10 = var17.bind(var8)(var10);
            var10 = var10.t;
            var14 = var10.L1pCBQ;
            var10 = {};
            var10['count'] = var21;
            var15 = var15.bind(var20)(var14, var10);
            var10 = var12.HermesInternal;
            var14 = var10.concat;
            var10 = '+';
            var10 = var14.bind(var10)(var15);
            var2['name'] = var10;
            var10 = 8;
            var10 = var19[var10];
            var15 = var17.bind(var8)(var10);
            var14 = var15.getAssetUriForEmbed;
            var10 = 11;
            var10 = var19[var10];
            var17 = var17.bind(var8)(var10);
            var10 = var17.isThemeDark;
            var10 = var10.bind(var17)(var18);
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            if(var10) { _fun0001_ip = 512; continue _fun0001 }
 498:
            var10 = 13;
            var10 = var19[var10];
            var10 = var18.bind(var8)(var10);
            _fun0001_ip = 524; continue _fun0001;
 512:
            var17 = 12;
            var17 = var19[var17];
            var10 = var18.bind(var8)(var17);
 524:
            var10 = var14.bind(var15)(var10);
            var2['icon'] = var10;
            var2 = var7.bind(var9)(var2);
 538:
            var2 = {};
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 14;
            var7 = var14[var10];
            var18 = var19.bind(var8)(var7);
            var17 = var18.processColorOrThrow;
            var20 = _closure1_slot1;
            var7 = 15;
            var15 = var14[var7];
            var15 = var20.bind(var8)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.GREEN_360;
            var15 = var17.bind(var18)(var15);
            var2['acceptLabelBackgroundColor'] = var15;
            var15 = var6.acceptLabelGreenColor;
            var2['acceptLabelColor'] = var15;
            var15 = 10;
            var17 = var14[var15];
            var17 = var19.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var14[var15];
            var14 = var19.bind(var8)(var14);
            var14 = var14.t;
            var14 = var14.ZYO5OD;
            var14 = var17.bind(var18)(var14);
            var2['acceptLabelText'] = var14;
            var14 = var6.backgroundColor;
            var2['backgroundColor'] = var14;
            var14 = var6.borderColor;
            var2['borderColor'] = var14;
            var14 = false;
            var2['canBeAccepted'] = var14;
            var14 = true;
            var2['embedCanBeTapped'] = var14;
            var14 = _closure1_slot7;
            var14 = var14.STAGE_INSTANCE;
            var2['extendedType'] = var14;
            var2['guildIcon'] = var11;
            var14 = var1 == var13;
            var11 = undefined;
            if(var14) { _fun0001_ip = 740; continue _fun0001 }
 735:
            var11 = var13.name;
 740:
            var2['guildName'] = var11;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = var14[var10];
            var18 = var11.bind(var8)(var10);
            var17 = var18.processColorOrThrow;
            var13 = _closure1_slot1;
            var10 = var14[var7];
            var10 = var13.bind(var8)(var10);
            var10 = var10.unsafe_rawColors;
            var10 = var10.GREEN_360;
            var10 = var17.bind(var18)(var10);
            var2['headerColor'] = var10;
            var10 = 8;
            var17 = var14[var10];
            var19 = var11.bind(var8)(var17);
            var18 = var19.getAssetUriForEmbed;
            var17 = 16;
            var17 = var14[var17];
            var17 = var13.bind(var8)(var17);
            var17 = var18.bind(var19)(var17);
            var2['headerIcon'] = var17;
            var17 = var14[var15];
            var17 = var11.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var14[var15];
            var15 = var11.bind(var8)(var15);
            var15 = var15.t;
            var15 = var15.X2K3//;
            var17 = var17.bind(var18)(var15);
            var15 = var17.toUpperCase;
            var15 = var15.bind(var17)();
            var2['headerText'] = var15;
            var12 = var12.HermesInternal;
            var15 = var12.concat;
            var12 = '';
            var12 = var15.bind(var12)(var16);
            var2['listenerCount'] = var12;
            var10 = var14[var10];
            var12 = var11.bind(var8)(var10);
            var11 = var12.getAssetUriForEmbed;
            var10 = 17;
            var10 = var14[var10];
            var10 = var13.bind(var8)(var10);
            var10 = var11.bind(var12)(var10);
            var2['listenerIcon'] = var10;
            var2['speakers'] = var9;
            var2['subtitle'] = var8;
            var2['thumbnailCornerRadius'] = var7;
            var6 = var6.titleColor;
            var2['titleColor'] = var6;
            var5 = var5.topic;
            var2['titleText'] = var5;
            var3 = var3.type;
            if(!(var1 == var3)) { _fun0001_ip = 1021; continue _fun0001 }
 1011:
            var4 = _closure1_slot8;
            var3 = var4.GUILD;
 1021:
            var2['type'] = var3;
            return var2;
 1027:
            return var1;
        }
    };
    var3['createStageInviteEmbed'] = var2;
    return var1;
})();