// app/modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildAcronym;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createVoiceChannelLinkEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = '/';
            var5 = var2.bind(var3)(var1);
            var2 = _closure1_slot3;
            var4 = undefined;
            var1 = 2;
            var2 = var2.bind(var4)(var5, var1);
            var1 = 0;
            var5 = var2[var1];
            var1 = 1;
            var6 = var2[var1];
            var2 = _closure1_slot6;
            var1 = var2.getChannel;
            var8 = var1.bind(var2)(var6);
            var2 = _closure1_slot7;
            var1 = var2.getGuild;
            var9 = var1.bind(var2)(var5);
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var8.isGuildVocal;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!(var1 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var2 = _closure1_slot9;
            var2 = var2.VIEW_CHANNEL;
            var2 = var5.bind(var6)(var2, var8);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var2 = _closure1_slot9;
            var2 = var2.CONNECT;
            var2 = var5.bind(var6)(var2, var8);
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = arg2;
            var2 = var5.bind(var4)(var2);
            var5 = var2.colors;
            var10 = var2.baseColors;
            var6 = var1 == var9;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var9.icon;
case 8:
            if(!(var1 == var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var1 != var9;
            var7 = undefined;
            if(!var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = _closure1_slot5;
            var7 = var2.bind(var4)(var9);
case 12:
            var6 = undefined;
            _fun0001_ip = 14; continue _fun0001;
case 10:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 9;
            var2 = var12[var2];
            var12 = var11.bind(var4)(var2);
            var11 = var12.getGuildIconURL;
            var2 = {};
            var14 = var1 == var9;
            var13 = undefined;
            if(var14) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var13 = var9.id;
case 15:
            var2['id'] = var13;
            var14 = var1 == var9;
            var13 = undefined;
            if(var14) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var9.icon;
case 17:
            var2['icon'] = var13;
            var13 = true;
            var2['canAnimate'] = var13;
            var13 = 128;
            var2['size'] = var13;
            var6 = var11.bind(var12)(var2);
            var7 = undefined;
case 14:
            var2 = {};
            var17 = var2;
            var16 = var10;
            var10 = copyDataProperties(var17, var16);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 10;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            var11 = undefined;
            if(!var10) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = '';
case 19:
            var10 = 'headerText';
            var2[var10] = var11;
            var11 = var5.headerColor;
            var10 = 'headerColor';
            var2[var10] = var11;
            var10 = var8.isGuildStageVoice;
            var12 = var10.bind(var8)();
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var10 = 11;
            var13 = var11[var10];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var10];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            if(var12) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = var11.gpqgam;
            var12 = var13.bind(var14)(var12);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var11 = var11.7vb2cX;
            var12 = var13.bind(var14)(var11);
case 23:
            var11 = 'acceptLabelText';
            var2[var11] = var12;
            var11 = 'onlineText';
            var2[var11] = var4;
            var11 = 'memberText';
            var2[var11] = var4;
            var13 = _closure1_slot4;
            var12 = var13.resolveAssetSource;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.getChannelIcon;
            var11 = var11.bind(var14)(var8);
            var11 = var12.bind(var13)(var11);
            var13 = var1 == var11;
            var12 = undefined;
            if(var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = var11.uri;
case 24:
            var11 = 'channelIcon';
            var2[var11] = var12;
            var11 = var8.name;
            var8 = 'titleText';
            var2[var8] = var11;
            var11 = var5.titleColor;
            var8 = 'titleColor';
            var2[var8] = var11;
            var11 = var1 != var6;
            var8 = undefined;
            if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var6;
case 26:
            var6 = 'thumbnailUrl';
            var2[var6] = var8;
            var6 = 'thumbnailText';
            var2[var6] = var7;
            var6 = 'subtitleColor';
            var2[var6] = var4;
            var7 = var5.acceptLabelGreenBackgroundColor;
            var6 = 'acceptLabelBackgroundColor';
            var2[var6] = var7;
            var6 = 'acceptLabelBorderColor';
            var2[var6] = var4;
            var6 = var5.acceptLabelGreenColor;
            var5 = 'acceptLabelColor';
            var2[var5] = var6;
            var6 = true;
            var5 = 'embedCanBeTapped';
            var2[var5] = var6;
            var6 = false;
            var5 = 'canBeAccepted';
            var2[var5] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var10];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var5[var10];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.2wimj4;
            var5 = {};
            var9 = var9.name;
            var5['guildName'] = var9;
            var6 = var7.bind(var8)(var6, var5);
            var5 = 'channelName';
            var2[var5] = var6;
            var6 = '';
            var5 = 'subtitle';
            var2[var5] = var6;
            var3 = _closure1_slot10;
            var5 = var3.GUILD;
            var3 = 'type';
            var2[var3] = var5;
            var3 = 'inviteSplash';
            var2[var3] = var4;
            return var2;
case 2:
            return var1;
        }
    };
    var3['createVoiceChannelLinkEmbed'] = var2;
    return var1;
})();