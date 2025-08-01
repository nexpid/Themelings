// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function FriendInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.invite;
            var12 = var1.isOwnInvite;
            var2 = var1.currentUserId;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var4 = undefined;
            var3 = var10.bind(var4)(var1);
            var1 = var3.useMessageRendererTheme;
            var8 = var1.bind(var3)();
            var1 = 5;
            var1 = var11[var1];
            var3 = var10.bind(var4)(var1);
            var1 = var3.useEmbedThemeColors;
            var1 = var1.bind(var3)(var8);
            var8 = var1.colors;
            var15 = var1.baseColors;
            var3 = var6.inviter;
            var _closure2_slot0 = var3;
            var9 = _closure1_slot1;
            var1 = 7;
            var1 = var11[var1];
            var9 = var9.bind(var4)(var1);
            var1 = var9.useUserTag;
            var1 = var1.bind(var9)(var3);
            var9 = 10;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.useStateFromStores;
            var13 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var13;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.isFriend;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var7);
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var22 = 6;
            var10 = var7[var22];
            var10 = var13.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var7[var22];
            var7 = var13.bind(var4)(var7);
            var7 = var7.t;
            if(var12) { _fun0001_ip = 229; continue _fun0001 }
 216:
            var12 = var7.PYJHW1;
            var19 = var10.bind(var11)(var12);
            _fun0001_ip = 240; continue _fun0001;
 229:
            var7 = var7.eQyu1N;
            var19 = var10.bind(var11)(var7);
 240:
            var7 = null;
            var11 = var7 == var3;
            var10 = undefined;
            if(var11) { _fun0001_ip = 256; continue _fun0001 }
 251:
            var10 = var3.username;
 256:
            var11 = var7 != var10;
            var14 = '';
            var16 = var14;
            if(!var11) { _fun0001_ip = 273; continue _fun0001 }
 270:
            var16 = var10;
 273:
            var10 = var7 != var3;
            var13 = var14;
            if(!var10) { _fun0001_ip = 286; continue _fun0001 }
 283:
            var13 = var1;
 286:
            var1 = var7 != var3;
            var12 = var14;
            if(!var1) { _fun0001_ip = 348; continue _fun0001 }
 296:
            var11 = _closure1_slot3;
            var10 = var11.resolveAssetSource;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 8;
            var1 = var18[var1];
            var17 = var17.bind(var4)(var1);
            var1 = var17.getUserAvatarSource;
            var1 = var1.bind(var17)(var3);
            var1 = var10.bind(var11)(var1);
            var12 = var1.uri;
 348:
            var10 = var7 == var3;
            var1 = undefined;
            if(var10) { _fun0001_ip = 362; continue _fun0001 }
 357:
            var1 = var3.id;
 362:
            if(!(var1 !== var2)) { _fun0001_ip = 464; continue _fun0001 }
 366:
            var3 = var8.acceptLabelGreenColor;
            var2 = var8.acceptLabelGreenBackgroundColor;
            var10 = _closure1_slot0;
            var1 = _closure1_slot2;
            var11 = var1[var22];
            var11 = var10.bind(var4)(var11);
            var20 = var11.intl;
            var18 = var20.string;
            var1 = var1[var22];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            if(var9) { _fun0001_ip = 443; continue _fun0001 }
 422:
            var9 = var1.ib7Ng4;
            var17 = var18.bind(var20)(var9);
            var10 = var3;
            var11 = var2;
            var9 = true;
            _fun0001_ip = 530; continue _fun0001;
 443:
            var1 = var1.xhxnPj;
            var17 = var18.bind(var20)(var1);
            var9 = true;
            var10 = var3;
            var11 = var2;
            _fun0001_ip = 530; continue _fun0001;
 464:
            var10 = var8.acceptLabelDisabledColor;
            var11 = var8.acceptLabelDisabledBackgroundColor;
            var21 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = var1[var22];
            var18 = var21.bind(var4)(var18);
            var20 = var18.intl;
            var18 = var20.string;
            var1 = var1[var22];
            var1 = var21.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ib7Ng4;
            var17 = var18.bind(var20)(var1);
            var9 = false;
 530:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 11;
            var1 = var18[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var24 = var1;
            var23 = var15;
            var15 = copyDataProperties(var24, var23);
            var18 = 25;
            var15 = 'thumbnailCornerRadius';
            var1[var15] = var18;
            var15 = var7 != var19;
            var18 = undefined;
            if(!var15) { _fun0001_ip = 597; continue _fun0001 }
 587:
            var15 = var19.toUpperCase;
            var18 = var15.bind(var19)();
 597:
            var15 = 'headerText';
            var1[var15] = var18;
            var18 = var8.headerColor;
            var15 = 'headerColor';
            var1[var15] = var18;
            var15 = 'acceptLabelText';
            var1[var15] = var17;
            var15 = 'channelIcon';
            var1[var15] = var4;
            var15 = 'titleText';
            var1[var15] = var16;
            var16 = var8.titleColor;
            var15 = 'titleColor';
            var1[var15] = var16;
            var16 = var7 != var12;
            var15 = undefined;
            if(!var16) { _fun0001_ip = 675; continue _fun0001 }
 672:
            var15 = var12;
 675:
            var12 = 'thumbnailUrl';
            var1[var12] = var15;
            var12 = 'subtitle';
            var1[var12] = var13;
            var12 = undefined;
            if(!(var14 !== var13)) { _fun0001_ip = 705; continue _fun0001 }
 699:
            var12 = var8.subtitleColor;
 705:
            var8 = 'subtitleColor';
            var1[var8] = var12;
            var8 = 'acceptLabelBackgroundColor';
            var1[var8] = var11;
            var8 = 'acceptLabelBorderColor';
            var1[var8] = var4;
            var8 = 'acceptLabelColor';
            var1[var8] = var10;
            var10 = false;
            var8 = 'embedCanBeTapped';
            var1[var8] = var10;
            var8 = 'canBeAccepted';
            var1[var8] = var9;
            var9 = var6.channel;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 782; continue _fun0001 }
 777:
            var8 = var9.name;
 782:
            var10 = var7 != var8;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 794; continue _fun0001 }
 791:
            var9 = var8;
 794:
            var8 = 'channelName';
            var1[var8] = var9;
            var6 = var6.type;
            if(!(var7 == var6)) { _fun0001_ip = 822; continue _fun0001 }
 812:
            var5 = _closure1_slot5;
            var6 = var5.FRIEND;
 822:
            var5 = 'type';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createFriendInvite(arg1, arg2, arg3, arg4) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var6 = undefined;
            var4 = var4.bind(var6)(var1);
            var1 = arg4;
            var1 = var4.bind(var6)(var1);
            var5 = var1.colors;
            var13 = var1.baseColors;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var22 = 6;
            var4 = var1[var22];
            var4 = var8.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.string;
            var1 = var1[var22];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            var8 = arg2;
            if(var8) { _fun0003_ip = 110; continue _fun0003 }
 97:
            var8 = var1.PYJHW1;
            var17 = var4.bind(var7)(var8);
            _fun0003_ip = 121; continue _fun0003;
 110:
            var1 = var1.eQyu1N;
            var17 = var4.bind(var7)(var1);
 121:
            var1 = var3.inviter;
            var4 = null;
            var1 = var4 != var1;
            var12 = '';
            var14 = var12;
            if(!var1) { _fun0003_ip = 154; continue _fun0003 }
 143:
            var1 = var3.inviter;
            var14 = var1.username;
 154:
            var1 = var3.inviter;
            var1 = var4 != var1;
            var11 = var12;
            if(!var1) { _fun0003_ip = 207; continue _fun0003 }
 170:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var8 = var7.bind(var6)(var1);
            var7 = var8.getUserTag;
            var1 = var3.inviter;
            var11 = var7.bind(var8)(var1);
 207:
            var1 = var3.inviter;
            var7 = var4 != var1;
            if(!var7) { _fun0003_ip = 255; continue _fun0003 }
 220:
            var9 = _closure1_slot4;
            var8 = var9.isFriend;
            var10 = var3.inviter;
            var15 = var4 == var10;
            var1 = undefined;
            if(var15) { _fun0003_ip = 250; continue _fun0003 }
 245:
            var1 = var10.id;
 250:
            var7 = var8.bind(var9)(var1);
 255:
            var1 = var3.inviter;
            var1 = var4 != var1;
            var10 = var12;
            if(!var1) { _fun0003_ip = 329; continue _fun0003 }
 271:
            var9 = _closure1_slot3;
            var8 = var9.resolveAssetSource;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 8;
            var1 = var16[var1];
            var16 = var15.bind(var6)(var1);
            var15 = var16.getUserAvatarSource;
            var1 = var3.inviter;
            var1 = var15.bind(var16)(var1);
            var1 = var8.bind(var9)(var1);
            var10 = var1.uri;
 329:
            var1 = var3.inviter;
            var9 = var4 == var1;
            var8 = undefined;
            if(var9) { _fun0003_ip = 349; continue _fun0003 }
 344:
            var8 = var1.id;
 349:
            var1 = arg3;
            if(!(var8 !== var1)) { _fun0003_ip = 454; continue _fun0003 }
 356:
            var18 = var5.acceptLabelGreenColor;
            var16 = var5.acceptLabelGreenBackgroundColor;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = var1[var22];
            var9 = var8.bind(var6)(var9);
            var20 = var9.intl;
            var19 = var20.string;
            var1 = var1[var22];
            var1 = var8.bind(var6)(var1);
            var1 = var1.t;
            if(var7) { _fun0003_ip = 433; continue _fun0003 }
 412:
            var7 = var1.ib7Ng4;
            var15 = var19.bind(var20)(var7);
            var8 = var18;
            var9 = var16;
            var7 = true;
            _fun0003_ip = 520; continue _fun0003;
 433:
            var1 = var1.xhxnPj;
            var15 = var19.bind(var20)(var1);
            var7 = true;
            var8 = var18;
            var9 = var16;
            _fun0003_ip = 520; continue _fun0003;
 454:
            var8 = var5.acceptLabelDisabledColor;
            var9 = var5.acceptLabelDisabledBackgroundColor;
            var21 = _closure1_slot0;
            var1 = _closure1_slot2;
            var19 = var1[var22];
            var19 = var21.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var1 = var1[var22];
            var1 = var21.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.ib7Ng4;
            var15 = var19.bind(var20)(var1);
            var7 = false;
 520:
            var1 = {};
            var24 = var1;
            var23 = var13;
            var13 = copyDataProperties(var24, var23);
            var16 = 25;
            var13 = 'thumbnailCornerRadius';
            var1[var13] = var16;
            var13 = var4 != var17;
            var16 = undefined;
            if(!var13) { _fun0003_ip = 563; continue _fun0003 }
 553:
            var13 = var17.toUpperCase;
            var16 = var13.bind(var17)();
 563:
            var13 = 'headerText';
            var1[var13] = var16;
            var16 = var5.headerColor;
            var13 = 'headerColor';
            var1[var13] = var16;
            var13 = 'acceptLabelText';
            var1[var13] = var15;
            var13 = 'channelIcon';
            var1[var13] = var6;
            var13 = 'titleText';
            var1[var13] = var14;
            var14 = var5.titleColor;
            var13 = 'titleColor';
            var1[var13] = var14;
            var14 = var4 != var10;
            var13 = undefined;
            if(!var14) { _fun0003_ip = 641; continue _fun0003 }
 638:
            var13 = var10;
 641:
            var10 = 'thumbnailUrl';
            var1[var10] = var13;
            var10 = 'subtitle';
            var1[var10] = var11;
            var10 = undefined;
            if(!(var12 !== var11)) { _fun0003_ip = 671; continue _fun0003 }
 665:
            var10 = var5.subtitleColor;
 671:
            var5 = 'subtitleColor';
            var1[var5] = var10;
            var5 = 'acceptLabelBackgroundColor';
            var1[var5] = var9;
            var5 = 'acceptLabelBorderColor';
            var1[var5] = var6;
            var5 = 'acceptLabelColor';
            var1[var5] = var8;
            var8 = false;
            var5 = 'embedCanBeTapped';
            var1[var5] = var8;
            var5 = 'canBeAccepted';
            var1[var5] = var7;
            var7 = var3.channel;
            var8 = var4 == var7;
            var5 = undefined;
            if(var8) { _fun0003_ip = 748; continue _fun0003 }
 743:
            var5 = var7.name;
 748:
            var7 = var4 != var5;
            var6 = undefined;
            if(!var7) { _fun0003_ip = 760; continue _fun0003 }
 757:
            var6 = var5;
 760:
            var5 = 'channelName';
            var1[var5] = var6;
            var3 = var3.type;
            if(!(var4 == var3)) { _fun0003_ip = 788; continue _fun0003 }
 778:
            var2 = _closure1_slot5;
            var3 = var2.FRIEND;
 788:
            var2 = 'type';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createFriendInvite'] = var2;
    return var1;
})();