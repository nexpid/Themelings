// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromInvite;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GroupDMInvite(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.invite;
            var _closure2_slot0 = var6;
            var14 = var1.isOwnInvite;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var4 = undefined;
            var7 = var3.bind(var4)(var1);
            var1 = var7.useMessageRendererTheme;
            var7 = var1.bind(var7)();
            var1 = 5;
            var1 = var8[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useEmbedThemeColors;
            var1 = var1.bind(var3)(var7);
            var12 = var1.colors;
            var13 = var1.baseColors;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var1 = var6.channel;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.channel;
                    var1 = null;
                    var3 = var1 != var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 46; continue _fun0002 }
 25:
                    var3 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var2 = var2.channel;
                    var1 = var3.bind(var4)(var2);
 46:
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var1, var3);
            var _closure2_slot1 = var3;
            var1 = var6.channel;
            var7 = null;
            var8 = var7 == var1;
            var10 = undefined;
            if(var8) { _fun0001_ip = 149; continue _fun0001 }
 143:
            var10 = var1.recipients;
 149:
            if(!(var7 == var10)) { _fun0001_ip = 157; continue _fun0001 }
 153:
            var10 = new Array(0);
 157:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var11 = var8.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0003_ip = 39; continue _fun0003 }
 30:
                    var4 = _closure2_slot1;
                    var1 = var4.id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var9.bind(var11)(var8, var1);
            var8 = var3;
            if(!(var7 != var1)) { _fun0001_ip = 215; continue _fun0001 }
 212:
            var8 = var1;
 215:
            var1 = var7 != var1;
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var21 = 7;
            var9 = var3[var21];
            var9 = var15.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var3[var21];
            var3 = var15.bind(var4)(var3);
            var3 = var3.t;
            if(var14) { _fun0001_ip = 279; continue _fun0001 }
 266:
            var14 = var3.3p3/BA;
            var18 = var9.bind(var11)(var14);
            _fun0001_ip = 290; continue _fun0001;
 279:
            var3 = var3.qmtuXF;
            var18 = var9.bind(var11)(var3);
 290:
            var14 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var21];
            var9 = var14.bind(var4)(var9);
            var11 = var9.intl;
            var9 = var11.string;
            var3 = var3[var21];
            var3 = var14.bind(var4)(var3);
            var3 = var3.t;
            if(var1) { _fun0001_ip = 347; continue _fun0001 }
 334:
            var14 = var3.XpeFYm;
            var14 = var9.bind(var11)(var14);
            _fun0001_ip = 358; continue _fun0001;
 347:
            var3 = var3.cEnaW1;
            var3 = var9.bind(var11)(var3);
 358:
            var9 = var10.length;
            var3 = 0;
            var3 = var9 > var3;
            var15 = undefined;
            if(!var3) { _fun0001_ip = 438; continue _fun0001 }
 374:
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = var3[var21];
            var11 = var9.bind(var4)(var11);
            var14 = var11.intl;
            var11 = var14.formatToPlainString;
            var3 = var3[var21];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var9 = var3.zRl6XV;
            var3 = {};
            var16 = var10.length;
            var3['count'] = var16;
            var15 = var11.bind(var14)(var9, var3);
 438:
            var3 = var7 != var8;
            var14 = null;
            if(!var3) { _fun0001_ip = 478; continue _fun0001 }
 447:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 8;
            var3 = var11[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.getChannelIconSource;
            var14 = var3.bind(var9)(var8);
 478:
            var3 = var7 != var14;
            var9 = null;
            if(!var3) { _fun0001_ip = 524; continue _fun0001 }
 487:
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 9;
            var3 = var16[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var11.ensureAvatarSource;
            var3 = var3.bind(var11)(var14);
            var9 = var3.uri;
 524:
            var3 = var7 == var8;
            var14 = undefined;
            if(var3) { _fun0001_ip = 538; continue _fun0001 }
 533:
            var14 = var8.name;
 538:
            if(var14) { _fun0001_ip = 572; continue _fun0001 }
 541:
            var3 = var10.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.username;
                return var1;
            };
            var10 = var3.bind(var10)(var2);
            var3 = var10.join;
            var2 = ', ';
            var14 = var3.bind(var10)(var2);
 572:
            if(var14) { _fun0001_ip = 627; continue _fun0001 }
 575:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var21];
            var3 = var11.bind(var4)(var3);
            var10 = var3.intl;
            var3 = var10.string;
            var2 = var2[var21];
            var2 = var11.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.LJpTRE;
            var14 = var3.bind(var10)(var2);
 627:
            if(var1) { _fun0001_ip = 696; continue _fun0001 }
 630:
            var10 = var12.acceptLabelGreenColor;
            var11 = var12.acceptLabelGreenBackgroundColor;
            var16 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var21];
            var2 = var16.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var21];
            var1 = var16.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var16 = var2.bind(var3)(var1);
            _fun0001_ip = 760; continue _fun0001;
 696:
            var10 = var12.acceptLabelDisabledColor;
            var11 = var12.acceptLabelDisabledBackgroundColor;
            var20 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = var3[var21];
            var17 = var20.bind(var4)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var3 = var3[var21];
            var3 = var20.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.cEnaW1;
            var16 = var17.bind(var19)(var3);
 760:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var17 = _closure1_slot2;
            var1 = 12;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var23 = var1;
            var22 = var13;
            var13 = copyDataProperties(var23, var22);
            var13 = var7 != var18;
            var17 = undefined;
            if(!var13) { _fun0001_ip = 815; continue _fun0001 }
 805:
            var13 = var18.toUpperCase;
            var17 = var13.bind(var18)();
 815:
            var13 = 'headerText';
            var1[var13] = var17;
            var17 = var12.headerColor;
            var13 = 'headerColor';
            var1[var13] = var17;
            var13 = 'acceptLabelText';
            var1[var13] = var16;
            var13 = 'onlineText';
            var1[var13] = var4;
            var13 = 'memberText';
            var1[var13] = var15;
            var13 = 'channelIcon';
            var1[var13] = var4;
            var13 = 'titleText';
            var1[var13] = var14;
            var13 = var12.titleColor;
            var12 = 'titleColor';
            var1[var12] = var13;
            var13 = var7 != var9;
            var12 = undefined;
            if(!var13) { _fun0001_ip = 915; continue _fun0001 }
 912:
            var12 = var9;
 915:
            var9 = 'thumbnailUrl';
            var1[var9] = var12;
            var9 = 'thumbnailText';
            var1[var9] = var4;
            var12 = '';
            var9 = 'subtitle';
            var1[var9] = var12;
            var9 = 'subtitleColor';
            var1[var9] = var4;
            var9 = 'acceptLabelBackgroundColor';
            var1[var9] = var11;
            var9 = 'acceptLabelBorderColor';
            var1[var9] = var4;
            var9 = 'acceptLabelColor';
            var1[var9] = var10;
            var10 = true;
            var9 = 'embedCanBeTapped';
            var1[var9] = var10;
            var10 = false;
            var9 = 'canBeAccepted';
            var1[var9] = var10;
            var10 = var7 != var8;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 1022; continue _fun0001 }
 1017:
            var9 = var8.name;
 1022:
            var8 = 'channelName';
            var1[var8] = var9;
            var6 = var6.type;
            if(!(var7 == var6)) { _fun0001_ip = 1050; continue _fun0001 }
 1040:
            var5 = _closure1_slot6;
            var6 = var5.GROUP_DM;
 1050:
            var5 = 'type';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createGroupDMInvite(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var6 = undefined;
            var7 = var4.bind(var6)(var1);
            var1 = arg3;
            var1 = var7.bind(var6)(var1);
            var11 = var1.colors;
            var12 = var1.baseColors;
            var1 = 6;
            var1 = var5[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.bind(var6)(var3);
            var5 = var1.channel;
            var15 = var1.recipients_;
            var8 = _closure1_slot5;
            var7 = var8.getChannel;
            var4 = null;
            var9 = var4 == var5;
            var1 = undefined;
            if(var9) { _fun0004_ip = 100; continue _fun0004 }
 95:
            var1 = var5.id;
 100:
            var7 = var7.bind(var8)(var1);
            var9 = var4 != var7;
            var8 = false;
            var1 = false;
            if(!var9) { _fun0004_ip = 121; continue _fun0004 }
 116:
            var1 = true;
            var5 = var7;
 121:
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var22 = 7;
            var9 = var7[var22];
            var9 = var13.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var7[var22];
            var7 = var13.bind(var6)(var7);
            var7 = var7.t;
            var13 = arg2;
            if(var13) { _fun0004_ip = 184; continue _fun0004 }
 171:
            var13 = var7.3p3/BA;
            var17 = var9.bind(var10)(var13);
            _fun0004_ip = 195; continue _fun0004;
 184:
            var7 = var7.qmtuXF;
            var17 = var9.bind(var10)(var7);
 195:
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var22];
            var9 = var13.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var7[var22];
            var7 = var13.bind(var6)(var7);
            var7 = var7.t;
            if(var1) { _fun0004_ip = 252; continue _fun0004 }
 239:
            var13 = var7.XpeFYm;
            var13 = var9.bind(var10)(var13);
            _fun0004_ip = 263; continue _fun0004;
 252:
            var7 = var7.cEnaW1;
            var7 = var9.bind(var10)(var7);
 263:
            var9 = var15.length;
            var7 = 0;
            var7 = var9 > var7;
            var14 = undefined;
            if(!var7) { _fun0004_ip = 343; continue _fun0004 }
 279:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = var7[var22];
            var10 = var9.bind(var6)(var10);
            var13 = var10.intl;
            var10 = var13.formatToPlainString;
            var7 = var7[var22];
            var7 = var9.bind(var6)(var7);
            var7 = var7.t;
            var9 = var7.zRl6XV;
            var7 = {};
            var16 = var15.length;
            var7['count'] = var16;
            var14 = var10.bind(var13)(var9, var7);
 343:
            var7 = var4 != var5;
            var13 = null;
            if(!var7) { _fun0004_ip = 383; continue _fun0004 }
 352:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 8;
            var7 = var10[var7];
            var9 = var9.bind(var6)(var7);
            var7 = var9.getChannelIconSource;
            var13 = var7.bind(var9)(var5);
 383:
            var9 = var4 != var13;
            var7 = null;
            if(!var9) { _fun0004_ip = 429; continue _fun0004 }
 392:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 9;
            var9 = var16[var9];
            var10 = var10.bind(var6)(var9);
            var9 = var10.ensureAvatarSource;
            var9 = var9.bind(var10)(var13);
            var7 = var9.uri;
 429:
            var9 = var4 == var5;
            var13 = undefined;
            if(var9) { _fun0004_ip = 443; continue _fun0004 }
 438:
            var13 = var5.name;
 443:
            if(var13) { _fun0004_ip = 479; continue _fun0004 }
 446:
            var10 = var15.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.username;
                return var1;
            };
            var15 = var10.bind(var15)(var9);
            var10 = var15.join;
            var9 = ', ';
            var13 = var10.bind(var15)(var9);
 479:
            if(var13) { _fun0004_ip = 534; continue _fun0004 }
 482:
            var16 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var22];
            var10 = var16.bind(var6)(var10);
            var15 = var10.intl;
            var10 = var15.string;
            var9 = var9[var22];
            var9 = var16.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.LJpTRE;
            var13 = var10.bind(var15)(var9);
 534:
            if(var1) { _fun0004_ip = 603; continue _fun0004 }
 537:
            var9 = var11.acceptLabelGreenColor;
            var10 = var11.acceptLabelGreenBackgroundColor;
            var18 = _closure1_slot0;
            var1 = _closure1_slot2;
            var15 = var1[var22];
            var15 = var18.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var1 = var1[var22];
            var1 = var18.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.XpeFYm;
            var15 = var15.bind(var16)(var1);
            _fun0004_ip = 667; continue _fun0004;
 603:
            var9 = var11.acceptLabelDisabledColor;
            var10 = var11.acceptLabelDisabledBackgroundColor;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = var18[var22];
            var19 = var21.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.cEnaW1;
            var15 = var19.bind(var20)(var18);
 667:
            var1 = {};
            var24 = var1;
            var23 = var12;
            var12 = copyDataProperties(var24, var23);
            var12 = var4 != var17;
            var16 = undefined;
            if(!var12) { _fun0004_ip = 698; continue _fun0004 }
 688:
            var12 = var17.toUpperCase;
            var16 = var12.bind(var17)();
 698:
            var12 = 'headerText';
            var1[var12] = var16;
            var16 = var11.headerColor;
            var12 = 'headerColor';
            var1[var12] = var16;
            var12 = 'acceptLabelText';
            var1[var12] = var15;
            var12 = 'onlineText';
            var1[var12] = var6;
            var12 = 'memberText';
            var1[var12] = var14;
            var12 = 'channelIcon';
            var1[var12] = var6;
            var12 = 'titleText';
            var1[var12] = var13;
            var12 = var11.titleColor;
            var11 = 'titleColor';
            var1[var11] = var12;
            var12 = var4 != var7;
            var11 = undefined;
            if(!var12) { _fun0004_ip = 798; continue _fun0004 }
 795:
            var11 = var7;
 798:
            var7 = 'thumbnailUrl';
            var1[var7] = var11;
            var7 = 'thumbnailText';
            var1[var7] = var6;
            var11 = '';
            var7 = 'subtitle';
            var1[var7] = var11;
            var7 = 'subtitleColor';
            var1[var7] = var6;
            var7 = 'acceptLabelBackgroundColor';
            var1[var7] = var10;
            var7 = 'acceptLabelBorderColor';
            var1[var7] = var6;
            var7 = 'acceptLabelColor';
            var1[var7] = var9;
            var9 = true;
            var7 = 'embedCanBeTapped';
            var1[var7] = var9;
            var7 = 'canBeAccepted';
            var1[var7] = var8;
            var7 = var4 != var5;
            var6 = undefined;
            if(!var7) { _fun0004_ip = 903; continue _fun0004 }
 898:
            var6 = var5.name;
 903:
            var5 = 'channelName';
            var1[var5] = var6;
            var3 = var3.type;
            if(!(var4 == var3)) { _fun0004_ip = 931; continue _fun0004 }
 921:
            var2 = _closure1_slot6;
            var3 = var2.GROUP_DM;
 931:
            var2 = 'type';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createGroupDMInvite'] = var2;
    return var1;
})();