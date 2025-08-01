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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getGuildAcronym;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/VoiceChannelLinkEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function VoiceChannelLinkEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.code;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 15;
            var2 = var4[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var2 = var7.useMessageRendererTheme;
            var8 = var2.bind(var7)();
            var2 = 10;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var2 = var7.useEmbedThemeColors;
            var2 = var2.bind(var7)(var8);
            var7 = var2.colors;
            var12 = var2.baseColors;
            var8 = var9.split;
            var2 = '/';
            var9 = var8.bind(var9)(var2);
            var8 = _closure1_slot3;
            var2 = 2;
            var8 = var8.bind(var5)(var9, var2);
            var2 = 0;
            var2 = var8[var2];
            var _closure2_slot0 = var2;
            var2 = 1;
            var2 = var8[var2];
            var _closure2_slot1 = var2;
            var2 = 16;
            var8 = var4[var2];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var11)(var9, var8);
            var _closure2_slot2 = var13;
            var8 = var4[var2];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var10.bind(var11)(var9, var8);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var8 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var6 = _closure1_slot8;
                    var5 = var6.can;
                    var1 = _closure1_slot9;
                    var4 = var1.VIEW_CHANNEL;
                    var1 = _closure2_slot2;
                    var1 = var5.bind(var6)(var4, var1);
                    if(!var1) { _fun0002_ip = 69; continue _fun0002 }
 39:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot9;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2);
 69:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2, var1);
            var10 = null;
            var3 = var10 != var13;
            var1 = null;
            if(!var3) { _fun0001_ip = 954; continue _fun0001 }
 259:
            var3 = var13.isGuildVocal;
            var3 = var3.bind(var13)();
            var1 = null;
            if(!var3) { _fun0001_ip = 954; continue _fun0001 }
 277:
            var3 = var10 != var11;
            var1 = null;
            if(!var3) { _fun0001_ip = 954; continue _fun0001 }
 289:
            var1 = null;
            if(!var2) { _fun0001_ip = 954; continue _fun0001 }
 297:
            var3 = var10 == var11;
            var2 = undefined;
            if(var3) { _fun0001_ip = 311; continue _fun0001 }
 306:
            var2 = var11.icon;
 311:
            if(!(var10 == var2)) { _fun0001_ip = 337; continue _fun0001 }
 315:
            var2 = var10 != var11;
            var9 = undefined;
            if(!var2) { _fun0001_ip = 333; continue _fun0001 }
 324:
            var2 = _closure1_slot5;
            var9 = var2.bind(var5)(var11);
 333:
            var8 = undefined;
            _fun0001_ip = 422; continue _fun0001;
 337:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getGuildIconURL;
            var2 = {};
            var15 = var10 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 379; continue _fun0001 }
 374:
            var14 = var11.id;
 379:
            var2['id'] = var14;
            var15 = var10 == var11;
            var14 = undefined;
            if(var15) { _fun0001_ip = 397; continue _fun0001 }
 392:
            var14 = var11.icon;
 397:
            var2['icon'] = var14;
            var14 = true;
            var2['canAnimate'] = var14;
            var14 = 128;
            var2['size'] = var14;
            var8 = var3.bind(var4)(var2);
            var9 = undefined;
 422:
            var4 = _closure1_slot11;
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 17;
            var2 = var15[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var20 = var2;
            var19 = var12;
            var12 = copyDataProperties(var20, var19);
            var14 = _closure1_slot0;
            var12 = 12;
            var12 = var15[var12];
            var14 = var14.bind(var5)(var12);
            var12 = var14.isAndroid;
            var12 = var12.bind(var14)();
            var14 = undefined;
            if(!var12) { _fun0001_ip = 492; continue _fun0001 }
 488:
            var14 = '';
 492:
            var12 = 'headerText';
            var2[var12] = var14;
            var14 = var7.headerColor;
            var12 = 'headerColor';
            var2[var12] = var14;
            var12 = var13.isGuildStageVoice;
            var15 = var12.bind(var13)();
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 13;
            var16 = var14[var12];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var14[var12];
            var14 = var18.bind(var5)(var14);
            var14 = var14.t;
            if(var15) { _fun0001_ip = 586; continue _fun0001 }
 573:
            var15 = var14.gpqgam;
            var15 = var16.bind(var17)(var15);
            _fun0001_ip = 597; continue _fun0001;
 586:
            var14 = var14.7vb2cX;
            var15 = var16.bind(var17)(var14);
 597:
            var14 = 'acceptLabelText';
            var2[var14] = var15;
            var14 = 'onlineText';
            var2[var14] = var5;
            var14 = 'memberText';
            var2[var14] = var5;
            var16 = _closure1_slot4;
            var15 = var16.resolveAssetSource;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 14;
            var14 = var18[var14];
            var17 = var17.bind(var5)(var14);
            var14 = var17.getChannelIcon;
            var14 = var14.bind(var17)(var13);
            var14 = var15.bind(var16)(var14);
            var16 = var10 == var14;
            var15 = undefined;
            if(var16) { _fun0001_ip = 689; continue _fun0001 }
 683:
            var15 = var14.uri;
 689:
            var14 = 'channelIcon';
            var2[var14] = var15;
            var14 = var13.name;
            var13 = 'titleText';
            var2[var13] = var14;
            var14 = var7.titleColor;
            var13 = 'titleColor';
            var2[var13] = var14;
            var13 = var10 != var8;
            var10 = undefined;
            if(!var13) { _fun0001_ip = 739; continue _fun0001 }
 736:
            var10 = var8;
 739:
            var8 = 'thumbnailUrl';
            var2[var8] = var10;
            var8 = 'thumbnailText';
            var2[var8] = var9;
            var8 = 'subtitleColor';
            var2[var8] = var5;
            var9 = var7.acceptLabelGreenBackgroundColor;
            var8 = 'acceptLabelBackgroundColor';
            var2[var8] = var9;
            var8 = 'acceptLabelBorderColor';
            var2[var8] = var5;
            var8 = var7.acceptLabelGreenColor;
            var7 = 'acceptLabelColor';
            var2[var7] = var8;
            var8 = true;
            var7 = 'embedCanBeTapped';
            var2[var7] = var8;
            var8 = false;
            var7 = 'canBeAccepted';
            var2[var7] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var12];
            var9 = var8.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var7 = var7[var12];
            var7 = var8.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.2wimj4;
            var7 = {};
            var11 = var11.name;
            var7['guildName'] = var11;
            var8 = var9.bind(var10)(var8, var7);
            var7 = 'channelName';
            var2[var7] = var8;
            var8 = '';
            var7 = 'subtitle';
            var2[var7] = var8;
            var6 = _closure1_slot10;
            var7 = var6.GUILD;
            var6 = 'type';
            var2[var6] = var7;
            var6 = 'inviteSplash';
            var2[var6] = var5;
            var1 = var4.bind(var5)(var3, var2);
 954:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createVoiceChannelLinkEmbed(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!(var1 != var8)) { _fun0003_ip = 844; continue _fun0003 }
 85:
            var2 = var8.isGuildVocal;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0003_ip = 844; continue _fun0003 }
 101:
            if(!(var1 != var9)) { _fun0003_ip = 844; continue _fun0003 }
 108:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var2 = _closure1_slot9;
            var2 = var2.VIEW_CHANNEL;
            var2 = var5.bind(var6)(var2, var8);
            if(!var2) { _fun0003_ip = 844; continue _fun0003 }
 140:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var2 = _closure1_slot9;
            var2 = var2.CONNECT;
            var2 = var5.bind(var6)(var2, var8);
            if(!var2) { _fun0003_ip = 844; continue _fun0003 }
 172:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = arg2;
            var2 = var5.bind(var4)(var2);
            var5 = var2.colors;
            var10 = var2.baseColors;
            var6 = var1 == var9;
            var2 = undefined;
            if(var6) { _fun0003_ip = 225; continue _fun0003 }
 220:
            var2 = var9.icon;
 225:
            if(!(var1 == var2)) { _fun0003_ip = 251; continue _fun0003 }
 229:
            var2 = var1 != var9;
            var7 = undefined;
            if(!var2) { _fun0003_ip = 247; continue _fun0003 }
 238:
            var2 = _closure1_slot5;
            var7 = var2.bind(var4)(var9);
 247:
            var6 = undefined;
            _fun0003_ip = 336; continue _fun0003;
 251:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 11;
            var2 = var12[var2];
            var12 = var11.bind(var4)(var2);
            var11 = var12.getGuildIconURL;
            var2 = {};
            var14 = var1 == var9;
            var13 = undefined;
            if(var14) { _fun0003_ip = 293; continue _fun0003 }
 288:
            var13 = var9.id;
 293:
            var2['id'] = var13;
            var14 = var1 == var9;
            var13 = undefined;
            if(var14) { _fun0003_ip = 311; continue _fun0003 }
 306:
            var13 = var9.icon;
 311:
            var2['icon'] = var13;
            var13 = true;
            var2['canAnimate'] = var13;
            var13 = 128;
            var2['size'] = var13;
            var6 = var11.bind(var12)(var2);
            var7 = undefined;
 336:
            var2 = {};
            var17 = var2;
            var16 = var10;
            var10 = copyDataProperties(var17, var16);
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 12;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            var11 = undefined;
            if(!var10) { _fun0003_ip = 386; continue _fun0003 }
 382:
            var11 = '';
 386:
            var10 = 'headerText';
            var2[var10] = var11;
            var11 = var5.headerColor;
            var10 = 'headerColor';
            var2[var10] = var11;
            var10 = var8.isGuildStageVoice;
            var12 = var10.bind(var8)();
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var10 = 13;
            var13 = var11[var10];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var11[var10];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            if(var12) { _fun0003_ip = 480; continue _fun0003 }
 467:
            var12 = var11.gpqgam;
            var12 = var13.bind(var14)(var12);
            _fun0003_ip = 491; continue _fun0003;
 480:
            var11 = var11.7vb2cX;
            var12 = var13.bind(var14)(var11);
 491:
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
            var11 = 14;
            var11 = var15[var11];
            var14 = var14.bind(var4)(var11);
            var11 = var14.getChannelIcon;
            var11 = var11.bind(var14)(var8);
            var11 = var12.bind(var13)(var11);
            var13 = var1 == var11;
            var12 = undefined;
            if(var13) { _fun0003_ip = 583; continue _fun0003 }
 577:
            var12 = var11.uri;
 583:
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
            if(!var11) { _fun0003_ip = 633; continue _fun0003 }
 630:
            var8 = var6;
 633:
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
 844:
            return var1;
        }
    };
    var3['createVoiceChannelLinkEmbed'] = var2;
    return var1;
})();