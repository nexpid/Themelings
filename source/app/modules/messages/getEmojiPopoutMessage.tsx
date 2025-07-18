// app/modules/messages/getEmojiPopoutMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.EmojiSourceDataTypes;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = 'Custom Emoji Popout';
    var4['DEFAULT'] = var5;
    var5 = 'Custom Emoji Popout (Cross-Server)';
    var4['CROSS_SERVER'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Joined Current-Server)';
    var4['UPSELL_CURRENT_SERVER_JOINED'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Joined Cross-Server)';
    var4['UPSELL_CROSS_SERVER_JOINED'] = var5;
    var5 = 'Custom Emoji Popout (Upsell Not-Joined Cross-Server)';
    var4['UPSELL_CROSS_SERVER_JOINABLE'] = var5;
    var5 = 'Custom Emoji Popout (Soft Upsell)';
    var4['UPSELL_CROSS_SERVER_UNJOINABLE'] = var5;
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'GET_PREMIUM';
    var4['GET_PREMIUM'] = var5;
    var5 = 'JOIN_GUILD';
    var4['JOIN_GUILD'] = var5;
    var5 = 'UNAVAILABLE';
    var4['UNAVAILABLE'] = var5;
    var _closure1_slot4 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/getEmojiPopoutMessage.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EmojiPopoutType'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.sourceType;
            var8 = var2.expressionSourceApplication;
            var4 = var2.isPremium;
            var11 = var2.hasJoinedEmojiSourceGuild;
            var5 = var2.isUnusableRoleSubscriptionEmoji;
            var1 = var2.isDiscoverable;
            var3 = var2.emojiComesFromCurrentGuild;
            var7 = var2.userIsRoleSubscriber;
            var10 = var2.isRoleSubscriptionEmoji;
            var9 = var2.shouldHideRoleSubscriptionCTA;
            var19 = var2.onOpenPremiumSettings;
            var12 = _closure1_slot2;
            var12 = var12.APPLICATION;
            if(!(var13 === var12)) { _fun0001_ip = 95; continue _fun0001 }
 86:
            var12 = null;
            if(!(var12 == var8)) { _fun0001_ip = 738; continue _fun0001 }
 95:
            if(var4) { _fun0001_ip = 398; continue _fun0001 }
 101:
            if(var11) { _fun0001_ip = 213; continue _fun0001 }
 104:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = 1;
            var4 = var17[var12];
            var15 = undefined;
            var4 = var16.bind(var15)(var4);
            var14 = var4.intl;
            if(var1) { _fun0001_ip = 176; continue _fun0001 }
 134:
            var18 = var14.format;
            var4 = var17[var12];
            var4 = var16.bind(var15)(var4);
            var4 = var4.t;
            var13 = var4.U6vLcH;
            var4 = {};
            var4['openPremiumSettings'] = var19;
            var4 = var18.bind(var14)(var13, var4);
            _fun0001_ip = 208; continue _fun0001;
 176:
            var13 = var14.string;
            var12 = var17[var12];
            var12 = var16.bind(var15)(var12);
            var12 = var12.t;
            var12 = var12.FJ6Z09;
            var4 = var13.bind(var14)(var12);
 208:
            _fun0001_ip = 393; continue _fun0001;
 213:
            if(!var9) { _fun0001_ip = 219; continue _fun0001 }
 216:
            if(var5) { _fun0001_ip = 333; continue _fun0001 }
 219:
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var12 = 1;
            var15 = var17[var12];
            var13 = undefined;
            var15 = var14.bind(var13)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var17[var12];
            var12 = var14.bind(var13)(var12);
            var14 = var12.t;
            if(var5) { _fun0001_ip = 301; continue _fun0001 }
 268:
            if(var3) { _fun0001_ip = 286; continue _fun0001 }
 271:
            var12 = var14.jQy3aG;
            var12 = var15.bind(var16)(var12);
            _fun0001_ip = 299; continue _fun0001;
 286:
            var13 = var14.ICPhqa;
            var12 = var15.bind(var16)(var13);
 299:
            _fun0001_ip = 331; continue _fun0001;
 301:
            if(var7) { _fun0001_ip = 317; continue _fun0001 }
 304:
            var13 = var14.g8i/bW;
            var13 = var15.bind(var16)(var13);
            _fun0001_ip = 328; continue _fun0001;
 317:
            var14 = var14.vLklfH;
            var13 = var15.bind(var16)(var14);
 328:
            var12 = var13;
 331:
            _fun0001_ip = 390; continue _fun0001;
 333:
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var13 = 1;
            var14 = var18[var13];
            var16 = undefined;
            var14 = var17.bind(var16)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var18[var13];
            var13 = var17.bind(var16)(var13);
            var13 = var13.t;
            var13 = var13.xFb68v;
            var12 = var14.bind(var15)(var13);
 390:
            var4 = var12;
 393:
            _fun0001_ip = 736; continue _fun0001;
 398:
            if(var11) { _fun0001_ip = 483; continue _fun0001 }
 401:
            var15 = _closure1_slot0;
            var16 = _closure1_slot1;
            var11 = 1;
            var12 = var16[var11];
            var14 = undefined;
            var12 = var15.bind(var14)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var15.bind(var14)(var11);
            var11 = var11.t;
            if(var1) { _fun0001_ip = 465; continue _fun0001 }
 450:
            var1 = var11.0LMpW1;
            var1 = var12.bind(var13)(var1);
            _fun0001_ip = 478; continue _fun0001;
 465:
            var11 = var11.xE9WGh;
            var1 = var12.bind(var13)(var11);
 478:
            _fun0001_ip = 733; continue _fun0001;
 483:
            if(var10) { _fun0001_ip = 568; continue _fun0001 }
 486:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var10 = 1;
            var11 = var15[var10];
            var13 = undefined;
            var11 = var14.bind(var13)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var15[var10];
            var10 = var14.bind(var13)(var10);
            var10 = var10.t;
            if(var3) { _fun0001_ip = 550; continue _fun0001 }
 535:
            var3 = var10.GM0xaW;
            var3 = var11.bind(var12)(var3);
            _fun0001_ip = 563; continue _fun0001;
 550:
            var10 = var10.hU4kIS;
            var3 = var11.bind(var12)(var10);
 563:
            _fun0001_ip = 730; continue _fun0001;
 568:
            if(!var9) { _fun0001_ip = 574; continue _fun0001 }
 571:
            if(var5) { _fun0001_ip = 670; continue _fun0001 }
 574:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var9 = 1;
            var10 = var14[var9];
            var12 = undefined;
            var10 = var13.bind(var12)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var9 = var9.t;
            if(var5) { _fun0001_ip = 638; continue _fun0001 }
 623:
            var5 = var9.Eoynp6;
            var5 = var10.bind(var11)(var5);
            _fun0001_ip = 668; continue _fun0001;
 638:
            if(var7) { _fun0001_ip = 654; continue _fun0001 }
 641:
            var7 = var9.g8i/bW;
            var7 = var10.bind(var11)(var7);
            _fun0001_ip = 665; continue _fun0001;
 654:
            var9 = var9.vLklfH;
            var7 = var10.bind(var11)(var9);
 665:
            var5 = var7;
 668:
            _fun0001_ip = 727; continue _fun0001;
 670:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 1;
            var9 = var13[var7];
            var11 = undefined;
            var9 = var12.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var13[var7];
            var7 = var12.bind(var11)(var7);
            var7 = var7.t;
            var7 = var7.xFb68v;
            var5 = var9.bind(var10)(var7);
 727:
            var3 = var5;
 730:
            var1 = var3;
 733:
            var4 = var1;
 736:
            _fun0001_ip = 810; continue _fun0001;
 738:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 1;
            var5 = var10[var1];
            var3 = undefined;
            var5 = var9.bind(var3)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var1 = var10[var1];
            var1 = var9.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.uERlTU;
            var1 = {};
            var8 = var8.name;
            var1['appName'] = var8;
            var4 = var5.bind(var7)(var3, var1);
 810:
            var5 = var2.isPremium;
            var8 = var2.hasJoinedEmojiSourceGuild;
            var10 = var2.isUnusableRoleSubscriptionEmoji;
            var9 = var2.emojiComesFromCurrentGuild;
            var1 = var2.isDiscoverable;
            var3 = _closure1_slot3;
            var7 = var3.DEFAULT;
            if(!var5) { _fun0001_ip = 871; continue _fun0001 }
 853:
            if(var8) { _fun0001_ip = 871; continue _fun0001 }
 856:
            if(!var1) { _fun0001_ip = 871; continue _fun0001 }
 859:
            var3 = _closure1_slot3;
            var3 = var3.CROSS_SERVER;
            _fun0001_ip = 942; continue _fun0001;
 871:
            if(var5) { _fun0001_ip = 906; continue _fun0001 }
 874:
            if(!var8) { _fun0001_ip = 906; continue _fun0001 }
 877:
            if(var10) { _fun0001_ip = 906; continue _fun0001 }
 880:
            var10 = _closure1_slot3;
            if(var9) { _fun0001_ip = 895; continue _fun0001 }
 887:
            var9 = var10.UPSELL_CROSS_SERVER_JOINED;
            _fun0001_ip = 901; continue _fun0001;
 895:
            var9 = var10.UPSELL_CURRENT_SERVER_JOINED;
 901:
            var3 = var9;
            _fun0001_ip = 942; continue _fun0001;
 906:
            if(var5) { _fun0001_ip = 912; continue _fun0001 }
 909:
            var5 = var8;
 912:
            var3 = var7;
            if(var5) { _fun0001_ip = 942; continue _fun0001 }
 918:
            var5 = _closure1_slot3;
            if(var1) { _fun0001_ip = 933; continue _fun0001 }
 925:
            var1 = var5.UPSELL_CROSS_SERVER_UNJOINABLE;
            _fun0001_ip = 939; continue _fun0001;
 933:
            var1 = var5.UPSELL_CROSS_SERVER_JOINABLE;
 939:
            var3 = var1;
 942:
            var1 = {};
            var8 = var2.isPremium;
            var7 = var2.hasJoinedEmojiSourceGuild;
            var5 = var2.isUnusableRoleSubscriptionEmoji;
            var9 = var2.isDiscoverable;
            var2 = !var7;
            if(!var2) { _fun0001_ip = 977; continue _fun0001 }
 974:
            var2 = var9;
 977:
            if(!var8) { _fun0001_ip = 986; continue _fun0001 }
 980:
            if(var2) { _fun0001_ip = 1118; continue _fun0001 }
 986:
            if(var8) { _fun0001_ip = 1083; continue _fun0001 }
 989:
            if(!var7) { _fun0001_ip = 995; continue _fun0001 }
 992:
            if(!var5) { _fun0001_ip = 998; continue _fun0001 }
 995:
            if(!var2) { _fun0001_ip = 1083; continue _fun0001 }
 998:
            var2 = {};
            var5 = _closure1_slot4;
            var5 = var5.GET_PREMIUM;
            var2['type'] = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 1;
            var7 = var11[var5];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var11[var5];
            var5 = var10.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.gl/XHB;
            var5 = var7.bind(var8)(var5);
            var2['text'] = var5;
            var5 = null;
            var2['description'] = var5;
            _fun0001_ip = 1116; continue _fun0001;
 1083:
            var5 = {'type': null, 'text': null, 'description': null};
            var7 = _closure1_slot4;
            var7 = var7.UNAVAILABLE;
            var5['type'] = var7;
            var2 = var5;
 1116:
            _fun0001_ip = 1204; continue _fun0001;
 1118:
            var5 = {};
            var7 = _closure1_slot4;
            var7 = var7.JOIN_GUILD;
            var5['type'] = var7;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 1;
            var7 = var11[var6];
            var9 = undefined;
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.riu2R0;
            var6 = var7.bind(var8)(var6);
            var5['text'] = var6;
            var6 = null;
            var5['description'] = var6;
            var2 = var5;
 1204:
            var21 = var1;
            var20 = var2;
            var2 = copyDataProperties(var21, var20);
            var2 = 'emojiDescription';
            var1[var2] = var4;
            var2 = 'analyticsType';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['getEmojiPopoutData'] = var2;
    return var1;
})();